import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/admin/payments — List all payments with filters
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const adminUserId = searchParams.get('adminUserId')
    const status = searchParams.get('status') || ''
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')

    if (!adminUserId) {
      return NextResponse.json({ error: 'Admin userId requis' }, { status: 400 })
    }

    const adminUser = await db.user.findUnique({ where: { id: adminUserId } })
    if (!adminUser || adminUser.role !== 'admin') {
      return NextResponse.json({ error: 'Accès non autorisé' }, { status: 403 })
    }

    const where: Record<string, unknown> = {}
    if (status) {
      where.status = status
    }

    const [payments, total] = await Promise.all([
      db.payment.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          user: {
            select: { id: true, email: true, name: true },
          },
        },
      }),
      db.payment.count({ where }),
    ])

    return NextResponse.json({
      success: true,
      payments,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Admin payments list error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

// PUT /api/admin/payments — Approve or reject a payment
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json()
    const { adminUserId, paymentId, action } = body

    if (!adminUserId || !paymentId || !action) {
      return NextResponse.json({ error: 'Paramètres manquants' }, { status: 400 })
    }

    const adminUser = await db.user.findUnique({ where: { id: adminUserId } })
    if (!adminUser || adminUser.role !== 'admin') {
      return NextResponse.json({ error: 'Accès non autorisé' }, { status: 403 })
    }

    const payment = await db.payment.findUnique({ where: { id: paymentId } })
    if (!payment) {
      return NextResponse.json({ error: 'Paiement introuvable' }, { status: 404 })
    }

    if (action === 'approve') {
      // Update payment status and activate premium for the user
      await db.payment.update({
        where: { id: paymentId },
        data: {
          status: 'success',
          paidAt: new Date(),
        },
      })

      // Activate premium for the user
      await db.user.update({
        where: { id: payment.userId },
        data: {
          isPremium: true,
          premiumPlan: payment.planId,
        },
      })

      return NextResponse.json({ success: true, message: 'Paiement approuvé et premium activé' })
    }

    if (action === 'reject') {
      await db.payment.update({
        where: { id: paymentId },
        data: { status: 'failed' },
      })

      return NextResponse.json({ success: true, message: 'Paiement rejeté' })
    }

    return NextResponse.json({ error: 'Action inconnue' }, { status: 400 })
  } catch (error) {
    console.error('Admin payment action error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
