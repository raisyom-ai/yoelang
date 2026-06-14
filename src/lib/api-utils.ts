import type { User } from '@prisma/client'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

// ─── Premium tier hierarchy ─────────────────────────────────────────────
type PremiumPlan = 'essentiel' | 'complet' | 'integral'
const TIER_ORDER: PremiumPlan[] = ['essentiel', 'complet', 'integral']

/**
 * Check if a user's premium plan meets the required tier.
 * Returns true if the user is premium AND their plan >= requiredTier.
 */
export function hasPremiumTier(
  isPremium: boolean,
  plan: string | null,
  requiredTier: PremiumPlan,
): boolean {
  if (!isPremium || !plan) return false
  const userIndex = TIER_ORDER.indexOf(plan as PremiumPlan)
  const requiredIndex = TIER_ORDER.indexOf(requiredTier)
  if (userIndex === -1 || requiredIndex === -1) return false
  return userIndex >= requiredIndex
}

/**
 * Verify a user's premium status from the DATABASE (not client-sent data).
 * Returns the user record or a 403 response if premium check fails.
 */
export async function verifyPremium(
  userId: string,
  requiredTier: PremiumPlan,
): Promise<{ user: User; allowed: true } | { response: NextResponse; allowed: false }> {
  const user = await db.user.findUnique({ where: { id: userId } })
  if (!user) {
    return {
      allowed: false,
      response: NextResponse.json({ error: 'Utilisateur non trouvé', code: 'USER_NOT_FOUND' }, { status: 404 }),
    }
  }
  if (!hasPremiumTier(user.isPremium, user.premiumPlan, requiredTier)) {
    return {
      allowed: false,
      response: NextResponse.json(
        { error: 'Fonctionnalité réservée aux membres Premium', code: 'PREMIUM_REQUIRED', requiredTier },
        { status: 403 },
      ),
    }
  }
  return { user, allowed: true }
}

/**
 * Premium response helper — standard 403 for premium-gated features.
 */
export function premiumRequiredResponse(feature?: string) {
  return NextResponse.json(
    {
      error: feature
        ? `La fonctionnalité "${feature}" nécessite un abonnement Premium`
        : 'Fonctionnalité réservée aux membres Premium',
      code: 'PREMIUM_REQUIRED',
    },
    { status: 403 },
  )
}

/**
 * Safe user response — strips password and applies defaults.
 * Used across all API endpoints that return user data.
 * Prevents accidental password leaks and ensures consistent response format.
 */
export function formatUserResponse(user: User) {
  const { password: _password, ...userWithoutPassword } = user
  void _password

  return {
    ...userWithoutPassword,
    role: user.role || 'user',
    level: user.level || 'A1',
    xp: user.xp || 0,
    streak: user.streak || 0,
    coins: user.coins || 0,
    isPremium: user.isPremium || false,
    premiumPlan: user.premiumPlan || null,
    dailyGoal: user.dailyGoal ?? 20,
    notifications: user.notifications ?? true,
    darkMode: user.darkMode ?? false,
    soundEnabled: user.soundEnabled ?? true,
  }
}

/**
 * Rate limit response helper.
 */
export function rateLimitResponse() {
  return new Response(
    JSON.stringify({
      error: 'Trop de tentatives. Veuillez réessayer dans quelques instants.',
      code: 'RATE_LIMITED',
    }),
    {
      status: 429,
      headers: { 'Content-Type': 'application/json' },
    }
  )
}
