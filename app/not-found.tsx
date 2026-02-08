import Link from "next/link";

export default function NotFound() {
  return (
    <main className="animate-page-enter relative flex min-h-screen flex-col items-center justify-center px-6 selection:bg-[hsl(var(--accent-hue)_60%_65%/0.3)]">
      <p className="font-mono text-sm uppercase tracking-widest text-[var(--accent)]">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">Page not found</h1>
      <Link
        href="/"
        className="link mt-8 font-mono text-sm"
      >
        &larr; Back home
      </Link>
    </main>
  );
}
