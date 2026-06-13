import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

/**
 * GET /api/payment/verify
 * 
 * Checks the status of a payment.
 * - For gateway mode: polls the provider API
 * - For direct mode: checks if admin has approved the payment
 * 
 * Query: paymentId
 */
export async function GET(req: NextRequest) {
  try {
    const paymentId = req.nextUrl.searchParams.get('paymentId')

    if (!paymentId) {
      return NextResponse.json(
        { error: 'paymentId est requis' },
        { status: 400 }
      )
    }

    const payment = await db.payment.findUnique({
      where: { id: paymentId },
    })

    if (!payment) {
      return NextResponse.json(
        { error: 'Paiement non trouvé' },
        { status: 404 }
      )
    }

    // ─── Direct transfer mode ────────────────────────────────────────
    // Payment is waiting for admin validation
    if (payment.status === 'pending_validation') {
      return NextResponse.json({
        success: true,
        payment,
        activated: false,
        message: 'En attente de validation par l\'administrateur',
      })
    }

    // ─── Gateway mode ────────────────────────────────────────────────
    // For demo: simulate auto-confirmation after a delay
    if (payment.status === 'pending') {
      const elapsed = Date.now() - payment.createdAt.getTime()
      if (elapsed > 5000) {
        // Simulate successful payment
        await db.payment.update({
          where: { id: paymentId },
          data: {
            status: 'success',
            paidAt: new Date(),
          },
        })

        // Activate premium for the user
        await activatePremium(payment.userId, payment.planId)

        // Refresh payment data
        const updatedPayment = await db.payment.findUnique({
          where: { id: paymentId },
        })

        return NextResponse.json({
          success: true,
          payment: updatedPayment,
          activated: true,
        })
      }
    }

    // Payment already succeeded
    if (payment.status === 'success') {
      return NextResponse.json({
        success: true,
        payment,
        activated: true,
      })
    }

    return NextResponse.json({
      success: true,
      payment,
      activated: payment.status === 'success',
    })
  } catch (error) {
    console.error('Payment verify error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

/**
 * Activate premium for a user after successful payment.
 */
async function activatePremium(userId: string, planId: string) {
  const planMap: Record<string, string> = {
    essentiel: 'essentiel',
    complet: 'complet',
    integral: 'integral',
  }

  const premiumPlan = planMap[planId] || 'essentiel'

  await db.user.update({
    where: { id: userId },
    data: {
      isPremium: true,
      premiumPlan: premiumPlan,
    },
  })
}
