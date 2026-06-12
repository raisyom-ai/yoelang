import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ error: 'UserId requis' }, { status: 400 })
    }

    const user = await db.user.findUnique({
      where: { id: userId },
      include: {
        progress: true,
        badges: true,
        completions: {
          include: { lesson: true },
          orderBy: { completedAt: 'desc' },
          take: 20,
        },
      },
    })

    if (!user) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 })
    }

    const { password: _pwd, ...userWithoutPassword } = user
    void _pwd

    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
    })
  } catch (error) {
    console.error('Get user error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { userId, ...updates } = await req.json()

    if (!userId) {
      return NextResponse.json({ error: 'UserId requis' }, { status: 400 })
    }

    // Only allow safe fields to be updated
    const allowedFields = [
      'name', 'level', 'xp', 'streak', 'coins', 'isPremium', 'premiumPlan',
      'dailyGoal', 'notifications', 'darkMode', 'soundEnabled',
    ]
    
    const safeUpdates: Record<string, unknown> = {}
    for (const key of allowedFields) {
      if (key in updates) {
        safeUpdates[key] = updates[key]
      }
    }

    const user = await db.user.update({
      where: { id: userId },
      data: safeUpdates,
    })

    const { password: _pwd2, ...userWithoutPassword } = user
    void _pwd2

    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
    })
  } catch (error) {
    console.error('Update user error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
