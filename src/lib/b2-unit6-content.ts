import type { LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// B2 UPPER INTERMEDIATE — UNIT 6: MEDICINE (b2-l26 through b2-l30)
// YOELANG English Learning App for Francophone Users
// Upper-intermediate: medical vocabulary, advanced passive, doctor-patient dialogue, research pronunciation
// ════════════════════════════════════════════════════════════════════════════════

// ─── b2-l26: Medical Vocabulary ────────────────────────────────────────────────────
export const B2_L26: LessonContent = {
  vocab: [
    { english: 'diagnosis', french: 'diagnostic', phonetic: '/ˌdaɪəɡˈnəʊsɪs/', example: 'The diagnosis was confirmed after a series of blood tests.', exampleTranslation: 'Le diagnostic a été confirmé après une série d\'analyses sanguines.' },
    { english: 'prescription', french: 'ordonnance', phonetic: '/prɪˈskrɪpʃn/', example: 'The doctor gave me a prescription for antibiotics.', exampleTranslation: 'Le médecin m\'a donné une ordonnance pour des antibiotiques.' },
    { english: 'chronic', french: 'chronique', phonetic: '/ˈkrɒnɪk/', example: 'She has been living with chronic pain for over ten years.', exampleTranslation: 'Elle vit avec une douleur chronique depuis plus de dix ans.' },
    { english: 'prognosis', french: 'pronostic', phonetic: '/prɒɡˈnəʊsɪs/', example: 'The prognosis for this type of cancer has improved significantly.', exampleTranslation: 'Le pronostic pour ce type de cancer s\'est considérablement amélioré.' },
    { english: 'side effects', french: 'effets secondaires', phonetic: '/saɪd ɪˈfekts/', example: 'Common side effects include nausea, dizziness, and fatigue.', exampleTranslation: 'Les effets secondaires courants incluent des nausées, des vertiges et de la fatigue.' },
  ],
  grammar: {
    title: 'Le vocabulaire médical : faux amis et nuances essentielles',
    explanation: 'Le vocabulaire médical anglais contient de nombreux pièges pour les francophones : (1) « Diagnosis » ≠ « diagnostic ». En anglais, « diagnosis » est le nom (le diagnostic posé), tandis que le verbe est « to diagnose » (diagnostiquer). On dit « to make a diagnosis » (poser un diagnostic), pas « to do a diagnostic ». (2) « Prescription » s\'emploie comme en français, mais on dit « to write a prescription » (rédiger une ordonnance) et « to fill a prescription » (faire exécuter une ordonnance à la pharmacie). (3) « Chronic » en anglais signifie « de longue durée » ou « persistant » — cela ne signifie PAS « grave » ou « aigu ». Ne confondez pas « chronic » (chronique, longue durée) avec « severe » (sévère, grave) ou « acute » (aigu). Un patient peut avoir une maladie chronique légère. (4) « Prognosis » est le pronostic médical (prévision de l\'évolution), à ne pas confondre avec « diagnosis » (identification de la maladie). (5) « Side effects » = effets secondaires. On dit « the drug has side effects » ou « to experience side effects », pas « secondary effects ».',
    examples: [
      { sentence: 'The doctor made a diagnosis of type 2 diabetes after reviewing the test results.', translation: 'Le médecin a posé un diagnostic de diabète de type 2 après avoir examiné les résultats des analyses.', isCorrect: true },
      { sentence: 'The disease is very chronic and requires immediate surgery.', translation: '', isCorrect: false },
      { sentence: 'The prognosis for recovery is excellent if treatment begins early.', translation: 'Le pronostic de guérison est excellent si le traitement commence tôt.', isCorrect: true },
      { sentence: 'Patients should be informed about potential side effects before starting the medication.', translation: 'Les patients doivent être informés des effets secondaires potentiels avant de commencer le médicament.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The disease is very chronic and requires immediate surgery.', correct: 'The disease is severe and requires immediate surgery.', explanation: '« Chronic » décrit la durée (longue durée), pas la gravité. Une maladie chronique peut être légère. Pour exprimer la gravité, utilisez « severe », « serious » ou « acute » (aigu).' },
      { wrong: 'He did a diagnostic and prescribed medication.', correct: 'He made a diagnosis and prescribed medication.', explanation: 'On dit « to make a diagnosis » (poser un diagnostic), pas « to do a diagnostic ». Le nom est « diagnosis », pas « diagnostic » en anglais. Et le verbe est « to diagnose ».' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Diallo', role: 'A', text: 'Good morning, Madame Renard. I\'ve reviewed your test results and I\'m ready to discuss the diagnosis.', translation: 'Bonjour, Madame Renard. J\'ai examiné vos résultats d\'analyses et je suis prêt à discuter du diagnostic.' },
    { speaker: 'Mme Renard', role: 'B', text: 'I\'m a bit nervous, Doctor. Is it serious?', translation: 'Je suis un peu nerveuse, Docteur. C\'est grave ?' },
    { speaker: 'Dr. Diallo', role: 'A', text: 'The diagnosis is hypothyroidism. It\'s a chronic condition, but it\'s very manageable with the right medication.', translation: 'Le diagnostic est une hypothyroïdie. C\'est une maladie chronique, mais elle est très gérable avec le bon traitement.' },
    { speaker: 'Mme Renard', role: 'B', text: 'Will there be many side effects from the medication?', translation: 'Y aura-t-il beaucoup d\'effets secondaires avec le médicament ?' },
    { speaker: 'Dr. Diallo', role: 'A', text: 'Most patients tolerate it well. I\'ll write you a prescription today, and the prognosis is excellent — you should feel much better within a few weeks.', translation: 'La plupart des patients le tolèrent bien. Je vous rédigerai une ordonnance aujourd\'hui, et le pronostic est excellent — vous devriez vous sentir beaucoup mieux en quelques semaines.' },
    { speaker: 'Mme Renard', role: 'B', text: 'That\'s reassuring. Thank you, Doctor. I\'ll fill the prescription right away.', translation: 'C\'est rassurant. Merci, Docteur. Je ferai exécuter l\'ordonnance tout de suite.' },
  ],
  conversationTitle: 'Annonce d\'un diagnostic : hypothyroïdie',
  pronunciation: [
    { word: 'Diagnosis', phonetic: '/ˌdaɪəɡˈnəʊsɪs/', meaning: 'Diagnostic', tip: 'L\'accent est sur « NO » : « dy-ug-NO-sis ». Le « g » est muet devant le « n ». Le pluriel « diagnoses » se prononce « dy-ug-NO-seez ». Ne dites pas « di-ag-no-siss ».' },
    { word: 'Prescription', phonetic: '/prɪˈskrɪpʃn/', meaning: 'Ordonnance', tip: 'L\'accent est sur « SCRIP » : « pri-SKRIP-shun ». La syllabe « tion » = « shun ». Ne prononcez pas le « c » du milieu séparément — il fait partie du son « skrip ».' },
    { word: 'Chronic', phonetic: '/ˈkrɒnɪk/', meaning: 'Chronique', tip: 'Prononcez « KRON-ik » — l\'accent est sur la première syllabe. Le « ch » = « k » (comme dans « chronique » en français). Le « o » est ouvert comme dans « hot ».' },
    { word: 'Prognosis', phonetic: '/prɒɡˈnəʊsɪs/', meaning: 'Pronostic', tip: 'L\'accent est sur « NO » : « prog-NO-sis ». Le « g » se prononce devant le « n ». Comparez avec « diagnosis » : même terminaison « -nosis », mais le début est « prog » (le g est prononcé).' },
  ],
}

// ─── b2-l27: Passive Advanced ──────────────────────────────────────────────────────
export const B2_L27: LessonContent = {
  vocab: [
    { english: 'to administer', french: 'administrer / donner (un médicament)', phonetic: '/ədˈmɪnɪstər/', example: 'The vaccine was administered to over two million people.', exampleTranslation: 'Le vaccin a été administré à plus de deux millions de personnes.' },
    { english: 'to induce', french: 'provoquer / induire', phonetic: '/ɪnˈdjuːs/', example: 'The drug is known to induce drowsiness in some patients.', exampleTranslation: 'Le médicament est connu pour provoquer de la somnolence chez certains patients.' },
    { english: 'to assess', french: 'évaluer', phonetic: '/əˈses/', example: 'The patient\'s condition was assessed every four hours.', exampleTranslation: 'L\'état du patient était évalué toutes les quatre heures.' },
    { english: 'to carry out', french: 'effectuer / réaliser', phonetic: '/ˈkæri aʊt/', example: 'The clinical trial was carried out across three hospitals.', exampleTranslation: 'L\'essai clinique a été réalisé dans trois hôpitaux.' },
    { english: 'to attribute', french: 'attribuer', phonetic: '/əˈtrɪbjuːt/', example: 'The improvement was attributed to the new treatment protocol.', exampleTranslation: 'L\'amélioration a été attribuée au nouveau protocole de traitement.' },
  ],
  grammar: {
    title: 'La voix passive avancée : verbes de rapport et causative',
    explanation: 'Au niveau B2, vous devez maîtriser deux formes avancées de la voix passive très courantes dans le domaine médical et scientifique : (1) PASSIF AVEC VERBES DE RAPPORT : On utilise des structures impersonnelles pour rapporter des informations sans citer de source précise : « It is thought that... » (On pense que...), « It has been proven that... » (Il a été prouvé que...), « It is widely believed that... » (Il est largement admis que...), « It is estimated that... » (On estime que...), « It has been suggested that... » (Il a été suggéré que...). Variante personnelle : « The drug is thought to be effective » (Le médicament serait efficace) — ici, le sujet reçoit l\'action ET la croyance. (2) PASSIF CAUSATIF : On l\'utilise pour exprimer qu\'on fait faire quelque chose par quelqu\'un d\'autre : « have + objet + participe passé » : « She had her blood pressure checked » (Elle s\'est fait vérifier sa tension) ; « get + objet + participe passé » : « I need to get this prescription filled » (Je dois faire exécuter cette ordonnance). Différence : « have » est plus formel, « get » est plus informel et implique souvent un effort personnel. (3) PASSIF CAUSATIF avec « have something done » vs « have someone do something » : « I had the X-ray taken » (On m\'a pris une radiographie — passif) vs « I had the nurse take the X-ray » (J\'ai demandé à l\'infirmière de prendre la radiographie — actif).',
    examples: [
      { sentence: 'It is widely believed that early detection significantly improves the prognosis.', translation: 'Il est largement admis que le dépistage précoce améliore significativement le pronostic.', isCorrect: true },
      { sentence: 'She had her cholesterol levels checked during the annual check-up.', translation: 'Elle s\'est fait vérifier son taux de cholestérol lors de l\'examen annuel.', isCorrect: true },
      { sentence: 'It is believing that the treatment is effective.', translation: '', isCorrect: false },
      { sentence: 'The vaccine has been shown to reduce the risk of infection by 85%.', translation: 'Il a été démontré que le vaccin réduit le risque d\'infection de 85 %.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'It is believing that the treatment is effective.', correct: 'It is believed that the treatment is effective.', explanation: 'Dans la structure passive avec verbes de rapport, on utilise TOUJOURS le participe passé : « It is believed / thought / estimated that... », jamais le gérondif « believing ».' },
      { wrong: 'She got checked her blood pressure by the nurse.', correct: 'She got her blood pressure checked by the nurse.', explanation: 'La structure causative est « get/have + objet + participe passé ». L\'objet (« her blood pressure ») vient AVANT le participe passé (« checked »). Ne séparez pas « get » de son objet.' },
    ],
  },
  conversation: [
    { speaker: 'Prof. Keita', role: 'A', text: 'The results of the clinical trial are remarkable. It is estimated that the new drug reduces recovery time by 40%.', translation: 'Les résultats de l\'essai clinique sont remarquables. On estime que le nouveau médicament réduit le temps de guérison de 40 %.' },
    { speaker: 'Dr. Moreau', role: 'B', text: 'That\'s impressive. It has been suggested that the drug may also have preventive benefits, hasn\'t it?', translation: 'C\'est impressionnant. Il a été suggéré que le médicament pourrait aussi avoir des bénéfices préventifs, n\'est-ce pas ?' },
    { speaker: 'Prof. Keita', role: 'A', text: 'Indeed. It is widely believed that preventive use could transform how we approach this disease.', translation: 'En effet. Il est largement admis que l\'utilisation préventive pourrait transformer notre approche de cette maladie.' },
    { speaker: 'Dr. Moreau', role: 'B', text: 'I had my patients assessed for eligibility last week. Should I get them enrolled in the next phase?', translation: 'J\'ai fait évaluer l\'éligibilité de mes patients la semaine dernière. Devrais-je les faire inscrire à la prochaine phase ?' },
    { speaker: 'Prof. Keita', role: 'A', text: 'Yes, please. The study will be carried out at four different sites this time.', translation: 'Oui, s\'il vous plaît. L\'étude sera réalisée dans quatre sites différents cette fois-ci.' },
    { speaker: 'Dr. Moreau', role: 'B', text: 'Perfect. I\'ll have the paperwork completed by Friday so we can begin administering the drug next Monday.', translation: 'Parfait. Je ferai remplir les documents d\'ici vendredi pour que nous puissions commencer à administrer le médicament lundi prochain.' },
  ],
  conversationTitle: 'Entre médecins : discuter d\'un essai clinique',
  pronunciation: [
    { word: 'Administer', phonetic: '/ədˈmɪnɪstər/', meaning: 'Administrer', tip: 'L\'accent est sur « MIN » : « ud-MIN-is-ter ». Les syllabes avant et après sont réduites. Ne dites pas « a-dmi-nis-ter » avec chaque syllabe égale.' },
    { word: 'Induce', phonetic: '/ɪnˈdjuːs/', meaning: 'Provoquer', tip: 'Prononcez « in-DYOOS » — l\'accent est sur « DUCE ». Le « u » est long comme dans « reduce ». En américain, on dit souvent « in-DOOS ».' },
    { word: 'Assess', phonetic: '/əˈses/', meaning: 'Évaluer', tip: 'L\'accent est sur « SES » : « uh-SES ». Le « a » initial est un schwa très rapide. Ne mettez pas l\'accent sur la première syllabe.' },
    { word: 'Attribute', phonetic: '/əˈtrɪbjuːt/', meaning: 'Attribuer (verbe)', tip: 'Comme verbe : « uh-TRIB-yoot » — l\'accent est sur « TRIB ». Comme nom (attribut) : « A-tri-byoot » — l\'accent est sur « AT ». Attention à cette différence !' },
  ],
}

// ─── b2-l28: Doctor-Patient Talk ────────────────────────────────────────────────────
export const B2_L28: LessonContent = {
  vocab: [
    { english: 'symptom', french: 'symptôme', phonetic: '/ˈsɪmptəm/', example: 'The most common symptom of this condition is persistent fatigue.', exampleTranslation: 'Le symptôme le plus courant de cette affection est une fatigue persistante.' },
    { english: 'referral', french: 'orientation (vers un spécialiste)', phonetic: '/rɪˈfɜːrəl/', example: 'I\'ll give you a referral to a cardiologist for further tests.', exampleTranslation: 'Je vous donnerai une orientation vers un cardiologue pour des examens complémentaires.' },
    { english: 'follow-up', french: 'suivi / consultation de contrôle', phonetic: '/ˈfɒləʊ ʌp/', example: 'We\'ll schedule a follow-up appointment in two weeks to check your progress.', exampleTranslation: 'Nous programmerons une consultation de contrôle dans deux semaines pour vérifier vos progrès.' },
    { english: 'recovery', french: 'guérison / rétablissement', phonetic: '/rɪˈkʌvəri/', example: 'Full recovery is expected within six to eight weeks.', exampleTranslation: 'Une guérison complète est attendue dans six à huit semaines.' },
    { english: 'dosage', french: 'posologie / dosage', phonetic: '/ˈdəʊsɪdʒ/', example: 'Do not exceed the recommended dosage of two tablets per day.', exampleTranslation: 'Ne dépassez pas la posologie recommandée de deux comprimés par jour.' },
  ],
  grammar: {
    title: 'Communiquer au cabinet médical : formules et registre',
    explanation: 'La communication médecin-patient en anglais suit des conventions linguistiques précises que les francophones doivent connaître : (1) Le médecin pose des questions : « What brings you in today? » (Qu\'est-ce qui vous amène aujourd\'hui ?) — plus naturel que « Why are you here? » ; « How long have you been experiencing these symptoms? » (Depuis combien de temps ressentez-vous ces symptômes ?) ; « Does it hurt when I press here? » (Est-ce que ça fait mal quand j\'appuie ici ?). (2) Le patient décrit ses symptômes : « I\'ve been feeling... » (Je me sens...) avec le present perfect continuous ; « The pain comes and goes » (La douleur va et vient) ; « It gets worse when... » (Ça s\'aggrave quand...). (3) Le médecin donne des instructions : « I\'d like you to... » (J\'aimerais que vous...) + base verbale ; « You\'ll need to... » (Vous devrez...) ; « Make sure you... » (Assurez-vous de...). (4) Donner un referral : « I\'m going to refer you to a specialist » (Je vais vous orienter vers un spécialiste) ; « I\'ll put in a referral for you » (Je vais faire une demande d\'orientation pour vous). (5) Parler du dosage : « Take one tablet twice a day with food » (Prenez un comprimé deux fois par jour avec de la nourriture) — PAS « two times per day ».',
    examples: [
      { sentence: 'How long have you been experiencing these symptoms before coming in?', translation: 'Depuis combien de temps ressentez-vous ces symptômes avant de venir ?', isCorrect: true },
      { sentence: 'I\'d like you to have a blood test done before our follow-up appointment.', translation: 'J\'aimerais que vous fassiez une prise de sang avant notre consultation de contrôle.', isCorrect: true },
      { sentence: 'Take the medicine two times per day.', translation: '', isCorrect: false },
      { sentence: 'The pain gets worse when I move my arm, but it comes and goes throughout the day.', translation: 'La douleur s\'aggrave quand je bouge le bras, mais elle va et vient tout au long de la journée.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Take the medicine two times per day.', correct: 'Take the medicine twice a day.', explanation: 'En anglais médical, on dit « twice a day » (deux fois par jour), pas « two times per day ». De même : « three times a day » (trois fois par jour). « Once a day » = une fois par jour.' },
      { wrong: 'I will send you to a specialist.', correct: 'I\'m going to refer you to a specialist.', explanation: 'En contexte médical, on dit « refer someone to a specialist » (orienter quelqu\'un vers un spécialiste), pas « send someone to ». « Send » implique un envoi physique, « refer » est le terme médical approprié.' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Nkomo', role: 'A', text: 'Good afternoon, Monsieur Lambert. What brings you in today?', translation: 'Bon après-midi, Monsieur Lambert. Qu\'est-ce qui vous amène aujourd\'hui ?' },
    { speaker: 'M. Lambert', role: 'B', text: 'I\'ve been having persistent headaches for about three weeks now. The pain gets worse in the evening.', translation: 'J\'ai des maux de tête persistants depuis environ trois semaines maintenant. La douleur s\'aggrave le soir.' },
    { speaker: 'Dr. Nkomo', role: 'A', text: 'I see. Have you experienced any other symptoms — nausea, dizziness, or blurred vision?', translation: 'Je vois. Avez-vous ressenti d\'autres symptômes — nausées, vertiges ou vision floue ?' },
    { speaker: 'M. Lambert', role: 'B', text: 'Some dizziness, yes. I also wake up feeling exhausted, even after a full night\'s sleep.', translation: 'Quelques vertiges, oui. Je me réveille aussi épuisé, même après une nuit complète de sommeil.' },
    { speaker: 'Dr. Nkomo', role: 'A', text: 'I\'d like you to have a blood test and an MRI done. I\'m also going to refer you to a neurologist for a thorough evaluation. The dosage of painkillers you\'re taking may need adjustment.', translation: 'J\'aimerais que vous fassiez une prise de sang et une IRM. Je vais également vous orienter vers un neurologue pour une évaluation approfondie. La posologie des analgésiques que vous prenez pourrait nécessiter un ajustement.' },
    { speaker: 'M. Lambert', role: 'B', text: 'Thank you, Doctor. When should I schedule the follow-up?', translation: 'Merci, Docteur. Quand dois-je programmer la consultation de contrôle ?' },
  ],
  conversationTitle: 'Consultation médicale : maux de tête persistants',
  pronunciation: [
    { word: 'Symptom', phonetic: '/ˈsɪmptəm/', meaning: 'Symptôme', tip: 'L\'accent est sur « SIM » : « SIM-ptum ». Le « p » est prononcé avant le « t ». Ne dites pas « sim-p-tom » en trois syllabes — c\'est deux syllabes.' },
    { word: 'Referral', phonetic: '/rɪˈfɜːrəl/', meaning: 'Orientation (spécialiste)', tip: 'Prononcez « ri-FUR-ul » — l\'accent est sur « FER ». Le « e » = « uh » comme dans « refer ». Ce mot n\'existe pas en français, alors ne le traduisez pas littéralement.' },
    { word: 'Recovery', phonetic: '/rɪˈkʌvəri/', meaning: 'Guérison', tip: 'L\'accent est sur « COV » : « ri-KUV-uh-ri ». Le « o » est ouvert comme dans « come ». Le « ery » final se prononce « uh-ri ».' },
    { word: 'Dosage', phonetic: '/ˈdəʊsɪdʒ/', meaning: 'Posologie', tip: 'Prononcez « DOH-sidj » — l\'accent est sur « DO ». Le « age » final = « idj » comme dans « manage ». Ne dites pas « do-zazh » à la française.' },
  ],
}

// ─── b2-l29: Research Findings ──────────────────────────────────────────────────────
export const B2_L29: LessonContent = {
  vocab: [
    { english: 'placebo', french: 'placebo', phonetic: '/pləˈsiːbəʊ/', example: 'The control group received a placebo instead of the active medication.', exampleTranslation: 'Le groupe de contrôle a reçu un placebo au lieu du médicament actif.' },
    { english: 'efficacy', french: 'efficacité', phonetic: '/ˈefɪkəsi/', example: 'The efficacy of the new treatment was demonstrated in a double-blind study.', exampleTranslation: 'L\'efficacité du nouveau traitement a été démontrée dans une étude en double aveugle.' },
    { english: 'mortality rate', french: 'taux de mortalité', phonetic: '/mɔːˈtæləti reɪt/', example: 'The mortality rate has decreased by 30% since the introduction of the vaccine.', exampleTranslation: 'Le taux de mortalité a diminué de 30 % depuis l\'introduction du vaccin.' },
    { english: 'onset', french: 'apparition / début (d\'une maladie)', phonetic: '/ˈɒnset/', example: 'Early onset of symptoms allows for more effective treatment.', exampleTranslation: 'L\'apparition précoce des symptômes permet un traitement plus efficace.' },
    { english: 'compliance', french: 'observance (thérapeutique)', phonetic: '/kəmˈplaɪəns/', example: 'Patient compliance is essential for the treatment to be effective.', exampleTranslation: 'L\'observance des patients est essentielle pour que le traitement soit efficace.' },
  ],
  grammar: {
    title: 'Décrire des résultats de recherche : données, tendances et preuves',
    explanation: 'Présenter des résultats de recherche médicale exige un vocabulaire et des structures spécifiques : (1) Décrire des données quantitatives : « The study found a 25% reduction in... » (L\'étude a constaté une réduction de 25 % de...) ; « Results showed a significant increase in... » (Les résultats ont montré une augmentation significative de...). ATTENTION : « data » est le pluriel de « datum » — on dit « the data show » (les données montrent), pas « the data shows », bien que ce dernier soit de plus en plus accepté en anglais courant. En contexte académique, préférez le pluriel. (2) Décrire des tendances : « There was a marked improvement in... » (Il y a eu une amélioration marquée de...) ; « A downward trend was observed in... » (Une tendance à la baisse a été observée dans...). (3) Exprimer la certitude et l\'incertitude : « The evidence strongly suggests that... » (Les preuves suggèrent fortement que...) ; « These results are consistent with previous findings » (Ces résultats sont cohérents avec les résultats précédents). (4) Le passif de recherche : « It was found that... » / « It was observed that... » / « It was concluded that... » — le passif est la norme dans la communication scientifique pour maintenir l\'objectivité.',
    examples: [
      { sentence: 'The data show a significant reduction in mortality rates among patients who received the vaccine.', translation: 'Les données montrent une réduction significative des taux de mortalité chez les patients ayant reçu le vaccin.', isCorrect: true },
      { sentence: 'The data shows a significant reduction in mortality rates among patients who received the vaccine.', translation: 'Les données montrent une réduction significative des taux de mortalité chez les patients ayant reçu le vaccin.', isCorrect: true },
      { sentence: 'The study proved that the drug is curing cancer.', translation: '', isCorrect: false },
      { sentence: 'It was concluded that patient compliance improved when side effects were clearly explained.', translation: 'Il a été conclu que l\'observance des patients s\'est améliorée lorsque les effets secondaires étaient clairement expliqués.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The study proved that the drug is curing cancer.', correct: 'The study provided evidence that the drug may be effective in treating certain types of cancer.', explanation: 'En recherche médicale, on évite « prove » (prouver) qui est trop absolu. On ne dit jamais qu\'un médicament « cures » (guérit) le cancer — on dit qu\'il « may be effective in treating » (pourrait être efficace dans le traitement de). La prudence scientifique est de mise.' },
      { wrong: 'The efficacy of the drug was proved by the study.', correct: 'The efficacy of the drug was demonstrated by the study.', explanation: 'On préfère « demonstrate » (démontrer), « establish » (établir) ou « confirm » (confirmer) au lieu de « prove » en contexte scientifique. « Prove » implique une certitude absolue que la science évite.' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Adebayo', role: 'A', text: 'Let\'s look at the latest findings. The data show that the mortality rate dropped by 22% in the treatment group.', translation: 'Regardons les derniers résultats. Les données montrent que le taux de mortalité a chuté de 22 % dans le groupe traité.' },
    { speaker: 'Dr. Lefèvre', role: 'B', text: 'That\'s significant. But what about the placebo group? Was there any improvement there?', translation: 'C\'est significatif. Mais qu\'en est-il du groupe placebo ? Y a-t-il eu une amélioration là-bas ?' },
    { speaker: 'Dr. Adebayo', role: 'A', text: 'Only a 3% reduction, which is within the margin of error. It was observed that early onset of treatment correlates with better outcomes.', translation: 'Seulement une réduction de 3 %, ce qui est dans la marge d\'erreur. Il a été observé que le début précoce du traitement corrèle avec de meilleurs résultats.' },
    { speaker: 'Dr. Lefèvre', role: 'B', text: 'And what about patient compliance? Did most participants complete the full course?', translation: 'Et qu\'en est-il de l\'observance des patients ? La plupart des participants ont-ils suivi le traitement complet ?' },
    { speaker: 'Dr. Adebayo', role: 'A', text: 'Compliance was above 90%, which is excellent. The efficacy of the treatment was consistent across all age groups.', translation: 'L\'observance était supérieure à 90 %, ce qui est excellent. L\'efficacité du traitement était cohérente dans tous les groupes d\'âge.' },
    { speaker: 'Dr. Lefèvre', role: 'B', text: 'These are compelling results. It was concluded that the treatment should move to the next phase of trials, I assume?', translation: 'Ce sont des résultats convaincants. Il a été conclu que le traitement devrait passer à la prochaine phase d\'essais, je présume ?' },
  ],
  conversationTitle: 'Présentation de résultats : essai clinique',
  pronunciation: [
    { word: 'Placebo', phonetic: '/pləˈsiːbəʊ/', meaning: 'Placebo', tip: 'L\'accent est sur « SEE » : « pluh-SEE-boh ». Le « a » est réduit en schwa. Ne prononcez PAS « pla-sé-bo » à la française — l\'accent est sur la deuxième syllabe en anglais.' },
    { word: 'Efficacy', phonetic: '/ˈefɪkəsi/', meaning: 'Efficacité', tip: 'L\'accent est sur « EF » : « EF-ih-kuh-si ». Comparez avec « efficiency » /ɪˈfɪʃənsi/ (efficience) — les deux mots ont des prononciations différentes ! Ne confondez pas ces faux amis.' },
    { word: 'Mortality', phonetic: '/mɔːˈtæləti/', meaning: 'Mortalité', tip: 'L\'accent est sur « TAL » : « mor-TAL-ih-ti ». Le « o » est long comme dans « more ». Les 4 syllabes sont claires. Ne dites pas « mor-ta-li-té » à la française.' },
    { word: 'Onset', phonetic: '/ˈɒnset/', meaning: 'Apparition (d\'une maladie)', tip: 'Prononcez « ON-set » — l\'accent est sur « ON ». Le « o » est ouvert comme dans « hot ». Ce mot n\'a rien à voir avec « offset » — ne confondez pas !' },
  ],
}

// ─── b2-l30: Medical Sounds ────────────────────────────────────────────────────────
export const B2_L30: LessonContent = {
  vocab: [
    { english: 'anaesthesia', french: 'anesthésie', phonetic: '/ˌænɪsˈθiːziə/', example: 'The patient was under general anaesthesia during the procedure.', exampleTranslation: 'Le patient était sous anesthésie générale pendant l\'intervention.' },
    { english: 'pneumonia', french: 'pneumonie', phonetic: '/njuːˈməʊniə/', example: 'She was hospitalised with severe pneumonia last winter.', exampleTranslation: 'Elle a été hospitalisée pour une pneumonie sévère l\'hiver dernier.' },
    { english: 'psychiatric', french: 'psychiatrique', phonetic: '/ˌsaɪkiˈætrɪk/', example: 'He was transferred to the psychiatric wing of the hospital.', exampleTranslation: 'Il a été transféré dans le service psychiatrique de l\'hôpital.' },
    { english: 'pharmaceutical', french: 'pharmaceutique', phonetic: '/ˌfɑːməˈsjuːtɪkl/', example: 'The pharmaceutical company invested billions in research and development.', exampleTranslation: 'L\'entreprise pharmaceutique a investi des milliards dans la recherche et le développement.' },
    { english: 'radiology', french: 'radiologie', phonetic: '/ˌreɪdiˈɒlədʒi/', example: 'The radiology department is located on the second floor of the hospital.', exampleTranslation: 'Le service de radiologie se trouve au deuxième étage de l\'hôpital.' },
  ],
  grammar: {
    title: 'La prononciation médicale : consonnes silencieuses et racines gréco-latines',
    explanation: 'Les termes médicaux anglais sont souvent dérivés du grec et du latin, ce qui crée des pièges phonétiques majeurs pour les francophones : (1) CONSONNES SILENCIEUSES : « Pneumonia » : le « p » initial est MUET — /njuːˈməʊniə/, pas /pnuː.../ ; « Psychiatric » : le « p » initial est MUET — /ˌsaɪkiˈætrɪk/, pas /psi.../ ; « Anaesthesia » : le « a » après « an » est bien prononcé — /ˌænɪsˈθiːziə/. (2) LE SON « PH » : En anglais, « ph » se prononce toujours « f » : « pharmaceutical » = /ˌfɑːmə.../, pas /ˌpɑːmə.../. (3) LE SON « TH » DANS LES TERMES MÉDICAUX : « Anaesthesia » contient « thesia » avec un « th » expiré — langue entre les dents, soufflez. Ne prononcez pas « tézia » ou « dézia ». (4) TERMINAISON « -IATRIC » : Dans « psychiatric » et « geriatric », le « iat » se prononce « i-AT » : /ˌsaɪkiˈætrɪk/ et /ˌdʒeriˈætrɪk/. L\'accent est sur « AT ». (5) TERMINAISON « -OLOGY » : « Radiology », « cardiology », « neurology » — l\'accent est toujours sur « OL » : /ˌreɪdiˈɒlədʒi/. Ces règles s\'appliquent systématiquement à des centaines de termes médicaux.',
    examples: [
      { sentence: 'The patient was diagnosed with pneumonia and immediately started on antibiotics.', translation: 'Le patient a été diagnostiqué avec une pneumonie et a immédiatement commencé un traitement aux antibiotiques.', isCorrect: true },
      { sentence: 'She was referred to the psychiatric department for further evaluation.', translation: 'Elle a été orientée vers le service psychiatrique pour une évaluation approfondie.', isCorrect: true },
      { sentence: 'The pnewmonia was treated successfully with antibiotics.', translation: '', isCorrect: false },
      { sentence: 'The pharmaceutical industry has developed several new treatments for chronic conditions.', translation: 'L\'industrie pharmaceutique a développé plusieurs nouveaux traitements pour les maladies chroniques.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The pnewmonia was treated successfully with antibiotics.', correct: 'Pneumonia was treated successfully with antibiotics.', explanation: 'L\'orthographe est « pneumonia » avec un « p » silencieux. Ne prononcez PAS le « p » : dites « nu-MO-nia », pas « pneu-MO-nia ». L\'orthographe incorrecte « pnewmonia » n\'existe pas.' },
      { wrong: 'She was sent to the si-ki-A-trik department.', correct: 'She was referred to the sai-ki-AT-rik department.', explanation: 'La prononciation correcte de « psychiatric » est /ˌsaɪkiˈætrɪk/ : le « p » est muet, le « ps » se prononce « sai », et l\'accent est sur « AT ». Ne dites pas « si-ki-a-trik ».' },
    ],
  },
  conversation: [
    { speaker: 'Dr. Osei', role: 'A', text: 'We need to consult radiology about the chest X-ray. There\'s a shadow that could indicate pneumonia.', translation: 'Nous devons consulter la radiologie pour la radiographie thoracique. Il y a une ombre qui pourrait indiquer une pneumonie.' },
    { speaker: 'Infirmière Bélanger', role: 'B', text: 'I\'ll arrange the referral right away. Should I also prepare the patient for the anaesthesia consultation?', translation: 'J\'arrangerai l\'orientation tout de suite. Dois-je aussi préparer le patient pour la consultation d\'anesthésie ?' },
    { speaker: 'Dr. Osei', role: 'A', text: 'Yes, please. And if the pneumonia is confirmed, we\'ll need to check the pharmaceutical options — the standard antibiotics may not be suitable given her allergies.', translation: 'Oui, s\'il vous plaît. Et si la pneumonie est confirmée, nous devrons vérifier les options pharmaceutiques — les antibiotiques standard pourraient ne pas convenir compte tenu de ses allergies.' },
    { speaker: 'Infirmière Bélanger', role: 'B', text: 'Understood. I also noticed that the psychiatric assessment hasn\'t been scheduled yet. Should I arrange that?', translation: 'Compris. J\'ai aussi remarqué que l\'évaluation psychiatrique n\'a pas encore été programmée. Dois-je l\'organiser ?' },
    { speaker: 'Dr. Osei', role: 'A', text: 'Not yet — let\'s focus on the physical symptoms first. The onset was only two days ago, so we should prioritise the pneumonia workup.', translation: 'Pas encore — concentrons-nous d\'abord sur les symptômes physiques. L\'apparition ne date que de deux jours, nous devrions prioriser le bilan pour la pneumonie.' },
    { speaker: 'Infirmière Bélanger', role: 'B', text: 'Of course, Doctor. I\'ll update the file and make sure the radiology team is informed.', translation: 'Bien sûr, Docteur. Je mettrai à jour le dossier et m\'assurerai que l\'équipe de radiologie est informée.' },
  ],
  conversationTitle: 'Service hospitalier : coordination des soins',
  pronunciation: [
    { word: 'Anaesthesia', phonetic: '/ˌænɪsˈθiːziə/', meaning: 'Anesthésie', tip: 'L\'accent est sur « THEE » : « an-is-THEE-zhuh ». Le « th » est expiré — langue entre les dents ! En américain, on dit « an-es-THEE-zhuh ». Attention : « anesthetic » (adjectif) = /ˌænɪsˈθetɪk/.' },
    { word: 'Pneumonia', phonetic: '/njuːˈməʊniə/', meaning: 'Pneumonie', tip: 'Le « p » est MUET : prononcez « nu-MO-nia ». L\'accent est sur « MO ». C\'est l\'erreur la plus courante des francophones — ne dites JAMAIS « pneu-mo-nia » !' },
    { word: 'Psychiatric', phonetic: '/ˌsaɪkiˈætrɪk/', meaning: 'Psychiatrique', tip: 'Le « p » est MUET : « sai-ki-AT-rik ». L\'accent est sur « AT ». Comparez : « psychology » = « sai-KOL-o-dji ». Le « ps » initial = toujours « sai ».' },
    { word: 'Pharmaceutical', phonetic: '/ˌfɑːməˈsjuːtɪkl/', meaning: 'Pharmaceutique', tip: 'L\'accent est sur « SU » : « far-muh-SOO-tih-kl ». Le « ph » = « f ». Le « ceu » = « soo » (pas « seu »). Le « al » final = réduit en « ih-kl ». C\'est un mot de 5 syllabes.' },
  ],
}
