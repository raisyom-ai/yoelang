import { create } from 'zustand'
import { COURSE_DATA, getTotalLessonsForLevel } from '@/lib/course-data'

export type PageId = 
  | 'splash' | 'home' | 'login' | 'register' 
  | 'dashboard' | 'levels' | 'course' | 'exercises' 
  | 'chat' | 'stats' | 'profile' | 'settings' | 'premium' | 'certificate'
  | 'admin-login' | 'admin-dashboard'

// ─── Premium Plan Types ──────────────────────────────────────────────────

export type PremiumPlan = 'essentiel' | 'complet' | 'integral'

/**
 * Check if a specific premium feature is available for the user's plan.
 * Tier hierarchy: essentiel < complet < integral
 */
export const isFeatureAvailable = (
  isPremium: boolean,
  plan: PremiumPlan | null,
  requiredTier: PremiumPlan,
): boolean => {
  if (!isPremium) return false
  if (!plan) return false
  const tierOrder: PremiumPlan[] = ['essentiel', 'complet', 'integral']
  const userTierIndex = tierOrder.indexOf(plan)
  const requiredTierIndex = tierOrder.indexOf(requiredTier)
  return userTierIndex >= requiredTierIndex
}

/** Feature tier requirements */
export const FEATURE_TIERS = {
  exercises: 'essentiel' as PremiumPlan,       // Exercices illimités
  chatBasic: 'essentiel' as PremiumPlan,       // Chat IA 50 msg/mois
  xpDouble: 'essentiel' as PremiumPlan,        // XP doublé
  noAds: 'essentiel' as PremiumPlan,           // Zéro publicité
  voiceRecognition: 'complet' as PremiumPlan,  // Reconnaissance vocale
  certificates: 'complet' as PremiumPlan,      // Certificats officiels
  premiumBadges: 'complet' as PremiumPlan,     // Badges exclusifs
  advancedStats: 'complet' as PremiumPlan,     // Statistiques avancées
  offlineCourses: 'complet' as PremiumPlan,    // Cours hors ligne
  themes: 'integral' as PremiumPlan,           // Thèmes personnalisés
  prioritySupport: 'integral' as PremiumPlan,  // Support prioritaire
  earlyAccess: 'integral' as PremiumPlan,      // Accès anticipé
  legendBadge: 'integral' as PremiumPlan,      // Badge Légende
} as const

/** Chat message limits per plan */
export const CHAT_LIMITS: Record<PremiumPlan, number> = {
  essentiel: 50,
  complet: Infinity,
  integral: Infinity,
}

/** Free user daily exercise limit */
export const FREE_EXERCISE_LIMIT = 3

export interface UserState {
  id: string
  email: string
  name: string
  avatar: string | null
  role: 'user' | 'admin'
  level: string
  xp: number
  streak: number
  coins: number
  isPremium: boolean
  premiumPlan: PremiumPlan | null
  dailyGoal: number
  notifications: boolean
  darkMode: boolean
  soundEnabled: boolean
}

export type BadgeCategory = 'serie' | 'lecons' | 'quiz' | 'social' | 'maitrise'

export interface Badge {
  id: string
  name: string
  icon: string
  description: string
  category: BadgeCategory
  /** The target value to earn this badge (e.g. 3 for a 3-day streak) */
  requirement: number
  earnedAt?: string
}

export const BADGE_CATEGORY_LABELS: Record<BadgeCategory, string> = {
  serie: 'Série',
  lecons: 'Leçons',
  quiz: 'Quiz',
  social: 'Social',
  maitrise: 'Maîtrise',
}

export const BADGE_CATEGORY_COLORS: Record<BadgeCategory, string> = {
  serie: 'from-orange-500 to-red-500',
  lecons: 'from-yoel-primary to-yoel-primary-dark',
  quiz: 'from-yoel-green to-emerald-700',
  social: 'from-yoel-blue to-yoel-blue-dark',
  maitrise: 'from-yoel-gold to-amber-700',
}

export const BADGE_CATEGORY_BG: Record<BadgeCategory, string> = {
  serie: 'bg-orange-500/10',
  lecons: 'bg-yoel-primary/10',
  quiz: 'bg-yoel-green/10',
  social: 'bg-yoel-blue/10',
  maitrise: 'bg-yoel-gold/10',
}

export interface LevelInfo {
  code: string
  name: string
  description: string
  progress: number
  units: number
  completedUnits: number
  icon: string
  color: string
}

export interface LessonInfo {
  id: string
  title: string
  description: string
  type: string
  xpReward: number
  duration: number
  completed: boolean
  score: number
}

