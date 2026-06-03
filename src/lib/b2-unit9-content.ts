import type { LessonContent } from './lesson-content'

// ============================================
// B2 Unit 9: Psychology & Behavior
// Lessons b2-l41 to b2-l45
// ============================================

export const B2_L41: LessonContent = {
  vocab: [
    {
      english: 'cognition',
      french: 'cognition',
      phonetic: '/kɒɡˈnɪʃən/',
      example: 'Cognition declines naturally as we age, but mental exercise can slow the process.',
      exampleTranslation: 'La cognition décline naturellement avec l\'âge, mais l\'exercice mental peut ralentir le processus.'
    },
    {
      english: 'personality',
      french: 'personnalité',
      phonetic: '/ˌpɜːrsəˈnæləti/',
      example: 'Her personality combines introversion with a sharp sense of humour.',
      exampleTranslation: 'Sa personnalité combine l\'introversion avec un sens de l\'humour acéré.'
    },
    {
      english: 'therapy',
      french: 'thérapie',
      phonetic: '/ˈθerəpi/',
      example: 'Cognitive behavioural therapy has proven effective for anxiety disorders.',
      exampleTranslation: 'La thérapie cognitivo-comportementale s\'est révélée efficace pour les troubles anxieux.'
    },
    {
      english: 'perception',
      french: 'perception',
      phonetic: '/pərˈsɛpʃən/',
      example: 'Our perception of reality is shaped by cultural norms and past experiences.',
      exampleTranslation: 'Notre perception de la réalité est façonnée par les normes culturelles et les expériences passées.'
    },
    {
      english: 'subconscious',
      french: 'subconscient',
      phonetic: '/sʌbˈkɒnʃəs/',
      example: 'Subconscious biases often influence our decisions without us realising it.',
      exampleTranslation: 'Les biais subconscients influencent souvent nos décisions sans que nous nous en rendions compte.'
    }
  ],
  grammar: {
    title: 'Les noms composés en psychologie',
    explanation: 'En anglais, les noms composés sont très fréquents dans le vocabulaire de la psychologie. L\'ordre des mots est important : le nom principal vient en dernier, et les mots qui le précèdent fonctionnent comme des adjectifs. Par exemple, « cognitive behavioural therapy » (thérapie cognitivo-comportementale) : « therapy » est le nom principal, qualifié par « cognitive » et « behavioural ». Attention : en français, l\'ordre est souvent inversé ou utilise des prépositions.',
    examples: [
      {
        sentence: 'She specialises in cognitive behavioural therapy.',
        translation: 'Elle se spécialise dans la thérapie cognitivo-comportementale.',
        isCorrect: true
      },
      {
        sentence: 'She specialises in therapy of cognitive behavioural.',
        translation: 'Elle se spécialise dans la thérapie de cognitif comportemental.',
        isCorrect: false
      },
      {
        sentence: 'Self-awareness is a key component of emotional intelligence.',
        translation: 'La conscience de soi est une composante clé de l\'intelligence émotionnelle.',
        isCorrect: true
      },
      {
        sentence: 'Personality disorders can significantly affect daily functioning.',
        translation: 'Les troubles de la personnalité peuvent affecter considérablement le fonctionnement quotidien.',
        isCorrect: true
      },
      {
        sentence: 'He suffers of a personality disorder.',
        translation: 'Il souffre d\'un trouble de la personnalité.',
        isCorrect: false
      }
    ],
    commonMistakes: [
      {
        wrong: 'She is in therapy since two years.',
        correct: 'She has been in therapy for two years.',
        explanation: 'Avec « since » et « for » pour exprimer la durée, on utilise le present perfect, pas le present simple. « Since » marque un point de départ, « for » une durée.'
      },
      {
        wrong: 'He has a subconscious bias toward people.',
        correct: 'He has a subconscious bias against people.',
        explanation: 'Le mot « bias » est suivi de « against » (contre) ou « toward » (vers), mais un biais négatif s\'exprime avec « bias against ». « Bias toward » implique une préférence positive.'
      },
      {
        wrong: 'The perception of him changed.',
        correct: 'The perception of him changed. / Perceptions of him changed.',
        explanation: 'Bien que la phrase soit grammaticalement correcte, on préfère souvent utiliser « perceptions » au pluriel quand on parle de la façon dont plusieurs personnes perçoivent quelqu\'un.'
      }
    ]
  },
  conversation: [
    {
      speaker: 'Amara',
      role: 'A',
      text: 'Have you read the new meta-analysis on cognition and ageing?',
      translation: 'As-tu lu la nouvelle méta-analyse sur la cognition et le vieillissement ?'
    },
    {
      speaker: 'Kenji',
      role: 'B',
      text: 'Not yet, but I\'ve been meaning to. Does it focus on personality factors?',
      translation: 'Pas encore, mais j\'avais l\'intention de le faire. Se concentre-t-il sur les facteurs de personnalité ?'
    },
    {
      speaker: 'Amara',
      role: 'A',
      text: 'Partly. It suggests that personality traits like openness correlate with slower cognitive decline.',
      translation: 'En partie. Il suggère que les traits de personnalité comme l\'ouverture correspondent à un déclin cognitif plus lent.'
    },
    {
      speaker: 'Kenji',
      role: 'B',
      text: 'That\'s fascinating. I wonder if that holds up across cultures — perception of openness varies so much.',
      translation: 'C\'est fascinant. Je me demande si cela se vérifie d\'une culture à l\'autre — la perception de l\'ouverture varie tellement.'
    },
    {
      speaker: 'Amara',
      role: 'A',
      text: 'Good point. The researchers acknowledged that limitation and called for cross-cultural replication.',
      translation: 'Bonne remarque. Les chercheurs ont reconnu cette limite et ont appelé à une réplication interculturelle.'
    },
    {
      speaker: 'Kenji',
      role: 'B',
      text: 'I\'ll download it this evening. We could discuss it over coffee tomorrow if you\'re free.',
      translation: 'Je le téléchargerai ce soir. Nous pourrions en discuter autour d\'un café demain si tu es libre.'
    }
  ],
  conversationTitle: 'Discussing Cognition Research',
  pronunciation: [
    {
      word: 'cognition',
      phonetic: '/kɒɡˈnɪʃən/',
      meaning: 'cognition',
      tip: 'Attention au « g » muet : on prononce /kɒɡ/ comme dans « dog », suivi de /nɪʃən/. Les francophones ont tendance à dire /ko-ni-syon/ — il faut bien prononcer le « g » dur.'
    },
    {
      word: 'subconscious',
      phonetic: '/sʌbˈkɒnʃəs/',
      meaning: 'subconscient',
      tip: 'Le préfixe « sub- » se prononce /sʌb/ avec un « b » audible, PAS /syp/ comme en français. De plus, « conscious » se prononce /ˈkɒnʃəs/, le « ch » est /ʃ/ comme dans « chat ».'
    },
    {
      word: 'perception',
      phonetic: '/pərˈsɛpʃən/',
      meaning: 'perception',
      tip: 'L\'accent tonique est sur la deuxième syllabe : per-CEP-tion. Les francophones placent souvent l\'accent sur la dernière syllabe comme en français, mais en anglais c\'est sur l\'avant-dernière.'
    },
    {
      word: 'therapy',
      phonetic: '/ˈθerəpi/',
      meaning: 'thérapie',
      tip: 'Le « th » est interdental /θ/, PAS /t/ ni /s/. Placez votre langue entre vos dents et soufflez. Attention aussi à l\'accent tonique sur la première syllabe : THE-ra-py.'
    }
  ]
}

