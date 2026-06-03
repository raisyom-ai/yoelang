import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C1 ADVANCED — UNIT 14: ADVANCED IDIOMS (c1-l66 through c1-l70)
// YOELANG English Learning App for Francophone Users
// Advanced: idiom typology, euphemism & register, idiomatic conversation, phrasal verbs, pronunciation
// ════════════════════════════════════════════════════════════════════════════════

// ─── c1-l66: Idiom Vocabulary ──────────────────────────────────────────────────
export const C1_L66: LessonContent = {
  vocab: [
    { english: 'colloquialism', french: 'colloquialisme / expression familière', phonetic: '/kəˈləʊkwiəlɪzəm/', example: 'Using "gonna" instead of "going to" is a common colloquialism in spoken English.', exampleTranslation: 'Utiliser « gonna » au lieu de « going to » est un colloquialisme courant en anglais parlé.' },
    { english: 'dysphemism', french: 'dysphémisme / expression aggravante', phonetic: '/ˈdɪsfəmɪzəm/', example: '« Croak » is a dysphemism for « die » — it makes the reality harsher.', exampleTranslation: '« Croak » est un dysphémisme pour « die » — il rend la réalité plus brutale.' },
    { english: 'phrasal verb', french: 'verbe à particule', phonetic: '/ˈfreɪzl vɜːb/', example: '« Look up » is a phrasal verb that means to search for information.', exampleTranslation: '« Look up » est un verbe à particule qui signifie chercher de l\'information.' },
    { english: 'collocation', french: 'collocation / co-occurrence', phonetic: '/ˌkɒləˈkeɪʃn/', example: '« Commit a crime » is a collocation — « commit » and « crime » naturally go together.', exampleTranslation: '« Commit a crime » est une collocation — « commit » et « crime » vont naturellement ensemble.' },
    { english: 'proverb', french: 'proverbe', phonetic: '/ˈprɒvɜːb/', example: '« A stitch in time saves nine » is a proverb about the value of prevention.', exampleTranslation: '« A stitch in time saves nine » est un proverbe sur la valeur de la prévention.' },
  ],
  grammar: {
    title: 'Typologie des expressions anglaises : colloquialism, dysphemism, phrasal verb, collocation, proverb',
    explanation: 'L\'anglais regorge d\'expressions qu\'il faut savoir distinguer pour les employer à bon escient : (1) Colloquialism = expression familière propre au langage parlé : « gonna », « wanna », « ain\'t », « buck » (dollar). Ce n\'est PAS incorrect, c\'est le registre informel. On ne les écrit pas dans un essai académique, mais ils sont omniprésents à l\'oral. (2) Dysphemism = terme aggravant pour remplacer un mot par une expression plus brutale ou choquante : « croak » (mourir), « snuff it » (mourir), « fat » (gros, au lieu de « overweight »). Le dysphémisme est l\'inverse de l\'euphémisme — il durcit la réalité au lieu de l\'adoucir. (3) Phrasal verb = verbe + particule (adverbe ou préposition) dont le sens est souvent compositionnel ou semi-figé : « look up » (chercher), « take off » (enlever / décoller). Attention : certains phrasal verbs SONT aussi des idiomes quand leur sens est totalement opaque. (4) Collocation = combinaison de mots qui apparaissent fréquemment ensemble sans être figée : « commit a crime » (pas « do a crime »), « heavy rain » (pas « thick rain »). Une collocation n\'est ni un idiome (le sens est compositionnel) ni une expression libre (la combinaison est contrainte). (5) Proverb = sentence morale ou sagesse populaire complète : « Too many cooks spoil the broth ». Un proverbe est autonome et exprime une vérité générale, tandis qu\'un idiome s\'intègre dans une phrase.',
    examples: [
      { sentence: '« Croak » is a dysphemism, not a colloquialism — it deliberately makes « die » sound harsher.', translation: '« Croak » est un dysphémisme, pas un colloquialisme — il rend « die » délibérément plus brutal.', isCorrect: true },
      { sentence: '« Commit a crime » is a collocation — you cannot say « do a crime » in natural English.', translation: '« Commit a crime » est une collocation — on ne peut pas dire « do a crime » en anglais naturel.', isCorrect: true },
      { sentence: '« A bird in the hand is worth two in the bush » is a collocation about being cautious.', translation: '', isCorrect: false },
      { sentence: 'The phrasal verb « come across » can mean « find by chance », which is not fully predictable from « come » + « across ».', translation: 'Le verbe à particule « come across » peut signifier « trouver par hasard », ce qui n\'est pas totalement prévisible à partir de « come » + « across ».', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: '« A bird in the hand is worth two in the bush » is a collocation about being cautious.', correct: '« A bird in the hand is worth two in the bush » is a proverb about valuing what you already have.', explanation: 'Un proverbe (proverb) est une sentence morale complète et autonome. Une collocation est une combinaison de mots fréquente mais compositionnelle. Cette citation est un proverbe — elle exprime une vérité générale par elle-même.' },
      { wrong: '« Gonna » is a collocation for « going to ».', correct: '« Gonna » is a colloquialism — an informal spoken contraction of « going to ».', explanation: '« Gonna » n\'est PAS une collocation : son sens est parfaitement transparent (c\'est simplement une contraction). C\'est un colloquialisme — un trait du registre familier oral. Une collocation est une combinaison de mots fréquente comme « commit a crime ».' },
    ],
  },
  conversation: [
    { speaker: 'Professor Lambert', role: 'A', text: 'Today we\'re going to unpack the differences between colloquialisms, dysphemisms, phrasal verbs, collocations, and proverbs. Can anyone give me an example of each?', translation: 'Aujourd\'hui, nous allons démêler les différences entre colloquialismes, dysphémismes, verbes à particule, collocations et proverbes. Quelqu\'un peut-il me donner un exemple de chacun ?' },
    { speaker: 'Student Marine', role: 'B', text: 'A colloquialism would be « bucks » for dollars. A dysphemism — « croak » instead of « die ».', translation: 'Un colloquialisme serait « bucks » pour dollars. Un dysphémisme — « croak » au lieu de « die ».' },
    { speaker: 'Professor Lambert', role: 'A', text: 'Excellent. And the crucial difference between a phrasal verb and a collocation?', translation: 'Excellent. Et la différence cruciale entre un verbe à particule et une collocation ?' },
    { speaker: 'Student Marine', role: 'B', text: 'A phrasal verb like « look up » combines a verb and a particle. But a collocation like « commit a crime » combines words that naturally go together — you can\'t substitute « do a crime ».', translation: 'Un verbe à particule comme « look up » combine un verbe et une particule. Mais une collocation comme « commit a crime » combine des mots qui vont naturellement ensemble — on ne peut pas substituer « do a crime ».' },
    { speaker: 'Professor Lambert', role: 'A', text: 'Spot on. And proverbs? They\'re complete statements of folk wisdom — « Don\'t count your chickens before they hatch ». They stand alone as sentences.', translation: 'Tout à fait. Et les proverbes ? Ce sont des déclarations complètes de sagesse populaire — « Don\'t count your chickens before they hatch ». Ils se tiennent seuls en tant que phrases.' },
    { speaker: 'Student Marine', role: 'B', text: 'So the hierarchy is: colloquialisms shift register, dysphemisms harden reality, phrasal verbs combine literally or semi-literally, collocations constrain word choice, and proverbs are self-contained wisdom?', translation: 'Donc la hiérarchie est : les colloquialismes changent le registre, les dysphémismes durcissent la réalité, les verbes à particule se combinent littéralement ou semi-littéralement, les collocations contraignent le choix lexical, et les proverbes sont des sagesses autonomes ?' },
  ],
  conversationTitle: 'Décryptage des expressions anglaises : cinq catégories à distinguer',
  pronunciation: [
    { word: 'Colloquialism', phonetic: '/kəˈləʊkwiəlɪzəm/', meaning: 'Colloquialisme', tip: 'L\'accent est sur « LOO » : « kuh-LOH-kwee-uh-liz-um ». C\'est un mot de 5 syllabes. Le « qu » se prononce « kw ». Ne dites pas « ko-lo-ki-a-lisme ».' },
    { word: 'Dysphemism', phonetic: '/ˈdɪsfəmɪzəm/', meaning: 'Dysphémisme', tip: 'Prononcez « DIS-fuh-miz-um » — l\'accent est sur « DIS ». Le « dy » = « i » court comme dans « disk ». Le « ph » = « f ». Ne dites pas « dis-fe-misme » à la française.' },
    { word: 'Collocation', phonetic: '/ˌkɒləˈkeɪʃn/', meaning: 'Collocation', tip: 'Prononcez « kol-uh-KAY-shun » — l\'accent est sur « KAY ». Le « co » = « kol » comme dans « college ». Le « ll » = « l » simple. La terminaison « -tion » = « shun ». Ne dites pas « ko-lo-ka-sion » à la française.' },
    { word: 'Proverb', phonetic: '/ˈprɒvɜːb/', meaning: 'Proverbe', tip: 'L\'accent est sur « PRO » : « PROV-urb ». Le « e » du milieu est réduit en schwa. Le « b » final est léger mais prononcé, contrairement au français « proverbe ».' },
  ],
}

