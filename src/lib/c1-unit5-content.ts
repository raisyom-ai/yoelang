import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C1 ADVANCED — UNIT 5: INTERNATIONAL RELATIONS (c1-l21 through c1-l25)
// YOELANG English Learning App for Francophone Users
// Advanced: IR vocabulary, formal discourse markers, diplomatic crisis, summit language, IR pronunciation
// ════════════════════════════════════════════════════════════════════════════════

// ─── c1-l21: IR Vocabulary ────────────────────────────────────────────────────────
export const C1_L21: LessonContent = {
  vocab: [
    { english: 'sanction', french: 'sanctionner / approuver officiellement', phonetic: '/ˈsæŋkʃn/', example: 'The Security Council sanctioned the use of peacekeeping forces in the region.', exampleTranslation: 'Le Conseil de sécurité a sanctionné l\'utilisation de forces de maintien de la paix dans la région.' },
    { english: 'sanctions', french: 'sanctions', phonetic: '/ˈsæŋkʃnz/', example: 'The Security Council imposed sweeping sanctions on the regime.', exampleTranslation: 'Le Conseil de sécurité a imposé des sanctions massives au régime.' },
    { english: 'diplomacy', french: 'diplomatie', phonetic: '/dɪˈpləʊməsi/', example: 'Quiet diplomacy achieved what public condemnation could not.', exampleTranslation: 'La diplomatie discrète a obtenu ce que la condamnation publique n\'avait pu obtenir.' },
    { english: 'multilateral', french: 'multilatéral', phonetic: '/ˌmʌltɪˈlætərəl/', example: 'A multilateral approach remains the most effective means of addressing global challenges.', exampleTranslation: 'Une approche multilatérale reste le moyen le plus efficace de relever les défis mondiaux.' },
    { english: 'non-proliferation', french: 'non-prolifération', phonetic: '/ˌnɒnprəˌlɪfəˈreɪʃn/', example: 'The non-proliferation treaty has been a cornerstone of global security since 1968.', exampleTranslation: 'Le traité de non-prolifération est une pierre angulaire de la sécurité mondiale depuis 1968.' },
  ],
  grammar: {
    title: 'Le vocabulaire des relations internationales : nuances et collocations essentielles',
    explanation: 'Le lexique des relations internationales exige une grande précision sémantique, car chaque terme véhicule un cadre juridique et politique spécifique : (1) « Sovereignty » est indénombrable — on dit « state sovereignty », « national sovereignty », mais JAMAIS « sovereignties ». On parle de « violation of sovereignty » ou « infringement upon sovereignty ». (2) « Sanctions » se construit avec des verbes précis : « impose sanctions » (imposer), « lift sanctions » (lever), « ease sanctions » (assouplir), « tighten sanctions » (durcir). On ne dit PAS « put sanctions » ou « give sanctions ». Les types : « economic sanctions », « targeted sanctions », « unilateral sanctions », « multilateral sanctions ». (3) « Diplomacy » ≠ « foreign policy » : la diplomatie est la MÉTHODE de négociation et de dialogue ; la foreign policy est la STRATÉGIE d\'ensemble. On dit « coercive diplomacy », « preventive diplomacy », « shuttle diplomacy », « quiet diplomacy ». (4) « Multilateral » ≠ « bilateral » ≠ « unilateral » : multilateral = plusieurs parties ; bilateral = deux parties ; unilateral = une seule partie. Ces termes s\'appliquent aux accords, aux négociations, aux institutions. (5) « Non-proliferation » s\'utilise comme modifieur : « non-proliferation regime », « non-proliferation efforts », « non-proliferation norms ». Le préfixe « non- » est toujours suivi d\'un tiret dans ce contexte.',
    examples: [
      { sentence: 'The Security Council voted to impose targeted sanctions on individuals responsible for the crackdown.', translation: 'Le Conseil de sécurité a voté pour imposer des sanctions ciblées contre les individus responsables de la répression.', isCorrect: true },
      { sentence: 'Shuttle diplomacy proved instrumental in brokering the ceasefire agreement.', translation: 'La diplomatie de la navette s\'est révélée déterminante dans la conclusion de l\'accord de cessez-le-feu.', isCorrect: true },
      { sentence: 'The country put sanctions on its neighbour.', translation: '', isCorrect: false },
      { sentence: 'The non-proliferation regime depends on the commitment of all signatory states.', translation: 'Le régime de non-prolifération dépend de l\'engagement de tous les États signataires.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The country put sanctions on its neighbour.', correct: 'The country imposed sanctions on its neighbour.', explanation: 'En anglais des relations internationales, on « impose » des sanctions, on ne les « put » pas. Les collocations correctes sont : impose / lift / ease / tighten sanctions.' },
      { wrong: 'The diplomacy of the country has changed.', correct: 'The country\'s foreign policy has shifted.', explanation: '« Diplomacy » désigne la méthode de négociation, pas la politique étrangère dans son ensemble. Pour parler de la stratégie d\'un pays, on utilise « foreign policy ». On dirait plutôt : « The country\'s diplomatic approach has changed. »' },
    ],
  },
  conversation: [
    { speaker: 'Ambassador Laurent', role: 'A', text: 'The violation of sovereignty we have witnessed demands a robust multilateral response. We cannot afford inaction.', translation: 'La violation de la souveraineté que nous avons observée exige une réponse multilatérale robuste. Nous ne pouvons nous permettre l\'inaction.' },
    { speaker: 'Delegate Nakamura', role: 'B', text: 'I concur that the situation is grave. However, we must weigh the consequences of sweeping sanctions against their humanitarian impact on the civilian population.', translation: 'Je conviens que la situation est grave. Cependant, nous devons peser les conséquences de sanctions massives face à leur impact humanitaire sur la population civile.' },
    { speaker: 'Ambassador Laurent', role: 'A', text: 'Targeted sanctions aimed at the ruling elite would minimise collateral harm while exerting meaningful pressure.', translation: 'Des sanctions ciblées visant l\'élite au pouvoir minimiseraient les dommages collatéraux tout en exerçant une pression significative.' },
    { speaker: 'Delegate Nakamura', role: 'B', text: 'That is a more nuanced approach. Should we also pursue parallel diplomacy through back channels?', translation: 'C\'est une approche plus nuancée. Devrions-nous également poursuivre une diplomatie parallèle par des voies non officielles ?' },
    { speaker: 'Ambassador Laurent', role: 'A', text: 'Absolutely. Quiet diplomacy and sanctions are not mutually exclusive — they are complementary instruments of statecraft.', translation: 'Absolument. La diplomatie discrète et les sanctions ne s\'excluent pas mutuellement — ce sont des instruments complémentaires de l\'art de gouverner.' },
    { speaker: 'Delegate Nakamura', role: 'B', text: 'Then I shall recommend this dual-track strategy to our respective foreign ministers. The non-proliferation implications alone warrant decisive action.', translation: 'Dans ce cas, je recommanderai cette stratégie à double voie à nos ministres des Affaires étrangères respectifs. Les seules implications en matière de non-prolifération justifient une action décisive.' },
  ],
  conversationTitle: 'Réponse multilatérale : sanctions et diplomatie',
  pronunciation: [
    { word: 'Sanction', phonetic: '/ˈsæŋkʃn/', meaning: 'Sanctionner / Approuver', tip: 'Prononcez « SANK-shun » — l\'accent est sur « SANK ». Le « a » est ouvert comme dans « cat ». La terminaison « -tion » = « shun ». Comme verbe, « sanction » peut signifier « approuver » ou « pénaliser » selon le contexte.' },
    { word: 'Sanctions', phonetic: '/ˈsæŋkʃnz/', meaning: 'Sanctions', tip: 'L\'accent est sur « SANC » : « SANK-shunz ». Le « a » est ouvert comme dans « cat ». La terminaison « -tions » = « shunz ». Ne prononcez pas « sonk-sion ».' },
    { word: 'Multilateral', phonetic: '/ˌmʌltɪˈlætərəl/', meaning: 'Multilatéral', tip: 'L\'accent est sur « LAT » : « mul-ti-LAT-er-al ». C\'est un mot de 5 syllabes — ne l\'avalez pas. Le « multi » initial se prononce « mul-ti », pas « mül-ti ».' },
    { word: 'Non-proliferation', phonetic: '/ˌnɒnprəˌlɪfəˈreɪʃn/', meaning: 'Non-prolifération', tip: 'L\'accent principal est sur « RA » : « non-pro-lif-er-A-shun ». Le « pro » de « proliferation » est réduit en schwa. La terminaison « -tion » = « shun ».' },
  ],
}

