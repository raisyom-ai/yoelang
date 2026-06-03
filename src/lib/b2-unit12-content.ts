import type { LessonContent } from './lesson-content'

// B2 Unit 12: Advanced Writing (b2-l56 to b2-l60)

export const B2_L56: LessonContent = {
  vocab: [
    {
      english: 'draft',
      french: 'brouillon',
      phonetic: '/dræft/',
      example: 'I need to revise the first draft of my essay before submitting it.',
      exampleTranslation: 'Je dois réviser le premier brouillon de ma dissertation avant de le soumettre.'
    },
    {
      english: 'thesis statement',
      french: 'énoncé de thèse',
      phonetic: '/ˈθiːsɪs ˈsteɪtmənt/',
      example: 'A strong thesis statement clearly expresses the main argument of your essay.',
      exampleTranslation: 'Un énoncé de thèse solide exprime clairement l\'argument principal de votre dissertation.'
    },
    {
      english: 'editorial',
      french: 'éditorial',
      phonetic: '/ˌedɪˈtɔːriəl/',
      example: 'The newspaper published an editorial criticising the government\'s new policy.',
      exampleTranslation: 'Le journal a publié un éditorial critiquant la nouvelle politique du gouvernement.'
    },
    {
      english: 'proofread',
      french: 'relire / corriger',
      phonetic: '/ˈpruːfriːd/',
      example: 'Always proofread your work carefully before handing it in.',
      exampleTranslation: 'Relisez toujours votre travail attentivement avant de le rendre.'
    },
    {
      english: 'paraphrase',
      french: 'paraphraser',
      phonetic: '/ˈpærəfreɪz/',
      example: 'You should paraphrase the source rather than copying it word for word.',
      exampleTranslation: 'Vous devriez paraphraser la source plutôt que de la copier mot pour mot.'
    }
  ],
  grammar: {
    title: 'Les noms composés liés à l\'écriture',
    explanation: 'En anglais, de nombreux termes liés à l\'écriture sont des noms composés (compound nouns). Ils peuvent être écrits en un seul mot (proofreader), avec un trait d\'union (well-written) ou en deux mots séparés (thesis statement). Il n\'y a pas de règle fixe — il faut les apprendre au cas par cas. Attention : l\'accent principal tombe souvent sur le premier élément (EDITORIAL writer, pas editorial WRITER).',
    examples: [
      { sentence: 'She is a skilled proofreader.', translation: 'C\'est une correctrice compétente.', isCorrect: true },
      { sentence: 'She is a skilled proof reader.', translation: 'C\'est une correctrice compétente.', isCorrect: false },
      { sentence: 'The well-written article impressed the editor.', translation: 'L\'article bien écrit a impressionné le rédacteur.', isCorrect: true },
      { sentence: 'The well written article impressed the editor.', translation: 'L\'article bien écrit a impressionné le rédacteur.', isCorrect: false },
      { sentence: 'He submitted his first draft on time.', translation: 'Il a soumis son premier brouillon à temps.', isCorrect: true },
      { sentence: 'He submitted his first-draft on time.', translation: 'Il a soumis son premier brouillon à temps.', isCorrect: false }
    ],
    commonMistakes: [
      { wrong: 'proof reader', correct: 'proofreader', explanation: 'Proofreader s\'écrit en un seul mot, comme beaucoup de noms de métiers composés en anglais (copywriter, typewriter).' },
      { wrong: 'thesis-statement', correct: 'thesis statement', explanation: 'Thesis statement s\'écrit en deux mots séparés, sans trait d\'union. Ce n\'est pas un mot composé fusionné.' },
      { wrong: 'well written article', correct: 'well-written article', explanation: 'Quand well + participe passé précède un nom, on utilise un trait d\'union : well-written, well-known, well-structured.' }
    ]
  },
  conversation: [
    { speaker: 'Amara', role: 'A', text: 'Have you finished the first draft of your research paper yet?', translation: 'As-tu fini le premier brouillon de ton travail de recherche ?' },
    { speaker: 'Kenji', role: 'B', text: 'Almost. I\'m still refining my thesis statement — I want it to be more precise.', translation: 'Presque. J\'affine encore mon énoncé de thèse — je veux qu\'il soit plus précis.' },
    { speaker: 'Amara', role: 'A', text: 'That\'s smart. A weak thesis statement can undermine the entire essay.', translation: 'C\'est intelligent. Un énoncé de thèse faible peut compromettre toute la dissertation.' },
    { speaker: 'Kenji', role: 'B', text: 'Exactly. I also need to paraphrase a few sources properly to avoid plagiarism.', translation: 'Exactement. Je dois aussi paraphraser correctement quelques sources pour éviter le plagiat.' },
    { speaker: 'Amara', role: 'A', text: 'Don\'t forget to proofread before you submit — even small errors can cost marks.', translation: 'N\'oublie pas de relire avant de soumettre — même de petites erreurs peuvent faire perdre des points.' },
    { speaker: 'Kenji', role: 'B', text: 'I\'ll set it aside for a day and then proofread with fresh eyes. That usually works best.', translation: 'Je vais le laisser de côté un jour puis relire avec un regard neuf. Ça marche généralement le mieux.' }
  ],
  conversationTitle: 'Preparing a Research Paper',
  pronunciation: [
    { word: 'draft', phonetic: '/dræft/', meaning: 'brouillon', tip: 'Le son /æ/ n\'existe pas en français. Ouvrez la bouche plus que pour un « a » français, comme entre « a » et « è ». Ne dites pas /draːft/.' },
    { word: 'thesis', phonetic: '/ˈθiːsɪs/', meaning: 'thèse', tip: 'Le « th » anglais /θ/ se prononce en plaçant la langue entre les dents. Ne le remplacez pas par le « s » français. Dites bien /θiːsɪs/, pas /siːsis/.' },
    { word: 'editorial', phonetic: '/ˌedɪˈtɔːriəl/', meaning: 'éditorial', tip: 'L\'accent tonique tombe sur la syllabe « tor » : /ˌedɪˈtɔːriəl/. En français on dirait « éditorial » avec l\'accent sur le début — en anglais c\'est sur l\'avant-dernière syllabe.' },
    { word: 'paraphrase', phonetic: '/ˈpærəfreɪz/', meaning: 'paraphraser', tip: 'Le premier « a » est un /æ/ (ouvert), le deuxième est un /ə/ (schwa). Ne prononcez pas les deux de la même façon. /ˈpærəfreɪz/, pas /paʁafʁaz/.' }
  ]
}