export const B2_L42: LessonContent = {
  vocab: [
    {
      english: 'whereas',
      french: 'tandis que / alors que',
      phonetic: '/werˈæz/',
      example: 'Extroverts gain energy from social interaction, whereas introverts recharge in solitude.',
      exampleTranslation: 'Les extravertis tirent de l\'énergie des interactions sociales, tandis que les introvertis se ressourcent dans la solitude.'
    },
    {
      english: 'nevertheless',
      french: 'néanmoins / toutefois',
      phonetic: '/ˌnevərðəˈles/',
      example: 'The experiment had methodological flaws; nevertheless, the findings were significant.',
      exampleTranslation: 'L\'expérience avait des failles méthodologiques ; néanmoins, les résultats étaient significatifs.'
    },
    {
      english: 'provided that',
      french: 'à condition que / pourvu que',
      phonetic: '/prəˈvaɪdɪd ðæt/',
      example: 'Therapy can be effective, provided that the patient is willing to engage in the process.',
      exampleTranslation: 'La thérapie peut être efficace, à condition que le patient soit disposé à s\'engager dans le processus.'
    },
    {
      english: 'inasmuch as',
      french: 'dans la mesure où',
      phonetic: '/ˌɪnəzˈmʌtʃ æz/',
      example: 'The theory is valid inasmuch as it explains observed behaviour patterns.',
      exampleTranslation: 'La théorie est valable dans la mesure où elle explique les modèles de comportement observés.'
    },
    {
      english: 'albeit',
      french: 'bien que / quoique',
      phonetic: '/ˌɔːlˈbiːɪt/',
      example: 'She completed the assessment, albeit with considerable difficulty.',
      exampleTranslation: 'Elle a terminé l\'évaluation, bien qu\'avec des difficultés considérables.'
    }
  ],
  grammar: {
    title: 'Les phrases complexes : subordination et conjonctions avancées',
    explanation: 'Au niveau B2, vous devez maîtriser les structures de subordination complexes. Les conjonctions comme « whereas », « provided that », « inasmuch as » et « albeit » permettent d\'exprimer des nuances précises : contraste, condition, restriction, concession. Contrairement au français, ces conjonctions exigent souvent une structure syntaxique spécifique. « Provided that » est suivi de l\'indicatif (pas du subjonctif français). « Albeit » est toujours suivi d\'un adjectif, d\'un adverbe ou d\'une préposition, jamais d\'une proposition complète avec sujet + verbe conjugué.',
    examples: [
      {
        sentence: 'He agreed to participate, provided that his data remained confidential.',
        translation: 'Il a accepté de participer, à condition que ses données restent confidentielles.',
        isCorrect: true
      },
      {
        sentence: 'He agreed to participate, provided that his data would remain confidential.',
        translation: 'Il a accepté de participer, à condition que ses données resteraient confidentielles.',
        isCorrect: false
      },
      {
        sentence: 'Whereas cognitive therapy focuses on thoughts, behavioural therapy targets actions.',
        translation: 'Tandis que la thérapie cognitive se concentre sur les pensées, la thérapie comportementale cible les actions.',
        isCorrect: true
      },
      {
        sentence: 'She continued the treatment, albeit reluctantly.',
        translation: 'Elle a continué le traitement, bien qu\'à contrecœur.',
        isCorrect: true
      },
      {
        sentence: 'She continued the treatment, albeit she was reluctant.',
        translation: 'Elle a continué le traitement, bien qu\'elle fût réticente.',
        isCorrect: false
      }
    ],
    commonMistakes: [
      {
        wrong: 'Provided that he would arrive on time, we can start.',
        correct: 'Provided that he arrives on time, we can start.',
        explanation: 'Après « provided that », on utilise l\'indicatif présent (arrives) et non le conditionnel (would arrive). C\'est une erreur fréquente des francophones qui calquent sur le subjonctif français.'
      },
      {
        wrong: 'Albeit she was tired, she continued working.',
        correct: 'Although she was tired, she continued working. / She continued working, albeit tired.',
        explanation: '« Albeit » ne peut pas introduire une proposition complète avec sujet + verbe. On utilise « although » dans ce cas. « Albeit » est suivi directement d\'un adjectif, adverbe ou syntagme prépositionnel.'
      },
      {
        wrong: 'He is anxious, whereas he performs well under pressure.',
        correct: 'He is anxious, yet he performs well under pressure. / Although he is anxious, he performs well under pressure.',
        explanation: '« Whereas » exprime une comparaison/contraste entre deux faits parallèles, pas une concession. Pour « bien que » au sens concessif, utilisez « although » ou « yet ».'
      }
    ]
  },
  conversation: [
    {
      speaker: 'Yuki',
      role: 'A',
      text: 'The longitudinal study suggests that early intervention reduces anxiety symptoms by forty percent.',
      translation: 'L\'étude longitudinale suggère que l\'intervention précoce réduit les symptômes d\'anxiété de quarante pour cent.'
    },
    {
      speaker: 'Rafael',
      role: 'B',
      text: 'That\'s impressive, whereas the previous meta-analysis only showed a twenty percent reduction.',
      translation: 'C\'est impressionnant, alors que la précédente méta-analyse ne montrait qu\'une réduction de vingt pour cent.'
    },
    {
      speaker: 'Yuki',
      role: 'A',
      text: 'True, but the earlier study had a much smaller sample. Nevertheless, we should be cautious about generalising.',
      translation: 'C\'est vrai, mais l\'étude précédente avait un échantillon bien plus petit. Néanmoins, nous devrions être prudents quant à la généralisation.'
    },
    {
      speaker: 'Rafael',
      role: 'B',
      text: 'Absolutely. These results are valid inasmuch as the participants represent urban populations — rural areas may differ.',
      translation: 'Absolument. Ces résultats sont valables dans la mesure où les participants représentent des populations urbaines — les zones rurales peuvent différer.'
    },
    {
      speaker: 'Yuki',
      role: 'A',
      text: 'The team plans to extend the research, provided that funding is secured for next year.',
      translation: 'L\'équipe prévoit d\'étendre la recherche, à condition que le financement soit assuré pour l\'année prochaine.'
    },
    {
      speaker: 'Rafael',
      role: 'B',
      text: 'Let\'s hope so. The preliminary findings are promising, albeit limited in scope.',
      translation: 'Espérons-le. Les résultats préliminaires sont prometteurs, bien que limités dans leur portée.'
    }
  ],
  conversationTitle: 'Research Findings Discussion',
  pronunciation: [
    {
      word: 'whereas',
      phonetic: '/werˈæz/',
      meaning: 'tandis que',
      tip: 'L\'accent tonique est sur la deuxième syllabe : wher-EAS. Les francophones tendent à accentuer la première syllabe. Le « wh » se prononce /w/ simplement, pas /vw/ ou /hw/ exagéré.'
    },
    {
      word: 'nevertheless',
      phonetic: '/ˌnevərðəˈles/',
      meaning: 'néanmoins',
      tip: 'L\'accent principal est sur la dernière syllabe : ne-ver-the-LESS. Le « th » est interdental /ð/ (voisé) comme dans « the ». Les francophones le prononcent souvent /z/ ou l\'omettent.'
    },
    {
      word: 'albeit',
      phonetic: '/ˌɔːlˈbiːɪt/',
      meaning: 'bien que',
      tip: 'Prononcez trois syllabes : all-BEE-it. Les francophones ont tendance à dire /al-bee/ en deux syllabes. L\'accent est sur la deuxième syllabe, et le « i » final se prononce /ɪ/ bref.'
    },
    {
      word: 'inasmuch',
      phonetic: '/ˌɪnəzˈmʌtʃ/',
      meaning: 'dans la mesure',
      tip: 'L\'accent est sur la dernière syllabe : in-as-MUCH. Le « u » se prononce /ʌ/ comme dans « cup », PAS /u/ comme en français. Le « ch » final est /tʃ/ comme dans « church ».'
    }
  ]
}

