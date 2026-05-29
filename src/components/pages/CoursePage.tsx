'use client'

import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Home, Volume2, Mic, ChevronLeft, ChevronRight,
  BookOpen, MessageSquare, PenTool, Headphones, Star, Trophy,
  Zap, Clock, CheckCircle2, XCircle, Award, Sparkles, RotateCcw,
  Play, RefreshCw, SkipForward, AlertCircle, Loader2, Square,
  List, Lock, ChevronDown, ChevronUp
} from 'lucide-react'
import { useAppStore, DEMO_LESSONS, LEVELS, type LessonInfo } from '@/lib/store'
import { COURSE_DATA, getLessonsForLevel, getUnitsForLevel, type LessonData, type UnitData } from '@/lib/course-data'
import { speakWord } from '@/lib/speech-utils'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useSpeechRecognition, type SpeechRecognitionResult } from '@/hooks/use-speech-recognition'

// ─── Animation Variants ─────────────────────────────────────────────────────

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  }),
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 24 },
  },
}

// ─── Sample Data ─────────────────────────────────────────────────────────────

interface VocabWord {
  english: string
  french: string
  phonetic: string
  example: string
  exampleTranslation: string
}

interface GrammarRule {
  title: string
  explanation: string
  examples: { sentence: string; translation: string; isCorrect: boolean }[]
  commonMistakes: { wrong: string; correct: string; explanation: string }[]
}

interface DialogueLine {
  speaker: string
  role: 'A' | 'B'
  text: string
  translation: string
}

interface PronunciationItem {
  word: string
  phonetic: string
  meaning: string
  tip: string
}

const VOCAB_WORDS: VocabWord[] = [
  {
    english: 'Hello',
    french: 'Bonjour',
    phonetic: '/həˈloʊ/',
    example: 'Hello, how are you today?',
    exampleTranslation: 'Bonjour, comment allez-vous aujourd\'hui ?',
  },
  {
    english: 'Goodbye',
    french: 'Au revoir',
    phonetic: '/ɡʊdˈbaɪ/',
    example: 'It was nice meeting you. Goodbye!',
    exampleTranslation: 'C\'était sympa de vous rencontrer. Au revoir !',
  },
  {
    english: 'Please',
    french: 'S\'il vous plaît',
    phonetic: '/pliːz/',
    example: 'Could you help me, please?',
    exampleTranslation: 'Pourriez-vous m\'aider, s\'il vous plaît ?',
  },
  {
    english: 'Thank you',
    french: 'Merci',
    phonetic: '/θæŋk juː/',
    example: 'Thank you for your help!',
    exampleTranslation: 'Merci pour votre aide !',
  },
]

const GRAMMAR_RULE: GrammarRule = {
  title: 'Present Simple Tense',
  explanation:
    'The Present Simple is used for habits, routines, and general truths. For he/she/it, add -s or -es to the verb. For I/you/we/they, use the base form.',
  examples: [
    { sentence: 'She walks to school every day.', translation: 'Elle marche à l\'école tous les jours.', isCorrect: true },
    { sentence: 'They plays football on weekends.', translation: '', isCorrect: false },
    { sentence: 'I eat breakfast at 7 AM.', translation: 'Je prends le petit-déjeuner à 7h.', isCorrect: true },
    { sentence: 'He go to work by bus.', translation: '', isCorrect: false },
  ],
  commonMistakes: [
    {
      wrong: 'She walk to school.',
      correct: 'She walks to school.',
      explanation: 'Add -s for third person singular (he/she/it).',
    },
    {
      wrong: 'They doesn\'t likes pizza.',
      correct: 'They don\'t like pizza.',
      explanation: 'Use "don\'t" with I/you/we/they. Use base form after don\'t/doesn\'t.',
    },
  ],
}

const DIALOGUE: DialogueLine[] = [
  {
    speaker: 'Sarah',
    role: 'A',
    text: 'Hi! My name is Sarah. Nice to meet you!',
    translation: 'Salut ! Je m\'appelle Sarah. Enchantée !',
  },
  {
    speaker: 'Marc',
    role: 'B',
    text: 'Nice to meet you too! I\'m Marc. Where are you from?',
    translation: 'Enchanté aussi ! Je suis Marc. D\'où viens-tu ?',
  },
  {
    speaker: 'Sarah',
    role: 'A',
    text: 'I\'m from Paris, France. And you?',
    translation: 'Je suis de Paris, en France. Et toi ?',
  },
  {
    speaker: 'Marc',
    role: 'B',
    text: 'I\'m from London. I\'m learning French!',
    translation: 'Je suis de Londres. J\'apprends le français !',
  },
  {
    speaker: 'Sarah',
    role: 'A',
    text: 'That\'s great! Your French is very good.',
    translation: 'C\'est super ! Ton français est très bon.',
  },
  {
    speaker: 'Marc',
    role: 'B',
    text: 'Thank you! I practice every day.',
    translation: 'Merci ! Je pratique tous les jours.',
  },
]

