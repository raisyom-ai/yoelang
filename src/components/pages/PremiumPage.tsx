'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Home, Crown, Check, X, Sparkles, Shield,
  ChevronDown, MessageCircle, Star, Zap, BookOpen,
  Dumbbell, Volume2, Download, Award, Headphones, Ban,
  Rocket, Brain, Palette, Lock, TrendingUp, Users,
  Gem, Flame, Trophy, Target, Clock, Heart
} from 'lucide-react'
import { useAppStore, BADGES, BADGE_CATEGORY_COLORS, type Badge as BadgeType, type PremiumPlan } from '@/lib/store'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import CheckoutModal from '@/components/checkout/CheckoutModal'
import AdminPaymentPanel from '@/components/checkout/AdminPaymentPanel'

// ─── Animation Variants ─────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 24 },
  },
}

const floatVariants = {
  animate: {
    y: [-4, 4, -4],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
}

const sparkleVariants = {
  animate: {
    scale: [0, 1.2, 0],
    opacity: [0, 1, 0],
    rotate: [0, 180, 360],
    transition: { duration: 2.5, repeat: Infinity, repeatDelay: 1.5 },
  },
}

const shimmerVariants = {
  animate: {
    backgroundPosition: ['0% 0%', '100% 100%'],
    transition: { duration: 3, repeat: Infinity, ease: 'linear' },
  },
}

// ─── Feature Data ───────────────────────────────────────────────────────────

interface Feature {
  name: string
  description: string
  free: boolean
  premium: boolean
  icon: React.ComponentType<{ className?: string }>
  color: string
  bg: string
}

const FEATURES: Feature[] = [
  { name: 'Leçons basiques', description: 'Accédez aux leçons fondamentales de votre niveau', free: true, premium: true, icon: BookOpen, color: 'text-yoel-primary', bg: 'bg-yoel-primary/10' },
  { name: 'Exercices illimités', description: 'Pratiquez sans limite avec des exercices variés', free: false, premium: true, icon: Dumbbell, color: 'text-yoel-green', bg: 'bg-yoel-green/10' },
  { name: 'Chat IA (50 msg/mois)', description: 'Conversations intelligentes avec corrections en temps réel', free: false, premium: true, icon: MessageCircle, color: 'text-yoel-blue', bg: 'bg-yoel-blue/10' },
  { name: 'XP doublé', description: 'Gagnez le double d\'XP à chaque activité', free: false, premium: true, icon: Zap, color: 'text-yoel-gold', bg: 'bg-yoel-gold/10' },
  { name: 'Zéro publicité', description: 'Apprenez sans interruption ni distraction', free: false, premium: true, icon: Ban, color: 'text-red-400', bg: 'bg-red-400/10' },
  { name: 'Chat IA illimité', description: 'Conversations IA sans aucune limite', free: false, premium: true, icon: MessageCircle, color: 'text-yoel-blue', bg: 'bg-yoel-blue/10' },
  { name: 'Reconnaissance vocale', description: 'Améliorez votre prononciation avec l\'IA', free: false, premium: true, icon: Volume2, color: 'text-yoel-gold', bg: 'bg-yoel-gold/10' },
  { name: 'Certificats officiels', description: 'Obtenez des certificats pour chaque niveau complété', free: false, premium: true, icon: Award, color: 'text-yoel-primary', bg: 'bg-yoel-primary/10' },
  { name: 'Badges exclusifs', description: 'Débloquez des badges Premium uniques', free: false, premium: true, icon: Gem, color: 'text-yoel-gold', bg: 'bg-yoel-gold/10' },
  { name: 'Statistiques avancées', description: 'Analyse détaillée de votre progression', free: false, premium: true, icon: TrendingUp, color: 'text-yoel-primary', bg: 'bg-yoel-primary/10' },
  { name: 'Cours hors ligne', description: 'Téléchargez et apprenez sans connexion', free: false, premium: true, icon: Download, color: 'text-yoel-blue', bg: 'bg-yoel-blue/10' },
  { name: 'Thèmes personnalisés', description: 'Personnalisez l\'apparence de l\'application', free: false, premium: true, icon: Palette, color: 'text-yoel-blue', bg: 'bg-yoel-blue/10' },
  { name: 'Support prioritaire', description: 'Réponse garantie sous 24h', free: false, premium: true, icon: Headphones, color: 'text-yoel-green', bg: 'bg-yoel-green/10' },
  { name: 'Accès anticipé', description: 'Découvrez les nouveautés en avant-première', free: false, premium: true, icon: Rocket, color: 'text-yoel-gold', bg: 'bg-yoel-gold/10' },
  { name: 'Badge Légende', description: 'Badge exclusif réservé aux membres à vie', free: false, premium: true, icon: Crown, color: 'text-yoel-gold', bg: 'bg-yoel-gold/10' },
]

// ─── Premium-Only Badges ────────────────────────────────────────────────────

const PREMIUM_BADGES = [
  { id: 'premium-star', name: 'Étoile Premium', icon: '⭐', description: 'Badge exclusif pour les membres Premium' },
  { id: 'premium-diamond', name: 'Diamant', icon: '💎', description: 'Votre soutien fait briller Yoel' },
  { id: 'premium-crown', name: 'Couronne', icon: '👑', description: 'La marque des apprenants dévoués' },
  { id: 'premium-rocket', name: 'Fusée', icon: '🚀', description: 'Apprentissage accéléré garanti' },
]

// ─── Plans ──────────────────────────────────────────────────────────────────

// ─── Plan Feature Tiers ─────────────────────────────────────────────────────

interface PlanFeature {
  icon: React.ComponentType<{ className?: string }>
  text: string
  /** If true, show in this plan; if string, show that text as a qualifier */
  available: boolean | string
}

interface Plan {
  id: string
  name: string
  subtitle: string
  price: string
  period: string
  monthlyEquivalent: string | null
  savings: string | null
  recommended: boolean
  badge: string | null
  perks: string[]
  features: PlanFeature[]
}

const PLANS: Plan[] = [
  {
    id: 'monthly',
    name: 'Essentiel',
    subtitle: 'Mensuel',
    price: '1 000',
    period: 'F/mois',
    monthlyEquivalent: null,
    savings: null,
    recommended: false,
    badge: null,
    perks: ['Sans engagement', 'Annulation facile', '3 jours d\'essai gratuit'],
    features: [
      { icon: Dumbbell, text: 'Exercices illimités', available: true },
      { icon: MessageCircle, text: 'Chat IA', available: '50 msg/mois' },
      { icon: Zap, text: 'XP doublé', available: true },
      { icon: Ban, text: 'Zéro publicité', available: true },
      { icon: Volume2, text: 'Reconnaissance vocale', available: false },
      { icon: Award, text: 'Certificats officiels', available: false },
      { icon: Gem, text: 'Badges exclusifs', available: false },
      { icon: TrendingUp, text: 'Statistiques avancées', available: false },
      { icon: Download, text: 'Cours hors ligne', available: false },
      { icon: Palette, text: 'Thèmes personnalisés', available: false },
      { icon: Headphones, text: 'Support prioritaire', available: false },
      { icon: Rocket, text: 'Accès anticipé', available: false },
      { icon: Crown, text: 'Badge Légende', available: false },
    ],
  },
  {
    id: 'yearly',
    name: 'Complet',
    subtitle: 'Trimestriel',
    price: '2 000',
    period: 'F/trimestre',
    monthlyEquivalent: '~667 F/mois',
    savings: '33%',
    recommended: true,
    badge: 'POPULAIRE',
    perks: ['1 mois offert', '3 jours d\'essai gratuit', 'Économisez 1 000 F/trimestre'],
    features: [
      { icon: Dumbbell, text: 'Exercices illimités', available: true },
      { icon: MessageCircle, text: 'Chat IA', available: 'Illimité' },
      { icon: Zap, text: 'XP doublé', available: true },
      { icon: Ban, text: 'Zéro publicité', available: true },
      { icon: Volume2, text: 'Reconnaissance vocale', available: true },
      { icon: Award, text: 'Certificats officiels', available: true },
      { icon: Gem, text: 'Badges exclusifs', available: true },
      { icon: TrendingUp, text: 'Statistiques avancées', available: true },
      { icon: Download, text: 'Cours hors ligne', available: true },
      { icon: Palette, text: 'Thèmes personnalisés', available: false },
      { icon: Headphones, text: 'Support prioritaire', available: false },
      { icon: Rocket, text: 'Accès anticipé', available: false },
      { icon: Crown, text: 'Badge Légende', available: false },
    ],
  },
  {
    id: 'lifetime',
    name: 'Intégral',
    subtitle: 'À vie',
    price: '3 000',
    period: 'F',
    monthlyEquivalent: null,
    savings: null,
    recommended: false,
    badge: 'MEILLEURE VALEUR',
    perks: ['Paiement unique', 'Accès pour toujours', 'Toutes les futures mises à jour'],
    features: [
      { icon: Dumbbell, text: 'Exercices illimités', available: true },
      { icon: MessageCircle, text: 'Chat IA', available: 'Illimité' },
      { icon: Zap, text: 'XP doublé', available: true },
      { icon: Ban, text: 'Zéro publicité', available: true },
      { icon: Volume2, text: 'Reconnaissance vocale', available: true },
      { icon: Award, text: 'Certificats officiels', available: true },
      { icon: Gem, text: 'Badges exclusifs', available: true },
      { icon: TrendingUp, text: 'Statistiques avancées', available: true },
      { icon: Download, text: 'Cours hors ligne', available: true },
      { icon: Palette, text: 'Thèmes personnalisés', available: true },
      { icon: Headphones, text: 'Support prioritaire', available: true },
      { icon: Rocket, text: 'Accès anticipé', available: true },
      { icon: Crown, text: 'Badge Légende', available: true },
    ],
  },
]

// ─── Testimonials ───────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    name: 'Marie L.',
    level: 'B1',
    avatar: '👩‍💻',
    text: 'Depuis que je suis passée Premium, ma progression a été incroyable. Le Chat IA est comme avoir un prof particulier 24/7 !',
    rating: 5,
  },
  {
    name: 'Thomas R.',
    level: 'A2',
    avatar: '👨‍🎓',
    text: 'Les exercices illimités et l\'XP doublé m\'ont motivé à pratiquer tous les jours. Je recommande !',
    rating: 5,
  },
  {
    name: 'Sophie M.',
    level: 'B2',
    avatar: '👩‍🏫',
    text: 'La reconnaissance vocale a transformé ma prononciation. Je me sens enfin à l\'aise pour parler.',
    rating: 5,
  },
]

