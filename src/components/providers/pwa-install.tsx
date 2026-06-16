'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, Download, Smartphone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

function getIsStandalone(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(display-mode: standalone)').matches
}

function getIsIOS(): boolean {
  if (typeof window === 'undefined') return false
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window)
}

export function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [isIOS] = useState(getIsIOS)
  const [isInstalled, setIsInstalled] = useState(getIsStandalone)

  useEffect(() => {
    // If already installed, nothing to do
    if (isInstalled) return

    // Listen for the beforeinstallprompt event (Android/Chrome/Edge)
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)

      // Show banner after a short delay (don't be too aggressive)
      const dismissed = localStorage.getItem('pwa-install-dismissed')
      if (!dismissed) {
        setTimeout(() => setShowBanner(true), 3000)
      }
    }

    window.addEventListener('beforeinstallprompt', handler)

    // Listen for successful install
    const installedHandler = () => {
      setIsInstalled(true)
      setShowBanner(false)
      setDeferredPrompt(null)
    }

    window.addEventListener('appinstalled', installedHandler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
      window.removeEventListener('appinstalled', installedHandler)
    }
  }, [isInstalled])

  const handleInstallClick = useCallback(async () => {
    if (!deferredPrompt) return

    try {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        setIsInstalled(true)
        setShowBanner(false)
      }
    } catch (error) {
      console.error('Install prompt error:', error)
    }

    setDeferredPrompt(null)
  }, [deferredPrompt])

  const handleDismiss = useCallback(() => {
    setShowBanner(false)
    // Don't show again for 7 days
    localStorage.setItem('pwa-install-dismissed', Date.now().toString())
  }, [])

  // Don't render if already installed
  if (isInstalled) return null

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md"
        >
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl p-4 shadow-2xl shadow-amber-500/25">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-3">
              <div className="shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base">
                  Installer YOELANG
                </h3>
                <p className="text-white/90 text-sm mt-0.5">
                  {isIOS
                    ? 'Appuyez sur le bouton Partage puis "Sur l\'écran d\'accueil" pour installer'
                    : 'Accédez à YOELANG directement depuis votre écran d\'accueil, même hors-ligne !'
                  }
                </p>

                {!isIOS && deferredPrompt && (
                  <Button
                    onClick={handleInstallClick}
                    size="sm"
                    className="mt-3 bg-white text-amber-600 hover:bg-white/90 font-semibold gap-1.5"
                  >
                    <Download className="w-4 h-4" />
                    Installer l&apos;application
                  </Button>
                )}

                {isIOS && (
                  <div className="mt-2 flex items-center gap-2 text-xs text-white/80">
                    <span>Partage</span>
                    <span>→</span>
                    <span>Sur l&apos;écran d&apos;accueil</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
