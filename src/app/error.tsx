"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-screen px-6 text-center">
      <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--ember)" }}>
        Erreur
      </p>
      <h2
        className="text-3xl font-bold mb-4"
        style={{ fontFamily: "var(--font-fraunces)", color: "var(--cream)" }}
      >
        Quelque chose a mal tourné
      </h2>
      <p className="text-sm mb-8" style={{ color: "var(--cream-dim)" }}>
        {error.message}
      </p>
      <button
        onClick={reset}
        className="px-6 py-2 text-sm tracking-widest uppercase"
        style={{
          border: "1px solid var(--gold-lo)",
          color: "var(--gold)",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        Réessayer
      </button>
    </main>
  );
}
