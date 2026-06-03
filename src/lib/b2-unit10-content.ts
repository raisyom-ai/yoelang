import type { LessonContent } from './lesson-content'

// ============================================================
// B2 Unit 10: Global Economy (Lessons b2-l46 to b2-l50)
// ============================================================

// ---------- b2-l46: Economic Vocabulary ----------
export const B2_L46: LessonContent = {
  vocab: [
    {
      english: 'inflation',
      french: 'inflation',
      phonetic: '/ɪnˈfleɪʃən/',
      example: 'Inflation has risen to 6%, putting pressure on household budgets.',
      exampleTranslation: "L'inflation a atteint 6 %, ce qui met la pression sur les budgets des ménages.",
    },
    {
      english: 'GDP (Gross Domestic Product)',
      french: 'PIB (Produit intérieur brut)',
      phonetic: '/ˌdʒiː diː ˈpiː/',
      example: "The country's GDP grew by 3.2% last quarter, exceeding forecasts.",
      exampleTranslation: "Le PIB du pays a augmenté de 3,2 % le trimestre dernier, dépassant les prévisions.",
    },
    {
      english: 'trade deficit',
      french: 'déficit commercial',
      phonetic: '/treɪd ˈdefɪsɪt/',
      example: 'The trade deficit widened as imports outpaced exports.',
      exampleTranslation: "Le déficit commercial s'est creusé alors que les importations ont dépassé les exportations.",
    },
    {
      english: 'recession',
      french: 'récession',
      phonetic: '/rɪˈseʃən/',
      example: 'Many economists fear the economy is heading into a recession.',
      exampleTranslation: "Beaucoup d'économistes craignent que l'économie ne s'oriente vers une récession.",
    },
    {
      english: 'monetary policy',
      french: 'politique monétaire',
      phonetic: '/ˈmʌnɪtəri ˈpɒləsi/',
      example: 'The central bank adjusted its monetary policy to curb rising prices.',
      exampleTranslation: "La banque centrale a ajusté sa politique monétaire pour freiner la hausse des prix.",
    },
  ],
  grammar: {
    title: "Les noms composés dans le vocabulaire économique",
    explanation:
      "En anglais économique, beaucoup de termes sont des noms composés (compound nouns). Le premier nom fonctionne comme un adjectif et modifie le second. Attention : le premier nom est toujours au singulier, même si le sens est pluriel. Par exemple, on dit 'trade deficit' et non 'trades deficit'. De plus, l'ordre des mots est fixe : le modificateur précède toujours le nom principal.",
    examples: [
      {
        sentence: 'The trade deficit reached a record high.',
        translation: 'Le déficit commercial a atteint un record.',
        isCorrect: true,
      },
      {
        sentence: 'The trades deficit reached a record high.',
        translation: '',
        isCorrect: false,
      },
      {
        sentence: 'Monetary policy affects interest rates across the economy.',
        translation: 'La politique monétaire influence les taux d\'intérêt dans toute l\'économie.',
        isCorrect: true,
      },
      {
        sentence: 'Economic growth slowed down in the third quarter.',
        translation: 'La croissance économique a ralenti au troisième trimestre.',
        isCorrect: true,
      },
      {
        sentence: 'Economy growth slowed down in the third quarter.',
        translation: '',
        isCorrect: false,
      },
    ],
    commonMistakes: [
      {
        wrong: 'trades deficit',
        correct: 'trade deficit',
        explanation:
          "Dans un nom composé, le premier élément reste au singulier même s'il a un sens pluriel. 'Trade' modifie 'deficit' et fonctionne comme adjectif.",
      },
      {
        wrong: 'economy growth',
        correct: 'economic growth',
        explanation:
          "Quand on veut l'adjectif, il faut utiliser 'economic' et non le nom 'economy'. 'Economic growth' = croissance économique ; 'economy' est le nom seul.",
      },
    ],
  },
  conversation: [
    {
      speaker: 'Amara',
      role: 'A',
      text: 'Did you see the latest GDP figures? Growth has slowed significantly.',
      translation: 'As-tu vu les derniers chiffres du PIB ? La croissance a nettement ralenti.',
    },
    {
      speaker: 'Kenji',
      role: 'B',
      text: 'Yes, and the trade deficit keeps widening. Imports are far outpacing exports.',
      translation: 'Oui, et le déficit commercial continue de se creuser. Les importations dépassent largement les exportations.',
    },
    {
      speaker: 'Amara',
      role: 'A',
      text: 'The central bank is expected to revise its monetary policy next month.',
      translation: 'On s\'attend à ce que la banque centrale révise sa politique monétaire le mois prochain.',
    },
    {
      speaker: 'Kenji',
      role: 'B',
      text: 'Raising interest rates could help control inflation, but it might also trigger a recession.',
      translation: 'Augmenter les taux d\'intérêt pourrait aider à contrôler l\'inflation, mais cela pourrait aussi déclencher une récession.',
    },
    {
      speaker: 'Amara',
      role: 'A',
      text: "That's the dilemma. Policymakers have to balance price stability and employment.",
      translation: "C'est le dilemme. Les décideurs doivent équilibrer la stabilité des prix et l'emploi.",
    },
    {
      speaker: 'Kenji',
      role: 'B',
      text: 'Indeed. Let\'s hope the new measures are enough to steer us away from a downturn.',
      translation: "En effet. Espérons que les nouvelles mesures suffiront à nous éloigner d'un ralentissement.",
    },
  ],
  conversationTitle: 'Discussing Economic Indicators',
  pronunciation: [
    {
      word: 'recession',
      phonetic: '/rɪˈseʃən/',
      meaning: 'récession',
      tip: "Attention à la première syllabe : c'est /rɪ/ comme dans 'rich', pas /riː/ comme dans 'reach'. Les francophones ont tendance à allonger la voyelle.",
    },
    {
      word: 'deficit',
      phonetic: '/ˈdefɪsɪt/',
      meaning: 'déficit',
      tip: "L'accent est sur la PREMIÈRE syllabe : 'DEF-i-cit'. Les francophones placent souvent l'accent sur la dernière syllabe à la française.",
    },
    {
      word: 'monetary',
      phonetic: '/ˈmʌnɪtəri/',
      meaning: 'monétaire',
      tip: "La première syllabe se prononce /mʌ/ comme dans 'money', pas /mɔ̃/ à la française. Le 't' du milieu est une consonne flap en anglais américain : /ɾ/.",
    },
    {
      word: 'inflation',
      phonetic: '/ɪnˈfleɪʃən/',
      meaning: 'inflation',
      tip: "Le 'fl' doit être prononcé clairement. Les francophones ont tendance à adoucir le /fl/ en /fl/ trop léger. Assurez-vous que le /eɪ/ de la deuxième syllabe est une diphtongue claire.",
    },
  ],
}

