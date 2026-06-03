import { NextRequest, NextResponse } from 'next/server'

// Singleton SDK instance for reuse
let zaiInstance: unknown = null

async function getZAI() {
  if (!zaiInstance) {
    const ZAI = (await import('z-ai-web-dev-sdk')).default
    zaiInstance = await ZAI.create()
  }
  return zaiInstance
}

// Available voices with descriptions and gender
export const TTS_VOICES = [
  // Masculine voices
  { id: 'jam', name: 'Jam', description: 'Gentleman britannique', accent: 'UK', gender: 'M' },
  { id: 'xiaochen', name: 'Xiaochen', description: 'Calme et professionnel', accent: 'Standard', gender: 'M' },
  { id: 'luodo', name: 'Luodo', description: 'Charismatique et chaleureux', accent: 'Afrique', gender: 'M' },
  // Neutral/Standard voices
  { id: 'kazi', name: 'Kazi', description: 'Claire et naturelle', accent: 'Afrique', gender: 'N' },
  { id: 'douji', name: 'Douji', description: 'Naturelle et fluide', accent: 'Standard', gender: 'N' },
  // Feminine voices
  { id: 'tongtong', name: 'Tongtong', description: 'Douce et amicale', accent: 'Standard', gender: 'F' },
  { id: 'chuichui', name: 'Chuichui', description: 'Vivante et énergique', accent: 'Standard', gender: 'F' },
] as const

export type TTSVoiceId = typeof TTS_VOICES[number]['id']

// Split text into chunks of max 1000 characters at sentence boundaries
function splitTextIntoChunks(text: string, maxLength = 1000): string[] {
  const chunks: string[] = []
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text]

  let currentChunk = ''
  for (const sentence of sentences) {
    if ((currentChunk + sentence).length <= maxLength) {
      currentChunk += sentence
    } else {
      if (currentChunk) chunks.push(currentChunk.trim())
      if (sentence.length > maxLength) {
        const parts = sentence.match(new RegExp(`.{1,${maxLength}}`, 'g')) || [sentence]
        for (const part of parts) {
          chunks.push(part.trim())
        }
        currentChunk = ''
      } else {
        currentChunk = sentence
      }
    }
  }
  if (currentChunk) chunks.push(currentChunk.trim())

  return chunks.filter(c => c.length > 0)
}

// WAV header builder - creates a proper WAV header for raw PCM data
function createWavHeader(dataLength: number, sampleRate = 24000, bitsPerSample = 16, channels = 1): Buffer {
  const header = Buffer.alloc(44)
  const byteRate = sampleRate * channels * (bitsPerSample / 8)
  const blockAlign = channels * (bitsPerSample / 8)

  header.write('RIFF', 0)
  header.writeUInt32LE(36 + dataLength, 4)
  header.write('WAVE', 8)
  header.write('fmt ', 12)
  header.writeUInt32LE(16, 16) // subchunk1 size
  header.writeUInt16LE(1, 20) // PCM format
  header.writeUInt16LE(channels, 22)
  header.writeUInt32LE(sampleRate, 24)
  header.writeUInt32LE(byteRate, 28)
  header.writeUInt16LE(blockAlign, 32)
  header.writeUInt16LE(bitsPerSample, 34)
  header.write('data', 36)
  header.writeUInt32LE(dataLength, 40)

  return header
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { text, voice = 'jam', speed = 0.9 } = body

    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Le texte est requis' },
        { status: 400 }
      )
    }

    // Validate voice
    const validVoices = TTS_VOICES.map(v => v.id)
    const selectedVoice = validVoices.includes(voice) ? voice : 'jam'

    // Validate speed
    const clampedSpeed = Math.max(0.5, Math.min(2.0, Number(speed) || 0.9))

    const zai = await getZAI()

    // Split text into chunks if > 1024 chars
    const chunks = splitTextIntoChunks(text.trim(), 1000)

    if (chunks.length === 0) {
      return NextResponse.json(
        { error: 'Texte vide' },
        { status: 400 }
      )
    }

    // Generate audio for each chunk using WAV format (most reliable)
    const audioBuffers: Buffer[] = []

    for (const chunk of chunks) {
      try {
        const response = await (zai as { audio: { tts: { create: (opts: unknown) => Promise<Response> } } }).audio.tts.create({
          input: chunk,
          voice: selectedVoice,
          speed: clampedSpeed,
          response_format: 'wav',
          stream: false,
        })

        const arrayBuffer = await response.arrayBuffer()
        const buffer = Buffer.from(new Uint8Array(arrayBuffer))

        if (buffer.length > 0) {
          audioBuffers.push(buffer)
        }
      } catch (chunkError) {
        console.warn('[TTS API] Chunk failed, skipping:', chunkError)
      }
    }

    if (audioBuffers.length === 0) {
      return NextResponse.json(
        { error: 'Impossible de générer l\'audio' },
        { status: 500 }
      )
    }

    // For single chunk, return WAV directly
    if (audioBuffers.length === 1) {
      const buffer = audioBuffers[0]
      return new NextResponse(buffer, {
        status: 200,
        headers: {
          'Content-Type': 'audio/wav',
          'Content-Length': buffer.length.toString(),
          'Cache-Control': 'public, max-age=3600',
          'X-Voice-Used': selectedVoice,
          'X-Chunks': '1',
        },
      })
    }

    // For multiple WAV chunks, extract PCM data and recombine
    // WAV files have a 44-byte header, then PCM data
    const pcmBuffers: Buffer[] = []

    for (const wavBuffer of audioBuffers) {
      // Skip the 44-byte WAV header and extract raw PCM data
      if (wavBuffer.length > 44) {
        pcmBuffers.push(wavBuffer.subarray(44))
      }
    }

    // Combine all PCM data
    const totalPcmLength = pcmBuffers.reduce((sum, buf) => sum + buf.length, 0)
    const combinedPcm = Buffer.concat(pcmBuffers, totalPcmLength)

    // Create a new WAV header for the combined PCM data
    const wavHeader = createWavHeader(combinedPcm.length)
    const finalBuffer = Buffer.concat([wavHeader, combinedPcm], wavHeader.length + combinedPcm.length)

    return new NextResponse(finalBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/wav',
        'Content-Length': finalBuffer.length.toString(),
        'Cache-Control': 'public, max-age=3600',
        'X-Voice-Used': selectedVoice,
        'X-Chunks': chunks.length.toString(),
      },
    })
  } catch (error) {
    console.error('[TTS API] Error:', error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Erreur lors de la génération vocale',
      },
      { status: 500 }
    )
  }
}

// GET endpoint to list available voices
export async function GET() {
  return NextResponse.json({
    voices: TTS_VOICES,
    default: 'jam',
  })
}
