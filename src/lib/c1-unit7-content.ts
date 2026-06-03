import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C1 ADVANCED — UNIT 7: TECHNICAL WRITING (c1-l31 through c1-l35)
// YOELANG English Learning App for Francophone Users
// Advanced: technical vocabulary, concise expression, documentation standards,
// specification language, technical writing pronunciation
// ════════════════════════════════════════════════════════════════════════════════

// ─── c1-l31: Technical Vocabulary ────────────────────────────────────────────────
export const C1_L31: LessonContent = {
  vocab: [
    { english: 'specification', french: 'spécification / cahier des charges', phonetic: '/ˌspesɪfɪˈkeɪʃn/', example: 'The specification requires all components to operate within a temperature range of -40°C to 85°C.', exampleTranslation: 'La spécification exige que tous les composants fonctionnent dans une plage de température de -40°C à 85°C.' },
    { english: 'calibration', french: 'calibration / étalonnage', phonetic: '/ˌkælɪˈbreɪʃn/', example: 'Annual calibration of the measurement instruments is mandatory under ISO 17025.', exampleTranslation: 'La calibration annuelle des instruments de mesure est obligatoire en vertu de la norme ISO 17025.' },
    { english: 'tolerance', french: 'tolérance (dimensionnelle)', phonetic: '/ˈtɒlərəns/', example: 'The machining tolerance for this shaft is ±0.02 mm.', exampleTranslation: 'La tolérance d\'usinage pour cet arbre est de ±0,02 mm.' },
    { english: 'compliance', french: 'conformité / mise en conformité', phonetic: '/kəmˈplaɪəns/', example: 'Compliance with safety regulations is a prerequisite for market approval.', exampleTranslation: 'La conformité aux réglementations de sécurité est une condition préalable à l\'approbation pour le marché.' },
    { english: 'deliverable', french: 'livrable', phonetic: '/dɪˈlɪvərəbl/', example: 'The final deliverable shall include the technical report, source code, and test documentation.', exampleTranslation: 'Le livrable final devra inclure le rapport technique, le code source et la documentation de test.' },
  ],
  grammar: {
    title: 'Le vocabulaire technique anglais : nuances et faux amis pour francophones',
    explanation: 'Le vocabulaire technique anglais possède des subtilités que les francophones méconnaissent souvent : (1) « Specification » ≠ « spécification » française : en anglais, une specification est un document normatif contraignant (cahier des charges), pas une simple description. On dit « the specification requires » (la spécification exige), jamais « the specification describes ». (2) « Calibration » ≠ « calibrage » : en anglais technique, calibration = vérification et ajustement par rapport à un étalon ; le terme français correct est « étalonnage ». On calibre un instrument, on ne « calibre » pas un projet. (3) « Tolerance » en ingénierie = marge admissible (dimensionnelle, électrique), pas la tolérance sociale. On dit « tight tolerance » (tolérance serrée) ≠ « loose tolerance » (tolérance large). (4) « Compliance with » ≠ « compliance to » : on est en conformité AVEC une norme = « compliance WITH ». (5) « Deliverable » est un anglicisme entré dans le jargon français (« livrable ») ; en anglais, c\'est un adjectif devenu nom : « the deliverable » = ce qui doit être livré. On distingue « interim deliverables » (livrables intermédiaires) et « final deliverable » (livrable final).',
    examples: [
      { sentence: 'The specification mandates compliance with IEC 61508 for all safety-critical components.', translation: 'La spécification exige la conformité à la norme IEC 61508 pour tous les composants critiques pour la sécurité.', isCorrect: true },
      { sentence: 'The calibration of the sensor was performed using a NIST-traceable reference standard.', translation: 'La calibration du capteur a été effectuée à l\'aide d\'un étalon traçable NIST.', isCorrect: true },
      { sentence: 'We need compliance to the new regulations.', translation: '', isCorrect: false },
      { sentence: 'The shaft diameter must be maintained within a tolerance of ±0.005 mm.', translation: 'Le diamètre de l\'arbre doit être maintenu dans une tolérance de ±0,005 mm.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'We need compliance to the new regulations.', correct: 'We need compliance with the new regulations.', explanation: '« Compliance » se construit toujours avec « with » : compliance WITH, pas « compliance to ». C\'est une erreur fréquente car en français on dit « conformité À ». En anglais, on est « in compliance WITH ».' },
      { wrong: 'The specification describes the requirements.', correct: 'The specification sets out the requirements. / The specification mandates the requirements.', explanation: 'Une specification en anglais technique ne « décrit » pas simplement — elle impose. Utilisez « mandates », « requires », « sets out » ou « stipulates » pour refléter le caractère contraignant d\'une spécification.' },
    ],
  },
  conversation: [
    { speaker: 'Lead Engineer Novak', role: 'A', text: 'Have you reviewed the updated specification for the hydraulic assembly? The tolerance on the cylinder bore has been tightened to ±0.01 mm.', translation: 'Avez-vous examiné la spécification mise à jour pour l\'ensemble hydraulique ? La tolérance sur l\'alésage du cylindre a été serrée à ±0,01 mm.' },
    { speaker: 'Quality Manager Dupont', role: 'B', text: 'That will require recalibration of our measuring equipment. Are we still in compliance with ISO 17025 for the calibration procedure?', translation: 'Cela nécessitera une recalibration de notre équipement de mesure. Sommes-nous toujours en conformité avec la norme ISO 17025 pour la procédure de calibration ?' },
    { speaker: 'Lead Engineer Novak', role: 'A', text: 'Yes, the calibration lab is accredited. However, the tighter tolerance means we\'ll need to qualify the measurement method as well.', translation: 'Oui, le laboratoire de calibration est accrédité. Cependant, la tolérance plus serrée signifie que nous devrons également qualifier la méthode de mesure.' },
    { speaker: 'Quality Manager Dupont', role: 'B', text: 'Understood. Will the measurement qualification report be part of the interim deliverables or the final deliverable?', translation: 'Compris. Le rapport de qualification de mesure fera-t-il partie des livrables intermédiaires ou du livrable final ?' },
    { speaker: 'Lead Engineer Novak', role: 'A', text: 'It should be an interim deliverable, so the client can verify compliance before we proceed to the production phase.', translation: 'Il devrait être un livrable intermédiaire, pour que le client puisse vérifier la conformité avant que nous ne passions à la phase de production.' },
    { speaker: 'Quality Manager Dupont', role: 'B', text: 'Good thinking. I\'ll schedule the calibration and draft the qualification protocol by Friday.', translation: 'Bonne idée. Je planifierai la calibration et je rédigerai le protocole de qualification d\'ici vendredi.' },
  ],
  conversationTitle: 'Révision de spécification : tolérances et calibration',
  pronunciation: [
    { word: 'Specification', phonetic: '/ˌspesɪfɪˈkeɪʃn/', meaning: 'Spécification', tip: 'L\'accent est sur « CA » : « spes-uh-fi-KAY-shun ». C\'est un mot de 5 syllabes. La terminaison « -tion » = « shun ». Ne dites pas « spé-si-fi-ca-sion » à la française.' },
    { word: 'Calibration', phonetic: '/ˌkælɪˈbreɪʃn/', meaning: 'Calibration / Étalonnage', tip: 'L\'accent est sur « BRAY » : « kal-uh-BRAY-shun ». Le « a » initial est ouvert comme dans « cat ». La terminaison « -tion » = « shun ».' },
    { word: 'Tolerance', phonetic: '/ˈtɒlərəns/', meaning: 'Tolérance', tip: 'L\'accent est sur « TOL » : « TOL-uh-runs ». Le « o » est ouvert comme dans « hot ». Ne dites pas « to-lé-rance » à la française.' },
    { word: 'Deliverable', phonetic: '/dɪˈlɪvərəbl/', meaning: 'Livrable', tip: 'L\'accent est sur « LIV » : « dih-LIV-uh-ruh-bl ». Le « de » initial est réduit. Le suffixe « -able » = « uh-bl ». Ne dites pas « dé-li-vé-rable ».' },
  ],
}