// ---------- b2-l47: Inversion ----------
export const B2_L47: LessonContent = {
  vocab: [
    {
      english: 'seldom',
      french: 'rarement',
      phonetic: '/ˈseldəm/',
      example: 'Seldom has the market seen such volatility.',
      exampleTranslation: 'Le marché a rarement connu une telle volatilité.',
    },
    {
      english: 'under no circumstances',
      french: 'en aucun cas',
      phonetic: '/ˈʌndə nəʊ ˈsɜːkəmstənsɪz/',
      example: 'Under no circumstances should the government default on its debt.',
      exampleTranslation: 'En aucun cas le gouvernement ne devrait faire défaut sur sa dette.',
    },
    {
      english: 'not only',
      french: 'non seulement',
      phonetic: '/nɒt ˈəʊnli/',
      example: 'Not only did inflation rise, but unemployment also surged.',
      exampleTranslation: "Non seulement l'inflation a augmenté, mais le chômage a aussi explosé.",
    },
    {
      english: 'barely',
      french: 'à peine',
      phonetic: '/ˈbeəli/',
      example: 'Barely had the recovery begun when another crisis hit.',
      exampleTranslation: 'La reprise avait à peine commencé qu\'une autre crise a frappé.',
    },
    {
      english: 'only then',
      french: 'seulement alors',
      phonetic: '/ˈəʊnli ðen/',
      example: 'Only then did the regulators intervene in the market.',
      exampleTranslation: 'C\'est seulement alors que les régulateurs sont intervenus sur le marché.',
    },
  ],
  grammar: {
    title: "L'inversion du sujet pour l'insistance",
    explanation:
      "En anglais, quand on place certains adverbes ou expressions négatifs/restrictifs en début de phrase, le sujet et l'auxiliaire s'inversent, comme dans une question. Cela crée un effet d'insistance très courant à l'écrit formel et dans le discours économique. Les expressions courantes qui déclenchent l'inversion sont : seldom, rarely, barely, hardly, not only, never, under no circumstances, only then, only when, no sooner. Structure : [Adverbe/Expression] + [Auxiliaire] + [Sujet] + [Verbe principal].",
    examples: [
      {
        sentence: 'Never before has the economy faced such a challenge.',
        translation: "L'économie n'a jamais fait face à un tel défi auparavant.",
        isCorrect: true,
      },
      {
        sentence: 'Never before the economy has faced such a challenge.',
        translation: '',
        isCorrect: false,
      },
      {
        sentence: 'Not only did prices fall, but demand also collapsed.',
        translation: 'Non seulement les prix ont chuté, mais la demande s\'est aussi effondrée.',
        isCorrect: true,
      },
      {
        sentence: 'Hardly had the policy been announced when markets reacted.',
        translation: 'La politique avait à peine été annoncée que les marchés ont réagi.',
        isCorrect: true,
      },
      {
        sentence: 'Hardly the policy had been announced when markets reacted.',
        translation: '',
        isCorrect: false,
      },
    ],
    commonMistakes: [
      {
        wrong: 'Seldom the central bank has lowered rates so sharply.',
        correct: 'Seldom has the central bank lowered rates so sharply.',
        explanation:
          "Après un adverbe restrictif en début de phrase, il FAUT inverser le sujet et l'auxiliaire. Sans auxiliaire existant, on ajoute 'does/did/has' selon le temps.",
      },
      {
        wrong: 'Not only inflation rose, but unemployment increased too.',
        correct: 'Not only did inflation rise, but unemployment increased too.',
        explanation:
          "Au passé simple sans auxiliaire, il faut ajouter 'did' pour l'inversion : 'Not only did inflation rise'. On ne peut pas simplement inverser le sujet et le verbe principal.",
      },
    ],
  },
  conversation: [
    {
      speaker: 'Fatima',
      role: 'A',
      text: 'Rarely have we seen such a sharp downturn in emerging markets.',
      translation: 'Nous avons rarement vu un tel déclin sur les marchés émergents.',
    },
    {
      speaker: 'Lars',
      role: 'B',
      text: 'Indeed. Not only did currencies depreciate, but foreign investment also dried up.',
      translation: "En effet. Non seulement les devises se sont dépréciées, mais l'investissement étranger s'est aussi tari.",
    },
    {
      speaker: 'Fatima',
      role: 'A',
      text: 'Under no circumstances should we underestimate the impact on global supply chains.',
      translation: "En aucun cas nous ne devrions sous-estimer l'impact sur les chaînes d'approvisionnement mondiales.",
    },
    {
      speaker: 'Lars',
      role: 'B',
      text: 'Agreed. Barely had exports recovered from the pandemic when the new tariffs hit.',
      translation: 'D\'accord. Les exportations venaient à peine de se remettre de la pandémie que les nouvelles taxes douanières ont frappé.',
    },
    {
      speaker: 'Fatima',
      role: 'A',
      text: 'Only when governments coordinate their response can stability be restored.',
      translation: "C'est seulement quand les gouvernements coordonneront leur réponse que la stabilité pourra être rétablie.",
    },
    {
      speaker: 'Lars',
      role: 'B',
      text: 'Let\'s hope so. Seldom is international cooperation more critical than in times like these.',
      translation: "Espérons-le. La coopération internationale est rarement plus cruciale qu'en des temps comme ceux-ci.",
    },
  ],
  conversationTitle: 'Analysing a Market Downturn',
  pronunciation: [
    {
      word: 'seldom',
      phonetic: '/ˈseldəm/',
      meaning: 'rarement',
      tip: "Le 'o' se prononce /ə/ (schwa), pas /ɒ/ ou /oʊ/. Ne dites pas 'sel-dome' mais 'sel-dəm'. La deuxième syllabe est très douce et brève.",
    },
    {
      word: 'barely',
      phonetic: '/ˈbeəli/',
      meaning: 'à peine',
      tip: "La diphtongue /eə/ comme dans 'bear' ou 'care'. Les francophones prononcent souvent /baːli/ avec un 'a' français. Pensez plutôt à 'bair-lee'.",
    },
    {
      word: 'circumstances',
      phonetic: '/ˈsɜːkəmstənsɪz/',
      meaning: 'circonstances',
      tip: "Le premier 'c' se prononce /s/, le deuxième /k/. Attention : /sɜː/ comme dans 'sir', pas /sir/ à la française. L'accent est sur la première syllabe.",
    },
    {
      word: 'volatility',
      phonetic: '/ˌvɒləˈtɪləti/',
      meaning: 'volatilité',
      tip: "Quatre syllabes : vol-a-TIL-i-ty. L'accent principal est sur la TROISIÈME syllabe. Les francophones ont tendance à accentuer la dernière syllabe à la façon française.",
    },
  ],
}

