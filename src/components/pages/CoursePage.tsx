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
import { getLessonContent, type VocabWord, type GrammarRule, type DialogueLine, type PronunciationItem } from '@/lib/lesson-content'

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

// ─── Dynamic Lesson Content ──────────────────────────────────────────────────
// Content is loaded from lesson-content.ts based on the selected lesson's unit
// Types VocabWord, GrammarRule, DialogueLine, PronunciationItem are imported from lesson-content.ts

// ─── Lesson Steps ────────────────────────────────────────────────────────────

type StepType = 'vocab' | 'grammar' | 'conversation' | 'pronunciation' | 'quiz'

interface LessonStep {
  type: StepType
  title: string
}

function getLessonSteps(lessonType: string): LessonStep[] {
  // All lesson types end with a quiz step
  switch (lessonType) {
    case 'vocabulary':
      return [
        { type: 'vocab', title: 'Vocabulaire' },
        { type: 'vocab', title: 'Vocabulaire' },
        { type: 'vocab', title: 'Vocabulaire' },
        { type: 'vocab', title: 'Vocabulaire' },
        { type: 'grammar', title: 'Grammaire' },
        { type: 'conversation', title: 'Conversation' },
        { type: 'pronunciation', title: 'Prononciation' },
        { type: 'pronunciation', title: 'Prononciation' },
        { type: 'quiz', title: 'Quiz' },
      ]
    case 'grammar':
      return [
        { type: 'grammar', title: 'Grammaire' },
        { type: 'grammar', title: 'Grammaire' },
        { type: 'vocab', title: 'Vocabulaire' },
        { type: 'vocab', title: 'Vocabulaire' },
        { type: 'conversation', title: 'Conversation' },
        { type: 'pronunciation', title: 'Prononciation' },
        { type: 'pronunciation', title: 'Prononciation' },
        { type: 'quiz', title: 'Quiz' },
      ]
    case 'conversation':
      return [
        { type: 'conversation', title: 'Conversation' },
        { type: 'conversation', title: 'Conversation' },
        { type: 'vocab', title: 'Vocabulaire' },
        { type: 'vocab', title: 'Vocabulaire' },
        { type: 'grammar', title: 'Grammaire' },
        { type: 'pronunciation', title: 'Prononciation' },
        { type: 'pronunciation', title: 'Prononciation' },
        { type: 'quiz', title: 'Quiz' },
      ]
    case 'pronunciation':
      return [
        { type: 'pronunciation', title: 'Prononciation' },
        { type: 'pronunciation', title: 'Prononciation' },
        { type: 'pronunciation', title: 'Prononciation' },
        { type: 'vocab', title: 'Vocabulaire' },
        { type: 'vocab', title: 'Vocabulaire' },
        { type: 'grammar', title: 'Grammaire' },
        { type: 'conversation', title: 'Conversation' },
        { type: 'quiz', title: 'Quiz' },
      ]
    default:
      return [
        { type: 'vocab', title: 'Vocabulaire' },
        { type: 'vocab', title: 'Vocabulaire' },
        { type: 'vocab', title: 'Vocabulaire' },
        { type: 'vocab', title: 'Vocabulaire' },
        { type: 'grammar', title: 'Grammaire' },
        { type: 'conversation', title: 'Conversation' },
        { type: 'pronunciation', title: 'Prononciation' },
        { type: 'pronunciation', title: 'Prononciation' },
        { type: 'quiz', title: 'Quiz' },
      ]
  }
}

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
  const [quizScore, setQuizScore] = useState<number | null>(null) // null = not taken yet

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
    setQuizScore(null)
    setViewMode('study')
  }

  const handleBackToList = () => {
    setViewMode('list')
    setSelectedLessonData(null)
    setCurrentLesson(null)
  }

  // ─── Study mode variables ───────────────────────────────────────────────
  const lesson = currentLesson ?? (allLessons.find((l) => !l.completed) ?? allLessons[0])

  // Load dynamic lesson content based on the selected lesson ID
  const lessonContent = useMemo(() => {
    const lessonId = selectedLessonData?.id ?? 'a1-l1'
    return getLessonContent(lessonId)
  }, [selectedLessonData?.id])

  const VOCAB_WORDS = lessonContent.vocab
  const GRAMMAR_RULE = lessonContent.grammar
  const DIALOGUE = lessonContent.conversation
  const PRONUNCIATION_ITEMS = lessonContent.pronunciation

  const typeConfig = selectedLessonData ? getTypeConfig(selectedLessonData.type) : getTypeConfig(lesson?.type ?? 'vocabulary')

  // Dynamic steps based on lesson type
  const LESSON_STEPS = useMemo(() => getLessonSteps(selectedLessonData?.type ?? 'vocabulary'), [selectedLessonData?.type])
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

  const PASSING_SCORE = 60 // moyenne = 60%

  const finishLesson = (score: number) => {
    setQuizScore(score)
    const passed = score >= PASSING_SCORE
    if (passed && selectedLessonData) {
      addCompletedLesson(selectedLessonData.id)
      addXP(selectedLessonData.xpReward)
    }
    setShowCompletionModal(true)
  }

  const handleRestartLesson = () => {
    setCurrentStep(0)
    setVocabRevealed(new Set())
    setDialogueRevealed(new Set())
    setGrammarAnswers(new Set())
    setShowCompletionModal(false)
    setQuizScore(null)
  }

  const handleAdvanceToNextLesson = () => {
    if (!selectedLessonData) {
      handleCompletionBackToList()
      return
    }
    // Find the next lesson in the same level
    const currentIndex = allLessons.findIndex((l) => l.id === selectedLessonData.id)
    const nextLesson = allLessons[currentIndex + 1]
    if (nextLesson) {
      setShowCompletionModal(false)
      setQuizScore(null)
      handleSelectLesson(nextLesson)
    } else {
      // No more lessons - go back to list
      handleCompletionBackToList()
    }
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
    if (word) speakText(word.english)
  }

  const playDialogueAudio = (lineIndex: number) => {
    const line = DIALOGUE[lineIndex]
    if (line) speakText(line.text)
  }

  const playPronunciationAudio = () => {
    const item = PRONUNCIATION_ITEMS[currentPronIndex] ?? PRONUNCIATION_ITEMS[0]
    if (item) speakText(item.word, 'en-US', 0.7)
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
                {currentStepData?.type === 'vocab' && VOCAB_WORDS.length > 0 && (
                  <VocabularyStep
                    word={VOCAB_WORDS[currentVocabIndex] ?? VOCAB_WORDS[0]}
                    index={currentVocabIndex}
                    totalVocabCount={VOCAB_WORDS.length}
                    revealed={vocabRevealed.has(currentStep)}
                    onReveal={() => setVocabRevealed((prev) => new Set(prev).add(currentStep))}
                    isPlayingAudio={isPlayingAudio}
                    onPlayAudio={playVocabAudio}
                    lessonTitle={selectedLessonData?.title ?? lesson?.title ?? 'Vocabulaire'}
                  />
                )}
                {currentStepData?.type === 'grammar' && GRAMMAR_RULE && (
                  <GrammarStep
                    rule={GRAMMAR_RULE}
                    answeredIndices={grammarAnswers}
                    onAnswer={(idx) => setGrammarAnswers((prev) => new Set(prev).add(idx))}
                  />
                )}
                {currentStepData?.type === 'conversation' && DIALOGUE.length > 0 && (
                  <ConversationStep
                    dialogue={DIALOGUE}
                    conversationTitle={lessonContent.conversationTitle}
                    revealedIndices={dialogueRevealed}
                    onReveal={(idx) => setDialogueRevealed((prev) => new Set(prev).add(idx))}
                    isPlayingAudio={isPlayingAudio}
                    onPlayAudio={playDialogueAudio}
                  />
                )}
                {currentStepData?.type === 'pronunciation' && PRONUNCIATION_ITEMS.length > 0 && (
                  <PronunciationStep
                    item={PRONUNCIATION_ITEMS[currentPronIndex] ?? PRONUNCIATION_ITEMS[0]}
                    index={currentPronIndex}
                    onPlayAudio={playPronunciationAudio}
                    isPlayingAudio={isPlayingAudio}
                    onComplete={goNext}
                    lessonTitle={selectedLessonData?.title ?? lesson?.title ?? 'Prononciation'}
                  />
                )}
                {currentStepData?.type === 'quiz' && (
                  <LessonQuizStep
                    vocab={VOCAB_WORDS}
                    grammar={GRAMMAR_RULE}
                    onFinish={finishLesson}
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

          {(() => {
            if (currentStepData?.type === 'quiz') return null
            if (currentStep === totalSteps - 2) {
              return (
                <Button
                  size="sm"
                  className="rounded-xl bg-yoel-gold hover:bg-yoel-gold/90 text-white"
                  onClick={goNext}
                >
                  <Sparkles className="h-4 w-4 mr-1" />
                  Passer au Quiz
                </Button>
              )
            }
            if (currentStep === totalSteps - 1) return null
            return (
              <Button
                size="sm"
                className="rounded-xl bg-yoel-red hover:bg-yoel-red-dark text-white"
                onClick={goNext}
              >
                Suivant
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            )
          })()}
        </div>
      </motion.div>

      {/* Completion Modal */}
      <AnimatePresence>
        {showCompletionModal && quizScore !== null && (
          <LessonCompletionModal
            score={quizScore}
            passingScore={PASSING_SCORE}
            lessonTitle={selectedLessonData?.title ?? lesson?.title ?? 'Leçon'}
            xpReward={selectedLessonData?.xpReward ?? lesson?.xpReward ?? 15}
            duration={selectedLessonData?.duration ?? lesson?.duration ?? 5}
            hasNextLesson={allLessons.findIndex((l) => l.id === selectedLessonData?.id) < allLessons.length - 1}
            onRestart={handleRestartLesson}
            onAdvance={handleAdvanceToNextLesson}
            onBackToList={handleCompletionBackToList}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Vocabulary Step ─────────────────────────────────────────────────────────

function VocabularyStep({
  word,
  index,
  totalVocabCount,
  revealed,
  onReveal,
  isPlayingAudio,
  onPlayAudio,
  lessonTitle,
}: {
  word: VocabWord
  index: number
  totalVocabCount: number
  revealed: boolean
  onReveal: () => void
  isPlayingAudio: boolean
  onPlayAudio: () => void
  lessonTitle: string
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
          Mot {index + 1}/{totalVocabCount}
        </Badge>
        <h2 className="text-2xl font-bold">{lessonTitle}</h2>
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
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full mt-2 text-yoel-blue hover:text-yoel-blue hover:bg-yoel-blue/10"
                    onClick={(e) => {
                      e.stopPropagation()
                      onPlayAudio()
                    }}
                  >
                    <Volume2 className="h-4 w-4 mr-1" />
                    Réécouter
                  </Button>
                </motion.div>
              )}
            </div>

            <div className="rounded-xl bg-muted/40 p-4 space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Exemple</p>
              <div className="flex items-start gap-2">
                <p className="text-sm font-medium italic flex-1">&ldquo;{word.example}&rdquo;</p>
                <button
                  className="shrink-0 text-muted-foreground hover:text-yoel-red transition-colors p-1"
                  onClick={(e) => {
                    e.stopPropagation()
                    speakWord(word.example, { rate: 0.8 })
                  }}
                  title="Écouter l'exemple"
                >
                  <Volume2 className="h-4 w-4" />
                </button>
              </div>
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
  conversationTitle,
  revealedIndices,
  onReveal,
  isPlayingAudio,
  onPlayAudio,
}: {
  dialogue: DialogueLine[]
  conversationTitle: string
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
        <h2 className="text-2xl font-bold">{conversationTitle}</h2>
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

      {/* Play all dialogue button */}
      <motion.div variants={itemVariants} className="flex justify-center">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full"
          onClick={async () => {
            for (const line of dialogue) {
              await speakWord(line.text, { rate: 0.8 })
              // Small pause between lines
              await new Promise(r => setTimeout(r, 500))
            }
          }}
        >
          <Volume2 className="h-4 w-4 mr-1.5" />
          Écouter toute la conversation
        </Button>
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
  lessonTitle,
}: {
  item: PronunciationItem
  index: number
  onPlayAudio: () => void
  isPlayingAudio: boolean
  onComplete: () => void
  lessonTitle: string
}) {
  const [attemptCount, setAttemptCount] = useState(0)
  const [lastResult, setLastResult] = useState<SpeechRecognitionResult | null>(null)
  const [inputMode, setInputMode] = useState<'mic' | 'type'>('mic')
  const [typedAnswer, setTypedAnswer] = useState('')
  const autoAdvanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const onCompleteRef = useRef(onComplete)
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

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
    targetWord: item.word,
    autoStopMs: 5000,
    similarityThreshold: 70,
    language: 'en-US',
  })

  // Sync hook result to local state
  useEffect(() => {
    if (result) {
      setLastResult(result)
      setAttemptCount((prev) => prev + 1)
      if (result.isCorrect) {
        if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current)
        autoAdvanceTimerRef.current = setTimeout(() => {
          onCompleteRef.current()
        }, 2000)
      }
    }
  }, [result])

  const handleMicPress = useCallback(async () => {
    if (isRecording || isProcessing) return
    setLastResult(null)
    resetRecording()
    setTimeout(() => startRecording(), 50)
  }, [isRecording, isProcessing, resetRecording, startRecording])

  const handleStopRecording = useCallback(() => {
    stopRecording()
  }, [stopRecording])

  // Typed answer submission — with multi-word phrase support
  const handleTypedSubmit = useCallback(() => {
    const answer = typedAnswer.trim().toLowerCase()
    const target = item.word.toLowerCase()

    // Levenshtein similarity for full phrase
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
            matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
          }
        }
      }
      const dist = matrix[target.length][answer.length]
      similarity = Math.round(((maxLen - dist) / maxLen) * 100)
    }

    // For multi-word targets, also check individual word matching
    const targetWords = target.split(/\s+/)
    const answerWords = answer.split(/\s+/)
    if (targetWords.length > 1 || answerWords.length > 1) {
      // Check each target word against each answer word
      for (const tw of targetWords) {
        if (tw.length < 2) continue
        for (const aw of answerWords) {
          if (aw.length < 2) continue
          const wMaxLen = Math.max(aw.length, tw.length)
          if (wMaxLen === 0) continue
          const wMatrix: number[][] = []
          for (let i = 0; i <= tw.length; i++) wMatrix[i] = [i]
          for (let j = 0; j <= aw.length; j++) wMatrix[0][j] = j
          for (let i = 1; i <= tw.length; i++) {
            for (let j = 1; j <= aw.length; j++) {
              if (tw.charAt(i - 1) === aw.charAt(j - 1)) {
                wMatrix[i][j] = wMatrix[i - 1][j - 1]
              } else {
                wMatrix[i][j] = Math.min(wMatrix[i - 1][j - 1] + 1, wMatrix[i][j - 1] + 1, wMatrix[i - 1][j] + 1)
              }
            }
          }
          const wDist = wMatrix[tw.length][aw.length]
          const wSim = Math.round(((wMaxLen - wDist) / wMaxLen) * 100)
          if (wSim > similarity) similarity = wSim
        }
      }

      // If all target words are present in answer (any order), boost similarity
      const allPresent = targetWords.every(tw =>
        answerWords.some(aw => {
          if (aw.length < 2 || tw.length < 2) return aw === tw
          const m = Math.max(aw.length, tw.length)
          if (m === 0) return false
          const wM: number[][] = []
          for (let i = 0; i <= tw.length; i++) wM[i] = [i]
          for (let j = 0; j <= aw.length; j++) wM[0][j] = j
          for (let i = 1; i <= tw.length; i++) {
            for (let j = 1; j <= aw.length; j++) {
              if (tw.charAt(i - 1) === aw.charAt(j - 1)) { wM[i][j] = wM[i - 1][j - 1] }
              else { wM[i][j] = Math.min(wM[i - 1][j - 1] + 1, wM[i][j - 1] + 1, wM[i - 1][j] + 1) }
            }
          }
          return Math.round(((m - wM[tw.length][aw.length]) / m) * 100) >= 70
        })
      )
      if (allPresent && targetWords.length > 1) similarity = Math.max(similarity, 85)
    }

    const isCorrect = similarity >= 70 || (answer.length > 0 && (answer.includes(target) || target.includes(answer)))
    const typedResult: SpeechRecognitionResult = { transcript: answer, confidence: similarity, isCorrect }
    setLastResult(typedResult)
    setAttemptCount((prev) => prev + 1)
    if (isCorrect) {
      if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current)
      autoAdvanceTimerRef.current = setTimeout(() => { onCompleteRef.current() }, 2000)
    }
  }, [typedAnswer, item.word])

  const handleRetry = () => {
    setLastResult(null)
    resetRecording()
    setTypedAnswer('')
  }

  const handleSkip = () => {
    onCompleteRef.current()
  }

  const isBusy = isRecording || isProcessing

  const getConfidenceColor = (c: number) => c >= 80 ? 'text-yoel-green' : c >= 50 ? 'text-yoel-gold' : 'text-yoel-red'
  const getConfidenceBg = (c: number) => c >= 80 ? 'bg-yoel-green/10 border-yoel-green/30' : c >= 50 ? 'bg-yoel-gold/10 border-yoel-gold/30' : 'bg-yoel-red/10 border-yoel-red/30'
  const getConfidenceLabel = (c: number) => c >= 80 ? 'Excellent !' : c >= 50 ? 'Presque !' : 'Réessayez'

  // Mic level bars - use real-time micLevel from the hook

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
        <h2 className="text-2xl font-bold">{lessonTitle}</h2>
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

            {/* Play buttons */}
            <div className="flex justify-center gap-3">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full h-14 w-14"
                onClick={onPlayAudio}
                disabled={isPlayingAudio}
              >
                {isPlayingAudio ? (
                  <Volume2 className="h-7 w-7 animate-pulse text-yoel-gold" />
                ) : (
                  <Play className="h-7 w-7" />
                )}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full h-14 px-4"
                onClick={() => speakWord(item.word, { rate: 0.5 })}
                disabled={isPlayingAudio}
              >
                <Volume2 className="h-4 w-4 mr-1.5 text-yoel-gold" />
                Lent
              </Button>
            </div>

            {/* Tip */}
            <div className="rounded-xl bg-yoel-gold/10 p-4">
              <p className="text-xs font-medium text-yoel-gold mb-1">💡 Conseil</p>
              <p className="text-sm text-muted-foreground">{item.tip}</p>
            </div>

            {/* Input mode toggle */}
            <div className="flex justify-center gap-2">
              <Button
                variant={inputMode === 'mic' ? 'default' : 'outline'}
                size="sm"
                className={`rounded-full text-xs ${inputMode === 'mic' ? 'bg-yoel-gold hover:bg-yoel-gold/90 text-white' : ''}`}
                onClick={() => setInputMode('mic')}
              >
                <Mic className="h-3 w-3 mr-1" />
                Microphone
              </Button>
              <Button
                variant={inputMode === 'type' ? 'default' : 'outline'}
                size="sm"
                className={`rounded-full text-xs ${inputMode === 'type' ? 'bg-yoel-gold hover:bg-yoel-gold/90 text-white' : ''}`}
                onClick={() => setInputMode('type')}
              >
                <PenTool className="h-3 w-3 mr-1" />
                Clavier
              </Button>
            </div>

            {/* Microphone mode */}
            {inputMode === 'mic' && (
              <div className="space-y-4">
                {!isSupported ? (
                  <div className="text-center space-y-3 p-4 rounded-xl bg-muted/30">
                    <AlertCircle className="h-8 w-8 text-muted-foreground mx-auto" />
                    <p className="text-sm text-muted-foreground">
                      La reconnaissance vocale n&apos;est pas supportée dans ce navigateur.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Essayez Chrome ou Edge, ou passez en mode Clavier.
                    </p>
                    <Button size="sm" variant="outline" className="rounded-full" onClick={() => setInputMode('type')}>
                      <PenTool className="h-3 w-3 mr-1" />
                      Passer en mode clavier
                    </Button>
                  </div>
                ) : (
                  <>
                    {/* Mic level visualization - animated waveform using real mic level */}
                    {isRecording && (
                      <div className="flex items-center gap-1 h-10">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className={`w-1.5 rounded-full ${isRecording ? 'bg-yoel-gold' : 'bg-muted-foreground/20'}`}
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
                    )}

                    {/* Recording timer */}
                    {isRecording && (
                      <p className="text-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 inline mr-1" />
                        {recordingSeconds}s / 5s
                      </p>
                    )}

                    {/* Mic / Stop button */}
                    <div className="flex justify-center">
                      {isBusy ? (
                        <Button
                          className="bg-yoel-red hover:bg-yoel-red-dark text-white rounded-full h-14 w-14"
                          onClick={isRecording ? handleStopRecording : undefined}
                          disabled={isProcessing}
                        >
                          {isProcessing ? (
                            <Loader2 className="h-6 w-6 animate-spin" />
                          ) : (
                            <Square className="h-6 w-6" />
                          )}
                        </Button>
                      ) : (
                        <Button
                          className="bg-yoel-gold hover:bg-yoel-gold/90 text-white rounded-full h-14 w-14"
                          onClick={handleMicPress}
                        >
                          <Mic className="h-6 w-6" />
                        </Button>
                      )}
                    </div>

                    {isProcessing && (
                      <p className="text-center text-xs text-muted-foreground">
                        <Loader2 className="h-3 w-3 inline animate-spin mr-1" />
                        Analyse en cours...
                      </p>
                    )}

                    {/* Mic error */}
                    {micError && (
                      <div className="text-center p-3 rounded-xl bg-yoel-red/10 border border-yoel-red/20">
                        <p className="text-xs text-yoel-red">{micError}</p>
                        <Button size="sm" variant="outline" className="rounded-full mt-2 text-xs" onClick={() => setInputMode('type')}>
                          <PenTool className="h-3 w-3 mr-1" />
                          Passer en mode clavier
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Keyboard mode */}
            {inputMode === 'type' && (
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={typedAnswer}
                    onChange={(e) => setTypedAnswer(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && typedAnswer.trim() && handleTypedSubmit()}
                    placeholder="Tapez le mot en anglais..."
                    className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yoel-gold/50"
                    autoFocus
                  />
                  <Button
                    className="bg-yoel-gold hover:bg-yoel-gold/90 text-white rounded-xl"
                    onClick={handleTypedSubmit}
                    disabled={!typedAnswer.trim()}
                  >
                    Vérifier
                  </Button>
                </div>
              </div>
            )}

            {/* Result display */}
            {lastResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-xl border p-4 ${getConfidenceBg(lastResult.confidence)}`}
              >
                <div className="text-center space-y-2">
                  <p className={`text-sm font-semibold ${getConfidenceColor(lastResult.confidence)}`}>
                    {getConfidenceLabel(lastResult.confidence)}
                  </p>
                  <div className="flex items-center justify-center gap-3 text-sm">
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase">Vous avez dit</p>
                      <p className="font-medium">{lastResult.transcript || '—'}</p>
                    </div>
                    <div className="text-muted-foreground">→</div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase">Attendu</p>
                      <p className="font-medium">{item.word.toLowerCase()}</p>
                    </div>
                  </div>
                  <p className={`text-lg font-bold ${getConfidenceColor(lastResult.confidence)}`}>
                    {lastResult.confidence}%
                  </p>
                </div>
              </motion.div>
            )}

            {/* Action buttons */}
            <div className="flex justify-center gap-3">
              {lastResult && !lastResult.isCorrect && (
                <Button
                  variant="outline"
                  className="rounded-xl"
                  onClick={handleRetry}
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Réessayer
                </Button>
              )}
              {attemptCount >= 3 && !lastResult?.isCorrect && (
                <Button
                  variant="ghost"
                  className="rounded-xl text-muted-foreground"
                  onClick={handleSkip}
                >
                  <SkipForward className="h-4 w-4 mr-2" />
                  Passer
                </Button>
              )}
            </div>

            {/* Success auto-advance */}
            {lastResult?.isCorrect && (
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

            {/* Attempt counter */}
            {attemptCount > 0 && !lastResult?.isCorrect && (
              <p className="text-center text-xs text-muted-foreground">
                Essai{attemptCount > 1 ? 's' : ''} : {attemptCount}
              </p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

// ─── Lesson Quiz Step ─────────────────────────────────────────────────────────

interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

function generateQuizFromLesson(vocab: VocabWord[], grammar: GrammarRule): QuizQuestion[] {
  const questions: QuizQuestion[] = []

  // Generate 3 vocabulary questions: "What does [french word] mean in English?"
  const shuffledVocab = [...vocab].sort(() => Math.random() - 0.5)
  const vocabQuestions = shuffledVocab.slice(0, Math.min(3, shuffledVocab.length))

  for (const word of vocabQuestions) {
    // Create wrong options from other vocab words
    const otherWords = vocab.filter(w => w.english !== word.english)
    const wrongOptions = otherWords.sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.english)
    // If not enough wrong options, add generic ones
    while (wrongOptions.length < 3) {
      wrongOptions.push(['Yes', 'No', 'Maybe', 'Please', 'Thanks', 'Sorry'][wrongOptions.length])
    }
    const allOptions = [word.english, ...wrongOptions].sort(() => Math.random() - 0.5)
    questions.push({
      id: `vocab-${word.english}`,
      question: `Que signifie « ${word.french} » en anglais ?`,
      options: allOptions,
      correctIndex: allOptions.indexOf(word.english),
      explanation: `« ${word.french} » = « ${word.english} » (${word.phonetic})`,
    })
  }

  // Generate 2 grammar questions from the examples
  const correctExamples = grammar.examples.filter(e => e.isCorrect)
  const incorrectExamples = grammar.examples.filter(e => !e.isCorrect)

  // Question: "Which sentence is correct?"
  if (correctExamples.length > 0 || incorrectExamples.length > 0) {
    const allSentences = grammar.examples.slice(0, 4)
    if (allSentences.length >= 2) {
      const correctSentence = correctExamples[0]
      if (correctSentence) {
        const wrongSentences = allSentences.filter(e => e.sentence !== correctSentence.sentence).slice(0, 3).map(e => e.sentence)
        while (wrongSentences.length < 3) {
          wrongSentences.push('I are happy.')
        }
        const allOptions = [correctSentence.sentence, ...wrongSentences].sort(() => Math.random() - 0.5)
        questions.push({
          id: 'grammar-correct',
          question: 'Quelle phrase est correcte ?',
          options: allOptions,
          correctIndex: allOptions.indexOf(correctSentence.sentence),
          explanation: correctSentence.translation || grammar.title,
        })
      }
    }
  }

  // Question: "Which sentence contains an error?"
  if (incorrectExamples.length > 0) {
    const wrongSentence = incorrectExamples[0]
    const correctSentences = grammar.examples.filter(e => e.isCorrect).slice(0, 3).map(e => e.sentence)
    while (correctSentences.length < 3) {
      correctSentences.push('She is happy.')
    }
    const allOptions = [wrongSentence.sentence, ...correctSentences].sort(() => Math.random() - 0.5)
    questions.push({
      id: 'grammar-error',
      question: 'Quelle phrase contient une erreur ?',
      options: allOptions,
      correctIndex: allOptions.indexOf(wrongSentence.sentence),
      explanation: grammar.commonMistakes[0]?.explanation || `La phrase correcte est : ${grammar.commonMistakes[0]?.correct ?? ''}`,
    })
  }

  return questions.slice(0, 5) // Max 5 questions
}

function LessonQuizStep({
  vocab,
  grammar,
  onFinish,
}: {
  vocab: VocabWord[]
  grammar: GrammarRule
  onFinish: (score: number) => void
}) {
  const [questions] = useState<QuizQuestion[]>(() => generateQuizFromLesson(vocab, grammar))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)

  const currentQuestion = questions[currentIndex]

  const handleAnswer = (index: number) => {
    if (isAnswered) return
    setSelectedAnswer(index)
    setIsAnswered(true)
    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      // Quiz finished - calculate percentage score
      const lastAnswerCorrect = selectedAnswer === currentQuestion.correctIndex ? 1 : 0
      const totalCorrect = score + lastAnswerCorrect
      const finalScore = Math.round((totalCorrect / questions.length) * 100)
      onFinish(finalScore)
    }
  }

  // Calculate running score including current answer
  const currentScore = score + (isAnswered && selectedAnswer === currentQuestion.correctIndex ? 1 : 0)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      <motion.div variants={itemVariants} className="text-center">
        <Badge className="bg-yoel-gold/15 text-yoel-gold border-0 text-xs mb-2">
          <Sparkles className="h-3 w-3 mr-1" />
          Quiz de la leçon
        </Badge>
        <h2 className="text-2xl font-bold">Vérifiez vos connaissances</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Obtenez au moins 60% pour débloquer la leçon suivante
        </p>
      </motion.div>

      {/* Progress */}
      <motion.div variants={itemVariants} className="flex items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground">
          Question {currentIndex + 1}/{questions.length}
        </span>
        <Progress value={((currentIndex + 1) / questions.length) * 100} className="flex-1 h-2" />
        <div className="flex items-center gap-1 text-sm font-semibold text-yoel-green">
          <CheckCircle2 className="h-4 w-4" />
          {currentScore}/{questions.length}
        </div>
      </motion.div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-yoel-gold to-amber-400" />
            <CardContent className="p-6 space-y-5">
              <h3 className="text-lg font-semibold leading-relaxed">
                {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedAnswer === idx
                  const isCorrect = idx === currentQuestion.correctIndex

                  let optionClass = 'relative text-sm py-3 px-4 rounded-xl border-2 transition-all font-medium text-left'

                  if (isAnswered) {
                    if (isCorrect) {
                      optionClass += ' bg-yoel-green/15 border-yoel-green/50 text-yoel-green'
                    } else if (isSelected && !isCorrect) {
                      optionClass += ' bg-destructive/10 border-destructive/50 text-destructive'
                    } else {
                      optionClass += ' bg-muted/30 border-transparent text-muted-foreground'
                    }
                  } else {
                    optionClass += ' bg-background border-border hover:border-yoel-gold/40 hover:bg-yoel-gold/5 cursor-pointer active:scale-[0.98]'
                  }

                  return (
                    <motion.button
                      key={idx}
                      whileTap={!isAnswered ? { scale: 0.97 } : undefined}
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
                {isAnswered && (
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
                    {currentIndex < questions.length - 1 ? (
                      <>
                        Suivante
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Voir le résultat
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
    </motion.div>
  )
}

// ─── Lesson Completion Modal ──────────────────────────────────────────────────

function LessonCompletionModal({
  score,
  passingScore,
  lessonTitle,
  xpReward,
  duration,
  hasNextLesson,
  onRestart,
  onAdvance,
  onBackToList,
}: {
  score: number
  passingScore: number
  lessonTitle: string
  xpReward: number
  duration: number
  hasNextLesson: boolean
  onRestart: () => void
  onAdvance: () => void
  onBackToList: () => void
}) {
  const passed = score >= passingScore

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
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
          {/* Header gradient - different colors for pass/fail */}
          <div className={`p-8 text-center text-white ${
            passed
              ? 'bg-gradient-to-br from-yoel-green via-emerald-500 to-yoel-blue'
              : 'bg-gradient-to-br from-yoel-red via-rose-500 to-orange-500'
          }`}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              {passed ? (
                <Trophy className="h-16 w-16 mx-auto mb-4 drop-shadow-lg" />
              ) : (
                <RotateCcw className="h-16 w-16 mx-auto mb-4 drop-shadow-lg" />
              )}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold"
            >
              {passed ? 'Leçon réussie ! 🎉' : 'Pas encore... 💪'}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm opacity-90 mt-1"
            >
              {lessonTitle}
            </motion.p>
          </div>

          <CardContent className="p-6 space-y-4">
            {/* Score */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  passed ? 'bg-yoel-green/15' : 'bg-yoel-red/15'
                }`}>
                  {passed ? (
                    <CheckCircle2 className="h-5 w-5 text-yoel-green" />
                  ) : (
                    <XCircle className="h-5 w-5 text-yoel-red" />
                  )}
                </div>
                <span className="font-medium text-sm">Score</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-2xl font-bold ${passed ? 'text-yoel-green' : 'text-yoel-red'}`}>
                  {score}%
                </span>
                <span className="text-xs text-muted-foreground">
                  ({passingScore}% requis)
                </span>
              </div>
            </motion.div>

            {/* Score bar */}
            <div className="space-y-1">
              <div className="relative">
                <Progress value={score} className="h-3" />
                <div
                  className="absolute top-0 h-3 w-0.5 bg-foreground"
                  style={{ left: `${passingScore}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>0%</span>
                <span className="font-medium">Moyenne : {passingScore}%</span>
                <span>100%</span>
              </div>
            </div>

            <Separator />

            {/* XP Earned (only if passed) */}
            {passed && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yoel-gold/15">
                    <Zap className="h-5 w-5 text-yoel-gold" />
                  </div>
                  <span className="font-medium text-sm">XP gagnés</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold text-yoel-gold">+{xpReward}</span>
                  <span className="text-xs text-muted-foreground">XP</span>
                </div>
              </motion.div>
            )}

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className={`rounded-xl p-4 ${
                passed
                  ? 'bg-yoel-green/10 border border-yoel-green/20'
                  : 'bg-yoel-red/5 border border-yoel-red/20'
              }`}
            >
              <p className="text-sm font-medium">
                {passed
                  ? 'Félicitations ! Vous avez dépassé la moyenne. Vous pouvez passer à la leçon suivante !'
                  : 'Vous n\'avez pas atteint la moyenne. Révisez et recommencez pour progresser !'
                }
              </p>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-3 pt-2"
            >
              {passed && hasNextLesson ? (
                <>
                  <Button
                    variant="outline"
                    className="flex-1 rounded-xl"
                    onClick={onBackToList}
                  >
                    <List className="h-4 w-4 mr-1" />
                    Retour à la liste
                  </Button>
                  <Button
                    className="flex-1 rounded-xl bg-yoel-green hover:bg-yoel-green/90 text-white shadow-md shadow-yoel-green/20"
                    onClick={onAdvance}
                  >
                    Leçon suivante
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </>
              ) : passed && !hasNextLesson ? (
                <>
                  <Button
                    variant="outline"
                    className="flex-1 rounded-xl"
                    onClick={onRestart}
                  >
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Recommencer
                  </Button>
                  <Button
                    className="flex-1 rounded-xl bg-yoel-green hover:bg-yoel-green/90 text-white"
                    onClick={onBackToList}
                  >
                    <List className="h-4 w-4 mr-1" />
                    Retour aux leçons
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="flex-1 rounded-xl"
                    onClick={onBackToList}
                  >
                    <List className="h-4 w-4 mr-1" />
                    Retour à la liste
                  </Button>
                  <Button
                    className="flex-1 rounded-xl bg-yoel-red hover:bg-yoel-red-dark text-white shadow-md shadow-yoel-red/20"
                    onClick={onRestart}
                  >
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Recommencer
                  </Button>
                </>
              )}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
