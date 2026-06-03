import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// B2 UPPER INTERMEDIATE — UNIT 3: POLITICS & GOVERNMENT (b2-l11 through b2-l15)
// YOELANG English Learning App for Francophone Users
// Upper-intermediate: political vocabulary, modal deduction, parliamentary debate, formal register
// ════════════════════════════════════════════════════════════════════════════════

// ─── b2-l11: Democracy (vocabulary) ────────────────────────────────────────────────
export const B2_L11: LessonContent = {
  vocab: [
    { english: 'accountability', french: 'responsabilité / reddition de comptes', phonetic: '/əˌkaʊntəˈbɪləti/', example: 'Government accountability is a cornerstone of democratic governance.', exampleTranslation: 'La responsabilité du gouvernement est une pierre angulaire de la gouvernance démocratique.' },
    { english: 'constituency', french: 'circonscription électorale', phonetic: '/kənˈstɪtjuənsi/', example: 'She represents a rural constituency in the north of the country.', exampleTranslation: 'Elle représente une circonscription rurale dans le nord du pays.' },
    { english: 'suffrage', french: 'suffrage / droit de vote', phonetic: '/ˈsʌfrɪdʒ/', example: 'Universal suffrage was only achieved in the 20th century in many countries.', exampleTranslation: 'Le suffrage universel n\'a été atteint qu\'au 20e siècle dans de nombreux pays.' },
    { english: 'legislation', french: 'législation / loi', phonetic: '/ˌledʒɪsˈleɪʃn/', example: 'The new legislation aims to protect whistle-blowers in the public sector.', exampleTranslation: 'La nouvelle législation vise à protéger les lanceurs d\'alerte dans le secteur public.' },
    { english: 'referendum', french: 'référendum', phonetic: '/ˌrefəˈrendəm/', example: 'The government called a referendum on the constitutional reform.', exampleTranslation: 'Le gouvernement a convoqué un référendum sur la réforme constitutionnelle.' },
  ],
  grammar: {
    title: 'Le vocabulaire politique anglais : nuances et faux amis',
    explanation: 'Le vocabulaire de la politique en anglais contient de nombreuses subtilités pour les francophones : (1) « Accountability » n\'a pas d\'équivalent direct en français. Ce n\'est pas simplement « responsabilité » — c\'est l\'obligation de rendre des comptes. On dit « hold someone accountable for something » (tenir quelqu\'un responsable de quelque chose). (2) « Constituency » = circonscription électorale, PAS « constitution » (qui se dit « constitution »). « Constituent » = électeur d\'une circonscription ou membre d\'un ensemble. (3) « Legislation » est indénombrable en anglais : on dit « new legislation », PAS « a new legislation ». Pour un article de loi spécifique, on dit « a law » ou « a piece of legislation ». (4) « Referendum » : le pluriel peut être « referendums » ou « referenda » (emprunt latin). Les deux sont acceptés, mais « referendums » est plus courant. (5) « Suffrage » en anglais est plus formel et moins courant qu\'en français. On entend plus souvent « voting rights » ou « the right to vote ».',
    examples: [
      { sentence: 'The minister was held accountable for the failure of the policy.', translation: 'Le ministre a été tenu responsable de l\'échec de la politique.', isCorrect: true },
      { sentence: 'She introduced a new legislation to protect workers.', translation: '', isCorrect: false },
      { sentence: 'The constituency elected a new representative in the by-election.', translation: 'La circonscription a élu un nouveau représentant lors de l\'élection partielle.', isCorrect: true },
      { sentence: 'Two referendums have been held on this issue in the past decade.', translation: 'Deux référendums ont été organisés sur cette question au cours de la dernière décennie.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She introduced a new legislation to protect workers.', correct: 'She introduced new legislation to protect workers. / She introduced a new law to protect workers.', explanation: '« Legislation » est indénombrable en anglais. On dit « new legislation » (sans article) ou « a new law / a new piece of legislation » pour une loi spécifique.' },
      { wrong: 'The constituency of the country guarantees individual rights.', correct: 'The constitution of the country guarantees individual rights.', explanation: 'Ne confondez pas « constituency » (circonscription électorale) et « constitution » (constitution, loi fondamentale). Ce sont deux mots très différents !' },
    ],
  },
  conversation: [
    { speaker: 'Amara', role: 'A', text: 'Did you read about the proposed legislation on electoral reform?', translation: 'As-tu lu la proposition de législation sur la réforme électorale ?' },
    { speaker: 'Frédéric', role: 'B', text: 'Yes, I did. It seems like a step toward greater accountability in government.', translation: 'Oui. Cela semble être un pas vers une plus grande responsabilité du gouvernement.' },
    { speaker: 'Amara', role: 'A', text: 'I agree. But some argue it doesn\'t go far enough — especially regarding suffrage for expatriate citizens.', translation: 'Je suis d\'accord. Mais certains estiment que ça ne va pas assez loin — surtout concernant le droit de vote des citoyens expatriés.' },
    { speaker: 'Frédéric', role: 'B', text: 'That\'s a fair point. My constituency has a large diaspora population, and they feel underrepresented.', translation: 'C\'est un bon point. Ma circonscription a une grande population de la diaspora, et ils se sentent sous-représentés.' },
    { speaker: 'Amara', role: 'A', text: 'Perhaps a referendum on the issue would give citizens a direct voice.', translation: 'Peut-être qu\'un référendum sur la question donnerait aux citoyens une voix directe.' },
    { speaker: 'Frédéric', role: 'B', text: 'It would, but referendums can be unpredictable. The government might prefer to pass the legislation through parliament.', translation: 'Ce serait le cas, mais les référendums peuvent être imprévisibles. Le gouvernement pourrait préférer faire passer la législation par le parlement.' },
  ],
  conversationTitle: 'Réforme électorale et démocratie',
  pronunciation: [
    { word: 'Accountability', phonetic: '/əˌkaʊntəˈbɪləti/', meaning: 'Responsabilité', tip: 'L\'accent est sur « BIL » : « uh-KOUN-tuh-BIL-uh-ti ». C\'est un mot long de 6 syllabes. Ne l\'avalez pas — articulez chaque syllabe, surtout « BIL ».' },
    { word: 'Constituency', phonetic: '/kənˈstɪtjuənsi/', meaning: 'Circonscription', tip: 'L\'accent est sur « STIT » : « kun-STI-choo-un-si ». Le « tu » se prononce « choo » comme dans « constitution ». L\'accent est sur la 2e syllabe, pas la 1re.' },
    { word: 'Suffrage', phonetic: '/ˈsʌfrɪdʒ/', meaning: 'Suffrage / Droit de vote', tip: 'Prononcez « SUF-ridj » — l\'accent est sur « SUF ». Le « age » final se prononce « idj » comme dans « damage ». Ne dites pas « su-fraj » à la française.' },
    { word: 'Legislation', phonetic: '/ˌledʒɪsˈleɪʃn/', meaning: 'Législation', tip: 'L\'accent est sur « LAY » : « lej-is-LAY-shun ». La terminaison « -tion » = « shun ». Ne mettez pas l\'accent sur la première syllabe comme en français.' },
  ],
}

