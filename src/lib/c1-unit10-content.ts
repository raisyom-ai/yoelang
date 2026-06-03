import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C1 ADVANCED — UNIT 10: FINANCIAL MARKETS (c1-l46 through c1-l50)
// YOELANG English Learning App for Francophone Users
// Advanced: financial vocabulary, quantifiers for reporting, market analysis, investment language
// ════════════════════════════════════════════════════════════════════════════════

// ─── c1-l46: Finance Vocabulary ─────────────────────────────────────────────────
export const C1_L46: LessonContent = {
  vocab: [
    { english: 'derivative', french: 'produit dérivé', phonetic: '/dɪˈrɪvətɪv/', example: 'The bank\'s exposure to derivatives raised concerns among regulators.', exampleTranslation: 'L\'exposition de la banque aux produits dérivés a suscité des inquiétudes parmi les régulateurs.' },
    { english: 'portfolio', french: 'portefeuille (d\'investissement)', phonetic: '/pɔːrtˈfoʊlioʊ/', example: 'She diversified her portfolio across emerging markets and blue-chip stocks.', exampleTranslation: 'Elle a diversifié son portefeuille entre les marchés émergents et les actions de premier rang.' },
    { english: 'hedge fund', french: 'fonds spéculatif / fonds de couverture', phonetic: '/hedʒ fʌnd/', example: 'The hedge fund posted a 32% return by shorting overvalued tech stocks.', exampleTranslation: 'Le fonds spéculatif a affiché un rendement de 32 % en vendant à découvert des actions technologiques surévaluées.' },
    { english: 'leveraged buyout', french: 'rachat avec effet de levier / LBO', phonetic: '/ˈlevərɪdʒd ˈbaɪaʊt/', example: 'The private equity firm completed a leveraged buyout of the airline.', exampleTranslation: 'Le société de capital-investissement a réalisé un rachat avec effet de levier de la compagnie aérienne.' },
    { english: 'yield', french: 'rendement / taux de rendement', phonetic: '/jiːld/', example: 'The 10-year bond yield fell below 2% amid recession fears.', exampleTranslation: 'Le rendement des obligations à 10 ans est tombé sous les 2 % dans un contexte de craintes de récession.' },
  ],
  grammar: {
    title: 'Le vocabulaire financier : nuances et faux amis entre anglais et français',
    explanation: 'Le lexique financier anglais comporte de nombreux pièges pour les francophones : (1) « Derivative » = produit dérivé financier (option, swap, future) — ne pas confondre avec « derivative » au sens courant (dérivé, dérivatif). En finance, c\'est TOUJOURS le sens d\'instrument financier. (2) « Portfolio » en anglais se prononce /pɔːrtˈfoʊlioʊ/ avec l\'accent sur « FO » — rien à voir avec le français « portefeuille ». En finance, cela désigne l\'ensemble des actifs détenus. (3) « Hedge fund » ≠ « fonds de couverture » au sens littéral : c\'est un fonds spéculatif utilisant des stratégies agressives. « To hedge » = se couvrir (contre le risque), mais un hedge fund prend souvent des risques importants. (4) « Leveraged buyout » (LBO) : « leveraged » se prononce /ˈlevərɪdʒd/ — le « -aged » fait deux syllabes (« rid-ged »), pas une. (5) « Yield » est indénombrable comme nom financier : on dit « the yield on bonds », pas « the yields ». Cependant, « yields » au pluriel est possible quand on compare plusieurs rendements distincts : « bond yields across Europe ».',
    examples: [
      { sentence: 'The portfolio\'s exposure to credit derivatives accounted for nearly 40% of its total risk.', translation: 'L\'exposition du portefeuille aux dérivés de crédit représentait près de 40 % de son risque total.', isCorrect: true },
      { sentence: 'The hedge fund hedged its position by purchasing put options on the index.', translation: 'Le fonds spéculatif a couvert sa position en achetant des options de vente sur l\'indice.', isCorrect: true },
      { sentence: 'The yield of the bond are expected to rise next quarter.', translation: '', isCorrect: false },
      { sentence: 'The leveraged buyout was financed through a combination of senior debt and equity.', translation: 'Le rachat avec effet de levier a été financé par une combinaison de dette senior et de fonds propres.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The yield of the bond are expected to rise next quarter.', correct: 'The yield on the bond is expected to rise next quarter.', explanation: '« Yield » est un nom indénombrable qui prend un verbe au singulier. De plus, on dit « yield ON the bond » et non « yield OF the bond ». La préposition « on » est la norme en anglais financier.' },
      { wrong: 'The hedge fund is a fund that hedges all its positions safely.', correct: 'A hedge fund uses aggressive strategies, including leverage and short selling, to generate high returns.', explanation: 'Contrairement à ce que suggère le nom, un hedge fund n\'est pas un fonds qui « couvre » prudemment ses positions. C\'est un fonds spéculatif souvent très risqué. Le nom est trompeur — « hedge » fait référence à la stratégie originale de couverture, mais la réalité moderne est bien plus agressive.' },
    ],
  },
  conversation: [
    { speaker: 'Analyst Moreau', role: 'A', text: 'The firm\'s portfolio has taken a hit. Their exposure to mortgage-backed securities and credit derivatives was far too concentrated.', translation: 'Le portefeuille de la firme a encaissé un coup. Leur exposition aux titres adossés à des hypothèques et aux dérivés de crédit était beaucoup trop concentrée.' },
    { speaker: 'Fund Director Walsh', role: 'B', text: 'Agreed. We should have diversified into high-yield bonds and commodities. The risk-adjusted return was simply inadequate.', translation: 'D\'accord. Nous aurions dû diversifier vers les obligations à haut rendement et les matières premières. Le rendement ajusté au risque était tout simplement insuffisant.' },
    { speaker: 'Analyst Moreau', role: 'A', text: 'What about the proposed leveraged buyout of Zenith Corp? The debt-to-equity ratio would be staggering.', translation: 'Qu\'en est-il du rachat avec effet de levier proposé de Zenith Corp ? Le ratio dette/fonds propres serait vertigineux.' },
    { speaker: 'Fund Director Walsh', role: 'B', text: 'The LBO is ambitious, I grant you. But if we can restructure the assets and improve the yield on their core business, it could pay off handsomely.', translation: 'Le LBO est ambitieux, je vous l\'accorde. Mais si nous pouvons restructurer les actifs et améliorer le rendement de leur activité principale, cela pourrait être très rentable.' },
    { speaker: 'Analyst Moreau', role: 'A', text: 'I\'d recommend we hedge our position with credit default swaps to limit downside risk in case the market turns.', translation: 'Je recommanderais de couvrir notre position avec des swaps de défaut de crédit pour limiter le risque de perte si le marché se retourne.' },
    { speaker: 'Fund Director Walsh', role: 'B', text: 'A prudent approach. Let\'s model the scenarios and present our findings to the investment committee on Thursday.', translation: 'Une approche prudente. Modélisons les scénarios et présentons nos résultats au comité d\'investissement jeudi.' },
  ],
  conversationTitle: 'Analyse de portefeuille : exposition aux dérivés et stratégie LBO',
  pronunciation: [
    { word: 'Derivative', phonetic: '/dɪˈrɪvətɪv/', meaning: 'Produit dérivé', tip: 'L\'accent est sur « RIV » : « dih-RIV-uh-tiv ». Ne dites pas « dé-ri-va-tiv » à la française. Le « e » initial est un « i » bref comme dans « did ».' },
    { word: 'Portfolio', phonetic: '/pɔːrtˈfoʊlioʊ/', meaning: 'Portefeuille', tip: 'Prononcez « port-FO-lee-o » — l\'accent est sur « FO ». Ne dites pas « por-te-fœy » à la française. C\'est un mot italien anglicisé avec un « o » final prononcé.' },
    { word: 'Leveraged', phonetic: '/ˈlevərɪdʒd/', meaning: 'Avec effet de levier', tip: 'Prononcez « LEV-er-rijd » — la terminaison « -aged » fait DEUX syllabes : « ri-jd ». Ne dites pas « lé-vé-rijd » ni « lev-raj ».' },
    { word: 'Yield', phonetic: '/jiːld/', meaning: 'Rendement', tip: 'Prononcez « yeeld » — le « y » est comme dans « yes » et le « ie » se prononce comme un long « ee ». Ne dites pas « eeld ». Le « ld » final est clair, comme dans « build ».' },
  ],
}

