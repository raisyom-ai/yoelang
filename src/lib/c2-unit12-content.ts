import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C2 MASTERY — UNIT 12: ART CRITICISM (c2-l56 through c2-l60)
// YOELANG English Learning App for Francophone Users
// Near-native mastery: aesthetics, curating, provenance, critical writing, evocative language
// ════════════════════════════════════════════════════════════════════════════════

// ─── c2-l56: Criticism Vocabulary — Aesthetics, curating, provenance ────────────
export const C2_L56: LessonContent = {
  vocab: [
    {
      english: 'Provenance',
      french: 'Provenance',
      phonetic: '/ˈprɒvɪnəns/',
      example: 'The painting\'s provenance was traced back to a private collection in 18th-century Florence, corroborating its attribution to Bronzino.',
      exampleTranslation: 'La provenance du tableau a été retracée jusqu\'à une collection privée dans la Florence du XVIIIe siècle, corroborant son attribution au Bronzino.',
    },
    {
      english: 'Connoisseurship',
      french: 'Connoisseurship (expertise artistique)',
      phonetic: '/ˌkɒnəˈsɜːrʃɪp/',
      example: 'Berenson\'s connoisseurship revolutionised the attribution of Italian Renaissance paintings, though his methods have since been challenged.',
      exampleTranslation: 'Le connoisseurship de Berenson a révolutionné l\'attribution des peintures de la Renaissance italienne, bien que ses méthodes aient depuis été contestées.',
    },
    {
      english: 'Aesthetic',
      french: 'Esthétique',
      phonetic: '/iːsˈθɛtɪk/',
      example: 'The curatorial aesthetic guiding this exhibition privileges spatial contemplation over didactic labelling.',
      exampleTranslation: 'L\'esthétique curatoriale qui guide cette exposition privilégie la contemplation spatiale au détriment de l\'étiquetage didactique.',
    },
    {
      english: 'Curating',
      french: 'Commissariat d\'exposition',
      phonetic: '/kjʊˈreɪtɪŋ/',
      example: 'Curating a retrospective demands not merely sequencing works chronologically but constructing a visual argument.',
      exampleTranslation: 'Organiser une rétrospective exige non seulement de séquencer les œuvres chronologiquement, mais de construire un argument visuel.',
    },
    {
      english: 'Attribution',
      french: 'Attribution',
      phonetic: '/ˌætrɪˈbjuːʃən/',
      example: 'The reattribution of this panel from Rembrandt to his workshop has halved its auction estimate overnight.',
      exampleTranslation: 'La réattribution de ce panneau de Rembrandt à son atelier a réduit de moitié son estimation aux enchères du jour au lendemain.',
    },
  ],
  grammar: {
    title: 'Les constructions nominales étendues dans le discours critique',
    explanation: `À un niveau C2, le discours de critique d'art repose largement sur des constructions nominales étendues (extended noun phrases) qui condensent des informations complexes en un seul syntagme nominal. Plutôt que d'utiliser des relatives lourdes, le critique d'art emploie des pré-modificateurs et post-modificateurs sophistiqués : pré-modification adjectivale en cascade ("the luminous, tentatively rendered landscape"), noms modificateurs ("the gallery director", "a pigment analysis"), et post-modification par propositions relatives réduites, prépositionnelles ou participiales ("the portrait attributed to Titian", "the sculpture on loan from the Uffizi", "the recently restored altarpiece"). Ces constructions permettent une densité informationnelle qui est la marque du discours critique anglais. Attention : l'ordre des adjectifs en anglais est fixe (évaluation → taille → âge → couleur → origine → matière → but) — "a remarkable small 17th-century Dutch landscape" est correct, mais "a Dutch 17th-century small remarkable landscape" ne l'est pas. Les francophones ont tendance à placer l'adjectif après le nom ou à enfreindre l'ordre canonique des adjectifs pré-nominaux.`,
    examples: [
      { sentence: 'The recently authenticated, luminously rendered Baroque altarpiece has reignited debates about Caravaggio\'s late palette.', translation: 'Le retable baroque récemment authentifié et lumineusement exécuté a ravivé les débats sur la palette tardive du Caravage.', isCorrect: true },
      { sentence: 'The altarpiece Baroque luminously rendered recently authenticated has reignited debates about Caravaggio\'s late palette.', translation: '', isCorrect: false },
      { sentence: 'Her curatorial practice privileges underrepresented postcolonial voices — a methodological stance that has reshaped the institution\'s acquisition policy.', translation: 'Sa pratique curatoriale privilégie les voix postcoloniales sous-représentées — une position méthodologique qui a refaçonné la politique d\'acquisition de l\'institution.', isCorrect: true },
      { sentence: 'The provenance research conducted by the museum\'s archives department uncovered a gap in the ownership record between 1938 and 1952.', translation: 'La recherche de provenance menée par le service des archives du musée a révélé une lacune dans l\'historique de propriété entre 1938 et 1952.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The altarpiece Baroque luminously rendered recently authenticated has reignited debates.', correct: 'The recently authenticated, luminously rendered Baroque altarpiece has reignited debates.', explanation: 'En anglais, les adjectifs et participes précèdent le nom, dans un ordre fixe : temps/évaluation → qualité → âge/époque → origine/style → nom. Un ordre inversé ou post-posé est incorrect et crée une confusion syntaxique.' },
      { wrong: 'The painting of provenance disputed was withdrawn from sale.', correct: 'The painting with disputed provenance was withdrawn from sale.', explanation: 'La post-modification par "of" est rare en anglais pour exprimer la qualification. On utilise "with" (with disputed provenance), ou un participe pré-posé (the disputed-provenance painting), ou une relative réduite (the painting whose provenance was disputed).' },
    ],
  },
  conversation: [
    { speaker: 'Camille', role: 'A', text: 'I spent the morning reviewing the provenance files for the Rothko — the chain of ownership is, frankly, unimpeachable up to 1968, after which things become murkier.', translation: 'J\'ai passé la matinée à examiner les dossiers de provenance du Rothko — la chaîne de propriété est, franchement, irréprochable jusqu\'en 1968, après quoi les choses deviennent plus troubles.', },
    { speaker: 'Ravi', role: 'B', text: 'That gap after \'68 is precisely what concerns me. Without airtight provenance, the attribution — however persuasive on stylistic grounds — remains provisional.', translation: 'Cette lacune après 68 est précisément ce qui m\'inquiète. Sans provenance irréprochable, l\'attribution — si convaincante soit-elle sur le plan stylistique — reste provisoire.', },
    { speaker: 'Camille', role: 'A', text: 'Be that as it may, connoisseurship still has its place. The brushwork, the chromatic layering — these are not things a forger replicates easily.', translation: 'Ceci étant, le connoisseurship a encore sa place. Le coup de pinceau, la superposition chromatique — ce ne sont pas des choses qu\'un faussaire reproduit facilement.', },
    { speaker: 'Ravi', role: 'B', text: 'True, though scientific analysis has overturned many a confident connoisseur\'s verdict. Remember the "Leonardo" that turned out to be a 19th-century pastiche?', translation: 'Vrai, bien que l\'analyse scientifique ait renversé bien des verdicts confiants de connaisseurs. Vous vous souvenez du "Léonard" qui s\'est avéré être un pastiche du XIXe siècle ?', },
    { speaker: 'Camille', role: 'A', text: 'All too well. Which is precisely why curating such a show demands a rigorous dialectic between aesthetic judgement and empirical evidence — neither suffices alone.', translation: 'Trop bien. C\'est précisément pourquoi le commissariat d\'une telle exposition exige une dialectique rigoureuse entre le jugement esthétique et la preuve empirique — aucun ne suffit à lui seul.', },
    { speaker: 'Ravi', role: 'B', text: 'Agreed. And that dialectic must be legible to the visitor — the wall texts should narrate the attribution debate, not merely assert a name and a date.', translation: 'Convenu. Et cette dialectique doit être lisible pour le visiteur — les cartels devraient narrer le débat d\'attribution, non pas simplement affirmer un nom et une date.', },
    { speaker: 'Camille', role: 'A', text: 'Exactly. Transparency about uncertainty is not a weakness in curatorial practice — it\'s an intellectual honesty that deepens the viewer\'s engagement with the work.', translation: 'Exactement. La transparence sur l\'incertitude n\'est pas une faiblesse dans la pratique curatoriale — c\'est une honnêteté intellectuelle qui approfondit l\'engagement du spectateur avec l\'œuvre.', },
  ],
  conversationTitle: 'Provenance et attribution',
  pronunciation: [
    {
      word: 'Provenance',
      phonetic: '/ˈprɒvɪnəns/',
      meaning: 'Provenance',
      tip: 'Accent sur la première syllabe : "PROV-i-nens". Le "o" est ouvert comme dans "hot". Ne dites pas "pro-vee-NANS" à la française. Le "e" final est un schwa très réduit.',
    },
    {
      word: 'Connoisseurship',
      phonetic: '/ˌkɒnəˈsɜːrʃɪp/',
      meaning: 'Connoisseurship (expertise)',
      tip: 'Accent sur "SUR" : "kon-eh-SUR-ship". Le "oi" français originel se prononce "eh" en anglais. Le "ship" final se dit comme dans "friendship".',
    },
    {
      word: 'Aesthetic',
      phonetic: '/iːsˈθɛtɪk/',
      meaning: 'Esthétique',
      tip: 'Accent sur "THET" : "ees-THET-ik". Le "ae" initial = "ee" long. Le "th" est expiré (langue entre les dents). Ne dites pas "es-te-TIK" à la française.',
    },
    {
      word: 'Attribution',
      phonetic: '/ˌætrɪˈbjuːʃən/',
      meaning: 'Attribution',
      tip: 'Accent sur "BU" : "at-tri-BYOO-shun". Le "a" initial est ouvert comme dans "cat". Le "u" accentué = "iou" comme dans "museum". Le suffixe "-tion" = "shun".',
    },
  ],
}

