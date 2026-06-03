import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C1 ADVANCED — UNIT 1: DIPLOMATIC ENGLISH (c1-l1 through c1-l5)
// YOELANG English Learning App for Francophone Users
// Advanced: diplomatic register, tactful language, treaty negotiation, formal discourse
// ════════════════════════════════════════════════════════════════════════════════

// ─── c1-l1: Diplomatic Vocabulary ─────────────────────────────────────────────────
export const C1_L1: LessonContent = {
  vocab: [
    { english: 'ambassador', french: 'ambassadeur / ambassadrice', phonetic: '/æmˈbæsədər/', example: 'The ambassador presented her credentials to the President.', exampleTranslation: 'L\'ambassadrice a présenté ses lettres de créance au Président.' },
    { english: 'sovereignty', french: 'souveraineté', phonetic: '/ˈsɒvrənti/', example: 'The treaty respects the sovereignty of both nations.', exampleTranslation: 'Le traité respecte la souveraineté des deux nations.' },
    { english: 'ratify', french: 'ratifier', phonetic: '/ˈrætɪfaɪ/', example: 'The parliament voted to ratify the international agreement.', exampleTranslation: 'Le parlement a voté pour ratifier l\'accord international.' },
    { english: 'détente', french: 'détente', phonetic: '/deɪˈtɒnt/', example: 'The period of détente between the two superpowers lasted a decade.', exampleTranslation: 'La période de détente entre les deux superpuissances a duré une décennie.' },
    { english: 'concession', french: 'concession', phonetic: '/kənˈseʃn/', example: 'Both parties made significant concessions to reach the accord.', exampleTranslation: 'Les deux parties ont fait des concessions significatives pour parvenir à l\'accord.' },
  ],
  grammar: {
    title: 'Le vocabulaire diplomatique : nuances entre registres formel et informel',
    explanation: 'Le langage diplomatique exige une précision extrême où chaque mot porte une signification juridique et politique : (1) « Ambassador » ≠ « envoy » ≠ « emissary » : un ambassador est le représentant permanent accrédité ; un envoy est un représentant temporaire ; un emissary est un émissaire non officiel. (2) « Ratify » ≠ « sign » ≠ « endorse » : signer un traité = engagement politique ; ratifier = engagement juridique après approbation parlementaire ; endorser = soutenir sans engagement contraignant. (3) « Sovereignty » est indénombrable — on ne dit jamais « sovereignties ». (4) « Détente » est un emprunt au français utilisé en anglais diplomatique avec une prononciation anglicisée : /deɪˈtɒnt/ et non /detɑ̃t/. (5) « Accord » ≠ « treaty » ≠ « convention » : un accord est moins formel qu\'un traité ; une convention est un accord multilatéral.',
    examples: [
      { sentence: 'The government has signed the treaty but has yet to ratify it.', translation: 'Le gouvernement a signé le traité mais n\'a pas encore ratifié.', isCorrect: true },
      { sentence: 'The ambassador was sent as an emissary to the peace talks.', translation: '', isCorrect: false },
      { sentence: 'Both nations agreed to respect each other\'s sovereignty.', translation: 'Les deux nations ont accepté de respecter la souveraineté de l\'autre.', isCorrect: true },
      { sentence: 'The convention on climate change was ratified by 190 countries.', translation: 'La convention sur le changement climatique a été ratifiée par 190 pays.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The ambassador was sent as an emissary to the peace talks.', correct: 'An emissary was sent to the peace talks.', explanation: 'Un ambassador est un poste officiel permanent ; un emissary est un émissaire non officiel. On ne les confond pas — un ambassador ne « se fait pas envoyer comme émissaire ».' },
      { wrong: 'The country has many sovereignties.', correct: 'The country has full sovereignty.', explanation: '« Sovereignty » est indénombrable. On dit « full sovereignty », « national sovereignty », jamais « sovereignties » au pluriel.' },
    ],
  },
  conversation: [
    { speaker: 'Ambassador Duval', role: 'A', text: 'Thank you for receiving me, Minister. I come with a proposal from my government aimed at strengthening bilateral relations.', translation: 'Merci de me recevoir, Monsieur le Ministre. J\'apporte une proposition de mon gouvernement visant à renforcer les relations bilatérales.' },
    { speaker: 'Minister Kovac', role: 'B', text: 'We welcome any initiative that respects our sovereignty and promotes mutual understanding. What are the key points?', translation: 'Nous accueillons favorablement toute initiative qui respecte notre souveraineté et promeut la compréhension mutuelle. Quels sont les points clés ?' },
    { speaker: 'Ambassador Duval', role: 'A', text: 'First, we propose a cultural exchange programme. Second, a framework for joint economic development. Both would require ratification by our respective parliaments.', translation: 'Premièrement, nous proposons un programme d\'échanges culturels. Deuxièmement, un cadre de développement économique conjoint. Les deux nécessiteraient une ratification par nos parlements respectifs.' },
    { speaker: 'Minister Kovac', role: 'B', text: 'The cultural exchange could be implemented swiftly. However, the economic framework may require concessions from both sides.', translation: 'L\'échange culturel pourrait être mis en œuvre rapidement. Cependant, le cadre économique pourrait exiger des concessions des deux côtés.' },
    { speaker: 'Ambassador Duval', role: 'A', text: 'Indeed. My government is prepared to make concessions, provided that the principle of reciprocity is upheld.', translation: 'En effet. Mon gouvernement est prêt à faire des concessions, à condition que le principe de réciprocité soit respecté.' },
    { speaker: 'Minister Kovac', role: 'B', text: 'That is a reasonable position. I shall consult with the Prime Minister and revert to you at the earliest opportunity.', translation: 'C\'est une position raisonnable. Je consulterai le Premier ministre et je vous reviendrai dans les plus brefs délais.' },
  ],
  conversationTitle: 'Proposition diplomatique : échanges et coopération bilatérale',
  pronunciation: [
    { word: 'Ambassador', phonetic: '/æmˈbæsədər/', meaning: 'Ambassadeur', tip: 'L\'accent est sur « BAS » : « am-BAS-suh-der ». Ne prononcez pas à la française « am-ba-sa-deur ». Le « a » de « bas » est très ouvert.' },
    { word: 'Sovereignty', phonetic: '/ˈsɒvrənti/', meaning: 'Souveraineté', tip: 'Prononcez « SOV-run-ti » — l\'accent est sur « SOV ». Le « eign » se réduit en « run ». Ne dites pas « so-vrain-eu-ti ».' },
    { word: 'Ratify', phonetic: '/ˈrætɪfaɪ/', meaning: 'Ratifier', tip: 'L\'accent est sur « RA » : « RA-ti-faï ». Le « a » est ouvert comme dans « cat ». Le suffixe « -fy » se prononce toujours « faï ».' },
    { word: 'Détente', phonetic: '/deɪˈtɒnt/', meaning: 'Détente', tip: 'En anglais, prononcez « day-TONT » — ne dites pas le mot à la française ! Le « en » devient « on » et l\'accent est sur la deuxième syllabe.' },
  ],
}

