import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C1 ADVANCED — UNIT 8: DEBATE & PERSUASION (c1-l36 through c1-l40)
// YOELANG English Learning App for Francophone Users
// Advanced: rhetorical devices, persuasive structures, formal debate, rebuttal techniques
// ════════════════════════════════════════════════════════════════════════════════

// ─── c1-l36: Rhetoric Vocabulary ─────────────────────────────────────────────────
export const C1_L36: LessonContent = {
  vocab: [
    { english: 'ethos', french: 'ethos / crédibilité morale', phonetic: '/ˈiːθɒs/', example: 'The speaker established ethos by citing her twenty years of field research.', exampleTranslation: 'L\'oratrice a établi son ethos en citant ses vingt ans de recherche sur le terrain.' },
    { english: 'pathos', french: 'pathos / appel à l\'émotion', phonetic: '/ˈpeɪθɒs/', example: 'The advertisement relies on pathos rather than logical argument.', exampleTranslation: 'La publicité repose sur le pathos plutôt que sur l\'argumentation logique.' },
    { english: 'logos', french: 'logos / appel à la raison', phonetic: '/ˈlɒɡɒs/', example: 'The lawyer\'s closing argument was a masterclass in logos, weaving statistics and precedent.', exampleTranslation: 'La plaidoirie de l\'avocat était un chef-d\'œuvre de logos, entrelaçant statistiques et jurisprudence.' },
    { english: 'syllogism', french: 'syllogisme', phonetic: '/ˈsɪlədʒɪzəm/', example: 'The argument follows a classic syllogism: all humans are mortal; Socrates is human; therefore Socrates is mortal.', exampleTranslation: 'L\'argument suit un syllogisme classique : tous les humains sont mortels ; Socrate est humain ; donc Socrate est mortel.' },
    { english: 'premise', french: 'prémisse', phonetic: '/ˈpremɪs/', example: 'The entire theory collapses if you reject its founding premise.', exampleTranslation: 'Toute la théorie s\'effondre si vous rejetez sa prémisse fondatrice.' },
  ],
  grammar: {
    title: 'Les trois piliers de la rhétorique : ethos, pathos, logos',
    explanation: 'La rhétorique classique, depuis Aristote, repose sur trois modes de persuasion que tout orateur doit maîtriser : (1) L\'ethos (crédibilité) : c\'est l\'autorité morale du locuteur. On établit l\'ethos en démontrant sa compétence, son intégrité et son impartialité. En anglais, on parle de « establishing credibility », « building trust », « claiming authority ». (2) Le pathos (émotion) : c\'est l\'appel aux sentiments de l\'auditoire — crainte, compassion, indignation, espoir. En anglais : « appealing to emotion », « evoking sympathy », « stirring the audience ». (3) Le logos (raison) : c\'est l\'argumentation logique — preuves, statistiques, raisonnement déductif. Le syllogisme en est la forme pure : deux prémisses mènent à une conclusion. (4) « Premise » en anglais est ALWAYS singulier dans le sens rhétorique (« a premise ») ; au pluriel, « premises » peut signifier « locaux / bâtiment » — attention à la confusion ! (5) Un discours persuasif efficace combine les trois : ethos pour être cru, pathos pour être ressenti, logos pour être convaincu.',
    examples: [
      { sentence: 'The senator strengthened her ethos by referencing her decade of service on the committee.', translation: 'La sénatrice a renforcé son ethos en faisant référence à sa décennie de service au comité.', isCorrect: true },
      { sentence: 'By sharing the refugee\'s personal story, the advocate employed pathos to move the audience.', translation: 'En partageant l\'histoire personnelle du réfugié, l\'avocat a employé le pathos pour émouvoir l\'auditoire.', isCorrect: true },
      { sentence: 'The premises of the argument were clearly stated in the opening paragraph.', translation: '', isCorrect: false },
      { sentence: 'The report\'s logos rests on longitudinal data collected over three decades.', translation: 'Le logos du rapport repose sur des données longitudinales collectées sur trois décennies.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The premises of the argument were clearly stated in the opening paragraph.', correct: 'The premises of the argument were clearly stated in the opening paragraph. (Ambiguous — could mean "building")', explanation: '« Premises » au pluriel signifie souvent « locaux / bâtiment » en anglais courant. Pour éviter l\'ambiguïté, dites « the underlying assumptions » ou « the foundational premises of the argument ». Le mot « premise » au singulier = prémisse ; « premises » au pluriel = prémisses OU locaux.' },
      { wrong: 'He used logos to make the audience cry.', correct: 'He used pathos to make the audience cry.', explanation: 'Le logos fait appel à la raison (logique, données), le pathos fait appel à l\'émotion. Faire pleurer l\'auditoire = pathos, pas logos. Confondre les deux affaiblit gravement votre crédibilité rhétorique.' },
    ],
  },
  conversation: [
    { speaker: 'Professor Keane', role: 'A', text: 'Today we examine how the three pillars of rhetoric operate in contemporary political discourse. Can anyone identify the dominant appeal in this speech?', translation: 'Aujourd\'hui nous examinons comment les trois piliers de la rhétorique opèrent dans le discours politique contemporain. Quelqu\'un peut-il identifier l\'appel dominant dans ce discours ?' },
    { speaker: 'Student Mercier', role: 'B', text: 'The opening anecdote about the struggling family is pure pathos — it\'s designed to create empathy before any evidence is presented.', translation: 'L\'anecdote d\'ouverture sur la famille en difficulté, c\'est du pathos pur — c\'est conçu pour créer de l\'empathie avant qu\'aucune preuve ne soit présentée.' },
    { speaker: 'Professor Keane', role: 'A', text: 'Precisely. And notice how the speaker then shifts to logos, citing employment statistics. The syllogism is implicit: if the policy helped these families, and the data confirms it, then the policy is effective.', translation: 'Précisément. Et remarquez comment l\'orateur passe ensuite au logos, citant des statistiques sur l\'emploi. Le syllogisme est implicite : si la politique a aidé ces familles, et que les données le confirment, alors la politique est efficace.' },
    { speaker: 'Student Mercier', role: 'B', text: 'But the underlying premise is questionable — correlation isn\'t causation. The speaker\'s ethos might compensate, but the logos is flawed.', translation: 'Mais la prémisse sous-jacente est contestable — corrélation n\'est pas causalité. L\'ethos de l\'orateur pourrait compenser, mais le logos est défaillant.' },
    { speaker: 'Professor Keane', role: 'A', text: 'Excellent critique. This is precisely why a skilled debater must shore up each pillar. A chain of reasoning is only as strong as its weakest premise.', translation: 'Excellente critique. C\'est précisément pourquoi un débatteur habile doit renforcer chaque pilier. Une chaîne de raisonnement n\'est aussi forte que sa prémisse la plus faible.' },
    { speaker: 'Student Mercier', role: 'B', text: 'So the ideal persuasive argument weaves ethos, pathos and logos together — credibility, emotion and logic reinforcing one another.', translation: 'Donc l\'argument persuasif idéal tisse ethos, pathos et logos ensemble — crédibilité, émotion et logique se renforçant mutuellement.' },
  ],
  conversationTitle: 'Analyse rhétorique : les trois piliers de la persuasion',
  pronunciation: [
    { word: 'Ethos', phonetic: '/ˈiːθɒs/', meaning: 'Ethos', tip: 'Prononcez « EE-thos » — l\'accent est sur « EE ». Le « th » est expiré comme dans « think ». Ne dites pas « é-tos » à la française.' },
    { word: 'Pathos', phonetic: '/ˈpeɪθɒs/', meaning: 'Pathos', tip: 'Prononcez « PAY-thos » — l\'accent est sur « PAY ». Le « a » est un son « ay » comme dans « play ». Ne dites pas « pa-tos » à la française.' },
    { word: 'Syllogism', phonetic: '/ˈsɪlədʒɪzəm/', meaning: 'Syllogisme', tip: 'L\'accent est sur « SIL » : « SIL-uh-jiz-um ». Le « y » se prononce « i » court. La terminaison « -gism » = « jiz-um ». Ne dites pas « sil-lo-jizm ».' },
    { word: 'Premise', phonetic: '/ˈpremɪs/', meaning: 'Prémisse', tip: 'Prononcez « PREM-is » — l\'accent est sur « PREM ». Le « e » est court comme dans « red ». Ne dites pas « pre-MEES » à la française.' },
  ],
}

