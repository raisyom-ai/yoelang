'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Home, Send, Mic, MicOff, Bot, User as UserIcon,
  Trash2, Sparkles, AlertCircle,
  MessageCircle, Volume2, VolumeX, Speaker, ChevronDown, Loader2, CheckCircle2
} from 'lucide-react'
import { useAppStore, type ChatMsg } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

// ─── Voice Configuration ────────────────────────────────────────────────────

interface VoiceOption {
  id: string
  name: string
  description: string
  accent: string
  gender: 'M' | 'F' | 'N'
}

const VOICE_OPTIONS: VoiceOption[] = [
  // Masculine voices
  { id: 'jam', name: 'Jam', description: 'Gentleman britannique', accent: 'UK', gender: 'M' },
  { id: 'xiaochen', name: 'Xiaochen', description: 'Calme et professionnel', accent: 'Standard', gender: 'M' },
  { id: 'luodo', name: 'Luodo', description: 'Charismatique et chaleureux', accent: 'Afrique', gender: 'M' },
  // Neutral voices
  { id: 'kazi', name: 'Kazi', description: 'Claire et naturelle', accent: 'Afrique', gender: 'N' },
  { id: 'douji', name: 'Douji', description: 'Naturelle et fluide', accent: 'Standard', gender: 'N' },
  // Feminine voices
  { id: 'tongtong', name: 'Tongtong', description: 'Douce et amicale', accent: 'Standard', gender: 'F' },
  { id: 'chuichui', name: 'Chuichui', description: 'Vivante et énergique', accent: 'Standard', gender: 'F' },
]

const GENDER_LABELS: Record<string, string> = {
  M: '♂ Homme',
  F: '♀ Femme',
  N: '◉ Neutre',
}

const GENDER_COLORS: Record<string, string> = {
  M: 'bg-blue-500/15 text-blue-600 border-blue-500/30',
  F: 'bg-pink-500/15 text-pink-600 border-pink-500/30',
  N: 'bg-yoel-gold/15 text-yoel-gold border-yoel-gold/30',
}

// ─── Text Utilities ──────────────────────────────────────────────────────────

function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/#{1,6}\s/g, '')
    .replace(/`{1,3}[^`]*`{1,3}/g, (match) => match.replace(/`/g, ''))
    .replace(/[🎵🎶🇬🇧🇫🇷💡✅❌🧠💬🎤📖🎉]/g, '')
}

/**
 * Split text into sentences for streaming TTS.
 * Each sentence becomes a separate TTS request for faster first-play.
 */
function splitIntoSentences(text: string): string[] {
  // Clean the text first
  const clean = stripMarkdown(text).trim()
  if (!clean) return []

  // Split at sentence-ending punctuation, keeping the punctuation with the sentence
  const rawSentences = clean.match(/[^.!?]+[.!?]+/g)

  if (!rawSentences) {
    // No sentence-ending punctuation found, return as-is if not too long
    if (clean.length <= 300) return [clean]
    // For long text without punctuation, split at commas or every ~150 chars
    const parts = clean.match(/[^,]+,?/g) || [clean]
    const result: string[] = []
    let current = ''
    for (const part of parts) {
      if ((current + part).length <= 200) {
        current += part
      } else {
        if (current) result.push(current.trim())
        current = part
      }
    }
    if (current) result.push(current.trim())
    return result.filter(s => s.length > 0)
  }

  // Merge very short sentences together for better TTS quality
  const merged: string[] = []
  let buffer = ''
  for (const sentence of rawSentences) {
    const trimmed = sentence.trim()
    if (!trimmed) continue

    if (buffer.length + trimmed.length <= 250) {
      buffer += (buffer ? ' ' : '') + trimmed
    } else {
      if (buffer) merged.push(buffer)
      buffer = trimmed
    }
  }
  if (buffer) merged.push(buffer)

  return merged.filter(s => s.length > 0)
}

// ─── Audio Cache ─────────────────────────────────────────────────────────────

interface CachedAudio {
  url: string
  voice: string
}

// Global audio cache - persists across renders
const audioCache = new Map<string, CachedAudio>()

function getCacheKey(messageId: string, voice: string): string {
  return `${messageId}:${voice}`
}

function getSentenceCacheKey(messageId: string, sentenceIndex: number, voice: string): string {
  return `${messageId}:s${sentenceIndex}:${voice}`
}

function cleanupAudioCache() {
  for (const [, cached] of audioCache) {
    URL.revokeObjectURL(cached.url)
  }
  audioCache.clear()
}

// ─── Sentence Audio Queue ───────────────────────────────────────────────────
// Manages sentence-by-sentence TTS generation and playback for fast streaming
// Single voice only - SDK audio, NO browser TTS overlap

