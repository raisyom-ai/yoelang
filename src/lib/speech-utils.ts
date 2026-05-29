'use client'

/**
 * Robust speech synthesis utility for pronouncing English words.
 * Handles:
 * - Voice loading (async in Chrome)
 * - Canceling previous speech before new speech
 * - Selecting an English voice
 * - Fallback if speechSynthesis is not available
 */

// Cache for loaded voices
let voicesLoaded = false
let voicesLoadPromise: Promise<SpeechSynthesisVoice[]> | null = null

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  if (voicesLoaded) {
    return Promise.resolve(window.speechSynthesis.getVoices())
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

    // Wait for voices to load
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
  // Prefer en-US voices, then any English voice
  const enUS = voices.find(v => v.lang === 'en-US' && !v.localService)
    || voices.find(v => v.lang === 'en-US')
    || voices.find(v => v.lang.startsWith('en'))
    || null
  return enUS
}

/**
 * Speak a word or phrase using the Web Speech Synthesis API.
 * Handles voice loading, cancellation, and English voice selection.
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
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    console.warn('[speakWord] speechSynthesis not available')
    return
  }

  // Cancel any ongoing speech first
  window.speechSynthesis.cancel()

  // Wait a tiny bit after cancel for clean state
  await new Promise(r => setTimeout(r, 50))

  // Load voices
  const voices = await loadVoices()

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
    utterance.onend = () => resolve()
    utterance.onerror = () => resolve() // Don't reject, just resolve

    window.speechSynthesis.speak(utterance)

    // Safety timeout - resolve after 5 seconds even if onend doesn't fire
    setTimeout(() => resolve(), 5000)
  })
}

/**
 * Check if speech synthesis is available in the current browser
 */
export function isSpeechSynthesisAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}