// ─── c1-l47: Advanced Quantifiers ───────────────────────────────────────────────
export const C1_L47: LessonContent = {
  vocab: [
    { english: 'a fraction of', french: 'une fraction de / une infime partie de', phonetic: '/ə ˈfrækʃn əv/', example: 'Only a fraction of the initial investment was recovered after the bankruptcy.', exampleTranslation: 'Seule une fraction de l\'investissement initial a été récupérée après la faillite.' },
    { english: 'a mere', french: 'à peine / seulement', phonetic: '/ə mɪər/', example: 'A mere 3% of respondents indicated confidence in the recovery.', exampleTranslation: 'À peine 3 % des personnes interrogées ont indiqué être confiantes dans la reprise.' },
    { english: 'in excess of', french: 'plus de / en excès de', phonetic: '/ɪn ɪkˈses əv/', example: 'The bailout package was valued in excess of €500 billion.', exampleTranslation: 'Le plan de sauvetage était évalué à plus de 500 milliards d\'euros.' },
    { english: 'upwards of', french: 'plus de / au moins', phonetic: '/ˈʌpwərdz əv/', example: 'Upwards of two million shares changed hands during the trading session.', exampleTranslation: 'Plus de deux millions d\'actions ont changé de mains pendant la séance boursière.' },
    { english: 'to the tune of', french: 'de l\'ordre de / à hauteur de', phonetic: '/tə ðə tjuːn əv/', example: 'The company reported losses to the tune of $800 million for the quarter.', exampleTranslation: 'L\'entreprise a fait état de pertes de l\'ordre de 800 millions de dollars pour le trimestre.' },
  ],
  grammar: {
    title: 'Les quantificateurs avancés : exprimer des montants avec précision dans le reporting financier',
    explanation: 'Le reporting financier anglophone utilise des quantificateurs sophistiqués pour nuancer les chiffres et montants : (1) « A fraction of » + singulier = une très petite partie : « a fraction of the cost » — souligne que c\'est négligeable par rapport à l\'ensemble. Différent de « a percentage of » qui est neutre. (2) « A mere » + chiffre = insiste sur la petitesse surprenante : « a mere 2% increase » — exprime souvent l\'indignation ou la déception. C\'est plus emphatique que « only ». (3) « In excess of » + chiffre = plus de, en dépassant — formel et juridique, fréquent dans les rapports annuels et les communiqués. Plus soutenu que « more than ». (4) « Upwards of » + chiffre = au moins, probablement plus — suggère une estimation basse avec une implication que le chiffre réel est supérieur. Différent de « in excess of » qui est plus précis. (5) « On the order of » + chiffre = de l\'ordre de grandeur de — pour les estimations approximatives à grande échelle : « on the order of $10 billion ». (6) « To the tune of » + chiffre = à hauteur de / dans les environs de — familier mais courant dans le journalisme financier : « losses to the tune of $5 million ». Attention : « to the tune of » est légèrement informel — à éviter dans un rapport officiel, où l\'on préférera « in the region of » ou « approximately ».',
    examples: [
      { sentence: 'The restructuring cost, in excess of £2 billion, was far greater than analysts had predicted.', translation: 'Le coût de la restructuration, supérieur à 2 milliards de livres, était bien plus élevé que ne l\'avaient prévu les analystes.', isCorrect: true },
      { sentence: 'A mere fraction of shareholders voted in favour of the merger.', translation: 'À peine une fraction des actionnaires a voté en faveur de la fusion.', isCorrect: true },
      { sentence: 'Upwards of the 500 jobs will be cut as part of the restructuring plan.', translation: '', isCorrect: false },
      { sentence: 'The central bank injected liquidity to the tune of $1.5 trillion into the financial system.', translation: 'La banque centrale a injecté des liquidités à hauteur de 1 500 milliards de dollars dans le système financier.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Upwards of the 500 jobs will be cut as part of the restructuring plan.', correct: 'Upwards of 500 jobs will be cut as part of the restructuring plan.', explanation: '« Upwards of » est suivi directement du chiffre SANS article : « upwards of 500 », pas « upwards of THE 500 ». Ces quantificateurs fonctionnent comme des déterminants et ne prennent pas d\'article défini.' },
      { wrong: 'The losses were to the tune of in excess of $5 million.', correct: 'The losses were in excess of $5 million.', explanation: 'On ne cumule PAS les quantificateurs : « to the tune of in excess of » est redondant et incorrect. Choisissez UN quantificateur : « in excess of » (formel) ou « to the tune of » (journalistique), mais jamais les deux ensemble.' },
    ],
  },
  conversation: [
    { speaker: 'Senior Analyst Petrova', role: 'A', text: 'The quarterly figures are alarming. Revenue came in at a mere £3.2 million — well below consensus estimates.', translation: 'Les chiffres trimestriels sont alarmants. Le chiffre d\'affaires s\'est établi à à peine 3,2 millions de livres — bien en deçà des estimés de consensus.' },
    { speaker: 'Portfolio Manager Tanaka', role: 'B', text: 'And the writedowns? I\'ve heard the impairment charges could be in excess of £500 million.', translation: 'Et les dépréciations ? J\'ai entendu dire que les charges de dépréciation pourraient dépasser 500 millions de livres.' },
    { speaker: 'Senior Analyst Petrova', role: 'A', text: 'Indeed. The CEO mentioned losses to the tune of £480 million on the derivative positions alone. A fraction of that came from our recommended holdings, fortunately.', translation: 'En effet. Le PDG a mentionné des pertes de l\'ordre de 480 millions de livres sur les seules positions de dérivés. Une fraction seulement provenait de nos placements recommandés, heureusement.' },
    { speaker: 'Portfolio Manager Tanaka', role: 'B', text: 'What about the restructuring? I understand upwards of 4,000 positions will be eliminated across Europe.', translation: 'Et la restructuration ? Je comprends que plus de 4 000 postes seront supprimés à travers l\'Europe.' },
    { speaker: 'Senior Analyst Petrova', role: 'A', text: 'Correct. On the order of €1.2 billion in severance and restructuring costs are anticipated over the next 18 months.', translation: 'Correct. De l\'ordre de 1,2 milliard d\'euros en frais de licenciement et de restructuration sont anticipés sur les 18 prochains mois.' },
    { speaker: 'Portfolio Manager Tanaka', role: 'B', text: 'We need to revise our position immediately. I\'ll instruct the trading desk to reduce our exposure before the market opens tomorrow.', translation: 'Nous devons réviser notre position immédiatement. J\'informerai le desk de négociation de réduire notre exposition avant l\'ouverture du marché demain.' },
  ],
  conversationTitle: 'Reporting financier : quantificateurs et montants',
  pronunciation: [
    { word: 'Fraction', phonetic: '/ˈfrækʃn/', meaning: 'Fraction', tip: 'Prononcez « FRAK-shun » — le « ct » se prononce « k » comme dans « action ». Ne dites pas « frac-tee-on ». Le « -tion » final = « shun ».' },
    { word: 'Excess', phonetic: '/ɪkˈses/ ou /ˈekses/', meaning: 'Excès', tip: 'Comme nom : « ik-SES » (accent sur « SES »). Comme adjectif : « EK-ses » (accent sur « EK »). Dans « in excess of », c\'est un nom : « ik-SES ».' },
    { word: 'Upwards', phonetic: '/ˈʌpwərdz/', meaning: 'Plus de / vers le haut', tip: 'Prononcez « UP-wərdz » — l\'accent est sur « UP ». Le « wards » se prononce « wərdz » avec un schwa. Ne dites pas « up-WARDS ».' },
    { word: 'Tune', phonetic: '/tjuːn/', meaning: 'Air / mélodie (figuré : montant)', tip: 'Prononcez « tyoon » — comme « Tuesday » sans le « sday ». Le « u » après « t » se prononce « yoo ». Ne dites pas « toon » comme « cartoon ».' },
  ],
}

