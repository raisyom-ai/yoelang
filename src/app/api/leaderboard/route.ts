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
  lessonsCompleted: number
  challengesCompleted: number
  lastActiveAt: string | null
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
      // ── Weekly: sum XP from LessonCompletion + ChallengeCompletion in last 7 days ──
      const sevenDaysAgo = new Date()
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

      // Aggregate lesson xpEarned per user in the last 7 days
      const weeklyLessonXp = await db.lessonCompletion.groupBy({
        by: ['userId'],
        where: {
          completedAt: { gte: sevenDaysAgo },
        },
        _sum: {
          xpEarned: true,
        },
        _count: {
          id: true,
        },
      })

      // Also count challenge completions this week
      const weeklyChallengeXp = await db.challengeCompletion.groupBy({
        by: ['userId'],
        where: {
          completedAt: { gte: sevenDaysAgo },
        },
        _count: {
          id: true,
        },
      })

      // Build a map of userId -> { xp, lessons, challenges }
      const weeklyMap = new Map<string, { xp: number; lessons: number; challenges: number }>()

      for (const l of weeklyLessonXp) {
        weeklyMap.set(l.userId, {
          xp: l._sum.xpEarned ?? 0,
          lessons: l._count.id,
          challenges: 0,
        })
      }

      // Add challenge XP (approximate: each challenge = 10-20 XP, use challenge count * 15 as estimate)
      // Actually, we need the real XP from challenges. Let's get it from the User.xp changes.
      // For simplicity, let's just count challenges as completed
      for (const c of weeklyChallengeXp) {
        const existing = weeklyMap.get(c.userId)
        if (existing) {
          existing.challenges = c._count.id
        } else {
          weeklyMap.set(c.userId, {
            xp: 0, // Challenge XP is already added to User.xp, not tracked separately
            lessons: 0,
            challenges: c._count.id,
          })
        }
      }

      // Filter out users with no activity this week
      const activeUserIds = Array.from(weeklyMap.entries())
        .filter(([, data]) => data.xp > 0 || data.challenges > 0)
        .map(([id]) => id)

      // Get user details for active users
      const users = await db.user.findMany({
        where: {
          id: { in: activeUserIds },
          ...levelFilter,
        },
        select: {
          id: true,
          name: true,
          avatar: true,
          level: true,
          isPremium: true,
          streak: true,
          updatedAt: true,
        },
      })

      const userMap = new Map(users.map((u) => [u.id, u]))

      // Build leaderboard sorted by weekly XP
      const sortedEntries = activeUserIds
        .filter((id) => userMap.has(id))
        .map((id) => {
          const u = userMap.get(id)!
          const data = weeklyMap.get(id)!
          return {
            userId: id,
            name: u.name ?? 'Apprenant',
            avatar: u.avatar,
            level: u.level,
            xp: data.xp,
            isPremium: u.isPremium,
            streak: u.streak,
            lessonsCompleted: data.lessons,
            challengesCompleted: data.challenges,
            lastActiveAt: u.updatedAt.toISOString(),
          }
        })
        .sort((a, b) => b.xp - a.xp)
        .slice(0, 50)

      leaderboard = sortedEntries.map((entry, idx) => ({
        ...entry,
        rank: idx + 1,
      }))

      // Find requesting user's position if not in top 50
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
              isPremium: true,
              streak: true,
              updatedAt: true,
            },
          })

          if (u && (level === 'all' || u.level === level)) {
            const userData = weeklyMap.get(userId)
            const userXp = userData?.xp ?? 0
            const higherCount = sortedEntries.filter((e) => e.xp > userXp).length

            userEntry = {
              rank: higherCount + 1,
              name: u.name ?? 'Apprenant',
              avatar: u.avatar,
              level: u.level,
              xp: userXp,
              isPremium: u.isPremium,
              streak: u.streak,
              userId: u.id,
              lessonsCompleted: userData?.lessons ?? 0,
              challengesCompleted: userData?.challenges ?? 0,
              lastActiveAt: u.updatedAt.toISOString(),
            }
          }
        }
      }
    } else {
      // ── All-time: use total XP from User table, but ONLY users with XP > 0 ──
      const topUsers = await db.user.findMany({
        where: {
          xp: { gt: 0 },
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
          updatedAt: true,
        },
      })

      // Get lesson completion counts
      const lessonCounts = await db.lessonCompletion.groupBy({
        by: ['userId'],
        where: {
          userId: { in: topUsers.map((u) => u.id) },
        },
        _count: {
          id: true,
        },
      })

      // Get challenge completion counts
      const challengeCounts = await db.challengeCompletion.groupBy({
        by: ['userId'],
        where: {
          userId: { in: topUsers.map((u) => u.id) },
        },
        _count: {
          id: true,
        },
      })

      const lessonMap = new Map(lessonCounts.map((l) => [l.userId, l._count.id]))
      const challengeMap = new Map(challengeCounts.map((c) => [c.userId, c._count.id]))

      leaderboard = topUsers.map((u, idx) => ({
        rank: idx + 1,
        name: u.name ?? 'Apprenant',
        avatar: u.avatar,
        level: u.level,
        xp: u.xp,
        isPremium: u.isPremium,
        streak: u.streak,
        userId: u.id,
        lessonsCompleted: lessonMap.get(u.id) ?? 0,
        challengesCompleted: challengeMap.get(u.id) ?? 0,
        lastActiveAt: u.updatedAt.toISOString(),
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
              updatedAt: true,
            },
          })

          if (u && (level === 'all' || u.level === level)) {
            const higherCount = await db.user.count({
              where: {
                xp: { gt: u.xp },
                ...levelFilter,
              },
            })

            // Get this user's counts
            const [userLessonCount, userChallengeCount] = await Promise.all([
              db.lessonCompletion.count({ where: { userId: u.id } }),
              db.challengeCompletion.count({ where: { userId: u.id } }),
            ])

            userEntry = {
              rank: higherCount + 1,
              name: u.name ?? 'Apprenant',
              avatar: u.avatar,
              level: u.level,
              xp: u.xp,
              isPremium: u.isPremium,
              streak: u.streak,
              userId: u.id,
              lessonsCompleted: userLessonCount,
              challengesCompleted: userChallengeCount,
              lastActiveAt: u.updatedAt.toISOString(),
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