// ─── c1-l32: Concise Expression ──────────────────────────────────────────────────
export const C1_L32: LessonContent = {
  vocab: [
    { english: 'to streamline', french: 'rationaliser / simplifier', phonetic: '/ˈstriːmlaɪn/', example: 'The revised procedure streamlines the approval process from five steps to two.', exampleTranslation: 'La procédure révisée rationalise le processus d\'approbation de cinq étapes à deux.' },
    { english: 'redundancy', french: 'redondance / répétition inutile', phonetic: '/rɪˈdʌndənsi/', example: 'The editor removed all redundancy from the technical manual.', exampleTranslation: 'L\'éditeur a supprimé toute redondance du manuel technique.' },
    { english: 'nominalisation', french: 'nominalisation', phonetic: '/ˌnɒmɪnəlaɪˈzeɪʃn/', example: 'Nominalisation allows you to condense a clause into a single noun phrase: « the approval of the design » instead of « after the design was approved ».', exampleTranslation: 'La nominalisation permet de condenser une proposition en un seul syntagme nominal : « the approval of the design » au lieu de « after the design was approved ».' },
    { english: 'unambiguous', french: 'non ambigu / sans ambiguïté', phonetic: '/ˌʌnæmˈbɪɡjuəs/', example: 'The instruction must be unambiguous to prevent misinterpretation by the operator.', exampleTranslation: 'L\'instruction doit être sans ambiguïté pour éviter toute mauvaise interprétation par l\'opérateur.' },
    { english: 'concise', french: 'concis / succinct', phonetic: '/kənˈsaɪs/', example: 'A concise technical report conveys maximum information in minimum words.', exampleTranslation: 'Un rapport technique concis transmet un maximum d\'informations en un minimum de mots.' },
  ],
  grammar: {
    title: 'L\'expression concise en anglais technique : éliminer la redondance et nominaliser',
    explanation: 'La rédaction technique anglaise exige la concision. Les francophones, habitués à un style plus expansif, commettent des erreurs systématiques : (1) Éliminer les formulations redondantes : « in order to » → « to » ; « due to the fact that » → « because » ; « at this point in time » → « now » ; « in the event that » → « if » ; « a large number of » → « many » ; « has the ability to » → « can » ; « in the near future » → « soon ». (2) La nominalisation pour la concision : transformer une proposition en syntagme nominal. Au lieu de « After we analysed the data, we found... » → « Data analysis revealed... ». Au lieu de « When the system fails, it causes... » → « System failure causes... ». La nominalisation est plus courante en anglais technique qu\'en français. (3) Voix active vs passive : en anglais technique moderne, on privilégie l\'active pour la concision : « The team tested the component » (6 mots) vs « The component was tested by the team » (7 mots). Cependant, la passive reste appropriée quand l\'agent est évident ou sans importance : « The results were recorded ». (4) Éviter les paires synonymiques (doublets) : « each and every » → « each » ; « basic and fundamental » → « fundamental » ; « null and void » (acceptable en droit, pas en technique). (5) « Whether or not » → « whether » : le « or not » est presque toujours redondant.',
    examples: [
      { sentence: 'Data analysis revealed a correlation between temperature fluctuations and sensor drift.', translation: 'L\'analyse des données a révélé une corrélation entre les fluctuations de température et la dérive du capteur.', isCorrect: true },
      { sentence: 'In order to calibrate the instrument, it is necessary to follow the procedure.', translation: '', isCorrect: false },
      { sentence: 'System failure triggers an automatic shutdown.', translation: 'La défaillance du système déclenche un arrêt automatique.', isCorrect: true },
      { sentence: 'The component was tested in accordance with the specification.', translation: 'Le composant a été testé conformément à la spécification.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'In order to calibrate the instrument, it is necessary to follow the procedure.', correct: 'To calibrate the instrument, follow the procedure.', explanation: 'Trois redondances : (1) « In order to » → « to » ; (2) « it is necessary to » → implicite avec l\'impératif ; (3) la structure impersonnelle est inutile. La version concise fait 7 mots au lieu de 13 — presque 50% de réduction.' },
      { wrong: 'Due to the fact that the temperature exceeded the threshold, the system shut down.', correct: 'Because the temperature exceeded the threshold, the system shut down.', explanation: '« Due to the fact that » est une formulation redondante de 5 mots pour dire « because » (1 mot). En rédaction technique, chaque mot doit porter son poids. Remplacez systématiquement « due to the fact that » par « because ».' },
    ],
  },
  conversation: [
    { speaker: 'Technical Writer Béranger', role: 'A', text: 'I\'ve reviewed your draft report. The content is sound, but it needs to be more concise — there\'s quite a bit of redundancy.', translation: 'J\'ai revu votre projet de rapport. Le contenu est solide, mais il doit être plus concis — il y a pas mal de redondance.' },
    { speaker: 'Engineer Singh', role: 'B', text: 'Could you give me an example? I thought I was being thorough.', translation: 'Pourriez-vous me donner un exemple ? Je pensais être exhaustif.' },
    { speaker: 'Technical Writer Béranger', role: 'A', text: 'Here: « Due to the fact that the voltage exceeded the maximum threshold, it was necessary for the system to initiate an automatic shutdown. » That\'s 20 words for what could be four: « Overvoltage triggered automatic shutdown. »', translation: 'Ici : « En raison du fait que la tension a dépassé le seuil maximal, il a été nécessaire pour le système d\'initier un arrêt automatique. » C\'est 20 mots pour ce qui pourrait en faire quatre : « La surtension a déclenché un arrêt automatique. »' },
    { speaker: 'Engineer Singh', role: 'B', text: 'I see — so nominalisation helps here. « Overvoltage » instead of « the voltage exceeded the maximum threshold ».', translation: 'Je vois — donc la nominalisation aide ici. « Surtension » au lieu de « la tension a dépassé le seuil maximal ».' },
    { speaker: 'Technical Writer Béranger', role: 'A', text: 'Exactly. And « in order to » appears five times in your draft — every one of them can be replaced with « to ». The same goes for « whether or not » — just write « whether ».', translation: 'Exactement. Et « in order to » apparaît cinq fois dans votre brouillon — chacun peut être remplacé par « to ». Il en va de même pour « whether or not » — écrivez simplement « whether ».' },
    { speaker: 'Engineer Singh', role: 'B', text: 'Fair point. I\'ll revise with active voice and nominalisation. The report should be half the length and twice as clear.', translation: 'Juste. Je réviserai avec la voix active et la nominalisation. Le rapport devrait faire la moitié de la longueur et être deux fois plus clair.' },
  ],
  conversationTitle: 'Révision de rédaction : concision et nominalisation',
  pronunciation: [
    { word: 'Streamline', phonetic: '/ˈstriːmlaɪn/', meaning: 'Rationaliser', tip: 'L\'accent est sur « STREAM » : « STREAM-laïn ». C\'est un mot composé : « stream » + « line ». Ne dites pas « stri-melin ».' },
    { word: 'Redundancy', phonetic: '/rɪˈdʌndənsi/', meaning: 'Redondance', tip: 'L\'accent est sur « DUN » : « rih-DUN-den-si ». Le « re » initial est réduit. Le « u » est ouvert comme dans « bun ». Ne dites pas « ré-dun-dan-si ».' },
    { word: 'Unambiguous', phonetic: '/ˌʌnæmˈbɪɡjuəs/', meaning: 'Non ambigu', tip: 'L\'accent est sur « BIG » : « un-am-BIG-yoo-us ». Le préfixe « un- » est rapide. Le « g » est dur. Ne dites pas « un-am-bi-gu-us » à la française.' },
    { word: 'Concise', phonetic: '/kənˈsaɪs/', meaning: 'Concis', tip: 'L\'accent est sur « CISE » : « kun-SAÏS ». Le « con » initial est réduit en schwa. Le « i » = « aï » comme dans « ice ». Ne dites pas « kon-sees ».' },
  ],
}

