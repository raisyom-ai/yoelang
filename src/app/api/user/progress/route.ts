import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ error: 'UserId requis' }, { status: 400 })
    }

    // Load completed lessons
    const completions = await db.lessonCompletion.findMany({
      where: { userId },
      select: {
        lessonId: true,
        score: true,
        xpEarned: true,
        completedAt: true,
      },
      orderBy: { completedAt: 'desc' },
    })

    // Load certificates
    const certificates = await db.certificate.findMany({
      where: { userId },
      orderBy: { issuedAt: 'desc' },
    })

    // Load exam attempts
    const examAttempts = await db.examAttempt.findMany({
      where: { userId },
      orderBy: { completedAt: 'desc' },
    })

    // Load user badges
    const badges = await db.userBadge.findMany({
      where: { userId },
    })

    return NextResponse.json({
      success: true,
      completedLessons: completions.map((c) => c.lessonId),
      completions: completions.map((c) => ({
        lessonId: c.lessonId,
        score: c.score,
        xpEarned: c.xpEarned,
        completedAt: c.completedAt.toISOString(),
      })),
      certificates: certificates.map((cert) => ({
        id: cert.certificateId,
        level: cert.level,
        earnedAt: cert.issuedAt.toISOString(),
        totalLessons: cert.totalLessons,
        completedLessons: cert.completedLessons,
        avgScore: cert.avgLessonScore,
        xpAtCompletion: cert.xpAtCompletion,
        userName: cert.userName,
        examScore: cert.examScore,
        totalQuestions: cert.totalQuestions,
        correctAnswers: cert.correctAnswers,
      })),
      examAttempts: examAttempts.map((a) => ({
        level: a.level,
        score: a.score,
        totalQuestions: a.totalQuestions,
        correctAnswers: a.correctAnswers,
        passed: a.passed,
        xpEarned: a.xpEarned,
        completedAt: a.completedAt.toISOString(),
      })),
      earnedBadges: badges.map((b) => b.badgeId),
    })
  } catch (error) {
    console.error('Get user progress error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