export interface ChatMsg {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

// ─── Lesson History Entry ────────────────────────────────────────────────────
export interface LessonHistoryEntry {
  id: string
  lessonId: string
  title: string
  type: string          // 'vocabulaire' | 'grammaire' | 'conversation' | 'conjugaison' | 'pronunciation'
  score: number         // 0-100
  xpEarned: number
  completedAt: string   // ISO date string
}

// Helper: get today's date as YYYY-MM-DD string
const getTodayStr = () => new Date().toISOString().split('T')[0]

// ─── Daily XP History Entry ──────────────────────────────────────────────────
export interface DailyXpRecord {
  date: string       // YYYY-MM-DD
  xpEarned: number   // total XP earned that day
  goal: number       // the goal that was set that day
}

// ─── Week Day Activity ──────────────────────────────────────────────────────
export interface WeekDayActivity {
  day: string        // Short day name (Lun, Mar, etc.)
  date: number       // Day of month
  completed: boolean // Whether the goal was met that day
  xpEarned: number  // XP earned that day
  isToday: boolean   // Whether this is today
  isFuture: boolean  // Whether this date is in the future
}

// ─── Certificate Entry ──────────────────────────────────────────────────────
export interface CertificateEntry {
  id: string               // Unique certificate ID (e.g. "YOELANG-A1-2025-001234")
  level: string            // CEFR level (A1-C2)
  earnedAt: string         // ISO date string when the certificate was earned
  totalLessons: number     // Total lessons in the level at time of completion
  completedLessons: number // Lessons completed
  avgScore: number         // Average score across all lessons in the level
  xpAtCompletion: number   // Total XP at the time of certificate earning
  userName: string         // Name as it appeared when certificate was earned
}

const LEVEL_NAMES_FR: Record<string, string> = {
  A1: 'Débutant',
  A2: 'Élémentaire',
  B1: 'Intermédiaire',
  B2: 'Intermédiaire Supérieur',
  C1: 'Avancé',
  C2: 'Maîtrise',
}

export { LEVEL_NAMES_FR }

/**
 * Generate a unique certificate ID.
 * Format: YOELANG-{LEVEL}-{YEAR}-{6-digit sequential}
 */
const generateCertificateId = (level: string): string => {
  const year = new Date().getFullYear()
  const seq = String(Math.floor(Math.random() * 999999)).padStart(6, '0')
  return `YOELANG-${level}-${year}-${seq}`
}

/**
 * Calculate current streak from XP history.
 * A streak day = a day where xpEarned > 0.
 * Counts consecutive active days ending with today or yesterday.
 * If today is still in progress (not yet in history), we also count it.
 */
export const calculateStreak = (
  xpHistory: DailyXpRecord[],
  dailyXpEarned: number,
): number => {
  const today = getTodayStr()
  const todayDate = new Date(today)

  // If user has earned XP today, today counts as a streak day
  const todayActive = dailyXpEarned > 0

  // Sort history by date descending (newest first)
  const sorted = [...xpHistory]
    .filter((d) => d.date < today) // exclude today (we handle it separately)
    .sort((a, b) => b.date.localeCompare(a.date))

  let streak = 0

  // If today is active, start counting from today
  if (todayActive) {
    streak = 1
  }

  // Continue counting backwards from yesterday
  for (let i = 0; i < sorted.length; i++) {
    const expectedDate = new Date(todayDate)
    expectedDate.setDate(expectedDate.getDate() - (streak + i))

    const expectedStr = expectedDate.toISOString().split('T')[0]

    if (sorted[i].date === expectedStr && sorted[i].xpEarned > 0) {
      streak++
    } else {
      break
    }
  }

  // If today is not active, check if yesterday started a streak
  if (!todayActive && sorted.length > 0 && sorted[0].xpEarned > 0) {
    streak = 1
    for (let i = 1; i < sorted.length; i++) {
      const yesterdayDate = new Date(sorted[0].date)
      const expectedDate = new Date(yesterdayDate)
      expectedDate.setDate(expectedDate.getDate() - i)

      const expectedStr = expectedDate.toISOString().split('T')[0]

      if (sorted[i].date === expectedStr && sorted[i].xpEarned > 0) {
        streak++
      } else {
        break
      }
    }
  }

  return streak
}

const FRENCH_DAY_NAMES = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']

/**
 * Build the current week's activity data from XP history.
 * Returns 7 days: starting from Monday of the current week.
 */
export const getWeekActivity = (
  xpHistory: DailyXpRecord[],
  dailyXpEarned: number,
  effectiveGoal: number,
): WeekDayActivity[] => {
  const today = new Date()
  const todayStr = getTodayStr()

  // Find Monday of the current week
  const dayOfWeek = today.getDay() // 0=Sun, 1=Mon, ...
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek
  const monday = new Date(today)
  monday.setDate(today.getDate() + mondayOffset)

  const weekDays: WeekDayActivity[] = []

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    const dateStr = d.toISOString().split('T')[0]
    const dayName = FRENCH_DAY_NAMES[d.getDay()]

    // Look up XP for this day
    let xpForDay = 0
    let goalForDay = effectiveGoal

    if (dateStr === todayStr) {
      // Today: use current session XP
      xpForDay = dailyXpEarned
      goalForDay = effectiveGoal
    } else {
      // Past day: look up in history
      const record = xpHistory.find((r) => r.date === dateStr)
      if (record) {
        xpForDay = record.xpEarned
        goalForDay = record.goal || effectiveGoal
      }
    }

    const isFuture = d > today && dateStr !== todayStr
    const isToday = dateStr === todayStr
    const completed = xpForDay >= goalForDay && xpForDay > 0

    weekDays.push({
      day: dayName,
      date: d.getDate(),
      completed,
      xpEarned: xpForDay,
      isToday,
      isFuture,
    })
  }

