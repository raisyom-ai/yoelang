'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useAppStore, type PageId } from '@/lib/store'
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
const ExamPage = dynamic(() => import('@/components/pages/ExamPage'))
const ShopPage = dynamic(() => import('@/components/pages/ShopPage'))
const LeaderboardPage = dynamic(() => import('@/components/pages/LeaderboardPage'))
const ChallengesPage = dynamic(() => import('@/components/pages/ChallengesPage'))

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
  'exam': ExamPage,
  'shop': ShopPage,
  'leaderboard': LeaderboardPage,
  'challenges': ChallengesPage,
}

export default function YOELANGApp() {
  const currentPage = useAppStore((s) => s.currentPage)
  const PageComponent = pageComponents[currentPage]

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeInOut' as const }}
          className="min-h-screen"
        >
          <PageComponent />
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