// ─── c1-l67: Euphemism & Register ──────────────────────────────────────────────
export const C1_L67: LessonContent = {
  vocab: [
    { english: 'to let go', french: 'licencier / renvoyer (euphémisme)', phonetic: '/tə let ɡəʊ/', example: 'The company had to let go of thirty employees due to budget cuts.', exampleTranslation: 'L\'entreprise a dû licencier trente employés en raison de coupes budgétaires.' },
    { english: 'to pass away', french: 'décéder / s\'éteindre (euphémisme)', phonetic: '/tə pɑːs əˈweɪ/', example: 'Her grandfather passed away peacefully in his sleep.', exampleTranslation: 'Son grand-père s\'est éteint paisiblement dans son sommeil.' },
    { english: 'between jobs', french: 'entre deux emplois (euphémisme pour chômeur)', phonetic: '/bɪˈtwiːn dʒɒbz/', example: 'I\'m currently between jobs, but I\'m actively looking for new opportunities.', exampleTranslation: 'Je suis actuellement entre deux emplois, mais je cherche activement de nouvelles opportunités.' },
    { english: 'economical with the truth', french: 'économe avec la vérité (euphémisme pour menteur)', phonetic: '/ˌiːkəˈnɒmɪkl wɪð ðə truːθ/', example: 'The witness was being economical with the truth during the cross-examination.', exampleTranslation: 'Le témoin était économe avec la vérité lors du contre-interrogatoire.' },
    { english: 'to downsize', french: 'réduire les effectifs / restructurer (euphémisme)', phonetic: '/tə ˈdaʊnsaɪz/', example: 'The corporation downsized its workforce by fifteen per cent.', exampleTranslation: 'La corporation a réduit ses effectifs de quinze pour cent.' },
  ],
  grammar: {
    title: 'Les euphémismes anglais : adoucir la réalité et maîtriser les changements de registre',
    explanation: 'L\'euphémisme est au cœur de la communication anglaise — les anglophones y recourent bien plus que les francophones, car la culture anglo-saxonne valorise la politesse et le tact even au prix de la transparence : (1) Emploi : « let go » ≠ « fire » ≠ « make redundant » ≠ « sack » : « let go » est un euphémisme doux (on détache la personne) ; « make redundant » est britannique et formel (le poste disparaît, pas la faute de la personne) ; « fire » est direct et familier ; « sack » est très informel. De même, « downsize » euphémise les licenciements massifs — l\'entreprise ne « renvoie » pas, elle « réduit sa taille ». (2) Mort : « pass away » est l\'euphémisme standard ; « depart this life » est très formel ; « go to a better place » est religieux ; « pop one\'s clogs » est très familier et humoristique. (3) Vérité : « economical with the truth » = mentir en omettant des faits (né en 1986 dans un contexte politique britannique). C\'est un euphémisme savoureux — au lieu d\'accuser quelqu\'un de mentir, on dit qu\'il est « économe » avec la vérité. (4) Registre : les euphémismes permettent de SHIFT de registre. « Die » → registre neutre/familier ; « pass away » → registre poli/sensible ; « decease » → registre juridique/formel. Choisir l\'euphémisme = choisir le registre social approprié. (5) Attention : les euphémismes peuvent paraître hypocrites (« doublespeak ») : « collateral damage » pour « civilian deaths », « enhanced interrogation » pour « torture ». En contexte professionnel, l\'euphémisme est la norme ; en contexte intime, la franchise est préférée.',
    examples: [
      { sentence: 'I\'m afraid we\'ll have to let you go at the end of the month.', translation: 'J\'ai bien peur que nous devions vous laisser partir à la fin du mois.', isCorrect: true },
      { sentence: 'He was sacked for being economical with the truth about his qualifications.', translation: '', isCorrect: false },
      { sentence: 'She\'s currently between jobs but remains optimistic about her prospects.', translation: 'Elle est actuellement entre deux emplois mais reste optimiste quant à ses perspectives.', isCorrect: true },
      { sentence: 'The hospital regretted to inform them that their father had passed away.', translation: 'L\'hôpital a regretté de les informer que leur père s\'était éteint.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'He was sacked for being economical with the truth about his qualifications.', correct: 'He was dismissed for being economical with the truth about his qualifications.', explanation: '« Economical with the truth » est un euphémisme poli — il appartient au registre formel. L\'utiliser avec « sacked » (très familier) crée un clash de registre. On l\'associe plutôt à « dismissed » ou « let go ».' },
      { wrong: 'My grandmother passed away, which was really awful.', correct: 'My grandmother passed away, which was deeply upsetting.', explanation: '« Pass away » est un euphémisme délicat — « really awful » est trop brutal dans ce contexte. On privilégie « deeply upsetting », « a great loss », « very painful » pour maintenir la cohérence du registre.' },
    ],
  },
  conversation: [
    { speaker: 'HR Director Williams', role: 'A', text: 'We need to discuss the restructuring. As you know, the board has decided to downsize the London office.', translation: 'Nous devons discuter de la restructuration. Comme vous le savez, le conseil a décidé de réduire les effectifs du bureau de Londres.' },
    { speaker: 'Manager Thompson', role: 'B', text: 'How many people are being let go? And how are we communicating this?', translation: 'Combien de personnes vont être licenciées ? Et comment allons-nous communiquer cela ?' },
    { speaker: 'HR Director Williams', role: 'A', text: 'Twelve positions will be made redundant. I\'d prefer we say « positions eliminated » rather than « people fired » — it softens the blow.', translation: 'Douze postes seront supprimés. Je préfère qu\'on dise « postes supprimés » plutôt que « gens renvoyés » — ça adoucit le choc.' },
    { speaker: 'Manager Thompson', role: 'B', text: 'I understand the impulse, but I worry we\'re being economical with the truth. People deserve clarity.', translation: 'Je comprends l\'impulsion, mais je crains que nous soyons économes avec la vérité. Les gens méritent de la clarté.' },
    { speaker: 'HR Director Williams', role: 'A', text: 'Fair point. We\'ll be transparent about the numbers but tactful in our language. « Between jobs » on references, not « unemployed ».', translation: 'Juste. Nous serons transparents sur les chiffres mais tactful dans notre langage. « Between jobs » sur les références, pas « unemployed ».' },
    { speaker: 'Manager Thompson', role: 'B', text: 'And if anyone asks about the former CEO who passed away last month — we refer to it as a « sudden departure », as the family requested.', translation: 'Et si quelqu\'un demande au sujet de l\'ancien PDG qui s\'est éteint le mois dernier — nous y faisons référence comme un « départ soudain », comme la famille l\'a demandé.' },
  ],
  conversationTitle: 'Euphémismes au bureau : adoucir sans mentir',
  pronunciation: [
    { word: 'Let go (euphemism)', phonetic: '/let ɡəʊ/', meaning: 'Licencier', tip: 'Prononcez « let GOH » — l\'intonation monte légèrement sur « go » car c\'est le mot porteur de sens. Le « t » de « let » peut être un arrêt glottal devant « g ».' },
    { word: 'Pass away', phonetic: '/pɑːs əˈweɪ/', meaning: 'S\'éteindre', tip: 'Prononcez « pahs uh-WAY » — l\'accent est sur « AWAY ». Le « ss » de « pass » est un /s/ sourd, pas /z/. Dites-le doucement, conformément au registre.' },
    { word: 'Downsize', phonetic: '/ˈdaʊnsaɪz/', meaning: 'Réduire les effectifs', tip: 'L\'accent est sur « DOWN » : « DOWN-size ». Le « s » se prononce /z/ sonore. Le « ow » de « down » est la diphtongue comme dans « cow ».' },
    { word: 'Economical with the truth', phonetic: '/ˌiːkəˈnɒmɪkl wɪð ðə truːθ/', meaning: 'Économe avec la vérité', tip: 'L\'accent principal est sur « NOM » : « ee-kuh-NOM-ikl ». « With the » se prononce fluidement « withe-thuh ». Le « th » de « truth » est expiré — ne dites pas « trut ».' },
  ],
}