// ─── c1-l33: Documentation Standards ─────────────────────────────────────────────
export const C1_L33: LessonContent = {
  vocab: [
    { english: 'audit', french: 'audit / vérification', phonetic: '/ˈɔːdɪt/', example: 'The internal audit identified three non-conformities in the documentation process.', exampleTranslation: 'L\'audit interne a identifié trois non-conformités dans le processus de documentation.' },
    { english: 'traceability', french: 'traçabilité', phonetic: '/ˌtreɪsəˈbɪləti/', example: 'Full traceability of design decisions must be maintained from requirements through to verification.', exampleTranslation: 'La traçabilité complète des décisions de conception doit être maintenue depuis les exigences jusqu\'à la vérification.' },
    { english: 'version control', french: 'gestion des versions', phonetic: '/ˈvɜːrʒn kənˈtrəʊl/', example: 'All changes to the document must be recorded through the version control system.', exampleTranslation: 'Toutes les modifications du document doivent être enregistrées dans le système de gestion des versions.' },
    { english: 'non-conformity', french: 'non-conformité', phonetic: '/ˌnɒnkənˈfɔːməti/', example: 'Each non-conformity must be documented with a root cause analysis and corrective action plan.', exampleTranslation: 'Chaque non-conformité doit être documentée avec une analyse des causes racines et un plan d\'action corrective.' },
    { english: 'baseline', french: 'référentiel / ligne de base', phonetic: '/ˈbeɪslaɪn/', example: 'Once the design baseline is approved, any modification requires a formal change request.', exampleTranslation: 'Une fois le référentiel de conception approuvé, toute modification nécessite une demande de changement formelle.' },
  ],
  grammar: {
    title: 'Les normes de documentation : langage de l\'audit et de la conformité',
    explanation: 'Le langage de la documentation normée en anglais suit des conventions strictes : (1) « Must » ≠ « shall » ≠ « should » dans les normes : « must » = obligation légale ou réglementaire ; « shall » = obligation contractuelle ou normative ; « should » = recommandation. Dans une procédure d\'audit, ces distinctions sont cruciales. (2) « Non-conformity » ≠ « non-compliance » : une non-conformity est un écart par rapport à une spécification interne ; une non-compliance est une violation d\'une réglementation externe. Les auditeurs distinguent soigneusement les deux. (3) « Traceability » en anglais technique = capacité à retracer l\'historique complet (traçabilité). On dit « traceability FROM requirements TO verification » (pas « from... to » dans le sens français « de... à » — ici c\'est bien l\'anglais). (4) « Baseline » = référentiel figé servant de référence pour les modifications ultérieures. On ne traduit PAS par « ligne de base ». Une fois le baseline établi, toute évolution est un « change » ou « deviation ». (5) Le passif est très utilisé dans les rapports d\'audit : « It was observed that... », « Three non-conformities were identified... » — l\'agent (l\'auditeur) est implicite.',
    examples: [
      { sentence: 'The audit revealed that traceability between requirements and test cases was incomplete.', translation: 'L\'audit a révélé que la traçabilité entre les exigences et les cas de test était incomplète.', isCorrect: true },
      { sentence: 'You must maintain version control of all documents.', translation: '', isCorrect: false },
      { sentence: 'A non-conformity was raised regarding the absence of a baseline for the software configuration.', translation: 'Une non-conformité a été soulevée concernant l\'absence de référentiel pour la configuration logicielle.', isCorrect: true },
      { sentence: 'Each deviation from the approved baseline shall be documented and assessed.', translation: 'Chaque écart par rapport au référentiel approuvé doit être documenté et évalué.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'You must maintain version control of all documents.', correct: 'Version control shall be maintained for all documents.', explanation: 'Dans une procédure normée, on évite le « you » et l\'impératif direct. On utilise la passive avec « shall » : « Version control shall be maintained ». C\'est plus formel et impersonnel — le style des normes et procédures.' },
      { wrong: 'The audit found a non-compliance in the internal process.', correct: 'The audit identified a non-conformity in the internal process.', explanation: 'Une « non-compliance » implique une violation d\'une loi ou réglementation externe. Un écart interne par rapport à une procédure est une « non-conformity ». Les auditeurs font cette distinction de manière systématique.' },
    ],
  },
  conversation: [
    { speaker: 'Auditor Williams', role: 'A', text: 'Good morning. I\'m here to conduct the documentation compliance audit. Could you walk me through your version control process?', translation: 'Bonjour. Je suis ici pour mener l\'audit de conformité documentaire. Pourriez-vous me présenter votre processus de gestion des versions ?' },
    { speaker: 'Doc Controller Mercier', role: 'B', text: 'Of course. All documents are stored in the configuration management system. Each revision is tracked, and approval workflows are enforced before any baseline is updated.', translation: 'Bien sûr. Tous les documents sont stockés dans le système de gestion de configuration. Chaque révision est suivie, et les flux d\'approbation sont imposés avant toute mise à jour du référentiel.' },
    { speaker: 'Auditor Williams', role: 'A', text: 'And how do you ensure traceability from requirements through to verification?', translation: 'Et comment assurez-vous la traçabilité depuis les exigences jusqu\'à la vérification ?' },
    { speaker: 'Doc Controller Mercier', role: 'B', text: 'We use a requirements management tool that links each requirement to its corresponding design element, test case, and verification result.', translation: 'Nous utilisons un outil de gestion des exigences qui relie chaque exigence à son élément de conception, cas de test et résultat de vérification correspondants.' },
    { speaker: 'Auditor Williams', role: 'A', text: 'I see. However, I\'ve noted a non-conformity: three design changes were implemented without updating the baseline. That\'s a deviation from your own procedure.', translation: 'Je vois. Cependant, j\'ai noté une non-conformité : trois modifications de conception ont été mises en œuvre sans mise à jour du référentiel. C\'est un écart par rapport à votre propre procédure.' },
    { speaker: 'Doc Controller Mercier', role: 'B', text: 'You\'re right — that was an oversight during the last sprint. I\'ll initiate a corrective action and ensure all changes are retroactively documented in the baseline.', translation: 'Vous avez raison — c\'était un oubli lors du dernier sprint. J\'initierai une action corrective et m\'assurerai que tous les changements soient documentés rétroactivement dans le référentiel.' },
  ],
  conversationTitle: 'Audit de conformité documentaire : traçabilité et référentiels',
  pronunciation: [
    { word: 'Audit', phonetic: '/ˈɔːdɪt/', meaning: 'Audit', tip: 'L\'accent est sur « AW » : « AW-dit ». Le « au » se prononce comme dans « author ». Ne dites pas « o-di » à la française.' },
    { word: 'Traceability', phonetic: '/ˌtreɪsəˈbɪləti/', meaning: 'Traçabilité', tip: 'L\'accent est sur « BIL » : « tray-suh-BIL-uh-ti ». C\'est un mot de 5 syllabes. Le « a » après « trace » est réduit. Ne dites pas « tré-sa-bi-li-té ».' },
    { word: 'Baseline', phonetic: '/ˈbeɪslaɪn/', meaning: 'Référentiel', tip: 'L\'accent est sur « BASE » : « BAYS-laïn ». C\'est un mot composé. Ne dites pas « bé-slahin ». Le « s » de « line » est sonore dans le « z » de la liaison naturelle si suivie d\'une voyelle.' },
    { word: 'Non-conformity', phonetic: '/ˌnɒnkənˈfɔːməti/', meaning: 'Non-conformité', tip: 'L\'accent est sur « FOR » : « non-kuhn-FOR-muh-ti ». Le « non » est rapide, le « con » est réduit en schwa. La terminaison « -ty » = « ti », pas « té ».' },
  ],
}

