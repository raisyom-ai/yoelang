'use client'

import { motion } from 'framer-motion'
import {
  ArrowLeft, Home, Zap, Flame, Coins, Award, Crown,
  BookOpen, CheckCircle2, Star, Edit3, LogOut, ChevronRight, Calendar
} from 'lucide-react'
import { useAppStore, LEVELS, BADGES } from '@/lib/store'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

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
    transition: { type: 'spring', stiffness: 260, damping: 24 },
  },
}

// ─── Demo Data ──────────────────────────────────────────────────────────────

const LEARNING_HISTORY = [
  { date: '4 mars 2025', lesson: 'Greetings & Introductions', score: 95, type: 'vocabulaire' },
  { date: '3 mars 2025', lesson: 'Numbers & Counting', score: 88, type: 'vocabulaire' },
  { date: '2 mars 2025', lesson: 'Present Simple Tense', score: 92, type: 'grammaire' },
  { date: '1 mars 2025', lesson: 'At the Restaurant', score: 78, type: 'conversation' },
  { date: '28 fév 2025', lesson: 'Family & Relationships', score: 85, type: 'vocabulaire' },
]

// ─── Main Component ─────────────────────────────────────────────────────────

export default function ProfilePage() {
  const { user, goBack, navigate, logout } = useAppStore()

  const displayName = user?.name ?? 'Apprenant'
  const email = user?.email ?? 'apprenant@yoelang.com'
  const avatar = user?.avatar
  const xp = user?.xp ?? 1250
  const streak = user?.streak ?? 7
  const coins = user?.coins ?? 350
  const level = user?.level ?? 'A1'
  const isPremium = user?.isPremium ?? false

  const earnedBadges = BADGES.filter((b) => b.earnedAt)
  const currentLevelInfo = LEVELS.find((l) => l.code === level) ?? LEVELS[0]

  const initials = displayName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const handleLogout = () => {
    logout()
    navigate('home')
  }

  return (
    <div className="min-h-screen bg-background">
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
          <Button variant="ghost" size="icon" onClick={() => navigate('dashboard')} className="shrink-0 text-muted-foreground hover:text-yoel-primary h-8 w-8">
            <Home className="h-4 w-4" />
          </Button>
          <h1 className="text-xl font-bold gradient-text-primary ml-1">Profil</h1>
        </div>
      </div>

      <motion.div
        className="mx-auto max-w-4xl space-y-6 p-4 lg:p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* ─── Profile Header ──────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card overflow-hidden">
            <div className="relative">
              {/* Banner */}
              <div className="h-24 bg-gradient-to-r from-yoel-primary/30 via-yoel-gold/20 to-yoel-blue/30" />
              <CardContent className="relative px-6 pb-6">
                <div className="-mt-12 flex flex-col sm:flex-row items-center sm:items-end gap-4">
                  <Avatar className="h-24 w-24 ring-4 ring-background shadow-xl">
                    <AvatarImage src={avatar ?? undefined} alt={displayName} />
                    <AvatarFallback className="bg-yoel-primary/10 text-yoel-primary font-bold text-2xl">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                      <h2 className="text-xl font-bold">{displayName}</h2>
                      {isPremium && (
                        <Badge className="bg-yoel-gold/15 text-yoel-gold border-0 text-xs">
                          <Crown className="h-3 w-3 mr-1" />
                          Premium
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{email}</p>
                    <div className="flex items-center gap-2 justify-center sm:justify-start mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {level} - {currentLevelInfo.name}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Membre depuis jan. 2025
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full shrink-0"
                    onClick={() => navigate('settings')}
                  >
                    <Edit3 className="h-4 w-4 mr-1" />
                    Modifier
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* ─── Stats Row ───────────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-4 gap-3">
            <Card className="glass-card">
              <CardContent className="p-3 text-center">
                <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-yoel-primary/10">
                  <Zap className="h-4 w-4 text-yoel-primary" />
                </div>
                <p className="text-lg font-bold gradient-text-primary">{xp.toLocaleString()}</p>
                <p className="text-[10px] text-muted-foreground">XP</p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-3 text-center">
                <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10">
                  <Flame className="h-4 w-4 text-orange-500" />
                </div>
                <p className="text-lg font-bold text-orange-500">{streak}</p>
                <p className="text-[10px] text-muted-foreground">Série</p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-3 text-center">
                <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-yoel-gold/10">
                  <Coins className="h-4 w-4 text-yoel-gold" />
                </div>
                <p className="text-lg font-bold text-yoel-gold">{coins}</p>
                <p className="text-[10px] text-muted-foreground">Pièces</p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-3 text-center">
                <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-yoel-blue/10">
                  <Award className="h-4 w-4 text-yoel-blue" />
                </div>
                <p className="text-lg font-bold gradient-text-blue">{earnedBadges.length}</p>
                <p className="text-[10px] text-muted-foreground">Badges</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* ─── Current Level Card ──────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card overflow-hidden">
            <div className="relative">
              <div className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${currentLevelInfo.color} rounded-l-xl`} />
              <CardContent className="p-5 pl-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yoel-primary/10 to-yoel-gold/10 text-2xl">
                      {currentLevelInfo.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        Niveau {currentLevelInfo.code} - {currentLevelInfo.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {currentLevelInfo.completedUnits}/{currentLevelInfo.units} unités complétées
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-bold gradient-text-primary">
                    {currentLevelInfo.progress}%
                  </span>
                </div>
                <Progress value={currentLevelInfo.progress} className="h-2 mt-3" />
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* ─── Achievement Showcase ────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <Award className="h-5 w-5 text-yoel-gold" />
                  Badges obtenus
                </CardTitle>
                <Badge variant="secondary" className="text-xs">
                  {earnedBadges.length}/{BADGES.length}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {earnedBadges.map((badge, idx) => (
                  <motion.div
                    key={badge.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * idx, type: 'spring' }}
                    className="flex flex-col items-center gap-1.5 rounded-xl bg-gradient-to-br from-yoel-gold/5 to-yoel-primary/5 border border-yoel-gold/15 p-3"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yoel-gold/20 to-yoel-primary/10 text-2xl">
                      {badge.icon}
                    </div>
                    <span className="text-[11px] font-medium text-center leading-tight">{badge.name}</span>
                    <span className="text-[9px] text-muted-foreground text-center leading-tight line-clamp-2">
                      {badge.description}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── Learning History ────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-yoel-blue" />
                Historique d&apos;apprentissage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              {LEARNING_HISTORY.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 * idx }}
                  className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-muted/30"
                >
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    item.score >= 90
                      ? 'bg-yoel-green/15 text-yoel-green'
                      : item.score >= 80
                      ? 'bg-yoel-blue/15 text-yoel-blue'
                      : 'bg-yoel-gold/15 text-yoel-gold'
                  }`}>
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.lesson}</p>
                    <p className="text-xs text-muted-foreground">{item.date} · {item.type}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className={`text-sm font-bold ${
                      item.score >= 90
                        ? 'text-yoel-green'
                        : item.score >= 80
                        ? 'text-yoel-blue'
                        : 'text-yoel-gold'
                    }`}>
                      {item.score}%
                    </p>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── Premium CTA (if not premium) ───────────────────────────── */}
        {!isPremium && (
          <motion.div variants={itemVariants}>
            <Card
              className="overflow-hidden border-0 cursor-pointer bg-gradient-to-r from-yoel-primary/10 via-yoel-gold/10 to-yoel-blue/10"
              onClick={() => navigate('premium')}
            >
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yoel-primary to-yoel-gold text-white text-2xl shadow-lg">
                  <Crown className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold gradient-text-premium text-lg">
                    Passer Premium
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    XP x2, exercices illimités, pas de publicités et plus encore !
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* ─── Certificate Card ────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card
            className="overflow-hidden border-0 cursor-pointer bg-gradient-to-r from-yoel-gold/10 via-yoel-primary/5 to-yoel-blue/10"
            onClick={() => navigate('certificate')}
          >
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yoel-gold to-amber-600 text-white text-2xl shadow-lg">
                🏆
              </div>
              <div className="flex-1">
                <h3 className="font-semibold gradient-text-premium text-lg">
                  Mon Certificat
                </h3>
                <p className="text-sm text-muted-foreground">
                  Consultez et téléchargez votre certificat de niveau
                </p>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── Action Buttons ──────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="space-y-3">
          <Button
            variant="outline"
            className="w-full rounded-xl h-12"
            onClick={() => navigate('settings')}
          >
            <Edit3 className="h-4 w-4 mr-2" />
            Modifier le profil
          </Button>

          <Button
            variant="outline"
            className="w-full rounded-xl h-12 text-destructive border-destructive/30 hover:bg-destructive/10"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Se déconnecter
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
