import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { rateLimitResponse } from '@/lib/api-utils'
import { passwordChangeLimiter, getClientIP } from '@/lib/rate-limit'

/**
 * POST /api/user/change-password
 *
 * Change a user's password by verifying the current password first.
 */
export async function POST(req: NextRequest) {
  const clientIP = getClientIP(req)

  if (!passwordChangeLimiter.check(`change-pw:${clientIP}`)) {
    return rateLimitResponse()
  }

  try {
    const { userId, currentPassword, newPassword } = await req.json()

    if (!userId || !currentPassword || !newPassword) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { error: 'Le nouveau mot de passe doit contenir au moins 6 caractères' },
        { status: 400 }
      )
    }

    // Find user
    const user = await db.user.findUnique({ where: { id: userId } })
    if (!user) {
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 404 }
      )
    }

    // Don't allow password change for OAuth accounts
    if (user.password.startsWith('oauth_') || user.password.startsWith('oauth:')) {
      return NextResponse.json(
        { error: 'Les comptes OAuth ne peuvent pas changer leur mot de passe ici' },
        { status: 400 }
      )
    }

    // Verify current password
    const isValid = await bcrypt.compare(currentPassword, user.password)
    if (!isValid) {
      return NextResponse.json(
        { error: 'Mot de passe actuel incorrect' },
        { status: 401 }
      )
    }

    // Hash and update
    const hashedPassword = await bcrypt.hash(newPassword, 10)
    await db.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    })

    return NextResponse.json({
      success: true,
      message: 'Mot de passe changé avec succès',
    })
  } catch (error) {
    console.error('Change password error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
