import { useState, useCallback } from 'react';
import { questions } from '../data/questions';

export type CardDeckGameState = 'card-deck' | 'mode-selection';

interface CardDeckGameHook {
  gameState: CardDeckGameState;
  currentQuestion: string;
  isFlipped: boolean;
  startCardDeckGame: () => void;
  resetGame: () => void;
  handleCardTap: () => void;
  handleCardSwipe: (direction: 'left' | 'right') => void;
}

export function useCardDeckGame(): CardDeckGameHook {
  const [gameState, setGameState] = useState<CardDeckGameState>('mode-selection');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  const getRandomQuestion = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }, []);

  const startCardDeckGame = useCallback(() => {
    setGameState('card-deck');
    setCurrentQuestion(getRandomQuestion());
    setIsFlipped(true); // Show question immediately when entering the game
  }, [getRandomQuestion]);

  const resetGame = useCallback(() => {
    setGameState('mode-selection');
    setCurrentQuestion('');
    setIsFlipped(false);
  }, []);

  const handleCardTap = useCallback(() => {
    if (!isFlipped) {
      // First tap: reveal current question
      setIsFlipped(true);
    } else {
      // Second tap: get new question
      setCurrentQuestion(getRandomQuestion());
      setIsFlipped(true);
    }
  }, [isFlipped, getRandomQuestion]);

  const handleCardSwipe = useCallback(() => {
    // Get new question on swipe (fallo/éxito)
    setCurrentQuestion(getRandomQuestion());
    setIsFlipped(true);
  }, [getRandomQuestion]);

  return {
    gameState,
    currentQuestion,
    isFlipped,
    startCardDeckGame,
    resetGame,
    handleCardTap,
    handleCardSwipe,
  };
}