// ─── c1-l2: Tactful Language ──────────────────────────────────────────────────────
export const C1_L2: LessonContent = {
  vocab: [
    { english: 'to understate', french: 'minimiser / sous-estimer', phonetic: '/ˌʌndərˈsteɪt/', example: 'It would be an understatement to say the situation is delicate.', exampleTranslation: 'Ce serait un euphémisme de dire que la situation est délicate.' },
    { english: 'to convey', french: 'transmettre / exprimer', phonetic: '/kənˈveɪ/', example: 'I wish to convey our deepest concern regarding the recent developments.', exampleTranslation: 'Je souhaite transmettre notre profonde préoccupation concernant les développements récents.' },
    { english: 'to refrain from', french: 's\'abstenir de', phonetic: '/rɪˈfreɪn frɒm/', example: 'We urge both parties to refrain from further escalation.', exampleTranslation: 'Nous exhortons les deux parties à s\'abstenir de toute escalade supplémentaire.' },
    { english: 'apprehension', french: 'appréhension / inquiétude', phonetic: '/ˌæprɪˈhenʃn/', example: 'There is considerable apprehension about the implications of this policy.', exampleTranslation: 'Il y a une appréhension considérable quant aux implications de cette politique.' },
    { english: 'to reiterate', french: 'réitérer / réaffirmer', phonetic: '/riːˈɪtəreɪt/', example: 'I must reiterate our commitment to a peaceful resolution.', exampleTranslation: 'Je dois réitérer notre engagement en faveur d\'une résolution pacifique.' },
  ],
  grammar: {
    title: 'Le langage diplomatique : atténuation et litote (hedging and understatement)',
    explanation: 'La diplomatie repose sur l\'art de dire sans offenser, de critiquer sans attaquer, de menacer sans agresser : (1) L\'atténuation (hedging) : « It would appear that... » au lieu de « It is... » ; « One might suggest... » au lieu de « You should... » ; « There is some concern that... » au lieu de « We are worried that... ». (2) La litote (understatement) : « The situation is somewhat concerning » (= c\'est catastrophique) ; « We have reservations » (= nous sommes totalement opposés) ; « It would be regrettable » (= ce serait inacceptable). (3) Le passif diplomatique : « Mistakes were made » (on ne nomme personne) au lieu de « You made mistakes ». (4) Les formulations conditionnelles de distance : « It might be worth considering... » / « One could argue that... » / « It is not inconceivable that... ». (5) « Refrain from » + -ing est plus formel que « don\'t » : « We ask that you refrain from commenting » ≠ « Don\'t comment ».',
    examples: [
      { sentence: 'It would appear that certain provisions of the agreement have not been fully implemented.', translation: 'Il semblerait que certaines dispositions de l\'accord n\'aient pas été pleinement mises en œuvre.', isCorrect: true },
      { sentence: 'You didn\'t implement the agreement properly.', translation: '', isCorrect: false },
      { sentence: 'We would respectfully suggest that an alternative approach might yield more productive results.', translation: 'Nous suggérons respectueusement qu\'une approche alternative pourrait donner des résultats plus productifs.', isCorrect: true },
      { sentence: 'One might argue that the current trajectory is not entirely sustainable.', translation: 'On pourrait avancer que la trajectoire actuelle n\'est pas entièrement durable.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'You didn\'t implement the agreement properly.', correct: 'It would appear that certain provisions of the agreement have not been fully implemented.', explanation: 'En langage diplomatique, on évite les accusations directes (« You didn\'t »). Le passif (« have not been implemented ») et l\'atténuation (« It would appear ») permettent de critiquer sans accuser nommément.' },
      { wrong: 'We are very angry about your decision.', correct: 'We have significant reservations about the decision and would welcome an opportunity to discuss it further.', explanation: '« Very angry » est trop direct et émotionnel. En diplomatie, on exprime son mécontentement par des formules atténuées : « significant reservations », « deep concern ».' },
    ],
  },
  conversation: [
    { speaker: 'Ambassador Reid', role: 'A', text: 'I wish to convey our government\'s apprehension regarding the proposed amendments to the trade agreement.', translation: 'Je souhaite transmettre l\'appréhension de notre gouvernement concernant les amendements proposés à l\'accord commercial.' },
    { speaker: 'Deputy Minister Park', role: 'B', text: 'We appreciate your candour. Might I reiterate that these amendments are still under discussion?', translation: 'Nous apprécions votre franchise. Puis-je réitérer que ces amendements sont encore en discussion ?' },
    { speaker: 'Ambassador Reid', role: 'A', text: 'Indeed. However, it would appear that some of the proposed changes could undermine the spirit of the original accord.', translation: 'En effet. Cependant, il semblerait que certains changements proposés puissent saper l\'esprit de l\'accord originel.' },
    { speaker: 'Deputy Minister Park', role: 'B', text: 'I would respectfully suggest that the amendments are designed to modernise the framework, not to diminish it.', translation: 'Je suggérerais respectueusement que les amendements sont conçus pour moderniser le cadre, non pour le diminuer.' },
    { speaker: 'Ambassador Reid', role: 'A', text: 'We would urge all parties to refrain from unilateral action until a consensus can be reached.', translation: 'Nous exhortons toutes les parties à s\'abstenir de toute action unilatérale jusqu\'à ce qu\'un consensus puisse être atteint.' },
    { speaker: 'Deputy Minister Park', role: 'B', text: 'A reasonable position. Let us reconvene once our respective legal teams have reviewed the proposals.', translation: 'Une position raisonnable. Réunissons-nous à nouveau une fois que nos équipes juridiques respectives auront examiné les propositions.' },
  ],
  conversationTitle: 'Préoccupations diplomatiques : atténuation et litote',
  pronunciation: [
    { word: 'Understate', phonetic: '/ˌʌndərˈsteɪt/', meaning: 'Minimiser', tip: 'L\'accent est sur « STATE » : « un-der-STATE ». Le « under » est rapide et réduit. Ne mettez pas l\'accent sur « under ».' },
    { word: 'Convey', phonetic: '/kənˈveɪ/', meaning: 'Transmettre', tip: 'Prononcez « kun-VAY » — l\'accent est sur « VEY ». Le « con » initial est un schwa. Ne dites pas « KON-vay ».' },
    { word: 'Reiterate', phonetic: '/riːˈɪtəreɪt/', meaning: 'Réitérer', tip: 'L\'accent est sur « IT » : « ree-IT-er-ayt ». Attention : on ne prononce PAS « ree-IT-er-ayt » avec trois syllabes égales. L\'accent est clairement sur « IT ».' },
    { word: 'Apprehension', phonetic: '/ˌæprɪˈhenʃn/', meaning: 'Appréhension', tip: 'L\'accent est sur « HEN » : « ap-ri-HEN-shun ». La syllabe « pre » est réduite en « ri ». La terminaison « -sion » = « shun ».' },
  ],
}

