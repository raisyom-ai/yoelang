'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft, Home, BarChart3, Flame, Zap, Target,
  BookOpen, Clock, Award, Lock, CheckCircle2, TrendingUp,
  Calendar, Trophy, Brain, MessageCircle, Mic, BookMarked, Crown
} from 'lucide-react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  AreaChart, Area, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts'
import { useAppStore, getLevelsForUser, BADGES, BADGE_CATEGORY_LABELS, BADGE_CATEGORY_COLORS, BADGE_CATEGORY_BG, calculateStreak, getWeekActivity, getRecommendedDailyGoal, getBadgeProgress, checkAndAwardBadges, isFeatureAvailable, FEATURE_TIERS, type DailyXpRecord, type LessonHistoryEntry, type BadgeCategory, type PremiumPlan } from '@/lib/store'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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

// ─── Helper: Compute skills from lesson history ────────────────────────────

function computeSkillsFromHistory(lessonHistory: LessonHistoryEntry[]) {
  const typeCount: Record<string, { total: number; scoreSum: number }> = {}

  for (const entry of lessonHistory) {
    const t = entry.type
    if (!typeCount[t]) typeCount[t] = { total: 0, scoreSum: 0 }
    typeCount[t].total++
    typeCount[t].scoreSum += entry.score
  }

  // Map lesson types to skill categories
  const skills = [
    {
      name: 'Lecture',
      icon: BookOpen,
      value: Math.round(
        ((typeCount['vocabulaire']?.scoreSum ?? 0) / Math.max(typeCount['vocabulaire']?.total ?? 1, 1)) || 15
      ),
      color: 'from-yoel-primary to-yoel-primary-dark',
      bgColor: 'bg-yoel-primary/10',
      textColor: 'text-yoel-primary',
    },
    {
      name: 'Grammaire',
      icon: Brain,
      value: Math.round(
        ((typeCount['grammaire']?.scoreSum ?? 0) / Math.max(typeCount['grammaire']?.total ?? 1, 1)) || 20
      ),
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-500',
    },
    {
      name: 'Écoute',
      icon: MessageCircle,
      value: Math.round(
        ((typeCount['conversation']?.scoreSum ?? 0) / Math.max(typeCount['conversation']?.total ?? 1, 1)) || 10
      ),
      color: 'from-yoel-green to-emerald-700',
      bgColor: 'bg-yoel-green/10',
      textColor: 'text-yoel-green',
    },
    {
      name: 'Expression',
      icon: Mic,
      value: Math.round(
        ((typeCount['pronunciation']?.scoreSum ?? 0) / Math.max(typeCount['pronunciation']?.total ?? 1, 1)) || 5
      ),
      color: 'from-yoel-gold to-amber-700',
      bgColor: 'bg-yoel-gold/10',
      textColor: 'text-yoel-gold',
    },
    {
      name: 'Conjugaison',
      icon: BookMarked,
      value: Math.round(
        ((typeCount['conjugaison']?.scoreSum ?? 0) / Math.max(typeCount['conjugaison']?.total ?? 1, 1)) || 8
      ),
      color: 'from-yoel-blue to-yoel-blue-dark',
      bgColor: 'bg-yoel-blue/10',
      textColor: 'text-yoel-blue',
    },
  ]

  // Ensure all skills have a minimum value for display (at least 5%)
  return skills.map(s => ({ ...s, value: Math.max(5, Math.min(100, s.value)) }))
}

// ─── Helper: Compute quiz accuracy from lesson history ─────────────────────

function computeQuizAccuracy(lessonHistory: LessonHistoryEntry[]): number {
  if (lessonHistory.length === 0) return 0
  const totalScore = lessonHistory.reduce((sum, e) => sum + e.score, 0)
  return Math.round(totalScore / lessonHistory.length)
}

// ─── Helper: Compute best streak from XP history ───────────────────────────

