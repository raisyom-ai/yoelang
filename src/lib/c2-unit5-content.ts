import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C2 MASTERY — UNIT 5: CULTURAL FLUENCY (c2-l21 through c2-l25)
// YOELANG English Learning App for Francophone Users
// Near-native mastery: cultural literacy, intertextuality, cross-cultural pragmatics
// ════════════════════════════════════════════════════════════════════════════════

// ─── c2-l21: Fluency Vocabulary — Cultural literacy, intertextuality terms ──────
export const C2_L21: LessonContent = {
  vocab: [
    {
      english: 'Intertextuality',
      french: 'Intertextualité',
      phonetic: '/ˌɪntərˌtɛkstʃuˈælɪti/',
      example: 'The novel\'s intertextuality is evident in its sustained dialogue with Milton and Dante.',
      exampleTranslation: 'L\'intertextualité du roman est évidente dans son dialogue soutenu avec Milton et Dante.',
    },
    {
      english: 'Polyphony',
      french: 'Polyphonie',
      phonetic: '/pəˈlɪfəni/',
      example: 'Bakhtin\'s concept of polyphony illuminates how Dostoevsky\'s characters embody competing ideologies.',
      exampleTranslation: 'Le concept de polyphonie de Bakhtine éclaire la façon dont les personnages de Dostoïevski incarnent des idéologies concurrentes.',
    },
    {
      english: 'Zeitgeist',
      french: 'Esprit du temps',
      phonetic: '/ˈzaɪtɡaɪst/',
      example: 'The film captured the zeitgeist of post-millennial anxiety with uncanny precision.',
      exampleTranslation: 'Le film a capturé l\'esprit du temps de l\'anxiété post-millénaire avec une précision troublante.',
    },
    {
      english: 'Milieu',
      french: 'Milieu',
      phonetic: '/miːˈljɜː/',
      example: 'She moved effortlessly through the intellectual milieu of Left Bank Parisian salons.',
      exampleTranslation: 'Elle évoluait sans effort dans le milieu intellectuel des salons parisiens de la Rive Gauche.',
    },
    {
      english: 'Weltanschauung',
      french: 'Vision du monde',
      phonetic: '/ˈvɛltænʃaʊʊŋ/',
      example: 'His Weltanschauung was shaped as much by Stoic philosophy as by Calvinist theology.',
      exampleTranslation: 'Sa vision du monde fut façonnée autant par la philosophie stoïcienne que par la théologie calviniste.',
    },
  ],
  grammar: {
    title: 'Les références intertextuelles et la cohésion discursive avancée',
    explanation: `À un niveau C2, la maîtrise de l'anglais exige de savoir tisser des références intertextuelles et d'employer des dispositifs cohésifs sophistiqués. L'ellipse (omission d'éléments récupérables du contexte) et la substitution (remplacement d'un élément par un autre) sont deux mécanismes fondamentaux de la cohésion textuelle en anglais. L'ellipse nominale permet d'éviter la répétition : "She studied Renaissance art; he, Baroque" (il a étudié l'art baroque — le verbe est elliptique). La substitution verbale utilise "do/did" : "She speaks French fluently, and so does he." Les connecteurs métadiscursifs ("incidentally", "by the same token", "be that as it may") permettent de naviguer entre les niveaux de discours avec fluidité. Ces marqueurs signalent au lecteur ou à l'auditeur comment interpréter la relation entre les propositions au-delà de la simple logique causale ou temporelle.`,
    examples: [
      { sentence: 'She read Proust obsessively; he, Balzac.', translation: 'Elle lisait Proust obsessionnellement ; lui, Balzac.', isCorrect: true },
      { sentence: 'The author alludes to Genesis throughout, and so do her critics inadvertently.', translation: 'L\'auteure fait allusion à la Genèse tout au long, et ses critiques le font aussi involontairement.', isCorrect: true },
      { sentence: 'She read Proust obsessively; he read Balzac obsessively too.', translation: '', isCorrect: false },
      { sentence: 'Be that as it may, the intertextual borrowing cannot be reduced to mere pastiche.', translation: 'Ceci étant, l\'emprunt intertextuel ne saurait être réduit à un simple pastiche.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She read Proust obsessively; he read Balzac obsessively too.', correct: 'She read Proust obsessively; he, Balzac.', explanation: 'La répétition du verbe et de l\'adverbe est stylistiquement lourde. L\'ellipse nominale est préférable en discours soutenu : on omet ce qui est récupérable contextuellement.' },
      { wrong: 'So he does too.', correct: 'And so does he.', explanation: 'En anglais, la substitution verbale avec "do" exige l\'inversion sujet-auxiliaire dans les constructions affirmatives enchaînées : "so does he", pas "so he does too" (ce dernier est grammaticalement possible mais redondant et moins élégant à ce niveau).' },
    ],
  },
  conversation: [
    { speaker: 'Elise', role: 'A', text: 'I\'ve been re-reading Eliot\'s "The Waste Land" and the intertextuality is, frankly, staggering — the Sanskrit, the Grail legends, the Elizabethan echoes.', translation: 'Je relis "La Terre vaine" d\'Eliot et l\'intertextualité est, franchement, stupéfiante — le sanskrit, les légendes du Graal, les échos élisabéthains.', },
    { speaker: 'Marcus', role: 'B', text: 'Staggering, yes, though one could argue the polyphony borders on pastiche at times. Where does homage end and derivation begin?', translation: 'Stupéfiante, oui, bien qu\'on puisse soutenir que la polyphonie frôle le pastiche par moments. Où s\'arrête l\'hommage et où commence la dérivation ?', },
    { speaker: 'Elise', role: 'A', text: 'That\'s precisely the tension. The Weltanschauung of the poem is fragmented by design — it mirrors the post-war Zeitgeist.', translation: 'C\'est précisément la tension. La vision du monde du poème est fragmentée par conception — elle reflète l\'esprit du temps de l\'après-guerre.', },
    { speaker: 'Marcus', role: 'B', text: 'Be that as it may, one must also consider the intellectual milieu that made such fragmentation not merely possible but inevitable.', translation: 'Ceci étant, il faut aussi considérer le milieu intellectuel qui a rendu une telle fragmentation non seulement possible mais inévitable.', },
    { speaker: 'Elise', role: 'A', text: 'Incidentally, have you read Perloff\'s critique? She argues the intertextuality is performative, not merely referential.', translation: 'Soit dit en passant, avez-vous lu la critique de Perloff ? Elle soutient que l\'intertextualité est performative, non pas simplement référentielle.', },
    { speaker: 'Marcus', role: 'B', text: 'I have. And by the same token, one could extend that argument to the entire modernist project — Joyce, Pound, the lot of them.', translation: 'Oui. Et par la même logique, on pourrait étendre cet argument à l\'ensemble du projet moderniste — Joyce, Pound, tous autant qu\'ils sont.', },
    { speaker: 'Elise', role: 'A', text: 'Precisely. Each text becomes a node in an infinite web of cultural references, and the reader must navigate it with equal fluency.', translation: 'Précisément. Chaque texte devient un nœud dans une toile infinie de références culturelles, et le lecteur doit la naviguer avec une égale fluidité.', },
  ],
  conversationTitle: 'Intertextualité et modernisme',
  pronunciation: [
    {
      word: 'Intertextuality',
      phonetic: '/ˌɪntərˌtɛkstʃuˈælɪti/',
      meaning: 'Intertextualité',
      tip: 'Accent principal sur "AL" (antépénultième syllabe) : "in-ter-tek-stchoo-AL-i-ti". Ne placez pas l\'accent sur la dernière syllabe comme en français.',
    },
    {
      word: 'Zeitgeist',
      phonetic: '/ˈzaɪtɡaɪst/',
      meaning: 'Esprit du temps',
      tip: 'Mot d\'origine allemande : "ZAÏT-gaïst". Le "z" est sonore, le "ei" = "aï", le "g" est dur comme dans "go". L\'accent est sur la première syllabe.',
    },
    {
      word: 'Polyphony',
      phonetic: '/pəˈlɪfəni/',
      meaning: 'Polyphonie',
      tip: 'Accent sur "LIF" : "peh-LIF-eh-ni". Le "y" initial se réduit à un schwa. Ne dites pas "po-li-FO-ni" à la française.',
    },
    {
      word: 'Weltanschauung',
      phonetic: '/ˈvɛltænʃaʊʊŋ/',
      meaning: 'Vision du monde',
      tip: 'Mot allemand naturalisé en anglais : "VEL-tan-chaou-oung". Le "W" = "V" allemand. Le "ng" final est nasalisé, langue contre le palais. Accent sur "VEL".',
    },
  ],
}

