# Task 3 - Pronunciation Fix Agent

## Summary
Completely rewrote the `PronunciationStep` component in `/home/z/my-project/src/components/pages/CoursePage.tsx` to replace the fake `simulateRecording()` with real speech recognition.

## Changes Made

### CoursePage.tsx (single file, targeted edits)

1. **Imports updated**: Added `useCallback`, `useRef`, `RefreshCw`, `SkipForward`, `AlertCircle`, `Loader2`, `Square`

2. **PRONUNCIATION_ITEMS updated**: Replaced Thought/Weather/Comfortable/Restaurant with A1-appropriate Hello/Thank you/Water/Beautiful, all with French-language tips

3. **Parent component cleaned up**:
   - Removed `isRecording` state (moved inside PronunciationStep)
   - Removed `simulateRecording()` function (was fake - just waited 2s)
   - Removed `pronunciationAttempted` state (moved inside PronunciationStep)
   - Updated PronunciationStep props: `onComplete={goNext}` instead of `isRecording/attempted/onRecord`

4. **Helper functions added** (outside component):
   - `getSupportedMimeType()` - detects audio/webm;codecs=opus, audio/webm, audio/ogg;codecs=opus, audio/mp4
   - `levenshteinDistance(a, b)` - Levenshtein distance for word comparison
   - `calculateSimilarity(a, b)` - returns 0-100% similarity
   - `createSpeechRecognition()` - creates Web Speech API instance with cross-browser support

5. **PronunciationStep completely rewritten**:
   - Self-contained state: isRecording, isProcessing, currentAttempt, micError, micLevel, recordingSeconds, attemptCount, isCorrect
   - Refs: mediaRecorderRef, audioChunksRef, streamRef, analyserRef, animFrameRef, recognitionRef, recordingTimerRef, autoAdvanceTimerRef
   - Real microphone access via `navigator.mediaDevices.getUserMedia({ audio: true })`
   - Web Speech API as primary recognition (Chrome/Edge)
   - Backend ASR fallback via `/api/pronunciation` (z-ai-web-dev-sdk)
   - MediaRecorder for audio capture + Web Audio API AnalyserNode for visualization
   - Recording timer, manual stop button, processing spinner
   - Result: transcript vs expected, confidence %, color-coded (green/gold/red)
   - Retry button always shown on incorrect; Skip button after 3+ failed attempts
   - Success animation + auto-advance after 2s
   - Full cleanup on unmount and item change

### Backend (unchanged)
- `/api/pronunciation/route.ts` already exists and works with z-ai-web-dev-sdk ASR

## Verification
- `bun run lint` passes cleanly
- Dev server compiles without errors
