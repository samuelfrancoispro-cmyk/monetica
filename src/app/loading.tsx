export default function Loading() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-screen">
      <div
        className="w-8 h-8 rounded-full"
        style={{
          border: "2px solid var(--gold-lo)",
          borderTopColor: "var(--gold)",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </main>
  );
}
