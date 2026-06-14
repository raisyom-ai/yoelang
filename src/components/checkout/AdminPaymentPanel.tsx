'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, Shield, Check, XCircle, Clock, RefreshCw, Eye,
  Loader2, AlertCircle, ChevronDown, ChevronUp, Lock,
  TrendingUp, Users, DollarSign, Ban
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
// ADMIN_CONFIG is server-only (no NEXT_PUBLIC_ prefix).
// The client authenticates by calling /api/payment/admin with the user-entered password.

// ─── Types ───────────────────────────────────────────────────────────────────

interface PaymentEntry {
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
  createdAt: string
  user: {
    id: string
    name: string | null
    email: string
    level: string
    isPremium: boolean
  }
}

interface PaymentStats {
  totalPending: number
  totalApproved: number
  totalRejected: number
  totalRevenueAmount: number
}

interface AdminPaymentPanelProps {
  onClose: () => void
}

// ─── Status Helpers ──────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<string, { label: string; color: string; bg: string; icon: typeof Clock }> = {
  pending: { label: 'En attente', color: 'text-yellow-600', bg: 'bg-yellow-500/10', icon: Clock },
  pending_validation: { label: 'À valider', color: 'text-orange-600', bg: 'bg-orange-500/10', icon: Eye },
  processing: { label: 'En cours', color: 'text-blue-600', bg: 'bg-blue-500/10', icon: Loader2 },
  success: { label: 'Approuvé', color: 'text-yoel-green', bg: 'bg-yoel-green/10', icon: Check },
  failed: { label: 'Rejeté', color: 'text-red-600', bg: 'bg-red-500/10', icon: XCircle },
  expired: { label: 'Expiré', color: 'text-muted-foreground', bg: 'bg-muted', icon: Ban },
}

const METHOD_LABELS: Record<string, { label: string; icon: string }> = {
  orange_money: { label: 'Orange Money', icon: '🟠' },
  wave: { label: 'Wave', icon: '🔵' },
  mtn_momo: { label: 'MTN MoMo', icon: '🟡' },
  card: { label: 'Carte bancaire', icon: '💳' },
}

const PLAN_LABELS: Record<string, string> = {
  essentiel: '⭐ Essentiel',
  complet: '💎 Complet',
  integral: '👑 Intégral',
}

// ─── Admin Payment Panel ─────────────────────────────────────────────────────

