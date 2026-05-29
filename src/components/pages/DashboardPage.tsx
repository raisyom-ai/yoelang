'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen, Dumbbell, MessageCircle, BarChart3,
  Moon, Sun, Bell, Flame, Coins, Star, ChevronRight,
  Volume2, Trophy, Clock, Target, Home, User, Settings,
  Zap, Award, Crown
} from 'lucide-react'
import { useAppStore, LEVELS, BADGES, DEMO_LESSONS, type PageId } from '@/lib/store'
import { speakWord } from '@/lib/speech-utils'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

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
    transition: { type: 'spring', stiffness: 260, damping: 24 },
  },
}

const pulseVariants = {
  pulse: {
    scale: [1, 1.12, 1],
    transition: { duration: 0.6, repeat: Infinity, repeatDelay: 2 },
  },
}

// ─── Demo Data ──────────────────────────────────────────────────────────────

const DAILY_XP_GOAL = 20
const DAILY_XP_EARNED = 12

// Défis journaliers rotatifs basés sur le jour de l'année
const DAILY_CHALLENGES = [
  { question: 'Traduisez : "She ___ to the store yesterday."', options: ['go', 'goes', 'went', 'going'], correctIndex: 2, xpReward: 25 },
  { question: 'Quel est le pluriel de "child" ?', options: ['Childs', 'Children', 'Childrens', 'Childes'], correctIndex: 1, xpReward: 25 },
  { question: 'Complétez : "I have been living here ___ 2010."', options: ['for', 'since', 'from', 'during'], correctIndex: 1, xpReward: 25 },
  { question: 'Quelle est la forme correcte ? "He ___ to music every night."', options: ['listen', 'listens', 'listening', 'listened'], correctIndex: 1, xpReward: 25 },
  { question: 'Traduisez : "Je voudrais une tasse de thé."', options: ['I would like a cup of tea', 'I want a glass of tea', 'I like a tea cup', 'I will have tea'], correctIndex: 0, xpReward: 25 },
  { question: 'Quel mot est un adjectif ?', options: ['Quickly', 'Beautiful', 'Running', 'Happiness'], correctIndex: 1, xpReward: 25 },
  { question: 'Complétez : "If I ___ rich, I would travel the world."', options: ['am', 'was', 'were', 'be'], correctIndex: 2, xpReward: 30 },
]

// Sélectionner le défi du jour basé sur la date
const getDailyChallenge = () => {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000)
  return DAILY_CHALLENGES[dayOfYear % DAILY_CHALLENGES.length]
}

const DAILY_CHALLENGE = { ...getDailyChallenge(), timeLimit: 60 }

const LEADERBOARD = [
  { rank: 1, name: 'Marie L.', xp: 4820, avatar: 'ML', isPremium: true },
  { rank: 2, name: 'Thomas R.', xp: 3650, avatar: 'TR', isPremium: false },
  { rank: 3, name: 'Sophie M.', xp: 2990, avatar: 'SM', isPremium: true },
]

const WORD_OF_THE_DAY = {
  english: 'Serendipity',
  french: 'Sérendipité',
  phonetic: '/ˌser.ənˈdɪp.ə.ti/',
  example: 'Finding that caf\u00e9 was pure serendipity.',
}

const WEEK_DAYS = [
  { day: 'Lun', completed: true, date: 10 },
  { day: 'Mar', completed: true, date: 11 },
  { day: 'Mer', completed: true, date: 12 },
  { day: 'Jeu', completed: true, date: 13 },
  { day: 'Ven', completed: true, date: 14 },
  { day: 'Sam', completed: false, date: 15 },
  { day: 'Dim', completed: false, date: 16 },
]

// ─── Circular Progress Ring ─────────────────────────────────────────────────

function CircularProgress({
  value,
  max,
  size = 120,
  strokeWidth = 8,
  className = '',
}: {
  value: number
  max: number
  size?: number
  strokeWidth?: number
  className?: string
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const progress = Math.min(value / max, 1)
  const offset = circumference - progress * circumference
  const center = size / 2

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted/30"
        />
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.55 0.22 25)" />
            <stop offset="100%" stopColor="oklch(0.80 0.15 85)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <motion.span
          className="text-2xl font-bold gradient-text-red"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: 'spring' }}
        >
          {value}
        </motion.span>
        <span className="text-xs text-muted-foreground">/ {max} XP</span>
      </div>
    </div>
  )
}

