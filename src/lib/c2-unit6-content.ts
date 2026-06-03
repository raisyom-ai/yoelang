import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C2 MASTERY — UNIT 6: SPECIALIZED TERMINOLOGY (c2-l26 through c2-l30)
// YOELANG English Learning App for Francophone Users
// Near-native mastery: jargon, nomenclature, taxonomy, neologisms, loanwords
// ════════════════════════════════════════════════════════════════════════════════

// ─── c2-l26: Terminology Vocabulary — Jargon, nomenclature, taxonomy ────────────
export const C2_L26: LessonContent = {
  vocab: [
    {
      english: 'Nomenclature',
      french: 'Nomenclature',
      phonetic: '/ˈnoʊmənˌkletʃər/',
      example: 'The binomial nomenclature devised by Linnaeus remains the cornerstone of biological classification.',
      exampleTranslation: 'La nomenclature binomiale conçue par Linné reste la pierre angulaire de la classification biologique.',
    },
    {
      english: 'Typology',
      french: 'Typologie',
      phonetic: '/taɪˈpɒlədʒi/',
      example: 'Bloom\'s typology of educational objectives has been so widely adopted that it has arguably become a straitjacket.',
      exampleTranslation: 'La typologie des objectifs pédagogiques de Bloom a été si largement adoptée qu\'elle est sans doute devenue une camisole de force.',
    },
    {
      english: 'Jargon',
      french: 'Jargon',
      phonetic: '/ˈdʒɑːrɡən/',
      example: 'The jargon of constitutional law, while precise for initiates, erects formidable barriers to public understanding.',
      exampleTranslation: 'Le jargon du droit constitutionnel, tout en étant précis pour les initiés, dresse des barrières redoutables à la compréhension publique.',
    },
    {
      english: 'Lexeme',
      french: 'Lexème',
      phonetic: '/ˈlɛksiːm/',
      example: 'The lexeme "run" subsumes an extraordinary range of senses — from physical locomotion to political candidacy.',
      exampleTranslation: 'Le lexème "run" englobe une gamme extraordinaire de sens — de la locomotion physique à la candidature politique.',
    },
    {
      english: 'Classification',
      french: 'Classification',
      phonetic: '/ˌklæsɪfɪˈkeɪʃən/',
      example: 'A rigorous classification system enables researchers to organise knowledge systematically and retrieve it efficiently.',
      exampleTranslation: 'Un système de classification rigoureux permet aux chercheurs d\'organiser le savoir systématiquement et de le retrouver efficacement.',
    },
  ],
  grammar: {
    title: 'Le langage classificatoire : structures définitoires et spécificationnelles',
    explanation: `À un niveau C2, la maîtrise du langage spécialisé exige de savoir formuler des définitions et des classifications avec la précision d'un expert. Les structures définitoires en anglais emploient des constructions syntaxiques spécifiques : (1) La définition par genre prochain et différence spécifique : "X is a Y that/which..." — "A lexeme is a unit of vocabulary that subsumes all inflected forms." (2) La définition opérationnelle : "X is defined as Y insofar as..." — "Ontology is defined as a formal specification of shared conceptualisations insofar as it enables interoperability." (3) La classification hiérarchique avec term positioning : "X falls under / belongs to / constitutes a subset of Y" — "Taxonomy falls under the broader rubric of systematics." (4) La reformulation techniques : "X — that is to say, Y — ..." ou "X, or Y, ..." — "The nomenclature — that is to say, the systematised naming conventions — must be internally consistent." Ces structures permettent d'introduire, de définir et de situer un terme technique avec la rigueur exigée dans les discours académiques et professionnels.`,
    examples: [
      { sentence: 'A lexeme is a unit of vocabulary that subsumes all inflected forms of a given word.', translation: 'Un lexème est une unité de vocabulaire qui englobe toutes les formes fléchies d\'un mot donné.', isCorrect: true },
      { sentence: 'Taxonomy belongs to the broader discipline of systematics, which encompasses both classification and phylogenetics.', translation: 'La taxonomie appartient à la discipline plus large de la systématique, qui englobe tant la classification que la phylogénétique.', isCorrect: true },
      { sentence: 'Jargon is a specialized language which it obscures meaning for outsiders.', translation: '', isCorrect: false },
      { sentence: 'The nomenclature — that is to say, the systematised set of naming conventions — must remain internally consistent.', translation: 'La nomenclature — c\'est-à-dire l\'ensemble systématisé de conventions de dénomination — doit demeurer intérieurement cohérente.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Jargon is a specialized language which it obscures meaning for outsiders.', correct: 'Jargon is a specialized language that obscures meaning for outsiders.', explanation: 'L\'ajout du pronom "it" après le relatif "which" crée une redondance grammaticale. En anglais, le pronom relatif ("that" ou "which") assume déjà la fonction de sujet de la subordonnée — on n\'ajoute pas un second pronom sujet.' },
      { wrong: 'Ontology is defined as a formal specification, which it enables interoperability.', correct: 'Ontology is defined as a formal specification that enables interoperability.', explanation: 'Même erreur de double sujet. La relative "that enables" suffit — "which it enables" est agrammatical car "it" est en excédent.' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Amara', role: 'A', text: 'The nomenclature we\'ve inherited from Linnaeus is remarkably resilient, but one must ask whether it can accommodate the findings of molecular phylogenetics.', translation: 'La nomenclature que nous avons héritée de Linné est remarquablement résiliente, mais il faut se demander si elle peut accommoder les résultats de la phylogénétique moléculaire.', },
    { speaker: 'Dr. Okafor', role: 'B', text: 'That\'s precisely the tension. The taxonomy is being revised almost continuously now — cladistics has upended so many traditional classifications.', translation: 'C\'est précisément la tension. La taxonomie est révisée presque continuellement désormais — la cladistique a bouleversé tant de classifications traditionnelles.', },
    { speaker: 'Prof. Amara', role: 'A', text: 'And yet the jargon persists. Scientists still speak of "fish" as though it were a clade, when in fact it\'s a paraphyletic grouping.', translation: 'Et pourtant le jargon persiste. Les scientifiques parlent encore des « poissons » comme s\'il s\'agissait d\'un clade, alors qu\'il s\'agit en fait d\'un regroupement paraphylétique.', },
    { speaker: 'Dr. Okafor', role: 'B', text: 'Which illustrates a broader point — the lexeme may remain stable even as the underlying ontology shifts beneath it.', translation: 'Ce qui illustre un point plus large — le lexème peut demeurer stable même lorsque l\'ontologie sous-jacente se déplace en dessous.', },
    { speaker: 'Prof. Amara', role: 'A', text: 'Exactly. The nomenclature — that is to say, the system of names — lags behind the conceptual framework it purports to represent.', translation: 'Exactement. La nomenclature — c\'est-à-dire le système de noms — est en retard sur le cadre conceptuel qu\'elle prétend représenter.', },
    { speaker: 'Dr. Okafor', role: 'B', text: 'Be that as it may, any replacement taxonomy must still be communicable. Technical precision without comprehensibility is merely another form of obscurantism.', translation: 'Ceci étant, toute taxonomie de remplacement doit demeurer communicable. La précision technique sans intelligibilité n\'est qu\'une autre forme d\'obscurantisme.', },
    { speaker: 'Prof. Amara', role: 'A', text: 'Agreed entirely. The challenge lies in devising a nomenclature that is at once scientifically rigorous and semantically transparent — a challenge, I venture to suggest, that is far from trivial.', translation: 'Entièrement d\'accord. Le défi consiste à élaborer une nomenclature à la fois scientifiquement rigoureuse et sémantiquement transparente — un défi, je m\'avance à le suggérer, qui est loin d\'être trivial.', },
  ],
  conversationTitle: 'Nomenclature et taxonomie modernes',
  pronunciation: [
    {
      word: 'Nomenclature',
      phonetic: '/ˈnoʊmənˌkletʃər/',
      meaning: 'Nomenclature',
      tip: 'Accent sur la première syllabe : "NO-men-klay-cher". Le "cl" se prononce "kl" (pas "kul"). En anglais américain, le "ture" final = "cher". Ne dites pas "no-män-ka-TYR" à la française.',
    },
    {
      word: 'Taxonomy',
      phonetic: '/tækˈsɒnəmi/',
      meaning: 'Taxonomie',
      tip: 'Accent sur "SON" : "tak-SON-eh-mi". Le "x" = "ks". Le "o" accentué est ouvert comme dans "hot". Ne placez pas l\'accent sur la dernière syllabe.',
    },
    {
      word: 'Lexeme',
      phonetic: '/ˈlɛksiːm/',
      meaning: 'Lexème',
      tip: 'Accent sur la première syllabe : "LEK-seem". Le "e" final est long comme dans "gene". Ne dites pas "leks-EM".',
    },
    {
      word: 'Classification',
      phonetic: '/ˌklæsɪfɪˈkeɪʃən/',
      meaning: 'Classification',
      tip: 'Accent principal sur "KAY" : "klas-ih-fih-KAY-shun". Le "i" de "fi" est bref. Le suffixe "-ation" se réduit en "shun". Ne dites pas "klah-see-fee-kah-SYOHN" à la française.',
    },
  ],
}

// ─── c2-l27: Taxonomic Language — Classifying and categorizing expressions ──────
export const C2_L27: LessonContent = {
  vocab: [
    {
      english: 'Systematics',
      french: 'Systématique',
      phonetic: '/ˌsɪstəˈmætɪks/',
      example: 'Biological systematics encompasses both taxonomy and phylogenetics, seeking to classify organisms by evolutionary relationships.',
      exampleTranslation: 'La systématique biologique englobe tant la taxonomie que la phylogénétique, cherchant à classer les organismes par leurs relations évolutives.',
    },
    {
      english: 'Paradigm',
      french: 'Paradigme',
      phonetic: '/ˈpærədaɪm/',
      example: 'The Kuhnian paradigm shift describes not merely a change in theory but a transformation in the very criteria of scientific legitimacy.',
      exampleTranslation: 'Le changement de paradigme kuhnien décrit non pas simplement un changement de théorie mais une transformation des critères mêmes de légitimité scientifique.',
    },
    {
      english: 'Subsume',
      french: 'Subsumer',
      phonetic: '/səbˈsuːm/',
      example: 'The category "mammal" subsumes an extraordinarily diverse array of species, from baleen whales to bats.',
      exampleTranslation: 'La catégorie « mammifère » subsume un éventail extraordinairement divers d\'espèces, des baleines à fanons aux chauves-souris.',
    },
    {
      english: 'Delineate',
      french: 'Délimiter',
      phonetic: '/dɪˈlɪnieɪt/',
      example: 'It is one thing to delineate the boundaries of a discipline; it is quite another to police them.',
      exampleTranslation: 'Il est une chose de délimiter les frontières d\'une discipline ; c\'en est une tout autre que de les policer.',
    },
    {
      english: 'Demarcate',
      french: 'Démarquer',
      phonetic: '/ˈdiːmɑːrkeɪt/',
      example: 'Popper\'s falsifiability criterion was intended to demarcate science from pseudoscience — a project that has proven more vexing than it first appeared.',
      exampleTranslation: 'Le critère de falsifiabilité de Popper était destiné à démarquer la science de la pseudoscience — un projet qui s\'est révélé plus épineux qu\'il n\'y paraissait d\'abord.',
    },
  ],
  grammar: {
    title: 'Les expressions taxonomiques : classer, catégoriser, hiérarchiser',
    explanation: `Le langage de la classification en anglais emploie un ensemble de structures syntaxiques et lexicales très spécifiques. Pour exprimer l'inclusion hiérarchique : (1) "X falls under Y" (X relève de Y), "X constitutes a subset of Y" (X constitue un sous-ensemble de Y), "X is subsumed under Y" (X est subsumé sous Y). Pour exprimer la distinction et la frontière : (2) "X is distinguished from Y by/through..." (X se distingue de Y par...), "The line between X and Y is drawn at..." (La ligne entre X et Y est tracée à...), "X is demarcated from Y on the basis of..." (X est démarqué de Y sur la base de...). Pour exprimer la typologie : (3) "X is classified into Y categories on the basis of Z" (X est classé en Y catégories sur la base de Z), "X comprises/comprehends Y" (X comprend Y). Pour exprimer l'exhaustivité : (4) "The taxonomy encompasses... ranging from A to B" (La taxonomie englobe... allant de A à B). L'utilisation de l'article défini avec les catégories ("the mammalian order", "the class Mammalia") signale le statut technique du terme.`,
    examples: [
      { sentence: 'Cetaceans are subsumed under the order Cetacea, which is further classified into the suborders Mysticeti and Odontoceti.', translation: 'Les cétacés sont subsumés sous l\'ordre des Cétacés, qui est en outre classé en sous-ordres des Mysticètes et des Odontocètes.', isCorrect: true },
      { sentence: 'The boundary between dialect and language is demarcated not solely by linguistic criteria but by sociopolitical ones as well.', translation: 'La frontière entre dialecte et langue est démarquée non seulement par des critères linguistiques mais aussi sociopolitiques.', isCorrect: true },
      { sentence: 'The typology classifies languages in three types on basis of word order.', translation: '', isCorrect: false },
      { sentence: 'This paradigm encompasses approaches ranging from the strictly empirical to the overtly speculative.', translation: 'Ce paradigme englobe des approches allant du strictement empirique au franchement spéculatif.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The typology classifies languages in three types on basis of word order.', correct: 'The typology classifies languages into three types on the basis of word order.', explanation: 'Deux erreurs : (1) "classify into" et non "classify in" — on classe "dans" des catégories ; (2) "on the basis of" exige l\'article défini, "on basis of" est agrammatical.' },
      { wrong: 'Science is demarcated from pseudoscience by Popper.', correct: 'Science is demarcated from pseudoscience by Popper\'s falsifiability criterion.', explanation: 'La formulation "by Popper" est ambiguë : s\'agit-il de l\'agent qui effectue la démarcation ou du critère ? En langage taxonomique, on spécifie toujours le critère de démarcation — "by/on the basis of [criterion]", non l\'agent humain.' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Diallo', role: 'A', text: 'I\'ve been re-examining Greenberg\'s typology and I wonder whether it doesn\'t inadvertently privilege surface morphology at the expense of deeper syntactic regularities.', translation: 'J\'ai réexaminé la typologie de Greenberg et je me demande si elle ne privilégie pas par mégarde la morphologie de surface au détriment de régularités syntaxiques plus profondes.', },
    { speaker: 'Prof. Mercier', role: 'B', text: 'That\'s a long-standing objection. Still, one must grant that any typology must begin somewhere — and word order is at least observable and verifiable.', translation: 'C\'est une objection de longue date. Néanmoins, il faut reconnaître que toute typologie doit bien commencer quelque part — et l\'ordre des mots est au moins observable et vérifiable.', },
    { speaker: 'Dr. Diallo', role: 'A', text: 'Granted. But the paradigm has ossified to the point where "SOV language" is treated as though it were an ontological category rather than a heuristic convenience.', translation: 'Accordé. Mais le paradigme s\'est ossifié au point où "langue SOV" est traité comme s\'il s\'agissait d\'une catégorie ontologique plutôt que d\'une commodité heuristique.', },
    { speaker: 'Prof. Mercier', role: 'B', text: 'Precisely the risk when any classification scheme hardens into dogma. The boundaries that were meant to delineate become walls that constrain.', translation: 'Précisément le risque lorsqu\'un schéma de classification se fige en dogme. Les frontières qui devaient délimiter deviennent des murs qui contraignent.', },
    { speaker: 'Dr. Diallo', role: 'A', text: 'Which is why, arguably, a truly adequate typology must subsume not merely the categories themselves but the meta-criteria by which they are demarcated.', translation: 'C\'est pourquoi, sans doute, une typologie véritablement adéquate doit subsumer non seulement les catégories elles-mêmes mais les méta-critères par lesquels elles sont démarquées.', },
    { speaker: 'Prof. Mercier', role: 'B', text: 'An elegant formulation — though one that risks infinite regress. At some point, the delineation must terminate, or we find ourselves classifying classifications ad infinitum.', translation: 'Une formulation élégante — bien qu\'elle risque la régression à l\'infini. À un certain point, la délimitation doit s\'arrêter, sinon nous nous retrouvons à classer les classifications ad infinitum.', },
    { speaker: 'Dr. Diallo', role: 'A', text: 'Fair enough. But the awareness of that regress — even if we cannot escape it — is precisely what distinguishes a critical typology from a naïve one.', translation: 'Juste. Mais la conscience de cette régression — même si nous ne pouvons y échapper — est précisément ce qui distingue une typologie critique d\'une typologie naïve.', },
  ],
  conversationTitle: 'Typologie et frontières disciplinaires',
  pronunciation: [
    {
      word: 'Systematics',
      phonetic: '/ˌsɪstəˈmætɪks/',
      meaning: 'Systématique',
      tip: 'Accent sur "MAT" : "sis-teh-MAT-iks". Le "y" initial est réduit. Le "a" accentué est très ouvert comme dans "cat". Le suffixe "-ics" = "iks". Ne confondez pas avec "systemic" (systémique).',
    },
    {
      word: 'Paradigm',
      phonetic: '/ˈpærədaɪm/',
      meaning: 'Paradigme',
      tip: 'Accent sur la première syllabe : "PARE-eh-daïm". Le "di" final = "aïm" (comme dans "time"). Ne prononcez pas le "g" — il est silencieux, contrairement au français "paradigme".',
    },
    {
      word: 'Delineate',
      phonetic: '/dɪˈlɪnieɪt/',
      meaning: 'Délimiter',
      tip: 'Accent sur "LIN" : "dih-LIN-ee-ayt". Le premier "e" est réduit en schwa. Le suffixe "-eate" = "ee-ayt". Ne dites pas "deh-lee-nee-AHT".',
    },
    {
      word: 'Demarcate',
      phonetic: '/ˈdiːmɑːrkeɪt/',
      meaning: 'Démarquer',
      tip: 'Accent sur la première syllabe : "DEE-mar-kayt". Le "e" initial est long. Le "ar" est ouvert comme dans "car". Le suffixe "-ate" = "ayt".',
    },
  ],
}

// ─── c2-l28: Expert Discussion — Domain-specific expert dialogue ────────────────
export const C2_L28: LessonContent = {
  vocab: [
    {
      english: 'Episteme',
      french: 'Épistémè',
      phonetic: '/ɪˈpɪstiːmi/',
      example: 'Foucault\'s episteme designates the historical a priori that governs what can be known and said in a given period.',
      exampleTranslation: 'L\'épistémè de Foucault désigne l\'a priori historique qui régit ce qui peut être su et dit dans une période donnée.',
    },
    {
      english: 'Heuristic',
      french: 'Heuristique',
      phonetic: '/hjuˈrɪstɪk/',
      example: 'The model is heuristic rather than predictive — it illuminates the problem space without claiming to resolve it.',
      exampleTranslation: 'Le modèle est heuristique plutôt que prédictif — il éclaire l\'espace problématique sans prétendre le résoudre.',
    },
    {
      english: 'Systematic',
      french: 'Systématique',
      phonetic: '/ˌsɪstəˈmætɪk/',
      example: 'The systematic circle — understanding the whole through its parts and the parts through the whole — is not a vicious circle but a spiral of deepening comprehension.',
      exampleTranslation: 'Le cercle systématique — comprendre le tout par ses parties et les parties par le tout — n\'est pas un cercle vicieux mais une spirale d\'approfondissement de la compréhension.',
    },
    {
      english: 'Dialectic',
      french: 'Dialectique',
      phonetic: '/ˌdaɪəˈlɛktɪk/',
      example: 'The dialectic between theory and implementation is not a contradiction to be resolved but a productive tension to be sustained.',
      exampleTranslation: 'La dialectique entre théorie et implémentation n\'est pas une contradiction à résoudre mais une tension productive à entretenir.',
    },
    {
      english: 'Implementation',
      french: 'Implémentation',
      phonetic: '/ˌɪmplɪmɛnˈteɪʃən/',
      example: 'Freire\'s implementation-oriented pedagogy insists that reflection without action is verbalism, and action without reflection is activism.',
      exampleTranslation: 'La pédagogie orientée vers l\'implémentation de Freire affirme que la réflexion sans action est du verbalisme, et l\'action sans réflexion de l\'activisme.',
    },
  ],
  grammar: {
    title: 'Le dialogue entre experts : structuration de l\'argumentation technique',
    explanation: `Le dialogue entre experts en anglais repose sur des conventions argumentatives et linguistiques très codifiées. L'argumentation technique emploie plusieurs structures clés : (1) La concession stratégique avec retour : "While/X admittedly Y, it remains the case that Z" — "While the heuristic approach admittedly sacrifices precision, it remains the case that it generates insights inaccessible to purely deductive methods." (2) L'attribution de positions : "X contends/maintains/argues that..." vs "X would counter/respond that..." — ces verbes d'attribution signalent la distance énonciative du locuteur. (3) La qualification épistémique : "The evidence warrants the conclusion that..." (les preuves justifient la conclusion que...), "The data are consistent with the hypothesis that..." (les données sont compatibles avec l'hypothèse que...), "Nothing in the findings compels us to accept..." (rien dans les résultats ne nous oblige à accepter...). (4) La rectification : "Not X but rather Y" ou "Less X than Y" — "The difficulty is less conceptual than methodological." Ces structures permettent aux experts de discuter avec nuance, d'accorder et de contester sans simplification.`,
    examples: [
      { sentence: 'While the dialectic approach admittedly risks circularity, it remains the case that it captures the dynamic interplay between theory and implementation more adequately than static models.', translation: 'Bien que l\'approche dialectique risque admissible la circularité, il n\'en demeure pas moins qu\'elle saisit l\'interaction dynamique entre théorie et implémentation plus adéquatement que les modèles statiques.', isCorrect: true },
      { sentence: 'The evidence warrants the conclusion that the episteme of a period constrains not merely what is thought but what is thinkable.', translation: 'Les preuves justifient la conclusion que l\'épistémè d\'une période contraint non seulement ce qui est pensé mais ce qui est pensable.', isCorrect: true },
      { sentence: 'He argues that the systematic circle is a vicious circle, but his critics would counter that it is a spiral.', translation: '', isCorrect: false },
      { sentence: 'The difficulty is less epistemological than institutional — the concepts are available; the structures for implementing them are not.', translation: 'La difficulté est moins épistémologique qu\'institutionnelle — les concepts sont disponibles ; les structures pour les implémenter ne le sont pas.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'He argues that the hermeneutic circle is a vicious circle, but he would counter that it is a spiral.', correct: 'He argues that the systematic circle is a vicious circle; his critics would counter that it is better understood as a spiral.', explanation: 'Dans une même phrase, un même sujet ne peut pas à la fois "argue" et "counter" — ce sont des positions opposées. Il faut attribuer chaque position à un actant distinct : X argues A ; Y counters B. Sinon, la phrase est auto-contradictoire.' },
      { wrong: 'The evidence warrants that the conclusion is correct.', correct: 'The evidence warrants the conclusion that the model is valid.', explanation: '"Warrant" en anglais académique se construit avec un nom direct (warrant the conclusion that...) et non avec une clause (warrant that...). C\'est un usage technique spécifique du terme dans l\'argumentation épistémique.' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Ndiaye', role: 'A', text: 'The episteme that Foucault describes is, I would contend, less a constraint on thought than a condition of possibility for it.', translation: 'L\'épistémè que Foucault décrit est, je le soutiendrais, moins une contrainte sur la pensée qu\'une condition de possibilité de celle-ci.', },
    { speaker: 'Dr. Laurent', role: 'B', text: 'That\'s a defensible reading. Then again, one might counter that if the episteme makes certain thoughts possible, it simultaneously renders others unthinkable — which is a constraint by any other name.', translation: 'C\'est une lecture défendable. Ceci dit, on pourrait riposter que si l\'épistémè rend certaines pensées possibles, il rend simultanément d\'autres impensables — ce qui est une contrainte sous un autre nom.', },
    { speaker: 'Prof. Ndiaye', role: 'A', text: 'Fair point. But the dialectic between the two — the enabling and the constraining — is precisely what makes the concept heuristically productive.', translation: 'Point juste. Mais la dialectique entre les deux — ce qui permet et ce qui contraint — est précisément ce qui rend le concept heuristiquement productif.', },
    { speaker: 'Dr. Laurent', role: 'B', text: 'Provided, of course, that the heuristic doesn\'t harden into dogma. The systematic tradition reminds us that our interpretive frameworks must remain open to revision.', translation: 'Pourvu, bien sûr, que l\'heuristique ne se fige pas en dogme. La tradition systématique nous rappelle que nos cadres interprétatifs doivent demeurer ouverts à la révision.', },
    { speaker: 'Prof. Ndiaye', role: 'A', text: 'Which brings us to implementation. The gap between theoretical insight and institutional execution is where most ambitious frameworks falter.', translation: 'Ce qui nous mène à l\'implémentation. C\'est dans l\'écart entre l\'aperçu théorique et l\'exécution institutionnelle que la plupart des cadres ambitieux trébuchent.', },
    { speaker: 'Dr. Laurent', role: 'B', text: 'Indeed. Freire\'s insistence on implementation — on the unity of reflection and action — remains the most cogent response to the perennial charge that theory is merely academic.', translation: 'En effet. L\'insistance de Freire sur l\'implémentation — sur l\'unité de la réflexion et de l\'action — demeure la réponse la plus convaincante à l\'accusation récurrente selon laquelle la théorie serait purement académique.', },
    { speaker: 'Prof. Ndiaye', role: 'A', text: 'And yet, as we both know, implementation without rigorous theoretical grounding risks becoming mere activism. The dialectic, it seems, is inescapable — and perhaps that is as it should be.', translation: 'Et pourtant, comme nous le savons tous deux, l\'implémentation sans fondement théorique rigoureux risque de devenir du simple activisme. La dialectique, semble-t-il, est inéluctable — et c\'est peut-être ainsi qu\'il faut.', },
  ],
  conversationTitle: 'Épistémè, dialectique et implémentation',
  pronunciation: [
    {
      word: 'Episteme',
      phonetic: '/ɪˈpɪstiːmi/',
      meaning: 'Épistémè',
      tip: 'Accent sur "PI" (deuxième syllabe) : "eh-PIS-tee-mi". Le premier "e" est réduit en schwa. Le "i" accentué est bref. Le "e" final est long. Ne dites pas "eh-pis-TEEM" — l\'accent est pénultième.',
    },
    {
      word: 'Heuristic',
      phonetic: '/hjuˈrɪstɪk/',
      meaning: 'Heuristique',
      tip: 'Accent sur "RIS" : "hioo-RIS-tik". Le "h" est expiré, le "eu" initial = "iou" comme dans "museum". Ne dites pas "eu-RIS-tik" sans le "h".',
    },
    {
      word: 'Dialectic',
      phonetic: '/ˌdaɪəˈlɛktɪk/',
      meaning: 'Dialectique',
      tip: 'Accent principal sur "LEC" : "daï-eh-LEK-tik". Le "ia" = "aï-eh". Le "g" n\'apparaît pas ici, le "c" est dur comme dans "cat". Ne dites pas "dee-ah-LEK-tik".',
    },
    {
      word: 'Systematic',
      phonetic: '/ˌsɪstəˈmætɪk/',
      meaning: 'Systématique',
      tip: 'Accent principal sur "MAT" : "sis-teh-MAT-ik". Le "y" initial est réduit. Le "a" accentué est très ouvert comme dans "cat". Ne confondez pas avec "systemic" (systémique).',
    },
  ],
}

// ─── c2-l29: Field-specific Writing — Technical term pronunciation ──────────────
export const C2_L29: LessonContent = {
  vocab: [
    {
      english: 'Nomenclatural',
      french: 'Nomenclatural',
      phonetic: '/ˌnoʊmənˈkletʃərəl/',
      example: 'The nomenclatural code governing botanical names differs significantly from that governing zoological ones.',
      exampleTranslation: 'Le code nomenclatural régissant les noms botaniques diffère significativement de celui régissant les noms zoologiques.',
    },
    {
      english: 'Stipulative definition',
      french: 'Définition stipulative',
      phonetic: '/ˈstɪpjʊlətɪv ˌdɛfɪˈnɪʃən/',
      example: 'A stipulative definition assigns a meaning to a term for the purposes of a specific argument, without claiming to capture ordinary usage.',
      exampleTranslation: 'Une définition stipulative attribue un sens à un terme aux fins d\'un argument spécifique, sans prétendre capturer l\'usage ordinaire.',
    },
    {
      english: 'Precising definition',
      french: 'Définition précisante',
      phonetic: '/prɪˈsaɪzɪŋ ˌdɛfɪˈnɪʃən/',
      example: 'Legal drafting relies heavily on precising definitions that narrow the vagueness of ordinary language for regulatory purposes.',
      exampleTranslation: 'La rédaction juridique s\'appuie fortement sur les définitions précisantes qui réduisent le flou du langage ordinaire à des fins réglementaires.',
    },
    {
      english: 'Homonymy',
      french: 'Homonymie',
      phonetic: '/hɒˈmɒnɪmi/',
      example: 'The homonymy between "bank" the financial institution and "bank" the riverside incline is etymologically accidental — they derive from entirely different roots.',
      exampleTranslation: 'L\'homonymie entre "bank" l\'institution financière et "bank" le talus riverain est étymologiquement accidentelle — ils dérivent de racines entièrement différentes.',
    },
    {
      english: 'Polysemy',
      french: 'Polysémie',
      phonetic: '/pəˈlɪsɪmi/',
      example: 'The polysemy of "culture" — ranging from bacterial cultivation to artistic achievement to shared beliefs — reflects deep conceptual interconnections.',
      exampleTranslation: 'La polysémie de "culture" — allant de la cultivation bactérienne à l\'accomplissement artistique aux croyances partagées — reflète de profondes interconnexions conceptuelles.',
    },
  ],
  grammar: {
    title: 'L\'écriture spécialisée : définitions techniques et convention de dénomination',
    explanation: `L'écriture spécialisée en anglais emploie des conventions de définition et de dénomination très codifiées. On distingue plusieurs types de définitions : (1) La définition lexicale : "X means Y" ou "X denotes Y" — "Polysemy denotes the coexistence of multiple related senses within a single lexical item." (2) La définition stipulative : "For the purposes of this paper, X shall denote Y" — "For the purposes of this discussion, 'discourse' shall denote any instance of language use above the sentence level." Le modal "shall" signale le caractère contraignant de l'attribution. (3) La définition précisante : "X, as used here, refers narrowly to Y" — "Culture, as used here, refers narrowly to the shared symbolic systems of a community." (4) La convention de dénomination : "Hereafter referred to as..." — "The International Code of Zoological Nomenclature (hereafter ICZN) governs..." L'utilisation de parenthèses ou de guillemets pour introduire un terme technique ("scare quotes" pour distanciation, italique pour néologisme, capitales pour acronymes) suit des conventions typographiques précises. Enfin, les abréviations techniques suivent des règles strictes : la première occurrence doit toujours être donnée en forme longue suivie de l\'abréviation entre parenthèses.`,
    examples: [
      { sentence: 'For the purposes of this analysis, "register" shall denote the level of formality conventionally associated with a given communicative context.', translation: 'Aux fins de la présente analyse, "registre" désignera le niveau de formalité conventionnellement associé à un contexte communicatif donné.', isCorrect: true },
      { sentence: 'Homonymy, as used here, refers narrowly to the relation between words that share form but not etymology.', translation: 'L\'homonymie, telle qu\'utilisée ici, désigne étroitement la relation entre des mots qui partagent la forme mais non l\'étymologie.', isCorrect: true },
      { sentence: 'The International Commission on Stratigraphy (hereafter ICS) governs stratigraphic nomenclature, it was established in 1961.', translation: '', isCorrect: false },
      { sentence: 'Polysemy denotes the coexistence of multiple related senses within a single lexeme — as distinct from homonymy, which involves unrelated senses.', translation: 'La polysémie désigne la coexistence de multiples sens apparentés au sein d\'un seul lexème — par opposition à l\'homonymie, qui implique des senses non apparentés.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The International Commission on Stratigraphy (hereafter ICS) governs stratigraphic nomenclature, it was established in 1961.', correct: 'The International Commission on Stratigraphy (hereafter ICS) governs stratigraphic nomenclature; it was established in 1961.', explanation: 'Une virgule entre deux clauses indépendantes crée un "comma splice" (erreur de ponctuation). En anglais académique, on utilise un point-virgule, un point, ou une conjonction de coordination pour relier deux clauses indépendantes. Le comma splice est l\'une des erreurs les plus stigmatisées dans l\'écriture spécialisée.' },
      { wrong: 'For the purposes of this paper, "culture" will mean the shared symbolic systems.', correct: 'For the purposes of this paper, "culture" shall denote the shared symbolic systems of a community.', explanation: '"Will mean" est trop informel et imprécis pour une définition stipulative. L\'anglais académique emploie "shall denote" ou "shall be used to refer to" pour les définitions stipulatives, signalant ainsi le caractère conventionnel et contraignant de l\'attribution de sens.' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Konaté', role: 'A', text: 'I notice your paper uses a stipulative definition of "epistemic injustice" — "for the purposes of this discussion, it shall denote the wrong done to someone in their capacity as a knower." That\'s considerably narrower than Fricker\'s original sense.', translation: 'Je remarque que votre article utilise une définition stipulative de "l\'injustice épistémique" — "aux fins de la présente discussion, elle désignera le tort fait à quelqu\'in en tant que connaissant". C\'est considérablement plus étroit que le sens original de Fricker.', },
    { speaker: 'Dr. Fontaine', role: 'B', text: 'Deliberately so. The precising definition allows me to operationalise the concept without the ambiguities that arise from its broader colloquial usage.', translation: 'Délibérément. La définition précisante me permet d\'opérationnaliser le concept sans les ambiguïtés qui surgissent de son usage colloquial plus large.', },
    { speaker: 'Prof. Konaté', role: 'A', text: 'Understandable. Though one risks the objection that the stipulative definition, by narrowing the scope, eliminates the very polysemy that makes the concept fertile.', translation: 'Compréhensible. Bien qu\'on s\'expose à l\'objection selon laquelle la définition stipulative, en rétrécissant la portée, élimine la polysémie même qui rend le concept fécond.', },
    { speaker: 'Dr. Fontaine', role: 'B', text: 'That\'s the perpetual tension between analytical precision and conceptual richness. Polysemy is intellectually generative; homonymy is merely confusing.', translation: 'C\'est la tension perpétuelle entre la précision analytique et la richesse conceptuelle. La polysémie est intellectuellement générative ; l\'homonymie est simplement confuse.', },
    { speaker: 'Prof. Konaté', role: 'A', text: 'Nicely put. Though I would add that the nomenclatural conventions of a discipline — "hereafter X" — can themselves create a kind of false precision, as though naming were equivalent to understanding.', translation: 'Bien dit. J\'ajouterais que les conventions nomenclaturales d\'une discipline — "ci-après X" — peuvent elles-mêmes créer une sorte de fausse précision, comme si nommer équivalait à comprendre.', },
    { speaker: 'Dr. Fontaine', role: 'B', text: 'The nominalist temptation, one might call it. But without agreed nomenclature, we cannot even begin to argue — the stipulative definition is a precondition of debate, not a substitute for it.', translation: 'La tentation nominaliste, pourrait-on dire. Mais sans nomenclature convenue, nous ne pouvons même pas commencer à argumenter — la définition stipulative est une condition préalable du débat, non un substitut.', },
    { speaker: 'Prof. Konaté', role: 'A', text: 'Agreed — inasmuch as the definition remains transparent about its own stipulative character. The danger arises when stipulation is mistaken for lexical truth.', translation: 'Convenu — dans la mesure où la définition demeure transparente sur son propre caractère stipulatif. Le danger surgit quand la stipulation est confondue avec la vérité lexicale.', },
  ],
  conversationTitle: 'Définitions stipulatives et précisantes',
  pronunciation: [
    {
      word: 'Nomenclatural',
      phonetic: '/ˌnoʊmənˈkletʃərəl/',
      meaning: 'Nomenclatural',
      tip: 'Accent sur "KLA" (troisième syllabe) : "no-men-KLA-cher-al". Le "c" devant "t" se prononce "k". Le suffixe "-ural" = "cher-al". Ne dites pas "no-män-kla-tu-REL".',
    },
    {
      word: 'Stipulative',
      phonetic: '/ˈstɪpjʊlətɪv/',
      meaning: 'Stipulative',
      tip: 'Accent sur la première syllabe : "STIP-you-leh-tiv". Le "u" après "p" est bref. Le suffixe "-ative" = "eh-tiv". Ne dites pas "sti-poo-LAH-tiv".',
    },
    {
      word: 'Homonymy',
      phonetic: '/hɒˈmɒnɪmi/',
      meaning: 'Homonymie',
      tip: 'Accent sur "MON" : "ho-MON-ih-mi". Le "h" est expiré. Les deux "o" sont ouverts comme dans "hot". Ne dites pas "o-mo-NI-mi".',
    },
    {
      word: 'Polysemy',
      phonetic: '/pəˈlɪsɪmi/',
      meaning: 'Polysémie',
      tip: 'Accent sur "LIS" : "peh-LIS-ih-mi". Le "o" initial est réduit en schwa. Le "y" accentué = "i" bref comme dans "bit". Ne dites pas "po-lee-SEE-mi".',
    },
  ],
}

// ─── c2-l30: Terminology Sounds — Neologisms and loanwords ─────────────────────
export const C2_L30: LessonContent = {
  vocab: [
    {
      english: 'Neologism',
      french: 'Néologisme',
      phonetic: '/niːˈɒlədʒɪzəm/',
      example: 'The neologism "post-truth" was so rapidly absorbed into common parlance that Oxford Dictionaries named it Word of the Year in 2016.',
      exampleTranslation: 'Le néologisme "post-truth" fut si rapidement absorbé dans le parler courant qu\'Oxford Dictionaries l\'a élu mot de l\'année en 2016.',
    },
    {
      english: 'Calque',
      french: 'Calque',
      phonetic: '/kælk/',
      example: 'The English phrase "it goes without saying" is a calque of the French "ça va sans dire" — a loan translation preserved verbatim.',
      exampleTranslation: 'L\'expression anglaise "it goes without saying" est un calque du français "ça va sans dire" — une traduction d\'emprunt conservée verbatim.',
    },
    {
      english: 'Loanword',
      french: 'Mot d\'emprunt',
      phonetic: '/ˈloʊnwɜːrd/',
      example: 'The loanword "safari" — borrowed from Swahili, which in turn adapted it from Arabic — illustrates how lexical migration traverses multiple linguistic ecosystems.',
      exampleTranslation: 'Le mot d\'emprunt "safari" — emprunté au swahili, qui l\'a lui-même adapté de l\'arabe — illustre comment la migration lexicale traverse de multiples écosystèmes linguistiques.',
    },
    {
      english: 'Portmanteau',
      french: 'Mot-valise',
      phonetic: '/pɔːrtˈmæntoʊ/',
      example: 'Carroll\'s "slithy" — a portmanteau of "slimy" and "lithe" — demonstrates that neologism can be as much poetic as pragmatic.',
      exampleTranslation: 'Le "slithy" de Carroll — mot-valise de "slimy" et "lithe" — démontre que le néologisme peut être autant poétique que pragmatique.',
    },
    {
      english: 'Anglicism',
      french: 'Anglicisme',
      phonetic: '/ˈæŋɡlɪsɪzəm/',
      example: 'The proliferation of anglicisms in French digital discourse — "le cloud", "le big data" — has prompted legislative countermeasures that many linguists regard as futile.',
      exampleTranslation: 'La prolifération des anglicismes dans le discours numérique français — "le cloud", "le big data" — a suscité des contre-mesures législatives que de nombreux linguistes jugent futiles.',
    },
  ],
  grammar: {
    title: 'Les néologismes et les mots d\'emprunt : intégration phonologique et morphologique',
    explanation: `L'intégration des néologismes et des mots d'emprunt en anglais suit des processus phonologiques et morphologiques prévisibles. (1) L'anglicisation phonologique : les mots d'emprunt sont progressivement adaptés au système phonologique anglais. Le français "ballet" /balɛ/ devient /bæˈleɪ/ en anglais, le "t" final étant muet dans les deux cas mais les voyelles différant. Le japonais "tsunami" /tsɯnami/ devient /sʊˈnɑːmi/ en anglais, perdant l'occlusive alvéolaire sourde initiale. (2) L'affixation productrice : les néologismes sont souvent créés par affixation — "e-" (email, e-commerce), "-gate" (Watergate → Irangate → Plebgate), "-ify" (Spotify, gamify). Ces affixes ont une productivité variable et des contraintes phonologiques : "-ify" s'attache typiquement à des bases de 1-2 syllabes. (3) Le portmanteau (mot-valise) : la fusion de deux mots en un seul — "brunch" (breakfast + lunch), "smog" (smoke + fog), "dramedy" (drama + comedy). Phonologiquement, le point de soudure se situe typiquement là où les deux bases partagent des segments identiques ou similaires. (4) Le calque (traduction d'emprunt) : "skyscraper" fut calqué sur l'allemand "Wolkenkratzer" ; "brainwashing" sur le chinois "xǐnǎo". Ces calques peuvent ensuite être ré-empruntés par d'autres langues, créant des chaînes de migration lexicale.`,
    examples: [
      { sentence: 'The neologism "Brexit" — a portmanteau of "Britain" and "exit" — was so rapidly naturalised that it spawned analogues across Europe: Frexit, Grexit, Nexit.', translation: 'Le néologisme "Brexit" — mot-valise de "Britain" et "exit" — fut si rapidement naturalisé qu\'il a engendré des analogues à travers l\'Europe : Frexit, Grexit, Nexit.', isCorrect: true },
      { sentence: 'The loanword "kindergarten", borrowed from German, has been fully anglicised in pronunciation — /ˈkɪndərˌɡɑːrtən/ — yet retains the German compound structure.', translation: 'Le mot d\'emprunt "kindergarten", emprunté à l\'allemand, a été pleinement anglicisé en prononciation — /ˈkɪndərˌɡɑːrtən/ — tout en conservant la structure composée allemande.', isCorrect: true },
      { sentence: 'The word "safari" is borrowed from Swahili which it was borrowed from Arabic.', translation: '', isCorrect: false },
      { sentence: 'The calque "market economy" mirrors the German "Marktwirtschaft" — a loan translation that has since been re-borrowed into numerous languages.', translation: 'Le calque "market economy" calque l\'allemand "Marktwirtschaft" — une traduction d\'emprunt qui a depuis été ré-empruntée dans de nombreuses langues.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The word "safari" is borrowed from Swahili which it was borrowed from Arabic.', correct: 'The word "safari" is borrowed from Swahili, which in turn adapted it from Arabic.', explanation: 'La relative "which it was borrowed" est agrammaticale — double sujet (which + it). La formulation correcte est "which was borrowed" (sans "it") ou, mieux, "which in turn adapted/borrowed it" pour rendre la chaîne d\'emprunt explicite.' },
      { wrong: 'The neologism "Brexit" is a portmanteau of "British" and "exit".', correct: 'The neologism "Brexit" is a portmanteau of "Britain" and "exit".', explanation: 'La précision étymologique est essentielle en terminologie spécialisée. "Brexit" fusionne "Britain" (nom du pays), non "British" (adjectif). Confondre les deux revient à mal identifier la base morphologique du portmanteau, ce qui est une erreur de analyse lexicale.' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Bensaid', role: 'A', text: 'What fascinates me about the current wave of anglicisms in French is not their existence — that\'s nothing new — but the velocity of their adoption. "Le streaming", "le bashing", "le buzz" — these crossed the Channel faster than any calque ever could.', translation: 'Ce qui me fascine dans la vague actuelle d\'anglicismes en français, ce n\'est pas leur existence — ce n\'est rien de nouveau — mais la vitesse de leur adoption. "Le streaming", "le bashing", "le buzz" — ils ont traversé la Manche plus vite qu\'aucun calque n\'aurait pu le faire.', },
    { speaker: 'Prof. Nakamura', role: 'B', text: 'The same phenomenon in Japanese — gairaigo — has reached such proportions that some fear the loss of native lexical resources. Yet loanwords often fill genuine semantic gaps.', translation: 'Le même phénomène en japonais — les gairaigo — a atteint de telles proportions que certains craignent la perte des ressources lexicales autochtones. Pourtant, les mots d\'emprunt comblent souvent de véritables lacunes sémantiques.', },
    { speaker: 'Dr. Bensaid', role: 'A', text: 'Precisely. The portmanteau "franglais" itself is a case in point — we needed a single lexeme to capture a phenomenon that neither "français" nor "anglais" could denote alone.', translation: 'Précisément. Le mot-valise "franglais" lui-même en est un cas exemplaire — nous avions besoin d\'un seul lexème pour capturer un phénomène que ni "français" ni "anglais" ne pouvait dénoter seul.', },
    { speaker: 'Prof. Nakamura', role: 'B', text: 'And the phonological adaptation is often telling. The French pronounce "shopping" as /ʃɔpiŋ/ — the vowel shifted, the consonant preserved. It\'s neither fully English nor fully French.', translation: 'Et l\'adaptation phonologique est souvent révélatrice. Les Français prononcent "shopping" comme /ʃɔpiŋ/ — la voyelle a changé, la consonne est préservée. Ce n\'est ni pleinement anglais ni pleinement français.', },
    { speaker: 'Dr. Bensaid', role: 'A', text: 'Which is precisely what makes loanwords such rich objects of study — they occupy an interstitial zone between languages, neither fully naturalised nor fully foreign.', translation: 'C\'est précisément ce qui fait des mots d\'emprunt des objets d\'étude si riches — ils occupent une zone interstitielle entre les langues, ni pleinement naturalisés ni pleinement étrangers.', },
    { speaker: 'Prof. Nakamura', role: 'B', text: 'And neologisms tell us something equally profound about the generating language. Every productive suffix — "-gate", "-ify", "-core" — reveals what a linguistic community finds conceptually salient enough to reify.', translation: 'Et les néologismes nous apprennent quelque chose d\'aussi profond sur la langue génératrice. Chaque suffixe productif — "-gate", "-ify", "-core" — révèle ce qu\'une communauté linguistique trouve conceptuellement suffisamment saillant pour le réifier.', },
    { speaker: 'Dr. Bensaid', role: 'A', text: 'In the end, whether through calque, loanword, or portmanteau, every neologism is a small act of conceptual creation — and the language that ceases to generate them is a language that has ceased to think anew.', translation: 'En fin de compte, que ce soit par calque, mot d\'emprunt ou mot-valise, chaque néologisme est un petit acte de création conceptuelle — et la langue qui cesse d\'en produire est une langue qui a cessé de penser à neuf.', },
  ],
  conversationTitle: 'Néologismes et migration lexicale',
  pronunciation: [
    {
      word: 'Neologism',
      phonetic: '/niːˈɒlədʒɪzəm/',
      meaning: 'Néologisme',
      tip: 'Accent sur "OL" : "nee-OL-eh-djiz-em". Le "eo" ne se prononce pas comme deux voyelles séparées — "neo" = "nee". Le "g" est doux comme dans "gem". Ne dites pas "nee-oh-LO-djiz-em".',
    },
    {
      word: 'Portmanteau',
      phonetic: '/pɔːrtˈmæntoʊ/',
      meaning: 'Mot-valise',
      tip: 'Accent sur "MAN" : "port-MAN-toe". Le "eau" final = "o" long. C\'est un mot d\'emprunt du français "porte-manteau", mais la prononciation est entièrement anglicisée. Ne dites pas "port-mon-TO".',
    },
    {
      word: 'Calque',
      phonetic: '/kælk/',
      meaning: 'Calque',
      tip: 'Se prononce comme un seul mot : "kalk". C\'est un emprunt au français, mais en anglais le "c" est dur /k/ et le "qu" final se réduit. Ne dites pas "kalk-eh" — il n\'y a pas de voyelle finale.',
    },
    {
      word: 'Anglicism',
      phonetic: '/ˈæŋɡlɪsɪzəm/',
      meaning: 'Anglicisme',
      tip: 'Accent sur la première syllabe : "ANG-gliz-em". Le "a" est ouvert comme dans "cat". Le "cis" se réduit en "siz". Le "g" est dur. Ne dites pas "an-glee-SEEZ-em".',
    },
  ],
}
