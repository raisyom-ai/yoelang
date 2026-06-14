'use client'

import { useEffect } from 'react'

/**
 * Registers the service worker for PWA functionality.
 * Only runs in production (not during development).
 */
export function PWARegister() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('YOELANG SW registered:', registration.scope)
        })
        .catch((error) => {
          console.log('YOELANG SW registration failed:', error)
        })
    }
  }, [])

  return null
}
