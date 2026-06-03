import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C1 ADVANCED — UNIT 2: ACADEMIC RESEARCH (c1-l6 through c1-l10)
// YOELANG English Learning App for Francophone Users
// Advanced: research vocabulary, academic conventions, peer review, formal presentations
// ════════════════════════════════════════════════════════════════════════════════

// ─── c1-l6: Research Vocabulary ───────────────────────────────────────────────────
export const C1_L6: LessonContent = {
  vocab: [
    { english: 'hypothesis', french: 'hypothèse', phonetic: '/haɪˈpɒθəsɪs/', example: 'The hypothesis was tested through a series of controlled experiments.', exampleTranslation: 'L\'hypothèse a été testée à travers une série d\'expériences contrôlées.' },
    { english: 'methodology', french: 'méthodologie', phonetic: '/ˌmeθəˈdɒlədʒi/', example: 'The methodology employed in this study follows a mixed-methods approach.', exampleTranslation: 'La méthodologie employée dans cette étude suit une approche mixte.' },
    { english: 'peer review', french: 'évaluation par les pairs', phonetic: '/pɪə rɪˈvjuː/', example: 'The paper was accepted after two rounds of peer review.', exampleTranslation: 'L\'article a été accepté après deux tours d\'évaluation par les pairs.' },
    { english: 'citation', french: 'citation / référence', phonetic: '/saɪˈteɪʃn/', example: 'Proper citation of sources is essential in academic writing.', exampleTranslation: 'La citation appropriée des sources est essentielle dans la rédaction académique.' },
    { english: 'empirical', french: 'empirique', phonetic: '/ɪmˈpɪrɪkl/', example: 'The study provides empirical evidence supporting the theoretical framework.', exampleTranslation: 'L\'étude fournit des preuves empiriques soutenant le cadre théorique.' },
  ],
  grammar: {
    title: 'Le vocabulaire de la recherche : nuances entre méthode, méthodologie et approche',
    explanation: 'Le langage académique exige une précision que le français et l\'anglais ne traduisent pas toujours de la même façon : (1) « Method » ≠ « methodology » : une method est une technique spécifique (questionnaire, entretien, observation) ; une methodology est le cadre théorique qui justifie le choix des méthodes. Dire « the methodology was a questionnaire » est incorrect — c\'est la method. (2) « Hypothesis » (pl. hypotheses) : en anglais, on « tests » ou « formulates » une hypothèse, on ne dit pas « verifies » (car en science, on ne prouve pas, on réfute ou on ne réfute pas). (3) « Empirical » ≠ « experimental » : empirical = basé sur l\'observation ou l\'expérience ; experimental = basé sur une expérience contrôlée en laboratoire. (4) « Citation » ≠ « reference » : une citation est un renvoi dans le texte ; la reference est l\'entrée complète dans la bibliographie. (5) « Findings » ≠ « results » : findings = interprétation des résultats ; results = données brutes.',
    examples: [
      { sentence: 'The methodology was grounded in constructivist theory, employing both surveys and semi-structured interviews as methods.', translation: 'La méthodologie était fondée sur la théorie constructiviste, employant à la fois des enquêtes et des entretiens semi-directifs comme méthodes.', isCorrect: true },
      { sentence: 'The methodology used in this study was a questionnaire.', translation: '', isCorrect: false },
      { sentence: 'The findings suggest a correlation between socioeconomic status and academic achievement.', translation: 'Les résultats suggèrent une corrélation entre le statut socioéconomique et la réussite académique.', isCorrect: true },
      { sentence: 'Empirical evidence from longitudinal studies supports the hypothesis.', translation: 'Des preuves empiriques d\'études longitudinales soutiennent l\'hypothèse.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The methodology used in this study was a questionnaire.', correct: 'The method used in this study was a questionnaire; the methodology was a positivist quantitative approach.', explanation: 'Un questionnaire est une method (technique), pas une methodology (cadre théorique). La methodology justifie POURQUOI on a choisi cette méthode.' },
      { wrong: 'The experiment verified the hypothesis.', correct: 'The experiment tested the hypothesis, and the results failed to reject it.', explanation: 'En recherche, on ne « vérifie » pas une hypothèse (verify) — on la teste (test). On dit « fail to reject » plutôt que « prove » ou « verify », car la méthode scientifique ne prouve jamais définitivement.' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Lambert', role: 'A', text: 'I\'ve reviewed your draft. The hypothesis is clearly stated, but the methodology section needs further justification.', translation: 'J\'ai examiné votre brouillon. L\'hypothèse est clairement énoncée, mais la section méthodologique nécessite plus de justification.' },
    { speaker: 'Researcher Kim', role: 'B', text: 'I see. Should I elaborate on why I chose a qualitative method over a quantitative one?', translation: 'Je vois. Devrais-je détailler pourquoi j\'ai choisi une méthode qualitative plutôt que quantitative ?' },
    { speaker: 'Dr. Lambert', role: 'A', text: 'Exactly. Your methodology must demonstrate awareness of alternative approaches and explain your rationale for selecting this particular method.', translation: 'Exactement. Votre méthodologie doit démontrer une connaissance des approches alternatives et expliquer votre raisonnement pour le choix de cette méthode particulière.' },
    { speaker: 'Researcher Kim', role: 'B', text: 'I\'ll also strengthen the citations. I\'ve relied too heavily on secondary sources rather than primary empirical studies.', translation: 'Je renforcerai aussi les citations. Je me suis trop appuyé sur des sources secondaires plutôt que sur des études empiriques primaires.' },
    { speaker: 'Dr. Lambert', role: 'A', text: 'Good observation. Peer reviewers will certainly look for a robust citation network that includes recent empirical findings.', translation: 'Bonne observation. Les évaluateurs chercheront certainement un réseau de citations robuste incluant des résultats empiriques récents.' },
    { speaker: 'Researcher Kim', role: 'B', text: 'I\'ll revise the draft accordingly and resubmit by the end of the week.', translation: 'Je réviserai le brouillon en conséquence et le soumettrai à nouveau d\'ici la fin de la semaine.' },
  ],
  conversationTitle: 'Révision académique : hypothèse, méthodologie et citations',
  pronunciation: [
    { word: 'Hypothesis', phonetic: '/haɪˈpɒθəsɪs/', meaning: 'Hypothèse', tip: 'L\'accent est sur « POT » : « hai-POT-uh-sis ». Le « y » initial = « ai ». Le « th » est expiré. Le pluriel « hypotheses » = « hai-POT-uh-seez ».' },
    { word: 'Methodology', phonetic: '/ˌmeθəˈdɒlədʒi/', meaning: 'Méthodologie', tip: 'L\'accent est sur « DOL » : « meth-uh-DOL-uh-jee ». Ne dites pas « mé-tho-do-lo-ji » à la française. Le « th » est expiré.' },
    { word: 'Empirical', phonetic: '/ɪmˈpɪrɪkl/', meaning: 'Empirique', tip: 'L\'accent est sur « PIR » : « im-PIR-ih-kuhl ». Le « e » initial est court comme dans « bit ». La terminaison « -ical » = « ih-kuhl ».' },
    { word: 'Citation', phonetic: '/saɪˈteɪʃn/', meaning: 'Citation / Référence', tip: 'L\'accent est sur « TA » : « saï-TAY-shun ». Ne prononcez pas à la française « si-ta-sion ». Le « c » = « s » et la terminaison « -tion » = « shun ».' },
  ],
}

// ─── c1-l7: Academic Conventions ──────────────────────────────────────────────────
export const C1_L7: LessonContent = {
  vocab: [
    { english: 'to establish', french: 'établir / démontrer', phonetic: '/ɪˈstæblɪʃ/', example: 'This study aims to establish a causal link between the variables.', exampleTranslation: 'Cette étude vise à établir un lien causal entre les variables.' },
    { english: 'to contend', french: 'soutenir / affirmer', phonetic: '/kənˈtend/', example: 'The author contends that earlier studies overlooked a critical variable.', exampleTranslation: 'L\'auteur soutient que les études antérieures ont négligé une variable critique.' },
    { english: 'to posit', french: 'postuler / avancer', phonetic: '/ˈpɒzɪt/', example: 'The researchers posit that social media usage affects attention span.', exampleTranslation: 'Les chercheurs postulent que l\'utilisation des réseaux sociaux affecte la capacité d\'attention.' },
    { english: 'corroboration', french: 'corroboration / confirmation', phonetic: '/kəˌrɒbəˈreɪʃn/', example: 'Independent corroboration of the findings would strengthen the argument.', exampleTranslation: 'Une corroboration indépendante des résultats renforcerait l\'argument.' },
    { english: 'discrepancy', french: 'divergence / écart', phonetic: '/dɪsˈkrepənsi/', example: 'There is a significant discrepancy between the two datasets.', exampleTranslation: 'Il y a une divergence significative entre les deux jeux de données.' },
  ],
  grammar: {
    title: 'Les conventions académiques : hedging et langage prudent dans la recherche',
    explanation: 'L\'anglais académique exige un langage prudent (hedging) pour éviter les affirmations trop catégoriques : (1) Verbes d\'atténuation : « suggest » au lieu de « prove » ; « indicate » au lieu de « show » ; « imply » au lieu de « mean ». (2) Adverbes d\'atténuation : « arguably », « presumably », « apparently », « seemingly ». (3) Formulations conditionnelles : « It would appear that... », « One might argue that... », « It could be suggested that... ». (4) Différence clé entre « claim » et « contend » : « claim » = affirmer sans preuve (souvent utilisé pour critiquer : « Smith claims that... » implies doubt) ; « contend » = soutenir avec argumentation (plus respectueux). (5) « Posit » = postuler une hypothèse comme point de départ, sans la présenter comme vérité établie. (6) Le hedging n\'est pas de la faiblesse — c\'est de la rigueur scientifique. Les reviewers rejettent les affirmations non nuancées.',
    examples: [
      { sentence: 'The findings appear to suggest a correlation, though further research would be needed to establish causation.', translation: 'Les résultats semblent suggérer une corrélation, bien que des recherches supplémentaires soient nécessaires pour établir une causalité.', isCorrect: true },
      { sentence: 'The results prove that social media causes depression.', translation: '', isCorrect: false },
      { sentence: 'It could be argued that the discrepancy stems from differences in methodology rather than in the underlying phenomenon.', translation: 'On pourrait avancer que la divergence provient de différences méthodologiques plutôt que du phénomène sous-jacent.', isCorrect: true },
      { sentence: 'The author contends that earlier models failed to account for cultural variables.', translation: 'L\'auteur soutient que les modèles antérieurs n\'ont pas pris en compte les variables culturelles.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The results prove that social media causes depression.', correct: 'The results suggest that social media usage may be associated with depressive symptoms, though causation has not been established.', explanation: '« Prove » est trop catégorique en recherche. Une étude observationnelle ne peut pas prouver la causalité — elle peut seulement suggérer une association. Utilisez « suggest », « indicate », ou « may be associated with ».' },
      { wrong: 'Smith claims that the data supports the hypothesis.', correct: 'Smith contends that the data supports the hypothesis.', explanation: '« Claim » en anglais académique implique souvent un doute (« Smith prétend que... »). Si vous voulez rendre justice à l\'auteur, utilisez « contend » (soutenir avec argumentation) ou « argue ».' },
    ],
  },
  conversation: [
    { speaker: 'Professor Walsh', role: 'A', text: 'Your paper posits an interesting hypothesis, but I\'m concerned about the lack of corroboration from existing literature.', translation: 'Votre article postule une hypothèse intéressante, mais je m\'inquiète du manque de corroboration dans la littérature existante.' },
    { speaker: 'Doctoral Candidate Diaz', role: 'B', text: 'That\'s a fair point. I could argue that the novelty of the approach accounts for the limited corroboration, but I take your point.', translation: 'C\'est un point juste. Je pourrais avancer que la nouveauté de l\'approche explique la corroboration limitée, mais je comprends votre point.' },
    { speaker: 'Professor Walsh', role: 'A', text: 'Precisely. When you contend that earlier models are insufficient, you need to establish that claim with more than one dataset.', translation: 'Précisément. Quand vous soutenez que les modèles antérieurs sont insuffisants, vous devez établir cette affirmation avec plus d\'un jeu de données.' },
    { speaker: 'Doctoral Candidate Diaz', role: 'B', text: 'I\'ve noted a discrepancy between my results and those of Chen et al. (2021). Should I address this directly?', translation: 'J\'ai constaté une divergence entre mes résultats et ceux de Chen et al. (2021). Devrais-je l\'aborder directement ?' },
    { speaker: 'Professor Walsh', role: 'A', text: 'Absolutely. Acknowledging discrepancies demonstrates intellectual honesty and strengthens — rather than weakens — your argument.', translation: 'Absolument. Reconnaître les divergences démontre une honnêteté intellectuelle et renforce — plutôt qu\'affaiblit — votre argument.' },
    { speaker: 'Doctoral Candidate Diaz', role: 'B', text: 'I\'ll revise the discussion section accordingly. The findings would appear to be more nuanced than I initially presented.', translation: 'Je réviserai la section discussion en conséquence. Les résultats semblent être plus nuancés que ce que j\'ai initialement présenté.' },
  ],
  conversationTitle: 'Discussion entre directeur de thèse et doctorant : hedging académique',
  pronunciation: [
    { word: 'Establish', phonetic: '/ɪˈstæblɪʃ/', meaning: 'Établir', tip: 'L\'accent est sur « STAB » : « ih-STAB-lish ». Le « e » initial est court. Ne dites pas « é-sta-blish » à la française.' },
    { word: 'Contend', phonetic: '/kənˈtend/', meaning: 'Soutenir', tip: 'L\'accent est sur « TEND » : « kun-TEND ». Le « con » est réduit en schwa. Ne confondez pas avec « content » (/ˈkɒntent/).' },
    { word: 'Corroboration', phonetic: '/kəˌrɒbəˈreɪʃn/', meaning: 'Corroboration', tip: 'L\'accent est sur « RA » : « kuh-rob-uh-RAY-shun ». C\'est un mot de 5 syllabes. La terminaison « -tion » = « shun ».' },
    { word: 'Discrepancy', phonetic: '/dɪsˈkrepənsi/', meaning: 'Divergence', tip: 'L\'accent est sur « KREP » : « dis-KREP-un-si ». Le « i » de « dis » est court. La syllabe « pan » est réduite en schwa.' },
  ],
}

// ─── c1-l8: Peer Review ──────────────────────────────────────────────────────────
export const C1_L8: LessonContent = {
  vocab: [
    { english: 'to rebut', french: 'réfuter / contrer', phonetic: '/rɪˈbʌt/', example: 'The author rebuts the criticism by citing additional data.', exampleTranslation: 'L\'auteur réfute la critique en citant des données supplémentaires.' },
    { english: 'substantive', french: 'substantiel / de fond', phonetic: '/ˈsʌbstəntɪv/', example: 'The reviewers raised substantive concerns about the sample size.', exampleTranslation: 'Les évaluateurs ont soulevé des préoccupations de fond concernant la taille de l\'échantillon.' },
    { english: 'to revise', french: 'réviser / modifier', phonetic: '/rɪˈvaɪz/', example: 'The authors were asked to revise and resubmit the manuscript.', exampleTranslation: 'Les auteurs ont été invités à réviser et soumettre à nouveau le manuscrit.' },
    { english: 'rigorous', french: 'rigoureux / rigoureuse', phonetic: '/ˈrɪɡərəs/', example: 'The journal maintains rigorous standards for publication.', exampleTranslation: 'La revue maintient des standards rigoureux pour la publication.' },
    { english: 'to oversee', french: 'superviser / diriger', phonetic: '/ˌəʊvərˈsiː/', example: 'The editor oversees the entire peer review process.', exampleTranslation: 'L\'éditeur supervise l\'ensemble du processus d\'évaluation par les pairs.' },
  ],
  grammar: {
    title: 'L\'évaluation par les pairs : vocabulaire et structure d\'une critique académique',
    explanation: 'Le processus de peer review suit des conventions linguistiques précises : (1) « Revise and resubmit » ≠ « reject » : « revise and resubmit » est une invitation à améliorer (potentiellement acceptable) ; « reject » est un refus définitif. C\'est la décision la plus courante. (2) « Substantive » ≠ « substantial » : substantive = qui concerne le fond (substantive issues = problèmes de fond) ; substantial = important en quantité (substantial improvement = amélioration importante). (3) « Rebut » ≠ « refute » ≠ « deny » : rebut = contrer un argument (on peut réussir ou non) ; refute = prouver qu\'un argument est faux (réussite démontrée) ; deny = nier sans preuve. (4) « Rigorous » ≠ « rigid » : rigorous = exhaustif et strict (positif en recherche) ; rigid = inflexible (souvent négatif). (5) La critique académique se structure : forces → faiblesses → recommandations, toujours avec un ton professionnel même en désaccord.',
    examples: [
      { sentence: 'The reviewers raised substantive concerns about the methodology, requesting a more rigorous sampling procedure.', translation: 'Les évaluateurs ont soulevé des préoccupations de fond sur la méthodologie, demandant une procédure d\'échantillonnage plus rigoureuse.', isCorrect: true },
      { sentence: 'The author denied the reviewer\'s argument.', translation: '', isCorrect: false },
      { sentence: 'After substantial revisions, the manuscript was accepted for publication.', translation: 'Après des révisions substantielles, le manuscrit a été accepté pour publication.', isCorrect: true },
      { sentence: 'The editor oversaw the double-blind review process to ensure impartiality.', translation: 'L\'éditeur a supervisé le processus d\'évaluation en double aveugle pour garantir l\'impartialité.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The author denied the reviewer\'s argument.', correct: 'The author rebutted the reviewer\'s argument with additional evidence.', explanation: '« Deny » = nier sans preuve, ce qui est académiquement faible. « Rebut » = contrer avec des arguments, ce qui est la démarche attendue. Mieux encore : « refuted » si la preuve est concluante.' },
      { wrong: 'The reviewer made substantial criticisms about the theory.', correct: 'The reviewer raised substantive criticisms about the theory.', explanation: '« Substantial criticisms » = beaucoup de critiques (quantité) ; « substantive criticisms » = des critiques qui touchent au fond du sujet (qualité). En peer review, on parle de « substantive concerns ».' },
    ],
  },
  conversation: [
    { speaker: 'Editor Dr. Frost', role: 'A', text: 'We\'ve received two peer reviews. Both acknowledge the originality of your research but raise substantive concerns.', translation: 'Nous avons reçu deux évaluations par les pairs. Les deux reconnaissent l\'originalité de votre recherche mais soulèvent des préoccupations de fond.' },
    { speaker: 'Author Dr. Nakamura', role: 'B', text: 'I appreciate the feedback. Could you outline the main points of contention?', translation: 'J\'apprécie le feedback. Pourriez-vous résumer les principaux points de désaccord ?' },
    { speaker: 'Editor Dr. Frost', role: 'A', text: 'Reviewer A questions whether your sampling method is sufficiently rigorous. Reviewer B contends that the theoretical framework needs clarification.', translation: 'L\'évaluateur A questionne si votre méthode d\'échantillonnage est suffisamment rigoureuse. L\'évaluateur B soutient que le cadre théorique nécessite des clarifications.' },
    { speaker: 'Author Dr. Nakamura', role: 'B', text: 'Regarding Reviewer A, I can rebut that concern by providing additional data on sample representativeness.', translation: 'Concernant l\'évaluateur A, je peux réfuter cette préoccupation en fournissant des données supplémentaires sur la représentativité de l\'échantillon.' },
    { speaker: 'Editor Dr. Frost', role: 'A', text: 'Good. As for the theoretical framework, a revised section with more explicit connections to the literature would be advisable.', translation: 'Bien. Quant au cadre théorique, une section révisée avec des connexions plus explicites à la littérature serait conseillée.' },
    { speaker: 'Author Dr. Nakamura', role: 'B', text: 'I\'ll revise accordingly and resubmit within four weeks. Thank you for overseeing this process so thoroughly.', translation: 'Je réviserai en conséquence et soumettrai à nouveau dans quatre semaines. Merci de superviser ce processus si minutieusement.' },
  ],
  conversationTitle: 'Processus d\'évaluation par les pairs : révision et réponse',
  pronunciation: [
    { word: 'Rebut', phonetic: '/rɪˈbʌt/', meaning: 'Réfuter', tip: 'L\'accent est sur « BUT » : « ri-BUT ». Le « e » est réduit en schwa. Ne dites pas « ree-byoo » — ce n\'est pas « rebuttal » avec un son différent.' },
    { word: 'Substantive', phonetic: '/ˈsʌbstəntɪv/', meaning: 'De fond', tip: 'L\'accent est sur « SUB » : « SUB-stun-tiv ». Ne confondez pas avec « substantial » (/səbˈstænʃl/). L\'accent est sur la première syllabe, pas la deuxième.' },
    { word: 'Rigorous', phonetic: '/ˈrɪɡərəs/', meaning: 'Rigoureux', tip: 'L\'accent est sur « RIG » : « RIG-er-us ». Le « ou » français n\'existe pas — les deux syllabes suivantes sont réduites. Ne dites pas « ri-gou-rous ».' },
    { word: 'Oversee', phonetic: '/ˌəʊvərˈsiː/', meaning: 'Superviser', tip: 'L\'accent est sur « SEE » : « oh-ver-SEE ». Le « over » est rapide et réduit. C\'est un verbe irrégulier : oversee → oversaw → overseen.' },
  ],
}

// ─── c1-l9: Research Presentation ─────────────────────────────────────────────────
export const C1_L9: LessonContent = {
  vocab: [
    { english: 'to outline', french: 'esquisser / décrire brièvement', phonetic: '/ˈaʊtlaɪn/', example: 'I\'d like to outline the key findings of our research.', exampleTranslation: 'J\'aimerais esquisser les principaux résultats de notre recherche.' },
    { english: 'to highlight', french: 'souligner / mettre en évidence', phonetic: '/ˈhaɪlaɪt/', example: 'Let me highlight three significant implications of these findings.', exampleTranslation: 'Permettez-moi de souligner trois implications significatives de ces résultats.' },
    { english: 'to segue', french: 'enchaîner / faire la transition', phonetic: '/ˈseɡweɪ/', example: 'I\'d like to segue now into a discussion of the limitations.', exampleTranslation: 'J\'aimerais maintenant enchaîner avec une discussion des limites.' },
    { english: 'preliminary', french: 'préliminaire', phonetic: '/prɪˈlɪmɪnəri/', example: 'These are preliminary results; further analysis is underway.', exampleTranslation: 'Ce sont des résultats préliminaires ; des analyses complémentaires sont en cours.' },
    { english: 'implication', french: 'implication / conséquence', phonetic: '/ˌɪmplɪˈkeɪʃn/', example: 'The implications of this study extend beyond the immediate field.', exampleTranslation: 'Les implications de cette étude dépassent le domaine immédiat.' },
  ],
  grammar: {
    title: 'La présentation de recherche : structures rhétoriques pour communiquer ses résultats',
    explanation: 'Une présentation académique suit des structures rhétoriques codifiées : (1) L\'ouverture : « I\'d like to begin by... » / « My talk today will focus on... » / « The purpose of this presentation is to... ». (2) L\'annonce du plan : « I\'ll first outline..., then highlight..., and finally discuss... ». (3) Les transitions : « Moving on to... » / « This brings me to... » / « I\'d like to segue into... » / « Turning now to... ». (4) La présentation des résultats : « Our findings suggest... » (hedging) ; « What is particularly striking is... » (emphasis) ; « As can be seen in Figure 3... » (reference visuelle). (5) La conclusion : « To summarise... » / « The key takeaway is... » / « These findings have significant implications for... ». (6) L\'invitation aux questions : « I\'d be happy to take questions » / « I welcome your comments and questions ». À noter : « Segue » vient de l\'italien et se prononce /ˈseɡweɪ/ — ne dites JAMAIS « seeg ».',
    examples: [
      { sentence: 'I\'d like to begin by outlining the research context, then highlight our key findings, and finally discuss the implications for policy.', translation: 'J\'aimerais commencer par esquisser le contexte de recherche, puis souligner nos résultats clés, et enfin discuter des implications pour les politiques.', isCorrect: true },
      { sentence: 'Now I will talk about something else.', translation: '', isCorrect: false },
      { sentence: 'These preliminary findings appear to suggest a shift in the underlying trend, though further research is needed.', translation: 'Ces résultats préliminaires semblent suggérer un changement dans la tendance sous-jacente, bien que des recherches supplémentaires soient nécessaires.', isCorrect: true },
      { sentence: 'As illustrated in the next slide, the implications extend well beyond the original scope of this study.', translation: 'Comme l\'illustre la diapositive suivante, les implications dépassent largement le cadre initial de cette étude.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Now I will talk about something else.', correct: 'Moving on, I\'d like to segue into a discussion of the limitations of this study.', explanation: '« Now I will talk about something else » est trop informel pour une présentation académique. Utilisez des transitions professionnelles : « Moving on », « This brings me to », « I\'d like to segue into ».' },
      { wrong: 'These results prove our theory is correct.', correct: 'These preliminary findings appear to support the proposed framework, though further validation is warranted.', explanation: '« Prove » est trop catégorique. Utilisez « appear to support » ou « provide evidence consistent with ». L\'adjectif « preliminary » signale que les résultats ne sont pas définitifs.' },
    ],
  },
  conversation: [
    { speaker: 'Presenter Dr. Osei', role: 'A', text: 'Good morning. I\'d like to begin by outlining the context of our research, which focuses on urban resilience in developing economies.', translation: 'Bonjour. J\'aimerais commencer par esquisser le contexte de notre recherche, qui se concentre sur la résilience urbaine dans les économies en développement.' },
    { speaker: 'Moderator Prof. Liu', role: 'B', text: 'Thank you, Dr. Osei. You have twenty minutes for the presentation, followed by a ten-minute Q&A.', translation: 'Merci, Dr. Osei. Vous avez vingt minutes pour la présentation, suivies de dix minutes de questions.' },
    { speaker: 'Presenter Dr. Osei', role: 'A', text: 'Let me highlight our most significant finding: cities with decentralised governance structures showed 40% greater resilience to economic shocks.', translation: 'Permettez-moi de souligner notre résultat le plus significatif : les villes avec des structures de gouvernance décentralisées ont montré 40 % de résilience en plus face aux chocs économiques.' },
    { speaker: 'Moderator Prof. Liu', role: 'B', text: 'That\'s a striking figure. Could you segue into how you measured resilience?', translation: 'C\'est un chiffre frappant. Pourriez-vous enchaîner sur la façon dont vous avez mesuré la résilience ?' },
    { speaker: 'Presenter Dr. Osei', role: 'A', text: 'Certainly. I should note that these are preliminary results. We used a composite index incorporating economic, social, and infrastructure variables.', translation: 'Certainement. Je devrais noter que ce sont des résultats préliminaires. Nous avons utilisé un indice composite incorporant des variables économiques, sociales et d\'infrastructure.' },
    { speaker: 'Moderator Prof. Liu', role: 'B', text: 'Fascinating. The implications for urban policy could be far-reaching. I\'m sure the audience will have many questions.', translation: 'Fascinant. Les implications pour les politiques urbaines pourraient être considérables. Je suis sûr que le public aura beaucoup de questions.' },
  ],
  conversationTitle: 'Présentation de recherche : structure rhétorique académique',
  pronunciation: [
    { word: 'Outline', phonetic: '/ˈaʊtlaɪn/', meaning: 'Esquisser', tip: 'L\'accent est sur « OUT » : « OUT-laïn ». Comme verbe, l\'accent est sur la première syllabe. Comme nom, l\'accent peut être sur la première ou la deuxième selon le contexte.' },
    { word: 'Segue', phonetic: '/ˈseɡweɪ/', meaning: 'Enchaîner', tip: 'Prononcez « SEG-way » — ce mot vient de l\'italien. Ne dites JAMAIS « seeg » ou « seeg-yoo ». L\'accent est sur la première syllabe.' },
    { word: 'Preliminary', phonetic: '/prɪˈlɪmɪnəri/', meaning: 'Préliminaire', tip: 'L\'accent est sur « LIM » : « pri-LIM-in-air-ee ». C\'est un mot de 5 syllabes. En anglais américain, la dernière syllabe est souvent réduite : « pri-LIM-in-er-ee ».' },
    { word: 'Implication', phonetic: '/ˌɪmplɪˈkeɪʃn/', meaning: 'Implication', tip: 'L\'accent est sur « KA » : « im-pli-KAY-shun ». Ne dites pas « im-plee-ka-sion » à la française. La terminaison « -tion » = « shun ».' },
  ],
}

// ─── c1-l10: Research Sounds ──────────────────────────────────────────────────────
export const C1_L10: LessonContent = {
  vocab: [
    { english: 'phenomenon', french: 'phénomène', phonetic: '/fɪˈnɒmɪnən/', example: 'This phenomenon has been observed across multiple cultural contexts.', exampleTranslation: 'Ce phénomène a été observé dans de multiples contextes culturels.' },
    { english: 'paradigm', french: 'paradigme', phonetic: '/ˈpærədaɪm/', example: 'The discovery represented a paradigm shift in the field of physics.', exampleTranslation: 'La découverte a représenté un changement de paradigme dans le domaine de la physique.' },
    { english: 'quantitative', french: 'quantitatif / quantitative', phonetic: '/ˈkwɒntɪtətɪv/', example: 'The quantitative analysis revealed statistically significant differences.', exampleTranslation: 'L\'analyse quantitative a révélé des différences statistiquement significatives.' },
    { english: 'qualitative', french: 'qualitatif / qualitative', phonetic: '/ˈkwɒlɪtətɪv/', example: 'Qualitative methods provide depth of understanding rather than breadth.', exampleTranslation: 'Les méthodes qualitatives fournissent une profondeur de compréhension plutôt qu\'une ampleur.' },
    { english: 'bibliography', french: 'bibliographie', phonetic: '/ˌbɪbliˈɒɡrəfi/', example: 'The bibliography includes over 200 references spanning three decades.', exampleTranslation: 'La bibliographie comprend plus de 200 références couvrant trois décennies.' },
  ],
  grammar: {
    title: 'Prononciation académique : les mots savants pièges pour francophones',
    explanation: 'Le vocabulaire académique anglais contient de nombreux mots d\'origine latine ou grecque que les francophones prononcent souvent à la française : (1) « Phenomenon » (sing.) / « phenomena » (pl.) : /fɪˈnɒmɪnən/ (sing.) et /fɪˈnɒmɪnə/ (pl.) — l\'accent est sur « NOM », pas sur « phe ». Ne dites pas « fé-no-mé-non ». (2) « Paradigm » : /ˈpærədaɪm/ — le « dig » se prononce « daïm » comme dans « dime », PAS « digm » avec un « g » dur ! C\'est un mot grec où « gm » = « m » final. (3) « Quantitative » / « Qualitative » : /ˈkwɒntɪtətɪv/ et /ˈkwɒlɪtətɪv/ — l\'accent est sur la PREMIÈRE syllabe, pas sur « ta ». Les francophones ont tendance à accentuer « TAT », ce qui sonne français. (4) « Bibliography » : /ˌbɪbliˈɒɡrəfi/ — l\'accent est sur « OG », pas sur « bib ». (5) Règle : en anglais, l\'accent tonique des mots longs d\'origine gréco-latine tombe rarement où le français le met.',
    examples: [
      { sentence: 'The phenomenon has been widely documented in the literature.', translation: 'Le phénomène a été largement documenté dans la littérature.', isCorrect: true },
      { sentence: 'This represents a PAR-a-dime shift in our understanding.', translation: '', isCorrect: false },
      { sentence: 'The study employed both quantitative and qualitative methods.', translation: 'L\'étude a employé à la fois des méthodes quantitatives et qualitatives.', isCorrect: true },
      { sentence: 'A comprehensive bibliography is appended at the end of the thesis.', translation: 'Une bibliographie complète est annexée à la fin de la thèse.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'This represents a PAR-a-dime shift in our understanding.', correct: 'This represents a PAR-a-dyme shift in our understanding.', explanation: '« Paradigm » se prononce /ˈpærədaɪm/ — le « gm » final se prononce comme « m » seulement. Le « a » de la dernière syllabe = « aï » comme dans « time ». Ne prononcez pas le « g ».' },
      { wrong: 'Phe-NO-me-non (accent sur NO)', correct: 'fe-NOM-e-non (accent sur NOM)', explanation: 'En anglais, « phenomenon » a l\'accent sur « NOM » : « fih-NOM-ih-non ». En français, l\'accent est sur « NO ». Attention aussi au pluriel : « phenomena » = « fih-NOM-ih-nuh ».' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Petrov', role: 'A', text: 'The phenomena we observed don\'t fit neatly into the existing paradigm. We may need to rethink the theoretical framework.', translation: 'Les phénomènes que nous avons observés ne s\'intègrent pas parfaitement dans le paradigme existant. Nous devrons peut-être repenser le cadre théorique.' },
    { speaker: 'Dr. Morales', role: 'B', text: 'That\'s a bold claim. The quantitative data would need to be quite compelling to justify a paradigm shift.', translation: 'C\'est une affirmation audacieuse. Les données quantitatives devraient être assez convaincantes pour justifier un changement de paradigme.' },
    { speaker: 'Dr. Petrov', role: 'A', text: 'Indeed. Our qualitative findings, however, suggest that the current model overlooks key contextual variables.', translation: 'En effet. Nos résultats qualitatifs, cependant, suggèrent que le modèle actuel néglige des variables contextuelles clés.' },
    { speaker: 'Dr. Morales', role: 'B', text: 'Have you consulted the bibliography on emerging frameworks? There\'s been substantial work since 2018.', translation: 'Avez-vous consulté la bibliographie sur les cadres émergents ? Il y a eu un travail substantiel depuis 2018.' },
    { speaker: 'Dr. Petrov', role: 'A', text: 'I have. Several researchers have noted similar phenomena, but none have proposed an alternative paradigm.', translation: 'Oui. Plusieurs chercheurs ont noté des phénomènes similaires, mais aucun n\'a proposé de paradigme alternatif.' },
    { speaker: 'Dr. Morales', role: 'B', text: 'Then perhaps your study is precisely the kind of rigorous investigation the field needs. I look forward to reading the full paper.', translation: 'Alors peut-être que votre étude est précisément le genre d\'investigation rigoureuse dont le domaine a besoin. J\'ai hâte de lire l\'article complet.' },
  ],
  conversationTitle: 'Discussion entre chercheurs : phénomènes et changements de paradigme',
  pronunciation: [
    { word: 'Phenomenon', phonetic: '/fɪˈnɒmɪnən/', meaning: 'Phénomène', tip: 'L\'accent est sur « NOM » : « fih-NOM-ih-non ». Le « ph » = « f ». Le « e » initial est réduit. Pluriel : « phenomena » = « fih-NOM-ih-nuh ».' },
    { word: 'Paradigm', phonetic: '/ˈpærədaɪm/', meaning: 'Paradigme', tip: 'Prononcez « PAIR-uh-daïm » — le « gm » final se prononce comme un simple « m ». Le « a » final = « aï » comme dans « time ». Ne prononcez JAMAIS le « g ».' },
    { word: 'Quantitative', phonetic: '/ˈkwɒntɪtətɪv/', meaning: 'Quantitatif', tip: 'L\'accent est sur « KWON » : « KWON-tih-tay-tiv ». Ne mettez pas l\'accent sur « TAT » comme en français. Le « qu » = « kw ».' },
    { word: 'Bibliography', phonetic: '/ˌbɪbliˈɒɡrəfi/', meaning: 'Bibliographie', tip: 'L\'accent est sur « OG » : « bib-lee-OG-ruh-fee ». L\'accent secondaire est sur « BIB ». Ne dites pas « bee-blee-o-gra-fi » à la française.' },
  ],
}
