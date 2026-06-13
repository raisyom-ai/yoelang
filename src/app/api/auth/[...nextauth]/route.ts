import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'

/**
 * Detect the external origin URL from request headers.
 *
 * When running behind Caddy (or any reverse proxy), the Host header
 * and X-Forwarded-Proto tell us the URL the user's browser sees.
 * We also check X-Forwarded-Port for non-standard ports.
 */
function detectOriginUrl(req: NextRequest): string | null {
  const host = req.headers.get('host') // e.g. "example.com" or "localhost:3000"
  if (!host) return null

  const proto = req.headers.get('x-forwarded-proto') || 'https'
  const port = req.headers.get('x-forwarded-port')

  // If host already includes a port (e.g. "localhost:3000"), use it as-is
  if (host.includes(':')) {
    return `${proto}://${host}`
  }

  // If there's an explicit forwarded port and it's non-standard, include it
  if (port && port !== '80' && port !== '443') {
    return `${proto}://${host}:${port}`
  }

  // Standard port or no port info — just proto + host
  return `${proto}://${host}`
}

/**
 * NextAuth route handler with dynamic URL detection.
 *
 * In a cloud sandbox, the external URL differs from localhost:3000.
 * We detect the real URL from request headers (Host + X-Forwarded-Proto)
 * and set NEXTAUTH_URL dynamically so OAuth callbacks use the correct domain.
 */
async function handler(req: NextRequest, context: { params: Promise<{ nextauth: string[] }> }) {
  const detectedUrl = detectOriginUrl(req)
  if (detectedUrl && process.env.NEXTAUTH_URL !== detectedUrl) {
    process.env.NEXTAUTH_URL = detectedUrl
  }

  const nextAuthHandler = NextAuth(authOptions)
  return nextAuthHandler(req, context)
}

export { handler as GET, handler as POST }
