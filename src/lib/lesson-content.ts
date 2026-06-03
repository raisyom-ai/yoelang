import { A2_L1, A2_L2, A2_L3, A2_L4, A2_L5, A2_L6, A2_L7, A2_L8, A2_L9, A2_L10, A2_L11, A2_L12, A2_L13, A2_L14, A2_L15, A2_L16, A2_L17, A2_L18, A2_L19, A2_L20, A2_L21, A2_L22, A2_L23, A2_L24, A2_L25 } from './a2-lesson-content-units1-5'
import { A2_L26, A2_L27, A2_L28, A2_L29, A2_L30, A2_L31, A2_L32, A2_L33, A2_L34, A2_L35, A2_L36, A2_L37, A2_L38, A2_L39, A2_L40, A2_L41, A2_L42, A2_L43, A2_L44, A2_L45, A2_L46, A2_L47, A2_L48, A2_L49, A2_L50 } from './a2-lesson-content-units6-10'
import { B1_L1, B1_L2, B1_L3, B1_L4, B1_L5, B1_L6, B1_L7, B1_L8, B1_L9, B1_L10, B1_L11, B1_L12, B1_L13, B1_L14, B1_L15, B1_L16, B1_L17, B1_L18, B1_L19, B1_L20 } from './b1-lesson-content-units1-4'
import { B1_L21, B1_L22, B1_L23, B1_L24, B1_L25, B1_L26, B1_L27, B1_L28, B1_L29, B1_L30, B1_L31, B1_L32, B1_L33, B1_L34, B1_L35, B1_L36, B1_L37, B1_L38, B1_L39, B1_L40 } from './b1-lesson-content-units5-8'
import { B1_L41, B1_L42, B1_L43, B1_L44, B1_L45, B1_L46, B1_L47, B1_L48, B1_L49, B1_L50, B1_L51, B1_L52, B1_L53, B1_L54, B1_L55, B1_L56, B1_L57, B1_L58, B1_L59, B1_L60 } from './b1-lesson-content-units9-12'
import { B2_L1, B2_L2, B2_L3, B2_L4, B2_L5 } from './b2-unit1-content'
import { B2_L6, B2_L7, B2_L8, B2_L9, B2_L10 } from './b2-unit2-content'
import { B2_L11, B2_L12, B2_L13, B2_L14, B2_L15 } from './b2-unit3-content'
import { B2_L16, B2_L17, B2_L18, B2_L19, B2_L20 } from './b2-unit4-content'
import { B2_L21, B2_L22, B2_L23, B2_L24, B2_L25 } from './b2-unit5-content'
import { B2_L26, B2_L27, B2_L28, B2_L29, B2_L30 } from './b2-unit6-content'
import { B2_L31, B2_L32, B2_L33, B2_L34, B2_L35 } from './b2-unit7-content'
import { B2_L36, B2_L37, B2_L38, B2_L39, B2_L40 } from './b2-unit8-content'
import { B2_L41, B2_L42, B2_L43, B2_L44, B2_L45 } from './b2-unit9-content'
import { B2_L46, B2_L47, B2_L48, B2_L49, B2_L50 } from './b2-unit10-content'
import { B2_L51, B2_L52, B2_L53, B2_L54, B2_L55 } from './b2-unit11-content'
import { B2_L56, B2_L57, B2_L58, B2_L59, B2_L60 } from './b2-unit12-content'
import { C2_L1, C2_L2, C2_L3, C2_L4, C2_L5 } from './c2-unit1-content'
import { C2_L6, C2_L7, C2_L8, C2_L9, C2_L10 } from './c2-unit2-content'
import { C2_L11, C2_L12, C2_L13, C2_L14, C2_L15 } from './c2-unit3-content'
import { C2_L16, C2_L17, C2_L18, C2_L19, C2_L20 } from './c2-unit4-content'
import { C2_L21, C2_L22, C2_L23, C2_L24, C2_L25 } from './c2-unit5-content'
import { C2_L26, C2_L27, C2_L28, C2_L29, C2_L30 } from './c2-unit6-content'
import { C2_L31, C2_L32, C2_L33, C2_L34, C2_L35 } from './c2-unit7-content'
import { C2_L36, C2_L37, C2_L38, C2_L39, C2_L40 } from './c2-unit8-content'
import { C2_L41, C2_L42, C2_L43, C2_L44, C2_L45 } from './c2-unit9-content'
import { C2_L46, C2_L47, C2_L48, C2_L49, C2_L50 } from './c2-unit10-content'
import { C2_L51, C2_L52, C2_L53, C2_L54, C2_L55 } from './c2-unit11-content'
import { C2_L56, C2_L57, C2_L58, C2_L59, C2_L60 } from './c2-unit12-content'
import { C2_L61, C2_L62, C2_L63, C2_L64, C2_L65 } from './c2-unit13-content'
import { C2_L66, C2_L67, C2_L68, C2_L69, C2_L70 } from './c2-unit14-content'

// ─── Lesson Content Data for YOELANG ─────────────────────────────────────────
// Unique content for each lesson, mapped by LESSON ID (not unit ID)
// Inspired by Harvard's practical English pedagogy — rigorous, practical, progressive

export interface VocabWord {
  english: string
  french: string
  phonetic: string
  example: string
  exampleTranslation: string
}

export interface GrammarRule {
  title: string
  explanation: string
  examples: { sentence: string; translation: string; isCorrect: boolean }[]
  commonMistakes: { wrong: string; correct: string; explanation: string }[]
}

export interface DialogueLine {
  speaker: string
  role: 'A' | 'B'
  text: string
  translation: string
}

export interface PronunciationItem {
  word: string
  phonetic: string
  meaning: string
  tip: string
}

export interface LessonContent {
  vocab: VocabWord[]
  grammar: GrammarRule
  conversation: DialogueLine[]
  conversationTitle: string
  pronunciation: PronunciationItem[]
}

// ─── FALLBACK CONTENT ─────────────────────────────────────────────────────────

const FALLBACK_CONTENT: LessonContent = {
  vocab: [
    { english: 'Hello', french: 'Bonjour', phonetic: '/həˈloʊ/', example: 'Hello, how are you?', exampleTranslation: 'Bonjour, comment allez-vous ?' },
    { english: 'Goodbye', french: 'Au revoir', phonetic: '/ɡʊdˈbaɪ/', example: 'Goodbye, see you tomorrow!', exampleTranslation: 'Au revoir, à demain !' },
  ],
  grammar: {
    title: 'Basic Grammar',
    explanation: 'Content coming soon for this lesson.',
    examples: [
      { sentence: 'I am a student.', translation: 'Je suis étudiant.', isCorrect: true },
    ],
    commonMistakes: [],
  },
  conversation: [
    { speaker: 'A', role: 'A', text: 'Hello!', translation: 'Bonjour !' },
    { speaker: 'B', role: 'B', text: 'Hi!', translation: 'Salut !' },
  ],
  conversationTitle: 'Conversation',
  pronunciation: [
    { word: 'Hello', phonetic: '/həˈloʊ/', meaning: 'Bonjour', tip: 'Prononcez "hélo" avec le h expiré.' },
  ],
}

// Lesson content for A1 Units 1-4
// YOELANG English Learning App for Francophone Users
// Inspired by Harvard's practical English pedagogy — rigorous, practical, progressive


// ════════════════════════════════════════════════════════════════════════════════
// UNIT 1: GREETINGS & INTRODUCTIONS (a1-l1 through a1-l5)
// ════════════════════════════════════════════════════════════════════════════════

