'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Home, CheckCircle2, XCircle, Star, Zap, Clock,
  Brain, BookOpen, MessageSquareText, Mic, RotateCcw,
  ChevronRight, Trophy, Sparkles, Volume2, Eye, EyeOff,
  Hash, SkipForward, RefreshCw, AlertCircle, Loader2
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
  level?: string
  image?: string
}

const VOCAB_CARDS_A1: VocabCard[] = [
  { id: 'v1', english: 'Hello', french: 'Bonjour', example: 'Hello, how are you?', phonetic: '/həˈloʊ/', level: 'A1', image: '/images/exercises/hello.png' },
  { id: 'v2', english: 'Goodbye', french: 'Au revoir', example: 'Goodbye, see you tomorrow!', phonetic: '/ɡʊdˈbaɪ/', level: 'A1', image: '/images/exercises/hello.png' },
  { id: 'v3', english: 'Thank you', french: 'Merci', example: 'Thank you very much!', phonetic: '/θæŋk juː/', level: 'A1', image: '/images/exercises/hello.png' },
  { id: 'v4', english: 'Please', french: "S'il vous plaît", example: 'Can I have some water, please?', phonetic: '/pliːz/', level: 'A1', image: '/images/exercises/hello.png' },
  { id: 'v5', english: 'Water', french: 'Eau', example: 'I would like a glass of water.', phonetic: '/ˈwɔːtər/', level: 'A1', image: '/images/exercises/water.png' },
  { id: 'v6', english: 'House', french: 'Maison', example: 'My house is big.', phonetic: '/haʊs/', level: 'A1', image: '/images/exercises/house.png' },
  { id: 'v7', english: 'Family', french: 'Famille', example: 'I love my family.', phonetic: '/ˈfæməli/', level: 'A1', image: '/images/exercises/family.png' },
  { id: 'v8', english: 'Friend', french: 'Ami(e)', example: 'She is my best friend.', phonetic: '/frend/', level: 'A1', image: '/images/exercises/family.png' },
  { id: 'v9', english: 'Book', french: 'Livre', example: 'I am reading a book.', phonetic: '/bʊk/', level: 'A1', image: '/images/exercises/book.png' },
  { id: 'v10', english: 'School', french: 'École', example: 'I go to school every day.', phonetic: '/skuːl/', level: 'A1', image: '/images/exercises/school.png' },
]

const VOCAB_CARDS_A2: VocabCard[] = [
  { id: 'v1', english: 'Weather', french: 'Météo', example: 'The weather is nice today.', phonetic: '/ˈwɛðər/', level: 'A2' },
  { id: 'v2', english: 'Journey', french: 'Voyage', example: 'It was a long journey.', phonetic: '/ˈdʒɜːrni/', level: 'A2' },
  { id: 'v3', english: 'Neighbor', french: 'Voisin(e)', example: 'My neighbor is very friendly.', phonetic: '/ˈneɪbər/', level: 'A2' },
  { id: 'v4', english: 'Grocery', french: 'Épicerie', example: 'I need to buy groceries.', phonetic: '/ˈɡroʊsəri/', level: 'A2' },
  { id: 'v5', english: 'Appointment', french: 'Rendez-vous', example: 'I have a doctor appointment.', phonetic: '/əˈpɔɪntmənt/', level: 'A2' },
]

const VOCAB_CARDS_B1: VocabCard[] = [
  { id: 'v1', english: 'Achievement', french: 'Accomplissement', example: 'Winning the prize was a great achievement.', phonetic: '/əˈtʃiːvmənt/', level: 'B1' },
  { id: 'v2', english: 'Knowledge', french: 'Connaissance', example: 'Knowledge is power.', phonetic: '/ˈnɒlɪdʒ/', level: 'B1' },
  { id: 'v3', english: 'Environment', french: 'Environnement', example: 'We must protect the environment.', phonetic: '/ɪnˈvaɪrənmənt/', level: 'B1' },
  { id: 'v4', english: 'Opportunity', french: 'Opportunité', example: 'This job is a great opportunity.', phonetic: '/ˌɒpəˈtjuːnəti/', level: 'B1' },
  { id: 'v5', english: 'Determination', french: 'Détermination', example: 'Her determination led to success.', phonetic: '/dɪˌtɜːmɪˈneɪʃən/', level: 'B1' },
]

const VOCAB_BY_LEVEL: Record<string, VocabCard[]> = {
  A1: VOCAB_CARDS_A1,
  A2: VOCAB_CARDS_A2,
  B1: VOCAB_CARDS_B1,
  B2: VOCAB_CARDS_B1,
  C1: VOCAB_CARDS_B1,
  C2: VOCAB_CARDS_B1,
}

