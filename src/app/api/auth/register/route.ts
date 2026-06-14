import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { authLimiter, getClientIP } from '@/lib/rate-limit'
import { formatUserResponse, rateLimitResponse } from '@/lib/api-utils'

export async function POST(req: NextRequest) {
  // ─── Rate limiting ────────────────────────────────────────────────
  const clientIP = getClientIP(req)
  if (!authLimiter.check(`register:${clientIP}`)) {
    return rateLimitResponse()
  }

  try {
    const { name, email, password, level } = await req.json()

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
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

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Le mot de passe doit contenir au moins 6 caractères' },
        { status: 400 }
      )
    }

    // Validate name length
    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Le nom doit contenir au moins 2 caractères' },
        { status: 400 }
      )
    }

    const existingUser = await db.user.findUnique({ where: { email } })

    if (existingUser) {
      // Check if this is a legacy OAuth account that doesn't have a real password
      const isOAuthAccount = existingUser.password.startsWith('oauth_') || existingUser.password.startsWith('oauth:')

      if (isOAuthAccount) {
        // Allow the user to set a real password for their existing account
        const hashedPassword = await bcrypt.hash(password, 10)
        const updatedUser = await db.user.update({
          where: { id: existingUser.id },
          data: {
            password: hashedPassword,
            name: name || existingUser.name,
          },
        })

        const isAdmin = updatedUser.role === 'admin'

        return NextResponse.json({
          success: true,
          isPasswordSet: true,
          isAdmin,
          user: formatUserResponse(updatedUser),
        })
      }

      // Regular account with password already exists
      return NextResponse.json(
        { error: 'Un compte avec cet email existe déjà. Veuillez vous connecter.' },
        { status: 409 }
      )
    }

    // Create new user with password (all email types including Gmail)
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await db.user.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password: hashedPassword,
        level: level || 'A1',
      },
    })

    return NextResponse.json({
      success: true,
      user: formatUserResponse(user),
    })
  } catch (error) {
    console.error('Register error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