// ─── b2-l12: Elections (grammar) ────────────────────────────────────────────────────
export const B2_L12: LessonContent = {
  vocab: [
    { english: 'to campaign', french: 'faire campagne / mener une campagne', phonetic: '/kæmˈpeɪn/', example: 'She campaigned on a platform of economic reform and social justice.', exampleTranslation: 'Elle a fait campagne sur un programme de réforme économique et de justice sociale.' },
    { english: 'ballot', french: 'bulletin de vote / scrutin', phonetic: '/ˈbælət/', example: 'Voters cast their ballots in record numbers during the election.', exampleTranslation: 'Les électeurs ont voté en nombre record lors de l\'élection.' },
    { english: 'turnout', french: 'taux de participation', phonetic: '/ˈtɜːrnaʊt/', example: 'The voter turnout was disappointingly low in the last election.', exampleTranslation: 'Le taux de participation a été décevant lors de la dernière élection.' },
    { english: 'mandate', french: 'mandat / investiture', phonetic: '/ˈmændeɪt/', example: 'The president claimed she had a mandate to push through the reforms.', exampleTranslation: 'La présidente a affirmé qu\'elle avait un mandat pour faire passer les réformes.' },
    { english: 'polling station', french: 'bureau de vote', phonetic: '/ˈpəʊlɪŋ ˈsteɪʃn/', example: 'Volunteers helped direct voters to their nearest polling station.', exampleTranslation: 'Des bénévoles ont aidé à diriger les électeurs vers le bureau de vote le plus proche.' },
  ],
  grammar: {
    title: 'Les modaux de déduction et spéculation : analyser des événements politiques',
    explanation: 'Au niveau B2, vous devez maîtriser les modaux de déduction au passé pour analyser des événements politiques et formuler des hypothèses : (1) « Must have + participe passé » = déduction quasi certaine (quelque chose s\'est sûrement passé) : « The opposition must have known about the scandal before the election. » (L\'opposition a dû être au courant...) — On est presque sûr. (2) « Can\'t have + participe passé » = déduction négative quasi certaine (quelque chose ne s\'est sûrement PAS passé) : « The candidate can\'t have won fairly — the results don\'t add up. » (Le candidat ne peut pas avoir gagné honnêtement...) (3) « May / Might / Could have + participe passé » = possibilité dans le passé (quelque chose s\'est peut-être passé) : « The voters may have been influenced by social media. » / « The government might have underestimated the opposition. » / « The low turnout could have affected the result. » — Ces trois modaux expriment une possibilité, du plus probable (may) au moins probable (might), could étant plus neutre. (4) « Should have + participe passé » = critique rétrospective (on aurait dû faire quelque chose) : « The government should have consulted the public before making the decision. » ATTENTION : « Must have » exprime une DÉDUCTION, pas une obligation dans le passé. Pour l\'obligation passée, on utilise « had to ».',
    examples: [
      { sentence: 'The ruling party must have anticipated the backlash from their policy change.', translation: 'Le parti au pouvoir a dû anticiper la réaction négative à leur changement de politique.', isCorrect: true },
      { sentence: 'The opposition must to have known about the deal.', translation: '', isCorrect: false },
      { sentence: 'The low turnout may have been caused by voter apathy and poor weather.', translation: 'Le faible taux de participation a pu être causé par l\'apathie des électeurs et le mauvais temps.', isCorrect: true },
      { sentence: 'The government can\'t have ignored the warning signs — the reports were on their desk.', translation: 'Le gouvernement ne peut pas avoir ignoré les signes d\'alerte — les rapports étaient sur leur bureau.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The opposition must to have known about the deal.', correct: 'The opposition must have known about the deal.', explanation: 'Après un modal (must, can, may, might, could), on n\'ajoute JAMAIS « to ». On dit « must have known », pas « must to have known ». Le modal est directement suivi de « have + participe passé ».' },
      { wrong: 'The voters must have had to been confused.', correct: 'The voters must have been confused.', explanation: 'Ne combinez pas « must have » avec « had to » dans une déduction. « Must have been » = déduction (ils ont sûrement été confus). « Had to be » = obligation (ils devaient être confus). Ne mélangez pas les deux structures.' },
    ],
  },
  conversation: [
    { speaker: 'Youssef', role: 'A', text: 'Did you see the election results? The ruling party suffered a major defeat.', translation: 'As-tu vu les résultats des élections ? Le parti au pouvoir a subi une défaite majeure.' },
    { speaker: 'Clémence', role: 'B', text: 'They must have underestimated voter anger over the tax reforms.', translation: 'Ils ont dû sous-estimer la colère des électeurs face aux réformes fiscales.' },
    { speaker: 'Youssef', role: 'A', text: 'Absolutely. And the turnout was remarkably high — people must have felt very strongly about it.', translation: 'Absolument. Et le taux de participation était remarquablement élevé — les gens ont dû se sentir très concernés.' },
    { speaker: 'Clémence', role: 'B', text: 'The opposition can\'t have expected such a landslide victory. Even their own campaign team looked surprised.', translation: 'L\'opposition ne peut pas avoir espéré une victoire aussi écrasante. Même leur équipe de campagne avait l\'air surprise.' },
    { speaker: 'Youssef', role: 'A', text: 'The surge in young voters might have made the difference. They campaigned heavily on social media.', translation: 'La hausse des jeunes électeurs pourrait avoir fait la différence. Ils ont beaucoup fait campagne sur les réseaux sociaux.' },
    { speaker: 'Clémence', role: 'B', text: 'True. The government should have addressed youth unemployment earlier — it could have saved them.', translation: 'C\'est vrai. Le gouvernement aurait dû s\'attaquer au chômage des jeunes plus tôt — cela aurait pu les sauver.' },
  ],
  conversationTitle: 'Analyse post-électorale : déductions et hypothèses',
  pronunciation: [
    { word: 'Campaign', phonetic: '/kæmˈpeɪn/', meaning: 'Campagne', tip: 'L\'accent est sur « PAIN » : « kam-PAYN ». Ne prononcez PAS à la française « kan-pègn ». Le « aign » anglais se prononce « ayn » comme dans « rain ».' },
    { word: 'Ballot', phonetic: '/ˈbælət/', meaning: 'Bulletin de vote', tip: 'Prononcez « BA-lut » — l\'accent est sur la première syllabe. Le « a » est ouvert comme dans « cat ». Le « ot » final est réduit en schwa.' },
    { word: 'Turnout', phonetic: '/ˈtɜːrnaʊt/', meaning: 'Taux de participation', tip: 'Prononcez « TURN-out » — l\'accent est sur « TURN ». Le « ur » est long comme dans « bird ». Le « out » est clair et net.' },
    { word: 'Mandate', phonetic: '/ˈmændeɪt/', meaning: 'Mandat', tip: 'L\'accent est sur « MAN » : « MAN-dayt ». Le « a » de la première syllabe est très ouvert. Ne dites pas « man-DAT » à la française.' },
  ],
}