export const B2_L57: LessonContent = {
  vocab: [
    {
      english: 'notwithstanding',
      french: 'nonobstant / malgré',
      phonetic: '/ˌnɒtwɪθˈstændɪŋ/',
      example: 'The evidence is limited; notwithstanding, the findings suggest a clear trend.',
      exampleTranslation: 'Les preuves sont limitées ; nonobstant cela, les résultats suggèrent une tendance claire.'
    },
    {
      english: 'in addition',
      french: 'en outre / de surcroît',
      phonetic: '/ɪn əˈdɪʃn/',
      example: 'The proposal is cost-effective. In addition, it reduces environmental impact.',
      exampleTranslation: 'La proposition est rentable. En outre, elle réduit l\'impact environnemental.'
    },
    {
      english: 'in contrast',
      french: 'en revanche / par contraste',
      phonetic: '/ɪn ˈkɒntræst/',
      example: 'Urban areas have high pollution levels. In contrast, rural regions remain relatively clean.',
      exampleTranslation: 'Les zones urbaines ont des niveaux de pollution élevés. En revanche, les régions rurales restent relativement propres.'
    },
    {
      english: 'as a consequence',
      french: 'en conséquence / par voie de conséquence',
      phonetic: '/æz ə ˈkɒnsɪkwəns/',
      example: 'Demand has fallen sharply; as a consequence, prices have dropped.',
      exampleTranslation: 'La demande a fortement chuté ; en conséquence, les prix ont baissé.'
    },
    {
      english: 'cohesive',
      french: 'cohésif',
      phonetic: '/koʊˈhiːsɪv/',
      example: 'A cohesive text flows logically from one paragraph to the next.',
      exampleTranslation: 'Un texte cohésif s\'enchaîne logiquement d\'un paragraphe à l\'autre.'
    }
  ],
  grammar: {
    title: 'Les mots de liaison et la cohésion textuelle',
    explanation: 'En anglais, les mots de liaison (linking words / discourse markers) sont essentiels pour assurer la cohésion et la cohérence d\'un texte. On les classe par fonction : addition (in addition, moreover), contraste (however, notwithstanding, in contrast), cause/conséquence (as a consequence, therefore, as a result), et conclusion (in conclusion, to sum up). « Notwithstanding » est plus formel que « however » et s\'emploie souvent en début de phrase ou après un point-virgule. « In addition » est une alternative à « furthermore » pour ajouter un argument sans alourdir le style. « As a consequence » est plus emphatique que « consequently » et convient aux transitions entre paragraphes. « Cohesive » décrit un texte dont les parties sont bien liées, contrairement à « coherent » qui décrit un argument logique. Attention à la ponctuation : beaucoup de ces connecteurs sont suivis d\'une virgule quand ils sont en début de phrase.',
    examples: [
      { sentence: 'Notwithstanding the limitations, the results suggest a clear pattern.', translation: 'Nonobstant les limites, les résultats suggèrent un schéma clair.', isCorrect: true },
      { sentence: 'Notwithstanding of the limitations, the results suggest a clear pattern.', translation: '', isCorrect: false },
      { sentence: 'The data is incomplete. In addition, the sample size is too small.', translation: 'Les données sont incomplètes. En outre, la taille de l\'échantillon est trop petite.', isCorrect: true },
      { sentence: 'The data is incomplete, in addition, the sample size is too small.', translation: '', isCorrect: false },
      { sentence: 'The experiment failed; as a consequence, we revised our hypothesis.', translation: 'L\'expérience a échoué ; en conséquence, nous avons révisé notre hypothèse.', isCorrect: true },
      { sentence: 'The experiment failed, as a consequence, we revised our hypothesis.', translation: '', isCorrect: false }
    ],
    commonMistakes: [
      { wrong: 'The project was delayed, notwithstanding we met the deadline.', correct: 'The project was delayed; notwithstanding, we met the deadline.', explanation: 'Notwithstanding est un adverbe connecteur, pas une conjonction de coordination. Il faut un point-virgule ou un point devant, et une virgule après s\'il commence la phrase suivante.' },
      { wrong: 'Notwithstanding of the risks, we proceeded.', correct: 'Notwithstanding the risks, we proceeded.', explanation: '« Notwithstanding » est suivi directement d\'un nom, sans « of ». On dit « notwithstanding the risks », pas « notwithstanding of the risks ». C\'est différent de « in spite of » qui exige « of ».' },
      { wrong: 'In addition is important to note that…', correct: 'In addition, it is important to note that…', explanation: 'In addition ne remplace pas le sujet « it ». On écrit : « In addition, it is important… ». Ne supprimez pas le sujet comme en français où on peut dire « En outre, il est important… ».' }
    ]
  },
  conversation: [
    { speaker: 'Priya', role: 'A', text: 'I\'m struggling with the cohesion of my essay. The paragraphs feel disconnected.', translation: 'J\'ai du mal avec la cohésion de ma dissertation. Les paragraphes semblent déconnectés.' },
    { speaker: 'Lukas', role: 'B', text: 'Have you tried using discourse markers? Words like \'in addition\' and \'in contrast\' help guide the reader between paragraphs.', translation: 'As-tu essayé d\'utiliser des marqueurs discursifs ? Des mots comme « in addition » et « in contrast » aident à guider le lecteur entre les paragraphes.' },
    { speaker: 'Priya', role: 'A', text: 'I\'ve used a few, but I\'m not sure about the punctuation. Do you always need a comma after them?', translation: 'J\'en ai utilisé quelques-uns, mais je ne suis pas sûr de la ponctuation. Faut-il toujours une virgule après ?' },
    { speaker: 'Lukas', role: 'B', text: 'At the start of a sentence, yes. But \'notwithstanding\' can also come before a noun without a comma: \'Notwithstanding the risks…\'', translation: 'Au début d\'une phrase, oui. Mais « notwithstanding » peut aussi précéder un nom sans virgule : « Notwithstanding the risks… »' },
    { speaker: 'Priya', role: 'A', text: 'That makes sense. I also tend to overuse \'however\' — my tutor says it gets repetitive.', translation: 'Ça a du sens. J\'ai aussi tendance à trop utiliser « however » — mon tuteur dit que ça devient répétitif.' },
    { speaker: 'Lukas', role: 'B', text: 'Try varying it with \'notwithstanding\', \'on the other hand\', or \'yet\'. Each has a slightly different nuance for paragraph transitions.', translation: 'Essaie de varier avec « notwithstanding », « on the other hand » ou « yet ». Chacun a une nuance légèrement différente pour les transitions entre paragraphes.' }
  ],
  conversationTitle: 'Improving Text Coherence',
  pronunciation: [
    { word: 'notwithstanding', phonetic: '/ˌnɒtwɪθˈstændɪŋ/', meaning: 'nonobstant', tip: 'L\'accent est sur « STAND » : /ˌnɒtwɪθˈSTændɪŋ/. Le « th » /θ/ est sourd — langue entre les dents, soufflez. Ne dites PAS « not-wiss-tan-ding ». C\'est un mot formel parfait pour les transitions de paragraphe.' },
    { word: 'in addition', phonetic: '/ɪn əˈdɪʃn/', meaning: 'en outre', tip: 'L\'accent est sur « DI » : /ɪn əˈDɪʃn/. Le « dd » se prononce comme un seul /d/. La terminaison « -tion » = /ʃn/ rapide. Ne dites pas « in a-dee-see-on » à la française.' },
    { word: 'as a consequence', phonetic: '/æz ə ˈkɒnsɪkwəns/', meaning: 'en conséquence', tip: 'L\'accent est sur « CON » : /æz ə ˈKɒnsɪkwəns/. Plus emphatique que « consequently » — idéal pour les transitions fortes entre paragraphes. Le « qu » se prononce /kw/.' },
    { word: 'cohesive', phonetic: '/koʊˈhiːsɪv/', meaning: 'cohésif', tip: 'Accent sur « HEE » : /koʊˈHIːsɪv/. Le « h » est aspiré ! Contrairement au français « cohésif » avec « h » muet. Attention aussi au « s » qui est /s/ sourd, pas /z/.' }
  ]
}

