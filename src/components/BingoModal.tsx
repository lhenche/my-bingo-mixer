interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4">
      <div className="relative w-full max-w-sm overflow-hidden rounded-4xl border border-white/60 bg-white/95 p-6 text-center shadow-[0_30px_80px_-40px_rgba(124,58,237,0.45)] animate-[bounce_0.5s_ease-out]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,222,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_30%)]" />
        <div className="relative z-10">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/85 text-5xl shadow-[0_15px_35px_-15px_rgba(168,85,247,0.35)] sparkle-ring">
            🎉
          </div>
          <h2 className="text-4xl font-extrabold text-fuchsia-600">BINGO!</h2>
          <p className="mt-2 text-sm text-slate-600">¡Completaste una línea perfecta!</p>
        </div>

        <button
          onClick={onDismiss}
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-fuchsia-500 via-pink-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_50px_-20px_rgba(236,72,153,0.65)] transition hover:scale-[1.01] active:translate-y-0.5"
        >
          Seguir jugando
        </button>
      </div>
    </div>
  );
}
