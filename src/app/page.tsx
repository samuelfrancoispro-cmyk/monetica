export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-screen px-6">
      <div className="text-center max-w-2xl">
        <p
          className="text-xs tracking-[0.25em] uppercase mb-4"
          style={{ color: "var(--gold)", fontFamily: "var(--font-geist-sans)" }}
        >
          Le journal financier
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold mb-6"
          style={{ fontFamily: "var(--font-fraunces)", color: "var(--cream)" }}
        >
          Monetica
        </h1>
        <p
          className="text-lg md:text-xl mb-10"
          style={{ color: "var(--cream-dim)", fontFamily: "var(--font-geist-sans)" }}
        >
          Apprendre l&apos;argent en jouant — bientôt disponible.
        </p>
        <div
          className="inline-block px-1 py-0.5"
          style={{ borderBottom: "1px solid var(--gold-lo)" }}
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--gold-lo)", fontFamily: "var(--font-geist-sans)" }}
          >
            Phase 2 en cours
          </span>
        </div>
      </div>
    </main>
  );
}