export default function AdminPaymentPanel({ onClose }: AdminPaymentPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState<string | null>(null)
  const [payments, setPayments] = useState<PaymentEntry[]>([])
  const [stats, setStats] = useState<PaymentStats | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [actionLoading, setActionLoading] = useState<string | null>(null)
  const [statusFilter, setStatusFilter] = useState<string>('pending_validation')
  const [expandedPayment, setExpandedPayment] = useState<string | null>(null)

  // Authenticate — verify via server API instead of local comparison
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const params = new URLSearchParams({ password, status: 'pending_validation' })
      const res = await fetch(`/api/payment/admin?${params}`)
      const data = await res.json()
      if (res.ok && data.success) {
        setIsAuthenticated(true)
        setAuthError(null)
        setPayments(data.payments)
        setStats(data.stats)
      } else {
        setAuthError(data.error || 'Mot de passe incorrect')
      }
    } catch {
      setAuthError('Erreur de connexion au serveur')
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch payments
  const fetchPayments = useCallback(async () => {
    setIsLoading(true)
    try {
      const params = new URLSearchParams({
        password,
        status: statusFilter,
      })
      const res = await fetch(`/api/payment/admin?${params}`)
      const data = await res.json()
      if (data.success) {
        setPayments(data.payments)
        setStats(data.stats)
      } else if (res.status === 401) {
        // Session expired — log out
        setIsAuthenticated(false)
        setAuthError('Session expirée. Reconnectez-vous.')
      }
    } catch (err) {
      console.error('Failed to fetch payments:', err)
    } finally {
      setIsLoading(false)
    }
  }, [statusFilter, password])

  useEffect(() => {
    if (isAuthenticated) {
      fetchPayments()
    }
  }, [isAuthenticated, fetchPayments])

  // Approve or reject payment
  const handleAction = async (paymentId: string, action: 'approve' | 'reject') => {
    setActionLoading(paymentId)
    try {
      const res = await fetch('/api/payment/admin', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password,
          paymentId,
          action,
        }),
      })
      const data = await res.json()
      if (data.success) {
        // Refresh the list
        await fetchPayments()
      } else if (res.status === 401) {
        setIsAuthenticated(false)
        setAuthError('Session expirée. Reconnectez-vous.')
      }
    } catch (err) {
      console.error('Failed to process action:', err)
    } finally {
      setActionLoading(null)
    }
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  // ─── Auth Screen ───────────────────────────────────────────────────────

  const renderAuth = () => (
    <div className="flex flex-col items-center justify-center py-8 space-y-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yoel-primary/10">
        <Lock className="h-8 w-8 text-yoel-primary" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-bold">Accès Administrateur</h3>
        <p className="text-sm text-muted-foreground mt-1">Entrez le mot de passe admin</p>
      </div>
      <form onSubmit={handleAuth} className="w-full space-y-3">
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          className="rounded-xl h-12 text-center"
        />
        {authError && (
          <p className="text-sm text-red-500 text-center">{authError}</p>
        )}
        <Button
          type="submit"
          className="w-full bg-yoel-primary text-white rounded-xl h-11"
        >
          Se connecter
        </Button>
      </form>
    </div>
  )

  // ─── Dashboard ─────────────────────────────────────────────────────────

  const renderDashboard = () => (
    <div className="space-y-4">
      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 gap-2">
          <Card className="glass-card">
            <CardContent className="p-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/10">
                <Clock className="h-4 w-4 text-orange-500" />
              </div>
              <div>
                <p className="text-lg font-bold">{stats.totalPending}</p>
                <p className="text-[10px] text-muted-foreground">En attente</p>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yoel-green/10">
                <Check className="h-4 w-4 text-yoel-green" />
              </div>
              <div>
                <p className="text-lg font-bold">{stats.totalApproved}</p>
                <p className="text-[10px] text-muted-foreground">Approuvés</p>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yoel-gold/10">
                <DollarSign className="h-4 w-4 text-yoel-gold" />
              </div>
              <div>
                <p className="text-lg font-bold">{stats.totalRevenueAmount.toLocaleString()}</p>
                <p className="text-[10px] text-muted-foreground">FCFA total</p>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/10">
                <XCircle className="h-4 w-4 text-red-500" />
              </div>
              <div>
                <p className="text-lg font-bold">{stats.totalRejected}</p>
                <p className="text-[10px] text-muted-foreground">Rejetés</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Filter tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {[
          { key: 'pending_validation', label: 'À valider' },
          { key: 'pending', label: 'En attente' },
          { key: 'success', label: 'Approuvés' },
          { key: 'failed', label: 'Rejetés' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setStatusFilter(tab.key)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
              statusFilter === tab.key
                ? 'bg-yoel-primary text-white'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Refresh */}
      <div className="flex justify-end">
        <Button
          variant="ghost"
          size="sm"
          onClick={fetchPayments}
          disabled={isLoading}
          className="gap-1.5 text-xs"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${isLoading ? 'animate-spin' : ''}`} />
          Actualiser
        </Button>
      </div>

      {/* Payment list */}
      {isLoading ? (
        <div className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 text-yoel-primary animate-spin" />
        </div>
      ) : payments.length === 0 ? (
        <div className="text-center py-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted mx-auto mb-3">
            <AlertCircle className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">Aucun paiement à afficher</p>
        </div>
      ) : (
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {payments.map((payment) => {
            const statusConf = STATUS_CONFIG[payment.status] || STATUS_CONFIG.pending
            const methodInfo = METHOD_LABELS[payment.paymentMethod] || { label: payment.paymentMethod, icon: '💰' }
            const isExpanded = expandedPayment === payment.id
            const isActionLoading = actionLoading === payment.id

            return (
              <motion.div
                key={payment.id}
                layout
                className="rounded-xl border border-border/50 bg-card overflow-hidden"
              >
                {/* Payment header */}
                <button
                  className="w-full p-3 text-left"
                  onClick={() => setExpandedPayment(isExpanded ? null : payment.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-lg">{methodInfo.icon}</span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">
                          {payment.user.name || payment.user.email}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {PLAN_LABELS[payment.planId] || payment.planId} — {payment.amount.toLocaleString()} FCFA
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Badge className={`${statusConf.bg} ${statusConf.color} border-0 text-[10px]`}>
                        {statusConf.label}
                      </Badge>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-3 pb-3 space-y-2">
                        <Separator />
                        <div className="space-y-1.5 text-xs">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Email</span>
                            <span className="font-mono">{payment.user.email}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Niveau</span>
                            <span>{payment.user.level}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Méthode</span>
                            <span>{methodInfo.label}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Référence</span>
                            <span className="font-mono text-[11px]">{payment.providerRef || '—'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Téléphone</span>
                            <span className="font-mono">{payment.phoneNumber || '—'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Date</span>
                            <span>{formatDate(payment.createdAt)}</span>
                          </div>
                          {payment.trialEnd && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Fin essai</span>
                              <span>{formatDate(payment.trialEnd)}</span>
                            </div>
                          )}
                        </div>

                        {/* Action buttons for pending payments */}
                        {['pending_validation', 'pending'].includes(payment.status) && (
                          <div className="flex gap-2 pt-2">
                            <Button
                              size="sm"
                              className="flex-1 bg-yoel-green hover:bg-yoel-green/90 text-white rounded-lg gap-1.5"
                              disabled={isActionLoading}
                              onClick={() => handleAction(payment.id, 'approve')}
                            >
                              {isActionLoading ? (
                                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                              ) : (
                                <Check className="h-3.5 w-3.5" />
                              )}
                              Approuver
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 text-red-600 hover:bg-red-500/10 border-red-500/30 rounded-lg gap-1.5"
                              disabled={isActionLoading}
                              onClick={() => handleAction(payment.id, 'reject')}
                            >
                              <XCircle className="h-3.5 w-3.5" />
                              Rejeter
                            </Button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      )}
    </div>
  )

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      >
        <motion.div
          className="bg-background rounded-t-3xl sm:rounded-3xl w-full sm:max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl border border-border/30"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring' as const, stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-yoel-primary" />
                <h2 className="text-base font-bold">Administration Paiements</h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsAuthenticated(false)
                  setPassword('')
                  onClose()
                }}
                className="rounded-full h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {isAuthenticated ? renderDashboard() : renderAuth()}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
