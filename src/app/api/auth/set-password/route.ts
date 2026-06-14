import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { authLimiter, getClientIP } from '@/lib/rate-limit'
import { formatUserResponse, rateLimitResponse } from '@/lib/api-utils'

// POST /api/auth/set-password — Allows legacy OAuth users to set a real password
export async function POST(req: NextRequest) {
  // ─── Rate limiting ────────────────────────────────────────────────
  const clientIP = getClientIP(req)
  if (!authLimiter.check(`set-password:${clientIP}`)) {
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

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Le mot de passe doit contenir au moins 6 caractères' },
        { status: 400 }
      )
    }

    const user = await db.user.findUnique({ where: { email } })

    if (!user) {
      return NextResponse.json(
        { error: 'Aucun compte trouvé avec cet email' },
        { status: 404 }
      )
    }

    // Only allow password setting for accounts that don't have a real password yet
    const isOAuthAccount = user.password.startsWith('oauth_') || user.password.startsWith('oauth:')
    if (!isOAuthAccount) {
      return NextResponse.json(
        { error: 'Ce compte a déjà un mot de passe. Utilisez la fonctionnalité de réinitialisation.' },
        { status: 400 }
      )
    }

    // Set the new password
    const hashedPassword = await bcrypt.hash(password, 10)
    await db.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    })

    const isAdmin = user.role === 'admin'

    return NextResponse.json({
      success: true,
      message: 'Mot de passe défini avec succès',
      isAdmin,
      user: formatUserResponse(user),
    })
  } catch (error) {
    console.error('Set password error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