function getVocabCards(level: string): VocabCard[] {
  return VOCAB_BY_LEVEL[level] || VOCAB_CARDS_A1
}

interface PronunciationWord {
  id: string
  word: string
  phonetic: string
  tip: string
  difficulty: 'easy' | 'medium' | 'hard'
  image: string
}

const PRONUNCIATION_WORDS: PronunciationWord[] = [
  { id: 'p1', word: 'Hello', phonetic: '/həˈloʊ/', tip: 'Commencez par un "h" doux (expiré), puis "lo" comme dans "lôt".', difficulty: 'easy', image: '/images/exercises/hello.png' },
  { id: 'p2', word: 'Goodbye', phonetic: '/ɡʊdˈbaɪ/', tip: 'Dites "goud" puis "baï". Le "g" est dur comme dans "gâteau".', difficulty: 'easy', image: '/images/exercises/hello.png' },
  { id: 'p3', word: 'Thank you', phonetic: '/θæŋk juː/', tip: 'Le "th" se prononce en plaçant la langue entre les dents et en soufflant de l\'air.', difficulty: 'medium', image: '/images/exercises/hello.png' },
  { id: 'p4', word: 'Please', phonetic: '/pliːz/', tip: 'Prolongez le "ee" comme dans "lit". Le "z" final est doux.', difficulty: 'medium', image: '/images/exercises/hello.png' },
  { id: 'p5', word: 'Sorry', phonetic: '/ˈsɒri/', tip: 'Le "r" anglais est différent du français. Ne roulez pas le "r".', difficulty: 'medium', image: '/images/exercises/hello.png' },
  { id: 'p6', word: 'Water', phonetic: '/ˈwɔːtər/', tip: 'Le "w" se forme en arrondissant les lèvres. Le "t" américain est souvent adouci.', difficulty: 'easy', image: '/images/exercises/water.png' },
  { id: 'p7', word: 'Beautiful', phonetic: '/ˈbjuːtɪfəl/', tip: 'Commencez par "biou", puis "ti" et "foul". Le "eau" anglais se dit "iou".', difficulty: 'hard', image: '/images/exercises/beautiful.png' },
  { id: 'p8', word: 'Three', phonetic: '/θriː/', tip: 'Le "th" est crucial : langue entre les dents, soufflez. Puis "ri" prolongé.', difficulty: 'medium', image: '/images/exercises/book.png' },
  { id: 'p9', word: 'Woman', phonetic: '/ˈwʊmən/', tip: 'Le "w" initial nécessite des lèvres arrondies. "Ouman" avec un "ou" court.', difficulty: 'medium', image: '/images/exercises/family.png' },
  { id: 'p10', word: 'World', phonetic: '/wɜːrld/', tip: 'Le "rld" final est difficile. Dites "weur-ld" en reliant le "r" au "l".', difficulty: 'hard', image: '/images/exercises/world.png' },
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

function calculateSimilarity(a: string, b: string): number {
  const maxLen = Math.max(a.length, b.length)
  if (maxLen === 0) return 100
  const dist = levenshteinDistance(a, b)
  return Math.round(((maxLen - dist) / maxLen) * 100)
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

  const { currentLevel, user } = useAppStore()
  const level = user?.level ?? currentLevel
  const vocabCards = getVocabCards(level)

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

// ─── Supported MIME Type for MediaRecorder ──────────────────────────────────

function getSupportedMimeType(): string {
  const types = [
    'audio/webm;codecs=opus',
    'audio/webm',
    'audio/ogg;codecs=opus',
    'audio/mp4',
  ]
  for (const type of types) {
    if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(type)) {
      return type
    }
  }
  return ''
}

// ─── Pronunciation Tab ──────────────────────────────────────────────────────

interface PronunciationAttempt {
  transcript: string
  confidence: number
  isCorrect: boolean
}

function PronunciationTab() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [micLevel, setMicLevel] = useState(0)
  const [currentAttempt, setCurrentAttempt] = useState<PronunciationAttempt | null>(null)
  const [attemptHistory, setAttemptHistory] = useState<Record<string, PronunciationAttempt[]>>({})
  const [correctWords, setCorrectWords] = useState<Set<string>>(new Set())
  const [showEncouragement, setShowEncouragement] = useState(false)
  const [micError, setMicError] = useState<string | null>(null)
  const [recordingSeconds, setRecordingSeconds] = useState(0)

  // Refs for audio recording
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const streamRef = useRef<MediaStream | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const animFrameRef = useRef<number | null>(null)
  const recordingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const autoStopTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hasResultRef = useRef(false)

  const currentWord = PRONUNCIATION_WORDS[currentIndex]
  const wordAttempts = attemptHistory[currentWord.id] ?? []

  // Current word ref for use in callbacks without stale closures
  const currentWordRef = useRef(currentWord)
  currentWordRef.current = currentWord

  // Real microphone level via Web Audio API analyser
  const updateMicLevel = useCallback(() => {
    if (!analyserRef.current) return
    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount)
    analyserRef.current.getByteFrequencyData(dataArray)
    let sum = 0
    for (let i = 0; i < dataArray.length; i++) sum += dataArray[i]
    const avg = sum / dataArray.length
    setMicLevel(avg)
    animFrameRef.current = requestAnimationFrame(updateMicLevel)
  }, [])

  // Clean up all recording resources (does NOT handle audio processing)
  const cleanupRecording = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      try { audioContextRef.current.close() } catch { /* ignore */ }
      audioContextRef.current = null
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current)
      animFrameRef.current = null
    }
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current)
      recordingTimerRef.current = null
    }
    if (autoStopTimerRef.current) {
      clearTimeout(autoStopTimerRef.current)
      autoStopTimerRef.current = null
    }
    analyserRef.current = null
    mediaRecorderRef.current = null
    setIsRecording(false)
    setMicLevel(0)
    setRecordingSeconds(0)
  }, [])

  // Process transcript from backend ASR
  const processTranscript = useCallback((transcript: string, targetWord: string) => {
    if (hasResultRef.current) return
    hasResultRef.current = true

    const normalizedTranscript = transcript.toLowerCase().trim()
    const target = targetWord.toLowerCase()
    const confidence = calculateSimilarity(normalizedTranscript, target)
    const isMatch = confidence >= 70 || normalizedTranscript.includes(target) || target.includes(normalizedTranscript)

    const attempt: PronunciationAttempt = {
      transcript,
      confidence,
      isCorrect: isMatch,
    }

    setCurrentAttempt(attempt)
    setAttemptHistory((prev) => ({
      ...prev,
      [currentWordRef.current.id]: [...(prev[currentWordRef.current.id] ?? []), attempt],
    }))

    if (isMatch) {
      setCorrectWords((prev) => new Set([...prev, currentWordRef.current.id]))
      setShowEncouragement(true)
    }
  }, [])

  // Send recorded audio to backend ASR
  const sendAudioToBackend = useCallback(async (audioBlob: Blob) => {
    setIsProcessing(true)
    const targetWord = currentWordRef.current.word

    try {
      const reader = new FileReader()
      const base64Promise = new Promise<string>((resolve, reject) => {
        reader.onloadend = () => {
          const base64 = (reader.result as string).split(',')[1]
          resolve(base64)
        }
        reader.onerror = reject
      })
      reader.readAsDataURL(audioBlob)
      const audioBase64 = await base64Promise

      console.log('[Pronunciation] Sending audio to backend, target:', targetWord, 'audio size:', audioBase64.length)

      const response = await fetch('/api/pronunciation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          audio_base64: audioBase64,
          target_word: targetWord,
        }),
      })

      if (!response.ok) {
        throw new Error(`ASR request failed: ${response.status}`)
      }

      const data = await response.json()
      console.log('[Pronunciation] Backend response:', data)

      if (data.transcript && data.transcript.trim().length > 0) {
        processTranscript(data.transcript, targetWord)
      } else {
        const attempt: PronunciationAttempt = {
          transcript: data.transcript || '',
          confidence: 0,
          isCorrect: false,
        }
        setCurrentAttempt(attempt)
        setAttemptHistory((prev) => ({
          ...prev,
          [currentWordRef.current.id]: [...(prev[currentWordRef.current.id] ?? []), attempt],
        }))
      }
    } catch (error) {
      console.error('[Pronunciation] Backend ASR error:', error)
      const attempt: PronunciationAttempt = {
        transcript: '',
        confidence: 0,
        isCorrect: false,
      }
      setCurrentAttempt(attempt)
      setAttemptHistory((prev) => ({
        ...prev,
        [currentWordRef.current.id]: [...(prev[currentWordRef.current.id] ?? []), attempt],
      }))
    } finally {
      setIsProcessing(false)
    }
  }, [processTranscript])

  // Start recording — simple MediaRecorder + backend ASR approach
  const handleMicPress = useCallback(async () => {
    if (isRecording || isProcessing) return
    setMicError(null)
    setCurrentAttempt(null)
    hasResultRef.current = false

    try {
      // Request microphone access with noise suppression for better ASR
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      })
      streamRef.current = stream

      // Set up audio analyser for mic level visualization
      const audioContext = new AudioContext()
      audioContextRef.current = audioContext
      const source = audioContext.createMediaStreamSource(stream)
      const analyser = audioContext.createAnalyser()
      analyser.fftSize = 256
      source.connect(analyser)
      analyserRef.current = analyser

      setIsRecording(true)
      setRecordingSeconds(0)

      // Start mic level animation
      animFrameRef.current = requestAnimationFrame(updateMicLevel)

      // Start recording timer
      recordingTimerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1)
      }, 1000)

      // Set up MediaRecorder — use timeslice for incremental data collection
      const mimeType = getSupportedMimeType()
      const mediaRecorderOptions: MediaRecorderOptions = {}
      if (mimeType) {
        mediaRecorderOptions.mimeType = mimeType
      }
      const mediaRecorder = new MediaRecorder(stream, mediaRecorderOptions)
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        // Collect all recorded audio and send to backend
        if (audioChunksRef.current.length > 0 && !hasResultRef.current) {
          const blobType = mimeType || 'audio/webm'
          const audioBlob = new Blob(audioChunksRef.current, { type: blobType })
          console.log('[Pronunciation] Recording stopped, audio size:', audioBlob.size, 'type:', blobType)
          cleanupRecording()
          sendAudioToBackend(audioBlob)
        } else {
          cleanupRecording()
        }
      }

      mediaRecorderRef.current = mediaRecorder
      // Use timeslice of 500ms for incremental data collection
      mediaRecorder.start(500)

      // Auto-stop after 5 seconds
      autoStopTimerRef.current = setTimeout(() => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
          console.log('[Pronunciation] Auto-stop after 5s')
          mediaRecorderRef.current.stop()
        }
      }, 5000)
    } catch (error) {
      console.error('[Pronunciation] Microphone access error:', error)
      cleanupRecording()
      setMicError('Impossible d\'accéder au microphone. Vérifiez les permissions de votre navigateur.')
    }
  }, [isRecording, isProcessing, cleanupRecording, updateMicLevel, sendAudioToBackend])

  // Stop recording manually
  const handleStopRecording = useCallback(() => {
    if (!isRecording) return
    // Stop the media recorder — its onstop handler will send audio to backend
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      console.log('[Pronunciation] Manual stop')
      mediaRecorderRef.current.stop()
    }
  }, [isRecording])

  // Auto-advance after correct pronunciation
  useEffect(() => {
    if (!showEncouragement) return
    const timer = setTimeout(() => {
      setShowEncouragement(false)
      handleAdvance()
    }, 2000)
    return () => clearTimeout(timer)
  }, [showEncouragement])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanupRecording()
    }
  }, [cleanupRecording])

  const handleRetry = () => {
    setCurrentAttempt(null)
    setMicError(null)
    hasResultRef.current = false
  }

  const handleAdvance = () => {
    setCurrentAttempt(null)
    setMicError(null)
    hasResultRef.current = false
    if (currentIndex < PRONUNCIATION_WORDS.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const handleSkip = () => {
    handleAdvance()
  }

  const handleSpeakWord = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(currentWord.word)
      utterance.lang = 'en-US'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  const handleRestart = () => {
    cleanupRecording()
    setCurrentIndex(0)
    setIsRecording(false)
    setIsProcessing(false)
    setCurrentAttempt(null)
    setAttemptHistory({})
    setCorrectWords(new Set())
    setIsCompleted(false)
    setShowEncouragement(false)
    setMicError(null)
    hasResultRef.current = false
  }

  const totalAttempts = Object.values(attemptHistory).reduce((acc, attempts) => acc + attempts.length, 0)

  if (isCompleted) {
    return (
      <ResultsSummary
        score={correctWords.size}
        total={PRONUNCIATION_WORDS.length}
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

              {/* Step indicator */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSpeakWord}
                  className="rounded-full text-yoel-blue hover:text-yoel-blue hover:bg-yoel-blue/5"
                >
                  <Volume2 className="h-4 w-4 mr-1.5" />
                  1. Écouter
                </Button>
                <div className="text-muted-foreground/40">→</div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleMicPress}
                  disabled={isRecording || isProcessing || showEncouragement}
                  className="rounded-full text-yoel-red hover:text-yoel-red hover:bg-yoel-red/5 disabled:opacity-50"
                >
                  <Mic className="h-4 w-4 mr-1.5" />
                  2. Prononcer
                </Button>
              </div>

              {/* Tip */}
              <div className="rounded-xl bg-yoel-blue/5 border border-yoel-blue/10 p-3">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-yoel-blue">💡 Conseil :</span>{' '}
                  {currentWord.tip}
                </p>
              </div>

              {/* Microphone section */}
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
                              height: [8, Math.max(8, micLevel * 0.6 + Math.random() * 8), 8],
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
                {!isRecording && !isProcessing ? (
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
                    : '👆 Appuyez sur le micro pour prononcer le mot'}
                </p>
              </div>

              {/* Mic permission error */}
              {micError && !isBusy && (
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
