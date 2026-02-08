import Link from "next/link";
import LastSeen from "./components/last-seen";
import ColorShifter from "./components/color-shifter";
import VoxelLoader from "./components/voxel-loader";
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
      <VoxelLoader />

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
        <div className="animate-fade-up-d4 absolute bottom-10 left-1/2 -translate-x-1/2" aria-hidden="true">
          <div className="animate-pulse-line h-10 w-px bg-neutral-600" />
        </div>
      </section>

      {/* About */}
      <section id="about" aria-label="About" className="pointer-events-none relative px-6 py-32 sm:px-12 md:px-20 lg:px-32">
        <ScrollReveal className="pointer-events-auto max-w-xl">
          <p className="text-lg leading-relaxed text-neutral-400 sm:text-xl">
            I build things&thinsp;— software products by trade, everything else
            by hand.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-neutral-400 sm:text-xl">
            It started with building the school&rsquo;s website. By
            2011 a friend and I were building a{" "}
            <a
              href="https://zenhabits.net/zen-to-done-ztd-the-ultimate-simple-productivity-system/"
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zen To Done
            </a>
            {" "}iPhone app with web tech and PhoneGap&thinsp;— product,
            design, marketing, code, everything. Being self-taught, we just
            thought that&rsquo;s all what programmers do.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-neutral-400 sm:text-xl">
            I got into open source early, contributing to{" "}
            <a
              href="https://github.com/hoodiehq/hoodie"
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hoodie
            </a>
            , then creating{" "}
            <a
              href="https://github.com/semantic-release/semantic-release"
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              semantic-release
            </a>
            {" "}and later{" "}
            <a
              href="https://github.com/greenkeeperio/greenkeeper"
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Greenkeeper
            </a>
            . That work took me around the world speaking at conferences and
            led me to co-found{" "}
            <a
              href="https://2015.conc.at/"
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              .concat()
            </a>
            , a web development conference in Salzburg.
          </p>
        </ScrollReveal>
      </section>

      {/* Projects */}
      <section aria-label="Projects" className="pointer-events-none relative px-6 py-24 sm:px-12 md:px-20 lg:px-32">
        <ScrollReveal>
          <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-neutral-600">
            Projects
          </h2>
          <ul className="pointer-events-auto max-w-xl space-y-6">
            <li>
              <div className="flex items-baseline justify-between gap-4">
                <a
                  href="https://github.com/semantic-release/semantic-release"
                  className="text-link font-mono"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  semantic-release
                </a>
                <span className="font-mono text-xs text-neutral-600">23k+ ★</span>
              </div>
              <p className="mt-1 text-sm text-neutral-500">
                Fully automated version management and package publishing.
              </p>
            </li>
            <li>
              <div className="flex items-baseline justify-between gap-4">
                <a
                  href="https://github.com/greenkeeperio/greenkeeper"
                  className="text-link font-mono"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Greenkeeper
                </a>
                <span className="font-mono text-xs text-neutral-600">Acquired by Snyk</span>
              </div>
              <p className="mt-1 text-sm text-neutral-500">
                Automated dependency updates for npm and GitHub.
              </p>
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* Speaking */}
      <section aria-label="Speaking" className="pointer-events-none relative px-6 py-24 sm:px-12 md:px-20 lg:px-32">
        <ScrollReveal>
          <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-neutral-600">
            Speaking
          </h2>
          <ul className="pointer-events-auto max-w-xl space-y-6">
            <li>
              <a
                href="https://www.youtube.com/watch?v=tc2UgG5L7WM"
                className="text-link text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                We fail to follow SemVer — and why it needn&rsquo;t matter
              </a>
              <p className="mt-1 font-mono text-xs text-neutral-600">
                JSConf Budapest · 2015
              </p>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=DQVBSmIEH1g"
                className="text-link text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dependency Hell Just Froze Over
              </a>
              <p className="mt-1 font-mono text-xs text-neutral-600">
                NodeConf EU · 2015
              </p>
            </li>
          </ul>
          <p className="mt-6 font-mono text-xs text-neutral-600">
            21 conferences in 9 countries
          </p>
        </ScrollReveal>
      </section>

      {/* Career */}
      <section aria-label="Career" className="pointer-events-none relative px-6 py-24 sm:px-12 md:px-20 lg:px-32">
        <ScrollReveal>
          <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-neutral-600">
            Career
          </h2>
          <p className="pointer-events-auto max-w-xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
            What followed were years of engagements across
            industries&thinsp;— freelance and full-time. Happy to have
            found{" "}
            <a
              href={companyHref}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Liechtenstein Life | Prosperity
            </a>
            {" "}more than five years ago, where I serve as CTO. We&rsquo;re
            building the future of pensions across Europe.
          </p>
        </ScrollReveal>
      </section>

      {/* Off Screen */}
      <section aria-label="Off Screen" className="pointer-events-none relative px-6 py-24 sm:px-12 md:px-20 lg:px-32">
        <ScrollReveal>
          <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-neutral-600">
            Off Screen
          </h2>
          <p className="pointer-events-auto max-w-xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
            Restoring a house built in 1907, running a{" "}
            <a
              href="https://www.printables.com/@sbwww"
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              3D printer
            </a>
            , and spending time in the workshop. Greyhound on the sofa.
            Twin dad. Cyborg.
          </p>
        </ScrollReveal>
      </section>

      {/* Elsewhere */}
      <section aria-label="Elsewhere" className="pointer-events-none relative px-6 py-24 sm:px-12 md:px-20 lg:px-32">
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
            className="link py-2 font-mono text-xs tracking-wide sm:text-sm"
          >
            web@sbw.one
          </a>
          <Link
            href="/legal"
            className="link py-2 font-mono text-xs tracking-wide sm:text-sm"
          >
            Legal
          </Link>
        </div>
      </footer>
    </main>
  );
}
