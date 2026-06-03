import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C2 MASTERY — UNIT 1: NATIVE-LEVEL EXPRESSIONS (c2-l1 through c2-l5)
// YOELANG English Learning App for Francophone Users
// Near-native mastery: slang, register variation, native conversation, dialect, connected speech
// ════════════════════════════════════════════════════════════════════════════════

// ─── c2-l1: Slang Vocabulary ────────────────────────────────────────────────────
export const C2_L1: LessonContent = {
  vocab: [
    { english: 'knackered', french: 'crevé / épuisé', phonetic: '/ˈnækərd/', example: 'I\'m absolutely knackered after that 12-hour shift.', exampleTranslation: 'Je suis complètement crevé après ce quart de 12 heures.' },
    { english: 'gobsmacked', french: 'ébahi / stupéfait', phonetic: '/ˈɡɒbsmækt/', example: 'When she announced she was leaving, I was gobsmacked.', exampleTranslation: 'Quand elle a annoncé qu\'elle partait, j\'étais stupéfait.' },
    { english: 'chuffed', french: 'ravie / enchanté', phonetic: '/tʃʌft/', example: 'He was chuffed to bits when he got the promotion.', exampleTranslation: 'Il était aux anges quand il a eu la promotion.' },
    { english: 'bob\'s your uncle', french: 'et le tour est joué', phonetic: '/ˌbɒbz jɔːr ˈʌŋkl/', example: 'Just plug it in, press the button, and bob\'s your uncle!', exampleTranslation: 'Branche-le, appuie sur le bouton, et le tour est joué !' },
    { english: 'pear-shaped', french: 'mal tourné / qui tourne au vinaigre', phonetic: '/ˈpeər ʃeɪpt/', example: 'The whole project went pear-shaped after the funding was cut.', exampleTranslation: 'Tout le projet a tourné au vinaigre après la coupe du financement.' },
  ],
  grammar: {
    title: 'L\'argot britannique et ses particularités grammaticales',
    explanation: 'L\'argot anglais (slang) ne se contente pas de remplacer des mots — il modifie parfois la structure grammaticale elle-même. En registre familier : (1) L\'ellipse du verbe « be » : « You mad? » au lieu de « Are you mad? » ; (2) L\'utilisation de « well » comme intensifieur au lieu de « very » : « well good », « well hard » ; (3) Le double négatif dialectal : « I ain\'t done nothing » (incorrect en anglais standard, mais courant à l\'oral) ; (4) Les contractions extrêmes : « gonna », « gotta », « dunno », « innit » (isn\'t it). Ces formes sont inacceptables à l\'écrit formel mais essentielles pour comprendre la parole native.',
    examples: [
      { sentence: 'You well mad if you think I\'m paying that!', translation: 'T\'es bien fou si tu crois que je vais payer ça !', isCorrect: true },
      { sentence: 'I ain\'t got no clue what he\'s on about.', translation: 'J\'ai aucune idée de ce qu\'il raconte.', isCorrect: true },
      { sentence: 'You was well angry yesterday, innit?', translation: '', isCorrect: false },
      { sentence: 'She\'s well chuffed about the result, fair play to her.', translation: 'Elle est bien ravie du résultat, ça se comprend.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'You was well angry yesterday, innit?', correct: 'You were well angry yesterday, innit?', explanation: 'Même en argot, « you » prend « were », pas « was ». L\'erreur est fréquente dans certains dialectes mais reste non standard.' },
      { wrong: 'I am knackered of working.', correct: 'I\'m knackered from working. / I\'m knackered after work.', explanation: '« Knackered » se construit avec « from » ou « after », jamais avec « of ». On est épuisé À CAUSE de quelque chose, pas DE quelque chose.' },
    ],
  },
  conversation: [
    { speaker: 'Jasmine', role: 'A', text: 'Mate, you look absolutely knackered. Rough night?', translation: 'Mon vieux, t\'as l\'air complètement crevé. Mauvaise nuit ?' },
    { speaker: 'Olly', role: 'B', text: 'You\'re not wrong. The baby was up half the night screaming the house down.', translation: 'T\'as pas tort. Le bébé a hurlé la moitié de la nuit.' },
    { speaker: 'Jasmine', role: 'A', text: 'Aw, bless. My sister\'s little one was the same — drove her round the bend.', translation: 'Oh, la pauvre. Le petit de ma sœur était pareil — ça l\'a rendue folle.' },
    { speaker: 'Olly', role: 'B', text: 'I tell you what, I was gobsmacked when the health visitor said it\'s totally normal.', translation: 'Je te jure, j\'étais ébahi quand la puéricultrice a dit que c\'est tout à fait normal.' },
    { speaker: 'Jasmine', role: 'A', text: 'Ha! Classic. Anyway, chin up — you\'ll get through it. Bob\'s your uncle.', translation: 'Ha ! Classique. Courage — tu vas y arriver. Et le tour est joué.' },
    { speaker: 'Olly', role: 'B', text: 'Cheers, Jas. I\'m chuffed you popped round, though — needed the chat.', translation: 'Merci, Jas. Je suis content que tu sois passée — j\'avais besoin de discuter.' },
    { speaker: 'Jasmine', role: 'A', text: 'Anytime. But if it all goes pear-shaped, you know where I am.', translation: 'Quand tu veux. Mais si tout tourne au vinaigre, tu sais où me trouver.' },
  ],
  conversationTitle: 'Entre amis : une nuit blanche',
  pronunciation: [
    { word: 'Knackered', phonetic: '/ˈnækərd/', meaning: 'Crevé', tip: 'Le « k » est bien prononcé : « nak-erd ». Ne confondez pas avec « naked » (/ˈneɪkɪd/). Le « er » final est réduit.' },
    { word: 'Gobsmacked', phonetic: '/ˈɡɒbsmækt/', meaning: 'Ébahi', tip: 'De « gob » (bouche en argot) + « smacked » (giflé) : « gob-smakt ». L\'image est celle d\'une gifle qui laisse bouche bée.' },
    { word: 'Chuffed', phonetic: '/tʃʌft/', meaning: 'Ravie', tip: 'Rime avec « stuffed » : « tcheuft ». Le « u » est ouvert comme dans « cut ». Le « ed » final ne fait qu\'une syllabe.' },
    { word: 'Pear-shaped', phonetic: '/ˈpeər ʃeɪpt/', meaning: 'Mal tourné', tip: '« Pair-cheipt » — le « ear » de pear se prononce comme « air ». Ne dites pas « pir ».' },
  ],
}

