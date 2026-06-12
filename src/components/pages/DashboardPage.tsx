'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, BookOpen, Dumbbell, MessageCircle, BarChart3,
  Moon, Sun, Bell, Flame, Coins, Star, ChevronRight,
  Volume2, Trophy, Clock, Target, Home, User, Settings,
  Zap, Award, Crown, ChevronDown
} from 'lucide-react'
import { useAppStore, LEVELS, BADGES, DEMO_LESSONS, getRecommendedDailyGoal, type PageId } from '@/lib/store'
import { speakWord } from '@/lib/speech-utils'
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

// Daily XP goal and earned are now dynamic — derived from the store

// ─── Daily Challenges — 3 per day, adapted to level ──────────────────────────
interface Challenge {
  question: string
  options: string[]
  correctIndex: number
  xpReward: number
  type: 'grammar' | 'vocabulary' | 'translation' | 'conjugaison'
}

const CHALLENGE_POOL: Record<string, Challenge[]> = {
  A1: [
    { question: 'Traduisez : "Elle ___ une pomme."', options: ['have', 'has', 'haves', 'having'], correctIndex: 1, xpReward: 15, type: 'grammar' },
    { question: 'Quel mot signifie "chat" en anglais ?', options: ['Dog', 'Cat', 'Bird', 'Fish'], correctIndex: 1, xpReward: 10, type: 'vocabulary' },
    { question: 'Traduisez : "Bonjour, comment allez-vous ?"', options: ['Hello, how are you?', 'Goodbye, see you!', 'Please, thank you', 'Yes, I am fine'], correctIndex: 0, xpReward: 15, type: 'translation' },
    { question: 'Complétez : "I ___ a student."', options: ['am', 'is', 'are', 'be'], correctIndex: 0, xpReward: 15, type: 'grammar' },
    { question: 'Quel est le contraire de "big" ?', options: ['Tall', 'Small', 'Long', 'Wide'], correctIndex: 1, xpReward: 10, type: 'vocabulary' },
    { question: "Traduisez : \"Je m'appelle Marie.\"", options: ['My name is Marie', 'I call Marie', 'Me is Marie', 'I am call Marie'], correctIndex: 0, xpReward: 15, type: 'translation' },
    { question: 'Complétez : "She ___ to school every day."', options: ['go', 'goes', 'going', 'gone'], correctIndex: 1, xpReward: 15, type: 'conjugaison' },
    { question: 'Que signifie "water" en français ?', options: ['Feu', 'Air', 'Eau', 'Terre'], correctIndex: 2, xpReward: 10, type: 'vocabulary' },
    { question: 'Traduisez : "Où est la gare ?"', options: ['Where is the station?', 'When is the train?', 'How is the bus?', 'What is the road?'], correctIndex: 0, xpReward: 15, type: 'translation' },
    { question: 'Complétez : "They ___ playing football."', options: ['am', 'is', 'are', 'be'], correctIndex: 2, xpReward: 15, type: 'conjugaison' },
    { question: 'Quel mot signifie "livre" en anglais ?', options: ['Book', 'Look', 'Cook', 'Hook'], correctIndex: 0, xpReward: 10, type: 'vocabulary' },
    { question: "Traduisez : \"Il fait beau aujourd'hui.\"", options: ['It is nice today', 'It is bad today', 'It is cold today', 'It is hot today'], correctIndex: 0, xpReward: 15, type: 'translation' },
  ],
  A2: [
    { question: 'Traduisez : "She ___ to the store yesterday."', options: ['go', 'goes', 'went', 'going'], correctIndex: 2, xpReward: 20, type: 'conjugaison' },
    { question: 'Quel est le pluriel de "child" ?', options: ['Childs', 'Children', 'Childrens', 'Childes'], correctIndex: 1, xpReward: 15, type: 'grammar' },
    { question: 'Traduisez : "Je voudrais une tasse de thé."', options: ['I would like a cup of tea', 'I want a glass of tea', 'I like a tea cup', 'I will have tea'], correctIndex: 0, xpReward: 20, type: 'translation' },
    { question: 'Complétez : "I have been living here ___ 2010."', options: ['for', 'since', 'from', 'during'], correctIndex: 1, xpReward: 20, type: 'grammar' },
    { question: 'Que signifie "schedule" en français ?', options: ['Horloge', 'Emploi du temps', 'Calendrier', 'Montre'], correctIndex: 1, xpReward: 15, type: 'vocabulary' },
    { question: "Traduisez : \"Nous avons visité Paris l'année dernière.\"", options: ['We visited Paris last year', 'We visit Paris next year', 'We are visiting Paris now', 'We will visit Paris'], correctIndex: 0, xpReward: 20, type: 'translation' },
    { question: 'Quelle est la forme correcte ? "He ___ to music every night."', options: ['listen', 'listens', 'listening', 'listened'], correctIndex: 1, xpReward: 20, type: 'conjugaison' },
    { question: 'Quel mot est un adjectif ?', options: ['Quickly', 'Beautiful', 'Running', 'Happiness'], correctIndex: 1, xpReward: 15, type: 'grammar' },
    { question: "Traduisez : \"Pourriez-vous m'aider, s'il vous plaît ?\"", options: ['Could you help me, please?', 'Can you help I please?', 'Would you helping me?', 'Do you help me please?'], correctIndex: 0, xpReward: 20, type: 'translation' },
  ],
  B1: [
    { question: 'Complétez : "If I ___ rich, I would travel the world."', options: ['am', 'was', 'were', 'be'], correctIndex: 2, xpReward: 25, type: 'grammar' },
    { question: 'Que signifie "to achieve" en français ?', options: ['Échouer', 'Accomplir', 'Abandonner', 'Accepter'], correctIndex: 1, xpReward: 20, type: 'vocabulary' },
    { question: "Traduisez : \"Bien qu'il soit fatigué, il a continué à travailler.\"", options: ['Although he was tired, he kept working', 'Even he was tired, he continued work', 'Despite he is tired, he works', 'Though he tired, he working still'], correctIndex: 0, xpReward: 25, type: 'translation' },
    { question: 'Complétez : "By the time we arrived, the movie ___."', options: ['started', 'has started', 'had started', 'starts'], correctIndex: 2, xpReward: 25, type: 'conjugaison' },
    { question: 'Quel est le synonyme de "significant" ?', options: ['Trivial', 'Meaningful', 'Vague', 'Ordinary'], correctIndex: 1, xpReward: 20, type: 'vocabulary' },
    { question: "Traduisez : \"Il m'a dit qu'il viendrait demain.\"", options: ['He told me he would come tomorrow', 'He said me he will come tomorrow', 'He told me he comes tomorrow', 'He say to me he coming tomorrow'], correctIndex: 0, xpReward: 25, type: 'translation' },
    { question: 'Complétez : "She suggested that he ___ harder."', options: ['studies', 'study', 'studied', 'studying'], correctIndex: 1, xpReward: 25, type: 'grammar' },
    { question: 'Que signifie "overwhelmed" en français ?', options: ['Enthousiaste', 'Débordé', 'Indifférent', 'Soulagé'], correctIndex: 1, xpReward: 20, type: 'vocabulary' },
    { question: 'Traduisez : "Je souhaiterais avoir plus de temps."', options: ['I wish I had more time', 'I wish I have more time', 'I hope having more time', 'I want more time would'], correctIndex: 0, xpReward: 25, type: 'translation' },
  ],
  B2: [
    { question: 'Complétez : "Had I known, I ___ differently."', options: ['would act', 'would have acted', 'will act', 'acted'], correctIndex: 1, xpReward: 30, type: 'grammar' },
    { question: 'Que signifie "to undermine" en français ?', options: ['Renforcer', 'Saper', 'Comprendre', 'Nier'], correctIndex: 1, xpReward: 25, type: 'vocabulary' },
    { question: "Traduisez : \"Quoi qu'il arrive, nous devons persévérer.\"", options: ['Whatever happens, we must persevere', 'What happens, we should persevere', 'Whatever will happen, we must persisted', 'No matter what, we persevering'], correctIndex: 0, xpReward: 30, type: 'translation' },
    { question: 'Complétez : "Not only ___ intelligent, but she is also kind."', options: ['she is', 'is she', 'does she', 'she does'], correctIndex: 1, xpReward: 30, type: 'grammar' },
    { question: 'Quel mot complète : "The results were ___ with previous findings."', options: ['consistent', 'considerate', 'consecutive', 'conspicuous'], correctIndex: 0, xpReward: 25, type: 'vocabulary' },
    { question: "Traduisez : \"Il est peu probable qu'elle accepte cette proposition.\"", options: ['It is unlikely that she will accept this proposal', 'She is unlikely accepting this proposal', 'It is improbable she accepts that', 'She unlikely will accept the proposition'], correctIndex: 0, xpReward: 30, type: 'translation' },
    { question: 'Complétez : "The report ___ the need for further research."', options: ['underscores', 'undercharges', 'underachieves', 'underestimates'], correctIndex: 0, xpReward: 30, type: 'vocabulary' },
    { question: 'Traduisez : "En dépit des difficultés, le projet a abouti."', options: ['Despite the difficulties, the project succeeded', 'In spite difficulties, the project succeed', 'Despite difficulties, project was success', 'Although the difficulties, project succeeded'], correctIndex: 0, xpReward: 30, type: 'translation' },
    { question: 'Complétez : "She insisted on ___ the report herself."', options: ['writing', 'to write', 'write', 'wrote'], correctIndex: 0, xpReward: 30, type: 'grammar' },
  ],
  C1: [
    { question: 'Complétez : "The implications of this policy are ___ understood."', options: ['scarcely', 'scarce', 'scarceness', 'scarsed'], correctIndex: 0, xpReward: 35, type: 'grammar' },
    { question: 'Que signifie "to corroborate" en français ?', options: ['Contredire', 'Confirmer', 'Corrompre', 'Corriger'], correctIndex: 1, xpReward: 30, type: 'vocabulary' },
    { question: "Traduisez : \"Il a été convenu que les parties s'engageraient dans un dialogue constructif.\"", options: ['It was agreed that the parties would engage in constructive dialogue', 'It was agreed the parties will engage in constructive dialog', 'They agreed that parties shall engage constructively', 'It has agreed parties would engaged in constructive dialogue'], correctIndex: 0, xpReward: 35, type: 'translation' },
    { question: 'Complétez : "So ___ the impact that policymakers were forced to reconsider."', options: ['profound was', 'profound', 'was profound', 'did profound'], correctIndex: 0, xpReward: 35, type: 'grammar' },
    { question: 'Quel mot décrit un "raisonnement trompeur mais apparemment logique" ?', options: ['Sophistry', 'Serendipity', 'Sophistication', 'Sovereignty'], correctIndex: 0, xpReward: 30, type: 'vocabulary' },
    { question: 'Traduisez : "Nonobstant les objections soulevées, la motion a été adoptée."', options: ['Notwithstanding the objections raised, the motion was passed', 'Despite objections raising, the motion passed', 'Notwithstanding objections, motion has been passing', 'In spite of raised objections, motion was passing'], correctIndex: 0, xpReward: 35, type: 'translation' },
    { question: 'Complétez : "Little ___ the challenges that lay ahead."', options: ['did they anticipate', 'they anticipated', 'they did anticipate', 'anticipated they'], correctIndex: 0, xpReward: 35, type: 'grammar' },
    { question: 'Que signifie "prescient" en français ?', options: ['Prévoyant', 'Présent', 'Précieux', 'Précaire'], correctIndex: 0, xpReward: 30, type: 'vocabulary' },
    { question: "Traduisez : \"Force est de constater que cette approche s'avère contre-productive.\"", options: ['It must be acknowledged that this approach proves counterproductive', 'We must acknowledge this approach is counter-product', 'It has to be admitted that approach proves against productive', 'One must note this approach being counterproductive'], correctIndex: 0, xpReward: 35, type: 'translation' },
  ],
  C2: [
    { question: 'Complétez : "Were the hypothesis ___ , the ramifications would be far-reaching."', options: ['to be validated', 'validating', 'validated', 'to validate'], correctIndex: 0, xpReward: 40, type: 'grammar' },
    { question: 'Que signifie "to obfuscate" en français ?', options: ['Rendre confus', 'Obscurcir', 'Rendre obsolète', 'Omettre'], correctIndex: 1, xpReward: 35, type: 'vocabulary' },
    { question: 'Traduisez : "Il incombe aux instances dirigeantes de veiller à la conformité réglementaire."', options: ['It is incumbent upon the governing bodies to ensure regulatory compliance', 'It is incumbent to governing bodies ensuring regulatory compliance', 'It falls upon governing bodies to ensure regulation compliance', 'It is obliging the governing bodies to ensure regulation conformity'], correctIndex: 0, xpReward: 40, type: 'translation' },
    { question: 'Complétez : "At no time ___ the authority to unilaterally amend the provisions."', options: ['did the committee have', 'the committee had', 'had the committee', 'the committee did have'], correctIndex: 0, xpReward: 40, type: 'grammar' },
    { question: "Quel terme désigne \"l'art de persuader par le discours\" ?", options: ['Rhetoric', 'Hermeneutics', 'Dialectics', 'Exegesis'], correctIndex: 0, xpReward: 35, type: 'vocabulary' },
    { question: "Traduisez : \"Quoi que l'on puisse avancer, la prépondérance des preuves atteste de cette conclusion.\"", options: ['Whatever one may argue, the preponderance of evidence attests to this conclusion', 'Whatever you advance, the preponderance of evidences attests this', 'No matter what is advanced, evidence preponderance attests the conclusion', 'Whichever one argues, the preponderating evidence attests to that'], correctIndex: 0, xpReward: 40, type: 'translation' },
    { question: 'Complétez : "Not until the findings ___ public did the institution acknowledge its oversight."', options: ['became', 'become', 'had become', 'becoming'], correctIndex: 0, xpReward: 40, type: 'grammar' },
    { question: 'Que signifie "to renege" en français ?', options: ['Renoncer', 'Renégocier', 'Rénover', 'Rendre'], correctIndex: 0, xpReward: 35, type: 'vocabulary' },
    { question: "Traduisez : \"L'exégèse de ce passage requiert une appréciation nuancée du contexte socio-historique.\"", options: ['The exegesis of this passage requires a nuanced appreciation of the socio-historical context', 'Exegesis of this passage demands a nuanced appreciation for socio-historic context', 'The exegesis for this passage require nuanced appreciation of socio-historical contexts', 'This passage exegesis requires nuanced appreciating of the socio-historical context'], correctIndex: 0, xpReward: 40, type: 'translation' },
  ],
}

