import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import AppleProvider from 'next-auth/providers/apple'
import CredentialsProvider from 'next-auth/providers/credentials'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  providers: [
    // ─── Google OAuth ──────────────────────────────────────────────
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
      ? [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
        ]
      : []),

    // ─── Apple OAuth ──────────────────────────────────────────────
    ...(process.env.APPLE_ID && process.env.APPLE_TEAM_ID && process.env.APPLE_KEY_ID && process.env.APPLE_PRIVATE_KEY
      ? [
          AppleProvider({
            clientId: process.env.APPLE_ID,
            clientSecret: {
              teamId: process.env.APPLE_TEAM_ID,
              privateKey: process.env.APPLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
              keyId: process.env.APPLE_KEY_ID,
            },
          } as never),
        ]
      : []),

    // ─── Credentials (email/password) ──────────────────────────────
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Mot de passe', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email et mot de passe requis')
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user) {
          throw new Error('Email ou mot de passe incorrect')
        }

        // Check if this is an OAuth-only account (no password set)
        if (!user.password || user.password.startsWith('oauth_')) {
          throw new Error('Ce compte utilise la connexion Google ou Apple. Veuillez utiliser le bouton correspondant.')
        }

        const validPassword = await bcrypt.compare(credentials.password, user.password)
        if (!validPassword) {
          throw new Error('Email ou mot de passe incorrect')
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          level: user.level,
          xp: user.xp,
          streak: user.streak,
          coins: user.coins,
          isPremium: user.isPremium,
          premiumPlan: user.premiumPlan,
          dailyGoal: user.dailyGoal,
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  callbacks: {
    async signIn({ user, account, profile }) {
      // ─── Handle OAuth sign-in (Google / Apple) ────────────────
      if (account?.provider === 'google' || account?.provider === 'apple') {
        const email = user.email
        if (!email) return false

        const existingUser = await db.user.findUnique({
          where: { email },
        })

        if (existingUser) {
          // User exists — update their info if needed
          // If the user was OAuth-only and now logs in again, that's fine
          return true
        }

        // Create new user from OAuth profile
        const name = user.name || email.split('@')[0]
        const oauthProvider = account.provider === 'google' ? 'google' : 'apple'

        await db.user.create({
          data: {
            email,
            name,
            password: `oauth_${oauthProvider}_${Date.now()}`, // Placeholder password for OAuth users
            role: 'user',
            level: 'A1',
            xp: 0,
            streak: 0,
            coins: 0,
            isPremium: false,
            dailyGoal: 20,
          },
        })

        return true
      }

      // Credentials sign-in is handled by the authorize function
      return true
    },

    async jwt({ token, user, trigger, session }) {
      // Initial sign in — user object is available
      if (user) {
        token.id = user.id
        token.role = (user as Record<string, unknown>).role || 'user'
        token.level = (user as Record<string, unknown>).level || 'A1'
        token.xp = (user as Record<string, unknown>).xp || 0
        token.streak = (user as Record<string, unknown>).streak || 0
        token.coins = (user as Record<string, unknown>).coins || 0
        token.isPremium = (user as Record<string, unknown>).isPremium || false
        token.premiumPlan = (user as Record<string, unknown>).premiumPlan || null
        token.dailyGoal = (user as Record<string, unknown>).dailyGoal || 20
      }

      // Update token when session is updated
      if (trigger === 'update' && session) {
        // Refresh user data from DB on session update
        const dbUser = await db.user.findUnique({
          where: { id: token.id as string },
        })
        if (dbUser) {
          token.role = dbUser.role
          token.level = dbUser.level
          token.xp = dbUser.xp
          token.streak = dbUser.streak
          token.coins = dbUser.coins
          token.isPremium = dbUser.isPremium
          token.premiumPlan = dbUser.premiumPlan
          token.dailyGoal = dbUser.dailyGoal
        }
      }

      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
        session.user.level = token.level as string
        session.user.xp = token.xp as number
        session.user.streak = token.streak as number
        session.user.coins = token.coins as number
        session.user.isPremium = token.isPremium as boolean
        session.user.premiumPlan = token.premiumPlan as string | null
        session.user.dailyGoal = token.dailyGoal as number
      }
      return session
    },
  },

  pages: {
    signIn: '/', // We handle sign-in UI ourselves
    error: '/',
  },

  secret: process.env.NEXTAUTH_SECRET || 'yoelang-dev-secret-change-in-production',
  debug: false,
}

// Type augmentation for NextAuth
declare module 'next-auth' {
  interface User {
    role?: string
    level?: string
    xp?: number
    streak?: number
    coins?: number
    isPremium?: boolean
    premiumPlan?: string | null
    dailyGoal?: number
  }

  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
      image?: string | null
      role: string
      level: string
      xp: number
      streak: number
      coins: number
      isPremium: boolean
      premiumPlan: string | null
      dailyGoal: number
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string
    role?: string
    level?: string
    xp?: number
    streak?: number
    coins?: number
    isPremium?: boolean
    premiumPlan?: string | null
    dailyGoal?: number
  }
}
