'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, Check, Phone, CreditCard, Loader2, Shield, ArrowLeft,
  Crown, AlertCircle, Smartphone, Copy, CheckCheck, Send,
  ArrowRight, Wallet, MessageSquare, Clock
} from 'lucide-react'
import { useAppStore, type PremiumPlan } from '@/lib/store'
import { PAYMENT_ACCOUNTS, PLAN_PRICES } from '@/lib/payment-config'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// ─── Payment Method Data ─────────────────────────────────────────────────

interface PaymentMethod {
  id: string
  name: string
  icon: string
  description: string
  color: string
  bg: string
  border: string
  tag?: string
}

const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'direct_transfer',
    name: 'Transfert Direct',
    icon: '💰',
    description: 'Envoyez directement à notre numéro',
    color: 'text-yoel-green',
    bg: 'bg-yoel-green/10',
    border: 'border-yoel-green/30 hover:border-yoel-green/60',
    tag: 'RECOMMANDÉ',
  },
  {
    id: 'orange_money',
    name: 'Orange Money',
    icon: '🟠',
    description: 'Paiement automatique via Orange Money',
    color: 'text-orange-600',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30 hover:border-orange-500/60',
  },
  {
    id: 'wave',
    name: 'Wave',
    icon: '🔵',
    description: 'Paiement automatique via Wave',
    color: 'text-blue-600',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30 hover:border-blue-500/60',
  },
  {
    id: 'card',
    name: 'Carte bancaire',
    icon: '💳',
    description: 'Visa, Mastercard',
    color: 'text-yoel-primary',
    bg: 'bg-yoel-primary/10',
    border: 'border-yoel-primary/30 hover:border-yoel-primary/60',
  },
]

// ─── Plan Data ─────────────────────────────────────────────────────────────

interface CheckoutPlan {
  id: string
  name: string
  premiumPlanId: string
  price: number
  period: string
  amount: number
}

const CHECKOUT_PLANS: CheckoutPlan[] = [
  { id: 'monthly', name: 'Essentiel', premiumPlanId: 'essentiel', price: 1000, period: 'F/mois', amount: 1000 },
  { id: 'yearly', name: 'Complet', premiumPlanId: 'complet', price: 2000, period: 'F/trimestre', amount: 2000 },
  { id: 'lifetime', name: 'Intégral', premiumPlanId: 'integral', price: 3000, period: 'F', amount: 3000 },
]

// ─── Step Types ────────────────────────────────────────────────────────────

type CheckoutStep = 'method' | 'direct_transfer' | 'details' | 'processing' | 'waiting_validation' | 'success' | 'error'

// ─── Props ─────────────────────────────────────────────────────────────────

interface CheckoutModalProps {
  selectedPlanId: string | null
  onClose: () => void
  onSuccess: (premiumPlanId: string) => void
}

// ─── Component ─────────────────────────────────────────────────────────────

