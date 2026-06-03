import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C1 ADVANCED — UNIT 4: CORPORATE STRATEGY (c1-l16 through c1-l20)
// YOELANG English Learning App for Francophone Users
// Advanced: strategic vocabulary, complex conditionals, boardroom register, stakeholder communication
// ════════════════════════════════════════════════════════════════════════════════

// ─── c1-l16: Strategy Vocabulary ─────────────────────────────────────────────────
export const C1_L16: LessonContent = {
  vocab: [
    { english: 'benchmark', french: 'référence / point de repère', phonetic: '/ˈbentʃmɑːrk/', example: 'We need to benchmark our performance against industry leaders.', exampleTranslation: 'Nous devons comparer nos performances avec celles des leaders du secteur.' },
    { english: 'synergy', french: 'synergie', phonetic: '/ˈsɪnərdʒi/', example: 'The merger is expected to generate significant synergies across both organisations.', exampleTranslation: 'La fusion devrait générer des synergies significatives dans les deux organisations.' },
    { english: 'stakeholder value', french: 'valeur pour les parties prenantes', phonetic: '/ˈsteɪkhoʊldər ˈvæljuː/', example: 'Our long-term strategy is driven by stakeholder value, not short-term profit.', exampleTranslation: 'Notre stratégie à long terme est guidée par la valeur pour les parties prenantes, non par le profit à court terme.' },
    { english: 'diversification', french: 'diversification', phonetic: '/daɪˌvɜːrsɪfɪˈkeɪʃn/', example: 'Geographic diversification will reduce our exposure to regional market fluctuations.', exampleTranslation: 'La diversification géographique réduira notre exposition aux fluctuations régionales du marché.' },
    { english: 'leveraged', french: 'à effet de levier / endetté', phonetic: '/ˈlevərɪdʒd/', example: 'The leveraged buyout was financed primarily through debt.', exampleTranslation: 'Le rachat à effet de levier a été financé principalement par la dette.' },
  ],
  grammar: {
    title: 'Le vocabulaire stratégique : nuances entre termes apparentés',
    explanation: 'Le langage de la stratégie d\'entreprise exige une précision absolue, car chaque terme renvoie à un concept managérial distinct : (1) « Benchmark » ≠ « standard » ≠ « target » : un benchmark est un point de comparaison externe (on se compare AUX AUTRES) ; un standard est un niveau attendu (interne) ; un target est un objectif à atteindre. On dit « benchmark AGAINST » (= comparer à). (2) « Synergy » est indénombrable au sens abstrait, mais on peut dire « synergies » au pluriel pour désigner des effets conjoints spécifiques et identifiables. « Create synergy » ≠ « generate synergies ». (3) « Stakeholder value » ≠ « shareholder value » : stakeholder = toute partie prenante (employés, clients, communauté) ; shareholder = actionnaire uniquement. La distinction est idéologique et stratégique. (4) « Diversification » ≠ « expansion » ≠ « differentiation » : diversifier = entrer dans de NOUVEAUX marchés/produits ; expandre = grandir dans le MÊME marché ; différencier = se distinguer des concurrents. (5) « Leveraged » s\'emploie comme adjectif dans « leveraged buyout » (LBO), « leveraged position ». Ne confondez pas avec « leverage » (nom = levier ; verbe = utiliser comme levier).',
    examples: [
      { sentence: 'We benchmarked our supply chain efficiency against the top three competitors.', translation: 'Nous avons comparé l\'efficacité de notre chaîne d\'approvisionnement avec celle des trois principaux concurrents.', isCorrect: true },
      { sentence: 'The merger will create synergy across marketing and distribution.', translation: '', isCorrect: false },
      { sentence: 'Stakeholder value encompasses employee wellbeing, customer satisfaction, and environmental responsibility.', translation: 'La valeur pour les parties prenantes englobe le bien-être des employés, la satisfaction client et la responsabilité environnementale.', isCorrect: true },
      { sentence: 'Their diversification into renewable energy has reduced reliance on fossil fuel revenues.', translation: 'Leur diversification dans les énergies renouvelables a réduit la dépendance aux revenus des combustibles fossiles.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The merger will create synergy across marketing and distribution.', correct: 'The merger will create synergies across marketing and distribution.', explanation: 'Quand on désigne des effets conjoints spécifiques et identifiables entre départements, on utilise le pluriel « synergies ». « Synergy » au singulier est un concept abstrait global ; « synergies » au pluriel désigne les effets concrets et mesurables.' },
      { wrong: 'We benchmarked our supply chain efficiency with the top competitors.', correct: 'We benchmarked our supply chain efficiency against the top competitors.', explanation: '« Benchmark » se construit avec « against » (= comparer À/MESURE), pas « with ». On se mesure CONTRE un point de référence, d\'où « against ».' },
    ],
  },
  conversation: [
    { speaker: 'CEO Hartmann', role: 'A', text: 'Our current portfolio is overly concentrated in the European market. I believe diversification must be our top priority for the next fiscal year.', translation: 'Notre portefeuille actuel est trop concentré sur le marché européen. Je crois que la diversification doit être notre priorité absolue pour le prochain exercice.' },
    { speaker: 'CFO Nakamura', role: 'B', text: 'I agree, but any diversification strategy must be benchmarked against our competitors\' moves in Asia-Pacific. We can\'t enter blindly.', translation: 'Je suis d\'accord, mais toute stratégie de diversification doit être comparée aux initiatives de nos concurrents en Asie-Pacifique. Nous ne pouvons pas y entrer à l\'aveugle.' },
    { speaker: 'CEO Hartmann', role: 'A', text: 'Precisely. If we acquire an established player in the region, the synergies with our distribution network could be substantial.', translation: 'Précisément. Si nous acquérons un acteur établi dans la région, les synergies avec notre réseau de distribution pourraient être considérables.' },
    { speaker: 'CFO Nakamura', role: 'B', text: 'A leveraged acquisition would maximise returns, but it would also increase our debt-to-equity ratio significantly. Stakeholder value must be preserved.', translation: 'Une acquisition à effet de levier maximiserait les rendements, mais elle augmenterait aussi significativement notre ratio dette/fonds propres. La valeur pour les parties prenantes doit être préservée.' },
    { speaker: 'CEO Hartmann', role: 'A', text: 'Then we\'ll structure a balanced deal — partly equity, partly debt. I want a strategy that satisfies shareholders without alienating our workforce.', translation: 'Alors nous structurerons une transaction équilibrée — en partie en capital, en partie en dette. Je veux une stratégie qui satisfasse les actionnaires sans aliéner nos employés.' },
    { speaker: 'CFO Nakamura', role: 'B', text: 'A prudent approach. I\'ll prepare a comparative analysis with three potential targets by end of quarter.', translation: 'Une approche prudente. Je préparerai une analyse comparative avec trois cibles potentielles d\'ici la fin du trimestre.' },
  ],
  conversationTitle: 'Stratégie d\'entreprise : diversification et synergies',
  pronunciation: [
    { word: 'Benchmark', phonetic: '/ˈbentʃmɑːrk/', meaning: 'Référence', tip: 'L\'accent est sur « BENCH » : « BENCH-mark ». Le « ch » se prononce « tch » comme dans « chair », pas « sh ». Ne dites pas « bench-marque ».' },
    { word: 'Synergy', phonetic: '/ˈsɪnərdʒi/', meaning: 'Synergie', tip: 'Prononcez « SI-ner-ji » — l\'accent est sur « SI ». Le « y » se prononce « i » court. Ne dites pas « si-ner-ZHII » à la française.' },
    { word: 'Diversification', phonetic: '/daɪˌvɜːrsɪfɪˈkeɪʃn/', meaning: 'Diversification', tip: 'L\'accent est sur « CA » : « dy-VUR-si-fi-KAY-shun ». Attention au « di » initial = « dy » comme dans « dive », pas « di » comme en français. C\'est un mot de 6 syllabes.' },
    { word: 'Leveraged', phonetic: '/ˈlevərɪdʒd/', meaning: 'À effet de levier', tip: 'Prononcez « LEV-er-ijd » — l\'accent est sur « LEV ». Le « aged » final se prononce « ijd » comme dans « managed ». Ne dites pas « le-vé-raj-ed ».' },
  ],
}

