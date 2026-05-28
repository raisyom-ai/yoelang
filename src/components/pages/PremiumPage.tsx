'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Home, Crown, Check, X, Sparkles, Shield,
  ChevronDown, MessageCircle, Star, Zap, BookOpen,
  Dumbbell, Volume2, Download, Award, Headphones, Ban
} from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
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

const sparkleVariants = {
  animate: {
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    rotate: [0, 180, 360],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
}

// ─── Feature Data ───────────────────────────────────────────────────────────

const FEATURES = [
  { name: 'Leçons basiques', free: true, premium: true, icon: BookOpen },
  { name: 'Exercices illimités', free: false, premium: true, icon: Dumbbell },
  { name: 'Chat IA avancé', free: false, premium: true, icon: MessageCircle },
  { name: 'Reconnaissance vocale', free: false, premium: true, icon: Volume2 },
  { name: 'Certificats', free: false, premium: true, icon: Award },
  { name: 'Pas de publicités', free: false, premium: true, icon: Ban },
  { name: 'Cours hors ligne', free: false, premium: true, icon: Download },
  { name: 'Support prioritaire', free: false, premium: true, icon: Headphones },
]

const PLANS = [
  {
    id: 'monthly',
    name: 'Mensuel',
    price: '9,99',
    period: '/mois',
    yearlyPrice: null,
    savings: null,
    recommended: false,
  },
  {
    id: 'yearly',
    name: 'Annuel',
    price: '79,99',
    period: '/an',
    yearlyPrice: '6,67€/mois',
    savings: '33%',
    recommended: true,
  },
  {
    id: 'lifetime',
    name: 'À vie',
    price: '199,99',
    period: '',
    yearlyPrice: null,
    savings: null,
    recommended: false,
  },
]

const FAQ_ITEMS = [
  {
    question: 'Puis-je annuler à tout moment ?',
    answer: 'Oui ! Vous pouvez annuler votre abonnement à tout moment. Vous continuerez à avoir accès aux fonctionnalités Premium jusqu\'à la fin de votre période de facturation.',
  },
  {
    question: 'Quelle est la garantie de remboursement ?',
    answer: 'Nous offrons une garantie de remboursement de 7 jours. Si vous n\'êtes pas satisfait, contactez-nous pour un remboursement complet, sans questions.',
  },
  {
    question: 'Les cours hors ligne fonctionnent-ils ?',
    answer: 'Oui ! Téléchargez vos leçons préférées quand vous avez une connexion et apprenez partout, même sans internet.',
  },
  {
    question: 'Comment fonctionne le Chat IA avancé ?',
    answer: 'Le Chat IA avancé utilise une intelligence artificielle de pointe pour des conversations naturelles, avec correction en temps réel et suggestions personnalisées.',
  },
]

// ─── Sparkle Component ──────────────────────────────────────────────────────

function Sparkle({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={style}
      variants={sparkleVariants}
      animate="animate"
    >
      <Sparkles className="h-4 w-4 text-yoel-gold" />
    </motion.div>
  )
}

// ─── FAQ Item Component ─────────────────────────────────────────────────────

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="rounded-xl border border-border/50 bg-muted/20 overflow-hidden">
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

// ─── Main Component ─────────────────────────────────────────────────────────

export default function PremiumPage() {
  const { user, goBack, navigate } = useAppStore()
  const isPremium = user?.isPremium ?? false

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

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
          <Button variant="ghost" size="icon" onClick={() => navigate('dashboard')} className="shrink-0 text-muted-foreground hover:text-yoel-red">
            <Home className="h-4 w-4" />
          </Button>
          <h1 className="text-xl font-bold gradient-text-premium">YOELANG Premium</h1>
        </motion.div>

        {isPremium ? (
          /* ─── Already Premium View ────────────────────────────────────── */
          <motion.div variants={itemVariants}>
            <Card className="glass border-0 overflow-hidden">
              <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-yoel-gold to-amber-600 text-4xl shadow-xl"
                >
                  👑
                </motion.div>
                <h2 className="text-2xl font-bold gradient-text-premium">
                  Vous êtes déjà Premium ! 🎉
                </h2>
                <p className="text-sm text-muted-foreground max-w-md">
                  Profitez de toutes les fonctionnalités Premium sans limite.
                  Merci de votre soutien !
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-4">
                  {FEATURES.slice(0, 4).map((f) => (
                    <div key={f.name} className="flex items-center gap-2 rounded-xl bg-yoel-gold/5 p-3 border border-yoel-gold/10">
                      <Check className="h-4 w-4 text-yoel-green shrink-0" />
                      <span className="text-xs font-medium">{f.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <>
            {/* ─── Hero Section ───────────────────────────────────────────── */}
            <motion.div variants={itemVariants}>
              <Card className="glass border-0 overflow-hidden relative">
                {/* Sparkle effects */}
                <Sparkle style={{ top: '10%', left: '5%' }} />
                <Sparkle style={{ top: '20%', right: '8%' }} />
                <Sparkle style={{ bottom: '15%', left: '12%' }} />
                <Sparkle style={{ bottom: '25%', right: '5%' }} />
                <Sparkle style={{ top: '50%', left: '50%' }} />

                <CardContent className="relative flex flex-col items-center gap-4 p-8 text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-yoel-gold to-amber-600 text-4xl shadow-xl"
                  >
                    👑
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl font-bold gradient-text-premium">
                    Débloquez tout le potentiel
                  </h2>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Accédez à des exercices illimités, un Chat IA avancé, la reconnaissance vocale
                    et bien plus encore pour accélérer votre apprentissage.
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="h-4 w-4 text-yoel-gold fill-yoel-gold" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">+10 000 membres Premium</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ─── Feature Comparison Table ──────────────────────────────── */}
            <motion.div variants={itemVariants}>
              <Card className="glass border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yoel-gold" />
                    Comparaison des fonctionnalités
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Header */}
                  <div className="grid grid-cols-3 gap-2 mb-3 px-2">
                    <div />
                    <div className="text-center text-sm font-medium text-muted-foreground">Gratuit</div>
                    <div className="text-center">
                      <Badge className="bg-yoel-gold/15 text-yoel-gold border-0 text-xs">
                        <Crown className="h-3 w-3 mr-1" />
                        Premium
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {FEATURES.map((feature, idx) => {
                      const Icon = feature.icon
                      return (
                        <motion.div
                          key={feature.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          className="grid grid-cols-3 gap-2 items-center rounded-xl p-3 hover:bg-muted/20 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
                            <span className="text-sm">{feature.name}</span>
                          </div>
                          <div className="flex justify-center">
                            {feature.free ? (
                              <Check className="h-5 w-5 text-yoel-green" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground/50" />
                            )}
                          </div>
                          <div className="flex justify-center">
                            {feature.premium ? (
                              <Check className="h-5 w-5 text-yoel-green" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground/50" />
                            )}
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ─── Pricing Cards ─────────────────────────────────────────── */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PLANS.map((plan, idx) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 * idx, type: 'spring' }}
                  >
                    <Card
                      className={`relative overflow-hidden border-0 h-full flex flex-col cursor-pointer transition-all ${
                        plan.recommended
                          ? 'glass ring-2 ring-yoel-gold/50 shadow-lg'
                          : selectedPlan === plan.id
                          ? 'glass ring-2 ring-yoel-red/50'
                          : 'glass'
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.recommended && (
                        <div className="absolute top-0 right-0">
                          <div className="bg-gradient-to-r from-yoel-gold to-amber-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                            RECOMMANDÉ
                          </div>
                        </div>
                      )}
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{plan.name}</CardTitle>
                        {plan.savings && (
                          <Badge className="w-fit bg-yoel-green/15 text-yoel-green border-0 text-[10px]">
                            Économisez {plan.savings}
                          </Badge>
                        )}
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <div className="mb-4">
                          <span className="text-3xl font-bold gradient-text-premium">
                            {plan.price}€
                          </span>
                          <span className="text-sm text-muted-foreground">{plan.period}</span>
                          {plan.yearlyPrice && (
                            <p className="text-xs text-muted-foreground mt-1">
                              soit {plan.yearlyPrice}
                            </p>
                          )}
                        </div>

                        <div className="flex-1" />

                        <Button
                          className={`w-full rounded-xl ${
                            plan.recommended
                              ? 'bg-gradient-to-r from-yoel-red to-yoel-gold text-white hover:opacity-90'
                              : 'bg-yoel-red text-white hover:bg-yoel-red-dark'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedPlan(plan.id)
                          }}
                        >
                          Choisir
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ─── Money-back Guarantee ──────────────────────────────────── */}
            <motion.div variants={itemVariants}>
              <Card className="glass border-0 bg-yoel-green/5 border-yoel-green/10">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yoel-green/15">
                    <Shield className="h-6 w-6 text-yoel-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-yoel-green">Garantie 7 jours</h3>
                    <p className="text-sm text-muted-foreground">
                      Remboursement complet sans questions si vous n&apos;êtes pas satisfait.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ─── FAQ ───────────────────────────────────────────────────── */}
            <motion.div variants={itemVariants}>
              <Card className="glass border-0">
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

            {/* ─── Testimonial ───────────────────────────────────────────── */}
            <motion.div variants={itemVariants}>
              <Card className="glass border-0">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yoel-blue/20 to-yoel-red/20 text-3xl">
                      👩‍💻
                    </div>
                    <div>
                      <div className="flex items-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="h-3.5 w-3.5 text-yoel-gold fill-yoel-gold" />
                        ))}
                      </div>
                      <p className="text-sm text-foreground italic leading-relaxed mb-3">
                        &ldquo;Depuis que je suis passée Premium, ma progression a été incroyable.
                        Le Chat IA est comme avoir un prof particulier 24/7, et les exercices
                        illimités me permettent de m&apos;entraîner autant que je veux. Je recommande à 100% !&rdquo;
                      </p>
                      <div>
                        <p className="text-sm font-semibold">Marie L.</p>
                        <p className="text-xs text-muted-foreground">Membre Premium · Niveau B1</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  )
}
