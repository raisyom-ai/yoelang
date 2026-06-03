import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C2 MASTERY — UNIT 8: POETIC LANGUAGE (c2-l36 through c2-l40)
// YOELANG English Learning App for Francophone Users
// Near-native mastery: meter, alliteration, enjambment, caesura, poetic devices
// ════════════════════════════════════════════════════════════════════════════════

// ─── c2-l36: Poetry Vocabulary — Meter, alliteration, enjambment, caesura ──────
export const C2_L36: LessonContent = {
  vocab: [
    {
      english: 'Enjambment',
      french: 'Enjambement',
      phonetic: '/ɪnˈdʒæmːmənt/',
      example: 'The enjambment across lines four and five propels the reader forward, denying the syntactic closure the line break would otherwise promise.',
      exampleTranslation: 'L\'enjambement entre les vers quatre et cinq propulse le lecteur en avant, déniant la clôture syntaxique que le retour à la ligne promettrait autrement.',
    },
    {
      english: 'Caesura',
      french: 'Césure',
      phonetic: '/sɪˈʒʊərə/',
      example: 'The caesura after "married" creates a agonising pause that mirrors the speaker\'s hesitation.',
      exampleTranslation: 'La césure après "married" crée une pause angoissante qui reflète l\'hésitation du locuteur.',
    },
    {
      english: 'Alliteration',
      french: 'Allitération',
      phonetic: '/əˌlɪtəˈreɪʃən/',
      example: 'The relentless alliteration of plosive "p" sounds in Poe\'s "The Bells" imitates the very percussion it describes.',
      exampleTranslation: 'L\'allitération implacable des consonnes occlusives "p" dans "The Bells" de Poe imite la percussion même qu\'elle décrit.',
    },
    {
      english: 'Iambic pentameter',
      french: 'Pentamètre iambique',
      phonetic: '/aɪˌæmbɪk pɛnˈtæmɪtər/',
      example: 'Shakespeare\'s iambic pentameter replicates the rhythm of the human heartbeat — five pairs of unstressed and stressed syllables per line.',
      exampleTranslation: 'Le pentamètre iambique de Shakespeare réplique le rythme du battement cardiaque humain — cinq paires de syllabes atones et toniques par vers.',
    },
    {
      english: 'Volta',
      french: 'Volta (tournant)',
      phonetic: '/ˈvoʊltə/',
      example: 'The volta at the ninth line of the Petrarchan sonnet marks the dramatic pivot from argument to resolution.',
      exampleTranslation: 'La volta au neuvième vers du sonnet pétrarquiste marque le tournant dramatique de l\'argument à la résolution.',
    },
  ],
  grammar: {
    title: 'Le langage de l\'analyse prosodique : structures métriques et terminology spécialisée',
    explanation: `L'analyse poétique en anglais exige une maîtrise terminologique qui va bien au-delà du vocabulaire littéraire courant. Le mètre anglais (meter) repose sur l'alternance de syllabes atones (unstressed, notées ˘) et toniques (stressed, notées ˉ). Les pieds métriques (metrical feet) fondamentaux sont : l'iambe (˘ˉ), le trochée (ˉ˘), l'anapeste (˘˘ˉ), le dactyle (ˉ˘˘) et le spondée (ˉˉ). Le nom du mètre combine le pied et le nombre de pieds par vers : pentamètre iambique = cinq iambes par vers. L'enjambement (enjambment) se produit lorsqu'une unité syntaxique déborde au-delà de la fin du vers sans ponctuation, créant un effet de flux et de tension. La césure (caesura) est une pause rythmique à l'intérieur d'un vers, souvent marquée par une virgule ou un point-virgule, qui divise le vers en deux hémistiches. La volta est le tournant rhétorique ou émotionnel du poème, particulièrement crucial dans la tradition sonnettiste. Ces termes ne sont pas de simples étiquettes : ils désignent des effets prosodiques précis qui génèrent du sens. En anglais, on emploie des constructions analytiques spécifiques : "the enjambment creates", "the caesura interrupts", "the volta shifts", "the alliteration reinforces".`,
    examples: [
      { sentence: 'The enjambment between lines 3 and 4 creates a syntactic tension that mirrors the speaker\'s emotional unrest.', translation: 'L\'enjambement entre les vers 3 et 4 crée une tension syntaxique qui reflète le trouble émotionnel du locuteur.', isCorrect: true },
      { sentence: 'The caesura, marked by the semicolon, divides the line into two antithetical hemistiches, foregrounding the speaker\'s inner conflict.', translation: 'La césure, marquée par le point-virgule, divise le vers en deux hémistiches antithétiques, mettant en relief le conflit intérieur du locuteur.', isCorrect: true },
      { sentence: 'The poem uses enjambment for making lines longer.', translation: '', isCorrect: false },
      { sentence: 'The volta at line 9 shifts the register from lament to quiet resignation, reconfiguring the entire argument of the octave.', translation: 'La volta au vers 9 fait passer le registre de la lamentation à la résignation tranquille, reconfigurant l\'argument entier de l\'octave.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The poem uses enjambment for making lines longer.', correct: 'The enjambment across these lines creates a syntactic tension that propels the reader beyond the line boundary.', explanation: 'L\'enjambement n\'est pas un simple allongement visuel — il crée un effet de tension syntaxique et rythmique. Réduire l\'enjambement à une question de longueur en trivialise la fonction. L\'analyse C2 doit rendre compte de l\'effet prosodique, non de la seule apparence.' },
      { wrong: 'There is a pause in the line.', correct: 'A caesura interrupts the iambic flow at the mid-point, fracturing the metrical regularity with a dramatic silence.', explanation: 'Au niveau C2, "pause" est trop vague. On doit spécifier qu\'il s\'agit d\'une césure (caesura), en décrire la position et la fonction prosodique — la rupture du flux métrique, le silence dramatique, la division en hémistiches.' },
    ],
  },
  conversation: [
    { speaker: 'Céline', role: 'A', text: 'I find the enjambment in Donne\'s Holy Sonnets utterly disorienting — the syntax refuses to settle, pulling you across the line boundary before you can catch your breath.', translation: 'Je trouve l\'enjambement dans les Sonnets sacrés de Donne absolument désorientant — la syntaxe refuse de se poser, vous tirant au-delà de la limite du vers avant que vous ne puissiez reprendre votre souffle.', },
    { speaker: 'Benedict', role: 'B', text: 'That\'s precisely the point, isn\'t it? The metrical form — the iambic pentameter — promises regularity, and the enjambment systematically subverts it.', translation: 'C\'est précisément le but, n\'est-ce pas ? La forme métrique — le pentamètre iambique — promet la régularité, et l\'enjambement la subvertit systématiquement.', },
    { speaker: 'Céline', role: 'A', text: 'Whereas the caesura does something altogether different — it arrests the line mid-flow, forcing a weighted pause that seems to hold the entire argument in suspension.', translation: 'Tandis que la césure fait quelque chose de tout à fait différent — elle arrête le vers en plein flux, forçant une pause pondérée qui semble maintenir tout l\'argument en suspension.', },
    { speaker: 'Benedict', role: 'B', text: 'Think of Milton — the caesuras in Paradise Lost are so strategically placed that they become rhetorical pivots, not mere breathing spaces.', translation: 'Pensez à Milton — les césures dans Le Paradis perdu sont si stratégiquement placées qu\'elles deviennent des pivots rhétoriques, non de simples espaces de respiration.', },
    { speaker: 'Céline', role: 'A', text: 'And then there\'s the volta — that abrupt turn in the sonnet form. It\'s not just decorative; it\'s the engine of the entire argument.', translation: 'Et puis il y a la volta — ce tournant abrupt dans la forme sonnettiste. Ce n\'est pas juste décoratif ; c\'est le moteur de tout l\'argument.', },
    { speaker: 'Benedict', role: 'B', text: 'Precisely. Without the volta, the sonnet collapses into lyric stasis. The turn is what transforms description into dialectic — or, in Donne\'s case, despair into defiant faith.', translation: 'Précisément. Sans la volta, le sonnet s\'effondre en stase lyrique. Le tournant est ce qui transforme la description en dialectique — ou, dans le cas de Donne, le désespoir en foi défiante.', },
    { speaker: 'Céline', role: 'A', text: 'And the alliteration — let\'s not forget how it works in tandem with the meter. The plosive clustering in Hopkins\'s "The Windhover" isn\'t ornamental; it\'s mimetic — the very sound enacts the bird\'s plunge.', translation: 'Et l\'allitération — n\'oublions pas comment elle fonctionne en tandem avec le mètre. La constellation d\'occlusives dans "The Windhover" de Hopkins n\'est pas ornementale ; elle est mimétique — le son même accomplit le plongeon de l\'oiseau.', },
  ],
  conversationTitle: 'Prosodie et tension poétique',
  pronunciation: [
    {
      word: 'Enjambment',
      phonetic: '/ɪnˈdʒæmːmənt/',
      meaning: 'Enjambement',
      tip: 'Accent sur "JAM" : "in-JAM-ment". Le "en-" initial est réduit en schwa. Le "j" est doux comme dans "judge". Ne prononcez pas "en-jam-BAÏ-ment" à la française.',
    },
    {
      word: 'Caesura',
      phonetic: '/sɪˈʒʊərə/',
      meaning: 'Césure',
      tip: 'Accent sur "ZHU" : "si-ZHOU-rah". Le "c" = "s", le "ae" = "i" bref, le "su" = "zou" avec le "s" sonore. En anglais britannique, parfois "si-ZYOU-rah". Ne dites pas "ké-su-ra".',
    },
    {
      word: 'Iambic',
      phonetic: '/aɪˌæmbɪk/',
      meaning: 'Iambique',
      tip: 'Accent sur "AM" : "aï-AM-bik". Le "i" initial se prononce "aï" comme dans "hi". Le "a" accentué est très ouvert. Ne dites pas "ee-AM-bik".',
    },
    {
      word: 'Volta',
      phonetic: '/ˈvoʊltə/',
      meaning: 'Volta (tournant)',
      tip: 'Accent sur la première syllabe : "VOL-tah". Le "o" est long comme dans "volcano". Le "a" final est réduit. Ne prononcez pas "vol-TAH" à l\'italienne — en anglais, l\'accent est initial.',
    },
  ],
}

