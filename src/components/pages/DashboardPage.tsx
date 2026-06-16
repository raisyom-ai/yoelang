'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, BookOpen, Dumbbell, MessageCircle, BarChart3,
  Moon, Sun, Bell, Flame, Coins, Star, ChevronRight,
  Volume2, Trophy, Clock, Target, Home, User, Settings,
  Zap, Award, Crown, ChevronDown, CheckCircle, ShoppingBag,
  Trophy as TrophyIcon, Swords
} from 'lucide-react'
import { useAppStore, getLevelsForUser, BADGES, getRecommendedDailyGoal, calculateStreak, getWeekActivity, type PageId } from '@/lib/store'
import { toast } from 'sonner'
import { getLessonContent, type VocabWord, type GrammarRule } from '@/lib/lesson-content'
import { speakWord } from '@/lib/speech-utils'
import UserSessionWidget from '@/components/UserSessionWidget'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

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

const pulseVariants = {
  pulse: {
    scale: [1, 1.12, 1],
    transition: { duration: 0.6, repeat: Infinity, repeatDelay: 2 },
  },
}

// ─── API Data Types ──────────────────────────────────────────────────────────

// Challenges from /api/challenges
interface ApiChallenge {
  id: string
  question: string
  options: string[]
  correctIndex: number
  xpReward: number
  type: 'grammar' | 'vocabulary' | 'translation' | 'conjugaison'
}

interface ChallengeState {
  status: 'unanswered' | 'correct' | 'wrong'
  selectedIndex: number | null
  xpEarned?: number
  correctIndex?: number
}

// Leaderboard from /api/leaderboard
interface LeaderboardEntry {
  rank: number
  name: string
  avatar: string | null
  level: string
  xp: number
  isPremium: boolean
  streak: number
  userId: string
  lessonsCompleted: number
  challengesCompleted: number
  lastActiveAt: string | null
}

const TYPE_LABELS: Record<string, string> = {
  grammar: 'Grammaire',
  vocabulary: 'Vocabulaire',
  translation: 'Traduction',
  conjugaison: 'Conjugaison',
}

const TYPE_COLORS: Record<string, string> = {
  grammar: 'bg-yoel-primary/10 text-yoel-primary',
  vocabulary: 'bg-yoel-green/10 text-yoel-green',
  translation: 'bg-yoel-blue/10 text-yoel-blue',
  conjugaison: 'bg-yoel-gold/10 text-yoel-gold',
}

// ─── Old CHALLENGE_POOL & LEADERBOARD removed — now uses /api/challenges & /api/leaderboard ──


// ─── Word of the Day — Different word every day, level-adapted ──────────────

interface WordEntry {
  english: string
  french: string
  phonetic: string
  example: string
  level: string   // minimum CEFR level for this word
}

