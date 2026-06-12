'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, BookOpen, Dumbbell, MessageCircle, BarChart3,
  Moon, Sun, Bell, Flame, Coins, Star, ChevronRight,
  Volume2, Trophy, Clock, Target, Home, User, Settings,
  Zap, Award, Crown, ChevronDown, CheckCircle
} from 'lucide-react'
import { useAppStore, LEVELS, BADGES, DEMO_LESSONS, getRecommendedDailyGoal, calculateStreak, getWeekActivity, type PageId, type LessonHistoryEntry } from '@/lib/store'
import { getLessonContent, type VocabWord, type GrammarRule } from '@/lib/lesson-content'
import { speakWord } from '@/lib/speech-utils'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

// ─── Animation Variants ─────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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

const pulseVariants = {
  pulse: {
    scale: [1, 1.12, 1],
    transition: { duration: 0.6, repeat: Infinity, repeatDelay: 2 },
  },
}

// ─── Demo Data ──────────────────────────────────────────────────────────────

// Daily XP goal and earned are now dynamic — derived from the store

// ─── Daily Challenges — 3 per day, adapted to level, different every day ─────
interface Challenge {
  question: string
  options: string[]
  correctIndex: number
  xpReward: number
  type: 'grammar' | 'vocabulary' | 'translation' | 'conjugaison'
}

