import Link from "next/link";
import LastSeen from "./components/last-seen";
import ColorShifter from "./components/color-shifter";
import VoxelScene from "./components/voxel-scene";

const links = [
  { label: "GitHub", href: "https://github.com/boennemann" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/boennemann/" },
  { label: "X", href: "https://x.com/boennemann" },
  { label: "Instagram", href: "https://instagram.com/boennemann" },
];

const companyHref =
  "https://liechtensteinlife.com/en-DE/markets/de/partner/technology";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-[hsl(var(--accent-hue)_60%_65%/0.3)]">
      {/* Ambient glow */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-48 top-1/4 h-[700px] w-[700px] rounded-full bg-[hsl(var(--accent-hue)_70%_50%/0.05)] blur-[150px]" />
        <div className="absolute -left-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[hsl(var(--accent-hue)_70%_50%/0.03)] blur-[120px]" />
      </div>

      {/* Grid texture */}
      <div
        className="grid-bg pointer-events-none fixed inset-0"
        aria-hidden="true"
      />

      {/* Voxel background (fixed behind everything) */}
      <VoxelScene />

      {/* Hero */}
      <section className="pointer-events-none relative flex min-h-screen flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32">
        <div className="pointer-events-auto relative">
          <h1 className="animate-fade-up text-[clamp(2.8rem,8vw,7.5rem)] font-bold leading-[0.93] tracking-[-0.035em]">
            Stephan
            <br />
            Bönnemann-
            <br />
            Walenta
          </h1>

          <ColorShifter />

          <p className="animate-fade-up-d2 mt-6 font-mono text-sm uppercase tracking-widest text-[var(--accent)] sm:text-base">
            Builder of Things
          </p>

          <p className="animate-fade-up-d3 mt-1.5 font-mono text-xs tracking-wider text-neutral-500 sm:text-sm">
            Putzbrunn, Germany, Europe
          </p>

          <div className="animate-fade-up-d4 mt-1.5 font-mono text-xs tracking-wider text-neutral-500 sm:text-sm">
            <LastSeen />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="animate-fade-up-d4 absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="animate-pulse-line h-10 w-px bg-neutral-600" />
        </div>
      </section>

      {/* About */}
      <section className="pointer-events-none relative px-6 py-32 sm:px-12 md:px-20 lg:px-32">
        <div className="pointer-events-auto max-w-xl">
          <p className="text-lg leading-relaxed text-neutral-400 sm:text-xl">
            CTO at{" "}
            <a
              href={companyHref}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Liechtenstein Life | Prosperity
            </a>
            . Building Prosperity by day, building things with my hands on the
            side. Vibe coding after dark.
          </p>
        </div>
      </section>

      {/* Links */}
      <section className="pointer-events-none relative px-6 py-24 sm:px-12 md:px-20 lg:px-32">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-neutral-600">
          Elsewhere
        </p>
        <nav className="pointer-events-auto flex flex-wrap gap-x-10 gap-y-5">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="link font-mono text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
        </nav>
      </section>

      {/* Footer */}
      <footer className="pointer-events-none relative px-6 py-12 sm:px-12 md:px-20 lg:px-32">
        <div className="pointer-events-auto flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-neutral-800/60 pt-10">
          <a
            href="mailto:web@sbw.one"
            className="link font-mono text-xs tracking-wide sm:text-sm"
          >
            web@sbw.one
          </a>
          <Link
            href="/legal"
            className="link font-mono text-xs tracking-wide sm:text-sm"
          >
            Legal
          </Link>
        </div>
      </footer>
    </main>
  );
}
