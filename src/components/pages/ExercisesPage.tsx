'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Home, CheckCircle2, XCircle, Star, Zap, Clock,
  Brain, BookOpen, MessageSquareText, Mic, RotateCcw,
  ChevronRight, Trophy, Sparkles, Volume2, Eye, EyeOff,
  Hash
} from 'lucide-react'
import { useAppStore } from '@/lib/store'
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

interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Which sentence is correct?',
    options: ['She don\'t like coffee', 'She doesn\'t likes coffee', 'She doesn\'t like coffee', 'She not like coffee'],
    correctIndex: 2,
    explanation: '"Doesn\'t" is the negative form for third person singular, followed by the base form of the verb.',
  },
  {
    id: 'q2',
    question: 'What is the past tense of "go"?',
    options: ['Goed', 'Went', 'Gone', 'Going'],
    correctIndex: 1,
    explanation: '"Go" is an irregular verb. Its past tense is "went".',
  },
  {
    id: 'q3',
    question: 'Choose the correct article: "___ apple a day keeps the doctor away."',
    options: ['A', 'An', 'The', 'No article'],
    correctIndex: 1,
    explanation: 'We use "an" before words that begin with a vowel sound. "Apple" starts with a vowel sound.',
  },
  {
    id: 'q4',
    question: 'Which word means "a person who teaches"?',
    options: ['Teacher', 'Teaching', 'Teached', 'Teachness'],
    correctIndex: 0,
    explanation: '"Teacher" is the noun form — a person who teaches. The suffix "-er" denotes a person who does the action.',
  },
  {
    id: 'q5',
    question: 'Complete: "If it ___ tomorrow, we will stay home."',
    options: ['rains', 'rain', 'rained', 'raining'],
    correctIndex: 0,
    explanation: 'In first conditional sentences, the "if" clause uses present simple: "if it rains".',
  },
]

interface GrammarExercise {
  id: string
  sentence: string
  answer: string
  hint: string
}

const GRAMMAR_EXERCISES: GrammarExercise[] = [
  {
    id: 'g1',
    sentence: 'She ___ (to be) a doctor.',
    answer: 'is',
    hint: 'Third person singular of "to be"',
  },
  {
    id: 'g2',
    sentence: 'They ___ (to go) to school every day.',
    answer: 'go',
    hint: 'Plural subject, present simple',
  },
  {
    id: 'g3',
    sentence: 'I ___ (to eat) dinner when you called.',
    answer: 'was eating',
    hint: 'Past continuous: was/were + verb-ing',
  },
  {
    id: 'g4',
    sentence: 'The book ___ (to write) by a famous author.',
    answer: 'was written',
    hint: 'Passive voice in past tense',
  },
  {
    id: 'g5',
    sentence: 'If I ___ (to have) more time, I would travel.',
    answer: 'had',
    hint: 'Second conditional uses past simple',
  },
]

interface VocabCard {
  id: string
  english: string
  french: string
  example: string
  phonetic: string
}

const VOCAB_CARDS: VocabCard[] = [
  { id: 'v1', english: 'Achievement', french: 'Accomplissement', example: 'Winning the prize was a great achievement.', phonetic: '/əˈtʃiːvmənt/' },
  { id: 'v2', english: 'Knowledge', french: 'Connaissance', example: 'Knowledge is power.', phonetic: '/ˈnɒlɪdʒ/' },
  { id: 'v3', english: 'Environment', french: 'Environnement', example: 'We must protect the environment.', phonetic: '/ɪnˈvaɪrənmənt/' },
  { id: 'v4', english: 'Opportunity', french: 'Opportunité', example: 'This job is a great opportunity.', phonetic: '/ˌɒpəˈtjuːnəti/' },
  { id: 'v5', english: 'Determination', french: 'Détermination', example: 'Her determination led to success.', phonetic: '/dɪˌtɜːmɪˈneɪʃən/' },
]

