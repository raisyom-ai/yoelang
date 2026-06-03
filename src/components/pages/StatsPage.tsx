'use client'

import { motion } from 'framer-motion'
import {
  ArrowLeft, Home, BarChart3, Flame, Zap, Target,
  BookOpen, Clock, Award, Lock, CheckCircle2, TrendingUp
} from 'lucide-react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  AreaChart, Area, ResponsiveContainer
} from 'recharts'
import { useAppStore, LEVELS, BADGES } from '@/lib/store'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
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
    transition: { type: 'spring', stiffness: 260, damping: 24 },
  },
}

// ─── Demo Data ──────────────────────────────────────────────────────────────

const WEEKLY_XP_DATA = [
  { day: 'Lun', xp: 45 },
  { day: 'Mar', xp: 30 },
  { day: 'Mer', xp: 60 },
  { day: 'Jeu', xp: 25 },
  { day: 'Ven', xp: 55 },
  { day: 'Sam', xp: 40 },
  { day: 'Dim', xp: 35 },
]

const MONTHLY_PROGRESS_DATA = [
  { week: 'Sem 1', xp: 180 },
  { week: 'Sem 2', xp: 250 },
  { week: 'Sem 3', xp: 310 },
  { week: 'Sem 4', xp: 290 },
]

const SKILLS = [
  { name: 'Lecture', key: 'reading', value: 72, color: 'from-yoel-primary to-yoel-primary-dark' },
  { name: 'Écriture', key: 'writing', value: 58, color: 'from-yoel-blue to-yoel-blue-dark' },
  { name: 'Écoute', key: 'listening', value: 65, color: 'from-yoel-green to-emerald-700' },
  { name: 'Expression', key: 'speaking', value: 45, color: 'from-yoel-gold to-amber-700' },
  { name: 'Grammaire', key: 'grammar', value: 68, color: 'from-purple-500 to-purple-700' },
  { name: 'Vocabulaire', key: 'vocabulary', value: 80, color: 'from-pink-500 to-pink-700' },
]

const STREAK_CALENDAR = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  active: [1,2,3,5,6,7,8,10,11,12,13,14,15,17,18,19,20,21,22,24,25,26,27].includes(i + 1),
}))

