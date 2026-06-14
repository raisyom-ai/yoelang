import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { rateLimitResponse } from '@/lib/api-utils'
import { avatarUploadLimiter, getClientIP } from '@/lib/rate-limit'

/**
 * POST /api/user/avatar
 *
 * Upload a new avatar image for a user.
 * Accepts multipart/form-data with:
 *   - avatar: File (image, max 5MB)
 *   - userId: string
 *
 * For now, we convert the image to a base64 data URL and store it in the user's avatar field.
 * In production, you'd upload to S3/Cloudflare R2 and store the URL.
 */
export async function POST(req: NextRequest) {
  const clientIP = getClientIP(req)

  if (!avatarUploadLimiter.check(`avatar:${clientIP}`)) {
    return rateLimitResponse()
  }

  try {
    const formData = await req.formData()
    const file = formData.get('avatar') as File | null
    const userId = formData.get('userId') as string | null

    if (!userId) {
      return NextResponse.json(
        { error: 'UserId requis' },
        { status: 400 }
      )
    }

    if (!file) {
      return NextResponse.json(
        { error: 'Fichier image requis' },
        { status: 400 }
      )
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Le fichier doit être une image' },
        { status: 400 }
      )
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'L\'image ne doit pas dépasser 5 Mo' },
        { status: 400 }
      )
    }

    // Verify user exists
    const user = await db.user.findUnique({ where: { id: userId } })
    if (!user) {
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 404 }
      )
    }

    // Convert to base64 data URL
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const base64 = buffer.toString('base64')
    const dataUrl = `data:${file.type};base64,${base64}`

    // Update user avatar
    await db.user.update({
      where: { id: userId },
      data: { avatar: dataUrl },
    })

    return NextResponse.json({
      success: true,
      avatarUrl: dataUrl,
    })
  } catch (error) {
    console.error('Avatar upload error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
