"use client";

// Unlike layout.js, Next.js remounts template.js on every navigation, so the
// CSS enter animation (.page-transition in globals.css) replays each time the
// route changes — giving a subtle fade/slide between pages.
export default function Template({ children }) {
  return <div className="page-transition">{children}</div>;
}
