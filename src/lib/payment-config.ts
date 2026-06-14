/**
 * Payment Configuration for YOELANG App
 *
 * SECURITY: Phone numbers and admin password are server-only.
 * The client fetches payment accounts from /api/payment/accounts.
 * This file only exports plan pricing (safe for client bundle).
 */

/**
 * Admin configuration — server-only.
 * The admin password is read from the ADMIN_PASSWORD environment variable.
 * IMPORTANT: Do NOT use NEXT_PUBLIC_ prefix — the password must stay server-only.
 */
export const ADMIN_CONFIG = {
  password: process.env.ADMIN_PASSWORD || '',
}

/**
 * Plan pricing in FCFA — safe for client-side.
 */
export const PLAN_PRICES: Record<string, { amount: number; name: string; period: string }> = {
  essentiel: { amount: 1000, name: 'Essentiel', period: 'F/mois' },
  complet: { amount: 2000, name: 'Complet', period: 'F/trimestre' },
  integral: { amount: 3000, name: 'Intégral', period: 'F' },
}
