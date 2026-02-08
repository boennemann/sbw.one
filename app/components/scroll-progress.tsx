"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    function handleScroll() {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      el!.style.width = `${progress * 100}%`;
      el!.style.opacity = progress > 0 ? "0.8" : "0";
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-50 h-[2px] pointer-events-none"
      aria-hidden="true"
      style={{
        width: "0%",
        background: "var(--accent)",
        opacity: 0,
        transition: "opacity 0.3s ease",
      }}
    />
  );
}
