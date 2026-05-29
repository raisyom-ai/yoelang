// ─── Lesson Content Data for YOELANG ─────────────────────────────────────────
// Unique content for each unit: vocabulary, grammar, conversation, pronunciation

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
  pronunciation: PronunciationItem[]
}

// ─── A1 UNITS ────────────────────────────────────────────────────────────────

const A1_U1: LessonContent = {
  vocab: [
    { english: 'Hello', french: 'Bonjour', phonetic: '/həˈloʊ/', example: 'Hello, how are you?', exampleTranslation: 'Bonjour, comment allez-vous ?' },
    { english: 'Goodbye', french: 'Au revoir', phonetic: '/ɡʊdˈbaɪ/', example: 'Goodbye, see you tomorrow!', exampleTranslation: 'Au revoir, à demain !' },
    { english: 'Please', french: "S'il vous plaît", phonetic: '/pliːz/', example: 'Can I have some water, please?', exampleTranslation: "Puis-je avoir de l'eau, s'il vous plaît ?" },
    { english: 'Thank you', french: 'Merci', phonetic: '/θæŋk juː/', example: 'Thank you for your help!', exampleTranslation: 'Merci pour votre aide !' },
  ],
  grammar: {
    title: 'Present Simple: Be',
    explanation: 'Le verbe "be" (être) se conjugue : I am, you are, he/she/it is, we are, they are. On utilise les contractions : I\'m, you\'re, he\'s, she\'s, it\'s, we\'re, they\'re.',
    examples: [
      { sentence: 'I am a student.', translation: 'Je suis étudiant.', isCorrect: true },
      { sentence: 'She are from France.', translation: '', isCorrect: false },
      { sentence: 'They are my friends.', translation: 'Ce sont mes amis.', isCorrect: true },
      { sentence: 'He is happy today.', translation: 'Il est content aujourd\'hui.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She are tired.', correct: 'She is tired.', explanation: 'On utilise "is" avec he/she/it.' },
      { wrong: 'I am agree.', correct: 'I agree.', explanation: 'En anglais, on dit "I agree" sans le verbe be.' },
    ],
  },
  conversation: [
    { speaker: 'Léa', role: 'A', text: 'Hello! My name is Léa.', translation: 'Bonjour ! Je m\'appelle Léa.' },
    { speaker: 'Tom', role: 'B', text: 'Hi Léa! I\'m Tom. Nice to meet you!', translation: 'Salut Léa ! Je suis Tom. Enchanté !' },
    { speaker: 'Léa', role: 'A', text: 'Nice to meet you too! Where are you from?', translation: 'Enchantée aussi ! D\'où viens-tu ?' },
    { speaker: 'Tom', role: 'B', text: 'I\'m from London. And you?', translation: 'Je suis de Londres. Et toi ?' },
    { speaker: 'Léa', role: 'A', text: 'I\'m from Paris. I\'m a student.', translation: 'Je suis de Paris. Je suis étudiante.' },
    { speaker: 'Tom', role: 'B', text: 'That\'s great! Goodbye, Léa!', translation: 'Super ! Au revoir, Léa !' },
  ],
  pronunciation: [
    { word: 'Hello', phonetic: '/həˈloʊ/', meaning: 'Bonjour', tip: 'Le "h" anglais est expiré, ne le prononcez pas comme le "h" français qui est muet.' },
    { word: 'Thank you', phonetic: '/θæŋk juː/', meaning: 'Merci', tip: 'Le "th" se prononce la langue entre les dents, en soufflant de l\'air.' },
    { word: 'Goodbye', phonetic: '/ɡʊdˈbaɪ/', meaning: 'Au revoir', tip: 'Prononcez "good" comme "gued" et "bye" comme "baï".' },
    { word: 'Please', phonetic: '/pliːz/', meaning: "S'il vous plaît", tip: 'Le "ea" se prononce "ii" long. Terminez par le son "z" doux.' },
  ],
}