// ─── c2-l37: Poetic Devices — Inversion in poetry, archaic structures, zeugma ─
export const C2_L37: LessonContent = {
  vocab: [
    {
      english: 'Zeugma',
      french: 'Zeuqme (attelage)',
      phonetic: '/ˈzjuːɡmə/',
      example: 'Pope\'s zeugma — "She stained her honour or her new brocade" — yokes together the abstract and the concrete with devastating wit.',
      exampleTranslation: 'Le zeuqme de Pope — "She stained her honour or her new brocade" — attelle l\'abstrait et le concret avec une redoutable spirituosité.',
    },
    {
      english: 'Chiasmus',
      french: 'Chiasme',
      phonetic: '/kaɪˈæzməs/',
      example: 'The chiasmus in "His time a moment, and a point his space" reverses the terms symmetrically, enacting in form the insignificance it describes.',
      exampleTranslation: 'Le chiasme dans "His time a moment, and a point his space" inverse les termes symétriquement, accomplissant dans la forme l\'insignifiance qu\'il décrit.',
    },
    {
      english: 'Archaism',
      french: 'Archaisme',
      phonetic: '/ˈɑːrkeɪɪzəm/',
      example: 'Yeats\'s deliberate archaisms — "ere", "oft", "methinks" — conjure a mythic temporality that resists the modernity he otherwise inhabits.',
      exampleTranslation: 'Les archaismes délibérés de Yeats — "ere", "oft", "methinks" — évoquent une temporalité mythique qui résiste à la modernité qu\'il habite par ailleurs.',
    },
    {
      english: 'Syllepsis',
      french: 'Syllepse',
      phonetic: '/sɪˈlɛpsɪs/',
      example: 'Syllepsis, as in "She lost her chain and her composure", forces a single word to govern two incompatible meanings simultaneously.',
      exampleTranslation: 'La syllepse, comme dans "She lost her chain and her composure", force un seul mot à régir deux sens incompatibles simultanément.',
    },
    {
      english: 'Anastrophe',
      french: 'Anastrophe (inversion)',
      phonetic: '/əˈnæstrəfi/',
      example: 'Milton\'s anastrophe — "Him the Almighty Power / Hurl\'d headlong" — inverts the object before the verb to foreground the divine agent\'s dominance.',
      exampleTranslation: 'L\'anastrophe de Milton — "Him the Almighty Power / Hurl\'d headlong" — place l\'objet avant le verbe pour mettre au premier plan la domination de l\'agent divin.',
    },
  ],
  grammar: {
    title: 'Les figures de construction poétique : inversion, archaïsme et zeugme',
    explanation: `La poésie anglaise exploite des structures grammaticales qui seraient déviantes en prose mais qui, en vers, acquièrent une valeur expressive et rythmique. L'inversion (anastrophe) bouleverse l'ordre syntaxique canonique (SVO) pour des raisons métriques ou emphatiques : "Came the dawn" au lieu de "The dawn came". L'archaïsme grammatical emploie des formes verbales et pronominales anciennes : "thou hast", "doth", "wert", "o\'er". Ces formes ne sont pas de simples reliques — elles signalent un registre poétique et créent une distanciation stylistique. Le zeugme (et sa proche cousine la syllepse) fait governir un seul mot à deux éléments syntaxiquement ou sémantiquement incompatibles : "She wore a necklace and a smile" (gouvernement d'un concret et d'un abstrait par le même verbe). En poésie, le zeugme produit un effet de surprise et de wit (esprit) caractéristique de la tradition augustéenne. Le chiasme arrange les éléments en croisement AB-BA : "Ask not what your country can do for you; ask what you can do for your country." Ces figures ne sont pas de simples ornementations : elles génèrent du sens par leur écart avec la prose standard.`,
    examples: [
      { sentence: 'Came the thunder of the guns, and fell the first of many.', translation: 'Vint le tonnerre des canons, et tomba le premier de beaucoup.', isCorrect: true },
      { sentence: 'Thou art more lovely and more temperate, though thy beauty must needs fade.', translation: 'Tu es plus lovely et plus tempérée, bien que ta beauté doive nécessairement se faner.', isCorrect: true },
      { sentence: 'She wore a hat and went to the store.', translation: '', isCorrect: false },
      { sentence: 'The zeugma in "He held his breath and the podium" forces "held" to govern both a physiological and a physical object, collapsing the literal and the figurative.', translation: 'Le zeugme dans "He held his breath and the podium" force "held" à régir un objet physiologique et un objet physique, faisant s\'effondrer le littéral et le figuré.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She wore a hat and went to the store.', correct: 'She wore a hat and a smile. (zeugma) / She put on a hat and went to the store. (non-zeugmatic)', explanation: 'Le zeugme exige qu\'un seul mot gouverne deux éléments sémantiquement ou syntaxiquement incompatibles, créant un effet de wit. "Wore a hat and went" est simplement une coordination de deux verbes — il n\'y a pas de zeugme car "wore" ne gouverne pas "went".' },
      { wrong: 'Came the dawn, the sun rose beautifully.', correct: 'Came the dawn; rose the sun in splendour.', explanation: 'L\'anastrophe en poésie exige une cohérence interne : si le premier élément est inversé, le second doit l\'être aussi pour maintenir l\'effet stylistique. Mélanger inversion et ordre canonique affaiblit l\'effet.' },
    ],
  },
  conversation: [
    { speaker: 'Dara', role: 'A', text: 'Pope\'s zeugma is unmatched — "She stained her honour or her new brocade" forces "stained" to do double duty, and the absurdity of equating moral and sartorial damage IS the joke.', translation: 'Le zeugme de Pope est inégalé — "She stained her honour or her new brocade" force "stained" à faire double emploi, et l\'absurdité d\'égaler le dommage moral et le dommage vestimentaire EST la plaisanterie.', },
    { speaker: 'Marguerite', role: 'B', text: 'Quite. Though one might argue that syllepsis is the more precise term here, since "stained" operates in two different semantic fields simultaneously rather than in a single unified sense.', translation: 'Tout à fait. Bien qu\'on puisse soutenir que la syllepse est le terme plus précis ici, puisque "stained" opère dans deux champs sémantiques différents simultanément plutôt que dans un sens unifié.', },
    { speaker: 'Dara', role: 'A', text: 'A fair distinction. But what of anastrophe? Milton\'s inversions — "Him the Almighty Power / Hurl\'d headlong" — don\'t merely invert for metrical convenience; they enact divine priority.', translation: 'Une distinction juste. Mais que dire de l\'anastrophe ? Les inversions de Milton — "Him the Almighty Power / Hurl\'d headlong" — n\'inversent pas simplement pour des raisons métriques ; elles accomplissent la priorité divine.', },
    { speaker: 'Marguerite', role: 'B', text: 'Exactly. The object precedes the subject, foregrounding Satan\'s passivity before God\'s agency. The syntax itself becomes theological.', translation: 'Exactement. L\'objet précède le sujet, mettant au premier plan la passivité de Satan devant l\'agentivité de Dieu. La syntaxe elle-même devient théologique.', },
    { speaker: 'Dara', role: 'A', text: 'And the archaisms compound the effect — "Hurl\'d", "headlong flaming", "th\' Eternal". The register places the reader in a sacred temporal order outside ordinary speech.', translation: 'Et les archaïsmes renforcent l\'effet — "Hurl\'d", "headlong flaming", "th\' Eternal". Le registre place le lecteur dans un ordre temporel sacré en dehors du discours ordinaire.', },
    { speaker: 'Marguerite', role: 'B', text: 'Whereas a chiasmus like Pope\'s "His time a moment, and a point his space" achieves something else entirely — the crossed structure mirrors the contraction of human significance.', translation: 'Tandis qu\'un chiasme comme celui de Pope — "His time a moment, and a point his space" — accomplit quelque chose de tout à fait différent — la structure croisée reflète la contraction de la signification humaine.', },
    { speaker: 'Dara', role: 'A', text: 'So form isn\'t merely decorative — it\'s constitutive of meaning. The zeugma mocks, the anastrophe subordinates, the chiasmus contracts, and the archaism consecrates.', translation: 'Donc la forme n\'est pas simplement décorative — elle est constitutive du sens. Le zeugme moque, l\'anastrophe subordonne, le chiasme contracte, et l\'archaïsme consacre.', },
  ],
  conversationTitle: 'Figures de construction poétique',
  pronunciation: [
    {
      word: 'Zeugma',
      phonetic: '/ˈzjuːɡmə/',
      meaning: 'Zeuqme (attelage)',
      tip: 'Accent sur la première syllabe : "ZYOU-gmah". Le "eu" = "you" comme dans "europe". Le "g" est dur. Ne dites pas "ZEUG-ma" ni "zog-ma".',
    },
    {
      word: 'Chiasmus',
      phonetic: '/kaɪˈæzməs/',
      meaning: 'Chiasme',
      tip: 'Accent sur "AZ" : "kaï-AZ-mus". Le "ch" = "k" (comme dans "chaos"). Le "i" = "aï". Le "z" est sonore. Ne prononcez pas "ki-AS-mus".',
    },
    {
      word: 'Archaism',
      phonetic: '/ˈɑːrkeɪɪzəm/',
      meaning: 'Archaisme',
      tip: 'Accent sur "AR" : "AR-kay-iz-em". Le "ch" = "k". Le "a" accentué est long et ouvert comme dans "car". Ne dites pas "ar-SHAY-iz-em".',
    },
    {
      word: 'Anastrophe',
      phonetic: '/əˈnæstrəfi/',
      meaning: 'Anastrophe (inversion)',
      tip: 'Accent sur "NAS" : "eh-NAS-truh-fi". Le premier "a" est réduit en schwa. Le "a" accentué est très ouvert comme dans "cat". Le "ph" final = "f".',
    },
  ],
}

