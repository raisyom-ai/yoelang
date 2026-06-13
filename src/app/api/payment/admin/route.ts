import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { ADMIN_CONFIG, PLAN_PRICES } from '@/lib/payment-config'

/**
 * GET /api/payment/admin
 * 
 * Lists all pending payments that need admin validation.
 * Requires admin password.
 * 
 * Query: password, status (optional filter)
 */
export async function GET(req: NextRequest) {
  try {
    const password = req.nextUrl.searchParams.get('password')
    const statusFilter = req.nextUrl.searchParams.get('status')

    // Verify admin password
    if (password !== ADMIN_CONFIG.password) {
      return NextResponse.json({ error: 'Mot de passe admin invalide' }, { status: 401 })
    }

    // Build query
    const where: Record<string, unknown> = {}
    if (statusFilter) {
      where.status = statusFilter
    } else {
      // Default: show pending_validation and pending
      where.status = { in: ['pending_validation', 'pending'] }
    }

    const payments = await db.payment.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            level: true,
            isPremium: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    // Get stats
    const stats = {
      totalPending: await db.payment.count({ where: { status: { in: ['pending_validation', 'pending'] } } }),
      totalApproved: await db.payment.count({ where: { status: 'success' } }),
      totalRejected: await db.payment.count({ where: { status: 'failed' } }),
      totalRevenue: await db.payment.aggregate({
        where: { status: 'success' },
        _sum: { amount: true },
      }),
    }

    return NextResponse.json({
      success: true,
      payments,
      stats: {
        ...stats,
        totalRevenueAmount: stats.totalRevenue._sum.amount || 0,
      },
    })
  } catch (error) {
    console.error('Admin payments list error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

/**
 * PUT /api/payment/admin
 * 
 * Approve or reject a pending payment.
 * Requires admin password.
 * 
 * Body: { password, paymentId, action: 'approve' | 'reject' }
 */
export async function PUT(req: NextRequest) {
  try {
    const { password, paymentId, action } = await req.json()

    // Verify admin password
    if (password !== ADMIN_CONFIG.password) {
      return NextResponse.json({ error: 'Mot de passe admin invalide' }, { status: 401 })
    }

    if (!paymentId || !action) {
      return NextResponse.json(
        { error: 'paymentId et action sont requis' },
        { status: 400 }
      )
    }

    if (!['approve', 'reject'].includes(action)) {
      return NextResponse.json(
        { error: 'Action invalide. Utilisez "approve" ou "reject"' },
        { status: 400 }
      )
    }

    const payment = await db.payment.findUnique({
      where: { id: paymentId },
      include: { user: true },
    })

    if (!payment) {
      return NextResponse.json({ error: 'Paiement non trouvé' }, { status: 404 })
    }

    if (payment.status === 'success') {
      return NextResponse.json({ error: 'Ce paiement a déjà été approuvé' }, { status: 400 })
    }

    if (action === 'approve') {
      // Approve payment and activate premium
      await db.payment.update({
        where: { id: paymentId },
        data: {
          status: 'success',
          paidAt: new Date(),
        },
      })

      // Activate premium for the user
      const planMap: Record<string, string> = {
        essentiel: 'essentiel',
        complet: 'complet',
        integral: 'integral',
      }
      const premiumPlan = planMap[payment.planId] || 'essentiel'

      await db.user.update({
        where: { id: payment.userId },
        data: {
          isPremium: true,
          premiumPlan: premiumPlan,
        },
      })

      console.log(`✅ [ADMIN] Premium activé pour ${payment.user.email} - Plan: ${premiumPlan} - ${payment.amount} FCFA`)

      return NextResponse.json({
        success: true,
        message: `Paiement approuvé. Premium activé pour ${payment.user.name || payment.user.email} - Plan ${premiumPlan}`,
        activated: true,
      })
    } else {
      // Reject payment
      await db.payment.update({
        where: { id: paymentId },
        data: { status: 'failed' },
      })

      console.log(`❌ [ADMIN] Paiement rejeté pour ${payment.user.email} - ${payment.amount} FCFA`)

      return NextResponse.json({
        success: true,
        message: `Paiement rejeté pour ${payment.user.name || payment.user.email}`,
        activated: false,
      })
    }
  } catch (error) {
    console.error('Admin payment action error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
