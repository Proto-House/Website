"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades + slides its children in once they scroll into view. The actual
 * motion lives in globals.css (.reveal / .reveal-visible) and is disabled for
 * users who prefer reduced motion. Pass `delay` (ms) to stagger siblings.
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  children,
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (very old browser / SSR edge) — just show it.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // Reveal as soon as any part of the element enters the viewport. A 0
    // threshold (rather than 0.15) matters for sections taller than the gap
    // below the hero: with a high threshold, content sitting in the lower half
    // of the initial viewport never reaches the ratio on load and stays hidden
    // until you scroll. The small positive bottom margin reveals just before an
    // element scrolls fully into view, keeping the effect smooth.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px 5% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
