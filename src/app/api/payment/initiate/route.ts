import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

// Plan pricing in FCFA
const PLAN_PRICES: Record<string, number> = {
  essentiel: 1000,
  complet: 2000,
  integral: 3000,
}

const PLAN_NAMES: Record<string, string> = {
  essentiel: 'Essentiel',
  complet: 'Complet',
  integral: 'Intégral',
}

/**
 * POST /api/payment/initiate
 * 
 * Initiates a payment for a premium plan.
 * In production, this would call FedaPay/CinetPay API to create a payment session.
 * For demo, we simulate the payment flow.
 * 
 * Body: { userId, planId, paymentMethod, phoneNumber? }
 */
export async function POST(req: NextRequest) {
  try {
    const { userId, planId, paymentMethod, phoneNumber } = await req.json()

    // Validation
    if (!userId || !planId || !paymentMethod) {
      return NextResponse.json(
        { error: 'userId, planId et paymentMethod sont requis' },
        { status: 400 }
      )
    }

    if (!PLAN_PRICES[planId]) {
      return NextResponse.json(
        { error: 'Plan invalide. Plans disponibles: essentiel, complet, integral' },
        { status: 400 }
      )
    }

    const validMethods = ['orange_money', 'mtn_momo', 'wave', 'card']
    if (!validMethods.includes(paymentMethod)) {
      return NextResponse.json(
        { error: 'Méthode de paiement invalide' },
        { status: 400 }
      )
    }

    // Mobile money requires a phone number
    if (['orange_money', 'mtn_momo', 'wave'].includes(paymentMethod) && !phoneNumber) {
      return NextResponse.json(
        { error: 'Numéro de téléphone requis pour le paiement Mobile Money' },
        { status: 400 }
      )
    }

    // Check user exists
    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 })
    }

    // Check if user already has premium
    if (user.isPremium) {
      return NextResponse.json(
        { error: 'Vous êtes déjà Premium' },
        { status: 400 }
      )
    }

    const amount = PLAN_PRICES[planId]

    // Calculate trial period (3 days from now)
    const now = new Date()
    const trialStart = now
    const trialEnd = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000)

    // In production, you would call FedaPay/CinetPay API here:
    //
    // Example with FedaPay:
    // const fedapayResponse = await fetch('https://api.fedapay.com/v1/transactions', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.FEDAPAY_SECRET_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     transaction: {
    //       amount: amount,
    //       description: `Yoel Premium - Plan ${PLAN_NAMES[planId]}`,
    //       currency: { iso: 'XOF' },
    //       callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/webhook`,
    //       customer: {
    //         firstname: user.name || 'Apprenant',
    //         email: user.email,
    //         phone_number: phoneNumber,
    //         country: 'BJ', // Bénin par défaut
    //       },
    //     },
    //   }),
    // })
    //
    // Example with CinetPay:
    // const cinetpayResponse = await fetch('https://api-checkout.cinetpay.com/v2/payment', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     apikey: process.env.CINETPAY_API_KEY,
    //     site_id: process.env.CINETPAY_SITE_ID,
    //     transaction_id: `YOEL-${Date.now()}`,
    //     amount: amount,
    //     currency: 'XOF',
    //     description: `Yoel Premium - Plan ${PLAN_NAMES[planId]}`,
    //     return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/premium`,
    //     notify_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/webhook`,
    //     customer_name: user.name || 'Apprenant',
    //     customer_email: user.email,
    //     customer_phone_number: phoneNumber || '',
    //   }),
    // })

    // For demo: simulate a payment reference
    const providerRef = `DEMO-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
    const paymentExpiresAt = new Date(now.getTime() + 30 * 60 * 1000) // 30 min to complete

    // Create payment record
    const payment = await prisma.payment.create({
      data: {
        userId,
        planId,
        amount,
        currency: 'XOF',
        paymentMethod,
        phoneNumber: phoneNumber || null,
        status: 'pending',
        providerRef,
        providerName: 'demo', // In production: 'fedapay' or 'cinetpay'
        trialStart,
        trialEnd,
        expiresAt: paymentExpiresAt,
      },
    })

    // In production, the provider would return a payment URL or USSD code.
    // For demo, we simulate immediate processing.
    // The frontend will poll /api/payment/verify to check status.

    return NextResponse.json({
      success: true,
      payment: {
        id: payment.id,
        amount: payment.amount,
        currency: payment.currency,
        planId: payment.planId,
        planName: PLAN_NAMES[planId],
        paymentMethod: payment.paymentMethod,
        providerRef: payment.providerRef,
        status: payment.status,
        trialStart: payment.trialStart,
        trialEnd: payment.trialEnd,
        expiresAt: payment.expiresAt,
        // In production, include the provider's payment URL:
        // paymentUrl: fedapayResponse.url,
        // ussdCode: '*144*...',
      },
    })
  } catch (error) {
    console.error('Payment initiate error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
