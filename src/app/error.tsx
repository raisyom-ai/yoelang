'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="max-w-md text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-destructive/10 flex items-center justify-center">
          <AlertTriangle className="w-10 h-10 text-destructive" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Oups ! Une erreur est survenue</h2>
          <p className="text-muted-foreground">
            Quelque chose s&apos;est mal passé. Veuillez réessayer.
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <Button
            onClick={reset}
            className="bg-gradient-to-r from-yoel-primary to-yoel-primary-dark text-white"
          >
            Réessayer
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.href = '/'}
          >
            Retour à l&apos;accueil
          </Button>
        </div>
      </div>
    </div>
  )
}
