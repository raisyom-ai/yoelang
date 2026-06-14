# Task 2-a: Shop Builder Agent

## Task: Build Coin Shop (Boutique de pièces) feature

## Work Completed

### 1. API Route: `/src/app/api/shop/route.ts`
- **GET endpoint**: Returns all active shop items from DB + user's purchases
  - Syncs `SHOP_ITEMS_DEF` (11 items) to DB via `upsert` on each GET call (idempotent)
  - Items are ordered by category then price
  - Purchases include `itemId`, `purchasedAt`, `expiresAt`
- **POST endpoint**: Purchase an item
  - Validates userId, itemId, user balance, and ownership
  - Permanent items (duration=0) cannot be repurchased
  - Timed items (duration>0) can be repurchased after expiry
  - Uses Prisma `$transaction` for atomic coin deduction + purchase creation
  - Returns new purchase + remaining coin balance

### 2. ShopPage Component: `/src/components/pages/ShopPage.tsx`
- Sticky top bar with back button, "Boutique" title, and coin balance display
- Header banner with gradient styling
- 3 category tabs: Boosts (⚡), Protection (🛡️), Cosmétiques (✨)
- Each item card shows: emoji icon, name, description, duration badge (if timed), price, buy/owned status
- Already-owned permanent items show green ring + "Acheté" badge with checkmark
- Purchase flow with loading states and toast notifications (sonner)
- Updates store's user coins after successful purchase
- "Earn more coins" CTA card at bottom
- Uses `glass-card` styling, `gradient-text-primary`, yoel color tokens
- Framer-motion animations (containerVariants/itemVariants)

### 3. Page Registration: `/src/app/page.tsx`
- Added `ShopPage` dynamic import
- Added `'shop': ShopPage` to `pageComponents` map

### 4. Lint & DB
- All new/modified files pass ESLint
- DB schema already in sync (ShopItem + ShopPurchase models pre-existed in schema.prisma)