// ─── a1-l1: Hello & Goodbye (vocabulary) ───────────────────────────────────────
export const A1_L1: LessonContent = {
  vocab: [
    { english: 'Hello', french: 'Bonjour', phonetic: '/həˈloʊ/', example: 'Hello! How are you today?', exampleTranslation: 'Bonjour ! Comment allez-vous aujourd\'hui ?' },
    { english: 'Goodbye', french: 'Au revoir', phonetic: '/ɡʊdˈbaɪ/', example: 'Goodbye! See you tomorrow!', exampleTranslation: 'Au revoir ! À demain !' },
    { english: 'Good morning', french: 'Bonjour (matin)', phonetic: '/ɡʊd ˈmɔːrnɪŋ/', example: 'Good morning, Mrs. Dupont!', exampleTranslation: 'Bonjour, Madame Dupont !' },
    { english: 'Good night', french: 'Bonne nuit', phonetic: '/ɡʊd naɪt/', example: 'Good night! Sleep well!', exampleTranslation: 'Bonne nuit ! Dors bien !' },
    { english: 'See you later', french: 'À plus tard', phonetic: '/siː juː ˈleɪtər/', example: 'I have to go. See you later!', exampleTranslation: 'Je dois y aller. À plus tard !' },
  ],
  grammar: {
    title: 'Subject Pronouns in Greetings',
    explanation: 'Dans les salutations, on utilise les pronoms sujets : I (je), you (tu/vous), he (il), she (elle), it (ce/c\'est), we (nous), they (ils/elles). Exemples : "I am fine", "You are welcome", "She is here". Ces pronoms sont essentiels pour former des phrases en anglais.',
    examples: [
      { sentence: 'I am happy to meet you.', translation: 'Je suis content(e) de vous rencontrer.', isCorrect: true },
      { sentence: 'You are very kind.', translation: 'Vous êtes très gentil(le).', isCorrect: true },
      { sentence: 'He are my friend.', translation: '', isCorrect: false },
      { sentence: 'She is a new student.', translation: 'Elle est une nouvelle étudiante.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'He are my friend.', correct: 'He is my friend.', explanation: 'On utilise "is" avec "he" et "she", jamais "are".' },
      { wrong: 'I is happy.', correct: 'I am happy.', explanation: 'On utilise toujours "am" avec "I", jamais "is".' },
    ],
  },
  conversation: [
    { speaker: 'Claire', role: 'A', text: 'Hello! Good morning!', translation: 'Bonjour ! Bonjour !' },
    { speaker: 'Marc', role: 'B', text: 'Good morning, Claire! How are you?', translation: 'Bonjour, Claire ! Comment allez-vous ?' },
    { speaker: 'Claire', role: 'A', text: 'I am fine, thank you! And you?', translation: 'Je vais bien, merci ! Et vous ?' },
    { speaker: 'Marc', role: 'B', text: 'I am good! It is nice to see you.', translation: 'Je vais bien ! C\'est sympa de vous voir.' },
    { speaker: 'Claire', role: 'A', text: 'Nice to see you too! I have to go now. Goodbye!', translation: 'Sympa de vous voir aussi ! Je dois y aller. Au revoir !' },
    { speaker: 'Marc', role: 'B', text: 'Goodbye, Claire! See you later!', translation: 'Au revoir, Claire ! À plus tard !' },
  ],
  conversationTitle: 'Saluer et dire au revoir',
  pronunciation: [
    { word: 'Hello', phonetic: '/həˈloʊ/', meaning: 'Bonjour', tip: 'Le "h" anglais est expiré : mettez la main devant la bouche, vous devez sentir l\'air. Ne le rendez pas muet comme en français.' },
    { word: 'Goodbye', phonetic: '/ɡʊdˈbaɪ/', meaning: 'Au revoir', tip: 'Prononcez "good" comme "guèd" et "bye" comme "baï". L\'accent est sur "bye".' },
    { word: 'Good morning', phonetic: '/ɡʊd ˈmɔːrnɪŋ/', meaning: 'Bonjour (matin)', tip: 'Le "or" se prononce "or" long comme dans "port". Le "ng" final : langue contre le palais, ne dites pas "mor-nin".' },
    { word: 'Good night', phonetic: '/ɡʊd naɪt/', meaning: 'Bonne nuit', tip: 'Le "igh" = "aï" : prononcez "naït". Ne dites surtout pas "nuit" à la française !' },
  ],
}

// ─── a1-l2: How Are You? (conversation) ────────────────────────────────────────
export const A1_L2: LessonContent = {
  vocab: [
    { english: 'Fine', french: 'Bien', phonetic: '/faɪn/', example: 'I am fine, thank you.', exampleTranslation: 'Je vais bien, merci.' },
    { english: 'Tired', french: 'Fatigué(e)', phonetic: '/taɪərd/', example: 'I am tired today.', exampleTranslation: 'Je suis fatigué(e) aujourd\'hui.' },
    { english: 'Happy', french: 'Heureux/Heureuse', phonetic: '/ˈhæpi/', example: 'She is very happy!', exampleTranslation: 'Elle est très heureuse !' },
    { english: 'Busy', french: 'Occupé(e)', phonetic: '/ˈbɪzi/', example: 'He is busy right now.', exampleTranslation: 'Il est occupé en ce moment.' },
    { english: 'Sad', french: 'Triste', phonetic: '/sæd/', example: 'I am sad today.', exampleTranslation: 'Je suis triste aujourd\'hui.' },
  ],
  grammar: {
    title: 'Questions avec "How"',
    explanation: 'Pour demander comment quelqu\'un va : "How are you?" (Comment allez-vous ?), "How is she?" (Comment va-t-elle ?), "How are they?" (Comment vont-ils ?). On répond avec le verbe "be" : "I am fine", "She is tired", "They are busy". Dans les questions, le verbe "be" se place avant le sujet : "How are you?" (pas "How you are?").',
    examples: [
      { sentence: 'How are you today?', translation: 'Comment allez-vous aujourd\'hui ?', isCorrect: true },
      { sentence: 'How is your mother?', translation: 'Comment va votre mère ?', isCorrect: true },
      { sentence: 'How are he?', translation: '', isCorrect: false },
      { sentence: 'How is your friend?', translation: 'Comment va votre ami(e) ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'How are he?', correct: 'How is he?', explanation: 'Avec "he", on utilise "is", pas "are".' },
      { wrong: 'How is you?', correct: 'How are you?', explanation: 'Avec "you", on utilise toujours "are".' },
    ],
  },
  conversation: [
    { speaker: 'Sophie', role: 'A', text: 'Hi! How are you?', translation: 'Salut ! Comment vas-tu ?' },
    { speaker: 'Pierre', role: 'B', text: 'I am fine, thanks. And you?', translation: 'Je vais bien, merci. Et toi ?' },
    { speaker: 'Sophie', role: 'A', text: 'I am a little tired today. I worked late.', translation: 'Je suis un peu fatiguée aujourd\'hui. J\'ai travaillé tard.' },
    { speaker: 'Pierre', role: 'B', text: 'Oh! How is your sister? Is she busy?', translation: 'Oh ! Comment va ta sœur ? Est-elle occupée ?' },
    { speaker: 'Sophie', role: 'A', text: 'She is happy! She has a new job.', translation: 'Elle est heureuse ! Elle a un nouveau travail.' },
    { speaker: 'Pierre', role: 'B', text: 'That is great! I am happy for her.', translation: 'C\'est super ! Je suis content pour elle.' },
  ],
  conversationTitle: 'Comment allez-vous ?',
  pronunciation: [
    { word: 'Fine', phonetic: '/faɪn/', meaning: 'Bien', tip: 'Le "i" est long : "faïn". Ne prononcez pas "fin" à la française, le son est beaucoup plus long.' },
    { word: 'Tired', phonetic: '/taɪərd/', meaning: 'Fatigué(e)', tip: 'Prononcez "taï-erd" — le "i" est long et il y a un léger son "er" avant le "d" final.' },
    { word: 'Happy', phonetic: '/ˈhæpi/', meaning: 'Heureux/Heureuse', tip: 'Le "a" est très ouvert, comme dans "cat" : "ha-ppi". Ne dites pas "épi".' },
    { word: 'Busy', phonetic: '/ˈbɪzi/', meaning: 'Occupé(e)', tip: 'Le "u" se prononce comme un "i" bref : "bi-zi". Pas "bou-zi" !' },
  ],
}

// ─── a1-l3: Introducing Yourself (conversation) ───────────────────────────────
export const A1_L3: LessonContent = {
  vocab: [
    { english: 'Name', french: 'Nom', phonetic: '/neɪm/', example: 'My name is Julie.', exampleTranslation: 'Je m\'appelle Julie.' },
    { english: 'Age', french: 'Âge', phonetic: '/eɪdʒ/', example: 'What is your age?', exampleTranslation: 'Quel est votre âge ?' },
    { english: 'Country', french: 'Pays', phonetic: '/ˈkʌntri/', example: 'I am from a big country.', exampleTranslation: 'Je viens d\'un grand pays.' },
    { english: 'Language', french: 'Langue', phonetic: '/ˈlæŋɡwɪdʒ/', example: 'I speak two languages.', exampleTranslation: 'Je parle deux langues.' },
    { english: 'From', french: 'De (provenance)', phonetic: '/frɒm/', example: 'I am from France.', exampleTranslation: 'Je suis de France.' },
  ],
  grammar: {
    title: 'Se présenter : My name is / I am from / I am X years old',
    explanation: 'Pour vous présenter, utilisez trois structures essentielles : "My name is..." (Je m\'appelle...), "I am from..." (Je viens de...), "I am ... years old" (J\'ai ... ans). ATTENTION : en anglais on dit "I am 25 years old", PAS "I have 25 years". Le verbe "be" (am/is/are) remplace "avoir" pour l\'âge. "Nice to meet you" = Enchanté(e).',
    examples: [
      { sentence: 'My name is Pierre.', translation: 'Je m\'appelle Pierre.', isCorrect: true },
      { sentence: 'I am from France.', translation: 'Je viens de France.', isCorrect: true },
      { sentence: 'I have 25 years old.', translation: '', isCorrect: false },
      { sentence: 'She is from Canada.', translation: 'Elle vient du Canada.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I have 25 years old.', correct: 'I am 25 years old.', explanation: 'En anglais, on utilise "am" (être) pour l\'âge, pas "have" (avoir). C\'est une différence majeure avec le français.' },
      { wrong: 'I am come from France.', correct: 'I come from France. / I am from France.', explanation: 'On dit "I come from" ou "I am from", mais on ne combine PAS les deux : pas "I am come from".' },
    ],
  },
  conversation: [
    { speaker: 'Julie', role: 'A', text: 'Hello! My name is Julie. What is your name?', translation: 'Bonjour ! Je m\'appelle Julie. Comment vous appelez-vous ?' },
    { speaker: 'Ahmed', role: 'B', text: 'Hi Julie! I am Ahmed. Nice to meet you!', translation: 'Salut Julie ! Je suis Ahmed. Enchanté !' },
    { speaker: 'Julie', role: 'A', text: 'Nice to meet you too! Where are you from?', translation: 'Enchantée aussi ! D\'où venez-vous ?' },
    { speaker: 'Ahmed', role: 'B', text: 'I am from Morocco. And you?', translation: 'Je viens du Maroc. Et vous ?' },
    { speaker: 'Julie', role: 'A', text: 'I am from France. I am 22 years old. I speak French and English.', translation: 'Je viens de France. J\'ai 22 ans. Je parle français et anglais.' },
    { speaker: 'Ahmed', role: 'B', text: 'I am 25. I speak Arabic, French, and a little English!', translation: 'J\'ai 25 ans. Je parle arabe, français et un peu anglais !' },
  ],
  conversationTitle: 'Se présenter',
  pronunciation: [
    { word: 'Name', phonetic: '/neɪm/', meaning: 'Nom', tip: 'Le "a" est long : "néïm". Ne dites pas "nam". Le "e" final est silencieux.' },
    { word: 'Age', phonetic: '/eɪdʒ/', meaning: 'Âge', tip: 'Prononcez "éïdj" — le son "dj" comme dans "djinn" arabe. Le "g" doux devant "e".' },
    { word: 'Country', phonetic: '/ˈkʌntri/', meaning: 'Pays', tip: 'Le "ou" est très ouvert comme dans "cou" : "keun-tri". L\'accent est sur la première syllabe.' },
    { word: 'Language', phonetic: '/ˈlæŋɡwɪdʒ/', meaning: 'Langue', tip: 'Le "a" est ouvert : "laeng-guidj". Le "w" se lie au "i" suivant. Le "ge" final = "dj".' },
  ],
}

// ─── a1-l4: Present Simple: Be (grammar) ───────────────────────────────────────
export const A1_L4: LessonContent = {
  vocab: [
    { english: 'Student', french: 'Étudiant(e)', phonetic: '/ˈstjuːdənt/', example: 'I am a student.', exampleTranslation: 'Je suis étudiant(e).' },
    { english: 'Teacher', french: 'Professeur', phonetic: '/ˈtiːtʃər/', example: 'She is a teacher.', exampleTranslation: 'Elle est professeur.' },
    { english: 'Doctor', french: 'Médecin', phonetic: '/ˈdɒktər/', example: 'He is a doctor.', exampleTranslation: 'Il est médecin.' },
    { english: 'Friend', french: 'Ami(e)', phonetic: '/frend/', example: 'They are my friends.', exampleTranslation: 'Ce sont mes amis.' },
    { english: 'Nurse', french: 'Infirmier/Infirmière', phonetic: '/nɜːrs/', example: 'My sister is a nurse.', exampleTranslation: 'Ma sœur est infirmière.' },
  ],
  grammar: {
    title: 'Present Simple: Be — Conjugaison complète',
    explanation: 'Le verbe "be" (être) est le verbe le plus important en anglais. Conjugaison : I am (je suis), you are (tu es / vous êtes), he/she/it is (il/elle est), we are (nous sommes), they are (ils/elles sont). Contractions : I\'m, you\'re, he\'s, she\'s, it\'s, we\'re, they\'re. Négatif : I am not, you are not (aren\'t), he/she/it is not (isn\'t). Questions : Am I...? Are you...? Is he/she/it...? Are we/they...?',
    examples: [
      { sentence: 'I am a student.', translation: 'Je suis étudiant(e).', isCorrect: true },
      { sentence: 'She are a doctor.', translation: '', isCorrect: false },
      { sentence: 'We are friends.', translation: 'Nous sommes amis.', isCorrect: true },
      { sentence: 'He isn\'t a teacher.', translation: 'Il n\'est pas professeur.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She are a doctor.', correct: 'She is a doctor.', explanation: 'Avec he/she/it, on utilise TOUJOURS "is", jamais "are". C\'est l\'erreur la plus fréquente des francophones.' },
      { wrong: 'They is my friends.', correct: 'They are my friends.', explanation: 'Avec they/we/you, on utilise "are", pas "is".' },
    ],
  },
  conversation: [
    { speaker: 'Léa', role: 'A', text: 'Hello! I am Léa. I am a student. I am 20 years old.', translation: 'Bonjour ! Je suis Léa. Je suis étudiante. J\'ai 20 ans.' },
    { speaker: 'Tom', role: 'B', text: 'Hi Léa! I am Tom. I am a teacher.', translation: 'Salut Léa ! Je suis Tom. Je suis professeur.' },
    { speaker: 'Léa', role: 'A', text: 'Are you from London?', translation: 'Êtes-vous de Londres ?' },
    { speaker: 'Tom', role: 'B', text: 'Yes, I am! Are you and Marie friends?', translation: 'Oui ! Vous et Marie êtes amis ?' },
    { speaker: 'Léa', role: 'A', text: 'Yes, we are! She is my best friend. She is a nurse.', translation: 'Oui ! Elle est ma meilleure amie. Elle est infirmière.' },
    { speaker: 'Tom', role: 'B', text: 'That is nice! I am not from here. I am from Manchester.', translation: 'C\'est sympa ! Je ne suis pas d\'ici. Je suis de Manchester.' },
  ],
  conversationTitle: 'Parler de sa profession',
  pronunciation: [
    { word: 'Am', phonetic: '/æm/', meaning: 'Suis (I am)', tip: 'Le "a" est très ouvert comme dans "chat" : "aem". Contraction : "I\'m" = "aïm".' },
    { word: 'Is', phonetic: '/ɪz/', meaning: 'Est (he/she/it is)', tip: 'Prononcez "iz" avec le son "z" sonore. Contraction : "he\'s" = "hiz", "she\'s" = "shiz".' },
    { word: 'Are', phonetic: '/ɑːr/', meaning: 'Es/êtes/sont', tip: 'Le "ar" est long et ouvert : "aar". Contraction : "you\'re" = "your", "we\'re" = "ouir".' },
    { word: 'Isn\'t', phonetic: '/ˈɪzənt/', meaning: 'N\'est pas', tip: 'Prononcez "iz-ent" — le "n" et le "t" sont clairs. Ne les avalez pas.' },
  ],
}

// ─── a1-l5: Greeting Sounds (pronunciation) ────────────────────────────────────
export const A1_L5: LessonContent = {
  vocab: [
    { english: 'Hi', french: 'Salut', phonetic: '/haɪ/', example: 'Hi! How are you?', exampleTranslation: 'Salut ! Comment vas-tu ?' },
    { english: 'Hey', french: 'Hé / Salut', phonetic: '/heɪ/', example: 'Hey! Nice to see you!', exampleTranslation: 'Hé ! Sympa de te voir !' },
    { english: 'Welcome', french: 'Bienvenue', phonetic: '/ˈwelkəm/', example: 'Welcome to our school!', exampleTranslation: 'Bienvenue dans notre école !' },
    { english: 'Bye', french: 'Salut / Au revoir', phonetic: '/baɪ/', example: 'Bye! See you soon!', exampleTranslation: 'Salut ! À bientôt !' },
    { english: 'Cheers', french: 'Salut / Santé', phonetic: '/tʃɪrz/', example: 'Cheers! Have a good day!', exampleTranslation: 'Salut ! Bonne journée !' },
  ],
  grammar: {
    title: 'Contractions dans les salutations',
    explanation: 'Dans les salutations informelles, on utilise souvent les contractions : "I\'m" (I am), "you\'re" (you are), "it\'s" (it is), "we\'re" (we are). "Nice to meet you" = Enchanté(e). "See you" = À plus / À bientôt. ATTENTION : "You\'re welcome" (De rien) ≠ "Your welcome" (Ton accueil). "It\'s nice" = C\'est sympa ≠ "Its nice" (incorrect ici).',
    examples: [
      { sentence: 'I\'m happy to see you!', translation: 'Je suis content(e) de te voir !', isCorrect: true },
      { sentence: 'It\'s nice to meet you.', translation: 'C\'est sympa de te rencontrer.', isCorrect: true },
      { sentence: 'Your welcome.', translation: '', isCorrect: false },
      { sentence: 'We\'re happy you\'re here!', translation: 'Nous sommes contents que tu sois là !', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Your welcome.', correct: 'You\'re welcome.', explanation: '"You\'re" = "you are" (vous êtes), pas "your" (ton/ta/votre). C\'est une erreur très courante même chez les anglophones !' },
      { wrong: 'See your later.', correct: 'See you later.', explanation: 'On dit "see you" (te voir), pas "see your" (ton/ta).' },
    ],
  },
  conversation: [
    { speaker: 'Emma', role: 'A', text: 'Hey! Welcome! I\'m Emma.', translation: 'Hé ! Bienvenue ! Je suis Emma.' },
    { speaker: 'Luc', role: 'B', text: 'Hi Emma! I\'m Luc. It\'s nice to meet you!', translation: 'Salut Emma ! Je suis Luc. Enchanté !' },
    { speaker: 'Emma', role: 'A', text: 'You\'re welcome here! How are you?', translation: 'Tu es le bienvenu ici ! Comment vas-tu ?' },
    { speaker: 'Luc', role: 'B', text: 'I\'m fine, thanks! Are you a student here?', translation: 'Je vais bien, merci ! Es-tu étudiant ici ?' },
    { speaker: 'Emma', role: 'A', text: 'Yes, I\'m a new student. Bye for now, see you later!', translation: 'Oui, je suis un nouvel étudiant. À plus, à plus tard !' },
    { speaker: 'Luc', role: 'B', text: 'Cheers, Emma! See you soon!', translation: 'Salut, Emma ! À bientôt !' },
  ],
  conversationTitle: 'Salutations informelles',
  pronunciation: [
    { word: 'Hi', phonetic: '/haɪ/', meaning: 'Salut', tip: 'Le "h" est expiré et le "i" est long : "haï". Plus court et décontracté que "hello". N\'oubliez pas d\'expirer le "h" !' },
    { word: 'Hey', phonetic: '/heɪ/', meaning: 'Hé / Salut', tip: 'Prononcez "héï" — le "h" est expiré et le "ey" sonne comme "éi". Plus familier que "hi".' },
    { word: 'Welcome', phonetic: '/ˈwelkəm/', meaning: 'Bienvenue', tip: 'Le "w" initial : arrondissez les lèvres comme pour dire "oui". "Ouel-kem". Le "l" est clair, le "e" final est réduit.' },
    { word: 'Bye', phonetic: '/baɪ/', meaning: 'Au revoir', tip: 'Prononcez "baï" — un seul son bref. Plus informel que "goodbye". L\'accent est sur cette unique syllabe.' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 2: NUMBERS & COUNTING (a1-l6 through a1-l10)
// ════════════════════════════════════════════════════════════════════════════════

// ─── a1-l6: Numbers 1-20 (vocabulary) ─────────────────────────────────────────
export const A1_L6: LessonContent = {
  vocab: [
    { english: 'One', french: 'Un', phonetic: '/wʌn/', example: 'I have one brother.', exampleTranslation: 'J\'ai un frère.' },
    { english: 'Five', french: 'Cinq', phonetic: '/faɪv/', example: 'There are five students.', exampleTranslation: 'Il y a cinq étudiants.' },
    { english: 'Twelve', french: 'Douze', phonetic: '/twelv/', example: 'It is twelve o\'clock.', exampleTranslation: 'Il est midi (douze heures).' },
    { english: 'Twenty', french: 'Vingt', phonetic: '/ˈtwenti/', example: 'She is twenty years old.', exampleTranslation: 'Elle a vingt ans.' },
    { english: 'Eight', french: 'Huit', phonetic: '/eɪt/', example: 'I wake up at eight.', exampleTranslation: 'Je me réveille à huit heures.' },
  ],
  grammar: {
    title: 'Singulier et pluriel avec les nombres',
    explanation: 'Après "one", le nom est au singulier : "one book" (un livre). Après tout autre nombre (two, three, five...), le nom est au pluriel : "two books", "three pens", "five students". Le pluriel régulier se forme en ajoutant -s au nom. Pluriels irréguliers courants : man→men, woman→women, child→children, person→people.',
    examples: [
      { sentence: 'I have one book and three pens.', translation: 'J\'ai un livre et trois stylos.', isCorrect: true },
      { sentence: 'She has two brother.', translation: '', isCorrect: false },
      { sentence: 'There are five students in the class.', translation: 'Il y a cinq étudiants dans la classe.', isCorrect: true },
      { sentence: 'I need one chair and four tables.', translation: 'J\'ai besoin d\'une chaise et de quatre tables.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She has two brother.', correct: 'She has two brothers.', explanation: 'Après un nombre supérieur à 1, le nom prend un "s" : brother → brothers.' },
      { wrong: 'Three child are here.', correct: 'Three children are here.', explanation: 'Le pluriel de "child" est irrégulier : "children", pas "childs".' },
    ],
  },
  conversation: [
    { speaker: 'Marie', role: 'A', text: 'How many brothers do you have?', translation: 'Combien de frères as-tu ?' },
    { speaker: 'James', role: 'B', text: 'I have one brother and two sisters.', translation: 'J\'ai un frère et deux sœurs.' },
    { speaker: 'Marie', role: 'A', text: 'That\'s nice! How old are they?', translation: 'C\'est sympa ! Quel âge ont-ils ?' },
    { speaker: 'James', role: 'B', text: 'My brother is twelve and my sisters are five and eight.', translation: 'Mon frère a douze ans et mes sœurs ont cinq et huit ans.' },
    { speaker: 'Marie', role: 'A', text: 'I have twenty students in my class. Five are from France.', translation: 'J\'ai vingt étudiants dans ma classe. Cinq viennent de France.' },
    { speaker: 'James', role: 'B', text: 'Wow! I only have eight students in my English class.', translation: 'Waouh ! J\'ai seulement huit étudiants dans mon cours d\'anglais.' },
  ],
  conversationTitle: 'Parler de sa famille et des nombres',
  pronunciation: [
    { word: 'One', phonetic: '/wʌn/', meaning: 'Un', tip: 'Prononcez "ouanne" — le "o" est ouvert. ATTENTION : ne dites pas "ouèn" ni "on". Le "w" initial est crucial.' },
    { word: 'Five', phonetic: '/faɪv/', meaning: 'Cinq', tip: 'Le "i" est long : "faïv". Le "v" final est doux mais audible, ne l\'oubliez pas.' },
    { word: 'Twelve', phonetic: '/twelv/', meaning: 'Douze', tip: 'Le "w" se forme en arrondissant les lèvres, puis "elv" : "touelv". Le "v" final est sonore.' },
    { word: 'Twenty', phonetic: '/ˈtwenti/', meaning: 'Vingt', tip: 'Prononcez "toué-ni" — le "t" final peut être légèrement adouci. Ne dites pas "toui-enti".' },
  ],
}

// ─── a1-l7: Numbers 20-100 (vocabulary) ────────────────────────────────────────
export const A1_L7: LessonContent = {
  vocab: [
    { english: 'Thirty', french: 'Trente', phonetic: '/ˈθɜːrti/', example: 'She is thirty years old.', exampleTranslation: 'Elle a trente ans.' },
    { english: 'Fifty', french: 'Cinquante', phonetic: '/ˈfɪfti/', example: 'The book costs fifty dollars.', exampleTranslation: 'Le livre coûte cinquante dollars.' },
    { english: 'Seventy', french: 'Soixante-dix', phonetic: '/ˈsevənti/', example: 'There are seventy people here.', exampleTranslation: 'Il y a soixante-dix personnes ici.' },
    { english: 'Hundred', french: 'Cent', phonetic: '/ˈhʌndrəd/', example: 'There are a hundred students.', exampleTranslation: 'Il y a cent étudiants.' },
    { english: 'Thousand', french: 'Mille', phonetic: '/ˈθaʊzənd/', example: 'The city has five thousand people.', exampleTranslation: 'La ville a cinq mille habitants.' },
  ],
  grammar: {
    title: '"How many...?" — Combien de... ?',
    explanation: 'On utilise "How many" + nom au pluriel pour demander une quantité dénombrable : "How many students?" (Combien d\'étudiants ?), "How many books?" (Combien de livres ?). On répond avec "There are..." ou un nombre. Pour les noms indénombrables (money, water, rice), on utilise "How much" au lieu de "How many". Après un nombre, "hundred" et "thousand" ne prennent PAS de "s" : "two hundred" (pas "two hundreds").',
    examples: [
      { sentence: 'How many students are in the class?', translation: 'Combien d\'étudiants y a-t-il dans la classe ?', isCorrect: true },
      { sentence: 'How many book do you have?', translation: '', isCorrect: false },
      { sentence: 'There are thirty students.', translation: 'Il y a trente étudiants.', isCorrect: true },
      { sentence: 'How much money do you need?', translation: 'De combien d\'argent avez-vous besoin ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'How many book do you have?', correct: 'How many books do you have?', explanation: 'Après "how many", le nom est TOUJOURS au pluriel : books, pas book.' },
      { wrong: 'Two hundreds people', correct: 'Two hundred people', explanation: 'Après un nombre, "hundred" ne prend pas de "s" : two hundred (pas hundreds).' },
    ],
  },
  conversation: [
    { speaker: 'Anna', role: 'A', text: 'How many people live in your city?', translation: 'Combien de personnes vivent dans ta ville ?' },
    { speaker: 'Paul', role: 'B', text: 'About fifty thousand people. And yours?', translation: 'Environ cinquante mille personnes. Et la tienne ?' },
    { speaker: 'Anna', role: 'A', text: 'Nearly a hundred thousand! It is a big city.', translation: 'Presque cent mille ! C\'est une grande ville.' },
    { speaker: 'Paul', role: 'B', text: 'My building has seventy apartments.', translation: 'Mon immeuble a soixante-dix appartements.' },
    { speaker: 'Anna', role: 'A', text: 'That is a lot! How many floors does it have?', translation: 'C\'est beaucoup ! Combien d\'étages a-t-il ?' },
    { speaker: 'Paul', role: 'B', text: 'Thirty floors! But I live on the fifth floor.', translation: 'Trente étages ! Mais j\'habite au cinquième étage.' },
  ],
  conversationTitle: 'Les grands nombres dans la vie',
  pronunciation: [
    { word: 'Thirty', phonetic: '/ˈθɜːrti/', meaning: 'Trente', tip: 'Le "th" est crucial : langue entre les dents, soufflez. Ne dites PAS "tirty". L\'accent est sur "THIR".' },
    { word: 'Fifty', phonetic: '/ˈfɪfti/', meaning: 'Cinquante', tip: 'Prononcez "fif-ti" — le son du milieu est "f" pas "v" : pas "fiv-ti". L\'accent est sur "FIF".' },
    { word: 'Hundred', phonetic: '/ˈhʌndrəd/', meaning: 'Cent', tip: 'Le "u" se prononce comme le "o" ouvert français : "han-dred". Le "e" final est réduit.' },
    { word: 'Thousand', phonetic: '/ˈθaʊzənd/', meaning: 'Mille', tip: 'Le "th" est expiré et le "ou" = "ao" : "thaou-zend". L\'accent est sur la première syllabe.' },
  ],
}

// ─── a1-l8: Telling the Time (conversation) ────────────────────────────────────
export const A1_L8: LessonContent = {
  vocab: [
    { english: 'O\'clock', french: 'Heure pile', phonetic: '/əˈklɒk/', example: 'It is three o\'clock.', exampleTranslation: 'Il est trois heures pile.' },
    { english: 'Half past', french: 'Et demie', phonetic: '/hæf pæst/', example: 'It is half past two.', exampleTranslation: 'Il est deux heures et demie.' },
    { english: 'Quarter', french: 'Quart', phonetic: '/ˈkwɔːrtər/', example: 'It is a quarter to five.', exampleTranslation: 'Il est cinq heures moins le quart.' },
    { english: 'Evening', french: 'Soir', phonetic: '/ˈiːvnɪŋ/', example: 'I study in the evening.', exampleTranslation: 'J\'étudie le soir.' },
    { english: 'Noon', french: 'Midi', phonetic: '/nuːn/', example: 'We have lunch at noon.', exampleTranslation: 'Nous déjeunons à midi.' },
  ],
  grammar: {
    title: 'Prépositions de temps : at, in, on',
    explanation: '"At" pour les heures précises : at 8 o\'clock, at half past three, at noon. "In" pour les parties du jour : in the morning, in the afternoon, in the evening. "On" pour les jours de la semaine : on Monday, on Friday. ATTENTION : on dit "at night" (la nuit), pas "in night". Et "in the morning" mais "at noon/midnight".',
    examples: [
      { sentence: 'The class starts at 9 o\'clock.', translation: 'Le cours commence à 9 heures.', isCorrect: true },
      { sentence: 'I study in the morning.', translation: 'J\'étudie le matin.', isCorrect: true },
      { sentence: 'We have class on 9 o\'clock.', translation: '', isCorrect: false },
      { sentence: 'She works in the evening.', translation: 'Elle travaille le soir.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'We have class on 9 o\'clock.', correct: 'We have class at 9 o\'clock.', explanation: 'Pour les heures, on utilise "at", pas "on". C\'est une erreur fréquente des francophones.' },
      { wrong: 'I work at the morning.', correct: 'I work in the morning.', explanation: 'Pour les parties du jour (morning/afternoon/evening), on utilise "in", pas "at".' },
    ],
  },
  conversation: [
    { speaker: 'Lucie', role: 'A', text: 'Excuse me, what time is it?', translation: 'Excusez-moi, quelle heure est-il ?' },
    { speaker: 'David', role: 'B', text: 'It is half past ten.', translation: 'Il est dix heures et demie.' },
    { speaker: 'Lucie', role: 'A', text: 'Oh no! The meeting is at eleven o\'clock!', translation: 'Oh non ! La réunion est à onze heures !' },
    { speaker: 'David', role: 'B', text: 'Don\'t worry, it is a quarter to eleven. You have time!', translation: 'Ne vous inquiétez pas, il est onze heures moins le quart. Vous avez le temps !' },
    { speaker: 'Lucie', role: 'A', text: 'Are you free in the evening?', translation: 'Êtes-vous libre le soir ?' },
    { speaker: 'David', role: 'B', text: 'Yes, I am free at noon and in the evening. Let\'s meet at 6 o\'clock!', translation: 'Oui, je suis libre à midi et le soir. Rencontrons-nous à 6 heures !' },
  ],
  conversationTitle: 'Demander l\'heure',
  pronunciation: [
    { word: 'O\'clock', phonetic: '/əˈklɒk/', meaning: 'Heure pile', tip: 'Prononcez "e-klok" — le "o\'" est réduit, presque silencieux. Ne dites pas "o-clock" en séparant.' },
    { word: 'Half past', phonetic: '/hæf pæst/', meaning: 'Et demie', tip: 'Le "a" de "half" est très ouvert : "haf". En anglais britannique, le "l" peut être muet. "Past" se prononce "pèst".' },
    { word: 'Quarter', phonetic: '/ˈkwɔːrtər/', meaning: 'Quart', tip: 'Le "qu" = "k" + "w" : "kouor-ter". Le "a" final est très réduit. Ne dites pas "kouar-tère".' },
    { word: 'Noon', phonetic: '/nuːn/', meaning: 'Midi', tip: 'Le "oo" est long : "noune". Comme dans "lune" mais avec un "n" final plus marqué.' },
  ],
}

// ─── a1-l9: Days & Months (vocabulary) ─────────────────────────────────────────
export const A1_L9: LessonContent = {
  vocab: [
    { english: 'Monday', french: 'Lundi', phonetic: '/ˈmʌndeɪ/', example: 'I have class on Monday.', exampleTranslation: 'J\'ai cours le lundi.' },
    { english: 'Wednesday', french: 'Mercredi', phonetic: '/ˈwenzdeɪ/', example: 'We meet on Wednesday.', exampleTranslation: 'Nous nous rencontrons le mercredi.' },
    { english: 'Saturday', french: 'Samedi', phonetic: '/ˈsætərdeɪ/', example: 'We go to the park on Saturday.', exampleTranslation: 'Nous allons au parc le samedi.' },
    { english: 'March', french: 'Mars', phonetic: '/mɑːrtʃ/', example: 'My birthday is in March.', exampleTranslation: 'Mon anniversaire est en mars.' },
    { english: 'November', french: 'Novembre', phonetic: '/noʊˈvembər/', example: 'It is cold in November.', exampleTranslation: 'Il fait froid en novembre.' },
  ],
  grammar: {
    title: '"On" avec les jours, "In" avec les mois',
    explanation: 'On utilise "on" devant les jours de la semaine : on Monday, on Wednesday, on Saturday. On utilise "in" devant les mois et les saisons : in March, in November, in summer, in winter. On utilise aussi "in" pour les années : in 2024. ATTENTION : "every Monday" (chaque lundi) ne prend PAS de préposition. "next Friday" (vendredi prochain) non plus.',
    examples: [
      { sentence: 'I have English class on Tuesday.', translation: 'J\'ai cours d\'anglais le mardi.', isCorrect: true },
      { sentence: 'We go on vacation in July.', translation: 'Nous partons en vacances en juillet.', isCorrect: true },
      { sentence: 'The exam is in Monday.', translation: '', isCorrect: false },
      { sentence: 'She was born in September.', translation: 'Elle est née en septembre.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The exam is in Monday.', correct: 'The exam is on Monday.', explanation: 'Pour les jours de la semaine, on utilise "on", pas "in". C\'est une règle stricte.' },
      { wrong: 'I visit my family on March.', correct: 'I visit my family in March.', explanation: 'Pour les mois, on utilise "in", pas "on". Moyen mnémotechnique : "in" pour les périodes longues (mois, année, saison).' },
    ],
  },
  conversation: [
    { speaker: 'Camille', role: 'A', text: 'What day is it today?', translation: 'Quel jour sommes-nous aujourd\'hui ?' },
    { speaker: 'Ryan', role: 'B', text: 'Today is Wednesday. My class is on Wednesday and Friday.', translation: 'Aujourd\'hui c\'est mercredi. Mon cours est le mercredi et le vendredi.' },
    { speaker: 'Camille', role: 'A', text: 'Are you free on Saturday?', translation: 'Es-tu libre samedi ?' },
    { speaker: 'Ryan', role: 'B', text: 'Yes! What do you want to do?', translation: 'Oui ! Que veux-tu faire ?' },
    { speaker: 'Camille', role: 'A', text: 'Let\'s go to the museum! The new exhibition opens in March.', translation: 'Allons au musée ! La nouvelle exposition ouvre en mars.' },
    { speaker: 'Ryan', role: 'B', text: 'Great idea! In November, we can also visit the Christmas market.', translation: 'Bonne idée ! En novembre, nous pourrons aussi visiter le marché de Noël.' },
  ],
  conversationTitle: 'Les jours et les mois',
  pronunciation: [
    { word: 'Monday', phonetic: '/ˈmʌndeɪ/', meaning: 'Lundi', tip: 'Le "o" est ouvert comme dans "come" : "man-deï". L\'accent est sur la première syllabe.' },
    { word: 'Wednesday', phonetic: '/ˈwenzdeɪ/', meaning: 'Mercredi', tip: 'ATTENTION : on prononce "OUENZ-di", le "d" du milieu disparaît ! Ne dites surtout pas "wed-nes-day".' },
    { word: 'March', phonetic: '/mɑːrtʃ/', meaning: 'Mars', tip: 'Le "ar" est long : "mortch". Le "ch" = "tch" comme dans "tchèque". Ne dites pas "marsh".' },
    { word: 'November', phonetic: '/noʊˈvembər/', meaning: 'Novembre', tip: 'L\'accent est sur "vem" : "no-VEM-ber". Le premier "o" est long, le "er" final est doux.' },
  ],
}

// ─── a1-l10: Number Pronunciation (pronunciation) ─────────────────────────────
export const A1_L10: LessonContent = {
  vocab: [
    { english: 'Thirteen', french: 'Treize', phonetic: '/θɜːrˈtiːn/', example: 'She is thirteen years old.', exampleTranslation: 'Elle a treize ans.' },
    { english: 'Fourteen', french: 'Quatorze', phonetic: '/fɔːrˈtiːn/', example: 'There are fourteen chairs.', exampleTranslation: 'Il y a quatorze chaises.' },
    { english: 'Sixty', french: 'Soixante', phonetic: '/ˈsɪksti/', example: 'Sixty minutes is one hour.', exampleTranslation: 'Soixante minutes font une heure.' },
    { english: 'Forty', french: 'Quarante', phonetic: '/ˈfɔːrti/', example: 'He is forty years old.', exampleTranslation: 'Il a quarante ans.' },
    { english: 'Eighty', french: 'Quatre-vingts', phonetic: '/ˈeɪti/', example: 'My grandmother is eighty.', exampleTranslation: 'Ma grand-mère a quatre-vingts ans.' },
  ],
  grammar: {
    title: 'Accent tonique dans les nombres en -teen et -ty',
    explanation: 'C\'est une distinction CRUCIALE en anglais ! Les nombres en -teen (13-19) ont l\'accent sur la DEUXIÈME syllabe : thir-TEEN, four-TEEN, fif-TEEN. Les dizaines en -ty (20, 30, 40...) ont l\'accent sur la PREMIÈRE syllabe : THIR-ty, FOR-ty, FIF-ty. Confondre ces accents peut changer le sens : "I\'m thir-TEEN" (j\'ai 13 ans) ≠ "I\'m THIR-ty" (j\'ai 30 ans) !',
    examples: [
      { sentence: 'She is thir-TEEN years old.', translation: 'Elle a treize ans.', isCorrect: true },
      { sentence: 'There are THIR-ty students.', translation: 'Il y a trente étudiants.', isCorrect: true },
      { sentence: 'He is four-TEEN.', translation: 'Il a quatorze ans.', isCorrect: true },
      { sentence: 'The price is for-TY dollars.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'The price is for-TY dollars.', correct: 'The price is FOR-ty dollars.', explanation: 'L\'accent est sur la PREMIÈRE syllabe pour -ty : FOR-ty, pas for-TY. Cette erreur peut être mal comprise !' },
      { wrong: 'There are THIR-teen people.', correct: 'There are thir-TEEN people.', explanation: 'L\'accent est sur la DEUXIÈME syllabe pour -teen : thir-TEEN. Sinon on comprend "thirty" (30).' },
    ],
  },
  conversation: [
    { speaker: 'Isabelle', role: 'A', text: 'How many people are coming to the party?', translation: 'Combien de personnes viennent à la fête ?' },
    { speaker: 'Mike', role: 'B', text: 'Thirteen. No, sorry, thirty people.', translation: 'Treize. Non, désolé, trente personnes.' },
    { speaker: 'Isabelle', role: 'A', text: 'Thirteen or thirty? I am not sure.', translation: 'Treize ou trente ? Je ne suis pas sûre.' },
    { speaker: 'Mike', role: 'B', text: 'Thirty! Three-zero. I am forty years old, not fourteen!', translation: 'Trente ! Trois-zéro. J\'ai quarante ans, pas quatorze !' },
    { speaker: 'Isabelle', role: 'A', text: 'Oh, I understand now! Is the room for sixty or sixteen?', translation: 'Oh, je comprends maintenant ! La salle est pour soixante ou seize ?' },
    { speaker: 'Mike', role: 'B', text: 'For sixty people. Six-zero, not six-teen! And eighty chairs.', translation: 'Pour soixante personnes. Six-zéro, pas seize ! Et quatre-vingts chaises.' },
  ],
  conversationTitle: 'Distinguer les nombres',
  pronunciation: [
    { word: 'Thirteen vs Thirty', phonetic: '/θɜːrˈtiːn/ vs /ˈθɜːrti/', meaning: 'Treize vs Trente', tip: '"Thir-TEEN" (accent sur TEEN, plus long) vs "THIR-ti" (accent sur THIR, plus court). Le "th" est identique dans les deux.' },
    { word: 'Fourteen vs Forty', phonetic: '/fɔːrˈtiːn/ vs /ˈfɔːrti/', meaning: 'Quatorze vs Quarante', tip: '"Four-TEEN" (accent sur TEEN) vs "FOR-ty" (accent sur FOR). Notez que "forty" s\'écrit sans "u" (pas "fourty").' },
    { word: 'Sixty', phonetic: '/ˈsɪksti/', meaning: 'Soixante', tip: 'Accent sur "SIX" : "SIKS-ti". Le "x" se prononce "ks". Distinguez bien de "six-TEEN" (seize).' },
    { word: 'Eighty', phonetic: '/ˈeɪti/', meaning: 'Quatre-vingts', tip: 'Accent sur "EIGH" : "ÉI-ti". Distinguez de "eigh-TEEN" (dix-huit). Le "t" est léger.' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 3: EVERYDAY OBJECTS (a1-l11 through a1-l15)
// ════════════════════════════════════════════════════════════════════════════════

// ─── a1-l11: Classroom Objects (vocabulary) ────────────────────────────────────
export const A1_L11: LessonContent = {
  vocab: [
    { english: 'Pen', french: 'Stylo', phonetic: '/pen/', example: 'Can I borrow your pen?', exampleTranslation: 'Puis-je emprunter ton stylo ?' },
    { english: 'Book', french: 'Livre', phonetic: '/bʊk/', example: 'Open your book to page five.', exampleTranslation: 'Ouvrez votre livre à la page cinq.' },
    { english: 'Table', french: 'Table', phonetic: '/ˈteɪbəl/', example: 'Put it on the table.', exampleTranslation: 'Mets-le sur la table.' },
    { english: 'Chair', french: 'Chaise', phonetic: '/tʃer/', example: 'Please sit on the chair.', exampleTranslation: 'Asseyez-vous sur la chaise.' },
    { english: 'Board', french: 'Tableau', phonetic: '/bɔːrd/', example: 'Look at the board, please.', exampleTranslation: 'Regardez le tableau, s\'il vous plaît.' },
  ],
  grammar: {
    title: 'Le pluriel des noms — Formes régulières et irrégulières',
    explanation: 'Le pluriel régulier se forme en ajoutant -s : pen → pens, book → books, table → tables, chair → chairs, board → boards. Après s, ss, sh, ch, x, on ajoute -es : box → boxes, bus → buses. Les noms en -y après consonne changent y → ies : dictionary → dictionaries. Après voyelle + y, on ajoute -s : day → days. Pluriels irréguliers : man → men, woman → women, child → children, foot → feet, tooth → teeth.',
    examples: [
      { sentence: 'I have two pens and three books.', translation: 'J\'ai deux stylos et trois livres.', isCorrect: true },
      { sentence: 'There are five chair in the room.', translation: '', isCorrect: false },
      { sentence: 'The books are on the tables.', translation: 'Les livres sont sur les tables.', isCorrect: true },
      { sentence: 'Two children are at the board.', translation: 'Deux enfants sont au tableau.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Five chair', correct: 'Five chairs', explanation: 'Après un nombre > 1, ajoutez -s au nom : chair → chairs.' },
      { wrong: 'Two boxs', correct: 'Two boxes', explanation: 'Après x, on ajoute -es (pas juste -s) : box → boxes.' },
    ],
  },
  conversation: [
    { speaker: 'Nadia', role: 'A', text: 'Excuse me, is this your pen?', translation: 'Excusez-moi, est-ce votre stylo ?' },
    { speaker: 'Olivier', role: 'B', text: 'No, my pen is on the table. That is Marie\'s pen.', translation: 'Non, mon stylo est sur la table. C\'est le stylo de Marie.' },
    { speaker: 'Nadia', role: 'A', text: 'Oh, I see! Are those your books on the chair?', translation: 'Oh, je vois ! Ce sont vos livres sur la chaise ?' },
    { speaker: 'Olivier', role: 'B', text: 'Yes, they are my books. I have four books today.', translation: 'Oui, ce sont mes livres. J\'ai quatre livres aujourd\'hui.' },
    { speaker: 'Nadia', role: 'A', text: 'Can I borrow a chair? I don\'t have one.', translation: 'Puis-je emprunter une chaise ? Je n\'en ai pas.' },
    { speaker: 'Olivier', role: 'B', text: 'Of course! And look at the board — the teacher is writing the homework.', translation: 'Bien sûr ! Et regarde le tableau — le professeur écrit les devoirs.' },
  ],
  conversationTitle: 'Les objets de la classe',
  pronunciation: [
    { word: 'Pen', phonetic: '/pen/', meaning: 'Stylo', tip: 'Le "e" est bref et fermé : "pèn". Ne dites pas "pine" comme l\'arbre, ni "pan" comme la casserole.' },
    { word: 'Book', phonetic: '/bʊk/', meaning: 'Livre', tip: 'Le "oo" est un "ou" très court : "bouk". Pas le "ou" long du français. Plus court que dans "loup".' },
    { word: 'Table', phonetic: '/ˈteɪbəl/', meaning: 'Table', tip: 'Prononcez "téï-bal" avec le "a" final très réduit, presque muet. L\'accent est sur "ta".' },
    { word: 'Chair', phonetic: '/tʃer/', meaning: 'Chaise', tip: 'Le "ch" anglais = "tch" : "tchèr". Pas "chair" à la française ! Le "r" final est léger.' },
  ],
}

// ─── a1-l12: Articles: A & An (grammar) ────────────────────────────────────────
export const A1_L12: LessonContent = {
  vocab: [
    { english: 'Apple', french: 'Pomme', phonetic: '/ˈæpəl/', example: 'I eat an apple every day.', exampleTranslation: 'Je mange une pomme chaque jour.' },
    { english: 'Egg', french: 'Œuf', phonetic: '/eɡ/', example: 'She wants an egg for breakfast.', exampleTranslation: 'Elle veut un œuf pour le petit-déjeuner.' },
    { english: 'Umbrella', french: 'Parapluie', phonetic: '/ʌmˈbrelə/', example: 'Take an umbrella with you.', exampleTranslation: 'Prends un parapluie avec toi.' },
    { english: 'Uniform', french: 'Uniforme', phonetic: '/ˈjuːnɪfɔːrm/', example: 'He wears a uniform to school.', exampleTranslation: 'Il porte un uniforme à l\'école.' },
    { english: 'Onion', french: 'Oignon', phonetic: '/ˈʌnjən/', example: 'I cut an onion for the soup.', exampleTranslation: 'Je coupe un oignon pour la soupe.' },
  ],
  grammar: {
    title: 'Articles : A et An',
    explanation: 'On utilise "a" devant un mot commençant par un SON consonantique : a dog, a cat, a book, a uniform (son "you"). On utilise "an" devant un mot commençant par un SON vocalique (a, e, i, o, u) : an apple, an egg, an umbrella, an onion. ATTENTION : c\'est le SON qui compte, pas l\'orthographe ! "A university" (commence par le son "you" = consonne) mais "an hour" (le "h" est muet = son vocalique). "An umbrella" (son "uh" = voyelle) mais "a uniform" (son "you" = consonne).',
    examples: [
      { sentence: 'I have a dog and an egg.', translation: 'J\'ai un chien et un œuf.', isCorrect: true },
      { sentence: 'She is an teacher.', translation: '', isCorrect: false },
      { sentence: 'He wants an orange.', translation: 'Il veut une orange.', isCorrect: true },
      { sentence: 'She goes to a university.', translation: 'Elle va à une université.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She is an teacher.', correct: 'She is a teacher.', explanation: '"Teacher" commence par le son consonne "t" : on utilise "a", pas "an".' },
      { wrong: 'I am a engineer.', correct: 'I am an engineer.', explanation: '"Engineer" commence par le son voyelle "e" : on utilise "an", pas "a".' },
    ],
  },
  conversation: [
    { speaker: 'Sam', role: 'A', text: 'What is that on the table?', translation: 'Qu\'est-ce que c\'est sur la table ?' },
    { speaker: 'Léa', role: 'B', text: 'It is an apple. Do you want an apple or an egg?', translation: 'C\'est une pomme. Veux-tu une pomme ou un œuf ?' },
    { speaker: 'Sam', role: 'A', text: 'I want an apple, please! Is that an umbrella near the door?', translation: 'Je veux une pomme, s\'il vous plaît ! C\'est un parapluie près de la porte ?' },
    { speaker: 'Léa', role: 'B', text: 'Yes! It is my umbrella. And this is a uniform for my new job.', translation: 'Oui ! C\'est mon parapluie. Et ceci est un uniforme pour mon nouveau travail.' },
    { speaker: 'Sam', role: 'A', text: 'Oh, nice! Does your job need a uniform?', translation: 'Oh, sympa ! Ton travail nécessite un uniforme ?' },
    { speaker: 'Léa', role: 'B', text: 'Yes! And I always bring an onion for my lunch sandwich.', translation: 'Oui ! Et j\'apporte toujours un oignon pour mon sandwich du déjeuner.' },
  ],
  conversationTitle: 'Choisir entre a et an',
  pronunciation: [
    { word: 'A (article)', phonetic: '/ə/', meaning: 'Un/Une (consonne)', tip: 'Devant une consonne, "a" se prononce "e" très réduit et rapide. Ne dites pas "éi" dans la conversation courante. C\'est un son neutre (schwa).' },
    { word: 'An (article)', phonetic: '/ən/', meaning: 'Un/Une (voyelle)', tip: 'Devant une voyelle, "an" se lie au mot suivant : "an apple" = "e-nap-pl". Le "n" relie les deux mots naturellement.' },
    { word: 'Apple', phonetic: '/ˈæpəl/', meaning: 'Pomme', tip: 'Le "a" est très ouvert comme dans "cat" : "a-pl". Le "e" final est très réduit, presque muet.' },
    { word: 'Umbrella', phonetic: '/ʌmˈbrelə/', meaning: 'Parapluie', tip: 'Le "u" initial est ouvert : "eum-BRE-la". L\'accent est sur "BRE". Commence par un son vocalique.' },
  ],
}

// ─── a1-l13: This & That (grammar) ─────────────────────────────────────────────
export const A1_L13: LessonContent = {
  vocab: [
    { english: 'Bag', french: 'Sac', phonetic: '/bæɡ/', example: 'This is my bag.', exampleTranslation: 'Ceci est mon sac.' },
    { english: 'Phone', french: 'Téléphone', phonetic: '/foʊn/', example: 'That is her phone.', exampleTranslation: 'Cela est son téléphone.' },
    { english: 'Laptop', french: 'Ordinateur portable', phonetic: '/ˈlæptɑːp/', example: 'This laptop is new.', exampleTranslation: 'Cet ordinateur portable est nouveau.' },
    { english: 'Notebook', french: 'Carnet', phonetic: '/ˈnoʊtbʊk/', example: 'Those notebooks are mine.', exampleTranslation: 'Ces carnets sont à moi.' },
    { english: 'Keys', french: 'Clés', phonetic: '/kiːz/', example: 'Where are my keys?', exampleTranslation: 'Où sont mes clés ?' },
  ],
  grammar: {
    title: 'This, That, These, Those — Démonstratifs',
    explanation: '"This" (ceci/cette) pour un objet PROCHE au singulier : This is my bag. "That" (cela/cette) pour un objet ÉLOIGNÉ au singulier : That is her phone. "These" (ces) pour des objets PROCHES au pluriel : These are my notebooks. "Those" (ces) pour des objets ÉLOIGNÉS au pluriel : Those are your keys. Accord du verbe : this/that → is ; these/those → are.',
    examples: [
      { sentence: 'This is my phone.', translation: 'Ceci est mon téléphone.', isCorrect: true },
      { sentence: 'That are my bags.', translation: '', isCorrect: false },
      { sentence: 'These are my notebooks.', translation: 'Ce sont mes carnets.', isCorrect: true },
      { sentence: 'Those is your laptops.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'That are my bags.', correct: 'Those are my bags.', explanation: 'Au pluriel, on utilise "those" (ces-là) au lieu de "that" (cela). "That" est uniquement singulier.' },
      { wrong: 'Those is your laptops.', correct: 'Those are your laptops.', explanation: '"Those" est pluriel, donc on utilise "are", pas "is". Règle : this/that → is, these/those → are.' },
    ],
  },
  conversation: [
    { speaker: 'Élodie', role: 'A', text: 'What is this on the desk?', translation: 'Qu\'est-ce que c\'est sur le bureau ?' },
    { speaker: 'Ben', role: 'B', text: 'This is my laptop. I use it every day.', translation: 'C\'est mon ordinateur portable. Je l\'utilise chaque jour.' },
    { speaker: 'Élodie', role: 'A', text: 'And what is that over there, near the door?', translation: 'Et qu\'est-ce que c\'est là-bas, près de la porte ?' },
    { speaker: 'Ben', role: 'B', text: 'That is my bag. These are my notebooks on the table.', translation: 'C\'est mon sac. Ce sont mes carnets sur la table.' },
    { speaker: 'Élodie', role: 'A', text: 'Are those your keys too?', translation: 'Ce sont aussi tes clés ?' },
    { speaker: 'Ben', role: 'B', text: 'Yes, those are my keys. This one is for my car, and that one is for my house.', translation: 'Oui, ce sont mes clés. Celui-ci est pour ma voiture, et celui-là pour ma maison.' },
  ],
  conversationTitle: 'Désigner les objets',
  pronunciation: [
    { word: 'This', phonetic: '/ðɪs/', meaning: 'Ceci/Cette', tip: 'Le "th" est SONORE : langue entre les dents, faites vibrer les cordes vocales. Approximativement "dzis". Ne dites pas "zis" ni "dis".' },
    { word: 'That', phonetic: '/ðæt/', meaning: 'Cela/Cette', tip: 'Même "th" sonore : "dzèt". Le "a" est ouvert comme dans "cat". Distinguez bien "that" (cela) de "cat" (chat) — seul le "th" change.' },
    { word: 'These', phonetic: '/ðiːz/', meaning: 'Ces (proches)', tip: '"Dhiiz" avec "th" sonore et "i" long. Ne confondez pas avec "this" (i court). "These" = i long, "this" = i court.' },
    { word: 'Those', phonetic: '/ðoʊz/', meaning: 'Ces (éloignés)', tip: '"Dhoz" avec "th" sonore et "o" long. Distinguez bien "those" de "doze" — la langue entre les dents fait toute la différence.' },
  ],
}

// ─── a1-l14: At the Office (conversation) ──────────────────────────────────────
export const A1_L14: LessonContent = {
  vocab: [
    { english: 'Computer', french: 'Ordinateur', phonetic: '/kəmˈpjuːtər/', example: 'The computer is on the desk.', exampleTranslation: 'L\'ordinateur est sur le bureau.' },
    { english: 'Desk', french: 'Bureau (meuble)', phonetic: '/desk/', example: 'My desk is near the window.', exampleTranslation: 'Mon bureau est près de la fenêtre.' },
    { english: 'Printer', french: 'Imprimante', phonetic: '/ˈprɪntər/', example: 'The printer is not working.', exampleTranslation: 'L\'imprimante ne fonctionne pas.' },
    { english: 'Folder', french: 'Dossier / Chemise', phonetic: '/ˈfoʊldər/', example: 'Put the paper in the folder.', exampleTranslation: 'Mettez le papier dans le dossier.' },
    { english: 'Keyboard', french: 'Clavier', phonetic: '/ˈkiːbɔːrd/', example: 'The keyboard is very loud.', exampleTranslation: 'Le clavier est très bruyant.' },
  ],
  grammar: {
    title: '"Where is...?" et les prépositions de lieu',
    explanation: 'Pour demander où se trouve quelque chose : "Where is the printer?" (Où est l\'imprimante ?), "Where are the folders?" (Où sont les dossiers ?). Prépositions de lieu essentielles : "on" (sur), "under" (sous), "next to" (à côté de), "near" (près de), "behind" (derrière), "in front of" (devant), "between" (entre), "in" (dans).',
    examples: [
      { sentence: 'The computer is on the desk.', translation: 'L\'ordinateur est sur le bureau.', isCorrect: true },
      { sentence: 'The printer is next to the door.', translation: 'L\'imprimante est à côté de la porte.', isCorrect: true },
      { sentence: 'The folder is in the desk.', translation: '', isCorrect: false },
      { sentence: 'Where is my keyboard?', translation: 'Où est mon clavier ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The folder is in the desk.', correct: 'The folder is on the desk. / The folder is in the drawer.', explanation: 'On dit "on the desk" (sur le bureau) ou "in the drawer" (dans le tiroir), pas "in the desk" qui est ambigu.' },
      { wrong: 'Where is the computers?', correct: 'Where are the computers?', explanation: '"Computers" est pluriel, donc on utilise "Where are", pas "Where is". Le verbe s\'accorde avec le sujet.' },
    ],
  },
  conversation: [
    { speaker: 'Chloé', role: 'A', text: 'Is this your office? It is very nice!', translation: 'C\'est votre bureau ? Il est très sympa !' },
    { speaker: 'Kevin', role: 'B', text: 'Yes! My computer is on the desk, near the window.', translation: 'Oui ! Mon ordinateur est sur le bureau, près de la fenêtre.' },
    { speaker: 'Chloé', role: 'A', text: 'Where is the printer?', translation: 'Où est l\'imprimante ?' },
    { speaker: 'Kevin', role: 'B', text: 'The printer is next to my desk. And the folders are under the desk.', translation: 'L\'imprimante est à côté de mon bureau. Et les dossiers sont sous le bureau.' },
    { speaker: 'Chloé', role: 'A', text: 'Where is my keyboard?', translation: 'Où est mon clavier ?' },
    { speaker: 'Kevin', role: 'B', text: 'Your keyboard is behind the door, on the small desk!', translation: 'Votre clavier est derrière la porte, sur le petit bureau !' },
  ],
  conversationTitle: 'Au bureau',
  pronunciation: [
    { word: 'Computer', phonetic: '/kəmˈpjuːtər/', meaning: 'Ordinateur', tip: 'L\'accent est sur "pu" : "kem-PYOU-ter". Les syllabes avant et après sont réduites (schwa).' },
    { word: 'Desk', phonetic: '/desk/', meaning: 'Bureau (meuble)', tip: 'Le "e" est bref et ouvert : "dèsk". Pas "disk" (disque). Le "s" est toujours sonore avant "k".' },
    { word: 'Printer', phonetic: '/ˈprɪntər/', meaning: 'Imprimante', tip: 'Accent sur "PRINT" : "PRIN-ter". Le "i" est court comme dans "pin", le "er" final est doux.' },
    { word: 'Keyboard', phonetic: '/ˈkiːbɔːrd/', meaning: 'Clavier', tip: 'Accent sur "KEY" : "KII-bord". Le "ey" est long et le "oard" se prononce "ord".' },
  ],
}

// ─── a1-l15: Object Sounds (pronunciation) ─────────────────────────────────────
export const A1_L15: LessonContent = {
  vocab: [
    { english: 'Watch', french: 'Montre', phonetic: '/wɒtʃ/', example: 'Look at my watch.', exampleTranslation: 'Regarde ma montre.' },
    { english: 'Switch', french: 'Interrupteur', phonetic: '/swɪtʃ/', example: 'Turn off the switch.', exampleTranslation: 'Éteins l\'interrupteur.' },
    { english: 'Clock', french: 'Horloge', phonetic: '/klɒk/', example: 'The clock is on the wall.', exampleTranslation: 'L\'horloge est sur le mur.' },
    { english: 'Glass', french: 'Verre', phonetic: '/ɡlæs/', example: 'The glass is on the table.', exampleTranslation: 'Le verre est sur la table.' },
    { english: 'Mirror', french: 'Miroir', phonetic: '/ˈmɪrər/', example: 'Look in the mirror.', exampleTranslation: 'Regarde dans le miroir.' },
  ],
  grammar: {
    title: 'Le son "ch" en anglais — Trois prononciations',
    explanation: 'Le "ch" anglais a TROIS prononciations possibles : 1) "tch" (le plus courant) : watch, chair, kitchen, switch. 2) "k" : school, chemistry, character, ache. 3) "sh" : machine, chef, parachute. Pour les francophones, la confusion vient surtout de "school" (skoul) qu\'on dit souvent "shool" à tort. Mémorisez les exceptions !',
    examples: [
      { sentence: 'I watch TV every day.', translation: 'Je regarde la télé chaque jour.', isCorrect: true },
      { sentence: 'She goes to school at 8.', translation: 'Elle va à l\'école à 8h.', isCorrect: true },
      { sentence: 'The machine is broken.', translation: 'La machine est cassée.', isCorrect: true },
      { sentence: 'He goes to shool every day.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'Shool', correct: 'School', explanation: 'Dans "school", le "ch" = "k" : "skoul". Ne dites pas "choul" ni "shoul". Même chose pour "chemistry" et "character".' },
      { wrong: 'Mashine', correct: 'Machine', explanation: 'Dans "machine" (emprunt au français), le "ch" = "sh" : "ma-chine". Ce mot est une exception.' },
    ],
  },
  conversation: [
    { speaker: 'Tom', role: 'A', text: 'What time is it? I can\'t find my watch.', translation: 'Quelle heure est-il ? Je ne trouve pas ma montre.' },
    { speaker: 'Lisa', role: 'B', text: 'Look at the clock on the wall!', translation: 'Regarde l\'horloge sur le mur !' },
    { speaker: 'Tom', role: 'A', text: 'Oh! It is late. Turn off the switch, let\'s go.', translation: 'Oh ! Il est tard. Éteins l\'interrupteur, on y va.' },
    { speaker: 'Lisa', role: 'B', text: 'Wait! Can you pass me that glass?', translation: 'Attends ! Peux-tu me passer ce verre ?' },
    { speaker: 'Tom', role: 'A', text: 'Sure. I can see my reflection in the mirror over there!', translation: 'Bien sûr. Je peux voir mon reflet dans le miroir là-bas !' },
    { speaker: 'Lisa', role: 'B', text: 'Let\'s go! The school clock is always five minutes fast.', translation: 'Allons-y ! L\'horloge de l\'école est toujours en avance de cinq minutes.' },
  ],
  conversationTitle: 'Demander l\'heure et les objets',
  pronunciation: [
    { word: 'Watch', phonetic: '/wɒtʃ/', meaning: 'Montre', tip: 'Le "ch" = "tch" : "ouot-tch". Le "w" initial : arrondissez les lèvres. Ne dites pas "ouatch" avec le son "ou" français.' },
    { word: 'Switch', phonetic: '/swɪtʃ/', meaning: 'Interrupteur', tip: 'Même son "tch" final : "souit-tch". Le "sw" = "s" + "ou" arrondi. Le "i" est court.' },
    { word: 'Clock', phonetic: '/klɒk/', meaning: 'Horloge', tip: 'Le "cl" = "kl" : "klok". Le "o" est court et ouvert. Pas "klôk" avec un "o" long.' },
    { word: 'Glass', phonetic: '/ɡlæs/', meaning: 'Verre', tip: 'Le "gl" = "gl" : "glès" avec le "a" très ouvert comme dans "cat". Ne dites pas "glace".' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 4: FOOD & DRINKS (a1-l16 through a1-l20)
// ════════════════════════════════════════════════════════════════════════════════

// ─── a1-l16: Common Foods (vocabulary) ─────────────────────────────────────────
export const A1_L16: LessonContent = {
  vocab: [
    { english: 'Bread', french: 'Pain', phonetic: '/bred/', example: 'I eat bread for breakfast.', exampleTranslation: 'Je mange du pain au petit-déjeuner.' },
    { english: 'Rice', french: 'Riz', phonetic: '/raɪs/', example: 'We eat rice with chicken.', exampleTranslation: 'Nous mangeons du riz avec du poulet.' },
    { english: 'Meat', french: 'Viande', phonetic: '/miːt/', example: 'He doesn\'t eat meat.', exampleTranslation: 'Il ne mange pas de viande.' },
    { english: 'Vegetables', french: 'Légumes', phonetic: '/ˈvedʒtəbəlz/', example: 'Eat your vegetables!', exampleTranslation: 'Mange tes légumes !' },
    { english: 'Fish', french: 'Poisson', phonetic: '/fɪʃ/', example: 'Fresh fish is delicious.', exampleTranslation: 'Le poisson frais est délicieux.' },
  ],
  grammar: {
    title: 'Dénombrable vs Indénombrable — Les aliments',
    explanation: 'Certains aliments sont dénombrables (countable) : a banana, two eggs, three apples. D\'autres sont indénombrables (uncountable) : bread, rice, meat, water, fish. Avec les indénombrables, on ne peut PAS dire "a bread" ou "two breads". On dit : "some bread" (du pain), "a piece of bread" (un morceau de pain), "a slice of bread" (une tranche de pain). Pour les questions : "How much bread?" (combien de pain) vs "How many eggs?" (combien d\'œufs).',
    examples: [
      { sentence: 'I would like some bread.', translation: 'Je voudrais du pain.', isCorrect: true },
      { sentence: 'Can I have a rice?', translation: '', isCorrect: false },
      { sentence: 'She eats two eggs for breakfast.', translation: 'Elle mange deux œufs au petit-déjeuner.', isCorrect: true },
      { sentence: 'I need some meat for the recipe.', translation: 'J\'ai besoin de viande pour la recette.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'A rice', correct: 'Some rice / A bowl of rice', explanation: '"Rice" est indénombrable. On dit "some rice" ou "a bowl of rice" (un bol de riz), jamais "a rice".' },
      { wrong: 'Two breads', correct: 'Two pieces of bread / Two slices of bread', explanation: '"Bread" est indénombrable. On ne peut pas le compter directement. On compte les tranches/morceaux.' },
    ],
  },
  conversation: [
    { speaker: 'Sophie', role: 'A', text: 'What do you like to eat?', translation: 'Qu\'aimes-tu manger ?' },
    { speaker: 'Mike', role: 'B', text: 'I like rice and fish. And you?', translation: 'J\'aime le riz et le poisson. Et toi ?' },
    { speaker: 'Sophie', role: 'A', text: 'I love bread and cheese! Do you eat vegetables?', translation: 'J\'adore le pain et le fromage ! Manges-tu des légumes ?' },
    { speaker: 'Mike', role: 'B', text: 'Yes, I eat some vegetables every day. But not much meat.', translation: 'Oui, je mange des légumes chaque jour. Mais pas beaucoup de viande.' },
    { speaker: 'Sophie', role: 'A', text: 'I prefer a piece of bread with some cheese. And some fish!', translation: 'Je préfère un morceau de pain avec du fromage. Et du poisson !' },
    { speaker: 'Mike', role: 'B', text: 'That sounds delicious! Let\'s have lunch together.', translation: 'Ça a l\'air délicieux ! Déjeunons ensemble.' },
  ],
  conversationTitle: 'Parler de nourriture',
  pronunciation: [
    { word: 'Bread', phonetic: '/bred/', meaning: 'Pain', tip: 'Le "ea" se prononce "é" court : "brède". Ne dites pas "bri:d" ni "bré-ade". Comme dans "bed" (lit) avec un "r" devant.' },
    { word: 'Rice', phonetic: '/raɪs/', meaning: 'Riz', tip: 'Le "i" est long : "raïce". Ne dites pas "riss". Le son est comme dans "nice" (sympa).' },
    { word: 'Meat', phonetic: '/miːt/', meaning: 'Viande', tip: 'Le "ea" = "ii" long : "miit". Attention : "meat" (viande) et "meet" (rencontrer) se prononcent pareil !' },
    { word: 'Fish', phonetic: '/fɪʃ/', meaning: 'Poisson', tip: 'Prononcez "fich" — le "i" est court et le "sh" = "ch" français. Ne dites pas "fiche".' },
  ],
}

// ─── a1-l17: Drinks & Beverages (vocabulary) ───────────────────────────────────
export const A1_L17: LessonContent = {
  vocab: [
    { english: 'Water', french: 'Eau', phonetic: '/ˈwɔːtər/', example: 'Can I have some water?', exampleTranslation: 'Puis-je avoir de l\'eau ?' },
    { english: 'Coffee', french: 'Café', phonetic: '/ˈkɒfi/', example: 'I drink coffee every morning.', exampleTranslation: 'Je bois du café chaque matin.' },
    { english: 'Tea', french: 'Thé', phonetic: '/tiː/', example: 'She prefers tea.', exampleTranslation: 'Elle préfère le thé.' },
    { english: 'Juice', french: 'Jus', phonetic: '/dʒuːs/', example: 'Orange juice is healthy.', exampleTranslation: 'Le jus d\'orange est sain.' },
    { english: 'Milk', french: 'Lait', phonetic: '/mɪlk/', example: 'I drink milk with my cereal.', exampleTranslation: 'Je bois du lait avec mes céréales.' },
  ],
  grammar: {
    title: 'Exprimer ses préférences de boissons',
    explanation: 'Pour exprimer vos préférences : "I drink" (je bois), "I prefer" (je préfère), "I would like" (je voudrais). Pour mesurer les boissons : "a cup of tea/coffee" (une tasse de thé/café), "a glass of water/juice/milk" (un verre d\'eau/jus/lait). ATTENTION : "prefer... to" (pas "than") : "I prefer tea to coffee" (Je préfère le thé au café). Les boissons sont indénombrables : "some water" (pas "a water"), "some milk" (pas "a milk").',
    examples: [
      { sentence: 'I would like a cup of coffee, please.', translation: 'Je voudrais une tasse de café, s\'il vous plaît.', isCorrect: true },
      { sentence: 'She prefers tea than coffee.', translation: '', isCorrect: false },
      { sentence: 'Can I have a glass of water?', translation: 'Puis-je avoir un verre d\'eau ?', isCorrect: true },
      { sentence: 'He drinks two cups of tea a day.', translation: 'Il boit deux tasses de thé par jour.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I prefer tea than coffee.', correct: 'I prefer tea to coffee.', explanation: 'Après "prefer", on utilise "to" (au), pas "than" (que). C\'est différent du français "préférer... à".' },
      { wrong: 'A water, please.', correct: 'A glass of water, please. / Some water, please.', explanation: '"Water" est indénombrable. On dit "a glass of water" ou "some water", jamais "a water".' },
    ],
  },
  conversation: [
    { speaker: 'Waiter', role: 'A', text: 'What would you like to drink?', translation: 'Que souhaitez-vous boire ?' },
    { speaker: 'Customer', role: 'B', text: 'I would like a cup of coffee, please.', translation: 'Je voudrais une tasse de café, s\'il vous plaît.' },
    { speaker: 'Waiter', role: 'A', text: 'Regular or decaf? We also have tea and juice.', translation: 'Normal ou déca ? Nous avons aussi du thé et du jus.' },
    { speaker: 'Customer', role: 'B', text: 'Regular, please. My friend prefers tea to coffee.', translation: 'Normal, s\'il vous plaît. Mon ami préfère le thé au café.' },
    { speaker: 'Waiter', role: 'A', text: 'Great! And for your friend? A cup of tea?', translation: 'Très bien ! Et pour votre ami ? Une tasse de thé ?' },
    { speaker: 'Customer', role: 'B', text: 'Yes, and a glass of milk for me too, please.', translation: 'Oui, et un verre de lait pour moi aussi, s\'il vous plaît.' },
  ],
  conversationTitle: 'Commander une boisson',
  pronunciation: [
    { word: 'Water', phonetic: '/ˈwɔːtər/', meaning: 'Eau', tip: 'Le "t" au milieu est souvent adouci en américain : "ouo-der". En anglais britannique, c\'est un vrai "t" : "ouo-ter".' },
    { word: 'Coffee', phonetic: '/ˈkɒfi/', meaning: 'Café', tip: 'Le "o" est ouvert comme dans "bon" : "ko-fi". L\'accent est sur la première syllabe. Ne dites pas "koufi".' },
    { word: 'Tea', phonetic: '/tiː/', meaning: 'Thé', tip: 'Le "ea" = "ii" long : "tii". Comme dans "see" (voir). Très simple mais ne dites pas "ti" court.' },
    { word: 'Milk', phonetic: '/mɪlk/', meaning: 'Lait', tip: 'Prononcez "milk" — le "i" est court et le "l" est sombre (à l\'arrière de la bouche). Ne dites pas "meulk".' },
  ],
}

// ─── a1-l18: I Like / I Don't Like (grammar) ──────────────────────────────────
export const A1_L18: LessonContent = {
  vocab: [
    { english: 'Like', french: 'Aimer', phonetic: '/laɪk/', example: 'I like pizza.', exampleTranslation: 'J\'aime la pizza.' },
    { english: 'Love', french: 'Adorer', phonetic: '/lʌv/', example: 'I love chocolate!', exampleTranslation: 'J\'adore le chocolat !' },
    { english: 'Hate', french: 'Détester', phonetic: '/heɪt/', example: 'He hates onions.', exampleTranslation: 'Il déteste les oignons.' },
    { english: 'Prefer', french: 'Préférer', phonetic: '/prɪˈfɜːr/', example: 'I prefer tea to coffee.', exampleTranslation: 'Je préfère le thé au café.' },
    { english: 'Dislike', french: 'Ne pas aimer', phonetic: '/dɪsˈlaɪk/', example: 'She dislikes spicy food.', exampleTranslation: 'Elle n\'aime pas la nourriture épicée.' },
  ],
  grammar: {
    title: 'Like / Likes / Don\'t Like / Doesn\'t Like',
    explanation: 'Avec I/you/we/they : on utilise le verbe de base "like" : I like, you like, we like, they like. Avec he/she/it : on ajoute "s" → "likes" : he likes, she likes, it likes. Négatif : "don\'t like" (I/you/we/they) et "doesn\'t like" (he/she/it). "Love" et "hate" suivent la même règle : he loves, she hates. Après like/love/hate, on peut utiliser un NOM : "I like pizza" OU un verbe en -ing : "I like reading" (J\'aime lire).',
    examples: [
      { sentence: 'I like coffee.', translation: 'J\'aime le café.', isCorrect: true },
      { sentence: 'I don\'t like fish.', translation: 'Je n\'aime pas le poisson.', isCorrect: true },
      { sentence: 'She like pizza.', translation: '', isCorrect: false },
      { sentence: 'He doesn\'t like vegetables.', translation: 'Il n\'aime pas les légumes.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She like coffee.', correct: 'She likes coffee.', explanation: 'Avec he/she/it, on ajoute TOUJOURS "s" au verbe : like → likes. C\'est la règle du Present Simple.' },
      { wrong: 'He don\'t like rice.', correct: 'He doesn\'t like rice.', explanation: 'Avec he/she/it, on utilise "doesn\'t" au lieu de "don\'t". "Don\'t" = do not, "doesn\'t" = does not.' },
    ],
  },
  conversation: [
    { speaker: 'Sophie', role: 'A', text: 'What food do you like?', translation: 'Quelle nourriture aimes-tu ?' },
    { speaker: 'Mike', role: 'B', text: 'I love pasta and chicken! I hate mushrooms.', translation: 'J\'adore les pâtes et le poulet ! Je déteste les champignons.' },
    { speaker: 'Sophie', role: 'A', text: 'Really? I like mushrooms. Do you like fish?', translation: 'Vraiment ? J\'aime les champignons. Aimes-tu le poisson ?' },
    { speaker: 'Mike', role: 'B', text: 'No, I don\'t like fish. I prefer meat. And you?', translation: 'Non, je n\'aime pas le poisson. Je préfère la viande. Et toi ?' },
    { speaker: 'Sophie', role: 'A', text: 'I like fish a lot! My sister loves sushi.', translation: 'J\'aime beaucoup le poisson ! Ma sœur adore les sushis.' },
    { speaker: 'Mike', role: 'B', text: 'She doesn\'t like French food? That\'s unusual! I dislike spicy food myself.', translation: 'Elle n\'aime pas la cuisine française ? C\'est inhabituel ! Moi, je n\'aime pas la nourriture épicée.' },
  ],
  conversationTitle: 'Exprimer ses goûts',
  pronunciation: [
    { word: 'Like', phonetic: '/laɪk/', meaning: 'Aimer', tip: 'Le "i" est long : "laïk". Ne dites pas "lik" court. Le "k" final est net et sans aspiration excessive.' },
    { word: 'Love', phonetic: '/lʌv/', meaning: 'Adorer', tip: 'Le "u" est ouvert comme dans "come" : "leuv". Le "v" final est doux mais audible.' },
    { word: 'Hate', phonetic: '/heɪt/', meaning: 'Détester', tip: 'Le "h" est expiré et le "ate" = "éït" : "héït". Ne rendez pas le "h" muet comme en français.' },
    { word: 'Prefer', phonetic: '/prɪˈfɜːr/', meaning: 'Préférer', tip: 'L\'accent est sur "fer" : "pri-FER". Le premier "e" est réduit (schwa), le deuxième est accentué.' },
  ],
}

// ─── a1-l19: Ordering at a Café (conversation) ────────────────────────────────
export const A1_L19: LessonContent = {
  vocab: [
    { english: 'Order', french: 'Commander / Commande', phonetic: '/ˈɔːrdər/', example: 'I would like to order, please.', exampleTranslation: 'Je voudrais commander, s\'il vous plaît.' },
    { english: 'Menu', french: 'Menu / Carte', phonetic: '/ˈmenjuː/', example: 'Can I see the menu?', exampleTranslation: 'Puis-je voir le menu ?' },
    { english: 'Bill', french: 'L\'addition', phonetic: '/bɪl/', example: 'The bill, please.', exampleTranslation: 'L\'addition, s\'il vous plaît.' },
    { english: 'Tip', french: 'Pourboire', phonetic: '/tɪp/', example: 'I left a tip on the table.', exampleTranslation: 'J\'ai laissé un pourboire sur la table.' },
    { english: 'Waiter', french: 'Serveur', phonetic: '/ˈweɪtər/', example: 'The waiter is very friendly.', exampleTranslation: 'Le serveur est très sympa.' },
  ],
  grammar: {
    title: 'Demandes polies au café et au restaurant',
    explanation: 'Pour commander poliment, utilisez ces formules : "I would like..." (Je voudrais...), "Can I have...?" (Puis-je avoir...?), "Could I get...?" (Pourrais-je obtenir...?). Ajoutez toujours "please" à la fin. Quand on vous sert quelque chose, dites "Thank you". ATTENTION : "Give me" et "I want" sont considérés impolis en anglais ! Dites plutôt "I would like" ou "Can I have". Pour payer : "Could I have the bill, please?" ou "Can we pay, please?"',
    examples: [
      { sentence: 'I would like a coffee, please.', translation: 'Je voudrais un café, s\'il vous plaît.', isCorrect: true },
      { sentence: 'Give me a water.', translation: '', isCorrect: false },
      { sentence: 'Can I have the bill, please?', translation: 'Puis-je avoir l\'addition, s\'il vous plaît ?', isCorrect: true },
      { sentence: 'Could I see the menu?', translation: 'Pourrais-je voir le menu ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Give me a water.', correct: 'I would like some water, please.', explanation: '"Give me" est impoli en anglais. Utilisez "I would like" + "please" pour être poli. Et "water" est indénombrable.' },
      { wrong: 'I want the bill.', correct: 'Could I have the bill, please?', explanation: '"I want" est trop direct. "Could I have" est beaucoup plus poli et courant en anglais.' },
    ],
  },
  conversation: [
    { speaker: 'Waiter', role: 'A', text: 'Good afternoon! Would you like to order?', translation: 'Bon après-midi ! Souhaitez-vous commander ?' },
    { speaker: 'Customer', role: 'B', text: 'Yes! Can I have the menu, please?', translation: 'Oui ! Puis-je avoir le menu, s\'il vous plaît ?' },
    { speaker: 'Waiter', role: 'A', text: 'Of course! Here it is. Our special today is the chocolate cake.', translation: 'Bien sûr ! Le voici. Notre spécialité aujourd\'hui est le gâteau au chocolat.' },
    { speaker: 'Customer', role: 'B', text: 'I would like a coffee and a piece of chocolate cake, please.', translation: 'Je voudrais un café et un morceau de gâteau au chocolat, s\'il vous plaît.' },
    { speaker: 'Waiter', role: 'A', text: 'Anything else?', translation: 'Autre chose ?' },
    { speaker: 'Customer', role: 'B', text: 'No, thank you. Could I have the bill when you are ready? I will leave a tip!', translation: 'Non, merci. Pourrais-je avoir l\'addition quand vous serez prêt ? Je laisserai un pourboire !' },
  ],
  conversationTitle: 'Au café',
  pronunciation: [
    { word: 'Order', phonetic: '/ˈɔːrdər/', meaning: 'Commander', tip: 'L\'accent est sur "or" : "OR-der". Le "or" est long comme dans "door". Le "er" final est réduit.' },
    { word: 'Menu', phonetic: '/ˈmenjuː/', meaning: 'Menu', tip: 'Le "u" final est long : "mé-niou". L\'accent est sur la première syllabe. Ne dites pas "ménu".' },
    { word: 'Bill', phonetic: '/bɪl/', meaning: 'L\'addition', tip: 'Le "i" est court : "bil". Comme dans "will" (futur). Pas "biil" long.' },
    { word: 'Waiter', phonetic: '/ˈweɪtər/', meaning: 'Serveur', tip: 'L\'accent est sur "wait" : "OUÉI-ter". Le "er" final est doux et réduit. Ne dites pas "ouè-tèr".' },
  ],
}

// ─── a1-l20: Food Pronunciation (pronunciation) ───────────────────────────────
export const A1_L20: LessonContent = {
  vocab: [
    { english: 'Breakfast', french: 'Petit-déjeuner', phonetic: '/ˈbrekfəst/', example: 'I eat breakfast at seven.', exampleTranslation: 'Je prends le petit-déjeuner à sept heures.' },
    { english: 'Lunch', french: 'Déjeuner', phonetic: '/lʌntʃ/', example: 'Lunch is at noon.', exampleTranslation: 'Le déjeuner est à midi.' },
    { english: 'Dinner', french: 'Dîner', phonetic: '/ˈdɪnər/', example: 'Dinner is at seven PM.', exampleTranslation: 'Le dîner est à 19h.' },
    { english: 'Recipe', french: 'Recette', phonetic: '/ˈresəpi/', example: 'This recipe is easy.', exampleTranslation: 'Cette recette est facile.' },
    { english: 'Dessert', french: 'Dessert', phonetic: '/dɪˈzɜːrt/', example: 'We have cake for dessert.', exampleTranslation: 'Nous avons du gâteau en dessert.' },
  ],
  grammar: {
    title: 'Les sons voyelles dans les mots de nourriture',
    explanation: 'Les voyelles en anglais sont souvent trompeuses pour les francophones : "breakfast" se prononce "brek-fust" (pas "brék-fest"), "recipe" = "ré-si-pi" (pas "ré-saïp"), "dinner" = "din-er" (i court), "dessert" = "di-ZERT" (accent sur la deuxième syllabe, contrairement au français "désert"). Règle générale : les mots de deux syllabes ont souvent l\'accent sur la PREMIÈRE syllabe (BREAKfast, DInner), mais les mots d\'origine française gardent souvent l\'accent français (desSERT).',
    examples: [
      { sentence: 'Breakfast is at 8 AM.', translation: 'Le petit-déjeuner est à 8h.', isCorrect: true },
      { sentence: 'This is a simple recipe.', translation: 'C\'est une recette simple.', isCorrect: true },
      { sentence: 'Lunch is my favorite meal.', translation: 'Le déjeuner est mon repas préféré.', isCorrect: true },
      { sentence: 'I eat di-NER at seven.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'Ré-saïp', correct: 'Ré-si-pi', explanation: '"Recipe" se prononce "ré-si-pi" avec des "i" courts dans les deux dernières syllabes. Pas de son "aï" !' },
      { wrong: 'Brék-fest', correct: 'Brek-fust', explanation: 'Dans "breakfast", le "ea" = "e" court (pas "é" long) et le "a" de "fast" est réduit à "u" : "brek-fust".' },
    ],
  },
  conversation: [
    { speaker: 'Chef', role: 'A', text: 'Welcome to cooking class! What do you eat for breakfast?', translation: 'Bienvenue au cours de cuisine ! Que mangez-vous au petit-déjeuner ?' },
    { speaker: 'Student', role: 'B', text: 'I have breakfast at seven. Usually bread and coffee.', translation: 'Je prends le petit-déjeuner à sept heures. Généralement du pain et du café.' },
    { speaker: 'Chef', role: 'A', text: 'Good. And lunch? What time?', translation: 'Bien. Et le déjeuner ? À quelle heure ?' },
    { speaker: 'Student', role: 'B', text: 'Lunch is at noon. I eat a big lunch, then a small dinner.', translation: 'Le déjeuner est à midi. Je mange un gros déjeuner, puis un petit dîner.' },
    { speaker: 'Chef', role: 'A', text: 'Interesting! Today\'s recipe is for dessert. Chocolate cake!', translation: 'Intéressant ! La recette d\'aujourd\'hui est un dessert. Gâteau au chocolat !' },
    { speaker: 'Student', role: 'B', text: 'I love dessert! Dinner is always better with a sweet recipe.', translation: 'J\'adore le dessert ! Le dîner est toujours meilleur avec une recette sucrée.' },
  ],
  conversationTitle: 'Au cours de cuisine',
  pronunciation: [
    { word: 'Breakfast', phonetic: '/ˈbrekfəst/', meaning: 'Petit-déjeuner', tip: 'Prononcez "brek-fust" — le "ea" = "e" court et le "a" de "fast" est réduit. L\'accent est sur "BREAK". Pas "bréé-kfest" !' },
    { word: 'Lunch', phonetic: '/lʌntʃ/', meaning: 'Déjeuner', tip: 'Le "u" est ouvert comme dans "come" : "leunt-ch". Le "ch" = "tch". L\'accent est sur "LUNCH".' },
    { word: 'Dinner', phonetic: '/ˈdɪnər/', meaning: 'Dîner', tip: 'Le "i" est court comme dans "sit" : "din-er". L\'accent est sur "DIN". Ne dites pas "dii-ner" avec un "i" long.' },
    { word: 'Dessert', phonetic: '/dɪˈzɜːrt/', meaning: 'Dessert', tip: 'L\'accent est sur "sert" : "di-ZERT" — contrairement au français "désert" (lieu vide). Les deux mots existent en anglais : "dessert" (sucrerie) vs "desert" (sable).' },
  ],
}
// Lesson content for A1 Units 5-8
// YOELANG English learning app for francophone users
// Inspired by Harvard's practical English pedagogy - rigorous, practical, progressive


// ═══════════════════════════════════════════════════════════════════════════════
// UNIT 5: FAMILY (a1-l21 to a1-l25)
// ═══════════════════════════════════════════════════════════════════════════════

export const A1_L21: LessonContent = {
  vocab: [
    { english: 'Father', french: 'Père', phonetic: '/ˈfɑːðər/', example: 'My father works in a hospital.', exampleTranslation: 'Mon père travaille dans un hôpital.' },
    { english: 'Sister', french: 'Sœur', phonetic: '/ˈsɪstər/', example: 'My sister is older than me.', exampleTranslation: 'Ma sœur est plus âgée que moi.' },
    { english: 'Parents', french: 'Parents', phonetic: '/ˈperənts/', example: 'My parents live in Lyon.', exampleTranslation: 'Mes parents habitent à Lyon.' },
    { english: 'Son', french: 'Fils', phonetic: '/sʌn/', example: 'Their son is three years old.', exampleTranslation: 'Leur fils a trois ans.' },
    { english: 'Aunt', french: 'Tante', phonetic: '/ænt/', example: 'My aunt lives near the sea.', exampleTranslation: 'Ma tante habite près de la mer.' },
  ],
  grammar: {
    title: 'Irrégularités du pluriel — Famille',
    explanation: 'Certains mots de la famille ont des pluriels irréguliers : man → men (homme → hommes), woman → women (femme → femmes), child → children (enfant → enfants), person → people (personne → personnes). On ne dit PAS "mans", "womans" ou "childs".',
    examples: [
      { sentence: 'The women in my family are strong.', translation: 'Les femmes de ma famille sont fortes.', isCorrect: true },
      { sentence: 'There are three childs in the room.', translation: '', isCorrect: false },
      { sentence: 'The men are my brothers.', translation: 'Les hommes sont mes frères.', isCorrect: true },
      { sentence: 'Many people live in this city.', translation: 'Beaucoup de personnes vivent dans cette ville.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Three childs', correct: 'Three children', explanation: 'Le pluriel de "child" est "children", pas "childs".' },
      { wrong: 'Two womans', correct: 'Two women', explanation: 'Le pluriel de "woman" est "women" (prononcé "wimmen"), pas "womans".' },
    ],
  },
  conversation: [
    { speaker: 'Camille', role: 'A', text: 'Tell me, do you have a big family?', translation: 'Dis-moi, as-tu une grande famille ?' },
    { speaker: 'Lucas', role: 'B', text: 'Yes! I have one sister and two brothers. My parents have four children.', translation: 'Oui ! J\'ai une sœur et deux frères. Mes parents ont quatre enfants.' },
    { speaker: 'Camille', role: 'A', text: 'Wow! What does your father do?', translation: 'Waouh ! Que fait ton père ?' },
    { speaker: 'Lucas', role: 'B', text: 'My father is a teacher. And my aunt is a doctor.', translation: 'Mon père est professeur. Et ma tante est médecin.' },
    { speaker: 'Camille', role: 'A', text: 'That\'s nice. Do you have any sons or daughters?', translation: 'C\'est sympa. As-tu des fils ou des filles ?' },
    { speaker: 'Lucas', role: 'B', text: 'Not yet! But I want a son and a daughter one day.', translation: 'Pas encore ! Mais je voudrais un fils et une fille un jour.' },
  ],
  conversationTitle: 'Parler de sa famille',
  pronunciation: [
    { word: 'Father', phonetic: '/ˈfɑːðər/', meaning: 'Père', tip: 'Le "th" est sonore : langue entre les dents, faites vibrer les cordes vocales. "Fa-der".' },
    { word: 'Sister', phonetic: '/ˈsɪstər/', meaning: 'Sœur', tip: 'Le "i" est court comme dans "lit" : "sis-ter". Pas "siister".' },
    { word: 'Son', phonetic: '/sʌn/', meaning: 'Fils', tip: 'Le "o" est ouvert comme dans "bon" : "seun". Ne confondez pas avec "sun" (soleil) — même prononciation !' },
    { word: 'Aunt', phonetic: '/ænt/', meaning: 'Tante', tip: 'En anglais américain, on prononce "ant" (comme la fourmi). En anglais britannique, on dit "ahnt".' },
  ],
}

export const A1_L22: LessonContent = {
  vocab: [
    { english: 'My', french: 'Mon/Ma', phonetic: '/maɪ/', example: 'This is my book.', exampleTranslation: 'Ceci est mon livre.' },
    { english: 'His', french: 'Son/Sa (à lui)', phonetic: '/hɪz/', example: 'This is his car.', exampleTranslation: 'C\'est sa voiture (à lui).' },
    { english: 'Her', french: 'Son/Sa (à elle)', phonetic: '/hɜːr/', example: 'This is her bag.', exampleTranslation: 'C\'est son sac (à elle).' },
    { english: 'Our', french: 'Notre/Nos', phonetic: '/aʊr/', example: 'This is our house.', exampleTranslation: 'C\'est notre maison.' },
    { english: 'Their', french: 'Leur/Leurs', phonetic: '/ðer/', example: 'This is their garden.', exampleTranslation: 'C\'est leur jardin.' },
  ],
  grammar: {
    title: 'Adjectifs possessifs — my, your, his, her, our, their',
    explanation: 'Les adjectifs possessifs s\'accordent avec le POSSESSEUR, pas avec l\'objet possédé. "His" = à un homme, "her" = à une femme. En français, "son livre" peut dire "his book" ou "her book" — en anglais, on distingue ! "My mother" (ma mère), "his sister" (sa sœur à lui), "her brother" (son frère à elle).',
    examples: [
      { sentence: 'She loves her mother.', translation: 'Elle aime sa mère (à elle).', isCorrect: true },
      { sentence: 'He loves her mother.', translation: 'Il aime sa mère (à elle).', isCorrect: true },
      { sentence: 'She loves his mother.', translation: '', isCorrect: false },
      { sentence: 'We love our parents.', translation: 'Nous aimons nos parents.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She loves his mother. (pour dire : sa propre mère)', correct: 'She loves her mother.', explanation: '"Her" parce que c\'est la mère de "she", pas de "he". "His" = à un homme.' },
      { wrong: 'The book of John', correct: 'John\'s book', explanation: 'En anglais, on utilise l\'apostrophe+s pour la possession : "John\'s book", pas "the book of John".' },
    ],
  },
  conversation: [
    { speaker: 'Nadia', role: 'A', text: 'Is this your bag, Sophie?', translation: 'C\'est ton sac, Sophie ?' },
    { speaker: 'Sophie', role: 'B', text: 'No, that\'s her bag! My bag is blue.', translation: 'Non, c\'est son sac ! Mon sac est bleu.' },
    { speaker: 'Nadia', role: 'A', text: 'Oh! And whose jacket is this?', translation: 'Oh ! Et de qui est cette veste ?' },
    { speaker: 'Sophie', role: 'B', text: 'That\'s his jacket. Pierre left it here.', translation: 'C\'est sa veste. Pierre l\'a laissée ici.' },
    { speaker: 'Nadia', role: 'A', text: 'I see. Our teacher is looking for her keys.', translation: 'Je vois. Notre professeur cherche ses clés.' },
    { speaker: 'Sophie', role: 'B', text: 'Their keys are on the table! Let\'s tell her.', translation: 'Ses clés sont sur la table ! Allons lui dire.' },
  ],
  conversationTitle: 'À qui est-ce ?',
  pronunciation: [
    { word: 'My', phonetic: '/maɪ/', meaning: 'Mon/Ma', tip: 'Le "y" se prononce "aï" : "maï". Ne dites pas "mi".' },
    { word: 'His', phonetic: '/hɪz/', meaning: 'Son/Sa (à lui)', tip: 'Le "h" est expiré et le "s" est sonore : "hiz". Pas "is".' },
    { word: 'Her', phonetic: '/hɜːr/', meaning: 'Son/Sa (à elle)', tip: 'Le "h" est expiré et le "er" est un son ouvert : "heur". Comme dans "œur" français.' },
    { word: 'Their', phonetic: '/ðer/', meaning: 'Leur/Leurs', tip: 'Le "th" est sonore : langue entre les dents, vibrez. "Dheir". Pas "zair".' },
  ],
}

export const A1_L23: LessonContent = {
  vocab: [
    { english: 'Only child', french: 'Enfant unique', phonetic: '/ˈoʊnli tʃaɪld/', example: 'I am an only child.', exampleTranslation: 'Je suis enfant unique.' },
    { english: 'Twins', french: 'Jumeaux/Jumelles', phonetic: '/twɪnz/', example: 'They are twins.', exampleTranslation: 'Ce sont des jumeaux.' },
    { english: 'Married', french: 'Marié(e)', phonetic: '/ˈmærid/', example: 'My parents are married.', exampleTranslation: 'Mes parents sont mariés.' },
    { english: 'Single', french: 'Célibataire', phonetic: '/ˈsɪŋɡəl/', example: 'My sister is single.', exampleTranslation: 'Ma sœur est célibataire.' },
    { english: 'Relative', french: 'Membre de la famille', phonetic: '/ˈrelətɪv/', example: 'All my relatives live in France.', exampleTranslation: 'Tous mes proches habitent en France.' },
  ],
  grammar: {
    title: 'Poser des questions sur la famille — "Do you have...?"',
    explanation: 'Pour demander si quelqu\'un a des membres de famille : "Do you have any brothers or sisters?" (As-tu des frères ou sœurs ?), "Does he have children?" (A-t-il des enfants ?). Réponse : "Yes, I do" / "No, I don\'t" ou "Yes, he does" / "No, he doesn\'t". On peut aussi dire "I have got..." (j\'ai...).',
    examples: [
      { sentence: 'Do you have any brothers?', translation: 'As-tu des frères ?', isCorrect: true },
      { sentence: 'Does she have children?', translation: 'A-t-elle des enfants ?', isCorrect: true },
      { sentence: 'Do you have a brother? (une seule réponse)', translation: '', isCorrect: false },
      { sentence: 'Yes, I do. I have two sisters.', translation: 'Oui. J\'ai deux sœurs.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Do you have brother?', correct: 'Do you have any brothers?', explanation: 'Après "do you have" pour les membres de famille, on utilise "any" + pluriel : "any brothers".' },
      { wrong: 'Does she has children?', correct: 'Does she have children?', explanation: 'Après "does", le verbe reste à la forme de base : "have", pas "has".' },
    ],
  },
  conversation: [
    { speaker: 'Emma', role: 'A', text: 'Do you have any brothers or sisters?', translation: 'As-tu des frères ou sœurs ?' },
    { speaker: 'Youssef', role: 'B', text: 'No, I am an only child. And you?', translation: 'Non, je suis enfant unique. Et toi ?' },
    { speaker: 'Emma', role: 'A', text: 'I have a twin sister! We are very close.', translation: 'J\'ai une sœur jumelle ! Nous sommes très proches.' },
    { speaker: 'Youssef', role: 'B', text: 'That\'s amazing! Are your parents married?', translation: 'C\'est génial ! Tes parents sont mariés ?' },
    { speaker: 'Emma', role: 'A', text: 'Yes, they are. My aunt is single though. She lives with us.', translation: 'Oui. Mais ma tante est célibataire. Elle vit avec nous.' },
    { speaker: 'Youssef', role: 'B', text: 'All my relatives live in Morocco. I miss them!', translation: 'Tous mes proches habitent au Maroc. Ils me manquent !' },
  ],
  conversationTitle: 'Frères et sœurs',
  pronunciation: [
    { word: 'Twins', phonetic: '/twɪnz/', meaning: 'Jumeaux', tip: 'Le "w" : arrondissez les lèvres. "Touinz". Le "s" final est sonore : "z".' },
    { word: 'Married', phonetic: '/ˈmærid/', meaning: 'Marié(e)', tip: 'Prononcez "ma-rid" — le "a" est ouvert et le "e" du milieu disparaît.' },
    { word: 'Single', phonetic: '/ˈsɪŋɡəl/', meaning: 'Célibataire', tip: 'Le "ng" : langue contre le palais, ne dites pas "sin-gle" mais "sin-guel".' },
    { word: 'Relative', phonetic: '/ˈrelətɪv/', meaning: 'Proche (famille)', tip: 'L\'accent est sur "REL" : "REL-e-tiv". Ne dites pas "ré-la-TIV".' },
  ],
}

export const A1_L24: LessonContent = {
  vocab: [
    { english: 'Have', french: 'Avoir', phonetic: '/hæv/', example: 'I have a big family.', exampleTranslation: 'J\'ai une grande famille.' },
    { english: 'Has', french: 'A (3e personne)', phonetic: '/hæz/', example: 'She has two brothers.', exampleTranslation: 'Elle a deux frères.' },
    { english: 'Don\'t have', french: 'N\'ai pas / N\'as pas', phonetic: '/doʊnt hæv/', example: 'I don\'t have a sister.', exampleTranslation: 'Je n\'ai pas de sœur.' },
    { english: 'Doesn\'t have', french: 'N\'a pas (3e personne)', phonetic: '/ˈdʌzənt hæv/', example: 'He doesn\'t have children.', exampleTranslation: 'Il n\'a pas d\'enfants.' },
  ],
  grammar: {
    title: 'Have / Has — Avoir en anglais',
    explanation: 'Le verbe "have" (avoir) se conjugue : I have, you have, he/she/it has, we have, they have. Négatif : I don\'t have (je n\'ai pas), he/she/it doesn\'t have (il/elle n\'a pas). Question : Do you have...? / Does she have...? On peut aussi dire "I\'ve got" / "She\'s got" (plus britannique).',
    examples: [
      { sentence: 'I have two sisters.', translation: 'J\'ai deux sœurs.', isCorrect: true },
      { sentence: 'She have a brother.', translation: '', isCorrect: false },
      { sentence: 'He doesn\'t have any children.', translation: 'Il n\'a pas d\'enfants.', isCorrect: true },
      { sentence: 'Does your mother have a car?', translation: 'Est-ce que ta mère a une voiture ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She have a brother.', correct: 'She has a brother.', explanation: 'Avec he/she/it, on utilise "has", pas "have".' },
      { wrong: 'He doesn\'t has a car.', correct: 'He doesn\'t have a car.', explanation: 'Après "doesn\'t", on utilise toujours "have" (forme de base), pas "has".' },
    ],
  },
  conversation: [
    { speaker: 'Chloé', role: 'A', text: 'How many cousins do you have?', translation: 'Combien de cousins as-tu ?' },
    { speaker: 'Karim', role: 'B', text: 'I have six cousins! My mother has three brothers.', translation: 'J\'ai six cousins ! Ma mère a trois frères.' },
    { speaker: 'Chloé', role: 'A', text: 'Does your father have brothers too?', translation: 'Ton père a aussi des frères ?' },
    { speaker: 'Karim', role: 'B', text: 'No, he doesn\'t have brothers. He has one sister.', translation: 'Non, il n\'a pas de frères. Il a une sœur.' },
    { speaker: 'Chloé', role: 'A', text: 'I don\'t have any cousins. My parents are only children.', translation: 'Je n\'ai aucun cousin. Mes parents sont enfants uniques.' },
    { speaker: 'Karim', role: 'B', text: 'Oh, that\'s unusual! But you have us as friends!', translation: 'Oh, c\'est rare ! Mais tu nous as comme amis !' },
  ],
  conversationTitle: 'Avoir des cousins',
  pronunciation: [
    { word: 'Have', phonetic: '/hæv/', meaning: 'Avoir', tip: 'Le "h" est expiré et le "a" est ouvert comme dans "cat" : "haev". Le "v" final est doux.' },
    { word: 'Has', phonetic: '/hæz/', meaning: 'A (3e pers.)', tip: 'Même "h" expiré. Le "s" final est sonore : "haez". Pas "ass".' },
    { word: 'Doesn\'t', phonetic: '/ˈdʌzənt/', meaning: 'Ne...pas (3e pers.)', tip: 'Prononcez "deuz-ent" — le "o" est ouvert comme dans "bon" et le "t" final est léger.' },
    { word: 'Have got', phonetic: '/hæv ɡɒt/', meaning: 'Avoir (britannique)', tip: 'En anglais britannique, "I\'ve got" = "aïv got". Le "v" se lie au "g" suivant.' },
  ],
}

export const A1_L25: LessonContent = {
  vocab: [
    { english: 'Daughter', french: 'Fille', phonetic: '/ˈdɔːtər/', example: 'Their daughter is very kind.', exampleTranslation: 'Leur fille est très gentille.' },
    { english: 'Nephew', french: 'Neveu', phonetic: '/ˈnefjuː/', example: 'My nephew is five years old.', exampleTranslation: 'Mon neveu a cinq ans.' },
    { english: 'Cousin', french: 'Cousin(e)', phonetic: '/ˈkʌzən/', example: 'My cousin lives in Canada.', exampleTranslation: 'Mon cousin habite au Canada.' },
    { english: 'Grandmother', french: 'Grand-mère', phonetic: '/ˈɡrændmʌðər/', example: 'My grandmother makes great food.', exampleTranslation: 'Ma grand-mère fait de la grande cuisine.' },
  ],
  grammar: {
    title: 'La possession avec l\'apostrophe — \'s',
    explanation: 'Pour exprimer la possession en anglais, on ajoute \'s après le nom du possesseur : "Maria\'s brother" (le frère de Maria), "my mother\'s car" (la voiture de ma mère). Pluriel déjà en -s : on ajoute seulement l\'apostrophe : "my parents\' house" (la maison de mes parents).',
    examples: [
      { sentence: 'John\'s sister is a doctor.', translation: 'La sœur de John est médecin.', isCorrect: true },
      { sentence: 'My parents\' house is big.', translation: 'La maison de mes parents est grande.', isCorrect: true },
      { sentence: 'The car of my father is red.', translation: '', isCorrect: false },
      { sentence: 'Sarah\'s children are twins.', translation: 'Les enfants de Sarah sont jumeaux.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The car of my father', correct: 'My father\'s car', explanation: 'On utilise l\'apostrophe+s : "my father\'s car", pas "the car of my father".' },
      { wrong: 'My parents\'s house', correct: 'My parents\' house', explanation: 'Quand le nom est déjà au pluriel en -s, on ajoute seulement l\'apostrophe, pas un autre "s".' },
    ],
  },
  conversation: [
    { speaker: 'Léa', role: 'A', text: 'Is that your grandmother\'s photo?', translation: 'C\'est la photo de ta grand-mère ?' },
    { speaker: 'Hugo', role: 'B', text: 'Yes! My grandmother\'s name is Henriette. She\'s ninety!', translation: 'Oui ! Ma grand-mère s\'appelle Henriette. Elle a quatre-vingt-dix ans !' },
    { speaker: 'Léa', role: 'A', text: 'Wow! And who is this? Your cousin?', translation: 'Waouh ! Et qui est-ce ? Ton cousin ?' },
    { speaker: 'Hugo', role: 'B', text: 'No, that\'s my nephew. My sister\'s son.', translation: 'Non, c\'est mon neveu. Le fils de ma sœur.' },
    { speaker: 'Léa', role: 'A', text: 'He\'s cute! My daughter\'s name is Claire.', translation: 'Il est mignon ! Ma fille s\'appelle Claire.' },
    { speaker: 'Hugo', role: 'B', text: 'What a lovely name! My cousin\'s daughter is also named Claire!', translation: 'Quel joli nom ! La fille de mon cousin s\'appelle aussi Claire !' },
  ],
  conversationTitle: 'La photo de famille',
  pronunciation: [
    { word: 'Daughter', phonetic: '/ˈdɔːtər/', meaning: 'Fille', tip: 'Le "au" = "o" long ouvert : "do-ter". Ne dites PAS "daug-ter".' },
    { word: 'Nephew', phonetic: '/ˈnefjuː/', meaning: 'Neveu', tip: 'Prononcez "ne-fiou" — le "ph" = "f" et le "ew" = "iou".' },
    { word: 'Cousin', phonetic: '/ˈkʌzən/', meaning: 'Cousin(e)', tip: 'Le "ou" est ouvert : "keuz-enn". Ne dites pas "kou-zin".' },
    { word: 'Grandmother', phonetic: '/ˈɡrændmʌðər/', meaning: 'Grand-mère', tip: 'Le "th" est sonore : langue entre les dents, vibrez. "Gran-meu-der".' },
  ],
}

// ═══════════════════════════════════════════════════════════════════════════════
// UNIT 6: DAILY ROUTINE (a1-l26 to a1-l30)
// ═══════════════════════════════════════════════════════════════════════════════

export const A1_L26: LessonContent = {
  vocab: [
    { english: 'Wake up', french: 'Se réveiller', phonetic: '/weɪk ʌp/', example: 'I wake up at seven o\'clock.', exampleTranslation: 'Je me réveille à sept heures.' },
    { english: 'Brush teeth', french: 'Se brosser les dents', phonetic: '/brʌʃ tiːθ/', example: 'I brush my teeth every morning.', exampleTranslation: 'Je me brosse les dents chaque matin.' },
    { english: 'Get dressed', french: 'S\'habiller', phonetic: '/ɡet drest/', example: 'She gets dressed quickly.', exampleTranslation: 'Elle s\'habille rapidement.' },
    { english: 'Take a shower', french: 'Prendre une douche', phonetic: '/teɪk ə ˈʃaʊər/', example: 'He takes a shower before breakfast.', exampleTranslation: 'Il prend une douche avant le petit-déjeuner.' },
    { english: 'Have breakfast', french: 'Prendre le petit-déjeuner', phonetic: '/hæv ˈbrekfəst/', example: 'We have breakfast at eight.', exampleTranslation: 'Nous prenons le petit-déjeuner à huit heures.' },
  ],
  grammar: {
    title: 'Le Present Simple avec les routines',
    explanation: 'Le Present Simple décrit les habitudes et routines quotidiennes. Avec I/you/we/they : verbe de base ("I wake up"). Avec he/she/it : on ajoute -s ou -es ("She wakes up", "He brushes"). Pour les verbes se terminant en -sh, -ch, -o, -ss, -x : on ajoute -es (brush → brushes, go → goes).',
    examples: [
      { sentence: 'I wake up at seven.', translation: 'Je me réveille à sept heures.', isCorrect: true },
      { sentence: 'She brush her teeth every day.', translation: '', isCorrect: false },
      { sentence: 'He takes a shower in the morning.', translation: 'Il prend une douche le matin.', isCorrect: true },
      { sentence: 'We have breakfast together.', translation: 'Nous prenons le petit-déjeuner ensemble.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She brush her teeth.', correct: 'She brushes her teeth.', explanation: 'Avec he/she/it et un verbe en -sh, on ajoute -es : brush → brushes.' },
      { wrong: 'He wake up at 7.', correct: 'He wakes up at 7.', explanation: 'Avec he/she/it, on ajoute -s au verbe : wake → wakes.' },
    ],
  },
  conversation: [
    { speaker: 'Marie', role: 'A', text: 'What time do you wake up?', translation: 'À quelle heure te réveilles-tu ?' },
    { speaker: 'David', role: 'B', text: 'I wake up at six thirty. Then I take a shower.', translation: 'Je me réveille à six heures et demie. Ensuite je prends une douche.' },
    { speaker: 'Marie', role: 'A', text: 'Do you have breakfast before you get dressed?', translation: 'Prends-tu le petit-déjeuner avant de t\'habiller ?' },
    { speaker: 'David', role: 'B', text: 'Yes! I always have breakfast first. I brush my teeth after.', translation: 'Oui ! Je prends toujours le petit-déjeuner d\'abord. Je me brosse les dents après.' },
    { speaker: 'Marie', role: 'A', text: 'That\'s smart. I get dressed first, then I eat.', translation: 'C\'est malin. Je m\'habille d\'abord, puis je mange.' },
    { speaker: 'David', role: 'B', text: 'Everyone has their own routine!', translation: 'Chacun sa routine !' },
  ],
  conversationTitle: 'La routine du matin',
  pronunciation: [
    { word: 'Wake up', phonetic: '/weɪk ʌp/', meaning: 'Se réveiller', tip: 'Le "w" : arrondissez les lèvres. "Ouék-ap". L\'accent est sur "wake".' },
    { word: 'Brush', phonetic: '/brʌʃ/', meaning: 'Brosser', tip: 'Le "u" est ouvert : "breuch". Le "sh" final est comme le "ch" français.' },
    { word: 'Shower', phonetic: '/ˈʃaʊər/', meaning: 'Douche', tip: 'Prononcez "chaou-er" — le "ow" = "aou" et le "er" final est doux.' },
    { word: 'Breakfast', phonetic: '/ˈbrekfəst/', meaning: 'Petit-déjeuner', tip: 'On prononce "brek-fust" — le "a" disparaît. Pas "brék-fast".' },
  ],
}

export const A1_L27: LessonContent = {
  vocab: [
    { english: 'Go', french: 'Aller', phonetic: '/ɡoʊ/', example: 'I go to school every day.', exampleTranslation: 'Je vais à l\'école chaque jour.' },
    { english: 'Eat', french: 'Manger', phonetic: '/iːt/', example: 'We eat lunch at noon.', exampleTranslation: 'Nous mangeons le déjeuner à midi.' },
    { english: 'Study', french: 'Étudier', phonetic: '/ˈstʌdi/', example: 'She studies English every evening.', exampleTranslation: 'Elle étudie l\'anglais chaque soir.' },
    { english: 'Sleep', french: 'Dormir', phonetic: '/sliːp/', example: 'He sleeps eight hours a night.', exampleTranslation: 'Il dort huit heures par nuit.' },
  ],
  grammar: {
    title: 'Present Simple — Formes affirmative, négative et interrogative',
    explanation: 'Affirmatif : I work, you work, he/she/it works, we work, they work. Négatif : I don\'t work, he/she/it doesn\'t work. Interrogatif : Do you work? Does she work? Réponses courtes : Yes, I do. / No, she doesn\'t. Le Present Simple exprime des habitudes, des routines, des vérités générales.',
    examples: [
      { sentence: 'She studies French at school.', translation: 'Elle étudie le français à l\'école.', isCorrect: true },
      { sentence: 'He don\'t eat meat.', translation: '', isCorrect: false },
      { sentence: 'Do you go to work by bus?', translation: 'Vas-tu au travail en bus ?', isCorrect: true },
      { sentence: 'They doesn\'t study on weekends.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'He don\'t eat meat.', correct: 'He doesn\'t eat meat.', explanation: 'Avec he/she/it, on utilise "doesn\'t", pas "don\'t".' },
      { wrong: 'They doesn\'t study.', correct: 'They don\'t study.', explanation: 'Avec they/we/you, on utilise "don\'t", pas "doesn\'t".' },
    ],
  },
  conversation: [
    { speaker: 'Julie', role: 'A', text: 'Do you go to school by bus?', translation: 'Vas-tu à l\'école en bus ?' },
    { speaker: 'Marc', role: 'B', text: 'No, I don\'t. I walk to school. It takes ten minutes.', translation: 'Non. Je vais à l\'école à pied. Ça prend dix minutes.' },
    { speaker: 'Julie', role: 'A', text: 'Does your sister study at the same school?', translation: 'Ta sœur étudie dans la même école ?' },
    { speaker: 'Marc', role: 'B', text: 'No, she doesn\'t. She studies at the university.', translation: 'Non. Elle étudie à l\'université.' },
    { speaker: 'Julie', role: 'A', text: 'What time does she eat dinner?', translation: 'À quelle heure mange-t-elle le dîner ?' },
    { speaker: 'Marc', role: 'B', text: 'She eats dinner at seven. Then she sleeps early.', translation: 'Elle dîne à sept heures. Ensuite elle se couche tôt.' },
  ],
  conversationTitle: 'Aller à l\'école',
  pronunciation: [
    { word: 'Goes', phonetic: '/ɡoʊz/', meaning: 'Va (3e pers.)', tip: 'Prononcez "gôz" — le "s" final est sonore : "z". Pas "goss".' },
    { word: 'Eats', phonetic: '/iːts/', meaning: 'Mange (3e pers.)', tip: 'Prononcez "iits" — le "ea" est un "i" long et le "s" est sourd.' },
    { word: 'Studies', phonetic: '/ˈstʌdiz/', meaning: 'Étudie (3e pers.)', tip: 'Le "y" devient "ie" : "steu-diz". Le "i" final est court.' },
    { word: 'Sleeps', phonetic: '/sliːps/', meaning: 'Dort (3e pers.)', tip: 'Prononcez "sliips" — le "ee" est long et le "s" final est sourd.' },
  ],
}

export const A1_L28: LessonContent = {
  vocab: [
    { english: 'Commute', french: 'Trajet domicile-travail', phonetic: '/kəˈmjuːt/', example: 'My commute is thirty minutes.', exampleTranslation: 'Mon trajet dure trente minutes.' },
    { english: 'Lunch break', french: 'Pause déjeuner', phonetic: '/lʌntʃ breɪk/', example: 'I have a lunch break at noon.', exampleTranslation: 'J\'ai une pause déjeuner à midi.' },
    { english: 'Chores', french: 'Tâches ménagères', phonetic: '/tʃɔːrz/', example: 'I do chores on Saturday.', exampleTranslation: 'Je fais les tâches ménagères le samedi.' },
    { english: 'Relax', french: 'Se détendre', phonetic: '/rɪˈlæks/', example: 'I relax in the evening.', exampleTranslation: 'Je me détends le soir.' },
  ],
  grammar: {
    title: 'Mots de séquence — First, Then, After that, Finally',
    explanation: 'Pour raconter votre journée dans l\'ordre : "First" (d\'abord), "Then" (ensuite), "After that" (après cela), "Finally" (finalement). Ces mots aident à organiser votre récit. On les place au début de la phrase : "First, I wake up. Then, I take a shower. After that, I eat breakfast. Finally, I go to work."',
    examples: [
      { sentence: 'First, I wake up. Then, I get dressed.', translation: 'D\'abord, je me réveille. Ensuite, je m\'habille.', isCorrect: true },
      { sentence: 'After that, I eat breakfast. Finally, I go to work.', translation: 'Après cela, je prends le petit-déjeuner. Finalement, je vais au travail.', isCorrect: true },
      { sentence: 'Finally I wake up, then I sleep.', translation: '', isCorrect: false },
      { sentence: 'First, she brushes her teeth. Then, she has breakfast.', translation: 'D\'abord, elle se brosse les dents. Ensuite, elle prend le petit-déjeuner.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'First I wake up then I get dressed.', correct: 'First, I wake up. Then, I get dressed.', explanation: 'On sépare les phrases avec un point, pas une virgule. Chaque étape est une phrase complète.' },
      { wrong: 'After, that I eat.', correct: 'After that, I eat.', explanation: '"After that" est une expression inséparable — pas de virgule entre "after" et "that".' },
    ],
  },
  conversation: [
    { speaker: 'Sarah', role: 'A', text: 'Can you describe your typical day?', translation: 'Peux-tu décrire ta journée type ?' },
    { speaker: 'Olivier', role: 'B', text: 'Sure! First, I wake up at six. Then, I take a shower and get dressed.', translation: 'Bien sûr ! D\'abord, je me réveille à six heures. Ensuite, je prends une douche et je m\'habille.' },
    { speaker: 'Sarah', role: 'A', text: 'What do you do after that?', translation: 'Que fais-tu après cela ?' },
    { speaker: 'Olivier', role: 'B', text: 'After that, I have breakfast. My commute is twenty minutes by train.', translation: 'Après cela, je prends le petit-déjeuner. Mon trajet dure vingt minutes en train.' },
    { speaker: 'Sarah', role: 'A', text: 'And in the evening? Do you do chores?', translation: 'Et le soir ? Fais-tu les tâches ménagères ?' },
    { speaker: 'Olivier', role: 'B', text: 'I do chores on Wednesday. But after my lunch break, I just relax!', translation: 'Je fais les tâches ménagères le mercredi. Mais après ma pause déjeuner, je me détends !' },
  ],
  conversationTitle: 'Une journée type',
  pronunciation: [
    { word: 'Commute', phonetic: '/kəˈmjuːt/', meaning: 'Trajet', tip: 'L\'accent est sur "mute" : "ke-MIOUT". Les syllabes avant et après sont réduites.' },
    { word: 'Chores', phonetic: '/tʃɔːrz/', meaning: 'Tâches ménagères', tip: 'Le "ch" = "tch" et le "o" est long : "tchorz". Pas "chorz".' },
    { word: 'Relax', phonetic: '/rɪˈlæks/', meaning: 'Se détendre', tip: 'L\'accent est sur "lax" : "ri-LAKS". Le "a" est ouvert comme dans "cat".' },
    { word: 'Finally', phonetic: '/ˈfaɪnəli/', meaning: 'Finalement', tip: 'Prononcez "faï-na-li" — le "i" de "fi" est long. Pas "fi-nal-li".' },
  ],
}

export const A1_L29: LessonContent = {
  vocab: [
    { english: 'Always', french: 'Toujours', phonetic: '/ˈɔːlweɪz/', example: 'I always drink coffee in the morning.', exampleTranslation: 'Je bois toujours du café le matin.' },
    { english: 'Usually', french: 'Habituellement', phonetic: '/ˈjuːʒuəli/', example: 'She usually walks to work.', exampleTranslation: 'Elle va habituellement au travail à pied.' },
    { english: 'Sometimes', french: 'Parfois', phonetic: '/ˈsʌmtaɪmz/', example: 'I sometimes read before bed.', exampleTranslation: 'Je lis parfois avant de dormir.' },
    { english: 'Never', french: 'Jamais', phonetic: '/ˈnevər/', example: 'He never eats breakfast.', exampleTranslation: 'Il ne prend jamais le petit-déjeuner.' },
  ],
  grammar: {
    title: 'Les adverbes de fréquence — Placement dans la phrase',
    explanation: 'Les adverbes de fréquence se placent AVANT le verbe principal : "I always wake up early", "She sometimes reads". MAIS APRÈS le verbe "be" : "I am always tired", "She is never late". Ordre de fréquence : always (100%) > usually (80%) > sometimes (50%) > never (0%).',
    examples: [
      { sentence: 'I always eat breakfast.', translation: 'Je prends toujours le petit-déjeuner.', isCorrect: true },
      { sentence: 'She is always happy.', translation: 'Elle est toujours heureuse.', isCorrect: true },
      { sentence: 'I am always wake up early.', translation: '', isCorrect: false },
      { sentence: 'He never drinks coffee.', translation: 'Il ne boit jamais de café.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I am always wake up early.', correct: 'I always wake up early.', explanation: 'L\'adverbe se place APRÈS "be" mais AVANT les autres verbes. "Wake up" n\'est pas "be".' },
      { wrong: 'I don\'t never eat meat.', correct: 'I never eat meat.', explanation: 'On n\'utilise pas la double négation en anglais. "Never" suffit, pas besoin de "don\'t".' },
    ],
  },
  conversation: [
    { speaker: 'Émilie', role: 'A', text: 'Do you always wake up early?', translation: 'Te réveilles-tu toujours tôt ?' },
    { speaker: 'Thomas', role: 'B', text: 'Yes, I always wake up at six. I usually go running.', translation: 'Oui, je me réveille toujours à six heures. Je vais habituellement courir.' },
    { speaker: 'Émilie', role: 'A', text: 'That\'s impressive! I am never a morning person.', translation: 'C\'est impressionnant ! Je ne suis jamais du genre matinal.' },
    { speaker: 'Thomas', role: 'B', text: 'Do you sometimes exercise in the evening?', translation: 'Fais-tu parfois de l\'exercice le soir ?' },
    { speaker: 'Émilie', role: 'A', text: 'Sometimes, yes. I usually walk home from work.', translation: 'Parfois, oui. Je rentre habituellement du travail à pied.' },
    { speaker: 'Thomas', role: 'B', text: 'That\'s good exercise! I never skip my morning run.', translation: 'C\'est un bon exercice ! Je ne saute jamais mon footing matinal.' },
  ],
  conversationTitle: 'Toujours ou jamais ?',
  pronunciation: [
    { word: 'Always', phonetic: '/ˈɔːlweɪz/', meaning: 'Toujours', tip: 'Prononcez "ol-ouéz" — l\'accent est sur "al" et le "s" final est sonore : "z".' },
    { word: 'Usually', phonetic: '/ˈjuːʒuəli/', meaning: 'Habituellement', tip: 'Le "s" devient le son "j" français : "iou-jou-a-li". Pas "iou-zou-a-li".' },
    { word: 'Sometimes', phonetic: '/ˈsʌmtaɪmz/', meaning: 'Parfois', tip: 'Prononcez "seum-taïmz" — le "s" final est sonore et le "i" de "times" est long.' },
    { word: 'Never', phonetic: '/ˈnevər/', meaning: 'Jamais', tip: 'L\'accent sur "NEV" : "NE-ver". Le "er" final est doux et réduit.' },
  ],
}

export const A1_L30: LessonContent = {
  vocab: [
    { english: 'Cook', french: 'Cuisiner', phonetic: '/kʊk/', example: 'I cook dinner every evening.', exampleTranslation: 'Je cuisine le dîner chaque soir.' },
    { english: 'Clean', french: 'Nettoyer', phonetic: '/kliːn/', example: 'She cleans the house on Saturday.', exampleTranslation: 'Elle nettoie la maison le samedi.' },
    { english: 'Drive', french: 'Conduire', phonetic: '/draɪv/', example: 'He drives to work every day.', exampleTranslation: 'Il conduit au travail chaque jour.' },
    { english: 'Walk', french: 'Marcher', phonetic: '/wɔːk/', example: 'We walk to the park.', exampleTranslation: 'Nous marchons jusqu\'au parc.' },
  ],
  grammar: {
    title: 'La 3e personne du singulier — Terminaisons -s, -es, -ies',
    explanation: 'Avec he/she/it, le verbe prend une terminaison : 1) Verbes normaux + -s : walk → walks, cook → cooks. 2) Verbes en -sh, -ch, -o, -ss, -x + -es : wash → washes, go → goes, watch → watches. 3) Verbes en consonne + y → -ies : study → studies, carry → carries. MAIS voyelle + y → -s : play → plays.',
    examples: [
      { sentence: 'She walks to school.', translation: 'Elle marche à l\'école.', isCorrect: true },
      { sentence: 'He studys English.', translation: '', isCorrect: false },
      { sentence: 'My mother washes the dishes.', translation: 'Ma mère fait la vaisselle.', isCorrect: true },
      { sentence: 'He plays football on Sunday.', translation: 'Il joue au football le dimanche.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'He studys English.', correct: 'He studies English.', explanation: 'Consonne + y → -ies : study → studies. Pas "studys".' },
      { wrong: 'She watchs TV.', correct: 'She watches TV.', explanation: 'Verbe en -ch → on ajoute -es : watch → watches.' },
    ],
  },
  conversation: [
    { speaker: 'Amina', role: 'A', text: 'Does your husband cook dinner?', translation: 'Ton mari cuisine-t-il le dîner ?' },
    { speaker: 'Isabelle', role: 'B', text: 'Yes, he cooks every evening. He makes great pasta!', translation: 'Oui, il cuisine chaque soir. Il fait d\'excellentes pâtes !' },
    { speaker: 'Amina', role: 'A', text: 'Lucky you! My boyfriend never cooks. He always drives to get takeout.', translation: 'Tu as de la chance ! Mon petit ami ne cuisine jamais. Il conduit toujours chercher à emporter.' },
    { speaker: 'Isabelle', role: 'B', text: 'Does he clean the house at least?', translation: 'Nettoie-t-il la maison au moins ?' },
    { speaker: 'Amina', role: 'A', text: 'Sometimes! He cleans on weekends. I walk the dog every morning.', translation: 'Parfois ! Il nettoie le week-end. Je promène le chien chaque matin.' },
    { speaker: 'Isabelle', role: 'B', text: 'We all have our tasks. I walk the dog too!', translation: 'On a tous nos tâches. Je promène le chien aussi !' },
  ],
  conversationTitle: 'Qui fait quoi ?',
  pronunciation: [
    { word: 'Cooks', phonetic: '/kʊks/', meaning: 'Cuisine (3e pers.)', tip: 'Le "s" final est sourd : "kouks". Après un son sourd (k, p, t, f), -s se prononce "s".' },
    { word: 'Cleans', phonetic: '/kliːnz/', meaning: 'Nettoie (3e pers.)', tip: 'Le "s" final est sonore : "kliinz". Après un son sonore (n, b, d, g, v), -s se prononce "z".' },
    { word: 'Washes', phonetic: '/ˈwɒʃɪz/', meaning: 'Lave (3e pers.)', tip: 'Après -sh, -ch, -s, -x, -z, la terminaison -es se prononce "iz" : "ouch-iz".' },
    { word: 'Studies', phonetic: '/ˈstʌdiz/', meaning: 'Étudie (3e pers.)', tip: 'Le "y" devient "ie" : "steu-diz". Le son "i" final est court.' },
  ],
}

// ═══════════════════════════════════════════════════════════════════════════════
// UNIT 7: HOME (a1-l31 to a1-l35)
// ═══════════════════════════════════════════════════════════════════════════════

export const A1_L31: LessonContent = {
  vocab: [
    { english: 'Kitchen', french: 'Cuisine', phonetic: '/ˈkɪtʃɪn/', example: 'The kitchen is downstairs.', exampleTranslation: 'La cuisine est en bas.' },
    { english: 'Bedroom', french: 'Chambre', phonetic: '/ˈbedruːm/', example: 'My bedroom is small but cozy.', exampleTranslation: 'Ma chambre est petite mais cozy.' },
    { english: 'Bathroom', french: 'Salle de bain', phonetic: '/ˈbæθruːm/', example: 'The bathroom has a big mirror.', exampleTranslation: 'La salle de bain a un grand miroir.' },
    { english: 'Living room', french: 'Salon', phonetic: '/ˈlɪvɪŋ ruːm/', example: 'We watch TV in the living room.', exampleTranslation: 'Nous regardons la télé dans le salon.' },
    { english: 'Garden', french: 'Jardin', phonetic: '/ˈɡɑːrdən/', example: 'There are flowers in the garden.', exampleTranslation: 'Il y a des fleurs dans le jardin.' },
  ],
  grammar: {
    title: 'Prépositions de lieu — Upstairs, Downstairs, Next to',
    explanation: 'Pour situer les pièces : "upstairs" (à l\'étage), "downstairs" (en bas). Autres prépositions utiles : "next to" (à côté de), "near" (près de), "opposite" (en face de), "above" (au-dessus de), "below" (en dessous de). Exemples : "The bedroom is upstairs, next to the bathroom."',
    examples: [
      { sentence: 'The kitchen is downstairs.', translation: 'La cuisine est en bas.', isCorrect: true },
      { sentence: 'The bedroom is next to the bathroom.', translation: 'La chambre est à côté de la salle de bain.', isCorrect: true },
      { sentence: 'The garden is upstairs.', translation: '', isCorrect: false },
      { sentence: 'The living room is near the kitchen.', translation: 'Le salon est près de la cuisine.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The garden is upstairs.', correct: 'The garden is outside. / The garden is downstairs.', explanation: 'Un jardin est à l\'extérieur, pas à l\'étage ! On dit "outside" ou "downstairs".' },
      { wrong: 'The bedroom is next the bathroom.', correct: 'The bedroom is next to the bathroom.', explanation: 'Il faut "next TO", pas juste "next".' },
    ],
  },
  conversation: [
    { speaker: 'Claire', role: 'A', text: 'Where is the bathroom in your house?', translation: 'Où est la salle de bain dans ta maison ?' },
    { speaker: 'Antoine', role: 'B', text: 'It\'s upstairs, next to my bedroom.', translation: 'Elle est à l\'étage, à côté de ma chambre.' },
    { speaker: 'Claire', role: 'A', text: 'And the kitchen? Is it near the living room?', translation: 'Et la cuisine ? Elle est près du salon ?' },
    { speaker: 'Antoine', role: 'B', text: 'Yes! The kitchen is downstairs, opposite the living room.', translation: 'Oui ! La cuisine est en bas, en face du salon.' },
    { speaker: 'Claire', role: 'A', text: 'Do you have a garden?', translation: 'As-tu un jardin ?' },
    { speaker: 'Antoine', role: 'B', text: 'Yes, the garden is behind the kitchen. It\'s beautiful in spring!', translation: 'Oui, le jardin est derrière la cuisine. Il est beau au printemps !' },
  ],
  conversationTitle: 'Les pièces de la maison',
  pronunciation: [
    { word: 'Kitchen', phonetic: '/ˈkɪtʃɪn/', meaning: 'Cuisine', tip: 'Le "ch" = "tch" : "kit-chinn". Pas "kitchen" à la française.' },
    { word: 'Bedroom', phonetic: '/ˈbedruːm/', meaning: 'Chambre', tip: 'Prononcez "béd-roum" — le "d" et le "r" se lient naturellement.' },
    { word: 'Bathroom', phonetic: '/ˈbæθruːm/', meaning: 'Salle de bain', tip: 'Le "th" est expiré : langue entre les dents. "Bath-roum". Pas "bad-room".' },
    { word: 'Garden', phonetic: '/ˈɡɑːrdən/', meaning: 'Jardin', tip: 'Le "ar" est long et ouvert : "gar-denn". Comme dans "gare" mais plus long.' },
  ],
}

export const A1_L32: LessonContent = {
  vocab: [
    { english: 'Sofa', french: 'Canapé', phonetic: '/ˈsoʊfə/', example: 'The sofa is very comfortable.', exampleTranslation: 'Le canapé est très confortable.' },
    { english: 'Bed', french: 'Lit', phonetic: '/bed/', example: 'The bed is in the bedroom.', exampleTranslation: 'Le lit est dans la chambre.' },
    { english: 'Fridge', french: 'Réfrigérateur', phonetic: '/frɪdʒ/', example: 'The food is in the fridge.', exampleTranslation: 'La nourriture est dans le frigo.' },
    { english: 'Television', french: 'Télévision', phonetic: '/ˈtelɪvɪʒən/', example: 'The television is in the living room.', exampleTranslation: 'La télévision est dans le salon.' },
    { english: 'Wardrobe', french: 'Armoire', phonetic: '/ˈwɔːrdroʊb/', example: 'My clothes are in the wardrobe.', exampleTranslation: 'Mes vêtements sont dans l\'armoire.' },
  ],
  grammar: {
    title: 'L\'ordre adjectif + nom — A big red sofa',
    explanation: 'En anglais, les adjectifs se placent AVANT le nom : "a big sofa" (un grand canapé), "a red bed" (un lit rouge). Avec plusieurs adjectifs, l\'ordre est : taille → couleur : "a big red sofa" (un grand canapé rouge). On ne met JAMAIS "and" entre les adjectifs avant un nom singulier.',
    examples: [
      { sentence: 'I have a big white fridge.', translation: 'J\'ai un grand frigo blanc.', isCorrect: true },
      { sentence: 'She has a red big wardrobe.', translation: '', isCorrect: false },
      { sentence: 'The small blue television is old.', translation: 'La petite télévision bleue est vieille.', isCorrect: true },
      { sentence: 'We need a comfortable new sofa.', translation: 'Nous avons besoin d\'un nouveau canapé confortable.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'A red big sofa', correct: 'A big red sofa', explanation: 'L\'ordre est taille AVANT couleur : "big" (taille) vient avant "red" (couleur).' },
      { wrong: 'A big and red sofa', correct: 'A big red sofa', explanation: 'Pas de "and" entre les adjectifs avant un nom singulier. On dit "a big red sofa".' },
    ],
  },
  conversation: [
    { speaker: 'Lucie', role: 'A', text: 'I love your living room! That big blue sofa is beautiful.', translation: 'J\'adore ton salon ! Ce grand canapé bleu est magnifique.' },
    { speaker: 'Benoît', role: 'B', text: 'Thank you! We also have a new white wardrobe in the bedroom.', translation: 'Merci ! Nous avons aussi une nouvelle armoire blanche dans la chambre.' },
    { speaker: 'Lucie', role: 'A', text: 'Is your bed comfortable?', translation: 'Ton lit est confortable ?' },
    { speaker: 'Benoît', role: 'B', text: 'Very! It\'s a large brown bed. I sleep so well.', translation: 'Très ! C\'est un grand lit marron. Je dors très bien.' },
    { speaker: 'Lucie', role: 'A', text: 'I need a small black television for my kitchen.', translation: 'J\'ai besoin d\'une petite télévision noire pour ma cuisine.' },
    { speaker: 'Benoît', role: 'B', text: 'My old television is small and black! You can have it.', translation: 'Ma vieille télé est petite et noire ! Tu peux la prendre.' },
  ],
  conversationTitle: 'Le canapé et les meubles',
  pronunciation: [
    { word: 'Sofa', phonetic: '/ˈsoʊfə/', meaning: 'Canapé', tip: 'Le "o" est long : "so-fa". Le "a" final est très réduit. Pas "so-fà".' },
    { word: 'Fridge', phonetic: '/frɪdʒ/', meaning: 'Réfrigérateur', tip: 'Prononcez "fridj" — le "i" est court et le "dge" = "dj".' },
    { word: 'Television', phonetic: '/ˈtelɪvɪʒən/', meaning: 'Télévision', tip: 'L\'accent est sur "tel" : "TE-li-vi-jonn". Le "sion" = "jonn".' },
    { word: 'Wardrobe', phonetic: '/ˈwɔːrdroʊb/', meaning: 'Armoire', tip: 'Prononcez "ouor-drob" — le "w" arrondit les lèvres et le "e" final est muet.' },
  ],
}

export const A1_L33: LessonContent = {
  vocab: [
    { english: 'Some', french: 'Du/De la/Des', phonetic: '/sʌm/', example: 'There are some chairs in the kitchen.', exampleTranslation: 'Il y a des chaises dans la cuisine.' },
    { english: 'Any', french: 'Du/De la (négatif/question)', phonetic: '/ˈeni/', example: 'There aren\'t any books on the table.', exampleTranslation: 'Il n\'y a pas de livres sur la table.' },
    { english: 'Many', french: 'Beaucoup de (dénombrable)', phonetic: '/ˈmeni/', example: 'There are many rooms in this house.', exampleTranslation: 'Il y a beaucoup de pièces dans cette maison.' },
    { english: 'Much', french: 'Beaucoup de (indénombrable)', phonetic: '/mʌtʃ/', example: 'There isn\'t much space in the bedroom.', exampleTranslation: 'Il n\'y a pas beaucoup d\'espace dans la chambre.' },
  ],
  grammar: {
    title: 'There is / There are — Singulier, pluriel et quantités',
    explanation: 'On utilise "there is" avec un nom singulier ou indénombrable : "There is a sofa" / "There is some water". On utilise "there are" avec un nom pluriel : "There are three bedrooms". Négatif : "There isn\'t a sofa" / "There aren\'t any chairs". Question : "Is there a kitchen?" / "Are there any windows?"',
    examples: [
      { sentence: 'There is a big fridge in the kitchen.', translation: 'Il y a un grand frigo dans la cuisine.', isCorrect: true },
      { sentence: 'There are two sofa in the living room.', translation: '', isCorrect: false },
      { sentence: 'Is there any milk in the fridge?', translation: 'Y a-t-il du lait dans le frigo ?', isCorrect: true },
      { sentence: 'There isn\'t much space in the bathroom.', translation: 'Il n\'y a pas beaucoup d\'espace dans la salle de bain.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'There are two sofa.', correct: 'There are two sofas.', explanation: 'Avec "there are", le nom doit être au pluriel : "sofas", pas "sofa".' },
      { wrong: 'There is many rooms.', correct: 'There are many rooms.', explanation: '"Rooms" est pluriel → on utilise "there are", pas "there is".' },
    ],
  },
  conversation: [
    { speaker: 'Nadia', role: 'A', text: 'Is there a garden in your new apartment?', translation: 'Y a-t-il un jardin dans ton nouvel appartement ?' },
    { speaker: 'Romain', role: 'B', text: 'No, there isn\'t a garden. But there are some plants on the balcony.', translation: 'Non, il n\'y a pas de jardin. Mais il y a des plantes sur le balcon.' },
    { speaker: 'Nadia', role: 'A', text: 'How many rooms are there?', translation: 'Combien de pièces y a-t-il ?' },
    { speaker: 'Romain', role: 'B', text: 'There are three rooms. There isn\'t much space, but it\'s cozy.', translation: 'Il y a trois pièces. Il n\'y a pas beaucoup d\'espace, mais c\'est cozy.' },
    { speaker: 'Nadia', role: 'A', text: 'Are there any bookshelves?', translation: 'Y a-t-il des étagères ?' },
    { speaker: 'Romain', role: 'B', text: 'Yes, there are many bookshelves! I have a lot of books.', translation: 'Oui, il y a beaucoup d\'étagères ! J\'ai beaucoup de livres.' },
  ],
  conversationTitle: 'Y a-t-il un jardin ?',
  pronunciation: [
    { word: 'Some', phonetic: '/sʌm/', meaning: 'Du/De la/Des', tip: 'Le "o" est ouvert : "seum". Très différent du mot français "somme".' },
    { word: 'Any', phonetic: '/ˈeni/', meaning: 'Du/De la (nég./quest.)', tip: 'Prononcez "é-ni" — le "a" est comme "é" et non "a".' },
    { word: 'Many', phonetic: '/ˈmeni/', meaning: 'Beaucoup de', tip: 'Prononcez "mé-ni" — le "a" se prononce "é" et le "y" final = "i" court.' },
    { word: 'Much', phonetic: '/mʌtʃ/', meaning: 'Beaucoup de (indén.)', tip: 'Le "u" est ouvert : "meutch". Le "ch" final = "tch" français.' },
  ],
}

export const A1_L34: LessonContent = {
  vocab: [
    { english: 'Apartment', french: 'Appartement', phonetic: '/əˈpɑːrtmənt/', example: 'I live in a small apartment.', exampleTranslation: 'J\'habite dans un petit appartement.' },
    { english: 'Rent', french: 'Loyer', phonetic: '/rent/', example: 'The rent is eight hundred euros.', exampleTranslation: 'Le loyer est de huit cents euros.' },
    { english: 'Neighbor', french: 'Voisin(e)', phonetic: '/ˈneɪbər/', example: 'My neighbor is very friendly.', exampleTranslation: 'Mon voisin est très sympa.' },
    { english: 'Balcony', french: 'Balcon', phonetic: '/ˈbælkəni/', example: 'There is a balcony with a nice view.', exampleTranslation: 'Il y a un balcon avec une belle vue.' },
  ],
  grammar: {
    title: 'Décrire son logement — Adjectifs et possessifs',
    explanation: 'Pour décrire votre maison ou appartement, utilisez : "My house is big/small/old/new/beautiful/comfortable". "I live in a + adjective + apartment/house" : "I live in a small apartment". "It has + nombre + rooms" : "It has three rooms". "There is/are..." pour décrire ce qu\'il y a.',
    examples: [
      { sentence: 'I live in a beautiful old apartment.', translation: 'J\'habite dans un bel vieux appartement.', isCorrect: true },
      { sentence: 'It has three bedrooms and a big kitchen.', translation: 'Il a trois chambres et une grande cuisine.', isCorrect: true },
      { sentence: 'My apartment has a balcon.', translation: '', isCorrect: false },
      { sentence: 'The rent is very expensive.', translation: 'Le loyer est très cher.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'My apartment has a balcon.', correct: 'My apartment has a balcony.', explanation: 'Le mot anglais est "balcony", pas "balcon" (mot français).' },
      { wrong: 'I live in apartment small.', correct: 'I live in a small apartment.', explanation: 'L\'adjectif se place AVANT le nom : "a small apartment", pas "apartment small".' },
    ],
  },
  conversation: [
    { speaker: 'Alice', role: 'A', text: 'Do you live in a house or an apartment?', translation: 'Habites-tu dans une maison ou un appartement ?' },
    { speaker: 'François', role: 'B', text: 'I live in a small apartment. It has two rooms and a balcony.', translation: 'J\'habite dans un petit appartement. Il a deux pièces et un balcon.' },
    { speaker: 'Alice', role: 'A', text: 'That sounds nice! Is the rent expensive?', translation: 'Ça a l\'air sympa ! Le loyer est cher ?' },
    { speaker: 'François', role: 'B', text: 'The rent is seven hundred euros. My neighbor is very friendly though!', translation: 'Le loyer est de sept cents euros. Mais mon voisin est très sympa !' },
    { speaker: 'Alice', role: 'A', text: 'That\'s important! My apartment has a balcony too. I love it.', translation: 'C\'est important ! Mon appartement a aussi un balcon. Je l\'adore.' },
    { speaker: 'François', role: 'B', text: 'We\'re lucky! A balcony makes a small apartment feel bigger.', translation: 'On a de la chance ! Un balcon fait paraître un petit appartement plus grand.' },
  ],
  conversationTitle: 'Maison ou appartement ?',
  pronunciation: [
    { word: 'Apartment', phonetic: '/əˈpɑːrtmənt/', meaning: 'Appartement', tip: 'L\'accent est sur "par" : "e-PAR-ment". Le "a" de "par" est long et ouvert.' },
    { word: 'Rent', phonetic: '/rent/', meaning: 'Loyer', tip: 'Prononcez "rent" — le "e" est bref et ouvert. Pas "rant".' },
    { word: 'Neighbor', phonetic: '/ˈneɪbər/', meaning: 'Voisin(e)', tip: 'Le "ei" = "éi" : "néi-ber". Le "gh" est MUET !' },
    { word: 'Balcony', phonetic: '/ˈbælkəni/', meaning: 'Balcon', tip: 'L\'accent sur "BAL" : "BAL-ke-ni". Le "a" est ouvert comme dans "cat".' },
  ],
}

export const A1_L35: LessonContent = {
  vocab: [
    { english: 'Cupboard', french: 'Placard', phonetic: '/ˈkʌbərd/', example: 'The cups are in the cupboard.', exampleTranslation: 'Les tasses sont dans le placard.' },
    { english: 'Cushion', french: 'Coussin', phonetic: '/ˈkʊʃən/', example: 'The cushion is on the sofa.', exampleTranslation: 'Le coussin est sur le canapé.' },
    { english: 'Drawer', french: 'Tiroir', phonetic: '/drɔːr/', example: 'The keys are in the drawer.', exampleTranslation: 'Les clés sont dans le tiroir.' },
    { english: 'Ceiling', french: 'Plafond', phonetic: '/ˈsiːlɪŋ/', example: 'The ceiling is very high.', exampleTranslation: 'Le plafond est très haut.' },
  ],
  grammar: {
    title: 'Les noms composés — Living room, Coffee table',
    explanation: 'Les noms composés combinent deux mots pour former un nouveau nom. Le premier mot décrit ou modifie le deuxième : "living room" (salle de séjour), "coffee table" (table basse), "bedroom" (chambre), "bathroom" (salle de bain). L\'accent tonique est généralement sur le PREMIER mot : "LIVING room", "COFFEE table".',
    examples: [
      { sentence: 'The coffee table is in the living room.', translation: 'La table basse est dans le salon.', isCorrect: true },
      { sentence: 'The bedroom light is broken.', translation: 'La lumière de la chambre est cassée.', isCorrect: true },
      { sentence: 'The room bedroom is big.', translation: '', isCorrect: false },
      { sentence: 'There is a bookshelf in the bedroom.', translation: 'Il y a une étagère dans la chambre.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The room bedroom', correct: 'The bedroom', explanation: '"Bedroom" est déjà un nom composé. On ne dit pas "room bedroom".' },
      { wrong: 'Living ROOM', correct: 'LIVING room', explanation: 'Dans les noms composés, l\'accent tonique est sur le PREMIER mot : "LIVING room".' },
    ],
  },
  conversation: [
    { speaker: 'Sophie', role: 'A', text: 'Where are the glasses? Are they in the cupboard?', translation: 'Où sont les verres ? Sont-ils dans le placard ?' },
    { speaker: 'Marc', role: 'B', text: 'Yes, they\'re in the kitchen cupboard, next to the plates.', translation: 'Oui, ils sont dans le placard de la cuisine, à côté des assiettes.' },
    { speaker: 'Sophie', role: 'A', text: 'I love the cushions on your sofa. Where did you buy them?', translation: 'J\'adore les coussins sur ton canapé. Où les as-tu achetés ?' },
    { speaker: 'Marc', role: 'B', text: 'Thanks! My mother made them. Look up — the ceiling has beautiful moldings.', translation: 'Merci ! Ma mère les a faits. Regarde en haut — le plafond a de belles moulures.' },
    { speaker: 'Sophie', role: 'A', text: 'Wow! Can you open the drawer? I need a pen.', translation: 'Waouh ! Peux-tu ouvrir le tiroir ? J\'ai besoin d\'un stylo.' },
    { speaker: 'Marc', role: 'B', text: 'Sure, it\'s the top drawer of the coffee table.', translation: 'Bien sûr, c\'est le tiroir du haut de la table basse.' },
  ],
  conversationTitle: 'Dans la cuisine',
  pronunciation: [
    { word: 'Cupboard', phonetic: '/ˈkʌbərd/', meaning: 'Placard', tip: 'On prononce "keu-berd" — le "p" et le "oa" disparaissent ! Pas "cup-board".' },
    { word: 'Cushion', phonetic: '/ˈkʊʃən/', meaning: 'Coussin', tip: 'Prononcez "kouch-enn" — le "sh" est comme le "ch" français.' },
    { word: 'Drawer', phonetic: '/drɔːr/', meaning: 'Tiroir', tip: 'Prononcez "dro-r" — le "aw" est un "o" long ouvert. Pas "draw-er".' },
    { word: 'Ceiling', phonetic: '/ˈsiːlɪŋ/', meaning: 'Plafond', tip: 'Le "ei" = "ii" long : "sii-ling". Le "ng" final : langue contre le palais.' },
  ],
}

// ═══════════════════════════════════════════════════════════════════════════════
// UNIT 8: SHOPPING (a1-l36 to a1-l40)
// ═══════════════════════════════════════════════════════════════════════════════

export const A1_L36: LessonContent = {
  vocab: [
    { english: 'Buy', french: 'Acheter', phonetic: '/baɪ/', example: 'I want to buy a new shirt.', exampleTranslation: 'Je veux acheter une nouvelle chemise.' },
    { english: 'Sell', french: 'Vendre', phonetic: '/sel/', example: 'They sell fresh bread here.', exampleTranslation: 'Ils vendent du pain frais ici.' },
    { english: 'Price', french: 'Prix', phonetic: '/praɪs/', example: 'What is the price of this bag?', exampleTranslation: 'Quel est le prix de ce sac ?' },
    { english: 'Cheap', french: 'Bon marché', phonetic: '/tʃiːp/', example: 'This market is very cheap.', exampleTranslation: 'Ce marché est très bon marché.' },
    { english: 'Expensive', french: 'Cher', phonetic: '/ɪkˈspensɪv/', example: 'The hotel is too expensive.', exampleTranslation: 'L\'hôtel est trop cher.' },
  ],
  grammar: {
    title: 'This / That / These / Those — Au magasin',
    explanation: 'Au magasin, on utilise les démonstratifs pour montrer les objets : "This" (ceci, proche) : "This shirt is nice." "That" (cela, éloigné) : "That bag is expensive." "These" (ces, proches, pluriel) : "These shoes are cheap." "Those" (ces, éloignés, pluriel) : "Those jackets are beautiful."',
    examples: [
      { sentence: 'This shirt is too expensive.', translation: 'Cette chemise est trop chère.', isCorrect: true },
      { sentence: 'That shoes are cheap.', translation: '', isCorrect: false },
      { sentence: 'These prices are very good.', translation: 'Ces prix sont très bons.', isCorrect: true },
      { sentence: 'I want to buy those books.', translation: 'Je veux acheter ces livres.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'That shoes are cheap.', correct: 'Those shoes are cheap.', explanation: '"Shoes" est pluriel, on utilise "those" au lieu de "that".' },
      { wrong: 'This is a nice shoes.', correct: 'These are nice shoes.', explanation: '"Shoes" est pluriel → "these are", pas "this is".' },
    ],
  },
  conversation: [
    { speaker: 'Inès', role: 'A', text: 'Look at this dress! It\'s beautiful. What\'s the price?', translation: 'Regarde cette robe ! Elle est magnifique. Quel est le prix ?' },
    { speaker: 'Léa', role: 'B', text: 'It\'s sixty euros. That\'s expensive for me.', translation: 'C\'est soixante euros. C\'est cher pour moi.' },
    { speaker: 'Inès', role: 'A', text: 'What about those skirts? They sell them for twenty euros.', translation: 'Et ces jupes ? Elles les vendent vingt euros.' },
    { speaker: 'Léa', role: 'B', text: 'Twenty euros is cheap! I want to buy one.', translation: 'Vingt euros, c\'est bon marché ! Je veux en acheter une.' },
    { speaker: 'Inès', role: 'A', text: 'These skirts are really nice. Where do they sell them?', translation: 'Ces jupes sont vraiment sympa. Où les vendent-ils ?' },
    { speaker: 'Léa', role: 'B', text: 'At the market next to the bakery. Everything is cheap there!', translation: 'Au marché à côté de la boulangerie. Tout y est bon marché !' },
  ],
  conversationTitle: 'Les prix et les achats',
  pronunciation: [
    { word: 'Buy', phonetic: '/baɪ/', meaning: 'Acheter', tip: 'Le "u" = "aï" : "baï". Ne dites pas "bou-ill".' },
    { word: 'Sell', phonetic: '/sel/', meaning: 'Vendre', tip: 'Le "e" est ouvert et bref : "sèl". Pas "sil".' },
    { word: 'Price', phonetic: '/praɪs/', meaning: 'Prix', tip: 'Le "i" est long : "praïce". Ne confondez pas avec "prize" (récompense) — même son en pratique.' },
    { word: 'Cheap', phonetic: '/tʃiːp/', meaning: 'Bon marché', tip: 'Le "ch" = "tch" et le "ea" = "ii" long : "tchiiip".' },
  ],
}

export const A1_L37: LessonContent = {
  vocab: [
    { english: 'Cost', french: 'Coûter', phonetic: '/kɒst/', example: 'How much does this cost?', exampleTranslation: 'Combien ça coûte ?' },
    { english: 'Discount', french: 'Réduction', phonetic: '/ˈdɪskaʊnt/', example: 'There is a discount on shoes today.', exampleTranslation: 'Il y a une réduction sur les chaussures aujourd\'hui.' },
    { english: 'Receipt', french: 'Reçu', phonetic: '/rɪˈsiːt/', example: 'Can I have the receipt, please?', exampleTranslation: 'Puis-je avoir le reçu, s\'il vous plaît ?' },
    { english: 'Cash', french: 'Espèces', phonetic: '/kæʃ/', example: 'Do you pay by card or cash?', exampleTranslation: 'Payez-vous par carte ou en espèces ?' },
  ],
  grammar: {
    title: 'How much / How many — Questions de prix et quantité',
    explanation: '"How much" + singulier/indénombrable : "How much is this?" (Combien ça coûte ?), "How much money?" (Combien d\'argent ?). "How many" + pluriel : "How many apples?" (Combien de pommes ?), "How many shirts do you want?" (Combien de chemises veux-tu ?). Pour les prix : "How much is...?" ou "How much does... cost?"',
    examples: [
      { sentence: 'How much is this shirt?', translation: 'Combien coûte cette chemise ?', isCorrect: true },
      { sentence: 'How many do this cost?', translation: '', isCorrect: false },
      { sentence: 'How many bags do you need?', translation: 'De combien de sacs as-tu besoin ?', isCorrect: true },
      { sentence: 'How much does it cost?', translation: 'Combien ça coûte ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'How many does this cost?', correct: 'How much does this cost?', explanation: 'Pour les prix, on utilise "how much" (l\'argent est indénombrable), pas "how many".' },
      { wrong: 'How much shirts do you want?', correct: 'How many shirts do you want?', explanation: '"Shirts" est dénombrable → on utilise "how many", pas "how much".' },
    ],
  },
  conversation: [
    { speaker: 'Julie', role: 'A', text: 'Excuse me, how much does this cost?', translation: 'Excusez-moi, combien ça coûte ?' },
    { speaker: 'Clerk', role: 'B', text: 'It\'s forty-five euros. But there\'s a twenty percent discount today!', translation: 'C\'est quarante-cinq euros. Mais il y a vingt pour cent de réduction aujourd\'hui !' },
    { speaker: 'Julie', role: 'A', text: 'That\'s great! How many colors does it come in?', translation: 'Super ! En combien de couleurs est-il disponible ?' },
    { speaker: 'Clerk', role: 'B', text: 'Three colors. How many would you like?', translation: 'Trois couleurs. Combien en voulez-vous ?' },
    { speaker: 'Julie', role: 'A', text: 'Just one, please. I\'ll pay cash. Can I have the receipt?', translation: 'Juste une, s\'il vous plaît. Je paie en espèces. Puis-je avoir le reçu ?' },
    { speaker: 'Clerk', role: 'B', text: 'Of course! Here is your receipt. Thank you for your purchase!', translation: 'Bien sûr ! Voici votre reçu. Merci pour votre achat !' },
  ],
  conversationTitle: 'Combien ça coûte ?',
  pronunciation: [
    { word: 'Cost', phonetic: '/kɒst/', meaning: 'Coûter', tip: 'Le "o" est ouvert comme dans "bon" : "kost". Pas "koust".' },
    { word: 'Discount', phonetic: '/ˈdɪskaʊnt/', meaning: 'Réduction', tip: 'L\'accent sur "DIS" : "DIS-kaount". Le "ou" = "aou" comme dans "house".' },
    { word: 'Receipt', phonetic: '/rɪˈsiːt/', meaning: 'Reçu', tip: 'Le "p" est MUET : "ri-siit". Ne dites PAS "re-seep" !' },
    { word: 'Cash', phonetic: '/kæʃ/', meaning: 'Espèces', tip: 'Le "a" est ouvert comme dans "cat" : "kaech". Le "sh" = "ch" français.' },
  ],
}

export const A1_L38: LessonContent = {
  vocab: [
    { english: 'Would like', french: 'Voudrais', phonetic: '/wʊd laɪk/', example: 'I would like a blue shirt, please.', exampleTranslation: 'Je voudrais une chemise bleue, s\'il vous plaît.' },
    { english: 'Could', french: 'Pourrais', phonetic: '/kʊd/', example: 'Could I try this on?', exampleTranslation: 'Pourrais-je essayer ceci ?' },
    { english: 'May', french: 'Puis-je', phonetic: '/meɪ/', example: 'May I see the menu?', exampleTranslation: 'Puis-je voir le menu ?' },
    { english: 'Please', french: 'S\'il vous plaît', phonetic: '/pliːz/', example: 'A glass of water, please.', exampleTranslation: 'Un verre d\'eau, s\'il vous plaît.' },
  ],
  grammar: {
    title: 'Les demandes polies — Can I, Could I, I\'d like',
    explanation: 'Pour faire une demande polie au magasin : "Can I have...?" (Puis-je avoir...?) — poli. "Could I have...?" (Pourrais-je avoir...?) — PLUS poli. "I would like..." (Je voudrais...) — poli et courant. "May I...?" (Puis-je...?) — très formel. On ajoute toujours "please" à la fin !',
    examples: [
      { sentence: 'Could I have a smaller size, please?', translation: 'Pourrais-je avoir une taille plus petite, s\'il vous plaît ?', isCorrect: true },
      { sentence: 'I want a coffee.', translation: '', isCorrect: false },
      { sentence: 'I would like to try this on.', translation: 'Je voudrais essayer ceci.', isCorrect: true },
      { sentence: 'May I pay by card?', translation: 'Puis-je payer par carte ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I want a coffee.', correct: 'I would like a coffee, please.', explanation: '"I want" est trop direct et impoli. Utilisez "I would like" + "please".' },
      { wrong: 'Can I to try this on?', correct: 'Can I try this on?', explanation: 'Après "can/could/may", on utilise le verbe de base SANS "to".' },
    ],
  },
  conversation: [
    { speaker: 'Nadia', role: 'A', text: 'Good morning! I would like to buy a winter jacket.', translation: 'Bonjour ! Je voudrais acheter une veste d\'hiver.' },
    { speaker: 'Shop assistant', role: 'B', text: 'Of course! Could I show you our new collection?', translation: 'Bien sûr ! Pourrais-je vous montrer notre nouvelle collection ?' },
    { speaker: 'Nadia', role: 'A', text: 'Yes, please! May I try this red one on?', translation: 'Oui, s\'il vous plaît ! Puis-je essayer celle rouge ?' },
    { speaker: 'Shop assistant', role: 'B', text: 'Certainly! The fitting room is over there. What size would you like?', translation: 'Certainement ! La cabine d\'essayage est par là. Quelle taille voudriez-vous ?' },
    { speaker: 'Nadia', role: 'A', text: 'Could I have a medium, please?', translation: 'Pourrais-je avoir un M, s\'il vous plaît ?' },
    { speaker: 'Shop assistant', role: 'B', text: 'Here you go! I\'ll be right here if you need anything.', translation: 'Voilà ! Je serai juste là si vous avez besoin de quoi que ce soit.' },
  ],
  conversationTitle: 'Au magasin de vêtements',
  pronunciation: [
    { word: 'Would', phonetic: '/wʊd/', meaning: 'Voudrais (auxiliaire)', tip: 'Prononcez "ououd" — le "l" est MUET ! Pas "oul-d".' },
    { word: 'Could', phonetic: '/kʊd/', meaning: 'Pourrais', tip: 'Prononcez "koud" — le "l" est MUET. Même voyelle que "book".' },
    { word: 'May', phonetic: '/meɪ/', meaning: 'Puis-je', tip: 'Le "ay" = "éi" : "méi". Comme le mois de "mai" français mais plus long.' },
    { word: 'Please', phonetic: '/pliːz/', meaning: 'S\'il vous plaît', tip: 'Le "ea" = "ii" long : "pliiz". Le "s" final est sonore : "z".' },
  ],
}

export const A1_L39: LessonContent = {
  vocab: [
    { english: 'Red', french: 'Rouge', phonetic: '/red/', example: 'I like the red dress.', exampleTranslation: 'J\'aime la robe rouge.' },
    { english: 'Blue', french: 'Bleu(e)', phonetic: '/bluː/', example: 'The blue shirt is nice.', exampleTranslation: 'La chemise bleue est sympa.' },
    { english: 'Large', french: 'Grand(e)', phonetic: '/lɑːrdʒ/', example: 'Do you have this in large?', exampleTranslation: 'Avez-vous ceci en grand ?' },
    { english: 'Small', french: 'Petit(e)', phonetic: '/smɔːl/', example: 'This is too small for me.', exampleTranslation: 'C\'est trop petit pour moi.' },
    { english: 'Medium', french: 'Moyen(ne)', phonetic: '/ˈmiːdiəm/', example: 'I wear a medium size.', exampleTranslation: 'Je porte du moyen.' },
  ],
  grammar: {
    title: 'Décrire un article — Couleur et taille ensemble',
    explanation: 'Quand on décrit un article au magasin, on met la taille AVANT la couleur : "a large red shirt" (une grande chemise rouge), "a small blue bag" (un petit sac bleu). L\'ordre : taille → couleur → nom. Pour demander une taille : "Do you have this in a medium/large/small?" ou "What size is this?"',
    examples: [
      { sentence: 'I want a small blue jacket.', translation: 'Je veux une petite veste bleue.', isCorrect: true },
      { sentence: 'She wears a red large coat.', translation: '', isCorrect: false },
      { sentence: 'Do you have this in a large size?', translation: 'Avez-vous ceci en grande taille ?', isCorrect: true },
      { sentence: 'This medium green sweater is perfect.', translation: 'Ce pull moyen vert est parfait.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'A red large shirt', correct: 'A large red shirt', explanation: 'Taille AVANT couleur : "large" (taille) vient avant "red" (couleur).' },
      { wrong: 'A size medium', correct: 'A medium', explanation: 'On dit simplement "a medium", pas "a size medium" (sauf pour préciser "a medium size").' },
    ],
  },
  conversation: [
    { speaker: 'Paul', role: 'A', text: 'I\'m looking for a large blue sweater. Do you have one?', translation: 'Je cherche un grand pull bleu. En avez-vous un ?' },
    { speaker: 'Shop assistant', role: 'B', text: 'Let me check... Yes! Here is a large blue sweater.', translation: 'Laissez-moi vérifier... Oui ! Voici un grand pull bleu.' },
    { speaker: 'Paul', role: 'A', text: 'It\'s nice! But do you also have it in small and red?', translation: 'Il est sympa ! Mais l\'avez-vous aussi en petit et rouge ?' },
    { speaker: 'Shop assistant', role: 'B', text: 'We have a small red sweater, yes. But only in medium for the green one.', translation: 'Nous avons un petit pull rouge, oui. Mais le vert est seulement en moyen.' },
    { speaker: 'Paul', role: 'A', text: 'I\'ll take the small red one. How much is it?', translation: 'Je prends le petit rouge. Combien coûte-t-il ?' },
    { speaker: 'Shop assistant', role: 'B', text: 'It\'s thirty-five euros. That\'s a great price for a wool sweater!', translation: 'C\'est trente-cinq euros. C\'est un bon prix pour un pull en laine !' },
  ],
  conversationTitle: 'Tailles et couleurs',
  pronunciation: [
    { word: 'Red', phonetic: '/red/', meaning: 'Rouge', tip: 'Le "e" est ouvert comme dans "bed" : "rèd". Pas "rid".' },
    { word: 'Blue', phonetic: '/bluː/', meaning: 'Bleu(e)', tip: 'Le "ue" = "ou" long : "blouuu". Ne dites pas "bliou".' },
    { word: 'Large', phonetic: '/lɑːrdʒ/', meaning: 'Grand(e)', tip: 'Le "ar" est long : "lardj". Le "ge" final = "dj" doux.' },
    { word: 'Small', phonetic: '/smɔːl/', meaning: 'Petit(e)', tip: 'Le "a" = "o" long ouvert : "smol". Pas "smal".' },
  ],
}

export const A1_L40: LessonContent = {
  vocab: [
    { english: 'Bargain', french: 'Bonne affaire', phonetic: '/ˈbɑːrɡɪn/', example: 'This jacket is a real bargain!', exampleTranslation: 'Cette veste est une vraie bonne affaire !' },
    { english: 'Wallet', french: 'Portefeuille', phonetic: '/ˈwɒlɪt/', example: 'I keep my money in my wallet.', exampleTranslation: 'Je garde mon argent dans mon portefeuille.' },
    { english: 'Change', french: 'Monnaie', phonetic: '/tʃeɪndʒ/', example: 'Here is your change.', exampleTranslation: 'Voici votre monnaie.' },
    { english: 'Customer', french: 'Client(e)', phonetic: '/ˈkʌstəmər/', example: 'The customer is always right.', exampleTranslation: 'Le client a toujours raison.' },
  ],
  grammar: {
    title: 'Comparer les prix — Cheaper, More expensive',
    explanation: 'Pour comparer les prix : adjectifs courts (1 syllabe) → + -er + than : "cheap → cheaper than" (moins cher que), "small → smaller than" (plus petit que). Adjectifs longs (2+ syllabes) → more + adjectif + than : "expensive → more expensive than" (plus cher que). "Too" = trop : "too expensive" (trop cher). "Enough" = assez : "cheap enough" (assez bon marché).',
    examples: [
      { sentence: 'This shirt is cheaper than that one.', translation: 'Cette chemise est moins chère que celle-là.', isCorrect: true },
      { sentence: 'This bag is more cheaper.', translation: '', isCorrect: false },
      { sentence: 'The red jacket is more expensive than the blue one.', translation: 'La veste rouge est plus chère que la bleue.', isCorrect: true },
      { sentence: 'It\'s too expensive for me.', translation: 'C\'est trop cher pour moi.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'More cheaper', correct: 'Cheaper', explanation: '"Cheap" est un adjectif court → on ajoute -er : "cheaper". Pas "more cheaper".' },
      { wrong: 'Expensiver', correct: 'More expensive', explanation: '"Expensive" est un adjectif long → on utilise "more" : "more expensive". Pas "expensiver".' },
    ],
  },
  conversation: [
    { speaker: 'Marie', role: 'A', text: 'Look at these wallets! The black one is cheaper than the brown one.', translation: 'Regarde ces portefeuilles ! Le noir est moins cher que le marron.' },
    { speaker: 'Julien', role: 'B', text: 'You\'re right! But the brown one is nicer. Is it a bargain?', translation: 'Tu as raison ! Mais le marron est plus joli. C\'est une bonne affaire ?' },
    { speaker: 'Marie', role: 'A', text: 'Yes! It\'s twenty euros. The black one is fifteen euros.', translation: 'Oui ! Il est à vingt euros. Le noir est à quinze euros.' },
    { speaker: 'Julien', role: 'B', text: 'Both are cheap enough. Let me get my wallet from my bag.', translation: 'Les deux sont assez bon marché. Laisse-moi sortir mon portefeuille de mon sac.' },
    { speaker: 'Marie', role: 'A', text: 'Good idea! The customer next to us is buying three wallets!', translation: 'Bonne idée ! Le client à côté de nous achète trois portefeuilles !' },
    { speaker: 'Julien', role: 'B', text: 'Ha! Don\'t forget your change at the counter!', translation: 'Ha ! N\'oublie pas ta monnaie au comptoir !' },
  ],
  conversationTitle: 'Moins cher ou plus joli ?',
  pronunciation: [
    { word: 'Bargain', phonetic: '/ˈbɑːrɡɪn/', meaning: 'Bonne affaire', tip: 'L\'accent sur "BAR" : "BAR-ginn". Le "ai" ne se prononce PAS "é" mais "i" court.' },
    { word: 'Wallet', phonetic: '/ˈwɒlɪt/', meaning: 'Portefeuille', tip: 'Le "w" : arrondissez les lèvres. "Ool-lit". Le "a" est ouvert comme dans "bon".' },
    { word: 'Change', phonetic: '/tʃeɪndʒ/', meaning: 'Monnaie', tip: 'Le "ch" = "tch" et le "ge" = "dj" : "tchéindj". Comme "échange" sans le premier "é".' },
    { word: 'Customer', phonetic: '/ˈkʌstəmər/', meaning: 'Client(e)', tip: 'L\'accent sur "CUS" : "KEUS-te-mer". Le "u" est ouvert comme dans "bus".' },
  ],
}

// ─── LESSON CONTENT MAP (by lesson ID) ────────────────────────────────────────

const LESSON_CONTENT_MAP: Record<string, LessonContent> = {
  // A1 Beginner — Unit 1: Greetings & Introductions
  'a1-l1': A1_L1,
  'a1-l2': A1_L2,
  'a1-l3': A1_L3,
  'a1-l4': A1_L4,
  'a1-l5': A1_L5,
  // A1 Beginner — Unit 2: Numbers & Counting
  'a1-l6': A1_L6,
  'a1-l7': A1_L7,
  'a1-l8': A1_L8,
  'a1-l9': A1_L9,
  'a1-l10': A1_L10,
  // A1 Beginner — Unit 3: Everyday Objects
  'a1-l11': A1_L11,
  'a1-l12': A1_L12,
  'a1-l13': A1_L13,
  'a1-l14': A1_L14,
  'a1-l15': A1_L15,
  // A1 Beginner — Unit 4: Food & Drinks
  'a1-l16': A1_L16,
  'a1-l17': A1_L17,
  'a1-l18': A1_L18,
  'a1-l19': A1_L19,
  'a1-l20': A1_L20,
  // A1 Beginner — Unit 5: Family & Relationships
  'a1-l21': A1_L21,
  'a1-l22': A1_L22,
  'a1-l23': A1_L23,
  'a1-l24': A1_L24,
  'a1-l25': A1_L25,
  // A1 Beginner — Unit 6: Daily Routine
  'a1-l26': A1_L26,
  'a1-l27': A1_L27,
  'a1-l28': A1_L28,
  'a1-l29': A1_L29,
  'a1-l30': A1_L30,
  // A1 Beginner — Unit 7: Around the House
  'a1-l31': A1_L31,
  'a1-l32': A1_L32,
  'a1-l33': A1_L33,
  'a1-l34': A1_L34,
  'a1-l35': A1_L35,
  // A1 Beginner — Unit 8: At the Store
  'a1-l36': A1_L36,
  'a1-l37': A1_L37,
  'a1-l38': A1_L38,
  'a1-l39': A1_L39,
  'a1-l40': A1_L40,
  // A2 Elementary — Units 1-5
  'a2-l1': A2_L1,
  'a2-l2': A2_L2,
  'a2-l3': A2_L3,
  'a2-l4': A2_L4,
  'a2-l5': A2_L5,
  'a2-l6': A2_L6,
  'a2-l7': A2_L7,
  'a2-l8': A2_L8,
  'a2-l9': A2_L9,
  'a2-l10': A2_L10,
  'a2-l11': A2_L11,
  'a2-l12': A2_L12,
  'a2-l13': A2_L13,
  'a2-l14': A2_L14,
  'a2-l15': A2_L15,
  'a2-l16': A2_L16,
  'a2-l17': A2_L17,
  'a2-l18': A2_L18,
  'a2-l19': A2_L19,
  'a2-l20': A2_L20,
  'a2-l21': A2_L21,
  'a2-l22': A2_L22,
  'a2-l23': A2_L23,
  'a2-l24': A2_L24,
  'a2-l25': A2_L25,

  // A2 Units 6-10
  'a2-l26': A2_L26,
  'a2-l27': A2_L27,
  'a2-l28': A2_L28,
  'a2-l29': A2_L29,
  'a2-l30': A2_L30,
  // A2 Elementary — Unit 7: Work & Professions
  'a2-l31': A2_L31,
  'a2-l32': A2_L32,
  'a2-l33': A2_L33,
  'a2-l34': A2_L34,
  'a2-l35': A2_L35,
  // A2 Elementary — Unit 8: Education & School
  'a2-l36': A2_L36,
  'a2-l37': A2_L37,
  'a2-l38': A2_L38,
  'a2-l39': A2_L39,
  'a2-l40': A2_L40,
  // A2 Elementary — Unit 9: Housing & Neighborhood
  'a2-l41': A2_L41,
  'a2-l42': A2_L42,
  'a2-l43': A2_L43,
  'a2-l44': A2_L44,
  'a2-l45': A2_L45,
  // A2 Elementary — Unit 10: Technology Basics
  'a2-l46': A2_L46,
  'a2-l47': A2_L47,
  'a2-l48': A2_L48,
  'a2-l49': A2_L49,
  'a2-l50': A2_L50,

  // B1 Intermediate — Unit 1: News & Media
  'b1-l1': B1_L1,
  'b1-l2': B1_L2,
  'b1-l3': B1_L3,
  'b1-l4': B1_L4,
  'b1-l5': B1_L5,
  // B1 Intermediate — Unit 2: Environment & Nature
  'b1-l6': B1_L6,
  'b1-l7': B1_L7,
  'b1-l8': B1_L8,
  'b1-l9': B1_L9,
  'b1-l10': B1_L10,
  // B1 Intermediate — Unit 3: Relationships & Emotions
  'b1-l11': B1_L11,
  'b1-l12': B1_L12,
  'b1-l13': B1_L13,
  'b1-l14': B1_L14,
  'b1-l15': B1_L15,
  // B1 Intermediate — Unit 4: Culture & Traditions
  'b1-l16': B1_L16,
  'b1-l17': B1_L17,
  'b1-l18': B1_L18,
  'b1-l19': B1_L19,
  'b1-l20': B1_L20,
  // B1 Intermediate — Unit 5: Business English Basics
  'b1-l21': B1_L21,
  'b1-l22': B1_L22,
  'b1-l23': B1_L23,
  'b1-l24': B1_L24,
  'b1-l25': B1_L25,
  // B1 Intermediate — Unit 6: Health & Wellness
  'b1-l26': B1_L26,
  'b1-l27': B1_L27,
  'b1-l28': B1_L28,
  'b1-l29': B1_L29,
  'b1-l30': B1_L30,
  // B1 Intermediate — Unit 7: Travel Experiences
  'b1-l31': B1_L31,
  'b1-l32': B1_L32,
  'b1-l33': B1_L33,
  'b1-l34': B1_L34,
  'b1-l35': B1_L35,
  // B1 Intermediate — Unit 8: Social Issues
  'b1-l36': B1_L36,
  'b1-l37': B1_L37,
  'b1-l38': B1_L38,
  'b1-l39': B1_L39,
  'b1-l40': B1_L40,
  // B1 Intermediate — Unit 9: Arts & Entertainment
  'b1-l41': B1_L41,
  'b1-l42': B1_L42,
  'b1-l43': B1_L43,
  'b1-l44': B1_L44,
  'b1-l45': B1_L45,
  // B1 Intermediate — Unit 10: Science & Technology
  'b1-l46': B1_L46,
  'b1-l47': B1_L47,
  'b1-l48': B1_L48,
  'b1-l49': B1_L49,
  'b1-l50': B1_L50,
  // B1 Intermediate — Unit 11: Finance & Money
  'b1-l51': B1_L51,
  'b1-l52': B1_L52,
  'b1-l53': B1_L53,
  'b1-l54': B1_L54,
  'b1-l55': B1_L55,
  // B1 Intermediate — Unit 12: Law & Rights
  'b1-l56': B1_L56,
  'b1-l57': B1_L57,
  'b1-l58': B1_L58,
  'b1-l59': B1_L59,
  'b1-l60': B1_L60,

  // ─── B2 Upper Intermediate ─────────────────────────────────────────────
  // B2 Unit 1: Professional Communication
  'b2-l1': B2_L1,
  'b2-l2': B2_L2,
  'b2-l3': B2_L3,
  'b2-l4': B2_L4,
  'b2-l5': B2_L5,
  // B2 Unit 2: Academic English
  'b2-l6': B2_L6,
  'b2-l7': B2_L7,
  'b2-l8': B2_L8,
  'b2-l9': B2_L9,
  'b2-l10': B2_L10,

  // B2 Unit 3: Politics & Government
  'b2-l11': B2_L11,
  'b2-l12': B2_L12,
  'b2-l13': B2_L13,
  'b2-l14': B2_L14,
  'b2-l15': B2_L15,
  // B2 Unit 4: Philosophy & Ethics
  'b2-l16': B2_L16,
  'b2-l17': B2_L17,
  'b2-l18': B2_L18,
  'b2-l19': B2_L19,
  'b2-l20': B2_L20,
  // B2 Unit 5: Advanced Business
  'b2-l21': B2_L21,
  'b2-l22': B2_L22,
  'b2-l23': B2_L23,
  'b2-l24': B2_L24,
  'b2-l25': B2_L25,
  // B2 Unit 6: Medicine & Healthcare
  'b2-l26': B2_L26,
  'b2-l27': B2_L27,
  'b2-l28': B2_L28,
  'b2-l29': B2_L29,
  'b2-l30': B2_L30,

  // ─── B2 Upper Intermediate — Unit 7: Engineering & Innovation
  'b2-l31': B2_L31,
  'b2-l32': B2_L32,
  'b2-l33': B2_L33,
  'b2-l34': B2_L34,
  'b2-l35': B2_L35,
  // B2 Unit 8: Literature & Poetry
  'b2-l36': B2_L36,
  'b2-l37': B2_L37,
  'b2-l38': B2_L38,
  'b2-l39': B2_L39,
  'b2-l40': B2_L40,
  // B2 Unit 9: Psychology & Behavior
  'b2-l41': B2_L41,
  'b2-l42': B2_L42,
  'b2-l43': B2_L43,
  'b2-l44': B2_L44,
  'b2-l45': B2_L45,
  // B2 Unit 10: Global Economy
  'b2-l46': B2_L46,
  'b2-l47': B2_L47,
  'b2-l48': B2_L48,
  'b2-l49': B2_L49,
  'b2-l50': B2_L50,
  // B2 Unit 11: Legal English
  'b2-l51': B2_L51,
  'b2-l52': B2_L52,
  'b2-l53': B2_L53,
  'b2-l54': B2_L54,
  'b2-l55': B2_L55,
  // B2 Unit 12: Advanced Writing
  'b2-l56': B2_L56,
  'b2-l57': B2_L57,
  'b2-l58': B2_L58,
  'b2-l59': B2_L59,
  'b2-l60': B2_L60,

  // ─── C2 Mastery ────────────────────────────────────────────────────────
  // C2 Unit 1: Native-level Expressions
  'c2-l1': C2_L1,
  'c2-l2': C2_L2,
  'c2-l3': C2_L3,
  'c2-l4': C2_L4,
  'c2-l5': C2_L5,
  // C2 Unit 2: Literary Analysis
  'c2-l6': C2_L6,
  'c2-l7': C2_L7,
  'c2-l8': C2_L8,
  'c2-l9': C2_L9,
  'c2-l10': C2_L10,
  // C2 Unit 3: Philosophical Discourse
  'c2-l11': C2_L11,
  'c2-l12': C2_L12,
  'c2-l13': C2_L13,
  'c2-l14': C2_L14,
  'c2-l15': C2_L15,
  // C2 Unit 4: Advanced Rhetoric
  'c2-l16': C2_L16,
  'c2-l17': C2_L17,
  'c2-l18': C2_L18,
  'c2-l19': C2_L19,
  'c2-l20': C2_L20,
  // C2 Unit 5: Cultural Fluency
  'c2-l21': C2_L21,
  'c2-l22': C2_L22,
  'c2-l23': C2_L23,
  'c2-l24': C2_L24,
  'c2-l25': C2_L25,
  // C2 Unit 6: Specialized Terminology
  'c2-l26': C2_L26,
  'c2-l27': C2_L27,
  'c2-l28': C2_L28,
  'c2-l29': C2_L29,
  'c2-l30': C2_L30,
  // C2 Unit 7: Humor & Wit
  'c2-l31': C2_L31,
  'c2-l32': C2_L32,
  'c2-l33': C2_L33,
  'c2-l34': C2_L34,
  'c2-l35': C2_L35,
  // C2 Unit 8: Poetic Language
  'c2-l36': C2_L36,
  'c2-l37': C2_L37,
  'c2-l38': C2_L38,
  'c2-l39': C2_L39,
  'c2-l40': C2_L40,
  // C2 Unit 9: Academic Publishing
  'c2-l41': C2_L41,
  'c2-l42': C2_L42,
  'c2-l43': C2_L43,
  'c2-l44': C2_L44,
  'c2-l45': C2_L45,
  // C2 Unit 10: Political Commentary
  'c2-l46': C2_L46,
  'c2-l47': C2_L47,
  'c2-l48': C2_L48,
  'c2-l49': C2_L49,
  'c2-l50': C2_L50,
  // C2 Unit 11: Ethical Discourse
  'c2-l51': C2_L51,
  'c2-l52': C2_L52,
  'c2-l53': C2_L53,
  'c2-l54': C2_L54,
  'c2-l55': C2_L55,
  // C2 Unit 12: Art Criticism
  'c2-l56': C2_L56,
  'c2-l57': C2_L57,
  'c2-l58': C2_L58,
  'c2-l59': C2_L59,
  'c2-l60': C2_L60,
  // C2 Unit 13: Scientific Innovation
  'c2-l61': C2_L61,
  'c2-l62': C2_L62,
  'c2-l63': C2_L63,
  'c2-l64': C2_L64,
  'c2-l65': C2_L65,
  // C2 Unit 14: Near-native Perfection
  'c2-l66': C2_L66,
  'c2-l67': C2_L67,
  'c2-l68': C2_L68,
  'c2-l69': C2_L69,
  'c2-l70': C2_L70,
}

export function getLessonContent(lessonId: string): LessonContent {
  return LESSON_CONTENT_MAP[lessonId] ?? FALLBACK_CONTENT
}
