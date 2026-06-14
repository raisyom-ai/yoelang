'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppStore } from '@/lib/store'

function Sparkle({ style, delay }: { style: React.CSSProperties; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-white/60"
      style={style}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0.5],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      }}
    />
  )
}

function Particle({ index }: { index: number }) {
  const size = Math.random() * 4 + 2
  const left = Math.random() * 100
  const top = Math.random() * 100
  const duration = Math.random() * 3 + 2
  const delay = Math.random() * 2

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        top: `${top}%`,
        background: index % 3 === 0
          ? 'rgba(255, 255, 255, 0.3)'
          : index % 3 === 1
            ? 'rgba(255, 200, 200, 0.25)'
            : 'rgba(200, 200, 255, 0.25)',
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      }}
    />
  )
}

const sparkles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  style: {
    width: Math.random() * 6 + 3,
    height: Math.random() * 6 + 3,
    left: `${Math.random() * 90 + 5}%`,
    top: `${Math.random() * 90 + 5}%`,
  } as React.CSSProperties,
  delay: Math.random() * 2,
}))

const particles = Array.from({ length: 20 }, (_, i) => i)

export default function SplashScreen() {
  const { setSplashComplete, navigate } = useAppStore()
  const [progress, setProgress] = useState(0)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const showTimer = setTimeout(() => setShowContent(true), 100)
    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    const duration = 3000
    const interval = 30
    const steps = duration / interval
    let current = 0

    const timer = setInterval(() => {
      current++
      const eased = 1 - Math.pow(1 - current / steps, 3)
      setProgress(Math.min(eased * 100, 100))

      if (current >= steps) {
        clearInterval(timer)
        setTimeout(() => {
          setSplashComplete(true)
          navigate('home')
        }, 300)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [setSplashComplete, navigate])

  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-yoel-primary via-yoel-primary-dark to-yoel-blue-dark">
        {/* Particle effects */}
        {particles.map((i) => (
          <Particle key={i} index={i} />
        ))}

        {/* Sparkle effects */}
        {sparkles.map((s) => (
          <Sparkle key={s.id} style={s.style} delay={s.delay} />
        ))}

        {/* Radial glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        </div>

        {/* Main content */}
        {showContent && (
          <motion.div
            className="relative z-10 flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
          >
            {/* Logo with float animation */}
            <motion.div
              className="animate-float"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.img
                src="/yoelang-logo.png"
                alt="YOELANG Logo"
                className="h-28 w-28 drop-shadow-2xl sm:h-36 sm:w-36"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring' as const,
                  stiffness: 200,
                  damping: 15,
                  delay: 0.3,
                }}
              />
            </motion.div>

            {/* App name */}
            <motion.h1
              className="text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                textShadow: '0 0 40px rgba(255,255,255,0.3), 0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              YOELANG
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-center text-base font-medium tracking-widest text-white/80 sm:text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              YOEL ANGLAIS — Learn English Premium
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="mt-6 w-56 sm:w-72"
              initial={{ opacity: 0, scaleX: 0.5 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-white via-yoel-gold to-white"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <p className="mt-2 text-center text-xs text-white/50">
                {Math.round(progress)}%
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Version */}
        <motion.div
          className="absolute bottom-8 text-xs font-medium tracking-wider text-white/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          v2.0
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