export const B2_L58: LessonContent = {
  vocab: [
    {
      english: 'persuasive',
      french: 'persuasif / convaincant',
      phonetic: '/pərˈsweɪsɪv/',
      example: 'The editorial presented a persuasive argument in favour of renewable energy.',
      exampleTranslation: 'L\'éditorial a présenté un argument convaincant en faveur des énergies renouvelables.'
    },
    {
      english: 'stance',
      french: 'position / prise de position',
      phonetic: '/stæns/',
      example: 'The author took a clear stance on the issue of climate change.',
      exampleTranslation: 'L\'auteur a pris une position claire sur la question du changement climatique.'
    },
    {
      english: 'compelling',
      french: 'convaincant / saisissant',
      phonetic: '/kəmˈpelɪŋ/',
      example: 'She made a compelling case for reforming the education system.',
      exampleTranslation: 'Elle a plaqué de façon convaincante pour la réforme du système éducatif.'
    },
    {
      english: 'bias',
      french: 'parti pris / biais',
      phonetic: '/ˈbaɪəs/',
      example: 'Readers should be aware of the author\'s potential bias when reading editorials.',
      exampleTranslation: 'Les lecteurs doivent être conscients du biais potentiel de l\'auteur en lisant les éditoriaux.'
    },
    {
      english: 'rhetoric',
      french: 'rhétorique',
      phonetic: '/ˈretərɪk/',
      example: 'Effective rhetoric can sway public opinion on controversial topics.',
      exampleTranslation: 'Une rhétorique efficace peut influencer l\'opinion publique sur des sujets controversés.'
    }
  ],
  grammar: {
    title: 'Les expressions d\'opinion et de prise de position',
    explanation: 'En anglais, pour exprimer une opinion dans un éditorial ou un texte argumentatif, on utilise des structures spécifiques. « From my perspective » et « In my view » sont plus formels que « I think ». « It is widely argued that… » permet d\'attribuer une opinion à un groupe. « The evidence suggests that… » présente une conclusion basée sur des faits. Attention : « According to me » n\'existe PAS en anglais standard — on dit « In my opinion » ou « From my perspective ».',
    examples: [
      { sentence: 'From my perspective, the policy is fundamentally flawed.', translation: 'De mon point de vue, la politique est fondamentalement défectueuse.', isCorrect: true },
      { sentence: 'According to me, the policy is fundamentally flawed.', translation: 'De mon point de vue, la politique est fondamentalement défectueuse.', isCorrect: false },
      { sentence: 'It is widely argued that social media harms mental health.', translation: 'Il est largement soutenu que les réseaux sociaux nuisent à la santé mentale.', isCorrect: true },
      { sentence: 'It is widely argued that social media harm mental health.', translation: 'Il est largement soutenu que les réseaux sociaux nuisent à la santé mentale.', isCorrect: false },
      { sentence: 'The evidence suggests that early intervention is crucial.', translation: 'Les preuves suggèrent que l\'intervention précoce est cruciale.', isCorrect: true },
      { sentence: 'The evidences suggest that early intervention is crucial.', translation: 'Les preuves suggèrent que l\'intervention précoce est cruciale.', isCorrect: false }
    ],
    commonMistakes: [
      { wrong: 'According to me, this is the best approach.', correct: 'In my opinion, this is the best approach.', explanation: '« According to » s\'utilise pour rapporter les propos ou idées de quelqu\'un d\'autre (According to the report…), pas pour exprimer sa propre opinion. Dites « In my opinion » ou « From my perspective ».' },
      { wrong: 'The evidences show…', correct: 'The evidence shows…', explanation: 'Evidence est un nom indénombrable en anglais — il ne prend jamais de « s ». Comme information, advice et news, il est toujours au singulier.' },
      { wrong: 'I am agree with this view.', correct: 'I agree with this view.', explanation: 'Agree est un verbe, pas un adjectif. On dit « I agree », pas « I am agree ». C\'est une erreur très courante chez les francophones (« je suis d\'accord » → « I am agree »).' }
    ]
  },
  conversation: [
    { speaker: 'Fatima', role: 'A', text: 'Did you read the editorial in today\'s paper about the new housing policy?', translation: 'As-tu lu l\'éditorial dans le journal d\'aujourd\'hui sur la nouvelle politique du logement ?' },
    { speaker: 'Mateo', role: 'B', text: 'Yes, the author took a strong stance against it. I found the argument quite persuasive, actually.', translation: 'Oui, l\'auteur a pris une position ferme contre. J\'ai trouvé l\'argument assez convaincant, en fait.' },
    { speaker: 'Fatima', role: 'A', text: 'I agree, though I couldn\'t help noticing a slight bias — they barely mentioned the benefits.', translation: 'Je suis d\'accord, mais je n\'ai pas pu m\'empêcher de remarquer un léger biais — ils n\'ont presque pas mentionné les avantages.' },
    { speaker: 'Mateo', role: 'B', text: 'That\'s true. A good editorial should acknowledge counterarguments before dismissing them.', translation: 'C\'est vrai. Un bon éditorial devrait reconnaître les contre-arguments avant de les écarter.' },
    { speaker: 'Fatima', role: 'A', text: 'Exactly. The rhetoric was compelling, but it lacked balance. From my perspective, that weakens the overall argument.', translation: 'Exactement. La rhétorique était convaincante, mais il manquait d\'équilibre. De mon point de vue, ça affaiblit l\'argument global.' },
    { speaker: 'Mateo', role: 'B', text: 'Well said. When I write editorials, I always try to present the opposing view fairly before refuting it.', translation: 'Bien dit. Quand j\'écris des éditoriaux, j\'essaie toujours de présenter le point de vue adverse équitablement avant de le réfuter.' }
  ],
  conversationTitle: 'Analysing an Editorial',
  pronunciation: [
    { word: 'persuasive', phonetic: '/pərˈsweɪsɪv/', meaning: 'persuasif', tip: 'Accent sur la deuxième syllabe : /pərˈSWEɪsɪv/. Les francophones ont tendance à dire /peʁsuaːziv/ — attention au « w » glissé qui n\'existe pas en français et au « s » qui reste /s/ (pas /z/).' },
    { word: 'stance', phonetic: '/stæns/', meaning: 'position', tip: 'Le « a » est un /æ/ très ouvert, pas un « a » français. Rapprochez-le d\'un « è » avec la bouche plus ouverte. Ne dites pas /stɑːns/.' },
    { word: 'compelling', phonetic: '/kəmˈpelɪŋ/', meaning: 'convaincant', tip: 'Accent sur la deuxième syllabe : /kəmˈPELɪŋ/. Le « ng » final /ɪŋ/ ne se prononce PAS comme « in » français — le son est nasal anglais avec la langue à l\'arrière du palais.' },
    { word: 'rhetoric', phonetic: '/ˈretərɪk/', meaning: 'rhétorique', tip: 'Accent sur la PREMIÈRE syllabe : /ˈRETərɪk/. Le « h » est muet en anglais dans ce mot (comme rhythm, rhino). Ne dites pas /ʁeˈtɔʁik/ à la française.' }
  ]
}

