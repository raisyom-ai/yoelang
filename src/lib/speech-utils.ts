'use client'

/**
 * Robust speech synthesis utility for pronouncing English words.
 * Handles:
 * - Voice loading (async in Chrome)
 * - Canceling previous speech before new speech
 * - Selecting an English voice (prefers high-quality network voices)
 * - Chrome long-speech bug workaround (pause/resume every 10s)
 * - Fallback if speechSynthesis is not available
 * - Audio context beep as fallback when TTS voices are unavailable
 */

// Cache for loaded voices
let voicesLoaded = false
let voicesLoadPromise: Promise<SpeechSynthesisVoice[]> | null = null

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  if (voicesLoaded && typeof window !== 'undefined') {
    const cached = window.speechSynthesis.getVoices()
    if (cached.length > 0) return Promise.resolve(cached)
  }

  if (voicesLoadPromise) {
    return voicesLoadPromise
  }

  voicesLoadPromise = new Promise<SpeechSynthesisVoice[]>((resolve) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      resolve([])
      return
    }

    const voices = window.speechSynthesis.getVoices()
    if (voices.length > 0) {
      voicesLoaded = true
      resolve(voices)
      return
    }

    // Wait for voices to load (Chrome loads them asynchronously)
    const onVoicesChanged = () => {
      const v = window.speechSynthesis.getVoices()
      if (v.length > 0) {
        voicesLoaded = true
        window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged)
        resolve(v)
      }
    }

    window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged)

    // Timeout after 3 seconds - resolve with whatever we have
    setTimeout(() => {
      voicesLoaded = true
      window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged)
      resolve(window.speechSynthesis.getVoices())
    }, 3000)
  })

  return voicesLoadPromise
}

function getEnglishVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  // Priority: high-quality network en-US → any en-US → any English → null
  // Network voices (Google, etc.) sound much better than local voices
  return (
    voices.find(v => v.lang === 'en-US' && v.name.includes('Google')) ||
    voices.find(v => v.lang === 'en-US' && !v.localService) ||
    voices.find(v => v.lang === 'en-US') ||
    voices.find(v => v.lang === 'en-GB' && !v.localService) ||
    voices.find(v => v.lang.startsWith('en') && !v.localService) ||
    voices.find(v => v.lang.startsWith('en')) ||
    null
  )
}

// Chrome bug workaround: speechSynthesis pauses after ~15s of continuous speech
// We use a keep-alive interval to prevent this
let keepAliveInterval: ReturnType<typeof setInterval> | null = null

function startKeepAlive() {
  stopKeepAlive()
  keepAliveInterval = setInterval(() => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause()
      window.speechSynthesis.resume()
    } else {
      stopKeepAlive()
    }
  }, 10000)
}

function stopKeepAlive() {
  if (keepAliveInterval !== null) {
    clearInterval(keepAliveInterval)
    keepAliveInterval = null
  }
}

/**
 * Play a short beep sound using Web Audio API as a fallback
 * when speech synthesis is unavailable
 */
function playBeepFallback(): Promise<void> {
  return new Promise((resolve) => {
    try {
      const audioCtx = new AudioContext()
      const oscillator = audioCtx.createOscillator()
      const gainNode = audioCtx.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioCtx.destination)

      oscillator.frequency.value = 440
      oscillator.type = 'sine'
      gainNode.gain.value = 0.3

      oscillator.start()
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3)

      oscillator.onended = () => {
        audioCtx.close().catch(() => {})
        resolve()
      }

      // Safety timeout
      setTimeout(() => {
        try { oscillator.stop() } catch (_) { /* ignore */ }
        audioCtx.close().catch(() => {})
        resolve()
      }, 500)
    } catch {
      resolve()
    }
  })
}

/**
 * Speak a word or phrase using the Web Speech Synthesis API.
 * Handles voice loading, cancellation, and English voice selection.
 * Falls back to beep sound if TTS is completely unavailable.
 */
export async function speakWord(
  text: string,
  options?: {
    rate?: number
    pitch?: number
    volume?: number
    lang?: string
  }
): Promise<void> {
  if (typeof window === 'undefined') {
    return
  }

  // If speechSynthesis is not available at all, play beep fallback
  if (!window.speechSynthesis) {
    console.warn('[speakWord] speechSynthesis not available, playing beep fallback')
    await playBeepFallback()
    return
  }

  // Cancel any ongoing speech first
  window.speechSynthesis.cancel()
  stopKeepAlive()

  // Wait a tiny bit after cancel for clean state (important for Chrome)
  await new Promise(r => setTimeout(r, 80))

  // Load voices
  const voices = await loadVoices()

  // If no voices loaded at all, try speaking with default voice
  // (some browsers still work without explicit voice selection)
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = options?.lang || 'en-US'
  utterance.rate = options?.rate ?? 0.85
  utterance.pitch = options?.pitch ?? 1
  utterance.volume = options?.volume ?? 1

  // Select English voice
  const englishVoice = getEnglishVoice(voices)
  if (englishVoice) {
    utterance.voice = englishVoice
  }

  return new Promise((resolve) => {
    let resolved = false

    const done = () => {
      if (resolved) return
      resolved = true
      stopKeepAlive()
      resolve()
    }

    utterance.onend = () => done()
    utterance.onerror = (e) => {
      // "interrupted" or "canceled" errors are normal when we call cancel()
      if (e.error === 'interrupted' || e.error === 'canceled') {
        done()
        return
      }
      console.warn('[speakWord] Speech error:', e.error)
      done()
    }

    try {
      window.speechSynthesis.speak(utterance)
    } catch (err) {
      console.warn('[speakWord] speak() threw:', err)
      done()
      return
    }

    startKeepAlive()

    // Safety timeout - resolve after 10 seconds even if onend doesn't fire
    setTimeout(() => done(), 10000)
  })
}

/**
 * Speak a word slowly (for pronunciation practice)
 */
export async function speakWordSlow(text: string, lang: string = 'en-US'): Promise<void> {
  return speakWord(text, { rate: 0.6, lang })
}

/**
 * Check if speech synthesis is available in the current browser
 */
export function isSpeechSynthesisAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

/**
 * Get list of available English voices
 */
export async function getAvailableEnglishVoices(): Promise<SpeechSynthesisVoice[]> {
  const voices = await loadVoices()
  return voices.filter(v => v.lang.startsWith('en'))
}

/**
 * Stop any currently playing speech
 */
export function stopSpeaking(): void {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel()
    stopKeepAlive()
  }
}
