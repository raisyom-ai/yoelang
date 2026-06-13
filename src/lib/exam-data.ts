// YOELANG Exam Data - Comprehensive exam questions for levels A1-C2
// English learning app for French speakers
// Each level has 20 questions: 5 grammar, 5 vocabulary, 5 translation, 5 conjugaison

export interface ExamQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  type: 'grammar' | 'vocabulary' | 'translation' | 'conjugaison'
  explanation: string
}

export interface LevelExam {
  level: string
  title: string
  description: string
  passingScore: number
  xpReward: number
  questions: ExamQuestion[]
}

export const EXAM_PASSING_SCORE = 70 // 70% to pass (14/20)

export const EXAM_XP_REWARD: Record<string, number> = {
  A1: 100,
  A2: 150,
  B1: 200,
  B2: 250,
  C1: 300,
  C2: 500,
}

export const LEVEL_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

export const getNextLevel = (currentLevel: string): string | null => {
  const idx = LEVEL_ORDER.indexOf(currentLevel)
  return idx < LEVEL_ORDER.length - 1 ? LEVEL_ORDER[idx + 1] : null
}

// ============================================================
// A1 - Débutant (Beginner)
// ============================================================
const a1Exam: LevelExam = {
  level: 'A1',
  title: 'Examen A1 – Débutant',
  description: 'Testez vos connaissances de base en anglais : salutations, présentations, verbes essentiels et vocabulaire courant.',
  passingScore: EXAM_PASSING_SCORE,
  xpReward: EXAM_XP_REWARD.A1,
  questions: [
    // --- Grammar (5) ---
    {
      id: 'a1-g1',
      question: "Complétez : « I ___ a student. »",
      options: ['am', 'is', 'are', 'be'],
      correctIndex: 0,
      type: 'grammar',
      explanation: 'On utilise « am » avec « I » en anglais.',
    },
    {
      id: 'a1-g2',
      question: "Complétez : « She ___ a teacher. »",
      options: ['am', 'is', 'are', 'be'],
      correctIndex: 1,
      type: 'grammar',
      explanation: 'On utilise « is » avec les pronoms he/she/it.',
    },
    {
      id: 'a1-g3',
      question: "Complétez : « They ___ from France. »",
      options: ['am', 'is', 'are', 'be'],
      correctIndex: 2,
      type: 'grammar',
      explanation: 'On utilise « are » avec les pronoms we/you/they.',
    },
    {
      id: 'a1-g4',
      question: "Complétez : « ___ you like coffee ? »",
      options: ['Do', 'Does', 'Are', 'Is'],
      correctIndex: 0,
      type: 'grammar',
      explanation: 'On utilise « Do » pour former la question avec « you » au présent simple.',
    },
    {
      id: 'a1-g5',
      question: "Complétez : « This is ___ apple. »",
      options: ['a', 'an', 'the', '—'],
      correctIndex: 1,
      type: 'grammar',
      explanation: 'On utilise « an » devant un nom commençant par une voyelle.',
    },
    // --- Vocabulary (5) ---
    {
      id: 'a1-v1',
      question: "Que signifie « water » en français ?",
      options: ['Feu', 'Air', 'Eau', 'Terre'],
      correctIndex: 2,
      type: 'vocabulary',
      explanation: '« Water » signifie « eau » en français.',
    },
    {
      id: 'a1-v2',
      question: "Que signifie « book » en français ?",
      options: ['Stylo', 'Livre', 'Cahier', 'Table'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Book » signifie « livre » en français.',
    },
    {
      id: 'a1-v3',
      question: "Que signifie « house » en français ?",
      options: ['Jardin', 'Porte', 'Maison', 'Fenêtre'],
      correctIndex: 2,
      type: 'vocabulary',
      explanation: '« House » signifie « maison » en français.',
    },
    {
      id: 'a1-v4',
      question: "Que signifie « happy » en français ?",
      options: ['Triste', 'Heureux', 'Fatigué', 'En colère'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Happy » signifie « heureux / content » en français.',
    },
    {
      id: 'a1-v5',
      question: "Que signifie « bread » en français ?",
      options: ['Beurre', 'Pain', 'Fromage', 'Lait'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Bread » signifie « pain » en français.',
    },
    // --- Translation (5) ---
    {
      id: 'a1-t1',
      question: "Traduisez : « Bonjour, comment allez-vous ? »",
      options: [
        'Hello, how are you ?',
        'Goodbye, how are you ?',
        'Hello, where are you ?',
        'Good night, how are you ?',
      ],
      correctIndex: 0,
      type: 'translation',
      explanation: '« Bonjour » = Hello, « comment allez-vous ? » = how are you ?',
    },
    {
      id: 'a1-t2',
      question: "Traduisez : « Je m'appelle Marie. »",
      options: [
        'I am call Marie.',
        'My name is Marie.',
        'I call Marie.',
        'She is Marie.',
      ],
      correctIndex: 1,
      type: 'translation',
      explanation: 'Pour dire son nom en anglais, on utilise « My name is… ».',
    },
    {
      id: 'a1-t3',
      question: "Traduisez : « Il fait beau aujourd'hui. »",
      options: [
        'It is bad today.',
        'It is cold today.',
        'It is nice today.',
        'It is raining today.',
      ],
      correctIndex: 2,
      type: 'translation',
      explanation: '« Il fait beau » se traduit par « It is nice / sunny ».',
    },
    {
      id: 'a1-t4',
      question: "Traduisez : « J'ai vingt ans. »",
      options: [
        'I am twenty years.',
        'I have twenty years.',
        'I am twenty years old.',
        'I have twenty old.',
      ],
      correctIndex: 2,
      type: 'translation',
      explanation: 'En anglais, on dit « I am [âge] years old » et non « I have ».',
    },
    {
      id: 'a1-t5',
      question: "Traduisez : « Où est la gare ? »",
      options: [
        'Where is the station ?',
        'What is the station ?',
        'When is the station ?',
        'Who is the station ?',
      ],
      correctIndex: 0,
      type: 'translation',
      explanation: '« Où » = Where, « gare » = station.',
    },
    // --- Conjugaison (5) ---
    {
      id: 'a1-c1',
      question: "Complétez : « She ___ to school every day. »",
      options: ['go', 'goes', 'going', 'gone'],
      correctIndex: 1,
      type: 'conjugaison',
      explanation: 'Avec he/she/it au présent simple, on ajoute « -s » au verbe : she goes.',
    },
    {
      id: 'a1-c2',
      question: "Complétez : « I ___ English. » (présent simple)",
      options: ['speak', 'speaks', 'speaking', 'spoke'],
      correctIndex: 0,
      type: 'conjugaison',
      explanation: 'Avec « I », le verbe reste à la forme de base au présent simple.',
    },
    {
      id: 'a1-c3',
      question: "Complétez : « We ___ dinner at 7 pm. » (présent simple)",
      options: ['has', 'have', 'having', 'had'],
      correctIndex: 1,
      type: 'conjugaison',
      explanation: 'Avec « we », on utilise « have » sans modification au présent simple.',
    },
    {
      id: 'a1-c4',
      question: "Complétez : « He ___ not like fish. »",
      options: ['do', 'does', 'is', 'has'],
      correctIndex: 1,
      type: 'conjugaison',
      explanation: 'La négation au présent simple avec he/she/it utilise « does not ».',
    },
    {
      id: 'a1-c5',
      question: "Complétez : « They ___ playing football now. »",
      options: ['is', 'are', 'am', 'do'],
      correctIndex: 1,
      type: 'conjugaison',
      explanation: 'Avec « they », on utilise « are » pour le présent continu.',
    },
  ],
}

// ============================================================
// A2 – Élémentaire (Elementary)
// ============================================================
const a2Exam: LevelExam = {
  level: 'A2',
  title: 'Examen A2 – Élémentaire',
  description: 'Vérifiez votre maîtrise des temps du passé, du présent continu, des comparatifs et du vocabulaire de la vie quotidienne.',
  passingScore: EXAM_PASSING_SCORE,
  xpReward: EXAM_XP_REWARD.A2,
  questions: [
    // --- Grammar (5) ---
    {
      id: 'a2-g1',
      question: "Complétez : « I ___ TV when she arrived. »",
      options: ['watch', 'watched', 'was watching', 'am watching'],
      correctIndex: 2,
      type: 'grammar',
      explanation: 'Pour une action en cours interrompue par une autre, on utilise le past continuous : « was watching ».',
    },
    {
      id: 'a2-g2',
      question: "Complétez : « She is ___ than her brother. »",
      options: ['tall', 'taller', 'tallest', 'more tall'],
      correctIndex: 1,
      type: 'grammar',
      explanation: 'Le comparatif des adjectifs courts se forme avec « -er » : taller.',
    },
    {
      id: 'a2-g3',
      question: "Complétez : « There isn't ___ milk in the fridge. »",
      options: ['some', 'many', 'much', 'a'],
      correctIndex: 2,
      type: 'grammar',
      explanation: '« Milk » est un nom indénombrable ; on utilise « much » à la forme négative.',
    },
    {
      id: 'a2-g4',
      question: "Complétez : « ___ you go to the cinema last night ? »",
      options: ['Do', 'Did', 'Are', 'Were'],
      correctIndex: 1,
      type: 'grammar',
      explanation: 'Pour le past simple, on forme la question avec « Did ».',
    },
    {
      id: 'a2-g5',
      question: "Complétez : « He is ___ best student in the class. »",
      options: ['a', 'an', 'the', '—'],
      correctIndex: 2,
      type: 'grammar',
      explanation: 'On utilise « the » avec le superlatif : « the best ».',
    },
    // --- Vocabulary (5) ---
    {
      id: 'a2-v1',
      question: "Que signifie « weather » en français ?",
      options: ['Vent', 'Météo / Temps', 'Saison', 'Tempête'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: `« Weather » signifie « météo » ou « temps (qu'il fait) ».`,
    },
    {
      id: 'a2-v2',
      question: "Que signifie « ache » en français ?",
      options: ['Douleur', 'Fièvre', 'Blessure', 'Médicament'],
      correctIndex: 0,
      type: 'vocabulary',
      explanation: '« Ache » signifie « douleur » (ex. headache = mal de tête).',
    },
    {
      id: 'a2-v3',
      question: "Que signifie « bargain » en français ?",
      options: ['Boutique', 'Affaire (bon prix)', 'Produit', 'Budget'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Bargain » signifie « une bonne affaire / une occasion ».',
    },
    {
      id: 'a2-v4',
      question: "Que signifie « hobby » en français ?",
      options: ['Passe-temps', 'Travail', 'Sport', 'École'],
      correctIndex: 0,
      type: 'vocabulary',
      explanation: '« Hobby » signifie « passe-temps / loisir ».',
    },
    {
      id: 'a2-v5',
      question: "Que signifie « recipe » en français ?",
      options: ['Recette', 'Restaurant', 'Menu', 'Ingrédient'],
      correctIndex: 0,
      type: 'vocabulary',
      explanation: '« Recipe » signifie « recette (de cuisine) ».',
    },
    // --- Translation (5) ---
    {
      id: 'a2-t1',
      question: "Traduisez : « Je suis allé(e) au marché hier. »",
      options: [
        'I go to the market yesterday.',
        'I went to the market yesterday.',
        'I am going to the market yesterday.',
        'I have gone to the market yesterday.',
      ],
      correctIndex: 1,
      type: 'translation',
      explanation: 'Le passé simple (went) est utilisé pour une action terminée dans le passé.',
    },
    {
      id: 'a2-t2',
      question: "Traduisez : « Il pleut beaucoup aujourd'hui. »",
      options: [
        'It rains a lot today.',
        'It is raining a lot today.',
        'It rained a lot today.',
        'It has rained a lot today.',
      ],
      correctIndex: 1,
      type: 'translation',
      explanation: 'Pour décrire la météo en cours, on utilise le présent continu : « It is raining ».',
    },
    {
      id: 'a2-t3',
      question: "Traduisez : « Ce restaurant est moins cher que l'autre. »",
      options: [
        'This restaurant is less expensive than the other.',
        'This restaurant is more cheaper than the other.',
        'This restaurant is cheapest than the other.',
        'This restaurant is not as expensive that the other.',
      ],
      correctIndex: 0,
      type: 'translation',
      explanation: '« Moins cher » = « less expensive » ou « cheaper ». La structure comparative est « less + adj + than ».',
    },
    {
      id: 'a2-t4',
      question: "Traduisez : « Elle a mal à la tête. »",
      options: [
        'She has a pain in the head.',
        'She has a headache.',
        'She has a head pain.',
        'She is headaching.',
      ],
      correctIndex: 1,
      type: 'translation',
      explanation: '« Avoir mal à la tête » se dit « to have a headache » en anglais.',
    },
    {
      id: 'a2-t5',
      question: "Traduisez : « Combien de livres as-tu ? »",
      options: [
        'How many books do you have ?',
        'How much books do you have ?',
        'How many books you have ?',
        'How much books you have ?',
      ],
      correctIndex: 0,
      type: 'translation',
      explanation: '« Books » est dénombrable, on utilise « how many ». La question se forme avec « do you have ».',
    },
    // --- Conjugaison (5) ---
    {
      id: 'a2-c1',
      question: "Complétez : « They ___ to Paris last summer. »",
      options: ['go', 'went', 'are going', 'have gone'],
      correctIndex: 1,
      type: 'conjugaison',
      explanation: '« Last summer » indique le past simple : « went » (forme irrégulière de go).',
    },
    {
      id: 'a2-c2',
      question: "Complétez : « Look! The children ___ in the garden. »",
      options: ['play', 'plays', 'are playing', 'played'],
      correctIndex: 2,
      type: 'conjugaison',
      explanation: '« Look! » signale une action en cours → présent continu : « are playing ».',
    },
    {
      id: 'a2-c3',
      question: "Complétez : « She ___ already ___ her homework. »",
      options: ['has / finished', 'have / finished', 'is / finishing', 'was / finishing'],
      correctIndex: 0,
      type: 'conjugaison',
      explanation: 'Le present perfect avec « she » utilise « has » + participe passé : « has finished ».',
    },
    {
      id: 'a2-c4',
      question: "Complétez : « I ___ not ___ the film yet. »",
      options: ['do / see', 'have / seen', 'am / seeing', 'was / seeing'],
      correctIndex: 1,
      type: 'conjugaison',
      explanation: '« Yet » signale le present perfect : « have not seen ».',
    },
    {
      id: 'a2-c5',
      question: "Complétez : « We ___ going to visit London next week. »",
      options: ['is', 'are', 'was', 'were'],
      correctIndex: 1,
      type: 'conjugaison',
      explanation: 'Avec « we », on utilise « are » dans la structure « be going to ».',
    },
  ],
}

// ============================================================
// B1 – Intermédiaire (Intermediate)
// ============================================================
const b1Exam: LevelExam = {
  level: 'B1',
  title: 'Examen B1 – Intermédiaire',
  description: 'Testez votre maîtrise des conditionnels, du discours indirect, de la voix passive et du vocabulaire intermédiaire.',
  passingScore: EXAM_PASSING_SCORE,
  xpReward: EXAM_XP_REWARD.B1,
  questions: [
    // --- Grammar (5) ---
    {
      id: 'b1-g1',
      question: "Complétez : « If it rains, I ___ at home. »",
      options: ['stay', 'stayed', 'will stay', 'would stay'],
      correctIndex: 2,
      type: 'grammar',
      explanation: 'Condition réelle (1er type) : If + present → will + base verbale.',
    },
    {
      id: 'b1-g2',
      question: "Complétez : « If I ___ you, I would accept the offer. »",
      options: ['am', 'was', 'were', 'be'],
      correctIndex: 2,
      type: 'grammar',
      explanation: 'Condition irréelle (2e type) : If + past → would + base. On utilise « were » même avec « I ».',
    },
    {
      id: 'b1-g3',
      question: "Complétez : « She said she ___ tired. » (discours indirect)",
      options: ['is', 'was', 'will be', 'has been'],
      correctIndex: 1,
      type: 'grammar',
      explanation: 'Au discours indirect, le présent devient du passé : « is » → « was ».',
    },
    {
      id: 'b1-g4',
      question: "Complétez : « The cake ___ by my mother. » (voix passive)",
      options: ['baked', 'was baked', 'has baked', 'is baking'],
      correctIndex: 1,
      type: 'grammar',
      explanation: 'Voix passive au passé : sujet + was/were + participe passé.',
    },
    {
      id: 'b1-g5',
      question: "Complétez : « I've been living here ___ 2015. »",
      options: ['for', 'since', 'from', 'during'],
      correctIndex: 1,
      type: 'grammar',
      explanation: '« Since » est utilisé avec un point de départ (2015), « for » avec une durée.',
    },
    // --- Vocabulary (5) ---
    {
      id: 'b1-v1',
      question: "Que signifie « reliable » en français ?",
      options: ['Relative', 'Fiable / Digne de confiance', 'Relâché', 'Relié'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Reliable » signifie « fiable / digne de confiance ».',
    },
    {
      id: 'b1-v2',
      question: "Que signifie « to give up » en français ?",
      options: ['Donner', 'Rendre', 'Abandonner', 'Remonter'],
      correctIndex: 2,
      type: 'vocabulary',
      explanation: 'Le phrasal verb « give up » signifie « abandonner ».',
    },
    {
      id: 'b1-v3',
      question: "Que signifie « outcome » en français ?",
      options: ['Sortie', 'Résultat / Issue', 'Voyage', 'Départ'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Outcome » signifie « résultat / issue ».',
    },
    {
      id: 'b1-v4',
      question: "Que signifie « to look forward to » en français ?",
      options: ['Regarder en avant', 'Anticiper avec impatience', 'Se retourner', 'Faire attention'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Look forward to » signifie « attendre avec impatience / espérer ».',
    },
    {
      id: 'b1-v5',
      question: "Que signifie « breakthrough » en français ?",
      options: ['Cassure', 'Percée / Avancée', 'Infraction', 'Rupture'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Breakthrough » signifie « percée / avancée majeure ».',
    },
    // --- Translation (5) ---
    {
      id: 'b1-t1',
      question: "Traduisez : « Si j'avais le temps, je voyagerais plus. »",
      options: [
        'If I have time, I will travel more.',
        'If I had time, I would travel more.',
        'If I had time, I will travel more.',
        'If I would have time, I traveled more.',
      ],
      correctIndex: 1,
      type: 'translation',
      explanation: 'Conditionnel irréel (2e type) : If + past → would + base verbale.',
    },
    {
      id: 'b1-t2',
      question: "Traduisez : « Il m'a dit qu'il partirait le lendemain. »",
      options: [
        'He told me he will leave tomorrow.',
        'He told me he would leave the next day.',
        'He said me he would leave tomorrow.',
        'He told me he leaves the next day.',
      ],
      correctIndex: 1,
      type: 'translation',
      explanation: 'Discours indirect : « partira » → « would leave », « demain » → « the next day ».',
    },
    {
      id: 'b1-t3',
      question: "Traduisez : « La lettre a été envoyée hier. »",
      options: [
        'The letter was sent yesterday.',
        'The letter has sent yesterday.',
        'The letter is sent yesterday.',
        'The letter had sent yesterday.',
      ],
      correctIndex: 0,
      type: 'translation',
      explanation: 'Voix passive au passé avec « yesterday » : was/were + participe passé.',
    },
    {
      id: 'b1-t4',
      question: "Traduisez : « Je n'ai pas pu venir parce que j'étais malade. »",
      options: [
        "I couldn't come because I was sick.",
        "I can't come because I am sick.",
        "I didn't can come because I was sick.",
        "I wasn't able came because I was sick.",
      ],
      correctIndex: 0,
      type: 'translation',
      explanation: `« Ne pas pouvoir » au passé = « couldn't » ou « wasn't able to ».`,
    },
    {
      id: 'b1-t5',
      question: "Traduisez : « Elle habite ici depuis cinq ans. »",
      options: [
        'She lives here since five years.',
        'She has lived here for five years.',
        'She is living here since five years.',
        'She lived here for five years.',
      ],
      correctIndex: 1,
      type: 'translation',
      explanation: '« Depuis » avec une durée (cinq ans) → present perfect + « for ».',
    },
    // --- Conjugaison (5) ---
    {
      id: 'b1-c1',
      question: "Complétez : « By the time we arrived, the film ___. »",
      options: ['started', 'had started', 'has started', 'would start'],
      correctIndex: 1,
      type: 'conjugaison',
      explanation: 'Le past perfect exprime une action antérieure à une autre au passé : « had started ».',
    },
    {
      id: 'b1-c2',
      question: "Complétez : « I wish I ___ harder for the exam. »",
      options: ['study', 'studied', 'had studied', 'would study'],
      correctIndex: 2,
      type: 'conjugaison',
      explanation: '« I wish » + past perfect exprime un regret sur le passé : « had studied ».',
    },
    {
      id: 'b1-c3',
      question: "Complétez : « This book ___ into twenty languages. »",
      options: ['translated', 'has translated', 'has been translated', 'was translating'],
      correctIndex: 2,
      type: 'conjugaison',
      explanation: 'Voix passive au present perfect : « has been translated ».',
    },
    {
      id: 'b1-c4',
      question: "Complétez : « He ___ working here since January. »",
      options: ['is', 'was', 'has been', 'had been'],
      correctIndex: 2,
      type: 'conjugaison',
      explanation: 'Present perfect continu avec « since » : « has been working ».',
    },
    {
      id: 'b1-c5',
      question: "Complétez : « You ___ see a doctor. It looks serious. »",
      options: ['should', 'would', 'could', 'might'],
      correctIndex: 0,
      type: 'conjugaison',
      explanation: '« Should » exprime le conseil ou la recommandation.',
    },
  ],
}

// ============================================================
// B2 – Intermédiaire supérieur (Upper Intermediate)
// ============================================================
const b2Exam: LevelExam = {
  level: 'B2',
  title: 'Examen B2 – Intermédiaire supérieur',
  description: 'Évaluez vos compétences en grammaire avancée : conditionnels mixtes, inversion, voix passive complexe et vocabulaire soutenu.',
  passingScore: EXAM_PASSING_SCORE,
  xpReward: EXAM_XP_REWARD.B2,
  questions: [
    // --- Grammar (5) ---
    {
      id: 'b2-g1',
      question: "Complétez : « Had I known, I ___ differently. »",
      options: ['will act', 'would act', 'would have acted', 'acted'],
      correctIndex: 2,
      type: 'grammar',
      explanation: '3e conditionnel avec inversion : Had I known = If I had known → would have acted.',
    },
    {
      id: 'b2-g2',
      question: "Complétez : « Not only ___ late, but he also forgot his homework. »",
      options: ['he arrived', 'did he arrive', 'he did arrive', 'arrived he'],
      correctIndex: 1,
      type: 'grammar',
      explanation: 'Inversion après « Not only » : Not only + auxiliaire + sujet + verbe.',
    },
    {
      id: 'b2-g3',
      question: "Complétez : « The report ___ have been finished by now. »",
      options: ['can', 'should', 'must', 'would'],
      correctIndex: 1,
      type: 'grammar',
      explanation: '« Should have been » exprime une expectation ou une probabilité au passé.',
    },
    {
      id: 'b2-g4',
      question: "Complétez : « She insisted that he ___ on time. » (subjunctive)",
      options: ['is', 'was', 'be', 'would be'],
      correctIndex: 2,
      type: 'grammar',
      explanation: 'Après « insist that », on utilise le subjonctif en anglais : base verbale sans « s ».',
    },
    {
      id: 'b2-g5',
      question: "Complétez : « If she hadn't missed the train, she ___ on time. »",
      options: [
        'would arrive',
        'would have arrived',
        'will arrive',
        'arrived',
      ],
      correctIndex: 1,
      type: 'grammar',
      explanation: '3e conditionnel : If + past perfect → would have + participe passé.',
    },
    // --- Vocabulary (5) ---
    {
      id: 'b2-v1',
      question: "Que signifie « to undermine » en français ?",
      options: ['Miner', 'Saper / Affaiblir', 'Comprendre', 'Souligner'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Undermine » signifie « saper / affaiblir / compromettre ».',
    },
    {
      id: 'b2-v2',
      question: "Que signifie « painstaking » en français ?",
      options: ['Douloureux', 'Méticuleux / Laborieux', 'Rapide', 'Précaire'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Painstaking » signifie « méticuleux / minutieux / laborieux ».',
    },
    {
      id: 'b2-v3',
      question: "Que signifie « to bring about » en français ?",
      options: ['Apporter', 'Provoquer / Entraîner', 'Revenir', 'Rappeler'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Bring about » signifie « provoquer / entraîner / causer ».',
    },
    {
      id: 'b2-v4',
      question: "Que signifie « albeit » en français ?",
      options: ['Bien que / quoique', 'Même si', 'Cependant', 'Par conséquent'],
      correctIndex: 0,
      type: 'vocabulary',
      explanation: '« Albeit » signifie « bien que / quoique » (concession formelle).',
    },
    {
      id: 'b2-v5',
      question: "Que signifie « to overlook » en français ?",
      options: ['Regarder par-dessus', 'Négliger / Passer sous silence', 'Surveiller', 'Examiner'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Overlook » signifie « négliger / omettre / passer sous silence ».',
    },
    // --- Translation (5) ---
    {
      id: 'b2-t1',
      question: "Traduisez : « N'eût-il pas plu, nous serions allés nous promener. »",
      options: [
        'If it had not rained, we would have gone for a walk.',
        'If it did not rain, we would go for a walk.',
        'If it has not rained, we will go for a walk.',
        'If it was not raining, we would go for a walk.',
      ],
      correctIndex: 0,
      type: 'translation',
      explanation: 'Condition contrefactuelle passée (3e type) : If + past perfect → would have + participe passé.',
    },
    {
      id: 'b2-t2',
      question: "Traduisez : « Il est peu probable qu'elle vienne demain. »",
      options: [
        "It is unlikely that she will come tomorrow.",
        "She is improbable to come tomorrow.",
        "It is unlikely she comes tomorrow.",
        "She unlikely comes tomorrow.",
      ],
      correctIndex: 0,
      type: 'translation',
      explanation: '« Il est peu probable que » = « It is unlikely that » + sujet + will + verbe.',
    },
    {
      id: 'b2-t3',
      question: "Traduisez : « Quoi que vous fassiez, ne perdez pas espoir. »",
      options: [
        'Whatever you do, don\'t lose hope.',
        'What you do, don\'t lose hope.',
        'Whenever you do, don\'t lose hope.',
        'However you do, don\'t lose hope.',
      ],
      correctIndex: 0,
      type: 'translation',
      explanation: '« Quoi que vous fassiez » = « Whatever you do ».',
    },
    {
      id: 'b2-t4',
      question: "Traduisez : « Il aurait dû suivre les conseils de son médecin. »",
      options: [
        'He should follow his doctor\'s advice.',
        'He should have followed his doctor\'s advice.',
        'He must have followed his doctor\'s advice.',
        'He could follow his doctor\'s advice.',
      ],
      correctIndex: 1,
      type: 'translation',
      explanation: '« Aurait dû » = « should have + participe passé ».',
    },
    {
      id: 'b2-t5',
      question: "Traduisez : « Il semble que le projet ait été abandonné. »",
      options: [
        'It seems that the project was abandoned.',
        'It appears that the project has been abandoned.',
        'It looks like the project abandoned.',
        'It seems the project had abandoned.',
      ],
      correctIndex: 1,
      type: 'translation',
      explanation: '« Il semble que » + présent perfect passif : « It appears/seems that + has been abandoned ».',
    },
    // --- Conjugaison (5) ---
    {
      id: 'b2-c1',
      question: "Complétez : « She ___ have been informed earlier. »",
      options: ['can', 'must', 'should', 'will'],
      correctIndex: 2,
      type: 'conjugaison',
      explanation: '« Should have been » exprime ce qui aurait dû se passer (reproche/conseil au passé).',
    },
    {
      id: 'b2-c2',
      question: "Complétez : « Rarely ___ such a beautiful sunset. »",
      options: ['I have seen', 'have I seen', 'I saw', 'did I see'],
      correctIndex: 1,
      type: 'conjugaison',
      explanation: 'Inversion après adverbe restrictif en tête : Rarely + auxiliaire + sujet.',
    },
    {
      id: 'b2-c3',
      question: "Complétez : « If I had known her number, I ___ her. »",
      options: [
        'would call',
        'would have called',
        'will call',
        'called',
      ],
      correctIndex: 1,
      type: 'conjugaison',
      explanation: '3e conditionnel : If + past perfect → would have + participe passé.',
    },
    {
      id: 'b2-c4',
      question: "Complétez : « He ___ be at home; the lights are on. »",
      options: ['must', 'can', 'should', 'would'],
      correctIndex: 0,
      type: 'conjugaison',
      explanation: '« Must » exprime une déduction logique forte au présent.',
    },
    {
      id: 'b2-c5',
      question: "Complétez : « The new policy ___ into effect next month. » (voix passive)",
      options: ['will put', 'will be put', 'will have put', 'puts'],
      correctIndex: 1,
      type: 'conjugaison',
      explanation: 'Voix passive au futur : will be + participe passé.',
    },
  ],
}

// ============================================================
// C1 – Avancé (Advanced)
// ============================================================
const c1Exam: LevelExam = {
  level: 'C1',
  title: 'Examen C1 – Avancé',
  description: 'Mesurez votre maîtrise des structures grammaticales rares, du vocabulaire très avancé et des traductions nuancées de niveau professionnel.',
  passingScore: EXAM_PASSING_SCORE,
  xpReward: EXAM_XP_REWARD.C1,
  questions: [
    // --- Grammar (5) ---
    {
      id: 'c1-g1',
      question: "Complétez : « It is imperative that every student ___ the exam on time. »",
      options: ['takes', 'take', 'took', 'would take'],
      correctIndex: 1,
      type: 'grammar',
      explanation: 'Après « it is imperative that », on utilise le subjonctif : base verbale sans « s ».',
    },
    {
      id: 'c1-g2',
      question: "Complétez : « So ___ the noise that nobody could sleep. »",
      options: ['loud was', 'was loud', 'loud is', 'is loud'],
      correctIndex: 0,
      type: 'grammar',
      explanation: 'Inversion après « So + adjectif » en tête : So loud was the noise…',
    },
    {
      id: 'c1-g3',
      question: "Complétez : « Were the situation to worsen, we ___ forced to act. »",
      options: ['will be', 'would be', 'are', 'were'],
      correctIndex: 1,
      type: 'grammar',
      explanation: 'Inversion conditionnelle formelle : Were + sujet + to → would + base verbale.',
    },
    {
      id: 'c1-g4',
      question: "Complétez : « ___ it not for her help, I would never have succeeded. »",
      options: ['Were', 'Was', 'Had', 'If'],
      correctIndex: 0,
      type: 'grammar',
      explanation: '« Were it not for » est la forme inversée de « If it were not for ».',
    },
    {
      id: 'c1-g5',
      question: "Complétez : « He is, as ___ were, the father of the project. »",
      options: ['it', 'he', 'one', 'they'],
      correctIndex: 0,
      type: 'grammar',
      explanation: '« As it were » est une expression figée signifiant « pour ainsi dire ».',
    },
    // --- Vocabulary (5) ---
    {
      id: 'c1-v1',
      question: "Que signifie « to corroborate » en français ?",
      options: ['Corrompre', 'Confirmer / Étayer', 'Coordonner', 'Contredire'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Corroborate » signifie « confirmer / étayer (un témoignage, une hypothèse) ».',
    },
    {
      id: 'c1-v2',
      question: "Que signifie « ephemeral » en français ?",
      options: ['Éternel', 'Éphémère / Fugace', 'Évident', 'Épouvantable'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Ephemeral » signifie « éphémère / de courte durée ».',
    },
    {
      id: 'c1-v3',
      question: "Que signifie « to flout » en français ?",
      options: ['Flotter', 'Braver / Transgresser', 'Se moquer de', 'Fuir'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Flout » signifie « braver / transgresser (une loi, une règle) ».',
    },
    {
      id: 'c1-v4',
      question: "Que signifie « perfunctory » en français ?",
      options: ['Parfait', 'Superficiel / Expéditif', 'Périlleux', 'Persuasif'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Perfunctory » signifie « superficiel / expéditif / fait sans soin ».',
    },
    {
      id: 'c1-v5',
      question: "Que signifie « to vindicate » en français ?",
      options: ['Venger', 'Justifier / Disculper', 'Vaincre', 'Violenter'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Vindicate » signifie « justifier / disculper / laver d\'une accusation ».',
    },
    // --- Translation (5) ---
    {
      id: 'c1-t1',
      question: "Traduisez : « Pour peu qu'il s'en donnât la peine, il réussirait. »",
      options: [
        'Should he but make the effort, he would succeed.',
        'If he makes the effort, he will succeed.',
        'If he made effort, he succeeds.',
        'Even if he tries, he would succeed.',
      ],
      correctIndex: 0,
      type: 'translation',
      explanation: '« Pour peu que » + subjonctif se traduit par « Should + sujet + but + verbe » ou « If only + sujet + would ».',
    },
    {
      id: 'c1-t2',
      question: "Traduisez : « Il va sans dire que les résultats seront publiés. »",
      options: [
        'It goes without saying that the results will be published.',
        'It is without saying that the results will be published.',
        'It does not need saying that the results are published.',
        'Without saying, the results will be published.',
      ],
      correctIndex: 0,
      type: 'translation',
      explanation: '« Il va sans dire » = « It goes without saying ».',
    },
    {
      id: 'c1-t3',
      question: "Traduisez : « Encore eût-il fallu qu'il en fût averti. »",
      options: [
        'He would still have had to have been informed of it.',
        'He should have been informed about it.',
        'He needed to know about it.',
        'He must have been told.',
      ],
      correctIndex: 0,
      type: 'translation',
      explanation: 'Tournure littéraire : « Encore eût-il fallu » = « He would still have had to » + subjonctif passé.',
    },
    {
      id: 'c1-t4',
      question: "Traduisez : « Nonobstant les difficultés, le projet a abouti. »",
      options: [
        'Despite the difficulties, the project succeeded.',
        'Notwithstanding the difficulties, the project came to fruition.',
        'Even though difficulties, the project resulted.',
        'In spite difficulties, the project achieved.',
      ],
      correctIndex: 1,
      type: 'translation',
      explanation: '« Nonobstant » = « Notwithstanding ». « Aboutir » = « come to fruition / succeed ».',
    },
    {
      id: 'c1-t5',
      question: "Traduisez : « On ne saurait trop insister sur l'importance de cette découverte. »",
      options: [
        'One cannot too much insist on the importance of this discovery.',
        'The importance of this discovery cannot be overstated.',
        'You should not overstate the importance of this discovery.',
        'One must not insist too much on this discovery.',
      ],
      correctIndex: 1,
      type: 'translation',
      explanation: '« On ne saurait trop » = « cannot be overstated » (formulation idiomatique anglaise).',
    },
    // --- Conjugaison (5) ---
    {
      id: 'c1-c1',
      question: "Complétez : « He requested that the meeting ___ postponed. »",
      options: ['is', 'be', 'was', 'would be'],
      correctIndex: 1,
      type: 'conjugaison',
      explanation: 'Après « request that », on utilise le subjonctif : « be » (base verbale).',
    },
    {
      id: 'c1-c2',
      question: "Complétez : « Hardly ___ the announcement when the phone rang. »",
      options: ['had she made', 'she had made', 'did she make', 'she made'],
      correctIndex: 0,
      type: 'conjugaison',
      explanation: 'Inversion après « Hardly » : Hardly + had + sujet + participe passé + when.',
    },
    {
      id: 'c1-c3',
      question: "Complétez : « By next December, she ___ for this company for twenty years. »",
      options: [
        'works',
        'will work',
        'will have been working',
        'is going to work',
      ],
      correctIndex: 2,
      type: 'conjugaison',
      explanation: 'Futur antérieur continu : « will have been working » pour une durée à un moment futur.',
    },
    {
      id: 'c1-c4',
      question: "Complétez : « I'd rather you ___ him about this right now. »",
      options: ['tell', 'told', 'would tell', 'are telling'],
      correctIndex: 1,
      type: 'conjugaison',
      explanation: '« Would rather + sujet + past » exprime une préférence : « I\'d rather you told ».',
    },
    {
      id: 'c1-c5',
      question: "Complétez : « She suggested that he ___ a different approach. »",
      options: ['tries', 'try', 'tried', 'would try'],
      correctIndex: 1,
      type: 'conjugaison',
      explanation: 'Après « suggest that », le subjonctif est requis : « try » (base verbale).',
    },
  ],
}

// ============================================================
// C2 – Maîtrise (Mastery)
// ============================================================
const c2Exam: LevelExam = {
  level: 'C2',
  title: 'Examen C2 – Maîtrise',
  description: `Prouvez votre maîtrise quasi-native de l'anglais : structures syntaxiques complexes, vocabulaire rare et distinctions subtiles de sens.`,
  passingScore: EXAM_PASSING_SCORE,
  xpReward: EXAM_XP_REWARD.C2,
  questions: [
    // --- Grammar (5) ---
    {
      id: 'c2-g1',
      question: "Complétez : « It was not until she left ___ I realised how much she meant to me. »",
      options: ['that', 'when', 'than', 'which'],
      correctIndex: 0,
      type: 'grammar',
      explanation: `Cleft sentence : « It was not until X that Y » = ce n'est qu'au moment de X que Y.`,
    },
    {
      id: 'c2-g2',
      question: "Complétez : « The more he insisted, ___ she refused. »",
      options: ['the more', 'the less', 'more', 'less'],
      correctIndex: 0,
      type: 'grammar',
      explanation: 'Structure corrélative : « The more… the more… » = Plus… plus…',
    },
    {
      id: 'c2-g3',
      question: "Complétez : « Little ___ what consequences his words would have. »",
      options: ['did he know', 'he knew', 'does he know', 'he knows'],
      correctIndex: 0,
      type: 'grammar',
      explanation: 'Inversion après adverbe restrictif « Little » : Little + auxiliaire + sujet.',
    },
    {
      id: 'c2-g4',
      question: "Complétez : « Were she to resign, ___ would inevitably follow. »",
      options: ['chaos', 'a chaos', 'the chaos', 'chaoses'],
      correctIndex: 0,
      type: 'grammar',
      explanation: '« Chaos » est un nom indénombrable en anglais ; il ne prend ni article ni pluriel ici.',
    },
    {
      id: 'c2-g5',
      question: "Complétez : « What he said, ___ it be true or false, is irrelevant. »",
      options: ['whether', 'either', 'neither', 'whichever'],
      correctIndex: 0,
      type: 'grammar',
      explanation: '« Whether… or » introduit une alternative : « soit… soit / que… ou non ».',
    },
    // --- Vocabulary (5) ---
    {
      id: 'c2-v1',
      question: "Que signifie « sesquipedalian » en français ?",
      options: ['À cent pieds', 'Qui utilise des mots longs / savants', 'Sismique', 'Secondaire'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Sesquipedalian » signifie « qui utilise de longs mots / pompeux dans le vocabulaire ».',
    },
    {
      id: 'c2-v2',
      question: "Que signifie « to dissemble » en français ?",
      options: ['Désassembler', 'Dissimuler / Feindre', 'Disperser', 'Détruire'],
      correctIndex: 1,
      type: 'vocabulary',
      explanation: '« Dissemble » signifie « dissimuler ses véritables sentiments / feindre ».',
    },
    {
      id: 'c2-v3',
      question: "Que signifie « insouciant » en anglais ?",
      options: ['Carefree / Nonchalant', 'Insolent', 'Inquiet', 'Inconsistant'],
      correctIndex: 0,
      type: 'vocabulary',
      explanation: '« Insouciant » se traduit par « carefree / nonchalant / unconcerned ».',
    },
    {
      id: 'c2-v4',
      question: "Que signifie « obfuscate » en français ?",
      options: ['Rendre flou / Obscurcir', 'Observer', 'Obtenir', 'Oppresser'],
      correctIndex: 0,
      type: 'vocabulary',
      explanation: '« Obfuscate » signifie « obscurcir / embrouiller / rendre confus intentionnellement ».',
    },
    {
      id: 'c2-v5',
      question: "Que signifie « pusillanimous » en français ?",
      options: ['Pusillanime / Lâche', 'Prétentieux', 'Prudent', 'Pugnace'],
      correctIndex: 0,
      type: 'vocabulary',
      explanation: '« Pusillanimous » signifie « pusillanime / lâche / dépourvu de courage ».',
    },
    // --- Translation (5) ---
    {
      id: 'c2-t1',
      question: "Traduisez : « C'est à croire qu'il le fait exprès. »",
      options: [
        'One would think he does it on purpose.',
        'It is to believe he does it on purpose.',
        'It looks like he makes it on purpose.',
        'That is to think he does it deliberately.',
      ],
      correctIndex: 0,
      type: 'translation',
      explanation: `« C'est à croire que » = « One would think that » ou « You would think that ».`,
    },
    {
      id: 'c2-t2',
      question: "Traduisez : « Tout porté qu'il fût à l'indulgence, il ne put s'empêcher de frémir. »",
      options: [
        'Inclined though he was to leniency, he could not help but shudder.',
        'Even if he was indulgent, he couldn\'t help shivering.',
        'Although he was indulgent, he could not stop trembling.',
        'As indulgent as he was, he must shudder.',
      ],
      correctIndex: 0,
      type: 'translation',
      explanation: `« Tout… que » + subjonctif = « Adjectif + though + sujet + verbe ». « Ne pouvoir s'empêcher » = « could not help but ».`,
    },
    {
      id: 'c2-t3',
      question: "Traduisez : « C'est précisément parce qu'il s'y attendait le moins que cela l'a affecté. »",
      options: [
        'It is precisely because he least expected it that it affected him.',
        'It is exactly because he didn\'t expect it that it affected him.',
        'Precisely because he expected it least, it affected him.',
        'That is exactly why it affected him since he didn\'t expect it.',
      ],
      correctIndex: 0,
      type: 'translation',
      explanation: 'Phrase clivée (cleft sentence) : « It is precisely X that Y » pour mettre X en relief.',
    },
    {
      id: 'c2-t4',
      question: "Traduisez : « Dût-il y consacrer sa vie, il n'abandonnerait pas. »",
      options: [
        'Should he devote his life to it, he would not give up.',
        'Even if he must devote his life, he won\'t give up.',
        'If he had to devote his life, he would not give up.',
        'Must he devote his life, he would not abandon.',
      ],
      correctIndex: 0,
      type: 'translation',
      explanation: '« Dût-il » = inversion du conditionnel avec « should » : « Should he devote…, he would not… ».',
    },
    {
      id: 'c2-t5',
      question: "Traduisez : « Quoi qu'il en soit, il convient de ne pas tirer de conclusions hâtives. »",
      options: [
        'Be that as it may, it is advisable not to jump to conclusions.',
        'Whatever it is, we should not draw hasty conclusions.',
        'However it may be, it is convenient not to rush conclusions.',
        'No matter what, one must not make fast conclusions.',
      ],
      correctIndex: 0,
      type: 'translation',
      explanation: `« Quoi qu'il en soit » = « Be that as it may ». « Tirer des conclusions hâtives » = « jump to conclusions ».`,
    },
    // --- Conjugaison (5) ---
    {
      id: 'c2-c1',
      question: "Complétez : « No sooner ___ than the crowd erupted in applause. »",
      options: ['had she finished', 'she had finished', 'did she finish', 'she finished'],
      correctIndex: 0,
      type: 'conjugaison',
      explanation: 'Inversion après « No sooner » : No sooner + had + sujet + participe passé + than.',
    },
    {
      id: 'c2-c2',
      question: "Complétez : « It is high time we ___ this issue seriously. »",
      options: ['take', 'took', 'had taken', 'would take'],
      correctIndex: 1,
      type: 'conjugaison',
      explanation: '« It is high time » est suivi du past simple (subjonctif) : « took ».',
    },
    {
      id: 'c2-c3',
      question: "Complétez : « ___ he but realised the implications, he would have acted otherwise. »",
      options: ['Had', 'Were', 'Should', 'Did'],
      correctIndex: 0,
      type: 'conjugaison',
      explanation: 'Inversion du past perfect : « Had he but realised » = « If he had only realised ».',
    },
    {
      id: 'c2-c4',
      question: "Complétez : « She would sooner ___ than betray her principles. »",
      options: ['die', 'died', 'to die', 'dying'],
      correctIndex: 0,
      type: 'conjugaison',
      explanation: '« Would sooner + base verbale » = « préférerait… que ». La base verbale est utilisée sans « to ».',
    },
    {
      id: 'c2-c5',
      question: "Complétez : « On no account ___ to leave the premises without authorisation. »",
      options: ['are you', 'you are', 'you must', 'must you'],
      correctIndex: 3,
      type: 'conjugaison',
      explanation: 'Inversion après « On no account » : On no account + auxiliaire + sujet + verbe.',
    },
  ],
}

// ============================================================
// Export all exams
// ============================================================
export const LEVEL_EXAMS: Record<string, LevelExam> = {
  A1: a1Exam,
  A2: a2Exam,
  B1: b1Exam,
  B2: b2Exam,
  C1: c1Exam,
  C2: c2Exam,
}