export const B2_L59: LessonContent = {
  vocab: [
    {
      english: 'introduction',
      french: 'introduction',
      phonetic: '/ˌɪntrəˈdʌkʃən/',
      example: 'The introduction should outline the scope and purpose of your essay.',
      exampleTranslation: 'L\'introduction devrait présenter le cadre et l\'objectif de votre dissertation.'
    },
    {
      english: 'body paragraph',
      french: 'paragraphe de développement',
      phonetic: '/ˈbɒdi ˈpærəɡræf/',
      example: 'Each body paragraph should focus on a single main idea supported by evidence.',
      exampleTranslation: 'Chaque paragraphe de développement devrait se concentrer sur une seule idée principale appuyée par des preuves.'
    },
    {
      english: 'conclusion',
      french: 'conclusion',
      phonetic: '/kənˈkluːʒən/',
      example: 'The conclusion summarises the key points without introducing new arguments.',
      exampleTranslation: 'La conclusion résume les points clés sans introduire de nouveaux arguments.'
    },
    {
      english: 'topic sentence',
      french: 'phrase thématique',
      phonetic: '/ˈtɒpɪk ˈsentəns/',
      example: 'A clear topic sentence at the beginning of each paragraph helps the reader follow your argument.',
      exampleTranslation: 'Une phrase thématique claire au début de chaque paragraphe aide le lecteur à suivre votre argumentation.'
    },
    {
      english: 'outline',
      french: 'plan / ébauche',
      phonetic: '/ˈaʊtlaɪn/',
      example: 'Before writing, create an outline to organise your ideas logically.',
      exampleTranslation: 'Avant d\'écrire, créez un plan pour organiser vos idées logiquement.'
    }
  ],
  grammar: {
    title: 'La structure d\'une dissertation académique anglaise',
    explanation: 'Une dissertation académique anglaise suit une structure précise : introduction (avec thesis statement), body paragraphs (chacun avec un topic sentence, des preuves et une analyse), et conclusion. Chaque body paragraph suit souvent le modèle PEEL : Point (topic sentence), Evidence (citation ou donnée), Explanation (analyse du lien avec la thèse), Link (transition vers le paragraphe suivant). Contrairement à la dissertation française, on ne fait pas de « plan dialectique » systématique (thèse-antithèse-synthèse) — le modèle anglo-saxon est plus linéaire et direct.',
    examples: [
      { sentence: 'This essay will argue that technology has transformed education in three key ways.', translation: 'Cet essai soutiendra que la technologie a transformé l\'éducation de trois manières clés.', isCorrect: true },
      { sentence: 'In this essay, I will talk about technology and education.', translation: 'Dans cet essai, je parlerai de la technologie et de l\'éducation.', isCorrect: false },
      { sentence: 'Firstly, technology has expanded access to educational resources.', translation: 'Premièrement, la technologie a élargi l\'accès aux ressources éducatives.', isCorrect: true },
      { sentence: 'First of all, the thing about technology is that it has expanded access to educational resources.', translation: 'Tout d\'abord, la chose à propos de la technologie est qu\'elle a élargi l\'accès aux ressources éducatives.', isCorrect: false },
      { sentence: 'In conclusion, the evidence demonstrates that technology has significantly reshaped modern education.', translation: 'En conclusion, les preuves démontrent que la technologie a considérablement remodelé l\'éducation moderne.', isCorrect: true },
      { sentence: 'To conclude, I think technology changed education a lot.', translation: 'Pour conclure, je pense que la technologie a beaucoup changé l\'éducation.', isCorrect: false }
    ],
    commonMistakes: [
      { wrong: 'In this essay, I will talk about…', correct: 'This essay will examine/argue that…', explanation: '« Talk about » est trop informel pour une dissertation académique. Utilisez des verbes plus précis et formels : examine, argue, analyse, explore, demonstrate. De plus, évitez « I will » dans les dissertations académiques — préférez la voix impersonnelle.' },
      { wrong: 'First of all, the thing about this issue is that…', correct: 'Firstly, this issue can be understood through…', explanation: '« The thing about… is that… » est trop familier pour l\'écrit académique. Soyez direct et précis. Chaque paragraphe doit commencer par un topic sentence clair et concis.' },
      { wrong: 'In conclusion, I think that…', correct: 'In conclusion, the evidence indicates that…', explanation: 'Dans la conclusion académique anglaise, évitez « I think ». Basez votre conclusion sur les preuves présentées : « the evidence indicates/demonstrates/suggests that… ».' }
    ]
  },
  conversation: [
    { speaker: 'Yuki', role: 'A', text: 'I\'m having trouble organising my essay. My tutor says the structure is unclear.', translation: 'J\'ai du mal à organiser mon essai. Mon tuteur dit que la structure n\'est pas claire.' },
    { speaker: 'Aisha', role: 'B', text: 'Have you started with an outline? That always helps me see the big picture before I write.', translation: 'As-tu commencé par un plan ? Ça m\'aide toujours à voir l\'ensemble avant d\'écrire.' },
    { speaker: 'Yuki', role: 'A', text: 'Not really — I usually just start writing. But my topic sentences are weak, so the paragraphs don\'t flow.', translation: 'Pas vraiment — j\'écris généralement directement. Mais mes phrases thématiques sont faibles, donc les paragraphes ne s\'enchaînent pas.' },
    { speaker: 'Aisha', role: 'B', text: 'Try the PEEL method: Point, Evidence, Explanation, Link. It gives each body paragraph a clear structure.', translation: 'Essaie la méthode PEEL : Point, Preuve, Explication, Lien. Ça donne à chaque paragraphe de développement une structure claire.' },
    { speaker: 'Yuki', role: 'A', text: 'That sounds useful. What about the introduction and conclusion — any tips?', translation: 'Ça a l\'air utile. Et pour l\'introduction et la conclusion — des conseils ?' },
    { speaker: 'Aisha', role: 'B', text: 'Open with a strong thesis statement that previews your argument. Then conclude by showing how the evidence supports it — without introducing anything new.', translation: 'Commencez par un énoncé de thèse solide qui prévisualise votre argument. Puis concluez en montrant comment les preuves le soutiennent — sans rien introduire de nouveau.' }
  ],
  conversationTitle: 'Structuring an Academic Essay',
  pronunciation: [
    { word: 'introduction', phonetic: '/ˌɪntrəˈdʌkʃən/', meaning: 'introduction', tip: 'Accent sur la troisième syllabe : /ˌɪntrəˈDʌkʃən/. Les francophones disent souvent /ɛ̃tʁɔdyksjɔ̃/ — attention, le « u » anglais est /ʌ/ (comme dans « cup »), pas le « u » français.' },
    { word: 'paragraph', phonetic: '/ˈpærəɡræf/', meaning: 'paragraphe', tip: 'Accent sur la première syllabe : /ˈPærəɡræf/. Les deux « a » sont des /æ/. Ne dites pas /paʁaɡʁaf/ à la française.' },
    { word: 'conclusion', phonetic: '/kənˈkluːʒən/', meaning: 'conclusion', tip: 'Accent sur la deuxième syllabe : /kənˈKLUːʒən/. Le son /ʒ/ existe en français (comme dans « jour »), mais le « u » est /uː/ long, pas le « u » français fermé.' },
    { word: 'outline', phonetic: '/ˈaʊtlaɪn/', meaning: 'plan / ébauche', tip: 'Le « ou » en anglais est une diphtongue /aʊ/ qui commence comme un « a » et glisse vers « ou ». Ne prononcez pas /utlin/ — dites bien /Aʊtlaɪn/ avec les deux diphtongues bien marquées.' }
  ]
}

