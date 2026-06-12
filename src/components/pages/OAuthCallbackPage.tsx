'use client'

import { useEffect } from 'react'
import { useAppStore, type UserState } from '@/lib/store'
import { Loader2 } from 'lucide-react'

/**
 * This page handles the OAuth callback from Google/Apple.
 * NextAuth redirects here after successful OAuth.
 * We read the session, update the Zustand store, and navigate to dashboard.
 */
export default function OAuthCallbackPage() {
  const { setUser, setCurrentLevel, navigate } = useAppStore()

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Fetch the NextAuth session
        const res = await fetch('/api/auth/session')
        if (!res.ok) throw new Error('Session fetch failed')

        const session = await res.json()

        if (session?.user) {
          // Check if user is admin
          if (session.user.role === 'admin') {
            const adminUser: UserState = {
              id: session.user.id,
              email: session.user.email,
              name: session.user.name || 'Admin',
              avatar: null,
              role: 'admin',
              level: session.user.level || 'C2',
              xp: session.user.xp || 0,
              streak: session.user.streak || 0,
              coins: session.user.coins || 0,
              isPremium: true,
              premiumPlan: 'integral',
              dailyGoal: session.user.dailyGoal || 20,
              notifications: true,
              darkMode: false,
              soundEnabled: true,
            }
            setUser(adminUser)
            navigate('admin-dashboard')
            return
          }

          // Regular user from OAuth
          const oauthUser: UserState = {
            id: session.user.id,
            email: session.user.email,
            name: session.user.name || session.user.email.split('@')[0],
            avatar: null,
            role: 'user',
            level: session.user.level || 'A1',
            xp: session.user.xp || 0,
            streak: session.user.streak || 0,
            coins: session.user.coins || 0,
            isPremium: session.user.isPremium || false,
            premiumPlan: session.user.premiumPlan || null,
            dailyGoal: session.user.dailyGoal ?? 20,
            notifications: true,
            darkMode: false,
            soundEnabled: true,
          }
          setUser(oauthUser)
          setCurrentLevel(oauthUser.level)
          navigate('dashboard')
        } else {
          // No session — redirect to login
          navigate('login')
        }
      } catch (error) {
        console.error('OAuth callback error:', error)
        navigate('login')
      }
    }

    handleCallback()
  }, [setUser, setCurrentLevel, navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin mx-auto text-yoel-primary" />
        <p className="mt-4 text-muted-foreground">Connexion en cours...</p>
      </div>
    </div>
  )
}