function computeBestStreak(xpHistory: DailyXpRecord[]): number {
  if (xpHistory.length === 0) return 0

  // Sort by date ascending
  const sorted = [...xpHistory]
    .filter(d => d.xpEarned > 0)
    .sort((a, b) => a.date.localeCompare(b.date))

  if (sorted.length === 0) return 0

  let bestStreak = 1
  let currentStreak = 1

  for (let i = 1; i < sorted.length; i++) {
    const prevDate = new Date(sorted[i - 1].date)
    const currDate = new Date(sorted[i].date)
    const diffDays = Math.round((currDate.getTime() - prevDate.getTime()) / 86400000)

    if (diffDays === 1) {
      currentStreak++
      bestStreak = Math.max(bestStreak, currentStreak)
    } else {
      currentStreak = 1
    }
  }

  return bestStreak
}

// ─── Helper: Build monthly XP data from history ────────────────────────────

function buildMonthlyData(xpHistory: DailyXpRecord[]): { week: string; xp: number }[] {
  if (xpHistory.length === 0) {
    return [
      { week: 'Sem 1', xp: 0 },
      { week: 'Sem 2', xp: 0 },
      { week: 'Sem 3', xp: 0 },
      { week: 'Sem 4', xp: 0 },
    ]
  }

  const today = new Date()
  const weeks: { week: string; xp: number }[] = []

  for (let w = 3; w >= 0; w--) {
    const weekStart = new Date(today)
    weekStart.setDate(today.getDate() - (w * 7 + today.getDay() + 6) % 7)
    weekStart.setHours(0, 0, 0, 0)

    const weekEnd = new Date(weekStart)
    weekEnd.setDate(weekStart.getDate() + 6)
    weekEnd.setHours(23, 59, 59, 999)

    const startStr = weekStart.toISOString().split('T')[0]
    const endStr = weekEnd.toISOString().split('T')[0]

    const weekXp = xpHistory
      .filter(r => r.date >= startStr && r.date <= endStr)
      .reduce((sum, r) => sum + r.xpEarned, 0)

    weeks.push({ week: `Sem ${4 - w}`, xp: weekXp })
  }

  return weeks
}

// ─── Build 30-day streak calendar from XP history ──────────────────────────

const buildStreakCalendar = (xpHistory: DailyXpRecord[], dailyXpEarned: number, effectiveGoal: number) => {
  const today = new Date()
  const todayStr = today.toISOString().split('T')[0]
  const days: { day: number; active: boolean; xp: number }[] = []

  for (let i = 29; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    const dateStr = d.toISOString().split('T')[0]
    const dayOfMonth = d.getDate()

    let xpForDay = 0
    let goalForDay = effectiveGoal

    if (dateStr === todayStr) {
      xpForDay = dailyXpEarned
      goalForDay = effectiveGoal
    } else {
      const record = xpHistory.find((r) => r.date === dateStr)
      if (record) {
        xpForDay = record.xpEarned
        goalForDay = record.goal || effectiveGoal
      }
    }

    days.push({
      day: dayOfMonth,
      active: xpForDay > 0 && xpForDay >= goalForDay * 0.5,
      xp: xpForDay,
    })
  }
  return days
}

// ─── Custom Tooltip for Charts ──────────────────────────────────────────────

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-lg px-3 py-2 text-sm shadow-lg">
        <p className="font-medium text-foreground">{label}</p>
        <p className="text-yoel-primary font-semibold">{payload[0].value} XP</p>
      </div>
    )
  }
  return null
}

// ─── Lesson type distribution colors ────────────────────────────────────────

const TYPE_COLORS: Record<string, string> = {
  vocabulaire: 'oklch(0.55 0.22 25)',
  grammaire: '#8b5cf6',
  conversation: 'oklch(0.6 0.18 155)',
  conjugaison: 'oklch(0.55 0.15 250)',
  pronunciation: 'oklch(0.7 0.18 80)',
}