const WORD_POOL: WordEntry[] = [
  // A1 words
  { english: 'Hello', french: 'Bonjour', phonetic: '/həˈloʊ/', example: 'Hello, how are you today?', level: 'A1' },
  { english: 'Friend', french: 'Ami(e)', phonetic: '/frɛnd/', example: 'She is my best friend.', level: 'A1' },
  { english: 'Water', french: 'Eau', phonetic: '/ˈwɔːtər/', example: 'Can I have a glass of water?', level: 'A1' },
  { english: 'Book', french: 'Livre', phonetic: '/bʊk/', example: 'I am reading a good book.', level: 'A1' },
  { english: 'Happy', french: 'Heureux/Heureuse', phonetic: '/ˈhæpi/', example: 'I feel very happy today.', level: 'A1' },
  { english: 'Family', french: 'Famille', phonetic: '/ˈfæməli/', example: 'My family lives in Paris.', level: 'A1' },
  { english: 'Morning', french: 'Matin', phonetic: '/ˈmɔːrnɪŋ/', example: 'Good morning, everyone!', level: 'A1' },
  { english: 'Beautiful', french: 'Beau/Belle', phonetic: '/ˈbjuːtɪfəl/', example: 'What a beautiful day!', level: 'A1' },
  { english: 'Journey', french: 'Voyage', phonetic: '/ˈdʒɜːrni/', example: 'It was a long journey.', level: 'A1' },
  { english: 'Together', french: 'Ensemble', phonetic: '/təˈɡɛðər/', example: 'Let us work together.', level: 'A1' },
  // A2 words
  { english: 'Schedule', french: 'Emploi du temps', phonetic: '/ˈskɛdjuːl/', example: 'My schedule is very busy this week.', level: 'A2' },
  { english: 'Weather', french: 'Météo', phonetic: '/ˈwɛðər/', example: 'The weather is lovely today.', level: 'A2' },
  { english: 'Advice', french: 'Conseil', phonetic: '/ədˈvaɪs/', example: 'Can you give me some advice?', level: 'A2' },
  { english: 'Comfortable', french: 'Confortable', phonetic: '/ˈkʌmfərtəbəl/', example: 'This sofa is very comfortable.', level: 'A2' },
  { english: 'Celebrate', french: 'Célébrer', phonetic: '/ˈsɛləbreɪt/', example: 'We celebrate his birthday tomorrow.', level: 'A2' },
  { english: 'Improve', french: 'Améliorer', phonetic: '/ɪmˈpruːv/', example: 'I want to improve my English.', level: 'A2' },
  { english: 'Neighbour', french: 'Voisin(e)', phonetic: '/ˈneɪbər/', example: 'Our neighbour is very friendly.', level: 'A2' },
  { english: 'Prepare', french: 'Préparer', phonetic: '/prɪˈpɛər/', example: 'I need to prepare dinner.', level: 'A2' },
  { english: 'Discover', french: 'Découvrir', phonetic: '/dɪsˈkʌvər/', example: 'She discovered a hidden talent.', level: 'A2' },
  { english: 'Explain', french: 'Expliquer', phonetic: '/ɪkˈspleɪn/', example: 'Can you explain this to me?', level: 'A2' },
  // B1 words
  { english: 'Achieve', french: 'Accomplir', phonetic: '/əˈtʃiːv/', example: 'She achieved her goals through hard work.', level: 'B1' },
  { english: 'Significant', french: 'Significatif', phonetic: '/sɪɡˈnɪfɪkənt/', example: 'This is a significant improvement.', level: 'B1' },
  { english: 'Persuade', french: 'Persuader', phonetic: '/pərˈsweɪd/', example: 'He persuaded me to change my mind.', level: 'B1' },
  { english: 'Resilient', french: 'Résilient', phonetic: '/rɪˈzɪliənt/', example: 'Children are often very resilient.', level: 'B1' },
  { english: 'Exhausted', french: 'Épuisé', phonetic: '/ɪɡˈzɔːstɪd/', example: 'I am completely exhausted after the marathon.', level: 'B1' },
  { english: 'Compromise', french: 'Compromis', phonetic: '/ˈkɒmprəmaɪz/', example: 'We need to find a compromise.', level: 'B1' },
  { english: 'Enthusiasm', french: 'Enthousiasme', phonetic: '/ɪnˈθjuːziæzəm/', example: 'She showed great enthusiasm for the project.', level: 'B1' },
  { english: 'Investigate', french: 'Enquêter', phonetic: '/ɪnˈvɛstɪɡeɪt/', example: 'The police are investigating the crime.', level: 'B1' },
  { english: 'Overwhelming', french: 'Accablant', phonetic: '/ˌoʊvərˈwɛlmɪŋ/', example: 'The response was overwhelming.', level: 'B1' },
  { english: 'Grateful', french: 'Reconnaissant', phonetic: '/ˈɡreɪtfəl/', example: 'I am grateful for your help.', level: 'B1' },
  // B2 words
  { english: 'Serendipity', french: 'Sérendipité', phonetic: '/ˌser.ənˈdɪp.ə.ti/', example: 'Finding that café was pure serendipity.', level: 'B2' },
  { english: 'Undermine', french: 'Saper', phonetic: '/ˌʌndərˈmaɪn/', example: 'His comments undermined her confidence.', level: 'B2' },
  { english: 'Pragmatic', french: 'Pragmatique', phonetic: '/præɡˈmætɪk/', example: 'We need a pragmatic approach to this problem.', level: 'B2' },
  { english: 'Resilient', french: 'Résilient', phonetic: '/rɪˈzɪliənt/', example: 'The economy proved resilient after the crisis.', level: 'B2' },
  { english: 'Nuance', french: 'Nuance', phonetic: '/ˈnjuːɑːns/', example: 'There are many nuances in this translation.', level: 'B2' },
  { english: 'Unprecedented', french: 'Sans précédent', phonetic: '/ʌnˈprɛsɪdɛntɪd/', example: 'The situation is unprecedented in modern history.', level: 'B2' },
  { english: 'Ambiguous', french: 'Ambigu', phonetic: '/æmˈbɪɡjuəs/', example: 'The statement was deliberately ambiguous.', level: 'B2' },
  { english: 'Scrutinize', french: 'Examiner minutieusement', phonetic: '/ˈskruːtənaɪz/', example: 'The committee will scrutinize every detail.', level: 'B2' },
  { english: 'Inevitable', french: 'Inévitable', phonetic: '/ɪnˈɛvɪtəbəl/', example: 'Change is inevitable in any organization.', level: 'B2' },
  { english: 'Comprehensive', french: 'Exhaustif', phonetic: '/ˌkɒmprɪˈhɛnsɪv/', example: 'We need a comprehensive review of the policy.', level: 'B2' },
  // C1 words
  { english: 'Corroborate', french: 'Confirmer', phonetic: '/kəˈrɒbəreɪt/', example: 'The witness corroborated his testimony.', level: 'C1' },
  { english: 'Sophistry', french: 'Sophisme', phonetic: '/ˈsɒfɪstri/', example: 'His argument was mere sophistry.', level: 'C1' },
  { english: 'Prescient', french: 'Prévoyant', phonetic: '/ˈprɛsiənt/', example: 'Her prescient analysis predicted the crisis.', level: 'C1' },
  { english: 'Obfuscate', french: 'Obscurcir', phonetic: '/ˈɒbfʌskeɪt/', example: 'The jargon obfuscated the real issue.', level: 'C1' },
  { english: 'Juxtapose', french: 'Juxtaposer', phonetic: '/ˌdʒʌkstəˈpoʊz/', example: 'The artist juxtaposes light and darkness.', level: 'C1' },
  { english: 'Vindicate', french: 'Justifier', phonetic: '/ˈvɪndɪkeɪt/', example: 'The evidence vindicated her claims.', level: 'C1' },
  { english: 'Paradigm', french: 'Paradigme', phonetic: '/ˈpærədaɪm/', example: 'This represents a paradigm shift in our thinking.', level: 'C1' },
  { english: 'Ephemeral', french: 'Éphémère', phonetic: '/ɪˈfɛmərəl/', example: 'Beauty is ephemeral but art endures.', level: 'C1' },
  // C2 words
  { english: 'Exegesis', french: 'Exégèse', phonetic: '/ˌɛksɪˈdʒiːsɪs/', example: 'The exegesis of this text requires deep knowledge.', level: 'C2' },
  { english: 'Obfuscate', french: 'Obscurcir', phonetic: '/ˈɒbfʌskeɪt/', example: 'Politicians often obfuscate the truth.', level: 'C2' },
  { english: 'Renege', french: 'Renoncer', phonetic: '/rɪˈniːɡ/', example: 'He reneged on his promise.', level: 'C2' },
  { english: 'Preponderance', french: 'Prépondérance', phonetic: '/prɪˈpɒndərəns/', example: 'The preponderance of evidence supports this view.', level: 'C2' },
  { english: 'Incumbent', french: 'Incombant', phonetic: '/ɪnˈkʌmbənt/', example: 'It is incumbent upon us to act responsibly.', level: 'C2' },
  { english: 'Recalcitrant', french: 'Rétif', phonetic: '/rɪˈkælsɪtrənt/', example: 'The recalcitrant student refused to cooperate.', level: 'C2' },
]

const LEVEL_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

/**
 * Get a different word every day, adapted to the learner's level.
 * Uses day-of-year as seed so the word changes daily but stays consistent within a day.
 * Only picks words at or below the learner's level.
 */
