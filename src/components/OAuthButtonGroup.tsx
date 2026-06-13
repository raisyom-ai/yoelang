'use client'

import { useState, useEffect, type ReactNode } from 'react'
import { signIn } from 'next-auth/react'
import { Chrome, Apple, Loader2, AlertCircle, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'

interface ProviderStatus {
  google: boolean
  apple: boolean
}

interface DetectUrlResponse {
  detectedUrl: string
  oauthRedirectUris: {
    google: string
    apple: string
  }
}

interface OAuthButtonGroupProps {
  /** Whether a parent form is currently submitting (disables buttons) */
  disabled?: boolean
  /** Callback URL after OAuth sign-in — defaults to '/?oauth=1' */
  callbackUrl?: string
  /** Content to show below OAuth buttons with a separator (e.g. email/password form) */
  children?: ReactNode
}

// Check for OAuth error in URL params at module level (synchronous, before render)
function checkOAuthError(): boolean {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  const error = params.get('error')
  return error === 'OAuthAccountNotLinked' || error === 'Callback' || error === 'OAuthSignin' || error === 'RedirectUriMismatch'
}

export default function OAuthButtonGroup({
  disabled = false,
  callbackUrl = '/?oauth=1',
  children,
}: OAuthButtonGroupProps) {
  const [providers, setProviders] = useState<ProviderStatus | null>(null)
  const [loadingProvider, setLoadingProvider] = useState<'google' | 'apple' | null>(null)
  const [checkingProviders, setCheckingProviders] = useState(true)
  const [detectInfo, setDetectInfo] = useState<DetectUrlResponse | null>(null)
  const [showSetupHint, setShowSetupHint] = useState(checkOAuthError)
  const [copied, setCopied] = useState(false)

  // Fetch provider availability and detected URL on mount
  useEffect(() => {
    Promise.all([
      fetch('/api/auth/providers').then((res) => res.json()),
      fetch('/api/auth/detect-url').then((res) => res.json()),
    ])
      .then(([providerData, urlData]) => {
        setProviders(providerData as ProviderStatus)
        setDetectInfo(urlData as DetectUrlResponse)
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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      toast.success('Copié !', { description: 'URI de redirection copiée dans le presse-papier' })
      setTimeout(() => setCopied(false), 2000)
    })
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

        {/* Setup hint when OAuth fails (redirect_uri_mismatch) */}
        {showSetupHint && detectInfo && (
          <div className="rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 p-3 space-y-2">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div className="space-y-1.5">
                <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
                  Connexion OAuth échouée
                </p>
                <p className="text-xs text-amber-700 dark:text-amber-400">
                  L&apos;URI de redirection n&apos;est pas configurée dans Google Cloud Console. Ajoutez l&apos;URI suivante :
                </p>
                {hasGoogle && detectInfo.oauthRedirectUris.google && (
                  <div className="flex items-center gap-1.5 bg-white/60 dark:bg-black/20 rounded px-2 py-1.5">
                    <code className="text-xs text-amber-900 dark:text-amber-200 break-all flex-1">
                      {detectInfo.oauthRedirectUris.google}
                    </code>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(detectInfo.oauthRedirectUris.google)}
                      className="shrink-0 p-1 hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded transition-colors"
                      title="Copier"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-amber-600" />
                      )}
                    </button>
                  </div>
                )}
                <p className="text-xs text-amber-600 dark:text-amber-500">
                  Google Cloud Console → APIs &amp; Services → Credentials → OAuth 2.0 Client → URIs de redirection autorisées
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-xs text-amber-700 dark:text-amber-400 h-auto p-1"
              onClick={() => setShowSetupHint(false)}
            >
              Fermer
            </Button>
          </div>
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