const CHALLENGE_POOL: Record<string, Challenge[]> = {
  A1: [
    // Grammar
    { question: 'Traduisez : "Elle ___ une pomme."', options: ['have', 'has', 'haves', 'having'], correctIndex: 1, xpReward: 15, type: 'grammar' },
    { question: 'Complétez : "I ___ a student."', options: ['am', 'is', 'are', 'be'], correctIndex: 0, xpReward: 15, type: 'grammar' },
    { question: 'Complétez : "We ___ from France."', options: ['comes', 'come', 'coming', 'comed'], correctIndex: 1, xpReward: 15, type: 'grammar' },
    { question: 'Complétez : "There ___ three cats."', options: ['is', 'are', 'am', 'be'], correctIndex: 1, xpReward: 15, type: 'grammar' },
    { question: 'Complétez : "He ___ not like coffee."', options: ['do', 'does', 'is', 'has'], correctIndex: 1, xpReward: 15, type: 'grammar' },
    { question: 'Complétez : "This is ___ apple."', options: ['a', 'an', 'the', 'some'], correctIndex: 1, xpReward: 15, type: 'grammar' },
    // Vocabulary
    { question: 'Quel mot signifie "chat" en anglais ?', options: ['Dog', 'Cat', 'Bird', 'Fish'], correctIndex: 1, xpReward: 10, type: 'vocabulary' },
    { question: 'Quel est le contraire de "big" ?', options: ['Tall', 'Small', 'Long', 'Wide'], correctIndex: 1, xpReward: 10, type: 'vocabulary' },
    { question: 'Que signifie "water" en français ?', options: ['Feu', 'Air', 'Eau', 'Terre'], correctIndex: 2, xpReward: 10, type: 'vocabulary' },
    { question: 'Quel mot signifie "livre" en anglais ?', options: ['Book', 'Look', 'Cook', 'Hook'], correctIndex: 0, xpReward: 10, type: 'vocabulary' },
    { question: 'Que signifie "happy" en français ?', options: ['Triste', 'Heureux', 'Fatigué', 'En colère'], correctIndex: 1, xpReward: 10, type: 'vocabulary' },
    { question: 'Quel mot signifie "maison" en anglais ?', options: ['Horse', 'House', 'Horse', 'Hour'], correctIndex: 1, xpReward: 10, type: 'vocabulary' },
    // Translation
    { question: 'Traduisez : "Bonjour, comment allez-vous ?"', options: ['Hello, how are you?', 'Goodbye, see you!', 'Please, thank you', 'Yes, I am fine'], correctIndex: 0, xpReward: 15, type: 'translation' },
    { question: "Traduisez : \"Je m'appelle Marie.\"", options: ['My name is Marie', 'I call Marie', 'Me is Marie', 'I am call Marie'], correctIndex: 0, xpReward: 15, type: 'translation' },
    { question: 'Traduisez : "Où est la gare ?"', options: ['Where is the station?', 'When is the train?', 'How is the bus?', 'What is the road?'], correctIndex: 0, xpReward: 15, type: 'translation' },
    { question: "Traduisez : \"Il fait beau aujourd'hui.\"", options: ['It is nice today', 'It is bad today', 'It is cold today', 'It is hot today'], correctIndex: 0, xpReward: 15, type: 'translation' },
    { question: 'Traduisez : "J\'ai faim."', options: ['I am hungry', 'I am angry', 'I am happy', 'I am thirsty'], correctIndex: 0, xpReward: 15, type: 'translation' },
    { question: 'Traduisez : "Elle est ma sœur."', options: ['She is my sister', 'She is my brother', 'He is my sister', 'She is my mother'], correctIndex: 0, xpReward: 15, type: 'translation' },
    // Conjugaison
    { question: 'Complétez : "She ___ to school every day."', options: ['go', 'goes', 'going', 'gone'], correctIndex: 1, xpReward: 15, type: 'conjugaison' },
    { question: 'Complétez : "They ___ playing football."', options: ['am', 'is', 'are', 'be'], correctIndex: 2, xpReward: 15, type: 'conjugaison' },
    { question: 'Complétez : "I ___ English right now."', options: ['learn', 'learns', 'am learning', 'learned'], correctIndex: 2, xpReward: 15, type: 'conjugaison' },
    { question: 'Complétez : "He ___ breakfast every morning."', options: ['eat', 'eats', 'eating', 'ate'], correctIndex: 1, xpReward: 15, type: 'conjugaison' },
    { question: 'Complétez : "We ___ to the cinema yesterday."', options: ['go', 'goes', 'went', 'going'], correctIndex: 2, xpReward: 15, type: 'conjugaison' },
    { question: 'Complétez : "She ___ TV at the moment."', options: ['watches', 'watch', 'is watching', 'watched'], correctIndex: 2, xpReward: 15, type: 'conjugaison' },
  ],
  A2: [
    // Grammar
    { question: 'Quel est le pluriel de "child" ?', options: ['Childs', 'Children', 'Childrens', 'Childes'], correctIndex: 1, xpReward: 15, type: 'grammar' },
    { question: 'Complétez : "I have been living here ___ 2010."', options: ['for', 'since', 'from', 'during'], correctIndex: 1, xpReward: 20, type: 'grammar' },
    { question: 'Quel mot est un adjectif ?', options: ['Quickly', 'Beautiful', 'Running', 'Happiness'], correctIndex: 1, xpReward: 15, type: 'grammar' },
    { question: 'Complétez : "She is ___ than her sister."', options: ['tall', 'taller', 'tallest', 'more tall'], correctIndex: 1, xpReward: 20, type: 'grammar' },
    { question: 'Complétez : "I have ___ seen that movie."', options: ['ever', 'never', 'already', 'yet'], correctIndex: 2, xpReward: 20, type: 'grammar' },
    { question: 'Complétez : "___ you like some coffee?"', options: ['Do', 'Would', 'Are', 'Have'], correctIndex: 1, xpReward: 20, type: 'grammar' },
    // Vocabulary
    { question: 'Que signifie "schedule" en français ?', options: ['Horloge', 'Emploi du temps', 'Calendrier', 'Montre'], correctIndex: 1, xpReward: 15, type: 'vocabulary' },
    { question: 'Que signifie "improve" en français ?', options: ['Ignorer', 'Améliorer', 'Imiter', 'Importer'], correctIndex: 1, xpReward: 15, type: 'vocabulary' },
    { question: 'Quel mot signifie "voisin" en anglais ?', options: ['Neighbour', 'Nephew', 'Neither', 'Narrow'], correctIndex: 0, xpReward: 15, type: 'vocabulary' },
    { question: 'Que signifie "comfortable" en français ?', options: ['Gênant', 'Confortable', 'Commun', 'Compliqué'], correctIndex: 1, xpReward: 15, type: 'vocabulary' },
    { question: 'Quel mot désigne un "conseil" en anglais ?', options: ['Advise', 'Advice', 'Advance', 'Adverse'], correctIndex: 1, xpReward: 15, type: 'vocabulary' },
    { question: 'Que signifie "discover" en français ?', options: ['Discuter', 'Découvrir', 'Disparaître', 'Disposer'], correctIndex: 1, xpReward: 15, type: 'vocabulary' },
    // Translation
    { question: 'Traduisez : "Je voudrais une tasse de thé."', options: ['I would like a cup of tea', 'I want a glass of tea', 'I like a tea cup', 'I will have tea'], correctIndex: 0, xpReward: 20, type: 'translation' },
    { question: "Traduisez : \"Nous avons visité Paris l'année dernière.\"", options: ['We visited Paris last year', 'We visit Paris next year', 'We are visiting Paris now', 'We will visit Paris'], correctIndex: 0, xpReward: 20, type: 'translation' },
    { question: "Traduisez : \"Pourriez-vous m'aider, s'il vous plaît ?\"", options: ['Could you help me, please?', 'Can you help I please?', 'Would you helping me?', 'Do you help me please?'], correctIndex: 0, xpReward: 20, type: 'translation' },
    { question: 'Traduisez : "Il fait froid en hiver."', options: ['It is cold in winter', 'It is hot in winter', 'It is cold in summer', 'It is warm in winter'], correctIndex: 0, xpReward: 20, type: 'translation' },
    { question: 'Traduisez : "Je dois partir maintenant."', options: ['I must leave now', 'I can leave now', 'I will leave before', 'I should leaving now'], correctIndex: 0, xpReward: 20, type: 'translation' },
    { question: 'Traduisez : "Elle est plus intelligente que lui."', options: ['She is smarter than him', 'She is more smart that him', 'She is smartest than him', 'She is as smart than him'], correctIndex: 0, xpReward: 20, type: 'translation' },
    // Conjugaison
    { question: 'Traduisez : "She ___ to the store yesterday."', options: ['go', 'goes', 'went', 'going'], correctIndex: 2, xpReward: 20, type: 'conjugaison' },
    { question: 'Quelle est la forme correcte ? "He ___ to music every night."', options: ['listen', 'listens', 'listening', 'listened'], correctIndex: 1, xpReward: 20, type: 'conjugaison' },
    { question: 'Complétez : "They ___ already ___ lunch."', options: ['have/eaten', 'has/eaten', 'had/ate', 'are/eating'], correctIndex: 0, xpReward: 20, type: 'conjugaison' },
    { question: 'Complétez : "We ___ to Paris next summer."', options: ['will travel', 'are travel', 'traveling', 'travels'], correctIndex: 0, xpReward: 20, type: 'conjugaison' },
    { question: 'Complétez : "I ___ my homework when she called."', options: ['was doing', 'am doing', 'did', 'do'], correctIndex: 0, xpReward: 20, type: 'conjugaison' },
    { question: 'Complétez : "She ___ French since 2020."', options: ['has studied', 'have studied', 'studied', 'is studying'], correctIndex: 0, xpReward: 20, type: 'conjugaison' },
  ],
  B1: [
    // Grammar
    { question: 'Complétez : "If I ___ rich, I would travel the world."', options: ['am', 'was', 'were', 'be'], correctIndex: 2, xpReward: 25, type: 'grammar' },
    { question: 'Complétez : "She suggested that he ___ harder."', options: ['studies', 'study', 'studied', 'studying'], correctIndex: 1, xpReward: 25, type: 'grammar' },
    { question: 'Complétez : "I wish I ___ harder at school."', options: ['study', 'studied', 'had studied', 'would study'], correctIndex: 2, xpReward: 25, type: 'grammar' },
    { question: 'Complétez : "___ it rain, we would stay home."', options: ['If', 'Should', 'Were', 'Had'], correctIndex: 1, xpReward: 25, type: 'grammar' },
    { question: 'Complétez : "The book ___ I read was fascinating."', options: ['who', 'which', 'what', 'whom'], correctIndex: 1, xpReward: 25, type: 'grammar' },
    { question: 'Complétez : "He is used ___ early."', options: ['to wake', 'to waking', 'waking', 'wake'], correctIndex: 1, xpReward: 25, type: 'grammar' },
    // Vocabulary
    { question: 'Que signifie "to achieve" en français ?', options: ['Échouer', 'Accomplir', 'Abandonner', 'Accepter'], correctIndex: 1, xpReward: 20, type: 'vocabulary' },
    { question: 'Quel est le synonyme de "significant" ?', options: ['Trivial', 'Meaningful', 'Vague', 'Ordinary'], correctIndex: 1, xpReward: 20, type: 'vocabulary' },
    { question: 'Que signifie "overwhelmed" en français ?', options: ['Enthousiaste', 'Débordé', 'Indifférent', 'Soulagé'], correctIndex: 1, xpReward: 20, type: 'vocabulary' },
    { question: 'Que signifie "compromise" en français ?', options: ['Promesse', 'Compromis', 'Complot', 'Compliment'], correctIndex: 1, xpReward: 20, type: 'vocabulary' },
    { question: 'Quel mot signifie "persévérance" en anglais ?', options: ['Perseverance', 'Perception', 'Permission', 'Performance'], correctIndex: 0, xpReward: 20, type: 'vocabulary' },
    { question: 'Que signifie "reluctant" en français ?', options: ['Rapide', 'Réticent', 'Religieux', 'Relaxé'], correctIndex: 1, xpReward: 20, type: 'vocabulary' },
    // Translation
    { question: "Traduisez : \"Bien qu'il soit fatigué, il a continué à travailler.\"", options: ['Although he was tired, he kept working', 'Even he was tired, he continued work', 'Despite he is tired, he works', 'Though he tired, he working still'], correctIndex: 0, xpReward: 25, type: 'translation' },
    { question: "Traduisez : \"Il m'a dit qu'il viendrait demain.\"", options: ['He told me he would come tomorrow', 'He said me he will come tomorrow', 'He told me he comes tomorrow', 'He say to me he coming tomorrow'], correctIndex: 0, xpReward: 25, type: 'translation' },
    { question: 'Traduisez : "Je souhaiterais avoir plus de temps."', options: ['I wish I had more time', 'I wish I have more time', 'I hope having more time', 'I want more time would'], correctIndex: 0, xpReward: 25, type: 'translation' },
    { question: 'Traduisez : "Plus elle étudie, plus elle progresse."', options: ['The more she studies, the more she improves', 'More she studies, more she improves', 'She studies more, she improves more', 'As she studies, she improves'], correctIndex: 0, xpReward: 25, type: 'translation' },
    { question: 'Traduisez : "Il a évité de répondre à la question."', options: ['He avoided answering the question', 'He avoided to answer the question', 'He avoided answer the question', 'He avoided to answering the question'], correctIndex: 0, xpReward: 25, type: 'translation' },
    { question: 'Traduisez : "Nous aurions dû partir plus tôt."', options: ['We should have left earlier', 'We must have left earlier', 'We could left earlier', 'We would have leave earlier'], correctIndex: 0, xpReward: 25, type: 'translation' },
    // Conjugaison
    { question: 'Complétez : "By the time we arrived, the movie ___."', options: ['started', 'has started', 'had started', 'starts'], correctIndex: 2, xpReward: 25, type: 'conjugaison' },
    { question: 'Complétez : "She ___ here since 2015."', options: ['lives', 'has lived', 'lived', 'is living'], correctIndex: 1, xpReward: 25, type: 'conjugaison' },
    { question: 'Complétez : "If I had known, I ___ differently."', options: ['would act', 'would have acted', 'will act', 'acted'], correctIndex: 1, xpReward: 25, type: 'conjugaison' },
    { question: 'Complétez : "The report ___ by the time you arrive."', options: ['will be finished', 'will finish', 'finishes', 'is finishing'], correctIndex: 0, xpReward: 25, type: 'conjugaison' },
    { question: 'Complétez : "He denied ___ the window."', options: ['breaking', 'to break', 'break', 'broke'], correctIndex: 0, xpReward: 25, type: 'conjugaison' },
    { question: 'Complétez : "They ___ working when the phone rang."', options: ['were', 'was', 'are', 'have been'], correctIndex: 0, xpReward: 25, type: 'conjugaison' },
  ],
  B2: [
    // Grammar
    { question: 'Complétez : "Had I known, I ___ differently."', options: ['would act', 'would have acted', 'will act', 'acted'], correctIndex: 1, xpReward: 30, type: 'grammar' },
    { question: 'Complétez : "Not only ___ intelligent, but she is also kind."', options: ['she is', 'is she', 'does she', 'she does'], correctIndex: 1, xpReward: 30, type: 'grammar' },
    { question: 'Complétez : "She insisted on ___ the report herself."', options: ['writing', 'to write', 'write', 'wrote'], correctIndex: 0, xpReward: 30, type: 'grammar' },
    { question: 'Complétez : "It is high time we ___ action."', options: ['take', 'took', 'taking', 'taken'], correctIndex: 1, xpReward: 30, type: 'grammar' },
    { question: 'Complétez : "Rarely ___ such a remarkable performance."', options: ['have I seen', 'I have seen', 'I saw', 'did I saw'], correctIndex: 0, xpReward: 30, type: 'grammar' },
    { question: 'Complétez : "But for your help, I ___ failed."', options: ['would have', 'will have', 'had', 'would'], correctIndex: 0, xpReward: 30, type: 'grammar' },
    // Vocabulary
    { question: 'Que signifie "to undermine" en français ?', options: ['Renforcer', 'Saper', 'Comprendre', 'Nier'], correctIndex: 1, xpReward: 25, type: 'vocabulary' },
    { question: 'Quel mot complète : "The results were ___ with previous findings."', options: ['consistent', 'considerate', 'consecutive', 'conspicuous'], correctIndex: 0, xpReward: 25, type: 'vocabulary' },
    { question: 'Complétez : "The report ___ the need for further research."', options: ['underscores', 'undercharges', 'underachieves', 'underestimates'], correctIndex: 0, xpReward: 30, type: 'vocabulary' },
    { question: 'Que signifie "pragmatic" en français ?', options: ['Pratique', 'Pragmatique', 'Précis', 'Prétentieux'], correctIndex: 1, xpReward: 25, type: 'vocabulary' },
    { question: 'Que signifie "ambiguous" en français ?', options: ['Ambitieux', 'Ambigu', 'Amical', 'Ample'], correctIndex: 1, xpReward: 25, type: 'vocabulary' },
    { question: 'Quel mot signifie "inévitable" en anglais ?', options: ['Inevitable', 'Incredible', 'Invisible', 'Invincible'], correctIndex: 0, xpReward: 25, type: 'vocabulary' },
    // Translation
    { question: "Traduisez : \"Quoi qu'il arrive, nous devons persévérer.\"", options: ['Whatever happens, we must persevere', 'What happens, we should persevere', 'Whatever will happen, we must persisted', 'No matter what, we persevering'], correctIndex: 0, xpReward: 30, type: 'translation' },
    { question: "Traduisez : \"Il est peu probable qu'elle accepte cette proposition.\"", options: ['It is unlikely that she will accept this proposal', 'She is unlikely accepting this proposal', 'It is improbable she accepts that', 'She unlikely will accept the proposition'], correctIndex: 0, xpReward: 30, type: 'translation' },
    { question: 'Traduisez : "En dépit des difficultés, le projet a abouti."', options: ['Despite the difficulties, the project succeeded', 'In spite difficulties, the project succeed', 'Despite difficulties, project was success', 'Although the difficulties, project succeeded'], correctIndex: 0, xpReward: 30, type: 'translation' },
    { question: 'Traduisez : "Il eut fallu qu\'il en fût averti."', options: ['He should have been informed of it', 'He must be informed about it', 'He should be informed from it', 'He had to been told about it'], correctIndex: 0, xpReward: 30, type: 'translation' },
    { question: 'Traduisez : "Quoi qu\'il en soit, nous devons avancer."', options: ['Be that as it may, we must move forward', 'Whatever it is, we must go', 'However it is, we should advance', 'No matter, we must progressing'], correctIndex: 0, xpReward: 30, type: 'translation' },
    { question: 'Traduisez : "Non seulement il est brillant, mais il est aussi modeste."', options: ['Not only is he brilliant, but he is also modest', 'Not only he is brilliant, but also he is modest', 'He is not only brilliant, but too he is modest', 'Not just he brilliant, but he modest also'], correctIndex: 0, xpReward: 30, type: 'translation' },
    // Conjugaison
    { question: 'Complétez : "She ___ here for five years by next June."', options: ['will have worked', 'will work', 'works', 'has worked'], correctIndex: 0, xpReward: 30, type: 'conjugaison' },
    { question: 'Complétez : "The house ___ before we moved in."', options: ['was being renovated', 'is renovating', 'renovated', 'has renovated'], correctIndex: 0, xpReward: 30, type: 'conjugaison' },
    { question: 'Complétez : "I wish I ___ told you earlier."', options: ['had', 'have', 'would', 'should'], correctIndex: 0, xpReward: 30, type: 'conjugaison' },
    { question: 'Complétez : "He ___ to have been misinformed."', options: ['appears', 'appearing', 'appeared', 'is appeared'], correctIndex: 0, xpReward: 30, type: 'conjugaison' },
    { question: 'Complétez : "Were she ___ , she would understand."', options: ['present', 'presented', 'presenting', 'presents'], correctIndex: 0, xpReward: 30, type: 'conjugaison' },
    { question: 'Complétez : "They ___ the project by December."', options: ['will have completed', 'will complete', 'complete', 'have completed'], correctIndex: 0, xpReward: 30, type: 'conjugaison' },
  ],
  C1: [
    // Grammar
    { question: 'Complétez : "The implications of this policy are ___ understood."', options: ['scarcely', 'scarce', 'scarceness', 'scarsed'], correctIndex: 0, xpReward: 35, type: 'grammar' },
    { question: 'Complétez : "So ___ the impact that policymakers were forced to reconsider."', options: ['profound was', 'profound', 'was profound', 'did profound'], correctIndex: 0, xpReward: 35, type: 'grammar' },
    { question: 'Complétez : "Little ___ the challenges that lay ahead."', options: ['did they anticipate', 'they anticipated', 'they did anticipate', 'anticipated they'], correctIndex: 0, xpReward: 35, type: 'grammar' },
    { question: 'Complétez : "Under no circumstances ___ acceptable."', options: ['is this', 'this is', 'was this being', 'this being'], correctIndex: 0, xpReward: 35, type: 'grammar' },
    { question: 'Complétez : "Seldom ___ such a comprehensive analysis."', options: ['has one encountered', 'one has encountered', 'one encountered', 'did one encountered'], correctIndex: 0, xpReward: 35, type: 'grammar' },
    { question: 'Complétez : "Only then ___ the gravity of the situation."', options: ['did she realize', 'she realized', 'she did realize', 'realized she'], correctIndex: 0, xpReward: 35, type: 'grammar' },
    // Vocabulary
    { question: 'Que signifie "to corroborate" en français ?', options: ['Contredire', 'Confirmer', 'Corrompre', 'Corriger'], correctIndex: 1, xpReward: 30, type: 'vocabulary' },
    { question: 'Quel mot décrit un "raisonnement trompeur mais apparemment logique" ?', options: ['Sophistry', 'Serendipity', 'Sophistication', 'Sovereignty'], correctIndex: 0, xpReward: 30, type: 'vocabulary' },
    { question: 'Que signifie "prescient" en français ?', options: ['Prévoyant', 'Présent', 'Précieux', 'Précaire'], correctIndex: 0, xpReward: 30, type: 'vocabulary' },
    { question: 'Que signifie "ephemeral" en français ?', options: ['Éternel', 'Éphémère', 'Épais', 'Élégant'], correctIndex: 1, xpReward: 30, type: 'vocabulary' },
    { question: 'Que signifie "juxtapose" en français ?', options: ['Justifier', 'Juxtaposer', 'Jubilé', 'Jeter'], correctIndex: 1, xpReward: 30, type: 'vocabulary' },
    { question: 'Que signifie "vindicate" en français ?', options: ['Vaincre', 'Justifier', 'Violenter', 'Vinculer'], correctIndex: 1, xpReward: 30, type: 'vocabulary' },
    // Translation
    { question: "Traduisez : \"Il a été convenu que les parties s'engageraient dans un dialogue constructif.\"", options: ['It was agreed that the parties would engage in constructive dialogue', 'It was agreed the parties will engage in constructive dialog', 'They agreed that parties shall engage constructively', 'It has agreed parties would engaged in constructive dialogue'], correctIndex: 0, xpReward: 35, type: 'translation' },
    { question: 'Traduisez : "Nonobstant les objections soulevées, la motion a été adoptée."', options: ['Notwithstanding the objections raised, the motion was passed', 'Despite objections raising, the motion passed', 'Notwithstanding objections, motion has been passing', 'In spite of raised objections, motion was passing'], correctIndex: 0, xpReward: 35, type: 'translation' },
    { question: "Traduisez : \"Force est de constater que cette approche s'avère contre-productive.\"", options: ['It must be acknowledged that this approach proves counterproductive', 'We must acknowledge this approach is counter-product', 'It has to be admitted that approach proves against productive', 'One must note this approach being counterproductive'], correctIndex: 0, xpReward: 35, type: 'translation' },
    { question: 'Traduisez : "Il se peut que la décision soit contestée."', options: ['It may well be that the decision is contested', 'It can be the decision is contested', 'Maybe the decision being contested', 'The decision perhaps is being contest'], correctIndex: 0, xpReward: 35, type: 'translation' },
    { question: 'Traduisez : "Encore eût-il fallu qu\'il en prît conscience."', options: ['He would first have had to become aware of it', 'He should have became aware about it', 'He must first realize about it', 'He had to first become conscious of that'], correctIndex: 0, xpReward: 35, type: 'translation' },
    { question: 'Traduisez : "Quelle que soit l\'issue, il faudra en tirer les leçons."', options: ['Whatever the outcome, lessons will need to be drawn', 'Whatever the result, we need to learn', 'Any outcome, lessons must be taken', 'No matter the end, we should draw conclusions'], correctIndex: 0, xpReward: 35, type: 'translation' },
    // Conjugaison
    { question: 'Complétez : "He is believed ___ the scene before the police arrived."', options: ['to have left', 'to leave', 'leaving', 'having left'], correctIndex: 0, xpReward: 35, type: 'conjugaison' },
    { question: 'Complétez : "The proposal ___ to have been poorly received."', options: ['appears', 'appearing', 'appeared', 'is appearing'], correctIndex: 0, xpReward: 35, type: 'conjugaison' },
    { question: 'Complétez : "She would rather he ___ earlier."', options: ['arrived', 'arrive', 'arrives', 'arriving'], correctIndex: 0, xpReward: 35, type: 'conjugaison' },
    { question: 'Complétez : "It is imperative that she ___ informed."', options: ['be', 'is', 'will be', 'would be'], correctIndex: 0, xpReward: 35, type: 'conjugaison' },
    { question: 'Complétez : "Not until the results ___ released will we know."', options: ['are', 'will be', 'being', 'have'], correctIndex: 0, xpReward: 35, type: 'conjugaison' },
    { question: 'Complétez : "Were he ___ the truth, he would act differently."', options: ['to know', 'knowing', 'knew', 'known'], correctIndex: 0, xpReward: 35, type: 'conjugaison' },
  ],
  C2: [
    // Grammar
    { question: 'Complétez : "Were the hypothesis ___ , the ramifications would be far-reaching."', options: ['to be validated', 'validating', 'validated', 'to validate'], correctIndex: 0, xpReward: 40, type: 'grammar' },
    { question: 'Complétez : "At no time ___ the authority to unilaterally amend the provisions."', options: ['did the committee have', 'the committee had', 'had the committee', 'the committee did have'], correctIndex: 0, xpReward: 40, type: 'grammar' },
    { question: 'Complétez : "Not until the findings ___ public did the institution acknowledge its oversight."', options: ['became', 'become', 'had become', 'becoming'], correctIndex: 0, xpReward: 40, type: 'grammar' },
    { question: 'Complétez : "Such ___ the magnitude of the crisis that extraordinary measures were warranted."', options: ['was', 'is', 'had been', 'has been'], correctIndex: 0, xpReward: 40, type: 'grammar' },
    { question: 'Complétez : "Only by ___ the underlying assumptions can one grasp the full implications."', options: ['questioning', 'question', 'questioned', 'to question'], correctIndex: 0, xpReward: 40, type: 'grammar' },
    { question: 'Complétez : "Far ___ it from me to question their judgment."', options: ['be', 'is', 'was', 'being'], correctIndex: 0, xpReward: 40, type: 'grammar' },
    // Vocabulary
    { question: 'Que signifie "to obfuscate" en français ?', options: ['Rendre confus', 'Obscurcir', 'Rendre obsolète', 'Omettre'], correctIndex: 1, xpReward: 35, type: 'vocabulary' },
    { question: "Quel terme désigne \"l'art de persuader par le discours\" ?", options: ['Rhetoric', 'Hermeneutics', 'Dialectics', 'Exegesis'], correctIndex: 0, xpReward: 35, type: 'vocabulary' },
    { question: 'Que signifie "to renege" en français ?', options: ['Renoncer', 'Renégocier', 'Rénover', 'Rendre'], correctIndex: 0, xpReward: 35, type: 'vocabulary' },
    { question: 'Que signifie "recalcitrant" en français ?', options: ['Rétif', 'Reflétant', 'Recyclé', 'Reconnaisant'], correctIndex: 0, xpReward: 35, type: 'vocabulary' },
    { question: 'Que signifie "preponderance" en français ?', options: ['Prépondérance', 'Préparation', 'Prévention', 'Prédilection'], correctIndex: 0, xpReward: 35, type: 'vocabulary' },
    { question: 'Que signifie "incumbent" en français ?', options: ['Incombant', 'Incroyable', 'Inclusif', 'Incisif'], correctIndex: 0, xpReward: 35, type: 'vocabulary' },
    // Translation
    { question: 'Traduisez : "Il incombe aux instances dirigeantes de veiller à la conformité réglementaire."', options: ['It is incumbent upon the governing bodies to ensure regulatory compliance', 'It is incumbent to governing bodies ensuring regulatory compliance', 'It falls upon governing bodies to ensure regulation compliance', 'It is obliging the governing bodies to ensure regulation conformity'], correctIndex: 0, xpReward: 40, type: 'translation' },
    { question: "Traduisez : \"Quoi que l'on puisse avancer, la prépondérance des preuves atteste de cette conclusion.\"", options: ['Whatever one may argue, the preponderance of evidence attests to this conclusion', 'Whatever you advance, the preponderance of evidences attests this', 'No matter what is advanced, evidence preponderance attests the conclusion', 'Whichever one argues, the preponderating evidence attests to that'], correctIndex: 0, xpReward: 40, type: 'translation' },
    { question: "Traduisez : \"L'exégèse de ce passage requiert une appréciation nuancée du contexte socio-historique.\"", options: ['The exegesis of this passage requires a nuanced appreciation of the socio-historical context', 'Exegesis of this passage demands a nuanced appreciation for socio-historic context', 'The exegesis for this passage require nuanced appreciation of socio-historical contexts', 'This passage exegesis requires nuanced appreciating of the socio-historical context'], correctIndex: 0, xpReward: 40, type: 'translation' },
    { question: 'Traduisez : "Il s\'ensuit que toute dérogation au principe susvisé serait réputée nulle et non avenue."', options: ['It follows that any derogation from the aforementioned principle would be deemed null and void', 'It follows any deviation from above principle would be null', 'Therefore any departure from said principle is considered void', 'It ensues that all derogation to the principle would be nullified'], correctIndex: 0, xpReward: 40, type: 'translation' },
    { question: 'Traduisez : "Encore convient-il de souligner les limites inhérentes à cette approche."', options: ['It should nonetheless be emphasized that there are inherent limitations to this approach', 'Still it is convenient to underline inherent limits of this approach', 'Yet one must pointing out the inherent limitations of that approach', 'However it fits to highlight inherent limits in this method'], correctIndex: 0, xpReward: 40, type: 'translation' },
    { question: 'Traduisez : "Tout porte à croire que ladite politique s\'avère contre-productive."', options: ['There is every indication that the said policy proves counterproductive', 'Everything carries to believe said policy is counter-product', 'All leads to think the policy is proving counter-productive', 'There is all reason to believe this policy being counterproductive'], correctIndex: 0, xpReward: 40, type: 'translation' },
    // Conjugaison
    { question: 'Complétez : "The findings ___ to suggest a paradigm shift is warranted."', options: ['appear', 'appears', 'appearing', 'appeared'], correctIndex: 0, xpReward: 40, type: 'conjugaison' },
    { question: 'Complétez : "Had the evidence ___ forthcoming, the verdict might have differed."', options: ['been', 'being', 'be', 'was'], correctIndex: 0, xpReward: 40, type: 'conjugaison' },
    { question: 'Complétez : "It is imperative that the provisions ___ strictly adhered to."', options: ['be', 'are', 'will be', 'would be'], correctIndex: 0, xpReward: 40, type: 'conjugaison' },
    { question: 'Complétez : "Not only ___ the report, but she also disseminated its findings."', options: ['did she author', 'she authored', 'she did author', 'authored she'], correctIndex: 0, xpReward: 40, type: 'conjugaison' },
    { question: 'Complétez : "Little ___ the profound implications of the ruling."', options: ['did they foresee', 'they foresaw', 'they did foresee', 'foresaw they'], correctIndex: 0, xpReward: 40, type: 'conjugaison' },
    { question: 'Complétez : "Were it not for the timely intervention, the project ___."', options: ['would have foundered', 'will founder', 'founders', 'would found'], correctIndex: 0, xpReward: 40, type: 'conjugaison' },
  ],
}

