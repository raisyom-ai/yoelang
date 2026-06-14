import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// ─── Challenge Pool ────────────────────────────────────────────────────────

interface ChallengeTemplate {
  question: string
  options: string[]
  correctIndex: number
  xpReward: number
}

const CHALLENGE_POOL: Record<string, ChallengeTemplate[]> = {
  grammar: [
    { question: 'Complétez : "She ___ to school every day."', options: ['go', 'goes', 'going', 'gone'], correctIndex: 1, xpReward: 15 },
    { question: 'Complétez : "They ___ playing football now."', options: ['is', 'are', 'am', 'was'], correctIndex: 1, xpReward: 15 },
    { question: 'Complétez : "I ___ a book yesterday."', options: ['read', 'reads', 'reading', 'readed'], correctIndex: 0, xpReward: 15 },
    { question: 'Complétez : "He ___ not like coffee."', options: ['do', 'does', 'is', 'has'], correctIndex: 1, xpReward: 15 },
    { question: 'Complétez : "We ___ going to the park tomorrow."', options: ['are', 'is', 'am', 'was'], correctIndex: 0, xpReward: 15 },
    { question: 'Complétez : "The cat ___ sleeping on the sofa."', options: ['is', 'are', 'am', 'were'], correctIndex: 0, xpReward: 15 },
    { question: 'Complétez : "___ you like pizza?"', options: ['Do', 'Does', 'Are', 'Is'], correctIndex: 0, xpReward: 10 },
    { question: 'Complétez : "She has ___ to Paris."', options: ['been', 'being', 'be', 'was'], correctIndex: 0, xpReward: 15 },
  ],
  vocabulary: [
    { question: 'Que signifie "beautiful" en français ?', options: ['Beau/Belle', 'Grand(e)', 'Petit(e)', 'Fort(e)'], correctIndex: 0, xpReward: 10 },
    { question: 'Traduisez : "livre"', options: ['Book', 'Look', 'Cook', 'Hook'], correctIndex: 0, xpReward: 10 },
    { question: 'Quel est le contraire de "happy" ?', options: ['Sad', 'Angry', 'Tired', 'Hungry'], correctIndex: 0, xpReward: 10 },
    { question: 'Que signifie "water" en français ?', options: ['Feu', 'Air', 'Eau', 'Terre'], correctIndex: 2, xpReward: 10 },
    { question: 'Traduisez : "maison"', options: ['House', 'Mouse', 'Horse', 'Hour'], correctIndex: 0, xpReward: 10 },
    { question: 'Que signifie "teacher" en français ?', options: ['Professeur', 'Étudiant', 'Médecin', 'Chef'], correctIndex: 0, xpReward: 10 },
    { question: 'Quel mot signifie "soleil" en anglais ?', options: ['Sun', 'Moon', 'Star', 'Cloud'], correctIndex: 0, xpReward: 10 },
    { question: 'Traduisez : "friend"', options: ['Ami(e)', 'Ennemi(e)', 'Famille', 'Voisin(e)'], correctIndex: 0, xpReward: 10 },
  ],
  translation: [
    { question: 'Traduisez : "Je mange une pomme."', options: ['I eat an apple', 'I eat a apple', 'I eating an apple', 'I am eat apple'], correctIndex: 0, xpReward: 15 },
    { question: "Traduisez : \"Il fait beau aujourd'hui.\"", options: ['The weather is nice today', 'He does nice today', 'It makes beautiful today', 'The day is good'], correctIndex: 0, xpReward: 15 },
    { question: 'Traduisez : "Nous allons au marché."', options: ['We go to the market', 'We are market', 'We going at market', 'We goes to market'], correctIndex: 0, xpReward: 15 },
    { question: 'Traduisez : "Elle aime danser."', options: ['She likes to dance', 'She like dancing', 'She love dance', 'She is like dance'], correctIndex: 0, xpReward: 15 },
    { question: 'Traduisez : "Où est la gare ?"', options: ['Where is the station?', 'Where is the train?', 'Where the station is?', 'Where are the station?'], correctIndex: 0, xpReward: 15 },
    { question: 'Traduisez : "Bonjour, comment allez-vous ?"', options: ['Hello, how are you?', 'Goodbye, see you!', 'Please, thank you', 'Yes, I am fine'], correctIndex: 0, xpReward: 15 },
  ],
  conjugaison: [
    { question: 'Conjuguez : "I ___ (to be) happy."', options: ['am', 'is', 'are', 'be'], correctIndex: 0, xpReward: 15 },
    { question: 'Conjuguez : "She ___ (to have) a cat."', options: ['has', 'have', 'having', 'had'], correctIndex: 0, xpReward: 15 },
    { question: 'Conjuguez : "They ___ (to go) to school."', options: ['go', 'goes', 'going', 'gone'], correctIndex: 0, xpReward: 15 },
    { question: 'Conjuguez : "He ___ (to work) every day."', options: ['works', 'work', 'working', 'worked'], correctIndex: 0, xpReward: 15 },
    { question: 'Conjuguez : "We ___ (to eat) dinner now."', options: ['are eating', 'is eating', 'eats', 'eat'], correctIndex: 0, xpReward: 20 },
    { question: 'Conjuguez : "You ___ (to study) English."', options: ['study', 'studies', 'studying', 'studys'], correctIndex: 0, xpReward: 15 },
  ],
}