export const B2_L43: LessonContent = {
  vocab: [
    {
      english: 'reinforcement',
      french: 'renforcement',
      phonetic: '/ˌriːɪnˈfɔːrsmənt/',
      example: 'Positive reinforcement is more effective than punishment for long-term behavioural change.',
      exampleTranslation: 'Le renforcement positif est plus efficace que la punition pour un changement comportemental à long terme.'
    },
    {
      english: 'trigger',
      french: 'déclencheur / déclencher',
      phonetic: '/ˈtrɪɡər/',
      example: 'Loud noises can trigger a stress response in patients with PTSD.',
      exampleTranslation: 'Les bruits forts peuvent déclencher une réaction de stress chez les patients souffrant de TSPT.'
    },
    {
      english: 'pattern',
      french: 'schéma / modèle',
      phonetic: '/ˈpætərn/',
      example: 'The therapist identified a recurring pattern in her relationship choices.',
      exampleTranslation: 'Le thérapeute a identifié un schéma récurrent dans ses choix relationnels.'
    },
    {
      english: 'coping mechanism',
      french: 'mécanisme d\'adaptation',
      phonetic: '/ˈkəʊpɪŋ ˈmekənɪzəm/',
      example: 'Humour can be a healthy coping mechanism when dealing with stress.',
      exampleTranslation: 'L\'humour peut être un mécanisme d\'adaptation sain pour gérer le stress.'
    },
    {
      english: 'impulse',
      french: 'impulsion',
      phonetic: '/ˈɪmpʌls/',
      example: 'He struggled to control his impulse to interrupt during conversations.',
      exampleTranslation: 'Il luttait pour contrôler son impulsion d\'interrompre pendant les conversations.'
    }
  ],
  grammar: {
    title: 'Les propositions relatives : defining vs non-defining',
    explanation: 'Les propositions relatives sont essentielles pour analyser des comportements avec précision. En anglais, il existe deux types : les définissantes (defining), qui restreignent le sens du nom et ne sont pas séparées par des virgules, et les non-définissantes (non-defining), qui ajoutent une information supplémentaire et sont encadrées par des virgules. Attention : dans les propositions non-définissantes, on ne peut JAMAIS utiliser « that » — on doit utiliser « which » ou « who ». C\'est une erreur très courante chez les francophones.',
    examples: [
      {
        sentence: 'Patients who exhibit avoidance behaviour often benefit from gradual exposure therapy.',
        translation: 'Les patients qui présentent un comportement d\'évitement bénéficient souvent d\'une thérapie d\'exposition progressive.',
        isCorrect: true
      },
      {
        sentence: 'Patients, who exhibit avoidance behaviour, often benefit from gradual exposure therapy.',
        translation: 'Les patients, qui présentent un comportement d\'évitement, bénéficient souvent d\'une thérapie d\'exposition progressive.',
        isCorrect: false
      },
      {
        sentence: 'Cognitive dissonance, which was first described by Festinger, remains a key concept in social psychology.',
        translation: 'La dissonance cognitive, qui a été décrite pour la première fois par Festinger, reste un concept clé en psychologie sociale.',
        isCorrect: true
      },
      {
        sentence: 'Cognitive dissonance, that was first described by Festinger, remains a key concept.',
        translation: 'La dissonance cognitive, qui a été décrite pour la première fois par Festinger, reste un concept clé.',
        isCorrect: false
      },
      {
        sentence: 'The coping mechanism that she developed in childhood no longer serves her well.',
        translation: 'Le mécanisme d\'adaptation qu\'elle a développé dans l\'enfance ne lui est plus utile.',
        isCorrect: true
      }
    ],
    commonMistakes: [
      {
        wrong: 'The pattern, that we observed, suggests a link between stress and sleep.',
        correct: 'The pattern that we observed suggests a link between stress and sleep. / The pattern, which we observed, suggests a link between stress and sleep.',
        explanation: 'On ne peut pas utiliser « that » dans une proposition non-définissante (avec virgules). Si l\'information est essentielle (defining), pas de virgules et « that » est possible. Si elle est supplémentaire (non-defining), utilisez « which » avec des virgules.'
      },
      {
        wrong: 'The triggers which causes the behaviour must be identified.',
        correct: 'The triggers which cause the behaviour must be identified.',
        explanation: 'Le verbe de la proposition relative s\'accorde avec l\'antécédent. « Triggers » est pluriel, donc le verbe est « cause » sans « s ». Les francophones confondent souvent l\'accord car la notion de pluriel n\'affecte pas le verbe en français de la même façon.'
      }
    ]
  },
  conversation: [
    {
      speaker: 'Priya',
      role: 'A',
      text: 'Based on the observation logs, I\'ve noticed a clear pattern of avoidance behaviour before deadlines.',
      translation: 'D\'après les journaux d\'observation, j\'ai remarqué un schéma clair de comportement d\'évitement avant les délais.'
    },
    {
      speaker: 'Marcus',
      role: 'B',
      text: 'What do you think triggers it? Is it the fear of failure or something deeper?',
      translation: 'Qu\'est-ce qui le déclenche selon toi ? Est-ce la peur de l\'échec ou quelque chose de plus profond ?'
    },
    {
      speaker: 'Priya',
      role: 'A',
      text: 'Both, I suspect. The client who experiences this tends to catastrophise outcomes.',
      translation: 'Les deux, je suppose. Le client qui vit cela a tendance à catastrophiser les résultats.'
    },
    {
      speaker: 'Marcus',
      role: 'B',
      text: 'Has he developed any coping mechanisms that actually work?',
      translation: 'A-t-il développé des mécanismes d\'adaptation qui fonctionnent réellement ?'
    },
    {
      speaker: 'Priya',
      role: 'A',
      text: 'He\'s been trying mindfulness exercises, which have shown some positive reinforcement in recent sessions.',
      translation: 'Il a essayé des exercices de pleine conscience, qui ont montré un certain renforcement positif lors des séances récentes.'
    },
    {
      speaker: 'Marcus',
      role: 'B',
      text: 'That\'s encouraging. Managing the impulse to procrastinate is half the battle.',
      translation: 'C\'est encourageant. Gérer l\'impulsion de procrastiner, c\'est la moitié de la bataille.'
    }
  ],
  conversationTitle: 'Behavioural Analysis Session',
  pronunciation: [
    {
      word: 'reinforcement',
      phonetic: '/ˌriːɪnˈfɔːrsmənt/',
      meaning: 'renforcement',
      tip: 'L\'accent tonique est sur la syllabe « -force- » : re-in-FORCE-ment. Les francophones ont tendance à prononcer /rɛ̃/ comme en français — il faut dire /riː/ (long « ee ») pour le préfixe « re- ».'
    },
    {
      word: 'trigger',
      phonetic: '/ˈtrɪɡər/',
      meaning: 'déclencheur',
      tip: 'Le « i » se prononce /ɪ/ bref comme dans « bit », PAS /i/ long comme dans « beat ». Et le « gg » est dur /ɡ/, pas le /ʒ/ français comme dans « gym ».'
    },
    {
      word: 'pattern',
      phonetic: '/ˈpætərn/',
      meaning: 'schéma',
      tip: 'Le « a » est /æ/ (bouche ouverte), PAS /e/ fermé français. Pensez à la voyelle dans « cat ». Le « tt » est simple /t/, et le « er » final est /ərn/ avec le « r » prononcé.'
    },
    {
      word: 'impulse',
      phonetic: '/ˈɪmpʌls/',
      meaning: 'impulsion',
      tip: 'Le « u » se prononce /ʌ/ comme dans « cup » ou « bus », PAS /y/ comme le « u » français. Dites « IMP-ulss » et non « im-püls ».'
    }
  ]
}