// ─── c2-l2: Register Shifts ─────────────────────────────────────────────────────
export const C2_L2: LessonContent = {
  vocab: [
    { english: 'to liaise', french: 'faire le lien / coordonner', phonetic: '/liˈeɪz/', example: 'I\'ll liaise with the Brussels office on this matter.', exampleTranslation: 'Je coordonnerai avec le bureau de Bruxelles sur cette question.' },
    { english: 'to wind down', french: 'se détendre / décompresser', phonetic: '/waɪnd daʊn/', example: 'After the conference, we wound down with a pint at the local.', exampleTranslation: 'Après la conférence, on s\'est détendus avec une pinte au pub du coin.' },
    { english: 'to flag up', french: 'signaler / attirer l\'attention sur', phonetic: '/flæɡ ʌp/', example: 'I just wanted to flag up a potential issue with the timeline.', exampleTranslation: 'Je voulais juste signaler un problème potentiel avec le calendrier.' },
    { english: 'to touch base', french: 'faire le point / reprendre contact', phonetic: '/tʌtʃ beɪs/', example: 'Let\'s touch base next week after the client meeting.', exampleTranslation: 'Faisons le point la semaine prochaine après la réunion client.' },
    { english: 'to crack on', french: 's\'y mettre / continuer sans tarder', phonetic: '/kræk ɒn/', example: 'Right, shall we crack on with the presentation then?', exampleTranslation: 'Bon, on s\'y met pour la présentation alors ?' },
  ],
  grammar: {
    title: 'Le code-switching et les changements de registre en anglais',
    explanation: 'Le « code-switching » désigne le passage d\'un registre à l\'autre au sein d\'un même échange. En anglais, cette compétence est cruciale : (1) Registre soutenu : inversion du sujet (« Seldom have we seen such... »), subjonctif (« It is imperative that he be informed »), vocabulaire latin (« facilitate » vs « help ») ; (2) Registre courant : contractions standard (« I\'d », « we\'ll »), structures directes ; (3) Registre familier : ellipses, argot, contractions extrêmes. Un locuteur natif passe naturellement d\'un registre à l\'autre selon l\'interlocuteur et la situation. L\'erreur typique du francophone est de rester bloqué dans un seul registre ou d\'utiliser un registre inadapté au contexte.',
    examples: [
      { sentence: 'It is incumbent upon us to ensure compliance with the regulations.', translation: 'Il nous incombe de veiller à la conformité avec les règlements.', isCorrect: true },
      { sentence: 'We gotta make sure we\'re following the rules, yeah?', translation: 'On doit s\'assurer qu\'on suit les règles, ok ?', isCorrect: true },
      { sentence: 'It is imperative that he submits the report by Friday.', translation: '', isCorrect: false },
      { sentence: 'I\'d like to flag up that we may need to revisit the timeline.', translation: 'Je voudrais signaler que nous pourrions avoir besoin de revoir le calendrier.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'It is imperative that he submits the report by Friday.', correct: 'It is imperative that he submit the report by Friday.', explanation: 'Après les adjectifs comme « imperative », « essential », « crucial », on utilise le subjonctif présent (sans « s » à la 3e personne) : « he submit », pas « he submits ».' },
      { wrong: 'I will liaise about the team.', correct: 'I will liaise with the team.', explanation: '« Liaise » se construit toujours avec « with » : liaise with someone. L\'erreur vient du français « liaiser avec » ou de la confusion avec « talk about ».' },
    ],
  },
  conversation: [
    { speaker: 'Nadia', role: 'A', text: 'Good morning, Mr Harrington. I\'m writing to follow up on our discussion regarding the Q3 projections.', translation: 'Bonjour, M. Harrington. Je vous écris pour faire suite à notre discussion concernant les projections du T3.' },
    { speaker: 'Giles', role: 'B', text: 'Ah, Nadia. Yes — do come in. I\'ve been meaning to touch base with you on that, as a matter of fact.', translation: 'Ah, Nadia. Oui — entrez donc. Je voulais justement faire le point avec vous à ce sujet.' },
    { speaker: 'Nadia', role: 'A', text: 'I wanted to flag up that the Brussels team have raised some concerns about the timeline.', translation: 'Je voulais signaler que l\'équipe de Bruxelles a soulevé des inquiétudes quant au calendrier.' },
    { speaker: 'Giles', role: 'B', text: 'Right. Well, perhaps you could liaise with them and revert by end of play Friday?', translation: 'D\'accord. Pourriez-vous peut-être coordonner avec eux et me revenir d\'ici vendredi en fin de journée ?' },
    { speaker: 'Nadia', role: 'A', text: 'Of course. I\'ll get right on it.', translation: 'Bien sûr. Je m\'y mets tout de suite.' },
    { speaker: 'Giles', role: 'B', text: 'Smashing. Cheers, Nadia. Oh — and once that\'s sorted, let\'s crack on with the Q4 planning, yeah?', translation: 'Super. Merci, Nadia. Oh — et une fois que c\'est réglé, on s\'y met pour la planification du T4, ok ?' },
    { speaker: 'Nadia', role: 'A', text: 'Absolutely. I\'ll wind down over the weekend and hit the ground running Monday.', translation: 'Absolument. Je vais décompresser ce week-end et attaquer à fond lundi.' },
  ],
  conversationTitle: 'Du bureau au détente : registres en action',
  pronunciation: [
    { word: 'Liaise', phonetic: '/liˈeɪz/', meaning: 'Coordonner', tip: 'Prononcez « li-ÉIZ » — l\'accent est sur la deuxième syllabe. C\'est un mot d\'origine française mais la prononciation est anglicisée.' },
    { word: 'Flag', phonetic: '/flæɡ/', meaning: 'Signaler', tip: 'Le « a » est très ouvert, comme dans « cat » : « flag ». Dans l\'expression « flag up », le « up » est inaccentué et rapide.' },
    { word: 'Revert', phonetic: '/rɪˈvɜːrt/', meaning: 'Revenir (vers quelqu\'un)', tip: 'En anglais des affaires, « revert » signifie « répondre / revenir vers quelqu\'un ». Prononcez « ri-VURT » avec le « r » final.' },
    { word: 'Crucial', phonetic: '/ˈkruːʃl/', meaning: 'Crucial', tip: 'Le « ci » se prononce « ch » : « KROU-chul ». Ne dites pas « kru-sial » à la française.' },
  ],
}

// ─── c2-l3: Native Conversation ─────────────────────────────────────────────────
export const C2_L3: LessonContent = {
  vocab: [
    { english: 'to ramble on', french: 'divaguer / parler sans fin', phonetic: '/ˈræmbl ɒn/', example: 'He just rambled on about his holiday for half an hour.', exampleTranslation: 'Il a divagué sur ses vacances pendant une demi-heure.' },
    { english: 'to beat around the bush', french: 'tourner autour du pot', phonetic: '/biːt əˈraʊnd ðə bʊʃ/', example: 'Stop beating around the bush and just tell me what happened.', exampleTranslation: 'Arrête de tourner autour du pot et dis-moi ce qui s\'est passé.' },
    { english: 'to nip it in the bud', french: 'étouffer dans l\'œuf', phonetic: '/nɪp ɪt ɪn ðə bʌd/', example: 'We need to nip this rumour in the bud before it spreads.', exampleTranslation: 'Il faut étouffer cette rumeur dans l\'œuf avant qu\'elle ne se propage.' },
    { english: 'to spill the beans', french: 'révéler le pot aux roses', phonetic: '/spɪl ðə biːnz/', example: 'Come on, spill the beans — what did she say?', exampleTranslation: 'Allez, crache le morceau — qu\'est-ce qu\'elle a dit ?' },
    { english: 'to play it by ear', french: 'improviser / jouer à l\'oreille', phonetic: '/pleɪ ɪt baɪ ɪr/', example: 'I don\'t have a plan — let\'s just play it by ear.', exampleTranslation: 'Je n\'ai pas de plan — Improvisons.' },
  ],
  grammar: {
    title: 'Les marqueurs du discours oral : hésitations, remplisseurs et atténuations',
    explanation: 'La conversation native est truffée de « fillers » (remplisseurs) et de « hedging » (atténuation) qui rendent le discours naturel : (1) Fillers : « you know », « I mean », « like », « sort of », « kind of », « right », « basically » ; (2) Hedging : « arguably », « to some extent », « I\'d say », « it seems to me that », « as far as I can tell » ; (3) Les locuteurs natifs utilisent systématiquement ces outils pour adoucir leurs affirmations ou gagner du temps de réflexion. Un francophone qui parle sans fillers sonne souvent trop direct ou trop hésitant. L\'astuce : insérez naturellement « I mean » ou « you know » pour rythmer votre discours, mais sans excès.',
    examples: [
      { sentence: 'I mean, it\'s sort of like, you know, when things just kind of fall into place.', translation: 'Je veux dire, c\'est en quelque sorte, vous savez, quand les choses se mettent en place toutes seules.', isCorrect: true },
      { sentence: 'It would arguably seem to perhaps suggest that maybe we could reconsider.', translation: 'On pourrait sans doute dire que cela semble suggérer que nous pourrions peut-être reconsidérer.', isCorrect: true },
      { sentence: 'Like, you know, he was like basically kind of like angry, like.', translation: '', isCorrect: false },
      { sentence: 'As far as I can tell, it\'s probably the best option we\'ve got, right?', translation: 'Autant que je puisse en juger, c\'est probablement la meilleure option qu\'on ait, non ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Like, you know, he was like basically kind of like angry, like.', correct: 'Like, he was basically sort of angry, you know?', explanation: 'L\'excès de « like » rend le discours immature et peu crédible. Un native speaker en utilise un ou deux par phrase, pas cinq. Le hedging doit rester subtil.' },
      { wrong: 'I think maybe it\'s possible that perhaps we should go.', correct: 'Maybe we should go. / I think we should probably go.', explanation: 'L\'accumulation d\'atténuateurs (« think », « maybe », « possible », « perhaps ») est redondante. Un seul ou deux suffisent pour hedge correctement.' },
    ],
  },
  conversation: [
    { speaker: 'Tom', role: 'A', text: 'So, look, I\'ve been meaning to ask you about that meeting — you know, the one on Tuesday.', translation: 'Alors, écoute, je voulais te poser une question sur cette réunion — tu sais, celle de mardi.' },
    { speaker: 'Sasha', role: 'B', text: 'Oh, right, yeah. I mean, it was sort of all over the place, to be honest.', translation: 'Oh, ouais. Je veux dire, c\'était un peu n\'importe quoi, pour être honnête.' },
    { speaker: 'Tom', role: 'A', text: 'That\'s what I heard. Did Greg really ramble on about the budget for an hour?', translation: 'C\'est ce que j\'ai entendu. Greg a vraiment divagué sur le budget pendant une heure ?' },
    { speaker: 'Sasha', role: 'B', text: 'Mate, don\'t even get me started. He was beating around the bush so much I thought he\'d never get to the point.', translation: 'Mon vieux, n\'en parle même pas. Il a tellement tourné autour du pot que je croyais qu\'il n\'arriverait jamais au but.' },
    { speaker: 'Tom', role: 'A', text: 'Someone should\'ve nipped that in the bud early on, surely?', translation: 'Quelqu\'un aurait dû étouffer ça dans l\'œuf dès le début, non ?' },
    { speaker: 'Sasha', role: 'B', text: 'Well, exactly. Anyway, come on — spill the beans. What did you hear about the Q4 figures?', translation: 'Eh ben exactement. Sinon, allez — crache le morceau. Qu\'est-ce que t\'as entendu sur les chiffres du T4 ?' },
    { speaker: 'Tom', role: 'A', text: 'I\'d rather play it by ear for now. Let\'s grab coffee and I\'ll fill you in properly.', translation: 'Je préfère improviser pour le moment. On prend un café et je te mets au courant en détail.' },
  ],
  conversationTitle: 'Au bureau : rumeurs et stratégies',
  pronunciation: [
    { word: 'Ramble', phonetic: '/ˈræmbl/', meaning: 'Divaguer', tip: 'Le « a » est ouvert comme dans « cat » : « RAM-bul ». Le « le » final se prononce « bul » comme dans « table ».' },
    { word: 'Bud', phonetic: '/bʌd/', meaning: 'Bourgeon (étouffer dans l\'œuf)', tip: 'Prononcez « beud » — le « u » est ouvert comme dans « cup ». Dans « nip it in the bud », tout se lie rapidement.' },
    { word: 'Spill', phonetic: '/spɪl/', meaning: 'Répandre / dévoiler', tip: 'Le « i » est court comme dans « bit » : « spil ». Ne le prononcez pas comme « speel » (i long).' },
    { word: 'Basically', phonetic: '/ˈbeɪsɪkli/', meaning: 'Fondamentalement', tip: 'À l\'oral, les natifs disent souvent « BAYS-klee » en avalant les syllabes du milieu. Ne prononcez PAS « bé-i-si-ka-li ».' },
  ],
}

// ─── c2-l4: Dialect Features ────────────────────────────────────────────────────
export const C2_L4: LessonContent = {
  vocab: [
    { english: 'wee', french: 'petit / petit coup', phonetic: '/wiː/', example: 'Just a wee moment, I\'ll be right with you.', exampleTranslation: 'Juste un petit instant, j\'arrive tout de suite.' },
    { english: 'bairn', french: 'enfant (écossais / nordique)', phonetic: '/beərn/', example: 'She\'s got three bairns under five.', exampleTranslation: 'Elle a trois enfants de moins de cinq ans.' },
    { english: 'lush', french: 'génial / super (sud de l\'Angleterre)', phonetic: '/lʌʃ/', example: 'That cake was absolutely lush!', exampleTranslation: 'Ce gâteau était absolument génial !' },
    { english: 'mucker', french: 'pote / copain (irlandais)', phonetic: '/ˈmʌkər/', example: 'He\'s a sound mucker — known him for years.', exampleTranslation: 'C\'est un bon pote — je le connais depuis des années.' },
    { english: 'bare', french: 'beaucoup de / plein de (Londres)', phonetic: '/beər/', example: 'There were bare people at the rave last night.', exampleTranslation: 'Il y avait plein de monde à la fête hier soir.' },
  ],
  grammar: {
    title: 'Les traits dialectaux et leurs implications grammaticales',
    explanation: 'Les dialectes anglais présentent des variations grammaticales significatives qui dépassent le simple vocabulaire : (1) Écosse / Nord : « we » au lieu de « us » (« Give we a hand »), « done » au lieu de « did » (« I done it yesterday ») ; (2) Irlande : l\'utilisation de « after » pour le perfectif récent (« I\'m after seeing him » = « Je viens de le voir »), « will » systématique au lieu de « shall » ; (3) Sud des États-Unis : « y\'all » (you all), « might could » (double modal), « fixin\' to » (être sur le point de) ; (4) Londres / Multicultural London English : « bare » comme intensifieur, inversion « we was » / « you was ». Comprendre ces traits est essentiel pour suivre des conversations régionales, mais il ne faut PAS les adopter artificiellement — restez dans votre propre registre naturel.',
    examples: [
      { sentence: 'I\'m after telling him twice already.', translation: 'Je viens de lui dire deux fois déjà.', isCorrect: true },
      { sentence: 'Y\'all might could want to check that again.', translation: 'Vous pourriez vouloir vérifier ça à nouveau.', isCorrect: true },
      { sentence: 'We was going to the shop, weren\'t we?', translation: '', isCorrect: false },
      { sentence: 'She\'s a canny lass, that one.', translation: 'C\'est une fille sympa, celle-là.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'We was going to the shop, weren\'t we?', correct: 'We were going to the shop, weren\'t we?', explanation: '« We was » est dialectal (Cockney, MLE) mais non standard. Si vous visez un anglais correct, utilisez toujours « we were ». Ne mélangez pas registre standard et traits dialectaux.' },
      { wrong: 'I am after eating the dinner.', correct: 'I\'m after eating dinner. / I\'ve just eaten dinner.', explanation: 'La construction irlandaise « after + V-ing » ne prend pas d\'article devant le nom de repas dans ce contexte. De plus, elle ne s\'emploie qu\'en anglais irlandais — en anglais standard, utilisez « I\'ve just + participe passé ».' },
    ],
  },
  conversation: [
    { speaker: 'Fiona', role: 'A', text: 'Aye, it\'s a wee bit parky the day, isn\'t it?', translation: 'Oui, il fait un peu froid aujourd\'hui, n\'est-ce pas ?' },
    { speaker: 'Eamonn', role: 'B', text: 'Dead on, Fiona. I\'m after freezing me toes off waiting for the bus.', translation: 'Carrément, Fiona. Je viens de me geler les orteils en attendant le bus.' },
    { speaker: 'Fiona', role: 'A', text: 'Aw, poor you. The bairns were fair moaning about it this morning an\' all.', translation: 'Oh, la pauvre. Les enfants n\'arrêtaient pas de s\'en plaindre ce matin aussi.' },
    { speaker: 'Eamonn', role: 'B', text: 'Tell me about it. Me sister says her wee one refuses to wear a coat now.', translation: 'Ne m\'en parle pas. Ma sœur dit que son petit refuse de mettre un manteau maintenant.' },
    { speaker: 'Fiona', role: 'A', text: 'Typical! They\'re cracker, so they are. Anyway, you coming to the ceilidh on Saturday?', translation: 'Typique ! Ils sont fous, vraiment. Sinon, tu viens au céilidh samedi ?' },
    { speaker: 'Eamonn', role: 'B', text: 'Aye, wouldn\'t miss it for the world. The craic\'ll be mighty, I\'m telling you.', translation: 'Oui, je ne le raterais pour rien au monde. Ça va être géant, je te dis.' },
  ],
  conversationTitle: 'Écosse et Irlande : parler régional',
  pronunciation: [
    { word: 'Wee', phonetic: '/wiː/', meaning: 'Petit', tip: 'Prononcez comme « oui » sans le « ou » initial : « wii ». Très courant en Écosse et en Irlande du Nord comme adoucisseur.' },
    { word: 'Bairn', phonetic: '/beərn/', meaning: 'Enfant (écossais)', tip: 'Prononcez « bèrn » — le « air » est comme dans « fair ». C\'est un mot d\'origine vieux norrois encore très vivant en Écosse.' },
    { word: 'Craic', phonetic: '/kræk/', meaning: 'Ambiance / fun (irlandais)', tip: 'Se prononce comme « crack » anglais. Mot irlandais pour désigner la bonne ambiance, les échanges. « What\'s the craic? » = « Quoi de neuf ? »' },
    { word: 'Parky', phonetic: '/ˈpɑːrki/', meaning: 'Froid (dialectal)', tip: 'Prononcez « PAR-ki » — argot britannique pour « froid ». Le « ar » est long comme dans « park ».' },
  ],
}

// ─── c2-l5: Native Sounds ───────────────────────────────────────────────────────
export const C2_L5: LessonContent = {
  vocab: [
    { english: 'to swallow (a word)', french: 'avaler (un mot) — élision', phonetic: '/ˈswɒloʊ/', example: 'In fast speech, « going to » gets swallowed into « gonna ».', exampleTranslation: 'En parole rapide, « going to » s\'avale en « gonna ».' },
    { english: 'to run together', french: 'enchaîner — liaison', phonetic: '/rʌn təˈɡeðər/', example: 'Native speakers run words together so « not at all » sounds like « nodda-dall ».', exampleTranslation: 'Les natifs enchaînent les mots : « not at all » sonne comme « nodda-dall ».' },
    { english: 'schwa', french: 'schwa — voyelle neutre /ə/', phonetic: '/ʃwɑː/', example: 'The schwa is the most common vowel sound in English — « about », « the », « banana ».', exampleTranslation: 'Le schwa est la voyelle la plus courante en anglais — « about », « the », « banana ».' },
    { english: 'to blend', french: 'fusionner (sons)', phonetic: '/blend/', example: '« Did you » blends into « didja » in casual speech.', exampleTranslation: '« Did you » se fusionne en « didja » en parole familière.' },
    { english: 'to clip', french: 'tronquer / couper court', phonetic: '/klɪp/', example: 'Northern speakers clip their vowels — « bath » sounds like « baf ».', exampleTranslation: 'Les locuteurs du Nord tronquent leurs voyelles — « bath » sonne comme « baf ».' },
  ],
  grammar: {
    title: 'La parole connectée : élision, assimilation et enchaînement',
    explanation: 'La « connected speech » (parole connectée) est ce qui rend l\'anglais oral si difficile à comprendre pour les francophones. Les mots ne sont PAS prononcés séparément — ils se fondent les uns dans les autres : (1) Élision : disparition de sons. « Next door » → « neks-door » (le « t » disparaît), « Handbag » → « han-bag » (le « d » disparaît) ; (2) Assimilation : un son en modifie un autre. « Don\'t you » → « don-chu », « Would you » → « wou-ju », « Meet you » → « mee-chu » ; (3) Liaison (caténation) : la consonne finale d\'un mot se lie à la voyelle initiale du suivant. « Get up » → « ge-tup », « Pick it up » → « pi-ki-tup » ; (4) Réduction vocalique : les voyelles non accentuées deviennent des schwas /ə/. Comprendre ces processus est ESSENTIEL pour comprendre l\'anglais parlé à vitesse native.',
    examples: [
      { sentence: 'Whaddaya mean you can\'t come?', translation: 'Comment ça tu ne peux pas venir ?', isCorrect: true },
      { sentence: 'I\'m gonna hafta ask her about it later.', translation: 'Je vais devoir lui demander ça plus tard.', isCorrect: true },
      { sentence: 'Do you want to go to the store?', translation: '', isCorrect: false },
      { sentence: 'She\'s gotta lotta work to get through by Friday.', translation: 'Elle a beaucoup de travail à terminer d\'ici vendredi.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Do you want to go to the store?', correct: 'Wanna go to the store? / D\'ya wanna go to the store?', explanation: 'En anglais oral rapide, « Do you want to » est presque toujours réduit à « Wanna » ou « D\'ya wanna ». Prononcer chaque mot distinctement sonne artificiel et peu naturel au niveau C2.' },
      { wrong: 'I am going to have to leave now.', correct: 'I\'m gonna hafta leave now. / I\'ma hafta leave now.', explanation: 'En conversation rapide, « going to have to » se contracte en « gonna hafta » ou même « gonna haffta ». La forme complète n\'est utilisée que dans un registre très soutenu.' },
    ],
  },
  conversation: [
    { speaker: 'Dan', role: 'A', text: 'Whatcha up to this arvo? Fancy a quick one down the pub?', translation: 'Tu fais quoi cet aprèm ? Ça te dit une petite mousse au pub ?' },
    { speaker: 'Meg', role: 'B', text: 'Can\'t, mate. I\'ve gotta lotta stuff to sort out before the meetin\' tomorrow.', translation: 'Peux pas, mon vieux. J\'ai plein de trucs à régler avant la réunion demain.' },
    { speaker: 'Dan', role: 'A', text: 'Ah, go on. You\'ve been at it all week — gotta wind down sometime, right?', translation: 'Allez, vas-y. T\'as bossé toute la semaine — faut bien décompresser un jour, non ?' },
    { speaker: 'Meg', role: 'B', text: 'I know, I know. Tell ya what — lemme finish this, and I\'ll meetcha there in an hour.', translation: 'Je sais, je sais. Voilà quoi — laisse-moi finir ça, et j\'te retrouve là-bas dans une heure.' },
    { speaker: 'Dan', role: 'A', text: 'Deal! I\'ll grab us a table. Don\'t stand me up though, or I\'ll never letcha live it down!', translation: 'Marché conclu ! Je nous prends une table. Mais ne me pose pas un lapin, sinon je te le ferai payer !' },
    { speaker: 'Meg', role: 'B', text: 'Wouldn\'t dream of it. See ya in a bit!', translation: 'J\'y penserai même pas. À tout à l\'heure !' },
  ],
  conversationTitle: 'Parole rapide entre amis',
  pronunciation: [
    { word: 'Gonna', phonetic: '/ˈɡʌnə/', meaning: 'Going to', tip: 'Prononcez « guh-nuh » — le premier « o » devient un schwa /ʌ/ et le second un schwa /ə/. C\'est la réduction la plus courante de l\'anglais oral.' },
    { word: 'Hafta', phonetic: '/ˈhæftə/', meaning: 'Have to', tip: 'Le « ve » de « have » disparaît et le « f » s\'assimile : « haf-tuh ». Ne dites JAMAIS « hav-to » en conversation rapide — cela sonne robotique.' },
    { word: 'Lemme', phonetic: '/ˈlemi/', meaning: 'Let me', tip: 'Le « t » de « let » est élidé devant « me » : « lé-mi ». Très courant à l\'oral. La forme complète « let me » n\'est utilisée que dans un registre soutenu.' },
    { word: 'Whatcha', phonetic: '/ˈwʌtʃə/', meaning: 'What are you / What do you', tip: 'Contraction de « what are you » ou « what do you » : « wuh-chuh ». L\'assimilation du « t » + « y » produit le son « ch ». Écoutez bien les natifs — c\'est extrêmement fréquent.' },
  ],
}
