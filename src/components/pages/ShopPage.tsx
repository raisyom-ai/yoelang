'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Home, Coins, Check, Loader2, ShoppingBag, Shield, Zap, Sparkles } from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'

// ─── Types ───────────────────────────────────────────────────────────────────

interface ShopItem {
  id: string
  name: string
  description: string
  icon: string
  category: string
  price: number
  duration: number
}

interface Purchase {
  itemId: string
  purchasedAt: string
  expiresAt: string | null
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

// ─── Category Config ─────────────────────────────────────────────────────────

const CATEGORY_CONFIG: Record<string, { label: string; icon: React.ReactNode; color: string; bg: string }> = {
  boost: {
    label: 'Boosts',
    icon: <Zap className="h-4 w-4" />,
    color: 'text-yoel-gold',
    bg: 'bg-yoel-gold/15',
  },
  protection: {
    label: 'Protection',
    icon: <Shield className="h-4 w-4" />,
    color: 'text-yoel-blue',
    bg: 'bg-yoel-blue/15',
  },
  cosmetic: {
    label: 'Cosmétiques',
    icon: <Sparkles className="h-4 w-4" />,
    color: 'text-yoel-primary',
    bg: 'bg-yoel-primary/15',
  },
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function ShopPage() {
  const { user, goBack, navigate } = useAppStore()
  const [items, setItems] = useState<ShopItem[]>([])
  const [purchases, setPurchases] = useState<Purchase[]>([])
  const [loading, setLoading] = useState(true)
  const [purchasingId, setPurchasingId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('boost')

  const userId = user?.id ?? null
  const coins = user?.coins ?? 0

  // ─── Fetch shop data ────────────────────────────────────────────────────
  const fetchShopData = useCallback(async () => {
    try {
      const params = userId ? `?userId=${userId}` : ''
      const res = await fetch(`/api/shop${params}`)
      if (!res.ok) throw new Error('Failed to fetch shop data')
      const data = await res.json()
      if (data.success) {
        setItems(data.items)
        setPurchases(data.purchases)
      }
    } catch (err) {
      console.error('Shop fetch error:', err)
      toast.error('Impossible de charger la boutique')
    } finally {
      setLoading(false)
    }
  }, [userId])

  useEffect(() => {
    fetchShopData()
  }, [fetchShopData])

  // ─── Check if item is owned ─────────────────────────────────────────────
  const isOwned = useCallback(
    (itemId: string, itemDuration: number) => {
      const purchase = purchases.find((p) => p.itemId === itemId)
      if (!purchase) return false
      // Permanent item
      if (itemDuration === 0) return true
      // Timed item — check if not expired
      if (purchase.expiresAt) {
        return new Date(purchase.expiresAt) > new Date()
      }
      return true
    },
    [purchases],
  )

  // ─── Purchase handler ───────────────────────────────────────────────────
  const handlePurchase = async (item: ShopItem) => {
    if (!userId) {
      toast.error('Connectez-vous pour acheter')
      return
    }
    if (coins < item.price) {
      toast.error('Pièces insuffisantes ! Continuez vos leçons pour en gagner.')
      return
    }
    if (isOwned(item.id, item.duration)) {
      toast.info('Vous possédez déjà cet article')
      return
    }

    setPurchasingId(item.id)
    try {
      const res = await fetch('/api/shop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, itemId: item.id }),
      })
      const data = await res.json()

      if (!res.ok) {
        if (data.code === 'INSUFFICIENT_COINS') {
          toast.error('Pièces insuffisantes !')
        } else if (data.code === 'ALREADY_OWNED') {
          toast.info('Article déjà acheté')
        } else {
          toast.error(data.error || "Erreur lors de l'achat")
        }
        return
      }

      // Success — update local state
      toast.success(`${item.icon} ${item.name} acheté !`, {
        description: item.duration > 0
          ? `Valide pendant ${item.duration}h`
          : 'Ajouté à votre collection',
      })

      // Update purchases
      if (data.purchase) {
        setPurchases((prev) => [...prev, data.purchase])
      }

      // Update user coins in store
      if (data.remainingCoins !== undefined) {
        useAppStore.setState((state) => ({
          user: state.user ? { ...state.user, coins: data.remainingCoins } : null,
        }))
      }
    } catch (err) {
      console.error('Purchase error:', err)
      toast.error("Erreur lors de l'achat")
    } finally {
      setPurchasingId(null)
    }
  }

  // ─── Filter items by category ──────────────────────────────────────────
  const filteredItems = (category: string) =>
    items.filter((item) => item.category === category)

  // ─── Loading state ──────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 text-yoel-primary animate-spin" />
          <p className="text-sm text-muted-foreground">Chargement de la boutique…</p>
        </div>
      </div>
    )
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
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('dashboard')}
            className="shrink-0 text-muted-foreground hover:text-yoel-primary h-8 w-8"
          >
            <Home className="h-4 w-4" />
          </Button>
          <h1 className="text-xl font-bold gradient-text-primary ml-1 flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Boutique
          </h1>
          <div className="flex-1" />
          {/* Coin balance */}
          <div className="flex items-center gap-1.5 rounded-full bg-yoel-gold/10 px-3 py-1.5 border border-yoel-gold/20">
            <Coins className="h-4 w-4 text-yoel-gold" />
            <span className="text-sm font-bold text-yoel-gold">{coins}</span>
          </div>
        </div>
      </div>

