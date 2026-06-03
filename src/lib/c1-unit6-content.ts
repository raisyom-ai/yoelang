import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C1 ADVANCED — UNIT 6: MEDICAL RESEARCH (c1-l26 through c1-l30)
// YOELANG English Learning App for Francophone Users
// Advanced: clinical trials, epidemiology, impersonal passive, ethics, medical register
// ════════════════════════════════════════════════════════════════════════════════

// ─── c1-l26: Medical Research Terms ──────────────────────────────────────────────
export const C1_L26: LessonContent = {
  vocab: [
    { english: 'placebo', french: 'placebo', phonetic: '/pləˈsiːboʊ/', example: 'The control group received a placebo rather than the active compound.', exampleTranslation: 'Le groupe témoin a reçu un placebo plutôt que le composé actif.' },
    { english: 'clinical trial', french: 'essai clinique', phonetic: '/ˈklɪnɪkəl ˈtraɪəl/', example: 'Phase III clinical trials are required before regulatory approval.', exampleTranslation: 'Les essais cliniques de phase III sont requis avant l\'approbation réglementaire.' },
    { english: 'epidemiology', french: 'épidémiologie', phonetic: '/ˌepɪdiːmiˈɒlədʒi/', example: 'Epidemiology has revealed a strong correlation between air pollution and respiratory disease.', exampleTranslation: 'L\'épidémiologie a révélé une forte corrélation entre la pollution atmosphérique et les maladies respiratoires.' },
    { english: 'contraindication', french: 'contre-indication', phonetic: '/ˌkɒntrəˌɪndɪˈkeɪʃn/', example: 'Pregnancy is a contraindication for this medication.', exampleTranslation: 'La grossesse est une contre-indication pour ce médicament.' },
    { english: 'cohort', french: 'cohorte', phonetic: '/ˈkoʊhɔːrt/', example: 'The longitudinal study followed a cohort of 10,000 participants over two decades.', exampleTranslation: 'L\'étude longitudinale a suivi une cohorte de 10 000 participants sur deux décennies.' },
  ],
  grammar: {
    title: 'Le vocabulaire de la recherche médicale : distinctions critiques entre termes apparentés',
    explanation: 'La recherche médicale exige une précision terminologique absolue — une confusion peut avoir des conséquences graves : (1) « Placebo » ≠ « dummy » ≠ « sham » : un placebo est une substance inactive administrée comme contrôle ; un dummy désigne un dispositif inactif (ex. : dummy scanner) ; un sham désigne une intervention factice en chirurgie (sham surgery). (2) « Clinical trial » ≠ « observational study » ≠ « case report » : un essai clinique implique une intervention contrôlée randomisée ; une étude observationnelle observe sans intervenir ; un case report décrit un cas unique. (3) « Contraindication » ≠ « side effect » ≠ « adverse event » : une contre-indication = raison de NE PAS prescrire ; un side effect = effet secondaire attendu et connu ; un adverse event = événement indésirable inattendu. (4) « Cohort » ≠ « population » ≠ « sample » : une cohorte est un groupe suivi dans le temps avec des caractéristiques définies ; la population est l\'ensemble théorique ; l\'échantillon (sample) est le sous-groupe sélectionné.',
    examples: [
      { sentence: 'The double-blind clinical trial demonstrated a statistically significant reduction in mortality compared to the placebo group.', translation: 'L\'essai clinique en double aveugle a démontré une réduction statistiquement significative de la mortalité par rapport au groupe placebo.', isCorrect: true },
      { sentence: 'Known hypersensitivity to the active ingredient is a contraindication for this treatment.', translation: 'L\'hypersensibilité connue au principe actif est une contre-indication pour ce traitement.', isCorrect: true },
      { sentence: 'The observational cohort was randomly assigned to receive either the drug or the placebo.', translation: '', isCorrect: false },
      { sentence: 'The cohort of elderly patients was monitored for adverse events over a five-year period.', translation: 'La cohorte de patients âgés a été surveillée pour des événements indésirables sur une période de cinq ans.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The observational cohort was randomly assigned to receive either the drug or the placebo.', correct: 'The clinical trial participants were randomly assigned to receive either the drug or the placebo.', explanation: 'On ne peut pas « assigner aléatoirement » une cohorte observationnelle — par définition, une étude observationnelle n\'implique aucune intervention ni randomisation. La randomisation est propre aux essais cliniques.' },
      { wrong: 'This medication has many contraindications like headaches and nausea.', correct: 'This medication may cause side effects such as headaches and nausea.', explanation: 'Les maux de tête et les nausées sont des effets secondaires (side effects), pas des contre-indications. Une contre-indication est une raison d\'éviter le traitement (ex. : grossesse, allergie), pas un effet indésirable du traitement.' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Laurent', role: 'A', text: 'The results from the Phase III clinical trial are in. The active compound outperformed the placebo by a significant margin.', translation: 'Les résultats de l\'essai clinique de phase III sont arrivés. Le composé actif a surpassé le placebo d\'une marge significative.' },
    { speaker: 'Prof. Nakamura', role: 'B', text: 'That\'s encouraging. Were there any notable contraindications identified during the trial?', translation: 'C\'est encourageant. Y a-t-il eu des contre-indications notables identifiées pendant l\'essai ?' },
    { speaker: 'Dr. Laurent', role: 'A', text: 'Yes. Hepatic impairment is a contraindication — the drug is metabolised primarily in the liver, so patients with liver disease must be excluded.', translation: 'Oui. L\'insuffisance hépatique est une contre-indication — le médicament est métabolisé principalement dans le foie, donc les patients atteints d\'une maladie hépatique doivent être exclus.' },
    { speaker: 'Prof. Nakamura', role: 'B', text: 'What about the cohort demographics? Was the sample representative of the broader population?', translation: 'Qu\'en est-il de la démographie de la cohorte ? L\'échantillon était-il représentatif de la population plus large ?' },
    { speaker: 'Dr. Laurent', role: 'A', text: 'The cohort was predominantly Caucasian and aged 45 to 70. We\'ll need further epidemiological data to generalise the findings.', translation: 'La cohorte était principalement caucasienne et âgée de 45 à 70 ans. Nous aurons besoin de données épidémiologiques supplémentaires pour généraliser les résultats.' },
    { speaker: 'Prof. Nakamura', role: 'B', text: 'Agreed. I\'d recommend a follow-up study with a more diverse cohort before we submit for regulatory approval.', translation: 'D\'accord. Je recommanderais une étude de suivi avec une cohorte plus diversifiée avant de soumettre pour approbation réglementaire.' },
  ],
  conversationTitle: 'Résultats d\'essai clinique : cohorte, placebo et contre-indications',
  pronunciation: [
    { word: 'Placebo', phonetic: '/pləˈsiːboʊ/', meaning: 'Placebo', tip: 'Prononcez « pluh-SEE-boh » — l\'accent est sur « SEE ». En anglais, le « o » final se prononce « oh », pas « o » fermé français. Ne dites pas « pla-sé-bo ».' },
    { word: 'Epidemiology', phonetic: '/ˌepɪdiːmiˈɒlədʒi/', meaning: 'Épidémiologie', tip: 'L\'accent est sur « OL » : « e-pi-dee-mee-OL-uh-jee ». C\'est un mot de 6 syllabes — ne l\'avalez pas. La terminaison « -ology » = « ol-uh-jee ».' },
    { word: 'Contraindication', phonetic: '/ˌkɒntrəˌɪndɪˈkeɪʃn/', meaning: 'Contre-indication', tip: 'L\'accent secondaire est sur « CON » et l\'accent principal sur « CA » : « kon-truh-in-di-KAY-shun ». Ne mettez pas l\'accent sur « in ».' },
    { word: 'Cohort', phonetic: '/ˈkoʊhɔːrt/', meaning: 'Cohorte', tip: 'Prononcez « KO-hort » — l\'accent est sur « KO ». Le « h » est bien prononcé. Ne dites pas « ko-ort » en sautant le « h ».' },
  ],
}

// ─── c1-l27: Impersonal Passive ──────────────────────────────────────────────────
export const C1_L27: LessonContent = {
  vocab: [
    { english: 'to establish', french: 'établir / prouver', phonetic: '/ɪˈstæblɪʃ/', example: 'It has been established that prolonged exposure increases the risk by 40%.', exampleTranslation: 'Il a été établi que l\'exposition prolongée augmente le risque de 40 %.' },
    { english: 'to postulate', french: 'postuler / poser comme hypothèse', phonetic: '/ˈpɒstjuleɪt/', example: 'It has been postulated that the variant originated through zoonotic transmission.', exampleTranslation: 'Il a été postulé que le variant est apparu par transmission zoonotique.' },
    { english: 'to correlate', french: 'corréler', phonetic: '/ˈkɒrəleɪt/', example: 'It is widely accepted that dietary habits correlate with cardiovascular health.', exampleTranslation: 'Il est largement admis que les habitudes alimentaires sont corrélées à la santé cardiovasculaire.' },
    { english: 'to hypothesise', french: 'formuler une hypothèse', phonetic: '/haɪˈpɒθəsaɪz/', example: 'It was hypothesised that the drug would inhibit tumour growth.', exampleTranslation: 'Il a été formulé l\'hypothèse que le médicament inhiberait la croissance tumorale.' },
    { english: 'to warrant', french: 'justifier / nécessiter', phonetic: '/ˈwɒrənt/', example: 'These findings warrant further investigation before any conclusions can be drawn.', exampleTranslation: 'Ces résultats justifient une investigation plus approfondie avant de pouvoir tirer des conclusions.' },
  ],
  grammar: {
    title: 'La voix impersonnelle passive dans l\'écriture médicale et scientifique',
    explanation: 'L\'écriture scientifique et médicale en anglais privilégie la voix impersonnelle passive pour objectiver les résultats et distancier l\'auteur : (1) « It + passive + that... » : « It has been established that... » (Il a été établi que...) ; « It is widely acknowledged that... » (Il est largement reconnu que...) ; « It was demonstrated that... » (Il a été démontré que...). Cette structure met l\'accent sur le résultat plutôt que sur le chercheur. (2) « There + passive + to be... » : « There is considered to be... » (Il est considéré qu\'il y a...) ; « There are thought to be... » (On pense qu\'il y a...) ; « There was found to be... » (Il s\'est avéré qu\'il y avait...). (3) Les adverbes d\'atténuation (hedging adverbs) se placent souvent dans la structure impersonnelle : « It is generally accepted that... » ; « It may be argued that... » ; « It could be suggested that... ». (4) Différence clé avec le français : en français, on dit « Il a été montré que... » (construction similaire), mais en anglais, on n\'utilise JAMAIS « It is said that » dans un article scientifique — on utilise « It has been reported that » ou « It is widely held that ». (5) « Warrant » ≠ « justify » : « warrant » implique que les preuves actuelles rendent quelque chose nécessaire ; « justify » implique de prouver que c\'est juste ou correct.',
    examples: [
      { sentence: 'It has been established that the mutation increases susceptibility to autoimmune disorders.', translation: 'Il a été établi que la mutation augmente la susceptibilité aux maladies auto-immunes.', isCorrect: true },
      { sentence: 'There is considered to be a strong association between the biomarker and disease progression.', translation: 'Il est considéré qu\'il existe une forte association entre le biomarqueur et la progression de la maladie.', isCorrect: true },
      { sentence: 'They have established that the drug is effective.', translation: '', isCorrect: false },
      { sentence: 'It may be postulated that environmental factors contribute to the observed variance.', translation: 'Il peut être postulé que des facteurs environnementaux contribuent à la variance observée.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'They have established that the drug is effective.', correct: 'It has been established that the drug is effective.', explanation: 'En écriture scientifique, on évite le sujet personnel « they » et on privilégie la construction impersonnelle passive « It has been established that... ». Cela objectivise le résultat et le détache de l\'auteur.' },
      { wrong: 'There is considered to exists a link between diet and health.', correct: 'There is considered to be a link between diet and health.', explanation: 'Après « there is considered to », on utilise « be » (infinitif), pas « exists ». La structure est : « There is + past participle + to be + sujet ». « Exist » ne s\'emploie pas dans cette construction.' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Moreau', role: 'A', text: 'It has been established that the novel compound reduces inflammation markers by 35 percent in the target cohort.', translation: 'Il a été établi que le nouveau composé réduit les marqueurs inflammatoires de 35 pour cent dans la cohorte cible.' },
    { speaker: 'Dr. Okonkwo', role: 'B', text: 'That is a significant finding. However, it is widely acknowledged that inflammation markers alone do not confirm clinical efficacy.', translation: 'C\'est un résultat significatif. Cependant, il est largement reconnu que les marqueurs inflammatoires seuls ne confirment pas l\'efficacité clinique.' },
    { speaker: 'Dr. Moreau', role: 'A', text: 'Indeed. It was hypothesised that the anti-inflammatory effect would translate into symptomatic improvement, but the data remain inconclusive.', translation: 'En effet. Il a été formulé l\'hypothèse que l\'effet anti-inflammatoire se traduirait par une amélioration symptomatique, mais les données restent non concluantes.' },
    { speaker: 'Dr. Okonkwo', role: 'B', text: 'There is thought to be a threshold effect — perhaps the dosage needs adjustment before clinical benefits become apparent.', translation: 'On pense qu\'il existe un effet de seuil — peut-être que le dosage nécessite un ajustement avant que les bénéfices cliniques ne deviennent apparents.' },
    { speaker: 'Dr. Moreau', role: 'A', text: 'That warrants a dose-response study. It may be argued that our current protocol underestimates the optimal therapeutic range.', translation: 'Cela justifie une étude dose-réponse. On pourrait avancer que notre protocole actuel sous-estime la plage thérapeutique optimale.' },
    { speaker: 'Dr. Okonkwo', role: 'B', text: 'I concur. Let us design a follow-up trial with escalating doses. It is generally accepted that dose-finding studies are essential at this stage.', translation: 'Je suis d\'accord. Concevons un essai de suivi avec des doses croissantes. Il est généralement admis que les études de détermination de dose sont essentielles à ce stade.' },
  ],
  conversationTitle: 'Discussion de résultats : voix impersonnelle passive en contexte médical',
  pronunciation: [
    { word: 'Established', phonetic: '/ɪˈstæblɪʃt/', meaning: 'Établi', tip: 'Prononcez « ih-STAB-lisht » — l\'accent est sur « STAB ». Le « ed » final se prononce « t » car le son précédent est « sh » (son sourd). Ne dites pas « é-sta-blis-ed ».' },
    { word: 'Postulated', phonetic: '/ˈpɒstjuleɪtɪd/', meaning: 'Postulé', tip: 'L\'accent est sur « POS » : « POS-choo-lay-tid ». Le « tu » se prononce « choo » comme dans « statue ». Le « -ed » final se prononce « id » car le son précédent est « t ».' },
    { word: 'Hypothesised', phonetic: '/haɪˈpɒθəsaɪzd/', meaning: 'Formulé (une hypothèse)', tip: 'L\'accent est sur « PO » : « hi-PO-thuh-sizd ». Le « th » est expiré (θ). Le « -sed » final se prononce « sizd » comme dans « realised ». Ne dites pas « i-po-thé-sis-ed ».' },
    { word: 'Warrant', phonetic: '/ˈwɒrənt/', meaning: 'Justifier', tip: 'Prononcez « WOR-unt » — l\'accent est sur « WOR ». Le « a » se prononce comme « o » ouvert. Ne dites pas « oua-rant ».' },
  ],
}

// ─── c1-l28: Clinical Discussion ─────────────────────────────────────────────────
export const C1_L28: LessonContent = {
  vocab: [
    { english: 'efficacy', french: 'efficacité', phonetic: '/ˈefɪkəsi/', example: 'The efficacy of the treatment was assessed across multiple endpoints.', exampleTranslation: 'L\'efficacité du traitement a été évaluée selon plusieurs critères.' },
    { english: 'adverse event', french: 'événement indésirable', phonetic: '/ˈædvɜːrs ɪˈvent/', example: 'Two serious adverse events were reported during the trial, both in the treatment arm.', exampleTranslation: 'Deux événements indésirables graves ont été signalés pendant l\'essai, les deux dans le bras thérapeutique.' },
    { english: 'statistical significance', french: 'signification statistique', phonetic: '/stəˈtɪstɪkəl sɪɡˈnɪfɪkəns/', example: 'The difference reached statistical significance at the p < 0.01 level.', exampleTranslation: 'La différence a atteint la signification statistique au seuil de p < 0,01.' },
    { english: 'treatment arm', french: 'bras thérapeutique', phonetic: '/ˈtriːtmənt ɑːrm/', example: 'Patients in the treatment arm received 200 mg daily for twelve weeks.', exampleTranslation: 'Les patients dans le bras thérapeutique ont reçu 200 mg par jour pendant douze semaines.' },
    { english: 'endpoint', french: 'critère d\'évaluation', phonetic: '/ˈendpɔɪnt/', example: 'The primary endpoint was overall survival at 24 months.', exampleTranslation: 'Le critère d\'évaluation principal était la survie globale à 24 mois.' },
  ],
  grammar: {
    title: 'Le discours clinique : rapporter des résultats avec précision et nuance',
    explanation: 'La présentation de résultats cliniques exige un équilibre entre précision et prudence : (1) « Efficacy » ≠ « effectiveness » : l\'efficacy mesure la performance dans des conditions idéales (essai clinique) ; l\'effectiveness mesure la performance en conditions réelles. On ne les interchange pas. (2) L\'expression de la signification statistique : « reached statistical significance » (a atteint la signification) ≠ « approached statistical significance » (a approché la signification = pas significatif). On dit « The results were statistically significant » mais on évite « The results proved that... » — on dit « The results suggest that... » ou « The results indicate that... ». (3) « Adverse event » ≠ « side effect » : un adverse event est tout événement médical défavorable pendant l\'essai, qu\'il soit lié ou non au traitement ; un side effect est un effet attendu et connu. (4) « Treatment arm » ≠ « control arm » : le traitement arm reçoit l\'intervention ; le control arm reçoit le placebo ou le standard de soins. (5) « Primary endpoint » ≠ « secondary endpoint » : le critère principal est celui pour lequel l\'essai est conçu ; les critères secondaires sont exploratoires.',
    examples: [
      { sentence: 'The treatment arm demonstrated superior efficacy compared to the control arm, with the primary endpoint reaching statistical significance.', translation: 'Le bras thérapeutique a démontré une efficacité supérieure par rapport au bras contrôle, le critère principal atteignant la signification statistique.', isCorrect: true },
      { sentence: 'The drug proved that it cures the disease.', translation: '', isCorrect: false },
      { sentence: 'Three adverse events were reported, though only one was judged to be treatment-related.', translation: 'Trois événements indésirables ont été signalés, bien qu\'un seul ait été jugé lié au traitement.', isCorrect: true },
      { sentence: 'The secondary endpoints approached but did not reach statistical significance.', translation: 'Les critères secondaires ont approché mais n\'ont pas atteint la signification statistique.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The drug proved that it cures the disease.', correct: 'The results suggest that the drug may be effective in treating the disease.', explanation: 'En discours clinique, on n\'utilise jamais « prove » — la preuve absolue n\'existe pas en médecine. On utilise « suggest », « indicate », ou « demonstrate ». De plus, « cure » est un terme fort qu\'on réserve à des cas exceptionnels — on préfère « effective in treating ».' },
      { wrong: 'The efficacy of the drug in real-world patients was demonstrated in the clinical trial.', correct: 'The efficacy of the drug was demonstrated in the clinical trial; its effectiveness in real-world settings remains to be established.', explanation: 'Un essai clinique mesure l\'efficacy (conditions idéales), pas l\'effectiveness (conditions réelles). Confondre les deux est une erreur conceptuelle majeure en recherche médicale.' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Chen', role: 'A', text: 'Let\'s review the data from the trial. The treatment arm showed a 28 percent improvement on the primary endpoint — overall survival at 24 months.', translation: 'Passons en revue les données de l\'essai. Le bras thérapeutique a montré une amélioration de 28 pour cent sur le critère principal — la survie globale à 24 mois.' },
    { speaker: 'Dr. Fernandez', role: 'B', text: 'Was that statistically significant?', translation: 'Était-ce statistiquement significatif ?' },
    { speaker: 'Dr. Chen', role: 'A', text: 'Yes, p < 0.005. The secondary endpoints — progression-free survival and quality-of-life scores — also favoured the treatment arm, though with smaller effect sizes.', translation: 'Oui, p < 0,005. Les critères secondaires — la survie sans progression et les scores de qualité de vie — ont également favorisé le bras thérapeutique, bien qu\'avec des tailles d\'effet plus modestes.' },
    { speaker: 'Dr. Fernandez', role: 'B', text: 'And the adverse event profile? That was a concern in the Phase II trial.', translation: 'Et le profil d\'événements indésirables ? C\'était une préoccupation dans l\'essai de phase II.' },
    { speaker: 'Dr. Chen', role: 'A', text: 'Encouragingly, the incidence of serious adverse events was comparable between the treatment and control arms. The most commonly reported side effects were mild nausea and fatigue.', translation: 'De manière encourageante, l\'incidence d\'événements indésirables graves était comparable entre les bras thérapeutique et contrôle. Les effets secondaires les plus fréquemment signalés étaient des nausées légères et de la fatigue.' },
    { speaker: 'Dr. Fernandez', role: 'B', text: 'The efficacy data are compelling. I believe these results warrant submission for regulatory review, provided we can demonstrate effectiveness in a broader population.', translation: 'Les données d\'efficacité sont convaincantes. Je crois que ces résultats justifient une soumission pour examen réglementaire, à condition que nous puissions démontrer l\'effectivité dans une population plus large.' },
  ],
  conversationTitle: 'Discussion clinique : analyse des résultats d\'un essai thérapeutique',
  pronunciation: [
    { word: 'Efficacy', phonetic: '/ˈefɪkəsi/', meaning: 'Efficacité', tip: 'L\'accent est sur « EF » : « EF-ih-kuh-see ». Ne mettez pas l\'accent sur « i » comme en français « ef-fi-ca-ci-té ». Le « a » est réduit en schwa.' },
    { word: 'Adverse', phonetic: '/ˈædvɜːrs/', meaning: 'Indésirable / défavorable', tip: 'Prononcez « AD-vurs » — l\'accent est sur « AD ». Le « a » est ouvert comme dans « cat ». Ne dites pas « ad-vers » à la française.' },
    { word: 'Endpoint', phonetic: '/ˈendpɔɪnt/', meaning: 'Critère d\'évaluation', tip: 'Prononcez « END-point » — l\'accent est sur « END ». Le « oi » se prononce « oï » comme dans « point ». Pas de liaison entre les deux syllabes.' },
    { word: 'Statistical', phonetic: '/stəˈtɪstɪkəl/', meaning: 'Statistique', tip: 'L\'accent est sur « TIS » : « stuh-TIS-tih-kuhl ». Les deux premières syllabes sont réduites. Ne dites pas « sta-tis-ti-kal » avec des syllabes égales.' },
  ],
}

// ─── c1-l29: Research Ethics ─────────────────────────────────────────────────────
export const C1_L29: LessonContent = {
  vocab: [
    { english: 'informed consent', french: 'consentement éclairé', phonetic: '/ɪnˈfɔːrmd kənˈsent/', example: 'Informed consent must be obtained from all participants before enrollment.', exampleTranslation: 'Le consentement éclairé doit être obtenu de tous les participants avant l\'inscription.' },
    { english: 'to disclose', french: 'divulguer / révéler', phonetic: '/dɪsˈkloʊz/', example: 'Researchers are obligated to disclose any potential conflicts of interest.', exampleTranslation: 'Les chercheurs sont tenus de divulguer tout conflit d\'intérêts potentiel.' },
    { english: 'vulnerable population', french: 'population vulnérable', phonetic: '/ˈvʌlnərəbəl ˌpɒpjuˈleɪʃn/', example: 'Additional safeguards shall be implemented when enrolling vulnerable populations.', exampleTranslation: 'Des garanties supplémentaires doivent être mises en place lors de l\'inscription de populations vulnérables.' },
    { english: 'to breach', french: 'enfreindre / violer', phonetic: '/briːtʃ/', example: 'Any breach of protocol must be reported to the ethics committee within 48 hours.', exampleTranslation: 'Toute infraction au protocole doit être signalée au comité d\'éthique dans les 48 heures.' },
    { english: 'fiduciary duty', french: 'obligation fiduciaire', phonetic: '/fɪˈdjuːʃəri ˈdjuːti/', example: 'Physicians have a fiduciary duty to prioritise their patients\' welfare above all else.', exampleTranslation: 'Les médecins ont une obligation fiduciaire de privilégier le bien-être de leurs patients par-dessus tout.' },
  ],
  grammar: {
    title: 'Les verbes modaux d\'obligation en éthique de la recherche : must, shall, are required to, are obligated to, have a duty to',
    explanation: 'L\'éthique de la recherche médicale utilise un système hiérarchique de verbes modaux pour exprimer différents degrés et types d\'obligation : (1) « Must » = obligation absolue et impérative : « Participants must be fully informed of the risks. » C\'est l\'obligation la plus forte — une violation constitue une faute éthique grave. (2) « Shall » = obligation formelle dans les protocoles et directives : « The principal investigator shall ensure compliance with the protocol. » Utilisé dans les documents officiels (guidelines, codes de conduite), « shall » a une force juridique contraignante, similaire à « must » mais avec une connotation plus institutionnelle. (3) « Are required to » = obligation imposée par une autorité externe : « Researchers are required to obtain ethics committee approval. » Cette forme souligne que l\'obligation vient d\'un règlement ou d\'une institution, pas d\'un choix moral. (4) « Are obligated to » = obligation morale et déontologique : « Physicians are obligated to report adverse events. » Cette forme insiste sur le devoir professionnel et déontologique. (5) « Have a duty to » = obligation éthique fondamentale liée au rôle : « Doctors have a duty to act in the best interest of their patients. » C\'est l\'obligation la plus noble — elle relève de l\'éthique professionnelle intrinsèque. (6) Hiérarchie d\'obligation : « have a duty to » > « are obligated to » > « must » / « shall » > « are required to » > « should ». (7) « Should » ≠ « must » en éthique : « should » = recommandation éthique ; « must » = exigence absolue.',
    examples: [
      { sentence: 'Researchers must obtain informed consent before enrolling any participant in a clinical trial.', translation: 'Les chercheurs doivent obtenir le consentement éclairé avant d\'inscrire tout participant dans un essai clinique.', isCorrect: true },
      { sentence: 'Physicians have a duty to disclose any financial interest they may have in the outcome of the study.', translation: 'Les médecins ont le devoir de divulguer tout intérêt financier qu\'ils pourraient avoir dans les résultats de l\'étude.', isCorrect: true },
      { sentence: 'Researchers should obtain informed consent before enrolling participants.', translation: '', isCorrect: false },
      { sentence: 'All adverse events shall be reported to the institutional review board within 72 hours.', translation: 'Tous les événements indésirables doivent être signalés au comité d\'éthique institutionnel dans les 72 heures.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Researchers should obtain informed consent before enrolling participants.', correct: 'Researchers must obtain informed consent before enrolling participants.', explanation: 'Le consentement éclairé n\'est pas une recommandation (« should ») — c\'est une obligation éthique et juridique absolue (« must »). Utiliser « should » pour le consentement éclairé est une faute éthique grave.' },
      { wrong: 'Doctors have a duty to submit their reports on time.', correct: 'Doctors are required to submit their reports on time.', explanation: '« Have a duty to » implique une obligation éthique fondamentale liée au rôle du médecin. Soumettre un rapport à temps est une exigence administrative, pas un devoir éthique — on utilise « are required to » ou « must ».' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Achebe', role: 'A', text: 'We need to discuss the ethical framework for the upcoming paediatric trial. Children constitute a vulnerable population, so we are obligated to implement additional safeguards.', translation: 'Nous devons discuter du cadre éthique du prochain essai pédiatrique. Les enfants constituent une population vulnérable, nous sommes donc tenus de mettre en place des garanties supplémentaires.' },
    { speaker: 'Prof. Lindgren', role: 'B', text: 'Absolutely. Informed consent must be obtained from the parents or legal guardians, and assent from the children themselves where appropriate.', translation: 'Absolument. Le consentement éclairé doit être obtenu des parents ou tuteurs légaux, et l\'assentiment des enfants eux-mêmes lorsque c\'est approprié.' },
    { speaker: 'Dr. Achebe', role: 'A', text: 'Furthermore, investigators shall disclose any financial ties to the pharmaceutical sponsor. Transparency is non-negotiable.', translation: 'De plus, les investigateurs doivent divulguer tout lien financier avec le sponsor pharmaceutique. La transparence n\'est pas négociable.' },
    { speaker: 'Prof. Lindgren', role: 'B', text: 'I agree. And as physicians, we have a duty to prioritise the welfare of the child participants over any scientific or commercial interest.', translation: 'Je suis d\'accord. Et en tant que médecins, nous avons le devoir de privilégier le bien-être des enfants participants sur tout intérêt scientifique ou commercial.' },
    { speaker: 'Dr. Achebe', role: 'A', text: 'What about data monitoring? Any breach of confidentiality must be reported immediately, and researchers are required to follow the data protection protocol strictly.', translation: 'Qu\'en est-il de la surveillance des données ? Toute violation de la confidentialité doit être signalée immédiatement, et les chercheurs sont tenus de suivre strictement le protocole de protection des données.' },
    { speaker: 'Prof. Lindgren', role: 'B', text: 'Indeed. Our fiduciary duty to these families demands nothing less. I\'ll draft the ethics proposal incorporating all these requirements.', translation: 'En effet. Notre obligation fiduciaire envers ces familles n\'exige rien de moins. Je rédigerai la proposition éthique en intégrant toutes ces exigences.' },
  ],
  conversationTitle: 'Éthique de la recherche : obligations et populations vulnérables',
  pronunciation: [
    { word: 'Consent', phonetic: '/kənˈsent/', meaning: 'Consentement', tip: 'L\'accent est sur « SENT » : « kun-SENT ». Le « con » initial est réduit en schwa. Ne dites pas « kon-sent » avec l\'accent sur la première syllabe.' },
    { word: 'Disclose', phonetic: '/dɪsˈkloʊz/', meaning: 'Divulguer', tip: 'L\'accent est sur « CLOSE » : « dis-KLOHZ ». Le « s » final est sonore comme dans « close » (fermer). Ne dites pas « dis-klos » avec « s » sourd.' },
    { word: 'Vulnerable', phonetic: '/ˈvʌlnərəbəl/', meaning: 'Vulnérable', tip: 'L\'accent est sur « VUL » : « VUL-ner-uh-buhl ». En anglais, on ne prononce PAS le premier « e » comme en français « vul-né-rable ». Le « a » est réduit.' },
    { word: 'Fiduciary', phonetic: '/fɪˈdjuːʃəri/', meaning: 'Fiduciaire', tip: 'L\'accent est sur « DU » : « fih-DOO-shee-uh-ri ». Le « ci » se prononce « shee ». Le « a » est réduit en schwa. Ne dites pas « fi-du-si-aire » à la française.' },
  ],
}

// ─── c1-l30: Medical Sounds ──────────────────────────────────────────────────────
export const C1_L30: LessonContent = {
  vocab: [
    { english: 'spectrum', french: 'spectre', phonetic: '/ˈspektrəm/', example: 'The drug is effective across a broad spectrum of bacterial infections.', exampleTranslation: 'Le médicament est efficace sur un large spectre d\'infections bactériennes.' },
    { english: 'prophylaxis', french: 'prophylaxie', phonetic: '/ˌprɒfɪˈlæksɪs/', example: 'Pre-exposure prophylaxis has dramatically reduced transmission rates.', exampleTranslation: 'La prophylaxie pré-exposition a considérablement réduit les taux de transmission.' },
    { english: 'aetiology', french: 'étiologie', phonetic: '/ˌiːtiˈɒlədʒi/', example: 'The aetiology of the syndrome remains unknown despite extensive research.', exampleTranslation: 'L\'étiologie du syndrome reste inconnue malgré des recherches approfondies.' },
    { english: 'symptomatology', french: 'symptomatologie', phonetic: '/ˌsɪmptəməˈtɒlədʒi/', example: 'The symptomatology of the disease varies significantly between paediatric and adult patients.', exampleTranslation: 'La symptomatologie de la maladie varie considérablement entre les patients pédiatriques et adultes.' },
    { english: 'pathogenesis', french: 'pathogenèse', phonetic: '/ˌpæθəˈdʒenɪsɪs/', example: 'Understanding the pathogenesis of the virus is essential for vaccine development.', exampleTranslation: 'Comprendre la pathogenèse du virus est essentiel pour le développement d\'un vaccin.' },
  ],
  grammar: {
    title: 'La prononciation médicale : pièges pour francophones — mots d\'origine grecque et latine',
    explanation: 'La terminologie médicale anglaise est dominée par des racines grecques et latines que les francophones prononcent souvent à la française, ce qui crée des malentendus : (1) « Spectrum » : /ˈspektrəm/ — l\'accent est sur « SPEC », pas sur « trum ». Ne dites pas « spek-TRUM ». (2) « Prophylaxis » : /ˌprɒfɪˈlæksɪs/ — l\'accent est sur « LAX », pas sur « pro ». Le « y » grec se prononce « ih » en anglais, pas « i » français. Ne dites pas « pro-fi-lax-see » à la française. (3) « Aetiology » (ou « etiology » en anglais américain) : /ˌiːtiˈɒlədʒi/ — l\'accent est sur « OL ». Le « ae » initial se prononce « ee » (une seule voyelle longue), pas « é » comme en français. (4) « Symptomatology » : /ˌsɪmptəməˈtɒlədʒi/ — l\'accent est sur « TOL ». La syllabe « ma » est réduite en schwa. Ne dites pas « sinp-to-ma-to-lo-jee ». (5) « Pathogenesis » : /ˌpæθəˈdʒenɪsɪs/ — l\'accent est sur « GEN ». Le « th » est expiré (θ), jamais « t ». La terminaison « -esis » se prononce « esis » avec un « e » ouvert, pas « ézis » à la française. (6) Règle générale : en anglais médical, l\'accent tonique tombe rarement sur les mêmes syllabes qu\'en français. Il faut systématiquement vérifier la prononciation des termes médicaux.',
    examples: [
      { sentence: 'The aetiology of the outbreak was traced to a novel zoonotic pathogen.', translation: 'L\'étiologie de l\'épidémie a été attribuée à un nouvel agent pathogène zoonotique.', isCorrect: true },
      { sentence: 'Prophylaxis is recommended for all travellers to endemic regions.', translation: 'La prophylaxie est recommandée pour tous les voyageurs vers les régions endémiques.', isCorrect: true },
      { sentence: 'The pathogénèse of the disease involves multiple genetic factors.', translation: '', isCorrect: false },
      { sentence: 'The symptomatology suggests an autoimmune disorder rather than an infectious one.', translation: 'La symptomatologie suggère un trouble auto-immun plutôt qu\'infectieux.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The pathogénèse of the disease involves multiple genetic factors.', correct: 'The pathogenesis of the disease involves multiple genetic factors.', explanation: 'On n\'utilise JAMAIS un mot français dans un contexte anglais. « Pathogenesis » est le terme anglais — prononcé /ˌpæθəˈdʒenɪsɪs/ avec l\'accent sur « GEN » et le « th » expiré. Ne mélangez pas les langues.' },
      { wrong: 'L\'étiologie (prononcé à la française « é-ti-o-lo-jie »)', correct: 'Aetiology pronounced /ˌiːtiˈɒlədʒi/', explanation: 'En anglais, « aetiology » se prononce « ee-tee-OL-uh-jee » — le « ae » = « ee » long, l\'accent est sur « OL ». La prononciation française « é-ti-o-lo-jie » est incompréhensible pour un anglophone.' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Patel', role: 'A', text: 'The pathogenesis of this condition is far more complex than we initially assumed. It involves both genetic predisposition and environmental triggers.', translation: 'La pathogenèse de cette affection est bien plus complexe que nous ne le pensions initialement. Elle implique à la fois une prédisposition génétique et des déclencheurs environnementaux.' },
    { speaker: 'Dr. Mercier', role: 'B', text: 'That aligns with our findings. The aetiology appears multifactorial — no single agent can account for the full spectrum of presentation.', translation: 'Cela correspond à nos résultats. L\'étiologie semble multifactorielle — aucun agent unique ne peut rendre compte du spectre complet de la présentation.' },
    { speaker: 'Dr. Patel', role: 'A', text: 'Have you considered pre-exposure prophylaxis for high-risk groups? The data from the Kenyan cohort are quite promising.', translation: 'Avez-vous envisagé la prophylaxie pré-exposition pour les groupes à haut risque ? Les données de la cohorte kényane sont très prometteuses.' },
    { speaker: 'Dr. Mercier', role: 'B', text: 'We have. But the symptomatology varies so widely between subgroups that a one-size-fits-all prophylactic approach may not be appropriate.', translation: 'Oui. Mais la symptomatologie varie tellement entre les sous-groupes qu\'une approche prophylactique universelle pourrait ne pas être appropriée.' },
    { speaker: 'Dr. Patel', role: 'A', text: 'A fair point. Perhaps stratified prophylaxis based on risk profiles would be more effective — and more ethical.', translation: 'Un bon point. Peut-être qu\'une prophylaxie stratifiée basée sur les profils de risque serait plus efficace — et plus éthique.' },
    { speaker: 'Dr. Mercier', role: 'B', text: 'I agree. Let\'s propose a stratified protocol to the ethics board. If approved, we could begin enrolment by next quarter.', translation: 'Je suis d\'accord. Proposons un protocole stratifié au comité d\'éthique. S\'il est approuvé, nous pourrions commencer l\'inscription dès le prochain trimestre.' },
  ],
  conversationTitle: 'Terminologie médicale : pathogenèse, étiologie et prophylaxie',
  pronunciation: [
    { word: 'Spectrum', phonetic: '/ˈspektrəm/', meaning: 'Spectre', tip: 'L\'accent est sur « SPEC » : « SPEC-trum ». Le « u » est réduit. Ne dites pas « spek-TRUM » à la française avec l\'accent sur la dernière syllabe.' },
    { word: 'Prophylaxis', phonetic: '/ˌprɒfɪˈlæksɪs/', meaning: 'Prophylaxie', tip: 'L\'accent est sur « LAX » : « prof-ih-LAK-sis ». Le « y » grec = « ih ». Ne dites pas « pro-fee-lax-see » ni « pro-fi-lax-see » à la française.' },
    { word: 'Aetiology', phonetic: '/ˌiːtiˈɒlədʒi/', meaning: 'Étiologie', tip: 'L\'accent est sur « OL » : « ee-tee-OL-uh-jee ». Le « ae » = « ee » long. En américain : « etiology » = « ee-tee-OL-uh-jee » également. Ne dites pas « é-ti-o-lo-jie ».' },
    { word: 'Pathogenesis', phonetic: '/ˌpæθəˈdʒenɪsɪs/', meaning: 'Pathogenèse', tip: 'L\'accent est sur « GEN » : « path-oh-JEN-ih-sis ». Le « th » est expiré (θ). Ne dites pas « pa-to-jé-nèz » — l\'accent, le « th » et la terminaison sont tous différents en anglais.' },
  ],
}
