import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C2 MASTERY — UNIT 9: ACADEMIC PUBLISHING (c2-l41 through c2-l45)
// YOELANG English Learning App for Francophone Users
// Near-native mastery: peer review, impact factor, hedging, meta-discourse, register
// ════════════════════════════════════════════════════════════════════════════════

// ─── c2-l41: Publishing Vocabulary — Peer review, impact factor, monograph ─────
export const C2_L41: LessonContent = {
  vocab: [
    {
      english: 'Peer review',
      french: 'Évaluation par les pairs',
      phonetic: '/pɪər rɪˈvjuː/',
      example: 'The manuscript underwent double-blind peer review before being accepted by the journal.',
      exampleTranslation: 'Le manuscrit a subi une évaluation par les pairs en double aveugle avant d\'être accepté par la revue.',
    },
    {
      english: 'Impact factor',
      french: 'Facteur d\'impact',
      phonetic: '/ˈɪmpækt ˈfæktər/',
      example: 'Critics argue that the impact factor incentivises salami-slicing and self-citation over genuine scholarly contribution.',
      exampleTranslation: 'Les critiques soutiennent que le facteur d\'impact incite au saucissonnage et à l\'autocitation plutôt qu\'à la contribution savante véritable.',
    },
    {
      english: 'Monograph',
      french: 'Monographie',
      phonetic: '/ˈmɒnəɡræf/',
      example: 'Her monograph on late-Victorian epidemiology won the prestigious Pfizer Award from the History of Science Society.',
      exampleTranslation: 'Sa monographie sur l\'épidémiologie de la fin de l\'ère victorienne a remporté le prestigieux prix Pfizer de la History of Science Society.',
    },
    {
      english: 'Proceedings',
      french: 'Actes (de conférence)',
      phonetic: '/prəˈsiːdɪŋz/',
      example: 'The proceedings of the symposium were published as a supplementary issue of the journal.',
      exampleTranslation: 'Les actes du colloque ont été publiés comme numéro supplémentaire de la revue.',
    },
    {
      english: 'Preprint',
      french: 'Prépublication',
      phonetic: '/ˈpriːprɪnt/',
      example: 'Depositing a preprint on arXiv establishes priority while the paper navigates the peer-review process.',
      exampleTranslation: 'Déposer une prépublication sur arXiv établit l\'antériorité pendant que l\'article traverse le processus d\'évaluation par les pairs.',
    },
  ],
  grammar: {
    title: 'Le langage de la publication académique : voix passive et nominalisation',
    explanation: `Le discours académique en anglais se caractérise par l'emploi systématique de la voix passive et de la nominalisation, deux stratégies qui effacent l'agent humain et créent une impression d'objectivité. La voix passive est privilégiée dans les sections méthodologiques et les comptes rendus de procédure : "The data were collected" (pas "We collected the data"), "A mixed-methods approach was employed." La nominalisation transforme des processus verbaux en entités nominales abstraites : "the investigation of..." (au lieu de "investigating"), "the establishment of..." (au lieu de "establishing"), "the articulation of a novel framework." Ces choix ne sont pas neutres — ils participent d'une convention générique qui construit l'autorité scientifique en masquant la subjectivité du chercheur. Cependant, la tendance contemporaine dans certaines disciplines (notamment les sciences sociales et les humanités) est de revenir à la voix active ("we argue that", "we demonstrate") pour assumer explicitement la positionnalité de l'auteur. À un niveau C2, il faut savoir naviguer entre ces deux registres avec intentionnalité.`,
    examples: [
      { sentence: 'The participants were randomly assigned to the control group.', translation: 'Les participants ont été assignés au hasard au groupe de contrôle.', isCorrect: true },
      { sentence: 'The elucidation of the underlying mechanism necessitated the deployment of multiple analytical techniques.', translation: 'L\'élucidation du mécanisme sous-jacent a nécessité le déploiement de multiples techniques analytiques.', isCorrect: true },
      { sentence: 'We was collected the data over a six-month period.', translation: '', isCorrect: false },
      { sentence: 'In this paper, we argue that the nominalisation of agency obscures the very power dynamics that critical discourse analysis seeks to expose.', translation: 'Dans cet article, nous soutenons que la nominalisation de l\'agentivité obscurcit les dynamiques de pouvoir mêmes que l\'analyse critique du discours cherche à exposer.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'We was collected the data over a six-month period.', correct: 'The data were collected over a six-month period.', explanation: 'Erreur de voix : on ne mélange pas la voix active et passive. De plus, "we was" est grammaticalement incorrect (→ "we were"). En contexte académique, la voix passive est préférée pour la méthodologie.' },
      { wrong: 'The investigation about the phenomenon revealed important findings.', correct: 'The investigation of the phenomenon yielded significant findings.', explanation: 'La préposition correcte après "investigation" est "of", pas "about". De plus, "yielded significant findings" est plus idiomatique en discours académique que "revealed important findings" — ce dernier est acceptable mais moins conventionnel dans les genres de publication.' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Diallo', role: 'A', text: 'I received the peer-review reports this morning — two accept with minor revisions, one recommends major restructuring of the theoretical framework.', translation: 'J\'ai reçu les rapports d\'évaluation ce matin — deux acceptations avec révisions mineures, une recommande une restructuration majeure du cadre théorique.', },
    { speaker: 'Dr. Beaumont', role: 'B', text: 'That\'s par for the course with that journal. Their impact factor may be impressive, but they do love to put authors through the wringer.', translation: 'C\'est monnaie courante avec cette revue. Leur facteur d\'impact est peut-être impressionnant, mais ils adorent faire passer les auteurs sur le gril.', },
    { speaker: 'Prof. Diallo', role: 'A', text: 'Indeed. The third reviewer takes issue with my use of "demonstrate" — argues I should hedge with "suggest" given the sample size.', translation: 'En effet. Le troisième évaluateur conteste mon usage de "demonstrate" — il soutient que je devrais atténuer avec "suggest" vu la taille de l\'échantillon.', },
    { speaker: 'Dr. Beaumont', role: 'B', text: 'They have a point, you know. Overclaiming is precisely what gives the impact factor its perverse incentive structure — flashy claims, insufficient evidence.', translation: 'Ils ont un point, vous savez. La suraffirmation est précisément ce qui donne au facteur d\'impact sa structure d\'incitation perverse — des affirmations spectaculaires, des preuves insuffisantes.', },
    { speaker: 'Prof. Diallo', role: 'A', text: 'Granted. I\'ll revise accordingly and deposit a preprint while the revised manuscript works its way through the system.', translation: 'Accordé. Je réviserai en conséquence et déposerai une prépublication pendant que le manuscrit révisé chemine dans le système.', },
    { speaker: 'Dr. Beaumont', role: 'B', text: 'Sound strategy. By the way, have you considered expanding this into a monograph? The material certainly warrants it, and the university press has been soliciting submissions.', translation: 'Bonne stratégie. Soit dit en passant, avez-vous envisagé de développer cela en monographie ? Le matériel le justifie certainement, et les presses universitaires sollicitent des soumissions.', },
    { speaker: 'Prof. Diallo', role: 'A', text: 'I had, actually. But a monograph demands a different register altogether — more expansive argumentation, deeper historiographical engagement. It\'s not simply a matter of stitching together journal articles.', translation: 'En fait, j\'y avais pensé. Mais une monographie exige un registre tout à fait différent — une argumentation plus développée, un engagement historiographique plus profond. Ce n\'est pas simplement une question de recoudre des articles de revue.', },
  ],
  conversationTitle: 'Évaluation par les pairs et stratégies de publication',
  pronunciation: [
    {
      word: 'Monograph',
      phonetic: '/ˈmɒnəɡræf/',
      meaning: 'Monographie',
      tip: 'Accent sur la première syllabe : "MON-eh-graf". Le "o" est ouvert comme dans "hot". Le "g" est dur comme dans "go". Le "a" final est très ouvert comme dans "cat".',
    },
    {
      word: 'Proceedings',
      phonetic: '/prəˈsiːdɪŋz/',
      meaning: 'Actes (de conférence)',
      tip: 'Accent sur "SEE" : "preh-SEE-dingz". Le premier "o" est réduit en schwa. Le "ee" est long. Le "s" final est sonore comme dans "dogs". Ne dites pas "pro-SEH-dings".',
    },
    {
      word: 'Preprint',
      phonetic: '/ˈpriːprɪnt/',
      meaning: 'Prépublication',
      tip: 'Accent sur "PREE" : "PREE-print". Le "ee" est long. Le mot est composé de "pre" (avant) + "print" (impression). Ne confondez pas avec "reprint" (réimpression).',
    },
    {
      word: 'Impact',
      phonetic: '/ˈɪmpækt/',
      meaning: 'Impact',
      tip: 'Accent sur "IM" : "IM-pakt". Le "i" est bref comme dans "bit". Le "a" est très ouvert comme dans "cat". Ne dites pas "em-PAKT" ni à la française "im-pakt".',
    },
  ],
}

// ─── c2-l42: Academic Conventions — Hedging, meta-discourse, citation language ─
export const C2_L42: LessonContent = {
  vocab: [
    {
      english: 'Hedging',
      french: 'Atténuation (linguistique)',
      phonetic: '/ˈhɛdʒɪŋ/',
      example: 'Strategic hedging — "the data would appear to suggest" — protects the writer from overclaiming while preserving intellectual credibility.',
      exampleTranslation: 'L\'atténuation stratégique — "the data would appear to suggest" — protège le rédacteur contre la suraffirmation tout en préservant sa crédibilité intellectuelle.',
    },
    {
      english: 'Meta-discourse',
      french: 'Métadiscours',
      phonetic: '/ˌmɛtəˈdɪskɔːrs/',
      example: 'Meta-discourse — phrases like "I will now turn to", "as noted above" — guides the reader through the argumentative architecture of the text.',
      exampleTranslation: 'Le métadiscours — expressions comme "I will now turn to", "as noted above" — guide le lecteur à travers l\'architecture argumentative du texte.',
    },
    {
      english: 'Citation',
      french: 'Citation (référence)',
      phonetic: '/saɪˈteɪʃən/',
      example: 'Self-citation, when excessive, can artificially inflate an author\'s h-index and distort bibliometric assessments.',
      exampleTranslation: 'L\'autocitation, lorsqu\'elle est excessive, peut gonfler artificiellement l\'indice h d\'un auteur et fausser les évaluations bibliométriques.',
    },
    {
      english: 'Colleague',
      french: 'Collègue',
      phonetic: '/ˈkɒliːɡ/',
      example: 'I am indebted to an anonymous colleague whose incisive commentary substantially improved the final manuscript.',
      exampleTranslation: 'Je suis redevable à un collègue anonyme dont le commentaire incisif a substantiellement amélioré le manuscrit final.',
    },
    {
      english: 'Corrigendum',
      french: 'Erratum / Corrigendum',
      phonetic: '/ˌkɒrɪˈdʒɛndəm/',
      example: 'The journal issued a corrigendum after it emerged that the statistical analysis contained a material error.',
      exampleTranslation: 'La revue a publié un corrigendum après qu\'il est apparu que l\'analyse statistique contenait une erreur matérielle.',
    },
  ],
  grammar: {
    title: 'L\'atténuation (hedging) et le métadiscours dans l\'écriture académique',
    explanation: `L'atténuation (hedging) est l'une des conventions les plus critiques de l'écriture académique anglaise. Elle consiste à moduler la force assertive d'un énoncé pour refléter l'incertitude épistémique, la prudence interprétative ou la courtoisie académique. Les principaux dispositifs de hedging en anglais académique comprennent : (1) Les auxiliaires modaux : "may", "might", "could", "would" ("This may indicate..."). (2) Les adverbes épistémiques : "arguably", "possibly", "presumably", "seemingly" ("This is arguably the most significant finding."). (3) Les constructions atténuantes : "it would appear that", "there is reason to believe", "the evidence tends to suggest", "one might tentatively propose". (4) Les verbes de cognition atténués : "suggest", "indicate", "imply", "point to" (plutôt que "prove", "demonstrate", "establish"). Le métadiscours, quant à lui, est le discours sur le discours — les signaux qui organisent le texte pour le lecteur : "as discussed in Section 3", "the following analysis is structured as follows", "it is worth noting that", "I now turn to". La maîtrise de ces deux systèmes est ce qui distingue l'écriture académique compétente de l'écriture simplement correcte.`,
    examples: [
      { sentence: 'The findings would seem to suggest that contextual factors play a more decisive role than previously acknowledged.', translation: 'Les résultats sembleraient suggérer que les facteurs contextuels jouent un rôle plus décisif que ce qui était précédemment reconnu.', isCorrect: true },
      { sentence: 'This proves that the hypothesis is correct and no further research is needed.', translation: '', isCorrect: false },
      { sentence: 'As noted in the preceding section, the methodology employed here differs from that of earlier studies in two crucial respects.', translation: 'Comme indiqué dans la section précédente, la méthodologie employée ici diffère de celle des études antérieures à deux égards cruciaux.', isCorrect: true },
      { sentence: 'One might tentatively propose that the correlation reflects a spurious relationship rather than a causal link.', translation: 'On pourrait proposer avec prudence que la corrélation reflète une relation fallacieuse plutôt qu\'un lien de causalité.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'This proves that the hypothesis is correct and no further research is needed.', correct: 'These findings lend support to the hypothesis, though further research is warranted to confirm the observed pattern.', explanation: 'L\'utilisation de "proves" en contexte académique est presque toujours une suraffirmation. Le discours scientifique exige l\'atténuation : "lends support to", "is consistent with", "provides evidence for". L\'affirmation qu\'aucune recherche ultérieure n\'est nécessaire est rédhibitoire — la science est par nature cumulative et provisoire.' },
      { wrong: 'I want to talk about the methodology now.', correct: 'I now turn to the methodological considerations that underpin this study.', explanation: 'Le métadiscours académique exige un registre formel. "I want to talk about" est trop informel. Les formules conventionnelles incluent : "I now turn to", "the discussion that follows examines", "attention must now be directed to".' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Ouédraogo', role: 'A', text: 'I\'ve been reviewing your draft, and I notice you write "this demonstrates that..." no fewer than six times. Might I suggest some hedging?', translation: 'J\'ai relu votre brouillon, et je remarque que vous écrivez "this demonstrates that..." pas moins de six fois. Puis-je suggérer quelque atténuation ?', },
    { speaker: 'Camille', role: 'B', text: 'I suppose I wanted to sound authoritative. But you\'re right — it reads as though I\'m overclaiming.', translation: 'Je suppose que je voulais paraître autoritaire. Mais vous avez raison — on dirait que je suraffirme.', },
    { speaker: 'Prof. Ouédraogo', role: 'A', text: 'Precisely. Authority in academic writing comes not from force of assertion but from precision of hedging. "Suggests" is often more convincing than "proves" because it signals epistemic honesty.', translation: 'Précisément. L\'autorité dans l\'écriture académique vient non pas de la force d\'affirmation mais de la précision de l\'atténuation. "Suggère" est souvent plus convaincant que "prouve" car il signale l\'honnêteté épistémique.', },
    { speaker: 'Camille', role: 'B', text: 'That makes sense. And what about meta-discourse? I struggle with transitions between sections.', translation: 'Cela a du sens. Et qu\'en est-il du métadiscours ? J\'ai du mal avec les transitions entre les sections.', },
    { speaker: 'Prof. Ouédraogo', role: 'A', text: 'Think of it as signposting for the reader. "Having established X, I now examine Y" — these phrases aren\'t decorative; they\'re the architecture of your argument.', translation: 'Considérez cela comme un balisage pour le lecteur. "Ayant établi X, j\'examine maintenant Y" — ces phrases ne sont pas décoratives ; elles sont l\'architecture de votre argument.', },
    { speaker: 'Camille', role: 'B', text: 'So the reader should never have to wonder where they are in the argument or what\'s coming next.', translation: 'Donc le lecteur ne devrait jamais avoir à se demander où il se trouve dans l\'argument ni ce qui vient ensuite.', },
    { speaker: 'Prof. Ouédraogo', role: 'A', text: 'Exactly. And when you cite others, use reporting verbs that convey your stance — "Smith contends" is not the same as "Smith observes" or "Smith concedes". Each verb positions you differently relative to the source.', translation: 'Exactement. Et quand vous citez d\'autres, utilisez des verbes de rapport qui transmettent votre positionnement — "Smith contends" n\'est pas la même chose que "Smith observes" ou "Smith concedes". Chaque verbe vous positionne différemment par rapport à la source.', },
  ],
  conversationTitle: 'Atténuation et métadiscours académiques',
  pronunciation: [
    {
      word: 'Hedging',
      phonetic: '/ˈhɛdʒɪŋ/',
      meaning: 'Atténuation',
      tip: 'Accent sur "HEDG" : "HEDJ-ing". Le "h" est expiré. Le "e" est court comme dans "bed". Le "dg" = "dj" comme dans "judge". Le suffixe "-ing" se prononce "ing" avec le "ng" nasalisé.',
    },
    {
      word: 'Meta-discourse',
      phonetic: '/ˌmɛtəˈdɪskɔːrs/',
      meaning: 'Métadiscours',
      tip: 'Accent principal sur "COURSE" : "MEH-teh-DISCOURSE". Le "e" de "meta" est ouvert comme dans "met". Le "ou" dans "course" est long et ouvert comme dans "four".',
    },
    {
      word: 'Citation',
      phonetic: '/saɪˈteɪʃən/',
      meaning: 'Citation (référence)',
      tip: 'Accent sur "TAY" : "saï-TAY-shun". Le premier "i" = "aï" long. Ne prononcez PAS "si-ta-tion" à la française — en anglais, c\'est "saï-TAY-shun".',
    },
    {
      word: 'Corrigendum',
      phonetic: '/ˌkɒrɪˈdʒɛndəm/',
      meaning: 'Corrigendum',
      tip: 'Accent sur "JEN" : "KOR-ih-JEN-dum". Le "o" est ouvert comme dans "hot". Le "g" est doux comme dans "gem". Le "um" final est bref. Mot d\'origine latine, courant en anglais académique.',
    },
  ],
}

// ─── c2-l43: Review Discussion — Peer review and academic feedback dialogue ────
export const C2_L43: LessonContent = {
  vocab: [
    {
      english: 'Rebuttal',
      french: 'Réplique / Réfutation',
      phonetic: '/rɪˈbʌtəl/',
      example: 'The authors\' rebuttal addressed each reviewer\'s concern point by point, ultimately securing acceptance.',
      exampleTranslation: 'La réfutation des auteurs a traité chaque préoccupation de l\'évaluateur point par point, obtenant finalement l\'acceptation.',
    },
    {
      english: 'Manuscript',
      french: 'Manuscrit',
      phonetic: '/ˈmænjʊskrɪpt/',
      example: 'The manuscript was returned with extensive marginalia that both humbled and instructed the author.',
      exampleTranslation: 'Le manuscrit a été renvoyé avec d\'abondantes notes marginales qui ont à la fois humilié et instruit l\'auteur.',
    },
    {
      english: 'Endorsement',
      french: 'Approbation / Soutien',
      phonetic: '/ɪnˈdɔːrsmənt/',
      example: 'The editor\'s endorsement carried considerable weight, ensuring the paper would be fast-tracked for publication.',
      exampleTranslation: 'L\'approbation de l\'éditeur portait un poids considérable, garantissant que l\'article serait traité en priorité pour publication.',
    },
    {
      english: 'Substantive',
      french: 'Substantif / De fond',
      phonetic: '/ˈsʌbstəntɪv/',
      example: 'The reviewers raised substantive concerns about the operationalisation of the key variables.',
      exampleTranslation: 'Les évaluateurs ont soulevé des préoccupations de fond sur l\'opérationnalisation des variables clés.',
    },
    {
      english: 'Disposition',
      french: 'Statut (d\'un article)',
      phonetic: '/ˌdɪspəˈzɪʃən/',
      example: 'The journal\'s disposition was "revise and resubmit," giving the authors six months to address the critiques.',
      exampleTranslation: 'La décision de la revue était "réviser et resoumettre", accordant aux auteurs six mois pour répondre aux critiques.',
    },
  ],
  grammar: {
    title: 'Les verbes de rapport et le positionnement évaluatif dans le compte rendu académique',
    explanation: `Les verbes de rapport (reporting verbs) sont l'instrument principal par lequel un auteur académique positionne son discours par rapport aux sources qu'il cite et aux arguments qu'il évalue. Le choix du verbe n'est jamais neutre — il encode une évaluation implicite : (1) Verbes neutres/factuels : "states", "notes", "observes", "points out" — rapportent sans évaluer. (2) Verbes d'argumentation : "argues", "contends", "maintains", "asserts" — signalent une position défendue (pas nécessairement acceptée). (3) Verbes de conviction : "demonstrates", "establishes", "shows convincingly" — endossent la validité de la source. (4) Verbes de distance critique : "claims", "purports to show", "attempts to argue" — marquent une réserve ou un scepticisme. (5) Verbes de concession : "concedes", "acknowledges", "admits" — signalent un aveu partiel. Dans le contexte de l'évaluation par les pairs, ces verbes structurent la dynamique entre auteur et évaluateur : "Reviewer 2 contends that..." (position de l'évaluateur), "We acknowledge that... however, we maintain that..." (concession + maintien de position). Cette grammaire évaluative est essentielle pour naviguer le processus de révision avec rigueur et diplomatie.`,
    examples: [
      { sentence: 'Smith (2023) convincingly demonstrates that the correlation is robust across multiple datasets, though the causal mechanism remains to be established.', translation: 'Smith (2023) démontre de façon convaincante que la corrélation est robuste à travers de multiples jeux de données, bien que le mécanisme causal reste à établir.', isCorrect: true },
      { sentence: 'Jones claims that the results are wrong.', translation: '', isCorrect: false },
      { sentence: 'While the reviewer contends that the sample size is insufficient, we would argue that the effect size is large enough to offset this limitation.', translation: 'Bien que l\'évaluateur soutienne que la taille de l\'échantillon est insuffisante, nous soutiendrions que la taille de l\'effet est suffisamment grande pour compenser cette limite.', isCorrect: true },
      { sentence: 'The authors concede that the longitudinal design would have been preferable, yet maintain that the cross-sectional findings are nonetheless suggestive.', translation: 'Les auteurs concèdent que le design longitudinal aurait été préférable, mais maintiennent que les résultats transversaux sont néanmoins suggestifs.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Jones claims that the results are wrong.', correct: 'Jones (2022) disputes the validity of the results, arguing that the methodological limitations undermine the conclusions.', explanation: '"Claims" utilisé sans contexte peut paraître péjoratif — il sous-entend que l\'affirmation est douteuse. "Disputes" ou "takes issue with" est plus précis et académiquement approprié. De plus, "wrong" est trop direct et informel ; "methodological limitations undermine the conclusions" est la formulation académique correcte.' },
      { wrong: 'The reviewer said that we should change the methodology.', correct: 'The reviewer recommended that the methodology be revised to address concerns about selection bias.', explanation: '"Said" est trop vague et informel pour le discours académique. "Recommended", "suggested", "observed that" sont les verbes de rapport appropriés. De plus, "change" est trop général — "revise to address" spécifie la nature et la finalité de la modification.' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Ndiaye', role: 'A', text: 'Right, let\'s discuss the reviews. The first is largely positive — endorses the theoretical framework but suggests the empirical evidence could be stronger.', translation: 'Bon, discutons des évaluations. La première est largement positive — elle approuve le cadre théorique mais suggère que les preuves empiriques pourraient être plus solides.', },
    { speaker: 'Dr. Laurent', role: 'B', text: 'And the second?', translation: 'Et la seconde ?', },
    { speaker: 'Prof. Ndiaye', role: 'A', text: 'Substantive concerns. Contends we\'ve conflated correlation with causation and that the operationalisation of "social capital" is theoretically undermotivated.', translation: 'Des préoccupations de fond. Soutient que nous avons confondu corrélation et causalité et que l\'opérationnalisation de "capital social" est théoriquement sous-motivée.', },
    { speaker: 'Dr. Laurent', role: 'B', text: 'I feared as much. We\'ll need a robust rebuttal — we should acknowledge the conceptual ambiguity while maintaining that our operationalisation is consistent with Bourdieu\'s formulation.', translation: 'Je m\'en doutais. Il nous faudra une réfutation solide — nous devrions reconnaître l\'ambiguïté conceptuelle tout en maintenant que notre opérationnalisation est cohérente avec la formulation de Bourdieu.', },
    { speaker: 'Prof. Ndiaye', role: 'A', text: 'Agreed. Concede the point about the direction of causality — we\'ll reframe the conclusion accordingly. But hold firm on the theoretical grounding.', translation: 'Convenu. Concédons le point sur la direction de la causalité — nous recadrerons la conclusion en conséquence. Mais tenons ferme sur le fondement théorique.', },
    { speaker: 'Dr. Laurent', role: 'B', text: 'The disposition is "revise and resubmit," so we have room. I\'ll draft the response letter — point by point, with page references to the revised manuscript.', translation: 'La décision est "réviser et resoumettre", donc nous avons de la marge. Je rédigerai la lettre de réponse — point par point, avec références de page au manuscrit révisé.', },
    { speaker: 'Prof. Ndiaye', role: 'A', text: 'Good. And remember — the tone of the rebuttal matters as much as the substance. Courteous but firm. We\'re engaging in scholarly debate, not defending a thesis before inquisitors.', translation: 'Bien. Et rappelez-vous — le ton de la réfutation compte autant que le fond. Courtois mais ferme. Nous participons à un débat savant, nous ne défendons pas une thèse devant des inquisiteurs.', },
  ],
  conversationTitle: 'Révision par les pairs et rédaction de la réponse',
  pronunciation: [
    {
      word: 'Rebuttal',
      phonetic: '/rɪˈbʌtəl/',
      meaning: 'Réfutation',
      tip: 'Accent sur "BUT" : "rih-BUT-al". Le "e" est réduit en schwa. Le "u" accentué est très ouvert comme dans "cut". Le "a" final est également réduit.',
    },
    {
      word: 'Manuscript',
      phonetic: '/ˈmænjʊskrɪpt/',
      meaning: 'Manuscrit',
      tip: 'Accent sur "MAN" : "MAN-yoo-skript". Le "a" est très ouvert comme dans "cat". Le "u" après "y" est bref. Le "scr" final est clair : ne l\'avalez pas.',
    },
    {
      word: 'Endorsement',
      phonetic: '/ɪnˈdɔːrsmənt/',
      meaning: 'Approbation',
      tip: 'Accent sur "DORSE" : "in-DORSE-ment". Le "o" accentué est long comme dans "four". Le "e" initial est réduit en schwa. Le "ment" final est bref et réduit.',
    },
    {
      word: 'Substantive',
      phonetic: '/ˈsʌbstəntɪv/',
      meaning: 'Substantif',
      tip: 'Accent sur "SUB" : "SUB-stan-tiv". Le "u" est très ouvert comme dans "cut". Le "a" du milieu est réduit. Le "i" final est bref. Ne confondez pas avec "substantial" (considérable).',
    },
  ],
}

// ─── c2-l44: Publication Process — Pronouncing academic terminology ─────────────
export const C2_L44: LessonContent = {
  vocab: [
    {
      english: 'Bibliometrics',
      french: 'Bibliométrie',
      phonetic: '/ˌbɪbliəˈmɛtrɪks/',
      example: 'Bibliometrics has transformed academic evaluation, yet its critics warn that quantification displaces qualitative judgment.',
      exampleTranslation: 'La bibliométrie a transformé l\'évaluation académique, pourtant ses critiques avertissent que la quantification déplace le jugement qualitatif.',
    },
    {
      english: 'Open access',
      french: 'Accès ouvert',
      phonetic: '/ˈoʊpən ˈæksɛs/',
      example: 'The transition to open access has democratised knowledge but raised pressing questions about sustainable funding models.',
      exampleTranslation: 'La transition vers l\'accès ouvert a démocratisé le savoir mais a soulevé des questions pressantes sur les modèles de financement durables.',
    },
    {
      english: 'Eponymous',
      french: 'Éponyme',
      phonetic: '/ɪˈpɒnɪməs/',
      example: 'The eponymous law — named after its formulator rather than its discoverer — illustrates the politics of attribution in science.',
      exampleTranslation: 'La loi éponyme — nommée d\'après son formulateur plutôt que son découvreur — illustre la politique de l\'attribution dans la science.',
    },
    {
      english: 'Compendium',
      french: 'Compendium / Recueil',
      phonetic: '/kəmˈpɛndiəm/',
      example: 'The compendium of conference papers offers a snapshot of the field\'s current preoccupations and methodological fault lines.',
      exampleTranslation: 'Le compendium des communications du congrès offre un aperçu des préoccupations actuelles du domaine et de ses lignes de faille méthodologiques.',
    },
    {
      english: 'Erratum',
      french: 'Erratum',
      phonetic: '/ɪˈrɑːtəm/',
      example: 'An erratum was published after readers identified a transcription error in the dataset\'s fourth column.',
      exampleTranslation: 'Un erratum a été publié après que des lecteurs ont identifié une erreur de transcription dans la quatrième colonne du jeu de données.',
    },
  ],
  grammar: {
    title: 'La syntaxe de l\'article scientifique : structures conventionnelles par section',
    explanation: `L'article scientifique en anglais suit une architecture rhétorique codifiée, souvent désignée par l'acronyme IMRAD (Introduction, Methods, Results, Discussion). Chaque section possède ses conventions syntaxiques propres : (1) L'Introduction utilise typiquement le présent pour le contexte général ("Interest in X has grown significantly") et le passé pour les résultats spécifiques antérieurs ("Smith (2020) found that..."). Le mouvement rhétorique passe du contexte large à la "niche" (le problème non résolu), puis à l'objectif de l'étude ("This paper investigates..."). (2) La section Methods emploie systématiquement la voix passive au passé ("Participants were recruited", "Data were analysed") pour dépersonnaliser la procédure. (3) La section Results utilise le passé pour les découvertes ("The analysis revealed...") et le présent pour les tableaux et figures ("Table 1 shows..."). (4) La section Discussion revient au présent pour interpréter ("These findings suggest...") et au passé pour rappeler les résultats ("The data indicated..."). La maîtrise de ces alternances temporelles est un marqueur fiable de compétence académique avancée.`,
    examples: [
      { sentence: 'Recent scholarship has increasingly interrogated the assumption that bibliometric indicators reliably measure research quality.', translation: 'La recherche récente a de plus en plus interrogé l\'hypothèse selon laquelle les indicateurs bibliométriques mesurent fiablement la qualité de la recherche.', isCorrect: true },
      { sentence: 'The data was collected through semi-structured interviews and analysed using thematic coding.', translation: '', isCorrect: false },
      { sentence: 'As Table 3 indicates, the variance explained by the model increased substantially when the interaction term was included.', translation: 'Comme l\'indique le Tableau 3, la variance expliquée par le modèle a augmenté considérablement lorsque le terme d\'interaction a été inclus.', isCorrect: true },
      { sentence: 'These results are consistent with the hypothesis that open-access articles receive higher citation rates, though the effect attenuates when discipline is controlled for.', translation: 'Ces résultats sont cohérents avec l\'hypothèse que les articles en accès ouvert reçoivent des taux de citation plus élevés, bien que l\'effet s\'atténue lorsque la discipline est contrôlée.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The data was collected through semi-structured interviews and analysed using thematic coding.', correct: 'The data were collected through semi-structured interviews and analysed using thematic coding.', explanation: '"Data" est le pluriel du latin "datum". En anglais académique formel, on utilise "data were" (pluriel). "Data was" est courant à l\'oral et de plus en plus accepté, mais dans un manuscrit soumis à évaluation par les pairs, la forme plurielle est fortement préférée, surtout dans les sciences.' },
      { wrong: 'Table 1 showed the demographic characteristics of the sample.', correct: 'Table 1 shows the demographic characteristics of the sample.', explanation: 'Quand on renvoie à des tableaux ou figures qui sont toujours présents dans l\'article, on utilise le présent : "Table 1 shows..." Le tableau ne disparaît pas — il continue de montrer les données. Le passé ("showed") n\'est utilisé que si le tableau a été retiré ou modifié.' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Konaté', role: 'A', text: 'I\'ve just submitted the revised manuscript — all four reviewers\' comments addressed, point by point. The bibliometrics section was the most contentious.', translation: 'Je viens de soumettre le manuscrit révisé — les commentaires des quatre évaluateurs traités, point par point. La section bibliométrique était la plus controversée.', },
    { speaker: 'Dr. Mercier', role: 'B', text: 'I\'m not surprised. Bibliometrics is a minefield — you either treat it as neutral measurement and get criticised for naivety, or you critique it and get accused of special pleading.', translation: 'Je n\'en suis pas surpris. La bibliométrie est un champ de mines — soit on la traite comme mesure neutre et on est critiqué pour naïveté, soit on la critique et on est accusé de plaidoyer intéressé.', },
    { speaker: 'Prof. Konaté', role: 'A', text: 'Exactly. I ended up hedging extensively — "while bibliometric indicators offer a useful heuristic, they cannot substitute for substantive peer assessment."', translation: 'Exactement. J\'ai fini par atténuer abondamment — "bien que les indicateurs bibliométriques offrent une heuristique utile, ils ne peuvent se substituer à une évaluation substantielle par les pairs."', },
    { speaker: 'Dr. Mercier', role: 'B', text: 'Well crafted. And the open-access question — did they press you on that? Some journals insist on CC-BY licensing now.', translation: 'Bien formulé. Et la question de l\'accès ouvert — ont-ils insisté là-dessus ? Certaines revues exigent maintenant la licence CC-BY.', },
    { speaker: 'Prof. Konaté', role: 'A', text: 'They did. I opted for gold open access — the article processing charge is steep, but the visibility is worth it, especially for an eponymous contribution.', translation: 'Oui. J\'ai opté pour l\'accès ouvert doré — les frais de traitement d\'article sont élevés, mais la visibilité en vaut la peine, surtout pour une contribution éponyme.', },
    { speaker: 'Dr. Mercier', role: 'B', text: 'A compendium chapter might have been more economical, but I take your point. At least there won\'t be an erratum — you triple-checked the data?', translation: 'Un chapitre de compendium aurait été plus économique, mais je comprends votre point. Au moins il n\'y aura pas d\'erratum — vous avez vérifié les données trois fois ?', },
    { speaker: 'Prof. Konaté', role: 'A', text: 'Quadruple-checked, actually. One erratum can undo years of credibility. The stakes are simply too high for carelessness.', translation: 'Vérifiées quatre fois, en fait. Un seul erratum peut défaire des années de crédibilité. Les enjeux sont tout simplement trop élevés pour la négligence.', },
  ],
  conversationTitle: 'Le processus de publication : soumission et révision',
  pronunciation: [
    {
      word: 'Bibliometrics',
      phonetic: '/ˌbɪbliəˈmɛtrɪks/',
      meaning: 'Bibliométrie',
      tip: 'Accent sur "MET" : "bib-lee-eh-MET-riks". Le "i" de "bi" est bref. Le "e" de "le" est réduit en schwa. Le "e" accentué est ouvert comme dans "met". Ne dites pas "bi-bli-o-MET-riks".',
    },
    {
      word: 'Eponymous',
      phonetic: '/ɪˈpɒnɪməs/',
      meaning: 'Éponyme',
      tip: 'Accent sur "PON" : "eh-PON-ih-mus". Le "e" initial est réduit. Le "o" accentué est ouvert comme dans "hot". Le "y" = "i" bref. Ne dites pas "ee-PO-ni-mus" à la française.',
    },
    {
      word: 'Compendium',
      phonetic: '/kəmˈpɛndiəm/',
      meaning: 'Compendium',
      tip: 'Accent sur "PEN" : "kum-PEN-dee-um". Le "o" initial est réduit en schwa. Le "e" accentué est ouvert comme dans "pen". Le "i" est bref. Le "um" final est doux.',
    },
    {
      word: 'Erratum',
      phonetic: '/ɪˈrɑːtəm/',
      meaning: 'Erratum',
      tip: 'Accent sur "RAH" : "eh-RAH-tum". Le "e" initial est réduit en schwa. Le "a" accentué est long et ouvert comme dans "father". Le "t" est clair, le "um" est bref. Distinguez de "corrigendum" (correction d\'erreurs de l\'éditeur vs. de l\'auteur).',
    },
  ],
}

// ─── c2-l45: Publishing Sounds — Register and tone in academic writing ─────────
export const C2_L45: LessonContent = {
  vocab: [
    {
      english: 'Register',
      french: 'Registre (de langue)',
      phonetic: '/ˈrɛdʒɪstər/',
      example: 'The ability to modulate register — from the formality of a journal article to the conversational tone of a book review — distinguishes the accomplished academic.',
      exampleTranslation: 'La capacité de moduler le registre — de la formalité d\'un article de revue au ton conversationnel d\'un compte rendu de livre — distingue l\'universitaire accompli.',
    },
    {
      english: 'Collocation',
      french: 'Collocation (linguistique)',
      phonetic: '/ˌkɒləˈkeɪʃən/',
      example: 'Non-native writers often produce grammatically correct but collocationally infelicitous phrases — "do a contribution" instead of "make a contribution".',
      exampleTranslation: 'Les rédacteurs non natifs produisent souvent des phrases grammaticalement correctes mais collocationnellement maladroites — "do a contribution" au lieu de "make a contribution".',
    },
    {
      english: 'Circumlocution',
      french: 'Circonlocution',
      phonetic: '/ˌsɜːrkəmloʊˈkjuːʃən/',
      example: 'Excessive circumlocution — "it is not unreasonable to suggest that" where "arguably" suffices — is the hallmark of insecure academic writing.',
      exampleTranslation: 'La circonlocution excessive — "it is not unreasonable to suggest that" là où "arguably" suffit — est la marque de l\'écriture académique incertaine.',
    },
    {
      english: 'Idiom',
      french: 'Idiotisme / Expression idiomatique',
      phonetic: '/ˈɪdiəm/',
      example: 'Using idioms like "the jury is still out" or "a double-edged sword" in academic prose can enliven the argument — or, if overused, impoverish it.',
      exampleTranslation: 'Utiliser des idiotismes comme "the jury is still out" ou "a double-edged sword" dans la prose académique peut vivifier l\'argument — ou, s\'ils sont surutilisés, l\'appauvrir.',
    },
    {
      english: 'Prose',
      french: 'Prose',
      phonetic: '/proʊz/',
      example: 'Elegant academic prose is not ornamental — it is instrumental; clarity of expression and clarity of thought are inseparable.',
      exampleTranslation: 'La prose académique élégante n\'est pas ornementale — elle est instrumentale ; la clarté de l\'expression et la clarté de la pensée sont inséparables.',
    },
  ],
  grammar: {
    title: 'Le registre académique : ton, niveau de formalité et style idiomatique',
    explanation: `Le registre académique en anglais n'est pas monolithique — il varie selon le genre (article de revue, compte rendu de livre, chapitre d'ouvrage, communication conférence), la discipline (les sciences dures tolèrent moins de variation que les humanités), et la position rhétorique (affirmation vs. concession, introduction vs. conclusion). Les principaux paramètres du registre académique sont : (1) La densité lexicale : l'écriture académique privilégie les groupes nominaux étendus ("the subsequently documented correlation between socioeconomic status and educational attainment") sur les structures verbales multiples. (2) L'absence de contraction : "does not" (pas "doesn't"), "it is" (pas "it's") dans les articles de revue — mais les contractions sont acceptables dans les communications de conférence et les comptes rendus de livre. (3) La collocation : les associations lexicales conventionnelles ("draw a conclusion", pas "take a conclusion"; "conduct research", pas "do research"; "pose a question", pas "put a question") sont des marqueurs de compétence que les évaluateurs par les pairs remarquent immédiatement. (4) L'évitement de la circonlocution excessive : "it is worth noting that" est acceptable, mais "it is not without significance that" est pompeux. À niveau C2, il faut savoir ajuster le registre avec précision — ni trop formel ( pédant), ni trop décontracté (inapproprié).`,
    examples: [
      { sentence: 'This paper draws on a longitudinal dataset to examine the relationship between institutional funding and research output.', translation: 'Cet article s\'appuie sur un jeu de données longitudinales pour examiner la relation entre le financement institutionnel et la production de recherche.', isCorrect: true },
      { sentence: 'It is not beyond the realm of possibility that the findings could perhaps be interpreted as potentially indicative of a trend.', translation: '', isCorrect: false },
      { sentence: 'In this review, I want to argue that the book makes a solid contribution, though it doesn\'t quite nail the theoretical framework.', translation: '', isCorrect: false },
      { sentence: 'The collocationally conventional phrase "conduct a systematic review" signals disciplinary competence in a way that "do a systematic review" does not.', translation: 'L\'expression collocationnellement conventionnelle "conduct a systematic review" signale la compétence disciplinaire d\'une manière que "do a systematic review" ne le fait pas.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'It is not beyond the realm of possibility that the findings could perhaps be interpreted as potentially indicative of a trend.', correct: 'The findings suggest a possible trend.', explanation: 'La circonlocution excessive est l\'un des défauts les plus courants de l\'écriture académique des non-natifs. Chaque couche d\'atténuation ("not beyond the realm of possibility" + "could perhaps" + "potentially indicative of") affaiblit l\'énoncé au lieu de le nuancer. Une seule atténuation bien choisie ("suggest", "possibly", "may") est plus efficace et plus élégante.' },
      { wrong: 'In this review, I want to argue that the book makes a solid contribution, though it doesn\'t quite nail the theoretical framework.', correct: 'This review argues that the book makes a significant contribution, though the theoretical framework would benefit from further elaboration.', explanation: 'Le mélange de registres (formel "contribution" + informel "doesn\'t quite nail") est incohérent. Dans un compte rendu académique, on maintient un registre constant : "would benefit from further elaboration" au lieu de "doesn\'t quite nail".' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Touré', role: 'A', text: 'I\'ve been reading your latest manuscript, and the argument is sound — but the register is uneven. You shift from "it is noteworthy that" to "it\'s worth mentioning" within the same paragraph.', translation: 'J\'ai lu votre dernier manuscrit, et l\'argument est solide — mais le registre est inégal. Vous passez de "it is noteworthy that" à "it\'s worth mentioning" dans le même paragraphe.', },
    { speaker: 'Amara', role: 'B', text: 'I see the issue. I suppose I was trying to avoid sounding too stiff, but I ended up being inconsistent instead.', translation: 'Je vois le problème. Je suppose que j\'essayais d\'éviter de paraître trop rigide, mais j\'ai fini par être incohérent.', },
    { speaker: 'Prof. Touré', role: 'A', text: 'Precisely. Consistency of register is not the same as rigidity. You can be formal without being pompous — and conversational without being casual.', translation: 'Précisément. La cohérence du registre n\'est pas la même chose que la rigidité. On peut être formel sans être pompeux — et conversationnel sans être décontracté.', },
    { speaker: 'Amara', role: 'B', text: 'What about collocations? A reviewer once told me my English was "grammatically flawless but collocationally off." How do I fix that?', translation: 'Et les collocations ? Un évaluateur m\'a dit un jour que mon anglais était "grammaticalement irréprochable mais collocationnellement décalé". Comment corriger cela ?', },
    { speaker: 'Prof. Touré', role: 'A', text: 'Read extensively in your discipline — not just for content but for phrasing. Notice that we "pose a question", "advance an argument", "draw a distinction", "cast doubt on". These are not rules you memorise; they\'re patterns you absorb.', translation: 'Lisez abondamment dans votre discipline — non pas seulement pour le contenu mais pour la formulation. Remarquez que nous "posons une question", "avances un argument", "établissons une distinction", "jetons le doute sur". Ce ne sont pas des règles qu\'on mémorise ; ce sont des schémas qu\'on absorbe.', },
    { speaker: 'Amara', role: 'B', text: 'And circumlocution — I know I\'m prone to it. I write "it is not unreasonable to suppose" when I could simply write "arguably." ', translation: 'Et la circonlocution — je sais que j\'y suis enclin. J\'écris "it is not unreasonable to suppose" quand je pourrais simplement écrire "arguably."', },
    { speaker: 'Prof. Touré', role: 'A', text: 'Then you already know the cure. Elegant academic prose is concise prose. Every word must earn its place — if a shorter phrase conveys the same meaning with equal precision, the shorter phrase wins.', translation: 'Alors vous connaissez déjà le remède. La prose académique élégante est une prose concise. Chaque mot doit gagner sa place — si une phrase plus courte transmet le même sens avec une précision égale, la phrase plus courte gagne.', },
  ],
  conversationTitle: 'Registre et style dans l\'écriture académique',
  pronunciation: [
    {
      word: 'Collocation',
      phonetic: '/ˌkɒləˈkeɪʃən/',
      meaning: 'Collocation',
      tip: 'Accent sur "KAY" : "kol-eh-KAY-shun". Le "o" initial est ouvert comme dans "hot". Le premier "o" du milieu est réduit. Le "a" accentué est long comme dans "day". Ne dites pas "ko-lo-kah-SION" à la française.',
    },
    {
      word: 'Circumlocution',
      phonetic: '/ˌsɜːrkəmloʊˈkjuːʃən/',
      meaning: 'Circonlocution',
      tip: 'Accent principal sur "KLOO" : "ser-kum-loh-KLOO-shun". Le premier "i" = "er" comme dans "sir". Le "u" accentué est long comme dans "blue". Le suffixe "-tion" = "shun".',
    },
    {
      word: 'Idiom',
      phonetic: '/ˈɪdiəm/',
      meaning: 'Idiotisme / Expression idiomatique',
      tip: 'Accent sur "I" : "ID-ee-um". Le "i" est bref comme dans "bit". Le "d" est clair. Le "um" final est doux. Ne dites pas "ee-DEE-om" — l\'accent est sur la première syllabe.',
    },
    {
      word: 'Prose',
      phonetic: '/proʊz/',
      meaning: 'Prose',
      tip: 'Une seule syllabe : "prohz". Le "o" est long comme dans "go". Le "s" final est sonore comme dans "dogs" — ne le prononcez pas "s" sourd. Ne dites pas "pross".',
    },
  ],
}