// ─── Quick Action Button ────────────────────────────────────────────────────

function QuickAction({
  icon: Icon,
  label,
  color,
  onClick,
}: {
  icon: React.ElementType
  label: string
  color: string
  onClick: () => void
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-2 rounded-2xl p-4 glass transition-colors hover:bg-yoel-red/5 dark:hover:bg-yoel-red/10 cursor-pointer min-h-[100px]"
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} shadow-md`}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>
      <span className="text-sm font-medium">{label}</span>
    </motion.button>
  )
}

// ─── Bottom Nav Item ────────────────────────────────────────────────────────

function BottomNavItem({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: React.ElementType
  label: string
  active?: boolean
  onClick: () => void
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-0.5 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
        active
          ? 'text-yoel-red'
          : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      <Icon className="h-5 w-5" />
      <span className="text-[10px] font-medium">{label}</span>
      {active && (
        <motion.div
          layoutId="bottomNavIndicator"
          className="h-0.5 w-4 rounded-full bg-yoel-red mt-0.5"
        />
      )}
    </motion.button>
  )
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function DashboardPage() {
  const { user, isDarkMode, toggleDarkMode, navigate, currentLesson, dailyChallengeCompleted, completeDailyChallenge, addXP } = useAppStore()

  // Derive data with fallbacks
  const displayName = user?.name ?? 'Apprenant'
  const streak = user?.streak ?? 7
  const coins = user?.coins ?? 350
  const xp = user?.xp ?? 1250
  const level = user?.level ?? 'A1'
  const isPremium = user?.isPremium ?? false

  // Current level info
  const currentLevelInfo = LEVELS.find((l) => l.code === level) ?? LEVELS[0]

  // Next lesson to continue
  const nextLesson = currentLesson ?? DEMO_LESSONS.find((l) => !l.completed) ?? DEMO_LESSONS[3]

  // Daily challenge state
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [challengeTime, setChallengeTime] = useState(DAILY_CHALLENGE.timeLimit)
  const [challengeAnswered, setChallengeAnswered] = useState(dailyChallengeCompleted)

  useEffect(() => {
    if (challengeAnswered) return
    const timer = setInterval(() => {
      setChallengeTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setChallengeAnswered(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [challengeAnswered])

  const handleChallengeAnswer = (index: number) => {
    if (challengeAnswered) return
    setSelectedOption(index)
    setChallengeAnswered(true)
    if (index === DAILY_CHALLENGE.correctIndex) {
      addXP(DAILY_CHALLENGE.xpReward)
      completeDailyChallenge()
    }
  }

  // Earned badges (first 5)
  const earnedBadges = BADGES.filter((b) => b.earnedAt).slice(0, 5)

  // Level progress
  const levelProgress = currentLevelInfo.progress

  // XP to next level (simple calc)
  const xpForCurrentLevel = xp % 500
  const xpForNextLevel = 500

  // Greeting based on time
  const hour = new Date().getHours()
  const greeting =
    hour < 12 ? 'Bonjour' : hour < 18 ? 'Bon apr\u00e8s-midi' : 'Bonsoir'

  return (
    <div className="min-h-screen bg-background pb-24 lg:pb-8">
      <motion.div
        className="mx-auto max-w-4xl space-y-6 p-4 lg:p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ─── 1. Top Bar ─────────────────────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3 min-w-0">
            <Avatar className="h-11 w-11 ring-2 ring-yoel-red/30">
              <AvatarImage src={user?.avatar ?? undefined} alt={displayName} />
              <AvatarFallback className="bg-yoel-red/10 text-yoel-red font-semibold text-sm">
                {displayName
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground truncate">
                {greeting} 👋
              </p>
              <p className="font-semibold truncate gradient-text-red text-lg">
                {displayName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Streak */}
            <motion.div
              variants={pulseVariants}
              animate="pulse"
              className="flex items-center gap-1 rounded-full bg-orange-500/10 px-2.5 py-1.5"
            >
              <Flame className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                {streak}
              </span>
            </motion.div>

            {/* Coins */}
            <div className="flex items-center gap-1 rounded-full bg-yoel-gold/10 px-2.5 py-1.5">
              <Coins className="h-4 w-4 text-yoel-gold" />
              <span className="text-sm font-semibold text-yoel-gold">{coins}</span>
            </div>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="relative h-9 w-9"
              onClick={() => navigate('settings')}
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-yoel-red ring-2 ring-background" />
            </Button>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={toggleDarkMode}
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-4 w-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </motion.div>

        {/* XP Progress Bar */}
        <motion.div variants={itemVariants} className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                {level}
              </Badge>
              <span className="text-muted-foreground">
                {currentLevelInfo.name}
              </span>
            </div>
            <span className="text-muted-foreground">
              {xpForCurrentLevel} / {xpForNextLevel} XP
            </span>
          </div>
          <Progress value={(xpForCurrentLevel / xpForNextLevel) * 100} className="h-2" />
        </motion.div>

        {/* ─── 2. Daily Goal Card ─────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass overflow-hidden border-0">
            <CardContent className="flex flex-col sm:flex-row items-center gap-6 p-6">
              <CircularProgress
                value={DAILY_XP_EARNED}
                max={DAILY_XP_GOAL}
                size={130}
                strokeWidth={10}
              />
              <div className="flex-1 text-center sm:text-left space-y-2">
                <h3 className="text-lg font-semibold">
                  Objectif du jour
                </h3>
                <p className="text-muted-foreground text-sm">
                  {DAILY_XP_EARNED >= DAILY_XP_GOAL
                    ? '🎉 Bravo ! Objectif atteint !'
                    : `Encore ${DAILY_XP_GOAL - DAILY_XP_EARNED} XP pour atteindre votre objectif !`}
                </p>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Target className="h-4 w-4 text-yoel-red" />
                  <span className="text-sm font-medium text-yoel-red">
                    {Math.round((DAILY_XP_EARNED / DAILY_XP_GOAL) * 100)}%
                    compl\u00e9t\u00e9
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── 3. Continue Learning Card ──────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card
            className="overflow-hidden cursor-pointer group border-0 glass"
            onClick={() => navigate('course')}
          >
            <div className="relative">
              {/* Accent bar */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-yoel-red to-yoel-gold rounded-l-xl" />
              <CardContent className="flex items-center gap-4 p-5 pl-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-yoel-red/20 to-yoel-gold/20 overflow-hidden">
                  <img src="/practice-english.png" alt="Practice" className="h-14 w-14 object-cover rounded-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Continuer l&apos;apprentissage
                  </p>
                  <h3 className="font-semibold truncate mt-0.5">
                    {nextLesson.title}
                  </h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {nextLesson.description}
                  </p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Zap className="h-3 w-3 text-yoel-gold" />
                      {nextLesson.xpReward} XP
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {nextLesson.duration} min
                    </span>
                  </div>
                </div>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="shrink-0"
                >
                  <Button
                    size="sm"
                    className="bg-yoel-red hover:bg-yoel-red-dark text-white rounded-full"
                  >
                    Continuer
                    <ChevronRight className="h-4 w-4 ml-0.5" />
                  </Button>
                </motion.div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* ─── 4. Quick Actions Grid ──────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <QuickAction
              icon={BookOpen}
              label="Leçons"
              color="from-yoel-red to-yoel-red-dark"
              onClick={() => navigate('levels')}
            />
            <QuickAction
              icon={Dumbbell}
              label="Exercices"
              color="from-yoel-green to-emerald-700"
              onClick={() => navigate('exercises')}
            />
            <QuickAction
              icon={MessageCircle}
              label="Chat IA"
              color="from-yoel-blue to-yoel-blue-dark"
              onClick={() => navigate('chat')}
            />
            <QuickAction
              icon={BarChart3}
              label="Statistiques"
              color="from-yoel-gold to-amber-700"
              onClick={() => navigate('stats')}
            />
          </div>
        </motion.div>

        {/* ─── 5 & 6. Daily Challenge + Streak Calendar ───────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Daily Challenge */}
          <motion.div variants={itemVariants}>
            <Card className="glass overflow-hidden border-0 h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yoel-gold" />
                    D\u00e9fi du jour
                  </CardTitle>
                  <Badge className="bg-yoel-gold/15 text-yoel-gold border-0">
                    +{DAILY_CHALLENGE.xpReward} XP
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-medium text-sm">
                  {DAILY_CHALLENGE.question}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {DAILY_CHALLENGE.options.map((option, idx) => {
                    const isSelected = selectedOption === idx
                    const isCorrect = idx === DAILY_CHALLENGE.correctIndex
                    let btnClass =
                      'text-sm py-2 rounded-xl border transition-all font-medium'

                    if (challengeAnswered) {
                      if (isCorrect) {
                        btnClass +=
                          ' bg-yoel-green/20 border-yoel-green/40 text-yoel-green'
                      } else if (isSelected && !isCorrect) {
                        btnClass +=
                          ' bg-destructive/15 border-destructive/40 text-destructive'
                      } else {
                        btnClass +=
                          ' bg-muted/50 border-muted text-muted-foreground'
                      }
                    } else {
                      btnClass +=
                        ' bg-background border-border hover:border-yoel-red/50 hover:bg-yoel-red/5 cursor-pointer'
                    }

                    return (
                      <motion.button
                        key={idx}
                        whileTap={!challengeAnswered ? { scale: 0.95 } : undefined}
                        onClick={() => handleChallengeAnswer(idx)}
                        disabled={challengeAnswered}
                        className={btnClass}
                      >
                        {option}
                      </motion.button>
                    )
                  })}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {challengeTime > 0
                      ? `${Math.floor(challengeTime / 60)}:${(challengeTime % 60)
                          .toString()
                          .padStart(2, '0')}`
                      : 'Temps \u00e9coul\u00e9'}
                  </span>
                  {challengeAnswered && (
                    <span
                      className={
                        selectedOption === DAILY_CHALLENGE.correctIndex
                          ? 'text-yoel-green font-medium'
                          : 'text-destructive font-medium'
                      }
                    >
                      {selectedOption === DAILY_CHALLENGE.correctIndex
                        ? '✓ Correct !'
                        : '✗ Incorrect'}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Streak Calendar */}
          <motion.div variants={itemVariants}>
            <Card className="glass overflow-hidden border-0 h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Flame className="h-5 w-5 text-orange-500" />
                  S\u00e9rie de {streak} jours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-7 gap-2">
                  {WEEK_DAYS.map((d, idx) => (
                    <motion.div
                      key={d.day}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.06, type: 'spring' }}
                      className={`flex flex-col items-center gap-1 rounded-xl py-2 px-1 transition-colors ${
                        d.completed
                          ? 'bg-gradient-to-b from-orange-500/20 to-orange-600/10 border border-orange-500/20'
                          : 'bg-muted/40 border border-transparent'
                      }`}
                    >
                      <span className="text-[10px] text-muted-foreground font-medium">
                        {d.day}
                      </span>
                      <span className="text-sm font-semibold">
                        {d.completed ? '🔥' : d.date}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Continuez votre s\u00e9rie !
                  </span>
                  <Badge
                    variant="outline"
                    className="text-orange-500 border-orange-500/30 text-[10px]"
                  >
                    🔥 {streak} jours
                  </Badge>
                </div>

                {isPremium && (
                  <div className="mt-2 rounded-lg bg-yoel-gold/10 p-2 text-center">
                    <span className="text-xs gradient-text-premium font-semibold">
                      👑 R\u00e9compense x2 avec Premium
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* ─── 7. Recent Badges ───────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass overflow-hidden border-0">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <Award className="h-5 w-5 text-yoel-red" />
                  Badges r\u00e9cents
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-muted-foreground"
                  onClick={() => navigate('profile')}
                >
                  Voir tout
                  <ChevronRight className="h-3 w-3" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                {earnedBadges.map((badge, idx) => (
                  <motion.div
                    key={badge.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex flex-col items-center gap-1.5 min-w-[72px] shrink-0"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yoel-red/10 to-yoel-gold/10 border border-yoel-red/10 text-2xl">
                      {badge.icon}
                    </div>
                    <span className="text-[10px] text-muted-foreground text-center leading-tight font-medium">
                      {badge.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── 8 & 9. Leaderboard + Word of the Day ──────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Leaderboard */}
          <motion.div variants={itemVariants}>
            <Card className="glass overflow-hidden border-0 h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yoel-gold" />
                    Classement
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-muted-foreground"
                    onClick={() => navigate('stats')}
                  >
                    D\u00e9tails
                    <ChevronRight className="h-3 w-3" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                {LEADERBOARD.map((player, idx) => (
                  <motion.div
                    key={player.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-center gap-3 rounded-xl bg-muted/30 p-3 transition-colors hover:bg-muted/50"
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full font-bold text-sm ${
                        player.rank === 1
                          ? 'bg-yoel-gold/20 text-yoel-gold'
                          : player.rank === 2
                          ? 'bg-gray-400/20 text-gray-500'
                          : 'bg-amber-700/20 text-amber-700'
                      }`}
                    >
                      {player.rank === 1 ? (
                        <Crown className="h-4 w-4" />
                      ) : (
                        player.rank
                      )}
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs font-semibold bg-yoel-blue/10 text-yoel-blue">
                        {player.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate flex items-center gap-1">
                        {player.name}
                        {player.isPremium && (
                          <Star className="h-3 w-3 text-yoel-gold fill-yoel-gold" />
                        )}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">
                      {player.xp.toLocaleString()} XP
                    </span>
                  </motion.div>
                ))}

                {/* Current user rank hint */}
                <Separator />
                <div className="flex items-center gap-3 rounded-xl bg-yoel-red/5 p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yoel-red/10 font-bold text-sm text-yoel-red">
                    12
                  </div>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs font-semibold bg-yoel-red/10 text-yoel-red">
                      {displayName
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .toUpperCase()
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{displayName} (vous)</p>
                  </div>
                  <span className="text-sm font-semibold text-yoel-red">
                    {xp.toLocaleString()} XP
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Word of the Day */}
          <motion.div variants={itemVariants}>
            <Card className="glass overflow-hidden border-0 h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Star className="h-5 w-5 text-yoel-gold" />
                  Mot du jour
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold gradient-text-blue">
                    {WORD_OF_THE_DAY.english}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {WORD_OF_THE_DAY.french}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {WORD_OF_THE_DAY.phonetic}
                  </p>
                </div>

                <Separator />

                <div className="rounded-xl bg-muted/40 p-3">
                  <p className="text-sm italic text-muted-foreground">
                    &ldquo;{WORD_OF_THE_DAY.example}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                    onClick={() => {
                      speakWord(WORD_OF_THE_DAY.english)
                    }}
                  >
                    <Volume2 className="h-4 w-4 mr-1" />
                    \u00c9couter
                  </Button>
                  <Badge
                    variant="outline"
                    className="text-yoel-green border-yoel-green/30"
                  >
                    +5 XP
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Premium Upsell Banner (only if not premium) */}
        {!isPremium && (
          <motion.div variants={itemVariants}>
            <Card
              className="overflow-hidden border-0 cursor-pointer bg-gradient-to-r from-yoel-red/10 via-yoel-gold/10 to-yoel-blue/10"
              onClick={() => navigate('premium')}
            >
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yoel-red to-yoel-gold text-white text-xl">
                  👑
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold gradient-text-premium">
                    Passez \u00e0 Premium
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    XP x2, pas de publicit\u00e9s, et plus encore !
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Level Progress Overview */}
        <motion.div variants={itemVariants}>
          <Card className="glass overflow-hidden border-0">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <Star className="h-5 w-5 text-yoel-red" />
                  Progression par niveau
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-muted-foreground"
                  onClick={() => navigate('levels')}
                >
                  Tous les niveaux
                  <ChevronRight className="h-3 w-3" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {LEVELS.slice(0, 3).map((lvl, idx) => (
                <div key={lvl.code} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <span>{lvl.icon}</span>
                      <span className="font-medium">
                        {lvl.code} - {lvl.name}
                      </span>
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {lvl.completedUnits}/{lvl.units} unit\u00e9s
                    </span>
                  </div>
                  <Progress value={lvl.progress} className="h-1.5" />
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* ─── 10. Bottom Navigation Bar (Mobile) ──────────────────────── */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 25 }}
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
      >
        <div className="mx-auto max-w-md">
          <div className="glass mx-3 mb-3 flex items-center justify-around rounded-2xl border border-border/50 py-1.5 shadow-lg">
            <BottomNavItem
              icon={Home}
              label="Accueil"
              active={true}
              onClick={() => navigate('dashboard')}
            />
            <BottomNavItem
              icon={BookOpen}
              label="Leçons"
              onClick={() => navigate('levels')}
            />
            <BottomNavItem
              icon={MessageCircle}
              label="Chat"
              onClick={() => navigate('chat')}
            />
            <BottomNavItem
              icon={BarChart3}
              label="Stats"
              onClick={() => navigate('stats')}
            />
            <BottomNavItem
              icon={User}
              label="Profil"
              onClick={() => navigate('profile')}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
