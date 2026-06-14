import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// ─── Types ───────────────────────────────────────────────────────────────────

interface LeaderboardEntry {
  rank: number
  name: string
  avatar: string | null
  level: string
  xp: number
  isPremium: boolean
  streak: number
  userId: string
}

// ─── GET /api/leaderboard ────────────────────────────────────────────────────
// Query params:
//   period: "weekly" | "alltime"  (default: "alltime")
//   level:  "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "all"  (default: "all")
//   userId: optional — used to find the requesting user's position

export async function GET(req: NextRequest) {
  try {
    const period = req.nextUrl.searchParams.get('period') ?? 'alltime'
    const level = req.nextUrl.searchParams.get('level') ?? 'all'
    const userId = req.nextUrl.searchParams.get('userId')

    const validPeriods = ['weekly', 'alltime']
    const validLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'all']

    if (!validPeriods.includes(period)) {
      return NextResponse.json({ error: 'Période invalide' }, { status: 400 })
    }
    if (!validLevels.includes(level)) {
      return NextResponse.json({ error: 'Niveau invalide' }, { status: 400 })
    }

    // Build level filter
    const levelFilter = level !== 'all' ? { level } : {}

    let leaderboard: LeaderboardEntry[] = []
    let userEntry: LeaderboardEntry | null = null

    if (period === 'weekly') {
      // ── Weekly: sum XP from LessonCompletion in last 7 days ──
      const sevenDaysAgo = new Date()
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

      // Aggregate xpEarned per user in the last 7 days
      const weeklyXp = await db.lessonCompletion.groupBy({
        by: ['userId'],
        where: {
          completedAt: { gte: sevenDaysAgo },
        },
        _sum: {
          xpEarned: true,
        },
        orderBy: {
          _sum: {
            xpEarned: 'desc',
          },
        },
        take: 50,
      })

      // Get user details for the top 50
      const userIds = weeklyXp.map((w) => w.userId)

      // Apply level filter if needed
      const users = await db.user.findMany({
        where: {
          id: { in: userIds },
          ...levelFilter,
        },
        select: {
          id: true,
          name: true,
          avatar: true,
          level: true,
          isPremium: true,
          streak: true,
        },
      })

      // Map user details + weekly XP, preserving sort order
      const userMap = new Map(users.map((u) => [u.id, u]))

      leaderboard = weeklyXp
        .filter((w) => userMap.has(w.userId)) // only include users matching level filter
        .map((w, idx) => {
          const u = userMap.get(w.userId)!
          return {
            rank: idx + 1,
            name: u.name ?? 'Apprenant',
            avatar: u.avatar,
            level: u.level,
            xp: w._sum.xpEarned ?? 0,
            isPremium: u.isPremium,
            streak: u.streak,
            userId: u.id,
          }
        })

      // If the requesting user is not in top 50, find their position
      if (userId) {
        const isInTop = leaderboard.some((e) => e.userId === userId)
        if (!isInTop) {
          // Get the user's weekly XP
          const userWeeklyXp = await db.lessonCompletion.aggregate({
            where: {
              userId,
              completedAt: { gte: sevenDaysAgo },
            },
            _sum: {
              xpEarned: true,
            },
          })

          if (userWeeklyXp._sum.xpEarned && userWeeklyXp._sum.xpEarned > 0) {
            const u = await db.user.findUnique({
              where: { id: userId },
              select: {
                id: true,
                name: true,
                avatar: true,
                level: true,
                isPremium: true,
                streak: true,
              },
            })

            if (u && (level === 'all' || u.level === level)) {
              // Count how many users have more weekly XP
              // We need to count users with higher XP who also match the level filter
              const allWeeklyXp = await db.lessonCompletion.groupBy({
                by: ['userId'],
                where: {
                  completedAt: { gte: sevenDaysAgo },
                },
                _sum: {
                  xpEarned: true,
                },
              })

              // Get all user levels for filtering
              const allUserIds = allWeeklyXp.map((w) => w.userId)
              const allUsers = await db.user.findMany({
                where: {
                  id: { in: allUserIds },
                  ...levelFilter,
                },
                select: { id: true },
              })
              const filteredUserIds = new Set(allUsers.map((u) => u.id))

              const higherCount = allWeeklyXp.filter(
                (w) =>
                  filteredUserIds.has(w.userId) &&
                  (w._sum.xpEarned ?? 0) > (userWeeklyXp._sum.xpEarned ?? 0),
              ).length

              userEntry = {
                rank: higherCount + 1,
                name: u.name ?? 'Apprenant',
                avatar: u.avatar,
                level: u.level,
                xp: userWeeklyXp._sum.xpEarned ?? 0,
                isPremium: u.isPremium,
                streak: u.streak,
                userId: u.id,
              }
            }
          } else {
            // User has no weekly XP — put them at the end
            const u = await db.user.findUnique({
              where: { id: userId },
              select: {
                id: true,
                name: true,
                avatar: true,
                level: true,
                isPremium: true,
                streak: true,
              },
            })

            if (u && (level === 'all' || u.level === level)) {
              // Count all users with any weekly XP matching the filter
              const allWeeklyXp = await db.lessonCompletion.groupBy({
                by: ['userId'],
                where: {
                  completedAt: { gte: sevenDaysAgo },
                },
                _sum: {
                  xpEarned: true,
                },
              })

              const allUserIds = allWeeklyXp.map((w) => w.userId)
              const allUsers = await db.user.findMany({
                where: {
                  id: { in: allUserIds },
                  ...levelFilter,
                },
                select: { id: true },
              })

              userEntry = {
                rank: allUsers.length + 1,
                name: u.name ?? 'Apprenant',
                avatar: u.avatar,
                level: u.level,
                xp: 0,
                isPremium: u.isPremium,
                streak: u.streak,
                userId: u.id,
              }
            }
          }
        }
      }
    } else {
      // ── All-time: use total XP from User table ──
      const topUsers = await db.user.findMany({
        where: {
          ...levelFilter,
        },
        orderBy: { xp: 'desc' },
        take: 50,
        select: {
          id: true,
          name: true,
          avatar: true,
          level: true,
          xp: true,
          isPremium: true,
          streak: true,
        },
      })

      leaderboard = topUsers.map((u, idx) => ({
        rank: idx + 1,
        name: u.name ?? 'Apprenant',
        avatar: u.avatar,
        level: u.level,
        xp: u.xp,
        isPremium: u.isPremium,
        streak: u.streak,
        userId: u.id,
      }))

      // Find the requesting user's position if not in top 50
      if (userId) {
        const isInTop = leaderboard.some((e) => e.userId === userId)
        if (!isInTop) {
          const u = await db.user.findUnique({
            where: { id: userId },
            select: {
              id: true,
              name: true,
              avatar: true,
              level: true,
              xp: true,
              isPremium: true,
              streak: true,
            },
          })

          if (u && (level === 'all' || u.level === level)) {
            const higherCount = await db.user.count({
              where: {
                xp: { gt: u.xp },
                ...levelFilter,
              },
            })

            userEntry = {
              rank: higherCount + 1,
              name: u.name ?? 'Apprenant',
              avatar: u.avatar,
              level: u.level,
              xp: u.xp,
              isPremium: u.isPremium,
              streak: u.streak,
              userId: u.id,
            }
          }
        }
      }
    }

    return NextResponse.json({
      success: true,
      leaderboard,
      userEntry,
    })
  } catch (error) {
    console.error('Leaderboard GET error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
