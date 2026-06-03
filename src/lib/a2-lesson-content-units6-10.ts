// Lesson content for A2 Units 6-10
// YOELANG English learning app for francophone users
// Inspired by Harvard's practical English pedagogy — rigorous, practical, progressive
// CORRECTED: Content now matches course-data.ts lesson titles

import { type LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 6: PAST EXPERIENCES (a2-l26 through a2-l30)
// ════════════════════════════════════════════════════════════════════════════════

// ─── a2-l26: Travel Words (vocabulary) ────────────────────────────────────
export const A2_L26: LessonContent = {
  vocab: [
    { english: 'Journey', french: 'Voyage', phonetic: '/ˈdʒɜːrni/', example: 'The journey took three hours.', exampleTranslation: 'Le voyage a duré trois heures.' },
    { english: 'Ticket', french: 'Billet', phonetic: '/ˈtɪkɪt/', example: 'I bought a ticket to Paris.', exampleTranslation: "J'ai acheté un billet pour Paris." },
    { english: 'Luggage', french: 'Bagage', phonetic: '/ˈlʌɡɪdʒ/', example: 'Don\'t forget your luggage!', exampleTranslation: "N'oubliez pas vos bagages !" },
    { english: 'Destination', french: 'Destination', phonetic: '/ˌdestɪˈneɪʃən/', example: 'Our destination is Dakar.', exampleTranslation: 'Notre destination est Dakar.' },
    { english: 'Abroad', french: 'À l\'étranger', phonetic: '/əˈbrɔːd/', example: 'She has never travelled abroad.', exampleTranslation: "Elle n'a jamais voyagé à l'étranger." },
  ],
  grammar: {
    title: 'Vocabulaire du voyage — Noms indénombrables',
    explanation: 'ATTENTION : "luggage" (bagages) est indénombrable en anglais ! On dit "my luggage" (pas "my luggages"), "two pieces of luggage" (pas "two luggages"). De même : "travel" (voyager) est un verbe, "trip" ou "journey" sont les noms. "Abroad" est un adverbe, pas un nom : "go abroad" (aller à l\'étranger), pas "go to abroad". "Journey" = voyage long, "trip" = voyage court.',
    examples: [
      { sentence: 'I bought a ticket for my journey.', translation: "J'ai acheté un billet pour mon voyage.", isCorrect: true },
      { sentence: 'I have three luggages.', translation: '', isCorrect: false },
      { sentence: 'She went abroad last summer.', translation: "Elle est allée à l'étranger l'été dernier.", isCorrect: true },
      { sentence: 'Our destination is very far.', translation: 'Notre destination est très loin.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I have three luggages.', correct: 'I have three pieces of luggage.', explanation: '"Luggage" est indénombrable. On dit "pieces of luggage", pas "luggages".' },
      { wrong: 'She went to abroad.', correct: 'She went abroad.', explanation: '"Abroad" est un adverbe, pas un nom. On dit "go abroad", pas "go to abroad".' },
    ],
  },
  conversation: [
    { speaker: 'Kofi', role: 'A', text: 'Have you ever travelled abroad?', translation: "As-tu déjà voyagé à l'étranger ?" },
    { speaker: 'Fatou', role: 'B', text: 'Yes! I went to France last year. The journey was long.', translation: "Oui ! Je suis allée en France l'année dernière. Le voyage était long." },
    { speaker: 'Kofi', role: 'A', text: 'How much luggage did you take?', translation: 'Combien de bagages as-tu pris ?' },
    { speaker: 'Fatou', role: 'B', text: 'Only one suitcase! I bought my ticket online.', translation: "Seulement une valise ! J'ai acheté mon billet en ligne." },
    { speaker: 'Kofi', role: 'A', text: 'I want to visit Dakar. It is my dream destination.', translation: 'Je veux visiter Dakar. C\'est ma destination de rêve.' },
    { speaker: 'Fatou', role: 'B', text: 'You should go! The journey is worth it.', translation: 'Tu devrais y aller ! Le voyage en vaut la peine.' },
  ],
  conversationTitle: 'Parler de voyages',
  pronunciation: [
    { word: 'Journey', phonetic: '/ˈdʒɜːrni/', meaning: 'Voyage', tip: 'L\'accent est sur "JUR" : "DJEUR-ni". Pas "jour-ney" à la française.' },
    { word: 'Ticket', phonetic: '/ˈtɪkɪt/', meaning: 'Billet', tip: 'Prononcez "TI-kit" — le "i" est court dans les deux syllabes.' },
    { word: 'Luggage', phonetic: '/ˈlʌɡɪdʒ/', meaning: 'Bagage', tip: 'Prononcez "LEU-gidj" — le "u" est ouvert et le "ge" = "dj".' },
    { word: 'Abroad', phonetic: '/əˈbrɔːd/', meaning: 'À l\'étranger', tip: 'L\'accent est sur "BROAD" : "e-BROD". Le "a" initial est réduit.' },
  ],
}

// ─── a2-l27: Past Simple: Regular (grammar) ────────────────────────────────
export const A2_L27: LessonContent = {
  vocab: [
    { english: 'Travelled', french: 'Voyagea (travel → travelled)', phonetic: '/ˈtrævəld/', example: 'She travelled to London last month.', exampleTranslation: "Elle a voyagé à Londres le mois dernier." },
    { english: 'Visited', french: 'Visita (visit → visited)', phonetic: '/ˈvɪzɪtɪd/', example: 'We visited the museum yesterday.', exampleTranslation: 'Nous avons visité le musée hier.' },
    { english: 'Arrived', french: 'Arriva (arrive → arrived)', phonetic: '/əˈraɪvd/', example: 'The train arrived on time.', exampleTranslation: 'Le train est arrivé à l\'heure.' },
    { english: 'Enjoyed', french: 'Apprécia (enjoy → enjoyed)', phonetic: '/ɪnˈdʒɔɪd/', example: 'They enjoyed their trip.', exampleTranslation: 'Ils ont apprécié leur voyage.' },
    { english: 'Stayed', french: 'Resta (stay → stayed)', phonetic: '/steɪd/', example: 'We stayed at a hotel.', exampleTranslation: 'Nous sommes restés à l\'hôtel.' },
  ],
  grammar: {
    title: 'Le Past Simple — Verbes réguliers (-ed)',
    explanation: 'Le Past Simple des verbes réguliers se forme en ajoutant -ed : travel → travelled, visit → visited, arrive → arrived. RÈGLES : 1) Verbe + -ed : visited, stayed. 2) Verbe en -e → +d : arrived, enjoyed. 3) Verbe en consonne + y → -ied : studied, carried. 4) Verbe en consonne-voyelle-consonne (1 syllabe) → double consonne + -ed : stopped, planned. Négatif : "I didn\'t travel" (pas "I didn\'t travelled"). Question : "Did you travel?" (pas "Did you travelled?").',
    examples: [
      { sentence: 'She travelled to Paris last week.', translation: 'Elle a voyagé à Paris la semaine dernière.', isCorrect: true },
      { sentence: 'I didn\'t visited the museum.', translation: '', isCorrect: false },
      { sentence: 'Did you enjoy the trip?', translation: 'As-tu apprécié le voyage ?', isCorrect: true },
      { sentence: 'We stayed at a hotel near the beach.', translation: 'Nous sommes restés dans un hôtel près de la plage.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I didn\'t visited the museum.', correct: 'I didn\'t visit the museum.', explanation: 'Au négatif, on utilise "didn\'t" + verbe de base : "didn\'t visit", pas "didn\'t visited".' },
      { wrong: 'She stoped at the station.', correct: 'She stopped at the station.', explanation: 'Verbe en CVC (consonne-voyelle-consonne) : on double la consonne finale : stop → stopped, pas "stoped".' },
    ],
  },
  conversation: [
    { speaker: 'Amara', role: 'A', text: 'Where did you go last summer?', translation: 'Où es-tu allé l\'été dernier ?' },
    { speaker: 'Idrissa', role: 'B', text: 'I travelled to Morocco. I visited my family in Casablanca.', translation: "Je suis allé au Maroc. J'ai rendu visite à ma famille à Casablanca." },
    { speaker: 'Amara', role: 'A', text: 'Did you enjoy the journey?', translation: 'As-tu apprécié le voyage ?' },
    { speaker: 'Idrissa', role: 'B', text: 'Yes! I arrived late, but my family waited for me.', translation: "Oui ! Je suis arrivé en retard, mais ma famille m'a attendu." },
    { speaker: 'Amara', role: 'A', text: 'Where did you stay?', translation: 'Où es-tu resté ?' },
    { speaker: 'Idrissa', role: 'B', text: 'I stayed with my grandmother. She cooked delicious food!', translation: "Je suis resté chez ma grand-mère. Elle a cuisiné de la délicieuse nourriture !" },
  ],
  conversationTitle: 'Raconter un voyage au passé',
  pronunciation: [
    { word: 'Travelled', phonetic: '/ˈtrævəld/', meaning: 'Voyagea', tip: 'Prononcez "TRA-velt" — le "-ed" se prononce "t" après un son sourd comme "l".' },
    { word: 'Visited', phonetic: '/ˈvɪzɪtɪd/', meaning: 'Visita', tip: 'Prononcez "VI-zi-tid" — le "-ed" se prononce "id" après "t" ou "d".' },
    { word: 'Arrived', phonetic: '/əˈraɪvd/', meaning: 'Arriva', tip: 'Prononcez "e-RAÏVD" — le "-ed" se prononce "d" après un son sonore comme "v".' },
    { word: 'Enjoyed', phonetic: '/ɪnˈdʒɔɪd/', meaning: 'Apprécia', tip: 'Prononcez "in-DJOÏD" — le "-ed" se prononce "d" après "y" sonore.' },
  ],
}

// ─── a2-l28: Past Simple: Irregular (grammar) ────────────────────────────────
export const A2_L28: LessonContent = {
  vocab: [
    { english: 'Went', french: 'Alla (go → went)', phonetic: '/went/', example: 'She went to the market yesterday.', exampleTranslation: 'Elle est allée au marché hier.' },
    { english: 'Saw', french: 'Vit (see → saw)', phonetic: '/sɔː/', example: 'I saw a beautiful bird.', exampleTranslation: "J'ai vu un bel oiseau." },
    { english: 'Ate', french: 'Mangea (eat → ate)', phonetic: '/eɪt/', example: 'We ate rice and fish for dinner.', exampleTranslation: 'Nous avons mangé du riz et du poisson pour le dîner.' },
    { english: 'Drank', french: 'But (drink → drank)', phonetic: '/dræŋk/', example: 'He drank three glasses of water.', exampleTranslation: "Il a bu trois verres d'eau." },
    { english: 'Took', french: 'Prit (take → took)', phonetic: '/tʊk/', example: 'They took a taxi to the airport.', exampleTranslation: 'Ils ont pris un taxi pour l\'aéroport.' },
  ],
  grammar: {
    title: 'Le Past Simple — Verbes irréguliers',
    explanation: 'Les verbes irréguliers anglais ne suivent pas la règle du -ed. Il faut les mémoriser ! Voici les plus courants : go → went, see → saw, eat → ate, drink → drank, take → took, come → came, make → made, get → got, buy → bought, think → thought. Le Past Simple irrégulier s\'utilise comme le régulier : "I went" (je suis allé), négatif : "I didn\'t go" (je ne suis pas allé), question : "Did you go?" (es-tu allé ?).',
    examples: [
      { sentence: 'She went to Dakar last week.', translation: 'Elle est allée à Dakar la semaine dernière.', isCorrect: true },
      { sentence: 'We didn\'t went to the party.', translation: '', isCorrect: false },
      { sentence: 'Did you see the new film?', translation: 'As-tu vu le nouveau film ?', isCorrect: true },
      { sentence: 'He ate breakfast at seven o\'clock.', translation: 'Il a pris le petit-déjeuner à sept heures.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'We didn\'t went to the party.', correct: 'We didn\'t go to the party.', explanation: 'Au négatif, on utilise "didn\'t" + verbe de base (infinitif sans "to") : "didn\'t go", pas "didn\'t went".' },
      { wrong: 'She didn\'t saw the movie.', correct: 'She didn\'t see the movie.', explanation: 'Après "didn\'t", on retourne TOUJOURS au verbe de base : "see", pas "saw".' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'What did you do last weekend, Moussa?', translation: 'Qu\'as-tu fait le week-end dernier, Moussa ?' },
    { speaker: 'Moussa', role: 'B', text: 'I went to the market and bought some vegetables. And you?', translation: 'Je suis allé au marché et j\'ai acheté des légumes. Et toi ?' },
    { speaker: 'Fatou', role: 'A', text: 'I saw my grandmother. She made delicious attiéké.', translation: "J'ai vu ma grand-mère. Elle a préparé de délicieux attiéké." },
    { speaker: 'Moussa', role: 'B', text: 'That sounds great! Did you eat there?', translation: 'Ça a l\'air génial ! As-tu mangé là-bas ?' },
    { speaker: 'Fatou', role: 'A', text: 'Yes, we ate together and drank bissap. It was wonderful.', translation: 'Oui, nous avons mangé ensemble et bu du bissap. C\'était merveilleux.' },
    { speaker: 'Moussa', role: 'B', text: 'I took my family to the beach on Sunday. The children loved it!', translation: "J'ai emmené ma famille à la plage dimanche. Les enfants ont adoré !" },
  ],
  conversationTitle: 'Raconter ses activités du week-end',
  pronunciation: [
    { word: 'Went', phonetic: '/went/', meaning: 'Alla', tip: 'Prononcez "ouènt" — le "w" est formé en arrondissant les lèvres, comme pour dire "oui".' },
    { word: 'Saw', phonetic: '/sɔː/', meaning: 'Vit', tip: 'Le "aw" = "o" long ouvert : "soo". Comme dans "port". Ne dites pas "sao".' },
    { word: 'Ate', phonetic: '/eɪt/', meaning: 'Mangea', tip: 'Prononcez "éït" — le "a" est long comme dans "day". Ne dites pas "at".' },
    { word: 'Bought', phonetic: '/bɔːt/', meaning: 'Acheta', tip: 'Le "ough" = "o" long : "bot". Le "gh" est silencieux. Comme "port" sans le "r".' },
  ],
}

// ─── a2-l29: What Did You Do? (conversation) ─────────────────────────────────
export const A2_L29: LessonContent = {
  vocab: [
    { english: 'Yesterday', french: 'Hier', phonetic: '/ˈjestərdeɪ/', example: 'I visited my uncle yesterday.', exampleTranslation: "J'ai rendu visite à mon oncle hier." },
    { english: 'Last night', french: 'Hier soir', phonetic: '/læst naɪt/', example: 'We watched a film last night.', exampleTranslation: 'Nous avons regardé un film hier soir.' },
    { english: 'Last week', french: 'La semaine dernière', phonetic: '/læst wiːk/', example: 'She travelled to Bamako last week.', exampleTranslation: 'Elle a voyagé à Bamako la semaine dernière.' },
    { english: 'Ago', french: 'Il y a', phonetic: '/əˈɡoʊ/', example: 'I finished school two years ago.', exampleTranslation: "J'ai terminé l'école il y a deux ans." },
  ],
  grammar: {
    title: 'Marqueurs de temps du passé — Yesterday, last, ago',
    explanation: 'Pour situer une action dans le passé, on utilise : "yesterday" (hier), "last night" (hier soir), "last week" (la semaine dernière), "last month" (le mois dernier), "last year" (l\'année dernière), "ago" (il y a). ATTENTION : "ago" se place APRÈS la durée : "two days ago" (il y a deux jours), "three years ago" (il y a trois ans). On dit "last Monday" (lundi dernier), PAS "the last Monday".',
    examples: [
      { sentence: 'I arrived two days ago.', translation: 'Je suis arrivé il y a deux jours.', isCorrect: true },
      { sentence: 'She went to Conakry the last week.', translation: '', isCorrect: false },
      { sentence: 'We had a meeting yesterday.', translation: 'Nous avons eu une réunion hier.', isCorrect: true },
      { sentence: 'He called me last night.', translation: 'Il m\'a appelé hier soir.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She went to Conakry the last week.', correct: 'She went to Conakry last week.', explanation: 'On dit "last week" sans article "the". Pas "the last week" ni "the last Monday".' },
      { wrong: 'I went ago two days.', correct: 'I went two days ago.', explanation: '"Ago" se place APRÈS la durée : "two days ago", pas "ago two days".' },
    ],
  },
  conversation: [
    { speaker: 'Amina', role: 'A', text: 'How was your weekend, Oumar?', translation: 'Comment s\'est passé ton week-end, Oumar ?' },
    { speaker: 'Oumar', role: 'B', text: 'It was great! I went to the football match on Saturday.', translation: 'C\'était génial ! Je suis allé au match de football samedi.' },
    { speaker: 'Amina', role: 'A', text: 'Did your team win?', translation: 'Ton équipe a gagné ?' },
    { speaker: 'Oumar', role: 'B', text: 'Yes! We won three to one. What did you do?', translation: 'Oui ! On a gagné trois à un. Qu\'as-tu fait ?' },
    { speaker: 'Amina', role: 'A', text: 'I visited my aunt in the village. I came back yesterday.', translation: "J'ai rendu visite à ma tante au village. Je suis revenue hier." },
    { speaker: 'Oumar', role: 'B', text: 'That sounds nice. Did you eat good food there?', translation: 'Ça a l\'air sympa. As-tu bien mangé là-bas ?' },
  ],
  conversationTitle: 'Qu\'as-tu fait le week-end dernier ?',
  pronunciation: [
    { word: 'Yesterday', phonetic: '/ˈjestərdeɪ/', meaning: 'Hier', tip: 'L\'accent est sur "YES" : "YES-ter-deï". Le "e" du milieu est réduit.' },
    { word: 'Last', phonetic: '/læst/', meaning: 'Dernier/dernière', tip: 'Le "a" est très ouvert comme dans "cat" : "læst". Pas "lést".' },
    { word: 'Ago', phonetic: '/əˈɡoʊ/', meaning: 'Il y a', tip: 'L\'accent est sur "GO" : "e-GO". Le premier "a" est réduit.' },
    { word: 'Weekend', phonetic: '/ˌwiːkˈend/', meaning: 'Week-end', tip: 'Deux accents possibles : "oui-KEND" (britannique) ou "OUI-kend" (américain).' },
  ],
}

// ─── a2-l30: Travel Sounds (pronunciation) ────────────────────────────────
export const A2_L30: LessonContent = {
  vocab: [
    { english: 'Passenger', french: 'Passager', phonetic: '/ˈpæsəndʒər/', example: 'The passengers waited at the gate.', exampleTranslation: 'Les passagers ont attendu à la porte.' },
    { english: 'Flight', french: 'Vol', phonetic: '/flaɪt/', example: 'My flight was delayed.', exampleTranslation: 'Mon vol a été retardé.' },
    { english: 'Boarding pass', french: 'Carte d\'embarquement', phonetic: '/ˈbɔːrdɪŋ pæs/', example: 'Please show your boarding pass.', exampleTranslation: "Veuillez montrer votre carte d'embarquement." },
    { english: 'Departure', french: 'Départ', phonetic: '/dɪˈpɑːrtʃər/', example: 'The departure time is eight thirty.', exampleTranslation: "L'heure de départ est huit heures trente." },
  ],
  grammar: {
    title: 'Prononciation des mots de voyage — Mots souvent mal prononcés',
    explanation: 'Les mots de voyage ont des prononciations inattendues pour les francophones : "journey" = "DJEUR-ni" (pas "jour-ney"), "destination" = "des-ti-NÉ-chen" (accent sur NÉ), "departure" = "di-PAR-tcher" (accent sur PAR), "luggage" = "LEU-gidj" (pas "lu-gage"). Le son "-tion" se prononce toujours "-chen" en anglais.',
    examples: [
      { sentence: 'The PASsenegers are ready.', translation: 'Les passagers sont prêts.', isCorrect: true },
      { sentence: 'The des-ti-NA-tion is Paris.', translation: '', isCorrect: false },
      { sentence: 'What is the dePARture time?', translation: "Quelle est l'heure de départ ?", isCorrect: true },
      { sentence: 'I lost my BOARDing pass.', translation: "J'ai perdu ma carte d'embarquement.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The des-ti-NA-tion is Paris.', correct: 'The destination is Paris.', explanation: 'Prononcez "des-ti-NÉ-chen" — l\'accent est sur "NÉ" et "-tion" = "-chen".' },
      { wrong: 'The jour-ney was long.', correct: 'The journey was long.', explanation: '"Journey" = "DJEUR-ni", pas "jour-ney" à la française ! Le "j" anglais = "dj".' },
    ],
  },
  conversation: [
    { speaker: 'Aïcha', role: 'A', text: 'What time is your flight?', translation: 'À quelle heure est ton vol ?' },
    { speaker: 'Youssef', role: 'B', text: 'The departure is at ten. I have my boarding pass.', translation: "Le départ est à dix heures. J'ai ma carte d'embarquement." },
    { speaker: 'Aïcha', role: 'A', text: 'How many passengers are on the flight?', translation: 'Combien de passagers y a-t-il sur le vol ?' },
    { speaker: 'Youssef', role: 'B', text: 'About a hundred. I travelled to the same destination last year.', translation: "Environ cent. J'ai voyagé à la même destination l'année dernière." },
    { speaker: 'Aïcha', role: 'A', text: 'Did you enjoy that journey?', translation: 'As-tu apprécié ce voyage ?' },
    { speaker: 'Youssef', role: 'B', text: 'Yes, it was wonderful! But my luggage was very heavy.', translation: "Oui, c'était merveilleux ! Mais mes bagages étaient très lourds." },
  ],
  conversationTitle: 'À l\'aéroport',
  pronunciation: [
    { word: 'Passenger', phonetic: '/ˈpæsəndʒər/', meaning: 'Passager', tip: 'L\'accent est sur "PAS" : "PA-se-ndjer". Le "e" du milieu est réduit.' },
    { word: 'Flight', phonetic: '/flaït/', meaning: 'Vol', tip: 'Prononcez "FLAÏT" — le "i" est long. Pas "flit".' },
    { word: 'Departure', phonetic: '/dɪˈpɑːrtʃər/', meaning: 'Départ', tip: 'L\'accent est sur "PAR" : "di-PAR-tcher". Le "ture" = "tcher".' },
    { word: 'Boarding', phonetic: '/ˈbɔːrdɪŋ/', meaning: 'Embarquement', tip: 'Prononcez "BOR-ding" — le "oa" = "o" long ouvert.' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 7: SHOPPING & CLOTHES (a2-l31 through a2-l35)
// ════════════════════════════════════════════════════════════════════════════════

// ─── a2-l31: Clothing Vocabulary (vocabulary) ────────────────────────────────
export const A2_L31: LessonContent = {
  vocab: [
    { english: 'Shirt', french: 'Chemise', phonetic: '/ʃɜːrt/', example: 'I need a new shirt for work.', exampleTranslation: "J'ai besoin d'une nouvelle chemise pour le travail." },
    { english: 'Dress', french: 'Robe', phonetic: '/dres/', example: 'She bought a beautiful dress.', exampleTranslation: 'Elle a acheté une belle robe.' },
    { english: 'Pants', french: 'Pantalon', phonetic: '/pænts/', example: 'These pants are too long.', exampleTranslation: 'Ce pantalon est trop long.' },
    { english: 'Jacket', french: 'Veste', phonetic: '/ˈdʒækɪt/', example: 'It is cold. Put on your jacket.', exampleTranslation: 'Il fait froid. Mets ta veste.' },
    { english: 'Shoes', french: 'Chaussures', phonetic: '/ʃuːz/', example: 'These shoes are very comfortable.', exampleTranslation: 'Ces chaussures sont très confortables.' },
  ],
  grammar: {
    title: 'Vocabulaire des vêtements — Singulier vs pluriel',
    explanation: 'ATTENTION : certains vêtements sont toujours au pluriel en anglais : "pants" (pantalon), "jeans" (jean), "shorts" (short), "trousers" (pantalon britannique). On dit "a pair of pants" (un pantalon), pas "a pant". "Clothes" (vêtements) est toujours au pluriel : "my clothes", pas "my cloth". "Cloth" = tissu (indénombrable). Pour la taille : "What size are you?" (Quelle est votre taille ?), "small" (S), "medium" (M), "large" (L), "extra large" (XL).',
    examples: [
      { sentence: 'I need a new pair of pants.', translation: "J'ai besoin d'un nouveau pantalon.", isCorrect: true },
      { sentence: 'She bought a pant.', translation: '', isCorrect: false },
      { sentence: 'These shoes are too small.', translation: 'Ces chaussures sont trop petites.', isCorrect: true },
      { sentence: 'What size is this jacket?', translation: 'Quelle est la taille de cette veste ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She bought a pant.', correct: 'She bought a pair of pants.', explanation: '"Pants" est toujours au pluriel. On dit "a pair of pants", pas "a pant".' },
      { wrong: 'My cloth is clean.', correct: 'My clothes are clean.', explanation: '"Clothes" (vêtements) est toujours au pluriel. "Cloth" = tissu.' },
    ],
  },
  conversation: [
    { speaker: 'Amara', role: 'A', text: 'I need new clothes for work. Where should I shop?', translation: "J'ai besoin de nouveaux vêtements pour le travail. Où devrais-je faire les magasins ?" },
    { speaker: 'Kofi', role: 'B', text: 'There is a good shop near the market. I bought a jacket there.', translation: "Il y a une bonne boutique près du marché. J'y ai acheté une veste." },
    { speaker: 'Amara', role: 'A', text: 'I also need a shirt and a pair of pants. What size do you wear?', translation: "J'ai aussi besoin d'une chemise et d'un pantalon. Quelle taille portes-tu ?" },
    { speaker: 'Kofi', role: 'B', text: 'I wear medium. And I need new shoes too.', translation: 'Je porte du M. Et j\'ai aussi besoin de nouvelles chaussures.' },
    { speaker: 'Amara', role: 'A', text: 'Look at this dress! It is beautiful.', translation: 'Regarde cette robe ! Elle est belle.' },
    { speaker: 'Kofi', role: 'B', text: 'It would look great on you! You should try it on.', translation: 'Elle t\'irait bien ! Tu devrais l\'essayer.' },
  ],
  conversationTitle: 'Faire les magasins',
  pronunciation: [
    { word: 'Shirt', phonetic: '/ʃɜːrt/', meaning: 'Chemise', tip: 'Prononcez "CHEURT" — le "ir" = "eur" comme dans "bird". Pas "chirte".' },
    { word: 'Dress', phonetic: '/dres/', meaning: 'Robe', tip: 'Prononcez "DRÉSS" — le "e" est ouvert. Pas "driss".' },
    { word: 'Jacket', phonetic: '/ˈdʒækɪt/', meaning: 'Veste', tip: 'Prononcez "DJA-kit" — le "a" est ouvert comme dans "cat".' },
    { word: 'Shoes', phonetic: '/ʃuːz/', meaning: 'Chaussures', tip: 'Prononcez "CHOUZ" — le "oo" est long et le "s" est sonore : "z".' },
  ],
}

// ─── a2-l32: Comparatives (grammar) ────────────────────────────────────
export const A2_L32: LessonContent = {
  vocab: [
    { english: 'Cheaper', french: 'Moins cher', phonetic: '/ˈtʃiːpər/', example: 'This shirt is cheaper than that one.', exampleTranslation: 'Cette chemise est moins chère que celle-là.' },
    { english: 'More expensive', french: 'Plus cher', phonetic: '/mɔːr ɪkˈspensɪv/', example: 'The jacket is more expensive than the dress.', exampleTranslation: 'La veste est plus chère que la robe.' },
    { english: 'Better', french: 'Meilleur(e)', phonetic: '/ˈbetər/', example: 'This brand is better than the other.', exampleTranslation: 'Cette marque est meilleure que l\'autre.' },
    { english: 'Worse', french: 'Pire', phonetic: '/wɜːrs/', example: 'The quality is worse than last year.', exampleTranslation: "La qualité est pire que l'année dernière." },
  ],
  grammar: {
    title: 'Les comparatifs — Cheaper, more expensive, better, worse',
    explanation: 'Pour comparer des produits : Adjectifs courts (1 syllabe) + "-er + than" : "cheaper than" (moins cher que), "smaller than" (plus petit que), "bigger than" (plus grand que). Adjectifs longs (2+ syllabes) + "more + than" : "more expensive than" (plus cher que), "more comfortable than" (plus confortable que). IRRÉGULIERS : good → better than (meilleur que), bad → worse than (pire que). Pour dire "aussi...que" : "as + adjectif + as" : "as cheap as" (aussi cher que).',
    examples: [
      { sentence: 'This shirt is cheaper than that one.', translation: 'Cette chemise est moins chère que celle-là.', isCorrect: true },
      { sentence: 'This is more cheaper than that.', translation: '', isCorrect: false },
      { sentence: 'The quality is better than I expected.', translation: 'La qualité est meilleure que ce que je m\'attendais.', isCorrect: true },
      { sentence: 'This brand is as expensive as the other.', translation: 'Cette marque est aussi chère que l\'autre.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'This is more cheaper than that.', correct: 'This is cheaper than that.', explanation: 'On n\'utilise PAS "more" ET "-er" en même temps : "cheaper", pas "more cheaper".' },
      { wrong: 'This is gooder than that.', correct: 'This is better than that.', explanation: '"Good" a un comparatif irrégulier : "better", pas "gooder".' },
    ],
  },
  conversation: [
    { speaker: 'Mariama', role: 'A', text: 'Look at these two jackets. Which one do you prefer?', translation: 'Regarde ces deux vestes. Laquelle préfères-tu ?' },
    { speaker: 'Oumar', role: 'B', text: 'The black one is cheaper, but the blue one is better quality.', translation: "La noire est moins chère, mais la bleue est de meilleure qualité." },
    { speaker: 'Mariama', role: 'A', text: 'Is the blue one more expensive?', translation: 'La bleue est-elle plus chère ?' },
    { speaker: 'Oumar', role: 'B', text: 'Yes, but it is more comfortable. The black one is worse quality.', translation: 'Oui, mais elle est plus confortable. La noire est de moins bonne qualité.' },
    { speaker: 'Mariama', role: 'A', text: 'You are right. Sometimes cheaper is not better!', translation: 'Tu as raison. Parfois moins cher n\'est pas meilleur !' },
    { speaker: 'Oumar', role: 'B', text: 'Exactly! I prefer quality over price.', translation: "Exactement ! Je préfère la qualité au prix." },
  ],
  conversationTitle: 'Comparer des produits',
  pronunciation: [
    { word: 'Cheaper', phonetic: '/ˈtʃiːpər/', meaning: 'Moins cher', tip: 'Prononcez "TCHII-per" — le "ee" est long et l\'accent est sur "CHEAP".' },
    { word: 'Expensive', phonetic: '/ɪkˈspensɪv/', meaning: 'Cher', tip: 'L\'accent est sur "PEN" : "iks-PEN-siv". Pas "eks-pen-SIV".' },
    { word: 'Better', phonetic: '/ˈbetər/', meaning: 'Meilleur', tip: 'Prononcez "BÉ-ter" — le "e" est ouvert comme dans "bed".' },
    { word: 'Worse', phonetic: '/wɜːrs/', meaning: 'Pire', tip: 'Prononcez "WEURS" — le "or" = "eur" comme dans "bird".' },
  ],
}

// ─── a2-l33: Trying Things On (conversation) ────────────────────────────
export const A2_L33: LessonContent = {
  vocab: [
    { english: 'Try on', french: 'Essayer (vêtement)', phonetic: '/traɪ ɒn/', example: 'Can I try this on?', exampleTranslation: 'Puis-je essayer ceci ?' },
    { english: 'Fitting room', french: 'Cabine d\'essayage', phonetic: '/ˈfɪtɪŋ ruːm/', example: 'Where is the fitting room?', exampleTranslation: "Où est la cabine d'essayage ?" },
    { english: 'Fit', french: 'Aller (vêtement)', phonetic: '/fɪt/', example: 'This dress fits perfectly.', exampleTranslation: 'Cette robe va parfaitement.' },
    { english: 'Tight', french: 'Serré / Trop petit', phonetic: '/taɪt/', example: 'These shoes are too tight.', exampleTranslation: 'Ces chaussures sont trop serrées.' },
  ],
  grammar: {
    title: 'Essayer des vêtements — Can I try this on? / It fits / It doesn\'t fit',
    explanation: 'Pour demander à essayer : "Can I try this on?" (Puis-je essayer ceci ?), "Where is the fitting room?" (Où est la cabine d\'essayage ?). Pour dire qu\'un vêtement va bien : "It fits" (Ça va bien / Ça est à la bonne taille), "It looks good on you" (Ça te va bien). Pour dire qu\'il ne va pas : "It doesn\'t fit" (Ça ne va pas), "It is too tight" (C\'est trop serré), "It is too loose" (C\'est trop large). "Fit" = la taille, "suit" = le style. "This fits" (la taille est bonne), "This suits you" (le style te va).',
    examples: [
      { sentence: 'Can I try this on, please?', translation: "Puis-je essayer ceci, s'il vous plaît ?", isCorrect: true },
      { sentence: 'This dress fits me not.', translation: '', isCorrect: false },
      { sentence: 'It is too tight. Do you have a larger size?', translation: "C'est trop serré. Avez-vous une taille au-dessus ?", isCorrect: true },
      { sentence: 'This colour really suits you!', translation: 'Cette couleur te va vraiment !', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'This dress fits me not.', correct: 'This dress doesn\'t fit me.', explanation: 'La négation en anglais utilise "doesn\'t" + verbe : "doesn\'t fit", pas "fits me not".' },
      { wrong: 'Can I try it?', correct: 'Can I try it on?', explanation: 'Pour les vêtements, on dit "try ON" : "try it on", pas juste "try it".' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'Excuse me, can I try this dress on?', translation: "Excusez-moi, puis-je essayer cette robe ?" },
    { speaker: 'Shop assistant', role: 'B', text: 'Of course! The fitting room is over there.', translation: "Bien sûr ! La cabine d'essayage est par là." },
    { speaker: 'Fatou', role: 'A', text: 'It is too tight. Do you have a medium?', translation: "C'est trop serré. Avez-vous du M ?" },
    { speaker: 'Shop assistant', role: 'B', text: 'Yes, here you go. How does it fit?', translation: "Oui, tenez. Comment ça va ?" },
    { speaker: 'Fatou', role: 'A', text: 'This one fits perfectly! It suits me, doesn\'t it?', translation: "Celui-ci va parfaitement ! Il me va bien, non ?" },
    { speaker: 'Shop assistant', role: 'B', text: 'It looks wonderful on you! That colour really suits you.', translation: "C'est magnifique sur vous ! Cette couleur vous va vraiment." },
  ],
  conversationTitle: 'Essayer des vêtements en boutique',
  pronunciation: [
    { word: 'Try', phonetic: '/traɪ ɒn/', meaning: 'Essayer', tip: 'Expression "try on" = essayer (vêtement). Prononcez "TRAÏ-on" — le "i" est long dans "try".' },
    { word: 'Fitting', phonetic: '/ˈfɪtɪŋ ruːm/', meaning: "Cabine d'essayage", tip: 'Expression "fitting room" = cabine d\'essayage. "Fitting" = "FI-ting" et "room" = "roum" avec un "oo" long.' },
    { word: 'Fit', phonetic: '/fɪt/', meaning: 'Aller (taille)', tip: 'Prononcez "FIT" — le "i" est court. Pas "fitt-e".' },
    { word: 'Tight', phonetic: '/taɪt/', meaning: 'Serré', tip: 'Prononcez "TAÏT" — le "igh" = "aï". Pas "titt".' },
  ],
}

// ─── a2-l34: Can / Could (Requests) (grammar) ────────────────────────────
export const A2_L34: LessonContent = {
  vocab: [
    { english: 'Can I', french: 'Puis-je', phonetic: '/kæn aɪ/', example: 'Can I help you?', exampleTranslation: 'Puis-je vous aider ?' },
    { english: 'Could you', french: 'Pourriez-vous', phonetic: '/kʊd juː/', example: 'Could you show me the shoes?', exampleTranslation: 'Pourriez-vous me montrer les chaussures ?' },
    { english: 'May I', french: 'Puis-je (très poli)', phonetic: '/meɪ aɪ/', example: 'May I try this on?', exampleTranslation: 'Puis-je essayer ceci ?' },
    { english: 'Would you', french: 'Voudriez-vous', phonetic: '/wʊd juː/', example: 'Would you like a bag?', exampleTranslation: 'Voudriez-vous un sac ?' },
  ],
  grammar: {
    title: 'Les demandes polies — Can I / Could you / May I / Would you',
    explanation: 'Pour faire des demandes polies au magasin : "Can I...?" (Puis-je... ? — informel), "Could you...?" (Pourriez-vous... ? — poli), "May I...?" (Puis-je... ? — très poli/formel), "Would you like...?" (Voudriez-vous... ? — offre polie). Ordre de politesse : Can < Could < May. "Can I try this on?" (informel), "Could I try this on?" (poli), "May I try this on?" (très poli). Pour répondre : "Of course" / "Certainly" / "Sure" (oui), "I\'m sorry, but..." (non poli).',
    examples: [
      { sentence: 'Could you show me the medium size?', translation: 'Pourriez-vous me montrer la taille M ?', isCorrect: true },
      { sentence: 'Can you showing me the shoes?', translation: '', isCorrect: false },
      { sentence: 'May I use the fitting room?', translation: "Puis-je utiliser la cabine d'essayage ?", isCorrect: true },
      { sentence: 'Would you like a bag for your purchase?', translation: 'Voudriez-vous un sac pour votre achat ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Can you showing me the shoes?', correct: 'Can you show me the shoes?', explanation: 'Après "can/could", on utilise le verbe de base : "show", pas "showing".' },
      { wrong: 'Can you to help me?', correct: 'Can you help me?', explanation: 'Après "can/could/may", on ne met PAS "to" devant le verbe : "help", pas "to help".' },
    ],
  },
  conversation: [
    { speaker: 'Aïcha', role: 'A', text: 'Could you help me, please? I am looking for a jacket.', translation: 'Pourriez-vous m\'aider, s\'il vous plaît ? Je cherche une veste.' },
    { speaker: 'Shop assistant', role: 'B', text: 'Of course! What size do you wear?', translation: 'Bien sûr ! Quelle taille portez-vous ?' },
    { speaker: 'Aïcha', role: 'A', text: 'I wear a medium. May I try this one on?', translation: 'Je porte du M. Puis-je essayer celle-ci ?' },
    { speaker: 'Shop assistant', role: 'B', text: 'Certainly! Would you like me to bring another colour?', translation: 'Bien sûr ! Voudriez-vous que j\'apporte une autre couleur ?' },
    { speaker: 'Aïcha', role: 'A', text: 'Yes, could you bring the blue one too?', translation: 'Oui, pourriez-vous apporter la bleue aussi ?' },
    { speaker: 'Shop assistant', role: 'B', text: 'Right away! Can I get you anything else?', translation: "Tout de suite ! Puis-je vous apporter autre chose ?" },
  ],
  conversationTitle: 'Demandes polies au magasin',
  pronunciation: [
    { word: 'Could', phonetic: '/kʊd juː/', meaning: 'Pourriez-vous', tip: 'Expression "could you" = pourriez-vous. Prononcez "KOUD-you" — le "l" est SILENCIEUX dans "could" ! Pas "kou-lid".' },
    { word: 'May', phonetic: '/meɪ aɪ/', meaning: 'Puis-je', tip: 'Expression "may I" = puis-je. Prononcez "MÉ-AÏ" — le "ay" est long et le "I" aussi.' },
    { word: 'Would', phonetic: '/wʊd juː/', meaning: 'Voudriez-vous', tip: 'Expression "would you" = voudriez-vous. Prononcez "WOUD-you" — souvent contracté en "WOULD-ja" dans la parole rapide.' },
    { word: 'Certainly', phonetic: '/ˈsɜːrtnli/', meaning: 'Certainement', tip: 'L\'accent est sur "CER" : "SER-ten-li". Le "ain" français n\'existe pas.' },
  ],
}

// ─── a2-l35: Shopping Sounds (pronunciation) ──────────────────────────────
export const A2_L35: LessonContent = {
  vocab: [
    { english: 'Bargain', french: 'Bonne affaire', phonetic: '/ˈbɑːrɡɪn/', example: 'This is a real bargain!', exampleTranslation: "C'est une vraie bonne affaire !" },
    { english: 'Discount', french: 'Réduction', phonetic: '/ˈdɪskaʊnt/', example: 'Is there a discount on this?', exampleTranslation: 'Y a-t-il une réduction sur ceci ?' },
    { english: 'Receipt', french: 'Reçu', phonetic: '/rɪˈsiːt/', example: 'Can I have the receipt?', exampleTranslation: 'Puis-je avoir le reçu ?' },
    { english: 'Refund', french: 'Remboursement', phonetic: '/ˈriːfʌnd/', example: 'I would like a refund, please.', exampleTranslation: "Je voudrais un remboursement, s'il vous plaît." },
  ],
  grammar: {
    title: 'Prononciation des mots du shopping — Pièges',
    explanation: 'Les mots du shopping ont des pièges : "bargain" = "BAR-gin" (pas "bar-guin"), "discount" = "DIS-count" (accent sur DIS), "receipt" = "ri-SIT" (le "p" est SILENCIEUX !), "refund" = "RI-fund" (accent sur RE). Le mot "clothes" se prononce "KLOZ" (un seul son, le "e" disparaît), pas "klo-thez".',
    examples: [
      { sentence: 'This is a real BARgain!', translation: "C'est une vraie bonne affaire !", isCorrect: true },
      { sentence: 'Can I have the re-SEET?', translation: '', isCorrect: false },
      { sentence: 'Is there a DIScount on this item?', translation: 'Y a-t-il une réduction sur cet article ?', isCorrect: true },
      { sentence: 'I would like a REfund.', translation: 'Je voudrais un remboursement.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Can I have the re-SEET?', correct: 'Can I have the receipt?', explanation: '"Receipt" = "ri-SIT" — le "p" est SILENCIEUX ! Pas "re-cepit" ni "re-seet".' },
      { wrong: 'I bought new clo-thez.', correct: 'I bought new clothes.', explanation: '"Clothes" = "KLOZ" — un seul son fluide. Pas "klo-thez".' },
    ],
  },
  conversation: [
    { speaker: 'Mariama', role: 'A', text: 'Look! This jacket is half price. What a bargain!', translation: "Regarde ! Cette veste est à moitié prix. Quelle bonne affaire !" },
    { speaker: 'Idrissa', role: 'B', text: 'That is a great discount! Can I have a receipt?', translation: "C'est une belle réduction ! Puis-je avoir un reçu ?" },
    { speaker: 'Mariama', role: 'A', text: 'Of course. And if it doesn\'t fit, you can get a refund.', translation: "Bien sûr. Et si ça ne va pas, vous pouvez obtenir un remboursement." },
    { speaker: 'Idrissa', role: 'B', text: 'That\'s good to know. I love shopping when there are sales!', translation: "C'est bon à savoir. J'adore faire les magasins quand il y a des soldes !" },
    { speaker: 'Mariama', role: 'A', text: 'Me too! These shoes were a bargain too.', translation: "Moi aussi ! Ces chaussures étaient aussi une bonne affaire." },
    { speaker: 'Idrissa', role: 'B', text: 'Shopping is so much fun when you find good deals.', translation: "Faire les magasins est tellement amusant quand on trouve de bonnes affaires." },
  ],
  conversationTitle: 'Bonnes affaires et réductions',
  pronunciation: [
    { word: 'Bargain', phonetic: '/ˈbɑːrɡɪn/', meaning: 'Bonne affaire', tip: 'L\'accent est sur "BAR" : "BAR-gin". Le "ai" du milieu se réduit. Pas "bar-guin".' },
    { word: 'Discount', phonetic: '/ˈdɪskaʊnt/', meaning: 'Réduction', tip: 'L\'accent est sur "DIS" : "DIS-kaount". Pas "dis-COUNT".' },
    { word: 'Receipt', phonetic: '/rɪˈsiːt/', meaning: 'Reçu', tip: 'Le "p" est SILENCIEUX ! "ri-SIT". Pas "re-ceipt" !' },
    { word: 'Refund', phonetic: '/ˈriːfʌnd/', meaning: 'Remboursement', tip: 'L\'accent est sur "RE" : "RI-fund". Le "u" est ouvert comme dans "bus".' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 8: WORK & PROFESSIONS (a2-l36 through a2-l40)
// ════════════════════════════════════════════════════════════════════════════════

// ─── a2-l36: Job Vocabulary (vocabulary) ─────────────────────────────────────
export const A2_L36: LessonContent = {
  vocab: [
    { english: 'Engineer', french: 'Ingénieur', phonetic: '/ˌendʒɪˈnɪər/', example: 'My brother is an engineer.', exampleTranslation: 'Mon frère est ingénieur.' },
    { english: 'Mechanic', french: 'Mécanicien', phonetic: '/məˈkænɪk/', example: 'The mechanic fixed my car.', exampleTranslation: 'Le mécanicien a réparé ma voiture.' },
    { english: 'Accountant', french: 'Comptable', phonetic: '/əˈkaʊntənt/', example: 'She works as an accountant.', exampleTranslation: 'Elle travaille comme comptable.' },
    { english: 'Journalist', french: 'Journaliste', phonetic: '/ˈdʒɜːrnəlɪst/', example: 'He wants to be a journalist.', exampleTranslation: 'Il veut être journaliste.' },
    { english: 'Farmer', french: 'Agriculteur', phonetic: '/ˈfɑːrmər/', example: 'My father is a farmer.', exampleTranslation: 'Mon père est agriculteur.' },
  ],
  grammar: {
    title: 'Parler de son métier — "I work as..." / "I am a..."',
    explanation: 'Pour parler de votre métier, deux structures : "I am a + métier" (Je suis...) ou "I work as a + métier" (Je travaille comme...). Exemples : "I am a teacher" = "I work as a teacher". ATTENTION : on utilise l\'article "a/an" devant le métier : "She is a doctor", PAS "She is doctor". Avec les voyelles : "He is an engineer", pas "a engineer".',
    examples: [
      { sentence: 'She works as an engineer.', translation: 'Elle travaille comme ingénieure.', isCorrect: true },
      { sentence: 'He is doctor.', translation: '', isCorrect: false },
      { sentence: 'I am a mechanic at the garage.', translation: 'Je suis mécanicien au garage.', isCorrect: true },
      { sentence: 'They work as farmers.', translation: 'Ils travaillent comme agriculteurs.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'He is doctor.', correct: 'He is a doctor.', explanation: 'En anglais, on garde l\'article "a" devant le métier : "a doctor", "a teacher". Ne l\'oubliez pas !' },
      { wrong: 'She is a engineer.', correct: 'She is an engineer.', explanation: 'Devant une voyelle (engineer, accountant, architect), on utilise "an" pas "a".' },
    ],
  },
  conversation: [
    { speaker: 'Oumar', role: 'A', text: 'What do you do for a living, Amina?', translation: 'Que fais-tu dans la vie, Amina ?' },
    { speaker: 'Amina', role: 'B', text: 'I work as an accountant at a bank. And you?', translation: 'Je travaille comme comptable dans une banque. Et toi ?' },
    { speaker: 'Oumar', role: 'A', text: 'I am a mechanic. I fix cars and buses.', translation: 'Je suis mécanicien. Je répare les voitures et les bus.' },
    { speaker: 'Amina', role: 'B', text: 'That\'s important work! My father is a farmer.', translation: 'C\'est un travail important ! Mon père est agriculteur.' },
    { speaker: 'Oumar', role: 'A', text: 'Really? My sister is a journalist. She writes for a newspaper.', translation: 'Vraiment ? Ma sœur est journaliste. Elle écrit pour un journal.' },
    { speaker: 'Amina', role: 'B', text: 'How interesting! We have so many different professions in our families.', translation: 'Comme c\'est intéressant ! Nous avons tant de professions différentes dans nos familles.' },
  ],
  conversationTitle: 'Parler de son métier',
  pronunciation: [
    { word: 'Engineer', phonetic: '/ˌendʒɪˈnɪər/', meaning: 'Ingénieur', tip: 'L\'accent est sur la dernière syllabe : "en-dji-NIER". Pas "EN-dji-nier".' },
    { word: 'Mechanic', phonetic: '/məˈkænɪk/', meaning: 'Mécanicien', tip: 'L\'accent est sur "CAN" : "me-KA-nik". Le "e" initial est réduit.' },
    { word: 'Accountant', phonetic: '/əˈkaʊntənt/', meaning: 'Comptable', tip: 'L\'accent est sur "COUNT" : "e-KAOUN-tent". Le premier "a" est réduit.' },
    { word: 'Journalist', phonetic: '/ˈdʒɜːrnəlɪst/', meaning: 'Journaliste', tip: 'Prononcez "DJEUR-ne-list" — le "j" = "dj" et l\'accent est sur "JUR".' },
  ],
}

// ─── a2-l37: Future with Will & Going to (grammar) ──────────────────────────
export const A2_L37: LessonContent = {
  vocab: [
    { english: 'Will', french: 'Aller (futur spontané)', phonetic: '/wɪl/', example: 'I will help you with that.', exampleTranslation: "Je vais t'aider avec ça." },
    { english: 'Going to', french: 'Aller (futur planifié)', phonetic: '/ˈɡoʊɪŋ tə/', example: 'I am going to start a new job.', exampleTranslation: 'Je vais commencer un nouveau travail.' },
    { english: 'Plan', french: 'Plan', phonetic: '/plæn/', example: 'What are your plans for the future?', exampleTranslation: 'Quels sont tes projets pour l\'avenir ?' },
    { english: 'Career', french: 'Carrière', phonetic: '/kəˈrɪr/', example: 'She wants a career in medicine.', exampleTranslation: 'Elle veut une carrière en médecine.' },
  ],
  grammar: {
    title: 'Le futur — Will vs Going to',
    explanation: 'DEUX FORMES DE FUTUR : 1) "Will + verbe" = décision spontanée, prédiction sans preuve : "I will help you" (Je vais t\'aider — je viens de décider), "It will rain tomorrow" (prédiction). 2) "Am/is/are going to + verbe" = plan / intention / prédiction avec preuves : "I am going to study engineering" (J\'ai l\'intention d\'étudier), "It is going to rain" (je vois les nuages). CONTRACTIONS : "I will" = "I\'ll", "she will" = "she\'ll". NÉGATIF : "won\'t" (will not), "isn\'t going to".',
    examples: [
      { sentence: 'I am going to start a new job next month.', translation: "Je vais commencer un nouveau travail le mois prochain.", isCorrect: true },
      { sentence: 'I will to help you.', translation: '', isCorrect: false },
      { sentence: 'She\'ll be a great engineer one day.', translation: 'Elle sera une grande ingénieure un jour.', isCorrect: true },
      { sentence: 'I\'m going to apply for the manager position.', translation: 'Je vais postuler pour le poste de directeur.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I will to help you.', correct: 'I will help you.', explanation: 'Après "will", on utilise le verbe SANS "to" : "will help", pas "will to help".' },
      { wrong: 'I will going to study.', correct: 'I am going to study.', explanation: 'On n\'utilise PAS "will" et "going to" ensemble. Choisissez-en un seul.' },
    ],
  },
  conversation: [
    { speaker: 'Amina', role: 'A', text: 'What are you going to do after school?', translation: 'Que vas-tu faire après l\'école ?' },
    { speaker: 'Kofi', role: 'B', text: 'I am going to study engineering. I want a career in technology.', translation: "Je vais étudier l'ingénierie. Je veux une carrière dans la technologie." },
    { speaker: 'Amina', role: 'A', text: 'That sounds great! I think you will be very successful.', translation: "Ça a l'air génial ! Je pense que tu seras très performant." },
    { speaker: 'Kofi', role: 'B', text: 'What about you? What are your plans?', translation: 'Et toi ? Quels sont tes projets ?' },
    { speaker: 'Amina', role: 'A', text: 'I will apply for a job at the bank. Or maybe I\'ll become a teacher.', translation: "Je vais postuler pour un travail à la banque. Ou peut-être que je deviendrai professeur." },
    { speaker: 'Kofi', role: 'B', text: 'You will be great at either one! I\'ll help you prepare your CV.', translation: "Tu seras brillante dans l'un ou l'autre ! Je t'aiderai à préparer ton CV." },
  ],
  conversationTitle: 'Projets d\'avenir professionnel',
  pronunciation: [
    { word: 'Will', phonetic: '/wɪl/', meaning: 'Aller (futur)', tip: 'Prononcez "OUIL" — le "w" initial requires lèvres arrondies. Contraction : "I\'ll" = "aïl".' },
    { word: 'Career', phonetic: '/kəˈrɪr/', meaning: 'Carrière', tip: 'L\'accent est sur "REE" : "ke-RIER". Pas "ka-RIER".' },
    { word: 'Plan', phonetic: '/plæn/', meaning: 'Plan', tip: 'Le "a" est ouvert comme dans "cat" : "PLANN". Pas "plèn".' },
    { word: 'Won\'t', phonetic: '/woʊnt/', meaning: 'Ne...pas (futur)', tip: 'Prononcez "OUON-T" — le "o" est long. Ne confondez pas avec "want" = "ouannt".' },
  ],
}

// ─── a2-l38: Job Interview Basics (conversation) ─────────────────────────────
export const A2_L38: LessonContent = {
  vocab: [
    { english: 'Experience', french: 'Expérience', phonetic: '/ɪkˈspɪəriəns/', example: 'I have three years of experience.', exampleTranslation: "J'ai trois ans d'expérience." },
    { english: 'Qualification', french: 'Qualification', phonetic: '/ˌkwɒlɪfɪˈkeɪʃən/', example: 'What qualifications do you have?', exampleTranslation: 'Quelles qualifications avez-vous ?' },
    { english: 'Salary', french: 'Salaire', phonetic: '/ˈsæləri/', example: 'The salary is very good.', exampleTranslation: 'Le salaire est très bon.' },
    { english: 'Position', french: 'Poste', phonetic: '/pəˈzɪʃən/', example: 'I am applying for the position.', exampleTranslation: 'Je postule pour le poste.' },
    { english: 'Interview', french: 'Entretien', phonetic: '/ˈɪntərvjuː/', example: 'The interview is on Monday.', exampleTranslation: "L'entretien est lundi." },
  ],
  grammar: {
    title: 'Se présenter lors d\'un entretien — "I have..." / "I can..."',
    explanation: 'Lors d\'un entretien d\'embauche, utilisez : "I have + years of experience" (J\'ai X années d\'expérience), "I can + verbe" (Je sais/peux faire), "I worked as + métier" (J\'ai travaillé comme), "I am good at + -ing" (Je suis bon en). Pour les questions : "What experience do you have?" (Quelle expérience avez-vous ?), "Why do you want this job?" (Pourquoi voulez-vous ce travail ?).',
    examples: [
      { sentence: 'I have five years of experience in accounting.', translation: "J'ai cinq ans d'expérience en comptabilité.", isCorrect: true },
      { sentence: 'I have 5 years experience.', translation: '', isCorrect: false },
      { sentence: 'I am good at working with people.', translation: 'Je suis bon pour travailler avec les gens.', isCorrect: true },
      { sentence: 'I can speak three languages.', translation: 'Je sais parler trois langues.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I have 5 years experience.', correct: 'I have five years of experience. / I have 5 years\' experience.', explanation: 'On dit "years OF experience" avec "of", ou "years\' experience" avec l\'apostrophe.' },
      { wrong: 'I am good in computers.', correct: 'I am good at computers.', explanation: 'On dit "good AT" pas "good in". "Good at" = doué pour / bon en.' },
    ],
  },
  conversation: [
    { speaker: 'Mariama', role: 'A', text: 'Good morning, Youssef. Please sit down. Tell me about yourself.', translation: 'Bonjour, Youssef. Asseyez-vous. Parlez-moi de vous.' },
    { speaker: 'Youssef', role: 'B', text: 'I am a mechanic. I have four years of experience.', translation: "Je suis mécanicien. J'ai quatre ans d'expérience." },
    { speaker: 'Mariama', role: 'A', text: 'That\'s great. Why do you want this position?', translation: "C'est bien. Pourquoi voulez-vous ce poste ?" },
    { speaker: 'Youssef', role: 'B', text: 'I am good at fixing engines and I can work in a team.', translation: "Je suis bon pour réparer les moteurs et je peux travailler en équipe." },
    { speaker: 'Mariama', role: 'A', text: 'Can you start next Monday?', translation: 'Pouvez-vous commencer lundi prochain ?' },
    { speaker: 'Youssef', role: 'B', text: 'Yes, I can! Thank you for this opportunity.', translation: 'Oui, je le peux ! Merci pour cette opportunité.' },
  ],
  conversationTitle: 'Un entretien d\'embauche',
  pronunciation: [
    { word: 'Experience', phonetic: '/ɪkˈspɪəriəns/', meaning: 'Expérience', tip: 'L\'accent est sur "PEE" : "iks-PIE-ri-ens". Pas "eks-pe-ri-ANS".' },
    { word: 'Salary', phonetic: '/ˈsæləri/', meaning: 'Salaire', tip: 'L\'accent est sur "SA" : "SA-le-ri". Le "a" est ouvert comme dans "cat".' },
    { word: 'Interview', phonetic: '/ˈɪntərvjuː/', meaning: 'Entretien', tip: 'L\'accent est sur "IN" : "IN-ter-viou". Le "v" est doux et le "iew" = "viou".' },
    { word: 'Position', phonetic: '/pəˈzɪʃən/', meaning: 'Poste', tip: 'L\'accent est sur "ZI" : "pe-ZI-chen". Le "o" final est réduit.' },
  ],
}

// ─── a2-l39: Workplace English (vocabulary) ──────────────────────────────────
export const A2_L39: LessonContent = {
  vocab: [
    { english: 'Meeting', french: 'Réunion', phonetic: '/ˈmiːtɪŋ/', example: 'We have a meeting at ten.', exampleTranslation: 'Nous avons une réunion à dix heures.' },
    { english: 'Deadline', french: 'Date limite', phonetic: '/ˈdedlaɪn/', example: 'The deadline is next Friday.', exampleTranslation: 'La date limite est vendredi prochain.' },
    { english: 'Colleague', french: 'Collègue', phonetic: '/ˈkɒliːɡ/', example: 'My colleague is very helpful.', exampleTranslation: 'Mon collègue est très serviable.' },
    { english: 'Project', french: 'Projet', phonetic: '/ˈprɒdʒekt/', example: 'Our project is due next month.', exampleTranslation: 'Notre projet est dû le mois prochain.' },
    { english: 'Overtime', french: 'Heures supplémentaires', phonetic: '/ˈoʊvərtaɪm/', example: 'I worked overtime last night.', exampleTranslation: "J'ai fait des heures supplémentaires hier soir." },
  ],
  grammar: {
    title: 'Phrases utiles au bureau',
    explanation: 'Phrases essentielles au travail : "I need to..." (Je dois...), "Could you...?" (Pourriez-vous...?), "I\'ll..." (Je vais... — décision), "Let\'s..." (On devrait...). Exemples : "I need to finish this report", "Could you send me the file?", "I\'ll call you later", "Let\'s have a meeting". Pour demander de l\'aide : "Can you help me with...?" (Pouvez-vous m\'aider avec...?).',
    examples: [
      { sentence: 'I need to finish this before the deadline.', translation: 'Je dois terminer ceci avant la date limite.', isCorrect: true },
      { sentence: 'Could you send me the report?', translation: 'Pourriez-vous m\'envoyer le rapport ?', isCorrect: true },
      { sentence: 'I need finish this now.', translation: '', isCorrect: false },
      { sentence: 'Let\'s schedule a meeting for tomorrow.', translation: 'Programmons une réunion pour demain.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I need finish this now.', correct: 'I need to finish this now.', explanation: 'Après "need", on utilise TOUJOURS "to" + verbe : "need to finish", pas "need finish".' },
      { wrong: 'Can you send the file for me please?', correct: 'Could you send me the file, please?', explanation: '"Could you" est plus poli que "Can you" pour les demandes au bureau.' },
    ],
  },
  conversation: [
    { speaker: 'Kofi', role: 'A', text: 'Good morning, Amina. Do we have a meeting today?', translation: 'Bonjour, Amina. Avons-nous une réunion aujourd\'hui ?' },
    { speaker: 'Amina', role: 'B', text: 'Yes, at two o\'clock. I need to prepare the documents.', translation: "Oui, à deux heures. Je dois préparer les documents." },
    { speaker: 'Kofi', role: 'A', text: 'Could you send me the project details, please?', translation: "Pourriez-vous m'envoyer les détails du projet, s'il vous plaît ?" },
    { speaker: 'Amina', role: 'B', text: 'Of course! The deadline for the project is next Friday.', translation: "Bien sûr ! La date limite du projet est vendredi prochain." },
    { speaker: 'Kofi', role: 'A', text: 'I\'ll work overtime this week to finish it.', translation: "Je ferai des heures supplémentaires cette semaine pour le terminer." },
    { speaker: 'Amina', role: 'B', text: 'Thank you, Kofi. Let\'s ask our colleague Oumar for help too.', translation: "Merci, Kofi. Demandons aussi de l'aide à notre collègue Oumar." },
  ],
  conversationTitle: 'Au bureau',
  pronunciation: [
    { word: 'Meeting', phonetic: '/ˈmiːtɪŋ/', meaning: 'Réunion', tip: 'Prononcez "MII-ting" — le "ee" est long. Pas "mé-ting".' },
    { word: 'Deadline', phonetic: '/ˈdedlaɪn/', meaning: 'Date limite', tip: 'Prononcez "DED-laïn" — l\'accent est sur "DEAD".' },
    { word: 'Colleague', phonetic: '/ˈkɒliːɡ/', meaning: 'Collègue', tip: 'Prononcez "KO-liig" — le "ea" final = "i" long. Pas "ko-lè-gue".' },
    { word: 'Project', phonetic: '/ˈprɒdʒekt/', meaning: 'Projet', tip: 'L\'accent est sur "PRO" : "PRO-djèkt". En verbe, l\'accent change : "pro-DJÈKT".' },
  ],
}

// ─── a2-l40: Work Sounds (pronunciation) ─────────────────────────────────────
export const A2_L40: LessonContent = {
  vocab: [
    { english: 'Manager', french: 'Directeur/Manager', phonetic: '/ˈmænɪdʒər/', example: 'The manager is in a meeting.', exampleTranslation: 'Le directeur est en réunion.' },
    { english: 'Secretary', french: 'Secrétaire', phonetic: '/ˈsekrəteri/', example: 'The secretary answered the phone.', exampleTranslation: 'La secrétaire a répondu au téléphone.' },
    { english: 'Employee', french: 'Employé(e)', phonetic: '/ɪmˈplɔɪiː/', example: 'The company has fifty employees.', exampleTranslation: "L'entreprise a cinquante employés." },
    { english: 'Customer', french: 'Client(e)', phonetic: '/ˈkʌstəmər/', example: 'The customer is always right.', exampleTranslation: 'Le client a toujours raison.' },
  ],
  grammar: {
    title: 'Prononciation des noms de métiers',
    explanation: 'Les noms de métiers en anglais ont souvent l\'accent sur une syllabe spécifique qu\'on n\'attend pas en français : "MAN-a-ger" (pas "ma-NA-ger"), "SEC-re-ta-ry" (pas "se-kre-TA-ry"), "em-PLOY-ee" (pas "EM-ploy-ee"). Connaître l\'accent tonique correct est essentiel pour être compris au travail.',
    examples: [
      { sentence: 'The MANager is not here today.', translation: "Le directeur n'est pas là aujourd'hui.", isCorrect: true },
      { sentence: 'She is the maNAGer of the company.', translation: '', isCorrect: false },
      { sentence: 'The emPLOYees are working hard.', translation: 'Les employés travaillent dur.', isCorrect: true },
      { sentence: 'The CUSomer wants a refund.', translation: 'Le client veut un remboursement.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She is the maNAGer of the company.', correct: 'She is the MANager of the company.', explanation: 'L\'accent est sur "MAN" : "MAN-a-ger". C\'est différent du français "ma-na-GER" !' },
      { wrong: 'The EMployees are happy.', correct: 'The emPLOYees are happy.', explanation: 'L\'accent est sur "PLOY" : "em-PLOY-ees", pas "EM-ployees".' },
    ],
  },
  conversation: [
    { speaker: 'Amara', role: 'A', text: 'Is the manager available? I need to speak with him.', translation: 'Le directeur est-il disponible ? J\'ai besoin de lui parler.' },
    { speaker: 'Fatou', role: 'B', text: 'I\'m sorry, he is in a meeting. The secretary can help you.', translation: "Je suis désolée, il est en réunion. La secrétaire peut vous aider." },
    { speaker: 'Amara', role: 'A', text: 'Thank you. I also need to talk to an employee about my account.', translation: 'Merci. Je dois aussi parler à un employé de mon compte.' },
    { speaker: 'Fatou', role: 'B', text: 'Kofi can help you. He is very good with customers.', translation: 'Kofi peut vous aider. Il est très bon avec les clients.' },
    { speaker: 'Amara', role: 'A', text: 'Perfect! I had a problem last time, but your employees were helpful.', translation: "Parfait ! J'ai eu un problème la dernière fois, mais vos employés ont été serviables." },
    { speaker: 'Fatou', role: 'B', text: 'We always try our best! Is there anything else I can help with?', translation: 'Nous faisons toujours de notre mieux ! Y a-t-il autre chose que je puisse vous aider ?' },
  ],
  conversationTitle: 'Au bureau — Directions et demandes',
  pronunciation: [
    { word: 'Manager', phonetic: '/ˈmænɪdʒər/', meaning: 'Directeur', tip: 'L\'accent est sur "MAN" : "MAN-a-djer". Pas "ma-NA-djer" comme en français !' },
    { word: 'Secretary', phonetic: '/ˈsekrəteri/', meaning: 'Secrétaire', tip: 'L\'accent est sur "SEC" : "SEC-re-te-ri". Pas "se-kre-TA-ri".' },
    { word: 'Employee', phonetic: '/ɪmˈplɔɪiː/', meaning: 'Employé(e)', tip: 'L\'accent est sur "PLOY" : "em-PLOY-ii". Pas "EM-ploy-ee".' },
    { word: 'Customer', phonetic: '/ˈkʌstəmər/', meaning: 'Client(e)', tip: 'L\'accent est sur "CUS" : "CUS-te-mer". Pas "cus-TO-mer".' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 9: HOUSING & NEIGHBORHOOD (a2-l41 through a2-l45)
// ════════════════════════════════════════════════════════════════════════════════

// ─── a2-l41: Housing Vocabulary (vocabulary) ────────────────────────────────
export const A2_L41: LessonContent = {
  vocab: [
    { english: 'Apartment', french: 'Appartement', phonetic: '/əˈpɑːrtmənt/', example: 'I live in a small apartment.', exampleTranslation: "J'habite dans un petit appartement." },
    { english: 'Rent', french: 'Loyer / Louer', phonetic: '/rent/', example: 'The rent is five hundred dollars a month.', exampleTranslation: 'Le loyer est de cinq cents dollars par mois.' },
    { english: 'Neighbour', french: 'Voisin(e)', phonetic: '/ˈneɪbər/', example: 'My neighbour is very friendly.', exampleTranslation: 'Mon voisin est très sympa.' },
    { english: 'Landlord', french: 'Propriétaire', phonetic: '/ˈlændlɔːrd/', example: 'The landlord fixed the heating.', exampleTranslation: 'Le propriétaire a réparé le chauffage.' },
    { english: 'Suburb', french: 'Banlieue', phonetic: '/ˈsʌbɜːrb/', example: 'We live in the suburbs.', exampleTranslation: 'Nous vivons en banlieue.' },
  ],
  grammar: {
    title: 'Vocabulaire du logement — Louer vs Habiter',
    explanation: 'Pour parler du logement : "I rent an apartment" (Je loue un appartement), "I own a house" (Je suis propriétaire d\'une maison). "Rent" peut être un nom (loyer) ou un verbe (louer). "Landlord" = propriétaire (bailleur), "tenant" = locataire. "Suburb" = banlieue résidentielle, "downtown" = centre-ville. "Move in" = emménager, "move out" = déménager. Pour décrire un logement : "It has two bedrooms" (Il a deux chambres), "It is near the station" (Il est près de la gare).',
    examples: [
      { sentence: 'I rent a two-bedroom apartment.', translation: 'Je loue un appartement de deux chambres.', isCorrect: true },
      { sentence: 'The landlord, she is nice.', translation: '', isCorrect: false },
      { sentence: 'We moved in last month.', translation: "Nous avons emménagé le mois dernier.", isCorrect: true },
      { sentence: 'My neighbour is very quiet.', translation: 'Mon voisin est très calme.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The landlord, she is nice.', correct: 'The landlord is nice.', explanation: 'En anglais, on ne répète pas le prénom : "The landlord is nice", pas "The landlord, she is nice".' },
      { wrong: 'I live in a rent.', correct: 'I live in a rented apartment.', explanation: '"Rent" est un verbe ou un nom (loyer). On dit "a rented apartment", pas "a rent".' },
    ],
  },
  conversation: [
    { speaker: 'Aïcha', role: 'A', text: 'Do you rent or own your apartment?', translation: 'Louez-vous ou êtes-vous propriétaire de votre appartement ?' },
    { speaker: 'Moussa', role: 'B', text: 'I rent. The rent is very reasonable. My landlord is helpful.', translation: "Je loue. Le loyer est très raisonnable. Mon propriétaire est serviable." },
    { speaker: 'Aïcha', role: 'A', text: 'That is lucky! I want to move. The suburbs are too far.', translation: "Tu as de la chance ! Je veux déménager. La banlieue est trop loin." },
    { speaker: 'Moussa', role: 'B', text: 'You should look for an apartment downtown. Near the station.', translation: 'Tu devrais chercher un appartement au centre-ville. Près de la gare.' },
    { speaker: 'Aïcha', role: 'A', text: 'Good idea! My neighbour told me about a nice building.', translation: 'Bonne idée ! Mon voisin m\'a parlé d\'un bel immeuble.' },
    { speaker: 'Moussa', role: 'B', text: 'Let me know if you need help moving in!', translation: "Dis-moi si tu as besoin d'aide pour emménager !" },
  ],
  conversationTitle: 'Parler de son logement',
  pronunciation: [
    { word: 'Apartment', phonetic: '/əˈpɑːrtmənt/', meaning: 'Appartement', tip: 'L\'accent est sur "PAR" : "e-PART-ment". Pas "a-part-MENT".' },
    { word: 'Rent', phonetic: '/rent/', meaning: 'Loyer / Louer', tip: 'Prononcez "RENT" — le "e" est ouvert comme dans "bed". Pas "rante".' },
    { word: 'Neighbour', phonetic: '/ˈneɪbər/', meaning: 'Voisin(e)', tip: 'Prononcez "NÉ-ber" — le "ough" est réduit. Pas "nei-gh-bour" !' },
    { word: 'Suburb', phonetic: '/ˈsʌbɜːrb/', meaning: 'Banlieue', tip: 'L\'accent est sur "SUB" : "SEUB-erb". Le "u" est très ouvert.' },
  ],
}

// ─── a2-l42: Prepositions of Place (grammar) ────────────────────────────
export const A2_L42: LessonContent = {
  vocab: [
    { english: 'Next to', french: 'À côté de', phonetic: '/nekst tə/', example: 'The bank is next to the pharmacy.', exampleTranslation: 'La banque est à côté de la pharmacie.' },
    { english: 'Across from', french: 'En face de', phonetic: '/əˈkrɒs frɒm/', example: 'The park is across from the school.', exampleTranslation: "Le parc est en face de l'école." },
    { english: 'Between', french: 'Entre', phonetic: '/bɪˈtwiːn/', example: 'The café is between the bank and the post office.', exampleTranslation: "Le café est entre la banque et le bureau de poste." },
    { english: 'Behind', french: 'Derrière', phonetic: '/bɪˈhaɪnd/', example: 'The garden is behind the house.', exampleTranslation: 'Le jardin est derrière la maison.' },
  ],
  grammar: {
    title: 'Prépositions de lieu — Next to, across from, between, behind',
    explanation: 'Pour situer les lieux : "next to" (à côté de), "across from" (en face de), "between" (entre — entre DEUX choses), "behind" (derrière), "in front of" (devant), "near" (près de), "opposite" (en face de). On les utilise avec "be" : "The bank is next to the pharmacy". ATTENTION : "between" s\'utilise avec DEUX éléments : "between A and B". "Among" s\'utilise avec PLUSIEURS : "among the houses". "In front of" a toujours "of" : pas "in front the house".',
    examples: [
      { sentence: 'The school is across from the park.', translation: "L'école est en face du parc.", isCorrect: true },
      { sentence: 'The bank is between the school.', translation: '', isCorrect: false },
      { sentence: 'The garden is behind the building.', translation: 'Le jardin est derrière l\'immeuble.', isCorrect: true },
      { sentence: 'The café is next to the post office.', translation: 'Le café est à côté du bureau de poste.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The bank is between the school.', correct: 'The bank is between the school and the park.', explanation: '"Between" nécessite DEUX éléments : "between A and B". Pas "between" avec un seul.' },
      { wrong: 'The car is in front the house.', correct: 'The car is in front of the house.', explanation: 'On dit "in front OF", pas "in front" sans "of".' },
    ],
  },
  conversation: [
    { speaker: 'Oumar', role: 'A', text: 'Excuse me, where is the nearest pharmacy?', translation: "Excusez-moi, où est la pharmacie la plus proche ?" },
    { speaker: 'Amina', role: 'B', text: 'It is next to the bank, across from the park.', translation: "Elle est à côté de la banque, en face du parc." },
    { speaker: 'Oumar', role: 'A', text: 'Is it between the bank and the supermarket?', translation: "Est-elle entre la banque et le supermarché ?" },
    { speaker: 'Amina', role: 'B', text: 'Yes! And there is a café behind the pharmacy.', translation: "Oui ! Et il y a un café derrière la pharmacie." },
    { speaker: 'Oumar', role: 'A', text: 'Thank you! I am new in this neighbourhood.', translation: "Merci ! Je suis nouveau dans ce quartier." },
    { speaker: 'Amina', role: 'B', text: 'Welcome! The post office is in front of the school, if you need it.', translation: "Bienvenue ! Le bureau de poste est devant l'école, si vous en avez besoin." },
  ],
  conversationTitle: 'Demander son chemin dans le quartier',
  pronunciation: [
    { word: 'Next', phonetic: '/nekst tə/', meaning: 'À côté de', tip: 'Expression "next to" = à côté de. Prononcez "NEKST-te" — le "to" se réduit à "te".' },
    { word: 'Across', phonetic: '/əˈkrɒs frɒm/', meaning: 'En face de', tip: 'Expression "across from" = en face de. L\'accent est sur "CROSS" : "e-CROSS-from". Le "a" initial est réduit.' },
    { word: 'Between', phonetic: '/bɪˈtwiːn/', meaning: 'Entre', tip: 'L\'accent est sur "TWEEN" : "bi-TOUIN". Le "ee" est long.' },
    { word: 'Behind', phonetic: '/bɪˈhaɪnd/', meaning: 'Derrière', tip: 'L\'accent est sur "HIND" : "bi-HAÏND". Le "i" est long.' },
  ],
}

// ─── a2-l43: Finding an Apartment (conversation) ────────────────────────────
export const A2_L43: LessonContent = {
  vocab: [
    { english: 'Available', french: 'Disponible', phonetic: '/əˈveɪləbəl/', example: 'Is the apartment still available?', exampleTranslation: "L'appartement est-il encore disponible ?" },
    { english: 'Deposit', french: 'Caution', phonetic: '/dɪˈpɒzɪt/', example: 'You need to pay a deposit.', exampleTranslation: 'Vous devez payer une caution.' },
    { english: 'Utilities', french: 'Charges (eau, électricité)', phonetic: '/juːˈtɪlɪtiz/', example: 'Are utilities included in the rent?', exampleTranslation: 'Les charges sont-elles incluses dans le loyer ?' },
    { english: 'Lease', french: 'Bail / Contrat de location', phonetic: '/liːs/', example: 'The lease is for one year.', exampleTranslation: 'Le bail est d\'un an.' },
  ],
  grammar: {
    title: 'Chercher un appartement — Phrases essentielles',
    explanation: 'Pour chercher un appartement : "Is the apartment still available?" (L\'appartement est-il encore disponible ?), "How much is the rent?" (Combien est le loyer ?), "Are utilities included?" (Les charges sont-elles incluses ?), "How much is the deposit?" (Combien est la caution ?), "Can I see the apartment?" (Puis-je voir l\'appartement ?), "When can I move in?" (Quand puis-je emménager ?). Pour répondre : "Yes, it is still available" ou "I\'m sorry, it has been rented".',
    examples: [
      { sentence: 'Is the apartment still available?', translation: "L'appartement est-il encore disponible ?", isCorrect: true },
      { sentence: 'How many cost the rent?', translation: '', isCorrect: false },
      { sentence: 'Are utilities included in the rent?', translation: 'Les charges sont-elles incluses dans le loyer ?', isCorrect: true },
      { sentence: 'When can I move in?', translation: 'Quand puis-je emménager ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'How many cost the rent?', correct: 'How much is the rent?', explanation: 'On dit "How much is the rent?", pas "How many cost the rent?". "Rent" est indénombrable.' },
      { wrong: 'I want see the apartment.', correct: 'I would like to see the apartment.', explanation: 'On dit "I would like to see" (plus poli) ou "Can I see", pas "I want see".' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'Hello, I am calling about the apartment. Is it still available?', translation: "Bonjour, j'appelle pour l'appartement. Est-il encore disponible ?" },
    { speaker: 'Landlord', role: 'B', text: 'Yes, it is! Would you like to come and see it?', translation: "Oui ! Voudriez-vous venir le voir ?" },
    { speaker: 'Fatou', role: 'A', text: 'Yes! How much is the rent? Are utilities included?', translation: "Oui ! Combien est le loyer ? Les charges sont-elles incluses ?" },
    { speaker: 'Landlord', role: 'B', text: 'The rent is six hundred dollars. Utilities are not included. You need to pay a deposit.', translation: "Le loyer est de six cents dollars. Les charges ne sont pas incluses. Vous devez payer une caution." },
    { speaker: 'Fatou', role: 'A', text: 'That is fine. When can I move in?', translation: "C'est bien. Quand puis-je emménager ?" },
    { speaker: 'Landlord', role: 'B', text: 'You can sign the lease and move in next week!', translation: "Vous pouvez signer le bail et emménager la semaine prochaine !" },
  ],
  conversationTitle: 'Trouver un appartement',
  pronunciation: [
    { word: 'Available', phonetic: '/əˈveɪləbəl/', meaning: 'Disponible', tip: 'L\'accent est sur "VAIL" : "e-VÉ-le-bel". Pas "a-vai-LA-ble".' },
    { word: 'Deposit', phonetic: '/dɪˈpɒzɪt/', meaning: 'Caution', tip: 'L\'accent est sur "POZ" : "di-POZ-it". Pas "de-po-SIT".' },
    { word: 'Utilities', phonetic: '/juːˈtɪlɪtiz/', meaning: 'Charges', tip: 'L\'accent est sur "TIL" : "iou-TIL-i-tiz". Pas "u-ti-LI-tiz".' },
    { word: 'Lease', phonetic: '/liːs/', meaning: 'Bail', tip: 'Prononcez "LIIS" — le "ee" est long et le "s" est sourd. Pas "liss".' },
  ],
}

// ─── a2-l44: Describing Your Neighborhood (conversation) ──────────────────
export const A2_L44: LessonContent = {
  vocab: [
    { english: 'Quiet', french: 'Calme', phonetic: '/ˈkwaɪət/', example: 'Our neighbourhood is very quiet.', exampleTranslation: 'Notre quartier est très calme.' },
    { english: 'Convenient', french: 'Pratique', phonetic: '/kənˈviːniənt/', example: 'The location is very convenient.', exampleTranslation: "L'emplacement est très pratique." },
    { english: 'Safe', french: 'Sûr(e)', phonetic: '/seɪf/', example: 'This area is safe at night.', exampleTranslation: "Ce quartier est sûr la nuit." },
    { english: 'Noisy', french: 'Bruyant(e)', phonetic: '/ˈnɔɪzi/', example: 'The street is too noisy.', exampleTranslation: 'La rue est trop bruyante.' },
  ],
  grammar: {
    title: 'Décrire son quartier — Adjectifs et "There is / There are"',
    explanation: 'Pour décrire votre quartier : "There is + nom singulier" : "There is a park near my house" (Il y a un parc près de chez moi). "There are + nom pluriel" : "There are many shops" (Il y a beaucoup de boutiques). Adjectifs utiles : "quiet" (calme), "noisy" (bruyant), "safe" (sûr), "convenient" (pratique), "friendly" (accueillant). Pour donner une opinion : "I like my neighbourhood because..." (J\'aime mon quartier parce que...), "It is a good place to live" (C\'est un bon endroit pour vivre).',
    examples: [
      { sentence: 'There is a park near my apartment.', translation: "Il y a un parc près de mon appartement.", isCorrect: true },
      { sentence: 'There is many shops here.', translation: '', isCorrect: false },
      { sentence: 'My neighbourhood is quiet and safe.', translation: 'Mon quartier est calme et sûr.', isCorrect: true },
      { sentence: 'It is a convenient location for shopping.', translation: "C'est un emplacement pratique pour les courses.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'There is many shops here.', correct: 'There are many shops here.', explanation: 'Avec un nom pluriel (shops), on utilise "There are", pas "There is".' },
      { wrong: 'My neighbourhood is quiet, safe and convenience.', correct: 'My neighbourhood is quiet, safe and convenient.', explanation: '"Convenient" est l\'adjectif, pas "convenience" (nom). On dit "convenient", pas "convenience".' },
    ],
  },
  conversation: [
    { speaker: 'Aïcha', role: 'A', text: 'Do you like your neighbourhood?', translation: 'Aimes-tu ton quartier ?' },
    { speaker: 'Idrissa', role: 'B', text: 'Yes! It is quiet and safe. There is a park nearby.', translation: "Oui ! Il est calme et sûr. Il y a un parc à côté." },
    { speaker: 'Aïcha', role: 'A', text: 'Are there many shops?', translation: 'Y a-t-il beaucoup de boutiques ?' },
    { speaker: 'Idrissa', role: 'B', text: 'Yes, there are. It is very convenient. But the street can be noisy.', translation: "Oui. C'est très pratique. Mais la rue peut être bruyante." },
    { speaker: 'Aïcha', role: 'A', text: 'My neighbourhood is friendly but too far from downtown.', translation: 'Mon quartier est accueillant mais trop loin du centre-ville.' },
    { speaker: 'Idrissa', role: 'B', text: 'You should look for an apartment closer to work!', translation: "Tu devrais chercher un appartement plus près du travail !" },
  ],
  conversationTitle: 'Décrire son quartier',
  pronunciation: [
    { word: 'Quiet', phonetic: '/ˈkwaɪət/', meaning: 'Calme', tip: 'Prononcez "KOUAÏ-et" — le "qu" = "kw" et le "i" est long. Pas "ki-et".' },
    { word: 'Convenient', phonetic: '/kənˈviːniənt/', meaning: 'Pratique', tip: 'L\'accent est sur "VEE" : "ken-VII-nent". Pas "con-ve-NIENT".' },
    { word: 'Safe', phonetic: '/seɪf/', meaning: 'Sûr', tip: 'Prononcez "SÉÏF" — le "a" est long. Pas "sèf".' },
    { word: 'Noisy', phonetic: '/ˈnɔɪzi/', meaning: 'Bruyant', tip: 'Prononcez "NOÏ-zi" — le "oi" = "oi" comme dans "boy".' },
  ],
}

// ─── a2-l45: Housing Sounds (pronunciation) ──────────────────────────────
export const A2_L45: LessonContent = {
  vocab: [
    { english: 'Furniture', french: 'Meubles', phonetic: '/ˈfɜːrnɪtʃər/', example: 'The apartment comes with furniture.', exampleTranslation: "L'appartement est meublé." },
    { english: 'Ceiling', french: 'Plafond', phonetic: '/ˈsiːlɪŋ/', example: 'The ceiling is very high.', exampleTranslation: 'Le plafond est très haut.' },
    { english: 'Stairs', french: 'Escalier', phonetic: '/sterz/', example: 'The stairs are in the hallway.', translation: "L'escalier est dans le couloir." },
    { english: 'Balcony', french: 'Balcon', phonetic: '/ˈbælkəni/', example: 'The apartment has a small balcony.', exampleTranslation: "L'appartement a un petit balcon." },
  ],
  grammar: {
    title: 'Prononciation des mots du logement — Sons difficiles',
    explanation: 'Les mots du logement ont des sons difficiles : "furniture" = "FER-ni-cher" (pas "fur-ni-ture"), "ceiling" = "SII-ling" (pas "say-ling"), "stairs" = "STERZ" (le "ai" = "er" comme dans "air"), "balcony" = "BAL-ke-ni" (l\'accent sur BAL). Le mot "cupboard" se prononce "KEUB-erd" (pas "cup-board").',
    examples: [
      { sentence: 'The FURniture is new.', translation: 'Les meubles sont neufs.', isCorrect: true },
      { sentence: 'The SEEling is high.', translation: '', isCorrect: false },
      { sentence: 'The BALcony is small but nice.', translation: 'Le balcon est petit mais agréable.', isCorrect: true },
      { sentence: 'The STAIRS are steep.', translation: "L'escalier est raide.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The SEEling is high.', correct: 'The ceiling is high.', explanation: '"Ceiling" = "SII-ling" avec un "ee" long, pas "SEE-ling".' },
      { wrong: 'The cup-BOARD is full.', correct: 'The cupboard is full.', explanation: '"Cupboard" = "KEUB-erd" — le "p" est muet et le "oar" se réduit.' },
    ],
  },
  conversation: [
    { speaker: 'Mariama', role: 'A', text: 'I love the furniture in this apartment!', translation: "J'adore les meubles dans cet appartement !" },
    { speaker: 'Kofi', role: 'B', text: 'Yes, and the ceiling is very high. It feels spacious.', translation: "Oui, et le plafond est très haut. Ça semble spacieux." },
    { speaker: 'Mariama', role: 'A', text: 'Is there a balcony?', translation: 'Y a-t-il un balcon ?' },
    { speaker: 'Kofi', role: 'B', text: 'Yes, a small one. The stairs to the bedroom are over there.', translation: "Oui, un petit. L'escalier vers la chambre est par là." },
    { speaker: 'Mariama', role: 'A', text: 'This is a great place. Let me think about it.', translation: "C'est un bel endroit. Laisse-moi y réfléchir." },
    { speaker: 'Kofi', role: 'B', text: 'Take your time! It is a good neighbourhood too.', translation: "Prends ton temps ! C'est aussi un bon quartier." },
  ],
  conversationTitle: 'Visiter un appartement',
  pronunciation: [
    { word: 'Furniture', phonetic: '/ˈfɜːrnɪtʃər/', meaning: 'Meubles', tip: 'L\'accent est sur "FER" : "FER-ni-cher". Pas "fur-ni-TURE".' },
    { word: 'Ceiling', phonetic: '/ˈsiːlɪŋ/', meaning: 'Plafond', tip: 'Prononcez "SII-ling" — le "ee" est long. Pas "say-ling".' },
    { word: 'Stairs', phonetic: '/sterz/', meaning: 'Escalier', tip: 'Le "ai" = "er" : "STERZ". Comme dans "air". Pas "stai-ers".' },
    { word: 'Balcony', phonetic: '/ˈbælkəni/', meaning: 'Balcon', tip: 'L\'accent est sur "BAL" : "BAL-ke-ni". Le "c" est dur comme dans "cat".' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 10: TECHNOLOGY & COMMUNICATION (a2-l46 through a2-l50)
// ════════════════════════════════════════════════════════════════════════════════

// ─── a2-l46: Tech Vocabulary (vocabulary) ────────────────────────────────
export const A2_L46: LessonContent = {
  vocab: [
    { english: 'Phone', french: 'Téléphone', phonetic: '/foʊn/', example: 'Can I use your phone?', exampleTranslation: 'Puis-je utiliser ton téléphone ?' },
    { english: 'Computer', french: 'Ordinateur', phonetic: '/kəmˈpjuːtər/', example: 'I use the computer every day.', exampleTranslation: "J'utilise l'ordinateur tous les jours." },
    { english: 'Internet', french: 'Internet', phonetic: '/ˈɪntərnet/', example: 'Do you have internet at home?', exampleTranslation: "As-tu internet chez toi ?" },
    { english: 'Email', french: 'E-mail / Courriel', phonetic: '/ˈiːmeɪl/', example: 'I will send you an email.', exampleTranslation: "Je t'enverrai un e-mail." },
    { english: 'Password', french: 'Mot de passe', phonetic: '/ˈpæswɜːrd/', example: 'Don\'t share your password.', exampleTranslation: "Ne partage pas ton mot de passe." },
  ],
  grammar: {
    title: 'Vocabulaire technologique — Faux amis et pièges',
    explanation: 'ATTENTION aux faux amis technologiques : "logiciel" = "software" (pas "software" en français), "matériel" = "hardware" (pas "hardware"). "Email" se prononce "II-méïl" (pas "é-maïl"). "Password" = mot de passe (pas "passe-word"). "Internet" s\'utilise sans article : "on the internet" (pas "on internet"). Pour dire "en ligne" : "online". Pour dire "hors ligne" : "offline". "Download" = télécharger, "upload" = mettre en ligne.',
    examples: [
      { sentence: 'I use the internet every day.', translation: "J'utilise internet tous les jours.", isCorrect: true },
      { sentence: 'I will send a email.', translation: '', isCorrect: false },
      { sentence: 'Don\'t forget your password.', translation: "N'oublie pas ton mot de passe.", isCorrect: true },
      { sentence: 'You can download the app online.', translation: "Tu peux télécharger l'application en ligne.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I will send a email.', correct: 'I will send an email.', explanation: 'Devant "email" qui commence par un son voyelle, on utilise "an", pas "a".' },
      { wrong: 'I found it on internet.', correct: 'I found it on the internet.', explanation: 'On dit "on THE internet" avec l\'article défini "the".' },
    ],
  },
  conversation: [
    { speaker: 'Amara', role: 'A', text: 'Do you have internet at home?', translation: "As-tu internet chez toi ?" },
    { speaker: 'Idrissa', role: 'B', text: 'Yes, I have Wi-Fi. I use my computer for work.', translation: "Oui, j'ai le Wi-Fi. J'utilise mon ordinateur pour le travail." },
    { speaker: 'Amara', role: 'A', text: 'I need to send an email. Can I use your phone?', translation: "J'ai besoin d'envoyer un e-mail. Puis-je utiliser ton téléphone ?" },
    { speaker: 'Idrissa', role: 'B', text: 'Of course! But I don\'t remember my password. Let me check.', translation: "Bien sûr ! Mais je ne me souviens pas de mon mot de passe. Laisse-moi vérifier." },
    { speaker: 'Amara', role: 'A', text: 'No problem. Technology can be complicated sometimes!', translation: "Pas de problème. La technologie peut être compliquée parfois !" },
    { speaker: 'Idrissa', role: 'B', text: 'True! But we can\'t live without it these days.', translation: "C'est vrai ! Mais on ne peut pas vivre sans ça de nos jours." },
  ],
  conversationTitle: 'Parler de technologie',
  pronunciation: [
    { word: 'Phone', phonetic: '/foʊn/', meaning: 'Téléphone', tip: 'Prononcez "FON" — le "ph" = "f" et le "o" est long.' },
    { word: 'Computer', phonetic: '/kəmˈpjuːtər/', meaning: 'Ordinateur', tip: 'L\'accent est sur "PU" : "ke-MPIOU-ter". Pas "com-pou-TER".' },
    { word: 'Email', phonetic: '/ˈiːmeɪl/', meaning: 'Courriel', tip: 'Prononcez "II-méïl" — l\'accent est sur "E" et le "ai" = "éi".' },
    { word: 'Password', phonetic: '/ˈpæswɜːrd/', meaning: 'Mot de passe', tip: 'L\'accent est sur "PASS" : "PA-sserd". Le "or" = "eur".' },
  ],
}

// ─── a2-l47: Imperatives (grammar) ────────────────────────────────────────
export const A2_L47: LessonContent = {
  vocab: [
    { english: 'Click', french: 'Cliquez', phonetic: '/klɪk/', example: 'Click on the button.', exampleTranslation: 'Cliquez sur le bouton.' },
    { english: 'Press', french: 'Appuyez', phonetic: '/pres/', example: 'Press the enter key.', exampleTranslation: "Appuyez sur la touche entrée." },
    { english: 'Download', french: 'Téléchargez', phonetic: '/ˈdaʊnloʊd/', example: 'Download the application.', exampleTranslation: "Téléchargez l'application." },
    { english: 'Open', french: 'Ouvrez', phonetic: '/ˈoʊpən/', example: 'Open the file.', exampleTranslation: 'Ouvrez le fichier.' },
  ],
  grammar: {
    title: 'L\'impératif — Donner des instructions',
    explanation: 'L\'impératif en anglais se forme avec le verbe de base (infinitif sans "to") : "Click here" (Cliquez ici), "Press the button" (Appuyez sur le bouton), "Open the file" (Ouvrez le fichier), "Download the app" (Téléchargez l\'application). Pour l\'impératif négatif : "Don\'t + verbe" : "Don\'t click that link" (Ne cliquez pas sur ce lien), "Don\'t share your password" (Ne partagez pas votre mot de passe). Pour adoucir : "Please + impératif" : "Please click here" (Veuillez cliquer ici).',
    examples: [
      { sentence: 'Click on the icon to open the app.', translation: "Cliquez sur l'icône pour ouvrir l'application.", isCorrect: true },
      { sentence: 'You click here.', translation: '', isCorrect: false },
      { sentence: 'Don\'t share your password with anyone.', translation: "Ne partagez votre mot de passe avec personne.", isCorrect: true },
      { sentence: 'Please press the green button.', translation: "Veuillez appuyer sur le bouton vert.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'You click here.', correct: 'Click here.', explanation: 'L\'impératif n\'a pas de sujet : "Click here", pas "You click here".' },
      { wrong: 'Not click on that link.', correct: 'Don\'t click on that link.', explanation: 'L\'impératif négatif utilise "Don\'t" : "Don\'t click", pas "Not click".' },
    ],
  },
  conversation: [
    { speaker: 'Oumar', role: 'A', text: 'How do I download this app?', translation: "Comment télécharger cette application ?" },
    { speaker: 'Fatou', role: 'B', text: 'First, open the app store. Then, search for the name.', translation: "D'abord, ouvrez la boutique d'applications. Ensuite, cherchez le nom." },
    { speaker: 'Oumar', role: 'A', text: 'OK. Now what do I do?', translation: "D'accord. Et maintenant ?" },
    { speaker: 'Fatou', role: 'B', text: 'Click on "Download". Don\'t press the back button!', translation: "Cliquez sur \"Télécharger\". N'appuyez pas sur le bouton retour !" },
    { speaker: 'Oumar', role: 'A', text: 'It is downloading! Please help me set up my account.', translation: "Ça télécharge ! Aidez-moi à configurer mon compte, s'il vous plaît." },
    { speaker: 'Fatou', role: 'B', text: 'Sure! Enter your email. Don\'t forget your password!', translation: "Bien sûr ! Entrez votre e-mail. N'oubliez pas votre mot de passe !" },
  ],
  conversationTitle: 'Donner des instructions technologiques',
  pronunciation: [
    { word: 'Click', phonetic: '/klɪk/', meaning: 'Cliquez', tip: 'Prononcez "KLIK" — le "i" est court. Pas "clik-ke".' },
    { word: 'Press', phonetic: '/pres/', meaning: 'Appuyez', tip: 'Prononcez "PRÉSS" — le "e" est ouvert. Pas "priss".' },
    { word: 'Download', phonetic: '/ˈdaʊnloʊd/', meaning: 'Téléchargez', tip: 'L\'accent est sur "DOWN" : "DAOUN-lod". Le "ow" = "aou".' },
    { word: 'Open', phonetic: '/ˈoʊpən/', meaning: 'Ouvrez', tip: 'L\'accent est sur "O" : "O-pen". Le "o" est long.' },
  ],
}

// ─── a2-l48: Tech Problems (conversation) ────────────────────────────────────
export const A2_L48: LessonContent = {
  vocab: [
    { english: 'Crash', french: 'Planter (ordinateur)', phonetic: '/kræʃ/', example: 'My computer crashed again.', exampleTranslation: "Mon ordinateur a encore planté." },
    { english: 'Frozen', french: 'Gelé (écran bloqué)', phonetic: '/ˈfroʊzən/', example: 'The screen is frozen.', exampleTranslation: "L'écran est bloqué." },
    { english: 'Slow', french: 'Lent(e)', phonetic: '/sloʊ/', example: 'The internet is very slow.', exampleTranslation: "Internet est très lent." },
    { english: 'Update', french: 'Mise à jour', phonetic: '/ʌpˈdeɪt/', example: 'You need to update your phone.', exampleTranslation: "Tu dois mettre à jour ton téléphone." },
  ],
  grammar: {
    title: 'Décrire des problèmes technologiques — My ___ is/froze/crashed',
    explanation: 'Pour décrire un problème technique : "My computer crashed" (Mon ordinateur a planté), "The screen is frozen" (L\'écran est bloqué), "The internet is slow" (Internet est lent), "My phone won\'t turn on" (Mon téléphone ne s\'allume pas), "The app keeps closing" (L\'application se ferme tout le temps). Pour proposer des solutions : "Try restarting it" (Essayez de le redémarrer), "You need to update it" (Vous devez le mettre à jour), "Check your connection" (Vérifiez votre connexion).',
    examples: [
      { sentence: 'My computer crashed this morning.', translation: "Mon ordinateur a planté ce matin.", isCorrect: true },
      { sentence: 'The screen is freeze.', translation: '', isCorrect: false },
      { sentence: 'Try restarting your phone.', translation: "Essayez de redémarrer votre téléphone.", isCorrect: true },
      { sentence: 'You need to update the software.', translation: "Vous devez mettre à jour le logiciel.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The screen is freeze.', correct: 'The screen is frozen.', explanation: '"Frozen" est le participe passé (adjectif), pas "freeze" (verbe). "The screen IS frozen".' },
      { wrong: 'My phone don\'t work.', correct: 'My phone doesn\'t work.', explanation: 'Avec "my phone" (3e personne), on utilise "doesn\'t", pas "don\'t".' },
    ],
  },
  conversation: [
    { speaker: 'Aïcha', role: 'A', text: 'Help! My computer crashed and the screen is frozen.', translation: "Aide ! Mon ordinateur a planté et l'écran est bloqué." },
    { speaker: 'Kofi', role: 'B', text: 'Don\'t worry. Try restarting it. Hold the power button.', translation: "Ne t'inquiète pas. Essaye de le redémarrer. Maintiens le bouton d'alimentation." },
    { speaker: 'Aïcha', role: 'A', text: 'OK, it is restarting. But the internet is very slow.', translation: "OK, il redémarre. Mais internet est très lent." },
    { speaker: 'Kofi', role: 'B', text: 'Check your Wi-Fi connection. You might need to update your computer.', translation: "Vérifie ta connexion Wi-Fi. Tu as peut-être besoin de mettre à jour ton ordinateur." },
    { speaker: 'Aïcha', role: 'A', text: 'You are right! There is an update available. I will install it.', translation: "Tu as raison ! Il y a une mise à jour disponible. Je vais l'installer." },
    { speaker: 'Kofi', role: 'B', text: 'Good idea! Always keep your software updated.', translation: "Bonne idée ! Garde toujours tes logiciels à jour." },
  ],
  conversationTitle: 'Problèmes technologiques',
  pronunciation: [
    { word: 'Crash', phonetic: '/kræʃ/', meaning: 'Planter', tip: 'Le "a" est ouvert : "KRACH". Le "sh" = "ch" français.' },
    { word: 'Frozen', phonetic: '/ˈfroʊzən/', meaning: 'Gelé', tip: 'Prononcez "FRO-zen" — le "o" est long et le "en" est doux.' },
    { word: 'Slow', phonetic: '/sloʊ/', meaning: 'Lent', tip: 'Prononcez "SLO" — le "ow" = "o" long.' },
    { word: 'Update', phonetic: '/ʌpˈdeɪt/', meaning: 'Mise à jour', tip: 'L\'accent est sur "DATE" : "e-PADEÏT". Le "up" est réduit.' },
  ],
}

// ─── a2-l49: Online Life (vocabulary) ──────────────────────────────────────
export const A2_L49: LessonContent = {
  vocab: [
    { english: 'Social media', french: 'Réseaux sociaux', phonetic: '/ˈsoʊʃəl miːdiə/', example: 'I use social media every day.', exampleTranslation: "J'utilise les réseaux sociaux tous les jours." },
    { english: 'Post', french: 'Publier / Publication', phonetic: '/poʊst/', example: 'She posted a photo online.', exampleTranslation: 'Elle a publié une photo en ligne.' },
    { english: 'Message', french: 'Message', phonetic: '/ˈmesɪdʒ/', example: 'I sent you a message.', exampleTranslation: "Je t'ai envoyé un message." },
    { english: 'Follow', french: 'Suivre', phonetic: '/ˈfɒloʊ/', example: 'I follow many interesting people online.', exampleTranslation: "Je suis beaucoup de gens intéressants en ligne." },
    { english: 'Search', french: 'Rechercher', phonetic: '/sɜːrtʃ/', meaning: 'Recherche', tip: 'Le "ear" = "eur" : "SEURTCH". Le "ch" = "tch".' },
  ],
  grammar: {
    title: 'Vie en ligne — Noms et verbes technologiques',
    explanation: 'Certains mots technologiques sont à la fois noms et verbes : "post" = publier (verbe) ou publication (nom), "message" = envoyer un message (verbe) ou message (nom), "search" = rechercher (verbe) ou recherche (nom). "Follow" = suivre (abonner), "unfollow" = ne plus suivre. "Like" = aimer (cliquer j\'aime). "Share" = partager. "Comment" = commenter / commentaire. Pour décrire ses habitudes en ligne : "I spend time on social media", "I chat with friends online", "I watch videos on the internet".',
    examples: [
      { sentence: 'I posted a message on social media.', translation: "J'ai publié un message sur les réseaux sociaux.", isCorrect: true },
      { sentence: 'I did a post on internet.', translation: '', isCorrect: false },
      { sentence: 'She follows many interesting pages.', translation: 'Elle suit beaucoup de pages intéressantes.', isCorrect: true },
      { sentence: 'I like to share photos online.', translation: "J'aime partager des photos en ligne.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I did a post on internet.', correct: 'I posted on the internet.', explanation: 'On dit "posted" (verbe), pas "did a post". Et "on THE internet" avec "the".' },
      { wrong: 'I am follow you.', correct: 'I follow you.', explanation: '"Follow" est un verbe régulier au Present Simple : "I follow", pas "I am follow".' },
    ],
  },
  conversation: [
    { speaker: 'Mariama', role: 'A', text: 'Do you use social media?', translation: 'Utilises-tu les réseaux sociaux ?' },
    { speaker: 'Oumar', role: 'B', text: 'Yes! I post photos and follow my friends online.', translation: "Oui ! Je publie des photos et je suis mes amis en ligne." },
    { speaker: 'Mariama', role: 'A', text: 'I prefer sending messages. I chat with my family every day.', translation: "Je préfère envoyer des messages. Je discute avec ma famille tous les jours." },
    { speaker: 'Oumar', role: 'B', text: 'That is nice! Do you search for information online too?', translation: "C'est sympa ! Recherches-tu aussi des informations en ligne ?" },
    { speaker: 'Mariama', role: 'A', text: 'Yes, I search for recipes and news. The internet is very useful.', translation: "Oui, je cherche des recettes et des nouvelles. Internet est très utile." },
    { speaker: 'Oumar', role: 'B', text: 'I agree! But we should be careful about what we share online.', translation: "Je suis d'accord ! Mais on devrait faire attention à ce qu'on partage en ligne." },
  ],
  conversationTitle: 'Vie numérique et réseaux sociaux',
  pronunciation: [
    { word: 'Social', phonetic: '/ˈsoʊʃəl/', meaning: 'Social(e)', tip: 'Prononcez "SO-chel" — le "ia" = "e" réduit. Pas "so-si-al".' },
    { word: 'Post', phonetic: '/poʊst/', meaning: 'Publier / Publication', tip: 'Prononcez "POST" — le "o" est long et le "t" final est léger.' },
    { word: 'Follow', phonetic: '/ˈfɒloʊ/', meaning: 'Suivre', tip: 'Prononcez "FO-lo" — le "ow" final = "o" long.' },
    { word: 'Search', phonetic: '/sɜːrtʃ/', meaning: 'Rechercher', tip: 'Le "ear" = "eur" : "SEURTCH". Le "ch" = "tch" comme dans "match".' },
  ],
}

// ─── a2-l50: Tech Sounds (pronunciation) ──────────────────────────────────
export const A2_L50: LessonContent = {
  vocab: [
    { english: 'Keyboard', french: 'Clavier', phonetic: '/ˈkiːbɔːrd/', example: 'My keyboard is not working.', exampleTranslation: "Mon clavier ne fonctionne pas." },
    { english: 'Screen', french: 'Écran', phonetic: '/skriːn/', example: 'The screen is very bright.', exampleTranslation: "L'écran est très lumineux." },
    { english: 'Charger', french: 'Chargeur', phonetic: '/ˈtʃɑːrdʒər/', example: 'I forgot my charger at home.', exampleTranslation: "J'ai oublié mon chargeur à la maison." },
    { english: 'Settings', french: 'Paramètres', phonetic: '/ˈsetɪŋz/', example: 'Check your phone settings.', exampleTranslation: "Vérifie les paramètres de ton téléphone." },
  ],
  grammar: {
    title: 'Prononciation technologique — Mots souvent mal prononcés',
    explanation: 'Les mots technologiques ont des pièges : "keyboard" = "KII-bord" (pas "kéy-bord"), "screen" = "SKRIIN" (pas "escrin"), "charger" = "TCHAR-djer" (pas "char-jer"), "settings" = "SET-tingz" (pas "set-tings" avec un "g" dur). "Wi-Fi" = "OUAI-FAÏ". "Bluetooth" = "BLOU-touuth". "USB" = "iou-ess-bi".',
    examples: [
      { sentence: 'My KIIboard is broken.', translation: 'Mon clavier est cassé.', isCorrect: true },
      { sentence: 'The SCRIN is dark.', translation: '', isCorrect: false },
      { sentence: 'I need my TCHARger.', translation: "J'ai besoin de mon chargeur.", isCorrect: true },
      { sentence: 'Open the SETtings.', translation: 'Ouvrez les paramètres.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The SCRIN is dark.', correct: 'The screen is dark.', explanation: '"Screen" = "SKRIIN" avec un "scr" initial. Ne séparez pas les sons. Pas "escrin".' },
      { wrong: 'My kéy-bord is broken.', correct: 'My keyboard is broken.', explanation: '"Keyboard" = "KII-bord" — le "ey" = "ii" long, pas "éy".' },
    ],
  },
  conversation: [
    { speaker: 'Amina', role: 'A', text: 'My keyboard is not working. Can you help me?', translation: "Mon clavier ne fonctionne pas. Peux-tu m'aider ?" },
    { speaker: 'Idrissa', role: 'B', text: 'Sure! Is the screen frozen too?', translation: "Bien sûr ! L'écran est-il aussi bloqué ?" },
    { speaker: 'Amina', role: 'A', text: 'No, the screen is fine. But I think I need a new keyboard.', translation: "Non, l'écran va bien. Mais je pense que j'ai besoin d'un nouveau clavier." },
    { speaker: 'Idrissa', role: 'B', text: 'Check the settings first. And is your charger working?', translation: "Vérifie les paramètres d'abord. Et ton chargeur fonctionne ?" },
    { speaker: 'Amina', role: 'A', text: 'Yes, the charger is fine. I will check the settings.', translation: "Oui, le chargeur va bien. Je vais vérifier les paramètres." },
    { speaker: 'Idrissa', role: 'B', text: 'Let me know if you still have problems. Technology can be tricky!', translation: "Dis-moi si tu as encore des problèmes. La technologie peut être délicate !" },
  ],
  conversationTitle: 'Résoudre des problèmes techniques',
  pronunciation: [
    { word: 'Keyboard', phonetic: '/ˈkiːbɔːrd/', meaning: 'Clavier', tip: 'L\'accent est sur "KEY" : "KII-bord". Le "ey" = "ii" long.' },
    { word: 'Screen', phonetic: '/skriːn/', meaning: 'Écran', tip: 'Prononcez "SKRIIN" — le "scr" se prononce ensemble. Pas "escrin".' },
    { word: 'Charger', phonetic: '/ˈtʃɑːrdʒər/', meaning: 'Chargeur', tip: 'Prononcez "TCHAR-djer" — le "ch" = "tch" et le "er" final est doux.' },
    { word: 'Settings', phonetic: '/ˈsetɪŋz/', meaning: 'Paramètres', tip: 'Prononcez "SET-tingz" — le "ng" = langue contre le palais, pas "set-tingz" avec un "g" dur.' },
  ],
}
