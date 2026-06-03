import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// C1 ADVANCED — UNIT 11: CONSTITUTIONAL LAW (c1-l51 through c1-l55)
// YOELANG English Learning App for Francophone Users
// Advanced: constitutional vocabulary, legal conditionals, precedent analysis, judicial reasoning
// ════════════════════════════════════════════════════════════════════════════════

// ─── c1-l51: Legal Vocabulary ────────────────────────────────────────────────────
export const C1_L51: LessonContent = {
  vocab: [
    { english: 'amendment', french: 'amendement', phonetic: '/əˈmendmənt/', example: 'The First Amendment guarantees freedom of speech.', exampleTranslation: 'Le Premier Amendement garantit la liberté d\'expression.' },
    { english: 'jurisdiction', french: 'juridiction / compétence', phonetic: '/ˌdʒʊərɪsˈdɪkʃn/', example: 'The case falls outside the jurisdiction of this court.', exampleTranslation: 'L\'affaire relève de la compétence de ce tribunal.' },
    { english: 'precedent', french: 'précédent (jurisprudence)', phonetic: '/ˈpresɪdənt/', example: 'The ruling set a new precedent for environmental law.', exampleTranslation: 'La décision a établi un nouveau précédent en droit de l\'environnement.' },
    { english: 'statute', french: 'loi / statute', phonetic: '/ˈstætʃuːt/', example: 'The statute was enacted by Parliament in 1998.', exampleTranslation: 'La loi a été promulguée par le Parlement en 1998.' },
    { english: 'judicial review', french: 'contrôle juridictionnel', phonetic: '/dʒuːˈdɪʃl rɪˈvjuː/', example: 'The Supreme Court exercised judicial review to strike down the law.', exampleTranslation: 'La Cour suprême a exercé son contrôle juridictionnel pour annuler la loi.' },
  ],
  grammar: {
    title: 'Le vocabulaire constitutionnel : nuances entre sources du droit',
    explanation: 'Le droit constitutionnel anglophone distingue plusieurs sources du droit avec une précision essentielle : (1) « Statute » ≠ « law » ≠ « regulation » : un statute est une loi adoptée par le législateur (Parlement/Congrès) ; une law est le terme général ; une regulation est un règlement émanant d\'une autorité administrative. (2) « Precedent » ≠ « custom » ≠ « convention » : un precedent est une décision judiciaire antérieure qui sert de référence (jurisprudence) ; une custom est une pratique établie non écrite ; une convention constitutionnelle est une règle non écrite mais politiquement contraignante. (3) « Amendment » peut désigner un amendement au texte constitutionnel (the First Amendment) ou un amendement à un projet de loi. (4) « Jurisdiction » a deux sens : le territoire sur lequel s\'exerce l\'autorité d\'un tribunal, ET l\'autorité légale elle-même. On dit « within the jurisdiction of » et non « under the jurisdiction of » pour le territoire. (5) « Judicial review » est un concept spécifique au droit constitutionnel anglophone : le pouvoir des tribunaux d\'annuler des lois inconstitutionnelles — il n\'existe pas sous cette forme dans tous les systèmes juridiques.',
    examples: [
      { sentence: 'The statute was declared unconstitutional following judicial review.', translation: 'La loi a été déclarée inconstitutionnelle à la suite du contrôle juridictionnel.', isCorrect: true },
      { sentence: 'The court\'s precedent established a new principle of law.', translation: 'Le précédent du tribunal a établi un nouveau principe de droit.', isCorrect: true },
      { sentence: 'The amendment was applied to the custom of the court.', translation: '', isCorrect: false },
      { sentence: 'This matter falls within the jurisdiction of the federal court.', translation: 'Cette affaire relève de la compétence du tribunal fédéral.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The amendment was applied to the custom of the court.', correct: 'The amendment was proposed to the statute / constitution.', explanation: 'Un « amendment » modifie un texte législatif ou constitutionnel, pas une « custom » (coutume). Les coutumes ne s\'amendent pas — elles évoluent par la pratique. On propose un amendement à une loi ou à une constitution.' },
      { wrong: 'The case is under the jurisdiction of this court.', correct: 'The case falls within the jurisdiction of this court.', explanation: 'On dit « falls within the jurisdiction of » ou « is within the jurisdiction of ». « Under the jurisdiction » est possible mais moins précis : « under » suggère une subordination, « within » indique le champ de compétence.' },
    ],
  },
  conversation: [
    { speaker: 'Professor Whitmore', role: 'A', text: 'Today we examine how judicial review has shaped constitutional interpretation since Marbury v. Madison.', translation: 'Aujourd\'hui, nous examinons comment le contrôle juridictionnel a façonné l\'interprétation constitutionnelle depuis Marbury v. Madison.' },
    { speaker: 'Student Laurent', role: 'B', text: 'Professor, how does judicial review differ from parliamentary sovereignty in the British system?', translation: 'Professeur, comment le contrôle juridictionnel diffère-t-il de la souveraineté parlementaire dans le système britannique ?' },
    { speaker: 'Professor Whitmore', role: 'A', text: 'Excellent question. Under parliamentary sovereignty, no statute can be struck down by a court. Judicial review, by contrast, empowers courts to invalidate legislation that conflicts with the constitution.', translation: 'Excellente question. En vertu de la souveraineté parlementaire, aucune loi ne peut être annulée par un tribunal. Le contrôle juridictionnel, en revanche, habilite les tribunaux à invalider une législation en conflit avec la constitution.' },
    { speaker: 'Student Laurent', role: 'B', text: 'So a precedent set by a constitutional court carries more weight than an ordinary statute?', translation: 'Donc un précédent établi par une cour constitutionnelle a plus de poids qu\'une loi ordinaire ?' },
    { speaker: 'Professor Whitmore', role: 'A', text: 'Precisely. A constitutional precedent can only be overturned by a subsequent ruling or a constitutional amendment — not by ordinary legislation.', translation: 'Précisément. Un précédent constitutionnel ne peut être renversé que par une décision ultérieure ou un amendement constitutionnel — pas par une législation ordinaire.' },
    { speaker: 'Student Laurent', role: 'B', text: 'That clarifies the hierarchy of norms. The constitution sits at the apex, and judicial review ensures its supremacy.', translation: 'Cela clarifie la hiérarchie des normes. La constitution est au sommet, et le contrôle juridictionnel garantit sa suprématie.' },
  ],
  conversationTitle: 'Droit constitutionnel : sources du droit et hiérarchie des normes',
  pronunciation: [
    { word: 'Amendment', phonetic: '/əˈmendmənt/', meaning: 'Amendement', tip: 'L\'accent est sur « MEN » : « uh-MEN-ment ». Le « a » initial est réduit en schwa. Ne dites pas « a-man-dment » à la française — le « e » avant le « m » est clair.' },
    { word: 'Jurisdiction', phonetic: '/ˌdʒʊərɪsˈdɪkʃn/', meaning: 'Juridiction', tip: 'L\'accent est sur « DIC » : « joor-is-DIK-shun ». Le « j » est doux comme dans « judge ». La terminaison « -tion » = « shun ». Ne prononcez pas le « t » final.' },
    { word: 'Statute', phonetic: '/ˈstætʃuːt/', meaning: 'Loi / Statute', tip: 'Prononcez « STACH-oot » — le « t » devant « u » se prononce « tch » comme dans « nature ». L\'accent est sur la première syllabe. Ne dites pas « sta-toot ».' },
    { word: 'Precedent', phonetic: '/ˈpresɪdənt/', meaning: 'Précédent', tip: 'L\'accent est sur « PRE » : « PRES-ih-dent ». Le « c » se prononce « s » doux. Ne confondez pas avec « president » (/ˈprezɪdənt/) — le « ce » = « s » pas « z ».' },
  ],
}

