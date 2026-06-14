import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// ─── Google Email Recognition Login ──────────────────────────────────────────
// This route handles authentication via Google email domain recognition.
// When a user enters a @gmail.com address, they can log in or sign up
// without a password — their Google email is their identity.

// Valid Google email domains
const GOOGLE_DOMAINS = ['gmail.com', 'googlemail.com', 'google.com']

// OAuth accounts have a password that starts with this prefix
// This allows us to identify OAuth accounts while ensuring they can't log in
// via the regular password flow (bcrypt.compare will always fail for these)
const OAUTH_PASSWORD_PREFIX = 'oauth_'

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

    // Check if user already exists
    const existingUser = await db.user.findUnique({ where: { email } })

    if (existingUser) {
      // User exists — check if it's an OAuth account (can log in without password)
      const isOAuthAccount = existingUser.password.startsWith(OAUTH_PASSWORD_PREFIX) ||
                             existingUser.password.startsWith('oauth:')

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

    // Create new user from Google email
    const name = email.split('@')[0]
    const oauthPassword = `oauth_${provider}_${Date.now()}`

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
    console.error('Google email login error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