  return weekDays
}

// Minimum goals by level (floor — goal never goes below this)
const LEVEL_MIN_GOALS: Record<string, number> = {
  A1: 10, A2: 10, B1: 15, B2: 15, C1: 20, C2: 30,
}

// Starting goals by level (for new users with no history)
const LEVEL_START_GOALS: Record<string, number> = {
  A1: 10, A2: 15, B1: 20, B2: 25, C1: 30, C2: 40,
}

/**
 * Compute recommended daily goal based on LEARNER PERFORMANCE.
 *
 * Algorithm:
 * 1. If no history (new learner) → use level-based starting goal
 * 2. Calculate average XP earned per active day (last 7 days)
 * 3. Calculate goal completion rate (days goal was met / active days)
 * 4. Adjust:
 *    - Completion rate ≥ 80% & avg > goal → INCREASE (learner is comfortable)
 *    - Completion rate ≥ 60% & avg ≈ goal → STABLE (learner is on track)
 *    - Completion rate < 60% → DECREASE (goal is too ambitious, keep motivating)
 *    - Very low activity (< 3 active days) → reduce gently
 * 5. Always respect level minimum (goal never goes below LEVEL_MIN_GOALS)
 * 6. Round to nearest 5 for clean numbers
 */
export const getRecommendedDailyGoal = (
  level: string,
  progress: number,
  xpHistory: DailyXpRecord[] = [],
): number => {
  const minGoal = LEVEL_MIN_GOALS[level] ?? 10

  // No history yet → give starting goal + small progress bonus
  if (xpHistory.length === 0) {
    const startGoal = LEVEL_START_GOALS[level] ?? 15
    const progressBonus = Math.floor(progress / 60) * 5
    return Math.max(minGoal, startGoal + progressBonus)
  }

  // --- Analyze last 7 days of performance ---
  const activeDays = xpHistory.filter((d) => d.xpEarned > 0)
  const avgXpPerDay = activeDays.length > 0
    ? activeDays.reduce((sum, d) => sum + d.xpEarned, 0) / activeDays.length
    : 0

  // Completion rate: how often the learner met their goal
  const daysWithGoal = xpHistory.filter((d) => d.goal > 0)
  const daysGoalMet = daysWithGoal.filter((d) => d.xpEarned >= d.goal).length
  const completionRate = daysWithGoal.length > 0 ? daysGoalMet / daysWithGoal.length : 0

  // Current goal (last known goal from history)
  const currentGoal = xpHistory[xpHistory.length - 1]?.goal ?? LEVEL_START_GOALS[level] ?? 15

  let newGoal = currentGoal

  if (activeDays.length < 3) {
    // Very low activity → reduce gently to keep motivation
    newGoal = Math.max(minGoal, Math.floor(avgXpPerDay * 0.8 / 5) * 5 || minGoal)
  } else if (completionRate >= 0.8 && avgXpPerDay > currentGoal * 1.1) {
    // Learner consistently EXCEEDS goal by 10%+ → increase ambitiously
    newGoal = Math.floor(avgXpPerDay * 1.1 / 5) * 5
  } else if (completionRate >= 0.8) {
    // Learner meets goal regularly → increase slightly (stretch goal)
    newGoal = currentGoal + 5
  } else if (completionRate >= 0.6) {
    // Learner meets goal most of the time → keep stable
    newGoal = currentGoal
  } else if (completionRate >= 0.3) {
    // Learner struggles to meet goal → reduce slightly
    newGoal = Math.max(minGoal, currentGoal - 5)
  } else {
    // Learner rarely meets goal → set goal closer to their actual performance
    newGoal = Math.max(minGoal, Math.floor(avgXpPerDay * 1.2 / 5) * 5 || minGoal)
  }

  // Ensure goal stays within reasonable bounds
  newGoal = Math.max(minGoal, Math.min(newGoal, 100))

  return newGoal
}