const ALL_CHALLENGE_TYPES: Challenge['type'][] = ['grammar', 'vocabulary', 'translation', 'conjugaison']

/**
 * Sélectionner 3 défis du jour basés sur la date et le niveau.
 * - Chaque jour, 3 types sur 4 sont sélectionnés (rotation)
 * - Le défi change chaque jour grâce au dayOfYear comme seed
 * - Les défis sont adaptés au niveau de l'apprenant
 */
const getDailyChallenges = (level: string): Challenge[] => {
  const pool = CHALLENGE_POOL[level] || CHALLENGE_POOL.A1
  const now = new Date()
  const startOfYear = new Date(now.getFullYear(), 0, 0)
  const dayOfYear = Math.floor((now.getTime() - startOfYear.getTime()) / 86400000)

  // Rotate which 3 of 4 types are shown each day
  // This ensures conjugaison is also regularly featured
  const typeOffset = dayOfYear % ALL_CHALLENGE_TYPES.length
  const selectedTypes = [
    ...ALL_CHALLENGE_TYPES.slice(typeOffset),
    ...ALL_CHALLENGE_TYPES.slice(0, typeOffset),
  ].slice(0, 3) // pick 3 out of 4, rotating daily

  const result: Challenge[] = []
  for (const type of selectedTypes) {
    const typed = pool.filter((c) => c.type === type)
    if (typed.length > 0) {
      // Use dayOfYear + type index as offset to get different challenges per type
      const idx = (dayOfYear + result.length * 7) % typed.length
      result.push(typed[idx])
    }
  }

  // If we don't have enough (shouldn't happen), fill with remaining
  while (result.length < 3) {
    const idx = (dayOfYear + result.length) % pool.length
    result.push(pool[idx])
  }

  return result
}