// ─── c1-l37: Persuasive Structures ───────────────────────────────────────────────
export const C1_L37: LessonContent = {
  vocab: [
    { english: 'rhetorical question', french: 'question rhétorique', phonetic: '/rɪˈtɒrɪkl ˈkwestʃən/', example: 'Are we really prepared to sacrifice our children\'s future for short-term profit?', exampleTranslation: 'Sommes-nous vraiment prêts à sacrifier l\'avenir de nos enfants pour un profit à court terme ?' },
    { english: 'antithesis', french: 'antithèse', phonetic: '/ænˈtɪθəsɪs/', example: 'It was the best of times, it was the worst of times.', exampleTranslation: 'C\'était le meilleur des temps, c\'était le pire des temps.' },
    { english: 'tricolon', french: 'tricolon / ternaire', phonetic: '/ˈtraɪkələn/', example: 'We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields.', exampleTranslation: 'Nous combattrons sur les plages, nous combattrons sur les terrains de débarquement, nous combattrons dans les champs.' },
    { english: 'anaphora', french: 'anaphore', phonetic: '/əˈnæfərə/', example: 'We demand justice. We demand equality. We demand accountability.', exampleTranslation: 'Nous exigeons la justice. Nous exigeons l\'égalité. Nous exigeons la responsabilité.' },
    { english: 'chiasmus', phonetic: '/kaɪˈæzməs/', french: 'chiasme', example: 'Ask not what your country can do for you — ask what you can do for your country.', exampleTranslation: 'Ne demandez pas ce que votre pays peut faire pour vous — demandez ce que vous pouvez faire pour votre pays.' },
  ],
  grammar: {
    title: 'Les structures persuasives : figures de style au service de l\'argumentation',
    explanation: 'Les grandes figures rhétoriques ne sont pas de simples ornements — ce sont des outils de persuasion puissants dont l\'efficacité est prouvée : (1) La question rhétorique : elle ne demande pas de réponse — elle force l\'auditoire à réfléchir. « Are we to stand idly by? » = nous ne devrions pas rester passifs. En anglais, on l\'utilise pour créer un implicite puissant. (2) L\'antithèse : la juxtaposition de deux idées opposées crée un contraste frappant. Structure : [X] ... [anti-X]. « To err is human; to forgive, divine. » L\'équilibre syntaxique renforce le contraste conceptuel. (3) Le tricolon (ou ternaire) : trois éléments parallèles en succession. La règle de trois est universellement persuasive — « government of the people, by the people, for the people ». Le troisième élément porte le plus de poids. (4) L\'anaphore : la répétition du même mot ou groupe de mots en début de phrase crée un effet d\'accumulation et de crescendo. « I have a dream... I have a dream... I have a dream... » (5) Le chiasme : inversion symétrique de deux éléments (AB-BA). « One should eat to live, not live to eat. » Le renversement surprend et mémorise.',
    examples: [
      { sentence: 'To know what you prefer instead of humbly saying Amen to what the world tells you you ought to prefer, is to have kept your soul alive.', translation: 'Savoir ce que l\'on préfère au lieu de dire humblement Amen à ce que le monde vous dit que vous devriez préférer, c\'est avoir gardé votre âme vivante.', isCorrect: true },
      { sentence: 'The anaphora in the speech was used to confuse the audience.', translation: '', isCorrect: false },
      { sentence: 'We must act now, we must act decisively, we must act together.', translation: 'Nous devons agir maintenant, nous devons agir avec décision, nous devons agir ensemble.', isCorrect: true },
      { sentence: 'Injustice anywhere is a threat to justice everywhere.', translation: 'L\'injustice où qu\'elle soit est une menace pour la justice partout.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The anaphora in the speech was used to confuse the audience.', correct: 'The anaphora in the speech was used to build momentum and reinforce the central argument.', explanation: 'L\'anaphore est un outil de renforcement et de crescendo, pas de confusion. Sa répétition créée un effet d\'accumulation persuasive. La confondre avec une stratégie d\'obscurcissement est une erreur fondamentale de compréhension rhétorique.' },
      { wrong: 'He used a chiasmus: "She loves dancing and he loves reading."', correct: 'He used a chiasmus: "She loves dancing and dancing loves her."', explanation: 'Un chiasme exige une inversion symétrique (AB-BA). « She loves dancing and he loves reading » n\'est qu\'une simple parallèle — pas d\'inversion. Un vrai chiasme : « She loves dancing and dancing loves her » (A-B-B-A).' },
    ],
  },
  conversation: [
    { speaker: 'Debate Coach Alvarez', role: 'A', text: 'Your opening statement needs more punch. Have you considered using anaphora to drive home your key points?', translation: 'Votre déclaration d\'ouverture manque de force. Avez-vous envisagé d\'utiliser l\'anaphore pour marteler vos points clés ?' },
    { speaker: 'Debater Laurent', role: 'B', text: 'Like Churchill\'s « We shall fight » speech? I could repeat « We must » at the start of each argument.', translation: 'Comme le discours de Churchill « We shall fight » ? Je pourrais répéter « We must » au début de chaque argument.' },
    { speaker: 'Debate Coach Alvarez', role: 'A', text: 'Exactly. And for your closing, try a tricolon — three parallel elements build to a natural climax. « For our economy, for our environment, for our future. »', translation: 'Exactement. Et pour votre conclusion, essayez un tricolon — trois éléments parallèles créent un climax naturel. « Pour notre économie, pour notre environnement, pour notre avenir. »' },
    { speaker: 'Debater Laurent', role: 'B', text: 'What about the opposition\'s strongest point? I want to undermine it with antithesis.', translation: 'Et le point fort de l\'opposition ? Je veux le saper avec une antithèse.' },
    { speaker: 'Debate Coach Alvarez', role: 'A', text: 'Good instinct. « They offer short-term relief; we offer lasting reform. They react; we lead. » Antithesis makes the contrast unmissable.', translation: 'Bon instinct. « Ils offrent un soulagement à court terme ; nous offrons une réforme durable. Ils réagissent ; nous menons. » L\'antithèse rend le contraste impossible à manquer.' },
    { speaker: 'Debater Laurent', role: 'B', text: 'And if I end with a rhetorical question? « Which vision do you want for our country? » That leaves the judges thinking.', translation: 'Et si je termine par une question rhétorique ? « Quelle vision voulez-vous pour notre pays ? » Ça laisse les juges réfléchir.' },
  ],
  conversationTitle: 'Préparation au débat : figures de style persuasives',
  pronunciation: [
    { word: 'Antithesis', phonetic: '/ænˈtɪθəsɪs/', meaning: 'Antithèse', tip: 'L\'accent est sur « TITH » : « an-TITH-uh-sis ». Le « i » est court. Le « th » est expiré. Ne dites pas « an-tee-tez » à la française.' },
    { word: 'Anaphora', phonetic: '/əˈnæfərə/', meaning: 'Anaphore', tip: 'Prononcez « uh-NAF-er-uh » — l\'accent est sur « NAF ». Le « ph » se prononce « f ». Ne dites pas « a-na-fo-ra ».' },
    { word: 'Chiasmus', phonetic: '/kaɪˈæzməs/', meaning: 'Chiasme', tip: 'Prononcez « ky-AZ-mus » — l\'accent est sur « AZ ». Le « ch » se prononce « k » comme dans « chaos ». Ne dites pas « chi-as-mus ».' },
    { word: 'Tricolon', phonetic: '/ˈtraɪkələn/', meaning: 'Tricolon', tip: 'L\'accent est sur « TRI » : « TRY-kuh-lun ». Le « i » est long comme dans « try ». Ne dites pas « tree-co-lon » à la française.' },
  ],
}

