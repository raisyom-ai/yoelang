import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// B2 UPPER INTERMEDIATE — UNIT 2: ACADEMIC ENGLISH (b2-l6 through b2-l10)
// YOELANG English Learning App for Francophone Users
// Upper-intermediate: academic vocabulary, hedging, research discussion, nominalization
// ════════════════════════════════════════════════════════════════════════════════

// ─── b2-l6: Academic Vocabulary ────────────────────────────────────────────────────
export const B2_L6: LessonContent = {
  vocab: [
    { english: 'thesis', french: 'thèse', phonetic: '/ˈθiːsɪs/', example: 'Her thesis examines the impact of social media on political discourse.', exampleTranslation: 'Sa thèse examine l\'impact des réseaux sociaux sur le discours politique.' },
    { english: 'methodology', french: 'méthodologie', phonetic: '/ˌmeθəˈdɒlədʒi/', example: 'The methodology section describes the data collection process.', exampleTranslation: 'La section méthodologie décrit le processus de collecte de données.' },
    { english: 'literature review', french: 'revue de la littérature', phonetic: '/ˈlɪtrətʃə rɪˈvjuː/', example: 'The literature review covers studies from the past decade.', exampleTranslation: 'La revue de la littérature couvre les études de la dernière décennie.' },
    { english: 'findings', french: 'résultats / conclusions', phonetic: '/ˈfaɪndɪŋz/', example: 'Our findings suggest a strong correlation between the two variables.', exampleTranslation: 'Nos résultats suggèrent une forte corrélation entre les deux variables.' },
    { english: 'peer review', french: 'évaluation par les pairs', phonetic: '/pɪər rɪˈvjuː/', example: 'The paper was accepted after two rounds of peer review.', exampleTranslation: 'L\'article a été accepté après deux cycles d\'évaluation par les pairs.' },
  ],
  grammar: {
    title: 'Le vocabulaire académique : faux amis et nuances',
    explanation: 'Le vocabulaire académique anglais contient de nombreux pièges pour les francophones : (1) « Thesis » ≠ « thèse » au sens large. En anglais, « thesis » = mémoire de master ou doctorat. Pour une « thèse » au sens d\'un argument, on dit « argument » ou « claim ». (2) « Literature review » : « literature » ici signifie « les publications scientifiques », pas « la littérature » au sens artistique. On ne traduit PAS par « revue de littérature » mais par « revue de la littérature scientifique ». (3) « Findings » est toujours au pluriel en contexte académique — on ne dit JAMAIS « a finding » pour un résultat global. On peut dire « a key finding » pour un résultat spécifique. (4) « Methodology » ≠ « method ». « Method » = une technique spécifique ; « methodology » = l\'ensemble du cadre méthodologique. (5) « Paper » = article académique, pas seulement « papier ». « To publish a paper » = publier un article.',
    examples: [
      { sentence: 'The methodology employed in this study combines qualitative and quantitative approaches.', translation: 'La méthodologie employée dans cette étude combine des approches qualitatives et quantitatives.', isCorrect: true },
      { sentence: 'The literature review analyses novels from the 19th century.', translation: '', isCorrect: false },
      { sentence: 'Our findings indicate that further research is needed.', translation: 'Nos résultats indiquent que des recherches supplémentaires sont nécessaires.', isCorrect: true },
      { sentence: 'The paper underwent rigorous peer review before publication.', translation: 'L\'article a subi une évaluation par les pairs rigoureuse avant publication.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The literature review analyses novels from the 19th century.', correct: 'The literature review analyses previous research on the topic.', explanation: 'Dans un contexte académique, « literature » désigne la littérature scientifique (publications, articles), pas la littérature artistique (romans, poésie). Pour les œuvres littéraires, précisez « literary works » ou « fiction ».' },
      { wrong: 'The finding of this study is important.', correct: 'The findings of this study are important.', explanation: '« Findings » est généralement au pluriel dans un contexte académique. On dit « the findings are » (les résultats sont), pas « the finding is ». Si vous parlez d\'un résultat spécifique, dites « a key finding ».' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Martin', role: 'A', text: 'So, Sarah, how is your thesis progressing? Have you completed the literature review?', translation: 'Alors, Sarah, comment progresse ta thèse ? As-tu terminé la revue de la littérature ?' },
    { speaker: 'Sarah', role: 'B', text: 'Almost. I\'ve covered the major studies, but I need to include more recent findings from the last two years.', translation: 'Presque. J\'ai couvert les études majeures, mais je dois inclure des résultats plus récents des deux dernières années.' },
    { speaker: 'Prof. Martin', role: 'A', text: 'Good. And what about your methodology? Will you be using a mixed-methods approach?', translation: 'Bien. Et ta méthodologie ? Vas-tu utiliser une approche mixte ?' },
    { speaker: 'Sarah', role: 'B', text: 'Yes, I\'m combining surveys with in-depth interviews. I think it\'ll strengthen the paper when it goes to peer review.', translation: 'Oui, je combine des enquêtes avec des entretiens approfondis. Je pense que cela renforcera l\'article lors de l\'évaluation par les pairs.' },
    { speaker: 'Prof. Martin', role: 'A', text: 'Excellent choice. Just make sure your methodology section is detailed enough for replication.', translation: 'Excellent choix. Assure-toi simplement que ta section méthodologie est assez détaillée pour la réplication.' },
    { speaker: 'Sarah', role: 'B', text: 'Of course. I\'ll send you the draft by Friday for your feedback.', translation: 'Bien sûr. Je vous enverrai le brouillon d\'ici vendredi pour votre feedback.' },
  ],
  conversationTitle: 'Directeur de thèse et étudiante : faire le point',
  pronunciation: [
    { word: 'Thesis', phonetic: '/ˈθiːsɪs/', meaning: 'Thèse', tip: 'Le « th » est expiré : langue entre les dents, soufflez. Prononcez « THII-sis » — l\'accent est sur la première syllabe. Ne dites pas « téisiss ».' },
    { word: 'Methodology', phonetic: '/ˌmeθəˈdɒlədʒi/', meaning: 'Méthodologie', tip: 'L\'accent est sur « THOD » : « me-tho-DOL-o-dji ». Il y a 5 syllabes. Ne confondez pas avec « method » (2 syllabes) qui est beaucoup plus court.' },
    { word: 'Findings', phonetic: '/ˈfaɪndɪŋz/', meaning: 'Résultats', tip: 'Prononcez « FAÏN-dingz » — le « i » de « find » est long comme dans « kind ». Le « s » final sonne comme « z ».' },
    { word: 'Literature', phonetic: '/ˈlɪtrətʃər/', meaning: 'Littérature', tip: 'En anglais, on prononce souvent « LIT-ruh-chur » en réduisant les syllabes du milieu. Ne prononcez PAS « li-té-ra-ture » à la française (4 syllabes → 3 en anglais).' },
  ],
}

// ─── b2-l7: Hedging & Caution ─────────────────────────────────────────────────────
export const B2_L7: LessonContent = {
  vocab: [
    { english: 'to suggest', french: 'suggérer / indiquer', phonetic: '/səˈdʒest/', example: 'The data suggest a possible link between diet and cognitive function.', exampleTranslation: 'Les données suggèrent un lien possible entre le régime et la fonction cognitive.' },
    { english: 'to tend to', french: 'avoir tendance à', phonetic: '/tend tuː/', example: 'Participants tended to perform better in the morning.', exampleTranslation: 'Les participants avaient tendance à mieux performer le matin.' },
    { english: 'apparently', french: 'apparemment', phonetic: '/əˈpærəntli/', example: 'The results are apparently consistent with previous studies.', exampleTranslation: 'Les résultats sont apparemment cohérents avec les études précédentes.' },
    { english: 'to indicate', french: 'indiquer', phonetic: '/ˈɪndɪkeɪt/', example: 'Our analysis indicates that the trend may be reversing.', exampleTranslation: 'Notre analyse indique que la tendance pourrait s\'inverser.' },
    { english: 'presumably', french: 'vraisemblablement / présumément', phonetic: '/prɪˈzjuːməbli/', example: 'Presumably, the participants understood the instructions.', exampleTranslation: 'Vraisemblablement, les participants ont compris les instructions.' },
  ],
  grammar: {
    title: 'Le hedging académique : exprimer la prudence et la nuance',
    explanation: 'Le « hedging » (atténuation) est une compétence CRUCIALE en anglais académique. Les chercheurs ne disent jamais « This proves that... » — ils atténuent leurs affirmations pour rester objectifs : (1) Verbes de hedging : « suggest » (suggérer), « indicate » (indiquer), « appear to » (sembler), « tend to » (avoir tendance à). Au lieu de « X causes Y », on dit « X appears to contribute to Y ». (2) Adverbes de hedging : « apparently » (apparemment), « presumably » (vraisemblablement), « arguably » (discutablement), « largely » (en grande partie), « somewhat » (dans une certaine mesure). (3) Modaux de hedging : « may » (pourrait), « might » (pourrait possiblement), « could » (pourrait éventuellement), « would seem to » (semblerait). (4) Structures de hedging : « It is widely believed that... », « There is evidence to suggest that... », « It could be argued that... ». ATTENTION : trop de hedging rend le texte faible ; pas assez le rend dogmatique. L\'équilibre est essentiel.',
    examples: [
      { sentence: 'The findings suggest that the intervention may have a positive effect.', translation: 'Les résultats suggèrent que l\'intervention pourrait avoir un effet positif.', isCorrect: true },
      { sentence: 'This proves that the intervention works.', translation: '', isCorrect: false },
      { sentence: 'It would appear that the trend is changing, although further research is needed.', translation: 'Il semblerait que la tendance change, bien que des recherches supplémentaires soient nécessaires.', isCorrect: true },
      { sentence: 'Participants tended to respond more quickly in the second trial.', translation: 'Les participants avaient tendance à répondre plus rapidement lors du deuxième essai.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'This proves that the intervention works.', correct: 'The evidence suggests that the intervention may be effective.', explanation: 'En anglais académique, on évite « prove » (prouver) qui est trop absolu. Utilisez « suggest », « indicate » ou « provide evidence that » avec un modal comme « may » ou « might ».' },
      { wrong: 'The data proves that climate change is caused by human activity.', correct: 'The data strongly suggest that human activity is a major contributor to climate change.', explanation: 'Même quand les preuves sont solides, le langage académique reste prudent. « Strongly suggest » ou « provide compelling evidence » sont préférables à « prove ».' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Chen', role: 'A', text: 'So, what do the results indicate about the new treatment?', translation: 'Alors, qu\'est-ce que les résultats indiquent concernant le nouveau traitement ?' },
    { speaker: 'Dr. Dubois', role: 'B', text: 'Well, the data suggest it may be more effective than the current standard, but we need to be cautious.', translation: 'Eh bien, les données suggèrent qu\'il pourrait être plus efficace que le standard actuel, mais nous devons être prudents.' },
    { speaker: 'Dr. Chen', role: 'A', text: 'Of course. Would you say the difference is statistically significant?', translation: 'Bien sûr. Diriez-vous que la différence est statistiquement significative ?' },
    { speaker: 'Dr. Dubois', role: 'B', text: 'Arguably, yes. The p-value is below 0.05, but the sample size is somewhat limited.', translation: 'Discutablement, oui. La valeur p est inférieure à 0,05, mais la taille de l\'échantillon est quelque peu limitée.' },
    { speaker: 'Dr. Chen', role: 'A', text: 'So we could claim it\'s a breakthrough?', translation: 'Donc nous pourrions affirmer que c\'est une avancée majeure ?' },
    { speaker: 'Dr. Dubois', role: 'B', text: 'I wouldn\'t go that far. It would be more accurate to say the results are apparently promising and merit further investigation.', translation: 'Je n\'irais pas jusque-là. Il serait plus précis de dire que les résultats sont apparemment prometteurs et méritent une investigation plus approfondie.' },
  ],
  conversationTitle: 'Discussion entre chercheurs : interpréter des résultats',
  pronunciation: [
    { word: 'Suggest', phonetic: '/səˈdʒest/', meaning: 'Suggérer', tip: 'L\'accent est sur « JEST » : « suh-JEST ». Le « g » se prononce « dj » comme dans « juice ». Ne dites pas « su-guess-t ».' },
    { word: 'Apparently', phonetic: '/əˈpærəntli/', meaning: 'Apparemment', tip: 'L\'accent est sur « PAR » : « uh-PAR-unt-li ». Les syllabes autour sont réduites. Ne prononcez pas « a-pa-ren-ment-li » à la française.' },
    { word: 'Presumably', phonetic: '/prɪˈzjuːməbli/', meaning: 'Vraisemblablement', tip: 'L\'accent est sur « ZU » : « pri-ZOOM-bli ». Le « u » après « z » est long comme dans « assume ». Les dernières syllabes sont rapides.' },
    { word: 'Arguably', phonetic: '/ˈɑːɡjuəbli/', meaning: 'Discutablement', tip: 'Prononcez « AR-gyuh-bli » — l\'accent est sur « AR ». Le « gu » se lie : « gyuh ». C\'est un mot très courant en anglais académique.' },
  ],
}

// ─── b2-l8: Academic Discussion ────────────────────────────────────────────────────
export const B2_L8: LessonContent = {
  vocab: [
    { english: 'to critique', french: 'critiquer / analyser', phonetic: '/krɪˈtiːk/', example: 'The reviewer critiqued the methodology as insufficiently rigorous.', exampleTranslation: 'Le réviseur a critiqué la méthodologie comme insuffisamment rigoureuse.' },
    { english: 'hypothesis', french: 'hypothèse', phonetic: '/haɪˈpɒθəsɪs/', example: 'Our hypothesis was not supported by the experimental data.', exampleTranslation: 'Notre hypothèse n\'a pas été confirmée par les données expérimentales.' },
    { english: 'correlation', french: 'corrélation', phonetic: '/ˌkɒrəˈleɪʃn/', example: 'There is a strong correlation between education level and income.', exampleTranslation: 'Il y a une forte corrélation entre le niveau d\'éducation et les revenus.' },
    { english: 'implication', french: 'implication / conséquence', phonetic: '/ˌɪmplɪˈkeɪʃn/', example: 'The implications of this study extend beyond the academic community.', exampleTranslation: 'Les implications de cette étude dépassent la communauté académique.' },
    { english: 'limitation', french: 'limite / limitation', phonetic: '/ˌlɪmɪˈteɪʃn/', example: 'One limitation of this study is the small sample size.', exampleTranslation: 'Une limite de cette étude est la petite taille de l\'échantillon.' },
  ],
  grammar: {
    title: 'Structures pour présenter et critiquer des recherches',
    explanation: 'Présenter et critiquer des recherches en anglais académique exige des structures spécifiques : (1) Présenter des résultats : « The findings indicate that... » / « The results demonstrate a clear pattern... » / « As Table 3 shows, ... » (2) Critiquer : « While the study provides valuable insights, it has several limitations... » / « A major weakness of this approach is... » / « The authors fail to account for... » (3) Comparer : « In contrast to Smith et al., our findings suggest... » / « This aligns with previous research by... » / « These results are consistent with... » (4) Concéder : « Although the sample size was limited, the results are nonetheless significant. » / « Despite these limitations, the study offers... » (5) Conclure : « Taken together, these findings suggest... » / « Further research is warranted to... ». La structure « While X, Y » est particulièrement utile pour équilibrer critique et reconnaissance.',
    examples: [
      { sentence: 'While the study provides valuable insights, it has several limitations that must be acknowledged.', translation: 'Bien que l\'étude fournisse des aperçus précieux, elle a plusieurs limites qui doivent être reconnues.', isCorrect: true },
      { sentence: 'The research is bad because it has a small sample.', translation: '', isCorrect: false },
      { sentence: 'In contrast to earlier studies, our findings suggest a different pattern.', translation: 'Contrairement aux études antérieures, nos résultats suggèrent un schéma différent.', isCorrect: true },
      { sentence: 'Despite these limitations, the study makes a significant contribution to the field.', translation: 'Malgré ces limites, l\'étude apporte une contribution significative au domaine.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The research is bad because it has a small sample.', correct: 'A limitation of this research is the relatively small sample size, which may affect the generalisability of the results.', explanation: 'En contexte académique, évitez les jugements vagues comme « bad ». Soyez précis sur les limites et leurs conséquences. Utilisez « limitation » au lieu de critique directe.' },
      { wrong: 'This proves our hypothesis.', correct: 'These findings provide support for our hypothesis.', explanation: '« Prove » est trop absolu en recherche. On « provides support for » ou « confirms » une hypothèse, mais on ne la « proves » jamais définitivement.' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Park', role: 'A', text: 'I\'d like to discuss the recent paper by Williams et al. What did you think of their methodology?', translation: 'J\'aimerais discuter le récent article de Williams et al. Qu\'avez-vous pensé de leur méthodologie ?' },
    { speaker: 'Dr. Müller', role: 'B', text: 'While the study provides valuable insights, I felt the sample was somewhat limited — only 50 participants.', translation: 'Bien que l\'étude fournisse des aperçus précieux, j\'ai trouvé l\'échantillon quelque peu limité — seulement 50 participants.' },
    { speaker: 'Dr. Park', role: 'A', text: 'I agree. But their hypothesis was well-constructed, and the correlation they found was quite strong.', translation: 'Je suis d\'accord. Mais leur hypothèse était bien construite, et la corrélation qu\'ils ont trouvée était assez forte.' },
    { speaker: 'Dr. Müller', role: 'B', text: 'True. However, they failed to account for confounding variables. That\'s a significant limitation.', translation: 'C\'est vrai. Cependant, ils n\'ont pas tenu compte des variables confusionnelles. C\'est une limite significative.' },
    { speaker: 'Dr. Park', role: 'A', text: 'Fair point. Despite these limitations, the implications for policy are considerable, wouldn\'t you say?', translation: 'Juste. Malgré ces limites, les implications pour les politiques publiques sont considérables, ne diriez-vous pas ?' },
    { speaker: 'Dr. Müller', role: 'B', text: 'Absolutely. Further research is clearly warranted to confirm these findings with a larger sample.', translation: 'Absolument. Des recherches supplémentaires sont clairement justifiées pour confirmer ces résultats avec un échantillon plus large.' },
  ],
  conversationTitle: 'Séminaire de recherche : critiquer un article',
  pronunciation: [
    { word: 'Critique', phonetic: '/krɪˈtiːk/', meaning: 'Critiquer', tip: 'Prononcez « kri-TEEK » — l\'accent est sur la deuxième syllabe. En nom, ça rime avec « antique ». Ne dites pas « kri-tik » à la française.' },
    { word: 'Hypothesis', phonetic: '/haɪˈpɒθəsɪs/', meaning: 'Hypothèse', tip: 'L\'accent est sur « POT » : « hai-POT-he-sis ». Le « y » = « ai » long. Le « th » est expiré. C\'est un mot de 4 syllabes, pas 3.' },
    { word: 'Correlation', phonetic: '/ˌkɒrəˈleɪʃn/', meaning: 'Corrélation', tip: 'L\'accent est sur « LA » : « ko-ruh-LAY-shun ». La terminaison « -tion » se prononce « shun » en anglais, pas « sion » à la française.' },
    { word: 'Implication', phonetic: '/ˌɪmplɪˈkeɪʃn/', meaning: 'Implication', tip: 'L\'accent est sur « KAY » : « im-pli-KAY-shun ». Le « i » de la première syllabe est court. Même règle pour « -tion » = « shun ».' },
  ],
}

// ─── b2-l9: Nominalization ────────────────────────────────────────────────────────
export const B2_L9: LessonContent = {
  vocab: [
    { english: 'analysis', french: 'analyse', phonetic: '/əˈnæləsɪs/', example: 'A detailed analysis of the data revealed unexpected patterns.', exampleTranslation: 'Une analyse détaillée des données a révélé des schémas inattendus.' },
    { english: 'assessment', french: 'évaluation', phonetic: '/əˈsesmənt/', example: 'The assessment of student performance takes multiple factors into account.', exampleTranslation: 'L\'évaluation de la performance des étudiants prend en compte de multiples facteurs.' },
    { english: 'development', french: 'développement', phonetic: '/dɪˈveləpmənt/', example: 'The development of new technologies has accelerated in recent years.', exampleTranslation: 'Le développement de nouvelles technologies s\'est accéléré ces dernières années.' },
    { english: 'investigation', french: 'investigation / enquête', phonetic: '/ɪnˌvestɪˈɡeɪʃn/', example: 'The investigation was conducted over a period of six months.', exampleTranslation: 'L\'investigation a été menée sur une période de six mois.' },
    { english: 'implementation', french: 'mise en œuvre', phonetic: '/ˌɪmplɪmenˈteɪʃn/', example: 'The implementation of the new policy begins next quarter.', exampleTranslation: 'La mise en œuvre de la nouvelle politique commence le prochain trimestre.' },
  ],
  grammar: {
    title: 'La nominalisation : transformer des verbes et adjectifs en noms',
    explanation: 'La nominalisation (nominalization) est la transformation d\'un verbe ou d\'un adjectif en nom. C\'est une caractéristique MAJEURE de l\'anglais académique qui le distingue de l\'anglais courant : (1) Verbe → Nom : « analyse » (de « to analyse »), « assessment » (de « to assess »), « development » (de « to develop »), « investigation » (de « to investigate »), « implementation » (de « to implement »). (2) Adjectif → Nom : « important » → « importance », « stable » → « stability », « probable » → « probability ». (3) Pourquoi l\'utiliser ? L\'anglais académique préfère les phrases nominales aux phrases verbales : COURANT : « They investigated the problem and found that it was important. » → ACADEMIQUE : « The investigation of the problem revealed its importance. » (4) Structure type : « The [nom] of [objet] [verbe]... » : « The analysis of the data suggests... », « The implementation of the policy resulted in... ». ATTENTION : la nominalisation excessive rend le texte lourd. Alternez entre formes verbales et nominales.',
    examples: [
      { sentence: 'The assessment of the project\'s impact revealed significant improvements.', translation: 'L\'évaluation de l\'impact du projet a révélé des améliorations significatives.', isCorrect: true },
      { sentence: 'They assessed the project and found it improved significantly.', translation: 'Ils ont évalué le projet et ont constaté qu\'il s\'est amélioré significativement.', isCorrect: true },
      { sentence: 'The development of the theory was happened slowly.', translation: '', isCorrect: false },
      { sentence: 'The investigation of the phenomenon yielded surprising results.', translation: 'L\'investigation du phénomène a produit des résultats surprenants.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The development of the theory was happened slowly.', correct: 'The development of the theory occurred slowly. / The theory developed slowly.', explanation: '« Happen » ne s\'utilise jamais à la voix passive (« was happened »). De plus, dans un contexte académique nominalisé, utilisez « occurred » ou reformulez avec le verbe actif.' },
      { wrong: 'The analyze of the data shows...', correct: 'The analysis of the data shows...', explanation: '« Analyse » est le verbe, « analysis » est le nom. En anglais académique britannique, le verbe s\'écrit « analyse » et le nom « analysis ». En américain, le verbe = « analyze ».' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Klein', role: 'A', text: 'I\'ve been reading your draft. The content is solid, but the writing style could be more academic.', translation: 'J\'ai lu votre brouillon. Le contenu est solide, mais le style d\'écriture pourrait être plus académique.' },
    { speaker: 'Lucas', role: 'B', text: 'Could you give me an example? I\'m not sure what you mean.', translation: 'Pourriez-vous me donner un exemple ? Je ne suis pas sûr de comprendre.' },
    { speaker: 'Prof. Klein', role: 'A', text: 'Sure. You wrote: « They implemented the policy and then assessed it. » A more academic version would be: « The implementation of the policy was followed by a thorough assessment. »', translation: 'Bien sûr. Vous avez écrit : « Ils ont mis en œuvre la politique puis l\'ont évaluée. » Une version plus académique serait : « La mise en œuvre de la politique a été suivie d\'une évaluation approfondie. »' },
    { speaker: 'Lucas', role: 'B', text: 'Ah, I see — you\'re using nominalization. So instead of « The data analysis showed », I could write « The analysis of the data indicated »?', translation: 'Ah, je vois — vous utilisez la nominalisation. Donc au lieu de « The data analysis showed », je pourrais écrire « The analysis of the data indicated » ?' },
    { speaker: 'Prof. Klein', role: 'A', text: 'Exactly. But don\'t overdo it. A mix of verbal and nominal styles keeps the reader engaged.', translation: 'Exactement. Mais n\'en abusez pas. Un mélange de styles verbal et nominal garde le lecteur engagé.' },
    { speaker: 'Lucas', role: 'B', text: 'That makes sense. I\'ll revise the draft with more nominalization and resubmit it.', translation: 'C\'est logique. Je vais réviser le brouillon avec plus de nominalisation et le soumettre à nouveau.' },
  ],
  conversationTitle: 'Professeur et étudiant : améliorer le style académique',
  pronunciation: [
    { word: 'Analysis', phonetic: '/əˈnæləsɪs/', meaning: 'Analyse', tip: 'L\'accent est sur « NAL » : « uh-NAL-uh-sis ». Le pluriel est « analyses » /əˈnæləsiːz/ — le « es » final se prononce « eez ». Ne confondez pas avec le verbe « analyse » /ˈænəlaɪz/.' },
    { word: 'Assessment', phonetic: '/əˈsesmənt/', meaning: 'Évaluation', tip: 'Prononcez « uh-SES-ment » — l\'accent est sur « SES ». Le « a » initial est un schwa rapide. Le « ment » final est doux.' },
    { word: 'Implementation', phonetic: '/ˌɪmplɪmenˈteɪʃn/', meaning: 'Mise en œuvre', tip: 'L\'accent est sur « TAY » : « im-pli-men-TAY-shun ». C\'est un mot long de 5 syllabes. La terminaison « -tion » = « shun ».' },
    { word: 'Investigation', phonetic: '/ɪnˌvestɪˈɡeɪʃn/', meaning: 'Investigation', tip: 'L\'accent est sur « GAY » : « in-ves-ti-GAY-shun ». Le « g » est dur comme dans « go ». La syllabe « ti » est rapide.' },
  ],
}

// ─── b2-l10: Academic Sounds ───────────────────────────────────────────────────────
export const B2_L10: LessonContent = {
  vocab: [
    { english: 'phenomenon', french: 'phénomène', phonetic: '/fɪˈnɒmɪnən/', example: 'This phenomenon has been observed in multiple contexts.', exampleTranslation: 'Ce phénomène a été observé dans de multiples contextes.' },
    { english: 'paradigm', french: 'paradigme', phonetic: '/ˈpærədaɪm/', example: 'The discovery led to a paradigm shift in the field.', exampleTranslation: 'La découverte a conduit à un changement de paradigme dans le domaine.' },
    { english: 'questionnaire', french: 'questionnaire', phonetic: '/ˌkwestʃəˈneər/', example: 'Participants completed the questionnaire online.', exampleTranslation: 'Les participants ont rempli le questionnaire en ligne.' },
    { english: 'quantitative', french: 'quantitatif / quantitative', phonetic: '/ˈkwɒntɪtətɪv/', example: 'The study employs a quantitative approach to measure outcomes.', exampleTranslation: 'L\'étude emploie une approche quantitative pour mesurer les résultats.' },
    { english: 'qualitative', french: 'qualitatif / qualitative', phonetic: '/ˈkwɒlɪtətɪv/', example: 'Qualitative research provides deeper insights into participants\' experiences.', exampleTranslation: 'La recherche qualitative fournit des aperçus plus profonds des expériences des participants.' },
  ],
  grammar: {
    title: 'La prononciation académique : mots pièges avancés',
    explanation: 'Le vocabulaire académique anglais est rempli de mots dont la prononciation diffère radicalement du français : (1) « Phenomenon » : /fɪˈnɒmɪnən/ — le « ph » = « f », l\'accent sur « NOM ». Le pluriel est « phenomena » /fɪˈnɒmɪnə/ — le « a » final se prononce « uh ». (2) « Paradigm » : /ˈpærədaɪm/ — le « digm » se prononce « daim » (comme « dime » avec un « a »), PAS « dig-me ». (3) « Questionnaire » : /ˌkwestʃəˈneər/ — en anglais, l\'accent est sur « NAI » et les lettres finales « -aire » se prononcent « -air ». Ne dites pas « kes-tion-nèr » à la française. (4) « Quantitative / Qualitative » : /ˈkwɒntɪtətɪv/ et /ˈkwɒlɪtətɪv/ — l\'accent est sur la PREMIÈRE syllabe, pas sur « ta » comme en français. Le « qu » = « kw ». (5) Règle générale : les mots d\'origine latine/grecque en anglais ont souvent l\'accent sur une syllabe différente du français. Vérifiez TOUJOURS la prononciation.',
    examples: [
      { sentence: 'This phenomenon has been widely documented in the literature.', translation: 'Ce phénomène a été largement documenté dans la littérature.', isCorrect: true },
      { sentence: 'The paradigme of modern physics differs from classical mechanics.', translation: '', isCorrect: false },
      { sentence: 'Both quantitative and qualitative methods were employed in this study.', translation: 'Des méthodes tant quantitatives que qualitatives ont été employées dans cette étude.', isCorrect: true },
      { sentence: 'The questionnaire was distributed to 200 participants.', translation: 'Le questionnaire a été distribué à 200 participants.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The paradigme of modern physics differs from classical mechanics.', correct: 'The paradigm of modern physics differs from classical mechanics.', explanation: 'L\'orthographe est « paradigm » (pas « paradigme » avec « e »). Et la prononciation est « PA-ruh-daim », pas « pa-ra-dig-me ». Le « gm » final se prononce comme « daim ».' },
      { wrong: 'The phenomena was observed repeatedly.', correct: 'The phenomenon was observed repeatedly. / The phenomena were observed repeatedly.', explanation: '« Phenomenon » est le singulier (was), « phenomena » est le pluriel (were). C\'est un emprunt au grec. Ne dites pas « phenomenons ».' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Okafor', role: 'A', text: 'The questionnaire results are in. Shall we discuss the quantitative findings first?', translation: 'Les résultats du questionnaire sont arrivés. Devons-nous discuter d\'abord les résultats quantitatifs ?' },
    { speaker: 'Dr. Bergström', role: 'B', text: 'Yes. The data reveal an interesting phenomenon — respondents over 50 tend to answer differently.', translation: 'Oui. Les données révèlent un phénomène intéressant — les répondants de plus de 50 ans ont tendance à répondre différemment.' },
    { speaker: 'Dr. Okafor', role: 'A', text: 'That\'s consistent with the existing paradigm in social psychology.', translation: 'C\'est cohérent avec le paradigme existant en psychologie sociale.' },
    { speaker: 'Dr. Bergström', role: 'B', text: 'Indeed. But the qualitative data tell a slightly different story. Some participants expressed views that challenge the current model.', translation: 'En effet. Mais les données qualitatives racontent une histoire légèrement différente. Certains participants ont exprimé des opinions qui remettent en question le modèle actuel.' },
    { speaker: 'Dr. Okafor', role: 'A', text: 'Fascinating. A paradigm shift might be on the horizon. We should investigate this further.', translation: 'Fascinant. Un changement de paradigme pourrait être à l\'horizon. Nous devrions investiguer cela plus en profondeur.' },
    { speaker: 'Dr. Bergström', role: 'B', text: 'Agreed. Let\'s design a follow-up study with a larger and more diverse sample.', translation: 'D\'accord. Concevons une étude de suivi avec un échantillon plus large et plus diversifié.' },
  ],
  conversationTitle: 'Entre chercheurs : quantitatif vs qualitatif',
  pronunciation: [
    { word: 'Phenomenon', phonetic: '/fɪˈnɒmɪnən/', meaning: 'Phénomène', tip: 'L\'accent est sur « NOM » : « fi-NOM-uh-nun ». Le « ph » = « f ». Le pluriel « phenomena » se prononce « fi-NOM-uh-nuh ». Ne dites JAMAIS « fé-no-mé-non ».' },
    { word: 'Paradigm', phonetic: '/ˈpærədaɪm/', meaning: 'Paradigme', tip: 'Prononcez « PA-ruh-daim » — l\'accent est sur « PA ». Le « gm » final se prononce comme « dime » avec un « a ». C\'est l\'une des prononciations les plus piégées pour les francophones !' },
    { word: 'Questionnaire', phonetic: '/ˌkwestʃəˈneər/', meaning: 'Questionnaire', tip: 'Prononcez « kwes-chuh-NAIR » — l\'accent est sur « NAI ». Le « qu » = « kw ». La fin « -aire » se prononce « air » comme dans « hair», pas « ère » français.' },
    { word: 'Quantitative', phonetic: '/ˈkwɒntɪtətɪv/', meaning: 'Quantitatif', tip: 'L\'accent est sur « KWON » : « KWON-ti-tuh-tiv ». Le « qu » = « kw ». La syllabe « ta » est réduite en schwa. Comparez : « QUAL-i-tuh-tiv » (qualitative) — même structure.' },
  ],
}
