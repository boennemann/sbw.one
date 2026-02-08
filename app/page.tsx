import Link from "next/link";
import LastSeen from "./components/last-seen";
import ColorShifter from "./components/color-shifter";
import VoxelScene from "./components/voxel-loader";
import ScrollReveal from "./components/scroll-reveal";
import MagneticLink from "./components/magnetic-link";
import ScrollProgress from "./components/scroll-progress";

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
      <ScrollProgress />
      <a href="#about" className="skip-link">
        Skip to content
      </a>

      {/* Ambient glow — radial gradients instead of blur (blur kills mobile GPU) */}
      <div
        className="ambient-glow pointer-events-none fixed inset-0"
        aria-hidden="true"
      />

      {/* Grid texture — desktop only */}
      <div
        className="grid-bg pointer-events-none fixed inset-0 hidden sm:block"
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

          <p className="animate-fade-up-d4 mt-1.5 font-mono text-xs tracking-wider text-neutral-500 sm:text-sm">
            <LastSeen />
          </p>
        </div>

        {/* Scroll hint */}
        <div className="animate-fade-up-d4 absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="animate-pulse-line h-10 w-px bg-neutral-600" />
        </div>
      </section>

      {/* About */}
      <section id="about" aria-label="About" className="pointer-events-none relative px-6 py-32 sm:px-12 md:px-20 lg:px-32">
        <ScrollReveal className="pointer-events-auto max-w-xl">
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
            . I build things — software products by trade, everything else by hand.
          </p>
        </ScrollReveal>
      </section>

      {/* Links */}
      <section className="pointer-events-none relative px-6 py-24 sm:px-12 md:px-20 lg:px-32">
        <ScrollReveal>
          <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-neutral-600">
            Elsewhere
          </h2>
          <nav aria-label="Social links" className="pointer-events-auto flex flex-wrap gap-x-10 gap-y-5">
            {links.map(({ label, href }) => (
              <MagneticLink
                key={label}
                href={href}
                className="link font-mono text-sm sm:text-base"
              >
                {label}
              </MagneticLink>
            ))}
          </nav>
        </ScrollReveal>
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
