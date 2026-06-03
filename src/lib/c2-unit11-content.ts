import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C2 MASTERY — UNIT 11: ETHICAL DISCOURSE (c2-l51 through c2-l55)
// YOELANG English Learning App for Francophone Users
// Near-native mastery: bioethics, utilitarianism, deontology, moral reasoning
// ════════════════════════════════════════════════════════════════════════════════

// ─── c2-l51: Ethics Vocabulary — Bioethics, utilitarianism, deontology ────────────
export const C2_L51: LessonContent = {
  vocab: [
    {
      english: 'Bioethics',
      french: 'Bioéthique',
      phonetic: '/ˌbaɪoʊˈɛθɪks/',
      example: 'Contemporary bioethics grapples with the moral implications of CRISPR gene editing and embryonic stem cell research.',
      exampleTranslation: 'La bioéthique contemporaine se débat avec les implications morales de l\'édition génétique CRISPR et de la recherche sur les cellules souches embryonnaires.',
    },
    {
      english: 'Utilitarianism',
      french: 'Utilitarisme',
      phonetic: '/juːˌtɪlɪˈtɛəriənɪzəm/',
      example: 'Utilitarianism, in its Benthamite formulation, reduces moral reasoning to the maximisation of aggregate pleasure over pain.',
      exampleTranslation: 'L\'utilitarisme, dans sa formulation benthamienne, réduit le raisonnement moral à la maximisation du plaisir agrégé sur la douleur.',
    },
    {
      english: 'Deontology',
      french: 'Déontologie',
      phonetic: '/ˌdiːɒnˈtɒlədʒi/',
      example: 'Kantian deontology holds that certain actions are intrinsically wrong, irrespective of their consequences — lying being the paradigmatic case.',
      exampleTranslation: 'La déontologie kantienne soutient que certaines actions sont intrinsèquement mauvaises, indépendamment de leurs conséquences — le mensonge étant le cas paradigmatique.',
    },
    {
      english: 'Consequentialism',
      french: 'Conséquentialisme',
      phonetic: '/ˌkɒnsɪˈkwenʃəlɪzəm/',
      example: 'Consequentialism judges the moral worth of an action solely by its outcomes, a stance that critics argue permits intuitively abhorrent trade-offs.',
      exampleTranslation: 'Le conséquentialisme juge la valeur morale d\'une action uniquement par ses résultats, une position que les critiques estiment permettre des compromis intuitivement odieux.',
    },
    {
      english: 'Virtue ethics',
      french: 'Éthique des vertus',
      phonetic: '/ˈvɜːrtʃuː ˈɛθɪks/',
      example: 'Virtue ethics, rooted in Aristotelian eudaimonia, shifts the focus from rule-following to the cultivation of moral character over a lifetime.',
      exampleTranslation: 'L\'éthique des vertus, enracinée dans l\'eudémonisme aristotélicien, déplace l\'attention de l\'obéissance aux règles vers la cultivation du caractère moral tout au long d\'une vie.',
    },
  ],
  grammar: {
    title: 'Le langage de la délibération morale : constructions nominales et abstraction',
    explanation: `À un niveau C2, le discours éthique exige une maîtrise des constructions nominales abstraites qui permettent de traiter des concepts moraux avec la précision requise. En anglais académique, les nominalisations — transformer un verbe ou un adjectif en nom — sont omniprésentes : "the maximisation of welfare" (au lieu de "maximising welfare"), "the permissibility of deception" (au lieu de "whether deception is permissible"). Ces constructions permettent une distance analytique et une densité conceptuelle que les structures verbales directes ne peuvent atteindre. De plus, l'anglais éthique emploie fréquemment des constructions existentielles et impersonnelles : "There arises a prima facie duty to..." (Il surgit un devoir prima facie de...), "It is impermissible to..." (Il est impermissible de...). Les verbes cognitifs d'attitude propositionnelle ("to hold that", "to contend that", "to maintain that") sont essentiels pour attribuer des positions philosophiques sans les simplifier. Enfin, les constructions adjectivales post-posées ("a duty unfulfilled", "a promise broken") confèrent au discours moral une solennité rhétorique caractéristique.`,
    examples: [
      { sentence: 'The permissibility of euthanasia hinges upon whether one prioritises autonomy over the sanctity of life.', translation: 'La permissibilité de l\'euthanasie dépend de whether l\'on priorise l\'autonomie sur le caractère sacré de la vie.', isCorrect: true },
      { sentence: 'There arises a prima facie obligation to disclose the diagnosis, even when doing so contravenes the patient\'s expressed wishes.', translation: 'Il surgit une obligation prima facie de divulguer le diagnostic, même lorsque cela contrevenait aux souhaits exprimés du patient.', isCorrect: true },
      { sentence: 'Maximising welfare is what utilitarianism says we should do.', translation: '', isCorrect: false },
      { sentence: 'Kant maintains that a promise broken undermines the very possibility of promising as a moral practice.', translation: 'Kant soutient qu\'une promesse rommine sape la possibilité même de promettre en tant que pratique morale.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Maximising welfare is what utilitarianism says we should do.', correct: 'Utilitarianism holds that the maximisation of welfare constitutes the sole criterion of moral rightness.', explanation: 'La reformulation en structure verbale directe ("is what we should do") est stylistiquement insuffisante pour un discours éthique de niveau C2. La nominalisation ("the maximisation of welfare") et l\'attribution via un verbe d\'attitude propositionnelle ("holds that") confèrent la densité conceptuelle requise.' },
      { wrong: 'Kant says that lying is always wrong.', correct: 'Kant maintains that the universalisation of the maxim of deception yields a contradiction in conception.', explanation: 'La formulation "says that lying is always wrong" simplifie à l\'excès la position kantienne. Le discours éthique C2 exige une reconstruction fidèle de l\'argument : "maintains that" (au lieu de "says") + "the universalisation of the maxim" (nominalisation) + "yields a contradiction in conception" (formulation technique précise).' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Diallo', role: 'A', text: 'The bioethics committee must decide whether to permit germline editing — and if so, under what constraints. The stakes could scarcely be higher.', translation: 'Le comité de bioéthique doit décider s\'il convient de permettre l\'édition de la lignée germinale — et si oui, sous quelles contraintes. Les enjeux ne pourraient guère être plus élevés.' },
    { speaker: 'Dr. Beaumont', role: 'B', text: 'A utilitarian would argue that the aggregate reduction of hereditary disease justifies the intervention, provided the risks are calculable.', translation: 'Un utilitariste soutiendrait que la réduction agrégée des maladies héréditaires justifie l\'intervention, pourvu que les risques soient calculables.' },
    { speaker: 'Prof. Diallo', role: 'A', text: 'Provided — that is a considerable proviso. Deontology would counter that germline editing instrumentalises future persons who cannot consent.', translation: 'Pourvu — c\'est là une réserve considérable. La déontologie riposterait que l\'édition germinale instrumentalise des personnes futures qui ne peuvent consentir.' },
    { speaker: 'Dr. Beaumont', role: 'B', text: 'That argument assumes consent is the sole moral currency. Virtue ethics, by contrast, would ask what kind of society we become through such practices.', translation: 'Cet argument suppose que le consentement est l\'unique monnaie morale. L\'éthique des vertus, en revanche, demanderait quelle sorte de société nous devenons par de telles pratiques.' },
    { speaker: 'Prof. Diallo', role: 'A', text: 'Precisely — and there arises a further complication: consequentialism and deontology yield contradictory verdicts, yet neither can be straightforwardly dismissed.', translation: 'Précisément — et il surgit une complication supplémentaire : le conséquentialisme et la déontologie produisent des verdicts contradictoires, et pourtant ni l\'un ni l\'autre ne peut être sommairement écarté.' },
    { speaker: 'Dr. Beaumont', role: 'B', text: 'Which is precisely why the permissibility of such technologies cannot be resolved by appeal to a single moral framework. The question demands irreducibly pluralistic deliberation.', translation: 'C\'est précisément pourquoi la permissibilité de telles technologies ne peut être résolue par l\'appel à un seul cadre moral. La question exige une délibération irréductiblement pluraliste.' },
    { speaker: 'Prof. Diallo', role: 'A', text: 'Agreed. And it is in that very tension between frameworks — not in their synthesis — that genuine ethical insight emerges.', translation: 'Convenu. Et c\'est dans cette tension même entre les cadres — non dans leur synthèse — qu\'émerge la véritable intelligence éthique.' },
  ],
  conversationTitle: 'Bioéthique et cadres moraux',
  pronunciation: [
    {
      word: 'Bioethics',
      phonetic: '/ˌbaɪoʊˈɛθɪks/',
      meaning: 'Bioéthique',
      tip: 'Accent sur "ETH" : "baï-o-ETH-iks". Le "bio" se prononce "baï-o" (trois syllabes, pas deux). Le "th" est interdentale soufflée — langue entre les dents.',
    },
    {
      word: 'Utilitarianism',
      phonetic: '/juːˌtɪlɪˈtɛəriənɪzəm/',
      meaning: 'Utilitarisme',
      tip: 'Accent principal sur "TAIR" : "yoo-ti-li-TAIR-ee-eh-niz-em". Le "u" initial = "you". La syllabe "air" utilise le son /eə/ comme dans "care".',
    },
    {
      word: 'Deontology',
      phonetic: '/ˌdiːɒnˈtɒlədʒi/',
      meaning: 'Déontologie',
      tip: 'Accent principal sur "TOL" : "dee-on-TOL-eh-dji". Le "eo" = deux syllabes séparées (ee-on). Le "g" est doux comme dans "judge". Ne dites pas "dé-on-to-lo-JI".',
    },
    {
      word: 'Consequentialism',
      phonetic: '/ˌkɒnsɪˈkwenʃəlɪzəm/',
      meaning: 'Conséquentialisme',
      tip: 'Accent sur "KWEN" : "kon-sih-KWEN-shul-iz-em". Le "quen" se prononce comme "queen" mais plus bref. Le "tial" se réduit en "shul".',
    },
  ],
}

// ─── c2-l52: Moral Reasoning — Conditional perfection, counterfactuals in ethics ─
export const C2_L52: LessonContent = {
  vocab: [
    {
      english: 'Trolley problem',
      french: 'Dilemme du tramway',
      phonetic: '/ˈtrɒli ˈprɒbləm/',
      example: 'The trolley problem, in its various permutations, exposes the tension between deontological constraints and consequentialist reasoning.',
      exampleTranslation: 'Le dilemme du tramway, dans ses diverses permutations, expose la tension entre les contraintes déontologiques et le raisonnement conséquentialiste.',
    },
    {
      english: 'Prima facie duty',
      french: 'Devoir prima facie',
      phonetic: '/ˌpriːmə ˈfeɪʃi ˈdjuːti/',
      example: 'Ross argued that prima facie duties can conflict, and that moral judgement consists in determining which duty is most pressing in a given circumstance.',
      exampleTranslation: 'Ross soutenait que les devoirs prima facie peuvent entrer en conflit, et que le jugement moral consiste à déterminer quel devoir est le plus pressant dans une circonstance donnée.',
    },
    {
      english: 'Moral agent',
      french: 'Agent moral',
      phonetic: '/ˈmɒrəl ˈeɪdʒənt/',
      example: 'A moral agent, properly construed, must possess both rational capacity and the freedom to act otherwise — conditions that raise profound questions about responsibility under duress.',
      exampleTranslation: 'Un agent moral, correctement conçu, doit posséder à la fois la capacité rationnelle et la liberté d\'agir autrement — des conditions qui soulèvent des questions profondes sur la responsabilité sous la contrainte.',
    },
    {
      english: 'Non-maleficence',
      french: 'Non-malfaisance',
      phonetic: '/ˌnɒnməˈlɛfɪsəns/',
      example: 'The principle of non-maleficence — "first, do no harm" — is often invoked as the bedrock of medical ethics, yet its application in triage situations is anything but straightforward.',
      exampleTranslation: 'Le principe de non-malfaisance — « d\'abord, ne pas nuire » — est souvent invoqué comme le fondement de l\'éthique médicale, pourtant son application en situation de triage est tout sauf simple.',
    },
    {
      english: 'Paternalism',
      french: 'Paternalisme',
      phonetic: '/pəˈtɜːrnəlɪzəm/',
      example: 'Soft paternalism justifies interference with a person\'s choices on the grounds that those choices are not sufficiently autonomous to warrant respect.',
      exampleTranslation: 'Le paternalisme doux justifie l\'ingérence dans les choix d\'une personne au motif que ces choix ne sont pas suffisamment autonomes pour mériter le respect.',
    },
  ],
  grammar: {
    title: 'Le conditionnel de perfection et les contrefactuels dans le raisonnement moral',
    explanation: `Le raisonnement moral repose fondamentalement sur des constructions contrefactuelles et conditionnelles. La « perfection conditionnelle » (conditional perfection) est le phénomène par lequel un énoncé conditionnel est implicitement renforcé en biconditionnel : "If an action maximises utility, then it is morally right" est souvent interprété (à tort ou à raison) comme "Only if an action maximises utility is it morally right". En anglais, les contrefactuels se construisent avec le past perfect dans la protase (si) et le conditional perfect dans l'apodose (alors) : "Had the doctor disclosed the diagnosis, the patient would have been able to make an informed decision." L'inversion — sans "if" — est particulièrement fréquente dans le discours éthique formel : "Were we to accept this principle, we would be committed to...", "Should the consequences prove catastrophic, the initial justification would be void." Ces inversions confèrent au raisonnement moral une portée hypothétique et une rigueur logique que les constructions standard ne peuvent égaler. Il est crucial de maîtriser aussi les nuances entre conditionnels ouverts ("If we adopt this policy, the consequences may be severe") et conditionnels contrefactuels ("If we were to adopt this policy, the consequences would be severe").`,
    examples: [
      { sentence: 'Had Kant entertained the possibility of conflicting duties, his deontological framework might have accommodated the moral residue that tragic choices inevitably generate.', translation: 'Si Kant avait envisagé la possibilité de devoirs conflictuels, son cadre déontologique aurait pu accommoder le résidu moral que les choix tragiques génèrent inévitablement.', isCorrect: true },
      { sentence: 'Were we to accept soft paternalism as a general principle, we would be committed to questioning the autonomy of every decision made under conditions of imperfect information.', translation: 'Si nous devions accepter le paternalisme doux comme principe général, nous serions engagés à questionner l\'autonomie de toute décision prise dans des conditions d\'information imparfaite.', isCorrect: true },
      { sentence: 'If we accept soft paternalism, we are committed to questioning every decision.', translation: '', isCorrect: false },
      { sentence: 'Should the prima facie duties conflict, the moral agent must determine which obligation holds greater weight in the particular circumstances.', translation: 'Si les devoirs prima facie venaient à entrer en conflit, l\'agent moral doit déterminer quelle obligation a un plus grand poids dans les circonstances particulières.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'If we accept soft paternalism, we are committed to questioning every decision.', correct: 'Were we to accept soft paternalism as a general principle, we would be committed to questioning the autonomy of every decision made under conditions of imperfect information.', explanation: 'La forme conditionnelle ouverte ("If we accept... we are") ne convient pas pour le raisonnement éthique hypothétique. Le contrefactuel ("Were we to accept... we would be") signale qu\'il s\'agit d\'une exploration conceptuelle, non d\'une description factuelle. De plus, la précision conceptuelle ("under conditions of imperfect information") est indispensable à ce niveau.' },
      { wrong: 'If Kant would have entertained conflicting duties, his framework might accommodate moral residue.', correct: 'Had Kant entertained the possibility of conflicting duties, his deontological framework might have accommodated the moral residue that tragic choices inevitably generate.', explanation: 'Deux erreurs : (1) "If Kant would have entertained" est grammaticalement incorrect — le past perfect est requis dans la protase contrefactuelle. (2) L\'inversion ("Had Kant entertained") est la forme attendue en discours éthique formel, plus élégante que "If Kant had entertained".' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Okonkwo', role: 'A', text: 'Consider the trolley problem: were we to pull the lever, we would be causally responsible for one death; were we not to, we would be morally responsible for five.', translation: 'Considérons le dilemme du tramway : si nous tirions le levier, nous serions causalement responsables d\'une mort ; si nous ne le tirions pas, nous serions moralement responsables de cinq.' },
    { speaker: 'Prof. Lefèvre', role: 'B', text: 'That framing presupposes a distinction between killing and letting die — a distinction that consequentialism, at least, refuses to recognise as morally salient.', translation: 'Ce cadrage présuppose une distinction entre tuer et laisser mourir — une distinction que le conséquentialisme, du moins, refuse de reconnaître comme moralement pertinente.' },
    { speaker: 'Dr. Okonkwo', role: 'A', text: 'Had Ross been addressing this case, he would have identified a conflict between the prima facie duty of non-maleficence and that of beneficence — with no algorithm to adjudicate between them.', translation: 'Si Ross avait traité ce cas, il aurait identifié un conflit entre le devoir prima facie de non-malfaisance et celui de bienfaisance — sans algorithme pour les arbitrer.' },
    { speaker: 'Prof. Lefèvre', role: 'B', text: 'Which is precisely why the moral agent must exercise phronesis — practical wisdom — rather than mechanical rule-application.', translation: 'C\'est précisément pourquoi l\'agent moral doit exercer la phronesis — la sagesse pratique — plutôt que l\'application mécanique des règles.' },
    { speaker: 'Dr. Okonkwo', role: 'A', text: 'Should we then abandon the search for moral principles altogether, or merely acknowledge their inherent insufficiency?', translation: 'Devrions-nous alors abandonner entièrement la recherche de principes moraux, ou simplement reconnaître leur insuffisance inhérente ?' },
    { speaker: 'Prof. Lefèvre', role: 'B', text: 'The latter, I think. Paternalism, for instance, remains a danger precisely when principles are applied without sensitivity to context — yet without principles, we are left with mere intuitionism.', translation: 'Cette dernière option, je pense. Le paternalisme, par exemple, demeure un danger précisément lorsque les principes sont appliqués sans sensibilité au contexte — pourtant sans principes, nous sommes réduits au simple intuitionnisme.' },
    { speaker: 'Dr. Okonkwo', role: 'A', text: 'And therein lies the irreducible tension of moral life — between the universal and the particular, the principled and the compassionate.', translation: 'Et c\'est là que réside la tension irréductible de la vie morale — entre l\'universel et le particulier, le principiel et le compatissant.' },
  ],
  conversationTitle: 'Le dilemme du tramway et le jugement moral',
  pronunciation: [
    {
      word: 'Prima facie',
      phonetic: '/ˌpriːmə ˈfeɪʃi/',
      meaning: 'Prima facie (de première apparence)',
      tip: 'Deux accents : "PRI-ma FAÿ-chi" en anglais (latin naturalisé). Ne dites pas "pree-mah fah-chee" à l\'italienne. En anglais juridique et philosophique, le "c" se prononce "ch" comme dans "church".',
    },
    {
      word: 'Non-maleficence',
      phonetic: '/ˌnɒnməˈlɛfɪsəns/',
      meaning: 'Non-malfaisance',
      tip: 'Accent sur "LEF" : "non-meh-LEF-ih-sens". Le "a" dans "mal" se réduit en schwa. Le "fic" = "fiss" avec un "i" bref. Ne dites pas "non-ma-LE-fiss-ance".',
    },
    {
      word: 'Paternalism',
      phonetic: '/pəˈtɜːrnəlɪzəm/',
      meaning: 'Paternalisme',
      tip: 'Accent sur "TER" : "peh-TER-nul-iz-em". Le "a" initial se réduit en schwa. Le "er" est long et ouvert comme dans "her". Ne dites pas "pa-ter-NAL-iz-em".',
    },
    {
      word: 'Consequentialism',
      phonetic: '/ˌkɒnsɪˈkwenʃəlɪzəm/',
      meaning: 'Conséquentialisme',
      tip: 'Accent sur "KWEN" : "kon-sih-KWEN-shul-iz-em". Le "tial" se réduit en "shul". Ne prononcez pas le "t" : "shul" pas "tee-al". L\'accent français serait sur la dernière syllabe — en anglais, c\'est l\'antépénultième.',
    },
  ],
}

// ─── c2-l53: Ethical Debate — Debating moral dilemmas ─────────────────────────────
export const C2_L53: LessonContent = {
  vocab: [
    {
      english: 'Moral hazard',
      french: 'Aléa moral',
      phonetic: '/ˈmɒrəl ˈhæzərd/',
      example: 'The moral hazard inherent in bank bailouts is that institutions may take excessive risks, knowing the state will absorb the losses.',
      exampleTranslation: 'L\'aléa moral inhérent aux renflouements bancaires est que les institutions peuvent prendre des risques excessifs, sachant que l\'État absorbera les pertes.',
    },
    {
      english: 'Distributive justice',
      french: 'Justice distributive',
      phonetic: '/dɪˈstrɪbjuːtɪv ˈdʒʌstɪs/',
      example: 'Rawls\'s theory of distributive justice proposes that social and economic inequalities be arranged to benefit the least advantaged.',
      exampleTranslation: 'La théorie de la justice distributive de Rawls propose que les inégalités sociales et économiques soient arrangées pour bénéficier aux plus désavantagés.',
    },
    {
      english: 'Triage',
      french: 'Triage',
      phonetic: '/triːˈɑːʒ/',
      example: 'The ethics of triage force clinicians to allocate scarce resources in ways that may conflict with their duty of care to individual patients.',
      exampleTranslation: 'L\'éthique du triage oblige les cliniciens à allouer des ressources rares de façons qui peuvent entrer en conflit avec leur devoir de soins envers les patients individuels.',
    },
    {
      english: 'Slippery slope',
      french: 'Pente glissante',
      phonetic: '/ˈslɪpəri sloʊp/',
      example: 'The slippery slope argument against voluntary euthanasia contends that legalisation would inevitably lead to the non-voluntary euthanasia of vulnerable populations.',
      exampleTranslation: 'L\'argument de la pente glissante contre l\'euthanasie volontaire soutient que la légalisation conduirait inévitablement à l\'euthanasie non volontaire des populations vulnérables.',
    },
    {
      english: 'Informed consent',
      french: 'Consentement éclairé',
      phonetic: '/ɪnˌfɔːrmd kənˈsɛnt/',
      example: 'Informed consent requires not merely the disclosure of risks, but the patient\'s genuine comprehension of the information and its implications.',
      exampleTranslation: 'Le consentement éclairé exige non seulement la divulgation des risques, mais la compréhension authentique par le patient de l\'information et de ses implications.',
    },
  ],
  grammar: {
    title: 'Les structures du débat éthique : concessives, réfutatives et dialectiques',
    explanation: `Le débat éthique à un niveau C2 exige la maîtrise de structures concessives, réfutatives et dialectiques qui permettent d'articuler des positions opposées avec rigueur et équité. Les structures concessives avancées — "While it may be granted that..., it does not follow that..." (Bien qu'il puisse être concédé que..., il ne s'ensuit pas que...), "Admittedly..., yet one must also reckon with..." (Il est admis que..., mais il faut aussi compter avec...) — reconnaissent la force d'un argument avant de le limiter. Les réfutations négatives — "Far from vindicating the policy, the data actually undermine its foundational premise" (Loin de justifier la politique, les données sapent en réalité sa prémisse fondatrice) — inversent l'argument adverse plutôt que de le rejeter simplement. Les structures dialectiques — "The thesis and its antithesis generate a tension that can only be resolved by..." (La thèse et son antithèse engendrent une tension qui ne peut être résolue que par...) — sont essentielles pour le raisonnement moral complexe. Enfin, les constructions de portée négative — "It is not the case that...", "Nothing in the argument entails that..." — permettent de repousser les conclusions non autorisées avec précision logique.`,
    examples: [
      { sentence: 'While it may be granted that the slippery slope argument raises legitimate concerns, it does not follow that every incremental policy change will inevitably lead to the worst-case scenario.', translation: 'Bien qu\'il puisse être concédé que l\'argument de la pente glissante soulève des préoccupations légitimes, il ne s\'ensuit pas que chaque changement politique incrémental conduira inévitablement au pire scénario.', isCorrect: true },
      { sentence: 'Far from vindicating the principle of non-maleficence, the triage protocol actually requires clinicians to violate it in certain circumstances.', translation: 'Loin de justifier le principe de non-malfaisance, le protocole de triage exige en réalité des cliniciens qu\'ils le violent dans certaines circonstances.', isCorrect: true },
      { sentence: 'The slippery slope argument is wrong because not every change leads to the worst case.', translation: '', isCorrect: false },
      { sentence: 'It is not the case that informed consent, however meticulously obtained, can eliminate all moral hazard from clinical research.', translation: 'Il n\'est pas le cas que le consentement éclairé, si méticuleusement obtenu soit-il, puisse éliminer tout aléa moral de la recherche clinique.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The slippery slope argument is wrong because not every change leads to the worst case.', correct: 'While it may be granted that the slippery slope argument raises legitimate concerns, it does not follow that every incremental policy change will inevitably lead to the worst-case scenario.', explanation: 'La réfutation directe et simplificatrice ("is wrong because") est rhétoriquement inefficace dans un débat éthique. La structure concessive-refutative ("While it may be granted that... it does not follow that...") reconnaît la force partielle de l\'argument adverse avant de le limiter — ce qui est beaucoup plus persuasif et intellectuellement honnête.' },
      { wrong: 'Informed consent cannot eliminate moral hazard from research.', correct: 'It is not the case that informed consent, however meticulously obtained, can eliminate all moral hazard from clinical research.', explanation: 'La formulation directe ("cannot eliminate") est une affirmation plate. La construction de portée négative ("It is not the case that...") est plus précise logiquement — elle cible exactement la portée de la négation. L\'ajout de "however meticulously obtained" renforce l\'argument en anticipant une objection.' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Achebe', role: 'A', text: 'The question of distributive justice in vaccine allocation — during a pandemic, no less — forces us to confront competing principles head-on.', translation: 'La question de la justice distributive dans l\'allocation des vaccins — en pleine pandémie, qui plus est — nous oblige à affronter de front des principes concurrents.' },
    { speaker: 'Dr. Mercier', role: 'B', text: 'While it may be granted that maximising lives saved is a compelling objective, it does not follow that we should simply allocate vaccines to those most likely to benefit.', translation: 'Bien qu\'il puisse être concédé que la maximisation des vies sauvées soit un objectif convaincant, il ne s\'ensuit pas que nous devrions simplement allouer les vaccins à ceux les plus susceptibles d\'en bénéficier.' },
    { speaker: 'Prof. Achebe', role: 'A', text: 'Far from it — the moral hazard of such a strategy is that it systematically disadvantages the very communities already marginalised by structural inequity.', translation: 'Bien au contraire — l\'aléa moral d\'une telle stratégie est qu\'elle désavantage systématiquement les communautés mêmes déjà marginalisées par l\'inéquité structurelle.' },
    { speaker: 'Dr. Mercier', role: 'B', text: 'Admittedly, the Rawlsian difference principle would mandate prioritising the least advantaged. Yet one must also reckon with the urgency of reducing overall mortality.', translation: 'Il est admis que le principe de différence rawlsien prescrirait de prioriser les plus désavantagés. Mais il faut aussi compter avec l\'urgence de réduire la mortalité globale.' },
    { speaker: 'Prof. Achebe', role: 'A', text: 'The thesis and its antithesis generate precisely the tension that triage protocols must navigate — and no algorithm can resolve it without remainder.', translation: 'La thèse et son antithèse engendrent précisément la tension que les protocoles de triage doivent naviguer — et aucun algorithme ne peut la résoudre sans reste.' },
    { speaker: 'Dr. Mercier', role: 'B', text: 'It is not the case that informed consent, however rigorously obtained, can fully insulate research subjects from exploitation — particularly in resource-poor settings.', translation: 'Il n\'est pas le cas que le consentement éclairé, si rigoureusement obtenu soit-il, puisse pleinement isoler les sujets de recherche de l\'exploitation — particulièrement dans les contextes à faibles ressources.' },
    { speaker: 'Prof. Achebe', role: 'A', text: 'Which is precisely why the slippery slope from legitimate research to coercion is not a logical fallacy but an empirical reality we ignore at our peril.', translation: 'C\'est précisément pourquoi la pente glissante de la recherche légitime vers la coercition n\'est pas un sophisme logique mais une réalité empirique que nous ignorons à nos risques et périls.' },
  ],
  conversationTitle: 'Justice distributive et dilemmes pandémiques',
  pronunciation: [
    {
      word: 'Distributive',
      phonetic: '/dɪˈstrɪbjuːtɪv/',
      meaning: 'Distributif',
      tip: 'Accent sur "STRIB" : "dih-STRIB-yoo-tiv". Le "u" se prononce "you" comme dans "tube". Le "i" final est bref comme dans "bit". Ne dites pas "dis-tri-BU-tiv".',
    },
    {
      word: 'Triage',
      phonetic: '/triːˈɑːʒ/',
      meaning: 'Triage',
      tip: 'Mot d\'origine française naturalisé en anglais : "tree-AHZH". Le "t" est aspiré (contrairement au français). Le "age" = "ahzh" avec le "zh" sonore comme dans "measure". L\'accent est sur la dernière syllabe.',
    },
    {
      word: 'Hazard',
      phonetic: '/ˈhæzərd/',
      meaning: 'Danger / Aléa',
      tip: 'Accent sur la première syllabe : "HAZ-erd". Le "a" est très ouvert comme dans "cat". Le "z" est sonore. Le "ard" se réduit. Ne dites pas "a-ZAR" à la française.',
    },
    {
      word: 'Consent',
      phonetic: '/kənˈsɛnt/',
      meaning: 'Consentement',
      tip: 'Accent sur "SENT" : "ken-SENT". Le "o" se réduit en schwa. Le "e" accentué est ouvert comme dans "bed". Ne confondez pas avec "content" (/ˈkɒntent/ = contenu) dont l\'accent est sur la première syllabe.',
    },
  ],
}

// ─── c2-l54: Case Analysis — Pronouncing ethical terminology ───────────────────────
export const C2_L54: LessonContent = {
  vocab: [
    {
      english: 'Autonomy',
      french: 'Autonomie',
      phonetic: '/ɔːˈtɒnəmi/',
      example: 'Respecting patient autonomy requires that clinicians honour refusal of treatment even when such refusal appears irrational from a medical standpoint.',
      exampleTranslation: 'Respecter l\'autonomie du patient exige que les cliniciens honorent le refus de traitement même lorsqu\'un tel refus apparaît irrationnel d\'un point de vue médical.',
    },
    {
      english: 'Beneficence',
      french: 'Bienfaisance',
      phonetic: '/bɪˈnɛfɪsəns/',
      example: 'The principle of beneficence obliges physicians to act in their patients\' best interests — but what constitutes a "best interest" is itself morally contested.',
      exampleTranslation: 'Le principe de bienfaisance oblige les médecins à agir dans le meilleur intérêt de leurs patients — mais ce qui constitue un « meilleur intérêt » est lui-même moralement contesté.',
    },
    {
      english: 'Euthanasia',
      french: 'Euthanasie',
      phonetic: '/ˌjuːθəˈneɪziə/',
      example: 'The euthanasia debate hinges on whether the right to die with dignity can be reconciled with the societal obligation to protect vulnerable lives.',
      exampleTranslation: 'Le débat sur l\'euthanasie dépend de la possibilité de concilier le droit de mourir dans la dignité avec l\'obligation sociétale de protéger les vies vulnérables.',
    },
    {
      english: 'Sanctity of life',
      french: 'Caractère sacré de la vie',
      phonetic: '/ˈsæŋktɪti əv laɪf/',
      example: 'The sanctity of life doctrine asserts that life possesses intrinsic value that no consequentialist calculus can override — a claim that the secular defence of human rights echoes in modified form.',
      exampleTranslation: 'La doctrine du caractère sacré de la vie affirme que la vie possède une valeur intrinsèque qu\'aucun calcul conséquentialiste ne peut supplanter — une revendication que la défense laïque des droits de l\'homme fait écho sous forme modifiée.',
    },
    {
      english: 'Proportionality',
      french: 'Proportionnalité',
      phonetic: '/prəˌpɔːrʃəˈnælɪti/',
      example: 'The principle of proportionality demands that the harm caused by an intervention not be disproportionate to the good it seeks to achieve — a calculus fraught with moral uncertainty.',
      exampleTranslation: 'Le principe de proportionnalité exige que le préjudice causé par une intervention ne soit pas disproportionné par rapport au bien qu\'elle cherche à atteindre — un calcul lourd d\'incertitude morale.',
    },
  ],
  grammar: {
    title: 'L\'analyse de cas éthique : rapportage académique et attribution de positions',
    explanation: `L'analyse de cas éthique en anglais exige une maîtrise des verbes de rapportage académique et des constructions d'attribution qui permettent de présenter des positions philosophiques avec nuance et fidélité. Les verbes d'attitude propositionnelle se distinguent par leur force épistémique : "argue" (soutenir avec arguments), "contend" (affirmer avec force), "maintain" (soutenir de façon soutenue), "assert" (affirmer catégoriquement), "suggest" (suggérer avec prudence), "insinuate" (insinuer de façon indirecte). Les constructions impersonnelles d'attribution — "It has been argued that...", "A case can be made for...", "One might venture to propose that..." — permettent de présenter une thèse sans l'endosser entièrement, ce qui est crucial dans l'analyse éthique où l'on doit souvent exposer une position avant de l'évaluer. Les constructions en "according to" et "on X's view" sont également essentielles : "On Singer's view, the failure to donate to famine relief is morally equivalent to letting a child drown in a shallow pond." Les expressions de partialité critique — "While persuasive in its broad outlines, the argument falters when..." — permettent une évaluation nuancée qui reconnaît la force d'une position avant d'en signaler les limites.`,
    examples: [
      { sentence: 'It has been argued that the doctrine of the sanctity of life, while persuasive in its broad outlines, falters when confronted with cases of irreversible persistent vegetative state.', translation: 'Il a été soutenu que la doctrine du caractère sacré de la vie, tout en étant convaincante dans ses grandes lignes, achoppe lorsqu\'elle est confrontée aux cas d\'état végétatif persistant irréversible.', isCorrect: true },
      { sentence: 'On Dworkin\'s view, autonomy encompasses not merely freedom from interference but the right to define one\'s own narrative identity.', translation: 'Selon Dworkin, l\'autonomie englobe non seulement la liberté d\'ingérence mais le droit de définir sa propre identité narrative.', isCorrect: true },
      { sentence: 'Singer says we should donate to famine relief.', translation: '', isCorrect: false },
      { sentence: 'A compelling case can be made for proportionality as a mediating principle between absolute deontological prohibitions and unconstrained consequentialist calculation.', translation: 'Un cas convaincant peut être fait pour la proportionnalité comme principe médiateur entre les prohibitions déontologiques absolues et le calcul conséquentialiste sans contrainte.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Singer says we should donate to famine relief.', correct: 'On Singer\'s view, the failure to donate to famine relief is morally equivalent to letting a child drown in a shallow pond.', explanation: 'Le verbe "says" est trop vague et trop faible pour rapporter une position philosophique. "On Singer\'s view" signale qu\'il s\'agit d\'une position attribuée, reconstruite fidèlement. De plus, la formulation spécifique de l\'argument (l\'analogie avec l\'étang peu profond) est indispensable — une paraphrase vague trahit la position.' },
      { wrong: 'Some people argue that sanctity of life is wrong.', correct: 'It has been argued that the doctrine of the sanctity of life, while persuasive in its broad outlines, falters when confronted with cases of irreversible persistent vegetative state.', explanation: '"Some people argue" est vague et "is wrong" est une simplification grotesque. La construction impersonnelle "It has been argued that" est plus appropriée pour l\'attribution académique. L\'évaluation doit être nuancée : "while persuasive in its broad outlines, falters when..." reconnaît la force partielle de la position avant d\'en signaler les limites.' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Nakamura', role: 'A', text: 'Let us consider the case of a patient in irreversible persistent vegetative state — does the principle of autonomy entitle the family to withdraw artificial nutrition?', translation: 'Considérons le cas d\'un patient en état végétatif persistant irréversible — le principe d\'autonomie donne-t-il à la famille le droit de suspendre la nutrition artificielle ?' },
    { speaker: 'Prof. Rousseau', role: 'B', text: 'It has been argued that it does — on the grounds that the patient\'s prior expressed wishes constitute a valid exercise of autonomy, even posthumously.', translation: 'Il a été soutenu que oui — au motif que les souhaits préalablement exprimés du patient constituent un exercice valide de l\'autonomie, même à titre posthume.' },
    { speaker: 'Dr. Nakamura', role: 'A', text: 'While persuasive in its broad outlines, that argument falters when the patient\'s wishes were never explicitly documented — as is so often the case.', translation: 'Tout en étant convaincante dans ses grandes lignes, cet argument achoppe lorsque les souhaits du patient n\'ont jamais été explicitement documentés — comme c\'est si souvent le cas.' },
    { speaker: 'Prof. Rousseau', role: 'B', text: 'On the sanctity of life view, of course, the very question is moot — life being intrinsically inviolable regardless of its quality or the patient\'s prior preferences.', translation: 'Selon la vue du caractère sacré de la vie, bien sûr, la question même est sans objet — la vie étant intrinsèquement inviolable indépendamment de sa qualité ou des préférences préalables du patient.' },
    { speaker: 'Dr. Nakamura', role: 'A', text: 'Yet beneficence, properly construed, cannot require the indefinite prolongation of biological existence when it no longer serves the patient\'s conception of their own good.', translation: 'Pourtant la bienfaisance, correctement conçue, ne peut exiger la prolongation indéfinie de l\'existence biologique lorsqu\'elle ne sert plus la conception du patient de son propre bien.' },
    { speaker: 'Prof. Rousseau', role: 'B', text: 'A compelling case can be made for proportionality as the mediating principle here — the harm of continued existence must be weighed against the harm of its termination.', translation: 'Un cas convaincant peut être fait pour la proportionnalité comme principe médiateur ici — le préjudice de l\'existence continuée doit être mis en balance avec le préjudice de sa fin.' },
    { speaker: 'Dr. Nakamura', role: 'A', text: 'And it is in the weighing — always irreducibly particular, never fully governed by principle — that the moral gravity of clinical judgement resides.', translation: 'Et c\'est dans la pesée — toujours irréductiblement particulière, jamais entièrement gouvernée par le principe — que réside la gravité morale du jugement clinique.' },
  ],
  conversationTitle: 'Autonomie et fin de vie',
  pronunciation: [
    {
      word: 'Autonomy',
      phonetic: '/ɔːˈtɒnəmi/',
      meaning: 'Autonomie',
      tip: 'Accent sur "TON" : "aw-TON-eh-mi". Le "au" initial = "o" ouvert comme dans "law". Le "y" final = "i" bref. Ne dites pas "o-to-NO-mi" à la française.',
    },
    {
      word: 'Beneficence',
      phonetic: '/bɪˈnɛfɪsəns/',
      meaning: 'Bienfaisance',
      tip: 'Accent sur "NEF" : "bih-NEF-ih-sens". Le "e" initial se réduit en schwa. Le "i" de "fic" est bref comme dans "bit". Ne dites pas "beh-neh-FISS-ance".',
    },
    {
      word: 'Euthanasia',
      phonetic: '/ˌjuːθəˈneɪziə/',
      meaning: 'Euthanasie',
      tip: 'Accent sur "NAY" : "yoo-thuh-NAY-zee-uh". Le "eu" = "you" comme dans "euphoria". Le "th" est interdentale soufflée. Le "sia" = "zee-uh". Ne dites pas "eu-ta-na-ZI-a".',
    },
    {
      word: 'Proportionality',
      phonetic: '/prəˌpɔːrʃəˈnælɪti/',
      meaning: 'Proportionnalité',
      tip: 'Accent principal sur "NAL" : "pruh-por-shuh-NAL-i-ti". Le "o" de "por" est ouvert. Le "ti" = "sh" comme dans "nation". L\'accent français serait sur la dernière syllabe — en anglais, c\'est l\'antépénultième.',
    },
  ],
}

// ─── c2-l55: Ethics Sounds — Persuasive language in moral arguments ───────────────
export const C2_L55: LessonContent = {
  vocab: [
    {
      english: 'Moral imperative',
      french: 'Impératif moral',
      phonetic: '/ˈmɒrəl ɪmˈpɛrətɪv/',
      example: 'It is a moral imperative that we address climate displacement, not merely as a policy challenge but as an obligation of corrective justice.',
      exampleTranslation: 'C\'est un impératif moral que nous traitions le déplacement climatique, non simplement comme un défi politique mais comme une obligation de justice corrective.',
    },
    {
      english: 'Complicity',
      french: 'Complicité',
      phonetic: '/kəmˈplɪsɪti/',
      example: 'The concept of complicity extends moral responsibility beyond direct agency to encompass those who, through omission or silence, enable wrongdoing.',
      exampleTranslation: 'Le concept de complicité étend la responsabilité morale au-delà de l\'agentivité directe pour englober ceux qui, par omission ou silence, permettent le mal.',
    },
    {
      english: 'Rectitude',
      french: 'Rectitude (morale)',
      phonetic: '/ˈrɛktɪtjuːd/',
      example: 'Moral rectitude, when untethered from empathy, can degenerate into a rigid legalism that loses sight of the human particularity it claims to serve.',
      exampleTranslation: 'La rectitude morale, lorsqu\'elle est détachée de l\'empathie, peut dégénérer en un légalisme rigide qui perd de vue la particularité humaine qu\'elle prétend servir.',
    },
    {
      english: 'Dignity',
      french: 'Dignité',
      phonetic: '/ˈdɪɡnɪti/',
      example: 'Kant\'s formulation of humanity as an end in itself grounds the notion of dignity in rational agency — a foundation that critics find both indispensable and insufficient.',
      exampleTranslation: 'La formulation kantienne de l\'humanité comme fin en soi fonde la notion de dignité dans l\'agentivité rationnelle — un fondement que les critiques trouvent à la fois indispensable et insuffisant.',
    },
    {
      english: 'Solidarity',
      french: 'Solidarité',
      phonetic: '/ˌsɒlɪˈdærɪti/',
      example: 'Solidarity, as a moral principle, transcends the contractual logic of reciprocity and demands that we stand with the vulnerable irrespective of what we receive in return.',
      exampleTranslation: 'La solidarité, en tant que principe moral, transcende la logique contractuelle de la réciprocité et exige que nous nous tenions aux côtés des vulnérables indépendamment de ce que nous recevons en retour.',
    },
  ],
  grammar: {
    title: 'Le langage persuasif dans l\'argumentation morale : intensificateurs, focalisation et portée',
    explanation: `L'argumentation morale persuasive en anglais repose sur trois mécanismes linguistiques fondamentaux : l'intensification, la focalisation et le contrôle de la portée. L'intensification — "It is nothing less than a moral imperative that...", "One is compelled to conclude that...", "It is inconceivable that..." — confère à l'argument une force rhétorique qui dépasse la simple assertion. La focalisation (cleft sentences, pseudo-clefts, inversion) permet d'isoler l'élément crucial : "What is at stake is not merely policy but the very possibility of moral community" (Cleft); "It is the duty of care, not the right to profit, that must prevail" (Cleft "it"); "Rarely has a principle been more thoroughly misunderstood than that of solidarity" (Inversion négative). Le contrôle de la portée — "Only under conditions of... can...", "It is precisely because... that...", "Insofar as..., so too must..." — permet de circonscrire avec précision l'extension d'un argument moral, évitant ainsi les sur-généralisations que l'adversaire pourrait exploiter. Ces trois mécanismes, combinés, confèrent au discours moral sa force persuasive sans sacrifier la rigueur conceptuelle.`,
    examples: [
      { sentence: 'What is at stake in the euthanasia debate is not merely the freedom to choose one\'s death, but the very meaning of dignity in a pluralistic society.', translation: 'Ce qui est en jeu dans le débat sur l\'euthanasie n\'est pas simplement la liberté de choisir sa mort, mais le sens même de la dignité dans une société pluraliste.', isCorrect: true },
      { sentence: 'It is nothing less than a moral imperative that we confront our complicity in structural injustice, however uncomfortable that confrontation may be.', translation: 'C\'est rien moins qu\'un impératif moral que nous affrontions notre complicité dans l\'injustice structurelle, quelque inconfortable que soit cette confrontation.', isCorrect: true },
      { sentence: 'We must confront our complicity in structural injustice because it is important.', translation: '', isCorrect: false },
      { sentence: 'Insofar as dignity is grounded in rational agency, so too must the protections afforded to it extend to all beings capable of self-governance.', translation: 'Dans la mesure où la dignité est fondée dans l\'agentivité rationnelle, les protections qui lui sont accordées doivent aussi s\'étendre à tous les êtres capables de se gouverner.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'We must confront our complicity in structural injustice because it is important.', correct: 'It is nothing less than a moral imperative that we confront our complicity in structural injustice, however uncomfortable that confrontation may be.', explanation: 'La formulation plate ("must... because it is important") manque totalement de force persuasive. L\'intensificateur "nothing less than a moral imperative" élève l\'argument au rang d\'obligation morale non négociable, et la clause concessive "however uncomfortable" anticipe la résistance psychologique — rendant l\'argument à la fois plus fort et plus honnête.' },
      { wrong: 'Dignity means we should protect all rational beings.', correct: 'Insofar as dignity is grounded in rational agency, so too must the protections afforded to it extend to all beings capable of self-governance.', explanation: 'La simplification "dignity means we should protect" est conceptuellement imprécise. La construction "Insofar as... so too must..." contrôle la portée de l\'argument avec rigueur : elle établit le fondement ("grounded in rational agency") et en déduit l\'extension précise ("extend to all beings capable of self-governance"). C\'est cette précision qui distingue le discours moral C2 de la simple opinion.' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Mbaye', role: 'A', text: 'What is at stake in the debate over AI-driven surveillance is not merely privacy, but the very possibility of moral agency in a society of perpetual monitoring.', translation: 'Ce qui est en jeu dans le débat sur la surveillance par l\'IA n\'est pas simplement la vie privée, mais la possibilité même de l\'agentivité morale dans une société de surveillance perpétuelle.' },
    { speaker: 'Dr. Thornton', role: 'B', text: 'It is nothing less than a moral imperative that we confront our complicity — for complicity it is — in the systems of exploitation that produce the very data on which these algorithms feed.', translation: 'C\'est rien moins qu\'un impératif moral que nous affrontions notre complicité — car complicité il y a — dans les systèmes d\'exploitation qui produisent les données mêmes dont ces algorithmes se nourrissent.' },
    { speaker: 'Prof. Mbaye', role: 'A', text: 'Insofar as dignity is grounded in rational agency, so too must the protections afforded to it extend to all persons subjected to algorithmic decision-making — regardless of jurisdiction.', translation: 'Dans la mesure où la dignité est fondée dans l\'agentivité rationnelle, les protections qui lui sont accordées doivent aussi s\'étendre à toutes les personnes soumises à la décision algorithmique — indépendamment de la juridiction.' },
    { speaker: 'Dr. Thornton', role: 'B', text: 'Rarely has a principle been more thoroughly misunderstood than that of solidarity — reduced, as it often is, to mere sentiment rather than recognised as a structural demand of justice.', translation: 'Rarement un principe a-t-il été plus complètement mal compris que celui de la solidarité — réduit, comme il l\'est souvent, à un simple sentiment plutôt que reconnu comme une exigence structurelle de la justice.' },
    { speaker: 'Prof. Mbaye', role: 'A', text: 'Moral rectitude, untethered from that very solidarity, becomes an exercise in self-congratulation rather than a genuine engagement with suffering.', translation: 'La rectitude morale, détachée de cette solidarité même, devient un exercice d\'auto-congratulation plutôt qu\'un engagement authentique avec la souffrance.' },
    { speaker: 'Dr. Thornton', role: 'B', text: 'Precisely — and it is the duty of care, not the right to profit, that must prevail when these principles come into conflict, as they inevitably do.', translation: 'Précisément — et c\'est le devoir de soins, non le droit au profit, qui doit prévaloir lorsque ces principes entrent en conflit, comme ils le font inévitablement.' },
    { speaker: 'Prof. Mbaye', role: 'A', text: 'In the end, the measure of a society\'s moral seriousness is not the elegance of its principles, but the willingness to bear their cost.', translation: 'En fin de compte, la mesure du sérieux moral d\'une société n\'est pas l\'élégance de ses principes, mais la volonté d\'en assumer le coût.' },
  ],
  conversationTitle: 'Surveillance, dignité et solidarité',
  pronunciation: [
    {
      word: 'Imperative',
      phonetic: '/ɪmˈpɛrətɪv/',
      meaning: 'Impératif',
      tip: 'Accent sur "PER" : "im-PER-eh-tiv". Le "i" initial se réduit en schwa. Le "e" accentué est ouvert comme dans "bed". Le "a" se réduit. Ne dites pas "im-peh-RA-tiv" avec l\'accent français sur l\'antépénultième.',
    },
    {
      word: 'Complicity',
      phonetic: '/kəmˈplɪsɪti/',
      meaning: 'Complicité',
      tip: 'Accent sur "PLIS" : "kem-PLIS-i-ti". Le "o" se réduit en schwa. Le "i" accentué est bref comme dans "bit". Le "y" final se réduit. Ne dites pas "kom-pli-SI-ti".',
    },
    {
      word: 'Rectitude',
      phonetic: '/ˈrɛktɪtjuːd/',
      meaning: 'Rectitude',
      tip: 'Accent sur la première syllabe : "REK-ti-tyood". Le "e" est ouvert comme dans "bed". Le "ude" final = "yood" comme dans "attitude". Ne dites pas "rek-ti-TYUD" avec l\'accent sur la dernière syllabe.',
    },
    {
      word: 'Solidarity',
      phonetic: '/ˌsɒlɪˈdærɪti/',
      meaning: 'Solidarité',
      tip: 'Accent principal sur "DAR" : "sol-ih-DAR-i-ti". Le "o" est ouvert comme dans "hot". Le "a" accentué est très ouvert comme dans "cat". En anglais américain, le "o" peut être plus fermé : "sah-lih-DAR-i-ti".',
    },
  ],
}