// ─── c1-l48: Market Analysis ────────────────────────────────────────────────────
export const C1_L48: LessonContent = {
  vocab: [
    { english: 'bull market', french: 'marché haussier', phonetic: '/bʊl ˈmɑːrkɪt/', example: 'The longest bull market in history lasted over a decade before the correction.', exampleTranslation: 'Le plus long marché haussier de l\'histoire a duré plus d\'une décennie avant la correction.' },
    { english: 'correction', french: 'correction (boursière)', phonetic: '/kəˈrekʃn/', example: 'A 10% correction in the index triggered panic selling among retail investors.', exampleTranslation: 'Une correction de 10 % de l\'indice a déclenché des ventes de panique parmi les investisseurs particuliers.' },
    { english: 'volatility', french: 'volatilité', phonetic: '/ˌvɒləˈtɪləti/', example: 'Implied volatility on the VIX index spiked to levels not seen since the financial crisis.', exampleTranslation: 'La volatilité implicite sur l\'indice VIX a bondi à des niveaux inédits depuis la crise financière.' },
    { english: 'liquidity', french: 'liquidité', phonetic: '/lɪˈkwɪdəti/', example: 'Central banks injected massive liquidity to prevent a credit freeze.', exampleTranslation: 'Les banques centrales ont injecté des liquidités massives pour éviter un gel du crédit.' },
    { english: 'short selling', french: 'vente à découvert', phonetic: '/ʃɔːrt ˈselɪŋ/', example: 'Regulators temporarily banned short selling on financial stocks to stabilise the market.', exampleTranslation: 'Les régulateurs ont temporairement interdit la vente à découvert sur les actions financières pour stabiliser le marché.' },
  ],
  grammar: {
    title: 'L\'analyse de marché : langage technique pour décrire les mouvements financiers',
    explanation: 'L\'analyse financière utilise un vocabulaire technique précis pour décrire les mouvements de marché : (1) « Bull market » ≠ « bear market » : un marché haussier (bull = taureau qui charge vers le haut) implique une hausse soutenue de 20% ou plus ; un marché baissier (bear = ours qui attaque vers le bas) implique une baisse de 20% ou plus. (2) « Correction » en finance = baisse de 10% à 19,9% — ce n\'est PAS « correction » au sens courant. C\'est un terme technique positif dans certains contextes : « a healthy correction ». (3) « Volatility » ≠ « risk » : la volatilité mesure l\'amplitude des fluctuations, pas le risque de perte. Un actif peut être volatile mais rentable. (4) « Liquidity » est indénombrable : on ne dit PAS « liquidities ». On parle de « market liquidity » ou « liquidity conditions ». (5) « Short selling » prend un tiret quand c\'est un nom : « short-selling was banned » ; sans tiret comme verbe : « they shorted the stock ».',
    examples: [
      { sentence: 'The bull market, which had delivered annualised returns in excess of 15%, finally gave way to a sharp correction in Q3.', translation: 'Le marché haussier, qui avait offert des rendements annualisés supérieurs à 15 %, a finalement cédé la place à une correction brutale au T3.', isCorrect: true },
      { sentence: 'Heightened volatility in emerging market currencies has reduced liquidity across the sector.', translation: 'La volatilité accrue des devises des marchés émergents a réduit la liquidité dans tout le secteur.', isCorrect: true },
      { sentence: 'The market liquidities dried up during the panic.', translation: '', isCorrect: false },
      { sentence: 'Short selling was restricted after the index plunged more than 8% in a single session.', translation: 'La vente à découvert a été restreinte après que l\'indice a plongé de plus de 8 % en une seule séance.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The market liquidities dried up during the panic.', correct: 'Market liquidity dried up during the panic.', explanation: '« Liquidity » est indénombrable en anglais financier. On ne dit JAMAIS « liquidities ». On dit « market liquidity », « liquidity conditions », « a liquidity crunch ». Le pluriel n\'existe pas dans ce contexte.' },
      { wrong: 'The market is bear so we should buy.', correct: 'It\'s a bear market, so we should adopt a defensive strategy.', explanation: 'On ne dit pas « the market is bear ». On dit « it\'s a bear market » ou « the market is bearish ». « Bear » est un nom, pas un adjectif. L\'adjectif est « bearish » (baissier). De même : « bullish » = haussier.' },
    ],
  },
  conversation: [
    { speaker: 'Chief Strategist Larsen', role: 'A', text: 'The S&P has entered correction territory. We\'re seeing a 12% decline from the October high, driven primarily by elevated volatility in the tech sector.', translation: 'Le S&P est entré en territoire de correction. Nous constatons un déclin de 12 % par rapport au sommet d\'octobre, principalement motivé par une volatilité élevée dans le secteur technologique.' },
    { speaker: 'Market Analyst Dubois', role: 'B', text: 'Do you see this as a healthy correction within a broader bull market, or the beginning of a bear market?', translation: 'Considérez-vous cela comme une correction saine dans un marché haussier plus large, ou le début d\'un marché baissier ?' },
    { speaker: 'Chief Strategist Larsen', role: 'A', text: 'The fundamentals remain solid. However, liquidity is thinning — widening bid-ask spreads suggest market makers are pulling back.', translation: 'Les fondamentaux restent solides. Cependant, la liquidité s\'amincit — l\'élargissement des écarts cours acheteur-vendeur suggère que les teneurs de marché se retirent.' },
    { speaker: 'Market Analyst Dubois', role: 'B', text: 'I\'ve noticed significant short selling pressure on the financials. Could that amplify the downturn?', translation: 'J\'ai constaté une pression de vente à découvert significative sur les valeurs financières. Cela pourrait-il amplifier la baisse ?' },
    { speaker: 'Chief Strategist Larsen', role: 'A', text: 'Potentially. If short sellers target the banks, we could see a feedback loop — falling prices triggering margin calls, which drive prices down further.', translation: 'Potentiellement. Si les vendeurs à découvert ciblent les banques, nous pourrions voir une boucle de rétroaction — les prix baissiers déclenchant des appels de marge, qui font encore baisser les prix.' },
    { speaker: 'Market Analyst Dubois', role: 'B', text: 'Then I\'d recommend increasing our cash position and hedging the equity exposure with put options on the financials index.', translation: 'Dans ce cas, je recommanderais d\'augmenter notre position en liquidités et de couvrir l\'exposition aux actions avec des options de vente sur l\'indice financier.' },
  ],
  conversationTitle: 'Analyse de marché : correction, volatilité et stratégie défensive',
  pronunciation: [
    { word: 'Bull', phonetic: '/bʊl/', meaning: 'Taureau (haussier)', tip: 'Prononcez « boul » — le « u » est court comme dans « put » ou « book ». Ne dites pas « bioul » avec un « u » long. C\'est un mot court et percutant.' },
    { word: 'Volatility', phonetic: '/ˌvɒləˈtɪləti/', meaning: 'Volatilité', tip: 'L\'accent est sur « TIL » : « vo-luh-TIL-uh-ti ». C\'est un mot de 5 syllabes — ne l\'avalez pas. Le « a » de la première syllabe est un « o » ouvert comme dans « hot ».' },
    { word: 'Liquidity', phonetic: '/lɪˈkwɪdəti/', meaning: 'Liquidité', tip: 'L\'accent est sur « KWID » : « lih-KWID-uh-ti ». Le premier « i » est court. La syllabe « quid » rime avec « did ». Ne dites pas « li-kee-di-ti ».' },
    { word: 'Correction', phonetic: '/kəˈrekʃn/', meaning: 'Correction (boursière)', tip: 'L\'accent est sur « REC » : « kuh-REK-shun ». Le « co » initial est réduit en schwa. La terminaison « -tion » = « shun » comme toujours en anglais.' },
  ],
}

