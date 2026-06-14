import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { PLAN_PRICES } from '@/lib/payment-config'
import { paymentLimiter, getClientIP } from '@/lib/rate-limit'
import { rateLimitResponse } from '@/lib/api-utils'

const PLAN_NAMES: Record<string, string> = {
  essentiel: 'Essentiel',
  complet: 'Complet',
  integral: 'Intégral',
}

/**
 * POST /api/payment/initiate
 * 
 * Initiates a payment for a premium plan.
 * 
 * Two modes:
 * 1. "direct" — User sends money directly to owner's Orange Money/Wave number,
 *    then enters transaction reference. Admin validates manually.
 * 2. "gateway" — Automated payment via FedaPay/CinetPay (future integration).
 * 
 * Body: { userId, planId, paymentMethod, mode, phoneNumber?, transactionRef? }
 */
export async function POST(req: NextRequest) {
  // ─── Rate limiting ────────────────────────────────────────────────
  const clientIP = getClientIP(req)
  if (!paymentLimiter.check(`payment:${clientIP}`)) {
    return rateLimitResponse()
  }

  try {
    const { userId, planId, paymentMethod, mode, phoneNumber, transactionRef } = await req.json()

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

    const paymentMode = mode || 'gateway' // default to gateway for backward compat

    // For direct mode: validate paymentMethod is orange_money or wave
    const directMethods = ['orange_money', 'wave']
    const gatewayMethods = ['orange_money', 'mtn_momo', 'wave', 'card']
    const validMethods = paymentMode === 'direct' ? directMethods : gatewayMethods

    if (!validMethods.includes(paymentMethod)) {
      return NextResponse.json(
        { error: `Méthode de paiement invalide pour le mode ${paymentMode}` },
        { status: 400 }
      )
    }

    // Direct mode requires transaction reference
    if (paymentMode === 'direct' && (!transactionRef || transactionRef.trim().length < 3)) {
      return NextResponse.json(
        { error: 'La référence de transaction est requise pour le transfert direct' },
        { status: 400 }
      )
    }

    // Gateway mode requires phone number for mobile money
    if (paymentMode === 'gateway' && ['orange_money', 'mtn_momo', 'wave'].includes(paymentMethod) && !phoneNumber) {
      return NextResponse.json(
        { error: 'Numéro de téléphone requis pour le paiement Mobile Money' },
        { status: 400 }
      )
    }

    // Check user exists
    const user = await db.user.findUnique({ where: { id: userId } })
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

    const amount = PLAN_PRICES[planId].amount

    // Calculate trial period (3 days from now)
    const now = new Date()
    const trialStart = now
    const trialEnd = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000)

    // Create payment record
    const payment = await db.payment.create({
      data: {
        userId,
        planId,
        amount,
        currency: 'XOF',
        paymentMethod,
        phoneNumber: phoneNumber || null,
        status: paymentMode === 'direct' ? 'pending_validation' : 'pending',
        providerRef: paymentMode === 'direct' 
          ? `DIRECT-${transactionRef.trim()}` 
          : `DEMO-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
        providerName: paymentMode === 'direct' ? 'direct' : 'demo',
        trialStart,
        trialEnd,
        expiresAt: new Date(now.getTime() + (paymentMode === 'direct' ? 24 * 60 * 60 * 1000 : 30 * 60 * 1000)),
      },
    })

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
      },
    })
  } catch (error: unknown) {
    console.error('Payment initiate error:', error)
    const message = error instanceof Error ? error.message : 'Erreur serveur'
    return NextResponse.json({ error: 'Erreur serveur', detail: message }, { status: 500 })
  }
}
