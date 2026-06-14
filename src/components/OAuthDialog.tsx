'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Chrome, Apple, Mail, Loader2, ArrowRight, CheckCircle2, AlertCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type Provider = 'google' | 'apple'

interface OAuthDialogProps {
  provider: Provider
  onClose: () => void
  onSuccess: (data: Record<string, unknown>) => void
}

const PROVIDER_CONFIG = {
  google: {
    name: 'Google',
    icon: Chrome,
    domains: ['gmail.com', 'googlemail.com', 'google.com'],
    primaryDomain: 'gmail.com',
    placeholder: 'vous@gmail.com',
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-950/20',
    border: 'border-red-200 dark:border-red-800',
    gradient: 'from-red-500 to-yellow-500',
  },
  apple: {
    name: 'Apple',
    icon: Apple,
    domains: ['icloud.com', 'me.com', 'mac.com', 'apple.com'],
    primaryDomain: 'icloud.com',
    placeholder: 'vous@icloud.com',
    color: 'text-gray-800 dark:text-gray-200',
    bg: 'bg-gray-50 dark:bg-gray-900/30',
    border: 'border-gray-200 dark:border-gray-700',
    gradient: 'from-gray-800 to-gray-600',
  },
}

export default function OAuthDialog({ provider, onClose, onSuccess }: OAuthDialogProps) {
  const config = PROVIDER_CONFIG[provider]
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [step, setStep] = useState<'email' | 'success'>('email')

  const domain = email.includes('@') ? email.split('@')[1]?.toLowerCase() : ''
  const isDomainValid = config.domains.includes(domain)
  const showDomainHint = domain.length > 0 && !isDomainValid

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Veuillez entrer votre adresse email')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Adresse email invalide')
      return
    }

    if (!isDomainValid) {
      setError(`Utilisez une adresse ${config.domains.map(d => '@' + d).join(', ')} pour ${config.name}`)
      return
    }

    setIsLoading(true)
    try {
      const res = await fetch('/api/auth/oauth-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, provider }),
      })

      const data = await res.json()

      if (res.ok) {
        setStep('success')
        setTimeout(() => {
          onSuccess(data)
        }, 800)
      } else {
        if (data.code === 'ACCOUNT_EXISTS_WITH_PASSWORD') {
          setError(data.error)
        } else {
          setError(data.error || 'Erreur de connexion')
        }
      }
    } catch {
      setError('Erreur de connexion au serveur')
    } finally {
      setIsLoading(false)
    }
  }

  const ProviderIcon = config.icon

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="w-full max-w-md bg-card rounded-2xl shadow-2xl border overflow-hidden"
        >
          {/* Header */}
          <div className={`bg-gradient-to-r ${config.gradient} p-6 text-white relative`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <ProviderIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Continuer avec {config.name}</h3>
                <p className="text-white/80 text-sm">Entrez votre adresse {config.name}</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            {step === 'email' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Domain info */}
                <div className={`p-3 rounded-lg ${config.bg} border ${config.border}`}>
                  <p className="text-sm text-muted-foreground">
                    Domaines acceptés : {config.domains.map(d => <span key={d} className="font-medium text-foreground">@{d}</span>).reduce((prev, curr) => <>{prev} · {curr}</>)}
                  </p>
                </div>

                {/* Email input */}
                <div className="space-y-2">
                  <Label htmlFor="oauth-email">Adresse email {config.name}</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="oauth-email"
                      type="email"
                      placeholder={config.placeholder}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (error) setError('')
                      }}
                      className={`pl-10 h-11 ${
                        showDomainHint ? 'border-orange-300 focus-visible:ring-orange-300' :
                        isDomainValid ? 'border-green-300 focus-visible:ring-green-300' : ''
                      }`}
                      autoFocus
                      disabled={isLoading}
                      autoComplete="email"
                    />
                    {isDomainValid && (
                      <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                    )}
                  </div>

                  {/* Domain validation hint */}
                  {showDomainHint && (
                    <p className="text-xs text-orange-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Ce domaine n&apos;est pas un domaine {config.name}. Utilisez {config.domains.slice(0, 2).map(d => '@' + d).join(' ou ')}
                    </p>
                  )}

                  {isDomainValid && (
                    <p className="text-xs text-green-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Compte {config.name} reconnu
                    </p>
                  )}
                </div>

                {/* Error message */}
                {error && (
                  <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isLoading || (!isDomainValid && domain.length > 0)}
                  className={`w-full h-11 font-semibold text-white bg-gradient-to-r ${config.gradient} hover:opacity-90 transition-opacity`}
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
            )}

            {step === 'success' && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.1 }}
                  className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </motion.div>
                <h4 className="text-lg font-semibold">Compte {config.name} vérifié !</h4>
                <p className="text-muted-foreground text-sm mt-1">Connexion en cours...</p>
              </motion.div>
            )}

            {/* Security note */}
            <p className="text-[11px] text-muted-foreground/60 text-center mt-4">
              🔒 Votre adresse {config.name} est utilisée uniquement pour vous identifier.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