// ─── c2-l38: Poetry Reading — Discussing and interpreting poetry ────────────────
export const C2_L38: LessonContent = {
  vocab: [
    {
      english: 'Hermeneutic circle',
      french: 'Cercle herméneutique',
      phonetic: '/ˌhɜːrməˈnjuːtɪk ˈsɜːrkəl/',
      example: 'Reading poetry inevitably involves the hermeneutic circle — one must understand the parts to grasp the whole, yet the whole alone gives meaning to the parts.',
      exampleTranslation: 'La lecture de la poésie implique inévitablement le cercle herméneutique — il faut comprendre les parties pour saisir le tout, yet le tout seul donne sens aux parties.',
    },
    {
      english: 'Ambiguity',
      french: 'Ambiguïté',
      phonetic: '/ˌæmbɪˈɡjuːɪti/',
      example: 'Empson\'s "Seven Types of Ambiguity" demonstrated that poetic language thrives precisely where meaning bifurcates and refuses resolution.',
      exampleTranslation: 'Les "Sept types d\'ambiguïté" d\'Empson ont démontré que le langage poétique prospère précisément là où le sens bifurque et refuse la résolution.',
    },
    {
      english: 'Defamiliarisation',
      french: 'Défamiliarisation (ostranénie)',
      phonetic: '/diːfəˈmɪliəraɪˌzeɪʃən/',
      example: 'Shklovsky\'s concept of defamiliarisation explains how poetic language makes the familiar strange, compelling us to see what habit has rendered invisible.',
      exampleTranslation: 'Le concept de défamiliarisation de Chklovski explique comment le langage poétique rend l\'étrange familier, nous obligeant à voir ce que l\'habitude a rendu invisible.',
    },
    {
      english: 'Explication',
      french: 'Explication (de texte)',
      phonetic: '/ˌɛksplɪˈkeɪʃən/',
      example: 'The explication of a poem demands line-by-line attention to how diction, syntax, and prosody conspire to produce meaning.',
      exampleTranslation: 'L\'explication d\'un poème exige une attention vers par vers à la façon dont le choix des mots, la syntaxe et la prosodie conspirent pour produire du sens.',
    },
    {
      english: 'Close reading',
      french: 'Lecture attentive',
      phonetic: '/kloʊs ˈriːdɪŋ/',
      example: 'The New Critics insisted that close reading could yield the poem\'s meaning without recourse to biography or historical context.',
      exampleTranslation: 'Les New Critics insistaient sur le fait que la lecture attentive pouvait produire le sens du poème sans recours à la biographie ou au contexte historique.',
    },
  ],
  grammar: {
    title: 'Le discours de l\'interprétation poétique : modalités, atténuations et structures concessives',
    explanation: `L'interprétation poétique à un niveau C2 exige une grammaire de la prudence épistémique. On ne dit pas "the poem means X" — on propose, on suggère, on avance avec nuance. Les structures essentielles sont : (1) La modalité épistémique : "could be read as", "might suggest", "would seem to imply". Le conditionnel ("would") signale la réserve interprétative. (2) L'atténuation (hedging) : "it is arguable that", "one could contend", "the poem appears to". Ces marqueurs signalent que l'interprétation est une construction, non un fait. (3) Les structures concessives : "While the surface reading suggests X, a closer examination reveals Y", "Admittedly, the imagery evokes..., yet one must also consider...". La concession reconnaît une lecture possible avant d'en proposer une autre, ce qui renforce la crédibilité. (4) La métonymie discursive : "the text inscribes", "the poem enacts", "the line registers" — on prête au texte une agentivité qui évite l'attribution directe à l'auteur. Ces constructions ne sont pas de simples précautions ornementales : elles reflètent la nature fondamentalement interprétative et provisoire de toute lecture poétique.`,
    examples: [
      { sentence: 'The poem could be read as a meditation on mortality, though one must acknowledge that the imagery might equally support a political interpretation.', translation: 'Le poème pourrait être lu comme une méditation sur la mortalité, bien qu\'il faille reconnaître que l\'imagerie pourrait tout aussi bien soutenir une interprétation politique.', isCorrect: true },
      { sentence: 'The poem means that death is inevitable.', translation: '', isCorrect: false },
      { sentence: 'While the surface reading suggests pastoral tranquillity, the undercurrent of violence in the diction would seem to complicate any purely idyllic interpretation.', translation: 'Bien que la lecture de surface suggère une tranquillité pastorale, le courant de violence sous-jacent dans le choix des mots semblerait compliquer toute interprétation purement idyllique.', isCorrect: true },
      { sentence: 'Admittedly, the closing lines gesture towards reconciliation, yet the overall trajectory of the poem resists any straightforwardly redemptive reading.', translation: 'Il est admis que les vers de clôture font un geste vers la réconciliation, cependant la trajectoire globale du poème résiste à toute lecture rédemptrice sans équivoque.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The poem means that death is inevitable.', correct: 'The poem could be read as suggesting the inevitability of death, though other readings are equally tenable.', explanation: 'Attribuer un sens univoque et définitif à un poème est épistémologiquement naïf à un niveau C2. La poésie est par nature polysémique — on propose des lectures, on n\'impose pas des sens. "The poem means" élimine la dimension interprétative essentielle.' },
      { wrong: 'I think the poem is about love.', correct: 'One might argue that the poem engages with the conventions of the love lyric, albeit in a fashion that subverts its own premises.', explanation: '"I think... is about" est trop direct et vague pour un discours interprétatif C2. On doit spécifier le mode d\'engagement du poème avec son sujet ("engages with", "subverts") et nuancer la relation entre le texte et la tradition qu\'il mobilise.' },
    ],
  },
  conversation: [
    { speaker: 'Amara', role: 'A', text: 'How do you approach a poem that seems to resist any single interpretive frame? Dickinson\'s "Because I could not stop for Death" comes to mind.', translation: 'Comment abordez-vous un poème qui semble résister à tout cadre interprétatif unique ? "Because I could not stop for Death" de Dickinson me vient à l\'esprit.', },
    { speaker: 'Olivier', role: 'B', text: 'One could begin with the hermeneutic circle — read the parts provisionally, construct a tentative whole, then return to the parts with that whole in view and revise.', translation: 'On pourrait commencer par le cercle herméneutique — lire les parties provisoirement, construire un tout provisoire, puis revenir aux parties avec ce tout en vue et réviser.', },
    { speaker: 'Amara', role: 'A', text: 'But isn\'t that precisely where ambiguity becomes generative rather than obstructive? Empson showed that the richest poems are those where meaning bifurcates and neither branch cancels the other.', translation: 'Mais n\'est-ce pas précisément là que l\'ambiguïté devient générative plutôt qu\'obstructive ? Empson a montré que les poèmes les plus riches sont ceux où le sens bifurque et aucune branche n\'annule l\'autre.', },
    { speaker: 'Olivier', role: 'B', text: 'Admittedly, yes. And defamiliarisation plays a role too — Dickinson\'s startling images make us see death not as abstraction but as a gentleman caller, which is profoundly unsettling precisely because it\'s familiar.', translation: 'Il est admis, oui. Et la défamiliarisation joue aussi un rôle — les images saisissantes de Dickinson nous font voir la mort non comme abstraction mais comme un visiteur galant, ce qui est profondément dérangeant précisément parce que c\'est familier.', },
    { speaker: 'Amara', role: 'A', text: 'So a close reading would attend not just to what the poem says, but to how it says it — the diction, the slant rhymes, the dashes that fracture the syntax.', translation: 'Donc une lecture attentive prêterait attention non seulement à ce que le poème dit, mais à la façon dont il le dit — le choix des mots, les rimes imparfaites, les tirets qui fracturent la syntaxe.', },
    { speaker: 'Olivier', role: 'B', text: 'Precisely. The explication must track how form generates content — or rather, how the distinction between form and content collapses in poetry.', translation: 'Précisément. L\'explication doit suivre comment la forme génère le contenu — ou plutôt, comment la distinction entre forme et contenu s\'effondre en poésie.', },
    { speaker: 'Amara', role: 'A', text: 'Which is arguably why any reading that claims to have "cracked" the poem has already betrayed it. The poem is the ambiguity, not a puzzle to be solved.', translation: 'Ce qui est sans doute la raison pour laquelle toute lecture qui prétend avoir "décrypté" le poème l\'a déjà trahi. Le poème est l\'ambiguïté même, non une énigme à résoudre.', },
  ],
  conversationTitle: 'Interpréter la poésie',
  pronunciation: [
    {
      word: 'Hermeneutic',
      phonetic: '/ˌhɜːrməˈnjuːtɪk/',
      meaning: 'Herméneutique',
      tip: 'Accent sur "NU" : "her-meh-NU-tik". Le "h" est expiré. Le "eu" central = "iou" comme dans "museum". L\'adjectif se termine par "-tik" bref.',
    },
    {
      word: 'Ambiguity',
      phonetic: '/ˌæmbɪˈɡjuːɪti/',
      meaning: 'Ambiguïté',
      tip: 'Accent sur "GU" : "am-bi-GYOU-ih-ti". Le "g" est dur devant "u". Le "y" = "you". Le premier "i" est bref. Ne dites pas "am-bee-GWEE-ti".',
    },
    {
      word: 'Defamiliarisation',
      phonetic: '/diːfəˈmɪliəraɪˌzeɪʃən/',
      meaning: 'Défamiliarisation',
      tip: 'Accent principal sur "LY" : "dee-fuh-MIL-yuh-rai-zay-shun". L\'accent secondaire sur "ZAY". Le "i" accentué est bref. Long mot — gardez le rythme régulier.',
    },
    {
      word: 'Explication',
      phonetic: '/ˌɛksplɪˈkeɪʃən/',
      meaning: 'Explication (de texte)',
      tip: 'Accent sur "KAY" : "ek-spli-KAY-shun". Le "ex" = "eks" avec le "k" audible. Le "i" est bref. Ne confondez pas avec "explanation" (/ˌɛkspləˈneɪʃən/).',
    },
  ],
}

