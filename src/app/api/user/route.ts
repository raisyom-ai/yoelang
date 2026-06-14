import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { formatUserResponse } from '@/lib/api-utils'

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

    // Verify user exists
    const existingUser = await db.user.findUnique({ where: { id: userId } })
    if (!existingUser) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 })
    }

    // Only allow safe fields to be updated
    // SECURITY: isPremium and premiumPlan are NOT included — only admin/payments can change these
    const allowedFields = [
      'name', 'avatar', 'level', 'xp', 'streak', 'coins',
      'dailyGoal', 'notifications', 'darkMode', 'soundEnabled',
    ]
    
    const safeUpdates: Record<string, unknown> = {}
    for (const key of allowedFields) {
      if (key in updates) {
        safeUpdates[key] = updates[key]
      }
    }

    // Validate level if being updated
    if (safeUpdates.level) {
      const VALID_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
      if (!VALID_LEVELS.includes(safeUpdates.level as string)) {
        return NextResponse.json({ error: 'Niveau invalide' }, { status: 400 })
      }
    }

    const user = await db.user.update({
      where: { id: userId },
      data: safeUpdates,
    })

    return NextResponse.json({
      success: true,
      user: formatUserResponse(user),
    })
  } catch (error) {
    console.error('Update user error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
