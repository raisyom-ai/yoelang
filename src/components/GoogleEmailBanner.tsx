'use client'

import { type ReactNode } from 'react'
import { Chrome, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface GoogleEmailBannerProps {
  /** Whether a parent form is currently submitting (disables interaction) */
  disabled?: boolean
  /** Content to show below (email/password form) */
  children?: ReactNode
}

/** Check if an email address is a Google email */
export function isGoogleEmail(email: string): boolean {
  const domain = email.trim().toLowerCase().split('@')[1]
  if (!domain) return false
  const googleDomains = ['gmail.com', 'googlemail.com', 'google.com']
  return googleDomains.includes(domain)
}

export default function GoogleEmailBanner({
  disabled = false,
  children,
}: GoogleEmailBannerProps) {
  void disabled // reserved for future use

  return (
    <>
      {/* Google email info banner */}
      <div className="rounded-xl border border-blue-200 dark:border-blue-900/40 bg-gradient-to-r from-blue-50/80 to-indigo-50/50 dark:from-blue-950/30 dark:to-indigo-950/20 p-4">
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-0.5">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-blue-950/60 flex items-center justify-center shadow-sm border border-blue-100 dark:border-blue-800/40">
              <Chrome className="w-5 h-5 text-blue-500" />
            </div>
          </div>
          <div className="flex-1 min-w-0 space-y-1">
            <p className="text-sm font-semibold text-blue-900 dark:text-blue-200">
              Connexion avec Google
            </p>
            <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed">
              Entrez votre adresse <strong>@gmail.com</strong> et choisissez un mot de passe 
              pour créer votre compte ou vous connecter. Votre email Google est automatiquement reconnu !
            </p>
          </div>
        </div>
      </div>

      {/* Separator + children (email form) */}
      {children && (
        <>
          <div className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-3 text-muted-foreground">
                  ou avec un autre email
                </span>
              </div>
            </div>
          </div>
          {children}
        </>
      )}
    </>
  )
}

/**
 * Inline component that appears next to an email input when a Google email is detected.
 * Shows a visual badge confirming Google email detection.
 */
export function GoogleEmailQuickLogin({ email, disabled }: { email: string; disabled?: boolean }) {
  void disabled // reserved for future use
  const detected = isGoogleEmail(email)

  return (
    <AnimatePresence>
      {detected && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 5 }}
          transition={{ duration: 0.25 }}
          className="mt-2"
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 px-2.5 py-1">
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                Email Google reconnu — utilisez votre mot de passe
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/**
 * Simple badge (no button) for register page
 */
export function GoogleEmailBadge({ email }: { email: string }) {
  const detected = isGoogleEmail(email)

  return (
    <AnimatePresence>
      {detected && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 5 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1.5 mt-1.5"
        >
          <div className="flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 px-2.5 py-1">
            <Chrome className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
              Email Google détecté
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
