import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

/**
 * POST /api/payment/webhook
 * 
 * Webhook endpoint for payment providers (FedaPay, CinetPay).
 * This is called by the provider when a payment status changes.
 * 
 * In production, you MUST verify the webhook signature:
 * - FedaPay: verify with FEDAPAY_SECRET_KEY
 * - CinetPay: verify with CINETPAY_API_KEY
 * 
 * Security: Always verify webhooks came from your payment provider!
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { eventType, paymentId, providerRef, status } = body

    // ─── Production verification examples ───────────────────────────────
    //
    // FedaPay webhook verification:
    // const signature = req.headers.get('x-fedapay-signature')
    // const expectedSig = crypto
    //   .createHmac('sha256', process.env.FEDAPAY_WEBHOOK_SECRET!)
    //   .update(JSON.stringify(body))
    //   .digest('hex')
    // if (signature !== expectedSig) {
    //   return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    // }
    //
    // CinetPay webhook verification:
    // const cpSign = body.sign
    // const expected = crypto
    //   .createHmac('sha256', process.env.CINETPAY_API_KEY!)
    //   .update(`${body.cpm_trans_id}${body.cpm_site_id}${body.cpm_amount}`)
    //   .digest('hex')
    // if (cpSign !== expected) {
    //   return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    // }
    // ─────────────────────────────────────────────────────────────────────

    // Find the payment by provider reference
    let payment
    if (providerRef) {
      payment = await prisma.payment.findFirst({
        where: { providerRef },
      })
    } else if (paymentId) {
      payment = await prisma.payment.findUnique({
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
    // FedaPay: 'approved' → success
    // CinetPay: 'ACCEPTED' → success
    const isSuccess = status === 'success' || status === 'approved' || status === 'ACCEPTED'
    const isFailed = status === 'failed' || status === 'declined' || status === 'REFUSED'

    if (isSuccess) {
      // Payment confirmed! Activate premium
      await prisma.payment.update({
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

      await prisma.user.update({
        where: { id: payment.userId },
        data: {
          isPremium: true,
          premiumPlan: premiumPlan,
        },
      })

      console.log(`✅ Premium activé pour ${payment.userId} - Plan: ${premiumPlan}`)

    } else if (isFailed) {
      await prisma.payment.update({
        where: { id: payment.id },
        data: { status: 'failed' },
      })
      console.log(`❌ Paiement échoué pour ${payment.userId}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
