import { db } from '../src/lib/db'
import bcrypt from 'bcryptjs'

async function main() {
  const adminEmail = 'admin@yoelang.com'
  const adminPassword = 'admin2025'

  const existing = await db.user.findUnique({ where: { email: adminEmail } })

  if (existing) {
    // Update existing user to admin role
    await db.user.update({
      where: { email: adminEmail },
      data: { role: 'admin' },
    })
    console.log(`✅ Utilisateur ${adminEmail} mis à jour en admin`)
  } else {
    const hashedPassword = await bcrypt.hash(adminPassword, 10)
    await db.user.create({
      data: {
        email: adminEmail,
        name: 'Admin YOELANG',
        password: hashedPassword,
        role: 'admin',
        level: 'C2',
        xp: 0,
        streak: 0,
        coins: 0,
        isPremium: true,
        premiumPlan: 'integral',
        dailyGoal: 20,
      },
    })
    console.log(`✅ Admin créé: ${adminEmail} / ${adminPassword}`)
  }
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect())
