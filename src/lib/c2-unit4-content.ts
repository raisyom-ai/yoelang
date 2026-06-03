import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C2 UNIT 4: ADVANCED RHETORIC (c2-u4)
// Lessons c2-l16 through c2-l20
// YOELANG English Learning App for Francophone Users
// C2 Mastery Level — Near-native sophistication
// ════════════════════════════════════════════════════════════════════════════════

// ─── c2-l16: Rhetoric Vocabulary — Oratory terms, rhetorical devices ────────────
export const C2_L16: LessonContent = {
  vocab: [
    {
      english: 'Anaphora',
      french: 'Anaphore',
      phonetic: '/əˈnæfərə/',
      example: 'Through anaphora, Churchill rallied the nation: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight..."',
      exampleTranslation: 'Par l\'anaphore, Churchill a galvanisé la nation : "Nous nous battrons sur les plages, nous nous battrons sur les terrains d\'atterrissage, nous nous battrons..."',
    },
    {
      english: 'Chiasmus',
      french: 'Chiasme',
      phonetic: '/kaɪˈæzməs/',
      example: 'JFK\'s chiasmus endures: "Ask not what your country can do for you — ask what you can do for your country."',
      exampleTranslation: 'Le chiasme de JFK perdure : "Ne demandez pas ce que votre pays peut faire pour vous — demandez ce que vous pouvez faire pour votre pays."',
    },
    {
      english: 'Polysyndeton',
      french: 'Polysyndète',
      phonetic: '/ˌpɒlɪˈsɪndɪtɒn/',
      example: 'The polysyndeton in "I said I was glad and I was glad and I was glad" creates an incantatory rhythm.',
      exampleTranslation: 'La polysyndète dans "I said I was glad and I was glad and I was glad" crée un rythme incantatoire.',
    },
    {
      english: 'Epizeuxis',
      french: 'Épizeuxe',
      phonetic: '/ˌɛpɪˈzjuːksɪs/',
      example: 'The epizeuxis in "Never, never, never give up" hammers the resolve with relentless repetition.',
      exampleTranslation: 'L\'épizeuxe dans "Never, never, never give up" martèle la détermination par une répétition implacable.',
    },
    {
      english: 'Procatalepsis',
      french: 'Procatalèpse',
      phonetic: '/ˌproʊkətəˈlɛpsɪs/',
      example: 'Procatalepsis strengthens an argument by anticipating objections before they are raised.',
      exampleTranslation: 'La procatalèpse renforce un argument en anticipant les objections avant qu\'elles ne soient soulevées.',
    },
  ],
  grammar: {
    title: 'Les figures de style comme outils grammaticaux',
    explanation: 'En rhétorique avancée, les figures de style ne sont pas de simples ornements — elles modifient la structure grammaticale elle-même. L\'anaphore (répétition d\'un mot en tête de phrase) crée un effet de parallélisme syntaxique qui renforce la cohésion du discours. Le chiasme inverse l\'ordre des éléments pour créer une symétrie croisée (AB-BA). La polysyndète accumule les conjonctions ("and... and... and") pour ralentir le rythme et créer un effet d\'accumulation. L\'épizeuxe répète immédiatement le même mot sans conjonction pour un effet de frappe. Ces dispositifs transforment la grammaire standard en grammaire persuasive : ils brisent délibérément les règles de concision pour produire un effet rhétorique.',
    examples: [
      { sentence: 'We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields.', translation: 'Nous nous battrons sur les plages, nous nous battrons sur les terrains d\'atterrissage, nous nous battrons dans les champs.', isCorrect: true },
      { sentence: 'Ask not what your country can do for you, ask what you can do for your country.', translation: 'Ne demandez pas ce que votre pays peut faire pour vous, demandez ce que vous pouvez faire pour votre pays.', isCorrect: true },
      { sentence: 'We shall fight on the beaches, and fighting on the landing grounds, and fought in the fields.', translation: '', isCorrect: false },
      { sentence: 'I came, I saw, I conquered.', translation: 'Je suis venu, j\'ai vu, j\'ai vaincu.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Using polysyndeton with inconsistent conjunctions: "We fought and struggled, or persevered, but conquered."', correct: 'Using consistent conjunctions: "We fought and struggled and persevered and conquered."', explanation: 'La polysyndète exige la répétition de la MÊME conjonction. Alterner "and/or/but" brise l\'effet d\'accumulation.' },
      { wrong: 'Breaking the chiasmus symmetry: "To live is to dream, and hoping is existing."', correct: 'Maintaining AB-BA symmetry: "To live is to dream, to dream is to live."', explanation: 'Le chiasme repose sur une symétrie croisée parfaite (AB-BA). Si la structure n\'est pas inversée, ce n\'est pas un chiasme.' },
    ],
  },
  conversation: [
    { speaker: 'Professor Achebe', role: 'A', text: 'Consider how anaphora transforms a plea into a manifesto. When King declared "I have a dream" eight times, each iteration escalated the moral urgency.', translation: 'Considérez comment l\'anaphore transforme un plaidoyer en manifeste. Quand King a déclaré "I have a dream" huit fois, chaque itération a intensifié l\'urgence morale.' },
    { speaker: 'Dr. Laurent', role: 'B', text: 'Precisely. The syntactic parallelism creates a cumulative force that no single assertion could achieve. It\'s the grammar of conviction.', translation: 'Précisément. Le parallélisme syntaxique crée une force cumulative qu\'aucune assertion unique ne pourrait atteindre. C\'est la grammaire de la conviction.' },
    { speaker: 'Professor Achebe', role: 'A', text: 'And yet, misapplied anaphora becomes mere tautology. The repetition must escalate — each iteration must add semantic weight, not merely reiterate.', translation: 'Et pourtant, l\'anaphore mal employée devient une simple tautologie. La répétition doit s\'intensifier — chaque itération doit ajouter du poids sémantique, pas simplement réitérer.' },
    { speaker: 'Dr. Laurent', role: 'B', text: 'That\'s where procatalepsis becomes invaluable. By anticipating the counterargument — "Some will say this is idealistic, but..." — you neutralise dissent before it crystallises.', translation: 'C\'est là que la procatalèpse devient inestimable. En anticipant le contre-argument — "Certains diront que c\'est idéaliste, mais..." — vous neutralisez la dissidence avant qu\'elle ne se cristallise.' },
    { speaker: 'Professor Achebe', role: 'A', text: 'Indeed. And chiasmus provides the coup de grâce — the rhetorical inversion that makes refutation almost impossible because the symmetry is so satisfying.', translation: 'En effet. Et le chiasme fournit le coup de grâce — l\'inversion rhétorique qui rend la réfutation presque impossible tant la symétrie est satisfaisante.' },
    { speaker: 'Dr. Laurent', role: 'B', text: 'Shakespeare knew this: "The fault, dear Brutus, is not in our stars, but in ourselves." The AB-BA structure seals the argument with aesthetic inevitability.', translation: 'Shakespeare le savait : "The fault, dear Brutus, is not in our stars, but in ourselves." La structure AB-BA scelle l\'argument avec une inévitabilité esthétique.' },
  ],
  conversationTitle: 'La grammaire de la persuasion',
  pronunciation: [
    { word: 'Anaphora', phonetic: '/əˈnæfərə/', meaning: 'Anaphore', tip: 'Accent sur la deuxième syllabe : "uh-NAF-er-uh". Ne dites pas "a-na-FOR-a". Le "ph" grec se prononce "f".' },
    { word: 'Chiasmus', phonetic: '/kaɪˈæzməs/', meaning: 'Chiasme', tip: 'Prononcez "kye-AZ-mus" — le "chi" grec = "kaï" comme dans "chiropracteur". Accent sur la deuxième syllabe.' },
    { word: 'Polysyndeton', phonetic: '/ˌpɒlɪˈsɪndɪtɒn/', meaning: 'Polysyndète', tip: 'Cinq syllabes : "POL-ee-SIN-di-ton". L\'accent principal est sur "SIN". Le "y" = "i" bref comme en grec.' },
    { word: 'Procatalepsis', phonetic: '/ˌproʊkətəˈlɛpsɪs/', meaning: 'Procatalèpse', tip: 'Accent sur l\'antépénultième : "pro-KAT-uh-LEP-sis". Le "ps" final est muet en anglais comme en grec.' },
  ],
}

