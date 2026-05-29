# Task 1 & 2 - Pronunciation Fix & Images

## Task 1: Fix Pronunciation Recognition (CRITICAL)

### Changes Made to `/home/z/my-project/src/components/pages/ExercisesPage.tsx`:

1. **Added `image` field to PronunciationWord interface and PRONUNCIATION_WORDS data**
   - Each word now has an associated image path
   - Hello → hello.png, Water → water.png, Beautiful → beautiful.png, etc.

2. **Fixed incorrect attempt handling - NO SKIP on incorrect**
   - Before any attempt: Show Skip (Passer) button only
   - After CORRECT attempt: Encouragement overlay + auto-advance
   - After INCORRECT attempt: Show ONLY Retry (Réessayer) button, NO Skip
   - Learner must keep trying until they get it right

3. **Added `getSupportedMimeType()` utility function**
   - Checks: audio/webm;codecs=opus, audio/webm, audio/ogg;codecs=opus, audio/mp4
   - Returns first supported type or empty string
   - Used in all MediaRecorder creation and Blob creation paths

4. **Added word image display in pronunciation card**
   - 80x80 rounded image next to the word text
   - pronunciation.png banner image at top of card

5. **Added always-visible "Écouter le mot" (Listen) button**
   - Shown above the tip section
   - Available at all times, not just before attempts

### Changes Made to `/home/z/my-project/src/app/api/pronunciation/route.ts`:

1. **Added support for both parameter naming conventions**
   - audio_base64 OR audioBase64
   - target_word OR targetWord

2. **Added comprehensive error logging**
   - [Pronunciation API] prefix for all log messages
   - Separate try/catch for ASR call

3. **More robust transcript extraction**
   - Handles various ASR response formats (string, object with text/transcript/result)

4. **Prevents empty transcript from matching**
   - Added length check before includes() comparison

## Task 2: Add Images to All Exercise Tabs

1. **QuizTab**: quiz.png banner image at top of question card
2. **GrammarTab**: grammar.png banner image at top of exercise card
3. **VocabularyTab**: 
   - vocabulary.png banner image at top of flashcard
   - Word-specific images (64x64) in flashcard front side for A1 cards
4. **PronunciationTab**: pronunciation.png banner + word-specific images

## Lint Status
- All checks pass cleanly
