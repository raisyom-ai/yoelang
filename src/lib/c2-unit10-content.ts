import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C2 MASTERY — UNIT 10: POLITICAL COMMENTARY (c2-l46 through c2-l50)
// YOELANG English Learning App for Francophone Users
// Near-native mastery: punditry, editorial writing, political debate, opinion delivery
// ════════════════════════════════════════════════════════════════════════════════

// ─── c2-l46: Commentary Vocabulary — Punditry, editorial, polemic ───────────────
export const C2_L46: LessonContent = {
  vocab: [
    {
      english: 'Punditry',
      french: 'Journalisme d\'opinion',
      phonetic: '/ˈpʌndɪtri/',
      example: 'The sheer volume of punditry in the aftermath of the debate obscured any substantive analysis of the candidates\' policy positions.',
      exampleTranslation: 'Le volume considérable de journalisme d\'opinion dans les suites du débat a obscurci toute analyse substantive des positions politiques des candidats.',
    },
    {
      english: 'Polemic',
      french: 'Polémique',
      phonetic: '/pəˈlɛmɪk/',
      example: 'Her polemic against the administration\'s foreign policy was as rhetorically dazzling as it was factually selective.',
      exampleTranslation: 'Sa polémique contre la politique étrangère de l\'administration fut aussi éblouissante sur le plan rhétorique que sélective sur le plan factuel.',
    },
    {
      english: 'Editorial',
      french: 'Éditorial',
      phonetic: '/ˌɛdɪˈtɔːriəl/',
      example: 'The editorial board\'s endorsement carried considerable weight in a district where newspaper readership still influenced voting behaviour.',
      exampleTranslation: 'Le soutien du comité éditorial portait un poids considérable dans une circonscription où le lectorat des journaux influençait encore le comportement électoral.',
    },
    {
      english: 'Demagogue',
      french: 'Démagogue',
      phonetic: '/ˈdɛməɡɒɡ/',
      example: 'To label every populist firebrand a demagogue is to flatten the very real distinction between rhetorical excess and genuine authoritarian impulse.',
      exampleTranslation: 'Qualifier chaque tribun populiste de démagogue, c\'est aplatir la distinction bien réelle entre l\'excès rhétorique et l\'impulsion authentiquement autoritaire.',
    },
    {
      english: 'Grandstanding',
      french: 'Esbroufe politique',
      phonetic: '/ˈɡrændˌstændɪŋ/',
      example: 'What appeared to be a principled stand was, upon closer inspection, mere grandstanding designed to placate the party base ahead of the primaries.',
      exampleTranslation: 'Ce qui semblait être une position de principe n\'était, à y regarder de plus près, qu\'une esbroufe politique conçue pour apaiser la base du parti avant les primaires.',
    },
  ],
  grammar: {
    title: 'Le discours commentatif : nominalisation et distanciation évaluative',
    explanation: `Le commentaire politique en anglais de niveau C2 repose sur deux mécanismes linguistiques fondamentaux : la nominalisation et la distanciation évaluative. La nominalisation transforme des processus (verbes) en entités (noms), créant un discours plus abstrait et apparemment objectif : "the failure of the policy" plutôt que "the policy failed" ; "the escalation of rhetoric" plutôt que "rhetoric escalated". Cette transformation permet de présenter des jugements comme des faits, d'effacer l'agent responsable ("the decision was taken" plutôt que "the minister decided") et de conférer au discours une autorité analytique. La distanciation évaluative, quant à elle, permet au commentateur de formuler des jugements sans les assumer directement : "One might observe that..." ; "It would be tempting to conclude that..." ; "The inescapable impression is that...". Ces constructions créent un espace entre le locuteur et l'énoncé, ce qui est essentiel dans le commentaire politique où la crédibilité dépend de l'apparence d'impartialité — même quand l'opinion est en réalité tranchée. L'anglais dispose d'un répertoire exceptionnellement riche de ces tournures : "arguably", "by any reasonable standard", "if one is being charitable", "it is difficult to escape the conclusion that".`,
    examples: [
      { sentence: 'The collapse of the negotiations was, by any reasonable standard, an indictment of the government\'s diplomatic incompetence.', translation: 'L\'effondrement des négociations était, par tout critère raisonnable, un acte d\'accusation de l\'incompétence diplomatique du gouvernement.', isCorrect: true },
      { sentence: 'It would be tempting to dismiss the senator\'s remarks as mere grandstanding, were it not for the alarming precision with which they mirrored her constituents\' anxieties.', translation: 'Il serait tentant de rejeter les propos du sénateur comme simple esbroufe, n\'eût été la précision alarmante avec laquelle ils reflétaient les angoisses de ses électeurs.', isCorrect: true },
      { sentence: 'The government failed the negotiations and this proves they are incompetent.', translation: '', isCorrect: false },
      { sentence: 'One might observe that the editorial\'s rhetorical flourish rather outpaced its evidentiary foundation.', translation: 'On pourrait observer que l\'éclat rhétorique de l\'éditorial a plutôt dépassé son fondement probant.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The government failed the negotiations and this proves they are incompetent.', correct: 'The failure of the negotiations constituted, by any reasonable standard, an indictment of governmental incompetence.', explanation: 'Le style commentatif exige la nominalisation ("the failure of" plutôt que "the government failed") et la distanciation évaluative ("by any reasonable standard" plutôt que "this proves"). Le registre journalistique d\'opinion évite les affirmations directes non médiatisées.' },
      { wrong: 'The politician is clearly a demagogue.', correct: 'One might reasonably argue that the politician\'s rhetoric crosses the threshold from populism into demagoguery.', explanation: 'Une affirmation catégorique sans distanciation ("clearly") est perçue comme partisane plutôt qu\'analytique dans le commentaire politique anglophone. La formule "one might reasonably argue" maintient l\'apparence d\'analyse tout en transmettant le même jugement.' },
    ],
  },
  conversation: [
    { speaker: 'Aïcha', role: 'A', text: 'Did you catch the panel last night? The level of punditry has reached a point where commentary has entirely supplanted the events it purports to analyse.', translation: 'As-tu vu l\'émission hier soir ? Le niveau de journalisme d\'opinion a atteint un point où le commentaire a entièrement supplanté les événements qu\'il prétend analyser.', },
    { speaker: 'Ravi', role: 'B', text: 'One might observe that the 24-hour news cycle practically demands that kind of filler — but I take your point. Polemic has become a substitute for illumination.', translation: 'On pourrait observer que le cycle d\'information en continu exige pratiquement ce genre de remplissage — mais je vois ton point. La polémique est devenue un substitut à l\'illumination.', },
    { speaker: 'Aïcha', role: 'A', text: 'Precisely. The editorial pages at least used to maintain a fiction of deliberative rigour. Now the demagogues and the commentators are practically indistinguishable.', translation: 'Précisément. Les pages éditoriales maintenaient au moins une fiction de rigueur délibérative. Maintenant les démagogues et les commentateurs sont pratiquement indiscernables.', },
    { speaker: 'Ravi', role: 'B', text: 'Though one must be careful not to conflate all punditry with demagoguery. There remains a meaningful distinction between an informed polemic and mere grandstanding.', translation: 'Bien qu\'il faille veiller à ne pas confondre tout journalisme d\'opinion avec la démaggogie. Il reste une distinction significative entre une polémique éclairée et la simple esbroufe.', },
    { speaker: 'Aïcha', role: 'A', text: 'Granted — but by any reasonable standard, the ratio of grandstanding to genuine analysis has tilted decisively toward the former.', translation: 'Accordé — mais par tout critère raisonnable, le ratio entre l\'esbroufe et l\'analyse authentique a penché décisivement vers la première.', },
    { speaker: 'Ravi', role: 'B', text: 'It would be tempting to lay the blame solely at the feet of social media, were it not for the fact that the broadsheets themselves have embraced outrage as a business model.', translation: 'Il serait tentant de mettre le blâme uniquement sur les réseaux sociaux, n\'eût été le fait que les quotidiens sérieux ont eux-mêmes adopté l\'indignation comme modèle économique.', },
    { speaker: 'Aïcha', role: 'A', text: 'Well, there it is. The marketplace of ideas has become, rather, a marketplace of affect — and the most seductive polemic wins.', translation: 'Eh bien, le voilà. Le marché des idées est devenu, plutôt, un marché de l\'affect — et la polémique la plus séduisante l\'emporte.', },
  ],
  conversationTitle: 'Journalisme d\'opinion et débat démocratique',
  pronunciation: [
    {
      word: 'Punditry',
      phonetic: '/ˈpʌndɪtri/',
      meaning: 'Journalisme d\'opinion',
      tip: 'Accent sur la première syllabe : "PUN-di-tri". Le "u" est ouvert comme dans "cup". Les deux dernières syllabes se réduisent rapidement. Ne dites pas "poun-DAI-tri".',
    },
    {
      word: 'Polemic',
      phonetic: '/pəˈlɛmɪk/',
      meaning: 'Polémique',
      tip: 'Accent sur "LEM" : "peh-LEM-ik". Le premier "o" est réduit en schwa. Le "e" accentué est ouvert comme dans "bed". Ne placez pas l\'accent sur la première syllabe.',
    },
    {
      word: 'Demagogue',
      phonetic: '/ˈdɛməɡɒɡ/',
      meaning: 'Démagogue',
      tip: 'Accent sur la première syllabe : "DEM-eh-gog". Le "e" est ouvert comme dans "bed". Le "a" est réduit. La dernière syllabe rime avec "dog" ou "vogue" selon la variété. En américain, on entend souvent "-gahg".',
    },
    {
      word: 'Grandstanding',
      phonetic: '/ˈɡrændˌstændɪŋ/',
      meaning: 'Esbroufe politique',
      tip: 'Accent sur "GRAND" : "GRAND-stan-ding". Le "a" dans "grand" et "stand" est très ouvert. Le "ing" final est nasal, langue contre le palais. Pas de pause entre "grand" et "standing".',
    },
  ],
}