// ─── c1-l34: Specification Review ────────────────────────────────────────────────
export const C1_L34: LessonContent = {
  vocab: [
    { english: 'shall', french: 'devra (obligation contractuelle)', phonetic: '/ʃæl/', example: 'The system shall maintain a response time of less than 200 ms under peak load.', exampleTranslation: 'Le système devra maintenir un temps de réponse inférieur à 200 ms en charge de pointe.' },
    { english: 'mandatory', french: 'obligatoire', phonetic: '/ˈmændətɔːri/', example: 'It is mandatory for all operators to complete the safety training before accessing the facility.', exampleTranslation: 'Il est obligatoire pour tous les opérateurs de suivre la formation de sécurité avant d\'accéder à l\'installation.' },
    { english: 'deviation', french: 'écart / dérogation', phonetic: '/ˌdiːviˈeɪʃn/', example: 'Any deviation from the approved design must be documented and authorised by the change control board.', exampleTranslation: 'Tout écart par rapport à la conception approuvée doit être documenté et autorisé par le comité de contrôle des changements.' },
    { english: 'waiver', french: 'dérogation / dispense', phonetic: '/ˈweɪvər/', example: 'A waiver was granted for the legacy subsystem, allowing it to remain in service until the next upgrade cycle.', exampleTranslation: 'Une dérogation a été accordée pour le sous-système existant, lui permettant de rester en service jusqu\'au prochain cycle de mise à niveau.' },
    { english: 'verifiable', french: 'vérifiable', phonetic: '/ˈverɪfaɪəbl/', example: 'Every requirement in the specification must be verifiable through testing, inspection, or demonstration.', exampleTranslation: 'Chaque exigence dans la spécification doit être vérifiable par test, inspection ou démonstration.' },
  ],
  grammar: {
    title: 'Le langage des spécifications : shall, should, may et l\'impératif de précision',
    explanation: 'Le langage des spécifications techniques obéit à des règles rigides codifiées par les normes (RFC 2119, ISO/IEC) : (1) « Shall » = obligation contraignante : « The system shall... » = le système DOIT (impératif). C\'est le modal le plus fort dans une spécification. Ne pas confondre avec « will » (prédiction/intention) ou « must » (obligation légale externe). (2) « Should » = recommandation : « The system should... » = le système DEVRAIT (recommandé mais non obligatoire). « Should » laisse une marge de manœuvre. (3) « May » = permission : « The system may... » = le système PEUT (option autorisée). Ne jamais utiliser « may » pour exprimer une probabilité dans une spécification. (4) Impératif vs déclaratif : l\'impératif (« Maintain a response time below 200 ms ») est direct et non ambigu ; le déclaratif (« The response time shall be below 200 ms ») est traditionnel dans les normes. L\'important est la cohérence au sein d\'un même document — ne mélangez pas les styles. (5) La règle d\'or : chaque exigence doit être unique, vérifiable et non ambiguë. Une exigence qui contient « and » ou « or » est probablement deux exigences. « The system shall be fast and reliable » est inacceptable — ni « fast » ni « reliable » ne sont vérifiables.',
    examples: [
      { sentence: 'The system shall complete a full diagnostic cycle within 60 seconds of startup.', translation: 'Le système devra effectuer un cycle de diagnostic complet dans les 60 secondes suivant le démarrage.', isCorrect: true },
      { sentence: 'The system should be reliable and perform well.', translation: '', isCorrect: false },
      { sentence: 'The operator may override the automatic shutdown sequence by pressing the designated button.', translation: 'L\'opérateur peut remplacer la séquence d\'arrêt automatique en appuyant sur le bouton désigné.', isCorrect: true },
      { sentence: 'A waiver shall be required for any deviation from the approved specification.', translation: 'Une dérogation sera requise pour tout écart par rapport à la spécification approuvée.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The system should be reliable and perform well.', correct: 'The system shall achieve a mean time between failures (MTBF) of at least 10,000 hours and a response time of less than 200 ms.', explanation: 'Deux erreurs : (1) « should » pour une exigence = ce n\'est plus obligatoire. Utilisez « shall ». (2) « reliable and perform well » n\'est pas vérifiable — il faut des critères mesurables (MTBF, temps de réponse). Une spécification doit être précise et vérifiable.' },
      { wrong: 'The system must maintain a response time of less than 200 ms.', correct: 'The system shall maintain a response time of less than 200 ms.', explanation: 'Dans une spécification technique, « must » est réservé aux obligations légales ou réglementaires externes. Pour les exigences du cahier des charges, on utilise « shall ». Cette distinction est normalisée par la RFC 2119 et les pratiques d\'ingénierie systèmes.' },
    ],
  },
  conversation: [
    { speaker: 'Systems Architect Tanaka', role: 'A', text: 'I\'ve flagged several issues in the draft specification. First, requirement 3.2 uses « should » for a safety-critical function — that needs to be « shall ».', translation: 'J\'ai signalé plusieurs problèmes dans le projet de spécification. D\'abord, l\'exigence 3.2 utilise « should » pour une fonction critique pour la sécurité — cela doit être « shall ».' },
    { speaker: 'Spec Author Müller', role: 'B', text: 'You\'re right — « should » implies it\'s optional, which it clearly isn\'t for a safety function. I\'ll also make it verifiable by specifying the exact threshold.', translation: 'Vous avez raison — « should » implique que c\'est optionnel, ce qui n\'est clairement pas le cas pour une fonction de sécurité. Je la rendrai également vérifiable en spécifiant le seuil exact.' },
    { speaker: 'Systems Architect Tanaka', role: 'A', text: 'Good. Second, requirement 4.1 contains an « and » — « The system shall log all errors and generate alerts. » That\'s two requirements in one.', translation: 'Bien. Deuxièmement, l\'exigence 4.1 contient un « and » — « Le système devra journaliser toutes les erreurs et générer des alertes. » Ce sont deux exigences en une.' },
    { speaker: 'Spec Author Müller', role: 'B', text: 'I\'ll split it into 4.1a and 4.1b. Each requirement should stand alone and be independently verifiable — that\'s the principle, isn\'t it?', translation: 'Je la diviserai en 4.1a et 4.1b. Chaque exigence devrait être autonome et indépendamment vérifiable — c\'est le principe, n\'est-ce pas ?' },
    { speaker: 'Systems Architect Tanaka', role: 'A', text: 'Exactly. One more thing — the legacy module currently has a waiver for compliance. Should we include that as a known deviation in the specification?', translation: 'Exactement. Encore une chose — le module existant a actuellement une dérogation de conformité. Devrions-nous l\'inclure comme écart connu dans la spécification ?' },
    { speaker: 'Spec Author Müller', role: 'B', text: 'Definitely. I\'ll add a deviations section. The waiver is valid until the next release, so it must be documented transparently.', translation: 'Absolument. J\'ajouterai une section sur les écarts. La dérogation est valable jusqu\'à la prochaine version, donc elle doit être documentée de manière transparente.' },
  ],
  conversationTitle: 'Revue de spécification : shall, should et vérifiabilité',
  pronunciation: [
    { word: 'Shall', phonetic: '/ʃæl/', meaning: 'Devra (obligation)', tip: 'Prononcez « chæl » — le « a » est ouvert comme dans « cat ». Ne dites pas « chol » ni « chèle ». C\'est un mot d\'une seule syllabe, clair et catégorique comme l\'obligation qu\'il exprime.' },
    { word: 'Mandatory', phonetic: '/ˈmændətɔːri/', meaning: 'Obligatoire', tip: 'L\'accent est sur « MAN » : « MAN-duh-tor-ee ». Le « a » est ouvert. Le « ory » final = « or-ee » (britannique) ou « or-ee » (américain). Ne dites pas « man-da-twar ».' },
    { word: 'Deviation', phonetic: '/ˌdiːviˈeɪʃn/', meaning: 'Écart / Dérogation', tip: 'L\'accent est sur « A » : « dee-vee-AY-shun ». Le « de » initial est long. La terminaison « -tion » = « shun ». Ne dites pas « dé-vi-a-sion ».' },
    { word: 'Waiver', phonetic: '/ˈweɪvər/', meaning: 'Dérogation / Dispense', tip: 'L\'accent est sur « WAY » : « WAY-vuh ». Le « w » initial : arrondissez les lèvres. Le « er » final est doux. Ne confondez pas avec « waver » (/ˈweɪvər/) qui se prononce pareil mais signifie « hésiter ».' },
  ],
}

