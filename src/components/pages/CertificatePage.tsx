'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Download, Share2, Award, Shield, Star, Sparkles,
  CheckCircle, Lock, ChevronRight, Info, BookOpen, Trophy, Clock
} from 'lucide-react'
import { useAppStore, LEVEL_NAMES_FR, type CertificateEntry } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

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
    transition: { type: 'spring' as const, stiffness: 260, damping: 24 },
  },
}

const LEVEL_NAMES_EN: Record<string, string> = {
  A1: 'Beginner',
  A2: 'Elementary',
  B1: 'Intermediate',
  B2: 'Upper Intermediate',
  C1: 'Advanced',
  C2: 'Mastery',
}

const LEVEL_COLORS: Record<string, string> = {
  A1: 'from-emerald-500 to-green-600',
  A2: 'from-teal-500 to-cyan-600',
  B1: 'from-sky-500 to-blue-600',
  B2: 'from-indigo-500 to-violet-600',
  C1: 'from-purple-500 to-fuchsia-600',
  C2: 'from-rose-500 to-red-600',
}

const LEVEL_ICONS: Record<string, string> = {
  A1: '🌱', A2: '🌿', B1: '🌳', B2: '🏔️', C1: '⭐', C2: '👑',
}

// ─── All CEFR levels ────────────────────────────────────────────────────────
const ALL_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

// ─── Single Certificate View ────────────────────────────────────────────────

function CertificateDetail({ cert, onBack }: { cert: CertificateEntry; onBack: () => void }) {
  const certificateRef = useRef<HTMLDivElement>(null)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isSharing, setIsSharing] = useState(false)

  const earnedDate = new Date(cert.earnedAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const levelNameFr = LEVEL_NAMES_FR[cert.level] ?? cert.level
  const levelNameEn = LEVEL_NAMES_EN[cert.level] ?? cert.level

  const handleDownload = () => {
    setIsDownloading(true)
    setTimeout(() => {
      window.print()
      setIsDownloading(false)
    }, 300)
  }

  const handleShare = async () => {
    setIsSharing(true)
    const shareData = {
      title: 'YOELANG - Certificat de réussite',
      text: `J'ai obtenu le certificat de niveau ${cert.level} (${levelNameFr}) sur YOELANG ! 🎉 Identifiant : ${cert.id}`,
      url: window.location.origin,
    }

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData)
      } catch {
        await navigator.clipboard.writeText(shareData.text + ' ' + shareData.url)
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.text + ' ' + shareData.url)
      } catch {
        // Clipboard API not available
      }
    }
    setIsSharing(false)
  }

  return (
    <div className="space-y-6">
      {/* Back button */}
      <motion.div variants={itemVariants} className="flex items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={onBack}
          className="shrink-0 rounded-full gap-1.5 border-yoel-primary/20 hover:bg-yoel-primary/5 hover:border-yoel-primary/40 transition-all"
        >
          <ArrowLeft className="h-4 w-4 text-yoel-primary" />
          <span className="text-xs font-medium text-yoel-primary">Retour</span>
        </Button>
        <div>
          <h2 className="text-lg font-bold">Certificat {cert.level}</h2>
          <p className="text-xs text-muted-foreground">{levelNameFr}</p>
        </div>
      </motion.div>

      {/* Certificate */}
      <motion.div variants={itemVariants} ref={certificateRef}>
        <div className="relative overflow-hidden rounded-2xl border-2 border-yoel-gold/40 bg-gradient-to-br from-yoel-gold/5 via-background to-yoel-primary/5 p-1">
          {/* Decorative gradient border overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yoel-gold/20 via-transparent to-yoel-primary/20 pointer-events-none" />

          <div className="relative rounded-xl bg-background/95 backdrop-blur-sm p-6 sm:p-10 space-y-8">
            {/* Corner decorations */}
            <div className="absolute top-3 left-3 text-yoel-gold/30"><Star className="h-6 w-6" /></div>
            <div className="absolute top-3 right-3 text-yoel-gold/30"><Star className="h-6 w-6" /></div>
            <div className="absolute bottom-3 left-3 text-yoel-gold/30"><Star className="h-6 w-6" /></div>
            <div className="absolute bottom-3 right-3 text-yoel-gold/30"><Star className="h-6 w-6" /></div>

            {/* Header */}
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-yoel-primary to-yoel-gold shadow-lg">
                  <Award className="h-7 w-7 text-white" />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold gradient-text-premium tracking-wide uppercase">
                Certificat de Réussite
              </h2>
              <p className="text-sm text-muted-foreground">YOELANG — Apprentissage d&apos;anglais</p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yoel-gold/40 to-transparent" />
              <Sparkles className="h-4 w-4 text-yoel-gold" />
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yoel-gold/40 to-transparent" />
            </div>

            {/* Body */}
            <div className="text-center space-y-4 py-2">
              <p className="text-sm text-muted-foreground">Ce certificat est décerné à</p>
              <h3 className="text-2xl sm:text-3xl font-bold gradient-text-primary">
                {cert.userName}
              </h3>
              <p className="text-sm text-muted-foreground">
                pour avoir complété avec succès le niveau
              </p>
              <div className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-yoel-primary/10 to-yoel-gold/10 px-6 py-3 border border-yoel-gold/20">
                <span className="text-3xl sm:text-4xl font-black gradient-text-premium">
                  {cert.level}
                </span>
                <span className="text-lg font-semibold text-muted-foreground">
                  {levelNameEn}
                </span>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex justify-center gap-4 sm:gap-6">
              <div className="text-center">
                <p className="text-lg font-bold text-yoel-gold">{cert.xpAtCompletion}</p>
                <p className="text-xs text-muted-foreground">XP Total</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-yoel-primary">{cert.examScore ?? cert.avgScore}%</p>
                <p className="text-xs text-muted-foreground">{cert.examScore ? 'Score examen' : 'Score moyen'}</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-yoel-green">{cert.completedLessons}/{cert.totalLessons}</p>
                <p className="text-xs text-muted-foreground">Leçons</p>
              </div>
            </div>

            {/* Exam details (if available) */}
            {cert.examScore !== undefined && cert.totalQuestions !== undefined && (
              <div className="bg-muted/30 rounded-xl p-3 text-center">
                <p className="text-xs text-muted-foreground mb-1">Résultat de l&apos;examen</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-sm font-semibold">
                    {cert.correctAnswers ?? 0}/{cert.totalQuestions} réponses correctes
                  </span>
                  <span className="text-yoel-green font-bold">•</span>
                  <span className="text-sm font-semibold text-yoel-green">
                    {cert.examScore}% — {cert.examScore >= 70 ? 'Réussi' : 'Non réussi'}
                  </span>
                </div>
              </div>
            )}

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yoel-gold/40 to-transparent" />
              <Shield className="h-4 w-4 text-yoel-gold" />
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yoel-gold/40 to-transparent" />
            </div>

            {/* Certificate ID & Verification */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 rounded-lg bg-yoel-green/10 px-3 py-1.5 border border-yoel-green/20">
                <Shield className="h-3.5 w-3.5 text-yoel-green" />
                <span className="text-xs font-mono font-semibold text-yoel-green">{cert.id}</span>
              </div>
              <p className="text-[10px] text-muted-foreground">
                Identifiant unique de vérification — Certificat officiel YOELANG
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">YOELANG</p>
                <p>Apprendre l&apos;anglais avec plaisir</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">Délivré le</p>
                <p>{earnedDate}</p>
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

      {/* Action Buttons */}
      <motion.div variants={itemVariants} className="flex gap-3">
        <Button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex-1 bg-yoel-primary hover:bg-yoel-primary-dark text-white rounded-xl h-12"
        >
          <Download className="h-5 w-5 mr-2" />
          {isDownloading ? 'Préparation...' : 'Télécharger'}
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
    </div>
  )
}