      <motion.div
        className="mx-auto max-w-4xl space-y-6 p-4 lg:p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ─── Header Banner ─────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card overflow-hidden border-0">
            <div className="bg-gradient-to-r from-yoel-gold/15 via-yoel-primary/10 to-yoel-blue/10 p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yoel-gold to-amber-600 text-white text-2xl shadow-lg">
                  🪙
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-lg gradient-text-primary">Boutique de pièces</h2>
                  <p className="text-sm text-muted-foreground">
                    Dépensez vos pièces pour des bonus, des thèmes et des avatars exclusifs !
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* ─── Category Tabs ──────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full grid grid-cols-3 rounded-xl h-auto p-1">
              {Object.entries(CATEGORY_CONFIG).map(([key, config]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="rounded-lg py-2 data-[state=active]:shadow-sm gap-1.5"
                >
                  {config.icon}
                  <span className="text-xs sm:text-sm">{config.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(CATEGORY_CONFIG).map(([category, config]) => (
              <TabsContent key={category} value={category} className="mt-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  {filteredItems(category).map((item) => {
                    const owned = isOwned(item.id, item.duration)
                    const canAfford = coins >= item.price
                    const isPurchasing = purchasingId === item.id

                    return (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Card className={`glass-card transition-all ${owned ? 'ring-1 ring-yoel-green/30' : ''}`}>
                          <CardContent className="p-4">
                            <div className="flex gap-3">
                              {/* Icon */}
                              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${config.bg}`}>
                                {item.icon}
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                  <div className="min-w-0">
                                    <h3 className="font-semibold text-sm truncate">{item.name}</h3>
                                    <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>

                                {/* Duration badge */}
                                {item.duration > 0 && !owned && (
                                  <Badge variant="secondary" className="text-[10px] mt-1.5 px-1.5 py-0">
                                    {item.duration}h
                                  </Badge>
                                )}

                                {/* Price & Buy */}
                                <div className="flex items-center justify-between mt-3">
                                  <div className="flex items-center gap-1">
                                    <Coins className="h-3.5 w-3.5 text-yoel-gold" />
                                    <span className={`text-sm font-bold ${canAfford || owned ? 'text-yoel-gold' : 'text-destructive'}`}>
                                      {item.price}
                                    </span>
                                  </div>

                                  {owned ? (
                                    <Badge className="bg-yoel-green/15 text-yoel-green border-0 gap-1 text-xs">
                                      <Check className="h-3 w-3" />
                                      Acheté
                                    </Badge>
                                  ) : (
                                    <Button
                                      size="sm"
                                      className="rounded-full h-8 px-4 text-xs gap-1.5 bg-yoel-primary hover:bg-yoel-primary/90"
                                      disabled={!canAfford || isPurchasing}
                                      onClick={() => handlePurchase(item)}
                                    >
                                      {isPurchasing ? (
                                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                                      ) : (
                                        <>
                                          <Coins className="h-3.5 w-3.5" />
                                          Acheter
                                        </>
                                      )}
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}

                  {filteredItems(category).length === 0 && (
                    <div className="col-span-2 text-center py-12">
                      <div className="text-4xl mb-2">🛒</div>
                      <p className="text-sm text-muted-foreground">
                        Aucun article dans cette catégorie
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* ─── Earn More Coins CTA ────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <Card
            className="overflow-hidden border-0 cursor-pointer bg-gradient-to-r from-yoel-primary/10 via-yoel-gold/5 to-yoel-green/10"
            onClick={() => navigate('dashboard')}
          >
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yoel-primary to-yoel-green text-white text-xl shadow-lg">
                📚
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm gradient-text-primary">
                  Gagner plus de pièces
                </h3>
                <p className="text-xs text-muted-foreground">
                  Complétez des leçons et des défis quotidiens pour gagner des pièces
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
