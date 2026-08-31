import DarkModeToggle from "@/components/DarkModeToggle";
import { owner, contactLinks } from "@/data/portfolio";

/**
 * Standalone chrome for the personal portfolio. This route is excluded from the
 * ProtoHouse navbar + footer in components/SiteChrome.js, so everything the page
 * needs to stand on its own lives here. Nothing links back into the main site.
 */

const sectionLinks = [
  { label: "Work", href: "#work" },
  { label: "Side projects", href: "#side-projects" },
  { label: "Contact", href: "#contact" },
];

export default function PersonalProjectsLayout({ children }) {
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <a
            href="#top"
            className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white"
          >
            {owner.name}
          </a>

          <nav className="flex items-center gap-1">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hidden rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white sm:inline-flex"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-1">
              <DarkModeToggle />
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <p className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
              {owner.name}
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              © {year} · Personal portfolio
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