const PRONUNCIATION_ITEMS: PronunciationItem[] = [
  {
    word: 'Hello',
    phonetic: '/həˈloʊ/',
    meaning: 'Bonjour',
    tip: 'Commencez par un "h" doux (expiré), puis "lo" comme dans "lôt".',
  },
  {
    word: 'Thank you',
    phonetic: '/θæŋk juː/',
    meaning: 'Merci',
    tip: 'Le "th" se prononce en plaçant la langue entre les dents et en soufflant de l\'air.',
  },
  {
    word: 'Water',
    phonetic: '/ˈwɔːtər/',
    meaning: 'Eau',
    tip: 'Le "w" se forme en arrondissant les lèvres. Le "t" américain est souvent adouci.',
  },
  {
    word: 'Beautiful',
    phonetic: '/ˈbjuːtɪfəl/',
    meaning: 'Beau/Belle',
    tip: 'Commencez par "biou", puis "ti" et "foul". Le "eau" anglais se dit "iou".',
  },
]

// ─── Lesson Steps ────────────────────────────────────────────────────────────

type StepType = 'vocab' | 'grammar' | 'conversation' | 'pronunciation'

interface LessonStep {
  type: StepType
  title: string
}

const LESSON_STEPS: LessonStep[] = [
  { type: 'vocab', title: 'Vocabulaire' },
  { type: 'vocab', title: 'Vocabulaire' },
  { type: 'vocab', title: 'Vocabulaire' },
  { type: 'vocab', title: 'Vocabulaire' },
  { type: 'grammar', title: 'Grammaire' },
  { type: 'conversation', title: 'Conversation' },
  { type: 'pronunciation', title: 'Prononciation' },
  { type: 'pronunciation', title: 'Prononciation' },
]

// ─── Type Badge Config ───────────────────────────────────────────────────────

