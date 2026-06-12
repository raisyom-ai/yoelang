'use client'

import { useEffect } from 'react'
import { useAppStore, type PageId, type UserState } from '@/lib/store'
import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Dynamic imports for code splitting
const SplashScreen = dynamic(() => import('@/components/pages/SplashScreen'), { ssr: false })
const HomePage = dynamic(() => import('@/components/pages/HomePage'))
const LoginPage = dynamic(() => import('@/components/pages/LoginPage'))
const RegisterPage = dynamic(() => import('@/components/pages/RegisterPage'))
const DashboardPage = dynamic(() => import('@/components/pages/DashboardPage'))
const LevelsPage = dynamic(() => import('@/components/pages/LevelsPage'))
const CoursePage = dynamic(() => import('@/components/pages/CoursePage'))
const ExercisesPage = dynamic(() => import('@/components/pages/ExercisesPage'))
const ChatPage = dynamic(() => import('@/components/pages/ChatPage'))
const StatsPage = dynamic(() => import('@/components/pages/StatsPage'))
const ProfilePage = dynamic(() => import('@/components/pages/ProfilePage'))
const SettingsPage = dynamic(() => import('@/components/pages/SettingsPage'))
const PremiumPage = dynamic(() => import('@/components/pages/PremiumPage'))
const CertificatePage = dynamic(() => import('@/components/pages/CertificatePage'))
const AdminLoginPage = dynamic(() => import('@/components/pages/AdminLoginPage'))
const AdminDashboardPage = dynamic(() => import('@/components/pages/AdminDashboardPage'))

const pageComponents: Record<PageId, React.ComponentType> = {
  splash: SplashScreen,
  home: HomePage,
  login: LoginPage,
  register: RegisterPage,
  dashboard: DashboardPage,
  levels: LevelsPage,
  course: CoursePage,
  exercises: ExercisesPage,
  chat: ChatPage,
  stats: StatsPage,
  profile: ProfilePage,
  settings: SettingsPage,
  premium: PremiumPage,
  certificate: CertificatePage,
  'admin-login': AdminLoginPage,
  'admin-dashboard': AdminDashboardPage,
}

export default function YOELANGApp() {
  const currentPage = useAppStore((s) => s.currentPage)
  const { setUser, setCurrentLevel, navigate } = useAppStore()
  const PageComponent = pageComponents[currentPage]

  // Handle OAuth callback — when user returns from Google/Apple OAuth
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('oauth') === '1') {
      // Clean up the URL
      window.history.replaceState({}, '', '/')
      
      // Fetch the NextAuth session
      fetch('/api/auth/session')
        .then((res) => res.json())
        .then((session) => {
          if (session?.user) {
            const user = session.user
            // Check if admin
            if (user.role === 'admin') {
              const adminUser: UserState = {
                id: user.id,
                email: user.email,
                name: user.name || 'Admin',
                avatar: null,
                role: 'admin',
                level: user.level || 'C2',
                xp: user.xp || 0,
                streak: user.streak || 0,
                coins: user.coins || 0,
                isPremium: true,
                premiumPlan: 'integral',
                dailyGoal: user.dailyGoal || 20,
                notifications: true,
                darkMode: false,
                soundEnabled: true,
              }
              setUser(adminUser)
              navigate('admin-dashboard')
              return
            }

            // Regular user
            const oauthUser: UserState = {
              id: user.id,
              email: user.email,
              name: user.name || user.email.split('@')[0],
              avatar: null,
              role: 'user',
              level: user.level || 'A1',
              xp: user.xp || 0,
              streak: user.streak || 0,
              coins: user.coins || 0,
              isPremium: user.isPremium || false,
              premiumPlan: user.premiumPlan || null,
              dailyGoal: user.dailyGoal ?? 20,
              notifications: true,
              darkMode: false,
              soundEnabled: true,
            }
            setUser(oauthUser)
            setCurrentLevel(oauthUser.level)
            navigate('dashboard')
          } else {
            navigate('login')
          }
        })
        .catch(() => {
          navigate('login')
        })
    }
  }, [setUser, setCurrentLevel, navigate])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="min-h-screen"
        >
          <PageComponent />
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