// ─── c2-l39: Poetry Critique — Rhythmic patterns, stress in verse ──────────────
export const C2_L39: LessonContent = {
  vocab: [
    {
      english: 'Scansion',
      french: 'Scansion',
      phonetic: '/ˈskænʃən/',
      example: 'A proper scansion of Keats\'s ode reveals not rigid iambic regularity but a metrical flexibility that mirrors the poet\'s restless imagination.',
      exampleTranslation: 'Une scansion correcte de l\'ode de Keats révèle non pas une régularité iambique rigide mais une flexibilité métrique qui reflète l\'imagination inquiète du poète.',
    },
    {
      english: 'Sprung rhythm',
      french: 'Rythme sprangé',
      phonetic: '/sprʌŋ ˈrɪðəm/',
      example: 'Hopkins\'s sprung rhythm liberates the verse from metrical regularity, counting only stressed syllables while allowing any number of unstressed syllables between them.',
      exampleTranslation: 'Le rythme sprangé de Hopkins libère le vers de la régularité métrique, ne comptant que les syllabes toniques tout en permettant un nombre quelconque de syllabes atones entre elles.',
    },
    {
      english: 'Metrical substitution',
      french: 'Substitution métrique',
      phonetic: '/ˈmɛtrɪkəl ˌsʌbstɪˈtuːʃən/',
      example: 'Metrical substitution — replacing an iamb with a trochee or spondee — introduces局部 irregularity that prevents the metre from becoming mechanical.',
      exampleTranslation: 'La substitution métrique — remplacer un iambe par un trochée ou un spondée — introduit une irrégularité locale qui empêche le mètre de devenir mécanique.',
    },
    {
      english: 'Elision',
      french: 'Élision',
      phonetic: '/ɪˈlɪʒən/',
      example: 'The elision of "o\'er" for "over" is not merely metrical convenience; it compresses the syllable count to maintain the iambic pulse without syntactic dilution.',
      exampleTranslation: 'L\'élision de "o\'er" pour "over" n\'est pas un simple commodité métrique ; elle comprime le compte syllabique pour maintenir la pulsation iambique sans dilution syntaxique.',
    },
    {
      english: 'Prosody',
      french: 'Prosodie',
      phonetic: '/ˈprɒsədi/',
      example: 'Prosody encompasses not merely metre and rhyme but the entire system of rhythmic, melodic, and intonational patterns that organise verse.',
      exampleTranslation: 'La prosodie englobe non seulement le mètre et la rime mais le système entier de schémas rythmiques, mélodiques et intonatifs qui organisent le vers.',
    },
  ],
  grammar: {
    title: 'La critique prosodique : exprimer l\'analyse du rythme et de l\'accent en vers anglais',
    explanation: `La critique prosodique en anglais exige un vocabulaire analytique précis pour décrire les phénomènes rythmiques. Les structures clés sont : (1) L'attribution de fonction : "the trochaic substitution at the line's opening creates a percussive onset", "the spondee arrests the iambic flow". On emploie des verbes causatifs et des noms d'effet : "creates", "generates", "produces", "introduces", "arrests", "propels". (2) La comparaison métrique : "unlike the regular iambic pulse of the preceding lines, the anapestic variation here..." Ce contraste signale que l'écart par rapport à la norme métrique est significatif, pas accidentel. (3) La terminologie quantitative : "a pyrrhic foot (˘˘) in the fourth position weakens the metrical emphasis", "a hypermetrical syllable extends the line beyond its expected measure". (4) Les constructions évaluatives : "the sprung rhythm achieves a naturalness that conventional iambic verse cannot", "the scansion reveals a pattern of...". En anglais, l'accent de vers (stress) est relatif, non absolu — il s'inscrit dans un réseau de prominences hiérarchisées (syllabe, pied, vers, strophe). La critique C2 doit rendre compte de cette hiérarchie et de ses perturbations.`,
    examples: [
      { sentence: 'The trochaic substitution in the first foot — "Dáring | to snáre" — disrupts the iambic norm precisely where the speaker asserts transgressive agency.', translation: 'La substitution trochaïque dans le premier pied — "Dáring | to snáre" — perturbe la norme iambique précisément là où le locuteur affirme une agentivité transgressive.', isCorrect: true },
      { sentence: 'The rhythm is irregular and that makes it interesting.', translation: '', isCorrect: false },
      { sentence: 'Hopkins\'s sprung rhythm, by counting only stressed syllables, achieves a counterpoint between speech rhythm and metrical organisation that traditional iambic verse precludes.', translation: 'Le rythme sprangé de Hopkins, en ne comptant que les syllabes toniques, atteint un contrepoint entre le rythme de la parole et l\'organisation métrique que le vers iambique traditionnel exclut.', isCorrect: true },
      { sentence: 'The elision of "o\'er" not only preserves the decasyllabic line but also, in compressing the vowel, enacts the very brevity the poem laments.', translation: 'L\'élision de "o\'er" non seulement préserve le vers décasyllabique mais aussi, en comprimant la voyelle, accomplit la brièveté même que le poème déplore.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The rhythm is irregular and that makes it interesting.', correct: 'The metrical substitution — a trochee replacing the expected iamb — introduces a local irregularity that foregrounds the line\'s semantic departure from the preceding passage.', explanation: 'Au niveau C2, "irregular" et "interesting" sont des termes vides qui ne disent rien du fonctionnement prosodique. On doit nommer la figure (substitution métrique), identifier sa position, et analyser son effet sémantique — comment l\'écart métrique signale un écart de sens.' },
      { wrong: 'The poem has a nice rhythm.', correct: 'The prosody — a regular iambic pentameter punctuated by strategically placed spondees — enacts through its rhythmic variation the tension between order and disruption that structures the poem.', explanation: '"Nice rhythm" est une appréciation sans valeur analytique. La critique C2 doit identifier le mètre, ses variations, et montrer comment la prosodie accomplit ("enacts") le contenu sémantique du poème.' },
    ],
  },
  conversation: [
    { speaker: 'Ravi', role: 'A', text: 'I\'ve been scansioning Keats\'s "Ode to a Nightingale" and the metrical substitutions are far more frequent than a casual reading suggests — the anapests keep destabilising the iambic base.', translation: 'J\'ai scanné "Ode to a Nightingale" de Keats et les substitutions métriques sont bien plus fréquentes qu\'une lecture distraite ne le suggère — les anapestes ne cessent de déstabiliser la base iambique.', },
    { speaker: 'Nadia', role: 'B', text: 'And that destabilisation is surely intentional — the nightingale\'s song, by its very nature, exceeds the regulative frame of conventional metre.', translation: 'Et cette déstabilisation est sûrement intentionnelle — le chant du rossignol, par sa nature même, excède le cadre régulateur du mètre conventionnel.', },
    { speaker: 'Ravi', role: 'A', text: 'Which is precisely what Hopkins understood when he developed sprung rhythm — counting only stresses liberates the verse to approximate the cadences of natural speech.', translation: 'C\'est précisément ce qu\'Hopkins avait compris en développant le rythme sprangé — ne compter que les accents libère le vers pour qu\'il approche les cadences de la parole naturelle.', },
    { speaker: 'Nadia', role: 'B', text: 'Though one could counter that sprung rhythm, in abolishing the metrical contract entirely, risks dissolving into prose with line breaks.', translation: 'Bien qu\'on puisse riposter que le rythme sprangé, en abolissant entièrement le contrat métrique, risque de se dissoudre en prose avec des retours à la ligne.', },
    { speaker: 'Ravi', role: 'A', text: 'A legitimate objection. But the elision and compression Hopkins employs — "the achieve of, the mastery of the thing" — maintain a rhythmic density that prose simply cannot sustain.', translation: 'Une objection légitime. Mais l\'élision et la compression qu\'emploie Hopkins — "the achieve of, the mastery of the thing" — maintiennent une densité rythmique que la prose ne peut tout simplement pas soutenir.', },
    { speaker: 'Nadia', role: 'B', text: 'That\'s well put. And it brings us back to prosody as a system — not just metre in isolation, but the interplay of stress, intonation, pace, and silence.', translation: 'C\'est bien dit. Et cela nous ramène à la prosodie comme système — non pas seulement le mètre isolément, mais l\'interaction de l\'accent, de l\'intonation, du tempo et du silence.', },
    { speaker: 'Ravi', role: 'A', text: 'In which case, the scansion is only the beginning — a map, not the territory. The real critique must account for what the map cannot capture: the performed life of the poem in the reader\'s voice.', translation: 'Dans ce cas, la scansion n\'est que le commencement — une carte, non le territoire. La vraie critique doit rendre compte de ce que la carte ne peut capturer : la vie performée du poème dans la voix du lecteur.', },
  ],
  conversationTitle: 'Critique prosodique et rythme',
  pronunciation: [
    {
      word: 'Scansion',
      phonetic: '/ˈskænʃən/',
      meaning: 'Scansion',
      tip: 'Accent sur "SCAN" : "SKAN-shun". Le "a" est très ouvert comme dans "cat". Le "-sion" se réduit en "shun". Ne dites pas "scan-SEE-on" ni "scan-ZHON".',
    },
    {
      word: 'Prosody',
      phonetic: '/ˈprɒsədi/',
      meaning: 'Prosodie',
      tip: 'Accent sur "PROS" : "PROS-eh-di". Le "o" est ouvert comme dans "hot" (britannique) ou court comme dans "odd" (américain). Le "y" final = "i" bref. Ne dites pas "pro-ZO-di".',
    },
    {
      word: 'Elision',
      phonetic: '/ɪˈlɪʒən/',
      meaning: 'Élision',
      tip: 'Accent sur "LI" : "ih-LIZH-un". Le premier "e" est réduit en schwa. Le "s" = "zh" comme dans "measure". Le "-ion" = "un" réduit. Ne dites pas "eh-lee-ZHON".',
    },
    {
      word: 'Spondee',
      phonetic: '/ˈspɒndiː/',
      meaning: 'Spondée',
      tip: 'Accent sur "SPON" : "SPON-di". Le "o" est ouvert comme dans "hot". Le "ee" final est long. Ne dites pas "spon-DAY" — ce n\'est pas un mot français.',
    },
  ],
}

