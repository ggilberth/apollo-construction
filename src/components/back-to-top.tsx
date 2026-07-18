"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

type BackToTopProps = {
  targetId: string;
};

export function BackToTop({ targetId }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 600);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    const target = document.getElementById(targetId);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target?.focus({ preventScroll: true });
    target?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-800 text-white shadow-xl transition hover:bg-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
      onClick={scrollToTop}
      title="Back to top"
      type="button"
    >
      <ArrowUp aria-hidden="true" size={22} />
    </button>
  );
}
