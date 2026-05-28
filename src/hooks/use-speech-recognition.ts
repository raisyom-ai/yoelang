'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

// ─── Exported Types ──────────────────────────────────────────────

export interface SpeechRecognitionResult {
  transcript: string
  confidence: number
  isCorrect: boolean
}

export interface UseSpeechRecognitionOptions {
  targetWord: string
  autoStopMs?: number
  similarityThreshold?: number
  language?: string
}

export interface UseSpeechRecognitionReturn {
  isRecording: boolean
  isProcessing: boolean
  micLevel: number
  recordingSeconds: number
  result: SpeechRecognitionResult | null
  error: string | null
  isSupported: boolean
  method: 'webspeech' | 'mediaRecorder' | 'none'
  startRecording: () => Promise<void>
  stopRecording: () => void
  reset: () => void
}

// ─── Web Speech API type augmentation ────────────────────────────

interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList
}

interface SpeechRecognitionErrorEvent {
  error: string
  message?: string
}

interface SpeechRecognitionInstance {
  lang: string
  continuous: boolean
  interimResults: boolean
  maxAlternatives: number
  onresult: ((event: SpeechRecognitionEvent) => void) | null
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null
  onend: (() => void) | null
  onstart: (() => void) | null
  start(): void
  stop(): void
  abort(): void
}

// ─── Levenshtein Distance ───────────────────────────────────────

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

// ─── Helpers ─────────────────────────────────────────────────────

function getSpeechRecognitionConstructor(): (new () => SpeechRecognitionInstance) | null {
  if (typeof window === 'undefined') return null
  const SR = (window as Record<string, unknown>).SpeechRecognition as
    | (new () => SpeechRecognitionInstance)
    | undefined
  const WSR = (window as Record<string, unknown>).webkitSpeechRecognition as
    | (new () => SpeechRecognitionInstance)
    | undefined
  return SR || WSR || null
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const dataUrl = reader.result as string
      // Strip the data URL prefix (e.g. "data:audio/webm;base64,")
      const base64 = dataUrl.split(',')[1] || dataUrl
      resolve(base64)
    }
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

function getSupportedMimeType(): string | null {
  const types = [
    'audio/webm;codecs=opus',
    'audio/webm',
    'audio/ogg;codecs=opus',
    'audio/mp4',
  ]
  for (const type of types) {
    if (MediaRecorder.isTypeSupported(type)) return type
  }
  return null
}

// ─── Hook ────────────────────────────────────────────────────────

