import { create } from 'zustand'
import { COURSE_DATA, getTotalLessonsForLevel } from '@/lib/course-data'

export type PageId = 
  | 'splash' | 'home' | 'login' | 'register' 
  | 'dashboard' | 'levels' | 'course' | 'exercises' 
  | 'chat' | 'stats' | 'profile' | 'settings' | 'premium' | 'certificate'

export interface UserState {
  id: string
  email: string
  name: string
  avatar: string | null
  level: string
  xp: number
  streak: number
  coins: number
  isPremium: boolean
  dailyGoal: number
  notifications: boolean
  darkMode: boolean
  soundEnabled: boolean
}

export interface Badge {
  id: string
  name: string
  icon: string
  description: string
  earnedAt?: string
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

// Helper: get today's date as YYYY-MM-DD string
const getTodayStr = () => new Date().toISOString().split('T')[0]

// Helper: compute recommended daily goal based on level and progress
export const getRecommendedDailyGoal = (level: string, progress: number): number => {
  // Base goal by level (higher levels = more ambitious goals)
  const levelGoals: Record<string, number> = {
    A1: 10,
    A2: 15,
    B1: 20,
    B2: 25,
    C1: 35,
    C2: 50,
  }
  const base = levelGoals[level] ?? 20
  // Increase goal slightly as progress within level increases
  const progressBonus = Math.floor(progress / 50) * 5
  return base + progressBonus
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

  // Chat
  chatMessages: ChatMsg[]
  addChatMessage: (msg: ChatMsg) => void
  clearChat: () => void
  isChatLoading: boolean
  setChatLoading: (loading: boolean) => void

  // Splash
  splashComplete: boolean
  setSplashComplete: (complete: boolean) => void

  // XP tracking
  addXP: (amount: number) => void
  dailyXpEarned: number
  lastXpDate: string
  setDailyGoal: (goal: number) => void
  completedLessons: string[]
  addCompletedLesson: (lessonId: string) => void
  earnedBadges: string[]
  earnBadge: (badgeId: string) => void
  dailyChallengeCompleted: boolean
  completeDailyChallenge: () => void
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
  setUser: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ 
    user: null, 
    isAuthenticated: false, 
    currentPage: 'home',
    chatMessages: [],
    currentLesson: null,
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

  // Chat
  chatMessages: [],
  addChatMessage: (msg) => set((state) => ({ 
    chatMessages: [...state.chatMessages, msg] 
  })),
  clearChat: () => set({ chatMessages: [] }),
  isChatLoading: false,
  setChatLoading: (loading) => set({ isChatLoading: loading }),

  // Splash
  splashComplete: false,
  setSplashComplete: (complete) => set({ splashComplete: complete }),

  // XP tracking
  dailyXpEarned: 0,
  lastXpDate: '',
  addXP: (amount) => set((state) => {
    const today = getTodayStr()
    const isNewDay = state.lastXpDate !== today
    const newDailyXp = isNewDay ? amount : state.dailyXpEarned + amount
    return {
      user: state.user ? { ...state.user, xp: (state.user.xp || 0) + amount, coins: (state.user.coins || 0) + Math.floor(amount / 2) } : state.user,
      dailyXpEarned: newDailyXp,
      lastXpDate: today,
    }
  }),
  setDailyGoal: (goal) => set((state) => ({
    user: state.user ? { ...state.user, dailyGoal: goal } : state.user,
  })),
  completedLessons: [],
  addCompletedLesson: (lessonId) => set((state) => ({
    completedLessons: state.completedLessons.includes(lessonId) ? state.completedLessons : [...state.completedLessons, lessonId],
  })),
  earnedBadges: ['first-lesson', 'streak-3', 'streak-7', 'quiz-master', 'vocabulary-100'],
  earnBadge: (badgeId) => set((state) => ({
    earnedBadges: state.earnedBadges.includes(badgeId) ? state.earnedBadges : [...state.earnedBadges, badgeId],
  })),
  dailyChallengeCompleted: false,
  completeDailyChallenge: () => set({ dailyChallengeCompleted: true }),
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
  { id: 'first-lesson', name: 'First Step', icon: '👣', description: 'Complete your first lesson', earnedAt: '2025-01-15' },
  { id: 'streak-3', name: 'On Fire', icon: '🔥', description: '3-day streak', earnedAt: '2025-01-18' },
  { id: 'streak-7', name: 'Week Warrior', icon: '⚔️', description: '7-day streak', earnedAt: '2025-01-22' },
  { id: 'quiz-master', name: 'Quiz Master', icon: '🧠', description: 'Score 100% on 5 quizzes', earnedAt: '2025-02-01' },
  { id: 'vocabulary-100', name: 'Word Collector', icon: '📚', description: 'Learn 100 words', earnedAt: '2025-02-10' },
  { id: 'chat-10', name: 'Social Butterfly', icon: '🦋', description: 'Have 10 AI conversations' },
  { id: 'streak-30', name: 'Unstoppable', icon: '💪', description: '30-day streak' },
  { id: 'level-a2', name: 'Level Up', icon: '🚀', description: 'Reach A2 level' },
  { id: 'perfect-week', name: 'Perfect Week', icon: '💎', description: 'Complete all daily challenges for a week' },
  { id: 'polyglot', name: 'Polyglot', icon: '🌍', description: 'Master all levels' },
]

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

