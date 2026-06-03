import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// B2 UPPER INTERMEDIATE — UNIT 7: ENGINEERING & INNOVATION (b2-l31 through b2-l35)
// YOELANG English Learning App for Francophone Users
// Upper-intermediate: engineering vocabulary, technical descriptions, design review, process explanation
// ════════════════════════════════════════════════════════════════════════════════

// ─── b2-l31: Engineering Vocabulary ────────────────────────────────────────────────
export const B2_L31: LessonContent = {
  vocab: [
    { english: 'prototype', french: 'prototype', phonetic: '/ˈproʊtətaɪp/', example: 'The team built a working prototype to test the new mechanism.', exampleTranslation: "L'équipe a construit un prototype fonctionnel pour tester le nouveau mécanisme." },
    { english: 'patent', french: 'brevet', phonetic: '/ˈpætnt/', example: 'The company filed a patent for their innovative design.', exampleTranslation: "L'entreprise a déposé un brevet pour leur conception innovante." },
    { english: 'infrastructure', french: 'infrastructure', phonetic: '/ˈɪnfrəstrʌktʃər/', example: 'The government invested heavily in transport infrastructure.', exampleTranslation: 'Le gouvernement a fortement investi dans les infrastructures de transport.' },
    { english: 'specifications', french: 'spécifications / cahier des charges', phonetic: '/ˌspesɪfɪˈkeɪʃnz/', example: 'The bridge was built according to strict safety specifications.', exampleTranslation: 'Le pont a été construit selon des spécifications de sécurité strictes.' },
    { english: 'tolerance', french: 'tolérance (marge)', phonetic: '/ˈtɒlərəns/', example: 'The component must be manufactured to a tolerance of 0.01 millimetres.', exampleTranslation: 'Le composant doit être fabriqué avec une tolérance de 0,01 millimètre.' },
  ],
  grammar: {
    title: 'Le vocabulaire de l\'ingénierie : faux amis et nuances',
    explanation: 'Le vocabulaire technique anglais contient de nombreux pièges pour les francophones : (1) « Prototype » se prononce différemment en anglais : /ˈproʊtətaɪp/ — l\'accent est sur la première syllabe et le « y » final = « aï ». (2) « Patent » : /ˈpætnt/ — l\'accent est sur la première syllabe et le « t » du milieu peut être presque silencieux (« PA-tnt »). « To patent » = déposer un brevet. (3) « Specifications » : attention, en anglais ce mot est TOUJOURS au pluriel dans ce contexte — on dit « the specifications » (les spécifications), pas « a specification ». On peut dire « a technical spec » (familièrement « specs »). (4) « Tolerance » en ingénierie ≠ tolérance sociale. En ingénierie, c\'est la marge d\'erreur acceptable : « manufacturing tolerance », « dimensional tolerance ». (5) « Infrastructure » : en anglais, le mot est indénombrable — on dit « infrastructure » (sans article), pas « an infrastructure ».',
    examples: [
      { sentence: 'The prototype exceeded all performance specifications during testing.', translation: 'Le prototype a dépassé toutes les spécifications de performance lors des tests.', isCorrect: true },
      { sentence: 'They filed a specification for their new invention.', translation: '', isCorrect: false },
      { sentence: 'The structural tolerance of the material must be carefully calculated.', translation: 'La tolérance structurelle du matériau doit être calculée avec soin.', isCorrect: true },
      { sentence: 'The city\'s infrastructure needs significant investment.', translation: "L'infrastructure de la ville nécessite un investissement important.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'They filed a specification for their new invention.', correct: 'They filed a patent for their new invention.', explanation: 'On dépose un « patent » (brevet), pas une « specification ». Les spécifications décrivent les exigences techniques, le brevet protège une invention.' },
      { wrong: 'The country needs an infrastructure upgrade.', correct: 'The country needs an infrastructure upgrade. / The country needs infrastructure improvements.', explanation: '« Infrastructure » est généralement indénombrable en anglais. On dit « infrastructure improvements » ou « the infrastructure needs upgrading », mais pas « an infrastructure ».' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Müller', role: 'A', text: 'How\'s the prototype coming along? Are we on schedule?', translation: 'Comment avance le prototype ? Sommes-nous dans les temps ?' },
    { speaker: 'Kenji', role: 'B', text: 'We\'ve completed the first iteration. The tolerance on the shaft was too tight, so we had to adjust the specifications.', translation: 'Nous avons terminé la première itération. La tolérance sur l\'arbre était trop serrée, donc nous avons dû ajuster les spécifications.' },
    { speaker: 'Dr. Müller', role: 'A', text: 'That\'s concerning. Has the patent application been filed yet? We need to protect the intellectual property before the conference.', translation: "C'est préoccupant. La demande de brevet a-t-elle été déposée ? Nous devons protéger la propriété intellectuelle avant la conférence." },
    { speaker: 'Kenji', role: 'B', text: 'Yes, the patent was filed last month. The lawyers said we should have approval within 18 months.', translation: 'Oui, le brevet a été déposé le mois dernier. Les avocats ont dit que nous devrions avoir l\'approbation dans 18 mois.' },
    { speaker: 'Dr. Müller', role: 'A', text: 'Good. And the infrastructure requirements for the factory — have they been finalised?', translation: 'Bien. Et les exigences d\'infrastructure pour l\'usine — ont-elles été finalisées ?' },
    { speaker: 'Kenji', role: 'B', text: 'Almost. The specifications are being reviewed by the civil engineering team. We should have the green light by Friday.', translation: 'Presque. Les spécifications sont en cours de révision par l\'équipe de génie civil. Nous devrions avoir le feu vert d\'ici vendredi.' },
  ],
  conversationTitle: 'Projet d\'ingénierie : prototype et brevet',
  pronunciation: [
    { word: 'Prototype', phonetic: '/ˈproʊtətaɪp/', meaning: 'Prototype', tip: 'L\'accent est sur « PRO » : « PRO-tuh-taïp ». Le « y » final se prononce « aï » comme dans « type ». Ne dites pas « pro-to-tipe » à la française.' },
    { word: 'Patent', phonetic: '/ˈpætnt/', meaning: 'Brevet', tip: 'Prononcez « PAT-nt » — l\'accent est sur « PAT » et le « e » du milieu est presque avalé. En anglais britannique, certains prononcent « PAY-tnt ». Ne dites pas « pa-tent » avec deux syllabes claires.' },
    { word: 'Specifications', phonetic: '/ˌspesɪfɪˈkeɪʃnz/', meaning: 'Spécifications', tip: 'L\'accent est sur « KAY » : « spes-uh-fi-KAY-shunz ». La terminaison « -tions » = « shunz ». On dit souvent « specs » familièrement.' },
    { word: 'Infrastructure', phonetic: '/ˈɪnfrəstrʌktʃər/', meaning: 'Infrastructure', tip: 'L\'accent est sur « IN » : « IN-fruh-struk-chur ». Le « frac » du français devient « fruh ». Le « ure » final = « chur » comme dans « nature ».' },
  ],
}

// ─── b2-l32: Technical Descriptions ────────────────────────────────────────────────
export const B2_L32: LessonContent = {
  vocab: [
    { english: 'diameter', french: 'diamètre', phonetic: '/daɪˈæmɪtər/', example: 'The pipe has a diameter of 50 centimetres.', exampleTranslation: 'Le tuyau a un diamètre de 50 centimètres.' },
    { english: 'corrosion', french: 'corrosion', phonetic: '/kəˈroʊʒən/', example: 'Corrosion weakened the steel structure over time.', exampleTranslation: 'La corrosion a affaibli la structure en acier avec le temps.' },
    { english: 'tensile strength', french: 'résistance à la traction', phonetic: '/ˈtensaɪl streŋθ/', example: 'The material\'s tensile strength determines its load-bearing capacity.', exampleTranslation: 'La résistance à la traction du matériau détermine sa capacité de charge.' },
    { english: 'hydraulic', french: 'hydraulique', phonetic: '/haɪˈdrɔːlɪk/', example: 'The hydraulic system powers the lifting mechanism.', exampleTranslation: 'Le système hydraulique alimente le mécanisme de levage.' },
    { english: 'thermal conductivity', french: 'conductivité thermique', phonetic: '/ˈθɜːrməl ˌkɒndʌkˈtɪvəti/', example: 'Copper has high thermal conductivity, making it ideal for heat exchangers.', exampleTranslation: 'Le cuivre a une conductivité thermique élevée, ce qui le rend idéal pour les échangeurs de chaleur.' },
  ],
  grammar: {
    title: 'Décrire des processus et des spécifications techniques en anglais',
    explanation: 'Les descriptions techniques en anglais suivent des conventions précises que les francophones doivent maîtriser : (1) L\'ordre des adjectifs : dimension + propriété + matière : « a 50cm steel pipe » (pas « a steel 50cm pipe ») ; « a cylindrical stainless-steel tank ». (2) Les unités de mesure : en anglais technique, on écrit « 50 cm » ou « 50-centimetre » (adjectif composé) : « a 50-centimetre pipe » (avec trait d\'union et singulier). (3) La voix passive pour les processus : « The component is machined to precise tolerances » (Le composant est usiné avec des tolérances précises) — on se concentre sur le processus, pas sur l\'agent. (4) Les expressions de proportion et de comparaison : « twice as thick as », « three times the diameter of », « proportionally greater than ». (5) Le conditionnel pour les recommandations techniques : « It would be advisable to... », « The design should incorporate... », « The material ought to withstand... »',
    examples: [
      { sentence: 'The 25-millimetre steel rod is subjected to heat treatment to increase its tensile strength.', translation: 'La tige en acier de 25 millimètres est soumise à un traitement thermique pour augmenter sa résistance à la traction.', isCorrect: true },
      { sentence: 'The steel 25-millimetres rod is subjected to heat treatment.', translation: '', isCorrect: false },
      { sentence: 'The hydraulic system should be inspected every six months to prevent corrosion.', translation: 'Le système hydraulique devrait être inspecté tous les six mois pour prévenir la corrosion.', isCorrect: true },
      { sentence: 'The new alloy is three times as strong as the previous one.', translation: 'Le nouvel alliage est trois fois plus résistant que le précédent.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The steel 25-millimetres rod is subjected to heat treatment.', correct: 'The 25-millimetre steel rod is subjected to heat treatment.', explanation: 'L\'ordre des adjectifs en anglais : dimension AVANT matière. De plus, dans un adjectif composé, le nom reste au singulier : « 25-millimetre » (pas « millimetres »).' },
      { wrong: 'The pipe has a diameter of 50 centimetres length.', correct: 'The pipe has a diameter of 50 centimetres. / The pipe has a length of 2 metres and a diameter of 50 centimetres.', explanation: 'Le diamètre est une mesure, pas une longueur. Ne mélangez pas « diameter » (diamètre) et « length » (longueur). Ce sont des dimensions différentes.' },
    ],
  },
  conversation: [
    { speaker: 'Ingrid', role: 'A', text: 'Can you describe the specifications for the new heat exchanger?', translation: 'Pouvez-vous décrire les spécifications du nouvel échangeur de chaleur ?' },
    { speaker: 'Raj', role: 'B', text: 'Certainly. It requires a 30-centimetre copper tube with high thermal conductivity and a wall thickness of 3 millimetres.', translation: 'Certainement. Il nécessite un tube en cuivre de 30 centimètres avec une conductivité thermique élevée et une épaisseur de paroi de 3 millimètres.' },
    { speaker: 'Ingrid', role: 'A', text: 'What about corrosion resistance? The previous model degraded after two years.', translation: 'Qu\'en est-il de la résistance à la corrosion ? Le modèle précédent s\'est dégradé après deux ans.' },
    { speaker: 'Raj', role: 'B', text: 'We\'ve addressed that. The unit should be coated with a corrosion-resistant polymer that extends the lifespan to at least ten years.', translation: 'Nous avons réglé cela. L\'unité devrait être recouverte d\'un polymère anti-corrosion qui prolonge la durée de vie à au moins dix ans.' },
    { speaker: 'Ingrid', role: 'A', text: 'And the hydraulic connections — are they compatible with the existing infrastructure?', translation: 'Et les connexions hydrauliques — sont-elles compatibles avec l\'infrastructure existante ?', },
    { speaker: 'Raj', role: 'B', text: 'Yes, the diameter matches the current system. It would be advisable to replace the seals at the same time, though.', translation: 'Oui, le diamètre correspond au système actuel. Il serait toutefois conseillé de remplacer les joints en même temps.' },
  ],
  conversationTitle: 'Spécifications techniques : échangeur de chaleur',
  pronunciation: [
    { word: 'Diameter', phonetic: '/daɪˈæmɪtər/', meaning: 'Diamètre', tip: 'L\'accent est sur « AM » : « daï-AM-uh-ter ». Ne dites PAS « di-a-mè-ter » à la française. Le « i » initial est long comme dans « die ».' },
    { word: 'Corrosion', phonetic: '/kəˈroʊʒən/', meaning: 'Corrosion', tip: 'L\'accent est sur « RO » : « kuh-RO-zhun ». Le « sion » se prononce « zhun » comme dans « vision ». Ne mettez pas l\'accent sur la première syllabe.' },
    { word: 'Hydraulic', phonetic: '/haɪˈdrɔːlɪk/', meaning: 'Hydraulique', tip: 'L\'accent est sur « DRAU » : « haï-DRO-lik ». Le « y » = « aï » long. Le « au » = « o » ouvert comme dans « author ».' },
    { word: 'Tensile', phonetic: '/ˈtensaɪl/', meaning: 'De traction', tip: 'Prononcez « TEN-saïl » — l\'accent est sur « TEN ». Le « ile » final se prononce « aïl » comme dans « missile ». Ne dites pas « ten-seel ».' },
  ],
}

// ─── b2-l33: Design Review ────────────────────────────────────────────────────────
export const B2_L33: LessonContent = {
  vocab: [
    { english: 'feasibility study', french: 'étude de faisabilité', phonetic: '/ˌfiːzəˈbɪləti ˈstʌdi/', example: 'A feasibility study was conducted before approving the project budget.', exampleTranslation: 'Une étude de faisabilité a été menée avant d\'approuver le budget du projet.' },
    { english: 'load-bearing', french: 'porteur / de charge', phonetic: '/ˈloʊd ˈberɪŋ/', example: 'The load-bearing walls cannot be removed without compromising the structure.', exampleTranslation: 'Les murs porteurs ne peuvent pas être retirés sans compromettre la structure.' },
    { english: 'redundancy', french: 'redondance (sécurité)', phonetic: '/rɪˈdʌndənsi/', example: 'The system includes redundancy to ensure continuous operation if one component fails.', exampleTranslation: 'Le système inclut une redondance pour assurer un fonctionnement continu si un composant tombe en panne.' },
    { english: 'to iterate', french: 'itérer / réviser', phonetic: '/ˈɪtəreɪt/', example: 'We need to iterate the design based on the simulation results.', exampleTranslation: 'Nous devons itérer la conception en fonction des résultats de la simulation.' },
    { english: 'compliance', french: 'conformité', phonetic: '/kəmˈplaɪəns/', example: 'The design must ensure compliance with international safety standards.', exampleTranslation: 'La conception doit assurer la conformité avec les normes de sécurité internationales.' },
  ],
  grammar: {
    title: 'Participer à une revue de conception en anglais : structures et registre',
    explanation: 'Les revues de conception (design reviews) en anglais suivent un format et un registre spécifiques : (1) Présenter un problème : « We\'ve identified an issue with... » / « There\'s a concern regarding... » / « The current design may not meet... ». (2) Proposer une solution : « One approach would be to... » / « We could consider... » / « An alternative solution might involve... ». (3) Demander des clarifications : « Could you elaborate on...? » / « What\'s the rationale behind...? » / « How does this address the issue of...? ». (4) Exprimer un désaccord professionnel : « I see your point, but I\'d suggest... » / « While that\'s one option, I\'m concerned that... » / « I\'m not fully convinced that... ». (5) Atteindre un consensus : « It sounds like we\'re aligned on... » / « Shall we proceed with...? » / « Let\'s agree to... and revisit this in the next iteration. »',
    examples: [
      { sentence: 'We\'ve identified an issue with the load-bearing capacity of the support beams.', translation: 'Nous avons identifié un problème avec la capacité de charge des poutres de support.', isCorrect: true },
      { sentence: 'That design is bad, you need to change it.', translation: '', isCorrect: false },
      { sentence: 'One approach would be to introduce redundancy in the cooling system.', translation: 'Une approche consisterait à introduire une redondance dans le système de refroidissement.', isCorrect: true },
      { sentence: 'Could you elaborate on how this design ensures compliance with the regulations?', translation: 'Pourriez-vous expliquer comment cette conception assure la conformité avec les réglementations ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'That design is bad, you need to change it.', correct: 'I have concerns about that design. Would it be possible to explore alternative approaches?', explanation: 'En revue de conception, évitez les jugements directs comme « bad ». Exprimez des préoccupations professionnelles et proposez des alternatives : « I have concerns about... » + suggestion constructive.' },
      { wrong: 'We need to make redundancy in the system.', correct: 'We need to build redundancy into the system. / The system needs to incorporate redundancy.', explanation: 'On ne « fait » pas de la redondance. On « builds redundancy into » un système, ou on « incorporates redundancy ». C\'est un concept de sécurité, pas une action simple.' },
    ],
  },
  conversation: [
    { speaker: 'Amara', role: 'A', text: 'Let\'s move to item three on the agenda — the design review for the bridge extension. Kenji, could you walk us through the current status?', translation: 'Passons au point trois de l\'ordre du jour — la revue de conception pour l\'extension du pont. Kenji, pourriez-vous nous présenter l\'état actuel ?' },
    { speaker: 'Kenji', role: 'B', text: 'Certainly. The feasibility study confirmed the project is viable, but we\'ve identified an issue with the load-bearing calculations for the northern section.', translation: 'Certainement. L\'étude de faisabilité a confirmé que le projet est viable, mais nous avons identifié un problème avec les calculs de charge pour la section nord.' },
    { speaker: 'Amara', role: 'A', text: 'Could you elaborate on that? What specific concern do you have?', translation: 'Pourriez-vous développer ? Quelle préoccupation spécifique avez-vous ?' },
    { speaker: 'Kenji', role: 'B', text: 'The current design may not meet compliance standards for heavy vehicle loads. One approach would be to reinforce the support columns and incorporate redundancy in the tension cables.', translation: 'La conception actuelle pourrait ne pas satisfaire les normes de conformité pour les charges de véhicules lourds. Une approche consisterait à renforcer les colonnes de support et à incorporer une redondance dans les câbles de tension.' },
    { speaker: 'Amara', role: 'A', text: 'I see your point. While that\'s one option, I\'m concerned about the additional cost and timeline impact.', translation: 'Je comprends votre point. Bien que ce soit une option, je m\'inquiète de l\'impact sur le coût et le calendrier supplémentaires.' },
    { speaker: 'Kenji', role: 'B', text: 'Understood. We could iterate on the design to find a more cost-effective solution. Shall we schedule a follow-up session next Thursday?', translation: 'Compris. Nous pourrions itérer sur la conception pour trouver une solution plus rentable. Devons-nous planifier une session de suivi jeudi prochain ?' },
  ],
  conversationTitle: 'Revue de conception : extension de pont',
  pronunciation: [
    { word: 'Feasibility', phonetic: '/ˌfiːzəˈbɪləti/', meaning: 'Faisabilité', tip: 'L\'accent est sur « BIL » : « fee-zuh-BIL-uh-ti ». C\'est un mot long de 5 syllabes. Le « a » de « bility » est réduit en schwa.' },
    { word: 'Redundancy', phonetic: '/rɪˈdʌndənsi/', meaning: 'Redondance', tip: 'L\'accent est sur « DAN » : « rih-DAN-si ». Le « e » initial est un schwa rapide. Ne mettez pas l\'accent sur « re » comme en français.' },
    { word: 'Compliance', phonetic: '/kəmˈplaɪəns/', meaning: 'Conformité', tip: 'L\'accent est sur « PLI » : « kuhm-PLAÏ-uhns ». Le « i » est long. Le « ance » final est réduit. Ne dites pas « kom-pli-ance ».' },
    { word: 'Iterate', phonetic: '/ˈɪtəreɪt/', meaning: 'Itérer', tip: 'L\'accent est sur « IT » : « IT-uh-rayt ». Ne confondez pas avec « irritate » (irriter). Le « e » final se prononce « ayt » comme dans « create ».' },
  ],
}

// ─── b2-l34: Process Explanation ────────────────────────────────────────────────────
export const B2_L34: LessonContent = {
  vocab: [
    { english: 'to assemble', french: 'assembler', phonetic: '/əˈsembl/', example: 'The components are assembled on the production line in a specific order.', exampleTranslation: 'Les composants sont assemblés sur la ligne de production dans un ordre spécifique.' },
    { english: 'to fabricate', french: 'fabriquer', phonetic: '/ˈfæbrɪkeɪt/', example: 'The parts are fabricated using computer-aided manufacturing.', exampleTranslation: 'Les pièces sont fabriquées en utilisant la fabrication assistée par ordinateur.' },
    { english: 'yield', french: 'rendement / production', phonetic: '/jiːld/', example: 'The manufacturing process has a yield rate of 95%.', exampleTranslation: 'Le processus de fabrication a un taux de rendement de 95 %.' },
    { english: 'to calibrate', french: 'calibrer / étalonner', phonetic: '/ˈkælɪbreɪt/', example: 'The sensors must be calibrated before each production run.', exampleTranslation: 'Les capteurs doivent être calibrés avant chaque cycle de production.' },
    { english: 'batch', french: 'lot / fournée', phonetic: '/bætʃ/', example: 'Each batch of components is tested for quality assurance.', exampleTranslation: 'Chaque lot de composants est testé pour l\'assurance qualité.' },
  ],
  grammar: {
    title: 'Expliquer un processus : voix passive, connecteurs séquentiels et expressions de durée',
    explanation: 'L\'explication de processus techniques en anglais exige des structures spécifiques : (1) La voix passive séquentielle : « First, the raw material is cut to size. Then, it is shaped using a CNC machine. Next, the component is assembled with other parts. Finally, the product is tested and calibrated. » Chaque étape utilise la voix passive pour se concentrer sur le processus, pas sur l\'agent. (2) Les connecteurs séquentiels : « First / Initially » → « Then / Next / Subsequently » → « After that / Following this » → « Finally / Ultimately ». (3) Les expressions de durée et fréquence : « at a rate of 500 units per hour », « over a period of 48 hours », « at regular intervals », « on a daily basis ». (4) Le présent simple pour les processus permanents : « The material IS heated to 500°C » (pas « is being heated » ni « will be heated »). (5) Les expressions de condition et résultat : « Provided that the temperature is maintained, the yield remains stable » ; « If the calibration is off, the entire batch must be discarded ».',
    examples: [
      { sentence: 'First, the steel plates are cut to the required dimensions. Then, they are welded together and subsequently inspected for defects.', translation: 'D\'abord, les plaques d\'acier sont coupées aux dimensions requises. Ensuite, elles sont soudées ensemble et par la suite inspectées pour détecter des défauts.', isCorrect: true },
      { sentence: 'First the steel plates is cut to dimensions.', translation: '', isCorrect: false },
      { sentence: 'Each batch is calibrated at regular intervals to ensure consistency.', translation: 'Chaque lot est calibré à intervalles réguliers pour assurer la cohérence.', isCorrect: true },
      { sentence: 'Provided that the assembly process follows the specifications, the yield rate should exceed 90%.', translation: 'À condition que le processus d\'assemblage suive les spécifications, le taux de rendement devrait dépasser 90 %.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'First the steel plates is cut to dimensions.', correct: 'First, the steel plates are cut to the required dimensions.', explanation: '« Steel plates » est au pluriel, donc le verbe doit être « are » (pluriel), pas « is » (singulier). Ajoutez aussi une virgule après « First » et précisez « the required dimensions ».' },
      { wrong: 'The process is consisting of three stages.', correct: 'The process consists of three stages.', explanation: '« Consist of » est un verbe d\'état — il ne s\'utilise PAS à la forme progressive (« is consisting »). On dit « consists of », tout simplement.' },
    ],
  },
  conversation: [
    { speaker: 'Sofia', role: 'A', text: 'Could you walk me through the manufacturing process for the new circuit boards?', translation: 'Pourriez-vous me guider à travers le processus de fabrication des nouveaux circuits imprimés ?' },
    { speaker: 'Wei', role: 'B', text: 'Of course. Initially, the raw PCB substrate is cut into panels. Then, the copper layer is laminated onto the surface.', translation: 'Bien sûr. Initialement, le substrat PCB brut est coupé en panneaux. Ensuite, la couche de cuivre est stratifiée sur la surface.' },
    { speaker: 'Sofia', role: 'A', text: 'And after that? How are the circuits etched?', translation: 'Et après cela ? Comment les circuits sont-ils gravés ?' },
    { speaker: 'Wei', role: 'B', text: 'Subsequently, the circuit pattern is printed using photolithography. Following this, the excess copper is etched away, leaving only the desired traces.', translation: 'Par la suite, le motif du circuit est imprimé par photolithographie. Après cela, l\'excès de cuivre est gravé, ne laissant que les pistes souhaitées.' },
    { speaker: 'Sofia', role: 'A', text: 'What about quality control? At what stage are the boards calibrated and tested?', translation: 'Qu\'en est-il du contrôle qualité ? À quel stade les cartes sont-elles calibrées et testées ?' },
    { speaker: 'Wei', role: 'B', text: 'Each batch is inspected after assembly. Finally, the finished boards are calibrated and tested at regular intervals to ensure a yield rate above 98%.', translation: 'Chaque lot est inspecté après assemblage. Enfin, les cartes finies sont calibrées et testées à intervalles réguliers pour assurer un taux de rendement supérieur à 98 %.' },
  ],
  conversationTitle: 'Processus de fabrication : circuits imprimés',
  pronunciation: [
    { word: 'Assemble', phonetic: '/əˈsembl/', meaning: 'Assembler', tip: 'L\'accent est sur « SEM » : « uh-SEM-bl ». Le « a » initial est un schwa rapide. Ne dites pas « a-san-bl » à la française.' },
    { word: 'Fabricate', phonetic: '/ˈfæbrɪkeɪt/', meaning: 'Fabriquer', tip: 'L\'accent est sur « FAB » : « FAB-ri-kayt ». Le « a » est très ouvert comme dans « cat ». Ne mettez pas l\'accent sur la dernière syllabe.' },
    { word: 'Calibrate', phonetic: '/ˈkælɪbreɪt/', meaning: 'Calibrer', tip: 'L\'accent est sur « CAL » : « KAL-uh-brayt ». Le « i » du milieu est réduit en schwa. Le « ate » final = « ayt ».' },
    { word: 'Yield', phonetic: '/jiːld/', meaning: 'Rendement', tip: 'Prononcez « yeeld » — le « ie » = « ee » long comme dans « see ». Le « d » final est doux. Ne dites pas « yild » avec un « i » court.' },
  ],
}

// ─── b2-l35: Engineering Sounds ────────────────────────────────────────────────────
export const B2_L35: LessonContent = {
  vocab: [
    { english: 'machinery', french: 'machinerie / machines', phonetic: '/məˈʃiːnəri/', example: 'The factory invested in new machinery to increase production capacity.', exampleTranslation: "L'usine a investi dans de nouvelles machines pour augmenter la capacité de production." },
    { english: 'aluminium', french: 'aluminium', phonetic: '/ˌæljʊˈmɪniəm/', example: 'Aluminium is widely used in aerospace engineering due to its lightweight properties.', exampleTranslation: "L'aluminium est largement utilisé en ingénierie aérospatiale en raison de ses propriétés légères." },
    { english: 'welding', french: 'soudure', phonetic: '/ˈweldɪŋ/', example: 'Welding requires proper ventilation and protective equipment.', exampleTranslation: 'La soudure nécessite une ventilation adéquate et un équipement de protection.' },
    { english: 'turbine', french: 'turbine', phonetic: '/ˈtɜːrbaɪn/', example: 'The wind turbine generates enough electricity for 3,000 homes.', exampleTranslation: "L'éolienne génère assez d'électricité pour 3 000 foyers." },
    { english: 'schematic', french: 'schéma / plan', phonetic: '/skiːˈmætɪk/', example: 'The engineer drew a schematic of the electrical circuit.', exampleTranslation: "L'ingénieur a dessiné un schéma du circuit électrique." },
  ],
  grammar: {
    title: 'La prononciation des termes d\'ingénierie : pièges pour francophones',
    explanation: 'Les termes d\'ingénierie anglais sont remplis de pièges phonétiques pour les francophones : (1) « Machinery » : /məˈʃiːnəri/ — l\'accent est sur « SHEE » et le « ch » = « sh ». Ne dites PAS « ma-chi-ne-ri » à la française. (2) « Aluminium » (britannique) vs « Aluminum » (américain) : le britannique a 5 syllabes /ˌæljʊˈmɪniəm/ (al-you-MIN-ee-um), l\'américain en a 4 /əˈluːmɪnəm/ (uh-LOO-min-um). Choisissez une version et soyez cohérent. (3) « Welding » : /ˈweldɪŋ/ — le « e » est court comme dans « well », pas « oueld ». Le « ng » = langue contre le palais. (4) « Turbine » : /ˈtɜːrbaɪn/ — l\'accent est sur « TUR » et le « ine » final se prononce « aïn » (comme dans « fine »), PAS « een ». (5) « Schematic » : /skiːˈmætɪk/ — le « sch » = « sk » (pas « sh » !). C\'est la même règle que pour « school » et « scheme ».',
    examples: [
      { sentence: 'The machinery in the factory needs to be upgraded.', translation: 'La machinerie de l\'usine doit être mise à niveau.', isCorrect: true },
      { sentence: 'The sche-matic shows the turbine layout.', translation: '', isCorrect: false },
      { sentence: 'Aluminium components are fabricated using precision welding techniques.', translation: 'Les composants en aluminium sont fabriqués en utilisant des techniques de soudure de précision.', isCorrect: true },
      { sentence: 'The schematic diagram illustrates the hydraulic circuit.', translation: 'Le schéma illustre le circuit hydraulique.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The sche-matic shows the turbine layout.', correct: 'The schematic (SKI-mat-ik) shows the turbine layout.', explanation: '« Schematic » se prononce « ski-MA-tik » avec le « sch » = « sk » (comme dans « school »), PAS « sh ». C\'est l\'erreur la plus courante des francophones avec ce mot.' },
      { wrong: 'The tur-BEEN generates electricity.', correct: 'The TUR-bine generates electricity.', explanation: '« Turbine » se prononce « TUR-baïn » avec l\'accent sur « TUR » et le « ine » final = « aïn » (comme « fine »). Ne dites pas « tur-BEEN » à la française.' },
    ],
  },
  conversation: [
    { speaker: 'Lars', role: 'A', text: 'I\'ve been reviewing the schematic for the new turbine installation. There are a few things I\'d like to clarify.', translation: "J'ai revu le schéma de la nouvelle installation de turbine. Il y a quelques points que j'aimerais clarifier." },
    { speaker: 'Priya', role: 'B', text: 'Of course. Is it regarding the welding specifications for the aluminium casing?', translation: 'Bien sûr. Est-ce concernant les spécifications de soudure pour le carter en aluminium ?' },
    { speaker: 'Lars', role: 'A', text: 'Exactly. The schematic shows standard welding, but shouldn\'t we use TIG welding for aluminium components?', translation: 'Exactement. Le schéma indique une soudure standard, mais ne devrions-nous pas utiliser la soudure TIG pour les composants en aluminium ?' },
    { speaker: 'Priya', role: 'B', text: 'You\'re right. I\'ll update the specifications. Also, the machinery for the testing phase needs to be recalibrated — the last batch showed some anomalies.', translation: "Vous avez raison. Je mettrai à jour les spécifications. De plus, la machinerie pour la phase de test doit être recalibrée — le dernier lot a montré quelques anomalies." },
    { speaker: 'Lars', role: 'A', text: 'Good catch. Let\'s make sure the calibration is done before we run the next production cycle.', translation: 'Bonne observation. Assurons-nous que la calibration est faite avant le prochain cycle de production.' },
    { speaker: 'Priya', role: 'B', text: 'Agreed. I\'ll coordinate with the quality team and send you the updated schematic by end of day.', translation: "D'accord. Je coordonnerai avec l'équipe qualité et vous enverrai le schéma mis à jour d'ici la fin de la journée." },
  ],
  conversationTitle: 'Installation de turbine : schéma et soudure',
  pronunciation: [
    { word: 'Machinery', phonetic: '/məˈʃiːnəri/', meaning: 'Machinerie', tip: 'L\'accent est sur « SHEE » : « muh-SHEE-nuh-ri ». Le « ch » = « sh ». En américain : « muh-SHEE-ner-ee » (4 syllabes). Ne dites PAS « ma-chi-ne-ri ».' },
    { word: 'Aluminium', phonetic: '/ˌæljʊˈmɪniəm/', meaning: 'Aluminium', tip: 'Britannique : « al-you-MIN-ee-um » (5 syllabes). Américain : « uh-LOO-min-um » (4 syllabes, « aluminum »). L\'accent est sur « MIN » dans les deux cas.' },
    { word: 'Turbine', phonetic: '/ˈtɜːrbaɪn/', meaning: 'Turbine', tip: 'L\'accent est sur « TUR » : « TUR-baïn ». Le « ine » final = « aïn » comme dans « fine ». Ne dites PAS « tur-BEEN » à la française.' },
    { word: 'Schematic', phonetic: '/skiːˈmætɪk/', meaning: 'Schéma', tip: 'Le « sch » = « sk » : « ski-MA-tik ». C\'est comme « school » et « scheme » — JAMAIS « sh ». L\'accent est sur « MA ».' },
  ],
}