// ─── c1-l49: Investment Discussion ───────────────────────────────────────────────
export const C1_L49: LessonContent = {
  vocab: [
    { english: 'barring', french: 'sauf / à moins que', phonetic: '/ˈbɑːrɪŋ/', example: 'Barring a major geopolitical event, the Fed is expected to hold rates steady.', exampleTranslation: 'Sauf événement géopolitique majeur, la Réserve fédérale devrait maintenir ses taux.' },
    { english: 'assuming', french: 'en supposant que', phonetic: '/əˈsjuːmɪŋ/', example: 'Assuming the merger goes through, earnings per share should increase by 18%.', exampleTranslation: 'En supposant que la fusion aboutisse, le bénéfice par action devrait augmenter de 18 %.' },
    { english: 'provided that', french: 'à condition que / pourvu que', phonetic: '/prəˈvaɪdɪd ðæt/', example: 'The loan will be approved provided that the collateral meets our requirements.', exampleTranslation: 'Le prêt sera approuvé à condition que la garantie réponde à nos exigences.' },
    { english: 'in the event that', french: 'dans le cas où / dans l\'éventualité où', phonetic: '/ɪn ðɪ ɪˈvent ðæt/', example: 'In the event that the counterparty defaults, the collateral will be liquidated.', exampleTranslation: 'Dans le cas où la contrepartie ferait défaut, la garantie sera liquidée.' },
    { english: 'contingent upon', french: 'conditionné par / subordonné à', phonetic: '/kənˈtɪndʒənt əˈpɒn/', example: 'The deal is contingent upon regulatory approval from the European Commission.', exampleTranslation: 'L\'opération est conditionnée par l\'approbation réglementaire de la Commission européenne.' },
  ],
  grammar: {
    title: 'Le langage conditionnel de l\'investissement : hypothèses, conditions et gestion du risque',
    explanation: 'Le discours financier abonde en structures conditionnelles qui permettent d\'exprimer des scénarios, des conditions préalables et des hypothèses de risque : (1) « Barring » + nom = sauf, à moins que — introduit la seule exception possible : « Barring a recession, profits will rise » = les bénéfices augmenteront SAUF en cas de récession. C\'est un participe présent employé comme préposition, très courant en finance. (2) « Assuming » + clause = en supposant que — pose une hypothèse de travail : « Assuming rates remain low... ». La clause suivie utilise l\'indicatif (pas le subjonctif français). (3) « Provided that » + clause = à condition que — exprime une condition stricte et nécessaire. Plus formel et contraignant que « if ». Variante : « providing that ». (4) « In the event that » + clause = dans le cas où — formel, utilisé pour les scénarios de risque : « In the event that the borrower defaults... ». Peut être suivi du présent ou du futur. (5) « Contingent upon » + nom = conditionné par — extrêmement formel, fréquent dans les contrats et les offres d\'investissement : « The investment is contingent upon due diligence ». Note : « upon » est plus formel que « on » mais les deux sont corrects. (6) ATTENTION : ces structures utilisent l\'INDICATIF en anglais, jamais le subjonctif. On dit « provided that the market recovers » (indicatif), pas « provided that the market recover » (subjonctif).',
    examples: [
      { sentence: 'Barring unforeseen regulatory intervention, the acquisition should close by the end of Q2.', translation: 'Sauf intervention réglementaire imprévue, l\'acquisition devrait être finalisée d\'ici la fin du T2.', isCorrect: true },
      { sentence: 'Assuming the central bank cuts rates by 50 basis points, bond prices will rally significantly.', translation: 'En supposant que la banque centrale baisse ses taux de 50 points de base, les prix des obligations rebondiront significativement.', isCorrect: true },
      { sentence: 'Provided that the market recover by year-end, the fund will meet its target.', translation: '', isCorrect: false },
      { sentence: 'In the event that the counterparty defaults, the credit default swap will be triggered automatically.', translation: 'Dans le cas où la contrepartie ferait défaut, le swap de défaut de crédit sera déclenché automatiquement.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Provided that the market recover by year-end, the fund will meet its target.', correct: 'Provided that the market recovers by year-end, the fund will meet its target.', explanation: 'Après « provided that », on utilise l\'INDICATIF en anglais, pas le subjonctif. Contrairement au français (« à condition que le marché se rétablisse » = subjonctif), l\'anglais exige l\'indicatif : « recovers » avec le « s » de la 3e personne du singulier.' },
      { wrong: 'The investment is contingent on that the board approves the deal.', correct: 'The investment is contingent upon the board\'s approval of the deal.', explanation: '« Contingent upon » est suivi d\'un GROUPE NOMINAL, pas d\'une clause « that ». On dit « contingent upon regulatory approval » ou « contingent upon the board\'s approval », mais PAS « contingent upon that the board approves ».' },
    ],
  },
  conversation: [
    { speaker: 'Investment Director Clarke', role: 'A', text: 'Let\'s review the proposed acquisition of Meridian Technologies. Barring any last-minute complications, we\'re looking at a £4.2 billion deal.', translation: 'Passons en revue l\'acquisition proposée de Meridian Technologies. Sauf complication de dernière minute, nous envisageons une opération de 4,2 milliards de livres.' },
    { speaker: 'Risk Officer Nguyen', role: 'B', text: 'Assuming the synergies materialise as projected, what\'s the expected internal rate of return?', translation: 'En supposant que les synergies se matérialisent comme prévu, quel est le taux de rendement interne attendu ?' },
    { speaker: 'Investment Director Clarke', role: 'A', text: 'We\'re modelling an IRR of 22%, provided that the integration is completed within 18 months and cost savings reach upwards of £300 million.', translation: 'Nous modélisons un TRI de 22 %, à condition que l\'intégration soit achevée en 18 mois et que les économies atteignent plus de 300 millions de livres.' },
    { speaker: 'Risk Officer Nguyen', role: 'B', text: 'And in the event that the integration encounters delays? What\'s our downside scenario?', translation: 'Et dans le cas où l\'intégration rencontrerait des retards ? Quel est notre scénario de baisse ?' },
    { speaker: 'Investment Director Clarke', role: 'A', text: 'In the event that integration drags beyond 24 months, the IRR drops to roughly 9% — still above our cost of capital, but barely.', translation: 'Dans le cas où l\'intégration s\'étire au-delà de 24 mois, le TRI chute à environ 9 % — toujours au-dessus de notre coût du capital, mais de justesse.' },
    { speaker: 'Risk Officer Nguyen', role: 'B', text: 'Then I\'d insist the deal be contingent upon a break clause if key milestones aren\'t met within the first year. That limits our exposure.', translation: 'Dans ce cas, j\'insiterais pour que l\'opération soit conditionnée par une clause de résolution si les étapes clés ne sont pas atteintes dans la première année. Cela limite notre exposition.' },
  ],
  conversationTitle: 'Discussion d\'investissement : conditions, scénarios et gestion du risque',
  pronunciation: [
    { word: 'Barring', phonetic: '/ˈbɑːrɪŋ/', meaning: 'Sauf / à moins que', tip: 'Prononcez « BAR-ring » — l\'accent est sur « BAR ». Le « a » est long et ouvert comme dans « father ». Ne dites pas « bé-ring » à la française.' },
    { word: 'Assuming', phonetic: '/əˈsjuːmɪŋ/', meaning: 'En supposant', tip: 'L\'accent est sur « SYU » : « uh-SYOO-ming ». Le « a » initial est réduit en schwa. Le « ssu » se prononce « syoo » comme dans « assume ». Ne dites pas « a-soo-ming ».' },
    { word: 'Contingent', phonetic: '/kənˈtɪndʒənt/', meaning: 'Conditionné / subordonné', tip: 'L\'accent est sur « TIN » : « kun-TIN-junt ». Le « con » initial est réduit en schwa. Le « -gent » final = « junt » comme dans « agent ». Ne dites pas « kon-tee-zhon ».' },
    { word: 'Provided', phonetic: '/prəˈvaɪdɪd/', meaning: 'À condition que', tip: 'L\'accent est sur « VID » : « pruh-VY-did ». Le « pro » est réduit en schwa. Le « -ed » se prononce « id » car la base « provide » se termine par « d ». Ne dites pas « pro-vy-ded ».' },
  ],
}

