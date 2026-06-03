import type { LessonContent } from './lesson-content'

// ============================================================
// B2 Unit 11: Legal English — Lessons b2-l51 to b2-l55
// ============================================================

export const B2_L51: LessonContent = {
  vocab: [
    {
      english: 'contract',
      french: 'contrat',
      phonetic: '/ˈkɒntrækt/',
      example: 'Both parties signed the employment contract after reviewing all clauses.',
      exampleTranslation: 'Les deux parties ont signé le contrat de travail après avoir examiné toutes les clauses.'
    },
    {
      english: 'litigation',
      french: 'litige / procès',
      phonetic: '/ˌlɪtɪˈɡeɪʃən/',
      example: 'The company avoided litigation by reaching an out-of-court settlement.',
      exampleTranslation: "L'entreprise a évité le procès en parvenant à un règlement à l'amiable."
    },
    {
      english: 'compliance',
      french: 'conformité',
      phonetic: '/kəmˈplaɪəns/',
      example: 'All employees must complete annual compliance training on data protection.',
      exampleTranslation: 'Tous les employés doivent suivre une formation annuelle sur la conformité en matière de protection des données.'
    },
    {
      english: 'jurisdiction',
      french: 'juridiction / compétence',
      phonetic: '/ˌdʒʊərɪsˈdɪkʃən/',
      example: 'The case falls under the jurisdiction of the federal court.',
      exampleTranslation: "L'affaire relève de la compétence du tribunal fédéral."
    },
    {
      english: 'statute',
      french: 'statut / loi',
      phonetic: '/ˈstætʃuːt/',
      example: 'The new statute imposes stricter penalties for corporate fraud.',
      exampleTranslation: "La nouvelle loi impose des peines plus sévères pour la fraude d'entreprise."
    }
  ],
  grammar: {
    title: 'Les noms composés dans le vocabulaire juridique',
    explanation: 'En anglais juridique, les noms composés sont très fréquents. Ils combinent souvent deux ou trois mots pour créer un terme spécifique. Attention : en anglais, l\'élément principal (le nom) se place à la FIN du composé, contrairement au français où l\'on utilise souvent "de". Par exemple, "contract law" = "droit des contrats", et non "contrat de droit". Cette structure est essentielle pour comprendre et utiliser le vocabulaire juridique correctement.',
    examples: [
      {
        sentence: 'The breach of contract resulted in significant financial losses.',
        translation: "La rupture de contrat a entraîné des pertes financières importantes.",
        isCorrect: true
      },
      {
        sentence: 'We need to ensure compliance with the data protection regulations.',
        translation: 'Nous devons assurer la conformité avec les règlements sur la protection des données.',
        isCorrect: true
      },
      {
        sentence: 'She filed a lawsuit against her former employer for wrongful termination.',
        translation: "Elle a intenté un procès contre son ancien employeur pour licenciement abusif.",
        isCorrect: true
      },
      {
        sentence: 'The contract law of the company is very strict.',
        translation: 'Le droit des contrats de l\'entreprise est très strict.',
        isCorrect: false
      }
    ],
    commonMistakes: [
      {
        wrong: 'law contract',
        correct: 'contract law',
        explanation: 'En anglais, le nom principal va à la fin. "Contract law" signifie "droit des contrats". "Law contract" n\'a pas de sens clair en anglais.'
      },
      {
        wrong: 'the breach of the contract of employment',
        correct: 'the breach of the employment contract',
        explanation: 'On dit "employment contract" (nom composé) et non "contract of employment". L\'anglais privilégie les noms composés aux tournures avec "of".'
      }
    ]
  },
  conversation: [
    {
      speaker: 'Amara',
      role: 'A',
      text: 'Have you had a chance to review the draft contract from Henderson & Co.?',
      translation: 'Avez-vous eu l\'occasion d\'examiner l\'avant-projet de contrat de Henderson & Co. ?'
    },
    {
      speaker: 'Lukas',
      role: 'B',
      text: 'Yes, I went through it this morning. There are a few clauses that concern me, particularly the liability limitation.',
      translation: 'Oui, je l\'ai parcouru ce matin. Il y a quelques clauses qui m\'inquiètent, en particulier la limitation de responsabilité.'
    },
    {
      speaker: 'Amara',
      role: 'A',
      text: 'I noticed that too. The cap on damages seems unreasonably low for the scope of this project.',
      translation: "Je l'ai remarqué aussi. Le plafond de dommages et intérêts semble déraisonnablement bas pour l'ampleur de ce projet."
    },
    {
      speaker: 'Lukas',
      role: 'B',
      text: 'Exactly. And the governing law clause specifies a jurisdiction we\'re not familiar with. We should request a change.',
      translation: "Exactement. Et la clause sur la loi applicable précise une juridiction que nous ne connaissons pas. Nous devrions demander une modification."
    },
    {
      speaker: 'Amara',
      role: 'A',
      text: 'Agreed. I\'ll draft a counter-proposal and cc our legal team. We need to ensure full compliance before signing.',
      translation: "D'accord. Je rédigerai une contre-proposition et je mettrai notre équipe juridique en copie. Nous devons assurer une conformité totale avant de signer."
    },
    {
      speaker: 'Lukas',
      role: 'B',
      text: 'Good idea. Let\'s schedule a meeting with them before the end of the week so we don\'t miss the deadline.',
      translation: "Bonne idée. Organisons une réunion avec eux avant la fin de la semaine pour ne pas manquer la date limite."
    }
  ],
  conversationTitle: 'Reviewing a Draft Contract',
  pronunciation: [
    {
      word: 'contract',
      phonetic: '/ˈkɒntrækt/',
      meaning: 'contrat (nom) / conclure un contrat (verbe)',
      tip: 'Attention : en tant que nom, l\'accent est sur la PREMIÈRE syllabe (CON-tract). Comme verbe, il est sur la DEUXIÈME (con-TRACT). Les francophones ont tendance à toujours accentuer la dernière syllabe.'
    },
    {
      word: 'litigation',
      phonetic: '/ˌlɪtɪˈɡeɪʃən/',
      meaning: 'litige / procès',
      tip: 'L\'accent principal est sur la troisième syllabe : li-ti-GA-tion. Ne dites pas "li-ti-ga-TION" à la française. Le "tion" final se prononce /ʃən/, pas /sjɔ̃/.'
    },
    {
      word: 'jurisdiction',
      phonetic: '/ˌdʒʊərɪsˈdɪkʃən/',
      meaning: 'juridiction / compétence',
      tip: 'L\'accent est sur la syllabe "DIC" : ju-ris-DIC-tion. Évitez de prononcer le "j" à la française /ʒ/ — en anglais c\'est /dʒ/ comme dans "judge".'
    },
    {
      word: 'compliance',
      phonetic: '/kəmˈplaɪəns/',
      meaning: 'conformité',
      tip: 'L\'accent est sur "PLI" : com-PLI-ance. La voyelle "y" se prononce /aɪ/ comme dans "fly", pas /i/ comme en français. Ne dites pas "com-pli-ENCE".'
    }
  ]
}