const TYPE_LABELS: Record<Challenge['type'], string> = {
  grammar: 'Grammaire',
  vocabulary: 'Vocabulaire',
  translation: 'Traduction',
  conjugaison: 'Conjugaison',
}

const TYPE_COLORS: Record<Challenge['type'], string> = {
  grammar: 'bg-yoel-primary/10 text-yoel-primary',
  vocabulary: 'bg-yoel-green/10 text-yoel-green',
  translation: 'bg-yoel-blue/10 text-yoel-blue',
  conjugaison: 'bg-yoel-gold/10 text-yoel-gold',
}

const LEADERBOARD = [
  { rank: 1, name: 'Marie L.', xp: 4820, avatar: 'ML', isPremium: true },
  { rank: 2, name: 'Thomas R.', xp: 3650, avatar: 'TR', isPremium: false },
  { rank: 3, name: 'Sophie M.', xp: 2990, avatar: 'SM', isPremium: true },
]

// ─── Word of the Day — Different word every day, level-adapted ──────────────

interface WordEntry {
  english: string
  french: string
  phonetic: string
  example: string
  level: string   // minimum CEFR level for this word
}

const WORD_POOL: WordEntry[] = [
  // A1 words
  { english: 'Hello', french: 'Bonjour', phonetic: '/həˈloʊ/', example: 'Hello, how are you today?', level: 'A1' },
  { english: 'Friend', french: 'Ami(e)', phonetic: '/frɛnd/', example: 'She is my best friend.', level: 'A1' },
  { english: 'Water', french: 'Eau', phonetic: '/ˈwɔːtər/', example: 'Can I have a glass of water?', level: 'A1' },
  { english: 'Book', french: 'Livre', phonetic: '/bʊk/', example: 'I am reading a good book.', level: 'A1' },
  { english: 'Happy', french: 'Heureux/Heureuse', phonetic: '/ˈhæpi/', example: 'I feel very happy today.', level: 'A1' },
  { english: 'Family', french: 'Famille', phonetic: '/ˈfæməli/', example: 'My family lives in Paris.', level: 'A1' },
  { english: 'Morning', french: 'Matin', phonetic: '/ˈmɔːrnɪŋ/', example: 'Good morning, everyone!', level: 'A1' },
  { english: 'Beautiful', french: 'Beau/Belle', phonetic: '/ˈbjuːtɪfəl/', example: 'What a beautiful day!', level: 'A1' },
  { english: 'Journey', french: 'Voyage', phonetic: '/ˈdʒɜːrni/', example: 'It was a long journey.', level: 'A1' },
  { english: 'Together', french: 'Ensemble', phonetic: '/təˈɡɛðər/', example: 'Let us work together.', level: 'A1' },
  // A2 words
  { english: 'Schedule', french: 'Emploi du temps', phonetic: '/ˈskɛdjuːl/', example: 'My schedule is very busy this week.', level: 'A2' },
  { english: 'Weather', french: 'Météo', phonetic: '/ˈwɛðər/', example: 'The weather is lovely today.', level: 'A2' },
  { english: 'Advice', french: 'Conseil', phonetic: '/ədˈvaɪs/', example: 'Can you give me some advice?', level: 'A2' },
  { english: 'Comfortable', french: 'Confortable', phonetic: '/ˈkʌmfərtəbəl/', example: 'This sofa is very comfortable.', level: 'A2' },
  { english: 'Celebrate', french: 'Célébrer', phonetic: '/ˈsɛləbreɪt/', example: 'We celebrate his birthday tomorrow.', level: 'A2' },
  { english: 'Improve', french: 'Améliorer', phonetic: '/ɪmˈpruːv/', example: 'I want to improve my English.', level: 'A2' },
  { english: 'Neighbour', french: 'Voisin(e)', phonetic: '/ˈneɪbər/', example: 'Our neighbour is very friendly.', level: 'A2' },
  { english: 'Prepare', french: 'Préparer', phonetic: '/prɪˈpɛər/', example: 'I need to prepare dinner.', level: 'A2' },
  { english: 'Discover', french: 'Découvrir', phonetic: '/dɪsˈkʌvər/', example: 'She discovered a hidden talent.', level: 'A2' },
  { english: 'Explain', french: 'Expliquer', phonetic: '/ɪkˈspleɪn/', example: 'Can you explain this to me?', level: 'A2' },
  // B1 words
  { english: 'Achieve', french: 'Accomplir', phonetic: '/əˈtʃiːv/', example: 'She achieved her goals through hard work.', level: 'B1' },
  { english: 'Significant', french: 'Significatif', phonetic: '/sɪɡˈnɪfɪkənt/', example: 'This is a significant improvement.', level: 'B1' },
  { english: 'Persuade', french: 'Persuader', phonetic: '/pərˈsweɪd/', example: 'He persuaded me to change my mind.', level: 'B1' },
  { english: 'Resilient', french: 'Résilient', phonetic: '/rɪˈzɪliənt/', example: 'Children are often very resilient.', level: 'B1' },
  { english: 'Exhausted', french: 'Épuisé', phonetic: '/ɪɡˈzɔːstɪd/', example: 'I am completely exhausted after the marathon.', level: 'B1' },
  { english: 'Compromise', french: 'Compromis', phonetic: '/ˈkɒmprəmaɪz/', example: 'We need to find a compromise.', level: 'B1' },
  { english: 'Enthusiasm', french: 'Enthousiasme', phonetic: '/ɪnˈθjuːziæzəm/', example: 'She showed great enthusiasm for the project.', level: 'B1' },
  { english: 'Investigate', french: 'Enquêter', phonetic: '/ɪnˈvɛstɪɡeɪt/', example: 'The police are investigating the crime.', level: 'B1' },
  { english: 'Overwhelming', french: 'Accablant', phonetic: '/ˌoʊvərˈwɛlmɪŋ/', example: 'The response was overwhelming.', level: 'B1' },
  { english: 'Grateful', french: 'Reconnaissant', phonetic: '/ˈɡreɪtfəl/', example: 'I am grateful for your help.', level: 'B1' },
  // B2 words
  { english: 'Serendipity', french: 'Sérendipité', phonetic: '/ˌser.ənˈdɪp.ə.ti/', example: 'Finding that café was pure serendipity.', level: 'B2' },
  { english: 'Undermine', french: 'Saper', phonetic: '/ˌʌndərˈmaɪn/', example: 'His comments undermined her confidence.', level: 'B2' },
  { english: 'Pragmatic', french: 'Pragmatique', phonetic: '/præɡˈmætɪk/', example: 'We need a pragmatic approach to this problem.', level: 'B2' },
  { english: 'Resilient', french: 'Résilient', phonetic: '/rɪˈzɪliənt/', example: 'The economy proved resilient after the crisis.', level: 'B2' },
  { english: 'Nuance', french: 'Nuance', phonetic: '/ˈnjuːɑːns/', example: 'There are many nuances in this translation.', level: 'B2' },
  { english: 'Unprecedented', french: 'Sans précédent', phonetic: '/ʌnˈprɛsɪdɛntɪd/', example: 'The situation is unprecedented in modern history.', level: 'B2' },
  { english: 'Ambiguous', french: 'Ambigu', phonetic: '/æmˈbɪɡjuəs/', example: 'The statement was deliberately ambiguous.', level: 'B2' },
  { english: 'Scrutinize', french: 'Examiner minutieusement', phonetic: '/ˈskruːtənaɪz/', example: 'The committee will scrutinize every detail.', level: 'B2' },
  { english: 'Inevitable', french: 'Inévitable', phonetic: '/ɪnˈɛvɪtəbəl/', example: 'Change is inevitable in any organization.', level: 'B2' },
  { english: 'Comprehensive', french: 'Exhaustif', phonetic: '/ˌkɒmprɪˈhɛnsɪv/', example: 'We need a comprehensive review of the policy.', level: 'B2' },
  // C1 words
  { english: 'Corroborate', french: 'Confirmer', phonetic: '/kəˈrɒbəreɪt/', example: 'The witness corroborated his testimony.', level: 'C1' },
  { english: 'Sophistry', french: 'Sophisme', phonetic: '/ˈsɒfɪstri/', example: 'His argument was mere sophistry.', level: 'C1' },
  { english: 'Prescient', french: 'Prévoyant', phonetic: '/ˈprɛsiənt/', example: 'Her prescient analysis predicted the crisis.', level: 'C1' },
  { english: 'Obfuscate', french: 'Obscurcir', phonetic: '/ˈɒbfʌskeɪt/', example: 'The jargon obfuscated the real issue.', level: 'C1' },
  { english: 'Juxtapose', french: 'Juxtaposer', phonetic: '/ˌdʒʌkstəˈpoʊz/', example: 'The artist juxtaposes light and darkness.', level: 'C1' },
  { english: 'Vindicate', french: 'Justifier', phonetic: '/ˈvɪndɪkeɪt/', example: 'The evidence vindicated her claims.', level: 'C1' },
  { english: 'Paradigm', french: 'Paradigme', phonetic: '/ˈpærədaɪm/', example: 'This represents a paradigm shift in our thinking.', level: 'C1' },
  { english: 'Ephemeral', french: 'Éphémère', phonetic: '/ɪˈfɛmərəl/', example: 'Beauty is ephemeral but art endures.', level: 'C1' },
  // C2 words
  { english: 'Exegesis', french: 'Exégèse', phonetic: '/ˌɛksɪˈdʒiːsɪs/', example: 'The exegesis of this text requires deep knowledge.', level: 'C2' },
  { english: 'Obfuscate', french: 'Obscurcir', phonetic: '/ˈɒbfʌskeɪt/', example: 'Politicians often obfuscate the truth.', level: 'C2' },
  { english: 'Renege', french: 'Renoncer', phonetic: '/rɪˈniːɡ/', example: 'He reneged on his promise.', level: 'C2' },
  { english: 'Preponderance', french: 'Prépondérance', phonetic: '/prɪˈpɒndərəns/', example: 'The preponderance of evidence supports this view.', level: 'C2' },
  { english: 'Incumbent', french: 'Incombant', phonetic: '/ɪnˈkʌmbənt/', example: 'It is incumbent upon us to act responsibly.', level: 'C2' },
  { english: 'Recalcitrant', french: 'Rétif', phonetic: '/rɪˈkælsɪtrənt/', example: 'The recalcitrant student refused to cooperate.', level: 'C2' },
]

