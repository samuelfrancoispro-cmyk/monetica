import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-screen px-6 text-center">
      <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>
        404
      </p>
      <h2
        className="text-3xl font-bold mb-4"
        style={{ fontFamily: "var(--font-fraunces)", color: "var(--cream)" }}
      >
        Page introuvable
      </h2>
      <p className="text-sm mb-8" style={{ color: "var(--cream-dim)" }}>
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="text-xs tracking-widest uppercase"
        style={{ color: "var(--gold)", textDecoration: "underline", textUnderlineOffset: "4px" }}
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