const TIME_SPENT = {
  thisWeek: 245,
  avgPerDay: 35,
  bestDay: 65,
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

// ─── Main Component ─────────────────────────────────────────────────────────

export default function StatsPage() {
  const { user, goBack, navigate } = useAppStore()

  const xp = user?.xp ?? 1250
  const streak = user?.streak ?? 7
  const isPremium = user?.isPremium ?? false

  const earnedBadges = BADGES.filter((b) => b.earnedAt)
  const lockedBadges = BADGES.filter((b) => !b.earnedAt)

  const lessonsCompleted = LEVELS.reduce((acc, l) => acc + l.completedUnits, 0)
  const totalLessons = LEVELS.reduce((acc, l) => acc + l.units, 0)
  const quizAccuracy = 87
  const bestStreak = 14

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        className="mx-auto max-w-4xl space-y-6 p-4 lg:p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ─── Top Bar ──────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={goBack} className="shrink-0">
            <ArrowLeft className="h-5 w-5" />
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <Card className="glass border-0">
              <CardContent className="p-4 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-yoel-primary/10">
                  <Zap className="h-5 w-5 text-yoel-primary" />
                </div>
                <p className="text-2xl font-bold gradient-text-primary">{xp.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">XP Total</p>
              </CardContent>
            </Card>

            <Card className="glass border-0">
              <CardContent className="p-4 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10">
                  <Flame className="h-5 w-5 text-orange-500" />
                </div>
                <p className="text-2xl font-bold text-orange-500">{bestStreak}</p>
                <p className="text-xs text-muted-foreground">Record série</p>
              </CardContent>
            </Card>

            <Card className="glass border-0">
              <CardContent className="p-4 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-yoel-blue/10">
                  <BookOpen className="h-5 w-5 text-yoel-blue" />
                </div>
                <p className="text-2xl font-bold gradient-text-blue">{lessonsCompleted}/{totalLessons}</p>
                <p className="text-xs text-muted-foreground">Leçons complétées</p>
              </CardContent>
            </Card>

            <Card className="glass border-0">
              <CardContent className="p-4 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-yoel-green/10">
                  <Target className="h-5 w-5 text-yoel-green" />
                </div>
                <p className="text-2xl font-bold text-yoel-green">{quizAccuracy}%</p>
                <p className="text-xs text-muted-foreground">Précision quiz</p>
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
              <Card className="glass border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-yoel-primary" />
                    XP cette semaine
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={WEEKLY_XP_DATA} barCategoryGap="20%">
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
                        <XAxis
                          dataKey="day"
                          tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
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
              <Card className="glass border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-yoel-blue" />
                    Tendance mensuelle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={MONTHLY_PROGRESS_DATA}>
                        <defs>
                          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="oklch(0.55 0.15 250)" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="oklch(0.55 0.15 250)" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
                        <XAxis
                          dataKey="week"
                          tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
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

        {/* ─── Level Progress Overview ─────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-yoel-green" />
                Progression par niveau
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {LEVELS.map((level, idx) => (
                <motion.div
                  key={level.code}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.08 }}
                  className="space-y-1.5"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{level.icon}</span>
                      <span className="font-medium">{level.code}</span>
                      <span className="text-muted-foreground text-xs">- {level.name}</span>
                    </span>
                    <span className="text-muted-foreground text-xs font-medium">
                      {level.completedUnits}/{level.units} unités
                    </span>
                  </div>
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted/50">
                    <motion.div
                      className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${level.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${level.progress}%` }}
                      transition={{ duration: 0.8, delay: 0.4 + idx * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── Skills Bars ─────────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Target className="h-5 w-5 text-yoel-gold" />
                Compétences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {SKILLS.map((skill, idx) => (
                <motion.div
                  key={skill.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.08 }}
                  className="space-y-1.5"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-xs font-semibold">{skill.value}%</span>
                  </div>
                  <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-muted/50">
                    <motion.div
                      className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ duration: 0.8, delay: 0.3 + idx * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── Streak Calendar + Time Spent ────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Streak Calendar */}
          <motion.div variants={itemVariants}>
            <Card className="glass border-0 h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Flame className="h-5 w-5 text-orange-500" />
                  Historique série (30 jours)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1.5">
                  {['L','M','M','J','V','S','D'].map((d, i) => (
                    <div key={i} className="text-center text-[10px] text-muted-foreground font-medium pb-1">
                      {d}
                    </div>
                  ))}
                  {/* Empty cells for offset (assuming month starts on Wednesday) */}
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {STREAK_CALENDAR.map((day) => (
                    <motion.div
                      key={day.day}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.05 * day.day, type: 'spring', stiffness: 300 }}
                      className={`flex h-8 w-full items-center justify-center rounded-md text-xs font-medium transition-colors ${
                        day.active
                          ? 'bg-gradient-to-br from-orange-500/30 to-orange-600/20 text-orange-600 dark:text-orange-400 border border-orange-500/20'
                          : 'bg-muted/30 text-muted-foreground'
                      }`}
                    >
                      {day.active ? '🔥' : day.day}
                    </motion.div>
                  ))}
                </div>
                <Separator className="my-3" />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Jours actifs ce mois</span>
                  <Badge variant="outline" className="text-orange-500 border-orange-500/30 text-[10px]">
                    {STREAK_CALENDAR.filter(d => d.active).length}/30
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Time Spent */}
          <motion.div variants={itemVariants}>
            <Card className="glass border-0 h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Clock className="h-5 w-5 text-yoel-blue" />
                  Temps d&apos;apprentissage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-4">
                  <motion.p
                    className="text-5xl font-bold gradient-text-blue"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
                  >
                    {Math.floor(TIME_SPENT.thisWeek / 60)}h{TIME_SPENT.thisWeek % 60}
                  </motion.p>
                  <p className="text-sm text-muted-foreground mt-1">cette semaine</p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Moyenne par jour
                    </span>
                    <span className="text-sm font-semibold">{TIME_SPENT.avgPerDay} min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Meilleur jour
                    </span>
                    <span className="text-sm font-semibold text-yoel-green">{TIME_SPENT.bestDay} min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Flame className="h-4 w-4" />
                      Série actuelle
                    </span>
                    <span className="text-sm font-semibold text-orange-500">{streak} jours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* ─── Badge Showcase ──────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass border-0">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <Award className="h-5 w-5 text-yoel-gold" />
                  Badges
                </CardTitle>
                <Badge variant="secondary" className="text-xs">
                  {earnedBadges.length}/{BADGES.length}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="earned" className="space-y-3">
                <TabsList className="w-full grid grid-cols-2">
                  <TabsTrigger value="earned">
                    Obtenus ({earnedBadges.length})
                  </TabsTrigger>
                  <TabsTrigger value="locked">
                    Verrouillés ({lockedBadges.length})
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="earned">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {earnedBadges.map((badge, idx) => (
                      <motion.div
                        key={badge.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * idx, type: 'spring' }}
                        className="flex flex-col items-center gap-2 rounded-xl bg-gradient-to-br from-yoel-gold/5 to-yoel-primary/5 border border-yoel-gold/20 p-3"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yoel-gold/20 to-yoel-primary/10 text-2xl">
                          {badge.icon}
                        </div>
                        <span className="text-xs font-medium text-center leading-tight">{badge.name}</span>
                        <span className="text-[10px] text-muted-foreground text-center leading-tight">
                          {badge.description}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] text-yoel-green">
                          <CheckCircle2 className="h-3 w-3" />
                          {badge.earnedAt && new Date(badge.earnedAt).toLocaleDateString('fr-FR', { month: 'short', day: 'numeric' })}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="locked">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {lockedBadges.map((badge, idx) => (
                      <motion.div
                        key={badge.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        transition={{ delay: 0.1 * idx, type: 'spring' }}
                        className="flex flex-col items-center gap-2 rounded-xl bg-muted/30 border border-border/50 p-3 grayscale"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted/50 text-2xl">
                          {badge.icon}
                        </div>
                        <span className="text-xs font-medium text-center leading-tight">{badge.name}</span>
                        <span className="text-[10px] text-muted-foreground text-center leading-tight">
                          {badge.description}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                          <Lock className="h-3 w-3" />
                          Verrouillé
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
