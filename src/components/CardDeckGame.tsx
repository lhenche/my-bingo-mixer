import { Card } from './Card';

interface CardDeckGameProps {
  question: string;
  isFlipped: boolean;
  onCardTap: () => void;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onReset: () => void;
}

export function CardDeckGame({
  question,
  isFlipped,
  onCardTap,
  onSwipeLeft,
  onSwipeRight,
  onReset,
}: CardDeckGameProps) {
  return (
    <div className="relative min-h-full overflow-hidden bg-(--color-bg)">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-10 h-32 w-32 rounded-full bg-pink-300/40 blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-12 h-40 w-40 rounded-full bg-violet-300/30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-36 w-36 rounded-full bg-sky-200/30 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative flex min-h-full flex-col items-center justify-center px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-5 py-2 text-sm font-semibold text-fuchsia-600 shadow-[0_0_0_1px_rgba(255,255,255,0.7)]">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-fuchsia-100 text-xl">🎴</span>
            Card Deck Shuffle
          </div>
        </div>

        {/* Card Container */}
        <div className="flex flex-col items-center gap-8">
          <Card
            question={question}
            isFlipped={isFlipped}
            onTap={onCardTap}
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}
          />
        </div>

        {/* Controls */}
        <div className="mt-20 flex gap-4">
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 hover:bg-slate-300/80 px-8 py-3 text-sm font-semibold text-slate-700 transition duration-200 hover:scale-105 active:translate-y-0.5"
          >
            ← Volver
          </button>
        </div>
      </div>
    </div>
  );
}
