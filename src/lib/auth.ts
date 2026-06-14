import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  providers: [
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

        // Check if this is a legacy OAuth-only account (no real password set)
        // These users need to set a password before they can log in
        if (!user.password || user.password.startsWith('oauth_') || user.password.startsWith('oauth:')) {
          throw new Error('COMPTE_SANS_MOT_DE_PASSE:Vous devez définir un mot de passe pour votre compte. Utilisez la fonctionnalité "Définir un mot de passe".')
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
    async signIn({ user }) {
      // Credentials sign-in is handled by the authorize function
      // Just attach DB fields if needed
      if (user?.email) {
        const dbUser = await db.user.findUnique({
          where: { email: user.email },
        })
        if (dbUser) {
          user.id = dbUser.id
          user.role = dbUser.role
          user.level = dbUser.level
          user.xp = dbUser.xp
          user.streak = dbUser.streak
          user.coins = dbUser.coins
          user.isPremium = dbUser.isPremium
          user.premiumPlan = dbUser.premiumPlan
          user.dailyGoal = dbUser.dailyGoal
        }
      }
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

    // ─── Redirect callback ────────────────────────────────────────────
    async redirect({ url, baseUrl }) {
      // If url is a relative path, use it directly
      if (url.startsWith('/')) return baseUrl + url
      // If url is on the same origin, use it
      try {
        if (new URL(url).origin === baseUrl) return url
      } catch {
        // Invalid URL, fall through to default
      }
      // Default to baseUrl (our app root)
      return baseUrl
    },
  },

  pages: {
    signIn: '/', // We handle sign-in UI ourselves
    error: '/',
  },

  secret: process.env.NEXTAUTH_SECRET,
  // trustHost is intentionally FALSE because the z.ai platform's reverse proxy
  // sends the internal hostname (ws-ccfffc-...) instead of the external preview URL.
  // We rely on NEXTAUTH_URL instead, which is set to the correct external URL.
  trustHost: false,

  // Cookie configuration for reverse proxy compatibility.
  // In production, cookies should be secure (HTTPS only).
  cookies: {
    sessionToken: {
      name: 'next-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
    callbackUrl: {
      name: 'next-auth.callback-url',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
    csrfToken: {
      name: 'next-auth.csrf-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
    pkceCodeVerifier: {
      name: 'next-auth.pkce.code_verifier',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
    state: {
      name: 'next-auth.state',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
    nonce: {
      name: 'next-auth.nonce',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
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
