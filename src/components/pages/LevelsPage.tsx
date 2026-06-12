'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Home, Map, Zap, BookOpen, Lock,
  CheckCircle2, ChevronRight, Trophy, Star, Filter
} from 'lucide-react'
import { useAppStore, LEVELS, type LevelInfo } from '@/lib/store'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// ─── Animation Variants ─────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 24 },
  },
}

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      delay: 0.1 + i * 0.15,
    },
  }),
}

const connectorVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: (i: number) => ({
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.2 + i * 0.15, ease: 'easeOut' },
  }),
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function isLevelLocked(level: LevelInfo, index: number): boolean {
  // All levels are unlocked - users can access any level
  return false
}

function getLevelStatus(level: LevelInfo, index: number): 'completed' | 'active' | 'locked' | 'available' {
  if (level.progress >= 100) return 'completed'
  if (isLevelLocked(level, index)) return 'locked'
  if (level.progress > 0 || index === 0) return 'active'
  return 'available'
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function LevelsPage() {
  const { navigate, goBack, user, currentLevel, setCurrentLevel } = useAppStore()
  const [filterLevel, setFilterLevel] = useState<string>('all')

  // Derived data
  const xp = user?.xp ?? 1250
  const level = user?.level ?? currentLevel
  const totalCompletedUnits = LEVELS.reduce((acc, l) => acc + l.completedUnits, 0)
  const totalUnits = LEVELS.reduce((acc, l) => acc + l.units, 0)

  // Filtered levels
  const filteredLevels = useMemo(() => {
    if (filterLevel === 'all') return LEVELS
    if (filterLevel === 'unlocked') return LEVELS.filter((_, i) => !isLevelLocked(_, i))
    if (filterLevel === 'in-progress') return LEVELS.filter((l) => l.progress > 0 && l.progress < 100)
    if (filterLevel === 'completed') return LEVELS.filter((l) => l.progress >= 100)
    return LEVELS
  }, [filterLevel])

  const handleLevelClick = (lvl: LevelInfo, index: number) => {
    const status = getLevelStatus(lvl, index)
    if (status === 'locked') return
    setCurrentLevel(lvl.code)
    navigate('course')
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollArea className="h-screen">
        <motion.div
          className="mx-auto max-w-5xl w-full space-y-4 sm:space-y-6 p-3 sm:p-4 lg:p-6 pb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ─── Top Bar ─────────────────────────────────────────────── */}
          <motion.div variants={itemVariants} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-xl shrink-0"
                onClick={goBack}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-xl text-muted-foreground hover:text-yoel-primary shrink-0"
                onClick={() => navigate('dashboard')}
              >
                <Home className="h-4 w-4" />
              </Button>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-bold gradient-text-primary truncate">
                  Parcours d&apos;apprentissage
                </h1>
                <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                  Votre chemin vers la maîtrise de l&apos;anglais
                </p>
              </div>
            </div>
            <Select value={filterLevel} onValueChange={setFilterLevel}>
              <SelectTrigger className="w-[110px] sm:w-[140px] h-9 text-xs rounded-xl shrink-0">
                <Filter className="h-3.5 w-3.5 mr-1" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="unlocked">Débloqués</SelectItem>
                <SelectItem value="in-progress">En cours</SelectItem>
                <SelectItem value="completed">Terminés</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          {/* ─── Summary Stats ────────────────────────────────────────── */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <Card className="glass-card overflow-hidden">
                <CardContent className="flex flex-col items-center justify-center p-2 sm:p-4">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-yoel-gold/15 mb-1 sm:mb-2">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-gold" />
                  </div>
                  <span className="text-base sm:text-xl font-bold gradient-text-primary">{xp.toLocaleString()}</span>
                  <span className="text-[9px] sm:text-[10px] text-muted-foreground font-medium">Total XP</span>
                </CardContent>
              </Card>
              <Card className="glass-card overflow-hidden">
                <CardContent className="flex flex-col items-center justify-center p-2 sm:p-4">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-yoel-blue/15 mb-1 sm:mb-2">
                    <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-blue" />
                  </div>
                  <span className="text-base sm:text-xl font-bold gradient-text-blue">{level}</span>
                  <span className="text-[9px] sm:text-[10px] text-muted-foreground font-medium">Niveau actuel</span>
                </CardContent>
              </Card>
              <Card className="glass-card overflow-hidden">
                <CardContent className="flex flex-col items-center justify-center p-2 sm:p-4">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-yoel-green/15 mb-1 sm:mb-2">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-green" />
                  </div>
                  <span className="text-base sm:text-xl font-bold text-yoel-green">{totalCompletedUnits}/{totalUnits}</span>
                  <span className="text-[9px] sm:text-[10px] text-muted-foreground font-medium">Unités</span>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* ─── Level Roadmap ────────────────────────────────────────── */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-2 sm:mb-4">
              <Map className="h-5 w-5 text-yoel-primary" />
              <h2 className="text-base sm:text-lg font-semibold">Carte des niveaux</h2>
            </div>
          </motion.div>

          {/* Desktop: Horizontal winding path / Mobile: Vertical path */}
          <div className="relative">
            {/* Mobile: Vertical path */}
            <div className="flex flex-col items-center lg:hidden space-y-0 w-full">
              {filteredLevels.map((lvl, index) => {
                const originalIndex = LEVELS.indexOf(lvl)
                const status = getLevelStatus(lvl, originalIndex)
                const isActive = lvl.code === level

                return (
                  <div key={lvl.code} className="relative w-full flex flex-col items-center">
                    {/* Connector line (except first) */}
                    {index > 0 && (
                      <motion.div
                        custom={index}
                        variants={connectorVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-1 h-8 rounded-full bg-gradient-to-b from-muted-foreground/20 to-muted-foreground/10 origin-top"
                      />
                    )}
                    {/* Level Node */}
                    <motion.div
                      custom={index}
                      variants={nodeVariants}
                      initial="hidden"
                      animate="visible"
                      className="w-full"
                    >
                      <LevelCard
                        level={lvl}
                        status={status}
                        isActive={isActive}
                        onClick={() => handleLevelClick(lvl, originalIndex)}
                        isMobile
                      />
                    </motion.div>
                  </div>
                )
              })}
            </div>

            {/* Desktop: Winding horizontal path */}
            <div className="hidden lg:block">
              <div className="relative">
                {(() => {
                  // Split into rows of 3 for winding layout
                  const rows: LevelInfo[][] = []
                  for (let i = 0; i < filteredLevels.length; i += 3) {
                    rows.push(filteredLevels.slice(i, i + 3))
                  }

                  return rows.map((row, rowIdx) => {
                    const isReversed = rowIdx % 2 === 1
                    const displayRow = isReversed ? [...row].reverse() : row

                    return (
                      <div key={rowIdx} className="relative">
                        {/* Curved connector between rows */}
                        {rowIdx > 0 && (
                          <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ delay: rowIdx * 0.3, duration: 0.5 }}
                            className="flex justify-center py-2"
                          >
                            <div className="w-3/4 h-8 border-l-2 border-r-2 border-b-2 border-muted-foreground/15 rounded-b-3xl" />
                          </motion.div>
                        )}

                        <div className="grid grid-cols-3 gap-6">
                          {displayRow.map((lvl, colIdx) => {
                            const originalIndex = LEVELS.indexOf(lvl)
                            const status = getLevelStatus(lvl, originalIndex)
                            const isActive = lvl.code === level
                            const globalIdx = rowIdx * 3 + colIdx

                            return (
                              <motion.div
                                key={lvl.code}
                                custom={globalIdx}
                                variants={nodeVariants}
                                initial="hidden"
                                animate="visible"
                                className="relative"
                              >
                                {/* Horizontal connector */}
                                {colIdx < row.length - 1 && (
                                  <div className="absolute top-1/2 -right-3 w-6 h-0.5 bg-muted-foreground/15 z-0" />
                                )}
                                <LevelCard
                                  level={lvl}
                                  status={status}
                                  isActive={isActive}
                                  onClick={() => handleLevelClick(lvl, originalIndex)}
                                />
                              </motion.div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })
                })()}
              </div>
            </div>
          </div>

          {/* ─── Level Detail Section ──────────────────────────────────── */}
          <motion.div variants={itemVariants}>
            <Separator className="my-2 sm:my-4" />
            <div className="flex items-center gap-2 mb-2 sm:mb-4">
              <Star className="h-5 w-5 text-yoel-gold" />
              <h2 className="text-base sm:text-lg font-semibold">Détails des niveaux</h2>
            </div>
            <div className="space-y-3">
              {filteredLevels.map((lvl, index) => {
                const originalIndex = LEVELS.indexOf(lvl)
                const status = getLevelStatus(lvl, originalIndex)
                const isActive = lvl.code === level

                return (
                  <motion.div
                    key={lvl.code}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                  >
                    <Card
                      className={`overflow-hidden border-0 cursor-pointer transition-all hover:shadow-lg ${
                        status === 'locked'
                          ? 'opacity-60 cursor-not-allowed'
                          : 'glass-card'
                      } ${isActive ? 'ring-2 ring-yoel-primary/40' : ''}`}
                      onClick={() => handleLevelClick(lvl, originalIndex)}
                    >
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 sm:gap-4">
                          {/* Icon */}
                          <div
                            className={`flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${lvl.color} text-xl sm:text-2xl shrink-0 shadow-md ${
                              isActive ? 'animate-pulse-glow' : ''
                            }`}
                          >
                            {status === 'locked' ? <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-white/80" /> : lvl.icon}
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                              <Badge
                                variant="secondary"
                                className={`text-[10px] sm:text-xs font-bold px-1.5 sm:px-2.5 ${
                                  status === 'completed'
                                    ? 'bg-yoel-green/15 text-yoel-green'
                                    : status === 'active'
                                    ? 'bg-yoel-primary/15 text-yoel-primary'
                                    : status === 'locked'
                                    ? 'bg-muted/50 text-muted-foreground'
                                    : 'bg-yoel-blue/15 text-yoel-blue'
                                }`}
                              >
                                {lvl.code}
                              </Badge>
                              <span className="font-semibold text-xs sm:text-sm truncate">
                                {lvl.name}
                              </span>
                              {status === 'completed' && (
                                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yoel-green shrink-0" />
                              )}
                            </div>
                            <p className="text-[10px] sm:text-xs text-muted-foreground mb-1.5 sm:mb-2 line-clamp-1">
                              {lvl.description}
                            </p>
                            <div className="flex items-center gap-1.5 sm:gap-3">
                              <div className="flex-1">
                                <Progress value={lvl.progress} className="h-1.5 sm:h-2" />
                              </div>
                              <span className="text-[10px] sm:text-xs font-medium text-muted-foreground shrink-0">
                                {lvl.progress}%
                              </span>
                              <span className="text-[9px] sm:text-[10px] text-muted-foreground shrink-0 hidden sm:inline">
                                {lvl.completedUnits}/{lvl.units} unités
                              </span>
                            </div>
                          </div>

                          {/* Action button */}
                          <div className="shrink-0 hidden sm:block">
                            {status === 'completed' ? (
                              <Badge className="bg-yoel-green/15 text-yoel-green border-0 text-xs">
                                Terminé
                              </Badge>
                            ) : status === 'locked' ? (
                              <Lock className="h-5 w-5 text-muted-foreground/40" />
                            ) : (
                              <Button
                                size="sm"
                                className={`rounded-full text-xs ${
                                  status === 'active'
                                    ? 'bg-yoel-primary hover:bg-yoel-primary-dark text-white'
                                    : 'bg-yoel-blue hover:bg-yoel-blue-dark text-white'
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleLevelClick(lvl, originalIndex)
                                }}
                              >
                                {lvl.progress > 0 ? 'Continuer' : 'Commencer'}
                                <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
                              </Button>
                            )}
                          </div>
                          {/* Mobile: compact chevron only */}
                          <div className="shrink-0 sm:hidden">
                            {status === 'completed' ? (
                              <CheckCircle2 className="h-5 w-5 text-yoel-green" />
                            ) : status === 'locked' ? (
                              <Lock className="h-4 w-4 text-muted-foreground/40" />
                            ) : (
                              <ChevronRight className="h-5 w-5 text-muted-foreground/50" />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* ─── Journey Progress Summary ──────────────────────────────── */}
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden border-0 bg-gradient-to-r from-yoel-primary/5 via-transparent to-yoel-blue/5">
              <CardContent className="p-3 sm:p-5">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-yoel-primary/15">
                    <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-xs sm:text-sm">Progression globale</h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                      Continuez à apprendre pour débloquer tous les niveaux
                    </p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] sm:text-xs">
                    <span className="text-muted-foreground">
                      {totalCompletedUnits} sur {totalUnits} unités complétées
                    </span>
                    <span className="font-semibold gradient-text-primary">
                      {Math.round((totalCompletedUnits / totalUnits) * 100)}%
                    </span>
                  </div>
                  <Progress
                    value={(totalCompletedUnits / totalUnits) * 100}
                    className="h-2.5 sm:h-3"
                  />
                </div>
                <div className="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-3 text-[10px] sm:text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-yoel-green" />
                    {LEVELS.filter((l) => l.progress >= 100).length} terminé{LEVELS.filter((l) => l.progress >= 100).length > 1 ? 's' : ''}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-yoel-primary" />
                    {LEVELS.filter((l) => l.progress > 0 && l.progress < 100).length} en cours
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                    {LEVELS.filter((l) => l.progress === 0).length} bloqué{LEVELS.filter((l) => l.progress === 0).length > 1 ? 's' : ''}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </ScrollArea>
    </div>
  )
}

// ─── Level Card Subcomponent ────────────────────────────────────────────────

function LevelCard({
  level,
  status,
  isActive,
  onClick,
  isMobile = false,
}: {
  level: LevelInfo
  status: 'completed' | 'active' | 'locked' | 'available'
  isActive: boolean
  onClick: () => void
  isMobile?: boolean
}) {
  // Mobile: compact horizontal layout to prevent overflow
  if (isMobile) {
    return (
      <motion.div
        whileTap={status !== 'locked' ? { scale: 0.98 } : undefined}
        className="relative w-full"
      >
        <Card
          className={`overflow-hidden border-0 transition-all w-full ${
            status === 'locked'
              ? 'bg-muted/30 opacity-60'
              : isActive
              ? 'bg-gradient-to-br from-card to-card shadow-lg'
              : 'glass-card'
          } ${isActive ? 'ring-2 ring-yoel-primary/50' : ''}`}
          onClick={status !== 'locked' ? onClick : undefined}
        >
          <div className="flex items-center gap-3 p-3">
            {/* Left gradient accent */}
            <div className={`w-1.5 self-stretch rounded-full bg-gradient-to-b ${level.color} shrink-0 ${
              status === 'locked' ? 'opacity-30' : ''
            }`} />

            {/* Icon */}
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${level.color} text-xl shrink-0 shadow-md ${
                status === 'locked' ? 'opacity-40 grayscale' : ''
              } ${isActive ? 'animate-float' : ''}`}
            >
              {status === 'locked' ? (
                <Lock className="h-5 w-5 text-white/80" />
              ) : (
                level.icon
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <Badge
                  variant="secondary"
                  className={`text-[9px] font-bold px-1 py-0 ${
                    status === 'completed'
                      ? 'bg-yoel-green/15 text-yoel-green'
                      : status === 'active'
                      ? 'bg-yoel-primary/15 text-yoel-primary'
                      : 'bg-muted/50 text-muted-foreground'
                  }`}
                >
                  {level.code}
                </Badge>
                <span className={`font-semibold text-xs truncate ${status === 'locked' ? 'text-muted-foreground' : ''}`}>
                  {level.name}
                </span>
                {status === 'completed' && (
                  <CheckCircle2 className="h-3 w-3 text-yoel-green shrink-0" />
                )}
              </div>
              <p className="text-[9px] text-muted-foreground line-clamp-1 mb-1">
                {level.description}
              </p>
              <div className="flex items-center gap-1.5">
                <Progress
                  value={level.progress}
                  className={`h-1 flex-1 ${status === 'locked' ? 'opacity-30' : ''}`}
                />
                <span className="text-[9px] font-medium text-muted-foreground shrink-0">
                  {level.progress}%
                </span>
              </div>
            </div>

            {/* Action */}
            <div className="shrink-0">
              {status === 'completed' ? (
                <CheckCircle2 className="h-5 w-5 text-yoel-green" />
              ) : status === 'locked' ? (
                <Lock className="h-4 w-4 text-muted-foreground/40" />
              ) : (
                <ChevronRight className="h-5 w-5 text-muted-foreground/50" />
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    )
  }

  // Desktop: vertical card layout
  return (
    <motion.div
      whileHover={status !== 'locked' ? { scale: 1.03, y: -4 } : undefined}
      whileTap={status !== 'locked' ? { scale: 0.97 } : undefined}
      className="relative"
    >
      <Card
        className={`overflow-hidden border-0 transition-all ${
          status === 'locked'
            ? 'bg-muted/30 opacity-60'
            : isActive
            ? 'bg-gradient-to-br from-card to-card shadow-lg'
            : 'glass-card hover:shadow-md'
        } ${isActive ? 'ring-2 ring-yoel-primary/50' : ''}`}
        onClick={status !== 'locked' ? onClick : undefined}
      >
        {/* Glow effect for active level */}
        {isActive && (
          <div className="absolute inset-0 rounded-xl animate-pulse-glow pointer-events-none" />
        )}

        {/* Top gradient accent */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${level.color} ${
          status === 'locked' ? 'opacity-30' : ''
        }`} />

        <CardContent className="p-4 text-center">
          {/* Level icon */}
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${level.color} text-3xl mb-3 shadow-lg ${
              status === 'locked' ? 'opacity-40 grayscale' : ''
            } ${isActive ? 'animate-float' : ''}`}
          >
            {status === 'locked' ? (
              <Lock className="h-7 w-7 text-white/80" />
            ) : (
              level.icon
            )}
          </div>

          {/* Level code & name */}
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <Badge
              variant="secondary"
              className={`text-[10px] font-bold px-1.5 py-0 ${
                status === 'completed'
                  ? 'bg-yoel-green/15 text-yoel-green'
                  : status === 'active'
                  ? 'bg-yoel-primary/15 text-yoel-primary'
                  : 'bg-muted/50 text-muted-foreground'
              }`}
            >
              {level.code}
            </Badge>
            {status === 'completed' && (
              <CheckCircle2 className="h-3.5 w-3.5 text-yoel-green" />
            )}
          </div>
          <h3 className={`font-semibold text-sm mb-1 ${
            status === 'locked' ? 'text-muted-foreground' : ''
          }`}>
            {level.name}
          </h3>
          <p className="text-[10px] text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
            {level.description}
          </p>

          {/* Progress */}
          <div className="space-y-1.5 mb-3">
            <Progress
              value={level.progress}
              className={`h-1.5 ${status === 'locked' ? 'opacity-30' : ''}`}
            />
            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span>{level.completedUnits}/{level.units} unités</span>
              <span className="font-medium">{level.progress}%</span>
            </div>
          </div>

          {/* Action button */}
          {status === 'completed' ? (
            <Badge className="bg-yoel-green/15 text-yoel-green border-0 text-[10px] w-full justify-center py-1">
              ✓ Terminé
            </Badge>
          ) : status === 'locked' ? (
            <div className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground">
              <Lock className="h-3 w-3" />
              Verrouillé
            </div>
          ) : (
            <Button
              size="sm"
              className={`w-full rounded-full text-xs h-8 ${
                status === 'active'
                  ? 'bg-yoel-primary hover:bg-yoel-primary-dark text-white'
                  : 'bg-yoel-blue hover:bg-yoel-blue-dark text-white'
              }`}
              onClick={(e) => {
                e.stopPropagation()
                onClick()
              }}
            >
              {level.progress > 0 ? 'Continuer' : 'Commencer'}
              <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