// ─── FAQ Items ──────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    question: 'Puis-je annuler à tout moment ?',
    answer: 'Oui ! Vous pouvez annuler votre abonnement à tout moment. Vous continuerez à avoir accès aux fonctionnalités Premium jusqu\'à la fin de votre période de facturation.',
  },
  {
    question: 'Les cours hors ligne fonctionnent-ils ?',
    answer: 'Oui ! Téléchargez vos leçons préférées quand vous avez une connexion et apprenez partout, même sans internet.',
  },
  {
    question: 'Comment fonctionne le Chat IA avancé ?',
    answer: 'Le Chat IA avancé utilise une intelligence artificielle de pointe pour des conversations naturelles, avec correction en temps réel et suggestions personnalisées.',
  },
  {
    question: 'Comment activer l\'XP doublé ?',
    answer: 'L\'XP doublé est automatiquement activé dès que vous souscrivez à Premium. Chaque activité vous rapporte le double de points d\'expérience.',
  },
]

// ─── Sparkle Component ──────────────────────────────────────────────────────

function Sparkle({ style, size = 16 }: { style: React.CSSProperties; size?: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={style}
      variants={sparkleVariants}
      animate="animate"
    >
      <Sparkles className="text-yoel-gold" style={{ width: size, height: size }} />
    </motion.div>
  )
}

