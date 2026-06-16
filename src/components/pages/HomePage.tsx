'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import {
  Bot,
  BookOpen,
  Mic,
  BarChart3,
  Trophy,
  Award,
  Star,
  Users,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Quote,
  Menu,
  LogIn,
  UserPlus,
  Sparkles,
} from 'lucide-react'

/* ---------- data ---------- */

const features = [
  {
    icon: Bot,
    title: 'Tuteur IA',
    description: 'Conversez avec une IA intelligente qui s\'adapte à votre niveau et vous corrige en temps réel.',
    color: 'from-yoel-primary to-yoel-primary-dark',
    span: 'lg:col-span-2',
  },
  {
    icon: BookOpen,
    title: 'Leçons interactives',
    description: 'Des leçons dynamiques couvrant le vocabulaire, la grammaire et la culture anglophone.',
    color: 'from-yoel-blue to-yoel-blue-dark',
    span: '',
  },
  {
    icon: Mic,
    title: 'Reconnaissance vocale',
    description: 'Pratiquez votre prononciation avec la technologie de reconnaissance vocale avancée.',
    color: 'from-yoel-green to-emerald-600',
    span: '',
  },
  {
    icon: BarChart3,
    title: 'Suivi de progression',
    description: 'Statistiques détaillées, séries quotidiennes et points XP pour rester motivé.',
    color: 'from-yoel-gold to-amber-600',
    span: 'lg:col-span-2',
  },
  {
    icon: Trophy,
    title: 'Défis journaliers',
    description: 'Relevez des défis chaque jour pour gagner des XP et maintenir votre série.',
    color: 'from-yoel-primary to-yoel-blue',
    span: '',
  },
  {
    icon: Award,
    title: 'Certificats officiels',
    description: 'Obtenez des certificats à chaque niveau de compétence atteint.',
    color: 'from-yoel-gold to-yoel-primary',
    span: '',
  },
]

const stats = [
  { value: '50K+', label: 'Apprenants', icon: Users },
  { value: '1000+', label: 'Leçons', icon: BookOpen },
  { value: '6', label: 'Niveaux', icon: GraduationCap },
  { value: '4.9', label: 'Note moyenne', icon: Star },
]

const testimonials = [
  {
    name: 'Marie Dupont',
    role: 'Étudiante, Paris',
    text: "YOELANG a complètement changé ma façon d'apprendre l'anglais. Le tuteur IA est incroyable !",
    avatar: 'MD',
  },
  {
    name: 'Ahmed Benali',
    role: 'Ingénieur, Lyon',
    text: "En 3 mois, je suis passé du niveau A1 à B1. La méthode est efficace et motivante.",
    avatar: 'AB',
  },
  {
    name: 'Sophie Martin',
    role: 'Professeure, Bordeaux',
    text: "Je recommande YOELANG à tous mes élèves. C'est le futur de l'apprentissage des langues.",
    avatar: 'SM',
  },
]

const steps = [
  {
    number: '01',
    title: 'Créez votre compte',
    description: 'Inscrivez-vous gratuitement et passez un test de placement rapide pour déterminer votre niveau.',
  },
  {
    number: '02',
    title: 'Commencez à apprendre',
    description: 'Suivez des leçons personnalisées, pratiquez avec votre tuteur IA et relevez des défis.',
  },
  {
    number: '03',
    title: 'Progressez et certifiez',
    description: 'Suivez vos progrès, gagnez des badges et obtenez des certificats à chaque niveau atteint.',
  },
]

/* ---------- animation helpers ---------- */

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
}

/* ---------- component ---------- */

