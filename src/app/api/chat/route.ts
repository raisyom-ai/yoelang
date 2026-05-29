import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

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

let zaiInstance: Awaited<ReturnType<typeof ZAI.create>> | null = null

async function getZAI() {
  if (!zaiInstance) {
    zaiInstance = await ZAI.create()
  }
  return zaiInstance
}

export async function POST(req: NextRequest) {
  try {
    const { message, userId, history } = await req.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message requis' },
        { status: 400 }
      )
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
