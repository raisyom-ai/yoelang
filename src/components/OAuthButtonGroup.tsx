'use client'

import { useState, useEffect, type ReactNode } from 'react'
import { signIn } from 'next-auth/react'
import { Chrome, Apple, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface ProviderStatus {
  google: boolean
  apple: boolean
}

interface OAuthButtonGroupProps {
  /** Whether a parent form is currently submitting (disables buttons) */
  disabled?: boolean
  /** Callback URL after OAuth sign-in — defaults to '/?oauth=1' */
  callbackUrl?: string
  /** Content to show below OAuth buttons with a separator (e.g. email/password form) */
  children?: ReactNode
}

export default function OAuthButtonGroup({
  disabled = false,
  callbackUrl = '/?oauth=1',
  children,
}: OAuthButtonGroupProps) {
  const [providers, setProviders] = useState<ProviderStatus | null>(null)
  const [loadingProvider, setLoadingProvider] = useState<'google' | 'apple' | null>(null)
  const [checkingProviders, setCheckingProviders] = useState(true)

  // Fetch provider availability on mount
  useEffect(() => {
    fetch('/api/auth/providers')
      .then((res) => res.json())
      .then((data: ProviderStatus) => {
        setProviders(data)
      })
      .catch(() => {
        setProviders({ google: false, apple: false })
      })
      .finally(() => {
        setCheckingProviders(false)
      })
  }, [])

  const handleOAuthSignIn = async (provider: 'google' | 'apple') => {
    setLoadingProvider(provider)
    try {
      await signIn(provider, { callbackUrl })
    } catch {
      setLoadingProvider(null)
    }
  }

  // Only show configured providers — hide unconfigured ones entirely
  const hasGoogle = providers?.google === true
  const hasApple = providers?.apple === true
  const hasAnyProvider = hasGoogle || hasApple
  const isLoading = disabled || loadingProvider !== null

  // While checking, show a loading state
  if (checkingProviders) {
    return (
      <div className="space-y-3">
        <Button type="button" variant="outline" className="w-full h-11 text-sm font-medium" disabled>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Chargement...
        </Button>
      </div>
    )
  }

  // If no providers are configured, just show children (email form) without separator
  if (!hasAnyProvider) {
    return <>{children}</>
  }

  return (
    <>
      <div className="space-y-3">
        {/* Google button — only shown if configured */}
        {hasGoogle && (
          <Button
            type="button"
            variant="outline"
            className="w-full h-11 text-sm font-medium hover:border-red-300 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
            disabled={isLoading}
            onClick={() => handleOAuthSignIn('google')}
          >
            {loadingProvider === 'google' ? (
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            ) : (
              <Chrome className="w-5 h-5 mr-2 text-red-500" />
            )}
            Continuer avec Google
          </Button>
        )}

        {/* Apple button — only shown if configured */}
        {hasApple && (
          <Button
            type="button"
            variant="outline"
            className="w-full h-11 text-sm font-medium hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors"
            disabled={isLoading}
            onClick={() => handleOAuthSignIn('apple')}
          >
            {loadingProvider === 'apple' ? (
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            ) : (
              <Apple className="w-5 h-5 mr-2" />
            )}
            Continuer avec Apple
          </Button>
        )}
      </div>

      {/* Separator + children (email form) — only shown when at least one OAuth provider is active */}
      {children && (
        <>
          <div className="my-6">
            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3 text-xs text-muted-foreground uppercase">
                ou avec email
              </span>
            </div>
          </div>
          {children}
        </>
      )}
    </>
  )
}