export function useSpeechRecognition(
  options: UseSpeechRecognitionOptions
): UseSpeechRecognitionReturn {
  const {
    targetWord,
    autoStopMs = 5000,
    similarityThreshold = 70,
    language = 'en-US',
  } = options

  // ── Derived: which method will be used ──
  const SpeechRecognitionCtor = getSpeechRecognitionConstructor()
  const hasMediaRecorder = typeof window !== 'undefined' && typeof MediaRecorder !== 'undefined'
  const hasGetUserMedia = typeof navigator !== 'undefined' && !!navigator.mediaDevices?.getUserMedia

  let resolvedMethod: 'webspeech' | 'mediaRecorder' | 'none' = 'none'
  if (SpeechRecognitionCtor && hasGetUserMedia) {
    resolvedMethod = 'webspeech'
  } else if (hasMediaRecorder && hasGetUserMedia) {
    resolvedMethod = 'mediaRecorder'
  }
  const isSupported = resolvedMethod !== 'none'

  // ── State ──
  const [isRecording, setIsRecording] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [micLevel, setMicLevel] = useState(0)
  const [recordingSeconds, setRecordingSeconds] = useState(0)
  const [result, setResult] = useState<SpeechRecognitionResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  // ── Refs for resources that need cleanup ──
  const mediaStreamRef = useRef<MediaStream | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const animFrameRef = useRef<number | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const speechRecognitionRef = useRef<SpeechRecognitionInstance | null>(null)
  const autoStopTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const recordingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const chunksRef = useRef<Blob[]>([])

  // Refs for current option values (avoid stale closures)
  const targetWordRef = useRef(targetWord)
  const similarityThresholdRef = useRef(similarityThreshold)
  const autoStopMsRef = useRef(autoStopMs)
  const languageRef = useRef(language)
  const methodRef = useRef(resolvedMethod)

  useEffect(() => {
    targetWordRef.current = targetWord
  }, [targetWord])
  useEffect(() => {
    similarityThresholdRef.current = similarityThreshold
  }, [similarityThreshold])
  useEffect(() => {
    autoStopMsRef.current = autoStopMs
  }, [autoStopMs])
  useEffect(() => {
    languageRef.current = language
  }, [language])
  useEffect(() => {
    methodRef.current = resolvedMethod
  }, [resolvedMethod])

  // ── Mic level visualisation loop ──

  const startMicLevelLoop = useCallback(() => {
    const analyser = analyserRef.current
    if (!analyser) return

    const dataArray = new Uint8Array(analyser.frequencyBinCount)

    const tick = () => {
      analyser.getByteFrequencyData(dataArray)
      // Calculate RMS-like value from frequency data
      let sum = 0
      for (let i = 0; i < dataArray.length; i++) {
        sum += dataArray[i] * dataArray[i]
      }
      const rms = Math.sqrt(sum / dataArray.length)
      // Normalise to 0-1 (255 is max byte value, but typical speech is much lower)
      const normalized = Math.min(1, rms / 128)
      setMicLevel(normalized)
      animFrameRef.current = requestAnimationFrame(tick)
    }

    tick()
  }, [])

  const stopMicLevelLoop = useCallback(() => {
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current)
      animFrameRef.current = null
    }
    setMicLevel(0)
  }, [])

  // ── Recording seconds counter ──

  const startRecordingTimer = useCallback(() => {
    setRecordingSeconds(0)
    const startTime = Date.now()
    recordingIntervalRef.current = setInterval(() => {
      setRecordingSeconds(Math.floor((Date.now() - startTime) / 1000))
    }, 1000)
  }, [])

  const stopRecordingTimer = useCallback(() => {
    if (recordingIntervalRef.current !== null) {
      clearInterval(recordingIntervalRef.current)
      recordingIntervalRef.current = null
    }
  }, [])

  // ── Acquire media stream + audio context + analyser ──

  const acquireStreamAndAnalyser = useCallback(async (): Promise<MediaStream | null> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      })
      mediaStreamRef.current = stream

      // Create AudioContext and AnalyserNode for mic level
      const audioCtx = new AudioContext()
      const source = audioCtx.createMediaStreamSource(stream)
      const analyser = audioCtx.createAnalyser()
      analyser.fftSize = 512
      analyser.smoothingTimeConstant = 0.8
      source.connect(analyser)
      // Do NOT connect analyser to destination – we only want analysis, not playback

      audioContextRef.current = audioCtx
      analyserRef.current = analyser

      return stream
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      if (msg.includes('NotAllowed') || msg.includes('Permission')) {
        setError('Microphone permission denied. Please allow microphone access and try again.')
      } else if (msg.includes('NotFound') || msg.includes('DevicesNotFound')) {
        setError('No microphone found. Please connect a microphone and try again.')
      } else {
        setError(`Could not access microphone: ${msg}`)
      }
      return null
    }
  }, [])

  // ── Release all resources ──

  const releaseResources = useCallback(() => {
    // Stop media stream tracks
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop())
      mediaStreamRef.current = null
    }
    // Close AudioContext
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.close().catch(() => {})
      audioContextRef.current = null
    }
    analyserRef.current = null
    // Stop MediaRecorder
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try {
        mediaRecorderRef.current.stop()
      } catch (_) {
        // ignore
      }
      mediaRecorderRef.current = null
    }
    // Stop SpeechRecognition
    if (speechRecognitionRef.current) {
      try {
        speechRecognitionRef.current.abort()
      } catch (_) {
        // ignore
      }
      speechRecognitionRef.current = null
    }
    // Clear auto-stop timer
    if (autoStopTimerRef.current !== null) {
      clearTimeout(autoStopTimerRef.current)
      autoStopTimerRef.current = null
    }
    // Stop mic level loop
    stopMicLevelLoop()
    // Stop recording timer
    stopRecordingTimer()
  }, [stopMicLevelLoop, stopRecordingTimer])

  // ── Process result (shared by both paths) ──

  const processTranscript = useCallback(
    (transcript: string, confidenceFromApi?: number) => {
      const normalizedTranscript = transcript.toLowerCase().trim()
      const target = targetWordRef.current.toLowerCase().trim()
      const threshold = similarityThresholdRef.current

      const similarity = calculateSimilarity(normalizedTranscript, target)

      // Also consider containment as a match helper
      const isCorrect =
        similarity >= threshold ||
        (normalizedTranscript.length > 0 &&
          (normalizedTranscript.includes(target) || target.includes(normalizedTranscript)))

      const finalConfidence = confidenceFromApi !== undefined ? confidenceFromApi : similarity

      setResult({
        transcript: normalizedTranscript,
        confidence: finalConfidence,
        isCorrect,
      })
    },
    []
  )

  // ── MediaRecorder + Backend ASR fallback ──

  const startMediaRecorderPath = useCallback(
    async (stream: MediaStream) => {
      const mimeType = getSupportedMimeType()
      if (!mimeType) {
        setError('No supported audio MIME type found for MediaRecorder.')
        releaseResources()
        return
      }

      chunksRef.current = []

      const recorder = new MediaRecorder(stream, { mimeType })
      mediaRecorderRef.current = recorder

      recorder.ondataavailable = (e: BlobEvent) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data)
        }
      }

      recorder.onerror = () => {
        setError('Audio recording failed.')
        setIsRecording(false)
        releaseResources()
      }

      recorder.onstop = async () => {
        setIsRecording(false)
        stopMicLevelLoop()
        stopRecordingTimer()

        if (chunksRef.current.length === 0) {
          setError('No audio data was recorded.')
          releaseResources()
          return
        }

        setIsProcessing(true)
        try {
          const blob = new Blob(chunksRef.current, { type: mimeType })
          const base64 = await blobToBase64(blob)

          const response = await fetch('/api/pronunciation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              audio_base64: base64,
              target_word: targetWordRef.current,
            }),
          })

          if (!response.ok) {
            const errBody = await response.json().catch(() => ({}))
            throw new Error(
              (errBody as Record<string, unknown>).error?.toString() ||
                `Server error (${response.status})`
            )
          }

          const data = (await response.json()) as {
            transcript: string
            confidence: number
            is_correct: boolean
          }

          processTranscript(data.transcript, data.confidence)
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : String(err)
          setError(`Processing failed: ${msg}`)
        } finally {
          setIsProcessing(false)
          releaseResources()
        }
      }

      recorder.start(100) // collect data every 100ms
      setIsRecording(true)
      startMicLevelLoop()
      startRecordingTimer()

      // Auto-stop
      autoStopTimerRef.current = setTimeout(() => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
          mediaRecorderRef.current.stop()
        }
      }, autoStopMsRef.current)
    },
    [releaseResources, startMicLevelLoop, startRecordingTimer, stopMicLevelLoop, stopRecordingTimer, processTranscript]
  )

  // ── Web Speech API path ──

  const startWebSpeechPath = useCallback(
    async (stream: MediaStream) => {
      const Ctor = getSpeechRecognitionConstructor()
      if (!Ctor) {
        // Should not happen since we checked before, but fallback
        startMediaRecorderPath(stream)
        return
      }

      const recognition = new Ctor()
      speechRecognitionRef.current = recognition

      recognition.lang = languageRef.current
      recognition.continuous = false
      recognition.interimResults = false
      recognition.maxAlternatives = 1

      recognition.onstart = () => {
        setIsRecording(true)
        startMicLevelLoop()
        startRecordingTimer()
      }

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        try {
          const firstResult = event.results[0]
          if (!firstResult || firstResult.length === 0) {
            setError('No speech was detected. Please try again.')
            return
          }

          const transcript = firstResult[0].transcript
          const apiConfidence = firstResult[0].confidence
            ? Math.round(firstResult[0].confidence * 100)
            : undefined

          processTranscript(transcript, apiConfidence)
        } catch {
          setError('Failed to process speech recognition result.')
        }
      }

      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        const errName = event.error

        // "no-speech" and "aborted" are not critical errors, just no result
        if (errName === 'no-speech') {
          setError('No speech was detected. Please try again.')
        } else if (errName === 'aborted') {
          // User-initiated abort, do nothing
        } else if (errName === 'not-allowed') {
          setError('Microphone permission denied. Please allow microphone access.')
        } else if (errName === 'network') {
          // Network error with Web Speech API – fall back to MediaRecorder
          setIsRecording(false)
          stopMicLevelLoop()
          stopRecordingTimer()
          if (speechRecognitionRef.current) {
            speechRecognitionRef.current = null
          }
          // Try MediaRecorder fallback
          if (hasMediaRecorder && stream.active) {
            setError(null)
            startMediaRecorderPath(stream)
            return
          }
          setError('Speech recognition failed due to a network error.')
        } else {
          // For other errors, try falling back to MediaRecorder
          setIsRecording(false)
          stopMicLevelLoop()
          stopRecordingTimer()
          if (speechRecognitionRef.current) {
            speechRecognitionRef.current = null
          }
          if (hasMediaRecorder && stream.active) {
            setError(null)
            startMediaRecorderPath(stream)
            return
          }
          setError(`Speech recognition error: ${errName}`)
        }

        setIsRecording(false)
        stopMicLevelLoop()
        stopRecordingTimer()
      }

      recognition.onend = () => {
        setIsRecording(false)
        stopMicLevelLoop()
        stopRecordingTimer()

        // Clear auto-stop timer if still pending
        if (autoStopTimerRef.current !== null) {
          clearTimeout(autoStopTimerRef.current)
          autoStopTimerRef.current = null
        }

        // Small delay then release resources (give onresult a moment to fire)
        setTimeout(() => {
          releaseResources()
        }, 200)
      }

      try {
        recognition.start()
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err)
        setError(`Could not start speech recognition: ${msg}`)
        releaseResources()
        return
      }

      // Auto-stop: stop the recognition after timeout
      autoStopTimerRef.current = setTimeout(() => {
        if (speechRecognitionRef.current) {
          try {
            speechRecognitionRef.current.stop()
          } catch (_) {
            // ignore
          }
        }
      }, autoStopMsRef.current)
    },
    [
      startMediaRecorderPath,
      startMicLevelLoop,
      startRecordingTimer,
      stopMicLevelLoop,
      stopRecordingTimer,
      releaseResources,
      processTranscript,
      hasMediaRecorder,
    ]
  )

  // ── Public Actions ──

  const startRecording = useCallback(async () => {
    // Reset previous state
    setError(null)
    setResult(null)
    setMicLevel(0)
    setRecordingSeconds(0)

    if (!isSupported) {
      setError('Speech recognition is not supported in this browser.')
      return
    }

    // Acquire mic stream + analyser
    const stream = await acquireStreamAndAnalyser()
    if (!stream) return // error already set in acquireStreamAndAnalyser

    // Choose path
    if (methodRef.current === 'webspeech') {
      await startWebSpeechPath(stream)
    } else if (methodRef.current === 'mediaRecorder') {
      await startMediaRecorderPath(stream)
    } else {
      setError('Speech recognition is not supported in this browser.')
      releaseResources()
    }
  }, [isSupported, acquireStreamAndAnalyser, startWebSpeechPath, startMediaRecorderPath, releaseResources])

  const stopRecording = useCallback(() => {
    // If using Web Speech API
    if (speechRecognitionRef.current) {
      try {
        speechRecognitionRef.current.stop()
      } catch (_) {
        // ignore
      }
      return
    }

    // If using MediaRecorder
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop()
      return
    }

    // Fallback: just release everything
    setIsRecording(false)
    releaseResources()
  }, [releaseResources])

  const reset = useCallback(() => {
    releaseResources()
    setIsRecording(false)
    setIsProcessing(false)
    setMicLevel(0)
    setRecordingSeconds(0)
    setResult(null)
    setError(null)
    chunksRef.current = []
  }, [releaseResources])

  // ── Cleanup on unmount ──

  useEffect(() => {
    return () => {
      releaseResources()
    }
  }, [releaseResources])

  return {
    isRecording,
    isProcessing,
    micLevel,
    recordingSeconds,
    result,
    error,
    isSupported,
    method: resolvedMethod,
    startRecording,
    stopRecording,
    reset,
  }
}
