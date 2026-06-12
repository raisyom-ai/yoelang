import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

/**
 * GET /api/payment/verify
 * 
 * Checks the status of a payment.
 * In production, this would also query the FedaPay/CinetPay API.
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

    const payment = await prisma.payment.findUnique({
      where: { id: paymentId },
    })

    if (!payment) {
      return NextResponse.json(
        { error: 'Paiement non trouvé' },
        { status: 404 }
      )
    }

    // In production, for real providers, verify with their API:
    //
    // FedaPay:
    // const fedapayCheck = await fetch(
    //   `https://api.fedapay.com/v1/transactions/${payment.providerRef}`,
    //   { headers: { 'Authorization': `Bearer ${process.env.FEDAPAY_SECRET_KEY}` } }
    // )
    // const fedapayData = await fedapayCheck.json()
    // if (fedapayData.status === 'approved') { ... }
    //
    // CinetPay:
    // const cinetpayCheck = await fetch('https://api-checkout.cinetpay.com/v2/payment/check', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     apikey: process.env.CINETPAY_API_KEY,
    //     site_id: process.env.CINETPAY_SITE_ID,
    //     transaction_id: payment.providerRef,
    //   }),
    // })

    // For demo: simulate auto-confirmation after a delay
    // If payment is pending and was created more than 5 seconds ago, mark as success
    if (payment.status === 'pending') {
      const elapsed = Date.now() - payment.createdAt.getTime()
      if (elapsed > 5000) {
        // Simulate successful payment
        await prisma.payment.update({
          where: { id: paymentId },
          data: {
            status: 'success',
            paidAt: new Date(),
          },
        })

        // Activate premium for the user
        await activatePremium(payment.userId, payment.planId)

        // Refresh payment data
        const updatedPayment = await prisma.payment.findUnique({
          where: { id: paymentId },
        })

        return NextResponse.json({
          success: true,
          payment: updatedPayment,
          activated: true,
        })
      }
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
  // Map plan IDs to the store's premium plan values
  const planMap: Record<string, string> = {
    essentiel: 'essentiel',
    complet: 'complet',
    integral: 'integral',
  }

  const premiumPlan = planMap[planId] || 'essentiel'

  await prisma.user.update({
    where: { id: userId },
    data: {
      isPremium: true,
      premiumPlan: premiumPlan,
    },
  })
}