// ─── c1-l3: Treaty Negotiation ────────────────────────────────────────────────────
export const C1_L3: LessonContent = {
  vocab: [
    { english: 'provision', french: 'disposition / clause', phonetic: '/prəˈvɪʒn/', example: 'Article 5 contains a provision for dispute resolution.', exampleTranslation: 'L\'article 5 contient une disposition pour le règlement des différends.' },
    { english: 'ratification', french: 'ratification', phonetic: '/ˌrætɪfɪˈkeɪʃn/', example: 'Ratification by the Senate is required before the treaty takes effect.', exampleTranslation: 'La ratification par le Sénat est requise avant que le traité n\'entre en vigueur.' },
    { english: 'stipulation', french: 'stipulation / condition', phonetic: '/ˌstɪpjuˈleɪʃn/', example: 'The stipulation regarding arms reduction was the most contentious clause.', exampleTranslation: 'La stipulation concernant la réduction des armements était la clause la plus contestée.' },
    { english: 'compliance', french: 'conformité / respect', phonetic: '/kəmˈplaɪəns/', example: 'International monitors will verify compliance with the agreement.', exampleTranslation: 'Des observateurs internationaux vérifieront la conformité avec l\'accord.' },
    { english: 'null and void', french: 'nul et non avenu', phonetic: '/nʌl ənd vɔɪd/', example: 'The clause was declared null and void by the arbitration court.', exampleTranslation: 'La clause a été déclarée nulle et non avenue par le tribunal d\'arbitrage.' },
  ],
  grammar: {
    title: 'La négociation de traités : structures juridiques et langage contraignant',
    explanation: 'La rédaction et la négociation de traités exigent un vocabulaire juridique précis : (1) « Provision » ≠ « clause » ≠ « article » : un article est une division numérotée du traité ; une clause est une condition spécifique ; une provision est une mesure prévue. (2) « Shall » dans les traités = obligation juridique contraignante : « The parties shall cooperate » (= doivent coopérer) — plus fort que « will » (intention) ou « should » (recommandation). (3) « Null and void » est une expression juridique figée — on ne dit pas « void and null ». En anglais juridique, la redondance (doublet) est courante : « null and void », « terms and conditions », « cease and desist ». (4) « Compliance with » ≠ « compliance to » : on est en conformité AVEC quelque chose = « compliance WITH ».' ,
    examples: [
      { sentence: 'The parties shall ensure compliance with the provisions of this treaty.', translation: 'Les parties veilleront à la conformité avec les dispositions du présent traité.', isCorrect: true },
      { sentence: 'The treaty will be null and void if not ratified within six months.', translation: 'Le traité sera nul et non avenu s\'il n\'est pas ratifié dans les six mois.', isCorrect: true },
      { sentence: 'The parties should cooperate on environmental protection.', translation: '', isCorrect: false },
      { sentence: 'Each stipulation must be agreed upon before the treaty can be signed.', translation: 'Chaque stipulation doit être convenue avant que le traité puisse être signé.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The parties should cooperate on environmental protection.', correct: 'The parties shall cooperate on environmental protection.', explanation: 'Dans un traité, « should » est une recommandation sans force obligatoire. Pour une obligation contraignante, on utilise « shall ». C\'est une distinction fondamentale en droit international.' },
      { wrong: 'The agreement is void and null.', correct: 'The agreement is null and void.', explanation: 'L\'expression figée est « null and void » — toujours dans cet ordre. Comme toutes les expressions juridiques à doublet, l\'ordre est fixe : « null and void », pas « void and null ».' },
    ],
  },
  conversation: [
    { speaker: 'Chief Negotiator Martin', role: 'A', text: 'Let us turn to Article 7. The current provision on compliance monitoring requires further discussion.', translation: 'Passons à l\'article 7. La disposition actuelle sur le suivi de la conformité nécessite plus de discussion.' },
    { speaker: 'Lead Delegate Okafor', role: 'B', text: 'We propose that international observers shall be granted unrestricted access to all designated facilities.', translation: 'Nous proposons que les observateurs internationaux aient un accès sans restriction à toutes les installations désignées.' },
    { speaker: 'Chief Negotiator Martin', role: 'A', text: 'The use of « shall » in this context is appropriate. However, we would seek a stipulation that such access respects national security protocols.', translation: 'L\'utilisation de « shall » dans ce contexte est appropriée. Cependant, nous souhaiterions une stipulation selon laquelle cet accès respecte les protocoles de sécurité nationale.' },
    { speaker: 'Lead Delegate Okafor', role: 'B', text: 'Naturally. Any violation of security protocols would render that specific access provision null and void.', translation: 'Naturellement. Toute violation des protocoles de sécurité rendrait cette disposition d\'accès spécifique nulle et non avenue.' },
    { speaker: 'Chief Negotiator Martin', role: 'A', text: 'Agreed. I shall incorporate this amendment into the draft. Ratification will then proceed to our respective legislatures.', translation: 'D\'accord. J\'incorporerai cet amendement au projet. La ratification passera ensuite à nos législatures respectives.' },
    { speaker: 'Lead Delegate Okafor', role: 'B', text: 'Excellent. I believe we have reached a mutually acceptable framework. Shall we initial the document?', translation: 'Excellent. Je crois que nous avons atteint un cadre mutuellement acceptable. Devons-nous parapher le document ?' },
  ],
  conversationTitle: 'Négociation de traité : dispositions et conformité',
  pronunciation: [
    { word: 'Provision', phonetic: '/prəˈvɪʒn/', meaning: 'Disposition', tip: 'L\'accent est sur « VI » : « pruh-VIZH-un ». Le « o » initial est réduit en schwa. La terminaison « -sion » = « zhun » comme dans « vision ».' },
    { word: 'Ratification', phonetic: '/ˌrætɪfɪˈkeɪʃn/', meaning: 'Ratification', tip: 'L\'accent est sur « CA » : « ra-ti-fi-KAY-shun ». C\'est un mot long de 5 syllabes — ne l\'avalez pas. La terminaison « -tion » = « shun ».' },
    { word: 'Compliance', phonetic: '/kəmˈplaɪəns/', meaning: 'Conformité', tip: 'L\'accent est sur « PLI » : « kum-PLY-uns ». Le « com » initial est réduit. Le « ance » final se prononce « uns » comme dans « finance ».' },
    { word: 'Stipulation', phonetic: '/ˌstɪpjuˈleɪʃn/', meaning: 'Stipulation', tip: 'L\'accent est sur « LA » : « sti-pyoo-LAY-shun ». Le « u » après « stip » se prononce « you ». La terminaison « -tion » = « shun ».' },
  ],
}