const LEVEL_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

/**
 * Get a different word every day, adapted to the learner's level.
 * Uses day-of-year as seed so the word changes daily but stays consistent within a day.
 * Only picks words at or below the learner's level.
 */
const getWordOfTheDay = (level: string): WordEntry => {
  const levelIdx = LEVEL_ORDER.indexOf(level)
  // Filter words appropriate for this level (same level or below)
  const availableWords = WORD_POOL.filter(
    (w) => LEVEL_ORDER.indexOf(w.level) <= levelIdx
  )

  if (availableWords.length === 0) return WORD_POOL[0]

  // Use day-of-year as seed for daily rotation
  const now = new Date()
  const startOfYear = new Date(now.getFullYear(), 0, 0)
  const dayOfYear = Math.floor(
    (now.getTime() - startOfYear.getTime()) / 86400000
  )

  // Deterministic selection based on the day
  const idx = dayOfYear % availableWords.length
  return availableWords[idx]
}

// ─── Circular Progress Ring ─────────────────────────────────────────────────

function CircularProgress({
  value,
  max,
  size = 120,
  strokeWidth = 8,
  className = '',
  compact = false,
}: {
  value: number
  max: number
  size?: number
  strokeWidth?: number
  className?: string
  compact?: boolean
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const progress = Math.min(value / max, 1)
  const offset = circumference - progress * circumference
  const center = size / 2

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted/30"
        />
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.55 0.22 25)" />
            <stop offset="100%" stopColor="oklch(0.80 0.15 85)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <motion.span
          className={`${compact ? 'text-base' : 'text-lg sm:text-2xl'} font-bold gradient-text-primary`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: 'spring' }}
        >
          {value}
        </motion.span>
        <span className={`${compact ? 'text-[8px]' : 'text-[10px] sm:text-xs'} text-muted-foreground`}>/ {max} XP</span>
      </div>
    </div>
  )
}

// ─── Quick Action Button ────────────────────────────────────────────────────

function QuickAction({
  icon: Icon,
  label,
  color,
  onClick,
}: {
  icon: React.ElementType
  label: string
  color: string
  onClick: () => void
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-1 sm:gap-2 rounded-2xl p-2 sm:p-4 glass-card transition-colors hover:bg-yoel-primary/5 dark:hover:bg-yoel-primary/10 cursor-pointer min-h-[72px] sm:min-h-[100px]"
    >
      <div
        className={`flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} shadow-md`}
      >
        <Icon className="h-4.5 w-4.5 sm:h-6 sm:w-6 text-white" />
      </div>
      <span className="text-[11px] sm:text-sm font-medium leading-tight">{label}</span>
    </motion.button>
  )
}

