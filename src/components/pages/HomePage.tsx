'use client'

import { motion } from 'framer-motion'
import { useAppStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
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
} from 'lucide-react'

/* ---------- data ---------- */

const features = [
  {
    icon: Bot,
    title: 'Tuteur IA',
    description: 'Conversez avec une IA intelligente qui s\'adapte à votre niveau et vous corrige en temps réel.',
    color: 'from-yoel-red to-yoel-red-dark',
  },
  {
    icon: BookOpen,
    title: 'Leçons interactives',
    description: 'Des leçons dynamiques couvrant le vocabulaire, la grammaire et la culture anglophone.',
    color: 'from-yoel-blue to-yoel-blue-dark',
  },
  {
    icon: Mic,
    title: 'Reconnaissance vocale',
    description: 'Pratiquez votre prononciation avec la technologie de reconnaissance vocale avancée.',
    color: 'from-yoel-green to-emerald-600',
  },
  {
    icon: BarChart3,
    title: 'Suivi de progression',
    description: 'Suivez vos progrès avec des statistiques détaillées, des séries et des points XP.',
    color: 'from-yoel-gold to-amber-600',
  },
  {
    icon: Trophy,
    title: 'Défis journaliers',
    description: 'Relevez des défis chaque jour pour gagner des XP et maintenir votre série.',
    color: 'from-purple-500 to-purple-700',
  },
  {
    icon: Award,
    title: 'Certificats',
    description: 'Obtenez des certificats officiels à chaque fois que vous complétez un niveau de compétence.',
    color: 'from-teal-500 to-teal-700',
  },
]

const stats = [
  { value: '50K+', label: 'Apprenants', icon: Users },
  { value: '1000+', label: 'Leçons', icon: BookOpen },
  { value: '6', label: 'Niveaux', icon: GraduationCap },
  { value: '4.9', label: 'Note', icon: Star },
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
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

/* ---------- component ---------- */

export default function HomePage() {
  const { navigate } = useAppStore()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ===== NAVBAR ===== */}
      <nav className="sticky top-0 z-50 glass">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <img src="/yoelang-logo.png" alt="YOELANG" className="h-9 w-9" />
            <span className="text-xl font-black gradient-text-red">YOELANG</span>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('login')}
              className="text-sm"
            >
              Se connecter
            </Button>
            <Button
              size="sm"
              onClick={() => navigate('register')}
              className="bg-yoel-red hover:bg-yoel-red-dark text-white"
            >
              Commencer
            </Button>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-yoel-red/5 blur-3xl" />
          <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-yoel-blue/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-yoel-gold/5 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-start gap-6 text-center lg:text-left"
          >
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
              <span className="gradient-text-red">Master English</span>
              <br />
              <span className="gradient-text-blue">with YOELANG</span>
            </h1>

            <p className="max-w-lg text-lg text-muted-foreground">
              La plateforme premium d&apos;apprentissage de l&apos;anglais.
              Apprenez à votre rythme avec une IA qui s&apos;adapte à vous.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={() => navigate('register')}
                className="bg-yoel-red hover:bg-yoel-red-dark text-white text-base px-8"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('login')}
                className="text-base px-8"
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
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <motion.img
              src="/yoelang-mascot.png"
              alt="YOELANG - Apprenez l'anglais en conversation"
              className="h-72 w-72 drop-shadow-2xl sm:h-80 sm:w-80 md:h-96 md:w-96"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </header>

      {/* ===== FEATURES ===== */}
      <section className="bg-muted/40 py-16 md:py-24">
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
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              <span className="gradient-text-premium">Tout ce dont vous avez besoin</span>
              <br />
              pour apprendre l'anglais
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="mx-auto mt-4 max-w-2xl text-muted-foreground"
            >
              Notre plateforme combine la technologie IA de pointe avec des méthodes d'apprentissage
              des langues éprouvées pour offrir une expérience premium.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                custom={i}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass group rounded-2xl p-6 transition-shadow hover:shadow-xl"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}
                >
                  <feature.icon className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={i}
                className="flex flex-col items-center gap-2 rounded-2xl border bg-card p-6 text-center shadow-sm"
              >
                <stat.icon className="size-6 text-yoel-red" />
                <span className="text-3xl font-black gradient-text-red sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-muted/40 py-16 md:py-24">
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
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              <span className="gradient-text-blue">Comment ça marche</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="mx-auto mt-4 max-w-xl text-muted-foreground"
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
              className="h-48 sm:h-56 md:h-64 w-auto object-contain drop-shadow-lg"
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
                {/* Connector line (hidden on mobile) */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+3rem)] top-10 hidden h-0.5 w-[calc(100%-6rem)] bg-gradient-to-r from-yoel-red/30 to-yoel-blue/30 md:block" />
                )}
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-yoel-red to-yoel-blue text-white shadow-lg">
                  <span className="text-2xl font-black">{step.number}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
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
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Aimé par les <span className="gradient-text-red">apprenants</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="mx-auto mt-4 max-w-xl text-muted-foreground"
            >
              Rejoignez des milliers d'apprenants satisfaits qui ont transformé leur anglais.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeInUp}
                custom={i}
                className="glass rounded-2xl p-6"
              >
                <Quote className="mb-3 size-8 text-yoel-red/40" />
                <p className="mb-4 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yoel-red to-yoel-blue text-xs font-bold text-white">
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
              className="flex justify-center"
            >
              <img
                src="/achievement.png"
                alt="Atteignez vos objectifs en anglais"
                className="h-56 sm:h-64 md:h-72 w-auto object-contain drop-shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yoel-red via-yoel-red-dark to-yoel-blue-dark p-8 text-center text-white shadow-2xl sm:p-12 md:p-16"
            >
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5 blur-2xl" />

            <h2 className="relative text-3xl font-bold sm:text-4xl">
              Prêt à commencer votre parcours ?
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-white/80">
              Rejoignez plus de 50 000 apprenants et commencez à maîtriser l'anglais aujourd'hui. C'est gratuit pour commencer.
            </p>
            <div className="relative mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                onClick={() => navigate('register')}
                className="bg-white text-yoel-red hover:bg-white/90 text-base px-8 font-semibold"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('login')}
                className="border-white/30 bg-transparent text-white hover:bg-white/10 text-base px-8"
              >
                Se connecter
              </Button>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="mt-auto border-t bg-muted/30 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              <img src="/yoelang-logo.png" alt="YOELANG" className="h-7 w-7" />
              <span className="text-lg font-black gradient-text-red">YOELANG</span>
              <span className="text-xs text-muted-foreground">— YOEL ANGLAIS</span>
            </div>

            <div className="flex gap-6 text-sm text-muted-foreground">
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
