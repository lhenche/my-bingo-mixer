import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center rounded-[1.5rem] border p-3 text-center transition-all duration-200 select-none min-h-[76px] text-sm leading-tight shadow-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-300';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-gradient-to-br from-fuchsia-200 via-pink-100 to-violet-200 border-pink-300 text-fuchsia-900 shadow-[0_0_0_4px_rgba(236,72,153,0.12)] square-glow'
      : 'bg-white/90 border-pink-200 text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] square-pop'
    : 'bg-white/70 border-white/80 text-slate-700 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-30px_rgba(168,85,247,0.2)] active:translate-y-0';

  const freeSpaceClasses = square.isFreeSpace ? 'font-semibold text-slate-900 bg-fuchsia-50 border-pink-200 shadow-sm' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses} ${square.isFreeSpace ? 'cursor-default' : 'cursor-pointer'}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      {square.isFreeSpace ? (
        <span className="inline-flex flex-col items-center gap-1 text-sm font-semibold text-pink-600">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-xs shadow-sm">★</span>
          Libre
        </span>
      ) : (
        <span className="wrap-break-word hyphens-auto">{square.text}</span>
      )}
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-2 right-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink-600 text-white text-xs font-bold shadow-md">
          ✓
        </span>
      )}
    </button>
  );
}