// ─── c1-l50: Finance Sounds ──────────────────────────────────────────────────────
export const C1_L50: LessonContent = {
  vocab: [
    { english: 'equity', french: 'capitaux propres / actions', phonetic: '/ˈekwəti/', example: 'The firm raised £200 million in equity to fund the expansion.', exampleTranslation: 'L\'entreprise a levé 200 millions de livres en fonds propres pour financer son expansion.' },
    { english: 'fiscal', french: 'fiscal / budgétaire', phonetic: '/ˈfɪskl/', example: 'The government\'s fiscal deficit widened to 6% of GDP.', exampleTranslation: 'Le déficit budgétaire du gouvernement s\'est creusé pour atteindre 6 % du PIB.' },
    { english: 'receivable', french: 'créance (comptable)', phonetic: '/rɪˈsiːvəbl/', example: 'Accounts receivable increased by 15% due to extended payment terms.', exampleTranslation: 'Les créances clients ont augmenté de 15 % en raison de conditions de paiement prolongées.' },
    { english: 'dividend', french: 'dividende', phonetic: '/ˈdɪvɪdend/', example: 'The board approved a quarterly dividend of $0.85 per share.', exampleTranslation: 'Le conseil a approuvé un dividende trimestriel de 0,85 $ par action.' },
    { english: 'leverage', french: 'levier / effet de levier', phonetic: '/ˈlevərɪdʒ/', example: 'High leverage magnifies both gains and losses in volatile markets.', exampleTranslation: 'Un levier élevé amplifie tant les gains que les pertes dans les marchés volatils.' },
  ],
  grammar: {
    title: 'La prononciation financière : pièges phonologiques pour les francophones',
    explanation: 'Les termes financiers anglais regorgent de pièges de prononciation pour les francophones : (1) « Equity » : /ˈekwəti/ — le « qu » se prononce « kw » comme dans « queen », PAS « k » seul. On ne dit PAS « é-ki-ti » mais « EK-wuh-ti ». L\'accent est sur « EK ». (2) « Fiscal » : /ˈfɪskl/ — le « a » final est à peine prononcé, c\'est une syllabe réduite. On dit « FIS-k\'l », pas « fis-KAL » à la française. (3) « Receivable » : /rɪˈsiːvəbl/ — l\'accent est sur « SEE », pas sur « re ». Ne dites pas « ré-SEE-vuh-bl » mais « ruh-SEE-vuh-bl ». (4) « Dividend » : /ˈdɪvɪdend/ — l\'accent est sur « DI » (première syllabe), pas sur « vid » ou « dend ». On dit « DI-vi-dend », pas « di-VI-dend » à la française. (5) « Leverage » : /ˈlevərɪdʒ/ — le « -age » se prononce « uh-rij » (deux syllabes), PAS « aje » à la française. On dit « LEV-er-ij », pas « le-vé-raj ». (6) Règle générale : en anglais financier, l\'accent tonique tombe presque toujours sur la PREMIÈRE ou l\'AVANT-DERNIÈRE syllabe, jamais comme en français où il est souvent sur la dernière.',
    examples: [
      { sentence: 'Return on equity improved from 12% to 18% following the cost-cutting measures.', translation: 'Le rendement des capitaux propres s\'est amélioré de 12 % à 18 % suite aux mesures de réduction des coûts.', isCorrect: true },
      { sentence: 'The fiscal year ended with a surplus for the first time in a decade.', translation: 'L\'exercice budgétaire s\'est terminé avec un excédent pour la première fois en une décennie.', isCorrect: true },
      { sentence: 'The dividend were cut in half to preserve cash during the downturn.', translation: '', isCorrect: false },
      { sentence: 'Accounts receivable must be reconciled before the quarterly close.', translation: 'Les créances clients doivent être rapprochées avant la clôture trimestrielle.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The dividend were cut in half to preserve cash during the downturn.', correct: 'The dividend was cut in half to preserve cash during the downturn.', explanation: '« Dividend » est un nom singulier — il prend « was », pas « were ». Même si une entreprise verse plusieurs dividendes au fil du temps, chaque dividende est singulier : « the quarterly dividend was... ». Pour le pluriel : « dividends were cut ».' },
      { wrong: 'The company has a high leveraj.', correct: 'The company has high leverage.', explanation: '« Leverage » se prononce /ˈlevərɪdʒ/ = « LEV-er-ij », pas « le-vé-raj » à la française. Le suffixe « -age » en anglais ne se prononce JAMAIS comme le suffixe français « -age ». En anglais, c\'est « -ij » (comme dans « image »).' },
    ],
  },
  conversation: [
    { speaker: 'CFO Richardson', role: 'A', text: 'Our return on equity has dipped below the industry average. We need to address the capital structure — the leverage ratio is simply too conservative.', translation: 'Notre rendement des capitaux propres est tombé sous la moyenne du secteur. Nous devons examiner la structure du capital — le ratio de levier est tout simplement trop conservateur.' },
    { speaker: 'Financial Controller Beaumont', role: 'B', text: 'I\'d urge caution. Increasing leverage may boost equity returns, but it also raises our cost of debt and fiscal obligations.', translation: 'J\'inciterais à la prudence. Augmenter le levier peut stimuler le rendement des capitaux propres, mais cela augmente aussi notre coût de la dette et nos obligations fiscales.' },
    { speaker: 'CFO Richardson', role: 'A', text: 'Noted. What if we issue a special dividend to return excess cash to shareholders? That would reduce equity and improve ROE without adding debt.', translation: 'Noté. Et si nous versons un dividende exceptionnel pour rendre l\'excédent de trésorerie aux actionnaires ? Cela réduirait les capitaux propres et améliorerait le ROE sans ajouter de dette.' },
    { speaker: 'Financial Controller Beaumont', role: 'B', text: 'That\'s viable, provided that accounts receivable remain stable. If clients start delaying payments, our working capital would be squeezed.', translation: 'C\'est viable, à condition que les créances clients restent stables. Si les clients commencent à retarder les paiements, notre fonds de roulement serait comprimé.' },
    { speaker: 'CFO Richardson', role: 'A', text: 'Agreed. Let\'s tighten our receivable collection policy first. In the event that cash flow remains robust through Q2, we\'ll proceed with the special dividend.', translation: 'D\'accord. Serrons d\'abord notre politique de recouvrement des créances. Dans le cas où les flux de trésorerie restent solides au T2, nous procéderons au dividende exceptionnel.' },
    { speaker: 'Financial Controller Beaumont', role: 'B', text: 'I\'ll prepare the fiscal impact analysis and present it at the board meeting. Assuming regulatory clearance, we could announce the dividend by May.', translation: 'Je préparerai l\'analyse de l\'impact fiscal et la présenterai à la réunion du conseil. En supposant l\'autorisation réglementaire, nous pourrions annoncer le dividende d\'ici mai.' },
  ],
  conversationTitle: 'Discussion financière : levier, dividendes et structure du capital',
  pronunciation: [
    { word: 'Equity', phonetic: '/ˈekwəti/', meaning: 'Capitaux propres / actions', tip: 'Prononcez « EK-wuh-ti » — le « qu » = « kw » comme dans « queen ». L\'accent est sur « EK ». Ne dites JAMAIS « é-ki-ti » : il n\'y a pas de son « k » seul.' },
    { word: 'Fiscal', phonetic: '/ˈfɪskl/', meaning: 'Fiscal / budgétaire', tip: 'Prononcez « FIS-k\'l » — la dernière syllabe est quasi absorbée. L\'accent est sur « FIS ». Ne dites PAS « fis-KAL » à la française. Le « al » est réduit à un schwa.' },
    { word: 'Dividend', phonetic: '/ˈdɪvɪdend/', meaning: 'Dividende', tip: 'L\'accent est sur « DI » : « DI-vi-dend ». C\'est la première syllabe qui porte l\'accent, pas la dernière comme en français « di-vi-DENDE ». Les trois syllabes sont clairement prononcées.' },
    { word: 'Leverage', phonetic: '/ˈlevərɪdʒ/', meaning: 'Effet de levier', tip: 'Prononcez « LEV-er-ij » — l\'accent est sur « LEV ». Le suffixe « -age » = « ij » comme dans « image ». Ne dites PAS « le-vé-raj » à la française. C\'est l\'erreur la plus courante des francophones.' },
  ],
}