// ─── c2-l57: Aesthetic Language — Metaphorical language, evaluative adjectives ──
export const C2_L57: LessonContent = {
  vocab: [
    {
      english: 'Luminous',
      french: 'Lumineux',
      phonetic: '/ˈluːmɪnəs/',
      example: 'The luminous quality of Vermeer\'s interiors derives not from the quantity of light depicted but from its precise optical calibration.',
      exampleTranslation: 'La qualité lumineuse des intérieurs de Vermeer provient non de la quantité de lumière représentée mais de sa calibration optique précise.',
    },
    {
      english: 'Tenebrism',
      french: 'Ténébrisme',
      phonetic: '/ˈtɛnəbrɪzəm/',
      example: 'Caravaggio\'s tenebrism does not merely contrast light and dark — it dramatises revelation itself, as though truth were wrested from obscurity.',
      exampleTranslation: 'Le ténébrisme du Caravage ne se contente pas de contraster le clair et l\'obscur — il dramatise la révélation elle-même, comme si la vérité était arrachée à l\'obscurité.',
    },
    {
      english: 'Incandescent',
      french: 'Incandescent',
      phonetic: '/ˌɪnkænˈdɛsənt/',
      example: 'The incandescent surface of the late Turners dissolves form into pure chromatic sensation, prefiguring abstraction by half a century.',
      exampleTranslation: 'La surface incandescente des Turner tardifs dissout la forme en pure sensation chromatique, préfigurant l\'abstraction d\'un demi-siècle.',
    },
    {
      english: 'Evocative',
      french: 'Évocateur',
      phonetic: '/ɪˈvɒkətɪv/',
      example: 'The evocative austerity of Morandi\'s still lifes conjures an entire metaphysics from the arrangement of bottles and boxes.',
      exampleTranslation: 'L\'austérité évocatrice des natures mortes de Morandi convoque une métaphysique entière à partir de l\'arrangement de bouteilles et de boîtes.',
    },
    {
      english: 'Chiaroscuro',
      french: 'Clair-obscur',
      phonetic: '/kiˌɑːrəˈskjʊəroʊ/',
      example: 'The chiaroscuro in Rembrandt\'s late self-portraits renders the act of seeing itself as the true subject — the gaze turned inward.',
      exampleTranslation: 'Le clair-obscur des autoportraits tardifs de Rembrandt fait de l\'acte de voir lui-même le véritable sujet — le regard tourné vers l\'intérieur.',
    },
  ],
  grammar: {
    title: 'Le langage métaphorique et les adjectifs évaluatifs dans la critique d\'art',
    explanation: `La critique d'art en anglais repose sur deux ressources linguistiques majeures : le langage métaphorique et les adjectifs évaluatifs. Les métaphores conceptuelles structurent le discours critique : la peinture est conçue comme un LANGAGE ("the canvas speaks", "the visual grammar", "the painting articulates"), l'œuvre est un CORPS ("the composition breathes", "the brushwork is muscular", "the surface is visceral"), et la lumière est une FORCE ("light pierces", "shadows encroach", "colour radiates"). Ces métaphores ne sont pas de simples ornements — elles véhiculent des jugements esthétiques que le langage littéral ne peut pas saisir. Les adjectifs évaluatifs (evaluative adjectives) sont le second pilier : "luminous", "incandescent", "austere", "sumptuous", "tentative", "assured", "hermetic", "pellucid". Ces adjectifs sont gradables et se combinent avec des intensifieurs spécifiques au registre critique : "remarkably assured", "startlingly luminous", "quietly devastating", "deceptively simple". Attention : les francophones tendent à sous-exploiter les métaphores et à utiliser des adjectifs génériques ("beautiful", "interesting", "good") là où un critique anglophone emploierait un adjectif évaluatif précis. À niveau C2, chaque adjectif doit être choisi pour sa capacité à saisir une qualité esthétique spécifique — dire d'une œuvre qu'elle est "interesting" est presque un aveu d'impuissance critique.`,
    examples: [
      { sentence: 'The painting breathes with a startlingly luminous stillness — as though time itself had been suspended within the picture plane.', translation: 'Le tableau respire d\'une immobilité stupéfiante et lumineuse — comme si le temps lui-même avait été suspendu dans le plan pictural.', isCorrect: true },
      { sentence: 'The painting is very interesting and beautiful to look at.', translation: '', isCorrect: false },
      { sentence: 'Her brushwork is quietly devastating — each mark deliberated yet seemingly effortless, concealing the labour behind the grace.', translation: 'Son coup de pinceau est discrètement dévastateur — chaque marque est réfléchie et pourtant semble sans effort, dissimulant le labeur derrière la grâce.', isCorrect: true },
      { sentence: 'The tenebrism does not merely dramatise the scene — it enacts a metaphysics of visibility, where darkness is not absence but an active, encroaching force.', translation: 'Le ténébrisme ne fait pas que dramatiser la scène — il met en acte une métaphysique de la visibilité, où l\'obscurité n\'est pas une absence mais une force active et envahissante.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The painting is very interesting and beautiful to look at.', correct: 'The painting possesses a quietly luminous beauty — restrained yet deeply affecting.', explanation: 'Les adjectifs génériques ("interesting", "beautiful") sont insuffisants en critique d\'art. Ils ne renseignent pas sur la qualité esthétique spécifique de l\'œuvre. Un critique C2 nomme la qualité particulière — "luminous", "austere", "sumptuous" — et l\'accompagne d\'un intensifieur précis.' },
      { wrong: 'The chiaroscuro makes the painting dark and light at the same time.', correct: 'The chiaroscuro enacts a dialectic of revelation and concealment — light wrests form from an encroaching darkness.', explanation: 'Décrire le clair-obscur comme "dark and light" est une tautologie vide. Le langage critique doit rendre compte de la fonction esthétique du procédé, non de sa définition littérale. La métaphore conceptuelle (révélation vs dissimulation) saisit ce que la description littérale ne peut pas.' },
    ],
  },
  conversation: [
    { speaker: 'Léontine', role: 'A', text: 'I find the late Turners genuinely incandescent — the surface dissolves, and you\'re left with pure chromatic sensation before representation reasserts itself.', translation: 'Je trouve les Turner tardifs véritablement incandescents — la surface se dissout, et l\'on se retrouve avec une pure sensation chromatique avant que la représentation ne se réaffirme.', },
    { speaker: 'Dominic', role: 'B', text: 'I know what you mean, though I\'d venture that the dissolution is itself a form of representation — the representation of perception as process, not product.', translation: 'Je comprends ce que vous voulez dire, bien que j\'oserais dire que la dissolution est elle-même une forme de représentation — la représentation de la perception comme processus, non comme produit.', },
    { speaker: 'Léontine', role: 'A', text: 'That\'s elegantly put. And it\'s precisely what makes his chiaroscuro so uncanny — it\'s not the dramatic staging of Caravaggio\'s tenebrism but something quieter, more dissolve than strike.', translation: 'C\'est formulé avec élégance. Et c\'est précisément ce qui rend son clair-obscur si troublant — ce n\'est pas la mise en scène dramatique du ténébrisme du Caravage mais quelque chose de plus discret, plus dissolution que coup.', },
    { speaker: 'Dominic', role: 'B', text: 'Whereas Caravaggio\'s shadows encroach — they\'re aggressive, almost predatory. His light doesn\'t illuminate; it interrogates.', translation: 'Tandis que les ombres du Caravage envahissent — elles sont agressives, presque prédatrices. Sa lumière n\'éclaire pas ; elle interroge.', },
    { speaker: 'Léontine', role: 'A', text: 'What a marvellous way to put it. The light interrogates — yes. And the figures are caught in that interrogation, pinned like specimens.', translation: 'Quelle façon merveilleuse de le dire. La lumière interroge — oui. Et les personnages sont pris dans cette interrogation, épinglés comme des spécimens.', },
    { speaker: 'Dominic', role: 'B', text: 'Whereas Morandi\'s evocative austerity does the opposite — it withdraws drama, parcels out significance with reticence. The bottles commune in silence.', translation: 'Tandis que l\'austérité évocatrice de Morandi fait l\'inverse — elle retire le drame, distribue la signification avec réticence. Les bouteilles communient dans le silence.', },
    { speaker: 'Léontine', role: 'A', text: 'And that, perhaps, is the highest form of aesthetic achievement — when the work articulates more in silence than it ever could in declaration.', translation: 'Et c\'est peut-être là la plus haute forme d\'accomplissement esthétique — quand l\'œuvre articule plus dans le silence qu\'elle ne pourrait jamais le faire dans la déclaration.', },
  ],
  conversationTitle: 'Lumière, ombre et silence',
  pronunciation: [
    {
      word: 'Luminous',
      phonetic: '/ˈluːmɪnəs/',
      meaning: 'Lumineux',
      tip: 'Accent sur "LU" : "LOO-mi-nes". Le "u" est long comme dans "lune". Le "ous" final se réduit en schwa. Ne dites pas "lu-mee-NOOS".',
    },
    {
      word: 'Tenebrism',
      phonetic: '/ˈtɛnəbrɪzəm/',
      meaning: 'Ténébrisme',
      tip: 'Accent sur "TEN" : "TEN-eh-bri-zem". Le premier "e" est bref et ouvert. Le "ism" final = "iz-em". Ne dites pas "te-neh-BRIZ-em".',
    },
    {
      word: 'Incandescent',
      phonetic: '/ˌɪnkænˈdɛsənt/',
      meaning: 'Incandescent',
      tip: 'Accent principal sur "DES" : "in-kan-DES-ent". Le "a" intermédiaire est ouvert comme dans "cat". Le suffixe "-escent" se prononce "es-ent" avec un schwa.',
    },
    {
      word: 'Chiaroscuro',
      phonetic: '/kiˌɑːrəˈskjʊəroʊ/',
      meaning: 'Clair-obscur',
      tip: 'Mot italien naturalisé : "kee-ah-ro-SKOU-ro". Accent sur l\'antépénultième syllabe "SKOU". Le "ch" = "k", le "sc" = "sk". Le "uo" final = "ou-ro". Ne prononcez pas "chi" comme dans "child".',
    },
  ],
}