// ---------- b2-l48: Economic Debate ----------
export const B2_L48: LessonContent = {
  vocab: [
    {
      english: 'deregulation',
      french: 'déréglementation',
      phonetic: '/diːˌreɡjuˈleɪʃən/',
      example: 'Deregulation of the banking sector led to increased competition.',
      exampleTranslation: "La déréglementation du secteur bancaire a conduit à une concurrence accrue.",
    },
    {
      english: 'subsidy',
      french: 'subvention',
      phonetic: '/ˈsʌbsɪdi/',
      example: 'The government introduced a subsidy for renewable energy projects.',
      exampleTranslation: "Le gouvernement a introduit une subvention pour les projets d'énergie renouvelable.",
    },
    {
      english: 'protectionism',
      french: 'protectionnisme',
      phonetic: '/prəˈtekʃənɪzəm/',
      example: 'Protectionism may shield domestic industries, but it often raises consumer prices.',
      exampleTranslation: "Le protectionnisme peut protéger les industries nationales, mais il augmente souvent les prix pour les consommateurs.",
    },
    {
      english: 'stimulus package',
      french: "plan de relance",
      phonetic: '/ˈstɪmjələs ˈpækɪdʒ/',
      example: 'Congress approved a $2 trillion stimulus package to revive the economy.',
      exampleTranslation: "Le Congrès a approuvé un plan de relance de 2 000 milliards de dollars pour relancer l'économie.",
    },
    {
      english: 'austerity measures',
      french: "mesures d'austérité",
      phonetic: '/ɒˈsterəti ˈmeʒərz/',
      example: 'Austerity measures were deeply unpopular but deemed necessary by the finance ministry.',
      exampleTranslation: "Les mesures d'austérité étaient très impopulaires mais jugées nécessaires par le ministère des Finances.",
    },
  ],
  grammar: {
    title: "Exprimer l'opposition et la concession dans un débat économique",
    explanation:
      "Pour débattre de politique économique à un niveau B2, il est essentiel de maîtriser les structures d'opposition et de concession. 'Although' + clause exprime la concession (bien que), 'whereas' et 'while' expriment le contraste (tandis que), 'despite' + nom/gérondif exprime l'opposition (malgré). Attention : 'despite' ne prend PAS 'of' — c'est une erreur très courante chez les francophones (calque de 'malgré' / 'in spite of'). On peut aussi utiliser 'However,' et 'Nevertheless,' en début de phrase pour introduire une opposition.",
    examples: [
      {
        sentence: 'Although deregulation boosts competition, it can also increase risk.',
        translation: "Bien que la déréglementation stimule la concurrence, elle peut aussi augmenter les risques.",
        isCorrect: true,
      },
      {
        sentence: 'Despite of the stimulus package, unemployment remained high.',
        translation: '',
        isCorrect: false,
      },
      {
        sentence: 'Despite the stimulus package, unemployment remained high.',
        translation: "Malgré le plan de relance, le chômage est resté élevé.",
        isCorrect: true,
      },
      {
        sentence: 'Protectionism shields local industries, whereas free trade lowers consumer prices.',
        translation: "Le protectionnisme protège les industries locales, tandis que le libre-échange baisse les prix pour les consommateurs.",
        isCorrect: true,
      },
      {
        sentence: 'While austerity measures reduced the deficit, they increased poverty rates.',
        translation: "Bien que les mesures d'austérité aient réduit le déficit, elles ont augmenté les taux de pauvreté.",
        isCorrect: true,
      },
    ],
    commonMistakes: [
      {
        wrong: 'Despite of the recession, the company survived.',
        correct: 'Despite the recession, the company survived.',
        explanation:
          "'Despite' ne prend JAMAIS 'of'. C'est un calque de 'in spite of'. On dit 'despite + nom' ou 'in spite of + nom', mais jamais 'despite of'.",
      },
      {
        wrong: 'Although the inflation rising, consumers kept spending.',
        correct: 'Although inflation was rising, consumers kept spending.',
        explanation:
          "'Although' doit être suivi d'une clause complète (sujet + verbe conjugué). 'Although + gérondif' n'est pas correct en anglais standard. Ajoutez l'auxiliaire nécessaire.",
      },
    ],
  },
  conversation: [
    {
      speaker: 'Priya',
      role: 'A',
      text: 'I believe protectionism is the only way to save domestic manufacturing.',
      translation: "Je crois que le protectionnisme est le seul moyen de sauver l'industrie manufacturière nationale.",
    },
    {
      speaker: 'Rafael',
      role: 'B',
      text: 'I see your point, but protectionism tends to raise prices for ordinary consumers.',
      translation: "Je comprends votre point de vue, mais le protectionnisme a tendance à augmenter les prix pour les consommateurs ordinaires.",
    },
    {
      speaker: 'Priya',
      role: 'A',
      text: 'Despite higher prices, surely job security matters more in the long run?',
      translation: "Malgré des prix plus élevés, la sécurité de l'emploi compte sûrement davantage à long terme, non ?",
    },
    {
      speaker: 'Rafael',
      role: 'B',
      text: 'Whereas subsidies might be a better middle ground — they support industries without blocking trade.',
      translation: "Tandis que les subventions pourraient être un meilleur compromis — elles soutiennent les industries sans bloquer le commerce.",
    },
    {
      speaker: 'Priya',
      role: 'A',
      text: 'Although subsidies help, they strain public finances. Look at the austerity measures that followed.',
      translation: "Bien que les subventions aident, elles pèsent sur les finances publiques. Regardez les mesures d'austérité qui ont suivi.",
    },
    {
      speaker: 'Rafael',
      role: 'B',
      text: "Fair point. Nevertheless, a well-designed stimulus package can create growth that offsets the cost over time.",
      translation: "Juste. Néanmoins, un plan de relance bien conçu peut créer une croissance qui compense le coût avec le temps.",
    },
  ],
  conversationTitle: 'Debating Economic Policy',
  pronunciation: [
    {
      word: 'deregulation',
      phonetic: '/diːˌreɡjuˈleɪʃən/',
      meaning: 'déréglementation',
      tip: "L'accent principal est sur la quatrième syllabe : de-reg-u-LA-tion. Les francophones ont tendance à mettre l'accent sur la dernière syllabe comme en français.",
    },
    {
      word: 'subsidy',
      phonetic: '/ˈsʌbsɪdi/',
      meaning: 'subvention',
      tip: "La première syllabe est /sʌb/ comme dans 'subway', pas /syb/ à la française. L'accent est sur la première syllabe : SUB-si-dy.",
    },
    {
      word: 'austerity',
      phonetic: '/ɒˈsterəti/',
      meaning: 'austérité',
      tip: "Attention au 'au' initial : c'est /ɒ/ comme dans 'hot', pas /oʊ/. L'accent est sur la deuxième syllabe : aus-TER-i-ty.",
    },
    {
      word: 'protectionism',
      phonetic: '/prəˈtekʃənɪzəm/',
      meaning: 'protectionnisme',
      tip: "Quatre syllabes : pro-TEK-shun-izm. L'accent est sur la deuxième syllabe. Ne prononcez pas le 'e' final de 'protection' — le suffixe '-ism' se dit /ɪzəm/.",
    },
  ],
}

