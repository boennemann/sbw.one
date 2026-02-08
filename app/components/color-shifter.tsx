"use client";

import { useCallback, useEffect, useRef } from "react";

function updateFavicon(hue: number) {
  const link = document.querySelector<HTMLLinkElement>(
    'link[rel="icon"][type="image/svg+xml"]'
  );
  if (link) link.href = `/api/icon?hue=${Math.round(hue)}`;
}

export default function ColorShifter() {
  const animRef = useRef<number | null>(null);

  // Sync favicon with the random hue set by the inline script on mount
  useEffect(() => {
    const hue = parseFloat(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--accent-hue")
        .trim()
    );
    if (!isNaN(hue)) updateFavicon(hue);
  }, []);

  const shiftColor = useCallback(() => {
    const root = document.documentElement;
    const current = parseFloat(
      getComputedStyle(root).getPropertyValue("--accent-hue").trim()
    );

    // Guard against NaN (broken CSS variable)
    const from = isNaN(current) ? 200 : current;

    // Pick a new hue at least 30° away
    let next: number;
    do {
      next = Math.floor(Math.random() * 360);
    } while (Math.abs(next - from) < 30 || Math.abs(next - from) > 330);

    if (animRef.current) cancelAnimationFrame(animRef.current);

    const start = performance.now();
    const duration = 600;

    let diff = next - from;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;

    function step(now: number) {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      const value = ((from + diff * eased) % 360 + 360) % 360;
      root.style.setProperty("--accent-hue", String(Math.round(value)));

      if (t < 1) {
        animRef.current = requestAnimationFrame(step);
      } else {
        animRef.current = null;
        updateFavicon(next);
      }
    }

    animRef.current = requestAnimationFrame(step);
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
