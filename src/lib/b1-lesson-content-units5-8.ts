// Lesson content for B1 Intermediate Units 5-8
// YOELANG English learning app for francophone users

import { type LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 5: BUSINESS ENGLISH BASICS (b1-l21 through b1-l25)
// ════════════════════════════════════════════════════════════════════════════════

export const B1_L21: LessonContent = {
  vocab: [
    { english: 'Deadline', french: 'Date limite', phonetic: '/ˈdedlaɪn/', example: 'The deadline for the project is next Friday.', exampleTranslation: 'La date limite du projet est vendredi prochain.' },
    { english: 'Schedule', french: 'Emploi du temps / Planning', phonetic: '/ˈʃedjuːl/', example: 'Can we schedule a meeting for tomorrow?', exampleTranslation: 'Pouvons-nous planifier une réunion pour demain ?' },
    { english: 'Client', french: 'Client(e)', phonetic: '/ˈklaɪənt/', example: 'We have a meeting with a new client today.', exampleTranslation: 'Nous avons une réunion avec un nouveau client aujourd\'hui.' },
    { english: 'Colleague', french: 'Collègue', phonetic: '/ˈkɑːliːɡ/', example: 'My colleague helped me with the presentation.', exampleTranslation: 'Mon collègue m\'a aidé avec la présentation.' },
    { english: 'Proposal', french: 'Proposition', phonetic: '/prəˈpoʊzl/', example: 'We submitted a proposal to the client.', exampleTranslation: 'Nous avons soumis une proposition au client.' },
  ],
  grammar: {
    title: 'Vocabulaire professionnel — Collocations du monde du travail',
    explanation: 'Le vocabulaire professionnel utilise des collocations fixes : "meet a deadline" (respecter une date limite), "schedule a meeting" (planifier une réunion), "submit a proposal" (soumettre une proposition), "attend a conference" (assister à une conférence). ATTENTION : "deadline" = date limite (la ligne de la mort !), pas "dead line". "Schedule" se prononce différemment en anglais britannique ("CHÉ-diou") et américain ("SKÉ-doul"). "Client" en anglais rime avec "silent", pas "cli-ent" à la française.',
    examples: [
      { sentence: 'We need to meet the deadline for this project.', translation: 'Nous devons respecter la date limite pour ce projet.', isCorrect: true },
      { sentence: 'She sended the proposal yesterday.', translation: '', isCorrect: false },
      { sentence: 'My colleague will attend the conference next week.', translation: 'Mon collègue assistera à la conférence la semaine prochaine.', isCorrect: true },
      { sentence: 'Let\'s schedule a meeting with the client.', translation: 'Planifions une réunion avec le client.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She sended the proposal yesterday.', correct: 'She sent the proposal yesterday.', explanation: '"Send" est un verbe irrégulier : send → sent → sent. Pas "sended" !' },
      { wrong: 'We must respect the deadline.', correct: 'We must meet the deadline.', explanation: 'En anglais, on dit "meet a deadline" (pas "respect"). "Respect" s\'utilise pour les personnes et les règles, pas les dates limites.' },
    ],
  },
  conversation: [
    { speaker: 'Kofi', role: 'A', text: 'Do we have a deadline for the proposal?', translation: 'Avons-nous une date limite pour la proposition ?' },
    { speaker: 'Amina', role: 'B', text: 'Yes, the client wants it by Friday. Can your team meet the deadline?', translation: 'Oui, le client la veut pour vendredi. Ton équipe peut-elle respecter la date limite ?' },
    { speaker: 'Kofi', role: 'A', text: 'I think so. Let me check with my colleague and schedule a meeting.', translation: 'Je pense que oui. Laissez-moi vérifier avec mon collègue et planifier une réunion.' },
    { speaker: 'Amina', role: 'B', text: 'Good idea. I\'ll prepare the schedule for tomorrow.', translation: 'Bonne idée. Je préparerai l\'emploi du temps pour demain.' },
    { speaker: 'Kofi', role: 'A', text: 'The client is very important. We should submit a strong proposal.', translation: 'Le client est très important. Nous devrions soumettre une proposition solide.' },
    { speaker: 'Amina', role: 'B', text: 'Absolutely. Let\'s work together on this. Teamwork makes the dream work!', translation: 'Absolument. Travaillons ensemble là-dessus. Le travail d\'équipe fait rêver !' },
  ],
  conversationTitle: 'Planifier un projet professionnel',
  pronunciation: [
    { word: 'Deadline', phonetic: '/ˈdedlaɪn/', meaning: 'Date limite', tip: 'Prononcez "DED-laïn" — l\'accent est sur "DEAD" et le "i" de "line" est long.' },
    { word: 'Schedule', phonetic: '/ˈʃedjuːl/', meaning: 'Planning', tip: 'Britannique : "CHÉ-diou". Américain : "SKÉ-doul". Les deux sont corrects !' },
    { word: 'Client', phonetic: '/ˈklaɪənt/', meaning: 'Client', tip: 'Prononcez "KLAÏ-ent" — le "i" est long. Pas "cli-ent" à la française !' },
    { word: 'Colleague', phonetic: '/ˈkɑːliːɡ/', meaning: 'Collègue', tip: 'Prononcez "KOL-ig" — le "ea" = "i" bref et le "g" final est dur. Pas "co-lègue" !' },
  ],
}

export const B1_L22: LessonContent = {
  vocab: [
    { english: 'Formal', french: 'Formel(le)', phonetic: '/ˈfɔːrml/', example: 'Please use a formal tone in business emails.', exampleTranslation: 'Veuillez utiliser un ton formel dans les e-mails professionnels.' },
    { english: 'Attach', french: 'Joindre (fichier)', phonetic: '/əˈtætʃ/', example: 'I have attached the report to this email.', exampleTranslation: "J'ai joint le rapport à cet e-mail." },
    { english: 'Regarding', french: 'Concernant', phonetic: '/rɪˈɡɑːrdɪŋ/', example: 'I am writing regarding our meeting next week.', exampleTranslation: "J'écris concernant notre réunion la semaine prochaine." },
    { english: 'Sincerely', french: 'Cordialement', phonetic: '/sɪnˈsɪrli/', example: 'I look forward to your reply. Sincerely, Marie.', exampleTranslation: "Dans l'attente de votre réponse. Cordialement, Marie." },
    { english: 'Inquiry', french: 'Demande / Enquête', phonetic: '/ɪnˈkwaɪəri/', example: 'Thank you for your inquiry about our services.', exampleTranslation: 'Merci pour votre demande concernant nos services.' },
  ],
  grammar: {
    title: 'Les e-mails professionnels — Phrases et formules de politesse',
    explanation: 'Les e-mails professionnels suivent des conventions : OUVERTURE : "Dear Mr./Ms. [Nom]" (formel) ou "Hi [Prénom]" (informel). CORPS : "I am writing to..." (J\'écris pour...), "Regarding..." (Concernant...), "I would like to..." (Je souhaiterais...), "Please find attached..." (Veuillez trouver ci-joint...). FIN : "I look forward to hearing from you" (Dans l\'attente de votre retour), "Best regards" (Cordialement), "Sincerely" (Sincèrement). ATTENTION : "I look forward to HEARING" (gérondif), pas "hear".',
    examples: [
      { sentence: 'Dear Ms. Dupont, I am writing regarding the meeting scheduled for Monday.', translation: 'Chère Mme Dupont, j\'écris concernant la réunion prévue lundi.', isCorrect: true },
      { sentence: 'I look forward to hear from you.', translation: '', isCorrect: false },
      { sentence: 'Please find attached the quarterly report.', translation: 'Veuillez trouver ci-joint le rapport trimestriel.', isCorrect: true },
      { sentence: 'Thank you for your inquiry about our products.', translation: 'Merci pour votre demande concernant nos produits.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I look forward to hear from you.', correct: 'I look forward to hearing from you.', explanation: 'Après "look forward TO", on utilise le gérondif : "hearing", pas "hear". Le "to" est une préposition ici !' },
      { wrong: 'I attached the report on this email.', correct: 'I attached the report to this email.', explanation: 'On dit "attached TO" (pas "on"). La préposition correcte est "to" : "attached to this email".' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'Can you help me write a formal email to the client?', translation: 'Peux-tu m\'aider à écrire un e-mail formel au client ?' },
    { speaker: 'Moussa', role: 'B', text: 'Of course! Start with "Dear Mr. Johnson" and say what you\'re writing regarding.', translation: 'Bien sûr ! Commence par "Dear Mr. Johnson" et dis ce concernant quoi tu écris.' },
    { speaker: 'Fatou', role: 'A', text: 'Then I\'ll say: "I would like to schedule a meeting regarding the proposal."', translation: 'Ensuite je dirai : "Je souhaiterais planifier une réunion concernant la proposition."' },
    { speaker: 'Moussa', role: 'B', text: 'Perfect! Don\'t forget to attach the document and end with "I look forward to hearing from you."', translation: "Parfait ! N'oublie pas de joindre le document et termine par \"I look forward to hearing from you.\"" },
    { speaker: 'Fatou', role: 'A', text: 'Should I use "Sincerely" or "Best regards"?', translation: 'Dois-je utiliser "Sincerely" ou "Best regards" ?' },
    { speaker: 'Moussa', role: 'B', text: '"Best regards" is common for business. "Sincerely" is more formal, like for official inquiries.', translation: '"Best regards" est courant en affaires. "Sincerely" est plus formel, comme pour les demandes officielles.' },
  ],
  conversationTitle: 'Rédiger un e-mail professionnel',
  pronunciation: [
    { word: 'Regarding', phonetic: '/rɪˈɡɑːrdɪŋ/', meaning: 'Concernant', tip: 'Prononcez "ri-GAR-ding" — l\'accent est sur "GARD" et le "ar" est long.' },
    { word: 'Sincerely', phonetic: '/sɪnˈsɪrli/', meaning: 'Cordialement', tip: 'Prononcez "sin-SIR-li" — l\'accent est sur "CERE" et le "i" final est réduit.' },
    { word: 'Inquiry', phonetic: '/ɪnˈkwaɪəri/', meaning: 'Demande', tip: 'Prononcez "in-KOUAÏ-e-ri" — l\'accent est sur "QUI" et le "qu" = "kw".' },
    { word: 'Attached', phonetic: '/əˈtætʃt/', meaning: 'Joint', tip: 'Prononcez "e-TATCHT" — l\'accent est sur "TACH" et le "-ed" = "t".' },
  ],
}

export const B1_L23: LessonContent = {
  vocab: [
    { english: 'Agenda', french: 'Ordre du jour', phonetic: '/əˈdʒendə/', example: 'The first item on the agenda is the budget.', exampleTranslation: 'Le premier point à l\'ordre du jour est le budget.' },
    { english: 'Feedback', french: 'Retour / Commentaires', phonetic: '/ˈfiːdbæk/', example: 'Can you give me feedback on this report?', exampleTranslation: 'Peux-tu me donner un retour sur ce rapport ?' },
    { english: 'Outcome', french: 'Résultat / Issue', phonetic: '/ˈaʊtkʌm/', example: 'What was the outcome of the meeting?', exampleTranslation: 'Quel a été le résultat de la réunion ?' },
    { english: 'Deadline', french: 'Date limite', phonetic: '/ˈdedlaɪn/', example: 'We need to set a new deadline.', exampleTranslation: 'Nous devons fixer une nouvelle date limite.' },
    { english: 'Action item', french: 'Point d\'action', phonetic: '/ˈækʃən ˈaɪtəm/', example: 'Who is responsible for this action item?', exampleTranslation: 'Qui est responsable de ce point d\'action ?' },
  ],
  grammar: {
    title: 'Participer à une réunion — Phrases essentielles',
    explanation: 'Pour participer à une réunion en anglais : PROPOSER : "I\'d like to suggest..." (Je suggère...), "Why don\'t we...?" (Pourquoi ne pas...?). DONNER SON AVIS : "In my opinion..." (À mon avis...), "I agree with..." (Je suis d\'accord avec...), "I have a concern about..." (J\'ai une préoccupation concernant...). DEMANDER DES ÉCLAIRCISSEMENTS : "Could you clarify...?" (Pourriez-vous clarifier...?), "What do you mean by...?" (Que voulez-vous dire par...?). RÉSUMER : "So, the action items are..." (Donc, les points d\'action sont...), "The outcome is..." (Le résultat est...).',
    examples: [
      { sentence: 'I\'d like to suggest we postpone the deadline.', translation: 'Je suggère que nous reportions la date limite.', isCorrect: true },
      { sentence: 'I am agree with your proposal.', translation: '', isCorrect: false },
      { sentence: 'Could you clarify what you mean by "sustainable"?', translation: 'Pourriez-vous clarifier ce que vous entendez par « durable » ?', isCorrect: true },
      { sentence: 'So, the outcome is that we will submit the proposal next week.', translation: 'Donc, le résultat est que nous soumettrons la proposition la semaine prochaine.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I am agree with your proposal.', correct: 'I agree with your proposal.', explanation: '"Agree" est un verbe en anglais, pas un adjectif ! On dit "I agree", pas "I am agree". Pas de "be" devant "agree".' },
      { wrong: 'The agenda is full of items.', correct: 'The agenda is packed. / We have a full agenda.', explanation: '"Agenda" en anglais = ordre du jour (pas une liste de choses à faire comme en français). On dit "a full agenda" ou "a packed agenda".' },
    ],
  },
  conversation: [
    { speaker: 'Youssef', role: 'A', text: 'Let\'s start the meeting. The first item on the agenda is the budget.', translation: "Commençons la réunion. Le premier point à l'ordre du jour est le budget." },
    { speaker: 'Aïcha', role: 'B', text: 'I\'d like to suggest we review the expenses from last quarter first.', translation: "Je suggère que nous examinions d'abord les dépenses du dernier trimestre." },
    { speaker: 'Youssef', role: 'A', text: 'Good idea. Does everyone agree? Any feedback?', translation: 'Bonne idée. Tout le monde est d\'accord ? Des commentaires ?' },
    { speaker: 'Aïcha', role: 'B', text: 'I have a concern about the deadline. Can we clarify the action items?', translation: "J'ai une préoccupation concernant la date limite. Pouvons-nous clarifier les points d'action ?" },
    { speaker: 'Youssef', role: 'A', text: 'Of course. The outcome we want is a clear plan. Let me clarify each action item.', translation: "Bien sûr. Le résultat que nous voulons est un plan clair. Laissez-moi clarifier chaque point d'action." },
    { speaker: 'Aïcha', role: 'B', text: 'Perfect. I agree with this approach. Let\'s make sure we meet the deadline.', translation: "Parfait. Je suis d'accord avec cette approche. Assurons-nous de respecter la date limite." },
  ],
  conversationTitle: 'Participer à une réunion d\'équipe',
  pronunciation: [
    { word: 'Agenda', phonetic: '/əˈdʒendə/', meaning: 'Ordre du jour', tip: 'Prononcez "e-DJEN-da" — l\'accent est sur "JEN" et le "g" = "dj". Pas "a-gen-da" !' },
    { word: 'Feedback', phonetic: '/ˈfiːdbæk/', meaning: 'Retour', tip: 'Prononcez "FID-back" — l\'accent est sur "FEED" et le "a" de "back" est ouvert.' },
    { word: 'Outcome', phonetic: '/ˈaʊtkʌm/', meaning: 'Résultat', tip: 'Prononcez "AOUT-keum" — l\'accent est sur "OUT" et le "u" de "come" est ouvert.' },
    { word: 'Clarify', phonetic: '/ˈklerɪfaɪ/', meaning: 'Clarifier', tip: 'Prononcez "KLER-i-faï" — l\'accent est sur "CLA" et le "a" final est long.' },
  ],
}

export const B1_L24: LessonContent = {
  vocab: [
    { english: 'Recommend', french: 'Recommander', phonetic: '/ˌrekəˈmend/', example: 'I recommend we delay the launch.', exampleTranslation: 'Je recommande de retarder le lancement.' },
    { english: 'Propose', french: 'Proposer', phonetic: '/prəˈpoʊz/', example: 'I\'d like to propose a different approach.', exampleTranslation: 'Je voudrais proposer une approche différente.' },
    { english: 'Implement', french: 'Mettre en œuvre', phonetic: '/ˈɪmplɪment/', example: 'We should implement these changes immediately.', exampleTranslation: 'Nous devrions mettre en œuvre ces changements immédiatement.' },
    { english: 'Alternative', french: 'Alternative', phonetic: '/ɔːlˈtɜːrnətɪv/', example: 'Is there an alternative solution?', exampleTranslation: 'Y a-t-il une solution alternative ?' },
    { english: 'Consider', french: 'Envisager / Considérer', phonetic: '/kənˈsɪdər/', example: 'We should consider all options before deciding.', exampleTranslation: 'Nous devrions envisager toutes les options avant de décider.' },
  ],
  grammar: {
    title: 'Faire des suggestions au travail — Should, could, I suggest',
    explanation: 'Pour faire des suggestions professionnelles : "I suggest/recommend THAT we + verbe" : "I suggest that we delay the launch" (Je suggère de retarder le lancement). "We SHOULD + verbe" : "We should consider all options" (Nous devrions envisager toutes les options). "We COULD + verbe" : "We could implement this next month" (Nous pourrions mettre cela en œuvre le mois prochain). "Why don\'t we + verbe?" : "Why don\'t we propose an alternative?" (Pourquoi ne pas proposer une alternative ?). "How about + -ing?" : "How about implementing this gradually?" (Et si on mettait cela en œuvre progressivement ?).',
    examples: [
      { sentence: 'I suggest that we implement the changes gradually.', translation: 'Je suggère de mettre en œuvre les changements progressivement.', isCorrect: true },
      { sentence: 'I suggest to implement the changes gradually.', translation: '', isCorrect: false },
      { sentence: 'We should consider all alternatives before making a decision.', translation: 'Nous devrions envisager toutes les alternatives avant de décider.', isCorrect: true },
      { sentence: 'Why don\'t we propose a new deadline?', translation: 'Pourquoi ne pas proposer une nouvelle date limite ?', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I suggest to implement the changes gradually.', correct: 'I suggest that we implement the changes gradually. / I suggest implementing the changes gradually.', explanation: 'Après "suggest", on utilise "that + sujet + verbe" ou "suggest + -ing", mais PAS "suggest + to + infinitif".' },
      { wrong: 'I recommend you to try this approach.', correct: 'I recommend that you try this approach. / I recommend trying this approach.', explanation: 'Comme "suggest", "recommend" ne prend PAS "to + infinitif". On dit "recommend that you try" ou "recommend trying".' },
    ],
  },
  conversation: [
    { speaker: 'Mariama', role: 'A', text: 'We need to improve our sales. Does anyone have suggestions?', translation: 'Nous devons améliorer nos ventes. Quelqu\'un a des suggestions ?' },
    { speaker: 'Oumar', role: 'B', text: 'I recommend that we consider an alternative marketing strategy.', translation: 'Je recommande d\'envisager une stratégie marketing alternative.' },
    { speaker: 'Mariama', role: 'A', text: 'That\'s a good point. How about implementing social media campaigns?', translation: "C'est un bon point. Et si on mettait en œuvre des campagnes sur les réseaux sociaux ?" },
    { speaker: 'Oumar', role: 'B', text: 'We could propose that to the client. Why don\'t we prepare a proposal?', translation: "Nous pourrions le proposer au client. Pourquoi ne pas préparer une proposition ?" },
    { speaker: 'Mariama', role: 'A', text: 'I\'ll draft it. We should also consider the budget implications.', translation: 'Je vais en préparer un brouillon. Nous devrions aussi envisager les implications budgétaires.' },
    { speaker: 'Oumar', role: 'B', text: 'Absolutely. I suggest we meet again on Thursday to review the proposal.', translation: 'Absolument. Je suggère que nous nous rencontrions à nouveau jeudi pour examiner la proposition.' },
  ],
  conversationTitle: 'Faire des suggestions au travail',
  pronunciation: [
    { word: 'Recommend', phonetic: '/ˌrekəˈmend/', meaning: 'Recommander', tip: 'L\'accent est sur "MEND" : "re-ke-MEND". Pas "RE-ko-mend" !' },
    { word: 'Propose', phonetic: '/prəˈpoʊz/', meaning: 'Proposer', tip: 'Prononcez "pre-POZ" — l\'accent est sur "POSE" et le "s" = "z" sonore.' },
    { word: 'Implement', phonetic: '/ˈɪmplɪment/', meaning: 'Mettre en œuvre', tip: 'Prononcez "IM-pli-ment" — l\'accent est sur "IM" et le "e" final est réduit.' },
    { word: 'Alternative', phonetic: '/ɔːlˈtɜːrnətɪv/', meaning: 'Alternative', tip: 'Prononcez "al-TER-ne-tiv" — l\'accent est sur "TER" et le "a" initial est ouvert.' },
  ],
}

export const B1_L25: LessonContent = {
  vocab: [
    { english: 'Revenue', french: 'Revenus / Chiffre d\'affaires', phonetic: '/ˈrevənuː/', example: 'Our revenue increased by 20% this year.', exampleTranslation: 'Nos revenus ont augmenté de 20 % cette année.' },
    { english: 'Profit', french: 'Profit / Bénéfice', phonetic: '/ˈprɒfɪt/', example: 'The company made a significant profit.', exampleTranslation: "L'entreprise a réalisé un bénéfice important." },
    { english: 'Negotiate', french: 'Négocier', phonetic: '/nɪˈɡoʊʃieɪt/', example: 'We need to negotiate better terms.', exampleTranslation: 'Nous devons négocier de meilleures conditions.' },
    { english: 'Strategy', french: 'Stratégie', phonetic: '/ˈstrætədʒi/', example: 'Our business strategy focuses on innovation.', exampleTranslation: "Notre stratégie d'entreprise se concentre sur l'innovation." },
  ],
  grammar: {
    title: 'Prononciation du vocabulaire professionnel — Faux amis',
    explanation: 'Les mots professionnels ont des pièges : "Revenue" = "REV-e-nou" (accent sur "REV", pas "re-VE-nu"), "Profit" = "PRO-fit" (pas "pro-fee"), "Negotiate" = "ni-GO-chi-eït" (accent sur "GO", le "ti" = "chi"), "Strategy" = "STRAT-e-dji" (pas "stra-TÉ-gi"). Ces prononciations sont essentielles pour les réunions et présentations en anglais des affaires.',
    examples: [
      { sentence: 'Our REV-e-nou increased significantly.', translation: 'Nos revenus ont augmenté considérablement.', isCorrect: true },
      { sentence: 'Our re-VE-nu increased significantly.', translation: '', isCorrect: false },
      { sentence: 'We need to negotiate the contract terms.', translation: 'Nous devons négocier les conditions du contrat.', isCorrect: true },
      { sentence: 'The strategy was successful.', translation: 'La stratégie a été un succès.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Our re-VE-nu increased significantly.', correct: 'Our REV-e-nou increased significantly.', explanation: '"Revenue" a l\'accent sur la PREMIÈRE syllabe : "REV-e-nou", pas "re-VE-nu" à la française !' },
      { wrong: 'Our stra-TÉ-gi worked well.', correct: 'Our STRAT-e-dji worked well.', explanation: '"Strategy" a l\'accent sur "STRAT" : "STRAT-e-dji". Pas "stra-TÉ-gi" !' },
    ],
  },
  conversation: [
    { speaker: 'Idrissa', role: 'A', text: 'Our revenue has been growing steadily. The profit margin is healthy.', translation: "Nos revenus augmentent régulièrement. La marge bénéficiaire est bonne." },
    { speaker: 'Fatou', role: 'B', text: 'That\'s excellent! Should we negotiate new deals with our suppliers?', translation: "C'est excellent ! Devrions-nous négocier de nouveaux accords avec nos fournisseurs ?" },
    { speaker: 'Idrissa', role: 'A', text: 'Yes, that\'s part of our new strategy. We need better terms.', translation: "Oui, c'est fait partie de notre nouvelle stratégie. Nous avons besoin de meilleures conditions." },
    { speaker: 'Fatou', role: 'B', text: 'I\'ll prepare a proposal. Good business pronunciation helps in negotiations!', translation: 'Je préparerai une proposition. Une bonne prononciation aide dans les négociations !' },
    { speaker: 'Idrissa', role: 'A', text: 'Absolutely. Saying "re-VE-nu" instead of "REV-e-nou" can be embarrassing!', translation: "Absolument. Dire \"re-VE-nu\" au lieu de \"REV-e-nou\" peut être gênant !" },
    { speaker: 'Fatou', role: 'B', text: 'Let\'s practice together. Clear communication is key in business.', translation: "Pratiquons ensemble. Une communication claire est essentielle en affaires." },
  ],
  conversationTitle: 'La prononciation en affaires',
  pronunciation: [
    { word: 'Revenue', phonetic: '/ˈrevənuː/', meaning: 'Revenus', tip: 'L\'accent est sur "REV" : "REV-e-nou". Pas "re-VE-nu" !' },
    { word: 'Profit', phonetic: '/ˈprɒfɪt/', meaning: 'Profit', tip: 'Prononcez "PRO-fit" — l\'accent est sur "PRO" et le "i" est court. Pas "pro-fee" !' },
    { word: 'Negotiate', phonetic: '/nɪˈɡoʊʃieɪt/', meaning: 'Négocier', tip: 'L\'accent est sur "GO" : "ni-GO-chi-eït". Le "ti" = "chi".' },
    { word: 'Strategy', phonetic: '/ˈstrætədʒi/', meaning: 'Stratégie', tip: 'L\'accent est sur "STRAT" : "STRAT-e-dji". Pas "stra-TÉ-gi" !' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 6: HEALTH & WELLNESS (b1-l26 through b1-l30)
// ════════════════════════════════════════════════════════════════════════════════

export const B1_L26: LessonContent = {
  vocab: [
    { english: 'Nutrition', french: 'Nutrition', phonetic: '/nuːˈtrɪʃən/', example: 'Good nutrition is essential for health.', exampleTranslation: 'Une bonne nutrition est essentielle pour la santé.' },
    { english: 'Exercise', french: 'Exercice (physique)', phonetic: '/ˈeksərsaɪz/', example: 'Regular exercise prevents many diseases.', exampleTranslation: "L'exercice régulier prévient de nombreuses maladies." },
    { english: 'Meditation', french: 'Méditation', phonetic: '/ˌmedɪˈteɪʃən/', example: 'Meditation helps reduce stress.', exampleTranslation: 'La méditation aide à réduire le stress.' },
    { english: 'Stress', french: 'Stress', phonetic: '/stres/', example: 'Managing stress is important for mental health.', exampleTranslation: "Gérer le stress est important pour la santé mentale." },
    { english: 'Wellness', french: 'Bien-être', phonetic: '/ˈwelnəs/', example: 'The company offers a wellness program.', exampleTranslation: "L'entreprise offre un programme de bien-être." },
  ],
  grammar: {
    title: 'Vocabulaire du bien-être — Santé physique et mentale',
    explanation: 'Le vocabulaire du bien-être distingue santé physique et mentale : "Physical health" (santé physique), "Mental health" (santé mentale), "Wellness" (bien-être global). Collocations : "maintain a healthy lifestyle" (maintenir un mode de vie sain), "reduce stress" (réduire le stress), "practice meditation" (pratiquer la méditation), "improve nutrition" (améliorer la nutrition). ATTENTION : "Exercise" en anglais = activité physique, pas "exercice" au sens scolaire. Pour un exercice scolaire, on dit "an exercise" ou "homework".',
    examples: [
      { sentence: 'She practices meditation to reduce stress.', translation: 'Elle pratique la méditation pour réduire le stress.', isCorrect: true },
      { sentence: 'He does many exercises for his health.', translation: '', isCorrect: false },
      { sentence: 'Good nutrition and regular exercise improve wellness.', translation: "Une bonne nutrition et de l'exercice régulier améliorent le bien-être.", isCorrect: true },
      { sentence: 'Mental health is as important as physical health.', translation: "La santé mentale est aussi importante que la santé physique.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'He does many exercises for his health.', correct: 'He exercises regularly for his health.', explanation: '"Exercise" au sens physique est indénombrable : "he exercises" (verbe) ou "he gets regular exercise" (nom). "Exercises" au pluriel = des exercices scolaires/gymnastiques.' },
      { wrong: 'I have a stress.', correct: 'I am stressed. / I have a lot of stress.', explanation: '"Stress" est indénombrable en anglais. On dit "I am stressed" ou "I have a lot of stress", pas "a stress".' },
    ],
  },
  conversation: [
    { speaker: 'Amina', role: 'A', text: 'How do you manage stress at work?', translation: 'Comment gères-tu le stress au travail ?' },
    { speaker: 'Kofi', role: 'B', text: 'I practice meditation every morning. It really helps my mental health.', translation: 'Je pratique la méditation chaque matin. Ça aide vraiment ma santé mentale.' },
    { speaker: 'Amina', role: 'A', text: 'I should try that. I also need to improve my nutrition.', translation: 'Je devrais essayer. J\'ai aussi besoin d\'améliorer ma nutrition.' },
    { speaker: 'Kofi', role: 'B', text: 'And don\'t forget exercise! Regular physical activity is essential for wellness.', translation: "Et n'oublie pas l'exercice ! L'activité physique régulière est essentielle pour le bien-être." },
    { speaker: 'Amina', role: 'A', text: 'You\'re right. I need to maintain a healthier lifestyle overall.', translation: "Tu as raison. Je dois maintenir un mode de vie plus sain en général." },
    { speaker: 'Kofi', role: 'B', text: 'Small changes make a big difference. Start with one habit at a time!', translation: 'Les petits changements font une grande différence. Commence par une habitude à la fois !' },
  ],
  conversationTitle: 'Parler de bien-être',
  pronunciation: [
    { word: 'Nutrition', phonetic: '/nuːˈtrɪʃən/', meaning: 'Nutrition', tip: 'Prononcez "nou-TRI-chenne" — l\'accent est sur "TRI". Pas "nu-tri-ssion" !' },
    { word: 'Exercise', phonetic: '/ˈeksərsaɪz/', meaning: 'Exercice', tip: 'Prononcez "EK-ser-saïz" — l\'accent est sur "EX" et le "s" final = "z".' },
    { word: 'Meditation', phonetic: '/ˌmedɪˈteɪʃən/', meaning: 'Méditation', tip: 'L\'accent est sur "TA" : "me-di-TÉÿ-chenne". Pas "mé-di-ta-tion" !' },
    { word: 'Wellness', phonetic: '/ˈwelnəs/', meaning: 'Bien-être', tip: 'Prononcez "UEL-nes" — le "w" initial en arrondissant les lèvres.' },
  ],
}

export const B1_L27: LessonContent = {
  vocab: [
    { english: 'Must be', french: 'Doit être (déduction)', phonetic: '/mʌst biː/', example: 'She must be tired after working all night.', exampleTranslation: 'Elle doit être fatiguée après avoir travaillé toute la nuit.' },
    { english: 'Might be', french: 'Pourrait être', phonetic: '/maɪt biː/', example: 'He might be at the gym right now.', exampleTranslation: 'Il pourrait être à la salle de sport en ce moment.' },
    { english: 'Can\'t be', french: 'Ne peut pas être', phonetic: '/kænt biː/', example: 'That can\'t be true! It\'s impossible.', exampleTranslation: 'Ça ne peut pas être vrai ! C\'est impossible.' },
    { english: 'Could be', french: 'Pourrait être', phonetic: '/kʊd biː/', example: 'It could be a side effect of the medication.', exampleTranslation: "Ça pourrait être un effet secondaire du médicament." },
    { english: 'May be', french: 'Peut être', phonetic: '/meɪ biː/', example: 'This may be the cause of your headache.', exampleTranslation: "Ceci peut être la cause de votre mal de tête." },
  ],
  grammar: {
    title: 'Les Modaux de Déduction — Must be, might be, can\'t be',
    explanation: 'Les modaux de déduction expriment la certitude d\'une supposition : "MUST BE" = je suis presque sûr (95%) : "She must be ill — she looks pale" (Elle doit être malade). "MIGHT/MAY/COULD BE" = c\'est possible (50%) : "He might be stressed" (Il pourrait être stressé). "CAN\'T BE" = je suis presque sûr que non (95%) : "That can\'t be healthy" (Ça ne peut pas être sain). ATTENTION : "can\'t be" (déduction négative) ≠ "must not be" (interdiction). "Must be" (déduction) ≠ "must" (obligation). Le contexte détermine le sens.',
    examples: [
      { sentence: 'She must be exhausted after the marathon.', translation: 'Elle doit être épuisée après le marathon.', isCorrect: true },
      { sentence: 'He can\'t to be at home.', translation: '', isCorrect: false },
      { sentence: 'The symptoms might be caused by stress.', translation: 'Les symptômes pourraient être causés par le stress.', isCorrect: true },
      { sentence: 'That can\'t be good for your health.', translation: 'Ça ne peut pas être bon pour ta santé.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'He can\'t to be at home.', correct: 'He can\'t be at home.', explanation: 'Après les modaux (can, must, might, may, could), le verbe est à L\'INFINITIF SANS "to" : "be", pas "to be".' },
      { wrong: 'She mustn\'t be happy. (déduction)', correct: 'She can\'t be happy. (déduction)', explanation: '"Mustn\'t be" = interdiction. Pour une déduction négative (je suis sûr que non), on utilise "CAN\'T be", pas "mustn\'t be".' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'Have you seen Marc? He looks terrible today.', translation: 'As-tu vu Marc ? Il a l\'air affreux aujourd\'hui.' },
    { speaker: 'Moussa', role: 'B', text: 'He must be stressed about the deadline. Or he might be coming down with something.', translation: 'Il doit être stressé par la date limite. Ou il pourrait être en train de tomber malade.' },
    { speaker: 'Fatou', role: 'A', text: 'It can\'t be just stress. He looks really ill.', translation: 'Ça ne peut pas être juste le stress. Il a vraiment l\'air malade.' },
    { speaker: 'Moussa', role: 'B', text: 'You could be right. The symptoms may be from a cold or the flu.', translation: "Tu pourrais avoir raison. Les symptômes peuvent être d'un rhume ou de la grippe." },
    { speaker: 'Fatou', role: 'A', text: 'He should see a doctor. It must be serious if he can barely stand.', translation: "Il devrait voir un médecin. Ça doit être sérieux s'il peut à peine se tenir debout." },
    { speaker: 'Moussa', role: 'B', text: 'I agree. Let\'s suggest he goes to the clinic.', translation: "Je suis d'accord. Suggérons-lui d'aller à la clinique." },
  ],
  conversationTitle: 'Faire des déductions sur la santé',
  pronunciation: [
    { word: 'Must', phonetic: '/mʌst/', meaning: 'Doit', tip: 'Prononcez "MEUST" — le "u" est ouvert comme dans "cup". Le "t" peut être adouci.' },
    { word: 'Might', phonetic: '/maɪt/', meaning: 'Pourrait', tip: 'Prononcez "MAÏT" — le "i" est long et le "gh" est silencieux.' },
    { word: 'Can\'t', phonetic: '/kænt/', meaning: 'Ne peut pas', tip: 'Prononcez "KANT" — le "a" est très ouvert comme dans "cat". Différent de "can" /kæn/.' },
    { word: 'Symptom', phonetic: '/ˈsɪmptəm/', meaning: 'Symptôme', tip: 'Prononcez "SIMP-tem" — l\'accent est sur "SIM" et le "p" est prononcé.' },
  ],
}

export const B1_L28: LessonContent = {
  vocab: [
    { english: 'Balanced diet', french: 'Régime équilibré', phonetic: '/ˈbælənst ˈdaɪət/', example: 'A balanced diet includes fruits and vegetables.', exampleTranslation: 'Un régime équilibré inclut des fruits et des légumes.' },
    { english: 'Workout', french: 'Séance d\'entraînement', phonetic: '/ˈwɜːrkaʊt/', example: 'I do a 30-minute workout every morning.', exampleTranslation: 'Je fais une séance d\'entraînement de 30 minutes chaque matin.' },
    { english: 'Hydration', french: 'Hydratation', phonetic: '/haɪˈdreɪʃən/', example: 'Proper hydration is important during exercise.', exampleTranslation: "Une hydratation appropriée est importante pendant l'exercice." },
    { english: 'Immune system', french: 'Système immunitaire', phonetic: '/ɪˈmjuːn ˈsɪstəm/', example: 'Vitamins help your immune system.', exampleTranslation: 'Les vitamines aident votre système immunitaire.' },
    { english: 'Recovery', french: 'Récupération', phonetic: '/rɪˈkʌvəri/', example: 'Rest is essential for recovery after exercise.', exampleTranslation: "Le repos est essentiel pour la récupération après l'exercice." },
  ],
  grammar: {
    title: 'Discuter d\'un mode de vie sain — Quantificateurs et fréquence',
    explanation: 'Pour parler de habitudes saines, utilisez les quantificateurs : "Plenty of" (beaucoup de), "A lot of" (beaucoup de), "Enough" (assez de), "Too much/too many" (trop de), "A little" (un peu). "I drink plenty of water" (Je bois beaucoup d\'eau), "I don\'t get enough sleep" (Je ne dors pas assez), "Too much sugar is bad for you" (Trop de sucre est mauvais pour vous). Adverbes de fréquence : "I always eat breakfast", "I usually work out three times a week", "I rarely eat junk food".',
    examples: [
      { sentence: 'I drink plenty of water throughout the day.', translation: "Je bois beaucoup d'eau tout au long de la journée.", isCorrect: true },
      { sentence: 'She eats too many sugar.', translation: '', isCorrect: false },
      { sentence: 'I usually work out three times a week for recovery.', translation: "Je m'entraîne généralement trois fois par semaine pour la récupération.", isCorrect: true },
      { sentence: 'A balanced diet supports your immune system.', translation: 'Un régime équilibré soutient votre système immunitaire.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She eats too many sugar.', correct: 'She eats too much sugar.', explanation: '"Sugar" est indénombrable, donc on utilise "too much" (pas "too many"). "Too many" est pour les noms dénombrables : "too many cookies".' },
      { wrong: 'I don\'t sleep enough hours.', correct: 'I don\'t get enough sleep.', explanation: 'En anglais, on dit "get enough sleep" (pas "sleep enough hours"). "Sleep" est utilisé comme nom dans cette expression.' },
    ],
  },
  conversation: [
    { speaker: 'Youssef', role: 'A', text: 'What do you do to maintain a healthy lifestyle?', translation: 'Que fais-tu pour maintenir un mode de vie sain ?' },
    { speaker: 'Aïcha', role: 'B', text: 'I follow a balanced diet and do a workout every morning.', translation: "Je suis un régime équilibré et je fais une séance d'entraînement chaque matin." },
    { speaker: 'Youssef', role: 'A', text: 'That\'s great! I need to improve my nutrition. I eat too much junk food.', translation: "C'est super ! Je dois améliorer ma nutrition. Je mange trop de malbouffe." },
    { speaker: 'Aïcha', role: 'B', text: 'Try adding more fruits and vegetables. And don\'t forget hydration — drink plenty of water!', translation: "Essaie d'ajouter plus de fruits et légumes. Et n'oublie pas l'hydratation — bois beaucoup d'eau !" },
    { speaker: 'Youssef', role: 'A', text: 'Good advice! What about recovery after exercise?', translation: "Bon conseil ! Et la récupération après l'exercice ?" },
    { speaker: 'Aïcha', role: 'B', text: 'Rest is crucial. Getting enough sleep boosts your immune system too.', translation: 'Le repos est crucial. Dormir suffisamment stimule aussi votre système immunitaire.' },
  ],
  conversationTitle: 'Discuter d\'un mode de vie sain',
  pronunciation: [
    { word: 'Diet', phonetic: '/ˈdaɪət/', meaning: 'Régime', tip: 'Prononcez "DAÏ-et" — le "i" est long et l\'accent est sur "DI". Pas "di-èt" !' },
    { word: 'Workout', phonetic: '/ˈwɜːrkaʊt/', meaning: 'Entraînement', tip: 'Prononcez "UERK-aout" — l\'accent est sur "WORK" et le "ou" = "ao".' },
    { word: 'Immune', phonetic: '/ɪˈmjuːn/', meaning: 'Immunitaire', tip: 'Prononcez "i-MIOUN" — l\'accent est sur "MUNE" et le "u" est long.' },
    { word: 'Recovery', phonetic: '/rɪˈkʌvəri/', meaning: 'Récupération', tip: 'L\'accent est sur "COV" : "ri-KEU-ve-ri". Pas "re-co-VE-ry" !' },
  ],
}

export const B1_L29: LessonContent = {
  vocab: [
    { english: 'Should', french: 'Devrait (conseil)', phonetic: '/ʃʊd/', example: 'You should see a doctor if you feel unwell.', exampleTranslation: 'Tu devrais voir un médecin si tu te sens mal.' },
    { english: 'Ought to', french: 'Devrait (conseil formel)', phonetic: '/ˈɔːt tuː/', example: 'You ought to take your medication regularly.', exampleTranslation: 'Tu devrais prendre ton médicament régulièrement.' },
    { english: 'Had better', french: 'Ferais mieux de', phonetic: '/hæd ˈbetər/', example: 'You had better rest now, or you\'ll get worse.', exampleTranslation: 'Tu ferais mieux de te reposer maintenant, sinon tu vas empirer.' },
    { english: 'Advise', french: 'Conseiller', phonetic: '/ədˈvaɪz/', example: 'I advise you to drink more water.', exampleTranslation: 'Je te conseille de boire plus d\'eau.' },
    { english: 'Recommend', french: 'Recommander', phonetic: '/ˌrekəˈmend/', example: 'The doctor recommended more exercise.', exampleTranslation: "Le médecin a recommandé plus d'exercice." },
  ],
  grammar: {
    title: 'Donner des conseils — Should, ought to, had better',
    explanation: 'Pour donner des conseils de santé : "SHOULD" = conseil général (modéré) : "You should eat more vegetables" (Tu devrais manger plus de légumes). "OUGHT TO" = conseil formel (même sens que "should") : "You ought to exercise regularly". "HAD BETTER" = conseil urgent (attention aux conséquences si on ne suit pas le conseil) : "You had better see a doctor" (Tu ferais mieux de voir un médecin — c\'est urgent). "HAD BETTER" est plus fort que "SHOULD". Négatif : "shouldn\'t", "had better not". ATTENTION : "advise" (verbe) avec "s" ≠ "advice" (nom) sans "s".',
    examples: [
      { sentence: 'You should get more sleep.', translation: 'Tu devrais dormir plus.', isCorrect: true },
      { sentence: 'You had better to see a doctor.', translation: '', isCorrect: false },
      { sentence: 'She ought to reduce her stress levels.', translation: 'Elle devrait réduire son niveau de stress.', isCorrect: true },
      { sentence: 'I advise you not to ignore the symptoms.', translation: 'Je te conseille de ne pas ignorer les symptômes.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'You had better to see a doctor.', correct: 'You had better see a doctor.', explanation: 'Après "had better", on utilise le verbe SANS "to" : "had better see", pas "had better to see". Comme tous les modaux !' },
      { wrong: 'He gave me a good advise.', correct: 'He gave me good advice.', explanation: '"Advice" est un nom indénombrable : on dit "good advice", pas "a good advise". "Advise" avec "s" = le verbe.' },
    ],
  },
  conversation: [
    { speaker: 'Oumar', role: 'A', text: 'I\'ve been having headaches all week. What should I do?', translation: "J'ai eu des maux de tête toute la semaine. Que devrais-je faire ?" },
    { speaker: 'Mariama', role: 'B', text: 'You ought to see a doctor. You had better not ignore it.', translation: "Tu devrais voir un médecin. Tu ferais mieux de ne pas l'ignorer." },
    { speaker: 'Oumar', role: 'A', text: 'I know, but I don\'t have time. Maybe I should just take some medicine.', translation: "Je sais, mais je n'ai pas le temps. Peut-être que je devrais juste prendre des médicaments." },
    { speaker: 'Mariama', role: 'B', text: 'I strongly advise you to go. My doctor recommended acupuncture for my headaches.', translation: "Je te conseille vivement d'y aller. Mon médecin m'a recommandé l'acupuncture pour mes maux de tête." },
    { speaker: 'Oumar', role: 'A', text: 'Did it help? I should consider alternative treatments too.', translation: "Ça a aidé ? Je devrais envisager aussi des traitements alternatifs." },
    { speaker: 'Mariama', role: 'B', text: 'It really did! You had better take care of your health before it gets worse.', translation: "Vraiment ! Tu ferais mieux de prendre soin de ta santé avant que ça empire." },
  ],
  conversationTitle: 'Donner des conseils de santé',
  pronunciation: [
    { word: 'Should', phonetic: '/ʃʊd/', meaning: 'Devrait', tip: 'Prononcez "CHOUD" — le "sh" et le "l" sont muets. Pas "choul-de" !' },
    { word: 'Ought', phonetic: '/ˈɔːt/', meaning: 'Devrait', tip: 'Prononcez "OT" — le "gh" est totalement silencieux ! Pas "ougt" ni "auchte".' },
    { word: 'Better', phonetic: '/ˈbetər/', meaning: 'Mieux', tip: 'Prononcez "BÉ-ter" — le "tt" = un seul "t" américain (entre "t" et "d").' },
    { word: 'Advice', phonetic: '/ədˈvaɪs/', meaning: 'Conseil (nom)', tip: 'Prononcez "ed-VAÏS" — le "c" = "s" doux. Verbe = "advise" avec "z" : "ed-VAÏZ".' },
  ],
}

export const B1_L30: LessonContent = {
  vocab: [
    { english: 'Prescription', french: 'Ordonnance', phonetic: '/prɪˈskrɪpʃən/', example: 'You need a prescription for this medication.', exampleTranslation: 'Vous avez besoin d\'une ordonnance pour ce médicament.' },
    { english: 'Pharmacy', french: 'Pharmacie', phonetic: '/ˈfɑːrməsi/', example: 'You can pick up your prescription at the pharmacy.', exampleTranslation: 'Vous pouvez récupérer votre ordonnance à la pharmacie.' },
    { english: 'Side effect', french: 'Effet secondaire', phonetic: '/saɪd ɪˈfekt/', example: 'This medication may cause side effects.', exampleTranslation: 'Ce médicament peut causer des effets secondaires.' },
    { english: 'Diagnosis', french: 'Diagnostic', phonetic: '/ˌdaɪəɡˈnoʊsɪs/', example: 'The diagnosis was positive.', exampleTranslation: 'Le diagnostic était positif.' },
  ],
  grammar: {
    title: 'Prononciation des termes médicaux — Mots complexes',
    explanation: 'Les termes médicaux sont souvent longs et l\'accent tonique est crucial : "Prescription" = "pri-SKRIP-chenne" (accent sur "SCRIP"), "Pharmacy" = "FAR-ma-si" (accent sur "FAR", pas "far-MA-ci"), "Diagnosis" = "daï-og-NO-sis" (accent sur "NO"). "Side effect" = "SAÏD i-FECT" (accent sur chaque mot). ATTENTION : "pharmacy" se prononce "FAR-ma-si", pas "far-ma-SI".',
    examples: [
      { sentence: 'I need to pick up my pre-SCRIP-tion.', translation: 'Je dois récupérer mon ordonnance.', isCorrect: true },
      { sentence: 'The far-MA-cy is closed.', translation: '', isCorrect: false },
      { sentence: 'The diagnosis was confirmed by the doctor.', translation: 'Le diagnostic a été confirmé par le médecin.', isCorrect: true },
      { sentence: 'Be aware of possible side effects.', translation: 'Soyez conscient des effets secondaires possibles.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The far-MA-cy is closed.', correct: 'The FAR-ma-si is closed.', explanation: '"Pharmacy" a l\'accent sur la PREMIÈRE syllabe : "FAR-ma-si", pas "far-MA-ci" !' },
      { wrong: 'She received a diag-NO-sis.', correct: 'She received a daï-og-NO-sis.', explanation: '"Diagnosis" a l\'accent sur "NO" : "daï-og-NO-sis". La prononciation du "g" est douce comme dans "go".' },
    ],
  },
  conversation: [
    { speaker: 'Kofi', role: 'A', text: 'I went to the pharmacy to pick up my prescription.', translation: 'Je suis allé à la pharmacie pour récupérer mon ordonnance.' },
    { speaker: 'Amina', role: 'B', text: 'Did the doctor mention any side effects?', translation: 'Le médecin a-t-il mentionné des effets secondaires ?' },
    { speaker: 'Kofi', role: 'A', text: 'Yes, she said it might cause drowsiness. The diagnosis was a mild infection.', translation: 'Oui, elle a dit que ça pourrait causer de la somnolence. Le diagnostic était une infection légère.' },
    { speaker: 'Amina', role: 'B', text: 'Take care of yourself! You had better rest and follow the prescription carefully.', translation: 'Prends soin de toi ! Tu ferais mieux de te reposer et suivre l\'ordonnance attentivement.' },
    { speaker: 'Kofi', role: 'A', text: 'I will. Health terminology can be hard to pronounce, though!', translation: "Je le ferai. La terminologie médicale peut être difficile à prononcer, cependant !" },
    { speaker: 'Amina', role: 'B', text: 'Practice makes perfect! Just remember: FAR-ma-si, not far-MA-ci!', translation: "La pratique rend parfait ! Souviens-toi juste : FAR-ma-si, pas far-MA-ci !" },
  ],
  conversationTitle: 'Termes médicaux en anglais',
  pronunciation: [
    { word: 'Prescription', phonetic: '/prɪˈskrɪpʃən/', meaning: 'Ordonnance', tip: 'L\'accent est sur "SCRIP" : "pri-SKRIP-chenne". Pas "pre-skrip-TION" !' },
    { word: 'Pharmacy', phonetic: '/ˈfɑːrməsi/', meaning: 'Pharmacie', tip: 'L\'accent est sur "FAR" : "FAR-ma-si". Pas "far-MA-ci" !' },
    { word: 'Diagnosis', phonetic: '/ˌdaɪəɡˈnoʊsɪs/', meaning: 'Diagnostic', tip: 'L\'accent est sur "NO" : "daï-og-NO-sis". Pas "di-ag-NO-sis" !' },
    { word: 'Symptom', phonetic: '/ˈsɪmptəm/', meaning: 'Symptôme', tip: 'L\'accent est sur "SIM" : "SIMP-tem". Pas "sim-PHÔ-me" !' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 7: TRAVEL EXPERIENCES (b1-l31 through b1-l35)
// ════════════════════════════════════════════════════════════════════════════════

export const B1_L31: LessonContent = {
  vocab: [
    { english: 'Adventure', french: 'Aventure', phonetic: '/ədˈventʃər/', example: 'We had an amazing adventure in Morocco.', exampleTranslation: 'Nous avons vécu une aventure incroyable au Maroc.' },
    { english: 'Destination', french: 'Destination', phonetic: '/ˌdestɪˈneɪʃən/', example: 'What\'s your dream travel destination?', exampleTranslation: 'Quelle est ta destination de voyage de rêve ?' },
    { english: 'Itinerary', french: 'Itinéraire', phonetic: '/aɪˈtɪnəreri/', example: 'I planned a detailed itinerary for our trip.', exampleTranslation: "J'ai planifié un itinéraire détaillé pour notre voyage." },
    { english: 'Excursion', french: 'Excursion', phonetic: '/ɪkˈskɜːrʒən/', example: 'We took a boat excursion around the island.', exampleTranslation: 'Nous avons fait une excursion en bateau autour de l\'île.' },
    { english: 'Souvenir', french: 'Souvenir', phonetic: '/ˌsuːvəˈnɪr/', example: 'I bought a beautiful souvenir from the market.', exampleTranslation: "J'ai acheté un beau souvenir au marché." },
  ],
  grammar: {
    title: 'Vocabulaire du voyage — Mots et expressions de voyage',
    explanation: 'Le vocabulaire du voyage : "Destination" = lieu où on va, "Itinerary" = plan de voyage détaillé, "Excursion" = courte visite organisée, "Adventure" = expérience excitante, "Souvenir" = objet rappelant le voyage. Collocations : "go on an excursion" (faire une excursion), "plan an itinerary" (planifier un itinéraire), "reach a destination" (atteindre une destination), "embark on an adventure" (se lancer dans une aventure). ATTENTION : "itinerary" se prononce "aï-TI-ne-raï-ri", pas "i-ti-né-rai-re" !',
    examples: [
      { sentence: 'We went on an excursion to the mountains.', translation: 'Nous sommes allés en excursion à la montagne.', isCorrect: true },
      { sentence: 'She made an itinerary for the travel.', translation: '', isCorrect: false },
      { sentence: 'Our destination was a small village on the coast.', translation: 'Notre destination était un petit village sur la côte.', isCorrect: true },
      { sentence: 'He brought back souvenirs from every destination.', translation: 'Il a rapporté des souvenirs de chaque destination.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She made an itinerary for the travel.', correct: 'She planned an itinerary for the trip.', explanation: 'On dit "plan an itinerary for a trip" (pas "make an itinerary for the travel"). "Travel" est généralement un verbe ou nom indénombrable.' },
      { wrong: 'We did an excursion.', correct: 'We went on an excursion.', explanation: 'On dit "go on an excursion" (pas "do an excursion"). La préposition "on" est fixe.' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'What was your best travel adventure?', translation: 'Quelle a été ta meilleure aventure de voyage ?' },
    { speaker: 'Youssef', role: 'B', text: 'Definitely Senegal! The destination was incredible. We went on a boat excursion.', translation: "Définitivement le Sénégal ! La destination était incroyable. Nous avons fait une excursion en bateau." },
    { speaker: 'Fatou', role: 'A', text: 'Did you plan a detailed itinerary?', translation: 'As-tu planifié un itinéraire détaillé ?' },
    { speaker: 'Youssef', role: 'B', text: 'Yes, but we also left time for spontaneous adventures. That\'s the best way to travel!', translation: "Oui, mais nous avons aussi laissé du temps pour des aventures spontanées. C'est la meilleure façon de voyager !" },
    { speaker: 'Fatou', role: 'A', text: 'I agree! I always buy local souvenirs to remember each destination.', translation: "Je suis d'accord ! J'achète toujours des souvenirs locaux pour me rappeler chaque destination." },
    { speaker: 'Youssef', role: 'B', text: 'Me too! Every trip is a new adventure. Where should we go next?', translation: "Moi aussi ! Chaque voyage est une nouvelle aventure. Où devrions-nous aller ensuite ?" },
  ],
  conversationTitle: 'Parler de ses aventures de voyage',
  pronunciation: [
    { word: 'Adventure', phonetic: '/ədˈventʃər/', meaning: 'Aventure', tip: 'L\'accent est sur "VEN" : "ed-VEN-tcher". Pas "a-ven-TURE" !' },
    { word: 'Destination', phonetic: '/ˌdestɪˈneɪʃən/', meaning: 'Destination', tip: 'L\'accent est sur "NA" : "des-ti-NÉÿ-chenne". Pas "des-ti-na-TION" !' },
    { word: 'Itinerary', phonetic: '/aɪˈtɪnəreri/', meaning: 'Itinéraire', tip: 'L\'accent est sur "TIN" : "aï-TI-ne-raï-ri". Pas "i-ti-NÉ-rai-re" !' },
    { word: 'Excursion', phonetic: '/ɪkˈskɜːrʒən/', meaning: 'Excursion', tip: 'L\'accent est sur "CUR" : "ik-SKER-ジャンヌ". Le "sion" = "ジャンヌ".' },
  ],
}

export const B1_L32: LessonContent = {
  vocab: [
    { english: 'Visited', french: 'Visité', phonetic: '/ˈvɪzɪtɪd/', example: 'I have visited many countries in Africa.', exampleTranslation: "J'ai visité beaucoup de pays en Afrique." },
    { english: 'Explored', french: 'Exploré', phonetic: '/ɪkˈsplɔːrd/', example: 'We have explored the old city center.', exampleTranslation: "Nous avons exploré le vieux centre-ville." },
    { english: 'Experienced', french: 'Vécu / Expérimenté', phonetic: '/ɪkˈspɪriənst/', example: 'She has experienced many different cultures.', exampleTranslation: "Elle a vécu beaucoup de cultures différentes." },
    { english: 'Traveled', french: 'Voyagé', phonetic: '/ˈtrævld/', example: 'He has traveled across three continents.', exampleTranslation: 'Il a voyagé à travers trois continents.' },
    { english: 'Discovered', french: 'Découvert', phonetic: '/dɪˈskʌvərd/', example: 'I have discovered hidden beaches in Greece.', exampleTranslation: "J'ai découvert des plages cachées en Grèce." },
  ],
  grammar: {
    title: 'Le Present Perfect — I have visited many countries',
    explanation: 'Le Present Perfect relie le passé au présent : HAVE/HAS + participe passé. "I HAVE VISITED many countries" (J\'ai visité beaucoup de pays — et cette expérience est encore pertinente maintenant). On l\'utilise pour : 1) Expériences de vie : "I have been to Paris" (Je suis déjà allé à Paris). 2) Changements récents : "She has traveled a lot this year". 3) Actions qui continuent : "I have lived here for five years". ATTENTION : "I have been TO Paris" (je suis allé À Paris) ≠ "I have been IN Paris" (j\'ai été à Paris = j\'y étais). "Ever" dans les questions : "Have you ever visited Japan?" (Avez-vous déjà visité le Japon ?).',
    examples: [
      { sentence: 'I have visited Morocco twice.', translation: "J'ai visité le Maroc deux fois.", isCorrect: true },
      { sentence: 'I have visit Morocco twice.', translation: '', isCorrect: false },
      { sentence: 'Have you ever explored the Sahara Desert?', translation: 'Avez-vous déjà exploré le désert du Sahara ?', isCorrect: true },
      { sentence: 'She has traveled to fifteen countries.', translation: 'Elle a voyagé dans quinze pays.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I have visit Morocco twice.', correct: 'I have visited Morocco twice.', explanation: 'Le Present Perfect utilise le PARTICIPE PASSÉ : "visited" (avec -ed), pas "visit" (infinitif).' },
      { wrong: 'I have gone to Paris last year.', correct: 'I went to Paris last year.', explanation: 'Avec un moment précis du passé ("last year"), on utilise le PAST SIMPLE, pas le Present Perfect. Le Present Perfect ne s\'utilise JAMAIS avec une date précise.' },
    ],
  },
  conversation: [
    { speaker: 'Aïcha', role: 'A', text: 'Have you ever visited Senegal?', translation: 'As-tu déjà visité le Sénégal ?' },
    { speaker: 'Idrissa', role: 'B', text: 'Yes! I have been to Dakar twice. I have explored the markets and tried local food.', translation: "Oui ! Je suis allé à Dakar deux fois. J'ai exploré les marchés et essayé la nourriture locale." },
    { speaker: 'Aïcha', role: 'A', text: 'That sounds amazing! I have traveled to East Africa but never to West Africa.', translation: "Ça a l'air incroyable ! J'ai voyagé en Afrique de l'Est mais jamais en Afrique de l'Ouest." },
    { speaker: 'Idrissa', role: 'B', text: 'You should go! I have discovered such wonderful places there.', translation: "Tu devrais y aller ! J'y ai découvert des endroits si merveilleux." },
    { speaker: 'Aïcha', role: 'A', text: 'Has she experienced the music festivals there?', translation: 'A-t-elle vécu les festivals de musique là-bas ?' },
    { speaker: 'Idrissa', role: 'B', text: 'Yes, she has! She said it was the highlight of her trip.', translation: 'Oui ! Elle a dit que c\'était le point culminant de son voyage.' },
  ],
  conversationTitle: 'Partager ses expériences de voyage',
  pronunciation: [
    { word: 'Explored', phonetic: '/ɪkˈsplɔːrd/', meaning: 'Exploré', tip: 'Prononcez "ik-SPLORD" — l\'accent est sur "PLORE" et le "-ed" = "d".' },
    { word: 'Experienced', phonetic: '/ɪkˈspɪriənst/', meaning: 'Vécu', tip: 'Prononcez "ik-SPI-ri-enst" — l\'accent est sur "SPI".' },
    { word: 'Traveled', phonetic: '/ˈtrævld/', meaning: 'Voyagé', tip: 'Prononcez "TRAE-vld" — le "a" est ouvert comme dans "cat".' },
    { word: 'Discovered', phonetic: '/dɪˈskʌvərd/', meaning: 'Découvert', tip: 'Prononcez "di-SKEU-verd" — l\'accent est sur "COV".' },
  ],
}

export const B1_L33: LessonContent = {
  vocab: [
    { english: 'Memorable', french: 'Mémorable', phonetic: '/ˈmemərəbl/', example: 'It was the most memorable trip of my life.', exampleTranslation: "C'était le voyage le plus mémorable de ma vie." },
    { english: 'Fascinating', french: 'Fascinant(e)', phonetic: '/ˈfæsɪneɪtɪŋ/', example: 'The local culture was fascinating.', exampleTranslation: 'La culture locale était fascinante.' },
    { english: 'Breathtaking', french: 'À couper le souffle', phonetic: '/ˈbreθteɪkɪŋ/', example: 'The view from the mountain was breathtaking.', exampleTranslation: 'La vue depuis la montagne était à couper le souffle.' },
    { english: 'Overwhelming', french: 'Bouleversant / Écrasant', phonetic: '/ˌoʊvərˈwelmɪŋ/', example: 'The hospitality was overwhelming.', exampleTranslation: "L'hospitalité était bouleversante." },
    { english: 'Unforgettable', french: 'Inoubliable', phonetic: '/ˌʌnfərˈɡetəbl/', example: 'We had an unforgettable experience.', exampleTranslation: 'Nous avons vécu une expérience inoubliable.' },
  ],
  grammar: {
    title: 'Raconter ses voyages — Adjectifs et expressions impressionnants',
    explanation: 'Pour décrire vos voyages de manière vivante, utilisez des adjectifs forts : "breathtaking" (à couper le souffle), "unforgettable" (inoubliable), "fascinating" (fascinant), "memorable" (mémorable), "overwhelming" (bouleversant). Structures : "It was the most + adjectif + noun" : "It was the most breathtaking view". "One of the + superlatif + plural" : "One of the most fascinating cities I have ever visited". "I have never + participe passé" : "I have never seen anything so beautiful".',
    examples: [
      { sentence: 'It was the most memorable experience of my life.', translation: "C'était l'expérience la plus mémorable de ma vie.", isCorrect: true },
      { sentence: 'It was the most breathtaking view I have ever saw.', translation: '', isCorrect: false },
      { sentence: 'The hospitality was overwhelming and unforgettable.', translation: "L'hospitalité était bouleversante et inoubliable.", isCorrect: true },
      { sentence: 'I have never met such fascinating people.', translation: "Je n'ai jamais rencontré de personnes aussi fascinantes.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'It was the most breathtaking view I have ever saw.', correct: 'It was the most breathtaking view I have ever seen.', explanation: 'Après "have", on utilise le participe passé : "seen" (pas "saw"). See → saw → seen.' },
      { wrong: 'It was a very unforgettable trip.', correct: 'It was an unforgettable trip.', explanation: '"Unforgettable" est déjà un superlatif absolu — on ne dit pas "very unforgettable". On dit simplement "an unforgettable trip".' },
    ],
  },
  conversation: [
    { speaker: 'Moussa', role: 'A', text: 'Tell me about your most memorable trip!', translation: 'Raconte-moi ton voyage le plus mémorable !' },
    { speaker: 'Fatou', role: 'B', text: 'It was a trip to the mountains. The view was breathtaking — I have never seen anything so beautiful.', translation: "C'était un voyage à la montagne. La vue était à couper le souffle — je n'ai jamais rien vu d'aussi beau." },
    { speaker: 'Moussa', role: 'A', text: 'That sounds unforgettable! What made it so special?', translation: "Ça a l'air inoubliable ! Qu'est-ce qui l'a rendu si spécial ?" },
    { speaker: 'Fatou', role: 'B', text: 'The local people were fascinating. Their hospitality was overwhelming.', translation: "Les gens locaux étaient fascinants. Leur hospitalité était bouleversante." },
    { speaker: 'Moussa', role: 'A', text: 'I had a similar experience when I traveled. The culture was the most fascinating part.', translation: "J'ai eu une expérience similaire en voyageant. La culture était la partie la plus fascinante." },
    { speaker: 'Fatou', role: 'B', text: 'That\'s why I love traveling — every destination has something unforgettable to offer.', translation: "C'est pourquoi j'adore voyager — chaque destination a quelque chose d'inoubliable à offrir." },
  ],
  conversationTitle: 'Raconter ses expériences de voyage',
  pronunciation: [
    { word: 'Memorable', phonetic: '/ˈmemərəbl/', meaning: 'Mémorable', tip: 'L\'accent est sur "MEM" : "MEM-e-ra-bl". Pas "me-MO-ra-ble" !' },
    { word: 'Fascinating', phonetic: '/ˈfæsɪneɪtɪŋ/', meaning: 'Fascinant', tip: 'L\'accent est sur "FAS" : "FAS-i-neï-ting". Pas "fa-si-NA-ting" !' },
    { word: 'Breathtaking', phonetic: '/ˈbreθteɪkɪŋ/', meaning: 'À couper le souffle', tip: 'Prononcez "BRETH-téï-king" — le "th" est expiré et l\'accent est sur "BREATH".' },
    { word: 'Unforgettable', phonetic: '/ˌʌnfərˈɡetəbl/', meaning: 'Inoubliable', tip: 'L\'accent est sur "GET" : "eun-fer-GET-a-bl".' },
  ],
}

export const B1_L34: LessonContent = {
  vocab: [
    { english: 'The most beautiful', french: 'Le/La plus beau/belle', phonetic: '/ðə moʊst ˈbjuːtɪfl/', example: 'It was the most beautiful sunset I have ever seen.', exampleTranslation: "C'était le plus beau coucher de soleil que j'aie jamais vu." },
    { english: 'The best', french: 'Le/La meilleur(e)', phonetic: '/ðə best/', example: 'This is the best restaurant in the city.', exampleTranslation: "C'est le meilleur restaurant de la ville." },
    { english: 'The worst', french: 'Le/La pire', phonetic: '/ðə wɜːrst/', example: 'That was the worst flight of my life.', exampleTranslation: "C'était le pire vol de ma vie." },
    { english: 'The least expensive', french: 'Le/La moins cher/chère', phonetic: '/ðə liːst ɪkˈspensɪv/', example: 'This is the least expensive hotel in the area.', exampleTranslation: "C'est l'hôtel le moins cher de la région." },
    { english: 'The furthest', french: 'Le/La plus loin(e)', phonetic: '/ðə ˈfɜːrðɪst/', example: 'It was the furthest I had ever traveled.', exampleTranslation: "C'était le plus loin que j'aie jamais voyagé." },
  ],
  grammar: {
    title: 'Les Superlatifs — The most beautiful, the best, the worst',
    explanation: 'Les superlatifs comparent un élément à tous les autres : Adjectifs courts (1-2 syllabes) : "the + adjectif + -est" → "the cheapest", "the best" (irrégulier), "the worst" (irrégulier), "the furthest" (irrégulier). Adjectifs longs (3+ syllabes) : "the most + adjectif" → "the most beautiful", "the most expensive". Irréguliers : good → better → the best ; bad → worse → the worst ; far → further → the furthest. "The least" est le superlatif négatif : "the least expensive" = le moins cher. ATTENTION : on utilise "in" pour un lieu : "the best restaurant IN the city". "Of" pour un groupe : "the most beautiful OF all".',
    examples: [
      { sentence: 'It was the most beautiful beach in the country.', translation: "C'était la plus belle plage du pays.", isCorrect: true },
      { sentence: 'She is the most kindest person I know.', translation: '', isCorrect: false },
      { sentence: 'That was the worst hotel I have ever stayed in.', translation: "C'était le pire hôtel dans lequel j'aie jamais séjourné.", isCorrect: true },
      { sentence: 'It was the furthest destination on our itinerary.', translation: "C'était la destination la plus éloignée de notre itinéraire.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She is the most kindest person I know.', correct: 'She is the kindest person I know.', explanation: '"Kindest" est déjà le superlatif de "kind" — on n\'ajoute PAS "most" ! Double superlatif = erreur. "Kind" → "kinder" → "the kindest".' },
      { wrong: 'It was the best hotel of the city.', correct: 'It was the best hotel in the city.', explanation: 'Pour les lieux, on utilise "in" (pas "of") : "the best IN the city", "the most beautiful IN the country".' },
    ],
  },
  conversation: [
    { speaker: 'Mariama', role: 'A', text: 'What\'s the most beautiful place you have ever visited?', translation: "Quel est le plus bel endroit que tu aies jamais visité ?" },
    { speaker: 'Oumar', role: 'B', text: 'Definitely the coast. It has the best beaches in the world!', translation: "Définitivement la côte. Elle a les meilleures plages du monde !" },
    { speaker: 'Mariama', role: 'A', text: 'And the worst travel experience?', translation: "Et la pire expérience de voyage ?" },
    { speaker: 'Oumar', role: 'B', text: 'The worst was a delayed flight. But the least expensive hotel was actually quite nice!', translation: "La pire a été un vol retardé. Mais l'hôtel le moins cher était en fait plutôt sympa !" },
    { speaker: 'Mariama', role: 'A', text: 'What was the furthest you\'ve ever traveled?', translation: "Quel est le plus loin que tu aies jamais voyagé ?" },
    { speaker: 'Oumar', role: 'B', text: 'Japan! It was the most fascinating culture I have ever experienced.', translation: "Le Japon ! C'était la culture la plus fascinante que j'aie jamais vécue." },
  ],
  conversationTitle: 'Comparaisons et superlatifs de voyage',
  pronunciation: [
    { word: 'Beautiful', phonetic: '/ˈbjuːtɪfl/', meaning: 'Beau/Belle', tip: 'Prononcez "BIOU-ti-fl" — l\'accent est sur "BEAU" et les syllabes finales se réduisent.' },
    { word: 'Worst', phonetic: '/wɜːrst/', meaning: 'Pire', tip: 'Prononcez "UEURST" — le "or" est long comme dans "word".' },
    { word: 'Least', phonetic: '/liːst/', meaning: 'Le moins', tip: 'Prononcez "LIST" — le "ea" = "i" long. Pas "lé-est" !' },
    { word: 'Furthest', phonetic: '/ˈfɜːrðɪst/', meaning: 'Le plus loin', tip: 'Prononcez "FUR-dhist" — le "th" est sonore et le "u" est ouvert.' },
  ],
}

export const B1_L35: LessonContent = {
  vocab: [
    { english: 'Departure', french: 'Départ', phonetic: '/dɪˈpɑːrtʃər/', example: 'The departure is scheduled for 8 AM.', exampleTranslation: 'Le départ est prévu à 8 heures.' },
    { english: 'Accommodation', french: 'Hébergement', phonetic: '/əˌkɑːməˈdeɪʃən/', example: 'We booked accommodation near the beach.', exampleTranslation: "Nous avons réservé un hébergement près de la plage." },
    { english: 'Luggage', french: 'Bagages', phonetic: '/ˈlʌɡɪdʒ/', example: 'My luggage was lost at the airport.', exampleTranslation: 'Mes bagages ont été perdus à l\'aéroport.' },
    { english: 'Boarding pass', french: 'Carte d\'embarquement', phonetic: '/ˈbɔːrdɪŋ pæs/', example: 'Don\'t forget your boarding pass!', exampleTranslation: "N'oublie pas ta carte d'embarquement !" },
  ],
  grammar: {
    title: 'Prononciation des termes de voyage — Mots composés et accents',
    explanation: 'Les termes de voyage sont des mots composés avec des accents spécifiques : "Departure" = "di-PAR-tcher" (accent sur "PAR"), "Accommodation" = "e-ko-mo-DÉÿ-chenne" (accent sur "DA"), "Luggage" = "LEU-gidj" (accent sur "LUG"), "Boarding pass" = "BOR-ding PAS" (accent sur chaque mot). "Souvenir" en anglais = "sou-ve-NIR" (accent sur la dernière syllabe, contrairement au français !). Maîtriser ces prononciations est essentiel pour voyager en anglais.',
    examples: [
      { sentence: 'The de-PAR-ture is on time.', translation: 'Le départ est à l\'heure.', isCorrect: true },
      { sentence: 'The DE-par-ture is on time.', translation: '', isCorrect: false },
      { sentence: 'We need to check our lug-gage.', translation: 'Nous devons enregistrer nos bagages.', isCorrect: true },
      { sentence: 'Don\'t forget your boarding pass at the hotel.', translation: "N'oublie pas ta carte d'embarquement à l'hôtel.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The DE-par-ture is on time.', correct: 'The di-PAR-tcher is on time.', explanation: '"Departure" a l\'accent sur "PAR" : "di-PAR-tcher", pas "DE-par-ture" !' },
      { wrong: 'My luggages were lost.', correct: 'My luggage was lost.', explanation: '"Luggage" est indénombrable ! Pas de "s". On dit "my luggage WAS", pas "my luggages were".' },
    ],
  },
  conversation: [
    { speaker: 'Amina', role: 'A', text: 'Don\'t forget your boarding pass! The departure is at 10 AM.', translation: "N'oublie pas ta carte d'embarquement ! Le départ est à 10 heures." },
    { speaker: 'Kofi', role: 'B', text: 'Thanks! Did you check in your luggage already?', translation: 'Merci ! As-tu déjà enregistré tes bagages ?' },
    { speaker: 'Amina', role: 'A', text: 'Yes. Our accommodation in Paris looks amazing!', translation: "Oui. Notre hébergement à Paris a l'air incroyable !" },
    { speaker: 'Kofi', role: 'B', text: 'I can\'t wait! The itinerary includes a boat excursion on the Seine.', translation: "Je suis impatient ! L'itinéraire inclut une excursion en bateau sur la Seine." },
    { speaker: 'Amina', role: 'A', text: 'Perfect. Travel vocabulary can be tricky to pronounce though.', translation: "Parfait. Le vocabulaire de voyage peut être délicat à prononcer cependant." },
    { speaker: 'Kofi', role: 'B', text: 'True! I always say "de-PAR-ture" now, not "DE-par-ture"!', translation: "Vrai ! Je dis toujours \"de-PAR-tcher\" maintenant, pas \"DE-par-ture\" !" },
  ],
  conversationTitle: 'Vocabulaire de voyage en situation',
  pronunciation: [
    { word: 'Departure', phonetic: '/dɪˈpɑːrtʃər/', meaning: 'Départ', tip: 'L\'accent est sur "PAR" : "di-PAR-tcher". Pas "DE-par-ture" !' },
    { word: 'Accommodation', phonetic: '/əˌkɑːməˈdeɪʃən/', meaning: 'Hébergement', tip: 'L\'accent est sur "DA" : "e-ko-mo-DÉÿ-chenne".' },
    { word: 'Luggage', phonetic: '/ˈlʌɡɪdʒ/', meaning: 'Bagages', tip: 'L\'accent est sur "LUG" : "LEU-gidj". Pas "lou-gidj" !' },
    { word: 'Boarding', phonetic: '/ˈbɔːrdɪŋ/', meaning: 'Embarquement', tip: 'Prononcez "BOR-ding" — le "oa" = "or" long.' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 8: SOCIAL ISSUES (b1-l36 through b1-l40)
// ════════════════════════════════════════════════════════════════════════════════

export const B1_L36: LessonContent = {
  vocab: [
    { english: 'Equality', french: 'Égalité', phonetic: '/ɪˈkwɑːləti/', example: 'Gender equality is a fundamental right.', exampleTranslation: "L'égalité des sexes est un droit fondamental." },
    { english: 'Poverty', french: 'Pauvreté', phonetic: '/ˈpɑːvərti/', example: 'Poverty affects millions of people worldwide.', exampleTranslation: "La pauvreté affecte des millions de personnes dans le monde." },
    { english: 'Discrimination', french: 'Discrimination', phonetic: '/dɪˌskrɪmɪˈneɪʃən/', example: 'Racial discrimination is illegal in most countries.', exampleTranslation: "La discrimination raciale est illégale dans la plupart des pays." },
    { english: 'Rights', french: 'Droits', phonetic: '/raɪts/', example: 'Everyone has the right to education.', exampleTranslation: "Tout le monde a le droit à l'éducation." },
    { english: 'Justice', french: 'Justice', phonetic: '/ˈdʒʌstɪs/', example: 'Social justice requires fair opportunities for all.', exampleTranslation: "La justice sociale exige des opportunités équitables pour tous." },
  ],
  grammar: {
    title: 'Vocabulaire des questions sociales — Termes clés',
    explanation: 'Les questions sociales utilisent un vocabulaire spécifique : "Equality" = égalité (même statut), "Equity" = équité (justice selon les besoins), "Discrimination" = traitement injuste basé sur la race, le genre, etc., "Poverty" = pauvreté (état de manque), "Rights" = droits (libertés garanties), "Justice" = justice (fairness du système). Collocations : "fight for equality" (lutter pour l\'égalité), "combat poverty" (combattre la pauvreté), "face discrimination" (subir la discrimination), "demand justice" (exiger la justice), "protect rights" (protéger les droits).',
    examples: [
      { sentence: 'We must fight for equality and protect everyone\'s rights.', translation: "Nous devons lutter pour l'égalité et protéger les droits de tous.", isCorrect: true },
      { sentence: 'She faced a discrimination at work.', translation: '', isCorrect: false },
      { sentence: 'Poverty is one of the biggest social challenges.', translation: "La pauvreté est l'un des plus grands défis sociaux.", isCorrect: true },
      { sentence: 'Justice should be accessible to all people.', translation: "La justice devrait être accessible à toutes les personnes.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She faced a discrimination at work.', correct: 'She faced discrimination at work.', explanation: '"Discrimination" est indénombrable : "faced discrimination" (pas "a discrimination"). Comme "poverty", "equality", "justice".' },
      { wrong: 'Human right should be protected.', correct: 'Human rights should be protected.', explanation: '"Rights" est généralement au pluriel dans ce contexte : "human rights" (les droits de l\'homme), pas "human right".' },
    ],
  },
  conversation: [
    { speaker: 'Youssef', role: 'A', text: 'What social issues are you most passionate about?', translation: "Quelles questions sociales te passionnent le plus ?" },
    { speaker: 'Aïcha', role: 'B', text: 'I care deeply about equality and fighting discrimination. Everyone deserves the same rights.', translation: "L'égalité et la lutte contre la discrimination me tiennent à cœur. Tout le monde mérite les mêmes droits." },
    { speaker: 'Youssef', role: 'A', text: 'I agree. Poverty is also a major issue. It affects access to education and justice.', translation: "Je suis d'accord. La pauvreté est aussi un problème majeur. Elle affecte l'accès à l'éducation et à la justice." },
    { speaker: 'Aïcha', role: 'B', text: 'Exactly. Social justice means fair opportunities for everyone, regardless of background.', translation: "Exactement. La justice sociale signifie des opportunités équitables pour tous, peu importe l'origine." },
    { speaker: 'Youssef', role: 'A', text: 'What can ordinary people do to promote equality?', translation: "Que peuvent faire les gens ordinaires pour promouvoir l'égalité ?" },
    { speaker: 'Aïcha', role: 'B', text: 'We can educate ourselves, speak up against discrimination, and support organizations that fight poverty.', translation: "Nous pouvons nous éduquer, dénoncer la discrimination et soutenir les organisations qui combattent la pauvreté." },
  ],
  conversationTitle: 'Discuter des questions sociales',
  pronunciation: [
    { word: 'Equality', phonetic: '/ɪˈkwɑːləti/', meaning: 'Égalité', tip: 'L\'accent est sur "KWA" : "i-KOUA-le-ti". Pas "é-koua-LI-ti" !' },
    { word: 'Poverty', phonetic: '/ˈpɑːvərti/', meaning: 'Pauvreté', tip: 'L\'accent est sur "POV" : "PA-ver-ti". Pas "po-ver-TI" !' },
    { word: 'Discrimination', phonetic: '/dɪˌskrɪmɪˈneɪʃən/', meaning: 'Discrimination', tip: 'L\'accent est sur "NA" : "di-scri-mi-NÉÿ-chenne".' },
    { word: 'Justice', phonetic: '/ˈdʒʌstɪs/', meaning: 'Justice', tip: 'L\'accent est sur "JUS" : "DJES-tis". Pas "ju-STI-ce" !' },
  ],
}

export const B1_L37: LessonContent = {
  vocab: [
    { english: 'I agree', french: 'Je suis d\'accord', phonetic: '/aɪ əˈɡriː/', example: 'I agree that education should be free for all.', exampleTranslation: "Je suis d'accord que l'éducation devrait être gratuite pour tous." },
    { english: 'I disagree', french: 'Je ne suis pas d\'accord', phonetic: '/aɪ ˌdɪsəˈɡriː/', example: 'I disagree with that approach.', exampleTranslation: "Je ne suis pas d'accord avec cette approche." },
    { english: 'I see your point', french: 'Je comprends ton point de vue', phonetic: '/aɪ siː jɔːr pɔɪnt/', example: 'I see your point, but I think there\'s a better way.', exampleTranslation: "Je comprends ton point de vue, mais je pense qu'il y a une meilleure façon." },
    { english: 'That\'s a valid argument', french: "C'est un argument valable", phonetic: '/ðæts ə ˈvælɪd ˈɑːrɡjumənt/', example: 'That\'s a valid argument, however...', exampleTranslation: "C'est un argument valable, cependant..." },
    { english: 'On the contrary', french: 'Au contraire', phonetic: '/ɑːn ðə ˈkɑːntreri/', example: 'On the contrary, I believe we can solve this.', exampleTranslation: "Au contraire, je crois que nous pouvons résoudre cela." },
  ],
  grammar: {
    title: 'Exprimer son accord et son désaccord — Politesse et nuance',
    explanation: 'Pour être d\'accord : "I agree with you" (Je suis d\'accord), "You\'re absolutely right" (Tu as tout à fait raison), "I couldn\'t agree more" (Je ne pourrais pas être plus d\'accord). Pour être en désaccord POLIMENT : "I see your point, but..." (Je comprends ton point de vue, mais...), "I respect your opinion, however..." (Je respecte ton opinion, cependant...), "That\'s a valid argument, but I think..." (C\'est un argument valable, mais je pense...). Pour un désaccord direct : "I disagree" (Je ne suis pas d\'accord), "On the contrary" (Au contraire). ATTENTION : on dit "I agree WITH you" (pas "I agree you").',
    examples: [
      { sentence: 'I agree with you that poverty is a major issue.', translation: "Je suis d'accord avec toi que la pauvreté est un problème majeur.", isCorrect: true },
      { sentence: 'I am agree with you.', translation: '', isCorrect: false },
      { sentence: 'I see your point, but I think there are other factors to consider.', translation: "Je comprends ton point de vue, mais je pense qu'il y a d'autres facteurs à considérer.", isCorrect: true },
      { sentence: 'On the contrary, I believe this policy will help reduce inequality.', translation: "Au contraire, je crois que cette politique aidera à réduire les inégalités.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I am agree with you.', correct: 'I agree with you.', explanation: '"Agree" est un verbe, pas un adjectif ! On dit "I agree", pas "I am agree". Pas de "be" devant "agree".' },
      { wrong: 'I disagree to your opinion.', correct: 'I disagree with your opinion.', explanation: 'On dit "disagree WITH" (pas "to"). La préposition "with" est fixe après "agree" et "disagree".' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'I think free education would solve many social problems.', translation: "Je pense que l'éducation gratuite résoudrait beaucoup de problèmes sociaux." },
    { speaker: 'Kofi', role: 'B', text: 'I agree with you. Education is a fundamental right.', translation: "Je suis d'accord avec toi. L'éducation est un droit fondamental." },
    { speaker: 'Fatou', role: 'A', text: 'But some people say it\'s too expensive. What do you think?', translation: "Mais certains disent que c'est trop cher. Qu'en penses-tu ?" },
    { speaker: 'Kofi', role: 'B', text: 'I see their point, but I disagree. On the contrary, not investing in education costs more in the long run.', translation: "Je comprends leur point de vue, mais je ne suis pas d'accord. Au contraire, ne pas investir dans l'éducation coûte plus cher à long terme." },
    { speaker: 'Fatou', role: 'A', text: 'That\'s a valid argument. Poverty often results from lack of education.', translation: "C'est un argument valable. La pauvreté résulte souvent du manque d'éducation." },
    { speaker: 'Kofi', role: 'B', text: 'Exactly! We should invest in people. I couldn\'t agree more.', translation: "Exactement ! Nous devrions investir dans les gens. Je ne pourrais pas être plus d'accord." },
  ],
  conversationTitle: 'Débattre avec nuance et respect',
  pronunciation: [
    { word: 'Agree', phonetic: '/əˈɡriː/', meaning: 'Être d\'accord', tip: 'Prononcez "e-GRÏ" — l\'accent est sur "GREE" et le son est long.' },
    { word: 'Disagree', phonetic: '/ˌdɪsəˈɡriː/', meaning: 'Être en désaccord', tip: 'L\'accent est sur "GREE" : "di-se-GRÏ".' },
    { word: 'Contrary', phonetic: '/ˈkɑːntreri/', meaning: 'Contraire', tip: 'L\'accent est sur "CON" : "KON-tre-ri". Pas "kon-TRA-ri" !' },
    { word: 'Valid', phonetic: '/ˈvælɪd/', meaning: 'Valable', tip: 'Prononcez "VAL-id" — le "a" est très ouvert comme dans "cat".' },
  ],
}

export const B1_L38: LessonContent = {
  vocab: [
    { english: 'Inequality', french: 'Inégalité', phonetic: '/ˌɪnɪˈkwɑːləti/', example: 'Income inequality is growing worldwide.', exampleTranslation: "L'inégalité des revenus augmente dans le monde." },
    { english: 'Prejudice', french: 'Préjugé', phonetic: '/ˈpredʒʊdɪs/', example: 'Prejudice prevents social progress.', exampleTranslation: 'Les préjugés empêchent le progrès social.' },
    { english: 'Opportunity', french: 'Opportunité', phonetic: '/ˌɑːpərˈtuːnəti/', example: 'Equal opportunities should be available to all.', exampleTranslation: "Des opportunités égales devraient être disponibles pour tous." },
    { english: 'Awareness', french: 'Conscience / Sensibilisation', phonetic: '/əˈwernəs/', example: 'We need more awareness about discrimination.', exampleTranslation: "Nous avons besoin de plus de sensibilisation sur la discrimination." },
    { english: 'Advocacy', french: 'Plaidoyer', phonetic: '/ˈædvəkəsi/', example: 'Her advocacy for human rights is inspiring.', exampleTranslation: "Son plaidoyer pour les droits humains est inspirant." },
  ],
  grammar: {
    title: 'Débattre des enjeux sociaux — Langage de l\'argumentation avancée',
    explanation: 'Pour débattre des questions sociales avec nuance : INTRODUIRE UN ARGUMENT : "One of the main issues is..." (L\'un des problèmes principaux est...), "Research shows that..." (Les recherches montrent que...). CONTREDIRE : "While it\'s true that..., we must also consider..." (Bien qu\'il soit vrai que..., nous devons aussi considérer...). PROPOSER DES SOLUTIONS : "One possible solution would be to..." (Une solution possible serait de...), "We should address the root causes of..." (Nous devrions traiter les causes profondes de...). CONCLURE : "In conclusion, we must take action to..." (En conclusion, nous devons agir pour...).',
    examples: [
      { sentence: 'One of the main issues is inequality in access to education.', translation: "L'un des problèmes principaux est l'inégalité d'accès à l'éducation.", isCorrect: true },
      { sentence: 'While it\'s true that progress has been made, prejudice still exists.', translation: "Bien qu'il soit vrai que des progrès ont été faits, les préjugés existent encore.", isCorrect: true },
      { sentence: 'Research shows that more awareness reduces discrimination.', translation: 'Les recherches montrent que plus de sensibilisation réduit la discrimination.', isCorrect: true },
      { sentence: 'We should address to the root causes of poverty.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'We should address to the root causes of poverty.', correct: 'We should address the root causes of poverty.', explanation: '"Address" dans ce sens est transitif direct : "address something" (pas "address to something"). Pas de préposition !' },
      { wrong: 'Her advocacy for human rights are inspiring.', correct: 'Her advocacy for human rights is inspiring.', explanation: '"Advocacy" est indénombrable et singulier : "advocacy IS", pas "advocacy ARE".' },
    ],
  },
  conversation: [
    { speaker: 'Oumar', role: 'A', text: 'One of the main issues in our society is inequality of opportunity.', translation: "L'un des problèmes principaux de notre société est l'inégalité des opportunités." },
    { speaker: 'Mariama', role: 'B', text: 'I agree. While it\'s true that some progress has been made, prejudice still exists.', translation: "Je suis d'accord. Bien que des progrès aient été faits, les préjugés existent encore." },
    { speaker: 'Oumar', role: 'A', text: 'We need more awareness about these issues. Education is key.', translation: "Nous avons besoin de plus de sensibilisation sur ces questions. L'éducation est la clé." },
    { speaker: 'Mariama', role: 'B', text: 'I couldn\'t agree more. Advocacy groups are doing important work to raise awareness.', translation: "Je ne pourrais pas être plus d'accord. Les groupes de plaidoyer font un travail important pour sensibiliser." },
    { speaker: 'Oumar', role: 'A', text: 'What solution would you propose to address inequality?', translation: "Quelle solution proposerais-tu pour traiter l'inégalité ?" },
    { speaker: 'Mariama', role: 'B', text: 'We should address the root causes — lack of education and discrimination in hiring. In conclusion, systemic change is needed.', translation: "Nous devrions traiter les causes profondes — le manque d'éducation et la discrimination à l'embauche. En conclusion, un changement systémique est nécessaire." },
  ],
  conversationTitle: 'Débattre des défis sociaux',
  pronunciation: [
    { word: 'Inequality', phonetic: '/ˌɪnɪˈkwɑːləti/', meaning: 'Inégalité', tip: 'L\'accent est sur "KWA" : "i-ni-KOUA-le-ti".' },
    { word: 'Prejudice', phonetic: '/ˈpredʒʊdɪs/', meaning: 'Préjugé', tip: 'L\'accent est sur "PRE" : "PRÉ-dju-dis".' },
    { word: 'Opportunity', phonetic: '/ˌɑːpərˈtuːnəti/', meaning: 'Opportunité', tip: 'L\'accent est sur "TU" : "a-per-TOU-ne-ti". Pas "o-por-tu-NI-ti" !' },
    { word: 'Advocacy', phonetic: '/ˈædvəkəsi/', meaning: 'Plaidoyer', tip: 'L\'accent est sur "AD" : "AD-ve-ke-si". Pas "ad-vo-KA-cy" !' },
  ],
}

export const B1_L39: LessonContent = {
  vocab: [
    { english: 'Was passed', french: 'A été adoptée', phonetic: '/wəz pæst/', example: 'The law was passed last year.', exampleTranslation: "La loi a été adoptée l'année dernière." },
    { english: 'Were arrested', french: 'Ont été arrêtés', phonetic: '/wɜːr əˈrestɪd/', example: 'The protesters were arrested by the police.', exampleTranslation: 'Les manifestants ont été arrêtés par la police.' },
    { english: 'Was signed', french: 'A été signé', phonetic: '/wəz saɪnd/', example: 'The treaty was signed in 2020.', exampleTranslation: 'Le traité a été signé en 2020.' },
    { english: 'Were affected', french: 'Ont été affectés', phonetic: '/wɜːr əˈfektɪd/', example: 'Many families were affected by the crisis.', exampleTranslation: "Beaucoup de familles ont été affectées par la crise." },
    { english: 'Was abolished', french: 'A été aboli(e)', phonetic: '/wəz əˈbɑːlɪʃt/', example: 'Slavery was abolished in the 19th century.', exampleTranslation: "L'esclavage a été aboli au 19e siècle." },
  ],
  grammar: {
    title: 'La Voix Passive au Passé — The law was passed last year',
    explanation: 'La voix passive au passé se forme avec : sujet + was/were + participe passé. "The law WAS PASSED last year" (La loi a été adoptée l\'année dernière). "The protesters WERE ARRESTED" (Les manifestants ont été arrêtés). On l\'utilise quand l\'action est plus importante que l\'auteur : "Slavery was abolished" (plus important que "who abolished it"). "Was" pour singulier, "were" pour pluriel. Négatif : "The law was NOT passed". Question : "Was the law passed?". ATTENTION : pour dire PAR qui, on utilise "by" : "The law was passed BY the parliament".',
    examples: [
      { sentence: 'The law was passed by the parliament last year.', translation: "La loi a été adoptée par le parlement l'année dernière.", isCorrect: true },
      { sentence: 'The law were passed last year.', translation: '', isCorrect: false },
      { sentence: 'Many people were affected by the economic crisis.', translation: "Beaucoup de gens ont été affectés par la crise économique.", isCorrect: true },
      { sentence: 'Slavery was abolished in many countries during the 19th century.', translation: "L'esclavage a été aboli dans beaucoup de pays au 19e siècle.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The law were passed last year.', correct: 'The law was passed last year.', explanation: '"The law" est singulier → "was" (pas "were"). "Were" est pour les sujets pluriels : "The laws were passed".' },
      { wrong: 'The treaty was sign in 2020.', correct: 'The treaty was signed in 2020.', explanation: 'La voix passive nécessite le participe passé : "signed" (avec -ed), pas "sign" (infinitif).' },
    ],
  },
  conversation: [
    { speaker: 'Moussa', role: 'A', text: 'Did you know that a new anti-discrimination law was passed last month?', translation: "Savais-tu qu'une nouvelle loi anti-discrimination a été adoptée le mois dernier ?" },
    { speaker: 'Amina', role: 'B', text: 'Yes! It was signed by the president on Monday. Many people were affected by the old policies.', translation: "Oui ! Elle a été signée par le président lundi. Beaucoup de gens ont été affectés par les anciennes politiques." },
    { speaker: 'Moussa', role: 'A', text: 'Were there protests before the law was passed?', translation: "Y a-t-il eu des manifestations avant que la loi ne soit adoptée ?" },
    { speaker: 'Amina', role: 'B', text: 'Yes, some protesters were arrested during the demonstrations. But their voices were heard.', translation: "Oui, certains manifestants ont été arrêtés pendant les manifestations. Mais leurs voix ont été entendues." },
    { speaker: 'Moussa', role: 'A', text: 'It reminds me of when slavery was abolished. Change takes time but it\'s possible.', translation: "Ça me rappelle quand l'esclavage a été aboli. Le changement prend du temps mais c'est possible." },
    { speaker: 'Amina', role: 'B', text: 'Exactly. Social progress was achieved by people who fought for justice.', translation: "Exactement. Le progrès social a été réalisé par des gens qui se sont battus pour la justice." },
  ],
  conversationTitle: 'Changements sociaux au passé',
  pronunciation: [
    { word: 'Abolished', phonetic: '/əˈbɑːlɪʃt/', meaning: 'Aboli', tip: 'Prononcez "e-BOL-ich-t" — l\'accent est sur "BOL" et le "-ed" = "t".' },
    { word: 'Arrested', phonetic: '/əˈrestɪd/', meaning: 'Arrêté', tip: 'Prononcez "e-REST-id" — l\'accent est sur "REST".' },
    { word: 'Affected', phonetic: '/əˈfektɪd/', meaning: 'Affecté', tip: 'Prononcez "e-FEK-tid" — l\'accent est sur "FECT".' },
    { word: 'Treaty', phonetic: '/ˈtriːti/', meaning: 'Traité', tip: 'Prononcez "TRI-ti" — l\'accent est sur "TREA" et le "ea" = "i" long.' },
  ],
}

export const B1_L40: LessonContent = {
  vocab: [
    { english: 'Legislation', french: 'Législation', phonetic: '/ˌledʒɪˈsleɪʃən/', example: 'New legislation protects workers\' rights.', exampleTranslation: "La nouvelle législation protège les droits des travailleurs." },
    { english: 'Referendum', french: 'Référendum', phonetic: '/ˌrefəˈrendəm/', example: 'The referendum was held to decide the issue.', exampleTranslation: "Le référendum a été organisé pour décider de la question." },
    { english: 'Constitution', french: 'Constitution', phonetic: '/ˌkɑːnstɪˈtuːʃən/', example: 'The constitution guarantees equal rights.', exampleTranslation: "La constitution garantit des droits égaux." },
    { english: 'Democracy', phonetic: '/dɪˈmɑːkrəsi/', french: 'Démocratie', example: 'Democracy requires participation from all citizens.', exampleTranslation: "La démocratie exige la participation de tous les citoyens." },
  ],
  grammar: {
    title: 'Prononciation des termes sociaux et politiques — Mots longs',
    explanation: 'Les termes sociaux et politiques sont des mots longs avec des accents spécifiques : "Legislation" = "le-dji-SLÉÿ-chenne" (accent sur "SLA"), "Referendum" = "re-fe-REN-dem" (accent sur "REN"), "Constitution" = "kon-sti-TOU-chenne" (accent sur "TU"), "Democracy" = "di-MA-kre-si" (accent sur "MO"). Ces prononciations sont souvent très différentes de la prononciation française équivalente.',
    examples: [
      { sentence: 'The le-dji-SLA-tion was controversial.', translation: 'La législation était controversée.', isCorrect: true },
      { sentence: 'The LE-gis-la-tion was controversial.', translation: '', isCorrect: false },
      { sentence: 'Democracy requires active participation.', translation: 'La démocratie exige une participation active.', isCorrect: true },
      { sentence: 'The constitution was amended last year.', translation: 'La constitution a été modifiée l\'année dernière.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The LE-gis-la-tion was controversial.', correct: 'The le-dji-SLA-tion was controversial.', explanation: '"Legislation" a l\'accent sur "SLA" : "le-dji-SLÉÿ-chenne", pas "LE-gis-la-tion" à la française !' },
      { wrong: 'The re-FE-ren-dum was held.', correct: 'The re-fe-REN-dem was held.', explanation: '"Referendum" a l\'accent sur "REN" : "re-fe-REN-dem", pas "RE-fe-ren-dum" !' },
    ],
  },
  conversation: [
    { speaker: 'Kofi', role: 'A', text: 'The new legislation on equal pay is an important step for democracy.', translation: "La nouvelle législation sur l'égalité salariale est une étape importante pour la démocratie." },
    { speaker: 'Fatou', role: 'B', text: 'I agree. Was it decided by a referendum?', translation: "Je suis d'accord. A-t-elle été décidée par référendum ?" },
    { speaker: 'Kofi', role: 'A', text: 'No, it was passed by the parliament. But the constitution was amended first.', translation: "Non, elle a été adoptée par le parlement. Mais la constitution a d'abord été modifiée." },
    { speaker: 'Fatou', role: 'B', text: 'That\'s significant. These words are hard to pronounce though!', translation: "C'est significatif. Ces mots sont difficiles à prononcer cependant !" },
    { speaker: 'Kofi', role: 'A', text: 'True! "Legislation" is "le-dji-SLA-tion", not "LE-gis-la-tion".', translation: "Vrai ! « Legislation » c'est « le-dji-SLA-tion », pas « LE-gis-la-tion »." },
    { speaker: 'Fatou', role: 'B', text: 'And "democracy" is "di-MA-kre-si", not "dé-mo-cra-cie"! Let\'s keep practicing.', translation: "Et « democracy » c'est « di-MA-kre-si », pas « dé-mo-cra-cie » ! Continuons à pratiquer." },
  ],
  conversationTitle: 'Termes politiques en anglais',
  pronunciation: [
    { word: 'Legislation', phonetic: '/ˌledʒɪˈsleɪʃən/', meaning: 'Législation', tip: 'L\'accent est sur "SLA" : "le-dji-SLÉÿ-chenne". Pas "LE-gis-la-tion" !' },
    { word: 'Referendum', phonetic: '/ˌrefəˈrendəm/', meaning: 'Référendum', tip: 'L\'accent est sur "REN" : "re-fe-REN-dem".' },
    { word: 'Constitution', phonetic: '/ˌkɑːnstɪˈtuːʃən/', meaning: 'Constitution', tip: 'L\'accent est sur "TU" : "kon-sti-TOU-chenne".' },
    { word: 'Democracy', phonetic: '/dɪˈmɑːkrəsi/', meaning: 'Démocratie', tip: 'L\'accent est sur "MO" : "di-MA-kre-si". Pas "dé-mo-CRA-cie" !' },
  ],
}
