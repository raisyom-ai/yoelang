import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C1 ADVANCED — UNIT 12: SCIENTIFIC DISCOURSE (c1-l56 through c1-l60)
// YOELANG English Learning App for Francophone Users
// Advanced: scientific terminology, hypothesis language, research presentation, paradigm shifts
// ════════════════════════════════════════════════════════════════════════════════

// ─── c1-l56: Science Vocabulary ─────────────────────────────────────────────────
export const C1_L56: LessonContent = {
  vocab: [
    { english: 'axiomatic', french: 'axiomatique', phonetic: '/ˌæksiəˈmætɪkl/', example: 'The principle is axiomatic in modern physics.', exampleTranslation: 'Le principe est axiomatique en physique moderne.' },
    { english: 'theoretical', french: 'théorique', phonetic: '/ˌθɪəˈretɪkl/', example: 'The theoretical framework draws on both constructivist and positivist traditions.', exampleTranslation: 'Le cadre théorique s\'appuie sur les traditions constructiviste et positiviste.' },
    { english: 'heuristic', french: 'heuristique', phonetic: '/hjʊˈrɪstɪk/', example: 'This heuristic approach simplifies the calculation.', exampleTranslation: 'Cette approche heuristique simplifie le calcul.' },
    { english: 'postulate', french: 'postulat', phonetic: '/ˈpɒstjʊlət/', example: 'The postulate remains unproven but widely accepted.', exampleTranslation: 'Le postulat reste non prouvé mais largement accepté.' },
    { english: 'epistemology', french: 'épistémologie', phonetic: '/ɪˌpɪstɪˈmɒlədʒi/', example: 'The epistemology of science demands rigorous proof.', exampleTranslation: 'L\'épistémologie de la science exige des preuves rigoureuses.' },
  ],
  grammar: {
    title: 'Le vocabulaire scientifique avancé : axiomes, heuristiques et épistémologie',
    explanation: 'Le discours scientifique anglais exige une précision terminologique rigoureuse : (1) « Axiomatic » = qui va de soi, considéré comme évident sans démonstration : « It is axiomatic that... » = il va de soi que... Un axiome est un point de départ non démontré mais accepté. (2) « Heuristic » ≠ « algorithmic » : une approche heuristic est pratique, approximative, qui permet de résoudre un problème même sans garantie de solution optimale ; une approche algorithmique est systématique et garantie. Les heuristiques sont utiles quand les algorithmes sont trop coûteux. (3) « Postulate » ≠ « hypothesis » : un postulate est une proposition acceptée sans démonstration comme fondement d\'un raisonnement ; une hypothesis est une conjecture testable. Le postulate est le point de départ ; l\'hypothesis est ce qu\'on cherche à tester. (4) « Epistemology » = l\'étude de la connaissance elle-même : comment sait-on ce que l\'on sait ? L\'épistémologie diffère de la methodology en ce qu\'elle questionne les fondements de la connaissance, tandis que la methodology concerne les méthodes de recherche. (5) « Data » est techniquement un pluriel en latin (singulier : datum), donc « the data are » en style scientifique formel, bien que « the data is » soit courant à l\'oral.',
    examples: [
      { sentence: 'It is axiomatic in this field that rigorous proof precedes acceptance.', translation: 'Il est axiomatique dans ce domaine qu\'une preuve rigoureuse précède l\'acceptation.', isCorrect: true },
      { sentence: 'The epistemology we used was a semi-structured interview.', translation: '', isCorrect: false },
      { sentence: 'A heuristic approach can yield practical solutions even when an exact algorithm is unavailable.', translation: 'Une approche heuristique peut fournir des solutions pratiques même lorsqu\'un algorithme exact n\'est pas disponible.', isCorrect: true },
      { sentence: 'The postulate serves as the foundation upon which the entire theory rests.', translation: 'Le postulat sert de fondation sur laquelle repose toute la théorie.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The epistemology we used was a semi-structured interview.', correct: 'The method we used was a semi-structured interview; our epistemology was constructivist.', explanation: '« Epistemology » est l\'étude des fondements de la connaissance, pas une technique de recherche. Un entretien semi-directif est une « method ». L\'épistémologie concerne les questions fondamentales de la connaissance, pas les outils de collecte de données.' },
      { wrong: 'It\'s just a theory.', correct: 'It\'s a well-established theory with substantial evidence support.', explanation: 'En anglais scientifique, « theory » n\'est pas une simple spéculation (contrairement à l\'usage courant et au faux ami français). Une « scientific theory » est un cadre explicatif robuste, validé par des preuves. Dire « just a theory » est trompeur dans un contexte scientifique.' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Lambert', role: 'A', text: 'We need to reconsider the epistemology underlying our work. The axiomatic principles we\'ve taken for granted may not hold in this new context.', translation: 'Nous devons reconsidérer l\'épistémologie sous-jacente à notre travail. Les principes axiomatiques que nous avons tenus pour acquis pourraient ne pas tenir dans ce nouveau contexte.' },
    { speaker: 'Prof. Nakamura', role: 'B', text: 'That\'s a bold claim. Are you suggesting our heuristic approaches have been leading us astray?', translation: 'C\'est une affirmation audacieuse. Suggérez-vous que nos approches heuristiques nous ont égarés ?' },
    { speaker: 'Dr. Lambert', role: 'A', text: 'Not astray, but perhaps insufficient. If the postulate itself is flawed, no amount of methodological rigour will save the conclusions.', translation: 'Pas égarés, mais peut-être insuffisantes. Si le postulat lui-même est défectueux, aucune rigueur méthodologique ne sauvera les conclusions.' },
    { speaker: 'Prof. Nakamura', role: 'B', text: 'Then we need to examine the epistemology more carefully. What assumptions have we left unchallenged?', translation: 'Alors nous devons examiner l\'épistémologie plus attentivement. Quelles hypothèses avons-nous laissées inchangées ?' },
    { speaker: 'Dr. Lambert', role: 'A', text: 'Precisely. The axiomatic foundations must be re-examined before we can trust any heuristic conclusions drawn from them.', translation: 'Précisément. Les fondations axiomatiques doivent être réexaminées avant que nous puissions faire confiance à toute conclusion heuristique tirée d\'elles.' },
    { speaker: 'Prof. Nakamura', role: 'B', text: 'Agreed. Let\'s formulate a new research programme that questions the postulate from the ground up.', translation: 'D\'accord. Formulons un nouveau programme de recherche qui remet en question le postulat depuis la base.' },
  ],
  conversationTitle: 'Fondements axiomatiques et épistémologie : reconsidérer les postulats',
  pronunciation: [
    { word: 'Axiomatic', phonetic: '/ˌæksiəˈmætɪkl/', meaning: 'Axiomatique', tip: 'L\'accent est sur « MAT » : « ak-see-uh-MAT-ik-ul ». Le « x » se prononce « ks ». Le « o » est réduit en schwa. Ne dites pas « a-ksi-o-ma-tik » à la française.' },
    { word: 'Heuristic', phonetic: '/hjʊˈrɪstɪk/', meaning: 'Heuristique', tip: 'L\'accent est sur « RIS » : « hyoo-RIS-tik ». Le « heu » initial se prononce « hyoo » comme dans « huge ». Ne dites pas « eu-ris-tik » à la française.' },
    { word: 'Postulate', phonetic: '/ˈpɒstjʊlət/', meaning: 'Postulat', tip: 'Comme nom, l\'accent est sur « POS » : « POS-choo-lut ». Le « tu » se prononce « choo ». Ne confondez pas avec le verbe « to postulate » (/ˈpɒstjuleɪt/) dont l\'accent est aussi sur « POS » mais dont la dernière syllabe se prononce « layt ».' },
    { word: 'Epistemology', phonetic: '/ɪˌpɪstɪˈmɒlədʒi/', meaning: 'Épistémologie', tip: 'L\'accent est sur « MOL » : « ih-pis-teh-MOL-uh-jee ». Le « e » initial est réduit. Le « p » est prononcé. Ne supprimez pas le « s » après « pi ».' },
  ],
}

// ─── c1-l57: Hypothesis Language ──────────────────────────────────────────────────
export const C1_L57: LessonContent = {
  vocab: [
    { english: 'to postulate', french: 'postuler / poser comme hypothèse', phonetic: '/ˈpɒstjuleɪt/', example: 'It is postulated that the observed effect is mediated by neurotransmitter activity.', exampleTranslation: 'Il est postulé que l\'effet observé est médié par l\'activité des neurotransmetteurs.' },
    { english: 'to be consistent with', french: 'être cohérent avec / être compatible avec', phonetic: '/biː kənˈsɪstnt wɪð/', example: 'The results are consistent with previous findings on working memory decline.', exampleTranslation: 'Les résultats sont cohérents avec les résultats précédents sur le déclin de la mémoire de travail.' },
    { english: 'to lend support to', french: 'apporter un soutien à / étayer', phonetic: '/lend səˈpɔːrt tuː/', example: 'These findings lend support to the hypothesis that environmental factors play a role.', exampleTranslation: 'Ces résultats étayent l\'hypothèse selon laquelle les facteurs environnementaux jouent un rôle.' },
    { english: 'to infer', french: 'déduire / inférer', phonetic: '/ɪnˈfɜːr/', example: 'From the available data, one may infer that the relationship is causal.', exampleTranslation: 'À partir des données disponibles, on peut déduire que la relation est causale.' },
    { english: 'to corroborate', french: 'corroborer / confirmer', phonetic: '/kəˈrɒbəreɪt/', example: 'Independent analyses corroborated the original research team\'s conclusions.', exampleTranslation: 'Des analyses indépendantes ont corroboré les conclusions de l\'équipe de recherche initiale.' },
  ],
  grammar: {
    title: 'Le langage des hypothèses scientifiques : hedging avancé et formulation des claims',
    explanation: 'Le discours scientifique anglais se caractérise par un hedging systématique — l\'art de formuler des affirmations avec prudence : (1) « It is postulated that... » : formule impersonnelle présentant une hypothèse sans l\'affirmer. Autres formules : « It has been proposed that... », « It is hypothesised that... ». On évite « We think that... » (trop informel) et « It is true that... » (trop catégorique). (2) « The data are consistent with... » ≠ « The data prove... » : « consistent with » = compatible avec (ne prouve pas) ; « lend support to » = apporte un soutien à (plus fort que « consistent with » mais moins que « confirm »). La hiérarchie : suggest → indicate → are consistent with → lend support to → provide evidence for → confirm. (3) L\'inférence vs. l\'implication : « infer » = déduire (du lecteur/chercheur) ; « imply » = sous-entendre (des données). « We infer from the data » ≠ « The data imply ». (4) « Corroborate » ≠ « confirm » : corroborer = renforcer par des preuves indépendantes ; confirm = établir de manière définitive. En science, on préfère « corroborate » car il laisse ouvert la possibilité de réfutation future. (5) Le passif scientifique : « It was observed that... » / « It can be seen from Table 3 that... » — le passif dépersonnalise et donne une aura d\'objectivité.',
    examples: [
      { sentence: 'It is postulated that the mechanism involves oxidative stress pathways.', translation: 'Il est postulé que le mécanisme implique les voies du stress oxydatif.', isCorrect: true },
      { sentence: 'These findings lend support to the theoretical model, though further replication is warranted.', translation: 'Ces résultats étayent le modèle théorique, bien qu\'une réplication supplémentaire soit justifiée.', isCorrect: true },
      { sentence: 'The data prove that the hypothesis is correct.', translation: '', isCorrect: false },
      { sentence: 'One may infer from the longitudinal data that the effect persists over time.', translation: 'On peut déduire des données longitudinales que l\'effet persiste dans le temps.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The data prove that the hypothesis is correct.', correct: 'The data are consistent with the hypothesis, though they do not constitute proof.', explanation: 'En anglais scientifique, on n\'utilise JAMAIS « prove » pour des résultats empiriques. Les données ne « prouvent » pas — elles « sont cohérentes avec » (consistent with), « suggèrent » (suggest), « étayent » (lend support to). « Prove » implique une certitude absolue que la méthode scientifique ne revendique pas.' },
      { wrong: 'We infer that the results show a correlation.', correct: 'The results imply a correlation, from which we may infer a potential relationship.', explanation: 'Confusion entre « infer » et « imply » : les données « imply » (sous-entendent), le chercheur « infers » (déduit). « We infer » doit être suivi de la conclusion qu\'on tire, pas d\'une simple observation. De plus, « the results show » est un constat, pas une inférence.' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Achebe', role: 'A', text: 'Let me summarise our key finding. It is postulated that the observed variance in cognitive performance is mediated by sleep quality.', translation: 'Permettez-moi de résumer notre résultat principal. Il est postulé que la variance observée dans la performance cognitive est médiée par la qualité du sommeil.' },
    { speaker: 'Reviewer Dr. Petrov', role: 'B', text: 'Would it not be more precise to say the data are consistent with a mediating role, rather than asserting it as postulated fact?', translation: 'Ne serait-il pas plus précis de dire que les données sont cohérentes avec un rôle médiateur, plutôt que de l\'affirmer comme un fait postulé ?' },
    { speaker: 'Dr. Achebe', role: 'A', text: 'Fair point. The data lend support to the mediation hypothesis, but I acknowledge that alternative explanations cannot be ruled out at this stage.', translation: 'Juste. Les données étayent l\'hypothèse de médiation, mais je reconnais que des explications alternatives ne peuvent être écartées à ce stade.' },
    { speaker: 'Reviewer Dr. Petrov', role: 'B', text: 'Have independent studies corroborated these findings?', translation: 'Des études indépendantes ont-elles corroboré ces résultats ?' },
    { speaker: 'Dr. Achebe', role: 'A', text: 'Two replication studies have produced results consistent with ours. From these, one may infer that the effect is robust, though not yet definitive.', translation: 'Deux études de réplication ont produit des résultats cohérents avec les nôtres. De celles-ci, on peut déduire que l\'effet est robuste, bien que pas encore définitif.' },
    { speaker: 'Reviewer Dr. Petrov', role: 'B', text: 'That\'s a carefully hedged claim — exactly the kind of precision the field needs. I\'d recommend a minor revision to reflect that nuance in the abstract.', translation: 'C\'est une affirmation formulée avec précaution — exactement le genre de précision dont le domaine a besoin. Je recommanderais une révision mineure pour refléter cette nuance dans le résumé.' },
  ],
  conversationTitle: 'Évaluation par les pairs : hedging et formulation des claims scientifiques',
  pronunciation: [
    { word: 'Postulate', phonetic: '/ˈpɒstjuleɪt/', meaning: 'Postuler', tip: 'L\'accent est sur « POS » : « POS-chuh-layt ». Le « tu » se prononce « chuh » comme dans « posture ». En anglais américain, on entend aussi /ˈpɑːstʃəleɪt/.' },
    { word: 'Corroborate', phonetic: '/kəˈrɒbəreɪt/', meaning: 'Corroborer', tip: 'L\'accent est sur « ROB » : « kuh-ROB-uh-rayt ». Le « co » initial est réduit en schwa. Ne dites pas « ko-ro-bo-RATE » à la française.' },
    { word: 'Infer', phonetic: '/ɪnˈfɜːr/', meaning: 'Déduire', tip: 'Prononcez « in-FUR » — l\'accent est sur « FUR » qui rime avec « her ». Ne confondez pas avec « imply » /ɪmˈplaɪ/. Le « r » final est prononcé en américain.' },
    { word: 'Consistent', phonetic: '/kənˈsɪstnt/', meaning: 'Cohérent', tip: 'L\'accent est sur « SIS » : « kuhn-SIS-tnt ». Le « con » est réduit. Le « ten » final s\'avale en « tnt ». Ne dites pas « kon-sis-TENT ».' },
  ],
}

// ─── c1-l58: Scientific Presentation ──────────────────────────────────────────────
export const C1_L58: LessonContent = {
  vocab: [
    { english: 'finding', french: 'résultat / constatation', phonetic: '/ˈfaɪndɪŋ/', example: 'The principal finding of this study challenges the conventional understanding of the phenomenon.', exampleTranslation: 'Le résultat principal de cette étude remet en question la compréhension conventionnelle du phénomène.' },
    { english: 'to yield', french: 'produire / donner (des résultats)', phonetic: '/jiːld/', example: 'The experiment yielded unexpected results that merit further investigation.', exampleTranslation: 'L\'expérience a produit des résultats inattendus qui méritent une investigation plus approfondie.' },
    { english: 'to warrant', french: 'justifier / nécessiter', phonetic: '/ˈwɒrənt/', example: 'The magnitude of the effect warrants a large-scale replication study.', exampleTranslation: 'L\'ampleur de l\'effet justifie une étude de réplication à grande échelle.' },
    { english: 'discrepancy', french: 'divergence / écart', phonetic: '/dɪsˈkrepənsi/', example: 'The discrepancy between the two datasets can be attributed to different sampling methods.', exampleTranslation: 'La divergence entre les deux jeux de données peut être attribuée à des méthodes d\'échantillonnage différentes.' },
    { english: 'implication', french: 'implication / conséquence', phonetic: '/ˌɪmplɪˈkeɪʃn/', example: 'The implications of this research extend beyond the immediate field of study.', exampleTranslation: 'Les implications de cette recherche s\'étendent au-delà du domaine d\'étude immédiat.' },
  ],
  grammar: {
    title: 'La présentation scientifique : structures rhétoriques pour communiquer des résultats',
    explanation: 'Présenter des résultats en anglais scientifique obéit à des conventions rhétoriques précises : (1) La structure IMRAD : Introduction → Methods → Results → Discussion. Chaque section a ses formules : Introduction : « Little is known about... », « This study aims to... » ; Methods : « Participants were recruited... », « Data were collected using... » ; Results : « The analysis revealed... », « As shown in Figure 2... » ; Discussion : « These findings suggest... », « A limitation of this study is... ». (2) « Yield » ≠ « produce » ≠ « generate » : « yield results » est la collocation scientifique standard ; « produce » est plus neutre ; « generate » s\'utilise avec des données (« generate data »). (3) « Warrant » en contexte scientifique = justifier, nécessiter : « This warrants further investigation » = cela justifie une investigation plus approfondie. ≠ « guarantee » (garantir). (4) « Implication » ≠ « implication » en français : en anglais scientifique, « implications » = les conséquences ou répercussions (le plus souvent au pluriel), tandis qu\'en français « implication » peut signifier « participation ». (5) Les transitions scientifiques : « Having established X, we now turn to Y » ; « Building on these findings... » ; « In contrast to previous studies... » ; « Taken together, these results... ».',
    examples: [
      { sentence: 'The analysis yielded a statistically significant interaction effect between the two variables.', translation: 'L\'analyse a produit un effet d\'interaction statistiquement significatif entre les deux variables.', isCorrect: true },
      { sentence: 'These findings warrant a re-examination of the current theoretical framework.', translation: 'Ces résultats justifient un réexamen du cadre théorique actuel.', isCorrect: true },
      { sentence: 'The implication of the research team was crucial to the project\'s success.', translation: '', isCorrect: false },
      { sentence: 'Taken together, the results suggest that the discrepancy can be resolved by refining the measurement instrument.', translation: 'Pris ensemble, les résultats suggèrent que la divergence peut être résolue en affinant l\'instrument de mesure.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The implication of the research team was crucial to the project\'s success.', correct: 'The involvement of the research team was crucial to the project\'s success.', explanation: 'En anglais, « implication » dans un contexte scientifique signifie « conséquence / répercussion », pas « participation / implication » comme en français. Pour exprimer la participation, utilisez « involvement » ou « participation ». C\'est un faux ami très courant pour les francophones.' },
      { wrong: 'The results guarantee further investigation.', correct: 'The results warrant further investigation.', explanation: '« Guarantee » = garantir (certitude), « warrant » = justifier / nécessiter (nécessité fondée). En science, des résultats ne « garantissent » pas une investigation future ; ils la « justifient ». « Warrant » est le terme précis pour ce contexte.' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Moreau', role: 'A', text: 'Good morning, everyone. I\'d like to present the findings of our three-year longitudinal study on neuroplasticity in adult learners.', translation: 'Bonjour à tous. J\'aimerais présenter les résultats de notre étude longitudinale de trois ans sur la neuroplasticité chez les apprenants adultes.' },
    { speaker: 'Conference Chair Dr. Singh', role: 'B', text: 'Thank you, Dr. Moreau. You have twenty minutes for your presentation, followed by a ten-minute Q&A.', translation: 'Merci, Dr. Moreau. Vous avez vingt minutes pour votre présentation, suivies de dix minutes de questions.' },
    { speaker: 'Dr. Moreau', role: 'A', text: 'Our analysis yielded a robust correlation between intensive language training and grey matter density in Broca\'s area.', translation: 'Notre analyse a produit une corroboration robuste entre la formation linguistique intensive et la densité de matière grise dans l\'aire de Broca.' },
    { speaker: 'Conference Chair Dr. Singh', role: 'B', text: 'Fascinating. Were there any discrepancies between your subgroups?', translation: 'Fascinant. Y a-t-il eu des divergences entre vos sous-groupes ?' },
    { speaker: 'Dr. Moreau', role: 'A', text: 'Indeed — the effect was markedly stronger in participants under thirty-five. This discrepancy warrants a dedicated follow-up study.', translation: 'En effet — l\'effet était nettement plus fort chez les participants de moins de trente-cinq ans. Cette divergence justifie une étude de suivi dédiée.' },
    { speaker: 'Conference Chair Dr. Singh', role: 'B', text: 'The implications for educational neuroscience are considerable. I look forward to seeing the published paper.', translation: 'Les implications pour les neurosciences de l\'éducation sont considérables. J\'ai hâte de voir l\'article publié.' },
  ],
  conversationTitle: 'Présentation de conférence : communiquer des résultats de recherche',
  pronunciation: [
    { word: 'Finding', phonetic: '/ˈfaɪndɪŋ/', meaning: 'Résultat', tip: 'Prononcez « FYNE-ding » — l\'accent est sur « FYNE » qui rime avec « kind ». Ne dites pas « feen-ding ». Le « i » est long comme dans « find ».' },
    { word: 'Yield', phonetic: '/jiːld/', meaning: 'Produire', tip: 'Prononcez « yeeld » — une seule syllabe. Le « y » est comme dans « yes » et le « ie » se prononce « ee » long. Ne dites pas « yeeld-uh ».' },
    { word: 'Warrant', phonetic: '/ˈwɒrənt/', meaning: 'Justifier', tip: 'L\'accent est sur « WAR » : « WOR-unt ». Le « arr » est ouvert comme dans « wallet ». Le « ant » final se réduit en « unt ». Ne dites pas « wa-RANT ».' },
    { word: 'Discrepancy', phonetic: '/dɪsˈkrepənsi/', meaning: 'Divergence', tip: 'L\'accent est sur « KREP » : « dis-KREP-uhn-see ». Le « dis » est rapide. Le « an » se réduit. Ne dites pas « dis-kre-pan-SEE » à la française.' },
  ],
}

// ─── c1-l59: Paradigm Discussion ──────────────────────────────────────────────────
export const C1_L59: LessonContent = {
  vocab: [
    { english: 'to supersede', french: 'supplanter / remplacer', phonetic: '/ˌsuːpərˈsiːd/', example: 'Einstein\'s theory of relativity superseded Newtonian mechanics at cosmic scales.', exampleTranslation: 'La théorie de la relativité d\'Einstein a supplanté la mécanique newtonienne à l\'échelle cosmique.' },
    { english: 'to refute', french: 'réfuter / rejeter', phonetic: '/rɪˈfjuːt/', example: 'The new evidence refutes the longstanding claim that the effect is purely genetic.', exampleTranslation: 'Les nouvelles preuves réfutent l\'affirmation de longue date selon laquelle l\'effet est purement génétique.' },
    { english: 'to replicate', french: 'répliquer / reproduire', phonetic: '/ˈreplɪkeɪt/', example: 'The study was replicated across three independent laboratories with consistent results.', exampleTranslation: 'L\'étude a été répliquée dans trois laboratoires indépendants avec des résultats cohérents.' },
    { english: 'to falsify', french: 'falsifier / réfuter (au sens poppérien)', phonetic: '/ˈfɔːlsɪfaɪ/', example: 'A good scientific theory must be falsifiable — it must make predictions that can be tested and potentially disproved.', exampleTranslation: 'Une bonne théorie scientifique doit être falsifiable — elle doit faire des prédictions qui peuvent être testées et potentiellement réfutées.' },
    { english: 'anomaly', french: 'anomalie', phonetic: '/əˈnɒməli/', example: 'The accumulation of anomalies eventually precipitated the paradigm shift.', exampleTranslation: 'L\'accumulation d\'anomalies a fini par précipiter le changement de paradigme.' },
  ],
  grammar: {
    title: 'Le langage des révolutions scientifiques : vocabulaire de Kuhn et de Popper',
    explanation: 'La philosophie des sciences, particulièrement les travaux de Thomas Kuhn et Karl Popper, a forgé un vocabulaire technique précis : (1) « Supersede » ≠ « replace » ≠ « supersede » : « supersede » = remplacer en rendant obsolète par supériorité ; « replace » = simplement mettre à la place. Une théorie « supersedes » une autre quand elle l\'englobe et la dépasse. Attention à l\'orthographe : « supersede » avec un « s » (du latin « supersedere »), PAS « supercede ». (2) « Refute » ≠ « rebut » ≠ « deny » : « refute » = prouver qu\'une affirmation est fausse par des preuves ; « rebut » = contredire avec des arguments (sans preuve décisive) ; « deny » = nier sans argument. En français, « réfuter » est souvent utilisé dans le sens de « contredire », mais en anglais « refute » implique une démonstration. (3) « Replicate » ≠ « duplicate » : « replicate » = reproduire une expérience pour vérifier les résultats ; « duplicate » = faire une copie exacte. La « replicability » (reproductibilité) est un pilier de la méthode scientifique. (4) « Falsify » au sens poppérien = montrer qu\'une théorie est fausse, pas « falsifier » au sens de « truquer » (fraude). Une théorie « falsifiable » est une théorie testable — c\'est un compliment, pas un reproche. (5) Le vocabulaire de Kuhn : « paradigm shift » = changement de paradigme ; « normal science » = science normale (travail dans le paradigme existant) ; « scientific revolution » = révolution scientifique ; « incommensurability » = incommensurabilité (deux paradigmes ne peuvent être comparés directement).',
    examples: [
      { sentence: 'The heliocentric model superseded the geocentric model, rendering it scientifically obsolete.', translation: 'Le modèle héliocentrique a supplanté le modèle géocentrique, le rendant scientifiquement obsolète.', isCorrect: true },
      { sentence: 'The researcher refuted the claim simply by saying he disagreed with it.', translation: '', isCorrect: false },
      { sentence: 'Failure to replicate a study\'s findings raises questions about the original methodology.', translation: 'L\'incapacité à répliquer les résultats d\'une étude soulève des questions sur la méthodologie originale.', isCorrect: true },
      { sentence: 'Popper argued that falsifiability is the demarcation criterion between science and pseudoscience.', translation: 'Popper a soutenu que la falsifiabilité est le critère de démarcation entre la science et la pseudoscience.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The researcher refuted the claim simply by saying he disagreed with it.', correct: 'The researcher denied the claim, but did not refute it with evidence.', explanation: '« Refute » exige des preuves, pas simplement un désaccord. Si vous dites « I disagree », vous « deny » ou « rebut », mais vous ne « refute » que si vous apportez des preuves qui démontrent la fausseté. C\'est l\'erreur la plus courante même chez les locuteurs natifs.' },
      { wrong: 'The theory was superceded by a better model.', correct: 'The theory was superseded by a better model.', explanation: '« Supersede » s\'écrit avec un « s » (du latin « supersedere » = s\'asseoir au-dessus), pas avec un « c ». C\'est l\'une des fautes d\'orthographe les plus fréquentes en anglais académique.' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Bergström', role: 'A', text: 'I\'d argue we\'re witnessing a paradigm shift in immunology. The accumulating anomalies can no longer be absorbed by the existing framework.', translation: 'Je soutiendrais que nous assistons à un changement de paradigme en immunologie. Les anomalies accumulées ne peuvent plus être absorbées par le cadre existant.' },
    { speaker: 'Dr. Osei', role: 'B', text: 'That\'s a bold claim. The current model has served the field well for decades. Wouldn\'t you say the anomalies merely warrant refinement rather than revolution?', translation: 'C\'est une affirmation audacieuse. Le modèle actuel a bien servi le domaine pendant des décennies. Ne diriez-vous pas que les anomalies justifierient simplement un affinement plutôt qu\'une révolution ?' },
    { speaker: 'Prof. Bergström', role: 'A', text: 'Not in this case. The new evidence refutes the core assumptions of the model — it doesn\'t merely tweak the periphery.', translation: 'Pas dans ce cas. Les nouvelles preuves réfutent les hypothèses fondamentales du modèle — elles ne se contentent pas d\'ajuster la périphérie.' },
    { speaker: 'Dr. Osei', role: 'B', text: 'But has the alternative been independently replicated? A paradigm shift requires robust, reproducible evidence, not just provocative findings.', translation: 'Mais l\'alternative a-t-elle été répliquée de manière indépendante ? Un changement de paradigme exige des preuves robustes et reproductibles, pas seulement des résultats provocateurs.' },
    { speaker: 'Prof. Bergström', role: 'A', text: 'Three labs have replicated the key experiments. And crucially, the new framework is falsifiable — it makes precise predictions that can be tested.', translation: 'Trois laboratoires ont répliqué les expériences clés. Et surtout, le nouveau cadre est falsifiable — il fait des prédictions précises qui peuvent être testées.' },
    { speaker: 'Dr. Osei', role: 'B', text: 'Then perhaps the old paradigm is indeed being superseded. I concede that the weight of evidence is compelling.', translation: 'Alors peut-être que l\'ancien paradigme est effectivement en train d\'être supplanté. J\'admets que le poids des preuves est convaincant.' },
  ],
  conversationTitle: 'Débat sur les paradigmes : révolution scientifique ou affinement ?',
  pronunciation: [
    { word: 'Supersede', phonetic: '/ˌsuːpərˈsiːd/', meaning: 'Supplanter', tip: 'L\'accent est sur « SEDE » : « soo-per-SEED ». Le « super » est rapide et réduit. La fin rime avec « seed ». N\'écrivez JAMAIS « supercede » — c\'est une faute courante.' },
    { word: 'Refute', phonetic: '/rɪˈfjuːt/', meaning: 'Réfuter', tip: 'L\'accent est sur « FUTE » : « ri-FYOOT ». Le « re » initial est réduit. La voyelle rime avec « mute » ou « flute ». Ne dites pas « re-FYOOT-uh ».' },
    { word: 'Replicate', phonetic: '/ˈreplɪkeɪt/', meaning: 'Répliquer', tip: 'L\'accent est sur « REP » : « REP-li-kayt ». Ne mettez pas l\'accent sur la dernière syllabe comme en français. Le « cate » final se prononce « kayt » comme dans « duplicate ».' },
    { word: 'Falsify', phonetic: '/ˈfɔːlsɪfaɪ/', meaning: 'Falsifier', tip: 'L\'accent est sur « FALSE » : « FALSE-ih-fye ». Le « si » est réduit. La fin rime avec « eye ». Ne dites pas « fal-see-FEE » à la française.' },
  ],
}

// ─── c1-l60: Science Sounds ──────────────────────────────────────────────────────
export const C1_L60: LessonContent = {
  vocab: [
    { english: 'variable', french: 'variable', phonetic: '/ˈveəriəbl/', example: 'The independent variable was manipulated across three experimental conditions.', exampleTranslation: 'La variable indépendante a été manipulée dans trois conditions expérimentales.' },
    { english: 'chlorophyll', french: 'chlorophylle', phonetic: '/ˈklɒrəfɪl/', example: 'Chlorophyll absorption peaks in the blue and red regions of the spectrum.', exampleTranslation: 'L\'absorption de la chlorophylle atteint son maximum dans les régions bleue et rouge du spectre.' },
    { english: 'synthesis', french: 'synthèse', phonetic: '/ˈsɪnθəsɪs/', example: 'The synthesis of these compounds requires extreme temperature conditions.', exampleTranslation: 'La synthèse de ces composés nécessite des conditions de température extrêmes.' },
    { english: 'algorithm', french: 'algorithme', phonetic: '/ˈælɡərɪðəm/', example: 'The algorithm was optimised to reduce computational complexity.', exampleTranslation: 'L\'algorithme a été optimisé pour réduire la complexité computationnelle.' },
    { english: 'taxonomy', french: 'taxonomie / classification', phonetic: '/tækˈsɒnəmi/', example: 'The taxonomy of the newly discovered species remains under debate.', exampleTranslation: 'La taxonomie de l\'espèce nouvellement découverte reste débattue.' },
  ],
  grammar: {
    title: 'La prononciation scientifique : pièges pour francophones dans les termes savants',
    explanation: 'Les termes scientifiques anglais sont truffés de pièges phonétiques pour les francophones, car beaucoup viennent du grec ou du latin et suivent des règles de prononciation anglaises : (1) « Variable » : /ˈveəriəbl/ — le « a » initial se prononce comme dans « vary » (pas « va » français), l\'accent est sur « VAIR » (première syllabe), le « i » est réduit en schwa, le « ble » final se prononce « buhl ». Ne dites pas « va-ree-AH-bl » à la française ; en anglais c\'est « VAIR-ee-uh-bul » (quatre syllabes). (2) « Chlorophyll » : /ˈklɒrəfɪl/ — le « ch » = « k » (comme dans « chemistry »), pas « ch » français. Le « ph » = « f ». L\'accent est sur « CLO » (première syllabe). (3) « Synthesis » : /ˈsɪnθəsɪs/ — le « y » = « i » court (pas « u » français), le « th » est interdentale expirée (pas « s » ou « z »), l\'accent est sur « SIN ». Le pluriel « syntheses » = /ˈsɪnθəsiːz/. (4) « Algorithm » : /ˈælɡərɪðəm/ — le « al » est ouvert comme dans « Alice » (pas « al » français), le « th » est interdentale expirée, l\'accent est sur « AL ». (5) « Taxonomy » : /tækˈsɒnəmi/ — le « x » se prononce « ks » (pas « ks » français), l\'accent est sur « SON » (deuxième syllabe), le « o » est ouvert comme dans « hot ». Ne dites pas « tak-so-NO-mee » à la française avec l\'accent sur la dernière syllabe. Règle générale : en anglais, le « th » /θ/ est toujours expiré dans les termes scientifiques (hypothesis, synthesis, algorithm), jamais remplacé par « s » ou « z ».',
    examples: [
      { sentence: 'The variable was controlled across multiple experimental conditions.', translation: 'La variable a été contrôlée dans de multiples conditions expérimentales.', isCorrect: true },
      { sentence: 'The synthesis of the compound required precise temperature control.', translation: 'La synthèse du composé nécessitait un contrôle précis de la température.', isCorrect: true },
      { sentence: 'The variables observed in the study was unexpected.', translation: '', isCorrect: false },
      { sentence: 'The algorithm processes taxonomic classifications embedded in the data.', translation: 'L\'algorithme traite les classifications taxonomiques intégrées dans les données.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The variables observed in the study was unexpected.', correct: 'The variables observed in the study were unexpected.', explanation: '« Variables » est pluriel, donc le verbe doit être au pluriel : « were », pas « was ». Cette erreur de concordance sujet-verbe est fréquente quand le sujet et le verbe sont séparés par un modifieur long.' },
      { wrong: 'Prononcer « synthesis » avec un « s » au lieu du « th »', correct: 'Prononcez « SIN-thuh-sis » avec le « th » expiré', explanation: 'Le « th » /θ/ est essentiel dans « synthesis », « hypothesis », « algorithm ». Le remplacer par « s » (« sin-ness-is ») est une erreur typiquement francophone. Entraînez-vous : placez la langue entre les dents et expirez doucement.' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Fournier', role: 'A', text: 'I struggled with the pronunciation during my presentation — I said « va-ree-AH-bl » instead of « VAIR-ee-uh-bul » and the audience looked confused.', translation: 'J\'ai eu du mal avec la prononciation pendant ma présentation — j\'ai dit « va-ree-AH-bl » au lieu de « VAIR-ee-uh-bul » et le public avait l\'air confus.' },
    { speaker: 'Dr. Williams', role: 'B', text: 'That\'s a common issue. Scientific terms of Latin origin follow English stress patterns, not French. « Variable » stresses the first syllable, and the « a » sounds like in « vary ».', translation: 'C\'est un problème courant. Les termes scientifiques d\'origine latine suivent les patrons d\'accent anglais, pas français. « Variable » accentue la première syllabe, et le « a » se prononce comme dans « vary ».' },
    { speaker: 'Dr. Fournier', role: 'A', text: 'And « chlorophyll » — I keep wanting to say « klo-ro-FEEL » with the « ch » as in French.', translation: 'Et « chlorophyll » — je continue à vouloir dire « klo-ro-FEEL » avec le « ch » comme en français.' },
    { speaker: 'Dr. Williams', role: 'B', text: 'Remember: in scientific English, « ch » from Greek is almost always « k » — chemistry, chlorine, chlorophyll, chaos. And the stress is on the first syllable: « KLO-ro-fill ».', translation: 'Rappelez-vous : en anglais scientifique, le « ch » d\'origine grecque est presque toujours « k » — chemistry, chlorine, chlorophyll, chaos. Et l\'accent est sur la première syllabe : « KLO-ro-fill ».' },
    { speaker: 'Dr. Fournier', role: 'A', text: 'What about « taxonomy »? I find the stress pattern particularly tricky.', translation: 'Et « taxonomy » ? Je trouve le schéma d\'accent particulièrement délicat.' },
    { speaker: 'Dr. Williams', role: 'B', text: 'Break it down: « tak-SON-uh-mee » — primary stress on « SON », not on the last syllable. And the « x » = « ks ». Practice with: economy, taxonomy, astronomy — they all follow the same pattern.', translation: 'Décomposez : « tak-SON-uh-mee » — accent principal sur « SON », pas sur la dernière syllabe. Et le « x » = « ks ». Entraînez-vous avec : economy, taxonomy, astronomy — ils suivent tous le même schéma.' },
  ],
  conversationTitle: 'Prononciation scientifique : conseils pour francophones',
  pronunciation: [
    { word: 'Variable', phonetic: '/ˈveəriəbl/', meaning: 'Variable', tip: 'Prononcez « VAIR-ee-uh-bul » — l\'accent est sur « VAIR ». Le « a » initial = « air » comme dans « vary ». Le « i » est réduit en schwa. Le « ble » final = « bul » (une syllabe). Ne dites pas « va-ree-AH-bl » à la française.' },
    { word: 'Chlorophyll', phonetic: '/ˈklɒrəfɪl/', meaning: 'Chlorophylle', tip: 'Prononcez « KLO-ruh-fill » — le « ch » = « k » (origine grecque), le « ph » = « f ». L\'accent est sur « KLO ». Ne dites JAMAIS « chlo-ro-FEEL » à la française.' },
    { word: 'Synthesis', phonetic: '/ˈsɪnθəsɪs/', meaning: 'Synthèse', tip: 'Prononcez « SIN-thuh-sis » — le « y » = « i » court, le « th » est interdentale expirée (langue entre les dents), l\'accent sur « SIN ». Ne dites pas « sin-ness-is » ou « san-tez ».' },
    { word: 'Algorithm', phonetic: '/ˈælɡərɪðəm/', meaning: 'Algorithme', tip: 'Prononcez « AL-guh-ri-thum » — l\'accent sur « AL », le « th » interdentale expirée, le « e » final réduit. Ne dites pas « al-go-reet-m » à la française.' },
  ],
}