export const B2_L52: LessonContent = {
  vocab: [
    {
      english: 'hereby',
      french: 'par la présente',
      phonetic: '/ˌhɪəˈbaɪ/',
      example: 'The parties hereby agree to the terms outlined in Schedule A.',
      exampleTranslation: 'Les parties conviennent par la présente des termes énoncés à l\'Annexe A.'
    },
    {
      english: 'notwithstanding',
      french: 'nonobstant / malgré',
      phonetic: '/ˌnɒtwɪθˈstændɪŋ/',
      example: 'Notwithstanding the provisions of Section 3, the landlord may terminate the lease early.',
      exampleTranslation: 'Nonobstant les dispositions de l\'article 3, le propriétaire peut résilier le bail par anticipation.'
    },
    {
      english: 'thereof',
      french: 'de celui-ci / de celle-ci',
      phonetic: '/ðeərˈɒv/',
      example: 'The interpretation thereof shall be governed by English law.',
      exampleTranslation: "L'interprétation de celui-ci sera régie par le droit anglais."
    },
    {
      english: 'pursuant to',
      french: 'conformément à / en vertu de',
      phonetic: '/pəˈsjuːənt tuː/',
      example: 'Pursuant to Article 12 of the agreement, either party may request arbitration.',
      exampleTranslation: "En vertu de l'article 12 de l'accord, l'une ou l'autre partie peut demander un arbitrage."
    },
    {
      english: 'indemnify',
      french: 'indemniser / dédommager',
      phonetic: '/ɪnˈdemnɪfaɪ/',
      example: 'The supplier shall indemnify the buyer against any claims arising from defective products.',
      exampleTranslation: 'Le fournisseur indemnisera l\'acheteur contre toute réclamation découlant de produits défectueux.'
    }
  ],
  grammar: {
    title: 'Le registre formel en anglais juridique : "shall" et les tournures archaïques',
    explanation: 'En anglais juridique formel, "shall" est utilisé pour exprimer une OBLIGATION (équivalent de "devoir" en français), contrairement à l\'anglais courant où "shall" est rare. "Shall" indique que quelque chose est obligatoire, pas simplement futur. Les textes juridiques emploient aussi des adverbes comme "hereby", "thereof", "herein" et "notwithstanding", qui sont rarement utilisés en anglais courant mais restent standards dans les contrats et les lois. Ces termes rendent le langage plus précis et évitent les ambiguïtés.',
    examples: [
      {
        sentence: 'The tenant shall pay the rent on or before the first day of each month.',
        translation: 'Le locataire devra payer le loyer au plus tard le premier jour de chaque mois.',
        isCorrect: true
      },
      {
        sentence: 'The employee hereby acknowledges receipt of the company handbook.',
        translation: 'L\'employé reconnaît par la présente avoir reçu le manuel de l\'entreprise.',
        isCorrect: true
      },
      {
        sentence: 'Notwithstanding the above, the parties may renegotiate the terms.',
        translation: 'Nonobstant ce qui précède, les parties peuvent renégocier les termes.',
        isCorrect: true
      },
      {
        sentence: 'The tenant will pay the rent on or before the first day of each month.',
        translation: 'Le locataire paiera le loyer au plus tard le premier jour de chaque mois.',
        isCorrect: false
      }
    ],
    commonMistakes: [
      {
        wrong: 'The company will pay the damages within 30 days. (dans un contrat)',
        correct: 'The company shall pay the damages within 30 days.',
        explanation: 'Dans un contrat, "will" indique simplement le futur, tandis que "shall" crée une OBLIGATION juridique. "Shall" = obligation, "will" = prédiction ou intention.'
      },
      {
        wrong: 'In spite of the section 4, the client can cancel.',
        correct: 'Notwithstanding Section 4, the client may cancel.',
        explanation: '"Notwithstanding" est le terme juridique standard pour "malgré/nonobstant". "In spite of" est correct en anglais courant mais trop informel pour un document juridique. De même, "may" est préféré à "can" dans le registre juridique.'
      }
    ]
  },
  conversation: [
    {
      speaker: 'Priya',
      role: 'A',
      text: 'I\'ve reviewed the amended agreement. I see you\'ve used "shall" throughout, which is good, but clause 7 still concerns me.',
      translation: "J'ai examiné l'accord modifié. Je vois que vous avez utilisé « shall » partout, ce qui est bien, mais la clause 7 m'inquiète encore."
    },
    {
      speaker: 'Tomás',
      role: 'B',
      text: 'What specifically is the issue? We drafted it pursuant to the regulations you mentioned last week.',
      translation: "Quel est exactement le problème ? Nous l'avons rédigé conformément aux règlements que vous avez mentionnés la semaine dernière."
    },
    {
      speaker: 'Priya',
      role: 'A',
      text: 'The indemnification clause is too broad. It says the client shall indemnify the provider against "any and all claims" — that language is excessive.',
      translation: 'La clause d\'indemnisation est trop large. Il est dit que le client devra indemniser le fournisseur contre « toute réclamation » — cette formulation est excessive.'
    },
    {
      speaker: 'Tomás',
      role: 'B',
      text: 'I understand your concern. Would you prefer we limit it to claims arising from the client\'s negligence only?',
      translation: "Je comprends votre préoccupation. Préféreriez-vous que nous la limitions aux réclamations découlant de la négligence du client uniquement ?"
    },
    {
      speaker: 'Priya',
      role: 'A',
      text: 'Yes, and we should also add a notwithstanding clause to protect both parties in case of force majeure.',
      translation: "Oui, et nous devrions également ajouter une clause nonobstant pour protéger les deux parties en cas de force majeure."
    },
    {
      speaker: 'Tomás',
      role: 'B',
      text: 'Noted. I\'ll revise the wording and send you an updated draft by tomorrow afternoon.',
      translation: "Noté. Je réviserai la rédaction et vous enverrai un brouillon mis à jour d'ici demain après-midi."
    }
  ],
  conversationTitle: 'Discussing Contract Language',
  pronunciation: [
    {
      word: 'notwithstanding',
      phonetic: '/ˌnɒtwɪθˈstændɪŋ/',
      meaning: 'nonobstant / malgré',
      tip: 'Ce mot long porte l\'accent sur "STAND" : not-with-STAND-ing. Les francophones ont tendance à accentuer la dernière syllabe. De plus, le "th" /θ/ doit être soufflé, pas remplacé par un "s" ou un "z".'
    },
    {
      word: 'hereby',
      phonetic: '/ˌhɪəˈbaɪ/',
      meaning: 'par la présente',
      tip: 'L\'accent est sur "BY" : here-BY. Ne dites pas "HEER-bi" à la française. Le "h" anglais est expiré, pas muet comme en français.'
    },
    {
      word: 'pursuant',
      phonetic: '/pəˈsjuːənt/',
      meaning: 'conformément / en vertu de',
      tip: 'L\'accent est sur "SU" : pur-SU-ant. Attention à la première syllabe qui est /pə/ (schwa), pas /pyʁ/ à la française. Le "r" anglais est très différent du "r" français.'
    },
    {
      word: 'indemnify',
      phonetic: '/ɪnˈdemnɪfaɪ/',
      meaning: 'indemniser / dédommager',
      tip: 'L\'accent est sur "DEM" : in-DEM-ni-fy. Le "mn" se prononce comme deux sons séparés rapidement. Ne sautez pas le "n" muet comme en français. La finale "-fy" se prononce /faɪ/, pas /fi/.'
    }
  ]
}

