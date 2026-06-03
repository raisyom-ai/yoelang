import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C2 MASTERY — UNIT 7: HUMOR & WIT (c2-l31 through c2-l35)
// YOELANG English Learning App for Francophone Users
// Near-native mastery: irony, satire, wordplay, comedic delivery
// ════════════════════════════════════════════════════════════════════════════════

// ─── c2-l31: Humor Vocabulary — Irony, satire, parody, lampoon ─────────────────
export const C2_L31: LessonContent = {
  vocab: [
    {
      english: 'Lampoon',
      french: 'Pamphlet satirique / Satiriser',
      phonetic: '/læmˈpuːn/',
      example: 'The magazine\'s lampoon of the prime minister\'s oratory was both devastating and exquisitely timed.',
      exampleTranslation: 'Le pamphlet du magazine satirisant l\'oratoire du Premier ministre était à la fois dévastateur et exquisément calé.',
    },
    {
      english: 'Sardonic',
      french: 'Sardonique',
      phonetic: '/sɑːrˈdɒnɪk/',
      example: 'His sardonic smile upon hearing the proposal suggested he found the entire exercise beneath contempt.',
      exampleTranslation: 'Son sourire sardonique en entendant la proposition suggérait qu\'il trouvait l\'exercice tout entier indigne de son mépris.',
    },
    {
      english: 'Facetious',
      french: 'Plaisantin / Facétieux',
      phonetic: '/fəˈsiːʃəs/',
      example: 'Being facetious about a humanitarian crisis is not merely tasteless — it reveals a poverty of imagination.',
      exampleTranslation: 'Être facétieux au sujet d\'une crise humanitaire n\'est pas simplement de mauvais goût — cela révèle une pauvreté d\'imagination.',
    },
    {
      english: 'Droll',
      french: 'Drôle (d\'un humour sec)',
      phonetic: '/droʊl/',
      example: 'There was something droll about the way he recounted his own dismissal, as though it had befallen a stranger.',
      exampleTranslation: 'Il y avait quelque chose de drôle dans la façon dont il racontait son propre renvoi, comme si cela était arrivé à un inconnu.',
    },
    {
      english: 'Mordant',
      french: 'Mordant / Cinglant',
      phonetic: '/ˈmɔːrdənt/',
      example: 'Dorothy Parker\'s mordant wit could reduce the most self-assured socialite to silence in a single sentence.',
      exampleTranslation: 'L\'esprit mordant de Dorothy Parker pouvait réduire au silence la sociale la plus assurée en une seule phrase.',
    },
  ],
  grammar: {
    title: 'L\'ironie verbale et les structures de la satire en anglais',
    explanation: `À un niveau C2, la maîtrise de l'humour anglais passe par la compréhension des structures linguistiques qui sous-tendent l'ironie, la satire et la litote. L'ironie verbale consiste à dire le contraire de ce que l'on pense, mais avec une intonation et un contexte qui signalent l'inversion sémantique. En anglais, plusieurs marqueurs grammaticaux et lexicaux signalent l'ironie : (1) La litote (understatement) : affirmer le contraire en négatif pour amplifier — "not unkind" = très gentil ; "not impossible" = tout à fait possible ; "a not inconsiderable fortune" = une fortune considérable. (2) La double négation ironique : "It\'s not like I\'m thrilled" = Je suis loin d\'être ravi. (3) L\'inversion du registre : utiliser un vocabulaire outrancièrement soutenu pour décrire quelque chose de trivial — "I was momentarily inconvenienced by the apocalypse." (4) Le conditionnel irréel ironique : "If only someone had thought to consult me" = personne ne m\'a consulté et j\'en suis furieux. Ces structures sont omniprésentes dans l\'humour britannique en particulier, où la litote et l\'understatement sont des conventions culturelles majeures.`,
    examples: [
      { sentence: 'Well, that went not entirely according to plan.', translation: 'Eh bien, cela ne s\'est pas exactement passé comme prévu. (litote = cela s\'est très mal passé)', isCorrect: true },
      { sentence: 'If only someone had thought to mention the small matter of the outstanding tax bill.', translation: 'Si seulement quelqu\'un avait pensé à mentionner le petit détail de l\'impôt impayé. (personne ne l\'a fait)', isCorrect: true },
      { sentence: 'He was not unkind.', translation: 'Il n\'était pas sans bonté. (= il était plutôt gentil)', isCorrect: true },
      { sentence: 'The meal was not bad, meaning it was literally below average.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'The meal was not bad, meaning it was literally below average.', correct: 'The meal was not bad. (litote = the meal was quite good)', explanation: 'En anglais britannique, "not bad" est une litote signifiant "assez bon" ou même "excellent". Prendre "not bad" au pied de la lettre comme "en dessous de la moyenne" ignore la convention culturelle de l\'understatement.' },
      { wrong: 'If only someone had thought to tell me, I would have been happy.', correct: 'If only someone had thought to tell me. (la suite est sous-entendue et plus percutante sans être explicitée)', explanation: 'Le conditionnel irrériel ironique gagne en force par ce qui reste non-dit. Ajouter "I would have been happy" affaiblit l\'effet sarcastique en explicitant ce que le contexte rend évident.' },
    ],
  },
  conversation: [
    { speaker: 'Fiona', role: 'A', text: 'Did you catch the minister\'s speech? I thought it was a rather bold exercise in self-satire.', translation: 'As-tu entendu le discours du ministre ? J\'ai trouvé que c\'était un exercice plutôt audacieux d\'autodérision.', },
    { speaker: 'Ravi', role: 'B', text: 'One hesitates to call it satire — that would imply intention. It was more of an inadvertent lampoon of his own policy.', translation: 'On hésite à appeler cela de la satire — cela sous-entendrait une intention. C\'était plutôt un pamphlet involontaire contre sa propre politique.', },
    { speaker: 'Fiona', role: 'A', text: 'True. The mordant tone was entirely accidental, which somehow made it even more devastating.', translation: 'Vrai. Le ton cinglant était entièrement accidentel, ce qui le rendait d\'une certaine façon encore plus dévastateur.', },
    { speaker: 'Ravi', role: 'B', text: 'Much like the sardonic correspondent who wrote that the policy was "not without its detractors" — as though the entire nation hadn\'t signed the petition.', translation: 'Un peu comme le correspondant sardonique qui a écrit que la politique n\'était "pas sans ses détracteurs" — comme si le pays entier n\'avait pas signé la pétition.', },
    { speaker: 'Fiona', role: 'A', text: 'Precisely. The British genius for litote — "not unkind", "not impossible", "not without merit" — is essentially the art of damning with the faintest possible praise.', translation: 'Précisément. Le génie britannique pour la litote — "pas sans bonté", "pas impossible", "pas sans mérite" — est essentiellement l\'art de condamner avec les louanges les plus faibles possibles.', },
    { speaker: 'Ravi', role: 'B', text: 'If only more people appreciated that. Then again, explaining a joke is rather like dissecting a frog — you understand it better, but the frog dies in the process.', translation: 'Si seulement plus de gens l\'appréciaient. D\'un autre côté, expliquer une plaisanterie, c\'est un peu comme disséquer une grenouille — on la comprend mieux, mais la grenouille meurt dans le processus.', },
    { speaker: 'Fiona', role: 'A', text: 'Droll as ever. Though I suspect E.B. White might have something to say about your borrowing his metaphor.', translation: 'Drôle comme toujours. Bien que je soupçonne qu\'E.B. White aurait quelque chose à dire sur votre emprunt de sa métaphore.', },
  ],
  conversationTitle: 'Satire involontaire et litote britannique',
  pronunciation: [
    {
      word: 'Lampoon',
      phonetic: '/læmˈpuːn/',
      meaning: 'Pamphlet satirique',
      tip: 'Accent sur "POON" : "lam-POUN". Le "oo" est long comme dans "moon". Ne dites pas "lam-po-ON" à la française — l\'accent est sur la dernière syllabe, inhabituel en anglais.',
    },
    {
      word: 'Sardonic',
      phonetic: '/sɑːrˈdɒnɪk/',
      meaning: 'Sardonique',
      tip: 'Accent sur "DON" : "sar-DON-ik". Le "a" initial est long et ouvert comme dans "far". Le "o" accentué est ouvert comme dans "hot".',
    },
    {
      word: 'Facetious',
      phonetic: '/fəˈsiːʃəs/',
      meaning: 'Plaisantin',
      tip: 'Accent sur "SEE" : "feh-SEE-shus". Le "a" initial est réduit en schwa. Le "ti" = "sh" comme dans "nation". Ne dites pas "fa-SET-ee-us".',
    },
    {
      word: 'Mordant',
      phonetic: '/ˈmɔːrdənt/',
      meaning: 'Mordant / Cinglant',
      tip: 'Accent sur la première syllabe : "MOR-dent". Le "or" est long et ouvert comme dans "more". Le "a" final est réduit en schwa. Ne francisez pas en "mor-DAN".',
    },
  ],
}

