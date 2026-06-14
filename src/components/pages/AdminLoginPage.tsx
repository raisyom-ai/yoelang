'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, Loader2, Shield, ArrowLeft, AlertCircle } from 'lucide-react'
import { useAppStore, type UserState } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

export default function AdminLoginPage() {
  const { navigate, setUser } = useAppStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim() || !password) {
      setError('Veuillez remplir tous les champs')
      return
    }

    setIsLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (res.ok && data.isAdmin) {
        const adminUser: UserState = {
          id: data.user.id,
          email: data.user.email,
          name: data.user.name || 'Admin',
          avatar: data.user.avatar,
          role: 'admin',
          level: data.user.level || 'C2',
          xp: data.user.xp || 0,
          streak: data.user.streak || 0,
          coins: data.user.coins || 0,
          isPremium: data.user.isPremium || true,
          premiumPlan: data.user.premiumPlan || 'integral',
          dailyGoal: data.user.dailyGoal || 20,
          notifications: data.user.notifications ?? true,
          darkMode: data.user.darkMode ?? false,
          soundEnabled: data.user.soundEnabled ?? true,
        }
        setUser(adminUser)
        navigate('admin-dashboard')
        toast.success('Bienvenue Admin !', { description: 'Connexion réussie au panneau d\'administration' })
      } else if (res.ok && !data.isAdmin) {
        setError('Ce compte n\'a pas les droits d\'administrateur')
      } else {
        setError(data.error || 'Email ou mot de passe incorrect')
      }
    } catch {
      setError('Erreur de connexion au serveur')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left branding panel */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' as const }}
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 items-center justify-center p-12"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-yoel-primary/5 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-yoel-gold/5 blur-3xl" />
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' as const }}
            className="absolute top-20 right-20 text-6xl opacity-20"
          >
            🛡️
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' as const }}
            className="absolute bottom-32 left-16 text-5xl opacity-15"
          >
            🔐
          </motion.div>
        </div>

        <div className="relative z-10 text-center max-w-md">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-yoel-primary to-yoel-primary-dark flex items-center justify-center shadow-2xl">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-4xl font-extrabold text-white mb-4 tracking-tight"
          >
            Administration
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-white/60 text-lg mb-8"
          >
            Panneau de gestion YOELANG
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col gap-3 items-center"
          >
            <div className="flex items-center gap-3 text-white/50">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Accès réservé aux administrateurs</span>
            </div>
            <div className="flex items-center gap-3 text-white/50">
              <span className="text-sm">Gestion des utilisateurs et paiements</span>
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
          <motion.div custom={0} variants={fadeInUp} className="mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('home')}
              className="text-muted-foreground hover:text-foreground -ml-2"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Retour
            </Button>
          </motion.div>

          {/* Shield icon for mobile */}
          <motion.div
            custom={1}
            variants={fadeInUp}
            className="flex items-center justify-center lg:hidden mb-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yoel-primary to-yoel-primary-dark flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          {/* Header */}
          <motion.div custom={1} variants={fadeInUp} className="mb-8">
            <h2 className="text-3xl font-bold">Connexion Admin</h2>
            <p className="text-muted-foreground mt-2">
              Accédez au panneau d&apos;administration
            </p>
          </motion.div>

          {/* Error message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <p className="text-sm text-destructive">{error}</p>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <motion.div custom={2} variants={fadeInUp} className="space-y-2">
              <Label htmlFor="admin-email">Adresse email admin</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="admin-email"
                  type="email"
                  placeholder="admin@yoelang.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-11"
                  autoComplete="email"
                  disabled={isLoading}
                />
              </div>
            </motion.div>

            {/* Password */}
            <motion.div custom={3} variants={fadeInUp} className="space-y-2">
              <Label htmlFor="admin-password">Mot de passe</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-11"
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
            </motion.div>

            {/* Submit button */}
            <motion.div custom={4} variants={fadeInUp}>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 text-base font-semibold bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Shield className="w-4 h-4 mr-2" />
                    Se connecter en tant qu&apos;admin
                  </>
                )}
              </Button>
            </motion.div>
          </form>

          {/* Info box */}
          <motion.div
            custom={5}
            variants={fadeInUp}
            className="mt-8 p-4 rounded-lg bg-muted/50 border"
          >
            <p className="text-xs text-muted-foreground text-center">
              🔒 Accès réservé aux administrateurs de la plateforme YOELANG.
              <br />
              Si vous êtes un apprenant,{' '}
              <button
                type="button"
                onClick={() => navigate('login')}
                className="text-yoel-primary hover:text-yoel-primary-dark font-medium"
              >
                connectez-vous ici
              </button>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