// ─── c1-l4: Formal Register ───────────────────────────────────────────────────────
export const C1_L4: LessonContent = {
  vocab: [
    { english: 'hereby', french: 'par la présente', phonetic: '/ˌhɪərˈbaɪ/', example: 'The parties hereby agree to the terms set forth in this document.', exampleTranslation: 'Les parties conviennent par la présente des conditions énoncées dans ce document.' },
    { english: 'whereas', french: 'considérant que / attendu que', phonetic: '/weərˈæz/', example: 'Whereas both nations share a commitment to peace, they have resolved to enter into this agreement.', exampleTranslation: 'Considérant que les deux nations partagent un engagement en faveur de la paix, elles ont résolu de conclure le présent accord.' },
    { english: 'notwithstanding', french: 'nonobstant / en dépit de', phonetic: '/ˌnɒtwɪθˈstændɪŋ/', example: 'Notwithstanding the objections raised, the resolution was adopted.', exampleTranslation: 'Nonobstant les objections soulevées, la résolution a été adoptée.' },
    { english: 'pursuant to', french: 'conformément à / en vertu de', phonetic: '/pərˈsjuːnt tuː/', example: 'Pursuant to Article 12, the committee shall convene annually.', exampleTranslation: 'Conformément à l\'article 12, le comité se réunira annuellement.' },
    { english: 'aforementioned', french: 'susmentionné / précité', phonetic: '/əˌfɔːrˈmenʃnd/', example: 'The aforementioned provisions shall take effect immediately.', exampleTranslation: 'Les dispositions susmentionnées entreront en vigueur immédiatement.' },
  ],
  grammar: {
    title: 'Le registre formel diplomatique : archaïsmes juridiques et formules consacrées',
    explanation: 'L\'anglais diplomatique et juridique conserve des archaïsmes qui ont une fonction précise : (1) « Hereby » = par la présente : utilisé dans les documents officiels pour signifier que l\'acte se fait par le document lui-même. Variants : « herein » (ci-inclus), « hereof » (de ceci), « hereafter » (ci-après). (2) « Whereas » ouvre les préambules de traités et contrats : il établit le contexte, les considérations préalables. On ne l\'utilise PAS dans le langage courant. (3) « Notwithstanding » = nonobstant : très formel, indique qu\'une clause prévaut sur une autre. « Notwithstanding Article 5 » = en dépit de l\'article 5. (4) « Pursuant to » = conformément à : indique l\'autorité légale sous laquelle on agit. (5) « Shall » dans le registre formel = obligation ; « may » = permission ; « must » est évité au profit de « shall ». Ces termes sont des marqueurs du registre diplomatique — les employer à bon escient crédibilise votre discours.',
    examples: [
      { sentence: 'The parties hereby declare their intention to pursue peaceful dialogue.', translation: 'Les parties déclarent par la présente leur intention de poursuivre un dialogue pacifique.', isCorrect: true },
      { sentence: 'Whereas the two governments recognise the need for cooperation, they have agreed to the following terms.', translation: 'Considérant que les deux gouvernements reconnaissent la nécessité de coopérer, ils ont convenu des conditions suivantes.', isCorrect: true },
      { sentence: 'Notwithstanding the provisions of Article 3, the parties may renegotiate the terms.', translation: 'Nonobstant les dispositions de l\'article 3, les parties peuvent renégocier les conditions.', isCorrect: true },
      { sentence: 'The aforementioned countries has ratified the treaty.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'The aforementioned countries has ratified the treaty.', correct: 'The aforementioned countries have ratified the treaty.', explanation: '« Aforementioned » est un adjectif qui s\'accorde avec le nom : « countries » est pluriel, donc le verbe est « have », pas « has ». L\'adjectif ne modifie pas le nombre du nom.' },
      { wrong: 'Pursuant of Article 12...', correct: 'Pursuant to Article 12...', explanation: '« Pursuant » se construit toujours avec « to » : « pursuant TO ». Ne dites pas « pursuant of » ou « pursuant from ». C\'est une préposition fixe.' },
    ],
  },
  conversation: [
    { speaker: 'Legal Advisor Chen', role: 'A', text: 'I\'ve drafted the preamble. It begins: « Whereas the signatory states acknowledge the principle of mutual respect... »', translation: 'J\'ai rédigé le préambule. Il commence par : « Considérant que les États signataires reconnaissent le principe de respect mutuel... »' },
    { speaker: 'Diplomat Hussain', role: 'B', text: 'Good. Now, the operative clauses — shall we use « hereby » to establish the binding nature of the commitments?', translation: 'Bien. Maintenant, les clauses opérationnelles — devons-nous utiliser « par la présente » pour établir le caractère contraignant des engagements ?' },
    { speaker: 'Legal Advisor Chen', role: 'A', text: 'Precisely. « The parties hereby commit to... » is stronger than « The parties agree to... ». It creates an immediate legal obligation.', translation: 'Précisément. « Les parties s\'engagent par la présente à... » est plus fort que « Les parties conviennent de... ». Cela crée une obligation juridique immédiate.' },
    { speaker: 'Diplomat Hussain', role: 'B', text: 'And what about the non-derogation clause? Should we use « notwithstanding »?', translation: 'Et la clause de non-dérogation ? Devrions-nous utiliser « nonobstant » ?' },
    { speaker: 'Legal Advisor Chen', role: 'A', text: 'Yes. « Notwithstanding any other provision of this treaty, Article 7 shall take precedence. » That ensures the core obligations cannot be overridden.', translation: 'Oui. « Nonobstant toute autre disposition du présent traité, l\'article 7 prévaudra. » Cela garantit que les obligations fondamentales ne peuvent être outrepassées.' },
    { speaker: 'Diplomat Hussain', role: 'B', text: 'Excellent. Pursuant to our mandate, I\'ll present this draft to the working group tomorrow.', translation: 'Excellent. Conformément à notre mandat, je présenterai ce projet au groupe de travail demain.' },
  ],
  conversationTitle: 'Rédaction diplomatique : registre formel et archaïsmes juridiques',
  pronunciation: [
    { word: 'Hereby', phonetic: '/ˌhɪərˈbaɪ/', meaning: 'Par la présente', tip: 'Prononcez « hir-BAÏ » — l\'accent est sur « BY ». Le « here » est rapide et réduit. Ne séparez pas les syllabes.' },
    { word: 'Whereas', phonetic: '/weərˈæz/', meaning: 'Considérant que', tip: 'L\'accent est sur « AS » : « wair-AZ ». Le « where » est réduit. Ne dites pas « OUE-ri-az » à la française.' },
    { word: 'Notwithstanding', phonetic: '/ˌnɒtwɪθˈstændɪŋ/', meaning: 'Nonobstant', tip: 'L\'accent est sur « STAND » : « not-with-STAND-ing ». C\'est un mot long — les trois premières syllabes sont rapides. Le « th » est expiré.' },
    { word: 'Aforementioned', phonetic: '/əˌfɔːrˈmenʃnd/', meaning: 'Susmentionné', tip: 'L\'accent est sur « MEN » : « uh-for-MEN-shund ». Le « a » initial est réduit en schwa. La terminaison « -tioned » = « shund ».' },
  ],
}

