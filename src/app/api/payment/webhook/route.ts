import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

/**
 * POST /api/payment/webhook
 *
 * Webhook endpoint for payment providers (FedaPay, CinetPay).
 * This is called by the provider when a payment status changes.
 *
 * Security: This endpoint verifies a webhook secret to prevent
 * unauthorized payment confirmations. Set WEBHOOK_SECRET in .env.
 */
export async function POST(req: NextRequest) {
  try {
    // Verify webhook secret if configured
    const webhookSecret = process.env.WEBHOOK_SECRET
    if (webhookSecret) {
      const providedSecret = req.headers.get('x-webhook-secret') || req.headers.get('authorization')?.replace('Bearer ', '')
      if (providedSecret !== webhookSecret) {
        return NextResponse.json({ error: 'Signature invalide' }, { status: 401 })
      }
    }

    const body = await req.json()
    const { eventType, paymentId, providerRef, status } = body

    // Find the payment by provider reference
    let payment
    if (providerRef) {
      payment = await db.payment.findFirst({
        where: { providerRef },
      })
    } else if (paymentId) {
      payment = await db.payment.findUnique({
        where: { id: paymentId },
      })
    }

    if (!payment) {
      return NextResponse.json(
        { error: 'Paiement non trouvé' },
        { status: 404 }
      )
    }

    // Don't process already completed payments
    if (payment.status === 'success') {
      return NextResponse.json({ success: true, message: 'Déjà traité' })
    }

    // Map provider status to our status
    const isSuccess = status === 'success' || status === 'approved' || status === 'ACCEPTED'
    const isFailed = status === 'failed' || status === 'declined' || status === 'REFUSED'

    if (isSuccess) {
      // Payment confirmed! Activate premium
      await db.payment.update({
        where: { id: payment.id },
        data: {
          status: 'success',
          paidAt: new Date(),
        },
      })

      // Activate premium
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

      console.log(`[Webhook] Premium activé pour ${payment.userId} - Plan: ${premiumPlan}`)

    } else if (isFailed) {
      await db.payment.update({
        where: { id: payment.id },
        data: { status: 'failed' },
      })
      console.log(`[Webhook] Paiement échoué pour ${payment.userId}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