interface SentenceQueueState {
  messageId: string
  sentences: string[]
  currentIndex: number
  audioUrls: (string | null)[]  // cached audio URLs per sentence
  isGenerating: boolean
  isPlaying: boolean
  isStopped: boolean
}

class SentenceAudioQueue {
  private state: SentenceQueueState | null = null
  private currentAudio: HTMLAudioElement | null = null
  private voice: string
  private onStateChange: (update: { speakingId: string | null; progress?: number }) => void
  private generateAbortController: AbortController | null = null

  constructor(
    voice: string,
    onStateChange: (update: { speakingId: string | null; progress?: number }) => void
  ) {
    this.voice = voice
    this.onStateChange = onStateChange
  }

  async start(messageId: string, text: string) {
    // Stop any existing playback
    this.stop()

    const sentences = splitIntoSentences(text)
    if (sentences.length === 0) return

    this.state = {
      messageId,
      sentences,
      currentIndex: 0,
      audioUrls: new Array(sentences.length).fill(null),
      isGenerating: true,
      isPlaying: true,
      isStopped: false,
    }

    this.onStateChange({ speakingId: messageId })

    // Pre-cache: check if ALL sentence audio already exists → instant playback
    const allCached = sentences.every((_, i) =>
      audioCache.has(getSentenceCacheKey(messageId, i, this.voice))
    )

    if (allCached) {
      for (let i = 0; i < sentences.length; i++) {
        if (this.state?.isStopped) return
        const cacheKey = getSentenceCacheKey(messageId, i, this.voice)
        const cached = audioCache.get(cacheKey)
        if (cached) {
          this.state.currentIndex = i
          await this.playSentenceAudio(cached.url)
        }
      }
      this.finish()
      return
    }

    // ─── Fast streaming: generate sentences in advance ──────────────────
    // Start generating first 2 sentences in parallel for speed
    const firstSdkPromise = this.generateSentence(0)
    const secondSdkPromise = sentences.length > 1 ? this.generateSentence(1) : null

    // Wait for first sentence and play it immediately
    const firstUrl = await firstSdkPromise
    if (this.state?.isStopped) return

    if (firstUrl) {
      // Start generating sentence 2 while sentence 1 plays
      await this.playSentenceAudio(firstUrl)
    }

    if (this.state?.isStopped) return

    // Second sentence should be ready by now (generated in parallel)
    if (secondSdkPromise) {
      const secondUrl = await secondSdkPromise
      if (this.state?.isStopped) return

      if (secondUrl) {
        this.state.currentIndex = 1
        this.onStateChange({ speakingId: messageId, progress: 1 / sentences.length })
        // Start generating sentence 3 while sentence 2 plays
        const thirdGenPromise = sentences.length > 2 ? this.generateSentence(2) : null
        await this.playSentenceAudio(secondUrl)
        if (thirdGenPromise) await thirdGenPromise
      }
    }

    if (this.state?.isStopped) return

    // Continue with remaining sentences - pipeline: generate next WHILE current plays
    for (let i = 2; i < sentences.length; i++) {
      if (this.state?.isStopped) return

      this.state.currentIndex = i
      this.onStateChange({ speakingId: messageId, progress: i / sentences.length })

      const url = this.state.audioUrls[i] || await this.generateSentence(i)
      if (this.state?.isStopped || !url) continue

      // Start generating NEXT sentence in background while this one plays
      const nextGenPromise = i + 1 < sentences.length ? this.generateSentence(i + 1) : null
      await this.playSentenceAudio(url)
      if (nextGenPromise) await nextGenPromise
    }

    this.finish()
  }

