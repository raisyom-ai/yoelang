import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// ─── Shop Items definition (hardcoded — synced to DB) ───────────────────────

const SHOP_ITEMS_DEF = [
  { itemId: 'streak_saver', name: 'Sauveur de série', description: 'Protège votre série pendant 1 jour', icon: '🛡️', category: 'protection', price: 50, duration: 24 },
  { itemId: 'xp_boost', name: 'Boost XP x2', description: 'Double vos XP pendant 24 heures', icon: '⚡', category: 'boost', price: 100, duration: 24 },
  { itemId: 'heart_refill', name: 'Recharge de vie', description: '3 vies supplémentaires pour les exercices', icon: '❤️', category: 'boost', price: 30, duration: 0 },
  { itemId: 'theme_ocean', name: 'Thème Océan', description: "Thème bleu océan pour l'interface", icon: '🌊', category: 'cosmetic', price: 200, duration: 0 },
  { itemId: 'theme_forest', name: 'Thème Forêt', description: 'Thème vert forêt pour l\'interface', icon: '🌲', category: 'cosmetic', price: 200, duration: 0 },
  { itemId: 'theme_sunset', name: 'Thème Coucher de soleil', description: 'Thème orange et doré', icon: '🌅', category: 'cosmetic', price: 200, duration: 0 },
  { itemId: 'avatar_ninja', name: 'Avatar Ninja', description: 'Avatar style ninja 🥷', icon: '🥷', category: 'cosmetic', price: 150, duration: 0 },
  { itemId: 'avatar_wizard', name: 'Avatar Sorcier', description: 'Avatar style sorcier 🧙', icon: '🧙', category: 'cosmetic', price: 150, duration: 0 },
  { itemId: 'avatar_astronaut', name: 'Avatar Astronaute', description: 'Avatar style astronaute 🧑‍🚀', icon: '🧑‍🚀', category: 'cosmetic', price: 150, duration: 0 },
  { itemId: 'badge_diamond', name: 'Badge Diamant', description: 'Badge exclusif diamant sur votre profil', icon: '💎', category: 'cosmetic', price: 300, duration: 0 },
  { itemId: 'lesson_unlock', name: 'Déblocage de leçon', description: 'Débloque une leçon premium gratuitement', icon: '🔓', category: 'boost', price: 75, duration: 0 },
]

/**
 * Ensure all shop items exist in the database.
 * Uses upsert on the unique `itemId` field so it's safe to call repeatedly.
 */
async function ensureShopItems() {
  for (const item of SHOP_ITEMS_DEF) {
    await db.shopItem.upsert({
      where: { itemId: item.itemId },
      update: {
        name: item.name,
        description: item.description,
        icon: item.icon,
        category: item.category,
        price: item.price,
        duration: item.duration,
      },
      create: {
        itemId: item.itemId,
        name: item.name,
        description: item.description,
        icon: item.icon,
        category: item.category,
        price: item.price,
        duration: item.duration,
      },
    })
  }
}

// ─── GET: Return shop items + user's purchases ──────────────────────────────

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get('userId')

    // Sync items to DB (idempotent)
    await ensureShopItems()

    // Fetch all active shop items from DB
    const dbItems = await db.shopItem.findMany({
      where: { active: true },
      orderBy: [{ category: 'asc' }, { price: 'asc' }],
    })

    const items = dbItems.map((i) => ({
      id: i.itemId,
      name: i.name,
      description: i.description,
      icon: i.icon,
      category: i.category,
      price: i.price,
      duration: i.duration,
    }))

    // Fetch user's purchases if authenticated
    let purchases: { itemId: string; purchasedAt: string; expiresAt: string | null }[] = []
    if (userId) {
      const dbPurchases = await db.shopPurchase.findMany({
        where: { userId },
        select: { itemId: true, purchasedAt: true, expiresAt: true },
        orderBy: { purchasedAt: 'desc' },
      })
      purchases = dbPurchases.map((p) => ({
        itemId: p.itemId,
        purchasedAt: p.purchasedAt.toISOString(),
        expiresAt: p.expiresAt?.toISOString() ?? null,
      }))
    }

    return NextResponse.json({
      success: true,
      items,
      purchases,
    })
  } catch (error) {
    console.error('Shop GET error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

// ─── POST: Purchase an item ─────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const { userId, itemId } = await req.json()

    if (!userId || !itemId) {
      return NextResponse.json(
        { error: 'userId et itemId sont requis' },
        { status: 400 },
      )
    }

    // Find the shop item in DB
    const shopItem = await db.shopItem.findUnique({ where: { itemId } })
    if (!shopItem || !shopItem.active) {
      return NextResponse.json(
        { error: 'Article introuvable' },
        { status: 404 },
      )
    }

    // Get user
    const user = await db.user.findUnique({ where: { id: userId } })
    if (!user) {
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 404 },
      )
    }

    // Check balance
    if (user.coins < shopItem.price) {
      return NextResponse.json(
        { error: 'Pièces insuffisantes', code: 'INSUFFICIENT_COINS' },
        { status: 400 },
      )
    }

    // Check if already purchased (permanent items only — duration === 0)
    if (shopItem.duration === 0) {
      const existingPurchase = await db.shopPurchase.findFirst({
        where: { userId, itemId },
      })
      if (existingPurchase) {
        return NextResponse.json(
          { error: 'Article déjà acheté', code: 'ALREADY_OWNED' },
          { status: 400 },
        )
      }
    }

    // Calculate expiry
    const expiresAt = shopItem.duration > 0
      ? new Date(Date.now() + shopItem.duration * 60 * 60 * 1000)
      : null

    // Create purchase & deduct coins in a transaction
    const [purchase] = await db.$transaction([
      db.shopPurchase.create({
        data: {
          userId,
          itemId,
          expiresAt,
        },
      }),
      db.user.update({
        where: { id: userId },
        data: { coins: { decrement: shopItem.price } },
      }),
    ])

    // Fetch updated user for response
    const updatedUser = await db.user.findUnique({
      where: { id: userId },
      select: { coins: true },
    })

    return NextResponse.json({
      success: true,
      purchase: {
        id: purchase.id,
        itemId: purchase.itemId,
        purchasedAt: purchase.purchasedAt.toISOString(),
        expiresAt: purchase.expiresAt?.toISOString() ?? null,
      },
      remainingCoins: updatedUser?.coins ?? 0,
    })
  } catch (error) {
    console.error('Shop POST error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