// ─── c2-l17: Oratorical Devices — Rhetorical questions, antithesis, anaphora ───
export const C2_L17: LessonContent = {
  vocab: [
    {
      english: 'Antithesis',
      french: 'Antithèse',
      phonetic: '/ænˈtɪθəsɪs/',
      example: 'Dickens\' antithesis opens A Tale of Two Cities: "It was the best of times, it was the worst of times."',
      exampleTranslation: 'L\'antithèse de Dickens ouvre Le Conte de deux cités : "C\'était le meilleur des temps, c\'était le pire des temps."',
    },
    {
      english: 'Erotema',
      french: 'Érotème (question rhétorique)',
      phonetic: '/ɪˈrɒtɪmə/',
      example: 'The erotema "Can anyone honestly claim this system is just?" demands not an answer but a reckoning.',
      exampleTranslation: 'L\'érotème "Can anyone honestly claim this system is just?" exige non pas une réponse mais un examen de conscience.',
    },
    {
      english: 'Asyndeton',
      french: 'Asyndète',
      phonetic: '/əˈsɪndɪtɒn/',
      example: 'Caesar\'s asyndeton — "I came, I saw, I conquered" — eliminates conjunctions for devastating brevity.',
      exampleTranslation: 'L\'asyndète de César — "Veni, vidi, vici" — élimine les conjonctions pour une brièveté dévastatrice.',
    },
    {
      english: 'Epistrophe',
      french: 'Épiphore',
      phonetic: '/ɪˈpɪstrəfi/',
      example: 'Lincoln\'s epistrophe in the Gettysburg Address — "of the people, by the people, for the people" — clinches the argument with rhythmic finality.',
      exampleTranslation: 'L\'épiphore de Lincoln dans le discours de Gettysburg — "of the people, by the people, for the people" — conclut l\'argument avec une finalité rythmique.',
    },
    {
      english: 'Isocolon',
      french: 'Isocolon',
      phonetic: '/aɪˈsɒkəlɒn/',
      example: 'The isocolon in "Veni, vidi, vici" matches three clauses of identical syllabic length for perfect rhythmic balance.',
      exampleTranslation: 'L\'isocolon dans "Veni, vidi, vici" aligne trois propositions de longueur syllabique identique pour un équilibre rythmique parfait.',
    },
  ],
  grammar: {
    title: 'L\'antithèse et la question rhétorique : structures contrastives',
    explanation: 'L\'antithèse juxtapose deux idées opposées dans une structure parallèle pour créer un contraste frappant. Grammaticalement, elle exige un parallélisme syntaxique strict : les deux moitiés doivent avoir la même structure (sujet + verbe + complément // sujet + verbe + complément). La question rhétorique (érotème) ne cherche pas de réponse — elle force l\'auditeur à conclure lui-même. Sa structure grammaticale est celle d\'une interrogative, mais sa fonction est assertive : "Is this the legacy we wish to leave?" = "This is NOT the legacy we should leave." L\'épiphore (répétition en fin de phrase) et l\'asyndète (suppression des conjonctions) sont des outils complémentaires — l\'épiphore ralentit et solennise, l\'asyndète accélère et frappe.',
    examples: [
      { sentence: 'It was the best of times; it was the worst of times.', translation: 'C\'était le meilleur des temps ; c\'était le pire des temps.', isCorrect: true },
      { sentence: 'To err is human; to forgive, divine.', translation: 'L\'erreur est humaine ; le pardon, divin.', isCorrect: true },
      { sentence: 'It was the best of times, and it was bad times too.', translation: '', isCorrect: false },
      { sentence: 'Shall we surrender when victory is within our grasp?', translation: 'Allons-nous nous rendre alors que la victoire est à portée de main ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'It was the best of times, and it was bad times too.', correct: 'It was the best of times; it was the worst of times.', explanation: 'L\'antithèse exige un PARALLÉLISME syntaxique strict. "Bad times too" brise la symétrie. Les deux moitiés doivent avoir la même structure grammaticale.' },
      { wrong: 'Asking a rhetorical question and then answering it: "Is this fair? No, it is not."', correct: 'Letting the question resonate: "Is this fair?"', explanation: 'L\'érotème perd sa force si on y répond soi-même. La question rhétorique doit rester ouverte — c\'est le silence qui constitue la réponse.' },
    ],
  },
  conversation: [
    { speaker: 'Professor Diallo', role: 'A', text: 'Antithesis is the engine of oratory. When Obama said "We are the change we seek," the syntactic mirroring made the claim feel self-evident.', translation: 'L\'antithèse est le moteur de l\'oratoire. Quand Obama a dit "We are the change we seek", la mise en miroir syntaxique a rendu l\'affirmation évidente en soi.' },
    { speaker: 'Maître Kouyaté', role: 'B', text: 'Indeed — but notice how the erotema does the opposite. It creates doubt in order to redirect it. "Are we content to stand idle?" presupposes discontent.', translation: 'En effet — mais remarquez comment l\'érotème fait l\'inverse. Il crée le doute afin de le rediriger. "Are we content to stand idle?" présuppose le mécontentement.' },
    { speaker: 'Professor Diallo', role: 'A', text: 'Precisely. The rhetorical question is a loaded weapon — it fires by being asked. The audience cannot answer "yes" without conceding, nor "no" without contradicting the speaker\'s premise.', translation: 'Précisément. La question rhétorique est une arme chargée — elle tire en étant posée. L\'auditoire ne peut répondre "oui" sans concéder, ni "non" sans contredire la prémisse de l\'orateur.' },
    { speaker: 'Maître Kouyaté', role: 'B', text: 'Asyndeton, by contrast, strips away the connective tissue. "I came, I saw, I conquered" — each clause lands like a blow because there are no conjunctions to cushion the impact.', translation: 'L\'asyndète, en revanche, dépouille le tissu conjonctif. "I came, I saw, I conquered" — chaque proposition frappe comme un coup parce qu\'il n\'y a pas de conjonctions pour amortir l\'impact.' },
    { speaker: 'Professor Diallo', role: 'A', text: 'Whereas epistrophe provides closure. "Of the people, by the people, for the people" — the repeated phrase becomes an anchor, each iteration deepening the resonance.', translation: 'Tandis que l\'épiphore fournit la clôture. "Of the people, by the people, for the people" — la phrase répétée devient une ancre, chaque itération approfondissant la résonance.' },
    { speaker: 'Maître Kouyaté', role: 'B', text: 'And isocolon binds them all — when the clauses match in length and rhythm, the audience senses inevitability. The form IS the argument.', translation: 'Et l\'isocolon les lie tous — quand les propositions correspondent en longueur et rythme, l\'auditoire sent l\'inévitabilité. La forme EST l\'argument.' },
  ],
  conversationTitle: 'Les armes de l\'orateur',
  pronunciation: [
    { word: 'Antithesis', phonetic: '/ænˈtɪθəsɪs/', meaning: 'Antithèse', tip: 'Accent sur la deuxième syllabe : "an-TITH-uh-sis". Le "th" est expiré comme dans "think", pas sonore comme dans "this".' },
    { word: 'Asyndeton', phonetic: '/əˈsɪndɪtɒn/', meaning: 'Asyndète', tip: 'Prononcez "uh-SIN-di-ton" — accent sur "SIN". C\'est le contraire de polysyndeton : "a-" privatif + "syndeton" (conjonction).' },
    { word: 'Epistrophe', phonetic: '/ɪˈpɪstrəfi/', meaning: 'Épiphore', tip: 'Accent sur la deuxième syllabe : "ih-PIS-truh-fee". Le "ph" final se prononce "f" comme dans tout mot d\'origine grecque.' },
    { word: 'Isocolon', phonetic: '/aɪˈsɒkəlɒn/', meaning: 'Isocolon', tip: 'Prononcez "eye-SOK-uh-lon" — accent sur "SOK". Du grec "iso" (égal) + "colon" (membre de phrase). Quatre syllabes.' },
  ],
}