// ─── c1-l17: Complex Conditionals ─────────────────────────────────────────────────
export const C1_L17: LessonContent = {
  vocab: [
    { english: 'contingency', french: 'imprévu / mesure de contingency', phonetic: '/kənˈtɪndʒənsi/', example: 'We must prepare a contingency plan in case the acquisition falls through.', exampleTranslation: 'Nous devons préparer un plan de contingency au cas où l\'acquisition échouerait.' },
    { english: 'prerequisite', french: 'prérequis / condition préalable', phonetic: '/priːˈrekwɪzɪt/', example: 'Regulatory approval is a prerequisite for the deal to proceed.', exampleTranslation: 'L\'approbation réglementaire est un prérequis pour que la transaction puisse aboutir.' },
    { english: 'to envisage', french: 'envisager / prévoir', phonetic: '/ɪnˈvɪzɪdʒ/', example: 'The board envisages three possible scenarios for the next quarter.', exampleTranslation: 'Le conseil envisage trois scénarios possibles pour le prochain trimestre.' },
    { english: 'fallback', french: 'solution de repli / recours', phonetic: '/ˈfɔːlbæk/', example: 'If negotiations fail, our fallback is to pursue organic growth.', exampleTranslation: 'Si les négociations échouent, notre solution de repli est de poursuivre une croissance organique.' },
    { english: 'to hinge on', french: 'dépendre de / reposer sur', phonetic: '/hɪndʒ ɒn/', example: 'The entire strategy hinges on securing the patent portfolio.', exampleTranslation: 'Toute la stratégie dépend de l\'obtention du portefeuille de brevets.' },
  ],
  grammar: {
    title: 'Les conditionnels complexes : structures avancées pour la planification stratégique',
    explanation: 'Au niveau C1, les conditionnels dépassent les structures de base pour exprimer des nuances stratégiques subtiles : (1) LES CONDITIONNELS INVERSÉS (Inverted Conditionals) : on omplit « if » et on inverse le sujet et l\'auxiliaire — très formel, typique du registre boardroom : « Were we to proceed... » (= If we were to proceed...) ; « Should the board approve... » (= If the board should approve...) ; « Had we anticipated... » (= If we had anticipated...). (2) LES CONDITIONNELS MIXTES (Mixed Conditionals) : ils combinent des temporalités différentes — passé + présent : « Had we invested last year, we WOULD BE market leaders now » (condition passée → résultat présent) ; présent/passé + passé : « If the CEO WERE more decisive, the deal WOULD HAVE closed last month » (condition générale → résultat passé). (3) « WERE TO » CONDITIONNEL : exprime une éventualité hypothétique future très peu probable : « Were the company to default on its debt... » (= Si par aventure l\'entreprise faisait défaut...). (4) « SHOULD » CONDITIONNEL : exprime une éventualité formelle moins probable : « Should you require further information... » (= Si vous deviez avoir besoin...). (5) « HAD IT NOT BEEN FOR » : exprime qu\'une condition passée a été cruciale : « Had it not been for the government bailout, the bank would have collapsed » (= Sans le renflouement gouvernemental, la banque se serait effondrée).',
    examples: [
      { sentence: 'Were we to enter the Chinese market without a local partner, the regulatory risks would be considerable.', translation: 'Si nous devions entrer sur le marché chinois sans partenaire local, les risques réglementaires seraient considérables.', isCorrect: true },
      { sentence: 'Had we diversified earlier, we wouldn\'t be facing this cash flow crisis now.', translation: 'Si nous avions diversifié plus tôt, nous ne serions pas confrontés à cette crise de trésorerie maintenant.', isCorrect: true },
      { sentence: 'Had it not been for the CEO\'s intervention, the deal would have collapsed.', translation: 'Sans l\'intervention du PDG, la transaction se serait effondrée.', isCorrect: true },
      { sentence: 'If we would have invested in R&D, we would be leaders today.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'If we would have invested in R&D, we would be leaders today.', correct: 'If we had invested in R&D, we would be leaders today.', explanation: 'On ne met JAMAIS « would » dans la subordonnée conditionnelle (if-clause). La structure correcte du mixed conditional est : « If + past perfect, would + base verbale ». « Would » n\'apparaît que dans la principale.' },
      { wrong: 'Had we not had for the government subsidy, the project would have failed.', correct: 'Had it not been for the government subsidy, the project would have failed.', explanation: 'L\'expression figée est « had it NOT BEEN FOR » (= sans / n\'eût été). On ne peut pas modifier cette structure — c\'est « it » (impersonnel) + « been » + « for ». Pas « had we not had for ».' },
    ],
  },
  conversation: [
    { speaker: 'Strategy Director Webb', role: 'A', text: 'Were we to delay the launch by six months, we could incorporate the new AI features. But would the opportunity cost be justified?', translation: 'Si nous devions retarder le lancement de six mois, nous pourrions intégrer les nouvelles fonctionnalités IA. Mais le coût d\'opportunité serait-il justifié ?' },
    { speaker: 'VP Operations Torres', role: 'B', text: 'Had we anticipated the competitor\'s move, we wouldn\'t be having this discussion now. But here we are — we need a fallback plan.', translation: 'Si nous avions anticipé la manœuvre du concurrent, nous n\'aurions pas cette discussion maintenant. Mais nous y sommes — il nous faut un plan de repli.' },
    { speaker: 'Strategy Director Webb', role: 'A', text: 'Should the board approve the accelerated timeline, everything hinges on securing the supply chain within eight weeks.', translation: 'Si le conseil approuvait le calendrier accéléré, tout dépendrait de la sécurisation de la chaîne d\'approvisionnement en huit semaines.' },
    { speaker: 'VP Operations Torres', role: 'B', text: 'That\'s an ambitious prerequisite. Had it not been for the new logistics partner, I\'d say it was impossible.', translation: 'C\'est un prérequis ambitieux. Sans le nouveau partenaire logistique, j\'aurais dit que c\'était impossible.' },
    { speaker: 'Strategy Director Webb', role: 'A', text: 'I envisage two contingency scenarios: one with full AI integration, one without. Both preserve our market position.', translation: 'J\'envisage deux scénarios de contingency : un avec intégration IA complète, un sans. Les deux préservent notre position sur le marché.' },
    { speaker: 'VP Operations Torres', role: 'B', text: 'Were I in your position, I\'d present both to the board and let them weigh the trade-offs. They need to see the full picture.', translation: 'Si j\'étais à votre place, je présenterais les deux au conseil et je les laisserais évaluer les compromis. Ils doivent voir la situation dans son ensemble.' },
  ],
  conversationTitle: 'Planification stratégique : conditionnels complexes et scénarios',
  pronunciation: [
    { word: 'Contingency', phonetic: '/kənˈtɪndʒənsi/', meaning: 'Contingence / imprévu', tip: 'L\'accent est sur « TIN » : « kun-TIN-jun-si ». Le « con » initial est réduit en schwa. Le « g » se prononce comme un « j » doux.' },
    { word: 'Prerequisite', phonetic: '/priːˈrekwɪzɪt/', meaning: 'Prérequis', tip: 'L\'accent est sur « RE » : « pree-RE-kwi-zit ». C\'est un mot de 4 syllabes. Ne dites pas « pre-RE-kwi-site » avec 5 syllabes.' },
    { word: 'Envisage', phonetic: '/ɪnˈvɪzɪdʒ/', meaning: 'Envisager', tip: 'Prononcez « in-VIZ-ij » — l\'accent est sur « VIZ ». Le « age » final se prononce « ij » comme dans « damage ». Ne dites pas « an-vi-ZHAJ ».' },
    { word: 'Hinge', phonetic: '/hɪndʒ/', meaning: 'Dépendre (hinge on)', tip: 'Prononcez « hïnj » — une seule syllabe. Le « h » est expiré. Le « ge » final se prononce comme le « j » dans « judge ». Ne dites pas « hin-juh ».' },
  ],
}

