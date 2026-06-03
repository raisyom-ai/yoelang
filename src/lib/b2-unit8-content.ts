import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// B2 UPPER INTERMEDIATE — UNIT 8: LITERATURE & POETRY (b2-l36 through b2-l40)
// YOELANG English Learning App for Francophone Users
// Upper-intermediate: literary terms, metaphor & simile, book discussion, narrative techniques
// ════════════════════════════════════════════════════════════════════════════════

// ─── b2-l36: Literary Terms ────────────────────────────────────────────────────────
export const B2_L36: LessonContent = {
  vocab: [
    { english: 'protagonist', french: 'protagoniste', phonetic: '/prəˈtæɡənɪst/', example: 'The protagonist of the novel struggles with her identity in post-war France.', exampleTranslation: 'Le protagoniste du roman lutte avec son identité dans la France d\'après-guerre.' },
    { english: 'narrative', french: 'récit / narratif', phonetic: '/ˈnærətɪv/', example: 'The narrative shifts between two timelines, past and present.', exampleTranslation: 'Le récit alterne entre deux lignes temporelles, passé et présent.' },
    { english: 'symbolism', french: 'symbolisme', phonetic: '/ˈsɪmbəlɪzəm/', example: 'The green light in the novel is a famous example of symbolism.', exampleTranslation: 'La lumière verte dans le roman est un célèbre exemple de symbolisme.' },
    { english: 'foreshadowing', french: 'anticipation / prémonition', phonetic: '/ˈfɔːrʃædoʊɪŋ/', example: 'The dark clouds at the start of the chapter serve as foreshadowing of the tragedy.', exampleTranslation: 'Les nuages sombres au début du chapitre servent d\'anticipation de la tragédie.' },
    { english: 'allegory', french: 'allégorie', phonetic: '/ˈælɪɡɔːri/', example: 'Animal Farm is an allegory for the Russian Revolution.', exampleTranslation: 'La Ferme des animaux est une allégorie de la Révolution russe.' },
  ],
  grammar: {
    title: 'Le vocabulaire littéraire anglais : termes critiques et leurs nuances',
    explanation: 'Le vocabulaire de l\'analyse littéraire en anglais possède des nuances importantes pour les francophones : (1) « Protagonist » désigne le personnage principal, mais contrairement au français où « protagoniste » peut désigner n\'importe quel acteur de l\'histoire, en anglais « protagonist » = personnage principal UNIQUEMENT. Les autres personnages sont des « secondary characters » ou « supporting characters ». L\'antagoniste est « the antagonist ». (2) « Narrative » peut être nom ou adjectif : « the narrative » (le récit) ou « a narrative technique » (une technique narrative). (3) « Foreshadowing » n\'a pas d\'équivalent direct en français courant — on le traduit par « anticipation » ou « prémonition littéraire ». C\'est la technique qui consiste à suggérer ce qui va se passer. (4) « Allegory » en anglais est toujours au singulier : « an allegory FOR something » (une allégorie DE quelque chose), avec la préposition « for ». (5) « Symbolism » est indénombrable : « the symbolism in the poem », pas « the symbolisms».',
    examples: [
      { sentence: 'The protagonist\'s journey is a powerful allegory for personal growth.', translation: 'Le voyage du protagoniste est une puissante allégorie de la croissance personnelle.', isCorrect: true },
      { sentence: 'The foreshadowings in the first chapter prepare the reader for the ending.', translation: '', isCorrect: false },
      { sentence: 'The author uses symbolism to convey deeper meanings beyond the literal text.', translation: 'L\'auteur utilise le symbolisme pour transmettre des sens plus profonds au-delà du texte littéral.', isCorrect: true },
      { sentence: 'The narrative is told from a first-person perspective.', translation: 'Le récit est raconté d\'un point de vue à la première personne.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The foreshadowings in the first chapter prepare the reader for the ending.', correct: 'The use of foreshadowing in the first chapter prepares the reader for the ending.', explanation: '« Foreshadowing » est généralement indénombrable. On dit « the use of foreshadowing » ou « instances of foreshadowing », mais pas « foreshadowings ».' },
      { wrong: 'The book is an allegory of the war.', correct: 'The book is an allegory for the war.', explanation: 'En anglais, on dit « an allegory FOR something », pas « of something ». C\'est une spécificité de l\'anglais littéraire.' },
    ],
  },
  conversation: [
    { speaker: 'Claire', role: 'A', text: 'What did you think of the ending? I found the foreshadowing in chapter three really effective.', translation: 'Qu\'as-tu pensé de la fin ? J\'ai trouvé l\'anticipation dans le chapitre trois vraiment efficace.' },
    { speaker: 'Antoine', role: 'B', text: 'I agree. The moment the protagonist finds the old letter — that\'s brilliant foreshadowing. It hints at the betrayal without revealing it.', translation: 'Je suis d\'accord. Le moment où le protagoniste trouve la vieille lettre — c\'est une brillante anticipation. Elle suggère la trahison sans la révéler.' },
    { speaker: 'Claire', role: 'A', text: 'And the symbolism of the broken mirror — it represents her fragmented identity, don\'t you think?', translation: 'Et le symbolisme du miroir brisé — il représente son identité fragmentée, ne penses-tu pas ?' },
    { speaker: 'Antoine', role: 'B', text: 'Absolutely. The whole narrative is an allegory for the immigrant experience. The author uses it to explore themes of belonging and alienation.', translation: 'Absolument. Le récit entier est une allégorie de l\'expérience immigrée. L\'auteur l\'utilise pour explorer les thèmes de l\'appartenance et de l\'aliénation.' },
    { speaker: 'Claire', role: 'A', text: 'It\'s remarkable how she constructs the plot. The protagonist is so well-developed — I felt genuinely moved by the final scene.', translation: 'C\'est remarquable comment elle construit l\'intrigue. Le protagoniste est si bien développé — j\'ai été sincèrement ému par la scène finale.' },
    { speaker: 'Antoine', role: 'B', text: 'Me too. I\'d love to discuss it further at the book club next week. There\'s so much to unpack in this narrative.', translation: 'Moi aussi. J\'adorerais en discuter davantage au club de lecture la semaine prochaine. Il y a tellement à analyser dans ce récit.' },
  ],
  conversationTitle: 'Club de lecture : analyser un roman',
  pronunciation: [
    { word: 'Protagonist', phonetic: '/prəˈtæɡənɪst/', meaning: 'Protagoniste', tip: 'L\'accent est sur « TAG » : « pruh-TAG-uh-nist ». Le « o » est réduit en schwa. Ne mettez pas l\'accent sur la première syllabe comme en français.' },
    { word: 'Narrative', phonetic: '/ˈnærətɪv/', meaning: 'Récit', tip: 'L\'accent est sur « NAR » : « NA-ruh-tiv ». Le « a » est ouvert comme dans « cat ». Le « ive » final = « tiv ».' },
    { word: 'Allegory', phonetic: '/ˈælɪɡɔːri/', meaning: 'Allégorie', tip: 'L\'accent est sur « AL » : « AL-uh-gor-ee ». Le « a » est très ouvert. Le « gory » se prononce « gor-ee » avec le « o » long.' },
    { word: 'Foreshadowing', phonetic: '/ˈfɔːrʃædoʊɪŋ/', meaning: 'Anticipation', tip: 'L\'accent est sur « FORE » : « FOR-shad-o-ing ». Le « fore » = « for » long. Le « shad » est rapide. Le « ow » = « o ».' },
  ],
}