// ─── c2-l18: Persuasive Speech — Delivering a persuasive argument ───────────────
export const C2_L18: LessonContent = {
  vocab: [
    {
      english: 'Enthymeme',
      french: 'Enthymème',
      phonetic: '/ˈɛnθɪmiːm/',
      example: 'The enthymeme "We must act now, before it is too late" leaves the major premise unstated, letting the audience supply it themselves.',
      exampleTranslation: 'L\'enthymème "We must act now, before it is too late" laisse la prémisse majeure non énoncée, laissant l\'auditoire la fournir lui-même.',
    },
    {
      english: 'Kairos',
      french: 'Kaïros (moment opportun)',
      phonetic: '/ˈkaɪrɒs/',
      example: 'A skilled orator senses kairos — the precise moment when the audience is most receptive to persuasion.',
      exampleTranslation: 'Un orateur habile sent le kaïros — le moment précis où l\'auditoire est le plus réceptif à la persuasion.',
    },
    {
      english: 'Progymnasma',
      french: 'Progymnasme (exercice rhétorique)',
      phonetic: '/proʊˈɡɪmnæzmə/',
      example: 'Classical progymnasmata — exercises like encomium and invective — trained orators in the full repertoire of persuasive techniques.',
      exampleTranslation: 'Les progymnasmes classiques — exercices comme l\'éloge et l\'invective — formaient les orateurs au répertoire complet des techniques de persuasion.',
    },
    {
      english: 'Stasis',
      french: 'Stase (point de dispute)',
      phonetic: '/ˈsteɪsɪs/',
      example: 'Before arguing, identify the stasis — the exact point of contention upon which the entire dispute hinges.',
      exampleTranslation: 'Avant d\'argumenter, identifiez la stase — le point précis de contestation sur lequel tout le différend repose.',
    },
    {
      english: 'Topos',
      french: 'Topos (lieu commun argumentatif)',
      phonetic: '/ˈtɒpɒs/',
      example: 'The topos of "the greater good" recurs across cultures as a universally persuasive line of reasoning.',
      exampleTranslation: 'Le topos du "bien commun" revient dans toutes les cultures comme une ligne de raisonnement universellement persuasive.',
    },
  ],
  grammar: {
    title: 'L\'enthymème et la grammaire de l\'implicite',
    explanation: 'L\'enthymème est le cœur de la persuasion : c\'est un syllogisme où l\'une des prémisses est implicite. En anglais, cela se manifeste grammaticalement par des structures elliptiques — des phrases où un élément essentiel est omis parce que l\'auditeur le déduit du contexte. Par exemple : "We must act now" sous-entend "Because inaction leads to catastrophe" — le locuteur ne l\'énonce pas, mais la structure verbale "must" crée une obligation qui présuppose une urgence. Cette grammaire de l\'implicite est puissante car l\'auditeur qui complète lui-même le raisonnement s\'en approprie la conclusion. Les outils linguistiques incluent : le subjonctif hypothétique ("Were we to hesitate..."), l\'inversion ("Seldom has the stakes been higher"), et l\'ellipse du verbe principal ("If not now, when?").',
    examples: [
      { sentence: 'Were we to hesitate now, the opportunity would vanish forever.', translation: 'Si nous hésitions maintenant, l\'opportunité disparaîtrait à jamais.', isCorrect: true },
      { sentence: 'If not us, who? If not now, when?', translation: 'Si pas nous, qui ? Si pas maintenant, quand ?', isCorrect: true },
      { sentence: 'We must to act now because it is being too late.', translation: '', isCorrect: false },
      { sentence: 'Seldom has a generation faced such a consequential choice.', translation: 'Rarement une génération n\'a fait face à un choix aussi conséquent.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'We must to act now because it is being too late.', correct: 'We must act now before it is too late.', explanation: '"Must" est un modal et n\'est JAMAIS suivi de "to". De plus, "it is being too late" est incorrect — on dit "it is too late" ou "it will be too late".' },
      { wrong: 'If we would hesitate, the opportunity will vanish.', correct: 'Were we to hesitate, the opportunity would vanish.', explanation: 'L\'inversion conditionnelle formelle exige "were + sujet + to + verbe" au lieu de "if + sujet + would". C\'est une structure de registre soutenu indispensable en rhétorique.' },
    ],
  },
  conversation: [
    { speaker: 'Professor Ndiaye', role: 'A', text: 'The enthymeme is persuasion\'s sharpest instrument. When you say "We must act," the unstated premise — that inaction is catastrophic — is supplied by the listener, who thus becomes your ally.', translation: 'L\'enthymème est l\'instrument le plus tranchant de la persuasion. Quand vous dites "We must act", la prémisse non énoncée — que l\'inaction est catastrophique — est fournie par l\'auditeur, qui devient ainsi votre allié.' },
    { speaker: 'Dr. Moreau', role: 'B', text: 'That\'s the genius of it — the audience convicts itself. But only if kairos is right. Deliver that same enthymeme at the wrong moment and the unstated premise falls flat.', translation: 'C\'est là le génie — l\'auditoire se condamne lui-même. Mais seulement si le kaïros est bon. Livrez le même enthymème au mauvais moment et la prémisse non énoncée tombe à plat.' },
    { speaker: 'Professor Ndiaye', role: 'A', text: 'Which brings us to stasis. Before crafting any enthymeme, we must identify the precise point of contention. Argue past the stasis and you\'re shadowboxing.', translation: 'Ce qui nous mène à la stase. Avant de formuler un enthymème, nous devons identifier le point précis de contestation. Argumenter au-delà de la stase, c\'est boxer contre une ombre.' },
    { speaker: 'Dr. Moreau', role: 'B', text: 'Aristotle\'s topoi provide the scaffolding. The topos of consequence — "If X, then Y inevitably follows" — is perhaps the most versatile. It underpins every "slippery slope" argument in political rhetoric.', translation: 'Les topoï d\'Aristote fournissent l\'échafaudage. Le topos de la conséquence — "Si X, alors Y suit inévitablement" — est peut-être le plus polyvalent. Il sous-tend chaque argument de la "pente glissante" dans la rhétorique politique.' },
    { speaker: 'Professor Ndiaye', role: 'A', text: 'Yet observe how the progymnasmata train the orator to move beyond mere logic. The encomium teaches us to praise; the invective, to vilify. Both shape the audience\'s emotions before reason even enters.', translation: 'Cependant observez comment les progymnasmes forment l\'orateur à aller au-delà de la simple logique. L\'éloge nous apprend à louer ; l\'invective, à vilipender. Tous deux façonnent les émotions de l\'auditoire avant même que la raison n\'intervienne.' },
    { speaker: 'Dr. Moreau', role: 'B', text: 'And therein lies the art — weaving kairos, stasis, and topos into a seamless argument where logic and emotion appear inseparable. The audience should never see the scaffolding.', translation: 'Et là réside l\'art — tisser kaïros, stase et topos en un argument sans couture où logique et émotion paraissent inséparables. L\'auditoire ne doit jamais voir l\'échafaudage.' },
  ],
  conversationTitle: 'L\'art de convaincre sans démontrer',
  pronunciation: [
    { word: 'Enthymeme', phonetic: '/ˈɛnθɪmiːm/', meaning: 'Enthymème', tip: 'Accent sur la première syllabe : "EN-thi-meem". Le "th" est expiré. Les trois dernières syllabes se prononcent rapidement.' },
    { word: 'Kairos', phonetic: '/ˈkaɪrɒs/', meaning: 'Kaïros', tip: 'Prononcez "KY-ros" — le "ai" = "aï" comme dans "thai". Accent sur la première syllabe. Ne dites pas "kay-ros".' },
    { word: 'Stasis', phonetic: '/ˈsteɪsɪs/', meaning: 'Stase', tip: 'Prononcez "STAY-sis" — comme "stay" + "sis". Accent sur la première syllabe. Le "a" est long comme dans "day".' },
    { word: 'Topos', phonetic: '/ˈtɒpɒs/', meaning: 'Topos', tip: 'Prononcez "TOP-os" — les deux "o" sont ouverts comme dans "pot". Accent sur la première syllabe. Ne dites pas "toe-pos".' },
  ],
}