const TYPE_LABELS: Record<string, string> = {
  vocabulaire: 'Vocabulaire',
  grammaire: 'Grammaire',
  conversation: 'Conversation',
  conjugaison: 'Conjugaison',
  pronunciation: 'Prononciation',
}

// ─── Premium Lock Overlay ────────────────────────────────────────────────────

function PremiumLockOverlay({ onUpgrade }: { onUpgrade: () => void }) {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-background/60 backdrop-blur-[3px]">
      <div className="flex flex-col items-center gap-2.5 rounded-xl bg-background/95 p-5 sm:p-6 shadow-lg border border-yoel-gold/20 text-center max-w-[220px]">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yoel-gold/10">
          <Lock className="h-5 w-5 text-yoel-gold" />
        </div>
        <h3 className="text-sm font-bold text-foreground">Statistiques avancées</h3>
        <Badge className="bg-yoel-gold/15 text-yoel-gold border-0 text-[10px] gap-1">
          <Crown className="h-3 w-3" />
          Complet+
        </Badge>
        <p className="text-[10px] text-muted-foreground leading-tight">Disponible avec le plan Complet</p>
        <Button
          size="sm"
          onClick={onUpgrade}
          className="bg-yoel-gold hover:bg-yoel-gold/90 text-white text-xs rounded-full px-4"
        >
          Voir les offres
        </Button>
      </div>
    </div>
  )
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function StatsPage() {
  const { user, goBack, navigate, dailyXpHistory, dailyXpEarned, lessonHistory, completedLessons, earnedBadges: earnedBadgesStore, earnBadge, chatMessages } = useAppStore()

  const xp = user?.xp ?? 0
  const streak = calculateStreak(dailyXpHistory, dailyXpEarned)
  const isPremium = user?.isPremium ?? false
  const premiumPlan = (user?.premiumPlan as PremiumPlan | null) ?? null
  const hasAdvancedStats = isFeatureAvailable(isPremium, premiumPlan, FEATURE_TIERS.advancedStats)
  const level = user?.level ?? 'A1'

  // Compute dynamic level progress from actual completed lessons
  const LEVELS = useMemo(() => getLevelsForUser(completedLessons), [completedLessons])

  // Dynamic effective goal
  const currentLevelInfo = LEVELS.find((l) => l.code === level) ?? LEVELS[0]
  const effectiveGoal = user?.dailyGoal && user.dailyGoal > 0
    ? user.dailyGoal
    : getRecommendedDailyGoal(level, currentLevelInfo.progress, dailyXpHistory)

  // ─── Derived statistics from real data ─────────────────────────────────
  const skills = useMemo(() => computeSkillsFromHistory(lessonHistory), [lessonHistory])
  const quizAccuracy = useMemo(() => computeQuizAccuracy(lessonHistory), [lessonHistory])
  const bestStreak = useMemo(() => computeBestStreak(dailyXpHistory), [dailyXpHistory])
  const monthlyData = useMemo(() => buildMonthlyData(dailyXpHistory), [dailyXpHistory])

  // Weekly XP data from actual history
  const weekActivity = useMemo(
    () => getWeekActivity(dailyXpHistory, dailyXpEarned, effectiveGoal),
    [dailyXpHistory, dailyXpEarned, effectiveGoal]
  )
  const WEEKLY_XP_DATA = weekActivity.map((d) => ({
    day: d.day,
    xp: d.xpEarned,
  }))

  // 30-day streak calendar
  const STREAK_CALENDAR = useMemo(
    () => buildStreakCalendar(dailyXpHistory, dailyXpEarned, effectiveGoal),
    [dailyXpHistory, dailyXpEarned, effectiveGoal]
  )
  const activeDays = STREAK_CALENDAR.filter((d) => d.active).length

  // Lesson type distribution for pie chart
  const lessonTypeDistribution = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const entry of lessonHistory) {
      counts[entry.type] = (counts[entry.type] || 0) + 1
    }
    return Object.entries(counts).map(([type, count]) => ({
      name: TYPE_LABELS[type] || type,
      value: count,
      color: TYPE_COLORS[type] || '#94a3b8',
    }))
  }, [lessonHistory])

  // Total lessons completed from store
  const totalLessonsCompleted = completedLessons.length || lessonHistory.length
  const totalLessonsAvailable = LEVELS.reduce((acc, l) => acc + l.units, 0)

  // Average XP per active day
  const avgXpPerDay = useMemo(() => {
    const activeDaysHistory = dailyXpHistory.filter(d => d.xpEarned > 0)
    if (activeDaysHistory.length === 0) return 0
    return Math.round(activeDaysHistory.reduce((s, d) => s + d.xpEarned, 0) / activeDaysHistory.length)
  }, [dailyXpHistory])

  // Earned badges — from store earnedBadges IDs
  const earnedBadgeIds = earnedBadgesStore
  const earnedBadgesList = BADGES.filter((b) => earnedBadgeIds.includes(b.id))
  const lockedBadgesList = BADGES.filter((b) => !earnedBadgeIds.includes(b.id))

  // Badge progress computation
  const perfectQuizCount = lessonHistory.filter(e => e.score === 100).length
  const highScoreCount = lessonHistory.filter(e => e.score >= 90).length
  const chatCount = chatMessages.filter(m => m.role === 'user').length / 2 // rough estimate
  const vocabLearned = lessonHistory
    .filter(e => e.type === 'vocabulaire')
    .length * 5 // ~5 words per vocab lesson

  // Group badges by category
  const badgesByCategory = useMemo(() => {
    const cats: BadgeCategory[] = ['serie', 'lecons', 'quiz', 'social', 'maitrise']
    return cats.map(cat => ({
      category: cat,
      label: BADGE_CATEGORY_LABELS[cat],
      color: BADGE_CATEGORY_COLORS[cat],
      bg: BADGE_CATEGORY_BG[cat],
      badges: BADGES.filter(b => b.category === cat),
    }))
  }, [])

  // Auto-earn badges when conditions are met
  useMemo(() => {
    const newBadges = checkAndAwardBadges(
      earnedBadgeIds, streak, totalLessonsCompleted,
      perfectQuizCount, highScoreCount, chatCount,
      level, vocabLearned
    )
    for (const badgeId of newBadges) {
      earnBadge(badgeId)
    }
  }, [streak, totalLessonsCompleted, perfectQuizCount, highScoreCount, chatCount, level, vocabLearned])

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        className="mx-auto max-w-4xl space-y-4 sm:space-y-6 p-3 sm:p-4 lg:p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ─── Top Bar ──────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={goBack} className="shrink-0 rounded-full gap-1.5 border-yoel-primary/20 hover:bg-yoel-primary/5 hover:border-yoel-primary/40 transition-all">
            <ArrowLeft className="h-4 w-4 text-yoel-primary" />
            <span className="text-xs font-medium text-yoel-primary">Retour</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate('dashboard')} className="shrink-0 text-muted-foreground hover:text-yoel-primary">
            <Home className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-xl font-bold gradient-text-primary">Statistiques</h1>
            <p className="text-xs text-muted-foreground">Suivez vos progrès</p>
          </div>
          {isPremium && (
            <Badge className="ml-auto bg-yoel-gold/15 text-yoel-gold border-0 text-xs">
              👑 Premium
            </Badge>
          )}
        </motion.div>

        {/* ─── Overview Cards ──────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            <Card className="glass-card">
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="mx-auto mb-1.5 sm:mb-2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-yoel-primary/10">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-primary" />
                </div>
                <p className="text-xl sm:text-2xl font-bold gradient-text-primary">{xp.toLocaleString()}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">XP Total</p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="mx-auto mb-1.5 sm:mb-2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-orange-500/10">
                  <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                </div>
                <p className="text-xl sm:text-2xl font-bold text-orange-500">{streak}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Série actuelle</p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="mx-auto mb-1.5 sm:mb-2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-yoel-blue/10">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-blue" />
                </div>
                <p className="text-xl sm:text-2xl font-bold gradient-text-blue">{totalLessonsCompleted}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Leçons complétées</p>
              </CardContent>
            </Card>

            <div className="relative">
              <Card className="glass-card">
                <CardContent className="p-3 sm:p-4 text-center">
                  <div className="mx-auto mb-1.5 sm:mb-2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-yoel-green/10">
                    <Target className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-green" />
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-yoel-green">{quizAccuracy}%</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Précision quiz</p>
                </CardContent>
              </Card>
              {!hasAdvancedStats && <PremiumLockOverlay onUpgrade={() => navigate('premium')} />}
            </div>
          </div>
        </motion.div>

        {/* ─── Secondary Stats Row ─────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <Card className="glass-card">
              <CardContent className="p-3 text-center">
                <div className="mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-yoel-gold/10">
                  <Trophy className="h-3.5 w-3.5 text-yoel-gold" />
                </div>
                <p className="text-base sm:text-lg font-bold text-yoel-gold">{bestStreak}</p>
                <p className="text-[9px] sm:text-[10px] text-muted-foreground">Meilleure série</p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-3 text-center">
                <div className="mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-yoel-primary/10">
                  <Zap className="h-3.5 w-3.5 text-yoel-primary" />
                </div>
                <p className="text-base sm:text-lg font-bold gradient-text-primary">{avgXpPerDay}</p>
                <p className="text-[9px] sm:text-[10px] text-muted-foreground">XP moy./jour</p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-3 text-center">
                <div className="mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-yoel-blue/10">
                  <Calendar className="h-3.5 w-3.5 text-yoel-blue" />
                </div>
                <p className="text-base sm:text-lg font-bold gradient-text-blue">{activeDays}/30</p>
                <p className="text-[9px] sm:text-[10px] text-muted-foreground">Jours actifs</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* ─── Charts Section ──────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Tabs defaultValue="weekly" className="space-y-4">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="weekly">Activité hebdomadaire</TabsTrigger>
              <TabsTrigger value="monthly">Progression mensuelle</TabsTrigger>
            </TabsList>

            <TabsContent value="weekly">
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-primary" />
                    XP cette semaine
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] sm:h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={WEEKLY_XP_DATA} barCategoryGap="20%">
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
                        <XAxis
                          dataKey="day"
                          tick={{ fill: 'var(--muted-foreground)', fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          tick={{ fill: 'var(--muted-foreground)', fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar
                          dataKey="xp"
                          fill="oklch(0.55 0.22 25)"
                          radius={[6, 6, 0, 0]}
                          maxBarSize={40}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monthly">
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-blue" />
                    Tendance mensuelle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] sm:h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={monthlyData}>
                        <defs>
                          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="oklch(0.55 0.15 250)" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="oklch(0.55 0.15 250)" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
                        <XAxis
                          dataKey="week"
                          tick={{ fill: 'var(--muted-foreground)', fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          tick={{ fill: 'var(--muted-foreground)', fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                          type="monotone"
                          dataKey="xp"
                          stroke="oklch(0.55 0.15 250)"
                          strokeWidth={2.5}
                          fill="url(#areaGradient)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* ─── Level Progress + Lesson Distribution ────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Level Progress */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-green" />
                  Progression par niveau
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {LEVELS.map((lvl, idx) => (
                  <motion.div
                    key={lvl.code}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.08 }}
                    className="space-y-1"
                  >
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="flex items-center gap-1.5">
                        <span className="text-base sm:text-lg">{lvl.icon}</span>
                        <span className="font-medium">{lvl.code}</span>
                        <span className="text-muted-foreground text-[10px] sm:text-xs">- {lvl.name}</span>
                      </span>
                      <span className="text-muted-foreground text-[10px] sm:text-xs font-medium">
                        {lvl.completedUnits}/{lvl.units} unités
                      </span>
                    </div>
                    <div className="relative h-1.5 sm:h-2 w-full overflow-hidden rounded-full bg-muted/50">
                      <motion.div
                        className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${lvl.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${lvl.progress}%` }}
                        transition={{ duration: 0.8, delay: 0.4 + idx * 0.1, ease: 'easeOut' as const }}
                      />
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Lesson Type Distribution */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              <Card className="glass-card h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-primary" />
                    Types de leçons
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {lessonTypeDistribution.length > 0 ? (
                    <div className="flex flex-col items-center gap-2">
                      <div className="h-[160px] sm:h-[180px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={lessonTypeDistribution}
                              cx="50%"
                              cy="50%"
                              innerRadius={40}
                              outerRadius={70}
                              paddingAngle={4}
                              dataKey="value"
                            >
                              {lessonTypeDistribution.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip
                              formatter={(value: number, name: string) => [`${value} leçon${value > 1 ? 's' : ''}`, name]}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
                        {lessonTypeDistribution.map((entry) => (
                          <div key={entry.name} className="flex items-center gap-1.5 text-[10px] sm:text-xs">
                            <span
                              className="inline-block h-2.5 w-2.5 rounded-full shrink-0"
                              style={{ backgroundColor: entry.color }}
                            />
                            <span className="text-muted-foreground">{entry.name}</span>
                            <span className="font-semibold text-foreground">{entry.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <BarChart3 className="h-10 w-10 text-muted-foreground/30 mb-2" />
                      <p className="text-xs text-muted-foreground">
                        Complétez des leçons pour voir la répartition
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
              {!hasAdvancedStats && <PremiumLockOverlay onUpgrade={() => navigate('premium')} />}
            </div>
          </motion.div>
        </div>

        {/* ─── Skills Bars ─────────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <div className="relative">
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-gold" />
                  Compétences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {skills.map((skill, idx) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.08 }}
                      className="space-y-1"
                    >
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Icon className={`h-3.5 w-3.5 ${skill.textColor}`} />
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground text-[10px] sm:text-xs font-semibold">{skill.value}%</span>
                      </div>
                      <div className="relative h-2 sm:h-2.5 w-full overflow-hidden rounded-full bg-muted/50">
                        <motion.div
                          className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.value}%` }}
                          transition={{ duration: 0.8, delay: 0.3 + idx * 0.1, ease: 'easeOut' as const }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </CardContent>
            </Card>
            {!hasAdvancedStats && <PremiumLockOverlay onUpgrade={() => navigate('premium')} />}
          </div>
        </motion.div>

        {/* ─── Streak Calendar + Time Stats ────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Streak Calendar */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                  <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                  Historique série (30 jours)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
                  {['L','M','M','J','V','S','D'].map((d, i) => (
                    <div key={i} className="text-center text-[9px] sm:text-[10px] text-muted-foreground font-medium pb-0.5 sm:pb-1">
                      {d}
                    </div>
                  ))}
                  {STREAK_CALENDAR.map((day, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.03 * idx, type: 'spring' as const, stiffness: 300 }}
                      className={`flex h-6 sm:h-8 w-full items-center justify-center rounded-md text-[10px] sm:text-xs font-medium transition-colors ${
                        day.active
                          ? 'bg-gradient-to-br from-orange-500/30 to-orange-600/20 text-orange-600 dark:text-orange-400 border border-orange-500/20'
                          : 'bg-muted/30 text-muted-foreground'
                      }`}
                    >
                      {day.active ? '🔥' : day.day}
                    </motion.div>
                  ))}
                </div>
                <Separator className="my-2 sm:my-3" />
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs text-muted-foreground">Jours actifs ce mois</span>
                  <Badge variant="outline" className="text-orange-500 border-orange-500/30 text-[9px] sm:text-[10px]">
                    {activeDays}/30
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Time & Streak Stats */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-blue" />
                  Temps & série
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Current streak display */}
                <div className="text-center py-3 sm:py-4">
                  <motion.p
                    className="text-4xl sm:text-5xl font-bold text-orange-500"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring' as const, stiffness: 200, delay: 0.3 }}
                  >
                    {streak}
                  </motion.p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">jour{streak > 1 ? 's' : ''} de série</p>
                </div>

                <Separator />

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                      <Trophy className="h-3.5 w-3.5 text-yoel-gold" />
                      Meilleure série
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-yoel-gold">{bestStreak} jour{bestStreak > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                      <Zap className="h-3.5 w-3.5 text-yoel-primary" />
                      XP moyen/jour
                    </span>
                    <span className="text-xs sm:text-sm font-semibold">{avgXpPerDay} XP</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                      <BookOpen className="h-3.5 w-3.5 text-yoel-blue" />
                      Leçons terminées
                    </span>
                    <span className="text-xs sm:text-sm font-semibold gradient-text-blue">{totalLessonsCompleted}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                      <Target className="h-3.5 w-3.5 text-yoel-green" />
                      Objectif quotidien
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-yoel-green">{effectiveGoal} XP</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* ─── Badge Showcase ──────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <div className="relative">
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-gold" />
                  Badges
                </CardTitle>
                <Badge variant="secondary" className="text-[10px] sm:text-xs">
                  {earnedBadgesList.length}/{BADGES.length}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Category groups */}
              {badgesByCategory.map((cat) => {
                const earnedInCat = cat.badges.filter(b => earnedBadgeIds.includes(b.id))
                if (cat.badges.length === 0) return null
                return (
                  <div key={cat.category}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${cat.color}`} />
                      <span className="text-xs font-semibold text-foreground">{cat.label}</span>
                      <span className="text-[10px] text-muted-foreground">{earnedInCat.length}/{cat.badges.length}</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {cat.badges.map((badge) => {
                        const isEarned = earnedBadgeIds.includes(badge.id)
                        const progress = getBadgeProgress(
                          badge, streak, totalLessonsCompleted,
                          perfectQuizCount, highScoreCount, chatCount,
                          level, vocabLearned
                        )
                        const progressPct = Math.min(100, Math.round((progress / badge.requirement) * 100))

                        return (
                          <motion.div
                            key={badge.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: isEarned ? 1 : 0.7, scale: 1 }}
                            transition={{ type: 'spring' as const, stiffness: 260, damping: 24 }}
                            className={`flex items-start gap-2 rounded-xl p-2 sm:p-2.5 border ${
                              isEarned
                                ? `bg-gradient-to-br ${cat.bg} border-yoel-gold/20`
                                : 'bg-muted/20 border-border/30'
                            }`}
                          >
                            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg ${
                              isEarned ? `bg-gradient-to-br ${cat.color} text-white` : 'bg-muted/40 grayscale'
                            }`}>
                              {badge.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`text-[10px] sm:text-xs font-semibold leading-tight ${isEarned ? 'text-foreground' : 'text-muted-foreground'}`}>
                                {badge.name}
                              </p>
                              <p className="text-[9px] text-muted-foreground leading-tight mt-0.5 line-clamp-2">
                                {badge.description}
                              </p>
                              {isEarned ? (
                                <div className="flex items-center gap-1 mt-1 text-[9px] text-yoel-green">
                                  <CheckCircle2 className="h-2.5 w-2.5" />
                                  Obtenu
                                </div>
                              ) : (
                                <div className="mt-1">
                                  <div className="relative h-1 w-full overflow-hidden rounded-full bg-muted/50">
                                    <div
                                      className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${cat.color} transition-all duration-500`}
                                      style={{ width: `${progressPct}%` }}
                                    />
                                  </div>
                                  <p className="text-[8px] sm:text-[9px] text-muted-foreground mt-0.5">
                                    {progress}/{badge.requirement}
                                  </p>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>
          {!hasAdvancedStats && <PremiumLockOverlay onUpgrade={() => navigate('premium')} />}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
