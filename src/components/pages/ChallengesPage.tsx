'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Home, Loader2, Check, X, Zap, Trophy, Target, BookOpen, Languages, PenTool } from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'

// ─── Types ───────────────────────────────────────────────────────────────────

interface Challenge {
  id: string
  type: string
  question: string
  options: string[]
  correctIndex: number
  xpReward: number
}

interface ChallengeState {
  status: 'unanswered' | 'correct' | 'wrong'
  selectedIndex: number | null
  xpEarned?: number
  correctIndex?: number
}

// ─── Animation Variants ─────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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

const optionVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, type: 'spring' as const, stiffness: 200, damping: 20 },
  }),
}

const successPulse = {
  scale: [1, 1.05, 1],
  transition: { duration: 0.4 },
}

// ─── Type Config ─────────────────────────────────────────────────────────────

const TYPE_CONFIG: Record<string, { label: string; icon: React.ReactNode; color: string; bg: string; border: string }> = {
  grammar: {
    label: 'Grammaire',
    icon: <BookOpen className="h-4 w-4" />,
    color: 'text-yoel-primary',
    bg: 'bg-yoel-primary/15',
    border: 'border-yoel-primary/20',
  },
  vocabulary: {
    label: 'Vocabulaire',
    icon: <Languages className="h-4 w-4" />,
    color: 'text-yoel-green',
    bg: 'bg-yoel-green/15',
    border: 'border-yoel-green/20',
  },
  translation: {
    label: 'Traduction',
    icon: <PenTool className="h-4 w-4" />,
    color: 'text-yoel-blue',
    bg: 'bg-yoel-blue/15',
    border: 'border-yoel-blue/20',
  },
  conjugaison: {
    label: 'Conjugaison',
    icon: <Target className="h-4 w-4" />,
    color: 'text-yoel-gold',
    bg: 'bg-yoel-gold/15',
    border: 'border-yoel-gold/20',
  },
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D']

// ─── Format Date ─────────────────────────────────────────────────────────────

function formatDateFR(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
  return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function ChallengesPage() {
  const { user, goBack, navigate } = useAppStore()
  const userId = user?.id ?? null

  const [challenges, setChallenges] = useState<Challenge[]>([])
  const [completedIds, setCompletedIds] = useState<string[]>([])
  const [challengeStates, setChallengeStates] = useState<Record<string, ChallengeState>>({})
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState<string | null>(null)
  const [dateStr, setDateStr] = useState('')
  const [allCompletedBonus, setAllCompletedBonus] = useState(false)

  // ─── Fetch challenges ─────────────────────────────────────────────────
  const fetchChallenges = useCallback(async () => {
    try {
      const params = userId ? `?userId=${userId}` : ''
      const res = await fetch(`/api/challenges${params}`)
      if (!res.ok) throw new Error('Failed to fetch challenges')
      const data = await res.json()
      if (data.success) {
        setChallenges(data.challenges)
        setCompletedIds(data.completedIds)
        setDateStr(data.date)

        // Initialize states: 'correct' for completed, 'unanswered' for the rest
        const initialStates: Record<string, ChallengeState> = {}
        data.challenges.forEach((challenge: Challenge) => {
          if (data.completedIds.includes(challenge.id)) {
            initialStates[challenge.id] = {
              status: 'correct',
              selectedIndex: challenge.correctIndex,
              xpEarned: challenge.xpReward,
            }
          } else {
            initialStates[challenge.id] = {
              status: 'unanswered',
              selectedIndex: null,
            }
          }
        })
        setChallengeStates(initialStates)
      }
    } catch (err) {
      console.error('Challenges fetch error:', err)
      toast.error('Impossible de charger les défis')
    } finally {
      setLoading(false)
    }
  }, [userId])

  useEffect(() => {
    fetchChallenges()
  }, [fetchChallenges])

  // ─── Submit answer ────────────────────────────────────────────────────
  const handleSubmit = async (challenge: Challenge, answerIndex: number) => {
    if (!userId) {
      toast.error('Connectez-vous pour répondre')
      return
    }
    if (completedIds.includes(challenge.id)) return
    const currentState = challengeStates[challenge.id]?.status
    if (currentState === 'correct') return
    if (currentState !== undefined && currentState !== 'unanswered' && currentState !== 'wrong') return

    setSubmitting(challenge.id)

    // Optimistic: mark as selected
    setChallengeStates((prev) => ({
      ...prev,
      [challenge.id]: { ...prev[challenge.id], selectedIndex: answerIndex },
    }))

    try {
      const res = await fetch('/api/challenges', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, challengeId: challenge.id, answerIndex }),
      })
      const data = await res.json()

      if (data.code === 'ALREADY_COMPLETED') {
        setCompletedIds((prev) => [...prev, challenge.id])
        setChallengeStates((prev) => ({
          ...prev,
          [challenge.id]: {
            status: 'correct',
            selectedIndex: challenge.correctIndex,
            xpEarned: challenge.xpReward,
          },
        }))
        setSubmitting(null)
        return
      }

      if (data.correct) {
        setChallengeStates((prev) => ({
          ...prev,
          [challenge.id]: {
            status: 'correct',
            selectedIndex: answerIndex,
            xpEarned: data.xpEarned,
          },
        }))
        setCompletedIds((prev) => [...prev, challenge.id])

        // Update user XP in store
        if (data.totalXp !== undefined) {
          useAppStore.setState((state) => ({
            user: state.user ? { ...state.user, xp: data.totalXp } : null,
          }))
        }

        toast.success(`+${data.xpEarned} XP !`, {
          description: data.bonusXp > 0 ? `Bonus complet : +${data.bonusXp} XP !` : undefined,
        })

        if (data.allCompleted) {
          setAllCompletedBonus(true)
        }
      } else {
        setChallengeStates((prev) => ({
          ...prev,
          [challenge.id]: {
            status: 'wrong',
            selectedIndex: answerIndex,
            correctIndex: data.correctIndex,
          },
        }))
        toast.error('Mauvaise réponse !', {
          description: `La bonne réponse était : ${data.correctAnswer}`,
        })
      }
    } catch (err) {
      console.error('Challenge submit error:', err)
      toast.error('Erreur lors de la soumission')
      // Reset selection on error
      setChallengeStates((prev) => ({
        ...prev,
        [challenge.id]: { status: 'unanswered', selectedIndex: null },
      }))
    } finally {
      setSubmitting(null)
    }
  }

  // ─── Compute progress ─────────────────────────────────────────────────
  const completedCount = completedIds.length
  const totalChallenges = challenges.length

  // ─── Loading state ────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 text-yoel-primary animate-spin" />
          <p className="text-sm text-muted-foreground">Chargement des défis…</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* ─── Sticky Top Bar ──────────────────────────────────────────── */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/40">
        <div className="mx-auto max-w-4xl flex items-center gap-2 px-4 py-3 lg:px-6">
          <Button
            variant="outline"
            size="sm"
            onClick={goBack}
            className="shrink-0 rounded-full gap-1.5 border-yoel-primary/20 hover:bg-yoel-primary/5 hover:border-yoel-primary/40 transition-all"
          >
            <ArrowLeft className="h-4 w-4 text-yoel-primary" />
            <span className="text-xs font-medium text-yoel-primary">Retour</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('dashboard')}
            className="shrink-0 text-muted-foreground hover:text-yoel-primary h-8 w-8"
          >
            <Home className="h-4 w-4" />
          </Button>
          <h1 className="text-xl font-bold gradient-text-primary ml-1 flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Défis du jour
          </h1>
        </div>
      </div>

      <motion.div
        className="flex-1 mx-auto max-w-4xl w-full space-y-5 p-4 lg:p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ─── Date & Progress Header ──────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card overflow-hidden border-0">
            <div className="bg-gradient-to-r from-yoel-primary/10 via-yoel-gold/5 to-yoel-green/10 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-lg gradient-text-primary">
                    {dateStr ? formatDateFR(dateStr) : 'Aujourd\'hui'}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {completedCount}/{totalChallenges} défis complétés
                  </p>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yoel-primary to-yoel-gold text-white shadow-lg">
                  <Zap className="h-7 w-7" />
                </div>
              </div>
              {/* Progress bar */}
              <div className="mt-3 h-2 w-full rounded-full bg-muted/50 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-yoel-primary to-yoel-gold"
                  initial={{ width: 0 }}
                  animate={{ width: `${totalChallenges > 0 ? (completedCount / totalChallenges) * 100 : 0}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* ─── Challenge Cards ─────────────────────────────────────────── */}
        {challenges.map((challenge) => {
          const config = TYPE_CONFIG[challenge.type] ?? TYPE_CONFIG.grammar
          const state = challengeStates[challenge.id]
          const isCompleted = completedIds.includes(challenge.id)
          const isSubmitting = submitting === challenge.id

          return (
            <motion.div key={challenge.id} variants={itemVariants}>
              <Card className={`glass-card overflow-hidden transition-all ${isCompleted ? 'ring-1 ring-yoel-green/30' : ''}`}>
                <CardContent className="p-4 sm:p-5">
                  {/* Type badge & question */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${config.bg}`}>
                      {config.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge className={`text-[10px] px-2 py-0.5 border-0 ${config.bg} ${config.color} mb-1.5`}>
                        {config.label}
                      </Badge>
                      <p className="text-sm sm:text-base font-medium leading-relaxed">
                        {challenge.question}
                      </p>
                    </div>
                    {/* XP reward */}
                    <div className="flex items-center gap-1 shrink-0">
                      <Zap className="h-3.5 w-3.5 text-yoel-gold" />
                      <span className="text-sm font-bold text-yoel-gold">+{challenge.xpReward}</span>
                    </div>
                  </div>

                  {/* Answer options */}
                  <div className="space-y-2.5">
                    {challenge.options.map((option, idx) => {
                      const isSelected = state?.selectedIndex === idx
                      const isCorrectOption = idx === challenge.correctIndex
                      const isWrongSelection = state?.status === 'wrong' && isSelected
                      const isCorrectReveal = (state?.status === 'wrong' || state?.status === 'correct') && isCorrectOption
                      const isDisabled = isCompleted || state?.status === 'correct' || state?.status === 'wrong' || isSubmitting

                      let optionClass = 'border-border/50 bg-background/50 hover:border-yoel-primary/30 hover:bg-yoel-primary/5 text-foreground'

                      if (isCorrectReveal && state?.status === 'correct') {
                        optionClass = 'border-yoel-green/40 bg-yoel-green/10 text-yoel-green'
                      } else if (isWrongSelection) {
                        optionClass = 'border-destructive/40 bg-destructive/10 text-destructive'
                      } else if (isCorrectReveal && state?.status === 'wrong') {
                        optionClass = 'border-yoel-green/40 bg-yoel-green/10 text-yoel-green'
                      }

                      return (
                        <motion.button
                          key={idx}
                          custom={idx}
                          variants={optionVariants}
                          initial="hidden"
                          animate={isCorrectReveal && state?.status === 'correct' ? successPulse : 'visible'}
                          whileHover={!isDisabled ? { scale: 1.01 } : undefined}
                          whileTap={!isDisabled ? { scale: 0.98 } : undefined}
                          onClick={() => {
                            if (!isDisabled) {
                              handleSubmit(challenge, idx)
                            }
                          }}
                          disabled={isDisabled}
                          className={`w-full flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-all ${optionClass} ${isDisabled && !isSelected && !isCorrectReveal ? 'opacity-60' : ''}`}
                        >
                          {/* Letter badge */}
                          <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                            isCorrectReveal ? 'bg-yoel-green/20 text-yoel-green' :
                            isWrongSelection ? 'bg-destructive/20 text-destructive' :
                            'bg-muted/50 text-muted-foreground'
                          }`}>
                            {isCorrectReveal ? <Check className="h-3.5 w-3.5" /> :
                             isWrongSelection ? <X className="h-3.5 w-3.5" /> :
                             OPTION_LETTERS[idx]}
                          </span>
                          <span className="text-sm font-medium">{option}</span>
                          {isSubmitting && isSelected && (
                            <Loader2 className="h-4 w-4 animate-spin ml-auto" />
                          )}
                        </motion.button>
                      )
                    })}
                  </div>

                  {/* Completed state */}
                  <AnimatePresence>
                    {isCompleted && state?.status === 'correct' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-4 flex items-center gap-2 rounded-xl bg-yoel-green/10 border border-yoel-green/20 px-4 py-3"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yoel-green/20">
                          <Check className="h-4 w-4 text-yoel-green" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-yoel-green">Complété !</p>
                          <p className="text-xs text-yoel-green/70">+{state.xpEarned ?? challenge.xpReward} XP</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Wrong answer state - show correct answer */}
                  <AnimatePresence>
                    {state?.status === 'wrong' && state.correctIndex !== undefined && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-4 flex items-center gap-2 rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-3"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-destructive/20">
                          <X className="h-4 w-4 text-destructive" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-destructive">Mauvaise réponse</p>
                          <p className="text-xs text-destructive/70">
                            La bonne réponse était : <span className="font-semibold">{challenge.options[state.correctIndex]}</span>
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}

        {/* ─── Bonus Completion Card ───────────────────────────────────── */}
        <AnimatePresence>
          {(allCompletedBonus || completedCount === totalChallenges && totalChallenges > 0) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <Card className="overflow-hidden border-0 bg-gradient-to-r from-yoel-gold/15 via-yoel-primary/10 to-yoel-green/15 ring-1 ring-yoel-gold/30">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yoel-gold to-amber-500 text-white text-3xl shadow-lg">
                    🎉
                  </div>
                  <div>
                    <h3 className="font-bold text-lg gradient-text-primary">
                      Tous les défis complétés !
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Bonus +30 XP pour avoir complété tous les défis du jour !
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Come Back Tomorrow ──────────────────────────────────────── */}
        {completedCount === totalChallenges && totalChallenges > 0 && (
          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardContent className="flex flex-col items-center py-8">
                <p className="text-sm text-muted-foreground text-center">
                  Revenez demain pour de nouveaux défis ! 🔥
                </p>
                <Button
                  className="mt-4 rounded-full bg-yoel-primary hover:bg-yoel-primary/90 gap-2"
                  onClick={() => navigate('dashboard')}
                >
                  <Home className="h-4 w-4" />
                  Retour au tableau de bord
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Bottom spacer */}
        <div className="h-4" />
      </motion.div>
    </div>
  )
}