// ---------- b2-l49: Market Analysis ----------
export const B2_L49: LessonContent = {
  vocab: [
    {
      english: 'bull market',
      french: 'marché haussier',
      phonetic: '/ˈbʊl ˈmɑːkɪt/',
      example: 'The bull market of the 2010s delivered consistent returns for investors.',
      exampleTranslation: "Le marché haussier des années 2010 a offert des rendements réguliers aux investisseurs.",
    },
    {
      english: 'bear market',
      french: 'marché baissier',
      phonetic: '/ˈbeə ˈmɑːkɪt/',
      example: 'A bear market is typically defined as a decline of 20% or more from recent highs.',
      exampleTranslation: "Un marché baissier est généralement défini comme une baisse de 20 % ou plus par rapport aux récents sommets.",
    },
    {
      english: 'diversification',
      french: 'diversification',
      phonetic: '/daɪˌvɜːsɪfɪˈkeɪʃən/',
      example: 'Diversification reduces risk by spreading investments across different asset classes.',
      exampleTranslation: "La diversification réduit le risque en répartissant les investissements entre différentes classes d'actifs.",
    },
    {
      english: 'commodity',
      french: 'matière première',
      phonetic: '/kəˈmɒdəti/',
      example: 'Oil and gold are among the most traded commodities worldwide.',
      exampleTranslation: "Le pétrole et l'or comptent parmi les matières premières les plus échangées au monde.",
    },
    {
      english: 'portfolio',
      french: 'portefeuille (d\'investissement)',
      phonetic: '/pɔːtˈfəʊliəʊ/',
      example: 'A well-balanced portfolio should include both equities and bonds.',
      exampleTranslation: "Un portefeuille équilibré devrait inclure à la fois des actions et des obligations.",
    },
  ],
  grammar: {
    title: "Le futur antérieur et les prévisions économiques",
    explanation:
      "Le futur antérieur (future perfect: will have + participe passé) est très utilisé dans l'analyse de marché pour exprimer des prévisions sur ce qui sera accompli à un moment donné dans le futur. Structure : 'By + point dans le temps, subject + will have + past participle'. On l'emploie aussi avec des expressions comme 'by the end of the quarter', 'by 2030', 'within five years'. Cela permet de faire des projections précises et professionnelles.",
    examples: [
      {
        sentence: 'By the end of the year, the economy will have recovered from the downturn.',
        translation: "D'ici la fin de l'année, l'économie se sera remise du ralentissement.",
        isCorrect: true,
      },
      {
        sentence: 'By the end of the year, the economy will recovered from the downturn.',
        translation: '',
        isCorrect: false,
      },
      {
        sentence: 'Within five years, renewable energy will have overtaken fossil fuels in market share.',
        translation: "D'ici cinq ans, les énergies renouvelables auront dépassé les combustibles fossiles en part de marché.",
        isCorrect: true,
      },
      {
        sentence: 'The central bank will have raised interest rates twice before the summer.',
        translation: "La banque centrale aura augmenté les taux d'intérêt deux fois avant l'été.",
        isCorrect: true,
      },
      {
        sentence: 'The central bank will raised interest rates twice before the summer.',
        translation: '',
        isCorrect: false,
      },
    ],
    commonMistakes: [
      {
        wrong: 'By 2030, GDP will increased by 50%.',
        correct: 'By 2030, GDP will have increased by 50%.',
        explanation:
          "Le futur antérieur exige 'will have + participe passé'. Sans 'have', la forme est incorrecte. On ne peut pas dire 'will increased' — il faut 'will have increased'.",
      },
      {
        wrong: 'By next quarter, the market will has reached new highs.',
        correct: 'By next quarter, the market will have reached new highs.',
        explanation:
          "Après 'will', on utilise TOUJOURS la base verbale 'have', jamais 'has' (même avec un sujet singulier). 'Will' est invariable et est toujours suivi de la base verbale.",
      },
    ],
  },
  conversation: [
    {
      speaker: 'Yuki',
      role: 'A',
      text: 'Looking at current trends, we\'re clearly in a bull market for technology stocks.',
      translation: "En regardant les tendances actuelles, nous sommes clairement dans un marché haussier pour les actions technologiques.",
    },
    {
      speaker: 'Dmitri',
      role: 'B',
      text: 'I agree, but I wonder whether this rally is sustainable or just a bubble.',
      translation: "Je suis d'accord, mais je me demande si cette hausse est durable ou juste une bulle.",
    },
    {
      speaker: 'Yuki',
      role: 'A',
      text: 'By the end of the year, AI-driven companies will have reshaped entire sectors.',
      translation: "D'ici la fin de l'année, les entreprises axées sur l'IA auront remodelé des secteurs entiers.",
    },
    {
      speaker: 'Dmitri',
      role: 'B',
      text: 'That may be, but diversification remains essential — commodities and bonds provide a safety net.',
      translation: "C'est possible, mais la diversification reste essentielle — les matières premières et les obligations offrent un filet de sécurité.",
    },
    {
      speaker: 'Yuki',
      role: 'A',
      text: 'True. A portfolio that\'s too concentrated in one sector is vulnerable to a bear market.',
      translation: "C'est vrai. Un portefeuille trop concentré dans un seul secteur est vulnérable à un marché baissier.",
    },
    {
      speaker: 'Dmitri',
      role: 'B',
      text: 'Exactly. By the time the next correction comes, we\'ll have rebalanced our holdings to minimise exposure.',
      translation: "Exactement. Quand la prochaine correction arrivera, nous aurons rééquilibré nos avoirs pour minimiser l'exposition.",
    },
  ],
  conversationTitle: 'Analysing Market Trends',
  pronunciation: [
    {
      word: 'commodity',
      phonetic: '/kəˈmɒdəti/',
      meaning: 'matière première',
      tip: "L'accent est sur la DEUXIÈME syllabe : com-MOD-i-ty. Les francophones disent souvent /kɔmɔdi/ à la française. Pensez à 'com-MOD-uh-tee' avec un 'o' ouvert.",
    },
    {
      word: 'portfolio',
      phonetic: '/pɔːtˈfəʊliəʊ/',
      meaning: 'portefeuille',
      tip: "Ne prononcez PAS ce mot à la française ! En anglais, c'est 'port-FOH-lee-oh' avec l'accent sur la deuxième syllabe et des diphtongues claires /əʊ/.",
    },
    {
      word: 'diversification',
      phonetic: '/daɪˌvɜːsɪfɪˈkeɪʃən/',
      meaning: 'diversification',
      tip: "L'accent principal est sur la cinquième syllabe : di-ver-si-fi-CA-tion. La première syllabe est /daɪ/ comme dans 'dive', pas /di/ comme en français.",
    },
    {
      word: 'equities',
      phonetic: '/ˈekwɪtiz/',
      meaning: 'actions (boursières)',
      tip: "Le 'qu' se prononce /kw/ comme dans 'queen', pas /k/ comme en français. Dites 'EK-wi-teez' et non 'e-ki-teez'.",
    },
  ],
}

