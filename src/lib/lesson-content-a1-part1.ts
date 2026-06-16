import { type LessonContent } from './lesson-content'

// Helper to create lesson content concisely
function makeContent(
  words: [string,string,string,string,string][],
  grammarTitle: string,
  grammarExp: string,
  grammarExs: {s:string,t:string,c:boolean}[],
  grammarMistakes: {w:string,cr:string,e:string}[],
  dialogueLines: [string,'A'|'B',string,string][],
  pronItems: [string,string,string,string][]
): LessonContent {
  return {
    vocab: words.map(([en,fr,ph,ex,exTr]) => ({english:en,french:fr,phonetic:ph,example:ex,exampleTranslation:exTr})),
    grammar: { title:grammarTitle, explanation:grammarExp, examples: grammarExs.map(e => ({sentence:e.s,translation:e.t,isCorrect:e.c})), commonMistakes: grammarMistakes.map(m => ({wrong:m.w,correct:m.cr,explanation:m.e})) },
    conversation: dialogueLines.map(([sp,r,en,fr]) => ({speaker:sp,role:r,text:en,translation:fr})),
    pronunciation: pronItems.map(([w,ph,m,t]) => ({word:w,phonetic:ph,meaning:m,tip:t})),
  }
}

export const A1_PART1: Record<string, LessonContent> = {

  // ─── Unit 1: Greetings & Introductions ─────────────────────────────────────

  // a1-l1: Hello & Goodbye (vocabulary)
  'a1-l1': makeContent(
    // Vocab: Basic greetings
    [
      ['Hello', 'Bonjour', '/həˈloʊ/', 'Hello! How are you?', 'Bonjour ! Comment allez-vous ?'],
      ['Goodbye', 'Au revoir', '/ɡʊdˈbaɪ/', 'Goodbye! See you later.', 'Au revoir ! À plus tard.'],
      ['Good morning', 'Bonjour', '/ɡʊd ˈmɔːrnɪŋ/', 'Good morning, Mrs. Smith!', 'Bonjour, Madame Smith !'],
      ['Good night', 'Bonne nuit', '/ɡʊd naɪt/', 'Good night! Sleep well.', 'Bonne nuit ! Dors bien.'],
    ],
    // Grammar: Subject pronouns with greetings
    'Subject Pronouns in Greetings',
    'Dans les salutations, on utilise les pronoms sujets : I (je), you (tu/vous), he (il), she (elle). Exemples : "I am fine", "You are welcome", "She is here".',
    [
      { s: 'I am happy to meet you.', t: 'Je suis content(e) de vous rencontrer.', c: true },
      { s: 'You are very kind.', t: 'Vous êtes très gentil(le).', c: true },
      { s: 'He are my friend.', t: '', c: false },
      { s: 'She is a new student.', t: 'Elle est une nouvelle étudiante.', c: true },
    ],
    [
      { w: 'He are my friend.', cr: 'He is my friend.', e: 'On utilise "is" avec "he" et "she", jamais "are".' },
      { w: 'I is happy.', cr: 'I am happy.', e: 'On utilise toujours "am" avec "I", jamais "is".' },
    ],
    // Conversation: Meeting and saying goodbye
    [
      ['Claire', 'A', 'Hello! Good morning!', 'Bonjour ! Bonjour !'],
      ['Marc', 'B', 'Good morning! How are you?', 'Bonjour ! Comment allez-vous ?'],
      ['Claire', 'A', 'I am fine, thank you! And you?', 'Je vais bien, merci ! Et vous ?'],
      ['Marc', 'B', 'I am good! Nice to see you.', 'Je vais bien ! Ravi de vous voir.'],
      ['Claire', 'A', 'Nice to see you too! Goodbye!', 'Ravi(e) de vous voir aussi ! Au revoir !'],
      ['Marc', 'B', 'Goodbye! See you tomorrow!', 'Au revoir ! À demain !'],
    ],
    // Pronunciation: Greeting sounds
    [
      ['Hello', '/həˈloʊ/', 'Bonjour', 'Le "h" anglais est expiré : mettez la main devant la bouche, vous devez sentir l\'air. Ne le rendez pas muet comme en français.'],
      ['Goodbye', '/ɡʊdˈbaɪ/', 'Au revoir', 'Prononcez "good" comme "guèd" et "bye" comme "baï". L\'accent est sur "bye".'],
      ['Good morning', '/ɡʊd ˈmɔːrnɪŋ/', 'Bonjour (matin)', 'Le "or" se prononce "or" comme dans "port". Le "ing" final : langue contre le palais, "nin".'],
      ['Good night', '/ɡʊd naɪt/', 'Bonne nuit', 'Le "igh" = "aï" : prononcez "naït". Ne dites surtout pas "nuit" à la française !'],
    ]
  ),

  // a1-l2: How Are You? (conversation)
  'a1-l2': makeContent(
    // Vocab: Wellbeing words
    [
      ['Fine', 'Bien', '/faɪn/', 'I am fine, thank you.', 'Je vais bien, merci.'],
      ['Tired', 'Fatigué(e)', '/taɪərd/', 'I am tired today.', 'Je suis fatigué(e) aujourd\'hui.'],
      ['Happy', 'Heureux/Heureuse', '/ˈhæpi/', 'She is very happy!', 'Elle est très heureuse !'],
      ['Busy', 'Occupé(e)', '/ˈbɪzi/', 'He is busy right now.', 'Il est occupé en ce moment.'],
    ],
    // Grammar: Questions with "How"
    'Questions avec "How"',
    'Pour demander comment quelqu\'un va : "How are you?" (Comment allez-vous ?), "How is she?" (Comment va-t-elle ?), "How are they?" (Comment vont-ils ?). On répond : "I am fine", "She is tired", etc.',
    [
      { s: 'How are you today?', t: 'Comment allez-vous aujourd\'hui ?', c: true },
      { s: 'How is your mother?', t: 'Comment va votre mère ?', c: true },
      { s: 'How are he?', t: '', c: false },
      { s: 'How is your friend?', t: 'Comment va votre ami(e) ?', c: true },
    ],
    [
      { w: 'How are he?', cr: 'How is he?', e: 'Avec "he", on utilise "is", pas "are".' },
      { w: 'How is you?', cr: 'How are you?', e: 'Avec "you", on utilise toujours "are".' },
    ],
    // Conversation: Asking about wellbeing
    [
      ['Sophie', 'A', 'Hi! How are you?', 'Salut ! Comment vas-tu ?'],
      ['Pierre', 'B', 'I am fine, thanks. And you?', 'Je vais bien, merci. Et toi ?'],
      ['Sophie', 'A', 'I am a little tired today.', 'Je suis un peu fatiguée aujourd\'hui.'],
      ['Pierre', 'B', 'Oh, how is your sister? Is she busy?', 'Oh, comment va ta sœur ? Est-elle occupée ?'],
      ['Sophie', 'A', 'She is happy! She has a new job.', 'Elle est heureuse ! Elle a un nouveau travail.'],
      ['Pierre', 'B', 'That is great! I am happy for her.', 'C\'est super ! Je suis content pour elle.'],
    ],
    // Pronunciation: Wellbeing sounds
    [
      ['Fine', '/faɪn/', 'Bien', 'Le "i" est long : "faïn". Ne prononcez pas "fin" à la française.'],
      ['Tired', '/taɪərd/', 'Fatigué(e)', 'Prononcez "taï-erd" — le "i" est long et le "d" final est doux.'],
      ['Happy', '/ˈhæpi/', 'Heureux/Heureuse', 'Le "a" est très ouvert, comme dans "cat" : "ha-ppi".'],
      ['Busy', '/ˈbɪzi/', 'Occupé(e)', 'Le "u" se prononce comme un "i" bref : "bi-zi". Pas "bou-zi" !'],
    ]
  ),

  // a1-l3: Introducing Yourself (conversation)
  'a1-l3': makeContent(
    // Vocab: Self-introduction words
    [
      ['Name', 'Nom', '/neɪm/', 'My name is Julie.', 'Mon nom est Julie.'],
      ['Age', 'Âge', '/eɪdʒ/', 'What is your age?', 'Quel est votre âge ?'],
      ['Country', 'Pays', '/ˈkʌntri/', 'I am from a big country.', 'Je viens d\'un grand pays.'],
      ['Language', 'Langue', '/ˈlæŋɡwɪdʒ/', 'I speak two languages.', 'Je parle deux langues.'],
    ],
    // Grammar: "My name is..." / "I am from..."
    'Se présenter : My name is / I am from',
    'Pour vous présenter : "My name is..." (Mon nom est...), "I am from..." (Je viens de...), "I am... years old" (J\'ai... ans). Attention : en anglais on dit "I am 25 years old", pas "I have 25 years".',
    [
      { s: 'My name is Pierre.', t: 'Mon nom est Pierre.', c: true },
      { s: 'I am from France.', t: 'Je viens de France.', c: true },
      { s: 'I have 25 years old.', t: '', c: false },
      { s: 'She is from Canada.', t: 'Elle vient du Canada.', c: true },
    ],
    [
      { w: 'I have 25 years old.', cr: 'I am 25 years old.', e: 'En anglais, on utilise "am" pour l\'âge, pas "have" (avoir).' },
      { w: 'I am come from France.', cr: 'I come from France. / I am from France.', e: 'On dit "I come from" ou "I am from", mais pas "I am come from".' },
    ],
    // Conversation: Self-introduction
    [
      ['Julie', 'A', 'Hello! My name is Julie. What is your name?', 'Bonjour ! Je m\'appelle Julie. Comment vous appelez-vous ?'],
      ['Ahmed', 'B', 'Hi Julie! I am Ahmed. Nice to meet you!', 'Salut Julie ! Je suis Ahmed. Enchanté !'],
      ['Julie', 'A', 'Nice to meet you too! Where are you from?', 'Enchantée aussi ! D\'où venez-vous ?'],
      ['Ahmed', 'B', 'I am from Morocco. And you?', 'Je viens du Maroc. Et vous ?'],
      ['Julie', 'A', 'I am from France. I am 22 years old. I speak French and English.', 'Je viens de France. J\'ai 22 ans. Je parle français et anglais.'],
      ['Ahmed', 'B', 'I am 25. I speak Arabic, French, and a little English!', 'J\'ai 25 ans. Je parle arabe, français et un peu anglais !'],
    ],
    // Pronunciation: Introduction sounds
    [
      ['Name', '/neɪm/', 'Nom', 'Le "a" est long : "néèm". Ne dites pas "nam".'],
      ['Age', '/eɪdʒ/', 'Âge', 'Prononcez "édj" — le son "dj" comme dans "juge" français.'],
      ['Country', '/ˈkʌntri/', 'Pays', 'Le "ou" est très ouvert comme dans "cou" : "keun-tri".' ],
      ['Language', '/ˈlæŋɡwɪdʒ/', 'Langue', 'Le "a" est ouvert : "laeng-guidj". Le "w" se lie au "i" suivant.' ],
    ]
  ),

  // a1-l4: Present Simple: Be (grammar)
  'a1-l4': makeContent(
    // Vocab: Words to practice "be"
    [
      ['Student', 'Étudiant(e)', '/ˈstjuːdənt/', 'I am a student.', 'Je suis étudiant(e).'],
      ['Teacher', 'Professeur', '/ˈtiːtʃər/', 'She is a teacher.', 'Elle est professeur.'],
      ['Doctor', 'Médecin', '/ˈdɒktər/', 'He is a doctor.', 'Il est médecin.'],
      ['Friend', 'Ami(e)', '/frend/', 'They are my friends.', 'Ce sont mes amis.'],
    ],
    // Grammar: Full conjugation of "be"
    'Present Simple: Be (être)',
    'Le verbe "be" se conjugue : I am (je suis), you are (tu es / vous êtes), he is (il est), she is (elle est), it is (c\'est), we are (nous sommes), they are (ils/elles sont). Contractions : I\'m, you\'re, he\'s, she\'s, it\'s, we\'re, they\'re. Négatif : I am not, you are not (you aren\'t), he is not (he isn\'t).',
    [
      { s: 'I am a student.', t: 'Je suis étudiant(e).', c: true },
      { s: 'She are a doctor.', t: '', c: false },
      { s: 'We are friends.', t: 'Nous sommes amis.', c: true },
      { s: 'He isn\'t a teacher.', t: 'Il n\'est pas professeur.', c: true },
    ],
    [
      { w: 'She are a doctor.', cr: 'She is a doctor.', e: 'Avec he/she/it, on utilise toujours "is", jamais "are".' },
      { w: 'They is my friends.', cr: 'They are my friends.', e: 'Avec they/we/you, on utilise "are", pas "is".' },
    ],
    // Conversation: People describing themselves using "be"
    [
      ['Léa', 'A', 'Hello! I am Léa. I am a student. I am 20 years old.', 'Bonjour ! Je suis Léa. Je suis étudiante. J\'ai 20 ans.' ],
      ['Tom', 'B', 'Hi Léa! I am Tom. I am a teacher.', 'Salut Léa ! Je suis Tom. Je suis professeur.'],
      ['Léa', 'A', 'Are you from London?', 'Êtes-vous de Londres ?'],
      ['Tom', 'B', 'Yes, I am! I am from London. Are you and Marie friends?', 'Oui ! Je suis de Londres. Vous et Marie êtes amis ?'],
      ['Léa', 'A', 'Yes, we are! She is my best friend. She is a doctor.', 'Oui ! Elle est ma meilleure amie. Elle est médecin.'],
      ['Tom', 'B', 'That is nice! They are lucky to have you as a friend.', 'C\'est sympa ! Ils ont de la chance de t\'avoir comme amie.'],
    ],
    // Pronunciation: Be verb forms
    [
      ['Am', '/æm/', 'Suis (I am)', 'Le "a" est très ouvert comme dans "chat" : "aem". Lien : "I\'m" = "aïm".' ],
      ['Is', '/ɪz/', 'Est (he/she/it is)', 'Prononcez "iz" avec le son "z" sonore. Lien : "he\'s" = "hiz".' ],
      ['Are', '/ɑːr/', 'Es/êtes/sont (you/we/they are)', 'Le "ar" est long et ouvert : "aar". Lien : "you\'re" = "your".' ],
      ['Isn\'t', '/ˈɪzənt/', 'N\'est pas', 'Prononcez "iz-ent" — le "n" et "t" sont clairs, ne les avalez pas.' ],
    ]
  ),

  // a1-l5: Greeting Sounds (pronunciation)
  'a1-l5': makeContent(
    // Vocab: Casual greetings
    [
      ['Hi', 'Salut', '/haɪ/', 'Hi! How are you?', 'Salut ! Comment vas-tu ?'],
      ['Hey', 'Hé', '/heɪ/', 'Hey! Nice to see you!', 'Hé ! Sympa de te voir !'],
      ['Welcome', 'Bienvenue', '/ˈwelkəm/', 'Welcome to our school!', 'Bienvenue dans notre école !'],
      ['See you', 'À plus', '/siː juː/', 'See you later!', 'À plus tard !'],
    ],
    // Grammar: Short forms and contractions in greetings
    'Contractions dans les salutations',
    'Dans les salutations informelles, on utilise souvent les contractions : "I\'m" (I am), "you\'re" (you are), "it\'s" (it is), "we\'re" (we are). "Nice to meet you" = enchanté(e). "See you" = à plus / à bientôt.',
    [
      { s: 'I\'m happy to see you!', t: 'Je suis content(e) de te voir !', c: true },
      { s: 'It\'s nice to meet you.', t: 'C\'est sympa de te rencontrer.', c: true },
      { s: 'Your welcome.', t: '', c: false },
      { s: 'We\'re happy you\'re here!', t: 'Nous sommes contents que tu sois là !', c: true },
    ],
    [
      { w: 'Your welcome.', cr: 'You\'re welcome.', e: '"You\'re" = "you are", pas "your" (ton/ta/votre). C\'est une erreur très courante !' },
      { w: 'See your later.', cr: 'See you later.', e: 'On dit "see you" (te voir), pas "see your" (ton/ta).' },
    ],
    // Conversation: Casual greeting exchange
    [
      ['Emma', 'A', 'Hey! Welcome! I\'m Emma.', 'Hé ! Bienvenue ! Je suis Emma.'],
      ['Luc', 'B', 'Hi Emma! I\'m Luc. It\'s nice to meet you!', 'Salut Emma ! Je suis Luc. Enchanté !'],
      ['Emma', 'A', 'You\'re welcome here! How are you?', 'Tu es le bienvenu ici ! Comment vas-tu ?'],
      ['Luc', 'B', 'I\'m fine, thanks! See you later?', 'Je vais bien, merci ! À plus tard ?'],
      ['Emma', 'A', 'Yes! See you this afternoon!', 'Oui ! À cet après-midi !'],
      ['Luc', 'B', 'Great! Goodbye for now!', 'Super ! Au revoir pour l\'instant !'],
    ],
    // Pronunciation: Casual greeting sounds
    [
      ['Hi', '/haɪ/', 'Salut', 'Le "h" est expiré et le "i" est long : "haï". Plus court et décontracté que "hello".'],
      ['Hey', '/heɪ/', 'Hé', 'Prononcez "héi" — le "h" est expiré et le "ey" sonne comme "éi".'],
      ['Welcome', '/ˈwelkəm/', 'Bienvenue', 'Le "w" initial : arrondissez les lèvres. "Ouel-kem". Le "l" est clair.'],
      ['See you', '/siː juː/', 'À plus', 'Liez les deux mots : "si-you". Le "y" de "you" glisse naturellement après le "i" long.'],
    ]
  ),

  // ─── Unit 2: Numbers & Counting ────────────────────────────────────────────

  // a1-l6: Numbers 1-20 (vocabulary)
  'a1-l6': makeContent(
    // Vocab: Numbers 1-20
    [
      ['Three', 'Trois', '/θriː/', 'I have three brothers.', 'J\'ai trois frères.'],
      ['Twelve', 'Douze', '/twelv/', 'There are twelve months.', 'Il y a douze mois.'],
      ['Fifteen', 'Quinze', '/fɪfˈtiːn/', 'She is fifteen years old.', 'Elle a quinze ans.'],
      ['Eighteen', 'Dix-huit', '/eɪˈtiːn/', 'The bus arrives at eighteen.', 'Le bus arrive à dix-huit heures.'],
    ],
    // Grammar: Singular vs plural with numbers
    'Singulier et pluriel avec les nombres',
    'Après "one", le nom est au singulier : "one book" (un livre). Après les autres nombres, le nom est au pluriel : "two books", "three pens". Le pluriel se forme généralement en ajoutant -s.',
    [
      { s: 'I have one book and three pens.', t: 'J\'ai un livre et trois stylos.', c: true },
      { s: 'She has two brother.', t: '', c: false },
      { s: 'There are five students.', t: 'Il y a cinq étudiants.', c: true },
      { s: 'I need one chair and four table.', t: '', c: false },
    ],
    [
      { w: 'She has two brother.', cr: 'She has two brothers.', e: 'Après un nombre supérieur à 1, le nom prend un "s" : brothers.' },
      { w: 'I need four table.', cr: 'I need four tables.', e: 'Pluriel régulier : table + s = tables.' },
    ],
    // Conversation: Counting objects
    [
      ['Marie', 'A', 'How many books do you have?', 'Combien de livres as-tu ?'],
      ['James', 'B', 'I have twelve books. And you?', 'J\'ai douze livres. Et toi ?'],
      ['Marie', 'A', 'I have fifteen! How many pens are on the table?', 'J\'en ai quinze ! Combien de stylos y a-t-il sur la table ?'],
      ['James', 'B', 'There are three pens and one pencil.', 'Il y a trois stylos et un crayon.'],
      ['Marie', 'A', 'I need two more pens. I have eighteen pages to write!', 'J\'ai besoin de deux stylos de plus. J\'ai dix-huit pages à écrire !'],
      ['James', 'B', 'No problem! Here are two pens for you.', 'Pas de problème ! Voici deux stylos pour toi.'],
    ],
    // Pronunciation: Numbers 1-20
    [
      ['Three', '/θriː/', 'Trois', 'Le "th" : langue entre les dents, soufflez de l\'air. Ne dites pas "tree" (arbre) !'],
      ['Twelve', '/twelv/', 'Douze', 'Prononcez "touelv" — le "w" se forme en arrondissant les lèvres, puis "elv".'],
      ['Fifteen', '/fɪfˈtiːn/', 'Quinze', 'L\'accent est sur "teen" : "fif-TIIN". Ne confondez pas avec "fifty" (cinquante).'],
      ['Eighteen', '/eɪˈtiːn/', 'Dix-huit', 'L\'accent est sur "teen" : "ei-TIIN". Distinguez de "eighty" (quatre-vingts).'],
    ]
  ),

  // a1-l7: Numbers 20-100 (vocabulary)
  'a1-l7': makeContent(
    // Vocab: Numbers 20-100
    [
      ['Thirty', 'Trente', '/ˈθɜːrti/', 'She is thirty years old.', 'Elle a trente ans.'],
      ['Fifty', 'Cinquante', '/ˈfɪfti/', 'The book costs fifty dollars.', 'Le livre coûte cinquante dollars.'],
      ['Seventy', 'Soixante-dix', '/ˈsevənti/', 'There are seventy people.', 'Il y a soixante-dix personnes.'],
      ['Ninety', 'Quatre-vingt-dix', '/ˈnaɪnti/', 'Ninety students are here.', 'Quatre-vingt-dix étudiants sont ici.'],
    ],
    // Grammar: "How many...?" questions
    '"How many...?" — Combien de... ?',
    'On utilise "How many" + nom pluriel pour demander une quantité : "How many students?" (Combien d\'étudiants ?), "How many books?" (Combien de livres ?). On répond avec "There are..." ou un nombre.',
    [
      { s: 'How many students are in the class?', t: 'Combien d\'étudiants y a-t-il dans la classe ?', c: true },
      { s: 'How many book do you have?', t: '', c: false },
      { s: 'There are thirty students.', t: 'Il y a trente étudiants.', c: true },
      { s: 'How many moneys do you need?', t: '', c: false },
    ],
    [
      { w: 'How many book do you have?', cr: 'How many books do you have?', e: 'Après "how many", le nom est toujours au pluriel : books.' },
      { w: 'How many moneys?', cr: 'How much money?', e: '"Money" est indénombrable. On utilise "how much" au lieu de "how many".' },
    ],
    // Conversation: Asking about quantities
    [
      ['Anna', 'A', 'How many people are at the conference?', 'Combien de personnes sont à la conférence ?'],
      ['Paul', 'B', 'There are ninety people today.', 'Il y a quatre-vingt-dix personnes aujourd\'hui.'],
      ['Anna', 'A', 'Wow! How many rooms are there?', 'Waouh ! Combien de salles y a-t-il ?'],
      ['Paul', 'B', 'There are fifty rooms in this building.', 'Il y a cinquante salles dans ce bâtiment.'],
      ['Anna', 'A', 'And how many parking spaces?', 'Et combien de places de parking ?'],
      ['Paul', 'B', 'Seventy! But there are only thirty free spaces now.', 'Soixante-dix ! Mais il n\'y a que trente places libres maintenant.'],
    ],
    // Pronunciation: Numbers 20-100
    [
      ['Thirty', '/ˈθɜːrti/', 'Trente', 'Le "th" est crucial : langue entre les dents. Ne dites pas "tirty". L\'accent est sur "THIR".' ],
      ['Fifty', '/ˈfɪfti/', 'Cinquante', 'Prononcez "fif-ti" — le "f" du milieu est important, pas "v". L\'accent est sur "FIF".' ],
      ['Seventy', '/ˈsevənti/', 'Soixante-dix', 'Le premier "e" est un "é" et le deuxième est réduit : "sé-ven-ti".' ],
      ['Ninety', '/ˈnaɪnti/', 'Quatre-vingt-dix', 'Prononcez "naïn-ti" — le "i" est long. Ne dites pas "nin-ti".' ],
    ]
  ),

  // a1-l8: Telling the Time (conversation)
  'a1-l8': makeContent(
    // Vocab: Time-related words
    [
      ['O\'clock', 'Heure pile', '/əˈklɒk/', 'It is three o\'clock.', 'Il est trois heures pile.'],
      ['Half past', 'Et demie', '/hæf pæst/', 'It is half past two.', 'Il est deux heures et demie.'],
      ['Quarter', 'Quart', '/ˈkwɔːrtər/', 'It is a quarter to five.', 'Il est cinq heures moins le quart.'],
      ['Morning', 'Matin', '/ˈmɔːrnɪŋ/', 'I work in the morning.', 'Je travaille le matin.'],
    ],
    // Grammar: Prepositions of time (at, in, on)
    'Prépositions de temps : at, in, on',
    '"At" pour les heures : at 8 o\'clock, at half past three. "In" pour les parties du jour : in the morning, in the afternoon, in the evening. "On" pour les jours : on Monday, on Friday.',
    [
      { s: 'The class starts at 9 o\'clock.', t: 'Le cours commence à 9 heures.', c: true },
      { s: 'I study in the morning.', t: 'J\'étudie le matin.', c: true },
      { s: 'We have class on 9 o\'clock.', t: '', c: false },
      { s: 'She works in the afternoon.', t: 'Elle travaille l\'après-midi.', c: true },
    ],
    [
      { w: 'We have class on 9 o\'clock.', cr: 'We have class at 9 o\'clock.', e: 'Pour les heures, on utilise "at", pas "on".' },
      { w: 'I work at the morning.', cr: 'I work in the morning.', e: 'Pour les parties du jour (morning/afternoon/evening), on utilise "in".' },
    ],
    // Conversation: Asking and telling the time
    [
      ['Lucie', 'A', 'Excuse me, what time is it?', 'Excusez-moi, quelle heure est-il ?'],
      ['David', 'B', 'It is half past ten.', 'Il est dix heures et demie.'],
      ['Lucie', 'A', 'Oh no! The meeting is at eleven o\'clock!', 'Oh non ! La réunion est à onze heures !'],
      ['David', 'B', 'Don\'t worry, it is a quarter to eleven. You have time!', 'Ne vous inquiétez pas, il est onze heures moins le quart. Vous avez le temps !'],
      ['Lucie', 'A', 'Thank you! Are you free in the morning tomorrow?', 'Merci ! Êtes-vous libre demain matin ?'],
      ['David', 'B', 'Yes, I am free at 9 o\'clock. See you then!', 'Oui, je suis libre à 9 heures. À alors !'],
    ],
    // Pronunciation: Time words
    [
      ['O\'clock', '/əˈklɒk/', 'Heure pile', 'Prononcez "e-klok" — le "o\'" est réduit. Ne ditez pas "o-clock".' ],
      ['Half past', '/hæf pæst/', 'Et demie', 'Le "a" de "half" est très ouvert : "haf". "Past" se prononce "pèst".' ],
      ['Quarter', '/ˈkwɔːrtər/', 'Quart', 'Le "qu" = "k" + "w" : "kouor-ter". Le "a" final est très réduit.' ],
      ['Morning', '/ˈmɔːrnɪŋ/', 'Matin', 'Le "or" est long : "mor-ning". Le "ng" : langue contre le palais, ne dites pas "mor-nin".' ],
    ]
  ),

  // a1-l9: Days & Months (vocabulary)
  'a1-l9': makeContent(
    // Vocab: Days and months
    [
      ['Wednesday', 'Mercredi', '/ˈwenzdeɪ/', 'I have class on Wednesday.', 'J\'ai cours le mercredi.'],
      ['Saturday', 'Samedi', '/ˈsætərdeɪ/', 'We go to the park on Saturday.', 'Nous allons au parc le samedi.'],
      ['March', 'Mars', '/mɑːrtʃ/', 'My birthday is in March.', 'Mon anniversaire est en mars.'],
      ['November', 'Novembre', '/noʊˈvembər/', 'It is cold in November.', 'Il fait froid en novembre.'],
    ],
    // Grammar: "On" with days, "In" with months
    '"On" avec les jours, "In" avec les mois',
    'On utilise "on" devant les jours de la semaine : on Monday, on Wednesday. On utilise "in" devant les mois et les saisons : in March, in November, in summer. On utilise "in" aussi pour les années : in 2024.',
    [
      { s: 'I have English class on Tuesday.', t: 'J\'ai cours d\'anglais le mardi.', c: true },
      { s: 'We go on vacation in July.', t: 'Nous partons en vacances en juillet.', c: true },
      { s: 'The exam is in Monday.', t: '', c: false },
      { s: 'She was born in September.', t: 'Elle est née en septembre.', c: true },
    ],
    [
      { w: 'The exam is in Monday.', cr: 'The exam is on Monday.', e: 'Pour les jours de la semaine, on utilise "on", pas "in".' },
      { w: 'I visit my family on March.', cr: 'I visit my family in March.', e: 'Pour les mois, on utilise "in", pas "on".' },
    ],
    // Conversation: Making plans for specific days
    [
      ['Camille', 'A', 'What day is it today?', 'Quel jour sommes-nous aujourd\'hui ?'],
      ['Ryan', 'B', 'Today is Wednesday. My class is on Wednesday and Friday.', 'Aujourd\'hui c\'est mercredi. Mon cours est le mercredi et le vendredi.'],
      ['Camille', 'A', 'Are you free on Saturday?', 'Es-tu libre samedi ?'],
      ['Ryan', 'B', 'Yes! What do you want to do?', 'Oui ! Que veux-tu faire ?'],
      ['Camille', 'A', 'Let\'s go to the museum! The new exhibition opens in March.', 'Allons au musée ! La nouvelle exposition ouvre en mars.'],
      ['Ryan', 'B', 'Great idea! In November, we can also visit the Christmas market.', 'Bonne idée ! En novembre, nous pourrons aussi visiter le marché de Noël.'],
    ],
    // Pronunciation: Days and months
    [
      ['Wednesday', '/ˈwenzdeɪ/', 'Mercredi', 'Attention : on prononce "OUENZ-di", le "d" du milieu disparaît ! Ne dites pas "wed-nes-day".'],
      ['Saturday', '/ˈsætərdeɪ/', 'Samedi', 'Prononcez "sa-ter-di" — le "u" est réduit. L\'accent est sur "SAT".' ],
      ['March', '/mɑːrtʃ/', 'Mars', 'Le "ar" est long : "mortch". Le "ch" = "tch" comme dans "tchèque".' ],
      ['November', '/noʊˈvembər/', 'Novembre', 'L\'accent est sur "vem" : "no-VEM-ber". Le premier "o" est long.' ],
    ]
  ),

  // a1-l10: Number Pronunciation (pronunciation)
  'a1-l10': makeContent(
    // Vocab: Number words with tricky pronunciation
    [
      ['Thirteen', 'Treize', '/θɜːrˈtiːn/', 'She is thirteen years old.', 'Elle a treize ans.'],
      ['Fourteen', 'Quatorze', '/fɔːrˈtiːn/', 'There are fourteen chairs.', 'Il y a quatorze chaises.'],
      ['Sixteen', 'Seize', '/sɪkˈstiːn/', 'I wake up at six sixteen.', 'Je me réveille à six heures seize.'],
      ['Forty', 'Quarante', '/ˈfɔːrti/', 'He is forty years old.', 'Il a quarante ans.'],
    ],
    // Grammar: Word stress in numbers
    'Accent tonique dans les nombres en -teen et -ty',
    'Les nombres en -teen (13-19) ont l\'accent sur la DEUXIÈME syllabe : thir-TEEN, four-TEEN. Les nombres en -ty (20, 30, 40...) ont l\'accent sur la PREMIÈRE syllabe : THIR-ty, FOR-ty. Cette distinction est essentielle pour ne pas confondre treize et trente !',
    [
      { s: 'She is thir-TEEN years old.', t: 'Elle a treize ans.', c: true },
      { s: 'There are THIR-ty students.', t: 'Il y a trente étudiants.', c: true },
      { s: 'He is four-TEEN.', t: 'Il a quatorze ans.', c: true },
      { s: 'The price is for-TY dollars.', t: '', c: false },
    ],
    [
      { w: 'The price is for-TY dollars.', cr: 'The price is FOR-ty dollars.', e: 'L\'accent est sur la PREMIÈRE syllabe pour -ty : FOR-ty, pas for-TY.' },
      { w: 'There are THIR-teen people.', cr: 'There are thir-TEEN people.', e: 'L\'accent est sur la DEUXIÈME syllabe pour -teen : thir-TEEN.' },
    ],
    // Conversation: Clarifying numbers
    [
      ['Isabelle', 'A', 'How many people are coming?', 'Combien de personnes viennent ?'],
      ['Mike', 'B', 'Thirteen. No, sorry, thirty people.', 'Treize. Non, désolé, trente personnes.'],
      ['Isabelle', 'A', 'Thirteen or thirty? I\'m not sure.', 'Treize ou trente ? Je ne suis pas sûr(e).'],
      ['Mike', 'B', 'Thirty! Three-zero. I am forty years old, not fourteen!', 'Trente ! Trois-zéro. J\'ai quarante ans, pas quatorze !'],
      ['Isabelle', 'A', 'Oh, I understand now! Is the room for sixteen or sixty?', 'Oh, je comprends maintenant ! La salle est pour seize ou soixante ?'],
      ['Mike', 'B', 'For sixteen people. One-six, not six-zero!', 'Pour seize personnes. Un-six, pas six-zéro !'],
    ],
    // Pronunciation: Number pairs
    [
      ['Thirteen vs Thirty', '/θɜːrˈtiːn/ vs /ˈθɜːrti/', 'Treize vs Trente', '"Thir-TEEN" (accent sur TEEN) vs "THIR-ti" (accent sur THIR). Le "th" est identique dans les deux.'],
      ['Fourteen vs Forty', '/fɔːrˈtiːn/ vs /ˈfɔːrti/', 'Quatorze vs Quarante', '"Four-TEEN" a un "r" clair et l\'accent sur TEEN. "FOR-ti" : accent sur FOR. Attention, "forty" s\'écrit sans "u" !'],
      ['Sixteen', '/sɪkˈstiːn/', 'Seize', 'L\'accent est sur "TEEN" : "siks-TEEN". Le "x" se prononce "ks".' ],
      ['Fifty', '/ˈfɪfti/', 'Cinquante', 'Accent sur "FIF" : "FIF-ti". Le son du milieu est "f" pas "v" : pas "fiv-ti".' ],
    ]
  ),

  // ─── Unit 3: Everyday Objects ──────────────────────────────────────────────

  // a1-l11: Classroom Objects (vocabulary)
  'a1-l11': makeContent(
    // Vocab: Classroom objects
    [
      ['Pen', 'Stylo', '/pen/', 'I need a pen, please.', 'J\'ai besoin d\'un stylo, s\'il vous plaît.'],
      ['Book', 'Livre', '/bʊk/', 'Open your book on page ten.', 'Ouvrez votre livre à la page dix.'],
      ['Table', 'Table', '/ˈteɪbəl/', 'Put the book on the table.', 'Mettez le livre sur la table.'],
      ['Chair', 'Chaise', '/tʃer/', 'Please sit on the chair.', 'Asseyez-vous sur la chaise, s\'il vous plaît.'],
    ],
    // Grammar: Plural forms
    'Le pluriel des noms',
    'Le pluriel régulier se forme en ajoutant -s : pen → pens, book → books, table → tables, chair → chairs. Après s, ss, sh, ch, x, on ajoute -es : box → boxes. Les noms en -y après consonne : y → ies : dictionary → dictionaries.',
    [
      { s: 'I have two pens and three books.', t: 'J\'ai deux stylos et trois livres.', c: true },
      { s: 'There are five chair in the room.', t: '', c: false },
      { s: 'The books are on the tables.', t: 'Les livres sont sur les tables.', c: true },
      { s: 'I need two boxs.', t: '', c: false },
    ],
    [
      { w: 'Five chair', cr: 'Five chairs', e: 'Après un nombre > 1, ajoutez -s : chair → chairs.' },
      { w: 'Two boxs', cr: 'Two boxes', e: 'Après x, on ajoute -es : box → boxes.' },
    ],
    // Conversation: Asking about classroom objects
    [
      ['Nadia', 'A', 'Excuse me, is this your pen?', 'Excusez-moi, est-ce votre stylo ?'],
      ['Olivier', 'B', 'No, my pen is on the table. That is Marie\'s pen.', 'Non, mon stylo est sur la table. C\'est le stylo de Marie.'],
      ['Nadia', 'A', 'Oh, I see! Are those your books?', 'Oh, je vois ! Ce sont vos livres ?'],
      ['Olivier', 'B', 'Yes, they are my books. I have four books today.', 'Oui, ce sont mes livres. J\'ai quatre livres aujourd\'hui.'],
      ['Nadia', 'A', 'Can I borrow a chair? I don\'t have one.', 'Puis-je emprunter une chaise ? Je n\'en ai pas.'],
      ['Olivier', 'B', 'Of course! Here, take this chair.', 'Bien sûr ! Voici, prenez cette chaise.'],
    ],
    // Pronunciation: Classroom objects
    [
      ['Pen', '/pen/', 'Stylo', 'Le "e" est bref et ouvert : "pèn". Ne dites pas "pine" (pin).'],
      ['Book', '/bʊk/', 'Livre', 'Le "oo" est un "ou" très court : "bouk". Pas le "ou" long du français.' ],
      ['Table', '/ˈteɪbəl/', 'Table', 'Prononcez "té-bal" avec le "a" final très réduit, presque muet.' ],
      ['Chair', '/tʃer/', 'Chaise', 'Le "ch" anglais = "tch" : "tchèr". Pas "chair" à la française !' ],
    ]
  ),

  // a1-l12: Articles: A & An (grammar)
  'a1-l12': makeContent(
    // Vocab: Words to practice a/an
    [
      ['Apple', 'Pomme', '/ˈæpəl/', 'I eat an apple every day.', 'Je mange une pomme chaque jour.'],
      ['Egg', 'Œuf', '/eɡ/', 'She wants an egg for breakfast.', 'Elle veut un œuf pour le petit-déjeuner.'],
      ['Dog', 'Chien', '/dɒɡ/', 'He has a dog at home.', 'Il a un chien à la maison.'],
      ['Cat', 'Chat', '/kæt/', 'I see a cat outside.', 'Je vois un chat dehors.'],
    ],
    // Grammar: A vs An
    'Articles : A et An',
    'On utilise "a" devant un mot commençant par un son consonne : a dog, a cat, a book. On utilise "an" devant un mot commençant par un son voyelle (a, e, i, o, u) : an apple, an egg, an orange. Attention : c\'est le SON qui compte, pas l\'orthographe ! "A university" (son "you") mais "an hour" (son "aou").',
    [
      { s: 'I have a dog and an egg.', t: 'J\'ai un chien et un œuf.', c: true },
      { s: 'She is an teacher.', t: '', c: false },
      { s: 'He wants an orange.', t: 'Il veut une orange.', c: true },
      { s: 'I am a engineer.', t: '', c: false },
    ],
    [
      { w: 'She is an teacher.', cr: 'She is a teacher.', e: '"Teacher" commence par le son consonne "t" : on utilise "a".' },
      { w: 'I am a engineer.', cr: 'I am an engineer.', e: '"Engineer" commence par le son voyelle "e" : on utilise "an".' },
    ],
    // Conversation: Describing objects with articles
    [
      ['Sam', 'A', 'What is that on the table?', 'Qu\'est-ce que c\'est sur la table ?'],
      ['Léa', 'B', 'It is an apple. Do you want an apple or an egg?', 'C\'est une pomme. Veux-tu une pomme ou un œuf ?'],
      ['Sam', 'A', 'I want an apple, please! Is that a cat outside?', 'Je veux une pomme, s\'il vous plaît ! C\'est un chat dehors ?'],
      ['Léa', 'B', 'Yes! It is a black cat. And there is a dog next to it.', 'Oui ! C\'est un chat noir. Et il y a un chien à côté.'],
      ['Sam', 'A', 'Oh, the dog is big! Does he have a name?', 'Oh, le chien est grand ! A-t-il un nom ?'],
      ['Léa', 'B', 'Yes, he is an old dog. His name is Rex!', 'Oui, c\'est un vieux chien. Il s\'appelle Rex !'],
    ],
    // Pronunciation: A vs An
    [
      ['A', '/ə/', 'Un/Une (consonne)', 'Devant une consonne, "a" se prononce "e" très réduit et rapide. Ne dites pas "éi" dans la conversation courante.'],
      ['An', '/ən/', 'Un/Une (voyelle)', 'Devant une voyelle, "an" se lie au mot suivant : "an apple" = "e-nap-pl". Le "n" relie les deux mots.'],
      ['Apple', '/ˈæpəl/', 'Pomme', 'Le "a" est très ouvert comme dans "cat" : "a-pl". Le "e" final est très réduit.' ],
      ['Egg', '/eɡ/', 'Œuf', 'Prononcez "ég" — le "e" est long et le "g" final est doux.' ],
    ]
  ),

  // a1-l13: This & That (grammar)
  'a1-l13': makeContent(
    // Vocab: Objects for pointing
    [
      ['Bag', 'Sac', '/bæɡ/', 'This is my bag.', 'Ceci est mon sac.'],
      ['Phone', 'Téléphone', '/foʊn/', 'That is her phone.', 'Cela est son téléphone.'],
      ['Laptop', 'Ordinateur portable', '/ˈlæptɑːp/', 'This laptop is new.', 'Cet ordinateur portable est nouveau.'],
      ['Notebook', 'Carnet', '/ˈnoʊtbʊk/', 'Those notebooks are mine.', 'Ces carnets sont à moi.'],
    ],
    // Grammar: This/That/These/Those
    'This, That, These, Those',
    '"This" (ceci/cette) pour un objet proche : This is my bag. "That" (cela/cette) pour un objet éloigné : That is her phone. Pluriels : "These" (ces - proches) et "Those" (ces - éloignés). Accord : this is / these are ; that is / those are.',
    [
      { s: 'This is my phone.', t: 'Ceci est mon téléphone.', c: true },
      { s: 'That are my bags.', t: '', c: false },
      { s: 'These are my notebooks.', t: 'Ce sont mes carnets.', c: true },
      { s: 'Those is your laptops.', t: '', c: false },
    ],
    [
      { w: 'That are my bags.', cr: 'Those are my bags.', e: 'Au pluriel, on utilise "those" au lieu de "that".' },
      { w: 'Those is your laptops.', cr: 'Those are your laptops.', e: '"Those" est pluriel, donc on utilise "are", pas "is".' },
    ],
    // Conversation: Pointing at objects near and far
    [
      ['Élodie', 'A', 'What is this on the desk?', 'Qu\'est-ce que c\'est sur le bureau ?'],
      ['Ben', 'B', 'This is my laptop. I use it every day.', 'C\'est mon ordinateur portable. Je l\'utilise chaque jour.'],
      ['Élodie', 'A', 'And what is that over there, near the door?', 'Et qu\'est-ce que c\'est là-bas, près de la porte ?'],
      ['Ben', 'B', 'That is my bag. These are my notebooks on the table.', 'C\'est mon sac. Ce sont mes carnets sur la table.'],
      ['Élodie', 'A', 'Are those your pens too?', 'Ce sont aussi tes stylos ?'],
      ['Ben', 'B', 'Yes, those are my pens. This one is blue, and that one is red.', 'Oui, ce sont mes stylos. Celui-ci est bleu, et celui-là est rouge.'],
    ],
    // Pronunciation: This/That/These/Those
    [
      ['This', '/ðɪs/', 'Ceci/Cette', 'Le "th" est SONORE : langue entre les dents, faites vibrer les cordes vocales. "Dzis" (approximatif).'],
      ['That', '/ðæt/', 'Cela/Cette', 'Même "th" sonore : "dzèt". Le "a" est ouvert comme dans "cat".' ],
      ['These', '/ðiːz/', 'Ces (proches)', '"Dziz" avec "th" sonore et "i" long. Ne confondez pas avec "this" (i court).' ],
      ['Those', '/ðoʊz/', 'Ces (éloignés)', '"Dzoz" avec "th" sonore et "o" long. Distinguez bien de "those" et "dos".' ],
    ]
  ),

  // a1-l14: At the Office (conversation)
  'a1-l14': makeContent(
    // Vocab: Office objects
    [
      ['Computer', 'Ordinateur', '/kəmˈpjuːtər/', 'The computer is on the desk.', 'L\'ordinateur est sur le bureau.'],
      ['Desk', 'Bureau', '/desk/', 'My desk is near the window.', 'Mon bureau est près de la fenêtre.'],
      ['Printer', 'Imprimante', '/ˈprɪntər/', 'The printer is not working.', 'L\'imprimante ne fonctionne pas.'],
      ['Folder', 'Dossier', '/ˈfoʊldər/', 'Put the paper in the folder.', 'Mettez le papier dans le dossier.'],
    ],
    // Grammar: "Where is...?" / Prepositions of place
    '"Where is...?" et les prépositions de lieu',
    'Pour demander où se trouve quelque chose : "Where is the printer?" (Où est l\'imprimante ?). Réponses avec les prépositions : on (sur), under (sous), next to (à côté de), near (près de), behind (derrière), in front of (devant).',
    [
      { s: 'The computer is on the desk.', t: 'L\'ordinateur est sur le bureau.', c: true },
      { s: 'The printer is next to the door.', t: 'L\'imprimante est à côté de la porte.', c: true },
      { s: 'The folder is in the desk.', t: '', c: false },
      { s: 'Where is my computer?', t: 'Où est mon ordinateur ?', c: true },
    ],
    [
      { w: 'The folder is in the desk.', cr: 'The folder is on the desk. / The folder is in the drawer.', e: 'On dit "on the desk" (sur le bureau) ou "in the drawer" (dans le tiroir), pas "in the desk".' },
      { w: 'Where is the computers?', cr: 'Where are the computers?', e: '"Computers" est pluriel, donc on utilise "Where are", pas "Where is".' },
    ],
    // Conversation: Describing an office layout
    [
      ['Chloé', 'A', 'Is this your office? It is very nice!', 'C\'est votre bureau ? Il est très sympa !'],
      ['Kevin', 'B', 'Yes! My computer is on the desk, near the window.', 'Oui ! Mon ordinateur est sur le bureau, près de la fenêtre.'],
      ['Chloé', 'A', 'Where is the printer?', 'Où est l\'imprimante ?'],
      ['Kevin', 'B', 'The printer is next to my desk. And the folders are under the desk.', 'L\'imprimante est à côté de mon bureau. Et les dossiers sont sous le bureau.'],
      ['Chloé', 'A', 'Is there a computer for me?', 'Y a-t-il un ordinateur pour moi ?'],
      ['Kevin', 'B', 'Yes! Your computer is behind the door, on the small desk.', 'Oui ! Votre ordinateur est derrière la porte, sur le petit bureau.'],
    ],
    // Pronunciation: Office objects
    [
      ['Computer', '/kəmˈpjuːtər/', 'Ordinateur', 'L\'accent est sur "pu" : "kem-PYOU-ter". Les syllabes avant et après sont réduites.'],
      ['Desk', '/desk/', 'Bureau (meuble)', 'Le "e" est bref et ouvert : "dèsk". Pas "disk".' ],
      ['Printer', '/ˈprɪntər/', 'Imprimante', 'Accent sur "PRINT" : "PRIN-ter". Le "i" est court comme dans "pin".' ],
      ['Folder', '/ˈfoʊldər/', 'Dossier', 'Prononcez "fol-der" — le "o" est long et le "er" final est doux.' ],
    ]
  ),

  // a1-l15: Object Sounds (pronunciation)
  'a1-l15': makeContent(
    // Vocab: Objects with tricky pronunciation
    [
      ['Board', 'Tableau', '/bɔːrd/', 'Write on the board, please.', 'Écrivez sur le tableau, s\'il vous plaît.'],
      ['Eraser', 'Gomme', '/ɪˈreɪsər/', 'I need an eraser.', 'J\'ai besoin d\'une gomme.'],
      ['Paper', 'Papier', '/ˈpeɪpər/', 'Give me a piece of paper.', 'Donnez-moi un bout de papier.'],
      ['Scissors', 'Ciseaux', '/ˈsɪzərz/', 'These scissors are sharp.', 'Ces ciseaux sont coupants.'],
    ],
    // Grammar: "Can I have...?" with objects
    '"Can I have...?" — Demander un objet',
    'Pour demander un objet poliment : "Can I have a pen, please?" (Puis-je avoir un stylo, s\'il vous plaît ?), "Can I borrow your eraser?" (Puis-je emprunter ta gomme ?). "Borrow" = emprunter, "lend" = prêter.',
    [
      { s: 'Can I have a piece of paper, please?', t: 'Puis-je avoir un bout de papier, s\'il vous plaît ?', c: true },
      { s: 'Can I borrow your scissors?', t: 'Puis-je emprunter tes ciseaux ?', c: true },
      { s: 'Can I have a papers?', t: '', c: false },
      { s: 'Can I have an eraser?', t: 'Puis-je avoir une gomme ?', c: true },
    ],
    [
      { w: 'Can I have a papers?', cr: 'Can I have some paper? / Can I have a piece of paper?', e: '"Paper" est généralement indénombrable. On dit "some paper" ou "a piece of paper".' },
      { w: 'Can I borrow a scissors?', cr: 'Can I borrow some scissors? / Can I borrow the scissors?', e: '"Scissors" est toujours pluriel. On ne dit pas "a scissors".' },
    ],
    // Conversation: Borrowing objects
    [
      ['Inès', 'A', 'Can I borrow your eraser, please?', 'Puis-je emprunter ta gomme, s\'il vous plaît ?'],
      ['Hugo', 'B', 'Of course! Here you go. Do you need paper too?', 'Bien sûr ! Tiens. As-tu aussi besoin de papier ?'],
      ['Inès', 'A', 'Yes, can I have a piece of paper? And where are the scissors?', 'Oui, puis-je avoir un bout de papier ? Et où sont les ciseaux ?'],
      ['Hugo', 'B', 'The scissors are on the board, next to the marker.', 'Les ciseaux sont sur le tableau, à côté du marqueur.'],
      ['Inès', 'A', 'Thank you so much! You are very kind.', 'Merci beaucoup ! Tu es très gentil.'],
      ['Hugo', 'B', 'You\'re welcome! Can I borrow your pen later?', 'De rien ! Puis-je emprunter ton stylo plus tard ?'],
    ],
    // Pronunciation: Tricky object sounds
    [
      ['Board', '/bɔːrd/', 'Tableau', 'Le "oa" = "o" long ouvert : "bord". Ne confondez pas avec "bored" (ennuyé) qui se prononce pareil !'],
      ['Eraser', '/ɪˈreɪsər/', 'Gomme', 'L\'accent est sur "ra" : "i-REI-ser". Le premier "e" est réduit.'],
      ['Paper', '/ˈpeɪpər/', 'Papier', 'Accent sur "PA" : "PEI-per". Le "a" de la première syllabe est long.' ],
      ['Scissors', '/ˈsɪzərz/', 'Ciseaux', 'Toujours pluriel ! Prononcez "si-zerz" — pas de "k" ni de "ss" au début ! Ce n\'est pas "scis-sors".'],
    ]
  ),

  // ─── Unit 4: Food & Drinks ─────────────────────────────────────────────────

  // a1-l16: Common Foods (vocabulary)
  'a1-l16': makeContent(
    // Vocab: Common foods
    [
      ['Bread', 'Pain', '/bred/', 'I eat bread for breakfast.', 'Je mange du pain au petit-déjeuner.'],
      ['Rice', 'Riz', '/raɪs/', 'We have rice with dinner.', 'Nous avons du riz avec le dîner.'],
      ['Meat', 'Viande', '/miːt/', 'He does not eat meat.', 'Il ne mange pas de viande.'],
      ['Vegetables', 'Légumes', '/ˈvedʒtəbəlz/', 'Eat your vegetables!', 'Mange tes légumes !'],
    ],
    // Grammar: Countable vs uncountable (basic)
    'Dénombrable et indénombrable — Introduction',
    'Certains aliments sont dénombrables (on peut les compter) : an apple, two eggs, three carrots. D\'autres sont indénombrables (on ne peut pas les compter) : bread, rice, meat, water. On dit "some bread" (du pain), pas "a bread" ou "two breads".',
    [
      { s: 'I eat some bread and two eggs.', t: 'Je mange du pain et deux œufs.', c: true },
      { s: 'She wants a rice.', t: '', c: false },
      { s: 'We need some vegetables.', t: 'Nous avons besoin de légumes.', c: true },
      { s: 'Can I have two breads?', t: '', c: false },
    ],
    [
      { w: 'She wants a rice.', cr: 'She wants some rice.', e: '"Rice" est indénombrable. On dit "some rice", pas "a rice".' },
      { w: 'Can I have two breads?', cr: 'Can I have two slices of bread? / Can I have some bread?', e: '"Bread" est indénombrable. On dit "two slices of bread" (deux tranches de pain).' },
    ],
    // Conversation: Talking about what you eat
    [
      ['Fatou', 'A', 'What do you eat for breakfast?', 'Que manges-tu au petit-déjeuner ?'],
      ['Thomas', 'B', 'I eat some bread with butter. And you?', 'Je mange du pain avec du beurre. Et toi ?'],
      ['Fatou', 'A', 'I eat rice and vegetables. I love vegetables!', 'Je mange du riz et des légumes. J\'adore les légumes !'],
      ['Thomas', 'B', 'Do you eat meat?', 'Manges-tu de la viande ?'],
      ['Fatou', 'A', 'Yes, I eat meat sometimes. But I prefer fish.', 'Oui, je mange de la viande parfois. Mais je préfère le poisson.'],
      ['Thomas', 'B', 'I like meat a lot! My favorite meal is chicken with rice.', 'J\'aime beaucoup la viande ! Mon plat préféré est le poulet avec du riz.'],
    ],
    // Pronunciation: Food words
    [
      ['Bread', '/bred/', 'Pain', 'Le "ea" se prononce "é" bref : "brède". Pas "bri-d" !'],
      ['Rice', '/raɪs/', 'Riz', 'Le "i" est long : "raïce". Ne dites pas "ris" — le son est complètement différent.' ],
      ['Meat', '/miːt/', 'Viande', 'Le "ea" = "ii" long : "miit". Ne confondez pas avec "met" (rencontré) qui a un "e" court.' ],
      ['Vegetables', '/ˈvedʒtəbəlz/', 'Légumes', 'On prononce souvent "vedj-te-bls" — le "e" du milieu disparaît ! L\'accent est sur "VEG".' ],
    ]
  ),

  // a1-l17: Drinks & Beverages (vocabulary)
  'a1-l17': makeContent(
    // Vocab: Drinks
    [
      ['Water', 'Eau', '/ˈwɔːtər/', 'Can I have some water, please?', 'Puis-je avoir de l\'eau, s\'il vous plaît ?'],
      ['Coffee', 'Café', '/ˈkɒfi/', 'I drink coffee every morning.', 'Je bois du café chaque matin.'],
      ['Tea', 'Thé', '/tiː/', 'She prefers tea over coffee.', 'Elle préfère le thé au café.'],
      ['Juice', 'Jus', '/dʒuːs/', 'I would like some orange juice.', 'Je voudrais du jus d\'orange.'],
    ],
    // Grammar: "Would you like...?" for offering
    '"Would you like...?" — Proposer quelque chose',
    'Pour proposer une boisson : "Would you like some coffee?" (Voulez-vous du café ?). Réponses : "Yes, please" (Oui, s\'il vous plaît) ou "No, thank you" (Non, merci). "Would you like" est plus poli que "Do you want".',
    [
      { s: 'Would you like some tea?', t: 'Voulez-vous du thé ?', c: true },
      { s: 'Yes, please. I would like some coffee.', t: 'Oui, s\'il vous plaît. Je voudrais du café.', c: true },
      { s: 'Do you like some water?', t: '', c: false },
      { s: 'Would you like a juice?', t: '', c: false },
    ],
    [
      { w: 'Do you like some water?', cr: 'Would you like some water?', e: 'Pour proposer, on utilise "Would you like" (voulez-vous), pas "Do you like" (aimez-vous).' },
      { w: 'Would you like a juice?', cr: 'Would you like some juice? / Would you like a glass of juice?', e: '"Juice" est indénombrable. On dit "some juice" ou "a glass of juice".' },
    ],
    // Conversation: Offering and accepting drinks
    [
      ['Hôtesse', 'A', 'Hello! Would you like something to drink?', 'Bonjour ! Voulez-vous quelque chose à boire ?'],
      ['Passager', 'B', 'Yes, please! What do you have?', 'Oui, s\'il vous plaît ! Qu\'avez-vous ?'],
      ['Hôtesse', 'A', 'We have water, coffee, tea, and juice.', 'Nous avons de l\'eau, du café, du thé et du jus.'],
      ['Passager', 'B', 'I would like some coffee, please. No sugar.', 'Je voudrais du café, s\'il vous plaît. Sans sucre.'],
      ['Hôtesse', 'A', 'Here you go! Would you like some water too?', 'Voici ! Voulez-vous aussi de l\'eau ?'],
      ['Passager', 'B', 'No, thank you. The coffee is perfect!', 'Non, merci. Le café est parfait !'],
    ],
    // Pronunciation: Drink words
    [
      ['Water', '/ˈwɔːtər/', 'Eau', 'En anglais américain, le "t" du milieu est souvent adouci : "wa-der". En anglais britannique, c\'est un "t" clair : "wa-ter".'],
      ['Coffee', '/ˈkɒfi/', 'Café', 'Le "o" est ouvert comme dans "bon" : "ko-fi". L\'accent est sur "COF".' ],
      ['Tea', '/tiː/', 'Thé', 'Le "ea" = "ii" long : "tii". Ne dites pas "té" — le son est différent !' ],
      ['Juice', '/dʒuːs/', 'Jus', 'Prononcez "djoouss" — le "j" est doux comme dans "jour" et le "u" est long.' ],
    ]
  ),

  // a1-l18: I Like / I Don't Like (grammar)
  'a1-l18': makeContent(
    // Vocab: Food for preferences
    [
      ['Pizza', 'Pizza', '/ˈpiːtsə/', 'I like pizza very much!', 'J\'aime beaucoup la pizza !'],
      ['Salad', 'Salade', '/ˈsæləd/', 'She eats salad every day.', 'Elle mange de la salade chaque jour.'],
      ['Fish', 'Poisson', '/fɪʃ/', 'He doesn\'t like fish.', 'Il n\'aime pas le poisson.'],
      ['Fruit', 'Fruit', '/fruːt/', 'Fruit is good for you.', 'Les fruits sont bons pour toi.'],
    ],
    // Grammar: I Like / I Don't Like
    'I Like / I Don\'t Like — Exprimer ses goûts',
    'Pour exprimer ses goûts : "I like" (j\'aime) + nom ou verbe en -ing. "I don\'t like" (je n\'aime pas). Avec he/she/it : "likes" et "doesn\'t like". Question : "Do you like...?" (Aimes-tu...?). "Love" = adorer, "hate" = détester.',
    [
      { s: 'I like pizza.', t: 'J\'aime la pizza.', c: true },
      { s: 'She likes fish.', t: 'Elle aime le poisson.', c: true },
      { s: 'He don\'t like salad.', t: '', c: false },
      { s: 'Do you like fruit?', t: 'Aimes-tu les fruits ?', c: true },
    ],
    [
      { w: 'He don\'t like salad.', cr: 'He doesn\'t like salad.', e: 'Avec he/she/it, on utilise "doesn\'t" au lieu de "don\'t".' },
      { w: 'She like pizza.', cr: 'She likes pizza.', e: 'Avec he/she/it, on ajoute "s" au verbe : likes.' },
    ],
    // Conversation: Discussing food preferences
    [
      ['Amina', 'A', 'What do you like to eat?', 'Qu\'aimes-tu manger ?'],
      ['Lucas', 'B', 'I like pizza and salad. I love fruit! And you?', 'J\'aime la pizza et la salade. J\'adore les fruits ! Et toi ?'],
      ['Amina', 'A', 'I don\'t like pizza. I prefer fish and rice.', 'Je n\'aime pas la pizza. Je préfère le poisson et le riz.'],
      ['Lucas', 'B', 'Does your sister like fish too?', 'Ta sœur aime-t-elle aussi le poisson ?'],
      ['Amina', 'A', 'No, she doesn\'t! She hates fish. She likes meat and vegetables.', 'Non ! Elle déteste le poisson. Elle aime la viande et les légumes.'],
      ['Lucas', 'B', 'We are very different! I like everything!', 'Nous sommes très différents ! J\'aime tout !'],
    ],
    // Pronunciation: Preference words
    [
      ['Pizza', '/ˈpiːtsə/', 'Pizza', 'Le "zz" anglais = "ts" : "pits-sa". Ne dites pas "piz-za" à l\'italienne en anglais !'],
      ['Salad', '/ˈsæləd/', 'Salade', 'L\'accent est sur "SA" : "SA-led". Le "a" est très ouvert comme dans "cat".' ],
      ['Fish', '/fɪʃ/', 'Poisson', 'Le "i" est court : "fich". Pas "fiich" avec un "i" long !' ],
      ['Fruit', '/fruːt/', 'Fruit', 'Prononcez "frou-t" — le "u" est long. Ne prononcez pas le "i" !' ],
    ]
  ),

  // a1-l19: Ordering at a Café (conversation)
  'a1-l19': makeContent(
    // Vocab: Café words
    [
      ['Menu', 'Menu/Carte', '/ˈmenjuː/', 'Can I see the menu, please?', 'Puis-je voir la carte, s\'il vous plaît ?'],
      ['Order', 'Commande', '/ˈɔːrdər/', 'Are you ready to order?', 'Êtes-vous prêt à commander ?'],
      ['Bill', 'L\'addition', '/bɪl/', 'Can I have the bill, please?', 'Puis-je avoir l\'addition, s\'il vous plaît ?'],
      ['Waiter', 'Serveur', '/ˈweɪtər/', 'Excuse me, waiter!', 'Excusez-moi, serveur !'],
    ],
    // Grammar: "Can I have...?" / "I would like..."
    '"Can I have...?" / "I would like..." — Commandes polies',
    'Pour commander poliment : "Can I have a coffee, please?" (Puis-je avoir un café, s\'il vous plaît ?) ou "I would like a tea, please" (Je voudrais un thé, s\'il vous plaît). "I\'ll have..." (Je vais prendre...) est aussi courant.',
    [
      { s: 'Can I have a coffee, please?', t: 'Puis-je avoir un café, s\'il vous plaît ?', c: true },
      { s: 'I would like some tea, please.', t: 'Je voudrais du thé, s\'il vous plaît.', c: true },
      { s: 'I want a coffee now.', t: '', c: false },
      { s: 'I\'ll have the sandwich, please.', t: 'Je vais prendre le sandwich, s\'il vous plaît.', c: true },
    ],
    [
      { w: 'I want a coffee now.', cr: 'I would like a coffee, please.', e: '"Want" est trop direct et impoli. Utilisez "would like" ou "can I have" pour être poli.' },
      { w: 'Give me the bill.', cr: 'Can I have the bill, please?', e: '"Give me" est impoli. Utilisez "Can I have...?" pour demander l\'addition poliment.' },
    ],
    // Conversation: Ordering at a café
    [
      ['Serveur', 'A', 'Good afternoon! Here is the menu. Are you ready to order?', 'Bon après-midi ! Voici la carte. Êtes-vous prêt à commander ?'],
      ['Claire', 'B', 'Yes! I would like a coffee and a sandwich, please.', 'Oui ! Je voudrais un café et un sandwich, s\'il vous plaît.'],
      ['Serveur', 'A', 'Would you like anything else? We have cake today.', 'Voulez-vous autre chose ? Nous avons du gâteau aujourd\'hui.'],
      ['Claire', 'B', 'Oh, yes! Can I have a piece of chocolate cake, please?', 'Oh, oui ! Puis-je avoir un morceau de gâteau au chocolat, s\'il vous plaît ?'],
      ['Serveur', 'A', 'Of course! Here is your order. Enjoy!', 'Bien sûr ! Voici votre commande. Bon appétit !'],
      ['Claire', 'B', 'Thank you! Can I have the bill, please?', 'Merci ! Puis-je avoir l\'addition, s\'il vous plaît ?'],
    ],
    // Pronunciation: Café words
    [
      ['Menu', '/ˈmenjuː/', 'Menu/Carte', 'Le "u" final est long : "mé-niou". L\'accent est sur "ME".' ],
      ['Order', '/ˈɔːrdər/', 'Commande', 'L\'accent est sur "OR" : "OR-der". Le "o" est long et ouvert.' ],
      ['Bill', '/bɪl/', 'L\'addition', 'Le "i" est court : "bil". Comme "billet" sans le "-et".' ],
      ['Waiter', '/ˈweɪtər/', 'Serveur', 'Le "w" initial : arrondissez les lèvres. "Oué-ter". L\'accent est sur "WAIT".' ],
    ]
  ),

  // a1-l20: Food Pronunciation (pronunciation)
  'a1-l20': makeContent(
    // Vocab: Foods with tricky pronunciation
    [
      ['Cheese', 'Fromage', '/tʃiːz/', 'I love cheese on my sandwich.', 'J\'adore le fromage sur mon sandwich.'],
      ['Soup', 'Soupe', '/suːp/', 'The soup is very hot.', 'La soupe est très chaude.'],
      ['Chocolate', 'Chocolat', '/ˈtʃɒklət/', 'She eats chocolate every day.', 'Elle mange du chocolat chaque jour.'],
      ['Breakfast', 'Petit-déjeuner', '/ˈbrekfəst/', 'Breakfast is at 8 o\'clock.', 'Le petit-déjeuner est à 8 heures.'],
    ],
    // Grammar: "Some" and "any" with food
    '"Some" et "any" avec la nourriture',
    'On utilise "some" à l\'affirmatif : "I have some cheese" (J\'ai du fromage). On utilise "any" au négatif et interrogatif : "I don\'t have any soup" (Je n\'ai pas de soupe), "Do you have any chocolate?" (Avez-vous du chocolat ?). Exception : "some" dans les questions polies : "Would you like some breakfast?"',
    [
      { s: 'I have some cheese and some soup.', t: 'J\'ai du fromage et de la soupe.', c: true },
      { s: 'I don\'t have any chocolate.', t: 'Je n\'ai pas de chocolat.', c: true },
      { s: 'Do you have some milk?', t: '', c: false },
      { s: 'Would you like some breakfast?', t: 'Voulez-vous un petit-déjeuner ?', c: true },
    ],
    [
      { w: 'Do you have some milk?', cr: 'Do you have any milk?', e: 'Dans les questions ordinaires, on utilise "any", pas "some". "Some" est pour les questions polies seulement.' },
      { w: 'I don\'t have some cheese.', cr: 'I don\'t have any cheese.', e: 'À la forme négative, on utilise toujours "any", pas "some".' },
    ],
    // Conversation: Talking about meals
    [
      ['Maman', 'A', 'What would you like for breakfast, dear?', 'Que voudrais-tu pour le petit-déjeuner, chéri ?'],
      ['Fils', 'B', 'Can I have some chocolate, please?', 'Puis-je avoir du chocolat, s\'il vous plaît ?'],
      ['Maman', 'A', 'No, we don\'t have any chocolate. Would you like some cheese?', 'Non, nous n\'avons pas de chocolat. Voudrais-tu du fromage ?'],
      ['Fils', 'B', 'Yes, please! And some soup too?', 'Oui, s\'il vous plaît ! Et de la soupe aussi ?'],
      ['Maman', 'A', 'Soup for breakfast? OK! Do you want any bread with it?', 'De la soupe au petit-déjeuner ? D\'accord ! Veux-tu du pain avec ?'],
      ['Fils', 'B', 'Yes! I love breakfast!', 'Oui ! J\'adore le petit-déjeuner !'],
    ],
    // Pronunciation: Tricky food sounds
    [
      ['Cheese', '/tʃiːz/', 'Fromage', 'Le "ch" = "tch" et le "ee" = "ii" long : "tchiiz". Ne dites pas "chiz" à la française !'],
      ['Soup', '/suːp/', 'Soupe', 'Le "ou" est long : "souup". Attention, le "p" final est prononcé mais sans explosion.' ],
      ['Chocolate', '/ˈtʃɒklət/', 'Chocolat', 'On prononce "tchok-let" — seulement DEUX syllabes ! Le "o" du milieu disparaît. Pas "cho-co-lat".'],
      ['Breakfast', '/ˈbrekfəst/', 'Petit-déjeuner', 'Prononcez "brek-fust" — le "a" se change en un son réduit. Pas "brék-fast" ! L\'accent est sur "BREK".'],
    ]
  ),
}