// ─── c1-l38: Formal Debate ───────────────────────────────────────────────────────
export const C1_L38: LessonContent = {
  vocab: [
    { english: 'proposition', french: 'proposition (motion défendue)', phonetic: '/ˌprɒpəˈzɪʃn/', example: 'The proposition argues that universal basic income should be adopted nationwide.', exampleTranslation: 'La proposition soutient que le revenu universel de base devrait être adopté à l\'échelle nationale.' },
    { english: 'opposition', french: 'opposition (camp adverse)', phonetic: '/ˌɒpəˈzɪʃn/', example: 'The opposition contends that the policy would disincentivise work.', exampleTranslation: 'L\'opposition prétend que la politique découragerait le travail.' },
    { english: 'rebuttal', french: 'réfutation / réplique', phonetic: '/rɪˈbʌtl/', example: 'Her rebuttal dismantled every point the proposition had raised.', exampleTranslation: 'Sa réfutation a démonté chaque point que la proposition avait soulevé.' },
    { english: 'motion', french: 'motion / sujet du débat', phonetic: '/ˈməʊʃn/', example: 'The motion before the house is: « This House would ban all private education. »', exampleTranslation: 'La motion soumise à l\'assemblée est : « Cette assemblée interdirait toute éducation privée. »' },
    { english: 'to uphold', french: 'défendre / maintenir', phonetic: '/ʌpˈhəʊld/', example: 'The first speaker must uphold the motion by presenting a clear, logical case.', exampleTranslation: 'Le premier orateur doit défendre la motion en présentant un argumentaire clair et logique.' },
  ],
  grammar: {
    title: 'Le débat formel en anglais : structure, rôles et vocabulaire procédural',
    explanation: 'Le débat formel anglophone suit une structure rigoureuse avec un vocabulaire procédural précis : (1) La motion : c\'est le sujet du débat, toujours formulé comme une proposition à défendre ou rejeter. En anglais, on dit « The motion before the house is... » ou « This House believes that... ». En français, on dirait « L\'assemblée débat de... ». (2) Proposition vs Opposition : la proposition défend la motion (affirmative), l\'opposition la rejette (negative). Chaque camp a des rôles codifiés : first speaker (construction), second speaker (extension/refutation), third speaker (summary/rebuttal). (3) « Rebuttal » ≠ « refutation » : la rebuttal est la contre-argumentation générale ; la refutation est la destruction point par point d\'un argument adverse. On dit « I will rebut the opposition\'s claim » ou « I will refute the second argument ». (4) « To uphold » dans un débat = défendre la motion : « I will uphold the motion ». ≠ « to support » qui est plus vague. (5) Expressions clés : « I rise to speak in favour of / against the motion », « The opposition would have you believe... », « I yield the floor », « Point of information ».',
    examples: [
      { sentence: 'The first speaker for the proposition will open the debate by upholding the motion.', translation: 'Le premier orateur de la proposition ouvrira le débat en défendant la motion.', isCorrect: true },
      { sentence: 'I rise to speak against the motion and to present the opposition\'s case.', translation: 'Je prends la parole pour m\'opposer à la motion et présenter le dossier de l\'opposition.', isCorrect: true },
      { sentence: 'The rebuttal of the motion is that it is too expensive.', translation: '', isCorrect: false },
      { sentence: 'She delivered a devastating rebuttal that dismantled the opposition\'s central argument.', translation: 'Elle a prononcé une réfutation dévastatrice qui a démonté l\'argument central de l\'opposition.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The rebuttal of the motion is that it is too expensive.', correct: 'The opposition to the motion argues that it is too expensive.', explanation: 'On ne « rebut » pas une motion — on s\'y oppose. La « rebuttal » est l\'acte de réfuter les arguments adverses, pas l\'argument lui-même. Dites « the opposition argues » ou « the rebuttal of the proposition\'s claim is... ».' },
      { wrong: 'I will uphold against the motion.', correct: 'I will speak against the motion. / I will oppose the motion.', explanation: '« Uphold » signifie défendre (support), donc on « upholds » la motion, on ne l\'« upholds against ». Pour le camp adverse, dites « oppose the motion » ou « speak against the motion ».' },
    ],
  },
  conversation: [
    { speaker: 'Madam Speaker', role: 'A', text: 'The motion before the house is: « This House would impose a global wealth tax. » The first speaker for the proposition has the floor.', translation: 'La motion soumise à l\'assemblée est : « Cette assemblée imposerait un impôt mondial sur la fortune. » Le premier orateur de la proposition a la parole.' },
    { speaker: 'Proposition Lead (Ms Okafor)', role: 'B', text: 'I rise to uphold the motion. The concentration of wealth in the hands of a few is not merely unjust — it destabilises entire economies.', translation: 'Je prends la parole pour défendre la motion. La concentration de la richesse entre les mains de quelques-uns n\'est pas simplement injuste — elle déstabilise des économies entières.' },
    { speaker: 'Madam Speaker', role: 'A', text: 'The first speaker for the opposition may now respond.', translation: 'Le premier orateur de l\'opposition peut maintenant répondre.' },
    { speaker: 'Opposition Lead (Mr Dubois)', role: 'B', text: 'The opposition rejects this motion. A global wealth tax is unenforceable, would trigger capital flight, and ultimately harm the very people it claims to help.', translation: 'L\'opposition rejette cette motion. Un impôt mondial sur la fortune est inapplicable, provoquerait une fuite des capitaux et nuirait en fin de compte aux très personnes qu\'il prétend aider.' },
    { speaker: 'Proposition Lead (Ms Okafor)', role: 'A', text: 'I must rebut that claim. Capital flight presupposes the existence of tax havens — which a globally coordinated tax would eliminate. The opposition\'s premise is self-defeating.', translation: 'Je dois réfuter cette affirmation. La fuite des capitaux présuppose l\'existence de paradis fiscaux — qu\'un impôt coordonné mondialement éliminerait. La prémisse de l\'opposition se réfute elle-même.' },
    { speaker: 'Opposition Lead (Mr Dubois)', role: 'B', text: 'A bold claim, but global coordination has never been achieved on this scale. I yield the floor, but I trust the judges will note the proposition\'s reliance on an idealised premise.', translation: 'Une affirmation audacieuse, mais la coordination mondiale n\'a jamais été atteinte à cette échelle. Je cède la parole, mais je fais confiance aux juges pour noter la dépendance de la proposition à une prémisse idéalisée.' },
  ],
  conversationTitle: 'Débat formel : impôt mondial sur la fortune',
  pronunciation: [
    { word: 'Proposition', phonetic: '/ˌprɒpəˈzɪʃn/', meaning: 'Proposition', tip: 'L\'accent est sur « ZI » : « prop-uh-ZISH-un ». Ne dites pas « pro-po-zi-sion » à la française. La terminaison « -tion » = « shun ».' },
    { word: 'Rebuttal', phonetic: '/rɪˈbʌtl/', meaning: 'Réfutation', tip: 'L\'accent est sur « BUT » : « ri-BUT-ul ». Le « e » initial est réduit. Le « u » de « but » est court et ouvert. Ne dites pas « re-byoo-tal ».' },
    { word: 'Motion', phonetic: '/ˈməʊʃn/', meaning: 'Motion', tip: 'Prononcez « MO-shun » — l\'accent est sur « MO ». La terminaison « -tion » = « shun ». Ne dites pas « mo-tee-on ».' },
    { word: 'Uphold', phonetic: '/ʌpˈhəʊld/', meaning: 'Défendre', tip: 'L\'accent est sur « HOLD » : « up-HOLD ». Les deux syllabes sont clairement prononcées. Ne dites pas « yoo-pold ».' },
  ],
}

