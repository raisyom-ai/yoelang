import { NextRequest, NextResponse } from 'next/server'

/**
 * Diagnostic endpoint that returns the detected external URL
 * and the OAuth redirect URI that needs to be configured in
 * Google Cloud Console / Apple Developer Portal.
 *
 * GET /api/auth/detect-url
 */
export async function GET(req: NextRequest) {
  const host = req.headers.get('host')
  const proto = req.headers.get('x-forwarded-proto') || 'https'

  // Use Host header as-is — it includes port if non-standard
  // Do NOT trust X-Forwarded-Port (it may be the internal port)
  let detectedUrl: string
  if (host) {
    detectedUrl = `${proto}://${host}`
  } else {
    detectedUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'
  }

  return NextResponse.json({
    detectedUrl,
    currentNextAuthUrl: process.env.NEXTAUTH_URL || '(not set)',
    headers: {
      host: host || '(not set)',
      'x-forwarded-proto': proto,
      'x-forwarded-port': req.headers.get('x-forwarded-port') || '(not set)',
    },
    oauthRedirectUris: {
      google: `${detectedUrl}/api/auth/callback/google`,
      apple: `${detectedUrl}/api/auth/callback/apple`,
    },
    instructions: {
      google: `Add "${detectedUrl}/api/auth/callback/google" as an authorized redirect URI in Google Cloud Console → APIs & Services → Credentials → OAuth 2.0 Client`,
      apple: `Add "${detectedUrl}/api/auth/callback/apple" as a return URL in Apple Developer Portal → Services ID → Sign in with Apple`,
    },
  })
}
