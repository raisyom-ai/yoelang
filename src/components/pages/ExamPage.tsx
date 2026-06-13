'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, ArrowRight, Clock, CheckCircle, XCircle,
  Trophy, Award, BookOpen, RotateCcw, Home, Star,
  ChevronRight, AlertCircle, Sparkles, PartyPopper,
  Flame, Target, Zap
} from 'lucide-react'
import { useAppStore, getLevelsForUser } from '@/lib/store'
import { LEVEL_EXAMS, EXAM_PASSING_SCORE, EXAM_XP_REWARD, getNextLevel, type ExamQuestion, type LevelExam } from '@/lib/exam-data'
import { getTotalLessonsForLevel } from '@/lib/course-data'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'

// ─── Type Colors & Labels ─────────────────────────────────────────────────

const TYPE_COLORS: Record<string, string> = {
  grammar: 'bg-yoel-primary/10 text-yoel-primary',
  vocabulary: 'bg-yoel-green/10 text-yoel-green',
  translation: 'bg-yoel-blue/10 text-yoel-blue',
  conjugaison: 'bg-yoel-gold/10 text-yoel-gold',
}

const TYPE_LABELS: Record<string, string> = {
  grammar: 'Grammaire',
  vocabulary: 'Vocabulaire',
  translation: 'Traduction',
  conjugaison: 'Conjugaison',
}

const TYPE_BORDER_COLORS: Record<string, string> = {
  grammar: 'border-yoel-primary/30',
  vocabulary: 'border-yoel-green/30',
  translation: 'border-yoel-blue/30',
  conjugaison: 'border-yoel-gold/30',
}

const TYPE_BG_SELECTED: Record<string, string> = {
  grammar: 'bg-yoel-primary text-white border-yoel-primary',
  vocabulary: 'bg-yoel-green text-white border-yoel-green',
  translation: 'bg-yoel-blue text-white border-yoel-blue',
  conjugaison: 'bg-yoel-gold text-white border-yoel-gold',
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
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 260, damping: 24 },
  },
}

const questionVariants = {
  enter: { opacity: 0, x: 60 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
}

// ─── Confetti Particle Component ────────────────────────────────────────────

function ConfettiParticle({ delay }: { delay: number }) {
  const colors = ['bg-yoel-primary', 'bg-yoel-green', 'bg-yoel-gold', 'bg-yoel-blue', 'bg-pink-400', 'bg-purple-400']
  const color = colors[Math.floor(Math.random() * colors.length)]
  const left = Math.random() * 100
  const size = Math.random() * 8 + 4
  const duration = Math.random() * 2 + 2

  return (
    <motion.div
      className={`absolute ${color} rounded-full`}
      style={{
        left: `${left}%`,
        top: '-10px',
        width: size,
        height: size,
      }}
      initial={{ y: -10, opacity: 1, rotate: 0 }}
      animate={{ y: '110vh', opacity: 0, rotate: 720 }}
      transition={{ duration, delay, ease: 'easeOut' }}
    />
  )
}

function ConfettiAnimation() {
  const particles = Array.from({ length: 50 }, (_, i) => i)
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((i) => (
        <ConfettiParticle key={i} delay={i * 0.05} />
      ))}
    </div>
  )
}

// ─── Timer Component ────────────────────────────────────────────────────────