// ─── c1-l39: Rebuttal Techniques ─────────────────────────────────────────────────
export const C1_L39: LessonContent = {
  vocab: [
    { english: 'concession', french: 'concession (rhétorique)', phonetic: '/kənˈseʃn/', example: 'I concede that the current system has flaws, but scrapping it entirely would be reckless.', exampleTranslation: 'Je concède que le système actuel a des défauts, mais l\'abolir entièrement serait imprudent.' },
    { english: 'refutation', french: 'réfutation', phonetic: '/ˌrefjuːˈteɪʃn/', example: 'The refutation demonstrated that the statistics had been cherry-picked.', exampleTranslation: 'La réfutation a démontré que les statistiques avaient été sélectionnées à charge.' },
    { english: 'pre-emptive rebuttal', french: 'réfutation préventive', phonetic: '/priːˈemptɪv rɪˈbʌtl/', example: 'Before my opponent even raises the cost argument, let me address it directly.', exampleTranslation: 'Avant même que mon adversaire soulève l\'argument du coût, laissez-moi l\'aborder directement.' },
    { english: 'to undermine', french: 'saper / fragiliser', phonetic: '/ˌʌndərˈmaɪn/', example: 'The leaked report undermines the government\'s credibility on climate policy.', exampleTranslation: 'Le rapport divulgué sappe la crédibilité du gouvernement sur la politique climatique.' },
    { english: 'to concede', french: 'concéder / admettre', phonetic: '/kənˈsiːd/', example: 'I readily concede that progress has been made, but it falls far short of what is needed.', exampleTranslation: 'J\'admets volontiers que des progrès ont été réalisés, mais ils sont bien loin de ce qui est nécessaire.' },
  ],
  grammar: {
    title: 'Les techniques de réfutation : concession-réfutation, réfutation préventive et structures argumentatives',
    explanation: 'L\'art de réfuter est au cœur du débat persuasif. Les anglophones utilisent des structures codifiées que les francophones doivent maîtriser : (1) La structure concession-réfutation : on admet un point adverse pour mieux le neutraliser. Formules clés : « While it is true that... nevertheless... » / « Admittedly... however... » / « I grant that... yet... » / « It may be conceded that... but... ». Cette structure est incontournable en anglais — elle montre que vous avez entendu l\'adversaire tout en le battant sur son propre terrain. (2) La réfutation préventive (pre-emptive rebuttal) : on anticipe et neutralise l\'argument adverse avant même qu\'il ne soit formulé. « I anticipate my opponent will argue X — let me address that now... ». C\'est une technique avancée qui démontre la maîtrise du sujet. (3) « To undermine » ≠ « to disprove » : undermine = saper la base (fragiliser) ; disprove = prouver la fausseté (démolir). On undermine un argument en montrant ses faiblesses ; on disprove un argument en prouvant qu\'il est faux. (4) L\'ordre concession-réfutation est fixe en anglais : toujours « While [concession]... nevertheless [refutation] » — jamais l\'inverse. Commencer par la réfutation puis faire la concession affaiblit votre position.',
    examples: [
      { sentence: 'While it is true that immigration places pressure on public services, nevertheless the economic contributions of immigrants far outweigh the costs.', translation: 'Bien qu\'il soit vrai que l\'immigration exerce une pression sur les services publics, néanmoins les contributions économiques des immigrés dépassent largement les coûts.', isCorrect: true },
      { sentence: 'Admittedly, the initial investment is substantial; however, the long-term savings justify the expenditure.', translation: 'Certes, l\'investissement initial est substantiel ; cependant, les économies à long terme justifient la dépense.', isCorrect: true },
      { sentence: 'Nevertheless the policy is effective, while it is true that it is expensive.', translation: '', isCorrect: false },
      { sentence: 'I anticipate the opposition will cite the Dutch study — let me pre-empt that by noting it has been thoroughly discredited.', translation: 'J\'anticipe que l\'opposition citera l\'étude néerlandaise — laissez-moi prévenir cela en notant qu\'elle a été entièrement discréditée.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Nevertheless the policy is effective, while it is true that it is expensive.', correct: 'While it is true that the policy is expensive, nevertheless it is effective.', explanation: 'L\'ordre concession-réfutation est fixe en anglais : toujours la concession d\'abord (While...), puis la réfutation (nevertheless...). Inverser l\'ordre rend la structure illogique et affaiblit votre argument.' },
      { wrong: 'I concede the argument and agree with my opponent.', correct: 'I concede the point, yet the broader argument still stands.', explanation: 'Concéder un point ≠ abandonner l\'argument. La concession rhétorique admet un élément mineur pour mieux rebondir. Si vous concédez ET acceptez, vous n\'avez plus d\'argument. Toujours : concesssion + « yet/however/nevertheless » + réfutation.' },
    ],
  },
  conversation: [
    { speaker: 'Debater Ashworth', role: 'A', text: 'While it is true that renewable energy currently accounts for only a fraction of global output, nevertheless the trajectory of innovation is unmistakable.', translation: 'Bien qu\'il soit vrai que les énergies renouvelables ne représentent actuellement qu\'une fraction de la production mondiale, néanmoins la trajectoire de l\'innovation est indéniable.' },
    { speaker: 'Debater Fontaine', role: 'B', text: 'Admittedly, innovation is accelerating — however, your argument assumes a technological breakthrough that may never come.', translation: 'Certes, l\'innovation s\'accélère — cependant, votre argument suppose une percée technologique qui pourrait ne jamais venir.' },
    { speaker: 'Debater Ashworth', role: 'A', text: 'I anticipated that objection. Let me offer a pre-emptive rebuttal: even without a breakthrough, existing solar and wind capacity already outcompetes coal on price in most markets.', translation: 'J\'anticipais cette objection. Laissez-moi offrir une réfutation préventive : même sans percée, la capacité solaire et éolienne existante surpasse déjà le charbon en prix dans la plupart des marchés.' },
    { speaker: 'Debater Fontaine', role: 'B', text: 'I grant that solar is cheaper per kilowatt-hour. Yet you\'re undermining your own case — intermittency remains unresolved, and storage costs are prohibitive.', translation: 'J\'accorde que le solaire est moins cher par kilowatt-heure. Pourtant vous sapez votre propre argument — l\'intermittence reste non résolue, et les coûts de stockage sont prohibitifs.' },
    { speaker: 'Debater Ashworth', role: 'A', text: 'On the contrary, battery costs have fallen ninety percent in a decade. The opposition\'s data is outdated — and I suspect they know it.', translation: 'Au contraire, les coûts des batteries ont chuté de quatre-vingt-dix pour cent en une décennie. Les données de l\'opposition sont périmées — et je soupçonne qu\'ils le savent.' },
    { speaker: 'Debater Fontaine', role: 'B', text: 'I concede the battery cost reduction. But let us not conflate price with reliability. A grid that fails when the wind drops is not a solution — it is a gamble.', translation: 'Je concède la baisse du coût des batteries. Mais ne confondons pas prix et fiabilité. Un réseau qui tombe en panne quand le vent faiblit n\'est pas une solution — c\'est un pari.' },
  ],
  conversationTitle: 'Techniques de réfutation : énergie renouvelable',
  pronunciation: [
    { word: 'Concession', phonetic: '/kənˈseʃn/', meaning: 'Concession', tip: 'L\'accent est sur « CESH » : « kun-SESH-un ». Le « o » est réduit en schwa. La terminaison « -ssion » = « shun ». Ne dites pas « kon-se-see-on ».' },
    { word: 'Refutation', phonetic: '/ˌrefjuːˈteɪʃn/', meaning: 'Réfutation', tip: 'L\'accent est sur « TU » : « ref-yoo-TAY-shun ». Le « e » de « re » peut être long ou court. Ne dites pas « re-fyoo-ta-sion » à la française.' },
    { word: 'Pre-emptive', phonetic: '/priːˈemptɪv/', meaning: 'Préventif', tip: 'L\'accent est sur « EMP » : « pree-EMP-tiv ». Le « pre » est long. Ne dites pas « pre-em-pee-tiv ». Le « tive » final = « tiv ».' },
    { word: 'Undermine', phonetic: '/ˌʌndərˈmaɪn/', meaning: 'Saper', tip: 'L\'accent est sur « MINE » : « un-der-MINE ». Le « under » est rapide et réduit. Ne dites pas « un-der-meen ».' },
  ],
}

