import { NextResponse } from 'next/server'

/**
 * Debug endpoint to verify NextAuth URL configuration.
 * Returns the URLs that NextAuth would use for OAuth callbacks.
 */
export async function GET() {
  const nextauthUrl = process.env.NEXTAUTH_URL || 'NOT SET'
  const googleClientId = process.env.GOOGLE_CLIENT_ID ? 'SET' : 'NOT SET'
  const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET ? 'SET' : 'NOT SET'
  const nextauthSecret = process.env.NEXTAUTH_SECRET ? 'SET' : 'NOT SET'

  // Compute the expected Google OAuth redirect URI
  const expectedRedirectUri = nextauthUrl !== 'NOT SET'
    ? `${nextauthUrl}/api/auth/callback/google`
    : 'CANNOT COMPUTE (NEXTAUTH_URL not set)'

  return NextResponse.json({
    nextauthUrl,
    expectedRedirectUri,
    googleClientId,
    googleClientSecret,
    nextauthSecret,
    message: 'Add the expectedRedirectUri to Google Cloud Console → APIs & Services → Credentials → OAuth 2.0 Client → Authorized redirect URIs',
  })
}
