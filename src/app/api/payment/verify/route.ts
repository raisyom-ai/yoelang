import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

/**
 * GET /api/payment/verify
 * 
 * Checks the status of a payment.
 * - For gateway mode: would poll the provider API
 * - For direct mode: checks if admin has approved the payment
 * 
 * SECURITY: No auto-approval. Payments are only confirmed via:
 * 1. Admin manual approval (admin panel)
 * 2. Webhook callback from payment provider
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

    // Check if payment has been approved (by admin or webhook)
    const activated = payment.status === 'success'

    // Check if payment has expired
    if (payment.expiresAt && new Date() > new Date(payment.expiresAt) && payment.status === 'pending') {
      await db.payment.update({
        where: { id: paymentId },
        data: { status: 'expired' },
      })
      return NextResponse.json({
        success: true,
        payment: { ...payment, status: 'expired' },
        activated: false,
        message: 'Le délai de paiement a expiré. Veuillez réessayer.',
      })
    }

    // Status-specific messages
    let message: string | undefined
    if (payment.status === 'pending_validation') {
      message = 'En attente de validation par l\'administrateur'
    } else if (payment.status === 'pending') {
      message = 'En attente de confirmation du fournisseur de paiement'
    } else if (payment.status === 'failed') {
      message = 'Le paiement a été refusé'
    } else if (payment.status === 'success') {
      message = 'Paiement confirmé ! Premium activé.'
    }

    return NextResponse.json({
      success: true,
      payment,
      activated,
      message,
    })
  } catch (error) {
    console.error('Payment verify error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
