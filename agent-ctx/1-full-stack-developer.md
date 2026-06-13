# Task 1 — Real Google/Apple OAuth Implementation

## Summary
Replaced the fake OAuth (email domain checking via OAuthDialog) with real NextAuth.js OAuth providers.

## Changes Made

### src/lib/auth.ts
- Removed fallback secret `'yoelang-dev-secret-change-in-production'` → now uses `process.env.NEXTAUTH_SECRET` only
- Enhanced `signIn` callback to attach DB user fields (id, role, level, xp, etc.) to the user object for OAuth sign-ins, so the JWT callback can populate the token correctly

### src/components/OAuthButtonGroup.tsx (NEW)
- Reusable component that fetches `/api/auth/providers` to check which OAuth providers are configured
- Shows Google/Apple buttons that call `signIn('google'/'apple', { callbackUrl: '/?oauth=1' })`
- Disabled buttons with tooltip if provider env vars are not set
- Loading spinner while checking provider availability

### src/components/pages/LoginPage.tsx
- Replaced `OAuthDialog` import with `OAuthButtonGroup`
- Removed `oauthDialog` state, `OAuthProvider` type, and `handleOAuthSuccess` function
- Google/Apple buttons now trigger real NextAuth OAuth via `OAuthButtonGroup`

### src/components/pages/RegisterPage.tsx
- Same changes as LoginPage: replaced `OAuthDialog` with `OAuthButtonGroup`
- Removed `oauthDialog` state, `handleOAuthSuccess`, `buildUserState`, `fetchUserProgress` (unused after removing fake OAuth)

### src/app/page.tsx
- Added toast notifications for OAuth callback success/failure
- Improved error messaging when session fetch fails

### src/components/OAuthDialog.tsx (DELETED)
- This component implemented fake OAuth (just email domain checking) — deleted since we use real OAuth now

### src/app/api/auth/oauth-login/route.ts
- Added prominent DEPRECATED header comment explaining this is NOT real OAuth
- Kept the route as development fallback

## How It Works
1. User clicks "Continuer avec Google" → `signIn('google', { callbackUrl: '/?oauth=1' })` is called
2. NextAuth redirects user to Google's actual login page
3. After Google auth, NextAuth processes the callback at `/api/auth/callback/google`
4. The `signIn` callback in `auth.ts` creates/updates the user in the database
5. NextAuth redirects to `/?oauth=1`
6. `page.tsx` detects the `?oauth=1` param, fetches the NextAuth session, populates Zustand store, loads user progress
7. User is navigated to the dashboard

## Notes
- The `.env` file has placeholder values for GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, APPLE_ID, etc.
- To enable real OAuth, replace these placeholder values with actual credentials from Google Cloud Console and Apple Developer Portal
- The OAuthButtonGroup shows buttons as disabled with tooltip if env vars are not configured
- Lint passes, dev server runs at 200 status