// ─── c2-l22: Intertextual References — Ellipsis, substitution, cohesive devices ─
export const C2_L22: LessonContent = {
  vocab: [
    {
      english: 'Palimpsest',
      french: 'Palimpseste',
      phonetic: '/ˈpælɪmpˌsɛst/',
      example: 'The city is a palimpsest of architectures, each era inscribed upon the remnants of the last.',
      exampleTranslation: 'La ville est un palimpseste d\'architectures, chaque époque inscrite sur les vestiges de la précédente.',
    },
    {
      english: 'Hermeneutics',
      french: 'Herméneutique',
      phonetic: '/ˌhɜːrməˈnjuːtɪks/',
      example: 'Gadamer\'s hermeneutics insists that understanding is always historically situated.',
      exampleTranslation: 'L\'herméneutique de Gadamer affirme que la compréhension est toujours historiquement située.',
    },
    {
      english: 'Aporia',
      french: 'Aporie',
      phonetic: '/əˈpɔːriə/',
      example: 'The text arrives at an aporia that no amount of exegetical ingenuity can resolve.',
      exampleTranslation: 'Le texte parvient à une aporie qu\'aucune ingéniosité exégétique ne peut résoudre.',
    },
    {
      english: 'Mimesis',
      french: 'Mimèsis',
      phonetic: '/mɪˈmiːsɪs/',
      example: 'Auerbach\'s "Mimesis" traces the representation of reality in Western literature from Homer to Virginia Woolf.',
      exampleTranslation: 'La "Mimèsis" d\'Auerbach retrace la représentation de la réalité dans la littérature occidentale d\'Homère à Virginia Woolf.',
    },
    {
      english: 'Diegesis',
      french: 'Diégèse',
      phonetic: '/ˌdaɪəˈdʒiːsɪs/',
      example: 'The narrator\'s diegesis frames the events in a retrospective mode that colours every subsequent revelation.',
      exampleTranslation: 'La diégèse du narrateur cadre les événements dans un mode rétrospectif qui colore chaque révélation ultérieure.',
    },
  ],
  grammar: {
    title: 'Ellipse, substitution et dispositifs cohésifs de haut niveau',
    explanation: `L'ellipse et la substitution sont les deux piliers de la cohésion textuelle avancée en anglais. L'ellipse permet d'omettre des éléments qui sont récupérables contextuellement, créant un discours plus élégant et moins redondant. On distingue : (1) L'ellipse nominale : "Some embraced the theory; others, the practice" (others sous-entend "embraced"). (2) L'ellipse verbale : "She could have protested, but chose not to" (chose not to protest). (3) L'ellipse clausale : "If possible, we should reconsider" (if it is possible). La substitution remplace un élément par un pro-forme : "do/did" pour les verbes ("She writes poetry, and he does too"), "so/not" pour les clauses ("Will it succeed? I think so / I think not"), "one/ones" pour les noms ("I prefer the red wine to the white one"). Les marqueurs cohésifs avancés — "that said", "for that matter", "inasmuch as", "to the extent that" — permettent des articulations logiques nuancées que les connecteurs simples ne peuvent exprimer.`,
    examples: [
      { sentence: 'Some embraced the hermeneutic approach; others, the empirical.', translation: 'Certains ont adopté l\'approche herméneutique ; d\'autres, l\'empirique.', isCorrect: true },
      { sentence: 'She could have contested the aporia, but chose not to.', translation: 'Elle aurait pu contester l\'aporie, mais a choisi de ne pas le faire.', isCorrect: true },
      { sentence: 'Some embraced the hermeneutic approach; others embraced the empirical approach.', translation: '', isCorrect: false },
      { sentence: 'For that matter, the palimpsest model applies equally to legal interpretation.', translation: 'D\'ailleurs, le modèle du palimpseste s\'applique également à l\'interprétation juridique.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Some embraced the hermeneutic approach; others embraced the empirical approach.', correct: 'Some embraced the hermeneutic approach; others, the empirical.', explanation: 'La répétition intégrale du verbe et du nom crée une lourdeur stylistique. L\'ellipse est de rigueur en registre soutenu : on omet le verbe déjà exprimé et on ne conserve que l\'élément contrastif.' },
      { wrong: 'She could have contested it, but chose not to contest it.', correct: 'She could have contested it, but chose not to.', explanation: 'La répétition du verbe après "chose not to" est pléonastique. L\'ellipse verbale en anglais permet — et exige à ce niveau — d\'omettre l\'infinitif quand le contexte le rend clair.' },
    ],
  },
  conversation: [
    { speaker: 'Nathalie', role: 'A', text: 'The palimpsest metaphor is compelling, but doesn\'t it risk flattening genuine historical rupture?', translation: 'La métaphore du palimpseste est séduisante, mais ne risque-t-elle pas d\'aplatir la véritable rupture historique ?', },
    { speaker: 'James', role: 'B', text: 'That\'s a fair objection. Then again, the hermeneutic tradition would counter that rupture itself is always already inscribed within continuity.', translation: 'C\'est une objection juste. Ceci dit, la tradition herméneutique riposterait que la rupture elle-même est toujours déjà inscrite dans la continuité.', },
    { speaker: 'Nathalie', role: 'A', text: 'To the extent that one accepts Gadamer\'s fusion of horizons, perhaps. But Derrida\'s aporia suggests the opposite — that some tensions are constitutively unresolvable.', translation: 'Dans la mesure où l\'on accepte la fusion des horizons de Gadamer, peut-être. Mais l\'aporie de Derrida suggère le contraire — que certaines tensions sont constitutivement insolubles.', },
    { speaker: 'James', role: 'B', text: 'For that matter, Auerbach\'s mimesis argument sidesteps the issue entirely by foregrounding the diegesis as the real site of negotiation.', translation: 'D\'ailleurs, l\'argument de la mimèsis d\'Auerbach contourne entièrement le problème en mettant au premier plan la diégèse comme véritable lieu de négociation.', },
    { speaker: 'Nathalie', role: 'A', text: 'True — though one could argue that mimesis and diegesis are themselves interlocked in ways neither Auerbach nor Plato fully anticipated.', translation: 'Vrai — bien qu\'on puisse soutenir que mimèsis et diégèse sont elles-mêmes imbriquées de façons qu\'Auerbach ni Platon n\'ont pleinement anticipées.', },
    { speaker: 'James', role: 'B', text: 'That said, the distinction remains heuristically indispensable. Without it, we lose the very vocabulary needed to describe how narrative operates.', translation: 'Cela dit, la distinction reste heuristiquement indispensable. Sans elle, nous perdons le vocabulaire même nécessaire pour décrire le fonctionnement du récit.', },
    { speaker: 'Nathalie', role: 'A', text: 'Agreed — inasmuch as our analytical tools shape what we can perceive, we cannot simply dispense with them without cost.', translation: 'Convenu — dans la mesure où nos outils analytiques façonnent ce que nous pouvons percevoir, nous ne pouvons pas simplement nous en passer sans coût.', },
  ],
  conversationTitle: 'Palimpseste et herméneutique',
  pronunciation: [
    {
      word: 'Palimpsest',
      phonetic: '/ˈpælɪmpˌsɛst/',
      meaning: 'Palimpseste',
      tip: 'Accent sur la première syllabe : "PAL-imp-sest". Le "i" est bref comme dans "bit". Ne prononcez pas "pa-lan-PEST" à la française.',
    },
    {
      word: 'Hermeneutics',
      phonetic: '/ˌhɜːrməˈnjuːtɪks/',
      meaning: 'Herméneutique',
      tip: 'Accent principal sur "NU" : "her-meh-NU-tiks". Le "h" est expiré. Le "eu" central = "iou" comme dans "museum".',
    },
    {
      word: 'Aporia',
      phonetic: '/əˈpɔːriə/',
      meaning: 'Aporie',
      tip: 'Accent sur "POR" : "eh-POR-ri-a". Le premier "a" est réduit en schwa. Le "or" est long et ouvert. Ne dites pas "a-po-RI-a".',
    },
    {
      word: 'Diegesis',
      phonetic: '/ˌdaɪəˈdʒiːsɪs/',
      meaning: 'Diégèse',
      tip: 'Accent sur "JEE" : "daï-eh-JEE-sis". Le "g" est doux comme dans "judge". Le premier "i" se prononce "aï". Le "e" final est un schwa.',
    },
  ],
}