export const B2_L53: LessonContent = {
  vocab: [
    {
      english: 'liability',
      french: 'responsabilité (juridique)',
      phonetic: '/ˌlaɪəˈbɪlɪti/',
      example: 'The company accepted full liability for the environmental damage caused by the spill.',
      exampleTranslation: "L'entreprise a accepté l'entière responsabilité des dommages environnementaux causés par la fuite."
    },
    {
      english: 'arbitration',
      french: 'arbitrage',
      phonetic: '/ˌɑːbɪˈtreɪʃən/',
      example: 'The dispute was resolved through binding arbitration rather than a court trial.',
      exampleTranslation: "Le différend a été résolu par arbitrage contraignant plutôt que par un procès."
    },
    {
      english: 'breach',
      french: 'violation / manquement',
      phonetic: '/briːtʃ/',
      example: 'A material breach of the agreement entitles the other party to terminate it immediately.',
      exampleTranslation: 'Une violation substantielle de l\'accord donne à l\'autre partie le droit de le résilier immédiatement.'
    },
    {
      english: 'warranty',
      french: 'garantie',
      phonetic: '/ˈwɒrənti/',
      example: 'The manufacturer provides a two-year warranty covering all parts and labour.',
      exampleTranslation: 'Le fabricant fournit une garantie de deux ans couvrant toutes les pièces et la main-d\'œuvre.'
    },
    {
      english: 'disclosure',
      french: 'divulgation / communication',
      phonetic: '/dɪsˈkləʊʒə/',
      example: 'Full disclosure of all relevant financial information is required before the merger can proceed.',
      exampleTranslation: 'La divulgation complète de toutes les informations financières pertinentes est requise avant que la fusion puisse se poursuivre.'
    }
  ],
  grammar: {
    title: 'Les expressions conditionnelles dans les contrats : "provided that", "subject to", "in the event that"',
    explanation: 'Les contrats anglais utilisent des expressions conditionnelles spécifiques pour encadrer les obligations et les droits. "Provided that" (= à condition que) introduit une condition nécessaire ; "subject to" (= sous réserve de) indique qu\'une clause dépend d\'une autre ; "in the event that" (= dans le cas où) décrit une situation hypothétique. Ces expressions remplacent les "if" trop informels du langage courant. Elles sont essentielles pour la précision juridique et évitent les malentendus.',
    examples: [
      {
        sentence: 'The licence shall be renewed automatically, provided that the licensee complies with all terms.',
        translation: 'La licence sera renouvelée automatiquement, à condition que le licencié respecte tous les termes.',
        isCorrect: true
      },
      {
        sentence: 'Subject to the provisions of Section 5, the supplier may modify the delivery schedule.',
        translation: 'Sous réserve des dispositions de l\'article 5, le fournisseur peut modifier le calendrier de livraison.',
        isCorrect: true
      },
      {
        sentence: 'In the event that either party defaults, the aggrieved party shall be entitled to compensation.',
        translation: "Dans le cas où l'une des parties ferait défaut, la partie lésée aura droit à une compensation.",
        isCorrect: true
      },
      {
        sentence: 'If that the licensee complies with all terms, the licence shall be renewed.',
        translation: 'Si le licencié respecte tous les termes, la licence sera renouvelée.',
        isCorrect: false
      }
    ],
    commonMistakes: [
      {
        wrong: 'Provided that the client signs the document, the agreement is valid, but he must also pay the fee.',
        correct: 'Provided that the client signs the document and pays the fee, the agreement is valid.',
        explanation: '"Provided that" introduit UNE condition complète. Ne séparez pas les conditions avec "but". Regroupez toutes les conditions après "provided that" pour plus de clarté juridique.'
      },
      {
        wrong: 'In event of breach, the contract is terminated.',
        correct: 'In the event of a breach, the contract shall be terminated.',
        explanation: 'La formule complète est "in the event of" (ou "in the event that" avec une clause). Omettre "the" est incorrect. De plus, dans un contrat, préférez "shall be terminated" (obligation) à "is terminated" (constat).'
      }
    ]
  },
  conversation: [
    {
      speaker: 'Yuki',
      role: 'A',
      text: 'Thank you for joining me today. I\'d like to discuss the liability provisions in our service agreement.',
      translation: "Merci de vous joindre à moi aujourd'hui. J'aimerais discuter des dispositions relatives à la responsabilité dans notre accord de service."
    },
    {
      speaker: 'Raj',
      role: 'B',
      text: 'Of course. We believe the current limitation of liability is fair — it caps damages at the total contract value.',
      translation: "Bien sûr. Nous estimons que la limitation actuelle de la responsabilité est équitable — elle plafonne les dommages à la valeur totale du contrat."
    },
    {
      speaker: 'Yuki',
      role: 'A',
      text: 'I see your point, but we\'re concerned about scenarios involving gross negligence. We\'d like to add a carve-out for that.',
      translation: "Je comprends votre point de vue, mais nous sommes préoccupés par les scénarios de négligence grave. Nous aimerions ajouter une exception pour cela."
    },
    {
      speaker: 'Raj',
      role: 'B',
      text: 'That\'s reasonable. Provided that "gross negligence" is clearly defined, we can include an exception. We could also add a mutual indemnification clause.',
      translation: "C'est raisonnable. À condition que « négligence grave » soit clairement défini, nous pouvons inclure une exception. Nous pourrions également ajouter une clause d'indemnisation mutuelle."
    },
    {
      speaker: 'Yuki',
      role: 'A',
      text: 'That works for us. And regarding dispute resolution — shall we opt for arbitration rather than litigation?',
      translation: "Cela nous convient. Et concernant la résolution des différends — devrions-nous opter pour l'arbitrage plutôt que pour un procès ?"
    },
    {
      speaker: 'Raj',
      role: 'B',
      text: 'Absolutely. Binding arbitration is faster and more cost-effective. I\'ll have our legal team draft the revised clause.',
      translation: "Absolument. L'arbitrage contraignant est plus rapide et plus rentable. Je demanderai à notre équipe juridique de rédiger la clause révisée."
    }
  ],
  conversationTitle: 'Negotiating Contract Terms',
  pronunciation: [
    {
      word: 'liability',
      phonetic: '/ˌlaɪəˈbɪlɪti/',
      meaning: 'responsabilité (juridique)',
      tip: 'L\'accent est sur "BI" : li-a-BI-li-ty. Les francophones prononcent souvent "li-a-bi-LI-ty" en mettant l\'accent sur l\'avant-dernière syllabe, comme en français. De plus, le "ty" final est /ti/, pas /té/.'
    },
    {
      word: 'breach',
      phonetic: '/briːtʃ/',
      meaning: 'violation / manquement',
      tip: 'Ce mot rime avec "teach" et "beach". Le son /iː/ est long. Ne le prononcez pas /brɛtʃ/ avec un "é" ouvert. Le "ch" final est /tʃ/ comme dans "church", pas /ʃ/ comme dans "machine".'
    },
    {
      word: 'arbitration',
      phonetic: '/ˌɑːbɪˈtreɪʃən/',
      meaning: 'arbitrage',
      tip: 'L\'accent est sur "TRA" : ar-bi-TRA-tion. Évitez de dire "ar-bi-tra-TION" à la française. La syllabe finale se prononce /ʃən/, pas /sjɔ̃/. Le premier "a" est /ɑː/ comme dans "car".'
    },
    {
      word: 'warranty',
      phonetic: '/ˈwɒrənti/',
      meaning: 'garantie',
      tip: 'L\'accent est sur la PREMIÈRE syllabe : WAR-ran-ty. Ne confondez pas avec "guarantee" /ˌɡærənˈtiː/ dont l\'accent est sur la dernière syllabe. Le "w" se prononce /w/ et non /ɡw/ — pas de "g" devant.'
    }
  ]
}

