import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { authLimiter, getClientIP } from '@/lib/rate-limit'
import { formatUserResponse, rateLimitResponse } from '@/lib/api-utils'

export async function POST(req: NextRequest) {
  // ─── Rate limiting ────────────────────────────────────────────────
  const clientIP = getClientIP(req)
  if (!authLimiter.check(`login:${clientIP}`)) {
    return rateLimitResponse()
  }

  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email et mot de passe requis' },
        { status: 400 }
      )
    }

    // Validate email format to prevent injection
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      )
    }

    const user = await db.user.findUnique({ where: { email } })

    if (!user) {
      // Generic error — don't reveal whether email exists
      return NextResponse.json(
        { error: 'Email ou mot de passe incorrect' },
        { status: 401 }
      )
    }

    // Check if this is a legacy OAuth-only account (no real password set)
    if (user.password.startsWith('oauth_') || user.password.startsWith('oauth:')) {
      return NextResponse.json(
        {
          error: 'Votre compte a été créé sans mot de passe. Veuillez définir un mot de passe pour vous connecter.',
          code: 'ACCOUNT_NEEDS_PASSWORD',
          email: user.email,
        },
        { status: 403 }
      )
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
      return NextResponse.json(
        { error: 'Email ou mot de passe incorrect' },
        { status: 401 }
      )
    }

    const isAdmin = user.role === 'admin'

    return NextResponse.json({
      success: true,
      isAdmin,
      user: formatUserResponse(user),
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