// ─── c1-l35: Tech Writing Sounds ──────────────────────────────────────────────────
export const C1_L35: LessonContent = {
  vocab: [
    { english: 'document', french: 'document (nom) / documenter (verbe)', phonetic: '/ˈdɒkjumənt/ (n.) / /ˈdɒkjument/ (v.)', example: 'Please document all changes in the revision log.', exampleTranslation: 'Veuillez documenter tous les changements dans le journal des révisions.' },
    { english: 'process', french: 'processus (nom) / traiter (verbe)', phonetic: '/ˈprəʊses/ (n.) / /prəˈses/ (v.)', example: 'The approval process requires sign-off from three stakeholders.', exampleTranslation: 'Le processus d\'approbation nécessite l\'approbation de trois parties prenantes.' },
    { english: 'component', french: 'composant / composante', phonetic: '/kəmˈpəʊnənt/', example: 'Each component shall be tested individually before integration.', exampleTranslation: 'Chaque composant devra être testé individuellement avant l\'intégration.' },
    { english: 'procedure', french: 'procédure', phonetic: '/prəˈsiːdʒər/', example: 'Follow the emergency procedure exactly as written in the manual.', exampleTranslation: 'Suivez la procédure d\'urgence exactement comme écrite dans le manuel.' },
    { english: 'residue', french: 'résidu', phonetic: '/ˈrezɪdjuː/', example: 'No chemical residue shall remain on the surface after the cleaning process.', exampleTranslation: 'Aucun résidu chimique ne devra subsister sur la surface après le processus de nettoyage.' },
  ],
  grammar: {
    title: 'Prononciation en anglais technique : mots que les francophones prononcent mal',
    explanation: 'Les francophones commettent des erreurs de prononciation systématiques en anglais technique, souvent parce que ces mots existent en français avec une prononciation différente : (1) « Document » : le nom et le verbe n\'ont PAS la même prononciation ! Le nom = /ˈdɒkjumənt/ (« DOK-yuh-ment », accent sur « DOC ») ; le verbe = /ˈdɒkjument/ (« DOK-yoo-ment », accent sur « DOC » mais la dernière syllabe est « ment » pas « mənt »). Les francophones disent souvent « do-ku-MAN » à la française. (2) « Process » : le nom = /ˈprəʊses/ (« PRO-ses », accent sur « PRO ») ; le verbe = /prəˈses/ (« pro-SES », accent sur « CES »). Les francophones disent « pro-CESS » avec l\'accent sur la deuxième syllabe, ce qui en anglais fait le VERBE, pas le nom. (3) « Component » : /kəmˈpəʊnənt/ — l\'accent est sur « PO », pas sur « com ». Ne dites pas « kom-po-nan ». (4) « Procedure » : /prəˈsiːdʒər/ — l\'accent est sur « SEE », le « c » = « s » doux, le « dur » final = « jer ». Ne dites pas « pro-sé-dure » à la française. (5) « Residue » : /ˈrezɪdjuː/ — l\'accent est sur « REZ », le « s » = « z » sonore, le « due » = « dyoo » ou « doo ». Ne dites pas « ré-zi-du ». (6) Règle générale : l\'anglais technique est un registre formel — une mauvaise prononciation peut entraîner des malentendus critiques (p. ex. confondre le nom et le verbe « process »).',
    examples: [
      { sentence: 'The process requires that you process each application within 48 hours.', translation: 'Le processus exige que vous traitiez chaque demande dans les 48 heures.', isCorrect: true },
      { sentence: 'Please pro-CESS the document and store it in the archive.', translation: '', isCorrect: false },
      { sentence: 'Each component was inspected for chemical residue before assembly.', translation: 'Chaque composant a été inspecté pour détecter un résidu chimique avant l\'assemblage.', isCorrect: true },
      { sentence: 'Document the procedure carefully so that it can be replicated.', translation: 'Documentez la procédure avec soin afin qu\'elle puisse être reproduite.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Please pro-CESS the document and store it in the archive.', correct: 'Please PRO-cess the DOC-u-ment and store it in the archive.', explanation: 'Quand « process » est un NOM (le processus), l\'accent est sur « PRO ». Quand c\'est un VERBE (traiter), l\'accent est sur « CES ». Ici on parle DU processus, donc c\'est le nom — accent sur « PRO ». Et « document » nom = accent sur « DOC ».' },
      { wrong: 'The com-PO-nent was tested according to the pro-SÉ-dure.', correct: 'The com-PO-nent was tested according to the pro-SEE-jer.', explanation: 'Deux erreurs : (1) « Component » : l\'accent est sur « PO » (correct), mais le « nt » final est clair, pas « nan ». (2) « Procedure » : l\'accent est sur « SEE » et le « dure » = « jer », pas « dure ». Prononcez « pruh-SEE-jer ».' },
    ],
  },
  conversation: [
    { speaker: 'QA Lead Okafor', role: 'A', text: 'I\'ve noticed recurring pronunciation issues in our team meetings. When someone says « the PRO-cess » versus « to pro-CESS », it causes confusion about whether they mean the noun or the verb.', translation: 'J\'ai remarqué des problèmes de prononciation récurrents dans nos réunions d\'équipe. Quand quelqu\'un dit « the PRO-cess » ou « to pro-CESS », cela crée une confusion sur le sens voulu — nom ou verbe.' },
    { speaker: 'Training Coord. Lefèvre', role: 'B', text: 'That\'s a fair point. The same issue arises with « document » — the noun and the verb have different stress patterns. It\'s a common pitfall for francophones.', translation: 'C\'est un bon point. Le même problème se pose avec « document » — le nom et le verbe ont des schémas d\'accentuation différents. C\'est un piège courant pour les francophones.' },
    { speaker: 'QA Lead Okafor', role: 'A', text: 'And « component » — I\'ve heard colleagues say « kom-po-NAN » with the accent on the wrong syllable. In a technical review, that sort of thing undermines credibility.', translation: 'Et « component » — j\'ai entendu des collègues dire « kom-po-NAN » avec l\'accent sur la mauvaise syllabe. Dans une revue technique, ce genre de chose nuit à la crédibilité.' },
    { speaker: 'Training Coord. Lefèvre', role: 'B', text: 'Perhaps we should include a pronunciation module in the next technical writing workshop. It\'s not just about writing — verbal communication in reviews matters too.', translation: 'Peut-être devrions-nous inclure un module de prononciation dans le prochain atelier de rédaction technique. Ce n\'est pas seulement une question d\'écriture — la communication verbale dans les revues compte aussi.' },
    { speaker: 'QA Lead Okafor', role: 'A', text: 'Agreed. I\'d add « residue » and « procedure » to the list. Both are frequently mispronounced and both appear constantly in our specifications.', translation: 'D\'accord. J\'ajouterais « residue » et « procedure » à la liste. Les deux sont fréquemment mal prononcés et apparaissent constamment dans nos spécifications.' },
    { speaker: 'Training Coord. Lefèvre', role: 'B', text: 'Consider it done. I\'ll draft the pronunciation guide this week and circulate it before the next specification review.', translation: 'C\'est fait. Je rédigerai le guide de prononciation cette semaine et le diffuserai avant la prochaine revue de spécification.' },
  ],
  conversationTitle: 'Prononciation technique : quand les mots prêtent à confusion',
  pronunciation: [
    { word: 'Document (noun)', phonetic: '/ˈdɒkjumənt/', meaning: 'Document (nom)', tip: 'L\'accent est sur « DOC » : « DOK-yuh-ment ». La dernière syllabe est réduite. Ne dites PAS « do-ku-MAN » à la française. Le verbe « document » = /ˈdɒkjument/ a la dernière syllabe plus marquée : « ment » et non « mənt ».' },
    { word: 'Process (noun vs verb)', phonetic: '/ˈprəʊses/ (n.) / /prəˈses/ (v.)', meaning: 'Processus / Traiter', tip: 'NOM = « PRO-ses » (accent sur PRO). VERBE = « pro-SES » (accent sur CES). C\'est une distinction critique : « the PRO-cess » ≠ « to pro-CESS ». Les francophones mettent souvent l\'accent sur « CESS » dans les deux cas.' },
    { word: 'Component', phonetic: '/kəmˈpəʊnənt/', meaning: 'Composant', tip: 'L\'accent est sur « PO » : « kum-PO-nent ». Le « com » est réduit. Le « nt » final est clair. Ne dites pas « kom-po-NAN » — l\'accent n\'est JAMAIS sur la dernière syllabe.' },
    { word: 'Residue', phonetic: '/ˈrezɪdjuː/', meaning: 'Résidu', tip: 'L\'accent est sur « REZ » : « REZ-ih-dyoo ». Le « s » = « z » sonore. Le « due » = « dyoo » (britannique) ou « doo » (américain). Ne dites PAS « ré-zi-du » à la française.' },
  ],
}
