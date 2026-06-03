import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C2 MASTERY — UNIT 2: LITERARY ANALYSIS (c2-l6 through c2-l10)
// ════════════════════════════════════════════════════════════════════════════════
// YOELANG English Learning App for Francophone Users
// C2 = Near-native mastery: deconstruction, hermeneutics, semiotics
// Grammar explanations in FRENCH for francophone learners

// ─── c2-l6: Analysis Vocabulary ──────────────────────────────────────────────
export const C2_L6: LessonContent = {
  vocab: [
    {
      english: 'Hermeneutics',
      french: 'Herméneutique',
      phonetic: '/ˌhɜːrməˈnjuːtɪks/',
      example: 'Hermeneutics invites us to interrogate the very conditions under which meaning becomes possible.',
      exampleTranslation: "L'herméneutique nous invite à interroger les conditions mêmes sous lesquelles le sens devient possible.",
    },
    {
      english: 'Semiotics',
      french: 'Sémiotique',
      phonetic: '/ˌsiːmiˈɒtɪks/',
      example: 'Semiotics reveals how signs operate within cultural codes to produce ideological effects.',
      exampleTranslation: "La sémiotique révèle comment les signes opèrent au sein de codes culturels pour produire des effets idéologiques.",
    },
    {
      english: 'Deconstruction',
      french: 'Déconstruction',
      phonetic: '/ˌdiːkənˈstrʌkʃən/',
      example: 'Deconstruction dismantles the binary oppositions that undergird Western metaphysical thought.',
      exampleTranslation: "La déconstruction démonte les oppositions binaires qui sous-tendent la pensée métaphysique occidentale.",
    },
    {
      english: 'Intertextuality',
      french: 'Intertextualité',
      phonetic: '/ˌɪntərˌtɛkstʃuˈælɪti/',
      example: "Kristeva's notion of intertextuality posits that every text is a mosaic of quotations.",
      exampleTranslation: "La notion d'intertextualité de Kristeva pose que tout texte est une mosaïque de citations.",
    },
    {
      english: 'Diegesis',
      french: 'Diégèse',
      phonetic: '/ˌdaɪəˈdʒiːsɪs/',
      example: 'The tension between diegesis and mimesis has shaped narratological theory since Plato.',
      exampleTranslation: "La tension entre diégèse et mimèsis a façonné la théorie narratologique depuis Platon.",
    },
  ],
  grammar: {
    title: "Les propositions subordonnées nominales en contexte critique",
    explanation: "À un niveau C2, l'analyse littéraire exige une maîtrise fluide des propositions subordonnées nominales (noun clauses) introduites par des syntagmes complexes. Celles-ci permettent d'articuler des idées avec la nuance requise par le discours critique. On les introduit par « that », « whether », des interrogatifs indirects (« what », « how », « to what extent »), ou des constructions en apposition. La subordonnée nominale peut occuper les fonctions de sujet, d'objet ou d'attribut. En anglais académique, on rencontre fréquemment des constructions comme « It is arguable that... », « What remains contested is whether... », « The extent to which deconstruction destabilises meaning has been... ». Attention : en anglais, « that » ne peut pas être omis lorsque la subordonnée est sujet (« That meaning is deferred is incontrovertible » ≠ « Meaning is deferred is incontrovertible »).",
    examples: [
      { sentence: 'That hermeneutics presupposes a pre-understanding is a cornerstone of Gadamerian philosophy.', translation: "Que l'herméneutique présuppose une pré-compréhension est un fondement de la philosophie gadamérienne.", isCorrect: true },
      { sentence: 'What Derrida demonstrates is that every signifier defers meaning ad infinitum.', translation: "Ce que Derrida démontre, c'est que tout signifiant diffère le sens à l'infini.", isCorrect: true },
      { sentence: 'Meaning is deferred is incontrovertible.', translation: '', isCorrect: false },
      { sentence: 'Whether semiotics can fully account for affect remains an open question in contemporary theory.', translation: "Si la sémiotique peut rendre pleinement compte de l'affect reste une question ouverte dans la théorie contemporaine.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Meaning is deferred is incontrovertible.', correct: 'That meaning is deferred is incontrovertible.', explanation: "Lorsqu'une subordonnée nominale est sujet, « that » est obligatoire. Sans lui, la phrase est agrammaticale : deux propositions principales sans lien." },
      { wrong: 'The question of if deconstruction applies here...', correct: 'The question of whether deconstruction applies here...', explanation: "Après une préposition (« of », « about », « on »), on utilise « whether », jamais « if ». C'est une règle stricte du registre académique." },
    ],
  },
  conversation: [
    { speaker: 'Prof. Okafor', role: 'A', text: 'One might argue that hermeneutics, far from being a mere methodology, constitutes an ontological condition of understanding itself.', translation: "On pourrait arguer que l'herméneutique, loin d'être une simple méthodologie, constitue une condition ontologique de la compréhension elle-même." },
    { speaker: 'Dr. Laurent', role: 'B', text: 'Indeed — and yet the Gadamerian fusion of horizons presupposes a reciprocity that power relations inevitably disrupt.', translation: "En effet — et cependant la fusion des horizons gadamérienne présuppose une réciprocité que les rapports de pouvoir perturbent inévitablement." },
    { speaker: 'Prof. Okafor', role: 'A', text: "Precisely. That's where a semiotic intervention becomes instructive: signs don't merely signify — they index structures of authority.", translation: "Précisément. C'est là qu'une intervention sémiotique devient éclairante : les signes ne signifient pas seulement — ils indexent des structures d'autorité." },
    { speaker: 'Dr. Laurent', role: 'B', text: 'Which brings us to deconstruction. If every binary is already undecidable, what purchase does critique retain?', translation: "Ce qui nous mène à la déconstruction. Si tout binaire est déjà indécidable, quelle prise la critique conserve-t-elle ?" },
    { speaker: 'Prof. Okafor', role: 'A', text: "A fair provocation. But deconstruction doesn't nullify critique — it reorients it toward the aporias that sustain the text's self-differance.", translation: "Une juste provocation. Mais la déconstruction n'annule pas la critique — elle la réoriente vers les apories qui soutiennent la différance du texte." },
    { speaker: 'Dr. Laurent', role: 'B', text: 'And intertextuality only compounds that — every reading is already inscribed in a network of prior readings.', translation: "Et l'intertextualité ne fait que multiplier cela — toute lecture est déjà inscrite dans un réseau de lectures antérieures." },
    { speaker: 'Prof. Okafor', role: 'A', text: 'Quite so. The diegetic level itself becomes unstable when the narrator collapses the distinction between story and discourse.', translation: "Tout à fait. Le niveau diégétique lui-même devient instable lorsque le narrateur effondre la distinction entre histoire et discours." },
    { speaker: 'Dr. Laurent', role: 'B', text: "That instability, I would contend, is not a deficiency but the very condition of the text's productivity.", translation: "Cette instabilité, je soutiendrais, n'est pas une déficience mais la condition même de la productivité du texte." },
  ],
  conversationTitle: "L'herméneutique à l'épreuve de la déconstruction",
  pronunciation: [
    { word: 'Hermeneutics', phonetic: '/ˌhɜːrməˈnjuːtɪks/', meaning: 'Herméneutique', tip: "L'accent principal est sur « -njuː- » : hur-muh-NYOO-tiks. Ne prononcez pas le « h » à la française, expirez-le. Le « eu » final se dit comme le « u » français dans « nu »." },
    { word: 'Semiotics', phonetic: '/ˌsiːmiˈɒtɪks/', meaning: 'Sémiotique', tip: "L'accent est sur « -OT- » : see-mee-OT-iks. Attention au « e » initial long comme dans « see », pas « sé ». Le « o » de la syllabe accentuée est ouvert." },
    { word: 'Deconstruction', phonetic: '/ˌdiːkənˈstrʌkʃən/', meaning: 'Déconstruction', tip: "L'accent principal est sur « -STRUK- » : dee-kən-STRUK-shən. Le « u » de « struk » est très ouvert comme dans « cup ». Ne dites pas « dé-kon-struc-tion »." },
    { word: 'Diegesis', phonetic: '/ˌdaɪəˈdʒiːsɪs/', meaning: 'Diégèse', tip: "Prononcez « dye-uh-JEE-sis ». L'accent est sur « -JEE- ». Le « g » est doux comme dans « giant ». Les « i » sont brefs sauf celui de la syllabe accentuée." },
  ],
}

// ─── c2-l7: Deconstructive Reading ──────────────────────────────────────────
export const C2_L7: LessonContent = {
  vocab: [
    {
      english: 'Différance',
      french: 'Différance',
      phonetic: '/ˌdɪfəˈrɑːns/',
      example: "Différance marks the endless deferral of meaning that renders any final signified impossible.",
      exampleTranslation: "La différance marque le renvoi infini du sens qui rend tout signifié final impossible.",
    },
    {
      english: 'Aporia',
      french: 'Aporie',
      phonetic: '/əˈpɔːriə/',
      example: 'The text arrives at an aporia that no interpretive strategy can fully surmount.',
      exampleTranslation: "Le texte parvient à une aporie qu'aucune stratégie interprétative ne peut pleinement surmonter.",
    },
    {
      english: 'Supplement',
      french: 'Supplément',
      phonetic: '/ˈsʌplɪmənt/',
      example: "Derrida's supplement is both an addition and a substitution, revealing the lack it purports to fill.",
      exampleTranslation: "Le supplément derridien est à la fois un ajout et une substitution, révélant le manque qu'il prétend combler.",
    },
    {
      english: 'Palimpsest',
      french: 'Palimpseste',
      phonetic: '/ˈpælɪmpsest/',
      example: 'The novel operates as a palimpsest, each narrative layer partially effaced yet still legible beneath.',
      exampleTranslation: "Le roman fonctionne comme un palimpseste, chaque couche narrative partiellement effacée mais encore lisible en dessous.",
    },
    {
      english: 'Undecidability',
      french: 'Indécidabilité',
      phonetic: '/ˌʌndɪˌsaɪdəˈbɪlɪti/',
      example: 'Undecidability does not paralyse reading; it opens the text to an infinite play of signification.',
      exampleTranslation: "L'indécidabilité ne paralyse pas la lecture ; elle ouvre le texte à un jeu infini de la signification.",
    },
  ],
  grammar: {
    title: "L'inversion et la fronting dans la prose critique avancée",
    explanation: "En anglais académique de haut niveau, l'inversion (inversion) et le fronting (détachement d'un élément en tête de phrase) servent à mettre en relief un constituant et à créer un effet rhétorique puissant. L'inversion sujet-auxiliaire se produit après des adverbes restrictifs en position initiale : « Not only does deconstruction question logocentrism, but it also... ». Après des expressions négatives : « Nowhere is this more evident than in... », « Rarely has a theoretical paradigm... ». Le fronting place un élément (complément, adverbe, adjectif) en début de phrase sans inversion : « This aporia, Derrida insists, cannot be resolved. », « Paradoxical though it may seem, the supplement... ». Ces constructions sont omniprésentes dans la critique littéraire anglophone et sont indispensables pour atteindre un registre C2.",
    examples: [
      { sentence: 'Not only does différance destabilise the sign, but it also exposes the metaphysics of presence undergirding it.', translation: "Non seulement la différance déstabilise le signe, mais elle expose aussi la métaphysique de la présence qui le sous-tend.", isCorrect: true },
      { sentence: 'Seldom has a concept provoked such sustained philosophical controversy.', translation: "Rarement un concept a-t-il provoqué une telle controverse philosophique soutenue.", isCorrect: true },
      { sentence: 'Not only différance destabilises the sign, but it also exposes the metaphysics of presence.', translation: '', isCorrect: false },
      { sentence: 'Paradoxical though it may seem, the supplement both completes and subverts the original.', translation: "Paradoxal que cela puisse paraître, le supplément complète et subvertit à la fois l'original.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Not only différance destabilises the sign...', correct: 'Not only does différance destabilise the sign...', explanation: "Après « not only » en position initiale, l'inversion sujet-auxiliaire est obligatoire : « does + sujet + verbe ». Sans auxiliaire, la phrase est agrammaticale." },
      { wrong: 'Rarely a concept has provoked such controversy.', correct: 'Rarely has a concept provoked such controversy.', explanation: "Après un adverbe restrictif en tête (rarely, seldom, never, nowhere), l'inversion est obligatoire : auxiliaire + sujet + verbe, comme dans une question." },
    ],
  },
  conversation: [
    { speaker: 'Prof. Diallo', role: 'A', text: "Let us attend to the way différance operates not merely as a temporal deferral but as a spatial differentiation within the signifying chain.", translation: "Prêtons attention à la façon dont la différance opère non seulement comme un renvoi temporel mais comme une différenciation spatiale au sein de la chaîne signifiante." },
    { speaker: 'Dr. Bouchard', role: 'B', text: "Yes, and nowhere is that spatial dimension more conspicuous than in Derrida's reading of Saussure's arboreal model.", translation: "Oui, et nulle part cette dimension spatiale n'est plus visible que dans la lecture derridienne du modèle arboré de Saussure." },
    { speaker: 'Prof. Diallo', role: 'A', text: "Precisely. The supplement, then — far from being a mere appendage — exposes the constitutive lack at the heart of the system.", translation: "Précisément. Le supplément, alors — loin d'être un simple appendice — expose le manque constitutif au cœur du système." },
    { speaker: 'Dr. Bouchard', role: 'B', text: "And that aporia you identified in the third chapter — does it not function as the very hinge upon which the entire argument turns?", translation: "Et cette aporie que vous avez identifiée dans le troisième chapitre — ne fonctionne-t-elle pas comme le pivot même sur lequel tout l'argument repose ?" },
    { speaker: 'Prof. Diallo', role: 'A', text: "It does. The undecidability there isn't a failure of the text but its most productive moment — the site where meaning proliferates.", translation: "En effet. L'indécidabilité là n'est pas un échec du texte mais son moment le plus productif — le lieu où le sens prolifère." },
    { speaker: 'Dr. Bouchard', role: 'B', text: "I'm reminded of Genette's palimpsest — each reading writes over the previous one without ever fully erasing it.", translation: "Je suis rappelé du palimpseste de Genette — chaque lecture écrit par-dessus la précédente sans jamais l'effacer entièrement." },
    { speaker: 'Prof. Diallo', role: 'A', text: "An apt analogy. Not only does the palimpsest model account for intertextual resonance, but it also forestalls any notion of a definitive interpretation.", translation: "Une analogie pertinente. Non seulement le modèle du palimpseste rend compte de la résonance intertextuelle, mais il prévient aussi toute notion d'interprétation définitive." },
  ],
  conversationTitle: "La différance et les apories du texte",
  pronunciation: [
    { word: 'Différance', phonetic: '/ˌdɪfəˈrɑːns/', meaning: 'Différance (terme derridien)', tip: "Prononcez « dif-uh-RAHNS » — l'accent est sur la dernière syllabe. C'est un terme forgé par Derrida ; le « a » final se prononce comme le « an » nasal français simplifié en « ahns » anglais." },
    { word: 'Aporia', phonetic: '/əˈpɔːriə/', meaning: 'Aporie', tip: "L'accent est sur « -POR- » : uh-POR-ee-uh. Les voyelles extrêmes sont réduites (schwa). Ne dites pas « a-po-RI-a »." },
    { word: 'Palimpsest', phonetic: '/ˈpælɪmpsest/', meaning: 'Palimpseste', tip: "Prononcez « PAL-imp-sest ». L'accent est sur la première syllabe. Le « i » est bref comme dans « bit ». Le « e » final n'est pas muet mais très réduit." },
    { word: 'Supplement', phonetic: '/ˈsʌplɪmənt/', meaning: 'Supplément', tip: "Prononcez « SUP-lə-mənt ». L'accent est sur la première syllabe avec un « u » très ouvert comme dans « cup ». En contexte derridien, on insiste sur la première syllabe pour distinguer le concept technique." },
  ],
}

// ─── c2-l8: Seminar Discussion ──────────────────────────────────────────────
export const C2_L8: LessonContent = {
  vocab: [
    {
      english: 'Phenomenological',
      french: 'Phénoménologique',
      phonetic: '/fɪˌnɒmɪnəˈlɒdʒɪkəl/',
      example: 'A phenomenological reading foregrounds the embodied experience of the reader before the text.',
      exampleTranslation: "Une lecture phénoménologique met au premier plan l'expérience incarnée du lecteur face au texte.",
    },
    {
      english: 'Teleology',
      french: 'Téléologie',
      phonetic: '/ˌtɛliˈɒlədʒi/',
      example: 'To read teleologically is to impose a retroactive coherence that the text itself may resist.',
      exampleTranslation: "Lire de manière téléologique, c'est imposer une cohérence rétroactive que le texte lui-même peut refuser.",
    },
    {
      english: 'Metalepsis',
      french: 'Métalepse',
      phonetic: '/ˌmɛtəˈlɛpsɪs/',
      example: "The author's metalepsis collapses the narrative frame, drawing the reader into the diegetic world.",
      exampleTranslation: "La métalepse de l'auteur effondre le cadre narratif, entraînant le lecteur dans le monde diégétique.",
    },
    {
      english: 'Paratext',
      french: 'Paratexte',
      phonetic: '/ˈpærətɛkst/',
      example: 'Genette demonstrates how the paratext — prefaces, footnotes, epigraphs — shapes the reception of the work.',
      exampleTranslation: "Genette démontre comment le paratexte — préfaces, notes de bas de page, épigraphes — façonne la réception de l'œuvre.",
    },
    {
      english: 'Hegemonic',
      french: 'Hégémonique',
      phonetic: '/hɪˈdʒɛmɒnɪk/',
      example: 'The hegemonic narrative of the canon marginalises precisely those voices that would contest its authority.',
      exampleTranslation: "Le récit hégémonique du canon marginalise précisément les voix qui contesteraient son autorité.",
    },
  ],
  grammar: {
    title: "Le discours rapporté complexe et les verbes d'attribution en contexte académique",
    explanation: "Dans un séminaire académique, rapporter les propos d'un théoricien exige des verbes d'attribution nuancés (reporting verbs) qui signalent la posture épistémique du locuteur. On distingue : les verbes de constat (« argue », « contend », « maintain »), les verbes de démonstration (« demonstrate », « establish », « evince »), les verbes de concession (« concede », « acknowledge », « grant »), et les verbes de réfutation (« dispute », « contest », « rebut »). La structure varie : « X argues that + indicatif », « X contends + subordonnée nominale », « That X is mistaken has been demonstrated by Y ». Au C2, il est crucial d'alterner entre discours direct intégré et indirect, et de maîtriser les constructions au passif académique : « It has been argued that... », « What is often overlooked is... ». Attention : « argue » sans « that » peut signifier « prétendre » ou « contester » selon le contexte — l'ambiguïté doit être levée.",
    examples: [
      { sentence: 'Barthes contends that the death of the author necessitates the birth of the reader.', translation: "Barthes soutient que la mort de l'auteur nécessite la naissance du lecteur.", isCorrect: true },
      { sentence: 'It has been persuasively argued that metalepsis fundamentally reconfigures the ontology of fiction.', translation: "Il a été argumenté de manière persuasive que la métalepse reconfigure fondamentalement l'ontologie de la fiction.", isCorrect: true },
      { sentence: 'Derrida argues the supplement is merely decorative.', translation: '', isCorrect: false },
      { sentence: "What Foucault's archaeology of knowledge establishes is that discursive formations obey rules they cannot themselves articulate.", translation: "Ce que l'archéologie du savoir de Foucault établit, c'est que les formations discursives obéissent à des règles qu'elles ne peuvent elles-mêmes articuler.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Derrida argues the supplement is merely decorative.', correct: 'Derrida argues that the supplement is merely decorative.', explanation: "En anglais académique, « argue » suivi d'une subordonnée exige « that » pour éviter l'ambiguïté (contester vs. prétendre). Sans « that », on comprendrait que Derrida conteste l'idée que le supplément est décoratif." },
      { wrong: 'It has been argued by Barthes that...', correct: 'Barthes argues that...', explanation: "Le passif académique (« It has been argued that... ») s'emploie quand l'attribution est diffuse ou collective. Pour un auteur identifié, préférez la forme active qui est plus directe et précise." },
    ],
  },
  conversation: [
    { speaker: 'Prof. Ndiaye', role: 'A', text: "Shall we begin with the phenomenological approach? I'd like to contend that Iser's implied reader, while generative, nonetheless presupposes a transcendental subject that phenomenology itself calls into question.", translation: "Devons-nous commencer par l'approche phénoménologique ? Je voudrais soutenir que le lecteur implicite d'Iser, bien que génératif, présuppose néanmoins un sujet transcendantal que la phénoménologie elle-même remet en question." },
    { speaker: 'Dr. Mercier', role: 'B', text: "That's a cogent objection. Yet one might concede that Iser's gaps — his Leerstellen — do productively foreground the reader's constitutive role without reifying consciousness.", translation: "C'est une objection pertinente. Cependant on pourrait concéder que les blancs d'Iser — ses Leerstellen — mettent productivement au premier plan le rôle constitutif du lecteur sans réifier la conscience." },
    { speaker: 'Prof. Ndiaye', role: 'A', text: "Fair enough. But consider the teleological assumption embedded in Iser's model: that reading progresses toward coherence. What if the text deliberately thwarts that coherence?", translation: "Juste. Mais considérez l'hypothèse téléologique inscrite dans le modèle d'Iser : que la lecture progresse vers la cohérence. Et si le texte entrave délibérément cette cohérence ?" },
    { speaker: 'Dr. Mercier', role: 'B', text: "Then metalepsis becomes the perfect test case — the narrative frame collapses precisely when the reader is lured into the diegesis, dissolving any stable vantage point.", translation: "Alors la métalepse devient le cas d'espèce parfait — le cadre narratif s'effondre précisément quand le lecteur est attiré dans la diégèse, dissolvant tout point d'observation stable." },
    { speaker: 'Prof. Ndiaye', role: 'A', text: "Exactly. And the paratext, as Genette has demonstrated, only compounds this instability — where does the text proper end and its framing apparatus begin?", translation: "Exactement. Et le paratexte, comme Genette l'a démontré, ne fait qu'aggraver cette instabilité — où le texte propre finit-il et son appareil de encadrement commence-t-il ?" },
    { speaker: 'Dr. Mercier', role: 'B', text: "That boundary is itself hegemonic — it polices what counts as 'the work' and what is relegated to the marginal. Which is, of course, a profoundly political gesture.", translation: "Cette frontière est elle-même hégémonique — elle policie ce qui compte comme « l'œuvre » et ce qui est relégué au marginal. Ce qui est, bien sûr, un geste profondément politique." },
    { speaker: 'Prof. Ndiaye', role: 'A', text: "Indeed. It has been persuasively argued that the canon's paratextual apparatus functions precisely to naturalise its own exclusions.", translation: "En effet. Il a été argumenté de manière persuasive que l'appareil paratextuel du canon fonctionne précisément pour naturaliser ses propres exclusions." },
  ],
  conversationTitle: 'Séminaire : phénoménologie et limites du texte',
  pronunciation: [
    { word: 'Phenomenological', phonetic: '/fɪˌnɒmɪnəˈlɒdʒɪkəl/', meaning: 'Phénoménologique', tip: "Mot long de sept syllabes : fi-nom-i-nuh-LOJ-i-kul. L'accent principal est sur « -LOJ- ». Ne dites pas « fé-no-mé-no-lo-jique » à la française." },
    { word: 'Teleology', phonetic: '/ˌtɛliˈɒlədʒi/', meaning: 'Téléologie', tip: "Prononcez « tel-ee-OL-uh-jee ». L'accent est sur « -OL- ». Le premier « e » est bref comme dans « tell ». Le « g » est doux comme dans « gene »." },
    { word: 'Metalepsis', phonetic: '/ˌmɛtəˈlɛpsɪs/', meaning: 'Métalepse', tip: "Prononcez « met-uh-LEP-sis ». L'accent est sur « -LEP- ». Le « e » de la première syllabe est bref. Les deux « i » finaux sont brefs et clairs." },
    { word: 'Hegemonic', phonetic: '/hɪˈdʒɛmɒnɪk/', meaning: 'Hégémonique', tip: "Prononcez « hih-juh-MON-ik ». L'accent est sur « -MON- ». Le « h » est expiré. Le « g » est doux comme dans « gem ». Ne dites pas « é-gé-mo-nik »." },
  ],
}

// ─── c2-l9: Theoretical Framework ────────────────────────────────────────────
export const C2_L9: LessonContent = {
  vocab: [
    {
      english: 'Epistemology',
      french: 'Épistémologie',
      phonetic: '/ɪˌpɪstəˈmɒlədʒi/',
      example: 'Epistemology interrogates the conditions under which knowledge claims acquire legitimacy.',
      exampleTranslation: "L'épistémologie interroge les conditions sous lesquelles les prétentions au savoir acquièrent leur légitimité.",
    },
    {
      english: 'Ontology',
      french: 'Ontologie',
      phonetic: '/ɒnˈtɒlədʒi/',
      example: 'The ontological status of fictional characters remains a vexed question in philosophical aesthetics.',
      exampleTranslation: "Le statut ontologique des personnages de fiction reste une question épineuse en esthétique philosophique.",
    },
    {
      english: 'Pragmatics',
      french: 'Pragmatique',
      phonetic: '/præɡˈmætɪks/',
      example: 'Pragmatics shifts the focus from abstract meaning to the contextual force of utterances in situ.',
      exampleTranslation: "La pragmatique déplace l'attention du sens abstrait vers la force contextuelle des énoncés en situation.",
    },
    {
      english: 'Taxonomy',
      french: 'Taxonomie',
      phonetic: '/tækˈsɒnəmi/',
      example: 'Any taxonomy of narrative modes inevitably encodes ideological assumptions about what constitutes literature.',
      exampleTranslation: "Toute taxonomie des modes narratifs encode inévitablement des hypothèses idéologiques sur ce qui constitue la littérature.",
    },
    {
      english: 'Dialectics',
      french: 'Dialectique',
      phonetic: '/ˌdaɪəˈlɛktɪks/',
      example: 'Dialectics, whether Hegelian or Marxist, posits that contradiction is the motor of historical transformation.',
      exampleTranslation: "La dialectique, qu'elle soit hégélienne ou marxiste, pose que la contradiction est le moteur de la transformation historique.",
    },
  ],
  grammar: {
    title: "Les constructions clivées et pseudo-clivées pour l'argumentation théorique",
    explanation: "Les constructions clivées (cleft sentences) et pseudo-clivées (pseudo-cleft sentences) sont essentielles au registre C2 pour articuler une argumentation théorique avec précision. La phrase clivée ( « It is X that/who... » ) met en focalisation un constituant : « It is precisely the ontological question that pragmatics elides ». La phrase pseudo-clivée ( « What X is/does is... » ) isole le groupe verbal ou le concept clé : « What dialectics reveals is that contradiction is constitutive, not accidental ». On peut aussi cliver avec « It was not until... that... » ou « It is precisely because... that... ». En contexte théorique, ces structures permettent d'opérer des distinctions fines entre ce qui est central et ce qui est périphérique dans un argument. Attention : « It is X that... » n'est pas équivalent à « X is... » — la version clivée implique une mise en contraste avec d'autres possibilités.",
    examples: [
      { sentence: "It is precisely the epistemological dimension that Foucault's archaeology foregrounds at the expense of hermeneutic depth.", translation: "C'est précisément la dimension épistémologique que l'archéologie de Foucault met au premier plan au détriment de la profondeur herméneutique.", isCorrect: true },
      { sentence: 'What pragmatics ultimately demonstrates is that meaning is inseparable from use.', translation: "Ce que la pragmatique démontre en fin de compte, c'est que le sens est inséparable de l'usage.", isCorrect: true },
      { sentence: 'It is the epistemological dimension what Foucault foregrounds.', translation: '', isCorrect: false },
      { sentence: 'It was not until the poststructuralist turn that the ideological underpinnings of taxonomy came under sustained scrutiny.', translation: "Ce n'est qu'avec le tournant poststructuraliste que les fondements idéologiques de la taxonomie firent l'objet d'un examen soutenu.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'It is the epistemological dimension what Foucault foregrounds.', correct: 'It is the epistemological dimension that Foucault foregrounds.', explanation: "Dans les phrases clivées, on utilise « that » (ou « who » pour les personnes), jamais « what ». « What » s'emploie dans les pseudo-clivées : « What Foucault foregrounds is the epistemological dimension »." },
      { wrong: 'What dialectics reveals are that contradiction is constitutive.', correct: 'What dialectics reveals is that contradiction is constitutive.', explanation: "Dans une pseudo-clivée, le verbe « be » s'accorde avec le groupe « what » (singulier) : « What X reveals IS... », pas « are ». Même si le complément est pluriel, l'accord se fait avec la relative en « what »." },
    ],
  },
  conversation: [
    { speaker: 'Prof. Konaté', role: 'A', text: "If I may, I'd like to frame our discussion around a deceptively simple question: is it the epistemological register or the ontological one that should govern our reading practice?", translation: "Si vous permettez, j'aimerais cadrer notre discussion autour d'une question en apparence simple : est-ce le registre épistémologique ou ontologique qui devrait gouverner notre pratique de lecture ?" },
    { speaker: 'Dr. Fontaine', role: 'B', text: "What I would argue is that the two are inseparable — ontology always presupposes an epistemology, and vice versa.", translation: "Ce que je soutiendrais, c'est que les deux sont inséparables — l'ontologie présuppose toujours une épistémologie, et vice versa." },
    { speaker: 'Prof. Konaté', role: 'A', text: "A fair dialectical move. But it is precisely because they are entangled that we must disentangle them analytically — otherwise critique collapses into circularity.", translation: "Un juste mouvement dialectique. Mais c'est précisément parce qu'ils sont enchevêtrés que nous devons les démêler analytiquement — sinon la critique s'effondre en circularité." },
    { speaker: 'Dr. Fontaine', role: 'B', text: "Granted. Yet pragmatics offers a way out: it brackets the epistemology-ontology impasse and asks instead what utterances do within discursive formations.", translation: "Accordé. Cependant la pragmatique offre une issue : elle met entre parenthèses l'impasse épistémologie-ontologie et demande plutôt ce que les énoncés font au sein des formations discursives." },
    { speaker: 'Prof. Konaté', role: 'A', text: "That's a persuasive reframing. But every taxonomy of speech acts — Austin's, Searle's — encodes its own metaphysical commitments, does it not?", translation: "C'est un recadrage persuasif. Mais toute taxonomie des actes de langage — celle d'Austin, celle de Searle — encode ses propres engagements métaphysiques, n'est-ce pas ?" },
    { speaker: 'Dr. Fontaine', role: 'B', text: "Inevitably. It was not until the poststructuralist critique that those commitments were systematically excavated.", translation: "Inévitablement. Ce n'est qu'avec la critique poststructuraliste que ces engagements furent systématiquement mis au jour." },
    { speaker: 'Prof. Konaté', role: 'A', text: "And what that excavation reveals is that dialectics, however indispensable, must remain self-reflexive about its own categories of analysis.", translation: "Et ce que cette mise au jour révèle, c'est que la dialectique, si indispensable soit-elle, doit demeurer auto-réflexive quant à ses propres catégories d'analyse." },
  ],
  conversationTitle: "Épistémologie, ontologie et pragmatique",
  pronunciation: [
    { word: 'Epistemology', phonetic: '/ɪˌpɪstəˈmɒlədʒi/', meaning: 'Épistémologie', tip: "Prononcez « ih-pis-tuh-MOL-uh-jee ». L'accent principal est sur « -MOL- ». Le « p » initial est clair, le « g » final est doux. Ne dites pas « é-pis-té-mo-lo-jie »." },
    { word: 'Ontology', phonetic: '/ɒnˈtɒlədʒi/', meaning: 'Ontologie', tip: "Prononcez « on-TOL-uh-jee ». L'accent est sur « -TOL- ». Le premier « o » est ouvert comme dans « on ». Le « g » est doux." },
    { word: 'Pragmatics', phonetic: '/præɡˈmætɪks/', meaning: 'Pragmatique', tip: "Prononcez « prag-MAT-iks ». L'accent est sur « -MAT- ». Le « a » de cette syllabe est très ouvert comme dans « cat ». Ne dites pas « prag-MA-tiks »." },
    { word: 'Taxonomy', phonetic: '/tækˈsɒnəmi/', meaning: 'Taxonomie', tip: "Prononcez « tak-SON-uh-mee ». L'accent est sur « -SON- ». Le « x » se prononce « ks ». Le « o » accentué est ouvert. Ne dites pas « tak-so-NO-mie »." },
  ],
}

// ─── c2-l10: Analysis Sounds ─────────────────────────────────────────────────
export const C2_L10: LessonContent = {
  vocab: [
    {
      english: 'Alliteration',
      french: 'Allitération',
      phonetic: '/əˌlɪtəˈreɪʃən/',
      example: 'The alliteration of plosive consonants produces a percussive rhythm that mirrors the poem\'s thematic violence.',
      exampleTranslation: "L'allitération des consonnes occlusives produit un rythme percutant qui reflète la violence thématique du poème.",
    },
    {
      english: 'Assonance',
      french: 'Assonance',
      phonetic: '/ˈæsənəns/',
      example: 'The assonance of the long « i » throughout the stanza creates an auditory cohesion that belies the semantic disjunction.',
      exampleTranslation: "L'assonance du « i » long à travers la strophe crée une cohésion auditive qui dément la disjonction sémantique.",
    },
    {
      english: 'Enjambment',
      french: 'Enjambement',
      phonetic: '/ɪnˈdʒæmmənt/',
      example: 'The enjambment forces a rereading that suspends syntactic closure and proliferates meaning across line boundaries.',
      exampleTranslation: "L'enjambement force une relecture qui suspend la clôture syntaxique et fait proliférer le sens au-delà des limites du vers.",
    },
    {
      english: 'Cacophony',
      french: 'Cacophonie',
      phonetic: '/kəˈkɒfəni/',
      example: 'The deliberate cacophony of harsh consonant clusters enacts at the phonological level the disorder the poem depicts.',
      exampleTranslation: "La cacophonie délibérée des groupes consonantiques durs actualise au niveau phonologique le désordre que le poème représente.",
    },
    {
      english: 'Onomatopoeia',
      french: 'Onomatopée',
      phonetic: '/ˌɒnəˌmætəˈpiːə/',
      example: 'Onomatopoeia collapses the distinction between signifier and referent by making the word imitate its own denotatum.',
      exampleTranslation: "L'onomatopée effondre la distinction entre signifiant et référent en faisant le mot imiter son propre dénoté.",
    },
  ],
  grammar: {
    title: "Les constructions absolues et les participiales dans l'analyse phonostylistique",
    explanation: "Les constructions absolues (absolute constructions) et les propositions participiales (participial clauses) sont des structures avancées caractéristiques de la prose critique C2. La construction absolue combine un nom + participe sans lien syntaxique avec la phrase principale : « The plosives marshalled, the stanza achieves a martial cadence ». La participiale utilise un participe présent ou passé pour subordonner une idée sans conjonction : « Enacting the violence it depicts, the cacophony... », « Read aloud, the enjambment produces... ». Ces constructions permettent de condenser l'argumentation en évitant les subordonnées lourdes. Elles sont omniprésentes dans la critique stylistique anglophone. Attention : le sujet de la participiale doit correspondre au sujet de la principale (sinon, il s'agit d'un « dangling modifier ») : « *Reading the poem, the alliteration stands out » est incorrect — c'est le lecteur qui lit, pas l'allitération.",
    examples: [
      { sentence: 'The fricatives foregrounded, the passage acquires an ethereal quality that mirrors its thematic evanescence.', translation: "Les fricatives mises au premier plan, le passage acquiert une qualité éthérée qui reflète son évanescence thématique.", isCorrect: true },
      { sentence: 'Collapsing the signifier-referent distinction, onomatopoeia enacts the very phenomenon it names.', translation: "Effondrant la distinction signifiant-référent, l'onomatopée actualise le phénomène même qu'elle nomme.", isCorrect: true },
      { sentence: 'Reading the poem, the cacophony becomes overwhelming.', translation: '', isCorrect: false },
      { sentence: 'Read through the lens of phonostylistics, the assonance reveals a counter-narrative to the surface semantics.', translation: "Lu à travers le prisme de la phonostylistique, l'assonance révèle un contre-récit par rapport à la sémantique de surface.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Reading the poem, the cacophony becomes overwhelming.', correct: 'When one reads the poem, the cacophony becomes overwhelming. / Reading the poem, one finds the cacophony overwhelming.', explanation: "Erreur de « dangling modifier » : le sujet de la participiale (« reading ») doit être le même que celui de la principale. Ce n'est pas la cacophonie qui lit le poème. Corrigez en rendant le sujet explicite." },
      { wrong: 'The fricatives foregrounding, the passage acquires an ethereal quality.', correct: 'The fricatives foregrounded, the passage acquires an ethereal quality.', explanation: "Dans une construction absolue, si le nom subit l'action, on utilise le participe passé (« foregrounded »), pas le participe présent (« foregrounding »). Les fricatives sont mises en avant — elles ne mettent pas en avant." },
    ],
  },
  conversation: [
    { speaker: 'Prof. Traoré', role: 'A', text: "If we attend to the phonological texture, the alliteration of plosive consonants in the third stanza doesn't merely ornament — it constitutes the very logic of the poem's argument.", translation: "Si nous prêtons attention à la texture phonologique, l'allitération des consonnes occlusives dans la troisième strophe n'orne pas seulement — elle constitue la logique même de l'argument du poème." },
    { speaker: 'Dr. Lefèvre', role: 'B', text: "I'd go further: the assonance of the long « i » creates a sonic field that belies the stanza's semantic despair. Sound and sense work at cross-purposes.", translation: "J'irais plus loin : l'assonance du « i » long crée un champ sonore qui dément le désespoir sémantique de la strophe. Son et sens travaillent à contre-courant." },
    { speaker: 'Prof. Traoré', role: 'A', text: "A productive tension. And the enjambment — the syntactic unit spilling across the line break — forces a rereading that suspends closure. Meaning proliferates at the very site where the line would arrest it.", translation: "Une tension productive. Et l'enjambement — l'unité syntaxique débordant le saut de ligne — force une relecture qui suspend la clôture. Le sens prolifère au lieu même où le vers l'arrêterait." },
    { speaker: 'Dr. Lefèvre', role: 'B', text: "While the cacophony in the final couplet — those harsh clusters — enacts the disorder the poem thematises. The phonological level becomes mimetic.", translation: "Tandis que la cacophonie dans le distique final — ces groupes durs — actualise le désordre que le poème thématise. Le niveau phonologique devient mimétique." },
    { speaker: 'Prof. Traoré', role: 'A', text: "Precisely. And onomatopoeia collapses the distance between signifier and referent altogether — the word doesn't denote the sound; it performs it.", translation: "Précisément. Et l'onomatopée effondre entièrement la distance entre signifiant et référent — le mot ne dénote pas le son ; il l'exécute." },
    { speaker: 'Dr. Lefèvre', role: 'B', text: "The fricatives foregrounded, the passage acquires that ethereal quality we noted — as though sound itself were thinking.", translation: "Les fricatives mises au premier plan, le passage acquiert cette qualité éthérée que nous avons notée — comme si le son lui-même pensait." },
    { speaker: 'Prof. Traoré', role: 'A', text: "Read aloud, the poem becomes a different creature entirely — the phonostylistic analysis only approximates what the ear already knows.", translation: "Lu à haute voix, le poème devient une créature entièrement différente — l'analyse phonostylistique ne fait qu'approcher ce que l'oreille sait déjà." },
  ],
  conversationTitle: "Phonostylistique et texture sonore du poème",
  pronunciation: [
    { word: 'Alliteration', phonetic: '/əˌlɪtəˈreɪʃən/', meaning: 'Allitération', tip: "Prononcez « uh-lit-uh-RAY-shun ». L'accent principal est sur « -RAY- ». Le premier « a » est réduit (schwa). Ne dites pas « a-lee-té-ra-tion »." },
    { word: 'Assonance', phonetic: '/ˈæsənəns/', meaning: 'Assonance', tip: "Prononcez « ASS-uh-nuns ». L'accent est sur la première syllabe. Le « a » est très ouvert comme dans « cat ». Les deux syllabes suivantes sont réduites." },
    { word: 'Enjambment', phonetic: '/ɪnˈdʒæmmənt/', meaning: 'Enjambement', tip: "Prononcez « in-JAM-ment ». L'accent est sur « -JAM- ». C'est un terme d'origine française mais la prononciation anglaise diffère totalement. Le « a » est ouvert comme dans « jam »." },
    { word: 'Onomatopoeia', phonetic: '/ˌɒnəˌmætəˈpiːə/', meaning: 'Onomatopée', tip: "Mot de six syllabes : on-uh-mat-uh-PEE-uh. L'accent principal est sur « -PEE- ». Le « oe » final se prononce « ee-uh ». C'est l'un des mots les plus difficiles à prononcer en anglais littéraire." },
  ],
}