// ─── Certificate List Page ──────────────────────────────────────────────────

export default function CertificatePage() {
  const { goBack, user, currentLevel, earnedCertificates } = useAppStore()
  const [selectedCert, setSelectedCert] = useState<CertificateEntry | null>(null)

  const userName = user?.name ?? 'Apprenant'
  const level = user?.level ?? currentLevel ?? 'A1'

  if (selectedCert) {
    return (
      <div className="min-h-screen bg-background">
        <motion.div
          className="mx-auto max-w-2xl space-y-6 p-4 lg:p-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <CertificateDetail cert={selectedCert} onBack={() => setSelectedCert(null)} />
        </motion.div>
      </div>
    )
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
              variant="outline"
              size="sm"
              onClick={goBack}
              className="shrink-0 rounded-full gap-1.5 border-yoel-primary/20 hover:bg-yoel-primary/5 hover:border-yoel-primary/40 transition-all"
            >
              <ArrowLeft className="h-4 w-4 text-yoel-primary" />
              <span className="text-xs font-medium text-yoel-primary">Retour</span>
            </Button>
            <div>
              <h1 className="text-lg font-bold">Mes Certificats</h1>
              <p className="text-xs text-muted-foreground">Vos réussites officielles</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-yoel-gold/10 px-3 py-1.5">
            <Trophy className="h-4 w-4 text-yoel-gold" />
            <span className="text-sm font-semibold text-yoel-gold">{earnedCertificates.length}</span>
          </div>
        </motion.div>

        {/* ─── How certificates work ──────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden border-0 bg-gradient-to-r from-yoel-primary/5 via-yoel-gold/5 to-yoel-green/5">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-yoel-primary shrink-0" />
                <h3 className="font-semibold text-sm">Comment obtenir un certificat ?</h3>
              </div>
              <div className="space-y-2 text-xs text-muted-foreground">
                <div className="flex items-start gap-2">
                  <BookOpen className="h-4 w-4 shrink-0 mt-0.5 text-yoel-green" />
                  <span>Complétez <strong className="text-foreground">toutes les leçons</strong> d&apos;un niveau CEFR (A1 → C2)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 shrink-0 mt-0.5 text-yoel-primary" />
                  <span>Passez l&apos;<strong className="text-foreground">examen de niveau</strong> et obtenez au moins <strong className="text-foreground">70%</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="h-4 w-4 shrink-0 mt-0.5 text-yoel-gold" />
                  <span>Recevez un <strong className="text-foreground">certificat officiel</strong> avec identifiant unique de vérification</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── Level list with certificates ──────────────────────────────── */}
        <motion.div variants={itemVariants} className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground px-1">Niveaux CEFR</h3>
          
          <div className="space-y-2">
            {ALL_LEVELS.map((lvl) => {
              const cert = earnedCertificates.find((c) => c.level === lvl)
              const isCurrentLevel = lvl === level
              const earnedDate = cert
                ? new Date(cert.earnedAt).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })
                : null

              return (
                <motion.div key={lvl} variants={itemVariants}>
                  <Card
                    className={`overflow-hidden border-0 cursor-pointer transition-all ${
                      cert
                        ? 'bg-gradient-to-r from-yoel-gold/10 via-background to-yoel-gold/5 hover:shadow-md'
                        : isCurrentLevel
                          ? 'bg-gradient-to-r from-yoel-primary/5 via-background to-yoel-primary/5'
                          : 'bg-muted/30'
                    }`}
                    onClick={() => cert && setSelectedCert(cert)}
                  >
                    <CardContent className="flex items-center gap-4 p-4">
                      {/* Level icon */}
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl shadow-lg ${
                        cert
                          ? 'bg-gradient-to-br from-yoel-gold to-amber-600 text-white'
                          : `bg-gradient-to-br ${LEVEL_COLORS[lvl]} text-white opacity-50`
                      }`}>
                        {cert ? '🏆' : LEVEL_ICONS[lvl]}
                      </div>

                      {/* Level info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-base">{lvl}</h4>
                          <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                            {LEVEL_NAMES_FR[lvl]}
                          </Badge>
                          {isCurrentLevel && !cert && (
                            <Badge className="text-[10px] px-1.5 py-0 bg-yoel-primary/10 text-yoel-primary border-yoel-primary/20">
                              En cours
                            </Badge>
                          )}
                        </div>
                        
                        {cert ? (
                          <div className="flex items-center gap-2 mt-1">
                            <CheckCircle className="h-3.5 w-3.5 text-yoel-green" />
                            <span className="text-xs text-muted-foreground">
                              Obtenu le {earnedDate} — {cert.examScore ? `Examen : ${cert.examScore}%` : `Score moyen : ${cert.avgScore}%`}
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 mt-1">
                            <Lock className="h-3.5 w-3.5 text-muted-foreground/50" />
                            <span className="text-xs text-muted-foreground/70">
                              Complétez les leçons et passez l&apos;examen
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Action */}
                      {cert ? (
                        <ChevronRight className="h-5 w-5 text-yoel-gold shrink-0" />
                      ) : (
                        <Lock className="h-4 w-4 text-muted-foreground/30 shrink-0" />
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ─── Empty state message ────────────────────────────────────────── */}
        {earnedCertificates.length === 0 && (
          <motion.div variants={itemVariants} className="text-center py-8 space-y-3">
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yoel-gold/10">
                <Award className="h-8 w-8 text-yoel-gold/50" />
              </div>
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              Aucun certificat obtenu pour le moment
            </p>
            <p className="text-xs text-muted-foreground/70">
              Continuez à apprendre et complétez un niveau pour recevoir votre premier certificat officiel !
            </p>
            <Button
              onClick={() => goBack()}
              variant="outline"
              className="rounded-xl mt-2 border-yoel-primary/30 text-yoel-primary hover:bg-yoel-primary/10"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Continuer l&apos;apprentissage
            </Button>
          </motion.div>
        )}

        {/* ─── Verification info ──────────────────────────────────────────── */}
        {earnedCertificates.length > 0 && (
          <motion.div variants={itemVariants} className="text-center space-y-2 pb-4">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-4 w-4 text-yoel-green" />
              <span className="text-xs font-medium text-yoel-green">Certificats vérifiables</span>
            </div>
            <p className="text-[10px] text-muted-foreground max-w-xs mx-auto">
              Chaque certificat possède un identifiant unique qui garantit son authenticité et peut être vérifié en ligne.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
