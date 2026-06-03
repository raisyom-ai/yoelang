import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// B2 UPPER INTERMEDIATE — UNIT 5: ADVANCED BUSINESS (b2-l21 through b2-l25)
// YOELANG English Learning App for Francophone Users
// Upper-intermediate: corporate vocabulary, reported speech advanced, board meetings, strategic planning
// ════════════════════════════════════════════════════════════════════════════════

// ─── b2-l21: Corporate Vocabulary ────────────────────────────────────────────────
export const B2_L21: LessonContent = {
  vocab: [
    { english: 'shareholder', french: 'actionnaire', phonetic: '/ˈʃeəhəʊldər/', example: 'The shareholders voted against the proposed merger at the annual meeting.', exampleTranslation: 'Les actionnaires ont voté contre la fusion proposée lors de l\'assemblée annuelle.' },
    { english: 'acquisition', french: 'acquisition / rachat', phonetic: '/ˌækwɪˈzɪʃn/', example: 'The acquisition of the rival company was finalised last week.', exampleTranslation: 'L\'acquisition de l\'entreprise rivale a été finalisée la semaine dernière.' },
    { english: 'compliance', french: 'conformité / mise en conformité', phonetic: '/kəmˈplaɪəns/', example: 'All departments must ensure compliance with the new data protection regulations.', exampleTranslation: 'Tous les départements doivent assurer la conformité avec les nouvelles réglementations sur la protection des données.' },
    { english: 'fiduciary', french: 'fiduciaire', phonetic: '/fɪˈdjuːʃəri/', example: 'The board has a fiduciary duty to act in the best interests of the company.', exampleTranslation: 'Le conseil a un devoir fiduciaire d\'agir dans les meilleurs intérêts de l\'entreprise.' },
    { english: 'restructuring', french: 'restructuration', phonetic: '/riːˈstrʌktʃərɪŋ/', example: 'The restructuring of the finance department will result in significant cost savings.', exampleTranslation: 'La restructuration du département financier entraînera des économies importantes.' },
  ],
  grammar: {
    title: 'Le vocabulaire corporatif : faux amis et nuances juridiques',
    explanation: 'Le vocabulaire du monde corporatif anglophone contient de nombreuses subtilités pour les francophones : (1) « Acquisition » en anglais désigne un rachat (une entreprise en achète une autre), pas simplement un « apprentissage » comme en français. On dit « the acquisition of Company X by Company Y ». (2) « Compliance » n\'a pas le même sens que « compliance » en français médical (obéissance). En anglais des affaires, c\'est la conformité réglementaire : « regulatory compliance », « compliance officer », « compliance department ». (3) « Fiduciary » est un terme juridique précis qui signifie « relating to a trust or duty » — un « fiduciary duty » est une obligation légale d\'agir dans l\'intérêt d\'autrui. Ne confondez pas avec « fiducie » qui est plus étroit en droit français. (4) « Restructuring » implique souvent des licenciements (« layoffs »), tandis qu\'en français « restructuration » peut sembler plus neutre. En anglais, le mot a une connotation plus lourde. (5) « Shareholder » ≠ « stakeholder ». Un « shareholder » détient des actions ; un « stakeholder » est toute partie affectée par l\'entreprise (employés, clients, communauté).',
    examples: [
      { sentence: 'The company faces significant compliance costs due to the new EU regulations.', translation: 'L\'entreprise fait face à des coûts de conformité importants en raison des nouvelles réglementations de l\'UE.', isCorrect: true },
      { sentence: 'The board members breached their fiduciary duty by approving the acquisition.', translation: 'Les membres du conseil ont enfreint leur devoir fiduciaire en approuvant l\'acquisition.', isCorrect: true },
      { sentence: 'The shareholders are the same as the stakeholders of the company.', translation: '', isCorrect: false },
      { sentence: 'The restructuring plan includes merging three regional offices into one.', translation: 'Le plan de restructuration inclut la fusion de trois bureaux régionaux en un seul.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The shareholders are the same as the stakeholders of the company.', correct: 'All shareholders are stakeholders, but not all stakeholders are shareholders.', explanation: '« Shareholder » = actionnaire (détient des parts). « Stakeholder » = toute partie prenante (employés, clients, fournisseurs, communauté). Un actionnaire est un stakeholder, mais l\'inverse n\'est pas vrai.' },
      { wrong: 'The compliance of the employee was excellent.', correct: 'The employee\'s adherence to the policy was excellent. / The employee was fully compliant with the regulations.', explanation: '« Compliance » en contexte corporatif désigne la conformité réglementaire, pas l\'obéissance d\'une personne. Pour dire « obéissance », utilisez « adherence » ou « compliant with ».' },
    ],
  },
  conversation: [
    { speaker: 'Amara', role: 'A', text: 'The board meeting is tomorrow. Have you reviewed the acquisition proposal from Nexon Group?', translation: 'La réunion du conseil est demain. Avez-vous examiné la proposition d\'acquisition de Nexon Group ?' },
    { speaker: 'Laurent', role: 'B', text: 'Yes, I have concerns about the fiduciary implications. We need to ensure our shareholders are protected.', translation: 'Oui, j\'ai des préoccupations concernant les implications fiduciaires. Nous devons nous assurer que nos actionnaires sont protégés.' },
    { speaker: 'Amara', role: 'A', text: 'Agreed. The compliance team has flagged several regulatory issues that could delay the process.', translation: 'D\'accord. L\'équipe de conformité a signalé plusieurs problèmes réglementaires qui pourraient retarder le processus.' },
    { speaker: 'Laurent', role: 'B', text: 'That\'s worrying. If the restructuring goes ahead without proper due diligence, we could face legal action.', translation: 'C\'est inquiétant. Si la restructuration se fait sans une due diligence appropriée, nous pourrions faire face à des poursuites.' },
    { speaker: 'Amara', role: 'A', text: 'Precisely. I\'ll recommend that we postpone the vote until the compliance review is complete.', translation: 'Précisément. Je recommanderai que nous reportions le vote jusqu\'à ce que l\'examen de conformité soit terminé.' },
    { speaker: 'Laurent', role: 'B', text: 'Good call. The shareholders will appreciate the caution — rushing into an acquisition could destroy value.', translation: 'Bonne décision. Les actionnaires apprécieront la prudence — se précipiter dans une acquisition pourrait détruire de la valeur.' },
  ],
  conversationTitle: 'Conseil d\'administration : évaluer une acquisition',
  pronunciation: [
    { word: 'Shareholder', phonetic: '/ˈʃeəhəʊldər/', meaning: 'Actionnaire', tip: 'Prononcez « SHAIR-hol-der » — l\'accent est sur « SHAIR ». Le « e » de « share » est long comme dans « hair ». Ne dites pas « chir-hol-der ».' },
    { word: 'Acquisition', phonetic: '/ˌækwɪˈzɪʃn/', meaning: 'Acquisition / Rachat', tip: 'L\'accent est sur « ZI » : « ak-wi-ZI-shun ». Le « qu » = « kw ». La syllabe « si » se prononce « zish ». C\'est très différent de la prononciation française.' },
    { word: 'Compliance', phonetic: '/kəmˈplaɪəns/', meaning: 'Conformité', tip: 'L\'accent est sur « PLI » : « kum-PLY-uhns ». Le « a » de « pli » est long comme dans « fly ». Ne mettez pas l\'accent sur la dernière syllabe.' },
    { word: 'Fiduciary', phonetic: '/fɪˈdjuːʃəri/', meaning: 'Fiduciaire', tip: 'L\'accent est sur « DU » : « fih-DOO-shee-uh-ri ». Le « duc » se prononce « DOO-shi » — le « c » devient « sh ». C\'est un mot de 4-5 syllabes selon le dialecte.' },
  ],
}

