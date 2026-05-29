'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Home, CheckCircle2, XCircle, Star, Zap, Clock,
  Brain, BookOpen, MessageSquareText, Mic, RotateCcw,
  ChevronRight, Trophy, Sparkles, Volume2, Eye, EyeOff,
  Hash, SkipForward, RefreshCw, AlertCircle, Loader2, Keyboard
} from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { useSpeechRecognition, type SpeechRecognitionResult } from '@/hooks/use-speech-recognition'
import { speakWord } from '@/lib/speech-utils'
import { VOCAB_BY_LEVEL, QUIZ_BY_LEVEL, GRAMMAR_BY_LEVEL, PRONUNCIATION_BY_LEVEL, type VocabCard, type QuizQuestion, type GrammarExercise, type PronunciationWord } from '@/lib/course-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

// ─── Animation Variants ─────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
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

const cardFlipVariants = {
  front: { rotateY: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
  back: { rotateY: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
}

const feedbackVariants = {
  correct: {
    scale: [1, 1.2, 1],
    transition: { duration: 0.4 },
  },
  incorrect: {
    x: [0, -10, 10, -10, 0],
    transition: { duration: 0.4 },
  },
}

// ─── Sample Data ────────────────────────────────────────────────────────────
// Types and data are imported from course-data.ts

// Re-export types for local use
type VocabCardLocal = VocabCard
type QuizQuestionLocal = QuizQuestion
type GrammarExerciseLocal = GrammarExercise
type PronunciationWordLocal = PronunciationWord

// Level-specific data is now loaded from course-data.ts via hooks
// The QuizTab, GrammarTab, VocabularyTab, and PronunciationTab components
// receive their data as props from the parent ExercisesPage component.

function getQuizForLevel(level: string): QuizQuestion[] {
  return QUIZ_BY_LEVEL[level] || QUIZ_BY_LEVEL['A1']
}

function getGrammarForLevel(level: string): GrammarExercise[] {
  return GRAMMAR_BY_LEVEL[level] || GRAMMAR_BY_LEVEL['A1']
}

function getVocabForLevel(level: string): VocabCard[] {
  return VOCAB_BY_LEVEL[level] || VOCAB_BY_LEVEL['A1']
}

function getPronunciationForLevel(level: string): PronunciationWord[] {
  return PRONUNCIATION_BY_LEVEL[level] || PRONUNCIATION_BY_LEVEL['A1']
}

const ENCOURAGEMENTS = [
  'Excellent ! Continuez comme ça ! 🎉',
  'Bravo ! Vous êtes sur la bonne voie ! ⭐',
  'Super ! Votre anglais s\'améliore ! 🚀',
  'Fantastique ! Vous apprenez vite ! 💪',
  'Impressionnant ! Gardez le rythme ! 🔥',
]

const XP_REWARDS = {
  quiz: 10,
  grammar: 15,
  vocabulary: 8,
  pronunciation: 12,
}



// ─── Timer Component ────────────────────────────────────────────────────────

function QuestionTimer({
  timeLimit,
  onTimeout,
  isActive,
}: {
  timeLimit: number
  onTimeout: () => void
  isActive: boolean
}) {
  const [timeLeft, setTimeLeft] = useState(timeLimit)

  useEffect(() => {
    if (!isActive) return
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          onTimeout()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [isActive, onTimeout])

  const percentage = (timeLeft / timeLimit) * 100
  const isLow = timeLeft <= 5

  return (
    <div className="flex items-center gap-2">
      <Clock className={`h-4 w-4 ${isLow ? 'text-destructive' : 'text-muted-foreground'}`} />
      <div className="flex-1 max-w-[80px]">
        <Progress
          value={percentage}
          className={`h-1.5 ${isLow ? '[&>div]:bg-destructive' : ''}`}
        />
      </div>
      <span className={`text-sm font-mono font-semibold tabular-nums ${isLow ? 'text-destructive' : 'text-muted-foreground'}`}>
        {timeLeft}s
      </span>
    </div>
  )
}

// ─── Results Summary Component ──────────────────────────────────────────────

function ResultsSummary({
  score,
  total,
  xpEarned,
  type,
  onRestart,
  onBack,
}: {
  score: number
  total: number
  xpEarned: number
  type: string
  onRestart: () => void
  onBack: () => void
}) {
  const addXP = useAppStore((s) => s.addXP)
  const percentage = Math.round((score / total) * 100)
  const encouragement =
    percentage >= 80
      ? 'Excellent ! Vous maîtrisez ce sujet ! 🏆'
      : percentage >= 60
      ? 'Bien joué ! Continuez à pratiquer ! 💪'
      : percentage >= 40
      ? 'Pas mal ! Révisez un peu plus ! 📚'
      : 'Continuez à apprendre, vous progresserez ! 🌱'

  // Award XP when results are shown
  useEffect(() => {
    if (xpEarned > 0) {
      addXP(xpEarned)
    }
  }, [xpEarned, addXP])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="flex flex-col items-center text-center space-y-6 py-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="relative"
      >
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-yoel-red/20 to-yoel-gold/20 border-2 border-yoel-red/30">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            {percentage >= 80 ? (
              <Trophy className="h-12 w-12 text-yoel-gold" />
            ) : percentage >= 50 ? (
              <Star className="h-12 w-12 text-yoel-red" />
            ) : (
              <Sparkles className="h-12 w-12 text-yoel-blue" />
            )}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-2"
      >
        <h3 className="text-2xl font-bold gradient-text-red">
          {score}/{total}
        </h3>
        <p className="text-muted-foreground">{encouragement}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex items-center gap-2 rounded-full bg-yoel-gold/10 px-4 py-2"
      >
        <Zap className="h-5 w-5 text-yoel-gold" />
        <span className="font-semibold text-yoel-gold">+{xpEarned} XP gagnés</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="w-full max-w-xs"
      >
        <Progress value={percentage} className="h-3" />
        <p className="text-sm text-muted-foreground mt-1">{percentage}% de réussite</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex gap-3"
      >
        <Button
          variant="outline"
          onClick={onBack}
          className="rounded-full"
        >
          Retour
        </Button>
        <Button
          onClick={onRestart}
          className="bg-yoel-red hover:bg-yoel-red-dark text-white rounded-full"
        >
          <RotateCcw className="h-4 w-4 mr-1.5" />
          Recommencer
        </Button>
      </motion.div>
    </motion.div>
  )
}

