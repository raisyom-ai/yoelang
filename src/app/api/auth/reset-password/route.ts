import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { passwordResetLimiter, getClientIP } from '@/lib/rate-limit'
import { rateLimitResponse } from '@/lib/api-utils'

// In-memory token store. In production, use Redis or DB table.
// Tokens expire after 15 minutes.
interface ResetToken {
  email: string
  expiresAt: number
  used: boolean
}

const resetTokens = new Map<string, ResetToken>()

// Clean expired tokens every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    for (const [token, entry] of resetTokens) {
      if (now > entry.expiresAt || entry.used) {
        resetTokens.delete(token)
      }
    }
  }, 5 * 60 * 1000)
}

function generateToken(): string {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('')
}

/**
 * POST /api/auth/reset-password
 *
 * Two actions:
 * 1. action: 'request' — Generate a reset token (in production, send via email)
 * 2. action: 'confirm' — Verify token and set new password
 */
export async function POST(req: NextRequest) {
  const clientIP = getClientIP(req)

  try {
    const body = await req.json()
    const { action } = body

    // ─── Request password reset ────────────────────────────────────
    if (action === 'request') {
      if (!passwordResetLimiter.check(`reset-request:${clientIP}`)) {
        return rateLimitResponse()
      }

      const { email } = body

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json(
          { error: 'Adresse email invalide' },
          { status: 400 }
        )
      }

      const user = await db.user.findUnique({ where: { email } })

      // Always return success to avoid leaking whether email exists
      if (!user) {
        return NextResponse.json({
          success: true,
          message: 'Si un compte existe avec cet email, un lien de réinitialisation a été envoyé.',
        })
      }

      // Don't allow reset for OAuth accounts without a real password
      if (user.password.startsWith('oauth_') || user.password.startsWith('oauth:')) {
        return NextResponse.json({
          success: true,
          message: 'Si un compte existe avec cet email, un lien de réinitialisation a été envoyé.',
        })
      }

      // Generate reset token
      const token = generateToken()
      resetTokens.set(token, {
        email: user.email,
        expiresAt: Date.now() + 15 * 60 * 1000, // 15 minutes
        used: false,
      })

      // Return token for in-app flow (in production, send via email)
      return NextResponse.json({
        success: true,
        message: 'Si un compte existe avec cet email, un lien de réinitialisation a été envoyé.',
        token,
      })
    }

    // ─── Confirm password reset ────────────────────────────────────
    if (action === 'confirm') {
      if (!passwordResetLimiter.check(`reset-confirm:${clientIP}`)) {
        return rateLimitResponse()
      }

      const { token, newPassword } = body

      if (!token || !newPassword) {
        return NextResponse.json(
          { error: 'Token et nouveau mot de passe requis' },
          { status: 400 }
        )
      }

      if (newPassword.length < 6) {
        return NextResponse.json(
          { error: 'Le mot de passe doit contenir au moins 6 caractères' },
          { status: 400 }
        )
      }

      const entry = resetTokens.get(token)

      if (!entry || entry.used || Date.now() > entry.expiresAt) {
        return NextResponse.json(
          { error: 'Lien de réinitialisation invalide ou expiré. Veuillez demander un nouveau lien.' },
          { status: 400 }
        )
      }

      // Mark token as used
      entry.used = true

      // Update password
      const hashedPassword = await bcrypt.hash(newPassword, 10)
      await db.user.update({
        where: { email: entry.email },
        data: { password: hashedPassword },
      })

      // Clean up token
      resetTokens.delete(token)

      return NextResponse.json({
        success: true,
        message: 'Mot de passe réinitialisé avec succès. Vous pouvez maintenant vous connecter.',
      })
    }

    return NextResponse.json({ error: 'Action non reconnue' }, { status: 400 })
  } catch (error) {
    console.error('Password reset error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
