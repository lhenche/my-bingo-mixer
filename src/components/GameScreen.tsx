import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="relative min-h-full overflow-hidden bg-(--color-bg-alt)">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-8 h-24 w-24 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute top-28 right-10 h-28 w-28 rounded-full bg-violet-300/30 blur-3xl" />
        <div className="absolute bottom-16 left-16 h-20 w-20 rounded-full bg-sky-300/30 blur-3xl" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-4 py-5">
        <button
          onClick={onReset}
          className="rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.25)] transition hover:bg-white"
        >
          ← Nuevo tablero
        </button>

        <div className="rounded-3xl bg-white/80 px-5 py-3 text-center shadow-[0_20px_70px_-40px_rgba(168,85,247,0.35)] backdrop-blur-xl border border-white/60">
          <p className="text-xs uppercase tracking-[0.25em] text-pink-500">Anime Bubble Bingo</p>
          <h1 className="mt-1 text-2xl font-black text-slate-900">Bingo Mixer</h1>
        </div>

        <div className="w-12" />
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-8">
        <p className="mt-2 rounded-full bg-white/80 px-4 py-2 text-center text-sm font-medium text-slate-600 shadow-sm border border-white/60">
          Pregunta primero, luego marca. El centro ya es tu espacio libre.
        </p>

        {hasBingo && (
          <div className="mt-5 rounded-4xl border border-pink-200/80 bg-pink-50/90 px-5 py-4 text-center text-sm font-semibold text-pink-800 shadow-[0_20px_50px_-30px_rgba(236,72,153,0.45)] bingo-highlight">
            <span className="text-lg">🎉</span> ¡BINGO! Haz conseguido una línea.
          </div>
        )}

        <div className="mt-8 w-full">
          <BingoBoard
            board={board}
            winningSquareIds={winningSquareIds}
            onSquareClick={onSquareClick}
          />
        </div>
      </div>
    </div>
  );
}