// Sélectionner 3 défis du jour basés sur la date et le niveau
const getDailyChallenges = (level: string): Challenge[] => {
  const pool = CHALLENGE_POOL[level] || CHALLENGE_POOL.A1
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000)
  // Pick 3 challenges that rotate daily, ensuring one of each type
  const types: Challenge['type'][] = ['grammar', 'vocabulary', 'translation']
  const result: Challenge[] = []
  for (const type of types) {
    const typed = pool.filter((c) => c.type === type)
    if (typed.length > 0) {
      const idx = (dayOfYear + result.length * 3) % typed.length
      result.push(typed[idx])
    }
  }
  // If we don't have enough, fill with remaining
  while (result.length < 3) {
    const idx = (dayOfYear + result.length) % pool.length
    result.push(pool[idx])
  }
  return result
}

const TYPE_LABELS: Record<Challenge['type'], string> = {
  grammar: 'Grammaire',
  vocabulary: 'Vocabulaire',
  translation: 'Traduction',
  conjugaison: 'Conjugaison',
}

const TYPE_COLORS: Record<Challenge['type'], string> = {
  grammar: 'bg-yoel-primary/10 text-yoel-primary',
  vocabulary: 'bg-yoel-green/10 text-yoel-green',
  translation: 'bg-yoel-blue/10 text-yoel-blue',
  conjugaison: 'bg-yoel-gold/10 text-yoel-gold',
}