  private async generateSentence(index: number): Promise<string | null> {
    if (!this.state) return null

    const sentence = this.state.sentences[index]
    const cacheKey = getSentenceCacheKey(this.state.messageId, index, this.voice)

    // Check cache first
    if (audioCache.has(cacheKey)) {
      const url = audioCache.get(cacheKey)!.url
      this.state.audioUrls[index] = url
      return url
    }

    this.generateAbortController = new AbortController()

    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: sentence.slice(0, 500),
          voice: this.voice,
          speed: 0.9,
        }),
        signal: this.generateAbortController.signal,
      })

      if (!response.ok) throw new Error('TTS API failed')

      const audioBlob = await response.blob()
      const audioUrl = URL.createObjectURL(audioBlob)

      // Cache it
      audioCache.set(cacheKey, { url: audioUrl, voice: this.voice })
      this.state.audioUrls[index] = audioUrl

      return audioUrl
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') return null
      console.warn(`[Sentence TTS] Error generating sentence ${index}:`, err)
      return null
    }
  }

  private playSentenceAudio(url: string): Promise<void> {
    return new Promise((resolve) => {
      if (this.state?.isStopped) {
        resolve()
        return
      }

      // Stop previous audio
      if (this.currentAudio) {
        this.currentAudio.pause()
        this.currentAudio = null
      }

      const audio = new Audio(url)
      this.currentAudio = audio

      audio.onended = () => {
        this.currentAudio = null
        resolve()
      }

      audio.onerror = () => {
        this.currentAudio = null
        resolve()
      }

      audio.play().catch(() => {
        this.currentAudio = null
        resolve()
      })
    })
  }

  private finish() {
    if (this.state) {
      this.state.isPlaying = false
      this.state.isGenerating = false
    }
    this.onStateChange({ speakingId: null })
  }

  stop() {
    if (this.state) {
      this.state.isStopped = true
      this.state.isPlaying = false
    }

    // Cancel any browser speech just in case
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try { window.speechSynthesis.cancel() } catch { /* ignore */ }
    }

    if (this.generateAbortController) {
      this.generateAbortController.abort()
      this.generateAbortController = null
    }

    if (this.currentAudio) {
      this.currentAudio.pause()
      this.currentAudio = null
    }

    this.state = null
    this.onStateChange({ speakingId: null })
  }

  get isPlaying(): boolean {
    return this.state?.isPlaying ?? false
  }

  get currentMessageId(): string | null {
    return this.state?.messageId ?? null
  }
}

// ─── Animation Variants ─────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 24 },
  },
}

const messageVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
}

// ─── Web Speech Recognition API Helper ────────────────────────────────────────

interface SpeechRecognitionEventResult {
  results: SpeechRecognitionResultList
}

interface SpeechRecognitionErrorEventResult {
  error: string
}

interface SpeechRecognitionInstance {
  lang: string
  continuous: boolean
  interimResults: boolean
  maxAlternatives: number
  onresult: ((event: SpeechRecognitionEventResult) => void) | null
  onerror: ((event: SpeechRecognitionErrorEventResult) => void) | null
  onend: (() => void) | null
  onstart: (() => void) | null
  start(): void
  stop(): void
  abort(): void
}

function createSpeechRecognition(): SpeechRecognitionInstance | null {
  if (typeof window === 'undefined') return null
  const SR = (window as Record<string, unknown>).SpeechRecognition as
    | (new () => SpeechRecognitionInstance)
    | undefined
  const WSR = (window as Record<string, unknown>).webkitSpeechRecognition as
    | (new () => SpeechRecognitionInstance)
    | undefined
  const Ctor = SR || WSR
  if (!Ctor) return null
  return new Ctor()
}

// ─── Quick Suggestions ──────────────────────────────────────────────────────

const QUICK_SUGGESTIONS = [
  'How do I introduce myself?',
  "What's the difference between 'a' and 'an'?",
  'Can you help me with pronunciation?',
  'Tell me about present tense',
]

const WELCOME_MESSAGE: ChatMsg = {
  id: 'welcome',
  role: 'assistant',
  content: "Bonjour! I'm your AI English tutor. Ask me anything about English! 🇬🇧",
  timestamp: new Date(),
}

// ─── Typing Indicator ───────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex items-start gap-3 px-4"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yoel-blue to-yoel-blue-dark text-white shadow-md">
        <Bot className="h-4 w-4" />
      </div>
      <div className="glass rounded-2xl rounded-tl-sm px-4 py-3 max-w-[75%]">
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-2 w-2 rounded-full bg-yoel-blue"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Markdown Renderer (basic) ──────────────────────────────────────────────

function renderBasicMarkdown(content: string) {
  const parts = content.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={index} className="italic">
          {part.slice(1, -1)}
        </em>
      )
    }
    return part
  })
}

// ─── Speaking Waveform Animation ────────────────────────────────────────────

