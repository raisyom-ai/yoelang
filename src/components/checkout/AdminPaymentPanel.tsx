'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, ArrowLeft, Check, XCircle, Clock, Crown, Shield,
  RefreshCw, Loader2, AlertCircle, Eye, EyeOff, Wallet,
  Users, TrendingUp, CreditCard, Smartphone
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ADMIN_CONFIG, PLAN_PRICES } from '@/lib/payment-config'

// ─── Types ──────────────────────────────────────────────────────────────────

interface PaymentUser {
  id: string
  name: string | null
  email: string
  level: string
  isPremium: boolean
}

interface PaymentRecord {
  id: string
  userId: string
  planId: string
  amount: number
  currency: string
  paymentMethod: string
  phoneNumber: string | null
  status: string
  providerRef: string | null
  providerName: string | null
  trialStart: string | null
  trialEnd: string | null
  paidAt: string | null
  expiresAt: string | null
  createdAt: string
  updatedAt: string
  user: PaymentUser
}

interface PaymentStats {
  totalPending: number
  totalApproved: number
  totalRejected: number
  totalRevenueAmount: number
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function AdminPaymentPanel({ onClose }: { onClose: () => void }) {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authError, setAuthError] = useState<string | null>(null)

  const [payments, setPayments] = useState<PaymentRecord[]>([])
  const [stats, setStats] = useState<PaymentStats | null>(null)
  const [loading, setLoading] = useState(false)
  const [actionLoading, setActionLoading] = useState<string | null>(null)
  const [statusFilter, setStatusFilter] = useState<string>('pending_validation')
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  // ─── Authenticate ──────────────────────────────────────────────────
  const handleLogin = () => {
    if (password === ADMIN_CONFIG.password) {
      setIsAuthenticated(true)
      setAuthError(null)
    } else {
      setAuthError('Mot de passe incorrect')
    }
  }