// ─── c1-l52: Legal Conditionals ──────────────────────────────────────────────────
export const C1_L52: LessonContent = {
  vocab: [
    { english: 'provided that', french: 'à condition que / pourvu que', phonetic: '/prəˈvaɪdɪd ðæt/', example: 'The licence shall be renewed provided that all conditions are met.', exampleTranslation: 'Le permis sera renouvelé à condition que toutes les conditions soient remplies.' },
    { english: 'subject to', french: 'sous réserve de / soumis à', phonetic: '/ˈsʌbdʒekt tuː/', example: 'The agreement is subject to approval by the regulatory authority.', exampleTranslation: 'L\'accord est sous réserve de l\'approbation de l\'autorité de régulation.' },
    { english: 'notwithstanding that', french: 'nonobstant le fait que / en dépit du fait que', phonetic: '/ˌnɒtwɪθˈstændɪŋ ðæt/', example: 'Notwithstanding that the deadline has passed, the filing shall be accepted.', exampleTranslation: 'Nonobstant le fait que le délai soit passé, le dépôt sera accepté.' },
    { english: 'insofar as', french: 'dans la mesure où', phonetic: '/ˌɪnsəˈfɑːr æz/', example: 'The court may intervene insofar as the matter involves a constitutional question.', exampleTranslation: 'Le tribunal peut intervenir dans la mesure où l\'affaire soulève une question constitutionnelle.' },
    { english: 'save that', french: 'sauf si / sous réserve que', phonetic: '/seɪv ðæt/', example: 'All rights are hereby transferred, save that the author retains moral rights.', exampleTranslation: 'Tous les droits sont par la présente cédés, sauf que l\'auteur conserve ses droits moraux.' },
  ],
  grammar: {
    title: 'Les conditionnels juridiques : obligations conditionnelles et exceptions',
    explanation: 'Le langage juridique anglais emploie des connecteurs conditionnels très précis que le francophone doit maîtriser : (1) « Provided that » = à condition que : introduit une condition suspensive — si la condition n\'est pas remplie, l\'obligation ne s\'applique pas. « Provided that » est plus formel et juridique que « if » ou « on condition that ». (2) « Subject to » = sous réserve de : indique qu\'une clause est limitée par une autre. « Subject to Article 5 » = l\'article 5 prévaut. C\'est une hiérarchie, pas simplement une condition. (3) « Notwithstanding that » = nonobstant le fait que : le contraire de « subject to » — ici, c\'est la clause courante qui prévaut sur la clause citée. « Notwithstanding that Article 5 states otherwise, ... » = en dépit de l\'article 5... (4) « Insofar as » = dans la mesure où : limite la portée d\'une disposition. « Insofar as the statute permits » = seulement dans la mesure autorisée par la loi. (5) « Save that » = sauf si / sous réserve que : introduit une exception. Plus formel que « except that ». Ces cinq expressions sont les outils fondamentaux du légiste pour articuler obligations, conditions et exceptions dans un texte juridique.',
    examples: [
      { sentence: 'The contract shall be valid provided that both parties sign before the deadline.', translation: 'Le contrat sera valable à condition que les deux parties signent avant la date limite.', isCorrect: true },
      { sentence: 'The right to appeal is subject to the provisions of Section 12.', translation: 'Le droit d\'appel est soumis aux dispositions de l\'article 12.', isCorrect: true },
      { sentence: 'Notwithstanding that the statute permits such action, the court may still refuse jurisdiction.', translation: 'Nonobstant le fait que la loi autorise une telle action, le tribunal peut refuser sa compétence.', isCorrect: true },
      { sentence: 'Provided that the court may override the constitution.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'Provided that the court may override the constitution.', correct: 'Notwithstanding that the statute so provides, the court may not override the constitution.', explanation: '« Provided that » introduit une condition, pas une exception. Si on veut dire « en dépit de », il faut utiliser « notwithstanding that » ou « despite the fact that ». « Provided that » = « à condition que » — on ne peut pas « à condition que » une chose impossible.' },
      { wrong: 'Subject of Article 5, the following applies.', correct: 'Subject to Article 5, the following applies.', explanation: '« Subject » se construit toujours avec « to » en anglais juridique : « subject TO ». Ne dites pas « subject of » ni « subject from ». C\'est une préposition fixe dans ce contexte.' },
    ],
  },
  conversation: [
    { speaker: 'Barrister Sharma', role: 'A', text: 'The injunction shall remain in force, provided that the respondent complies with the disclosure requirements.', translation: 'L\'injonction restera en vigueur, à condition que l\'intimé se conforme aux obligations de divulgation.' },
    { speaker: 'Counsel Blake', role: 'B', text: 'We would argue that the order should be discharged, notwithstanding that the deadline has not yet passed.', translation: 'Nous soutiendrions que l\'ordonnance devrait être levée, nonobstant le fait que le délai n\'ait pas encore expiré.' },
    { speaker: 'Barrister Sharma', role: 'A', text: 'That argument is subject to the court finding that the original order was improperly granted.', translation: 'Cet argument est sous réserve que le tribunal constate que l\'ordonnance initiale a été accordée à tort.' },
    { speaker: 'Counsel Blake', role: 'B', text: 'Indeed. Insofar as the jurisdictional issue is concerned, we believe the lower court exceeded its authority.', translation: 'En effet. Dans la mesure où la question de compétence est concernée, nous estimons que le tribunal de première instance a dépassé ses pouvoirs.' },
    { speaker: 'Barrister Sharma', role: 'A', text: 'Save that the appellate division has already upheld that jurisdiction, I might be inclined to agree.', translation: 'Sauf si la division d\'appel a déjà confirmé cette compétence, je serais enclin à être d\'accord.' },
    { speaker: 'Counsel Blake', role: 'B', text: 'Then we shall need to distinguish that ruling from the present case. The facts are materially different.', translation: 'Alors nous devrons distinguer cette décision de la présente affaire. Les faits sont matériellement différents.' },
  ],
  conversationTitle: 'Débat juridique : obligations conditionnelles et exceptions',
  pronunciation: [
    { word: 'Provided that', phonetic: '/prəˈvaɪdɪd ðæt/', meaning: 'À condition que', tip: 'Prononcez « pruh-VY-did that » — l\'accent est sur « VY ». Le « that » a le « th » expiré et le « a » est bref. Ne dites pas « zat ».' },
    { word: 'Subject to', phonetic: '/ˈsʌbdʒekt tuː/', meaning: 'Sous réserve de', tip: 'En tant qu\'expression juridique, « subject » se prononce « SUB-jekt » avec l\'accent sur « SUB ». Le « j » est doux. Le « to » est souvent réduit en « tuh ».' },
    { word: 'Notwithstanding', phonetic: '/ˌnɒtwɪθˈstændɪŋ/', meaning: 'Nonobstant', tip: 'L\'accent est sur « STAND » : « not-with-STAND-ing ». Les trois premières syllabes sont rapides et réduites. Le « th » est expiré — ne le remplacez pas par « s » ou « z ».' },
    { word: 'Insofar as', phonetic: '/ˌɪnsəˈfɑːr æz/', meaning: 'Dans la mesure où', tip: 'Prononcez « in-so-FAR az » — l\'accent est sur « FAR ». Le « as » final est très bref. Ne dites pas « in-so-fare » avec un « e » final.' },
  ],
}

// ─── c1-l53: Case Discussion ─────────────────────────────────────────────────────
export const C1_L53: LessonContent = {
  vocab: [
    { english: 'to file a motion', french: 'déposer une requête / introduire une motion', phonetic: '/faɪl ə ˈmoʊʃn/', example: 'The defence filed a motion to dismiss the charges.', exampleTranslation: 'La défense a déposé une requête en rejet des accusations.' },
    { english: 'to strike down', french: 'annuler / invalider (une loi)', phonetic: '/straɪk daʊn/', example: 'The Supreme Court struck down the controversial statute.', exampleTranslation: 'La Cour suprême a invalidé la loi controversée.' },
    { english: 'binding precedent', french: 'précédent contraignant', phonetic: '/ˈbaɪndɪŋ ˈpresɪdənt/', example: 'The decision constitutes a binding precedent for all lower courts.', exampleTranslation: 'La décision constitue un précédent contraignant pour tous les tribunaux inférieurs.' },
    { english: 'to cite', french: 'citer / invoquer', phonetic: '/saɪt/', example: 'The appellant cited three earlier rulings in support of the claim.', exampleTranslation: 'L\'appelant a cité trois décisions antérieures à l\'appui de sa demande.' },
    { english: 'to uphold', french: 'confirmer / maintenir (une décision)', phonetic: '/ʌpˈhoʊld/', example: 'The Court of Appeal upheld the original conviction.', exampleTranslation: 'La Cour d\'appel a confirmé la condamnation initiale.' },
  ],
  grammar: {
    title: 'La discussion d\'arrêt : citer des précédents et argumenter en droit',
    explanation: 'Discuter d\'une affaire constitutionnelle exige un vocabulaire procédural précis : (1) « To file a motion » ≠ « to file a suit » ≠ « to file an appeal » : une motion est une requête au tribunal pendant une procédure en cours ; une suit est une action en justice ; un appeal est un recours contre une décision. (2) « To strike down » ≠ « to repeal » ≠ « to revoke » : strike down = annuler une loi par décision judiciaire (inconstitutionnalité) ; repeal = abroger par le législateur ; revoke = révoquer un acte administratif. Seul un tribunal peut strike down ; seul le législateur peut repeal. (3) « Binding precedent » ≠ « persuasive precedent » : un précédent contraignant (binding) doit être suivi par les tribunaux inférieurs dans la même juridiction ; un précédent persuasif (persuasive) peut influencer mais n\'impose pas la décision. (4) « To cite » ≠ « to invoke » : cite = mentionner formellement une source juridique ; invoke = invoquer un principe ou un droit. On cite un arrêt, on invoque un droit. (5) « To uphold » ≠ « to affirm » ≠ « to confirm » : en procédure d\'appel, uphold et affirm sont souvent interchangeables, mais « affirm » est plus technique (la cour d\'appels affirme le jugement), tandis que « confirm » est moins juridique.',
    examples: [
      { sentence: 'The plaintiffs filed a motion challenging the constitutionality of the statute.', translation: 'Les demandeurs ont déposé une requête contestant la constitutionnalité de la loi.', isCorrect: true },
      { sentence: 'The court struck down the law as a violation of due process.', translation: 'Le tribunal a invalidé la loi comme violation de la procédure régulière.', isCorrect: true },
      { sentence: 'The Supreme Court cited the binding precedent from Brown v. Board of Education.', translation: 'La Cour suprême a cité le précédent contraignant de Brown v. Board of Education.', isCorrect: true },
      { sentence: 'The legislature struck down the unpopular statute.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'The legislature struck down the unpopular statute.', correct: 'The legislature repealed the unpopular statute.', explanation: '« Strike down » est une action judiciaire — seul un tribunal peut « strike down » une loi. Le législateur « repeals » (abroge) une loi. Confondre les deux revient à confondre les pouvoirs judiciaire et législatif.' },
      { wrong: 'The lawyer invoked three previous cases.', correct: 'The lawyer cited three previous cases.', explanation: 'On « cites » des arrêts et des sources juridiques. On « invokes » un droit, un principe ou un privilège. Un arrêt se cite (cite), un droit constitutionnel s\'invoque (invoke).' },
    ],
  },
  conversation: [
    { speaker: 'Senior Partner Ashford', role: 'A', text: 'Have you reviewed the government\'s submission? They\'ve cited three precedents in support of the legislation.', translation: 'Avez-vous examiné la soumission du gouvernement ? Ils ont cité trois précédents à l\'appui de la législation.' },
    { speaker: 'Associate Chen', role: 'B', text: 'Yes. The first is binding precedent, but I believe we can distinguish it — the factual matrix is entirely different.', translation: 'Oui. Le premier est un précédent contraignant, mais je pense que nous pouvons le distinguer — la matrice factuelle est entièrement différente.' },
    { speaker: 'Senior Partner Ashford', role: 'A', text: 'Good. File a motion for judicial review by Friday. We\'ll argue that the statute infringes the right to privacy.', translation: 'Bien. Déposez une requête en contrôle juridictionnel d\'ici vendredi. Nous soutiendrons que la loi porte atteinte au droit à la vie privée.' },
    { speaker: 'Associate Chen', role: 'B', text: 'Should we also cite the Court of Appeal ruling from last year? The court upheld the lower decision on similar grounds.', translation: 'Devrions-nous également citer la décision de la Cour d\'appel de l\'année dernière ? La cour a confirmé la décision de première instance sur des motifs similaires.' },
    { speaker: 'Senior Partner Ashford', role: 'A', text: 'Absolutely. That precedent is persuasive rather than binding, but it strengthens our argument considerably.', translation: 'Absolument. Ce précédent est persuasif plutôt que contraignant, mais il renforce considérablement notre argumentation.' },
    { speaker: 'Associate Chen', role: 'B', text: 'Understood. I\'ll prepare the brief and have it on your desk by Thursday evening.', translation: 'Compris. Je préparerai le mémoire et le déposerai sur votre bureau jeudi soir.' },
  ],
  conversationTitle: 'Discussion d\'arrêt : stratégie juridique et citation de précédents',
  pronunciation: [
    { word: 'Motion', phonetic: '/ˈmoʊʃn/', meaning: 'Requête / Motion', tip: 'Prononcez « MO-shun » — l\'accent est sur « MO ». Le « t » ne se prononce PAS : la terminaison « -tion » = « shun ». Ne dites pas « mo-tion ».' },
    { word: 'Uphold', phonetic: '/ʌpˈhoʊld/', meaning: 'Confirmer', tip: 'L\'accent est sur « HOLD » : « up-HOLD ». Le « up » est rapide et réduit. Le « l » est clair et le « d » final est prononcé.' },
    { word: 'Binding', phonetic: '/ˈbaɪndɪŋ/', meaning: 'Contraignant', tip: 'L\'accent est sur « BIN » : « BY-ding » — le « d » au milieu est prononcé. Ne confondez pas avec « binding » = reliure (même mot, même prononciation).' },
    { word: 'Strike down', phonetic: '/straɪk daʊn/', meaning: 'Invalider', tip: '« Strike » = « straïk » avec le son « aï » long. « Down » = « daoun ». L\'accent est sur « strike ». Les deux mots sont liés sémantiquement dans cette expression.' },
  ],
}

// ─── c1-l54: Precedent Analysis ──────────────────────────────────────────────────
export const C1_L54: LessonContent = {
  vocab: [
    { english: 'to distinguish', french: 'distinguer (un précédent)', phonetic: '/dɪˈstɪŋɡwɪʃ/', example: 'The court distinguished the earlier ruling on the grounds that the facts were materially different.', exampleTranslation: 'Le tribunal a distingué la décision antérieure au motif que les faits étaient matériellement différents.' },
    { english: 'to overrule', french: 'infirmer / rejeter (un précédent)', phonetic: '/ˌoʊvərˈruːl/', example: 'The Supreme Court overruled the long-standing precedent in a landmark decision.', exampleTranslation: 'La Cour suprême a infirmé le précédent de longue date dans une décision historique.' },
    { english: 'to affirm', french: 'confirmer (un jugement)', phonetic: '/əˈfɜːrm/', example: 'The appellate court affirmed the lower court\'s judgment in its entirety.', exampleTranslation: 'La cour d\'appel a confirmé le jugement du tribunal de première instance dans son intégralité.' },
    { english: 'to remand', french: 'renvoyer (devant la juridiction inférieure)', phonetic: '/rɪˈmænd/', example: 'The case was remanded to the trial court for reconsideration of the evidence.', exampleTranslation: 'L\'affaire a été renvoyée devant le tribunal de première instance pour réexamen des preuves.' },
    { english: 'obiter dictum', french: 'obiter dictum / dire accessoire', phonetic: '/ˈɒbɪtər ˈdɪktəm/', example: 'The judge\'s comments on the constitutional issue were obiter dictum and not binding.', exampleTranslation: 'Les commentaires du juge sur la question constitutionnelle étaient obiter dictum et non contraignants.' },
  ],
  grammar: {
    title: 'Le langage du raisonnement juridique : distinguer, infirmer, confirmer, renvoyer',
    explanation: 'Le raisonnement juridique anglophone repose sur des verbes techniques précis pour traiter les précédents : (1) « To distinguish » un précédent = démontrer qu\'il ne s\'applique pas au cas d\'espèce en raison de différences factuelles ou juridiques. C\'est la technique la plus courante pour écarter un précédent sans le remettre en question. On ne « distingue » pas un précédent quand on est d\'accord avec lui — on le distingue pour NE PAS le suivre. (2) « To overrule » un précédent = l\'invalider définitivement. C\'est l\'acte le plus grave — on déclare que la décision antérieure était mal fondée. Seule une cour du même rang ou supérieure peut overrule. (3) « To affirm » un jugement = le confirmer en appel. La cour d\'appels examine et dit : le jugement est correct. (4) « To remand » = renvoyer l\'affaire devant le tribunal inférieur pour qu\'il statue à nouveau, souvent avec des instructions. Remand ≠ reverse : on reverse (annule) le jugement ; on remand (renvoie) l\'affaire. (5) « Obiter dictum » (pl. obiter dicta) ≠ « ratio decidendi » : la ratio decidendi est la raison de la décision — elle constitue le précédent contraignant (binding) ; l\'obiter dictum est un commentaire accessoire du juge, hors du motif central — il est seulement persuasif. Identifier ce qui est ratio et ce qui est obiter est l\'exercice fondamental du juriste anglophone.',
    examples: [
      { sentence: 'The appellant sought to distinguish the precedent by arguing that the statutory framework had since changed.', translation: 'L\'appelant a cherché à distinguer le précédent en soutenant que le cadre législatif avait depuis changé.', isCorrect: true },
      { sentence: 'The court overruled its own earlier decision, acknowledging that it had been wrongly decided.', translation: 'Le tribunal a infirmé sa propre décision antérieure, reconnaissant qu\'elle avait été mal jugée.', isCorrect: true },
      { sentence: 'The appellate court reversed the conviction and remanded the case for a new trial.', translation: 'La cour d\'appel a annulé la condamnation et renvoyé l\'affaire pour un nouveau procès.', isCorrect: true },
      { sentence: 'The judge overruled the obiter dictum of the previous court.', translation: '', isCorrect: false },
    ],
    commonMistakes: [
      { wrong: 'The judge overruled the obiter dictum of the previous court.', correct: 'The judge disregarded the obiter dictum of the previous court.', explanation: 'On ne « overrule » pas un obiter dictum — on le « disregards » (l\'ignore) ou le « declines to follow » (décline de le suivre). L\'obiter dictum n\'est pas contraignant, il n\'y a donc pas besoin de l\'invalider. On ne peut « overrule » que la ratio decidendi (le motif contraignant).' },
      { wrong: 'The court remanded the decision.', correct: 'The court remanded the case to the lower court.', explanation: 'On ne « remand » pas une décision — on « remand » une affaire (case) devant une juridiction inférieure. « Remand » nécessite toujours un complément indiquant la destination : « remanded to the trial court ».' },
    ],
  },
  conversation: [
    { speaker: 'Justice Kerr', role: 'A', text: 'Counsel, the precedent in Hartley v. Collins appears directly on point. Why should we not follow it?', translation: 'Conseil, le précédent de Hartley v. Collins semble directement applicable. Pourquoi ne devrions-nous pas le suivre ?' },
    { speaker: 'Barrister Osei', role: 'B', text: 'My Lord, we submit that Hartley can be distinguished. The ratio decidendi rested on the assumption that the statutory framework was unchanged — which it no longer is.', translation: 'Monsieur le juge, nous soumettons que Hartley peut être distingué. La ratio decidendi reposait sur l\'hypothèse que le cadre législatif était inchangé — ce qui n\'est plus le cas.' },
    { speaker: 'Justice Kerr', role: 'A', text: 'Are you then asking us to overrule Hartley entirely, or merely to distinguish it?', translation: 'Nous demandez-vous alors d\'invalider Hartley entièrement, ou simplement de le distinguer ?' },
    { speaker: 'Barrister Osei', role: 'B', text: 'We ask only that it be distinguished. Overruling is not necessary where the facts can be materially separated. However, we note that the comments in paragraph 47 were obiter dicta and never formed part of the ratio.', translation: 'Nous demandons seulement qu\'il soit distingué. L\'infirmation n\'est pas nécessaire lorsque les faits peuvent être matériellement séparés. Cependant, nous notons que les commentaires au paragraphe 47 étaient obiter dicta et n\'ont jamais fait partie de la ratio.' },
    { speaker: 'Justice Kerr', role: 'A', text: 'I am inclined to agree. In that case, we may affirm the principle while remanding the matter for reconsideration under the current statute.', translation: 'Je suis enclin à être d\'accord. Dans ce cas, nous pouvons confirmer le principe tout en renvoyant l\'affaire pour réexamen sous la loi actuelle.' },
    { speaker: 'Barrister Osei', role: 'B', text: 'That would be a just outcome, my Lord. The lower court can then apply the correct statutory framework to the facts as found.', translation: 'Ce serait une décision juste, Monsieur le juge. Le tribunal inférieur pourra alors appliquer le cadre législatif correct aux faits tels qu\'établis.' },
  ],
  conversationTitle: 'Analyse de précédent : distinguer, infirmer et renvoyer',
  pronunciation: [
    { word: 'Distinguish', phonetic: '/dɪˈstɪŋɡwɪʃ/', meaning: 'Distinguer', tip: 'L\'accent est sur « STIN » : « dih-STING-gwish ». Le « gu » se prononce « gw » comme dans « language ». Ne dites pas « dis-tan-guish ».' },
    { word: 'Overrule', phonetic: '/ˌoʊvərˈruːl/', meaning: 'Invalider', tip: 'L\'accent est sur « RULE » : « oh-ver-ROOL ». Le « over » est rapide et réduit. Le « oo » de « rule » est long comme dans « blue ».' },
    { word: 'Remand', phonetic: '/rɪˈmænd/', meaning: 'Renvoyer', tip: 'L\'accent est sur « MAND » : « rih-MAND ». Le « re » est réduit en schwa. Le « a » de « mand » est ouvert comme dans « man ». Ne dites pas « ree-mand ».' },
    { word: 'Obiter dictum', phonetic: '/ˈɒbɪtər ˈdɪktəm/', meaning: 'Dire accessoire', tip: 'Expression latine anglicisée : « OB-ih-ter DIK-tum ». L\'accent est sur « OB » et « DIK ». Ne prononcez PAS à la latine — en anglais juridique, on anglicise les termes latins.' },
  ],
}

// ─── c1-l55: Law Sounds ──────────────────────────────────────────────────────────
export const C1_L55: LessonContent = {
  vocab: [
    { english: 'habeas corpus', french: 'habeas corpus', phonetic: '/ˈheɪbiəs ˈkɔːrpəs/', example: 'The detainee filed a petition for a writ of habeas corpus.', exampleTranslation: 'Le détenu a déposé une requête en habeas corpus.' },
    { english: 'pro bono', french: 'pro bono (à titre gratuit)', phonetic: '/ˌproʊ ˈboʊnoʊ/', example: 'The firm undertakes significant pro bono work each year.', exampleTranslation: 'Le cabinet effectue un travail pro bono important chaque année.' },
    { english: 'subpoena', french: 'assignation à comparaître', phonetic: '/səˈpiːnə/', example: 'The witness was served with a subpoena to testify before the committee.', exampleTranslation: 'Le témoin a reçu une assignation à comparaître devant la commission.' },
    { english: 'litigation', french: 'contentieux / procédure judiciaire', phonetic: '/ˌlɪtɪˈɡeɪʃn/', example: 'The company sought to avoid costly litigation by settling out of court.', exampleTranslation: 'L\'entreprise a cherché à éviter un contentieux coûteux en concluant un règlement à l\'amiable.' },
    { english: 'tort', french: 'délit civil / quasi-délit', phonetic: '/tɔːrt/', example: 'Negligence is the most commonly claimed tort in civil proceedings.', exampleTranslation: 'La négligence est le délit civil le plus couramment invoqué dans les procédures civiles.' },
  ],
  grammar: {
    title: 'La prononciation des termes juridiques : pièges pour francophones',
    explanation: 'Le droit anglophone regorge de termes d\'origine latine et française que les francophones prononcent souvent incorrectement : (1) « Habeas corpus » : en anglais /ˈheɪbiəs ˈkɔːrpəs/ — on prononce « HAY-bee-us KOR-pus ». Le « h » est expiré (contrairement au latin classique), le « e » de « habeas » est long, et « corpus » rime avec « plus ». (2) « Pro bono » : /ˌproʊ ˈboʊnoʊ/ — « pro BO-no » avec le « o » long. Ne dites PAS « pro bono » à l\'italienne avec des « o » ouverts. (3) « Subpoena » : /səˈpiːnə/ — « suh-PEE-nuh ». Le « sub » est réduit en schwa et le « oe » se prononce « ee » ! C\'est un piège majeur — ne dites PAS « sub-po-EE-na » ni « sub-pwe-na ». (4) « Tort » : /tɔːrt/ — un seul son : « tort » avec le « r » anglais et le « o » ouvert comme dans « court ». Ne prononcez PAS le « t » final à la française. (5) « Litigation » : /ˌlɪtɪˈɡeɪʃn/ — l\'accent est sur « GAY » : « li-ti-GAY-shun ». La terminaison « -tion » = « shun ». Ces anglicismes de prononciation sont essentiels pour la crédibilité professionnelle du juriste francophone.',
    examples: [
      { sentence: 'The lawyer filed a habeas corpus petition on behalf of the detained asylum seeker.', translation: 'L\'avocat a déposé une requête en habeas corpus au nom du demandeur d\'asile détenu.', isCorrect: true },
      { sentence: 'The committee issued a subpoena requiring the minister to produce documents.', translation: 'La commission a émis une assignation exigeant que le ministre produise des documents.', isCorrect: true },
      { sentence: 'The sub-pwe-na was served on the witness yesterday.', translation: '', isCorrect: false },
      { sentence: 'The firm\'s pro bono programme provides legal aid to underserved communities.', translation: 'Le programme pro bono du cabinet fournit une aide juridique aux communautés défavorisées.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The sub-pwe-na was served on the witness yesterday.', correct: 'The subpoena (/səˈpiːnə/) was served on the witness yesterday.', explanation: '« Subpoena » se prononce « suh-PEE-nuh » — le « oe » se prononce « ee » comme dans « people », PAS « we ». C\'est un mot d\'origine latine anglicisé. C\'est l\'une des erreurs de prononciation les plus fréquentes chez les francophones.' },
      { wrong: 'Habeas corpus prononcé à la latine « ah-bé-as corpus »', correct: 'Habeas corpus pronounced /ˈheɪbiəs ˈkɔːrpəs/', explanation: 'En anglais juridique, « habeas corpus » se prononce « HAY-bee-us KOR-pus » — le « h » est expiré, le premier « a » est long comme dans « hay », et « corpus » a le « o » ouvert. Ne prononcez jamais les termes juridiques latins à la latine en contexte anglais.' },
    ],
  },
  conversation: [
    { speaker: 'Trainee Solicitor Dupont', role: 'A', text: 'I\'ve been asked to prepare the pro bono case files. Could you clarify the procedure for filing a habeas corpus petition?', translation: 'On m\'a demandé de préparer les dossiers pro bono. Pouvez-vous m\'éclairer sur la procédure de dépôt d\'une requête en habeas corpus ?' },
    { speaker: 'Senior Solicitor Williams', role: 'B', text: 'Certainly. First, draft the petition and ensure all grounds for unlawful detention are clearly stated. Then, we\'ll need to serve a subpoena on the detaining authority.', translation: 'Bien sûr. D\'abord, rédigez la requête et assurez-vous que tous les motifs de détention illégale sont clairement énoncés. Ensuite, nous devrons signifier une assignation à l\'autorité de détention.' },
    { speaker: 'Trainee Solicitor Dupont', role: 'A', text: 'And if the case proceeds to litigation, would we be claiming a tort or seeking a judicial review?', translation: 'Et si l\'affaire débouche sur un contentieux, invoquerions-nous un délit civil ou demanderions-nous un contrôle juridictionnel ?' },
    { speaker: 'Senior Solicitor Williams', role: 'B', text: 'Habeas corpus is neither a tort claim nor judicial review in the strict sense. It\'s a sui generis remedy — a direct challenge to the lawfulness of detention itself.', translation: 'L\'habeas corpus n\'est ni une demande délictuelle ni un contrôle juridictionnel au sens strict. C\'est un recours sui generis — un défi direct à la légalité de la détention elle-même.' },
    { speaker: 'Trainee Solicitor Dupont', role: 'A', text: 'That\'s very helpful. One more thing — I noticed some colleagues pronounce « subpoena » differently. What\'s the correct pronunciation?', translation: 'C\'est très utile. Encore une chose — j\'ai remarqué que certains collègues prononcent « subpoena » différemment. Quelle est la prononciation correcte ?' },
    { speaker: 'Senior Solicitor Williams', role: 'B', text: 'It\'s « suh-PEE-nuh ». The « oe » is pronounced like the « ee » in « see ». Never say « sub-po-EE-na » or « sub-PWE-na » — those are common errors, especially among francophones.', translation: 'C\'est « suh-PEE-nuh ». Le « oe » se prononce comme le « ee » dans « see ». Ne dites jamais « sub-po-EE-na » ou « sub-PWE-na » — ce sont des erreurs courantes, surtout chez les francophones.' },
  ],
  conversationTitle: 'Prononciation juridique : termes latins et pièges francophones',
  pronunciation: [
    { word: 'Habeas corpus', phonetic: '/ˈheɪbiəs ˈkɔːrpəs/', meaning: 'Habeas corpus', tip: 'Prononcez « HAY-bee-us KOR-pus » — le « h » est expiré (pas muet comme en français), le « a » de « ha » est long comme dans « hay ». « Corpus » rime avec « plus » en anglais. Ne prononcez PAS à la latine.' },
    { word: 'Subpoena', phonetic: '/səˈpiːnə/', meaning: 'Assignation', tip: 'PIÈGE MAJEUR : prononcez « suh-PEE-nuh » — le « oe » se lit « ee » ! Ne dites JAMAIS « sub-pwe-na » ni « sub-po-ee-na ». L\'accent est sur « PEE ». Le « sub » initial est réduit en schwa.' },
    { word: 'Tort', phonetic: '/tɔːrt/', meaning: 'Délit civil', tip: 'Prononcez « tort » avec le « o » ouvert comme dans « court » et le « r » anglais. Le « t » final EST prononcé (contrairement au français). Un seul son syllabique. Ne dites pas « tor ».' },
    { word: 'Pro bono', phonetic: '/ˌproʊ ˈboʊnoʊ/', meaning: 'À titre gratuit', tip: 'Prononcez « pro BO-noh » — les « o » sont longs et fermés comme dans « go ». Ne dites pas « pro bono » à l\'italienne avec des « o » ouverts. L\'accent est sur « BO ».' },
  ],
}
