import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const { userId, lessonId, score, xpEarned } = await req.json()

    if (!userId || !lessonId) {
      return NextResponse.json(
        { error: 'UserId et lessonId requis' },
        { status: 400 }
      )
    }

    // Create or update lesson completion
    const completion = await db.lessonCompletion.upsert({
      where: {
        userId_lessonId: { userId, lessonId },
      },
      create: {
        userId,
        lessonId,
        score: score ?? 0,
        xpEarned: xpEarned ?? 0,
      },
      update: {
        score: score ?? 0,
        xpEarned: xpEarned ?? 0,
      },
    })

    // Also update user XP
    if (xpEarned && xpEarned > 0) {
      await db.user.update({
        where: { id: userId },
        data: {
          xp: { increment: xpEarned },
          coins: { increment: Math.floor(xpEarned / 2) },
        },
      })
    }

    return NextResponse.json({
      success: true,
      completionId: completion.id,
    })
  } catch (error) {
    console.error('Lesson completion error:', error)
    return NextResponse.json(
      { error: 'Failed to save lesson completion' },
      { status: 500 }
    )
  }
}
