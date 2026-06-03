import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// B2 UPPER INTERMEDIATE — UNIT 1: PROFESSIONAL COMMUNICATION (b2-l1 through b2-l5)
// YOELANG English Learning App for Francophone Users
// Upper-intermediate: negotiation, mixed conditionals, business feedback, professional register
// ════════════════════════════════════════════════════════════════════════════════

// ─── b2-l1: Negotiation Vocabulary ────────────────────────────────────────────────
export const B2_L1: LessonContent = {
  vocab: [
    { english: 'compromise', french: 'compromis', phonetic: '/ˈkɒmprəmaɪz/', example: 'We reached a compromise after three hours of discussion.', exampleTranslation: 'Nous avons trouvé un compromis après trois heures de discussion.' },
    { english: 'leverage', french: 'levier / influence', phonetic: '/ˈlevərɪdʒ/', example: 'We have little leverage in these negotiations.', exampleTranslation: 'Nous avons peu de levier dans ces négociations.' },
    { english: 'counterpart', french: 'homologue / interlocuteur', phonetic: '/ˈkaʊntərpɑːrt/', example: 'My French counterpart agreed to the new terms.', exampleTranslation: 'Mon homologue français a accepté les nouvelles conditions.' },
    { english: 'concession', french: 'concession', phonetic: '/kənˈseʃn/', example: 'They made a concession on the delivery date.', exampleTranslation: 'Ils ont fait une concession sur la date de livraison.' },
    { english: 'deadlock', french: 'impasse', phonetic: '/ˈdedlɒk/', example: 'The talks reached a deadlock over pricing.', exampleTranslation: 'Les pourparlers ont atteint une impasse sur les prix.' },
  ],
  grammar: {
    title: 'Le vocabulaire de la négociation : nuances et registre',
    explanation: 'Le vocabulaire professionnel de la négociation exige une précision que le français ne traduit pas toujours directement : (1) « Compromise » est un nom ET un verbe en anglais : « to compromise on something » (faire un compromis sur) ≠ « to compromise security » (compromettre la sécurité) ; (2) « Leverage » est souvent utilisé comme nom mais aussi comme verbe en américain : « to leverage one\'s position » (utiliser sa position comme levier) ; (3) « Concession » en anglais se construit avec « make a concession ON / ABOUT something » ou « concede something » (verbe) ; (4) « Terms » au pluriel signifie « conditions » dans un contrat : « terms and conditions », « agree on terms ». Attention : « on good terms » = en bons termes (relation personnelle).',
    examples: [
      { sentence: 'We are willing to make a concession on the payment schedule.', translation: 'Nous sommes disposés à faire une concession sur le calendrier de paiement.', isCorrect: true },
      { sentence: 'They compromised the security of the system.', translation: 'Ils ont compromis la sécurité du système.', isCorrect: true },
      { sentence: 'We have many leverages in this deal.', translation: '', isCorrect: false },
      { sentence: 'The two counterparts reached a mutually beneficial agreement.', translation: 'Les deux interlocuteurs sont parvenus à un accord mutuellement bénéfique.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'We have many leverages in this deal.', correct: 'We have a lot of leverage in this deal.', explanation: '« Leverage » est généralement indénombrable. On dit « a lot of leverage » ou « little leverage », pas « leverages ».' },
      { wrong: 'We made a concession of the price.', correct: 'We made a concession on the price.', explanation: 'On fait une concession SUR quelque chose : « make a concession ON / ABOUT something ». La préposition « of » est incorrecte ici.' },
    ],
  },
  conversation: [
    { speaker: 'Claire', role: 'A', text: 'Thank you for joining us today, Mr. Tanaka. We appreciate your willingness to negotiate.', translation: 'Merci de vous joindre à nous aujourd\'hui, M. Tanaka. Nous apprécions votre volonté de négocier.' },
    { speaker: 'Mr. Tanaka', role: 'B', text: 'Of course. Our counterpart in Paris spoke highly of your team. Let us discuss the terms.', translation: 'Bien sûr. Notre interlocuteur à Paris a beaucoup parlé de votre équipe. Discutons des conditions.' },
    { speaker: 'Claire', role: 'A', text: 'We\'d like to propose a 5% increase in the unit price, with a guaranteed minimum order of 10,000 units.', translation: 'Nous aimerions proposer une augmentation de 5 % du prix unitaire, avec une commande minimale garantie de 10 000 unités.' },
    { speaker: 'Mr. Tanaka', role: 'B', text: 'A 5% increase is difficult for us. However, if you can offer a longer payment term, we might consider it as a concession.', translation: 'Une augmentation de 5 % nous est difficile. Cependant, si vous pouvez offrir un délai de paiement plus long, nous pourrions le considérer comme une concession.' },
    { speaker: 'Claire', role: 'A', text: 'That could work. We wouldn\'t want these negotiations to reach a deadlock.', translation: 'Cela pourrait fonctionner. Nous ne voudrions pas que ces négociations arrivent à une impasse.' },
    { speaker: 'Mr. Tanaka', role: 'B', text: 'Agreed. A compromise is always better than walking away. Let us find common ground.', translation: 'D\'accord. Un compromis est toujours préférable à un abandon. Trouvons un terrain d\'entente.' },
  ],
  conversationTitle: 'Négociation commerciale : trouver un compromis',
  pronunciation: [
    { word: 'Compromise', phonetic: '/ˈkɒmprəmaɪz/', meaning: 'Compromis', tip: 'Le « o » est ouvert comme dans « hot » : « KOM-pruh-maïz ». L\'accent est sur la première syllabe. Le « s » final sonne comme « z ».' },
    { word: 'Leverage', phonetic: '/ˈlevərɪdʒ/', meaning: 'Levier / Influence', tip: 'Prononcez « LEV-er-idj » — l\'accent est sur « LEV ». En anglais américain, on dit souvent « LEV-rij » (plus rapide). Le « age » final = « idj ».' },
    { word: 'Concession', phonetic: '/kənˈseʃn/', meaning: 'Concession', tip: 'L\'accent est sur « CES » : « kun-SES-chun ». La terminaison « -sion » se prononce « chun » comme dans « decision ».' },
    { word: 'Deadlock', phonetic: '/ˈdedlɒk/', meaning: 'Impasse', tip: 'Prononcez « DED-lok » — l\'accent est sur la première syllabe. Le « ea » = « e » bref comme dans « dead » (mort).' },
  ],
}

// ─── b2-l2: Conditional Review ────────────────────────────────────────────────────
export const B2_L2: LessonContent = {
  vocab: [
    { english: 'scenario', french: 'scénario', phonetic: '/sɪˈnɑːriəʊ/', example: 'In this scenario, we would lose our main client.', exampleTranslation: 'Dans ce scénario, nous perdrions notre client principal.' },
    { english: 'outcome', french: 'résultat / issue', phonetic: '/ˈaʊtkʌm/', example: 'The outcome of the negotiation was positive.', exampleTranslation: 'Le résultat de la négociation a été positif.' },
    { english: 'stipulation', french: 'condition / clause', phonetic: '/ˌstɪpjuˈleɪʃn/', example: 'The contract includes a stipulation about late deliveries.', exampleTranslation: 'Le contrat inclut une clause sur les livraisons en retard.' },
    { english: 'feasible', french: 'faisable / réalisable', phonetic: '/ˈfiːzəbl/', example: 'Is it feasible to complete the project by March?', exampleTranslation: 'Est-il faisable de terminer le projet d\'ici mars ?' },
    { english: 'contingency', french: 'imprévu / plan B', phonetic: '/kənˈtɪndʒənsi/', example: 'We need a contingency plan in case the deal falls through.', exampleTranslation: 'Nous avons besoin d\'un plan de secours au cas où l\'affaire échouerait.' },
  ],
  grammar: {
    title: 'Les conditionnels mixtes (Mixed Conditionals) : quand le passé rencontre le présent',
    explanation: 'Au niveau B2, vous devez maîtriser les conditionnels mixtes qui combinent des temps différents dans la phrase conditionnelle : (1) Type mixte 1 : Passé → Présent. « If I had accepted that job [passé], I would be living in London now [présent]. » — Une condition passée avec un résultat présent. (2) Type mixte 2 : Présent → Passé. « If she were more experienced [présent], she would have been promoted [passé]. » — Une condition générale avec un résultat passé. (3) Structure : « If + past perfect, would + base verbale » (passé → présent) OU « If + past simple, would have + participe passé » (présent → passé). Ces structures sont très courantes en affaires pour analyser des situations et leurs conséquences.',
    examples: [
      { sentence: 'If we had signed the contract last month, we would be profiting from the lower rates now.', translation: 'Si nous avions signé le contrat le mois dernier, nous profiterions des tarifs inférieurs maintenant.', isCorrect: true },
      { sentence: 'If he were better at negotiating, he would have closed the deal.', translation: 'S\'il était meilleur en négociation, il aurait conclu l\'affaire.', isCorrect: true },
      { sentence: 'If they would have invested earlier, they would be rich now.', translation: '', isCorrect: false },
      { sentence: 'If the company hadn\'t expanded so quickly, it wouldn\'t be facing bankruptcy today.', translation: 'Si l\'entreprise ne s\'était pas étendue si vite, elle ne ferait pas face à la faillite aujourd\'hui.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'If they would have invested earlier, they would be rich now.', correct: 'If they had invested earlier, they would be rich now.', explanation: 'Dans la subordonnée conditionnelle (after « if »), on n\'utilise JAMAIS « would ». On utilise le past perfect : « If they had invested », pas « If they would have invested ».' },
      { wrong: 'If she was more experienced, she would have been promoted.', correct: 'If she were more experienced, she would have been promoted.', explanation: 'Dans les conditionnels irréels, on utilise « were » pour toutes les personnes, pas « was » : « If she were », « If I were ». C\'est le subjonctif.' },
    ],
  },
  conversation: [
    { speaker: 'Marc', role: 'A', text: 'So, what\'s the contingency plan if the merger doesn\'t go through?', translation: 'Alors, quel est le plan de secours si la fusion ne se fait pas ?' },
    { speaker: 'Sophie', role: 'B', text: 'If we had prepared a better proposal, the board wouldn\'t be hesitating now.', translation: 'Si nous avions préparé une meilleure proposition, le conseil n\'hésiterait pas en ce moment.' },
    { speaker: 'Marc', role: 'A', text: 'That\'s easy to say in hindsight. But you\'re right — if we were more persuasive, we would have won them over by now.', translation: 'C\'est facile à dire avec le recul. Mais tu as raison — si nous étions plus persuasifs, nous les aurions convaincus maintenant.' },
    { speaker: 'Sophie', role: 'B', text: 'The stipulation about the intellectual property was the sticking point. If they had accepted our terms, we would be signing the papers today.', translation: 'La clause sur la propriété intellectuelle était le point bloquant. S\'ils avaient accepté nos conditions, nous signerions les papiers aujourd\'hui.' },
    { speaker: 'Marc', role: 'A', text: 'Is it feasible to renegotiate just that clause?', translation: 'Est-il faisable de renégocier seulement cette clause ?' },
    { speaker: 'Sophie', role: 'B', text: 'Possibly. But if we weren\'t so pressed for time, we would have explored all options already.', translation: 'Peut-être. Mais si nous n\'étions pas si pressés par le temps, nous aurions déjà exploré toutes les options.' },
  ],
  conversationTitle: 'Analyse d\'un échec de fusion : conditionnels mixtes',
  pronunciation: [
    { word: 'Scenario', phonetic: '/sɪˈnɑːriəʊ/', meaning: 'Scénario', tip: 'L\'accent est sur « NA » : « si-NA-ri-o ». Ne prononcez pas à la française « sé-na-ri-o ». Le « e » initial est réduit en schwa.' },
    { word: 'Feasible', phonetic: '/ˈfiːzəbl/', meaning: 'Faisable', tip: 'Prononcez « FII-zuh-bl » — l\'accent est sur « FEE ». Le « sible » se prononce « zuh-bl » comme dans « possible ».' },
    { word: 'Contingency', phonetic: '/kənˈtɪndʒənsi/', meaning: 'Plan de secours', tip: 'L\'accent est sur « TIN » : « kun-TIN-jun-si ». La syllabe « gen » se prononce « jun » comme dans « genuine ».' },
    { word: 'Stipulation', phonetic: '/ˌstɪpjuˈleɪʃn/', meaning: 'Clause / Condition', tip: 'L\'accent est sur « LA » : « sti-pyoo-LAY-shun ». Le « u » après « stip » se prononce comme « you ».' },
  ],
}

// ─── b2-l3: Business Negotiation ──────────────────────────────────────────────────
export const B2_L3: LessonContent = {
  vocab: [
    { english: 'to negotiate', french: 'négocier', phonetic: '/nɪˈɡəʊʃieɪt/', example: 'We need to negotiate a better deal with the supplier.', exampleTranslation: 'Nous devons négocier un meilleur accord avec le fournisseur.' },
    { english: 'to propose', french: 'proposer', phonetic: '/prəˈpəʊz/', example: 'I\'d like to propose a revised payment schedule.', exampleTranslation: 'J\'aimerais proposer un calendrier de paiement révisé.' },
    { english: 'to walk away', french: 'se retirer / abandonner', phonetic: '/wɔːk əˈweɪ/', example: 'If the terms aren\'t acceptable, we\'ll walk away from the deal.', exampleTranslation: 'Si les conditions ne sont pas acceptables, nous nous retirerons de l\'affaire.' },
    { english: 'common ground', french: 'terrain d\'entente', phonetic: '/ˌkɒmən ˈɡraʊnd/', example: 'Let\'s try to find common ground before the deadline.', exampleTranslation: 'Essayons de trouver un terrain d\'entente avant la date limite.' },
    { english: 'to stand firm', french: 'rester ferme / tenir bon', phonetic: '/stænd fɜːm/', example: 'We must stand firm on the quality requirements.', exampleTranslation: 'Nous devons rester fermes sur les exigences de qualité.' },
  ],
  grammar: {
    title: 'Les formules de politesse professionnelle pour négocier',
    explanation: 'En anglais des affaires, la négociation nécessite un registre formel qui adoucit les demandes sans les affaiblir : (1) Demander poliment : « I would appreciate it if you could... » au lieu de « I want you to... » ; « Would it be possible to... ? » au lieu de « Can you... ? » ; (2) Refuser avec tact : « I\'m afraid that won\'t be possible » au lieu de « No » ; « We\'re unable to accept that at this time » au lieu de « We won\'t accept » ; (3) Proposer : « We\'d like to suggest... » / « What if we were to... ? » / « Might I propose... ? » ; (4) Insister sans être agressif : « We must insist on... » (très ferme) → « We would strongly prefer... » (ferme mais ouvert) → « We\'d appreciate it if... » (souhait). Ces nuances font la différence entre un négociateur efficace et un interlocuteur impoli.',
    examples: [
      { sentence: 'Would it be possible to extend the deadline by two weeks?', translation: 'Serait-il possible de prolonger le délai de deux semaines ?', isCorrect: true },
      { sentence: 'I\'m afraid that won\'t be possible under the current terms.', translation: 'Je crains que cela ne soit pas possible dans les conditions actuelles.', isCorrect: true },
      { sentence: 'I want you to give us a discount.', translation: '', isCorrect: false },
      { sentence: 'We would strongly prefer a longer warranty period.', translation: 'Nous préférerions fortement une période de garantie plus longue.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I want you to give us a discount.', correct: 'We would appreciate it if you could offer us a discount.', explanation: 'En contexte professionnel, « I want you to » est trop direct et impoli. Utilisez des formulations atténuées : « We would appreciate it if... » ou « Would it be possible to... »' },
      { wrong: 'No, we can\'t accept that.', correct: 'I\'m afraid we\'re unable to accept that at this time.', explanation: 'Un refus direct (« No ») est trop brutal en négociation professionnelle. Adoucissez avec « I\'m afraid » et « at this time » qui laisse la porte ouverte.' },
    ],
  },
  conversation: [
    { speaker: 'Ms. Laurent', role: 'A', text: 'Thank you for the proposal, Mr. Chen. We\'ve reviewed it carefully and would like to discuss a few points.', translation: 'Merci pour la proposition, M. Chen. Nous l\'avons examinée attentivement et aimerions discuter quelques points.' },
    { speaker: 'Mr. Chen', role: 'B', text: 'Of course, Ms. Laurent. We\'re keen to find common ground. What are your thoughts?', translation: 'Bien sûr, Mme Laurent. Nous sommes désireux de trouver un terrain d\'entente. Qu\'en pensez-vous ?' },
    { speaker: 'Ms. Laurent', role: 'A', text: 'Would it be possible to extend the warranty from 12 to 24 months? That would be a decisive factor for us.', translation: 'Serait-il possible de prolonger la garantie de 12 à 24 mois ? Ce serait un facteur décisif pour nous.' },
    { speaker: 'Mr. Chen', role: 'B', text: 'I\'m afraid a 24-month warranty would be difficult for us. However, might I propose 18 months as a compromise?', translation: 'Je crains qu\'une garantie de 24 mois nous soit difficile. Cependant, puis-je proposer 18 mois comme compromis ?' },
    { speaker: 'Ms. Laurent', role: 'A', text: 'That\'s a step in the right direction. We would also appreciate it if you could include installation support.', translation: 'C\'est un pas dans la bonne direction. Nous apprécierions également que vous incluiez le support d\'installation.' },
    { speaker: 'Mr. Chen', role: 'B', text: 'If you can commit to a larger order, we could include that. Otherwise, we must stand firm on the base package.', translation: 'Si vous pouvez vous engager sur une commande plus importante, nous pourrions l\'inclure. Sinon, nous devons rester fermes sur le forfait de base.' },
  ],
  conversationTitle: 'Négociation commerciale : garantie et conditions',
  pronunciation: [
    { word: 'Negotiate', phonetic: '/nɪˈɡəʊʃieɪt/', meaning: 'Négocier', tip: 'L\'accent est sur « GO » : « nuh-GO-shee-ayt ». Le « ti » se prononce « shi » comme dans « negotiate ». Les francophones ont tendance à mettre l\'accent sur la dernière syllabe — c\'est incorrect.' },
    { word: 'Propose', phonetic: '/prəˈpəʊz/', meaning: 'Proposer', tip: 'Prononcez « pruh-POHZ » — l\'accent est sur la deuxième syllabe. Ne dites pas « PRO-poz » avec l\'accent sur la première syllabe.' },
    { word: 'Warranty', phonetic: '/ˈwɒrənti/', meaning: 'Garantie', tip: 'Prononcez « WOR-un-ti » — le « a » est réduit en schwa. L\'accent est sur « WAR ». Ne confondez pas avec « warranty » (garantie) et « guarantee » (garantie avec un sens juridique plus fort).' },
    { word: 'Appreciate', phonetic: '/əˈpriːʃieɪt/', meaning: 'Apprécier', tip: 'L\'accent est sur « PRI » : « uh-PREE-shee-ayt ». Le « ci » se prononce « shi » comme dans « negotiate ». C\'est un mot long — ne l\'avalez pas.' },
  ],
}

// ─── b2-l4: Giving Feedback ──────────────────────────────────────────────────────
export const B2_L4: LessonContent = {
  vocab: [
    { english: 'constructive', french: 'constructif / constructive', phonetic: '/kənˈstrʌktɪv/', example: 'Please give me constructive feedback, not just criticism.', exampleTranslation: 'S\'il vous plaît, donnez-moi un feedback constructif, pas seulement des critiques.' },
    { english: 'to address', french: 'traiter / aborder', phonetic: '/əˈdres/', example: 'We need to address the issues raised in the last meeting.', exampleTranslation: 'Nous devons traiter les problèmes soulevés lors de la dernière réunion.' },
    { english: 'to improve', french: 'améliorer', phonetic: '/ɪmˈpruːv/', example: 'There are several areas where we can improve our performance.', exampleTranslation: 'Il y a plusieurs domaines où nous pouvons améliorer nos performances.' },
    { english: 'to acknowledge', french: 'reconnaître / accuser réception', phonetic: '/əkˈnɒlɪdʒ/', example: 'I acknowledge that the deadline was missed, and I take responsibility.', exampleTranslation: 'Je reconnais que la date limite n\'a pas été respectée, et j\'en prends la responsabilité.' },
    { english: 'to follow up', french: 'faire un suivi / donner suite', phonetic: '/ˈfɒləʊ ʌp/', example: 'I\'ll follow up on the action items next Monday.', exampleTranslation: 'Je ferai un suivi des points d\'action lundi prochain.' },
  ],
  grammar: {
    title: 'Le feedback professionnel : formuler critique et louange',
    explanation: 'Donner du feedback en anglais professionnel suit des conventions précises : (1) La structure « sandwich » : commencer par du positif, puis aborder les points d\'amélioration, et terminer par de l\'encouragement. (2) Formuler une critique constructive : utilisez « I\'ve noticed that... » + fait objectif au lieu de « You always... » + généralisation ; « It would be more effective if... » au lieu de « You should... » ; « One area for improvement is... » au lieu de « Your problem is... ». (3) Formuler une louange : « I was really impressed by... » / « You did an excellent job on... » / « What worked particularly well was... ». (4) L\'importance du « I » : dites « I think » ou « In my view » plutôt que des affirmations générales qui peuvent sembler agressives. (5) Le ton conditionnel adoucit : « It might be worth considering... » est plus diplomatique que « You need to... »',
    examples: [
      { sentence: 'I\'ve noticed that the reports have been submitted late recently. It would be helpful if they could be delivered on time.', translation: 'J\'ai remarqué que les rapports ont été soumis en retard récemment. Il serait utile qu\'ils soient livrés à temps.', isCorrect: true },
      { sentence: 'You always make mistakes in the reports.', translation: '', isCorrect: false },
      { sentence: 'What worked particularly well was your presentation to the client — it was clear and persuasive.', translation: 'Ce qui a particulièrement bien fonctionné, c\'est votre présentation au client — elle était claire et convaincante.', isCorrect: true },
      { sentence: 'One area for improvement is the response time to internal emails.', translation: 'Un domaine à améliorer est le temps de réponse aux e-mails internes.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'You always make mistakes in the reports.', correct: 'I\'ve noticed a few inaccuracies in the recent reports. It might be worth double-checking the data before submission.', explanation: 'Les généralisations (« you always », « you never ») sont perçues comme des attaques personnelles. Soyez spécifique : citez des faits, pas des jugements.' },
      { wrong: 'Your work is bad.', correct: 'There are some areas where the work could be improved.', explanation: '« Bad » est un jugement vague et blessant. Identifiez précisément ce qui peut être amélioré et formulez-le de manière constructive.' },
    ],
  },
  conversation: [
    { speaker: 'David', role: 'A', text: 'Thanks for meeting with me, Aisha. I wanted to give you some feedback on the Q3 report.', translation: 'Merci de me rencontrer, Aisha. Je voulais te donner un feedback sur le rapport du T3.' },
    { speaker: 'Aisha', role: 'B', text: 'Of course, I appreciate it. I\'m always looking to improve.', translation: 'Bien sûr, j\'apprécie. Je cherche toujours à m\'améliorer.' },
    { speaker: 'David', role: 'A', text: 'First, I was really impressed by the data analysis section — it was thorough and well-presented.', translation: 'D\'abord, j\'ai été vraiment impressionné par la section d\'analyse de données — elle était approfondie et bien présentée.' },
    { speaker: 'Aisha', role: 'B', text: 'Thank you, that means a lot. Was there anything I should address?', translation: 'Merci, ça me touche. Y avait-il quelque chose que je devrais améliorer ?' },
    { speaker: 'David', role: 'A', text: 'One area for improvement is the executive summary. It might be worth making it more concise — under one page. Senior management prefers a quick overview.', translation: 'Un domaine à améliorer est le résumé exécutif. Il vaudrait peut-être la peine de le rendre plus concis — moins d\'une page. La direction préfère un aperçu rapide.' },
    { speaker: 'Aisha', role: 'B', text: 'I acknowledge that. I\'ll follow up with a revised version by Friday.', translation: 'Je le reconnais. Je ferai un suivi avec une version révisée d\'ici vendredi.' },
  ],
  conversationTitle: 'Feedback professionnel : le sandwich method',
  pronunciation: [
    { word: 'Constructive', phonetic: '/kənˈstrʌktɪv/', meaning: 'Constructif', tip: 'L\'accent est sur « STRUC » : « kun-STRUK-tiv ». Le « con » initial est réduit en schwa. Ne dites pas « kon-struk-TIV ».' },
    { word: 'Acknowledge', phonetic: '/əkˈnɒlɪdʒ/', meaning: 'Reconnaître', tip: 'Prononcez « uk-NOL-idj » — l\'accent est sur « NOL ». Le « ac » initial est un schwa rapide. Le « edge » final se prononce « idj » comme dans « knowledge ».' },
    { word: 'Improve', phonetic: '/ɪmˈpruːv/', meaning: 'Améliorer', tip: 'L\'accent est sur « PROVE » : « im-PROOV ». Le « i » initial est court comme dans « bit ». Ne dites pas « aim-proov ».' },
    { word: 'Concise', phonetic: '/kənˈsaɪs/', meaning: 'Concis', tip: 'L\'accent est sur « SISE » : « kun-SAIS ». Le « i » de la deuxième syllabe est long. Ne dites pas « KON-sis ».' },
  ],
}

// ─── b2-l5: Professional Sounds ───────────────────────────────────────────────────
export const B2_L5: LessonContent = {
  vocab: [
    { english: 'schedule', french: 'emploi du temps / calendrier', phonetic: '/ˈʃedjuːl/', example: 'The project schedule has been revised twice already.', exampleTranslation: 'Le calendrier du projet a déjà été révisé deux fois.' },
    { english: 'colleague', french: 'collègue', phonetic: '/ˈkɒliːɡ/', example: 'My colleague will handle the client meeting tomorrow.', exampleTranslation: 'Mon collègue s\'occupera de la réunion client demain.' },
    { english: 'management', french: 'direction / management', phonetic: '/ˈmænɪdʒmənt/', example: 'Senior management approved the budget increase.', exampleTranslation: 'La direction a approuvé l\'augmentation du budget.' },
    { english: 'stakeholder', french: 'partie prenante / intervenant', phonetic: '/ˈsteɪkhəʊldər/', example: 'We need to consider all stakeholders before making a decision.', exampleTranslation: 'Nous devons prendre en compte toutes les parties prenantes avant de décider.' },
    { english: 'quarterly', french: 'trimestriel', phonetic: '/ˈkwɔːrtərli/', example: 'The quarterly results exceeded our expectations.', exampleTranslation: 'Les résultats trimestriels ont dépassé nos attentes.' },
  ],
  grammar: {
    title: 'La prononciation professionnelle : mots pièges pour francophones',
    explanation: 'Le vocabulaire professionnel anglais contient de nombreux mots pièges pour les francophones : (1) Faux amis phonétiques : « schedule » se prononce /ˈʃedjuːl/ (britannique) ou /ˈskedʒuːl/ (américain) — JAMAIS « shédule » à la française ; « colleague » = /ˈkɒliːɡ/ — le « ue » final ne se prononce PAS, contrairement au français « collègue » ; (2) Mots avec « -ment » : « management » = /ˈmænɪdʒmənt/ — le « a » de « man » est très ouvert, pas « é » ; « agreement » = /əˈɡriːmənt/ — l\'accent est sur « GREE », pas sur « ment » ; (3) Mots composés professionnels : « stakeholder » = /ˈsteɪkhəʊldər/ — l\'accent est sur « STAKE » ; « quarterly » = /ˈkwɔːrtərli/ — l\'accent est sur « QUAR ». Ces erreurs de prononciation peuvent nuire à votre crédibilité professionnelle.',
    examples: [
      { sentence: 'We need to discuss the schedule with all stakeholders.', translation: 'Nous devons discuter le calendrier avec toutes les parties prenantes.', isCorrect: true },
      { sentence: 'My colleague and I are preparing the quarterly report.', translation: 'Mon collègue et moi préparons le rapport trimestriel.', isCorrect: true },
      { sentence: 'The manageMANT decided to postpone the meeting.', translation: '', isCorrect: false },
      { sentence: 'Senior management approved the new schedule.', translation: 'La direction a approuvé le nouveau calendrier.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The manageMANT decided to postpone the meeting.', correct: 'The MAN-ij-ment decided to postpone the meeting.', explanation: '« Management » se prononce « MAN-ij-ment » avec l\'accent sur « MAN » et le « a » ouvert. Ne prononcez pas « ment » comme le suffixe français « -ment ».' },
      { wrong: 'My collèg and I...', correct: 'My KOL-eeg and I...', explanation: '« Colleague » se prononce « KOL-eeg » — le « ue » final est MUET. Ne prononcez pas « ègue » à la française.' },
    ],
  },
  conversation: [
    { speaker: 'Nathalie', role: 'A', text: 'Have you seen the revised schedule for Q2? Management wants to push the launch date back.', translation: 'As-tu vu le calendrier révisé du T2 ? La direction veut repousser la date de lancement.' },
    { speaker: 'James', role: 'B', text: 'Yes, my colleague mentioned it. The stakeholders won\'t be happy about the delay.', translation: 'Oui, mon collègue en a parlé. Les parties prenantes ne seront pas contentes du retard.' },
    { speaker: 'Nathalie', role: 'A', text: 'I know. But the quarterly figures show we need more time to get it right.', translation: 'Je sais. Mais les chiffres trimestriels montrent qu\'on a besoin de plus de temps pour bien faire.' },
    { speaker: 'James', role: 'B', text: 'Fair point. We should address their concerns at the next board meeting.', translation: 'Juste. On devrait aborder leurs préoccupations à la prochaine réunion du conseil.' },
    { speaker: 'Nathalie', role: 'A', text: 'Agreed. Could you prepare a short briefing for the stakeholders by Wednesday?', translation: 'D\'accord. Pourrais-tu préparer un court briefing pour les parties prenantes d\'ici mercredi ?' },
    { speaker: 'James', role: 'B', text: 'Consider it done. I\'ll acknowledge the delay and propose a realistic timeline.', translation: 'C\'est fait. Je reconnaîtrai le retard et proposerai un calendrier réaliste.' },
  ],
  conversationTitle: 'Au bureau : calendrier et parties prenantes',
  pronunciation: [
    { word: 'Schedule', phonetic: '/ˈʃedjuːl/', meaning: 'Calendrier', tip: 'En anglais britannique : « SHED-yool » — le « ch » est doux comme dans « shed ». En américain : « SKED-jool » — le « sch » est dur comme dans « school ». Choisissez un et soyez cohérent.' },
    { word: 'Colleague', phonetic: '/ˈkɒliːɡ/', meaning: 'Collègue', tip: 'Prononcez « KOL-eeg » — le « ue » final est MUET. L\'accent est sur « COL ». Ne dites surtout pas « kol-ègue » à la française.' },
    { word: 'Stakeholder', phonetic: '/ˈsteɪkhəʊldər/', meaning: 'Partie prenante', tip: 'L\'accent est sur « STAKE » : « STAYK-hol-der ». Le « hold » est réduit et rapide. Ne mettez pas l\'accent sur « holder ».' },
    { word: 'Quarterly', phonetic: '/ˈkwɔːrtərli/', meaning: 'Trimestriel', tip: 'L\'accent est sur « QUAR » : « KWOR-ter-li ». Le « u » après « q » = son « w ». Les deux dernières syllabes sont rapides et réduites.' },
  ],
}
