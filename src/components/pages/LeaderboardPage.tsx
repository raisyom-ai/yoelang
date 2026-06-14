'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft, Home, Trophy, Flame, Zap, Crown,
  ChevronDown, Loader2, Medal,
} from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// ─── Types ───────────────────────────────────────────────────────────────────

interface LeaderboardEntry {
  rank: number
  name: string
  avatar: string | null
  level: string
  xp: number
  isPremium: boolean
  streak: number
  userId: string
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
    transition: { type: 'spring' as const, stiffness: 260, damping: 24 },
  },
}

// ─── Constants ───────────────────────────────────────────────────────────────

const LEVELS = ['all', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const
type LevelFilter = (typeof LEVELS)[number]

const LEVEL_LABELS: Record<LevelFilter, string> = {
  all: 'Tous',
  A1: 'A1',
  A2: 'A2',
  B1: 'B1',
  B2: 'B2',
  C1: 'C1',
  C2: 'C2',
}

const LEVEL_COLORS: Record<string, string> = {
  A1: 'bg-emerald-500/15 text-emerald-600',
  A2: 'bg-teal-500/15 text-teal-600',
  B1: 'bg-cyan-500/15 text-cyan-600',
  B2: 'bg-sky-500/15 text-sky-600',
  C1: 'bg-indigo-500/15 text-indigo-600',
  C2: 'bg-violet-500/15 text-violet-600',
}

const PODIUM_STYLES: Record<number, { bg: string; border: string; medal: string; ring: string; glow: string }> = {
  1: {
    bg: 'bg-gradient-to-br from-amber-400/20 via-yellow-300/15 to-amber-500/10',
    border: 'border-amber-400/30',
    medal: '🥇',
    ring: 'ring-2 ring-amber-400/40',
    glow: 'shadow-amber-400/20 shadow-lg',
  },
  2: {
    bg: 'bg-gradient-to-br from-slate-300/20 via-gray-200/15 to-slate-400/10',
    border: 'border-slate-300/30',
    medal: '🥈',
    ring: 'ring-2 ring-slate-300/40',
    glow: 'shadow-slate-300/20 shadow-lg',
  },
  3: {
    bg: 'bg-gradient-to-br from-orange-400/20 via-amber-600/15 to-orange-500/10',
    border: 'border-orange-400/30',
    medal: '🥉',
    ring: 'ring-2 ring-orange-400/40',
    glow: 'shadow-orange-400/20 shadow-lg',
  },
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function LeaderboardPage() {
  const { user, goBack, navigate } = useAppStore()
  const userId = user?.id ?? null

  const [period, setPeriod] = useState<'weekly' | 'alltime'>('alltime')
  const [levelFilter, setLevelFilter] = useState<LevelFilter>('all')
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [userEntry, setUserEntry] = useState<LeaderboardEntry | null>(null)
  const [loading, setLoading] = useState(true)

  // ─── Fetch leaderboard ──────────────────────────────────────────────────
  const fetchLeaderboard = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        period,
        level: levelFilter,
      })
      if (userId) params.set('userId', userId)

      const res = await fetch(`/api/leaderboard?${params.toString()}`)
      if (!res.ok) throw new Error('Failed to fetch leaderboard')
      const data = await res.json()
      if (data.success) {
        setLeaderboard(data.leaderboard)
        setUserEntry(data.userEntry ?? null)
      }
    } catch (err) {
      console.error('Leaderboard fetch error:', err)
    } finally {
      setLoading(false)
    }
  }, [period, levelFilter, userId])

  useEffect(() => {
    fetchLeaderboard()
  }, [fetchLeaderboard])

  // ─── Determine if user is in top 50 ────────────────────────────────────
  const userInTop = leaderboard.some((e) => e.userId === userId)
  const currentUserEntry = userInTop
    ? leaderboard.find((e) => e.userId === userId)!
    : userEntry

  // ─── Podium entries (top 3) ─────────────────────────────────────────────
  const podiumEntries = leaderboard.slice(0, 3)
  const restEntries = leaderboard.slice(3)

  // ─── Initials helper ────────────────────────────────────────────────────
  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)

  // ─── Loading state ──────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 text-yoel-primary animate-spin" />
          <p className="text-sm text-muted-foreground">Chargement du classement…</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* ─── Sticky Top Bar ──────────────────────────────────────────── */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/40">
        <div className="mx-auto max-w-4xl flex items-center gap-2 px-4 py-3 lg:px-6">
          <Button
            variant="outline"
            size="sm"
            onClick={goBack}
            className="shrink-0 rounded-full gap-1.5 border-yoel-primary/20 hover:bg-yoel-primary/5 hover:border-yoel-primary/40 transition-all"
          >
            <ArrowLeft className="h-4 w-4 text-yoel-primary" />
            <span className="text-xs font-medium text-yoel-primary">Retour</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('dashboard')}
            className="shrink-0 text-muted-foreground hover:text-yoel-primary h-8 w-8"
          >
            <Home className="h-4 w-4" />
          </Button>
          <h1 className="text-xl font-bold gradient-text-primary ml-1 flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Classement
          </h1>
        </div>
      </div>

      <motion.div
        className="flex-1 mx-auto max-w-4xl w-full space-y-5 p-4 lg:p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ─── Period Tabs ────────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2">
            <div className="flex rounded-xl bg-muted/50 p-1">
              <button
                onClick={() => setPeriod('weekly')}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  period === 'weekly'
                    ? 'bg-yoel-primary text-white shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Cette semaine
              </button>
              <button
                onClick={() => setPeriod('alltime')}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  period === 'alltime'
                    ? 'bg-yoel-primary text-white shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Tous les temps
              </button>
            </div>

            {/* Level filter dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full gap-1.5 border-yoel-primary/20 hover:bg-yoel-primary/5 ml-auto"
                >
                  <Medal className="h-3.5 w-3.5 text-yoel-primary" />
                  <span className="text-xs font-medium">
                    {LEVEL_LABELS[levelFilter]}
                  </span>
                  <ChevronDown className="h-3 w-3 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-xl">
                {LEVELS.map((lvl) => (
                  <DropdownMenuItem
                    key={lvl}
                    onClick={() => setLevelFilter(lvl)}
                    className={`gap-2 ${levelFilter === lvl ? 'bg-yoel-primary/5 font-semibold' : ''}`}
                  >
                    {LEVEL_LABELS[lvl]}
                    {levelFilter === lvl && (
                      <span className="ml-auto text-yoel-primary">✓</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </motion.div>

        {/* ─── Podium (Top 3) ─────────────────────────────────────────── */}
        {podiumEntries.length > 0 && (
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-3 gap-3">
              {/* Reorder: 2nd, 1st, 3rd for visual podium layout */}
              {[podiumEntries[1], podiumEntries[0], podiumEntries[2]]
                .filter(Boolean)
                .map((entry) => {
                  const style = PODIUM_STYLES[entry.rank]
                  const isFirst = entry.rank === 1

                  return (
                    <motion.div
                      key={entry.userId}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: (entry.rank - 1) * 0.15,
                        type: 'spring',
                        stiffness: 200,
                        damping: 20,
                      }}
                      className={`relative rounded-2xl ${style.bg} border ${style.border} ${style.glow} p-4 flex flex-col items-center text-center ${
                        isFirst ? 'pt-6 -mt-3' : 'pt-4'
                      } ${entry.userId === userId ? 'ring-2 ring-yoel-primary/40' : ''}`}
                    >
                      {/* Medal badge */}
                      <span className={`absolute -top-2 text-2xl ${isFirst ? 'text-3xl' : ''}`}>
                        {style.medal}
                      </span>

                      {/* Avatar */}
                      <Avatar className={`${isFirst ? 'h-16 w-16' : 'h-12 w-12'} ${style.ring} mb-2`}>
                        <AvatarImage src={entry.avatar ?? undefined} alt={entry.name} />
                        <AvatarFallback className="bg-background/80 text-foreground font-bold text-sm">
                          {getInitials(entry.name)}
                        </AvatarFallback>
                      </Avatar>

                      {/* Name */}
                      <p className={`font-semibold truncate w-full ${isFirst ? 'text-sm' : 'text-xs'}`}>
                        {entry.name}
                      </p>

                      {/* Level badge */}
                      <Badge
                        className={`text-[9px] px-1.5 py-0 border-0 mt-1 ${LEVEL_COLORS[entry.level] ?? 'bg-muted/50 text-muted-foreground'}`}
                      >
                        {entry.level}
                      </Badge>

                      {/* XP */}
                      <div className="flex items-center gap-1 mt-2">
                        <Zap className="h-3 w-3 text-yoel-primary" />
                        <span className={`font-bold gradient-text-primary ${isFirst ? 'text-base' : 'text-xs'}`}>
                          {entry.xp.toLocaleString()}
                        </span>
                      </div>

                      {/* Streak */}
                      {entry.streak > 0 && (
                        <div className="flex items-center gap-0.5 mt-1">
                          <Flame className="h-3 w-3 text-orange-500" />
                          <span className="text-[10px] font-medium text-orange-500">{entry.streak}</span>
                        </div>
                      )}

                      {/* Premium crown */}
                      {entry.isPremium && (
                        <Crown className="absolute top-2 right-2 h-3.5 w-3.5 text-yoel-gold" />
                      )}
                    </motion.div>
                  )
                })}
            </div>
          </motion.div>
        )}

        {/* ─── Rest of Leaderboard ────────────────────────────────────── */}
        {restEntries.length > 0 && (
          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardContent className="p-2">
                <div className="max-h-96 overflow-y-auto space-y-1 pr-1 scrollbar-thin">
                  {restEntries.map((entry) => {
                    const isCurrentUser = entry.userId === userId

                    return (
                      <motion.div
                        key={entry.userId}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: Math.min(0.05 * (entry.rank - 4), 0.4) }}
                        className={`flex items-center gap-3 rounded-xl p-3 transition-colors ${
                          isCurrentUser
                            ? 'bg-yoel-primary/10 ring-1 ring-yoel-primary/20'
                            : 'hover:bg-muted/30'
                        }`}
                      >
                        {/* Rank */}
                        <span className="w-7 text-center text-sm font-bold text-muted-foreground shrink-0">
                          {entry.rank}
                        </span>

                        {/* Avatar */}
                        <Avatar className="h-9 w-9 shrink-0">
                          <AvatarImage src={entry.avatar ?? undefined} alt={entry.name} />
                          <AvatarFallback className="bg-yoel-primary/10 text-yoel-primary font-bold text-xs">
                            {getInitials(entry.name)}
                          </AvatarFallback>
                        </Avatar>

                        {/* Name & Level */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <p className="text-sm font-medium truncate">{entry.name}</p>
                            {entry.isPremium && (
                              <Crown className="h-3 w-3 text-yoel-gold shrink-0" />
                            )}
                          </div>
                          <Badge
                            className={`text-[9px] px-1.5 py-0 border-0 mt-0.5 ${LEVEL_COLORS[entry.level] ?? 'bg-muted/50 text-muted-foreground'}`}
                          >
                            {entry.level}
                          </Badge>
                        </div>

                        {/* Streak */}
                        {entry.streak > 0 && (
                          <div className="flex items-center gap-0.5 shrink-0">
                            <Flame className="h-3.5 w-3.5 text-orange-500" />
                            <span className="text-xs font-medium text-orange-500">{entry.streak}</span>
                          </div>
                        )}

                        {/* XP */}
                        <div className="flex items-center gap-1 shrink-0">
                          <Zap className="h-3.5 w-3.5 text-yoel-primary" />
                          <span className="text-sm font-bold gradient-text-primary">
                            {entry.xp.toLocaleString()}
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* ─── Empty State ────────────────────────────────────────────── */}
        {leaderboard.length === 0 && (
          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardContent className="flex flex-col items-center py-16">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yoel-gold/10 mb-4">
                  <Trophy className="h-8 w-8 text-yoel-gold" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Aucun classement</h3>
                <p className="text-sm text-muted-foreground text-center max-w-xs">
                  {period === 'weekly'
                    ? 'Aucun apprenant n’a gagné de XP cette semaine. Soyez le premier !'
                    : 'Commencez à apprendre pour apparaître dans le classement !'}
                </p>
                <Button
                  className="mt-4 rounded-full bg-yoel-primary hover:bg-yoel-primary/90 gap-2"
                  onClick={() => navigate('dashboard')}
                >
                  <Zap className="h-4 w-4" />
                  Commencer une leçon
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* ─── Spacer for bottom card ──────────────────────────────────── */}
        {currentUserEntry && <div className="h-20" />}
      </motion.div>

      {/* ─── Your Position — Sticky Bottom Card ────────────────────────── */}
      {currentUserEntry && (
        <div className="sticky bottom-0 z-30 border-t border-border/40 bg-background/90 backdrop-blur-lg px-4 py-3">
          <div className="mx-auto max-w-4xl">
            <Card className="border-yoel-primary/20 bg-yoel-primary/5 overflow-hidden">
              <CardContent className="flex items-center gap-3 p-3">
                {/* Rank */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yoel-primary/15">
                  <span className="text-sm font-bold gradient-text-primary">#{currentUserEntry.rank}</span>
                </div>

                {/* Avatar */}
                <Avatar className="h-9 w-9 shrink-0 ring-2 ring-yoel-primary/30">
                  <AvatarImage src={currentUserEntry.avatar ?? undefined} alt={currentUserEntry.name} />
                  <AvatarFallback className="bg-yoel-primary/10 text-yoel-primary font-bold text-xs">
                    {getInitials(currentUserEntry.name)}
                  </AvatarFallback>
                </Avatar>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-semibold truncate">Votre position</p>
                    {currentUserEntry.isPremium && (
                      <Crown className="h-3 w-3 text-yoel-gold shrink-0" />
                    )}
                  </div>
                  <Badge
                    className={`text-[9px] px-1.5 py-0 border-0 ${LEVEL_COLORS[currentUserEntry.level] ?? 'bg-muted/50 text-muted-foreground'}`}
                  >
                    {currentUserEntry.level}
                  </Badge>
                </div>

                {/* Streak */}
                {currentUserEntry.streak > 0 && (
                  <div className="flex items-center gap-0.5 shrink-0">
                    <Flame className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-bold text-orange-500">{currentUserEntry.streak}</span>
                  </div>
                )}

                {/* XP */}
                <div className="flex items-center gap-1 shrink-0">
                  <Zap className="h-4 w-4 text-yoel-primary" />
                  <span className="text-base font-bold gradient-text-primary">
                    {currentUserEntry.xp.toLocaleString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