// ─── c2-l32: Irony & Satire — Double negatives, litotes, verbal irony ──────────
export const C2_L32: LessonContent = {
  vocab: [
    {
      english: 'Understatement',
      french: 'Litote / Euphémisme',
      phonetic: '/ˈʌndərˌsteɪtmənt/',
      example: 'Describing a Category 5 hurricane as "a bit breezy" is quintessentially British understatement.',
      exampleTranslation: 'Décrire un ouragan de catégorie 5 comme "un peu venteux" est la litote typiquement britannique.',
    },
    {
      english: 'Deadpan',
      french: 'Visage de marbre / Expression neutre',
      phonetic: '/ˈdɛdpæn/',
      example: 'His deadpan delivery was so convincing that half the audience didn\'t realise he was joking.',
      exampleTranslation: 'Son expression de marbre était si convaincante que la moitié du public ne s\'est pas rendu compte qu\'il plaisantait.',
    },
    {
      english: 'Bathos',
      french: 'Bathos (chute comique)',
      phonetic: '/ˈbeɪθɒs/',
      example: 'The speech built to a soaring peroration — and then plunged into bathos with a plug for the sponsor\'s toothpaste.',
      exampleTranslation: 'Le discours monta vers une péroraison envolée — puis plongea dans le bathos avec une publicité pour le dentifrice du sponsor.',
    },
    {
      english: 'Caustic',
      french: 'Caustique / Acerbe',
      phonetic: '/ˈkɔːstɪk/',
      example: 'Her caustic review of the novel dismissed three hundred pages of painstaking craft as "ambitious, in the way that a toddler reaching for a hot stove is ambitious."',
      exampleTranslation: 'Sa critique caustique du roman a balayé trois cents pages de travail minutieux comme "ambitieux, au sens où un bambin qui tend la main vers une cuisinière brûlante est ambitieux".',
    },
    {
      english: 'Gallows humor',
      french: 'Humour noir (humour de potence)',
      phonetic: '/ˈɡæloʊz ˈhjuːmər/',
      example: 'The surgeon\'s gallows humor — "Well, the worst that can happen is he dies, and we\'ve all done that before" — was oddly comforting in the circumstances.',
      exampleTranslation: 'L\'humour noir du chirurgien — "Eh bien, le pire qui puisse arriver, c\'est qu\'il meure, et nous l\'avons tous déjà fait" — était curieusement réconfortant dans les circonstances.',
    },
  ],
  grammar: {
    title: 'Les doubles négations, la litote et les structures de l\'ironie verbale',
    explanation: `L'ironie verbale en anglais repose sur un ensemble de structures grammaticales que le locuteur C2 doit maîtriser non seulement pour comprendre l'humour, mais pour le produire. (1) La double négation non standard (AAVE et registres informels) : "I ain\'t done nothing" — deux négations qui se renforcent au lieu de s\'annuler. En registre standard, la double négation est grammaticalement incorrecte, mais elle fonctionne ironiquement : "It\'s not like I don\'t care" = je m\'en soucie beaucoup (les deux négations s\'annulent logiquement mais l\'effet est atténuant). (2) La litote par négation d\'un contraire : "not bad" = bon ; "not uncommon" = fréquent ; "not unlike" = plutôt semblable. Cette structure produit un effet d\'understatement systématique. (3) L\'antiphrase ironique : utiliser un terme positif pour signifier le contraire — "Oh, brilliant" (quand tout va mal) ; "That\'s just what I needed" (quand ça ne l\'est pas du tout). (4) Le renversement par "only" : "If only" signale le regret ; "He\'d only go and ruin it" signifie "il ne manquerait pas de le gâcher". Ces structures exigent une sensibilité au contexte et à la prosodie — l\'ironie se marque souvent par une intonation plate ou un allongement vocalique que l\'écrit ne capte pas.`,
    examples: [
      { sentence: 'It\'s not unlike her to arrive an hour late and act as though nothing happened.', translation: 'Ça ne lui ressemble pas que si peu d\'arriver une heure en retard et d\'agir comme si de rien n\'était. (= c\'est tout à fait son genre)', isCorrect: true },
      { sentence: 'Oh, fantastic — another meeting that could have been an email.', translation: 'Oh, fantastique — encore une réunion qui aurait pu être un e-mail. (antiphrase ironique)', isCorrect: true },
      { sentence: 'She\'s not unhappy with the result.', translation: 'Elle n\'est pas mécontente du résultat. (= elle est assez satisfaite, litote)', isCorrect: true },
      { sentence: 'I don\'t know nothing about it, so I can tell you everything.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'I don\'t know nothing about it, so I can tell you everything.', correct: 'I don\'t know nothing about it. (registre informel : double négation = je ne sais rien) / I know nothing about it. (registre standard)', explanation: 'La double négation "don\'t know nothing" en registre informel signifie "je ne sais rien" (les deux négations se renforcent). Ajouter "so I can tell you everything" crée une contradiction logique : soit on ne sait rien, soit on peut tout dire — mais pas les deux. En registre standard, une seule négation suffit : "I know nothing about it."', },
      { wrong: 'She is not unhappy, which means she is sad.', correct: 'She is not unhappy. (litote = elle est plutôt contente / satisfaite)', explanation: 'La litote "not unhappy" ne signifie pas "sad" (triste). En anglais, la négation du contraire produit un atténuatif : "not unhappy" = plutôt heureuse, mais je n\'exagère pas. C\'est l\'équivalent français de "pas mécontente" = assez satisfaite.' },
    ],
  },
  conversation: [
    { speaker: 'Declan', role: 'A', text: 'I see the committee has produced another report. I\'m not unconvinced that it says absolutely nothing in twice as many words as last time.', translation: 'Je vois que le comité a produit un autre rapport. Je ne suis pas peu convaincu qu\'il ne dise absolument rien dans deux fois plus de mots que la dernière fois.', },
    { speaker: 'Mira', role: 'B', text: 'Oh, brilliant — more bureaucratic self-satire. It\'s almost performance art at this point.', translation: 'Oh, brillant — encore de l\'autodérision bureaucratique. C\'est presque de l\'art de la performance à ce stade.', },
    { speaker: 'Declan', role: 'A', text: 'The deadpan delivery of the recommendations was what killed me. "It is recommended that further study be undertaken." Translation: we\'ve done nothing and we intend to continue.', translation: 'L\'expression de marbre avec laquelle les recommandations ont été présentées, c\'est ce qui m\'a tué. "Il est recommandé de poursuivre les études." Traduction : nous n\'avons rien fait et nous comptons continuer.', },
    { speaker: 'Mira', role: 'B', text: 'Classic bathos — the gravity of the preamble collapsing into the banality of the conclusion. It\'s like watching a symphony end with a kazoo solo.', translation: 'Bathos classique — la gravité du préambule s\'effondrant dans la banalité de la conclusion. C\'est comme regarder une symphonie se terminer par un solo de kazoo.', },
    { speaker: 'Declan', role: 'A', text: 'And the caustic footnote on page forty-seven — did you catch that? "The data, such as it is..." They might as well have written "the data, such as we wish it weren\'t."', translation: 'Et la note de bas de page caustique à la page quarante-sept — l\'as-tu vue ? "Les données, telles qu\'elles sont..." Ils auraient aussi bien pu écrire "les données, telles que nous voudrions qu\'elles ne soient pas."', },
    { speaker: 'Mira', role: 'B', text: 'That\'s the thing about understatement — it\'s the scalpel of the English language. You can eviscerate someone and they\'ll thank you for the precision.', translation: 'C\'est ça le truc avec la litote — c\'est le scalpel de la langue anglaise. Vous pouvez éviscérer quelqu\'un et il vous remerciera pour la précision.', },
    { speaker: 'Declan', role: 'A', text: 'Gallows humor for the literate. If only more people understood that a compliment delivered through clenched teeth is the sincerest form of contempt.', translation: 'De l\'humour noir pour lettrés. Si seulement plus de gens comprenaient qu\'un compliment prononcé les dents serrées est la forme la plus sincère de mépris.', },
  ],
  conversationTitle: 'L\'art de la litote et du bathos',
  pronunciation: [
    {
      word: 'Understatement',
      phonetic: '/ˈʌndərˌsteɪtmənt/',
      meaning: 'Litote / Euphémisme',
      tip: 'Accent principal sur "UN" : "UN-der-stait-ment". Le "u" initial est ouvert comme dans "cup". Le "e" final est réduit. Ne dites pas "on-der-sta-TE-ment".',
    },
    {
      word: 'Deadpan',
      phonetic: '/ˈdɛdpæn/',
      meaning: 'Visage de marbre',
      tip: 'Accent sur "DEAD" : "DED-pan". Le "ea" = "e" bref comme dans "bed". Le "a" de "pan" est ouvert comme dans "cat". Deux syllabes nettes.',
    },
    {
      word: 'Bathos',
      phonetic: '/ˈbeɪθɒs/',
      meaning: 'Chute comique',
      tip: 'Accent sur "BAY" : "BAY-thos". Le "a" est long comme dans "day". Le "th" est expiré, langue entre les dents. Le "os" final a un "o" ouvert comme dans "hot". Ne dites pas "ba-THOS".',
    },
    {
      word: 'Caustic',
      phonetic: '/ˈkɔːstɪk/',
      meaning: 'Caustique / Acerbe',
      tip: 'Accent sur "CAW" : "KAW-stik". Le "au" = "o" long et ouvert comme dans "law". Le "i" est bref comme dans "bit".',
    },
  ],
}

