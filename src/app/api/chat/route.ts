import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { db } from '@/lib/db'
import { chatLimiter, getClientIP } from '@/lib/rate-limit'
import { rateLimitResponse, verifyPremium } from '@/lib/api-utils'

const SYSTEM_PROMPT = `You are YOELANG AI, a friendly and professional English tutor for French speakers. Your name is Yoel.

Rules:
- Help users learn English from beginner (A1) to advanced (C2) level
- Always respond in English to encourage practice, but you can use French for explanations if needed
- Be encouraging, patient, and supportive
- Correct mistakes gently and explain why
- Provide examples and context
- Use simple language for beginners, more complex for advanced
- When teaching grammar, give clear rules with examples
- When teaching vocabulary, provide translations, pronunciation tips, and example sentences
- Celebrate progress and achievements
- Keep responses concise but informative
- If the user asks in French, respond in English but acknowledge their question`

/** Chat message limits per premium plan (server-side enforcement) */
const CHAT_LIMITS: Record<string, number> = {
  essentiel: 50,   // 50 messages per month
  complet: Infinity,
  integral: Infinity,
}

let zaiInstance: Awaited<ReturnType<typeof ZAI.create>> | null = null

async function getZAI() {
  if (!zaiInstance) {
    zaiInstance = await ZAI.create()
  }
  return zaiInstance
}

export async function POST(req: NextRequest) {
  // ─── Rate limiting ────────────────────────────────────────────────
  const clientIP = getClientIP(req)
  if (!chatLimiter.check(`chat:${clientIP}`)) {
    return rateLimitResponse()
  }

  try {
    const { message, userId, history } = await req.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message requis' },
        { status: 400 }
      )
    }

    if (!userId) {
      return NextResponse.json(
        { error: 'Identifiant utilisateur requis', code: 'AUTH_REQUIRED' },
        { status: 401 }
      )
    }

    // ─── Server-side premium verification ────────────────────────────
    const premiumCheck = await verifyPremium(userId, 'essentiel')
    if (!premiumCheck.allowed) {
      return premiumCheck.response
    }

    // ─── Chat message limit enforcement (monthly) ───────────────────
    const user = premiumCheck.user
    if (user.premiumPlan && CHAT_LIMITS[user.premiumPlan] !== Infinity) {
      const limit = CHAT_LIMITS[user.premiumPlan]
      // Count messages this month from the database
      const now = new Date()
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
      const messagesThisMonth = await countUserMessagesThisMonth(userId, startOfMonth)
      if (messagesThisMonth >= limit) {
        return NextResponse.json(
          {
            error: `Vous avez atteint votre limite de ${limit} messages ce mois. Passez au plan Complet pour des messages illimités.`,
            code: 'CHAT_LIMIT_REACHED',
            limit,
            used: messagesThisMonth,
          },
          { status: 403 }
        )
      }
    }

    const zai = await getZAI()

    // Build conversation messages
    const messages: Array<{ role: string; content: string }> = [
      { role: 'assistant', content: SYSTEM_PROMPT },
    ]

    // Add history if provided
    if (history && Array.isArray(history)) {
      for (const msg of history.slice(-10)) {
        messages.push({
          role: msg.role === 'user' ? 'user' : 'assistant',
          content: msg.content,
        })
      }
    }

    // Add current message
    messages.push({ role: 'user', content: message })

    const completion = await zai.chat.completions.create({
      messages: messages as Array<{ role: 'assistant' | 'user'; content: string }>,
      thinking: { type: 'disabled' },
    })

    const aiResponse = completion.choices[0]?.message?.content || 
      "I'm sorry, I couldn't process that. Could you try again?"

    // Track the message count in the database for monthly limits
    await trackChatMessage(userId)

    return NextResponse.json({
      success: true,
      response: aiResponse,
    })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json(
      { error: 'Erreur de communication avec l\'assistant IA' },
      { status: 500 }
    )
  }
}

// ─── Chat message tracking (server-side, monthly) ──────────────────

/**
 * Count user's chat messages for the current month.
 * Uses the ChatMessage table in the database.
 */
async function countUserMessagesThisMonth(userId: string, startOfMonth: Date): Promise<number> {
  try {
    const count = await db.chatMessage.count({
      where: {
        userId,
        createdAt: { gte: startOfMonth },
      },
    })
    return count
  } catch {
    // If ChatMessage table doesn't exist yet, return 0 (allow message)
    return 0
  }
}

/**
 * Track a chat message in the database for monthly limit enforcement.
 */
async function trackChatMessage(userId: string): Promise<void> {
  try {
    await db.chatMessage.create({
      data: { userId, role: 'user', content: '' },
    })
  } catch {
    // Silently ignore if tracking fails — don't block the user
  }
}