export default function HomePage() {
  const { navigate } = useAppStore()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ===== NAVBAR ===== */}
      <nav className="sticky top-0 z-50 glass">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            <img src="/yoelang-logo.png" alt="YOELANG" className="h-9 w-9" />
            <span className="text-xl font-black tracking-tight">YOELANG</span>
          </div>

          {/* Desktop buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('login')}
              className="text-sm rounded-full px-5"
            >
              Se connecter
            </Button>
            <Button
              size="sm"
              onClick={() => navigate('register')}
              className="bg-yoel-primary hover:bg-yoel-primary-dark text-white rounded-full px-5 shadow-[var(--shadow-glow-primary)]"
            >
              Commencer
            </Button>
          </div>

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden h-10 w-10 shrink-0"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* ===== MOBILE MENU SHEET ===== */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-[280px] sm:w-[320px]">
          <SheetHeader className="text-left">
            <div className="flex items-center gap-2">
              <img src="/yoelang-logo.png" alt="YOELANG" className="h-8 w-8" />
              <SheetTitle className="text-lg font-black">YOELANG</SheetTitle>
            </div>
            <SheetDescription className="text-sm text-muted-foreground">
              Apprenez l&apos;anglais avec YOELANG
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col gap-3 px-4 mt-6">
            <Button
              size="lg"
              onClick={() => {
                setMobileMenuOpen(false)
                navigate('register')
              }}
              className="w-full bg-yoel-primary hover:bg-yoel-primary-dark text-white text-base h-12 rounded-full"
            >
              <UserPlus className="mr-2 h-5 w-5" />
              Commencer gratuitement
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                setMobileMenuOpen(false)
                navigate('login')
              }}
              className="w-full text-base h-12 rounded-full"
            >
              <LogIn className="mr-2 h-5 w-5" />
              Se connecter
            </Button>
          </div>

          <div className="mt-8 px-4 space-y-1">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Navigation rapide</p>
            {[
              { label: 'Leçons', icon: BookOpen, action: () => { setMobileMenuOpen(false); navigate('levels') } },
              { label: 'Exercices', icon: BarChart3, action: () => { setMobileMenuOpen(false); navigate('exercises') } },
              { label: 'Chat IA', icon: Bot, action: () => { setMobileMenuOpen(false); navigate('chat') } },
              { label: 'Premium', icon: Trophy, action: () => { setMobileMenuOpen(false); navigate('premium') } },
            ].map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <item.icon className="h-5 w-5 text-muted-foreground" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="absolute bottom-6 left-4 right-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-yoel-green shrink-0" />
              <span>Gratuit pour commencer — sans carte bancaire</span>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* ===== HERO ===== */}
      <header className="relative overflow-hidden">
        {/* Aurora background - modern mesh gradient */}
        <div className="aurora-bg" />
        <div className="noise-overlay" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-36">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-col items-start gap-7 text-left"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yoel-primary/20 bg-yoel-primary/5 px-4 py-1.5 text-xs font-medium text-yoel-primary">
              <Sparkles className="size-3.5" />
              <span>Nouveau : Tuteur IA conversationnel</span>
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              <span className="block">Master English</span>
              <span className="gradient-text-premium">with YOELANG</span>
            </h1>

            <p className="max-w-lg text-lg text-muted-foreground leading-relaxed">
              La plateforme premium d&apos;apprentissage de l&apos;anglais.
              Apprenez à votre rythme avec une IA qui s&apos;adapte à vous.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
              <Button
                size="lg"
                onClick={() => navigate('register')}
                className="bg-yoel-primary hover:bg-yoel-primary-dark text-white text-base px-8 rounded-full shadow-[var(--shadow-glow-primary)] h-12"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('login')}
                className="text-base px-8 rounded-full h-12"
              >
                Se connecter
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="size-4 text-yoel-green" />
              <span>Gratuit pour commencer — sans carte bancaire</span>
            </div>
          </motion.div>

          {/* Mascot / Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative glow ring behind mascot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full bg-gradient-to-br from-yoel-primary/20 to-yoel-gold/20 blur-3xl" />
            </div>
            <motion.img
              src="/yoelang-mascot.png"
              alt="YOELANG - Apprenez l'anglais en conversation"
              className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 drop-shadow-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' as const }}
            />
          </motion.div>
        </div>
      </header>

      {/* ===== FEATURES (Bento Grid) ===== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              custom={0}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Tout ce dont vous avez besoin
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="mx-auto mt-4 max-w-2xl text-muted-foreground text-base sm:text-lg"
            >
              Notre plateforme combine la technologie IA de pointe avec des méthodes d&apos;apprentissage
              des langues éprouvées pour offrir une expérience premium.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                custom={i}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`bento-card group rounded-2xl p-6 sm:p-7 ${feature.span}`}
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}
                >
                  <feature.icon className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={i}
                className="flex flex-col items-center gap-2 rounded-2xl glass-card p-6 text-center"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yoel-primary/10 mb-1">
                  <stat.icon className="size-5 text-yoel-primary" />
                </div>
                <span className="text-3xl font-black tracking-tight sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              custom={0}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Comment ça marche
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="mx-auto mt-4 max-w-xl text-muted-foreground text-base sm:text-lg"
            >
              Commencez votre apprentissage de l&apos;anglais en trois étapes simples.
            </motion.p>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center my-10"
          >
            <img
              src="/learning-group.png"
              alt="Apprenez l'anglais en groupe"
              className="h-48 sm:h-56 md:h-64 w-auto object-contain"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-12 grid gap-8 md:grid-cols-3"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                custom={i}
                className="relative flex flex-col items-center text-center"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+3rem)] top-10 hidden h-0.5 w-[calc(100%-6rem)] bg-gradient-to-r from-yoel-primary/30 to-yoel-blue/30 md:block" />
                )}
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-yoel-primary to-yoel-blue text-white shadow-lg shadow-yoel-primary/20">
                  <span className="text-2xl font-black">{step.number}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              custom={0}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Aimé par les apprenants
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="mx-auto mt-4 max-w-xl text-muted-foreground text-base sm:text-lg"
            >
              Rejoignez des milliers d&apos;apprenants satisfaits qui ont transformé leur anglais.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-12 grid gap-5 md:grid-cols-3"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeInUp}
                custom={i}
                className="rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-raised)]"
              >
                <Quote className="mb-3 size-8 text-yoel-primary/40" />
                <p className="mb-5 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yoel-primary to-yoel-blue text-xs font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Achievement Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center order-2 md:order-1"
            >
              <img
                src="/achievement.png"
                alt="Atteignez vos objectifs en anglais"
                className="h-56 sm:h-64 md:h-72 w-auto object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yoel-primary via-yoel-primary-dark to-yoel-blue-dark p-8 text-center text-white shadow-[var(--shadow-floating)] sm:p-12 md:p-16 order-1 md:order-2"
            >
              {/* Decorative aurora */}
              <div className="aurora-bg opacity-50" />

              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Prêt à commencer votre parcours ?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-white/80 text-base sm:text-lg">
                  Rejoignez plus de 50 000 apprenants et commencez à maîtriser l&apos;anglais aujourd&apos;hui. C&apos;est gratuit pour commencer.
                </p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Button
                    size="lg"
                    onClick={() => navigate('register')}
                    className="bg-white text-yoel-primary hover:bg-white/90 text-base px-8 font-semibold rounded-full h-12"
                  >
                    Commencer gratuitement
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate('login')}
                    className="border-white/30 bg-transparent text-white hover:bg-white/10 text-base px-8 rounded-full h-12"
                  >
                    Se connecter
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="mt-auto border-t bg-muted/30 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-2.5">
              <img src="/yoelang-logo.png" alt="YOELANG" className="h-7 w-7" />
              <span className="text-lg font-black tracking-tight">YOELANG</span>
              <span className="text-xs text-muted-foreground">— YOEL ANGLAIS</span>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <button
                onClick={() => navigate('login')}
                className="hover:text-foreground transition-colors"
              >
                Connexion
              </button>
              <button
                onClick={() => navigate('register')}
                className="hover:text-foreground transition-colors"
              >
                Inscription
              </button>
              <button
                onClick={() => navigate('premium')}
                className="hover:text-foreground transition-colors"
              >
                Premium
              </button>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} YOELANG — YOEL ANGLAIS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
