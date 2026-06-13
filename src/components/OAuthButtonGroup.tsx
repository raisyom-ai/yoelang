'use client'

import { useState, useEffect } from 'react'
import { signIn } from 'next-auth/react'
import { Chrome, Apple, Loader2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

interface ProviderStatus {
  google: boolean
  apple: boolean
}

interface OAuthButtonGroupProps {
  /** Whether a parent form is currently submitting (disables buttons) */
  disabled?: boolean
  /** Callback URL after OAuth sign-in — defaults to '/?oauth=1' */
  callbackUrl?: string
}

export default function OAuthButtonGroup({
  disabled = false,
  callbackUrl = '/?oauth=1',
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
        // On error, assume no providers are configured
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
      // signIn redirects the page, so this catch is only for unexpected errors
      setLoadingProvider(null)
    }
  }

  const isLoading = checkingProviders || disabled
  const anyProviderConfigured = providers?.google || providers?.apple
  const noProviderConfigured = providers && !anyProviderConfigured

  return (
    <div className="space-y-3">
      {/* Google button */}
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="block w-full">
            <Button
              type="button"
              variant="outline"
              className={`w-full h-11 text-sm font-medium transition-colors ${
                providers?.google
                  ? 'hover:border-red-300 hover:bg-red-50 dark:hover:bg-red-950/20'
                  : 'opacity-60 cursor-not-allowed'
              }`}
              disabled={isLoading || !providers?.google || loadingProvider !== null}
              onClick={() => handleOAuthSignIn('google')}
            >
              {loadingProvider === 'google' ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : checkingProviders ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : (
                <Chrome className="w-5 h-5 mr-2 text-red-500" />
              )}
              Continuer avec Google
              {!providers?.google && !checkingProviders && (
                <span className="ml-2 text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full">
                  Non configuré
                </span>
              )}
            </Button>
          </span>
        </TooltipTrigger>
        {providers && !providers.google && (
          <TooltipContent side="bottom" className="max-w-xs">
            <p className="font-medium mb-1">OAuth Google non configuré</p>
            <p className="text-xs text-muted-foreground">
              Ajoutez GOOGLE_CLIENT_ID et GOOGLE_CLIENT_SECRET dans le fichier .env
              pour activer la connexion via Google.
            </p>
          </TooltipContent>
        )}
      </Tooltip>

      {/* Apple button */}
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="block w-full">
            <Button
              type="button"
              variant="outline"
              className={`w-full h-11 text-sm font-medium transition-colors ${
                providers?.apple
                  ? 'hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900/30'
                  : 'opacity-60 cursor-not-allowed'
              }`}
              disabled={isLoading || !providers?.apple || loadingProvider !== null}
              onClick={() => handleOAuthSignIn('apple')}
            >
              {loadingProvider === 'apple' ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : checkingProviders ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : (
                <Apple className="w-5 h-5 mr-2" />
              )}
              Continuer avec Apple
              {!providers?.apple && !checkingProviders && (
                <span className="ml-2 text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full">
                  Non configuré
                </span>
              )}
            </Button>
          </span>
        </TooltipTrigger>
        {providers && !providers.apple && (
          <TooltipContent side="bottom" className="max-w-xs">
            <p className="font-medium mb-1">OAuth Apple non configuré</p>
            <p className="text-xs text-muted-foreground">
              Ajoutez APPLE_ID, APPLE_TEAM_ID, APPLE_KEY_ID et APPLE_PRIVATE_KEY
              dans le fichier .env pour activer la connexion via Apple.
            </p>
          </TooltipContent>
        )}
      </Tooltip>

      {/* Info message when no providers are configured */}
      {noProviderConfigured && (
        <div className="flex items-start gap-2 p-2.5 rounded-lg bg-muted/50 border border-muted">
          <AlertCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            La connexion via Google/Apple nécessite des identifiants OAuth.
            Consultez le fichier <code className="font-mono bg-muted px-1 rounded">.env</code> pour
            les instructions de configuration. En attendant, utilisez votre email et mot de passe.
          </p>
        </div>
      )}
    </div>
  )
}