// ─── Quiz Tab ───────────────────────────────────────────────────────────────

function QuizTab({ level }: { level: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const quizQuestions = getQuizForLevel(level)
  const currentQuestion = quizQuestions[currentIndex]

  const handleTimeout = useCallback(() => {
    if (!isAnswered) {
      setIsAnswered(true)
      setSelectedAnswer(-1)
    }
  }, [isAnswered])

  const handleAnswer = (index: number) => {
    if (isAnswered) return
    setSelectedAnswer(index)
    setIsAnswered(true)
    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1)
    }
    setTimeout(() => setShowExplanation(true), 300)
  }

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
      setShowExplanation(false)
    } else {
      setIsCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setScore(0)
    setIsCompleted(false)
    setShowExplanation(false)
  }

  if (isCompleted) {
    return (
      <ResultsSummary
        score={score}
        total={quizQuestions.length}
        xpEarned={score * XP_REWARDS.quiz}
        type="Quiz"
        onRestart={handleRestart}
        onBack={handleRestart}
      />
    )
  }

  return (
    <div className="space-y-4">
      {/* Progress */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground">
          Question {currentIndex + 1}/{quizQuestions.length}
        </span>
        <Progress value={((currentIndex + 1) / quizQuestions.length) * 100} className="flex-1 h-2" />
        <div className="flex items-center gap-1 text-sm font-semibold text-yoel-green">
          <CheckCircle2 className="h-4 w-4" />
          {score}
        </div>
      </div>

      {/* Timer */}
      <QuestionTimer key={currentQuestion.id} timeLimit={20} onTimeout={handleTimeout} isActive={!isAnswered} />

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <Card className="glass overflow-hidden border-0">
            <div className="relative w-full h-[100px] overflow-hidden rounded-t-xl">
              <Image
                src="/images/exercises/quiz.png"
                alt="Quiz"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
            </div>
            <CardContent className="p-6 space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  <Brain className="h-3 w-3 mr-1" />
                  Quiz
                </Badge>
              </div>

              <h3 className="text-lg font-semibold leading-relaxed">
                {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedAnswer === idx
                  const isCorrect = idx === currentQuestion.correctIndex

                  let optionClass =
                    'relative text-sm py-3 px-4 rounded-xl border-2 transition-all font-medium text-left'

                  if (isAnswered) {
                    if (isCorrect) {
                      optionClass +=
                        ' bg-yoel-green/15 border-yoel-green/50 text-yoel-green'
                    } else if (isSelected && !isCorrect) {
                      optionClass +=
                        ' bg-destructive/10 border-destructive/50 text-destructive'
                    } else {
                      optionClass +=
                        ' bg-muted/30 border-transparent text-muted-foreground'
                    }
                  } else {
                    optionClass +=
                      ' bg-background border-border hover:border-yoel-red/40 hover:bg-yoel-red/5 cursor-pointer active:scale-[0.98]'
                  }

                  return (
                    <motion.button
                      key={idx}
                      whileTap={!isAnswered ? { scale: 0.97 } : undefined}
                      animate={
                        isAnswered && isSelected
                          ? isCorrect
                            ? feedbackVariants.correct
                            : feedbackVariants.incorrect
                          : undefined
                      }
                      onClick={() => handleAnswer(idx)}
                      disabled={isAnswered}
                      className={optionClass}
                    >
                      <span className="flex items-center gap-2">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted/50 text-xs font-bold">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        {option}
                        {isAnswered && isCorrect && (
                          <CheckCircle2 className="h-4 w-4 ml-auto text-yoel-green" />
                        )}
                        {isAnswered && isSelected && !isCorrect && (
                          <XCircle className="h-4 w-4 ml-auto text-destructive" />
                        )}
                      </span>
                    </motion.button>
                  )
                })}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`rounded-xl p-4 ${
                      selectedAnswer === currentQuestion.correctIndex
                        ? 'bg-yoel-green/10 border border-yoel-green/20'
                        : 'bg-yoel-red/5 border border-yoel-red/20'
                    }`}>
                      <p className="text-sm font-medium">
                        {selectedAnswer === currentQuestion.correctIndex ? '✓ Correct !' : '✗ Incorrect'}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next button */}
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end"
                >
                  <Button
                    onClick={handleNext}
                    className="bg-yoel-red hover:bg-yoel-red-dark text-white rounded-full"
                  >
                    {currentIndex < quizQuestions.length - 1 ? (
                      <>
                        Suivante
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Terminer
                        <Trophy className="h-4 w-4 ml-1" />
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ─── Grammar Tab ────────────────────────────────────────────────────────────

function GrammarTab({ level }: { level: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState<Record<string, boolean | null>>({})
  const [isCompleted, setIsCompleted] = useState(false)

  const grammarExercises = getGrammarForLevel(level)
  const currentExercise = grammarExercises[currentIndex]
  const isCurrentChecked = checked[currentExercise.id] !== undefined
  const isCurrentCorrect = checked[currentExercise.id] === true

  const handleCheck = () => {
    const userAnswer = (answers[currentExercise.id] ?? '').trim().toLowerCase()
    const correctAnswer = currentExercise.answer.toLowerCase()
    setChecked((prev) => ({
      ...prev,
      [currentExercise.id]: userAnswer === correctAnswer,
    }))
  }

  const handleNext = () => {
    if (currentIndex < grammarExercises.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setAnswers({})
    setChecked({})
    setIsCompleted(false)
  }

  const score = Object.values(checked).filter((v) => v === true).length

  if (isCompleted) {
    return (
      <ResultsSummary
        score={score}
        total={grammarExercises.length}
        xpEarned={score * XP_REWARDS.grammar}
        type="Grammaire"
        onRestart={handleRestart}
        onBack={handleRestart}
      />
    )
  }

  return (
    <div className="space-y-4">
      {/* Progress */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground">
          Exercice {currentIndex + 1}/{grammarExercises.length}
        </span>
        <Progress value={((currentIndex + 1) / grammarExercises.length) * 100} className="flex-1 h-2" />
        <div className="flex items-center gap-1 text-sm font-semibold text-yoel-green">
          <CheckCircle2 className="h-4 w-4" />
          {score}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentExercise.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <Card className="glass overflow-hidden border-0">
            <div className="relative w-full h-[100px] overflow-hidden rounded-t-xl">
              <Image
                src="/images/exercises/grammar.png"
                alt="Grammar"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
            </div>
            <CardContent className="p-6 space-y-5">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  <BookOpen className="h-3 w-3 mr-1" />
                  Grammaire
                </Badge>
                <Badge variant="outline" className="text-xs text-muted-foreground">
                  Indice : {currentExercise.hint}
                </Badge>
              </div>

              <div className="rounded-xl bg-muted/30 p-4">
                <p className="text-lg font-medium leading-relaxed">
                  {currentExercise.sentence}
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Votre réponse :
                </label>
                <div className="flex gap-2">
                  <Input
                    value={answers[currentExercise.id] ?? ''}
                    onChange={(e) =>
                      setAnswers((prev) => ({
                        ...prev,
                        [currentExercise.id]: e.target.value,
                      }))
                    }
                    disabled={isCurrentChecked}
                    placeholder="Tapez votre réponse..."
                    className={`flex-1 rounded-xl ${
                      isCurrentChecked
                        ? isCurrentCorrect
                          ? 'border-yoel-green/50 bg-yoel-green/5'
                          : 'border-destructive/50 bg-destructive/5'
                        : ''
                    }`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !isCurrentChecked && (answers[currentExercise.id] ?? '').trim()) {
                        handleCheck()
                      }
                    }}
                  />
                  {!isCurrentChecked && (
                    <Button
                      onClick={handleCheck}
                      disabled={!(answers[currentExercise.id] ?? '').trim()}
                      className="bg-yoel-green hover:bg-yoel-green/90 text-white rounded-xl"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Feedback */}
              <AnimatePresence>
                {isCurrentChecked && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`rounded-xl p-4 ${
                        isCurrentCorrect
                          ? 'bg-yoel-green/10 border border-yoel-green/20'
                          : 'bg-destructive/10 border border-destructive/20'
                      }`}
                    >
                      <p className="text-sm font-medium">
                        {isCurrentCorrect
                          ? '✓ Correct !'
                          : `✗ La réponse correcte est : "${currentExercise.answer}"`}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next button */}
              {isCurrentChecked && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end"
                >
                  <Button
                    onClick={handleNext}
                    className="bg-yoel-red hover:bg-yoel-red-dark text-white rounded-full"
                  >
                    {currentIndex < grammarExercises.length - 1 ? (
                      <>
                        Suivant
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Terminer
                        <Trophy className="h-4 w-4 ml-1" />
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ─── Vocabulary Tab ─────────────────────────────────────────────────────────

function VocabularyTab({ level }: { level: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [results, setResults] = useState<Record<string, boolean>>({})
  const [isCompleted, setIsCompleted] = useState(false)

  const vocabCards = getVocabForLevel(level)

  const currentCard = vocabCards[currentIndex]

  const handleKnow = () => {
    setResults((prev) => ({ ...prev, [currentCard.id]: true }))
    handleNext()
  }

  const handleDontKnow = () => {
    setResults((prev) => ({ ...prev, [currentCard.id]: false }))
    handleNext()
  }

  const handleNext = () => {
    setIsFlipped(false)
    if (currentIndex < vocabCards.length - 1) {
      setTimeout(() => setCurrentIndex((prev) => prev + 1), 300)
    } else {
      setIsCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setIsFlipped(false)
    setResults({})
    setIsCompleted(false)
  }

  const score = Object.values(results).filter(Boolean).length

  if (isCompleted) {
    return (
      <ResultsSummary
        score={score}
        total={vocabCards.length}
        xpEarned={score * XP_REWARDS.vocabulary}
        type="Vocabulaire"
        onRestart={handleRestart}
        onBack={handleRestart}
      />
    )
  }

  return (
    <div className="space-y-4">
      {/* Progress */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground">
          Carte {currentIndex + 1}/{vocabCards.length}
        </span>
        <Progress value={((currentIndex + 1) / vocabCards.length) * 100} className="flex-1 h-2" />
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-sm font-semibold text-yoel-green">
            <CheckCircle2 className="h-4 w-4" />
            {score}
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-destructive">
            <XCircle className="h-4 w-4" />
            {Object.values(results).filter((v) => !v).length}
          </span>
        </div>
      </div>

      {/* Flashcard - Crossfade style (no mirror effect) */}
      <div className="flex justify-center">
        <motion.div
          className="w-full max-w-sm cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
          whileTap={{ scale: 0.98 }}
        >
          <Card className="glass overflow-hidden border-0 min-h-[320px]">
            <div className="relative w-full h-[80px] overflow-hidden rounded-t-xl">
              <Image
                src="/images/exercises/vocabulary.png"
                alt="Vocabulary"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
            </div>
            <CardContent className="flex flex-col items-center justify-center p-6 min-h-[240px]">
              <AnimatePresence mode="wait">
                {!isFlipped ? (
                  <motion.div
                    key="front"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="flex flex-col items-center text-center space-y-3"
                  >
                    {currentCard.image && (
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={currentCard.image}
                          alt={currentCard.english}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <Badge variant="secondary" className="text-xs">
                      <MessageSquareText className="h-3 w-3 mr-1" />
                      Anglais → Français
                    </Badge>
                    <h3 className="text-3xl font-bold gradient-text-blue">
                      {currentCard.english}
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono">
                      {currentCard.phonetic}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Que signifie ce mot en français ?
                    </p>
                    <button
                      className="flex items-center gap-1.5 text-xs text-yoel-blue hover:text-yoel-blue-dark transition-colors mt-1"
                      onClick={(e) => {
                        e.stopPropagation()
                        speakWord(currentCard.english)
                      }}
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                      Écouter la prononciation
                    </button>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                      <Eye className="h-3.5 w-3.5" />
                      Tapez pour voir la traduction
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="back"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="flex flex-col items-center text-center space-y-4"
                  >
                    <Badge variant="secondary" className="text-xs bg-yoel-green/10 text-yoel-green">
                      🇫🇷 Traduction en français
                    </Badge>
                    <h3 className="text-3xl font-bold gradient-text-red">
                      {currentCard.french}
                    </h3>
                    <Separator className="w-16" />
                    <p className="text-sm italic text-muted-foreground max-w-[250px]">
                      &ldquo;{currentCard.example}&rdquo;
                    </p>
                    <button
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mt-1"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsFlipped(false)
                      }}
                    >
                      <EyeOff className="h-3.5 w-3.5" />
                      Retourner la carte
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 justify-center">
        <Button
          onClick={handleDontKnow}
          variant="outline"
          className="flex-1 max-w-[180px] rounded-xl border-destructive/30 text-destructive hover:bg-destructive/10 hover:text-destructive"
        >
          <XCircle className="h-4 w-4 mr-1.5" />
          Je ne sais pas
        </Button>
        <Button
          onClick={handleKnow}
          className="flex-1 max-w-[180px] bg-yoel-green hover:bg-yoel-green/90 text-white rounded-xl"
        >
          <CheckCircle2 className="h-4 w-4 mr-1.5" />
          Je sais !
        </Button>
      </div>
    </div>
  )
}

// ─── Pronunciation Tab ──────────────────────────────────────────────────────

function PronunciationTab({ level }: { level: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [currentAttempt, setCurrentAttempt] = useState<SpeechRecognitionResult | null>(null)
  const [attemptHistory, setAttemptHistory] = useState<Record<string, SpeechRecognitionResult[]>>({})
  const [correctWords, setCorrectWords] = useState<Set<string>>(new Set())
  const [showEncouragement, setShowEncouragement] = useState(false)
  const [inputMode, setInputMode] = useState<'mic' | 'type'>('mic')
  const [typedAnswer, setTypedAnswer] = useState('')

  const pronunciationWords = getPronunciationForLevel(level)
  const currentWord = pronunciationWords[currentIndex]
  const wordAttempts = attemptHistory[currentWord.id] ?? []

  const {
    isRecording,
    isProcessing,
    micLevel,
    recordingSeconds,
    result,
    error: micError,
    isSupported,
    method,
    startRecording,
    stopRecording,
    reset: resetRecording,
  } = useSpeechRecognition({
    targetWord: currentWord.word,
    autoStopMs: 5000,
    similarityThreshold: 70,
    language: 'en-US',
  })

  // Sync hook result to local attempt tracking
  useEffect(() => {
    if (result) {
      setCurrentAttempt(result)
      setAttemptHistory((prev) => ({
        ...prev,
        [currentWord.id]: [...(prev[currentWord.id] ?? []), result],
      }))
      if (result.isCorrect) {
        setCorrectWords((prev) => new Set([...prev, currentWord.id]))
        setShowEncouragement(true)
      }
    }
  }, [result, currentWord.id])

  const handleMicPress = useCallback(async () => {
    if (isRecording || isProcessing) return
    setCurrentAttempt(null)
    resetRecording()
    // Small delay to let reset complete before starting
    setTimeout(() => startRecording(), 50)
  }, [isRecording, isProcessing, resetRecording, startRecording])

  const handleStopRecording = useCallback(() => {
    stopRecording()
  }, [stopRecording])

  const handleRetry = () => {
    setCurrentAttempt(null)
    resetRecording()
    setTypedAnswer('')
  }

  // Handle typed answer submission
  const handleTypedSubmit = useCallback(() => {
    const answer = typedAnswer.trim().toLowerCase()
    const target = currentWord.word.toLowerCase()

    // Calculate similarity
    const maxLen = Math.max(answer.length, target.length)
    let similarity = 0
    if (maxLen > 0) {
      const matrix: number[][] = []
      for (let i = 0; i <= target.length; i++) matrix[i] = [i]
      for (let j = 0; j <= answer.length; j++) matrix[0][j] = j
      for (let i = 1; i <= target.length; i++) {
        for (let j = 1; j <= answer.length; j++) {
          if (target.charAt(i - 1) === answer.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1]
          } else {
            matrix[i][j] = Math.min(
              matrix[i - 1][j - 1] + 1,
              matrix[i][j - 1] + 1,
              matrix[i - 1][j] + 1
            )
          }
        }
      }
      const dist = matrix[target.length][answer.length]
      similarity = Math.round(((maxLen - dist) / maxLen) * 100)
    }

    const isCorrect =
      similarity >= 70 ||
      (answer.length > 0 && (answer.includes(target) || target.includes(answer)))

    const typedResult: SpeechRecognitionResult = {
      transcript: answer,
      confidence: similarity,
      isCorrect,
    }

    setCurrentAttempt(typedResult)
    setAttemptHistory((prev) => ({
      ...prev,
      [currentWord.id]: [...(prev[currentWord.id] ?? []), typedResult],
    }))

    if (isCorrect) {
      setCorrectWords((prev) => new Set([...prev, currentWord.id]))
      setShowEncouragement(true)
    }
  }, [typedAnswer, currentWord])

  // Auto-advance after correct pronunciation
  const handleAdvance = useCallback(() => {
    setCurrentAttempt(null)
    resetRecording()
    setTypedAnswer('')
    if (currentIndex < pronunciationWords.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      setIsCompleted(true)
    }
  }, [currentIndex, resetRecording])

  useEffect(() => {
    if (!showEncouragement) return
    const timer = setTimeout(() => {
      setShowEncouragement(false)
      handleAdvance()
    }, 2000)
    return () => clearTimeout(timer)
  }, [showEncouragement, handleAdvance])

  const handleSkip = () => {
    handleAdvance()
  }

  const handleSpeakWord = () => {
    speakWord(currentWord.word, { rate: 0.8 })
  }

  const handleRestart = () => {
    resetRecording()
    setCurrentIndex(0)
    setCurrentAttempt(null)
    setAttemptHistory({})
    setCorrectWords(new Set())
    setIsCompleted(false)
    setShowEncouragement(false)
    setTypedAnswer('')
    setInputMode('mic')
  }

  const totalAttempts = Object.values(attemptHistory).reduce((acc, attempts) => acc + attempts.length, 0)

  if (isCompleted) {
    return (
      <ResultsSummary
        score={correctWords.size}
        total={pronunciationWords.length}
        xpEarned={correctWords.size * XP_REWARDS.pronunciation}
        type="Prononciation"
        onRestart={handleRestart}
        onBack={handleRestart}
      />
    )
  }

  const difficultyColor = {
    easy: 'bg-yoel-green/10 text-yoel-green border-yoel-green/30',
    medium: 'bg-yoel-gold/10 text-yoel-gold border-yoel-gold/30',
    hard: 'bg-yoel-red/10 text-yoel-red border-yoel-red/30',
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-yoel-green'
    if (confidence >= 50) return 'text-yoel-gold'
    return 'text-yoel-red'
  }

  const getConfidenceBg = (confidence: number) => {
    if (confidence >= 80) return 'bg-yoel-green/10 border-yoel-green/30'
    if (confidence >= 50) return 'bg-yoel-gold/10 border-yoel-gold/30'
    return 'bg-yoel-red/10 border-yoel-red/30'
  }

  const getConfidenceLabel = (confidence: number) => {
    if (confidence >= 80) return 'Excellent !'
    if (confidence >= 50) return 'Presque !'
    return 'Réessayez'
  }

  // Build character-by-character comparison
  const renderCharComparison = (said: string, expected: string) => {
    const saidLower = said.toLowerCase()
    const expectedLower = expected.toLowerCase()
    const maxLen = Math.max(saidLower.length, expectedLower.length)

    return (
      <div className="flex gap-0.5 justify-center flex-wrap">
        {Array.from({ length: maxLen }).map((_, i) => {
          const saidChar = saidLower[i] || ''
          const expectedChar = expectedLower[i] || ''
          const isMatch = saidChar === expectedChar

          return (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <span className={`text-lg font-mono font-bold px-1 rounded ${saidChar ? (isMatch ? 'text-yoel-green bg-yoel-green/10' : 'text-yoel-red bg-yoel-red/10') : 'text-muted-foreground/30'}`}>
                {saidChar || '_'}
              </span>
              <span className={`text-lg font-mono font-bold px-1 rounded ${expectedChar ? (isMatch ? 'text-yoel-green bg-yoel-green/10' : 'text-yoel-blue bg-yoel-blue/10') : 'text-muted-foreground/30'}`}>
                {expectedChar || '_'}
              </span>
            </div>
          )
        })}
      </div>
    )
  }

  const randomEncouragement = ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)]

  const isBusy = isRecording || isProcessing

  return (
    <div className="space-y-4">
      {/* Progress */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground">
          Mot {currentIndex + 1}/{PRONUNCIATION_WORDS.length}
        </span>
        <Progress value={((currentIndex + 1) / PRONUNCIATION_WORDS.length) * 100} className="flex-1 h-2" />
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-sm font-semibold text-yoel-green">
            <CheckCircle2 className="h-4 w-4" />
            {correctWords.size}
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-muted-foreground">
            <Hash className="h-3.5 w-3.5" />
            {totalAttempts}
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentWord.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <Card className="glass overflow-hidden border-0">
            <div className="relative w-full h-[80px] overflow-hidden rounded-t-xl">
              <Image
                src="/images/exercises/pronunciation.png"
                alt="Pronunciation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
            </div>
            <CardContent className="p-4 sm:p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  <Mic className="h-3 w-3 mr-1" />
                  Prononciation
                </Badge>
                <Badge variant="outline" className={`text-xs ${difficultyColor[currentWord.difficulty]}`}>
                  {currentWord.difficulty === 'easy' ? 'Facile' : currentWord.difficulty === 'medium' ? 'Moyen' : 'Difficile'}
                </Badge>
              </div>

              {/* Word image + word display */}
              <div className="flex items-center gap-4 justify-center">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={currentWord.image}
                    alt={currentWord.word}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center space-y-1">
                  <h3 className="text-4xl font-bold gradient-text-blue">
                    {currentWord.word}
                  </h3>
                  <p className="text-lg text-muted-foreground font-mono">
                    {currentWord.phonetic}
                  </p>
                </div>
              </div>

              {/* Step indicator + mode toggle */}
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSpeakWord}
                  className="rounded-full text-yoel-blue hover:text-yoel-blue hover:bg-yoel-blue/5"
                >
                  <Volume2 className="h-4 w-4 mr-1.5" />
                  Écouter
                </Button>
                <div className="text-muted-foreground/40">→</div>
                <div className="flex items-center gap-1 bg-muted/30 rounded-full p-0.5">
                  <button
                    onClick={() => setInputMode('mic')}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      inputMode === 'mic'
                        ? 'bg-yoel-red text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Mic className="h-3.5 w-3.5" />
                    Micro
                  </button>
                  <button
                    onClick={() => setInputMode('type')}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      inputMode === 'type'
                        ? 'bg-yoel-blue text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Keyboard className="h-3.5 w-3.5" />
                    Taper
                  </button>
                </div>
              </div>

              {/* Tip */}
              <div className="rounded-xl bg-yoel-blue/5 border border-yoel-blue/10 p-3">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-yoel-blue">💡 Conseil :</span>{' '}
                  {currentWord.tip}
                </p>
              </div>

              {/* Input section - Microphone or Typing */}
              {inputMode === 'mic' ? (
                <div className="flex flex-col items-center gap-3 py-3">
                  {/* Waveform — real mic level from Web Audio API */}
                  <div className="flex items-center gap-1 h-10">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-1.5 rounded-full ${isRecording ? 'bg-yoel-red' : 'bg-muted-foreground/20'}`}
                        animate={
                          isRecording
                            ? {
                                height: [8, Math.max(8, micLevel * 30 + Math.random() * 8), 8],
                              }
                            : { height: 8 }
                        }
                        transition={
                          isRecording
                            ? { duration: 0.15, repeat: Infinity, repeatType: 'reverse', delay: i * 0.03 }
                            : { duration: 0.3 }
                        }
                      />
                    ))}
                  </div>

                  {/* Recording timer */}
                  {isRecording && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yoel-red opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-yoel-red"></span>
                      </span>
                      <span className="text-sm font-mono font-semibold text-yoel-red tabular-nums">
                        {recordingSeconds}s / 5s
                      </span>
                    </motion.div>
                  )}

                  {/* Mic / Stop / Processing button */}
                  {!isSupported ? (
                    <div className="flex flex-col items-center gap-2 py-2">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted/30 text-muted-foreground">
                        <Mic className="h-6 w-6" />
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Micro non disponible dans ce navigateur
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setInputMode('type')}
                        className="rounded-full text-xs"
                      >
                        <Keyboard className="h-3.5 w-3.5 mr-1" />
                        Passer en mode clavier
                      </Button>
                    </div>
                  ) : !isRecording && !isProcessing ? (
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={handleMicPress}
                      disabled={showEncouragement}
                      className={`relative flex h-16 w-16 items-center justify-center rounded-full transition-all ${
                        showEncouragement
                          ? 'bg-yoel-green/20 text-yoel-green'
                          : 'bg-yoel-red/10 text-yoel-red hover:bg-yoel-red/20'
                      }`}
                    >
                      {showEncouragement ? (
                        <CheckCircle2 className="h-7 w-7" />
                      ) : (
                        <Mic className="h-7 w-7" />
                      )}
                    </motion.button>
                  ) : isRecording ? (
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={handleStopRecording}
                      className="relative flex h-16 w-16 items-center justify-center rounded-full bg-yoel-red text-white shadow-lg shadow-yoel-red/30"
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-yoel-red"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <div className="h-6 w-6 rounded-sm bg-white" />
                    </motion.button>
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yoel-gold/10">
                      <Loader2 className="h-7 w-7 text-yoel-gold animate-spin" />
                    </div>
                  )}

                  <p className="text-sm font-medium text-muted-foreground text-center">
                    {isProcessing
                      ? '🔄 Analyse de votre prononciation...'
                      : isRecording
                      ? '🎤 Parlez maintenant ! Cliquez pour arrêter'
                      : showEncouragement
                      ? '✅ Parfait ! Mot suivant...'
                      : isSupported
                      ? '👆 Appuyez sur le micro pour prononcer le mot'
                      : 'Utilisez le mode clavier pour taper le mot'}
                  </p>
                </div>
              ) : (
                /* Typing mode */
                <div className="flex flex-col items-center gap-3 py-3">
                  <div className="w-full max-w-xs space-y-2">
                    <label className="text-sm font-medium text-muted-foreground text-center block">
                      Tapez le mot en anglais :
                    </label>
                    <div className="flex gap-2">
                      <Input
                        value={typedAnswer}
                        onChange={(e) => setTypedAnswer(e.target.value)}
                        placeholder="Tapez ici..."
                        className="flex-1 rounded-xl text-center text-lg font-semibold"
                        disabled={!!currentAttempt && !showEncouragement}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && typedAnswer.trim() && !currentAttempt) {
                            handleTypedSubmit()
                          }
                        }}
                        autoFocus
                      />
                      <Button
                        onClick={handleTypedSubmit}
                        disabled={!typedAnswer.trim() || (!!currentAttempt && !showEncouragement)}
                        className="bg-yoel-blue hover:bg-yoel-blue/90 text-white rounded-xl px-4"
                      >
                        Vérifier
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Écoutez le mot avec le bouton 🔊 puis tapez ce que vous entendez
                  </p>
                </div>
              )}

              {/* Mic error */}
              {micError && !isBusy && inputMode === 'mic' && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border bg-yoel-red/5 border-yoel-red/20 p-4"
                >
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-yoel-red shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-yoel-red">Microphone non disponible</p>
                      <p className="text-xs text-muted-foreground mt-1">{micError}</p>
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() => setInputMode('type')}
                        className="text-yoel-blue p-0 h-auto mt-1"
                      >
                        Passer en mode clavier →
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Pronunciation result feedback */}
              <AnimatePresence>
                {currentAttempt && !isBusy && !showEncouragement && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    {/* Confidence score */}
                    <div className={`rounded-xl p-4 border ${getConfidenceBg(currentAttempt.confidence)}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm font-semibold ${getConfidenceColor(currentAttempt.confidence)}`}>
                          {currentAttempt.isCorrect ? '✅ ' : ''}{getConfidenceLabel(currentAttempt.confidence)}
                        </span>
                        <span className={`text-2xl font-bold ${getConfidenceColor(currentAttempt.confidence)}`}>
                          {currentAttempt.confidence}%
                        </span>
                      </div>
                      <Progress
                        value={currentAttempt.confidence}
                        className={`h-2 ${currentAttempt.confidence >= 80 ? '[&>div]:bg-yoel-green' : currentAttempt.confidence >= 50 ? '[&>div]:bg-yoel-gold' : '[&>div]:bg-yoel-red'}`}
                      />
                    </div>

                    {/* Visual comparison: said vs expected */}
                    {currentAttempt.transcript && (
                      <div className="rounded-xl border bg-muted/20 p-4 space-y-3">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <div className="flex-1 text-center sm:text-left">
                            <p className="text-xs font-medium text-muted-foreground mb-1">Vous avez dit :</p>
                            <p className="text-lg font-semibold text-yoel-red">{currentAttempt.transcript}</p>
                          </div>
                          <div className="hidden sm:flex items-center">
                            <span className="text-muted-foreground">→</span>
                          </div>
                          <div className="flex-1 text-center sm:text-left">
                            <p className="text-xs font-medium text-muted-foreground mb-1">Mot attendu :</p>
                            <p className="text-lg font-semibold text-yoel-blue">{currentWord.word}</p>
                          </div>
                        </div>

                        {/* Character-by-character comparison */}
                        <div className="pt-2 border-t">
                          <p className="text-xs text-muted-foreground text-center mb-2">Comparaison lettre par lettre :</p>
                          <div className="flex justify-center gap-4 text-xs text-muted-foreground mb-2">
                            <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded-full bg-yoel-red/50" /> Votre voix</span>
                            <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded-full bg-yoel-blue/50" /> Attendu</span>
                          </div>
                          {renderCharComparison(currentAttempt.transcript, currentWord.word)}
                        </div>
                      </div>
                    )}

                    {/* No transcript available (ASR couldn't understand) */}
                    {!currentAttempt.transcript && (
                      <div className="rounded-xl border bg-yoel-gold/5 border-yoel-gold/20 p-4">
                        <p className="text-sm text-muted-foreground text-center">
                          <span className="font-medium text-yoel-gold">⚠️</span> Nous n&apos;avons pas pu comprendre l&apos;audio. Parlez clairement dans le microphone et réessayez.
                        </p>
                      </div>
                    )}

                    {/* Retry button — always shown when incorrect. Skip only after 3+ attempts or if correct */}
                    <div className="flex gap-3">
                      <Button
                        onClick={handleRetry}
                        className="flex-1 bg-yoel-red hover:bg-yoel-red-dark text-white rounded-xl"
                      >
                        <RefreshCw className="h-4 w-4 mr-1.5" />
                        Réessayer
                      </Button>
                      {(currentAttempt.isCorrect || wordAttempts.length >= 3) && (
                        <Button
                          onClick={handleSkip}
                          variant="outline"
                          className="flex-1 rounded-xl"
                        >
                          <SkipForward className="h-4 w-4 mr-1.5" />
                          Passer
                        </Button>
                      )}
                    </div>
                    {/* Encouraging message when stuck */}
                    {!currentAttempt.isCorrect && wordAttempts.length >= 2 && wordAttempts.length < 3 && (
                      <p className="text-xs text-center text-yoel-gold font-medium">
                        Continuez à essayer ! Vous y êtes presque ! 💪
                      </p>
                    )}
                    {!currentAttempt.isCorrect && wordAttempts.length >= 3 && (
                      <p className="text-xs text-center text-muted-foreground">
                        Vous pouvez passer ce mot et revenir plus tard.
                      </p>
                    )}

                    {/* Attempt count */}
                    {wordAttempts.length > 0 && (
                      <p className="text-xs text-muted-foreground text-center">
                        {wordAttempts.length} essai{wordAttempts.length > 1 ? 's' : ''} pour ce mot
                        {wordAttempts.some((a) => a.isCorrect) && (
                          <span className="text-yoel-green ml-1">• Réussi !</span>
                        )}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Encouragement overlay for correct answer */}
              <AnimatePresence>
                {showEncouragement && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="rounded-xl bg-yoel-green/10 border border-yoel-green/20 p-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    >
                      <CheckCircle2 className="h-12 w-12 text-yoel-green mx-auto mb-2" />
                    </motion.div>
                    <p className="text-lg font-bold text-yoel-green">{randomEncouragement}</p>
                    <p className="text-sm text-muted-foreground mt-1">Passage au mot suivant...</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Skip button when no attempt yet */}
              {!currentAttempt && !isBusy && !showEncouragement && !micError && (
                <div className="flex justify-center">
                  <Button
                    onClick={handleSkip}
                    variant="outline"
                    className="rounded-xl"
                  >
                    <SkipForward className="h-4 w-4 mr-1.5" />
                    Passer
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function ExercisesPage() {
  const { goBack, navigate, currentLevel, user } = useAppStore()
  const [activeTab, setActiveTab] = useState('quiz')

  const level = user?.level ?? currentLevel

  const tabConfig = [
    { id: 'quiz', label: 'Quiz', icon: Brain, color: 'text-yoel-red' },
    { id: 'grammar', label: 'Grammaire', icon: BookOpen, color: 'text-yoel-blue' },
    { id: 'vocabulary', label: 'Vocabulaire', icon: MessageSquareText, color: 'text-yoel-green' },
    { id: 'pronunciation', label: 'Prononciation', icon: Mic, color: 'text-yoel-gold' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        className="mx-auto max-w-2xl space-y-4 p-4 lg:p-6"
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
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('dashboard')}
              className="h-9 w-9 rounded-full text-muted-foreground hover:text-yoel-red"
            >
              <Home className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-lg font-bold">Exercices</h1>
              <p className="text-xs text-muted-foreground">Pratiquez votre anglais</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs font-semibold">
              {level}
            </Badge>
            <div className="flex items-center gap-1 rounded-full bg-yoel-gold/10 px-2.5 py-1.5">
              <Zap className="h-4 w-4 text-yoel-gold" />
              <span className="text-sm font-semibold text-yoel-gold">
                {user?.xp ?? 0}
              </span>
            </div>
          </div>
        </motion.div>

        {/* ─── Tab Navigation ───────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="w-full grid grid-cols-4 h-auto p-1 rounded-xl">
              {tabConfig.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex items-center gap-1.5 py-2.5 text-xs sm:text-sm rounded-lg data-[state=active]:shadow-sm"
                >
                  <tab.icon className={`h-4 w-4 ${activeTab === tab.id ? tab.color : ''}`} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="quiz" className="mt-0">
              <QuizTab level={level} />
            </TabsContent>
            <TabsContent value="grammar" className="mt-0">
              <GrammarTab level={level} />
            </TabsContent>
            <TabsContent value="vocabulary" className="mt-0">
              <VocabularyTab level={level} />
            </TabsContent>
            <TabsContent value="pronunciation" className="mt-0">
              <PronunciationTab level={level} />
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  )
}