// ─── c2-l19: Sophistical Analysis — Stress patterns in rhetorical delivery ──────
export const C2_L19: LessonContent = {
  vocab: [
    {
      english: 'Paralipsis',
      french: 'Paralipse (prétérition)',
      phonetic: '/pəˈrælɪpsɪs/',
      example: 'Paralipsis — "I will not mention his fraud, nor his perjury" — draws attention to something by professing to ignore it.',
      exampleTranslation: 'La paralipse — "I will not mention his fraud, nor his perjury" — attire l\'attention sur quelque chose en prétendant l\'ignorer.',
    },
    {
      english: 'Occupatio',
      french: 'Occupatio (prétérition rhétorique)',
      phonetic: '/ˌɒkjʊˈpeɪʃɪoʊ/',
      example: 'The occupatio "I hardly know where to begin" feigns bewilderment to suggest the evidence is overwhelming.',
      exampleTranslation: 'L\'occupatio "I hardly know where to begin" feint la perplexité pour suggérer que les preuves sont accablantes.',
    },
    {
      english: 'Meiosis',
      french: 'Méiose (litote)',
      phonetic: '/maɪˈoʊsɪs/',
      example: 'Meiosis — calling a catastrophic flood "a bit of rain" — diminishes for ironic or rhetorical effect.',
      exampleTranslation: 'La méiose — qualifier une inondation catastrophique de "bit of rain" — diminue pour un effet ironique ou rhétorique.',
    },
    {
      english: 'Auxesis',
      french: 'Auxèse',
      phonetic: '/ɔːɡˈziːsɪs/',
      example: 'Auxesis arranges words in escalating order of intensity: "It was disappointing, then disturbing, then devastating."',
      exampleTranslation: 'L\'auxèse arrange les mots dans un ordre d\'intensité croissante : "It was disappointing, then disturbing, then devastating."',
    },
    {
      english: 'Catachresis',
      french: 'Catachrèse',
      phonetic: '/ˌkætəˈkriːsɪs/',
      example: 'Catachresis — "He bolted down the stairs" — stretches a word beyond its literal sense to create a vivid image.',
      exampleTranslation: 'La catachrèse — "He bolted down the stairs" — étend un mot au-delà de son sens littéral pour créer une image frappante.',
    },
  ],
  grammar: {
    title: 'Les figures de l\'ironie et de l\'amplification : grammaire de l\'understatement et de l\'overstatement',
    explanation: 'La méiose (litote) et l\'auxèse sont des outils grammaticaux d\'amplification ou de minimisation. La méiose utilise des structures atténuatrices — adverbes restrictifs ("hardly", "scarcely", "merely"), conditionnels ("It might be said that..."), et négations de l\'opposé ("not insignificant"). L\'auxèse utilise l\'accumulation graduelle : trois adjectifs d\'intensité croissante, trois propositions subordonnées de plus en plus dramatiques. La paralipse (prétérition) emploie la négation pour affirmer : "I will not speak of X" = "X est si important que je ne devrais pas en parler". L\'antithèse utilise la juxtaposition contrastive : "It was the best of times, it was the worst of times" pour créer une tension rhétorique. Ces figures exploitent la pragmatique linguistique — le décalage entre ce qui est dit et ce qui est signifié.',
    examples: [
      { sentence: 'The loss of life was not insignificant.', translation: 'La perte de vies n\'était pas insignifiante.', isCorrect: true },
      { sentence: 'It was a setback, then a disaster, then a catastrophe.', translation: 'Ce fut un revers, puis un désastre, puis une catastrophe.', isCorrect: true },
      { sentence: 'I will not mention his numerous embezzlements.', translation: 'Je ne mentionnerai pas ses nombreux détournements de fonds.', isCorrect: true },
      { sentence: 'The war was a little bit bad.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'The war was a little bit bad.', correct: 'The war was not without consequence. / The war was somewhat less than a triumph.', explanation: 'La méiose exige un registre soutenu. "A little bit bad" est du langage courant et non une litote rhétorique. L\'ironie repose sur le décalage entre l\'expression et la réalité.' },
      { wrong: 'I won\'t talk about his crimes, which were terrible and numerous.', correct: 'I will not speak of his crimes.', explanation: 'La paralipse perd son effet si on détaille ce qu\'on prétend ignorer. L\'art est de mentionner sans élaborer — l\'auditeur complète lui-même.' },
    ],
  },
  conversation: [
    { speaker: 'Professor Okafor', role: 'A', text: 'Paralipsis is the rhetorician\'s sleight of hand. By declaring "I shall not dwell on his duplicity," you ensure the jury dwells on nothing else.', translation: 'La paralipse est le tour de passe-passe du rhétoricien. En déclarant "I shall not dwell on his duplicity", vous assurez que le jury ne pense à rien d\'autre.' },
    { speaker: 'Dr. Descamps', role: 'B', text: 'Clever — but dangerously so. An audience that detects the device will resent the manipulation. The paralipsis must seem effortless, almost accidental.', translation: 'Astucieux — mais dangereusement. Un auditoire qui détecte le procédé en voudra à la manipulation. La paralipse doit paraître sans effort, presque accidentelle.' },
    { speaker: 'Professor Okafor', role: 'A', text: 'Whereas antithesis operates through structural contrast. "It was the best of times, it was the worst of times" creates a tension that compels the audience to hold both truths simultaneously.', translation: 'Tandis que l\'antithèse opère par un contraste structurel. "It was the best of times, it was the worst of times" crée une tension qui contraint l\'auditoire à tenir les deux vérités simultanément.' },
    { speaker: 'Dr. Descamps', role: 'B', text: 'And meiosis — the deliberate understatement — gains its force from the gap between expression and reality. "A minor inconvenience" to describe a natural disaster is devastating precisely because it withholds the expected gravity.', translation: 'Et la méiose — la litote délibérée — tire sa force du décalage entre l\'expression et la réalité. "A minor inconvenience" pour décrire une catastrophe naturelle est dévastateur précisément parce qu\'elle retient la gravité attendue.' },
    { speaker: 'Professor Okafor', role: 'A', text: 'Then auxesis provides the counter-movement — escalation. "It was regrettable; no, it was shameful; no, it was criminal." Each step intensifies the moral charge.', translation: 'Puis l\'auxèse fournit le contre-mouvement — l\'escalade. "It was regrettable; no, it was shameful; no, it was criminal." Chaque palier intensifie la charge morale.' },
    { speaker: 'Dr. Descamps', role: 'B', text: 'And when language itself fails, catachresis bends it into new shape. "The silence screamed" — logically impossible, rhetorically irrefutable. The strain on the word IS the argument.', translation: 'Et quand le langage lui-même défaille, la catachrèse le plie dans une forme nouvelle. "The silence screamed" — logiquement impossible, rhétoriquement irréfutable. La tension imposée au mot EST l\'argument.' },
  ],
  conversationTitle: 'Dire moins pour signifier plus',
  pronunciation: [
    { word: 'Paralipsis', phonetic: '/pəˈrælɪpsɪs/', meaning: 'Paralipse', tip: 'Accent sur la deuxième syllabe : "puh-RAL-ip-sis". Le "ps" final est muet comme en grec. Quatre syllabes audibles.' },
    { word: 'Antithesis', phonetic: '/ænˈtɪθəsɪs/', meaning: 'Antithèse', tip: 'Accent sur la deuxième syllabe : "an-TITH-uh-sis". Le "th" est expiré comme dans "think", pas sonore comme dans "this". Ne dites pas "an-tee-THEE-sis".' },
    { word: 'Meiosis', phonetic: '/maɪˈoʊsɪs/', meaning: 'Méiose (litote)', tip: 'Prononcez "my-OH-sis" — comme "my" + "oh" + "sis". Accent sur la deuxième syllabe. Ne confondez pas avec le terme biologique.' },
    { word: 'Auxesis', phonetic: '/ɔːɡˈziːsɪs/', meaning: 'Auxèse', tip: 'Prononcez "awg-ZEE-sis" — le "x" = "gz" comme dans "examine". Accent sur la deuxième syllabe. Le "s" final est sonore.' },
  ],
}

