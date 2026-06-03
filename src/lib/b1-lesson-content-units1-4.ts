// Lesson content for B1 Intermediate Units 1-4
// YOELANG English learning app for francophone users
// Inspired by Harvard's practical English pedagogy — rigorous, practical, progressive

import { type LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 1: NEWS & MEDIA (b1-l1 through b1-l5)
// ════════════════════════════════════════════════════════════════════════════════

// ─── b1-l1: News Vocabulary (vocabulary) ──────────────────────────────────────
export const B1_L1: LessonContent = {
  vocab: [
    { english: 'Article', french: 'Article', phonetic: '/ˈɑːrtɪkl/', example: 'I read an interesting article about climate change.', exampleTranslation: "J'ai lu un article intéressant sur le changement climatique." },
    { english: 'Headline', french: 'Titre (de journal)', phonetic: '/ˈhedlaɪn/', example: 'The headline shocked everyone this morning.', exampleTranslation: 'Le titre a choqué tout le monde ce matin.' },
    { english: 'Broadcast', french: 'Diffusion / Émission', phonetic: '/ˈbrɔːdkæst/', example: 'The news broadcast starts at eight.', exampleTranslation: "Le journal télévisé commence à huit heures." },
    { english: 'Report', french: 'Reportage / Rapport', phonetic: '/rɪˈpɔːrt/', example: 'The journalist filed a report from Paris.', exampleTranslation: 'Le journaliste a déposé un reportage de Paris.' },
    { english: 'Coverage', french: 'Couverture médiatique', phonetic: '/ˈkʌvərɪdʒ/', example: 'The media coverage of the election was extensive.', exampleTranslation: "La couverture médiatique de l'élection était vaste." },
  ],
  grammar: {
    title: 'Vocabulaire des médias — Mots composés et collocations',
    explanation: 'En anglais, les mots des médias forment souvent des expressions fixes (collocations) : "break the news" (annoncer la nouvelle), "cover a story" (couvrir un sujet), "file a report" (déposer un reportage), "make headlines" (faire la une). "Headline" = titre de journal (une seule ligne en haut). "Article" = l\'article complet. "Broadcast" peut être nom ou verbe : "to broadcast" = diffuser. ATTENTION : "news" est TOUJOURS singulier en anglais : "the news IS good" (pas "are good").',
    examples: [
      { sentence: 'The news is very worrying today.', translation: "Les nouvelles sont très inquiétantes aujourd'hui.", isCorrect: true },
      { sentence: 'The news are very worrying today.', translation: '', isCorrect: false },
      { sentence: 'She made headlines with her discovery.', translation: 'Elle a fait la une avec sa découverte.', isCorrect: true },
      { sentence: 'The broadcast was interrupted by a storm.', translation: "La diffusion a été interrompue par une tempête.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The news are good.', correct: 'The news is good.', explanation: '"News" est toujours singulier en anglais ! On dit "the news IS", jamais "the news ARE". Même si cela semble pluriel, c\'est un nom indénombrable.' },
      { wrong: 'He made a reportage.', correct: 'He filed a report.', explanation: '"Reportage" n\'existe pas en anglais. On dit "a report" ou "to file a report".' },
    ],
  },
  conversation: [
    { speaker: 'Amina', role: 'A', text: 'Did you read the headline this morning?', translation: 'As-tu lu le titre ce matin ?' },
    { speaker: 'Kofi', role: 'B', text: 'Yes, the news is quite shocking. There was a big report on the economy.', translation: "Oui, les nouvelles sont assez choquantes. Il y a eu un grand reportage sur l'économie." },
    { speaker: 'Amina', role: 'A', text: 'I saw the broadcast too. The coverage was very detailed.', translation: "J'ai vu la diffusion aussi. La couverture était très détaillée." },
    { speaker: 'Kofi', role: 'B', text: 'Journalists always try to break the news first.', translation: 'Les journalistes essaient toujours d\'annoncer les nouvelles en premier.' },
    { speaker: 'Amina', role: 'A', text: 'I prefer reading articles online. I can check multiple sources.', translation: "Je préfère lire des articles en ligne. Je peux vérifier plusieurs sources." },
    { speaker: 'Kofi', role: 'B', text: 'That\'s smart! We should always verify the news we read.', translation: "C'est intelligent ! On devrait toujours vérifier les nouvelles qu'on lit." },
  ],
  conversationTitle: 'Discuter de l\'actualité',
  pronunciation: [
    { word: 'Article', phonetic: '/ˈɑːrtɪkl/', meaning: 'Article', tip: 'Le "ar" est long : "AR-ti-cl". Ne prononcez pas "ar-ti-cle" à la française. Le "e" final est muet.' },
    { word: 'Headline', phonetic: '/ˈhedlaɪn/', meaning: 'Titre', tip: 'Prononcez "HÉD-laïn" — le "h" est expiré et le "i" est long dans "line".' },
    { word: 'Broadcast', phonetic: '/ˈbrɔːdkæst/', meaning: 'Diffusion', tip: 'Prononcez "BROAD-cast" — "broad" rime avec "code" et "cast" comme dans "castle".' },
    { word: 'Coverage', phonetic: '/ˈkʌvərɪdʒ/', meaning: 'Couverture', tip: 'Prononcez "KEU-ve-ridj" — le "o" est ouvert comme dans "cup" et le "ge" final = "dj".' },
  ],
}

// ─── b1-l2: Passive Voice: Present (grammar) ────────────────────────────────
export const B1_L2: LessonContent = {
  vocab: [
    { english: 'Published', french: 'Publié(e)', phonetic: '/ˈpʌblɪʃt/', example: 'The article is published every Monday.', exampleTranslation: "L'article est publié chaque lundi." },
    { english: 'Broadcast', french: 'Diffusé(e)', phonetic: '/ˈbrɔːdkæst/', example: 'The show is broadcast at 8 PM.', exampleTranslation: "L'émission est diffusée à 20 heures." },
    { english: 'Written', french: 'Écrit(e)', phonetic: '/ˈrɪtn/', example: 'The report is written by a famous journalist.', exampleTranslation: 'Le reportage est écrit par un journaliste célèbre.' },
    { english: 'Broadcasted', french: 'Diffusé(e)', phonetic: '/ˈbrɔːdkæstɪd/', example: 'The event is broadcasted live.', exampleTranslation: "L'événement est diffusé en direct." },
    { english: 'Released', french: 'Publié(e) / Sorti(e)', phonetic: '/rɪˈliːst/', example: 'The new data is released every quarter.', exampleTranslation: 'Les nouvelles données sont publiées chaque trimestre.' },
  ],
  grammar: {
    title: 'La Voix Passive au Présent — The report is published',
    explanation: 'La voix passive au présent se forme avec : sujet + am/is/are + participe passé. On l\'utilise quand l\'action est plus importante que celui qui la fait. "The report IS PUBLISHED every day" (Le rapport est publié chaque jour). "The news IS BROADCAST at 6 PM" (Les infos sont diffusées à 18h). "The article IS WRITTEN by a journalist" (L\'article est écrit par un journaliste). Pour le négatif : "The report is NOT published on Sundays". Pour les questions : "Is the report published daily?". ATTENTION : en français, on utilise souvent la voix active ou pronominale là où l\'anglais utilise la passive.',
    examples: [
      { sentence: 'The newspaper is printed every night.', translation: 'Le journal est imprimé chaque nuit.', isCorrect: true },
      { sentence: 'The article is write by a journalist.', translation: '', isCorrect: false },
      { sentence: 'Are the results published online?', translation: 'Les résultats sont-ils publiés en ligne ?', isCorrect: true },
      { sentence: 'The meeting is held every Monday.', translation: 'La réunion est tenue chaque lundi.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The article is write by a journalist.', correct: 'The article is written by a journalist.', explanation: 'La voix passive utilise le participe passé : "written" (pas "write"). Participe passé irrégulier : write → wrote → written.' },
      { wrong: 'The news are broadcasted every day.', correct: 'The news is broadcast every day.', explanation: '"News" est singulier ! Et "broadcast" a la même forme pour le présent et le participe passé (pas "broadcasted" dans l\'usage standard).' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'How often is the newspaper published?', translation: 'À quelle fréquence le journal est-il publié ?' },
    { speaker: 'Youssef', role: 'B', text: 'It is published daily, but the weekend edition is special.', translation: 'Il est publié quotidiennement, mais l\'édition du week-end est spéciale.' },
    { speaker: 'Fatou', role: 'A', text: 'Who is it written by?', translation: 'Par qui est-il écrit ?' },
    { speaker: 'Youssef', role: 'B', text: 'The articles are written by a team of journalists. The editor checks everything.', translation: "Les articles sont écrits par une équipe de journalistes. Le rédacteur en chef vérifie tout." },
    { speaker: 'Fatou', role: 'A', text: 'Is the news broadcast on TV too?', translation: 'Les informations sont-elles aussi diffusées à la télé ?' },
    { speaker: 'Youssef', role: 'B', text: 'Yes, the main headlines are broadcast at 8 PM every evening.', translation: 'Oui, les principaux titres sont diffusés à 20h chaque soir.' },
  ],
  conversationTitle: 'La voix passive dans les médias',
  pronunciation: [
    { word: 'Published', phonetic: '/ˈpʌblɪʃt/', meaning: 'Publié', tip: 'Prononcez "PEU-blich-t" — le "u" est ouvert comme dans "cup" et le "-ed" final se prononce "t" après "sh".' },
    { word: 'Written', phonetic: '/ˈrɪtn/', meaning: 'Écrit', tip: 'Prononcez "RIT-n" — le "tt" ne se prononce qu\'une seule fois et le "e" est muet. Pas "writ-ten".' },
    { word: 'Released', phonetic: '/rɪˈliːst/', meaning: 'Publié / Sorti', tip: 'Prononcez "ri-LIST" — l\'accent est sur la deuxième syllabe et le "-ed" = "t".' },
    { word: 'Held', phonetic: '/held/', meaning: 'Tenu (hold→held)', tip: 'Prononcez "HELD" — le "e" est court et le "d" final est doux. Pas "heuld".' },
  ],
}

// ─── b1-l3: Discussing the News (conversation) ──────────────────────────────
export const B1_L3: LessonContent = {
  vocab: [
    { english: 'Current events', french: 'Actualité', phonetic: '/ˈkɜːrənt ɪˈvents/', example: 'We discuss current events in class.', exampleTranslation: "Nous discutons de l'actualité en classe." },
    { english: 'Opinion', french: 'Opinion', phonetic: '/əˈpɪnjən/', example: 'Everyone has a different opinion about this.', exampleTranslation: 'Chacun a une opinion différente sur ce sujet.' },
    { english: 'Controversial', french: 'Controversé(e)', phonetic: '/ˌkɑːntrəˈvɜːrʃl/', example: 'The new law is very controversial.', exampleTranslation: 'La nouvelle loi est très controversée.' },
    { english: 'Bias', french: 'Biais / Parti pris', phonetic: '/ˈbaɪəs/', example: 'The article shows a clear bias.', exampleTranslation: "L'article montre un biais évident." },
    { english: 'Reliable source', french: 'Source fiable', phonetic: '/rɪˈlaɪəbl sɔːrs/', example: 'Always check if it is a reliable source.', exampleTranslation: 'Vérifiez toujours si c\'est une source fiable.' },
  ],
  grammar: {
    title: 'Donner son opinion sur l\'actualité — Expressions utiles',
    explanation: 'Pour donner votre opinion sur l\'actualité : "In my opinion..." (À mon avis...), "I believe that..." (Je crois que...), "It seems to me that..." (Il me semble que...), "From what I\'ve read..." (D\'après ce que j\'ai lu...). Pour être nuancé : "On the one hand... on the other hand..." (D\'un côté... de l\'autre côté...). Pour demander l\'avis de quelqu\'un : "What do you think about...?", "What\'s your take on this?". ATTENTION : "opinion" se prononce "e-PIN-yenn", pas "o-pi-nyon" à la française.',
    examples: [
      { sentence: 'In my opinion, the coverage is biased.', translation: 'À mon avis, la couverture est biaisée.', isCorrect: true },
      { sentence: 'I think that the news are reliable.', translation: '', isCorrect: false },
      { sentence: 'What do you think about the new policy?', translation: 'Que penses-tu de la nouvelle politique ?', isCorrect: true },
      { sentence: 'From what I\'ve read, the situation is improving.', translation: "D'après ce que j'ai lu, la situation s'améliore.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I think that the news are reliable.', correct: 'I think that the news is reliable.', explanation: '"News" est TOUJOURS singulier : "the news IS", jamais "the news ARE".' },
      { wrong: 'According me, the article is wrong.', correct: 'According to me, the article is wrong.', explanation: 'On dit "according TO me", pas "according me". La préposition "to" est obligatoire.' },
    ],
  },
  conversation: [
    { speaker: 'Moussa', role: 'A', text: 'Did you see the news this morning? It\'s quite controversial.', translation: 'As-tu vu les nouvelles ce matin ? C\'est assez controversé.' },
    { speaker: 'Aïcha', role: 'B', text: 'Yes, I did. In my opinion, the coverage shows a clear bias.', translation: 'Oui. À mon avis, la couverture montre un biais évident.' },
    { speaker: 'Moussa', role: 'A', text: 'I agree. On the one hand, they present the facts. On the other hand, they choose which facts to show.', translation: "Je suis d'accord. D'un côté, ils présentent les faits. De l'autre, ils choisissent quels faits montrer." },
    { speaker: 'Aïcha', role: 'B', text: 'Exactly! What\'s your take on the new policy they discussed?', translation: 'Exactement ! Quel est ton avis sur la nouvelle politique dont ils ont parlé ?' },
    { speaker: 'Moussa', role: 'A', text: 'From what I\'ve read, it could be beneficial. But I need to check reliable sources first.', translation: "D'après ce que j'ai lu, ça pourrait être bénéfique. Mais je dois d'abord vérifier des sources fiables." },
    { speaker: 'Aïcha', role: 'B', text: 'That\'s the right approach. We should always verify current events before sharing them.', translation: "C'est la bonne approche. On devrait toujours vérifier l'actualité avant de la partager." },
  ],
  conversationTitle: 'Donner son opinion sur l\'actualité',
  pronunciation: [
    { word: 'Opinion', phonetic: '/əˈpɪnjən/', meaning: 'Opinion', tip: 'Prononcez "e-PIN-yenn" — l\'accent est sur la deuxième syllabe. Ne dites PAS "o-pi-nyon" à la française.' },
    { word: 'Controversial', phonetic: '/ˌkɑːntrəˈvɜːrʃl/', meaning: 'Controversé', tip: 'Prononcez "kon-tre-VER-chl" — l\'accent est sur "VER" et la fin se réduit en "-chl".' },
    { word: 'Bias', phonetic: '/ˈbaɪəs/', meaning: 'Biais', tip: 'Prononcez "BAÏ-ess" — le "i" est long et les deux syllabes sont clairement séparées.' },
    { word: 'Reliable', phonetic: '/rɪˈlaɪəbl/', meaning: 'Fiable', tip: 'Prononcez "ri-LAÏ-a-bl" — l\'accent est sur "LI" et le son "aï" est long.' },
  ],
}

// ─── b1-l4: Reported Speech (grammar) ───────────────────────────────────────
export const B1_L4: LessonContent = {
  vocab: [
    { english: 'Claimed', french: 'A affirmé', phonetic: '/kleɪmd/', example: 'She claimed that the report was false.', exampleTranslation: 'Elle a affirmé que le reportage était faux.' },
    { english: 'Announced', french: 'A annoncé', phonetic: '/əˈnaʊnst/', example: 'The president announced new measures.', exampleTranslation: 'Le président a annoncé de nouvelles mesures.' },
    { english: 'Stated', french: 'A déclaré', phonetic: '/ˈsteɪtɪd/', example: 'He stated that the situation was under control.', exampleTranslation: 'Il a déclaré que la situation était sous contrôle.' },
    { english: 'Denied', french: 'A nié', phonetic: '/dɪˈnaɪd/', example: 'The company denied the accusations.', exampleTranslation: "L'entreprise a nié les accusations." },
    { english: 'Admitted', french: 'A admis', phonetic: '/ədˈmɪtɪd/', example: 'The minister admitted making a mistake.', exampleTranslation: 'Le ministre a admis avoir fait une erreur.' },
  ],
  grammar: {
    title: 'Le Discours Rapporté — She said that the meeting was canceled',
    explanation: 'Le discours rapporté (reported speech) sert à rapporter les paroles de quelqu\'un : "She SAID that the meeting WAS canceled" (Elle a dit que la réunion était annulée). RÈGLE DU BACKSHIFT : quand le verbe introducteur est au passé (said, told, claimed), on recule les temps : Present Simple → Past Simple, Present Continuous → Past Continuous, can → could, will → would. "I am tired" → She said she WAS tired. "I will come" → He said he WOULD come. ATTENTION : si ce qui est rapporté est toujours vrai, on peut garder le présent : "She said the earth IS round".' ,
    examples: [
      { sentence: 'She said that the meeting was canceled.', translation: 'Elle a dit que la réunion était annulée.', isCorrect: true },
      { sentence: 'He said that he is tired yesterday.', translation: '', isCorrect: false },
      { sentence: 'The journalist reported that the situation had improved.', translation: 'Le journaliste a rapporté que la situation s\'était améliorée.', isCorrect: true },
      { sentence: 'They announced that they would launch a new product.', translation: 'Ils ont annoncé qu\'ils lanceraient un nouveau produit.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'He said that he is tired yesterday.', correct: 'He said that he was tired.', explanation: 'Après "said" (passé), on utilise le passé : "was", pas "is". C\'est la règle du backshift.' },
      { wrong: 'She told that the meeting was canceled.', correct: 'She said that the meeting was canceled.', explanation: 'On dit "said that" ou "told someone that" : "She told ME that..." Mais on ne peut PAS dire "told that" sans objet.' },
    ],
  },
  conversation: [
    { speaker: 'Mariama', role: 'A', text: 'Did you hear what the minister announced?', translation: 'As-tu entendu ce que le ministre a annoncé ?' },
    { speaker: 'Idrissa', role: 'B', text: 'Yes! He stated that the economy was improving.', translation: 'Oui ! Il a déclaré que l\'économie s\'améliorait.' },
    { speaker: 'Mariama', role: 'A', text: 'But the opposition claimed that the numbers were false.', translation: "Mais l'opposition a affirmé que les chiffres étaient faux." },
    { speaker: 'Idrissa', role: 'B', text: 'I know. The company also denied the accusations of fraud.', translation: "Je sais. L'entreprise a aussi nié les accusations de fraude." },
    { speaker: 'Mariama', role: 'A', text: 'The CEO admitted that mistakes were made, though.', translation: "Le PDG a admis que des erreurs avaient été commises, cependant." },
    { speaker: 'Idrissa', role: 'B', text: 'That\'s honest at least. Reported speech can be confusing sometimes!', translation: "C'est honnête au moins. Le discours rapporté peut être confus parfois !" },
  ],
  conversationTitle: 'Rapporter les déclarations',
  pronunciation: [
    { word: 'Claimed', phonetic: '/kleɪmd/', meaning: 'A affirmé', tip: 'Prononcez "KLÉÏMD" — le "ai" = "éi" et le "-ed" final = "d" après "m".' },
    { word: 'Announced', phonetic: '/əˈnaʊnst/', meaning: 'A annoncé', tip: 'Prononcez "e-NAOUNST" — l\'accent est sur "NOUNCE" et le "-ed" = "t".' },
    { word: 'Denied', phonetic: '/dɪˈnaɪd/', meaning: 'A nié', tip: 'Prononcez "di-NAÏD" — l\'accent est sur la deuxième syllabe et le "i" est long.' },
    { word: 'Admitted', phonetic: '/ədˈmɪtɪd/', meaning: 'A admis', tip: 'Prononcez "ed-MI-tid" — l\'accent est sur "MIT" et les deux syllabes suivantes sont réduites.' },
  ],
}

// ─── b1-l5: News Sounds (pronunciation) ──────────────────────────────────────
export const B1_L5: LessonContent = {
  vocab: [
    { english: 'Editorial', french: 'Éditorial', phonetic: '/ˌedɪˈtɔːriəl/', example: 'The editorial criticized the government.', exampleTranslation: "L'éditorial a critiqué le gouvernement." },
    { english: 'Journalist', french: 'Journaliste', phonetic: '/ˈdʒɜːrnəlɪst/', example: 'The journalist interviewed the president.', exampleTranslation: 'Le journaliste a interviewé le président.' },
    { english: 'Censorship', french: 'Censure', phonetic: '/ˈsensərʃɪp/', example: 'Censorship restricts freedom of speech.', exampleTranslation: 'La censure restreint la liberté d\'expression.' },
    { english: 'Press conference', french: 'Conférence de presse', phonetic: '/pres ˈkɑːnfərəns/', example: 'The mayor held a press conference.', exampleTranslation: 'Le maire a tenu une conférence de presse.' },
  ],
  grammar: {
    title: 'Prononciation des termes médiatiques — Pièges pour francophones',
    explanation: 'Les mots du vocabulaire des médias sont pleins de pièges pour les francophones : "journalist" se prononce "DJER-ne-list" (pas "jour-na-list"), "editorial" = "e-di-TOR-i-al" (accent sur "TOR", pas "e"), "censorship" = "SEN-ser-chip" (le "or" se réduit). "Press" = "press" avec un "e" ouvert, pas "prèce". Maîtriser ces prononciations est essentiel pour discuter de l\'actualité en anglais.',
    examples: [
      { sentence: 'The JER-nalist wrote the article.', translation: 'Le journaliste a écrit l\'article.', isCorrect: true },
      { sentence: 'The jour-NA-list wrote the article.', translation: '', isCorrect: false },
      { sentence: 'She attended the press conference.', translation: 'Elle a assisté à la conférence de presse.', isCorrect: true },
      { sentence: 'Censorship is a threat to democracy.', translation: 'La censure est une menace pour la démocratie.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The jour-NA-list wrote the article.', correct: 'The JER-nalist wrote the article.', explanation: '"Journalist" se prononce "DJER-ne-list" — l\'accent est sur la PREMIÈRE syllabe et le "jour" = "djer", pas "jour" français.' },
      { wrong: 'The e-di-to-RI-al was interesting.', correct: 'The e-di-TOR-i-al was interesting.', explanation: '"Editorial" a l\'accent sur "TOR" : "e-di-TOR-i-al", pas "e-di-to-RI-al".' },
    ],
  },
  conversation: [
    { speaker: 'Oumar', role: 'A', text: 'I want to become a journalist one day.', translation: 'Je veux devenir journaliste un jour.' },
    { speaker: 'Fatou', role: 'B', text: 'That\'s a great career! You\'ll attend press conferences and write editorials.', translation: "C'est une belle carrière ! Tu assisteras à des conférences de presse et écriras des éditoriaux." },
    { speaker: 'Oumar', role: 'A', text: 'I\'m worried about censorship in some countries though.', translation: "Je m'inquiète de la censure dans certains pays cependant." },
    { speaker: 'Fatou', role: 'B', text: 'Yes, freedom of the press is essential. A good journalist fights for the truth.', translation: "Oui, la liberté de la presse est essentielle. Un bon journaliste se bat pour la vérité." },
    { speaker: 'Oumar', role: 'A', text: 'I need to work on my pronunciation. Words like "journalist" are tricky.', translation: "Je dois travailler ma prononciation. Des mots comme « journalist » sont délicats." },
    { speaker: 'Fatou', role: 'B', text: 'Practice makes perfect! Let\'s read some news articles together.', translation: "La pratique rend parfait ! Lisons quelques articles de presse ensemble." },
  ],
  conversationTitle: 'Parler du journalisme',
  pronunciation: [
    { word: 'Journalist', phonetic: '/ˈdʒɜːrnəlɪst/', meaning: 'Journaliste', tip: 'Prononcez "DJER-ne-list" — le "j" = "dj" et l\'accent est sur la PREMIÈRE syllabe. Pas "jour-na-list" !' },
    { word: 'Editorial', phonetic: '/ˌedɪˈtɔːriəl/', meaning: 'Éditorial', tip: 'L\'accent est sur "TOR" : "e-di-TOR-i-al". Pas "e-di-to-RI-al" à la française.' },
    { word: 'Censorship', phonetic: '/ˈsensərʃɪp/', meaning: 'Censure', tip: 'Prononcez "SEN-ser-chip" — le "or" se réduit et le "sh" final = "ch" français.' },
    { word: 'Press', phonetic: '/pres/', meaning: 'Presse', tip: 'Prononcez "PRESS" — le "e" est ouvert comme dans "dress". Pas "prèce" avec un "é" fermé.' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 2: ENVIRONMENT & NATURE (b1-l6 through b1-l10)
// ════════════════════════════════════════════════════════════════════════════════

// ─── b1-l6: Environment Vocabulary (vocabulary) ──────────────────────────────
export const B1_L6: LessonContent = {
  vocab: [
    { english: 'Climate change', french: 'Changement climatique', phonetic: '/ˈklaɪmət tʃeɪndʒ/', example: 'Climate change affects the entire planet.', exampleTranslation: 'Le changement climatique affecte toute la planète.' },
    { english: 'Pollution', french: 'Pollution', phonetic: '/pəˈluːʃən/', example: 'Air pollution is a major problem in cities.', exampleTranslation: 'La pollution de l\'air est un problème majeur en ville.' },
    { english: 'Recycle', french: 'Recycler', phonetic: '/riːˈsaɪkl/', example: 'We should recycle more plastic and paper.', exampleTranslation: 'Nous devrions recycler plus de plastique et de papier.' },
    { english: 'Conservation', french: 'Conservation', phonetic: '/ˌkɑːnsərˈveɪʃən/', example: 'Wildlife conservation protects endangered species.', exampleTranslation: 'La conservation de la faune protège les espèces en danger.' },
    { english: 'Sustainable', french: 'Durable / Viable', phonetic: '/səˈsteɪnəbl/', example: 'We need sustainable development for the future.', exampleTranslation: 'Nous avons besoin d\'un développement durable pour l\'avenir.' },
  ],
  grammar: {
    title: 'Vocabulaire de l\'environnement — Collocations essentielles',
    explanation: 'Le vocabulaire de l\'environnement utilise des collocations fixes : "combat climate change" (combattre le changement climatique), "reduce pollution" (réduire la pollution), "protect the environment" (protéger l\'environnement), "raise awareness" (sensibiliser). ATTENTION : "conservation" en anglais = protection de la nature, pas la même chose qu\'en français (préservation). "Sustainable" = durable/viable : "sustainable energy" (énergie renouvelable), "sustainable development" (développement durable).',
    examples: [
      { sentence: 'We must reduce pollution to protect the environment.', translation: 'Nous devons réduire la pollution pour protéger l\'environnement.', isCorrect: true },
      { sentence: 'She works in the conservation of the nature.', translation: '', isCorrect: false },
      { sentence: 'Sustainable development is essential for our future.', translation: 'Le développement durable est essentiel pour notre avenir.', isCorrect: true },
      { sentence: 'Recycling helps combat climate change.', translation: 'Le recyclage aide à combattre le changement climatique.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She works in the conservation of the nature.', correct: 'She works in nature conservation.', explanation: 'On dit "nature conservation" (nom composé), pas "conservation of the nature". L\'article "the" n\'est pas nécessaire devant "nature" dans ce contexte.' },
      { wrong: 'We must make sustainable the environment.', correct: 'We must protect the environment sustainably.', explanation: '"Sustainable" est un adjectif, pas un verbe. On dit "sustainable development", "live sustainably", "protect sustainably".' },
    ],
  },
  conversation: [
    { speaker: 'Amina', role: 'A', text: 'What do you do to help the environment?', translation: 'Que fais-tu pour aider l\'environnement ?' },
    { speaker: 'Kofi', role: 'B', text: 'I recycle plastic and paper. I also try to reduce my energy consumption.', translation: 'Je recycle le plastique et le papier. J\'essaie aussi de réduire ma consommation d\'énergie.' },
    { speaker: 'Amina', role: 'A', text: 'That\'s great! Climate change is such an urgent issue.', translation: "C'est super ! Le changement climatique est un problème si urgent." },
    { speaker: 'Kofi', role: 'B', text: 'I know. We need more sustainable solutions. Conservation is important too.', translation: "Je sais. Nous avons besoin de solutions plus durables. La conservation est importante aussi." },
    { speaker: 'Amina', role: 'A', text: 'I attended a conference about pollution last week. It was eye-opening.', translation: "J'ai assisté à une conférence sur la pollution la semaine dernière. C'était révélateur." },
    { speaker: 'Kofi', role: 'B', text: 'We should all raise awareness about these issues!', translation: 'Nous devrions tous sensibiliser sur ces questions !' },
  ],
  conversationTitle: 'Discuter de l\'environnement',
  pronunciation: [
    { word: 'Climate', phonetic: '/ˈklaɪmət/', meaning: 'Climat', tip: 'Prononcez "KLAÏ-met" — le "i" est long et le "e" final est réduit. Pas "cli-mat" à la française.' },
    { word: 'Pollution', phonetic: '/pəˈluːʃən/', meaning: 'Pollution', tip: 'Prononcez "pe-LOU-chenn" — l\'accent est sur "LU" et le "tion" = "chenn".' },
    { word: 'Recycle', phonetic: '/riːˈsaɪkl/', meaning: 'Recycler', tip: 'Prononcez "ri-SAÏ-cl" — l\'accent est sur "CY" et le "e" final est muet.' },
    { word: 'Sustainable', phonetic: '/səˈsteɪnəbl/', meaning: 'Durable', tip: 'Prononcez "se-STÉÏ-na-bl" — l\'accent est sur "TAIN" et le "u" se réduit.' },
  ],
}

// ─── b1-l7: First Conditional (grammar) ──────────────────────────────────────
export const B1_L7: LessonContent = {
  vocab: [
    { english: 'Unless', french: 'À moins que', phonetic: '/ənˈles/', example: 'Unless we act now, it will be too late.', exampleTranslation: 'À moins que nous agissions maintenant, il sera trop tard.' },
    { english: 'Threat', french: 'Menace', phonetic: '/θret/', example: 'Climate change is a serious threat.', exampleTranslation: 'Le changement climatique est une menace sérieuse.' },
    { english: 'Impact', french: 'Impact', phonetic: '/ˈɪmpækt/', example: 'The impact of pollution on health is significant.', exampleTranslation: "L'impact de la pollution sur la santé est significatif." },
    { english: 'Rise', french: 'Augmentation / Hausse', phonetic: '/raɪz/', example: 'Sea levels will rise if temperatures increase.', exampleTranslation: 'Le niveau de la mer augmentera si les températures augmentent.' },
    { english: 'Emissions', french: 'Émissions', phonetic: '/ɪˈmɪʃənz/', example: 'Carbon emissions must be reduced.', exampleTranslation: 'Les émissions de carbone doivent être réduites.' },
  ],
  grammar: {
    title: 'Le Premier Conditionnel — If we don\'t act, the climate will change',
    explanation: 'Le premier conditionnel exprime une situation réelle/possible dans l\'avenir : IF + présent simple, WILL + verbe. "If we don\'t act, the climate WILL change" (Si nous n\'agissons pas, le climat changera). "If emissions rise, temperatures WILL increase". On peut inverser : "Temperatures will increase if emissions rise" (sans virgule). VARIANTES : "Unless" = "if not" : "Unless we act" = "If we don\'t act". ATTENTION : dans la phrase avec "if", on utilise le PRÉSENT (pas "will") : "If it WILL rain" est FAUX → "If it rains".',
    examples: [
      { sentence: 'If we reduce emissions, the air quality will improve.', translation: 'Si nous réduisons les émissions, la qualité de l\'air s\'améliorera.', isCorrect: true },
      { sentence: 'If we will not act, the situation will get worse.', translation: '', isCorrect: false },
      { sentence: 'Unless we change our habits, pollution will increase.', translation: 'À moins que nous changions nos habitudes, la pollution augmentera.', isCorrect: true },
      { sentence: 'Sea levels will rise if temperatures continue to increase.', translation: 'Le niveau de la mer augmentera si les températures continuent d\'augmenter.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'If we will not act, the situation will get worse.', correct: 'If we don\'t act, the situation will get worse.', explanation: 'Dans la subordonnée avec "if", on utilise le PRÉSENT, jamais "will". C\'est l\'erreur la plus courante avec les conditionnels !' },
      { wrong: 'Unless we don\'t act, it will be too late.', correct: 'Unless we act, it will be too late.', explanation: '"Unless" = "if not", donc "unless we act" = "if we don\'t act". Ne PAS ajouter "not" après "unless" — ce serait une double négation !' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'What will happen if we don\'t reduce carbon emissions?', translation: 'Que se passera-t-il si nous ne réduisons pas les émissions de carbone ?' },
    { speaker: 'Moussa', role: 'B', text: 'If we don\'t reduce them, global temperatures will rise significantly.', translation: "Si nous ne les réduisons pas, les températures mondiales augmenteront considérablement." },
    { speaker: 'Fatou', role: 'A', text: 'And if temperatures rise, sea levels will rise too.', translation: 'Et si les températures augmentent, le niveau de la mer augmentera aussi.' },
    { speaker: 'Moussa', role: 'B', text: 'Yes. Unless we act now, the impact will be devastating.', translation: 'Oui. À moins que nous agissions maintenant, l\'impact sera dévastateur.' },
    { speaker: 'Fatou', role: 'A', text: 'The threat is real. What can ordinary people do?', translation: "La menace est réelle. Que peuvent faire les gens ordinaires ?" },
    { speaker: 'Moussa', role: 'B', text: 'If everyone recycles and saves energy, it will make a difference.', translation: 'Si chacun recycle et économise l\'énergie, cela fera une différence.' },
  ],
  conversationTitle: 'Les conséquences du changement climatique',
  pronunciation: [
    { word: 'Unless', phonetic: '/ənˈles/', meaning: 'À moins que', tip: 'Prononcez "en-LESS" — l\'accent est sur "LESS" et le premier son est réduit.' },
    { word: 'Threat', phonetic: '/θret/', meaning: 'Menace', tip: 'Le "th" est crucial : langue entre les dents, soufflez. "THRET". Pas "tret" ni "zret" !' },
    { word: 'Emissions', phonetic: '/ɪˈmɪʃənz/', meaning: 'Émissions', tip: 'Prononcez "i-MI-chenz" — l\'accent est sur "MI" et le "sion" = "chen".' },
    { word: 'Rise', phonetic: '/raɪz/', meaning: 'Augmenter', tip: 'Prononcez "RAÏZ" — le "i" est long et le "s" se prononce "z" sonore.' },
  ],
}

// ─── b1-l8: Environmental Debate (conversation) ─────────────────────────────
export const B1_L8: LessonContent = {
  vocab: [
    { english: 'Renewable energy', french: 'Énergie renouvelable', phonetic: '/rɪˈnuːəbl ˈenərdʒi/', example: 'Solar power is a renewable energy source.', exampleTranslation: "L'énergie solaire est une source d'énergie renouvelable." },
    { english: 'Deforestation', french: 'Déforestation', phonetic: '/diːˌfɒrɪˈsteɪʃən/', example: 'Deforestation destroys animal habitats.', exampleTranslation: 'La déforestation détruit les habitats animaux.' },
    { english: 'Endangered species', french: 'Espèces en danger', phonetic: '/ɪnˈdeɪndʒərd ˈspiːʃiːz/', example: 'Tigers are an endangered species.', exampleTranslation: 'Les tigres sont une espèce en danger.' },
    { english: 'Carbon footprint', french: 'Empreinte carbone', phonetic: '/ˈkɑːrbən ˈfʊtprɪnt/', example: 'We should reduce our carbon footprint.', exampleTranslation: 'Nous devrions réduire notre empreinte carbone.' },
    { english: 'Global warming', french: 'Réchauffement climatique', phonetic: '/ˈɡloʊbl ˈwɔːrmɪŋ/', example: 'Global warming is caused by greenhouse gases.', exampleTranslation: "Le réchauffement climatique est causé par les gaz à effet de serre." },
  ],
  grammar: {
    title: 'Débattre de l\'environnement — Langage de l\'argumentation',
    explanation: 'Pour débattre de l\'environnement, utilisez : "I strongly believe that..." (Je crois fermement que...), "It is undeniable that..." (Il est indéniable que...), "The evidence shows that..." (Les preuves montrent que...). Pour opposer : "However..." (Cependant...), "On the contrary..." (Au contraire...), "Despite this..." (Malgré cela...). Pour conclure : "In conclusion..." (En conclusion...), "Therefore..." (Par conséquent...), "We must take action before..." (Nous devons agir avant que...).',
    examples: [
      { sentence: 'I strongly believe that renewable energy is the solution.', translation: "Je crois fermement que l'énergie renouvelable est la solution.", isCorrect: true },
      { sentence: 'Despite of the costs, we must act now.', translation: '', isCorrect: false },
      { sentence: 'The evidence shows that deforestation increases carbon emissions.', translation: 'Les preuves montrent que la déforestation augmente les émissions de carbone.', isCorrect: true },
      { sentence: 'However, some people argue that the economy is the priority.', translation: "Cependant, certains soutiennent que l'économie est la priorité.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Despite of the costs, we must act now.', correct: 'Despite the costs, we must act now.', explanation: 'On dit "despite" + nom, SANS "of". Ou "in spite of" + nom. Mais JAMAIS "despite of".' },
      { wrong: 'We must take action before it will be too late.', correct: 'We must take action before it is too late.', explanation: 'Après "before", "after", "until", "when" (connecteurs de temps), on utilise le présent, pas "will".' },
    ],
  },
  conversation: [
    { speaker: 'Aïcha', role: 'A', text: 'I strongly believe that renewable energy is our best option.', translation: "Je crois fermement que l'énergie renouvelable est notre meilleure option." },
    { speaker: 'Youssef', role: 'B', text: 'I agree. However, the transition is expensive. Despite the costs, we must act.', translation: "Je suis d'accord. Cependant, la transition est coûteuse. Malgré les coûts, nous devons agir." },
    { speaker: 'Aïcha', role: 'A', text: 'The evidence shows that global warming is accelerating. Endangered species are increasing.', translation: "Les preuves montrent que le réchauffement climatique s'accélère. Les espèces en danger augmentent." },
    { speaker: 'Youssef', role: 'B', text: 'On the contrary, some people still deny climate change. It\'s hard to understand.', translation: "Au contraire, certaines personnes nient encore le changement climatique. C'est difficile à comprendre." },
    { speaker: 'Aïcha', role: 'A', text: 'Deforestation is a major cause. We should reduce our carbon footprint.', translation: "La déforestation est une cause majeure. Nous devrions réduire notre empreinte carbone." },
    { speaker: 'Youssef', role: 'B', text: 'Therefore, in conclusion, we must all take responsibility for the environment.', translation: "Par conséquent, en conclusion, nous devons tous prendre nos responsabilités envers l'environnement." },
  ],
  conversationTitle: 'Débattre des solutions environnementales',
  pronunciation: [
    { word: 'Renewable', phonetic: '/rɪˈnuːəbl/', meaning: 'Renouvelable', tip: 'Prononcez "ri-NOU-a-bl" — l\'accent est sur "NEW" et le son "ou" est long.' },
    { word: 'Deforestation', phonetic: '/diːˌfɒrɪˈsteɪʃən/', meaning: 'Déforestation', tip: 'Prononcez "di-fo-ri-STÉÿ-chenne" — l\'accent est sur "STA" et le "tion" = "chenne".' },
    { word: 'Footprint', phonetic: '/ˈfʊtprɪnt/', meaning: 'Empreinte', tip: 'Prononcez "FOUT-print" — le "oo" est court comme dans "book" et le "i" est bref.' },
    { word: 'Warming', phonetic: '/ˈwɔːrmɪŋ/', meaning: 'Réchauffement', tip: 'Prononcez "WOR-ming" — le "ar" est long comme dans "port" et le "ng" final : langue contre le palais.' },
  ],
}

// ─── b1-l9: Relative Clauses (grammar) ──────────────────────────────────────
export const B1_L9: LessonContent = {
  vocab: [
    { english: 'Which', french: 'Qui/Lequel (chose)', phonetic: '/wɪtʃ/', example: 'The river which flows through the city is polluted.', exampleTranslation: 'La rivière qui traverse la ville est polluée.' },
    { english: 'Who', french: 'Qui (personne)', phonetic: '/huː/', example: 'The scientists who study climate change are worried.', exampleTranslation: 'Les scientifiques qui étudient le changement climatique sont inquiets.' },
    { english: 'Where', french: 'Où (lieu)', phonetic: '/wer/', example: 'The city where I live has clean air.', exampleTranslation: 'La ville où j\'habite a un air pur.' },
    { english: 'Whose', french: 'Dont / Dont le(s)', phonetic: '/huːz/', example: 'The company whose factory polluted the river was fined.', exampleTranslation: "L'entreprise dont l'usine a pollué la rivière a été condamnée à une amende." },
    { english: 'That', french: 'Qui/Que (les deux)', phonetic: '/ðæt/', example: 'The planet that we live on is fragile.', exampleTranslation: 'La planète sur laquelle nous vivons est fragile.' },
  ],
  grammar: {
    title: 'Les Propositions Relatives — The planet which we live on is fragile',
    explanation: 'Les propositions relatives donnent des informations supplémentaires sur un nom : "The planet WHICH we live on is fragile" (La planète SUR LAQUELLE nous vivons est fragile). QUI/QUE : "who" pour les personnes, "which" pour les choses, "that" pour les deux. "Where" pour les lieux, "whose" pour la possession. PROPOSITIONS DÉFINITIVES (sans virgule) : essentielles pour identifier → "The scientist who discovered this won a prize". PROPOSITIONS NON DÉFINITIVES (avec virgule) : information supplémentaire → "Paris, which is the capital of France, is beautiful". ATTENTION : avec les propositions non définitives, on ne PEUT PAS utiliser "that".',
    examples: [
      { sentence: 'The river which flows through the city is polluted.', translation: 'La rivière qui traverse la ville est polluée.', isCorrect: true },
      { sentence: 'Paris, that is the capital of France, is beautiful.', translation: '', isCorrect: false },
      { sentence: 'The scientist whose research changed the world gave a talk.', translation: 'Le scientifique dont la recherche a changé le monde a donné une conférence.', isCorrect: true },
      { sentence: 'This is the place where we found the rare species.', translation: "C'est l'endroit où nous avons trouvé l'espèce rare.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Paris, that is the capital of France, is beautiful.', correct: 'Paris, which is the capital of France, is beautiful.', explanation: 'Dans les propositions non définitives (avec virgules), on NE PEUT PAS utiliser "that". On doit utiliser "which" pour les choses.' },
      { wrong: 'The people which work here are friendly.', correct: 'The people who work here are friendly.', explanation: '"Who" pour les personnes, "which" pour les choses. On ne dit PAS "people which".' },
    ],
  },
  conversation: [
    { speaker: 'Oumar', role: 'A', text: 'Have you seen the documentary which was broadcast last night?', translation: 'As-tu vu le documentaire qui a été diffusé hier soir ?' },
    { speaker: 'Mariama', role: 'B', text: 'Yes! The scientist who was interviewed made some excellent points.', translation: 'Oui ! Le scientifique qui a été interviewé a fait d\'excellents points.' },
    { speaker: 'Oumar', role: 'A', text: 'The region where they filmed is suffering from deforestation.', translation: 'La région où ils ont filmé souffre de la déforestation.' },
    { speaker: 'Mariama', role: 'B', text: 'I know. The company whose factory was there was closed down.', translation: "Je sais. L'entreprise dont l'usine était là-bas a été fermée." },
    { speaker: 'Oumar', role: 'A', text: 'That\'s good news! The animals that lived there can now recover.', translation: "C'est une bonne nouvelle ! Les animaux qui vivaient là-bas peuvent maintenant se rétablir." },
    { speaker: 'Mariama', role: 'B', text: 'Yes. We need more places where nature can thrive.', translation: 'Oui. Nous avons besoin de plus d\'endroits où la nature peut prospérer.' },
  ],
  conversationTitle: 'Discuter des problèmes environnementaux',
  pronunciation: [
    { word: 'Which', phonetic: '/wɪtʃ/', meaning: 'Qui/Lequel', tip: 'Prononcez "OUITCH" — le "w" initial en arrondissant les lèvres. Pas "vitch" !' },
    { word: 'Whose', phonetic: '/huːz/', meaning: 'Dont', tip: 'Prononcez "HOUZ" — le "h" est expiré et le "oo" est long. Pas "ouz".' },
    { word: 'That', phonetic: '/ðæt/', meaning: 'Qui/Que', tip: 'Le "th" est sonore : langue entre les dents, vibrez. "DHAT". Pas "zat" ni "dat".' },
    { word: 'Where', phonetic: '/wer/', meaning: 'Où', tip: 'Prononcez "OUER" — le "w" initial en arrondissant les lèvres. Pas "vère" !' },
  ],
}

// ─── b1-l10: Environment Sounds (pronunciation) ─────────────────────────────
export const B1_L10: LessonContent = {
  vocab: [
    { english: 'Ecosystem', french: 'Écosystème', phonetic: '/ˈiːkoʊsɪstəm/', example: 'The ecosystem is very fragile.', exampleTranslation: "L'écosystème est très fragile." },
    { english: 'Biodiversity', french: 'Biodiversité', phonetic: '/ˌbaɪoʊdaɪˈvɜːrsəti/', example: 'Biodiversity is essential for the planet.', exampleTranslation: 'La biodiversité est essentielle pour la planète.' },
    { english: 'Atmosphere', french: 'Atmosphère', phonetic: '/ˈætməsfɪr/', example: 'Gases in the atmosphere trap heat.', exampleTranslation: 'Les gaz dans l\'atmosphère emprisonnent la chaleur.' },
    { english: 'Greenhouse effect', french: 'Effet de serre', phonetic: '/ˈɡriːnhaʊs ɪˈfekt/', example: 'The greenhouse effect causes global warming.', exampleTranslation: "L'effet de serre cause le réchauffement climatique." },
  ],
  grammar: {
    title: 'Prononciation des termes environnementaux — Mots longs et accents',
    explanation: 'Les termes environnementaux sont souvent longs et l\'accent tonique est crucial : "Ecosystem" = "I-ko-sis-tem" (accent sur "I"), "Biodiversity" = "baï-o-di-VER-si-ti" (accent sur "VER"), "Atmosphere" = "AT-mes-fir" (accent sur "AT", 3 syllabes, pas 4). "Greenhouse" = "GRIN-haous" (accent sur "GREEN"). Maîtriser l\'accent tonique est essentiel pour être compris quand on parle d\'écologie en anglais.',
    examples: [
      { sentence: 'The E-co-sys-tem is fragile.', translation: "L'écosystème est fragile.", isCorrect: true },
      { sentence: 'The e-co-SYS-tem is fragile.', translation: '', isCorrect: false },
      { sentence: 'Biodiversity is decreasing rapidly.', translation: 'La biodiversité diminue rapidement.', isCorrect: true },
      { sentence: 'The greenhouse effect is well documented.', translation: "L'effet de serre est bien documenté.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The e-co-SYS-tem is fragile.', correct: 'The I-co-sys-tem is fragile.', explanation: '"Ecosystem" a l\'accent sur la PREMIÈRE syllabe : "I-ko-sis-tem", pas "e-ko-SIS-tem".' },
      { wrong: 'The a-mos-FEAR is polluted.', correct: 'The AT-mes-fear is polluted.', explanation: '"Atmosphere" a l\'accent sur la PREMIÈRE syllabe : "AT-mes-fir", pas "a-mos-FEAR".' },
    ],
  },
  conversation: [
    { speaker: 'Idrissa', role: 'A', text: 'The ecosystem in this region is unique.', translation: "L'écosystème dans cette région est unique." },
    { speaker: 'Fatou', role: 'B', text: 'Yes, the biodiversity here is incredible. We must protect it.', translation: "Oui, la biodiversité ici est incroyable. Nous devons la protéger." },
    { speaker: 'Idrissa', role: 'A', text: 'The atmosphere is getting warmer because of the greenhouse effect.', translation: "L'atmosphère se réchauffe à cause de l'effet de serre." },
    { speaker: 'Fatou', role: 'B', text: 'I know. That\'s why renewable energy is so important for our future.', translation: "Je sais. C'est pourquoi l'énergie renouvelable est si importante pour notre avenir." },
    { speaker: 'Idrissa', role: 'A', text: 'We should plant more trees. Deforestation is destroying habitats.', translation: "Nous devrions planter plus d'arbres. La déforestation détruit les habitats." },
    { speaker: 'Fatou', role: 'B', text: 'Absolutely. Every small action helps preserve our planet.', translation: "Absolument. Chaque petite action aide à préserver notre planète." },
  ],
  conversationTitle: 'Protéger notre planète',
  pronunciation: [
    { word: 'Ecosystem', phonetic: '/ˈiːkoʊsɪstəm/', meaning: 'Écosystème', tip: 'L\'accent est sur "I" : "I-ko-sis-tem". Pas "e-ko-SIS-tem" !' },
    { word: 'Biodiversity', phonetic: '/ˌbaɪoʊdaɪˈvɜːrsəti/', meaning: 'Biodiversité', tip: 'L\'accent est sur "VER" : "baï-o-di-VER-si-ti". 6 syllabes !' },
    { word: 'Atmosphere', phonetic: '/ˈætməsfɪr/', meaning: 'Atmosphère', tip: 'L\'accent est sur "AT" : "AT-mes-fir". Seulement 3 syllabes, pas 4 !' },
    { word: 'Greenhouse', phonetic: '/ˈɡriːnhaʊs/', meaning: 'Serre', tip: 'Prononcez "GRIN-haous" — l\'accent est sur "GREEN" et "house" = "haous".' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 3: RELATIONSHIPS & EMOTIONS (b1-l11 through b1-l15)
// ════════════════════════════════════════════════════════════════════════════════

// ─── b1-l11: Emotions Vocabulary (vocabulary) ────────────────────────────────
export const B1_L11: LessonContent = {
  vocab: [
    { english: 'Frustration', french: 'Frustration', phonetic: '/frʌˈstreɪʃən/', example: 'He expressed his frustration with the situation.', exampleTranslation: 'Il a exprimé sa frustration face à la situation.' },
    { english: 'Gratitude', french: 'Gratitude / Reconnaissance', phonetic: '/ˈɡrætɪtjuːd/', example: 'She showed her gratitude with a heartfelt letter.', exampleTranslation: 'Elle a montré sa gratitude avec une lettre touchante.' },
    { english: 'Anxiety', french: 'Anxiété', phonetic: '/æŋˈzaɪəti/', example: 'Many students experience anxiety before exams.', exampleTranslation: 'Beaucoup d\'étudiants ressentent de l\'anxiété avant les examens.' },
    { english: 'Empathy', french: 'Empathie', phonetic: '/ˈempəθi/', example: 'Empathy helps us understand others\' feelings.', exampleTranslation: "L'empathie nous aide à comprendre les sentiments des autres." },
    { english: 'Relief', french: 'Soulagement', phonetic: '/rɪˈliːf/', example: 'She felt relief after passing the exam.', exampleTranslation: 'Elle a ressenti du soulagement après avoir réussi l\'examen.' },
  ],
  grammar: {
    title: 'Vocabulaire des émotions — Noms et adjectifs',
    explanation: 'Les émotions en anglais existent souvent en paires nom/adjectif : "happiness" → "happy", "frustration" → "frustrated", "anxiety" → "anxious", "gratitude" → "grateful", "relief" → "relieved". ATTENTION : "I am bored" (Je m\'ennuie) ≠ "I am boring" (Je suis ennuyeux). "I am interested" (Ça m\'intéresse) ≠ "I am interesting" (Je suis intéressant). Le premier décrit COMMENT ON SE SENT, le second décrit COMMENT ON EST.',
    examples: [
      { sentence: 'She felt anxious before the interview.', translation: 'Elle se sentait anxieuse avant l\'entretien.', isCorrect: true },
      { sentence: 'I am boring in this class.', translation: '', isCorrect: false },
      { sentence: 'He expressed his gratitude sincerely.', translation: 'Il a exprimé sa gratitude sincèrement.', isCorrect: true },
      { sentence: 'The students were relieved when the exam was over.', translation: 'Les étudiants étaient soulagés quand l\'examen était terminé.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I am boring in this class.', correct: 'I am bored in this class.', explanation: '"Bored" = je m\'ennuie (comment je me sens). "Boring" = je suis ennuyeux (comment je suis). C\'est une erreur très courante !' },
      { wrong: 'She has anxiety about the exam.', correct: 'She feels anxious about the exam. / She has anxiety about the exam.', explanation: 'Les deux sont possibles, mais "feels anxious" est plus naturel dans la conversation. "Anxiety" est plus formel.' },
    ],
  },
  conversation: [
    { speaker: 'Kofi', role: 'A', text: 'How are you feeling about the presentation tomorrow?', translation: 'Comment te sens-tu à propos de la présentation demain ?' },
    { speaker: 'Amina', role: 'B', text: 'Honestly, I feel a lot of anxiety. But I\'m also grateful for the opportunity.', translation: "Honnêtement, je ressens beaucoup d'anxiété. Mais je suis aussi reconnaissante pour l'opportunité." },
    { speaker: 'Kofi', role: 'A', text: 'I understand your frustration. Public speaking is stressful.', translation: "Je comprends ta frustration. Parler en public est stressant." },
    { speaker: 'Amina', role: 'B', text: 'It helps when people show empathy. What about you?', translation: "Ça aide quand les gens montrent de l'empathie. Et toi ?" },
    { speaker: 'Kofi', role: 'A', text: 'I used to be anxious, but now I feel relieved after each presentation.', translation: "J'avais l'habitude d'être anxieux, mais maintenant je me sens soulagé après chaque présentation." },
    { speaker: 'Amina', role: 'B', text: 'That gives me hope! Maybe I\'ll feel relief after tomorrow too.', translation: "Ça me donne de l'espoir ! Peut-être que je ressentirai du soulagement après demain aussi." },
  ],
  conversationTitle: 'Exprimer ses émotions',
  pronunciation: [
    { word: 'Frustration', phonetic: '/frʌˈstreɪʃən/', meaning: 'Frustration', tip: 'L\'accent est sur "STRA" : "freu-STRÉÿ-chenne". Le "u" est ouvert comme dans "cup".' },
    { word: 'Gratitude', phonetic: '/ˈɡrætɪtjuːd/', meaning: 'Reconnaissance', tip: 'L\'accent est sur "GRAT" : "GRAT-i-tioude". Le "a" est très ouvert comme dans "cat".' },
    { word: 'Anxiety', phonetic: '/æŋˈzaɪəti/', meaning: 'Anxiété', tip: 'Prononcez "ang-ZAÏ-e-ti" — le "x" = "gz" et l\'accent est sur "ZI".' },
    { word: 'Empathy', phonetic: '/ˈempəθi/', meaning: 'Empathie', tip: 'Prononcez "EM-pe-thi" — le "th" est expiré (langue entre les dents). Pas "em-pa-si" !' },
  ],
}

// ─── b1-l12: Second Conditional (grammar) ────────────────────────────────────
export const B1_L12: LessonContent = {
  vocab: [
    { english: 'Apologize', french: 'Présenter des excuses', phonetic: '/əˈpɒlədʒaɪz/', example: 'If I were you, I would apologize.', exampleTranslation: 'Si j\'étais toi, je présenterais des excuses.' },
    { english: 'Forgive', french: 'Pardonner', phonetic: '/fərˈɡɪv/', example: 'Would you forgive someone who lied to you?', exampleTranslation: 'Pardonnerais-tu à quelqu\'un qui t\'a menti ?' },
    { english: 'Compromise', french: 'Compromis / Compromettre', phonetic: '/ˈkɑːmprəmaɪz/', example: 'If we compromised, both sides would be happy.', exampleTranslation: 'Si nous faisions un compromis, les deux parties seraient satisfaites.' },
    { english: 'Trust', french: 'Confiance / Faire confiance', phonetic: '/trʌst/', example: 'If she trusted him, their relationship would improve.', exampleTranslation: 'Si elle lui faisait confiance, leur relation s\'améliorerait.' },
    { english: 'Empathize', french: 'Faire preuve d\'empathie', phonetic: '/ˈempəθaɪz/', example: 'If I were in your shoes, I would empathize.', exampleTranslation: 'Si j\'étais à ta place, je ferais preuve d\'empathie.' },
  ],
  grammar: {
    title: 'Le Deuxième Conditionnel — If I were you, I would apologize',
    explanation: 'Le deuxième conditionnel exprime une situation irréelle ou hypothétique : IF + passé simple, WOULD + verbe. "If I WERE you, I WOULD apologize" (Si j\'étais toi, je présenterais des excuses). ATTENTION : on dit "If I WERE" (pas "was") dans le conditionnel, même à la première personne ! "If she trusted him, she WOULD forgive him" (Si elle lui faisait confiance, elle lui pardonnerait). Ce conditionnel sert à donner des conseils ("If I were you..."), imaginer des situations différentes, ou exprimer des souhaits irréalistes.',
    examples: [
      { sentence: 'If I were you, I would talk to her.', translation: 'Si j\'étais toi, je lui parlerais.', isCorrect: true },
      { sentence: 'If I was you, I will talk to her.', translation: '', isCorrect: false },
      { sentence: 'If they compromised, they would find a solution.', translation: "S'ils faisaient un compromis, ils trouveraient une solution.", isCorrect: true },
      { sentence: 'Would you forgive him if he apologized?', translation: 'Lui pardonnerais-tu s\'il présentait des excuses ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'If I was you, I will talk to her.', correct: 'If I were you, I would talk to her.', explanation: 'Deux erreurs : 1) "If I WERE" (pas "was") dans le 2e conditionnel. 2) "WOULD" (pas "will") dans la principale. C\'est une situation hypothétique, pas réelle.' },
      { wrong: 'If I would have more time, I would help you.', correct: 'If I had more time, I would help you.', explanation: 'Dans la subordonnée avec "if", on utilise le passé simple ("had"), PAS "would". "Would" ne vient que dans la principale.' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'What would you do if a friend lied to you?', translation: 'Que ferais-tu si un ami te mentait ?' },
    { speaker: 'Moussa', role: 'B', text: 'If I were in that situation, I would try to empathize first.', translation: "Si j'étais dans cette situation, j'essaierais d'abord de faire preuve d'empathie." },
    { speaker: 'Fatou', role: 'A', text: 'Would you forgive them immediately?', translation: 'Leur pardonnerais-tu immédiatement ?' },
    { speaker: 'Moussa', role: 'B', text: 'I would if they apologized sincerely. But if they didn\'t, I wouldn\'t trust them again.', translation: "Je le ferais s'ils s'excusaient sincèrement. Mais s'ils ne le faisaient pas, je ne leur ferais plus confiance." },
    { speaker: 'Fatou', role: 'A', text: 'If we all compromised more, relationships would be easier.', translation: "Si nous faisions tous plus de compromis, les relations seraient plus faciles." },
    { speaker: 'Moussa', role: 'B', text: 'That\'s so true! Trust and empathy are the keys to good relationships.', translation: "C'est si vrai ! La confiance et l'empathie sont les clés de bonnes relations." },
  ],
  conversationTitle: 'Conseils et situations hypothétiques',
  pronunciation: [
    { word: 'Apologize', phonetic: '/əˈpɒlədʒaɪz/', meaning: 'Présenter des excuses', tip: 'Prononcez "e-POL-e-djaïz" — l\'accent est sur "POL" et le "g" doux = "dj".' },
    { word: 'Forgive', phonetic: '/fərˈɡɪv/', meaning: 'Pardonner', tip: 'Prononcez "fer-GIV" — l\'accent est sur "GIVE" et le "i" est court.' },
    { word: 'Compromise', phonetic: '/ˈkɑːmprəmaɪz/', meaning: 'Compromis', tip: 'L\'accent est sur "COM" : "COM-pre-maïz". Pas "com-pro-MIZE" !' },
    { word: 'Trust', phonetic: '/trʌst/', meaning: 'Confiance', tip: 'Prononcez "TREUST" — le "u" est ouvert comme dans "cup". Pas "troust" !' },
  ],
}

// ─── b1-l13: Expressing Feelings (conversation) ─────────────────────────────
export const B1_L13: LessonContent = {
  vocab: [
    { english: 'Overwhelmed', french: 'Dépassé(e) / Submergé(e)', phonetic: '/ˌoʊvərˈwelmd/', example: 'I feel overwhelmed by all my responsibilities.', exampleTranslation: 'Je me sens dépassé(e) par toutes mes responsabilités.' },
    { english: 'Supportive', french: 'Soutenant(e)', phonetic: '/səˈpɔːrtɪv/', example: 'My friends are very supportive.', exampleTranslation: 'Mes amis sont très soutenants.' },
    { english: 'Disappointed', french: 'Déçu(e)', phonetic: '/ˌdɪsəˈpɔɪntɪd/', example: 'I was disappointed by his reaction.', exampleTranslation: "J'ai été déçu(e) par sa réaction." },
    { english: 'Jealous', french: 'Jaloux/Jalouse', phonetic: '/ˈdʒeləs/', example: 'It\'s normal to feel jealous sometimes.', exampleTranslation: "Il est normal de se sentir jaloux parfois." },
    { english: 'Proud', french: 'Fier/Fière', phonetic: '/praʊd/', example: 'I am proud of my achievements.', exampleTranslation: 'Je suis fier/fière de mes accomplissements.' },
  ],
  grammar: {
    title: 'Exprimer ses sentiments — Structures avec adjectifs de sentiment',
    explanation: 'Pour exprimer des sentiments, utilisez ces structures : "I feel + adjectif" (Je me sens...) : "I feel overwhelmed", "I feel disappointed". "I am + adjectif" (Je suis...) : "I am proud of...", "I am jealous of...". ATTENTION aux prépositions : "proud OF" (fier de), "disappointed WITH/BY" (déçu par), "jealous OF" (jaloux de), "worried ABOUT" (inquiété par). "Overwhelmed BY" (dépassé par). Pour adoucir : "I feel a bit..." (Je me sens un peu...), "I\'m quite..." (Je suis assez...).',
    examples: [
      { sentence: 'I am proud of my daughter\'s achievements.', translation: "Je suis fier des accomplissements de ma fille.", isCorrect: true },
      { sentence: 'She is disappointed about her results.', translation: '', isCorrect: false },
      { sentence: 'I feel overwhelmed by all the work.', translation: 'Je me sens dépassé par tout le travail.', isCorrect: true },
      { sentence: 'He is jealous of his brother\'s success.', translation: 'Il est jaloux du succès de son frère.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She is disappointed about her results.', correct: 'She is disappointed with her results.', explanation: 'On dit "disappointed WITH/BY" (pas "about"). "With" est le plus courant pour les résultats.' },
      { wrong: 'I am proud for my friend.', correct: 'I am proud of my friend.', explanation: 'On dit "proud OF", pas "proud for". La préposition "of" est fixe avec "proud".' },
    ],
  },
  conversation: [
    { speaker: 'Aïcha', role: 'A', text: 'You look sad today. How are you feeling?', translation: 'Tu as l\'air triste aujourd\'hui. Comment te sens-tu ?' },
    { speaker: 'Youssef', role: 'B', text: 'I feel overwhelmed by everything. Work, family, studies...', translation: 'Je me sens dépassé par tout. Travail, famille, études...' },
    { speaker: 'Aïcha', role: 'A', text: 'I understand. It\'s normal to feel that way. I\'m here to be supportive.', translation: "Je comprends. C'est normal de se sentir ainsi. Je suis là pour te soutenir." },
    { speaker: 'Youssef', role: 'B', text: 'Thank you. I\'m also disappointed with my exam results.', translation: "Merci. Je suis aussi déçu par mes résultats d'examen." },
    { speaker: 'Aïcha', role: 'A', text: 'Don\'t be too hard on yourself. You should be proud of what you\'ve accomplished!', translation: "Ne sois pas trop dur avec toi-même. Tu devrais être fier de ce que tu as accompli !" },
    { speaker: 'Youssef', role: 'B', text: 'You\'re right. I\'m jealous of people who seem to manage everything easily, though.', translation: "Tu as raison. Je suis jaloux des gens qui semblent tout gérer facilement, cependant." },
  ],
  conversationTitle: 'Partager ses sentiments',
  pronunciation: [
    { word: 'Overwhelmed', phonetic: '/ˌoʊvərˈwelmd/', meaning: 'Dépassé', tip: 'Prononcez "o-ver-QUELMD" — l\'accent est sur "WELM" et le "-ed" = "d".' },
    { word: 'Disappointed', phonetic: '/ˌdɪsəˈpɔɪntɪd/', meaning: 'Déçu', tip: 'L\'accent est sur "POINT" : "di-se-POIN-tid". Pas "di-sa-poïn-ted" !' },
    { word: 'Jealous', phonetic: '/ˈdʒeləs/', meaning: 'Jaloux', tip: 'Prononcez "DJEL-ess" — le "j" = "dj" et le "ea" = "e" bref. Pas "jé-lous" !' },
    { word: 'Proud', phonetic: '/praʊd/', meaning: 'Fier', tip: 'Prononcez "PRAOUD" — le "ou" = "ao" comme dans "house". Pas "praud" !' },
  ],
}

// ─── b1-l14: Phrasal Verbs: Emotions (vocabulary) ───────────────────────────
export const B1_L14: LessonContent = {
  vocab: [
    { english: 'Cheer up', french: 'Remonter le moral', phonetic: '/tʃɪr ʌp/', example: 'Come on, cheer up! Things will get better.', exampleTranslation: 'Allez, remonte le moral ! Les choses iront mieux.' },
    { english: 'Calm down', french: 'Se calmer', phonetic: '/kɑːm daʊn/', example: 'Please calm down and let\'s talk about it.', exampleTranslation: 'S\'il te plaît, calme-toi et parlons-en.' },
    { english: 'Break down', french: 'S\'effondrer / Craquer', phonetic: '/breɪk daʊn/', example: 'She broke down crying when she heard the news.', exampleTranslation: "Elle s'est effondrée en larmes en entendant la nouvelle." },
    { english: 'Look forward to', french: 'Attendre avec impatience', phonetic: '/lʊk ˈfɔːrwərd tuː/', example: 'I look forward to seeing you again.', exampleTranslation: "J'ai hâte de te revoir." },
    { english: 'Open up', french: 'S\'ouvrir / Se confier', phonetic: '/ˈoʊpən ʌp/', example: 'It took him a long time to open up about his feelings.', exampleTranslation: "Il lui a fallu longtemps pour s'ouvrir sur ses sentiments." },
  ],
  grammar: {
    title: 'Les Phrasal Verbs des émotions — Cheer up, calm down, break down',
    explanation: 'Les phrasal verbs (verbes à particule) des émotions combinent un verbe + préposition/adverbe : "cheer UP" (remonter le moral), "calm DOWN" (se calmer), "break DOWN" (s\'effondrer), "open UP" (se confier), "look FORWARD TO" (attendre avec impatience). ATTENTION : "look forward to" est suivi du verbe EN -ING : "I look forward to MEETING you" (pas "meet you"). Ces phrasal verbs sont très fréquents dans la conversation anglaise et sont plus naturels que les verbes formels.',
    examples: [
      { sentence: 'She cheered up when she saw her friend.', translation: "Elle s'est remontée le moral en voyant son amie.", isCorrect: true },
      { sentence: 'I look forward to meet you next week.', translation: '', isCorrect: false },
      { sentence: 'He broke down after the argument.', translation: "Il s'est effondré après la dispute.", isCorrect: true },
      { sentence: 'It\'s important to open up to someone you trust.', translation: "Il est important de se confier à quelqu'un en qui on a confiance.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I look forward to meet you next week.', correct: 'I look forward to meeting you next week.', explanation: 'Après "look forward TO", on utilise le gérondif (-ing) : "meeting", pas "meet". Le "to" ici est une préposition, pas l\'infinitif !' },
      { wrong: 'She cheered herself up quickly.', correct: 'She cheered up quickly.', explanation: '"Cheer up" peut être utilisé sans objet : "She cheered up". On peut dire "cheer someone up" mais ce n\'est pas réflexif comme en français.' },
    ],
  },
  conversation: [
    { speaker: 'Mariama', role: 'A', text: 'You seem upset. Do you want to talk about it?', translation: 'Tu as l\'air contrarié. Veux-tu en parler ?' },
    { speaker: 'Oumar', role: 'B', text: 'I broke down yesterday after the argument with my brother. I need to calm down.', translation: "Je me suis effondré hier après la dispute avec mon frère. Je dois me calmer." },
    { speaker: 'Mariama', role: 'A', text: 'Take your time. It takes courage to open up about your feelings.', translation: "Prends ton temps. Il faut du courage pour s'ouvrir sur ses sentiments." },
    { speaker: 'Oumar', role: 'B', text: 'Thanks. I look forward to making peace with him.', translation: "Merci. J'ai hâte de me réconcilier avec lui." },
    { speaker: 'Mariama', role: 'A', text: 'I\'m sure he wants that too. Cheer up! Family is important.', translation: "Je suis sûre qu'il le veut aussi. Remonte le moral ! La famille est importante." },
    { speaker: 'Oumar', role: 'B', text: 'You\'re right. I\'ll call him tonight and try to work things out.', translation: "Tu as raison. Je l'appellerai ce soir et j'essaierai d'arranger les choses." },
  ],
  conversationTitle: 'Gérer ses émotions au quotidien',
  pronunciation: [
    { word: 'Cheer up', phonetic: '/tʃɪr ʌp/', meaning: 'Remonter le moral', tip: 'Prononcez "TCHIR-eup" — le "ch" = "tch" et le "up" avec un "u" très ouvert.' },
    { word: 'Calm down', phonetic: '/kɑːm daʊn/', meaning: 'Se calmer', tip: 'Prononcez "KAM daoun" — le "l" est muet dans "calm" et le "ow" de "down" = "ao".' },
    { word: 'Break down', phonetic: '/breɪk daʊn/', meaning: "S'effondrer", tip: 'Prononcez "BRÉÏK daoun" — le "ea" = "éi" comme dans "day".' },
    { word: 'Open up', phonetic: '/ˈoʊpən ʌp/', meaning: "S'ouvrir", tip: 'Prononcez "O-pen eup" — le "o" est long et le "up" avec un "u" ouvert.' },
  ],
}

// ─── b1-l15: Emotion Sounds (pronunciation) ────────────────────────────────
export const B1_L15: LessonContent = {
  vocab: [
    { english: 'Melancholy', french: 'Mélancolie', phonetic: '/ˈmelənkɑːli/', example: 'There was a sense of melancholy in his voice.', exampleTranslation: "Il y avait une pointe de mélancolie dans sa voix." },
    { english: 'Enthusiasm', french: 'Enthousiasme', phonetic: '/ɪnˈθjuːziæzəm/', example: 'She showed great enthusiasm for the project.', exampleTranslation: "Elle a montré un grand enthousiasme pour le projet." },
    { english: 'Resentment', french: 'Ressentiment', phonetic: '/rɪˈzentmənt/', example: 'Resentment can destroy relationships.', exampleTranslation: 'Le ressentiment peut détruire les relations.' },
    { english: 'Affection', french: 'Affection / Tendresse', phonetic: '/əˈfekʃən/', example: 'They show affection in different ways.', exampleTranslation: 'Ils montrent leur affection de différentes manières.' },
  ],
  grammar: {
    title: 'Prononciation des émotions — Mots difficiles pour francophones',
    explanation: 'Les mots d\'émotion ont des pièges de prononciation : "Melancholy" = "ME-leu-ko-li" (accent sur "MEL", pas "cho"), "Enthusiasm" = "en-THOU-zi-a-zem" (accent sur "THOU", le "h" est expiré), "Resentment" = "ri-ZENT-ment" (accent sur "ZENT"), "Affection" = "e-FEK-chenne" (le "tion" = "chenne"). Maîtriser ces prononciations vous aidera à exprimer vos sentiments clairement en anglais.',
    examples: [
      { sentence: 'She spoke with MEL-ancholy in her voice.', translation: 'Elle parlait avec de la mélancolie dans sa voix.', isCorrect: true },
      { sentence: 'He showed great en-THOU-siasm.', translation: '', isCorrect: false },
      { sentence: 'Their affection for each other is obvious.', translation: 'Leur affection l\'un pour l\'autre est évidente.', isCorrect: true },
      { sentence: 'Resentment built up over the years.', translation: 'Le ressentiment s\'est accumulé au fil des années.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'He showed great en-THOU-siasm.', correct: 'He showed great en-THOU-zi-a-zem.', explanation: '"Enthusiasm" se prononce "en-THOU-zi-a-zem" — l\'accent est sur "THU" et le "s" = "z" sonore. Pas "en-thou-si-asme" à la française !' },
      { wrong: 'She felt me-LAN-cho-ly.', correct: 'She felt MEL-an-cho-ly.', explanation: '"Melancholy" a l\'accent sur la PREMIÈRE syllabe : "MEL-an-ko-li", pas "me-LAN-cho-li".' },
    ],
  },
  conversation: [
    { speaker: 'Idrissa', role: 'A', text: 'I sense some melancholy in that song.', translation: 'Je ressens de la mélancolie dans cette chanson.' },
    { speaker: 'Fatou', role: 'B', text: 'Yes, it\'s beautiful but sad. What emotions do you feel when you hear it?', translation: 'Oui, c\'est beau mais triste. Quelles émotions ressens-tu en l\'entendant ?' },
    { speaker: 'Idrissa', role: 'A', text: 'A mix of enthusiasm for the music and affection for the memories.', translation: "Un mélange d'enthousiasme pour la musique et d'affection pour les souvenirs." },
    { speaker: 'Fatou', role: 'B', text: 'Music is powerful. It can even help release resentment.', translation: "La musique est puissante. Elle peut même aider à libérer le ressentiment." },
    { speaker: 'Idrissa', role: 'A', text: 'That\'s true. I feel relieved when I express my emotions through art.', translation: "C'est vrai. Je me sens soulagé quand j'exprime mes émotions à travers l'art." },
    { speaker: 'Fatou', role: 'B', text: 'We should all find healthy ways to express our feelings!', translation: 'Nous devrions tous trouver des moyens sains d\'exprimer nos sentiments !' },
  ],
  conversationTitle: 'Les émotions dans l\'art',
  pronunciation: [
    { word: 'Melancholy', phonetic: '/ˈmelənkɑːli/', meaning: 'Mélancolie', tip: 'L\'accent est sur "MEL" : "MEL-eu-ko-li". Pas "me-lan-CHO-li" !' },
    { word: 'Enthusiasm', phonetic: '/ɪnˈθjuːziæzəm/', meaning: 'Enthousiasme', tip: 'L\'accent est sur "THU" : "en-THOU-zi-a-zem". Le "h" est expiré et le "s" = "z".' },
    { word: 'Resentment', phonetic: '/rɪˈzentmənt/', meaning: 'Ressentiment', tip: 'L\'accent est sur "ZENT" : "ri-ZENT-ment". Le premier "e" est réduit.' },
    { word: 'Affection', phonetic: '/əˈfekʃən/', meaning: 'Affection', tip: 'L\'accent est sur "FEK" : "e-FEK-chenne". Le "tion" = "chenne", pas "tion" française.' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 4: CULTURE & TRADITIONS (b1-l16 through b1-l20)
// ════════════════════════════════════════════════════════════════════════════════

// ─── b1-l16: Culture Vocabulary (vocabulary) ────────────────────────────────
export const B1_L16: LessonContent = {
  vocab: [
    { english: 'Festival', french: 'Festival / Fête', phonetic: '/ˈfestɪvl/', example: 'The music festival attracts thousands of visitors.', exampleTranslation: 'Le festival de musique attire des milliers de visiteurs.' },
    { english: 'Custom', french: 'Coutume', phonetic: '/ˈkʌstəm/', example: 'It is a custom to shake hands when meeting someone.', exampleTranslation: "C'est une coutume de serrer la main en rencontrant quelqu'un." },
    { english: 'Heritage', french: 'Patrimoine', phonetic: '/ˈherɪtɪdʒ/', example: 'This building is part of our cultural heritage.', exampleTranslation: "Ce bâtiment fait partie de notre patrimoine culturel." },
    { english: 'Tradition', french: 'Tradition', phonetic: '/trəˈdɪʃən/', example: 'Every culture has its own traditions.', exampleTranslation: 'Chaque culture a ses propres traditions.' },
    { english: 'Ritual', french: 'Rite / Rituel', phonetic: '/ˈrɪtʃuəl/', example: 'Wedding rituals vary across cultures.', exampleTranslation: 'Les rituels de mariage varient selon les cultures.' },
  ],
  grammar: {
    title: 'Vocabulaire culturel — Coutumes, traditions et patrimoine',
    explanation: 'Les mots culturels ont des nuances importantes : "Custom" = habitude sociale d\'un groupe (serrer la main), "Tradition" = pratique transmise de génération en génération (Noël), "Ritual" = cérémonie formelle avec des étapes précises (mariage religieux), "Heritage" = patrimoine hérité du passé (monuments, langues), "Festival" = célébration publique organisée. ATTENTION : "heritage" est indénombrable (pas "a heritage", mais "cultural heritage"). "Customs" au pluriel peut aussi signifier "la douane".',
    examples: [
      { sentence: 'The festival celebrates our cultural heritage.', translation: 'Le festival célèbre notre patrimoine culturel.', isCorrect: true },
      { sentence: 'We went through the custom at the airport.', translation: '', isCorrect: false },
      { sentence: 'It is a tradition in my family to eat together on Sundays.', translation: "C'est une tradition dans ma famille de manger ensemble le dimanche.", isCorrect: true },
      { sentence: 'The wedding ritual lasted three hours.', translation: 'Le rituel du mariage a duré trois heures.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'We went through the custom at the airport.', correct: 'We went through customs at the airport.', explanation: '"Customs" (au pluriel) = la douane. "Custom" (au singulier) = une coutume. Ce sont des mots différents !' },
      { wrong: 'This is a heritage building.', correct: 'This is a heritage site. / This building is part of our heritage.', explanation: '"Heritage" est généralement indénombrable. On dit "heritage site" ou "part of our heritage", pas "a heritage building".' },
    ],
  },
  conversation: [
    { speaker: 'Kofi', role: 'A', text: 'What festivals do you celebrate in your country?', translation: 'Quels festivals célébrez-vous dans ton pays ?' },
    { speaker: 'Amina', role: 'B', text: 'We have many! The harvest festival is our oldest tradition.', translation: "Nous en avons beaucoup ! Le festival des récoltes est notre plus ancienne tradition." },
    { speaker: 'Kofi', role: 'A', text: 'That sounds fascinating. Is it a religious ritual?', translation: "Cela semble fascinant. Est-ce un rituel religieux ?" },
    { speaker: 'Amina', role: 'B', text: 'Not exactly. It\'s a custom that dates back centuries. It\'s part of our cultural heritage.', translation: "Pas exactement. C'est une coutume qui remonte à des siècles. C'est une partie de notre patrimoine culturel." },
    { speaker: 'Kofi', role: 'A', text: 'In my country, we have a similar tradition. Every family has its own rituals.', translation: "Dans mon pays, nous avons une tradition similaire. Chaque famille a ses propres rituels." },
    { speaker: 'Amina', role: 'B', text: 'That\'s what makes the world interesting — our diverse customs and traditions!', translation: "C'est ce qui rend le monde intéressant — nos coutumes et traditions diverses !" },
  ],
  conversationTitle: 'Découvrir les traditions culturelles',
  pronunciation: [
    { word: 'Festival', phonetic: '/ˈfestɪvl/', meaning: 'Festival', tip: 'L\'accent est sur "FES" : "FES-ti-vl". Le "a" du milieu disparaît presque. Pas "fes-ti-VAL" !' },
    { word: 'Custom', phonetic: '/ˈkʌstəm/', meaning: 'Coutume', tip: 'Prononcez "KEUS-tem" — le "u" est ouvert comme dans "cup".' },
    { word: 'Heritage', phonetic: '/ˈherɪtɪdʒ/', meaning: 'Patrimoine', tip: 'Prononcez "HÉ-ri-tidj" — le "h" est expiré et le "ge" final = "dj".' },
    { word: 'Ritual', phonetic: '/ˈrɪtʃuəl/', meaning: 'Rituel', tip: 'Prononcez "RI-tchou-el" — le "tu" = "tchou" et l\'accent est sur "RI".' },
  ],
}

// ─── b1-l17: Past Perfect (grammar) ─────────────────────────────────────────
export const B1_L17: LessonContent = {
  vocab: [
    { english: 'By the time', french: 'Au moment où', phonetic: '/baɪ ðə taɪm/', example: 'By the time we arrived, the ceremony had started.', exampleTranslation: 'Au moment où nous sommes arrivés, la cérémonie avait déjà commencé.' },
    { english: 'Already', french: 'Déjà', phonetic: '/ɔːlˈredi/', example: 'She had already left when I called.', exampleTranslation: 'Elle était déjà partie quand j\'ai appelé.' },
    { english: 'Before', french: 'Avant', phonetic: '/bɪˈfɔːr/', example: 'He had never seen snow before that day.', exampleTranslation: "Il n'avait jamais vu la neige avant ce jour-là." },
    { english: 'Experienced', french: 'Vécu / Expérimenté', phonetic: '/ɪkˈspɪriənst/', example: 'They had experienced many traditions before moving here.', exampleTranslation: "Ils avaient vécu beaucoup de traditions avant de déménager ici." },
    { english: 'Discovered', french: 'Découvert', phonetic: '/dɪˈskʌvərd/', example: 'We had discovered the custom long before the festival.', exampleTranslation: 'Nous avions découvert la coutume bien avant le festival.' },
  ],
  grammar: {
    title: 'Le Past Perfect — She had never seen snow before that day',
    explanation: 'Le Past Perfect exprime une action passée antérieure à une autre action passée : sujet + HAD + participe passé. "She HAD never SEEN snow before that day" (Elle n\'avait jamais vu la neige avant ce jour-là). L\'action la plus ancienne est au Past Perfect, l\'action plus récente est au Past Simple. "By the time we arrived (Past Simple), the ceremony HAD started (Past Perfect)". Marqueurs : "by the time", "already", "before", "after", "never". Formation : had + participe passé (régulier: -ed, irrégulier: seen, gone, eaten).',
    examples: [
      { sentence: 'By the time we arrived, the festival had already begun.', translation: 'Au moment où nous sommes arrivés, le festival avait déjà commencé.', isCorrect: true },
      { sentence: 'She had went to the market before we came.', translation: '', isCorrect: false },
      { sentence: 'They had never experienced a traditional wedding before that day.', translation: "Ils n'avaient jamais vécu de mariage traditionnel avant ce jour-là.", isCorrect: true },
      { sentence: 'He had discovered the custom long before he moved there.', translation: "Il avait découvert la coutume bien avant d'y déménager.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She had went to the market before we came.', correct: 'She had gone to the market before we came.', explanation: 'Le Past Perfect utilise le PARTICIPE PASSÉ : "gone" (pas "went"). "Went" est le Past Simple. Go → went → gone.' },
      { wrong: 'By the time she had arrived, we left.', correct: 'By the time she arrived, we had left.', explanation: 'L\'action la PLUS ANCIENNE est au Past Perfect. "We left" est plus ancien → "we HAD left". "She arrived" est plus récent → Past Simple.' },
    ],
  },
  conversation: [
    { speaker: 'Youssef', role: 'A', text: 'Had you ever experienced a traditional Japanese tea ceremony before?', translation: 'Avais-tu déjà vécu une cérémonie traditionnelle du thé japonaise avant ?' },
    { speaker: 'Aïcha', role: 'B', text: 'No, I hadn\'t! By the time I visited Japan, I had only read about it.', translation: "Non ! Au moment où j'ai visité le Japon, j'en avais seulement lu." },
    { speaker: 'Youssef', role: 'A', text: 'I had already discovered their customs before I went there. A friend had told me.', translation: "J'avais déjà découvert leurs coutumes avant d'y aller. Un ami m'en avait parlé." },
    { speaker: 'Aïcha', role: 'B', text: 'That\'s helpful! Had she experienced it herself?', translation: "C'est utile ! L'avait-elle vécu elle-même ?" },
    { speaker: 'Youssef', role: 'A', text: 'Yes, she had lived in Japan for two years. She had participated in many rituals.', translation: "Oui, elle avait vécu au Japon pendant deux ans. Elle avait participé à de nombreux rituels." },
    { speaker: 'Aïcha', role: 'B', text: 'Amazing! Culture is so rich when you discover it firsthand.', translation: "Incroyable ! La culture est si riche quand on la découvre directement." },
  ],
  conversationTitle: 'Expériences culturelles passées',
  pronunciation: [
    { word: 'Already', phonetic: '/ɔːlˈredi/', meaning: 'Déjà', tip: 'Prononcez "OL-RÉ-di" — l\'accent est sur "REA" et le "l" est sombre (velar L).' },
    { word: 'Experienced', phonetic: '/ɪkˈspɪriənst/', meaning: 'Vécu', tip: 'Prononcez "ik-SPI-ri-enst" — l\'accent est sur "SPI" et le "-ed" = "t".' },
    { word: 'Discovered', phonetic: '/dɪˈskʌvərd/', meaning: 'Découvert', tip: 'Prononcez "di-SKEU-verd" — l\'accent est sur "COV" et le "u" est ouvert.' },
    { word: 'Ceremony', phonetic: '/ˈserəmoʊni/', meaning: 'Cérémonie', tip: 'L\'accent est sur "CER" : "SE-re-mo-ni". Pas "se-re-MO-ni" !' },
  ],
}

// ─── b1-l18: Cultural Exchange (conversation) ───────────────────────────────
export const B1_L18: LessonContent = {
  vocab: [
    { english: 'Cultural exchange', french: 'Échange culturel', phonetic: '/ˈkʌltʃərəl ɪksˈtʃeɪndʒ/', example: 'Cultural exchange programs promote understanding.', exampleTranslation: "Les programmes d'échange culturel favorisent la compréhension." },
    { english: 'Diversity', french: 'Diversité', phonetic: '/daɪˈvɜːrsəti/', example: 'Cultural diversity enriches our society.', exampleTranslation: "La diversité culturelle enrichit notre société." },
    { english: 'Assimilation', french: 'Assimilation', phonetic: '/əˌsɪməˈleɪʃən/', example: 'Assimilation can sometimes erase cultural identity.', exampleTranslation: "L'assimilation peut parfois effacer l'identité culturelle." },
    { english: 'Multicultural', french: 'Multiculturel(le)', phonetic: '/ˌmʌltiˈkʌltʃərəl/', example: 'We live in a multicultural society.', exampleTranslation: "Nous vivons dans une société multiculturelle." },
    { english: 'Respect', french: 'Respect', phonetic: '/rɪˈspekt/', example: 'We must show respect for different traditions.', exampleTranslation: 'Nous devons montrer du respect pour les différentes traditions.' },
  ],
  grammar: {
    title: 'L\'échange culturel — Exprimer la comparaison et le contraste',
    explanation: 'Pour comparer des cultures, utilisez : "In my culture, we... whereas in yours..." (Dans ma culture, nous... tandis que dans la vôtre...), "Unlike in France, in Senegal they..." (Contrairement à la France, au Sénégal ils...), "Both cultures value..." (Les deux cultures valorisent...), "One similarity is that..." (Une similitude est que...), "The main difference is..." (La principale différence est...). Pour contraster : "while" (tandis que), "whereas" (alors que), "on the other hand" (d\'un autre côté).',
    examples: [
      { sentence: 'In my culture, we eat with our hands, whereas in France they use utensils.', translation: "Dans ma culture, nous mangeons avec les mains, tandis qu'en France ils utilisent des couverts.", isCorrect: true },
      { sentence: 'Both cultures have similar traditions of respect.', translation: 'Les deux cultures ont des traditions similaires de respect.', isCorrect: true },
      { sentence: 'Unlike my country, they celebrate New Year in spring.', translation: "Contrairement à mon pays, ils célèbrent le Nouvel An au printemps.", isCorrect: true },
      { sentence: 'While my culture is more individualistic, their culture is more collective.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'While my culture is more individualistic, their culture is more collective.', correct: 'My culture is more individualistic, while/whereas their culture is more collective.', explanation: 'Cette phrase est en fait correcte ! "While" et "whereas" peuvent commencer la phrase. L\'erreur courante est d\'utiliser "contrary to" au lieu de "unlike" : "Contrary to my country..." → "Unlike my country..."' },
      { wrong: 'We must respect to other cultures.', correct: 'We must respect other cultures.', explanation: '"Respect" est un verbe transitif direct : "respect something", pas "respect TO something". Pas de préposition !' },
    ],
  },
  conversation: [
    { speaker: 'Moussa', role: 'A', text: 'I love cultural exchange programs! You learn so much about diversity.', translation: "J'adore les programmes d'échange culturel ! On apprend tellement sur la diversité." },
    { speaker: 'Fatou', role: 'B', text: 'Me too! In my culture, we greet elders first, whereas in some cultures everyone greets at once.', translation: "Moi aussi ! Dans ma culture, nous saluons les aînés en premier, tandis que dans certaines cultures tout le monde salue en même temps." },
    { speaker: 'Moussa', role: 'A', text: 'That\'s interesting. Unlike in my country, here people take off their shoes indoors.', translation: "C'est intéressant. Contrairement à mon pays, ici les gens enlèvent leurs chaussures à l'intérieur." },
    { speaker: 'Fatou', role: 'B', text: 'Both cultures show respect, just in different ways. Multicultural societies are richer.', translation: "Les deux cultures montrent du respect, juste de manières différentes. Les sociétés multiculturelles sont plus riches." },
    { speaker: 'Moussa', role: 'A', text: 'I agree. Assimilation shouldn\'t mean losing your identity. We should celebrate our differences.', translation: "Je suis d'accord. L'assimilation ne devrait pas signifier perdre son identité. Nous devrions célébrer nos différences." },
    { speaker: 'Fatou', role: 'B', text: 'Exactly! Respect for all traditions makes the world a better place.', translation: "Exactement ! Le respect de toutes les traditions rend le monde meilleur." },
  ],
  conversationTitle: 'Échanges et comparaisons culturelles',
  pronunciation: [
    { word: 'Diversity', phonetic: '/daɪˈvɜːrsəti/', meaning: 'Diversité', tip: 'L\'accent est sur "VER" : "di-VER-si-ti". Pas "di-ver-SI-ti" !' },
    { word: 'Multicultural', phonetic: '/ˌmʌltiˈkʌltʃərəl/', meaning: 'Multiculturel', tip: 'L\'accent est sur "CUL" : "meul-ti-KEL-tche-rel".' },
    { word: 'Assimilation', phonetic: '/əˌsɪməˈleɪʃən/', meaning: 'Assimilation', tip: 'L\'accent est sur "LA" : "e-si-me-LÉÿ-chenne".' },
    { word: 'Exchange', phonetic: '/ɪksˈtʃeɪndʒ/', meaning: 'Échange', tip: 'Prononcez "iks-TCHÉÏNDJ" — le "x" = "ks" et le "ch" = "tch".' },
  ],
}

// ─── b1-l19: Used To (grammar) ──────────────────────────────────────────────
export const B1_L19: LessonContent = {
  vocab: [
    { english: 'Used to', french: 'Avait l\'habitude de', phonetic: '/juːst tuː/', example: 'People used to celebrate differently in the past.', exampleTranslation: 'Les gens avaient l\'habitude de célébrer différemment dans le passé.' },
    { english: 'Get used to', french: 'S\'habituer à', phonetic: '/ɡet juːst tuː/', example: 'I\'m getting used to the local customs.', exampleTranslation: "Je m'habitue aux coutumes locales." },
    { english: 'Nomadic', french: 'Nomade', phonetic: '/noʊˈmædɪk/', example: 'Nomadic tribes used to move with the seasons.', exampleTranslation: 'Les tribus nomades avaient l\'habitude de se déplacer avec les saisons.' },
    { english: 'Ancestor', french: 'Ancêtre', phonetic: '/ˈænsestər/', example: 'My ancestors used to live in this village.', exampleTranslation: "Mes ancêtres avaient l'habitude de vivre dans ce village." },
    { english: 'Generation', french: 'Génération', phonetic: '/ˌdʒenəˈreɪʃən/', example: 'Each generation has different customs.', exampleTranslation: 'Chaque génération a des coutumes différentes.' },
  ],
  grammar: {
    title: 'Used To / Get Used To — Habitudes passées et adaptation',
    explanation: '"USED TO + infinitif" = habitude passée qui n\'existe plus : "People USED TO celebrate differently" (Les gens célébraient différemment — mais plus maintenant). Négatif : "People DIDN\'T use to..." ou "People used not to...". Question : "Did people use to...?". ATTENTION : "USED TO" (habitude passée) ≠ "BE USED TO" / "GET USED TO" (être/habituer à). "I\'m used TO waking up early" (Je suis habitué à me lever tôt) — ici "to" est une préposition, suivi du gérondif : "waking", pas "wake".',
    examples: [
      { sentence: 'People used to make their own clothes.', translation: 'Les gens avaient l\'habitude de fabriquer leurs vêtements.', isCorrect: true },
      { sentence: 'I am used to get up early.', translation: '', isCorrect: false },
      { sentence: 'She is getting used to the local food.', translation: "Elle s'habitue à la nourriture locale.", isCorrect: true },
      { sentence: 'Did you use to celebrate this festival as a child?', translation: 'Célébriez-vous ce festival quand vous étiez enfant ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I am used to get up early.', correct: 'I am used to getting up early.', explanation: '"Be used to" + gérondif : "getting up" (pas "get up"). Le "to" ici est une PRÉPOSITION, pas l\'infinitif ! C\'est la confusion la plus courante.' },
      { wrong: 'Did you used to live here?', correct: 'Did you use to live here?', explanation: 'Dans les questions, on dit "Did you USE to" (sans "d"), pas "Did you USED to". L\'auxiliaire "did" porte déjà la marque du passé.' },
    ],
  },
  conversation: [
    { speaker: 'Oumar', role: 'A', text: 'My ancestors used to live in a small village. They were nomadic.', translation: "Mes ancêtres avaient l'habitude de vivre dans un petit village. Ils étaient nomades." },
    { speaker: 'Mariama', role: 'B', text: 'Really? Did they use to move with the seasons?', translation: "Vraiment ? Avaient-ils l'habitude de se déplacer avec les saisons ?" },
    { speaker: 'Oumar', role: 'A', text: 'Yes! But my grandparents\' generation settled down. They didn\'t use to stay in one place before.', translation: "Oui ! Mais la génération de mes grands-parents s'est sédentarisée. Ils n'avaient pas l'habitude de rester au même endroit avant." },
    { speaker: 'Mariama', role: 'B', text: 'I\'m getting used to city life myself. It\'s very different from the countryside.', translation: "Je m'habitue à la vie en ville moi-même. C'est très différent de la campagne." },
    { speaker: 'Oumar', role: 'A', text: 'Are you used to the noise? I still can\'t get used to it!', translation: "Es-tu habitué au bruit ? Je n'arrive toujours pas à m'y habituer !" },
    { speaker: 'Mariama', role: 'B', text: 'Not yet! But each generation adapts differently. Change is part of life.', translation: "Pas encore ! Mais chaque génération s'adapte différemment. Le changement fait partie de la vie." },
  ],
  conversationTitle: 'Traditions passées et adaptation',
  pronunciation: [
    { word: 'Used to', phonetic: '/juːst tuː/', meaning: 'Avait l\'habitude', tip: 'Prononcez "IOUS-te" — le "d" est SILENCIEUX ! Pas "iou-zed-te". C\'est crucial pour être compris.' },
    { word: 'Nomadic', phonetic: '/noʊˈmædɪk/', meaning: 'Nomade', tip: 'Prononcez "no-MAD-ik" — l\'accent est sur "MAD" et le "a" est très ouvert.' },
    { word: 'Ancestor', phonetic: '/ˈænsestər/', meaning: 'Ancêtre', tip: 'Prononcez "AN-ses-ter" — l\'accent est sur "AN". Pas "an-ces-TOR" !' },
    { word: 'Generation', phonetic: '/ˌdʒenəˈreɪʃən/', meaning: 'Génération', tip: 'L\'accent est sur "RA" : "djé-ne-RÉÿ-chenne". Pas "gé-né-ra-tion" à la française !' },
  ],
}

// ─── b1-l20: Culture Sounds (pronunciation) ────────────────────────────────
export const B1_L20: LessonContent = {
  vocab: [
    { english: 'Cuisine', french: 'Cuisine', phonetic: '/kwɪˈziːn/', example: 'French cuisine is famous worldwide.', exampleTranslation: 'La cuisine française est célèbre dans le monde entier.' },
    { english: 'Architecture', french: 'Architecture', phonetic: '/ˈɑːrkɪtektʃər/', example: 'The architecture reflects the local culture.', exampleTranslation: "L'architecture reflète la culture locale." },
    { english: 'Celebration', french: 'Célébration', phonetic: '/ˌselɪˈbreɪʃən/', example: 'The celebration brought the whole community together.', exampleTranslation: 'La célébration a réuni toute la communauté.' },
    { english: 'Ceremony', french: 'Cérémonie', phonetic: '/ˈserəmoʊni/', example: 'The opening ceremony was spectacular.', exampleTranslation: 'La cérémonie d\'ouverture était spectaculaire.' },
  ],
  grammar: {
    title: 'Prononciation des termes culturels — Faux amis et accents',
    explanation: 'Les mots culturels empruntés du français ont souvent une prononciation très différente en anglais : "Cuisine" = "kwi-ZINE" (pas "kü-i-zin"), "Architecture" = "AR-ki-tek-tcher" (accent sur "AR"), "Celebration" = "se-li-BRÉÿ-chenne" (accent sur "BRÉ"), "Ceremony" = "SE-re-mo-ni" (accent sur "SE"). Ces mots sont des faux amis phonétiques — ils s\'écrivent pareil mais se prononcent différemment !',
    examples: [
      { sentence: 'The cui-SINE was excellent.', translation: 'La cuisine était excellente.', isCorrect: true },
      { sentence: 'The KÜ-i-zin was excellent.', translation: '', isCorrect: false },
      { sentence: 'The AR-chi-tec-ture is impressive.', translation: "L'architecture est impressionnante.", isCorrect: true },
      { sentence: 'The celebration was wonderful.', translation: 'La célébration était merveilleuse.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The KÜ-i-zin was excellent.', correct: 'The kwi-ZINE was excellent.', explanation: '"Cuisine" en anglais se prononce "kwi-ZINE" — l\'accent est sur la DEUXIÈME syllabe. Pas "kü-i-zin" à la française !' },
      { wrong: 'The ar-chi-tec-TURE is beautiful.', correct: 'The AR-chi-tec-ture is beautiful.', explanation: '"Architecture" a l\'accent sur la PREMIÈRE syllabe : "AR-ki-tek-tcher", pas "ar-chi-tec-TURE".' },
    ],
  },
  conversation: [
    { speaker: 'Aïcha', role: 'A', text: 'I love discovering the cuisine of different cultures!', translation: "J'adore découvrir la cuisine de différentes cultures !" },
    { speaker: 'Idrissa', role: 'B', text: 'Me too! And the architecture tells so much about a culture\'s history.', translation: "Moi aussi ! Et l'architecture en dit tellement sur l'histoire d'une culture." },
    { speaker: 'Aïcha', role: 'A', text: 'Have you been to any traditional ceremonies abroad?', translation: 'As-tu assisté à des cérémonies traditionnelles à l\'étranger ?' },
    { speaker: 'Idrissa', role: 'B', text: 'Yes! The celebration I attended in India was unforgettable. The ceremony lasted all day.', translation: "Oui ! La célébration à laquelle j'ai assisté en Inde était inoubliable. La cérémonie a duré toute la journée." },
    { speaker: 'Aïcha', role: 'A', text: 'It\'s amazing how diverse cultural expressions can be around the world.', translation: "C'est incroyable comme les expressions culturelles peuvent être diverses dans le monde." },
    { speaker: 'Idrissa', role: 'B', text: 'Absolutely! Every culture has something unique to offer.', translation: 'Absolument ! Chaque culture a quelque chose d\'unique à offrir.' },
  ],
  conversationTitle: 'Explorer les expressions culturelles',
  pronunciation: [
    { word: 'Cuisine', phonetic: '/kwɪˈziːn/', meaning: 'Cuisine', tip: 'Prononcez "kwi-ZINE" — l\'accent est sur "ZINE" et le son "i" est long. Pas "kü-i-zin" !' },
    { word: 'Architecture', phonetic: '/ˈɑːrkɪtektʃər/', meaning: 'Architecture', tip: 'L\'accent est sur "AR" : "AR-ki-tek-tcher". Pas "ar-chi-tec-TURE" !' },
    { word: 'Celebration', phonetic: '/ˌselɪˈbreɪʃən/', meaning: 'Célébration', tip: 'L\'accent est sur "BRÉ" : "se-li-BRÉÿ-chenne". Le "tion" = "chenne".' },
    { word: 'Ceremony', phonetic: '/ˈserəmoʊni/', meaning: 'Cérémonie', tip: 'L\'accent est sur "SE" : "SE-re-mo-ni". Pas "se-re-MO-ni" à la française !' },
  ],
}
