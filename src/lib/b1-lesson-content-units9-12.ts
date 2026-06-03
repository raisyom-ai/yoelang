// Lesson content for B1 Intermediate Units 9-12
// YOELANG English learning app for francophone users

import { type LessonContent } from './lesson-content'

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 9: ARTS & ENTERTAINMENT (b1-l41 through b1-l45)
// ════════════════════════════════════════════════════════════════════════════════

export const B1_L41: LessonContent = {
  vocab: [
    { english: 'Exhibition', french: 'Exposition', phonetic: '/ˌeksɪˈbɪʃən/', example: 'The art exhibition was truly impressive.', exampleTranslation: "L'exposition d'art était vraiment impressionnante." },
    { english: 'Performance', french: 'Représentation / Performance', phonetic: '/pərˈfɔːrməns/', example: 'The performance lasted three hours.', exampleTranslation: 'La représentation a duré trois heures.' },
    { english: 'Gallery', french: 'Galerie', phonetic: '/ˈɡæləri/', example: 'We visited a contemporary art gallery.', exampleTranslation: 'Nous avons visité une galerie d\'art contemporain.' },
    { english: 'Sculpture', french: 'Sculpture', phonetic: '/ˈskʌlptʃər/', example: 'The sculpture was made of bronze.', exampleTranslation: 'La sculpture était en bronze.' },
    { english: 'Masterpiece', french: 'Chef-d\'œuvre', phonetic: '/ˈmæstərpiːs/', example: 'This painting is considered a masterpiece.', exampleTranslation: "Ce tableau est considéré comme un chef-d'œuvre." },
  ],
  grammar: {
    title: 'Vocabulaire des arts — Galeries, expositions et performances',
    explanation: 'Le vocabulaire des arts : "Exhibition" = exposition temporaire, "Gallery" = galerie (espace permanent), "Performance" = représentation vivante (théâtre, danse, musique), "Sculpture" = œuvre en trois dimensions, "Masterpiece" = œuvre la plus accomplie d\'un artiste. Collocations : "visit an exhibition" (visiter une exposition), "attend a performance" (assister à une représentation), "display a sculpture" (exposer une sculpture), "create a masterpiece" (créer un chef-d\'œuvre). ATTENTION : "exhibition" se prononce "ek-si-BI-chenne", pas "ex-i-bi-tion" !',
    examples: [
      { sentence: 'We attended a performance at the national theater.', translation: 'Nous avons assisté à une représentation au théâtre national.', isCorrect: true },
      { sentence: 'The gallery displayed many masterpieces.', translation: 'La galerie exposait de nombreux chefs-d\'œuvre.', isCorrect: true },
      { sentence: 'She made an exhibition of her paintings.', translation: '', isCorrect: false },
      { sentence: 'The sculpture was the centerpiece of the exhibition.', translation: "La sculpture était la pièce maîtresse de l'exposition.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She made an exhibition of her paintings.', correct: 'She held an exhibition of her paintings.', explanation: 'On dit "hold an exhibition" (organiser une exposition), pas "make an exhibition". "Make an exhibition of oneself" = se donner en spectacle (négatif).' },
      { wrong: 'We visited an exposition.', correct: 'We visited an exhibition.', explanation: '"Exposition" n\'existe pas dans ce sens en anglais. On dit "exhibition".' },
    ],
  },
  conversation: [
    { speaker: 'Amina', role: 'A', text: 'Have you been to the new exhibition at the art gallery?', translation: "As-tu été à la nouvelle exposition à la galerie d'art ?" },
    { speaker: 'Kofi', role: 'B', text: 'Not yet! I heard there\'s a bronze sculpture that\'s considered a masterpiece.', translation: "Pas encore ! J'ai entendu qu'il y a une sculpture en bronze considérée comme un chef-d'œuvre." },
    { speaker: 'Amina', role: 'A', text: 'Yes! And the performance by the local dance group was amazing too.', translation: "Oui ! Et la représentation du groupe de danse local était incroyable aussi." },
    { speaker: 'Kofi', role: 'B', text: 'I love how exhibitions bring art to everyone. It makes culture accessible.', translation: "J'adore comment les expositions apportent l'art à tous. Ça rend la culture accessible." },
    { speaker: 'Amina', role: 'A', text: 'Definitely. Every gallery should display both classic and contemporary works.', translation: "Définitivement. Chaque galerie devrait exposer des œuvres classiques et contemporaines." },
    { speaker: 'Kofi', role: 'B', text: 'Let\'s go this weekend! I want to see that sculpture for myself.', translation: "Allons-y ce week-end ! Je veux voir cette sculpture par moi-même." },
  ],
  conversationTitle: 'Découvrir les arts',
  pronunciation: [
    { word: 'Exhibition', phonetic: '/ˌeksɪˈbɪʃən/', meaning: 'Exposition', tip: 'L\'accent est sur "BI" : "ek-si-BI-chenne". Pas "ex-i-BI-tion" !' },
    { word: 'Performance', phonetic: '/pərˈfɔːrməns/', meaning: 'Représentation', tip: 'L\'accent est sur "FOR" : "per-FOR-mence".' },
    { word: 'Sculpture', phonetic: '/ˈskʌlptʃər/', meaning: 'Sculpture', tip: 'L\'accent est sur "SCULP" : "SKOLP-tcher". Le "c" est muet avant "t" !' },
    { word: 'Masterpiece', phonetic: '/ˈmæstərpiːs/', meaning: "Chef-d'œuvre", tip: 'L\'accent est sur "MAS" : "MAS-ter-piss".' },
  ],
}

export const B1_L42: LessonContent = {
  vocab: [
    { english: 'Enjoy watching', french: 'Aimer regarder', phonetic: '/ɪnˈdʒɔɪ ˈwɑːtʃɪŋ/', example: 'I enjoy watching documentaries about art.', exampleTranslation: "J'aime regarder des documentaires sur l'art." },
    { english: 'Want to see', french: 'Vouloir voir', phonetic: '/wɑːnt tuː siː/', example: 'I want to see the new film.', exampleTranslation: 'Je veux voir le nouveau film.' },
    { english: 'Keep practicing', french: 'Continuer à pratiquer', phonetic: '/kiːp ˈpræktɪsɪŋ/', example: 'You should keep practicing the piano.', exampleTranslation: 'Tu devrais continuer à pratiquer le piano.' },
    { english: 'Stop talking', french: 'Arrêter de parler', phonetic: '/stɑːp ˈtɔːkɪŋ/', example: 'The performance is starting — stop talking!', exampleTranslation: "La représentation commence — arrête de parler !" },
    { english: 'Remember to buy', french: 'Se rappeler d\'acheter', phonetic: '/rɪˈmembər tuː baɪ/', example: 'Remember to buy tickets for the concert.', exampleTranslation: "Souviens-toi d'acheter des billets pour le concert." },
  ],
  grammar: {
    title: 'Gérondifs et Infinitifs — Enjoy watching vs want to watch',
    explanation: 'Certains verbes sont suivis du GÉRONDIF (-ing), d\'autres de L\'INFINITIF (to + verbe) : GÉRONDIF : enjoy, like, love, hate, keep, stop, finish, suggest, avoid, mind → "I enjoy WATCHING films", "She kept PRACTICING", "Stop TALKING". INFINITIF : want, need, hope, decide, plan, agree, refuse, remember, forget → "I want TO SEE the exhibition", "She decided TO VISIT the gallery". ATTENTION : "stop + -ing" = arrêter de faire qqch → "Stop talking!" (Arrête de parler !). "stop + to + infinitif" = s\'arrêter pour faire qqch → "I stopped to look at the painting" (Je me suis arrêté pour regarder le tableau).',
    examples: [
      { sentence: 'I enjoy watching foreign films.', translation: "J'aime regarder des films étrangers.", isCorrect: true },
      { sentence: 'She wants watching the performance.', translation: '', isCorrect: false },
      { sentence: 'He decided to study art history.', translation: "Il a décidé d'étudier l'histoire de l'art.", isCorrect: true },
      { sentence: 'They kept practicing until the performance was perfect.', translation: 'Ils ont continué à pratiquer jusqu\'à ce que la représentation soit parfaite.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She wants watching the performance.', correct: 'She wants to watch the performance.', explanation: '"Want" est suivi de l\'infinitif : "want TO watch", pas "want watching". Mémorisez : want/need/hope/decide + TO + verbe.' },
      { wrong: 'I enjoy to watch films.', correct: 'I enjoy watching films.', explanation: '"Enjoy" est suivi du gérondif : "enjoy WATCHING", pas "enjoy to watch". Mémorisez : enjoy/keep/stop/finish + -ing.' },
    ],
  },
  conversation: [
    { speaker: 'Youssef', role: 'A', text: 'Do you enjoy watching live performances?', translation: "Aimes-tu regarder des représentations en direct ?" },
    { speaker: 'Aïcha', role: 'B', text: 'I love watching them! I decided to attend a concert next week.', translation: "J'adore les regarder ! J'ai décidé d'assister à un concert la semaine prochaine." },
    { speaker: 'Youssef', role: 'A', text: 'I want to see that exhibition too. I keep planning to go but never find the time.', translation: "Je veux voir cette exposition aussi. Je continue à planifier d'y aller mais je ne trouve jamais le temps." },
    { speaker: 'Aïcha', role: 'B', text: 'You should stop making excuses and just go! Remember to buy tickets in advance though.', translation: "Tu devrais arrêter de trouver des excuses et y aller ! Souviens-toi d'acheter des billets à l'avance cependant." },
    { speaker: 'Youssef', role: 'A', text: 'You\'re right. I enjoy visiting galleries when I actually go.', translation: "Tu as raison. J'aime visiter les galeries quand j'y vais vraiment." },
    { speaker: 'Aïcha', role: 'B', text: 'See? Gerunds and infinitives aren\'t so hard when you practice!', translation: "Tu vois ? Les gérondifs et infinitifs ne sont pas si difficiles quand on pratique !" },
  ],
  conversationTitle: 'Parler de ses goûts artistiques',
  pronunciation: [
    { word: 'Watching', phonetic: '/ˈwɑːtʃɪŋ/', meaning: 'Regarder', tip: 'Prononcez "OUOT-ching" — le "tch" est clair et le "ing" : langue contre le palais.' },
    { word: 'Practicing', phonetic: '/ˈpræktɪsɪŋ/', meaning: 'Pratiquer', tip: 'L\'accent est sur "PRAC" : "PRAC-ti-sing".' },
    { word: 'Remember', phonetic: '/rɪˈmembər/', meaning: 'Se rappeler', tip: 'L\'accent est sur "MEM" : "ri-MEM-ber".' },
    { word: 'Decided', phonetic: '/dɪˈsaɪdɪd/', meaning: 'Décidé', tip: 'L\'accent est sur "CI" : "di-SAÏ-did".' },
  ],
}

export const B1_L43: LessonContent = {
  vocab: [
    { english: 'Captivating', french: 'Captivant(e)', phonetic: '/ˈkæptɪveɪtɪŋ/', example: 'The film was absolutely captivating.', exampleTranslation: 'Le film était absolument captivant.' },
    { english: 'Thought-provoking', french: 'Qui fait réfléchir', phonetic: '/ˈθɔːt prəvoʊkɪŋ/', example: 'It was a thought-provoking documentary.', exampleTranslation: "C'était un documentaire qui fait réfléchir." },
    { english: 'Overrated', french: 'Surcoté(e)', phonetic: '/ˌoʊvərˈreɪtɪd/', example: 'I think that film is overrated.', exampleTranslation: "Je pense que ce film est surcoté." },
    { english: 'Underrated', french: 'Sous-estimé(e)', phonetic: '/ˌʌndərˈreɪtɪd/', example: 'This artist is truly underrated.', exampleTranslation: "Cet artiste est vraiment sous-estimé." },
    { english: 'Impressive', french: 'Impressionnant(e)', phonetic: '/ɪmˈpresɪv/', example: 'The special effects were impressive.', exampleTranslation: 'Les effets spéciaux étaient impressionnants.' },
  ],
  grammar: {
    title: 'Critiquer l\'art et le cinéma — Exprimer son opinion avec nuance',
    explanation: 'Pour critiquer l\'art avec nuance : POSITIF : "captivating" (captivant), "thought-provoking" (qui fait réfléchir), "impressive" (impressionnant), "moving" (touchant), "stunning" (époustouflant). NÉGATIF : "overrated" (surcoté), "disappointing" (décevant), "predictable" (prévisible), "dull" (ennuyeux). NUANCÉ : "It had its moments, but..." (Il avait ses moments, mais...), "While the acting was excellent, the plot was..." (Bien que le jeu d\'acteur ait été excellent, l\'intrigue était...). Pour donner son avis : "In my view..." (À mon avis...), "I found it..." (J\'ai trouvé ça...), "What struck me was..." (Ce qui m\'a frappé, c\'est...).',
    examples: [
      { sentence: 'I found the documentary thought-provoking and moving.', translation: "J'ai trouvé le documentaire réfléchi et touchant.", isCorrect: true },
      { sentence: 'The film was bored.', translation: '', isCorrect: false },
      { sentence: 'While the performance was impressive, the story was predictable.', translation: "Bien que la représentation ait été impressionnante, l'histoire était prévisible.", isCorrect: true },
      { sentence: 'In my view, that artist is underrated.', translation: "À mon avis, cet artiste est sous-estimé.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The film was bored.', correct: 'The film was boring.', explanation: '"Boring" = qui ennuie (le film). "Bored" = qui s\'ennuie (le spectateur). "The film was boring" mais "I was bored".' },
      { wrong: 'I think the film is over-rating.', correct: 'I think the film is overrated.', explanation: '"Overrated" est un adjectif (participe passé), pas une forme en -ing. De même : "underrated", pas "underrating".' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'What did you think of the film?', translation: "Qu'as-tu pensé du film ?" },
    { speaker: 'Moussa', role: 'B', text: 'I found it captivating! The acting was impressive and the story was thought-provoking.', translation: "Je l'ai trouvé captivant ! Le jeu d'acteur était impressionnant et l'histoire faisait réfléchir." },
    { speaker: 'Fatou', role: 'A', text: 'Really? I thought it was overrated. The plot was predictable.', translation: "Vraiment ? Je l'ai trouvé surcoté. L'intrigue était prévisible." },
    { speaker: 'Moussa', role: 'B', text: 'I see your point, but the visual effects were stunning. In my view, it deserves the praise.', translation: "Je comprends ton point de vue, mais les effets visuels étaient époustouflants. À mon avis, il mérite les éloges." },
    { speaker: 'Fatou', role: 'A', text: 'What struck me was the music — it was moving. But overall, I found it disappointing.', translation: "Ce qui m'a frappé, c'est la musique — elle était touchante. Mais globalement, j'ai trouvé ça décevant." },
    { speaker: 'Moussa', role: 'B', text: 'Fair enough! Art is subjective. We can disagree and still appreciate different aspects.', translation: "C'est juste ! L'art est subjectif. Nous pouvons être en désaccord et encore apprécier différents aspects." },
  ],
  conversationTitle: 'Critiquer un film ou une œuvre d\'art',
  pronunciation: [
    { word: 'Captivating', phonetic: '/ˈkæptɪveɪtɪŋ/', meaning: 'Captivant', tip: 'L\'accent est sur "CAP" : "CAP-ti-véï-ting".' },
    { word: 'Overrated', phonetic: '/ˌoʊvərˈreɪtɪd/', meaning: 'Surcoté', tip: 'L\'accent est sur "RAT" : "o-ver-RÉÿ-tid".' },
    { word: 'Impressive', phonetic: '/ɪmˈpresɪv/', meaning: 'Impressionnant', tip: 'L\'accent est sur "PRESS" : "im-PRES-siv".' },
    { word: 'Thought-provoking', phonetic: '/ˈθɔːt prəvoʊkɪŋ/', meaning: 'Qui fait réfléchir', tip: 'Le "th" est expiré : "THOT-pro-vo-king".' },
  ],
}

export const B1_L44: LessonContent = {
  vocab: [
    { english: 'Absolutely', french: 'Absolument', phonetic: '/ˌæbsəˈluːtli/', example: 'The performance was absolutely stunning.', exampleTranslation: 'La représentation était absolument époustouflante.' },
    { english: 'Extremely', french: 'Extrêmement', phonetic: '/ɪkˈstriːmli/', example: 'The film was extremely long.', exampleTranslation: 'Le film était extrêmement long.' },
    { english: 'Quite', french: 'Assez / Tout à fait', phonetic: '/kwaɪt/', example: 'The exhibition was quite interesting.', exampleTranslation: "L'exposition était assez intéressante." },
    { english: 'Fairly', french: 'Plutôt / Assez', phonetic: '/ˈferli/', example: 'The music was fairly good.', exampleTranslation: 'La musique était plutôt bonne.' },
    { english: 'Slightly', french: 'Légèrement', phonetic: '/ˈslaɪtli/', example: 'I was slightly disappointed.', exampleTranslation: "J'étais légèrement déçu(e)." },
  ],
  grammar: {
    title: 'Les Adverbes de Degré — Absolutely, extremely, quite, fairly',
    explanation: 'Les adverbes de degré modifient l\'intensité d\'un adjectif (du plus fort au plus faible) : "Absolutely" (100%) → "absolutely stunning" (époustouflant à 100%). "Extremely" (90%) → "extremely talented" (extrêmement talentueux). "Very" (80%) → "very good" (très bon). "Quite" (60-70%) → "quite interesting" (assez intéressant — en anglais britannique = assez, en américain = tout à fait). "Fairly" (50%) → "fairly good" (plutôt bon). "Slightly" (20%) → "slightly disappointed" (légèrement déçu). ATTENTION : "absolutely" s\'utilise avec des adjectifs EXTRÊMES : "absolutely amazing" (pas "absolutely good"). "Very" avec des adjectifs ORDINAIRES : "very good" (pas "absolutely good").',
    examples: [
      { sentence: 'The performance was absolutely breathtaking.', translation: 'La représentation était absolument à couper le souffle.', isCorrect: true },
      { sentence: 'The film was absolutely good.', translation: '', isCorrect: false },
      { sentence: 'I was slightly disappointed by the ending.', translation: "J'étais légèrement déçu(e) par la fin.", isCorrect: true },
      { sentence: 'The exhibition was fairly interesting but quite short.', translation: "L'exposition était assez intéressante mais plutôt courte.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The film was absolutely good.', correct: 'The film was very good.', explanation: '"Absolutely" s\'utilise avec des adjectifs EXTRÊMES (amazing, stunning, perfect). Avec "good", on utilise "very" : "very good".' },
      { wrong: 'I am fairly exhausted.', correct: 'I am absolutely exhausted. / I am extremely exhausted.', explanation: '"Exhausted" est déjà un adjectif extrême. On utilise "absolutely" ou "extremely", pas "fairly" (qui réduirait l\'intensité).' },
    ],
  },
  conversation: [
    { speaker: 'Idrissa', role: 'A', text: 'How was the concert last night?', translation: 'Comment était le concert hier soir ?' },
    { speaker: 'Mariama', role: 'B', text: 'It was absolutely amazing! The singer was extremely talented.', translation: "C'était absolument incroyable ! Le chanteur était extrêmement talentueux." },
    { speaker: 'Idrissa', role: 'A', text: 'I went to a play yesterday. It was quite good but fairly long.', translation: "Je suis allé à une pièce hier. C'était assez bon mais plutôt long." },
    { speaker: 'Mariama', role: 'B', text: 'Was it slightly boring or just long?', translation: "C'était légèrement ennuyeux ou juste long ?" },
    { speaker: 'Idrissa', role: 'A', text: 'Only slightly boring in the middle. The acting was very impressive overall.', translation: "Seulement légèrement ennuyeux au milieu. Le jeu d'acteur était très impressionnant dans l'ensemble." },
    { speaker: 'Mariama', role: 'B', text: 'Adverbs of degree really help express opinions precisely!', translation: 'Les adverbes de degré aident vraiment à exprimer les opinions avec précision !' },
  ],
  conversationTitle: 'Nuancer ses opinions artistiques',
  pronunciation: [
    { word: 'Absolutely', phonetic: '/ˌæbsəˈluːtli/', meaning: 'Absolument', tip: 'L\'accent est sur "LU" : "ab-se-LOUT-li".' },
    { word: 'Extremely', phonetic: '/ɪkˈstriːmli/', meaning: 'Extrêmement', tip: 'L\'accent est sur "STRI" : "ik-STRI-mli".' },
    { word: 'Quite', phonetic: '/kwaɪt/', meaning: 'Assez', tip: 'Prononcez "KOUAÏT" — le "qu" = "kw" et le "i" est long.' },
    { word: 'Slightly', phonetic: '/ˈslaɪtli/', meaning: 'Légèrement', tip: 'Prononcez "SLAÏT-li" — le "i" est long et l\'accent est sur "SLIGHT".' },
  ],
}

export const B1_L45: LessonContent = {
  vocab: [
    { english: 'Renaissance', french: 'Renaissance', phonetic: '/ˈrenɪsɑːns/', example: 'Renaissance art is displayed in many European museums.', exampleTranslation: "L'art de la Renaissance est exposé dans de nombreux musées européens." },
    { english: 'Contemporary', french: 'Contemporain(e)', phonetic: '/kənˈtempəreri/', example: 'Contemporary art challenges traditional boundaries.', exampleTranslation: "L'art contemporain remet en question les frontières traditionnelles." },
    { english: 'Choreography', french: 'Chorégraphie', phonetic: '/ˌkɔːriˈɑːɡrəfi/', example: 'The choreography was innovative and beautiful.', exampleTranslation: 'La chorégraphie était innovante et belle.' },
    { english: 'Improvisation', french: 'Improvisation', phonetic: '/ɪmˌprɒvɪˈzeɪʃən/', example: 'Jazz is known for improvisation.', exampleTranslation: "Le jazz est connu pour l'improvisation." },
  ],
  grammar: {
    title: 'Prononciation des termes artistiques — Mots d\'origine étrangère',
    explanation: 'Les termes artistiques sont souvent empruntés d\'autres langues et leur prononciation diffère : "Renaissance" = "RE-ni-sans" (accent sur "RE", pas "re-nes-SANSCE"), "Contemporary" = "ken-TEM-po-re-ri" (accent sur "TEM"), "Choreography" = "ko-ri-A-gra-fi" (accent sur "A"), "Improvisation" = "im-pro-vi-ZÉÿ-chenne" (accent sur "ZA"). Ces mots ont des accents très différents de leur équivalent français !',
    examples: [
      { sentence: 'The RE-ni-sans period produced many masterpieces.', translation: 'La période de la Renaissance a produit de nombreux chefs-d\'œuvre.', isCorrect: true },
      { sentence: 'The re-nes-SANSCE period produced many masterpieces.', translation: '', isCorrect: false },
      { sentence: 'Contemporary art challenges our perceptions.', translation: "L'art contemporain met au défi nos perceptions.", isCorrect: true },
      { sentence: 'The choreography was absolutely stunning.', translation: 'La chorégraphie était absolument époustouflante.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The re-nes-SANSCE period produced many masterpieces.', correct: 'The RE-ni-sans period produced many masterpieces.', explanation: '"Renaissance" en anglais a l\'accent sur la PREMIÈRE syllabe : "RE-ni-sans", pas "re-nes-SANSCE" à la française !' },
      { wrong: 'The con-tem-POR-a-ry gallery was closed.', correct: 'The ken-TEM-po-re-ri gallery was closed.', explanation: '"Contemporary" a l\'accent sur "TEM" : "ken-TEM-po-re-ri", pas "con-tem-POR-a-ry" !' },
    ],
  },
  conversation: [
    { speaker: 'Oumar', role: 'A', text: 'I love Renaissance art. The museums in Florence are incredible.', translation: "J'adore l'art de la Renaissance. Les musées à Florence sont incroyables." },
    { speaker: 'Aïcha', role: 'B', text: 'I prefer contemporary art. The improvisation in jazz performances is amazing.', translation: "Je préfère l'art contemporain. L'improvisation dans les représentations de jazz est incroyable." },
    { speaker: 'Oumar', role: 'A', text: 'What about dance? The choreography in modern dance is very impressive.', translation: "Et la danse ? La chorégraphie dans la danse moderne est très impressionnante." },
    { speaker: 'Aïcha', role: 'B', text: 'Absolutely! These art words can be tricky to pronounce though.', translation: "Absolument ! Ces mots d'art peuvent être délicats à prononcer cependant." },
    { speaker: 'Oumar', role: 'A', text: 'True! "Renaissance" is "RE-ni-sans", not "re-nes-SANSCE"!', translation: "Vrai ! « Renaissance » c'est « RE-ni-sans », pas « re-nes-SANSCE » !" },
    { speaker: 'Aïcha', role: 'B', text: 'And "choreography" is "ko-ri-A-gra-fi", not "cho-ré-o-gra-phi"!', translation: "Et « choreography » c'est « ko-ri-A-gra-fi », pas « cho-ré-o-gra-phi » !" },
  ],
  conversationTitle: 'Prononciation des termes artistiques',
  pronunciation: [
    { word: 'Renaissance', phonetic: '/ˈrenɪsɑːns/', meaning: 'Renaissance', tip: 'L\'accent est sur "RE" : "RE-ni-sans". Pas "re-nes-SANSCE" !' },
    { word: 'Contemporary', phonetic: '/kənˈtempəreri/', meaning: 'Contemporain', tip: 'L\'accent est sur "TEM" : "ken-TEM-po-re-ri".' },
    { word: 'Choreography', phonetic: '/ˌkɔːriˈɑːɡrəfi/', meaning: 'Chorégraphie', tip: 'L\'accent est sur "A" : "ko-ri-A-gra-fi".' },
    { word: 'Improvisation', phonetic: '/ɪmˌprɒvɪˈzeɪʃən/', meaning: 'Improvisation', tip: 'L\'accent est sur "ZA" : "im-pro-vi-ZÉÿ-chenne".' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 10: SCIENCE & TECHNOLOGY (b1-l46 through b1-l50)
// ════════════════════════════════════════════════════════════════════════════════

export const B1_L46: LessonContent = {
  vocab: [
    { english: 'Research', french: 'Recherche', phonetic: '/ˈriːsɜːrtʃ/', example: 'The research was published in a scientific journal.', exampleTranslation: 'La recherche a été publiée dans un journal scientifique.' },
    { english: 'Experiment', french: 'Expérience / Expérience (scientifique)', phonetic: '/ɪkˈsperɪment/', example: 'The experiment confirmed the hypothesis.', exampleTranslation: "L'expérience a confirmé l'hypothèse." },
    { english: 'Hypothesis', french: 'Hypothèse', phonetic: '/haɪˈpɑːθəsɪs/', example: 'Scientists test their hypotheses through experiments.', exampleTranslation: "Les scientifiques testent leurs hypothèses par des expériences." },
    { english: 'Data', french: 'Données', phonetic: '/ˈdeɪtə/', example: 'The data supports the conclusion.', exampleTranslation: 'Les données soutiennent la conclusion.' },
    { english: 'Innovation', french: 'Innovation', phonetic: '/ˌɪnəˈveɪʃən/', example: 'Technological innovation drives progress.', exampleTranslation: "L'innovation technologique stimule le progrès." },
  ],
  grammar: {
    title: 'Vocabulaire scientifique — Recherche, expériences et données',
    explanation: 'Le vocabulaire scientifique : "Research" = recherche (indénombrable : "do research", pas "a research"), "Experiment" = expérience scientifique (dénombrable : "an experiment"), "Hypothesis" = hypothèse (pluriel : "hypotheses"), "Data" = données (collectif singulier en anglais : "the data IS" ou "the data ARE"), "Innovation" = innovation. Collocations : "conduct research" (mener une recherche), "perform an experiment" (réaliser une expérience), "test a hypothesis" (tester une hypothèse), "collect data" (collecter des données), "drive innovation" (stimuler l\'innovation).',
    examples: [
      { sentence: 'The scientists conducted research and collected data.', translation: 'Les scientifiques ont mené une recherche et collecté des données.', isCorrect: true },
      { sentence: 'She made a research on climate change.', translation: '', isCorrect: false },
      { sentence: 'The experiment confirmed the hypothesis.', translation: "L'expérience a confirmé l'hypothèse.", isCorrect: true },
      { sentence: 'Innovation in technology has transformed our lives.', translation: "L'innovation dans la technologie a transformé nos vies.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'She made a research on climate change.', correct: 'She conducted research on climate change.', explanation: '"Research" est indénombrable : on dit "conduct research" (pas "make a research"). Pas d\'article "a" devant "research" !' },
      { wrong: 'The datas show that...', correct: 'The data show that... / The data shows that...', explanation: '"Data" est déjà au pluriel en latin, mais en anglais moderne il peut être singulier ou pluriel. On ne dit JAMAIS "datas".' },
    ],
  },
  conversation: [
    { speaker: 'Kofi', role: 'A', text: 'Have you read about the new research on artificial intelligence?', translation: "As-tu lu sur la nouvelle recherche sur l'intelligence artificielle ?" },
    { speaker: 'Amina', role: 'B', text: 'Yes! The experiment they conducted was groundbreaking. The data is impressive.', translation: "Oui ! L'expérience qu'ils ont menée était révolutionnaire. Les données sont impressionnantes." },
    { speaker: 'Kofi', role: 'A', text: 'Their hypothesis was that AI could learn faster than expected.', translation: "Leur hypothèse était que l'IA pourrait apprendre plus vite que prévu." },
    { speaker: 'Amina', role: 'B', text: 'And the experiment confirmed it! This kind of innovation changes everything.', translation: "Et l'expérience l'a confirmé ! Ce genre d'innovation change tout." },
    { speaker: 'Kofi', role: 'A', text: 'I\'d love to do research in this field one day.', translation: "J'adorerais faire de la recherche dans ce domaine un jour." },
    { speaker: 'Amina', role: 'B', text: 'You should! Science needs passionate researchers like you.', translation: "Tu devrais ! La science a besoin de chercheurs passionnés comme toi." },
  ],
  conversationTitle: 'Discuter de la recherche scientifique',
  pronunciation: [
    { word: 'Research', phonetic: '/ˈriːsɜːrtʃ/', meaning: 'Recherche', tip: 'L\'accent est sur "RE" : "RI-ser-tch". Pas "re-SCERCH" !' },
    { word: 'Experiment', phonetic: '/ɪkˈsperɪment/', meaning: 'Expérience', tip: 'L\'accent est sur "PER" : "ik-SPE-ri-ment".' },
    { word: 'Hypothesis', phonetic: '/haɪˈpɑːθəsɪs/', meaning: 'Hypothèse', tip: 'L\'accent est sur "PO" : "haï-PO-the-sis". Le "th" est expiré !' },
    { word: 'Innovation', phonetic: '/ˌɪnəˈveɪʃən/', meaning: 'Innovation', tip: 'L\'accent est sur "VA" : "i-ne-VÉÿ-chenne".' },
  ],
}

export const B1_L47: LessonContent = {
  vocab: [
    { english: 'Will have discovered', french: 'Aura découvert', phonetic: '/wɪl hæv dɪˈskʌvərd/', example: 'By 2050, scientists will have discovered new treatments.', exampleTranslation: "D'ici 2050, les scientifiques auront découvert de nouveaux traitements." },
    { english: 'Will have developed', french: 'Aura développé', phonetic: '/wɪl hæv dɪˈveləpt/', example: 'They will have developed new technologies by then.', exampleTranslation: "Ils auront développé de nouvelles technologies d'ici là." },
    { english: 'Will have changed', french: 'Aura changé', phonetic: '/wɪl hæv tʃeɪndʒd/', example: 'The world will have changed dramatically by 2100.', exampleTranslation: "Le monde aura changé dramatiquement d'ici 2100." },
    { english: 'Will have solved', french: 'Aura résolu', phonetic: '/wɪl hæv sɑːlvd/', example: 'We will have solved many problems by then.', exampleTranslation: "Nous aurons résolu beaucoup de problèmes d'ici là." },
    { english: 'Will have become', french: 'Seront devenus', phonetic: '/wɪl hæv bɪˈkʌm/', example: 'Electric cars will have become the norm.', exampleTranslation: "Les voitures électriques seront devenues la norme." },
  ],
  grammar: {
    title: 'Le Future Perfect — By 2030, scientists will have discovered',
    explanation: 'Le Future Perfect exprime une action qui sera terminée avant un moment précis dans l\'avenir : sujet + WILL HAVE + participe passé. "By 2030, scientists WILL HAVE discovered new treatments" (D\'ici 2030, les scientifiques auront découvert de nouveaux traitements). Marqueurs de temps : "by 2030" (d\'ici 2030), "by next year" (d\'ici l\'année prochaine), "by the time..." (au moment où...). Négatif : "will NOT have discovered". Question : "Will they have discovered...?". ATTENTION : "by" + moment futur = Future Perfect. "By" + moment passé = Past Perfect.',
    examples: [
      { sentence: 'By 2050, scientists will have developed a cure for many diseases.', translation: "D'ici 2050, les scientifiques auront développé un remède pour beaucoup de maladies.", isCorrect: true },
      { sentence: 'By next year, they will discovered the solution.', translation: '', isCorrect: false },
      { sentence: 'Will technology have changed our lives by 2040?', translation: 'La technologie aura-t-elle changé nos vies d\'ici 2040 ?', isCorrect: true },
      { sentence: 'By then, electric cars will have become affordable.', translation: "D'ici là, les voitures électriques seront devenues abordables.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'By next year, they will discovered the solution.', correct: 'By next year, they will have discovered the solution.', explanation: 'Le Future Perfect nécessite "will HAVE + participe passé" : "will have discovered", pas "will discovered".' },
      { wrong: 'By 2030, we solved the problem.', correct: 'By 2030, we will have solved the problem.', explanation: 'Avec "by" + moment futur, on utilise le Future Perfect ("will have solved"), pas le Past Simple ("solved").' },
    ],
  },
  conversation: [
    { speaker: 'Fatou', role: 'A', text: 'What do you think the world will have become by 2050?', translation: "Que penses-tu que le monde sera devenu d'ici 2050 ?" },
    { speaker: 'Youssef', role: 'B', text: 'I think scientists will have discovered cures for many diseases. Technology will have changed everything.', translation: "Je pense que les scientifiques auront découvert des remèdes pour beaucoup de maladies. La technologie aura tout changé." },
    { speaker: 'Fatou', role: 'A', text: 'Will they have developed flying cars by then?', translation: "Auront-ils développé des voitures volantes d'ici là ?" },
    { speaker: 'Youssef', role: 'B', text: 'Maybe! We will have solved many energy problems for sure. Renewable energy will have become the main source.', translation: "Peut-être ! Nous aurons résolu beaucoup de problèmes énergétiques certainement. L'énergie renouvelable sera devenue la source principale." },
    { speaker: 'Fatou', role: 'A', text: 'By the time our children grow up, education will have changed completely.', translation: "Au moment où nos enfants grandiront, l'éducation aura complètement changé." },
    { speaker: 'Youssef', role: 'B', text: 'Absolutely. The future perfect — actions completed before a future moment!', translation: "Absolument. Le future perfect — des actions terminées avant un moment futur !" },
  ],
  conversationTitle: 'Prédictions pour l\'avenir',
  pronunciation: [
    { word: 'Discovered', phonetic: '/dɪˈskʌvərd/', meaning: 'Découvert', tip: 'Prononcez "di-SKEU-verd" — l\'accent est sur "COV".' },
    { word: 'Developed', phonetic: '/dɪˈveləpt/', meaning: 'Développé', tip: 'Prononcez "di-VEL-opt" — l\'accent est sur "VEL" et le "-ed" = "t".' },
    { word: 'Dramatically', phonetic: '/drəˈmætɪkli/', meaning: 'Dramatiquement', tip: 'L\'accent est sur "MA" : "dre-MA-ti-kli".' },
    { word: 'Affordable', phonetic: '/əˈfɔːrdəbl/', meaning: 'Abordable', tip: 'L\'accent est sur "FOR" : "e-FOR-da-bl".' },
  ],
}

export const B1_L48: LessonContent = {
  vocab: [
    { english: 'Artificial intelligence', french: 'Intelligence artificielle', phonetic: '/ˌɑːrtɪˈfɪʃəl ɪnˈtelɪdʒəns/', example: 'Artificial intelligence is transforming many industries.', exampleTranslation: "L'intelligence artificielle transforme de nombreuses industries." },
    { english: 'Automation', french: 'Automatisation', phonetic: '/ˌɔːtəˈmeɪʃən/', example: 'Automation could replace many jobs.', exampleTranslation: "L'automatisation pourrait remplacer beaucoup d'emplois." },
    { english: 'Cybersecurity', french: 'Cybersécurité', phonetic: '/ˌsaɪbərˈsɪkjʊrəti/', example: 'Cybersecurity is increasingly important.', exampleTranslation: 'La cybersécurité est de plus en plus importante.' },
    { english: 'Virtual reality', french: 'Réalité virtuelle', phonetic: '/ˈvɜːrtʃuəl riˈæləti/', example: 'Virtual reality is used in education and gaming.', exampleTranslation: 'La réalité virtuelle est utilisée dans l\'éducation et les jeux.' },
    { english: 'Breakthrough', french: 'Percée / Avancée', phonetic: '/ˈbreɪkθruː/', example: 'The breakthrough in quantum computing was exciting.', exampleTranslation: "La percée dans l'informatique quantique était passionnante." },
  ],
  grammar: {
    title: 'Discuter de la technologie — Langage de l\'impact technologique',
    explanation: 'Pour discuter de l\'impact technologique : "is transforming" (est en train de transformer), "could replace" (pourrait remplacer), "has revolutionized" (a révolutionné), "will enable" (permettra). Expressions utiles : "a double-edged sword" (une arme à double tranchant), "the pros and cons" (les pour et les contre), "on the one hand... on the other hand..." (d\'un côté... de l\'autre côté...). Pour parler des avancées : "a breakthrough" (une percée), "cutting-edge technology" (technologie de pointe), "state-of-the-art" (à la pointe).',
    examples: [
      { sentence: 'Artificial intelligence is transforming how we work and live.', translation: "L'intelligence artificielle transforme comment nous travaillons et vivons.", isCorrect: true },
      { sentence: 'Technology have revolutionized communication.', translation: '', isCorrect: false },
      { sentence: 'Automation could replace some jobs, but it will also create new ones.', translation: "L'automatisation pourrait remplacer certains emplois, mais elle créera aussi de nouveaux.", isCorrect: true },
      { sentence: 'The breakthrough in medicine was a game-changer.', translation: "La percée en médecine a été un tournant.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'Technology have revolutionized communication.', correct: 'Technology has revolutionized communication.', explanation: '"Technology" est singulier : "has" (pas "have"). "Have" est pour les sujets pluriels.' },
      { wrong: 'AI is a double-edge sword.', correct: 'AI is a double-edged sword.', explanation: 'L\'expression est "double-EDGED sword" (épée à double tranchant), pas "double-edge".' },
    ],
  },
  conversation: [
    { speaker: 'Moussa', role: 'A', text: 'What do you think about artificial intelligence?', translation: "Que penses-tu de l'intelligence artificielle ?" },
    { speaker: 'Aïcha', role: 'B', text: 'It\'s a double-edged sword. On the one hand, AI could revolutionize medicine. On the other hand, automation might replace jobs.', translation: "C'est une arme à double tranchant. D'un côté, l'IA pourrait révolutionner la médecine. De l'autre, l'automatisation pourrait remplacer des emplois." },
    { speaker: 'Moussa', role: 'A', text: 'True. But cybersecurity is also a major concern with new technology.', translation: "Vrai. Mais la cybersécurité est aussi une préoccupation majeure avec la nouvelle technologie." },
    { speaker: 'Aïcha', role: 'B', text: 'Absolutely. Have you tried virtual reality? It\'s cutting-edge technology.', translation: "Absolument. As-tu essayé la réalité virtuelle ? C'est une technologie de pointe." },
    { speaker: 'Moussa', role: 'A', text: 'Yes! The latest breakthroughs in VR are amazing. It has so many applications.', translation: "Oui ! Les dernières percées en RV sont incroyables. Ça a tellement d'applications." },
    { speaker: 'Aïcha', role: 'B', text: 'Technology is evolving faster than ever. We need to adapt while staying cautious.', translation: "La technologie évolue plus vite que jamais. Nous devons nous adapter tout en restant prudents." },
  ],
  conversationTitle: 'L\'impact de la technologie sur la société',
  pronunciation: [
    { word: 'Automation', phonetic: '/ˌɔːtəˈmeɪʃən/', meaning: 'Automatisation', tip: 'L\'accent est sur "MA" : "o-te-MÉÿ-chenne".' },
    { word: 'Cybersecurity', phonetic: '/ˌsaɪbərˈsɪkjʊrəti/', meaning: 'Cybersécurité', tip: 'L\'accent est sur "CU" : "SAÏ-ber-si-KIOU-re-ti".' },
    { word: 'Breakthrough', phonetic: '/ˈbreɪkθruː/', meaning: 'Percée', tip: 'Prononcez "BRÉÏK-throu" — le "th" est expiré et l\'accent est sur "BREAK".' },
    { word: 'Virtual', phonetic: '/ˈvɜːrtʃuəl/', meaning: 'Virtuel(le)', tip: 'Prononcez "UER-tchou-el" — le "ch" = "tch" et l\'accent est sur "TUAL" est réduit.' },
  ],
}

export const B1_L49: LessonContent = {
  vocab: [
    { english: 'Have something done', french: 'Faire faire quelque chose', phonetic: '/hæv ˈsʌmθɪŋ dʌn/', example: 'I had my computer repaired.', exampleTranslation: "J'ai fait réparer mon ordinateur." },
    { english: 'Get something fixed', french: 'Faire réparer quelque chose', phonetic: '/ɡet ˈsʌmθɪŋ fɪkst/', example: 'I need to get my phone fixed.', exampleTranslation: "Je dois faire réparer mon téléphone." },
    { english: 'Have something installed', french: 'Faire installer quelque chose', phonetic: '/hæv ˈsʌmθɪŋ ɪnˈstɔːld/', example: 'We had new software installed.', exampleTranslation: "Nous avons fait installer un nouveau logiciel." },
    { english: 'Get something checked', french: 'Faire vérifier quelque chose', phonetic: '/ɡet ˈsʌmθɪŋ tʃekt/', example: 'You should get your laptop checked.', exampleTranslation: "Tu devrais faire vérifier ton ordinateur portable." },
    { english: 'Have something delivered', french: 'Faire livrer quelque chose', phonetic: '/hæv ˈsʌmθɪŋ dɪˈlɪvərd/', example: 'I had the equipment delivered to the lab.', exampleTranslation: "J'ai fait livrer l'équipement au laboratoire." },
  ],
  grammar: {
    title: 'Le Causatif — Have something done / Get something fixed',
    explanation: 'Le causatif exprime qu\'on fait faire quelque chose par quelqu\'un d\'autre : HAVE/GET + objet + participe passé. "I had my computer REPAIRED" = J\'ai fait réparer mon ordinateur (par un technicien). "I got my phone FIXED" = J\'ai fait réparer mon téléphone. "We had new software INSTALLED" = Nous avons fait installer un nouveau logiciel. ATTENTION : "I repaired my computer" = j\'ai réparé moi-même. "I HAD my computer repaired" = j\'ai fait réparer par quelqu\'un d\'autre. "Get" est plus informel que "have".',
    examples: [
      { sentence: 'I had my computer repaired at the tech shop.', translation: "J'ai fait réparer mon ordinateur au magasin d'informatique.", isCorrect: true },
      { sentence: 'I had repaired my computer.', translation: '', isCorrect: false },
      { sentence: 'You should get your laptop checked by a professional.', translation: 'Tu devrais faire vérifier ton ordinateur portable par un professionnel.', isCorrect: true },
      { sentence: 'We had the new equipment delivered to the office.', translation: "Nous avons fait livrer le nouvel équipement au bureau.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I had repaired my computer.', correct: 'I had my computer repaired.', explanation: 'Le causatif = have + OBJET + participe passé : "had my COMPUTER repaired" (pas "had repaired my computer"). L\'objet vient AVANT le participe passé.' },
      { wrong: 'I had my computer to repair.', correct: 'I had my computer repaired.', explanation: 'Le causatif utilise le PARTICIPE PASSÉ : "repaired" (pas "to repair"). Pas d\'infinitif !' },
    ],
  },
  conversation: [
    { speaker: 'Mariama', role: 'A', text: 'My computer isn\'t working properly. What should I do?', translation: "Mon ordinateur ne fonctionne pas correctement. Que dois-je faire ?" },
    { speaker: 'Oumar', role: 'B', text: 'You should get it checked by a technician. I had mine repaired last week.', translation: "Tu devrais le faire vérifier par un technicien. J'ai fait réparer le mien la semaine dernière." },
    { speaker: 'Mariama', role: 'A', text: 'Did you have it fixed at the shop?', translation: "L'as-tu fait réparer au magasin ?" },
    { speaker: 'Oumar', role: 'B', text: 'Yes, and I also had new software installed. It works perfectly now!', translation: "Oui, et j'ai aussi fait installer un nouveau logiciel. Il fonctionne parfaitement maintenant !" },
    { speaker: 'Mariama', role: 'A', text: 'I need to get my laptop checked and have the battery replaced.', translation: "Je dois faire vérifier mon ordinateur portable et faire remplacer la batterie." },
    { speaker: 'Oumar', role: 'B', text: 'The causative structure is really useful for talking about services!', translation: "La structure causative est vraiment utile pour parler de services !" },
  ],
  conversationTitle: 'Faire faire des choses par des professionnels',
  pronunciation: [
    { word: 'Repaired', phonetic: '/rɪˈperd/', meaning: 'Réparé', tip: 'Prononcez "ri-PERD" — l\'accent est sur "PAIR" et le "-ed" = "d".' },
    { word: 'Installed', phonetic: '/ɪnˈstɔːld/', meaning: 'Installé', tip: 'Prononcez "in-STOLD" — l\'accent est sur "STALL".' },
    { word: 'Delivered', phonetic: '/dɪˈlɪvərd/', meaning: 'Livré', tip: 'Prononcez "di-LI-verd" — l\'accent est sur "LI".' },
    { word: 'Equipment', phonetic: '/ɪˈkwɪpmənt/', meaning: 'Équipement', tip: 'L\'accent est sur "QUIP" : "i-KUIP-ment".' },
  ],
}

export const B1_L50: LessonContent = {
  vocab: [
    { english: 'Laboratory', french: 'Laboratoire', phonetic: '/ˈlæbrətɔːri/', example: 'The laboratory is equipped with state-of-the-art technology.', exampleTranslation: "Le laboratoire est équipé d'une technologie de pointe." },
    { english: 'Algorithm', french: 'Algorithme', phonetic: '/ˈælɡərɪðəm/', example: 'The algorithm processes data efficiently.', exampleTranslation: "L'algorithme traite les données efficacement." },
    { english: 'Quantum', french: 'Quantique', phonetic: '/ˈkwɑːntəm/', example: 'Quantum computing could change everything.', exampleTranslation: "L'informatique quantique pourrait tout changer." },
    { english: 'Biotechnology', french: 'Biotechnologie', phonetic: '/ˌbaɪoʊtekˈnɑːlədʒi/', example: 'Biotechnology has many medical applications.', exampleTranslation: 'La biotechnologie a de nombreuses applications médicales.' },
  ],
  grammar: {
    title: 'Prononciation des termes scientifiques — Mots techniques',
    explanation: 'Les termes scientifiques ont des prononciations spécifiques : "Laboratory" = "LAB-ra-to-ri" (4 syllabes en américain, accent sur "LAB"), "Algorithm" = "AL-go-ri-dhem" (accent sur "AL"), "Quantum" = "KOUAN-tem" (accent sur "KUAN"), "Biotechnology" = "baï-o-tek-NOL-o-dji" (accent sur "NOL"). Ces mots sont souvent mal prononcés par les francophones car leurs équivalents français ont des accents différents.',
    examples: [
      { sentence: 'The LAB-ra-to-ri is well equipped.', translation: 'Le laboratoire est bien équipé.', isCorrect: true },
      { sentence: 'The la-bo-ra-TO-ry is well equipped.', translation: '', isCorrect: false },
      { sentence: 'The algorithm processes large amounts of data.', translation: "L'algorithme traite de grandes quantités de données.", isCorrect: true },
      { sentence: 'Quantum technology is advancing rapidly.', translation: 'La technologie quantique avance rapidement.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The la-bo-ra-TO-ry is well equipped.', correct: 'The LAB-ra-to-ri is well equipped.', explanation: '"Laboratory" a l\'accent sur la PREMIÈRE syllabe : "LAB-ra-to-ri", pas "la-bo-ra-TO-ry" à la française !' },
      { wrong: 'The al-go-RITH-me is efficient.', correct: 'The AL-go-ri-dhem is efficient.', explanation: '"Algorithm" a l\'accent sur "AL" : "AL-go-ri-dhem", pas "al-go-RITH-me" !' },
    ],
  },
  conversation: [
    { speaker: 'Amina', role: 'A', text: 'I visited the new laboratory yesterday. It\'s state-of-the-art!', translation: "J'ai visité le nouveau laboratoire hier. C'est à la pointe !" },
    { speaker: 'Kofi', role: 'B', text: 'What kind of research do they do?', translation: "Quel genre de recherche font-ils ?" },
    { speaker: 'Amina', role: 'A', text: 'They work on algorithms for quantum computing and biotechnology applications.', translation: "Ils travaillent sur des algorithmes pour l'informatique quantique et les applications biotechnologiques." },
    { speaker: 'Kofi', role: 'B', text: 'Those are cutting-edge fields! Science vocabulary can be hard to pronounce though.', translation: "Ce sont des domaines de pointe ! Le vocabulaire scientifique peut être difficile à prononcer cependant." },
    { speaker: 'Amina', role: 'A', text: 'True! "Laboratory" is "LAB-ra-to-ri", not "la-bo-ra-TO-ry"!', translation: "Vrai ! « Laboratory » c'est « LAB-ra-to-ri », pas « la-bo-ra-TO-ry » !" },
    { speaker: 'Kofi', role: 'B', text: 'And "algorithm" is "AL-go-ri-dhem"! Practice makes perfect.', translation: "Et « algorithm » c'est « AL-go-ri-dhem » ! La pratique rend parfait." },
  ],
  conversationTitle: 'La science en anglais',
  pronunciation: [
    { word: 'Laboratory', phonetic: '/ˈlæbrətɔːri/', meaning: 'Laboratoire', tip: 'L\'accent est sur "LAB" : "LAB-ra-to-ri". Pas "la-bo-ra-TO-ry" !' },
    { word: 'Algorithm', phonetic: '/ˈælɡərɪðəm/', meaning: 'Algorithme', tip: 'L\'accent est sur "AL" : "AL-go-ri-dhem".' },
    { word: 'Quantum', phonetic: '/ˈkwɑːntəm/', meaning: 'Quantique', tip: 'L\'accent est sur "KUAN" : "KOUAN-tem".' },
    { word: 'Biotechnology', phonetic: '/ˌbaɪoʊtekˈnɑːlədʒi/', meaning: 'Biotechnologie', tip: 'L\'accent est sur "NOL" : "baï-o-tek-NOL-o-dji".' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 11: FINANCE & MONEY (b1-l51 through b1-l55)
// ════════════════════════════════════════════════════════════════════════════════

export const B1_L51: LessonContent = {
  vocab: [
    { english: 'Budget', french: 'Budget', phonetic: '/ˈbʌdʒɪt/', example: 'We need to create a budget for next month.', exampleTranslation: 'Nous devons créer un budget pour le mois prochain.' },
    { english: 'Investment', french: 'Investissement', phonetic: '/ɪnˈvestmənt/', example: 'Smart investments can grow your wealth.', exampleTranslation: 'Les investissements intelligents peuvent faire croître votre richesse.' },
    { english: 'Savings', french: 'Économies', phonetic: '/ˈseɪvɪŋz/', example: 'She has been building her savings for years.', exampleTranslation: 'Elle constitue ses économies depuis des années.' },
    { english: 'Debt', french: 'Dette', phonetic: '/det/', example: 'It\'s important to manage your debt carefully.', exampleTranslation: "Il est important de gérer sa dette avec soin." },
    { english: 'Expense', french: 'Dépense', phonetic: '/ɪkˈspens/', example: 'Housing is my biggest monthly expense.', translation: "Le logement est ma plus grande dépense mensuelle." },
  ],
  grammar: {
    title: 'Vocabulaire financier — Budget, épargne et investissements',
    explanation: 'Le vocabulaire financier essentiel : "Budget" = plan de revenus et dépenses, "Savings" = argent économisé (toujours au pluriel), "Investment" = placement d\'argent pour un retour, "Debt" = argent dû (se prononce "dette", le "b" est muet), "Expense" = coût/dépense. Collocations : "stick to a budget" (respecter un budget), "pay off debt" (rembourser une dette), "build savings" (constituer des économies), "make an investment" (faire un investissement), "cut expenses" (réduire les dépenses). ATTENTION : "debt" se prononce "DETT" — le "b" est muet !',
    examples: [
      { sentence: 'She decided to pay off her debt and build her savings.', translation: 'Elle a décidé de rembourser sa dette et de constituer ses économies.', isCorrect: true },
      { sentence: 'He has many saving in the bank.', translation: '', isCorrect: false },
      { sentence: 'We need to cut expenses and stick to our budget.', translation: 'Nous devons réduire les dépenses et respecter notre budget.', isCorrect: true },
      { sentence: 'Making smart investments requires research.', translation: 'Faire des investissements intelligents nécessite de la recherche.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'He has many saving in the bank.', correct: 'He has a lot of savings in the bank.', explanation: '"Savings" est TOUJOURS au pluriel : "a lot of savings" ou "his savings", pas "saving".' },
      { wrong: 'She has a big depth.', correct: 'She has a lot of debt.', explanation: '"Debt" (dette) s\'écrit avec un "b" muet et se prononce "dett". "Depth" = profondeur. Ce sont des mots différents !' },
    ],
  },
  conversation: [
    { speaker: 'Youssef', role: 'A', text: 'How do you manage your budget?', translation: 'Comment gères-tu ton budget ?' },
    { speaker: 'Fatou', role: 'B', text: 'I try to cut unnecessary expenses and build my savings every month.', translation: "J'essaie de réduire les dépenses inutiles et de constituer mes économies chaque mois." },
    { speaker: 'Youssef', role: 'A', text: 'That\'s smart. I\'m trying to pay off my debt first. Then I\'ll think about investments.', translation: "C'est intelligent. J'essaie d'abord de rembourser ma dette. Ensuite je penserai aux investissements." },
    { speaker: 'Fatou', role: 'B', text: 'Good strategy! Sticking to a budget is the first step to financial freedom.', translation: "Bonne stratégie ! Respecter un budget est la première étape vers la liberté financière." },
    { speaker: 'Youssef', role: 'A', text: 'What kind of investments do you recommend?', translation: "Quel genre d'investissements recommandes-tu ?" },
    { speaker: 'Fatou', role: 'B', text: 'It depends on your goals. But always do your research before making any investment!', translation: "Ça dépend de tes objectifs. Mais fais toujours tes recherches avant de faire un investissement !" },
  ],
  conversationTitle: 'Parler de finances personnelles',
  pronunciation: [
    { word: 'Budget', phonetic: '/ˈbʌdʒɪt/', meaning: 'Budget', tip: 'L\'accent est sur "BUD" : "BED-jit". Pas "bou-djèt" !' },
    { word: 'Debt', phonetic: '/det/', meaning: 'Dette', tip: 'Prononcez "DETT" — le "b" est TOTALMENT MUET ! Pas "debt" ni "debte".' },
    { word: 'Investment', phonetic: '/ɪnˈvestmənt/', meaning: 'Investissement', tip: 'L\'accent est sur "VEST" : "in-VEST-ment".' },
    { word: 'Savings', phonetic: '/ˈseɪvɪŋz/', meaning: 'Économies', tip: 'L\'accent est sur "SAV" : "SÉÿ-vingz". Toujours au pluriel !' },
  ],
}

export const B1_L52: LessonContent = {
  vocab: [
    { english: 'Would have saved', french: 'Aurais économisé', phonetic: '/wʊd hæv seɪvd/', example: 'If I had saved more, I would have bought a house.', exampleTranslation: "Si j'avais économisé plus, j'aurais acheté une maison." },
    { english: 'Would have invested', french: 'Aurais investi', phonetic: '/wʊd hæv ɪnˈvestɪd/', example: 'If I had known, I would have invested earlier.', exampleTranslation: "Si j'avais su, j'aurais investi plus tôt." },
    { english: 'Had known', french: 'Avais su', phonetic: '/hæd noʊn/', example: 'If I had known about the risk, I wouldn\'t have invested.', exampleTranslation: "Si j'avais connu le risque, je n'aurais pas investi." },
    { english: 'Had been more careful', french: 'Avais été plus prudent(e)', phonetic: '/hæd biːn mɔːr ˈkerfl/', example: 'If I had been more careful, I wouldn\'t have lost money.', exampleTranslation: "Si j'avais été plus prudent(e), je n'aurais pas perdu d'argent." },
    { english: 'Would have avoided', french: 'Aurais évité', phonetic: '/wʊd hæv əˈvɔɪdɪd/', example: 'She would have avoided debt if she had planned better.', exampleTranslation: "Elle aurait évité la dette si elle avait mieux planifié." },
  ],
  grammar: {
    title: 'Le Troisième Conditionnel — If I had saved more, I would have bought it',
    explanation: 'Le troisième conditionnel exprime un regret ou une situation contraire au passé : IF + had + participe passé, WOULD HAVE + participe passé. "If I HAD SAVED more, I WOULD HAVE BOUGHT a house" (Si j\'avais économisé plus, j\'aurais acheté une maison). Ce conditionnel décrit une situation IMPOSSIBLE car le passé ne peut pas être changé. On l\'utilise pour exprimer des regrets : "If I had known, I would have invested earlier" (Si j\'avais su, j\'aurais investi plus tôt). Négatif : "I wouldn\'t have spent so much" (Je n\'aurais pas dépensé autant).',
    examples: [
      { sentence: 'If I had saved more, I would have bought the apartment.', translation: "Si j'avais économisé plus, j'aurais acheté l'appartement.", isCorrect: true },
      { sentence: 'If I would have saved more, I would have bought it.', translation: '', isCorrect: false },
      { sentence: 'If she had been more careful, she wouldn\'t have lost money.', translation: "Si elle avait été plus prudente, elle n'aurait pas perdu d'argent.", isCorrect: true },
      { sentence: 'If they had invested earlier, they would have made a profit.', translation: "S'ils avaient investi plus tôt, ils auraient fait un profit.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'If I would have saved more, I would have bought it.', correct: 'If I had saved more, I would have bought it.', explanation: 'Dans la subordonnée avec "if", on utilise "had + participe passé", PAS "would have". "Would" ne vient que dans la principale.' },
      { wrong: 'If I have saved more, I would have bought it.', correct: 'If I had saved more, I would have bought it.', explanation: 'Le 3e conditionnel utilise le Past Perfect dans la subordonnée : "had saved" (pas "have saved").' },
    ],
  },
  conversation: [
    { speaker: 'Aïcha', role: 'A', text: 'I regret not investing in that company. If I had invested, I would have made a lot of money.', translation: "Je regrette de ne pas avoir investi dans cette entreprise. Si j'avais investi, j'aurais gagné beaucoup d'argent." },
    { speaker: 'Kofi', role: 'B', text: 'I know the feeling! If I had been more careful, I wouldn\'t have gone into debt.', translation: "Je connais ce sentiment ! Si j'avais été plus prudent, je ne serais pas endetté." },
    { speaker: 'Aïcha', role: 'A', text: 'If you had saved more, would you have avoided the debt?', translation: "Si tu avais économisé plus, aurais-tu évité la dette ?" },
    { speaker: 'Kofi', role: 'B', text: 'Definitely. If I had known about budgeting, I would have managed my money better.', translation: "Définitivement. Si j'avais connu la gestion de budget, j'aurais mieux géré mon argent." },
    { speaker: 'Aïcha', role: 'A', text: 'The third conditional is perfect for talking about financial regrets!', translation: "Le troisième conditionnel est parfait pour parler de regrets financiers !" },
    { speaker: 'Kofi', role: 'B', text: 'Yes! But we can\'t change the past. We can only learn and plan better for the future.', translation: "Oui ! Mais on ne peut pas changer le passé. On peut seulement apprendre et mieux planifier l'avenir." },
  ],
  conversationTitle: 'Regrets financiers et leçons apprises',
  pronunciation: [
    { word: 'Would have', phonetic: '/wʊd hæv/', meaning: 'Aurais', tip: 'Prononcez "OUDE hav" — en anglais rapide, ça devient "ouda".' },
    { word: 'Saved', phonetic: '/seɪvd/', meaning: 'Économisé', tip: 'Prononcez "SÉÏVD" — le "a" est long et le "-ed" = "d".' },
    { word: 'Invested', phonetic: '/ɪnˈvestɪd/', meaning: 'Investi', tip: 'L\'accent est sur "VEST" : "in-VEST-id".' },
    { word: 'Avoided', phonetic: '/əˈvɔɪdɪd/', meaning: 'Évité', tip: 'L\'accent est sur "VOID" : "e-VOÏ-did".' },
  ],
}

export const B1_L53: LessonContent = {
  vocab: [
    { english: 'Financial planning', french: 'Planification financière', phonetic: '/faɪˈnænʃəl ˈplænɪŋ/', example: 'Financial planning is essential for a secure future.', exampleTranslation: "La planification financière est essentielle pour un avenir sûr." },
    { english: 'Retirement', french: 'Retraite', phonetic: '/rɪˈtaɪərmənt/', example: 'You should start saving for retirement early.', exampleTranslation: "Tu devrais commencer à épargner pour la retraite tôt." },
    { english: 'Emergency fund', french: 'Fonds d\'urgence', phonetic: '/ɪˈmɜːrdʒənsi fʌnd/', example: 'An emergency fund covers three to six months of expenses.', exampleTranslation: "Un fonds d'urgence couvre trois à six mois de dépenses." },
    { english: 'Mortgage', french: 'Hypothèque', phonetic: '/ˈmɔːrɡɪdʒ/', example: 'We took out a mortgage to buy our house.', exampleTranslation: "Nous avons contracté un prêt hypothécaire pour acheter notre maison." },
    { english: 'Interest rate', french: "Taux d'intérêt", phonetic: '/ˈɪntrəst reɪt/', example: 'The interest rate on savings accounts is very low.', exampleTranslation: "Le taux d'intérêt sur les comptes d'épargne est très bas." },
  ],
  grammar: {
    title: 'Planification financière — Conseils et recommandations',
    explanation: 'Pour parler de planification financière, utilisez le conditionnel et les modaux : "You SHOULD start saving early" (Tu devrais commencer à épargner tôt). "It\'s important TO build an emergency fund" (Il est important de constituer un fonds d\'urgence). "If I WERE you, I WOULD compare interest rates" (Si j\'étais toi, je comparerais les taux d\'intérêt). "You HAD BETTER not ignore your mortgage payments" (Tu ferais mieux de ne pas ignorer tes paiements d\'hypothèque). Expressions : "live within your means" (vivre selon ses moyens), "make ends meet" (joindre les deux bouts).',
    examples: [
      { sentence: 'You should start saving for retirement as early as possible.', translation: 'Tu devrais commencer à épargner pour la retraite le plus tôt possible.', isCorrect: true },
      { sentence: 'If I were you, I will compare interest rates.', translation: '', isCorrect: false },
      { sentence: 'It\'s important to build an emergency fund before taking out a mortgage.', translation: "Il est important de constituer un fonds d'urgence avant de contracter un prêt hypothécaire.", isCorrect: true },
      { sentence: 'Living within your means helps you make ends meet.', translation: "Vivre selon ses moyens aide à joindre les deux bouts.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'If I were you, I will compare interest rates.', correct: 'If I were you, I would compare interest rates.', explanation: 'Après "If I were you" (2e conditionnel), on utilise "would" (pas "will"). C\'est un conseil hypothétique.' },
      { wrong: 'I must to save for retirement.', correct: 'I must save for retirement.', explanation: 'Après "must", le verbe est à l\'infinitif SANS "to" : "must save", pas "must to save".' },
    ],
  },
  conversation: [
    { speaker: 'Moussa', role: 'A', text: 'What\'s your best advice for financial planning?', translation: "Quel est ton meilleur conseil pour la planification financière ?" },
    { speaker: 'Amina', role: 'B', text: 'First, build an emergency fund. Then start saving for retirement early.', translation: "D'abord, constitue un fonds d'urgence. Ensuite commence à épargner pour la retraite tôt." },
    { speaker: 'Moussa', role: 'A', text: 'If I were you, I would compare interest rates before getting a mortgage.', translation: "Si j'étais toi, je comparerais les taux d'intérêt avant de prendre une hypothèque." },
    { speaker: 'Amina', role: 'B', text: 'Absolutely! And you should live within your means. That\'s the key to financial security.', translation: "Absolument ! Et tu devrais vivre selon tes moyens. C'est la clé de la sécurité financière." },
    { speaker: 'Moussa', role: 'A', text: 'I\'m trying to make ends meet while building my savings. It\'s not easy!', translation: "J'essaie de joindre les deux bouts tout en constituant mes économies. Ce n'est pas facile !" },
    { speaker: 'Amina', role: 'B', text: 'It takes discipline, but it\'s worth it. Financial freedom is a great goal!', translation: "Ça demande de la discipline, mais ça vaut le coup. La liberté financière est un super objectif !" },
  ],
  conversationTitle: 'Conseils de planification financière',
  pronunciation: [
    { word: 'Retirement', phonetic: '/rɪˈtaɪərmənt/', meaning: 'Retraite', tip: 'L\'accent est sur "TI" : "ri-TAÏER-ment".' },
    { word: 'Mortgage', phonetic: '/ˈmɔːrɡɪdʒ/', meaning: 'Hypothèque', tip: 'Prononcez "MOR-gidj" — le "t" est SILENCIEUX ! Pas "mor-ti-gage" !' },
    { word: 'Emergency', phonetic: '/ɪˈmɜːrdʒənsi/', meaning: 'Urgence', tip: 'L\'accent est sur "MER" : "i-MER-djen-si".' },
    { word: 'Interest', phonetic: '/ˈɪntrəst/', meaning: 'Intérêt', tip: 'Prononcez "IN-trest" — seulement 3 syllabes, pas 4 !' },
  ],
}

export const B1_L54: LessonContent = {
  vocab: [
    { english: 'Wish', french: 'Souhaiter', phonetic: '/wɪʃ/', example: 'I wish I had more savings.', exampleTranslation: "Je souhaite que j'aie plus d'économies." },
    { english: 'If only', french: 'Si seulement', phonetic: '/ɪf ˈoʊnli/', example: 'If only I had invested sooner!', exampleTranslation: "Si seulement j'avais investi plus tôt !" },
    { english: 'Regret', french: 'Regretter', phonetic: '/rɪˈɡret/', example: 'I regret not starting a budget earlier.', exampleTranslation: "Je regrette de ne pas avoir commencé un budget plus tôt." },
    { english: 'Wish I could', french: "J'aimerais pouvoir", phonetic: '/wɪʃ aɪ kʊd/', example: 'I wish I could afford that house.', exampleTranslation: "J'aimerais pouvoir me permettre cette maison." },
    { english: 'If only I were', french: "Si seulement j'étais", phonetic: '/ɪf ˈoʊnli aɪ wɜːr/', example: 'If only I were better at managing money!', exampleTranslation: "Si seulement j'étais meilleur pour gérer l'argent !" },
  ],
  grammar: {
    title: 'Wish & If Only — Souhaits et regrets',
    explanation: '"Wish" et "If only" expriment des souhaits ou regrets : PRÉSENT (regret sur le présent) : "I wish I HAD more savings" (Je souhaite avoir plus d\'économies — mais je n\'en ai pas). "If only I WERE better at math!" (Si seulement j\'étais meilleur en maths !). PASSÉ (regret sur le passé) : "I wish I HAD SAVED more" (Je regrette de ne pas avoir économisé plus). "If only I HAD INVESTED sooner!" (Si seulement j\'avais investi plus tôt !). ATTENTION : "wish" + Past Simple = regret sur le présent. "wish" + Past Perfect = regret sur le passé. "If only" = même structure, plus émotionnel.',
    examples: [
      { sentence: 'I wish I had started saving earlier.', translation: "Je regrette de ne pas avoir commencé à économiser plus tôt.", isCorrect: true },
      { sentence: 'I wish I have more money.', translation: '', isCorrect: false },
      { sentence: 'If only I had invested in that company!', translation: "Si seulement j'avais investi dans cette entreprise !", isCorrect: true },
      { sentence: 'I wish I were better at financial planning.', translation: "Je souhaite être meilleur en planification financière.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'I wish I have more money.', correct: 'I wish I had more money.', explanation: 'Après "wish", on utilise le PAST SIMPLE pour un regret sur le présent : "had" (pas "have"). "I wish I had" = Je souhaite avoir (mais je n\'ai pas).' },
      { wrong: 'I wish I would have more money.', correct: 'I wish I had more money.', explanation: 'On n\'utilise PAS "would" après "wish" pour parler de soi. "I wish I had" est correct. "Would" s\'utilise avec d\'autres sujets : "I wish it would rain".' },
    ],
  },
  conversation: [
    { speaker: 'Oumar', role: 'A', text: 'I wish I had started investing when I was younger.', translation: "Je regrette de ne pas avoir commencé à investir quand j'étais plus jeune." },
    { speaker: 'Mariama', role: 'B', text: 'If only we had learned about money management in school!', translation: "Si seulement nous avions appris la gestion de l'argent à l'école !" },
    { speaker: 'Oumar', role: 'A', text: 'I regret not creating a budget sooner. I wish I were more disciplined.', translation: "Je regrette de ne pas avoir créé un budget plus tôt. Je souhaite être plus discipliné." },
    { speaker: 'Mariama', role: 'B', text: 'Don\'t be too hard on yourself. I wish I could help you set up a plan.', translation: "Ne sois pas trop dur avec toi-même. J'aimerais pouvoir t'aider à mettre en place un plan." },
    { speaker: 'Oumar', role: 'A', text: 'If only I had known about emergency funds! Now I know better.', translation: "Si seulement j'avais connu les fonds d'urgence ! Maintenant je sais mieux." },
    { speaker: 'Mariama', role: 'B', text: 'That\'s the spirit! It\'s never too late to start. Wish and if only help us learn from the past.', translation: "C'est l'esprit ! Il n'est jamais trop tard pour commencer. Wish et if only nous aident à apprendre du passé." },
  ],
  conversationTitle: 'Exprimer des regrets financiers',
  pronunciation: [
    { word: 'Wish', phonetic: '/wɪʃ/', meaning: 'Souhaiter', tip: 'Prononcez "OUICH" — le "w" en arrondissant les lèvres et le "sh" final.' },
    { word: 'Regret', phonetic: '/rɪˈɡret/', meaning: 'Regretter', tip: 'L\'accent est sur "GRET" : "ri-GRET".' },
    { word: 'Could', phonetic: '/kʊd/', meaning: 'Pourrais', tip: 'Prononcez "KOUD" — le "l" est muet ! Pas "cou-led".' },
    { word: 'Were', phonetic: '/wɜːr/', meaning: 'Étais', tip: 'Prononcez "UEUR" — le "r" américain est roulé.' },
  ],
}

export const B1_L55: LessonContent = {
  vocab: [
    { english: 'Currency', french: 'Devise / Monnaie', phonetic: '/ˈkɜːrənsi/', example: 'Different countries use different currencies.', exampleTranslation: 'Différents pays utilisent différentes devises.' },
    { english: 'Inflation', french: 'Inflation', phonetic: '/ɪnˈfleɪʃən/', example: 'Inflation reduces the value of money over time.', exampleTranslation: "L'inflation réduit la valeur de l'argent au fil du temps." },
    { english: 'Dividend', french: 'Dividende', phonetic: '/ˈdɪvɪdend/', example: 'The company pays dividends to its shareholders.', exampleTranslation: "L'entreprise verse des dividendes à ses actionnaires." },
    { english: 'Transaction', french: 'Transaction', phonetic: '/trænˈzækʃən/', example: 'Every transaction is recorded electronically.', exampleTranslation: 'Chaque transaction est enregistrée électroniquement.' },
  ],
  grammar: {
    title: 'Prononciation des termes financiers — Mots techniques',
    explanation: 'Les termes financiers ont des prononciations spécifiques : "Currency" = "KEUR-en-si" (accent sur "CUR"), "Inflation" = "in-FLÉÿ-chenne" (accent sur "FLA"), "Dividend" = "DI-vi-dend" (accent sur "DI"), "Transaction" = "tran-ZAK-chenne" (accent sur "ZAC"). "Mortgage" = "MOR-gidj" (le "t" est muet !). Maîtriser ces prononciations est essentiel pour les discussions financières en anglais.',
    examples: [
      { sentence: 'The KEUR-en-si exchange rate affects trade.', translation: 'Le taux de change de la devise affecte le commerce.', isCorrect: true },
      { sentence: 'The cour-REN-si is strong.', translation: '', isCorrect: false },
      { sentence: 'Inflation reduces purchasing power over time.', translation: "L'inflation réduit le pouvoir d'achat au fil du temps.", isCorrect: true },
      { sentence: 'The transaction was completed successfully.', translation: 'La transaction a été effectuée avec succès.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The cour-REN-si is strong.', correct: 'The KEUR-en-si is strong.', explanation: '"Currency" a l\'accent sur "CUR" : "KEUR-en-si", pas "cour-REN-si" !' },
      { wrong: 'The di-vi-DEND was small.', correct: 'The DI-vi-dend was small.', explanation: '"Dividend" a l\'accent sur "DI" : "DI-vi-dend", pas "di-vi-DEND" !' },
    ],
  },
  conversation: [
    { speaker: 'Idrissa', role: 'A', text: 'How does inflation affect our savings?', translation: "Comment l'inflation affecte-t-elle nos économies ?" },
    { speaker: 'Fatou', role: 'B', text: 'It reduces the value of money over time. That\'s why investing is important.', translation: "Elle réduit la valeur de l'argent au fil du temps. C'est pourquoi investir est important." },
    { speaker: 'Idrissa', role: 'A', text: 'And currency exchange rates can make international transactions expensive.', translation: "Et les taux de change peuvent rendre les transactions internationales coûteuses." },
    { speaker: 'Fatou', role: 'B', text: 'True! Some companies pay dividends to shareholders as a return on investment.', translation: "Vrai ! Certaines entreprises versent des dividendes aux actionnaires comme retour sur investissement." },
    { speaker: 'Idrissa', role: 'A', text: 'Financial vocabulary pronunciation is tricky. "Currency" is "KEUR-en-si"!', translation: "La prononciation du vocabulaire financier est délicate. « Currency » c'est « KEUR-en-si » !" },
    { speaker: 'Fatou', role: 'B', text: 'And "mortgage" is "MOR-gidj" — the "t" is silent! Practice makes perfect.', translation: "Et « mortgage » c'est « MOR-gidj » — le « t » est muet ! La pratique rend parfait." },
  ],
  conversationTitle: 'Comprendre les termes financiers',
  pronunciation: [
    { word: 'Currency', phonetic: '/ˈkɜːrənsi/', meaning: 'Devise', tip: 'L\'accent est sur "CUR" : "KEUR-en-si". Pas "cour-REN-si" !' },
    { word: 'Inflation', phonetic: '/ɪnˈfleɪʃən/', meaning: 'Inflation', tip: 'L\'accent est sur "FLA" : "in-FLÉÿ-chenne".' },
    { word: 'Dividend', phonetic: '/ˈdɪvɪdend/', meaning: 'Dividende', tip: 'L\'accent est sur "DI" : "DI-vi-dend". Pas "di-vi-DEND" !' },
    { word: 'Transaction', phonetic: '/trænˈzækʃən/', meaning: 'Transaction', tip: 'L\'accent est sur "ZAC" : "tran-ZAK-chenne".' },
  ],
}

// ════════════════════════════════════════════════════════════════════════════════
// UNIT 12: LAW & RIGHTS (b1-l56 through b1-l60)
// ════════════════════════════════════════════════════════════════════════════════

export const B1_L56: LessonContent = {
  vocab: [
    { english: 'Justice', french: 'Justice', phonetic: '/ˈdʒʌstɪs/', example: 'Justice should be equal for everyone.', exampleTranslation: 'La justice devrait être égale pour tous.' },
    { english: 'Freedom', french: 'Liberté', phonetic: '/ˈfriːdəm/', example: 'Freedom of speech is a fundamental right.', exampleTranslation: "La liberté d'expression est un droit fondamental." },
    { english: 'Responsibility', french: 'Responsabilité', phonetic: '/rɪˌspɑːnsəˈbɪləti/', example: 'We all have a responsibility to respect the law.', exampleTranslation: "Nous avons tous une responsabilité de respecter la loi." },
    { english: 'Rights', french: 'Droits', phonetic: '/raɪts/', example: 'Human rights must be protected.', exampleTranslation: "Les droits humains doivent être protégés." },
    { english: 'Legislation', french: 'Législation', phonetic: '/ˌledʒɪˈsleɪʃən/', example: 'New legislation was introduced to protect workers.', exampleTranslation: "Une nouvelle législation a été introduite pour protéger les travailleurs." },
  ],
  grammar: {
    title: 'Vocabulaire juridique — Justice, liberté et responsabilité',
    explanation: 'Le vocabulaire juridique : "Justice" = équité et application de la loi, "Freedom" = liberté (droit d\'agir), "Responsibility" = responsabilité (obligation morale/légale), "Rights" = droits (libertés garanties par la loi), "Legislation" = lois adoptées par le parlement. Collocations : "seek justice" (chercher la justice), "defend freedom" (défendre la liberté), "take responsibility" (prendre ses responsabilités), "protect rights" (protéger les droits), "pass legislation" (adopter une législation). ATTENTION : "rights" est généralement au pluriel : "human rights", "workers\' rights".',
    examples: [
      { sentence: 'Every citizen has the right to seek justice.', translation: 'Chaque citoyen a le droit de chercher la justice.', isCorrect: true },
      { sentence: 'We must defend the freedom of speech.', translation: "Nous devons défendre la liberté d'expression.", isCorrect: true },
      { sentence: 'The government passed a new legislation.', translation: '', isCorrect: false },
      { sentence: 'Taking responsibility for your actions is important.', translation: 'Prendre ses responsabilités pour ses actions est important.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The government passed a new legislation.', correct: 'The government passed new legislation.', explanation: '"Legislation" est indénombrable : "passed new legislation" (pas "a new legislation"). On peut dire "a new law" par contre.' },
      { wrong: 'Human right must be respected.', correct: 'Human rights must be respected.', explanation: '"Rights" est presque toujours au pluriel dans ce contexte : "human rights", pas "human right".' },
    ],
  },
  conversation: [
    { speaker: 'Kofi', role: 'A', text: 'What does justice mean to you?', translation: "Que signifie la justice pour toi ?" },
    { speaker: 'Amina', role: 'B', text: 'Justice means equal rights and freedom for everyone. And responsibility from all citizens.', translation: "La justice signifie des droits égaux et la liberté pour tous. Et la responsabilité de tous les citoyens." },
    { speaker: 'Kofi', role: 'A', text: 'I agree. New legislation is needed to protect those rights.', translation: "Je suis d'accord. Une nouvelle législation est nécessaire pour protéger ces droits." },
    { speaker: 'Amina', role: 'B', text: 'Yes, but laws alone aren\'t enough. We must take responsibility for defending freedom.', translation: "Oui, mais les lois seules ne suffisent pas. Nous devons prendre la responsabilité de défendre la liberté." },
    { speaker: 'Kofi', role: 'A', text: 'That\'s true. Seeking justice requires action from everyone.', translation: "C'est vrai. Chercher la justice exige l'action de tous." },
    { speaker: 'Amina', role: 'B', text: 'Together we can build a society that truly protects human rights.', translation: "Ensemble nous pouvons construire une société qui protège véritablement les droits humains." },
  ],
  conversationTitle: 'Discuter de justice et de droits',
  pronunciation: [
    { word: 'Justice', phonetic: '/ˈdʒʌstɪs/', meaning: 'Justice', tip: 'L\'accent est sur "JUS" : "DJES-tis". Pas "ju-STICE" !' },
    { word: 'Freedom', phonetic: '/ˈfriːdəm/', meaning: 'Liberté', tip: 'L\'accent est sur "FREE" : "FRI-dem".' },
    { word: 'Responsibility', phonetic: '/rɪˌspɑːnsəˈbɪləti/', meaning: 'Responsabilité', tip: 'L\'accent est sur "BI" : "ri-spon-se-BI-li-ti".' },
    { word: 'Legislation', phonetic: '/ˌledʒɪˈsleɪʃən/', meaning: 'Législation', tip: 'L\'accent est sur "SLA" : "le-dji-SLÉÿ-chenne".' },
  ],
}

export const B1_L57: LessonContent = {
  vocab: [
    { english: 'Must', french: 'Devoir (obligation forte)', phonetic: '/mʌst/', example: 'You must obey the law.', exampleTranslation: 'Tu dois obéir à la loi.' },
    { english: 'Have to', french: 'Devoir (obligation externe)', phonetic: '/hæv tuː/', example: 'Everyone has to pay taxes.', exampleTranslation: 'Tout le monde doit payer des impôts.' },
    { english: 'Should', french: 'Devrait (conseil)', phonetic: '/ʃʊd/', example: 'You should know your legal rights.', exampleTranslation: 'Tu devrais connaître tes droits légaux.' },
    { english: 'Need to', french: 'Avoir besoin de', phonetic: '/niːd tuː/', example: 'You need to report the crime to the police.', exampleTranslation: "Tu dois signaler le crime à la police." },
    { english: 'Ought to', french: 'Devrait (formel)', phonetic: '/ˈɔːt tuː/', example: 'Citizens ought to vote in elections.', exampleTranslation: 'Les citoyens devraient voter aux élections.' },
  ],
  grammar: {
    title: 'Les Verbes Modaux d\'Obligation — Must, have to, should, need to',
    explanation: 'Les modaux d\'obligation ont des nuances importantes : "MUST" = obligation forte/interne : "You must stop at a red light" (obligation absolue). "HAVE TO" = obligation externe/règle : "I have to wear a uniform" (imposé par d\'autres). "SHOULD" = conseil/recommandation : "You should consult a lawyer" (pas obligatoire mais recommandé). "NEED TO" = nécessité : "You need to fill in this form" (c\'est nécessaire). "OUGHT TO" = devrait (plus formel, même sens que "should"). Négatifs : "mustn\'t" = interdiction (ne dois PAS), "don\'t have to" = pas obligatoire (n\'as pas besoin de), "shouldn\'t" = déconseillé.',
    examples: [
      { sentence: 'You must respect the law — it\'s mandatory.', translation: "Tu dois respecter la loi — c'est obligatoire.", isCorrect: true },
      { sentence: 'You mustn\'t to drive without a license.', translation: '', isCorrect: false },
      { sentence: 'You don\'t have to attend the meeting, but it\'s recommended.', translation: "Tu n'es pas obligé d'assister à la réunion, mais c'est recommandé.", isCorrect: true },
      { sentence: 'Citizens ought to know their rights.', translation: 'Les citoyens devraient connaître leurs droits.', isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'You mustn\'t to drive without a license.', correct: 'You mustn\'t drive without a license.', explanation: 'Après "mustn\'t", le verbe est sans "to" : "mustn\'t drive" (pas "mustn\'t to drive"). Les modaux ne prennent PAS "to".' },
      { wrong: 'You must not to park here.', correct: 'You must not park here.', explanation: '"Must not" = interdiction. Le verbe suit sans "to" : "must not park", pas "must not to park".' },
    ],
  },
  conversation: [
    { speaker: 'Youssef', role: 'A', text: 'What are our legal obligations as citizens?', translation: "Quelles sont nos obligations légales en tant que citoyens ?" },
    { speaker: 'Aïcha', role: 'B', text: 'We must obey the law and we have to pay taxes. These are mandatory.', translation: "Nous devons obéir à la loi et nous devons payer des impôts. Ce sont des obligations." },
    { speaker: 'Youssef', role: 'A', text: 'What about things we should do but aren\'t required?', translation: "Et les choses qu'on devrait faire mais qui ne sont pas requises ?" },
    { speaker: 'Aïcha', role: 'B', text: 'You should know your rights. Citizens ought to vote in elections.', translation: "Tu devrais connaître tes droits. Les citoyens devraient voter aux élections." },
    { speaker: 'Youssef', role: 'A', text: 'So "must" and "have to" are obligations, but "should" and "ought to" are recommendations?', translation: "Donc « must » et « have to » sont des obligations, mais « should » et « ought to » sont des recommandations ?" },
    { speaker: 'Aïcha', role: 'B', text: 'Exactly! And "don\'t have to" means it\'s not required, while "mustn\'t" means it\'s prohibited.', translation: "Exactement ! Et « don't have to » signifie que ce n'est pas requis, tandis que « mustn't » signifie que c'est interdit." },
  ],
  conversationTitle: 'Obligations légales et modaux',
  pronunciation: [
    { word: 'Must', phonetic: '/mʌst/', meaning: 'Devoir', tip: 'Prononcez "MEUST" — le "u" est ouvert comme dans "cup".' },
    { word: 'Ought', phonetic: '/ˈɔːt/', meaning: 'Devrait', tip: 'Prononcez "OT" — le "gh" est SILENCIEUX ! Pas "ougt" !' },
    { word: 'License', phonetic: '/ˈlaɪsəns/', meaning: 'Permis', tip: 'Prononcez "LAÏ-sens" — l\'accent est sur "LI" et le "c" = "s".' },
    { word: 'Prohibited', phonetic: '/prəˈhɪbɪtɪd/', meaning: 'Interdit', tip: 'L\'accent est sur "HI" : "pro-HI-bi-tid".' },
  ],
}

export const B1_L58: LessonContent = {
  vocab: [
    { english: 'Trial', french: 'Procès', phonetic: '/ˈtraɪəl/', example: 'The trial lasted three weeks.', exampleTranslation: 'Le procès a duré trois semaines.' },
    { english: 'Verdict', french: 'Verdict', phonetic: '/ˈvɜːrdɪkt/', example: 'The jury reached a verdict of not guilty.', exampleTranslation: "Le jury a rendu un verdict de non-culpabilité." },
    { english: 'Evidence', french: 'Preuves', phonetic: '/ˈevɪdəns/', example: 'The evidence was presented in court.', exampleTranslation: 'Les preuves ont été présentées au tribunal.' },
    { english: 'Witness', french: 'Témoin', phonetic: '/ˈwɪtnəs/', example: 'The witness testified before the judge.', exampleTranslation: 'Le témoin a témoigné devant le juge.' },
    { english: 'Appeal', french: 'Appel / Faire appel', phonetic: '/əˈpiːl/', example: 'The defendant decided to appeal the decision.', translation: "Le défendeur a décidé de faire appel de la décision." },
  ],
  grammar: {
    title: 'Discuter de droits et responsabilités — Le système juridique',
    explanation: 'Pour discuter du système juridique : "Trial" = procès (devant un juge/jury), "Verdict" = décision du jury, "Evidence" = preuves présentées (indénombrable), "Witness" = personne qui témoigne, "Appeal" = contester une décision. Collocations : "go to trial" (aller en procès), "reach a verdict" (rendre un verdict), "present evidence" (présenter des preuves), "call a witness" (appeler un témoin), "file an appeal" (déposer un appel). Expressions : "innocent until proven guilty" (présumé innocent jusqu\'à preuve du contraire), "beyond reasonable doubt" (au-delà de tout doute raisonnable).',
    examples: [
      { sentence: 'The evidence was presented during the trial.', translation: "Les preuves ont été présentées pendant le procès.", isCorrect: true },
      { sentence: 'The jury reached a verdict after seeing all evidences.', translation: '', isCorrect: false },
      { sentence: 'The witness testified that the defendant was innocent.', translation: "Le témoin a témoigné que le défendeur était innocent.", isCorrect: true },
      { sentence: 'Everyone is innocent until proven guilty.', translation: "Tout le monde est présumé innocent jusqu'à preuve du contraire.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The jury reached a verdict after seeing all evidences.', correct: 'The jury reached a verdict after seeing all the evidence.', explanation: '"Evidence" est indénombrable ! On dit "all the evidence", pas "all evidences". Pas de "s" !' },
      { wrong: 'He appealed against the decision.', correct: 'He appealed the decision.', explanation: 'En anglais américain, on dit "appeal the decision" (sans "against"). En anglais britannique, "appeal against" est accepté.' },
    ],
  },
  conversation: [
    { speaker: 'Moussa', role: 'A', text: 'Have you ever followed a trial in the news?', translation: "As-tu déjà suivi un procès dans les nouvelles ?" },
    { speaker: 'Fatou', role: 'B', text: 'Yes, the evidence was overwhelming. The witness testimony was crucial.', translation: "Oui, les preuves étaient accablantes. Le témoignage du témoin était crucial." },
    { speaker: 'Moussa', role: 'A', text: 'Did the jury reach a verdict quickly?', translation: "Le jury a-t-il rendu un verdict rapidement ?" },
    { speaker: 'Fatou', role: 'B', text: 'It took time. The principle is "innocent until proven guilty beyond reasonable doubt."', translation: "Ça a pris du temps. Le principe est « présumé innocent jusqu'à preuve du contraire au-delà de tout doute raisonnable »." },
    { speaker: 'Moussa', role: 'A', text: 'And the defendant filed an appeal after the verdict?', translation: "Et le défendeur a déposé un appel après le verdict ?" },
    { speaker: 'Fatou', role: 'B', text: 'Yes, but the appeal was rejected. The legal system protects our rights and responsibilities.', translation: "Oui, mais l'appel a été rejeté. Le système juridique protège nos droits et responsabilités." },
  ],
  conversationTitle: 'Le système juridique en anglais',
  pronunciation: [
    { word: 'Trial', phonetic: '/ˈtraɪəl/', meaning: 'Procès', tip: 'Prononcez "TRAÏ-el" — l\'accent est sur "TRI" et le "i" est long.' },
    { word: 'Verdict', phonetic: '/ˈvɜːrdɪkt/', meaning: 'Verdict', tip: 'L\'accent est sur "VER" : "UEUR-dikt".' },
    { word: 'Evidence', phonetic: '/ˈevɪdəns/', meaning: 'Preuves', tip: 'L\'accent est sur "E" : "E-vi-dens".' },
    { word: 'Witness', phonetic: '/ˈwɪtnəs/', meaning: 'Témoin', tip: 'L\'accent est sur "WIT" : "OUIT-nes".' },
  ],
}

export const B1_L59: LessonContent = {
  vocab: [
    { english: 'Isn\'t it?', french: 'N\'est-ce pas ?', phonetic: '/ˈɪznt ɪt/', example: 'It\'s illegal, isn\'t it?', exampleTranslation: "C'est illégal, n'est-ce pas ?" },
    { english: 'Don\'t they?', french: 'N\'est-ce pas ? (pluriel)', phonetic: '/doʊnt ðeɪ/', example: 'They have to pay taxes, don\'t they?', exampleTranslation: "Ils doivent payer des impôts, n'est-ce pas ?" },
    { english: 'Can\'t we?', french: 'Ne pouvons-nous pas ?', phonetic: '/kænt wiː/', example: 'We can appeal, can\'t we?', exampleTranslation: "Nous pouvons faire appel, n'est-ce pas ?" },
    { english: 'Shouldn\'t she?', french: 'Ne devrait-elle pas ?', phonetic: '/ˈʃʊdnt ʃiː/', example: 'She should consult a lawyer, shouldn\'t she?', exampleTranslation: "Elle devrait consulter un avocat, ne devrait-elle pas ?" },
    { english: 'Haven\'t you?', french: 'N\'as-tu pas ?', phonetic: '/ˈhævnt juː/', example: 'You have read the contract, haven\'t you?', exampleTranslation: "Tu as lu le contrat, n'est-ce pas ?" },
  ],
  grammar: {
    title: 'Les Question Tags — It\'s illegal, isn\'t it?',
    explanation: 'Les question tags sont de petites questions ajoutées à la fin d\'une phrase pour demander confirmation : Phrase AFFIRMATIVE → tag NÉGATIF : "It\'s illegal, ISN\'T it?" "They have to pay, DON\'T they?" Phrase NÉGATIVE → tag AFFIRMATIF : "You haven\'t forgotten, HAVE you?" "She shouldn\'t lie, SHOULD she?" RÈGLE : on reprend l\'auxiliaire (be, do, have, can, will, should, etc.) : "It IS → isn\'t it?", "They DON\'T → do they?", "She CAN → can\'t she?". ATTENTION : "I am → aren\'t I?" (pas "amn\'t I"). Intonation MONTANTE = vraie question. Intonation DESCENDANTE = on s\'attend à l\'accord.',
    examples: [
      { sentence: 'It\'s illegal, isn\'t it?', translation: "C'est illégal, n'est-ce pas ?", isCorrect: true },
      { sentence: 'It\'s illegal, is it?', translation: '', isCorrect: false },
      { sentence: 'They should know their rights, shouldn\'t they?', translation: "Ils devraient connaître leurs droits, ne devraient-ils pas ?", isCorrect: true },
      { sentence: 'You haven\'t signed the contract, have you?', translation: "Tu n'as pas signé le contrat, n'est-ce pas ?", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'It\'s illegal, is it?', correct: 'It\'s illegal, isn\'t it?', explanation: 'Après une phrase affirmative, le tag est NÉGATIF : "isn\'t it?" (pas "is it?"). Le tag inverse la polarité.' },
      { wrong: 'I am right, amn\'t I?', correct: 'I am right, aren\'t I?', explanation: 'La question tag pour "I am" est "aren\'t I?" (pas "amn\'t I"). C\'est une exception en anglais !' },
    ],
  },
  conversation: [
    { speaker: 'Oumar', role: 'A', text: 'It\'s illegal to discriminate, isn\'t it?', translation: "C'est illégal de discriminer, n'est-ce pas ?" },
    { speaker: 'Mariama', role: 'B', text: 'Yes, absolutely. Everyone has equal rights, don\'t they?', translation: "Oui, absolument. Tout le monde a des droits égaux, n'est-ce pas ?" },
    { speaker: 'Oumar', role: 'A', text: 'You have read the new law, haven\'t you?', translation: "Tu as lu la nouvelle loi, n'est-ce pas ?" },
    { speaker: 'Mariama', role: 'B', text: 'I have! Citizens should understand their legal rights, shouldn\'t they?', translation: "Oui ! Les citoyens devraient comprendre leurs droits légaux, ne devraient-ils pas ?" },
    { speaker: 'Oumar', role: 'A', text: 'We can fight for justice, can\'t we?', translation: "Nous pouvons nous battre pour la justice, n'est-ce pas ?" },
    { speaker: 'Mariama', role: 'B', text: 'Of course! Question tags make conversations more engaging, don\'t they?', translation: "Bien sûr ! Les question tags rendent les conversations plus engageantes, n'est-ce pas ?" },
  ],
  conversationTitle: 'Question tags dans les discussions juridiques',
  pronunciation: [
    { word: 'Isn\'t it', phonetic: '/ˈɪznt ɪt/', meaning: 'N\'est-ce pas', tip: 'Prononcez "IZ-ent it" — rapide et fluide. En anglais rapide : "iz-nit".' },
    { word: 'Don\'t they', phonetic: '/doʊnt ðeɪ/', meaning: 'N\'est-ce pas', tip: 'Prononcez "DONT dhéÿ" — le "th" est sonore.' },
    { word: 'Aren\'t I', phonetic: '/ˈɑːrnt aɪ/', meaning: 'Ne suis-je pas', tip: 'Prononcez "AR-ent aï" — exception : "aren\'t I" (pas "amn\'t I").' },
    { word: 'Haven\'t you', phonetic: '/ˈhævnt juː/', meaning: 'N\'as-tu pas', tip: 'Prononcez "HAV-ent iou" — rapide en fin de phrase.' },
  ],
}

export const B1_L60: LessonContent = {
  vocab: [
    { english: 'Constitution', french: 'Constitution', phonetic: '/ˌkɑːnstɪˈtuːʃən/', example: 'The constitution guarantees fundamental rights.', exampleTranslation: "La constitution garantit les droits fondamentaux." },
    { english: 'Amendment', french: 'Amendement', phonetic: '/əˈmendmənt/', example: 'The amendment was added to protect privacy.', exampleTranslation: "L'amendement a été ajouté pour protéger la vie privée." },
    { english: 'Jurisdiction', french: 'Juridiction', phonetic: '/ˌdʒʊrɪsˈdɪkʃən/', example: 'This falls under federal jurisdiction.', exampleTranslation: "Cela relève de la juridiction fédérale." },
    { english: 'Precedent', french: 'Précédent', phonetic: '/ˈpresɪdənt/', example: 'The court ruling set a new precedent.', exampleTranslation: "La décision du tribunal a établi un nouveau précédent." },
  ],
  grammar: {
    title: 'Prononciation des termes juridiques — Mots formels',
    explanation: 'Les termes juridiques sont des mots formels avec des accents spécifiques : "Constitution" = "kon-sti-TOU-chenne" (accent sur "TU"), "Amendment" = "e-MEND-ment" (accent sur "MEND"), "Jurisdiction" = "djou-ris-DIK-chenne" (accent sur "DIC"), "Precedent" = "PRES-i-dent" (accent sur "PRE"). Ces mots sont souvent mal prononcés car leurs équivalents français ont des accents différents.',
    examples: [
      { sentence: 'The kon-sti-TOU-tion guarantees our rights.', translation: 'La constitution garantit nos droits.', isCorrect: true },
      { sentence: 'The con-sti-TU-tion guarantees our rights.', translation: '', isCorrect: false },
      { sentence: 'The amendment was passed by the parliament.', translation: "L'amendement a été adopté par le parlement.", isCorrect: true },
      { sentence: 'This case set a new precedent in legal history.', translation: "Cette affaire a établi un nouveau précédent dans l'histoire juridique.", isCorrect: true },
    ],
    commonMistakes: [
      { wrong: 'The con-sti-TU-tion guarantees our rights.', correct: 'The kon-sti-TOU-tion guarantees our rights.', explanation: '"Constitution" a l\'accent sur "TU" : "kon-sti-TOU-chenne", pas "con-sti-TU-tion" !' },
      { wrong: 'The pre-CE-dent was important.', correct: 'The PRES-i-dent was important.', explanation: '"Precedent" a l\'accent sur "PRE" : "PRES-i-dent" (comme "president"), pas "pre-CE-dent" !' },
    ],
  },
  conversation: [
    { speaker: 'Amina', role: 'A', text: 'The constitution is the foundation of our legal system.', translation: "La constitution est la fondation de notre système juridique." },
    { speaker: 'Kofi', role: 'B', text: 'Yes! And amendments can be added to update it. The latest amendment protects digital privacy.', translation: "Oui ! Et des amendements peuvent être ajoutés pour la mettre à jour. Le dernier amendement protège la vie privée numérique." },
    { speaker: 'Amina', role: 'A', text: 'Which jurisdiction handles cybercrime cases?', translation: "Quelle juridiction traite les affaires de cybercriminalité ?" },
    { speaker: 'Kofi', role: 'B', text: 'It depends on the country. But court precedents are important for future cases.', translation: "Ça dépend du pays. Mais les précédents judiciaires sont importants pour les affaires futures." },
    { speaker: 'Amina', role: 'A', text: 'Legal vocabulary pronunciation can be challenging!', translation: "La prononciation du vocabulaire juridique peut être difficile !" },
    { speaker: 'Kofi', role: 'B', text: 'True! "Jurisdiction" is "djou-ris-DIK-chenne", not "ju-ris-di-CTION"! Practice is key.', translation: "Vrai ! « Jurisdiction » c'est « djou-ris-DIK-chenne », pas « ju-ris-di-CTION » ! La pratique est la clé." },
  ],
  conversationTitle: 'Termes juridiques en anglais',
  pronunciation: [
    { word: 'Constitution', phonetic: '/ˌkɑːnstɪˈtuːʃən/', meaning: 'Constitution', tip: 'L\'accent est sur "TU" : "kon-sti-TOU-chenne".' },
    { word: 'Amendment', phonetic: '/əˈmendmənt/', meaning: 'Amendement', tip: 'L\'accent est sur "MEND" : "e-MEND-ment".' },
    { word: 'Jurisdiction', phonetic: '/ˌdʒʊrɪsˈdɪkʃən/', meaning: 'Juridiction', tip: 'L\'accent est sur "DIC" : "djou-ris-DIK-chenne".' },
    { word: 'Precedent', phonetic: '/ˈpresɪdənt/', meaning: 'Précédent', tip: 'L\'accent est sur "PRE" : "PRES-i-dent" (comme "president").' },
  ],
}