interface PronunciationWord {
  id: string
  word: string
  phonetic: string
  tip: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const PRONUNCIATION_WORDS: PronunciationWord[] = [
  { id: 'p1', word: 'Thought', phonetic: '/θɔːt/', tip: 'The "th" sound is made by placing your tongue between your teeth and blowing air.', difficulty: 'medium' },
  { id: 'p2', word: 'Comfortable', phonetic: '/ˈkʌmftəbl/', tip: 'In natural speech, this is often pronounced as 4 syllables: "KUMF-tuh-bl"', difficulty: 'hard' },
  { id: 'p3', word: 'Island', phonetic: '/ˈaɪlənd/', tip: 'The "s" is silent! Pronounced "EYE-luhnd"', difficulty: 'easy' },
  { id: 'p4', word: 'Schedule', phonetic: '/ˈʃedjuːl/', tip: 'British: "SHED-yool" — American: "SKED-yool"', difficulty: 'medium' },
  { id: 'p5', word: 'Recipe', phonetic: '/ˈresəpi/', tip: 'Three syllables: "RES-uh-pee". The "i" before "p" is short.', difficulty: 'medium' },
]

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

// ─── Levenshtein Distance ────────────────────────────────────────────────────

function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = []
  for (let i = 0; i <= b.length; i++) matrix[i] = [i]
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
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
  return matrix[b.length][a.length]
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

function QuizTab() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const currentQuestion = QUIZ_QUESTIONS[currentIndex]

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
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
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
        total={QUIZ_QUESTIONS.length}
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
          Question {currentIndex + 1}/{QUIZ_QUESTIONS.length}
        </span>
        <Progress value={((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100} className="flex-1 h-2" />
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
                    {currentIndex < QUIZ_QUESTIONS.length - 1 ? (
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

function GrammarTab() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState<Record<string, boolean | null>>({})
  const [isCompleted, setIsCompleted] = useState(false)

  const currentExercise = GRAMMAR_EXERCISES[currentIndex]
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
    if (currentIndex < GRAMMAR_EXERCISES.length - 1) {
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
        total={GRAMMAR_EXERCISES.length}
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
          Exercice {currentIndex + 1}/{GRAMMAR_EXERCISES.length}
        </span>
        <Progress value={((currentIndex + 1) / GRAMMAR_EXERCISES.length) * 100} className="flex-1 h-2" />
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
                    {currentIndex < GRAMMAR_EXERCISES.length - 1 ? (
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

function VocabularyTab() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [results, setResults] = useState<Record<string, boolean>>({})
  const [isCompleted, setIsCompleted] = useState(false)

  const currentCard = VOCAB_CARDS[currentIndex]

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
    if (currentIndex < VOCAB_CARDS.length - 1) {
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
        total={VOCAB_CARDS.length}
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
          Carte {currentIndex + 1}/{VOCAB_CARDS.length}
        </span>
        <Progress value={((currentIndex + 1) / VOCAB_CARDS.length) * 100} className="flex-1 h-2" />
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
          <Card className="glass overflow-hidden border-0 min-h-[280px]">
            <CardContent className="flex flex-col items-center justify-center p-6 min-h-[280px]">
              <AnimatePresence mode="wait">
                {!isFlipped ? (
                  <motion.div
                    key="front"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="flex flex-col items-center text-center space-y-4"
                  >
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
                      🇬🇧 Que signifie ce mot en français ?
                    </p>
                    <button
                      className="flex items-center gap-1.5 text-xs text-yoel-blue hover:text-yoel-blue-dark transition-colors mt-1"
                      onClick={(e) => {
                        e.stopPropagation()
                        if ('speechSynthesis' in window) {
                          const utterance = new SpeechSynthesisUtterance(currentCard.english)
                          utterance.lang = 'en-US'
                          utterance.rate = 0.85
                          window.speechSynthesis.speak(utterance)
                        }
                      }}
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                      Écouter la prononciation
                    </button>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2">
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

function PronunciationTab() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [attempts, setAttempts] = useState<Record<string, number>>({})
  const [isCompleted, setIsCompleted] = useState(false)
  const [micLevel, setMicLevel] = useState(0)
  const [pronunciationResult, setPronunciationResult] = useState<Record<string, 'correct' | 'incorrect' | 'attempted'>>({})

  const currentWord = PRONUNCIATION_WORDS[currentIndex]

  // Simulate microphone visual feedback when recording
  useEffect(() => {
    if (!isRecording) {
      setMicLevel(0)
      return
    }
    const interval = setInterval(() => {
      setMicLevel(Math.random() * 100)
    }, 100)
    return () => clearInterval(interval)
  }, [isRecording])

  const handleMicPress = () => {
    if (isRecording) return

    const SpeechRecognition = (window as unknown as { SpeechRecognition?: typeof window.SpeechRecognition; webkitSpeechRecognition?: typeof window.SpeechRecognition }).SpeechRecognition || (window as unknown as { webkitSpeechRecognition?: typeof window.SpeechRecognition }).webkitSpeechRecognition

    if (!SpeechRecognition) {
      // Fallback: just mark as attempted
      setIsRecording(true)
      setAttempts((prev) => ({ ...prev, [currentWord.id]: (prev[currentWord.id] ?? 0) + 1 }))
      setPronunciationResult((prev) => ({ ...prev, [currentWord.id]: 'attempted' }))
      setTimeout(() => setIsRecording(false), 2000)
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1
    recognition.continuous = false

    recognition.onstart = () => {
      setIsRecording(true)
      setAttempts((prev) => ({ ...prev, [currentWord.id]: (prev[currentWord.id] ?? 0) + 1 }))
    }

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript.toLowerCase()
      const target = currentWord.word.toLowerCase()
      // Check if user said the word correctly (fuzzy match)
      const isMatch = transcript.includes(target) || target.includes(transcript) || levenshteinDistance(transcript, target) <= 2
      setPronunciationResult((prev) => ({ ...prev, [currentWord.id]: isMatch ? 'correct' : 'incorrect' }))
      setIsRecording(false)
    }

    recognition.onerror = () => {
      setIsRecording(false)
      setPronunciationResult((prev) => ({ ...prev, [currentWord.id]: 'attempted' }))
    }

    recognition.onend = () => {
      setIsRecording(false)
    }

    recognition.start()
  }

  const handleSpeakWord = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(currentWord.word)
      utterance.lang = 'en-US'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  const handleNext = () => {
    if (currentIndex < PRONUNCIATION_WORDS.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setIsRecording(false)
    setAttempts({})
    setIsCompleted(false)
  }

  const totalAttempts = Object.values(attempts).reduce((a, b) => a + b, 0)

  if (isCompleted) {
    return (
      <ResultsSummary
        score={PRONUNCIATION_WORDS.length}
        total={PRONUNCIATION_WORDS.length}
        xpEarned={PRONUNCIATION_WORDS.length * XP_REWARDS.pronunciation}
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

  return (
    <div className="space-y-4">
      {/* Progress */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground">
          Mot {currentIndex + 1}/{PRONUNCIATION_WORDS.length}
        </span>
        <Progress value={((currentIndex + 1) / PRONUNCIATION_WORDS.length) * 100} className="flex-1 h-2" />
        <div className="flex items-center gap-1 text-sm font-semibold text-muted-foreground">
          <Hash className="h-4 w-4" />
          {totalAttempts} essais
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
            <CardContent className="p-6 space-y-5">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  <Mic className="h-3 w-3 mr-1" />
                  Prononciation
                </Badge>
                <Badge variant="outline" className={`text-xs ${difficultyColor[currentWord.difficulty]}`}>
                  {currentWord.difficulty === 'easy' ? 'Facile' : currentWord.difficulty === 'medium' ? 'Moyen' : 'Difficile'}
                </Badge>
              </div>

              {/* Word display */}
              <div className="text-center space-y-2 py-4">
                <h3 className="text-4xl font-bold gradient-text-blue">
                  {currentWord.word}
                </h3>
                <p className="text-lg text-muted-foreground font-mono">
                  {currentWord.phonetic}
                </p>
              </div>

              {/* Tip */}
              <div className="rounded-xl bg-yoel-blue/5 border border-yoel-blue/10 p-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-yoel-blue">💡 Conseil :</span>{' '}
                  {currentWord.tip}
                </p>
              </div>

              {/* Microphone visual feedback */}
              <div className="flex flex-col items-center gap-4 py-4">
                {/* Simulated waveform */}
                <div className="flex items-center gap-1 h-12">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 rounded-full bg-yoel-red"
                      animate={
                        isRecording
                          ? {
                              height: [8, Math.max(8, micLevel * 0.4 + Math.random() * 20), 8],
                            }
                          : { height: 8 }
                      }
                      transition={
                        isRecording
                          ? { duration: 0.15, repeat: Infinity, repeatType: 'reverse' }
                          : { duration: 0.3 }
                      }
                    />
                  ))}
                </div>

                {/* Mic button */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={handleMicPress}
                  disabled={isRecording}
                  className={`relative flex h-16 w-16 items-center justify-center rounded-full transition-all ${
                    isRecording
                      ? 'bg-yoel-red text-white shadow-lg shadow-yoel-red/30'
                      : 'bg-yoel-red/10 text-yoel-red hover:bg-yoel-red/20'
                  }`}
                >
                  {isRecording && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-yoel-red"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                  <Mic className="h-7 w-7" />
                </motion.button>

                <p className="text-sm text-muted-foreground">
                  {isRecording ? 'Écoute en cours...' : 'Appuyez pour prononcer'}
                </p>

                {/* Pronunciation result feedback */}
                {pronunciationResult[currentWord.id] && !isRecording && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-1.5 text-sm font-medium ${
                      pronunciationResult[currentWord.id] === 'correct'
                        ? 'text-yoel-green'
                        : pronunciationResult[currentWord.id] === 'incorrect'
                        ? 'text-yoel-red'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {pronunciationResult[currentWord.id] === 'correct' && (
                      <>
                        <CheckCircle2 className="h-4 w-4" />
                        Bonne prononciation !
                      </>
                    )}
                    {pronunciationResult[currentWord.id] === 'incorrect' && (
                      <>
                        <XCircle className="h-4 w-4" />
                        Réessayez, presque !
                      </>
                    )}
                    {pronunciationResult[currentWord.id] === 'attempted' && (
                      <>
                        <Mic className="h-4 w-4" />
                        Essai enregistré
                      </>
                    )}
                  </motion.div>
                )}

                {attempts[currentWord.id] && (
                  <p className="text-xs text-muted-foreground">
                    {attempts[currentWord.id]} essai{attempts[currentWord.id] > 1 ? 's' : ''}
                  </p>
                )}
              </div>

              {/* Listen button + Next */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={handleSpeakWord}
                  className="flex-1 rounded-xl"
                >
                  <Volume2 className="h-4 w-4 mr-1.5" />
                  Écouter
                </Button>
                <Button
                  onClick={handleNext}
                  className="flex-1 bg-yoel-red hover:bg-yoel-red-dark text-white rounded-xl"
                >
                  {currentIndex < PRONUNCIATION_WORDS.length - 1 ? (
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
              </div>
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
              <QuizTab />
            </TabsContent>
            <TabsContent value="grammar" className="mt-0">
              <GrammarTab />
            </TabsContent>
            <TabsContent value="vocabulary" className="mt-0">
              <VocabularyTab />
            </TabsContent>
            <TabsContent value="pronunciation" className="mt-0">
              <PronunciationTab />
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  )
}
