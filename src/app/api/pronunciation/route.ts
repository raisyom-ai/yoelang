import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

let zaiInstance: Awaited<ReturnType<typeof ZAI.create>> | null = null

async function getZAI() {
  if (!zaiInstance) {
    zaiInstance = await ZAI.create()
  }
  return zaiInstance
}

function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = []
  for (let i = 0; i <= b.length; i++) matrix[i] = [i]
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        )
      }
    }
  }
  return matrix[b.length][a.length]
}

function calculateSimilarity(a: string, b: string): number {
  const maxLen = Math.max(a.length, b.length)
  if (maxLen === 0) return 100
  const dist = levenshteinDistance(a, b)
  return Math.round(((maxLen - dist) / maxLen) * 100)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    // Support both audio_base64 (from frontend) and audioBase64 (alternative)
    const audioBase64 = body.audio_base64 || body.audioBase64
    const targetWord = body.target_word || body.targetWord

    if (!audioBase64 || !targetWord) {
      console.error('[Pronunciation API] Missing required fields:', {
        hasAudio: !!audioBase64,
        hasTarget: !!targetWord,
        bodyKeys: Object.keys(body),
      })
      return NextResponse.json(
        { error: 'audio_base64 et target_word sont requis' },
        { status: 400 }
      )
    }

    console.log('[Pronunciation API] Processing request for word:', targetWord, 'audio length:', audioBase64.length)

    const zai = await getZAI()

    // Use z-ai-web-dev-sdk ASR to transcribe the audio
    let asrResult: unknown
    try {
      asrResult = await zai.audio.asr.create({
        file_base64: audioBase64,
      })
    } catch (asrError) {
      console.error('[Pronunciation API] ASR call failed:', asrError)
      return NextResponse.json(
        { error: 'ASR service unavailable', transcript: '', confidence: 0, is_correct: false },
        { status: 502 }
      )
    }

    // Extract transcript from ASR result - handle various response formats
    let transcript = ''
    if (typeof asrResult === 'string') {
      transcript = asrResult
    } else if (asrResult && typeof asrResult === 'object') {
      const result = asrResult as Record<string, unknown>
      transcript = (result.text ?? result.transcript ?? result.result ?? '').toString().trim()
    }

    transcript = transcript.toLowerCase().trim()
    const target = targetWord.toLowerCase()

    console.log('[Pronunciation API] ASR result:', { transcript, target })

    // Calculate similarity using Levenshtein distance
    const confidence = calculateSimilarity(transcript, target)

    // Determine if correct: 70%+ similarity, or one contains the other
    const isCorrect =
      confidence >= 70 ||
      (transcript.length > 0 && (transcript.includes(target) || target.includes(transcript)))

    console.log('[Pronunciation API] Result:', { transcript, target, confidence, isCorrect })

    return NextResponse.json({
      transcript,
      confidence,
      is_correct: isCorrect,
    })
  } catch (error) {
    console.error('[Pronunciation API] Unexpected error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'analyse de prononciation', transcript: '', confidence: 0, is_correct: false },
      { status: 500 }
    )
  }
}
