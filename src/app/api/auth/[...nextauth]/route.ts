import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth'
import { NextRequest } from 'next/server'

/**
 * NextAuth route handler with dynamic URL detection.
 *
 * In a cloud sandbox, the external URL differs from localhost:3000.
 * We detect the real URL from request headers (Host + X-Forwarded-Proto)
 * and set NEXTAUTH_URL dynamically so OAuth callbacks use the correct domain.
 *
 * With `trustHost: true` in authOptions, NextAuth will trust the Host header
 * for generating redirect URIs. We still set NEXTAUTH_URL as a fallback.
 */
async function handler(req: NextRequest, context: { params: Promise<{ nextauth: string[] }> }) {
  // Dynamically detect the external URL from request headers
  const host = req.headers.get('host')
  const proto = req.headers.get('x-forwarded-proto') || 'https'

  if (host) {
    // Use the Host header as-is — it already includes port if non-standard
    // Do NOT add X-Forwarded-Port because it may be the internal port (3000)
    // instead of the external port (443/80)
    const detectedUrl = `${proto}://${host}`
    if (process.env.NEXTAUTH_URL !== detectedUrl) {
      process.env.NEXTAUTH_URL = detectedUrl
    }
  }

  const nextAuthHandler = NextAuth(authOptions)
  return nextAuthHandler(req, context)
}

export { handler as GET, handler as POST }