// ─── c2-l58: Gallery Discussion — Art critique and gallery dialogue ─────────────
export const C2_L58: LessonContent = {
  vocab: [
    {
      english: 'Retrospective',
      french: 'Rétrospective',
      phonetic: '/ˌrɛtrəˈspɛktɪv/',
      example: 'The retrospective reframes the artist\'s early figurative work as a continuous dialogue with abstraction rather than a preliminary phase to be outgrown.',
      exampleTranslation: 'La rétrospective recadre les premières œuvres figuratives de l\'artiste comme un dialogue continu avec l\'abstraction plutôt qu\'une phase préliminaire à dépasser.',
    },
    {
      english: 'Seminal',
      french: 'Fondateur / Séminale',
      phonetic: '/ˈsɛmɪnəl/',
      example: 'Greenberg\'s seminal essay on modernist painting established the teleological framework that dominated American criticism for three decades.',
      exampleTranslation: 'L\'essai fondateur de Greenberg sur la peinture moderniste a établi le cadre téléologique qui a dominé la critique américaine pendant trois décennies.',
    },
    {
      english: 'Pastiche',
      french: 'Pastiche',
      phonetic: '/pæˈstiːʃ/',
      example: 'The installation reads less as homage than as pastiche — a skilful mimicry that lacks the original\'s animating tension.',
      exampleTranslation: 'L\'installation se lit moins comme un hommage que comme un pastiche — une imitation habile qui manque de la tension animatrice de l\'original.',
    },
    {
      english: 'Juxtaposition',
      french: 'Juxtaposition',
      phonetic: '/ˌdʒʌkstəpəˈzɪʃən/',
      example: 'The curatorial juxtaposition of Hockney and Hodgkin — one descriptive, the other affective — creates a dialogue about the very nature of painterly representation.',
      exampleTranslation: 'La juxtaposition curatoriale de Hockney et Hodgkin — l\'un descriptif, l\'autre affectif — crée un dialogue sur la nature même de la représentation picturale.',
    },
    {
      english: 'Pentimento',
      french: 'Pentimento (repentir)',
      phonetic: '/ˌpɛntɪˈmɛntoʊ/',
      example: 'The infrared reflectography reveals a pentimento beneath the final composition — the Virgin\'s hand was originally raised, not lowered.',
      exampleTranslation: 'La réflectographie infrarouge révèle un pentimento sous la composition finale — la main de la Vierge était à l\'origine levée, non baissée.',
    },
  ],
  grammar: {
    title: 'Le discours de galerie : hedging, atténuation et positionnement critique',
    explanation: `Le dialogue de galerie en anglais exige une maîtrise particulière du hedging (atténuation) et du positionnement critique. Le critique d'art ne se contente pas d'affirmer — il situe son jugement avec précision épistémique. Les structures d'atténuation sont omniprésentes : "arguably", "one might contend", "it could be maintained that", "there is a case to be made for". Le positionnement critique utilise des verbes de cognition au conditionnel ou à la forme progressive : "I would suggest", "I\'d venture that", "I find myself wondering whether". Ces formes ne sont pas des signes d'hésitation mais de sophistication — elles signalent que le locuteur est conscient des interprétations concurrentes. En outre, le discours de galerie emploie des constructions concessives complexes pour articuler les nuances : "While admittedly..., it remains the case that...", "For all its..., the work ultimately...", "That said, one cannot overlook...". Les francophones ont souvent tendance à être trop directs ou trop tranchants dans leurs jugements esthétiques, là où le discours critique anglais privilégie la nuance et la modulation. Autre particularité : l'utilisation du présent de narration ("the painting depicts", "the canvas radiates") et du présent historique pour décrire des œuvres, même anciennes — ce temps ancre l'œuvre dans une actualité perpétuelle.`,
    examples: [
      { sentence: 'One might contend that the juxtaposition, while initially jarring, ultimately foregrounds the very questions about representation that both artists grapple with.', translation: 'On pourrait soutenir que la juxtaposition, bien que d\'abord déroutante, met finalement au premier plan les questions mêmes sur la représentation auxquelles les deux artistes se confrontent.', isCorrect: true },
      { sentence: 'This work is definitely the best in the show and everyone should agree.', translation: '', isCorrect: false },
      { sentence: 'For all its undeniable technical virtuosity, the painting remains emotionally inert — a masterclass in craft bereft of affect.', translation: 'Malgré son incontestable virtuosité technique, le tableau reste émotionnellement inerte — une leçon de maître en artisanat dépourvue d\'affect.', isCorrect: true },
      { sentence: 'I\'d venture that the pentimento is not merely a correction but a deliberate trace — the artist choosing to let process show through product.', translation: 'J\'oserais dire que le pentimento n\'est pas simplement une correction mais une trace délibérée — l\'artiste choisissant de laisser le processus transparaître à travers le produit.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'This work is definitely the best in the show and everyone should agree.', correct: 'I would argue that this is arguably the most accomplished work in the show, though reasonable viewers may differ.', explanation: 'Une affirmation catégorique sans atténuation est inappropriée dans le discours critique de galerie. Le hedging n\'est pas de la faiblesse mais de la rigueur intellectuelle — il reconnaît la subjectivité inhérente au jugement esthétique.' },
      { wrong: 'The retrospective shows that the artist was a genius.', correct: 'The retrospective makes a compelling case for reappraising the artist\'s contribution, suggesting that the early work merits reconsideration beyond the familiar narrative.', explanation: '"Was a genius" est une affirmation non argumentée et non nuancée. Le discours critique exige que le jugement soit motivé et modulé — on avance une thèse ("makes a compelling case"), on identifie ce qui est en jeu ("reappraising", "reconsideration"), et on situe le jugement par rapport aux narratives existantes.' },
    ],
  },
  conversation: [
    { speaker: 'Aïda', role: 'A', text: 'I found the retrospective genuinely revelatory — the early figurative works aren\'t merely precursors to the abstraction; they\'re in continuous dialogue with it.', translation: 'J\'ai trouvé la rétrospective véritablement révélatrice — les premières œuvres figuratives ne sont pas de simples précurseurs de l\'abstraction ; elles sont en dialogue continu avec elle.', },
    { speaker: 'Tobias', role: 'B', text: 'I\'d venture that the curatorial decision to interleave the periods rather than hang them chronologically was itself an argument — form over chronology as hermeneutic principle.', translation: 'J\'oserais dire que la décision curatoriale d\'entrelacer les périodes plutôt que de les accrocher chronologiquement était elle-même un argument — la forme plutôt que la chronologie comme principe herméneutique.', },
    { speaker: 'Aïda', role: 'A', text: 'Precisely. Though one might contend that the juxtaposition of the 1952 canvas with the 1988 diptyc was, if anything, too clever — the visual rhyme was almost pedantic.', translation: 'Précisément. Bien qu\'on puisse soutenir que la juxtaposition de la toile de 1952 avec le diptyque de 1988 était, si tant est qu\'on puisse dire, trop intelligente — la rime visuelle était presque pédante.', },
    { speaker: 'Tobias', role: 'B', text: 'A fair point. That said, the pentimento visible in the \'52 canvas — when set beside the deliberate palimpsest of the \'88 — does illuminate a genuine arc of self-awareness.', translation: 'Un point juste. Cela dit, le pentimento visible dans la toile de 52 — mis en regard du palimpseste délibéré de celle de 88 — éclaire bel et bien un arc authentique de conscience de soi.', },
    { speaker: 'Aïda', role: 'A', text: 'Though for all its intellectual rigour, the show arguably downplays the sheer sensual pleasure of the paint itself — that voluptuous surface the early critics dismissed as pastiche.', translation: 'Bien que, malgré toute sa rigueur intellectuelle, l\'exposition sous-estime sans doute le plaisir sensuel pur de la peinture elle-même — cette surface voluptueuse que les premiers critiques ont rejetée comme pastiche.', },
    { speaker: 'Tobias', role: 'B', text: 'Which is ironic, given that Greenberg\'s seminal essay explicitly foregrounds "opticality" — the visual pleasure of the surface as the very condition of modernist painting.', translation: 'Ce qui est ironique, étant donné que l\'essai fondateur de Greenberg met explicitement au premier plan l\'"opticalité" — le plaisir visuel de la surface comme condition même de la peinture moderniste.', },
    { speaker: 'Aïda', role: 'A', text: 'Indeed — and it\'s precisely that tension between the somatic and the theoretical that the best criticism must hold together, not resolve.', translation: 'En effet — et c\'est précisément cette tension entre le somatique et le théorique que la meilleure critique doit maintenir ensemble, non résoudre.', },
  ],
  conversationTitle: 'Dans les salles d\'exposition',
  pronunciation: [
    {
      word: 'Retrospective',
      phonetic: '/ˌrɛtrəˈspɛktɪv/',
      meaning: 'Rétrospective',
      tip: 'Accent sur "SPEC" : "ret-roh-SPEC-tiv". Le "e" de "retro" est ouvert. Le "ive" final se réduit. Ne dites pas "reh-tro-spek-TEEV".',
    },
    {
      word: 'Seminal',
      phonetic: '/ˈsɛmɪnəl/',
      meaning: 'Fondateur',
      tip: 'Accent sur "SEM" : "SEM-i-nel". Le "e" est bref comme dans "bed". Le "al" final est un schwa. Attention : ce mot n\'a aucun rapport phonétique avec "seminar".',
    },
    {
      word: 'Pastiche',
      phonetic: '/pæˈstiːʃ/',
      meaning: 'Pastiche',
      tip: 'Accent sur "STEESH" : "pas-TEESH". Le "a" initial est ouvert comme dans "cat". Le "iche" final = "eesh" comme dans "quiche". Ne prononcez pas le "t" final à la française.',
    },
    {
      word: 'Pentimento',
      phonetic: '/ˌpɛntɪˈmɛntoʊ/',
      meaning: 'Pentimento (repentir)',
      tip: 'Mot italien : "pen-ti-MEN-toh". Accent sur l\'antépénultième "MEN". Le "e" accentué est ouvert. Le "o" final est clair. Ne placez pas l\'accent sur la dernière syllabe.',
    },
  ],
}