export const B2_L60: LessonContent = {
  vocab: [
    {
      english: 'manuscript',
      french: 'manuscrit',
      phonetic: '/ˈmænjʊskrɪpt/',
      example: 'The author submitted the manuscript to the publisher last month.',
      exampleTranslation: 'L\'auteur a soumis le manuscrit à l\'éditeur le mois dernier.'
    },
    {
      english: 'revise',
      french: 'réviser / modifier',
      phonetic: '/rɪˈvaɪz/',
      example: 'You should revise your essay several times before the final submission.',
      exampleTranslation: 'Vous devriez réviser votre dissertation plusieurs fois avant la soumission finale.'
    },
    {
      english: 'citation',
      french: 'citation / référence',
      phonetic: '/saɪˈteɪʃən/',
      example: 'Every citation must be properly formatted according to the style guide.',
      exampleTranslation: 'Chaque citation doit être correctement formatée selon le guide de style.'
    },
    {
      english: 'appendix',
      french: 'annexe',
      phonetic: '/əˈpendɪks/',
      example: 'Additional data can be found in the appendix at the end of the report.',
      exampleTranslation: 'Des données supplémentaires se trouvent dans l\'annexe à la fin du rapport.'
    },
    {
      english: 'plagiarism',
      french: 'plagiat',
      phonetic: '/ˈpleɪdʒərɪzəm/',
      example: 'Universities take plagiarism very seriously and impose severe penalties.',
      exampleTranslation: 'Les universités prennent le plagiat très au sérieux et imposent des sanctions sévères.'
    }
  ],
  grammar: {
    title: 'La voix passive dans l\'écriture académique',
    explanation: 'La voix passive est très utilisée dans l\'écriture académique anglaise pour mettre l\'accent sur le résultat ou le processus plutôt que sur l\'agent. Structure : sujet + be (au temps voulu) + participe passé. Exemple : « The study was conducted in 2023. » Attention, la voix passive n\'est pas « plus formelle » — elle est simplement plus impersonnelle. Ne l\'abusez pas : alternez voix active et passive pour garder un texte dynamique. En français, la voix passive s\'utilise aussi, mais l\'anglais l\'emploie encore plus fréquemment dans les textes académiques.',
    examples: [
      { sentence: 'The data were analysed using statistical software.', translation: 'Les données ont été analysées à l\'aide d\'un logiciel statistique.', isCorrect: true },
      { sentence: 'The data was analysed using statistical software.', translation: 'Les données ont été analysées à l\'aide d\'un logiciel statistique.', isCorrect: false },
      { sentence: 'It has been argued that climate change is accelerating.', translation: 'Il a été soutenu que le changement climatique s\'accélère.', isCorrect: true },
      { sentence: 'It has argued that climate change is accelerating.', translation: 'Il a été soutenu que le changement climatique s\'accélère.', isCorrect: false },
      { sentence: 'The manuscript was submitted before the deadline.', translation: 'Le manuscrit a été soumis avant la date limite.', isCorrect: true },
      { sentence: 'The manuscript was submit before the deadline.', translation: 'Le manuscrit a été soumis avant la date limite.', isCorrect: false }
    ],
    commonMistakes: [
      { wrong: 'The data was collected…', correct: 'The data were collected…', explanation: 'Data est le pluriel de datum en anglais académique. Avec data, on utilise donc were, not was. Cependant, dans l\'anglais courant, « the data was » est de plus en plus accepté — mais en contexte académique formel, préférez « were ».' },
      { wrong: 'It has argued that…', correct: 'It has been argued that…', explanation: 'Pour exprimer qu\'un argument a été avancé par quelqu\'un (sans préciser qui), il faut le passif : « It has been argued that… ». Sans « been », la phrase n\'a pas de sens — « it » ne peut pas « arguer » lui-même.' },
      { wrong: 'The essay was wrote by a student.', correct: 'The essay was written by a student.', explanation: 'Le passif utilise BE + participe passé, pas BE + prétérit. Write → written (participe passé), pas wrote (prétérit). Mémorisez les formes irrégulières !' }
    ]
  },
  conversation: [
    { speaker: 'Dmitri', role: 'A', text: 'I\'ve just finished revising my manuscript. Could you check the citations for me?', translation: 'Je viens de finir de réviser mon manuscrit. Pourrais-tu vérifier les citations pour moi ?' },
    { speaker: 'Nadia', role: 'B', text: 'Of course. Which citation style are you using — APA or MLA?', translation: 'Bien sûr. Quel style de citation utilises-tu — APA ou MLA ?' },
    { speaker: 'Dmitri', role: 'A', text: 'APA. I always get confused about whether to use the passive voice in the methods section.', translation: 'APA. Je me trompe toujours sur l\'utilisation de la voix passive dans la section méthodologie.' },
    { speaker: 'Nadia', role: 'B', text: 'The passive is actually standard there — "The participants were selected" rather than "We selected the participants".', translation: 'Le passif est en fait la norme là — « The participants were selected » plutôt que « We selected the participants ».' },
    { speaker: 'Dmitri', role: 'A', text: 'Good point. And should I include the raw data in an appendix or just summarise it in the results?', translation: 'Bon point. Et devrais-je inclure les données brutes en annexe ou juste les résumer dans les résultats ?' },
    { speaker: 'Nadia', role: 'B', text: 'Summarise it in the results section and put the full dataset in the appendix. That keeps the main text readable.', translation: 'Résume-les dans la section résultats et mets le jeu de données complet en annexe. Ça garde le texte principal lisible.' }
  ],
  conversationTitle: 'Finalising a Manuscript',
  pronunciation: [
    { word: 'manuscript', phonetic: '/ˈmænjʊskrɪpt/', meaning: 'manuscrit', tip: 'Accent sur la première syllabe : /ˈMænjʊskrɪpt/. Le « a » est /æ/ (ouvert), pas /a/ français. Ne dites pas /manyskʁi/ — prononcez bien toutes les syllabes.' },
    { word: 'revise', phonetic: '/rɪˈvaɪz/', meaning: 'réviser', tip: 'Accent sur la deuxième syllabe : /rɪˈVAɪz/. Le « i » de la première syllabe est un /ɪ/ court (comme dans « sit »), pas /iː/ long. Ne dites pas /ʁeviːz/.' },
    { word: 'citation', phonetic: '/saɪˈteɪʃən/', meaning: 'citation / référence', tip: 'Accent sur la deuxième syllabe : /saɪˈTEɪʃən/. Le premier « c » se prononce /s/ (comme «サイ » en japonais), pas /k/. Ne dites pas /kitaːsjɔ̃/.' },
    { word: 'plagiarism', phonetic: '/ˈpleɪdʒərɪzəm/', meaning: 'plagiat', tip: 'Accent sur la première syllabe : /ˈPLEɪdʒərɪzəm/. Le « g » est /dʒ/ (comme dans « jump »), pas /ʒ/ français. Ne dites pas /plaʒaʁism/ — c\'est /pleɪdʒərɪzəm/.' }
  ]
}
