import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/admin/stats — Admin dashboard statistics
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const adminUserId = searchParams.get('adminUserId')

    if (!adminUserId) {
      return NextResponse.json({ error: 'Admin userId requis' }, { status: 400 })
    }

    const adminUser = await db.user.findUnique({ where: { id: adminUserId } })
    if (!adminUser || adminUser.role !== 'admin') {
      return NextResponse.json({ error: 'Accès non autorisé' }, { status: 403 })
    }

    // Get all stats in parallel
    const [
      totalUsers,
      premiumUsers,
      totalPayments,
      pendingPayments,
      successPayments,
      totalRevenue,
      recentUsers,
      recentPayments,
    ] = await Promise.all([
      db.user.count({ where: { role: 'user' } }),
      db.user.count({ where: { role: 'user', isPremium: true } }),
      db.payment.count(),
      db.payment.count({ where: { status: { in: ['pending', 'pending_validation'] } } }),
      db.payment.count({ where: { status: 'success' } }),
      db.payment.aggregate({ where: { status: 'success' }, _sum: { amount: true } }),
      db.user.findMany({
        where: { role: 'user' },
        orderBy: { createdAt: 'desc' },
        take: 10,
        select: {
          id: true,
          email: true,
          name: true,
          level: true,
          xp: true,
          streak: true,
          isPremium: true,
          premiumPlan: true,
          createdAt: true,
        },
      }),
      db.payment.findMany({
        orderBy: { createdAt: 'desc' },
        take: 20,
        include: {
          user: {
            select: { id: true, email: true, name: true },
          },
        },
      }),
    ])

    // Get level distribution
    const levelDistribution = await db.user.groupBy({
      by: ['level'],
      where: { role: 'user' },
      _count: { level: true },
    })

    // Get payment method distribution
    const paymentMethodDistribution = await db.payment.groupBy({
      by: ['paymentMethod'],
      _count: { paymentMethod: true },
      _sum: { amount: true },
    })

    // Get plan distribution
    const planDistribution = await db.user.groupBy({
      by: ['premiumPlan'],
      where: { role: 'user', isPremium: true },
      _count: { premiumPlan: true },
    })

    return NextResponse.json({
      success: true,
      stats: {
        totalUsers,
        premiumUsers,
        freeUsers: totalUsers - premiumUsers,
        totalPayments,
        pendingPayments,
        successPayments,
        totalRevenue: totalRevenue._sum.amount || 0,
      },
      levelDistribution: levelDistribution.map((l) => ({
        level: l.level,
        count: l._count.level,
      })),
      paymentMethodDistribution: paymentMethodDistribution.map((p) => ({
        method: p.paymentMethod,
        count: p._count.paymentMethod,
        total: p._sum.amount || 0,
      })),
      planDistribution: planDistribution.map((p) => ({
        plan: p.premiumPlan,
        count: p._count.premiumPlan,
      })),
      recentUsers,
      recentPayments,
    })
  } catch (error) {
    console.error('Admin stats error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