// ─── c2-l33: Comedic Discussion — Analyzing and discussing humor ────────────────
export const C2_L33: LessonContent = {
  vocab: [
    {
      english: 'Comedic timing',
      french: 'Sens du timing comique',
      phonetic: '/kəˈmiːdɪk ˈtaɪmɪŋ/',
      example: 'Comedic timing is the difference between a line that kills and the same line that dies — it\'s all in the pause before the punchline.',
      exampleTranslation: 'Le timing comique est la différence entre une réplique qui tue et la même réplique qui tombe à plat — tout est dans la pause avant la chute.',
    },
    {
      english: 'Levity',
      french: 'Légèreté / Insouciance',
      phonetic: '/ˈlɛvɪti/',
      example: 'There\'s a time for levity and a time for gravitas, and confusing the two is the mark of a comedian who hasn\'t read the room.',
      exampleTranslation: 'Il y a un moment pour la légèreté et un moment pour la gravité, et confondre les deux est la marque d\'un comique qui n\'a pas su lire l\'atmosphère.',
    },
    {
      english: 'Risible',
      french: 'Risible / Comique',
      phonetic: '/ˈrɪzɪbəl/',
      example: 'The proposal was so risible that even the committee\'s most diplomatic member couldn\'t suppress a snort.',
      exampleTranslation: 'La proposition était si risible que même le membre le plus diplomate du comité n\'a pas pu réprimer un reniflement.',
    },
    {
      english: 'Subversive',
      french: 'Subversif',
      phonetic: '/səbˈvɜːrsɪv/',
      example: 'The most subversive comedy doesn\'t attack power directly — it makes the audience question why they ever took it seriously.',
      exampleTranslation: 'Le comique le plus subversif n\'attaque pas le pouvoir directement — il fait douter le public de l\'avoir jamais pris au sérieux.',
    },
    {
      english: 'Po-faced',
      french: 'Renfrogné / Sérieux à l\'excès',
      phonetic: '/poʊ ˈfeɪst/',
      example: 'The po-faced official read out the absurd regulation as though it were holy writ, which only made it funnier.',
      exampleTranslation: 'L\'officiel renfrogné lut le règlement absurde comme s\'il s\'agissait d\'un texte sacré, ce qui ne fit que le rendre plus drôle.',
    },
  ],
  grammar: {
    title: 'Les structures du discours sur l\'humour : évaluation, nuance et distance critique',
    explanation: `Discuter de l'humour avec sophistication exige des structures linguistiques qui permettent l'évaluation nuancée, la distanciation critique et l'articulation entre le comique et le sérieux. (1) La construction "It\'s not so much X as Y" : permet une correction nuancée — "It\'s not so much funny as deeply unsettling" (ce n\'est pas tant drôle que profondément dérangeant). (2) "What makes X Y is..." : isole le facteur causal — "What makes the joke land is the timing, not the content." (3) "For all its X, Y remains..." : concessive complexe — "For all its subversive ambition, the satire remains oddly toothless." (4) "The genius of X lies not in Y but in Z" : structure corrective par négation — "The genius of the sketch lies not in the premise but in the execution." (5) "As much about X as about Y" : double focalisation — "The comedy is as much about the audience\'s discomfort as about the comedian\'s provocation." Ces structures sont essentielles pour tout discours critique sur l\'art, la littérature et l\'humour.`,
    examples: [
      { sentence: 'It\'s not so much the joke itself as the hesitation before delivering it that makes it devastating.', translation: 'Ce n\'est pas tant la plaisanterie elle-même que l\'hésitation avant de la livrer qui la rend dévastatrice.', isCorrect: true },
      { sentence: 'For all its risible surface, the sketch is as much about collective denial as about individual folly.', translation: 'Malgré sa surface risible, le sketch traite autant du déni collectif que de la folie individuelle.', isCorrect: true },
      { sentence: 'The genius of the routine lies not in the premise but in the pause — that agonising, exquisite silence before the punchline.', translation: 'Le génie du numéro ne réside pas dans le prétexte mais dans la pause — ce silence angoissant, exquis avant la chute.', isCorrect: true },
      { sentence: 'What makes it funny is the fact that it is funny.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'What makes it funny is the fact that it is funny.', correct: 'What makes the joke land is the gap between expectation and delivery.', explanation: 'Une analyse tautologique ("c\'est drôle parce que c\'est drôle") n\'apporte aucune valeur critique. À un niveau C2, on doit pouvoir identifier le mécanisme comique : timing, contraste, sous-entendu, renversement d\'attente, etc.' },
      { wrong: 'For all its subversive ambition, but the satire remains toothless.', correct: 'For all its subversive ambition, the satire remains toothless.', explanation: 'La construction "For all + nom" est déjà concessive — ajouter "but" crée une redondance. "For all" = "malgré" ; "but" n\'est pas nécessaire.' },
    ],
  },
  conversation: [
    { speaker: 'Anika', role: 'A', text: 'I saw Hari Kondabolu\'s set last night. It\'s not so much comedy as ethnography performed with impeccable comedic timing.', translation: 'J\'ai vu le spectacle d\'Hari Kondabolu hier soir. Ce n\'est pas tant de la comédie que de l\'ethnographie exécutée avec un timing comique irréprochable.', },
    { speaker: 'Tomás', role: 'B', text: 'For all its subversive intent, what struck me was the levity — he makes you laugh at things you didn\'t think you could laugh about, and then makes you wonder why you ever thought you couldn\'t.', translation: 'Malgré son intention subversive, ce qui m\'a frappé, c\'est la légèreté — il vous fait rire de choses dont vous ne pensiez pas pouvoir rire, puis vous fait vous demander pourquoi vous pensiez ne pas pouvoir.', },
    { speaker: 'Anika', role: 'A', text: 'The genius of that routine lies not in the provocation but in the pause — he lets the discomfort sit just long enough for the audience to feel it, and then releases it.', translation: 'Le génie de ce numéro ne réside pas dans la provocation mais dans la pause — il laisse l\'inconfort s\'installer juste assez longtemps pour que le public le ressente, puis le libère.', },
    { speaker: 'Tomás', role: 'B', text: 'Whereas the po-faced moralists who denounced the set entirely missed the point — it was never about offending, but about revealing.', translation: 'Tandis que les moralistes renfrognés qui ont dénoncé le spectacle ont complètement manqué le point — il n\'a jamais été question d\'offenser, mais de révéler.', },
    { speaker: 'Anika', role: 'A', text: 'The comedy is as much about the audience\'s self-awareness as about the performer\'s wit. You laugh, and then you catch yourself laughing, and that double-take is where the real humour lives.', translation: 'Le comique porte autant sur la conscience de soi du public que sur l\'esprit du performeur. Vous riez, puis vous vous surprenez à rire, et ce double regard est là où réside le vrai humour.', },
    { speaker: 'Tomás', role: 'B', text: 'Which is precisely what makes it risible and unsettling in equal measure — the best comedy always is.', translation: 'C\'est précisément ce qui le rend risible et dérangeant à parts égales — le meilleur comique l\'est toujours.', },
    { speaker: 'Anika', role: 'A', text: 'Agreed. And the worst comedy, by contrast, tells you exactly what to feel and when to feel it — which is to comedy what a GPS is to exploration.', translation: 'Convenu. Et la pire comédie, en revanche, vous dit exactement quoi ressentir et quand le ressentir — ce qui est à la comédie ce qu\'un GPS est à l\'exploration.', },
  ],
  conversationTitle: 'Analyser le comique : entre subversion et légèreté',
  pronunciation: [
    {
      word: 'Levity',
      phonetic: '/ˈlɛvɪti/',
      meaning: 'Légèreté',
      tip: 'Accent sur "LEV" : "LEV-i-ti". Le "e" est ouvert comme dans "bed". Les deux dernières syllabes se réduisent rapidement. Ne dites pas "leh-VEE-ti".',
    },
    {
      word: 'Risible',
      phonetic: '/ˈrɪzɪbəl/',
      meaning: 'Risible',
      tip: 'Accent sur "RIZ" : "RIZ-ih-bel". Le "i" est bref comme dans "bit". Le suffixe "-ible" se réduit : "ih-bel". Ne dites pas "ri-ZEE-bl" à la française.',
    },
    {
      word: 'Subversive',
      phonetic: '/səbˈvɜːrsɪv/',
      meaning: 'Subversif',
      tip: 'Accent sur "VERS" : "sehb-VERS-iv". Le premier "u" est réduit en schwa. Le "er" accentué est long comme dans "serve". Le "i" final est bref.',
    },
    {
      word: 'Comedic',
      phonetic: '/kəˈmiːdɪk/',
      meaning: 'Comique',
      tip: 'Accent sur "MEE" : "keh-MEE-dik". Le "o" initial est réduit en schwa. Le "ee" est long. Ne dites pas "KOM-eh-dik" — l\'accent n\'est pas sur la première syllabe.',
    },
  ],
}