// ─── c2-l23: Cultural Dialogue — Cross-cultural nuanced discussion ──────────────
export const C2_L23: LessonContent = {
  vocab: [
    {
      english: 'Cultural relativism',
      french: 'Relativisme culturel',
      phonetic: '/ˈkʌltʃərəl ˈrɛlətɪˌvɪzəm/',
      example: 'Cultural relativism, taken to its logical extreme, can paradoxically undermine the very tolerance it seeks to promote.',
      exampleTranslation: 'Le relativisme culturel, poussé à son extrême logique, peut paradoxalement miner la tolérance même qu\'il cherche à promouvoir.',
    },
    {
      english: 'Hybridity',
      french: 'Hybridité',
      phonetic: '/haɪˈbrɪdɪti/',
      example: 'Bhabha\'s notion of hybridity challenges the assumption that cultures are ever pure or self-contained.',
      exampleTranslation: 'La notion d\'hybridité de Bhabha remet en question l\'hypothèse selon laquelle les cultures seraient jamais pures ou autosuffisantes.',
    },
    {
      english: 'Hegemony',
      french: 'Hégémonie',
      phonetic: '/hɪˈdʒɛməni/',
      example: 'Gramsci\'s concept of cultural hegemony explains how dominant ideologies become naturalised as common sense.',
      exampleTranslation: 'Le concept d\'hégémonie culturelle de Gramsci explique comment les idéologies dominantes se naturalisent en bon sens.',
    },
    {
      english: 'Subaltern',
      french: 'Subalterne',
      phonetic: '/səˈbæltərn/',
      example: 'Spivak\'s seminal essay asks whether the subaltern can ever truly speak within the structures of Western epistemology.',
      exampleTranslation: 'L\'essai fondateur de Spivak demande si le subalterne peut jamais véritablement parler au sein des structures de l\'épistémologie occidentale.',
    },
    {
      english: 'Cosmopolitanism',
      french: 'Cosmopolitisme',
      phonetic: '/ˌkɒzməˈpɒlɪtənɪzəm/',
      example: 'Cosmopolitanism, at its best, mediates between universal ethical commitment and local cultural particularity.',
      exampleTranslation: 'Le cosmopolitisme, au mieux, opère une médiation entre l\'engagement éthique universel et la particularité culturelle locale.',
    },
  ],
  grammar: {
    title: 'Le discours nuancé interculturel : modalisation et atténuation',
    explanation: `Le dialogue interculturel à un niveau C2 exige une maîtrise fine de la modalisation et de l'atténuation (hedging). Il ne s'agit plus simplement d'exprimer une opinion, mais de la situer avec précision épistémique et pragmatique. Les marqueurs de modalité épistémique ("arguably", "conceivably", "in all likelihood") signalent le degré de certitude du locuteur. L'atténuation ("it would seem that", "one might venture to suggest", "if I may be so bold") tempère l'affirmation pour éviter l'imposition dogmatique, particulièrement cruciale dans le dialogue interculturel où les présupposés divergent. La distanciation énonciative ("the argument could be made that", "it has been suggested that") permet d'avancer une thèse sans l'endosser pleinement. Enfin, les constructions concessives avancées ("while admittedly...", "granted that..., nevertheless...", "for all that..., it remains the case that...") permettent d'articuler des positions opposées avec équité rhétorique.`,
    examples: [
      { sentence: 'Arguably, cultural relativism, while indispensable as a corrective, cannot serve as a final ethical arbiter.', translation: 'On peut soutenir que le relativisme culturel, tout en étant indispensable comme correctif, ne peut servir d\'arbitre éthique final.', isCorrect: true },
      { sentence: 'It would seem that hybridity offers a more productive framework than essentialism for understanding diasporic identities.', translation: 'Il semblerait que l\'hybridité offre un cadre plus productif que l\'essentialisme pour comprendre les identités diasporiques.', isCorrect: true },
      { sentence: 'Cultural relativism is the only correct ethical position.', translation: '', isCorrect: false },
      { sentence: 'Granted that hegemony operates through consent rather than coercion, it remains the case that dissent is systematically marginalised.', translation: 'Admis que l\'hégémonie opère par le consentement plutôt que par la coercition, il n\'en demeure pas moins que la dissidence est systématiquement marginalisée.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Cultural relativism is the only correct ethical position.', correct: 'Arguably, cultural relativism offers an important corrective, though it cannot serve as a final ethical arbiter.', explanation: 'Une affirmation catégorique sans modalisation est rhétoriquement naïve et épistémologiquement suspecte dans un discours interculturel. À niveau C2, on doit savoir nuancer : "arguably", "one might contend", "it could be maintained".' },
      { wrong: 'The subaltern cannot speak.', correct: 'It has been argued that the subaltern cannot speak within the prevailing epistemological framework.', explanation: 'Reprendre une thèse complexe comme un énoncé direct sans distanciation énonciative simplifie à l\'excès. "It has been argued" signale qu\'il s\'agit d\'une position discutée, non d\'un fait établi.' },
    ],
  },
  conversation: [
    { speaker: 'Amara', role: 'A', text: 'One might venture to suggest that the cosmopolitan ideal, while laudable in principle, often functions as a veiled form of cultural hegemony.', translation: 'On pourrait s\'aventurer à suggérer que l\'idéal cosmopolite, tout louable en principe, fonctionne souvent comme une forme voilée d\'hégémonie culturelle.', },
    { speaker: 'Yuki', role: 'B', text: 'That\'s a compelling critique. Then again, might it not also be the case that cosmopolitanism, properly construed, can accommodate precisely those local particularities you\'re concerned about?', translation: 'C\'est une critique convaincante. Ceci dit, ne pourrait-il pas aussi être le cas que le cosmopolitisme, bien conçu, puisse accommoder précisément les particularités locales qui vous préoccupent ?', },
    { speaker: 'Amara', role: 'A', text: 'Conceivably — but only if the subaltern voices are not merely included as decorative diversity but as genuine interlocutors with equal epistemic authority.', translation: 'De façon concevable — mais seulement si les voix subalternes ne sont pas simplement incluses comme diversité décorative mais comme de véritables interlocuteurs ayant une autorité épistémique égale.', },
    { speaker: 'Yuki', role: 'B', text: 'Granted that the risk of tokenism is real, it remains the case that Bhabha\'s hybridity framework does offer a model for precisely that kind of egalitarian dialogue.', translation: 'Admis que le risque de tokenisme est réel, il n\'en demeure pas moins que le cadre d\'hybridité de Bhabha offre bel et bien un modèle pour ce genre précis de dialogue égalitaire.', },
    { speaker: 'Amara', role: 'A', text: 'For all that, I wonder whether hybridity itself isn\'t sometimes romanticised — as though the mere fact of cultural mixing were inherently emancipatory.', translation: 'Malgré cela, je me demande si l\'hybridité elle-même n\'est pas parfois romantisme — comme si le simple fait du mélange culturel était intrinsèquement émancipateur.', },
    { speaker: 'Yuki', role: 'B', text: 'A fair point. While admittedly hybridity can be co-opted, it arguably remains more productive than the alternative — which is essentialist purity.', translation: 'Un point juste. Bien qu\'il soit admis que l\'hybridité puisse être récupérée, elle reste sans doute plus productive que l\'alternative — à savoir la pureté essentialiste.', },
    { speaker: 'Amara', role: 'A', text: 'In all likelihood, the truth lies somewhere in the tension between the two — and it is in that very tension that meaningful cultural dialogue takes place.', translation: 'En toute probabilité, la vérité se situe quelque part dans la tension entre les deux — et c\'est dans cette tension même que se produit le dialogue culturel significatif.', },
  ],
  conversationTitle: 'Cosmopolitisme et hybridité culturelle',
  pronunciation: [
    {
      word: 'Hegemony',
      phonetic: '/hɪˈdʒɛməni/',
      meaning: 'Hégémonie',
      tip: 'Accent sur "JEM" : "heh-JEM-eh-ni". Le "h" est expiré, le "g" est doux comme dans "gem". En anglais britannique, parfois "heh-GEE-meh-ni" — les deux sont acceptés.',
    },
    {
      word: 'Subaltern',
      phonetic: '/səˈbæltərn/',
      meaning: 'Subalterne',
      tip: 'Accent sur "BAL" : "seh-BAL-tern". Le premier "a" est réduit en schwa. Le "a" accentué est très ouvert comme dans "cat".',
    },
    {
      word: 'Cosmopolitanism',
      phonetic: '/ˌkɒzməˈpɒlɪtənɪzəm/',
      meaning: 'Cosmopolitisme',
      tip: 'Accent principal sur "POL" : "koz-meh-POL-ih-teh-niz-em". Le "o" accentué est ouvert comme dans "hot". Les syllabes non accentuées se réduisent rapidement.',
    },
    {
      word: 'Hybridity',
      phonetic: '/haɪˈbrɪdɪti/',
      meaning: 'Hybridité',
      tip: 'Accent sur "BRI" : "haï-BRI-di-ti". Le "h" est expiré, le "y" = "aï", le premier "i" est bref comme dans "bit".',
    },
  ],
}