// ─── b2-l13: Parliamentary Debate (conversation) ────────────────────────────────────
export const B2_L13: LessonContent = {
  vocab: [
    { english: 'to amend', french: 'amender / modifier', phonetic: '/əˈmend/', example: 'The opposition proposed to amend the bill before the third reading.', exampleTranslation: 'L\'opposition a proposé d\'amender le projet de loi avant la troisième lecture.' },
    { english: 'to veto', french: 'veto / opposer un veto', phonetic: '/ˈviːtəʊ/', example: 'The president threatened to veto the legislation if it reached her desk.', exampleTranslation: 'La présidente a menacé d\'opposer son veto à la législation si elle arrivait sur son bureau.' },
    { english: 'to deliberate', french: 'délibérer', phonetic: '/dɪˈlɪbəreɪt/', example: 'The committee deliberated for three hours before reaching a decision.', exampleTranslation: 'Le comité a délibéré pendant trois heures avant de prendre une décision.' },
    { english: 'bipartisan', french: 'bipartite / consensuel', phonetic: '/ˌbaɪˈpɑːrtɪzən/', example: 'The bill received bipartisan support in both houses of parliament.', exampleTranslation: 'Le projet de loi a reçu un soutien bipartite dans les deux chambres du parlement.' },
    { english: 'to filibuster', french: 'faire de l\'obstruction parlementaire', phonetic: '/ˈfɪlɪbʌstər/', example: 'The senator threatened to filibuster the vote to delay the legislation.', exampleTranslation: 'Le sénateur a menacé de faire de l\'obstruction parlementaire pour retarder la législation.' },
  ],
  grammar: {
    title: 'Le registre politique : langage formel et stratégies rhétoriques',
    explanation: 'Le débat parlementaire exige un registre formel et des stratégies rhétoriques spécifiques : (1) Formulations atténuées (hedging politique) : au lieu de dire « This policy is wrong », on dit « I would respectfully suggest that this policy may not achieve its intended aims ». (2) Le conditionnel de politesse : « I would argue that... » au lieu de « I argue that... » ; « The minister might wish to consider... » au lieu de « The minister should consider... ». (3) La structure argumentative : « While I acknowledge the government\'s position, I must point out that... » = concession + opposition. (4) Le langage procédural : « I move to amend clause 3 » = je propose d\'amender l\'article 3 ; « I yield the floor » = je cède la parole ; « I call for a vote » = je demande un vote ; « The floor recognizes... » = la parole est donnée à... (5) Éviter le langage trop direct : « The honourable member is mistaken » (le député honorable se trompe) au lieu de « You\'re wrong » (tu as tort). Ce registre formel est essentiel dans tout contexte professionnel anglophone.',
    examples: [
      { sentence: 'While I acknowledge the government\'s efforts, I would argue that the bill does not go far enough.', translation: 'Bien que je reconnaisse les efforts du gouvernement, je soutiendrais que le projet de loi ne va pas assez loin.', isCorrect: true },
      { sentence: 'You\'re wrong about this policy.', translation: '', isCorrect: false },
      { sentence: 'The honourable member might wish to reconsider her position on this matter.', translation: 'La députée honorable pourrait souhaiter reconsidérer sa position sur cette question.', isCorrect: true },
      { sentence: 'I move to amend clause 5 of the proposed legislation.', translation: 'Je propose d\'amender l\'article 5 de la législation proposée.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'You\'re wrong about this policy.', correct: 'I would respectfully suggest that the honourable member may be mistaken about this policy.', explanation: 'Dans un débat parlementaire ou tout contexte formel, les attaques personnelles directes (« you\'re wrong ») sont inappropriées. Utilisez des formulations atténuées : « I would respectfully suggest » + « may be mistaken ».' },
      { wrong: 'I want to change the law.', correct: 'I move to amend the legislation. / I propose an amendment to the bill.', explanation: 'Le vocabulaire procédural est précis : on ne « change » pas une loi, on « amends » un projet de loi ou on « proposes an amendment ». « I move to » est la formule officielle pour faire une proposition.' },
    ],
  },
  conversation: [
    { speaker: 'Minister Diallo', role: 'A', text: 'Madam Speaker, I move that this house approve the Climate Action Bill as presented.', translation: 'Madame la Présidente, je propose que cette assemblée approuve le projet de loi sur l\'action climatique tel que présenté.' },
    { speaker: 'MP Renard', role: 'B', text: 'While I acknowledge the urgency of climate action, I would argue that this bill places an unfair burden on small businesses.', translation: 'Bien que je reconnaisse l\'urgence de l\'action climatique, je soutiendrais que ce projet de loi impose une charge injuste aux petites entreprises.' },
    { speaker: 'Minister Diallo', role: 'A', text: 'The honourable member might wish to consider the amendment we introduced last week, which provides a transition period for businesses with fewer than 50 employees.', translation: 'La députée honorable pourrait souhaiter examiner l\'amendement que nous avons introduit la semaine dernière, qui prévoit une période de transition pour les entreprises de moins de 50 salariés.' },
    { speaker: 'MP Renard', role: 'B', text: 'I appreciate that concession. However, I still believe the bill should be further amended before we call for a vote.', translation: 'J\'apprécie cette concession. Cependant, je continue de croire que le projet de loi devrait être davantage amendé avant que nous demandions un vote.' },
    { speaker: 'Minister Diallo', role: 'A', text: 'We have already deliberated extensively on this matter. I would respectfully suggest that further delay serves no one — the bipartisan committee endorsed this version.', translation: 'Nous avons déjà délibéré longuement sur cette question. Je suggérerais respectueusement que tout délai supplémentaire ne sert personne — le comité bipartite a approuvé cette version.' },
    { speaker: 'MP Renard', role: 'B', text: 'Then I yield the floor, Madam Speaker. But let the record show that I reserve the right to propose further amendments at the next reading.', translation: 'Alors je cède la parole, Madame la Présidente. Mais que le compte rendu montre que je me réserve le droit de proposer de nouveaux amendements à la prochaine lecture.' },
  ],
  conversationTitle: 'Débat parlementaire : le projet de loi sur le climat',
  pronunciation: [
    { word: 'Amend', phonetic: '/əˈmend/', meaning: 'Amender', tip: 'Prononcez « uh-MEND » — l\'accent est sur la deuxième syllabe. Le « a » initial est un schwa rapide. Ne dites pas « a-mând » à la française.' },
    { word: 'Veto', phonetic: '/ˈviːtəʊ/', meaning: 'Veto', tip: 'Prononcez « VEE-toh » — l\'accent est sur « VEE ». Le « e » est long comme dans « see ». Le « o » final est arrondi. Ne dites pas « vé-to » à la française.' },
    { word: 'Bipartisan', phonetic: '/ˌbaɪˈpɑːrtɪzən/', meaning: 'Bipartite', tip: 'L\'accent est sur « PAR » : « by-PAR-ti-zun ». Le « bi » = « baï » comme dans « bicycle ». Le « san » final est réduit en schwa.' },
    { word: 'Filibuster', phonetic: '/ˈfɪlɪbʌstər/', meaning: 'Obstruction parlementaire', tip: 'Prononcez « FIL-i-bus-ter » — l\'accent est sur « FIL ». Le « i » est court comme dans « bit ». Le « u » de « bus » est ouvert comme dans « but ».' },
  ],
}

