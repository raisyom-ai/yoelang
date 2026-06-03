'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft, Download, Share2, Award, Shield, Star, Sparkles
} from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { Button } from '@/components/ui/button'

// ─── Animation Variants ─────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 24 },
  },
}

// ─── Certificate Page ───────────────────────────────────────────────────────

export default function CertificatePage() {
  const { goBack, user, currentLevel } = useAppStore()
  const certificateRef = useRef<HTMLDivElement>(null)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isSharing, setIsSharing] = useState(false)

  const userName = user?.name ?? 'Apprenant'
  const level = user?.level ?? currentLevel ?? 'A1'
  const today = new Date().toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const levelNames: Record<string, string> = {
    A1: 'Beginner',
    A2: 'Elementary',
    B1: 'Intermediate',
    B2: 'Upper Intermediate',
    C1: 'Advanced',
    C2: 'Mastery',
  }

  const handleDownload = () => {
    setIsDownloading(true)
    // Use window.print() for a simple, reliable download approach
    setTimeout(() => {
      window.print()
      setIsDownloading(false)
    }, 300)
  }

  const handleShare = async () => {
    setIsSharing(true)
    const shareData = {
      title: 'YOELANG - Certificat de réussite',
      text: `J'ai complété le niveau ${level} (${levelNames[level] ?? level}) sur YOELANG ! 🎉`,
      url: window.location.origin,
    }

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData)
      } catch {
        // User cancelled or share failed - fallback to clipboard
        await navigator.clipboard.writeText(shareData.text + ' ' + shareData.url)
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareData.text + ' ' + shareData.url)
      } catch {
        // Clipboard API not available
      }
    }
    setIsSharing(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        className="mx-auto max-w-2xl space-y-6 p-4 lg:p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ─── Top Bar ─────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={goBack}
              className="h-9 w-9 rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-lg font-bold">Certificat</h1>
              <p className="text-xs text-muted-foreground">Votre réussite</p>
            </div>
          </div>
        </motion.div>

        {/* ─── Certificate ──────────────────────────────────────────────── */}
        <motion.div variants={itemVariants} ref={certificateRef}>
          <div className="relative overflow-hidden rounded-2xl border-2 border-yoel-gold/40 bg-gradient-to-br from-yoel-gold/5 via-background to-yoel-primary/5 p-1">
            {/* Decorative gradient border overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yoel-gold/20 via-transparent to-yoel-primary/20 pointer-events-none" />

            <div className="relative rounded-xl bg-background/95 backdrop-blur-sm p-6 sm:p-10 space-y-8">
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 text-yoel-gold/30">
                <Star className="h-6 w-6" />
              </div>
              <div className="absolute top-3 right-3 text-yoel-gold/30">
                <Star className="h-6 w-6" />
              </div>
              <div className="absolute bottom-3 left-3 text-yoel-gold/30">
                <Star className="h-6 w-6" />
              </div>
              <div className="absolute bottom-3 right-3 text-yoel-gold/30">
                <Star className="h-6 w-6" />
              </div>

              {/* Header */}
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-yoel-primary to-yoel-gold shadow-lg">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold gradient-text-premium tracking-wide uppercase">
                  Certificat de Reussite
                </h2>
                <p className="text-sm text-muted-foreground">YOELANG - Apprentissage d&apos;anglais</p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yoel-gold/40 to-transparent" />
                <Sparkles className="h-4 w-4 text-yoel-gold" />
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yoel-gold/40 to-transparent" />
              </div>

              {/* Body */}
              <div className="text-center space-y-4 py-2">
                <p className="text-sm text-muted-foreground">Ce certificat est decerne a</p>
                <h3 className="text-2xl sm:text-3xl font-bold gradient-text-primary">
                  {userName}
                </h3>
                <p className="text-sm text-muted-foreground">
                  pour avoir complete avec succes le niveau
                </p>
                <div className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-yoel-primary/10 to-yoel-gold/10 px-6 py-3 border border-yoel-gold/20">
                  <span className="text-3xl sm:text-4xl font-black gradient-text-premium">
                    {level}
                  </span>
                  <span className="text-lg font-semibold text-muted-foreground">
                    {levelNames[level] ?? level}
                  </span>
                </div>
              </div>

              {/* Stats row */}
              <div className="flex justify-center gap-6 sm:gap-10">
                <div className="text-center">
                  <p className="text-lg font-bold text-yoel-gold">{user?.xp ?? 0}</p>
                  <p className="text-xs text-muted-foreground">XP Total</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-yoel-primary">{user?.streak ?? 0}</p>
                  <p className="text-xs text-muted-foreground">Jours consecutifs</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-yoel-green">{user?.coins ?? 0}</p>
                  <p className="text-xs text-muted-foreground">Pieces</p>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yoel-gold/40 to-transparent" />
                <Shield className="h-4 w-4 text-yoel-gold" />
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yoel-gold/40 to-transparent" />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">YOELANG</p>
                  <p>Apprendre l&apos;anglais avec plaisir</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">Delivre le</p>
                  <p>{today}</p>
                </div>
              </div>

              {/* Seal */}
              <div className="flex justify-center pt-2">
                <div className="relative flex h-20 w-20 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yoel-primary/20 to-yoel-gold/20 border-2 border-yoel-gold/30" />
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-yoel-primary/10 to-yoel-gold/10 border border-yoel-gold/20" />
                  <Award className="h-8 w-8 text-yoel-gold" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Action Buttons ───────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="flex gap-3">
          <Button
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex-1 bg-yoel-primary hover:bg-yoel-primary-dark text-white rounded-xl h-12"
          >
            <Download className="h-5 w-5 mr-2" />
            {isDownloading ? 'Preparation...' : 'Telecharger'}
          </Button>
          <Button
            onClick={handleShare}
            disabled={isSharing}
            variant="outline"
            className="flex-1 rounded-xl h-12 border-yoel-gold/30 text-yoel-gold hover:bg-yoel-gold/10"
          >
            <Share2 className="h-5 w-5 mr-2" />
            {isSharing ? 'Envoi...' : 'Partager'}
          </Button>
        </motion.div>

        {/* ─── Info text ────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-xs text-muted-foreground">
            Partagez votre succes avec vos amis et continuez a apprendre !
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