// ---------- b2-l50: Economy Sounds ----------
export const B2_L50: LessonContent = {
  vocab: [
    {
      english: 'entrepreneur',
      french: 'entrepreneur',
      phonetic: '/ˌɒntrəprəˈnɜː/',
      example: 'The young entrepreneur launched a fintech startup that attracted major investors.',
      exampleTranslation: "Le jeune entrepreneur a lancé une startup fintech qui a attiré des investisseurs majeurs.",
    },
    {
      english: 'fiscal',
      french: 'fiscal',
      phonetic: '/ˈfɪskəl/',
      example: 'The government announced new fiscal measures to reduce the national debt.',
      exampleTranslation: "Le gouvernement a annoncé de nouvelles mesures fiscales pour réduire la dette nationale.",
    },
    {
      english: 'equity',
      french: 'capitaux propres / actions',
      phonetic: '/ˈekwɪti/',
      example: 'Private equity firms often acquire struggling companies and restructure them.',
      exampleTranslation: "Les sociétés de capital-investissement acquièrent souvent des entreprises en difficulté et les restructurent.",
    },
    {
      english: 'yield',
      french: 'rendement',
      phonetic: '/jiːld/',
      example: 'Bond yields have fallen sharply in response to the central bank\'s decision.',
      exampleTranslation: "Les rendements obligataires ont chuté en réponse à la décision de la banque centrale.",
    },
    {
      english: 'tariff',
      french: 'droit de douane / tarif douanier',
      phonetic: '/ˈtærɪf/',
      example: 'New tariffs on imported steel triggered a trade dispute between the two nations.',
      exampleTranslation: "Les nouveaux droits de douane sur l'acier importé ont déclenché un différend commercial entre les deux nations.",
    },
  ],
  grammar: {
    title: "Les faux amis dans le vocabulaire économique",
    explanation:
      "Le vocabulaire économique anglais contient de nombreux faux amis (faux amis / false friends) qui peuvent induire en erreur les francophones. Un 'fiscal' policy en anglais = politique budgétaire/fiscale, pas seulement 'fiscal' au sens français restreint. 'Equity' ne veut pas dire 'équité' mais 'capitaux propres' ou 'actions'. 'Tariff' ne signifie pas 'tarif' au sens général mais spécifiquement 'droit de douane'. 'Yield' ne veut pas dire 'céder' ici mais 'rendement'. Ces distinctions sont cruciales dans un contexte professionnel.",
    examples: [
      {
        sentence: 'The fiscal deficit reached 5% of GDP.',
        translation: 'Le déficit budgétaire a atteint 5 % du PIB.',
        isCorrect: true,
      },
      {
        sentence: 'The equity market performed well this quarter.',
        translation: 'Le marché des actions a bien performé ce trimestre.',
        isCorrect: true,
      },
      {
        sentence: 'The equity of the decision was appreciated by all parties.',
        translation: '',
        isCorrect: false,
      },
      {
        sentence: 'The government imposed tariffs on foreign goods.',
        translation: 'Le gouvernement a imposé des droits de douane sur les produits étrangers.',
        isCorrect: true,
      },
      {
        sentence: 'The hotel tariff includes breakfast.',
        translation: '',
        isCorrect: false,
      },
    ],
    commonMistakes: [
      {
        wrong: 'The equity of the policy was questioned.',
        correct: 'The fairness of the policy was questioned.',
        explanation:
          "'Equity' en anglais économique signifie 'capitaux propres' ou 'actions', PAS 'équité'. Pour 'équité/justice', utilisez 'fairness' ou 'justice'. C'est un faux ami très courant.",
      },
      {
        wrong: 'The phone tariff is too expensive.',
        correct: 'The phone rate is too expensive.',
        explanation:
          "'Tariff' en anglais désigne spécifiquement un droit de douane, pas un tarif au sens général. Pour un tarif téléphonique, on dit 'rate' ou 'plan'. Ne confondez pas 'tariff' avec le français 'tarif'.",
      },
    ],
  },
  conversation: [
    {
      speaker: 'Chen Wei',
      role: 'A',
      text: 'The new tariffs on electronics are going to squeeze profit margins for importers.',
      translation: "Les nouveaux droits de douane sur l'électronique vont comprimer les marges bénéficiaires des importateurs.",
    },
    {
      speaker: 'Isabelle',
      role: 'B',
      text: 'Absolutely. And bond yields are dropping, which worries investors looking for returns.',
      translation: "Absolument. Et les rendements obligataires chutent, ce qui inquiète les investisseurs en quête de rendements.",
    },
    {
      speaker: 'Chen Wei',
      role: 'A',
      text: 'Some entrepreneurs are already relocating production to avoid the tariffs altogether.',
      translation: "Certains entrepreneurs relocalisent déjà la production pour éviter les droits de douane entièrement.",
    },
    {
      speaker: 'Isabelle',
      role: 'B',
      text: 'That makes sense. But accessing equity financing has become harder in this climate.',
      translation: "C'est logique. Mais accéder au financement en capitaux propres est devenu plus difficile dans ce climat.",
    },
    {
      speaker: 'Chen Wei',
      role: 'A',
      text: 'True. Fiscal policy could help though — tax incentives for domestic manufacturing might offset the damage.',
      translation: "C'est vrai. La politique fiscale pourrait aider cependant — des incitations fiscales pour la fabrication nationale pourraient compenser les dommages.",
    },
    {
      speaker: 'Isabelle',
      role: 'B',
      text: 'Let\'s hope so. The global economy needs stability, not more uncertainty.',
      translation: "Espérons-le. L'économie mondiale a besoin de stabilité, pas de plus d'incertitude.",
    },
  ],
  conversationTitle: 'The Impact of Tariffs on Business',
  pronunciation: [
    {
      word: 'entrepreneur',
      phonetic: '/ˌɒntrəprəˈnɜː/',
      meaning: 'entrepreneur',
      tip: "ATTENTION : en anglais, ce mot ne se prononce PAS /ɑ̃tʁəpʁənœʁ/ ! Dites 'on-tra-pruh-NUR' avec l'accent sur la DERNIÈRE syllabe et le son /ɜː/ comme dans 'fur'.",
    },
    {
      word: 'fiscal',
      phonetic: '/ˈfɪskəl/',
      meaning: 'fiscal',
      tip: "Le 'i' est court /ɪ/ comme dans 'fish', pas /iː/ comme dans 'machine'. Dites 'FIS-kəl' et non 'fee-SKAL'. L'accent est sur la première syllabe.",
    },
    {
      word: 'yield',
      phonetic: '/jiːld/',
      meaning: 'rendement',
      tip: "Le son initial /j/ est comme dans 'yes'. Puis /iːld/ comme dans 'field'. Les francophones prononcent souvent /jild/ avec un 'i' court. Allongez la voyelle : 'yeeeld'.",
    },
    {
      word: 'tariff',
      phonetic: '/ˈtærɪf/',
      meaning: 'droit de douane',
      tip: "La première syllabe est /tæ/ comme dans 'cat', pas /ta/ comme en français. L'accent est sur la première syllabe : 'TA-riff'. Ne dites pas 'ta-REEF'.",
    },
  ],
}