export const B2_L54: LessonContent = {
  vocab: [
    {
      english: 'precedent',
      french: 'précédent (jurisprudence)',
      phonetic: '/ˈpresɪdənt/',
      example: 'The judge relied on a landmark precedent from the Supreme Court to support her ruling.',
      exampleTranslation: "La juge s'est appuyée sur un précédent historique de la Cour suprême pour étayer sa décision."
    },
    {
      english: 'defendant',
      french: 'défendeur / accusé',
      phonetic: '/dɪˈfendənt/',
      example: 'The defendant pleaded not guilty and requested a trial by jury.',
      exampleTranslation: "Le défendeur a plaidé non coupable et a demandé un procès devant jury."
    },
    {
      english: 'verdict',
      french: 'verdict',
      phonetic: '/ˈvɜːdɪkt/',
      example: 'After three days of deliberation, the jury returned a unanimous verdict of guilty.',
      exampleTranslation: "Après trois jours de délibération, le jury a rendu un verdict unanime de culpabilité."
    },
    {
      english: 'appeal',
      french: 'appel (recours juridique)',
      phonetic: '/əˈpiːl/',
      example: 'The losing party filed an appeal within the 30-day deadline prescribed by law.',
      exampleTranslation: "La partie perdante a interjeté appel dans le délai de 30 jours prescrit par la loi."
    },
    {
      english: 'evidence',
      french: 'preuves / éléments de preuve',
      phonetic: '/ˈevɪdəns/',
      example: 'The prosecution presented compelling evidence linking the suspect to the crime scene.',
      exampleTranslation: "Le ministère public a présenté des preuves convaincantes liant le suspect à la scène de crime."
    }
  ],
  grammar: {
    title: 'L\'expression de l\'obligation et du droit en anglais juridique : "shall", "may", "must"',
    explanation: 'En anglais juridique, trois modaux ont des sens très précis et distincts : "shall" exprime une obligation imposée par le contrat ou la loi (le sujet N\'A PAS le choix) ; "may" exprime un droit ou une permission (le sujet A le choix) ; "must" exprime une obligation externe, souvent imposée par la loi. Cette distinction est CRUCIALE car confondre "shall" et "may" peut changer entièrement le sens d\'une clause. En français, "shall" = "devra", "may" = "pourra", "must" = "doit".',
    examples: [
      {
        sentence: 'The landlord shall maintain the premises in good repair throughout the tenancy.',
        translation: 'Le propriétaire devra maintenir les locaux en bon état de réparation tout au long du bail.',
        isCorrect: true
      },
      {
        sentence: 'The tenant may sublet the property with the prior written consent of the landlord.',
        translation: 'Le locataire pourra sous-louer le bien avec l\'accord écrit préalable du propriétaire.',
        isCorrect: true
      },
      {
        sentence: 'Employers must provide a safe working environment under occupational health legislation.',
        translation: "Les employeurs doivent fournir un environnement de travail sûr en vertu de la législation sur la santé au travail.",
        isCorrect: true
      },
      {
        sentence: 'The tenant shall sublet the property without the landlord\'s consent.',
        translation: 'Le locataire devra sous-louer le bien sans l\'accord du propriétaire.',
        isCorrect: false
      }
    ],
    commonMistakes: [
      {
        wrong: 'The buyer may pay the purchase price within 30 days.',
        correct: 'The buyer shall pay the purchase price within 30 days.',
        explanation: 'Si le paiement est une obligation, utilisez "shall" et non "may". "May" donne un droit ou une permission (le buyer peut payer ou non), ce qui n\'est pas l\'intention ici. Cette erreur peut rendre une clause inapplicable.'
      },
      {
        wrong: 'The employee shall take annual leave.',
        correct: 'The employee may take annual leave. OR: The employee must take annual leave.',
        explanation: '"Shall" implique une obligation contractuelle. Si le congé est un droit (permission), utilisez "may". Si c\'est une obligation légale (le salarié doit prendre ses congés), utilisez "must". "Shall" est inapproprié ici car l\'employeur n\'impose pas contractuellement les congés.'
      }
    ]
  },
  conversation: [
    {
      speaker: 'Fatima',
      role: 'A',
      text: 'Let\'s turn to the dispute resolution clause. I notice it says either party "may" initiate arbitration — shouldn\'t that be "shall"?',
      translation: "Passons à la clause de résolution des différends. Je remarque qu'il est dit que l'une ou l'autre partie « peut » engager une arbitrage — ne devrait-ce pas être « shall » ?"
    },
    {
      speaker: 'Diego',
      role: 'B',
      text: 'No, "may" is intentional here. We want to preserve the right to choose arbitration, but not make it mandatory. Parties may also pursue mediation first.',
      translation: "Non, « may » est intentionnel ici. Nous voulons préserver le droit de choisir l'arbitrage, sans le rendre obligatoire. Les parties peuvent également d'abord poursuivre la médiation."
    },
    {
      speaker: 'Fatima',
      role: 'A',
      text: 'That makes sense. However, clause 14 states the parties "shall" attempt mediation before any arbitration. Isn\'t that contradictory?',
      translation: "C'est logique. Cependant, la clause 14 stipule que les parties « devront » tenter la médiation avant tout arbitrage. N'est-ce pas contradictoire ?"
    },
    {
      speaker: 'Diego',
      role: 'B',
      text: 'Good catch — you\'re right, that is inconsistent. I\'ll amend it so that mediation is encouraged but not compulsory. The language should be "may attempt" rather than "shall attempt".',
      translation: "Bonne observation — vous avez raison, c'est incohérent. Je vais modifier pour que la médiation soit encouragée mais pas obligatoire. La formulation devrait être « may attempt » plutôt que « shall attempt »."
    },
    {
      speaker: 'Fatima',
      role: 'A',
      text: 'Perfect. And one more thing — the precedent section references a 2019 case. Is that still good law?',
      translation: "Parfait. Et encore une chose — la section sur la jurisprudence fait référence à une affaire de 2019. Est-ce toujours une jurisprudence valide ?"
    },
    {
      speaker: 'Diego',
      role: 'B',
      text: 'I\'ll verify that. If it\'s been overturned on appeal, we\'ll need to update our reference. I\'ll get back to you by Friday.',
      translation: "Je vais vérifier. Si elle a été infirmée en appel, nous devrons mettre à jour notre référence. Je vous reviens d'ici vendredi."
    }
  ],
  conversationTitle: 'Clarifying Legal Language in a Contract',
  pronunciation: [
    {
      word: 'precedent',
      phonetic: '/ˈpresɪdənt/',
      meaning: 'précédent (jurisprudence)',
      tip: 'L\'accent est sur la PREMIÈRE syllabe : PRE-ce-dent. Attention : en tant que nom juridique, ne le confondez pas avec l\'adjectif "precedent" en français qui se prononce /pʁe.si.dɑ̃/. En anglais, le premier "e" est /e/ bref, pas /e/ long à la française.'
    },
    {
      word: 'defendant',
      phonetic: '/dɪˈfendənt/',
      meaning: 'défendeur / accusé',
      tip: 'L\'accent est sur "FEND" : de-FEND-ant. Les francophones ont tendance à dire "dé-fen-DANT" avec l\'accent sur la dernière syllabe. La syllabe finale se prononce /ənt/ (schwa), pas /ɑ̃/.'
    },
    {
      word: 'verdict',
      phonetic: '/ˈvɜːdɪkt/',
      meaning: 'verdict',
      tip: 'L\'accent est sur la PREMIÈRE syllabe : VER-dict. Le "v" anglais est vibreur labio-dental, pas le "v" français. Le "er" se prononce /ɜː/ comme dans "bird", pas /ɛʁ/.'
    },
    {
      word: 'evidence',
      phonetic: '/ˈevɪdəns/',
      meaning: 'preuves / éléments de preuve',
      tip: 'L\'accent est sur la PREMIÈRE syllabe : EV-i-dence. Ne dites pas "é-vi-DENCE". La finale "-ence" se prononce /əns/ (avec un schwa), pas /ɑ̃s/ à la française. Le mot est très différent de "évidence" en français (qui signifie "obviousness", pas "proof").'
    }
  ]
}