// ─── c2-l47: Editorial Writing — Rhetorical questions, loaded language, framing ──
export const C2_L47: LessonContent = {
  vocab: [
    {
      english: 'Framing',
      french: 'Cadrage (médiatique)',
      phonetic: '/ˈfreɪmɪŋ/',
      example: 'The framing of the crisis as an immigration problem rather than a humanitarian catastrophe revealed more about editorial priorities than about the facts on the ground.',
      exampleTranslation: 'Le cadrage de la crise comme un problème d\'immigration plutôt que comme une catastrophe humanitaire en révéla davantage sur les priorités éditoriales que sur les faits sur le terrain.',
    },
    {
      english: 'Loaded language',
      french: 'Langage orienté',
      phonetic: '/ˈloʊdɪd ˈlæŋɡwɪdʒ/',
      example: 'The editorial\'s loaded language — "regime" instead of "government", "crackdown" instead of "enforcement" — betrayed its pretence of objectivity.',
      exampleTranslation: 'Le langage orienté de l\'éditorial — "régime" au lieu de "gouvernement", "répression" au lieu de "application" — trahissait sa prétention à l\'objectivité.',
    },
    {
      english: 'Dog-whistle',
      french: 'Message codé (politique)',
      phonetic: '/ˈdɒɡˌwɪsəl/',
      example: 'What the columnist presented as a measured critique of welfare policy was, in fact, a carefully calibrated dog-whistle to the party\'s nativist wing.',
      exampleTranslation: 'Ce que le chroniqueur présentait comme une critique mesurée de la politique sociale était, en réalité, un message codé soigneusement calibré à destination de l\'aile nativiste du parti.',
    },
    {
      english: 'Both-sidesism',
      french: 'Faux équilibre médiatique',
      phonetic: '/boʊθ ˈsaɪdɪzəm/',
      example: 'The tendency towards both-sidesism in political reporting creates a false equivalence between evidence-based policy and demagogic fabrication.',
      exampleTranslation: 'La tendance au faux équilibre dans le reportage politique crée une fausse équivalence entre la politique fondée sur les preuves et la fabrication démagogique.',
    },
    {
      english: 'Whataboutism',
      french: 'Rhétorique du "et vous donc"',
      phonetic: '/ˈhwʌtəˌbaʊtɪzəm/',
      example: 'Whataboutism is the last refuge of the ideologue: when your position is indefensible, deflect by alleging your opponent\'s hypocrisy.',
      exampleTranslation: 'Le "et vous donc" est le dernier refuge de l\'idéologue : quand votre position est indéfendable, détournez en alléguant l\'hypocrisie de votre adversaire.',
    },
  ],
  grammar: {
    title: 'Les questions rhétoriques et le langage orienté dans l\'écriture éditoriale',
    explanation: `L'écriture éditoriale en anglais mobilise deux outils linguistiques puissants : la question rhétorique et le langage orienté (loaded language). La question rhétorique n'exige pas de réponse — elle fonctionne comme une assertion déguisée, forçant le lecteur à tirer lui-même la conclusion souhaitée : "Are we seriously expected to believe that a tax cut for the wealthiest will trickle down to those who need it most?" Le lecteur est conduit à répondre mentalement "non", ce qui est plus persuasif qu'une affirmation directe car il a l'illusion d'avoir atteint cette conclusion par lui-même. Les questions rhétoriques éditoriales utilisent souvent : (1) L'ironie : "Is the minister genuinely unaware, or merely unconscionable?" (2) Le défi : "Name a single instance in which this policy has delivered on its promise." (3) L'absurde : "Shall we simply abolish all regulation and trust the market's benevolence?" Le langage orienté, quant à lui, exploite la connotation : "regime" vs "government", "freedom fighter" vs "terrorist", "pro-life" vs "anti-abortion", "tax relief" vs "tax cut for the wealthy". Chaque choix lexical oriente subtilement le lecteur sans en avoir l'air. Le cadrage (framing) opère à un niveau structurel : la même information, cadrée différemment, produit des réponses émotionnelles et cognitives distinctes. Un éditorialiste C2 sait non seulement employer ces techniques, mais aussi les identifier et les déconstruire chez les autres.`,
    examples: [
      { sentence: 'Are we seriously expected to believe that deregulation — which has failed spectacularly in every preceding iteration — will somehow yield different results this time?', translation: 'Sérieusement, on est censé croire que la déréglementation — qui a échoué de manière spectaculaire à chaque itération précédente — donnera somehow des résultats différents cette fois ?', isCorrect: true },
      { sentence: 'The editorial employed loaded language throughout, referring to the protestors as "mobs" and the police response as "restoring order."', translation: 'L\'éditorial a employé un langage orienté tout au long, qualifiant les manifestants de "foules" et la réponse policière de "rétablissement de l\'ordre."', isCorrect: true },
      { sentence: 'Is the policy good or bad? I think it is bad and people should not support it.', translation: '', isCorrect: false },
      { sentence: 'What, precisely, entitles a columnist to pronounce on epidemiological policy with the same authority she brings to restaurant reviews?', translation: 'Qu\'est-ce qui, précisément, autorise une chroniqueuse à se prononcer sur la politique épidémiologique avec la même autorité qu\'elle apporte aux critiques de restaurants ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Is the policy good or bad? I think it is bad and people should not support it.', correct: 'By what measure, precisely, does a policy that exacerbates inequality merit the endorsement of any legislator with a functioning conscience?', explanation: 'La question rhétorique éditoriale ne se contente pas de poser une question fermée — elle intègre une charge argumentative qui rend la réponse évidente par sa propre structure. "By what measure..." oblige le lecteur à évaluer la politique selon des critères que le commentateur a déjà choisis.' },
      { wrong: 'The article used biased words to make the government look bad.', correct: 'The editorial\'s framing — its systematic selection of "regime," "crackdown," and "disenfranchisement" over neutral terminology — constituted loaded language of the most calculated variety.', explanation: 'Le vocabulaire métalinguistique est essentiel au discours éditorial. "Biased words" est naïf ; "loaded language," "framing," et "systematic selection" appartiennent au registre analytique attendu à ce niveau.' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'I\'ve been analysing the framing across three major broadsheets, and the disparity is staggering. The same policy is "bold reform" in one, "reckless gamble" in another, and "calculated sop to the base" in the third.', translation: 'J\'analyse le cadrage à travers trois grands quotidiens, et la disparité est sidérante. La même politique est une "réforme audacieuse" dans l\'un, un "pari imprudent" dans l\'autre, et une "concession calculée à la base" dans le troisième.', },
    { speaker: 'James', role: 'B', text: 'Textbook loaded language. And notice how each editorial deploys a rhetorical question as its centrepiece — "Can Britain afford this experiment?" or "Who will pay the price for this recklessness?"', translation: 'Langage orienté par excellence. Et remarquez comment chaque éditorial déploie une question rhétorique comme pièce maîtresse — "La Grande-Bretagne peut-elle se permettre cette expérience ?" ou "Qui paiera le prix de cette imprudence ?"', },
    { speaker: 'Fatou', role: 'A', text: 'Precisely — the rhetorical question does the persuasive work while preserving the veneer of open inquiry. It\'s a particularly insidious form of editorial sleight of hand.', translation: 'Précisément — la question rhétorique fait le travail persuasif tout en préservant le vernis d\'investigation ouverte. C\'est une forme particulièrement insidieuse de tour de passe-passe éditorial.', },
    { speaker: 'James', role: 'B', text: 'And the dog-whistles are barely even disguised anymore. When a columnist writes about "traditional values under siege," we all know precisely which constituency is being summoned.', translation: 'Et les messages codés sont à peine déguisés désormais. Quand un chroniqueur écrit sur "les valeurs traditionnelles assiégées", nous savons tous précisément quelle circonscription est convoquée.', },
    { speaker: 'Fatou', role: 'A', text: 'What troubles me more is the both-sidesism — as though journalistic neutrality requires giving equal weight to empirical fact and conspiratorial fabrication.', translation: 'Ce qui me trouble davantage, c\'est le faux équilibre — comme si la neutralité journalistique exigeait d\'accorder un poids égal au fait empirique et à la fabrication conspirationniste.', },
    { speaker: 'James', role: 'B', text: 'And the whataboutism that passes for critique — "Well, the other side did it too" — as though two wrongs constitute an argument rather than an admission.', translation: 'Et le "et vous donc" qui passe pour critique — "Eh bien, l\'autre côté l\'a fait aussi" — comme si deux torts constituaient un argument plutôt qu\'un aveu.', },
    { speaker: 'Fatou', role: 'A', text: 'One might venture to suggest that the entire editorial ecosystem has become a performance of persuasion rather than an exercise in public reasoning.', translation: 'On pourrait s\'aventurer à suggérer que l\'ensemble de l\'écosystème éditorial est devenu une performance de persuasion plutôt qu\'un exercice de raisonnement public.', },
  ],
  conversationTitle: 'Cadrage médiatique et langage orienté',
  pronunciation: [
    {
      word: 'Framing',
      phonetic: '/ˈfreɪmɪŋ/',
      meaning: 'Cadrage (médiatique)',
      tip: 'Accent sur la première syllabe : "FRAY-ming". Le "a" est long comme dans "play". Le "ing" final est nasal. Ne dites pas "fram-ming" avec un "a" court.',
    },
    {
      word: 'Dog-whistle',
      phonetic: '/ˈdɒɡˌwɪsəl/',
      meaning: 'Message codé (politique)',
      tip: 'Deux mots avec accent sur "DOG" : "DOG-wis-sel". Le "o" est ouvert comme dans "hot". Le "wh" est expiré. Le sens politique est métaphorique — un sifflet à chien n\'est audible que pour les chiens, de même le message codé n\'est compris que du public visé.',
    },
    {
      word: 'Whataboutism',
      phonetic: '/ˈhwʌtəˌbaʊtɪzəm/',
      meaning: 'Rhétorique du "et vous donc"',
      tip: 'Accent principal sur "WHAT" : "HWUT-eh-baou-tiz-em". Le "wh" anglais est souvent expiré (comme un léger souffle). Le "about" se réduit. Le suffixe "-ism" est toujours atone.',
    },
    {
      word: 'Editorial',
      phonetic: '/ˌɛdɪˈtɔːriəl/',
      meaning: 'Éditorial',
      tip: 'Accent sur "TOR" : "ed-ih-TOR-ee-al". Le premier "e" est court. Le "o" accentué est long et ouvert. En américain, le "r" est roulé ; en RP britannique, le "r" final est muet : "ed-ih-TOR-ee-ah".',
    },
  ],
}

// ─── c2-l48: Political Panel — Political debate and commentary ──────────────────
export const C2_L48: LessonContent = {
  vocab: [
    {
      english: 'Obfuscation',
      french: 'Obscurcissement (délibéré)',
      phonetic: '/ˌɒbfʌˈskeɪʃən/',
      example: 'The minister\'s response was a masterclass in obfuscation — technically truthful, strategically misleading, and entirely devoid of the specificity the question demanded.',
      exampleTranslation: 'La réponse du ministre fut une leçon magistrale d\'obscurcissement — techniquement véridique, stratégiquement trompeuse et entièrement dépourvue de la spécificité qu\'exigeait la question.',
    },
    {
      english: 'Gaslighting',
      french: 'Manipulation par déni de la réalité',
      phonetic: '/ˈɡæsˌlaɪtɪŋ/',
      example: 'The systematic gaslighting of the electorate — insisting that what they witnessed did not happen, or that its meaning is the opposite of what they understood — has corroded public trust in institutional discourse.',
      exampleTranslation: 'La manipulation systématique de l\'électorat — insistant sur le fait que ce qu\'il a vu ne s\'est pas produit, ou que son sens est l\'inverse de ce qu\'il a compris — a corrodé la confiance publique dans le discours institutionnel.',
    },
    {
      english: 'Plausible deniability',
      french: 'Négociation plausible',
      phonetic: '/ˈplɔːzəbəl dɪˈnaɪəbɪlɪti/',
      example: 'The memo was crafted with sufficient ambiguity to ensure plausible deniability while leaving no doubt among the initiated about its intended meaning.',
      exampleTranslation: 'Le mémorandum fut rédigé avec suffisamment d\'ambiguïté pour garantir la négociation plausible tout en ne laissant aucun doute parmi les initiés sur son sens voulu.',
    },
    {
      english: 'Bad faith',
      french: 'Mauvaise foi',
      phonetic: '/bæd feɪθ/',
      example: 'Arguing in bad faith is not merely disagreeing — it is the deliberate simulation of engagement while refusing the shared epistemic ground that makes dialogue possible.',
      exampleTranslation: 'Argumenter de mauvaise foi n\'est pas simplement être en désaccord — c\'est la simulation délibérée d\'engagement tout en refusant le terrain épistémique commun qui rend le dialogue possible.',
    },
    {
      english: 'Whitewash',
      french: 'Blanchiment (de l\'histoire)',
      phonetic: '/ˈwaɪtwɒʃ/',
      example: 'The inquiry was, by any reasonable assessment, a whitewash — long on exculpatory narrative, conspicuously short on accountability.',
      exampleTranslation: 'L\'enquête était, par toute évaluation raisonnable, un blanchiment — riche en récit exonératoire, conspicuement courte sur la responsabilité.',
    },
  ],
  grammar: {
    title: 'Les stratégies linguistiques du débat politique : présomption, concession et renversement',
    explanation: `Le débat politique en anglais exige la maîtrise de trois mouvements argumentatifs fondamentaux : la présomption (presumption), la concession (concession) et le renversement (reversal). La présomption établit le terrain de l'argument en posant une prémisse que l'adversaire doit accepter ou réfuter : "The fundamental question before us is not whether the policy is popular, but whether it is effective." La concession reconnaît la validité partielle de la position adverse — non par faiblesse, mais par stratégie : "I grant that the minister's intentions were honourable; I merely observe that the consequences of those honourable intentions have been catastrophic." Le renversement transforme l'argument de l'adversaire contre lui-même : "You cite the deficit as evidence of fiscal irresponsibility, and yet it was your own administration's tax cuts that created it." Ces trois mouvements s'enchaînent souvent : présomption → concession → renversement. "Let us accept, for the sake of argument, that the policy reduced unemployment [concession]. Even on that generous reading, the cost — in terms of environmental degradation and social fragmentation — was disproportionate by any reasonable metric [renversement]. The real question, then, is not whether it worked, but at what price, and who paid it [présomption reformulée]." L'anglais politique possède des constructions dédiées pour chaque mouvement : "I freely concede that...", "Even granting that...", "Yet for all that...", "Which brings us to the nub of the matter...", "The question that irresistibly presents itself is..."`,
    examples: [
      { sentence: 'I freely concede that the administration inherited an unenviable hand; yet for all that, the subsequent doubling of the national debt cannot be laid at any predecessor\'s door.', translation: 'Je concède librement que l\'administration a hérité d\'une situation peu enviable ; cependant, pour tout cela, le doublement subséquent de la dette nationale ne peut être imputé à aucun prédécesseur.', isCorrect: true },
      { sentence: 'You say the policy is bad and I disagree.', translation: '', isCorrect: false },
      { sentence: 'Which brings us to the nub of the matter: it is not obfuscation that should alarm us, but the normalisation of obfuscation as an acceptable political instrument.', translation: 'Ce qui nous amène au nœud du problème : ce n\'est pas l\'obscurcissement qui devrait nous alarmer, mais la normalisation de l\'obscurcissement comme instrument politique acceptable.', isCorrect: true },
      { sentence: 'Even granting that the inquiry was conducted in good faith, the absence of key witnesses renders its conclusions tentative at best.', translation: 'Même en admettant que l\'enquête fut conduite de bonne foi, l\'absence de témoins clés rend ses conclusions au mieux provisoires.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'You say the policy is bad and I disagree.', correct: 'I freely concede that the policy has its proponents and even some merits; yet for all that, the balance of evidence compels the conclusion that its costs far outweigh its benefits.', explanation: 'Le débat politique de haut niveau exige la structure présomption-concession-renversement. Une simple contradiction ("I disagree") est rhétoriquement impuissante. La concession renforce la crédibilité du locuteur ; le renversement retourne l\'argument.' },
      { wrong: 'The politician lied about everything.', correct: 'The minister\'s testimony, while technically truthful in its particulars, constituted a broader pattern of obfuscation that amounted to bad faith engagement with the committee.', explanation: '"Lied" est une accusation directe qui exige une preuve directe et qui, si elle est contestée, détruit la crédibilité du commentateur. "Obfuscation" et "bad faith engagement" décrivent le même phénomène avec la précision lexicale et la prudence épistémique appropriées.' },
    ],
  },
  conversation: [
    { speaker: 'Oumar', role: 'A', text: 'Did you watch the select committee hearing? The level of obfuscation was breathtaking — every answer technically responsive, substantively empty.', translation: 'As-tu regardé l\'audience de la commission ? Le niveau d\'obscurcissement était saisissant — chaque réponse techniquement adéquate, substantiellement vide.', },
    { speaker: 'Margaret', role: 'B', text: 'I freely concede that parliamentary questioning rarely elicits candour; yet for all that, yesterday\'s performance set a new standard for plausible deniability.', translation: 'Je concède librement que les questions parlementaires suscitent rarement de la franchise ; cependant, la performance d\'hier a établi un nouveau standard de négociation plausible.', },
    { speaker: 'Oumar', role: 'A', text: 'What struck me was the gaslighting — the insistence that the transcript says something other than what any literate person can read for themselves.', translation: 'Ce qui m\'a frappé, c\'est la manipulation — l\'insistance sur le fait que la transcription dit autre chose que ce que toute personne lettrée peut lire elle-même.', },
    { speaker: 'Margaret', role: 'B', text: 'Even granting that political testimony has always involved a degree of spin, the shift from spin to outright bad faith is qualitatively different.', translation: 'Même en admettant que le témoignage politique a toujours impliqué un certain degré de novlangue, le passage de la novlangue à la mauvaise foi franche est qualitativement différent.', },
    { speaker: 'Oumar', role: 'A', text: 'Which brings us to the nub of the matter: the inquiry itself is shaping up to be a whitewash. The terms of reference were designed to preclude the most damning lines of inquiry.', translation: 'Ce qui nous amène au nœud du problème : l\'enquête elle-même s\'annonce comme un blanchiment. Les termes de référence ont été conçus pour exclure les pistes les plus accablantes.', },
    { speaker: 'Margaret', role: 'B', text: 'You cite the narrow terms of reference as evidence of a cover-up, and your opponents cite them as evidence of procedural rigour. The question that irresistibly presents itself is: which interpretation does the evidence support?', translation: 'Tu cites les termes de référence étroits comme preuve d\'une dissimulation, et tes adversaires les citent comme preuve de rigueur procédurale. La question qui se présente irrésistiblement est : quelle interprétation les preuves soutiennent-elles ?', },
    { speaker: 'Oumar', role: 'A', text: 'And there you have it — the real casualty of bad faith isn\'t any single policy; it\'s the shared epistemic ground without which democratic deliberation becomes impossible.', translation: 'Et voilà — la véritable victime de la mauvaise foi n\'est pas une politique unique ; c\'est le terrain épistémique commun sans lequel la délibération démocratique devient impossible.', },
  ],
  conversationTitle: 'Débat politique et mauvaise foi',
  pronunciation: [
    {
      word: 'Obfuscation',
      phonetic: '/ˌɒbfʌˈskeɪʃən/',
      meaning: 'Obscurcissement',
      tip: 'Accent sur "SKAY" : "ob-fuh-SKAY-shun". Le "o" initial est court et ouvert. Le "u" est réduit en schwa. Le "tion" final se prononce "shun". Ne dites pas "ob-fyou-SKAY-shun".',
    },
    {
      word: 'Gaslighting',
      phonetic: '/ˈɡæsˌlaɪtɪŋ/',
      meaning: 'Manipulation par déni',
      tip: 'Accent sur "GAS" : "GAS-laï-ting". Le "a" est très ouvert comme dans "cat". Le "igh" = "aï". Le "ing" est nasal. Le terme vient du film "Gaslight" (1944) où un mari manipule sa femme pour qu\'elle doute de sa propre perception.',
    },
    {
      word: 'Whitewash',
      phonetic: '/ˈwaɪtwɒʃ/',
      meaning: 'Blanchiment',
      tip: 'Accent sur "WHITE" : "WAÏT-wosh". Le "wh" est expiré, le "i" est long. Le "o" dans "wash" est ouvert comme dans "hot". Le sens figuré (politique) est bien plus courant aujourd\'hui que le sens littéral (peindre en blanc).',
    },
    {
      word: 'Plausible',
      phonetic: '/ˈplɔːzəbəl/',
      meaning: 'Plausible',
      tip: 'Accent sur "PLAW" : "PLAW-zeh-bel". Le "au" est long et ouvert comme dans "law". Le "a" final est réduit. En américain, le premier "a" peut être plus fermé : "PLAHZ-eh-bel".',
    },
  ],
}

// ─── c2-l49: Opinion Expression — Emphatic stress in opinion delivery ───────────
export const C2_L49: LessonContent = {
  vocab: [
    {
      english: 'Consequential',
      french: 'Conséquent / significatif',
      phonetic: '/ˌkɒnsɪˈkwɛnʃəl/',
      example: 'What makes this election consequential is not the personalities involved but the structural shifts it portends for the constitutional order.',
      exampleTranslation: 'Ce qui rend cette élection conséquente n\'est pas les personnalités en jeu mais les changements structurels qu\'elle présage pour l\'ordre constitutionnel.',
    },
    {
      english: 'Prescient',
      french: 'Prémonitoire / perspicace',
      phonetic: '/ˈprɛsiənt/',
      example: 'The columnist\'s prescient warning about the erosion of institutional norms went unheeded until the damage was already irreversible.',
      exampleTranslation: 'L\'avertissement prémonitoire du chroniqueur sur l\'érosion des normes institutionnelles resta lettre morte jusqu\'à ce que les dégâts soient déjà irréversibles.',
    },
    {
      english: 'Pernicious',
      french: 'Pernicieux',
      phonetic: '/pəˈnɪʃəs/',
      example: 'The most pernicious aspect of the narrative is not its explicit falsehoods but its subtle reframing of the terms of debate itself.',
      exampleTranslation: 'L\'aspect le plus pernicieux du récit n\'est pas ses faussetés explicites mais son recadrage subtil des termes du débat lui-même.',
    },
    {
      english: 'Unconscionable',
      french: 'Inconvenant / inacceptable',
      phonetic: '/ʌnˈkɒnʃənəbəl/',
      example: 'It is unconscionable that those who engineered the crisis should now preside over the inquiry into its causes.',
      exampleTranslation: 'Il est inconvenant que ceux qui ont engendré la crise président désormais l\'enquête sur ses causes.',
    },
    {
      english: 'Hubris',
      french: 'Hubris / démesure',
      phonetic: '/ˈhjuːbrɪs/',
      example: 'The hubris of assuming that one\'s own civilisational model is universally exportable has been the undoing of more than one imperial project.',
      exampleTranslation: 'L\'hubris de supposer que son propre modèle civilisationnel est universellement exportable a été la perte de plus d\'un projet impérial.',
    },
  ],
  grammar: {
    title: 'L\'accent emphatique dans l\'expression d\'opinion : prosodie et persuasion',
    explanation: `L'expression d'opinion au niveau C2 ne se réduit pas au choix des mots — elle dépend crucialement de l'accent emphatique (emphatic stress), qui peut transformer le sens d'un énoncé sans modifier un seul mot. En anglais, l'accent emphatique permet de : (1) Contester une présomption : "She DID know" (contrairement à ce qui a été suggéré) vs "She did KNOW" (elle était au courant, pas simplement informée). (2) Créer un contraste implicite : "The POLICY is sound" (mais pas son implémentation) vs "The policy IS sound" (contrairement aux allégations contraires). (3) Intensifier l'évaluation : "That is UTTERLY unconscionable" — l'adverbe intensifieur reçoit l'accent primaire, projeter l'indignation. (4) Marquer la focalisation : "What is TRULY pernicious is..." — l'adverbe focalisé signale que la véritable nature du problème diffère de l'apparence. Les locuteurs C2 maîtrisent aussi l'accent contrastif (contrastive stress) : "The minister didn\'t LIE; she OBSCURED." — l'accent sur deux termes crée une opposition sémantique. L'intonation montante sur un mot accentué signale l'indignation ou l'incrédulité ; l'intonation descendante signale la certitude ou la finalité. Enfin, le silence — la pause stratégique avant un mot-clé — est un outil prosodique puissant : "The result was... inevitable." La pause crée une anticipation qui magnifie l'impact du mot qui suit.`,
    examples: [
      { sentence: 'What is TRULY pernicious is not the policy itself but the complacency that permits its perpetuation.', translation: 'Ce qui est VRAIMENT pernicieux n\'est pas la politique elle-même mais la complaisance qui permet sa perpétuation.', isCorrect: true },
      { sentence: 'She DIDN\'T mislead the committee; she PROVIDED answers that were technically accurate but substantively evasive.', translation: 'Elle N\'A PAS égaré la commission ; elle A FOURNI des réponses techniquement exactes mais substantiellement évasives.', isCorrect: true },
      { sentence: 'The policy is bad and the minister is wrong.', translation: '', isCorrect: false },
      { sentence: 'It is... unconscionable — and I choose that word deliberately — that those who profited from the crisis should now dictate the terms of its resolution.', translation: 'Il est... inconvenant — et je choisis ce mot délibérément — que ceux qui ont profité de la crise dictent désormais les termes de sa résolution.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The policy is bad and the minister is wrong.', correct: 'What is TRULY unconscionable is not merely the policy itself but the hubris of those who, having caused the crisis, now presume to lecture the rest of us on its resolution.', explanation: 'L\'opinion C2 ne se contente pas d\'affirmer — elle focalise, contraste et intensifie par l\'accent emphatique. "What is TRULY unconscionable" crée une focalisation ; "not merely... but" construit un contraste ; "hubris" intensifie l\'évaluation. La version plate manque de toute force persuasive.' },
      { wrong: 'I really think that is very bad.', correct: 'That is, by any measure, a pernicious distortion — and I would venture the word is if anything too restrained.', explanation: '"Really think" et "very bad" sont des intensifieurs vagues et faibles. Le commentaire politique C2 exige des évaluations lexicalement précises ("pernicious distortion") et des marques de distanciation ("by any measure", "I would venture"). L\'autocorrection métalinguistique ("if anything too restrained") renforce l\'argument en montrant que le locuteur pèse ses mots.' },
    ],
  },
  conversation: [
    { speaker: 'Elena', role: 'A', text: 'What makes this moment truly consequential is not any single policy — it is the systematic erosion of the norms that make democratic governance possible.', translation: 'Ce qui rend ce moment véritablement conséquent n\'est pas une politique unique — c\'est l\'érosion systématique des normes qui rendent la gouvernance démocratique possible.', },
    { speaker: 'David', role: 'B', text: 'That is... prescient, actually. I recall your making a similar argument three years ago, and the dismissal it received at the time now looks embarrassingly short-sighted.', translation: 'C\'est... prémonitoire, en fait. Je me souviens que tu as avancé un argument similaire il y a trois ans, et le rejet qu\'il a reçu à l\'époque apparaît aujourd\'hui embarrassant de myopie.', },
    { speaker: 'Elena', role: 'A', text: 'The most pernicious development isn\'t the overt authoritarianism — that, at least, one can name and oppose. It\'s the quiet normalisation of the unconscionable.', translation: 'Le développement le plus pernicieux n\'est pas l\'autoritarisme overt — celui-là, au moins, on peut le nommer et s\'y opposer. C\'est la normalisation silencieuse de l\'inconvenant.', },
    { speaker: 'David', role: 'B', text: 'You didn\'t MERELY identify the problem, Elena — you ANTICIPATED its trajectory with a precision that now looks almost clairvoyant.', translation: 'Tu n\'as pas SIMPLEMENT identifié le problème, Elena — tu as ANTICIPÉ sa trajectoire avec une précision qui paraît maintenant presque clairvoyante.', },
    { speaker: 'Elena', role: 'A', text: 'I wish I\'d been wrong. The hubris of those in power — the conviction that institutional safeguards will hold simply because they always have — is itself a form of civic negligence.', translation: 'J\'aurais aimé avoir tort. L\'hubris de ceux au pouvoir — la conviction que les garanties institutionnelles tiendront simplement parce qu\'elles ont toujours tenu — est elle-même une forme de négligence civique.', },
    { speaker: 'David', role: 'B', text: 'And it is precisely that hubris — the assumption that the unthinkable is, by definition, impossible — that history repeatedly and ruthlessly disabuses.', translation: 'Et c\'est précisément cette hubris — la supposition que l\'impensable est, par définition, impossible — que l\'histoire répétitivement et impitoyablement dissipe.', },
    { speaker: 'Elena', role: 'A', text: 'Which is why the question before us is not WHETHER the norms will be tested — they already have been — but whether the public will recognise the stakes before the damage becomes irreversible.', translation: 'C\'est pourquoi la question qui se pose n\'est pas de savoir SI les normes seront éprouvées — elles l\'ont déjà été — mais si le public reconnaîtra les enjeux avant que les dégâts ne deviennent irréversibles.', },
  ],
  conversationTitle: 'L\'accent emphatique et la conviction politique',
  pronunciation: [
    {
      word: 'Consequential',
      phonetic: '/ˌkɒnsɪˈkwɛnʃəl/',
      meaning: 'Conséquent / significatif',
      tip: 'Accent sur "KWEN" : "kon-sih-KWEN-shul". Le "o" initial est ouvert et court. Le "u" final se réduit. Quand le mot reçoit un accent emphatique, la syllabe "KWEN" est prolongée et l\'intonation monte pour signaler l\'importance.',
    },
    {
      word: 'Prescient',
      phonetic: '/ˈprɛsiənt/',
      meaning: 'Prémonitoire',
      tip: 'Accent sur "PRE" : "PRE-shent" ou "PRE-see-ent". Le "sci" se prononce "sh" comme dans "science". Le "t" final est léger ou muet. Attention : ne prononcez PAS le "c" comme un "k".',
    },
    {
      word: 'Pernicious',
      phonetic: '/pəˈnɪʃəs/',
      meaning: 'Pernicieux',
      tip: 'Accent sur "NISH" : "peh-NISH-us". Le premier "e" est réduit en schwa. Le "i" accentué est bref. Le "ou" final est réduit. Quand on veut insister sur la gravité, on allonge "NISH" et on laisse l\'intonation descendre fermement.',
    },
    {
      word: 'Unconscionable',
      phonetic: '/ʌnˈkɒnʃənəbəl/',
      meaning: 'Inconvenant / inacceptable',
      tip: 'Accent sur "KON" : "un-KON-shun-uh-bul". Le "sci" = "sh" comme dans "conscious". L\'accent sur "KON" peut être fortement emphatisé en contexte politique pour projeter l\'indignation. Le mot est long mais les syllabes post-toniques se réduisent rapidement.',
    },
  ],
}

// ─── c2-l50: Commentary Sounds — Tone, register, and persuasive prosody ─────────
export const C2_L50: LessonContent = {
  vocab: [
    {
      english: 'Intonation contour',
      french: 'Contour intonatif',
      phonetic: '/ˌɪntəˈneɪʃən ˈkɒntʊər/',
      example: 'The intonation contour of political oratory — the strategic rises, the deliberate falls, the modulations of pitch — is as calculated as any policy position.',
      exampleTranslation: 'Le contour intonatif de l\'oratoire politique — les montées stratégiques, les chutes délibérées, les modulations de hauteur — est aussi calculée que toute position politique.',
    },
    {
      english: 'Rhythmic pattern',
      french: 'Motif rythmique',
      phonetic: '/ˈrɪðmɪk ˈpætərn/',
      example: 'The senator\'s closing rhythmic pattern — a slow, descending tricolon — carried the weight of inevitability that no amount of counter-argument could dispel.',
      exampleTranslation: 'Le motif rythmique conclusif du sénateur — un tricolone lent et descendant — portait le poids de l\'inévitabilité qu\'aucun contre-argument ne pouvait dissiper.',
    },
    {
      english: 'Idiolect',
      french: 'Idiolecte',
      phonetic: '/ˈɪdiəlɛkt/',
      example: 'Every politician develops an idiolect — a distinctive verbal fingerprint that makes their rhetoric recognisable even without attribution.',
      exampleTranslation: 'Chaque politicien développe un idiolecte — une empreinte verbale distinctive qui rend sa rhétorique reconnaissable même sans attribution.',
    },
    {
      english: 'Pitch modulation',
      french: 'Modulation de hauteur',
      phonetic: '/pɪtʃ ˌmɒdjʊˈleɪʃən/',
      example: 'A single pitch modulation — the rising pitch on "really?" that signals not inquiry but incredulity — can demolish an opponent\'s credibility more effectively than a thousand words of rebuttal.',
      exampleTranslation: 'Une seule modulation de hauteur — la hauteur montante sur "really ?" qui signale non pas l\'interrogation mais l\'incrédulité — peut démolir la crédibilité d\'un adversaire plus efficacement que mille mots de réfutation.',
    },
    {
      english: 'Timbre',
      french: 'Timbre (de la voix)',
      phonetic: '/ˈtæmbər/',
      example: 'The change in timbre — from measured baritone to trembling falsetto — signalled not emotion but performance, a calculated appeal to pathos over logos.',
      exampleTranslation: 'Le changement de timbre — du baryton mesuré au falsetto tremblant — signala non pas l\'émotion mais la performance, un appel calculé au pathos plutôt qu\'au logos.',
    },
  ],
  grammar: {
    title: 'La prosodie persuasive : ton, registre et marquage intonatif dans le commentaire',
    explanation: `La prosodie persuasive — l'ensemble des ressources phonologiques (intonation, rythme, accent, volume, tempo) mises au service de la persuasion — constitue un domaine de compétence distinct au niveau C2. L'anglais politique utilise trois registres prosodiques principaux : (1) Le registre délibératif (deliberative register) : tempo lent, pauses longues, intonation descendante sur les assertions, volume mesuré. Ce registre signale la gravité et la réflexion : "What... we... are... witnessing... is not merely a policy failure. It is a constitutional crisis." (2) Le registre polémique (polemical register) : tempo rapide, accent emphatique marqué, montées intonatives expressives, volume croissant. Ce registre signale l'indignation : "You CANNOT be SERIOUSLY suggesting that this constitutes adequate oversight!" (3) Le registre ironique (ironic register) : contour intonatif plat ou inversé, micro-pauses avant les mots-clés, allongement vocalique signifiant. Ce registre signale la distance critique : "Well, that was... entirely... predictable." La compétence C2 implique non seulement de savoir employer ces registres, mais de savoir naviguer entre eux en temps réel — de passer du délibératif au polémique puis à l'ironique au sein d'un même tour de parole. Le marqueur prosodique le plus puissant en anglais politique est le "nuclear stress" — l'accent nucléaire, qui tombe sur le dernier élément lexical pertinent et signale le focus informationnel. Déplacer le nuclear stress modifie le focus : "The MINISTER misled Parliament" (pas quelqu'un d'autre) vs "The minister misled PARLIAMENT" (pas un autre organe).`,
    examples: [
      { sentence: 'What we are witnessing — and I want to stress this with the deliberative weight it deserves — is not merely a policy failure. It is a constitutional crisis.', translation: 'Ce que nous sommes en train de voir — et je veux le souligner avec le poids délibératif qu\'il mérite — n\'est pas simplement un échec politique. C\'est une crise constitutionnelle.', isCorrect: true },
      { sentence: 'The speech was good and I agree with it.', translation: '', isCorrect: false },
      { sentence: 'Well, that was... entirely... consistent with everything this administration has ever promised — which is to say, the precise opposite of what it has delivered.', translation: 'Eh bien, c\'était... entièrement... cohérent avec tout ce que cette administration a jamais promis — c\'est-à-dire, l\'exact opposé de ce qu\'elle a livré.', isCorrect: true },
      { sentence: 'You CANNOT — and I choose my words carefully — stand before this chamber and claim with a straight face that the oversight was adequate.', translation: 'Vous NE POUVEZ PAS — et je pèse mes mots — vous tenir devant cette assemblée et affirmer de but en blanc que le contrôle était adéquat.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The speech was good and I agree with it.', correct: 'The cadence of the speech — its measured deliberation, its strategic deployment of the tricolon, its devastating shift from deliberative to polemical register — was, by any standard, a masterclass in persuasive prosody.', explanation: 'Au niveau C2, commenter un discours politique exige un vocabulaire prosodique spécialisé (cadence, register, tricolon, deliberative/polemical). "Good" et "I agree" sont des jugements non analytiques qui ne démontrent aucune compétence métalinguistique.' },
      { wrong: 'She spoke with emotion in her voice.', correct: 'The shift in timbre — from measured baritone to trembling falsetto — was not spontaneous emotion but calculated pathos, a prosodic manoeuvre as deliberate as any rhetorical device.', explanation: '"Emotion in her voice" est descriptivement imprécis. Le commentaire C2 distingue le timbre, le registre, le tempo et le contour intonatif, et sait identifier la performance émotionnelle (calculated pathos) par opposition à l\'émotion authentique (spontaneous emotion).' },
    ],
  },
  conversation: [
    { speaker: 'Kwame', role: 'A', text: 'Did you notice the cadence of her closing statement? The tricolon — each clause slower than the last, each pause longer — was pure deliberative register.', translation: 'As-tu remarqué la cadence de sa déclaration finale ? Le tricolone — chaque proposition plus lente que la précédente, chaque pause plus longue — était du pur registre délibératif.', },
    { speaker: 'Siobhan', role: 'B', text: 'Exquisite prosody. And then the shift — from that measured deliberation to the sudden, sharp inflection on "unconscionable" — polemical register deployed with surgical precision.', translation: 'Prosodie exquise. Et puis le changement — de cette délibération mesurée à l\'inflexion soudaine et vive sur "unconscionable" — registre polémique déployé avec une précision chirurgicale.', },
    { speaker: 'Kwame', role: 'A', text: 'Whereas his rebuttal was... well, let us be charitable. The timbre never shifted from that flat, monotonous drone that signals either indifference or incompetence — I couldn\'t tell which.', translation: 'Tandis que sa réfutation était... eh bien, soyons charitables. Le timbre n\'a jamais changé de ce bourdonnement plat et monotone qui signale soit l\'indifférence soit l\'incompétence — je n\'arrivais pas à déterminer laquelle.', },
    { speaker: 'Siobhan', role: 'B', text: 'The ironic register, I see. Well deployed. Though one might argue that the most persuasive moment came not from either speaker but from the silence — the four-second pause before her final, devastating "Why?"', translation: 'Le registre ironique, je vois. Bien employé. Bien qu\'on puisse soutenir que le moment le plus persuasif ne vint d\'aucun des deux orateurs mais du silence — la pause de quatre secondes avant son dernier, dévastateur "Pourquoi ?"', },
    { speaker: 'Kwame', role: 'A', text: 'Precisely. The nuclear stress on that single word — "WHY?" with full falling-rising intonation — did more rhetorical work than his entire fifteen-minute address.', translation: 'Précisément. L\'accent nucléaire sur ce seul mot — "POURQUOI ?" avec une intonation complète descendante-montante — fit plus de travail rhétorique que son allocution entière de quinze minutes.', },
    { speaker: 'Siobhan', role: 'B', text: 'It is a reminder that in political commentary, the how is often as consequential as the what — that register and prosody are not ornament but argument.', translation: 'C\'est un rappel que dans le commentaire politique, le comment est souvent aussi conséquent que le quoi — que le registre et la prosodie ne sont pas ornement mais argument.', },
    { speaker: 'Kwame', role: 'A', text: 'And that, perhaps, is the most important lesson for any would-be commentator: master the sounds of persuasion, or your arguments — however sound — will fall on deaf ears.', translation: 'Et c\'est là, peut-être, la leçon la plus importante pour tout chroniqueur en herbe : maîtrisez les sons de la persuasion, ou vos arguments — aussi solides soient-ils — tomberont dans l\'oreille d\'un sourd.', },
  ],
  conversationTitle: 'Prosodie persuasive et registre oratoire',
  pronunciation: [
    {
      word: 'Intonation contour',
      phonetic: '/ˌɪntəˈneɪʃən ˈkɒntʊər/',
      meaning: 'Contour intonatif',
      tip: 'Accent sur "NEI" dans intonation : "in-teh-NEI-shun KON-too-er". Le "ou" dans contour est ouvert comme dans "tour". L\'expression désigne le schéma mélodique complet d\'un énoncé.',
    },
    {
      word: 'Rhythmic pattern',
      phonetic: '/ˈrɪðmɪk ˈpætərn/',
      meaning: 'Motif rythmique',
      tip: 'Accent sur "RITH" : "RITH-mik PA-tern". Le "th" est interdentral sonore. Le "y" se réduit. Dans "pattern", le "a" est ouvert comme dans "cat" et le "er" est réduit.',
    },
    {
      word: 'Pitch modulation',
      phonetic: '/pɪtʃ ˌmɒdjʊˈleɪʃən/',
      meaning: 'Modulation de hauteur',
      tip: 'Accent sur "LAY" dans modulation : "pitch moj-oo-LAY-shun". Le "u" dans modulation se prononce comme un "ou" bref. Le "tion" = "shun". L\'expression désigne le changement délibéré de hauteur vocale pour un effet rhétorique.',
    },
    {
      word: 'Timbre',
      phonetic: '/ˈtæmbər/',
      meaning: 'Timbre (de la voix)',
      tip: 'Accent sur la première syllabe : "TAM-ber". Le "i" ne se prononce PAS — on dit "TAM" et non "tan-bre" à la française. Le "a" est très ouvert comme dans "cat". En anglais américain, le "er" final est roulé ; en RP britannique, il est muet : "TAM-bah".',
    },
  ],
}
