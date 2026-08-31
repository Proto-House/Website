"use client";

import { usePathname } from "next/navigation";

// Routes that opt out of the ProtoHouse navbar + footer entirely. They bring
// their own chrome from their own layout (see app/personal-projects/layout.js),
// so the page stands alone and reads as a separate site.
const standaloneRoutes = ["/personal-projects"];

/**
 * Wraps the app shell. Navbar and Footer are passed in as elements (rather than
 * imported here) so they stay server components — this file only needs the
 * pathname, which requires a client component.
 */
export default function SiteChrome({ navbar, footer, children }) {
  const pathname = usePathname();
  const standalone = standaloneRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (standalone) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      {navbar}
      <main className="flex-1">{children}</main>
      {footer}
    </>
  );
}
