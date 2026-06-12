import { NextResponse } from 'next/server'

// GET /api/auth/providers — Returns which OAuth providers are configured
export async function GET() {
  const googleConfigured = !!(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET)
  const appleConfigured = !!(process.env.APPLE_ID && process.env.APPLE_TEAM_ID && process.env.APPLE_KEY_ID && process.env.APPLE_PRIVATE_KEY)

  return NextResponse.json({
    google: googleConfigured,
    apple: appleConfigured,
  })
}