// ─── c1-l68: Idiom in Context ──────────────────────────────────────────────────
export const C1_L68: LessonContent = {
  vocab: [
    { english: 'to bite the bullet', french: 'serrer les dents / faire contre mauvaise fortune bon cœur', phonetic: '/tə baɪt ðə ˈbʊlɪt/', example: 'We\'ll just have to bite the bullet and accept the new terms.', exampleTranslation: 'Nous allons devoir serrer les dents et accepter les nouvelles conditions.' },
    { english: 'to beat around the bush', french: 'tourner autour du pot', phonetic: '/tə biːt əˈraʊnd ðə bʊʃ/', example: 'Stop beating around the bush and tell me what really happened.', exampleTranslation: 'Arrête de tourner autour du pot et dis-moi ce qui s\'est vraiment passé.' },
    { english: 'to pull one\'s weight', french: 'faire sa part / contribuer à hauteur', phonetic: '/tə pʊl wʌnz weɪt/', example: 'Everyone on the team needs to pull their weight if we\'re going to meet the deadline.', exampleTranslation: 'Tout le monde dans l\'équipe doit faire sa part si nous voulons respecter la date limite.' },
    { english: 'to call the shots', french: 'mener les opérations / prendre les décisions', phonetic: '/tə kɔːl ðə ʃɒts/', example: 'She\'s the one who calls the shots around here — nothing happens without her approval.', exampleTranslation: 'C\'est elle qui mène les opérations ici — rien ne se fait sans son approbation.' },
    { english: 'to go the extra mile', french: 'en faire plus que le minimum / se donner à fond', phonetic: '/tə ɡəʊ ði ˈekstrə maɪl/', example: 'He always goes the extra mile for his clients, which is why they keep coming back.', exampleTranslation: 'Il en fait toujours plus que le minimum pour ses clients, c\'est pourquoi ils reviennent toujours.' },
  ],
  grammar: {
    title: 'Les idiomes au travail : décoder et employer les expressions idiomatiques en contexte professionnel',
    explanation: 'Les idiomes sont omniprésents dans la communication professionnelle anglophone — les ignorer, c\'est rater le sens réel du message : (1) « Bite the bullet » = accepter une situation difficile avec courage. Origine militaire : les soldats mordaient une balle pendant une opération sans anesthésie. Au travail : « We\'ll have to bite the bullet and cut the budget. » (2) « Beat around the bush » = éviter le sujet principal, tourner autour du pot. Origine cynégétique : les chasseurs battaient les buissons pour faire sortir le gibier, sans l\'attraper directement. Au travail : « Don\'t beat around the bush — just give me the numbers. » (3) « Pull one\'s weight » = contribuer équitablement à un effort collectif. Attention : « pull YOUR weight » (singulier) ≠ « pull THEIR weight » (pluriel). On dit aussi « carry your weight ». (4) « Call the shots » = prendre les décisions, être aux commandes. Origine : le billard — celui qui « appelle les coups » décide du jeu. (5) « Go the extra mile » = faire un effort supplémentaire au-delà de ce qui est attendu. Origine biblique (Sermon sur la montagne). Ces idiomes ne sont ni trop familiers ni trop formels — ils appartiennent au registre professionnel courant et sont attendus en réunion, en email, et en conversation de bureau.',
    examples: [
      { sentence: 'If nobody pulls their weight, the project will never be finished on time.', translation: 'Si personne ne fait sa part, le projet ne sera jamais terminé à temps.', isCorrect: true },
      { sentence: 'She decided to bite around the bush and confront her manager about the issue.', translation: '', isCorrect: false },
      { sentence: 'He\'s the kind of person who goes the extra mile — he stayed until midnight to finish the report.', translation: 'C\'est le genre de personne qui en fait toujours plus — il est resté jusqu\'à minuit pour finir le rapport.', isCorrect: true },
      { sentence: 'I don\'t call the shots around here, but I can make suggestions to the director.', translation: 'Ce n\'est pas moi qui prends les décisions ici, mais je peux faire des suggestions au directeur.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She decided to bite around the bush and confront her manager about the issue.', correct: 'She decided to bite the bullet and confront her manager about the issue.', explanation: 'On ne mélange PAS les idiomes ! « Bite the bullet » = affronter courageusement ; « beat around the bush » = éviter le sujet. « Bite around the bush » est un contresens absolu — cela n\'existe pas.' },
      { wrong: 'Everyone needs to pull his weight on this project.', correct: 'Everyone needs to pull their weight on this project.', explanation: 'Avec « everyone » (singulier mais sens collectif), l\'anglais moderne privilégie « their » au lieu de « his ». Dire « pull his weight » sonne vieux jeu ou exclusif. « Pull their weight » est la forme standard actuelle.' },
    ],
  },
  conversation: [
    { speaker: 'Project Lead Harris', role: 'A', text: 'Right, let\'s not beat around the bush — the Q3 numbers are terrible. We need to act now.', translation: 'Bon, ne tournons pas autour du pot — les chiffres du T3 sont mauvais. Nous devons agir maintenant.' },
    { speaker: 'Team Member Renaud', role: 'B', text: 'Are you saying we should bite the bullet and cut the marketing budget?', translation: 'Vous dites qu\'on devrait serrer les dents et couper le budget marketing ?' },
    { speaker: 'Project Lead Harris', role: 'A', text: 'That\'s exactly what I\'m saying. But I also need everyone to pull their weight — no more coasting.', translation: 'C\'est exactement ce que je dis. Mais j\'ai aussi besoin que chacun fasse sa part — plus de tire-au-flanc.' },
    { speaker: 'Team Member Renaud', role: 'B', text: 'Fair enough. But who calls the shots on which departments get cut?', translation: 'Très juste. Mais qui prend les décisions sur les départements qui seront coupés ?' },
    { speaker: 'Project Lead Harris', role: 'A', text: 'The board calls the shots ultimately, but they\'ve asked for our recommendations. If we go the extra mile on this proposal, they\'ll listen.', translation: 'Le conseil prend les décisions au final, mais ils ont demandé nos recommandations. Si nous en faisons plus que le minimum sur cette proposition, ils écouteront.' },
    { speaker: 'Team Member Renaud', role: 'B', text: 'Then let\'s not let them down. I\'ll work through the weekend if that\'s what it takes to get this right.', translation: 'Alors ne les décevons pas. Je travaillerai ce week-end s\'il le faut pour réussir ça.' },
  ],
  conversationTitle: 'Idiomes au bureau : affronter la réalité et mobiliser l\'équipe',
  pronunciation: [
    { word: 'Bite the bullet', phonetic: '/baɪt ðə ˈbʊlɪt/', meaning: 'Serrer les dents', tip: 'Prononcez « BYTE thuh BULL-it » — le « t » de « bite » peut être un arrêt glottal avant « the ». « Bullet » a l\'accent sur « BULL ». Le « th » est dental, pas « ze ».' },
    { word: 'Beat around the bush', phonetic: '/biːt əˈraʊnd ðə bʊʃ/', meaning: 'Tourner autour du pot', tip: 'L\'accent est sur « ROUND » : « beet uh-ROUND thuh bush ». « Around the » se lie fluidement : « uh-ROUND-thuh ». Le « sh » final de « bush » est doux.' },
    { word: 'Pull your weight', phonetic: '/pʊl jɔːr weɪt/', meaning: 'Faire sa part', tip: 'Prononcez « pul yor WAYT » — l\'accent est sur « WEIGHT ». « Your » est réduit en « yor » (pas « your-RE »). Le « w » de « weight » est bien marqué.' },
    { word: 'Call the shots', phonetic: '/kɔːl ðə ʃɒts/', meaning: 'Prendre les décisions', tip: 'Prononcez « KAWL thuh SHOTS » — l\'accent est sur « SHOTS ». Le « aw » de « call » est ouvert. Le « sh » de « shots » est /ʃ/ et le « s » final est /s/ sourd.' },
  ],
}

