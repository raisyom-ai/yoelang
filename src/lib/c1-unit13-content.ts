import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C1 ADVANCED — UNIT 13: MEDIA ANALYSIS (c1-l61 through c1-l65)
// YOELANG English Learning App for Francophone Users
// Advanced: media vocabulary, bias detection, editorial analysis, media critique
// ════════════════════════════════════════════════════════════════════════════════

// ─── c1-l61: Media Vocabulary ──────────────────────────────────────────────────
export const C1_L61: LessonContent = {
  vocab: [
    { english: 'bias', french: 'parti pris / biais', phonetic: '/ˈbaɪəs/', example: 'The article displayed a clear bias in favour of the incumbent government.', exampleTranslation: 'L\'article affichait un parti pris clair en faveur du gouvernement sortant.' },
    { english: 'framing', french: 'cadrage (médiatique)', phonetic: '/ˈfreɪmɪŋ/', example: 'The framing of the story as a national crisis influenced public perception.', exampleTranslation: 'Le cadrage de l\'histoire comme une crise nationale a influencé la perception du public.' },
    { english: 'editorial', french: 'éditorial', phonetic: '/ˌedɪˈtɔːriəl/', example: 'The newspaper\'s editorial condemned the new surveillance legislation.', exampleTranslation: 'L\'éditorial du journal a condamné la nouvelle législation sur la surveillance.' },
    { english: 'spin', french: 'communication orientée / torsion médiatique', phonetic: '/spɪn/', example: 'The minister\'s team put a positive spin on the disastrous unemployment figures.', exampleTranslation: 'L\'équipe du ministre a donné une tournure positive aux chiffres désastreux du chômage.' },
    { english: 'narrative', french: 'récit / narration', phonetic: '/ˈnærətɪv/', example: 'Competing narratives emerged about the causes of the protest.', exampleTranslation: 'Des récits concurrents ont émergé sur les causes de la protestation.' },
  ],
  grammar: {
    title: 'Le vocabulaire des médias : nuances entre information, interprétation et manipulation',
    explanation: 'Le lexique médiatique anglais distingue subtilement entre la présentation des faits et leur manipulation : (1) « Bias » ≠ « prejudice » ≠ « discrimination » : le bias est une inclinaison systématique (souvent inconsciente) dans la sélection ou présentation de l\'information ; le prejudice est un préjugé personnel ; la discrimination est un acte discriminatoire. « Bias » est indénombrable — on dit « a clear bias », pas « a bias ». (2) « Framing » est le cadrage médiatique : la manière dont un média choisit de présenter une histoire pour orienter l\'interprétation. « Framing the debate as... » = cadrer le débat comme. (3) « Editorial » a deux sens : un article de fond signé exprimant l\'opinion du journal (nom) ; et ce qui relève de la ligne éditoriale (adjectif). « An editorial decision » ≠ « an editorial » (l\'article). (4) « Spin » est la torsion délibérée de l\'information : « to put a spin on » = donner une orientation à. Un « spin doctor » est un conseiller en communication politique. (5) « Narrative » ≠ « story » : un narrative est un cadre interprétatif global qui donne sens aux événements ; un story est un récit factuel. On dit « the dominant narrative » = le récit dominant.',
    examples: [
      { sentence: 'The channel\'s framing of the protest as a riot shaped viewers\' understanding of the event.', translation: 'Le cadrage de la chaîne sur la protestation comme une émeute a façonné la compréhension des téléspectateurs.', isCorrect: true },
      { sentence: 'The editorial board decided to endorse the candidate, which was reflected in their editorial.', translation: 'Le comité éditorial a décidé de soutenir le candidat, ce qui s\'est reflété dans leur éditorial.', isCorrect: true },
      { sentence: 'The spokesperson put a spin on the report to minimise the environmental damage.', translation: 'Le porte-parole a donné une tournure au rapport pour minimiser les dégâts environnementaux.', isCorrect: true },
      { sentence: 'The journalist had many biases against the policy.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'The journalist had many biases against the policy.', correct: 'The journalist had a strong bias against the policy.', explanation: '« Bias » est généralement indénombrable — on dit « a bias » (un parti pris) ou « strong bias », pas « many biases ». Le pluriel « biases » existe mais est rare et technique (pour désigner des biais distincts et mesurables).' },
      { wrong: 'The newspaper wrote a spin about the event.', correct: 'The newspaper put a spin on the event.', explanation: '« Spin » ne s\'utilise pas comme un simple article. On dit « to put a spin on something » = donner une orientation à quelque chose. Ce n\'est pas un objet éditorial mais une stratégie de communication.' },
    ],
  },
  conversation: [
    { speaker: 'Journalist Amara', role: 'A', text: 'Have you noticed the framing in last night\'s broadcast? They led with the looting, not the peaceful march.', translation: 'Avez-vous remarqué le cadrage dans le journal de la nuit dernière ? Ils ont commencé par le pillage, pas la marche pacifique.' },
    { speaker: 'Editor Whitfield', role: 'B', text: 'I did. That kind of editorial choice reinforces a specific narrative — one that delegitimises the protest.', translation: 'Oui. Ce genre de choix éditorial renforce un récit spécifique — un qui délégitime la protestation.' },
    { speaker: 'Journalist Amara', role: 'A', text: 'It\'s not just bias — it\'s a deliberate spin. The police response was disproportionate, yet it was barely mentioned.', translation: 'Ce n\'est pas juste un parti pris — c\'est une torsion délibérée. La réponse de la police était disproportionnée, pourtant elle a été à peine mentionnée.' },
    { speaker: 'Editor Whitfield', role: 'B', text: 'That\'s the power of framing. What you lead with, what you bury on page twelve — it all constructs the narrative.', translation: 'C\'est la puissance du cadrage. Ce que vous mettez en tête, ce que vous enfouissez en page douze — tout cela construit le récit.' },
    { speaker: 'Journalist Amara', role: 'A', text: 'Our editorial should challenge that narrative. We need to present the full timeline, not just the inflammatory clips.', translation: 'Notre éditorial devrait contester ce récit. Nous devons présenter la chronologie complète, pas seulement les images incendiaires.' },
    { speaker: 'Editor Whitfield', role: 'B', text: 'Agreed. Let\'s draft it together. A responsible editorial doesn\'t just counter spin — it exposes the framing.', translation: 'D\'accord. Rédigeons-le ensemble. Un éditorial responsable ne se contente pas de contrer la torsion médiatique — il expose le cadrage.' },
  ],
  conversationTitle: 'Déconstruction médiatique : cadrage, parti pris et torsion de l\'information',
  pronunciation: [
    { word: 'Bias', phonetic: '/ˈbaɪəs/', meaning: 'Parti pris', tip: 'Prononcez « BY-uhss » — l\'accent est sur « BY ». Le « i » est un « aï » ouvert. Le « as » final se réduit en « uhss ». Ne dites pas « bee-AHSS ».' },
    { word: 'Framing', phonetic: '/ˈfreɪmɪŋ/', meaning: 'Cadrage', tip: 'L\'accent est sur « FRAME » : « FRAY-ming ». Le « a » est un diphtongue « ey ». Le « -ing » est nasal léger. Ne dites pas « fra-ming ».' },
    { word: 'Editorial', phonetic: '/ˌedɪˈtɔːriəl/', meaning: 'Éditorial', tip: 'L\'accent est sur « TOR » : « ed-ih-TOR-ee-ul ». Ne mettez pas l\'accent sur « ed » comme en français « éditorial ». La syllabe forte est clairement « TOR ».' },
    { word: 'Narrative', phonetic: '/ˈnærətɪv/', meaning: 'Récit', tip: 'L\'accent est sur « NA » : « NA-ruh-tiv ». Le « a » est ouvert comme dans « cat ». Le « rr » n\'est pas roulé — c\'s un « r » anglais doux.' },
  ],
}

// ─── c1-l62: Bias Detection ────────────────────────────────────────────────────
export const C1_L62: LessonContent = {
  vocab: [
    { english: 'loaded language', french: 'langage chargé / orienté', phonetic: '/ˈloʊdɪd ˈlæŋɡwɪdʒ/', example: 'The use of « regime » instead of « government » is an example of loaded language.', exampleTranslation: 'L\'utilisation de « régime » au lieu de « gouvernement » est un exemple de langage chargé.' },
    { english: 'weasel words', french: 'mots belette / formulations évasives', phonetic: '/ˈwiːzəl wɜːrdz/', example: 'The phrase « up to » in « savings of up to 50% » is a classic weasel word.', exampleTranslation: 'L\'expression « jusqu\'à » dans « des économies allant jusqu\'à 50 % » est un mot belette classique.' },
    { english: 'to obscure agency', french: 'occulter l\'agentivité / dissimuler la responsabilité', phonetic: '/əbˈskjʊər ˈeɪdʒənsi/', example: 'Passive voice is often used to obscure agency in political reporting.', exampleTranslation: 'La voix passive est souvent utilisée pour occulter l\'agentivité dans le reportage politique.' },
    { english: 'nominalisation', french: 'nominalisation', phonetic: '/ˌnɒmɪnəlaɪˈzeɪʃn/', example: 'Nominalisation turns « The government cut funding » into « Funding cuts occurred ».', exampleTranslation: 'La nominalisation transforme « Le gouvernement a réduit le financement » en « Des réductions de financement se sont produites ».' },
    { english: 'presupposition', french: 'présupposition', phonetic: '/ˌpriːsʌpəˈzɪʃn/', example: 'The headline « Controversial policy faces backlash » contains a presupposition that the policy is inherently controversial.', exampleTranslation: 'Le titre « Politique controversée : contrecoup » contient une présupposition que la politique est intrinsèquement controversée.' },
  ],
  grammar: {
    title: 'Les marqueurs linguistiques du biais : langage chargé, mots belette, passif, nominalisation et présupposition',
    explanation: 'Savoir repérer le biais linguistique est essentiel pour une lecture critique des médias anglophones : (1) Le langage chargé (loaded language) : des mots connotés émotionnellement qui orientent le lecteur. « Regime » (négatif) vs « government » (neutre) ; « freedom fighter » (positif) vs « insurgent » (négatif) ; « tax relief » (soulagement) vs « tax cut » (neutre). (2) Les mots belette (weasel words) : des formulations qui semblent précises mais vident le propos de substance. « Many people say... » (qui ?) ; « Studies suggest... » (lesquelles ?) ; « Up to... » (donc potentiellement zéro). (3) Le passif pour occulter l\'agentivité : « Mistakes were made » (par qui ?) ; « The city was bombed » (par qui ?). En français, on fait de même mais c\'est encore plus courant en anglais car la voix passive est plus naturelle. (4) La nominalisation pour masquer la responsabilité : « The police killed the protester » → « A protester death occurred ». L\'action disparaît, l\'agent disparaît, il ne reste qu\'un événement sans responsable. (5) La présupposition : insinuer comme allant de soi ce qui devrait être débattu. « The failed policy... » présuppose que la politique a échoué sans le démontrer. « Despite concerns about... » présuppose qu\'il y a des préoccupations légitimes.',
    examples: [
      { sentence: 'The regime cracked down on protesters, sparking international condemnation.', translation: 'Le régime a réprimé les manifestants, suscitant la condamnation internationale.', isCorrect: true },
      { sentence: 'Mistakes were made during the operation, according to several officials.', translation: 'Des erreurs ont été commises pendant l\'opération, selon plusieurs responsables.', isCorrect: true },
      { sentence: 'The controversial law was challenged in court.', translation: 'La loi controversée a été contestée devant les tribunaux.', isCorrect: true },
      { sentence: 'Many experts believe the policy is wrong, so it must be changed.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'Many experts believe the policy is wrong, so it must be changed.', correct: 'The appeal to unnamed experts is a weasel-word fallacy. One must identify the experts before drawing conclusions.', explanation: '« Many experts believe » est un mot belette typique : sans nommer les experts, l\'affirmation est vide. De plus, « so it must be changed » est une conclusion non démontrée (argumentum ad verecundiam). En analyse de biais, on doit toujours identifier la source.' },
      { wrong: 'The funding cuts occurred because of the budget deficit.', correct: 'The government cut funding, citing the budget deficit.', explanation: '« Funding cuts occurred » est une nominalisation qui masque l\'agent. Qui a coupé le financement ? La version correcte restitue l\'agent (« the government ») et distingue l\'action de sa justification (« citing »).' },
    ],
  },
  conversation: [
    { speaker: 'Media Analyst Reyes', role: 'A', text: 'Look at this headline: « Clashes erupt at rally. » No agent — who clashed with whom?', translation: 'Regardez ce titre : « Affrontements au rassemblement. » Pas d\'agent — qui s\'est affronté avec qui ?' },
    { speaker: 'Professor Larsen', role: 'B', text: 'Classic agency obscuring through nominalisation. « Clashes erupt » presents violence as a natural phenomenon, not a deliberate act.', translation: 'Occultation classique de l\'agentivité par nominalisation. « Les affrontements éclatent » présente la violence comme un phénomène naturel, pas un acte délibéré.' },
    { speaker: 'Media Analyst Reyes', role: 'A', text: 'And notice the loaded language in the body text: « mobs », « thugs », versus « authorities » and « officers ». The framing couldn\'t be clearer.', translation: 'Et remarquez le langage chargé dans le corps du texte : « foules », « voyous », contre « autorités » et « agents ». Le cadrage ne pourrait pas être plus clair.' },
    { speaker: 'Professor Larsen', role: 'B', text: 'Precisely. And the weasel words — « some say the protest was orchestrated ». Who says? Name them or drop the claim.', translation: 'Précisément. Et les mots belette — « certains disent que la protestation a été orchestrée ». Qui le dit ? Nommez-les ou abandonnez l\'affirmation.' },
    { speaker: 'Media Analyst Reyes', role: 'A', text: 'There\'s also a presupposition embedded in the subheading: « Despite the violence, the march continued. » It presupposes the violence originated with the marchers.', translation: 'Il y a aussi une présupposition insérée dans le sous-titre : « En dépit de la violence, la marche a continué. » Cela présuppose que la violence venait des manifestants.' },
    { speaker: 'Professor Larsen', role: 'B', text: 'Brilliant catch. These markers are rarely noticed by casual readers — which is precisely why media literacy must be taught systematically.', translation: 'Excellente observation. Ces marqueurs sont rarement remarqués par les lecteurs ordinaires — c\'est exactement pourquoi l\'éducation aux médias doit être enseignée systématiquement.' },
  ],
  conversationTitle: 'Détection de biais : langage chargé, passif et présuppositions',
  pronunciation: [
    { word: 'Obscure', phonetic: '/əbˈskjʊər/', meaning: 'Occulter', tip: 'L\'accent est sur « SKYOO » : « ub-SKYOO-uh ». Le « ob » initial est réduit en schwa. Ne dites pas « ob-skur » à la française. Le « ur » final est très réduit.' },
    { word: 'Nominalisation', phonetic: '/ˌnɒmɪnəlaɪˈzeɪʃn/', meaning: 'Nominalisation', tip: 'L\'accent est sur « ZAY » : « nom-in-uh-lie-ZAY-shun ». C\'est un mot de 6 syllabes. La terminaison « -tion » = « shun ». Ne prononcez pas à la française « no-mi-na-li-za-sion ».' },
    { word: 'Presupposition', phonetic: '/ˌpriːsʌpəˈzɪʃn/', meaning: 'Présupposition', tip: 'L\'accent est sur « ZISH » : « pree-suh-puh-ZISH-un ». Le « pre » initial a un « i » long. La terminaison « -tion » = « shun ». L\'accent secondaire est sur « PREE ».' },
    { word: 'Weasel', phonetic: '/ˈwiːzəl/', meaning: 'Belette (mot belette)', tip: 'Prononcez « WEE-zuhl » — l\'accent est sur « WEE ». Le « ea » se prononce « ee » long. Le « l » final est sombre. Ne dites pas « oué-zel ».' },
  ],
}

// ─── c1-l63: Editorial Analysis ────────────────────────────────────────────────
export const C1_L63: LessonContent = {
  vocab: [
    { english: 'gatekeeping', french: 'fonction de gardien / filtrage éditorial', phonetic: '/ˈɡeɪtkiːpɪŋ/', example: 'Digital media has challenged traditional gatekeeping by allowing anyone to publish.', exampleTranslation: 'Les médias numériques ont remis en question le filtrage éditorial traditionnel en permettant à quiconque de publier.' },
    { english: 'to corroborate', french: 'corroborer / confirmer', phonetic: '/kəˈrɒbəreɪt/', example: 'No independent source could corroborate the whistleblower\'s claims.', exampleTranslation: 'Aucune source indépendante n\'a pu corroborer les affirmations du lanceur d\'alerte.' },
    { english: 'op-ed', french: 'tribune (libre)', phonetic: '/ˈɒped/', example: 'The former chancellor wrote an op-ed criticising the government\'s economic strategy.', exampleTranslation: 'L\'ancien chancelier a écrit une tribune critiquant la stratégie économique du gouvernement.' },
    { english: 'to run a story', french: 'publier un article / faire passer une information', phonetic: '/rʌn ə ˈstɔːri/', example: 'We decided not to run the story until we could corroborate the allegations.', exampleTranslation: 'Nous avons décidé de ne pas publier l\'article tant que nous ne pourrions pas corroborer les allégations.' },
    { english: 'to bury the lede', french: 'enterrer l\'essentiel / reléguer l\'information principale', phonetic: '/ˈberi ðə liːd/', example: 'The article buried the lede — the real scandal was hidden in the eighth paragraph.', exampleTranslation: 'L\'article a enterré l\'essentiel — le vrai scandale était caché dans le huitième paragraphe.' },
  ],
  grammar: {
    title: 'L\'analyse éditoriale : le vocabulaire des décisions journalistiques et du biais institutionnel',
    explanation: 'Le journalisme possède un vocabulaire technique qui décrit les choix éditoriaux et leurs conséquences : (1) « Gatekeeping » : le processus par lequel les médias sélectionnent ce qui est digne de publication. Un « gatekeeper » est celui qui décide ce qui passe la porte de l\'information. Le concept implique un pouvoir — celui de décider ce que le public sait ou ignore. (2) « Corroborate » ≠ « confirm » ≠ « verify » : corroborer = confirmer par une source indépendante ; confirm = confirmer la véracité ; verify = vérifier les faits. En journalisme, « corroborate » est la norme d\'or — une accusation non corroborée ne devrait pas être publiée. (3) « Op-ed » = opposite editorial page : un article d\'opinion signé, pas nécessairement aligné avec la ligne du journal. Ce n\'est PAS un éditorial (qui représente la position du journal). « Op-ed » se prononce « OP-ed », pas « oh-pé-ed ». (4) « Run a story » : en journalisme, « to run » = publier/diffuser. On dit « We ran the story » (nous avons publié l\'article), pas « we published the story » qui est moins idiomatique dans le jargon. (5) « Bury the lede » : le « lede » (orthographe journalistique, pas « lead ») est le fait principal. « Bury the lede » = cacher l\'information essentielle dans le corps de l\'article au lieu de la mettre en tête. C\'est une technique de minimisation.',
    examples: [
      { sentence: 'The editor decided to run the story after two independent sources corroborated the allegations.', translation: 'Le rédacteur en chef a décidé de publier l\'article après que deux sources indépendantes ont corroboré les allégations.', isCorrect: true },
      { sentence: 'The op-ed presented a personal viewpoint that differed from the newspaper\'s editorial position.', translation: 'La tribune présentait un point de vue personnel qui différait de la position éditoriale du journal.', isCorrect: true },
      { sentence: 'The journalist buried the lede by placing the key revelation in the final paragraph.', translation: 'Le journaliste a enterré l\'essentiel en plaçant la révélation clé dans le dernier paragraphe.', isCorrect: true },
      { sentence: 'The editor corroborated the story herself without checking any external sources.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'The editor corroborated the story herself without checking any external sources.', correct: 'The editor verified the story herself, but corroboration requires independent sources.', explanation: '« Corroborate » implique par définition une confirmation par une source indépendante et externe. On ne peut pas « corroborer soi-même » — c\'est une contradiction. On peut « verify » (vérifier) ou « confirm » (confirmer), mais « corroborate » exige l\'indépendance.' },
      { wrong: 'The newspaper published an op-ed representing their official position.', correct: 'The newspaper published an editorial representing their official position.', explanation: 'Un « op-ed » est un article d\'opinion signé par un contributeur externe qui peut contredire la ligne du journal. La position officielle du journal s\'exprime dans un « editorial », pas un « op-ed ».' },
    ],
  },
  conversation: [
    { speaker: 'Senior Editor Norton', role: 'A', text: 'We\'ve got the whistleblower story. Two sources have corroborated the financial irregularities. Do we run it?', translation: 'Nous avons l\'affaire du lanceur d\'alerte. Deux sources ont corroboré les irrégularités financières. On la publie ?' },
    { speaker: 'Managing Editor Osei', role: 'B', text: 'Two sources isn\'t three. I want one more independent corroboration before we run anything. The stakes are too high for a retraction.', translation: 'Deux sources, ce n\'est pas trois. Je veux une corroboration indépendante supplémentaire avant de publier quoi que ce soit. Les enjeux sont trop élevés pour une rétractation.' },
    { speaker: 'Senior Editor Norton', role: 'A', text: 'Understood. Meanwhile, shall we commission an op-ed from the former regulator? She\'s offered to write one.', translation: 'Compris. En attendant, devons-nous commander une tribune à l\'ancienne régulatrice ? Elle a proposé d\'en écrire une.' },
    { speaker: 'Managing Editor Osei', role: 'B', text: 'Yes, but keep it separate from the news story. I don\'t want the op-ed to look like our editorial position leaking into the reporting.', translation: 'Oui, mais gardez-la séparée de l\'article de fond. Je ne veux pas que la tribune ressemble à notre position éditoriale qui fuit dans le reportage.' },
    { speaker: 'Senior Editor Norton', role: 'A', text: 'Good call. Also — the draft buries the lede. The conflict of interest is in paragraph seven. It should be in the first two.', translation: 'Bonne décision. Aussi — le projet enterre l\'essentiel. Le conflit d\'intérêts est au paragraphe sept. Il devrait être dans les deux premiers.' },
    { speaker: 'Managing Editor Osei', role: 'B', text: 'Rewrite it. The lede goes up top. And once we have that third corroboration, we go to print. No gatekeeping for the powerful.', translation: 'Réécrivez. L\'essentiel va en tête. Et dès que nous avons la troisième corroboration, nous allons à l\'imprimerie. Pas de filtrage éditorial pour les puissants.' },
  ],
  conversationTitle: 'Décisions éditoriales : corroboration, tribunes et responsabilité journalistique',
  pronunciation: [
    { word: 'Corroborate', phonetic: '/kəˈrɒbəreɪt/', meaning: 'Corroborer', tip: 'L\'accent est sur « ROB » : « kuh-ROB-uh-rayt ». Le « co » initial est réduit en schwa. Ne dites pas « ko-ro-bo-rate » à la française.' },
    { word: 'Gatekeeping', phonetic: '/ˈɡeɪtkiːpɪŋ/', meaning: 'Filtrage éditorial', tip: 'L\'accent est sur « GATE » : « GAYT-kee-ping ». C\'est un mot composé — l\'accent va sur le premier élément. Le « keeping » est secondaire.' },
    { word: 'Op-ed', phonetic: '/ˈɒped/', meaning: 'Tribune libre', tip: 'Prononcez « OP-ed » — deux syllabes, accent sur « OP ». C\'est une abréviation de « opposite editorial ». Ne dites pas « oh-pé-ed » avec trois syllabes.' },
    { word: 'Lede', phonetic: '/liːd/', meaning: 'Essentiel (d\'un article)', tip: 'Prononcez « LEED » — rime avec « seed ». C\'est une orthographe journalistique de « lead ». Le « e » ne se prononce pas séparément — c\'est un « ee » long.' },
  ],
}

// ─── c1-l64: Media Critique ────────────────────────────────────────────────────
export const C1_L64: LessonContent = {
  vocab: [
    { english: 'to misrepresent', french: 'déformer / fausser la représentation', phonetic: '/ˌmɪsreprɪˈzent/', example: 'The documentary misrepresented the scientist\'s findings by omitting crucial caveats.', exampleTranslation: 'Le documentaire a déformé les conclusions du scientifique en omettant des réserves cruciales.' },
    { english: 'to conflate', french: 'confondre / amalgamer', phonetic: '/kənˈfleɪt/', example: 'The article conflates legal immigration with illegal border crossings to stoke fear.', exampleTranslation: 'L\'article confond l\'immigration légale avec les franchissements illégaux de frontières pour attiser la peur.' },
    { english: 'selective reporting', french: 'reportage sélectif / information partielle', phonetic: '/sɪˈlektɪv rɪˈpɔːrtɪŋ/', example: 'Selective reporting on crime statistics creates a distorted picture of public safety.', exampleTranslation: 'Le reportage sélectif sur les statistiques criminelles crée une image déformée de la sécurité publique.' },
    { english: 'false equivalence', french: 'fausse équivalence', phonetic: '/fɔːls ɪˈkwɪvələns/', example: 'Presenting one expert and one denier as equal voices is a false equivalence.', exampleTranslation: 'Présenter un expert et un négationniste comme des voix égales est une fausse équivalence.' },
    { english: 'straw man argument', french: 'épouvantail (rhétorique) / homme de paille', phonetic: '/strɔː mæn ˈɑːrɡjumənt/', example: 'The columnist attacked a straw man — nobody had actually proposed banning all cars.', exampleTranslation: 'Le chroniqueur a attaqué un épouvantail — personne n\'avait réellement proposé d\'interdire toutes les voitures.' },
  ],
  grammar: {
    title: 'Le langage de la critique médiatique : dénoncer la désinformation et les sophismes',
    explanation: 'La critique médiatique exige un vocabulaire précis pour identifier et nommer les techniques de déformation : (1) « Misrepresent » ≠ « misinterpret » ≠ « distort » : misrepresent = présenter de manière inexacte (délibéré ou non) ; misinterpret = interpréter de travers (erreur de compréhension) ; distort = déformer intentionnellement. « Misrepresent » est le terme le plus couramment utilisé en critique médiatique. (2) « Conflate » : amalgamer deux concepts distincts pour créer une confusion stratégique. « To conflate A with B » = confondre A avec B. C\'est une technique rhétorique puissante car elle fusionne deux réalités différentes en une seule image déformée. (3) « Selective reporting » : le choix délibéré de ne rapporter que les faits qui soutiennent une position. C\'est le biais par omission — ce que le média ne dit pas est aussi révélateur que ce qu\'il dit. (4) « False equivalence » : présenter deux choses comme égales alors qu\'elles ne le sont pas. Donner 50% de temps à 97% des climatologues et 50% à 3% de sceptiques crée une fausse équivalence. (5) « Straw man argument » : déformer l\'argument de l\'adversaire pour plus facilement l\'attaquer. « So you\'re saying we should just open all borders? » quand personne n\'a dit cela. Le terme vient de l\'entraînement au combat contre un mannequin de paille.',
    examples: [
      { sentence: 'The programme conflated correlation with causation, misleading viewers about the study\'s actual conclusions.', translation: 'L\'émission a confondu corrélation et causalité, induisant les téléspectateurs en erreur sur les conclusions réelles de l\'étude.', isCorrect: true },
      { sentence: 'By giving equal airtime to both sides, the debate created a false equivalence between established science and fringe theories.', translation: 'En accordant un temps d\'antenne égal aux deux camps, le débat a créé une fausse équivalence entre la science établie et les théories marginales.', isCorrect: true },
      { sentence: 'The editorial misrepresented the proposal by attacking a straw man version of it.', translation: 'L\'éditorial a déformé la proposition en attaquant une version épouvantail de celle-ci.', isCorrect: true },
      { sentence: 'The journalist distorted the facts, so they misrepresent accidentally.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'The journalist distorted the facts, so they misrepresent accidentally.', correct: 'The journalist misrepresented the facts — whether deliberately or through negligence, the effect is the same.', explanation: '« Distort » implique une déformation intentionnelle, donc la phrase est contradictoire (« distorted... accidentally »). « Misrepresent » peut être intentionnel ou non. Il faut choisir le terme adapté : « distort » (délibéré) ou « misrepresent » (peut être involontaire).' },
      { wrong: 'The article makes a straw man by presenting the real argument weakly.', correct: 'The article attacks a straw man — it misrepresents the opponent\'s argument to make it easier to refute.', explanation: 'Un « straw man » n\'est pas simplement une présentation faible d\'un argument réel. C\'est la substitution d\'un argument fictif et facilement attaquable à l\'argument réel de l\'adversaire. La distinction est fondamentale.' },
    ],
  },
  conversation: [
    { speaker: 'Media Critic Fontaine', role: 'A', text: 'Did you see the panel last night? They conflated asylum seekers with economic migrants for the entire segment.', translation: 'Avez-vous vu l\'émission hier soir ? Ils ont confondu demandeurs d\'asile et migrants économiques pendant tout le segment.' },
    { speaker: 'Journalist Kowalski', role: 'B', text: 'I did. And the false equivalence was staggering — a Nobel laureate paired against a blogger with no credentials.', translation: 'Oui. Et la fausse équivalence était saisissante — un lauréat du Nobel jumelé contre un blogueur sans qualifications.' },
    { speaker: 'Media Critic Fontaine', role: 'A', text: 'Then the host misrepresented the laureate\'s position using a classic straw man: « So you\'re saying we should ignore the economy? »', translation: 'Ensuite le présentateur a déformé la position du lauréat en utilisant un classique épouvantail : « Vous dites donc qu\'on devrait ignorer l\'économie ? »' },
    { speaker: 'Journalist Kowalski', role: 'B', text: 'He said nothing of the sort. And the selective reporting throughout — they only cited statistics from one country while discussing a global trend.', translation: 'Il n\'a rien dit de tel. Et le reportage sélectif tout au long — ils n\'ont cité que les statistiques d\'un pays en parlant d\'une tendance mondiale.' },
    { speaker: 'Media Critic Fontaine', role: 'A', text: 'This is exactly the kind of coverage we need to call out. Each technique in isolation seems minor, but together they construct a deeply misleading picture.', translation: 'C\'est exactement le type de couverture que nous devons dénoncer. Chaque technique isolée semble mineure, mais ensemble elles construisent une image profondément trompeuse.' },
    { speaker: 'Journalist Kowalski', role: 'B', text: 'Agreed. And we must name them precisely — conflation, false equivalence, straw man, selective reporting. Vague criticism achieves nothing.', translation: 'D\'accord. Et nous devons les nommer précisément — amalgame, fausse équivalence, épouvantail, reportage sélectif. La critique vague n\'accomplit rien.' },
  ],
  conversationTitle: 'Critique médiatique : dénoncer les sophismes et la désinformation',
  pronunciation: [
    { word: 'Misrepresent', phonetic: '/ˌmɪsreprɪˈzent/', meaning: 'Déformer', tip: 'L\'accent est sur « ZENT » : « mis-rep-ri-ZENT ». Le « mis » et « re » sont rapides. Ne mettez pas l\'accent sur « mis ». Le « sent » final rime avec « went ».' },
    { word: 'Conflate', phonetic: '/kənˈfleɪt/', meaning: 'Confondre / Amalgamer', tip: 'L\'accent est sur « FLATE » : « kun-FLAYT ». Le « con » est réduit en schwa. Ne dites pas « KON-flayt ». Le « ate » se prononce « eyt » comme dans « translate ».' },
    { word: 'Equivalence', phonetic: '/ɪˈkwɪvələns/', meaning: 'Équivalence', tip: 'L\'accent est sur « KWIV » : « ih-KWIV-uh-luhns ». Le « e » initial est réduit. Le « qu » = « kw ». La terminaison « -ence » = « uhns ». Ne prononcez pas à la française.' },
    { word: 'Straw', phonetic: '/strɔː/', meaning: 'Paille (épouvantail)', tip: 'Prononcez « STRAW » — le « aw » est un son ouvert comme dans « law ». Ne dites pas « stro » ni « stra-ou ». C\'est une seule syllabe.' },
  ],
}

// ─── c1-l65: Media Sounds ──────────────────────────────────────────────────────
export const C1_L65: LessonContent = {
  vocab: [
    { english: 'correspondent', french: 'correspondant / envoyé spécial', phonetic: '/ˌkɒrɪˈspɒndənt/', example: 'Our Middle East correspondent filed the report from Beirut.', exampleTranslation: 'Notre correspondant au Proche-Orient a envoyé le reportage depuis Beyrouth.' },
    { english: 'coverage', french: 'couverture (médiatique)', phonetic: '/ˈkʌvərɪdʒ/', example: 'The network\'s coverage of the election was criticised for its imbalance.', exampleTranslation: 'La couverture de l\'élection par la chaîne a été critiquée pour son déséquilibre.' },
    { english: 'sensationalism', french: 'sensationnalisme', phonetic: '/senˈseɪʃənəlɪzəm/', example: 'Tabloid sensationalism prioritises outrage over accuracy.', exampleTranslation: 'Le sensationnalisme de la presse à scandale privilégie l\'indignation sur l\'exactitude.' },
    { english: 'syndicate', french: 'syndicat de presse / réseau de diffusion', phonetic: '/ˈsɪndɪkət/', example: 'The column is distributed by a national syndicate to over two hundred newspapers.', exampleTranslation: 'La chronique est distribuée par un syndicat national à plus de deux cents journaux.' },
    { english: 'byline', french: 'signature (d\'un article)', phonetic: '/ˈbaɪlaɪn/', example: 'The article appeared without a byline, raising questions about authorship.', exampleTranslation: 'L\'article est paru sans signature, soulevant des questions sur la paternité.' },
  ],
  grammar: {
    title: 'La prononciation des termes médiatiques : pièges pour francophones',
    explanation: 'Les termes du journalisme anglais comportent de nombreux pièges phonétiques pour les francophones : (1) « Correspondent » : /ˌkɒrɪˈspɒndənt/ — l\'accent est sur « SPON » (pas sur « co » comme en français). Le « ent » final se prononce « uhnt » (pas « an »). On ne dit JAMAIS « ko-ré-spon-dan » à la française. (2) « Coverage » : /ˈkʌvərɪdʒ/ — le « cov » rime avec « love » (pas « cow »). Le « age » final = « ij » comme dans « damage ». Ne dites pas « kou-vé-radj ». (3) « Sensationalism » : /senˈseɪʃənəlɪzəm/ — l\'accent est sur « SAY ». Le « sen » initial a un « e » court comme dans « send ». La terminaison « -ism » = « iz-uhm » (pas « isme » à la française). (4) « Syndicate » : /ˈsɪndɪkət/ — l\'accent est sur « SIN », pas sur « di » comme en français. Le « y » = « i » court. Le « ate » final se prononce « uhht » (réduit), pas « eyt ». (5) « Byline » : /ˈbaɪlaɪn/ — les deux syllabes sont claires : « BY-line ». Le « y » de « by » est un « aï ». Ne dites pas « bee-leen » à la française.',
    examples: [
      { sentence: 'The foreign correspondent delivered a nuanced report from the conflict zone.', translation: 'Le correspondant à l\'étranger a livré un reportage nuancé depuis la zone de conflit.', isCorrect: true },
      { sentence: 'The newspaper\'s sensationalism was evident in its use of capitalised headlines and exclamation marks.', translation: 'Le sensationnalisme du journal était évident dans son utilisation de titres en majuscules et de points d\'exclamation.', isCorrect: true },
      { sentence: 'The column is syndicated across forty newspapers nationwide.', translation: 'La chronique est diffusée par syndication dans quarante journaux à l\'échelle nationale.', isCorrect: true },
      { sentence: 'The correspondant filed the report on time.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'The correspondant filed the report on time.', correct: 'The correspondent filed the report on time.', explanation: 'En anglais, « correspondent » s\'écrit avec un « e » : C-O-R-R-E-S-P-O-N-D-E-N-T. Ne substituez pas l\'orthographe française « correspondant » (avec « a »). L\'orthographe change la prononciation : « -ent » = « uhnt », pas « an ».' },
      { wrong: 'The coverage (prononcé « kou-vé-radj »)', correct: 'Coverage pronounced /ˈkʌvərɪdʒ/', explanation: '« Coverage » se prononce « KUV-uh-rij » — le « cov » rime avec « love », pas « cow ». Le « -age » = « ij » comme dans « damage ». La prononciation française « kou-vé-radj » est incorrecte.' },
    ],
  },
  conversation: [
    { speaker: 'News Director Brennan', role: 'A', text: 'Our correspondent in Kyiv has filed an update. I want full coverage on tonight\'s broadcast — but measured, not sensationalist.', translation: 'Notre correspondant à Kyiv a envoyé une mise à jour. Je veux une couverture complète au journal de ce soir — mais mesurée, pas sensationnaliste.' },
    { speaker: 'Producer Tanaka', role: 'B', text: 'Understood. I\'ll make sure the byline is prominent — the reporter risked a lot to get this story.', translation: 'Compris. Je m\'assurerai que la signature soit mise en évidence — le reporter a pris beaucoup de risques pour obtenir cette histoire.' },
    { speaker: 'News Director Brennan', role: 'A', text: 'Good. And avoid the trap of sensationalism — no dramatic music, no speculation. Let the reporting speak for itself.', translation: 'Bien. Et évitez le piège du sensationnalisme — pas de musique dramatique, pas de spéculation. Laissez le reportage parler de lui-même.' },
    { speaker: 'Producer Tanaka', role: 'B', text: 'Agreed. Shall we also run the syndicated opinion piece? It offers a different perspective from our editorial line.', translation: 'D\'accord. Devons-nous aussi diffuser la chronique syndiquée ? Elle offre une perspective différente de notre ligne éditoriale.' },
    { speaker: 'News Director Brennan', role: 'A', text: 'Yes, run it — but label it clearly as a syndicated column. Our readers must distinguish between our reporting and external commentary.', translation: 'Oui, diffusez-la — mais étiquetez-la clairement comme chronique syndiquée. Nos lecteurs doivent distinguer entre notre reportage et les commentaires externes.' },
    { speaker: 'Producer Tanaka', role: 'B', text: 'Absolutely. Transparency is the antidote to accusations of bias. I\'ll brief the team before the evening broadcast.', translation: 'Absolument. La transparence est l\'antidote aux accusations de parti pris. Je briefinguerai l\'équipe avant le journal du soir.' },
  ],
  conversationTitle: 'Actualité et éthique journalistique : couverture, sensationnalisme et transparence',
  pronunciation: [
    { word: 'Correspondent', phonetic: '/ˌkɒrɪˈspɒndənt/', meaning: 'Correspondant', tip: 'L\'accent est sur « SPON » : « kor-ih-SPON-duhnt ». Le « ent » final = « uhnt », pas « an ». Ne prononcez PAS à la française « ko-ré-spon-dan ». L\'accent tonique change tout.' },
    { word: 'Coverage', phonetic: '/ˈkʌvərɪdʒ/', meaning: 'Couverture médiatique', tip: 'Prononcez « KUV-uh-rij » — le « cov » rime avec « love », PAS « cow ». Le « -age » = « ij » comme dans « damage ». Ne dites pas « kou-vé-radj ».' },
    { word: 'Sensationalism', phonetic: '/senˈseɪʃənəlɪzəm/', meaning: 'Sensationnalisme', tip: 'L\'accent est sur « SAY » : « sen-SAY-shuh-nuh-liz-uhm ». Le « sen » a un « e » court. La terminaison « -ism » = « iz-uhm », pas « isme » français. 6 syllabes, accent sur la 2e.' },
    { word: 'Syndicate', phonetic: '/ˈsɪndɪkət/', meaning: 'Syndicat de presse', tip: 'L\'accent est sur « SIN » : « SIN-dih-kuht ». Ne mettez PAS l\'accent sur « di » comme en français. Le « y » = « i » court. Le « ate » final est réduit en « uht », pas « eyt ».' },
  ],
}