const getWordOfTheDay = (level: string): WordEntry => {
  const levelIdx = LEVEL_ORDER.indexOf(level)
  // Filter words appropriate for this level (same level or below)
  const availableWords = WORD_POOL.filter(
    (w) => LEVEL_ORDER.indexOf(w.level) <= levelIdx
  )

  if (availableWords.length === 0) return WORD_POOL[0]

  // Use day-of-year as seed for daily rotation
  const now = new Date()
  const startOfYear = new Date(now.getFullYear(), 0, 0)
  const dayOfYear = Math.floor(
    (now.getTime() - startOfYear.getTime()) / 86400000
  )

  // Deterministic selection based on the day
  const idx = dayOfYear % availableWords.length
  return availableWords[idx]
}

// ─── Circular Progress Ring ─────────────────────────────────────────────────

function CircularProgress({
  value,
  max,
  size = 120,
  strokeWidth = 8,
  className = '',
  compact = false,
}: {
  value: number
  max: number
  size?: number
  strokeWidth?: number
  className?: string
  compact?: boolean
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
          transition={{ duration: 1.2, ease: 'easeOut' as const, delay: 0.5 }}
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
          className={`${compact ? 'text-base' : 'text-lg sm:text-2xl'} font-bold gradient-text-primary`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: 'spring' }}
        >
          {value}
        </motion.span>
        <span className={`${compact ? 'text-[8px]' : 'text-[10px] sm:text-xs'} text-muted-foreground`}>/ {max} XP</span>
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
      className="flex flex-col items-center justify-center gap-1 sm:gap-2 rounded-2xl p-2 sm:p-4 glass-card transition-colors hover:bg-yoel-primary/5 dark:hover:bg-yoel-primary/10 cursor-pointer min-h-[72px] sm:min-h-[100px]"
    >
      <div
        className={`flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} shadow-md`}
      >
        <Icon className="h-4.5 w-4.5 sm:h-6 sm:w-6 text-white" />
      </div>
      <span className="text-[11px] sm:text-sm font-medium leading-tight">{label}</span>
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
      className={`flex flex-col items-center justify-center gap-0.5 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
        active
          ? 'text-yoel-primary'
          : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      <Icon className="h-4.5 w-4.5" />
      <span className="text-[9px] font-medium leading-tight">{label}</span>
      {active && (
        <motion.div
          layoutId="bottomNavIndicator"
          className="h-0.5 w-4 rounded-full bg-yoel-primary mt-0.5"
        />
      )}
    </motion.button>
  )
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function DashboardPage() {
  const { user, isDarkMode, toggleDarkMode, navigate, currentLesson, lastVisitedLesson, dailyXpEarned, dailyXpHistory, earnedBadges: earnedBadgeIds, completedLessons } = useAppStore()

  // Derive data with fallbacks
  const displayName = user?.name ?? 'Apprenant'
  const coins = user?.coins ?? 0
  const xp = user?.xp ?? 0
  const level = user?.level ?? 'A1'
  const isPremium = user?.isPremium ?? false

  // Compute dynamic level progress from actual completed lessons
  const LEVELS = useMemo(() => getLevelsForUser(completedLessons), [completedLessons])

  // Current level info
  const currentLevelInfo = LEVELS.find((l) => l.code === level) ?? LEVELS[0]

  // Dynamic daily goal based on learner PERFORMANCE
  // If dailyGoal is 0 (auto), compute from XP history, level & progress; otherwise use manual value
  const recommendedGoal = getRecommendedDailyGoal(level, currentLevelInfo.progress, dailyXpHistory)
  const effectiveDailyGoal = user?.dailyGoal && user.dailyGoal > 0 ? user.dailyGoal : recommendedGoal

  // Dynamic streak — calculated from actual XP history, NOT the static DB value
  const streak = calculateStreak(dailyXpHistory, dailyXpEarned)

  // Dynamic week calendar — based on actual activity data
  const weekDays = getWeekActivity(dailyXpHistory, dailyXpEarned, effectiveDailyGoal)

  // Word of the day — different every day, adapted to level
  const wordOfTheDay = getWordOfTheDay(level)

  // Last visited lesson content — only what the learner actually studied before leaving
  const lastVisitedContent = lastVisitedLesson ? getLessonContent(lastVisitedLesson.id) : null
  const learnedVocab: VocabWord[] = lastVisitedContent?.vocab?.slice(0, 4) ?? []
  const learnedGrammar: GrammarRule | null = lastVisitedContent?.grammar ?? null

  // ─── API-backed Daily Challenges ─────────────────────────────────────────
  const [apiChallenges, setApiChallenges] = useState<ApiChallenge[]>([])
  const [completedIds, setCompletedIds] = useState<string[]>([])
  const [challengeStates, setChallengeStates] = useState<Record<string, ChallengeState>>({})
  const [currentChallengeIdx, setCurrentChallengeIdx] = useState(0)
  const [submittingChallengeId, setSubmittingChallengeId] = useState<string | null>(null)
  const todayChallenges = apiChallenges
  const currentChallenge = todayChallenges[currentChallengeIdx]
  const completedCount = completedIds.length
  const allChallengesDone = completedCount === todayChallenges.length && todayChallenges.length > 0

  // Collapsible "more content" section (collapsed by default on mobile)
  const [moreOpen, setMoreOpen] = useState(false)

  // Fetch challenges from API
  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const userId = user?.id
        const params = userId ? `?userId=${userId}` : ''
        const res = await fetch(`/api/challenges${params}`)
        if (!res.ok) return
        const data = await res.json()
        if (data.success) {
          setApiChallenges(data.challenges)
          setCompletedIds(data.completedIds)
          // Initialize states: 'correct' for completed, 'unanswered' for the rest
          const initialStates: Record<string, ChallengeState> = {}
          data.challenges.forEach((c: ApiChallenge) => {
            if (data.completedIds.includes(c.id)) {
              initialStates[c.id] = { status: 'correct', selectedIndex: c.correctIndex, xpEarned: c.xpReward }
            } else {
              initialStates[c.id] = { status: 'unanswered', selectedIndex: null }
            }
          })
          setChallengeStates(initialStates)
        }
      } catch (err) {
        console.error('Dashboard challenges fetch error:', err)
      }
    }
    fetchChallenges()
  }, [user?.id])

  // Submit challenge answer
  const handleChallengeAnswer = async (index: number) => {
    if (!currentChallenge || !user?.id) {
      console.warn('Challenge answer blocked: no challenge or user', { currentChallenge: !!currentChallenge, userId: user?.id })
      return
    }
    const challengeId = currentChallenge.id
    if (completedIds.includes(challengeId)) return
    const currentStatus = challengeStates[challengeId]?.status
    // Allow retry after wrong answer — reset state first
    if (currentStatus === 'correct') return

    setSubmittingChallengeId(challengeId)
    // Optimistic: mark as selected
    setChallengeStates(prev => ({
      ...prev,
      [challengeId]: { ...prev[challengeId], selectedIndex: index },
    }))

    try {
      const res = await fetch('/api/challenges', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, challengeId, answerIndex: index }),
      })
      const data = await res.json()

      // Handle already completed challenge
      if (data.code === 'ALREADY_COMPLETED') {
        setChallengeStates(prev => ({
          ...prev,
          [challengeId]: { status: 'correct', selectedIndex: currentChallenge.correctIndex, xpEarned: currentChallenge.xpReward },
        }))
        setCompletedIds(prev => [...prev, challengeId])
        setSubmittingChallengeId(null)
        return
      }

      if (data.correct) {
        setChallengeStates(prev => ({
          ...prev,
          [challengeId]: { status: 'correct', selectedIndex: index, xpEarned: data.xpEarned },
        }))
        setCompletedIds(prev => [...prev, challengeId])
        // Update user XP in store
        if (data.totalXp !== undefined) {
          useAppStore.setState(s => ({ user: s.user ? { ...s.user, xp: data.totalXp } : null }))
        }
        toast.success(`+${data.xpEarned} XP !`, {
          description: data.bonusXp > 0 ? `Bonus complet : +${data.bonusXp} XP !` : undefined,
        })
      } else {
        setChallengeStates(prev => ({
          ...prev,
          [challengeId]: { status: 'wrong', selectedIndex: index, correctIndex: data.correctIndex },
        }))
        toast.error('Mauvaise réponse !', {
          description: data.correctAnswer ? `La bonne réponse était : ${data.correctAnswer}` : 'Essayez encore !',
        })
      }
    } catch (err) {
      console.error('Challenge submit error:', err)
      setChallengeStates(prev => ({
        ...prev,
        [challengeId]: { status: 'unanswered', selectedIndex: null },
      }))
    } finally {
      setSubmittingChallengeId(null)
    }
  }

  const handleNextChallenge = () => {
    if (currentChallengeIdx < todayChallenges.length - 1) {
      setCurrentChallengeIdx(prev => prev + 1)
    }
  }

  // ─── API-backed Leaderboard ──────────────────────────────────────────────
  const [topLeaderboard, setTopLeaderboard] = useState<LeaderboardEntry[]>([])
  const [userRank, setUserRank] = useState<LeaderboardEntry | null>(null)

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const userId = user?.id
        const params = new URLSearchParams({ period: 'alltime', level: 'all' })
        if (userId) params.set('userId', userId)
        const res = await fetch(`/api/leaderboard?${params.toString()}`)
        if (!res.ok) return
        const data = await res.json()
        if (data.success) {
          setTopLeaderboard(data.leaderboard.slice(0, 3))
          setUserRank(data.userEntry ?? null)
          // If user is in top 3, no need for separate userRank display
          if (data.leaderboard.some((e: LeaderboardEntry) => e.userId === userId)) {
            setUserRank(null) // They're already shown in top 3
          }
        }
      } catch (err) {
        console.error('Dashboard leaderboard fetch error:', err)
      }
    }
    fetchLeaderboard()
  }, [user?.id])

  // Earned badges (first 5)
  const earnedBadges = BADGES.filter((b) => earnedBadgeIds.includes(b.id)).slice(0, 5)

  // Level progress
  const levelProgress = currentLevelInfo.progress

  // XP to next level (simple calc)
  const xpForCurrentLevel = xp % 500
  const xpForNextLevel = 500

  // Greeting based on time
  const hour = new Date().getHours()
  const greeting =
    hour < 12 ? 'Bonjour' : hour < 18 ? 'Bon après-midi' : 'Bonsoir'

  return (
    <div className="min-h-screen bg-background pb-[88px] lg:pb-8">
      {/* ─── Sticky Top Bar ──────────────────────────────────────────── */}
      <div className="sticky top-0 z-40 glass">
        <div className="mx-auto max-w-4xl flex items-center justify-between gap-2 sm:gap-3 px-4 py-2.5 sm:py-3 lg:px-6">
          <div className="flex items-center gap-2 min-w-0">
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground truncate">
                {greeting} 👋
              </p>
              <p className="font-semibold truncate text-sm">
                {displayName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Streak */}
            <motion.div
              variants={pulseVariants}
              animate="pulse"
              className="flex items-center gap-1 rounded-full bg-yoel-gold/10 px-2 py-1 sm:px-2.5 sm:py-1.5"
            >
              <Flame className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yoel-gold" />
              <span className="text-xs sm:text-sm font-semibold text-yoel-gold">
                {streak}
              </span>
            </motion.div>

            {/* Coins */}
            <div className="flex items-center gap-1 rounded-full bg-yoel-gold/10 px-2 py-1 sm:px-2.5 sm:py-1.5">
              <Coins className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yoel-gold" />
              <span className="text-xs sm:text-sm font-semibold text-yoel-gold">{coins}</span>
            </div>

            {/* User Session Widget */}
            <UserSessionWidget />
          </div>
        </div>
      </div>

      <motion.div
        className="mx-auto max-w-4xl space-y-3 sm:space-y-6 p-3 sm:p-4 lg:p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
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

        {/* ─── 2. Daily Goal Card (compact on mobile) ────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card overflow-hidden">
            <CardContent className="flex flex-row items-center gap-3 p-3 sm:p-6 sm:gap-6">
              {/* Mobile: compact 80px ring */}
              <div className="shrink-0 sm:hidden">
                <CircularProgress
                  value={dailyXpEarned}
                  max={effectiveDailyGoal}
                  size={80}
                  strokeWidth={7}
                  compact
                />
              </div>
              {/* Desktop: larger ring */}
              <div className="shrink-0 hidden sm:block">
                <CircularProgress
                  value={dailyXpEarned}
                  max={effectiveDailyGoal}
                  size={130}
                  strokeWidth={10}
                />
              </div>
              <div className="flex-1 min-w-0 space-y-1 sm:space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-lg font-semibold">
                    Objectif du jour
                  </h3>
                  {(!user?.dailyGoal || user.dailyGoal === 0) && (
                    <Badge variant="secondary" className="text-[9px] px-1.5 py-0 shrink-0">
                      Auto
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {dailyXpEarned >= effectiveDailyGoal
                    ? '🎉 Objectif atteint !'
                    : `Encore ${effectiveDailyGoal - dailyXpEarned} XP sur ${effectiveDailyGoal} !`}
                </p>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Target className="h-3 w-3 sm:h-4 sm:w-4 text-yoel-primary shrink-0" />
                  <span className="text-[11px] sm:text-sm font-medium text-yoel-primary whitespace-nowrap">
                    {effectiveDailyGoal > 0 ? Math.round((dailyXpEarned / effectiveDailyGoal) * 100) : 0}% complété
                  </span>
                </div>
                {(!user?.dailyGoal || user.dailyGoal === 0) && dailyXpHistory.length > 0 && (
                  <p className="text-[10px] sm:text-xs text-muted-foreground/70 italic">
                    Adapté à vos performances récentes
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── 3. Ce que vous avez appris — Learning Recap ──────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card overflow-hidden">
            <div className="relative">
              {/* Accent bar */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-yoel-primary to-yoel-gold rounded-l-xl" />
              <CardContent className="p-3 sm:p-5 pl-4 sm:pl-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-yoel-primary/20 to-yoel-gold/20">
                      <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        Ce que vous avez appris
                      </p>
                      {lastVisitedLesson && (
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <Badge variant="secondary" className="text-[9px] sm:text-[10px] px-1.5 py-0 h-4 sm:h-5 bg-yoel-primary/10 text-yoel-primary">
                            {lastVisitedLesson.type === 'vocabulary' ? 'Vocabulaire' : lastVisitedLesson.type === 'grammar' ? 'Grammaire' : lastVisitedLesson.type === 'conversation' ? 'Conversation' : lastVisitedLesson.type === 'pronunciation' ? 'Prononciation' : lastVisitedLesson.type}
                          </Badge>
                          <span className="flex items-center gap-0.5 text-[10px] sm:text-xs text-muted-foreground">
                            <Zap className="h-2.5 w-2.5 text-yoel-gold" />
                            {lastVisitedLesson.xpReward} XP
                          </span>
                          <span className="flex items-center gap-0.5 text-[10px] sm:text-xs text-muted-foreground">
                            <Clock className="h-2.5 w-2.5" />
                            {lastVisitedLesson.duration} min
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-yoel-primary hover:bg-yoel-primary-dark text-white rounded-full shrink-0 h-7 sm:h-8 text-[10px] sm:text-xs px-3 gap-1"
                    onClick={() => navigate('course')}
                  >
                    Continuer
                    <ChevronRight className="h-3 w-3" />
                  </Button>
                </div>

                {/* Learning Content Recap */}
                {lastVisitedLesson && learnedVocab.length > 0 ? (
                  <div className="space-y-2.5">
                    {/* Vocabulary learned */}
                    <div>
                      <p className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-yoel-primary" />
                        Vocabulaire
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {learnedVocab.map((v, i) => (
                          <div
                            key={i}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-muted/60 text-[11px] sm:text-xs"
                          >
                            <span className="font-medium text-foreground">{v.english}</span>
                            <span className="text-muted-foreground">→</span>
                            <span className="text-yoel-primary">{v.french}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Grammar point learned */}
                    {learnedGrammar && learnedGrammar.title && (
                      <div>
                        <p className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-yoel-gold" />
                          Grammaire
                        </p>
                        <p className="text-[11px] sm:text-xs text-foreground/80 leading-relaxed">
                          {learnedGrammar.title}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  /* No history — show a prompt to start learning */
                  <div className="flex items-center gap-3 py-1">
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Commencez votre première leçon pour voir votre progression ici.
                      </p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-yoel-primary hover:bg-yoel-primary-dark text-white rounded-full shrink-0 h-7 sm:h-8 text-[10px] sm:text-xs px-3 gap-1"
                      onClick={() => navigate('levels')}
                    >
                      Commencer
                      <ChevronRight className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* ─── 4. Quick Actions Grid ──────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
            <QuickAction
              icon={BookOpen}
              label="Leçons"
              color="from-yoel-primary to-yoel-primary-dark"
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
              label="Stats"
              color="from-yoel-gold to-amber-700"
              onClick={() => navigate('stats')}
            />
          </div>
          {/* ─── Second Row: New Features ──────────────────────────────── */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mt-1.5 sm:mt-3">
            <QuickAction
              icon={Swords}
              label="Défis"
              color="from-yoel-gold to-yoel-gold-light"
              onClick={() => navigate('challenges')}
            />
            <QuickAction
              icon={Trophy}
              label="Classement"
              color="from-yoel-gold to-yoel-primary"
              onClick={() => navigate('leaderboard')}
            />
            <QuickAction
              icon={ShoppingBag}
              label="Boutique"
              color="from-yoel-blue to-yoel-primary"
              onClick={() => navigate('shop')}
            />
          </div>
        </motion.div>

        {/* ─── 5 & 6. Daily Challenge + Streak Calendar ───────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Daily Challenges — 3 per day */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card overflow-hidden h-full">
              <CardHeader className="pb-2 p-3 sm:p-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm sm:text-base flex items-center gap-1.5 sm:gap-2">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-gold shrink-0" />
                    Défis du jour
                  </CardTitle>
                  <div className="flex items-center gap-1.5">
                    {!allChallengesDone && currentChallenge && (
                      <Badge className="bg-yoel-gold/15 text-yoel-gold border-0 text-[10px] sm:text-xs shrink-0">
                        +{currentChallenge.xpReward} XP
                      </Badge>
                    )}
                    {/* Progress dots */}
                    <div className="flex items-center gap-1">
                      {todayChallenges.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-2 w-2 rounded-full transition-colors ${
                            completedIds.includes(todayChallenges[idx]?.id)
                              ? 'bg-yoel-green'
                              : todayChallenges[idx] && challengeStates[todayChallenges[idx].id]?.status === 'wrong'
                              ? 'bg-destructive'
                              : idx === currentChallengeIdx && !allChallengesDone
                              ? 'bg-yoel-gold'
                              : 'bg-muted-foreground/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2.5 p-3 sm:p-6 pt-0 sm:pt-0">
                {allChallengesDone ? (
                  /* ── Results summary ── */
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 py-3">
                      <span className="text-2xl">
                        {completedCount === 3 ? '🏆' : completedCount >= 2 ? '👏' : '💪'}
                      </span>
                      <div>
                        <p className="font-semibold text-sm">{completedCount}/3 correct</p>
                        <p className="text-xs text-muted-foreground">
                          {completedCount === 3 ? 'Parfait ! Tous les défis réussis !' : completedCount >= 2 ? 'Bravo ! Continuez comme ça !' : 'Continuez à vous entraîner !'}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {todayChallenges.map((ch, idx) => {
                        const isCompleted = completedIds.includes(ch.id)
                        const isWrong = challengeStates[ch.id]?.status === 'wrong'
                        return (
                          <div key={ch.id} className={`flex items-center gap-2 rounded-lg p-2 text-xs ${
                            isCompleted ? 'bg-yoel-green/10 text-yoel-green' : 'bg-destructive/10 text-destructive'
                          }`}>
                            <span className="shrink-0">{isCompleted ? '✓' : '✗'}</span>
                            <Badge className={`text-[9px] px-1 py-0 border-0 shrink-0 ${TYPE_COLORS[ch.type]}`}>
                              {TYPE_LABELS[ch.type]}
                            </Badge>
                            <span className="truncate font-medium">{ch.question}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ) : currentChallenge ? (
                  <>
                    <div className="flex items-center gap-2">
                      <Badge className={`text-[9px] px-1.5 py-0 border-0 ${TYPE_COLORS[currentChallenge.type]}`}>
                        {TYPE_LABELS[currentChallenge.type]}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground">
                        Défi {currentChallengeIdx + 1}/{todayChallenges.length}
                      </span>
                    </div>
                    <p className="font-medium text-xs sm:text-sm leading-relaxed">
                      {currentChallenge.question}
                    </p>

                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                      {currentChallenge.options.map((option, idx) => {
                        const state = challengeStates[currentChallenge.id]
                        const isSelected = state?.selectedIndex === idx
                        const isCorrectOption = idx === currentChallenge.correctIndex
                        const isWrongSelection = state?.status === 'wrong' && isSelected
                        const isCorrectReveal = state?.status === 'correct' && isCorrectOption
                        const isCorrectShowOnWrong = state?.status === 'wrong' && isCorrectOption
                        // Disable if: completed, correct, or currently submitting. Wrong answers can retry.
                        const isDisabled = completedIds.includes(currentChallenge.id) || state?.status === 'correct' || submittingChallengeId === currentChallenge.id

                        let btnClass = 'text-xs sm:text-sm py-1.5 sm:py-2 rounded-xl border transition-all font-medium'

                        if (isCorrectReveal) {
                          btnClass += ' bg-yoel-green/20 border-yoel-green/40 text-yoel-green'
                        } else if (isWrongSelection) {
                          btnClass += ' bg-destructive/15 border-destructive/40 text-destructive'
                        } else if (isCorrectShowOnWrong) {
                          btnClass += ' bg-yoel-green/15 border-yoel-green/30 text-yoel-green'
                        } else {
                          btnClass += isDisabled ? ' bg-muted/50 border-muted text-muted-foreground' : ' bg-background border-border hover:border-yoel-primary/50 hover:bg-yoel-primary/5 cursor-pointer'
                        }

                        return (
                          <motion.button
                            key={idx}
                            whileTap={!isDisabled && state?.status !== 'wrong' ? { scale: 0.95 } : undefined}
                            onClick={() => {
                              if (!isDisabled && state?.status !== 'wrong') {
                                handleChallengeAnswer(idx)
                              }
                            }}
                            disabled={isDisabled}
                            className={btnClass}
                          >
                            {option}
                          </motion.button>
                        )
                      })}
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      {completedIds.includes(currentChallenge.id) && (
                        <span className="text-yoel-green font-medium">✓ Correct ! +{challengeStates[currentChallenge.id]?.xpEarned} XP</span>
                      )}
                      {challengeStates[currentChallenge.id]?.status === 'wrong' && (
                        <div className="flex items-center gap-2">
                          <span className="text-destructive font-medium">✗ Mauvaise réponse</span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-6 rounded-full text-[10px] px-2 border-yoel-primary/30 text-yoel-primary hover:bg-yoel-primary/5"
                            onClick={() => {
                              // Reset state to allow retry
                              setChallengeStates(prev => ({
                                ...prev,
                                [currentChallenge.id]: { status: 'unanswered', selectedIndex: null },
                              }))
                            }}
                          >
                            Réessayer
                          </Button>
                        </div>
                      )}
                      {challengeStates[currentChallenge.id]?.status === 'correct' && (
                        <Button
                          size="sm"
                          className="h-7 rounded-full bg-yoel-primary hover:bg-yoel-primary-dark text-white text-xs px-3"
                          onClick={handleNextChallenge}
                        >
                          {currentChallengeIdx < todayChallenges.length - 1 ? 'Suivant →' : 'Voir résultats'}
                        </Button>
                      )}
                      {submittingChallengeId === currentChallenge.id && (
                        <span className="text-muted-foreground animate-pulse">Vérification…</span>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-xs text-muted-foreground">Chargement des défis…</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Streak Calendar */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card overflow-hidden h-full">
              <CardHeader className="pb-2 p-3 sm:p-6">
                <CardTitle className="text-sm sm:text-base flex items-center gap-1.5 sm:gap-2">
                  <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 shrink-0" />
                  {streak > 0 ? `Série de ${streak} jour${streak > 1 ? 's' : ''}` : 'Commencez votre série !'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2.5 p-3 sm:p-6 pt-0 sm:pt-0">
                <div className="grid grid-cols-7 gap-1 sm:gap-2">
                  {weekDays.map((d, idx) => (
                    <motion.div
                      key={d.day + d.date}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.06, type: 'spring' }}
                      className={`flex flex-col items-center gap-0.5 rounded-lg sm:rounded-xl py-1 sm:py-2 px-0.5 transition-colors ${
                        d.isFuture
                          ? 'bg-muted/20 border border-transparent opacity-40'
                          : d.completed
                          ? 'bg-gradient-to-b from-yoel-gold/20 to-yoel-gold/10 border border-yoel-gold/30'
                          : d.isToday
                          ? 'bg-yoel-primary/5 border border-yoel-primary/20'
                          : 'bg-muted/40 border border-transparent'
                      }`}
                    >
                      <span className={`text-[9px] sm:text-[10px] font-medium ${
                        d.isToday ? 'text-yoel-primary' : 'text-muted-foreground'
                      }`}>
                        {d.day}
                      </span>
                      <span className={`text-xs sm:text-sm font-semibold ${
                        d.isToday && !d.completed ? 'text-yoel-primary' : ''
                      }`}>
                        {d.completed ? '🔥' : d.isFuture ? '·' : d.date}
                      </span>
                      {d.xpEarned > 0 && !d.completed && (
                        <span className="text-[7px] sm:text-[8px] text-muted-foreground leading-none">
                          {d.xpEarned}XP
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs text-muted-foreground">
                    {streak > 0 ? 'Continuez votre série !' : 'Gagnez des XP aujourd\'hui pour démarrer !'}
                  </span>
                  <Badge
                    variant="outline"
                    className={`text-[10px] ${streak > 0 ? 'text-orange-500 border-orange-500/30' : 'text-muted-foreground border-muted-foreground/30'}`}
                  >
                    🔥 {streak} jour{streak > 1 ? 's' : ''}
                  </Badge>
                </div>

                {isPremium && (
                  <div className="rounded-lg bg-yoel-gold/10 p-2 text-center">
                    <span className="text-[10px] sm:text-xs gradient-text-premium font-semibold">
                      👑 Récompense x2 avec Premium
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* ─── Collapsible "More" Section (Badges, Leaderboard, Word, Premium, Levels) ─── */}
        {/* On desktop: always visible. On mobile: behind "Voir plus" toggle. */}
        <div className="lg:contents">
          <Collapsible open={moreOpen} onOpenChange={setMoreOpen}>
            {/* Toggle button — only visible on mobile */}
            <div className="flex justify-center lg:hidden">
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1.5 text-muted-foreground hover:text-foreground"
                >
                  <span className="text-sm font-medium">
                    {moreOpen ? 'Voir moins' : 'Voir plus'}
                  </span>
                  <motion.div
                    animate={{ rotate: moreOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </Button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent forceMount className="hidden data-[state=open]:block lg:block lg:contents">
              <div className="space-y-3 sm:space-y-6 mt-2 lg:mt-0">
                {/* ─── 7. Recent Badges ─────────────────────────────────── */}
                <motion.div variants={itemVariants}>
                  <Card className="glass-card overflow-hidden">
                    <CardHeader className="pb-2 p-4 sm:p-6">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                          <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-primary" />
                          Badges récents
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
                    <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                        {earnedBadges.map((badge, idx) => (
                          <motion.div
                            key={badge.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            className="flex flex-col items-center gap-1.5 min-w-[64px] sm:min-w-[72px] shrink-0"
                          >
                            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yoel-primary/10 to-yoel-gold/10 border border-yoel-primary/10 text-xl sm:text-2xl">
                              {badge.icon}
                            </div>
                            <span className="text-[9px] sm:text-[10px] text-muted-foreground text-center leading-tight font-medium">
                              {badge.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* ─── 8 & 9. Leaderboard + Word of the Day ──────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Leaderboard */}
                  <motion.div variants={itemVariants}>
                    <Card className="glass-card overflow-hidden h-full">
                      <CardHeader className="pb-2 p-4 sm:p-6">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                            <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-gold" />
                            Classement
                          </CardTitle>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs text-muted-foreground"
                            onClick={() => navigate('leaderboard')}
                          >
                            Détails
                            <ChevronRight className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2 p-4 sm:p-6 pt-0 sm:pt-0">
                        {topLeaderboard.map((player, idx) => {
                          const initials = player.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
                          const isMe = player.userId === user?.id
                          return (
                            <motion.div
                              key={player.userId}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + idx * 0.1 }}
                              className={`flex items-center gap-2 sm:gap-3 rounded-xl p-2.5 sm:p-3 transition-colors ${
                                isMe ? 'bg-yoel-primary/10 ring-1 ring-yoel-primary/20' : 'bg-muted/30 hover:bg-muted/50'
                              }`}
                            >
                              <div
                                className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full font-bold text-xs sm:text-sm ${
                                  player.rank === 1
                                    ? 'bg-yoel-gold/20 text-yoel-gold'
                                    : player.rank === 2
                                    ? 'bg-gray-400/20 text-gray-500'
                                    : 'bg-amber-700/20 text-amber-700'
                                }`}
                              >
                                {player.rank === 1 ? (
                                  <Crown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                ) : (
                                  player.rank
                                )}
                              </div>
                              <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                                {player.avatar && <AvatarImage src={player.avatar} alt={player.name} />}
                                <AvatarFallback className="text-[10px] sm:text-xs font-semibold bg-yoel-blue/10 text-yoel-blue">
                                  {initials}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs sm:text-sm font-medium truncate flex items-center gap-1">
                                  {player.name}
                                  {player.isPremium && (
                                    <Star className="h-3 w-3 text-yoel-gold fill-yoel-gold" />
                                  )}
                                  {isMe && (
                                    <span className="text-[9px] text-yoel-primary font-normal">(vous)</span>
                                  )}
                                </p>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                  <Badge className={`text-[8px] px-1 py-0 border-0 ${
                                    player.level === 'A1' ? 'bg-emerald-500/15 text-emerald-600' :
                                    player.level === 'A2' ? 'bg-teal-500/15 text-teal-600' :
                                    player.level === 'B1' ? 'bg-cyan-500/15 text-cyan-600' :
                                    player.level === 'B2' ? 'bg-sky-500/15 text-sky-600' :
                                    player.level === 'C1' ? 'bg-indigo-500/15 text-indigo-600' :
                                    player.level === 'C2' ? 'bg-violet-500/15 text-violet-600' :
                                    'bg-muted/50 text-muted-foreground'
                                  }`}>
                                    {player.level}
                                  </Badge>
                                  {player.streak > 0 && (
                                    <span className="flex items-center gap-0.5 text-[9px] text-orange-500">
                                      <Flame className="h-2.5 w-2.5" />{player.streak}j
                                    </span>
                                  )}
                                  {player.lessonsCompleted > 0 && (
                                    <span className="text-[9px] text-muted-foreground">
                                      {player.lessonsCompleted} leçon{player.lessonsCompleted > 1 ? 's' : ''}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <span className="text-xs sm:text-sm font-semibold text-muted-foreground">
                                {player.xp.toLocaleString()} XP
                              </span>
                            </motion.div>
                          )
                        })}

                        {userRank && (
                          <>
                            <Separator />
                            <div className="flex items-center gap-2 sm:gap-3 rounded-xl bg-yoel-primary/5 p-2.5 sm:p-3">
                              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-yoel-primary/10 font-bold text-xs sm:text-sm text-yoel-primary">
                                {userRank.rank}
                              </div>
                              <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                                {userRank.avatar && <AvatarImage src={userRank.avatar} alt={userRank.name} />}
                                <AvatarFallback className="text-[10px] sm:text-xs font-semibold bg-yoel-primary/10 text-yoel-primary">
                                  {displayName.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs sm:text-sm font-medium truncate">{displayName} (vous)</p>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                  <Badge className={`text-[8px] px-1 py-0 border-0 ${
                                    userRank.level === 'A1' ? 'bg-emerald-500/15 text-emerald-600' :
                                    userRank.level === 'A2' ? 'bg-teal-500/15 text-teal-600' :
                                    userRank.level === 'B1' ? 'bg-cyan-500/15 text-cyan-600' :
                                    userRank.level === 'B2' ? 'bg-sky-500/15 text-sky-600' :
                                    userRank.level === 'C1' ? 'bg-indigo-500/15 text-indigo-600' :
                                    userRank.level === 'C2' ? 'bg-violet-500/15 text-violet-600' :
                                    'bg-muted/50 text-muted-foreground'
                                  }`}>
                                    {userRank.level}
                                  </Badge>
                                  {userRank.lessonsCompleted > 0 && (
                                    <span className="text-[9px] text-muted-foreground">
                                      {userRank.lessonsCompleted} leçon{userRank.lessonsCompleted > 1 ? 's' : ''}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <span className="text-xs sm:text-sm font-semibold text-yoel-primary">
                                {userRank.xp.toLocaleString()} XP
                              </span>
                            </div>
                          </>
                        )}
                        {!userRank && topLeaderboard.length === 0 && (
                          <div className="text-center py-4">
                            <p className="text-xs text-muted-foreground">Aucun classement disponible</p>
                            <p className="text-[10px] text-muted-foreground mt-1">Gagnez des XP pour apparaître ici !</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Word of the Day */}
                  <motion.div variants={itemVariants}>
                    <Card className="glass-card overflow-hidden h-full">
                      <CardHeader className="pb-2 p-4 sm:p-6">
                        <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                          <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-gold" />
                          Mot du jour
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 p-4 sm:p-6 pt-0 sm:pt-0">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl sm:text-2xl font-bold gradient-text-blue">
                              {wordOfTheDay.english}
                            </h3>
                            <Badge variant="secondary" className="text-[9px] px-1.5 py-0 shrink-0">
                              {wordOfTheDay.level}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground text-xs sm:text-sm">
                            {wordOfTheDay.french}
                          </p>
                          <p className="text-[10px] sm:text-xs text-muted-foreground font-mono">
                            {wordOfTheDay.phonetic}
                          </p>
                        </div>

                        <div className="rounded-xl bg-muted/40 p-2.5 sm:p-3">
                          <p className="text-xs sm:text-sm italic text-muted-foreground">
                            &ldquo;{wordOfTheDay.example}&rdquo;
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full text-xs"
                            onClick={() => {
                              speakWord(wordOfTheDay.english)
                            }}
                          >
                            <Volume2 className="h-3.5 w-3.5 mr-1" />
                            Écouter
                          </Button>
                          <Badge
                            variant="outline"
                            className="text-yoel-green border-yoel-green/30 text-[10px]"
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
                      className="overflow-hidden border-0 cursor-pointer bg-gradient-to-r from-yoel-primary/10 via-yoel-gold/10 to-yoel-blue/10"
                      onClick={() => navigate('premium')}
                    >
                      <CardContent className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5">
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yoel-primary to-yoel-gold text-white text-lg sm:text-xl">
                          👑
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm sm:text-base gradient-text-premium">
                            Passez à Premium
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            XP x2, pas de publicités, et plus encore !
                          </p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* Level Progress Overview */}
                <motion.div variants={itemVariants}>
                  <Card className="glass-card overflow-hidden">
                    <CardHeader className="pb-2 p-4 sm:p-6">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                          <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-primary" />
                          Progression par niveau
                        </CardTitle>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs text-muted-foreground"
                          onClick={() => navigate('levels')}
                        >
                          D\u00e9tails
                          <ChevronRight className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2.5 p-4 sm:p-6 pt-0 sm:pt-0">
                      {LEVELS.map((lvl, idx) => (
                        <div key={lvl.code} className="space-y-1">
                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="flex items-center gap-1.5 sm:gap-2">
                              <span className="text-sm">{lvl.icon}</span>
                              <span className="font-medium">
                                {lvl.code} - {lvl.name}
                              </span>
                            </span>
                            <span className="text-muted-foreground text-[10px] sm:text-xs">
                              {lvl.completedUnits}/{lvl.units}
                            </span>
                          </div>
                          <Progress value={lvl.progress} className="h-1 sm:h-1.5" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </motion.div>

      {/* ─── 10. Bottom Navigation Bar (Mobile) ──────────────────────── */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring' as const, stiffness: 200, damping: 25 }}
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
      >
        <div className="mx-auto max-w-md">
          <div className="glass mx-2 sm:mx-3 mb-2 sm:mb-3 flex items-center justify-around rounded-2xl border border-border/50 py-1 px-1 shadow-lg">
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