// ─── c1-l18: Strategic Planning ───────────────────────────────────────────────────
export const C1_L18: LessonContent = {
  vocab: [
    { english: 'to pivot', french: 'pivoter / réorienter', phonetic: '/ˈpɪvət/', example: 'We may need to pivot our strategy if the market shifts towards subscription models.', exampleTranslation: 'Nous pourrions avoir besoin de pivoter notre stratégie si le marché évolue vers les modèles d\'abonnement.' },
    { english: 'roadmap', french: 'feuille de route', phonetic: '/ˈroʊdmæp/', example: 'The board has approved a three-year roadmap for digital transformation.', exampleTranslation: 'Le conseil a approuvé une feuille de route de trois ans pour la transformation numérique.' },
    { english: 'trade-off', french: 'compromis / arbitrage', phonetic: '/ˈtreɪdɒf/', example: 'Every strategic decision involves trade-offs between growth and profitability.', exampleTranslation: 'Chaque décision stratégique implique des compromis entre croissance et rentabilité.' },
    { english: 'scalable', french: 'évolutif / passible de mise à l\'échelle', phonetic: '/ˈskeɪləbl/', example: 'The platform must be scalable to accommodate a tenfold increase in users.', exampleTranslation: 'La plateforme doit être évolutive pour accueillir une multiplication par dix des utilisateurs.' },
    { english: 'runway', french: 'marge de manœuvre (financière)', phonetic: '/ˈrʌnweɪ/', example: 'We have eighteen months of runway before we need additional funding.', exampleTranslation: 'Nous avons dix-huit mois de marge de manœuvre avant d\'avoir besoin de financement supplémentaire.' },
  ],
  grammar: {
    title: 'Le discours stratégique en conseil d\'administration : conditionnels complexes et atténuation',
    explanation: 'Les discussions au niveau du conseil d\'administration combinent des conditionnels sophistiqués avec un langage d\'atténuation (hedging) pour exprimer des scénarios sans engager la responsabilité : (1) L\'ATTÉNUATION STRATÉGIQUE : « It might be worth considering... » au lieu de « We should... » ; « There is a reasonable case for... » au lieu de « We must... ». Le conseil ne dit JAMAIS « we will » directement — on utilise « the recommendation would be... » ou « it is proposed that... ». (2) LES CONDITIONNELS DANS LE DISCOURS STRATÉGIQUE : « Should market conditions deteriorate... » (= Si les conditions du marché venaient à se dégrader...) ; « Were we to pursue this avenue... » (= Si nous devions explorer cette voie...) ; « Had the board been consulted earlier... » (= Si le conseil avait été consulté plus tôt...). (3) LES FORMULES DE DISTANCE : « One could argue that... » ; « It is not unreasonable to assume... » ; « The data would suggest... ». (4) LE PASSIF STRATÉGIQUE : « A decision was taken to... » (on ne dit pas QUI a décidé) ; « Adjustments will need to be made... » (on ne dit pas par qui). (5) « Trade-off » + « between... and... » : on dit « trade-off BETWEEN growth AND profitability », pas « trade-off of growth with profitability ».',
    examples: [
      { sentence: 'Should market conditions deteriorate further, a pivot towards domestic sales might prove necessary.', translation: 'Si les conditions du marché venaient à se dégrader davantage, un pivot vers les ventes domestiques pourrait s\'avérer nécessaire.', isCorrect: true },
      { sentence: 'Had the roadmap been aligned with market realities, we would not be facing these trade-offs today.', translation: 'Si la feuille de route avait été alignée sur les réalités du marché, nous ne serions pas confrontés à ces compromis aujourd\'hui.', isCorrect: true },
      { sentence: 'The platform must be scalable, so we have to pivot now.', translation: '', isCorrect: false },
      { sentence: 'It is proposed that the runway be extended through a bridge financing round, were the board to approve.', translation: 'Il est proposé que la marge de manœuvre soit prolongée par un tour de financement relais, si le conseil l\'approuvait.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The platform must be scalable, so we have to pivot now.', correct: 'Given the need for scalability, a strategic pivot may warrant consideration at this juncture.', explanation: 'Le registre boardroom exige l\'atténuation : « must » et « have to » sont trop directs. On utilise « may warrant consideration », « could prove necessary ». La fermeté se dissimule sous la nuance.' },
      { wrong: 'We have a trade-off of growth with profitability.', correct: 'We face a trade-off between growth and profitability.', explanation: '« Trade-off » se construit avec « between... and... » : un compromis ENTRE croissance ET rentabilité. Jamais « trade-off of... with... ». La préposition « between » est obligatoire.' },
    ],
  },
  conversation: [
    { speaker: 'Chairperson Andersen', role: 'A', text: 'Let us turn to the strategic roadmap. Were we to maintain our current trajectory, what are the projected outcomes for Q3 and Q4?', translation: 'Passons à la feuille de route stratégique. Si nous devions maintenir notre trajectoire actuelle, quels sont les résultats projetés pour les troisième et quatrième trimestres ?' },
    { speaker: 'Chief Strategy Officer Diallo', role: 'B', text: 'The data would suggest a plateau by Q3. Should that materialise, a pivot towards the enterprise segment could offset the slowdown.', translation: 'Les données suggéreraient un plateau au T3. Si cela se matérialisait, un pivot vers le segment entreprise pourrait compenser le ralentissement.' },
    { speaker: 'Chairperson Andersen', role: 'A', text: 'And the trade-offs? A pivot of that magnitude would entail significant reorganisation costs.', translation: 'Et les compromis ? Un pivot d\'une telle ampleur entraînerait des coûts de réorganisation significatifs.' },
    { speaker: 'Chief Strategy Officer Diallo', role: 'B', text: 'Indeed. However, had we not diversified our revenue streams last year, our runway would be considerably shorter. The scalable infrastructure we invested in gives us that flexibility.', translation: 'En effet. Cependant, si nous n\'avions pas diversifié nos sources de revenus l\'année dernière, notre marge de manœuvre serait considérablement réduite. L\'infrastructure évolutive dans laquelle nous avons investi nous donne cette flexibilité.' },
    { speaker: 'Chairperson Andersen', role: 'A', text: 'It might be worth considering a phased approach — a partial pivot initially, with full implementation contingent on Q2 results.', translation: 'Il pourrait être judicieux d\'envisager une approche progressive — un pivot partiel dans un premier temps, avec une mise en œuvre complète conditionnée aux résultats du T2.' },
    { speaker: 'Chief Strategy Officer Diallo', role: 'B', text: 'A prudent recommendation. I shall prepare a detailed analysis for the next board session, outlining both scenarios with their respective trade-offs.', translation: 'Une recommandation prudente. Je préparerai une analyse détaillée pour la prochaine session du conseil, exposant les deux scénarios avec leurs compromis respectifs.' },
  ],
  conversationTitle: 'Planification stratégique : discussion au conseil d\'administration',
  pronunciation: [
    { word: 'Pivot', phonetic: '/ˈpɪvət/', meaning: 'Pivoter / réorienter', tip: 'Prononcez « PIV-ut » — l\'accent est sur « PIV ». Le « i » est court comme dans « bit ». Ne dites pas « pee-VO » à la française.' },
    { word: 'Roadmap', phonetic: '/ˈroʊdmæp/', meaning: 'Feuille de route', tip: 'Prononcez « RODE-map » — l\'accent est sur « RODE ». Le « oa » = « o » long comme dans « boat ». Le « map » est net et court.' },
    { word: 'Scalable', phonetic: '/ˈskeɪləbl/', meaning: 'Évolutif', tip: 'Prononcez « SKAY-luh-bul » — l\'accent est sur « SKAY ». Le « sc » = « sk » comme dans « scale ». Ne dites pas « ska-LAB-luh ».' },
    { word: 'Trade-off', phonetic: '/ˈtreɪdɒf/', meaning: 'Compromis', tip: 'Prononcez « TRAYD-off » — l\'accent est sur « TRADE ». Le « ay » est long comme dans « play ». Le « off » est court et net.' },
  ],
}

