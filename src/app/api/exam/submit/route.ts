import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getTotalLessonsForLevel } from '@/lib/course-data'

function generateCertificateId(level: string): string {
  const year = new Date().getFullYear()
  const seq = String(Math.floor(Math.random() * 999999)).padStart(6, '0')
  return `YOELANG-${level}-${year}-${seq}`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { userId, level, score, totalQuestions, correctAnswers, passed, xpEarned } = body

    // Validate required fields
    if (!userId || !level || typeof score !== 'number' || typeof totalQuestions !== 'number') {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create exam attempt record
    const attempt = await db.examAttempt.create({
      data: {
        userId,
        level,
        score,
        totalQuestions,
        correctAnswers: correctAnswers ?? 0,
        passed: passed ?? false,
        xpEarned: xpEarned ?? 0,
      },
    })

    // If passed, update user's level, XP, and issue certificate
    let newLevel: string | null = null
    let certificateId: string | null = null

    if (passed) {
      const LEVEL_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
      const currentIdx = LEVEL_ORDER.indexOf(level)

      if (currentIdx < LEVEL_ORDER.length - 1) {
        newLevel = LEVEL_ORDER[currentIdx + 1]
      }

      // Get user data for certificate
      const user = await db.user.findUnique({ where: { id: userId } })

      if (user) {
        // Count completed lessons for this level
        const totalLessons = getTotalLessonsForLevel(level)
        const levelPrefix = level.toLowerCase() + '-l'
        const completedCount = await db.lessonCompletion.count({
          where: {
            userId,
            lessonId: { startsWith: levelPrefix },
          },
        })

        // Calculate average lesson score
        const completions = await db.lessonCompletion.findMany({
          where: {
            userId,
            lessonId: { startsWith: levelPrefix },
          },
          select: { score: true },
        })
        const avgScore = completions.length > 0
          ? Math.round(completions.reduce((sum, c) => sum + c.score, 0) / completions.length)
          : score

        // Create certificate (only if one doesn't already exist for this level)
        const existingCert = await db.certificate.findUnique({
          where: { userId_level: { userId, level } },
        })

        if (!existingCert) {
          const certId = generateCertificateId(level)
          const certificate = await db.certificate.create({
            data: {
              userId,
              certificateId: certId,
              level,
              examScore: score,
              totalQuestions,
              correctAnswers: correctAnswers ?? 0,
              totalLessons,
              completedLessons: completedCount,
              avgLessonScore: avgScore,
              xpAtCompletion: (user.xp || 0) + (xpEarned || 0),
              userName: user.name || user.email.split('@')[0],
            },
          })
          certificateId = certificate.certificateId
        } else {
          certificateId = existingCert.certificateId
        }

        // Update user record
        const updateData: Record<string, unknown> = {
          xp: { increment: xpEarned || 0 },
          coins: { increment: Math.floor((xpEarned || 0) / 2) },
        }

        if (newLevel) {
          updateData.level = newLevel
        }

        await db.user.update({
          where: { id: userId },
          data: updateData,
        })
      }
    }

    return NextResponse.json({
      success: true,
      attemptId: attempt.id,
      newLevel,
      xpEarned: xpEarned || 0,
      certificateId,
    })
  } catch (error) {
    console.error('Exam submit error:', error)
    return NextResponse.json(
      { error: 'Failed to save exam results' },
      { status: 500 }
    )
  }
}
