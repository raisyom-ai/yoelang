import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C1 ADVANCED — UNIT 3: ADVANCED LITERATURE (c1-l11 through c1-l15)
// YOELANG English Learning App for Francophone Users
// Advanced: literary criticism, narrative theory, book discussion, deconstruction
// ════════════════════════════════════════════════════════════════════════════════

// ─── c1-l11: Literary Criticism ───────────────────────────────────────────────────
export const C1_L11: LessonContent = {
  vocab: [
    { english: 'allegory', french: 'allégorie', phonetic: '/ˈæləɡɔːri/', example: 'The novel functions as an allegory for the human condition.', exampleTranslation: 'Le roman fonctionne comme une allégorie de la condition humaine.' },
    { english: 'motif', french: 'motif / thème récurrent', phonetic: '/məʊˈtiːf/', example: 'Water appears as a recurring motif throughout the poet\'s work.', exampleTranslation: 'L\'eau apparaît comme un motif récurrent à travers l\'œuvre du poète.' },
    { english: 'juxtaposition', french: 'juxtaposition', phonetic: '/ˌdʒʌkstəpəˈzɪʃn/', example: 'The juxtaposition of wealth and poverty is central to the novel\'s critique.', exampleTranslation: 'La juxtaposition de la richesse et de la pauvreté est centrale dans la critique du roman.' },
    { english: 'subtext', french: 'sous-texte / message implicite', phonetic: '/ˈsʌbtekst/', example: 'The subtext of the play reveals a searing commentary on colonialism.', exampleTranslation: 'Le sous-texte de la pièce révère un commentaire percutant sur le colonialisme.' },
    { english: 'ambiguity', french: 'ambiguïté', phonetic: '/ˌæmbɪˈɡjuːɪti/', example: 'The deliberate ambiguity of the ending invites multiple interpretations.', exampleTranslation: 'L\'ambiguïté délibérée de la fin invite à de multiples interprétations.' },
  ],
  grammar: {
    title: 'La critique littéraire : vocabulaire analytique et interprétation',
    explanation: 'La critique littéraire anglaise possède un vocabulaire technique précis que les francophones doivent maîtriser : (1) « Allegory » ≠ « metaphor » : une allegory est un récit entier où les personnages et événements représentent des idées abstraites (Orwell\'s Animal Farm) ; une metaphor est une figure de style ponctuelle (« Time is money »). (2) « Motif » ≠ « theme » : un motif est un élément récurrent concret (image, symbole, phrase) ; un theme est une idée abstraite (l\'amour, la mort, la justice). Le motif sert le thème. (3) « Subtext » = ce qui est dit sans être dit explicitement. En anglais, on dit « read between the lines » pour déceler le subtext. (4) « Ambiguity » en littérature est souvent une qualité (deliberate ambiguity), pas un défaut. On parle de « productive ambiguity » quand l\'ambiguïté enrichit l\'interprétation.',
    examples: [
      { sentence: 'The juxtaposition of innocence and corruption creates a productive ambiguity that resists simplistic interpretation.', translation: 'La juxtaposition de l\'innocence et de la corruption crée une ambiguïté productive qui résiste à une interprétation simpliste.', isCorrect: true },
      { sentence: 'The author uses a metaphor to tell the whole story as an allegory.', translation: '', isCorrect: false },
      { sentence: 'The motif of mirrors recurs throughout the novel, reinforcing the theme of identity.', translation: 'Le motif des miroirs revient tout au long du roman, renforçant le thème de l\'identité.', isCorrect: true },
      { sentence: 'The subtext suggests a critique of patriarchal structures that the surface narrative never explicitly addresses.', translation: 'Le sous-texte suggère une critique des structures patriarcales que le récit de surface n\'aborde jamais explicitement.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The author uses a metaphor to tell the whole story as an allegory.', correct: 'The entire narrative functions as an allegory, employing metaphor as one of its devices.', explanation: 'Une allegory est un récit entier, pas une simple metaphor. On ne « utilise pas une métaphore pour raconter une allégorie » — l\'allégorie EST le récit, et la métaphore est un outil parmi d\'autres à l\'intérieur.' },
      { wrong: 'The ambiguity of the poem is a weakness.', correct: 'The deliberate ambiguity of the poem enriches its interpretive possibilities.', explanation: 'En critique littéraire anglaise, l\'ambiguïté est rarement une faiblesse — elle est souvent intentionnelle et productive. Dites « deliberate ambiguity » ou « productive ambiguity » plutôt que de la présenter comme un défaut.' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Anderson', role: 'A', text: 'Let\'s consider the allegory in Kafka\'s « The Trial ». Is it purely about totalitarianism, or does the ambiguity suggest something more?', translation: 'Considérons l\'allégorie dans « Le Procès » de Kafka. Est-elle purement sur le totalitarisme, ou l\'ambiguïté suggère-t-elle quelque chose de plus ?' },
    { speaker: 'Student Yuki', role: 'B', text: 'I\'d argue the subtext points to existential anxiety. The juxtaposition of bureaucratic absurdity and personal despair is too deliberate to be merely political.', translation: 'Je dirais que le sous-texte pointe vers l\'anxiété existentielle. La juxtaposition de l\'absurdité bureaucratique et du désespoir personnel est trop délibérée pour être simplement politique.' },
    { speaker: 'Prof. Anderson', role: 'A', text: 'Interesting. And what about the motif of the door? It recurs throughout the novel.', translation: 'Intéressant. Et le motif de la porte ? Il revient tout au long du roman.' },
    { speaker: 'Student Yuki', role: 'B', text: 'The door represents both access and exclusion. The ambiguity is productive — we can never be sure if Joseph K. is kept out or chooses not to enter.', translation: 'La porte représente à la fois l\'accès et l\'exclusion. L\'ambiguïté est productive — on ne peut jamais être sûr si Joseph K. est tenu à l\'extérieur ou choisit de ne pas entrer.' },
    { speaker: 'Prof. Anderson', role: 'A', text: 'That\'s a perceptive reading. The subtext indeed resists a single, reductive interpretation.', translation: 'C\'est une lecture perspicace. Le sous-texte résiste en effet à une interprétation unique et réductrice.' },
    { speaker: 'Student Yuki', role: 'B', text: 'Perhaps that\'s the point — the allegory operates on multiple levels simultaneously.', translation: 'C\'est peut-être là le propos — l\'allégorie fonctionne à plusieurs niveaux simultanément.' },
  ],
  conversationTitle: 'Critique littéraire : allégorie et ambiguïté chez Kafka',
  pronunciation: [
    { word: 'Allegory', phonetic: '/ˈæləɡɔːri/', meaning: 'Allégorie', tip: 'L\'accent est sur « AL » : « AL-uh-gor-ee ». Ne dites pas « a-lé-go-ri » à la française. Le « g » est dur comme dans « go ».' },
    { word: 'Juxtaposition', phonetic: '/ˌdʒʌkstəpəˈzɪʃn/', meaning: 'Juxtaposition', tip: 'L\'accent est sur « ZI » : « juk-stuh-puh-ZISH-un ». C\'est un mot long de 5 syllabes. La terminaison « -tion » = « shun ».' },
    { word: 'Ambiguity', phonetic: '/ˌæmbɪˈɡjuːɪti/', meaning: 'Ambiguïté', tip: 'L\'accent est sur « GU » : « am-bih-GYOO-ih-ti ». Le « g » est dur. L\'accent secondaire est sur « AM ».' },
    { word: 'Subtext', phonetic: '/ˈsʌbtekst/', meaning: 'Sous-texte', tip: 'L\'accent est sur « SUB » : « SUB-tekst ». Prononcez en deux syllabes nettes. Ne dites pas « sub-teks-tuh ».' },
  ],
}

// ─── c1-l12: Narrative Theory ─────────────────────────────────────────────────────
export const C1_L12: LessonContent = {
  vocab: [
    { english: 'narrator', french: 'narrateur / narratrice', phonetic: '/ˈnæreɪtər/', example: 'The unreliable narrator forces the reader to question every account.', exampleTranslation: 'Le narrateur non fiable oblige le lecteur à remettre en question chaque récit.' },
    { english: 'diegesis', french: 'diégèse', phonetic: '/ˌdaɪəˈdʒiːsɪs/', example: 'The film blurs the boundary between diegesis and metalepsis.', exampleTranslation: 'Le film brouille la frontière entre diégèse et métalepse.' },
    { english: 'foreshadowing', french: 'anticipation / présage', phonetic: '/ˈfɔːrʃædəʊɪŋ/', example: 'The opening scene contains subtle foreshadowing of the tragic ending.', exampleTranslation: 'La scène d\'ouverture contient un présage subtil de la fin tragique.' },
    { english: 'stream of consciousness', french: 'courant de conscience / monologue intérieur', phonetic: '/striːm əv ˈkɒnʃəsnəs/', example: 'Woolf\'s use of stream of consciousness revolutionised narrative technique.', exampleTranslation: 'L\'utilisation du courant de conscience par Woolf a révolutionné la technique narrative.' },
    { english: 'unreliable', french: 'non fiable / peu digne de foi', phonetic: '/ˌʌnrɪˈlaɪəbl/', example: 'The unreliable narrator is a hallmark of postmodern fiction.', exampleTranslation: 'Le narrateur non fiable est une marque de la fiction postmoderne.' },
  ],
  grammar: {
    title: 'La théorie narrative : vocabulaire technique de la narratologie anglaise',
    explanation: 'La narratologie anglaise utilise un vocabulaire technique que les francophones doivent connaître : (1) « Narrator » ≠ « author » : le narrator est la voix qui raconte (construction textuelle) ; l\'author est la personne réelle qui écrit. Confondre les deux est l\'erreur fondamentale en critique littéraire (fallacy of intentionalism). (2) « Unreliable narrator » = narrateur dont la crédibilité est compromise — il ment, se trompe, ou manque d\'information. Exemples : Humbert Humbert dans Lolita, le narrateur de « The Tell-Tale Heart ». (3) « Diegesis » (récit) ≠ « mimesis » (imitation) : diegesis = le narrateur raconte ; mimesis = on montre directement (dialogue, scène). Le cinéma parle de « diegetic sound » (son provenant du monde du film) vs « non-diegetic sound » (bande-son ajoutée). (4) « Foreshadowing » ≠ « flashforward » : foreshadowing = indices subtils d\'événements futurs ; flashforward = saut explicite vers l\'avenir.',
    examples: [
      { sentence: 'The unreliable narrator undermines the reader\'s trust by contradicting earlier statements.', translation: 'Le narrateur non fiable mine la confiance du lecteur en contredisant des déclarations antérieures.', isCorrect: true },
      { sentence: 'The author says that the character is lying.', translation: '', isCorrect: false },
      { sentence: 'The foreshadowing in the first chapter subtly prepares the reader for the revelation in the final act.', translation: 'L\'anticipation dans le premier chapitre prépare subtilement le lecteur à la révélation dans l\'acte final.', isCorrect: true },
      { sentence: 'Woolf employs stream of consciousness to render the interiority of her characters without authorial mediation.', translation: 'Woolf emploie le courant de conscience pour rendre l\'intériorité de ses personnages sans médiation auctoriale.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The author says that the character is lying.', correct: 'The narrator\'s account is contradicted by the text, suggesting unreliability.', explanation: 'En critique littéraire, on ne confond pas l\'author et le narrator. On ne peut pas savoir ce que l\'auteur « dit » — on analyse ce que le narrateur rapporte et comment le texte le contredit. Dites « the narrator » ou « the text suggests ».' },
      { wrong: 'The movie used foreshadowing by showing the ending first.', correct: 'The movie used a flashforward to show a glimpse of the ending before returning to the present timeline.', explanation: 'Montrer la fin explicitement est un « flashforward », pas du « foreshadowing ». Le foreshadowing est subtil et indirect — un indice, pas une révélation.' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Dubois', role: 'A', text: 'Today we\'re discussing narrative reliability. Can anyone identify what makes the narrator of « The Great Gatsby » unreliable?', translation: 'Aujourd\'hui, nous discutons de la fiabilité narrative. Quelqu\'un peut-il identifier ce qui rend le narrateur de « Gatsby le Magnifique » non fiable ?' },
    { speaker: 'Student Aiden', role: 'B', text: 'Nick Carraway claims to be honest, but his admiration for Gatsby colours everything he reports. It\'s a form of diegetic bias.', translation: 'Nick Carraway prétend être honnête, mais son admiration pour Gatsby colore tout ce qu\'il rapporte. C\'est une forme de biais diégétique.' },
    { speaker: 'Prof. Dubois', role: 'A', text: 'Excellent. And how does Fitzgerald use foreshadowing to complicate Nick\'s reliability?', translation: 'Excellent. Et comment Fitzgerald utilise-t-il l\'anticipation pour compliquer la fiabilité de Nick ?' },
    { speaker: 'Student Aiden', role: 'B', text: 'The early references to Gatsby\'s death are presented as foreshadowing, but Nick already knows the outcome. He\'s constructing the diegesis retroactively.', translation: 'Les références anticipées à la mort de Gatsby sont présentées comme des présages, mais Nick connaît déjà le dénouement. Il construit la diégèse rétroactivement.' },
    { speaker: 'Prof. Dubois', role: 'A', text: 'Precisely. The stream of consciousness in the final passages further blurs the line between Nick\'s memory and his imagination.', translation: 'Précisément. Le courant de conscience dans les passages finaux brouille davantage la frontière entre la mémoire de Nick et son imagination.' },
    { speaker: 'Student Aiden', role: 'B', text: 'So the unreliability isn\'t a flaw — it\'s the point. The narrator is a character within his own diegesis.', translation: 'Donc la non-fiabilité n\'est pas un défaut — c\'est le propos. Le narrateur est un personnage dans sa propre diégèse.' },
  ],
  conversationTitle: 'Théorie narrative : fiabilité et diégèse chez Fitzgerald',
  pronunciation: [
    { word: 'Narrator', phonetic: '/ˈnæreɪtər/', meaning: 'Narrateur', tip: 'L\'accent est sur « NA » : « NA-ray-ter ». Le « a » est ouvert comme dans « cat ». Ne dites pas « na-ra-teur » à la française.' },
    { word: 'Diegesis', phonetic: '/ˌdaɪəˈdʒiːsɪs/', meaning: 'Diégèse', tip: 'L\'accent est sur « GEE » : « daï-uh-JEE-sis ». C\'est un mot grec. Le « g » est doux comme dans « genre ». Le pluriel : « diegeses » = « daï-uh-JEE-seez ».' },
    { word: 'Foreshadowing', phonetic: '/ˈfɔːrʃædəʊɪŋ/', meaning: 'Anticipation / Présage', tip: 'L\'accent est sur « FORE » : « FOR-shad-o-wing ». C\'est un mot composé : « fore » (avant) + « shadow » (ombre). L\'accent est sur le premier élément.' },
    { word: 'Unreliable', phonetic: '/ˌʌnrɪˈlaɪəbl/', meaning: 'Non fiable', tip: 'L\'accent est sur « LI » : « un-ri-LY-uh-bl ». Le préfixe « un- » est rapide. L\'accent secondaire est sur « UN ».' },
  ],
}

// ─── c1-l13: Book Club Discussion ─────────────────────────────────────────────────
export const C1_L13: LessonContent = {
  vocab: [
    { english: 'to resonate', french: 'résonner / toucher', phonetic: '/ˈrezəneɪt/', example: 'The themes of the novel still resonate with contemporary readers.', exampleTranslation: 'Les thèmes du roman résonnent encore avec les lecteurs contemporains.' },
    { english: 'to evoke', french: 'évoquer / susciter', phonetic: '/ɪˈvəʊk/', example: 'The author evokes a powerful sense of nostalgia through sensory detail.', exampleTranslation: 'L\'auteur évoque un puissant sentiment de nostalgie à travers le détail sensoriel.' },
    { english: 'poignant', french: 'poignant / émouvant', phonetic: '/ˈpɔɪnjənt/', example: 'The final chapter is deeply poignant without being sentimental.', exampleTranslation: 'Le chapitre final est profondément poignant sans être sentimental.' },
    { english: 'to draw parallels', french: 'établir des parallèles', phonetic: '/drɔː ˈpærəlelz/', example: 'One can draw parallels between the protagonist\'s journey and the myth of Odysseus.', exampleTranslation: 'On peut établir des parallèles entre le voyage du protagoniste et le mythe d\'Ulysse.' },
    { english: 'compelling', french: 'captivant / convaincant', phonetic: '/kəmˈpelɪŋ/', example: 'She makes a compelling argument for reading the novel as political satire.', exampleTranslation: 'Elle présente un argument convaincant pour lire le roman comme une satire politique.' },
  ],
  grammar: {
    title: 'La discussion littéraire : exprimer des opinions nuancées en anglais',
    explanation: 'Discuter de littérature en anglais exige des formulations qui expriment l\'opinion sans l\'imposer : (1) Proposer une interprétation : « I\'d argue that... » / « One could read this as... » / « It seems to me that... » — toujours au conditionnel ou avec des atténuations. (2) Être d\'accord avec nuance : « I take your point, but... » / « That\'s a valid reading, though I\'d add... » / « I\'d go further and suggest... ». (3) Exprimer un désaccord respectueux : « I\'m not entirely convinced that... » / « I wonder whether that reading overlooks... » / « With respect, I think there\'s another way to look at this.». (4) Établir des liens : « That resonates with... » / « One could draw parallels with... » / « This echoes the earlier point about... ». (5) « Compelling » est le compliment suprême en critique littéraire — il signifie à la fois convaincant et captivant.',
    examples: [
      { sentence: 'I\'d argue that the novel can be read as a compelling critique of neoliberalism, though I recognise that other interpretations are equally valid.', translation: 'Je dirais que le roman peut être lu comme une critique convaincante du néolibéralisme, bien que je reconnaisse que d\'autres interprétations sont également valables.', isCorrect: true },
      { sentence: 'You\'re wrong about the ending.', translation: '', isCorrect: false },
      { sentence: 'The scene evokes a poignant sense of loss that resonates with the broader themes of the work.', translation: 'La scène évoque un poignant sentiment de perte qui résonne avec les thèmes plus larges de l\'œuvre.', isCorrect: true },
      { sentence: 'One could draw parallels between the protagonist\'s moral dilemma and the philosophical debates of the era.', translation: 'On pourrait établir des parallèles entre le dilemme moral du protagoniste et les débats philosophiques de l\'époque.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'You\'re wrong about the ending.', correct: 'I\'m not entirely convinced by that reading of the ending. I wonder whether it might be more productive to consider...', explanation: 'En discussion littéraire, on ne dit jamais « you\'re wrong » — l\'interprétation n\'est pas une question de vérité. Utilisez « I\'m not entirely convinced » ou « I wonder whether » pour exprimer un désaccord respectueux.' },
      { wrong: 'The book is very touching.', correct: 'The novel is deeply poignant without resorting to sentimentality.', explanation: '« Touching » est trop vague et informel pour la critique littéraire. « Poignant » est plus précis et intellectuellement respectable. Ajouter « without sentimentality » montre une analyse plus fine.' },
    ],
  },
  conversation: [
    { speaker: 'Book Club Host Elena', role: 'A', text: 'Let\'s discuss the ending. I found it deeply poignant — the way she walks away without looking back.', translation: 'Discutons de la fin. Je l\'ai trouvée profondément poignante — la façon dont elle s\'éloigne sans se retourner.' },
    { speaker: 'Member Raj', role: 'B', text: 'I\'d argue that the ending is more ambiguous than poignant. The author evokes both loss and liberation simultaneously.', translation: 'Je dirais que la fin est plus ambiguë que poignante. L\'auteur évoque à la fois la perte et la libération simultanément.' },
    { speaker: 'Book Club Host Elena', role: 'A', text: 'That\'s a compelling reading. I can see how one could draw parallels with the opening scene, where she\'s similarly alone but in a very different emotional state.', translation: 'C\'est une lecture convaincante. Je vois comment on pourrait établir des parallèles avec la scène d\'ouverture, où elle est semblablement seule mais dans un état émotionnel très différent.' },
    { speaker: 'Member Raj', role: 'B', text: 'Exactly. The circular structure resonates with the theme of recurrence — the idea that liberation is never final.', translation: 'Exactement. La structure circulaire résonne avec le thème de la récurrence — l\'idée que la libération n\'est jamais définitive.' },
    { speaker: 'Book Club Host Elena', role: 'A', text: 'I\'m not entirely convinced that liberation is impossible, but I take your point about the cyclical nature of the narrative.', translation: 'Je ne suis pas entièrement convaincue que la libération soit impossible, mais je comprends votre point sur la nature cyclique du récit.' },
    { speaker: 'Member Raj', role: 'B', text: 'Fair enough. Perhaps the ambiguity itself is the point — the novel refuses to give us closure, and that\'s what makes it so compelling.', translation: 'Juste. Peut-être que l\'ambiguïté elle-même est le propos — le roman refuse de nous donner de conclusion, et c\'est ce qui le rend si captivant.' },
  ],
  conversationTitle: 'Club de lecture : interprétations nuancées d\'un roman',
  pronunciation: [
    { word: 'Resonate', phonetic: '/ˈrezəneɪt/', meaning: 'Résonner', tip: 'L\'accent est sur « RE » : « REZ-uh-nayt ». Ne dites pas « ré-zo-nay » à la française. Le « s » sonne comme « z ».' },
    { word: 'Evoke', phonetic: '/ɪˈvəʊk/', meaning: 'Évoquer', tip: 'L\'accent est sur « VOKE » : « ih-VOHK ». Le « e » initial est court comme dans « bit ». Ne dites pas « é-voke ».' },
    { word: 'Poignant', phonetic: '/ˈpɔɪnjənt/', meaning: 'Poignant', tip: 'Prononcez « POYN-yunt » — l\'accent est sur « POY ». Le « gn » ne se prononce PAS comme « n » français. Le « t » final est léger mais présent.' },
    { word: 'Compelling', phonetic: '/kəmˈpelɪŋ/', meaning: 'Convaincant / Captivant', tip: 'L\'accent est sur « PEL » : « kum-PEL-ing ». Le « com » est réduit. Le « ing » final est clair. Ne dites pas « kom-pel-ling ».' },
  ],
}

// ─── c1-l14: Deconstructive Analysis ──────────────────────────────────────────────
export const C1_L14: LessonContent = {
  vocab: [
    { english: 'to deconstruct', french: 'déconstruire', phonetic: '/ˌdiːkənˈstrʌkt/', example: 'Derrida deconstructs the binary opposition between speech and writing.', exampleTranslation: 'Derrida déconstruit l\'opposition binaire entre la parole et l\'écriture.' },
    { english: 'binary', french: 'binaire', phonetic: '/ˈbaɪnəri/', example: 'The text challenges the nature-culture binary that underpins Western thought.', exampleTranslation: 'Le texte remet en question le binaire nature-culture qui sous-tend la pensée occidentale.' },
    { english: 'aporia', french: 'aporie', phonetic: '/əˈpɔːriə/', example: 'The text reaches an aporia — a point at which its own logic collapses.', exampleTranslation: 'Le texte atteint une aporie — un point où sa propre logique s\'effondre.' },
    { english: 'to subvert', french: 'subvertir / renverser', phonetic: '/səbˈvɜːrt/', example: 'The novel subverts the conventions of the detective genre.', exampleTranslation: 'Le roman subvertit les conventions du genre policier.' },
    { english: 'discourse', french: 'discours', phonetic: '/ˈdɪskɔːrs/', example: 'Foucault analyses how discourse shapes our understanding of power.', exampleTranslation: 'Foucault analyse comment le discours façonne notre compréhension du pouvoir.' },
  ],
  grammar: {
    title: 'L\'analyse déconstructive : le langage de la théorie critique',
    explanation: 'La déconstruction et la théorie critique utilisent un vocabulaire spécialisé : (1) « Deconstruct » ≠ « analyse » ≠ « criticise » : deconstruct = démontrer qu\'un texte mine ses propres présuppositions ; analyse = examiner méthodiquement ; criticise = évaluer les mérites et défauts. (2) « Binary opposition » : la déconstruction s\'attaque aux oppositions binaires (nature/culture, homme/femme, raison/émotion) en montrant que le terme « inférieur » est en fait nécessaire au terme « supérieur ». (3) « Aporia » : un paradoxe insoluble, un point où le texte se contredit. Terme central chez Derrida. Pluriel : « aporiae » /əˈpɔːriːiː/. (4) « Subvert » ≠ « destroy » : subvert = miner de l\'intérieur, retourner contre lui-même ; destroy = détruire de l\'extérieur. La subversion est plus subtile. (5) « Discourse » au sens de Foucault = système de pratiques linguistiques qui construit la réalité sociale, pas simplement un « discours » au sens courant.',
    examples: [
      { sentence: 'By deconstructing the speech-writing binary, Derrida reveals how Western philosophy privileges presence over absence.', translation: 'En déconstruisant le binaire parole-écriture, Derrida révèle comment la philosophie occidentale privilégie la présence sur l\'absence.', isCorrect: true },
      { sentence: 'The author destroyed the genre conventions.', translation: '', isCorrect: false },
      { sentence: 'The novel subverts gender binaries by presenting characters who exist outside the male-female dichotomy.', translation: 'Le roman subvertit les binaires de genre en présentant des personnages qui existent en dehors de la dichotomie homme-femme.', isCorrect: true },
      { sentence: 'The text arrives at an aporia that reveals the instability of its own foundational claims.', translation: 'Le texte arrive à une aporie qui révèle l\'instabilité de ses propres affirmations fondatrices.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The author destroyed the genre conventions.', correct: 'The novel subverts the conventions of the genre by turning them against themselves.', explanation: '« Destroy » est trop brutal et impropre à l\'analyse littéraire. « Subvert » implique un retournement de l\'intérieur, une mine subtile, pas une destruction brutale. La subversion est le concept clé.' },
      { wrong: 'Derrida analyses the text and says it is wrong.', correct: 'Derrida deconstructs the text, exposing the aporia at the heart of its argument.', explanation: '« Analyse » et « say it is wrong » réduisent la déconstruction à une simple critique. La déconstruction est une démarche philosophique qui montre comment un texte se mine lui-même — utilisez « deconstruct » et « aporia ».' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Becker', role: 'A', text: 'Let\'s apply a deconstructive reading to this passage. What binary oppositions can you identify?', translation: 'Appliquons une lecture déconstructive à ce passage. Quelles oppositions binaires pouvez-vous identifier ?' },
    { speaker: 'Graduate Student Amara', role: 'B', text: 'The most obvious is the reason-emotion binary. The narrator privileges rational discourse while dismissing emotional responses as irrational.', translation: 'La plus évidente est le binaire raison-émotion. Le narrateur privilégie le discours rationnel tout en rejetant les réponses émotionnelles comme irrationnelles.' },
    { speaker: 'Prof. Becker', role: 'A', text: 'Good. Now, how might we deconstruct that binary? Where does the text subvert its own hierarchy?', translation: 'Bien. Maintenant, comment pourrions-nous déconstruire ce binaire ? Où le texte subvertit-il sa propre hiérarchie ?' },
    { speaker: 'Graduate Student Amara', role: 'B', text: 'In the final chapter, the narrator\'s carefully reasoned argument collapses into an emotional outburst — an aporia. The discourse undermines itself.', translation: 'Dans le chapitre final, l\'argument soigneusement raisonné du narrateur s\'effondre en une explosion émotionnelle — une aporie. Le discours se mine lui-même.' },
    { speaker: 'Prof. Becker', role: 'A', text: 'Precisely. The text reaches an aporia that reveals the impossibility of maintaining the reason-emotion hierarchy it initially established.', translation: 'Précisément. Le texte atteint une aporie qui révèle l\'impossibilité de maintenir la hiérarchie raison-émotion qu\'il avait initialement établie.' },
    { speaker: 'Graduate Student Amara', role: 'B', text: 'So the deconstructive reading shows that the « inferior » term — emotion — was always already present within the « superior » term — reason.', translation: 'Donc la lecture déconstructive montre que le terme « inférieur » — l\'émotion — était toujours déjà présent dans le terme « supérieur » — la raison.' },
  ],
  conversationTitle: 'Analyse déconstructive : binaires et apories',
  pronunciation: [
    { word: 'Deconstruct', phonetic: '/ˌdiːkənˈstrʌkt/', meaning: 'Déconstruire', tip: 'L\'accent est sur « STRUCT » : « dee-kun-STRUKT ». Le préfixe « de- » est long. Le « con » est réduit. Ne dites pas « dé-kon-stru-kt » à la française.' },
    { word: 'Aporia', phonetic: '/əˈpɔːriə/', meaning: 'Aporie', tip: 'L\'accent est sur « POR » : « uh-POR-ee-uh ». Le « a » initial est réduit en schwa. Le pluriel « aporiae » = « uh-POR-ee-ee ».' },
    { word: 'Subvert', phonetic: '/səbˈvɜːrt/', meaning: 'Subvertir', tip: 'L\'accent est sur « VERT » : « suh-VURT ». Le « sub » est réduit. Le « v » est sonore. Ne dites pas « sub-vair ».' },
    { word: 'Discourse', phonetic: '/ˈdɪskɔːrs/', meaning: 'Discours', tip: 'Comme nom, l\'accent est sur « DIS » : « DIS-kors ». Comme verbe, l\'accent est sur « COURSE » : « dis-KORS ». En théorie critique, c\'est le nom qui est utilisé.' },
  ],
}

// ─── c1-l15: Literature Sounds ────────────────────────────────────────────────────
export const C1_L15: LessonContent = {
  vocab: [
    { english: 'genre', french: 'genre', phonetic: '/ˈʒɒnrə/', example: 'The novel defies easy classification within any single genre.', exampleTranslation: 'Le roman défie une classification facile dans un seul genre.' },
    { english: 'protagonist', french: 'protagoniste', phonetic: '/prəˈtæɡənɪst/', example: 'The protagonist undergoes a profound transformation over the course of the narrative.', exampleTranslation: 'Le protagoniste subit une transformation profonde au fil du récit.' },
    { english: 'epiphany', french: 'épiphanie / révélation', phonetic: '/ɪˈpɪfəni/', example: 'The protagonist experiences an epiphany that redefines their understanding of the world.', exampleTranslation: 'Le protagoniste vit une épiphanie qui redéfinit sa compréhension du monde.' },
    { english: 'satire', french: 'satire', phonetic: '/ˈsætaɪər/', example: 'The novel operates as a biting satire of contemporary consumer culture.', exampleTranslation: 'Le roman fonctionne comme une satire mordante de la culture de consommation contemporaine.' },
    { english: 'irony', french: 'ironie', phonetic: '/ˈaɪrəni/', example: 'The dramatic irony lies in the audience knowing what the characters do not.', exampleTranslation: 'L\'ironie dramatique réside dans le fait que le public sait ce que les personnages ignorent.' },
  ],
  grammar: {
    title: 'Prononciation littéraire : termes critiques que les francophones prononcent mal',
    explanation: 'Les termes littéraires d\'origine française ou grecque sont souvent mal prononcés par les francophones en anglais : (1) « Genre » : en anglais /ˈʒɒnrə/ — le « e » final se prononce comme un schwa, et le mot a DEUX syllabes, pas une. Ne dites pas « zhonr » à la française. (2) « Protagonist » : /prəˈtæɡənɪst/ — l\'accent est sur « TAG », pas sur « pro » ou « nist ». Ne dites pas « pro-ta-go-nist » à la française. (3) « Epiphany » : /ɪˈpɪfəni/ — l\'accent est sur « PIF », pas sur « e » ou « ny ». Le « ph » = « f ». (4) « Satire » : /ˈsætaɪər/ — l\'accent est sur « SAT », le « i » se prononce « aï ». Ne dites pas « sa-teer ». (5) « Irony » : /ˈaɪrəni/ — l\'accent est sur « I », le « i » = « aï ». Ne dites pas « ee-ro-ny » ni « i-ron-i » à la française.',
    examples: [
      { sentence: 'The genre defies classification, blending elements of satire and tragedy.', translation: 'Le genre défie la classification, mêlant des éléments de satire et de tragédie.', isCorrect: true },
      { sentence: 'The pro-TA-go-nist experiences an epiphany.', translation: '', isCorrect: false },
      { sentence: 'The dramatic irony creates tension between what the audience knows and what the protagonist believes.', translation: 'L\'ironie dramatique crée une tension entre ce que le public sait et ce que le protagoniste croit.', isCorrect: true },
      { sentence: 'Joyce\'s use of epiphany in « Dubliners » transforms mundane moments into profound revelations.', translation: 'L\'utilisation de l\'épiphanie par Joyce dans « Dublinois » transforme les moments banals en révélations profondes.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The pro-TA-go-nist experiences an epiphany.', correct: 'The pro-TAG-uh-nist experiences an epiphany.', explanation: '« Protagonist » se prononce « pruh-TAG-uh-nist » avec l\'accent sur « TAG ». Ne mettez pas l\'accent sur « TA » comme en français. Le « pro » est réduit en schwa.' },
      { wrong: 'It\'s a sa-TEER of modern society.', correct: 'It\'s a SAT-ire of modern society.', explanation: '« Satire » se prononce « SAT-aï-er » avec l\'accent sur « SAT ». Le « i » se prononce « aï » comme dans « fire ». Ne dites pas « sa-TEER » à la française.' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Nakamura', role: 'A', text: 'Let\'s consider the genre of this work. Is it satire, irony, or something more complex?', translation: 'Considérons le genre de cette œuvre. Est-ce de la satire, de l\'ironie, ou quelque chose de plus complexe ?' },
    { speaker: 'Student Liam', role: 'B', text: 'I\'d say it\'s satirical in tone but genuinely tragic in its epiphanies. The protagonist\'s moments of insight are too painful to be merely ironic.', translation: 'Je dirais que c\'est satirique dans le ton mais véritablement tragique dans ses épiphanies. Les moments d\'éclair du protagoniste sont trop douloureux pour être simplement ironiques.' },
    { speaker: 'Prof. Nakamura', role: 'A', text: 'Interesting. So the irony functions as a mask for something deeper — the epiphany reveals what the satire conceals.', translation: 'Intéressant. Donc l\'ironie fonctionne comme un masque pour quelque chose de plus profond — l\'épiphanie révèle ce que la satire dissimule.' },
    { speaker: 'Student Liam', role: 'B', text: 'Exactly. And the dramatic irony — where we see what the protagonist cannot — makes those epiphanies all the more devastating.', translation: 'Exactement. Et l\'ironie dramatique — où nous voyons ce que le protagoniste ne peut pas voir — rend ces épiphanies d\'autant plus dévastatrices.' },
    { speaker: 'Prof. Nakamura', role: 'A', text: 'A compelling argument. The genre, then, is not simply satire or tragedy — it occupies the liminal space between the two.', translation: 'Un argument convaincant. Le genre, alors, n\'est pas simplement satire ou tragédie — il occupe l\'espace liminal entre les deux.' },
    { speaker: 'Student Liam', role: 'B', text: 'Which is perhaps the most authentic representation of the human experience — never purely comic nor purely tragic.', translation: 'Ce qui est peut-être la représentation la plus authentique de l\'expérience humaine — jamais purement comique ni purement tragique.' },
  ],
  conversationTitle: 'Analyse littéraire : genre, satire et épiphanie',
  pronunciation: [
    { word: 'Genre', phonetic: '/ˈʒɒnrə/', meaning: 'Genre', tip: 'Prononcez « ZHON-ruh » — DEUX syllabes en anglais, pas une. Le « e » final est un schwa. Ne dites pas « zhonr » à la française. Le « r » est anglais.' },
    { word: 'Protagonist', phonetic: '/prəˈtæɡənɪst/', meaning: 'Protagoniste', tip: 'L\'accent est sur « TAG » : « pruh-TAG-uh-nist ». Le « pro » est réduit. Ne dites pas « pro-ta-go-niste » à la française avec l\'accent sur « ta ».' },
    { word: 'Epiphany', phonetic: '/ɪˈpɪfəni/', meaning: 'Épiphanie', tip: 'L\'accent est sur « PIF » : « ih-PIF-uh-nee ». Le « e » initial est court. Le « ph » = « f ». Le « y » final = « ee ».' },
    { word: 'Irony', phonetic: '/ˈaɪrəni/', meaning: 'Ironie', tip: 'L\'accent est sur « I » : « AÏ-ruh-nee ». Le « i » = « aï » comme dans « eye ». Ne dites pas « ee-ro-ny » à la française. C\'est l\'erreur la plus courante.' },
  ],
}
