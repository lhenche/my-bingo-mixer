interface StartScreenProps {
  onStartBingo: () => void;
  onStartCardDeck: () => void;
}

export function StartScreen({ onStartBingo, onStartCardDeck }: StartScreenProps) {
  return (
    <div className="relative min-h-full overflow-hidden bg-(--color-bg)">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-10 h-24 w-24 rounded-full bg-pink-300/40 blur-2xl" />
        <div className="absolute top-24 right-12 h-32 w-32 rounded-full bg-violet-300/30 blur-2xl" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-28 w-28 rounded-full bg-sky-200/30 blur-2xl" />
      </div>

      <div className="relative flex min-h-full flex-col items-center justify-center px-6 py-16">
        <div className="text-center max-w-xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-5 py-2 text-sm font-semibold text-pink-600 shadow-[0_0_0_1px_rgba(255,255,255,0.7)]">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-xl">✨</span>
            Anime Bubble Games
          </div>

          <h1 className="mt-8 text-5xl font-black tracking-tight text-transparent bg-linear-to-r from-fuchsia-500 via-pink-500 to-violet-500 bg-clip-text">
            ¡Elige tu juego!
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Dos formas divertidas de conectar con tus amigos
          </p>
        </div>

        {/* Game Mode Selection */}
        <div className="grid gap-6 w-full max-w-3xl lg:grid-cols-2">
          {/* Bingo Bubbles Card */}
          <button
            onClick={onStartBingo}
            className="group rounded-4xl border border-white/70 bg-(--color-surface) p-8 shadow-[0_32px_120px_-60px_rgba(219,39,119,0.4)] backdrop-blur-xl hover:shadow-[0_32px_120px_-30px_rgba(219,39,119,0.6)] transition duration-300 hover:scale-105 active:scale-95"
          >
            <div className="text-5xl mb-4">🎰</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Bingo Bubbles</h2>
            <div className="rounded-2xl bg-white/60 p-4 mb-4">
              <ul className="space-y-2 text-sm leading-6 text-slate-600 text-left">
                <li>• Encuentra 5 en raya</li>
                <li>• Marca casillas</li>
                <li>• Gana BINGO</li>
              </ul>
            </div>
            <p className="text-sm text-slate-500 group-hover:text-slate-700 transition">
              Juego clásico de emparejamiento
            </p>
          </button>

          {/* Card Deck Shuffle Card */}
          <button
            onClick={onStartCardDeck}
            className="group rounded-4xl border border-white/70 bg-(--color-surface) p-8 shadow-[0_32px_120px_-60px_rgba(168,85,247,0.4)] backdrop-blur-xl hover:shadow-[0_32px_120px_-30px_rgba(168,85,247,0.6)] transition duration-300 hover:scale-105 active:scale-95"
          >
            <div className="text-5xl mb-4">🎴</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Card Deck Shuffle</h2>
            <div className="rounded-2xl bg-white/60 p-4 mb-4">
              <ul className="space-y-2 text-sm leading-6 text-slate-600 text-left">
                <li>• Toca una tarjeta</li>
                <li>• Descubre preguntas</li>
                <li>• Sin fin</li>
              </ul>
            </div>
            <p className="text-sm text-slate-500 group-hover:text-slate-700 transition">
              Icebreaker infinito
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
