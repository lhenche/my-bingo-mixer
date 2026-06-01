interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative min-h-full overflow-hidden bg-[var(--color-bg)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-10 h-24 w-24 rounded-full bg-pink-300/40 blur-2xl" />
        <div className="absolute top-24 right-12 h-32 w-32 rounded-full bg-violet-300/30 blur-2xl" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-28 w-28 rounded-full bg-sky-200/30 blur-2xl" />
      </div>

      <div className="relative flex min-h-full flex-col items-center justify-center px-6 py-16">
        <div className="text-center max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-5 py-2 text-sm font-semibold text-pink-600 shadow-[0_0_0_1px_rgba(255,255,255,0.7)]">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-xl">✨</span>
            Anime Bubble Bingo
          </div>

          <h1 className="mt-8 text-5xl font-black tracking-tight text-transparent bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-500 bg-clip-text">
            ¡Encuentra tu bingo burbujeante!
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Conecta con tus amigos a través de preguntas divertidas mientras descubres qué casillas marcar.
          </p>
        </div>

        <div className="mt-12 w-full max-w-2xl rounded-[2rem] border border-white/70 bg-[var(--color-surface)] p-8 shadow-[0_32px_120px_-60px_rgba(168,85,247,0.45)] backdrop-blur-xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl bg-white/80 p-5 shadow-inner border border-white/70">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Cómo jugar</h2>
              <ul className="space-y-3 text-sm leading-6 text-slate-600">
                <li>• Busca personas que encajen con cada pregunta.</li>
                <li>• Toca una casilla cuando encuentres un match.</li>
                <li>• Haz 5 seguidas para ganar BINGO.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-violet-50/90 p-5 shadow-inner border border-violet-100">
              <h3 className="text-lg font-semibold text-violet-700 mb-3">Consejo burbuja</h3>
              <p className="text-sm leading-6 text-violet-700">
                Mantén los ojos abiertos para las respuestas más originales. ¡Las burbujas mágicas aparecen cuando menos lo esperas!
              </p>
            </div>
          </div>

          <button
            onClick={onStart}
            className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_20px_60px_-30px_rgba(219,39,119,0.8)] transition duration-200 hover:scale-[1.01] active:translate-y-0.5"
          >
            Empezar juego
          </button>
        </div>
      </div>
    </div>
  );
}
