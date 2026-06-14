'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User, Settings, LogOut, ChevronDown, Crown,
  Camera, Moon, Sun, Shield
} from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

// ─── Main Component ─────────────────────────────────────────────────────────

export default function UserSessionWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const { user, isDarkMode, toggleDarkMode, navigate, logout } = useAppStore()

  const displayName = user?.name ?? 'Apprenant'
  const email = user?.email ?? ''
  const isPremium = user?.isPremium ?? false

  const initials = displayName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    setIsOpen(false)
    logout()
    navigate('home')
  }

  const handleNavigate = (page: 'profile' | 'settings') => {
    setIsOpen(false)
    navigate(page)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* ─── Trigger Button ─────────────────────────────────────────── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full transition-all hover:bg-muted/50 p-1 pr-2"
      >
        <Avatar className="h-8 w-8 ring-2 ring-yoel-primary/30 transition-all hover:ring-yoel-primary/60">
          <AvatarImage src={user?.avatar ?? undefined} alt={displayName} />
          <AvatarFallback className="bg-yoel-primary/10 text-yoel-primary font-semibold text-xs">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="hidden sm:block text-left min-w-0 max-w-[100px]">
          <p className="text-xs font-semibold truncate gradient-text-primary">{displayName}</p>
        </div>
        <ChevronDown className={`h-3 w-3 text-muted-foreground transition-transform hidden sm:block ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* ─── Dropdown Menu ──────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-xl z-50 overflow-hidden"
          >
            {/* ─── User Info Header ──────────────────────────────────── */}
            <div className="p-4 bg-gradient-to-r from-yoel-primary/5 via-yoel-gold/5 to-yoel-blue/5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-12 w-12 ring-2 ring-yoel-primary/30">
                    <AvatarImage src={user?.avatar ?? undefined} alt={displayName} />
                    <AvatarFallback className="bg-yoel-primary/10 text-yoel-primary font-bold text-lg">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  {isPremium && (
                    <div className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-yoel-gold to-amber-500 ring-2 ring-background">
                      <Crown className="h-2.5 w-2.5 text-white" />
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="font-semibold truncate text-sm">{displayName}</p>
                    {isPremium && (
                      <Badge className="bg-yoel-gold/15 text-yoel-gold border-0 text-[9px] px-1.5 py-0 shrink-0">
                        Premium
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{email}</p>
                  {user?.level && (
                    <p className="text-[10px] text-muted-foreground/70 mt-0.5">Niveau {user.level}</p>
                  )}
                </div>
              </div>
            </div>

            <Separator />

            {/* ─── Menu Items ────────────────────────────────────────── */}
            <div className="p-2">
              {/* Profile */}
              <button
                onClick={() => handleNavigate('profile')}
                className="flex items-center gap-3 w-full rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-muted/50 group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yoel-primary/10 group-hover:bg-yoel-primary/15 transition-colors">
                  <User className="h-4 w-4 text-yoel-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-sm">Mon profil</p>
                  <p className="text-[11px] text-muted-foreground">Voir votre profil et badges</p>
                </div>
              </button>

              {/* Settings */}
              <button
                onClick={() => handleNavigate('settings')}
                className="flex items-center gap-3 w-full rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-muted/50 group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yoel-blue/10 group-hover:bg-yoel-blue/15 transition-colors">
                  <Settings className="h-4 w-4 text-yoel-blue" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-sm">Paramètres</p>
                  <p className="text-[11px] text-muted-foreground">Mot de passe, photo, apparence</p>
                </div>
              </button>

              {/* Dark mode toggle */}
              <button
                onClick={() => { toggleDarkMode() }}
                className="flex items-center gap-3 w-full rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-muted/50 group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 group-hover:bg-purple-500/15 transition-colors">
                  {isDarkMode ? (
                    <Sun className="h-4 w-4 text-yoel-gold" />
                  ) : (
                    <Moon className="h-4 w-4 text-purple-500" />
                  )}
                </div>
                <div className="text-left flex-1">
                  <p className="font-medium text-sm">
                    {isDarkMode ? 'Mode clair' : 'Mode sombre'}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {isDarkMode ? 'Basculer vers le thème clair' : 'Basculer vers le thème sombre'}
                  </p>
                </div>
              </button>
            </div>

            <Separator />

            {/* ─── Logout ────────────────────────────────────────────── */}
            <div className="p-2">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-destructive/5 group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10 group-hover:bg-destructive/15 transition-colors">
                  <LogOut className="h-4 w-4 text-destructive" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-destructive">Se déconnecter</p>
                  <p className="text-[11px] text-muted-foreground">Quitter votre session</p>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
