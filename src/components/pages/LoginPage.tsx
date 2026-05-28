'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, Loader2, Chrome, Apple, BookOpen, Globe, Sparkles } from 'lucide-react'
import { useAppStore, type UserState } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'

interface FormErrors {
  email?: string
  password?: string
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function LoginPage() {
  const { navigate, setUser } = useAppStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

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

  const createDemoUser = (emailAddr: string): UserState => ({
    id: 'demo',
    email: emailAddr,
    name: emailAddr.split('@')[0],
    avatar: null,
    level: 'A1',
    xp: 1250,
    streak: 7,
    coins: 350,
    isPremium: false,
    dailyGoal: 20,
    notifications: true,
    darkMode: false,
    soundEnabled: true,
  })

  const handleSubmit = async (e: FormEvent) => {
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
        setUser(data.user)
        navigate('dashboard')
        toast.success('Bienvenue !', { description: 'Connexion réussie' })
      } else {
        throw new Error('Login failed')
      }
    } catch {
      toast.error('Connexion échouée', {
        description: 'Utilisation du mode démonstration',
      })
      const demoUser = createDemoUser(email)
      setUser(demoUser)
      navigate('dashboard')
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
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-yoel-red via-yoel-red-dark to-yoel-blue-dark items-center justify-center p-12"
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
          {/* Logo for mobile */}
          <motion.div
            custom={0}
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
            <h2 className="text-3xl font-bold gradient-text-red">Bon retour !</h2>
            <p className="text-muted-foreground mt-2">
              Connectez-vous pour continuer votre apprentissage
            </p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <motion.div custom={2} variants={fadeInUp} className="space-y-2">
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
            <motion.div custom={3} variants={fadeInUp} className="space-y-2">
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
              custom={4}
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
                className="text-sm text-yoel-red hover:text-yoel-red-dark transition-colors font-medium"
                onClick={() => toast.info('Fonctionnalité à venir', { description: 'La réinitialisation du mot de passe sera bientôt disponible.' })}
              >
                Mot de passe oublié ?
              </button>
            </motion.div>

            {/* Submit button */}
            <motion.div custom={5} variants={fadeInUp}>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 text-base font-semibold bg-gradient-to-r from-yoel-red to-yoel-red-dark hover:from-yoel-red-dark hover:to-yoel-red text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  'Se connecter'
                )}
              </Button>
            </motion.div>
          </form>

          {/* Divider */}
          <motion.div custom={6} variants={fadeInUp} className="my-6">
            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3 text-xs text-muted-foreground uppercase">
                ou
              </span>
            </div>
          </motion.div>

          {/* Social buttons */}
          <motion.div custom={7} variants={fadeInUp} className="space-y-3">
            <Button
              type="button"
              variant="outline"
              className="w-full h-11 text-sm font-medium"
              disabled={isLoading}
              onClick={async () => {
                setIsLoading(true)
                try {
                  const res = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: 'google@yoelang.com', password: 'GoogleDemo123!' }),
                  })
                  if (res.ok) {
                    const data = await res.json()
                    setUser(data.user)
                    navigate('dashboard')
                    toast.success('Bienvenue !', { description: 'Connexion Google réussie' })
                  } else {
                    throw new Error('Google demo login failed')
                  }
                } catch {
                  const googleUser: UserState = {
                    id: 'google-demo',
                    email: 'google@yoelang.com',
                    name: 'Utilisateur Google',
                    avatar: null,
                    level: 'A1',
                    xp: 1250,
                    streak: 7,
                    coins: 350,
                    isPremium: false,
                    dailyGoal: 20,
                    notifications: true,
                    darkMode: false,
                    soundEnabled: true,
                  }
                  setUser(googleUser)
                  navigate('dashboard')
                  toast.success('Bienvenue !', { description: 'Connecté avec Google (mode démo)' })
                } finally {
                  setIsLoading(false)
                }
              }}
            >
              <Chrome className="w-5 h-5 mr-2" />
              Continuer avec Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full h-11 text-sm font-medium"
              disabled={isLoading}
              onClick={async () => {
                setIsLoading(true)
                try {
                  const res = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: 'apple@yoelang.com', password: 'AppleDemo123!' }),
                  })
                  if (res.ok) {
                    const data = await res.json()
                    setUser(data.user)
                    navigate('dashboard')
                    toast.success('Bienvenue !', { description: 'Connexion Apple réussie' })
                  } else {
                    throw new Error('Apple demo login failed')
                  }
                } catch {
                  const appleUser: UserState = {
                    id: 'apple-demo',
                    email: 'apple@yoelang.com',
                    name: 'Utilisateur Apple',
                    avatar: null,
                    level: 'A1',
                    xp: 1250,
                    streak: 7,
                    coins: 350,
                    isPremium: false,
                    dailyGoal: 20,
                    notifications: true,
                    darkMode: false,
                    soundEnabled: true,
                  }
                  setUser(appleUser)
                  navigate('dashboard')
                  toast.success('Bienvenue !', { description: 'Connecté avec Apple (mode démo)' })
                } finally {
                  setIsLoading(false)
                }
              }}
            >
              <Apple className="w-5 h-5 mr-2" />
              Continuer avec Apple
            </Button>
          </motion.div>

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
              className="text-yoel-red hover:text-yoel-red-dark font-semibold transition-colors"
            >
              Inscrivez-vous
            </button>
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