// ─── c1-l5: Diplomacy Sounds ──────────────────────────────────────────────────────
export const C1_L5: LessonContent = {
  vocab: [
    { english: 'communiqué', french: 'communiqué', phonetic: '/kəˈmjuːnɪkeɪ/', example: 'The joint communiqué was issued after the summit.', exampleTranslation: 'Le communiqué conjoint a été publié après le sommet.' },
    { english: 'protocol', french: 'protocole', phonetic: '/ˈprəʊtəkɒl/', example: 'Diplomatic protocol requires that the ambassador be seated to the right of the host.', exampleTranslation: 'Le protocole diplomatique exige que l\'ambassadeur soit assis à la droite de l\'hôte.' },
    { english: 'envoy', french: 'envoyé / émissaire', phonetic: '/ˈenvɔɪ/', example: 'The special envoy delivered a sealed message from the Head of State.', exampleTranslation: 'L\'envoyé spécial a remis un message scellé du Chef d\'État.' },
    { english: 'legation', french: 'légation', phonetic: '/lɪˈɡeɪʃn/', example: 'The legation was upgraded to a full embassy in 1962.', exampleTranslation: 'La légation a été élevée au rang d\'ambassade complète en 1962.' },
    { english: 'demarche', french: 'démarche (diplomatique)', phonetic: '/deɪˈmɑːrʃ/', example: 'The government issued a formal demarche protesting the expulsion of its diplomats.', exampleTranslation: 'Le gouvernement a lancé une démarche formelle protestant contre l\'expulsion de ses diplomates.' },
  ],
  grammar: {
    title: 'La prononciation diplomatique : mots d\'origine française en anglais',
    explanation: 'L\'anglais diplomatique regorge de mots d\'origine française que les francophones prononcent souvent incorrectement en anglais : (1) « Communiqué » : en anglais, /kəˈmjuːnɪkeɪ/ — la dernière syllabe est « kay » (comme « communicate ») et NON « ké » à la française. (2) « Protocol » : /ˈprəʊtəkɒl/ — l\'accent est sur « PRO », pas sur « col » comme en français. (3) « Envoy » : /ˈenvɔɪ/ — l\'accent est sur « EN », pas sur « voy » comme en français « envoyé ». (4) « Demarche » : /deɪˈmɑːrʃ/ — le « ch » se prononce « sh » comme dans « machine », pas « k » comme en français. Le « e » final n\'est pas muet en anglais. (5) Règle générale : quand l\'anglais emprunte un mot au français, il l\'anglicise — accent tonique, voyelles, et consonnes changent. Ne prononcez JAMAIS ces mots à la française en contexte anglais.',
    examples: [
      { sentence: 'The communiqué was released to the press at noon.', translation: 'Le communiqué a été diffusé à la presse à midi.', isCorrect: true },
      { sentence: 'According to protocol, the ambassador was received first.', translation: 'Selon le protocole, l\'ambassadeur a été reçu en premier.', isCorrect: true },
      { sentence: 'The legashon was established in 1950.', translation: '', isCorrect: false },
      { sentence: 'The envoy carried a message from the Foreign Minister.', translation: 'L\'envoyé portait un message du Ministre des Affaires étrangères.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The legashon was established in 1950.', correct: 'The legation was established in 1950.', explanation: '« Legation » se prononce « lih-GAY-shun », pas « lé-ga-chon ». L\'accent est sur « GAY » et la terminaison « -tion » = « shun » comme toujours en anglais.' },
      { wrong: 'Le communiqué (prononcé à la française)', correct: 'Communiqué pronounced /kəˈmjuːnɪkeɪ/', explanation: 'En anglais, « communiqué » se prononce « kuh-MYOO-ni-kay » — la dernière syllabe est « kay » comme dans « communicate », pas « ké » à la française.' },
    ],
  },
  conversation: [
    { speaker: 'Press Secretary Lane', role: 'A', text: 'The joint communiqué will be released this evening. All ambassadors have been notified according to protocol.', translation: 'Le communiqué conjoint sera publié ce soir. Tous les ambassadeurs ont été notifiés selon le protocole.' },
    { speaker: 'Journalist Vargas', role: 'B', text: 'Can you confirm whether a special envoy was dispatched to the region?', translation: 'Pouvez-vous confirmer si un envoyé spécial a été dépêché dans la région ?' },
    { speaker: 'Press Secretary Lane', role: 'A', text: 'I can confirm that a diplomatic demarche was initiated. The details, however, remain confidential at this stage.', translation: 'Je peux confirmer qu\'une démarche diplomatique a été initiée. Les détails, cependant, restent confidentiels à ce stade.' },
    { speaker: 'Journalist Vargas', role: 'B', text: 'Is it true that the legation in Budapest was involved in the negotiations?', translation: 'Est-il vrai que la légation à Budapest a été impliquée dans les négociations ?' },
    { speaker: 'Press Secretary Lane', role: 'A', text: 'I\'m not at liberty to comment on specific diplomatic missions. What I can say is that all relevant posts have been consulted.', translation: 'Je ne suis pas en mesure de commenter des missions diplomatiques spécifiques. Ce que je peux dire, c\'est que tous les postes concernés ont été consultés.' },
    { speaker: 'Journalist Vargas', role: 'B', text: 'Understood. One last question — when will the treaty be open for ratification?', translation: 'Compris. Une dernière question — quand le traité sera-t-il ouvert à la ratification ?' },
  ],
  conversationTitle: 'Conférence de presse diplomatique : vocabulaire et protocole',
  pronunciation: [
    { word: 'Communiqué', phonetic: '/kəˈmjuːnɪkeɪ/', meaning: 'Communiqué', tip: 'Prononcez « kuh-MYOO-ni-kay » — la dernière syllabe est « kay » (anglicisée), PAS « ké » à la française. L\'accent est sur « MYOO ».' },
    { word: 'Protocol', phonetic: '/ˈprəʊtəkɒl/', meaning: 'Protocole', tip: 'L\'accent est sur « PRO » : « PRO-tuh-kol ». Ne mettez pas l\'accent sur la dernière syllabe comme en français. Le « col » final est réduit.' },
    { word: 'Envoy', phonetic: '/ˈenvɔɪ/', meaning: 'Envoyé', tip: 'Prononcez « EN-voy » — l\'accent est sur « EN ». Ne dites pas « an-VWA » à la française. Le « oy » se prononce comme dans « boy ».' },
    { word: 'Demarche', phonetic: '/deɪˈmɑːrʃ/', meaning: 'Démarche', tip: 'Prononcez « day-MARSH » — le « ch » se prononce « sh » comme dans « machine », pas « k ». L\'accent est sur « MAR ». Le « e » final est prononcé comme une voyelle réduite.' },
  ],
}
