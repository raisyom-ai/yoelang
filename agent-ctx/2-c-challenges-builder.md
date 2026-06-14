# Task 2-c: Challenges Builder

## Task
Build Daily Challenges (Défis quotidiens) feature — API route + page component + registration

## Work Completed

### 1. API Route — `/src/app/api/challenges/route.ts`
- **GET endpoint**: Generates 3 daily challenges deterministically based on date hash
  - Uses `simpleHash(dateString)` to select 3 types from 4 (grammar, vocabulary, translation, conjugaison)
  - Each challenge has id derived from `{date}_{type}` format
  - Returns `completedIds` array by querying `ChallengeCompletion` table
  - Full challenge pool with 8 grammar, 8 vocabulary, 6 translation, 6 conjugaison questions

- **POST endpoint**: Submit challenge answers
  - Validates `{ userId, challengeId, answerIndex }` 
  - Checks for duplicate completions (returns 409 with `ALREADY_COMPLETED` code)
  - Reconstructs challenge from deterministic generation to verify answer
  - Correct: saves `ChallengeCompletion`, increments user XP, checks for all-3-complete bonus (+30 XP)
  - Wrong: returns correct answer info
  - Updates user XP in store on client side

### 2. Page Component — `/src/components/pages/ChallengesPage.tsx`
- Sticky top bar with back/home buttons and "Défis du jour" title
- Date header card with formatted French date and progress bar
- 3 challenge cards with type-specific color coding:
  - grammar → yoel-primary, vocabulary → yoel-green, translation → yoel-blue, conjugaison → yoel-gold
- A/B/C/D option buttons with stagger animations
- Completed state: green check + "Complété! +X XP" banner
- Wrong answer state: red highlight + shows correct answer
- Bonus completion card (🎉 +30 XP) when all 3 completed
- "Come back tomorrow" message + dashboard button when done
- Framer-motion animations throughout

### 3. Registration — `/src/app/page.tsx`
- Added `ChallengesPage` dynamic import
- Added `'challenges': ChallengesPage` to pageComponents record

### 4. Lint Status
- All new files pass lint
- 2 pre-existing errors in `a1-lessons.ts` and `lesson-content-a1-part1.ts` remain

## Files Modified/Created
- `/src/app/api/challenges/route.ts` (NEW)
- `/src/components/pages/ChallengesPage.tsx` (NEW)
- `/src/app/page.tsx` (MODIFIED)
- `/worklog.md` (MODIFIED)
