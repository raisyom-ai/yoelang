'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Chrome, Mail, Lock, Eye, EyeOff, Loader2, User, ArrowRight, CheckCircle2, X } from 'lucide-react'
import { useAppStore, type UserState, type PremiumPlan } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

type DialogStep = 'email' | 'needs_password' | 'has_password' | 'new_user' | 'success'

interface GoogleEmailDialogProps {
  open: boolean
  onClose: () => void
  /** 'login' or 'register' — changes some text */
  mode: 'login' | 'register'
}

export default function GoogleEmailDialog({ open, onClose, mode }: GoogleEmailDialogProps) {
  const { setUser, setCurrentLevel, navigate, loadUserProgress } = useAppStore()

  // Step tracking
  const [step, setStep] = useState<DialogStep>('email')
  const [checkedEmail, setCheckedEmail] = useState('')

  // Form fields
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Loading & errors
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const resetState = () => {
    setStep('email')
    setCheckedEmail('')
    setEmail('')
    setName('')
    setPassword('')
    setConfirmPassword('')
    setShowPassword(false)
    setShowConfirmPassword(false)
    setIsLoading(false)
    setError('')
  }

  const handleClose = () => {
    resetState()
    onClose()
  }

  const buildUserState = (data: Record<string, unknown>): UserState => ({
    id: data.id as string,
    email: data.email as string,
    name: (data.name as string) || (data.email as string).split('@')[0],
    avatar: (data.avatar as string | null) || null,
    role: ((data.role as string) || 'user') as 'user' | 'admin',
    level: (data.level as string) || 'A1',
    xp: (data.xp as number) || 0,
    streak: (data.streak as number) || 0,
    coins: (data.coins as number) || 0,
    isPremium: (data.isPremium as boolean) || false,
    premiumPlan: ((data.premiumPlan as string | null) || null) as PremiumPlan | null,
    dailyGoal: (data.dailyGoal as number) ?? 20,
    notifications: (data.notifications as boolean) ?? true,
    darkMode: (data.darkMode as boolean) ?? false,
    soundEnabled: (data.soundEnabled as boolean) ?? true,
  })

  const fetchUserProgress = async (userId: string) => {
    try {
      const res = await fetch(`/api/user/progress?userId=${userId}`)
      if (res.ok) {
        const data = await res.json()
        if (data.success) {
          loadUserProgress({
            completedLessons: data.completedLessons || [],
            completions: data.completions || [],
            certificates: data.certificates || [],
            examAttempts: data.examAttempts || [],
            earnedBadges: data.earnedBadges || [],
          })
        }
      }
    } catch {
      // Progress loading failed
    }
  }

  const handleLoginSuccess = (userData: Record<string, unknown>, isAdmin: boolean) => {
    const loggedInUser = buildUserState(userData)
    setUser(loggedInUser)
    setCurrentLevel(loggedInUser.level)
    fetchUserProgress(loggedInUser.id)

    setStep('success')
    setTimeout(() => {
      handleClose()
      if (isAdmin) {
        navigate('admin-dashboard')
      } else {
        navigate('dashboard')
      }
    }, 1500)
  }

  // ─── Step 1: Check email ────────────────────────────────────────────
  const handleCheckEmail = async (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      setError('Veuillez entrer votre adresse email')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Adresse email invalide')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/google-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'check', email }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Erreur')
        return
      }

      setCheckedEmail(email)

      if (data.status === 'needs_password') {
        setStep('needs_password')
        setName(data.userName || '')
      } else if (data.status === 'has_password') {
        setStep('has_password')
      } else if (data.status === 'new_user') {
        setStep('new_user')
        setName(email.split('@')[0])
      }
    } catch {
      setError('Erreur de connexion au serveur')
    } finally {
      setIsLoading(false)
    }
  }

  // ─── Step 2a: Set password for existing OAuth account ──────────────
  const handleSetPassword = async (e: FormEvent) => {
    e.preventDefault()
    if (!password) {
      setError('Le mot de passe est requis')
      return
    }
    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères')
      return
    }
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/google-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'set_password', email: checkedEmail, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Erreur')
        return
      }

      toast.success('Mot de passe défini !', { description: 'Votre compte est maintenant sécurisé.' })
      handleLoginSuccess(data.user, data.isAdmin)
    } catch {
      setError('Erreur de connexion au serveur')
    } finally {
      setIsLoading(false)
    }
  }

  // ─── Step 2b: Login with existing password ────────────────────────────
  const handleLoginWithPassword = async (e: FormEvent) => {
    e.preventDefault()
    if (!password) {
      setError('Le mot de passe est requis')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: checkedEmail, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        if (data.code === 'ACCOUNT_NEEDS_PASSWORD') {
          setError('Votre compte n\'a pas de mot de passe. Veuillez le définir.')
          setStep('needs_password')
          setPassword('')
          return
        }
        setError(data.error || 'Email ou mot de passe incorrect')
        return
      }

      toast.success('Connexion réussie !')
      handleLoginSuccess(data.user, data.isAdmin)
    } catch {
      setError('Erreur de connexion au serveur')
    } finally {
      setIsLoading(false)
    }
  }

  // ─── Step 2c: Create new account ────────────────────────────────────
  const handleRegister = async (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      setError('Le nom est requis')
      return
    }
    if (!password) {
      setError('Le mot de passe est requis')
      return
    }
    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères')
      return
    }
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/google-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'register', email: checkedEmail, password, name }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Erreur')
        return
      }

      toast.success('Bienvenue !', { description: 'Votre compte Google a été créé avec succès.' })
      handleLoginSuccess(data.user, data.isAdmin)
    } catch {
      setError('Erreur de connexion au serveur')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring' as const, duration: 0.4 }}
            className="w-full max-w-md bg-background rounded-2xl shadow-2xl border overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Chrome className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Connexion avec Google</h3>
                  <p className="text-sm text-white/80">Connectez-vous avec votre email</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {/* ─── Step: Enter email ─────────────────────────────── */}
                {step === 'email' && (
                  <motion.div
                    key="email"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-sm text-muted-foreground mb-4">
                      Entrez votre adresse email pour vous connecter ou créer un compte.
                      Un mot de passe sera requis pour sécuriser votre compte.
                    </p>

                    <form onSubmit={handleCheckEmail} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="google-email">Adresse email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="google-email"
                            type="email"
                            placeholder="votre.email@example.com"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value)
                              if (error) setError('')
                            }}
                            className="pl-10 h-11"
                            autoComplete="email"
                            disabled={isLoading}
                            autoFocus
                          />
                        </div>
                      </div>

                      {error && (
                        <p className="text-sm text-destructive">{error}</p>
                      )}

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-11 bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                      >
                        {isLoading ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>
                            Continuer
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </motion.div>
                )}

                {/* ─── Step: Account needs password (legacy OAuth) ───── */}
                {step === 'needs_password' && (
                  <motion.div
                    key="needs_password"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
                      <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{checkedEmail}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      Votre compte a été créé avec cette adresse Google. Pour le sécuriser, veuillez choisir un mot de passe.
                    </p>

                    <form onSubmit={handleSetPassword} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="google-new-password">Nouveau mot de passe</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="google-new-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value)
                              if (error) setError('')
                            }}
                            className="pl-10 pr-10 h-11"
                            autoComplete="new-password"
                            disabled={isLoading}
                            autoFocus
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            tabIndex={-1}
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="google-confirm-password">Confirmer le mot de passe</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="google-confirm-password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={(e) => {
                              setConfirmPassword(e.target.value)
                              if (error) setError('')
                            }}
                            className="pl-10 pr-10 h-11"
                            autoComplete="new-password"
                            disabled={isLoading}
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            tabIndex={-1}
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {error && (
                        <p className="text-sm text-destructive">{error}</p>
                      )}

                      <div className="flex gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1"
                          onClick={() => { setStep('email'); setError('') }}
                          disabled={isLoading}
                        >
                          Retour
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            'Définir le mot de passe'
                          )}
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* ─── Step: Account has password already — login directly ─ */}
                {step === 'has_password' && (
                  <motion.div
                    key="has_password"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
                      <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{checkedEmail}</span>
                    </div>

                    <div className="text-center mb-4">
                      <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-green-50 dark:bg-green-950/30 flex items-center justify-center">
                        <CheckCircle2 className="w-7 h-7 text-green-500" />
                      </div>
                      <p className="text-sm font-medium">
                        Utilisez votre email et mot de passe pour vous connecter.
                      </p>
                    </div>

                    <form onSubmit={handleLoginWithPassword} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="google-login-password">Mot de passe</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="google-login-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value)
                              if (error) setError('')
                            }}
                            className="pl-10 pr-10 h-11"
                            autoComplete="current-password"
                            disabled={isLoading}
                            autoFocus
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            tabIndex={-1}
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {error && (
                        <p className="text-sm text-destructive">{error}</p>
                      )}

                      <div className="flex gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1"
                          onClick={() => { setStep('email'); setError(''); setPassword('') }}
                          disabled={isLoading}
                        >
                          Retour
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            'Se connecter'
                          )}
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* ─── Step: New user — create account ───────────────── */}
                {step === 'new_user' && (
                  <motion.div
                    key="new_user"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
                      <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{checkedEmail}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      Nouvelle adresse Google ! Créez votre compte en choisissant un nom et un mot de passe.
                    </p>

                    <form onSubmit={handleRegister} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="google-name">Nom complet</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="google-name"
                            type="text"
                            placeholder="Jean Dupont"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value)
                              if (error) setError('')
                            }}
                            className="pl-10 h-11"
                            autoComplete="name"
                            disabled={isLoading}
                            autoFocus
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="google-reg-password">Mot de passe</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="google-reg-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value)
                              if (error) setError('')
                            }}
                            className="pl-10 pr-10 h-11"
                            autoComplete="new-password"
                            disabled={isLoading}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            tabIndex={-1}
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="google-reg-confirm">Confirmer le mot de passe</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="google-reg-confirm"
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={(e) => {
                              setConfirmPassword(e.target.value)
                              if (error) setError('')
                            }}
                            className="pl-10 pr-10 h-11"
                            autoComplete="new-password"
                            disabled={isLoading}
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            tabIndex={-1}
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {error && (
                        <p className="text-sm text-destructive">{error}</p>
                      )}

                      <div className="flex gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1"
                          onClick={() => { setStep('email'); setError('') }}
                          disabled={isLoading}
                        >
                          Retour
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            'Créer le compte'
                          )}
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* ─── Step: Success ──────────────────────────────────── */}
                {step === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="py-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring' as const, delay: 0.1 }}
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </motion.div>
                    <p className="text-lg font-semibold">Connexion réussie !</p>
                    <p className="text-sm text-muted-foreground mt-1">Redirection en cours...</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
