import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

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

    // If passed, update user's level and XP
    let newLevel: string | null = null
    if (passed) {
      const LEVEL_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
      const currentIdx = LEVEL_ORDER.indexOf(level)

      if (currentIdx < LEVEL_ORDER.length - 1) {
        newLevel = LEVEL_ORDER[currentIdx + 1]
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

    return NextResponse.json({
      success: true,
      attemptId: attempt.id,
      newLevel,
      xpEarned: xpEarned || 0,
    })
  } catch (error) {
    console.error('Exam submit error:', error)
    return NextResponse.json(
      { error: 'Failed to save exam results' },
      { status: 500 }
    )
  }
}
