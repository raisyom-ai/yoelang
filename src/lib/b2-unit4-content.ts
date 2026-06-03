import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// B2 UPPER INTERMEDIATE — UNIT 4: PHILOSOPHY (b2-l16 through b2-l20)
// YOELANG English Learning App for Francophone Users
// Upper-intermediate: ethics vocabulary, logical connectors, moral dilemmas, argumentation
// ════════════════════════════════════════════════════════════════════════════════

// ─── b2-l16: Ethics Vocabulary ────────────────────────────────────────────────────
export const B2_L16: LessonContent = {
  vocab: [
    { english: 'conscience', french: 'conscience', phonetic: '/ˈkɒnʃəns/', example: 'Her conscience would not allow her to stay silent about the injustice.', exampleTranslation: 'Sa conscience ne lui permettait pas de rester silencieuse face à l\'injustice.' },
    { english: 'dilemma', french: 'dilemme', phonetic: '/dɪˈlemə/', example: 'The doctor faced an ethical dilemma: save one patient or risk both.', exampleTranslation: 'Le médecin faisait face à un dilemme éthique : sauver un patient ou risquer les deux.' },
    { english: 'virtue', french: 'vertu', phonetic: '/ˈvɜːrtʃuː/', example: 'Courage is often considered the highest of all virtues.', exampleTranslation: 'Le courage est souvent considéré comme la plus haute de toutes les vertus.' },
    { english: 'accountability', french: 'responsabilité / imputabilité', phonetic: '/əˌkaʊntəˈbɪləti/', example: 'Political leaders must be held accountable for their decisions.', exampleTranslation: 'Les dirigeants politiques doivent être tenus responsables de leurs décisions.' },
    { english: 'integrity', french: 'intégrité', phonetic: '/ɪnˈteɡrəti/', example: 'A judge must demonstrate integrity above all other qualities.', exampleTranslation: 'Un juge doit faire preuve d\'intégrité avant toute autre qualité.' },
  ],
  grammar: {
    title: 'Le vocabulaire de l\'éthique : nuances et faux amis',
    explanation: 'Le vocabulaire de l\'éthique en anglais contient de nombreuses subtilités pour les francophones : (1) « Conscience » se prononce /ˈkɒnʃəns/ — le « sci » se prononce « shens », PAS « kon-syens » à la française. (2) « Dilemma » s\'écrit avec deux « m » en anglais, pas un seul comme en français (« dilemme »). La prononciation est /dɪˈlemə/ — l\'accent est sur « LEM ». (3) « Virtue » : /ˈvɜːrtʃuː/ — le « tu » final se prononce « tchou », pas « tyu ». (4) « Accountability » n\'a pas d\'équivalent direct en français. Ce n\'est pas simplement « responsabilité » (responsibility), mais l\'obligation de rendre des comptes, d\'assumer les conséquences de ses actes. On traduit par « imputabilité » ou « obligation de rendre des comptes ». (5) « Integrity » en éthique signifie « l\'adhérence à des principes moraux », pas seulement « l\'état intact » (comme dans « structural integrity »). Ne confondez pas avec « honesty » qui est plus limité.',
    examples: [
      { sentence: 'The scientist demonstrated integrity by retracting her flawed study.', translation: 'La scientifique a fait preuve d\'intégrité en retirant son étude défectueuse.', isCorrect: true },
      { sentence: 'He has a good consciousness.', translation: '', isCorrect: false },
      { sentence: 'Public accountability is essential in a democratic society.', translation: 'L\'obligation de rendre des comptes au public est essentielle dans une société démocratique.', isCorrect: true },
      { sentence: 'The dilemma forced her to choose between loyalty and justice.', translation: 'Le dilemme l\'a forcée à choisir entre la loyauté et la justice.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'He has a good consciousness.', correct: 'He has a good conscience.', explanation: '« Consciousness » = l\'état de conscience (être éveillé, aware), tandis que « conscience » = le sens moral. Ce sont deux mots différents ! On dit « a guilty conscience » (une conscience coupable), pas « a guilty consciousness ».' },
      { wrong: 'The dilema was impossible to resolve.', correct: 'The dilemma was impossible to resolve.', explanation: 'En anglais, « dilemma » s\'écrit avec deux « m » : D-I-L-E-M-M-A. C\'est une erreur d\'orthographe fréquente même chez les anglophones.' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'Have you read the case study about the whistleblower? It raises fascinating ethical questions.', translation: 'As-tu lu l\'étude de cas sur le lanceur d\'alerte ? Elle soulève des questions éthiques fascinantes.' },
    { speaker: 'Étienne', role: 'B', text: 'Yes, it\'s a classic dilemma: should she prioritise loyalty to her company or her conscience?', translation: 'Oui, c\'est un dilemme classique : devrait-elle privilégier la loyauté envers son entreprise ou sa conscience ?' },
    { speaker: 'Fatou', role: 'A', text: 'I\'d argue that integrity demands speaking out, even at personal cost. Accountability matters more than silence.', translation: 'Je dirais que l\'intégrité exige de parler, même à un coût personnel. La responsabilité compte plus que le silence.' },
    { speaker: 'Étienne', role: 'B', text: 'That\'s a virtue-based approach. But what about the consequences for her family? Is it still virtuous if others suffer?', translation: 'C\'est une approche fondée sur les vertus. Mais qu\'en est-il des conséquences pour sa famille ? Est-ce encore vertueux si d\'autres souffrent ?' },
    { speaker: 'Fatou', role: 'A', text: 'You\'re raising the tension between deontological ethics and consequentialism. There\'s no easy answer.', translation: 'Tu soulignes la tension entre l\'éthique déontologique et le conséquentialisme. Il n\'y a pas de réponse facile.' },
    { speaker: 'Étienne', role: 'B', text: 'Exactly. That\'s what makes moral dilemmas so compelling — they force us to examine the limits of our principles.', translation: 'Exactement. C\'est ce qui rend les dilemmes moraux si captivants — ils nous forcent à examiner les limites de nos principes.' },
  ],
  conversationTitle: 'Débat éthique : lanceur d\'alerte et conscience morale',
  pronunciation: [
    { word: 'Conscience', phonetic: '/ˈkɒnʃəns/', meaning: 'Conscience', tip: 'Prononcez « KON-shens » — le « sci » se prononce « shens » comme dans « science ». Ne dites JAMAIS « kon-syens » à la française. Le « n » nasal n\'existe pas en anglais.' },
    { word: 'Dilemma', phonetic: '/dɪˈlemə/', meaning: 'Dilemme', tip: 'L\'accent est sur « LEM » : « dih-LEM-uh ». Le « i » initial est court comme dans « bit ». Ne dites pas « di-lé-ma » avec l\'accent sur la première syllabe.' },
    { word: 'Virtue', phonetic: '/ˈvɜːrtʃuː/', meaning: 'Vertu', tip: 'Prononcez « VUR-tchou » — le « tu » final se prononce « tchou », pas « tyu ». L\'accent est sur « VUR ». Le « r » est léger, pas roulé.' },
    { word: 'Accountability', phonetic: '/əˌkaʊntəˈbɪləti/', meaning: 'Responsabilité / Imputabilité', tip: 'L\'accent est sur « BIL » : « uh-KAUN-tuh-BIL-uh-ti ». C\'est un mot de 6 syllabes. Le « count » se prononce « kaount » comme dans « mountain ».' },
  ],
}

// ─── b2-l17: Logical Connectors ───────────────────────────────────────────────────
export const B2_L17: LessonContent = {
  vocab: [
    { english: 'nevertheless', french: 'néanmoins / toutefois', phonetic: '/ˌnevərðəˈles/', example: 'The evidence is circumstantial; nevertheless, the jury found him guilty.', exampleTranslation: 'Les preuves sont circonstancielles ; néanmoins, le jury l\'a déclaré coupable.' },
    { english: 'furthermore', french: 'de plus / en outre', phonetic: '/ˌfɜːrðərˈmɔːr/', example: 'The policy is unjust; furthermore, it violates international law.', exampleTranslation: 'La politique est injuste ; de plus, elle viole le droit international.' },
    { english: 'consequently', french: 'par conséquent', phonetic: '/ˈkɒnsɪkwəntli/', example: 'She breached the contract; consequently, she was required to pay damages.', exampleTranslation: 'Elle a violé le contrat ; par conséquent, elle a dû payer des dommages.' },
    { english: 'whereas', french: 'tandis que / alors que', phonetic: '/weərˈæz/', example: 'Utilitarianism prioritises outcomes, whereas deontology prioritises duties.', exampleTranslation: 'L\'utilitarisme privilégie les résultats, tandis que la déontologie privilégie les devoirs.' },
    { english: 'albeit', french: 'bien que / quoique', phonetic: '/ˌɔːlˈbiːɪt/', example: 'The proposal was approved, albeit with significant reservations.', exampleTranslation: 'La proposition a été approuvée, bien qu\'avec des réserves significatives.' },
  ],
  grammar: {
    title: 'Les connecteurs logiques avancés : articuler un raisonnement',
    explanation: 'Au niveau B2, vous devez maîtriser les connecteurs logiques avancés pour structurer des arguments complexes : (1) OPPOSITION / CONCESSION : « nevertheless » (néanmoins) — introduit un contraste inattendu ; « whereas » (tandis que) — compare deux éléments opposés ; « albeit » (bien que) — concession formelle, suivi d\'un groupe nominal ou adjectif, PAS d\'une clause complète. (2) ADDITION : « furthermore » (de plus) — ajoute un argument du même sens ; « moreover » (en outre) — similaire mais plus formel. (3) CONSÉQUENCE : « consequently » (par conséquent) — résultat logique direct ; « henceforth » (désormais) — à partir de ce moment. (4) RESTRICTION : « notwithstanding » (nonobstant) — malgré quelque chose, très formel. (5) CAUSE : « inasmuch as » (en tant que / dans la mesure où) — précise la portée d\'une affirmation. ATTENTION : « albeit » s\'utilise avec un adjectif ou groupe nominal : « albeit difficult » (bien que difficile), PAS « albeit it is difficult ». Pour une clause complète, utilisez « although ».',
    examples: [
      { sentence: 'The experiment failed; nevertheless, the researchers gained valuable insights.', translation: 'L\'expérience a échoué ; néanmoins, les chercheurs ont acquis des connaissances précieuses.', isCorrect: true },
      { sentence: 'Albeit it is expensive, the treatment is effective.', translation: '', isCorrect: false },
      { sentence: 'Kant argues that duty is paramount, whereas Mill prioritises happiness.', translation: 'Kant soutient que le devoir est primordial, tandis que Mill privilégie le bonheur.', isCorrect: true },
      { sentence: 'Notwithstanding the criticism, the theory remains influential in modern ethics.', translation: 'Nonobstant les critiques, la théorie reste influente dans l\'éthique moderne.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Albeit it is expensive, the treatment is effective.', correct: 'Albeit expensive, the treatment is effective. / Although it is expensive, the treatment is effective.', explanation: '« Albeit » ne peut PAS introduire une clause complète avec sujet + verbe. On dit « albeit expensive » (bien que coûteux) ou « albeit with difficulties » (bien qu\'avec des difficultés). Pour une clause complète, utilisez « although ».' },
      { wrong: 'Whereas the policy is fair, I support it.', correct: 'Because the policy is fair, I support it. / The policy is fair, and therefore I support it.', explanation: '« Whereas » exprime un CONTRASTE, pas une cause. On l\'utilise pour comparer deux idées opposées : « X is true, whereas Y is false ». Pour exprimer une cause, utilisez « because » ou « since ».' },
    ],
  },
  conversation: [
    { speaker: 'Amara', role: 'A', text: 'I believe freedom of speech is absolute. No exceptions.', translation: 'Je crois que la liberté d\'expression est absolue. Aucune exception.' },
    { speaker: 'Jean-Luc', role: 'B', text: 'Whereas I understand your position, I cannot agree completely. Speech can cause real harm.', translation: 'Tandis que je comprends ta position, je ne peux pas être entièrement d\'accord. La parole peut causer de vrais dommages.' },
    { speaker: 'Amara', role: 'A', text: 'Nevertheless, restricting speech opens the door to censorship. Who decides what is harmful?', translation: 'Néanmoins, restreindre la parole ouvre la porte à la censure. Qui décide ce qui est nuisible ?' },
    { speaker: 'Jean-Luc', role: 'B', text: 'That\'s a fair concern. Furthermore, history shows that censorship is often abused by those in power.', translation: 'C\'est une préoccupation légitime. De plus, l\'histoire montre que la censure est souvent exploitée par ceux au pouvoir.' },
    { speaker: 'Amara', role: 'A', text: 'Exactly. Albeit imperfect, absolute free speech is the safest principle — the alternative is far worse.', translation: 'Exactement. Bien qu\'imparfaite, la liberté d\'expression absolue est le principe le plus sûr — l\'alternative est bien pire.' },
    { speaker: 'Jean-Luc', role: 'B', text: 'Consequently, we must find a balance. Notwithstanding our differences, we both value democratic principles.', translation: 'Par conséquent, nous devons trouver un équilibre. Nonobstant nos différences, nous valorisons tous deux les principes démocratiques.' },
  ],
  conversationTitle: 'Débat philosophique : liberté d\'expression et limites',
  pronunciation: [
    { word: 'Nevertheless', phonetic: '/ˌnevərðəˈles/', meaning: 'Néanmoins', tip: 'L\'accent est sur « LESS » : « neh-ver-dhu-LESS ». Le « th » est expiré (langue entre les dents). C\'est un mot de 4 syllabes prononcées rapidement.' },
    { word: 'Furthermore', phonetic: '/ˌfɜːrðərˈmɔːr/', meaning: 'De plus', tip: 'L\'accent est sur « MORE » : « fur-dhur-MORE ». Le « th » est expiré. Ne dites pas « fur-ther-more » avec 3 syllabes égales.' },
    { word: 'Consequently', phonetic: '/ˈkɒnsɪkwəntli/', meaning: 'Par conséquent', tip: 'L\'accent est sur « CON » : « KON-sih-kwent-li ». Le « qu » se prononce « kw ». Les 4 syllabes coulent rapidement vers la fin.' },
    { word: 'Albeit', phonetic: '/ˌɔːlˈbiːɪt/', meaning: 'Bien que', tip: 'Prononcez « aul-BEE-it » — l\'accent est sur « BEE ». Le « al » se prononce comme « all » (comme dans « ball »). Les 3 syllabes sont clairement séparées.' },
  ],
}

// ─── b2-l18: Moral Dilemmas ───────────────────────────────────────────────────────
export const B2_L18: LessonContent = {
  vocab: [
    { english: 'to contemplate', french: 'envisager / méditer sur', phonetic: '/ˈkɒntəmpleɪt/', example: 'She contemplated the moral implications of her decision.', exampleTranslation: 'Elle a envisagé les implications morales de sa décision.' },
    { english: 'to outweigh', french: 'l\'emporter sur / contrebalancer', phonetic: '/aʊtˈweɪ/', example: 'The benefits of the policy outweigh the risks.', exampleTranslation: 'Les bénéfices de la politique l\'emportent sur les risques.' },
    { english: 'to justify', french: 'justifier', phonetic: '/ˈdʒʌstɪfaɪ/', example: 'How can one justify lying to protect a friend?', exampleTranslation: 'Comment peut-on justifier le fait de mentir pour protéger un ami ?' },
    { english: 'premise', french: 'prémisse', phonetic: '/ˈpremɪs/', example: 'The argument rests on the premise that all humans are equal.', exampleTranslation: 'L\'argument repose sur la prémisse que tous les humains sont égaux.' },
    { english: 'compromise', french: 'compromis / compromettre', phonetic: '/ˈkɒmprəmaɪz/', example: 'Is it possible to reach a compromise without sacrificing one\'s values?', exampleTranslation: 'Est-il possible de parvenir à un compromis sans sacrifier ses valeurs ?' },
  ],
  grammar: {
    title: 'Exprimer l\'opposition et la concession dans un débat moral',
    explanation: 'Dans un débat moral, vous devez pouvoir articuler opposition et concession avec précision : (1) CONCESSION + OPPOSITION : « While I agree that X is true, I would argue that Y is more important. » / « Admittedly, X has merit; however, Y cannot be ignored. » / « It is true that X, yet one must also consider Y. » (2) CONCESSION FORTE : « Granted, freedom is essential — that said, it is not without limits. » / « I concede that X is valid; be that as it may, Y remains a concern. » (3) OPPOSITION DIRECTE : « X is often claimed, whereas the evidence suggests otherwise. » / « Far from being X, the situation is actually Y. » (4) NUANCE : « The issue is not simply X versus Y, but rather a question of degree. » / « One could argue X; nevertheless, Y deserves equal consideration. » Ces structures sont essentielles au niveau B2 pour éviter les arguments simplistes et montrer une pensée nuancée.',
    examples: [
      { sentence: 'While I concede that utilitarianism has merit, I would argue that it fails to protect individual rights.', translation: 'Bien que je concède que l\'utilitarisme ait du mérite, je soutiendrais qu\'il ne protège pas les droits individuels.', isCorrect: true },
      { sentence: 'Despite of the risks, we must act now.', translation: '', isCorrect: false },
      { sentence: 'Admittedly, the premise is flawed; that said, the conclusion still holds.', translation: 'Il est vrai que la prémisse est défectueuse ; cela dit, la conclusion reste valable.', isCorrect: true },
      { sentence: 'The benefits far outweigh the costs, yet we must not ignore the ethical implications.', translation: 'Les bénéfices l\'emportent largement sur les coûts, pourtant nous ne devons pas ignorer les implications éthiques.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Despite of the risks, we must act now.', correct: 'Despite the risks, we must act now. / In spite of the risks, we must act now.', explanation: 'On dit « despite » + nom OU « in spite of » + nom, mais JAMAIS « despite of ». C\'est l\'une des erreurs les plus fréquentes chez les francophones (calque de « en dépit de »).' },
      { wrong: 'Even I agree with you, I still have concerns.', correct: 'Even though I agree with you, I still have concerns. / Even if I agree with you, I still have concerns.', explanation: '« Even » seul ne peut pas introduire une clause de concession. Il faut « even though » (même si — fait réel) ou « even if » (même si — hypothétique). « Even » seul signifie « même ».' },
    ],
  },
  conversation: [
    { speaker: 'Kofi', role: 'A', text: 'Consider the trolley problem: should you sacrifice one person to save five?', translation: 'Considérez le problème du tramway : devrait-on sacrifier une personne pour en sauver cinq ?' },
    { speaker: 'Nadia', role: 'B', text: 'From a utilitarian perspective, yes — the greater good outweighs the individual loss. But I find that reasoning deeply troubling.', translation: 'D\'un point de vue utilitariste, oui — le bien commun l\'emporte sur la perte individuelle. Mais je trouve ce raisonnement profondément troublant.' },
    { speaker: 'Kofi', role: 'A', text: 'I understand. While I concede that the numbers matter, the premise that we can treat human lives as quantities is problematic.', translation: 'Je comprends. Bien que je concède que les chiffres comptent, la prémisse selon laquelle on peut traiter les vies humaines comme des quantités est problématique.' },
    { speaker: 'Nadia', role: 'B', text: 'Exactly. Admittedly, refusing to act also has consequences — five people die instead of one. That said, actively causing a death is morally distinct from allowing one.', translation: 'Exactement. Il est vrai que refuser d\'agir a aussi des conséquences — cinq personnes meurent au lieu d\'une. Cela dit, causer activement une mort est moralement distinct d\'en permettre une.' },
    { speaker: 'Kofi', role: 'A', text: 'That\'s the distinction between doing and allowing. Can any compromise exist between these positions?', translation: 'C\'est la distinction entre faire et permettre. Un compromis peut-il exister entre ces positions ?' },
    { speaker: 'Nadia', role: 'B', text: 'Perhaps not. Some moral questions resist neat resolutions — and that, I think, is what makes philosophy endlessly compelling.', translation: 'Peut-être pas. Certaines questions morales résistent aux résolutions nettes — et c\'est, je pense, ce qui rend la philosophie infiniment captivante.' },
    ],
  conversationTitle: 'Le dilemme du tramway : utilitarisme vs déontologie',
  pronunciation: [
    { word: 'Contemplate', phonetic: '/ˈkɒntəmpleɪt/', meaning: 'Envisager / Méditer', tip: 'L\'accent est sur « TEM » : « KON-tem-plate ». Ne prononcez PAS « kon-tam-pleut » à la française. La terminaison « -ate » se dit « eɪt » comme dans « late ».' },
    { word: 'Outweigh', phonetic: '/aʊtˈweɪ/', meaning: 'L\'emporter sur', tip: 'Prononcez « out-WEIGH » — l\'accent est sur « WEIGH ». Le « ou » de « out » = « aou » comme dans « cloud ». Le « igh » = « éï ».' },
    { word: 'Justify', phonetic: '/ˈdʒʌstɪfaɪ/', meaning: 'Justifier', tip: 'L\'accent est sur « JUS » : « JUS-ti-fai ». Le « j » se prononce « dj ». Le « u » est ouvert comme dans « just ». La finale « -fy » = « fai ».' },
    { word: 'Premise', phonetic: '/ˈpremɪs/', meaning: 'Prémisse', tip: 'Prononcez « PREM-iss » — l\'accent est sur « PREM ». Ne dites pas « pre-meez » à la française. Le « s » final est doux comme dans « this ».' },
  ],
}

// ─── b2-l19: Argumentation ────────────────────────────────────────────────────────
export const B2_L19: LessonContent = {
  vocab: [
    { english: 'coherent', french: 'cohérent', phonetic: '/koʊˈhɪərənt/', example: 'A coherent argument must follow logically from its premises.', exampleTranslation: 'Un argument cohérent doit découler logiquement de ses prémisses.' },
    { english: 'fallacy', french: 'sophisme / erreur de raisonnement', phonetic: '/ˈfæləsi/', example: 'The ad hominem fallacy attacks the person instead of the argument.', exampleTranslation: 'Le sophisme ad hominem attaque la personne au lieu de l\'argument.' },
    { english: 'to refute', french: 'réfuter', phonetic: '/rɪˈfjuːt/', example: 'She refuted his claims with compelling evidence.', exampleTranslation: 'Elle a réfuté ses affirmations avec des preuves convaincantes.' },
    { english: 'inherent', french: 'inhérent / intrinsèque', phonetic: '/ɪnˈhɪərənt/', example: 'There is an inherent tension between freedom and security.', exampleTranslation: 'Il y a une tension inhérente entre la liberté et la sécurité.' },
    { english: 'to entail', french: 'impliquer / entraîner', phonetic: '/ɪnˈteɪl/', example: 'Accepting that premise entails rejecting the opposite conclusion.', exampleTranslation: 'Accepter cette prémisse implique de rejeter la conclusion opposée.' },
  ],
  grammar: {
    title: 'Le registre formel dans l\'argumentation philosophique',
    explanation: 'L\'argumentation philosophique exige un registre formel avec des structures spécifiques : (1) PRÉSENTER UN ARGUMENT : « It can be argued that... » (On peut soutenir que...) / « One could contend that... » (On pourrait prétendre que...) / « A compelling case can be made for... » (Un argument convaincant peut être fait en faveur de...). (2) OBJECTER : « However, this view overlooks... » (Cependant, cette vue néglige...) / « This argument is flawed insofar as... » (Cet argument est défectueux dans la mesure où...) / « The weakness of this position lies in... » (La faiblesse de cette position réside dans...). (3) RÉFUTER : « This can be refuted by... » (Ceci peut être réfuté par...) / « The counterargument demonstrates that... » (Le contre-argument démontre que...). (4) CONCLURE : « It follows that... » (Il s\'ensuit que...) / « Consequently, one must conclude that... » (Par conséquent, on doit conclure que...). (5) NUANCER : « Inasmuch as X is true, it is also the case that Y... » (Dans la mesure où X est vrai, il est aussi le cas que Y...). ÉVITEZ le registre informel dans un essai philosophique : ne dites PAS « I think X is wrong » mais plutôt « The argument for X is unconvincing ».',
    examples: [
      { sentence: 'It can be argued that moral relativism undermines the possibility of universal human rights.', translation: 'On peut soutenir que le relativisme moral mine la possibilité de droits humains universels.', isCorrect: true },
      { sentence: 'I think that argument is stupid.', translation: '', isCorrect: false },
      { sentence: 'Inasmuch as freedom is an inherent right, it entails the responsibility to respect the freedom of others.', translation: 'Dans la mesure où la liberté est un droit inhérent, elle implique la responsabilité de respecter la liberté d\'autrui.', isCorrect: true },
      { sentence: 'The fallacy in this reasoning lies in equating legality with morality.', translation: 'Le sophisme dans ce raisonnement réside dans l\'assimilation de la légalité à la moralité.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I think that argument is stupid.', correct: 'That argument is fundamentally flawed. / The reasoning in that argument is unconvincing.', explanation: 'Dans un contexte philosophique formel, évitez les jugements personnels et le vocabulaire informel (« stupid », « wrong », « I think »). Utilisez plutôt des formulations impersonnelles et précises : « flawed » (défectueux), « unconvincing » (peu convaincant), « problematic » (problématique).' },
      { wrong: 'This refutes that free will exists.', correct: 'This argument refutes the claim that free will exists. / This can be taken as a refutation of free will.', explanation: '« Refute » est un verbe transitif — il faut un objet : on réfute QUELQUE CHOSE (a claim, an argument, a position). De plus, « refute » signifie « prouver la fausseté », pas simplement « contredire ».' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Mbeki', role: 'A', text: 'The claim that free will is an illusion can be argued on neuroscientific grounds. Our decisions are predetermined by brain activity.', translation: 'On peut soutenir que le libre arbitre est une illusion sur des bases neuroscientifiques. Nos décisions sont prédéterminées par l\'activité cérébrale.' },
    { speaker: 'Claire', role: 'B', text: 'However, that view overlooks the inherent complexity of consciousness. Neuroscience shows correlations, but correlation does not entail causation.', translation: 'Cependant, cette vue néglige la complexité inhérente de la conscience. La neuroscience montre des corrélations, mais corrélation n\'implique pas causalité.' },
    { speaker: 'Dr. Mbeki', role: 'A', text: 'Admittedly, the evidence is not conclusive. Nevertheless, a coherent determinist position does not require absolute proof — only that the burden of proof shifts to libertarians.', translation: 'Il est vrai que les preuves ne sont pas concluantes. Néanmoins, une position déterministe cohérente n\'exige pas de preuve absolue — seulement que le fardeau de la preuve passe aux libertariens.' },
    { speaker: 'Claire', role: 'B', text: 'That\'s a fallacy of shifting the burden. The determinist must refute the subjective experience of choice — which is inherently first-person and resistant to third-person analysis.', translation: 'C\'est un sophisme de déplacement du fardeau. Le déterministe doit réfuter l\'expérience subjective du choix — qui est inhéremment à la première personne et résistante à l\'analyse à la troisième personne.' },
    { speaker: 'Dr. Mbeki', role: 'A', text: 'A compelling point. Inasmuch as subjective experience is real, it may not be reliable as evidence — illusions are also experienced as real.', translation: 'Un argument convaincant. Dans la mesure où l\'expérience subjective est réelle, elle peut ne pas être fiable comme preuve — les illusions sont aussi vécues comme réelles.' },
    { speaker: 'Claire', role: 'B', text: 'Then the question becomes: can a coherent philosophy account for both the experience of freedom and its possible illusory nature? That, perhaps, is the true dilemma.', translation: 'Alors la question devient : une philosophie cohérente peut-elle rendre compte à la fois de l\'expérience de la liberté et de sa nature possiblement illusoire ? C\'est peut-être là le véritable dilemme.' },
  ],
  conversationTitle: 'Séminaire de philosophie : libre arbitre et déterminisme',
  pronunciation: [
    { word: 'Coherent', phonetic: '/koʊˈhɪərənt/', meaning: 'Cohérent', tip: 'L\'accent est sur « HIER » : « ko-HEER-ent ». Ne dites pas « ko-é-ran » à la française. Le « h » est aspiré, le « ent » final est prononcé, pas muet comme en français.' },
    { word: 'Fallacy', phonetic: '/ˈfæləsi/', meaning: 'Sophisme', tip: 'Prononcez « FAL-uh-see » — l\'accent est sur « FAL ». Le « a » est ouvert comme dans « cat ». Ne dites pas « fa-la-cie » à la française.' },
    { word: 'Refute', phonetic: '/rɪˈfjuːt/', meaning: 'Réfuter', tip: 'Prononcez « rih-FYOOT » — l\'accent est sur « FYOOT ». Le « u » est long comme dans « flute ». Ne dites pas « re-fyut » avec un « u » court.' },
    { word: 'Inherent', phonetic: '/ɪnˈhɪərənt/', meaning: 'Inhérent', tip: 'L\'accent est sur « HIER » : « in-HEER-ent ». Le « h » est aspiré ! Contrairement au français où « inhérent » a un « h » muet, en anglais il doit être prononcé.' },
  ],
}

// ─── b2-l20: Philosophy Sounds ────────────────────────────────────────────────────
export const B2_L20: LessonContent = {
  vocab: [
    { english: 'epistemology', french: 'épistémologie', phonetic: '/ɪˌpɪstəˈmɒlədʒi/', example: 'Epistemology asks how we can distinguish knowledge from mere belief.', exampleTranslation: 'L\'épistémologie demande comment nous pouvons distinguer la connaissance de la simple croyance.' },
    { english: 'metaphysics', french: 'métaphysique', phonetic: '/ˌmetəˈfɪzɪks/', example: 'Metaphysics explores the fundamental nature of reality and existence.', exampleTranslation: 'La métaphysique explore la nature fondamentale de la réalité et de l\'existence.' },
    { english: 'sovereignty', french: 'souveraineté', phonetic: '/ˈsɒvrənti/', example: 'The question of sovereignty lies at the heart of political philosophy.', exampleTranslation: 'La question de la souveraineté se trouve au cœur de la philosophie politique.' },
    { english: 'autonomy', french: 'autonomie', phonetic: '/ɔːˈtɒnəmi/', example: 'Respecting patient autonomy is a cornerstone of medical ethics.', exampleTranslation: 'Respecter l\'autonomie du patient est une pierre angulaire de l\'éthique médicale.' },
    { english: 'dogma', french: 'dogme', phonetic: '/ˈdɒɡmə/', example: 'Philosophy challenges dogma by demanding rational justification.', exampleTranslation: 'La philosophie conteste le dogme en exigeant une justification rationnelle.' },
  ],
  grammar: {
    title: 'Mots philosophiques : prononciation et orthographe pièges',
    explanation: 'Les termes philosophiques anglais sont souvent des emprunts au grec ou au latin, et leur prononciation diffère radicalement du français : (1) « Epistemology » : /ɪˌpɪstəˈmɒlədʒi/ — l\'accent est sur « MOL », pas sur « pis » comme en français. Le « e » initial est un schwa court. (2) « Metaphysics » : /ˌmetəˈfɪzɪks/ — l\'accent est sur « FIZ », le « y » se prononce « ih » (pas « i » français). La terminaison « -ics » se prononce « iks », pas « ik ». (3) « Sovereignty » : /ˈsɒvrənti/ — le « eig » est SILENT ! On prononce « SOV-rin-ti », pas « sov-rein-ti ». C\'est l\'un des mots les plus piégés pour les francophones. (4) « Autonomy » : /ɔːˈtɒnəmi/ — l\'accent est sur « TON », pas sur « au » comme en français. (5) « Dogma » : /ˈdɒɡmə/ — le « g » est dur comme dans « go », pas doux comme en français « dog-me ». Règle générale : les mots savants partagés entre l\'anglais et le français ont presque toujours l\'accent sur une syllabe différente.',
    examples: [
      { sentence: 'Epistemology examines the nature and limits of human knowledge.', translation: 'L\'épistémologie examine la nature et les limites de la connaissance humaine.', isCorrect: true },
      { sentence: 'The sovereinty of the nation must be respected.', translation: '', isCorrect: false },
      { sentence: 'Autonomy in decision-making is a fundamental ethical principle.', translation: 'L\'autonomie dans la prise de décision est un principe éthique fondamental.', isCorrect: true },
      { sentence: 'Rejecting dogma does not mean rejecting all belief systems.', translation: 'Rejeter le dogme ne signifie pas rejeter tous les systèmes de croyance.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The sovereinty of the nation must be respected.', correct: 'The sovereignty of the nation must be respected.', explanation: 'L\'orthographe correcte est « sovereignty » (S-O-V-E-R-E-I-G-N-T-Y). Le « eig » est silencieux à la prononciation : « SOV-rin-ti ». Ne confondez pas avec « sovereign » /ˈsɒvrɪn/ où le « eig » est aussi silencieux.' },
      { wrong: 'The epistemology is the study of knowledge.', correct: 'Epistemology is the study of knowledge.', explanation: 'Les disciplines académiques et philosophiques s\'utilisent SANS article quand on parle de manière générale : « Epistemology examines... », pas « The epistemology examines... ». Comme en français : « L\'épistémologie étudie... » mais en anglais, pas d\'article.' },
    ],
  },
  conversation: [
    { speaker: 'Youssef', role: 'A', text: 'I\'ve been reading about epistemology. It fascinates me how we justify calling something « knowledge » rather than mere opinion.', translation: 'J\'ai lu sur l\'épistémologie. Cela me fascine comment nous justifions d\'appeler quelque chose « connaissance » plutôt que simple opinion.' },
    { speaker: 'Dr. Petrov', role: 'B', text: 'That\'s the central question. Plato defined knowledge as justified true belief — but Gettier problems showed that definition is insufficient.', translation: 'C\'est la question centrale. Platon a défini la connaissance comme une croyance vraie justifiée — mais les problèmes de Gettier ont montré que cette définition est insuffisante.' },
    { speaker: 'Youssef', role: 'A', text: 'So does that mean we can never be certain of anything? Metaphysics and epistemology seem to circle endlessly.', translation: 'Donc cela signifie-t-il que nous ne pouvons jamais être certains de rien ? La métaphysique et l\'épistémologie semblent tourner en rond indéfiniment.' },
    { speaker: 'Dr. Petrov', role: 'B', text: 'Not necessarily. Autonomy of thought — the freedom to question dogma — is itself a form of knowledge. It\'s what philosophy protects.', translation: 'Pas nécessairement. L\'autonomie de pensée — la liberté de questionner le dogme — est elle-même une forme de connaissance. C\'est ce que la philosophie protège.' },
    { speaker: 'Youssef', role: 'A', text: 'Like sovereignty of the mind? The right to govern one\'s own beliefs?', translation: 'Comme la souveraineté de l\'esprit ? Le droit de gouverner ses propres croyances ?' },
    { speaker: 'Dr. Petrov', role: 'B', text: 'Precisely. And that sovereignty, unlike political sovereignty, cannot be taken away — only surrendered. The moment we stop questioning, we lose it.', translation: 'Précisément. Et cette souveraineté, contrairement à la souveraineté politique, ne peut pas être enlevée — seulement abandonnée. Le moment où nous cessons de questionner, nous la perdons.' },
  ],
  conversationTitle: 'De l\'épistémologie à la souveraineté de la pensée',
  pronunciation: [
    { word: 'Epistemology', phonetic: '/ɪˌpɪstəˈmɒlədʒi/', meaning: 'Épistémologie', tip: 'L\'accent est sur « MOL » : « ih-pis-tuh-MOL-uh-dji ». C\'est 6 syllabes ! Le « e » initial est un schwa. Ne dites PAS « é-pis-té-mo-lo-jie » à la française.' },
    { word: 'Metaphysics', phonetic: '/ˌmetəˈfɪzɪks/', meaning: 'Métaphysique', tip: 'L\'accent est sur « FIZ » : « me-tuh-FIZ-iks ». Le « y » se prononce « ih » (pas « i » français). La terminaison « -ics » = « iks » avec un « k » audible.' },
    { word: 'Sovereignty', phonetic: '/ˈsɒvrənti/', meaning: 'Souveraineté', tip: 'PIÈGE MAJEUR : le « eig » est MUET ! Prononcez « SOV-rən-ti », en seulement 3 syllabes. Ne dites JAMAIS « so-vrein-ti » — c\'est la faute la plus courante des francophones sur ce mot.' },
    { word: 'Autonomy', phonetic: '/ɔːˈtɒnəmi/', meaning: 'Autonomie', tip: 'L\'accent est sur « TON » : « aw-TON-uh-mi ». Le premier « o » est long comme dans « law ». Ne mettez PAS l\'accent sur « au » comme en français. Les 4 syllabes coulent naturellement.' },
  ],
}