// ─── c1-l22: Formal Discourse Markers ─────────────────────────────────────────────
export const C1_L22: LessonContent = {
  vocab: [
    { english: 'insofar as', french: 'dans la mesure où', phonetic: '/ˌɪnsəʊˈfɑːr æz/', example: 'Insofar as the agreement pertains to trade, both parties are in alignment.', exampleTranslation: 'Dans la mesure où l\'accord se rapporte au commerce, les deux parties sont en accord.' },
    { english: 'hitherto', french: 'jusqu\'ici / jusqu\'à présent', phonetic: '/ˌhɪðəˈtuː/', example: 'The proposals go further than any hitherto attempted by this body.', exampleTranslation: 'Les propositions vont plus loin que tout ce qui a été tenté jusqu\'ici par cette assemblée.' },
    { english: 'henceforth', french: 'désormais / à compter de maintenant', phonetic: '/ˌhensˈfɔːθ/', example: 'Henceforth, all member states shall submit annual compliance reports.', exampleTranslation: 'Désormais, tous les États membres soumettront des rapports annuels de conformité.' },
    { english: 'whereby', french: 'par lequel / moyennant lequel', phonetic: '/weəˈbaɪ/', example: 'They established a mechanism whereby disputes could be resolved through arbitration.', exampleTranslation: 'Ils ont établi un mécanisme par lequel les différends pourraient être résolus par arbitrage.' },
    { english: 'wherein', french: 'dans lequel / où', phonetic: '/weəˈrɪn/', example: 'The treaty contains a clause wherein the parties renounce the use of force.', exampleTranslation: 'Le traité contient une clause dans laquelle les parties renoncent à l\'usage de la force.' },
  ],
  grammar: {
    title: 'Les marqueurs du discours formel : connecteurs avancés du registre diplomatique et académique',
    explanation: 'Les connecteurs formels sont indispensables au niveau C1 pour articuler un discours nuancé et structuré : (1) « Insofar as » = dans la mesure où : il limite la portée d\'une affirmation. Il se prononce /ˌɪnsəʊˈfɑːr æz/. Attention : « insofar as » est UN SEUL connecteur, pas « in so far as » (bien que les deux orthographes soient acceptées). « Inasmuch as » est synonyme mais plus archaïque et juridique. « To the extent that » est une variante plus courante. (2) « Hitherto » ≠ « henceforth » : « hitherto » = jusqu\'ici (passé) ; « henceforth » = désormais (futur). Ces adverbes sont typiques du registre juridique et diplomatique. « Hitherto » s\'emploie pour contraster avec une nouveauté : « The hitherto unknown documents... » ≠ « Henceforth, all documents shall... ». (3) « Whereby » = par lequel / moyennant lequel : il établit le moyen ou le mécanisme. On l\'utilise pour introduire un arrangement, un accord, un système : « an arrangement whereby... » ≠ « a situation wherein... ». (4) « Wherein » = dans lequel : il localise à l\'intérieur d\'un cadre, d\'un document, d\'une situation. Il ne s\'emploie PAS pour exprimer le moyen (c\'est le rôle de « whereby »). (5) Ces connecteurs sont RÉSERVÉS au registre formel — ne les utilisez pas dans la conversation courante.',
    examples: [
      { sentence: 'Insofar as the resolution addresses humanitarian concerns, it deserves our full support.', translation: 'Dans la mesure où la résolution traite des préoccupations humanitaires, elle mérite notre soutien total.', isCorrect: true },
      { sentence: 'The hitherto secret negotiations were revealed in yesterday\'s press conference.', translation: 'Les négociations jusque-là secrètes ont été révélées lors de la conférence de presse d\'hier.', isCorrect: true },
      { sentence: 'Hitherto, all member states shall comply with the new regulations.', translation: '', isCorrect: false },
      { sentence: 'The parties devised a framework whereby interim measures could be implemented pending a final settlement.', translation: 'Les parties ont conçu un cadre moyennant lequel des mesures intérimaires pourraient être mises en œuvre dans l\'attente d\'un règlement définitif.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Hitherto, all member states shall comply with the new regulations.', correct: 'Henceforth, all member states shall comply with the new regulations.', explanation: '« Hitherto » signifie « jusqu\'ici » (passé) ; « henceforth » signifie « désormais » (futur). Ici, on parle d\'une obligation future, donc « henceforth » est correct. Confondre les deux est une erreur fréquente chez les francophones.' },
      { wrong: 'A system wherein funds are transferred automatically.', correct: 'A system whereby funds are transferred automatically.', explanation: '« Wherein » = « dans lequel » (lieu/cadre) ; « whereby » = « par lequel / moyennant lequel » (mécanisme/moyen). Un système par lequel des fonds sont transférés décrit un MÉCANISME — il faut « whereby ».' },
    ],
  },
  conversation: [
    { speaker: 'Legal Counsel Bergström', role: 'A', text: 'Insofar as the draft resolution pertains to enforcement mechanisms, I believe we have achieved consensus.', translation: 'Dans la mesure où le projet de résolution se rapporte aux mécanismes de mise en application, je crois que nous avons atteint un consensus.' },
    { speaker: 'Delegate Osei', role: 'B', text: 'I agree. However, the provisions hitherto discussed do not address the question of verification.', translation: 'Je suis d\'accord. Cependant, les dispositions discutées jusqu\'ici n\'abordent pas la question de la vérification.' },
    { speaker: 'Legal Counsel Bergström', role: 'A', text: 'A fair point. I propose we insert a clause whereby an independent monitoring body is established.', translation: 'Une remarque juste. Je propose que nous insérions une clause par laquelle un organisme de surveillance indépendant est établi.' },
    { speaker: 'Delegate Osei', role: 'B', text: 'That would address the gap. And the clause wherein the parties pledge transparency — should it be binding or aspirational?', translation: 'Cela comblerait la lacune. Et la clause dans laquelle les parties s\'engagent à la transparence — devrait-elle être contraignante ou incitative ?' },
    { speaker: 'Legal Counsel Bergström', role: 'A', text: 'Given the stakes, I would argue it should be binding. Henceforth, any signatory failing to comply would face automatic review.', translation: 'Compte tenu des enjeux, je dirais qu\'elle devrait être contraignante. Désormais, tout signataire qui ne se conformerait pas ferait l\'objet d\'un examen automatique.' },
    { speaker: 'Delegate Osei', role: 'B', text: 'To the extent that such a provision deters non-compliance, I can support it. Let us formalise this at the next session.', translation: 'Dans la mesure où une telle disposition dissuade la non-conformité, je peux la soutenir. Formalisons cela lors de la prochaine session.' },
  ],
  conversationTitle: 'Rédaction de résolution : connecteurs formels et précision juridique',
  pronunciation: [
    { word: 'Insofar as', phonetic: '/ˌɪnsəʊˈfɑːr æz/', meaning: 'Dans la mesure où', tip: 'Prononcez « in-so-FAR az » — l\'accent est sur « FAR ». Le « in » et le « so » sont rapides. Le « as » final est réduit. Ne séparez pas « in so far ».' },
    { word: 'Hitherto', phonetic: '/ˌhɪðəˈtuː/', meaning: 'Jusqu\'ici', tip: 'L\'accent est sur « TO » : « hi-ther-TOO ». Le « th » est expiré comme dans « think ». La dernière syllabe est tendue : « TOO », pas « tu ».' },
    { word: 'Henceforth', phonetic: '/ˌhensˈfɔːθ/', meaning: 'Désormais', tip: 'Prononcez « hens-FORTH » — l\'accent est sur « FORTH ». Le « th » final est expiré. Ne dites pas « hens-for » sans le « th ».' },
    { word: 'Whereby', phonetic: '/weəˈbaɪ/', meaning: 'Par lequel', tip: 'L\'accent est sur « BY » : « wair-BAÏ ». Le « where » est réduit en « wair ». Ne dites pas « ouère-baï » à la française.' },
  ],
}