// ─── Deterministic Hash ────────────────────────────────────────────────────

function simpleHash(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash)
}

// ─── Get today's date string ───────────────────────────────────────────────

function getTodayStr(): string {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

// ─── Generate daily challenges ─────────────────────────────────────────────

function generateDailyChallenges(dateStr: string) {
  const types = ['grammar', 'vocabulary', 'translation', 'conjugaison']

  // Pick 3 types deterministically from the date
  const dayHash = simpleHash(dateStr)
  const selectedTypes: string[] = []
  const typeOrder = [...types]
  for (let i = 0; i < 3; i++) {
    const idx = (dayHash + i) % typeOrder.length
    selectedTypes.push(typeOrder[idx])
    typeOrder.splice(idx, 1)
  }

  return selectedTypes.map((type) => {
    const pool = CHALLENGE_POOL[type]
    const typeHash = simpleHash(`${dateStr}_${type}`)
    const poolIndex = typeHash % pool.length
    const challenge = pool[poolIndex]

    return {
      id: `${dateStr}_${type}`,
      type,
      question: challenge.question,
      options: challenge.options,
      correctIndex: challenge.correctIndex,
      xpReward: challenge.xpReward,
    }
  })
}

// ─── GET: Fetch daily challenges ───────────────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    const dateStr = getTodayStr()
    const challenges = generateDailyChallenges(dateStr)

    // Check which challenges the user has already completed today
    let completedIds: string[] = []
    if (userId) {
      const completions = await db.challengeCompletion.findMany({
        where: {
          userId,
          challengeId: { in: challenges.map((c) => c.id) },
        },
        select: { challengeId: true },
      })
      completedIds = completions.map((c) => c.challengeId)
    }

    return NextResponse.json({
      success: true,
      date: dateStr,
      challenges,
      completedIds,
    })
  } catch (error) {
    console.error('Challenges GET error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch challenges' },
      { status: 500 }
    )
  }
}

// ─── POST: Submit a challenge answer ───────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, challengeId, answerIndex } = body as {
      userId: string
      challengeId: string
      answerIndex: number
    }

    if (!userId || !challengeId || answerIndex === undefined) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if already completed
    const existing = await db.challengeCompletion.findUnique({
      where: {
        userId_challengeId: { userId, challengeId },
      },
    })

    if (existing) {
      return NextResponse.json(
        { success: false, error: 'Challenge already completed', code: 'ALREADY_COMPLETED' },
        { status: 409 }
      )
    }

    // Reconstruct the challenge to verify the answer
    const dateStr = getTodayStr()
    const challenges = generateDailyChallenges(dateStr)
    const challenge = challenges.find((c) => c.id === challengeId)

    if (!challenge) {
      return NextResponse.json(
        { success: false, error: 'Challenge not found' },
        { status: 404 }
      )
    }

    const isCorrect = answerIndex === challenge.correctIndex

    if (!isCorrect) {
      return NextResponse.json({
        success: false,
        correct: false,
        correctIndex: challenge.correctIndex,
        correctAnswer: challenge.options[challenge.correctIndex],
        error: 'Wrong answer',
      })
    }

    // Correct answer — save completion and add XP
    await db.challengeCompletion.create({
      data: { userId, challengeId },
    })

    const updatedUser = await db.user.update({
      where: { id: userId },
      data: { xp: { increment: challenge.xpReward } },
      select: { xp: true },
    })

    // Check if all 3 challenges are completed for bonus
    const todayCompletions = await db.challengeCompletion.findMany({
      where: {
        userId,
        challengeId: { in: challenges.map((c) => c.id) },
      },
    })

    let bonusXp = 0
    const allCompleted = todayCompletions.length === 3
    if (allCompleted) {
      bonusXp = 30
      await db.user.update({
        where: { id: userId },
        data: { xp: { increment: bonusXp } },
      })
    }

    return NextResponse.json({
      success: true,
      correct: true,
      xpEarned: challenge.xpReward,
      bonusXp,
      allCompleted,
      totalXp: updatedUser.xp + (allCompleted ? bonusXp : 0),
    })
  } catch (error) {
    console.error('Challenges POST error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit answer' },
      { status: 500 }
    )
  }
}
