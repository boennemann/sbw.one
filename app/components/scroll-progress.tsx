"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function handleScroll() {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? window.scrollY / docHeight : 0);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 z-50 h-[2px] pointer-events-none"
      aria-hidden="true"
      style={{
        width: `${progress * 100}%`,
        background: "var(--accent)",
        opacity: 0.8,
      }}
    />
  );
}
