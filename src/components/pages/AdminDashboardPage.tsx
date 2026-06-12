'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield, Users, CreditCard, TrendingUp, ArrowLeft,
  Check, X, Search, RefreshCw, Crown, Star, Loader2,
  UserX, UserCheck, ChevronLeft, ChevronRight, LogOut,
  BarChart3, DollarSign, Clock, CheckCircle2, XCircle,
  AlertTriangle, Eye, Trash2, ChevronDown
} from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'

// ─── Types ──────────────────────────────────────────────────────────────

interface AdminStats {
  totalUsers: number
  premiumUsers: number
  freeUsers: number
  totalPayments: number
  pendingPayments: number
  successPayments: number
  totalRevenue: number
}

interface AdminUser {
  id: string
  email: string
  name: string | null
  level: string
  xp: number
  streak: number
  coins: number
  isPremium: boolean
  premiumPlan: string | null
  createdAt: string
  _count: {
    completions: number
    payments: number
    chatMessages: number
  }
}

interface AdminPayment {
  id: string
  userId: string
  planId: string
  amount: number
  currency: string
  paymentMethod: string
  status: string
  providerRef: string | null
  createdAt: string
  user: {
    id: string
    email: string
    name: string | null
  }
}

type AdminTab = 'overview' | 'users' | 'payments'

// ─── Stat Card ──────────────────────────────────────────────────────────

function StatCard({ icon: Icon, label, value, color, sub }: {
  icon: React.ElementType
  label: string
  value: string | number
  color: string
  sub?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border rounded-xl p-5 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-3">
        <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        {sub && <span className="text-xs text-muted-foreground">{sub}</span>}
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </motion.div>
  )
}