// ─── Bottom Nav Item ────────────────────────────────────────────────────────

function BottomNavItem({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: React.ElementType
  label: string
  active?: boolean
  onClick: () => void
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-0.5 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
        active
          ? 'text-yoel-primary'
          : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      <Icon className="h-4.5 w-4.5" />
      <span className="text-[9px] font-medium leading-tight">{label}</span>
      {active && (
        <motion.div
          layoutId="bottomNavIndicator"
          className="h-0.5 w-4 rounded-full bg-yoel-primary mt-0.5"
        />
      )}
    </motion.button>
  )
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function DashboardPage() {
  const { user, isDarkMode, toggleDarkMode, navigate, currentLesson, lastVisitedLesson, dailyChallengeCompleted, completeDailyChallenge, addXP, dailyXpEarned, dailyXpHistory, lessonHistory } = useAppStore()

  // Derive data with fallbacks
  const displayName = user?.name ?? 'Apprenant'
  const coins = user?.coins ?? 350
  const xp = user?.xp ?? 1250
  const level = user?.level ?? 'A1'
  const isPremium = user?.isPremium ?? false

  // Current level info
  const currentLevelInfo = LEVELS.find((l) => l.code === level) ?? LEVELS[0]

  // Dynamic daily goal based on learner PERFORMANCE
  // If dailyGoal is 0 (auto), compute from XP history, level & progress; otherwise use manual value
  const recommendedGoal = getRecommendedDailyGoal(level, currentLevelInfo.progress, dailyXpHistory)
  const effectiveDailyGoal = user?.dailyGoal && user.dailyGoal > 0 ? user.dailyGoal : recommendedGoal

  // Dynamic streak — calculated from actual XP history, NOT the static DB value
  const streak = calculateStreak(dailyXpHistory, dailyXpEarned)

  // Dynamic week calendar — based on actual activity data
  const weekDays = getWeekActivity(dailyXpHistory, dailyXpEarned, effectiveDailyGoal)

  // Word of the day — different every day, adapted to level
  const wordOfTheDay = getWordOfTheDay(level)

  // Recent lesson — the last lesson the learner visited, or the first uncompleted lesson as fallback
  const recentLesson = lastVisitedLesson ?? DEMO_LESSONS.find((l) => !l.completed) ?? DEMO_LESSONS[0]

  // Last learning session — what the learner studied before leaving
  const lastSession = lessonHistory.length > 0 ? lessonHistory[0] : null
  const lastSessionContent = lastSession ? getLessonContent(lastSession.lessonId) : null
  // Show up to 4 vocabulary words learned
  const learnedVocab: VocabWord[] = lastSessionContent?.vocab?.slice(0, 4) ?? []
  // Grammar title learned
  const learnedGrammar: GrammarRule | null = lastSessionContent?.grammar ?? null

  // Daily challenges — 3 per day, level-adapted
  const todayChallenges = getDailyChallenges(level)
  const [currentChallengeIdx, setCurrentChallengeIdx] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [challengeResults, setChallengeResults] = useState<(boolean | null)[]>([null, null, null])
  const [challengeTime, setChallengeTime] = useState(60)
  const [challengeAnswered, setChallengeAnswered] = useState(false)
  const allChallengesDone = challengeResults.every((r) => r !== null)

  // Collapsible "more content" section (collapsed by default on mobile)
  const [moreOpen, setMoreOpen] = useState(false)

  const currentChallenge = todayChallenges[currentChallengeIdx]

  // Track previous challenge index to detect changes
  const [prevChallengeIdx, setPrevChallengeIdx] = useState(0)
  if (currentChallengeIdx !== prevChallengeIdx) {
    setPrevChallengeIdx(currentChallengeIdx)
    setChallengeTime(60)
    setChallengeAnswered(false)
    setSelectedOption(null)
  }

  useEffect(() => {
    if (challengeAnswered || allChallengesDone) return
    const timer = setInterval(() => {
      setChallengeTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // Time's up — mark as wrong
          setChallengeAnswered(true)
          setChallengeResults((prev) => {
            const next = [...prev]
            next[currentChallengeIdx] = false
            return next
          })
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [challengeAnswered, currentChallengeIdx, allChallengesDone])

  const handleChallengeAnswer = (index: number) => {
    if (challengeAnswered) return
    setSelectedOption(index)
    setChallengeAnswered(true)
    const isCorrect = index === currentChallenge.correctIndex
    setChallengeResults((prev) => {
      const next = [...prev]
      next[currentChallengeIdx] = isCorrect
      return next
    })
    if (isCorrect) {
      addXP(currentChallenge.xpReward)
    }
  }

  const handleNextChallenge = () => {
    if (currentChallengeIdx < todayChallenges.length - 1) {
      setCurrentChallengeIdx((prev) => prev + 1)
    }
    if (allChallengesDone) {
      completeDailyChallenge()
    }
  }

  // Earned badges (first 5)
  const earnedBadges = BADGES.filter((b) => b.earnedAt).slice(0, 5)

  // Level progress
  const levelProgress = currentLevelInfo.progress

  // XP to next level (simple calc)
  const xpForCurrentLevel = xp % 500
  const xpForNextLevel = 500

  // Greeting based on time
  const hour = new Date().getHours()
  const greeting =
    hour < 12 ? 'Bonjour' : hour < 18 ? 'Bon après-midi' : 'Bonsoir'

  return (
    <div className="min-h-screen bg-background pb-[88px] lg:pb-8">
      {/* ─── Sticky Top Bar ──────────────────────────────────────────── */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/40">
        <div className="mx-auto max-w-4xl flex items-center justify-between gap-2 sm:gap-3 px-4 py-2 sm:py-2.5 lg:px-6">
          <div className="flex items-center gap-2 min-w-0">
            <Avatar className="h-9 w-9 ring-2 ring-yoel-primary/30">
              <AvatarImage src={user?.avatar ?? undefined} alt={displayName} />
              <AvatarFallback className="bg-yoel-primary/10 text-yoel-primary font-semibold text-xs">
                {displayName
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground truncate">
                {greeting} 👋
              </p>
              <p className="font-semibold truncate gradient-text-primary text-sm">
                {displayName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Streak */}
            <motion.div
              variants={pulseVariants}
              animate="pulse"
              className="flex items-center gap-1 rounded-full bg-orange-500/10 px-2 py-1 sm:px-2.5 sm:py-1.5"
            >
              <Flame className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-500" />
              <span className="text-xs sm:text-sm font-semibold text-orange-600 dark:text-orange-400">
                {streak}
              </span>
            </motion.div>

            {/* Coins */}
            <div className="flex items-center gap-1 rounded-full bg-yoel-gold/10 px-2 py-1 sm:px-2.5 sm:py-1.5">
              <Coins className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yoel-gold" />
              <span className="text-xs sm:text-sm font-semibold text-yoel-gold">{coins}</span>
            </div>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-9 sm:w-9 hidden sm:flex"
              onClick={toggleDarkMode}
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-4 w-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      <motion.div
        className="mx-auto max-w-4xl space-y-3 sm:space-y-6 p-3 sm:p-4 lg:p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* XP Progress Bar */}
        <motion.div variants={itemVariants} className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                {level}
              </Badge>
              <span className="text-muted-foreground">
                {currentLevelInfo.name}
              </span>
            </div>
            <span className="text-muted-foreground">
              {xpForCurrentLevel} / {xpForNextLevel} XP
            </span>
          </div>
          <Progress value={(xpForCurrentLevel / xpForNextLevel) * 100} className="h-2" />
        </motion.div>

        {/* ─── 2. Daily Goal Card (compact on mobile) ────────────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card overflow-hidden">
            <CardContent className="flex flex-row items-center gap-3 p-3 sm:p-6 sm:gap-6">
              {/* Mobile: compact 80px ring */}
              <div className="shrink-0 sm:hidden">
                <CircularProgress
                  value={dailyXpEarned}
                  max={effectiveDailyGoal}
                  size={80}
                  strokeWidth={7}
                  compact
                />
              </div>
              {/* Desktop: larger ring */}
              <div className="shrink-0 hidden sm:block">
                <CircularProgress
                  value={dailyXpEarned}
                  max={effectiveDailyGoal}
                  size={130}
                  strokeWidth={10}
                />
              </div>
              <div className="flex-1 min-w-0 space-y-1 sm:space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-lg font-semibold">
                    Objectif du jour
                  </h3>
                  {(!user?.dailyGoal || user.dailyGoal === 0) && (
                    <Badge variant="secondary" className="text-[9px] px-1.5 py-0 shrink-0">
                      Auto
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {dailyXpEarned >= effectiveDailyGoal
                    ? '🎉 Objectif atteint !'
                    : `Encore ${effectiveDailyGoal - dailyXpEarned} XP sur ${effectiveDailyGoal} !`}
                </p>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Target className="h-3 w-3 sm:h-4 sm:w-4 text-yoel-primary shrink-0" />
                  <span className="text-[11px] sm:text-sm font-medium text-yoel-primary whitespace-nowrap">
                    {effectiveDailyGoal > 0 ? Math.round((dailyXpEarned / effectiveDailyGoal) * 100) : 0}% complété
                  </span>
                </div>
                {(!user?.dailyGoal || user.dailyGoal === 0) && dailyXpHistory.length > 0 && (
                  <p className="text-[10px] sm:text-xs text-muted-foreground/70 italic">
                    Adapté à vos performances récentes
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ─── 3. Ce que vous avez appris — Learning Recap ──────────── */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card overflow-hidden">
            <div className="relative">
              {/* Accent bar */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-yoel-primary to-yoel-gold rounded-l-xl" />
              <CardContent className="p-3 sm:p-5 pl-4 sm:pl-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-yoel-primary/20 to-yoel-gold/20">
                      <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        Ce que vous avez appris
                      </p>
                      {lastSession && (
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <Badge variant="secondary" className="text-[9px] sm:text-[10px] px-1.5 py-0 h-4 sm:h-5 bg-yoel-primary/10 text-yoel-primary">
                            {lastSession.type === 'vocabulaire' ? 'Vocabulaire' : lastSession.type === 'grammaire' ? 'Grammaire' : lastSession.type === 'conversation' ? 'Conversation' : lastSession.type === 'conjugaison' ? 'Conjugaison' : lastSession.type === 'pronunciation' ? 'Prononciation' : lastSession.type}
                          </Badge>
                          <span className="flex items-center gap-0.5 text-[10px] sm:text-xs text-muted-foreground">
                            <Zap className="h-2.5 w-2.5 text-yoel-gold" />
                            +{lastSession.xpEarned} XP
                          </span>
                          {lastSession.score > 0 && (
                            <span className="text-[10px] sm:text-xs text-yoel-green font-medium">
                              {lastSession.score}%
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-yoel-primary hover:bg-yoel-primary-dark text-white rounded-full shrink-0 h-7 sm:h-8 text-[10px] sm:text-xs px-3 gap-1"
                    onClick={() => navigate('course')}
                  >
                    Continuer
                    <ChevronRight className="h-3 w-3" />
                  </Button>
                </div>

                {/* Learning Content Recap */}
                {lastSession && learnedVocab.length > 0 ? (
                  <div className="space-y-2.5">
                    {/* Vocabulary learned */}
                    <div>
                      <p className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-yoel-primary" />
                        Vocabulaire
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {learnedVocab.map((v, i) => (
                          <div
                            key={i}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-muted/60 text-[11px] sm:text-xs"
                          >
                            <span className="font-medium text-foreground">{v.english}</span>
                            <span className="text-muted-foreground">→</span>
                            <span className="text-yoel-primary">{v.french}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Grammar point learned */}
                    {learnedGrammar && learnedGrammar.title && (
                      <div>
                        <p className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-yoel-gold" />
                          Grammaire
                        </p>
                        <p className="text-[11px] sm:text-xs text-foreground/80 leading-relaxed">
                          {learnedGrammar.title}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  /* No history — show a prompt to start learning */
                  <div className="flex items-center gap-3 py-1">
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Commencez votre première leçon pour voir votre progression ici.
                      </p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-yoel-primary hover:bg-yoel-primary-dark text-white rounded-full shrink-0 h-7 sm:h-8 text-[10px] sm:text-xs px-3 gap-1"
                      onClick={() => navigate('levels')}
                    >
                      Commencer
                      <ChevronRight className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* ─── 4. Quick Actions Grid ──────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
            <QuickAction
              icon={BookOpen}
              label="Leçons"
              color="from-yoel-primary to-yoel-primary-dark"
              onClick={() => navigate('levels')}
            />
            <QuickAction
              icon={Dumbbell}
              label="Exercices"
              color="from-yoel-green to-emerald-700"
              onClick={() => navigate('exercises')}
            />
            <QuickAction
              icon={MessageCircle}
              label="Chat IA"
              color="from-yoel-blue to-yoel-blue-dark"
              onClick={() => navigate('chat')}
            />
            <QuickAction
              icon={BarChart3}
              label="Stats"
              color="from-yoel-gold to-amber-700"
              onClick={() => navigate('stats')}
            />
          </div>
        </motion.div>

        {/* ─── 5 & 6. Daily Challenge + Streak Calendar ───────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Daily Challenges — 3 per day */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card overflow-hidden h-full">
              <CardHeader className="pb-2 p-3 sm:p-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm sm:text-base flex items-center gap-1.5 sm:gap-2">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-gold shrink-0" />
                    Défis du jour
                  </CardTitle>
                  <div className="flex items-center gap-1.5">
                    {!allChallengesDone && (
                      <Badge className="bg-yoel-gold/15 text-yoel-gold border-0 text-[10px] sm:text-xs shrink-0">
                        +{currentChallenge.xpReward} XP
                      </Badge>
                    )}
                    {/* Progress dots */}
                    <div className="flex items-center gap-1">
                      {todayChallenges.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-2 w-2 rounded-full transition-colors ${
                            challengeResults[idx] === true
                              ? 'bg-yoel-green'
                              : challengeResults[idx] === false
                              ? 'bg-destructive'
                              : idx === currentChallengeIdx && !allChallengesDone
                              ? 'bg-yoel-gold'
                              : 'bg-muted-foreground/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2.5 p-3 sm:p-6 pt-0 sm:pt-0">
                {allChallengesDone ? (
                  /* ── Results summary ── */
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 py-3">
                      <span className="text-2xl">
                        {challengeResults.filter(Boolean).length === 3 ? '🏆' : challengeResults.filter(Boolean).length >= 2 ? '👏' : '💪'}
                      </span>
                      <div>
                        <p className="font-semibold text-sm">
                          {challengeResults.filter(Boolean).length}/3 correct
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {challengeResults.filter(Boolean).length === 3
                            ? 'Parfait ! Tous les défis réussis !'
                            : challengeResults.filter(Boolean).length >= 2
                            ? 'Bravo ! Continuez comme ça !'
                            : 'Continuez à vous entraîner !'}
                        </p>
                      </div>
                    </div>
                    {/* Show each challenge result */}
                    <div className="space-y-1.5">
                      {todayChallenges.map((ch, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-2 rounded-lg p-2 text-xs ${
                            challengeResults[idx]
                              ? 'bg-yoel-green/10 text-yoel-green'
                              : 'bg-destructive/10 text-destructive'
                          }`}
                        >
                          <span className="shrink-0">{challengeResults[idx] ? '✓' : '✗'}</span>
                          <Badge className={`text-[9px] px-1 py-0 border-0 shrink-0 ${TYPE_COLORS[ch.type]}`}>
                            {TYPE_LABELS[ch.type]}
                          </Badge>
                          <span className="truncate font-medium">{ch.question}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* ── Active challenge ── */
                  <>
                    {/* Challenge type badge */}
                    <div className="flex items-center gap-2">
                      <Badge className={`text-[9px] px-1.5 py-0 border-0 ${TYPE_COLORS[currentChallenge.type]}`}>
                        {TYPE_LABELS[currentChallenge.type]}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground">
                        Défi {currentChallengeIdx + 1}/{todayChallenges.length}
                      </span>
                    </div>
                    <p className="font-medium text-xs sm:text-sm leading-relaxed">
                      {currentChallenge.question}
                    </p>

                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                      {currentChallenge.options.map((option, idx) => {
                        const isSelected = selectedOption === idx
                        const isCorrect = idx === currentChallenge.correctIndex
                        let btnClass =
                          'text-xs sm:text-sm py-1.5 sm:py-2 rounded-xl border transition-all font-medium'

                        if (challengeAnswered) {
                          if (isCorrect) {
                            btnClass +=
                              ' bg-yoel-green/20 border-yoel-green/40 text-yoel-green'
                          } else if (isSelected && !isCorrect) {
                            btnClass +=
                              ' bg-destructive/15 border-destructive/40 text-destructive'
                          } else {
                            btnClass +=
                              ' bg-muted/50 border-muted text-muted-foreground'
                          }
                        } else {
                          btnClass +=
                            ' bg-background border-border hover:border-yoel-primary/50 hover:bg-yoel-primary/5 cursor-pointer'
                        }

                        return (
                          <motion.button
                            key={idx}
                            whileTap={!challengeAnswered ? { scale: 0.95 } : undefined}
                            onClick={() => handleChallengeAnswer(idx)}
                            disabled={challengeAnswered}
                            className={btnClass}
                          >
                            {option}
                          </motion.button>
                        )
                      })}
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {challengeTime > 0
                          ? `${Math.floor(challengeTime / 60)}:${(challengeTime % 60)
                              .toString()
                              .padStart(2, '0')}`
                          : 'Temps écoulé'}
                      </span>
                      {challengeAnswered && (
                        <div className="flex items-center gap-2">
                          <span
                            className={
                              challengeResults[currentChallengeIdx]
                                ? 'text-yoel-green font-medium'
                                : 'text-destructive font-medium'
                            }
                          >
                            {challengeResults[currentChallengeIdx] ? '✓ Correct !' : '✗ Incorrect'}
                          </span>
                          <Button
                            size="sm"
                            className="h-7 rounded-full bg-yoel-primary hover:bg-yoel-primary-dark text-white text-xs px-3"
                            onClick={handleNextChallenge}
                          >
                            {currentChallengeIdx < todayChallenges.length - 1 ? 'Suivant →' : 'Voir résultats'}
                          </Button>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Streak Calendar */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card overflow-hidden h-full">
              <CardHeader className="pb-2 p-3 sm:p-6">
                <CardTitle className="text-sm sm:text-base flex items-center gap-1.5 sm:gap-2">
                  <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 shrink-0" />
                  {streak > 0 ? `Série de ${streak} jour${streak > 1 ? 's' : ''}` : 'Commencez votre série !'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2.5 p-3 sm:p-6 pt-0 sm:pt-0">
                <div className="grid grid-cols-7 gap-1 sm:gap-2">
                  {weekDays.map((d, idx) => (
                    <motion.div
                      key={d.day + d.date}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.06, type: 'spring' }}
                      className={`flex flex-col items-center gap-0.5 rounded-lg sm:rounded-xl py-1 sm:py-2 px-0.5 transition-colors ${
                        d.isFuture
                          ? 'bg-muted/20 border border-transparent opacity-40'
                          : d.completed
                          ? 'bg-gradient-to-b from-orange-500/20 to-orange-600/10 border border-orange-500/20'
                          : d.isToday
                          ? 'bg-yoel-primary/5 border border-yoel-primary/20'
                          : 'bg-muted/40 border border-transparent'
                      }`}
                    >
                      <span className={`text-[9px] sm:text-[10px] font-medium ${
                        d.isToday ? 'text-yoel-primary' : 'text-muted-foreground'
                      }`}>
                        {d.day}
                      </span>
                      <span className={`text-xs sm:text-sm font-semibold ${
                        d.isToday && !d.completed ? 'text-yoel-primary' : ''
                      }`}>
                        {d.completed ? '🔥' : d.isFuture ? '·' : d.date}
                      </span>
                      {d.xpEarned > 0 && !d.completed && (
                        <span className="text-[7px] sm:text-[8px] text-muted-foreground leading-none">
                          {d.xpEarned}XP
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs text-muted-foreground">
                    {streak > 0 ? 'Continuez votre série !' : 'Gagnez des XP aujourd\'hui pour démarrer !'}
                  </span>
                  <Badge
                    variant="outline"
                    className={`text-[10px] ${streak > 0 ? 'text-orange-500 border-orange-500/30' : 'text-muted-foreground border-muted-foreground/30'}`}
                  >
                    🔥 {streak} jour{streak > 1 ? 's' : ''}
                  </Badge>
                </div>

                {isPremium && (
                  <div className="rounded-lg bg-yoel-gold/10 p-2 text-center">
                    <span className="text-[10px] sm:text-xs gradient-text-premium font-semibold">
                      👑 Récompense x2 avec Premium
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* ─── Collapsible "More" Section (Badges, Leaderboard, Word, Premium, Levels) ─── */}
        {/* On desktop: always visible. On mobile: behind "Voir plus" toggle. */}
        <div className="lg:contents">
          <Collapsible open={moreOpen} onOpenChange={setMoreOpen}>
            {/* Toggle button — only visible on mobile */}
            <div className="flex justify-center lg:hidden">
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1.5 text-muted-foreground hover:text-foreground"
                >
                  <span className="text-sm font-medium">
                    {moreOpen ? 'Voir moins' : 'Voir plus'}
                  </span>
                  <motion.div
                    animate={{ rotate: moreOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </Button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent forceMount className="hidden data-[state=open]:block lg:block lg:contents">
              <div className="space-y-3 sm:space-y-6 mt-2 lg:mt-0">
                {/* ─── 7. Recent Badges ─────────────────────────────────── */}
                <motion.div variants={itemVariants}>
                  <Card className="glass-card overflow-hidden">
                    <CardHeader className="pb-2 p-4 sm:p-6">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                          <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-primary" />
                          Badges récents
                        </CardTitle>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs text-muted-foreground"
                          onClick={() => navigate('profile')}
                        >
                          Voir tout
                          <ChevronRight className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                        {earnedBadges.map((badge, idx) => (
                          <motion.div
                            key={badge.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            className="flex flex-col items-center gap-1.5 min-w-[64px] sm:min-w-[72px] shrink-0"
                          >
                            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yoel-primary/10 to-yoel-gold/10 border border-yoel-primary/10 text-xl sm:text-2xl">
                              {badge.icon}
                            </div>
                            <span className="text-[9px] sm:text-[10px] text-muted-foreground text-center leading-tight font-medium">
                              {badge.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* ─── 8 & 9. Leaderboard + Word of the Day ──────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Leaderboard */}
                  <motion.div variants={itemVariants}>
                    <Card className="glass-card overflow-hidden h-full">
                      <CardHeader className="pb-2 p-4 sm:p-6">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                            <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-gold" />
                            Classement
                          </CardTitle>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs text-muted-foreground"
                            onClick={() => navigate('stats')}
                          >
                            Détails
                            <ChevronRight className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2 p-4 sm:p-6 pt-0 sm:pt-0">
                        {LEADERBOARD.map((player, idx) => (
                          <motion.div
                            key={player.rank}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                            className="flex items-center gap-2 sm:gap-3 rounded-xl bg-muted/30 p-2.5 sm:p-3 transition-colors hover:bg-muted/50"
                          >
                            <div
                              className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full font-bold text-xs sm:text-sm ${
                                player.rank === 1
                                  ? 'bg-yoel-gold/20 text-yoel-gold'
                                  : player.rank === 2
                                  ? 'bg-gray-400/20 text-gray-500'
                                  : 'bg-amber-700/20 text-amber-700'
                              }`}
                            >
                              {player.rank === 1 ? (
                                <Crown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                              ) : (
                                player.rank
                              )}
                            </div>
                            <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                              <AvatarFallback className="text-[10px] sm:text-xs font-semibold bg-yoel-blue/10 text-yoel-blue">
                                {player.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs sm:text-sm font-medium truncate flex items-center gap-1">
                                {player.name}
                                {player.isPremium && (
                                  <Star className="h-3 w-3 text-yoel-gold fill-yoel-gold" />
                                )}
                              </p>
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-muted-foreground">
                              {player.xp.toLocaleString()} XP
                            </span>
                          </motion.div>
                        ))}

                        {/* Current user rank hint */}
                        <Separator />
                        <div className="flex items-center gap-2 sm:gap-3 rounded-xl bg-yoel-primary/5 p-2.5 sm:p-3">
                          <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-yoel-primary/10 font-bold text-xs sm:text-sm text-yoel-primary">
                            12
                          </div>
                          <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                            <AvatarFallback className="text-[10px] sm:text-xs font-semibold bg-yoel-primary/10 text-yoel-primary">
                              {displayName
                                .split(' ')
                                .map((n) => n[0])
                                .join('')
                                .toUpperCase()
                                .slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs sm:text-sm font-medium truncate">{displayName} (vous)</p>
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-yoel-primary">
                            {xp.toLocaleString()} XP
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Word of the Day */}
                  <motion.div variants={itemVariants}>
                    <Card className="glass-card overflow-hidden h-full">
                      <CardHeader className="pb-2 p-4 sm:p-6">
                        <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                          <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-gold" />
                          Mot du jour
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 p-4 sm:p-6 pt-0 sm:pt-0">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl sm:text-2xl font-bold gradient-text-blue">
                              {wordOfTheDay.english}
                            </h3>
                            <Badge variant="secondary" className="text-[9px] px-1.5 py-0 shrink-0">
                              {wordOfTheDay.level}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground text-xs sm:text-sm">
                            {wordOfTheDay.french}
                          </p>
                          <p className="text-[10px] sm:text-xs text-muted-foreground font-mono">
                            {wordOfTheDay.phonetic}
                          </p>
                        </div>

                        <div className="rounded-xl bg-muted/40 p-2.5 sm:p-3">
                          <p className="text-xs sm:text-sm italic text-muted-foreground">
                            &ldquo;{wordOfTheDay.example}&rdquo;
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full text-xs"
                            onClick={() => {
                              speakWord(wordOfTheDay.english)
                            }}
                          >
                            <Volume2 className="h-3.5 w-3.5 mr-1" />
                            Écouter
                          </Button>
                          <Badge
                            variant="outline"
                            className="text-yoel-green border-yoel-green/30 text-[10px]"
                          >
                            +5 XP
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Premium Upsell Banner (only if not premium) */}
                {!isPremium && (
                  <motion.div variants={itemVariants}>
                    <Card
                      className="overflow-hidden border-0 cursor-pointer bg-gradient-to-r from-yoel-primary/10 via-yoel-gold/10 to-yoel-blue/10"
                      onClick={() => navigate('premium')}
                    >
                      <CardContent className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5">
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yoel-primary to-yoel-gold text-white text-lg sm:text-xl">
                          👑
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm sm:text-base gradient-text-premium">
                            Passez à Premium
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            XP x2, pas de publicités, et plus encore !
                          </p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* Level Progress Overview */}
                <motion.div variants={itemVariants}>
                  <Card className="glass-card overflow-hidden">
                    <CardHeader className="pb-2 p-4 sm:p-6">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                          <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yoel-primary" />
                          Progression par niveau
                        </CardTitle>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs text-muted-foreground"
                          onClick={() => navigate('levels')}
                        >
                          D\u00e9tails
                          <ChevronRight className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2.5 p-4 sm:p-6 pt-0 sm:pt-0">
                      {LEVELS.map((lvl, idx) => (
                        <div key={lvl.code} className="space-y-1">
                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="flex items-center gap-1.5 sm:gap-2">
                              <span className="text-sm">{lvl.icon}</span>
                              <span className="font-medium">
                                {lvl.code} - {lvl.name}
                              </span>
                            </span>
                            <span className="text-muted-foreground text-[10px] sm:text-xs">
                              {lvl.completedUnits}/{lvl.units}
                            </span>
                          </div>
                          <Progress value={lvl.progress} className="h-1 sm:h-1.5" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </motion.div>

      {/* ─── 10. Bottom Navigation Bar (Mobile) ──────────────────────── */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 25 }}
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
      >
        <div className="mx-auto max-w-md">
          <div className="glass mx-2 sm:mx-3 mb-2 sm:mb-3 flex items-center justify-around rounded-2xl border border-border/50 py-1 px-1 shadow-lg">
            <BottomNavItem
              icon={Home}
              label="Accueil"
              active={true}
              onClick={() => navigate('dashboard')}
            />
            <BottomNavItem
              icon={BookOpen}
              label="Leçons"
              onClick={() => navigate('levels')}
            />
            <BottomNavItem
              icon={MessageCircle}
              label="Chat"
              onClick={() => navigate('chat')}
            />
            <BottomNavItem
              icon={BarChart3}
              label="Stats"
              onClick={() => navigate('stats')}
            />
            <BottomNavItem
              icon={User}
              label="Profil"
              onClick={() => navigate('profile')}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