// ─── c1-l23: Diplomatic Crisis ────────────────────────────────────────────────────
export const C1_L23: LessonContent = {
  vocab: [
    { english: 'escalation', french: 'escalade', phonetic: '/ˌeskəˈleɪʃn/', example: 'We must prevent any further escalation of the conflict.', exampleTranslation: 'Nous devons empêcher toute escalade supplémentaire du conflit.' },
    { english: 'ultimatum', french: 'ultimatum', phonetic: '/ˌʌltɪˈmeɪtəm/', example: 'The allied powers issued an ultimatum demanding the immediate withdrawal of troops.', exampleTranslation: 'Les puissances alliées ont lancé un ultimatum exigeant le retrait immédiat des troupes.' },
    { english: 'de-escalation', french: 'désescalade', phonetic: '/diːˌeskəˈleɪʃn/', example: 'Both sides have signalled a willingness to pursue de-escalation measures.', exampleTranslation: 'Les deux parties ont signalé leur volonté de poursuivre des mesures de désescalade.' },
    { english: 'standoff', french: 'impasse / confrontation', phonetic: '/ˈstændɒf/', example: 'The diplomatic standoff has lasted three weeks with no sign of resolution.', exampleTranslation: 'L\'impasse diplomatique dure depuis trois semaines sans signe de résolution.' },
    { english: 'reciprocity', french: 'réciprocité', phonetic: '/ˌresɪˈprɒsəti/', example: 'The principle of reciprocity demands that any concession be matched in kind.', exampleTranslation: 'Le principe de réciprocité exige que toute concession soit assortie d\'une contrepartie équivalente.' },
  ],
  grammar: {
    title: 'La gestion de crise diplomatique : langage de la menace, de l\'ultimatum et de la désescalade',
    explanation: 'Le langage de crise diplomatique obéit à des conventions précises qui visent à maintenir la pression tout en laissant une porte de sortie : (1) La menace voilée : « Should X fail to comply, Y will be compelled to... » — le conditionnel et le passif adoucissent la menace tout en la rendant crédible. On n\'utilise PAS « If you don\'t, we will » — trop direct et contre-productif. (2) L\'ultimatum : structure classique — « We call upon X to do Y within Z timeframe. Failure to do so will result in... ». L\'ultimatum doit toujours inclure un délai et une conséquence précise. Le pluriel latin d\'« ultimatum » est « ultimatums » en anglais courant (pas « ultimata »). (3) La désescalade : « to step back from the brink », « to de-escalate tensions », « to establish a cooling-off period », « to create space for dialogue ». Le préfixe « de- » indique le mouvement inverse. (4) « Standoff » ≠ « stalemate » : un standoff est une confrontation tendue entre deux parties ; un stalemate est une situation bloquée sans progression possible. (5) « Reciprocity » est le pilier de la désescalade — chaque geste doit être réciproque : « reciprocal measures », « mutual restraint », « on a reciprocal basis ».',
    examples: [
      { sentence: 'Should the regime fail to comply within 48 hours, the coalition will be compelled to take further measures.', translation: 'Si le régime ne se conforme pas dans les 48 heures, la coalition sera contrainte de prendre des mesures supplémentaires.', isCorrect: true },
      { sentence: 'The ultimatum called for the immediate release of all detained diplomats.', translation: 'L\'ultimatum exigeait la libération immédiate de tous les diplomates détenus.', isCorrect: true },
      { sentence: 'If you don\'t back down, we will impose sanctions immediately.', translation: '', isCorrect: false },
      { sentence: 'Reciprocal de-escalation measures would create the conditions necessary for meaningful dialogue.', translation: 'Des mesures réciproques de désescalade créeraient les conditions nécessaires à un dialogue constructif.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'If you don\'t back down, we will impose sanctions immediately.', correct: 'Should the present stance persist, further measures would become unavoidable.', explanation: 'En diplomatie de crise, on n\'utilise jamais le tutoiement direct (« you don\'t ») ni les menaces brutes (« we will »). La menace voilée avec inversion conditionnelle (« Should... ») et le conditionnel (« would ») maintiennent la pression tout en préservant la possibilité de négociation.' },
      { wrong: 'The two countries are in a stalemate.', correct: 'The two countries are locked in a diplomatic standoff.', explanation: 'Un « stalemate » implique une impossibilité de progression (comme aux échecs). Un « standoff » implique une confrontation tendue où les deux parties refusent de céder. En crise diplomatique, « standoff » est le terme approprié — il sous-entend que la situation pourrait encore évoluer.' },
    ],
  },
  conversation: [
    { speaker: 'Secretary-General Adler', role: 'A', text: 'We find ourselves at a critical juncture. The standoff at the border has entered its third week, and the risk of escalation is mounting by the hour.', translation: 'Nous nous trouvons à un tournant critique. L\'impasse à la frontière est entrée dans sa troisième semaine, et le risque d\'escalade s\'accentue d\'heure en heure.' },
    { speaker: 'Foreign Minister Rashid', role: 'B', text: 'My government has shown restraint. However, we cannot accept an ultimatum that disregards our legitimate security concerns.', translation: 'Mon gouvernement a fait preuve de retenue. Cependant, nous ne pouvons accepter un ultimatum qui ignore nos préoccupations sécuritaires légitimes.' },
    { speaker: 'Secretary-General Adler', role: 'A', text: 'I acknowledge your concerns. That is precisely why I am proposing reciprocal de-escalation: a phased withdrawal coupled with a verification mechanism.', translation: 'Je reconnais vos préoccupations. C\'est précisément pourquoi je propose une désescalade réciproque : un retrait progressif couplé à un mécanisme de vérification.' },
    { speaker: 'Foreign Minister Rashid', role: 'B', text: 'Reciprocity is essential. Any step we take must be matched by the other side — in scope, in timing, and in verification.', translation: 'La réciprocité est essentielle. Tout geste que nous ferons doit être assorti d\'une contrepartie de l\'autre côté — en ampleur, en calendrier et en vérification.' },
    { speaker: 'Secretary-General Adler', role: 'A', text: 'Agreed. I shall propose a cooling-off period of 72 hours, during which both parties refrain from military manoeuvres near the border.', translation: 'D\'accord. Je proposerai une période d\'apaisement de 72 heures, durant laquelle les deux parties s\'abstiendront de manœuvres militaires près de la frontière.' },
    { speaker: 'Foreign Minister Rashid', role: 'B', text: 'That is a constructive proposal, provided it is observed by both sides without exception. I shall recommend acceptance to my government.', translation: 'C\'est une proposition constructive, à condition qu\'elle soit respectée par les deux parties sans exception. Je recommanderai l\'acceptation à mon gouvernement.' },
  ],
  conversationTitle: 'Gestion de crise diplomatique : ultimatum et désescalade',
  pronunciation: [
    { word: 'Escalation', phonetic: '/ˌeskəˈleɪʃn/', meaning: 'Escalade', tip: 'L\'accent est sur « CA » : « es-kuh-LAY-shun ». Ne mettez pas l\'accent sur « es ». La terminaison « -tion » = « shun ». Le « a » de « la » est ouvert.' },
    { word: 'Ultimatum', phonetic: '/ˌʌltɪˈmeɪtəm/', meaning: 'Ultimatum', tip: 'L\'accent est sur « MA » : « ul-ti-MAY-tum ». Les francophones ont tendance à accentuer la première syllabe. En anglais, c\'est l\'antépénultième qui porte l\'accent.' },
    { word: 'De-escalation', phonetic: '/diːˌeskəˈleɪʃn/', meaning: 'Désescalade', tip: 'Prononcez « dee-es-kuh-LAY-shun » — le « de » est une syllabe séparée prononcée « dee ». L\'accent principal reste sur « LAY ». Ne dites pas « des-kalation ».' },
    { word: 'Reciprocity', phonetic: '/ˌresɪˈprɒsəti/', meaning: 'Réciprocité', tip: 'L\'accent est sur « PROS » : « res-uh-PROS-uh-ti ». Attention : le « ci » ne se prononce PAS « si » comme en français, mais « sih ». Le « o » dans « pro » est ouvert.' },
  ],
}