const LEADERBOARD = [
  { rank: 1, name: 'Marie L.', xp: 4820, avatar: 'ML', isPremium: true },
  { rank: 2, name: 'Thomas R.', xp: 3650, avatar: 'TR', isPremium: false },
  { rank: 3, name: 'Sophie M.', xp: 2990, avatar: 'SM', isPremium: true },
]

const WORD_OF_THE_DAY = {
  english: 'Serendipity',
  french: 'Sérendipité',
  phonetic: '/ˌser.ənˈdɪp.ə.ti/',
  example: 'Finding that café was pure serendipity.',
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
  const { user, isDarkMode, toggleDarkMode, navigate, currentLesson, dailyChallengeCompleted, completeDailyChallenge, addXP, dailyXpEarned, dailyXpHistory } = useAppStore()

  // Derive data with fallbacks
  const displayName = user?.name ?? 'Apprenant'
  const streak = user?.streak ?? 7
  const coins = user?.coins ?? 350
  const xp = user?.xp ?? 1250
  const level = user?.level ?? 'A1'
  const isPremium = user?.isPremium ?? false

  // Current level info
  const currentLevelInfo = LEVELS.find((l) => l.code === level) ?? LEVELS[0]

  // Dynamic daily goal based on learner PERFORMANCE
  // If dailyGoal is 0 (auto), compute from XP history, level & progress; otherwise use manual value
  const recommendedGoal = getRecommendedDailyGoal(level, currentLevelInfo.progress, dailyXpHistory)
  const effectiveDailyGoal = user?.dailyGoal && user.dailyGoal > 0 ? user.dailyGoal : recommendedGoal

  // Next lesson to continue
  const nextLesson = currentLesson ?? DEMO_LESSONS.find((l) => !l.completed) ?? DEMO_LESSONS[3]

  // Daily challenges — 3 per day, level-adapted
  const todayChallenges = getDailyChallenges(level)
  const [currentChallengeIdx, setCurrentChallengeIdx] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [challengeResults, setChallengeResults] = useState<(boolean | null)[]>([null, null, null])
  const [challengeTime, setChallengeTime] = useState(60)
  const [challengeAnswered, setChallengeAnswered] = useState(false)
  const allChallengesDone = challengeResults.every((r) => r !== null)

  // Collapsible "more content" section (collapsed by default on mobile)
  const [moreOpen, setMoreOpen] = useState(false)

  const currentChallenge = todayChallenges[currentChallengeIdx]

  // Track previous challenge index to detect changes
  const [prevChallengeIdx, setPrevChallengeIdx] = useState(0)
  if (currentChallengeIdx !== prevChallengeIdx) {
    setPrevChallengeIdx(currentChallengeIdx)
    setChallengeTime(60)
    setChallengeAnswered(false)
    setSelectedOption(null)
  }

  useEffect(() => {
    if (challengeAnswered || allChallengesDone) return
    const timer = setInterval(() => {
      setChallengeTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // Time's up — mark as wrong
          setChallengeAnswered(true)
          setChallengeResults((prev) => {
            const next = [...prev]
            next[currentChallengeIdx] = false
            return next
          })
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [challengeAnswered, currentChallengeIdx, allChallengesDone])

  const handleChallengeAnswer = (index: number) => {
    if (challengeAnswered) return
    setSelectedOption(index)
    setChallengeAnswered(true)
    const isCorrect = index === currentChallenge.correctIndex
    setChallengeResults((prev) => {
      const next = [...prev]
      next[currentChallengeIdx] = isCorrect
      return next
    })
    if (isCorrect) {
      addXP(currentChallenge.xpReward)
    }
  }

  const handleNextChallenge = () => {
    if (currentChallengeIdx < todayChallenges.length - 1) {
      setCurrentChallengeIdx((prev) => prev + 1)
    }
    if (allChallengesDone) {
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
    hour < 12 ? 'Bonjour' : hour < 18 ? 'Bon après-midi' : 'Bonsoir'

  return (
    <div className="min-h-screen bg-background pb-[88px] lg:pb-8">
      {/* ─── Sticky Top Bar ──────────────────────────────────────────── */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/40">
        <div className="mx-auto max-w-4xl flex items-center justify-between gap-2 sm:gap-3 px-4 py-2 sm:py-2.5 lg:px-6">
          <div className="flex items-center gap-2 min-w-0">
            <Avatar className="h-9 w-9 ring-2 ring-yoel-primary/30">
              <AvatarImage src={user?.avatar ?? undefined} alt={displayName} />
              <AvatarFallback className="bg-yoel-primary/10 text-yoel-primary font-semibold text-xs">
                {displayName
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground truncate">
                {greeting} 👋
              </p>
              <p className="font-semibold truncate gradient-text-primary text-sm">
                {displayName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Streak */}
            <motion.div
              variants={pulseVariants}
              animate="pulse"
              className="flex items-center gap-1 rounded-full bg-orange-500/10 px-2 py-1 sm:px-2.5 sm:py-1.5"
            >
              <Flame className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-500" />
              <span className="text-xs sm:text-sm font-semibold text-orange-600 dark:text-orange-400">
                {streak}
              </span>
            </motion.div>

            {/* Coins */}
            <div className="flex items-center gap-1 rounded-full bg-yoel-gold/10 px-2 py-1 sm:px-2.5 sm:py-1.5">
              <Coins className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yoel-gold" />
              <span className="text-xs sm:text-sm font-semibold text-yoel-gold">{coins}</span>
            </div>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-9 sm:w-9 hidden sm:flex"
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

        {/* ─── 3. Continue Learning Card ──────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card
            className="glass-card overflow-hidden cursor-pointer group"
            onClick={() => navigate('course')}
          >
            <div className="relative">
              {/* Accent bar */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-yoel-primary to-yoel-gold rounded-l-xl" />
              <CardContent className="flex items-center gap-2.5 sm:gap-4 p-3 sm:p-5 pl-4 sm:pl-6">
                <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-yoel-primary/20 to-yoel-gold/20 overflow-hidden">
                  <img src="/practice-english.png" alt="Practice" className="h-11 w-11 sm:h-14 sm:w-14 object-cover rounded-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] sm:text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Continuer
                  </p>
                  <h3 className="font-semibold truncate mt-0.5 text-sm sm:text-base">
                    {nextLesson.title}
                  </h3>
                  <div className="flex items-center gap-2 sm:gap-3 mt-0.5">
                    <span className="flex items-center gap-0.5 text-[11px] sm:text-xs text-muted-foreground whitespace-nowrap">
                      <Zap className="h-3 w-3 text-yoel-gold" />
                      {nextLesson.xpReward} XP
                    </span>
                    <span className="flex items-center gap-0.5 text-[11px] sm:text-xs text-muted-foreground whitespace-nowrap">
                      <Clock className="h-3 w-3" />
                      {nextLesson.duration} min
                    </span>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="bg-yoel-primary hover:bg-yoel-primary-dark text-white rounded-full shrink-0 h-8 w-8 sm:h-9 sm:w-9 p-0"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
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
                    {!allChallengesDone && (
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
                            challengeResults[idx] === true
                              ? 'bg-yoel-green'
                              : challengeResults[idx] === false
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
                        {challengeResults.filter(Boolean).length === 3 ? '🏆' : challengeResults.filter(Boolean).length >= 2 ? '👏' : '💪'}
                      </span>
                      <div>
                        <p className="font-semibold text-sm">
                          {challengeResults.filter(Boolean).length}/3 correct
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {challengeResults.filter(Boolean).length === 3
                            ? 'Parfait ! Tous les défis réussis !'
                            : challengeResults.filter(Boolean).length >= 2
                            ? 'Bravo ! Continuez comme ça !'
                            : 'Continuez à vous entraîner !'}
                        </p>
                      </div>
                    </div>
                    {/* Show each challenge result */}
                    <div className="space-y-1.5">
                      {todayChallenges.map((ch, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-2 rounded-lg p-2 text-xs ${
                            challengeResults[idx]
                              ? 'bg-yoel-green/10 text-yoel-green'
                              : 'bg-destructive/10 text-destructive'
                          }`}
                        >
                          <span className="shrink-0">{challengeResults[idx] ? '✓' : '✗'}</span>
                          <Badge className={`text-[9px] px-1 py-0 border-0 shrink-0 ${TYPE_COLORS[ch.type]}`}>
                            {TYPE_LABELS[ch.type]}
                          </Badge>
                          <span className="truncate font-medium">{ch.question}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* ── Active challenge ── */
                  <>
                    {/* Challenge type badge */}
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
                        const isSelected = selectedOption === idx
                        const isCorrect = idx === currentChallenge.correctIndex
                        let btnClass =
                          'text-xs sm:text-sm py-1.5 sm:py-2 rounded-xl border transition-all font-medium'

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
                            ' bg-background border-border hover:border-yoel-primary/50 hover:bg-yoel-primary/5 cursor-pointer'
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
                          : 'Temps écoulé'}
                      </span>
                      {challengeAnswered && (
                        <div className="flex items-center gap-2">
                          <span
                            className={
                              challengeResults[currentChallengeIdx]
                                ? 'text-yoel-green font-medium'
                                : 'text-destructive font-medium'
                            }
                          >
                            {challengeResults[currentChallengeIdx] ? '✓ Correct !' : '✗ Incorrect'}
                          </span>
                          <Button
                            size="sm"
                            className="h-7 rounded-full bg-yoel-primary hover:bg-yoel-primary-dark text-white text-xs px-3"
                            onClick={handleNextChallenge}
                          >
                            {currentChallengeIdx < todayChallenges.length - 1 ? 'Suivant →' : 'Voir résultats'}
                          </Button>
                        </div>
                      )}
                    </div>
                  </>
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
                  Série de {streak} jours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2.5 p-3 sm:p-6 pt-0 sm:pt-0">
                <div className="grid grid-cols-7 gap-1 sm:gap-2">
                  {WEEK_DAYS.map((d, idx) => (
                    <motion.div
                      key={d.day}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.06, type: 'spring' }}
                      className={`flex flex-col items-center gap-0.5 rounded-lg sm:rounded-xl py-1 sm:py-2 px-0.5 transition-colors ${
                        d.completed
                          ? 'bg-gradient-to-b from-orange-500/20 to-orange-600/10 border border-orange-500/20'
                          : 'bg-muted/40 border border-transparent'
                      }`}
                    >
                      <span className="text-[9px] sm:text-[10px] text-muted-foreground font-medium">
                        {d.day}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold">
                        {d.completed ? '🔥' : d.date}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs text-muted-foreground">
                    Continuez votre série !
                  </span>
                  <Badge
                    variant="outline"
                    className="text-orange-500 border-orange-500/30 text-[10px]"
                  >
                    🔥 {streak} jours
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
                            onClick={() => navigate('stats')}
                          >
                            Détails
                            <ChevronRight className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2 p-4 sm:p-6 pt-0 sm:pt-0">
                        {LEADERBOARD.map((player, idx) => (
                          <motion.div
                            key={player.rank}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                            className="flex items-center gap-2 sm:gap-3 rounded-xl bg-muted/30 p-2.5 sm:p-3 transition-colors hover:bg-muted/50"
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
                              <AvatarFallback className="text-[10px] sm:text-xs font-semibold bg-yoel-blue/10 text-yoel-blue">
                                {player.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs sm:text-sm font-medium truncate flex items-center gap-1">
                                {player.name}
                                {player.isPremium && (
                                  <Star className="h-3 w-3 text-yoel-gold fill-yoel-gold" />
                                )}
                              </p>
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-muted-foreground">
                              {player.xp.toLocaleString()} XP
                            </span>
                          </motion.div>
                        ))}

                        {/* Current user rank hint */}
                        <Separator />
                        <div className="flex items-center gap-2 sm:gap-3 rounded-xl bg-yoel-primary/5 p-2.5 sm:p-3">
                          <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-yoel-primary/10 font-bold text-xs sm:text-sm text-yoel-primary">
                            12
                          </div>
                          <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                            <AvatarFallback className="text-[10px] sm:text-xs font-semibold bg-yoel-primary/10 text-yoel-primary">
                              {displayName
                                .split(' ')
                                .map((n) => n[0])
                                .join('')
                                .toUpperCase()
                                .slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs sm:text-sm font-medium truncate">{displayName} (vous)</p>
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-yoel-primary">
                            {xp.toLocaleString()} XP
                          </span>
                        </div>
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
                          <h3 className="text-xl sm:text-2xl font-bold gradient-text-blue">
                            {WORD_OF_THE_DAY.english}
                          </h3>
                          <p className="text-muted-foreground text-xs sm:text-sm">
                            {WORD_OF_THE_DAY.french}
                          </p>
                          <p className="text-[10px] sm:text-xs text-muted-foreground font-mono">
                            {WORD_OF_THE_DAY.phonetic}
                          </p>
                        </div>

                        <div className="rounded-xl bg-muted/40 p-2.5 sm:p-3">
                          <p className="text-xs sm:text-sm italic text-muted-foreground">
                            &ldquo;{WORD_OF_THE_DAY.example}&rdquo;
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full text-xs"
                            onClick={() => {
                              speakWord(WORD_OF_THE_DAY.english)
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
        transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 25 }}
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