export const B2_L44: LessonContent = {
  vocab: [
    {
      english: 'diagnosis',
      french: 'diagnostic',
      phonetic: '/ˌdaɪəɡˈnəʊsɪs/',
      example: 'An accurate diagnosis requires a thorough evaluation of the patient\'s history.',
      exampleTranslation: 'Un diagnostic précis nécessite une évaluation approfondie de l\'histoire du patient.'
    },
    {
      english: 'symptom',
      french: 'symptôme',
      phonetic: '/ˈsɪmptəm/',
      example: 'One key symptom of depression is a persistent loss of interest in daily activities.',
      exampleTranslation: 'Un symptôme clé de la dépression est une perte d\'intérêt persistante pour les activités quotidiennes.'
    },
    {
      english: 'onset',
      french: 'apparition / début',
      phonetic: '/ˈɒnsɛt/',
      example: 'The onset of symptoms usually occurs in early adulthood.',
      exampleTranslation: 'L\'apparition des symptômes se produit généralement au début de l\'âge adulte.'
    },
    {
      english: 'prognosis',
      french: 'pronostic',
      phonetic: '/prɒɡˈnəʊsɪs/',
      example: 'The prognosis is favourable if treatment begins during the early stages.',
      exampleTranslation: 'Le pronostic est favorable si le traitement commence aux stades précoces.'
    },
    {
      english: 'comorbidity',
      french: 'comorbidité',
      phonetic: '/ˌkɒmɔːrˈbɪdəti/',
      example: 'There is a high rate of comorbidity between anxiety and depressive disorders.',
      exampleTranslation: 'Il y a un taux élevé de comorbidité entre les troubles anxieux et dépressifs.'
    }
  ],
  grammar: {
    title: 'Le style formel : passif et tournures impersonnelles dans les études de cas',
    explanation: 'Dans les discussions cliniques et les études de cas en anglais, on utilise fréquemment le passif et les tournures impersonnelles pour maintenir un ton objectif et formel. La structure « It + passif + that » (It is observed that..., It has been suggested that...) est très courante. Les francophones ont tendance à utiliser le passif moins souvent en anglais, car le passif français (avec « on ») leur semble plus naturel. En anglais clinique, le passif n\'est pas une marque d\'imprécision mais de rigueur scientifique : il met l\'accent sur le procès ou le résultat plutôt que sur l\'agent.',
    examples: [
      {
        sentence: 'It was observed that the patient exhibited signs of cognitive impairment.',
        translation: 'Il a été observé que le patient présentait des signes de déficience cognitive.',
        isCorrect: true
      },
      {
        sentence: 'We observed that the patient exhibited signs of cognitive impairment.',
        translation: 'Nous avons observé que le patient présentait des signes de déficience cognitive.',
        isCorrect: true
      },
      {
        sentence: 'A differential diagnosis was performed to rule out other conditions.',
        translation: 'Un diagnostic différentiel a été effectué pour écarter d\'autres affections.',
        isCorrect: true
      },
      {
        sentence: 'They did a differential diagnosis to rule out other conditions.',
        translation: 'Ils ont fait un diagnostic différentiel pour écarter d\'autres affections.',
        isCorrect: false
      },
      {
        sentence: 'It has been demonstrated that early intervention improves prognosis significantly.',
        translation: 'Il a été démontré que l\'intervention précoce améliore considérablement le pronostic.',
        isCorrect: true
      }
    ],
    commonMistakes: [
      {
        wrong: 'It is important to remark that symptoms vary between individuals.',
        correct: 'It is important to note that symptoms vary between individuals.',
        explanation: 'En anglais, « remark » signifie « faire remarquer » dans un contexte conversationnel, mais dans un contexte formel/clinique, on utilise « note ». « Remark » calqué sur le français « remarquer » est un anglicisme inverse.'
      },
      {
        wrong: 'The diagnosis was done by a team of specialists.',
        correct: 'The diagnosis was made by a team of specialists.',
        explanation: 'En anglais, on « makes a diagnosis » (fait un diagnostic), on ne « does » pas un diagnostic. Le verbe associé à « diagnosis » est « make », pas « do ». Même chose pour « prognosis » et « assessment ».'
      },
      {
        wrong: 'It was suggested that the patient to begin medication.',
        correct: 'It was suggested that the patient begin medication. / It was suggested that the patient should begin medication.',
        explanation: 'Après « suggested that », on utilise le subjonctif (base verbale sans « to ») ou « should + base verbale ». On ne met jamais « to » entre le sujet et le verbe dans cette structure.'
      }
    ]
  },
  conversation: [
    {
      speaker: 'Nadia',
      role: 'A',
      text: 'Let\'s discuss the case of Patient 47. The onset of symptoms was reported six months ago.',
      translation: 'Discutons du cas du Patient 47. L\'apparition des symptômes a été signalée il y a six mois.'
    },
    {
      speaker: 'Tomás',
      role: 'B',
      text: 'Yes, and the initial diagnosis was generalised anxiety disorder, although comorbidity with depression was noted.',
      translation: 'Oui, et le diagnostic initial était un trouble d\'anxiété généralisée, bien qu\'une comorbidité avec la dépression ait été notée.'
    },
    {
      speaker: 'Nadia',
      role: 'A',
      text: 'It was observed that avoidance behaviour intensified after workplace-related stressors increased.',
      translation: 'Il a été observé que le comportement d\'évitement s\'est intensifié après l\'augmentation des facteurs de stress liés au travail.'
    },
    {
      speaker: 'Tomás',
      role: 'B',
      text: 'Given that pattern, what\'s the current prognosis? Is he responding to CBT?',
      translation: 'Étant donné ce schéma, quel est le pronostic actuel ? Répond-il à la TCC ?'
    },
    {
      speaker: 'Nadia',
      role: 'A',
      text: 'Moderately well. It has been suggested that combining therapy with medication could accelerate improvement.',
      translation: 'Modérément bien. Il a été suggéré que la combinaison de la thérapie avec un traitement médicamenteux pourrait accélérer l\'amélioration.'
    },
    {
      speaker: 'Tomás',
      role: 'B',
      text: 'I agree. Let\'s schedule a follow-up assessment in four weeks to reassess the symptom profile.',
      translation: 'Je suis d\'accord. Planifions une évaluation de suivi dans quatre semaines pour réévaluer le profil des symptômes.'
    }
  ],
  conversationTitle: 'Clinical Case Discussion',
  pronunciation: [
    {
      word: 'diagnosis',
      phonetic: '/ˌdaɪəɡˈnəʊsɪs/',
      meaning: 'diagnostic',
      tip: 'L\'accent est sur la troisième syllabe : dy-ug-NO-sis. Le « g » est prononcé /ɡ/ dur. Les francophones disent souvent /djaɡnoz/ — attention à l\'accent tonique et à la voyelle de la dernière syllabe /sɪs/ pas /sis/ français.'
    },
    {
      word: 'symptom',
      phonetic: '/ˈsɪmptəm/',
      meaning: 'symptôme',
      tip: 'Le « y » se prononce /ɪ/ comme dans « sit », PAS /ɛ/ comme en français « symptôme ». Dites « SIM-ptum » et non « saim-ptome ».'
    },
    {
      word: 'prognosis',
      phonetic: '/prɒɡˈnəʊsɪs/',
      meaning: 'pronostic',
      tip: 'Comme « diagnosis », l\'accent est sur l\'antépénultième syllabe : prog-NO-sis. Ne dites PAS /proɡ-noz/ à la française. Le « g » est dur /ɡ/ et la dernière syllabe est /sɪs/.'
    },
    {
      word: 'comorbidity',
      phonetic: '/ˌkɒmɔːrˈbɪdəti/',
      meaning: 'comorbidité',
      tip: 'L\'accent principal est sur « -bid- » : com-or-BID-i-ty. Les francophones ont tendance à accentuer la dernière syllabe comme en français. Le « o » de la première syllabe est /ɒ/ ouvert, PAS /o/ fermé.'
    }
  ]
}

