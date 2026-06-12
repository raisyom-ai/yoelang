'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, Loader2, Chrome, Apple, BookOpen, Globe, Sparkles, ArrowLeft, Shield } from 'lucide-react'
import { useAppStore, type UserState } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'
import OAuthDialog from '@/components/OAuthDialog'

interface FormErrors {
  email?: string
  password?: string
}

type OAuthProvider = 'google' | 'apple'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function LoginPage() {
  const { navigate, goBack, setUser, setCurrentLevel } = useAppStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [oauthDialog, setOauthDialog] = useState<OAuthProvider | null>(null)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!email.trim()) {
      newErrors.email = "L'adresse email est requise"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "L'adresse email n'est pas valide"
    }

    if (!password) {
      newErrors.password = 'Le mot de passe est requis'
    } else if (password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
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
    premiumPlan: (data.premiumPlan as string | null) || null,
    dailyGoal: (data.dailyGoal as number) ?? 20,
    notifications: (data.notifications as boolean) ?? true,
    darkMode: (data.darkMode as boolean) ?? false,
    soundEnabled: (data.soundEnabled as boolean) ?? true,
  })

  const handleOAuthSuccess = (data: Record<string, unknown>) => {
    if (data.isAdmin) {
      const adminUser = buildUserState({ ...data.user, role: 'admin' } as Record<string, unknown>)
      setUser(adminUser)
      navigate('admin-dashboard')
      toast.success('Bienvenue Admin !', { description: 'Connexion au panneau d\'administration' })
      return
    }

    const user = buildUserState(data.user as Record<string, unknown>)
    setUser(user)
    setCurrentLevel(user.level)
    navigate('dashboard')

    if (data.isNewUser) {
      toast.success('Bienvenue !', { description: 'Votre compte a été créé avec succès' })
    } else {
      toast.success('Bon retour !', { description: 'Connexion réussie' })
    }
  }

  const handleEmailLogin = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, rememberMe }),
      })

      if (res.ok) {
        const data = await res.json()

        // If the user is an admin, redirect to admin dashboard
        if (data.isAdmin) {
          const adminUser = buildUserState({ ...data.user, role: 'admin' })
          setUser(adminUser)
          navigate('admin-dashboard')
          toast.success('Bienvenue Admin !', { description: 'Connexion au panneau d\'administration' })
          return
        }

        const loggedInUser = buildUserState(data.user)
        setUser(loggedInUser)
        setCurrentLevel(loggedInUser.level)
        navigate('dashboard')
        toast.success('Bienvenue !', { description: 'Connexion réussie' })
      } else {
        const data = await res.json().catch(() => null)
        toast.error('Connexion échouée', {
          description: data?.error || 'Email ou mot de passe incorrect',
        })
      }
    } catch {
      toast.error('Connexion échouée', {
        description: 'Erreur de connexion au serveur. Veuillez réessayer.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* OAuth Dialog */}
      {oauthDialog && (
        <OAuthDialog
          provider={oauthDialog}
          onClose={() => setOauthDialog(null)}
          onSuccess={(data) => {
            setOauthDialog(null)
            handleOAuthSuccess(data)
          }}
        />
      )}

      {/* Left branding panel */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-yoel-primary via-yoel-primary-dark to-yoel-blue-dark items-center justify-center p-12"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-yoel-blue/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-yoel-gold/10 blur-2xl" />
          {/* Floating decorative elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 right-20 text-6xl opacity-20"
          >
            🇬🇧
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-32 left-16 text-5xl opacity-20"
          >
            📚
          </motion.div>
          <motion.div
            animate={{ y: [-8, 12, -8] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 right-1/3 text-4xl opacity-15"
          >
            ✨
          </motion.div>
        </div>

        <div className="relative z-10 text-center max-w-md">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
            className="mb-8"
          >
            <img
              src="/yoelang-logo.png"
              alt="YOELANG"
              className="w-28 h-28 mx-auto drop-shadow-2xl"
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.display = 'none'
              }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
            YOELANG
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-white/80 text-lg mb-8"
          >
            Votre passeport vers l&apos;anglais
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col gap-4 items-center"
          >
            <div className="flex items-center gap-3 text-white/70">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm">+10 000 leçons interactives</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <Globe className="w-5 h-5" />
              <span className="text-sm">Apprentissage adaptatif par IA</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm">Certifié par des professeurs natifs</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-background">
        <motion.div
          initial="hidden"
          animate="visible"
          className="w-full max-w-md"
        >
          {/* Back button */}
          <motion.div
            custom={0}
            variants={fadeInUp}
            className="mb-4"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={goBack}
              className="text-muted-foreground hover:text-foreground -ml-2"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Retour
            </Button>
          </motion.div>

          {/* Logo for mobile */}
          <motion.div
            custom={1}
            variants={fadeInUp}
            className="flex items-center justify-center lg:hidden mb-8"
          >
            <img
              src="/yoelang-logo.png"
              alt="YOELANG"
              className="w-16 h-16"
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.display = 'none'
              }}
            />
          </motion.div>

          {/* Header */}
          <motion.div custom={1} variants={fadeInUp} className="mb-8">
            <h2 className="text-3xl font-bold gradient-text-primary">Bon retour !</h2>
            <p className="text-muted-foreground mt-2">
              Connectez-vous pour continuer votre apprentissage
            </p>
          </motion.div>

          {/* Social buttons */}
          <motion.div custom={2} variants={fadeInUp} className="space-y-3">
            <Button
              type="button"
              variant="outline"
              className="w-full h-11 text-sm font-medium hover:border-red-300 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
              disabled={isLoading}
              onClick={() => setOauthDialog('google')}
            >
              <Chrome className="w-5 h-5 mr-2 text-red-500" />
              Continuer avec Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full h-11 text-sm font-medium hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors"
              disabled={isLoading}
              onClick={() => setOauthDialog('apple')}
            >
              <Apple className="w-5 h-5 mr-2" />
              Continuer avec Apple
            </Button>
          </motion.div>

          {/* Divider */}
          <motion.div custom={3} variants={fadeInUp} className="my-6">
            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3 text-xs text-muted-foreground uppercase">
                ou avec email
              </span>
            </div>
          </motion.div>

          {/* Email/Password Form */}
          <form onSubmit={handleEmailLogin} className="space-y-5">
            {/* Email */}
            <motion.div custom={4} variants={fadeInUp} className="space-y-2">
              <Label htmlFor="email">Adresse email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
                  }}
                  className={`pl-10 h-11 ${errors.email ? 'border-destructive' : ''}`}
                  autoComplete="email"
                  disabled={isLoading}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </motion.div>

            {/* Password */}
            <motion.div custom={5} variants={fadeInUp} className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
                  }}
                  className={`pl-10 pr-10 h-11 ${errors.password ? 'border-destructive' : ''}`}
                  autoComplete="current-password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  tabIndex={-1}
                  aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password}</p>
              )}
            </motion.div>

            {/* Remember & Forgot */}
            <motion.div
              custom={6}
              variants={fadeInUp}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked === true)}
                  disabled={isLoading}
                />
                <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                  Se souvenir de moi
                </Label>
              </div>
              <button
                type="button"
                className="text-sm text-yoel-primary hover:text-yoel-primary-dark transition-colors font-medium"
                onClick={() => toast.info('Fonctionnalité à venir', { description: 'La réinitialisation du mot de passe sera bientôt disponible.' })}
              >
                Mot de passe oublié ?
              </button>
            </motion.div>

            {/* Submit button */}
            <motion.div custom={7} variants={fadeInUp}>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 text-base font-semibold bg-gradient-to-r from-yoel-primary to-yoel-primary-dark hover:from-yoel-primary-dark hover:to-yoel-primary text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  'Se connecter'
                )}
              </Button>
            </motion.div>
          </form>

          {/* Register link */}
          <motion.p
            custom={8}
            variants={fadeInUp}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            Pas encore de compte ?{' '}
            <button
              type="button"
              onClick={() => navigate('register')}
              className="text-yoel-primary hover:text-yoel-primary-dark font-semibold transition-colors"
            >
              Inscrivez-vous
            </button>
          </motion.p>

          {/* Admin link */}
          <motion.p
            custom={9}
            variants={fadeInUp}
            className="mt-4 text-center"
          >
            <button
              type="button"
              onClick={() => navigate('admin-login')}
              className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors inline-flex items-center gap-1"
            >
              <Shield className="w-3 h-3" />
              Administration
            </button>
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