// ─── c1-l69: Advanced Phrasal Verbs ────────────────────────────────────────────
export const C1_L69: LessonContent = {
  vocab: [
    { english: 'to come up against', french: 'se heurter à / faire face à', phonetic: '/tə kʌm ʌp əˈɡenst/', example: 'The proposal came up against fierce opposition from the board.', exampleTranslation: 'La proposition s\'est heurtée à une opposition féroce du conseil.' },
    { english: 'to fall back on', french: 'se rabattre sur / avoir comme solution de secours', phonetic: '/tə fɔːl bæk ɒn/', example: 'If the business fails, she can always fall back on her teaching degree.', exampleTranslation: 'Si l\'entreprise échoue, elle peut toujours se rabattre sur son diplôme d\'enseignante.' },
    { english: 'to get away with', french: 's\'en tirer à bon compte / échapper à la punition', phonetic: '/tə ɡet əˈweɪ wɪð/', example: 'He thought he could get away with submitting the report late, but his manager noticed.', exampleTranslation: 'Il pensait pouvoir s\'en tirer à bon compte en soumettant le rapport en retard, mais son responsable l\'a remarqué.' },
    { english: 'to look down on', french: 'mépriser / regarder de haut', phonetic: '/tə lʊk daʊn ɒn/', example: 'It\'s unprofessional to look down on colleagues who don\'t have a university degree.', exampleTranslation: 'C\'est peu professionnel de mépriser des collègues qui n\'ont pas de diplôme universitaire.' },
    { english: 'to put up with', french: 'tolérer / supporter', phonetic: '/tə pʊt ʌp wɪð/', example: 'I refuse to put up with his constant interruptions during meetings.', exampleTranslation: 'Je refuse de tolérer ses interruptions constantes pendant les réunions.' },
  ],
  grammar: {
    title: 'Les verbes à particule avancés : sens littéral vs sens figuré',
    explanation: 'Les phrasal verbs avancés ont souvent un double sens — littéral et figuré — et c\'est le sens figuré qui pose problème aux francophones : (1) « Come up against » — littéral : monter et être face à (ex : come up against a wall) ; figuré : rencontrer un obstacle, se heurter à une opposition. C\'est l\'équivalent de « se heurter à » ou « faire face à ». (2) « Fall back on » — littéral : tomber en arrière sur quelque chose ; figuré : se rabattre sur une solution de secours, utiliser un plan B. L\'image est celle d\'une retraite stratégique vers quelque chose de sûr. (3) « Get away with » — littéral : s\'éloigner avec quelque chose ; figuré : échapper aux conséquences d\'une action répréhensible. Attention : « get away with murder » est un idiome renforcé = s\'en tirer impunément pour quelque chose de grave. (4) « Look down on » — littéral : regarder de haut vers le bas ; figuré : mépriser, considérer avec condescendance. Le « on » indique la cible du mépris : « look down on someone ». (5) « Put up with » — littéral : placer en haut avec ; figuré : tolérer, supporter une situation désagréable sans réagir. Il n\'y a pas de lien logique entre le sens littéral et figuré — il faut l\'apprendre par cœur. (6) « Run up against » est proche de « come up against » mais implique un choc plus soudain : « run up against a problem » = buter soudainement contre un problème. Règle clé : ces phrasal verbs sont INSÉPARABLES quand ils sont au sens figuré — on ne dit PAS « come the opposition up against ».',
    examples: [
      { sentence: 'She fell back on her savings when she lost her job.', translation: 'Elle s\'est rabattue sur ses économies quand elle a perdu son emploi.', isCorrect: true },
      { sentence: 'He gets away with everything — his boss never holds him accountable.', translation: 'Il s\'en tire à bon compte pour tout — son patron ne lui demande jamais de comptes.', isCorrect: true },
      { sentence: 'I won\'t put up with his behaviour any longer.', translation: 'Je ne tolérerai plus son comportement.', isCorrect: true },
      { sentence: 'She came the opposition up against when presenting her proposal.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'She came the opposition up against when presenting her proposal.', correct: 'She came up against the opposition when presenting her proposal.', explanation: '« Come up against » est un phrasal verbe inséparable — on ne peut PAS insérer l\'objet entre « up » et « against ». L\'ordre est fixe : « come up against + objet ».' },
      { wrong: 'He looks down to his colleagues.', correct: 'He looks down on his colleagues.', explanation: '« Look down on » utilise toujours « on » pour indiquer la cible du mépris — pas « to » ni « at ». L\'image est celle de quelqu\'un en hauteur qui regarde vers le bas SUR quelqu\'un.' },
    ],
  },
  conversation: [
    { speaker: 'Senior Developer Okafor', role: 'A', text: 'We came up against a major technical issue yesterday — the legacy system simply can\'t handle the new requirements.', translation: 'Nous nous sommes heurtés à un problème technique majeur hier — le système existant ne peut tout simplement pas gérer les nouvelles exigences.' },
    { speaker: 'Project Manager Duval', role: 'B', text: 'Can we fall back on the cloud-based solution we discussed last month?', translation: 'Pouvons-nous nous rabattre sur la solution cloud dont nous avons discuté le mois dernier ?' },
    { speaker: 'Senior Developer Okafor', role: 'A', text: 'That\'s what I\'d recommend. The vendor seems to think they can get away with delivering late, but I\'m not putting up with another delay.', translation: 'C\'est ce que je recommanderais. Le fournisseur semble penser qu\'il peut s\'en tirer à bon compte avec une livraison en retard, mais je ne tolérerai pas un autre retard.' },
    { speaker: 'Project Manager Duval', role: 'B', text: 'Good. Don\'t let them look down on us just because we\'re a smaller client — we deserve the same service level.', translation: 'Bien. Ne les laissez pas nous mépriser sous prétexte que nous sommes un client plus petit — nous méritons le même niveau de service.' },
    { speaker: 'Senior Developer Okafor', role: 'A', text: 'Absolutely. And if we run up against any more resistance, we\'ll escalate to the contract manager.', translation: 'Absolument. Et si nous nous heurtons à encore plus de résistance, nous escaladerons auprès du responsable des contrats.' },
    { speaker: 'Project Manager Duval', role: 'B', text: 'Let\'s hope it doesn\'t come to that. But it\'s good to know we have a fallback plan.', translation: 'Espérons que ça n\'en arrive pas là. Mais c\'est bon de savoir qu\'on a un plan de secours.' },
  ],
  conversationTitle: 'Phrasal verbs en réunion : obstacles et solutions de rechange',
  pronunciation: [
    { word: 'Come up against', phonetic: '/kʌm ʌp əˈɡenst/', meaning: 'Se heurter à', tip: 'L\'accent est sur « GAIN » : « kum up uh-GAINST ». Les trois premières syllabes sont rapides et liées. Le « against » se prononce « uh-GAINST », pas « a-guenst ».' },
    { word: 'Fall back on', phonetic: '/fɔːl bæk ɒn/', meaning: 'Se rabattre sur', tip: 'L\'accent est sur « BACK » : « fawl BACK on ». Le « aw » de « fall » est ouvert. « On » est réduit. Ne dites pas « fohl-bak-ON » avec l\'accent sur « on ».' },
    { word: 'Get away with', phonetic: '/ɡet əˈweɪ wɪð/', meaning: 'S\'en tirer à bon compte', tip: 'L\'accent est sur « WAY » : « get uh-WAY with ». Le « with » final se prononce « with » /wɪð/ (le « th » est voisé). Ne dites pas « wiss ».' },
    { word: 'Put up with', phonetic: '/pʊt ʌp wɪð/', meaning: 'Tolérer', tip: 'L\'accent est sur « UP » : « put UP with ». Les trois mots sont courts et liés. Le « th » de « with » est voisé /ð/. Le rythme est : da-DA-da.' },
  ],
}