// ─── c1-l19: Stakeholder Communication ────────────────────────────────────────────
export const C1_L19: LessonContent = {
  vocab: [
    { english: 'to outline', french: 'exposer / présenter dans les grandes lignes', phonetic: '/ˈaʊtlaɪn/', example: 'The CEO outlined the restructuring plan to the board of directors.', exampleTranslation: 'Le PDG a exposé le plan de restructuration au conseil d\'administration.' },
    { english: 'to reassure', french: 'rassurer / tranquilliser', phonetic: '/ˌriːəˈʃʊər/', example: 'We need to reassure employees that no layoffs are planned.', exampleTranslation: 'Nous devons rassurer les employés qu\'aucun licenciement n\'est prévu.' },
    { english: 'disclosure', french: 'divulgation / communication d\'information', phonetic: '/dɪsˈkloʊʒər/', example: 'Full disclosure of the financial risks is required before the shareholder vote.', exampleTranslation: 'La divulgation complète des risques financiers est requise avant le vote des actionnaires.' },
    { english: 'to align', french: 'aligner / mettre en adéquation', phonetic: '/əˈlaɪn/', example: 'Our messaging must be aligned across all stakeholder communications.', exampleTranslation: 'Notre discours doit être aligné dans toutes les communications aux parties prenantes.' },
    { english: 'transparency', french: 'transparence', phonetic: '/trænsˈpærənsi/', example: 'Investors are demanding greater transparency regarding executive compensation.', exampleTranslation: 'Les investisseurs exigent une plus grande transparence concernant la rémunération des dirigeants.' },
  ],
  grammar: {
    title: 'Le changement de registre : adapter son discours selon l\'auditoire (register-shifting)',
    explanation: 'En entreprise, le même message doit être reformulé selon le public — c\'est le register-shifting : (1) REGISTRE CONSEIL D\'ADMINISTRATION (Board Register) : formel, concis, orienté gouvernance. On utilise le passif, les nominalisations, le vocabulaire juridique : « A resolution was passed authorising the share buyback programme. » Les conditionnels inversés sont courants : « Should circumstances warrant... ». (2) REGISTRE INVESTISSEURS (Investor Register) : orienté performance, données chiffrées, projections. On utilise le futur prédictif, les superlatifs mesurés : « We project a 12% increase in EBITDA. The outlook remains favourable. » On atténue les risques : « Headwinds are anticipated but manageable. » (3) REGISTRE EMPLOYÉS (Employee Register) : direct, empathique, orienté action. On utilise le « we », le présent, un vocabulaire accessible : « We\'re investing in your growth. Here\'s what this means for your team. » On évite le jargon : « restructure » devient « we\'re reorganising » ; « headcount reduction » devient « some roles will change ». (4) LES PIÈGES DU CHANGEMENT DE REGISTRE : ne JAMAIS utiliser le langage boardroom avec les employés (« headcount optimisation » = froid et déshumanisant) ; ne JAMAIS être trop informel avec les investisseurs (« we\'re doing great » = peu crédible). (5) LES MARQUEURS DE REGISTRE : Board = « shall, pursuant, resolution, governance » ; Investors = « yield, EBITDA, outlook, projection » ; Employees = « team, growth, together, commitment ».',
    examples: [
      { sentence: 'A resolution has been passed authorising the restructuring initiative, pursuant to the committee\'s recommendations.', translation: 'Une résolution a été adoptée autorisant l\'initiative de restructuration, conformément aux recommandations du comité.', isCorrect: true },
      { sentence: 'We project an EBITDA margin improvement of 200 basis points, driven by operational efficiencies and portfolio optimisation.', translation: 'Nous projetons une amélioration de la marge EBITDA de 200 points de base, portée par les gains d\'efficacité opérationnelle et l\'optimisation du portefeuille.', isCorrect: true },
      { sentence: 'We\'re reorganising some roles, and we\'re committed to supporting every team member through this transition.', translation: 'Nous réorganisons certains postes, et nous nous engageons à accompagner chaque membre de l\'équipe dans cette transition.', isCorrect: true },
      { sentence: 'We told the board we\'re doing great and stuff will get better.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'We told the board we\'re doing great and stuff will get better.', correct: 'We presented the board with a favourable outlook, noting that sustained improvements are anticipated across key metrics.', explanation: 'Le registre conseil exige du formalisme : « doing great » → « favourable outlook » ; « stuff » → « key metrics » ; « will get better » → « sustained improvements are anticipated ». Le ton doit être factuel et mesuré.' },
      { wrong: 'A headcount optimisation will be executed pursuant to the strategic realignment.', correct: '(To employees): Some roles will change as we reorganise the business to better serve our customers.', explanation: '« Headcount optimisation » est un euphémisme glacé pour les employés — il sous-entend des licenciements tout en les occultant. Avec les employés, on nomme la réalité avec humanité : « some roles will change ». Réservez le jargon pour le conseil.' },
    ],
  },
  conversation: [
    { speaker: 'Communications Director Reyes', role: 'A', text: 'We need three versions of the announcement. The board briefing first — formal, governance-focused.', translation: 'Nous avons besoin de trois versions de l\'annonce. D\'abord le briefing du conseil — formel, axé sur la gouvernance.' },
    { speaker: 'CEO Laurent', role: 'B', text: 'For the board: « A resolution has been passed authorising the strategic realignment. Full disclosure documentation will be provided to all directors. »', translation: 'Pour le conseil : « Une résolution a été adoptée autorisant le réalignement stratégique. La documentation complète de divulgation sera fournie à tous les administrateurs. »' },
    { speaker: 'Communications Director Reyes', role: 'A', text: 'Good. Now the investor call — we need to project confidence while maintaining transparency about the risks.', translation: 'Bien. Maintenant l\'appel investisseurs — nous devons projeter de la confiance tout en maintenant la transparence sur les risques.' },
    { speaker: 'CEO Laurent', role: 'B', text: '« We project a 15% improvement in operating margin. While headwinds remain in the European market, our diversification strategy provides a robust hedge. »', translation: '« Nous projetons une amélioration de 15% de la marge opérationnelle. Bien que des vents contraires persistent sur le marché européen, notre stratégie de diversification offre une couverture solide. »' },
    { speaker: 'Communications Director Reyes', role: 'A', text: 'And for employees — the message must be honest and reassuring. No jargon, no euphemisms.', translation: 'Et pour les employés — le message doit être honnête et rassurant. Pas de jargon, pas d\'euphémismes.' },
    { speaker: 'CEO Laurent', role: 'B', text: '« We\'re making changes to strengthen the company for the future. Some teams will be reorganised, and we\'re committed to supporting everyone through this. Here\'s exactly what happens next. »', translation: '« Nous faisons des changements pour renforcer l\'entreprise pour l\'avenir. Certaines équipes seront réorganisées, et nous nous engageons à accompagner chacun dans cette transition. Voici exactement ce qui se passe ensuite. »' },
  ],
  conversationTitle: 'Communication parties prenantes : adapter le registre selon l\'auditoire',
  pronunciation: [
    { word: 'Outline', phonetic: '/ˈaʊtlaɪn/', meaning: 'Exposer', tip: 'Verbe : « out-LINE » — l\'accent est sur « LINE ». Nom : « OUT-line ». L\'accent change selon la fonction ! Verbe = accent final, nom = accent initial.' },
    { word: 'Reassure', phonetic: '/ˌriːəˈʃʊər/', meaning: 'Rassurer', tip: 'L\'accent est sur « SHURE » : « ree-uh-SHOOR ». Le « re » est long comme dans « repeat ». Le « sure » rime avec « pure ». Ne dites pas « re-a-su-reu ».' },
    { word: 'Disclosure', phonetic: '/dɪsˈkloʊʒər/', meaning: 'Divulgation', tip: 'L\'accent est sur « CLO » : « dis-KLO-zhur ». Le « dis » est réduit. Le « sure » final = « zhur » comme dans « measure ». Ne dites pas « dis-klo-sur ».' },
    { word: 'Transparency', phonetic: '/trænsˈpærənsi/', meaning: 'Transparence', tip: 'L\'accent est sur « PAR » : « trans-PAR-un-si ». Le « a » de « par » est ouvert. Le « trans » peut aussi se prononcer « tranz ». Ne dites pas « trans-pa-ren-ceu ».' },
  ],
}