// ─── c2-l40: Poetry Sounds — Onomatopoeia, assonance, consonance ───────────────
export const C2_L40: LessonContent = {
  vocab: [
    {
      english: 'Onomatopoeia',
      french: 'Onomatopée',
      phonetic: '/ˌɒnəˌmætəˈpiːə/',
      example: 'Tennyson\'s onomatopoeia in "The moan of doves in immemorial elms" makes the sound of the word "moan" itself do the mourning.',
      exampleTranslation: 'L\'onomatopée de Tennyson dans "The moan of doves in immemorial elms" fait que le son même du mot "moan" accomplit le deuil.',
    },
    {
      english: 'Assonance',
      french: 'Assonance',
      phonetic: '/ˈæsənəns/',
      example: 'The assonance of the long "o" in "slow, low, moan" creates a sombre acoustic field that envelopes the entire stanza in melancholy.',
      exampleTranslation: 'L\'assonance du "o" long dans "slow, low, moan" crée un champ acoustique sombre qui enveloppe la strophe entière de mélancolie.',
    },
    {
      english: 'Consonance',
      french: 'Consonance',
      phonetic: '/ˈkɒnsənəns/',
      example: 'The consonance of the hard "k" sounds throughout Hughes\'s "Thrushes" — "keen, quick, strike" — mimics the sudden predatory precision of the bird.',
      exampleTranslation: 'La consonance des sons durs "k" dans "Thrushes" de Hughes — "keen, quick, strike" — imite la précision prédatrice soudaine de l\'oiseau.',
    },
    {
      english: 'Phonaestheme',
      french: 'Phonaesthème',
      phonetic: '/ˈfoʊnɪsˌθiːm/',
      example: 'The English phonaestheme "gl-" — glow, gleam, glimmer, glint — clusters words whose shared initial consonant cluster evokes the visual field of light.',
      exampleTranslation: 'Le phonaesthème anglais "gl-" — glow, gleam, glimmer, glint — regroupe des mots dont le groupe consonantique initial partagé évoque le champ visuel de la lumière.',
    },
    {
      english: 'Cacophony',
      french: 'Cacophonie',
      phonetic: '/kəˈkɒfəni/',
      example: 'The cacophony of Spenser\'s "raging rout" — the guttural "r" and plosive "g" — creates an acoustic violence that mirrors the scene of martial chaos.',
      exampleTranslation: 'La cacophonie du "raging rout" de Spenser — le "r" guttural et le "g" occlusif — crée une violence acoustique qui reflète la scène de chaos martial.',
    },
  ],
  grammar: {
    title: 'Les ressources phonostylistiques du vers : onomatopée, assonance et consonance comme grammaire du son',
    explanation: `En poésie anglaise, les effets sonores ne sont pas de simples ornementations acoustiques — ils fonctionnent comme une grammaire du sens. L'onomatopée (onomatopoeia) fait coïncider le signifiant et le signifié : le mot "hiss" siffle, "crash" s'écrase, "murmur" murmure. Au-delà de l'onomatopée lexicale, il existe une onomatopée syntaxique où la structure grammaticale elle-même imite le sens : "Crash! The wall fell" (phrase brève et brisée) vs "Gently, imperceptibly, the wall crumbled into dust" (phrase longue et disloquée). L'assonance (répétition de voyelles) et la consonance (répétition de consonnes) créent des réseaux phoniques qui tissent des liens sémantiques souterrains entre les mots. L'assonance en "ee" — "seek, deep, grief" — peut suggérer la douleur perçante ; la consonance en "l" liquide — "lull, flow, slow" — peut évoquer la fluidité. Les phonaesthèmes (phonaesthemes) sont des séquences phoniques récurrentes associées à un champ sémantique : "sn-" (sniff, snort, sneer) évoque le mépris nasal ; "fl-" (flash, flame, flare, flutter) évoque le mouvement rapide et lumineux. La cacophonie (dissonance intentionnelle) emploie des clusters consonantiques durs pour produire un effet de brutalité acoustique. Au niveau C2, l'analyse doit montrer comment ces effets phoniques construisent du sens en interaction avec le mètre, la syntaxe et l'imagerie.`,
    examples: [
      { sentence: 'The assonance of the long "i" in "night, white, skies" creates a luminous acoustic register that unifies the stanza\'s visual imagery.', translation: 'L\'assonance du "i" long dans "night, white, skies" crée un registre acoustique lumineux qui unifie l\'imagerie visuelle de la strophe.', isCorrect: true },
      { sentence: 'The words sound nice together.', translation: '', isCorrect: false },
      { sentence: 'The phonaestheme "gl-" in "glow, glimmer, gleam" does not merely repeat a sound — it constructs an associative field in which light becomes the implicit semantic axis.', translation: 'Le phonaesthème "gl-" dans "glow, glimmer, gleam" ne répète pas simplement un son — il construit un champ associatif dans lequel la lumière devient l\'axe sémantique implicite.', isCorrect: true },
      { sentence: 'The cacophony of plosive clusters in "crack, break, black" enacts through sonic violence the destruction the poem describes.', translation: 'La cacophonie des clusters occlusifs dans "crack, break, black" accomplit par la violence sonique la destruction que le poème décrit.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The words sound nice together.', correct: 'The assonance of the long "o" vowels creates a sombre acoustic field that unifies the stanza\'s emotional register.', explanation: '"Sound nice" est une appréciation sans valeur analytique. Au niveau C2, on doit identifier le procédé (assonance, consonance, onomatopée), spécifier le son concerné (quel voyelle, quelle consonne), et analyser sa fonction sémantique — quel champ associatif, quel effet émotionnel ou mimétique.' },
      { wrong: 'The poem uses onomatopoeia to make the words sound like what they mean.', correct: 'The onomatopoeia extends beyond individual lexical items to the syntactic level — the fragmented, staccato construction of the line itself enacts the percussive violence of the scene.', explanation: 'La première version ne dit rien de plus que la définition du dictionnaire. L\'analyse C2 doit aller au-delà de la définition pour montrer comment l\'onomatopée opère au niveau syntaxique et structurel, non seulement lexical.' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'I\'ve always been fascinated by how Tennyson\'s onomatopoeia works — "The murmuring of innumerable bees" doesn\'t just describe the sound; the labial "m" and the sibilant "s" physically imitate it.', translation: 'J\'ai toujours été fascinée par le fonctionnement de l\'onomatopée de Tennyson — "The murmuring of innumerable bees" ne décrit pas simplement le son ; le "m" labial et le "s" sifflé l\'imitent physiquement.', },
    { speaker: 'Étienne', role: 'B', text: 'But notice how the assonance of the "ee" in "bees" and "innumerable" stretches the vowel, elongating the hum — the sound literally persists, as bees do.', translation: 'Mais remarquez comment l\'assonance du "ee" dans "bees" et "innumerable" étire la voyelle, allongeant le bourdonnement — le son persiste littéralement, comme le font les abeilles.', },
    { speaker: 'Fatou', role: 'A', text: 'And the opposite — cacophony. Hughes\'s "Thrushes" uses consonance of hard "k" sounds: "keen, quick, strike". The acoustic violence mirrors the predatory precision.', translation: 'Et l\'inverse — la cacophonie. "Thrushes" de Hughes utilise la consonance de sons durs "k" : "keen, quick, strike". La violence acoustique reflète la précision prédatrice.', },
    { speaker: 'Étienne', role: 'B', text: 'What\'s striking is that the consonance operates below the level of conscious perception — the reader feels the harshness before naming it. Sound precedes sense.', translation: 'Ce qui est frappant, c\'est que la consonance opère en dessous du niveau de perception consciente — le lecteur ressent la rudesse avant de la nommer. Le son précède le sens.', },
    { speaker: 'Fatou', role: 'A', text: 'Which brings us to phonaesthemes — those uncanny sound-meaning clusters like "gl-" for light or "sn-" for nasal contempt. They\'re not quite onomatopoeia and not quite arbitrariness.', translation: 'Ce qui nous amène aux phonaesthèmes — ces clusters son-sens étranges comme "gl-" pour la lumière ou "sn-" pour le mépris nasal. Ils ne sont pas tout à fait de l\'onomatopée ni tout à fait de l\'arbitraire.', },
    { speaker: 'Étienne', role: 'B', text: 'Precisely — they occupy an intermediate zone, suggesting that the sound-meaning relationship in language is not purely conventional but partly motivated, at least in poetic contexts.', translation: 'Précisément — ils occupent une zone intermédiaire, suggérant que la relation son-sens dans le langage n\'est pas purement conventionnelle mais partiellement motivée, du moins dans les contextes poétiques.', },
    { speaker: 'Fatou', role: 'A', text: 'And if that\'s the case, then the poet who masters assonance, consonance, and phonaestheme is not merely decorating language — they\'re tapping into the pre-rational acoustic substrate of meaning itself.', translation: 'Et si c\'est le cas, alors le poète qui maîtrise assonance, consonance et phonaesthème ne fait pas que décorer le langage — il puise dans le substrat acoustique pré-rationnel du sens lui-même.', },
  ],
  conversationTitle: 'Musicalité et sonorité poétiques',
  pronunciation: [
    {
      word: 'Onomatopoeia',
      phonetic: '/ˌɒnəˌmætəˈpiːə/',
      meaning: 'Onomatopée',
      tip: 'Accent principal sur "PEE" : "on-oh-mat-oh-PEE-ah". Les premières syllabes se réduisent rapidement. Le "oe" final = "ee-ah" en deux syllabes. Ne dites pas "on-oh-ma-to-POY-ah".',
    },
    {
      word: 'Assonance',
      phonetic: '/ˈæsənəns/',
      meaning: 'Assonance',
      tip: 'Accent sur "AS" : "AS-eh-nans". Le "a" initial est très ouvert comme dans "cat". Le milieu se réduit. Le "-ance" final est doux. Ne dites pas "a-zo-NANS".',
    },
    {
      word: 'Cacophony',
      phonetic: '/kəˈkɒfəni/',
      meaning: 'Cacophonie',
      tip: 'Accent sur "KOF" : "keh-KOF-eh-ni". Le premier "c" = "k". Le "a" accentué est ouvert comme dans "hot". Le "ph" = "f". Le "y" final = "i" bref.',
    },
    {
      word: 'Phonaestheme',
      phonetic: '/ˈfoʊnɪsˌθiːm/',
      meaning: 'Phonaesthème',
      tip: 'Accent sur "FO" : "FO-nis-theem". Le "ph" = "f". Le "ae" = "i" bref. Le "th" = "th" soufflé comme dans "think", pas "dh" sonore comme dans "this". Le "-eme" final = "eem".',
    },
  ],
}
