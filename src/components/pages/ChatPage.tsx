'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Home, Send, Mic, MicOff, Bot, User as UserIcon,
  Trash2, Sparkles, Clock, AlertCircle, RotateCcw,
  MessageCircle, Zap
} from 'lucide-react'
import { useAppStore, type ChatMsg } from '@/lib/store'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'

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
  // Process bold and italic
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

// ─── Chat Message Component ─────────────────────────────────────────────────

function ChatMessage({ message }: { message: ChatMsg }) {
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
        <p
          className={`text-[10px] text-muted-foreground px-1 ${
            isUser ? 'text-right' : 'text-left'
          }`}
        >
          {time.toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
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
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

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

  const handleSend = async () => {
    const trimmed = inputValue.trim()
    if (!trimmed || isChatLoading) return

    // Add user message
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
      // Fallback response on error
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
    // Auto focus input
    inputRef.current?.focus()
  }

  const handleMicToggle = () => {
    if (isRecording) {
      setIsRecording(false)
      return
    }

    // Utiliser la vraie Web Speech API
    const SpeechRecognition = (window as unknown as { SpeechRecognition?: typeof window.SpeechRecognition; webkitSpeechRecognition?: typeof window.SpeechRecognition }).SpeechRecognition || (window as unknown as { webkitSpeechRecognition?: typeof window.SpeechRecognition }).webkitSpeechRecognition

    if (!SpeechRecognition) {
      toast.error('Non supporté', { description: 'La reconnaissance vocale n\'est pas disponible sur ce navigateur.' })
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1
    recognition.continuous = false

    recognition.onstart = () => {
      setIsRecording(true)
    }

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript
      setInputValue(transcript)
      setIsRecording(false)
      inputRef.current?.focus()
    }

    recognition.onerror = () => {
      setIsRecording(false)
      toast.error('Erreur vocale', { description: 'Impossible de reconnaître la parole. Réessayez.' })
    }

    recognition.onend = () => {
      setIsRecording(false)
    }

    recognition.start()
  }

  const handleClearChat = () => {
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
          <div className="flex items-center gap-3">
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
              <h1 className="text-lg font-bold flex items-center gap-2">
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
        </motion.div>

        {/* ─── Chat Messages Area ───────────────────────────────────────── */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto py-4 space-y-4"
          style={{ maxHeight: 'calc(100vh - 180px)' }}
        >
          <AnimatePresence mode="popLayout">
            {displayMessages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
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
            {/* Microphone button */}
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

            {/* Text input */}
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

            {/* Send button */}
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
            Appuyez sur Entrée pour envoyer • 🎤 pour la saisie vocale
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