// ─── Status Badge ───────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { label: string; className: string }> = {
    pending: { label: 'En attente', className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' },
    pending_validation: { label: 'À valider', className: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' },
    processing: { label: 'En cours', className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' },
    success: { label: 'Approuvé', className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
    failed: { label: 'Rejeté', className: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' },
    expired: { label: 'Expiré', className: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400' },
  }
  const c = config[status] || { label: status, className: 'bg-gray-100 text-gray-800' }
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${c.className}`}>{c.label}</span>
}

// ─── Payment Method Badge ───────────────────────────────────────────────

function PaymentMethodBadge({ method }: { method: string }) {
  const config: Record<string, { label: string; emoji: string }> = {
    orange_money: { label: 'Orange Money', emoji: '🟠' },
    wave: { label: 'Wave', emoji: '🔵' },
    mtn_momo: { label: 'MTN MoMo', emoji: '🟡' },
    card: { label: 'Carte', emoji: '💳' },
  }
  const c = config[method] || { label: method, emoji: '💰' }
  return <span className="text-xs">{c.emoji} {c.label}</span>
}

// ─── Plan Badge ─────────────────────────────────────────────────────────

function PlanBadge({ plan }: { plan: string | null }) {
  if (!plan) return <span className="text-xs text-muted-foreground">Gratuit</span>
  const config: Record<string, { label: string; className: string }> = {
    essentiel: { label: 'Essentiel', className: 'bg-yoel-primary/10 text-yoel-primary' },
    complet: { label: 'Complet', className: 'bg-yoel-blue/10 text-yoel-blue' },
    integral: { label: 'Intégral', className: 'bg-yoel-gold/10 text-yoel-gold' },
  }
  const c = config[plan] || { label: plan, className: 'bg-muted text-muted-foreground' }
  return <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${c.className}`}>{c.label}</span>
}

// ─── Main Component ─────────────────────────────────────────────────────

export default function AdminDashboardPage() {
  const { user, navigate, logout } = useAppStore()
  const [activeTab, setActiveTab] = useState<AdminTab>('overview')
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [users, setUsers] = useState<AdminUser[]>([])
  const [payments, setPayments] = useState<AdminPayment[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [userSearch, setUserSearch] = useState('')
  const [paymentFilter, setPaymentFilter] = useState('')
  const [userPage, setUserPage] = useState(1)
  const [paymentPage, setPaymentPage] = useState(1)
  const [userTotalPages, setUserTotalPages] = useState(1)
  const [paymentTotalPages, setPaymentTotalPages] = useState(1)
  const [actionLoading, setActionLoading] = useState<string | null>(null)
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null)

  const fetchStats = useCallback(async () => {
    if (!user?.id) return
    try {
      const res = await fetch(`/api/admin/stats?adminUserId=${user.id}`)
      if (res.ok) {
        const data = await res.json()
        setStats(data.stats)
      }
    } catch (err) {
      console.error('Stats fetch error:', err)
    }
  }, [user?.id])

  const fetchUsers = useCallback(async () => {
    if (!user?.id) return
    try {
      const params = new URLSearchParams({
        adminUserId: user.id,
        page: String(userPage),
        limit: '20',
        search: userSearch,
      })
      const res = await fetch(`/api/admin/users?${params}`)
      if (res.ok) {
        const data = await res.json()
        setUsers(data.users)
        setUserTotalPages(data.pagination.totalPages)
      }
    } catch (err) {
      console.error('Users fetch error:', err)
    }
  }, [user?.id, userPage, userSearch])

  const fetchPayments = useCallback(async () => {
    if (!user?.id) return
    try {
      const params = new URLSearchParams({
        adminUserId: user.id,
        page: String(paymentPage),
        limit: '20',
        status: paymentFilter,
      })
      const res = await fetch(`/api/admin/payments?${params}`)
      if (res.ok) {
        const data = await res.json()
        setPayments(data.payments)
        setPaymentTotalPages(data.pagination.totalPages)
      }
    } catch (err) {
      console.error('Payments fetch error:', err)
    }
  }, [user?.id, paymentPage, paymentFilter])

  // Initial load
  useEffect(() => {
    if (user?.role !== 'admin') {
      navigate('home')
      return
    }
    const load = async () => {
      setIsLoading(true)
      await Promise.all([fetchStats(), fetchUsers(), fetchPayments()])
      setIsLoading(false)
    }
    load()
  }, [])

  // Refresh on tab change
  useEffect(() => {
    if (!isLoading) {
      if (activeTab === 'users') fetchUsers()
      if (activeTab === 'payments') fetchPayments()
      if (activeTab === 'overview') fetchStats()
    }
  }, [activeTab, userPage, paymentPage, paymentFilter])

  const handleUserAction = async (targetUserId: string, action: string, data?: Record<string, string>) => {
    setActionLoading(targetUserId + action)
    try {
      const res = await fetch('/api/admin/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminUserId: user?.id, targetUserId, action, data }),
      })
      const result = await res.json()
      if (res.ok) {
        toast.success(result.message || 'Action réussie')
        fetchUsers()
        fetchStats()
        if (selectedUser?.id === targetUserId) setSelectedUser(null)
      } else {
        toast.error(result.error || 'Erreur')
      }
    } catch {
      toast.error('Erreur serveur')
    } finally {
      setActionLoading(null)
    }
  }

  const handlePaymentAction = async (paymentId: string, action: 'approve' | 'reject') => {
    setActionLoading(paymentId + action)
    try {
      const res = await fetch('/api/admin/payments', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminUserId: user?.id, paymentId, action }),
      })
      const result = await res.json()
      if (res.ok) {
        toast.success(result.message)
        fetchPayments()
        fetchStats()
      } else {
        toast.error(result.error || 'Erreur')
      }
    } catch {
      toast.error('Erreur serveur')
    } finally {
      setActionLoading(null)
    }
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const formatFCFA = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount) + ' F'
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-yoel-primary" />
          <p className="mt-4 text-muted-foreground">Chargement du panneau admin...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold">YOELANG Admin</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">{user?.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  fetchStats()
                  fetchUsers()
                  fetchPayments()
                  toast.success('Données actualisées')
                }}
              >
                <RefreshCw className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  logout()
                  navigate('home')
                }}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tab Navigation */}
        <div className="flex gap-1 p-1 bg-muted rounded-lg mb-6 w-fit">
          {[
            { id: 'overview' as AdminTab, label: 'Vue d\'ensemble', icon: BarChart3 },
            { id: 'users' as AdminTab, label: 'Utilisateurs', icon: Users },
            { id: 'payments' as AdminTab, label: 'Paiements', icon: CreditCard },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-800 shadow-sm text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* ─── Overview Tab ──────────────────────────────────────────── */}
          {activeTab === 'overview' && stats && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon={Users} label="Utilisateurs" value={stats.totalUsers} color="bg-yoel-primary" sub={stats.freeUsers + ' gratuits'} />
                <StatCard icon={Crown} label="Premium" value={stats.premiumUsers} color="bg-yoel-gold" sub={`${stats.totalUsers > 0 ? Math.round(stats.premiumUsers / stats.totalUsers * 100) : 0}%`} />
                <StatCard icon={DollarSign} label="Revenus" value={formatFCFA(stats.totalRevenue)} color="bg-green-600" />
                <StatCard icon={Clock} label="Paiements en attente" value={stats.pendingPayments} color="bg-orange-500" />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Recent Users */}
                <div className="bg-card border rounded-xl p-5">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Users className="w-4 h-4 text-yoel-primary" />
                    Derniers utilisateurs
                  </h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {users.slice(0, 5).map((u) => (
                      <div key={u.id} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                            <span className="text-xs font-medium">{(u.name || u.email)[0].toUpperCase()}</span>
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium truncate">{u.name || u.email.split('@')[0]}</p>
                            <p className="text-xs text-muted-foreground truncate">{u.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <PlanBadge plan={u.isPremium ? u.premiumPlan : null} />
                        </div>
                      </div>
                    ))}
                    {users.length === 0 && <p className="text-sm text-muted-foreground text-center py-4">Aucun utilisateur</p>}
                  </div>
                </div>

                {/* Recent Payments */}
                <div className="bg-card border rounded-xl p-5">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-yoel-primary" />
                    Derniers paiements
                  </h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {payments.slice(0, 5).map((p) => (
                      <div key={p.id} className="flex items-center justify-between text-sm">
                        <div className="min-w-0">
                          <p className="font-medium truncate">{p.user.name || p.user.email.split('@')[0]}</p>
                          <p className="text-xs text-muted-foreground">
                            <PaymentMethodBadge method={p.paymentMethod} />
                          </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-semibold">{formatFCFA(p.amount)}</span>
                          <StatusBadge status={p.status} />
                        </div>
                      </div>
                    ))}
                    {payments.length === 0 && <p className="text-sm text-muted-foreground text-center py-4">Aucun paiement</p>}
                  </div>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="bg-card border rounded-xl p-5">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-yoel-primary" />
                  Résumé des paiements
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-600">{stats.pendingPayments}</p>
                    <p className="text-xs text-muted-foreground">En attente</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 dark:bg-green-900/10 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">{stats.successPayments}</p>
                    <p className="text-xs text-muted-foreground">Approuvés</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{stats.totalPayments}</p>
                    <p className="text-xs text-muted-foreground">Total</p>
                  </div>
                  <div className="text-center p-3 bg-yoel-gold/10 rounded-lg">
                    <p className="text-2xl font-bold text-yoel-gold">{formatFCFA(stats.totalRevenue)}</p>
                    <p className="text-xs text-muted-foreground">Revenus totaux</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ─── Users Tab ─────────────────────────────────────────────── */}
          {activeTab === 'users' && (
            <motion.div
              key="users"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {/* Search bar */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Rechercher par email ou nom..."
                    value={userSearch}
                    onChange={(e) => {
                      setUserSearch(e.target.value)
                      setUserPage(1)
                    }}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Users Table */}
              <div className="bg-card border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Utilisateur</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden md:table-cell">Niveau</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden sm:table-cell">XP</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">Plan</th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden lg:table-cell">Inscrit</th>
                        <th className="text-right p-4 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((u) => (
                        <tr key={u.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yoel-primary/20 to-yoel-primary/5 flex items-center justify-center shrink-0">
                                <span className="text-sm font-semibold text-yoel-primary">
                                  {(u.name || u.email)[0].toUpperCase()}
                                </span>
                              </div>
                              <div className="min-w-0">
                                <p className="font-medium text-sm truncate">{u.name || '—'}</p>
                                <p className="text-xs text-muted-foreground truncate">{u.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 hidden md:table-cell">
                            <Badge variant="outline" className="text-xs">{u.level}</Badge>
                          </td>
                          <td className="p-4 hidden sm:table-cell">
                            <span className="text-sm">{u.xp.toLocaleString()}</span>
                          </td>
                          <td className="p-4">
                            <PlanBadge plan={u.isPremium ? u.premiumPlan : null} />
                          </td>
                          <td className="p-4 hidden lg:table-cell">
                            <span className="text-xs text-muted-foreground">{formatDate(u.createdAt)}</span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center justify-end gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleUserAction(u.id, 'toggle_premium', { plan: 'essentiel' })}
                                disabled={actionLoading === u.id + 'toggle_premium'}
                                className={u.isPremium ? 'text-orange-600 hover:text-orange-700' : 'text-green-600 hover:text-green-700'}
                                title={u.isPremium ? 'Retirer Premium' : 'Activer Premium'}
                              >
                                {actionLoading === u.id + 'toggle_premium' ? (
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                ) : u.isPremium ? (
                                  <UserX className="w-4 h-4" />
                                ) : (
                                  <UserCheck className="w-4 h-4" />
                                )}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette action est irréversible.')) {
                                    handleUserAction(u.id, 'delete_user')
                                  }
                                }}
                                disabled={actionLoading === u.id + 'delete_user'}
                                className="text-destructive hover:text-destructive"
                                title="Supprimer l'utilisateur"
                              >
                                {actionLoading === u.id + 'delete_user' ? (
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                  <Trash2 className="w-4 h-4" />
                                )}
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {users.length === 0 && (
                    <div className="py-12 text-center text-muted-foreground">
                      <Users className="w-12 h-12 mx-auto mb-3 opacity-30" />
                      <p>Aucun utilisateur trouvé</p>
                    </div>
                  )}
                </div>

                {/* Pagination */}
                {userTotalPages > 1 && (
                  <div className="flex items-center justify-between p-4 border-t">
                    <p className="text-sm text-muted-foreground">Page {userPage} / {userTotalPages}</p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setUserPage(Math.max(1, userPage - 1))}
                        disabled={userPage <= 1}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setUserPage(Math.min(userTotalPages, userPage + 1))}
                        disabled={userPage >= userTotalPages}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* ─── Payments Tab ──────────────────────────────────────────── */}
          {activeTab === 'payments' && (
            <motion.div
              key="payments"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {/* Filter buttons */}
              <div className="flex flex-wrap gap-2">
                {[
                  { value: '', label: 'Tous' },
                  { value: 'pending_validation', label: 'À valider' },
                  { value: 'pending', label: 'En attente' },
                  { value: 'success', label: 'Approuvés' },
                  { value: 'failed', label: 'Rejetés' },
                ].map((filter) => (
                  <Button
                    key={filter.value}
                    variant={paymentFilter === filter.value ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => {
                      setPaymentFilter(filter.value)
                      setPaymentPage(1)
                    }}
                    className={paymentFilter === filter.value ? 'bg-gray-900 hover:bg-gray-800' : ''}
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>

              {/* Payments List */}
              <div className="space-y-3">
                {payments.map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-card border rounded-xl p-4 hover:shadow-sm transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                          p.status === 'success' ? 'bg-green-100 dark:bg-green-900/20' :
                          p.status === 'failed' ? 'bg-red-100 dark:bg-red-900/20' :
                          'bg-yellow-100 dark:bg-yellow-900/20'
                        }`}>
                          {p.status === 'success' ? <CheckCircle2 className="w-5 h-5 text-green-600" /> :
                           p.status === 'failed' ? <XCircle className="w-5 h-5 text-red-600" /> :
                           <Clock className="w-5 h-5 text-yellow-600" />}
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-sm">{p.user.name || p.user.email.split('@')[0]}</p>
                          <p className="text-xs text-muted-foreground truncate">{p.user.email}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                        <div className="text-sm">
                          <span className="font-semibold">{formatFCFA(p.amount)}</span>
                          <span className="text-muted-foreground ml-1">·</span>
                          <span className="ml-1"><PaymentMethodBadge method={p.paymentMethod} /></span>
                        </div>
                        <PlanBadge plan={p.planId} />
                        <StatusBadge status={p.status} />
                        
                        {(p.status === 'pending' || p.status === 'pending_validation') && (
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() => handlePaymentAction(p.id, 'approve')}
                              disabled={actionLoading === p.id + 'approve'}
                              className="bg-green-600 hover:bg-green-700 text-white h-8"
                            >
                              {actionLoading === p.id + 'approve' ? (
                                <Loader2 className="w-3 h-3 animate-spin" />
                              ) : (
                                <Check className="w-3 h-3 mr-1" />
                              )}
                              Approuver
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handlePaymentAction(p.id, 'reject')}
                              disabled={actionLoading === p.id + 'reject'}
                              className="text-red-600 hover:text-red-700 border-red-200 hover:border-red-300 h-8"
                            >
                              {actionLoading === p.id + 'reject' ? (
                                <Loader2 className="w-3 h-3 animate-spin" />
                              ) : (
                                <X className="w-3 h-3 mr-1" />
                              )}
                              Rejeter
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-2 pt-2 border-t flex items-center justify-between text-xs text-muted-foreground">
                      <span>{formatDate(p.createdAt)}</span>
                      {p.providerRef && <span>Réf: {p.providerRef}</span>}
                    </div>
                  </motion.div>
                ))}

                {payments.length === 0 && (
                  <div className="py-12 text-center text-muted-foreground bg-card border rounded-xl">
                    <CreditCard className="w-12 h-12 mx-auto mb-3 opacity-30" />
                    <p>Aucun paiement trouvé</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {paymentTotalPages > 1 && (
                <div className="flex items-center justify-between p-4">
                  <p className="text-sm text-muted-foreground">Page {paymentPage} / {paymentTotalPages}</p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPaymentPage(Math.max(1, paymentPage - 1))}
                      disabled={paymentPage <= 1}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPaymentPage(Math.min(paymentTotalPages, paymentPage + 1))}
                      disabled={paymentPage >= paymentTotalPages}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t bg-white dark:bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-muted-foreground">
          YOELANG Administration · Panneau de gestion
        </div>
      </footer>
    </div>
  )
}