// ─── c2-l34: Wordplay Analysis — Puns, homophones, phonological wordplay ───────
export const C2_L34: LessonContent = {
  vocab: [
    {
      english: 'Paronomasia',
      french: 'Paronomase (jeu de mots)',
      phonetic: '/ˌpærənoʊˈmeɪziə/',
      example: 'Shakespeare\'s paronomasia — "Now is the winter of our discontent made glorious summer by this sun of York" — operates on at least three levels simultaneously.',
      exampleTranslation: 'La paronomase de Shakespeare — "Maintenant l\'hiver de notre mécontentement est devenu un glorieux été par ce soleil/fils d\'York" — fonctionne sur au moins trois niveaux simultanément.',
    },
    {
      english: 'Syllepsis',
      french: 'Syllepse',
      phonetic: '/sɪˈlɛpsɪs/',
      example: '"She left in a huff and a sedan chair" is a classic syllepsis — the verb "left" governs two objects in incompatible senses.',
      exampleTranslation: '"Elle partit en colère et en chaise à porteurs" est une syllepse classique — le verbe "partit" régit deux compléments dans des sens incompatibles.',
    },
    {
      english: 'Double entendre',
      french: 'Double sens',
      phonetic: '/ˌduːbəl ɒnˈtɒndrə/',
      example: 'The entire tradition of British panto rests on the double entendre — innocuous on the surface, devastatingly suggestive just beneath it.',
      exampleTranslation: 'Toute la tradition de la pantomime britannique repose sur le double sens — inoffensif en surface, dévastateur de sous-entendus juste en dessous.',
    },
    {
      english: 'Malapropism',
      french: 'Contresens comique (malapropisme)',
      phonetic: '/ˈmæləprɒpɪzəm/',
      example: 'The politician\'s malapropism — "We need to irradiate poverty" instead of "eradicate" — was immediately, mercilessly, memed.',
      exampleTranslation: 'Le contresens du politicien — "Nous devons irradier la pauvreté" au lieu d\'"éradiquer" — fut immédiatement et impitoyablement mémé.',
    },
    {
      english: 'Spoonerism',
      french: 'Contrepèterie',
      phonetic: '/ˈspuːnərɪzəm/',
      example: 'The Reverend Spooner\'s legendary spoonerism — "The lord is a shoving leopard" instead of "a loving shepherd" — gave the English language an entire category of wordplay.',
      exampleTranslation: 'La contrepèterie légendaire du Révérend Spooner — "Le seigneur est un léopard poussant" au lieu d\'"un berger aimant" — a donné à la langue anglaise une catégorie entière de jeux de mots.',
    },
  ],
  grammar: {
    title: 'Les structures du jeu de mots : ambiguïté syntaxique et homophonie',
    explanation: `Le jeu de mots en anglais exploite systématiquement les ambiguïtés de la langue — phonologiques, syntaxiques et lexicales. Au niveau C2, il ne s'agit pas simplement d'apprécier un jeu de mots, mais de comprendre ses mécanismes grammaticaux. (1) L'ambiguïté syntagmatique : une même séquence de mots peut se parser de deux façons — "I saw the man with the telescope" (j\'ai vu l\'homme au télescope / j\'ai vu l\'homme en utilisant un télescope). Les humoristes exploitent cette ambiguïté structurelle pour produire des chutes inattendues. (2) L\'homophonie et la paronomase : "sun/son", "soul/sole", "board/bored" — l\'anglais, avec son orthographe historique, regorge de paires homophones qui alimentent les calembours. (3) La syllepse (ou zeugme) : un mot remplit deux fonctions syntaxiques simultanément — "She broke the record and his heart" (broke = battre un record + briser un cœur). (4) Le chiasme lexical : "Ask not what your country can do for you — ask what you can do for your country" — l\'inversion croisée crée un effet de miroir rhétorique. Ces structures sont la grammaire même de l\'esprit comique en anglais.`,
    examples: [
      { sentence: 'Time flies like an arrow; fruit flies like a banana.', translation: 'Le temps vole comme une flèche ; les mouches des fruits aiment la banane. (jeu sur "flies" = vole/mouches et "like" = comme/aiment)', isCorrect: true },
      { sentence: 'She lost her temper and her luggage — one was later recovered.', translation: 'Elle perdit son sang-froid et ses bagages — l\'un fut retrouvé plus tard. (syllepse : "lost" gouverne deux sens)', isCorrect: true },
      { sentence: 'The pun is the lowest form of wit, so it\'s not clever at all.', translation: '', isCorrect: false },
      { sentence: 'He\'s not a man to be taken lightly — or seriously, for that matter.', translation: 'Ce n\'est pas un homme à prendre à la légère — ni au sérieux, d\'ailleurs. (double négation ironique)', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The pun is the lowest form of wit, so it\'s not clever at all.', correct: 'The pun is the lowest form of wit — or so the saying goes, usually uttered by someone who can\'t make one.', explanation: 'La citation "the pun is the lowest form of wit" est elle-même souvent utilisée de façon ironique ou comme point de départ d\'un contre-argument. La réduire à "so it\'s not clever at all" prend au sérieux ce qui est traditionnellement un début de débat, non une conclusion.' },
      { wrong: 'She broke the record and his heart, which means she was violent.', correct: 'She broke the record and his heart. (syllepse : "broke" a deux sens distincts — battre un record et briser un cœur)', explanation: 'Interpréter la syllepse littéralement ("she was violent") rate l\'effet de style. "Broke a record" = battu un record (positif) ; "broke his heart" = brisé son cœur (émotionnel). Le décalage entre les deux sens est précisément le ressort comique.' },
    ],
  },
  conversation: [
    { speaker: 'Lena', role: 'A', text: 'I\'ve been reading Empson\'s "Seven Types of Ambiguity" and it strikes me that every great pun is essentially a controlled ambiguity — the syntactic structure holds two meanings in productive tension.', translation: 'Je lis "Sept types d\'ambiguïté" d\'Empson et il me semble que tout grand calembour est essentiellement une ambiguïté contrôlée — la structure syntaxique maintient deux sens en tension productive.', },
    { speaker: 'Marcus', role: 'B', text: 'Precisely. The paronomasia in "sun of York" isn\'t decorative — it\'s structurally central. The ambiguity encodes the very claim the play is making about legitimacy and illumination.', translation: 'Précisément. La paronomase dans "soleil/fils d\'York" n\'est pas décorative — elle est structurellement centrale. L\'ambiguïté encode la revendication même que la pièce formule sur la légitimité et l\'illumination.', },
    { speaker: 'Lena', role: 'A', text: 'Whereas the malapropism operates in the opposite direction — the unintentional substitution reveals the speaker\'s ignorance while accidentally creating a new, often hilariously apt, meaning.', translation: 'Tandis que le malapropisme fonctionne dans la direction opposée — la substitution involontaire révèle l\'ignorance du locuteur tout en créant accidentellement un sens nouveau, souvent hilaramment pertinent.', },
    { speaker: 'Marcus', role: 'B', text: 'Like the colleague who said "We need to think outside the box" but pronounced it "bogs" — which, depending on your view of corporate jargon, was either a slip or an insight.', translation: 'Comme le collègue qui a dit "We need to think outside the box" mais a prononcé "bogs" — ce qui, selon votre vision du jargon corporate, était soit un lapsus soit une intuition.', },
    { speaker: 'Lena', role: 'A', text: 'The syllepse, though, is the aristocrat of wordplay — "She left in a huff and a sedan chair." One verb, two incompatible registers, and the collision generates the comedy.', translation: 'La syllepse, en revanche, est l\'aristocrate du jeu de mots — "Elle partit en colère et en chaise à porteurs." Un verbe, deux registres incompatibles, et la collision engendre le comique.', },
    { speaker: 'Marcus', role: 'B', text: 'And the double entendre is its populist cousin — the same structural principle, but with a wink rather than a raised eyebrow. Panto wouldn\'t exist without it.', translation: 'Et le double sens est son cousin populiste — le même principe structurel, mais avec un clin d\'œil plutôt qu\'un sourcils levé. La pantomime n\'existerait pas sans lui.', },
    { speaker: 'Lena', role: 'A', text: 'Which rather confirms what Austen knew all along — that the sharpest wit always travels on two tracks simultaneously, and the reader\'s delight lies in the switching.', translation: 'Ce qui confirme plutôt ce qu\'Austen savait depuis toujours — que l\'esprit le plus acéré voyage toujours sur deux voies simultanément, et le délice du lecteur réside dans le basculement.', },
  ],
  conversationTitle: 'L\'ambiguïté contrôlée : mécanismes du jeu de mots',
  pronunciation: [
    {
      word: 'Paronomasia',
      phonetic: '/ˌpærənoʊˈmeɪziə/',
      meaning: 'Paronomase',
      tip: 'Accent sur "ZHA" : "pa-reh-no-MAY-zha". Le "o" devant "ma" est long. Le suffixe "-ia" = "zha" avec un son doux. Ne dites pas "pa-ro-no-MA-zi-a".',
    },
    {
      word: 'Syllepsis',
      phonetic: '/sɪˈlɛpsɪs/',
      meaning: 'Syllepse',
      tip: 'Accent sur "LEP" : "sih-LEP-sis". Le "y" = "i" bref. Le "e" accentué est ouvert comme dans "bed". Le suffixe "-sis" = "sis" avec un "i" bref.',
    },
    {
      word: 'Malapropism',
      phonetic: '/ˈmæləprɒpɪzəm/',
      meaning: 'Contresens comique',
      tip: 'Accent sur "MAL" : "MAL-eh-prop-iz-em". Le "a" est très ouvert comme dans "cat". Le "o" de "prop" est ouvert comme dans "hot". Quatre syllabes rapides.',
    },
    {
      word: 'Spoonerism',
      phonetic: '/ˈspuːnərɪzəm/',
      meaning: 'Contrepèterie',
      tip: 'Accent sur "SPOON" : "SPOON-er-iz-em". Le "oo" est long comme dans "moon". Le "er" est réduit. Le suffixe "-ism" = "iz-em".',
    },
  ],
}

