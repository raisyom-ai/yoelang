import { create } from 'zustand'

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
  addXP: (amount) => set((state) => ({
    user: state.user ? { ...state.user, xp: (state.user.xp || 0) + amount, coins: (state.user.coins || 0) + Math.floor(amount / 2) } : state.user,
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

// Demo data
export const LEVELS: LevelInfo[] = [
  { code: 'A1', name: 'Beginner', description: 'Start your English journey with basic words and phrases', progress: 75, units: 8, completedUnits: 6, icon: '🌱', color: 'from-green-400 to-emerald-600' },
  { code: 'A2', name: 'Elementary', description: 'Build on basics with simple conversations', progress: 40, units: 10, completedUnits: 4, icon: '🌿', color: 'from-emerald-400 to-teal-600' },
  { code: 'B1', name: 'Intermediate', description: 'Handle most travel and work situations', progress: 15, units: 12, completedUnits: 2, icon: '🌳', color: 'from-teal-400 to-cyan-600' },
  { code: 'B2', name: 'Upper Intermediate', description: 'Communicate fluently on complex topics', progress: 0, units: 12, completedUnits: 0, icon: '🏔️', color: 'from-cyan-400 to-blue-600' },
  { code: 'C1', name: 'Advanced', description: 'Express ideas with nuance and precision', progress: 0, units: 14, completedUnits: 0, icon: '⭐', color: 'from-blue-400 to-indigo-600' },
  { code: 'C2', name: 'Mastery', description: 'Near-native proficiency and cultural fluency', progress: 0, units: 14, completedUnits: 0, icon: '👑', color: 'from-indigo-400 to-purple-600' },
]

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

export const DEMO_LESSONS: LessonInfo[] = [
  { id: '1', title: 'Greetings & Introductions', description: 'Learn to greet people and introduce yourself', type: 'vocabulary', xpReward: 15, duration: 5, completed: true, score: 95 },
  { id: '2', title: 'Numbers & Counting', description: 'Master numbers from 1 to 100', type: 'vocabulary', xpReward: 15, duration: 8, completed: true, score: 88 },
  { id: '3', title: 'Present Simple Tense', description: 'Form sentences in present simple', type: 'grammar', xpReward: 20, duration: 10, completed: true, score: 92 },
  { id: '4', title: 'At the Restaurant', description: 'Order food and have a restaurant conversation', type: 'conversation', xpReward: 25, duration: 12, completed: false, score: 0 },
  { id: '5', title: 'Family & Relationships', description: 'Talk about your family members', type: 'vocabulary', xpReward: 15, duration: 7, completed: false, score: 0 },
  { id: '6', title: 'Articles: A, An, The', description: 'When and how to use articles correctly', type: 'grammar', xpReward: 20, duration: 10, completed: false, score: 0 },
  { id: '7', title: 'Daily Routine', description: 'Describe your daily activities', type: 'conversation', xpReward: 25, duration: 12, completed: false, score: 0 },
  { id: '8', title: 'Pronunciation Basics', description: 'Master English sounds and intonation', type: 'pronunciation', xpReward: 20, duration: 8, completed: false, score: 0 },
]