// ─── c1-l40: Debate Sounds ───────────────────────────────────────────────────────
export const C1_L40: LessonContent = {
  vocab: [
    { english: 'fallacy', french: 'sophisme / erreur de raisonnement', phonetic: '/ˈfæləsi/', example: 'The straw man fallacy misrepresents an opponent\'s argument to make it easier to attack.', exampleTranslation: 'Le sophisme de l\'épouvantail déforme l\'argument d\'un adversaire pour le rendre plus facile à attaquer.' },
    { english: 'rhetoric', french: 'rhétorique', phonetic: '/ˈretərɪk/', example: 'His rhetoric was powerful, but lacked substantive evidence.', exampleTranslation: 'Sa rhétorique était puissante, mais manquait de preuves substantielles.' },
    { english: 'ad hominem', french: 'ad hominem (attaque personnelle)', phonetic: '/æd ˈhɒmɪnəm/', example: 'Attacking the speaker\'s character rather than their argument is a classic ad hominem fallacy.', exampleTranslation: 'Attaquer le caractère de l\'orateur plutôt que son argument est un sophisme ad hominem classique.' },
    { english: 'demagogue', french: 'démagogue', phonetic: '/ˈdeməɡɒɡ/', example: 'The demagogue appealed to fear rather than reason to sway the crowd.', exampleTranslation: 'Le démagogue a fait appel à la peur plutôt qu\'à la raison pour influencer la foule.' },
    { english: 'eloquence', french: 'éloquence', phonetic: '/ˈeləkwəns/', example: 'Her eloquence in the final rebuttal won over the entire audience.', exampleTranslation: 'Son éloquence dans la réfutation finale a conquis tout l\'auditoire.' },
  ],
  grammar: {
    title: 'Prononciation des termes de débat et rhétorique : pièges pour francophones',
    explanation: 'Les termes de la rhétorique et du débat sont souvent d\'origine latine ou grecque, et leur prononciation anglaise diffère radicalement de ce que les francophones attendent : (1) « Rhetoric » : /ˈretərɪk/ — l\'accent est sur la première syllabe, et le « rh » se prononce « r » (pas de « h » aspiré en anglais). Le « e » est court. Ne dites PAS « ré-to-rik » à la française. (2) « Fallacy » : /ˈfæləsi/ — l\'accent est sur « FAL », le « a » est très ouvert comme dans « cat ». Ne dites pas « fa-la-si ». (3) « Ad hominem » : /æd ˈhɒmɪnəm/ — en anglais, le « a » de « ad » est ouvert, le « h » de « hominem » est aspiré (contrairement au latin et au français où il est muet). Ne dites pas « ad o-mi-nem » sans le « h ». (4) « Demagogue » : /ˈdeməɡɒɡ/ — l\'accent est sur « DEM » (première syllabe), pas sur « gogue » comme en français. Le « a » est réduit. Le « gue » final se prononce « gog ». (5) « Eloquent » ≠ « éloquent » : /ˈeləkwənt/ — l\'accent est sur « EL », le « o » est réduit, le « qu » se prononce « kw ». Ces différences sont cruciales : mal prononcer ces termes dans un débat nuit immédiatement à votre ethos.',
    examples: [
      { sentence: 'The ad hominem attack undermined the speaker\'s credibility more than it damaged his opponent.', translation: 'L\'attaque ad hominem a sapé la crédibilité de l\'orateur plus qu\'elle n\'a nui à son adversaire.', isCorrect: true },
      { sentence: 'She identified the false dilemma fallacy in his argument and dismantled it systematically.', translation: 'Elle a identifié le sophisme du faux dilemme dans son argument et l\'a démonté systématiquement.', isCorrect: true },
      { sentence: 'The demagogue used a lot of rhetoric to convince the audience, but his logic was sound.', translation: '', isCorrect: false },
      { sentence: 'His eloquence was matched only by the rigour of his reasoning.', translation: 'Son éloquence n\'était égalée que par la rigueur de son raisonnement.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The demagogue used a lot of rhetoric to convince the audience, but his logic was sound.', correct: 'The demagogue used a lot of rhetoric to manipulate the audience, but his logic was fundamentally flawed.', explanation: 'Par définition, un démagogue manipule par l\'émotion et la peur plutôt que par la raison. Dire qu\'un démagogue a une « logique solide » est contradictoire. Le démagogue est caractérisé précisément par le manque de rigueur logique.' },
      { wrong: 'Ad omineem fallacy', correct: 'Ad hominem fallacy', explanation: 'Prononcez « ad HOM-in-um » — le « h » est aspiré en anglais ! En français, on dit souvent « ad omineem » sans le « h », mais en anglais, « hominem » commence par un « h » expiré. C\'est le marqueur d\'un francophone.' },
    ],
  },
  conversation: [
    { speaker: 'Judge Patel', role: 'A', text: 'That was a powerful speech, but I must caution the proposition: the ad hominem remarks about your opponent\'s background are out of order.', translation: 'C\'était un discours puissant, mais je dois avertir la proposition : les remarques ad hominem sur les antécédents de votre adversaire sont hors de propos.' },
    { speaker: 'Proposition Speaker (Ms Lambert)', role: 'B', text: 'I apologise, Your Honour. I shall rephrase. The opposition\'s reliance on selective data amounts to a fallacy of cherry-picking.', translation: 'Je m\'excuse, Madame la Juge. Je reformulerai. Le recours de l\'opposition à des données sélectives s\'apparente à un sophisme de sélection à charge.' },
    { speaker: 'Judge Patel', role: 'A', text: 'Better. Now, opposition — your rebuttal. And I remind both teams: eloquence must serve argument, not replace it.', translation: 'Mieux. Maintenant, opposition — votre réfutation. Et je rappelle aux deux équipes : l\'éloquence doit servir l\'argument, non le remplacer.' },
    { speaker: 'Opposition Speaker (Mr Chen)', role: 'B', text: 'The proposition accused us of cherry-picking, yet their own statistics come from a single, disputed study. That is the very definition of the pot calling the kettle black.', translation: 'La proposition nous accuse de sélection à charge, alors que leurs propres statistiques proviennent d\'une seule étude contestée. C\'est la définition même de la poêle qui dit au chaudron qu\'il est noir.' },
    { speaker: 'Judge Patel', role: 'A', text: 'An effective counter. Be careful, however, not to drift into rhetoric for its own sake. The judges value substance over style.', translation: 'Une contre-argumentation efficace. Soyez prudent, cependant, à ne pas dériver vers la rhétorique pour elle-même. Les juges valorisent le fond sur la forme.' },
    { speaker: 'Opposition Speaker (Mr Chen)', role: 'B', text: 'Understood. To close: the proposition has committed a false dilemma fallacy — suggesting we must choose between their plan and disaster. There is a third way: incremental reform.', translation: 'Compris. Pour conclure : la proposition a commis un sophisme de faux dilemme — suggérant que nous devons choisir entre leur plan et le désastre. Il existe une troisième voie : la réforme progressive.' },
  ],
  conversationTitle: 'Jugement de débat : sophismes et éloquence',
  pronunciation: [
    { word: 'Rhetoric', phonetic: '/ˈretərɪk/', meaning: 'Rhétorique', tip: 'Prononcez « RET-er-ik » — l\'accent est sur « RET ». Le « h » est muet en anglais aussi (pas d\'aspiration). Le « e » est court. Ne dites pas « ray-to-rik ».' },
    { word: 'Fallacy', phonetic: '/ˈfæləsi/', meaning: 'Sophisme', tip: 'L\'accent est sur « FAL » : « FAL-uh-see ». Le « a » est très ouvert comme dans « cat ». Ne dites pas « fa-la-si » à la française.' },
    { word: 'Demagogue', phonetic: '/ˈdeməɡɒɡ/', meaning: 'Démagogue', tip: 'L\'accent est sur « DEM » : « DEM-uh-gog ». Le « a » est réduit en schwa. Le « gue » final se prononce « gog » avec un « o » ouvert. Ne dites pas « day-ma-gog » avec l\'accent sur « gog ».' },
    { word: 'Eloquence', phonetic: '/ˈeləkwəns/', meaning: 'Éloquence', tip: 'L\'accent est sur « EL » : « EL-uh-kwuns ». Le « o » est réduit. Le « qu » = « kw ». La terminaison « -ence » = « uns ». Ne dites pas « ay-lo-kans ».' },
  ],
}