// ─── c1-l24: Summit Discussion ────────────────────────────────────────────────────
export const C1_L24: LessonContent = {
  vocab: [
    { english: 'joint communiqué', french: 'communiqué conjoint', phonetic: '/dʒɔɪnt kəˈmjuːnɪkeɪ/', example: 'The leaders issued a joint communiqué reaffirming their commitment to the alliance.', exampleTranslation: 'Les dirigeants ont publié un communiqué conjoint réaffirmant leur engagement envers l\'alliance.' },
    { english: 'declaratory statement', french: 'déclaration solennelle', phonetic: '/dɪˈklærətəri ˈsteɪtmənt/', example: 'The declaratory statement stopped short of committing to binding obligations.', exampleTranslation: 'La déclaration solennelle s\'est arrêtée avant de s\'engager sur des obligations contraignantes.' },
    { english: 'to endorse', french: 'entériner / approuver solennellement', phonetic: '/ɪnˈdɔːs/', example: 'The summit endorsed the framework agreement in principle, pending further negotiation.', exampleTranslation: 'Le sommet a approuvé le cadre d\'accord en principe, dans l\'attente de négociations ultérieures.' },
    { english: 'to underscore', french: 'souligner / accentuer fortement', phonetic: '/ˌʌndərˈskɔːr/', example: 'The President underscored that no option had been ruled out.', exampleTranslation: 'Le Président a souligné qu\'aucune option n\'avait été écartée.' },
    { english: 'diplomatic hedging', french: 'prudence diplomatique / langage prudents', phonetic: '/ˌdɪpləˈmætɪk ˈhedʒɪŋ/', example: 'The final declaration was a masterpiece of diplomatic hedging — firm enough to satisfy domestic audiences, vague enough to avoid binding commitments.', exampleTranslation: 'La déclaration finale était un chef-d\'œuvre de prudence diplomatique — assez ferme pour satisfaire les opinions publiques, assez vague pour éviter des engagements contraignants.' },
  ],
  grammar: {
    title: 'Le langage des sommets internationaux : déclarations, communiqués et prudence diplomatique',
    explanation: 'Le langage des sommets internationaux suit des conventions codifiées où chaque formulation est soigneusement pesée : (1) Le communiqué conjoint : il énonce les points d\'accord. Sa structure : « We, the leaders of..., reaffirm... / commit to... / recognise... / resolve to... ». L\'ordre des dirigeants suit un protocole strict (par durée de mandat ou ordre alphabétique du pays). (2) La déclaration solennelle (declaratory statement) : elle exprime une intention sans obligation juridique. « We declare our commitment to... » ≠ « We commit to... » : le premier est déclaratif (aspiration), le second est engageant (obligation). (3) L\'approbation (endorsement) : « endorse in principle » = approuver en principe (sans engagement) ; « endorse fully » = approuver pleinement. « Endorse » est plus fort que « welcome » mais moins fort que « ratify ». (4) La prudence diplomatique (hedging) : technique consistant à formuler de manière à laisser une marge de manœuvre. Formules typiques : « We recognise the importance of... » (on ne s\'engage pas) ; « We call upon... » (on ne fait que recommander) ; « where appropriate » (condition qui vide l\'engagement de substance) ; « as soon as practicable » (pas de délai précis). (5) La gradation de l\'engagement : « acknowledge » < « recognise » < « welcome » < « endorse » < « commit to » < « shall ». Chaque terme a un poids diplomatique précis.',
    examples: [
      { sentence: 'The summit endorsed the action plan in principle, noting that further consultation would be required before implementation.', translation: 'Le sommet a approuvé le plan d\'action en principe, notant que des consultations supplémentaires seraient nécessaires avant la mise en œuvre.', isCorrect: true },
      { sentence: 'We recognise the urgent need for reform and commit to taking forward-looking steps where appropriate.', translation: 'Nous reconnaissons le besoin urgent de réforme et nous nous engageons à prendre des mesures prospectives le cas échéant.', isCorrect: true },
      { sentence: 'The joint communiqué committed the leaders to immediate and binding action on all fronts.', translation: '', isCorrect: false },
      { sentence: 'The declaratory statement called upon all parties to exercise restraint and pursue dialogue.', translation: 'La déclaration solennelle a appelé toutes les parties à faire preuve de retenue et à poursuivre le dialogue.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The joint communiqué committed the leaders to immediate and binding action on all fronts.', correct: 'The joint communiqué reaffirmed the leaders\' shared commitment to addressing the issue and called for further consultation.', explanation: 'Un communiqué conjoint est par nature un document de compromis qui évite les engagements contraignants unilatéraux. Il « reaffirme », « reconnaît », « appelle à » — il ne « commit » pas à une « action immédiate et contraignante ». Pour des obligations juridiques, il faut un traité, pas un communiqué.' },
      { wrong: 'The summit welcomed the agreement, which means they are legally bound by it.', correct: 'The summit welcomed the agreement, which signals political support without creating legal obligations.', explanation: '« Welcome » est le terme diplomatique le plus faible dans la gradation : il exprime un soutien politique sans aucune obligation juridique. « Endorse » est plus fort mais toujours non contraignant. Seuls « commit to » et « shall » créent des obligations.' },
    ],
  },
  conversation: [
    { speaker: 'Summit Chair Petrov', role: 'A', text: 'Distinguished colleagues, we must now agree on the language of the joint communiqué. The current draft has attracted reservations from several delegations.', translation: 'Chers collègues, nous devons maintenant nous accorder sur le libellé du communiqué conjoint. Le projet actuel a suscité des réserves de la part de plusieurs délégations.' },
    { speaker: 'Prime Minister Diaz', role: 'B', text: 'The phrase « commit to immediate action » is, frankly, unrealistic. I would propose « resolve to take forward-looking steps where appropriate ».', translation: 'L\'expression « s\'engager à une action immédiate » est, franchement, irréaliste. Je proposerais « résoudre à prendre des mesures prospectives le cas échéant ».' },
    { speaker: 'Summit Chair Petrov', role: 'A', text: 'That is more measured. However, we must ensure the declaratory statement is firm enough to be taken seriously by the international community.', translation: 'C\'est plus mesuré. Cependant, nous devons veiller à ce que la déclaration soit assez ferme pour être prise au sérieux par la communauté internationale.' },
    { speaker: 'Prime Minister Diaz', role: 'B', text: 'I suggest we endorse the framework in principle, with a commitment to reconvene within six months. That balances credibility with prudence.', translation: 'Je suggère que nous approuvions le cadre en principe, avec un engagement à nous réunir à nouveau dans les six mois. Cela équilibre crédibilité et prudence.' },
    { speaker: 'Summit Chair Petrov', role: 'A', text: 'A textbook example of diplomatic hedging — and I mean that as a compliment. I shall circulate the revised draft. Shall we say « as soon as practicable » for the timeline?', translation: 'Un exemple type de prudence diplomatique — et je l\'entends comme un compliment. Je ferai circuler le projet révisé. Dirons-nous « dès que possible » pour le calendrier ?' },
    { speaker: 'Prime Minister Diaz', role: 'B', text: 'Precisely. « As soon as practicable » affirms intent without boxing us in. The communiqué must be firm in spirit but flexible in commitment.', translation: 'Précisément. « Dès que possible » affirme l\'intention sans nous enfermer. Le communiqué doit être ferme dans l\'esprit mais flexible dans l\'engagement.' },
  ],
  conversationTitle: 'Sommet international : négociation du communiqué conjoint',
  pronunciation: [
    { word: 'Communiqué', phonetic: '/kəˈmjuːnɪkeɪ/', meaning: 'Communiqué', tip: 'Prononcez « kuh-MYOO-ni-kay » — la dernière syllabe est « kay » (anglicisée), PAS « ké » à la française. L\'accent est sur « MYOO ».' },
    { word: 'Declaratory', phonetic: '/dɪˈklærətəri/', meaning: 'Déclaratoire', tip: 'L\'accent est sur « CLA » : « dih-KLA-ruh-ri ». Ne dites pas « dé-cla-ra-toire » à la française. Le « a » de « cla » est ouvert.' },
    { word: 'Endorse', phonetic: '/ɪnˈdɔːs/', meaning: 'Entériner', tip: 'Prononcez « in-DAWS » — l\'accent est sur « DORSE ». Le « en » initial est réduit en « in ». Le « or » est long et ouvert comme dans « door ».' },
    { word: 'Hedging', phonetic: '/ˈhedʒɪŋ/', meaning: 'Prudence (diplomatique)', tip: 'Prononcez « HED-jing » — l\'accent est sur « HED ». Le « dg » se prononce comme le « j » de « judge ». Le « g » final est doux. Ne dites pas « èdj-ing ».' },
  ],
}

