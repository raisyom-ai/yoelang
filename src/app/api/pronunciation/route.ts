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
    const { audio_base64, target_word } = await req.json()

    if (!audio_base64 || !target_word) {
      return NextResponse.json(
        { error: 'audio_base64 et target_word sont requis' },
        { status: 400 }
      )
    }

    const zai = await getZAI()

    // Use z-ai-web-dev-sdk ASR to transcribe the audio
    const asrResult = await zai.audio.asr.create({
      file_base64: audio_base64,
    })

    // Extract transcript from ASR result
    const transcript = (asrResult?.text ?? asrResult ?? '').toString().trim().toLowerCase()
    const target = target_word.toLowerCase()

    // Calculate similarity using Levenshtein distance
    const confidence = calculateSimilarity(transcript, target)

    // Determine if correct: 70%+ similarity, or one contains the other
    const isCorrect =
      confidence >= 70 ||
      transcript.includes(target) ||
      target.includes(transcript)

    return NextResponse.json({
      transcript: transcript,
      confidence,
      is_correct: isCorrect,
    })
  } catch (error) {
    console.error('Pronunciation ASR error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'analyse de prononciation' },
      { status: 500 }
    )
  }
}