export const B2_L45: LessonContent = {
  vocab: [
    {
      english: 'empathy',
      french: 'empathie',
      phonetic: '/ˈempəθi/',
      example: 'Empathy allows therapists to understand their clients\' emotional states without judgment.',
      exampleTranslation: 'L\'empathie permet aux thérapeutes de comprendre les états émotionnels de leurs clients sans jugement.'
    },
    {
      english: 'resilience',
      french: 'résilience',
      phonetic: '/rɪˈzɪliəns/',
      example: 'Building resilience in children helps them cope with adversity later in life.',
      exampleTranslation: 'Développer la résilience chez les enfants les aide à faire face à l\'adversité plus tard dans la vie.'
    },
    {
      english: 'phobia',
      french: 'phobie',
      phonetic: '/ˈfəʊbiə/',
      example: 'A phobia is an irrational fear that can significantly impair daily functioning.',
      exampleTranslation: 'Une phobie est une peur irrationnelle qui peut nuire considérablement au fonctionnement quotidien.'
    },
    {
      english: 'neurosis',
      french: 'névrose',
      phonetic: '/njʊˈrəʊsɪs/',
      example: 'The term neurosis is now considered outdated in modern diagnostic manuals.',
      exampleTranslation: 'Le terme névrose est aujourd\'hui considéré comme obsolète dans les manuels diagnostiques modernes.'
    },
    {
      english: 'psychosis',
      french: 'psychose',
      phonetic: '/saɪˈkəʊsɪs/',
      example: 'Psychosis involves a disconnection from reality, often manifesting as hallucinations or delusions.',
      exampleTranslation: 'La psychose implique une déconnexion de la réalité, se manifestant souvent par des hallucinations ou des délires.'
    }
  ],
  grammar: {
    title: 'Les verbes psychologiques : structures et collocations',
    explanation: 'En psychologie, certains verbes ont des structures spécifiques que les francophones confondent souvent. « Suffer from » (souffrir de) prend « from » et non « of ». « Respond to » (répondre à / réagir à) prend « to » et non « at ». « Result in » (entraîner / conduire à) prend « in » et non « to ». « Consist of » (consister en / être composé de) prend « of » et non « in ». Ces prépositions ne sont pas interchangeables et leur mauvais usage change le sens ou rend la phrase incorrecte.',
    examples: [
      {
        sentence: 'She suffers from chronic anxiety, which results in frequent panic attacks.',
        translation: 'Elle souffre d\'anxiété chronique, ce qui entraîne des crises de panique fréquentes.',
        isCorrect: true
      },
      {
        sentence: 'She suffers of chronic anxiety, which results to frequent panic attacks.',
        translation: 'Elle souffre d\'anxiété chronique, ce qui conduit à des crises de panique fréquentes.',
        isCorrect: false
      },
      {
        sentence: 'The treatment consists of twelve weekly sessions of cognitive therapy.',
        translation: 'Le traitement consiste en douze séances hebdomadaires de thérapie cognitive.',
        isCorrect: true
      },
      {
        sentence: 'The treatment consists in twelve weekly sessions of cognitive therapy.',
        translation: 'Le traitement consiste en douze séances hebdomadaires de thérapie cognitive.',
        isCorrect: false
      },
      {
        sentence: 'He responded well to the new medication within the first two weeks.',
        translation: 'Il a bien réagi au nouveau médicament dans les deux premières semaines.',
        isCorrect: true
      }
    ],
    commonMistakes: [
      {
        wrong: 'He suffers of social phobia.',
        correct: 'He suffers from social phobia.',
        explanation: 'Le verbe « suffer » est suivi de « from » en anglais, pas « of ». C\'est une erreur très fréquente car en français on dit « souffrir de ». La préposition « of » est utilisée avec « die of » (mourir de) mais pas avec « suffer ».'
      },
      {
        wrong: 'Stress results to physical symptoms.',
        correct: 'Stress results in physical symptoms.',
        explanation: '« Result in » signifie « entraîner / conduire à ». « Result from » signifie « résulter de ». On ne dit jamais « result to ». Cette confusion vient du français « résulter de » et « conduire à ».'
      },
      {
        wrong: 'The assessment consists in three parts.',
        correct: 'The assessment consists of three parts.',
        explanation: '« Consist of » décrit la composition (être composé de). « Consist in » existe mais est rare et signifie « résider dans » (une qualité). Pour décrire les éléments constitutifs, utilisez toujours « consist of ».'
      }
    ]
  },
  conversation: [
    {
      speaker: 'Leila',
      role: 'A',
      text: 'I\'ve been reading about the role of empathy in therapeutic outcomes. It seems crucial.',
      translation: 'J\'ai lu sur le rôle de l\'empathie dans les résultats thérapeutiques. Elle semble cruciale.'
    },
    {
      speaker: 'David',
      role: 'B',
      text: 'Absolutely. Patients who feel understood respond better to treatment overall.',
      translation: 'Absolument. Les patients qui se sentent compris répondent mieux au traitement dans l\'ensemble.'
    },
    {
      speaker: 'Leila',
      role: 'A',
      text: 'But there\'s a distinction between empathy and sympathy that some professionals still confuse.',
      translation: 'Mais il y a une distinction entre l\'empathie et la sympathie que certains professionnels confondent encore.'
    },
    {
      speaker: 'David',
      role: 'B',
      text: 'Right — empathy involves sharing the emotional experience, whereas sympathy is feeling concern from a distance.',
      translation: 'En effet — l\'empathie implique de partager l\'expérience émotionnelle, tandis que la sympathie consiste à ressentir de la préoccupation à distance.'
    },
    {
      speaker: 'Leila',
      role: 'A',
      text: 'And resilience plays a part too. Some patients recover faster because of innate resilience factors.',
      translation: 'Et la résilience joue un rôle aussi. Certains patients se rétablissent plus rapidement grâce à des facteurs de résilience innés.'
    },
    {
      speaker: 'David',
      role: 'B',
      text: 'That\'s why a personalised approach matters — every case consists of a unique combination of factors.',
      translation: 'C\'est pourquoi une approche personnalisée compte — chaque cas consiste en une combinaison unique de facteurs.'
    }
  ],
  conversationTitle: 'Empathy and Resilience in Practice',
  pronunciation: [
    {
      word: 'empathy',
      phonetic: '/ˈempəθi/',
      meaning: 'empathie',
      tip: 'Le « th » est interdental sourd /θ/. Les francophones le prononcent souvent /t/ ou /s/. Placez la langue entre les dents et soufflez. Dites « EM-pə-thi » et non « am-pa-ti » à la française.'
    },
    {
      word: 'resilience',
      phonetic: '/rɪˈzɪliəns/',
      meaning: 'résilience',
      tip: 'L\'accent est sur la deuxième syllabe : re-ZIL-yence. Le premier « e » est /ɪ/ bref, PAS /e/ ouvert. Le « i » de la syllabe accentuée est /ɪ/ aussi. Ne dites PAS /reziljɑ̃s/ à la française.'
    },
    {
      word: 'phobia',
      phonetic: '/ˈfəʊbiə/',
      meaning: 'phobie',
      tip: 'Le « ph » se prononce /f/, comme toujours en anglais. Le « o » est /əʊ/ (diphtongue britannique) ou /oʊ/ (américain), PAS /ɔ/ français. Dites « FO-bee-ə » avec l\'accent sur la première syllabe.'
    },
    {
      word: 'psychosis',
      phonetic: '/saɪˈkəʊsɪs/',
      meaning: 'psychose',
      tip: 'Le « p » initial est MUET en anglais ! Dites « sy-KO-sis », PAS « psy-KO-sis ». C\'est une erreur très courante chez les francophones. Même règle pour « psychology », « psychiatrist », « psychopath » : le « p » ne se prononce jamais.'
    }
  ]
}
