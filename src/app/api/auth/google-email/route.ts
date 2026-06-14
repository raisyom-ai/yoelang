import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { authLimiter, getClientIP } from '@/lib/rate-limit'
import { formatUserResponse, rateLimitResponse } from '@/lib/api-utils'

// POST /api/auth/google-email — Handle Google email login/signup
export async function POST(req: NextRequest) {
  // ─── Rate limiting ────────────────────────────────────────────────
  const clientIP = getClientIP(req)
  if (!authLimiter.check(`google-email:${clientIP}`)) {
    return rateLimitResponse()
  }

  try {
    const { action, email, password, name } = await req.json()

    // ─── Step 1: Check if email exists and determine next step ───────
    if (action === 'check') {
      if (!email) {
        return NextResponse.json({ error: 'Email requis' }, { status: 400 })
      }

      // Validate email format
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ error: 'Adresse email invalide' }, { status: 400 })
      }

      const domain = email.split('@')[1]?.toLowerCase()
      const googleDomains = ['gmail.com', 'googlemail.com', 'google.com']
      const isGoogleEmail = googleDomains.includes(domain)

      const existingUser = await db.user.findUnique({ where: { email } })

      if (existingUser) {
        const isOAuthAccount = existingUser.password.startsWith('oauth_') || existingUser.password.startsWith('oauth:')

        if (isOAuthAccount) {
          // Account exists but needs a password
          return NextResponse.json({
            status: 'needs_password',
            isGoogleEmail,
            email,
            userName: existingUser.name,
          })
        }

        // Account exists with a real password — redirect to login
        return NextResponse.json({
          status: 'has_password',
          isGoogleEmail,
          email,
          userName: existingUser.name,
        })
      }

      // No account — only allow Google emails to create new accounts here
      if (!isGoogleEmail) {
        return NextResponse.json({
          error: 'Aucun compte trouvé avec cette adresse. Veuillez utiliser une adresse Google (@gmail.com) ou inscrivez-vous.',
          isGoogleEmail: false,
        }, { status: 400 })
      }

      // New Google email — they need to create an account with a password
      return NextResponse.json({
        status: 'new_user',
        isGoogleEmail: true,
        email,
      })
    }

    // ─── Step 2: Set password for existing account ─────────────────
    if (action === 'set_password') {
      if (!email || !password) {
        return NextResponse.json({ error: 'Email et mot de passe requis' }, { status: 400 })
      }

      if (password.length < 6) {
        return NextResponse.json({ error: 'Le mot de passe doit contenir au moins 6 caractères' }, { status: 400 })
      }

      const user = await db.user.findUnique({ where: { email } })
      if (!user) {
        return NextResponse.json({ error: 'Compte non trouvé' }, { status: 404 })
      }

      const isOAuthAccount = user.password.startsWith('oauth_') || user.password.startsWith('oauth:')
      if (!isOAuthAccount) {
        return NextResponse.json({ error: 'Ce compte a déjà un mot de passe.' }, { status: 400 })
      }

      // Set real password
      const hashedPassword = await bcrypt.hash(password, 10)
      await db.user.update({
        where: { id: user.id },
        data: { password: hashedPassword },
      })

      return NextResponse.json({
        success: true,
        message: 'Mot de passe défini avec succès',
        isAdmin: user.role === 'admin',
        user: formatUserResponse(user),
      })
    }

    // ─── Step 3: Create new account with Google email + password ───
    if (action === 'register') {
      if (!email || !password || !name) {
        return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 })
      }

      if (password.length < 6) {
        return NextResponse.json({ error: 'Le mot de passe doit contenir au moins 6 caractères' }, { status: 400 })
      }

      const domain = email.split('@')[1]?.toLowerCase()
      const googleDomains = ['gmail.com', 'googlemail.com', 'google.com']
      if (!googleDomains.includes(domain)) {
        return NextResponse.json({ error: 'Veuillez utiliser une adresse Google (@gmail.com).' }, { status: 400 })
      }

      // Check if account already exists
      const existingUser = await db.user.findUnique({ where: { email } })
      if (existingUser) {
        return NextResponse.json({ error: 'Un compte avec cet email existe déjà.' }, { status: 409 })
      }

      const hashedPassword = await bcrypt.hash(password, 10)
      const newUser = await db.user.create({
        data: {
          email: email.trim().toLowerCase(),
          name: name.trim(),
          password: hashedPassword,
          level: 'A1',
          xp: 0,
          streak: 0,
          coins: 0,
          isPremium: false,
          dailyGoal: 20,
        },
      })

      return NextResponse.json({
        success: true,
        isAdmin: false,
        user: formatUserResponse(newUser),
      })
    }

    return NextResponse.json({ error: 'Action non reconnue' }, { status: 400 })
  } catch (error) {
    console.error('Google email auth error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