// ─── c2-l35: Humor Sounds — Timing, intonation in comedic delivery ─────────────
export const C2_L35: LessonContent = {
  vocab: [
    {
      english: 'Beat',
      french: 'Pause comique (beat)',
      phonetic: '/biːt/',
      example: 'The comedian paused for a beat after the setup, letting the audience anticipate the punchline before subverting it entirely.',
      exampleTranslation: 'Le comique marqua une pause après la mise en place, laissant le public anticiper la chute avant de la subvertir entièrement.',
    },
    {
      english: 'Inflection',
      french: 'Inflexion (intonation)',
      phonetic: '/ɪnˈflɛkʃən/',
      example: 'A single inflection — raising the pitch on "really" — can transform a genuine question into withering sarcasm.',
      exampleTranslation: 'Une seule inflexion — monter la hauteur sur "really" — peut transformer une question sincère en sarcasme cinglant.',
    },
    {
      english: 'Punchline',
      french: 'Chute (d\'une blague)',
      phonetic: '/ˈpʌntʃlaɪn/',
      example: 'The punchline arrived three beats later than expected, which is precisely why it demolished the room.',
      exampleTranslation: 'La chute arriva trois temps plus tard que prévu, ce qui est précisément pourquoi elle a fait exploser la salle.',
    },
    {
      english: 'Cadence',
      french: 'Cadence (rythme de l\'énonciation)',
      phonetic: '/ˈkeɪdəns/',
      example: 'Her cadence — the measured rise and fall, the strategic elongation of vowels — turned a mundane anecdote into a virtuoso performance.',
      exampleTranslation: 'Sa cadence — la montée et la descente mesurées, l\'allongement stratégique des voyelles — transforma une anecdote banale en une performance virtuose.',
    },
    {
      english: 'Throwaway line',
      french: 'Réplique jetée / Lâchée',
      phonetic: '/ˈθroʊəweɪ laɪn/',
      example: 'The funniest moment wasn\'t the elaborate setup — it was the throwaway line he mumbled as he was leaving the stage.',
      exampleTranslation: 'Le moment le plus drôle n\'était pas la mise en place élaborée — c\'était la réplique jetée qu\'il a marmonnée en quittant la scène.',
    },
  ],
  grammar: {
    title: 'La prosodie comique : timing, intonation et grammaire de la livraison',
    explanation: `La livraison comique (comedic delivery) est fondamentalement un phénomène prosodique — elle repose sur le timing, l'intonation, le rythme et les pauses qui entourent et transforment les mots. Au niveau C2, la maîtrise de ces éléments prosodiques est ce qui distingue un locuteur qui comprend l'humour d'un locuteur qui peut le produire. (1) Le "beat" (pause comique) : en anglais, la pause avant la chute est aussi importante que la chute elle-même. Un silence d'une fraction de seconde peut transformer une déclaration banale en réplique cinglante. Grammaticalement, la pause crée une frontière intonative qui signale au public que la structure syntaxique est complète et que le renversement arrive. (2) L\'inflexion ironique : un contour montant sur un mot clé ("Oh, reeALLY?") signale le sarcasme. Cette inflexion est grammaticalement distinctive — la même phrase avec une intonation plate est littérale ; avec une intonation montant-descendante, elle est ironique. (3) L\'allongement vocalique (drawl) : "Well, that\'s juuust great" — l\'allongement de la voyelle signale l\'antiphrase. (4) Le débit accéléré (rushed delivery) : livrer une phrase secondaire à une vitesse accrue produit un effet comique par contraste avec le tempo environnant. (5) Le "throwaway" : prononcer la réplique la plus drôle avec une nonchalance étudiée, comme si elle était accessoire — l\'inverse de l\'accentuation attendue.`,
    examples: [
      { sentence: 'Well... that\'s just wonderful. (pause longue + allongement de "just" = antiphrase ironique)', translation: 'Eh bien... c\'est juste merveilleux. (intonation ironique = c\'est catastrophique)', isCorrect: true },
      { sentence: 'He paused — one beat, two — and then, as if it were an afterthought, delivered the line that brought the house down.', translation: 'Il s\'arrêta — un temps, deux — et puis, comme si c\'était une pensée après coup, livra la réplique qui fit s\'effondrer la salle de rire.', isCorrect: true },
      { sentence: 'Oh, REE-ally. (intonation montant-descendante sur "really" = sarcasme)', translation: 'Oh, vraaaaiment ? (intonation ironique = je ne vous crois pas du tout)', isCorrect: true },
      { sentence: 'She said the punchline very loudly so everyone would hear it.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'She said the punchline very loudly so everyone would hear it.', correct: 'She dropped the punchline with studied nonchalance, as though it barely warranted saying — which, paradoxically, made it land harder.', explanation: 'La livraison comique la plus efficace est souvent la plus discrète. Augmenter le volume pour "être sûr que tout le monde entende" est l\'erreur du comédien amateur. La comédie professionnelle repose sur le contraste, la pause et le throwaway — pas sur le volume.' },
      { wrong: 'You need to speak faster to be funny.', correct: 'Comedic timing involves strategic variation in pace — accelerations for throwaway lines and deliberate pauses before punchlines.', explanation: 'Le débit rapide n\'est pas universellement comique. Le vrai timing comique repose sur la variation : accélérer sur les lignes secondaires et ralentir ou marquer une pause avant les chutes. La monotonie du rythme, qu\'elle soit rapide ou lente, tue le comique.' },
    ],
  },
  conversation: [
    { speaker: 'Clara', role: 'A', text: 'I\'ve been studying stand-up delivery and the single most important thing isn\'t the material — it\'s the beat. The silence before the punchline does half the work.', translation: 'J\'étudie la livraison du stand-up et la chose la plus importante n\'est pas le matériel — c\'est le temps. Le silence avant la chute fait la moitié du travail.', },
    { speaker: 'Jude', role: 'B', text: 'Absolutely. Gervais is a master of the elongated beat — that excruciating pause where the audience fills in the blank and then he pulls the rug in the opposite direction.', translation: 'Absolument. Gervais est un maître du temps étiré — cette pause insupportable où le public remplit le blanc et puis il tire le tapis dans la direction opposée.', },
    { speaker: 'Clara', role: 'A', text: 'Whereas the throwaway line operates by the inverse logic — the funniest thing in the room is the one the comedian seems least invested in. It\'s a kind of prosodic misdirection.', translation: 'Tandis que la réplique jetée opère par la logique inverse — la chose la plus drôle dans la salle est celle à laquelle le comique semble le moins attaché. C\'est une sorte de fausse piste prosodique.', },
    { speaker: 'Jude', role: 'B', text: 'And then there\'s inflection — a single raised pitch on "lovely" and you\'ve turned a compliment into a evisceration. The grammar is identical; the meaning is inverted by prosody alone.', translation: 'Et puis il y a l\'inflexion — une simple élévation de la hauteur sur "lovely" et vous avez transformé un compliment en éviscération. La grammaire est identique ; le sens est inversé par la prosodie seule.', },
    { speaker: 'Clara', role: 'A', text: 'That\'s the thing about English humour — it lives in the spaces between the words. The cadence, the drawl, the micro-pause before "not" in "It\'s not... unkind."', translation: 'C\'est ça le truc avec l\'humour anglais — il habite les espaces entre les mots. La cadence, le traînement, la micro-pause avant "not" dans "It\'s not... unkind."', },
    { speaker: 'Jude', role: 'B', text: 'Which is why translating comedy is almost impossible — you\'d have to translate the silence, the breath, the hesitation. And those aren\'t in the script.', translation: 'C\'est pourquoi traduire la comédie est presque impossible — il faudrait traduire le silence, le souffle, l\'hésitation. Et ceux-là ne sont pas dans le texte.', },
    { speaker: 'Clara', role: 'A', text: 'Exactly. The script is the skeleton. The delivery — the timing, the inflection, the throwaway — is the flesh. And without the flesh, the skeleton is just... not that funny.', translation: 'Exactement. Le texte est le squelette. La livraison — le timing, l\'inflexion, la réplique jetée — est la chair. Et sans la chair, le squelette n\'est juste... pas très drôle.', },
  ],
  conversationTitle: 'Le comique entre les mots : prosodie et livraison',
  pronunciation: [
    {
      word: 'Beat',
      phonetic: '/biːt/',
      meaning: 'Pause comique',
      tip: 'Le "ea" est long : "BIIT". Comme dans "meet". Dans le contexte comique, un "beat" est une unité de temps — une pause d\'environ une seconde. Ne confondez pas avec "bit" (bref).',
    },
    {
      word: 'Inflection',
      phonetic: '/ɪnˈflɛkʃən/',
      meaning: 'Inflexion',
      tip: 'Accent sur "FLEC" : "in-FLEK-shun". Le "i" initial est bref comme dans "bit". Le "e" accentué est ouvert comme dans "bed". Le "-tion" = "shun".',
    },
    {
      word: 'Cadence',
      phonetic: '/ˈkeɪdəns/',
      meaning: 'Cadence',
      tip: 'Accent sur "KAY" : "KAY-dens". Le "a" est long comme dans "day". Le "e" de la deuxième syllabe est réduit. Ne dites pas "ka-DANSS" à la française.',
    },
    {
      word: 'Punchline',
      phonetic: '/ˈpʌntʃlaɪn/',
      meaning: 'Chute (d\'une blague)',
      tip: 'Accent sur "PUNCH" : "PUNTCH-line". Le "u" est ouvert comme dans "cup". Le "ch" = "tch". La deuxième syllabe est réduite. L\'accent sur la première syllabe est crucial — ne dites pas "punch-LINE".',
    },
  ],
}
