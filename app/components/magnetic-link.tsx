"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function MagneticLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || reducedMotion.current) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "inline-block",
        padding: "0.5rem 0",
        transition:
          "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), color 0.2s ease",
      }}
    >
      {children}
    </a>
  );
}
