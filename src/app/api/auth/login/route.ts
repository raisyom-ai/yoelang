import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email et mot de passe requis' },
        { status: 400 }
      )
    }

    const user = await db.user.findUnique({ where: { email } })

    if (!user) {
      return NextResponse.json(
        { error: 'Email ou mot de passe incorrect' },
        { status: 401 }
      )
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
      return NextResponse.json(
        { error: 'Email ou mot de passe incorrect' },
        { status: 401 }
      )
    }

    const { password: _password, ...userWithoutPassword } = user
    void _password

    return NextResponse.json({
      success: true,
      user: {
        ...userWithoutPassword,
        level: user.level || 'A1',
        xp: user.xp || 0,
        streak: user.streak || 0,
        coins: user.coins || 0,
        isPremium: user.isPremium || false,
        dailyGoal: user.dailyGoal ?? 0,
        notifications: user.notifications ?? true,
        darkMode: user.darkMode ?? false,
        soundEnabled: user.soundEnabled ?? true,
      },
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
