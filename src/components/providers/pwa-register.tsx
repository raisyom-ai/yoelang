'use client'

import { useEffect } from 'react'

/**
 * Registers the service worker for PWA functionality.
 * In production, @ducanh2912/next-pwa auto-injects the SW registration.
 * This component handles fallback registration for when that doesn't apply.
 */
export function PWARegister() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!('serviceWorker' in navigator)) return

    // Register the service worker
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then((registration) => {
        console.log('YOELANG SW registered:', registration.scope)

        // Check for updates periodically
        setInterval(() => {
          registration.update().catch(() => {})
        }, 60 * 60 * 1000) // Every hour
      })
      .catch((error) => {
        console.log('YOELANG SW registration failed:', error)
      })
  }, [])

  return null
}