// ─── c2-l24: Cultural Competence — Culturally specific pronunciation ────────────
export const C2_L24: LessonContent = {
  vocab: [
    {
      english: 'Register',
      french: 'Registre (de langue)',
      phonetic: '/ˈrɛdʒɪstər/',
      example: 'The ability to shift register — from colloquial to formal — is the hallmark of genuine cultural competence.',
      exampleTranslation: 'La capacité de changer de registre — du familier au soutenu — est la marque d\'une véritable compétence culturelle.',
    },
    {
      english: 'Enculturation',
      french: 'Enculturation',
      phonetic: '/ɪnˌkʌltʃəˈreɪʃən/',
      example: 'Enculturation is the process by which individuals internalise the behavioural norms of their host culture.',
      exampleTranslation: 'L\'enculturation est le processus par lequel les individus intériorisent les normes comportementales de leur culture d\'accueil.',
    },
    {
      english: 'Semiotics',
      french: 'Sémiotique',
      phonetic: '/ˌsiːmiˈɒtɪks/',
      example: 'A semiotics of gesture reveals that even body language is culturally encoded, not universal.',
      exampleTranslation: 'Une sémiotique du geste révèle que même le langage corporel est culturellement codé, non universel.',
    },
    {
      english: 'Pragmatics',
      french: 'Pragmatique',
      phonetic: '/præɡˈmætɪks/',
      example: 'Cross-cultural pragmatics examines how speech acts — apologising, requesting, refusing — vary across linguistic communities.',
      exampleTranslation: 'La pragmatique interculturelle examine comment les actes de langage — s\'excuser, demander, refuser — varient selon les communautés linguistiques.',
    },
    {
      english: 'Idioculture',
      french: 'Idioculture',
      phonetic: '/ˈɪdiəˌkʌltʃər/',
      example: 'Each family develops its own idioculture — a micro-system of shared meanings incomprehensible to outsiders.',
      exampleTranslation: 'Chaque famille développe sa propre idioculture — un micro-système de significations partagées incompréhensible pour les étrangers.',
    },
  ],
  grammar: {
    title: 'La compétence culturelle : prononciation et pragmatique culturellement situées',
    explanation: `La compétence culturelle en anglais va bien au-delà de la grammaire et du vocabulaire — elle englobe la maîtrise des variétés phonologiques et des conventions pragmatiques propres à chaque communauté anglophone. Sur le plan phonologique, l'anglais n'est pas monolithique : l'anglais britannique (RP), l'américain standard (GA), l'australien, l'indien, le nigérian et le sud-africain possèdent chacun des systèmes vocaliques, consonantiques et prosodiques distincts. Par exemple, le "r" post-vocalique est prononcé en américain ("car" = /kɑːr/) mais muet en RP britannique ("car" = /kɑː/). La voyelle "a" dans "dance" est /æ/ en américain mais /ɑː/ en britannique. Sur le plan pragmatique, les conventions varient : les anglophones britanniques utilisent davantage d'atténuation ("I'm afraid I rather think...") que les Américains, qui valorisent la directesse positive. Les locuteurs africains de l'anglais peuvent employer des stratégies d'indirection empruntées aux langues maternelles. Comprendre ces variations est essentiel pour une vraie fluidité culturelle.`,
    examples: [
      { sentence: 'In British English, "I wonder if you might possibly consider..." functions as a polite request, whereas in American English it could be perceived as excessively indirect.', translation: 'En anglais britannique, "I wonder if you might possibly consider..." fonctionne comme une requête polie, tandis qu\'en anglais américain, cela pourrait être perçu comme excessivement indirect.', isCorrect: true },
      { sentence: 'The Nigerian English pronunciation of "nurse" with a retracted /r/ reflects substrate influence from Igala and Yoruba phonology.', translation: 'La prononciation nigériane de "nurse" avec un /r/ rétracté reflète l\'influence substratique de la phonologie igala et yoruba.', isCorrect: true },
      { sentence: 'All English speakers use the same pragmatic strategies for making requests.', translation: '', isCorrect: false },
      { sentence: 'Indian English speakers often use the present progressive where British speakers would use the simple present — "I am understanding your point" — which is pragmatically appropriate in that variety.', translation: 'Les locuteurs de l\'anglais indien utilisent souvent le present progressive là où les Britanniques utiliseraient le simple present — "I am understanding your point" — ce qui est pragmatiquement approprié dans cette variété.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'All English speakers use the same pragmatic strategies for making requests.', correct: 'Pragmatic conventions vary significantly across English-speaking communities.', explanation: 'Cette généralisation ignore les recherches en pragmatique interculturelle qui montrent des différences systématiques dans la réalisation des actes de langage (requêtes, refus, excuses) selon les variétés d\'anglais.' },
      { wrong: 'British pronunciation is the only correct one for formal contexts.', correct: 'Multiple English varieties are appropriate for formal contexts depending on the region and audience.', explanation: 'L\'idée qu\'une seule variété (généralement la RP britannique) serait "correcte" est prescriptiviste et obsolète. La compétence culturelle implique de savoir adapter sa variété au contexte.' },
    ],
  },
  conversation: [
    { speaker: 'Kofi', role: 'A', text: 'I attended a seminar last week on cross-cultural pragmatics — fascinating how what counts as "polite" in Lagos would be considered evasive in New York.', translation: 'J\'ai assisté la semaine dernière à un séminaire sur la pragmatique interculturelle — fascinant de voir comment ce qui passe pour "poli" à Lagos serait considéré comme évasif à New York.', },
    { speaker: 'Siobhan', role: 'B', text: 'Absolutely. The British tendency to understate — "not bad" meaning "excellent" — baffles Americans and Australians alike.', translation: 'Absolument. La tendance britannique à litote — "not bad" signifiant "excellent" — déroute autant les Américains que les Australiens.', },
    { speaker: 'Kofi', role: 'A', text: 'And the semiotics of silence differ wildly. In Japanese English interactions, silence signals respect; in American contexts, it signals discomfort or disengagement.', translation: 'Et la sémiotique du silence diffère considérablement. Dans les interactions en anglais japonais, le silence signale le respect ; dans les contextes américains, il signale l\'inconfort ou le désengagement.', },
    { speaker: 'Siobhan', role: 'B', text: 'That\'s precisely why enculturation matters — you can\'t simply learn the words; you must absorb the register shifts and the unspoken codes.', translation: 'C\'est précisément pourquoi l\'enculturation est importante — on ne peut pas simplement apprendre les mots ; il faut absorber les changements de registre et les codes non dits.', },
    { speaker: 'Kofi', role: 'A', text: 'Even within a single country, the idioculture of a university department differs from that of a trading floor — same language, different pragmatics.', translation: 'Même au sein d\'un seul pays, l\'idioculture d\'un département universitaire diffère de celle d\'une salle de trading — même langue, pragmatique différente.', },
    { speaker: 'Siobhan', role: 'B', text: 'Well put. And the phonological dimension compounds it — switch from an Irish brogue to an RP accent and suddenly you\'re performing a different cultural identity.', translation: 'Bien dit. Et la dimension phonologique le renforce — passez d\'un accent irlandais à un accent RP et soudain vous performez une identité culturelle différente.', },
    { speaker: 'Kofi', role: 'A', text: 'Which is precisely why cultural competence at this level is as much about listening as about speaking — attuning oneself to the pragmatics of the other.', translation: 'C\'est précisément pourquoi la compétence culturelle à ce niveau est autant une affaire d\'écoute que de parole — s\'accorder à la pragmatique de l\'autre.', },
  ],
  conversationTitle: 'Pragmatique et variation culturelle',
  pronunciation: [
    {
      word: 'Register',
      phonetic: '/ˈrɛdʒɪstər/',
      meaning: 'Registre',
      tip: 'Accent sur la première syllabe : "REJ-is-ter". Le "g" est doux comme dans "gem". En anglais américain, le "er" final se prononce clairement ; en RP britannique, le "r" final est muet : "REJ-is-tah".',
    },
    {
      word: 'Semiotics',
      phonetic: '/ˌsiːmiˈɒtɪks/',
      meaning: 'Sémiotique',
      tip: 'Accent sur "OT" : "see-mee-OT-iks". Le "o" accentué est ouvert comme dans "hot". Ne dites pas "seh-mee-OH-tiks" — la voyelle est courte et ouverte.',
    },
    {
      word: 'Enculturation',
      phonetic: '/ɪnˌkʌltʃəˈreɪʃən/',
      meaning: 'Enculturation',
      tip: 'Accent principal sur "RAY" : "in-kul-cheh-RAY-shun". Le "c" devant "u" = "k". Le "t" devant "u" = "tch". Le suffixe "-ation" se réduit.',
    },
    {
      word: 'Pragmatics',
      phonetic: '/præɡˈmætɪks/',
      meaning: 'Pragmatique',
      tip: 'Accent sur "MAT" : "prag-MAT-iks". Le "a" accentué est très ouvert comme dans "cat". Le "g" est dur. Ne dites pas "prag-MAH-tiks".',
    },
  ],
}