// ─── c2-l20: Rhetoric Sounds — Prosodic features, intonation patterns ───────────
export const C2_L20: LessonContent = {
  vocab: [
    {
      english: 'Prosody',
      french: 'Prosodie',
      phonetic: '/ˈprɒsədi/',
      example: 'Prosody — the rhythm, stress, and intonation of speech — can transform a mundane statement into a clarion call.',
      exampleTranslation: 'La prosodie — le rythme, l\'accentuation et l\'intonation de la parole — peut transformer une déclaration banale en appel à l\'action.',
    },
    {
      english: 'Cadence',
      french: 'Cadence',
      phonetic: '/ˈkeɪdəns/',
      example: 'A falling cadence at the end of a speech signals finality and conviction; a rising cadence invites continuation.',
      exampleTranslation: 'Une cadence descendante à la fin d\'un discours signale la finalité et la conviction ; une cadence montante invite à la continuation.',
    },
    {
      english: 'Caesura',
      french: 'Césure',
      phonetic: '/sɪˈzjʊərə/',
      example: 'The caesura — a deliberate pause mid-sentence — allows the orator to let a crucial point resonate before continuing.',
      exampleTranslation: 'La césure — une pause délibérée au milieu d\'une phrase — permet à l\'orateur de laisser un point crucial résonner avant de continuer.',
    },
    {
      english: 'Intonation',
      french: 'Intonation',
      phonetic: '/ˌɪntəˈneɪʃən/',
      example: 'The same words — "You will comply" — can be a statement, a question, or a threat depending entirely on intonation.',
      exampleTranslation: 'Les mêmes mots — "You will comply" — peuvent être une déclaration, une question ou une menace selon l\'intonation.',
    },
    {
      english: 'Diacope',
      french: 'Diacope (répétition interrompue)',
      phonetic: '/daɪˈækəpi/',
      example: 'It was the best of times, it was the worst of times — a classic diacope of contrasts that captures the contradictions of an era through interrupted repetition.',
      exampleTranslation: 'C\'était le meilleur des temps, c\'était le pire des temps — une diacope classique de contrastes qui saisit les contradictions d\'une époque par répétition interrompue.',
    },
  ],
  grammar: {
    title: 'La prosodie comme grammaire : comment l\'intonation modifie la structure',
    explanation: 'En anglais, la prosodie n\'est pas un simple ornement — elle modifie la fonction grammaticale. Une déclaration avec intonation montante devient une question ("You\'re leaving↗?" = "Are you leaving?"). L\'accent d\'insistance peut transformer un verbe enFocus contrastif : "I DID warn you" ajoute un auxiliaire emphatique qui change la valeur pragmatique de l\'énoncé. La césure (pause stratégique) découpe la structure syntaxique attendue : "We shall prevail — if not today, then tomorrow" crée une périphrase que la ponctuation orale rend naturelle. Le rythme trimétrique (trois battements) crée une clôture rhétorique : "Government of the people, by the people, for the people." La volta rhétorique — le tournant décisif — transforme la direction de l\'argument. Le rythme accentuel — l\'alternance régulière de syllabes fortes et faibles — crée un momentum qui emporte la conviction.',
    examples: [
      { sentence: 'You WILL comply.', translation: 'Vous OBÉIREZ.', isCorrect: true },
      { sentence: 'We shall prevail — if not today, then inevitably tomorrow.', translation: 'Nous prévaudrons — si ce n\'est aujourd\'hui, alors inévitablement demain.', isCorrect: true },
      { sentence: 'You are complying?', translation: '', isCorrect: false },
      { sentence: 'I DID emphasise the urgency of the matter.', translation: 'J\'AI souligné l\'urgence de la question.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'You are complying? (flat intonation on a question)', correct: 'You\'re complying↗? (rising intonation to signal genuine question)', explanation: 'En anglais, une question sans intonation montante n\'est pas perçue comme une question — elle sonne comme une affirmation dubitative. La prosodie EST la grammaire.' },
      { wrong: 'I did emphasised the urgency.', correct: 'I DID emphasise the urgency.', explanation: 'L\'emphase prosodique utilise l\'auxiliaire "do/did" + BASE VERBALE (sans -ed). "Did emphasised" est une erreur grammaticale — "did" est déjà au passé, le verbe principal reste à la base.' },
    ],
  },
  conversation: [
    { speaker: 'Professor Keita', role: 'A', text: 'Prosody is the invisible grammar. Consider: "You will resign." A falling cadence makes it a decree; a rising cadence, an inquiry; a flat delivery, a prophecy of doom.', translation: 'La prosodie est la grammaire invisible. Considérez : "You will resign." Une cadence descendante en fait un décret ; montante, une inquiry ; un ton plat, une prophétie de malheur.' },
    { speaker: 'Dr. Mercier', role: 'B', text: 'And the caesura — that strategic silence — is worth a thousand words. Churchill mastered it: "We shall fight..." — pause — "...on the beaches." The silence lets the resolve crystallise.', translation: 'Et la césure — ce silence stratégique — vaut mille mots. Churchill la maîtrisait : "We shall fight..." — pause — "...on the beaches." Le silence laisse la résolution se cristalliser.' },
    { speaker: 'Professor Keita', role: 'A', text: 'Precisely. The pause creates expectation, and expectation creates receptivity. An audience that leans forward is already half-persuaded.', translation: 'Précisément. La pause crée l\'attente, et l\'attente crée la réceptivité. Un auditoire qui se penche en avant est déjà à moitié persuadé.' },
    { speaker: 'Dr. Mercier', role: 'B', text: 'Then there\'s the emphatic "do" — "I DO understand your concerns." The prosodic stress on "do" doesn\'t merely intensify; it counters an implicit doubt. It\'s grammatically redundant but rhetorically essential.', translation: 'Il y a ensuite le "do" emphatique — "I DO understand your concerns." L\'accent prosodique sur "do" ne fait pas qu\'intensifier ; il contrarie un doute implicite. Il est grammaticalement redondant mais rhétoriquement essentiel.' },
    { speaker: 'Professor Keita', role: 'A', text: 'And the volta — the decisive turn in the argument — redirects the audience\'s commitment. "We have suffered, but from that suffering we draw our resolve" — the pivot from concession to conviction is where persuasion happens.', translation: 'Et la volta — le tournant décisif de l\'argument — redirige l\'engagement de l\'auditoire. "We have suffered, but from that suffering we draw our resolve" — le pivot de la concession vers la conviction est le moment où la persuasion opère.' },
    { speaker: 'Dr. Mercier', role: 'B', text: 'While cadence provides the period. A decisive drop in pitch and tempo at the close: "This... we... guarantee." The audience hears the full stop before you even reach it.', translation: 'Tandis que la cadence fournit le point final. Une chute décidée de la hauteur et du tempo à la clôture : "This... we... guarantee." L\'auditoire entend le point final avant même que vous ne l\'atteigniez.' },
  ],
  conversationTitle: 'La musique de la persuasion',
  pronunciation: [
    { word: 'Prosody', phonetic: '/ˈprɒsədi/', meaning: 'Prosodie', tip: 'Accent sur la première syllabe : "PROS-uh-dee". Le "o" est ouvert comme dans "pot". Ne dites pas "pro-ZO-dee".' },
    { word: 'Cadence', phonetic: '/ˈkeɪdəns/', meaning: 'Cadence', tip: 'Prononcez "KAY-dens" — le "a" est long comme dans "day". L\'accent est sur la première syllabe. Le "ce" final est doux.' },
    { word: 'Caesura', phonetic: '/sɪˈzjʊərə/', meaning: 'Césure', tip: 'Prononcez "siz-YOO-ruh" — le "ae" latin = "i" comme dans "Caesar". Accent sur la deuxième syllabe. Quatre syllabes.' },
    { word: 'Antithesis', phonetic: '/ænˈtɪθəsɪs/', meaning: 'Antithèse', tip: 'Accent sur la deuxième syllabe : « an-TITH-uh-sis ». Le « th » est expiré comme dans « think », pas sonore comme dans « this ».' },
  ],
}