interface AppState {
  // Navigation
  currentPage: PageId
  previousPage: PageId | null
  navigate: (page: PageId) => void
  goBack: () => void

  // Auth
  isAuthenticated: boolean
  user: UserState | null
  setUser: (user: UserState) => void
  logout: () => void

  // Theme
  isDarkMode: boolean
  toggleDarkMode: () => void

  // Current learning context
  currentLevel: string
  setCurrentLevel: (level: string) => void
  currentLesson: LessonInfo | null
  setCurrentLesson: (lesson: LessonInfo | null) => void
  lastVisitedLesson: LessonInfo | null
  setLastVisitedLesson: (lesson: LessonInfo) => void

  // Chat
  chatMessages: ChatMsg[]
  addChatMessage: (msg: ChatMsg) => void
  clearChat: () => void
  isChatLoading: boolean
  setChatLoading: (loading: boolean) => void

  // Splash
  splashComplete: boolean
  setSplashComplete: (complete: boolean) => void

  // Premium plan
  chatMessagesSent: number
  chatResetDate: string
  canSendChatMessage: () => boolean
  getRemainingChatMessages: () => number
  exercisesCompletedToday: number
  exerciseResetDate: string
  canDoExercise: () => boolean
  getRemainingExercises: () => number
  incrementExerciseCount: () => void

  // XP tracking
  addXP: (amount: number) => void
  dailyXpEarned: number
  lastXpDate: string
  dailyXpHistory: DailyXpRecord[]
  setDailyGoal: (goal: number) => void
  completedLessons: string[]
  addCompletedLesson: (lessonId: string) => void
  lessonHistory: LessonHistoryEntry[]
  addLessonHistoryEntry: (entry: Omit<LessonHistoryEntry, 'id'>) => void
  earnedBadges: string[]
  earnBadge: (badgeId: string) => void
  dailyChallengeCompleted: boolean
  completeDailyChallenge: () => void
  earnedCertificates: CertificateEntry[]
  earnCertificate: (level: string, totalLessons: number, completedLessons: number, avgScore: number) => void
}

// Generate demo XP history for the past 7 days (so the adaptive algorithm has data to work with)
const generateDemoXpHistory = (level: string): DailyXpRecord[] => {
  const today = new Date()
  const baseGoal = LEVEL_START_GOALS[level] ?? 15
  const history: DailyXpRecord[] = []
  for (let i = 7; i >= 1; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    const dateStr = d.toISOString().split('T')[0]
    // Simulate varying daily XP: some days over goal, some under
    const performance = [0.6, 1.2, 0.8, 1.5, 0.4, 0.9, 1.1][7 - i]
    history.push({
      date: dateStr,
      xpEarned: Math.round(baseGoal * performance),
      goal: baseGoal,
    })
  }
  return history
}

// Generate demo lesson history for the past days
const generateDemoLessonHistory = (level: string): LessonHistoryEntry[] => {
  const today = new Date()
  const lessonTitlesByLevel: Record<string, { title: string; type: string }[]> = {
    A1: [
      { title: 'Greetings & Introductions', type: 'vocabulaire' },
      { title: 'Numbers & Counting', type: 'vocabulaire' },
      { title: 'Present Simple Tense', type: 'grammaire' },
      { title: 'At the Restaurant', type: 'conversation' },
      { title: 'Family & Relationships', type: 'vocabulaire' },
      { title: 'Daily Routines', type: 'conjugaison' },
      { title: 'Colors & Shapes', type: 'vocabulaire' },
      { title: 'To Be / To Have', type: 'grammaire' },
      { title: 'Asking for Directions', type: 'conversation' },
      { title: 'Food & Drinks', type: 'vocabulaire' },
    ],
    A2: [
      { title: 'Past Simple Tense', type: 'grammaire' },
      { title: 'Travel Vocabulary', type: 'vocabulaire' },
      { title: 'At the Hotel', type: 'conversation' },
      { title: 'Comparatives & Superlatives', type: 'grammaire' },
      { title: 'Health & Body', type: 'vocabulaire' },
      { title: 'Future with Will', type: 'conjugaison' },
      { title: 'Shopping for Clothes', type: 'conversation' },
      { title: 'Weather Expressions', type: 'vocabulaire' },
    ],
    B1: [
      { title: 'Present Perfect', type: 'grammaire' },
      { title: 'Conditional Sentences', type: 'grammaire' },
      { title: 'Job Interview Skills', type: 'conversation' },
      { title: 'Phrasal Verbs', type: 'vocabulaire' },
      { title: 'Reported Speech', type: 'grammaire' },
      { title: 'Environmental Issues', type: 'vocabulaire' },
    ],
    B2: [
      { title: 'Passive Voice Mastery', type: 'grammaire' },
      { title: 'Advanced Conditionals', type: 'grammaire' },
      { title: 'Debating Techniques', type: 'conversation' },
      { title: 'Academic Vocabulary', type: 'vocabulaire' },
    ],
    C1: [
      { title: 'Inversion & Fronting', type: 'grammaire' },
      { title: 'Discourse Markers', type: 'vocabulaire' },
      { title: 'Formal Presentations', type: 'conversation' },
    ],
    C2: [
      { title: 'Stylistic Variation', type: 'grammaire' },
      { title: 'Idiomatic Mastery', type: 'vocabulaire' },
    ],
  }

  const lessons = lessonTitlesByLevel[level] || lessonTitlesByLevel.A1
  const history: LessonHistoryEntry[] = []

  for (let i = 0; i < Math.min(lessons.length, 10); i++) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    const completedAt = d.toISOString()
    const lesson = lessons[i]
    const score = Math.floor(Math.random() * 25) + 75 // 75-99

    history.push({
      id: `demo-lh-${i}`,
      lessonId: `lesson-${level.toLowerCase()}-${i + 1}`,
      title: lesson.title,
      type: lesson.type,
      score,
      xpEarned: Math.round(score / 100 * (level === 'A1' ? 15 : level === 'A2' ? 20 : 25)),
      completedAt,
    })
  }

  return history
}

