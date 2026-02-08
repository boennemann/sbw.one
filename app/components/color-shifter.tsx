"use client";

import { useCallback, useRef, useState } from "react";

export default function ColorShifter() {
  const animRef = useRef<number | null>(null);
  const [hovering, setHovering] = useState(false);

  const shiftColor = useCallback(() => {
    const root = document.documentElement;
    const current = parseFloat(
      getComputedStyle(root).getPropertyValue("--accent-hue").trim()
    );

    // Pick a new hue at least 30° away
    let next: number;
    do {
      next = Math.floor(Math.random() * 360);
    } while (Math.abs(next - current) < 30 || Math.abs(next - current) > 330);

    if (animRef.current) cancelAnimationFrame(animRef.current);

    const start = performance.now();
    const duration = 600;
    const from = current;

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
      }
    }

    animRef.current = requestAnimationFrame(step);
  }, []);

  return (
    <button
      onClick={shiftColor}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="animate-fade-up-d1 group relative mt-8 flex cursor-pointer items-center gap-3 border-none bg-transparent p-0"
      aria-label="Change accent color"
      type="button"
    >
      {/* The accent line */}
      <span
        className="block h-[3px] w-16 rounded-full transition-all duration-300 group-hover:w-24 group-hover:shadow-[0_0_16px_var(--accent)]"
        style={{ background: "var(--accent)" }}
      />
      {/* Hint label */}
      <span
        className="font-mono text-[10px] uppercase tracking-widest transition-all duration-300"
        style={{
          color: "var(--accent)",
          opacity: hovering ? 1 : 0,
          transform: hovering ? "translateX(0)" : "translateX(-8px)",
        }}
      >
        shift color
      </span>
    </button>
  );
}
