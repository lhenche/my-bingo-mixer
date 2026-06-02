# Design Spec: Card Deck Shuffle Mode

## Overview
New game mode alongside traditional Bingo. Players tap to draw random question cards from a deck, creating a more immediate, turn-based experience.

## Modes

### Mode 1: Bingo Bubbles (Existing)
- 5x5 grid with 24 questions + 1 free space
- Players find matches and tap squares
- Win condition: 5 in a row or 4 corners
- Status: ✅ Implemented

### Mode 2: Card Deck Shuffle (New)
- Single card drawn on tap
- Shows random question from deck
- Pure icebreaker/conversation flow
- No win condition, endless play
- Status: 🚧 In Development

## Card Deck Shuffle Flow

### Screen 1: Mode Selection (Entry Point)
- Display from StartScreen after splash
- Two large card buttons:
  - "Bingo Bubbles" (existing game)
  - "Card Deck Shuffle" (new mode)
- Select mode → proceed

### Screen 2: Card Deck Game
- Large card container (center screen)
- **Card shows question IMMEDIATELY** (no need to tap first)
- Card back animates away on entry
- Two response buttons appear below:
  - **Left (Red)**: ← Fallo - Mark as fail/skip
  - **Right (Green)**: → Éxito - Mark as success/complete
- Tap either button → New random card slides in (smooth swipe animation)
- Simple reset button to return to mode selection

## Visual Design

### Card Component
- Dimensions: ~300-400px width on mobile, responsive
- Background: Gradient (anime bubble aesthetic)
- Border: Glowing effect, rounded corners
- Animation: Flip/scale on tap
- Text: Large, readable font

### Color Palette
- Use existing theme: Pink, Violet, Sky gradients
- Match anime bubble aesthetic from Bingo mode
- Accessibility: Sufficient contrast

### Interactions
- Tap card: Flip animation + reveal question
- Tap card again: New random question (shuffle animation)
- Haptic feedback would be nice (if supported)

## Implementation Priority

1. ✅ Mode selection screen (modify StartScreen)
2. 🔄 CardDeckGame component
3. 🔄 Card component with flip animation
4. 🔄 Game logic hook (useCardDeckGame)
5. 🔄 Integrate into App.tsx

## Design Decisions

- **Card-based vs List**: Card format feels more interactive and aligned with bubble theme
- **No scoring**: Simpler UX for pure icebreaker use
- **Infinite play**: Deck shuffles indefinitely (repeat questions)
- **Consistent Questions**: Reuse existing question set from Bingo mode

## Notes for Iteration

- Start with card flip in 2D (simpler, faster)
- Add 3D flip if time allows
- Focus on clean, playable state first
- Gather feedback on card sizing and tap zones