// ─── c1-l70: Idiom Sounds ──────────────────────────────────────────────────────
export const C1_L70: LessonContent = {
  vocab: [
    { english: 'to swallow one\'s pride', french: 'ravaler sa fierté / faire amende honorable', phonetic: '/tə ˈswɒləʊ wʌnz praɪd/', example: 'He had to swallow his pride and ask his former colleague for help.', exampleTranslation: 'Il a dû ravaler sa fierté et demander de l\'aide à son ancienne collègue.' },
    { english: 'a blessing in disguise', french: 'une bénédiction déguisée / un mal pour un bien', phonetic: '/ə ˈblesɪŋ ɪn dɪsˈɡaɪz/', example: 'Losing that job was a blessing in disguise — it pushed me to start my own business.', exampleTranslation: 'Perdre ce travail était un mal pour un bien — ça m\'a poussé à lancer ma propre entreprise.' },
    { english: 'the last straw', french: 'la goutte d\'eau qui fait déborder le vase', phonetic: '/ðə lɑːst strɔː/', example: 'The cancelled meeting was the last straw — she finally resigned.', exampleTranslation: 'La réunion annulée a été la goutte d\'eau qui a fait déborder le vase — elle a finalement démissionné.' },
    { english: 'to hit the nail on the head', french: 'mettre dans le mille / toucher juste', phonetic: '/tə hɪt ðə neɪl ɒn ðə hed/', example: 'You hit the nail on the head — that\'s exactly what the problem is.', exampleTranslation: 'Tu as mis dans le mille — c\'est exactement ça le problème.' },
    { english: 'once in a blue moon', french: 'tous les trente-six du mois / très rarement', phonetic: '/wʌns ɪn ə bluː muːn/', example: 'She only visits her hometown once in a blue moon.', exampleTranslation: 'Elle ne rend visite à sa ville natale que tous les trente-six du mois.' },
  ],
  grammar: {
    title: 'Prononciation des expressions idiomatiques : rythme, liaisons et pièges pour francophones',
    explanation: 'Les idiomes anglais posent des défis de prononciation spécifiques aux francophones — non pas à cause des sons individuels, mais à cause du rythme, des liaisons, et des réductions : (1) Le rythme stress-timed : l\'anglais est une langue à rythme accentuel — les syllabes accentuées sont régulières et les syllabes inaccentuées sont comprimées. Dans « a BLESSing in disGUISE », seules « BLESS » et « GUISE » sont fortes ; le reste est réduit. Les francophones ont tendance à prononcer chaque syllabe avec le même poids — c\'est ce qui sonne « français ». (2) Les liaisons : « once in a blue moon » se prononce fluidement « wun-sin-uh-BLOO-moon ». Le « ce » de « once » se lie à « in » ; « in a » devient « in-uh ». Ne faites PAS de pause entre les mots. (3) Le « th » dans les idiomes : « hit the nail » → le « t » de « hit » et le « th » de « the » se enchaînent rapidement. Ne remplacez PAS « the » par « ze » — c\'est le marqueur le plus évident d\'un accent français. (4) Les réductions : « swallow one\'s pride » → « SWOL-low-yer-PRIDE ». Le « one\'s » se réduit en « yer » au rythme rapide. (5) Le « straw » de « the last straw » : /strɔː/ — le « aw » est ouvert comme dans « law », pas « o » fermé français. Le « str » initial est un cluster difficile : ne séparez pas les sons.',
    examples: [
      { sentence: 'She swallowed her pride and apologised in front of the whole team.', translation: 'Elle a ravalé sa fierté et s\'est excusée devant toute l\'équipe.', isCorrect: true },
      { sentence: 'Getting turned down for the promotion was a blessing in disguise.', translation: 'Se faire refuser la promotion était un mal pour un bien.', isCorrect: true },
      { sentence: 'The new policy was the last straw for the employees.', translation: 'La nouvelle politique a été la goutte d\'eau qui a fait déborder le vase pour les employés.', isCorrect: true },
      { sentence: 'He hits the nail in the head with his analysis.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'He hits the nail in the head with his analysis.', correct: 'He hits the nail on the head with his analysis.', explanation: 'L\'expression figée est « hit the nail ON the head » — pas « IN the head ». On frappe le clou SUR la tête, pas DANS la tête. Changer la préposition détruit l\'idiome.' },
      { wrong: 'It happens once in a blue moons.', correct: 'It happens once in a blue moon.', explanation: '« Once in a blue moon » est une expression figée — « moon » est toujours au singulier. Un « blue moon » est un événement unique et rare, pas des événements répétés.' },
    ],
  },
  conversation: [
    { speaker: 'Colleague Nadia', role: 'A', text: 'Did you hear? Marc had to swallow his pride and ask the London office for support.', translation: 'Tu as entendu ? Marc a dû ravaler sa fierté et demander de l\'aide au bureau de Londres.' },
    { speaker: 'Colleague James', role: 'B', text: 'Really? He only visits this office once in a blue moon — and now he needs our help?', translation: 'Vraiment ? Il ne rend visite à ce bureau que tous les trente-six du mois — et maintenant il a besoin de notre aide ?' },
    { speaker: 'Colleague Nadia', role: 'A', text: 'Exactly. But honestly, losing that client was a blessing in disguise — it forced him to rethink the whole strategy.', translation: 'Exactement. Mais honnêtement, perdre ce client était un mal pour un bien — ça l\'a forcé à repenser toute la stratégie.' },
    { speaker: 'Colleague James', role: 'B', text: 'You hit the nail on the head. The strategy was outdated. I think the missed deadline last month was the last straw for the board.', translation: 'Tu as mis dans le mille. La stratégie était dépassée. Je pense que le délai manqué le mois dernier a été la goutte d\'eau qui a fait déborder le vase pour le conseil.' },
    { speaker: 'Colleague Nadia', role: 'A', text: 'No doubt. But at least now he\'s listening to feedback. Better late than never, right?', translation: 'Sans doute. Mais au moins maintenant il écoute les retours. Mieux vaut tard que jamais, non ?' },
    { speaker: 'Colleague James', role: 'B', text: 'True. And if he actually follows through, it could turn things around completely. Fingers crossed.', translation: 'Vrai. Et s\'il tient parole, ça pourrait complètement renverser la situation. Touchons du bois.' },
  ],
  conversationTitle: 'Idiomes au quotidien : stratégie, fierté et retournements',
  pronunciation: [
    { word: 'A blessing in disguise', phonetic: '/ə ˈblesɪŋ ɪn dɪsˈɡaɪz/', meaning: 'Un mal pour un bien', tip: 'Accentuez « BLESS » et « GUISE » : « uh-BLESS-ing-in-dis-GUIZE ». Tout le reste est réduit et lié. « In » et « dis » sont rapides — ne les détachez pas.' },
    { word: 'The last straw', phonetic: '/ðə lɑːst strɔː/', meaning: 'La goutte d\'eau', tip: 'Prononcez « thuh LAST STRAW » — l\'accent est sur « LAST » et « STRAW ». Le « aw » de « straw » est ouvert comme dans « law ». Le cluster « str- » est d\'un seul souffle : ne dites pas « s-te-raw ».' },
    { word: 'Once in a blue moon', phonetic: '/wʌns ɪn ə bluː muːn/', meaning: 'Très rarement', tip: 'Liez tout : « WUN-sin-uh-BLOO-MOON ». Les accents sont sur « ONCE », « BLUE » et « MOON ». « In a » devient « in-uh ». Ne faites AUCUNE pause entre les mots.' },
    { word: 'Swallow your pride', phonetic: '/ˈswɒləʊ jɔːr praɪd/', meaning: 'Ravaler sa fierté', tip: 'Accentuez « SWOL » et « PRIDE » : « SWOL-low-yer-PRIDE ». Le « ow » de « swallow » est ouvert comme dans « law ». « Your » est réduit en « yer ». Le « pr » de « pride » est expiré.' },
  ],
}
