'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, Check, Copy, Phone, Clock, ArrowRight, ArrowLeft,
  Shield, AlertCircle, Loader2, CheckCircle2, ChevronRight,
  MessageSquare
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { useAppStore, type PremiumPlan } from '@/lib/store'
import { PAYMENT_ACCOUNTS, PLAN_PRICES } from '@/lib/payment-config'

// ─── Types ───────────────────────────────────────────────────────────────────

type CheckoutStep = 'method' | 'instructions' | 'confirm' | 'processing' | 'success' | 'error'

interface CheckoutModalProps {
  selectedPlanId: string | null
  onClose: () => void
  onSuccess: (planId: string) => void
}

// ─── Plan Info Helper ────────────────────────────────────────────────────────

const PLAN_INFO: Record<string, { name: string; emoji: string }> = {
  monthly: { name: 'Essentiel', emoji: '⭐' },
  yearly: { name: 'Complet', emoji: '💎' },
  lifetime: { name: 'Intégral', emoji: '👑' },
}

const PLAN_ID_MAP: Record<string, PremiumPlan> = {
  monthly: 'essentiel',
  yearly: 'complet',
  lifetime: 'integral',
}

// ─── Checkout Modal Component ────────────────────────────────────────────────

export default function CheckoutModal({ selectedPlanId, onClose, onSuccess }: CheckoutModalProps) {
  const { user } = useAppStore()
  const [step, setStep] = useState<CheckoutStep>('method')
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
  const [transactionRef, setTransactionRef] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const [paymentError, setPaymentError] = useState<string | null>(null)
  const [paymentId, setPaymentId] = useState<string | null>(null)

  const planId = selectedPlanId || 'yearly'
  const planInfo = PLAN_INFO[planId] || PLAN_INFO.monthly
  const premiumPlanId = PLAN_ID_MAP[planId] || 'complet'
  const planPrice = PLAN_PRICES[premiumPlanId]
  const selectedAccount = PAYMENT_ACCOUNTS.find(a => a.method === selectedMethod)

  // Reset state on mount
  useEffect(() => {
    setStep('method')
    setSelectedMethod(null)
    setTransactionRef('')
    setIsProcessing(false)
    setCopied(null)
    setPaymentError(null)
    setPaymentId(null)
  }, [])

  // Copy to clipboard helper
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  // Handle payment initiation
  const handleInitiatePayment = async () => {
    if (!user || !selectedMethod || !transactionRef.trim()) return

    setIsProcessing(true)
    setPaymentError(null)

    try {
      const res = await fetch('/api/payment/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          planId: premiumPlanId,
          paymentMethod: selectedMethod,
          mode: 'direct',
          transactionRef: transactionRef.trim(),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setPaymentError(data.error || 'Erreur lors du paiement')
        setStep('error')
        return
      }

      setPaymentId(data.payment.id)
      setStep('success')

      // Activate premium locally immediately (trial period)
      onSuccess(premiumPlanId)
    } catch (err) {
      setPaymentError('Erreur de connexion. Vérifiez votre connexion internet et réessayez.')
      setStep('error')
    } finally {
      setIsProcessing(false)
    }
  }

  // ─── Render Methods ────────────────────────────────────────────────────

  const renderMethodSelection = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold gradient-text-premium">Choisissez votre méthode de paiement</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Envoyez <span className="font-bold text-foreground">{planPrice?.amount.toLocaleString()} FCFA</span> au numéro indiqué
        </p>
      </div>

      <div className="space-y-3">
        {PAYMENT_ACCOUNTS.map((account) => (
          <motion.button
            key={account.method}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => setSelectedMethod(account.method)}
            className={`w-full text-left rounded-2xl border-2 p-4 transition-all duration-200 ${
              selectedMethod === account.method
                ? `${account.borderColor} ${account.bg} shadow-md`
                : 'border-border/50 hover:border-border bg-card'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/80 text-2xl shadow-sm">
                {account.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{account.label}</span>
                  {selectedMethod === account.method && (
                    <Badge className="bg-yoel-green/15 text-yoel-green border-0 text-[10px]">
                      <Check className="h-3 w-3 mr-0.5" />
                      Sélectionné
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground font-mono">{account.displayNumber}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      copyToClipboard(account.number, account.method)
                    }}
                    className="p-1 rounded-md hover:bg-background/60 transition-colors"
                  >
                    {copied === account.method ? (
                      <Check className="h-3.5 w-3.5 text-yoel-green" />
                    ) : (
                      <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
              <ChevronRight className={`h-5 w-5 transition-colors ${
                selectedMethod === account.method ? account.color : 'text-muted-foreground/40'
              }`} />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Security note */}
      <div className="flex items-start gap-2 rounded-xl bg-yoel-primary/5 border border-yoel-primary/10 p-3 mt-4">
        <Shield className="h-4 w-4 text-yoel-primary shrink-0 mt-0.5" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          Vous envoyez directement l&apos;argent au numéro du propriétaire. 
          Après envoi, saisissez le code de transaction pour validation.
        </p>
      </div>

      <Button
        className="w-full bg-gradient-to-r from-yoel-primary via-yoel-gold to-yoel-primary text-white font-semibold rounded-xl h-12"
        disabled={!selectedMethod}
        onClick={() => setStep('instructions')}
      >
        Continuer
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  )

  const renderInstructions = () => {
    if (!selectedAccount) return null

    return (
      <div className="space-y-4">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background/80 text-3xl shadow-sm mx-auto mb-3">
            {selectedAccount.icon}
          </div>
          <h3 className="text-lg font-bold">Payer via {selectedAccount.label}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Plan <span className="font-semibold text-foreground">{planInfo.name}</span> — {planPrice?.amount.toLocaleString()} FCFA
          </p>
        </div>

        {/* Recipient number card */}
        <div className={`rounded-2xl border-2 ${selectedAccount.borderColor} ${selectedAccount.bg} p-4`}>
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Numéro du destinataire</p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold font-mono">{selectedAccount.displayNumber}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(selectedAccount.number, 'number')}
              className="gap-1.5 rounded-lg"
            >
              {copied === 'number' ? <Check className="h-3.5 w-3.5 text-yoel-green" /> : <Copy className="h-3.5 w-3.5" />}
              {copied === 'number' ? 'Copié !' : 'Copier'}
            </Button>
          </div>
        </div>

        {/* Amount to send */}
        <div className="rounded-2xl border border-yoel-gold/30 bg-yoel-gold/5 p-4">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Montant à envoyer</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold gradient-text-premium">{planPrice?.amount.toLocaleString()} FCFA</span>
            <Badge className="bg-yoel-gold/15 text-yoel-gold border-0 text-[10px]">{planPrice?.period}</Badge>
          </div>
        </div>

        {/* Step-by-step instructions */}
        <div className="space-y-2">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Instructions</p>
          {selectedAccount.instructions.map((instruction, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-xl bg-muted/30 p-3"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yoel-primary/10 text-[11px] font-bold text-yoel-primary">
                {i + 1}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">{instruction}</p>
            </motion.div>
          ))}
        </div>

        {/* USSD code for Orange Money */}
        {selectedAccount.ussdCode && (
          <div className="rounded-xl bg-orange-500/5 border border-orange-500/20 p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium">Code USSD rapide</p>
                <p className="text-lg font-bold font-mono text-orange-600">{selectedAccount.ussdCode}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(selectedAccount.ussdCode!, 'ussd')}
                className="gap-1.5 rounded-lg"
              >
                {copied === 'ussd' ? <Check className="h-3.5 w-3.5 text-yoel-green" /> : <Copy className="h-3.5 w-3.5" />}
              </Button>
            </div>
          </div>
        )}

        <Separator />

        {/* Navigation buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1 rounded-xl h-11"
            onClick={() => setStep('method')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
          <Button
            className="flex-1 bg-gradient-to-r from-yoel-primary via-yoel-gold to-yoel-primary text-white font-semibold rounded-xl h-11"
            onClick={() => setStep('confirm')}
          >
            J&apos;ai envoyé
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    )
  }

  const renderConfirm = () => {
    if (!selectedAccount) return null

    return (
      <div className="space-y-4">
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold">Confirmez votre paiement</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Entrez le code de transaction reçu par SMS
          </p>
        </div>

        {/* Payment summary */}
        <div className="rounded-2xl border border-border/50 bg-muted/20 p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Plan</span>
            <span className="text-sm font-semibold">{planInfo.emoji} {planInfo.name}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Montant</span>
            <span className="text-sm font-bold">{planPrice?.amount.toLocaleString()} FCFA</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Méthode</span>
            <span className="text-sm font-semibold">{selectedAccount.icon} {selectedAccount.label}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Destinataire</span>
            <span className="text-sm font-mono">{selectedAccount.displayNumber}</span>
          </div>
          <Separator />
          <div className="flex items-center gap-2 text-xs text-yoel-green">
            <Clock className="h-3.5 w-3.5" />
            <span>Essai gratuit de 3 jours activé immédiatement</span>
          </div>
        </div>

        {/* Transaction reference input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Code de transaction <span className="text-red-500">*</span>
          </label>
          <Input
            value={transactionRef}
            onChange={(e) => setTransactionRef(e.target.value)}
            placeholder="Ex: OM123456789 ou WVE-ABC123"
            className="rounded-xl h-12 font-mono text-center text-lg"
          />
          <p className="text-xs text-muted-foreground">
            Ce code se trouve dans le SMS de confirmation reçu après votre transfert.
          </p>
        </div>

        {/* Info note */}
        <div className="flex items-start gap-2 rounded-xl bg-yoel-blue/5 border border-yoel-blue/10 p-3">
          <MessageSquare className="h-4 w-4 text-yoel-blue shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            Votre paiement sera vérifié par l&apos;administrateur. Votre essai gratuit de 3 jours commence immédiatement.
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1 rounded-xl h-11"
            onClick={() => setStep('instructions')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
          <Button
            className="flex-1 bg-gradient-to-r from-yoel-primary via-yoel-gold to-yoel-primary text-white font-semibold rounded-xl h-11"
            disabled={!transactionRef.trim() || transactionRef.trim().length < 3}
            onClick={handleInitiatePayment}
          >
            Confirmer
            <Check className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    )
  }

  const renderProcessing = () => (
    <div className="flex flex-col items-center justify-center py-8 space-y-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <Loader2 className="h-12 w-12 text-yoel-primary" />
      </motion.div>
      <div className="text-center">
        <h3 className="text-lg font-bold">Traitement en cours...</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Vérification de votre paiement
        </p>
      </div>
    </div>
  )

  const renderSuccess = () => (
    <div className="flex flex-col items-center justify-center py-6 space-y-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yoel-green/10">
          <CheckCircle2 className="h-10 w-10 text-yoel-green" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center space-y-2"
      >
        <h3 className="text-xl font-bold gradient-text-premium">Paiement envoyé ! 🎉</h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          Votre paiement de <span className="font-semibold text-foreground">{planPrice?.amount.toLocaleString()} FCFA</span> a été soumis pour validation.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full space-y-3"
      >
        <Card className="glass-card">
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-yoel-gold" />
              <span className="text-sm font-semibold">Essai gratuit activé</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Votre essai gratuit de 3 jours commence maintenant. L&apos;administrateur validera votre paiement sous peu.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-yoel-primary" />
              <span className="text-sm font-semibold">Que se passe-t-il ensuite ?</span>
            </div>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <p>1. L&apos;administrateur vérifie votre paiement</p>
              <p>2. Votre Premium est confirmé définitivement</p>
              <p>3. Vous recevez une notification de confirmation</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Button
        className="w-full bg-gradient-to-r from-yoel-primary via-yoel-gold to-yoel-primary text-white font-semibold rounded-xl h-12"
        onClick={onClose}
      >
        C&apos;est parti ! ✨
      </Button>
    </div>
  )

  const renderError = () => (
    <div className="flex flex-col items-center justify-center py-6 space-y-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
        <AlertCircle className="h-8 w-8 text-red-500" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-bold text-red-600">Erreur de paiement</h3>
        <p className="text-sm text-muted-foreground mt-1">
          {paymentError || 'Une erreur est survenue lors du traitement.'}
        </p>
      </div>
      <Button
        variant="outline"
        className="rounded-xl"
        onClick={() => {
          setStep('confirm')
          setPaymentError(null)
        }}
      >
        Réessayer
      </Button>
    </div>
  )

  // ─── Step Content Map ──────────────────────────────────────────────────

  const stepContent: Record<CheckoutStep, React.ReactNode> = {
    method: renderMethodSelection(),
    instructions: renderInstructions(),
    confirm: renderConfirm(),
    processing: renderProcessing(),
    success: renderSuccess(),
    error: renderError(),
  }

  // ─── Step Progress Indicator ───────────────────────────────────────────

  const steps: { key: CheckoutStep; label: string }[] = [
    { key: 'method', label: 'Méthode' },
    { key: 'instructions', label: 'Envoi' },
    { key: 'confirm', label: 'Confirmation' },
  ]

  const currentStepIndex = steps.findIndex(s => s.key === step)

  const renderStepIndicator = () => {
    if (['processing', 'success', 'error'].includes(step)) return null

    return (
      <div className="flex items-center justify-center gap-2 mb-4">
        {steps.map((s, i) => (
          <div key={s.key} className="flex items-center gap-2">
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                i <= currentStepIndex
                  ? 'bg-yoel-primary text-white shadow-md'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {i < currentStepIndex ? <Check className="h-3.5 w-3.5" /> : i + 1}
            </div>
            {i < steps.length - 1 && (
              <div
                className={`h-0.5 w-8 rounded-full transition-colors duration-300 ${
                  i < currentStepIndex ? 'bg-yoel-primary' : 'bg-muted'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => {
          if (e.target === e.currentTarget && !isProcessing) onClose()
        }}
      >
        <motion.div
          className="bg-background rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md max-h-[90vh] overflow-y-auto shadow-2xl border border-border/30"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">{planInfo.emoji}</span>
                <div>
                  <h2 className="text-base font-bold">Paiement Premium</h2>
                  <p className="text-xs text-muted-foreground">
                    Plan {planInfo.name} — {planPrice?.amount.toLocaleString()} FCFA
                  </p>
                </div>
              </div>
              {!isProcessing && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="rounded-full h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Step indicator */}
            {renderStepIndicator()}

            {/* Step content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {stepContent[step]}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