export const B2_L55: LessonContent = {
  vocab: [
    {
      english: 'testimony',
      french: 'témoignage',
      phonetic: '/ˈtestɪməni/',
      example: 'The witness gave sworn testimony during the cross-examination by the defence counsel.',
      exampleTranslation: "Le témoin a déposé un témoignage sous serment pendant le contre-interrogatoire par l'avocat de la défense."
    },
    {
      english: 'allegation',
      french: 'allégation / accusation',
      phonetic: '/ˌæləˈɡeɪʃən/',
      example: 'The company denied all allegations of fraud and vowed to fight the charges in court.',
      exampleTranslation: "L'entreprise a nié toutes les allégations de fraude et a juré de combattre les accusations devant les tribunaux."
    },
    {
      english: 'provision',
      french: 'disposition / clause',
      phonetic: '/prəˈvɪʒən/',
      example: 'The provision regarding early termination was added to protect both parties\' interests.',
      exampleTranslation: "La disposition concernant la résiliation anticipée a été ajoutée pour protéger les intérêts des deux parties."
    },
    {
      english: 'remedy',
      french: 'recours / réparation',
      phonetic: '/ˈremədi/',
      example: 'The court granted an injunction as an equitable remedy to prevent further harm.',
      exampleTranslation: "Le tribunal a accordé une injonction comme recours équitable pour prévenir tout préjudice supplémentaire."
    },
    {
      english: 'obligation',
      french: 'obligation',
      phonetic: '/ˌɒblɪˈɡeɪʃən/',
      example: 'The seller has a legal obligation to disclose any known defects before the sale is completed.',
      exampleTranslation: "Le vendeur a l'obligation légale de divulguer tout défaut connu avant que la vente soit conclue."
    }
  ],
  grammar: {
    title: 'La voix passive dans le langage juridique',
    explanation: 'La voix passive est extrêmement fréquente en anglais juridique car elle met l\'accent sur l\'ACTION ou le RÉSULTAT plutôt que sur l\'agent. Cela est utile quand l\'agent est évident, inconnu ou quand on veut maintenir un ton neutre et impersonnel. Structure : "be" + participe passée. Dans les contrats, on trouve souvent : "shall be + participe passée" pour les obligations passives. Attention : le passif juridique anglais se traduit souvent par une tournure impersonnelle en français ("il est prévu que...") ou par le pronom "on".',
    examples: [
      {
        sentence: 'All disputes shall be resolved through binding arbitration.',
        translation: 'Tous les différends seront résolus par arbitrage contraignant.',
        isCorrect: true
      },
      {
        sentence: 'The contract was signed by both parties on 15 March 2025.',
        translation: 'Le contrat a été signé par les deux parties le 15 mars 2025.',
        isCorrect: true
      },
      {
        sentence: 'It must be noted that the provisions of this clause override previous agreements.',
        translation: 'Il convient de noter que les dispositions de la présente clause prévalent sur les accords antérieurs.',
        isCorrect: true
      },
      {
        sentence: 'All disputes will resolve through binding arbitration.',
        translation: 'Tous les différends résoudront par arbitrage contraignant.',
        isCorrect: false
      }
    ],
    commonMistakes: [
      {
        wrong: 'The agreement must sign by both parties.',
        correct: 'The agreement must be signed by both parties.',
        explanation: '"Agreement" ne peut pas signer — il SUBIT l\'action. La voix passive exige "be" + participe passée : "must be signed". Oublier "be" est une erreur courante chez les francophones qui traduisent littéralement.'
      },
      {
        wrong: 'The damages shall be paid by the defendant to the plaintiff.',
        correct: 'The defendant shall pay the damages to the plaintiff.',
        explanation: 'En anglais juridique, quand l\'agent est connu et identifié, la voix ACTIVE est souvent préférée pour plus de clarté. La voix passive est utile quand l\'agent est impersonnel ou évident, mais pas quand il est spécifique. La voix active rend aussi l\'obligation plus directe et moins ambiguë.'
      }
    ]
  },
  conversation: [
    {
      speaker: 'Kenji',
      role: 'A',
      text: 'We\'ve received the opposing party\'s allegations. They\'re claiming we breached the non-disclosure agreement.',
      translation: "Nous avons reçu les allégations de la partie adverse. Ils prétendent que nous avons violé l'accord de confidentialité."
    },
    {
      speaker: 'Nadia',
      role: 'B',
      text: 'On what grounds? The NDA was carefully drafted — I\'d be surprised if there was a genuine breach.',
      translation: "Sur quels fondements ? L'accord de non-divulgation a été rédigé avec soin — je serais surprise s'il y avait eu une véritable violation."
    },
    {
      speaker: 'Kenji',
      role: 'A',
      text: 'They allege that confidential information was disclosed during a public conference last month. But the provision in question only covers written communications.',
      translation: "Ils allèguent que des informations confidentielles ont été divulguées lors d'une conférence publique le mois dernier. Mais la disposition en question ne couvre que les communications écrites."
    },
    {
      speaker: 'Nadia',
      role: 'B',
      text: 'Then their claim is weak. The testimony of our employees who attended that event should support our position.',
      translation: "Alors leur réclamation est fragile. Le témoignage de nos employés qui ont assisté à cet événement devrait étayer notre position."
    },
    {
      speaker: 'Kenji',
      role: 'A',
      text: 'Agreed. Shall we seek a declaratory judgment to clarify the scope of the provision, or would you prefer to settle?',
      translation: "D'accord. Devons-nous demander un jugement déclaratif pour clarifier la portée de la disposition, ou préfériez-vous un règlement ?"
    },
    {
      speaker: 'Nadia',
      role: 'B',
      text: 'Let\'s try negotiation first. If that fails, we\'ll pursue the legal remedy. Our position is strong — I\'m confident we can resolve this without going to court.',
      translation: "Essayons d'abord la négociation. Si cela échoue, nous poursuivrons le recours juridique. Notre position est solide — je suis convaincue que nous pouvons résoudre cela sans aller au tribunal."
    }
  ],
  conversationTitle: 'Responding to Legal Allegations',
  pronunciation: [
    {
      word: 'testimony',
      phonetic: '/ˈtestɪməni/',
      meaning: 'témoignage',
      tip: 'L\'accent est sur la PREMIÈRE syllabe : TES-ti-mo-ny. Ne dites pas "tes-ti-MO-ny" à la française. La dernière syllabe se prononce /ni/ (comme dans "any"), pas /ni/ avec un "n" mouillé. Certains Américains prononcent /-mouni/ avec un "ou".'
    },
    {
      word: 'allegation',
      phonetic: '/ˌæləˈɡeɪʃən/',
      meaning: 'allégation / accusation',
      tip: 'L\'accent est sur "GA" : al-le-GA-tion. Attention au premier son /æ/ comme dans "cat" — pas /a/ comme en français. Le "tion" final est /ʃən/, pas /sjɔ̃/.'
    },
    {
      word: 'provision',
      phonetic: '/prəˈvɪʒən/',
      meaning: 'disposition / clause',
      tip: 'L\'accent est sur "VI" : pro-VI-sion. Le son /ʒ/ du "s" est comme dans "measure" — les francophones le prononcent souvent /z/. La finale est /ʒən/, pas /zjɔ̃/.'
    },
    {
      word: 'obligation',
      phonetic: '/ˌɒblɪˈɡeɪʃən/',
      meaning: 'obligation',
      tip: 'L\'accent est sur "GA" : ob-li-GA-tion. Ne dites pas "ob-li-ga-TION" avec l\'accent sur la dernière syllabe comme en français. Le premier "o" est /ɒ/ comme dans "hot", pas /o/ fermé. La finale est /ʃən/, pas /sjɔ̃/.'
    }
  ]
}
