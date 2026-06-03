// Lesson content for A2 Units 1-5
// YOELANG English learning app for francophone users
// Inspired by Harvard's practical English pedagogy — rigorous, practical, progressive

import { type LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 1: DAILY LIFE & ROUTINES (a2-l1 through a2-l5)
// ════════════════════════════════════════════════════════════════════════════════

// ─── a2-l1: Daily Activities Vocabulary (vocabulary) ─────────────────────────
export const A2_L1: LessonContent = {
  vocab: [
    { english: 'Commute', french: 'Trajet domicile-travail', phonetic: '/kəˈmjuːt/', example: 'My commute takes thirty minutes.', exampleTranslation: 'Mon trajet dure trente minutes.' },
    { english: 'Errand', french: 'Course / Tâche', phonetic: '/ˈerənd/', example: 'I have to run some errands.', exampleTranslation: 'Je dois faire quelques courses.' },
    { english: 'Laundry', french: 'Lessive', phonetic: '/ˈlɔːndri/', example: 'I do the laundry on Saturdays.', exampleTranslation: 'Je fais la lessive le samedi.' },
    { english: 'Groceries', french: 'Courses (alimentaires)', phonetic: '/ˈɡroʊsəriz/', example: 'We buy groceries every Friday.', exampleTranslation: 'Nous achetons des provisions chaque vendredi.' },
    { english: 'Appointment', french: 'Rendez-vous', phonetic: '/əˈpɔɪntmənt/', example: 'I have a doctor\'s appointment at three.', exampleTranslation: "J'ai un rendez-vous chez le médecin à trois heures." },
  ],
  grammar: {
    title: 'Vocabulaire des activités quotidiennes — Noms composés',
    explanation: 'En anglais, beaucoup de mots du quotidien sont des noms composés : "commute" (trajet), "errand" (course/task), "laundry" (lessive), "groceries" (provisions). ATTENTION : "groceries" est toujours au pluriel avec un "s" quand on parle des provisions. "Laundry" est indénombrable : on dit "do the laundry", pas "do a laundry". Pour les rendez-vous : "an appointment" (avec un médecin), "a meeting" (au travail).',
    examples: [
      { sentence: 'I need to run some errands after work.', translation: "Je dois faire quelques courses après le travail.", isCorrect: true },
      { sentence: 'She does a laundry every week.', translation: '', isCorrect: false },
      { sentence: 'We buy groceries at the market.', translation: 'Nous achetons des provisions au marché.', isCorrect: true },
      { sentence: 'I have an appointment at ten o\'clock.', translation: "J'ai un rendez-vous à dix heures.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She does a laundry every week.', correct: 'She does the laundry every week.', explanation: '"Laundry" est indénombrable. On dit "do the laundry", pas "do a laundry".' },
      { wrong: 'I must buy grocery.', correct: 'I must buy groceries.', explanation: 'Quand on parle des provisions, "groceries" est toujours au pluriel : "buy groceries".' },
    ],
  },
  conversation: [
    { speaker: 'Amina', role: 'A', text: 'What do you usually do after work?', translation: 'Que fais-tu habituellement après le travail ?' },
    { speaker: 'Kofi', role: 'B', text: 'I usually run some errands. Then I do the laundry.', translation: "Je fais généralement quelques courses. Ensuite je fais la lessive." },
    { speaker: 'Amina', role: 'A', text: 'When do you buy groceries?', translation: 'Quand achètes-tu les provisions ?' },
    { speaker: 'Kofi', role: 'B', text: 'I buy groceries on Friday after my commute.', translation: "J'achète les provisions le vendredi après mon trajet." },
    { speaker: 'Amina', role: 'A', text: 'I have a dentist appointment tomorrow. I need to prepare!', translation: "J'ai un rendez-vous chez le dentiste demain. Je dois me préparer !" },
    { speaker: 'Kofi', role: 'B', text: 'Good luck! My commute to the dentist is very long.', translation: 'Bonne chance ! Mon trajet jusqu\'au dentiste est très long.' },
  ],
  conversationTitle: 'Parler des activités quotidiennes',
  pronunciation: [
    { word: 'Commute', phonetic: '/kəˈmjuːt/', meaning: 'Trajet', tip: 'L\'accent est sur "MUTE" : "ke-MIOUT". Les syllabes avant et après sont réduites.' },
    { word: 'Errand', phonetic: '/ˈerənd/', meaning: 'Course / Tâche', tip: 'Prononcez "ER-end" — l\'accent est sur la première syllabe. Le "r" américain est roulé.' },
    { word: 'Laundry', phonetic: '/ˈlɔːndri/', meaning: 'Lessive', tip: 'Prononcez "LON-dri" — le "au" est un "o" long ouvert comme dans "port".' },
    { word: 'Groceries', phonetic: '/ˈɡroʊsəriz/', meaning: 'Provisions', tip: 'Prononcez "GRO-se-riz" — l\'accent est sur "GRO" et le "cer" du milieu se réduit.' },
  ],
}

// ─── a2-l2: Present Continuous (grammar) ────────────────────────────────────
export const A2_L2: LessonContent = {
  vocab: [
    { english: 'Working', french: 'Travaillant', phonetic: '/ˈwɜːrkɪŋ/', example: 'She is working from home today.', exampleTranslation: "Elle travaille à domicile aujourd'hui." },
    { english: 'Studying', french: 'Étudiant', phonetic: '/ˈstʌdiɪŋ/', example: 'He is studying English right now.', exampleTranslation: "Il étudie l'anglais en ce moment." },
    { english: 'Waiting', french: 'Attendant', phonetic: '/ˈweɪtɪŋ/', example: 'We are waiting for the bus.', exampleTranslation: 'Nous attendons le bus.' },
    { english: 'Cooking', french: 'Cuisinant', phonetic: '/ˈkʊkɪŋ/', example: 'My mother is cooking dinner.', exampleTranslation: 'Ma mère cuisine le dîner.' },
    { english: 'Running', french: 'Courant', phonetic: '/ˈrʌnɪŋ/', example: 'The children are running in the park.', exampleTranslation: 'Les enfants courent dans le parc.' },
  ],
  grammar: {
    title: 'Le Present Continuous — Être en train de...',
    explanation: 'Le Present Continuous exprime une action en cours : "I am working" (Je suis en train de travailler). Formation : sujet + am/is/are + verbe-en-ing. "I am working", "She is studying", "They are waiting". Négatif : "I am not working", "She isn\'t studying". Question : "Are you working?", "Is she studying?". ATTENTION : certains verbes ne s\'utilisent PAS au continuous : "I know" (pas "I am knowing"), "I want" (pas "I am wanting"), "I like" (pas "I am liking"). Ces verbes d\'état décrivent un état, pas une action.',
    examples: [
      { sentence: 'She is studying English right now.', translation: "Elle étudie l'anglais en ce moment.", isCorrect: true },
      { sentence: 'I am knowing the answer.', translation: '', isCorrect: false },
      { sentence: 'Are they waiting for the bus?', translation: 'Attendent-ils le bus ?', isCorrect: true },
      { sentence: 'He isn\'t cooking right now.', translation: 'Il ne cuisine pas en ce moment.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I am knowing the answer.', correct: 'I know the answer.', explanation: 'Les verbes d\'état (know, want, like, understand, believe) ne s\'utilisent PAS au Present Continuous. Ils décrivent un état, pas une action.' },
      { wrong: 'She working right now.', correct: 'She is working right now.', explanation: 'Le Present Continuous nécessite "am/is/are" : "She IS working", pas "She working".' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'What are you doing right now?', translation: 'Que fais-tu en ce moment ?' },
    { speaker: 'Moussa', role: 'B', text: 'I am studying for my English exam. What about you?', translation: "J'étudie pour mon examen d'anglais. Et toi ?" },
    { speaker: 'Fatou', role: 'A', text: 'I am waiting for my sister. She is cooking dinner.', translation: "J'attends ma sœur. Elle cuisine le dîner." },
    { speaker: 'Moussa', role: 'B', text: 'Is your brother working today?', translation: 'Ton frère travaille-t-il aujourd\'hui ?' },
    { speaker: 'Fatou', role: 'A', text: 'No, he isn\'t. He is running in the park.', translation: 'Non. Il court dans le parc.' },
    { speaker: 'Moussa', role: 'B', text: 'That\'s nice! I want to go running too, but I am busy.', translation: "C'est sympa ! Je veux aussi aller courir, mais je suis occupé." },
  ],
  conversationTitle: 'Que fais-tu en ce moment ?',
  pronunciation: [
    { word: 'Working', phonetic: '/ˈwɜːrkɪŋ/', meaning: 'Travaillant', tip: 'Le "or" = "eur" : "EUR-king". L\'accent est sur la première syllabe.' },
    { word: 'Studying', phonetic: '/ˈstʌdiɪŋ/', meaning: 'Étudiant', tip: 'Prononcez "STEU-di-ing" — le "u" est ouvert comme dans "bus".' },
    { word: 'Waiting', phonetic: '/ˈweɪtɪŋ/', meaning: 'Attendant', tip: 'Prononcez "OUÉ-ting" — le "w" initial requires lèvres arrondies.' },
    { word: 'Running', phonetic: '/ˈrʌnɪŋ/', meaning: 'Courant', tip: 'Le "u" est très ouvert : "REUN-ning". Pas "ron-ning".' },
  ],
}

// ─── a2-l3: What Are You Doing? (conversation) ─────────────────────────────
export const A2_L3: LessonContent = {
  vocab: [
    { english: 'Right now', french: 'En ce moment', phonetic: '/raɪt naʊ/', example: 'I am eating right now.', exampleTranslation: "Je mange en ce moment." },
    { english: 'At the moment', french: 'Actuellement', phonetic: '/æt ðə ˈmoʊmənt/', example: 'She is working at the moment.', exampleTranslation: 'Elle travaille actuellement.' },
    { english: 'Currently', french: 'Actuellement', phonetic: '/ˈkɜːrəntli/', example: 'He is currently living in Paris.', exampleTranslation: 'Il vit actuellement à Paris.' },
    { english: 'These days', french: 'Ces jours-ci', phonetic: '/ðiːz deɪz/', example: 'We are studying hard these days.', exampleTranslation: 'Nous étudions dur ces jours-ci.' },
  ],
  grammar: {
    title: 'Questions au Present Continuous — What are you doing?',
    explanation: 'Pour demander ce que quelqu\'un fait en ce moment : "What are you doing?" (Que fais-tu ?), "What is she doing?" (Que fait-elle ?), "What are they doing?" (Que font-ils ?). Réponse : "I am working", "She is studying", "They are cooking". On peut ajouter des marqueurs de temps : "right now", "at the moment", "currently". Pour demander où : "Where are you going?" (Où vas-tu ?). Pour demander pourquoi : "Why are you running?" (Pourquoi cours-tu ?).',
    examples: [
      { sentence: 'What are you doing right now?', translation: 'Que fais-tu en ce moment ?', isCorrect: true },
      { sentence: 'What you are doing?', translation: '', isCorrect: false },
      { sentence: 'Where is she going at the moment?', translation: 'Où va-t-elle en ce moment ?', isCorrect: true },
      { sentence: 'I am cooking dinner currently.', translation: "Je cuisine le dîner actuellement.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'What you are doing?', correct: 'What are you doing?', explanation: 'Dans une question, le verbe "be" se place AVANT le sujet : "Are you", pas "You are".' },
      { wrong: 'What she is doing?', correct: 'What is she doing?', explanation: 'Question = "is" + sujet + verbe-ing : "Is she doing", pas "She is doing".' },
    ],
  },
  conversation: [
    { speaker: 'Aïcha', role: 'A', text: 'Hi Youssef! What are you doing right now?', translation: 'Salut Youssef ! Que fais-tu en ce moment ?' },
    { speaker: 'Youssef', role: 'B', text: 'I am cleaning the house. What about you?', translation: 'Je nettoie la maison. Et toi ?' },
    { speaker: 'Aïcha', role: 'A', text: 'I am making lunch. Where is Fatou going?', translation: 'Je prépare le déjeuner. Où va Fatou ?' },
    { speaker: 'Youssef', role: 'B', text: 'She is going to the market. She is buying groceries.', translation: 'Elle va au marché. Elle achète des provisions.' },
    { speaker: 'Aïcha', role: 'A', text: 'And what are the children doing at the moment?', translation: 'Et que font les enfants en ce moment ?' },
    { speaker: 'Youssef', role: 'B', text: 'They are playing in the garden. They are having fun!', translation: 'Ils jouent dans le jardin. Ils s\'amusent !' },
  ],
  conversationTitle: 'Que se passe-t-il en ce moment ?',
  pronunciation: [
    { word: 'Currently', phonetic: '/ˈkɜːrəntli/', meaning: 'Actuellement', tip: 'L\'accent est sur "CUR" : "KER-ent-li". Le "u" est ouvert comme dans "fur".' },
    { word: 'Moment', phonetic: '/ˈmoʊmənt/', meaning: 'Moment', tip: 'Prononcez "MO-ment" — le "o" est long et le "e" final est réduit.' },
    { word: 'Right', phonetic: '/raɪt naʊ/', meaning: 'En ce moment', tip: 'Expression "right now" = en ce moment. "Right" = "raït" et "now" = "nao". Le "t" de "right" peut disparaître devant "n".' },
    { word: 'These', phonetic: '/ðiːz deɪz/', meaning: 'Ces jours-ci', tip: 'Expression "these days" = ces jours-ci. Le "th" de "these" est sonore : langue entre les dents, vibrez. "Dhiz déz".' },
  ],
}

// ─── a2-l4: Simple vs Continuous (grammar) ──────────────────────────────────
export const A2_L4: LessonContent = {
  vocab: [
    { english: 'Habit', french: 'Habitude', phonetic: '/ˈhæbɪt/', example: 'I have a habit of reading before bed.', exampleTranslation: "J'ai l'habitude de lire avant de dormir." },
    { english: 'Routine', french: 'Routine', phonetic: '/ruːˈtiːn/', example: 'My morning routine is very simple.', exampleTranslation: 'Ma routine du matin est très simple.' },
    { english: 'Temporary', french: 'Temporaire', phonetic: '/ˈtempəreri/', example: 'This is a temporary situation.', exampleTranslation: 'C\'est une situation temporaire.' },
    { english: 'Permanent', french: 'Permanent(e)', phonetic: '/ˈpɜːrmənənt/', example: 'She has a permanent job.', exampleTranslation: 'Elle a un emploi permanent.' },
  ],
  grammar: {
    title: 'Present Simple vs Present Continuous — Quand utiliser lequel ?',
    explanation: 'PRESENT SIMPLE = habitudes et routines (permanent) : "I work every day" (Je travaille tous les jours), "She studies English" (Elle étudie l\'anglais — régulièrement). PRESENT CONTINU = action en cours (temporaire) : "I am working right now" (Je travaille en ce moment), "She is studying today" (Elle étudie aujourd\'hui — en ce moment). MOTS CLÉS : Present Simple → always, usually, every day, sometimes. Present Continuous → right now, at the moment, currently, today (temporaire).',
    examples: [
      { sentence: 'I work every day. (routine)', translation: 'Je travaille tous les jours. (routine)', isCorrect: true },
      { sentence: 'I am working right now. (en cours)', translation: 'Je travaille en ce moment. (en cours)', isCorrect: true },
      { sentence: 'I am working every day.', translation: '', isCorrect: false },
      { sentence: 'She usually drinks coffee, but today she is drinking tea.', translation: "Elle boit habituellement du café, mais aujourd'hui elle boit du thé.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I am working every day.', correct: 'I work every day.', explanation: 'Avec "every day" (habitude), on utilise le Present Simple, pas le Continuous. "Every day" = routine = Present Simple.' },
      { wrong: 'I work right now.', correct: 'I am working right now.', explanation: 'Avec "right now" (en ce moment), on utilise le Present Continuous, pas le Simple.' },
    ],
  },
  conversation: [
    { speaker: 'Oumar', role: 'A', text: 'What do you usually do in the morning?', translation: 'Que fais-tu habituellement le matin ?' },
    { speaker: 'Mariama', role: 'B', text: 'I usually drink coffee and read the newspaper.', translation: "J'habitude bois du café et lis le journal." },
    { speaker: 'Oumar', role: 'A', text: 'What are you doing today? Is it different?', translation: 'Que fais-tu aujourd\'hui ? C\'est différent ?' },
    { speaker: 'Mariama', role: 'B', text: 'Yes! Today I am drinking tea. I am not reading the newspaper either.', translation: "Oui ! Aujourd'hui je bois du thé. Je ne lis pas le journal non plus." },
    { speaker: 'Oumar', role: 'A', text: 'I always walk to work, but this week I am taking the bus.', translation: 'Je marche toujours au travail, mais cette semaine je prends le bus.' },
    { speaker: 'Mariama', role: 'B', text: 'That\'s temporary! Your routine is walking, but this week is different.', translation: "C'est temporaire ! Ta routine est de marcher, mais cette semaine c'est différent." },
  ],
  conversationTitle: 'Habitudes vs actions en cours',
  pronunciation: [
    { word: 'Habit', phonetic: '/ˈhæbɪt/', meaning: 'Habitude', tip: 'Le "a" est très ouvert comme dans "cat" : "HA-bit". L\'accent est sur la première syllabe.' },
    { word: 'Routine', phonetic: '/ruːˈtiːn/', meaning: 'Routine', tip: 'L\'accent est sur "TINE" : "rou-TINE". Pas "ROU-tine" à la française !' },
    { word: 'Temporary', phonetic: '/ˈtempəreri/', meaning: 'Temporaire', tip: 'En américain : "TEM-per-er-i" — 4 syllabes. En britannique : "TEM-prə-ri" — 3 syllabes.' },
    { word: 'Permanent', phonetic: '/ˈpɜːrmənənt/', meaning: 'Permanent', tip: 'L\'accent est sur "PER" : "PER-ma-nent". Le "e" final est réduit.' },
  ],
}

// ─── a2-l5: Routine Sounds (pronunciation) ──────────────────────────────────
export const A2_L5: LessonContent = {
  vocab: [
    { english: 'Schedule', french: 'Emploi du temps', phonetic: '/ˈʃedjuːl/', example: 'My schedule is very busy.', exampleTranslation: 'Mon emploi du temps est très chargé.' },
    { english: 'Chores', french: 'Tâches ménagères', phonetic: '/tʃɔːrz/', example: 'I do chores on Saturday mornings.', exampleTranslation: 'Je fais les tâches ménagères le samedi matin.' },
    { english: 'Shift', french: 'Poste (travail)', phonetic: '/ʃɪft/', example: 'She works the night shift.', exampleTranslation: 'Elle travaille de nuit.' },
    { english: 'Break', french: 'Pause', phonetic: '/breɪk/', example: 'I take a break at noon.', exampleTranslation: 'Je fais une pause à midi.' },
  ],
  grammar: {
    title: 'Prononciation des mots du quotidien — Accent tonique',
    explanation: 'Les mots du quotidien en anglais ont souvent l\'accent tonique sur une syllabe qu\'on n\'attend pas en français : "SCHÉ-dule" (pas "sche-DULE"), "CHORES" (pas "cho-RES"), "SHIFT" (mot monosyllabique, accent unique). Connaître l\'accent tonique correct est essentiel pour être compris au travail et dans la vie de tous les jours.',
    examples: [
      { sentence: 'My SCHEDule is busy today.', translation: 'Mon emploi du temps est chargé aujourd\'hui.', isCorrect: true },
      { sentence: 'I do my choRES on Saturday.', translation: '', isCorrect: false },
      { sentence: 'She works the night SHIFT.', translation: 'Elle travaille de nuit.', isCorrect: true },
      { sentence: 'I take a BREAK at noon.', translation: 'Je fais une pause à midi.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I do my choRES on Saturday.', correct: 'I do my CHORES on Saturday.', explanation: 'L\'accent est sur "CHORES" : une seule syllabe accentuée. Pas "cho-RES".' },
      { wrong: 'My schedULE is busy.', correct: 'My SCHEDule is busy.', explanation: 'L\'accent est sur "SCHED" : "SCHÉ-dule", pas "sche-DULE".' },
    ],
  },
  conversation: [
    { speaker: 'Amara', role: 'A', text: 'What does your daily schedule look like?', translation: 'À quoi ressemble ton emploi du temps quotidien ?' },
    { speaker: 'Idrissa', role: 'B', text: 'I start work at eight. I take a break at noon.', translation: 'Je commence le travail à huit heures. Je fais une pause à midi.' },
    { speaker: 'Amara', role: 'A', text: 'Do you work shifts?', translation: 'Travailles-tu par postes ?' },
    { speaker: 'Idrissa', role: 'B', text: 'No, I work regular hours. But I do chores in the evening.', translation: 'Non, je travaille aux heures normales. Mais je fais les tâches ménagères le soir.' },
    { speaker: 'Amara', role: 'A', text: 'Me too! My schedule is always full.', translation: 'Moi aussi ! Mon emploi du temps est toujours plein.' },
    { speaker: 'Idrissa', role: 'B', text: 'We are both very busy people!', translation: 'Nous sommes tous les deux très occupés !' },
  ],
  conversationTitle: 'Parler de son emploi du temps',
  pronunciation: [
    { word: 'Schedule', phonetic: '/ˈʃedjuːl/', meaning: 'Emploi du temps', tip: 'En anglais britannique : "CHÉ-diou". En américain : "SKÉ-doul". Les deux sont corrects !' },
    { word: 'Chores', phonetic: '/tʃɔːrz/', meaning: 'Tâches ménagères', tip: 'Le "ch" = "tch" et le "o" est long : "TCHORZ". Pas "chorz".' },
    { word: 'Shift', phonetic: '/ʃɪft/', meaning: 'Poste (travail)', tip: 'Prononcez "CHIF-t" — le "i" est court et le "f" est prononcé. Pas "chiff".' },
    { word: 'Break', phonetic: '/breɪk/', meaning: 'Pause', tip: 'Prononcez "BRÉÏK" — le "ea" = "éi" comme dans "day". Pas "brèk".' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 2: HOBBIES & FREE TIME (a2-l6 through a2-l10)
// ════════════════════════════════════════════════════════════════════════════════

// ─── a2-l6: Hobby Vocabulary (vocabulary) ───────────────────────────────────
export const A2_L6: LessonContent = {
  vocab: [
    { english: 'Painting', french: 'Peinture', phonetic: '/ˈpeɪntɪŋ/', example: 'I enjoy painting on weekends.', exampleTranslation: "J'aime peindre le week-end." },
    { english: 'Swimming', french: 'Natation', phonetic: '/ˈswɪmɪŋ/', example: 'She goes swimming every Tuesday.', exampleTranslation: 'Elle va nager tous les mardis.' },
    { english: 'Cooking', french: 'Cuisine', phonetic: '/ˈkʊkɪŋ/', example: 'Cooking is my favourite hobby.', exampleTranslation: 'Cuisiner est mon passe-temps préféré.' },
    { english: 'Reading', french: 'Lecture', phonetic: '/ˈriːdɪŋ/', example: 'He loves reading novels.', exampleTranslation: 'Il adore lire des romans.' },
    { english: 'Gardening', french: 'Jardinage', phonetic: '/ˈɡɑːrdnɪŋ/', example: 'My mother enjoys gardening.', exampleTranslation: 'Ma mère aime le jardinage.' },
  ],
  grammar: {
    title: 'Vocabulaire des loisirs — Noms en -ing',
    explanation: 'En anglais, beaucoup de loisirs s\'expriment avec un verbe en -ing utilisé comme nom : "swimming" (natation), "reading" (lecture), "cooking" (cuisine). On les utilise après "I enjoy", "I like", "I love" : "I enjoy swimming" (J\'aime nager). ATTENTION : on dit "go swimming" (aller nager), pas "do swimming". De même : "go running", "go shopping", "go fishing".',
    examples: [
      { sentence: 'I enjoy swimming in the river.', translation: "J'aime nager dans la rivière.", isCorrect: true },
      { sentence: 'She goes shopping every Saturday.', translation: 'Elle fait les courses chaque samedi.', isCorrect: true },
      { sentence: 'I do swimming on Monday.', translation: '', isCorrect: false },
      { sentence: 'He loves cooking African food.', translation: 'Il adore cuisiner la cuisine africaine.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I do swimming.', correct: 'I go swimming. / I swim.', explanation: 'On dit "go swimming" ou "I swim", pas "do swimming". Le verbe "go" + -ing est la structure correcte pour les activités de loisir.' },
      { wrong: 'I like play football.', correct: 'I like playing football.', explanation: 'Après "like", on utilise le verbe en -ing : "playing", pas "play".' },
    ],
  },
  conversation: [
    { speaker: 'Amina', role: 'A', text: 'What do you do in your free time, Kofi?', translation: 'Que fais-tu pendant ton temps libre, Kofi ?' },
    { speaker: 'Kofi', role: 'B', text: 'I enjoy swimming and reading. What about you?', translation: "J'aime nager et lire. Et toi ?" },
    { speaker: 'Amina', role: 'A', text: 'I love painting! I paint landscapes every weekend.', translation: "J'adore peindre ! Je peins des paysages chaque week-end." },
    { speaker: 'Kofi', role: 'B', text: 'That sounds wonderful! Do you also like cooking?', translation: 'Ça a l\'air merveilleux ! Aimes-tu aussi cuisiner ?' },
    { speaker: 'Amina', role: 'A', text: 'Yes, I cook traditional dishes with my mother on Sundays.', translation: 'Oui, je cuisine des plats traditionnels avec ma mère le dimanche.' },
    { speaker: 'Kofi', role: 'B', text: 'We should cook together sometime! I make great thieboudienne.', translation: 'On devrait cuisiner ensemble un jour ! Je fais un excellent thieboudienne.' },
  ],
  conversationTitle: 'Parler de ses loisirs',
  pronunciation: [
    { word: 'Painting', phonetic: '/ˈpeɪntɪŋ/', meaning: 'Peinture', tip: 'Prononcez "PÉ-nin-g" — le "ng" final : langue contre le palais, ne dites pas "pein-tin".' },
    { word: 'Swimming', phonetic: '/ˈswɪmɪŋ/', meaning: 'Natation', tip: 'Le "w" initial : arrondissez les lèvres. "SOUIM-ming". Le "i" est court.' },
    { word: 'Cooking', phonetic: '/ˈkʊkɪŋ/', meaning: 'Cuisine', tip: 'Le "oo" est court comme dans "book" : "KOU-king". Pas "kou-ki-g".' },
    { word: 'Gardening', phonetic: '/ˈɡɑːrdnɪŋ/', meaning: 'Jardinage', tip: 'L\'accent est sur "GAR" : "GAR-dne-ning". Le "e" du milieu est réduit.' },
  ],
}

// ─── a2-l7: Likes & Dislikes (grammar) ──────────────────────────────────────
export const A2_L7: LessonContent = {
  vocab: [
    { english: 'Enjoy', french: 'Apprécier', phonetic: '/ɪnˈdʒɔɪ/', example: 'I enjoy listening to music.', exampleTranslation: "J'apprécie écouter de la musique." },
    { english: 'Prefer', french: 'Préférer', phonetic: '/prɪˈfɜːr/', example: 'She prefers tea to coffee.', exampleTranslation: 'Elle préfère le thé au café.' },
    { english: 'Interested in', french: 'Intéressé par', phonetic: '/ˈɪntrəstɪd ɪn/', example: 'I am interested in African history.', exampleTranslation: "Je suis intéressé par l'histoire africaine." },
    { english: 'Can\'t stand', french: 'Ne pas supporter', phonetic: '/kænt stænd/', example: 'He can\'t stand waiting.', exampleTranslation: 'Il ne supporte pas attendre.' },
    { english: 'Fond of', french: 'Amateur de', phonetic: '/fɒnd ɒv/', example: 'She is fond of dancing.', exampleTranslation: 'Elle est amatrice de danse.' },
  ],
  grammar: {
    title: 'Exprimer ses goûts — I enjoy, I prefer, I\'m interested in',
    explanation: 'Pour exprimer ce qu\'on aime : "I enjoy + -ing" (J\'apprécie), "I like + -ing" (J\'aime), "I love + -ing" (J\'adore), "I\'m fond of + -ing/nom" (Je suis amateur de), "I\'m interested in + -ing/nom" (Je suis intéressé par). Pour ce qu\'on n\'aime pas : "I don\'t like + -ing", "I hate + -ing", "I can\'t stand + -ing". Pour les préférences : "I prefer X to Y" (Je préfère X à Y).',
    examples: [
      { sentence: 'I enjoy reading books.', translation: "J'apprécie lire des livres.", isCorrect: true },
      { sentence: 'She is interested in learn English.', translation: '', isCorrect: false },
      { sentence: 'I prefer rice to couscous.', translation: 'Je préfère le riz au couscous.', isCorrect: true },
      { sentence: 'He can\'t stand waking up early.', translation: 'Il ne supporte pas se réveiller tôt.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She is interested in learn English.', correct: 'She is interested in learning English.', explanation: 'Après "interested in", on utilise le verbe en -ing : "learning", pas "learn".' },
      { wrong: 'I prefer rice than couscous.', correct: 'I prefer rice to couscous.', explanation: 'On dit "prefer X TO Y", pas "prefer X than Y". "To" remplace "than" avec "prefer".' },
    ],
  },
  conversation: [
    { speaker: 'Mariama', role: 'A', text: 'What kind of music do you enjoy, Idrissa?', translation: 'Quel genre de musique aimes-tu, Idrissa ?' },
    { speaker: 'Idrissa', role: 'B', text: 'I enjoy listening to Afrobeat! I\'m fond of dancing too.', translation: "J'apprécie écouter l'Afrobeat ! Je suis aussi amateur de danse." },
    { speaker: 'Mariama', role: 'A', text: 'I prefer traditional music to modern music. What about you?', translation: 'Je préfère la musique traditionnelle à la musique moderne. Et toi ?' },
    { speaker: 'Idrissa', role: 'B', text: 'I like both! But I can\'t stand loud music at night.', translation: "J'aime les deux ! Mais je ne supporte pas la musique forte la nuit." },
    { speaker: 'Mariama', role: 'A', text: 'Me neither! I\'m interested in learning to play the kora.', translation: 'Moi non plus ! Je suis intéressée par l\'apprentissage de la kora.' },
    { speaker: 'Idrissa', role: 'B', text: 'That\'s amazing! My grandfather plays the kora beautifully.', translation: "C'est incroyable ! Mon grand-père joue de la kora magnifiquement." },
  ],
  conversationTitle: 'Exprimer ses goûts et préférences',
  pronunciation: [
    { word: 'Enjoy', phonetic: '/ɪnˈdʒɔɪ/', meaning: 'Apprécier', tip: 'L\'accent est sur "JOY" : "in-DJOÏ". Le premier "i" est réduit.' },
    { word: 'Prefer', phonetic: '/prɪˈfɜːr/', meaning: 'Préférer', tip: 'L\'accent est sur "FER" : "pri-FEUR". Le "e" est long et ouvert.' },
    { word: 'Interested', phonetic: '/ˈɪntrəstɪd/', meaning: 'Intéressé', tip: 'Prononcez "IN-tre-stid" — on n\'ajoute PAS de syllabe : pas "in-te-res-ted" !' },
    { word: 'Stand', phonetic: '/stænd/', meaning: 'Supporter', tip: 'Le "a" est ouvert comme dans "cat" : "stænd". Pas "stond".' },
  ],
}

// ─── a2-l8: Talking About Hobbies (conversation) ───────────────────────────
export const A2_L8: LessonContent = {
  vocab: [
    { english: 'Free time', french: 'Temps libre', phonetic: '/friː taɪm/', example: 'What do you do in your free time?', exampleTranslation: 'Que fais-tu pendant ton temps libre ?' },
    { english: 'Spare time', french: 'Temps libre', phonetic: '/sper taɪm/', example: 'I read in my spare time.', exampleTranslation: 'Je lis pendant mon temps libre.' },
    { english: 'Leisure', french: 'Loisir', phonetic: '/ˈleʒər/', example: 'Leisure activities are important.', exampleTranslation: 'Les activités de loisir sont importantes.' },
    { english: 'Passion', french: 'Passion', phonetic: '/ˈpæʃən/', example: 'Music is my passion.', exampleTranslation: 'La musique est ma passion.' },
  ],
  grammar: {
    title: 'Parler de ses loisirs — What do you do in your free time?',
    explanation: 'Pour demander ce que quelqu\'un fait pendant son temps libre : "What do you do in your free time?" ou "What do you do in your spare time?". Réponse : "I enjoy + -ing", "I like + -ing", "I spend my free time + -ing". Pour dire depuis combien de temps : "I have been playing football for three years" (Je joue au football depuis trois ans). "For" + durée, "since" + point de départ.',
    examples: [
      { sentence: 'What do you do in your free time?', translation: 'Que fais-tu pendant ton temps libre ?', isCorrect: true },
      { sentence: 'I enjoy playing basketball since five years.', translation: '', isCorrect: false },
      { sentence: 'I spend my spare time reading.', translation: 'Je passe mon temps libre à lire.', isCorrect: true },
      { sentence: 'She has been painting for two years.', translation: 'Elle peint depuis deux ans.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I enjoy playing basketball since five years.', correct: 'I have been playing basketball for five years.', explanation: '"For" + durée : "for five years". "Since" + point de départ : "since 2020".' },
      { wrong: 'What do you do on your free time?', correct: 'What do you do in your free time?', explanation: 'On dit "in your free time", pas "on your free time".' },
    ],
  },
  conversation: [
    { speaker: 'Oumar', role: 'A', text: 'What do you do in your free time, Fatou?', translation: 'Que fais-tu pendant ton temps libre, Fatou ?' },
    { speaker: 'Fatou', role: 'B', text: 'I enjoy dancing and cooking. And you?', translation: "J'aime danser et cuisiner. Et toi ?" },
    { speaker: 'Oumar', role: 'A', text: 'I spend my spare time playing football. It\'s my passion!', translation: "Je passe mon temps libre à jouer au football. C'est ma passion !" },
    { speaker: 'Fatou', role: 'B', text: 'How long have you been playing?', translation: 'Depuis combien de temps joues-tu ?' },
    { speaker: 'Oumar', role: 'A', text: 'I have been playing for ten years! Since I was a child.', translation: "Je joue depuis dix ans ! Depuis que j'étais enfant." },
    { speaker: 'Fatou', role: 'B', text: 'That\'s amazing! Leisure activities make life better.', translation: "C'est incroyable ! Les loisirs rendent la vie meilleure." },
  ],
  conversationTitle: 'Discuter de ses loisirs',
  pronunciation: [
    { word: 'Leisure', phonetic: '/ˈleʒər/', meaning: 'Loisir', tip: 'Prononcez "LÉ-zher" — le "s" = son "zh" comme dans "jour". Pas "li-sure".' },
    { word: 'Passion', phonetic: '/ˈpæʃən/', meaning: 'Passion', tip: 'Prononcez "PA-chenn" — le "ss" = "ch" et le "o" final est réduit.' },
    { word: 'Spare', phonetic: '/sper/', meaning: 'Libre (temps)', tip: 'Prononcez "SPÉR" — le "a" est silencieux, comme dans "care".' },
    { word: 'Free', phonetic: '/friː taɪm/', meaning: 'Temps libre', tip: 'Expression "free time" = temps libre. "Free" = "frii" avec un "ee" long. "Time" = "taïm" avec un "i" long.' },
  ],
}

// ─── a2-l9: How Often Do You...? (vocabulary) ──────────────────────────────
export const A2_L9: LessonContent = {
  vocab: [
    { english: 'Once a week', french: 'Une fois par semaine', phonetic: '/wʌns ə wiːk/', example: 'I go swimming once a week.', exampleTranslation: 'Je vais nager une fois par semaine.' },
    { english: 'Twice a month', french: 'Deux fois par mois', phonetic: '/twaɪs ə mʌnθ/', example: 'She visits her grandmother twice a month.', exampleTranslation: 'Elle rend visite à sa grand-mère deux fois par mois.' },
    { english: 'Three times a year', french: 'Trois fois par an', phonetic: '/θriː taɪmz ə jɪr/', example: 'We travel three times a year.', exampleTranslation: 'Nous voyageons trois fois par an.' },
    { english: 'Every day', french: 'Tous les jours', phonetic: '/ˈevri deɪ/', example: 'He reads every day.', exampleTranslation: 'Il lit tous les jours.' },
    { english: 'Hardly ever', french: 'Presque jamais', phonetic: '/ˈhɑːrdli ˈevər/', example: 'I hardly ever watch TV.', exampleTranslation: 'Je regarde presque jamais la télé.' },
  ],
  grammar: {
    title: 'Exprimer la fréquence — How often do you...?',
    explanation: 'Pour demander la fréquence : "How often do you + verbe?" (À quelle fréquence...?). Réponses : "Every day" (tous les jours), "Once a week" (une fois par semaine), "Twice a month" (deux fois par mois), "Three times a year" (trois fois par an). "Once" = une fois, "twice" = deux fois, puis "three times", "four times", etc. Adverbes de fréquence : "always" (100%), "usually" (80%), "often" (70%), "sometimes" (50%), "rarely" (20%), "hardly ever" (10%), "never" (0%).',
    examples: [
      { sentence: 'How often do you go swimming?', translation: 'À quelle fréquence vas-tu nager ?', isCorrect: true },
      { sentence: 'I go swimming two times by week.', translation: '', isCorrect: false },
      { sentence: 'She hardly ever eats fast food.', translation: 'Elle mange rarement de la restauration rapide.', isCorrect: true },
      { sentence: 'We play football three times a week.', translation: 'Nous jouons au football trois fois par semaine.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I go swimming two times by week.', correct: 'I go swimming twice a week.', explanation: 'On dit "twice a week" (pas "two times by week"). "Twice" est plus naturel que "two times".' },
      { wrong: 'She reads three time a month.', correct: 'She reads three times a month.', explanation: 'Après un nombre supérieur à 1, "time" prend un "s" : "three times", pas "three time".' },
    ],
  },
  conversation: [
    { speaker: 'Aïcha', role: 'A', text: 'How often do you go cycling, Youssef?', translation: 'À quelle fréquence fais-tu du vélo, Youssef ?' },
    { speaker: 'Youssef', role: 'B', text: 'I go cycling twice a week, on Wednesdays and Saturdays.', translation: 'Je fais du vélo deux fois par semaine, le mercredi et le samedi.' },
    { speaker: 'Aïcha', role: 'A', text: 'I enjoy photography. I take photos every weekend.', translation: "J'aime la photographie. Je prends des photos chaque week-end." },
    { speaker: 'Youssef', role: 'B', text: 'That\'s nice! How often do you paint?', translation: 'C\'est sympa ! À quelle fréquence peins-tu ?' },
    { speaker: 'Aïcha', role: 'A', text: 'I paint once a month. But I hardly ever have free time.', translation: 'Je peins une fois par mois. Mais j\'ai rarement du temps libre.' },
    { speaker: 'Youssef', role: 'B', text: 'We should make time for hobbies! I travel three times a year.', translation: 'On devrait faire du temps pour les loisirs ! Je voyage trois fois par an.' },
  ],
  conversationTitle: 'Parler de la fréquence de ses loisirs',
  pronunciation: [
    { word: 'Once', phonetic: '/wʌns/', meaning: 'Une fois', tip: 'Prononcez "OUANNS" — le "w" est formé en arrondissant les lèvres. Pas "onse".' },
    { word: 'Twice', phonetic: '/twaɪs/', meaning: 'Deux fois', tip: 'Prononcez "TOUAÏS" — le "w" est formé en arrondissant les lèvres. Le "i" est long.' },
    { word: 'Hardly', phonetic: '/ˈhɑːrdli/', meaning: 'À peine', tip: 'L\'accent est sur "HARD" : "HARD-li". Le "ar" est long.' },
    { word: 'Often', phonetic: '/ˈɔːfən/', meaning: 'Souvent', tip: 'Prononcez "OF-fenn" — le "t" peut être silencieux en anglais britannique. Pas "of-ten".' },
  ],
}

// ─── a2-l10: Hobby Sounds (pronunciation) ───────────────────────────────────
export const A2_L10: LessonContent = {
  vocab: [
    { english: 'Photography', french: 'Photographie', phonetic: '/fəˈtɒɡrəfi/', example: 'Photography is her passion.', exampleTranslation: 'La photographie est sa passion.' },
    { english: 'Cycling', french: 'Cyclisme', phonetic: '/ˈsaɪklɪŋ/', example: 'We go cycling on Sunday mornings.', exampleTranslation: 'Nous faisons du vélo le dimanche matin.' },
    { english: 'Knitting', french: 'Tricot', phonetic: '/ˈnɪtɪŋ/', example: 'My aunt enjoys knitting scarves.', exampleTranslation: 'Ma tante aime tricoter des écharpes.' },
    { english: 'Hiking', french: 'Randonnée', phonetic: '/ˈhaɪkɪŋ/', example: 'Hiking in the mountains is exciting.', exampleTranslation: 'La randonnée en montagne est excitante.' },
  ],
  grammar: {
    title: 'Prononciation des loisirs — Pièges pour francophones',
    explanation: 'Les mots de loisirs en anglais ont des pièges de prononciation pour les francophones : "photography" = "fe-TO-gra-fi" (pas "fo-to-gra-fi"), "cycling" = "SAÏ-kling" (pas "si-kling"), "knitting" = "NI-ting" (le "k" est silencieux !), "hiking" = "HAÏ-king" (le "h" est expiré). Connaître la bonne prononciation est essentiel pour parler de ses loisirs.',
    examples: [
      { sentence: 'I enjoy phoTOGraphy.', translation: "J'aime la photographie.", isCorrect: true },
      { sentence: 'She likes FO-tography.', translation: '', isCorrect: false },
      { sentence: 'We go HIking every month.', translation: 'Nous faisons de la randonnée chaque mois.', isCorrect: true },
      { sentence: 'He is KNITting a scarf.', translation: 'Il tricote une écharpe.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She likes FO-tography.', correct: 'She enjoys phoTOGraphy.', explanation: 'L\'accent est sur la 2e syllabe : "fe-TO-gra-fi", pas "FO-to-gra-fi".' },
      { wrong: 'He is ke-NITting.', correct: 'He is KNITting.', explanation: 'Le "k" de "knitting" est SILENCIEUX : "NI-ting", pas "ke-NIT-ting" !' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'What are your hobbies, Moussa?', translation: 'Quels sont tes loisirs, Moussa ?' },
    { speaker: 'Moussa', role: 'B', text: 'I love photography and cycling! What about you?', translation: "J'adore la photographie et le cyclisme ! Et toi ?" },
    { speaker: 'Fatou', role: 'A', text: 'I enjoy hiking. I go hiking once a month with my friends.', translation: "J'aime la randonnée. Je fais de la randonnée une fois par mois avec mes amis." },
    { speaker: 'Moussa', role: 'B', text: 'My grandmother loves knitting. She makes beautiful scarves!', translation: 'Ma grand-mère adore le tricot. Elle fait de belles écharpes !' },
    { speaker: 'Fatou', role: 'A', text: 'That\'s lovely! We should share our hobbies with each other.', translation: "C'est charmant ! On devrait partager nos loisirs entre nous." },
    { speaker: 'Moussa', role: 'B', text: 'Great idea! I can teach you photography.', translation: "Bonne idée ! Je peux t'apprendre la photographie." },
  ],
  conversationTitle: 'Prononciation des loisirs',
  pronunciation: [
    { word: 'Photography', phonetic: '/fəˈtɒɡrəfi/', meaning: 'Photographie', tip: 'ATTENTION : on prononce "fe-TO-gra-fi" — le "ph" = "f", et la 2e syllabe porte l\'accent. Pas "fo-to-gra-fi".' },
    { word: 'Cycling', phonetic: '/ˈsaɪklɪŋ/', meaning: 'Cyclisme', tip: 'Prononcez "SAÏ-kling" — le "cy" = "saï" comme dans "bicycle".' },
    { word: 'Knitting', phonetic: '/ˈnɪtɪŋ/', meaning: 'Tricot', tip: 'Le "k" initial est silencieux : "NI-ting". Ne dites PAS "ke-ni-ting" !' },
    { word: 'Hiking', phonetic: '/ˈhaɪkɪŋ/', meaning: 'Randonnée', tip: 'Prononcez "HAÏ-king" — le "h" est expiré et le "i" est long comme dans "hi".' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 3: WEATHER & SEASONS (a2-l11 through a2-l15)
// ════════════════════════════════════════════════════════════════════════════════

// ─── a2-l11: Weather Vocabulary (vocabulary) ────────────────────────────────
export const A2_L11: LessonContent = {
  vocab: [
    { english: 'Sunny', french: 'Ensoleillé', phonetic: '/ˈsʌni/', example: 'It is sunny today.', exampleTranslation: "Il fait soleil aujourd'hui." },
    { english: 'Rainy', french: 'Pluvieux', phonetic: '/ˈreɪni/', example: 'It is a rainy day.', exampleTranslation: "C'est une journée pluvieuse." },
    { english: 'Cloudy', french: 'Nuageux', phonetic: '/ˈklaʊdi/', example: 'The sky is cloudy.', exampleTranslation: 'Le ciel est nuageux.' },
    { english: 'Windy', french: 'Venteux', phonetic: '/ˈwɪndi/', example: 'It is very windy today.', exampleTranslation: "Il fait très vent aujourd'hui." },
    { english: 'Snowy', french: 'Neigeux', phonetic: '/ˈsnoʊi/', example: 'The mountains are snowy.', exampleTranslation: 'Les montagnes sont enneigées.' },
  ],
  grammar: {
    title: 'Parler de la météo — It is + adjectif / It is + verbe-ing',
    explanation: 'Pour décrire la météo, deux structures : "It is + adjectif" : "It is sunny" (Il fait soleil), "It is cloudy" (Il fait nuageux), "It is windy" (Il fait du vent). OU "It is + verbe-ing" : "It is raining" (Il pleut), "It is snowing" (Il neige). ATTENTION : on dit "It is raining" (Il pleut), PAS "It rains" pour décrire la météo actuelle. Pour la température : "It is hot" (Il fait chaud), "It is cold" (Il fait froid), "It is warm" (Il fait doux).',
    examples: [
      { sentence: 'It is sunny today.', translation: "Il fait soleil aujourd'hui.", isCorrect: true },
      { sentence: 'It rains right now.', translation: '', isCorrect: false },
      { sentence: 'It is very windy outside.', translation: 'Il fait très vent dehors.', isCorrect: true },
      { sentence: 'It is snowing in the mountains.', translation: 'Il neige dans les montagnes.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'It rains right now.', correct: 'It is raining right now.', explanation: 'Pour la météo actuelle, on utilise le Present Continuous : "It is raining", pas "It rains".' },
      { wrong: 'The weather is sun.', correct: 'The weather is sunny. / It is sunny.', explanation: 'On utilise l\'adjectif "sunny", pas le nom "sun", pour décrire la météo.' },
    ],
  },
  conversation: [
    { speaker: 'Amina', role: 'A', text: 'What is the weather like today?', translation: 'Quel temps fait-il aujourd\'hui ?' },
    { speaker: 'Idrissa', role: 'B', text: 'It is cloudy and windy. Not very nice!', translation: 'Il fait nuageux et venteux. Pas très beau !' },
    { speaker: 'Amina', role: 'A', text: 'Is it raining?', translation: 'Pleut-il ?' },
    { speaker: 'Idrissa', role: 'B', text: 'No, it isn\'t raining yet. But it might rain later.', translation: 'Non, il ne pleut pas encore. Mais il pourrait pleuvoir plus tard.' },
    { speaker: 'Amina', role: 'A', text: 'In my country, it is always sunny at this time of year.', translation: 'Dans mon pays, il fait toujours soleil à cette époque de l\'année.' },
    { speaker: 'Idrissa', role: 'B', text: 'Lucky you! Here it is often rainy in winter.', translation: 'Tu as de la chance ! Ici il est souvent pluvieux en hiver.' },
  ],
  conversationTitle: 'Parler de la météo',
  pronunciation: [
    { word: 'Sunny', phonetic: '/ˈsʌni/', meaning: 'Ensoleillé', tip: 'Le "u" est très ouvert : "SEUN-ni". Pas "so-ni".' },
    { word: 'Cloudy', phonetic: '/ˈklaʊdi/', meaning: 'Nuageux', tip: 'Le "ou" = "aou" : "KLAOU-di". Pas "clo-di".' },
    { word: 'Windy', phonetic: '/ˈwɪndi/', meaning: 'Venteux', tip: 'Le "w" initial : arrondissez les lèvres. "OUIN-di". Le "i" est court.' },
    { word: 'Snowy', phonetic: '/ˈsnoʊi/', meaning: 'Neigeux', tip: 'Prononcez "SNO-ui" — le "ow" = "o" long + "i" bref.' },
  ],
}

// ─── a2-l12: It's Going to Rain (grammar) ───────────────────────────────────
export const A2_L12: LessonContent = {
  vocab: [
    { english: 'Forecast', french: 'Prévision', phonetic: '/ˈfɔːrkæst/', example: 'The forecast says it will rain.', exampleTranslation: 'La prévision dit qu\'il pleuvra.' },
    { english: 'Temperature', french: 'Température', phonetic: '/ˈtemprətʃər/', example: 'The temperature is thirty degrees.', exampleTranslation: 'La température est de trente degrés.' },
    { english: 'Degree', french: 'Degré', phonetic: '/dɪˈɡriː/', example: 'It is twenty degrees outside.', exampleTranslation: 'Il fait vingt degrés dehors.' },
    { english: 'Umbrella', french: 'Parapluie', phonetic: '/ʌmˈbrelə/', example: 'Don\'t forget your umbrella!', exampleTranslation: 'N\'oublie pas ton parapluie !' },
  ],
  grammar: {
    title: 'Le futur avec "going to" — Prédictions et intentions',
    explanation: 'Pour faire des prédictions basées sur des indices visibles : "It is going to rain" (Il va pleuvoir — je vois les nuages), "She is going to have a baby" (Elle va avoir un bébé). Formation : sujet + am/is/are + going to + verbe. "I am going to study", "It is going to snow", "We are going to travel". Négatif : "It isn\'t going to rain", "I am not going to go". Question : "Is it going to rain?", "Are you going to travel?". DIFFÉRENCE : "going to" = prédiction basée sur des preuves / intention ; "will" = décision spontanée.',
    examples: [
      { sentence: 'It is going to rain this afternoon.', translation: 'Il va pleuvoir cet après-midi.', isCorrect: true },
      { sentence: 'It will going to rain.', translation: '', isCorrect: false },
      { sentence: 'We are going to visit our grandmother.', translation: 'Nous allons rendre visite à notre grand-mère.', isCorrect: true },
      { sentence: 'She is going to have a baby next month.', translation: 'Elle va avoir un bébé le mois prochain.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'It will going to rain.', correct: 'It is going to rain.', explanation: 'On utilise "am/is/are going to", PAS "will going to". "Will" et "going to" ne se combinent pas.' },
      { wrong: 'It going to rain.', correct: 'It is going to rain.', explanation: 'Il faut le verbe "be" : "It IS going to rain", pas "It going to rain".' },
    ],
  },
  conversation: [
    { speaker: 'Oumar', role: 'A', text: 'Look at those clouds! It is going to rain.', translation: 'Regarde ces nuages ! Il va pleuvoir.' },
    { speaker: 'Mariama', role: 'B', text: 'You are right. I am going to bring my umbrella.', translation: 'Tu as raison. Je vais prendre mon parapluie.' },
    { speaker: 'Oumar', role: 'A', text: 'What does the forecast say?', translation: 'Que dit la prévision ?' },
    { speaker: 'Mariama', role: 'B', text: 'The temperature is going to drop to fifteen degrees.', translation: 'La température va baisser à quinze degrés.' },
    { speaker: 'Oumar', role: 'A', text: 'Are we going to have the picnic tomorrow?', translation: 'Allons-nous avoir le pique-nique demain ?' },
    { speaker: 'Mariama', role: 'B', text: 'I am not going to cancel it! But we are going to need warm clothes.', translation: 'Je ne vais pas l\'annuler ! Mais nous allons avoir besoin de vêtements chauds.' },
  ],
  conversationTitle: 'Prévisions météo et projets',
  pronunciation: [
    { word: 'Forecast', phonetic: '/ˈfɔːrkæst/', meaning: 'Prévision', tip: 'L\'accent est sur "FORE" : "FOR-cast". Le "a" est ouvert comme dans "cat".' },
    { word: 'Temperature', phonetic: '/ˈtemprətʃər/', meaning: 'Température', tip: 'Prononcez "TEM-pra-tcher" — 3 syllabes, pas "tem-pe-ra-ture" (4) !' },
    { word: 'Degree', phonetic: '/dɪˈɡriː/', meaning: 'Degré', tip: 'Prononcez "di-GRII" — l\'accent est sur "GREE" et le "ee" est long.' },
    { word: 'Umbrella', phonetic: '/ʌmˈbrelə/', meaning: 'Parapluie', tip: 'L\'accent est sur "BREL" : "am-BREL-a". Le "u" initial est ouvert.' },
  ],
}

// ─── a2-l13: Seasons & Activities (conversation) ────────────────────────────
export const A2_L13: LessonContent = {
  vocab: [
    { english: 'Spring', french: 'Printemps', phonetic: '/sprɪŋ/', example: 'Flowers bloom in spring.', exampleTranslation: 'Les fleurs fleurissent au printemps.' },
    { english: 'Summer', french: 'Été', phonetic: '/ˈsʌmər/', example: 'We go to the beach in summer.', exampleTranslation: 'Nous allons à la plage en été.' },
    { english: 'Autumn', french: 'Automne', phonetic: '/ˈɔːtəm/', example: 'Leaves fall in autumn.', exampleTranslation: 'Les feuilles tombent en automne.' },
    { english: 'Winter', french: 'Hiver', phonetic: '/ˈwɪntər/', example: 'It snows in winter.', exampleTranslation: 'Il neige en hiver.' },
  ],
  grammar: {
    title: 'Les saisons et les activités — "In" + saison, "In" + mois',
    explanation: 'On utilise "in" devant les saisons : "in spring" (au printemps), "in summer" (en été), "in autumn" (en automne), "in winter" (en hiver). ATTENTION : on ne met PAS d\'article : "in summer", PAS "in the summer" (sauf en américain). "Autumn" est britannique ; "fall" est américain. Pour les activités saisonnières : "We go swimming in summer", "People ski in winter".',
    examples: [
      { sentence: 'We travel a lot in summer.', translation: 'Nous voyageons beaucoup en été.', isCorrect: true },
      { sentence: 'In the winter, it is cold.', translation: '', isCorrect: false },
      { sentence: 'She loves walking in autumn.', translation: 'Elle aime marcher en automne.', isCorrect: true },
      { sentence: 'Flowers grow in spring.', translation: 'Les fleurs poussent au printemps.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'In the winter, it is cold.', correct: 'In winter, it is cold.', explanation: 'En anglais britannique, on ne met pas d\'article devant les saisons : "in winter", pas "in the winter".' },
      { wrong: 'On summer, we swim.', correct: 'In summer, we swim.', explanation: 'On utilise "in" avec les saisons, pas "on".' },
    ],
  },
  conversation: [
    { speaker: 'Amara', role: 'A', text: 'What is your favourite season?', translation: 'Quelle est ta saison préférée ?' },
    { speaker: 'Kofi', role: 'B', text: 'I love summer! We go to the beach and swim every day.', translation: "J'adore l'été ! Nous allons à la plage et nageons tous les jours." },
    { speaker: 'Amara', role: 'A', text: 'I prefer spring. The flowers are beautiful and the weather is warm.', translation: 'Je préfère le printemps. Les fleurs sont belles et le temps est doux.' },
    { speaker: 'Kofi', role: 'B', text: 'What do you do in winter?', translation: 'Que fais-tu en hiver ?' },
    { speaker: 'Amara', role: 'A', text: 'In winter, I stay home and read books. I don\'t like the cold!', translation: "En hiver, je reste à la maison et lis des livres. Je n'aime pas le froid !" },
    { speaker: 'Kofi', role: 'B', text: 'In autumn, the leaves change colour. It is very pretty!', translation: "En automne, les feuilles changent de couleur. C'est très joli !" },
  ],
  conversationTitle: 'Les saisons et leurs activités',
  pronunciation: [
    { word: 'Spring', phonetic: '/sprɪŋ/', meaning: 'Printemps', tip: 'Prononcez "SPRING" — le "ng" final : langue contre le palais, pas "sprin-g".' },
    { word: 'Summer', phonetic: '/ˈsʌmər/', meaning: 'Été', tip: 'Le "u" est très ouvert : "SEU-mer". Pas "sou-mer".' },
    { word: 'Autumn', phonetic: '/ˈɔːtəm/', meaning: 'Automne', tip: 'Prononcez "O-tem" — le "n" final est muet, contrairement au français "automne".' },
    { word: 'Winter', phonetic: '/ˈwɪntər/', meaning: 'Hiver', tip: 'Le "w" initial : arrondissez les lèvres. "OUIN-ter". Pas "vin-ter".' },
  ],
}

// ─── a2-l14: Comparing Weather (grammar) ───────────────────────────────────
export const A2_L14: LessonContent = {
  vocab: [
    { english: 'Hotter', french: 'Plus chaud', phonetic: '/ˈhɒtər/', example: 'Today is hotter than yesterday.', exampleTranslation: "Aujourd'hui est plus chaud qu'hier." },
    { english: 'Colder', french: 'Plus froid', phonetic: '/ˈkoʊldər/', example: 'Winter is colder than autumn.', exampleTranslation: "L'hiver est plus froid que l'automne." },
    { english: 'Wetter', french: 'Plus humide', phonetic: '/ˈwetər/', example: 'April is wetter than June.', exampleTranslation: 'Avril est plus humide que juin.' },
    { english: 'Drier', french: 'Plus sec', phonetic: '/ˈdraɪər/', example: 'Summer is drier than spring.', exampleTranslation: "L'été est plus sec que le printemps." },
  ],
  grammar: {
    title: 'Les comparatifs — Hotter than, colder than, as warm as',
    explanation: 'Pour comparer la météo, on utilise les comparatifs : Adjectifs courts (1 syllabe) + "-er + than" : "hotter than" (plus chaud que), "colder than" (plus froid que), "wetter than" (plus humide que). Adjectifs longs (2+ syllabes) + "more + than" : "more beautiful than" (plus beau que), "more humid than" (plus humide que). Pour dire "aussi...que" : "as + adjectif + as" : "as warm as" (aussi chaud que). ATTENTION : irréguliers : good → better than, bad → worse than.',
    examples: [
      { sentence: 'Today is hotter than yesterday.', translation: "Aujourd'hui est plus chaud qu'hier.", isCorrect: true },
      { sentence: 'Summer is more hot than spring.', translation: '', isCorrect: false },
      { sentence: 'This winter is as cold as last year.', translation: "Cet hiver est aussi froid que l'année dernière.", isCorrect: true },
      { sentence: 'The weather is worse than the forecast.', translation: 'Le temps est pire que la prévision.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Summer is more hot than spring.', correct: 'Summer is hotter than spring.', explanation: '"Hot" est un adjectif court : on ajoute "-er" → "hotter", pas "more hot".' },
      { wrong: 'Today is more colder than yesterday.', correct: 'Today is colder than yesterday.', explanation: 'On n\'utilise PAS "more" ET "-er" en même temps : "colder", pas "more colder".' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'Is it hotter in your country than here?', translation: 'Fait-il plus chaud dans ton pays qu\'ici ?' },
    { speaker: 'Moussa', role: 'B', text: 'Yes, much hotter! In summer, it is forty degrees.', translation: "Oui, bien plus chaud ! En été, il fait quarante degrés." },
    { speaker: 'Fatou', role: 'A', text: 'Wow! Is the dry season drier than the rainy season?', translation: 'Waouh ! La saison sèche est-elle plus sèche que la saison des pluies ?' },
    { speaker: 'Moussa', role: 'B', text: 'Yes, much drier. But the rainy season is wetter than here.', translation: 'Oui, bien plus sèche. Mais la saison des pluies est plus humide qu\'ici.' },
    { speaker: 'Fatou', role: 'A', text: 'Winter here is colder than I expected!', translation: "L'hiver ici est plus froid que ce que je m'attendais !" },
    { speaker: 'Moussa', role: 'B', text: 'Next year will be better. You will be used to it!', translation: "L'année prochaine sera meilleure. Tu y seras habitué !" },
  ],
  conversationTitle: 'Comparer la météo',
  pronunciation: [
    { word: 'Hotter', phonetic: '/ˈhɒtər/', meaning: 'Plus chaud', tip: 'Le "o" est ouvert comme dans "pot" : "HO-ter". L\'accent est sur "HOT".' },
    { word: 'Colder', phonetic: '/ˈkoʊldər/', meaning: 'Plus froid', tip: 'Prononcez "KOL-der" — le "o" est long et le "d" est prononcé.' },
    { word: 'Wetter', phonetic: '/ˈwetər/', meaning: 'Plus humide', tip: 'Le "w" initial : arrondissez les lèvres. "OUÉ-ter".' },
    { word: 'Drier', phonetic: '/ˈdraɪər/', meaning: 'Plus sec', tip: 'Prononcez "DRAÏ-er" — le "i" est long et le "er" final est doux.' },
  ],
}

// ─── a2-l15: Weather Sounds (pronunciation) ────────────────────────────────
export const A2_L15: LessonContent = {
  vocab: [
    { english: 'Breeze', french: 'Brise', phonetic: '/briːz/', example: 'A gentle breeze is blowing.', exampleTranslation: 'Une douce brise souffle.' },
    { english: 'Storm', french: 'Tempête', phonetic: '/stɔːrm/', example: 'A big storm is coming!', exampleTranslation: 'Une grosse tempête arrive !' },
    { english: 'Fog', french: 'Brouillard', phonetic: '/fɒɡ/', example: 'There is fog this morning.', exampleTranslation: 'Il y a du brouillard ce matin.' },
    { english: 'Thunder', french: 'Tonnerre', phonetic: '/ˈθʌndər/', example: 'I can hear thunder.', exampleTranslation: "J'entends le tonnerre." },
  ],
  grammar: {
    title: 'Prononciation des mots météo — Sons difficiles',
    explanation: 'Les mots de la météo ont des sons difficiles pour les francophones : "thunder" a le son "th" (langue entre les dents), "storm" a le son "or" long, "fog" a le "o" ouvert, "breeze" a le "z" final sonore. Le mot "temperature" se prononce "TEM-pra-tcher" (3 syllabes), pas "tem-pe-ra-ture" (4 syllabes comme en français).',
    examples: [
      { sentence: 'I can hear THUNder.', translation: "J'entends le tonnerre.", isCorrect: true },
      { sentence: 'There is a big STORM.', translation: 'Il y a une grosse tempête.', isCorrect: true },
      { sentence: 'I can hear ton-nerre.', translation: '', isCorrect: false },
      { sentence: 'The BREEZE is nice today.', translation: 'La brise est agréable aujourd\'hui.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I can hear ton-nerre.', correct: 'I can hear thunder.', explanation: '"Thunder" = "THUN-der" avec le son "th" (langue entre les dents). Pas "tonnerre" à la française !' },
      { wrong: 'There is a fog-g.', correct: 'There is fog.', explanation: '"Fog" se prononce "fog" avec un "g" final dur. Pas "fog-g" avec un "g" doux.' },
    ],
  },
  conversation: [
    { speaker: 'Aïcha', role: 'A', text: 'Listen! I can hear thunder in the distance.', translation: "Écoute ! J'entends le tonnerre au loin." },
    { speaker: 'Youssef', role: 'B', text: 'A storm is coming! The wind is getting stronger.', translation: 'Une tempête arrive ! Le vent devient plus fort.' },
    { speaker: 'Aïcha', role: 'A', text: 'There was fog this morning, but now it is clearing.', translation: "Il y avait du brouillard ce matin, mais ça s'éclaircit maintenant." },
    { speaker: 'Youssef', role: 'B', text: 'At least there is a nice breeze when the storm passes.', translation: 'Au moins il y a une bonne brise quand la tempête passe.' },
    { speaker: 'Aïcha', role: 'A', text: 'I prefer sunny days with a gentle breeze!', translation: "Je préfère les jours ensoleillés avec une douce brise !" },
    { speaker: 'Youssef', role: 'B', text: 'Me too! But we need the rain for the crops.', translation: 'Moi aussi ! Mais nous avons besoin de la pluie pour les récoltes.' },
  ],
  conversationTitle: 'Phénomènes météorologiques',
  pronunciation: [
    { word: 'Breeze', phonetic: '/briːz/', meaning: 'Brise', tip: 'Prononcez "BRIIZ" — le "ee" est long et le "z" final est sonore. Pas "briss".' },
    { word: 'Storm', phonetic: '/stɔːrm/', meaning: 'Tempête', tip: 'Le "or" est long : "STOR-M". Le "r" américain est prononcé.' },
    { word: 'Fog', phonetic: '/fɒɡ/', meaning: 'Brouillard', tip: 'Le "o" est ouvert : "FOG". Pas "fo-g" avec un "g" doux.' },
    { word: 'Thunder', phonetic: '/ˈθʌndər/', meaning: 'Tonnerre', tip: 'Le "th" est crucial : langue entre les dents, soufflez. "THUN-der". Pas "ton-der" !' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 4: AT THE RESTAURANT (a2-l16 through a2-l20)
// ════════════════════════════════════════════════════════════════════════════════

// ─── a2-l16: Restaurant Vocabulary (vocabulary) ────────────────────────────
export const A2_L16: LessonContent = {
  vocab: [
    { english: 'Menu', french: 'Menu / Carte', phonetic: '/ˈmenjuː/', example: 'Can I see the menu, please?', exampleTranslation: 'Puis-je voir le menu, s\'il vous plaît ?' },
    { english: 'Appetizer', french: 'Entrée', phonetic: '/ˈæpɪtaɪzər/', example: 'I would like an appetizer.', exampleTranslation: "Je voudrais une entrée." },
    { english: 'Main course', french: 'Plat principal', phonetic: '/meɪn kɔːrs/', example: 'The main course was delicious.', exampleTranslation: 'Le plat principal était délicieux.' },
    { english: 'Dessert', french: 'Dessert', phonetic: '/dɪˈzɜːrt/', example: 'Would you like a dessert?', exampleTranslation: 'Voulez-vous un dessert ?' },
    { english: 'Bill', french: 'L\'addition', phonetic: '/bɪl/', example: 'Can we have the bill, please?', exampleTranslation: "Pouvons-nous avoir l'addition, s'il vous plaît ?" },
  ],
  grammar: {
    title: 'Vocabulaire du restaurant — Pièges pour francophones',
    explanation: 'ATTENTION aux faux amis ! "Entrée" en français = "appetizer" ou "starter" en anglais (pas "entrée"!). "Entrée" en anglais américain = plat principal ! "Menu" en anglais = la carte (pas le repas du jour). "Bill" = l\'addition (britannique) ; "check" = l\'addition (américain). Pour commander : "I would like..." (Je voudrais...) est plus poli que "I want..." (Je veux...).',
    examples: [
      { sentence: 'I would like an appetizer, please.', translation: "Je voudrais une entrée, s'il vous plaît.", isCorrect: true },
      { sentence: 'Can I have the entry, please?', translation: '', isCorrect: false },
      { sentence: 'The main course was excellent.', translation: 'Le plat principal était excellent.', isCorrect: true },
      { sentence: 'Can we have the bill, please?', translation: "Pouvons-nous avoir l'addition, s'il vous plaît ?", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Can I have the entry, please?', correct: 'Can I have the appetizer / starter, please?', explanation: '"Entry" signifie "entrée" (porte/accès), pas "entrée" (plat). On dit "appetizer" ou "starter".' },
      { wrong: 'I want the chicken.', correct: 'I would like the chicken, please.', explanation: 'Au restaurant, on dit "I would like" (plus poli), pas "I want" (trop direct).' },
    ],
  },
  conversation: [
    { speaker: 'Waiter', role: 'A', text: 'Good evening! Here is the menu. Are you ready to order?', translation: 'Bonsoir ! Voici le menu. Êtes-vous prêt à commander ?' },
    { speaker: 'Amara', role: 'B', text: 'Yes! I would like the appetizer, please.', translation: "Oui ! Je voudrais l'entrée, s'il vous plaît." },
    { speaker: 'Waiter', role: 'A', text: 'And for your main course?', translation: 'Et pour votre plat principal ?' },
    { speaker: 'Amara', role: 'B', text: 'The grilled fish, please. And can I see the dessert menu?', translation: 'Le poisson grillé, s\'il vous plaît. Et puis-je voir le menu des desserts ?' },
    { speaker: 'Waiter', role: 'A', text: 'Of course! And to drink?', translation: 'Bien sûr ! Et pour boire ?' },
    { speaker: 'Amara', role: 'B', text: 'A glass of water, please. And the bill when you are ready.', translation: "Un verre d'eau, s'il vous plaît. Et l'addition quand vous êtes prêt." },
  ],
  conversationTitle: 'Au restaurant',
  pronunciation: [
    { word: 'Menu', phonetic: '/ˈmenjuː/', meaning: 'Menu / Carte', tip: 'Prononcez "MEN-iou" — l\'accent est sur "MEN". Pas "me-nu" à la française.' },
    { word: 'Appetizer', phonetic: '/ˈæpɪtaɪzər/', meaning: 'Entrée', tip: 'L\'accent est sur "AP" : "A-pe-taï-zer". Le "i" du milieu est réduit.' },
    { word: 'Dessert', phonetic: '/dɪˈzɜːrt/', meaning: 'Dessert', tip: 'L\'accent est sur "ZERT" : "di-ZERT". Pas "DES-sert" (2e syllabe) comme en français !' },
    { word: 'Bill', phonetic: '/bɪl/', meaning: 'L\'addition', tip: 'Prononcez "BIL" — le "i" est court. Pas "bil-le".' },
  ],
}

// ─── a2-l17: Ordering a Meal (conversation) ────────────────────────────────
export const A2_L17: LessonContent = {
  vocab: [
    { english: 'I would like', french: 'Je voudrais', phonetic: '/aɪ wʊd laɪk/', example: 'I would like the chicken, please.', exampleTranslation: 'Je voudrais le poulet, s\'il vous plaît.' },
    { english: 'Could I have', french: 'Pourrais-je avoir', phonetic: '/kʊd aɪ hæv/', example: 'Could I have more water?', exampleTranslation: "Pourrais-je avoir plus d'eau ?" },
    { english: 'I\'ll have', french: 'Je vais prendre', phonetic: '/aɪl hæv/', example: 'I\'ll have the fish.', exampleTranslation: 'Je vais prendre le poisson.' },
    { english: 'To go', french: 'À emporter', phonetic: '/tə ɡoʊ/', example: 'I\'d like that to go, please.', exampleTranslation: "Je voudrais ça à emporter, s'il vous plaît." },
  ],
  grammar: {
    title: 'Commander au restaurant — Phrases essentielles',
    explanation: 'Pour commander poliment : "I would like + plat" (Je voudrais), "I\'ll have + plat" (Je vais prendre), "Could I have + plat?" (Pourrais-je avoir). Pour demander quelque chose : "Could you bring me...?" (Pourriez-vous m\'apporter...?), "Can I have...?" (Puis-je avoir...?). Pour dire "à emporter" : "to go" (américain) ou "takeaway" (britannique). Pour dire "sur place" : "for here" ou "to eat in".',
    examples: [
      { sentence: 'I would like the grilled chicken, please.', translation: "Je voudrais le poulet grillé, s'il vous plaît.", isCorrect: true },
      { sentence: 'I want the fish.', translation: '', isCorrect: false },
      { sentence: 'Could I have some more water?', translation: "Pourrais-je avoir un peu plus d'eau ?", isCorrect: true },
      { sentence: 'I\'ll have the salad to go.', translation: "Je vais prendre la salade à emporter.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I want the fish.', correct: 'I would like the fish, please.', explanation: 'Au restaurant, "I want" est impoli. On dit "I would like" + "please".' },
      { wrong: 'I like the chicken.', correct: 'I would like the chicken.', explanation: '"I like" = j\'aime (préférence). "I would like" = je voudrais (demande). Ce sont différents !' },
    ],
  },
  conversation: [
    { speaker: 'Waiter', role: 'A', text: 'Are you ready to order?', translation: 'Êtes-vous prêt à commander ?' },
    { speaker: 'Oumar', role: 'B', text: 'Yes, I\'ll have the lamb with rice, please.', translation: 'Oui, je vais prendre l\'agneau avec du riz, s\'il vous plaît.' },
    { speaker: 'Waiter', role: 'A', text: 'Would you like an appetizer?', translation: 'Voudriez-vous une entrée ?' },
    { speaker: 'Oumar', role: 'B', text: 'Yes, I would like the soup. And could I have some bread?', translation: 'Oui, je voudrais la soupe. Et pourrais-je avoir du pain ?' },
    { speaker: 'Waiter', role: 'A', text: 'Of course! Is that for here or to go?', translation: 'Bien sûr ! C\'est sur place ou à emporter ?' },
    { speaker: 'Oumar', role: 'B', text: 'For here, please. And the bill at the end.', translation: "Sur place, s'il vous plaît. Et l'addition à la fin." },
  ],
  conversationTitle: 'Commander un repas',
  pronunciation: [
    { word: 'Like', phonetic: '/wʊd laɪk/', meaning: 'Voudrais', tip: 'Expression "would like" = voudrais. "Would" = "oud" et "like" = "laïk". L\'ensemble se contracte souvent : "I\'d like" = "aïd laïk".' },
    { word: 'Could', phonetic: '/kʊd aɪ/', meaning: 'Pourrais-je', tip: 'Expression "could I" = pourrais-je. Prononcez "KOUD aï" — le "l" est silencieux dans "could" ! Pas "kou-lid".' },
    { word: "I'll", phonetic: '/aɪl hæv/', meaning: 'Je vais prendre', tip: 'Expression "I\'ll have" = je vais prendre. "I\'ll" = "aïl" et "have" = "haev". Le "h" est expiré.' },
    { word: 'Go', phonetic: '/tə ɡoʊ/', meaning: 'À emporter', tip: 'Expression "to go" = à emporter. Prononcez "te GO" — le "to" se réduit à "te" devant le verbe.' },
  ],
}

// ─── a2-l18: Countable & Uncountable (grammar) ────────────────────────────
export const A2_L18: LessonContent = {
  vocab: [
    { english: 'Much', french: 'Beaucoup (indénombrable)', phonetic: '/mʌtʃ/', example: 'How much water do you need?', exampleTranslation: 'De combien d\'eau avez-vous besoin ?' },
    { english: 'Many', french: 'Beaucoup (dénombrable)', phonetic: '/ˈmeni/', example: 'How many eggs do we need?', exampleTranslation: 'De combien d\'œufs avons-nous besoin ?' },
    { english: 'Some', french: 'Du / De la / Quelques', phonetic: '/sʌm/', example: 'I would like some rice.', exampleTranslation: 'Je voudrais du riz.' },
    { english: 'Any', french: 'Du / De la (négatif/question)', phonetic: '/ˈeni/', example: 'Do you have any milk?', exampleTranslation: 'Avez-vous du lait ?' },
    { english: 'A few', french: 'Quelques (dénombrable)', phonetic: '/ə fjuː/', example: 'I need a few eggs.', exampleTranslation: "J'ai besoin de quelques œufs." },
  ],
  grammar: {
    title: 'Dénombrable et indénombrable — Much, many, some, any',
    explanation: 'Les noms DÉNOMBRABLES peuvent se compter : egg → eggs, apple → apples. Avec dénombrables : "many" (beaucoup), "a few" (quelques), "How many...?". Les noms INDÉNOMBRABLES ne peuvent pas se compter : water, rice, milk, bread, money. Avec indénombrables : "much" (beaucoup), "a little" (un peu), "How much...?". "Some" s\'utilise en phrase affirmative avec les deux. "Any" s\'utilise en question et négation avec les deux : "I don\'t have any rice", "Do you have any eggs?".',
    examples: [
      { sentence: 'How much rice do you need?', translation: 'De combien de riz avez-vous besoin ?', isCorrect: true },
      { sentence: 'How many rice do you need?', translation: '', isCorrect: false },
      { sentence: 'I would like some water, please.', translation: "Je voudrais de l'eau, s'il vous plaît.", isCorrect: true },
      { sentence: 'We don\'t have any milk.', translation: "Nous n'avons pas de lait.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'How many rice do you need?', correct: 'How much rice do you need?', explanation: '"Rice" est indénombrable ! On utilise "how much" avec les indénombrables, pas "how many".' },
      { wrong: 'I don\'t have some money.', correct: 'I don\'t have any money.', explanation: 'En phrase négative, on utilise "any", pas "some" : "I don\'t have any money".' },
    ],
  },
  conversation: [
    { speaker: 'Amina', role: 'A', text: 'How much rice should I cook for dinner?', translation: 'Combien de riz dois-je cuisiner pour le dîner ?' },
    { speaker: 'Kofi', role: 'B', text: 'We need a lot! How many people are coming?', translation: 'Il nous en faut beaucoup ! Combien de personnes viennent ?' },
    { speaker: 'Amina', role: 'A', text: 'Six people. Do we have any vegetables?', translation: 'Six personnes. Avons-nous des légumes ?' },
    { speaker: 'Kofi', role: 'B', text: 'Yes, we have a few tomatoes and some onions.', translation: 'Oui, nous avons quelques tomates et des oignons.' },
    { speaker: 'Amina', role: 'A', text: 'I need a little oil. Is there any in the kitchen?', translation: "J'ai besoin d'un peu d'huile. Y en a-t-il dans la cuisine ?" },
    { speaker: 'Kofi', role: 'B', text: 'Yes, there is some oil. But we don\'t have much salt.', translation: "Oui, il y a de l'huile. Mais nous n'avons pas beaucoup de sel." },
  ],
  conversationTitle: 'Quantités au restaurant et en cuisine',
  pronunciation: [
    { word: 'Much', phonetic: '/mʌtʃ/', meaning: 'Beaucoup', tip: 'Le "u" est très ouvert : "MEUTCH". Pas "moutch".' },
    { word: 'Many', phonetic: '/ˈmeni/', meaning: 'Beaucoup', tip: 'Prononcez "ME-ni" — le "a" est ouvert comme dans "bed".' },
    { word: 'Some', phonetic: '/sʌm/', meaning: 'Du / De la', tip: 'Prononcez "SEUM" — le "u" est très ouvert. Pas "some" avec un "o".' },
    { word: 'Any', phonetic: '/ˈeni/', meaning: 'Du (négatif)', tip: 'Prononcez "E-ni" — le "a" est ouvert comme dans "bed". Pas "é-ni".' },
  ],
}

// ─── a2-l19: Complaining Politely (conversation) ──────────────────────────
export const A2_L19: LessonContent = {
  vocab: [
    { english: 'Cold', french: 'Froid (nourriture)', phonetic: '/koʊld/', example: 'The soup is cold.', exampleTranslation: 'La soupe est froide.' },
    { english: 'Overcooked', french: 'Trop cuit', phonetic: '/ˌoʊvərˈkʊkt/', example: 'The meat is overcooked.', exampleTranslation: 'La viande est trop cuite.' },
    { english: 'Wrong', french: 'Faux / Mauvais', phonetic: '/rɔːŋ/', example: 'This is the wrong order.', translation: "C'est la mauvaise commande." },
    { english: 'Spicy', french: 'Épicé', phonetic: '/ˈspaɪsi/', example: 'The food is too spicy for me.', exampleTranslation: 'La nourriture est trop épicée pour moi.' },
  ],
  grammar: {
    title: 'Se plaindre poliment — I\'m sorry, but... / Could you...?',
    explanation: 'Pour se plaindre poliment au restaurant : "I\'m sorry, but..." (Je suis désolé, mais...), "Excuse me, but..." (Excusez-moi, mais...), "Could you please...?" (Pourriez-vous s\'il vous plaît...?). Exemples : "I\'m sorry, but the soup is cold", "Excuse me, but this is the wrong order", "Could you please bring me another one?". On NE DIT JAMAIS de façon agressive : "This is terrible!" ou "You made a mistake!". La politesse est essentielle.',
    examples: [
      { sentence: 'I\'m sorry, but the soup is cold.', translation: "Je suis désolé, mais la soupe est froide.", isCorrect: true },
      { sentence: 'This is terrible! Change it!', translation: '', isCorrect: false },
      { sentence: 'Excuse me, but I ordered the fish, not the chicken.', translation: "Excusez-moi, mais j'ai commandé du poisson, pas du poulet.", isCorrect: true },
      { sentence: 'Could you please bring me another one?', translation: "Pourriez-vous s'il vous plaît m'en apporter un autre ?", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'This is terrible! Change it!', correct: 'I\'m sorry, but this isn\'t what I ordered. Could you change it, please?', explanation: 'Au restaurant anglais, on se plaint toujours poliment avec "I\'m sorry, but" ou "Could you please".' },
      { wrong: 'You made a mistake.', correct: 'I think there might be a mistake with my order.', explanation: 'On utilise "I think there might be..." (atténué) au lieu de "You made a mistake" (direct et impoli).' },
    ],
  },
  conversation: [
    { speaker: 'Mariama', role: 'A', text: 'Excuse me, I\'m sorry but the food is overcooked.', translation: "Excusez-moi, je suis désolée mais la nourriture est trop cuite." },
    { speaker: 'Waiter', role: 'B', text: 'I am very sorry about that. Could I bring you something else?', translation: 'Je suis vraiment désolé. Puis-je vous apporter autre chose ?' },
    { speaker: 'Mariama', role: 'A', text: 'Yes, please. Also, this dish is too spicy for me.', translation: 'Oui, s\'il vous plaît. Aussi, ce plat est trop épicé pour moi.' },
    { speaker: 'Waiter', role: 'B', text: 'I apologize. I\'ll bring you a milder version right away.', translation: 'Je m\'excuse. Je vais vous apporter une version moins épicée tout de suite.' },
    { speaker: 'Mariama', role: 'A', text: 'Thank you. And could I have some more water, please?', translation: "Merci. Et pourrais-je avoir plus d'eau, s'il vous plaît ?" },
    { speaker: 'Waiter', role: 'B', text: 'Of course! The water is on the house. I\'m sorry for the inconvenience.', translation: 'Bien sûr ! L\'eau est offerte. Je suis désolé pour le désagrément.' },
  ],
  conversationTitle: 'Se plaindre poliment au restaurant',
  pronunciation: [
    { word: 'Overcooked', phonetic: '/ˌoʊvərˈkʊkt/', meaning: 'Trop cuit', tip: 'L\'accent est sur "COOKED" : "o-ver-KOUKT". Le "ed" se prononce "t" après un son sourd.' },
    { word: 'Wrong', phonetic: '/rɔːŋ/', meaning: 'Faux', tip: 'Le "w" est silencieux ! Prononcez "RON-G" (ng contre le palais). Pas "ou-ron-g" !' },
    { word: 'Spicy', phonetic: '/ˈspaɪsi/', meaning: 'Épicé', tip: 'Prononcez "SPAÏ-si" — le "i" du premier syllabe est long.' },
    { word: 'Apologize', phonetic: '/əˈpɒlədʒaɪz/', meaning: 'S\'excuser', tip: 'L\'accent est sur "POL" : "a-POL-e-djaïz". Pas "a-po-lo-GIZE".' },
  ],
}

// ─── a2-l20: Restaurant Sounds (pronunciation) ────────────────────────────
export const A2_L20: LessonContent = {
  vocab: [
    { english: 'Waiter', french: 'Serveur', phonetic: '/ˈweɪtər/', example: 'Waiter, could we order?', exampleTranslation: 'Serveur, pourrions-nous commander ?' },
    { english: 'Tip', french: 'Pourboire', phonetic: '/tɪp/', example: 'Should we leave a tip?', exampleTranslation: 'Devrions-nous laisser un pourboire ?' },
    { english: 'Reservation', french: 'Réservation', phonetic: '/ˌrezərˈveɪʃən/', example: 'I have a reservation for two.', exampleTranslation: "J'ai une réservation pour deux." },
    { english: 'Service', french: 'Service', phonetic: '/ˈsɜːrvɪs/', example: 'The service was excellent.', exampleTranslation: 'Le service était excellent.' },
  ],
  grammar: {
    title: 'Prononciation au restaurant — Mots souvent mal prononcés',
    explanation: 'Les mots du restaurant ont souvent des prononciations inattendues : "waiter" = "OUÉ-ter" (pas "ouai-ter"), "dessert" = "di-ZERT" (accent sur la 2e syllabe, pas la 1re), "reservation" = "re-zer-VÉ-chen" (accent sur "VA", pas "tion"), "menu" = "MEN-iou" (pas "me-nu"). Connaître ces prononciations est essentiel pour être compris au restaurant.',
    examples: [
      { sentence: 'WAITer, could we order?', translation: 'Serveur, pourrions-nous commander ?', isCorrect: true },
      { sentence: 'I have a reserVA tion.', translation: '', isCorrect: false },
      { sentence: 'The SERvice was excellent.', translation: 'Le service était excellent.', isCorrect: true },
      { sentence: 'Should we leave a TIP?', translation: 'Devrions-nous laisser un pourboire ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I have a reserVA tion.', correct: 'I have a reserVA tion.', explanation: 'La prononciation correcte est "re-zer-VÉ-chen" — l\'accent est sur "VA" et "tion" = "chen".' },
      { wrong: 'The des-SERT was good.', correct: 'The de-ZERT was good.', explanation: '"Dessert" = "di-ZERT" avec l\'accent sur la 2e syllabe. Ne confondez pas avec "desert" (désert) = "DE-zert".' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'That was a delicious meal! The service was excellent.', translation: "C'était un repas délicieux ! Le service était excellent." },
    { speaker: 'Moussa', role: 'B', text: 'Yes! Should we leave a tip?', translation: 'Oui ! Devrions-nous laisser un pourboire ?' },
    { speaker: 'Fatou', role: 'A', text: 'Yes, the waiter was very helpful. Let\'s leave fifteen percent.', translation: 'Oui, le serveur était très serviable. Laissons quinze pour cent.' },
    { speaker: 'Moussa', role: 'B', text: 'Good idea. Next time, I\'ll make a reservation in advance.', translation: 'Bonne idée. La prochaine fois, je ferai une réservation à l\'avance.' },
    { speaker: 'Fatou', role: 'A', text: 'The dessert was amazing! I love this restaurant.', translation: "Le dessert était incroyable ! J'adore ce restaurant." },
    { speaker: 'Moussa', role: 'B', text: 'Me too! Let\'s come back for the appetizer next time.', translation: "Moi aussi ! Revenons pour l'entrée la prochaine fois." },
  ],
  conversationTitle: 'Bilan du repas au restaurant',
  pronunciation: [
    { word: 'Waiter', phonetic: '/ˈweɪtər/', meaning: 'Serveur', tip: 'Prononcez "OUÉ-ter" — le "w" initial requires lèvres arrondies. L\'accent est sur "WAIT".' },
    { word: 'Tip', phonetic: '/tɪp/', meaning: 'Pourboire', tip: 'Prononcez "TIP" — le "i" est court. Pas "tipe".' },
    { word: 'Reservation', phonetic: '/ˌrezərˈveɪʃən/', meaning: 'Réservation', tip: 'L\'accent est sur "VA" : "re-zer-VÉ-chen". Le "tion" = "chen", pas "tion".' },
    { word: 'Service', phonetic: '/ˈsɜːrvɪs/', meaning: 'Service', tip: 'L\'accent est sur "SER" : "SER-vis". Pas "ser-VISS" à la française.' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 5: HEALTH & BODY (a2-l21 through a2-l25)
// ════════════════════════════════════════════════════════════════════════════════

// ─── a2-l21: Body Parts (vocabulary) ──────────────────────────────────────
export const A2_L21: LessonContent = {
  vocab: [
    { english: 'Head', french: 'Tête', phonetic: '/hed/', example: 'I have a pain in my head.', exampleTranslation: "J'ai mal à la tête." },
    { english: 'Shoulder', french: 'Épaule', phonetic: '/ˈʃoʊldər/', example: 'My shoulder hurts.', exampleTranslation: "Mon épaule me fait mal." },
    { english: 'Arm', french: 'Bras', phonetic: '/ɑːrm/', example: 'She broke her arm.', exampleTranslation: 'Elle s\'est cassé le bras.' },
    { english: 'Leg', french: 'Jambe', phonetic: '/leɡ/', example: 'My leg is sore.', exampleTranslation: 'Ma jambe est endolorie.' },
    { english: 'Chest', french: 'Poitrine', phonetic: '/tʃest/', example: 'I have a pain in my chest.', exampleTranslation: "J'ai mal à la poitrine." },
  ],
  grammar: {
    title: 'Parler des douleurs — My ___ hurts / I have a pain in my ___',
    explanation: 'Pour dire qu\'on a mal quelque part : "My + partie du corps + hurts" (Mon/ma ___ me fait mal) : "My head hurts", "My arm hurts". OU "I have a pain in my + partie du corps" : "I have a pain in my chest". OU "I have a + problème" : "I have a headache", "I have a fever". ATTENTION : on dit "my head" (ma tête), pas "the head". On utilise toujours le possessif pour parler de son propre corps.',
    examples: [
      { sentence: 'My head hurts.', translation: 'J\'ai mal à la tête.', isCorrect: true },
      { sentence: 'The head hurts.', translation: '', isCorrect: false },
      { sentence: 'I have a pain in my shoulder.', translation: "J'ai mal à l'épaule.", isCorrect: true },
      { sentence: 'She broke her arm yesterday.', translation: 'Elle s\'est cassé le bras hier.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The head hurts.', correct: 'My head hurts.', explanation: 'Pour parler de son propre corps, on utilise le possessif : "my head", pas "the head".' },
      { wrong: 'I have pain in the chest.', correct: 'I have a pain in my chest.', explanation: 'On dit "a pain in my chest" avec l\'article "a" et le possessif "my".' },
    ],
  },
  conversation: [
    { speaker: 'Oumar', role: 'A', text: 'Are you okay? You don\'t look well.', translation: "Ça va ? Tu n'as pas l'air bien." },
    { speaker: 'Amina', role: 'B', text: 'My head hurts and my shoulder is sore.', translation: "J'ai mal à la tête et mon épaule est endolorie." },
    { speaker: 'Oumar', role: 'A', text: 'Do you have a pain in your chest too?', translation: 'As-tu aussi mal à la poitrine ?' },
    { speaker: 'Amina', role: 'B', text: 'No, but my legs are tired from running.', translation: 'Non, mais mes jambes sont fatiguées d\'avoir couru.' },
    { speaker: 'Oumar', role: 'A', text: 'You should rest. I can help you.', translation: 'Tu devrais te reposer. Je peux t\'aider.' },
    { speaker: 'Amina', role: 'B', text: 'Thank you! I will lie down for a bit.', translation: 'Merci ! Je vais m\'allonger un peu.' },
  ],
  conversationTitle: 'Parler de son corps',
  pronunciation: [
    { word: 'Head', phonetic: '/hed/', meaning: 'Tête', tip: 'Prononcez "HÉD" — le "h" est expiré et le "ea" = "é". Pas "hide".' },
    { word: 'Shoulder', phonetic: '/ˈʃoʊldər/', meaning: 'Épaule', tip: 'Prononcez "CHOL-der" — le "ou" est long. Pas "choul-der".' },
    { word: 'Chest', phonetic: '/tʃest/', meaning: 'Poitrine', tip: 'Le "ch" = "tch" : "TCHEST". Pas "kest" ni "cest".' },
    { word: 'Arm', phonetic: '/ɑːrm/', meaning: 'Bras', tip: 'Le "ar" est long : "AARM". Le "r" américain est prononcé. Pas "erm".' },
  ],
}

// ─── a2-l22: Common Illnesses (vocabulary) ────────────────────────────────
export const A2_L22: LessonContent = {
  vocab: [
    { english: 'Headache', french: 'Mal de tête', phonetic: '/ˈhedeɪk/', example: 'I have a terrible headache.', exampleTranslation: "J'ai un mal de tête terrible." },
    { english: 'Fever', french: 'Fièvre', phonetic: '/ˈfiːvər/', example: 'She has a high fever.', exampleTranslation: 'Elle a une forte fièvre.' },
    { english: 'Cold', french: 'Rhume', phonetic: '/koʊld/', example: 'I have a cold.', exampleTranslation: "J'ai un rhume." },
    { english: 'Cough', french: 'Toux', phonetic: '/kɒf/', example: 'His cough is getting worse.', exampleTranslation: 'Sa toux empire.' },
    { english: 'Sore throat', french: 'Mal de gorge', phonetic: '/sɔːr θroʊt/', example: 'I have a sore throat.', exampleTranslation: "J'ai mal à la gorge." },
  ],
  grammar: {
    title: 'Parler des maladies — I have a + maladie',
    explanation: 'Pour parler de ses symptômes : "I have a + maladie" : "I have a headache", "I have a cold", "I have a fever". ATTENTION : on dit "I have a headache" (J\'ai un mal de tête), PAS "My head aches" (moins naturel). Pour le rhume : "I have a cold" (pas "I have cold" — il faut l\'article "a"). Pour la fièvre : "I have a fever" ou "I have a temperature". "Sore" = endolori/douloureux : "sore throat" (mal de gorge), "sore eyes" (yeux douloureux).',
    examples: [
      { sentence: 'I have a headache.', translation: "J'ai mal à la tête.", isCorrect: true },
      { sentence: 'I have cold.', translation: '', isCorrect: false },
      { sentence: 'She has a sore throat and a cough.', translation: "Elle a mal à la gorge et une toux.", isCorrect: true },
      { sentence: 'He has a high fever.', translation: 'Il a une forte fièvre.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I have cold.', correct: 'I have a cold.', explanation: 'On dit "I have A cold" avec l\'article "a". "Cold" sans article signifie "froid".' },
      { wrong: 'I have hurt head.', correct: 'I have a headache.', explanation: 'On dit "I have a headache", pas "I have hurt head". Le mot composé "headache" est un seul mot.' },
    ],
  },
  conversation: [
    { speaker: 'Aïcha', role: 'A', text: 'How are you feeling today?', translation: 'Comment te sens-tu aujourd\'hui ?' },
    { speaker: 'Youssef', role: 'B', text: 'Not good. I have a headache and a sore throat.', translation: "Pas bien. J'ai mal à la tête et à la gorge." },
    { speaker: 'Aïcha', role: 'A', text: 'Do you have a fever too?', translation: 'As-tu aussi de la fièvre ?' },
    { speaker: 'Youssef', role: 'B', text: 'Yes, I have a slight fever. And a bad cough.', translation: "Oui, j'ai une légère fièvre. Et une mauvaise toux." },
    { speaker: 'Aïcha', role: 'A', text: 'That sounds like a bad cold. You should see a doctor.', translation: "On dirait un mauvais rhume. Tu devrais voir un médecin." },
    { speaker: 'Youssef', role: 'B', text: 'You are right. I will make an appointment today.', translation: "Tu as raison. Je vais prendre rendez-vous aujourd'hui." },
  ],
  conversationTitle: 'Parler de ses symptômes',
  pronunciation: [
    { word: 'Headache', phonetic: '/ˈhedeɪk/', meaning: 'Mal de tête', tip: 'Prononcez "HÉ-déik" — c\'est un mot composé : "head" + "ache". Pas "hed-atch".' },
    { word: 'Fever', phonetic: '/ˈfiːvər/', meaning: 'Fièvre', tip: 'Prononcez "FII-ver" — le "ee" est long et le "v" est doux.' },
    { word: 'Cough', phonetic: '/kɒf/', meaning: 'Toux', tip: 'Le "ough" = "o" court : "KOF". Pas "kaou-f" ! Comme dans "off".' },
    { word: 'Throat', phonetic: '/sɔːr θroʊt/', meaning: 'Mal de gorge', tip: 'Expression "sore throat" = mal de gorge. Le "th" est expiré : langue entre les dents, soufflez. "SOR THROUT".' },
  ],
}

// ─── a2-l23: At the Doctor (conversation) ────────────────────────────────
export const A2_L23: LessonContent = {
  vocab: [
    { english: 'Symptom', french: 'Symptôme', phonetic: '/ˈsɪmptəm/', example: 'What are your symptoms?', exampleTranslation: 'Quels sont vos symptômes ?' },
    { english: 'Medicine', french: 'Médicament', phonetic: '/ˈmedɪsɪn/', example: 'Take this medicine twice a day.', exampleTranslation: 'Prenez ce médicament deux fois par jour.' },
    { english: 'Prescription', french: 'Ordonnance', phonetic: '/prɪˈskrɪpʃən/', example: 'I need a prescription for this medicine.', exampleTranslation: "J'ai besoin d'une ordonnance pour ce médicament." },
    { english: 'Appointment', french: 'Rendez-vous', phonetic: '/əˈpɔɪntmənt/', example: 'I have a doctor\'s appointment at three.', exampleTranslation: "J'ai un rendez-vous chez le médecin à trois heures." },
  ],
  grammar: {
    title: 'Chez le médecin — Phrases essentielles',
    explanation: 'Au cabinet médical : "I have an appointment with Dr. Smith" (J\'ai un rendez-vous avec le Dr Smith). Le médecin demande : "What seems to be the problem?" (Quel semble être le problème ?), "What are your symptoms?" (Quels sont vos symptômes ?). Vous répondez : "I have a headache and a fever", "My throat hurts". Le médecin peut dire : "You should rest" (Vous devriez vous reposer), "Take this medicine" (Prenez ce médicament), "I\'ll give you a prescription" (Je vais vous donner une ordonnance).',
    examples: [
      { sentence: 'What seems to be the problem?', translation: 'Quel semble être le problème ?', isCorrect: true },
      { sentence: 'What is your problem?', translation: '', isCorrect: false },
      { sentence: 'I have a headache and a sore throat.', translation: "J'ai mal à la tête et à la gorge.", isCorrect: true },
      { sentence: 'You should take this medicine twice a day.', translation: 'Vous devriez prendre ce médicament deux fois par jour.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'What is your problem?', correct: 'What seems to be the problem?', explanation: 'Au cabinet médical, on dit "What seems to be the problem?" (plus poli/professionnel), pas "What is your problem?" (trop direct).' },
      { wrong: 'I have appointment.', correct: 'I have an appointment.', explanation: 'On dit "an appointment" avec l\'article "an", pas sans article.' },
    ],
  },
  conversation: [
    { speaker: 'Doctor', role: 'A', text: 'Good morning, Amina. What seems to be the problem?', translation: 'Bonjour, Amina. Quel semble être le problème ?' },
    { speaker: 'Amina', role: 'B', text: 'I have a terrible headache and a sore throat.', translation: "J'ai un mal de tête terrible et mal à la gorge." },
    { speaker: 'Doctor', role: 'A', text: 'How long have you had these symptoms?', translation: 'Depuis combien de temps avez-vous ces symptômes ?' },
    { speaker: 'Amina', role: 'B', text: 'Since yesterday. I also have a slight cough.', translation: "Depuis hier. J'ai aussi une légère toux." },
    { speaker: 'Doctor', role: 'A', text: 'I see. You should rest and drink plenty of water. I\'ll give you a prescription.', translation: "Je vois. Vous devriez vous reposer et boire beaucoup d'eau. Je vais vous donner une ordonnance." },
    { speaker: 'Amina', role: 'B', text: 'Thank you, Doctor. How often should I take the medicine?', translation: "Merci, Docteur. À quelle fréquence dois-je prendre le médicament ?" },
  ],
  conversationTitle: 'Chez le médecin',
  pronunciation: [
    { word: 'Symptom', phonetic: '/ˈsɪmptəm/', meaning: 'Symptôme', tip: 'L\'accent est sur "SIM" : "SIMP-tem". Pas "sim-PTOME" à la française.' },
    { word: 'Medicine', phonetic: '/ˈmedɪsɪn/', meaning: 'Médicament', tip: 'Prononcez "MED-i-sin" — l\'accent est sur "MED" et le "i" final est court. Pas "mé-di-CINE".' },
    { word: 'Prescription', phonetic: '/prɪˈskrɪpʃən/', meaning: 'Ordonnance', tip: 'L\'accent est sur "SCRIP" : "pri-SKRIP-chen". Le "tion" = "chen".' },
    { word: 'Appointment', phonetic: '/əˈpɔɪntmənt/', meaning: 'Rendez-vous', tip: 'L\'accent est sur "POINT" : "e-POINT-ment". Le premier "a" est réduit.' },
  ],
}

// ─── a2-l24: Should / Must (grammar) ────────────────────────────────────
export const A2_L24: LessonContent = {
  vocab: [
    { english: 'Should', french: 'Devrait (conseil)', phonetic: '/ʃʊd/', example: 'You should see a doctor.', exampleTranslation: 'Tu devrais voir un médecin.' },
    { english: 'Must', french: 'Doit (obligation)', phonetic: '/mʌst/', example: 'You must take your medicine.', exampleTranslation: 'Tu dois prendre ton médicament.' },
    { english: 'Ought to', french: 'Devrait (conseil)', phonetic: '/ˈɔːt tə/', example: 'You ought to rest more.', exampleTranslation: 'Tu devrais te reposer davantage.' },
    { english: 'Need to', french: 'A besoin de', phonetic: '/niːd tə/', example: 'You need to drink water.', exampleTranslation: 'Tu as besoin de boire de l\'eau.' },
  ],
  grammar: {
    title: 'Should / Must — Donner des conseils et des obligations',
    explanation: '"Should" = conseil (recommandation) : "You should rest" (Tu devrais te reposer — c\'est mon conseil). "Must" = obligation forte (nécessité) : "You must take your medicine" (Tu dois prendre ton médicament — c\'est obligatoire). "Ought to" = conseil (comme "should", plus formel) : "You ought to see a doctor". "Need to" = nécessité : "You need to drink water" (Tu as besoin de boire de l\'eau). Négatif : "shouldn\'t" (ne devrait pas — conseil), "mustn\'t" (ne doit pas — interdiction forte). ATTENTION : "mustn\'t" ≠ "don\'t have to" (pas obligatoire).',
    examples: [
      { sentence: 'You should drink more water.', translation: 'Tu devrais boire plus d\'eau.', isCorrect: true },
      { sentence: 'You must to take your medicine.', translation: '', isCorrect: false },
      { sentence: 'You mustn\'t eat junk food when you are sick.', translation: 'Tu ne dois pas manger de la malbouffe quand tu es malade.', isCorrect: true },
      { sentence: 'She ought to see a doctor.', translation: 'Elle devrait voir un médecin.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'You must to take your medicine.', correct: 'You must take your medicine.', explanation: 'Après "must" et "should", on utilise le verbe SANS "to" : "must take", pas "must to take".' },
      { wrong: 'You mustn\'t go to work today. (pas obligatoire)', correct: 'You don\'t have to go to work today.', explanation: '"Mustn\'t" = interdiction. "Don\'t have to" = pas obligatoire. Ce sont différents !' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'I have a bad cough and a fever.', translation: "J'ai une mauvaise toux et de la fièvre." },
    { speaker: 'Kofi', role: 'B', text: 'You should see a doctor immediately.', translation: 'Tu devrais voir un médecin immédiatement.' },
    { speaker: 'Fatou', role: 'A', text: 'I must go to work today. I can\'t stay home.', translation: "Je dois aller au travail aujourd'hui. Je ne peux pas rester à la maison." },
    { speaker: 'Kofi', role: 'B', text: 'You mustn\'t go to work when you are sick! You need to rest.', translation: "Tu ne dois pas aller au travail quand tu es malade ! Tu as besoin de te reposer." },
    { speaker: 'Fatou', role: 'A', text: 'You are right. I ought to take care of my health first.', translation: "Tu as raison. Je devrais prendre soin de ma santé d'abord." },
    { speaker: 'Kofi', role: 'B', text: 'Yes! You should drink lots of water and get plenty of sleep.', translation: 'Oui ! Tu devrais boire beaucoup d\'eau et bien dormir.' },
  ],
  conversationTitle: 'Conseils de santé',
  pronunciation: [
    { word: 'Should', phonetic: '/ʃʊd/', meaning: 'Devrait', tip: 'Prononcez "CHOUD" — le "l" est SILENCIEUX ! Ne dites PAS "choul-d".' },
    { word: 'Must', phonetic: '/mʌst/', meaning: 'Doit', tip: 'Le "u" est très ouvert : "MEUST". Le "t" final peut être léger.' },
    { word: 'Ought', phonetic: '/ˈɔːt tə/', meaning: 'Devrait', tip: 'Expression "ought to" = devrait. Prononcez "OT-te" — le "gh" est silencieux et le "to" se réduit.' },
    { word: "Mustn't", phonetic: '/ˈmʌsənt/', meaning: 'Ne doit pas', tip: 'Expression "mustn\'t" = ne doit pas. Prononcez "MEU-sent" — le premier "t" disparaît ! Pas "meust-nent".' },
  ],
}

// ─── a2-l25: Health Sounds (pronunciation) ───────────────────────────────
export const A2_L25: LessonContent = {
  vocab: [
    { english: 'Pain', french: 'Douleur', phonetic: '/peɪn/', example: 'I have a pain in my back.', exampleTranslation: "J'ai mal au dos." },
    { english: 'Sick', french: 'Malade', phonetic: '/sɪk/', example: 'I feel sick today.', exampleTranslation: "Je me sens malade aujourd'hui." },
    { english: 'Recovery', french: 'Guérison', phonetic: '/rɪˈkʌvəri/', example: 'Her recovery was quick.', exampleTranslation: 'Sa guérison a été rapide.' },
    { english: 'Health', french: 'Santé', phonetic: '/helθ/', example: 'Health is the most important thing.', exampleTranslation: 'La santé est la chose la plus importante.' },
  ],
  grammar: {
    title: 'Prononciation des mots de santé — Sons difficiles',
    explanation: 'Les mots de santé ont des sons particulièrement difficiles pour les francophones : "health" a le son "th" expiré + "l" = "helth", "cough" se prononce "kof" (pas "kaouf"), "sick" = "sik" (pas "sikke"), "pain" = "péïn" (pas "pen"). Le mot "cholesterol" se prononce "ko-LES-te-rol". Le son "th" dans "throat", "health", "tooth" est toujours expiré.',
    examples: [
      { sentence: 'HEALTH is important.', translation: 'La santé est importante.', isCorrect: true },
      { sentence: 'I have a PAIN in my back.', translation: "J'ai mal au dos.", isCorrect: true },
      { sentence: 'I feel SIKKE today.', translation: '', isCorrect: false },
      { sentence: 'Her reCOVery was quick.', translation: 'Sa guérison a été rapide.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I feel SIKKE today.', correct: 'I feel sick today.', explanation: '"Sick" = "SIK" — un seul son bref. Pas "sikke" avec un "e" ajouté.' },
      { wrong: 'HealTH is important.', correct: 'Health is important.', explanation: '"Health" = "HELTH" — l\'accent est sur "HEL" et le "th" est expiré. Pas "éal-th".' },
    ],
  },
  conversation: [
    { speaker: 'Amara', role: 'A', text: 'How is your health these days?', translation: 'Comment va ta santé ces jours-ci ?' },
    { speaker: 'Idrissa', role: 'B', text: 'Much better! My recovery took two weeks.', translation: 'Beaucoup mieux ! Ma guérison a pris deux semaines.' },
    { speaker: 'Amara', role: 'A', text: 'That\'s good. Health is really the most important thing.', translation: "C'est bien. La santé est vraiment la chose la plus importante." },
    { speaker: 'Idrissa', role: 'B', text: 'Yes! When you feel sick, you appreciate being healthy.', translation: "Oui ! Quand on se sent malade, on apprécie d'être en bonne santé." },
    { speaker: 'Amara', role: 'A', text: 'I had a pain in my shoulder last week, but it is gone now.', translation: "J'avais mal à l'épaule la semaine dernière, mais c'est passé maintenant." },
    { speaker: 'Idrissa', role: 'B', text: 'You should exercise regularly. It helps prevent pain.', translation: "Tu devrais faire de l'exercice régulièrement. Ça aide à prévenir la douleur." },
  ],
  conversationTitle: 'Santé et guérison',
  pronunciation: [
    { word: 'Pain', phonetic: '/peɪn/', meaning: 'Douleur', tip: 'Prononcez "PÉÏN" — le "ai" = "éi" comme dans "day". Ne confondez pas avec "pen" (stylo) = "penn".' },
    { word: 'Sick', phonetic: '/sɪk/', meaning: 'Malade', tip: 'Prononcez "SIK" — le "i" est court. Pas "sikke" avec un "e" ajouté.' },
    { word: 'Recovery', phonetic: '/rɪˈkʌvəri/', meaning: 'Guérison', tip: 'L\'accent est sur "COV" : "ri-KEU-ve-ri". Le "e" final est réduit.' },
    { word: 'Health', phonetic: '/helθ/', meaning: 'Santé', tip: 'Le "th" est expiré : langue entre les dents, soufflez. "HELTH". Pas "éal-th".' },
  ],
}