// ─── Floating Particle ──────────────────────────────────────────────────────

function FloatingParticle({ delay, x, size }: { delay: number; x: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-yoel-gold/20"
      style={{ width: size, height: size, left: x, bottom: 0 }}
      animate={{
        y: [0, -200, -400],
        opacity: [0, 0.6, 0],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  )
}

// ─── FAQ Item Component ─────────────────────────────────────────────────────

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="rounded-xl border border-border/50 bg-muted/20 overflow-hidden transition-colors hover:bg-muted/30">
      <button
        className="flex w-full items-center justify-between p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm font-medium pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Feature Card Component ─────────────────────────────────────────────────

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index, type: 'spring', stiffness: 200 }}
      className={`relative group rounded-2xl p-4 border transition-all duration-300 ${
        feature.premium && !feature.free
          ? 'bg-gradient-to-br from-yoel-gold/5 to-yoel-primary/5 border-yoel-gold/20 hover:border-yoel-gold/40 hover:shadow-lg hover:shadow-yoel-gold/5'
          : 'bg-muted/20 border-border/30 hover:border-border/60'
      }`}
    >
      {!feature.free && feature.premium && (
        <div className="absolute -top-2 -right-2">
          <Badge className="bg-yoel-gold/15 text-yoel-gold border-0 text-[9px] px-1.5 py-0">
            <Crown className="h-2.5 w-2.5 mr-0.5" />
            PRO
          </Badge>
        </div>
      )}
      <div className="flex items-start gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${feature.bg}`}>
          <Icon className={`h-5 w-5 ${feature.color}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold mb-0.5">{feature.name}</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Pricing Card Component ─────────────────────────────────────────────────

function PricingCard({
  plan,
  isSelected,
  onSelect,
  onActivate,
}: {
  plan: Plan
  isSelected: boolean
  onSelect: () => void
  onActivate: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Card
        className={`relative overflow-hidden h-full flex flex-col cursor-pointer transition-all duration-300 ${
          plan.recommended
            ? 'glass-card ring-2 ring-yoel-gold/50 shadow-xl shadow-yoel-gold/10'
            : isSelected
            ? 'glass-card ring-2 ring-yoel-primary/50 shadow-lg'
            : 'glass-card hover:shadow-md'
        }`}
        onClick={onSelect}
      >
        {/* Badge */}
        {plan.badge && (
          <div className="absolute top-0 right-0">
            <div className="bg-gradient-to-r from-yoel-gold to-amber-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">
              {plan.badge}
            </div>
          </div>
        )}

        {/* Recommended shimmer effect */}
        {plan.recommended && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, transparent 30%, oklch(0.78 0.14 75 / 0.05) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        )}

        <CardHeader className="pb-2 relative">
          <CardTitle className="text-base flex items-center gap-2">
            {plan.name}
            {plan.recommended && <Crown className="h-4 w-4 text-yoel-gold" />}
          </CardTitle>
          <CardDescription className="text-[11px]">{plan.subtitle}</CardDescription>
          {plan.savings && (
            <Badge className="w-fit bg-yoel-green/15 text-yoel-green border-0 text-[10px]">
              Économisez {plan.savings}
            </Badge>
          )}
        </CardHeader>

        <CardContent className="flex-1 flex flex-col relative">
          <div className="mb-4">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold gradient-text-premium">
                {plan.price}
              </span>
              <span className="text-sm text-muted-foreground">{plan.period}</span>
            </div>
            {plan.monthlyEquivalent && (
              <p className="text-xs text-muted-foreground mt-1">
                soit {plan.monthlyEquivalent}
              </p>
            )}
          </div>

          {/* Plan billing perks */}
          <div className="space-y-1.5 mb-3">
            {plan.perks.map((perk) => (
              <div key={perk} className="flex items-center gap-2 text-xs">
                <Check className="h-3.5 w-3.5 text-yoel-green shrink-0" />
                <span className="text-muted-foreground">{perk}</span>
              </div>
            ))}
          </div>

          <Separator className="my-3" />

          {/* Included features with tier differentiation */}
          <div className="flex-1 space-y-1.5 mb-4">
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Ce qui est inclus</p>
            {plan.features.map((feat) => {
              const Icon = feat.icon
              const isIncluded = feat.available !== false
              const qualifier = typeof feat.available === 'string' ? feat.available : null
              return (
                <div
                  key={feat.text}
                  className={`flex items-center gap-2 text-xs ${!isIncluded ? 'opacity-35' : ''}`}
                >
                  {isIncluded ? (
                    <Icon className="h-3.5 w-3.5 text-yoel-gold shrink-0" />
                  ) : (
                    <X className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                  )}
                  <span className={isIncluded ? '' : 'line-through'}>{feat.text}</span>
                  {qualifier && (
                    <Badge className="bg-yoel-gold/15 text-yoel-gold border-0 text-[9px] px-1.5 py-0 ml-auto shrink-0">
                      {qualifier}
                    </Badge>
                  )}
                </div>
              )
            })}
          </div>

          <Button
            className={`w-full rounded-xl font-semibold transition-all duration-300 ${
              plan.recommended
                ? 'bg-gradient-to-r from-yoel-primary via-yoel-gold to-yoel-primary text-white hover:opacity-90 shadow-lg shadow-yoel-gold/20'
                : 'bg-yoel-primary text-white hover:bg-yoel-primary-dark'
            }`}
            onClick={(e) => {
              e.stopPropagation()
              onSelect()
              onActivate()
            }}
          >
            {plan.recommended ? '✨ Essai gratuit 3 jours' : 'Choisir'}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// ─── Testimonial Card Component ─────────────────────────────────────────────

function TestimonialCard({ testimonial, index }: { testimonial: typeof TESTIMONIALS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, type: 'spring' }}
    >
      <Card className="glass-card h-full">
        <CardContent className="p-5">
          <div className="flex items-center gap-1 mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 text-yoel-gold fill-yoel-gold" />
            ))}
          </div>
          <p className="text-sm text-foreground/90 italic leading-relaxed mb-4">
            &ldquo;{testimonial.text}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yoel-blue/20 to-yoel-primary/20 text-xl">
              {testimonial.avatar}
            </div>
            <div>
              <p className="text-sm font-semibold">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">Niveau {testimonial.level} · Premium</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// ─── Premium Stats (shown when already premium) ────────────────────────────

function PremiumStats() {
  const { user, completedLessons, dailyXpEarned, lessonHistory } = useAppStore()

  const stats = [
    { label: 'XP doublé gagné', value: `+${dailyXpEarned}`, icon: Zap, color: 'text-yoel-gold', bg: 'bg-yoel-gold/10' },
    { label: 'Badges Premium', value: '4', icon: Gem, color: 'text-yoel-blue', bg: 'bg-yoel-blue/10' },
    { label: 'Leçons complétées', value: `${completedLessons.length}`, icon: BookOpen, color: 'text-yoel-green', bg: 'bg-yoel-green/10' },
    { label: 'Jours Premium', value: `${Math.min(lessonHistory.length + 1, 30)}+`, icon: Crown, color: 'text-yoel-primary', bg: 'bg-yoel-primary/10' },
  ]

  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((stat, i) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i }}
            className="rounded-xl border border-yoel-gold/20 bg-yoel-gold/5 p-4 flex items-center gap-3"
          >
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${stat.bg}`}>
              <Icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-lg font-bold">{stat.value}</p>
              <p className="text-[10px] text-muted-foreground">{stat.label}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

