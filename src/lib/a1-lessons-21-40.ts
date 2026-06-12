// Lesson content for A1 Units 5-8
// YOELANG English learning app for francophone users
// Inspired by Harvard's practical English pedagogy - rigorous, practical, progressive

import { VocabWord, GrammarRule, DialogueLine, PronunciationItem, LessonContent } from '@/lib/lesson-content'

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
  pronunciation: [
    { word: 'Bargain', phonetic: '/ˈbɑːrɡɪn/', meaning: 'Bonne affaire', tip: 'L\'accent sur "BAR" : "BAR-ginn". Le "ai" ne se prononce PAS "é" mais "i" court.' },
    { word: 'Wallet', phonetic: '/ˈwɒlɪt/', meaning: 'Portefeuille', tip: 'Le "w" : arrondissez les lèvres. "Ool-lit". Le "a" est ouvert comme dans "bon".' },
    { word: 'Change', phonetic: '/tʃeɪndʒ/', meaning: 'Monnaie', tip: 'Le "ch" = "tch" et le "ge" = "dj" : "tchéindj". Comme "échange" sans le premier "é".' },
    { word: 'Customer', phonetic: '/ˈkʌstəmər/', meaning: 'Client(e)', tip: 'L\'accent sur "CUS" : "KEUS-te-mer". Le "u" est ouvert comme dans "bus".' },
  ],
}