function ExamTimer({
  timeLeft,
  totalSeconds,
}: {
  timeLeft: number
  totalSeconds: number
}) {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const isLow = timeLeft <= 60
  const isCritical = timeLeft <= 30

  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
      isCritical
        ? 'bg-red-500/10 text-red-600 animate-pulse'
        : isLow
          ? 'bg-orange-500/10 text-orange-600'
          : 'bg-muted text-muted-foreground'
    }`}>
      <Clock className="w-4 h-4" />
      <span>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────

type ExamState = 'intro' | 'taking' | 'review' | 'complete'

interface CategoryResult {
  type: string
  label: string
  total: number
  correct: number
  color: string
}

export default function ExamPage() {
  const { user, examLevel, currentLevel, completedLessons, navigate, addXP, updateUserLevel, setExamLevel, earnCertificate, earnedCertificates } = useAppStore()
  const level = examLevel || currentLevel || 'A1'

  // ─── State ─────────────────────────────────────────────────────────────
  const [examState, setExamState] = useState<ExamState>('intro')
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [timeLeft, setTimeLeft] = useState(30 * 60) // 30 minutes
  const [reviewQuestionIdx, setReviewQuestionIdx] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // ─── Exam data ─────────────────────────────────────────────────────────
  const exam: LevelExam | undefined = LEVEL_EXAMS[level]
  const totalQuestions = exam?.questions.length ?? 0
  const totalLessons = getTotalLessonsForLevel(level)
  const levelPrefix = level.toLowerCase() + '-l'
  const completedCount = completedLessons.filter((id) => id.startsWith(levelPrefix)).length
  const allLessonsCompleted = completedCount >= totalLessons && totalLessons > 0

  // ─── Computed results ──────────────────────────────────────────────────
  const correctAnswers = exam
    ? exam.questions.reduce((acc, q, i) => acc + (answers[i] === q.correctIndex ? 1 : 0), 0)
    : 0
  const score = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0
  const passed = score >= EXAM_PASSING_SCORE
  const xpReward = passed ? (EXAM_XP_REWARD[level] || 100) : 0

  // Category breakdown
  const categoryResults: CategoryResult[] = exam
    ? (['grammar', 'vocabulary', 'translation', 'conjugaison'] as const).map((type) => {
        const typeQuestions = exam.questions.filter((q) => q.type === type)
        const typeCorrect = typeQuestions.filter((q) => {
          const idx = exam.questions.indexOf(q)
          return answers[idx] === q.correctIndex
        }).length
        return {
          type,
          label: TYPE_LABELS[type],
          total: typeQuestions.length,
          correct: typeCorrect,
          color: TYPE_COLORS[type].split(' ')[0].replace('bg-', '').replace('/10', ''),
        }
      })
    : []

  const answeredCount = Object.keys(answers).length

  // ─── Timer ─────────────────────────────────────────────────────────────
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current)
          // Auto-submit when time runs out
          setExamState('review')
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }, [])

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  // Clean up timer on unmount
  useEffect(() => {
    return () => stopTimer()
  }, [stopTimer])

  // ─── Handlers ──────────────────────────────────────────────────────────
  const handleStartExam = () => {
    setExamState('taking')
    setCurrentQuestionIdx(0)
    setAnswers({})
    setTimeLeft(30 * 60)
    startTimer()
  }

  const handleSelectAnswer = (questionIdx: number, optionIdx: number) => {
    setAnswers((prev) => ({ ...prev, [questionIdx]: optionIdx }))
  }

  const handleSubmitExam = () => {
    stopTimer()
    setExamState('review')
  }

  const handleAdvanceLevel = async () => {
    if (!passed || !user || !exam) return
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/exam/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          level,
          score,
          totalQuestions,
          correctAnswers,
          passed,
          xpEarned: xpReward,
        }),
      })

      if (res.ok) {
        const data = await res.json()
        // Update store
        addXP(xpReward)
        if (data.newLevel) {
          updateUserLevel(data.newLevel)
        }

        // Award certificate in the store (the DB already has it from the API)
        const totalLessonsForLevel = getTotalLessonsForLevel(level)
        const levelPrefix = level.toLowerCase() + '-l'
        const completedCount = completedLessons.filter((id) => id.startsWith(levelPrefix)).length
        earnCertificate(level, totalLessonsForLevel, completedCount, score)

        // If API returned a certificate ID, update the latest certificate entry
        if (data.certificateId && earnedCertificates.length > 0) {
          // The certificate was already added by earnCertificate, update with real ID
          const certs = [...earnedCertificates]
          const lastCert = certs[certs.length - 1]
          if (lastCert && lastCert.level === level) {
            certs[certs.length - 1] = {
              ...lastCert,
              id: data.certificateId,
              examScore: score,
              totalQuestions,
              correctAnswers,
            }
            // Use loadUserProgress to set the certificates properly
          }
        }

        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 4000)
        setExamState('complete')
      }
    } catch {
      // Fallback: still update locally
      addXP(xpReward)
      const nextLvl = getNextLevel(level)
      if (nextLvl) updateUserLevel(nextLvl)

      // Award certificate locally
      const totalLessonsForLevel = getTotalLessonsForLevel(level)
      const levelPrefix = level.toLowerCase() + '-l'
      const completedCount = completedLessons.filter((id) => id.startsWith(levelPrefix)).length
      earnCertificate(level, totalLessonsForLevel, completedCount, score)

      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 4000)
      setExamState('complete')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRetry = () => {
    setExamState('intro')
    setCurrentQuestionIdx(0)
    setAnswers({})
    setTimeLeft(30 * 60)
    setReviewQuestionIdx(null)
  }

  const handleGoToDashboard = () => {
    setExamLevel(null)
    navigate('dashboard')
  }

  // ─── Guard: No exam data ───────────────────────────────────────────────
  if (!exam) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <AlertCircle className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-bold mb-2">Examen non disponible</h2>
            <p className="text-muted-foreground mb-4">
              L&apos;examen pour le niveau {level} n&apos;est pas encore disponible.
            </p>
            <Button onClick={handleGoToDashboard} variant="outline">
              <Home className="w-4 h-4 mr-2" />
              Retour au tableau de bord
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  // ─── Guard: Lessons not completed ──────────────────────────────────────
  if (!allLessonsCompleted && examState === 'intro') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-md">
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-yoel-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-yoel-primary" />
                </div>
                <h2 className="text-xl font-bold mb-2">Leçons incomplètes</h2>
                <p className="text-muted-foreground mb-4">
                  Vous devez compléter toutes les leçons du niveau {level} avant de passer l&apos;examen.
                </p>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progression</span>
                    <span className="font-medium">{completedCount}/{totalLessons} leçons</span>
                  </div>
                  <Progress value={(completedCount / totalLessons) * 100} className="h-2" />
                </div>
                <Button onClick={handleGoToDashboard} className="w-full">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Continuer les leçons
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  // ─── Render: Intro State ───────────────────────────────────────────────
  if (examState === 'intro') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-lg">
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden border-2 border-yoel-primary/20">
              <div className="bg-gradient-to-br from-yoel-primary/10 via-yoel-primary/5 to-transparent p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Button variant="ghost" size="icon" onClick={handleGoToDashboard} className="shrink-0">
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                  <Badge className={`${TYPE_COLORS.grammar} text-xs`}>{level}</Badge>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">{exam.title}</h1>
                <p className="text-muted-foreground leading-relaxed">{exam.description}</p>
              </div>

              <CardContent className="p-6 space-y-6">
                {/* Exam info grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-muted/50 rounded-xl p-3 text-center">
                    <Target className="w-5 h-5 mx-auto text-yoel-primary mb-1" />
                    <p className="text-sm text-muted-foreground">Questions</p>
                    <p className="text-lg font-bold">{totalQuestions}</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-3 text-center">
                    <Clock className="w-5 h-5 mx-auto text-yoel-blue mb-1" />
                    <p className="text-sm text-muted-foreground">Durée</p>
                    <p className="text-lg font-bold">30 min</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-3 text-center">
                    <Flame className="w-5 h-5 mx-auto text-yoel-gold mb-1" />
                    <p className="text-sm text-muted-foreground">Score requis</p>
                    <p className="text-lg font-bold">{EXAM_PASSING_SCORE}%</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-3 text-center">
                    <Zap className="w-5 h-5 mx-auto text-yoel-green mb-1" />
                    <p className="text-sm text-muted-foreground">Récompense XP</p>
                    <p className="text-lg font-bold">+{exam.xpReward} XP</p>
                  </div>
                </div>

                {/* Category breakdown */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-3">Catégories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {(['grammar', 'vocabulary', 'translation', 'conjugaison'] as const).map((type) => {
                      const count = exam.questions.filter((q) => q.type === type).length
                      return (
                        <div key={type} className={`flex items-center gap-2 p-2.5 rounded-lg border ${TYPE_BORDER_COLORS[type]}`}>
                          <Badge className={`${TYPE_COLORS[type]} text-xs`}>{TYPE_LABELS[type]}</Badge>
                          <span className="text-sm text-muted-foreground ml-auto">{count} questions</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <Separator />

                {/* Warning */}
                <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-3 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-amber-700 dark:text-amber-400">Attention</p>
                    <p className="text-muted-foreground">
                      Une fois l&apos;examen commencé, vous avez 30 minutes pour le compléter.
                      Vous ne pouvez pas revenir en arrière après la soumission.
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleStartExam}
                  className="w-full h-12 text-base font-semibold"
                  size="lg"
                >
                  Commencer l&apos;examen
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  // ─── Render: Taking State ──────────────────────────────────────────────
  if (examState === 'taking') {
    const question = exam.questions[currentQuestionIdx]
    const selectedAnswer = answers[currentQuestionIdx]
    const progressPercent = ((currentQuestionIdx + 1) / totalQuestions) * 100

    return (
      <div className="min-h-screen flex flex-col">
        {/* Top bar */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b">
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
            <Button variant="ghost" size="sm" onClick={handleGoToDashboard} className="text-muted-foreground">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Quitter</span>
            </Button>
            <div className="flex items-center gap-2">
              <Badge className={`${TYPE_COLORS[question.type]} text-xs`}>
                {TYPE_LABELS[question.type]}
              </Badge>
              <span className="text-sm text-muted-foreground font-medium">
                {currentQuestionIdx + 1}/{totalQuestions}
              </span>
            </div>
            <ExamTimer timeLeft={timeLeft} totalSeconds={30 * 60} />
          </div>
          <Progress value={progressPercent} className="h-1 rounded-none" />
        </div>

        {/* Question area */}
        <div className="flex-1 flex items-start justify-center p-4 pt-6">
          <div className="w-full max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestionIdx}
                variants={questionVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-semibold text-muted-foreground">
                        Question {currentQuestionIdx + 1}
                      </span>
                      <Badge className={`${TYPE_COLORS[question.type]} text-xs`}>
                        {TYPE_LABELS[question.type]}
                      </Badge>
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold leading-relaxed">
                      {question.question}
                    </h2>
                  </CardContent>
                </Card>

                {/* Options */}
                <div className="space-y-3">
                  {question.options.map((option, optIdx) => {
                    const isSelected = selectedAnswer === optIdx
                    const optionLabel = String.fromCharCode(65 + optIdx) // A, B, C, D

                    return (
                      <motion.button
                        key={optIdx}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => handleSelectAnswer(currentQuestionIdx, optIdx)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ${
                          isSelected
                            ? `${TYPE_BG_SELECTED[question.type]} shadow-md`
                            : 'border-border hover:border-muted-foreground/30 bg-card'
                        }`}
                      >
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                          isSelected ? 'bg-white/20' : 'bg-muted'
                        }`}>
                          {optionLabel}
                        </span>
                        <span className="text-base">{option}</span>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto"
                          >
                            <CheckCircle className="w-5 h-5" />
                          </motion.div>
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm border-t">
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentQuestionIdx((prev) => Math.max(0, prev - 1))}
              disabled={currentQuestionIdx === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Précédent
            </Button>

            {/* Question dots */}
            <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto max-w-xs">
              {exam.questions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentQuestionIdx(i)}
                  className={`w-6 h-6 rounded-full text-xs font-medium transition-all flex items-center justify-center ${
                    i === currentQuestionIdx
                      ? 'bg-yoel-primary text-white scale-110'
                      : answers[i] !== undefined
                        ? 'bg-yoel-green/20 text-yoel-green border border-yoel-green/30'
                        : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {currentQuestionIdx < totalQuestions - 1 ? (
              <Button
                onClick={() => setCurrentQuestionIdx((prev) => prev + 1)}
              >
                Suivant
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmitExam}
                className="bg-yoel-green hover:bg-yoel-green/90"
                disabled={answeredCount === 0}
              >
                <CheckCircle className="w-4 h-4 mr-1" />
                Soumettre ({answeredCount}/{totalQuestions})
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // ─── Render: Review State ──────────────────────────────────────────────
  if (examState === 'review') {
    const nextLevel = getNextLevel(level)

    // If viewing a specific question in review mode
    if (reviewQuestionIdx !== null) {
      const q = exam.questions[reviewQuestionIdx]
      const userAnswer = answers[reviewQuestionIdx]
      const isCorrect = userAnswer === q.correctIndex

      return (
        <div className="min-h-screen flex flex-col">
          <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b">
            <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
              <Button variant="ghost" size="sm" onClick={() => setReviewQuestionIdx(null)}>
                <ArrowLeft className="w-4 h-4 mr-1" />
                Résultats
              </Button>
              <div className="flex items-center gap-2">
                <Badge className={`${TYPE_COLORS[q.type]} text-xs`}>{TYPE_LABELS[q.type]}</Badge>
                <span className="text-sm text-muted-foreground">
                  Question {reviewQuestionIdx + 1}/{totalQuestions}
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 pt-6">
            <div className="max-w-2xl mx-auto space-y-6">
              <Card className={`border-2 ${isCorrect ? 'border-yoel-green/30' : 'border-red-300/50'}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {isCorrect ? (
                      <div className="w-10 h-10 rounded-full bg-yoel-green/10 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-yoel-green" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                        <XCircle className="w-6 h-6 text-red-500" />
                      </div>
                    )}
                    <span className={`font-semibold ${isCorrect ? 'text-yoel-green' : 'text-red-500'}`}>
                      {isCorrect ? 'Correct !' : 'Incorrect'}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold leading-relaxed mb-4">{q.question}</h2>

                  <div className="space-y-2">
                    {q.options.map((option, optIdx) => {
                      const isThisCorrect = optIdx === q.correctIndex
                      const isThisSelected = optIdx === userAnswer

                      return (
                        <div
                          key={optIdx}
                          className={`p-3 rounded-lg border-2 flex items-center gap-3 ${
                            isThisCorrect
                              ? 'border-yoel-green/50 bg-yoel-green/5'
                              : isThisSelected && !isThisCorrect
                                ? 'border-red-300/50 bg-red-50/50'
                                : 'border-transparent bg-muted/30'
                          }`}
                        >
                          <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-muted">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="flex-1">{option}</span>
                          {isThisCorrect && <CheckCircle className="w-5 h-5 text-yoel-green shrink-0" />}
                          {isThisSelected && !isThisCorrect && <XCircle className="w-5 h-5 text-red-500 shrink-0" />}
                        </div>
                      )
                    })}
                  </div>

                  {/* Explanation */}
                  <div className="mt-4 p-4 bg-muted/50 rounded-xl">
                    <p className="text-sm font-medium mb-1">Explication</p>
                    <p className="text-sm text-muted-foreground">{q.explanation}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Navigate between questions in review */}
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setReviewQuestionIdx(Math.max(0, reviewQuestionIdx - 1))}
                  disabled={reviewQuestionIdx === 0}
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Question précédente
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setReviewQuestionIdx(Math.min(totalQuestions - 1, reviewQuestionIdx + 1))}
                  disabled={reviewQuestionIdx === totalQuestions - 1}
                >
                  Question suivante
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    // Review summary
    return (
      <div className="min-h-screen p-4">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-lg mx-auto space-y-6">
          <motion.div variants={itemVariants}>
            <Card className={`border-2 ${passed ? 'border-yoel-green/30' : 'border-red-300/50'} overflow-hidden`}>
              <div className={`p-6 text-center ${passed ? 'bg-gradient-to-b from-yoel-green/10 to-transparent' : 'bg-gradient-to-b from-red-50/50 to-transparent'}`}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
                >
                  {passed ? (
                    <div className="w-20 h-20 rounded-full bg-yoel-green/10 flex items-center justify-center mx-auto mb-4">
                      <Trophy className="w-10 h-10 text-yoel-green" />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                      <XCircle className="w-10 h-10 text-red-500" />
                    </div>
                  )}
                </motion.div>

                <h2 className="text-2xl font-bold mb-1">
                  {passed ? 'Examen réussi !' : 'Examen non réussi'}
                </h2>
                <p className="text-muted-foreground">
                  {passed
                    ? 'Félicitations ! Vous avez atteint le score requis.'
                    : 'Ne vous découragez pas, révisez et réessayez.'}
                </p>
              </div>

              <CardContent className="p-6 space-y-6">
                {/* Score display */}
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', delay: 0.3 }}
                    className="text-5xl font-bold mb-1"
                  >
                    <span className={passed ? 'text-yoel-green' : 'text-red-500'}>{score}%</span>
                  </motion.div>
                  <p className="text-muted-foreground">
                    {correctAnswers}/{totalQuestions} réponses correctes
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2 text-sm">
                    <span className="text-muted-foreground">Score requis :</span>
                    <span className="font-semibold">{EXAM_PASSING_SCORE}%</span>
                  </div>
                </div>

                {/* Category breakdown */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-3">Résultats par catégorie</h3>
                  <div className="space-y-2">
                    {categoryResults.map((cat) => (
                      <div key={cat.type} className="flex items-center gap-3">
                        <Badge className={`${TYPE_COLORS[cat.type]} text-xs min-w-[90px] justify-center`}>
                          {cat.label}
                        </Badge>
                        <div className="flex-1">
                          <Progress
                            value={cat.total > 0 ? (cat.correct / cat.total) * 100 : 0}
                            className="h-2"
                          />
                        </div>
                        <span className="text-sm font-medium min-w-[50px] text-right">
                          {cat.correct}/{cat.total}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Review questions link */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-3">Revoir vos réponses</h3>
                  <ScrollArea className="max-h-48">
                    <div className="grid grid-cols-5 gap-2">
                      {exam.questions.map((q, i) => {
                        const isCorrect = answers[i] === q.correctIndex
                        return (
                          <button
                            key={i}
                            onClick={() => setReviewQuestionIdx(i)}
                            className={`w-full aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all hover:scale-105 ${
                              isCorrect
                                ? 'bg-yoel-green/10 text-yoel-green border border-yoel-green/30'
                                : answers[i] !== undefined
                                  ? 'bg-red-50/80 text-red-500 border border-red-300/50'
                                  : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            {i + 1}
                          </button>
                        )
                      })}
                    </div>
                  </ScrollArea>
                </div>

                <Separator />

                {/* Action buttons */}
                <div className="space-y-3">
                  {passed && nextLevel ? (
                    <Button
                      onClick={handleAdvanceLevel}
                      className="w-full h-12 text-base font-semibold bg-yoel-green hover:bg-yoel-green/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 mr-2" />
                          Passer au niveau {nextLevel} (+{xpReward} XP)
                        </>
                      )}
                    </Button>
                  ) : passed && !nextLevel ? (
                    <Button
                      onClick={handleAdvanceLevel}
                      className="w-full h-12 text-base font-semibold bg-yoel-gold hover:bg-yoel-gold/90"
                      disabled={isSubmitting}
                    >
                      <Crown className="w-5 h-5 mr-2" />
                      Maîtrise complète ! (+{xpReward} XP)
                    </Button>
                  ) : null}

                  {!passed && (
                    <Button onClick={handleRetry} className="w-full h-12 text-base font-semibold">
                      <RotateCcw className="w-5 h-5 mr-2" />
                      Réessayer l&apos;examen
                    </Button>
                  )}

                  <Button variant="outline" onClick={handleGoToDashboard} className="w-full">
                    <Home className="w-4 h-4 mr-2" />
                    Retour au tableau de bord
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  // ─── Render: Complete State (Celebration) ──────────────────────────────
  if (examState === 'complete') {
    const nextLevel = getNextLevel(level)
    const earnedCert = earnedCertificates.find((c) => c.level === level)

    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative">
        {showConfetti && <ConfettiAnimation />}

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-md">
          <motion.div variants={itemVariants}>
            <Card className="border-2 border-yoel-gold/30 overflow-hidden">
              <div className="bg-gradient-to-b from-yoel-gold/10 via-yoel-green/5 to-transparent p-8 text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
                >
                  <div className="w-24 h-24 rounded-full bg-yoel-gold/10 flex items-center justify-center mx-auto mb-4">
                    <PartyPopper className="w-12 h-12 text-yoel-gold" />
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl sm:text-3xl font-bold mb-2"
                >
                  Félicitations ! 🎉
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-muted-foreground"
                >
                  Vous avez réussi l&apos;examen {level} avec {score}% !
                </motion.p>
              </div>

              <CardContent className="p-6 space-y-6">
                {/* Rewards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-yoel-green/5 border border-yoel-green/20 rounded-xl p-4 text-center">
                    <Zap className="w-6 h-6 mx-auto text-yoel-green mb-1" />
                    <p className="text-2xl font-bold text-yoel-green">+{xpReward}</p>
                    <p className="text-xs text-muted-foreground">XP gagnés</p>
                  </div>
                  {nextLevel ? (
                    <div className="bg-yoel-primary/5 border border-yoel-primary/20 rounded-xl p-4 text-center">
                      <Award className="w-6 h-6 mx-auto text-yoel-primary mb-1" />
                      <p className="text-2xl font-bold text-yoel-primary">{nextLevel}</p>
                      <p className="text-xs text-muted-foreground">Nouveau niveau</p>
                    </div>
                  ) : (
                    <div className="bg-yoel-gold/5 border border-yoel-gold/20 rounded-xl p-4 text-center">
                      <Trophy className="w-6 h-6 mx-auto text-yoel-gold mb-1" />
                      <p className="text-lg font-bold text-yoel-gold">Maîtrise</p>
                      <p className="text-xs text-muted-foreground">Niveau max atteint</p>
                    </div>
                  )}
                </div>

                {/* Certificate delivery */}
                {earnedCert && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: 'spring' }}
                    className="bg-gradient-to-r from-yoel-gold/10 via-yoel-primary/5 to-yoel-gold/10 border-2 border-yoel-gold/30 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-yoel-gold/20 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-yoel-gold" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">Certificat délivré !</h3>
                        <p className="text-xs text-muted-foreground">
                          Certificat officiel de niveau {level}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground bg-background/50 rounded-lg p-2">
                      <Sparkles className="w-3.5 h-3.5 text-yoel-gold shrink-0" />
                      <span className="font-mono text-[10px]">{earnedCert.id}</span>
                    </div>
                  </motion.div>
                )}

                {/* Score summary */}
                <div className="text-center space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Score : <span className="font-semibold">{correctAnswers}/{totalQuestions}</span> réponses correctes
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                    {categoryResults.map((cat) => (
                      <Badge key={cat.type} className={`${TYPE_COLORS[cat.type]} text-xs`}>
                        {cat.label}: {cat.correct}/{cat.total}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  {earnedCert && (
                    <Button
                      onClick={() => {
                        setExamLevel(null)
                        navigate('certificate')
                      }}
                      className="w-full h-12 text-base font-semibold bg-yoel-gold hover:bg-yoel-gold/90 text-white"
                      size="lg"
                    >
                      <Award className="w-5 h-5 mr-2" />
                      Voir mon certificat
                    </Button>
                  )}

                  <Button
                    onClick={handleGoToDashboard}
                    className="w-full h-12 text-base font-semibold"
                    size="lg"
                  >
                    <Home className="w-5 h-5 mr-2" />
                    Continuer l&apos;apprentissage
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => {
                      setExamLevel(null)
                      navigate('levels')
                    }}
                    className="w-full"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Voir tous les niveaux
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return null
}

// Import Crown icon used in complete state
function Crown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
      <path d="M5 21h14" />
    </svg>
  )
}