// ─── Activation Success Overlay ─────────────────────────────────────────────

function ActivationOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-background rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border border-yoel-gold/30"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl mb-4"
        >
          👑
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold gradient-text-premium mb-2">
            Bienvenue Premium ! 🎉
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Votre essai gratuit de 3 jours commence maintenant.
            Profitez de toutes les fonctionnalités Premium !
          </p>

          <div className="space-y-2 mb-6">
            {PREMIUM_BADGES.slice(0, 3).map((badge) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-3 rounded-xl bg-yoel-gold/5 border border-yoel-gold/10 p-3"
              >
                <span className="text-2xl">{badge.icon}</span>
                <div className="text-left">
                  <p className="text-sm font-semibold">{badge.name}</p>
                  <p className="text-[10px] text-muted-foreground">{badge.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Button
            className="w-full bg-gradient-to-r from-yoel-primary via-yoel-gold to-yoel-primary text-white font-semibold rounded-xl"
            onClick={onClose}
          >
            C&apos;est parti ! ✨
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function PremiumPage() {
  const { user, goBack, navigate } = useAppStore()
  const isPremium = user?.isPremium ?? false

  const [selectedPlan, setSelectedPlan] = useState<string | null>('yearly')
  const [showCheckout, setShowCheckout] = useState(false)
  const [showComparison, setShowComparison] = useState(false)
  const [showAdminPanel, setShowAdminPanel] = useState(false)
  const [adminTapCount, setAdminTapCount] = useState(0)

  // Open checkout modal when user clicks "Choisir"
  const handleActivate = () => {
    setShowCheckout(true)
  }

  // Called when payment is confirmed successful
  const handlePaymentSuccess = (premiumPlanId: string) => {
    if (user) {
      const plan = premiumPlanId as PremiumPlan
      
      // Award premium badges based on plan tier
      const badgeMap: Record<string, string[]> = {
        essentiel: ['premium-star'],
        complet: ['premium-star', 'premium-diamond', 'premium-crown'],
        integral: ['premium-star', 'premium-diamond', 'premium-crown', 'premium-rocket'],
      }
      const newBadges = badgeMap[plan] || ['premium-star']
      const currentBadges = useAppStore.getState().earnedBadges
      const badgesToAdd = newBadges.filter(b => !currentBadges.includes(b))
      
      useAppStore.setState({
        user: { ...user, isPremium: true, premiumPlan: plan },
        earnedBadges: [...currentBadges, ...badgesToAdd],
      })

      // Also update the backend
      fetch('/api/user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          isPremium: true,
          premiumPlan: plan,
        }),
      }).catch(() => {
        // Non-critical: store is already updated locally
      })
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-yoel-gold/5 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-80 w-80 rounded-full bg-yoel-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-yoel-blue/5 blur-3xl" />
      </div>

      <motion.div
        className="relative mx-auto max-w-4xl space-y-6 p-4 lg:p-6 pb-24"
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
          <h1 className="text-xl font-bold gradient-text-premium">YOELANG Premium</h1>
          {isPremium && (
            <Badge className="bg-yoel-gold/15 text-yoel-gold border-0 text-[10px] ml-auto">
              <Crown className="h-3 w-3 mr-1" />
              ACTIF
            </Badge>
          )}
          {/* Admin access: tap 5 times on the Crown icon */}
          <button
            onClick={() => {
              const next = adminTapCount + 1
              setAdminTapCount(next)
              if (next >= 5) {
                setShowAdminPanel(true)
                setAdminTapCount(0)
              }
              setTimeout(() => setAdminTapCount(0), 2000)
            }}
            className="p-1.5 rounded-full text-muted-foreground/20 hover:text-muted-foreground/40 transition-colors"
            title="Admin"
          >
            <Shield className="h-3.5 w-3.5" />
          </button>
        </motion.div>

        {isPremium ? (
          /* ─── Already Premium View ────────────────────────────────────── */
          <>
            <motion.div variants={itemVariants}>
              <Card className="glass-card overflow-hidden relative border-yoel-gold/20">
                {/* Animated shimmer overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, transparent 20%, oklch(0.78 0.14 75 / 0.06) 50%, transparent 80%)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />

                <CardContent className="relative flex flex-col items-center gap-4 p-8 text-center">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-yoel-gold to-amber-600 text-5xl shadow-2xl shadow-yoel-gold/30"
                  >
                    👑
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl font-bold gradient-text-premium">
                    Vous êtes Premium !
                  </h2>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Profitez de toutes les fonctionnalités Premium sans limite.
                    Merci de votre soutien ! 💛
                  </p>

                  {/* Premium stats */}
                  <div className="w-full mt-2">
                    <PremiumStats />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Premium badges */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Gem className="h-5 w-5 text-yoel-gold" />
                    Badges Premium
                  </CardTitle>
                  <CardDescription>Vos badges exclusifs de membre Premium</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {PREMIUM_BADGES.map((badge, i) => (
                      <motion.div
                        key={badge.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center gap-3 rounded-xl bg-yoel-gold/5 border border-yoel-gold/15 p-3"
                      >
                        <span className="text-2xl">{badge.icon}</span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold truncate">{badge.name}</p>
                          <p className="text-[10px] text-muted-foreground truncate">{badge.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* All Premium features */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-yoel-gold" />
                    Vos avantages Premium
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {FEATURES.filter(f => f.premium && !f.free).map((feature) => {
                      const Icon = feature.icon
                      return (
                        <div key={feature.name} className="flex items-center gap-2 rounded-xl bg-yoel-gold/5 p-3">
                          <Icon className={`h-4 w-4 ${feature.color} shrink-0`} />
                          <span className="text-xs font-medium">{feature.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </>
        ) : (
          <>
            {/* ─── Hero Section ───────────────────────────────────────────── */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card overflow-hidden relative border-yoel-gold/20">
                {/* Sparkle effects */}
                <Sparkle style={{ top: '8%', left: '8%' }} size={14} />
                <Sparkle style={{ top: '15%', right: '10%' }} size={12} />
                <Sparkle style={{ bottom: '12%', left: '15%' }} size={10} />
                <Sparkle style={{ bottom: '20%', right: '8%' }} size={14} />
                <Sparkle style={{ top: '45%', left: '50%' }} size={10} />

                {/* Floating particles */}
                <FloatingParticle delay={0} x="20%" size={6} />
                <FloatingParticle delay={1} x="50%" size={4} />
                <FloatingParticle delay={2} x="75%" size={5} />

                <CardContent className="relative flex flex-col items-center gap-5 p-8 sm:p-10 text-center">
                  <motion.div
                    variants={floatVariants}
                    animate="animate"
                    className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-yoel-gold to-amber-600 text-5xl shadow-2xl shadow-yoel-gold/30"
                  >
                    👑
                  </motion.div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold gradient-text-premium mb-2">
                      Débloquez tout le potentiel
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Accédez à des exercices illimités, un Chat IA avancé, la reconnaissance vocale,
                      l&apos;XP doublé et bien plus encore.
                    </p>
                  </div>

                  {/* Social proof */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="h-4 w-4 text-yoel-gold fill-yoel-gold" />
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {['👩‍💻', '👨‍🎓', '👩‍🏫', '👨‍💼', '👩‍🔬'].map((emoji, i) => (
                          <div
                            key={i}
                            className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-muted text-xs"
                          >
                            {emoji}
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">10 000+</span> membres Premium
                      </span>
                    </div>
                  </div>

                  {/* Quick benefit pills */}
                  <div className="flex flex-wrap justify-center gap-2 mt-1">
                    {[
                      { icon: Zap, text: 'XP x2', color: 'text-yoel-gold' },
                      { icon: Ban, text: 'Zéro pub', color: 'text-red-400' },
                      { icon: MessageCircle, text: 'Chat IA', color: 'text-yoel-blue' },
                      { icon: Award, text: 'Certificats', color: 'text-yoel-primary' },
                    ].map((pill) => (
                      <div
                        key={pill.text}
                        className="flex items-center gap-1.5 rounded-full bg-yoel-gold/10 px-3 py-1.5 border border-yoel-gold/15"
                      >
                        <pill.icon className={`h-3.5 w-3.5 ${pill.color}`} />
                        <span className="text-[11px] font-medium">{pill.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ─── Feature Showcase ───────────────────────────────────────── */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-yoel-gold" />
                      Fonctionnalités Premium
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs text-muted-foreground hover:text-foreground gap-1"
                      onClick={() => setShowComparison(!showComparison)}
                    >
                      {showComparison ? 'Vue cartes' : 'Vue comparaison'}
                      <ChevronDown className={`h-3 w-3 transition-transform ${showComparison ? 'rotate-180' : ''}`} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <AnimatePresence mode="wait">
                    {showComparison ? (
                      <motion.div
                        key="comparison"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Comparison header — 4 columns */}
                        <div className="grid grid-cols-5 gap-1 mb-3 px-2">
                          <div />
                          <div className="text-center text-xs font-medium text-muted-foreground">Gratuit</div>
                          <div className="text-center text-xs font-medium">Essentiel</div>
                          <div className="text-center">
                            <Badge className="bg-yoel-gold/15 text-yoel-gold border-0 text-[10px]">
                              <Crown className="h-2.5 w-2.5 mr-0.5" />
                              Complet
                            </Badge>
                          </div>
                          <div className="text-center text-xs font-semibold gradient-text-premium">Intégral</div>
                        </div>

                        <div className="space-y-0.5">
                          {FEATURES.map((feature, idx) => {
                            const Icon = feature.icon
                            // Determine availability per plan
                            const monthlyPlan = PLANS.find(p => p.id === 'monthly')!
                            const yearlyPlan = PLANS.find(p => p.id === 'yearly')!
                            const lifetimePlan = PLANS.find(p => p.id === 'lifetime')!

                            const monthlyFeat = monthlyPlan.features.find(f => f.text === feature.name || (feature.name.startsWith('Chat IA') && f.text === 'Chat IA'))
                            const yearlyFeat = yearlyPlan.features.find(f => f.text === feature.name || (feature.name.startsWith('Chat IA') && f.text === 'Chat IA'))
                            const lifetimeFeat = lifetimePlan.features.find(f => f.text === feature.name || (feature.name.startsWith('Chat IA') && f.text === 'Chat IA'))

                            const isInMonthly = monthlyFeat ? monthlyFeat.available !== false : feature.free
                            const isInYearly = yearlyFeat ? yearlyFeat.available !== false : feature.free
                            const isInLifetime = lifetimeFeat ? lifetimeFeat.available !== false : feature.free

                            const monthlyQualifier = monthlyFeat && typeof monthlyFeat.available === 'string' ? monthlyFeat.available : null
                            const yearlyQualifier = yearlyFeat && typeof yearlyFeat.available === 'string' ? yearlyFeat.available : null

                            return (
                              <div
                                key={feature.name}
                                className="grid grid-cols-5 gap-1 items-center rounded-xl p-2.5 hover:bg-muted/20 transition-colors"
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <Icon className={`h-3.5 w-3.5 ${feature.color} shrink-0`} />
                                  <span className="text-xs truncate">{feature.name}</span>
                                </div>
                                <div className="flex justify-center">
                                  {feature.free ? (
                                    <Check className="h-4 w-4 text-yoel-green" />
                                  ) : (
                                    <X className="h-4 w-4 text-muted-foreground/30" />
                                  )}
                                </div>
                                <div className="flex justify-center items-center gap-1">
                                  {isInMonthly ? (
                                    monthlyQualifier ? (
                                      <span className="text-[9px] text-yoel-gold font-medium">{monthlyQualifier}</span>
                                    ) : (
                                      <Check className="h-4 w-4 text-yoel-green" />
                                    )
                                  ) : (
                                    <X className="h-4 w-4 text-muted-foreground/30" />
                                  )}
                                </div>
                                <div className="flex justify-center items-center gap-1">
                                  {isInYearly ? (
                                    yearlyQualifier ? (
                                      <span className="text-[9px] text-yoel-gold font-medium">{yearlyQualifier}</span>
                                    ) : (
                                      <Check className="h-4 w-4 text-yoel-green" />
                                    )
                                  ) : (
                                    <X className="h-4 w-4 text-muted-foreground/30" />
                                  )}
                                </div>
                                <div className="flex justify-center">
                                  {isInLifetime ? (
                                    <Check className="h-4 w-4 text-yoel-green" />
                                  ) : (
                                    <X className="h-4 w-4 text-muted-foreground/30" />
                                  )}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="cards"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                      >
                        {FEATURES.map((feature, idx) => (
                          <FeatureCard key={feature.name} feature={feature} index={idx} />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>

            {/* ─── Exclusive Premium Badges ───────────────────────────────── */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card border-yoel-gold/15">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Gem className="h-5 w-5 text-yoel-gold" />
                    Badges Premium exclusifs
                  </CardTitle>
                  <CardDescription>
                    Débloquez ces badges uniques en devenant Premium
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {PREMIUM_BADGES.map((badge, i) => (
                      <motion.div
                        key={badge.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i, type: 'spring' }}
                        className="flex flex-col items-center gap-2 rounded-2xl bg-yoel-gold/5 border border-yoel-gold/15 p-4 text-center group hover:border-yoel-gold/40 hover:bg-yoel-gold/10 transition-all"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                          className="text-3xl"
                        >
                          {badge.icon}
                        </motion.div>
                        <div>
                          <p className="text-xs font-semibold">{badge.name}</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5">{badge.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ─── Pricing Cards ─────────────────────────────────────────── */}
            <motion.div variants={itemVariants}>
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold">Choisissez votre plan</h3>
                <p className="text-xs text-muted-foreground mt-1">3 jours d&apos;essai gratuit · Annulation à tout moment</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PLANS.map((plan) => (
                  <PricingCard
                    key={plan.id}
                    plan={plan}
                    isSelected={selectedPlan === plan.id}
                    onSelect={() => setSelectedPlan(plan.id)}
                    onActivate={handleActivate}
                  />
                ))}
              </div>
            </motion.div>

            {/* ─── Testimonials ──────────────────────────────────────────── */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-400" />
                    Ce que disent nos membres
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {TESTIMONIALS.map((testimonial, i) => (
                      <TestimonialCard key={testimonial.name} testimonial={testimonial} index={i} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ─── FAQ ───────────────────────────────────────────────────── */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-yoel-blue" />
                    Questions fréquentes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {FAQ_ITEMS.map((faq, idx) => (
                    <FaqItem key={idx} question={faq.question} answer={faq.answer} />
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* ─── Bottom CTA ────────────────────────────────────────────── */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card border-yoel-gold/20 overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, oklch(0.52 0.10 190 / 0.05), oklch(0.78 0.14 75 / 0.1), oklch(0.52 0.12 265 / 0.05))',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                />
                <CardContent className="relative flex flex-col items-center gap-4 p-8 text-center">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                    className="text-4xl"
                  >
                    ✨
                  </motion.div>
                  <h3 className="text-xl font-bold gradient-text-premium">
                    Prêt à accélérer votre apprentissage ?
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Rejoignez plus de 10 000 apprenants qui progressent plus vite avec Premium.
                  </p>
                  <Button
                    className="bg-gradient-to-r from-yoel-primary via-yoel-gold to-yoel-primary text-white font-semibold rounded-xl px-8 shadow-lg shadow-yoel-gold/20 hover:opacity-90 transition-all"
                    onClick={handleActivate}
                  >
                    <Crown className="h-4 w-4 mr-2" />
                    Essai gratuit 3 jours
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </motion.div>

      {/* Checkout Modal */}
      <AnimatePresence>
        {showCheckout && (
          <CheckoutModal
            selectedPlanId={selectedPlan}
            onClose={() => setShowCheckout(false)}
            onSuccess={handlePaymentSuccess}
          />
        )}
      </AnimatePresence>

      {/* Admin Payment Panel */}
      {showAdminPanel && (
        <AdminPaymentPanel onClose={() => setShowAdminPanel(false)} />
      )}
    </div>
  )
}