export const useAppStore = create<AppState>((set, get) => ({
  // Navigation
  currentPage: 'splash',
  previousPage: null,
  navigate: (page) => set((state) => ({ 
    currentPage: page, 
    previousPage: state.currentPage 
  })),
  goBack: () => set((state) => ({ 
    currentPage: state.previousPage || 'dashboard',
    previousPage: null 
  })),

  // Auth
  isAuthenticated: false,
  user: null,
  setUser: (user) => set((state) => ({
    user,
    isAuthenticated: true,
    // Initialize XP history with demo data if empty
    dailyXpHistory: state.dailyXpHistory.length > 0 ? state.dailyXpHistory : generateDemoXpHistory(user.level),
    // Initialize lesson history with demo data if empty
    lessonHistory: state.lessonHistory.length > 0 ? state.lessonHistory : generateDemoLessonHistory(user.level),
    // Initialize with a demo A1 certificate so users can see the feature
    earnedCertificates: state.earnedCertificates.length > 0 ? state.earnedCertificates : [
      {
        id: generateCertificateId('A1'),
        level: 'A1',
        earnedAt: new Date(Date.now() - 3 * 86400000).toISOString(), // 3 days ago
        totalLessons: 20,
        completedLessons: 20,
        avgScore: 85,
        xpAtCompletion: 300,
        userName: user.name,
      }
    ],
  })),
  logout: () => set({ 
    user: null, 
    isAuthenticated: false, 
    currentPage: 'home',
    chatMessages: [],
    currentLesson: null,
    dailyXpEarned: 0,
    lastXpDate: '',
    dailyXpHistory: [],
    lessonHistory: [],
    earnedCertificates: [],
  }),

  // Theme
  isDarkMode: false,
  toggleDarkMode: () => set((state) => {
    const newDark = !state.isDarkMode
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', newDark)
    }
    return { isDarkMode: newDark }
  }),

  // Current learning context
  currentLevel: 'A1',
  setCurrentLevel: (level) => set({ currentLevel: level }),
  currentLesson: null,
  setCurrentLesson: (lesson) => set({ currentLesson: lesson }),
  lastVisitedLesson: null,
  setLastVisitedLesson: (lesson) => set({ lastVisitedLesson: lesson }),

  // Chat
  chatMessages: [],
  addChatMessage: (msg) => set((state) => {
    const today = getTodayStr()
    const currentCount = state.chatResetDate !== today ? 0 : state.chatMessagesSent
    return {
      chatMessages: [...state.chatMessages, msg],
      chatMessagesSent: currentCount + 1,
      chatResetDate: today,
    }
  }),
  clearChat: () => set({ chatMessages: [] }),
  isChatLoading: false,
  setChatLoading: (loading) => set({ isChatLoading: loading }),

  // Splash
  splashComplete: false,
  setSplashComplete: (complete) => set({ splashComplete: complete }),

  // XP tracking
  dailyXpEarned: 0,
  lastXpDate: '',
  dailyXpHistory: [],
  // Premium plan tracking
  chatMessagesSent: 0,
  chatResetDate: getTodayStr(),
  canSendChatMessage: () => {
    const state = get()
    if (!state.user?.isPremium) return false
    const plan = state.user.premiumPlan
    if (!plan) return false
    // Reset counter if new day
    const today = getTodayStr()
    if (state.chatResetDate !== today) {
      set({ chatMessagesSent: 0, chatResetDate: today })
    }
    const limit = CHAT_LIMITS[plan]
    return get().chatMessagesSent < limit
  },
  getRemainingChatMessages: () => {
    const state = get()
    if (!state.user?.isPremium || !state.user.premiumPlan) return 0
    const today = getTodayStr()
    const sent = state.chatResetDate !== today ? 0 : state.chatMessagesSent
    const limit = CHAT_LIMITS[state.user.premiumPlan]
    return limit === Infinity ? -1 : Math.max(0, limit - sent)
  },
  exercisesCompletedToday: 0,
  exerciseResetDate: getTodayStr(),
  canDoExercise: () => {
    const state = get()
    // Premium users with essentiel+ have unlimited exercises
    if (state.user?.isPremium && state.user.premiumPlan && isFeatureAvailable(state.user.isPremium, state.user.premiumPlan, 'essentiel')) {
      return true
    }
    // Free users have limited exercises per day
    const today = getTodayStr()
    const completed = state.exerciseResetDate !== today ? 0 : state.exercisesCompletedToday
    return completed < FREE_EXERCISE_LIMIT
  },
  getRemainingExercises: () => {
    const state = get()
    if (state.user?.isPremium && state.user.premiumPlan && isFeatureAvailable(state.user.isPremium, state.user.premiumPlan, 'essentiel')) {
      return -1 // unlimited
    }
    const today = getTodayStr()
    const completed = state.exerciseResetDate !== today ? 0 : state.exercisesCompletedToday
    return Math.max(0, FREE_EXERCISE_LIMIT - completed)
  },
  incrementExerciseCount: () => set((state) => {
    const today = getTodayStr()
    const completed = state.exerciseResetDate !== today ? 0 : state.exercisesCompletedToday
    return {
      exercisesCompletedToday: completed + 1,
      exerciseResetDate: today,
    }
  }),

  // XP tracking
  addXP: (amount) => set((state) => {
    const today = getTodayStr()
    const isNewDay = state.lastXpDate !== today

    // When a new day starts, save yesterday's record to history
    let updatedHistory = [...state.dailyXpHistory]
    if (isNewDay && state.lastXpDate) {
      // Save the previous day's record
      updatedHistory.push({
        date: state.lastXpDate,
        xpEarned: state.dailyXpEarned,
        goal: state.user?.dailyGoal && state.user.dailyGoal > 0
          ? state.user.dailyGoal
          : getRecommendedDailyGoal(state.user?.level ?? 'A1', 0, updatedHistory),
      })
      // Keep only last 7 days
      updatedHistory = updatedHistory.slice(-7)
    }

    // XP doublé for premium essentiel+
    const hasXpDouble = state.user?.isPremium && state.user.premiumPlan
      ? isFeatureAvailable(state.user.isPremium, state.user.premiumPlan, FEATURE_TIERS.xpDouble)
      : false
    const effectiveAmount = hasXpDouble ? amount * 2 : amount

    const newDailyXp = isNewDay ? effectiveAmount : state.dailyXpEarned + effectiveAmount
    return {
      user: state.user ? { ...state.user, xp: (state.user.xp || 0) + effectiveAmount, coins: (state.user.coins || 0) + Math.floor(effectiveAmount / 2) } : state.user,
      dailyXpEarned: newDailyXp,
      lastXpDate: today,
      dailyXpHistory: updatedHistory,
    }
  }),
  setDailyGoal: (goal) => set((state) => ({
    user: state.user ? { ...state.user, dailyGoal: goal } : state.user,
  })),
  completedLessons: [],
  addCompletedLesson: (lessonId) => set((state) => ({
    completedLessons: state.completedLessons.includes(lessonId) ? state.completedLessons : [...state.completedLessons, lessonId],
  })),
  lessonHistory: [],
  addLessonHistoryEntry: (entry) => set((state) => {
    const id = `lh-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
    // Add to beginning (newest first), keep max 50 entries
    const updated = [{ ...entry, id }, ...state.lessonHistory].slice(0, 50)
    return { lessonHistory: updated }
  }),
  earnedBadges: ['streak-1', 'streak-3', 'streak-7', 'first-lesson', 'lessons-5', 'lessons-10', 'perfect-quiz', 'chat-first', 'vocab-50'],
  earnBadge: (badgeId) => set((state) => ({
    earnedBadges: state.earnedBadges.includes(badgeId) ? state.earnedBadges : [...state.earnedBadges, badgeId],
  })),
  dailyChallengeCompleted: false,
  completeDailyChallenge: () => set({ dailyChallengeCompleted: true }),
  earnedCertificates: [],
  earnCertificate: (level, totalLessons, completedLessons, avgScore) => set((state) => {
    // Don't award duplicate certificate for same level
    if (state.earnedCertificates.some((c) => c.level === level)) {
      return state
    }
    const cert: CertificateEntry = {
      id: generateCertificateId(level),
      level,
      earnedAt: new Date().toISOString(),
      totalLessons,
      completedLessons,
      avgScore: Math.round(avgScore),
      xpAtCompletion: state.user?.xp ?? 0,
      userName: state.user?.name ?? 'Apprenant',
    }
    return { earnedCertificates: [...state.earnedCertificates, cert] }
  }),
}))

// Demo data - built from course-data.ts
export const LEVELS: LevelInfo[] = Object.values(COURSE_DATA).map((level) => ({
  code: level.code,
  name: level.name,
  description: level.description,
  progress: level.code === 'A1' ? 75 : level.code === 'A2' ? 40 : level.code === 'B1' ? 15 : 0,
  units: level.units.length,
  completedUnits: level.code === 'A1' ? 6 : level.code === 'A2' ? 4 : level.code === 'B1' ? 2 : 0,
  icon: level.icon,
  color: level.color,
}))

export const BADGES: Badge[] = [
  // ─── Série (Streak) ──────────────────────────────────────────
  { id: 'streak-1', name: 'Premier Pas', icon: '🌱', description: 'Atteignez 1 jour de série', category: 'serie', requirement: 1 },
  { id: 'streak-3', name: 'En Feu', icon: '🔥', description: 'Atteignez 3 jours de série', category: 'serie', requirement: 3 },
  { id: 'streak-7', name: 'Guerrier', icon: '⚔️', description: 'Atteignez 7 jours de série', category: 'serie', requirement: 7 },
  { id: 'streak-14', name: 'Infatigable', icon: '💪', description: 'Atteignez 14 jours de série', category: 'serie', requirement: 14 },
  { id: 'streak-30', name: 'Inarrêtable', icon: '🏆', description: 'Atteignez 30 jours de série', category: 'serie', requirement: 30 },
  { id: 'streak-100', name: 'Légende', icon: '👑', description: 'Atteignez 100 jours de série', category: 'serie', requirement: 100 },

  // ─── Leçons (Lessons) ────────────────────────────────────────
  { id: 'first-lesson', name: 'Déclic', icon: '👣', description: 'Complétez votre première leçon', category: 'lecons', requirement: 1 },
  { id: 'lessons-5', name: 'Apprenti', icon: '📖', description: 'Complétez 5 leçons', category: 'lecons', requirement: 5 },
  { id: 'lessons-10', name: 'Étudiant', icon: '🎓', description: 'Complétez 10 leçons', category: 'lecons', requirement: 10 },
  { id: 'lessons-25', name: 'Érudit', icon: '📚', description: 'Complétez 25 leçons', category: 'lecons', requirement: 25 },
  { id: 'lessons-50', name: 'Savant', icon: '🏛️', description: 'Complétez 50 leçons', category: 'lecons', requirement: 50 },

  // ─── Quiz ────────────────────────────────────────────────────
  { id: 'perfect-quiz', name: 'Parfait', icon: '💯', description: 'Obtenez 100% à un quiz', category: 'quiz', requirement: 1 },
  { id: 'perfect-5', name: 'Précision', icon: '🎯', description: 'Obtenez 100% à 5 quiz', category: 'quiz', requirement: 5 },
  { id: 'perfect-10', name: 'Maître Quiz', icon: '🧠', description: 'Obtenez 100% à 10 quiz', category: 'quiz', requirement: 10 },
  { id: 'score-90-10', name: 'Excellence', icon: '⭐', description: 'Score ≥ 90% sur 10 leçons', category: 'quiz', requirement: 10 },

  // ─── Social ──────────────────────────────────────────────────
  { id: 'chat-first', name: 'Bavard', icon: '💬', description: 'Ayez votre première conversation IA', category: 'social', requirement: 1 },
  { id: 'chat-10', name: 'Papillon', icon: '🦋', description: 'Ayez 10 conversations IA', category: 'social', requirement: 10 },
  { id: 'chat-50', name: 'Orateur', icon: '🎤', description: 'Ayez 50 conversations IA', category: 'social', requirement: 50 },

  // ─── Maîtrise (Mastery) ──────────────────────────────────────
  { id: 'level-a2', name: 'Ascension', icon: '🚀', description: 'Atteignez le niveau A2', category: 'maitrise', requirement: 1 },
  { id: 'level-b1', name: 'Progression', icon: '🏔️', description: 'Atteignez le niveau B1', category: 'maitrise', requirement: 1 },
  { id: 'level-b2', name: 'Expertise', icon: '🌟', description: 'Atteignez le niveau B2', category: 'maitrise', requirement: 1 },
  { id: 'level-c1', name: 'Virtuosité', icon: '✨', description: 'Atteignez le niveau C1', category: 'maitrise', requirement: 1 },
  { id: 'level-c2', name: 'Polyglotte', icon: '🌍', description: 'Maîtrisez tous les niveaux', category: 'maitrise', requirement: 1 },
  { id: 'vocab-50', name: 'Collecteur', icon: '📦', description: 'Apprenez 50 mots', category: 'maitrise', requirement: 50 },
  { id: 'vocab-100', name: 'Encyclopédie', icon: '📖', description: 'Apprenez 100 mots', category: 'maitrise', requirement: 100 },

  // ─── Premium ──────────────────────────────────────────────
  { id: 'premium-star', name: 'Étoile Premium', icon: '⭐', description: 'Badge exclusif pour les membres Premium', category: 'maitrise', requirement: 1 },
  { id: 'premium-diamond', name: 'Diamant', icon: '💎', description: 'Votre soutien fait briller Yoel', category: 'maitrise', requirement: 1 },
  { id: 'premium-crown', name: 'Couronne', icon: '👑', description: 'La marque des apprenants dévoués', category: 'maitrise', requirement: 1 },
  { id: 'premium-rocket', name: 'Fusée', icon: '🚀', description: 'Apprentissage accéléré garanti', category: 'maitrise', requirement: 1 },
]

/**
 * Compute the current progress for a given badge based on live store data.
 * Returns a number from 0 to badge.requirement.
 */
export const getBadgeProgress = (
  badge: Badge,
  streak: number,
  lessonCount: number,
  perfectQuizCount: number,
  highScoreCount: number,
  chatCount: number,
  userLevel: string,
  vocabCount: number,
): number => {
  switch (badge.id) {
    // Série badges
    case 'streak-1':
    case 'streak-3':
    case 'streak-7':
    case 'streak-14':
    case 'streak-30':
    case 'streak-100':
      return Math.min(streak, badge.requirement)

    // Leçons badges
    case 'first-lesson':
    case 'lessons-5':
    case 'lessons-10':
    case 'lessons-25':
    case 'lessons-50':
      return Math.min(lessonCount, badge.requirement)

    // Quiz badges
    case 'perfect-quiz':
    case 'perfect-5':
    case 'perfect-10':
      return Math.min(perfectQuizCount, badge.requirement)
    case 'score-90-10':
      return Math.min(highScoreCount, badge.requirement)

    // Social badges
    case 'chat-first':
    case 'chat-10':
    case 'chat-50':
      return Math.min(chatCount, badge.requirement)

    // Maîtrise badges — level reached
    case 'level-a2':
      return ['A2','B1','B2','C1','C2'].includes(userLevel) ? 1 : 0
    case 'level-b1':
      return ['B1','B2','C1','C2'].includes(userLevel) ? 1 : 0
    case 'level-b2':
      return ['B2','C1','C2'].includes(userLevel) ? 1 : 0
    case 'level-c1':
      return ['C1','C2'].includes(userLevel) ? 1 : 0
    case 'level-c2':
      return userLevel === 'C2' ? 1 : 0

    // Vocab badges
    case 'vocab-50':
    case 'vocab-100':
      return Math.min(vocabCount, badge.requirement)

    default:
      return 0
  }
}

/**
 * Check all badges and auto-earn any that should be awarded.
 * Returns an array of newly earned badge IDs.
 */
export const checkAndAwardBadges = (
  earnedBadges: string[],
  streak: number,
  lessonCount: number,
  perfectQuizCount: number,
  highScoreCount: number,
  chatCount: number,
  userLevel: string,
  vocabCount: number,
): string[] => {
  const newlyEarned: string[] = []
  for (const badge of BADGES) {
    if (earnedBadges.includes(badge.id)) continue
    const progress = getBadgeProgress(badge, streak, lessonCount, perfectQuizCount, highScoreCount, chatCount, userLevel, vocabCount)
    if (progress >= badge.requirement) {
      newlyEarned.push(badge.id)
    }
  }
  return newlyEarned
}

export const DEMO_LESSONS: LessonInfo[] = COURSE_DATA.A1.lessons.map((l, i) => ({
  id: l.id,
  title: l.title,
  description: l.description,
  type: l.type,
  xpReward: l.xpReward,
  duration: l.duration,
  completed: i < 15, // first 15 lessons completed for demo
  score: i < 15 ? Math.floor(Math.random() * 20 + 80) : 0,
}))