export default function CheckoutModal({ selectedPlanId, onClose, onSuccess }: CheckoutModalProps) {
  const { user } = useAppStore()
  const plan = CHECKOUT_PLANS.find(p => p.id === selectedPlanId) || CHECKOUT_PLANS[1]

  const [step, setStep] = useState<CheckoutStep>('method')
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
  const [selectedDirectAccount, setSelectedDirectAccount] = useState<string | null>(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  const [transactionRef, setTransactionRef] = useState('')
  const [paymentId, setPaymentId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [verifyCount, setVerifyCount] = useState(0)
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null)

  const isMobileMoney = selectedMethod !== null && ['orange_money', 'mtn_momo', 'wave'].includes(selectedMethod)
  const isCard = selectedMethod === 'card'
  const isDirectTransfer = selectedMethod === 'direct_transfer'

  // ─── Copy to clipboard ──────────────────────────────────────────────
  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedNumber(label)
      setTimeout(() => setCopiedNumber(null), 2000)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopiedNumber(label)
      setTimeout(() => setCopiedNumber(null), 2000)
    }
  }

  // ─── Initiate Payment (Gateway mode) ────────────────────────────────
  const initiatePayment = async () => {
    if (!user?.id || !selectedMethod) return

    // Validate phone for mobile money
    if (isMobileMoney && phoneNumber.replace(/\s/g, '').length < 8) {
      setError('Veuillez entrer un numéro de téléphone valide')
      return
    }

    // Validate card fields
    if (isCard && (cardNumber.replace(/\s/g, '').length < 16 || cardExpiry.length < 5 || cardCvv.length < 3)) {
      setError('Veuillez remplir tous les champs de la carte')
      return
    }

    setError(null)
    setStep('processing')

    try {
      const res = await fetch('/api/payment/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          planId: plan.premiumPlanId,
          paymentMethod: selectedMethod,
          phoneNumber: isMobileMoney ? phoneNumber.replace(/\s/g, '') : undefined,
          mode: 'gateway',
        }),
      })

      const data = await res.json()

      if (!data.success) {
        setError(data.error || 'Erreur lors de l\'initialisation du paiement')
        setStep('error')
        return
      }

      setPaymentId(data.payment.id)
      setVerifyCount(0)
    } catch {
      setError('Erreur de connexion. Veuillez réessayer.')
      setStep('error')
    }
  }

  // ─── Initiate Direct Transfer Payment ────────────────────────────────
  const initiateDirectPayment = async () => {
    if (!user?.id || !selectedDirectAccount) return

    if (!transactionRef.trim() || transactionRef.trim().length < 3) {
      setError('Veuillez entrer la référence/le code de transaction')
      return
    }

    setError(null)
    setStep('processing')

    try {
      const res = await fetch('/api/payment/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          planId: plan.premiumPlanId,
          paymentMethod: selectedDirectAccount,
          mode: 'direct',
          transactionRef: transactionRef.trim(),
        }),
      })

      const data = await res.json()

      if (!data.success) {
        setError(data.error || 'Erreur lors de l\'envoi du paiement')
        setStep('error')
        return
      }

      setPaymentId(data.payment.id)
      setStep('waiting_validation')
    } catch {
      setError('Erreur de connexion. Veuillez réessayer.')
      setStep('error')
    }
  }

  // ─── Poll Payment Status (for gateway mode) ─────────────────────────
  const verifyPayment = useCallback(async () => {
    if (!paymentId) return

    try {
      const res = await fetch(`/api/payment/verify?paymentId=${paymentId}`)
      const data = await res.json()

      if (data.success && data.activated) {
        setStep('success')
        onSuccess(plan.premiumPlanId)
        return
      }

      if (data.payment?.status === 'failed') {
        setError('Le paiement a échoué. Veuillez réessayer.')
        setStep('error')
        return
      }

      if (data.payment?.status === 'expired') {
        setError('Le délai de paiement a expiré. Veuillez recommencer.')
        setStep('error')
        return
      }
    } catch {
      // Network error, keep polling
    }
  }, [paymentId, onSuccess, plan.premiumPlanId])

  // Poll every 2 seconds while processing (gateway mode)
  useEffect(() => {
    if (step !== 'processing' || !paymentId) return

    const interval = setInterval(() => {
      setVerifyCount(prev => {
        const next = prev + 1
        verifyPayment()
        if (next >= 30) {
          setError('Le paiement prend trop de temps. Veuillez vérifier votre compte Mobile Money.')
          setStep('error')
        }
        return next
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [step, paymentId, verifyPayment])

  // Also poll while waiting for admin validation (direct transfer mode)
  useEffect(() => {
    if (step !== 'waiting_validation' || !paymentId) return

    const interval = setInterval(() => {
      verifyPayment()
    }, 5000) // Check every 5 seconds

    return () => clearInterval(interval)
  }, [step, paymentId, verifyPayment])

  // ─── Format phone number ────────────────────────────────────────────
  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10)
    if (digits.length <= 2) return digits
    if (digits.length <= 4) return `${digits.slice(0, 2)} ${digits.slice(2)}`
    if (digits.length <= 6) return `${digits.slice(0, 2)} ${digits.slice(2, 4)} ${digits.slice(4)}`
    if (digits.length <= 8) return `${digits.slice(0, 2)} ${digits.slice(2, 4)} ${digits.slice(4, 6)} ${digits.slice(6)}`
    return `${digits.slice(0, 2)} ${digits.slice(2, 4)} ${digits.slice(4, 6)} ${digits.slice(6, 8)} ${digits.slice(8)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(formatPhone(e.target.value))
  }

  // ─── Format card number ─────────────────────────────────────────────
  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 16)
    return digits.replace(/(\d{4})/g, '$1 ').trim()
  }

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4)
    if (digits.length >= 2) return `${digits.slice(0, 2)}/${digits.slice(2)}`
    return digits
  }

  // ─── Render ──────────────────────────────────────────────────────────
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-background rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md max-h-[90vh] overflow-y-auto shadow-2xl border border-border/50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border/50 px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {(step === 'details' || step === 'direct_transfer') && (
              <button
                onClick={() => { setStep('method'); setError(null) }}
                className="p-1 rounded-full hover:bg-muted transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
            )}
            <div>
              <h2 className="text-base font-bold flex items-center gap-2">
                <Crown className="h-4 w-4 text-yoel-gold" />
                {step === 'method' && 'Mode de paiement'}
                {step === 'direct_transfer' && 'Transfert Direct'}
                {step === 'details' && 'Vos informations'}
                {step === 'processing' && 'Traitement en cours...'}
                {step === 'waiting_validation' && 'En attente de validation...'}
                {step === 'success' && 'Paiement réussi !'}
                {step === 'error' && 'Erreur de paiement'}
              </h2>
              <p className="text-xs text-muted-foreground">
                Plan {plan.name} · {plan.price.toLocaleString('fr-FR')} {plan.period}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-muted transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-5">
          <AnimatePresence mode="wait">
            {/* ─── Step 1: Payment Method Selection ──────────────────── */}
            {step === 'method' && (
              <motion.div
                key="method"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-3"
              >
                {/* Plan summary */}
                <div className="rounded-2xl bg-gradient-to-br from-yoel-gold/10 to-yoel-primary/10 border border-yoel-gold/20 p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold">{plan.name}</p>
                      <p className="text-xs text-muted-foreground">3 jours d&apos;essai gratuit inclus</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold gradient-text-premium">
                        {plan.price.toLocaleString('fr-FR')} F
                      </p>
                      <p className="text-[10px] text-muted-foreground">{plan.period}</p>
                    </div>
                  </div>
                </div>

                {/* Payment methods */}
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Choisissez votre méthode
                </p>
                <div className="space-y-2">
                  {PAYMENT_METHODS.map((method) => (
                    <motion.button
                      key={method.id}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedMethod(method.id)
                        if (method.id === 'direct_transfer') {
                          // Will go to direct_transfer step on Continue
                        }
                      }}
                      className={`w-full flex items-center gap-3 p-3.5 rounded-xl border-2 transition-all duration-200 text-left relative ${
                        selectedMethod === method.id
                          ? `${method.bg} ${method.border} shadow-sm`
                          : 'border-border/30 hover:border-border/60 bg-muted/10'
                      }`}
                    >
                      <span className="text-2xl">{method.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold">{method.name}</p>
                          {method.tag && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-yoel-green/15 text-yoel-green">
                              {method.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-muted-foreground">{method.description}</p>
                      </div>
                      {selectedMethod === method.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex h-5 w-5 items-center justify-center rounded-full bg-yoel-green shrink-0"
                        >
                          <Check className="h-3 w-3 text-white" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Direct transfer info */}
                {selectedMethod === 'direct_transfer' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-3 rounded-xl bg-yoel-green/5 border border-yoel-green/15"
                  >
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-yoel-green">Simple et rapide :</span>{' '}
                      Envoyez l&apos;argent directement à notre numéro Orange Money ou Wave, 
                      puis entrez le code de transaction. Votre compte sera activé après vérification.
                    </p>
                  </motion.div>
                )}

                {/* Security notice */}
                <div className="flex items-center gap-2 p-3 rounded-xl bg-yoel-green/5 border border-yoel-green/15 mt-4">
                  <Shield className="h-4 w-4 text-yoel-green shrink-0" />
                  <p className="text-[10px] text-muted-foreground">
                    Paiement sécurisé. Vos données financières sont protégées.
                  </p>
                </div>

                {/* Continue button */}
                <Button
                  className="w-full rounded-xl bg-gradient-to-r from-yoel-primary via-yoel-gold to-yoel-primary text-white font-semibold mt-2 h-12"
                  disabled={!selectedMethod}
                  onClick={() => {
                    if (selectedMethod === 'direct_transfer') {
                      setStep('direct_transfer')
                    } else {
                      setStep('details')
                    }
                  }}
                >
                  Continuer
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </motion.div>
            )}

            {/* ─── Step 2: Direct Transfer ──────────────────────────────── */}
            {step === 'direct_transfer' && (
              <motion.div
                key="direct_transfer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yoel-green text-white text-[10px] font-bold">1</div>
                    <span className="text-xs font-medium">Envoyez</span>
                  </div>
                  <div className="h-px flex-1 bg-border" />
                  <div className="flex items-center gap-1.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground text-[10px] font-bold">2</div>
                    <span className="text-xs text-muted-foreground">Confirmez</span>
                  </div>
                  <div className="h-px flex-1 bg-border" />
                  <div className="flex items-center gap-1.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground text-[10px] font-bold">3</div>
                    <span className="text-xs text-muted-foreground">Profitez</span>
                  </div>
                </div>

                {/* Amount to send */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-yoel-gold/10 to-yoel-primary/10 border border-yoel-gold/20 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Montant à envoyer</p>
                  <p className="text-3xl font-bold gradient-text-premium">
                    {plan.price.toLocaleString('fr-FR')} F
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-1">Plan {plan.name}</p>
                </div>

                {/* Payment accounts - Orange Money and Wave */}
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Envoyez à l&apos;un de ces numéros
                </p>

                {PAYMENT_ACCOUNTS.map((account) => (
                  <motion.div
                    key={account.method}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedDirectAccount(account.method)}
                    className={`rounded-2xl border-2 p-4 transition-all cursor-pointer ${
                      selectedDirectAccount === account.method
                        ? `${account.borderColor} ${account.bg} shadow-sm`
                        : 'border-border/30 hover:border-border/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{account.icon}</span>
                        <span className="text-sm font-bold">{account.label}</span>
                      </div>
                      {selectedDirectAccount === account.method && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex h-5 w-5 items-center justify-center rounded-full bg-yoel-green"
                        >
                          <Check className="h-3 w-3 text-white" />
                        </motion.div>
                      )}
                    </div>

                    {/* Phone number with copy button */}
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-background/80 border border-border/30">
                      <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                      <span className="text-lg font-mono font-bold flex-1 tracking-wider">
                        {account.displayNumber}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          copyToClipboard(account.number, account.method)
                        }}
                        className="p-1.5 rounded-lg hover:bg-muted transition-colors shrink-0"
                      >
                        {copiedNumber === account.method ? (
                          <CheckCheck className="h-4 w-4 text-yoel-green" />
                        ) : (
                          <Copy className="h-4 w-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>

                    {/* Copy confirmation */}
                    {copiedNumber === account.method && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] text-yoel-green mt-1.5 ml-1"
                      >
                        ✓ Numéro copié !
                      </motion.p>
                    )}

                    {/* Instructions (show when selected) */}
                    {selectedDirectAccount === account.method && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-3 p-3 rounded-xl bg-background/50 border border-border/20"
                      >
                        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          Étapes à suivre
                        </p>
                        <ol className="text-[10px] text-muted-foreground space-y-1 ml-4 list-decimal">
                          {account.instructions.map((instruction, i) => (
                            <li key={i}>{instruction}</li>
                          ))}
                        </ol>
                      </motion.div>
                    )}
                  </motion.div>
                ))}

                {/* Transaction reference input */}
                {selectedDirectAccount && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <Separator />
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yoel-green text-white text-[10px] font-bold">2</div>
                      <span className="text-xs font-semibold">Entrez le code de transaction</span>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium">
                        <MessageSquare className="h-3.5 w-3.5 inline mr-1.5" />
                        Référence / Code de transaction
                      </label>
                      <Input
                        type="text"
                        placeholder="Ex: OM12345678 ou W987654321"
                        value={transactionRef}
                        onChange={(e) => setTransactionRef(e.target.value)}
                        className="h-12 text-base rounded-xl font-mono tracking-wider"
                      />
                      <p className="text-[10px] text-muted-foreground">
                        Après avoir envoyé l&apos;argent, vous recevrez un SMS avec un code de transaction.
                        Entrez ce code ici pour que nous puissions vérifier votre paiement.
                      </p>
                    </div>

                    {/* Error message */}
                    {error && (
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                        <AlertCircle className="h-4 w-4 text-red-500 shrink-0" />
                        <p className="text-xs text-red-600">{error}</p>
                      </div>
                    )}

                    {/* Summary */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-yoel-gold/5 to-yoel-primary/5 border border-yoel-gold/15">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-muted-foreground">Montant</span>
                        <span className="text-sm font-bold">{plan.price.toLocaleString('fr-FR')} F</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-muted-foreground">Via</span>
                        <span className="text-sm">
                          {PAYMENT_ACCOUNTS.find(a => a.method === selectedDirectAccount)?.icon}{' '}
                          {PAYMENT_ACCOUNTS.find(a => a.method === selectedDirectAccount)?.label}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Activation</span>
                        <span className="text-xs text-yoel-green font-medium">Après vérification (~5 min)</span>
                      </div>
                    </div>

                    {/* Submit button */}
                    <Button
                      className="w-full rounded-xl bg-gradient-to-r from-yoel-primary via-yoel-gold to-yoel-primary text-white font-semibold h-12"
                      disabled={!transactionRef.trim()}
                      onClick={initiateDirectPayment}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer la confirmation
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* ─── Step 3: Gateway Payment Details ────────────────────── */}
            {step === 'details' && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                {/* Selected method summary */}
                {selectedMethod && (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/30">
                    <span className="text-2xl">
                      {PAYMENT_METHODS.find(m => m.id === selectedMethod)?.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">
                        {PAYMENT_METHODS.find(m => m.id === selectedMethod)?.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {isMobileMoney ? 'Entrez votre numéro' : 'Entrez vos informations'}
                      </p>
                    </div>
                  </div>
                )}

                {/* Mobile Money: Phone Number */}
                {isMobileMoney && (
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <label className="text-xs font-medium">
                        <Phone className="h-3.5 w-3.5 inline mr-1.5" />
                        Numéro de téléphone
                      </label>
                      <Input
                        type="tel"
                        placeholder="Ex: 97 00 00 00"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        className="h-12 text-lg rounded-xl font-mono tracking-wider"
                      />
                      <p className="text-[10px] text-muted-foreground">
                        Vous recevrez une notification pour confirmer le paiement
                      </p>
                    </div>

                    {/* USSD info */}
                    <div className="p-3 rounded-xl bg-orange-500/5 border border-orange-500/15">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Smartphone className="h-3.5 w-3.5 text-orange-600" />
                        <span className="text-xs font-semibold text-orange-600">Comment ça marche</span>
                      </div>
                      <ol className="text-[10px] text-muted-foreground space-y-1 ml-5 list-decimal">
                        <li>Entrez votre numéro {PAYMENT_METHODS.find(m => m.id === selectedMethod)?.name}</li>
                        <li>Vous recevrez un SMS de confirmation</li>
                        <li>Validez le paiement sur votre téléphone</li>
                        <li>Votre compte Premium est activé automatiquement</li>
                      </ol>
                    </div>
                  </div>
                )}

                {/* Card: Card Details */}
                {isCard && (
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <label className="text-xs font-medium">
                        <CreditCard className="h-3.5 w-3.5 inline mr-1.5" />
                        Numéro de carte
                      </label>
                      <Input
                        type="text"
                        placeholder="4242 4242 4242 4242"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                        className="h-12 text-lg rounded-xl font-mono tracking-wider"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <label className="text-xs font-medium">Expiration</label>
                        <Input
                          type="text"
                          placeholder="MM/AA"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(formatExpiry(e.target.value))}
                          className="h-12 rounded-xl font-mono"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-medium">CVV</label>
                        <Input
                          type="text"
                          placeholder="123"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                          className="h-12 rounded-xl font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Error message */}
                {error && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                    <AlertCircle className="h-4 w-4 text-red-500 shrink-0" />
                    <p className="text-xs text-red-600">{error}</p>
                  </div>
                )}

                {/* Amount confirmation */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-yoel-gold/5 to-yoel-primary/5 border border-yoel-gold/15">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Sous-total</span>
                    <span className="text-sm">{plan.price.toLocaleString('fr-FR')} F</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Frais</span>
                    <span className="text-sm text-yoel-green">Gratuit</span>
                  </div>
                  <div className="border-t border-border/30 my-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">Total</span>
                    <span className="text-lg font-bold gradient-text-premium">
                      {plan.price.toLocaleString('fr-FR')} F
                    </span>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1">
                    Essai gratuit de 3 jours — vous ne serez débité qu&apos;après
                  </p>
                </div>

                {/* Pay button */}
                <Button
                  className="w-full rounded-xl bg-gradient-to-r from-yoel-primary via-yoel-gold to-yoel-primary text-white font-semibold h-12"
                  onClick={initiatePayment}
                >
                  Payer {plan.price.toLocaleString('fr-FR')} F
                </Button>

                <p className="text-[10px] text-center text-muted-foreground">
                  En payant, vous acceptez nos conditions d&apos;utilisation
                </p>
              </motion.div>
            )}

            {/* ─── Step: Processing (gateway) ──────────────────────────── */}
            {step === 'processing' && (
              <motion.div
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-8 text-center space-y-4"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="inline-flex"
                >
                  <Loader2 className="h-12 w-12 text-yoel-gold" />
                </motion.div>

                <div>
                  <h3 className="text-lg font-bold mb-1">
                    {isDirectTransfer ? 'Envoi en cours...' : isMobileMoney ? 'Vérifiez votre téléphone' : 'Traitement en cours...'}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    {isDirectTransfer
                      ? 'Votre confirmation est en cours d\'envoi...'
                      : isMobileMoney
                      ? `Un SMS de confirmation a été envoyé au ${phoneNumber}. Veuillez valider le paiement.`
                      : 'Votre paiement est en cours de vérification...'
                    }
                  </p>
                </div>

                {isMobileMoney && (
                  <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/15 text-left">
                    <p className="text-xs font-semibold text-orange-600 mb-2">
                      📱 Sur votre téléphone :
                    </p>
                    <ol className="text-[11px] text-muted-foreground space-y-1 ml-4 list-decimal">
                      <li>Ouvrez le SMS de confirmation</li>
                      <li>Entrez votre code PIN</li>
                      <li>Confirmez le paiement</li>
                    </ol>
                  </div>
                )}
              </motion.div>
            )}

            {/* ─── Step: Waiting for admin validation (direct transfer) ─ */}
            {step === 'waiting_validation' && (
              <motion.div
                key="waiting_validation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-6 text-center space-y-4"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-yoel-gold/10 border-2 border-yoel-gold/30"
                >
                  <Clock className="h-10 w-10 text-yoel-gold" />
                </motion.div>

                <div>
                  <h3 className="text-lg font-bold mb-1">Confirmation envoyée ! ✅</h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    Votre paiement est en cours de vérification. 
                    Votre compte Premium sera activé dans quelques minutes.
                  </p>
                </div>

                {/* Summary of submitted info */}
                <div className="p-4 rounded-xl bg-yoel-gold/5 border border-yoel-gold/15 text-left space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Plan</span>
                    <span className="text-sm font-semibold">{plan.name} ({plan.price.toLocaleString('fr-FR')} F)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Via</span>
                    <span className="text-sm">
                      {PAYMENT_ACCOUNTS.find(a => a.method === selectedDirectAccount)?.icon}{' '}
                      {PAYMENT_ACCOUNTS.find(a => a.method === selectedDirectAccount)?.label}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Référence</span>
                    <span className="text-sm font-mono">{transactionRef}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Statut</span>
                    <span className="text-xs text-amber-600 font-medium flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      En attente de validation
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-yoel-blue/5 border border-yoel-blue/15">
                  <p className="text-[10px] text-muted-foreground">
                    💡 <span className="font-medium">Astuce :</span> Vous pouvez fermer cette fenêtre. 
                    Nous vous notifierons dès que votre compte sera activé. 
                    La vérification prend généralement moins de 5 minutes.
                  </p>
                </div>

                <Button
                  className="w-full rounded-xl bg-yoel-primary text-white font-semibold h-11"
                  onClick={onClose}
                >
                  Compris, merci !
                </Button>
              </motion.div>
            )}

            {/* ─── Step: Success ──────────────────────────────────────── */}
            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-6 text-center space-y-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                  className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-yoel-gold to-amber-600 text-4xl shadow-xl shadow-yoel-gold/30"
                >
                  👑
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-xl font-bold gradient-text-premium mb-1">
                    Bienvenue Premium ! 🎉
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    Votre essai gratuit de 3 jours commence maintenant.
                    Profitez de toutes les fonctionnalités Premium !
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-yoel-gold/5 border border-yoel-gold/10 text-left">
                    <span className="text-xl">⭐</span>
                    <div>
                      <p className="text-sm font-semibold">Plan {plan.name} activé</p>
                      <p className="text-[10px] text-muted-foreground">Essai gratuit jusqu&apos;au {new Date(Date.now() + 3 * 86400000).toLocaleDateString('fr-FR')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-yoel-green/5 border border-yoel-green/10 text-left">
                    <span className="text-xl">✅</span>
                    <div>
                      <p className="text-sm font-semibold">Paiement confirmé</p>
                      <p className="text-[10px] text-muted-foreground">{plan.price.toLocaleString('fr-FR')} F via {PAYMENT_METHODS.find(m => m.id === selectedMethod)?.name}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    className="w-full rounded-xl bg-gradient-to-r from-yoel-primary via-yoel-gold to-yoel-primary text-white font-semibold h-12"
                    onClick={onClose}
                  >
                    C&apos;est parti ! ✨
                  </Button>
                </motion.div>
              </motion.div>
            )}

            {/* ─── Step: Error ─────────────────────────────────────────── */}
            {step === 'error' && (
              <motion.div
                key="error"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-6 text-center space-y-4"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 border-2 border-red-500/30">
                  <AlertCircle className="h-8 w-8 text-red-500" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-red-600 mb-1">Paiement échoué</h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    {error || 'Une erreur est survenue lors du paiement. Veuillez réessayer.'}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 rounded-xl h-11"
                    onClick={onClose}
                  >
                    Fermer
                  </Button>
                  <Button
                    className="flex-1 rounded-xl bg-yoel-primary text-white h-11"
                    onClick={() => {
                      setStep('method')
                      setError(null)
                      setPaymentId(null)
                      setTransactionRef('')
                    }}
                  >
                    Réessayer
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Separator helper ──────────────────────────────────────────────────────
function Separator() {
  return <div className="border-t border-border/30 my-1" />
}