function SpeakingWaveform() {
  return (
    <div className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="w-0.5 rounded-full bg-yoel-blue"
          animate={{
            height: [3, 8 + Math.random() * 6, 3],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: i * 0.08,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// ─── Voice Selector Component ───────────────────────────────────────────────

function VoiceSelector({
  selectedVoice,
  onVoiceChange,
}: {
  selectedVoice: string
  onVoiceChange: (voiceId: string) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const current = VOICE_OPTIONS.find(v => v.id === selectedVoice) ?? VOICE_OPTIONS[0]

  const maleVoices = VOICE_OPTIONS.filter(v => v.gender === 'M')
  const neutralVoices = VOICE_OPTIONS.filter(v => v.gender === 'N')
  const femaleVoices = VOICE_OPTIONS.filter(v => v.gender === 'F')

  const renderVoiceOption = (voice: VoiceOption) => (
    <motion.button
      key={voice.id}
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        onVoiceChange(voice.id)
        setIsOpen(false)
        toast.success(`Voix: ${voice.name}`, {
          description: `${voice.description} • ${GENDER_LABELS[voice.gender]} • ${voice.accent}`,
          duration: 2000,
        })
      }}
      className={`w-full flex items-center gap-2.5 px-3 py-2 text-left transition-colors cursor-pointer ${
        selectedVoice === voice.id
          ? 'bg-yoel-gold/10'
          : 'hover:bg-muted'
      }`}
    >
      <div className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${
        selectedVoice === voice.id
          ? 'bg-yoel-gold/20 text-yoel-gold'
          : 'bg-muted text-muted-foreground'
      }`}>
        {voice.name.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <p className="text-xs font-medium">{voice.name}</p>
          <Badge variant="outline" className={`text-[8px] px-1 py-0 border ${GENDER_COLORS[voice.gender]}`}>
            {GENDER_LABELS[voice.gender]}
          </Badge>
        </div>
        <p className="text-[10px] text-muted-foreground">{voice.description} • {voice.accent}</p>
      </div>
      {selectedVoice === voice.id && (
        <div className="h-2 w-2 rounded-full bg-yoel-gold" />
      )}
    </motion.button>
  )

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(prev => !prev)}
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] font-medium transition-all cursor-pointer border ${
          current.gender === 'M'
            ? 'bg-blue-500/10 text-blue-600 border-blue-500/30 hover:bg-blue-500/20'
            : current.gender === 'F'
              ? 'bg-pink-500/10 text-pink-600 border-pink-500/30 hover:bg-pink-500/20'
              : 'bg-yoel-gold/10 text-yoel-gold border-yoel-gold/30 hover:bg-yoel-gold/20'
        }`}
        title="Changer la voix de l'IA"
      >
        <Speaker className="h-3 w-3" />
        <span className="hidden sm:inline">{current.name}</span>
        <ChevronDown className={`h-2.5 w-2.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full mt-2 z-50 w-64 rounded-xl border border-border bg-background shadow-xl overflow-hidden max-h-[70vh] overflow-y-auto"
            >
              <div className="px-3 py-2 border-b border-border/50 bg-muted/30">
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Voix de l&apos;IA
                </p>
              </div>

              <div className="border-b border-border/30">
                <div className="px-3 py-1.5 bg-blue-500/5">
                  <p className="text-[9px] font-semibold text-blue-600 uppercase tracking-wider">
                    ♂ Voix masculines
                  </p>
                </div>
                {maleVoices.map(renderVoiceOption)}
              </div>

              <div className="border-b border-border/30">
                <div className="px-3 py-1.5 bg-yoel-gold/5">
                  <p className="text-[9px] font-semibold text-yoel-gold uppercase tracking-wider">
                    ◉ Voix neutres
                  </p>
                </div>
                {neutralVoices.map(renderVoiceOption)}
              </div>

              <div>
                <div className="px-3 py-1.5 bg-pink-500/5">
                  <p className="text-[9px] font-semibold text-pink-600 uppercase tracking-wider">
                    ♀ Voix féminines
                  </p>
                </div>
                {femaleVoices.map(renderVoiceOption)}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Chat Message Component ─────────────────────────────────────────────────

function ChatMessage({
  message,
  isSpeaking,
  audioState,
  onSpeak,
  onStopSpeak,
}: {
  message: ChatMsg
  isSpeaking: boolean
  audioState: 'idle' | 'loading' | 'ready' | 'streaming'
  onSpeak: () => void
  onStopSpeak: () => void
}) {
  const isUser = message.role === 'user'
  const time = message.timestamp instanceof Date
    ? message.timestamp
    : new Date(message.timestamp)

  return (
    <motion.div
      variants={messageVariants}
      initial="hidden"
      animate="visible"
      className={`flex items-start gap-3 px-4 ${isUser ? 'flex-row-reverse' : ''}`}
    >
      {/* Avatar */}
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-md ${
          isUser
            ? 'bg-gradient-to-br from-yoel-red to-yoel-red-dark text-white'
            : 'bg-gradient-to-br from-yoel-blue to-yoel-blue-dark text-white'
        }`}
      >
        {isUser ? <UserIcon className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>

      {/* Message bubble */}
      <div
        className={`max-w-[75%] space-y-1 ${isUser ? 'items-end' : 'items-start'}`}
      >
        <div
          className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
            isUser
              ? 'bg-yoel-red text-white rounded-tr-sm'
              : 'glass rounded-tl-sm text-foreground'
          }`}
        >
          {isUser ? message.content : renderBasicMarkdown(message.content)}
        </div>
        <div
          className={`flex items-center gap-2 px-1 ${
            isUser ? 'justify-end' : 'justify-start'
          }`}
        >
          <p className="text-[10px] text-muted-foreground">
            {time.toLocaleTimeString('fr-FR', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>

          {/* Speaker button - only on AI messages */}
          {!isUser && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (isSpeaking) {
                  onStopSpeak()
                } else {
                  onSpeak()
                }
              }}
              className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium transition-all cursor-pointer ${
                isSpeaking
                  ? 'bg-yoel-blue/15 text-yoel-blue border border-yoel-blue/30'
                  : audioState === 'ready'
                    ? 'bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border border-emerald-500/20'
                    : audioState === 'streaming'
                      ? 'bg-yoel-blue/10 text-yoel-blue border border-yoel-blue/20'
                      : audioState === 'loading'
                        ? 'bg-yoel-blue/5 text-yoel-blue/50 border border-yoel-blue/10'
                        : 'text-muted-foreground hover:text-yoel-blue hover:bg-yoel-blue/10 border border-transparent'
              }`}
              title={isSpeaking ? 'Arrêter la lecture' : audioState === 'ready' ? 'Écouter (audio prêt!)' : audioState === 'streaming' ? 'Lecture en cours...' : 'Écouter la réponse'}
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="h-3 w-3" />
                  <SpeakingWaveform />
                  <span>Stop</span>
                </>
              ) : audioState === 'ready' ? (
                <>
                  <Volume2 className="h-3 w-3" />
                  <span>Écouter</span>
                  <CheckCircle2 className="h-2.5 w-2.5 text-emerald-500" />
                </>
              ) : audioState === 'streaming' ? (
                <>
                  <Volume2 className="h-3 w-3" />
                  <span>Écouter</span>
                </>
              ) : audioState === 'loading' ? (
                <>
                  <Loader2 className="h-3 w-3 animate-spin" />
                  <span>Préparation...</span>
                </>
              ) : (
                <>
                  <Volume2 className="h-3 w-3" />
                  <span>Écouter</span>
                </>
              )}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function ChatPage() {
  const {
    goBack,
    navigate,
    user,
    currentLevel,
    chatMessages,
    addChatMessage,
    clearChat,
    isChatLoading,
    setChatLoading,
  } = useAppStore()

  const [inputValue, setInputValue] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [recordingLevel, setRecordingLevel] = useState(0)
  const [showClearConfirm, setShowClearConfirm] = useState(false)
  const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null)
  const [autoSpeak, setAutoSpeak] = useState(false)
  const [selectedVoice, setSelectedVoice] = useState<string>('jam')
  // Track audio states per message: 'idle' | 'loading' | 'ready' | 'streaming'
  const [audioStates, setAudioStates] = useState<Record<string, 'idle' | 'loading' | 'ready' | 'streaming'>>({})
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const recognitionRef = useRef<ReturnType<typeof createSpeechRecognition> | null>(null)
  // Sentence audio queue for streaming TTS
  const sentenceQueueRef = useRef<SentenceAudioQueue | null>(null)
  // Refs to track pre-generation state
  const preGenRef = useRef<Map<string, boolean>>(new Map()) // messageId -> is pre-generating

  const level = user?.level ?? currentLevel

  // Determine displayed messages (add welcome if empty)
  const displayMessages = chatMessages.length > 0 ? chatMessages : [WELCOME_MESSAGE]

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [chatMessages, isChatLoading])

  // Simulated recording visual feedback
  useEffect(() => {
    if (!isRecording) {
      setRecordingLevel(0)
      return
    }
    const interval = setInterval(() => {
      setRecordingLevel(Math.random() * 100)
    }, 80)
    return () => clearInterval(interval)
  }, [isRecording])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try { recognitionRef.current.abort() } catch { /* ignore */ }
        recognitionRef.current = null
      }
      if (sentenceQueueRef.current) {
        sentenceQueueRef.current.stop()
        sentenceQueueRef.current = null
      }
      cleanupAudioCache()
    }
  }, [])

  // ─── Handle queue state changes ──────────────────────────────────────
  const handleQueueStateChange = useCallback((update: { speakingId: string | null; progress?: number }) => {
    if (update.speakingId) {
      setSpeakingMessageId(update.speakingId)
      setAudioStates(prev => ({ ...prev, [update.speakingId!]: 'streaming' }))
    } else {
      setSpeakingMessageId(null)
      // When done speaking, mark as ready (cached for next time)
      setAudioStates(prev => {
        const updated = { ...prev }
        for (const key of Object.keys(updated)) {
          if (updated[key] === 'streaming') {
            updated[key] = 'ready'
          }
        }
        return updated
      })
    }
  }, [])

  // ─── TTS: Speak a message (sentence-by-sentence streaming) ────────────
  const handleSpeak = useCallback(async (text: string, messageId: string) => {
    // If already speaking this message, stop
    if (sentenceQueueRef.current?.currentMessageId === messageId && sentenceQueueRef.current.isPlaying) {
      handleStopSpeak()
      return
    }

    // Stop any existing playback
    handleStopSpeak()

    // Show speaking state IMMEDIATELY (no waiting!)
    setSpeakingMessageId(messageId)
    setAudioStates(prev => ({ ...prev, [messageId]: 'streaming' }))

    try {
      // Use sentence queue for streaming playback
      const queue = new SentenceAudioQueue(selectedVoice, handleQueueStateChange)
      sentenceQueueRef.current = queue
      await queue.start(messageId, text)
    } catch (err) {
      console.warn('[Chat TTS Streaming] Error:', err)
      setSpeakingMessageId(null)
      setAudioStates(prev => ({ ...prev, [messageId]: 'idle' }))

      // Fallback: browser TTS
      try {
        const { speakWord } = await import('@/lib/speech-utils')
        setSpeakingMessageId(messageId)
        await speakWord(text, { rate: 0.9 })
      } catch {
        toast.error('Voix indisponible', {
          description: 'La synthèse vocale n\'est pas disponible. Réessayez.',
          duration: 3000,
        })
      } finally {
        setSpeakingMessageId(null)
      }
    }
  }, [selectedVoice, handleQueueStateChange])

  const handleStopSpeak = useCallback(() => {
    if (sentenceQueueRef.current) {
      sentenceQueueRef.current.stop()
      sentenceQueueRef.current = null
    }
    setSpeakingMessageId(null)
  }, [])

  // ─── Pre-generate audio for new AI messages ────────────────────────────
  // Pre-generate only the FIRST sentence to speed up initial playback
  useEffect(() => {
    if (isChatLoading) return

    const lastMsg = chatMessages[chatMessages.length - 1]
    if (!lastMsg || lastMsg.role !== 'assistant') return

    const plainText = stripMarkdown(lastMsg.content)
    if (!plainText.trim()) return

    const fullCacheKey = getCacheKey(lastMsg.id, selectedVoice)

    // If full audio is already cached, mark as ready
    if (audioCache.has(fullCacheKey)) {
      setAudioStates(prev => ({ ...prev, [lastMsg.id]: 'ready' }))
      return
    }

    // Avoid duplicate pre-generation
    if (preGenRef.current.get(lastMsg.id)) return
    preGenRef.current.set(lastMsg.id, true)

    // Pre-generate first sentence only (fast!)
    const sentences = splitIntoSentences(plainText)
    if (sentences.length === 0) return

    const firstSentenceCacheKey = getSentenceCacheKey(lastMsg.id, 0, selectedVoice)

    if (!audioCache.has(firstSentenceCacheKey)) {
      // Mark as streaming-ready (first sentence will be pre-cached)
      setAudioStates(prev => ({ ...prev, [lastMsg.id]: 'streaming' }))

      fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: sentences[0].slice(0, 500),
          voice: selectedVoice,
          speed: 0.9,
        }),
      })
        .then(response => {
          if (!response.ok) throw new Error('TTS failed')
          return response.blob()
        })
        .then(audioBlob => {
          const audioUrl = URL.createObjectURL(audioBlob)
          audioCache.set(firstSentenceCacheKey, { url: audioUrl, voice: selectedVoice })

          // Also pre-generate second sentence in background
          if (sentences.length > 1) {
            const secondKey = getSentenceCacheKey(lastMsg.id, 1, selectedVoice)
            if (!audioCache.has(secondKey)) {
              fetch('/api/tts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  text: sentences[1].slice(0, 500),
                  voice: selectedVoice,
                  speed: 0.9,
                }),
              })
                .then(r => r.blob())
                .then(blob => {
                  audioCache.set(secondKey, { url: URL.createObjectURL(blob), voice: selectedVoice })
                })
                .catch(() => { /* ignore */ })
            }
          }
        })
        .catch(() => {
          setAudioStates(prev => ({ ...prev, [lastMsg.id]: 'idle' }))
        })
    }

    // Auto-speak: if enabled, start playing immediately
    if (autoSpeak && !sentenceQueueRef.current?.isPlaying) {
      handleSpeak(plainText, lastMsg.id)
    }
  }, [chatMessages.length, isChatLoading, selectedVoice, autoSpeak, handleSpeak])

  // ─── When voice changes, reset pre-generation ────────────────────────
  useEffect(() => {
    preGenRef.current.clear()
  }, [selectedVoice])

  const handleSend = async () => {
    const trimmed = inputValue.trim()
    if (!trimmed || isChatLoading) return

    // Stop any ongoing speech
    handleStopSpeak()

    const userMessage: ChatMsg = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
      timestamp: new Date(),
    }
    addChatMessage(userMessage)
    setInputValue('')
    setChatLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          userId: user?.id ?? 'anonymous',
          history: chatMessages.slice(-10).map(m => ({ role: m.role, content: m.content })),
        }),
      })

      if (!response.ok) throw new Error('API request failed')

      const data = await response.json()

      const assistantMessage: ChatMsg = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.message ?? data.content ?? data.response ?? '',
        timestamp: new Date(),
      }
      addChatMessage(assistantMessage)
    } catch {
      const fallbackMessage: ChatMsg = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content:
          "I'm here to help you learn English! Try asking me about grammar, vocabulary, or pronunciation.",
        timestamp: new Date(),
      }
      addChatMessage(fallbackMessage)
    } finally {
      setChatLoading(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    inputRef.current?.focus()
  }

  const handleMicToggle = () => {
    if (isRecording) {
      if (recognitionRef.current) {
        try { recognitionRef.current.stop() } catch { /* ignore */ }
        recognitionRef.current = null
      }
      setIsRecording(false)
      return
    }

    const recognition = createSpeechRecognition()

    if (!recognition) {
      toast.error('Non supporté', { description: 'La reconnaissance vocale n\'est pas disponible sur ce navigateur. Essayez Chrome ou Edge.' })
      return
    }

    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1
    recognition.continuous = false

    recognition.onstart = () => { setIsRecording(true) }

    recognition.onresult = (event) => {
      const result = event.results[0]
      if (result && result.length > 0) {
        const transcript = result[0].transcript.trim()
        if (transcript) setInputValue(transcript)
      }
      setIsRecording(false)
      recognitionRef.current = null
      inputRef.current?.focus()
    }

    recognition.onerror = (event) => {
      setIsRecording(false)
      recognitionRef.current = null
      if (event.error === 'not-allowed') {
        toast.error('Microphone bloqué', { description: 'Autorisez l\'accès au microphone dans les paramètres du navigateur.' })
      } else if (event.error === 'no-speech') {
        toast.info('Aucune parole détectée', { description: 'Parlez plus fort et réessayez.' })
      } else if (event.error !== 'aborted') {
        toast.error('Erreur vocale', { description: 'Impossible de reconnaître la parole. Réessayez.' })
      }
    }

    recognition.onend = () => {
      setIsRecording(false)
      recognitionRef.current = null
    }

    try {
      recognitionRef.current = recognition
      recognition.start()
    } catch {
      toast.error('Erreur', { description: 'Impossible de démarrer la reconnaissance vocale.' })
      recognitionRef.current = null
    }
  }

  const handleClearChat = () => {
    handleStopSpeak()
    cleanupAudioCache()
    preGenRef.current.clear()
    setAudioStates({})
    if (showClearConfirm) {
      clearChat()
      setShowClearConfirm(false)
    } else {
      setShowClearConfirm(true)
      setTimeout(() => setShowClearConfirm(false), 3000)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <motion.div
        className="flex flex-col flex-1 max-w-2xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ─── Top Bar ─────────────────────────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border/50"
        >
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={goBack}
              className="h-9 w-9 rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('dashboard')}
              className="h-9 w-9 rounded-full text-muted-foreground hover:text-yoel-red"
            >
              <Home className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-base sm:text-lg font-bold flex items-center gap-2">
                Chat IA Anglais
                <Sparkles className="h-4 w-4 text-yoel-gold" />
              </h1>
              <div className="flex items-center gap-1.5">
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                  {level}
                </Badge>
                <span className="text-xs text-muted-foreground">Tuteur virtuel</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <VoiceSelector
              selectedVoice={selectedVoice}
              onVoiceChange={(voiceId) => {
                setSelectedVoice(voiceId)
                if (sentenceQueueRef.current?.isPlaying) handleStopSpeak()
              }}
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setAutoSpeak(prev => !prev)
                if (autoSpeak) handleStopSpeak()
                toast.success(autoSpeak ? 'Lecture auto désactivée' : 'Lecture auto activée', {
                  description: autoSpeak
                    ? 'L\'IA ne lira plus les réponses automatiquement'
                    : 'L\'IA lira chaque réponse à voix haute automatiquement',
                  duration: 2000,
                })
              }}
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] font-medium transition-all cursor-pointer ${
                autoSpeak
                  ? 'bg-yoel-blue/15 text-yoel-blue border border-yoel-blue/30'
                  : 'text-muted-foreground hover:text-yoel-blue hover:bg-yoel-blue/10 border border-transparent'
              }`}
              title={autoSpeak ? 'Désactiver la lecture automatique' : 'Activer la lecture automatique'}
            >
              <Volume2 className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Auto</span>
            </motion.button>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleClearChat}
              className={`h-9 w-9 rounded-full transition-colors ${
                showClearConfirm
                  ? 'text-destructive hover:text-destructive hover:bg-destructive/10'
                  : 'text-muted-foreground'
              }`}
              title={showClearConfirm ? 'Confirmer la suppression' : 'Effacer la conversation'}
            >
              {showClearConfirm ? <AlertCircle className="h-4 w-4" /> : <Trash2 className="h-4 w-4" />}
            </Button>
          </div>
        </motion.div>

        {/* ─── Speaking Banner ──────────────────────────────────────────── */}
        <AnimatePresence>
          {speakingMessageId && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-3 px-4 py-2 bg-yoel-blue/5 border-b border-yoel-blue/10">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-3.5 w-3.5 text-yoel-blue" />
                  <SpeakingWaveform />
                </div>
                <span className="text-xs font-medium text-yoel-blue flex-1">
                  {VOICE_OPTIONS.find(v => v.id === selectedVoice)?.name ?? 'IA'} parle...
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={handleStopSpeak}
                  className="flex items-center gap-1 rounded-full bg-yoel-blue/10 px-2.5 py-1 text-[10px] font-medium text-yoel-blue hover:bg-yoel-blue/20 transition-colors cursor-pointer"
                >
                  <VolumeX className="h-3 w-3" />
                  Arrêter
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Chat Messages Area ───────────────────────────────────────── */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto py-4 space-y-4"
          style={{ maxHeight: speakingMessageId ? 'calc(100vh - 220px)' : 'calc(100vh - 180px)' }}
        >
          <AnimatePresence mode="popLayout">
            {displayMessages.map((msg) => {
              const msgAudioState = msg.role === 'assistant'
                ? (audioStates[msg.id] ?? 'idle')
                : 'idle'

              return (
                <ChatMessage
                  key={msg.id}
                  message={msg}
                  isSpeaking={speakingMessageId === msg.id}
                  audioState={msgAudioState}
                  onSpeak={() => handleSpeak(stripMarkdown(msg.content), msg.id)}
                  onStopSpeak={handleStopSpeak}
                />
              )
            })}
          </AnimatePresence>

          {isChatLoading && <TypingIndicator />}
        </div>

        {/* ─── Quick Suggestions ────────────────────────────────────────── */}
        {chatMessages.length <= 1 && !isChatLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="px-4 pb-3"
          >
            <p className="text-xs text-muted-foreground mb-2 font-medium">
              Suggestions rapides :
            </p>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {QUICK_SUGGESTIONS.map((suggestion) => (
                <motion.button
                  key={suggestion}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-background px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-yoel-blue/30 hover:bg-yoel-blue/5 hover:text-yoel-blue cursor-pointer"
                >
                  <MessageCircle className="h-3 w-3" />
                  {suggestion}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* ─── Recording Indicator ──────────────────────────────────────── */}
        <AnimatePresence>
          {isRecording && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="px-4 pb-2"
            >
              <div className="flex items-center gap-3 rounded-xl bg-yoel-red/5 border border-yoel-red/20 px-4 py-3">
                <div className="relative flex h-4 w-4 items-center justify-center">
                  <motion.div
                    className="absolute h-4 w-4 rounded-full bg-yoel-red/30"
                    animate={{ scale: [1, 1.8, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <div className="h-2.5 w-2.5 rounded-full bg-yoel-red" />
                </div>
                <div className="flex items-center gap-1 flex-1">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 rounded-full bg-yoel-red/60"
                      animate={{
                        height: isRecording
                          ? [4, Math.max(4, recordingLevel * 0.12 + Math.random() * 8), 4]
                          : 4,
                      }}
                      transition={{
                        duration: 0.1,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    />
                  ))}
                </div>
                <span className="text-xs font-medium text-yoel-red">
                  Enregistrement...
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Input Area ───────────────────────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="border-t border-border/50 px-4 py-3"
        >
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleMicToggle}
              className={`h-10 w-10 shrink-0 rounded-full transition-all ${
                isRecording
                  ? 'bg-yoel-red text-white hover:bg-yoel-red-dark'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>

            <div className="flex-1 relative">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Posez votre question en anglais..."
                disabled={isChatLoading}
                className="rounded-full pr-12 h-10 bg-muted/30 border-border/50 focus-visible:ring-yoel-red/30"
              />
            </div>

            <Button
              onClick={handleSend}
              disabled={!inputValue.trim() || isChatLoading}
              size="icon"
              className="h-10 w-10 shrink-0 rounded-full bg-yoel-red hover:bg-yoel-red-dark text-white disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-[10px] text-muted-foreground text-center mt-2">
            Appuyez sur Entrée pour envoyer • 🎤 saisie vocale • 🔊 voix {VOICE_OPTIONS.find(v => v.id === selectedVoice)?.name ?? 'IA'}
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
