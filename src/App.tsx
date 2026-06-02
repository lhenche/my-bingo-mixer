import { useBingoGame } from './hooks/useBingoGame';
import { useCardDeckGame } from './hooks/useCardDeckGame';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { CardDeckGame } from './components/CardDeckGame';
import { BingoModal } from './components/BingoModal';

function App() {
  const bingoGame = useBingoGame();
  const cardDeckGame = useCardDeckGame();

  // Show mode selection screen
  if (bingoGame.gameState === 'start') {
    return (
      <StartScreen
        onStartBingo={bingoGame.startGame}
        onStartCardDeck={cardDeckGame.startCardDeckGame}
      />
    );
  }

  // Show Card Deck Game mode
  if (cardDeckGame.gameState === 'card-deck') {
    return (
      <CardDeckGame
        question={cardDeckGame.currentQuestion}
        isFlipped={cardDeckGame.isFlipped}
        onCardTap={cardDeckGame.handleCardTap}
        onSwipeLeft={() => cardDeckGame.handleCardSwipe('left')}
        onSwipeRight={() => cardDeckGame.handleCardSwipe('right')}
        onReset={() => {
          cardDeckGame.resetGame();
          bingoGame.resetGame();
        }}
      />
    );
  }

  // Show Bingo Game mode (default)
  return (
    <>
      <GameScreen
        board={bingoGame.board}
        winningSquareIds={bingoGame.winningSquareIds}
        hasBingo={bingoGame.gameState === 'bingo'}
        onSquareClick={bingoGame.handleSquareClick}
        onReset={() => {
          bingoGame.resetGame();
          cardDeckGame.resetGame();
        }}
      />
      {bingoGame.showBingoModal && (
        <BingoModal onDismiss={bingoGame.dismissModal} />
      )}
    </>
  );
}

export default App;