  // ─── Fetch Payments ────────────────────────────────────────────────
  const fetchPayments = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        password: ADMIN_CONFIG.password,
        status: statusFilter,
      })
      const res = await fetch(`/api/payment/admin?${params}`)
      const data = await res.json()

      if (data.success) {
        setPayments(data.payments || [])
        setStats(data.stats || null)
      }
    } catch (error) {
      console.error('Failed to fetch payments:', error)
    } finally {
      setLoading(false)
    }
  }, [statusFilter])

  useEffect(() => {
    if (isAuthenticated) {
      fetchPayments()
    }
  }, [isAuthenticated, fetchPayments])

  // Auto-refresh every 10 seconds
  useEffect(() => {
    if (!isAuthenticated) return
    const interval = setInterval(fetchPayments, 10000)
    return () => clearInterval(interval)
  }, [isAuthenticated, fetchPayments])

  // ─── Approve/Reject Payment ────────────────────────────────────────
  const handleAction = async (paymentId: string, action: 'approve' | 'reject') => {
    setActionLoading(paymentId)
    setSuccessMessage(null)
    try {
      const res = await fetch('/api/payment/admin', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password: ADMIN_CONFIG.password,
          paymentId,
          action,
        }),
      })
      const data = await res.json()

      if (data.success) {
        setSuccessMessage(data.message)
        // Refresh the list
        await fetchPayments()
        // Auto-clear success message
        setTimeout(() => setSuccessMessage(null), 3000)
      } else {
        setSuccessMessage(`Erreur: ${data.error}`)
      }
    } catch {
      setSuccessMessage('Erreur de connexion')
    } finally {
      setActionLoading(null)
    }
  }

  // ─── Helper: Payment method display ────────────────────────────────
  const getMethodDisplay = (method: string) => {
    const map: Record<string, { icon: string; name: string; color: string }> = {
      orange_money: { icon: '🟠', name: 'Orange Money', color: 'text-orange-600' },
      mtn_momo: { icon: '🟡', name: 'MTN MoMo', color: 'text-yellow-600' },
      wave: { icon: '🔵', name: 'Wave', color: 'text-blue-600' },
      card: { icon: '💳', name: 'Carte bancaire', color: 'text-yoel-primary' },
    }
    return map[method] || { icon: '💰', name: method, color: 'text-foreground' }
  }

  // ─── Helper: Status display ────────────────────────────────────────
  const getStatusDisplay = (status: string) => {
    const map: Record<string, { label: string; color: string; bg: string }> = {
      pending: { label: 'En attente', color: 'text-amber-600', bg: 'bg-amber-500/10' },
      pending_validation: { label: 'À valider', color: 'text-orange-600', bg: 'bg-orange-500/10' },
      processing: { label: 'En cours', color: 'text-blue-600', bg: 'bg-blue-500/10' },
      success: { label: 'Approuvé', color: 'text-yoel-green', bg: 'bg-yoel-green/10' },
      failed: { label: 'Rejeté', color: 'text-red-600', bg: 'bg-red-500/10' },
      expired: { label: 'Expiré', color: 'text-muted-foreground', bg: 'bg-muted/10' },
    }
    return map[status] || { label: status, color: 'text-foreground', bg: 'bg-muted/10' }
  }

  // ─── Extract transaction ref from providerRef ──────────────────────
  const getTransactionRef = (providerRef: string | null) => {
    if (!providerRef) return null
    if (providerRef.startsWith('DIRECT-')) {
      return providerRef.replace('DIRECT-', '')
    }
    return providerRef
  }

  // ─── Render: Login Screen ──────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-background rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-border/50"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-yoel-gold" />
              <h2 className="text-lg font-bold">Admin Paiements</h2>
            </div>
            <button onClick={onClose} className="p-1.5 rounded-full hover:bg-muted">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="text-center mb-6">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-yoel-gold/10 border-2 border-yoel-gold/30 mb-3">
              <Crown className="h-8 w-8 text-yoel-gold" />
            </div>
            <p className="text-sm text-muted-foreground">
              Accédez au panneau de validation des paiements
            </p>
          </div>

          <div className="space-y-3">
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Mot de passe admin"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setAuthError(null) }}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                className="h-12 rounded-xl pr-10"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {authError && (
              <p className="text-xs text-red-500 text-center">{authError}</p>
            )}

            <Button
              className="w-full rounded-xl bg-gradient-to-r from-yoel-primary via-yoel-gold to-yoel-primary text-white font-semibold h-12"
              onClick={handleLogin}
              disabled={!password}
            >
              Se connecter
            </Button>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  // ─── Render: Admin Panel ───────────────────────────────────────────
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-background rounded-t-3xl sm:rounded-3xl w-full sm:max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl border border-border/50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border/50 px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yoel-gold/10">
                <Shield className="h-4 w-4 text-yoel-gold" />
              </div>
              <div>
                <h2 className="text-base font-bold">Paiements Admin</h2>
                <p className="text-[10px] text-muted-foreground">Gestion des paiements Premium</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={fetchPayments} className="h-8 w-8">
                <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              </Button>
              <button onClick={onClose} className="p-1.5 rounded-full hover:bg-muted">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Stats bar */}
          {stats && (
            <div className="grid grid-cols-4 gap-2 mt-3">
              <div className="p-2 rounded-lg bg-orange-500/5 border border-orange-500/10 text-center">
                <p className="text-sm font-bold text-orange-600">{stats.totalPending}</p>
                <p className="text-[8px] text-muted-foreground">En attente</p>
              </div>
              <div className="p-2 rounded-lg bg-yoel-green/5 border border-yoel-green/10 text-center">
                <p className="text-sm font-bold text-yoel-green">{stats.totalApproved}</p>
                <p className="text-[8px] text-muted-foreground">Approuvés</p>
              </div>
              <div className="p-2 rounded-lg bg-red-500/5 border border-red-500/10 text-center">
                <p className="text-sm font-bold text-red-600">{stats.totalRejected}</p>
                <p className="text-[8px] text-muted-foreground">Rejetés</p>
              </div>
              <div className="p-2 rounded-lg bg-yoel-gold/5 border border-yoel-gold/10 text-center">
                <p className="text-sm font-bold text-yoel-gold">{(stats.totalRevenueAmount || 0).toLocaleString('fr-FR')}</p>
                <p className="text-[8px] text-muted-foreground">FCFA total</p>
              </div>
            </div>
          )}

          {/* Status filter tabs */}
          <div className="flex gap-1 mt-3 overflow-x-auto">
            {[
              { value: 'pending_validation', label: 'À valider' },
              { value: 'pending', label: 'En attente' },
              { value: 'success', label: 'Approuvés' },
              { value: 'failed', label: 'Rejetés' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setStatusFilter(tab.value)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-medium whitespace-nowrap transition-colors ${
                  statusFilter === tab.value
                    ? 'bg-yoel-primary text-white'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Success message */}
        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mx-5 mt-3 p-3 rounded-xl bg-yoel-green/10 border border-yoel-green/20"
            >
              <p className="text-xs text-yoel-green font-medium">{successMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Payments list */}
        <div className="p-5 space-y-3">
          {loading && payments.length === 0 ? (
            <div className="py-12 text-center">
              <Loader2 className="h-8 w-8 animate-spin text-yoel-gold mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Chargement des paiements...</p>
            </div>
          ) : payments.length === 0 ? (
            <div className="py-12 text-center">
              <div className="text-4xl mb-3">✅</div>
              <p className="text-sm font-semibold mb-1">Aucun paiement en attente</p>
              <p className="text-xs text-muted-foreground">
                Tous les paiements ont été traités
              </p>
            </div>
          ) : (
            payments.map((payment) => {
              const method = getMethodDisplay(payment.paymentMethod)
              const status = getStatusDisplay(payment.status)
              const planInfo = PLAN_PRICES[payment.planId]
              const txRef = getTransactionRef(payment.providerRef)

              return (
                <motion.div
                  key={payment.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-border/30 overflow-hidden"
                >
                  {/* Payment header */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${method.color === 'text-orange-600' ? 'bg-orange-500/10' : method.color === 'text-blue-600' ? 'bg-blue-500/10' : 'bg-yoel-primary/10'}`}>
                          <span className="text-lg">{method.icon}</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold">{payment.user.name || payment.user.email}</p>
                          <p className="text-[10px] text-muted-foreground">
                            {method.name} · {payment.user.level}
                          </p>
                        </div>
                      </div>
                      <Badge className={`${status.bg} ${status.color} border-0 text-[9px]`}>
                        {status.label}
                      </Badge>
                    </div>

                    {/* Payment details */}
                    <div className="space-y-1.5 p-3 rounded-xl bg-muted/20">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-muted-foreground">Plan</span>
                        <span className="text-xs font-medium">{planInfo?.name || payment.planId}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-muted-foreground">Montant</span>
                        <span className="text-xs font-bold">{payment.amount.toLocaleString('fr-FR')} FCFA</span>
                      </div>
                      {txRef && (
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-muted-foreground">Réf. transaction</span>
                          <span className="text-xs font-mono font-medium text-yoel-primary">{txRef}</span>
                        </div>
                      )}
                      {payment.phoneNumber && (
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-muted-foreground">Téléphone</span>
                          <span className="text-xs font-mono">{payment.phoneNumber}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-muted-foreground">Date</span>
                        <span className="text-[10px]">
                          {new Date(payment.createdAt).toLocaleString('fr-FR', {
                            day: '2-digit',
                            month: 'short',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                      {payment.providerName === 'direct' && (
                        <div className="flex items-center gap-1 mt-1">
                          <Wallet className="h-3 w-3 text-yoel-green" />
                          <span className="text-[9px] text-yoel-green font-medium">Transfert Direct</span>
                        </div>
                      )}
                    </div>

                    {/* Action buttons (only for pending payments) */}
                    {(payment.status === 'pending_validation' || payment.status === 'pending') && (
                      <div className="flex gap-2 mt-3">
                        <Button
                          variant="outline"
                          className="flex-1 rounded-xl h-10 text-red-600 border-red-500/30 hover:bg-red-500/10 text-xs"
                          onClick={() => handleAction(payment.id, 'reject')}
                          disabled={actionLoading === payment.id}
                        >
                          {actionLoading === payment.id ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          ) : (
                            <>
                              <XCircle className="h-3.5 w-3.5 mr-1.5" />
                              Rejeter
                            </>
                          )}
                        </Button>
                        <Button
                          className="flex-1 rounded-xl h-10 bg-yoel-green text-white hover:bg-yoel-green/90 text-xs"
                          onClick={() => handleAction(payment.id, 'approve')}
                          disabled={actionLoading === payment.id}
                        >
                          {actionLoading === payment.id ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          ) : (
                            <>
                              <Check className="h-3.5 w-3.5 mr-1.5" />
                              Approuver
                            </>
                          )}
                        </Button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
