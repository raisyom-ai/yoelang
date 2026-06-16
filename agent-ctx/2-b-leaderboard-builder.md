# Task 2-b: Leaderboard Builder

## Task
Build Leaderboard page + API routes

## Work Log
- Created /home/z/my-project/src/app/api/leaderboard/route.ts
  - GET endpoint with query params: period (weekly|alltime), level (A1-C2|all), userId
  - Weekly: aggregates xpEarned from LessonCompletion for last 7 days
  - Alltime: uses total XP from User table
  - Returns top 50 + requesting user's position if not in top 50
  - Level filtering applied to all queries
  - Input validation for period and level params

- Created /home/z/my-project/src/components/pages/LeaderboardPage.tsx
  - Sticky top bar with back/home buttons and "Classement" title
  - Period toggle: "Cette semaine" / "Tous les temps"
  - Level filter dropdown (Tous, A1-C2)
  - Top 3 podium with gold/silver/bronze gradient cards + medals (🥇🥈🥉)
  - Podium layout: 2nd | 1st | 3rd (visual podium order)
  - Scrollable ranking list for positions 4-50
  - Each row: rank, avatar, name, level badge, XP, streak flame, premium crown
  - Current user row highlighted in list
  - Sticky bottom "Votre position" card
  - Framer-motion animations
  - Empty state with encouraging message

- Registered in page.tsx:
  - Added dynamic import for LeaderboardPage
  - Added 'leaderboard': LeaderboardPage to pageComponents

- Lint passes for all new/modified files
- Dev server compiling successfully

## Dependencies
- Uses `import { db } from '@/lib/db'` for Prisma access
- Uses existing Prisma models: User, LessonCompletion
- Uses existing shadcn/ui components: Card, Button, Badge, Avatar, DropdownMenu
- Uses framer-motion for animations
- Uses lucide-react for icons
