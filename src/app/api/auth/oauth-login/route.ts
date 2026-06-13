// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  ⚠️  DEPRECATED — DO NOT USE IN PRODUCTION                            ║
// ║                                                                        ║
// ║  This route implements FAKE OAuth by checking email domains.           ║
// ║  It is NOT real OAuth authentication — it does not verify the user     ║
// ║  with Google or Apple.                                                 ║
// ║                                                                        ║
// ║  Real OAuth is now handled by NextAuth.js providers (Google/Apple).    ║
// ║  See: src/lib/auth.ts for the real OAuth configuration.                ║
// ║  See: src/components/OAuthButtonGroup.tsx for the real OAuth UI.       ║
// ║                                                                        ║
// ║  This route is kept ONLY as a development fallback and will be        ║
// ║  removed in a future version.                                          ║
// ╚══════════════════════════════════════════════════════════════════════════╝

import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// Valid email domains per provider
const GOOGLE_DOMAINS = ['gmail.com', 'googlemail.com', 'google.com']
const APPLE_DOMAINS = ['icloud.com', 'me.com', 'mac.com', 'apple.com']

// OAuth accounts have a password that starts with this prefix (plain text, not hashed)
// This allows us to identify OAuth accounts while ensuring they can't log in via password
// (bcrypt.compare will always fail for these since they're not real bcrypt hashes)
const OAUTH_PASSWORD_PREFIX = 'oauth:'

export async function POST(req: NextRequest) {
  try {
    const { email, provider } = await req.json()

    if (!email || !provider) {
      return NextResponse.json(
        { error: 'Email et fournisseur requis' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      )
    }

    const domain = email.split('@')[1]?.toLowerCase()

    // Validate domain matches provider
    if (provider === 'google' && !GOOGLE_DOMAINS.includes(domain)) {
      return NextResponse.json(
        { error: `Pour Google, utilisez une adresse Gmail (@gmail.com). Votre domaine "${domain}" n'est pas un domaine Google.` },
        { status: 400 }
      )
    }

    if (provider === 'apple' && !APPLE_DOMAINS.includes(domain)) {
      return NextResponse.json(
        { error: `Pour Apple, utilisez une adresse iCloud (@icloud.com, @me.com). Votre domaine "${domain}" n'est pas un domaine Apple.` },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await db.user.findUnique({ where: { email } })

    if (existingUser) {
      // User exists — check if it's an OAuth account
      const isOAuthAccount = existingUser.password.startsWith(OAUTH_PASSWORD_PREFIX)

      if (isOAuthAccount) {
        // OAuth account — log them in directly
        const { password: _password, ...userWithoutPassword } = existingUser
        void _password

        return NextResponse.json({
          success: true,
          isNewUser: false,
          isAdmin: existingUser.role === 'admin',
          user: {
            ...userWithoutPassword,
            level: existingUser.level || 'A1',
            xp: existingUser.xp || 0,
            streak: existingUser.streak || 0,
            coins: existingUser.coins || 0,
            isPremium: existingUser.isPremium || false,
            premiumPlan: existingUser.premiumPlan || null,
            dailyGoal: existingUser.dailyGoal ?? 20,
            notifications: existingUser.notifications ?? true,
            darkMode: existingUser.darkMode ?? false,
            soundEnabled: existingUser.soundEnabled ?? true,
          },
        })
      }

      // Regular email/password account exists — tell them to use password login
      return NextResponse.json(
        { error: 'Un compte existe déjà avec cet email. Veuillez utiliser la connexion par email et mot de passe.', code: 'ACCOUNT_EXISTS_WITH_PASSWORD' },
        { status: 409 }
      )
    }

    // Create new user from OAuth provider
    // Store a plain text prefix so we can identify OAuth accounts
    // This password can never be used to log in via bcrypt.compare
    const name = email.split('@')[0]
    const oauthPassword = `${OAUTH_PASSWORD_PREFIX}${provider}:${Date.now()}`

    const newUser = await db.user.create({
      data: {
        email,
        name,
        password: oauthPassword,
        role: 'user',
        level: 'A1',
        xp: 0,
        streak: 0,
        coins: 0,
        isPremium: false,
        dailyGoal: 20,
      },
    })

    const { password: _password, ...userWithoutPassword } = newUser
    void _password

    return NextResponse.json({
      success: true,
      isNewUser: true,
      isAdmin: false,
      user: {
        ...userWithoutPassword,
        level: newUser.level || 'A1',
        xp: newUser.xp || 0,
        streak: newUser.streak || 0,
        coins: newUser.coins || 0,
        isPremium: newUser.isPremium || false,
        premiumPlan: newUser.premiumPlan || null,
        dailyGoal: newUser.dailyGoal ?? 20,
        notifications: newUser.notifications ?? true,
        darkMode: newUser.darkMode ?? false,
        soundEnabled: newUser.soundEnabled ?? true,
      },
    })
  } catch (error) {
    console.error('OAuth login error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