// ─── b2-l14: Political Systems (pronunciation) ──────────────────────────────────────
export const B2_L14: LessonContent = {
  vocab: [
    { english: 'sovereignty', french: 'souveraineté', phonetic: '/ˈsɒvrənti/', example: 'National sovereignty is a fundamental principle of international law.', exampleTranslation: 'La souveraineté nationale est un principe fondamental du droit international.' },
    { english: 'republic', french: 'république', phonetic: '/rɪˈpʌblɪk/', example: 'France is a semi-presidential republic with a strong parliamentary tradition.', exampleTranslation: 'La France est une république semi-présidentielle avec une forte tradition parlementaire.' },
    { english: 'monarchy', french: 'monarchie', phonetic: '/ˈmɒnəki/', example: 'The constitutional monarchy shares power with an elected parliament.', exampleTranslation: 'La monarchie constitutionnelle partage le pouvoir avec un parlement élu.' },
    { english: 'federalism', french: 'fédéralisme', phonetic: '/ˈfedərəlɪzəm/', example: 'Federalism allows states to maintain their own laws within a united framework.', exampleTranslation: 'Le fédéralisme permet aux États de maintenir leurs propres lois dans un cadre uni.' },
    { english: 'autocracy', french: 'autocratie', phonetic: '/ɔːˈtɒkrəsi/', example: 'The country\'s shift toward autocracy alarmed the international community.', exampleTranslation: 'La transition du pays vers l\'autocratie a alarmé la communauté internationale.' },
  ],
  grammar: {
    title: 'Le registre politique formel : prononciation et structure du discours',
    explanation: 'Le discours politique formel anglais a des conventions de prononciation et de structure qui le distinguent : (1) Mots politiques à prononciation piégée : « sovereignty » = /ˈsɒvrənti/ (le « eign » disparaît, contrairement au français « souveraineté ») ; « republic » = /rɪˈpʌblɪk/ (l\'accent est sur « PUB », pas sur « ré ») ; « monarchy » = /ˈmɒnəki/ (le « ch » = « k », PAS « ch » doux) ; « autocracy » = /ɔːˈtɒkrəsi/ (l\'accent est sur « TOC », pas sur « au »). (2) Le discours politique utilise la voix passive pour distancier : « Mistakes were made » (des erreurs ont été commises) au lieu de « We made mistakes » (nous avons fait des erreurs) ; « The decision was taken after careful consideration » au lieu de « We decided ». (3) Les nominalisations sont omniprésentes en discours politique : « The implementation of the policy » au lieu de « When we implemented the policy » ; « The restoration of public trust » au lieu de « Restoring public trust ». (4) Évitez les contractions en registre formel : « It is » au lieu de « It\'s » ; « We will » au lieu de « We\'ll » ; « Cannot » au lieu de « Can\'t ». (5) L\'utilisation du « we » inclusif : « We must work together » crée un sentiment d\'unité nationale.',
    examples: [
      { sentence: 'It is the responsibility of this government to uphold the sovereignty of our nation.', translation: 'Il est de la responsabilité de ce gouvernement de préserver la souveraineté de notre nation.', isCorrect: true },
      { sentence: 'Mistakes was made during the transition.', translation: '', isCorrect: false },
      { sentence: 'The restoration of public confidence remains our foremost priority.', translation: 'La restauration de la confiance du public reste notre priorité absolue.', isCorrect: true },
      { sentence: 'We cannot allow the erosion of democratic principles under any circumstances.', translation: 'Nous ne pouvons permettre l\'érosion des principes démocratiques en aucune circonstance.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Mistakes was made during the transition.', correct: 'Mistakes were made during the transition.', explanation: '« Mistakes » est au pluriel, donc le verbe doit être « were » (pluriel), pas « was » (singulier). C\'est une erreur courante car « mistakes » est le sujet de la phrase passive.' },
      { wrong: 'It\'s the government\'s duty to protect sovereignty.', correct: 'It is the government\'s duty to protect sovereignty.', explanation: 'En registre politique formel, évitez les contractions. « It is » est plus approprié que « It\'s ». De même : « cannot » au lieu de « can\'t », « we will » au lieu de « we\'ll ».' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Mensah', role: 'A', text: 'Today we\'re comparing political systems. What are the key differences between a republic and a constitutional monarchy?', translation: 'Aujourd\'hui nous comparons les systèmes politiques. Quelles sont les différences clés entre une république et une monarchie constitutionnelle ?' },
    { speaker: 'Élodie', role: 'B', text: 'In a republic, the head of state is elected, whereas in a constitutional monarchy, the monarch\'s role is largely ceremonial.', translation: 'Dans une république, le chef de l\'État est élu, alors que dans une monarchie constitutionnelle, le rôle du monarque est largement cérémoniel.' },
    { speaker: 'Prof. Mensah', role: 'A', text: 'Precisely. And what about federalism? How does it affect sovereignty?', translation: 'Précisément. Et le fédéralisme ? Comment affecte-t-il la souveraineté ?' },
    { speaker: 'Élodie', role: 'B', text: 'Federalism divides sovereignty between the central government and the states. It cannot work without a clear constitutional framework.', translation: 'Le fédéralisme divise la souveraineté entre le gouvernement central et les États. Il ne peut fonctionner sans un cadre constitutionnel clair.' },
    { speaker: 'Prof. Mensah', role: 'A', text: 'Indeed. By contrast, an autocracy concentrates all power in one individual — sovereignty is indivisible.', translation: 'En effet. Par contraste, une autocratie concentre tout le pouvoir en un seul individu — la souveraineté est indivisible.' },
    { speaker: 'Élodie', role: 'B', text: 'Which is precisely why the international community must remain vigilant. Democratic institutions cannot be taken for granted.', translation: 'C\'est précisément pourquoi la communauté internationale doit rester vigilante. Les institutions démocratiques ne peuvent être tenues pour acquises.' },
  ],
  conversationTitle: 'Comparaison des systèmes politiques',
  pronunciation: [
    { word: 'Sovereignty', phonetic: '/ˈsɒvrənti/', meaning: 'Souveraineté', tip: 'Prononcez « SOV-run-ti » — l\'accent est sur « SOV ». ATTENTION : le « eign » du français disparaît ! Ne dites PAS « so-ve-rain-e-ti ». C\'est 3 syllabes, pas 5.' },
    { word: 'Republic', phonetic: '/rɪˈpʌblɪk/', meaning: 'République', tip: 'L\'accent est sur « PUB » : « ri-PUB-lik ». Ne mettez PAS l\'accent sur la première syllabe comme en français « RÉ-pu-blik ». Le « u » de « pub » est ouvert.' },
    { word: 'Monarchy', phonetic: '/ˈmɒnəki/', meaning: 'Monarchie', tip: 'Prononcez « MON-uh-ki » — le « ch » se prononce « k » comme dans « character ». Ne dites PAS « mo-nar-chi » à la française avec un « ch » doux.' },
    { word: 'Autocracy', phonetic: '/ɔːˈtɒkrəsi/', meaning: 'Autocratie', tip: 'L\'accent est sur « TOC » : « aw-TOK-ruh-si ». Le « au » initial est long comme dans « law ». Ne mettez pas l\'accent sur « au » comme en français.' },
  ],
}

// ─── b2-l15: Political Sounds (vocabulary) ──────────────────────────────────────────
export const B2_L15: LessonContent = {
  vocab: [
    { english: 'lobbying', french: 'lobbying / activités de lobby', phonetic: '/ˈlɒbiɪŋ/', example: 'Corporate lobbying has a significant influence on environmental policy.', exampleTranslation: 'Le lobbying des entreprises a une influence significative sur la politique environnementale.' },
    { english: 'sanctions', french: 'sanctions', phonetic: '/ˈsæŋkʃnz/', example: 'Economic sanctions were imposed on the regime for human rights violations.', exampleTranslation: 'Des sanctions économiques ont été imposées au régime pour violations des droits humains.' },
    { english: 'gerrymandering', french: 'charcutage électoral / gerrymandering', phonetic: '/ˈdʒerɪmændərɪŋ/', example: 'The opposition accused the ruling party of gerrymandering to secure more seats.', exampleTranslation: 'L\'opposition a accusé le parti au pouvoir de charcutage électoral pour sécuriser plus de sièges.' },
    { english: 'impeachment', french: 'procédure de destitution / mise en accusation', phonetic: '/ɪmˈpiːtʃmənt/', example: 'The impeachment proceedings divided the nation along partisan lines.', exampleTranslation: 'La procédure de destitution a divisé la nation selon des lignes partisanes.' },
    { english: 'ratification', french: 'ratification', phonetic: '/ˌrætɪfɪˈkeɪʃn/', example: 'The ratification of the treaty requires a two-thirds majority in the senate.', exampleTranslation: 'La ratification du traité exige une majorité des deux tiers au sénat.' },
  ],
  grammar: {
    title: 'Les expressions idiomatiques politiques : métaphores et euphémismes',
    explanation: 'Le langage politique anglais est riche en métaphores, euphémismes et expressions idiomatiques : (1) Métaphores de pouvoir : « to wield power » (exercer le pouvoir — comme manier une arme) ; « a power grab » (une prise de pouvoir — comme une saisie physique) ; « to shift the balance of power » (modifier l\'équilibre des forces) ; « a rubber stamp » (un parlement qui approuve tout sans débattre — comme un tampon en caoutchouc). (2) Euphémismes politiques : « right-sizing » au lieu de « mass layoffs » (licenciements massifs) ; « collateral damage » au lieu de « civilian deaths » (morts civiles) ; « enhanced interrogation » au lieu de « torture » (torture) ; « regime change » au lieu de « overthrowing a government » (renverser un gouvernement). (3) Expressions parlementaires : « to toe the party line » (suivre la ligne du parti) ; « a backbench rebellion » (une rébellion des députés de base) ; « to cross the floor » (changer de camp politique) ; « a whipping system » (le système de discipline de vote). (4) L\'importance du contexte : ces expressions peuvent sembler neutres mais portent souvent un jugement implicite. « Gerrymandering » est toujours péjoratif ; « lobbying » peut être neutre ou critique selon le contexte.',
    examples: [
      { sentence: 'The president was accused of a power grab after dissolving the parliament.', translation: 'Le président a été accusé de prise de pouvoir après avoir dissous le parlement.', isCorrect: true },
      { sentence: 'The parliament is just a rubber stamp for the president.', translation: 'Le parlement n\'est qu\'une chambre d\'enregistrement pour le président.', isCorrect: true },
      { sentence: 'The government enhanced the population.', translation: '', isCorrect: false },
      { sentence: 'Several MPs crossed the floor during the impeachment vote, dealing a blow to the ruling party.', translation: 'Plusieurs députés ont changé de camp lors du vote de destitution, portant un coup au parti au pouvoir.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The government enhanced the population.', correct: 'The government improved the living conditions of the population.', explanation: '« Enhanced interrogation » est un euphémisme politique pour la torture, mais « enhance » seul signifie « améliorer / valoriser ». On ne peut pas « enhance » une population. Employez « improve the living conditions of » ou « invest in ».' },
      { wrong: 'The opposition did gerrymandering.', correct: 'The opposition accused the ruling party of gerrymandering.', explanation: '« Gerrymandering » est toujours utilisé comme un ACCUSATION — on ne « fait » pas du gerrymandering ouvertement. On « accuse quelqu\'un de gerrymandering ». C\'est un terme péjoratif, jamais neutre.' },
    ],
  },
  conversation: [
    { speaker: 'Kwame', role: 'A', text: 'Have you been following the impeachment hearings? The testimony was damning.', translation: 'As-tu suivi les audiences de destitution ? Le témoignage était accablant.' },
    { speaker: 'Isabelle', role: 'B', text: 'I have. But even if the vote passes, the senate is unlikely to convict — too many senators will toe the party line.', translation: 'Oui. Mais même si le vote passe, le sénat est peu susceptible de condamner — trop de sénateurs suivront la ligne du parti.' },
    { speaker: 'Kwame', role: 'A', text: 'That\'s the problem with partisan politics. The lobbying groups wield enormous power over how senators vote.', translation: 'C\'est le problème de la politique partisane. Les groupes de lobbying exercent un pouvoir énorme sur la façon dont les sénateurs votent.' },
    { speaker: 'Isabelle', role: 'B', text: 'And don\'t forget the gerrymandering that got them elected in the first place. Some of these districts are barely competitive.', translation: 'Et n\'oublie pas le charcutage électoral qui les a fait élire en premier lieu. Certaines de ces circonscriptions sont à peine compétitives.' },
    { speaker: 'Kwame', role: 'A', text: 'True. The ratification of any meaningful reform would require overcoming all of those obstacles.', translation: 'C\'est vrai. La ratification de toute réforme significative exigerait de surmonter tous ces obstacles.' },
    { speaker: 'Isabelle', role: 'B', text: 'That\'s why sanctions and international pressure sometimes end up being the only effective tool.', translation: 'C\'est pourquoi les sanctions et la pression internationale finissent parfois par être le seul outil efficace.' },
  ],
  conversationTitle: 'Politique et pouvoir : destitution, lobbying et réforme',
  pronunciation: [
    { word: 'Lobbying', phonetic: '/ˈlɒbiɪŋ/', meaning: 'Lobbying', tip: 'Prononcez « LOB-eeng » — l\'accent est sur « LOB ». Le « ying » se prononce « eeng » avec le « ng » comme dans « singing ». Ne dites pas « lo-bi-ing ».' },
    { word: 'Sanctions', phonetic: '/ˈsæŋkʃnz/', meaning: 'Sanctions', tip: 'Prononcez « SANK-shunz » — l\'accent est sur « SANK ». Le « ct » devient « ksh » rapide. Le « s » final est sonore comme « z ». Ne dites pas « san-ctions » à la française.' },
    { word: 'Gerrymandering', phonetic: '/ˈdʒerɪmændərɪŋ/', meaning: 'Charcutage électoral', tip: 'Prononcez « JER-i-man-der-ing » — le « G » est doux comme dans « Jerry » (le nom du gouverneur qui a inventé la pratique). L\'accent est sur « JER ». Ne dites pas « gé-ri-man-de-ring ».' },
    { word: 'Impeachment', phonetic: '/ɪmˈpiːtʃmənt/', meaning: 'Destitution', tip: 'L\'accent est sur « PEECH » : « im-PEECH-ment ». Le « ch » se prononce « tch » comme dans « teacher ». Ne dites PAS « im-pik-ment » — c\'est l\'erreur la plus fréquente !' },
  ],
}