// ─── c2-l59: Critical Writing — Pronouncing art terminology ─────────────────────
export const C2_L59: LessonContent = {
  vocab: [
    {
      english: 'Ekphrasis',
      french: 'Ecphrase',
      phonetic: '/ˈɛkfrəsɪs/',
      example: 'Keats\'s "Ode on a Grecian Urn" is perhaps the most celebrated example of ekphrasis in English — a poem that takes a visual artefact as its subject and paradoxically renders it more vivid than any actual urn could be.',
      exampleTranslation: 'L\'"Ode sur une urne grecque" de Keats est peut-être l\'exemple le plus célèbre d\'ecphrase en anglais — un poème qui prend un artefact visuel pour sujet et le rend paradoxalement plus vivant qu\'aucune urne réelle ne pourrait l\'être.',
    },
    {
      english: 'Ekphrastic',
      french: 'Ecphrastique',
      phonetic: '/ɛkˈfræstɪk/',
      example: 'The ekphrastic tradition — from Homer\'s shield of Achilles to Ashbery\'s "Self-Portrait in a Convex Mirror" — raises fundamental questions about the relationship between verbal and visual representation.',
      exampleTranslation: 'La tradition ecphrastique — du bouclier d\'Achille chez Homère au "Autoportrait dans un miroir convexe" d\'Ashbery — soulève des questions fondamentales sur la relation entre la représentation verbale et visuelle.',
    },
    {
      english: 'Iconography',
      french: 'Iconographie',
      phonetic: '/ˌaɪkəˈnɒɡrəfi/',
      example: 'Panofsky\'s iconography distinguishes between pre-iconographic description, iconographic analysis, and iconological interpretation — three layers of meaning that the viewer must progressively decode.',
      exampleTranslation: 'L\'iconographie de Panofsky distingue la description pré-iconographique, l\'analyse iconographique et l\'interprétation iconologique — trois couches de signification que le spectateur doit progressivement décoder.',
    },
    {
      english: 'Pictorial',
      french: 'Pictural',
      phonetic: '/pɪkˈtɔːriəl/',
      example: 'The pictorial logic of Cézanne\'s Mont Sainte-Victoire series is not perspectival but structural — each canvas constructs space through chromatic modulation rather than linear recession.',
      exampleTranslation: 'La logique picturale de la série Mont Sainte-Victoire de Cézanne n\'est pas perspectiviste mais structurelle — chaque toile construit l\'espace par modulation chromatique plutôt que par recession linéaire.',
    },
    {
      english: 'Iconology',
      french: 'Iconologie',
      phonetic: '/ˌaɪkəˈnɒlədʒi/',
      example: 'Where iconography catalogues symbols, iconology seeks to uncover the deeper cultural and philosophical assumptions that those symbols embody.',
      exampleTranslation: 'Là où l\'iconographie catalogue les symboles, l\'iconologie cherche à mettre au jour les présupposés culturels et philosophiques plus profonds que ces symboles incarnent.',
    },
  ],
  grammar: {
    title: 'L\'écriture critique : constructions syntaxiques de l\'argumentation esthétique',
    explanation: `L'écriture critique d'art en anglais emploie des constructions syntaxiques spécifiques qui permettent d'articuler une argumentation esthétique nuancée. Parmi les plus importantes : (1) La construction clivée (cleft sentence) : "It is precisely the surface that resists interpretation" ou "What distinguishes this canvas is its refusal of closure". Ces constructions mettent en relief un élément pour lui donner un poids argumentatif particulier. (2) La pseudo-clivée : "What the pentimento reveals is the artist's process of revision itself." (3) L'inversion et la fronting pour l'effet rhétorique : "Central to this reading is the assumption that...", "Nowhere is this more evident than in..." Ces inversions ne sont pas simplement stylistiques — elles orientent l'argumentation en plaçant le focus informatif en position initiale. (4) Les constructions corrélatives : "The more one looks, the more the surface yields" — "not merely... but rather...", "less X than Y". Ces constructions permettent de formuler des relations qualitatives complexes qui sont le cœur de l'argumentation esthétique. Les francophones doivent particulièrement veiller à ne pas calquer les structures françaises (la pseudo-clivée "ce que... c'est" se traduit par "what... is", mais l'anglais permet des clivées plus variées) et à maîtriser l'inversion, rarement employée en français académique mais courante en critique d'art anglaise.`,
    examples: [
      { sentence: 'It is precisely the tension between figuration and abstraction that gives the painting its enduring power — not the resolution of that tension.', translation: 'C\'est précisément la tension entre figuration et abstraction qui donne au tableau sa puissance persistante — non la résolution de cette tension.', isCorrect: true },
      { sentence: 'What the ekphrastic tradition reveals is not the superiority of one medium over another but the irreducible gap between seeing and saying.', translation: 'Ce que la tradition ecphrastique révèle n\'est pas la supériorité d\'un médium sur un autre mais l\'écart irréductible entre voir et dire.', isCorrect: true },
      { sentence: 'It gives the painting its enduring power precisely the tension between figuration and abstraction.', translation: '', isCorrect: false },
      { sentence: 'Nowhere is Panofsky\'s iconological method more compelling than in his analysis of the Arnolfini portrait, where every domestic detail unfolds into cosmological significance.', translation: 'Nulle part la méthode iconologique de Panofsky n\'est plus convaincante que dans son analyse du portrait Arnolfini, où chaque détail domestique se déploie en signification cosmologique.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'It gives the painting its enduring power precisely the tension between figuration and abstraction.', correct: 'It is precisely the tension between figuration and abstraction that gives the painting its enduring power.', explanation: 'La construction clivée (cleft sentence) exige la structure "It is X that/who Y" — le segment mis en relief (X) est placé après "It is" et la clause relative est introduite par "that". Omettre "that" ou inverser l\'ordre détruit la construction.' },
      { wrong: 'The iconography is very interesting because it has many symbols with deep meanings.', correct: 'What makes the iconography compelling is the density of its symbolic layering — each motif accrues meaning through intertextual resonance.', explanation: 'L\'écriture critique ne se contente pas d\'affirmer qu\'un élément est "interesting" — elle démontre pourquoi, en utilisant des constructions syntaxiques (clivée, correlative) qui mettent en relief la qualité spécifique et son mécanisme.' },
    ],
  },
  conversation: [
    { speaker: 'Marguerite', role: 'A', text: 'I\'ve been re-reading Lessing\'s "Laocoön" — his argument that the visual arts occupy space while poetry occupies time feels increasingly reductive in light of ekphrastic poetry.', translation: 'Je relis le "Laocoon" de Lessing — son argument selon lequel les arts visuels occupent l\'espace tandis que la poésie occupe le temps semble de plus en plus réducteur à la lumière de la poésie ecphrastique.', },
    { speaker: 'Emmanuel', role: 'B', text: 'What the ekphrastic tradition reveals is precisely that boundary\'s permeability — Ashbery\'s poem doesn\'t describe Parmigianino\'s portrait so much as enact the experience of being absorbed by it.', translation: 'Ce que la tradition ecphrastique révèle est précisément la perméabilité de cette frontière — le poème d\'Ashbery ne décrit pas le portrait de Parmigianino autant qu\'il met en acte l\'expérience d\'en être absorbé.', },
    { speaker: 'Marguerite', role: 'A', text: 'It is that shift from description to enactment that I find most compelling — the poem doesn\'t merely mirror the painting; it competes with it.', translation: 'C\'est ce passage de la description à la mise en acte que je trouve le plus convaincant — le poème ne fait pas que refléter la peinture ; il rivalise avec elle.', },
    { speaker: 'Emmanuel', role: 'B', text: 'And iconographically, the convex mirror in Parmigianino\'s self-portrait already anticipates that competition — it\'s a painting about the distortions of representation itself.', translation: 'Et iconographiquement, le miroir convexe dans l\'autoportrait de Parmigianino anticipe déjà cette compétition — c\'est une peinture sur les distorsions de la représentation elle-même.', },
    { speaker: 'Marguerite', role: 'A', text: 'Which is precisely where Panofsky\'s iconology proves indispensable — the pictorial detail is never merely decorative; it is always already a philosophical proposition.', translation: 'C\'est précisément là que l\'iconologie de Panofsky se révèle indispensable — le détail pictural n\'est jamais simplement décoratif ; il est toujours déjà une proposition philosophique.', },
    { speaker: 'Emmanuel', role: 'B', text: 'Nowhere is that more evident than in the Arnolfini portrait — the mirror, the dog, the single lit candle: each a pictorial proposition about fidelity, presence, and the theological weight of the domestic.', translation: 'Nulle part cela n\'est plus évident que dans le portrait Arnolfini — le miroir, le chien, la seule bougie allumée : chacun une proposition picturale sur la fidélité, la présence et le poids théologique du domestique.', },
  ],
  conversationTitle: 'Écphrase et iconologie',
  pronunciation: [
    {
      word: 'Ekphrasis',
      phonetic: '/ˈɛkfrəsɪs/',
      meaning: 'Ecphrase',
      tip: 'Accent sur "EK" : "EK-freh-sis". Le "ph" = "f" (consonne simple). Le "a" central est un schwa. Ne dites pas "ek-FRA-sis" — l\'accent est sur la première syllabe, comme dans la plupart des mots grecs naturalisés en anglais.',
    },
    {
      word: 'Iconography',
      phonetic: '/ˌaɪkəˈnɒɡrəfi/',
      meaning: 'Iconographie',
      tip: 'Accent sur "NOG" : "eye-KAH-nog-rah-fi". Le "i" initial = "aï" comme dans "eye". Le "o" accentué est ouvert comme dans "hot". Le "g" est dur. Ne dites pas "i-ko-no-GRA-fi".',
    },
    {
      word: 'Pictorial',
      phonetic: '/pɪkˈtɔːriəl/',
      meaning: 'Pictural',
      tip: 'Accent sur "TOR" : "pik-TOR-ee-el". Le "i" initial est bref comme dans "bit". Le "o" accentué est long et ouvert. Le suffixe "-ial" = "ee-el".',
    },
    {
      word: 'Iconology',
      phonetic: '/ˌaɪkəˈnɒlədʒi/',
      meaning: 'Iconologie',
      tip: 'Accent sur "NOL" : "eye-KAH-nol-o-jee". Le "i" = "aï". Le "o" accentué est ouvert. Le "g" devant "y" = "j" doux. Ne dites pas "i-ko-NO-lo-jee".',
    },
  ],
}