function getTypeConfig(type: string) {
  switch (type) {
    case 'vocabulary':
      return { label: 'Vocabulaire', icon: BookOpen, color: 'bg-yoel-red/15 text-yoel-red' }
    case 'grammar':
      return { label: 'Grammaire', icon: PenTool, color: 'bg-yoel-blue/15 text-yoel-blue' }
    case 'conversation':
      return { label: 'Conversation', icon: MessageSquare, color: 'bg-yoel-green/15 text-yoel-green' }
    case 'pronunciation':
      return { label: 'Prononciation', icon: Headphones, color: 'bg-yoel-gold/15 text-yoel-gold' }
    default:
      return { label: 'Leçon', icon: BookOpen, color: 'bg-muted text-muted-foreground' }
  }
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function CoursePage() {
  const { goBack, currentLevel, currentLesson, navigate, setCurrentLesson, completedLessons, addCompletedLesson, addXP } = useAppStore()

  // View mode: 'list' shows all lessons, 'study' shows the lesson steps
  const [viewMode, setViewMode] = useState<'list' | 'study'>('list')
  const [selectedLessonData, setSelectedLessonData] = useState<LessonData | null>(null)

  const [currentStep, setCurrentStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)
  const [showCompletionModal, setShowCompletionModal] = useState(false)
  const [vocabRevealed, setVocabRevealed] = useState<Set<number>>(new Set())
  const [dialogueRevealed, setDialogueRevealed] = useState<Set<number>>(new Set())
  const [grammarAnswers, setGrammarAnswers] = useState<Set<number>>(new Set())

  // Preload speech synthesis voices (needed for Chrome)
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices()
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices()
      }
    }
  }, [])

  // Current level info
  const levelInfo = LEVELS.find((l) => l.code === currentLevel) ?? LEVELS[0]
  const levelUnits = getUnitsForLevel(currentLevel)
  const levelLessonsRaw = getLessonsForLevel(currentLevel)

  // Build lesson list with completion status
  const allLessons = useMemo(() => {
    if (levelLessonsRaw.length === 0) return []
    return levelLessonsRaw.map((l) => ({
      ...l,
      completed: completedLessons.includes(l.id),
    }))
  }, [levelLessonsRaw, completedLessons])

  // Group lessons by unit
  const lessonsByUnit = useMemo(() => {
    const grouped: Record<string, LessonData & { completed: boolean }[]> = {}
    for (const lesson of allLessons) {
      if (!grouped[lesson.unitId]) grouped[lesson.unitId] = []
      grouped[lesson.unitId].push(lesson)
    }
    return grouped
  }, [allLessons])

  // Stats
  const totalLessons = allLessons.length
  const completedCount = allLessons.filter(l => l.completed).length
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

  // ─── Handle lesson selection ────────────────────────────────────────────
  const handleSelectLesson = (lesson: LessonData & { completed: boolean }) => {
    setSelectedLessonData(lesson)
    setCurrentLesson({
      id: lesson.id,
      title: lesson.title,
      description: lesson.description,
      type: lesson.type,
      xpReward: lesson.xpReward,
      duration: lesson.duration,
      completed: lesson.completed,
      score: 0,
    })
    setCurrentStep(0)
    setVocabRevealed(new Set())
    setDialogueRevealed(new Set())
    setGrammarAnswers(new Set())
    setShowCompletionModal(false)
    setViewMode('study')
  }

  const handleBackToList = () => {
    setViewMode('list')
    setSelectedLessonData(null)
    setCurrentLesson(null)
  }

  // ─── Study mode variables ───────────────────────────────────────────────
  const lesson = currentLesson ?? (allLessons.find((l) => !l.completed) ?? allLessons[0])
  const typeConfig = selectedLessonData ? getTypeConfig(selectedLessonData.type) : getTypeConfig(lesson?.type ?? 'vocabulary')

  const totalSteps = LESSON_STEPS.length
  const stepProgress = ((currentStep + 1) / totalSteps) * 100
  const currentStepData = LESSON_STEPS[currentStep]

  const goNext = () => {
    if (currentStep < totalSteps - 1) {
      setDirection(1)
      setCurrentStep((prev) => prev + 1)
    }
  }

  const goPrev = () => {
    if (currentStep > 0) {
      setDirection(-1)
      setCurrentStep((prev) => prev - 1)
    }
  }

  const finishLesson = () => {
    if (selectedLessonData) {
      addCompletedLesson(selectedLessonData.id)
      addXP(selectedLessonData.xpReward)
    }
    setShowCompletionModal(true)
  }

  const handleCompletionBackToList = () => {
    setShowCompletionModal(false)
    setViewMode('list')
    setSelectedLessonData(null)
    setCurrentLesson(null)
  }

  // Audio playback using speakWord utility
  const speakText = async (text: string, lang: string = 'en-US', rate: number = 0.85) => {
    setIsPlayingAudio(true)
    try {
      await speakWord(text, { lang, rate })
    } catch {
      // Fallback visual feedback
    } finally {
      setIsPlayingAudio(false)
    }
  }

  const playVocabAudio = () => {
    const word = VOCAB_WORDS[currentVocabIndex] ?? VOCAB_WORDS[0]
    speakText(word.english)
  }

  const playDialogueAudio = (lineIndex: number) => {
    const line = DIALOGUE[lineIndex]
    if (line) speakText(line.text)
  }

  const playPronunciationAudio = () => {
    const item = PRONUNCIATION_ITEMS[currentPronIndex] ?? PRONUNCIATION_ITEMS[0]
    speakText(item.word, 'en-US', 0.7)
  }

  // Vocab index mapping
  const vocabStepIndices = LESSON_STEPS
    .map((s, i) => (s.type === 'vocab' ? i : -1))
    .filter((i) => i >= 0)
  const currentVocabIndex = vocabStepIndices.indexOf(currentStep)

  // Pronunciation index mapping
  const pronStepIndices = LESSON_STEPS
    .map((s, i) => (s.type === 'pronunciation' ? i : -1))
    .filter((i) => i >= 0)
  const currentPronIndex = pronStepIndices.indexOf(currentStep)

  // ─── RENDER: Lesson List View ───────────────────────────────────────────
  if (viewMode === 'list') {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <ScrollArea className="h-screen">
          <motion.div
            className="mx-auto max-w-4xl space-y-6 p-4 lg:p-6 pb-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Top Bar */}
            <motion.div variants={itemVariants} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-xl"
                  onClick={goBack}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-xl text-muted-foreground hover:text-yoel-red"
                  onClick={() => navigate('dashboard')}
                >
                  <Home className="h-4 w-4" />
                </Button>
                <div>
                  <h1 className="text-xl font-bold gradient-text-red">
                    {levelInfo.code} — {levelInfo.name}
                  </h1>
                  <p className="text-xs text-muted-foreground">
                    Choisissez une leçon à étudier
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Level Progress Summary */}
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border-0 bg-gradient-to-r from-yoel-red/5 via-transparent to-yoel-gold/5">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${levelInfo.color} text-3xl shadow-lg`}>
                      {levelInfo.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-xs font-bold bg-yoel-red/15 text-yoel-red">
                          {levelInfo.code}
                        </Badge>
                        <span className="font-semibold">{levelInfo.name}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{levelInfo.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {completedCount} sur {totalLessons} leçons complétées
                      </span>
                      <span className="font-semibold gradient-text-red">{progressPercent}%</span>
                    </div>
                    <Progress value={progressPercent} className="h-3" />
                  </div>
                  <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-yoel-green" />
                      {completedCount} terminée{completedCount > 1 ? 's' : ''}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-yoel-red" />
                      {totalLessons - completedCount} restante{totalLessons - completedCount > 1 ? 's' : ''}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Units and Lessons */}
            {levelUnits.map((unit, unitIdx) => {
              const unitLessons = lessonsByUnit[unit.id] || []
              if (unitLessons.length === 0) return null
              const unitCompleted = unitLessons.filter(l => l.completed).length
              const unitProgress = unitLessons.length > 0 ? Math.round((unitCompleted / unitLessons.length) * 100) : 0

              return (
                <motion.div key={unit.id} variants={itemVariants}>
                  <Card className="overflow-hidden border-0 glass">
                    {/* Unit Header */}
                    <div className="p-4 pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yoel-red/10 text-xl shrink-0">
                          {unit.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <Badge variant="outline" className="text-[10px] font-bold px-1.5 py-0">
                              Unité {unitIdx + 1}
                            </Badge>
                            {unitProgress === 100 && (
                              <CheckCircle2 className="h-3.5 w-3.5 text-yoel-green" />
                            )}
                          </div>
                          <h3 className="font-semibold text-sm truncate">{unit.title}</h3>
                          <p className="text-[11px] text-muted-foreground line-clamp-1">{unit.description}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs font-medium text-muted-foreground">
                            {unitCompleted}/{unitLessons.length}
                          </span>
                          <Progress value={unitProgress} className="h-1.5 w-20 mt-1" />
                        </div>
                      </div>
                    </div>

                    {/* Lessons List */}
                    <div className="px-2 pb-2 space-y-1">
                      {unitLessons.map((l, lIdx) => {
                        const config = getTypeConfig(l.type)
                        const IconComp = config.icon
                        const isCompleted = l.completed

                        return (
                          <motion.button
                            key={l.id}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            onClick={() => handleSelectLesson(l)}
                            className={`w-full text-left rounded-xl p-3 transition-all flex items-center gap-3 ${
                              isCompleted
                                ? 'bg-yoel-green/5 hover:bg-yoel-green/10 border border-yoel-green/20'
                                : 'bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-yoel-red/20'
                            }`}
                          >
                            {/* Status icon */}
                            <div className={`flex h-9 w-9 items-center justify-center rounded-xl shrink-0 ${
                              isCompleted
                                ? 'bg-yoel-green/15'
                                : 'bg-muted/50'
                            }`}>
                              {isCompleted ? (
                                <CheckCircle2 className="h-5 w-5 text-yoel-green" />
                              ) : (
                                <span className="text-sm font-bold text-muted-foreground">{lIdx + 1}</span>
                              )}
                            </div>

                            {/* Lesson info */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="font-medium text-sm truncate">{l.title}</span>
                              </div>
                              <p className="text-[11px] text-muted-foreground line-clamp-1">{l.description}</p>
                            </div>

                            {/* Type badge & meta */}
                            <div className="flex items-center gap-2 shrink-0">
                              <Badge className={`${config.color} border-0 text-[10px]`}>
                                <IconComp className="h-3 w-3 mr-1" />
                                {config.label}
                              </Badge>
                              <div className="flex flex-col items-end gap-0.5">
                                <div className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
                                  <Zap className="h-3 w-3 text-yoel-gold" />
                                  {l.xpReward} XP
                                </div>
                                <div className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
                                  <Clock className="h-3 w-3" />
                                  {l.duration} min
                                </div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                            </div>
                          </motion.button>
                        )
                      })}
                    </div>
                  </Card>
                </motion.div>
              )
            })}

            {/* Quick Stats */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-3 gap-3">
                <Card className="glass border-0 overflow-hidden">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yoel-green/15 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-yoel-green" />
                    </div>
                    <span className="text-xl font-bold text-yoel-green">{completedCount}</span>
                    <span className="text-[10px] text-muted-foreground font-medium">Terminées</span>
                  </CardContent>
                </Card>
                <Card className="glass border-0 overflow-hidden">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yoel-red/15 mb-2">
                      <BookOpen className="h-5 w-5 text-yoel-red" />
                    </div>
                    <span className="text-xl font-bold gradient-text-red">{totalLessons - completedCount}</span>
                    <span className="text-[10px] text-muted-foreground font-medium">Restantes</span>
                  </CardContent>
                </Card>
                <Card className="glass border-0 overflow-hidden">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yoel-gold/15 mb-2">
                      <Zap className="h-5 w-5 text-yoel-gold" />
                    </div>
                    <span className="text-xl font-bold text-yoel-gold">{allLessons.reduce((a, l) => a + l.xpReward, 0)}</span>
                    <span className="text-[10px] text-muted-foreground font-medium">XP total</span>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Go to Exercises button */}
            <motion.div variants={itemVariants}>
              <Button
                className="w-full bg-yoel-red hover:bg-yoel-red-dark text-white rounded-xl h-12"
                onClick={() => navigate('exercises')}
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Pratiquer les exercices pour ce niveau
                <ChevronRight className="h-5 w-5 ml-1" />
              </Button>
            </motion.div>
          </motion.div>
        </ScrollArea>
      </div>
    )
  }

  // ─── RENDER: Study Mode ─────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="sticky top-0 z-40 glass border-b border-border/30"
      >
        <div className="mx-auto max-w-3xl">
          <motion.div variants={itemVariants} className="flex items-center justify-between p-3">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-xl"
                onClick={handleBackToList}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-xl text-muted-foreground hover:text-yoel-red"
                onClick={() => navigate('dashboard')}
              >
                <Home className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-sm font-semibold truncate max-w-[180px] sm:max-w-none">
                  {selectedLessonData?.title ?? lesson?.title ?? 'Leçon'}
                </h1>
                <p className="text-[10px] text-muted-foreground">
                  Étape {currentStep + 1}/{totalSteps}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className={`${typeConfig.color} border-0 text-[10px]`}>
                {(() => { const Icon = typeConfig.icon; return <Icon className="h-3 w-3 mr-1" /> })()}
                {typeConfig.label}
              </Badge>
              <Badge variant="outline" className="text-[10px]">
                <Zap className="h-3 w-3 mr-1 text-yoel-gold" />
                {selectedLessonData?.xpReward ?? lesson?.xpReward ?? 15} XP
              </Badge>
            </div>
          </motion.div>
          {/* Progress bar */}
          <div className="px-3 pb-2">
            <Progress value={stepProgress} className="h-1.5" />
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-[calc(100vh-130px)]">
          <div className="mx-auto max-w-3xl p-4 lg:p-6">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentStep}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {currentStepData.type === 'vocab' && (
                  <VocabularyStep
                    word={VOCAB_WORDS[currentVocabIndex] ?? VOCAB_WORDS[0]}
                    index={currentVocabIndex}
                    revealed={vocabRevealed.has(currentStep)}
                    onReveal={() => setVocabRevealed((prev) => new Set(prev).add(currentStep))}
                    isPlayingAudio={isPlayingAudio}
                    onPlayAudio={playVocabAudio}
                  />
                )}
                {currentStepData.type === 'grammar' && (
                  <GrammarStep
                    rule={GRAMMAR_RULE}
                    answeredIndices={grammarAnswers}
                    onAnswer={(idx) => setGrammarAnswers((prev) => new Set(prev).add(idx))}
                  />
                )}
                {currentStepData.type === 'conversation' && (
                  <ConversationStep
                    dialogue={DIALOGUE}
                    revealedIndices={dialogueRevealed}
                    onReveal={(idx) => setDialogueRevealed((prev) => new Set(prev).add(idx))}
                    isPlayingAudio={isPlayingAudio}
                    onPlayAudio={playDialogueAudio}
                  />
                )}
                {currentStepData.type === 'pronunciation' && (
                  <PronunciationStep
                    item={PRONUNCIATION_ITEMS[currentPronIndex] ?? PRONUNCIATION_ITEMS[0]}
                    index={currentPronIndex}
                    onPlayAudio={playPronunciationAudio}
                    isPlayingAudio={isPlayingAudio}
                    onComplete={goNext}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollArea>
      </div>

      {/* Bottom Navigation */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 25 }}
        className="sticky bottom-0 z-40 glass border-t border-border/30"
      >
        <div className="mx-auto max-w-3xl p-3 flex items-center justify-between gap-3">
          <Button
            variant="outline"
            size="sm"
            className="rounded-xl"
            onClick={goPrev}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Précédent
          </Button>

          <div className="flex items-center gap-1">
            {LESSON_STEPS.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentStep
                    ? 'w-6 bg-yoel-red'
                    : i < currentStep
                    ? 'w-3 bg-yoel-green'
                    : 'w-3 bg-muted-foreground/20'
                }`}
              />
            ))}
          </div>

          {currentStep === totalSteps - 1 ? (
            <Button
              size="sm"
              className="rounded-xl bg-yoel-green hover:bg-yoel-green/90 text-white"
              onClick={finishLesson}
            >
              <CheckCircle2 className="h-4 w-4 mr-1" />
              Terminer
            </Button>
          ) : (
            <Button
              size="sm"
              className="rounded-xl bg-yoel-red hover:bg-yoel-red-dark text-white"
              onClick={goNext}
            >
              Suivant
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          )}
        </div>
      </motion.div>

      {/* Completion Modal */}
      <AnimatePresence>
        {showCompletionModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setShowCompletionModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="border-0 overflow-hidden shadow-2xl">
                {/* Header gradient */}
                <div className="bg-gradient-to-br from-yoel-green via-emerald-500 to-yoel-blue p-8 text-center text-white">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  >
                    <Trophy className="h-16 w-16 mx-auto mb-4 drop-shadow-lg" />
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl font-bold"
                  >
                    Leçon terminée !
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm opacity-90 mt-1"
                  >
                    {selectedLessonData?.title ?? lesson?.title}
                  </motion.p>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* XP Earned */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yoel-gold/15">
                        <Zap className="h-5 w-5 text-yoel-gold" />
                      </div>
                      <span className="font-medium text-sm">XP gagnés</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold text-yoel-gold">+{selectedLessonData?.xpReward ?? lesson?.xpReward ?? 15}</span>
                      <span className="text-xs text-muted-foreground">XP</span>
                    </div>
                  </motion.div>

                  <Separator />

                  {/* Time */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yoel-blue/15">
                        <Clock className="h-5 w-5 text-yoel-blue" />
                      </div>
                      <span className="font-medium text-sm">Durée</span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {selectedLessonData?.duration ?? lesson?.duration ?? 5} min
                    </span>
                  </motion.div>

                  <Separator />

                  {/* Badges */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-yoel-red" />
                      <span className="text-sm font-medium">Badges débloqués</span>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-yoel-red/15 text-yoel-red border-0 text-xs">
                        🎯 Précision
                      </Badge>
                      <Badge className="bg-yoel-gold/15 text-yoel-gold border-0 text-xs">
                        ⚡ Vitesse
                      </Badge>
                    </div>
                  </motion.div>

                  {/* Action buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex gap-3 pt-2"
                  >
                    <Button
                      variant="outline"
                      className="flex-1 rounded-xl"
                      onClick={() => {
                        setCurrentStep(0)
                        setVocabRevealed(new Set())
                        setDialogueRevealed(new Set())
                        setGrammarAnswers(new Set())
                        setShowCompletionModal(false)
                      }}
                    >
                      <RotateCcw className="h-4 w-4 mr-1" />
                      Recommencer
                    </Button>
                    <Button
                      className="flex-1 rounded-xl bg-yoel-red hover:bg-yoel-red-dark text-white"
                      onClick={handleCompletionBackToList}
                    >
                      <List className="h-4 w-4 mr-1" />
                      Toutes les leçons
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Vocabulary Step ─────────────────────────────────────────────────────────

function VocabularyStep({
  word,
  index,
  revealed,
  onReveal,
  isPlayingAudio,
  onPlayAudio,
}: {
  word: VocabWord
  index: number
  revealed: boolean
  onReveal: () => void
  isPlayingAudio: boolean
  onPlayAudio: () => void
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center">
        <Badge className="bg-yoel-red/15 text-yoel-red border-0 text-xs mb-2">
          Mot {index + 1}/{VOCAB_WORDS.length}
        </Badge>
        <h2 className="text-2xl font-bold">Apprenez un nouveau mot</h2>
      </motion.div>

      {/* Word Card */}
      <motion.div variants={itemVariants}>
        <Card className="overflow-hidden border-0 shadow-lg">
          <div className="h-2 bg-gradient-to-r from-yoel-red to-yoel-gold" />
          <CardContent className="p-6 space-y-5">
            <div className="text-center space-y-2">
              <h3 className="text-4xl font-bold gradient-text-red">{word.french}</h3>
              <p className="text-sm text-muted-foreground">🇫🇷 Français</p>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={onPlayAudio}
              >
                {isPlayingAudio ? (
                  <>
                    <Volume2 className="h-4 w-4 mr-1 animate-pulse text-yoel-red" />
                    Lecture...
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-1" />
                    Écouter (EN)
                  </>
                )}
              </Button>
            </div>

            <Separator />

            <div className="text-center cursor-pointer" onClick={onReveal}>
              {!revealed ? (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl bg-muted/50 p-4 space-y-1"
                >
                  <p className="text-sm text-muted-foreground">Appuyez pour révéler la traduction</p>
                  <p className="text-2xl">🇫🇷 → 🇬🇧</p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-xl bg-yoel-green/10 p-4"
                >
                  <p className="text-xs text-muted-foreground mb-1">Traduction en anglais</p>
                  <p className="text-2xl font-bold gradient-text-blue">{word.english}</p>
                  <p className="text-sm font-mono text-muted-foreground mt-1">{word.phonetic}</p>
                </motion.div>
              )}
            </div>

            <div className="rounded-xl bg-muted/40 p-4 space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Exemple</p>
              <p className="text-sm font-medium italic">&ldquo;{word.example}&rdquo;</p>
              {revealed && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-muted-foreground">
                  {word.exampleTranslation}
                </motion.p>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

// ─── Grammar Step ────────────────────────────────────────────────────────────

function GrammarStep({
  rule,
  answeredIndices,
  onAnswer,
}: {
  rule: GrammarRule
  answeredIndices: Set<number>
  onAnswer: (index: number) => void
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      <motion.div variants={itemVariants} className="text-center">
        <Badge className="bg-yoel-blue/15 text-yoel-blue border-0 text-xs mb-2">
          <PenTool className="h-3 w-3 mr-1" />
          Grammaire
        </Badge>
        <h2 className="text-2xl font-bold">{rule.title}</h2>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-yoel-blue to-cyan-500" />
          <CardContent className="p-6 space-y-5">
            <div className="rounded-xl bg-yoel-blue/10 p-4">
              <p className="text-sm leading-relaxed">{rule.explanation}</p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-yoel-blue" />
                Identifiez les phrases correctes
              </p>
              {rule.examples.map((ex, idx) => {
                const answered = answeredIndices.has(idx)
                return (
                  <motion.div
                    key={idx}
                    whileHover={!answered ? { scale: 1.01 } : undefined}
                    whileTap={!answered ? { scale: 0.99 } : undefined}
                    className={`rounded-xl border p-3 transition-all cursor-pointer ${
                      answered
                        ? ex.isCorrect
                          ? 'border-yoel-green/40 bg-yoel-green/10'
                          : 'border-destructive/40 bg-destructive/10'
                        : 'border-border hover:border-yoel-blue/40 hover:bg-yoel-blue/5'
                    }`}
                    onClick={() => !answered && onAnswer(idx)}
                  >
                    <div className="flex items-start gap-3">
                      {answered ? (
                        ex.isCorrect ? (
                          <CheckCircle2 className="h-5 w-5 text-yoel-green shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        )
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="text-sm font-medium">{ex.sentence}</p>
                        {answered && ex.isCorrect && ex.translation && (
                          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-muted-foreground mt-1">
                            {ex.translation}
                          </motion.p>
                        )}
                        {answered && !ex.isCorrect && (
                          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-destructive mt-1">
                            ✗ Cette phrase contient une erreur
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                Erreurs courantes
              </p>
              {rule.commonMistakes.map((mistake, idx) => (
                <div key={idx} className="rounded-xl bg-muted/40 p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-destructive shrink-0" />
                    <span className="text-sm line-through text-muted-foreground">{mistake.wrong}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-yoel-green shrink-0" />
                    <span className="text-sm font-medium text-yoel-green">{mistake.correct}</span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-6">💡 {mistake.explanation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

// ─── Conversation Step ───────────────────────────────────────────────────────

function ConversationStep({
  dialogue,
  revealedIndices,
  onReveal,
  isPlayingAudio,
  onPlayAudio,
}: {
  dialogue: DialogueLine[]
  revealedIndices: Set<number>
  onReveal: (index: number) => void
  isPlayingAudio: boolean
  onPlayAudio: (lineIndex: number) => void
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      <motion.div variants={itemVariants} className="text-center">
        <Badge className="bg-yoel-green/15 text-yoel-green border-0 text-xs mb-2">
          <MessageSquare className="h-3 w-3 mr-1" />
          Conversation
        </Badge>
        <h2 className="text-2xl font-bold">At the Café</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Appuyez sur chaque ligne pour voir la traduction
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-3">
        {dialogue.map((line, idx) => {
          const isRevealed = revealedIndices.has(idx)
          const isSpeakerA = line.role === 'A'

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: isSpeakerA ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`flex ${isSpeakerA ? 'justify-start' : 'justify-end'}`}
            >
              <div className="max-w-[85%] cursor-pointer" onClick={() => onReveal(idx)}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-bold ${isSpeakerA ? 'text-yoel-red' : 'text-yoel-blue'}`}>
                    {line.speaker}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-5 w-5"
                    onClick={(e) => {
                      e.stopPropagation()
                      onPlayAudio(idx)
                    }}
                  >
                    {isPlayingAudio ? (
                      <Volume2 className="h-3 w-3 animate-pulse text-yoel-red" />
                    ) : (
                      <Volume2 className="h-3 w-3 text-muted-foreground" />
                    )}
                  </Button>
                </div>
                <Card
                  className={`border-0 overflow-hidden ${
                    isSpeakerA
                      ? 'bg-gradient-to-br from-yoel-red/10 to-yoel-red/5'
                      : 'bg-gradient-to-br from-yoel-blue/10 to-yoel-blue/5'
                  }`}
                >
                  <CardContent className="p-3">
                    <p className="text-sm font-medium">{line.text}</p>
                    {isRevealed ? (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-xs text-muted-foreground mt-1.5 pt-1.5 border-t border-border/30"
                      >
                        {line.translation}
                      </motion.p>
                    ) : (
                      <p className="text-[10px] text-muted-foreground mt-1">
                        Appuyez pour la traduction ↓
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="border-0 bg-yoel-gold/5">
          <CardContent className="p-4 flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-yoel-gold shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Astuce de conversation</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Pratiquez cette conversation à voix haute ! Essayez de jouer les deux rôles
                pour améliorer votre fluidité.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

// ─── Pronunciation Step ──────────────────────────────────────────────────────

function PronunciationStep({
  item,
  index,
  onPlayAudio,
  isPlayingAudio,
  onComplete,
}: {
  item: PronunciationItem
  index: number
  onPlayAudio: () => void
  isPlayingAudio: boolean
  onComplete: () => void
}) {
  const [attemptCount, setAttemptCount] = useState(0)
  const autoAdvanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const onCompleteRef = useRef(onComplete)
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  const handleAttempt = () => {
    setAttemptCount((prev) => {
      const next = prev + 1
      if (next >= 2) {
        if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current)
        autoAdvanceTimerRef.current = setTimeout(() => {
          onCompleteRef.current()
        }, 1500)
      }
      return next
    })
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      <motion.div variants={itemVariants} className="text-center">
        <Badge className="bg-yoel-gold/15 text-yoel-gold border-0 text-xs mb-2">
          <Headphones className="h-3 w-3 mr-1" />
          Prononciation
        </Badge>
        <h2 className="text-2xl font-bold">Pratiquez la prononciation</h2>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="overflow-hidden border-0 shadow-lg">
          <div className="h-2 bg-gradient-to-r from-yoel-gold to-amber-400" />
          <CardContent className="p-6 space-y-5">
            {/* Word display */}
            <div className="text-center space-y-2">
              <h3 className="text-4xl font-bold gradient-text-red">{item.word}</h3>
              <p className="text-sm font-mono text-muted-foreground">{item.phonetic}</p>
              <p className="text-sm text-muted-foreground">= {item.meaning}</p>
            </div>

            {/* Play button */}
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full h-16 w-16"
                onClick={onPlayAudio}
              >
                {isPlayingAudio ? (
                  <Volume2 className="h-8 w-8 animate-pulse text-yoel-gold" />
                ) : (
                  <Play className="h-8 w-8" />
                )}
              </Button>
            </div>

            {/* Tip */}
            <div className="rounded-xl bg-yoel-gold/10 p-4">
              <p className="text-xs font-medium text-yoel-gold mb-1">💡 Conseil</p>
              <p className="text-sm text-muted-foreground">{item.tip}</p>
            </div>

            {/* Practice button */}
            <div className="flex justify-center">
              <Button
                className="bg-yoel-gold hover:bg-yoel-gold/90 text-white rounded-xl"
                onClick={handleAttempt}
              >
                <Mic className="h-4 w-4 mr-2" />
                {attemptCount === 0 ? 'Pratiquer' : 'Réessayer'}
                {attemptCount > 0 && (
                  <span className="ml-2 text-xs opacity-80">({attemptCount} essai{attemptCount > 1 ? 's' : ''})</span>
                )}
              </Button>
            </div>

            {attemptCount >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <Badge className="bg-yoel-green/15 text-yoel-green border-0">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Bon travail ! Passage à la suite...
                </Badge>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