// ─── c1-l25: IR Sounds ────────────────────────────────────────────────────────────
export const C1_L25: LessonContent = {
  vocab: [
    { english: 'hegemony', french: 'hégémonie', phonetic: '/hɪˈdʒeməni/', example: 'The decline of hegemony often leads to a redistribution of global power.', exampleTranslation: 'Le déclin de l\'hégémonie conduit souvent à une redistribution du pouvoir mondial.' },
    { english: 'belligerent', french: 'belligérant', phonetic: '/bəˈlɪdʒərənt/', example: 'The belligerent rhetoric from both sides has raised fears of armed conflict.', exampleTranslation: 'La rhétorique belligérante des deux côtés a suscité des craintes de conflit armé.' },
    { english: 'proxy war', french: 'guerre par procuration', phonetic: '/ˈprɒksi wɔːr/', example: 'What appears to be a civil war is in fact a proxy war between rival regional powers.', exampleTranslation: 'Ce qui semble être une guerre civile est en fait une guerre par procuration entre puissances régionales rivales.' },
    { english: 'deterrent', french: 'dissuasif / moyen de dissuasion', phonetic: '/dɪˈterənt/', example: 'Nuclear weapons serve as a deterrent, but their effectiveness is debated.', exampleTranslation: 'Les armes nucléaires servent de moyen de dissuasion, mais leur efficacité est débattue.' },
    { english: 'rapprochement', french: 'rapprochement', phonetic: '/ræˈprɒʃmɒŋ/', example: 'The historic rapprochement between the two adversaries took decades to achieve.', exampleTranslation: 'Le rapprochement historique entre les deux adversaires a pris des décennies à se concrétiser.' },
  ],
  grammar: {
    title: 'La prononciation des termes des relations internationales : pièges pour francophones',
    explanation: 'Les termes des relations internationales posent des défis particuliers aux francophones en raison des emprunts croisés entre le français et l\'anglais : (1) « Hegemony » : en anglais /hɪˈdʒeməni/ — on prononce le « h » initial (!) et le « g » se prononce « dj » comme dans « judge ». En français, « hégémonie » a le « h » muet et le « g » est doux /ʒ/. C\'est un piège majeur : ne dites JAMAIS « é-jé-mo-ni » en anglais. (2) « Belligerent » : en anglais /bəˈlɪdʒərənt/ — l\'accent est sur « LI » et le « g » se prononce « dj ». En français « belligérant », l\'accent est sur « gé ». (3) « Deterrent » : /dɪˈterənt/ — l\'accent est sur « TER ». Les francophones ont tendance à dire « di-teu-RANT » avec l\'accent sur la dernière syllabe à la française. En anglais, la dernière syllabe est réduite. (4) « Rapprochement » : /ræˈprɒʃmɒŋ/ — c\'est un mot français utilisé en anglais diplomatique mais avec une prononciation anglicisée. Le « ch » = « sh » (comme en français), mais les voyelles sont anglicisées et l\'accent est sur « PROSH ». Le « ent » final n\'est PAS muet — il se prononce « mong ». (5) « Proxy » : /ˈprɒksi/ — l\'accent est sur « PRO ». Ne dites pas « prok-SI ».',
    examples: [
      { sentence: 'The hegemony of the established powers is being challenged by emerging economies.', translation: 'L\'hégémonie des puissances établies est remise en question par les économies émergentes.', isCorrect: true },
      { sentence: 'Belligerent rhetoric only serves to heighten tensions.', translation: 'La rhétorique belligérante ne fait qu\'exacerber les tensions.', isCorrect: true },
      { sentence: 'The hé-gemony of the region is undisputed.', translation: '', isCorrect: false },
      { sentence: 'A credible deterrent requires both capability and the political will to act.', translation: 'Un moyen de dissuasion crédible exige à la fois la capacité et la volonté politique d\'agir.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The hé-gemony of the region is undisputed.', correct: 'The hegemony of the region is undisputed.', explanation: 'En anglais, « hegemony » se prononce « hi-JE-muh-ni » — le « h » est aspiré (pas muet comme en français) et le « g » = « dj ». Ne prononcez PAS ce mot à la française. C\'est l\'une des erreurs les plus courantes et les plus repérables chez les francophones.' },
      { wrong: 'The rapprocheument between the two nations was welcomed.', correct: 'The rapprochement between the two nations was welcomed.', explanation: '« Rapprochement » en anglais se prononce « ra-PROSH-mong » — le « ent » final n\'est PAS muet comme en français. Il se prononce « mong ». De plus, l\'accent est sur « PROSH », pas sur la première syllabe.' },
    ],
  },
  conversation: [
    { speaker: 'Professor Khoury', role: 'A', text: 'The decline of unipolar hegemony has given rise to a more volatile international order. Proxy wars have become the preferred instrument of competition.', translation: 'Le déclin de l\'hégémonie unipolaire a donné naissance à un ordre international plus volatil. Les guerres par procuration sont devenues l\'instrument préféré de la compétition.' },
    { speaker: 'Ambassador Visser', role: 'B', text: 'Indeed. Belligerent posturing has replaced constructive dialogue in too many theatres. The question is: how do we re-establish deterrence without escalation?', translation: 'En effet. La posture belligérante a remplacé le dialogue constructif dans trop de théâtres. La question est : comment rétablir la dissuasion sans escalade ?' },
    { speaker: 'Professor Khoury', role: 'A', text: 'A credible deterrent must be accompanied by a credible diplomatic off-ramp. Otherwise, adversaries are cornered with no option but escalation.', translation: 'Un moyen de dissuasion crédible doit être accompagné d\'une issue diplomatique crédible. Sinon, les adversaires sont acculés sans autre option que l\'escalade.' },
    { speaker: 'Ambassador Visser', role: 'B', text: 'That is why rapprochement, however fragile, must remain on the table. Even adversaries need channels of communication.', translation: 'C\'est pourquoi le rapprochement, aussi fragile soit-il, doit rester à l\'ordre du jour. Même les adversaires ont besoin de canaux de communication.' },
    { speaker: 'Professor Khoury', role: 'A', text: 'Precisely. The proxy conflicts we see today are symptoms of a deeper structural rivalry. Treating symptoms alone will not suffice.', translation: 'Précisément. Les conflits par procuration que nous observons aujourd\'hui sont les symptômes d\'une rivalité structurelle plus profonde. Traiter uniquement les symptômes ne suffira pas.' },
    { speaker: 'Ambassador Visser', role: 'B', text: 'Then our task is clear: to build a framework wherein competition is managed without resorting to belligerence. Easier said than done, but imperative nonetheless.', translation: 'Alors notre tâche est claire : construire un cadre dans lequel la compétition est gérée sans recourir à la belligérance. Plus facile à dire qu\'à faire, mais impératif néanmoins.' },
  ],
  conversationTitle: 'Ordre mondial : hégémonie, dissuasion et rapprochement',
  pronunciation: [
    { word: 'Hegemony', phonetic: '/hɪˈdʒeməni/', meaning: 'Hégémonie', tip: 'Prononcez « hi-JE-muh-ni » — le « h » est ASPIRÉ (pas muet !), le « g » = « dj » comme dans « judge ». L\'accent est sur « JE ». C\'est le piège n°1 des francophones en relations internationales.' },
    { word: 'Belligerent', phonetic: '/bəˈlɪdʒərənt/', meaning: 'Belligérant', tip: 'L\'accent est sur « LI » : « buh-LIJ-er-unt ». Le « g » = « dj ». En français l\'accent est sur « gé » — en anglais sur « LI ». Ne dites pas « bé-li-jé-rant ».' },
    { word: 'Deterrent', phonetic: '/dɪˈterənt/', meaning: 'Dissuasif', tip: 'L\'accent est sur « TER » : « dih-TER-unt ». Les francophones ont tendance à accentuer la dernière syllabe : « di-teu-RANT ». En anglais, la dernière syllabe est réduite en « unt ».' },
    { word: 'Rapprochement', phonetic: '/ræˈprɒʃmɒŋ/', meaning: 'Rapprochement', tip: 'Prononcez « ra-PROSH-mong » — l\'accent est sur « PROSH ». Le « ch » = « sh » (correct), mais le « ent » final n\'est PAS muet : « mong ». Ne prononcez PAS ce mot à la française en contexte anglais.' },
  ],
}