// ─── b2-l37: Metaphor & Simile ────────────────────────────────────────────────────────
export const B2_L37: LessonContent = {
  vocab: [
    { english: 'metaphor', french: 'métaphore', phonetic: '/ˈmetəfər/', example: 'Time is money is one of the most common metaphors in English.', exampleTranslation: 'Le temps est de l\'argent est l\'une des métaphores les plus courantes en anglais.' },
    { english: 'simile', french: 'comparaison (littéraire)', phonetic: '/ˈsɪməli/', example: 'She ran as fast as lightning — that\'s a simile, not a metaphor.', exampleTranslation: 'Elle courait aussi vite que l\'éclair — c\'est une comparaison, pas une métaphore.' },
    { english: 'personification', french: 'personnification', phonetic: '/pərˌsɒnɪfɪˈkeɪʃn/', example: 'The wind whispered through the trees is an example of personification.', exampleTranslation: 'Le vent murmurait à travers les arbres est un exemple de personnification.' },
    { english: 'imagery', french: 'imagerie / images littéraires', phonetic: '/ˈɪmɪdʒəri/', example: 'The poet uses vivid imagery to describe the battlefield.', exampleTranslation: 'Le poète utilise une imagerie vive pour décrire le champ de bataille.' },
    { english: 'hyperbole', french: 'hyperbole', phonetic: '/haɪˈpɜːrbəli/', example: 'I\'ve told you a million times is a classic example of hyperbole.', exampleTranslation: 'Je te l\'ai dit un million de fois est un exemple classique d\'hyperbole.' },
  ],
  grammar: {
    title: 'Métaphores et comparaisons : structures et différences',
    explanation: 'Les figures de style en anglais suivent des règles précises : (1) Métaphore (metaphor) : une comparaison directe SANS mot de comparaison. « Time IS money » (Le temps EST de l\'argent) — on dit qu\'une chose EST une autre. Structure : A is B. « The world is a stage. » « Her words were daggers. » (2) Comparaison (simile) : une comparaison AVEC un mot de comparaison — « like » ou « as ». « She ran LIKE the wind. » « He is AS brave AS a lion. » Structure : A is like B / A is as [adjectif] as B. (3) Personnification (personification) : attribuer des qualités humaines à des choses inanimées. « The storm ROARED. » « Opportunity KNOCKED. » (4) Hyperbole (hyperbole) : exagération délibérée. « I\'m so hungry I could eat a horse. » ATTENTION : « hyperbole » se prononce /haɪˈpɜːrbəli/ — l\'accent est sur « PER », pas sur « hy » comme en français ! (5) Différence clé : la métaphore est plus forte et plus directe que la comparaison. « He\'s a lion » (métaphore) est plus puissant que « He\'s like a lion » (comparaison).',
    examples: [
      { sentence: 'The classroom was a zoo the moment the teacher stepped out.', translation: 'La classe était un zoo dès que le professeur est sorti.', isCorrect: true },
      { sentence: 'Her eyes were like diamonds sparkling in the sunlight.', translation: 'Ses yeux étaient comme des diamants étincelant au soleil.', isCorrect: true },
      { sentence: 'The flowers danced in the breeze.', translation: 'Les fleurs dansaient dans la brise.', isCorrect: true },
      { sentence: 'He is as a lion in battle.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'He is as a lion in battle.', correct: 'He is like a lion in battle. / He is as brave as a lion in battle.', explanation: '« As » seul ne peut pas introduire une comparaison directe. On utilise « like » (He is like a lion) ou la structure « as + adjectif + as » (He is as brave as a lion).' },
      { wrong: 'She\'s a butterfly like in the garden.', correct: 'She\'s a butterfly in the garden. (métaphore) / She flutters like a butterfly in the garden. (comparaison)', explanation: 'Ne mélangez pas métaphore et comparaison dans la même phrase. Choisissez : métaphore (A is B) OU comparaison (A is like B), mais pas les deux.' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Singh', role: 'A', text: 'Today we\'re examining figurative language. Can someone give me an example of a metaphor from the poem we read?', translation: "Aujourd'hui nous examinons le langage figuré. Quelqu'un peut-il me donner un exemple de métaphore du poème que nous avons lu ?" },
    { speaker: 'Léa', role: 'B', text: 'The line « the city is a sleeping giant » — that\'s a metaphor. It directly equates the city to a giant.', translation: 'La ligne « la ville est un géant endormi » — c\'est une métaphore. Elle assimile directement la ville à un géant.' },
    { speaker: 'Prof. Singh', role: 'A', text: 'Excellent. And how would you turn that into a simile?', translation: 'Excellent. Et comment transformeriez-vous cela en comparaison ?' },
    { speaker: 'Léa', role: 'B', text: '« The city is like a sleeping giant. » The simile softens the comparison — it\'s less direct than the metaphor.', translation: '« La ville est comme un géant endormi. » La comparaison adoucit le rapprochement — elle est moins directe que la métaphore.' },
    { speaker: 'Prof. Singh', role: 'A', text: 'Precisely. And what about the personification in stanza four? « The wind whispered secrets to the ancient oaks. »', translation: 'Précisément. Et la personnification dans la strophe quatre ? « Le vent murmurait des secrets aux chênes anciens. »' },
    { speaker: 'Léa', role: 'B', text: 'The wind is given the human ability to whisper secrets. Combined with the imagery of the ancient oaks, it creates a mysterious atmosphere. There\'s also hyperbole when the poet says « a thousand years of silence » — that\'s clearly an exaggeration.', translation: 'Le vent reçoit la capacité humaine de murmurer des secrets. Combiné à l\'imagerie des chênes anciens, cela crée une atmosphère mystérieuse. Il y a aussi une hyperbole quand le poète dit « mille ans de silence » — c\'est clairement une exagération.' },
  ],
  conversationTitle: 'Cours de littérature : le langage figuré',
  pronunciation: [
    { word: 'Metaphor', phonetic: '/ˈmetəfər/', meaning: 'Métaphore', tip: 'L\'accent est sur « MET » : « MET-uh-fer ». Le « ph » = « f ». Le « or » final est doux. Ne dites pas « mé-ta-fore » à la française.' },
    { word: 'Simile', phonetic: '/ˈsɪməli/', meaning: 'Comparaison', tip: 'Prononcez « SIM-uh-lee » — l\'accent est sur « SIM ». Le « i » est court comme dans « bit ». Ne confondez pas avec « similarly » qui a l\'accent sur « LAR ».' },
    { word: 'Hyperbole', phonetic: '/haɪˈpɜːrbəli/', meaning: 'Hyperbole', tip: 'L\'accent est sur « PER » : « haï-PER-buh-lee ». ATTENTION : ne dites pas « i-per-bol » à la française ! C\'est 4 syllabes en anglais, l\'accent est sur la deuxième.' },
    { word: 'Personification', phonetic: '/pərˌsɒnɪfɪˈkeɪʃn/', meaning: 'Personnification', tip: 'L\'accent est sur « KAY » : « per-son-uh-fi-KAY-shun ». C\'est un mot long de 6 syllabes. La terminaison « -tion » = « shun ».' },
  ],
}

// ─── b2-l38: Book Discussion ────────────────────────────────────────────────────────
export const B2_L38: LessonContent = {
  vocab: [
    { english: 'plot twist', french: 'rebondissement / coup de théâtre', phonetic: '/plɒt twɪst/', example: 'The plot twist at the end completely changed my understanding of the story.', exampleTranslation: 'Le rebondissement à la fin a complètement changé ma compréhension de l\'histoire.' },
    { english: 'character development', french: 'développement des personnages', phonetic: '/ˈkærɪktər dɪˈveləpmənt/', example: 'The character development in this novel is subtle but profound.', exampleTranslation: 'Le développement des personnages dans ce roman est subtil mais profond.' },
    { english: 'setting', french: 'cadre / décor', phonetic: '/ˈsetɪŋ/', example: 'The setting of the novel — a remote village in winter — creates a claustrophobic atmosphere.', exampleTranslation: 'Le cadre du roman — un village isolé en hiver — crée une atmosphère claustrophobe.' },
    { english: 'theme', french: 'thème', phonetic: '/θiːm/', example: 'The theme of redemption runs throughout the author\'s work.', exampleTranslation: 'Le thème de la rédemption traverse toute l\'œuvre de l\'auteur.' },
    { english: 'page-turner', french: 'livre captivant / page-turner', phonetic: '/ˈpeɪdʒ ˈtɜːrnər/', example: 'This thriller is an absolute page-turner — I couldn\'t put it down.', exampleTranslation: 'Ce thriller est absolument captivant — je ne pouvais pas le lâcher.' },
  ],
  grammar: {
    title: 'Discuter de littérature : exprimer des opinions nuancées',
    explanation: 'Discuter de livres en anglais exige un vocabulaire spécifique et des structures pour exprimer des opinions nuancées : (1) Exprimer son opinion : « I found the plot... » + adjectif (« I found the plot gripping / predictable / far-fetched ») ; « What struck me most was... » ; « I was particularly impressed by... ». (2) Nuancer son propos : « While I enjoyed the setting, I felt the character development was... » ; « On the one hand... on the other hand... » ; « It\'s not that the book is bad, but rather that... ». (3) Réagir aux opinions des autres : « That\'s an interesting perspective, but I saw it differently... » ; « I\'d go further and say... » ; « I take your point, although I think... ». (4) Analyser plutôt que juger : Au lieu de « I liked it / I didn\'t like it », dites « The author effectively conveys... » / « The narrative structure allows... » / « The use of imagery creates... ». (5) Vocabulaire de recommandation : « I\'d highly recommend it to anyone who... » ; « It\'s a must-read for fans of... » ; « It might not appeal to everyone, but... »',
    examples: [
      { sentence: 'While I found the setting atmospheric, I felt the plot twist was somewhat predictable.', translation: 'Bien que j\'aie trouvé le cadre atmosphérique, j\'ai trouvé le rebondissement quelque peu prévisible.', isCorrect: true },
      { sentence: 'The book is good, I liked it.', translation: '', isCorrect: false },
      { sentence: 'What struck me most was the author\'s ability to create empathy for such a flawed protagonist.', translation: 'Ce qui m\'a le plus frappé, c\'est la capacité de l\'auteur à créer de l\'empathie pour un protagoniste aussi imparfait.', isCorrect: true },
      { sentence: 'I\'d highly recommend it to anyone who enjoys character-driven narratives.', translation: 'Je le recommanderais vivement à quiconque apprécie les récits centrés sur les personnages.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The book is good, I liked it.', correct: 'I found the book compelling, particularly because of its well-crafted plot and rich character development.', explanation: 'En discussion littéraire, évitez les jugements vagues comme « good » ou « I liked it ». Soyez spécifique sur ce que vous avez apprécié et pourquoi.' },
      { wrong: 'The theme of the book is about love.', correct: 'The central theme of the book is love. / The book explores themes of love and loss.', explanation: 'On dit « the theme IS love » (sans « about ») ou « the book explores themes OF love ». Ne dites pas « the theme is about » — c\'est redondant.' },
    ],
  },
  conversation: [
    { speaker: 'Marie', role: 'A', text: 'So, what did everyone think of the novel? I found it absolutely gripping — a real page-turner.', translation: 'Alors, qu\'avez-vous tous pensé du roman ? Je l\'ai trouvé absolument captivant — un vrai livre qu\'on ne peut pas lâcher.' },
    { speaker: 'Tomás', role: 'B', text: 'I see your point, but I felt the plot twist was a bit far-fetched. It didn\'t feel earned to me.', translation: 'Je comprends ton point, mais j\'ai trouvé le rebondissement un peu tiré par les cheveux. Il ne me semblait pas mérité.' },
    { speaker: 'Marie', role: 'A', text: 'That\'s an interesting perspective. I saw it differently — I thought the foreshadowing prepared us for it. What about the character development?', translation: 'C\'est une perspective intéressante. Je le voyais différemment — je pensais que l\'anticipation nous y préparait. Et le développement des personnages ?' },
    { speaker: 'Tomás', role: 'B', text: 'That was the strongest aspect, in my view. The protagonist\'s transformation was subtle and believable. The setting of wartime London really contributed to that.', translation: 'C\'était l\'aspect le plus fort, à mon avis. La transformation du protagoniste était subtile et crédible. Le cadre du Londres en guerre y a vraiment contribué.' },
    { speaker: 'Marie', role: 'A', text: 'I\'d go further and say the theme of resilience is what makes it so powerful. The author conveys it through imagery rather than explicit statements.', translation: 'J\'irais plus loin et je dirais que le thème de la résilience est ce qui le rend si puissant. L\'auteur le transmet à travers l\'imagerie plutôt que par des déclarations explicites.' },
    { speaker: 'Tomás', role: 'B', text: 'Well put. I\'d recommend it to anyone who enjoys character-driven stories with a strong sense of place, even if the ending might not appeal to everyone.', translation: 'Bien dit. Je le recommanderais à quiconque apprécie les histoires centrées sur les personnages avec un fort sens du lieu, même si la fin pourrait ne pas plaire à tout le monde.' },
  ],
  conversationTitle: 'Club de lecture : discussion d\'un roman',
  pronunciation: [
    { word: 'Gripping', phonetic: '/ˈɡrɪpɪŋ/', meaning: 'Captivant', tip: 'Prononcez « GRIP-ing » — le « i » est court comme dans « bit ». Le « ng » final : langue contre le palais. Ne dites pas « gri-ping ».' },
    { word: 'Atmospheric', phonetic: '/ˌætməsˈferɪk/', meaning: 'Atmosphérique', tip: 'L\'accent est sur « FER » : « at-muh-SFER-ik ». Le « o » de « mos » disparaît presque. Ne mettez pas l\'accent sur la première syllabe.' },
    { word: 'Protagonist', phonetic: '/prəˈtæɡənɪst/', meaning: 'Protagoniste', tip: 'L\'accent est sur « TAG » : « pruh-TAG-uh-nist ». Le « o » est réduit en schwa. Ne mettez pas l\'accent sur la première syllabe comme en français.' },
    { word: 'Resilience', phonetic: '/rɪˈzɪliəns/', meaning: 'Résilience', tip: 'L\'accent est sur « ZIL » : « rih-ZIL-yuhns ». Le premier « i » est court. Le « ience » final se réduit en « yuhns ».' },
  ],
}

// ─── b2-l39: Narrative Techniques ────────────────────────────────────────────────────
export const B2_L39: LessonContent = {
  vocab: [
    { english: 'unreliable narrator', french: 'narrateur non fiable', phonetic: '/ˌʌnrɪˈlaɪəbl ˈnæreɪtər/', example: 'The novel uses an unreliable narrator, forcing the reader to question everything.', exampleTranslation: 'Le roman utilise un narrateur non fiable, forçant le lecteur à tout remettre en question.' },
    { english: 'stream of consciousness', french: 'courant de conscience / monologue intérieur', phonetic: '/striːm əv ˈkɒnʃəsnəs/', example: 'The author employs stream of consciousness to reveal the character\'s inner thoughts.', exampleTranslation: 'L\'auteur emploie le courant de conscience pour révéler les pensées intérieures du personnage.' },
    { english: 'flashback', french: 'retour en arrière / flashback', phonetic: '/ˈflæʃbæk/', example: 'The flashback to her childhood explains her fear of water.', exampleTranslation: 'Le retour en arrière sur son enfance explique sa peur de l\'eau.' },
    { english: 'cliffhanger', french: 'suspense / fin en suspens', phonetic: '/ˈklɪfhæŋər/', example: 'The chapter ends on a cliffhanger that makes you immediately start the next one.', exampleTranslation: 'Le chapitre se termine sur un suspense qui vous fait immédiatement commencer le suivant.' },
    { english: 'point of view', french: 'point de vue', phonetic: '/pɔɪnt əv vjuː/', example: 'The story is told from a third-person limited point of view.', exampleTranslation: 'L\'histoire est racontée d\'un point de vue à la troisième personne limitée.' },
  ],
  grammar: {
    title: 'Les techniques narratives : structures avancées pour analyser un récit',
    explanation: 'L\'analyse des techniques narratives en anglais nécessite un vocabulaire technique précis : (1) Les points de vue (point of view) : « First-person » (je/narrateur personnage) ; « Second-person » (tu/narrateur rare) ; « Third-person limited » (il/elle avec accès aux pensées d\'un seul personnage) ; « Third-person omniscient » (il/elle avec accès aux pensées de tous les personnages) ; « Third-person objective » (il/elle sans accès aux pensées). (2) Les structures temporelles : « In medias res » (au milieu de l\'action) ; « Chronological narrative » (ordre chronologique) ; « Non-linear narrative » (récit non linéaire) ; « Frame narrative » (récit encadré / mise en abyme). (3) L\'ironie narrative : « Dramatic irony » (le lecteur sait ce que le personnage ignore) ; « Situational irony » (le résultat est l\'inverse de ce qui était attendu) ; « Verbal irony » (dire le contraire de ce qu\'on pense). (4) Les expressions d\'analyse : « The author employs... » / « The use of... serves to... » / « This technique allows the reader to... » / « By choosing a... perspective, the author... »',
    examples: [
      { sentence: 'The use of an unreliable narrator forces the reader to question the truth of every event described.', translation: 'L\'utilisation d\'un narrateur non fiable oblige le lecteur à remettre en question la vérité de chaque événement décrit.', isCorrect: true },
      { sentence: 'The story is told from third-person.', translation: '', isCorrect: false },
      { sentence: 'By employing stream of consciousness, the author gives us direct access to the character\'s inner world.', translation: "En employant le courant de conscience, l'auteur nous donne un accès direct au monde intérieur du personnage.", isCorrect: true },
      { sentence: 'The dramatic irony in this scene creates tension, as the audience knows the protagonist is walking into a trap.', translation: "L'ironie dramatique dans cette scène crée de la tension, car le public sait que le protagoniste marche dans un piège.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The story is told from third-person.', correct: 'The story is told from a third-person perspective. / The story is told in the third person.', explanation: 'On dit « from a third-person perspective » ou « in the third person », pas simplement « from third-person ». L\'article et la préposition sont nécessaires.' },
      { wrong: 'The author uses a stream of consciousness technique to show his thoughts.', correct: 'The author uses the stream of consciousness technique to reveal the character\'s thoughts.', explanation: '« Stream of consciousness » prend l\'article défini « the ». De plus, utilisez « reveal » (révéler) au lieu de « show » (montrer) pour un vocabulaire plus littéraire.' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Osei', role: 'A', text: 'Let\'s discuss the narrative techniques in Mrs Dalloway. How does Woolf use stream of consciousness?', translation: 'Discutons des techniques narratives dans Mrs Dalloway. Comment Woolf utilise-t-elle le courant de conscience ?' },
    { speaker: 'Yuki', role: 'B', text: 'Woolf shifts between characters\' inner thoughts without warning, creating a fluid, impressionistic narrative. It\'s quite different from a traditional third-person omniscient point of view.', translation: 'Woolf passe d\'une pensée intérieure à l\'autre sans avertissement, créant un récit fluide et impressionniste. C\'est assez différent d\'un point de vue à la troisième personne omniscient traditionnel.' },
    { speaker: 'Dr. Osei', role: 'A', text: 'Good observation. And what about the flashbacks? How do they function in the novel?', translation: 'Bonne observation. Et les retours en arrière ? Comment fonctionnent-ils dans le roman ?' },
    { speaker: 'Yuki', role: 'B', text: 'They blur the line between past and present. The flashbacks to Clarissa\'s youth with Sally create dramatic irony — we understand her repressed feelings even when she doesn\'t acknowledge them.', translation: 'Ils estompent la frontière entre passé et présent. Les retours en arrière sur la jeunesse de Clarissa avec Sally créent une ironie dramatique — nous comprenons ses sentiments refoulés même quand elle ne les reconnaît pas.' },
    { speaker: 'Dr. Osei', role: 'A', text: 'Excellent analysis. And would you say Septimus serves as an unreliable narrator at times?', translation: 'Excellente analyse. Et diriez-vous que Septimus sert parfois de narrateur non fiable ?' },
    { speaker: 'Yuki', role: 'B', text: 'In a way, yes. His hallucinations make his sections feel like a cliffhanger — we\'re never sure what\'s real. The contrast with Clarissa\'s more grounded perspective is what makes the narrative so powerful.', translation: 'D\'une certaine manière, oui. Ses hallucinations font que ses passages ressemblent à un suspense — nous ne sommes jamais sûrs de ce qui est réel. Le contraste avec la perspective plus ancrée de Clarissa est ce qui rend le récit si puissant.' },
  ],
  conversationTitle: 'Analyse littéraire : techniques narratives',
  pronunciation: [
    { word: 'Omniscient', phonetic: '/ɒmˈnɪsiənt/', meaning: 'Omniscient', tip: 'L\'accent est sur « NIS » : « om-NIS-ee-unt ». Le « sci » = « see » (pas « shee » !). C\'est la même racine que « science ». Ne dites pas « om-ni-shient ».' },
    { word: 'Chronological', phonetic: '/ˌkrɒnəˈlɒdʒɪkl/', meaning: 'Chronologique', tip: 'L\'accent est sur « LOJ » : « kruh-NOL-uh-jik-l ». Le « ch » = « k » (comme dans « chronique »). La terminaison « -ical » = « ik-l ».' },
    { word: 'Irony', phonetic: '/ˈaɪrəni/', meaning: 'Ironie', tip: 'L\'accent est sur « I » : « AÏ-ruh-ni ». Le « i » initial est long comme dans « eye ». Ne dites PAS « i-ro-ny » à la française !' },
    { word: 'Cliffhanger', phonetic: '/ˈklɪfhæŋər/', meaning: 'Suspense', tip: 'Prononcez « KLIF-hang-er » — l\'accent est sur « CLIF ». Le « ang » est nasal anglais (langue contre le palais). Ne dites pas « cliff-an-jé ».' },
  ],
}

// ─── b2-l40: Literature Sounds ────────────────────────────────────────────────────────
export const B2_L40: LessonContent = {
  vocab: [
    { english: 'genre', french: 'genre', phonetic: '/ˈʒɒnrə/', example: 'What genre would you classify this novel as — historical fiction or literary fiction?', exampleTranslation: 'Dans quel genre classeriez-vous ce roman — fiction historique ou fiction littéraire ?' },
    { english: 'rhythm', french: 'rythme', phonetic: '/ˈrɪðəm/', example: 'The rhythm of the prose mirrors the character\'s heartbeat.', exampleTranslation: 'Le rythme de la prose reflète le battement de cœur du personnage.' },
    { english: 'stanza', french: 'strophe', phonetic: '/ˈstænzə/', example: 'The poem consists of four stanzas, each with six lines.', exampleTranslation: 'Le poème se compose de quatre strophes, chacune de six vers.' },
    { english: 'verse', french: 'vers', phonetic: '/vɜːrs/', example: 'She writes both free verse and formal poetry.', exampleTranslation: 'Elle écrit tanto en vers libres que de la poésie formelle.' },
    { english: 'sonnet', french: 'sonnet', phonetic: '/ˈsɒnɪt/', example: 'Shakespeare wrote 154 sonnets, each following a specific rhyme scheme.', exampleTranslation: 'Shakespeare a écrit 154 sonnets, chacun suivant un schéma de rimes spécifique.' },
  ],
  grammar: {
    title: 'La prononciation des termes littéraires : pièges pour francophones',
    explanation: 'Les termes littéraires anglais sont pleins de pièges phonétiques pour les francophones : (1) « Genre » : /ˈʒɒnrə/ — l\'accent est sur la première syllabe et la prononciation est très différente du français ! On prononce « ZHON-ruh ». Le « re » final se réduit. (2) « Rhythm » : /ˈrɪðəm/ — le « rh » = « r » et le « th » est sonore (comme dans « the ») : « RI-thum ». Ne dites PAS « ri-thèm » avec un « th » français. (3) « Stanza » : /ˈstænzə/ — l\'accent est sur « STA » et le « a » est très ouvert : « STAN-zuh ». Ne dites pas « stan-za » avec un « a » plat. (4) « Sonnet » : /ˈsɒnɪt/ — l\'accent est sur « SON » et le « et » final se prononce « it » (pas « é » !) : « SON-it ». (5) « Verse » : /vɜːrs/ — le « er » = « ur » long comme dans « bird » : « VURS ». Ne dites pas « vèrs » à la française.',
    examples: [
      { sentence: 'The poet uses a regular rhythm throughout the sonnet.', translation: 'Le poète utilise un rythme régulier tout au long du sonnet.', isCorrect: true },
      { sentence: 'She wrote a beautiful sonnett about love.', translation: '', isCorrect: false },
      { sentence: 'The genre of magical realism blends fantasy with realistic narrative.', translation: 'Le genre du réalisme magique mêle la fantaisie au récit réaliste.', isCorrect: true },
      { sentence: 'Each stanza contains four verses with an ABAB rhyme scheme.', translation: 'Chaque strophe contient quatre vers avec un schéma de rimes ABAB.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She wrote a beautiful sonnett about love.', correct: 'She wrote a beautiful sonnet about love.', explanation: '« Sonnet » s\'écrit avec un seul « t » et un seul « n » : s-o-n-n-e-t. Et la prononciation est « SON-it », pas « so-NET ».' },
      { wrong: 'The rhythm of the poem is very musical.', correct: 'The rhythm of the poem is very musical. (correct orthographiquement, mais prononcez « RI-thum »)', explanation: 'Le mot « rhythm » est l\'un des plus difficiles à prononcer pour les francophones. Pratiquez : « RI » (i court) + « th » (langue entre les dents, sonore) + « um » (schwa). Ne dites PAS « ri-thèm ».' },
    ],
  },
  conversation: [
    { speaker: 'Nadia', role: 'A', text: 'I\'ve been reading this collection of sonnets. The rhythm is so precise — each line follows iambic pentameter perfectly.', translation: 'J\'ai lu ce recueil de sonnets. Le rythme est si précis — chaque vers suit parfaitement le pentamètre iambique.' },
    { speaker: 'Erik', role: 'B', text: 'I struggle with poetry sometimes. I can identify the stanza structure, but the deeper meaning often escapes me.', translation: 'J\'ai parfois des difficultés avec la poésie. Je peux identifier la structure des strophes, mais le sens plus profond m\'échappe souvent.' },
    { speaker: 'Nadia', role: 'A', text: 'That\'s normal. The genre requires multiple readings. Try reading the verse aloud — the rhythm often reveals the meaning.', translation: 'C\'est normal. Le genre exige des lectures multiples. Essayez de lire les vers à haute voix — le rythme révèle souvent le sens.' },
    { speaker: 'Erik', role: 'B', text: 'Good advice. I also find free verse much harder to analyse. Without a regular rhythm, I\'m not sure where to start.', translation: 'Bon conseil. Je trouve aussi le vers libre beaucoup plus difficile à analyser. Sans rythme régulier, je ne sais pas par où commencer.' },
    { speaker: 'Nadia', role: 'A', text: 'With free verse, focus on imagery and line breaks instead. The poet makes deliberate choices about where each verse ends.', translation: 'Avec le vers libre, concentrez-vous plutôt sur l\'imagerie et les coupes de vers. Le poète fait des choix délibérés sur la fin de chaque vers.' },
    { speaker: 'Erik', role: 'B', text: 'That makes sense. I\'ll try that approach with the next poem. Do you have any recommendations for a good introduction to this genre?', translation: 'C\'est logique. J\'essaierai cette approche avec le prochain poème. Avez-vous des recommandations pour une bonne introduction à ce genre ?' },
  ],
  conversationTitle: 'Poésie : rythme, strophes et sens',
  pronunciation: [
    { word: 'Genre', phonetic: '/ˈʒɒnrə/', meaning: 'Genre', tip: 'Prononcez « ZHON-ruh » — le « g » est doux comme dans « mirage ». L\'accent est sur la première syllabe. Le « re » final se réduit. Très différent du français !' },
    { word: 'Rhythm', phonetic: '/ˈrɪðəm/', meaning: 'Rythme', tip: 'Prononcez « RI-thum » — le « th » est sonore (comme dans « the »), langue entre les dents. Le « y » disparaît. C\'est l\'un des mots les plus difficiles pour les francophones !' },
    { word: 'Sonnet', phonetic: '/ˈsɒnɪt/', meaning: 'Sonnet', tip: 'Prononcez « SON-it » — l\'accent est sur « SON » et le « et » final se prononce « it » (comme dans « bit »). Ne dites PAS « so-NÉ » à la française !' },
    { word: 'Stanza', phonetic: '/ˈstænzə/', meaning: 'Strophe', tip: 'Prononcez « STAN-zuh » — l\'accent est sur « STA » et le « a » est très ouvert comme dans « cat ». Le « a » final est réduit en schwa.' },
  ],
}