// ─── c2-l60: Criticism Sounds — Evocative language, sensory description ─────────
export const C2_L60: LessonContent = {
  vocab: [
    {
      english: 'Evanescent',
      french: 'Évanescent',
      phonetic: '/ˌɛvəˈnɛsənt/',
      example: 'The evanescent quality of Whistler\'s nocturnes — those vaporous Thames scenes — suspends the image between perception and memory.',
      exampleTranslation: 'La qualité évanescente des nocturnes de Whistler — ces scènes vaporeuses de la Tamise — suspend l\'image entre la perception et le souvenir.',
    },
    {
      english: 'Tactile',
      french: 'Tactile',
      phonetic: '/ˈtæktaɪl/',
      example: 'The tactile impasto of Auerbach\'s portraits compels the viewer\'s gaze to become, as it were, a form of touching — vision metamorphosed into haptic experience.',
      exampleTranslation: 'L\'empâtement tactile des portraits d\'Auerbach contraint le regard du spectateur à devenir, pour ainsi dire, une forme de toucher — la vision métamorphosée en expérience haptique.',
    },
    {
      english: 'Sonorous',
      french: 'Sonore',
      phonetic: '/ˈsɒnərəs/',
      example: 'The sonorous phrasing of Ruskin\'s prose — with its rolling cadences and orchestrated clauses — performs aesthetically the very sublimity it describes.',
      exampleTranslation: 'La phrasé sonore de la prose de Ruskin — avec ses cadences roulantes et ses propositions orchestrales — accomplit esthétiquement la sublimité même qu\'elle décrit.',
    },
    {
      english: 'Palimpsestuous',
      french: 'Palimpsestueux',
      phonetic: '/pælˈɪmpsɛstʃuəs/',
      example: 'Derrida\'s coinage "palimpsestuous" captures the voluptuous layering of meanings that a text or image accrues across its reception history.',
      exampleTranslation: 'Le néologisme de Derrida "palimpsestueux" saisit la superposition voluptueuse de significations qu\'un texte ou une image accumule au fil de son histoire de réception.',
    },
    {
      english: 'Haptic',
      french: 'Haptique',
      phonetic: '/ˈhæptɪk/',
      example: 'The haptic visuality that Marks theorises — where the eye grazes the surface rather than penetrating into depth — reorients our relationship to the cinematic image.',
      exampleTranslation: 'La visualité haptique que théorise Marks — où l\'œil effleure la surface plutôt que de pénétrer en profondeur — réoriente notre relation à l\'image cinématographique.',
    },
  ],
  grammar: {
    title: 'Le langage évocateur : description sensorielle et synesthésie dans la critique',
    explanation: `La critique d'art la plus accomplie déploie un langage évocateur qui engage les sens du lecteur — non seulement la vue, mais le toucher, l'ouïe, voire le goût et l'odorat. Ce registre sensoriel repose sur plusieurs dispositifs linguistiques : (1) La synesthésie métaphorique — le transfert d'un registre sensoriel à un autre : "the colour sings", "the surface whispers", "the composition hums with tension", "a luminous silence". Ces transferts ne sont pas arbitraires ; ils saisissent des qualités esthétiques que le langage littéral ne peut atteindre. (2) Les adjectifs à dominance sensorielle : "tactile", "sonorous", "evanescent", "visceral", "luminous", "haptic", "strident", "mellifluous". Chacun ancre la description dans un registre perceptif spécifique. (3) Les constructions as if / as though qui ouvrent l'espace analogique : "as though the paint itself were breathing", "as if colour had acquired weight". Ces constructions permettent de formuler des perceptions qui dépassent le littéral sans les présenter comme des faits. (4) Le vocabulaire du corps et de la sensation : "the canvas pulses", "the surface yields", "the brushwork caresses", "the composition resists". Ce vocabulaire corporel anime l'œuvre d'art, la rendant quasi-vivante sous la plume du critique. Les francophones doivent veiller à ne pas sous-exploiter ces ressources : la critique française a tendance à privilégier le cadre théorique au détriment de la description sensorielle, tandis que la critique anglophone attend que le critique fasse éprouver l'œuvre au lecteur avant de l'analyser.`,
    examples: [
      { sentence: 'The surface whispers where it once shouted — the impasto thins to a near-transparent glaze, as though the paint itself were withdrawing from visibility.', translation: 'La surface murmure là où elle criait jadis — l\'empâtement s\'amincit en un glacis quasi transparent, comme si la peinture elle-même se retirait de la visibilité.', isCorrect: true },
      { sentence: 'The painting is about light and the brushwork shows it well.', translation: '', isCorrect: false },
      { sentence: 'The sonorous reds and haptic surfaces of this late Rothko compel the viewer\'s body to respond before the mind can formulate a thought — vision as somatic event.', translation: 'Les rouges sonores et les surfaces haptiques de ce Rothko tardif contraignent le corps du spectateur à répondre avant que l\'esprit puisse formuler une pensée — la vision comme événement somatique.', isCorrect: true },
      { sentence: 'The evanescent blues dissolve into one another as if colour itself were exhaling — a palimpsestuous layering that renders the act of seeing indistinguishable from the act of remembering.', translation: 'Les bleus évanescent se dissolvent les uns dans les autres comme si la couleur elle-même exhalait — une superposition palimpsestueuse qui rend l\'acte de voir indiscernable de l\'acte de se souvenir.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The painting is about light and the brushwork shows it well.', correct: 'The luminous brushwork breathes light into the canvas — each stroke a breath, each glaze a veil, as though the paint itself were luminous from within.', explanation: 'La description littérale ("about light", "shows it well") ne rend pas compte de l\'expérience esthétique. Le critique C2 doit faire éprouver la qualité de la lumière — par la synesthésie, le vocabulaire sensoriel et les constructions analogiques (as if/as though) qui ouvrent l\'espace de la perception.' },
      { wrong: 'The painting makes you feel like you are touching the surface.', correct: 'The tactile impasto compels the gaze to graze the surface — vision transmuted, as it were, into haptic encounter.', explanation: '"Makes you feel like" est une formulation générique et informelle. La critique d\'art exige un vocabulaire sensoriel précis ("tactile", "haptic") et des constructions qui formulent la relation sensorielle avec nuance ("compels the gaze", "transmuted into"). L\'expression "as it were" signale le caractère analogique de l\'affirmation.' },
    ],
  },
  conversation: [
    { speaker: 'Solange', role: 'A', text: 'I spent twenty minutes in front of that late Rothko — the edges hum, don\'t they? The colour doesn\'t sit on the canvas; it breathes.', translation: 'J\'ai passé vingt minutes devant ce Rothko tardif — les bords vibrent, n\'est-ce pas ? La couleur ne repose pas sur la toile ; elle respire.', },
    { speaker: 'Kwame', role: 'B', text: 'It\'s a somatic experience before it\'s an intellectual one — the haptic quality of those suspended veils of colour reaches your body before your mind can name what\'s happening.', translation: 'C\'est une expérience somatique avant d\'être intellectuelle — la qualité haptique de ces voiles suspendus de couleur atteint votre corps avant que votre esprit puisse nommer ce qui se passe.', },
    { speaker: 'Solange', role: 'A', text: 'Exactly. And the sonorous depth of the crimson — it\'s not merely seen, it\'s heard, as though the colour possessed a frequency that the eye registers as sound.', translation: 'Exactement. Et la profondeur sonore du cramoisi — il n\'est pas simplement vu, il est entendu, comme si la couleur possédait une fréquence que l\'œil enregistre comme son.', },
    { speaker: 'Kwame', role: 'B', text: 'That\'s synaesthesia as critical method — and Ruskin pioneered it, didn\'t he? His prose doesn\'t describe sublimity; it performs it, syllable by sonorous syllable.', translation: 'C\'est la synesthésie comme méthode critique — et Ruskin l\'a initiée, n\'est-ce pas ? Sa prose ne décrit pas la sublimité ; elle l\'accomplit, syllabe après syllabe sonore.', },
    { speaker: 'Solange', role: 'A', text: 'Though one might argue that Auerbach goes further — the tactile impasto is so thick that vision itself becomes a form of touching. The surface resists, yields, asserts.', translation: 'Bien qu\'on puisse soutenir qu\'Auerbach va plus loin — l\'empâtement tactile est si épais que la vision elle-même devient une forme de toucher. La surface résiste, cède, s\'affirme.', },
    { speaker: 'Kwame', role: 'B', text: 'And that resistance is crucial — it\'s what distinguishes the evanescent from the merely vague. Whistler\'s nocturnes dissolve, yes, but they dissolve with precision, as if the mist itself had been composed.', translation: 'Et cette résistance est cruciale — c\'est ce qui distingue l\'évanescent du simplement vague. Les nocturnes de Whistler se dissolvent, oui, mais elles se dissolvent avec précision, comme si la brume elle-même avait été composée.', },
    { speaker: 'Solange', role: 'A', text: 'Beautifully said. And that, finally, is what the best criticism must do — not merely describe the sensory encounter but re-enact it in language, so the reader feels the canvas breathe.', translation: 'Magnifiquement dit. Et c\'est, en fin de compte, ce que la meilleure critique doit faire — non pas simplement décrire la rencontre sensorielle mais la remettre en acte dans le langage, pour que le lecteur sente la toile respirer.', },
  ],
  conversationTitle: 'La critique comme expérience sensorielle',
  pronunciation: [
    {
      word: 'Evanescent',
      phonetic: '/ˌɛvəˈnɛsənt/',
      meaning: 'Évanescent',
      tip: 'Accent sur "NES" : "ev-eh-NES-ent". Le premier "e" est bref. Le "a" central est un schwa réduit. Le suffixe "-escent" se prononce "es-ent". Ne dites pas "eh-van-ES-ent".',
    },
    {
      word: 'Tactile',
      phonetic: '/ˈtæktaɪl/',
      meaning: 'Tactile',
      tip: 'Accent sur "TAK" : "TAK-taïl". Le "a" est très ouvert comme dans "cat". Le "ile" final = "aïl" comme dans "tile". Ne dites pas "tak-TEEL" à la française.',
    },
    {
      word: 'Sonorous',
      phonetic: '/ˈsɒnərəs/',
      meaning: 'Sonore',
      tip: 'Accent sur "SON" : "SON-eh-res". Le "o" est ouvert comme dans "hot". Les deux syllabes finales se réduisent en schwas. Ne dites pas "so-NOR-us".',
    },
    {
      word: 'Haptic',
      phonetic: '/ˈhæptɪk/',
      meaning: 'Haptique',
      tip: 'Accent sur "HAP" : "HAP-tik". Le "a" est très ouvert comme dans "cat". Le "h" est expiré. Ne confondez pas avec "optic" — le "h" est crucial ici. Le suffixe "-ic" est bref et clair.',
    },
  ],
}