// ─── b2-l22: Reported Speech Advanced ────────────────────────────────────────────
export const B2_L22: LessonContent = {
  vocab: [
    { english: 'to deny', french: 'nier / démentir', phonetic: '/dɪˈnaɪ/', example: 'The CEO denied having any knowledge of the financial irregularities.', exampleTranslation: 'Le PDG a nié avoir connaissance des irrégularités financières.' },
    { english: 'to admit', french: 'admettre / reconnaître', phonetic: '/ədˈmɪt/', example: 'The manager admitted to making a mistake in the quarterly forecast.', exampleTranslation: 'Le directeur a reconnu avoir fait une erreur dans les prévisions trimestrielles.' },
    { english: 'to confirm', french: 'confirmer', phonetic: '/kənˈfɜːm/', example: 'The spokesperson confirmed that the layoffs would begin next month.', exampleTranslation: 'Le porte-parole a confirmé que les licenciements commenceraient le mois prochain.' },
    { english: 'to allege', french: 'alléguer / prétendre', phonetic: '/əˈledʒ/', example: 'The report alleges that the company misled investors about its profits.', exampleTranslation: 'Le rapport allègue que l\'entreprise a trompé les investisseurs sur ses bénéfices.' },
    { english: 'to concede', french: 'concéder / admettre', phonetic: '/kənˈsiːd/', example: 'The minister conceded that the policy had not achieved its intended results.', exampleTranslation: 'Le ministre a concédé que la politique n\'avait pas atteint les résultats escomptés.' },
  ],
  grammar: {
    title: 'Le discours rapporté avancé : questions, impératifs et verbes de rapport complexes',
    explanation: 'Au niveau B2, vous devez maîtriser les formes avancées du discours rapporté (reported speech) au-delà du simple « he said that... » : (1) Rapporter des questions : Questions fermées (yes/no) → « He asked WHETHER / IF we had completed the report. » Questions ouvertes → « She asked WHY the deadline had been moved. » ATTENTION : l\'ordre sujet-verbe est inversé dans la question originale mais redevient normal au rapporté : « Where IS the office? » → « He asked where the office WAS. » (2) Rapporter des impératifs : Ordre positif → « She told me TO SUBMIT the proposal by Friday. » Ordre négatif → « He warned us NOT TO MISS the deadline. » Structure : verbe + objet + (not) to + infinitif. (3) Verbes de rapport complexes : « deny + V-ing » = nier avoir fait : « He denied stealing the documents. » / « admit + V-ing » = reconnaître avoir fait : « She admitted leaking the information. » / « confirm + that + clause » : « They confirmed that the merger would proceed. » / « allege + that + clause » : « The article alleges that the CEO knew about the fraud. » / « concede + that + clause » : « The board conceded that they had underestimated the risks. » (4) Changements temporels : « today » → « that day », « yesterday » → « the day before », « tomorrow » → « the following day », « this » → « that », « here » → « there ». Ces changements sont obligatoires dans le discours rapporté formel.',
    examples: [
      { sentence: 'The director asked whether the budget had been approved by the finance committee.', translation: 'Le directeur a demandé si le budget avait été approuvé par le comité financier.', isCorrect: true },
      { sentence: 'She denied to have access to the confidential files.', translation: '', isCorrect: false },
      { sentence: 'The witness alleged that the contract had been signed under duress.', translation: 'Le témoin a allégué que le contrat avait été signé sous la contrainte.', isCorrect: true },
      { sentence: 'The manager told the team not to discuss the merger publicly.', translation: 'Le directeur a dit à l\'équipe de ne pas discuter de la fusion publiquement.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She denied to have access to the confidential files.', correct: 'She denied having access to the confidential files.', explanation: '« Deny » est suivi du gérondif (V-ing), pas de l\'infinitif. On dit « denied doing », « denied having done », JAMAIS « denied to do ». C\'est l\'erreur la plus fréquente des francophones avec ce verbe.' },
      { wrong: 'He asked where was the meeting room.', correct: 'He asked where the meeting room was.', explanation: 'Dans le discours rapporté, l\'ordre des mots redevient celui d\'une phrase affirmative (sujet + verbe), pas d\'une question. On dit « where the meeting room WAS », pas « where WAS the meeting room ».' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'Did you hear what happened at the press conference? The CEO denied all the allegations.', translation: 'As-tu entendu ce qui s\'est passé à la conférence de presse ? Le PDG a nié toutes les allégations.' },
    { speaker: 'Pierre', role: 'B', text: 'Yes, but a former employee alleged that the company had been hiding losses for years.', translation: 'Oui, mais un ancien employé a allégué que l\'entreprise cachait des pertes depuis des années.' },
    { speaker: 'Fatou', role: 'A', text: 'The journalist asked whether the board had been informed of the discrepancies. The CEO refused to answer.', translation: 'La journaliste a demandé si le conseil avait été informé des écarts. Le PDG a refusé de répondre.' },
    { speaker: 'Pierre', role: 'B', text: 'Eventually, the CFO admitted having made errors in the financial statements. She told reporters not to jump to conclusions, though.', translation: 'Finalement, la directrice financière a reconnu avoir fait des erreurs dans les états financiers. Elle a dit aux journalistes de ne pas tirer de conclusions hâtives, cependant.' },
    { speaker: 'Fatou', role: 'A', text: 'The minister conceded that the regulatory framework was inadequate. She confirmed that reforms would be introduced next year.', translation: 'La ministre a concédé que le cadre réglementaire était inadéquat. Elle a confirmé que des réformes seraient introduites l\'année prochaine.' },
    { speaker: 'Pierre', role: 'B', text: 'Let\'s hope so. The shareholders are demanding answers, and the board can\'t deny responsibility forever.', translation: 'Espérons-le. Les actionnaires exigent des réponses, et le conseil ne peut pas nier sa responsabilité éternellement.' },
  ],
  conversationTitle: 'Scandale d\'entreprise : nier, admettre et concéder',
  pronunciation: [
    { word: 'Deny', phonetic: '/dɪˈnaɪ/', meaning: 'Nier', tip: 'L\'accent est sur « NAÏ » : « di-NAÏ ». Le « e » est un « i » bref comme dans « bit ». Ne dites pas « dé-naï » avec un « é » français.' },
    { word: 'Admit', phonetic: '/ədˈmɪt/', meaning: 'Admettre', tip: 'L\'accent est sur « MIT » : « ud-MIT ». Le « a » initial est un schwa très réduit. Ne dites pas « ad-MIT » avec un « a » plein.' },
    { word: 'Allege', phonetic: '/əˈledʒ/', meaning: 'Alléguer', tip: 'Prononcez « uh-LEJ » — l\'accent est sur la deuxième syllabe. Le « a » initial est un schwa. Le « ge » final = « dj » comme dans « judge ». Ne dites pas « a-léj ».' },
    { word: 'Concede', phonetic: '/kənˈsiːd/', meaning: 'Concéder', tip: 'L\'accent est sur « SEED » : « kun-SEED ». Le « i » est long. Ne mettez pas l\'accent sur la première syllabe comme en français « concéder ».' },
  ],
}

// ─── b2-l23: Board Meeting ───────────────────────────────────────────────────────
export const B2_L23: LessonContent = {
  vocab: [
    { english: 'motion', french: 'motion / proposition', phonetic: '/ˈmoʊʃn/', example: 'I\'d like to propose a motion to increase the R&D budget by 15%.', exampleTranslation: 'J\'aimerais proposer une motion pour augmenter le budget R&D de 15 %.' },
    { english: 'to second', french: 'appuyer (une motion) / seconder', phonetic: '/ˈsekənd/', example: 'The motion was seconded by the vice-chair of the committee.', exampleTranslation: 'La motion a été appuyée par le vice-président du comité.' },
    { english: 'to abstain', french: 's\'abstenir', phonetic: '/əbˈsteɪn/', example: 'Two board members chose to abstain from voting on the controversial resolution.', exampleTranslation: 'Deux membres du conseil ont choisi de s\'abstenir de voter sur la résolution controversée.' },
    { english: 'quorum', french: 'quorum', phonetic: '/ˈkwɔːrəm/', example: 'We cannot proceed with the vote as we do not have a quorum.', exampleTranslation: 'Nous ne pouvons pas procéder au vote car nous n\'avons pas le quorum.' },
    { english: 'resolution', french: 'résolution', phonetic: '/ˌrezəˈluːʃn/', example: 'The resolution was passed unanimously by all attending members.', exampleTranslation: 'La résolution a été adoptée à l\'unanimité par tous les membres présents.' },
  ],
  grammar: {
    title: 'Le langage formel des réunions de conseil : structure procédurale',
    explanation: 'Les réunions de conseil d\'administration (board meetings) suivent un protocole linguistique très codifié en anglais : (1) Proposer une motion : « I\'d like to propose / move a motion that... » / « I move that the board approve the following resolution... ». Notez le subjonctif après « move that » : « move that the board APPROVE » (pas « approves »). (2) Appuyer une motion : « I second the motion. » / « I\'ll second that. » Sans second, la motion ne peut pas être mise au vote. (3) Voter : « All those in favour? » (ceux qui sont pour ?) / « All those against? » (ceux qui sont contre ?) / « Any abstentions? » (des abstentions ?). On lève la main ou dit « Aye » (pour) ou « Nay » (contre). (4) Résultats : « The motion is carried » (la motion est adoptée) / « The motion is defeated / rejected » (la motion est rejetée) / « The resolution was passed unanimously » (adoptée à l\'unanimité). (5) Le subjonctif est OBLIGATOIRE dans les motions formelles : « I move that the chairperson RESIGN » (pas « resigns »). Ce subjonctif sans « s » est un héritage juridique très vivant en anglais des affaires.',
    examples: [
      { sentence: 'I move that the board approve the merger with Anderton Industries.', translation: 'Je propose que le conseil approuve la fusion avec Anderton Industries.', isCorrect: true },
      { sentence: 'The motion was seconded and put to a vote.', translation: 'La motion a été appuyée et mise au vote.', isCorrect: true },
      { sentence: 'I move that the board approves the merger.', translation: '', isCorrect: false },
      { sentence: 'Three members abstained, but the resolution was carried by a majority.', translation: 'Trois membres se sont abstenus, mais la résolution a été adoptée à la majorité.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I move that the board approves the merger.', correct: 'I move that the board approve the merger.', explanation: 'Après « move that », on utilise le subjonctif présent (sans « s » à la 3e personne) : « approve », pas « approves ». C\'est une règle grammaticale stricte du langage procédural anglophone.' },
      { wrong: 'The motion was accepted.', correct: 'The motion was carried.', explanation: 'En contexte de vote, on dit « carried » (adoptée), pas « accepted ». « Accept » s\'utilise pour des offres ou des invitations, pas pour des motions. « Rejected » ou « defeated » est l\'antonyme de « carried ».' },
    ],
  },
  conversation: [
    { speaker: 'Chairwoman Diallo', role: 'A', text: 'We now move to agenda item five. Mr. Richter, you wished to propose a motion.', translation: 'Nous passons maintenant au point cinq de l\'ordre du jour. M. Richter, vous souhaitiez proposer une motion.' },
    { speaker: 'Mr. Richter', role: 'B', text: 'Thank you, Madam Chair. I move that the board approve the proposed restructuring of the European division.', translation: 'Merci, Madame la Présidente. Je propose que le conseil approuve la restructuration proposée de la division européenne.' },
    { speaker: 'Chairwoman Diallo', role: 'A', text: 'Is there a second?', translation: 'Y a-t-il une personne pour appuyer la motion ?' },
    { speaker: 'Dr. Nakamura', role: 'B', text: 'I second the motion. However, I\'d like the record to show that I have concerns about the timeline.', translation: 'J\'appuie la motion. Cependant, j\'aimerais que le procès-verbal indique que j\'ai des réserves sur le calendrier.' },
    { speaker: 'Chairwoman Diallo', role: 'A', text: 'Noted. All those in favour? ... All those against? ... Any abstentions? The motion is carried. We have a quorum and the resolution passes.', translation: 'Noté. Ceux qui sont pour ? ... Ceux qui sont contre ? ... Des abstentions ? La motion est adoptée. Nous avons le quorum et la résolution passe.' },
    { speaker: 'Dr. Nakamura', role: 'B', text: 'For the minutes, I chose not to abstain, but I reserve the right to revisit this decision if the timeline slips.', translation: 'Pour le procès-verbal, j\'ai choisi de ne pas m\'abstenir, mais je me réserve le droit de reconsidérer cette décision si le calendrier dérape.' },
  ],
  conversationTitle: 'Réunion du conseil : proposer et voter une motion',
  pronunciation: [
    { word: 'Motion', phonetic: '/ˈmoʊʃn/', meaning: 'Motion / Proposition', tip: 'Prononcez « MO-shun » — l\'accent est sur « MO ». Le « ti » se prononce « sh » comme dans « nation ». Ne dites pas « mo-tion » avec un « t » dur.' },
    { word: 'Abstain', phonetic: '/əbˈsteɪn/', meaning: 'S\'abstenir', tip: 'L\'accent est sur « STAIN » : « ub-STAIN ». Le « a » de « stain » est long comme dans « rain ». Le « ab » initial est un schwa rapide.' },
    { word: 'Quorum', phonetic: '/ˈkwɔːrəm/', meaning: 'Quorum', tip: 'Prononcez « KWOR-um » — le « qu » = « kw ». L\'accent est sur la première syllabe. Le « um » final est réduit, pas « oum » français.' },
    { word: 'Resolution', phonetic: '/ˌrezəˈluːʃn/', meaning: 'Résolution', tip: 'L\'accent est sur « LU » : « rez-uh-LOO-shun ». La terminaison « -tion » = « shun ». Le « e » de la première syllabe est court comme dans « red ».' },
  ],
}

// ─── b2-l24: Strategic Planning ───────────────────────────────────────────────────
export const B2_L24: LessonContent = {
  vocab: [
    { english: 'benchmark', french: 'référence / point de référence', phonetic: '/ˈbentʃmɑːrk/', example: 'We need to benchmark our performance against the industry leaders.', exampleTranslation: 'Nous devons comparer nos performances avec les leaders du secteur.' },
    { english: 'forecast', french: 'prévision / pronostic', phonetic: '/ˈfɔːrkɑːst/', example: 'The revenue forecast for the next quarter looks very promising.', exampleTranslation: 'Les prévisions de revenus pour le prochain trimestre sont très prometteuses.' },
    { english: 'milestone', french: 'jalon / étape clé', phonetic: '/ˈmaɪlstoʊn/', example: 'Reaching breakeven point is a critical milestone for any startup.', exampleTranslation: 'Atteindre le seuil de rentabilité est un jalon crucial pour toute startup.' },
    { english: 'scalability', french: 'évolutivité / passage à l\'échelle', phonetic: '/ˌskeɪləˈbɪləti/', example: 'Investors want to see proof of scalability before committing additional funds.', exampleTranslation: 'Les investisseurs veulent voir des preuves d\'évolutivité avant de s\'engager à des fonds supplémentaires.' },
    { english: 'turnaround', french: 'redressement / renversement', phonetic: '/ˈtɜːrnəraʊnd/', example: 'The new CEO achieved a remarkable turnaround in just eighteen months.', exampleTranslation: 'Le nouveau PDG a réalisé un redressement remarquable en seulement dix-huit mois.' },
  ],
  grammar: {
    title: 'Les temps du futur en planification stratégique : will, going to, future continuous, future perfect',
    explanation: 'En planification stratégique, le choix du temps futur communique des nuances importantes sur la certitude et la temporalité : (1) « Will » — prédiction ou décision spontanée : « We will enter the Asian market by 2027. » (décision/vision stratégique) / « Revenue will grow by 8% next year. » (prédiction basée sur l\'analyse). (2) « Going to » — intention ou plan établi : « We are going to launch the new product line in Q3. » (plan déjà décidé). Nuance : « going to » implique que la décision a DÉJÀ été prise ; « will » peut être une annonce nouvelle. (3) Future continuous (« will be + V-ing») — action en cours à un moment futur : « By this time next year, we will be operating in twelve countries. » (sera en cours). Utile pour décrire l\'état de l\'entreprise à un point futur. (4) Future perfect (« will have + participe passé») — action achevée avant un moment futur : « By 2028, we will have achieved carbon neutrality. » (sera accompli avant). La préposition « by » (d\'ici) est le marqueur clé du future perfect. (5) Distinction cruciale : « We will launch in March » (décision) vs « We are going to launch in March » (plan confirmé) vs « We will be launching in March » (sera en cours de lancement) vs « We will have launched by March » (sera déjà fait d\'ici mars).',
    examples: [
      { sentence: 'By the end of Q4, we will have reached our annual target of two million users.', translation: 'D\'ici la fin du T4, nous aurons atteint notre objectif annuel de deux millions d\'utilisateurs.', isCorrect: true },
      { sentence: 'We are going to invest heavily in AI research over the next five years.', translation: 'Nous allons investir massivement dans la recherche en IA au cours des cinq prochaines années.', isCorrect: true },
      { sentence: 'By 2030, we will be achieving carbon neutrality.', translation: '', isCorrect: false },
      { sentence: 'This time next year, the company will be operating from its new headquarters.', translation: 'À cette heure l\'année prochaine, l\'entreprise opérera depuis son nouveau siège.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'By 2030, we will be achieving carbon neutrality.', correct: 'By 2030, we will have achieved carbon neutrality.', explanation: 'Pour exprimer une action qui sera ACCOMPLIE avant un moment futur, utilisez le future perfect (« will have achieved »), pas le future continuous (« will be achieving »). Le future continuous suggère que l\'action sera en cours, pas terminée.' },
      { wrong: 'We will to launch the product next month.', correct: 'We will launch the product next month. / We are going to launch the product next month.', explanation: 'Après « will », on utilise TOUJOURS la base verbale sans « to » : « will launch », pas « will to launch ». Après « going to », le « to » fait partie de la structure : « are going to launch ».' },
    ],
  },
  conversation: [
    { speaker: 'Yuki', role: 'A', text: 'Let\'s review the strategic roadmap. Where do we see ourselves in five years?', translation: 'Passons en revue la feuille de route stratégique. Où nous voyons-nous dans cinq ans ?' },
    { speaker: 'Olivier', role: 'B', text: 'We are going to expand into three new markets. By 2028, we will have established operations in Southeast Asia.', translation: 'Nous allons nous étendre sur trois nouveaux marchés. D\'ici 2028, nous aurons établi des opérations en Asie du Sud-Est.' },
    { speaker: 'Yuki', role: 'A', text: 'Good. And what about the scalability of our current platform? Will it support that level of growth?', translation: 'Bien. Et l\'évolutivité de notre plateforme actuelle ? Soutiendra-t-elle ce niveau de croissance ?' },
    { speaker: 'Olivier', role: 'B', text: 'The tech team is working on it. This time next year, we will be running on a fully cloud-based infrastructure.', translation: 'L\'équipe technique y travaille. À cette heure l\'année prochaine, nous fonctionnerons sur une infrastructure entièrement basée dans le cloud.' },
    { speaker: 'Yuki', role: 'A', text: 'That\'s an important milestone. I also want us to benchmark our progress against our main competitors every quarter.', translation: 'C\'est un jalon important. Je veux aussi que nous comparions nos progrès avec nos principaux concurrents chaque trimestre.' },
    { speaker: 'Olivier', role: 'B', text: 'Absolutely. If the forecast holds, we will have completed the turnaround by the end of next year and returned to profitability.', translation: 'Absolument. Si les prévisions se maintiennent, nous aurons terminé le redressement d\'ici la fin de l\'année prochaine et serons retournés à la rentabilité.' },
  ],
  conversationTitle: 'Planification stratégique : vision à cinq ans',
  pronunciation: [
    { word: 'Benchmark', phonetic: '/ˈbentʃmɑːrk/', meaning: 'Référence', tip: 'Prononcez « BENCH-mark » — l\'accent est sur « BENCH ». Le « ch » est doux comme dans « chair », pas dur comme dans « school ». Ne dites pas « banc-mark ».' },
    { word: 'Forecast', phonetic: '/ˈfɔːrkɑːst/', meaning: 'Prévision', tip: 'L\'accent est sur « FORE » : « FOR-kast ». Le « e » de « fore » est long comme dans « door ». Le « a » de « cast » est bref. Ne dites pas « for-ess-t ».' },
    { word: 'Milestone', phonetic: '/ˈmaɪlstoʊn/', meaning: 'Jalon / Étape clé', tip: 'Prononcez « MAÏL-stone » — l\'accent est sur « MAÏL ». Le « i » de « mile » est long. Le « stone » se prononce normalement. C\'est un mot composé transparent.' },
    { word: 'Scalability', phonetic: '/ˌskeɪləˈbɪləti/', meaning: 'Évolutivité', tip: 'L\'accent est sur « BIL » : « SKAY-luh-BIL-uh-tee ». Le « a » de « scale » est long. Les syllabes après « bil » sont rapides et réduites. 5 syllabes au total.' },
  ],
}

// ─── b2-l25: Business Sounds ─────────────────────────────────────────────────────
export const B2_L25: LessonContent = {
  vocab: [
    { english: 'entrepreneur', french: 'entrepreneur / entrepreneur', phonetic: '/ˌɒntrəprəˈnɜːr/', example: 'The young entrepreneur secured five million euros in venture capital funding.', exampleTranslation: 'Le jeune entrepreneur a obtenu cinq millions d\'euros de financement en capital-risque.' },
    { english: 'subsidiary', french: 'filiale', phonetic: '/səbˈsɪdiəri/', example: 'The company operates through a network of subsidiaries across Europe.', exampleTranslation: 'L\'entreprise opère à travers un réseau de filiales en Europe.' },
    { english: 'liability', french: 'responsabilité / passif', phonetic: '/ˌlaɪəˈbɪləti/', example: 'Limited liability protects the personal assets of the shareholders.', exampleTranslation: 'La responsabilité limitée protège les biens personnels des actionnaires.' },
    { english: 'amortisation', french: 'amortissement', phonetic: '/ˌæmətaɪˈzeɪʃn/', example: 'The amortisation of intangible assets is reflected in the annual accounts.', exampleTranslation: 'L\'amortissement des actifs incorporels est reflété dans les comptes annuels.' },
    { english: 'procurement', french: 'approvisionnement / achats', phonetic: '/prəˈkjuːmənt/', example: 'The procurement department is responsible for negotiating supplier contracts.', exampleTranslation: 'Le département des achats est responsable de la négociation des contrats fournisseurs.' },
  ],
  grammar: {
    title: 'La prononciation des termes commerciaux : pièges avancés pour francophones',
    explanation: 'Le vocabulaire commercial avancé contient des mots dont la prononciation anglaise diffère radicalement de ce que les francophones attendent : (1) « Entrepreneur » : en anglais, on prononce /ˌɒntrəprəˈnɜːr/ — l\'accent est sur « NUR » (la dernière syllabe), PAS sur la première comme en français « an-tre-pre-neur ». En anglais, le mot a été emprunté mais l\'accent tonique a changé. (2) « Subsidiary » : /səbˈsɪdiəri/ — l\'accent est sur « SID », pas sur « iar » comme on pourrait le deviner. En anglais américain, on dit souvent « sub-SID-ee-er-ee » (5 syllabes), en britannique « sub-SID-uh-ri » (4 syllabes). (3) « Liability » : /ˌlaɪəˈbɪləti/ — l\'accent est sur « BIL ». Le « li » initial se prononce « LY » (comme dans « lie »), pas « lee ». Le sens juridique (responsabilité) est différent du sens comptable (passif/dette). (4) « Amortisation » (britannique) / « amortization » (américain) : l\'accent est sur « ZA » : « a-mor-ti-ZAY-shun ». Le « ti » se prononce « shi ». (5) « Procurement » : /prəˈkjuːmənt/ — l\'accent est sur « CU », pas sur « ment ». Le « pro » initial est un schwa rapide. Ces erreurs de prononciation sont particulièrement dommageables en contexte professionnel car elles peuvent sembler peu crédibles.',
    examples: [
      { sentence: 'The entrepreneur presented a compelling business plan to the investors.', translation: 'L\'entrepreneur a présenté un business plan convaincant aux investisseurs.', isCorrect: true },
      { sentence: 'Each subsidiary must report its financial results to the parent company.', translation: 'Chaque filiale doit rapporter ses résultats financiers à la maison mère.', isCorrect: true },
      { sentence: 'The company has many liabilities in their balance sheet.', translation: '', isCorrect: false },
      { sentence: 'The procurement team negotiated better terms with our key suppliers.', translation: 'L\'équipe des achats a négocié de meilleures conditions avec nos fournisseurs clés.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The company has many liabilities in their balance sheet.', correct: 'The company has significant liabilities on its balance sheet.', explanation: '« Liability » au sens comptable (passif/dette) s\'utilise généralement au pluriel (« liabilities ») mais avec des adjectifs comme « significant » ou « substantial » plutôt que « many ». On dit « on its balance sheet », pas « in ».' },
      { wrong: 'The an-tre-pre-NEUR secured funding.', correct: 'The on-truh-pruh-NUR secured funding.', explanation: 'La prononciation anglaise d\'« entrepreneur » place l\'accent sur la DERNIÈRE syllabe : « on-truh-pruh-NUR ». La prononciation française « an-tre-pre-NEUR » avec le « a » nasal et l\'accent différent n\'est pas comprise en anglais.' },
    ],
  },
  conversation: [
    { speaker: 'Kwame', role: 'A', text: 'I\'ve been reviewing our subsidiary structure. We have too many small entities that are increasing our liability exposure.', translation: 'J\'ai examiné notre structure de filiales. Nous avons trop de petites entités qui augmentent notre exposition aux responsabilités.' },
    { speaker: 'Isabelle', role: 'B', text: 'I agree. The amortisation of our intangible assets across twelve subsidiaries is also creating accounting complexities.', translation: 'Je suis d\'accord. L\'amortissement de nos actifs incorporels à travers douze filiales crée aussi des complexités comptables.' },
    { speaker: 'Kwame', role: 'A', text: 'As the lead entrepreneur of this venture, I think we should consolidate. It would simplify procurement and reduce overhead.', translation: 'En tant qu\'entrepreneur principal de ce projet, je pense que nous devrions consolider. Cela simplifierait les achats et réduirait les frais généraux.' },
    { speaker: 'Isabelle', role: 'B', text: 'Consolidation makes sense, but we need to be careful about liability transfer. Each subsidiary currently has limited liability.', translation: 'La consolidation a du sens, mais nous devons faire attention au transfert de responsabilité. Chaque filiale a actuellement une responsabilité limitée.' },
    { speaker: 'Kwame', role: 'A', text: 'True. Our legal team will need to restructure the liability framework before we proceed. Let\'s set a milestone for Q2.', translation: 'C\'est vrai. Notre équipe juridique devra restructurer le cadre de responsabilité avant de procéder. Fixons un jalon pour le T2.' },
    { speaker: 'Isabelle', role: 'B', text: 'I\'ll coordinate with procurement and legal. By the end of Q2, we should have a clear plan for the consolidation.', translation: 'Je coordonnerai avec les achats et le juridique. D\'ici la fin du T2, nous devrions avoir un plan clair pour la consolidation.' },
  ],
  conversationTitle: 'Restructuration : filiales, responsabilités et consolidation',
  pronunciation: [
    { word: 'Entrepreneur', phonetic: '/ˌɒntrəprəˈnɜːr/', meaning: 'Entrepreneur', tip: 'L\'accent est sur la DERNIÈRE syllabe : « on-truh-pruh-NUR ». C\'est le PIÈGE n°1 des francophones ! Ne prononcez PAS « an-tre-pre-neur » à la française. Le premier « e » est un « o » ouvert.' },
    { word: 'Subsidiary', phonetic: '/səbˈsɪdiəri/', meaning: 'Filiale', tip: 'L\'accent est sur « SID » : « sub-SID-ee-uh-ri ». C\'est un mot de 5 syllabes en américain, 4 en britannique. Ne mettez PAS l\'accent sur la dernière syllabe comme en français « filiale ».' },
    { word: 'Liability', phonetic: '/ˌlaɪəˈbɪləti/', meaning: 'Responsabilité / Passif', tip: 'L\'accent est sur « BIL » : « LY-uh-BIL-uh-tee ». Le « li » initial se prononce « LY » (comme dans « lie »), PAS « lee ». C\'est un mot de 5 syllabes.' },
    { word: 'Procurement', phonetic: '/prəˈkjuːmənt/', meaning: 'Achats / Approvisionnement', tip: 'L\'accent est sur « CU » : « pruh-KYOO-ment ». Le « pro » initial est un schwa très réduit. Le « cu » se prononce « kyoo ». Ne dites pas « pro-cure-ment » à la française.' },
  ],
}
