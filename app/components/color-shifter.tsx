"use client";

import { useCallback, useEffect, useRef } from "react";

// Module-level hue tracker — avoids reading back from DOM
let hue = 0;

function syncToDOM() {
  document.documentElement.style.setProperty(
    "--accent-hue",
    String(Math.round(hue))
  );
}

function updateFavicon() {
  const link = document.querySelector<HTMLLinkElement>(
    'link[rel="icon"][type="image/svg+xml"]'
  );
  if (link) link.href = `/api/icon?hue=${Math.round(hue)}`;
}

export default function ColorShifter() {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Read initial hue set by inline script
    const initial = parseInt(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--accent-hue")
    );
    hue = isNaN(initial) ? 200 : initial;

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Rotate 1° every 100ms — full cycle in 36s
      intervalRef.current = setInterval(() => {
        hue = (hue + 1) % 360;
        syncToDOM();
      }, 100);
    }

    // Sync favicon on mount + every 30s
    updateFavicon();
    const faviconId = setInterval(updateFavicon, 30_000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearInterval(faviconId);
    };
  }, []);

  // Jump ahead 60–120° in the spectrum; rotation continues from there
  const shiftColor = useCallback(() => {
    const offset = 60 + Math.floor(Math.random() * 60);
    hue = (hue + offset) % 360;
    syncToDOM();
    updateFavicon();
  }, []);

  return (
    <button
      onClick={shiftColor}
      className="animate-fade-up-d1 group relative mt-8 flex cursor-pointer items-center gap-3 border-none bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505] rounded"
      aria-label="Change accent color"
      type="button"
    >
      {/* The accent line */}
      <span
        className="block h-[3px] w-16 rounded-full transition-all duration-300 group-hover:w-24 group-focus-visible:w-24 group-hover:shadow-[0_0_16px_var(--accent)] group-focus-visible:shadow-[0_0_16px_var(--accent)]"
        style={{ background: "var(--accent)" }}
      />
      {/* Hint label — visible on hover and keyboard focus */}
      <span
        className="font-mono text-[10px] uppercase tracking-widest opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0"
        style={{ color: "var(--accent)" }}
      >
        shift color
      </span>
    </button>
  );
}