// ─── c1-l20: Strategy Sounds ──────────────────────────────────────────────────────
export const C1_L20: LessonContent = {
  vocab: [
    { english: 'acquisition', french: 'acquisition / rachat', phonetic: '/ˌækwɪˈzɪʃn/', example: 'The acquisition of the startup was valued at 2.3 billion dollars.', exampleTranslation: 'L\'acquisition de la jeune pousse a été évaluée à 2,3 milliards de dollars.' },
    { english: 'equity', french: 'capitaux propres / équité', phonetic: '/ˈekwəti/', example: 'The company raised equity financing to fund its expansion.', exampleTranslation: 'L\'entreprise a levé des fonds propres pour financer son expansion.' },
    { english: 'fiduciary', french: 'fiduciaire', phonetic: '/fɪˈdjuːʃiəri/', example: 'The board has a fiduciary duty to act in the best interests of shareholders.', exampleTranslation: 'Le conseil a un devoir fiduciaire d\'agir dans le meilleur intérêt des actionnaires.' },
    { english: 'arbitrage', french: 'arbitrage', phonetic: '/ˈɑːrbɪtrɑːʒ/', example: 'The hedge fund profited from arbitrage opportunities between the two exchanges.', exampleTranslation: 'Le fonds spéculatif a profité d\'opportunités d\'arbitrage entre les deux bourses.' },
    { english: 'subsidiary', french: 'filiale', phonetic: '/səbˈsɪdiəri/', example: 'The European subsidiary accounts for 40% of global revenue.', exampleTranslation: 'La filiale européenne représente 40% du chiffre d\'affaires mondial.' },
  ],
  grammar: {
    title: 'La prononciation stratégique : termes d\'entreprise que les francophones mal prononcent',
    explanation: 'Les francophones commettent des erreurs systématiques sur les termes stratégiques d\'entreprise, souvent à cause des faux amis phonétiques et des différences d\'accentuation : (1) « Acquisition » : en anglais, /ˌækwɪˈzɪʃn/ — l\'accent est sur « ZI » : « ak-wi-ZISH-un ». Les francophones disent souvent « a-kwi-ZI-syon » (prononciation française) ou placent l\'accent sur la mauvaise syllabe. Le « qu » = « kw » et non « k ». (2) « Equity » : /ˈekwəti/ — l\'accent est sur « EK » : « EK-wuh-ti ». Les francophones disent « é-KWI-ti ». Le « qu » = « kw » et le premier « e » est ouvert. (3) « Fiduciary » : /fɪˈdjuːʃiəri/ — l\'accent est sur « DU » : « fi-DOO-shuh-ri ». Les francophones disent « fi-dyu-SI-a-ri » (6 syllabes françaises vs 4 syllabes anglaises). La terminaison « -ciary » = « shuh-ri » (2 syllabes, pas 3). (4) « Arbitrage » : /ˈɑːrbɪtrɑːʒ/ — l\'accent est sur « AR » : « AR-bi-trahzh ». En français, l\'accent est sur la dernière syllabe. En anglais, c\'est sur la première. Le « age » final = « ahzh » comme dans « mirage ». (5) « Subsidiary » : /səbˈsɪdiəri/ — l\'accent est sur « SID » : « sub-SID-ee-uh-ri ». Les francophones disent souvent « sub-si-DYA-ri ». La terminaison « -iary » = « ee-uh-ri » (3 syllabes), pas « ya-ri » (2 syllabes).',
    examples: [
      { sentence: 'The acquisition was completed after regulatory approval.', translation: 'L\'acquisition a été finalisée après approbation réglementaire.', isCorrect: true },
      { sentence: 'Private equity firms often target undervalued subsidiaries for acquisition.', translation: 'Les sociétés de capital-investissement ciblent souvent des filiales sous-évaluées pour acquisition.', isCorrect: true },
      { sentence: 'The fiduciary responsibility of the board was called into question.', translation: 'La responsabilité fiduciaire du conseil a été remise en question.', isCorrect: true },
      { sentence: 'The company made an a-kwee-ZEE-syon of its rival.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'The company made an a-kwee-ZEE-syon of its rival.', correct: 'The company made an acquisition of its rival. (/ˌækwɪˈzɪʃn/)', explanation: '« Acquisition » se prononce « ak-wi-ZISH-un » en anglais : le « qu » = « kw », l\'accent est sur « ZI », et la terminaison « -tion » = « shun ». Ne prononcez JAMAIS ce mot à la française en contexte anglais.' },
      { wrong: 'She works for a sub-si-DYA-ri of the parent company.', correct: 'She works for a subsidiary of the parent company. (/səbˈsɪdiəri/)', explanation: '« Subsidiary » se prononce « sub-SID-ee-uh-ri » — l\'accent est sur « SID », et la terminaison est « ee-uh-ri » (3 syllabes), pas « ya-ri » (2 syllabes à la française). C\'est un mot de 5 syllabes en anglais.' },
    ],
  },
  conversation: [
    { speaker: 'M&A Advisor Kim', role: 'A', text: 'The acquisition target has two profitable subsidiaries in Southeast Asia. The arbitrage potential between the current valuation and their standalone worth is significant.', translation: 'La cible d\'acquisition possède deux filiales rentables en Asie du Sud-Est. Le potentiel d\'arbitrage entre la valorisation actuelle et leur valeur autonome est significatif.' },
    { speaker: 'General Counsel Osei', role: 'B', text: 'From a fiduciary standpoint, we must demonstrate that this acquisition serves shareholder interests above all. The board\'s duty is unambiguous.', translation: 'D\'un point de vue fiduciaire, nous devons démontrer que cette acquisition sert les intérêts des actionnaires avant tout. Le devoir du conseil est sans ambiguïté.' },
    { speaker: 'M&A Advisor Kim', role: 'A', text: 'Agreed. We\'ll structure the deal as a mix of equity and debt — 60% equity financing to preserve the balance sheet.', translation: 'D\'accord. Nous structurerons la transaction comme un mélange de fonds propres et de dette — 60% de financement en fonds propres pour préserver le bilan.' },
    { speaker: 'General Counsel Osei', role: 'B', text: 'The disclosure requirements will be extensive. Full transparency with both the regulators and the investor community is non-negotiable.', translation: 'Les exigences de divulgation seront considérables. Une transparence totale avec les régulateurs et la communauté des investisseurs est non négociable.' },
    { speaker: 'M&A Advisor Kim', role: 'A', text: 'Naturally. I\'ll prepare the communication strategy — different registers for different audiences, as we discussed.', translation: 'Naturellement. Je préparerai la stratégie de communication — des registres différents selon les audiences, comme nous l\'avons discuté.' },
    { speaker: 'General Counsel Osei', role: 'B', text: 'Good. And ensure that every document is precise. In fiduciary matters, a single ambiguous word can become a liability.', translation: 'Bien. Et assurez-vous que chaque document est précis. En matière fiduciaire, un seul mot ambigu peut devenir un passif.' },
  ],
  conversationTitle: 'Fusion-acquisition : terminologie stratégique et devoirs fiduciaires',
  pronunciation: [
    { word: 'Acquisition', phonetic: '/ˌækwɪˈzɪʃn/', meaning: 'Acquisition', tip: 'L\'accent est sur « ZI » : « ak-wi-ZISH-un ». Le « qu » = « kw » comme dans « queen ». La terminaison « -tion » = « shun ». 4 syllabes, pas 5. Ne prononcez PAS à la française.' },
    { word: 'Equity', phonetic: '/ˈekwəti/', meaning: 'Fonds propres / équité', tip: 'L\'accent est sur « EK » : « EK-wuh-ti ». Le « qu » = « kw ». Le « e » initial est ouvert comme dans « pet ». Ne dites pas « é-KWI-ti » avec l\'accent sur la deuxième syllabe.' },
    { word: 'Fiduciary', phonetic: '/fɪˈdjuːʃiəri/', meaning: 'Fiduciaire', tip: 'L\'accent est sur « DU » : « fi-DOO-shuh-ri ». 4 syllabes en anglais (pas 6 comme en français). La terminaison « -ciary » = « shuh-ri ». Ne dites pas « fi-dyu-SI-a-ri ».' },
    { word: 'Subsidiary', phonetic: '/səbˈsɪdiəri/', meaning: 'Filiale', tip: 'L\'accent est sur « SID » : « sub-SID-ee-uh-ri ». 5 syllabes. La terminaison « -iary » = « ee-uh-ri » (3 syllabes). Ne dites pas « sub-si-DYA-ri » à la française.' },
  ],
}
