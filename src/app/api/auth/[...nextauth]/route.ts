import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth'
import { NextRequest } from 'next/server'

/**
 * NextAuth route handler (credentials-only).
 *
 * OAuth providers have been removed. Only email/password authentication is used.
 * With `trustHost: false`, NextAuth uses NEXTAUTH_URL from .env as the base URL.
 */
async function handler(req: NextRequest, context: { params: Promise<{ nextauth: string[] }> }) {
  const nextAuthHandler = NextAuth(authOptions)
  return nextAuthHandler(req, context)
}

export { handler as GET, handler as POST }
