// ─── Comprehensive Course Data for YOELANG ─────────────────────────────────
// All levels A1-C2 with units, lessons, vocabulary, quizzes, grammar, and pronunciation

// ─── Type Definitions ──────────────────────────────────────────────────────

export interface UnitData {
  id: string
  title: string
  description: string
  icon: string
  order: number
}

export interface LessonData {
  id: string
  unitId: string
  title: string
  description: string
  type: 'vocabulary' | 'grammar' | 'conversation' | 'pronunciation'
  order: number
  xpReward: number
  duration: number
}

export interface LevelCourseData {
  code: string
  name: string
  description: string
  icon: string
  color: string
  units: UnitData[]
  lessons: LessonData[]
}

export interface VocabCard {
  id: string
  english: string
  french: string
  example: string
  phonetic: string
  level?: string
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface GrammarExercise {
  id: string
  sentence: string
  answer: string
  hint: string
}

export interface PronunciationWord {
  id: string
  word: string
  phonetic: string
  tip: string
  difficulty: 'easy' | 'medium' | 'hard'
}

// ─── A1 - Beginner ─────────────────────────────────────────────────────────

const A1_UNITS: UnitData[] = [
  { id: 'a1-u1', title: 'Greetings & Introductions', description: 'Learn to greet people and introduce yourself', icon: '👋', order: 1 },
  { id: 'a1-u2', title: 'Numbers & Counting', description: 'Master numbers from 1 to 100', icon: '🔢', order: 2 },
  { id: 'a1-u3', title: 'Everyday Objects', description: 'Name common objects around you', icon: '📦', order: 3 },
  { id: 'a1-u4', title: 'Food & Drinks', description: 'Order food and talk about meals', icon: '🍽️', order: 4 },
  { id: 'a1-u5', title: 'Family & Relationships', description: 'Talk about your family members', icon: '👨‍👩‍👧‍👦', order: 5 },
  { id: 'a1-u6', title: 'Daily Routine', description: 'Describe your daily activities', icon: '⏰', order: 6 },
  { id: 'a1-u7', title: 'Around the House', description: 'Rooms, furniture, and household items', icon: '🏠', order: 7 },
  { id: 'a1-u8', title: 'At the Store', description: 'Shopping basics and asking prices', icon: '🛒', order: 8 },
]

const A1_LESSONS: LessonData[] = [
  // Unit 1: Greetings
  { id: 'a1-l1', unitId: 'a1-u1', title: 'Hello & Goodbye', description: 'Basic greetings for any situation', type: 'vocabulary', order: 1, xpReward: 15, duration: 5 },
  { id: 'a1-l2', unitId: 'a1-u1', title: 'How Are You?', description: 'Asking and answering about wellbeing', type: 'conversation', order: 2, xpReward: 20, duration: 8 },
  { id: 'a1-l3', unitId: 'a1-u1', title: 'Introducing Yourself', description: 'Say your name, age, and country', type: 'conversation', order: 3, xpReward: 20, duration: 8 },
  { id: 'a1-l4', unitId: 'a1-u1', title: 'Present Simple: Be', description: 'I am, you are, he/she is', type: 'grammar', order: 4, xpReward: 15, duration: 10 },
  { id: 'a1-l5', unitId: 'a1-u1', title: 'Greeting Sounds', description: 'Pronounce common greetings clearly', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 2: Numbers
  { id: 'a1-l6', unitId: 'a1-u2', title: 'Numbers 1-20', description: 'Count from one to twenty', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'a1-l7', unitId: 'a1-u2', title: 'Numbers 20-100', description: 'Count up to one hundred', type: 'vocabulary', order: 2, xpReward: 15, duration: 8 },
  { id: 'a1-l8', unitId: 'a1-u2', title: 'Telling the Time', description: 'Say what time it is', type: 'conversation', order: 3, xpReward: 20, duration: 8 },
  { id: 'a1-l9', unitId: 'a1-u2', title: 'Days & Months', description: 'Days of the week and months', type: 'vocabulary', order: 4, xpReward: 15, duration: 6 },
  { id: 'a1-l10', unitId: 'a1-u2', title: 'Number Pronunciation', description: 'Pronounce numbers correctly', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 3: Everyday Objects
  { id: 'a1-l11', unitId: 'a1-u3', title: 'Classroom Objects', description: 'Pen, book, table, chair', type: 'vocabulary', order: 1, xpReward: 15, duration: 5 },
  { id: 'a1-l12', unitId: 'a1-u3', title: 'Articles: A & An', description: 'When to use a vs an', type: 'grammar', order: 2, xpReward: 15, duration: 10 },
  { id: 'a1-l13', unitId: 'a1-u3', title: 'This & That', description: 'Point to objects near and far', type: 'grammar', order: 3, xpReward: 15, duration: 8 },
  { id: 'a1-l14', unitId: 'a1-u3', title: 'At the Office', description: 'Describe what you see at work', type: 'conversation', order: 4, xpReward: 20, duration: 8 },
  { id: 'a1-l15', unitId: 'a1-u3', title: 'Object Sounds', description: 'Pronounce everyday object names', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 4: Food & Drinks
  { id: 'a1-l16', unitId: 'a1-u4', title: 'Common Foods', description: 'Bread, rice, meat, vegetables', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'a1-l17', unitId: 'a1-u4', title: 'Drinks & Beverages', description: 'Water, coffee, tea, juice', type: 'vocabulary', order: 2, xpReward: 15, duration: 5 },
  { id: 'a1-l18', unitId: 'a1-u4', title: 'I Like / I Don\'t Like', description: 'Express food preferences', type: 'grammar', order: 3, xpReward: 15, duration: 8 },
  { id: 'a1-l19', unitId: 'a1-u4', title: 'Ordering at a Café', description: 'Order food and drinks politely', type: 'conversation', order: 4, xpReward: 25, duration: 10 },
  { id: 'a1-l20', unitId: 'a1-u4', title: 'Food Pronunciation', description: 'Pronounce food words correctly', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 5: Family
  { id: 'a1-l21', unitId: 'a1-u5', title: 'Family Members', description: 'Mother, father, sister, brother', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'a1-l22', unitId: 'a1-u5', title: 'Possessive Adjectives', description: 'My, your, his, her, our, their', type: 'grammar', order: 2, xpReward: 15, duration: 10 },
  { id: 'a1-l23', unitId: 'a1-u5', title: 'Describing Family', description: 'Talk about your family in detail', type: 'conversation', order: 3, xpReward: 20, duration: 8 },
  { id: 'a1-l24', unitId: 'a1-u5', title: 'Have / Has', description: 'Using have and has correctly', type: 'grammar', order: 4, xpReward: 15, duration: 8 },
  { id: 'a1-l25', unitId: 'a1-u5', title: 'Family Words Sounds', description: 'Pronounce family vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 6: Daily Routine
  { id: 'a1-l26', unitId: 'a1-u6', title: 'Morning Routine', description: 'Wake up, brush teeth, get dressed', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'a1-l27', unitId: 'a1-u6', title: 'Present Simple', description: 'Habits and routines with present simple', type: 'grammar', order: 2, xpReward: 20, duration: 10 },
  { id: 'a1-l28', unitId: 'a1-u6', title: 'A Typical Day', description: 'Describe your day from morning to night', type: 'conversation', order: 3, xpReward: 25, duration: 10 },
  { id: 'a1-l29', unitId: 'a1-u6', title: 'Time Expressions', description: 'Always, usually, sometimes, never', type: 'vocabulary', order: 4, xpReward: 15, duration: 6 },
  { id: 'a1-l30', unitId: 'a1-u6', title: 'Routine Verbs Sounds', description: 'Pronounce daily routine verbs', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 7: Around the House
  { id: 'a1-l31', unitId: 'a1-u7', title: 'Rooms in a House', description: 'Kitchen, bedroom, bathroom, living room', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'a1-l32', unitId: 'a1-u7', title: 'Furniture & Appliances', description: 'Sofa, bed, fridge, television', type: 'vocabulary', order: 2, xpReward: 15, duration: 6 },
  { id: 'a1-l33', unitId: 'a1-u7', title: 'There is / There are', description: 'Describe what exists in a room', type: 'grammar', order: 3, xpReward: 15, duration: 8 },
  { id: 'a1-l34', unitId: 'a1-u7', title: 'My Home', description: 'Describe your house or apartment', type: 'conversation', order: 4, xpReward: 20, duration: 10 },
  { id: 'a1-l35', unitId: 'a1-u7', title: 'House Words Sounds', description: 'Pronounce house-related words', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 8: At the Store
  { id: 'a1-l36', unitId: 'a1-u8', title: 'Shopping Vocabulary', description: 'Buy, sell, price, cheap, expensive', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'a1-l37', unitId: 'a1-u8', title: 'How Much Is It?', description: 'Ask about prices and quantities', type: 'conversation', order: 2, xpReward: 20, duration: 8 },
  { id: 'a1-l38', unitId: 'a1-u8', title: 'Can I Have...?', description: 'Polite requests in a store', type: 'grammar', order: 3, xpReward: 15, duration: 8 },
  { id: 'a1-l39', unitId: 'a1-u8', title: 'Colors & Sizes', description: 'Describe items by color and size', type: 'vocabulary', order: 4, xpReward: 15, duration: 6 },
  { id: 'a1-l40', unitId: 'a1-u8', title: 'Shopping Sounds', description: 'Pronounce shopping vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
]

// ─── A2 - Elementary ────────────────────────────────────────────────────────

const A2_UNITS: UnitData[] = [
  { id: 'a2-u1', title: 'Weather & Seasons', description: 'Talk about weather and seasons', icon: '🌤️', order: 1 },
  { id: 'a2-u2', title: 'Travel & Transportation', description: 'Navigate airports, trains, and buses', icon: '✈️', order: 2 },
  { id: 'a2-u3', title: 'At the Restaurant', description: 'Order meals and discuss food preferences', icon: '🍽️', order: 3 },
  { id: 'a2-u4', title: 'Health & Body', description: 'Describe symptoms and visit the doctor', icon: '🏥', order: 4 },
  { id: 'a2-u5', title: 'Shopping & Clothes', description: 'Buy clothing and discuss fashion', icon: '👗', order: 5 },
  { id: 'a2-u6', title: 'Hobbies & Free Time', description: 'Discuss leisure activities and interests', icon: '🎨', order: 6 },
  { id: 'a2-u7', title: 'Work & Professions', description: 'Talk about jobs and workplaces', icon: '💼', order: 7 },
  { id: 'a2-u8', title: 'Education & School', description: 'Discuss studies and academic life', icon: '📚', order: 8 },
  { id: 'a2-u9', title: 'Housing & Neighborhood', description: 'Find housing and meet neighbors', icon: '🏘️', order: 9 },
  { id: 'a2-u10', title: 'Technology Basics', description: 'Use phones, computers, and the internet', icon: '💻', order: 10 },
]

const A2_LESSONS: LessonData[] = [
  // Unit 1: Weather
  { id: 'a2-l1', unitId: 'a2-u1', title: 'Weather Vocabulary', description: 'Sunny, rainy, cloudy, windy, snowy', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'a2-l2', unitId: 'a2-u1', title: 'It\'s Going to Rain', description: 'Future predictions with "going to"', type: 'grammar', order: 2, xpReward: 15, duration: 8 },
  { id: 'a2-l3', unitId: 'a2-u1', title: 'Seasons & Activities', description: 'What people do in each season', type: 'conversation', order: 3, xpReward: 20, duration: 10 },
  { id: 'a2-l4', unitId: 'a2-u1', title: 'Comparing Weather', description: 'Hotter than, colder than, as warm as', type: 'grammar', order: 4, xpReward: 15, duration: 8 },
  { id: 'a2-l5', unitId: 'a2-u1', title: 'Weather Sounds', description: 'Pronounce weather vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 2: Travel
  { id: 'a2-l6', unitId: 'a2-u2', title: 'Travel Words', description: 'Journey, ticket, luggage, destination', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'a2-l7', unitId: 'a2-u2', title: 'At the Airport', description: 'Check-in, boarding, customs', type: 'conversation', order: 2, xpReward: 25, duration: 12 },
  { id: 'a2-l8', unitId: 'a2-u2', title: 'Taking the Train', description: 'Buy tickets and find your platform', type: 'conversation', order: 3, xpReward: 20, duration: 10 },
  { id: 'a2-l9', unitId: 'a2-u2', title: 'Past Simple: Regular', description: 'Talk about past travel experiences', type: 'grammar', order: 4, xpReward: 15, duration: 10 },
  { id: 'a2-l10', unitId: 'a2-u2', title: 'Travel Sounds', description: 'Pronounce travel vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 3: Restaurant
  { id: 'a2-l11', unitId: 'a2-u3', title: 'Restaurant Vocabulary', description: 'Menu, appetizer, main course, dessert', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'a2-l12', unitId: 'a2-u3', title: 'Ordering a Meal', description: 'Place your order politely', type: 'conversation', order: 2, xpReward: 25, duration: 12 },
  { id: 'a2-l13', unitId: 'a2-u3', title: 'Countable & Uncountable', description: 'Much, many, some, any with food', type: 'grammar', order: 3, xpReward: 15, duration: 10 },
  { id: 'a2-l14', unitId: 'a2-u3', title: 'Complaining Politely', description: 'Express dissatisfaction respectfully', type: 'conversation', order: 4, xpReward: 20, duration: 10 },
  { id: 'a2-l15', unitId: 'a2-u3', title: 'Restaurant Sounds', description: 'Pronounce restaurant terms', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 4: Health
  { id: 'a2-l16', unitId: 'a2-u4', title: 'Body Parts', description: 'Head, shoulders, arm, leg, chest', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'a2-l17', unitId: 'a2-u4', title: 'Common Illnesses', description: 'Headache, fever, cold, cough', type: 'vocabulary', order: 2, xpReward: 15, duration: 6 },
  { id: 'a2-l18', unitId: 'a2-u4', title: 'At the Doctor', description: 'Describe symptoms and get advice', type: 'conversation', order: 3, xpReward: 25, duration: 12 },
  { id: 'a2-l19', unitId: 'a2-u4', title: 'Should / Must', description: 'Give health advice and obligations', type: 'grammar', order: 4, xpReward: 15, duration: 8 },
  { id: 'a2-l20', unitId: 'a2-u4', title: 'Health Sounds', description: 'Pronounce health vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 5: Shopping & Clothes
  { id: 'a2-l21', unitId: 'a2-u5', title: 'Clothing Vocabulary', description: 'Shirt, dress, pants, jacket, shoes', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'a2-l22', unitId: 'a2-u5', title: 'Trying Things On', description: 'Ask for sizes and try on clothes', type: 'conversation', order: 2, xpReward: 20, duration: 10 },
  { id: 'a2-l23', unitId: 'a2-u5', title: 'Comparatives', description: 'Cheaper, more expensive, better', type: 'grammar', order: 3, xpReward: 15, duration: 8 },
  { id: 'a2-l24', unitId: 'a2-u5', title: 'Return & Exchange', description: 'Return or exchange items', type: 'conversation', order: 4, xpReward: 20, duration: 8 },
  { id: 'a2-l25', unitId: 'a2-u5', title: 'Clothing Sounds', description: 'Pronounce clothing words', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 6: Hobbies
  { id: 'a2-l26', unitId: 'a2-u6', title: 'Hobby Vocabulary', description: 'Swimming, painting, cooking, reading', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'a2-l27', unitId: 'a2-u6', title: 'Past Simple: Irregular', description: 'Went, saw, ate, drank, took', type: 'grammar', order: 2, xpReward: 20, duration: 10 },
  { id: 'a2-l28', unitId: 'a2-u6', title: 'What Did You Do?', description: 'Talk about past weekend activities', type: 'conversation', order: 3, xpReward: 25, duration: 10 },
  { id: 'a2-l29', unitId: 'a2-u6', title: 'Likes & Dislikes', description: 'Express preferences about activities', type: 'grammar', order: 4, xpReward: 15, duration: 8 },
  { id: 'a2-l30', unitId: 'a2-u6', title: 'Hobby Sounds', description: 'Pronounce hobby vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 7: Work
  { id: 'a2-l31', unitId: 'a2-u7', title: 'Job Vocabulary', description: 'Teacher, doctor, engineer, mechanic', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'a2-l32', unitId: 'a2-u7', title: 'Present Continuous', description: 'What are you doing right now?', type: 'grammar', order: 2, xpReward: 15, duration: 8 },
  { id: 'a2-l33', unitId: 'a2-u7', title: 'Job Interview Basics', description: 'Answer simple interview questions', type: 'conversation', order: 3, xpReward: 25, duration: 12 },
  { id: 'a2-l34', unitId: 'a2-u7', title: 'Workplace English', description: 'Common phrases at the office', type: 'vocabulary', order: 4, xpReward: 15, duration: 8 },
  { id: 'a2-l35', unitId: 'a2-u7', title: 'Work Sounds', description: 'Pronounce profession names', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 8: Education
  { id: 'a2-l36', unitId: 'a2-u8', title: 'School Vocabulary', description: 'Student, homework, exam, library', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'a2-l37', unitId: 'a2-u8', title: 'Future with Will', description: 'Make predictions about the future', type: 'grammar', order: 2, xpReward: 15, duration: 8 },
  { id: 'a2-l38', unitId: 'a2-u8', title: 'Study Plans', description: 'Discuss your education goals', type: 'conversation', order: 3, xpReward: 20, duration: 10 },
  { id: 'a2-l39', unitId: 'a2-u8', title: 'Imperatives', description: 'Give instructions and directions', type: 'grammar', order: 4, xpReward: 15, duration: 8 },
  { id: 'a2-l40', unitId: 'a2-u8', title: 'Education Sounds', description: 'Pronounce school vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 9: Housing
  { id: 'a2-l41', unitId: 'a2-u9', title: 'Housing Vocabulary', description: 'Apartment, rent, neighbor, landlord', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'a2-l42', unitId: 'a2-u9', title: 'Prepositions of Place', description: 'Next to, across from, between', type: 'grammar', order: 2, xpReward: 15, duration: 8 },
  { id: 'a2-l43', unitId: 'a2-u9', title: 'Finding an Apartment', description: 'Call about a rental listing', type: 'conversation', order: 3, xpReward: 25, duration: 12 },
  { id: 'a2-l44', unitId: 'a2-u9', title: 'Describing Your Neighborhood', description: 'Talk about where you live', type: 'conversation', order: 4, xpReward: 20, duration: 10 },
  { id: 'a2-l45', unitId: 'a2-u9', title: 'Housing Sounds', description: 'Pronounce housing vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 10: Technology
  { id: 'a2-l46', unitId: 'a2-u10', title: 'Tech Vocabulary', description: 'Phone, computer, internet, email', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'a2-l47', unitId: 'a2-u10', title: 'Can / Could', description: 'Ability and permission with tech', type: 'grammar', order: 2, xpReward: 15, duration: 8 },
  { id: 'a2-l48', unitId: 'a2-u10', title: 'Tech Problems', description: 'Describe phone and computer issues', type: 'conversation', order: 3, xpReward: 20, duration: 10 },
  { id: 'a2-l49', unitId: 'a2-u10', title: 'Online Life', description: 'Discuss social media and apps', type: 'vocabulary', order: 4, xpReward: 15, duration: 8 },
  { id: 'a2-l50', unitId: 'a2-u10', title: 'Tech Sounds', description: 'Pronounce technology vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
]

// ─── B1 - Intermediate ──────────────────────────────────────────────────────

const B1_UNITS: UnitData[] = [
  { id: 'b1-u1', title: 'News & Media', description: 'Understand news reports and articles', icon: '📰', order: 1 },
  { id: 'b1-u2', title: 'Environment & Nature', description: 'Discuss environmental issues', icon: '🌍', order: 2 },
  { id: 'b1-u3', title: 'Relationships & Emotions', description: 'Express feelings and discuss relationships', icon: '❤️', order: 3 },
  { id: 'b1-u4', title: 'Culture & Traditions', description: 'Explore cultural customs and holidays', icon: '🎭', order: 4 },
  { id: 'b1-u5', title: 'Business English Basics', description: 'Essential workplace communication', icon: '📊', order: 5 },
  { id: 'b1-u6', title: 'Health & Wellness', description: 'Nutrition, exercise, and mental health', icon: '🧘', order: 6 },
  { id: 'b1-u7', title: 'Travel Experiences', description: 'Share travel stories and adventures', icon: '🗺️', order: 7 },
  { id: 'b1-u8', title: 'Social Issues', description: 'Discuss equality, education, and poverty', icon: '⚖️', order: 8 },
  { id: 'b1-u9', title: 'Arts & Entertainment', description: 'Museums, concerts, and films', icon: '🎬', order: 9 },
  { id: 'b1-u10', title: 'Science & Technology', description: 'Research, innovation, and experiments', icon: '🔬', order: 10 },
  { id: 'b1-u11', title: 'Finance & Money', description: 'Budget, savings, and investments', icon: '💰', order: 11 },
  { id: 'b1-u12', title: 'Law & Rights', description: 'Justice, freedom, and responsibility', icon: '⚖️', order: 12 },
]

const B1_LESSONS: LessonData[] = [
  // Unit 1: News & Media
  { id: 'b1-l1', unitId: 'b1-u1', title: 'News Vocabulary', description: 'Article, report, headline, broadcast', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'b1-l2', unitId: 'b1-u1', title: 'Passive Voice: Present', description: 'The report is published every day', type: 'grammar', order: 2, xpReward: 20, duration: 10 },
  { id: 'b1-l3', unitId: 'b1-u1', title: 'Discussing the News', description: 'Share opinions about current events', type: 'conversation', order: 3, xpReward: 25, duration: 12 },
  { id: 'b1-l4', unitId: 'b1-u1', title: 'Reported Speech', description: 'She said that the meeting was canceled', type: 'grammar', order: 4, xpReward: 20, duration: 10 },
  { id: 'b1-l5', unitId: 'b1-u1', title: 'News Sounds', description: 'Pronounce media vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 2: Environment
  { id: 'b1-l6', unitId: 'b1-u2', title: 'Environment Vocabulary', description: 'Climate, pollution, recycle, conservation', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'b1-l7', unitId: 'b1-u2', title: 'First Conditional', description: 'If we don\'t act, the climate will change', type: 'grammar', order: 2, xpReward: 20, duration: 10 },
  { id: 'b1-l8', unitId: 'b1-u2', title: 'Environmental Debate', description: 'Discuss solutions for climate change', type: 'conversation', order: 3, xpReward: 25, duration: 12 },
  { id: 'b1-l9', unitId: 'b1-u2', title: 'Relative Clauses', description: 'The planet which we live on is fragile', type: 'grammar', order: 4, xpReward: 20, duration: 10 },
  { id: 'b1-l10', unitId: 'b1-u2', title: 'Environment Sounds', description: 'Pronounce environmental terms', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Units 3-12 follow same pattern...
  { id: 'b1-l11', unitId: 'b1-u3', title: 'Emotions Vocabulary', description: 'Happiness, anger, sadness, excitement', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'b1-l12', unitId: 'b1-u3', title: 'Second Conditional', description: 'If I were you, I would apologize', type: 'grammar', order: 2, xpReward: 20, duration: 10 },
  { id: 'b1-l13', unitId: 'b1-u3', title: 'Expressing Feelings', description: 'Talk about emotions and relationships', type: 'conversation', order: 3, xpReward: 25, duration: 12 },
  { id: 'b1-l14', unitId: 'b1-u3', title: 'Phrasal Verbs: Emotions', description: 'Cheer up, calm down, break down', type: 'vocabulary', order: 4, xpReward: 15, duration: 8 },
  { id: 'b1-l15', unitId: 'b1-u3', title: 'Emotion Sounds', description: 'Pronounce emotion vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 4: Culture
  { id: 'b1-l16', unitId: 'b1-u4', title: 'Culture Vocabulary', description: 'Festival, custom, heritage, tradition', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'b1-l17', unitId: 'b1-u4', title: 'Past Perfect', description: 'She had never seen snow before that day', type: 'grammar', order: 2, xpReward: 20, duration: 10 },
  { id: 'b1-l18', unitId: 'b1-u4', title: 'Cultural Exchange', description: 'Discuss traditions from different countries', type: 'conversation', order: 3, xpReward: 25, duration: 12 },
  { id: 'b1-l19', unitId: 'b1-u4', title: 'Used To', description: 'People used to celebrate differently', type: 'grammar', order: 4, xpReward: 15, duration: 8 },
  { id: 'b1-l20', unitId: 'b1-u4', title: 'Culture Sounds', description: 'Pronounce cultural vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 5: Business
  { id: 'b1-l21', unitId: 'b1-u5', title: 'Business Vocabulary', description: 'Meeting, deadline, schedule, client', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'b1-l22', unitId: 'b1-u5', title: 'Formal Emails', description: 'Write professional email phrases', type: 'grammar', order: 2, xpReward: 20, duration: 10 },
  { id: 'b1-l23', unitId: 'b1-u5', title: 'Business Meeting', description: 'Participate in a team meeting', type: 'conversation', order: 3, xpReward: 25, duration: 12 },
  { id: 'b1-l24', unitId: 'b1-u5', title: 'Making Suggestions', description: 'Propose ideas in the workplace', type: 'grammar', order: 4, xpReward: 15, duration: 8 },
  { id: 'b1-l25', unitId: 'b1-u5', title: 'Business Sounds', description: 'Pronounce business vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Unit 6: Health & Wellness
  { id: 'b1-l26', unitId: 'b1-u6', title: 'Wellness Vocabulary', description: 'Nutrition, exercise, meditation, stress', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'b1-l27', unitId: 'b1-u6', title: 'Modals of Deduction', description: 'Must be, might be, can\'t be', type: 'grammar', order: 2, xpReward: 20, duration: 10 },
  { id: 'b1-l28', unitId: 'b1-u6', title: 'Healthy Lifestyle', description: 'Discuss diet and fitness routines', type: 'conversation', order: 3, xpReward: 25, duration: 12 },
  { id: 'b1-l29', unitId: 'b1-u6', title: 'Giving Advice', description: 'Should, ought to, had better', type: 'grammar', order: 4, xpReward: 15, duration: 8 },
  { id: 'b1-l30', unitId: 'b1-u6', title: 'Wellness Sounds', description: 'Pronounce health vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Units 7-12
  { id: 'b1-l31', unitId: 'b1-u7', title: 'Travel Vocabulary', description: 'Adventure, destination, itinerary, excursion', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'b1-l32', unitId: 'b1-u7', title: 'Present Perfect', description: 'I have visited many countries', type: 'grammar', order: 2, xpReward: 20, duration: 10 },
  { id: 'b1-l33', unitId: 'b1-u7', title: 'Travel Stories', description: 'Share your travel experiences', type: 'conversation', order: 3, xpReward: 25, duration: 12 },
  { id: 'b1-l34', unitId: 'b1-u7', title: 'Superlatives', description: 'The most beautiful, the best, the worst', type: 'grammar', order: 4, xpReward: 15, duration: 8 },
  { id: 'b1-l35', unitId: 'b1-u7', title: 'Travel Sounds', description: 'Pronounce travel vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  { id: 'b1-l36', unitId: 'b1-u8', title: 'Social Issues Vocabulary', description: 'Equality, poverty, discrimination, rights', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'b1-l37', unitId: 'b1-u8', title: 'Agreeing & Disagreeing', description: 'Express opinions politely', type: 'grammar', order: 2, xpReward: 20, duration: 10 },
  { id: 'b1-l38', unitId: 'b1-u8', title: 'Debating Issues', description: 'Discuss social challenges', type: 'conversation', order: 3, xpReward: 25, duration: 12 },
  { id: 'b1-l39', unitId: 'b1-u8', title: 'Passive Voice: Past', description: 'The law was passed last year', type: 'grammar', order: 4, xpReward: 20, duration: 10 },
  { id: 'b1-l40', unitId: 'b1-u8', title: 'Social Issues Sounds', description: 'Pronounce social vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  { id: 'b1-l41', unitId: 'b1-u9', title: 'Arts Vocabulary', description: 'Museum, exhibition, performance, gallery', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'b1-l42', unitId: 'b1-u9', title: 'Gerunds & Infinitives', description: 'Enjoy watching vs want to watch', type: 'grammar', order: 2, xpReward: 20, duration: 10 },
  { id: 'b1-l43', unitId: 'b1-u9', title: 'Art Critique', description: 'Express opinions about art and film', type: 'conversation', order: 3, xpReward: 25, duration: 12 },
  { id: 'b1-l44', unitId: 'b1-u9', title: 'Adverbs of Degree', description: 'Absolutely, extremely, quite, fairly', type: 'grammar', order: 4, xpReward: 15, duration: 8 },
  { id: 'b1-l45', unitId: 'b1-u9', title: 'Arts Sounds', description: 'Pronounce arts vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  { id: 'b1-l46', unitId: 'b1-u10', title: 'Science Vocabulary', description: 'Research, experiment, hypothesis, data', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'b1-l47', unitId: 'b1-u10', title: 'Future Perfect', description: 'By 2030, scientists will have discovered', type: 'grammar', order: 2, xpReward: 20, duration: 10 },
  { id: 'b1-l48', unitId: 'b1-u10', title: 'Tech Discussion', description: 'Discuss technology impacts', type: 'conversation', order: 3, xpReward: 25, duration: 12 },
  { id: 'b1-l49', unitId: 'b1-u10', title: 'Causative Have', description: 'Have something done / get something fixed', type: 'grammar', order: 4, xpReward: 15, duration: 8 },
  { id: 'b1-l50', unitId: 'b1-u10', title: 'Science Sounds', description: 'Pronounce science vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  { id: 'b1-l51', unitId: 'b1-u11', title: 'Finance Vocabulary', description: 'Budget, investment, savings, debt', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'b1-l52', unitId: 'b1-u11', title: 'Third Conditional', description: 'If I had saved more, I would have bought it', type: 'grammar', order: 2, xpReward: 20, duration: 10 },
  { id: 'b1-l53', unitId: 'b1-u11', title: 'Financial Planning', description: 'Discuss money management strategies', type: 'conversation', order: 3, xpReward: 25, duration: 12 },
  { id: 'b1-l54', unitId: 'b1-u11', title: 'Wish & If Only', description: 'I wish I had more savings', type: 'grammar', order: 4, xpReward: 15, duration: 8 },
  { id: 'b1-l55', unitId: 'b1-u11', title: 'Finance Sounds', description: 'Pronounce financial vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  { id: 'b1-l56', unitId: 'b1-u12', title: 'Law Vocabulary', description: 'Justice, freedom, responsibility, rights', type: 'vocabulary', order: 1, xpReward: 15, duration: 6 },
  { id: 'b1-l57', unitId: 'b1-u12', title: 'Modal Verbs: Obligation', description: 'Must, have to, should, need to', type: 'grammar', order: 2, xpReward: 20, duration: 10 },
  { id: 'b1-l58', unitId: 'b1-u12', title: 'Legal Discussion', description: 'Discuss rights and responsibilities', type: 'conversation', order: 3, xpReward: 25, duration: 12 },
  { id: 'b1-l59', unitId: 'b1-u12', title: 'Question Tags', description: 'It\'s illegal, isn\'t it?', type: 'grammar', order: 4, xpReward: 15, duration: 8 },
  { id: 'b1-l60', unitId: 'b1-u12', title: 'Law Sounds', description: 'Pronounce legal vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
]

// ─── B2 - Upper Intermediate ────────────────────────────────────────────────

const B2_UNITS: UnitData[] = [
  { id: 'b2-u1', title: 'Professional Communication', description: 'Negotiation, proposals, and feedback', icon: '🤝', order: 1 },
  { id: 'b2-u2', title: 'Academic English', description: 'Thesis, research, and methodology', icon: '🎓', order: 2 },
  { id: 'b2-u3', title: 'Politics & Government', description: 'Democracy, elections, and parliament', icon: '🏛️', order: 3 },
  { id: 'b2-u4', title: 'Philosophy & Ethics', description: 'Morality, truth, and consciousness', icon: '🤔', order: 4 },
  { id: 'b2-u5', title: 'Advanced Business', description: 'Strategy, mergers, and stakeholders', icon: '📈', order: 5 },
  { id: 'b2-u6', title: 'Medicine & Healthcare', description: 'Diagnosis, treatment, and surgery', icon: '⚕️', order: 6 },
  { id: 'b2-u7', title: 'Engineering & Innovation', description: 'Prototypes, patents, and infrastructure', icon: '🔧', order: 7 },
  { id: 'b2-u8', title: 'Literature & Poetry', description: 'Metaphor, narrative, and symbolism', icon: '📖', order: 8 },
  { id: 'b2-u9', title: 'Psychology & Behavior', description: 'Cognition, personality, and therapy', icon: '🧠', order: 9 },
  { id: 'b2-u10', title: 'Global Economy', description: 'Inflation, trade, and GDP', icon: '🌐', order: 10 },
  { id: 'b2-u11', title: 'Legal English', description: 'Contracts, litigation, and compliance', icon: '⚖️', order: 11 },
  { id: 'b2-u12', title: 'Advanced Writing', description: 'Essays, dissertations, and editorials', icon: '✍️', order: 12 },
]

const B2_LESSONS: LessonData[] = [
  { id: 'b2-l1', unitId: 'b2-u1', title: 'Negotiation Vocabulary', description: 'Compromise, terms, agreement, leverage', type: 'vocabulary', order: 1, xpReward: 20, duration: 8 },
  { id: 'b2-l2', unitId: 'b2-u1', title: 'Conditional Review', description: 'Mixed conditionals for business scenarios', type: 'grammar', order: 2, xpReward: 20, duration: 12 },
  { id: 'b2-l3', unitId: 'b2-u1', title: 'Business Negotiation', description: 'Negotiate terms and reach agreements', type: 'conversation', order: 3, xpReward: 30, duration: 15 },
  { id: 'b2-l4', unitId: 'b2-u1', title: 'Giving Feedback', description: 'Constructive criticism and praise', type: 'grammar', order: 4, xpReward: 20, duration: 10 },
  { id: 'b2-l5', unitId: 'b2-u1', title: 'Professional Sounds', description: 'Pronounce professional vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  { id: 'b2-l6', unitId: 'b2-u2', title: 'Academic Vocabulary', description: 'Thesis, methodology, literature review', type: 'vocabulary', order: 1, xpReward: 20, duration: 8 },
  { id: 'b2-l7', unitId: 'b2-u2', title: 'Hedging & Caution', description: 'It appears that, tends to, may suggest', type: 'grammar', order: 2, xpReward: 20, duration: 12 },
  { id: 'b2-l8', unitId: 'b2-u2', title: 'Academic Discussion', description: 'Present and critique research findings', type: 'conversation', order: 3, xpReward: 30, duration: 15 },
  { id: 'b2-l9', unitId: 'b2-u2', title: 'Nominalization', description: 'Using noun phrases in academic writing', type: 'grammar', order: 4, xpReward: 20, duration: 10 },
  { id: 'b2-l10', unitId: 'b2-u2', title: 'Academic Sounds', description: 'Pronounce academic vocabulary', type: 'pronunciation', order: 5, xpReward: 15, duration: 6 },
  // Remaining B2 units (3-12) - abbreviated for file size
  ...generateLessonsForUnit('b2', 'b2-u3', 'Politics', ['Democracy', 'Elections', 'Parliamentary Debate', 'Political Systems', 'Political Sounds'], 3),
  ...generateLessonsForUnit('b2', 'b2-u4', 'Philosophy', ['Ethics Vocabulary', 'Logical Connectors', 'Moral Dilemmas', 'Argumentation', 'Philosophy Sounds'], 4),
  ...generateLessonsForUnit('b2', 'b2-u5', 'Adv Business', ['Corporate Vocabulary', 'Reported Speech Advanced', 'Board Meeting', 'Strategic Planning', 'Business Sounds'], 5),
  ...generateLessonsForUnit('b2', 'b2-u6', 'Medicine', ['Medical Vocabulary', 'Passive Advanced', 'Doctor-Patient Talk', 'Research Findings', 'Medical Sounds'], 6),
  ...generateLessonsForUnit('b2', 'b2-u7', 'Engineering', ['Engineering Vocabulary', 'Technical Descriptions', 'Design Review', 'Process Explanation', 'Engineering Sounds'], 7),
  ...generateLessonsForUnit('b2', 'b2-u8', 'Literature', ['Literary Terms', 'Metaphor & Simile', 'Book Discussion', 'Narrative Techniques', 'Literature Sounds'], 8),
  ...generateLessonsForUnit('b2', 'b2-u9', 'Psychology', ['Psychology Vocabulary', 'Complex Sentences', 'Behavioral Analysis', 'Case Study Discussion', 'Psychology Sounds'], 9),
  ...generateLessonsForUnit('b2', 'b2-u10', 'Economy', ['Economic Vocabulary', 'Inversion', 'Economic Debate', 'Market Analysis', 'Economy Sounds'], 10),
  ...generateLessonsForUnit('b2', 'b2-u11', 'Legal', ['Legal Vocabulary', 'Formal Register', 'Contract Discussion', 'Legal Argument', 'Legal Sounds'], 11),
  ...generateLessonsForUnit('b2', 'b2-u12', 'Writing', ['Writing Vocabulary', 'Cohesion & Coherence', 'Editorial Writing', 'Essay Structure', 'Writing Sounds'], 12),
]

// ─── C1 - Advanced ──────────────────────────────────────────────────────────

const C1_UNITS: UnitData[] = [
  { id: 'c1-u1', title: 'Diplomatic English', description: 'Ambassador, treaty, and negotiation language', icon: '🏛️', order: 1 },
  { id: 'c1-u2', title: 'Academic Research', description: 'Hypothesis, peer review, and citation', icon: '🔬', order: 2 },
  { id: 'c1-u3', title: 'Advanced Literature', description: 'Critique, genre, and postmodernism', icon: '📚', order: 3 },
  { id: 'c1-u4', title: 'Corporate Strategy', description: 'Stakeholder, benchmark, and vision', icon: '🏢', order: 4 },
  { id: 'c1-u5', title: 'International Relations', description: 'Sovereignty, diplomacy, and sanctions', icon: '🌍', order: 5 },
  { id: 'c1-u6', title: 'Medical Research', description: 'Clinical trial, placebo, and epidemiology', icon: '💊', order: 6 },
  { id: 'c1-u7', title: 'Technical Writing', description: 'Documentation, specification, and manuals', icon: '📋', order: 7 },
  { id: 'c1-u8', title: 'Debate & Persuasion', description: 'Rhetoric, argumentation, and rebuttal', icon: '🎤', order: 8 },
  { id: 'c1-u9', title: 'Cultural Nuances', description: 'Idiom, connotation, and pragmatics', icon: '🌐', order: 9 },
  { id: 'c1-u10', title: 'Financial Markets', description: 'Derivative, portfolio, and hedge fund', icon: '💹', order: 10 },
  { id: 'c1-u11', title: 'Constitutional Law', description: 'Amendment, jurisdiction, and precedent', icon: '⚖️', order: 11 },
  { id: 'c1-u12', title: 'Scientific Discourse', description: 'Empirical, theoretical, and paradigm', icon: '🧪', order: 12 },
  { id: 'c1-u13', title: 'Media Analysis', description: 'Bias, framing, and editorial analysis', icon: '📡', order: 13 },
  { id: 'c1-u14', title: 'Advanced Idioms', description: 'Colloquialism, euphemism, and phrasal verbs', icon: '💬', order: 14 },
]

const C1_LESSONS: LessonData[] = [
  ...generateLessonsForUnit('c1', 'c1-u1', 'Diplomacy', ['Diplomatic Vocabulary', 'Tactful Language', 'Treaty Negotiation', 'Formal Register', 'Diplomacy Sounds'], 1),
  ...generateLessonsForUnit('c1', 'c1-u2', 'Research', ['Research Vocabulary', 'Academic Conventions', 'Peer Review', 'Research Presentation', 'Research Sounds'], 2),
  ...generateLessonsForUnit('c1', 'c1-u3', 'Literature', ['Literary Criticism', 'Narrative Theory', 'Book Club Discussion', 'Deconstructive Analysis', 'Literature Sounds'], 3),
  ...generateLessonsForUnit('c1', 'c1-u4', 'Strategy', ['Strategy Vocabulary', 'Complex Conditionals', 'Strategic Planning', 'Stakeholder Communication', 'Strategy Sounds'], 4),
  ...generateLessonsForUnit('c1', 'c1-u5', 'Intl Relations', ['IR Vocabulary', 'Formal Discourse Markers', 'Diplomatic Crisis', 'Summit Discussion', 'IR Sounds'], 5),
  ...generateLessonsForUnit('c1', 'c1-u6', 'Med Research', ['Medical Research Terms', 'Impersonal Passive', 'Clinical Discussion', 'Research Ethics', 'Medical Sounds'], 6),
  ...generateLessonsForUnit('c1', 'c1-u7', 'Tech Writing', ['Technical Vocabulary', 'Concise Expression', 'Documentation Standards', 'Specification Review', 'Tech Writing Sounds'], 7),
  ...generateLessonsForUnit('c1', 'c1-u8', 'Debate', ['Rhetoric Vocabulary', 'Persuasive Structures', 'Formal Debate', 'Rebuttal Techniques', 'Debate Sounds'], 8),
  ...generateLessonsForUnit('c1', 'c1-u9', 'Culture', ['Cultural Vocabulary', 'Connotation & Pragmatics', 'Cross-cultural Talk', 'Cultural Misunderstandings', 'Culture Sounds'], 9),
  ...generateLessonsForUnit('c1', 'c1-u10', 'Finance', ['Finance Vocabulary', 'Advanced Quantifiers', 'Market Analysis', 'Investment Discussion', 'Finance Sounds'], 10),
  ...generateLessonsForUnit('c1', 'c1-u11', 'Law', ['Legal Vocabulary', 'Legal Conditionals', 'Case Discussion', 'Precedent Analysis', 'Law Sounds'], 11),
  ...generateLessonsForUnit('c1', 'c1-u12', 'Science', ['Science Vocabulary', 'Hypothesis Language', 'Scientific Presentation', 'Paradigm Discussion', 'Science Sounds'], 12),
  ...generateLessonsForUnit('c1', 'c1-u13', 'Media', ['Media Vocabulary', 'Bias Detection', 'Editorial Analysis', 'Media Critique', 'Media Sounds'], 13),
  ...generateLessonsForUnit('c1', 'c1-u14', 'Idioms', ['Idiom Vocabulary', 'Euphemism & Register', 'Idiom in Context', 'Advanced Phrasal Verbs', 'Idiom Sounds'], 14),
]

// ─── C2 - Mastery ───────────────────────────────────────────────────────────

const C2_UNITS: UnitData[] = [
  { id: 'c2-u1', title: 'Native-level Expressions', description: 'Slang, dialect, and register variation', icon: '🗣️', order: 1 },
  { id: 'c2-u2', title: 'Literary Analysis', description: 'Deconstruction, hermeneutics, and semiotics', icon: '🎭', order: 2 },
  { id: 'c2-u3', title: 'Philosophical Discourse', description: 'Existentialism, phenomenology, epistemology', icon: '💡', order: 3 },
  { id: 'c2-u4', title: 'Advanced Rhetoric', description: 'Oratory, polemic, and sophistry', icon: '🎤', order: 4 },
  { id: 'c2-u5', title: 'Cultural Fluency', description: 'Cultural literacy and intertextuality', icon: '🌍', order: 5 },
  { id: 'c2-u6', title: 'Specialized Terminology', description: 'Jargon, nomenclature, and taxonomy', icon: '📋', order: 6 },
  { id: 'c2-u7', title: 'Humor & Wit', description: 'Irony, satire, and wordplay', icon: '😄', order: 7 },
  { id: 'c2-u8', title: 'Poetic Language', description: 'Meter, alliteration, and enjambment', icon: '🌸', order: 8 },
  { id: 'c2-u9', title: 'Academic Publishing', description: 'Peer review, impact factor, and monographs', icon: '📕', order: 9 },
  { id: 'c2-u10', title: 'Political Commentary', description: 'Punditry, editorial, and polemic', icon: '🏛️', order: 10 },
  { id: 'c2-u11', title: 'Ethical Discourse', description: 'Bioethics, utilitarianism, and deontology', icon: '⚖️', order: 11 },
  { id: 'c2-u12', title: 'Art Criticism', description: 'Aesthetics, curating, and provenance', icon: '🎨', order: 12 },
  { id: 'c2-u13', title: 'Scientific Innovation', description: 'Breakthrough, paradigm shift, and frontier', icon: '🔬', order: 13 },
  { id: 'c2-u14', title: 'Near-native Perfection', description: 'Fluency, nuance, and complete mastery', icon: '👑', order: 14 },
]

const C2_LESSONS: LessonData[] = [
  ...generateLessonsForUnit('c2', 'c2-u1', 'Native Expressions', ['Slang Vocabulary', 'Register Shifts', 'Native Conversation', 'Dialect Features', 'Native Sounds'], 1),
  ...generateLessonsForUnit('c2', 'c2-u2', 'Literary Analysis', ['Analysis Vocabulary', 'Deconstructive Reading', 'Seminar Discussion', 'Theoretical Framework', 'Analysis Sounds'], 2),
  ...generateLessonsForUnit('c2', 'c2-u3', 'Philosophy', ['Philosophy Vocabulary', 'Abstract Argumentation', 'Philosophical Debate', 'Phenomenological Description', 'Philosophy Sounds'], 3),
  ...generateLessonsForUnit('c2', 'c2-u4', 'Rhetoric', ['Rhetoric Vocabulary', 'Oratorical Devices', 'Persuasive Speech', 'Sophistical Analysis', 'Rhetoric Sounds'], 4),
  ...generateLessonsForUnit('c2', 'c2-u5', 'Cultural Fluency', ['Fluency Vocabulary', 'Intertextual References', 'Cultural Dialogue', 'Cultural Competence', 'Fluency Sounds'], 5),
  ...generateLessonsForUnit('c2', 'c2-u6', 'Terminology', ['Terminology Vocabulary', 'Taxonomic Language', 'Expert Discussion', 'Field-specific Writing', 'Terminology Sounds'], 6),
  ...generateLessonsForUnit('c2', 'c2-u7', 'Humor', ['Humor Vocabulary', 'Irony & Satire', 'Comedic Discussion', 'Wordplay Analysis', 'Humor Sounds'], 7),
  ...generateLessonsForUnit('c2', 'c2-u8', 'Poetry', ['Poetry Vocabulary', 'Poetic Devices', 'Poetry Reading', 'Poetry Critique', 'Poetry Sounds'], 8),
  ...generateLessonsForUnit('c2', 'c2-u9', 'Publishing', ['Publishing Vocabulary', 'Academic Conventions', 'Review Discussion', 'Publication Process', 'Publishing Sounds'], 9),
  ...generateLessonsForUnit('c2', 'c2-u10', 'Commentary', ['Commentary Vocabulary', 'Editorial Writing', 'Political Panel', 'Opinion Expression', 'Commentary Sounds'], 10),
  ...generateLessonsForUnit('c2', 'c2-u11', 'Ethics', ['Ethics Vocabulary', 'Moral Reasoning', 'Ethical Debate', 'Case Analysis', 'Ethics Sounds'], 11),
  ...generateLessonsForUnit('c2', 'c2-u12', 'Art Criticism', ['Criticism Vocabulary', 'Aesthetic Language', 'Gallery Discussion', 'Critical Writing', 'Criticism Sounds'], 12),
  ...generateLessonsForUnit('c2', 'c2-u13', 'Innovation', ['Innovation Vocabulary', 'Frontier Language', 'Innovation Talk', 'Paradigm Discussion', 'Innovation Sounds'], 13),
  ...generateLessonsForUnit('c2', 'c2-u14', 'Mastery', ['Mastery Vocabulary', 'Nuanced Expression', 'Native-level Talk', 'Complete Fluency', 'Mastery Sounds'], 14),
]

// ─── Helper: Generate lessons for a unit ────────────────────────────────────

function generateLessonsForUnit(
  levelCode: string,
  unitId: string,
  unitName: string,
  titles: string[],
  unitOrder: number,
): LessonData[] {
  const types: LessonData['type'][] = ['vocabulary', 'grammar', 'conversation', 'pronunciation', 'vocabulary']
  const xpRewards = levelCode === 'b2' ? [20, 20, 30, 20, 15] : levelCode === 'c1' ? [20, 25, 30, 25, 15] : [25, 25, 35, 25, 20]
  const durations = levelCode === 'b2' ? [8, 12, 15, 10, 6] : levelCode === 'c1' ? [8, 12, 15, 10, 6] : [10, 15, 18, 12, 8]
  const lessonNumBase = (unitOrder - 1) * 5

  return titles.map((title, i) => ({
    id: `${levelCode}-l${lessonNumBase + i + 1}`,
    unitId,
    title,
    description: `${unitName} - ${title}`,
    type: types[i],
    order: i + 1,
    xpReward: xpRewards[i],
    duration: durations[i],
  }))
}

// ─── Course Data Export ─────────────────────────────────────────────────────

export const COURSE_DATA: Record<string, LevelCourseData> = {
  A1: { code: 'A1', name: 'Beginner', description: 'Start your English journey with basic words and phrases', icon: '🌱', color: 'from-green-400 to-emerald-600', units: A1_UNITS, lessons: A1_LESSONS },
  A2: { code: 'A2', name: 'Elementary', description: 'Build on basics with simple conversations', icon: '🌿', color: 'from-emerald-400 to-teal-600', units: A2_UNITS, lessons: A2_LESSONS },
  B1: { code: 'B1', name: 'Intermediate', description: 'Handle most travel and work situations', icon: '🌳', color: 'from-teal-400 to-cyan-600', units: B1_UNITS, lessons: B1_LESSONS },
  B2: { code: 'B2', name: 'Upper Intermediate', description: 'Communicate fluently on complex topics', icon: '🏔️', color: 'from-cyan-400 to-sky-600', units: B2_UNITS, lessons: B2_LESSONS },
  C1: { code: 'C1', name: 'Advanced', description: 'Express ideas with nuance and precision', icon: '⭐', color: 'from-sky-400 to-blue-600', units: C1_UNITS, lessons: C1_LESSONS },
  C2: { code: 'C2', name: 'Mastery', description: 'Near-native proficiency and cultural fluency', icon: '👑', color: 'from-violet-400 to-purple-600', units: C2_UNITS, lessons: C2_LESSONS },
}

// ─── Vocabulary Data by Level ───────────────────────────────────────────────

export const VOCAB_BY_LEVEL: Record<string, VocabCard[]> = {
  A1: [
    { id: 'a1-v1', english: 'Hello', french: 'Bonjour', example: 'Hello, how are you?', phonetic: '/həˈloʊ/' },
    { id: 'a1-v2', english: 'Goodbye', french: 'Au revoir', example: 'Goodbye, see you tomorrow!', phonetic: '/ɡʊdˈbaɪ/' },
    { id: 'a1-v3', english: 'Thank you', french: 'Merci', example: 'Thank you very much!', phonetic: '/θæŋk juː/' },
    { id: 'a1-v4', english: 'Please', french: "S'il vous plaît", example: 'Can I have some water, please?', phonetic: '/pliːz/' },
    { id: 'a1-v5', english: 'Water', french: 'Eau', example: 'I would like a glass of water.', phonetic: '/ˈwɔːtər/' },
    { id: 'a1-v6', english: 'House', french: 'Maison', example: 'My house is big.', phonetic: '/haʊs/' },
    { id: 'a1-v7', english: 'Family', french: 'Famille', example: 'I love my family.', phonetic: '/ˈfæməli/' },
    { id: 'a1-v8', english: 'Friend', french: 'Ami(e)', example: 'She is my best friend.', phonetic: '/frend/' },
    { id: 'a1-v9', english: 'Book', french: 'Livre', example: 'I am reading a book.', phonetic: '/bʊk/' },
    { id: 'a1-v10', english: 'School', french: 'École', example: 'I go to school every day.', phonetic: '/skuːl/' },
    { id: 'a1-v11', english: 'Food', french: 'Nourriture', example: 'The food is delicious.', phonetic: '/fuːd/' },
    { id: 'a1-v12', english: 'Morning', french: 'Matin', example: 'Good morning!', phonetic: '/ˈmɔːrnɪŋ/' },
    { id: 'a1-v13', english: 'Night', french: 'Nuit', example: 'Good night!', phonetic: '/naɪt/' },
    { id: 'a1-v14', english: 'Mother', french: 'Mère', example: 'My mother is a teacher.', phonetic: '/ˈmʌðər/' },
    { id: 'a1-v15', english: 'Father', french: 'Père', example: 'My father works in an office.', phonetic: '/ˈfɑːðər/' },
    { id: 'a1-v16', english: 'Kitchen', french: 'Cuisine', example: 'The kitchen is clean.', phonetic: '/ˈkɪtʃɪn/' },
    { id: 'a1-v17', english: 'Table', french: 'Table', example: 'Put it on the table.', phonetic: '/ˈteɪbəl/' },
    { id: 'a1-v18', english: 'Bread', french: 'Pain', example: 'I buy bread every day.', phonetic: '/bred/' },
    { id: 'a1-v19', english: 'Milk', french: 'Lait', example: 'I drink milk in the morning.', phonetic: '/mɪlk/' },
    { id: 'a1-v20', english: 'Money', french: 'Argent', example: 'I need some money.', phonetic: '/ˈmʌni/' },
  ],
  A2: [
    { id: 'a2-v1', english: 'Weather', french: 'Météo', example: 'The weather is nice today.', phonetic: '/ˈwɛðər/' },
    { id: 'a2-v2', english: 'Journey', french: 'Voyage', example: 'It was a long journey.', phonetic: '/ˈdʒɜːrni/' },
    { id: 'a2-v3', english: 'Neighbor', french: 'Voisin(e)', example: 'My neighbor is very friendly.', phonetic: '/ˈneɪbər/' },
    { id: 'a2-v4', english: 'Grocery', french: 'Épicerie', example: 'I need to buy groceries.', phonetic: '/ˈɡroʊsəri/' },
    { id: 'a2-v5', english: 'Appointment', french: 'Rendez-vous', example: 'I have a doctor appointment.', phonetic: '/əˈpɔɪntmənt/' },
    { id: 'a2-v6', english: 'Temperature', french: 'Température', example: 'The temperature is 25 degrees.', phonetic: '/ˈtemprətʃər/' },
    { id: 'a2-v7', english: 'Luggage', french: 'Bagage', example: 'My luggage is very heavy.', phonetic: '/ˈlʌɡɪdʒ/' },
    { id: 'a2-v8', english: 'Headache', french: 'Mal de tête', example: 'I have a terrible headache.', phonetic: '/ˈhedeɪk/' },
    { id: 'a2-v9', english: 'Prescription', french: 'Ordonnance', example: 'I need a prescription for this medicine.', phonetic: '/prɪˈskrɪpʃən/' },
    { id: 'a2-v10', english: 'Shirt', french: 'Chemise', example: 'This shirt is too small.', phonetic: '/ʃɜːrt/' },
    { id: 'a2-v11', english: 'Painting', french: 'Peinture', example: 'I enjoy painting on weekends.', phonetic: '/ˈpeɪntɪŋ/' },
    { id: 'a2-v12', english: 'Interview', french: 'Entretien', example: 'I have a job interview tomorrow.', phonetic: '/ˈɪntərvjuː/' },
    { id: 'a2-v13', english: 'Exam', french: 'Examen', example: 'The exam is next Monday.', phonetic: '/ɪɡˈzæm/' },
    { id: 'a2-v14', english: 'Apartment', french: 'Appartement', example: 'I rent a small apartment.', phonetic: '/əˈpɑːrtmənt/' },
    { id: 'a2-v15', english: 'Internet', french: 'Internet', example: 'The internet is not working.', phonetic: '/ˈɪntərnet/' },
    { id: 'a2-v16', english: 'Season', french: 'Saison', example: 'Summer is my favorite season.', phonetic: '/ˈsiːzən/' },
    { id: 'a2-v17', english: 'Airport', french: 'Aéroport', example: 'We arrived at the airport early.', phonetic: '/ˈerpɔːrt/' },
    { id: 'a2-v18', english: 'Cough', french: 'Toux', example: 'I have had a cough for a week.', phonetic: '/kɒf/' },
    { id: 'a2-v19', english: 'Hobby', french: 'Loisir', example: 'Photography is my hobby.', phonetic: '/ˈhɒbi/' },
    { id: 'a2-v20', english: 'Password', french: 'Mot de passe', example: 'I forgot my password again.', phonetic: '/ˈpæswɜːrd/' },
  ],
  B1: [
    { id: 'b1-v1', english: 'Achievement', french: 'Accomplissement', example: 'Winning the prize was a great achievement.', phonetic: '/əˈtʃiːvmənt/' },
    { id: 'b1-v2', english: 'Knowledge', french: 'Connaissance', example: 'Knowledge is power.', phonetic: '/ˈnɒlɪdʒ/' },
    { id: 'b1-v3', english: 'Environment', french: 'Environnement', example: 'We must protect the environment.', phonetic: '/ɪnˈvaɪrənmənt/' },
    { id: 'b1-v4', english: 'Opportunity', french: 'Opportunité', example: 'This job is a great opportunity.', phonetic: '/ˌɒpəˈtjuːnəti/' },
    { id: 'b1-v5', english: 'Determination', french: 'Détermination', example: 'Her determination led to success.', phonetic: '/dɪˌtɜːmɪˈneɪʃən/' },
    { id: 'b1-v6', english: 'Pollution', french: 'Pollution', example: 'Air pollution is a serious problem.', phonetic: '/pəˈluːʃən/' },
    { id: 'b1-v7', english: 'Conservation', french: 'Conservation', example: 'Wildlife conservation is important.', phonetic: '/ˌkɒnsərˈveɪʃən/' },
    { id: 'b1-v8', english: 'Deadline', french: 'Date limite', example: 'The deadline is next Friday.', phonetic: '/ˈdedlaɪn/' },
    { id: 'b1-v9', english: 'Nutrition', french: 'Nutrition', example: 'Good nutrition is essential for health.', phonetic: '/njuːˈtrɪʃən/' },
    { id: 'b1-v10', english: 'Excursion', french: 'Excursion', example: 'We went on an excursion to the mountains.', phonetic: '/ɪkˈskɜːrʒən/' },
    { id: 'b1-v11', english: 'Discrimination', french: 'Discrimination', example: 'Discrimination must be fought.', phonetic: '/dɪˌskrɪmɪˈneɪʃən/' },
    { id: 'b1-v12', english: 'Exhibition', french: 'Exposition', example: 'The exhibition opens next week.', phonetic: '/ˌeksɪˈbɪʃən/' },
    { id: 'b1-v13', english: 'Hypothesis', french: 'Hypothèse', example: 'The hypothesis was proven correct.', phonetic: '/haɪˈpɒθəsɪs/' },
    { id: 'b1-v14', english: 'Investment', french: 'Investissement', example: 'Smart investments grow over time.', phonetic: '/ɪnˈvestmənt/' },
    { id: 'b1-v15', english: 'Responsibility', french: 'Responsabilité', example: 'We all have a responsibility to act.', phonetic: '/rɪˌspɒnsəˈbɪləti/' },
    { id: 'b1-v16', english: 'Headline', french: 'Titre', example: 'The headline caught my attention.', phonetic: '/ˈhedlaɪn/' },
    { id: 'b1-v17', english: 'Heritage', french: 'Patrimoine', example: 'This building is part of our heritage.', phonetic: '/ˈherɪtɪdʒ/' },
    { id: 'b1-v18', english: 'Meditation', french: 'Méditation', example: 'Meditation helps reduce stress.', phonetic: '/ˌmedɪˈteɪʃən/' },
    { id: 'b1-v19', english: 'Equality', french: 'Égalité', example: 'Gender equality is a fundamental right.', phonetic: '/ɪˈkwɒləti/' },
    { id: 'b1-v20', english: 'Budget', french: 'Budget', example: 'We need to stick to our budget.', phonetic: '/ˈbʌdʒɪt/' },
  ],
  B2: [
    { id: 'b2-v1', english: 'Negotiation', french: 'Négociation', example: 'The negotiation lasted three hours.', phonetic: '/nɪˌɡoʊʃiˈeɪʃən/' },
    { id: 'b2-v2', english: 'Methodology', french: 'Méthodologie', example: 'The methodology was clearly described.', phonetic: '/ˌmeθəˈdɒlədʒi/' },
    { id: 'b2-v3', english: 'Democracy', french: 'Démocratie', example: 'Democracy requires active participation.', phonetic: '/dɪˈmɒkrəsi/' },
    { id: 'b2-v4', english: 'Consciousness', french: 'Conscience', example: 'The nature of consciousness is debated.', phonetic: '/ˈkɒnʃəsnəs/' },
    { id: 'b2-v5', english: 'Stakeholder', french: 'Partie prenante', example: 'All stakeholders must be consulted.', phonetic: '/ˈsteɪkhoʊldər/' },
    { id: 'b2-v6', english: 'Diagnosis', french: 'Diagnostic', example: 'The diagnosis was confirmed by tests.', phonetic: '/ˌdaɪəɡˈnoʊsɪs/' },
    { id: 'b2-v7', english: 'Infrastructure', french: 'Infrastructure', example: 'The infrastructure needs modernization.', phonetic: '/ˈɪnfrəstrʌktʃər/' },
    { id: 'b2-v8', english: 'Metaphor', french: 'Métaphore', example: 'Time is money is a common metaphor.', phonetic: '/ˈmetəfər/' },
    { id: 'b2-v9', english: 'Cognition', french: 'Cognition', example: 'Cognition declines with age in some cases.', phonetic: '/kɒɡˈnɪʃən/' },
    { id: 'b2-v10', english: 'Inflation', french: 'Inflation', example: 'Inflation has risen to 5%.', phonetic: '/ɪnˈfleɪʃən/' },
    { id: 'b2-v11', english: 'Litigation', french: 'Litige', example: 'The case went to litigation.', phonetic: '/ˌlɪtɪˈɡeɪʃən/' },
    { id: 'b2-v12', english: 'Dissertation', french: 'Mémoire', example: 'She is writing her dissertation.', phonetic: '/ˌdɪsərˈteɪʃən/' },
    { id: 'b2-v13', english: 'Compromise', french: 'Compromis', example: 'A compromise was reached at last.', phonetic: '/ˈkɒmprəmaɪz/' },
    { id: 'b2-v14', english: 'Paradigm', french: 'Paradigme', example: 'This represents a paradigm shift.', phonetic: '/ˈpærədaɪm/' },
    { id: 'b2-v15', english: 'Therapy', french: 'Thérapie', example: 'Cognitive therapy can be effective.', phonetic: '/ˈθerəpi/' },
    { id: 'b2-v16', english: 'Compliance', french: 'Conformité', example: 'Compliance with regulations is mandatory.', phonetic: '/kəmˈplaɪəns/' },
    { id: 'b2-v17', english: 'Symbolism', french: 'Symbolisme', example: 'The symbolism in the novel is rich.', phonetic: '/ˈsɪmbəlɪzəm/' },
    { id: 'b2-v18', english: 'Prototype', french: 'Prototype', example: 'The prototype was tested successfully.', phonetic: '/ˈproʊtətaɪp/' },
    { id: 'b2-v19', english: 'Morality', french: 'Moralité', example: 'Morality varies across cultures.', phonetic: '/məˈræləti/' },
    { id: 'b2-v20', english: 'Coherence', french: 'Cohérence', example: 'The essay lacks coherence.', phonetic: '/koʊˈhɪrəns/' },
  ],
  C1: [
    { id: 'c1-v1', english: 'Ambassador', french: 'Ambassadeur', example: 'The ambassador met with the president.', phonetic: '/æmˈbæsədər/' },
    { id: 'c1-v2', english: 'Peer Review', french: 'Évaluation par les pairs', example: 'The paper underwent peer review.', phonetic: '/pɪr rɪˈvjuː/' },
    { id: 'c1-v3', english: 'Postmodernism', french: 'Postmodernisme', example: 'Postmodernism challenges grand narratives.', phonetic: '/ˌpoʊstˈmɒdərnɪzəm/' },
    { id: 'c1-v4', english: 'Benchmark', french: 'Référence', example: 'This sets a new benchmark for quality.', phonetic: '/ˈbentʃmɑːrk/' },
    { id: 'c1-v5', english: 'Sovereignty', french: 'Souveraineté', example: 'National sovereignty must be respected.', phonetic: '/ˈsɒvrɪnti/' },
    { id: 'c1-v6', english: 'Placebo', french: 'Placebo', example: 'The placebo effect is well documented.', phonetic: '/pləˈsiːboʊ/' },
    { id: 'c1-v7', english: 'Specification', french: 'Spécification', example: 'The specification must be precise.', phonetic: '/ˌspesɪfɪˈkeɪʃən/' },
    { id: 'c1-v8', english: 'Rhetoric', french: 'Rhétorique', example: 'His rhetoric was persuasive.', phonetic: '/ˈretərɪk/' },
    { id: 'c1-v9', english: 'Connotation', french: 'Connotation', example: 'The connotation of the word is positive.', phonetic: '/ˌkɒnəˈteɪʃən/' },
    { id: 'c1-v10', english: 'Derivative', french: 'Dérivé', example: 'Financial derivatives can be risky.', phonetic: '/dɪˈrɪvətɪv/' },
    { id: 'c1-v11', english: 'Jurisdiction', french: 'Juridiction', example: 'This falls under federal jurisdiction.', phonetic: '/ˌdʒʊərɪsˈdɪkʃən/' },
    { id: 'c1-v12', english: 'Empirical', french: 'Empirique', example: 'The empirical evidence supports the theory.', phonetic: '/ɪmˈpɪrɪkəl/' },
    { id: 'c1-v13', english: 'Editorial', french: 'Éditorial', example: 'The editorial criticized the policy.', phonetic: '/ˌedɪˈtɔːriəl/' },
    { id: 'c1-v14', english: 'Euphemism', french: 'Euphémisme', example: '"Let go" is a euphemism for "fired".', phonetic: '/ˈjuːfəmɪzəm/' },
    { id: 'c1-v15', english: 'Pragmatics', french: 'Pragmatique', example: 'Pragmatics studies language in context.', phonetic: '/præɡˈmætɪks/' },
  ],
  C2: [
    { id: 'c2-v1', english: 'Deconstruction', french: 'Déconstruction', example: 'Derrida\'s deconstruction challenges fixed meanings.', phonetic: '/ˌdiːkənˈstrʌkʃən/' },
    { id: 'c2-v2', english: 'Hermeneutics', french: 'Herméneutique', example: 'Hermeneutics is the art of interpretation.', phonetic: '/ˌhɜːrməˈnjuːtɪks/' },
    { id: 'c2-v3', english: 'Epistemology', french: 'Épistémologie', example: 'Epistemology examines the nature of knowledge.', phonetic: '/ɪˌpɪstəˈmɒlədʒi/' },
    { id: 'c2-v4', english: 'Sophistry', french: 'Sophistique', example: 'His argument was pure sophistry.', phonetic: '/ˈsɒfɪstri/' },
    { id: 'c2-v5', english: 'Intertextuality', french: 'Intertextualité', example: 'The novel displays rich intertextuality.', phonetic: '/ˌɪntərˌtekstʃuˈæləti/' },
    { id: 'c2-v6', english: 'Nomenclature', french: 'Nomenclature', example: 'Scientific nomenclature follows strict rules.', phonetic: '/ˈnoʊmənˌkleɪtʃər/' },
    { id: 'c2-v7', english: 'Satire', french: 'Satire', example: 'The play is a brilliant satire of politics.', phonetic: '/ˈsætaɪər/' },
    { id: 'c2-v8', english: 'Enjambment', french: 'Enjambement', example: 'The enjambment creates a flowing rhythm.', phonetic: '/ɪnˈdʒæmmənt/' },
    { id: 'c2-v9', english: 'Monograph', french: 'Monographie', example: 'She published a monograph on the subject.', phonetic: '/ˈmɒnəɡræf/' },
    { id: 'c2-v10', english: 'Polemic', french: 'Polémique', example: 'The article is a fierce polemic.', phonetic: '/pəˈlemɪk/' },
    { id: 'c2-v11', english: 'Deontology', french: 'Déontologie', example: 'Deontology focuses on moral duties.', phonetic: '/ˌdiːɒnˈtɒlədʒi/' },
    { id: 'c2-v12', english: 'Provenance', french: 'Provenance', example: 'The provenance of the painting is disputed.', phonetic: '/ˈprɒvənəns/' },
    { id: 'c2-v13', english: 'Juxtaposition', french: 'Juxtaposition', example: 'The juxtaposition of images is striking.', phonetic: '/ˌdʒʌkstəpəˈzɪʃən/' },
    { id: 'c2-v14', english: 'Semiotics', french: 'Sémiotique', example: 'Semiotics studies signs and symbols.', phonetic: '/ˌsiːmiˈɒtɪks/' },
    { id: 'c2-v15', english: 'Existentialism', french: 'Existentialisme', example: 'Existentialism emphasizes individual freedom.', phonetic: '/ˌeɡzɪˈstenʃəlɪzəm/' },
  ],
}

// ─── Quiz Data by Level ─────────────────────────────────────────────────────

export const QUIZ_BY_LEVEL: Record<string, QuizQuestion[]> = {
  A1: [
    { id: 'a1-q1', question: 'Which greeting is used in the morning?', options: ['Good night', 'Good morning', 'Good evening', 'Goodbye'], correctIndex: 1, explanation: '"Good morning" is used as a greeting from waking up until around noon.' },
    { id: 'a1-q2', question: 'What is the correct article: "___ apple"?', options: ['A', 'An', 'The', 'No article'], correctIndex: 1, explanation: 'We use "an" before words starting with a vowel sound.' },
    { id: 'a1-q3', question: 'Complete: "She ___ a teacher."', options: ['am', 'is', 'are', 'be'], correctIndex: 1, explanation: 'We use "is" with third person singular (he/she/it).' },
    { id: 'a1-q4', question: 'What is "eau" in English?', options: ['Water', 'Milk', 'Bread', 'Juice'], correctIndex: 0, explanation: '"Eau" in French means "water" in English.' },
    { id: 'a1-q5', question: 'Complete: "I ___ to school every day."', options: ['go', 'goes', 'going', 'gone'], correctIndex: 0, explanation: 'With "I", we use the base form of the verb in present simple.' },
    { id: 'a1-q6', question: 'Which word means "famille"?', options: ['Friend', 'Family', 'House', 'School'], correctIndex: 1, explanation: '"Famille" in French means "family" in English.' },
    { id: 'a1-q7', question: 'How do you say "merci" in English?', options: ['Please', 'Sorry', 'Thank you', 'Hello'], correctIndex: 2, explanation: '"Merci" in French means "thank you" in English.' },
    { id: 'a1-q8', question: 'Complete: "There ___ a book on the table."', options: ['is', 'are', 'am', 'be'], correctIndex: 0, explanation: '"There is" is used with singular nouns.' },
  ],
  A2: [
    { id: 'a2-q1', question: 'Which sentence is correct?', options: ['She don\'t like coffee', 'She doesn\'t likes coffee', 'She doesn\'t like coffee', 'She not like coffee'], correctIndex: 2, explanation: '"Doesn\'t" is the negative form for third person singular, followed by the base form.' },
    { id: 'a2-q2', question: 'What is the past tense of "go"?', options: ['Goed', 'Went', 'Gone', 'Going'], correctIndex: 1, explanation: '"Go" is an irregular verb. Its past tense is "went".' },
    { id: 'a2-q3', question: 'Complete: "If it ___ tomorrow, we will stay home."', options: ['rains', 'rain', 'rained', 'raining'], correctIndex: 0, explanation: 'In first conditional, the if-clause uses present simple.' },
    { id: 'a2-q4', question: 'Choose the correct form: "I have ___ homework to do."', options: ['much', 'many', 'a', 'few'], correctIndex: 0, explanation: '"Homework" is uncountable, so we use "much".' },
    { id: 'a2-q5', question: 'Complete: "She ___ to the doctor yesterday."', options: ['go', 'goes', 'went', 'going'], correctIndex: 2, explanation: 'Past simple of "go" is "went", used for completed past actions.' },
    { id: 'a2-q6', question: 'What does "appointment" mean in French?', options: ['Appartement', 'Rendez-vous', 'Épicerie', 'Voisin'], correctIndex: 1, explanation: '"Appointment" means "rendez-vous" in French.' },
    { id: 'a2-q7', question: 'Complete: "You ___ see a doctor."', options: ['should', 'shall', 'would', 'could'], correctIndex: 0, explanation: '"Should" is used to give advice or recommendations.' },
    { id: 'a2-q8', question: 'Which is the comparative of "expensive"?', options: ['More expensive', 'Expensiver', 'Most expensive', 'Expensiveer'], correctIndex: 0, explanation: 'Long adjectives use "more" for comparison.' },
  ],
  B1: [
    { id: 'b1-q1', question: 'Which sentence uses the passive voice correctly?', options: ['The report was wrote yesterday', 'The report was written yesterday', 'The report is wrote yesterday', 'The report written yesterday'], correctIndex: 1, explanation: 'Passive voice: was/were + past participle. "Written" is the past participle of "write".' },
    { id: 'b1-q2', question: 'Complete: "She said she ___ the movie."', options: ['enjoys', 'enjoyed', 'has enjoyed', 'is enjoying'], correctIndex: 1, explanation: 'In reported speech, the tense shifts back: present → past.' },
    { id: 'b1-q3', question: 'Choose the correct form: "If I ___ you, I would apologize."', options: ['am', 'was', 'were', 'be'], correctIndex: 2, explanation: 'In second conditional, we use "were" for all subjects (formal/hypothetical).' },
    { id: 'b1-q4', question: 'What does "environment" mean in French?', options: ['Environnement', 'Enfermement', 'Enveloppement', 'Envisionnement'], correctIndex: 0, explanation: '"Environment" means "environnement" in French.' },
    { id: 'b1-q5', question: 'Complete: "I have never ___ to Paris."', options: ['be', 'been', 'being', 'was'], correctIndex: 1, explanation: 'Present perfect: have/has + past participle. "Been" is the past participle of "be".' },
    { id: 'b1-q6', question: 'Which word is a gerund?', options: ['Running', 'Ran', 'To run', 'Run'], correctIndex: 0, explanation: 'A gerund is the -ing form of a verb used as a noun.' },
    { id: 'b1-q7', question: 'Complete: "The book ___ I read was fascinating."', options: ['who', 'which', 'whom', 'whose'], correctIndex: 1, explanation: '"Which" is used for things in relative clauses.' },
    { id: 'b1-q8', question: 'Choose the correct third conditional: "If I had studied, I ___ the exam."', options: ['would pass', 'would have passed', 'will pass', 'passed'], correctIndex: 1, explanation: 'Third conditional: If + past perfect, would have + past participle.' },
  ],
  B2: [
    { id: 'b2-q1', question: 'Which sentence demonstrates nominalization?', options: ['They decided quickly', 'Their quick decision was notable', 'They made a decision quickly', 'Quickly, they decided'], correctIndex: 1, explanation: 'Nominalization converts verbs/adjectives to nouns: "decide" → "decision".' },
    { id: 'b2-q2', question: 'Complete: "Had I known, I ___ differently."', options: ['would act', 'would have acted', 'will act', 'acted'], correctIndex: 1, explanation: 'Inverted third conditional: Had + subject + past participle = if clause.' },
    { id: 'b2-q3', question: 'What does "litigation" mean?', options: ['Lighting', 'Legal proceedings', 'Literacy', 'Literal meaning'], correctIndex: 1, explanation: '"Litigation" refers to legal proceedings or lawsuits.' },
    { id: 'b2-q4', question: 'Which uses inversion correctly?', options: ['Rarely she goes there', 'Rarely goes she there', 'Rarely does she go there', 'Rarely do she go there'], correctIndex: 2, explanation: 'Negative adverbial inversion: Rarely + auxiliary + subject + verb.' },
    { id: 'b2-q5', question: 'Choose the hedging phrase:', options: ['This proves that', 'It appears that', 'This confirms', 'This demonstrates'], correctIndex: 1, explanation: '"It appears that" is a hedging phrase showing caution in claims.' },
    { id: 'b2-q6', question: 'What is a "paradigm"?', options: ['A paradox', 'A model or pattern', 'A paragraph', 'A parameter'], correctIndex: 1, explanation: 'A "paradigm" is a typical example, model, or pattern of something.' },
    { id: 'b2-q7', question: 'Complete: "The report, ___ was submitted late, contained errors."', options: ['that', 'which', 'who', 'whom'], correctIndex: 1, explanation: 'Non-defining relative clauses use "which" (not "that").' },
    { id: 'b2-q8', question: 'What does "compliance" mean?', options: ['Complaint', 'Adherence to rules', 'Complexity', 'Completion'], correctIndex: 1, explanation: '"Compliance" means following rules, standards, or laws.' },
  ],
  C1: [
    { id: 'c1-q1', question: 'Which sentence uses an embedded clause correctly?', options: ['What she said was surprising', 'What did she say was surprising', 'That she said was surprising', 'What she did say surprising'], correctIndex: 0, explanation: 'Embedded clauses use subject-verb order (no inversion): "What she said..."' },
    { id: 'c1-q2', question: 'What does "pragmatics" study?', options: ['Grammar rules', 'Language in social context', 'Word origins', 'Sound systems'], correctIndex: 1, explanation: 'Pragmatics studies how context influences meaning and language use.' },
    { id: 'c1-q3', question: 'Choose the correct mixed conditional:', options: ['If I had studied medicine, I would be a doctor', 'If I studied medicine, I would have been a doctor', 'If I had studied medicine, I will be a doctor', 'If I study medicine, I would be a doctor'], correctIndex: 0, explanation: 'Mixed conditional: past condition (had studied) + present result (would be).' },
    { id: 'c1-q4', question: 'What is a "euphemism"?', options: ['A harsh truth', 'A mild indirect expression', 'An exaggeration', 'A contradiction'], correctIndex: 1, explanation: 'A euphemism replaces a harsh term with a milder one.' },
    { id: 'c1-q5', question: 'Complete: "Not until the results ___ will we know the outcome."', options: ['are published', 'published', 'will publish', 'publishing'], correctIndex: 0, explanation: 'After negative fronting (Not until), the subordinate clause uses normal word order.' },
    { id: 'c1-q6', question: 'What does "sovereignty" mean?', options: ['Generosity', 'Supreme authority', 'Sympathy', 'Solitude'], correctIndex: 1, explanation: '"Sovereignty" means supreme power or authority of a state.' },
    { id: 'c1-q7', question: 'Which is an example of cleft sentence?', options: ['It was John who called', 'John called me', 'I got a call from John', 'John was the caller'], correctIndex: 0, explanation: 'Cleft sentences emphasize with "It was X who/that..."' },
    { id: 'c1-q8', question: 'What does "empirical" mean?', options: ['Theoretical', 'Based on observation', 'Emotional', 'Imperial'], correctIndex: 1, explanation: '"Empirical" means based on observation, experiment, or experience.' },
  ],
  C2: [
    { id: 'c2-q1', question: 'What does "hermeneutics" study?', options: ['Heraldry', 'Interpretation theory', 'Heredity', 'Hypnosis'], correctIndex: 1, explanation: 'Hermeneutics is the theory and methodology of interpretation.' },
    { id: 'c2-q2', question: 'Choose the correct use of anacoluthon:', options: ['If he had come, I would have left', 'If he had come — but he didn\'t — well, never mind', 'If he comes, I will leave', 'If he came, I would leave'], correctIndex: 1, explanation: 'Anacoluthon is a deliberate break in grammatical structure for effect.' },
    { id: 'c2-q3', question: 'What is "intertextuality"?', options: ['Internet text', 'References between texts', 'Internal structure', 'Interactive text'], correctIndex: 1, explanation: 'Intertextuality refers to the relationship between texts through references.' },
    { id: 'c2-q4', question: 'Which is an example of chiasmus?', options: ['Ask not what your country can do for you', 'I came, I saw, I conquered', 'To be or not to be', 'Out, out, brief candle'], correctIndex: 0, explanation: 'Chiasmus reverses the order of words in parallel phrases.' },
    { id: 'c2-q5', question: 'What does "semiotics" study?', options: ['Semi-precious stones', 'Signs and symbols', 'Semitic languages', 'Semiconductors'], correctIndex: 1, explanation: 'Semiotics is the study of signs, symbols, and sign processes.' },
    { id: 'c2-q6', question: 'Choose the sentence with syllepsis:', options: ['She took her coat and her leave', 'She took a coat and a hat', 'She left her coat and left the room', 'She wore a coat and took a hat'], correctIndex: 0, explanation: 'Syllepsis uses one word in different senses simultaneously.' },
    { id: 'c2-q7', question: 'What is "deontology"?', options: ['Dentistry', 'Ethics based on duty', 'Deontology as a field', 'Demonology'], correctIndex: 1, explanation: 'Deontology is an ethical theory that judges morality based on rules/duties.' },
    { id: 'c2-q8', question: 'Complete the zeugma: "He ___ his tea and his patience."', options: ['drank', 'lost', 'finished', 'consumed'], correctIndex: 3, explanation: 'Zeugma uses one verb with two objects in different senses: "consumed" applies to both tea and patience.' },
  ],
}

// ─── Grammar Exercises by Level ─────────────────────────────────────────────

export const GRAMMAR_BY_LEVEL: Record<string, GrammarExercise[]> = {
  A1: [
    { id: 'a1-g1', sentence: 'She ___ (to be) a doctor.', answer: 'is', hint: 'Third person singular of "to be"' },
    { id: 'a1-g2', sentence: 'They ___ (to go) to school every day.', answer: 'go', hint: 'Plural subject, present simple' },
    { id: 'a1-g3', sentence: 'I ___ (to have) a big family.', answer: 'have', hint: 'First person, present simple' },
    { id: 'a1-g4', sentence: 'There ___ (to be) a book on the table.', answer: 'is', hint: 'Singular noun with "there"' },
    { id: 'a1-g5', sentence: 'My mother ___ (to work) in a hospital.', answer: 'works', hint: 'Third person singular adds -s' },
    { id: 'a1-g6', sentence: '___ (article) apple a day keeps the doctor away.', answer: 'An', hint: 'Before vowel sounds' },
    { id: 'a1-g7', sentence: 'This is ___ (to be) my house.', answer: 'is', hint: 'Singular subject' },
    { id: 'a1-g8', sentence: 'We ___ (to be) students.', answer: 'are', hint: 'First person plural of "to be"' },
  ],
  A2: [
    { id: 'a2-g1', sentence: 'She ___ (to visit) Paris last summer.', answer: 'visited', hint: 'Past simple of regular verb' },
    { id: 'a2-g2', sentence: 'I ___ (to eat) dinner when you called.', answer: 'was eating', hint: 'Past continuous: was/were + verb-ing' },
    { id: 'a2-g3', sentence: 'The book ___ (to write) by a famous author.', answer: 'was written', hint: 'Passive voice in past tense' },
    { id: 'a2-g4', sentence: 'If I ___ (to have) more time, I would travel.', answer: 'had', hint: 'Second conditional uses past simple' },
    { id: 'a2-g5', sentence: 'You ___ (should) see a doctor.', answer: 'should', hint: 'Modal verb for advice' },
    { id: 'a2-g6', sentence: 'She ___ (to go) to work by bus every day.', answer: 'goes', hint: 'Third person singular present simple' },
    { id: 'a2-g7', sentence: 'We ___ (to be) friends since 2015.', answer: 'have been', hint: 'Present perfect with "since"' },
    { id: 'a2-g8', sentence: '___ (much/many) people came to the party?', answer: 'How many', hint: '"Many" for countable nouns' },
  ],
  B1: [
    { id: 'b1-g1', sentence: 'The report ___ (to publish) last week.', answer: 'was published', hint: 'Passive voice: was/were + past participle' },
    { id: 'b1-g2', sentence: 'She said she ___ (to enjoy) the movie.', answer: 'had enjoyed', hint: 'Reported speech: past perfect' },
    { id: 'b1-g3', sentence: 'If I ___ (to be) you, I would accept the offer.', answer: 'were', hint: 'Second conditional uses "were"' },
    { id: 'b1-g4', sentence: 'I enjoy ___ (to read) science fiction.', answer: 'reading', hint: 'Gerund after "enjoy"' },
    { id: 'b1-g5', sentence: 'By 2030, scientists ___ (to discover) new treatments.', answer: 'will have discovered', hint: 'Future perfect: will have + past participle' },
    { id: 'b1-g6', sentence: 'The house ___ (to build) in 1990 is now a museum.', answer: 'built', hint: 'Reduced relative clause' },
    { id: 'b1-g7', sentence: 'I wish I ___ (to save) more money last year.', answer: 'had saved', hint: 'Wish + past perfect for past regrets' },
    { id: 'b1-g8', sentence: 'It\'s illegal, ___ (question tag)?', answer: "isn't it", hint: 'Question tag with "is"' },
  ],
  B2: [
    { id: 'b2-g1', sentence: 'Rarely ___ (she/to go) to that restaurant.', answer: 'does she go', hint: 'Negative adverbial inversion' },
    { id: 'b2-g2', sentence: 'The results ___ (to suggest) that the hypothesis is correct.', answer: 'suggest', hint: 'Academic hedging with present simple' },
    { id: 'b2-g3', sentence: 'Had the proposal ___ (to approve), we would have started.', answer: 'been approved', hint: 'Third conditional passive' },
    { id: 'b2-g4', sentence: 'The rapid ___ (to expand) of the company was unexpected.', answer: 'expansion', hint: 'Nominalization: expand → expansion' },
    { id: 'b2-g5', sentence: 'Not only ___ (she/to pass) the exam, but she got the highest score.', answer: 'did she pass', hint: 'Inversion after "Not only"' },
    { id: 'b2-g6', sentence: 'The contract, ___ (which/that) was signed yesterday, is valid.', answer: 'which', hint: 'Non-defining relative clause uses "which"' },
    { id: 'b2-g7', sentence: 'It ___ (to appear) that further research is needed.', answer: 'appears', hint: 'Hedging phrase for cautious claims' },
    { id: 'b2-g8', sentence: 'The data ___ (to collect) over a period of five years.', answer: 'were collected', hint: 'Passive voice with "data" (plural)' },
  ],
  C1: [
    { id: 'c1-g1', sentence: 'What ___ (she/to say) at the meeting was surprising.', answer: 'she said', hint: 'Embedded clause: subject-verb order' },
    { id: 'c1-g2', sentence: 'If I ___ (to study) medicine, I would be a doctor now.', answer: 'had studied', hint: 'Mixed conditional: past condition → present result' },
    { id: 'c1-g3', sentence: 'Not until the report ___ (to publish) will we know the truth.', answer: 'is published', hint: 'Negative fronting + present simple' },
    { id: 'c1-g4', sentence: 'It was the CEO ___ (who/which) made the final decision.', answer: 'who', hint: 'Cleft sentence for emphasis' },
    { id: 'c1-g5', sentence: 'The findings ___ (to tend) to support the initial hypothesis.', answer: 'tend', hint: 'Hedging with "tend to"' },
    { id: 'c1-g6', sentence: '___ (to suppose) we accept the premise, what follows?', answer: 'Supposing', hint: 'Conditional conjunction' },
    { id: 'c1-g7', sentence: 'So ___ (to be) the urgency that action was taken immediately.', answer: 'great was', hint: 'Inversion after "So + adjective"' },
    { id: 'c1-g8', sentence: 'The minister, ___ (whose/who\'s) position was untenable, resigned.', answer: 'whose', hint: 'Possessive relative pronoun' },
  ],
  C2: [
    { id: 'c2-g1', sentence: 'Little ___ (anyone/to realize) how significant the discovery would prove.', answer: 'did anyone realize', hint: 'Negative adverbial inversion with "little"' },
    { id: 'c2-g2', sentence: 'The text can ___ (to read) as both a critique and a celebration.', answer: 'be read', hint: 'Passive infinitive' },
    { id: 'c2-g3', sentence: 'Had it not ___ (to be) for the intervention, the crisis would have deepened.', answer: 'been', hint: 'Inverted conditional: Had it not been for' },
    { id: 'c2-g4', sentence: 'Such ___ (to be) the complexity that even experts struggled.', answer: 'was', hint: 'Inversion after "Such + be"' },
    { id: 'c2-g5', sentence: 'The argument ___ (to rest) on the assumption that all values are relative.', answer: 'rests', hint: 'Subject-verb agreement with singular subject' },
    { id: 'c2-g6', sentence: 'It is not so much the content ___ (as/that) the form that matters.', answer: 'as', hint: '"Not so much X as Y" correlative conjunction' },
    { id: 'c2-g7', sentence: '___ (to be) the inherent contradictions, the theory remains influential.', answer: 'Notwithstanding', hint: 'Formal concession with "notwithstanding"' },
    { id: 'c2-g8', sentence: 'The very fact ___ (that/which) she refused speaks volumes.', answer: 'that', hint: 'Appositive clause with "the fact that"' },
  ],
}

// ─── Pronunciation Data by Level ────────────────────────────────────────────

export const PRONUNCIATION_BY_LEVEL: Record<string, PronunciationWord[]> = {
  A1: [
    { id: 'a1-p1', word: 'Hello', phonetic: '/həˈloʊ/', tip: 'Commencez par un "h" doux (expiré), puis "lo" comme dans "lôt".', difficulty: 'easy' },
    { id: 'a1-p2', word: 'Goodbye', phonetic: '/ɡʊdˈbaɪ/', tip: 'Dites "goud" puis "baï". Le "g" est dur comme dans "gâteau".', difficulty: 'easy' },
    { id: 'a1-p3', word: 'Thank you', phonetic: '/θæŋk juː/', tip: 'Le "th" se prononce en plaçant la langue entre les dents et en soufflant.', difficulty: 'medium' },
    { id: 'a1-p4', word: 'Please', phonetic: '/pliːz/', tip: 'Prolongez le "ee" comme dans "lit". Le "z" final est doux.', difficulty: 'medium' },
    { id: 'a1-p5', word: 'Water', phonetic: '/ˈwɔːtər/', tip: 'Le "w" se forme en arrondissant les lèvres. Le "t" américain est adouci.', difficulty: 'easy' },
    { id: 'a1-p6', word: 'Family', phonetic: '/ˈfæməli/', tip: 'Le "a" est ouvert comme dans "cat". Accent sur la première syllabe.', difficulty: 'easy' },
    { id: 'a1-p7', word: 'Morning', phonetic: '/ˈmɔːrnɪŋ/', tip: 'Le "or" sonne comme "or" dans "porte". Le "ing" est nasal.', difficulty: 'medium' },
    { id: 'a1-p8', word: 'Three', phonetic: '/θriː/', tip: 'Le "th" est crucial : langue entre les dents, soufflez. Puis "ri".', difficulty: 'medium' },
    { id: 'a1-p9', word: 'School', phonetic: '/skuːl/', tip: 'Le "sc" se dit "sk" (pas "ch"). Le "oo" est long comme dans "cou".', difficulty: 'easy' },
    { id: 'a1-p10', word: 'Kitchen', phonetic: '/ˈkɪtʃɪn/', tip: 'Le "tch" se prononce "tch" comme dans "tchin". Accent sur la première syllabe.', difficulty: 'medium' },
  ],
  A2: [
    { id: 'a2-p1', word: 'Weather', phonetic: '/ˈwɛðər/', tip: 'Le "th" est doux (comme dans "this"), pas dur (comme "think").', difficulty: 'medium' },
    { id: 'a2-p2', word: 'Journey', phonetic: '/ˈdʒɜːrni/', tip: 'Le "j" sonne "dj". Le "ur" est comme "eur" français.', difficulty: 'medium' },
    { id: 'a2-p3', word: 'Airport', phonetic: '/ˈerpɔːrt/', tip: 'Accent sur "air". Le "port" a un "r" final américain.', difficulty: 'easy' },
    { id: 'a2-p4', word: 'Appointment', phonetic: '/əˈpɔɪntmənt/', tip: 'Accent sur "point". Le "ment" est très léger à la fin.', difficulty: 'hard' },
    { id: 'a2-p5', word: 'Headache', phonetic: '/ˈhedeɪk/', tip: 'Se prononce "hédéke", pas "hédatche". Le "ch" est "k".', difficulty: 'medium' },
    { id: 'a2-p6', word: 'Neighbor', phonetic: '/ˈneɪbər/', tip: 'Le "ei" sonne "é". Le "gh" est muet. Dites "néber".', difficulty: 'medium' },
    { id: 'a2-p7', word: 'Temperature', phonetic: '/ˈtemprətʃər/', tip: 'Se dit souvent "tem-pruh-cher" en pratique, pas lettre par lettre.', difficulty: 'hard' },
    { id: 'a2-p8', word: 'Prescription', phonetic: '/prɪˈskrɪpʃən/', tip: 'Accent sur "scrip". Le "tion" final se dit "chən".', difficulty: 'hard' },
    { id: 'a2-p9', word: 'Interview', phonetic: '/ˈɪntərvjuː/', tip: 'Le "v" est léger. Accent sur "in". Le "iew" sonne "iou".', difficulty: 'medium' },
    { id: 'a2-p10', word: 'Delicious', phonetic: '/dɪˈlɪʃəs/', tip: 'Accent sur "li". Le "ious" se dit "əs", pas "ious".', difficulty: 'medium' },
  ],
  B1: [
    { id: 'b1-p1', word: 'Achievement', phonetic: '/əˈtʃiːvmənt/', tip: 'Accent sur "chieve". Le "a" initial est schwa (ə).', difficulty: 'medium' },
    { id: 'b1-p2', word: 'Environment', phonetic: '/ɪnˈvaɪrənmənt/', tip: 'Accent sur "vi". On entend souvent "en-VI-run-ment".', difficulty: 'hard' },
    { id: 'b1-p3', word: 'Opportunity', phonetic: '/ˌɒpəˈtjuːnəti/', tip: 'Accent sur "tu". Le "op" est court. Dites "op-er-TU-ni-ti".', difficulty: 'hard' },
    { id: 'b1-p4', word: 'Determination', phonetic: '/dɪˌtɜːrmɪˈneɪʃən/', tip: 'Accent principal sur "na". Deux accents secondaires.', difficulty: 'hard' },
    { id: 'b1-p5', word: 'Conservation', phonetic: '/ˌkɒnsərˈveɪʃən/', tip: 'Accent sur "va". Le "tion" final se dit "chən".', difficulty: 'medium' },
    { id: 'b1-p6', word: 'Discrimination', phonetic: '/dɪˌskrɪmɪˈneɪʃən/', tip: 'Accent sur "na". Mot long mais régulier dans son rythme.', difficulty: 'hard' },
    { id: 'b1-p7', word: 'Exhibition', phonetic: '/ˌeksɪˈbɪʃən/', tip: 'Accent sur "bi". Ne dites pas "ex-hi-bi-tion".', difficulty: 'medium' },
    { id: 'b1-p8', word: 'Hypothesis', phonetic: '/haɪˈpɒθəsɪs/', tip: 'Accent sur "po". Le "hy" se dit "haï". Le "th" est dur.', difficulty: 'hard' },
    { id: 'b1-p9', word: 'Responsibility', phonetic: '/rɪˌspɒnsəˈbɪləti/', tip: 'Accent sur "bi". Un mot très long : pratiquez syllabe par syllabe.', difficulty: 'hard' },
    { id: 'b1-p10', word: 'Volunteer', phonetic: '/ˌvɒlənˈtɪər/', tip: 'Accent sur "teer". Le "eer" final rime avec "beer".', difficulty: 'medium' },
  ],
  B2: [
    { id: 'b2-p1', word: 'Negotiation', phonetic: '/nɪˌɡoʊʃiˈeɪʃən/', tip: '4 syllabes : ne-go-shee-A-shən. Accent sur "A".', difficulty: 'hard' },
    { id: 'b2-p2', word: 'Methodology', phonetic: '/ˌmeθəˈdɒlədʒi/', tip: 'Accent sur "dol". Le "th" est dur. Le "gy" se dit "dʒi".', difficulty: 'hard' },
    { id: 'b2-p3', word: 'Infrastructure', phonetic: '/ˈɪnfrəstrʌktʃər/', tip: 'Accent sur "in". Le "struc" a un "u" court.', difficulty: 'hard' },
    { id: 'b2-p4', word: 'Consciousness', phonetic: '/ˈkɒnʃəsnəs/', tip: 'Le "sci" ne se prononce pas "ski". Dites "kon-shəs-nəs".', difficulty: 'hard' },
    { id: 'b2-p5', word: 'Stakeholder', phonetic: '/ˈsteɪkhoʊldər/', tip: 'Mot composé : "stake" + "holder". Accent sur "stake".', difficulty: 'medium' },
    { id: 'b2-p6', word: 'Diagnosis', phonetic: '/ˌdaɪəɡˈnoʊsɪs/', tip: 'Accent sur "no". Le "g" est muet devant "n".', difficulty: 'hard' },
    { id: 'b2-p7', word: 'Metaphor', phonetic: '/ˈmetəfər/', tip: 'Accent sur "me". Le "ph" se dit "f".', difficulty: 'medium' },
    { id: 'b2-p8', word: 'Coherence', phonetic: '/koʊˈhɪrəns/', tip: 'Accent sur "hi". Dites "ko-HER-əns".', difficulty: 'medium' },
    { id: 'b2-p9', word: 'Compliance', phonetic: '/kəmˈplaɪəns/', tip: 'Accent sur "pli". Le "ance" final est doux.', difficulty: 'medium' },
    { id: 'b2-p10', word: 'Paradigm', phonetic: '/ˈpærədaɪm/', tip: 'Le "dig" se dit "daim". Pas "para-dig-me".', difficulty: 'hard' },
  ],
  C1: [
    { id: 'c1-p1', word: 'Sovereignty', phonetic: '/ˈsɒvrɪnti/', tip: 'Le "eign" ne se prononce pas. Dites "sov-rinti".', difficulty: 'hard' },
    { id: 'c1-p2', word: 'Postmodernism', phonetic: '/ˌpoʊstˈmɒdərnɪzəm/', tip: 'Accent sur "mo". Le "ism" se dit "izəm".', difficulty: 'hard' },
    { id: 'c1-p3', word: 'Connotation', phonetic: '/ˌkɒnəˈteɪʃən/', tip: 'Accent sur "na". Le "tion" se dit "chən".', difficulty: 'medium' },
    { id: 'c1-p4', word: 'Euphemism', phonetic: '/ˈjuːfəmɪzəm/', tip: 'Le "eu" se dit "you". Le "ph" est "f". Accent sur "you".', difficulty: 'hard' },
    { id: 'c1-p5', word: 'Jurisdiction', phonetic: '/ˌdʒʊərɪsˈdɪkʃən/', tip: 'Accent sur "dic". Le "jur" sonne "djur".', difficulty: 'hard' },
    { id: 'c1-p6', word: 'Pragmatics', phonetic: '/præɡˈmætɪks/', tip: 'Accent sur "mat". Le "a" est ouvert comme dans "cat".', difficulty: 'medium' },
    { id: 'c1-p7', word: 'Specification', phonetic: '/ˌspesɪfɪˈkeɪʃən/', tip: 'Accent sur "ca". 5 syllabes : spes-i-fi-CA-shən.', difficulty: 'hard' },
    { id: 'c1-p8', word: 'Empirical', phonetic: '/ɪmˈpɪrɪkəl/', tip: 'Accent sur "pi". Le "em" est un schwa.', difficulty: 'medium' },
    { id: 'c1-p9', word: 'Editorial', phonetic: '/ˌedɪˈtɔːriəl/', tip: 'Accent sur "to". Le "rial" se dit "ri-əl".', difficulty: 'medium' },
    { id: 'c1-p10', word: 'Ambassador', phonetic: '/æmˈbæsədər/', tip: 'Accent sur "bas". Les deux "a" sont différents.', difficulty: 'medium' },
  ],
  C2: [
    { id: 'c2-p1', word: 'Hermeneutics', phonetic: '/ˌhɜːrməˈnjuːtɪks/', tip: 'Accent sur "nu". Le "eu" sonne "you".', difficulty: 'hard' },
    { id: 'c2-p2', word: 'Epistemology', phonetic: '/ɪˌpɪstəˈmɒlədʒi/', tip: 'Accent sur "mo". Le "pi" est court. 6 syllabes.', difficulty: 'hard' },
    { id: 'c2-p3', word: 'Intertextuality', phonetic: '/ˌɪntərˌtekstʃuˈæləti/', tip: 'Accent sur "u". 7 syllabes : in-ter-tek-stchu-AL-i-ti.', difficulty: 'hard' },
    { id: 'c2-p4', word: 'Deconstruction', phonetic: '/ˌdiːkənˈstrʌkʃən/', tip: 'Accent sur "struc". Le "de" est un préfixe léger.', difficulty: 'hard' },
    { id: 'c2-p5', word: 'Nomenclature', phonetic: '/ˈnoʊmənˌkleɪtʃər/', tip: 'Accent sur "no". Le "cla" se dit "kla".', difficulty: 'hard' },
    { id: 'c2-p6', word: 'Enjambment', phonetic: '/ɪnˈdʒæmmənt/', tip: 'Accent sur "jam". Le "en" est "in". Le "blement" se dit "bmənt".', difficulty: 'hard' },
    { id: 'c2-p7', word: 'Deontology', phonetic: '/ˌdiːɒnˈtɒlədʒi/', tip: 'Accent sur "to". Le "de" est long comme "di".', difficulty: 'hard' },
    { id: 'c2-p8', word: 'Provenance', phonetic: '/ˈprɒvənəns/', tip: 'Accent sur "pro". Se dit "PROV-ə-nəns".', difficulty: 'medium' },
    { id: 'c2-p9', word: 'Juxtaposition', phonetic: '/ˌdʒʌkstəpəˈzɪʃən/', tip: 'Accent sur "zi". Le "jus" se dit "djus".', difficulty: 'hard' },
    { id: 'c2-p10', word: 'Existentialism', phonetic: '/ˌeɡzɪˈstenʃəlɪzəm/', tip: 'Accent sur "sten". Le "x" se dit "gz".', difficulty: 'hard' },
  ],
}

// ─── Helper: Get all lessons for a level ────────────────────────────────────

export function getLessonsForLevel(levelCode: string): LessonData[] {
  return COURSE_DATA[levelCode]?.lessons ?? []
}

export function getUnitsForLevel(levelCode: string): UnitData[] {
  return COURSE_DATA[levelCode]?.units ?? []
}

export function getLessonsForUnit(levelCode: string, unitId: string): LessonData[] {
  return COURSE_DATA[levelCode]?.lessons.filter(l => l.unitId === unitId) ?? []
}

export function getTotalLessonsForLevel(levelCode: string): number {
  return COURSE_DATA[levelCode]?.lessons.length ?? 0
}