// ─── c2-l25: Fluency Sounds — Pragmatic competence, discourse markers ──────────
export const C2_L25: LessonContent = {
  vocab: [
    {
      english: 'Discourse marker',
      french: 'Marqueur discursif',
      phonetic: '/ˈdɪskɔːrs ˈmɑːrkər/',
      example: 'Discourse markers such as "well", "I mean", and "you see" do not convey propositional content but organise the flow of talk.',
      exampleTranslation: 'Les marqueurs discursifs tels que "well", "I mean" et "you see" ne transmettent pas de contenu propositionnel mais organisent le flux de la parole.',
    },
    {
      english: 'Pragmatic particle',
      french: 'Particule pragmatique',
      phonetic: '/præɡˈmætɪk ˈpɑːrtɪkəl/',
      example: 'The pragmatic particle "like" in "It was, like, amazing" signals approximation rather than comparison.',
      exampleTranslation: 'La particule pragmatique "like" dans "It was, like, amazing" signale une approximation plutôt qu\'une comparaison.',
    },
    {
      english: 'Stance',
      french: 'Positionnement (énonciatif)',
      phonetic: '/stæns/',
      example: 'Epistemic stance markers — "perhaps", "arguably", "it seems" — signal the speaker\'s commitment to the truth of a proposition.',
      exampleTranslation: 'Les marqueurs de positionnement épistémique — "perhaps", "arguably", "it seems" — signalent l\'engagement du locuteur envers la vérité d\'une proposition.',
    },
    {
      english: 'Footing',
      french: 'Positionnement énonciatif',
      phonetic: '/ˈfʊtɪŋ/',
      example: 'Goffman\'s concept of footing describes how speakers shift their alignment within a conversation — from animator to author to principal.',
      exampleTranslation: 'Le concept de positionnement énonciatif de Goffman décrit comment les locuteurs changent d\'alignement dans une conversation — d\'animateur à auteur à principal.',
    },
    {
      english: 'Interactional competence',
      french: 'Compétence interactionnelle',
      phonetic: '/ˌɪntərˈækʃənəl ˈkɒmpɪtəns/',
      example: 'Interactional competence encompasses turn-taking, repair sequences, and the ability to project upcoming actions in real time.',
      exampleTranslation: 'La compétence interactionnelle englobe la prise de tour, les séquences de réparation et la capacité de projeter les actions à venir en temps réel.',
    },
  ],
  grammar: {
    title: 'Les marqueurs discursifs et la compétence pragmatique au niveau natif',
    explanation: `La compétence pragmatique au niveau C2 implique la maîtrise des marqueurs discursifs et des particules pragmatiques qui permettent une fluidité de discours quasi-native. Les marqueurs discursifs ne contribuent pas au contenu propositionnel mais remplissent des fonctions interpersonnelles et textuelles cruciales : (1) "Well" — signale un décalage entre l'attente et la réponse ("So, did you enjoy it?" — "Well, it was... complicated."). (2) "I mean" — reformule ou clarifie ("She's brilliant — I mean, she genuinely transforms every project she touches."). (3) "You see" — introduit une explication ou justification ("I couldn't attend, you see, the flight was cancelled."). (4) "Right" — confirme, vérifie ou change de sujet ("Right, so moving on..."). (5) "Anyway" — marque un retour au sujet ou une clôture. Ces marqueurs sont prosodiquement distincts — ils sont souvent produits avec une intonation de continuation (pitch level ou montant) et sont typiquement précédés d'une micro-pause. Leur placement, leur prosodie et leur fréquence sont des indices fiables du niveau de fluidité d'un locuteur. Un locuteur C2 les utilise de façon naturelle et stratégique, sans surutilisation ni sous-utilisation.`,
    examples: [
      { sentence: 'Well, the findings are suggestive, but — I mean, one hesitates to draw firm conclusions from a single study.', translation: 'Eh bien, les résultats sont suggestifs, mais — je veux dire, on hésite à tirer des conclusions fermes d\'une seule étude.', isCorrect: true },
      { sentence: 'You see, the problem isn\'t the theory itself; it\'s the way it\'s been operationalised in this particular context.', translation: 'Vous voyez, le problème n\'est pas la théorie elle-même ; c\'est la façon dont elle a été opérationnalisée dans ce contexte particulier.', isCorrect: true },
      { sentence: 'Well the findings are suggestive but I mean one hesitates to draw firm conclusions.', translation: '', isCorrect: false },
      { sentence: 'Right, so where were we? Ah yes — interactional competence and the management of turn-taking in multi-party discourse.', translation: 'Bon, alors où en étions-nous ? Ah oui — la compétence interactionnelle et la gestion de la prise de tour dans le discours multi-participants.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Well the findings are suggestive but I mean one hesitates to draw firm conclusions.', correct: 'Well, the findings are suggestive, but — I mean, one hesitates to draw firm conclusions from a single study.', explanation: 'Sans les pauses et la prosodie appropriées (virgules, tirets), les marqueurs discursifs perdent leur fonction de structuration du discours. Ils doivent être séparés prosodiquement du contenu propositionnel pour fonctionner comme des marqueurs interactionnels. En écrit, cela se traduit par une ponctuation soignée.' },
      { wrong: 'Like, I was like, you know, like really disappointed, like.', correct: 'I was, like, genuinely disappointed.', explanation: 'La surutilisation de "like" comme particule pragmatique est un stéréotype sociolinguistique qui peut nuire à la crédibilité du locuteur. Un usage C2 est stratégique et mesuré : "like" pour l\'approximation, "you know" pour l\'engagement du locuteur — mais avec parcimonie.', },
    ],
  },
  conversation: [
    { speaker: 'Dara', role: 'A', text: 'Well, I\'ve been thinking about how discourse markers function differently across cultures — and, I mean, it\'s far more nuanced than textbooks suggest.', translation: 'Eh bien, je réfléchis à la façon dont les marqueurs discursifs fonctionnent différemment selon les cultures — et, je veux dire, c\'est bien plus nuancé que ce que les manuels suggèrent.', },
    { speaker: 'Ravi', role: 'B', text: 'Right. You see, in Indian English, "no?" at the end of a sentence serves as a tag question that doesn\'t quite map onto British English pragmatics.', translation: 'Exact. Vous voyez, en anglais indien, "no?" à la fin d\'une phrase sert de question-tag qui ne correspond pas tout à fait à la pragmatique de l\'anglais britannique.', },
    { speaker: 'Dara', role: 'A', text: 'Precisely. And the stance one adopts — whether confident, hedged, or ironic — is encoded not just in lexis but in prosody and timing.', translation: 'Précisément. Et le positionnement qu\'on adopte — confiant, atténué ou ironique — est codé non seulement dans le lexique mais dans la prosodie et le timing.', },
    { speaker: 'Ravi', role: 'B', text: 'Anyway, the point is that interactional competence — the ability to manage footing in real time — is what separates truly fluent speakers from merely proficient ones.', translation: 'Bref, le point est que la compétence interactionnelle — la capacité de gérer le positionnement énonciatif en temps réel — est ce qui distingue les locuteurs véritablement fluides de ceux qui sont simplement compétents.', },
    { speaker: 'Dara', role: 'A', text: 'I mean, think about repair sequences — how a native speaker self-corrects mid-utterance. That\'s not random; it\'s structured and interactionally motivated.', translation: 'Je veux dire, pensez aux séquences de réparation — comment un locuteur natif se corrige en plein énoncé. Ce n\'est pas aléatoire ; c\'est structuré et motivé interactionnellement.', },
    { speaker: 'Ravi', role: 'B', text: 'Well put. And pragmatic particles — "sort of", "kind of" — they\'re not filler; they\'re precision instruments for calibrating epistemic stance.', translation: 'Bien dit. Et les particules pragmatiques — "sort of", "kind of" — ce ne sont pas des remplisseurs ; ce sont des instruments de précision pour calibrer le positionnement épistémique.', },
    { speaker: 'Dara', role: 'A', text: 'Exactly. Mastering them — with the right prosody, the right placement — is perhaps the last frontier of genuine near-native fluency.', translation: 'Exactement. Les maîtriser — avec la bonne prosodie, le bon placement — est peut-être la dernière frontière de la véritable fluidité quasi-native.', },
  ],
  conversationTitle: 'Marqueurs discursifs et fluidité native',
  pronunciation: [
    {
      word: 'Discourse',
      phonetic: '/ˈdɪskɔːrs/',
      meaning: 'Discours',
      tip: 'Accent sur la première syllabe : "DIS-kors". Le "ou" = "or" long et ouvert. En RP britannique, le "r" final est muet : "DIS-kohs". En américain, il se prononce.',
    },
    {
      word: 'Stance',
      phonetic: '/stæns/',
      meaning: 'Positionnement',
      tip: 'Prononcez "stans" — le "a" est très ouvert comme dans "cat". Ne dites pas "stohns". La consonne finale est un "s" sourd, pas un "z".',
    },
    {
      word: 'Footing',
      phonetic: '/ˈfʊtɪŋ/',
      meaning: 'Positionnement énonciatif',
      tip: 'Accent sur "FOOT" : "FOO-ting". Le "oo" est court comme dans "book", pas long comme dans "food". Le "ing" final est nasalisé.',
    },
    {
      word: 'Particle',
      phonetic: '/ˈpɑːrtɪkəl/',
      meaning: 'Particule',
      tip: 'Accent sur "PAR" : "PAR-ti-kel". Le "a" accentué est long et ouvert comme dans "father". Le "i" est bref, le "le" final = "el" doux.',
    },
  ],
}
