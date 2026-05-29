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

  // ── State ──
  const [isRecording, setIsRecording] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [micLevel, setMicLevel] = useState(0)
  const [recordingSeconds, setRecordingSeconds] = useState(0)
  const [result, setResult] = useState<SpeechRecognitionResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isSupported, setIsSupported] = useState(false)
  const [method, setMethod] = useState<'webspeech' | 'mediaRecorder' | 'none'>('none')

  // ── Refs ──
  const mediaStreamRef = useRef<MediaStream | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const animFrameRef = useRef<number | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const speechRecognitionRef = useRef<SpeechRecognitionInstance | null>(null)
  const autoStopTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const recordingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const isStoppedRef = useRef(false)

  // Refs for current option values
  const targetWordRef = useRef(targetWord)
  const similarityThresholdRef = useRef(similarityThreshold)
  const autoStopMsRef = useRef(autoStopMs)
  const languageRef = useRef(language)

  useEffect(() => { targetWordRef.current = targetWord }, [targetWord])
  useEffect(() => { similarityThresholdRef.current = similarityThreshold }, [similarityThreshold])
  useEffect(() => { autoStopMsRef.current = autoStopMs }, [autoStopMs])
  useEffect(() => { languageRef.current = language }, [language])

  // ── Detect supported method on mount ──
  useEffect(() => {
    if (typeof window === 'undefined') return

    const hasSpeechRecognition = !!getSpeechRecognitionConstructor()
    const hasMediaRecorder = typeof MediaRecorder !== 'undefined'
    const hasGetUserMedia = !!navigator.mediaDevices?.getUserMedia

    if (hasSpeechRecognition) {
      // Web Speech API does NOT need getUserMedia - it handles mic access internally
      setMethod('webspeech')
      setIsSupported(true)
    } else if (hasMediaRecorder && hasGetUserMedia) {
      setMethod('mediaRecorder')
      setIsSupported(true)
    } else {
      setMethod('none')
      setIsSupported(false)
    }
  }, [])

  // ── Mic level visualisation loop ──

  const startMicLevelLoop = useCallback(() => {
    const analyser = analyserRef.current
    if (!analyser) return

    const dataArray = new Uint8Array(analyser.frequencyBinCount)

    const tick = () => {
      analyser.getByteFrequencyData(dataArray)
      let sum = 0
      for (let i = 0; i < dataArray.length; i++) {
        sum += dataArray[i] * dataArray[i]
      }
      const rms = Math.sqrt(sum / dataArray.length)
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

  // ── Try to get mic stream + analyser (optional, for visualization) ──

  const tryAcquireStreamForVisualization = useCallback(async (): Promise<void> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      })
      mediaStreamRef.current = stream

      const audioCtx = new AudioContext()
      const source = audioCtx.createMediaStreamSource(stream)
      const analyser = audioCtx.createAnalyser()
      analyser.fftSize = 512
      analyser.smoothingTimeConstant = 0.8
      source.connect(analyser)

      audioContextRef.current = audioCtx
      analyserRef.current = analyser
    } catch {
      // Visualization is optional - don't block speech recognition
      console.log('[SpeechRecognition] Mic visualization not available, continuing without it')
    }
  }, [])

  // ── Acquire stream for MediaRecorder (required) ──

  const acquireStreamForRecording = useCallback(async (): Promise<MediaStream | null> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      })
      mediaStreamRef.current = stream

      const audioCtx = new AudioContext()
      const source = audioCtx.createMediaStreamSource(stream)
      const analyser = audioCtx.createAnalyser()
      analyser.fftSize = 512
      analyser.smoothingTimeConstant = 0.8
      source.connect(analyser)

      audioContextRef.current = audioCtx
      analyserRef.current = analyser

      return stream
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      if (msg.includes('NotAllowed') || msg.includes('Permission')) {
        setError('Permission du microphone refusée. Veuillez autoriser l\'accès au microphone et réessayer.')
      } else if (msg.includes('NotFound') || msg.includes('DevicesNotFound')) {
        setError('Aucun microphone trouvé. Veuillez connecter un microphone.')
      } else {
        setError(`Impossible d'accéder au microphone: ${msg}`)
      }
      return null
    }
  }, [])

  // ── Release all resources ──

  const releaseResources = useCallback(() => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop())
      mediaStreamRef.current = null
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.close().catch(() => {})
      audioContextRef.current = null
    }
    analyserRef.current = null
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try { mediaRecorderRef.current.stop() } catch (_) { /* ignore */ }
      mediaRecorderRef.current = null
    }
    if (speechRecognitionRef.current) {
      try { speechRecognitionRef.current.abort() } catch (_) { /* ignore */ }
      speechRecognitionRef.current = null
    }
    if (autoStopTimerRef.current !== null) {
      clearTimeout(autoStopTimerRef.current)
      autoStopTimerRef.current = null
    }
    stopMicLevelLoop()
    stopRecordingTimer()
  }, [stopMicLevelLoop, stopRecordingTimer])

  // ── Process result ──

  const processTranscript = useCallback(
    (transcript: string, confidenceFromApi?: number) => {
      const normalizedTranscript = transcript.toLowerCase().trim()
      const target = targetWordRef.current.toLowerCase().trim()
      const threshold = similarityThresholdRef.current

      const similarity = calculateSimilarity(normalizedTranscript, target)

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

  // ── MediaRecorder + Backend ASR path ──

  const startMediaRecorderPath = useCallback(
    async (stream: MediaStream) => {
      const mimeType = getSupportedMimeType()
      if (!mimeType) {
        setError('Format audio non supporté par votre navigateur.')
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
        setError('L\'enregistrement audio a échoué.')
        setIsRecording(false)
        releaseResources()
      }

      recorder.onstop = async () => {
        setIsRecording(false)
        stopMicLevelLoop()
        stopRecordingTimer()

        if (isStoppedRef.current) {
          releaseResources()
          return
        }

        if (chunksRef.current.length === 0) {
          setError('Aucune donnée audio n\'a été enregistrée.')
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
              `Erreur serveur (${response.status})`
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
          setError(`Traitement échoué: ${msg}`)
        } finally {
          setIsProcessing(false)
          releaseResources()
        }
      }

      recorder.start(100)
      setIsRecording(true)
      startMicLevelLoop()
      startRecordingTimer()

      autoStopTimerRef.current = setTimeout(() => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
          mediaRecorderRef.current.stop()
        }
      }, autoStopMsRef.current)
    },
    [releaseResources, startMicLevelLoop, startRecordingTimer, stopMicLevelLoop, stopRecordingTimer, processTranscript]
  )

  // ── Web Speech API path ──
  // KEY FIX: Web Speech API handles microphone access internally.
  // We don't need getUserMedia for speech recognition itself.
  // We only try getUserMedia for the optional mic level visualization.

  const startWebSpeechPath = useCallback(async () => {
    const Ctor = getSpeechRecognitionConstructor()
    if (!Ctor) {
      setError('API de reconnaissance vocale non disponible dans ce navigateur.')
      return
    }

    // Try to get mic stream for visualization (optional)
    await tryAcquireStreamForVisualization()

    const recognition = new Ctor()
    speechRecognitionRef.current = recognition

    recognition.lang = languageRef.current
    recognition.continuous = false
    recognition.interimResults = false
    recognition.maxAlternatives = 3

    recognition.onstart = () => {
      setIsRecording(true)
      if (analyserRef.current) {
        startMicLevelLoop()
      }
      startRecordingTimer()
    }

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      try {
        // Try all alternatives to find the best match
        const firstResult = event.results[0]
        if (!firstResult || firstResult.length === 0) {
          setError('Aucune parole détectée. Veuillez réessayer.')
          return
        }

        // Get the best transcript from alternatives
        let bestTranscript = ''
        let bestSimilarity = -1
        let apiConfidence: number | undefined

        for (let i = 0; i < firstResult.length; i++) {
          const alt = firstResult[i]
          const altTranscript = alt.transcript.trim()
          const altSimilarity = calculateSimilarity(
            altTranscript.toLowerCase(),
            targetWordRef.current.toLowerCase()
          )
          if (altSimilarity > bestSimilarity) {
            bestSimilarity = altSimilarity
            bestTranscript = altTranscript
            apiConfidence = alt.confidence ? Math.round(alt.confidence * 100) : undefined
          }
        }

        processTranscript(bestTranscript, apiConfidence)
      } catch {
        setError('Erreur lors du traitement de la reconnaissance vocale.')
      }
    }

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      const errName = event.error
      console.log('[SpeechRecognition] Error:', errName)

      if (errName === 'no-speech') {
        setError('Aucune parole détectée. Parlez plus fort et réessayez.')
      } else if (errName === 'aborted') {
        // User-initiated abort, do nothing
      } else if (errName === 'not-allowed') {
        setError('Permission du microphone refusée. Autorisez l\'accès au microphone dans les paramètres de votre navigateur.')
      } else if (errName === 'network') {
        // Network error with Web Speech API – try MediaRecorder fallback
        setIsRecording(false)
        stopMicLevelLoop()
        stopRecordingTimer()
        speechRecognitionRef.current = null

        // Try fallback
        const canFallback = typeof MediaRecorder !== 'undefined' && !!navigator.mediaDevices?.getUserMedia
        if (canFallback) {
          setError(null)
          setMethod('mediaRecorder')
          // Start the fallback path
          acquireStreamForRecording().then((stream) => {
            if (stream) startMediaRecorderPath(stream)
          })
          return
        }
        setError('Erreur réseau. Vérifiez votre connexion internet.')
      } else {
        setError(`Erreur de reconnaissance vocale: ${errName}`)
      }

      setIsRecording(false)
      stopMicLevelLoop()
      stopRecordingTimer()
    }

    recognition.onend = () => {
      setIsRecording(false)
      stopMicLevelLoop()
      stopRecordingTimer()

      if (autoStopTimerRef.current !== null) {
        clearTimeout(autoStopTimerRef.current)
        autoStopTimerRef.current = null
      }

      // Delay resource release to let onresult fire
      setTimeout(() => {
        releaseResources()
      }, 300)
    }

    try {
      recognition.start()
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      setError(`Impossible de démarrer la reconnaissance vocale: ${msg}`)
      releaseResources()
      return
    }

    // Auto-stop
    autoStopTimerRef.current = setTimeout(() => {
      if (speechRecognitionRef.current) {
        try {
          speechRecognitionRef.current.stop()
        } catch (_) { /* ignore */ }
      }
    }, autoStopMsRef.current)
  }, [
    tryAcquireStreamForVisualization,
    startMicLevelLoop,
    startRecordingTimer,
    stopMicLevelLoop,
    stopRecordingTimer,
    releaseResources,
    processTranscript,
    acquireStreamForRecording,
    startMediaRecorderPath,
  ])

  // ── Public Actions ──

  const startRecording = useCallback(async () => {
    // Reset previous state
    setError(null)
    setResult(null)
    setMicLevel(0)
    setRecordingSeconds(0)
    isStoppedRef.current = false

    if (!isSupported) {
      setError('La reconnaissance vocale n\'est pas supportée dans ce navigateur. Essayez Chrome ou Edge.')
      return
    }

    if (method === 'webspeech') {
      await startWebSpeechPath()
    } else if (method === 'mediaRecorder') {
      const stream = await acquireStreamForRecording()
      if (stream) {
        await startMediaRecorderPath(stream)
      }
    } else {
      setError('La reconnaissance vocale n\'est pas supportée dans ce navigateur.')
    }
  }, [isSupported, method, startWebSpeechPath, acquireStreamForRecording, startMediaRecorderPath])

  const stopRecording = useCallback(() => {
    isStoppedRef.current = true

    if (speechRecognitionRef.current) {
      try {
        speechRecognitionRef.current.stop()
      } catch (_) { /* ignore */ }
      return
    }

    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop()
      return
    }

    setIsRecording(false)
    releaseResources()
  }, [releaseResources])

  const reset = useCallback(() => {
    isStoppedRef.current = true
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
      isStoppedRef.current = true
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
    method,
    startRecording,
    stopRecording,
    reset,
  }
}
