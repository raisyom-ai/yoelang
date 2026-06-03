import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C2 MASTERY — UNIT 13: SCIENTIFIC INNOVATION (c2-l61 through c2-l65)
// YOELANG English Learning App for Francophone Users
// Near-native mastery: scientific vocabulary, speculative language, frontier discourse
// ════════════════════════════════════════════════════════════════════════════════

// ─── c2-l61: Innovation Vocabulary ──────────────────────────────────────────────
export const C2_L61: LessonContent = {
  vocab: [
    { english: 'breakthrough', french: 'percée / avancée majeure', phonetic: '/ˈbreɪkθruː/', example: 'The CRISPR breakthrough has fundamentally altered the landscape of genetic medicine.', exampleTranslation: 'La percée du CRISPR a fondamentalement modifié le paysage de la médecine génétique.' },
    { english: 'paradigm shift', french: 'changement de paradigme', phonetic: '/ˈpærədaɪm ʃɪft/', example: 'Kuhn argued that paradigm shifts render previous scientific frameworks obsolete.', exampleTranslation: 'Kuhn a soutenu que les changements de paradigme rendent obsolètes les cadres scientifiques antérieurs.' },
    { english: 'frontier', french: 'frontière / avant-garde', phonetic: '/frʌnˈtɪər/', example: 'Quantum computing sits at the frontier of computational science and engineering.', exampleTranslation: "L'informatique quantique se situe à la frontière de la science et de l'ingénierie computationnelles." },
    { english: 'disruptive innovation', french: 'innovation de rupture', phonetic: '/dɪsˈrʌptɪv ˌɪnəˈveɪʃn/', example: 'Disruptive innovations often emerge from peripheral markets before upending established industries.', exampleTranslation: "Les innovations de rupture émergent souvent de marchés périphériques avant de bouleverser les industries établies." },
    { english: 'incremental advance', french: 'progrès incrémental', phonetic: '/ˌɪŋkrəˈmentl ədˈvæns/', example: 'Unlike a paradigm shift, an incremental advance builds upon existing knowledge without overturning it.', exampleTranslation: "Contrairement à un changement de paradigme, un progrès incrémental s'appuie sur les connaissances existantes sans les renverser." },
  ],
  grammar: {
    title: 'Le langage de la spéculation scientifique : modalité épistémique et atténuation',
    explanation: 'Le discours scientifique de pointe exige une grande précision modale pour exprimer des hypothèses sans les présenter comme des certitudes. Les outils clés sont : (1) Les modaux épistémiques : « may », « might », « could » pour la possibilité ; « should » pour la probabilité ; « must » pour la déduction logique ; (2) Les atténuateurs (hedging) : « it would appear that », « the evidence suggests », « one might argue », « it remains to be seen whether » ; (3) Les constructions conditionnelles avancées : « Were this hypothesis to hold... », « Should further data corroborate... » ; (4) Le futur de probabilité : « is likely to », « is bound to », « is poised to ». Un francophone a tendance à utiliser trop souvent « will » (certitude) là où un anglophone scientifique dirait « may well » ou « is expected to ».',
    examples: [
      { sentence: 'The findings would seem to suggest that neutrino oscillations occur more frequently than previously hypothesised.', translation: 'Les résultats sembleraient indiquer que les oscillations de neutrinos se produisent plus fréquemment que ce qui était précédemment hypothéqué.', isCorrect: true },
      { sentence: 'This breakthrough will definitely revolutionise the entire field overnight.', translation: '', isCorrect: false },
      { sentence: 'Were the gravitational wave data to be replicated, it could well upend our understanding of spacetime.', translation: 'Si les données des ondes gravitationnelles devaient être répliquées, cela pourrait bien bouleverser notre compréhension de l\'espace-temps.', isCorrect: true },
      { sentence: 'One might reasonably argue that the current model is poised for significant revision.', translation: 'On pourrait raisonnablement soutenir que le modèle actuel est sur le point d\'être significativement révisé.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'This breakthrough will definitely revolutionise the entire field overnight.', correct: 'This breakthrough may well revolutionise the field in the coming years.', explanation: 'En discours scientifique, évitez les affirmations catégoriques (« will definitely »). Préférez « may well », « is likely to », ou « could potentially ». La prudence épistémique est une norme académique.' },
      { wrong: 'The data prove that the hypothesis is true.', correct: 'The data appear to support the hypothesis. / The evidence lends credence to the hypothesis.', explanation: 'En anglais scientifique, on ne « prouve » (prove) jamais définitivement — on « soutient » (support), on « corrobore » (corroborate), ou les données « suggèrent » (suggest). C\'est une convention fondamentale du registre académique.' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Achebe', role: 'A', text: 'The latest preprint from the CERN consortium would appear to challenge the Standard Model in rather fundamental ways.', translation: 'Le dernier préprint du consortium du CERN semblerait remettre en question le Modèle Standard de manière plutôt fondamentale.' },
    { speaker: 'Dr. Lavigne', role: 'B', text: 'Indeed. Though one might argue the anomalies could yet be attributed to systematic error — it remains to be seen whether they\'ll be replicated.', translation: 'En effet. Bien qu\'on puisse soutenir que les anomalies pourraient encore être attribuées à l\'erreur systématique — il reste à voir si elles seront répliquées.' },
    { speaker: 'Prof. Achebe', role: 'A', text: 'Fair point. But were the data to hold up under scrutiny, we could well be looking at a genuine paradigm shift.', translation: 'Juste. Mais si les données résistaient à l\'examen minutieux, nous pourrions bien être face à un véritable changement de paradigme.' },
    { speaker: 'Dr. Lavigne', role: 'B', text: 'A Kuhnian revolution in particle physics — that would be extraordinary. The implications for cosmology would be staggering.', translation: 'Une révolution kuhnienne en physique des particules — ce serait extraordinaire. Les implications pour la cosmologie seraient stupéfiantes.' },
    { speaker: 'Prof. Achebe', role: 'A', text: 'Precisely. And the frontier areas — dark matter, quantum gravity — might suddenly become tractable in ways we can scarcely imagine.', translation: 'Précisément. Et les zones frontières — matière noire, gravité quantique — pourraient soudainement devenir abordables de façons qu\'on peut à peine imaginer.' },
    { speaker: 'Dr. Lavigne', role: 'B', text: 'One can hope. Though I suspect we\'re more likely to see incremental advances in the near term — disruptive innovation tends to be a retrospective judgement.', translation: 'On peut l\'espérer. Bien que je soupçonne que nous verrons plutôt des progrès incrémentaux à court terme — l\'innovation de rupture est souvent un jugement rétrospectif.' },
    { speaker: 'Prof. Achebe', role: 'A', text: 'Wisely put. As Planck himself observed, science advances one funeral at a time — paradigms don\'t shift without resistance.', translation: 'Sagement dit. Comme Planck lui-même l\'observait, la science avance un enterrement à la fois — les paradigmes ne changent pas sans résistance.' },
  ],
  conversationTitle: 'À la frontière de la physique : percées et paradigmes',
  pronunciation: [
    { word: 'Breakthrough', phonetic: '/ˈbreɪkθruː/', meaning: 'Percée', tip: 'Le « th » est interdental : langue entre les dents, soufflez. Ne dites pas « brék-rou ». L\'accent est sur « break » : « BRÉK-throu ».' },
    { word: 'Paradigm', phonetic: '/ˈpærədaɪm/', meaning: 'Paradigme', tip: 'Prononcez « PA-ruh-daïm » — le « dig » se prononce « daïm » (comme « dime »). Ne dites PAS « pa-ra-digm » à la française. L\'accent est sur la première syllabe.' },
    { word: 'Hypothesis', phonetic: '/haɪˈpɒθəsɪs/', meaning: 'Hypothèse', tip: 'L\'accent est sur la DEUXIÈME syllabe : « hi-PO-thuh-sis ». Le « th » est expiré. Le « y » initial se prononce comme un « i » long : « haï ».' },
    { word: 'Corroborate', phonetic: '/kəˈrɒbəreɪt/', meaning: 'Corroborer', tip: 'Prononcez « kuh-ROB-uh-rayt » — l\'accent est sur « rob ». Ne dites pas « ko-ro-bo-rate » à la française. Les trois « o » se prononcent différemment.' },
  ],
}

// ─── c2-l62: Frontier Language ──────────────────────────────────────────────────
export const C2_L62: LessonContent = {
  vocab: [
    { english: 'to extrapolate', french: 'extrapoler', phonetic: '/ɪkˈstræpəleɪt/', example: 'It would be premature to extrapolate these preliminary findings to the broader population.', exampleTranslation: 'Il serait prématuré d\'extrapoler ces résultats préliminaires à la population plus large.' },
    { english: 'proof of concept', french: 'preuve de concept', phonetic: '/pruːf əv ˈkɒnsept/', example: 'The prototype serves as a proof of concept, though scalability remains a significant hurdle.', exampleTranslation: 'Le prototype sert de preuve de concept, bien que l\'évolutivité reste un obstacle majeur.' },
    { english: 'to catalyse', french: 'catalyser', phonetic: '/ˈkætəlaɪz/', example: 'The convergence of AI and biotechnology has catalysed an entirely new research paradigm.', exampleTranslation: 'La convergence de l\'IA et de la biotechnologie a catalysé un tout nouveau paradigme de recherche.' },
    { english: 'epistemic', french: 'épistémique / relatif à la connaissance', phonetic: '/ˌepɪˈstemɪk/', example: 'There are profound epistemic limitations to what we can infer from observational data alone.', exampleTranslation: 'Il existe de profondes limitations épistémiques à ce que nous pouvons déduire des seules données observationnelles.' },
    { english: 'Groundbreaking', french: 'Pionnier / Innovant', phonetic: '/ˈɡraʊndˌbreɪkɪŋ/', example: 'The groundbreaking discovery challenged decades of established orthodoxy and opened an entirely new avenue of inquiry.', exampleTranslation: 'La découverte pionnière a remis en question des décennies d\'orthodoxie établie et ouvert une voie de recherche entièrement nouvelle.' },
  ],
  grammar: {
    title: 'Le future perfect continuous et les constructions spéculatives avancées',
    explanation: 'Pour discuter de processus scientifiques en cours qui se prolongeront dans l\'avenir, le future perfect continuous est indispensable : « will have been + V-ing ». Il exprime la durée d\'une action projetée à un point futur. Forme : « By 2040, researchers will have been investigating this phenomenon for over three decades. » Les constructions spéculatives avancées complètent cet outil : (1) L\'inversion conditionnelle : « Should these results be confirmed... » (= If these results are confirmed...) ; « Were we to discover... » (= If we were to discover...) ; « Had the experiment been designed differently... » (= If the experiment had been designed differently...) ; (2) Les propositions concessives hypothétiques : « Be that as it may... », « However compelling the data... » ; (3) Le subjonctif scientifique : « It is essential that the trial be double-blind », « We recommend that the methodology be revised ». Ces structures sont omniprésentes dans les articles scientifiques anglophones de haut niveau.',
    examples: [
      { sentence: 'By the time the long-term study concludes, scientists will have been monitoring the cohort for twenty-five years.', translation: 'Au moment où l\'étude à long terme s\'achèvera, les scientifiques auront surveillé la cohorte pendant vingt-cinq ans.', isCorrect: true },
      { sentence: 'Should the replication study yield consistent results, the theoretical framework would require substantial revision.', translation: 'Si l\'étude de réplication devait produire des résultats cohérents, le cadre théorique nécessiterait une révision substantielle.', isCorrect: true },
      { sentence: 'By next year, they will be working on this project for a decade.', translation: '', isCorrect: false },
      { sentence: 'Were we to achieve room-temperature superconductivity, the implications for energy transmission would be profound.', translation: 'Si nous parvenions à la supraconductivité à température ambiante, les implications pour la transmission d\'énergie seraient profondes.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'By next year, they will be working on this project for a decade.', correct: 'By next year, they will have been working on this project for a decade.', explanation: 'Pour exprimer la durée d\'une action qui se poursuit jusqu\'à un point futur, il faut le future perfect continuous (« will have been working »), pas le future continuous (« will be working »). Ce dernier décrit une action en cours à un moment futur, sans notion de durée.' },
      { wrong: 'If the results would be confirmed, the theory would change.', correct: 'If the results are confirmed, the theory will change. / Should the results be confirmed, the theory would change.', explanation: 'On n\'utilise jamais « would » dans la protase (la condition « if »). Utilisez le présent dans la protase avec le conditionnel dans l\'apodose, ou l\'inversion conditionnelle : « Should... be confirmed, ...would change ».' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Okonkwo', role: 'A', text: 'By the time the Phase III trial concludes, we\'ll have been tracking these biomarkers for nearly eight years.', translation: 'Au moment où l\'essai de phase III s\'achèvera, nous aurons suivi ces biomarqueurs pendant près de huit ans.' },
    { speaker: 'Prof. Bergson', role: 'B', text: 'That\'s a substantial longitudinal dataset. Should the outcomes validate the early signals, the therapeutic implications could be transformative.', translation: 'C\'est un ensemble de données longitudinales conséquent. Si les résultats validaient les signaux précoces, les implications thérapeutiques pourraient être transformantes.' },
    { speaker: 'Dr. Okonkwo', role: 'A', text: 'Precisely. Though I\'d caution against extrapolating too readily — the cohort is narrower than we\'d ideally like.', translation: 'Précisément. Mais je mettrais en garde contre une extrapolation trop hâtive — la cohorte est plus restreinte que nous le souhaiterions idéalement.' },
    { speaker: 'Prof. Bergson', role: 'B', text: 'A fair epistemic caveat. Were we to generalise prematurely, we\'d risk the very credibility the field has been building.', translation: 'Une réserve épistémique juste. Si nous généralisions prématurément, nous risquerions la crédibilité même que le domaine a été en train de construire.' },
    { speaker: 'Dr. Okonkwo', role: 'A', text: 'Exactly. The groundbreaking approach we\'re employing works well as a proof of concept, but scaling it introduces variables we can\'t yet fully model.', translation: 'Exactement. L\'approche pionnière que nous employons fonctionne bien comme preuve de concept, mais la mise à l\'échelle introduit des variables que nous ne pouvons pas encore modéliser complètement.' },
    { speaker: 'Prof. Bergson', role: 'B', text: 'Then perhaps the prudent course is to treat these results as catalytic rather than definitive — they catalyse further inquiry rather than close it.', translation: 'Alors peut-être que la voie prudente est de traiter ces résultats comme catalytiques plutôt que définitifs — ils catalysent d\'autres recherches plutôt que d\'y mettre fin.' },
  ],
  conversationTitle: 'Recherche longitudinale : prudence et promesse',
  pronunciation: [
    { word: 'Extrapolate', phonetic: '/ɪkˈstræpəleɪt/', meaning: 'Extrapoler', tip: 'Prononcez « ik-STRAP-uh-layt » — l\'accent est sur « strap ». Le « x » se prononce « ks ». Ne dites pas « eks-tra-po-late ».' },
    { word: 'Epistemic', phonetic: '/ˌepɪˈstemɪk/', meaning: 'Épistémique', tip: 'Prononcez « ep-uh-STEM-ik » — l\'accent est sur « stem ». Le « e » initial est bref. Ne dites pas « é-pi-sté-mik » à la française.' },
    { word: 'Groundbreaking', phonetic: '/ˈɡraʊndˌbreɪkɪŋ/', meaning: 'Pionnier', tip: 'Accent sur "GROUND" : "GROUND-bray-king". Le "ou" comme dans "cow". Le "ea" = "ay" long comme dans "play". Le "ing" est nasal. Composé de "ground" (terrain) + "breaking" (briser) — qui brise de nouveau terrain.' },
    { word: 'Longitudinal', phonetic: '/ˌlɒndʒɪˈtjuːdɪnl/', meaning: 'Longitudinal', tip: 'Prononcez « lon-ji-TOO-di-nul » — l\'accent est sur « too ». Le « gi » se prononce « ji » comme dans « giant ». Le « al » final est réduit à « ul ».' },
  ],
}

// ─── c2-l63: Innovation Talk ────────────────────────────────────────────────────
export const C2_L63: LessonContent = {
  vocab: [
    { english: 'to proliferate', french: 'proliférer / se multiplier', phonetic: '/prəˈlɪfəreɪt/', example: 'Open-source platforms have proliferated to the point of fundamentally reshaping software development.', exampleTranslation: 'Les plateformes open source ont proliféré au point de remodeler fondamentalement le développement logiciel.' },
    { english: 'convergent evolution', french: 'évolution convergente', phonetic: '/kənˈvɜːrdʒənt ˌiːvəˈluːʃn/', example: 'The simultaneous emergence of mRNA vaccines across multiple labs exemplifies convergent evolution in research.', exampleTranslation: "L'émergence simultanée des vaccins à ARNm dans plusieurs laboratoires illustre l'évolution convergente en recherche." },
    { english: 'to obviate', french: 'rendre inutile / supprimer la nécessité de', phonetic: '/ˈɒbvieɪt/', example: 'Advances in non-invasive imaging have largely obviated the need for exploratory surgery.', exampleTranslation: 'Les progrès de l\'imagerie non invasive ont largement rendu inutile la chirurgie exploratoire.' },
    { english: 'inflection point', french: 'point d\'inflexion', phonetic: '/ɪnˈflekʃn pɔɪnt/', example: 'Many analysts regard the advent of large language models as an inflection point in the history of AI.', exampleTranslation: 'De nombreux analystes considèrent l\'avènement des grands modèles de langage comme un point d\'inflexion dans l\'histoire de l\'IA.' },
    { english: 'to calibrate', french: 'calibrer / étalonner', phonetic: '/ˈkælɪbreɪt/', example: 'Before deploying the sensor array, we must rigorously calibrate each unit against known reference standards.', exampleTranslation: 'Avant de déployer le réseau de capteurs, nous devons rigoureusement calibrer chaque unité par rapport à des normes de référence connues.' },
  ],
  grammar: {
    title: 'Les nominalisations et les constructions passives dans le discours scientifique',
    explanation: 'Le discours scientifique anglophone privilégie deux stratégies syntaxiques majeures : (1) La nominalisation — transformer un verbe ou un adjectif en nom pour présenter les processus comme des objets stables : « the proliferation of... » (au lieu de « ... proliferates »), « the convergence of... » (au lieu de « ... converges »), « the obviation of... » (au lieu de « ... obviates »). Cela confère au texte un ton plus objectif et abstrait ; (2) La voix passive — déplacer le focus de l\'agent vers le résultat ou le processus : « The experiment was replicated » (au lieu de « We replicated the experiment »), « The hypothesis has been called into question ». En anglais scientifique, le passif est la norme car il efface le chercheur individuel au profit du collectif et du résultat. Attention : un francophone sous-utilise souvent la nominalisation et surutilise le passif avec un agent explicite (« It was demonstrated by Smith that... »), là où l\'anglais préfère soit le passif sans agent (« It was demonstrated that... »), soit la nominalisation (« Smith\'s demonstration that... »).',
    examples: [
      { sentence: 'The obviation of invasive procedures represents a significant milestone in clinical practice.', translation: 'La suppression de la nécessité des procédures invasives représente un jalon significatif dans la pratique clinique.', isCorrect: true },
      { sentence: 'The proliferation of resistant strains was already being documented by researchers before the policy changed.', translation: 'La prolifération des souches résistantes était déjà documentée par les chercheurs avant le changement de politique.', isCorrect: true },
      { sentence: 'It was discovered by the team that the molecule was binding to the receptor by them.', translation: '', isCorrect: false },
      { sentence: 'Convergent evolution across independent laboratories lends considerable weight to the robustness of these findings.', translation: "L'évolution convergente entre laboratoires indépendants confère un poids considérable à la robustesse de ces résultats.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'It was discovered by the team that the molecule was binding to the receptor by them.', correct: 'The team discovered that the molecule was binding to the receptor. / It was discovered that the molecule was binding to the receptor.', explanation: 'Évitez le passif redondant avec un agent explicite ET un second passif dans la même phrase. En anglais scientifique, choisissez : actif avec agent clair, ou passif sans agent — pas les deux empilés.' },
      { wrong: 'The procedure obviates the need of surgery.', correct: 'The procedure obviates the need for surgery.', explanation: '« Obviate » se construit avec « the need for », pas « the need of ». C\'est une erreur courante car « besoin de » en français pourrait faire hésiter entre « for » et « of ».' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Diallo', role: 'A', text: 'I think we\'re at an inflection point with these gene-editing therapies — the results are proliferating across disease models.', translation: 'Je pense que nous sommes à un point d\'inflexion avec ces thérapies d\'édition génétique — les résultats prolifèrent à travers les modèles de maladie.' },
    { speaker: 'Prof. Nakamura', role: 'B', text: 'I\'d agree, though I wonder whether the convergence we\'re seeing is truly convergent evolution or simply the diffusion of a single methodological breakthrough.', translation: 'Je suis d\'accord, mais je me demande si la convergence que nous observons est une véritable évolution convergente ou simplement la diffusion d\'une seule percée méthodologique.' },
    { speaker: 'Dr. Diallo', role: 'A', text: 'That\'s a legitimate distinction. The simultaneous but independent arrival at similar solutions would be far more compelling epistemically.', translation: 'C\'est une distinction légitime. L\'arrivée simultanée mais indépendante à des solutions similaires serait beaucoup plus convaincante sur le plan épistémique.' },
    { speaker: 'Prof. Nakamura', role: 'B', text: 'Indeed. And the calibration of these therapies for diverse populations remains a non-trivial challenge — one that obviates any premature triumphalism.', translation: 'En effet. Et l\'étalonnage de ces thérapies pour des populations diverses reste un défi non négligeable — qui rend inutile tout triomphalisme prématuré.' },
    { speaker: 'Dr. Diallo', role: 'A', text: 'Well put. The history of innovation is littered with inflection points that turned out to be local maxima rather than true paradigm shifts.', translation: 'Bien dit. L\'histoire de l\'innovation est jonchée de points d\'inflexion qui se sont révélés être des maxima locaux plutôt que de véritables changements de paradigme.' },
    { speaker: 'Prof. Nakamura', role: 'B', text: 'Quite. Which is precisely why rigorous replication and careful extrapolation are not mere methodological niceties — they\'re epistemic necessities.', translation: 'Tout à fait. C\'est précisément pourquoi la réplication rigoureuse et l\'extrapolation prudente ne sont pas de simples coquetteries méthodologiques — ce sont des nécessités épistémiques.' },
  ],
  conversationTitle: 'Thérapie génique : convergence ou diffusion ?',
  pronunciation: [
    { word: 'Proliferate', phonetic: '/prəˈlɪfəreɪt/', meaning: 'Proliférer', tip: 'Prononcez « pruh-LIF-uh-rayt » — l\'accent est sur « lif ». Le « o » initial est réduit en schwa. Ne dites pas « pro-li-fé-rate ».' },
    { word: 'Obviate', phonetic: '/ˈɒbvieɪt/', meaning: 'Rendre inutile', tip: 'Prononcez « OB-vee-ayt » — l\'accent est sur la première syllabe. Le « ob » rime avec « job ». Le « vi » est court comme dans « sit ».' },
    { word: 'Inflection', phonetic: '/ɪnˈflekʃn/', meaning: 'Inflexion', tip: 'Prononcez « in-FLEK-shun » — le « ct » se prononce « ksh » comme une seule unité. L\'accent est sur « flek ». Le « ion » final est réduit.' },
    { word: 'Calibrate', phonetic: '/ˈkælɪbreɪt/', meaning: 'Calibrer', tip: 'Prononcez « KAL-uh-brayt » — l\'accent est sur la première syllabe. Le « a » est ouvert comme dans « cat ». Ne dites pas « ka-lee-brate ».' },
  ],
}

// ─── c2-l64: Paradigm Discussion ────────────────────────────────────────────────
export const C2_L64: LessonContent = {
  vocab: [
    { english: 'falsifiability', french: 'falsifiabilité / réfutabilité', phonetic: '/ˌfɒlsɪfaɪəˈbɪləti/', example: 'Popper insisted that falsifiability is the demarcation criterion between science and pseudoscience.', exampleTranslation: 'Popper insistait sur le fait que la falsifiabilité est le critère de démarcation entre la science et la pseudoscience.' },
    { english: 'incommensurable', french: 'incommensurable (Kuhn)', phonetic: '/ˌɪnkəˈmenʃərəbl/', example: 'Kuhn argued that successive paradigms are incommensurable — they cannot be directly compared on shared terms.', exampleTranslation: 'Kuhn soutenait que les paradigmes successifs sont incommensurables — ils ne peuvent être directement comparés sur des termes partagés.' },
    { english: 'to reify', french: 'réifier / chosifier', phonetic: '/ˈriːɪfaɪ/', example: 'It is a common error to reify abstract constructs such as « intelligence » as though they were tangible entities.', exampleTranslation: 'C\'est une erreur courante que de réifier des construits abstraits comme « l\'intelligence » comme s\'ils étaient des entités tangibles.' },
    { english: 'demarcation', french: 'démarcation', phonetic: '/ˌdiːmɑːrˈkeɪʃn/', example: 'The demarcation problem — distinguishing science from non-science — remains one of philosophy of science\'s central questions.', exampleTranslation: 'Le problème de la démarcation — distinguer la science de la non-science — reste l\'une des questions centrales de la philosophie des sciences.' },
    { english: 'to instantiate', french: 'instancier / réaliser concrètement', phonetic: '/ɪnˈstænʃieɪt/', example: 'The experimental setup instantiates the theoretical model under controlled laboratory conditions.', exampleTranslation: 'Le dispositif expérimental instancie le modèle théorique dans des conditions de laboratoire contrôlées.' },
  ],
  grammar: {
    title: 'La transitivité scientifique et les verbes à complémentation complexe',
    explanation: 'Le discours scientifique de haut niveau emploie des verbes à structure de complémentation particulièrement riche : (1) Verbes de cognition scientifique + complétive : « argue that... », « demonstrate that... », « hypothesise that... », « postulate that... », « contend that... » ; (2) Verbes factitatifs + objet + attribut : « render X obsolete », « prove X unfounded », « deem X inadmissible », « consider X essential » ; (3) Verbes d\'émergence + nominalisation : « give rise to », « pave the way for », « lay the groundwork for », « set the stage for » ; (4) Les constructions absolues : « All else being equal... », « The data notwithstanding... », « Such findings notwithstanding... ». L\'erreur typique du francophone est d\'utiliser des structures trop simples là où l\'anglais scientifique exige une complémentation verbale élaborée. Par exemple, « This proves the theory is wrong » (trop direct) devient « This renders the theory untenable » (plus précis et académique).',
    examples: [
      { sentence: 'The anomalous results render the prevailing hypothesis untenable without additional ad hoc modifications.', translation: 'Les résultats anomalies rendent l\'hypothèse dominante intenable sans modifications ad hoc supplémentaires.', isCorrect: true },
      { sentence: 'Kuhn contended that scientific revolutions constitute a gestalt shift rather than a linear accumulation of knowledge.', translation: 'Kuhn soutenait que les révolutions scientifiques constituent un changement de gestalt plutôt qu\'une accumulation linéaire de connaissances.', isCorrect: true },
      { sentence: 'This makes the theory to be wrong.', translation: '', isCorrect: false },
      { sentence: 'The novel methodology has paved the way for a more rigorous instantiation of the theoretical framework.', translation: 'La nouvelle méthodologie a ouvert la voie à une instanciation plus rigoureuse du cadre théorique.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'This makes the theory to be wrong.', correct: 'This renders the theory untenable. / This proves the theory wrong.', explanation: 'Les verbes factitatifs comme « render », « make », « prove » prennent un objet + adjectif ou participe passé SANS « to be » : « renders it untenable », pas « renders it to be untenable ». L\'ajout de « to be » est une interférence du français « rend la théorie être fausse ».' },
      { wrong: 'Kuhn said that the paradigms are incommensurable.', correct: 'Kuhn argued / contended / maintained that paradigms are incommensurable.', explanation: 'En discours académique, « said » est trop faible et informe. Utilisez des verbes de cognition scientifique précis : « argued » (a soutenu), « contended » (a prétendu), « maintained » (a maintenu), « posited » (a posé).' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Mensah', role: 'A', text: 'The crux of the matter, it seems to me, is whether falsifiability remains a viable demarcation criterion in the age of string theory.', translation: 'Le nœud du problème, me semble-t-il, est de savoir si la falsifiabilité reste un critère de démarcation viable à l\'ère de la théorie des cordes.' },
    { speaker: 'Dr. Petrov', role: 'B', text: 'A perennial debate. The string theorists contend that mathematical elegance and internal consistency suffice — the Popperians deem that insufficient.', translation: 'Un débat éternel. Les théoriciens des cordes soutiennent que l\'élégance mathématique et la cohérence interne suffisent — les poppériens jugent cela insuffisant.' },
    { speaker: 'Prof. Mensah', role: 'A', text: 'And that raises the deeper question of whether the paradigms are incommensurable — whether they\'re even arguing on shared epistemic terrain.', translation: 'Et cela soulève la question plus profonde de savoir si les paradigmes sont incommensurables — s\'ils argumentent même sur un terrain épistémique partagé.' },
    { speaker: 'Dr. Petrov', role: 'B', text: 'Precisely. One might argue that to reify « falsifiability » as an immutable boundary is itself a kind of paradigm-dependent judgement.', translation: 'Précisément. On pourrait soutenir que réifier la « falsifiabilité » comme frontière immuable est elle-même une sorte de jugement dépendant du paradigme.' },
    { speaker: 'Prof. Mensah', role: 'A', text: 'Well, that\'s a wonderfully reflexive point. The demarcation criterion itself stands in need of demarcation, as it were.', translation: 'Eh bien, c\'est un point merveilleusement réflexif. Le critère de démarcation lui-même a besoin d\'être délimité, pour ainsi dire.' },
    { speaker: 'Dr. Petrov', role: 'B', text: 'Indeed. And yet we must instantiate our epistemic standards somehow — pure scepticism renders all inquiry meaningless.', translation: 'En effet. Et pourtant nous devons bien instancier nos normes épistémiques d\'une manière ou d\'une autre — le scepticisme pur rend toute enquête dépourvue de sens.' },
  ],
  conversationTitle: 'Philosophie des sciences : démarcation et paradigmes',
  pronunciation: [
    { word: 'Falsifiability', phonetic: '/ˌfɒlsɪfaɪəˈbɪləti/', meaning: 'Falsifiabilité', tip: 'Mot long à 6 syllabes : « fol-si-fai-uh-BIL-uh-ti ». L\'accent principal est sur « bil ». Le « a » de « fa » est court comme dans « hot ».' },
    { word: 'Incommensurable', phonetic: '/ˌɪnkəˈmenʃərəbl/', meaning: 'Incommensurable', tip: 'Prononcez « in-kuh-MEN-shuh-ruh-bl » — l\'accent est sur « men ». Le « com » est réduit en schwa. Le « sur » se prononce « shuh ».' },
    { word: 'Reify', phonetic: '/ˈriːɪfaɪ/', meaning: 'Réifier', tip: 'Prononcez « REE-i-fai » — trois syllabes seulement. Le « ei » est un « i » long suivi du schwa « i ». Ne dites pas « ré-i-fi » à la française.' },
    { word: 'Instantiate', phonetic: '/ɪnˈstænʃieɪt/', meaning: 'Instancier', tip: 'Prononcez « in-STAN-shee-ayt » — l\'accent est sur « stan ». Le « ti » se prononce « shi » comme dans « station ». Ne dites pas « in-stan-si-ate ».' },
  ],
}

// ─── c2-l65: Innovation Sounds ──────────────────────────────────────────────────
export const C2_L65: LessonContent = {
  vocab: [
    { english: 'to operationalise', french: 'opérationnaliser', phonetic: '/ˌɒpəˈræʃənəlaɪz/', example: 'Before the study can proceed, we must operationalise the construct in measurable, replicable terms.', exampleTranslation: 'Avant que l\'étude puisse se poursuivre, nous devons opérationnaliser le construit en termes mesurables et réplicables.' },
    { english: 'to disambiguate', french: 'désambiguïser', phonetic: '/ˌdɪsæmˈbɪɡjueɪt/', example: 'The terminology must be disambiguated to prevent conflation of related but distinct phenomena.', exampleTranslation: 'La terminologie doit être désambiguïsée pour éviter la confusion de phénomènes liés mais distincts.' },
    { english: 'explanandum', french: 'expliquandum / chose à expliquer', phonetic: '/ˌekspləˈnændəm/', example: 'The explanandum must be clearly circumscribed before any hypothesis is ventured.', exampleTranslation: 'L\'expliquandum doit être clairement délimité avant qu\'aucune hypothèse ne soit avancée.' },
    { english: 'to derogate', french: 'déroger / discréditer', phonetic: '/ˈderəɡeɪt/', example: 'Nothing in the supplementary data should be taken to derogate from the strength of the primary findings.', exampleTranslation: 'Rien dans les données complémentaires ne doit être considéré comme dérogeant à la force des résultats principaux.' },
    { english: 'to adjudicate', french: 'adjuger / trancher (entre des théories)', phonetic: '/əˈdʒuːdɪkeɪt/', example: 'Further empirical evidence will be required to adjudicate between the competing theoretical models.', exampleTranslation: 'Des preuves empiriques supplémentaires seront nécessaires pour trancher entre les modèles théoriques concurrents.' },
  ],
  grammar: {
    title: 'Le registre technique : précision lexicale, concision et conventions de l\'écrit scientifique',
    explanation: 'Le registre technique en anglais scientifique se caractérise par trois principes : (1) La précision lexicale — chaque terme a un sens technique spécifique qu\'il ne faut pas confondre avec son usage courant : « significant » = statistiquement significatif (pas simplement « important ») ; « robust » = résistant à la variation des conditions (pas simplement « solide ») ; « valid » = mesurant bien ce qu\'il prétend mesurer (pas simplement « correct ») ; (2) La concision — le style scientifique privilégie la densité informationnelle : « the method obviates the need for X » plutôt que « the method means that you don\'t need X anymore » ; « X correlates with Y » plutôt que « X and Y seem to go together » ; (3) Les conventions de l\'écrit scientifique — le « hedging » systématique (atténuation), la voix passive sans agent pour les méthodologies, les nominalisations pour les résultats. Un francophone tend à être trop direct, trop verbeux, ou à utiliser des faux amis entre le français et l\'anglais scientifique (« important » ≠ « significant », « expérience » ≠ « experiment » (experiment = expérience scientifique, experience = vécu)).',
    examples: [
      { sentence: 'The correlation between variables X and Y is significant at the p < 0.01 level, suggesting a robust association.', translation: 'La corrélation entre les variables X et Y est significative au seuil p < 0,01, ce qui suggère une association robuste.', isCorrect: true },
      { sentence: 'The experiment was really important and the results are very significant.', translation: '', isCorrect: false },
      { sentence: 'To adjudicate between these competing accounts, we operationalised the construct across three independent measures.', translation: 'Pour trancher entre ces explications concurrentes, nous avons opérationnalisé le construit à travers trois mesures indépendantes.' , isCorrect: true },
      { sentence: 'Ambiguity in the dependent variable disambiguates the need for further calibration.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'The experiment was really important and the results are very significant.', correct: 'The experiment yielded significant results (p < 0.01) with important theoretical implications.', explanation: 'Dans un contexte scientifique, « significant » signifie « statistiquement significatif », pas simplement « important ». Et « important » ne doit pas être utilisé comme synonyme de « significant ». Soyez précis : indiquez le seuil statistique ou utilisez « substantial », « considerable » pour l\'importance qualitative.' },
      { wrong: 'Ambiguity in the dependent variable disambiguates the need for further calibration.', correct: 'Ambiguity in the dependent variable necessitates further calibration. / The dependent variable must be disambiguated before further calibration.', explanation: '« Disambiguate » signifie « rendre non ambigu » — on ne peut pas « désambiguïser un besoin ». Le mot est mal employé ici. L\'erreur vient d\'une méconnaissance du sens technique précis du terme.' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Yared', role: 'A', text: 'Before we proceed, we need to operationalise « resilience » in a way that disambiguates it from mere recovery.', translation: 'Avant de continuer, nous devons opérationnaliser « résilience » d\'une manière qui la distingue de la simple récupération.' },
    { speaker: 'Dr. Fontaine', role: 'B', text: 'Agreed. The conflation of those constructs has derogated from the clarity of prior studies. Our explanandum must be tightly scoped.', translation: 'D\'accord. La confusion de ces construits a nui à la clarté des études antérieures. Notre expliquandum doit être strictement délimité.' },
    { speaker: 'Prof. Yared', role: 'A', text: 'Quite. And we\'ll need independent replications to adjudicate between the competing models — the field has been awash in underpowered studies.', translation: 'Tout à fait. Et nous aurons besoin de répliques indépendantes pour trancher entre les modèles concurrents — le domaine a été inondé d\' études sous-dimensionnées.' },
    { speaker: 'Dr. Fontaine', role: 'B', text: 'The operationalisation will need to be robust across cultures, too. What counts as « resilience » in a Scandinavian context may not instantiate identically in a Sahelian one.', translation: 'L\'opérationnalisation devra aussi être robuste d\'une culture à l\'autre. Ce qui compte comme « résilience » dans un contexte scandinave peut ne pas s\'instancier de manière identique dans un contexte sahélien.' },
    { speaker: 'Prof. Yared', role: 'A', text: 'An astute observation. Cross-cultural validity is not merely a methodological nicety — it\'s an epistemic requirement if we\'re to claim generality.', translation: 'Une observation astucieuse. La validité interculturelle n\'est pas une simple coquetterie méthodologique — c\'est une exigence épistémique si nous voulons revendiquer la généralité.' },
    { speaker: 'Dr. Fontaine', role: 'B', text: 'Then let us calibrate the instrument accordingly. Precision in language is, after all, the prerequisite for precision in thought.', translation: 'Alors calibrons l\'instrument en conséquence. La précision du langage est, après tout, la condition préalable à la précision de la pensée.' },
  ],
  conversationTitle: 'Résilience et rigueur : opérationnaliser avec précision',
  pronunciation: [
    { word: 'Operationalise', phonetic: '/ˌɒpəˈræʃənəlaɪz/', meaning: 'Opérationnaliser', tip: 'Prononcez « op-uh-RAY-shun-uh-laiz » — l\'accent est sur « ray ». Le « o » initial est ouvert comme dans « hot ». Le mot a 6 syllabes en anglais.' },
    { word: 'Disambiguate', phonetic: '/ˌdɪsæmˈbɪɡjueɪt/', meaning: 'Désambiguïser', tip: 'Prononcez « dis-am-BIG-yoo-ayt » — l\'accent est sur « big ». Le « gu » se prononce « gy » comme dans « argue ». C\'est un mot technique mais de plus en plus courant en sciences.' },
    { word: 'Explanandum', phonetic: '/ˌekspləˈnændəm/', meaning: 'Expliquandum', tip: 'Prononcez « ek-spluh-NAN-dum » — l\'accent est sur « nan ». C\'est un terme latin emprunté par la philosophie des sciences. Le « um » final est clair, comme en latin.' },
    { word: 'Adjudicate', phonetic: '/əˈdʒuːdɪkeɪt/', meaning: 'Trancher', tip: 'Prononcez « uh-DOO-di-kayt » — l\'accent est sur « doo ». Le « j » se prononce « dj » doux. En contexte scientifique, il signifie « trancher entre des théories concurrentes ».' },
  ],
}