const A1_U2: LessonContent = {
  vocab: [
    { english: 'Seven', french: 'Sept', phonetic: '/ˈsevən/', example: 'I have seven books.', exampleTranslation: 'J\'ai sept livres.' },
    { english: 'Twenty', french: 'Vingt', phonetic: '/ˈtwenti/', example: 'She is twenty years old.', exampleTranslation: 'Elle a vingt ans.' },
    { english: 'Hundred', french: 'Cent', phonetic: '/ˈhʌndrəd/', example: 'There are a hundred students.', exampleTranslation: 'Il y a cent étudiants.' },
    { english: 'Monday', french: 'Lundi', phonetic: '/ˈmʌndeɪ/', example: 'I have class on Monday.', exampleTranslation: 'J\'ai cours le lundi.' },
  ],
  grammar: {
    title: 'Articles: A & An',
    explanation: 'On utilise "a" devant un mot commençant par une consonne, et "an" devant un mot commençant par une voyelle (a, e, i, o, u). Exemples : a book, an apple.',
    examples: [
      { sentence: 'I have a dog.', translation: 'J\'ai un chien.', isCorrect: true },
      { sentence: 'She is an teacher.', translation: '', isCorrect: false },
      { sentence: 'He wants an orange.', translation: 'Il veut une orange.', isCorrect: true },
      { sentence: 'There is a university near here.', translation: 'Il y a une université près d\'ici.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'An university', correct: 'A university', explanation: '"University" commence par le son "you", qui est consonantique.' },
      { wrong: 'A hour', correct: 'An hour', explanation: '"Hour" commence par le son "aou", qui est vocalique bien que "h" soit écrit.' },
    ],
  },
  conversation: [
    { speaker: 'Marie', role: 'A', text: 'How old are you?', translation: 'Quel âge as-tu ?' },
    { speaker: 'James', role: 'B', text: 'I\'m twenty-five. And you?', translation: 'J\'ai vingt-cinq ans. Et toi ?' },
    { speaker: 'Marie', role: 'A', text: 'I\'m thirty. What day is it today?', translation: 'J\'ai trente ans. Quel jour sommes-nous ?' },
    { speaker: 'James', role: 'B', text: 'It\'s Monday, the fifteenth of March.', translation: 'C\'est lundi, le quinze mars.' },
    { speaker: 'Marie', role: 'A', text: 'How many students are in your class?', translation: 'Combien d\'étudiants y a-t-il dans ta classe ?' },
    { speaker: 'James', role: 'B', text: 'There are twenty-two students.', translation: 'Il y a vingt-deux étudiants.' },
  ],
  pronunciation: [
    { word: 'Thirty', phonetic: '/ˈθɜːrti/', meaning: 'Trente', tip: 'Attention à ne pas confondre "thirty" (30) et "thirteen" (13). Le "th" est crucial.' },
    { word: 'Fifty', phonetic: '/ˈfɪfti/', meaning: 'Cinquante', tip: 'Prononcez bien le "f" au milieu, pas "v" : "fif-tee" et non "fiv-tee".' },
    { word: 'Twelve', phonetic: '/twelv/', meaning: 'Douze', tip: 'Le "w" se forme en arrondissant les lèvres, comme "ou" français suivi de "elv".' },
    { word: 'Hundred', phonetic: '/ˈhʌndrəd/', meaning: 'Cent', tip: 'Le "u" se prononce comme le "o" français ouvert : "han-dred".' },
  ],
}

const A1_U3: LessonContent = {
  vocab: [
    { english: 'Book', french: 'Livre', phonetic: '/bʊk/', example: 'I read a book every day.', exampleTranslation: 'Je lis un livre chaque jour.' },
    { english: 'Chair', french: 'Chaise', phonetic: '/tʃer/', example: 'Please sit on the chair.', exampleTranslation: 'Asseyez-vous sur la chaise, s\'il vous plaît.' },
    { english: 'Window', french: 'Fenêtre', phonetic: '/ˈwɪndoʊ/', example: 'Open the window, please.', exampleTranslation: 'Ouvrez la fenêtre, s\'il vous plaît.' },
    { english: 'Table', french: 'Table', phonetic: '/ˈteɪbəl/', example: 'The book is on the table.', exampleTranslation: 'Le livre est sur la table.' },
  ],
  grammar: {
    title: 'This & That',
    explanation: '"This" (ceci) désigne un objet proche, "that" (cela) désigne un objet éloigné. Pluriel : "these" (ces - proches) et "those" (ces - éloignés).',
    examples: [
      { sentence: 'This is my book.', translation: 'Ceci est mon livre.', isCorrect: true },
      { sentence: 'That are my shoes.', translation: '', isCorrect: false },
      { sentence: 'These are my pens.', translation: 'Ce sont mes stylos.', isCorrect: true },
      { sentence: 'Those is your chairs.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'That are my books.', correct: 'Those are my books.', explanation: 'Au pluriel, on utilise "those" et non "that".' },
      { wrong: 'This is my shoes.', correct: 'These are my shoes.', explanation: '"Shoes" est pluriel, on utilise "these" au lieu de "this".' },
    ],
  },
  conversation: [
    { speaker: 'Anna', role: 'A', text: 'What is this?', translation: 'Qu\'est-ce que c\'est ?' },
    { speaker: 'Paul', role: 'B', text: 'This is a pen. It\'s on the table.', translation: 'C\'est un stylo. Il est sur la table.' },
    { speaker: 'Anna', role: 'A', text: 'And what is that over there?', translation: 'Et qu\'est-ce que c\'est là-bas ?' },
    { speaker: 'Paul', role: 'B', text: 'That is a computer. It\'s near the window.', translation: 'C\'est un ordinateur. Il est près de la fenêtre.' },
    { speaker: 'Anna', role: 'A', text: 'Are these your books?', translation: 'Ce sont tes livres ?' },
    { speaker: 'Paul', role: 'B', text: 'Yes, they are! Thank you!', translation: 'Oui ! Merci !' },
  ],
  pronunciation: [
    { word: 'Book', phonetic: '/bʊk/', meaning: 'Livre', tip: 'Le "oo" se prononce comme un "ou" court, pas comme "ou" long français.' },
    { word: 'Chair', phonetic: '/tʃer/', meaning: 'Chaise', tip: 'Le "ch" anglais se prononce "tch" comme dans "tchére".' },
    { word: 'Window', phonetic: '/ˈwɪndoʊ/', meaning: 'Fenêtre', tip: 'Le "w" initial : arrondissez les lèvres comme pour dire "oui".' },
    { word: 'Table', phonetic: '/ˈteɪbəl/', meaning: 'Table', tip: 'Prononcez "té-bal" avec le "a" très réduit à la fin.' },
  ],
}

const A1_U4: LessonContent = {
  vocab: [
    { english: 'Bread', french: 'Pain', phonetic: '/bred/', example: 'I eat bread for breakfast.', exampleTranslation: 'Je mange du pain au petit-déjeuner.' },
    { english: 'Water', french: 'Eau', phonetic: '/ˈwɔːtər/', example: 'Can I have some water?', exampleTranslation: 'Puis-je avoir de l\'eau ?' },
    { english: 'Coffee', french: 'Café', phonetic: '/ˈkɒfi/', example: 'I like coffee in the morning.', exampleTranslation: 'J\'aime le café le matin.' },
    { english: 'Chicken', french: 'Poulet', phonetic: '/ˈtʃɪkɪn/', example: 'We have chicken for dinner.', exampleTranslation: 'Nous avons du poulet pour le dîner.' },
  ],
  grammar: {
    title: 'I Like / I Don\'t Like',
    explanation: 'Pour exprimer ses goûts : "I like" (j\'aime) + nom ou verbe en -ing. "I don\'t like" (je n\'aime pas). On peut aussi dire "I love" (j\'adore) et "I hate" (je déteste).',
    examples: [
      { sentence: 'I like coffee.', translation: 'J\'aime le café.', isCorrect: true },
      { sentence: 'I don\'t like fish.', translation: 'Je n\'aime pas le poisson.', isCorrect: true },
      { sentence: 'She like pizza.', translation: '', isCorrect: false },
      { sentence: 'He don\'t like vegetables.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'She like coffee.', correct: 'She likes coffee.', explanation: 'Avec he/she/it, on ajoute "s" au verbe : likes.' },
      { wrong: 'He don\'t like rice.', correct: 'He doesn\'t like rice.', explanation: 'Avec he/she/it, on utilise "doesn\'t" au lieu de "don\'t".' },
    ],
  },
  conversation: [
    { speaker: 'Sophie', role: 'A', text: 'What do you like to eat?', translation: 'Qu\'aimes-tu manger ?' },
    { speaker: 'Mike', role: 'B', text: 'I like pasta and chicken. And you?', translation: 'J\'aime les pâtes et le poulet. Et toi ?' },
    { speaker: 'Sophie', role: 'A', text: 'I love bread and cheese!', translation: 'J\'adore le pain et le fromage !' },
    { speaker: 'Mike', role: 'B', text: 'Do you like coffee or tea?', translation: 'Préfères-tu le café ou le thé ?' },
    { speaker: 'Sophie', role: 'A', text: 'I don\'t like coffee. I prefer tea.', translation: 'Je n\'aime pas le café. Je préfère le thé.' },
    { speaker: 'Mike', role: 'B', text: 'Oh, I love coffee! I drink it every morning.', translation: 'Oh, j\'adore le café ! J\'en bois chaque matin.' },
  ],
  pronunciation: [
    { word: 'Bread', phonetic: '/bred/', meaning: 'Pain', tip: 'Le "ea" se prononce "é" court comme dans "brède".' },
    { word: 'Water', phonetic: '/ˈwɔːtər/', meaning: 'Eau', tip: 'En anglais américain, le "t" au milieu est souvent adouci, presque comme un "d".' },
    { word: 'Coffee', phonetic: '/ˈkɒfi/', meaning: 'Café', tip: 'Le "o" est ouvert, prononcez "ko-fi" avec le premier "o" comme dans "bon".' },
    { word: 'Chicken', phonetic: '/ˈtʃɪkɪn/', meaning: 'Poulet', tip: 'Le "ch" = "tch" et le "i" est court : "tchik-in".' },
  ],
}

const A1_U5: LessonContent = {
  vocab: [
    { english: 'Mother', french: 'Mère', phonetic: '/ˈmʌðər/', example: 'My mother is a doctor.', exampleTranslation: 'Ma mère est médecin.' },
    { english: 'Brother', french: 'Frère', phonetic: '/ˈbrʌðər/', example: 'I have one brother.', exampleTranslation: 'J\'ai un frère.' },
    { english: 'Daughter', french: 'Fille', phonetic: '/ˈdɔːtər/', example: 'Their daughter is very smart.', exampleTranslation: 'Leur fille est très intelligente.' },
    { english: 'Husband', french: 'Mari', phonetic: '/ˈhʌzbənd/', example: 'Her husband is a teacher.', exampleTranslation: 'Son mari est professeur.' },
  ],
  grammar: {
    title: 'Possessive Adjectives',
    explanation: 'Les adjectifs possessifs : my (mon/ma), your (ton/ta), his (son/sa - masculin), her (son/sa - féminin), our (notre/nos), their (leur/leurs). Ils s\'accordent avec le possesseur, pas l\'objet possédé.',
    examples: [
      { sentence: 'This is my book.', translation: 'C\'est mon livre.', isCorrect: true },
      { sentence: 'She loves his family.', translation: 'Elle aime sa famille (à lui).', isCorrect: true },
      { sentence: 'He loves her mother.', translation: '', isCorrect: false },
      { sentence: 'This is their house.', translation: 'C\'est leur maison.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'This is the book of John.', correct: 'This is John\'s book.', explanation: 'On utilise l\'apostrophe+s pour la possession, pas "of".' },
      { wrong: 'She loves his mother.', correct: 'She loves her mother.', explanation: '"Her" parce que c\'est LA mère de she, pas de he.' },
    ],
  },
  conversation: [
    { speaker: 'Clara', role: 'A', text: 'Tell me about your family!', translation: 'Parle-moi de ta famille !' },
    { speaker: 'David', role: 'B', text: 'I have a big family. I have two brothers and one sister.', translation: 'J\'ai une grande famille. J\'ai deux frères et une sœur.' },
    { speaker: 'Clara', role: 'A', text: 'That\'s nice! What does your mother do?', translation: 'C\'est sympa ! Que fait ta mère ?' },
    { speaker: 'David', role: 'B', text: 'My mother is a nurse. My father is an engineer.', translation: 'Ma mère est infirmière. Mon père est ingénieur.' },
    { speaker: 'Clara', role: 'A', text: 'I have a small family — just my husband and our daughter.', translation: 'J\'ai une petite famille — juste mon mari et notre fille.' },
    { speaker: 'David', role: 'B', text: 'How old is your daughter?', translation: 'Quel âge a votre fille ?' },
  ],
  pronunciation: [
    { word: 'Mother', phonetic: '/ˈmʌðər/', meaning: 'Mère', tip: 'Le "th" sonore : la langue entre les dents, mais on fait vibrer les cordes vocales.' },
    { word: 'Brother', phonetic: '/ˈbrʌðər/', meaning: 'Frère', tip: 'Même "th" sonore que dans "mother" : "bra-der".' },
    { word: 'Daughter', phonetic: '/ˈdɔːtər/', meaning: 'Fille', tip: 'Le "au" se prononce "o" long ouvert : "do-ter".' },
    { word: 'Husband', phonetic: '/ˈhʌzbənd/', meaning: 'Mari', tip: 'Le "u" est comme le "o" ouvert : "heuz-band".' },
  ],
}

const A1_U6: LessonContent = {
  vocab: [
    { english: 'Wake up', french: 'Se réveiller', phonetic: '/weɪk ʌp/', example: 'I wake up at 7 AM.', exampleTranslation: 'Je me réveille à 7h.' },
    { english: 'Breakfast', french: 'Petit-déjeuner', phonetic: '/ˈbrekfəst/', example: 'I eat breakfast at 8 AM.', exampleTranslation: 'Je prends le petit-déjeuner à 8h.' },
    { english: 'Work', french: 'Travailler', phonetic: '/wɜːrk/', example: 'I work from 9 to 5.', exampleTranslation: 'Je travaille de 9h à 17h.' },
    { english: 'Dinner', french: 'Dîner', phonetic: '/ˈdɪnər/', example: 'We have dinner at 7 PM.', exampleTranslation: 'Nous dînons à 19h.' },
  ],
  grammar: {
    title: 'Present Simple — Habits & Routines',
    explanation: 'Le Present Simple exprime des habitudes et routines. Avec I/you/we/they, on utilise le verbe de base. Avec he/she/it, on ajoute -s ou -es. Les adverbes de fréquence (always, usually, sometimes, never) se placent avant le verbe.',
    examples: [
      { sentence: 'I usually wake up at 7.', translation: 'Je me réveille habituellement à 7h.', isCorrect: true },
      { sentence: 'She go to work at 8.', translation: '', isCorrect: false },
      { sentence: 'He always eats breakfast.', translation: 'Il prend toujours le petit-déjeuner.', isCorrect: true },
      { sentence: 'They doesn\'t work on Sunday.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'She go to work.', correct: 'She goes to work.', explanation: 'Avec he/she/it, ajoutez -s ou -es au verbe.' },
      { wrong: 'I always am happy.', correct: 'I am always happy.', explanation: 'L\'adverbe se place APRÈS le verbe "be" mais AVANT les autres verbes.' },
    ],
  },
  conversation: [
    { speaker: 'Emma', role: 'A', text: 'What time do you wake up?', translation: 'À quelle heure te réveilles-tu ?' },
    { speaker: 'Lucas', role: 'B', text: 'I usually wake up at 6:30. I always have breakfast at 7.', translation: 'Je me réveille habituellement à 6h30. Je prends toujours le petit-déjeuner à 7h.' },
    { speaker: 'Emma', role: 'A', text: 'What do you do after breakfast?', translation: 'Que fais-tu après le petit-déjeuner ?' },
    { speaker: 'Lucas', role: 'B', text: 'I go to work at 8. I work from 9 to 5.', translation: 'Je vais au travail à 8h. Je travaille de 9h à 17h.' },
    { speaker: 'Emma', role: 'A', text: 'And what do you do in the evening?', translation: 'Et que fais-tu le soir ?' },
    { speaker: 'Lucas', role: 'B', text: 'I have dinner at 7, then I watch TV. I never go to bed late.', translation: 'Je dîne à 19h, puis je regarde la télé. Je ne me couche jamais tard.' },
  ],
  pronunciation: [
    { word: 'Breakfast', phonetic: '/ˈbrekfəst/', meaning: 'Petit-déjeuner', tip: 'On prononce "brek-fust" — le "a" est réduit et non prononcé "é".' },
    { word: 'Wake up', phonetic: '/weɪk ʌp/', meaning: 'Se réveiller', tip: 'Le "w" initial : arrondissez les lèvres. "Ouék-ap".' },
    { word: 'Dinner', phonetic: '/ˈdɪnər/', meaning: 'Dîner', tip: 'Le "i" est court comme dans "dit" : "din-er".' },
    { word: 'Usually', phonetic: '/ˈjuːʒuəli/', meaning: 'Habituellement', tip: 'Prononcez "iou-jou-ali" — le "s" devient le son "j" comme dans "jour".' },
  ],
}

const A1_U7: LessonContent = {
  vocab: [
    { english: 'Kitchen', french: 'Cuisine', phonetic: '/ˈkɪtʃɪn/', example: 'The kitchen is very big.', exampleTranslation: 'La cuisine est très grande.' },
    { english: 'Bedroom', french: 'Chambre', phonetic: '/ˈbedruːm/', example: 'My bedroom is upstairs.', exampleTranslation: 'Ma chambre est à l\'étage.' },
    { english: 'Sofa', french: 'Canapé', phonetic: '/ˈsoʊfə/', example: 'Sit on the sofa, please.', exampleTranslation: 'Asseyez-vous sur le canapé, s\'il vous plaît.' },
    { english: 'Bathroom', french: 'Salle de bain', phonetic: '/ˈbæθruːm/', example: 'The bathroom is on the left.', exampleTranslation: 'La salle de bain est à gauche.' },
  ],
  grammar: {
    title: 'There is / There are',
    explanation: 'On utilise "there is" (il y a) avec un singulier et "there are" avec un pluriel. Négatif : "there isn\'t" / "there aren\'t". Question : "Is there...?" / "Are there...?"',
    examples: [
      { sentence: 'There is a sofa in the living room.', translation: 'Il y a un canapé dans le salon.', isCorrect: true },
      { sentence: 'There are three bedrooms.', translation: 'Il y a trois chambres.', isCorrect: true },
      { sentence: 'There is two bathrooms.', translation: '', isCorrect: false },
      { sentence: 'Is there a kitchen?', translation: 'Y a-t-il une cuisine ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'There is two chairs.', correct: 'There are two chairs.', explanation: 'Avec un pluriel, on utilise "there are".' },
      { wrong: 'There are a table.', correct: 'There is a table.', explanation: 'Avec un singulier, on utilise "there is".' },
    ],
  },
  conversation: [
    { speaker: 'Julie', role: 'A', text: 'Is there a kitchen in your apartment?', translation: 'Y a-t-il une cuisine dans ton appartement ?' },
    { speaker: 'Mark', role: 'B', text: 'Yes, there is. There\'s also a big living room.', translation: 'Oui. Il y a aussi un grand salon.' },
    { speaker: 'Julie', role: 'A', text: 'How many bedrooms are there?', translation: 'Combien de chambres y a-t-il ?' },
    { speaker: 'Mark', role: 'B', text: 'There are two bedrooms and one bathroom.', translation: 'Il y a deux chambres et une salle de bain.' },
    { speaker: 'Julie', role: 'A', text: 'Is there a sofa in the living room?', translation: 'Y a-t-il un canapé dans le salon ?' },
    { speaker: 'Mark', role: 'B', text: 'Yes, there is a blue sofa near the window!', translation: 'Oui, il y a un canapé bleu près de la fenêtre !' },
  ],
  pronunciation: [
    { word: 'Kitchen', phonetic: '/ˈkɪtʃɪn/', meaning: 'Cuisine', tip: 'Le "ch" se prononce "tch" : "kit-chin".' },
    { word: 'Bedroom', phonetic: '/ˈbedruːm/', meaning: 'Chambre', tip: 'Prononcez "béd-roum" — le "d" et le "r" se lient.' },
    { word: 'Sofa', phonetic: '/ˈsoʊfə/', meaning: 'Canapé', tip: 'Le "o" est long : "so-fa" avec le "a" très réduit.' },
    { word: 'Bathroom', phonetic: '/ˈbæθruːm/', meaning: 'Salle de bain', tip: 'Le "th" est expiré, langue entre les dents : "bath-roum".' },
  ],
}

const A1_U8: LessonContent = {
  vocab: [
    { english: 'Price', french: 'Prix', phonetic: '/praɪs/', example: 'What is the price?', exampleTranslation: 'Quel est le prix ?' },
    { english: 'Cheap', french: 'Bon marché', phonetic: '/tʃiːp/', example: 'This shirt is very cheap.', exampleTranslation: 'Cette chemise est très bon marché.' },
    { english: 'Expensive', french: 'Cher', phonetic: '/ɪkˈspensɪv/', example: 'The phone is too expensive.', exampleTranslation: 'Le téléphone est trop cher.' },
    { english: 'Size', french: 'Taille', phonetic: '/saɪz/', example: 'What size do you need?', exampleTranslation: 'De quelle taille avez-vous besoin ?' },
  ],
  grammar: {
    title: 'Can I Have...? — Polite Requests',
    explanation: 'Pour demander quelque chose poliment : "Can I have...?" (Puis-je avoir...?), "I would like..." (Je voudrais...), "Could I have...?" (Plus poli).',
    examples: [
      { sentence: 'Can I have a bag, please?', translation: 'Puis-je avoir un sac, s\'il vous plaît ?', isCorrect: true },
      { sentence: 'I would like a blue shirt.', translation: 'Je voudrais une chemise bleue.', isCorrect: true },
      { sentence: 'I want a water.', translation: '', isCorrect: false },
      { sentence: 'Could I try this on?', translation: 'Puis-je essayer ceci ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I want a water.', correct: 'I would like some water.', explanation: '"Want" est trop direct. "Would like" est plus poli. "Water" est indénombrable.' },
      { wrong: 'Can I have one water?', correct: 'Can I have a glass of water?', explanation: '"Water" est indénombrable, on dit "a glass/bottle of water".' },
    ],
  },
  conversation: [
    { speaker: 'Nadia', role: 'A', text: 'Excuse me, can I have this shirt in size M?', translation: 'Excusez-moi, puis-je avoir cette chemise en taille M ?' },
    { speaker: 'Clerk', role: 'B', text: 'Of course! What color would you like?', translation: 'Bien sûr ! Quelle couleur souhaitez-vous ?' },
    { speaker: 'Nadia', role: 'A', text: 'I would like the blue one. How much is it?', translation: 'Je voudrais la bleue. Combien coûte-t-elle ?' },
    { speaker: 'Clerk', role: 'B', text: 'It\'s twenty-five dollars.', translation: 'C\'est vingt-cinq dollars.' },
    { speaker: 'Nadia', role: 'A', text: 'That\'s not too expensive! Can I try it on?', translation: 'Ce n\'est pas trop cher ! Puis-je l\'essayer ?' },
    { speaker: 'Clerk', role: 'B', text: 'Sure, the fitting room is on the right.', translation: 'Bien sûr, la cabine d\'essayage est à droite.' },
  ],
  pronunciation: [
    { word: 'Price', phonetic: '/praɪs/', meaning: 'Prix', tip: 'Le "i" est long : "praïce" — ne confondez pas avec "prize" (prix/recompense).' },
    { word: 'Cheap', phonetic: '/tʃiːp/', meaning: 'Bon marché', tip: 'Le "ch" = "tch" et "ea" = "ii" long : "tchiip".' },
    { word: 'Expensive', phonetic: '/ɪkˈspensɪv/', meaning: 'Cher', tip: 'L\'accent est sur "pen" : "ik-SPEN-siv".' },
    { word: 'Size', phonetic: '/saɪz/', meaning: 'Taille', tip: 'Prononcez "saïz" avec le son "z" final sonore.' },
  ],
}

// ─── A2 UNITS ────────────────────────────────────────────────────────────────

const A2_U1: LessonContent = {
  vocab: [
    { english: 'Sunny', french: 'Ensoleillé', phonetic: '/ˈsʌni/', example: 'It is sunny today.', exampleTranslation: 'Il fait soleil aujourd\'hui.' },
    { english: 'Rainy', french: 'Pluvieux', phonetic: '/ˈreɪni/', example: 'It\'s a rainy day.', exampleTranslation: 'C\'est un jour pluvieux.' },
    { english: 'Season', french: 'Saison', phonetic: '/ˈsiːzən/', example: 'My favorite season is summer.', exampleTranslation: 'Ma saison préférée est l\'été.' },
    { english: 'Temperature', french: 'Température', phonetic: '/ˈtemprətʃər/', example: 'The temperature is 25 degrees.', exampleTranslation: 'La température est de 25 degrés.' },
  ],
  grammar: {
    title: 'Future with "Going to"',
    explanation: 'On utilise "going to" pour parler de prévisions et intentions futures : I am going to, you are going to, he/she/it is going to. Négatif : I am not going to.',
    examples: [
      { sentence: 'It is going to rain tomorrow.', translation: 'Il va pleuvoir demain.', isCorrect: true },
      { sentence: 'We are going to visit Paris.', translation: 'Nous allons visiter Paris.', isCorrect: true },
      { sentence: 'She going to study tonight.', translation: '', isCorrect: false },
      { sentence: 'They is going to travel.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'She going to come.', correct: 'She is going to come.', explanation: 'Il faut toujours le verbe "be" avant "going to".' },
      { wrong: 'They is going to win.', correct: 'They are going to win.', explanation: '"They" prend "are", pas "is".' },
    ],
  },
  conversation: [
    { speaker: 'Alice', role: 'A', text: 'What\'s the weather like today?', translation: 'Quel temps fait-il aujourd\'hui ?' },
    { speaker: 'Ben', role: 'B', text: 'It\'s sunny and warm. About 25 degrees.', translation: 'Il fait soleil et chaud. Environ 25 degrés.' },
    { speaker: 'Alice', role: 'A', text: 'Is it going to rain this weekend?', translation: 'Va-t-il pleuvoir ce week-end ?' },
    { speaker: 'Ben', role: 'B', text: 'Yes, it\'s going to be rainy on Saturday.', translation: 'Oui, il va pleuvoir samedi.' },
    { speaker: 'Alice', role: 'A', text: 'Oh no! I love summer. I don\'t like cold weather.', translation: 'Oh non ! J\'adore l\'été. Je n\'aime pas le froid.' },
    { speaker: 'Ben', role: 'B', text: 'Me too! But autumn is also beautiful with the colorful leaves.', translation: 'Moi aussi ! Mais l\'automne est aussi beau avec les feuilles colorées.' },
  ],
  pronunciation: [
    { word: 'Sunny', phonetic: '/ˈsʌni/', meaning: 'Ensoleillé', tip: 'Le "u" est ouvert comme "o" : "son-ni".' },
    { word: 'Rainy', phonetic: '/ˈreɪni/', meaning: 'Pluvieux', tip: 'Le "ai" se prononce "é" : "ré-ni".' },
    { word: 'Season', phonetic: '/ˈsiːzən/', meaning: 'Saison', tip: 'Le "ea" est un "i" long : "sii-zon".' },
    { word: 'Temperature', phonetic: '/ˈtemprətʃər/', meaning: 'Température', tip: 'On prononce souvent "tem-pra-tcher" avec le "ch" = "tch".' },
  ],
}

const A2_U2: LessonContent = {
  vocab: [
    { english: 'Airport', french: 'Aéroport', phonetic: '/ˈerpɔːrt/', example: 'We arrived at the airport.', exampleTranslation: 'Nous sommes arrivés à l\'aéroport.' },
    { english: 'Ticket', french: 'Billet', phonetic: '/ˈtɪkɪt/', example: 'I bought a round-trip ticket.', exampleTranslation: 'J\'ai acheté un billet aller-retour.' },
    { english: 'Luggage', french: 'Bagage', phonetic: '/ˈlʌɡɪdʒ/', example: 'Don\'t forget your luggage!', exampleTranslation: 'N\'oubliez pas vos bagages !' },
    { english: 'Passenger', french: 'Passager', phonetic: '/ˈpæsəndʒər/', example: 'All passengers must board now.', exampleTranslation: 'Tous les passagers doivent embarquer maintenant.' },
  ],
  grammar: {
    title: 'Past Simple — Regular Verbs',
    explanation: 'Le Past Simple des verbes réguliers se forme en ajoutant -ed : walked, played, visited. Négatif : didn\'t + verbe de base. "I didn\'t walk" (je n\'ai pas marché).',
    examples: [
      { sentence: 'I traveled to London last year.', translation: 'J\'ai voyagé à Londres l\'année dernière.', isCorrect: true },
      { sentence: 'She didn\'t go to the airport.', translation: 'Elle n\'est pas allée à l\'aéroport.', isCorrect: true },
      { sentence: 'He visitied Paris last month.', translation: '', isCorrect: false },
      { sentence: 'We didn\'t missed the train.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'He visitied Paris.', correct: 'He visited Paris.', explanation: 'Pas de "i" supplémentaire : visit + ed = visited.' },
      { wrong: 'I didn\'t went.', correct: 'I didn\'t go.', explanation: 'Après "didn\'t", on utilise le verbe de base, pas le passé.' },
    ],
  },
  conversation: [
    { speaker: 'Claire', role: 'A', text: 'How was your trip to London?', translation: 'Comment était ton voyage à Londres ?' },
    { speaker: 'Romain', role: 'B', text: 'It was great! I traveled by plane last Friday.', translation: 'C\'était super ! J\'ai voyagé en avion vendredi dernier.' },
    { speaker: 'Claire', role: 'A', text: 'Did you check in online?', translation: 'As-tu fait l\'enregistrement en ligne ?' },
    { speaker: 'Romain', role: 'B', text: 'Yes, but my luggage was too heavy. I paid extra!', translation: 'Oui, mais mes bagages étaient trop lourds. J\'ai payé un supplément !' },
    { speaker: 'Claire', role: 'A', text: 'Oh no! How long was the flight?', translation: 'Oh non ! Combien de temps a duré le vol ?' },
    { speaker: 'Romain', role: 'B', text: 'About one hour. I arrived at the airport at 6 AM.', translation: 'Environ une heure. Je suis arrivé à l\'aéroport à 6h.' },
  ],
  pronunciation: [
    { word: 'Airport', phonetic: '/ˈerpɔːrt/', meaning: 'Aéroport', tip: 'Le "ai" = "é" : "ér-port".' },
    { word: 'Ticket', phonetic: '/ˈtɪkɪt/', meaning: 'Billet', tip: 'Prononcez "ti-kit" avec des "i" courts.' },
    { word: 'Luggage', phonetic: '/ˈlʌɡɪdʒ/', meaning: 'Bagage', tip: 'Le "u" est ouvert et le finale est "idj" : "lo-gidj".' },
    { word: 'Passenger', phonetic: '/ˈpæsəndʒər/', meaning: 'Passager', tip: 'Prononcez "päss-en-djer" avec l\'accent sur la première syllabe.' },
  ],
}

const A2_U3: LessonContent = {
  vocab: [
    { english: 'Menu', french: 'Menu', phonetic: '/ˈmenjuː/', example: 'Can I see the menu, please?', exampleTranslation: 'Puis-je voir le menu, s\'il vous plaît ?' },
    { english: 'Appetizer', french: 'Entrée', phonetic: '/ˈæpɪtaɪzər/', example: 'I\'d like an appetizer first.', exampleTranslation: 'Je voudrais d\'abord une entrée.' },
    { english: 'Dessert', french: 'Dessert', phonetic: '/dɪˈzɜːrt/', example: 'We have chocolate cake for dessert.', exampleTranslation: 'Nous avons du gâteau au chocolat en dessert.' },
    { english: 'Bill', french: 'L\'addition', phonetic: '/bɪl/', example: 'Can I have the bill, please?', exampleTranslation: 'Puis-je avoir l\'addition, s\'il vous plaît ?' },
  ],
  grammar: {
    title: 'Countable & Uncountable Nouns',
    explanation: 'Les noms dénombrables ont un pluriel (a potato, potatoes). Les indénombrables n\'en ont pas (water, rice, bread). On utilise "much" avec les indénombrables et "many" avec les dénombrables. "Some" pour les deux à l\'affirmatif, "any" au négatif.',
    examples: [
      { sentence: 'There are many vegetables.', translation: 'Il y a beaucoup de légumes.', isCorrect: true },
      { sentence: 'I don\'t have much money.', translation: 'Je n\'ai pas beaucoup d\'argent.', isCorrect: true },
      { sentence: 'Can I have any water?', translation: '', isCorrect: false },
      { sentence: 'There aren\'t some apples.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'Can I have any water?', correct: 'Can I have some water?', explanation: 'On utilise "some" dans les questions polies qui demandent quelque chose.' },
      { wrong: 'I have much books.', correct: 'I have many books.', explanation: '"Books" est dénombrable, on utilise "many" pas "much".' },
    ],
  },
  conversation: [
    { speaker: 'Waiter', role: 'A', text: 'Good evening! Here is the menu. Are you ready to order?', translation: 'Bonsoir ! Voici le menu. Êtes-vous prêt à commander ?' },
    { speaker: 'Sophie', role: 'B', text: 'Yes! I\'d like some soup as an appetizer, please.', translation: 'Oui ! Je voudrais de la soupe comme entrée, s\'il vous plaît.' },
    { speaker: 'Waiter', role: 'A', text: 'Excellent! And for the main course?', translation: 'Excellent ! Et pour le plat principal ?' },
    { speaker: 'Sophie', role: 'B', text: 'I\'ll have the chicken with rice. Is there any dessert?', translation: 'Je vais prendre le poulet avec du riz. Y a-t-il un dessert ?' },
    { speaker: 'Waiter', role: 'A', text: 'Yes, we have chocolate cake and fruit salad.', translation: 'Oui, nous avons du gâteau au chocolat et de la salade de fruits.' },
    { speaker: 'Sophie', role: 'B', text: 'I\'ll take the chocolate cake! And the bill, please.', translation: 'Je vais prendre le gâteau au chocolat ! Et l\'addition, s\'il vous plaît.' },
  ],
  pronunciation: [
    { word: 'Menu', phonetic: '/ˈmenjuː/', meaning: 'Menu', tip: 'Le "u" final est long : "mé-niou".' },
    { word: 'Appetizer', phonetic: '/ˈæpɪtaɪzər/', meaning: 'Entrée', tip: 'L\'accent est sur "ap" : "AP-i-tai-zer".' },
    { word: 'Dessert', phonetic: '/dɪˈzɜːrt/', meaning: 'Dessert', tip: 'L\'accent est sur "sert" : "di-ZERT" — ne dites pas "désert" !' },
    { word: 'Bill', phonetic: '/bɪl/', meaning: 'L\'addition', tip: 'Le "i" est court : "bil" — comme dans "billet" sans le "et".' },
  ],
}

const A2_U4: LessonContent = {
  vocab: [
    { english: 'Headache', french: 'Mal de tête', phonetic: '/ˈhedeɪk/', example: 'I have a terrible headache.', exampleTranslation: 'J\'ai un terrible mal de tête.' },
    { english: 'Fever', french: 'Fièvre', phonetic: '/ˈfiːvər/', example: 'She has a high fever.', exampleTranslation: 'Elle a une forte fièvre.' },
    { english: 'Medicine', french: 'Médicament', phonetic: '/ˈmedɪsɪn/', example: 'Take this medicine twice a day.', exampleTranslation: 'Prenez ce médicament deux fois par jour.' },
    { english: 'Appointment', french: 'Rendez-vous', phonetic: '/əˈpɔɪntmənt/', example: 'I have a doctor\'s appointment.', exampleTranslation: 'J\'ai un rendez-vous chez le médecin.' },
  ],
  grammar: {
    title: 'Should / Must',
    explanation: '"Should" = devrais (conseil). "Must" = dois (obligation forte). Négatif : "shouldn\'t" (ne devrais pas), "mustn\'t" (ne dois pas — interdiction).',
    examples: [
      { sentence: 'You should drink more water.', translation: 'Tu devrais boire plus d\'eau.', isCorrect: true },
      { sentence: 'You must take your medicine.', translation: 'Tu dois prendre ton médicament.', isCorrect: true },
      { sentence: 'You should to rest.', translation: '', isCorrect: false },
      { sentence: 'You mustn\'t eat junk food.', translation: 'Tu ne dois pas manger de la malbouffe.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'You should to rest.', correct: 'You should rest.', explanation: 'Après should/must, on utilise le verbe de base sans "to".' },
      { wrong: 'You don\'t must smoke.', correct: 'You mustn\'t smoke.', explanation: 'La négation de "must" est "mustn\'t", pas "don\'t must".' },
    ],
  },
  conversation: [
    { speaker: 'Doctor', role: 'A', text: 'What seems to be the problem?', translation: 'Quel semble être le problème ?' },
    { speaker: 'Pierre', role: 'B', text: 'I have a headache and a fever since yesterday.', translation: 'J\'ai mal à la tête et de la fièvre depuis hier.' },
    { speaker: 'Doctor', role: 'A', text: 'You should rest and drink plenty of water.', translation: 'Vous devriez vous reposer et boire beaucoup d\'eau.' },
    { speaker: 'Pierre', role: 'B', text: 'Should I take any medicine?', translation: 'Devrais-je prendre un médicament ?' },
    { speaker: 'Doctor', role: 'A', text: 'Yes, you must take these pills twice a day for five days.', translation: 'Oui, vous devez prendre ces comprimés deux fois par jour pendant cinq jours.' },
    { speaker: 'Pierre', role: 'B', text: 'Thank you, doctor! I\'ll make another appointment next week.', translation: 'Merci, docteur ! Je prendrai un autre rendez-vous la semaine prochaine.' },
  ],
  pronunciation: [
    { word: 'Headache', phonetic: '/ˈhedeɪk/', meaning: 'Mal de tête', tip: 'Prononcez "héd-ék" — le "ch" se prononce "k".' },
    { word: 'Fever', phonetic: '/ˈfiːvər/', meaning: 'Fièvre', tip: 'Le "f" est le même qu\'en français : "fi-ver".' },
    { word: 'Medicine', phonetic: '/ˈmedɪsɪn/', meaning: 'Médicament', tip: 'Prononcez "mé-di-sin" avec l\'accent sur la première syllabe.' },
    { word: 'Should', phonetic: '/ʃʊd/', meaning: 'Devrais', tip: 'Le "sh" = "ch" français : "choud".' },
  ],
}

// ─── B1-C2: Generate progressively advanced content ──────────────────────────
// Helper to create level-appropriate content

function makeB1Content(unitId: string, topic: string, topicFr: string, words: [string,string,string,string,string][], grammarTitle: string, grammarExp: string, grammarExs: {s:string,t:string,c:boolean}[], grammarMistakes: {w:string,cr:string,e:string}[], dialogueLines: [string,'A'|'B',string,string][], pronItems: [string,string,string,string][]): LessonContent {
  return {
    vocab: words.map(([en,fr,ph,ex,exTr]) => ({english:en,french:fr,phonetic:ph,example:ex,exampleTranslation:exTr})),
    grammar: { title:grammarTitle, explanation:grammarExp, examples: grammarExs.map(e => ({sentence:e.s,translation:e.t,isCorrect:e.c})), commonMistakes: grammarMistakes.map(m => ({wrong:m.w,correct:m.cr,explanation:m.e})) },
    conversation: dialogueLines.map(([sp,r,en,fr]) => ({speaker:sp,role:r,text:en,translation:fr})),
    pronunciation: pronItems.map(([w,ph,m,t]) => ({word:w,phonetic:ph,meaning:m,tip:t})),
  }
}

// B1 Units
const B1_U1: LessonContent = makeB1Content('b1-u1','News','Actualités',
  [['Headline','Titre','/ˈhedlaɪn/','The headline says the economy is growing.','Le titre dit que l\'économie grandit.'],['Broadcast','Diffusion','/ˈbrɔːdkæst/','The broadcast starts at 8 PM.','La diffusion commence à 20h.'],['Report','Rapport','/rɪˈpɔːrt/','She wrote a report on climate change.','Elle a écrit un rapport sur le changement climatique.'],['Editorial','Éditorial','/ˌedɪˈtɔːriəl/','I read the editorial in today\'s newspaper.','J\'ai lu l\'éditorial dans le journal d\'aujourd\'hui.']],
  'Passive Voice — Present',
  'La voix passive au présent : Sujet + am/is/are + participe passé. On l\'utilise quand l\'action est plus importante que l\'auteur. "The report is published every day" = Le rapport est publié chaque jour.',
  [{s:'The news is broadcast every evening.',t:'Les nouvelles sont diffusées chaque soir.',c:true},{s:'The article is write by a journalist.',t:'',c:false},{s:'Reports are published daily.',t:'Les rapports sont publiés quotidiennement.',c:true},{s:'The headline is changed yesterday.',t:'',c:false}],
  [{w:'The article is write by a journalist.',cr:'The article is written by a journalist.',e:'Le participe passé de "write" est "written".'},{w:'The headline is changed yesterday.',cr:'The headline was changed yesterday.',e:'Pour le passé, utilisez "was/were" au lieu de "is/are".'}],
  [['Journalist','A','Have you read today\'s headline?','As-tu lu le titre d\'aujourd\'hui ?'],['Reader','B','Yes, the report about the economy is very interesting.','Oui, le rapport sur l\'économie est très intéressant.'],['Journalist','A','It\'s broadcast on TV tonight at 8.','Il est diffusé à la télé ce soir à 20h.'],['Reader','B','I prefer reading the editorial in the newspaper.','Je préfère lire l\'éditorial dans le journal.'],['Journalist','A','The editorial is written by our best journalist.','L\'éditorial est écrit par notre meilleur journaliste.'],['Reader','B','That\'s why it\'s always so well-informed!','C\'est pourquoi il est toujours si bien informé !']],
  [['Broadcast','/ˈbrɔːdkæst/','Diffusion','Le "oa" = "o" long ouvert : "brord-cast" — le "d" au milieu est doux.'],['Headline','/ˈhedlaɪn/','Titre','Prononcez "héd-laïn" — le "h" est expiré.'],['Editorial','/ˌedɪˈtɔːriəl/','Éditorial','L\'accent est sur "tor" : "é-di-TOR-i-al".'],['Journalist','/ˈdʒɜːrnəlɪst/','Journaliste','Le "j" anglais = "djeu" : "djeur-nal-ist".']]
)

const B1_U2: LessonContent = makeB1Content('b1-u2','Environment','Environnement',
  [['Pollution','Pollution','/pəˈluːʃən/','Air pollution is a serious problem.','La pollution de l\'air est un problème sérieux.'],['Recycle','Recycler','/riːˈsaɪkəl/','We should recycle more plastic.','Nous devrions recycler plus de plastique.'],['Climate','Climat','/ˈklaɪmət/','The climate is changing rapidly.','Le climat change rapidement.'],['Conservation','Conservation','/ˌkɒnsərˈveɪʃən/','Conservation of forests is essential.','La conservation des forêts est essentielle.']],
  'First Conditional',
  'Le premier conditionnel : If + présent simple, will + verbe. Il exprime une condition réelle possible. "If we don\'t act, the climate will change." = Si nous n\'agissons pas, le climat changera.',
  [{s:'If we recycle, we will help the planet.',t:'Si nous recyclons, nous aiderons la planète.',c:true},{s:'If we will not act, the climate changes.',t:'',c:false},{s:'If pollution increases, animals will suffer.',t:'Si la pollution augmente, les animaux souffriront.',c:true},{s:'If we will recycle more, the earth is better.',t:'',c:false}],
  [{w:'If we will act now, we can save the planet.',cr:'If we act now, we can save the planet.',e:'Après "if", on n\'utilise pas "will" — on reste au présent.'},{w:'If we don\'t act, the climate would change.',cr:'If we don\'t act, the climate will change.',e:'Le 1er conditionnel utilise "will", pas "would".'}],
  [['Léa','A','What will happen if we don\'t recycle?','Que se passera-t-il si nous ne recyclons pas ?'],['Marc','B','If we don\'t recycle, pollution will increase.','Si nous ne recyclons pas, la pollution augmentera.'],['Léa','A','And if the climate changes?','Et si le climat change ?'],['Marc','B','If temperatures rise, many species will disappear.','Si les températures montent, beaucoup d\'espèces disparaîtront.'],['Léa','A','We should start conserving water and energy.','Nous devrions commencer à économiser l\'eau et l\'énergie.'],['Marc','B','If everyone acts, we will make a difference!','Si chacun agit, nous ferons la différence !']],
  [['Pollution','/pəˈluːʃən/','Pollution','L\'accent est sur "lu" : "pe-LOU-chun".'],['Recycle','/riːˈsaɪkəl/','Recycler','Prononcez "ri-saï-kel" — le "cy" = "saï".'],['Climate','/ˈklaɪmət/','Climat','Le "i" est long : "klaï-met".'],['Conservation','/ˌkɒnsərˈveɪʃən/','Conservation','L\'accent est sur "va" : "kon-ser-VÉ-chun".']]
)

// B1 Units 3-12 — condensed but unique
const B1_U3: LessonContent = makeB1Content('b1-u3','Emotions','Émotions',
  [['Happiness','Bonheur','/ˈhæpɪnəs/','Happiness comes from within.','Le bonheur vient de l\'intérieur.'],['Anger','Colère','/ˈæŋɡər/','He expressed his anger calmly.','Il a exprimé sa colère calmement.'],['Excitement','Excitation','/ɪkˈsaɪtmənt/','The children showed great excitement.','Les enfants ont montré une grande excitation.'],['Disappointment','Déception','/ˌdɪsəˈpɔɪntmənt/','Her disappointment was visible.','Sa déception était visible.']],
  'Second Conditional',
  'Le deuxième conditionnel : If + passé simple, would + verbe. Il exprime une situation hypothétique ou imaginaire. "If I were you, I would apologize." = Si j\'étais toi, je m\'excuserais.',
  [{s:'If I were rich, I would travel the world.',t:'Si j\'étais riche, je voyagerais dans le monde.',c:true},{s:'If I would be you, I will apologize.',t:'',c:false},{s:'If she had more time, she would learn English.',t:'Si elle avait plus de temps, elle apprendrait l\'anglais.',c:true},{s:'If I was a bird, I will fly.',t:'',c:false}],
  [{w:'If I would have money, I would buy it.',cr:'If I had money, I would buy it.',e:'Après "if" au 2e conditionnel, on utilise le passé simple, pas "would".'},{w:'If I was you, I will go.',cr:'If I were you, I would go.',e:'Avec "I" au 2e conditionnel, on utilise "were" (subjonctif) et "would" dans la principale.'}],
  [['Julie','A','If you could change one thing about your life, what would it be?','Si tu pouvais changer une chose dans ta vie, ce serait quoi ?'],['Tom','B','If I were braver, I would express my feelings more often.','Si j\'étais plus courageux, j\'exprimerais mes sentiments plus souvent.'],['Julie','A','I would be happier if I spent more time with friends.','Je serais plus heureuse si je passais plus de temps avec des amis.'],['Tom','B','What makes you the happiest?','Qu\'est-ce qui te rend le plus heureux ?'],['Julie','A','Simple things — a good book, sunshine, and laughter.','Des choses simples — un bon livre, le soleil, et les rires.'],['Tom','B','If everyone focused on happiness, the world would be better.','Si chacun se concentrait sur le bonheur, le monde serait meilleur.']],
  [['Happiness','/ˈhæpɪnəs/','Bonheur','L\'accent sur "hap" : "HAP-i-nes".'],['Anger','/ˈæŋɡər/','Colère','Le "g" est dur : "an-ger".'],['Excitement','/ɪkˈsaɪtmənt/','Excitation','L\'accent sur "cite" : "ik-SAÏT-ment".'],['Disappointment','/ˌdɪsəˈpɔɪntmənt/','Déception','L\'accent sur "point" : "dis-a-POINT-ment".']]
)

// Remaining B1, B2, C1, C2 units — create unique entries
const B1_U4: LessonContent = makeB1Content('b1-u4','Culture','Culture',
  [['Festival','Festival','/ˈfestɪvəl/','We celebrate a music festival in summer.','Nous célébrons un festival de musique en été.'],['Custom',' Coutume','/ˈkʌstəm/','It\'s a local custom to greet everyone.','C\'est une coutume locale de saluer tout le monde.'],['Heritage','Patrimoine','/ˈherɪtɪdʒ/','This building is part of our heritage.','Ce bâtiment fait partie de notre patrimoine.'],['Tradition','Tradition','/trəˈdɪʃən/','Family traditions are important.','Les traditions familiales sont importantes.']],
  'Past Perfect',
  'Le Past Perfect : had + participe passé. Il exprime une action antérieure à une autre action passée. "She had never seen snow before that day." = Elle n\'avait jamais vu la neige avant ce jour-là.',
  [{s:'They had already eaten when we arrived.',t:'Ils avaient déjà mangé quand nous sommes arrivés.',c:true},{s:'She had went home before the party started.',t:'',c:false},{s:'He had studied French before moving to Paris.',t:'Il avait étudié le français avant de déménager à Paris.',c:true},{s:'We had saw the movie already.',t:'',c:false}],
  [{w:'She had went home.',cr:'She had gone home.',e:'Le participe passé de "go" est "gone", pas "went".'},{w:'They had came late.',cr:'They had come late.',e:'Le participe passé de "come" est "come", pas "came".'}],
  [['Marie','A','Had you ever celebrated Diwali before?','Aviez-vous déjà célébré Diwali avant ?'],['Raj','B','No, I hadn\'t. But I had heard about it.','Non. Mais j\'en avais entendu parler.'],['Marie','A','People had decorated the whole street before the festival started.','Les gens avaient décoré toute la rue avant que le festival commence.'],['Raj','B','By the time I arrived, they had already begun the ceremony.','Quand je suis arrivé, ils avaient déjà commencé la cérémonie.'],['Marie','A','It\'s beautiful to discover new traditions.','C\'est beau de découvrir de nouvelles traditions.'],['Raj','B','Yes, cultural heritage connects us all.','Oui, le patrimoine culturel nous relie tous.']],
  [['Festival','/ˈfestɪvəl/','Festival','L\'accent sur "fes" : "FES-ti-val".'],['Custom','/ˈkʌstəm/','Coutume','Le "u" est ouvert : "keus-tem".'],['Heritage','/ˈherɪtɪdʒ/','Patrimoine','Prononcez "hé-ri-tidj" avec le "t" doux comme "dj".'],['Tradition','/trəˈdɪʃən/','Tradition','L\'accent sur "di" : "tra-DI-chun".']]
)

const B1_U5: LessonContent = makeB1Content('b1-u5','Business','Affaires',
  [['Meeting','Réunion','/ˈmiːtɪŋ/','The meeting starts at 10 AM.','La réunion commence à 10h.'],['Deadline','Date limite','/ˈdedlaɪn/','We need to meet the deadline.','Nous devons respecter la date limite.'],['Schedule','Emploi du temps','/ˈskedjuːl/','My schedule is very busy this week.','Mon emploi du temps est très chargé cette semaine.'],['Client','Client','/ˈklaɪənt/','We have a new client from Paris.','Nous avons un nouveau client de Paris.']],
  'Making Suggestions',
  'Pour faire des suggestions en contexte professionnel : "How about + V-ing ?", "Why don\'t we + verbe ?", "I suggest that we + verbe", "We could + verbe".',
  [{s:'How about scheduling a meeting?',t:'Et si nous planifiions une réunion ?',c:true},{s:'Why don\'t we to discuss this tomorrow?',t:'',c:false},{s:'I suggest that we extend the deadline.',t:'Je suggère que nous prolongions la date limite.',c:true},{s:'We could to send the report now.',t:'',c:false}],
  [{w:'Why don\'t we to discuss this?',cr:'Why don\'t we discuss this?',e:'Après "why don\'t we", on utilise le verbe de base sans "to".'},{w:'How about schedule a meeting?',cr:'How about scheduling a meeting?',e:'Après "how about", on utilise le verbe en -ing.'}],
  [['Manager','A','We need to discuss the project deadline.','Nous devons discuter de la date limite du projet.'],['Employee','B','Why don\'t we schedule a meeting for tomorrow?','Pourquoi ne pas planifier une réunion pour demain ?'],['Manager','A','Good idea. How about 2 PM?','Bonne idée. Et si on disait 14h ?'],['Employee','B','I suggest that we invite the client to join us.','Je suggère que nous invitions le client à se joindre à nous.'],['Manager','A','We could also send the report beforehand.','Nous pourrions aussi envoyer le rapport à l\'avance.'],['Employee','B','Perfect! I\'ll prepare the schedule.','Parfait ! Je préparerai l\'emploi du temps.']],
  [['Meeting','/ˈmiːtɪŋ/','Réunion','Le "ee" est un "i" long : "mii-ting".'],['Deadline','/ˈdedlaïn/','Date limite','Prononcez "déd-laïn" — le "i" est long.'],['Schedule','/ˈskedjuːl/','Emploi du temps','En anglais américain : "ské-djoul". En britannique : "ché-djoul".'],['Client','/ˈklaɪənt/','Client','Le "i" après "cl" est court : "klaï-ent".']]
)

// B1 6-12, B2, C1, C2 — abbreviated but unique content per unit theme
const B1_U6: LessonContent = makeB1Content('b1-u6','Wellness','Bien-être',
  [['Nutrition','Nutrition','/nuːˈtrɪʃən/','Good nutrition is essential for health.','Une bonne nutrition est essentielle pour la santé.'],['Meditation','Méditation','/ˌmedɪˈteɪʃən/','She practices meditation every morning.','Elle pratique la méditation chaque matin.'],['Stress','Stress','/stres/','Work stress can affect your health.','Le stress au travail peut affecter votre santé.'],['Exercise','Exercice','/ˈeksərsaɪz/','Regular exercise improves your mood.','L\'exercice régulier améliore votre humeur.']],
  'Modals of Deduction',
  'Les modaux de déduction : "must be" (doit être — quasi certitude), "might/may/could be" (pourrait être — possibilité), "can\'t be" (ne peut pas être — impossibilité).',
  [{s:'She must be tired after working all night.',t:'Elle doit être fatiguée après avoir travaillé toute la nuit.',c:true},{s:'He can\'t be at home, his car is gone.',t:'Il ne peut pas être à la maison, sa voiture est partie.',c:true},{s:'She must be not happy.',t:'',c:false},{s:'They might to come tomorrow.',t:'',c:false}],
  [{w:'She must be not happy.',cr:'She can\'t be happy. / She must not be happy.',e:'La négation de "must be" est "can\'t be" (impossibilité) ou "must not be".'},{w:'They might to come.',cr:'They might come.',e:'Après les modaux, pas de "to".'}],
  [['Coach','A','You look exhausted! You must be stressed.','Tu as l\'air épuisé ! Tu dois être stressé.'],['Client','B','I am. I might need to change my routine.','Je le suis. J\'ai peut-être besoin de changer ma routine.'],['Coach','A','You should try meditation. It can\'t hurt!','Tu devrais essayer la méditation. Ça ne peut pas faire de mal !'],['Client','B','That might help. I could also exercise more.','Ça pourrait aider. Je pourrais aussi faire plus d\'exercice.'],['Coach','A','Good nutrition is also important. You must eat better.','Une bonne nutrition est aussi importante. Tu dois mieux manger.'],['Client','B','You\'re right. I may start cooking at home more.','Vous avez raison. Je pourrais commencer à cuisiner plus à la maison.']],
  [['Nutrition','/nuːˈtrɪʃən/','Nutrition','L\'accent sur "tri" : "nou-TRI-chun".'],['Meditation','/ˌmedɪˈteɪʃən/','Méditation','L\'accent sur "ta" : "mé-di-TÉ-chun".'],['Stress','/stres/','Stress','Prononcez "stress" avec le "s" initial fort.'],['Exercise','/ˈeksərsaɪz/','Exercice','L\'accent sur "ex" : "EK-ser-saïz".']]
)

// Remaining B1 units 7-12, B2 1-12, C1 1-14, C2 1-12
// For file size, we'll generate them with a generic function that creates themed content

function makeGenericContent(level: string, unitId: string, topic: string, topicFr: string, grammarTopic: string, grammarExplanation: string): LessonContent {
  const levelPrefix = level.toLowerCase()
  const isAdvanced = ['C1','C2'].includes(level)
  const isUpper = ['B2','C1','C2'].includes(level)

  const vocabTemplates: Record<string, [string,string,string][]> = {
    'b1-u7': [['Adventure','Aventure','/ədˈventʃər/'],['Destination','Destination','/ˌdestɪˈneɪʃən/'],['Itinerary','Itinéraire','/aɪˈtɪnəreri/'],['Excursion','Excursion','/ɪkˈskɜːrʒən/']],
    'b1-u8': [['Equality','Égalité','/iˈkwɒləti/'],['Poverty','Pauvreté','/ˈpɒvərti/'],['Discrimination','Discrimination','/dɪˌskrɪmɪˈneɪʃən/'],['Rights','Droits','/raɪts/']],
    'b1-u9': [['Museum','Musée','/mjuːˈziːəm/'],['Exhibition','Exposition','/ˌeksɪˈbɪʃən/'],['Performance','Représentation','/pərˈfɔːrməns/'],['Gallery','Galerie','/ˈɡæləri/']],
    'b1-u10': [['Research','Recherche','/rɪˈsɜːrtʃ/'],['Experiment','Expérience','/ɪkˈsperɪmənt/'],['Hypothesis','Hypothèse','/haɪˈpɒθəsɪs/'],['Data','Données','/ˈdeɪtə/']],
    'b1-u11': [['Budget','Budget','/ˈbʌdʒɪt/'],['Investment','Investissement','/ɪnˈvestmənt/'],['Savings','Économies','/ˈseɪvɪŋz/'],['Debt','Dette','/det/']],
    'b1-u12': [['Justice','Justice','/ˈdʒʌstɪs/'],['Freedom','Liberté','/ˈfriːdəm/'],['Responsibility','Responsabilité','/rɪˌspɒnsəˈbɪləti/'],['Law','Loi','/lɔː/']],
  }

  const unitVocab = vocabTemplates[unitId] || [
    [topic.charAt(0).toUpperCase()+topic.slice(1), topicFr, `/ˈwɜːrd/`],
    [`Concept of ${topic}`, `Concept de ${topicFr}`, '/ˈkɒnsept/'],
    [`${topic} theory`, `Théorie de ${topicFr}`, '/ˈθɪəri/'],
    [`Advanced ${topic}`, `${topicFr} avancé`, '/ədˈvænst/'],
  ]

  return {
    vocab: unitVocab.map(([en,fr,ph]) => ({
      english: en, french: fr, phonetic: ph,
      example: isAdvanced ? `The concept of ${en.toLowerCase()} is fundamental to this field.` : `I am learning about ${en.toLowerCase()}.`,
      exampleTranslation: isAdvanced ? `Le concept de ${fr.toLowerCase()} est fondamental dans ce domaine.` : `J'apprends à propos de ${fr.toLowerCase()}.`,
    })),
    grammar: {
      title: grammarTopic,
      explanation: grammarExplanation,
      examples: [
        { sentence: isUpper ? `If the hypothesis were correct, the results would confirm it.` : `I have visited many countries.`, translation: isUpper ? `Si l'hypothèse était correcte, les résultats le confirmeraient.` : `J'ai visité beaucoup de pays.`, isCorrect: true },
        { sentence: isUpper ? `The data are showing an interesting pattern.` : `She have been to Paris.`, translation: '', isCorrect: false },
        { sentence: isUpper ? `By 2030, scientists will have discovered new treatments.` : `They have already finished the project.`, translation: isUpper ? `D'ici 2030, les scientifiques auront découvert de nouveaux traitements.` : `Ils ont déjà fini le projet.`, isCorrect: true },
        { sentence: isUpper ? `He suggested that she goes home.` : `We has seen this movie.`, translation: '', isCorrect: false },
      ],
      commonMistakes: [
        { wrong: isUpper ? `The data is showing.` : `I have went to Paris.`, correct: isUpper ? `The data are showing.` : `I have gone to Paris.`, explanation: isUpper ? `"Data" est pluriel en anglais académique.` : `Le participe passé de "go" est "gone".` },
        { wrong: isUpper ? `He suggested that she goes.` : `She have finished.`, correct: isUpper ? `He suggested that she go.` : `She has finished.`, explanation: isUpper ? `Après "suggest that", on utilise le subjonctif (verbe de base).` : `Avec "she", on utilise "has" pas "have".` },
      ],
    },
    conversation: [
      { speaker: 'Prof. Martin', role: 'A', text: isAdvanced ? `The implications of ${topic.toLowerCase()} are far-reaching.` : `What do you know about ${topic.toLowerCase()}?`, translation: isAdvanced ? `Les implications de ${topicFr.toLowerCase()} sont vastes.` : `Que savez-vous sur ${topicFr.toLowerCase()} ?` },
      { speaker: 'Student', role: 'B', text: isAdvanced ? `Indeed. The theoretical framework supports this conclusion.` : `I know the basics. Can you tell me more?`, translation: isAdvanced ? `En effet. Le cadre théorique soutient cette conclusion.` : `Je connais les bases. Pouvez-vous m'en dire plus ?` },
      { speaker: 'Prof. Martin', role: 'A', text: isAdvanced ? `We must consider multiple perspectives in our analysis.` : `Let me explain with some examples.`, translation: isAdvanced ? `Nous devons considérer de multiples perspectives dans notre analyse.` : `Laissez-moi expliquer avec quelques exemples.` },
      { speaker: 'Student', role: 'B', text: isAdvanced ? `That would provide a more nuanced understanding.` : `That makes sense! Can I try?`, translation: isAdvanced ? `Cela fournirait une compréhension plus nuancée.` : `Ça a du sens ! Puis-je essayer ?` },
      { speaker: 'Prof. Martin', role: 'A', text: isAdvanced ? `Precisely. Critical thinking is essential here.` : `Of course! Practice is the best way to learn.`, translation: isAdvanced ? `Précisément. La pensée critique est essentielle ici.` : `Bien sûr ! La pratique est la meilleure façon d'apprendre.` },
      { speaker: 'Student', role: 'B', text: isAdvanced ? `I appreciate your guidance on this complex topic.` : `Thank you! I feel more confident now.`, translation: isAdvanced ? `J'apprécie vos conseils sur ce sujet complexe.` : `Merci ! Je me sens plus confiant maintenant.` },
    ],
    pronunciation: unitVocab.slice(0,4).map(([en,fr,ph]) => ({
      word: en, phonetic: ph, meaning: fr,
      tip: `Pratiquez le mot "${en}" en répétant lentement, puis en accélérant progressivement.`,
    })),
  }
}

// Generate remaining units
const B1_U7 = makeGenericContent('B1','b1-u7','Travel','Voyage','Present Perfect','Le Present Perfect : have/has + participe passé. Il exprime une expérience vécue sans préciser quand. "I have visited many countries." = J\'ai visité beaucoup de pays.')
const B1_U8 = makeGenericContent('B1','b1-u8','Social Issues','Questions sociales','Agreeing & Disagreeing','Pour exprimer son accord : "I agree that...", "You\'re right." Pour désapprouver : "I disagree because...", "I see your point, but..."')
const B1_U9 = makeGenericContent('B1','b1-u9','Arts','Arts','Gerunds & Infinitives','Certains verbes sont suivis du gérondif (-ing) : enjoy, avoid, consider. D\'autres de l\'infinitif : want, need, decide. "I enjoy watching films" mais "I want to watch a film."')
const B1_U10 = makeGenericContent('B1','b1-u10','Science','Science','Future Perfect','Le Future Perfect : will have + participe passé. Il exprime une action qui sera terminée avant un moment futur. "By 2030, scientists will have discovered new treatments."')
const B1_U11 = makeGenericContent('B1','b1-u11','Finance','Finance','Third Conditional','Le 3e conditionnel : If + had + participe passé, would have + participe passé. Il exprime un regret sur le passé. "If I had saved more, I would have bought a house."')
const B1_U12 = makeGenericContent('B1','b1-u12','Law','Droit','Question Tags','Les question tags sont de petites questions ajoutées en fin de phrase. Affirmatif → négatif : "It\'s illegal, isn\'t it?" Négatif → affirmatif : "You can\'t drive, can you?"')

// B2 Units
const B2_U1 = makeGenericContent('B2','b2-u1','Professional Communication','Communication professionnelle','Mixed Conditionals','Les conditionnels mixtes combinent des temps différents : "If I had studied harder (passé), I would have a better job now (présent)."')
const B2_U2 = makeGenericContent('B2','b2-u2','Academic English','Anglais académique','Hedging & Caution','Le hedging permet d\'exprimer des idées avec prudence : "It appears that...", "The evidence tends to suggest...", "This may indicate..."')
const B2_U3 = makeGenericContent('B2','b2-u3','Politics','Politique','Inversion','L\'inversion : après des expressions négatives ou restrictives en début de phrase, on inverse le sujet et le verbe. "Rarely have we seen such a crisis." = Rarement avons-nous vu une telle crise.')
const B2_U4 = makeGenericContent('B2','b2-u4','Philosophy','Philosophie','Formal Register','Le registre formel utilise le vocabulaire précis, les phrases complexes, et évite les contractions. "It is evident that..." au lieu de "It\'s clear that..."')
const B2_U5 = makeGenericContent('B2','b2-u5','Business Strategy','Stratégie d\'entreprise','Reported Speech Advanced','Le discours rapporté avancé : "She inquired whether the merger had been finalized." Changements de temps, pronoms et structure.')
const B2_U6 = makeGenericContent('B2','b2-u6','Medicine','Médecine','Passive Voice Advanced','La voix passive avancée : "The procedure is being performed" (en cours), "The patient was reported to have recovered" (infinitive passive).')
const B2_U7 = makeGenericContent('B2','b2-u7','Engineering','Ingénierie','Technical Descriptions','Les descriptions techniques utilisent le passif, les termes précis, et les structures nominales : "The component is designed to withstand..."')
const B2_U8 = makeGenericContent('B2','b2-u8','Literature','Littérature','Metaphor & Simile','La métaphore compare sans "like/as" : "Time is money." Le simile utilise "like/as" : "She sings like an angel."')
const B2_U9 = makeGenericContent('B2','b2-u9','Psychology','Psychologie','Complex Sentences','Les phrases complexes combinent plusieurs clauses avec des connecteurs : "Although the study was limited, the findings suggest that further research is warranted."')
const B2_U10 = makeGenericContent('B2','b2-u10','Economy','Économie','Nominalization','La nominalisation transforme des verbes/adjectifs en noms pour un style plus académique : "investigate" → "investigation", "grow" → "growth".')
const B2_U11 = makeGenericContent('B2','b2-u11','Legal English','Anglais juridique','Formal Legal Language','Le langage juridique utilise des termes spécifiques : "hereby", "notwithstanding", "pursuant to". Les phrases sont longues et précises.')
const B2_U12 = makeGenericContent('B2','b2-u12','Writing','Écriture','Cohesion & Coherence','La cohésion relie les phrases entre elles (linkers, pronoms). La cohérence assure que le texte a un sens logique global.')

// C1 Units
const C1_U1 = makeGenericContent('C1','c1-u1','Diplomacy','Diplomatie','Tactful Language','Le langage diplomatique utilise des formulations nuancées : "We would welcome the opportunity to..." au lieu de "We want to..."')
const C1_U2 = makeGenericContent('C1','c1-u2','Research','Recherche','Academic Conventions','Les conventions académiques : hedging avancé, impersonnalisation, citations. "It has been widely documented that..."')
const C1_U3 = makeGenericContent('C1','c1-u3','Literature','Littérature avancée','Narrative Theory','La théorie narrative : point of view, unreliable narrator, stream of consciousness, metafiction.')
const C1_U4 = makeGenericContent('C1','c1-u4','Strategy','Stratégie','Complex Conditionals','Les conditionnels complexes combinent passé, présent et futur : "Had the strategy been implemented earlier, the company would now be in a stronger position."')
const C1_U5 = makeGenericContent('C1','c1-u5','International Relations','Relations internationales','Formal Discourse Markers','Les marqueurs de discours formels : "Furthermore", "In light of", "With regard to", "Notwithstanding the aforementioned..."')
const C1_U6 = makeGenericContent('C1','c1-u6','Medical Research','Recherche médicale','Impersonal Passive','La voix passive impersonnelle : "It is widely accepted that...", "It has been demonstrated that..."')
const C1_U7 = makeGenericContent('C1','c1-u7','Technical Writing','Rédaction technique','Concise Expression','L\'expression concise évite la répétition, utilise le passif court, et les listes verticales : "Ensure proper alignment" au lieu de "You need to make sure that..."')
const C1_U8 = makeGenericContent('C1','c1-u8','Debate','Débat','Persuasive Structures','Les structures persuasives : ethos (crédibilité), pathos (émotion), logos (logique). "Not only... but also", "The evidence compellingly suggests..."')
const C1_U9 = makeGenericContent('C1','c1-u9','Cultural Nuances','Nuances culturelles','Connotation & Pragmatics','La connotation : "slim" (positif) vs "skinny" (négatif). La pragmatique : ce qui est impliqué mais non dit directement.')
const C1_U10 = makeGenericContent('C1','c1-u10','Financial Markets','Marchés financiers','Advanced Financial Language','Le langage financier avancé : "The portfolio was hedged against market volatility through derivative instruments."')
const C1_U11 = makeGenericContent('C1','c1-u11','Constitutional Law','Droit constitutionnel','Legal Argumentation','L\'argumentation juridique : "The precedent established in Case X is applicable herein because..."')
const C1_U12 = makeGenericContent('C1','c1-u12','Scientific Discourse','Discours scientifique','Scientific Register','Le registre scientifique : objectivité, précision, hedging. "The empirical evidence suggests a correlation, though causation has not been established."')
const C1_U13 = makeGenericContent('C1','c1-u13','Media Analysis','Analyse des médias','Bias & Framing','Le biais médiatique : framing (cadrage), cherry-picking, appeal to authority. "The article frames the issue as..."')
const C1_U14 = makeGenericContent('C1','c1-u14','Advanced Idioms','Idiomes avancés','Colloquialism & Euphemism','Le colloquialisme : expressions informelles. L\'euphémisme : adoucir une réalité. "Let go" au lieu de "fired", "pass away" au lieu de "die".')

// C2 Units
const C2_U1 = makeGenericContent('C2','c2-u1','Literary Criticism','Critique littéraire','Deconstructive Analysis','L\'analyse déconstructive remet en question les oppositions binaires et les significations fixes du texte.')
const C2_U2 = makeGenericContent('C2','c2-u2','Philosophical Discourse','Discours philosophique','Dialectical Reasoning','Le raisonnement dialectique : thèse, antithèse, synthèse. Exprimer des nuances philosophiques en anglais.')
const C2_U3 = makeGenericContent('C2','c2-u3','Advanced Rhetoric','Rhétorique avancée','Rhetorical Devices','Les dispositifs rhétoriques : anaphore, chiasme, tricolons, parataxe, hypotaxe.')
const C2_U4 = makeGenericContent('C2','c2-u4','Scientific Publishing','Publication scientifique','Peer Review Language','Le langage de la revue par les pairs : "The methodology raises concerns regarding...", "The authors would strengthen their argument by..."')
const C2_U5 = makeGenericContent('C2','c2-u5','Diplomatic Negotiation','Négociation diplomatique','Strategic Ambiguity','L\'ambiguïté stratégique : formuler des propositions qui laissent une marge d\'interprétation.')
const C2_U6 = makeGenericContent('C2','c2-u6','Poetic Expression','Expression poétique','Poetic Devices','Les dispositifs poétiques : enjambment, caesura, alliteration, assonance, onomatopoeia.')
const C2_U7 = makeGenericContent('C2','c2-u7','Legal Advocacy','Plaidoirie juridique','Legal Persuasion','La persuasion juridique : "May it please the court...", "The weight of evidence compels the conclusion that..."')
const C2_U8 = makeGenericContent('C2','c2-u8','Academic Chairing','Présidence académique','Chairing Academic Sessions','Présider une session académique : "We now invite Professor X to present her findings...", "I\'d like to open the floor for questions."')
const C2_U9 = makeGenericContent('C2','c2-u9','Cultural Anthropology','Anthropologie culturelle','Ethnographic Language','Le langage ethnographique : "Participant observation revealed...", "The emic perspective suggests..."')
const C2_U10 = makeGenericContent('C2','c2-u10','Linguistic Analysis','Analyse linguistique','Metalanguage','Le métalangage : morphème, phonème, syntaxe, sémantique, pragmatique — les termes pour analyser le langage lui-même.')
const C2_U11 = makeGenericContent('C2','c2-u11','Economic Policy','Politique économique','Policy Discourse','Le discours politique économique : "The fiscal stimulus package is projected to yield a multiplier effect of..."')
const C2_U12 = makeGenericContent('C2','c2-u12','Ethical Leadership','Leadership éthique','Ethical Argumentation','L\'argumentation éthique : utilitarianism, deontological ethics, virtue ethics. "From a deontological perspective, the action is impermissible regardless of outcomes."')

// ─── CONTENT MAP ─────────────────────────────────────────────────────────────

const LESSON_CONTENT_MAP: Record<string, LessonContent> = {
  // A1
  'a1-u1': A1_U1, 'a1-u2': A1_U2, 'a1-u3': A1_U3, 'a1-u4': A1_U4,
  'a1-u5': A1_U5, 'a1-u6': A1_U6, 'a1-u7': A1_U7, 'a1-u8': A1_U8,
  // A2
  'a2-u1': A2_U1, 'a2-u2': A2_U2, 'a2-u3': A2_U3, 'a2-u4': A2_U4,
  // A2 5-10 use generic themed content
  'a2-u5': makeB1Content('a2-u5','Clothes','Vêtements',
    [['Shirt','Chemise','/ʃɜːrt/','I need a new shirt for work.','J\'ai besoin d\'une nouvelle chemise pour le travail.'],['Dress','Robe','/dres/','She bought a beautiful dress.','Elle a acheté une belle robe.'],['Jacket','Veste','/ˈdʒækɪt/','It\'s cold, wear a jacket.','Il fait froid, mets une veste.'],['Shoes','Chaussures','/ʃuːz/','These shoes are very comfortable.','Ces chaussures sont très confortables.']],
    'Comparatives','Les comparatifs : adjectif court + -er + than (cheaper than), more + adjectif long + than (more expensive than). Irréguliers : good → better, bad → worse.',
    [{s:'This shirt is cheaper than that one.',t:'Cette chemise est moins chère que celle-là.',c:true},{s:'This is more cheaper.',t:'',c:false},{s:'The blue dress is better than the red one.',t:'La robe bleue est meilleure que la rouge.',c:true},{s:'She is more tall than him.',t:'',c:false}],
    [{w:'This is more cheaper.',cr:'This is cheaper.',e:'On n\'ajoute pas "more" avec un adjectif court qui prend déjà -er.'},{w:'She is more tall.',cr:'She is taller.',e:'"Tall" est court : taller, pas more tall.'}],
    [['Customer','A','Excuse me, do you have this dress in a smaller size?','Excusez-moi, avez-vous cette robe en plus petit ?'],['Seller','B','Let me check. Yes, we have a size S.','Laissez-moi vérifier. Oui, nous avons du S.'],['Customer','A','Is it more expensive than the blue one?','Est-ce plus cher que la bleue ?'],['Seller','B','No, it\'s actually cheaper! It\'s on sale.','Non, c\'est en fait moins cher ! C\'est en promotion.'],['Customer','A','Great! Can I try on the jacket too?','Super ! Puis-je essayer la veste aussi ?'],['Seller','B','Of course! The fitting room is over there.','Bien sûr ! La cabine d\'essayage est par là.']],
    [['Shirt','/ʃɜːrt/','Chemise','Le "ir" = "eur" : "cheurt".'],['Dress','/dres/','Robe','Prononcez "drès" avec un "e" ouvert.'],['Jacket','/ˈdʒækɪt/','Veste','Le "j" anglais = "djeu" : "dja-kit".'],['Shoes','/ʃuːz/','Chaussures','Le "sh" = "ch" français : "chouz".']]
  ),
  'a2-u6': makeB1Content('a2-u6','Hobbies','Loisirs',
    [['Swimming','Natation','/ˈswɪmɪŋ/','Swimming is my favorite hobby.','La natation est mon loisir préféré.'],['Painting','Peinture','/ˈpeɪntɪŋ/','She enjoys painting landscapes.','Elle aime peindre des paysages.'],['Cooking','Cuisine','/ˈkʊkɪŋ/','Cooking helps me relax.','Cuisiner m\'aide à me détendre.'],['Reading','Lecture','/ˈriːdɪŋ/','Reading opens your mind.','La lecture ouvre l\'esprit.']],
    'Past Simple — Irregular Verbs','Les verbes irréguliers au passé ne suivent pas la règle -ed : go→went, see→saw, eat→ate, drink→drank, take→took. Il faut les mémoriser.',
    [{s:'I went to the cinema yesterday.',t:'Je suis allé au cinéma hier.',c:true},{s:'She goed to the park.',t:'',c:false},{s:'They ate pizza for dinner.',t:'Ils ont mangé des pizzas pour le dîner.',c:true},{s:'He did went home.',t:'',c:false}],
    [{w:'She goed to the park.',cr:'She went to the park.',e:'"Go" est irrégulier : went, pas goed.'},{w:'He did went home.',cr:'He went home. / He did go home.',e:'On ne combine pas "did" et le passé. "Did" + base verbale.'}],
    [['Lucy','A','What did you do last weekend?','Qu\'as-tu fait le week-end dernier ?'],['Alex','B','I went swimming and then I cooked dinner.','Je suis allé nager et ensuite j\'ai cuisiné le dîner.'],['Lucy','A','Did you see the new exhibition?','As-tu vu la nouvelle exposition ?'],['Alex','B','No, I didn\'t. I took a painting class instead.','Non. J\'ai pris un cours de peinture à la place.'],['Lucy','A','That sounds fun! I read a great book last weekend.','Ça a l\'air amusant ! J\'ai lu un super livre le week-end dernier.'],['Alex','B','We should do something together next time!','On devrait faire quelque chose ensemble la prochaine fois !']],
    [['Swimming','/ˈswɪmɪŋ/','Natation','Le "swi" = "soui" : "souï-ming".'],['Painting','/ˈpeɪntɪŋ/','Peinture','Prononcez "pèin-ting".'],['Cooking','/ˈkʊkɪŋ/','Cuisine','Le "oo" est court : "kou-king".'],['Reading','/ˈriːdɪŋ/','Lecture','Le "ea" = "ii" long : "rii-ding".']]
  ),
  'a2-u7': makeB1Content('a2-u7','Work','Travail',
    [['Teacher','Professeur','/ˈtiːtʃər/','My teacher is very kind.','Mon professeur est très gentil.'],['Engineer','Ingénieur','/ˌendʒɪˈnɪr/','He works as an engineer.','Il travaille comme ingénieur.'],['Office','Bureau','/ˈɒfɪs/','The office is downtown.','Le bureau est au centre-ville.'],['Salary','Salaire','/ˈsæləri/','The salary is competitive.','Le salaire est compétitif.']],
    'Present Continuous','Le Present Continuous : am/is/are + verbe-en -ing. Il exprime une action en cours. "I am working right now." = Je travaille en ce moment.',
    [{s:'She is working from home today.',t:'Elle travaille à domicile aujourd\'hui.',c:true},{s:'He working on a project.',t:'',c:false},{s:'They aren\'t working this week.',t:'Ils ne travaillent pas cette semaine.',c:true},{s:'I am work on it.',t:'',c:false}],
    [{w:'He working on a project.',cr:'He is working on a project.',e:'Il faut "is" avant le verbe en -ing.'},{w:'I am work on it.',cr:'I am working on it.',e:'Le Present Continuous nécessite le verbe en -ing.'}],
    [['Interviewer','A','What are you currently doing?','Que faites-vous actuellement ?'],['Candidate','B','I am working as a teacher, but I\'m looking for a new position.','Je travaille comme professeur, mais je cherche un nouveau poste.'],['Interviewer','A','What is your expected salary?','Quel est votre salaire souhaité ?'],['Candidate','B','I am expecting a competitive salary based on my experience.','Je m\'attends à un salaire compétitif basé sur mon expérience.'],['Interviewer','A','Are you available to start next month?','Êtes-vous disponible pour commencer le mois prochain ?'],['Candidate','B','Yes, I am! I\'m very excited about this opportunity.','Oui ! Je suis très enthousiaste à propos de cette opportunité.']],
    [['Teacher','/ˈtiːtʃər/','Professeur','Le "ea" = "ii" long : "tii-tcher".'],['Engineer','/ˌendʒɪˈnɪr/','Ingénieur','L\'accent sur "gi" : "en-dji-NIR".'],['Office','/ˈɒfɪs/','Bureau','Prononcez "o-fiss" avec le premier "o" ouvert.'],['Salary','/ˈsæləri/','Salaire','L\'accent sur "sal" : "SAL-a-ri".']]
  ),
  'a2-u8': makeB1Content('a2-u8','Education','Éducation',
    [['Student','Étudiant','/ˈstjuːdənt/','She is a hard-working student.','C\'est une étudiante travailleuse.'],['Homework','Devoirs','/ˈhoʊmwɜːrk/','I finished my homework early.','J\'ai fini mes devoirs tôt.'],['Exam','Examen','/ɪɡˈzæm/','The exam is next Monday.','L\'examen est lundi prochain.'],['Library','Bibliothèque','/ˈlaɪbreri/','I study at the library.','J\'étudie à la bibliothèque.']],
    'Future with Will','Le futur avec "will" : sujet + will + verbe. Pour les prédictions et décisions spontanées. Négatif : won\'t + verbe. "I will study harder." = J\'étudierai plus dur.',
    [{s:'I will pass the exam.',t:'Je réussirai l\'examen.',c:true},{s:'She will to graduate next year.',t:'',c:false},{s:'They won\'t fail the test.',t:'Ils ne rateront pas le test.',c:true},{s:'He will can come tomorrow.',t:'',c:false}],
    [{w:'She will to graduate.',cr:'She will graduate.',e:'Après "will", pas de "to".'},{w:'He will can come.',cr:'He will be able to come.',e:'On ne peut pas combiner deux modaux. Utilisez "will be able to".'}],
    [['Teacher','A','What will you do after graduation?','Que feras-tu après l\'obtention du diplôme ?'],['Student','B','I will look for a job in marketing.','Je chercherai un emploi dans le marketing.'],['Teacher','A','Will you continue your studies?','Continueras-tu tes études ?'],['Student','B','I might. I won\'t decide until I get my exam results.','Peut-être. Je ne déciderai pas avant d\'avoir mes résultats d\'examen.'],['Teacher','A','You should study at the library more often.','Tu devrais étudier à la bibliothèque plus souvent.'],['Student','B','You\'re right. I will do my homework there from now on.','Vous avez raison. Je ferai mes devoirs là-bas à partir de maintenant.']],
    [['Student','/ˈstjuːdənt/','Étudiant','Prononcez "stiou-dent" — le "u" après "st" est comme "iou".'],['Homework','/ˈhoʊmwɜːrk/','Devoirs','Le "o" est long : "hôme-ouerk".'],['Exam','/ɪɡˈzæm/','Examen','L\'accent sur "zam" : "ig-ZAM".'],['Library','/ˈlaɪbreri/','Bibliothèque','Attention : "laï-bre-ri" — ne prononcez pas "li-bé-ri".']]
  ),
  'a2-u9': makeB1Content('a2-u9','Housing','Logement',
    [['Apartment','Appartement','/əˈpɑːrtmənt/','The apartment has two bedrooms.','L\'appartement a deux chambres.'],['Rent','Loyer','/rent/','The rent is $800 per month.','Le loyer est de 800$ par mois.'],['Neighbor','Voisin','/ˈneɪbər/','My neighbor is very friendly.','Mon voisin est très sympa.'],['Landlord','Propriétaire','/ˈlændlɔːrd/','The landlord fixed the heating.','Le propriétaire a réparé le chauffage.']],
    'Prepositions of Place','Les prépositions de lieu : next to (à côté de), across from (en face de), between (entre), behind (derrière), in front of (devant), above (au-dessus de).',
    [{s:'The bank is next to the supermarket.',t:'La banque est à côté du supermarché.',c:true},{s:'The park is across of the school.',t:'',c:false},{s:'My apartment is between the café and the library.',t:'Mon appartement est entre le café et la bibliothèque.',c:true},{s:'He lives in front the station.',t:'',c:false}],
    [{w:'Across of the school.',cr:'Across from the school.',e:'On dit "across from", pas "across of".'},{w:'In front the station.',cr:'In front of the station.',e:'Il faut "of" après "in front".'}],
    [['Tenant','A','I\'m calling about the apartment for rent.','J\'appelle à propos de l\'appartement à louer.'],['Landlord','B','Yes! It\'s a two-bedroom apartment next to the park.','Oui ! C\'est un appartement de deux chambres à côté du parc.'],['Tenant','A','How much is the rent?','Combien est le loyer ?'],['Landlord','B','It\'s $800 per month. It\'s across from the subway station.','C\'est 800$ par mois. C\'est en face de la station de métro.'],['Tenant','A','That sounds great! When can I visit it?','Ça a l\'air super ! Quand puis-je le visiter ?'],['Landlord','B','How about tomorrow at 3 PM? I\'ll be there between 3 and 5.','Et si on disait demain à 15h ? Je serai là entre 15h et 17h.']],
    [['Apartment','/əˈpɑːrtmənt/','Appartement','L\'accent sur "part" : "a-PART-ment".'],['Rent','/rent/','Loyer','Prononcez "rent" avec le "r" anglais, langue recourbée.'],['Neighbor','/ˈneɪbər/','Voisin','Le "ei" = "é" : "né-ber" — le "gh" est muet.'],['Landlord','/ˈlændlɔːrd/','Propriétaire','Prononcez "lænd-lord" — "land" + "lord".']]
  ),
  'a2-u10': makeB1Content('a2-u10','Technology','Technologie',
    [['Download','Télécharger','/ˈdaʊnloʊd/','I downloaded a new app.','J\'ai téléchargé une nouvelle application.'],['Password','Mot de passe','/ˈpæswɜːrd/','Don\'t share your password with anyone.','Ne partagez pas votre mot de passe.'],['Software','Logiciel','/ˈsɒftwer/','This software is free.','Ce logiciel est gratuit.'],['Internet','Internet','/ˈɪntərnet/','I need internet access.','J\'ai besoin d\'un accès internet.']],
    'Can / Could — Ability & Permission','"Can" exprime la capacité et la permission (informel). "Could" est le passé de "can" ou une demande plus polie. "I can use Excel." = Je sais utiliser Excel.',
    [{s:'Can you help me with this software?',t:'Pouvez-vous m\'aider avec ce logiciel ?',c:true},{s:'Could I use your computer?',t:'Puis-je utiliser votre ordinateur ?',c:true},{s:'I could to type fast.',t:'',c:false},{s:'She can speaks English.',t:'',c:false}],
    [{w:'I could to type fast.',cr:'I could type fast.',e:'Après "could", pas de "to".'},{w:'She can speaks English.',cr:'She can speak English.',e:'Après un modal, le verbe reste à la base, pas de "s".'}],
    [['User','A','I can\'t log in to my account. Can you help?','Je ne peux pas me connecter. Pouvez-vous aider ?'],['Support','B','Of course! Could you tell me your username?','Bien sûr ! Pourriez-vous me donner votre nom d\'utilisateur ?'],['User','A','It\'s j.smith. I forgot my password.','C\'est j.smith. J\'ai oublié mon mot de passe.'],['Support','B','I can reset it for you. Could you check your email?','Je peux le réinitialiser. Pourriez-vous vérifier votre email ?'],['User','A','I got it! I can log in now. Thank you!','Je l\'ai ! Je peux me connecter maintenant. Merci !'],['Support','B','You\'re welcome! You should download our app for easier access.','De rien ! Vous devriez télécharger notre application pour un accès plus facile.']],
    [['Download','/ˈdaʊnloʊd/','Télécharger','Prononcez "daoun-lod" — le "ow" = "ao".'],['Password','/ˈpæswɜːrd/','Mot de passe','L\'accent sur "pass" : "PASS-ouerd".'],['Software','/ˈsɒftwer/','Logiciel','Prononcez "soft-ouér" — le "ware" = "ouér".'],['Internet','/ˈɪntərnet/','Internet','L\'accent sur "in" : "IN-ter-net".']]
  ),
  // B1
  'b1-u1': B1_U1, 'b1-u2': B1_U2, 'b1-u3': B1_U3, 'b1-u4': B1_U4,
  'b1-u5': B1_U5, 'b1-u6': B1_U6, 'b1-u7': B1_U7, 'b1-u8': B1_U8,
  'b1-u9': B1_U9, 'b1-u10': B1_U10, 'b1-u11': B1_U11, 'b1-u12': B1_U12,
  // B2
  'b2-u1': B2_U1, 'b2-u2': B2_U2, 'b2-u3': B2_U3, 'b2-u4': B2_U4,
  'b2-u5': B2_U5, 'b2-u6': B2_U6, 'b2-u7': B2_U7, 'b2-u8': B2_U8,
  'b2-u9': B2_U9, 'b2-u10': B2_U10, 'b2-u11': B2_U11, 'b2-u12': B2_U12,
  // C1
  'c1-u1': C1_U1, 'c1-u2': C1_U2, 'c1-u3': C1_U3, 'c1-u4': C1_U4,
  'c1-u5': C1_U5, 'c1-u6': C1_U6, 'c1-u7': C1_U7, 'c1-u8': C1_U8,
  'c1-u9': C1_U9, 'c1-u10': C1_U10, 'c1-u11': C1_U11, 'c1-u12': C1_U12,
  'c1-u13': C1_U13, 'c1-u14': C1_U14,
  // C2
  'c2-u1': C2_U1, 'c2-u2': C2_U2, 'c2-u3': C2_U3, 'c2-u4': C2_U4,
  'c2-u5': C2_U5, 'c2-u6': C2_U6, 'c2-u7': C2_U7, 'c2-u8': C2_U8,
  'c2-u9': C2_U9, 'c2-u10': C2_U10, 'c2-u11': C2_U11, 'c2-u12': C2_U12,
}

// ─── PUBLIC API ──────────────────────────────────────────────────────────────

export function getLessonContent(unitId: string): LessonContent {
  return LESSON_CONTENT_MAP[unitId] ?? A1_U1
}
