import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/admin/users — List all users with pagination & search
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const adminUserId = searchParams.get('adminUserId')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const search = searchParams.get('search') || ''

    if (!adminUserId) {
      return NextResponse.json({ error: 'Admin userId requis' }, { status: 400 })
    }

    const adminUser = await db.user.findUnique({ where: { id: adminUserId } })
    if (!adminUser || adminUser.role !== 'admin') {
      return NextResponse.json({ error: 'Accès non autorisé' }, { status: 403 })
    }

    const where: Record<string, unknown> = { role: 'user' }
    if (search) {
      where.OR = [
        { email: { contains: search } },
        { name: { contains: search } },
      ]
    }

    const [users, total] = await Promise.all([
      db.user.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          email: true,
          name: true,
          level: true,
          xp: true,
          streak: true,
          coins: true,
          isPremium: true,
          premiumPlan: true,
          createdAt: true,
          _count: {
            select: {
              completions: true,
              payments: true,
              chatMessages: true,
            },
          },
        },
      }),
      db.user.count({ where }),
    ])

    return NextResponse.json({
      success: true,
      users,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Admin users list error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

// PUT /api/admin/users — Update user (toggle premium, change plan, etc.)
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json()
    const { adminUserId, targetUserId, action, data } = body

    if (!adminUserId || !targetUserId || !action) {
      return NextResponse.json({ error: 'Paramètres manquants' }, { status: 400 })
    }

    const adminUser = await db.user.findUnique({ where: { id: adminUserId } })
    if (!adminUser || adminUser.role !== 'admin') {
      return NextResponse.json({ error: 'Accès non autorisé' }, { status: 403 })
    }

    const targetUser = await db.user.findUnique({ where: { id: targetUserId } })
    if (!targetUser) {
      return NextResponse.json({ error: 'Utilisateur introuvable' }, { status: 404 })
    }

    switch (action) {
      case 'toggle_premium': {
        const updated = await db.user.update({
          where: { id: targetUserId },
          data: {
            isPremium: !targetUser.isPremium,
            premiumPlan: !targetUser.isPremium ? (data?.plan || 'essentiel') : null,
          },
        })
        return NextResponse.json({ success: true, user: updated })
      }

      case 'change_plan': {
        if (!data?.plan) {
          return NextResponse.json({ error: 'Plan requis' }, { status: 400 })
        }
        const updated = await db.user.update({
          where: { id: targetUserId },
          data: { premiumPlan: data.plan, isPremium: true },
        })
        return NextResponse.json({ success: true, user: updated })
      }

      case 'update_level': {
        if (!data?.level) {
          return NextResponse.json({ error: 'Niveau requis' }, { status: 400 })
        }
        const updated = await db.user.update({
          where: { id: targetUserId },
          data: { level: data.level },
        })
        return NextResponse.json({ success: true, user: updated })
      }

      case 'delete_user': {
        // Delete all related records first (order matters for FK constraints)
        await db.examAttempt.deleteMany({ where: { userId: targetUserId } })
        await db.certificate.deleteMany({ where: { userId: targetUserId } })
        await db.lessonCompletion.deleteMany({ where: { userId: targetUserId } })
        await db.userBadge.deleteMany({ where: { userId: targetUserId } })
        await db.userProgress.deleteMany({ where: { userId: targetUserId } })
        await db.chatMessage.deleteMany({ where: { userId: targetUserId } })
        await db.payment.deleteMany({ where: { userId: targetUserId } })
        await db.user.delete({ where: { id: targetUserId } })
        return NextResponse.json({ success: true, message: 'Utilisateur supprimé' })
      }

      default:
        return NextResponse.json({ error: 'Action inconnue' }, { status: 400 })
    }
  } catch (error) {
    console.error('Admin user update error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
