import { useState } from 'react';

interface CardProps {
  question: string;
  isFlipped: boolean;
  onTap: () => void;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export function Card({
  question,
  isFlipped,
  onTap,
  onSwipeLeft,
  onSwipeRight,
}: CardProps) {
  const [translateX, setTranslateX] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (isAnimating) return;
    setIsAnimating(true);
    const isMobile = window.innerWidth < 500;
    const targetTranslate = (direction === 'left' ? -1 : 1) * (isMobile ? 250 : 400);
    setTranslateX(targetTranslate);
    setOpacity(0);

    setTimeout(() => {
      if (direction === 'left') {
        onSwipeLeft();
      } else {
        onSwipeRight();
      }
      setTranslateX(0);
      setOpacity(1);
      setIsAnimating(false);
    }, 400);
  };

  return (
    <div className="relative w-full max-w-sm flex flex-col items-center gap-8">
      {/* Card container with flip animation */}
      <div
        onClick={onTap}
        className="relative w-full h-80 cursor-pointer perspective transition-all duration-500"
        style={{
          perspective: '1000px',
          transform: `translateX(${translateX}px)`,
          opacity,
        }}
      >
        <div
          className="relative w-full h-full transition-transform duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)',
          }}
        >
          {/* Card Back (Hidden state) */}
          <div
            className="absolute w-full h-full rounded-3xl bg-linear-to-br from-pink-300 via-violet-300 to-sky-300 p-8 flex items-center justify-center shadow-2xl border-2 border-white/50 backdrop-blur-sm"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">✨</div>
              <p className="text-white text-xl font-bold">Toca la tarjeta</p>
            </div>
          </div>

          {/* Card Front (Revealed state) */}
          <div
            className="absolute w-full h-full rounded-3xl bg-linear-to-br from-fuchsia-400 via-pink-400 to-violet-400 p-8 flex items-center justify-center shadow-2xl border-2 border-white/50 backdrop-blur-sm"
            style={{
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="text-center">
              <p className="text-white text-2xl font-bold leading-relaxed">
                {question}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Swipe/Response buttons */}
      {isFlipped && !isAnimating && (
        <div className="flex gap-4 animate-in fade-in duration-300">
          <button
            onClick={() => handleSwipe('left')}
            className="flex flex-col items-center gap-2 px-6 py-3 rounded-full bg-red-500/80 hover:bg-red-600 text-white font-semibold transition-all hover:scale-110 active:scale-95 shadow-lg"
          >
            <span className="text-xl">←</span>
            <span className="text-xs">Fallo</span>
          </button>
          <button
            onClick={() => handleSwipe('right')}
            className="flex flex-col items-center gap-2 px-6 py-3 rounded-full bg-green-500/80 hover:bg-green-600 text-white font-semibold transition-all hover:scale-110 active:scale-95 shadow-lg"
          >
            <span className="text-xl">→</span>
            <span className="text-xs">Éxito</span>
          </button>
        </div>
      )}
    </div>
  );
}
