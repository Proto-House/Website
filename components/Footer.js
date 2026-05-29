import Link from "next/link";

// Brand icons rendered with currentColor so they pick up the theme accent.
const GitHubIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
    <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.37-1.34-1.74-1.34-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.22 1.84 1.22 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.31-5.47-5.84 0-1.29.47-2.34 1.24-3.17-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.21a11.6 11.6 0 0 1 6 0c2.29-1.53 3.3-1.21 3.3-1.21.66 1.65.25 2.87.12 3.17.77.83 1.24 1.88 1.24 3.17 0 4.54-2.81 5.54-5.49 5.83.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z" />
  </svg>
);

const LinkedInIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const EmailIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const socials = [
  { label: "Email", href: "mailto:info@protohouse.org", icon: EmailIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/protohouse/", icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com/Proto-House", icon: GitHubIcon },
];

const footerSections = [
  {
    heading: "Services",
    links: [
      { label: "Automation", href: "/automation" },
      { label: "Education", href: "/education" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Request assessment", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-3 md:px-10 md:py-14">
        {/* Brand + socials */}
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            ProtoHouse
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Custom robotic automation for small and mid-size manufacturers, built
            by engineers who came up through the robotics community.
          </p>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            © {year} ProtoHouse. All rights reserved.
          </span>
          <div className="mt-1 flex items-center gap-3">
            {socials.map((social) => {
              const external = social.href.startsWith("http");
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-300 text-blue-600 transition-colors hover:border-blue-400 hover:bg-blue-50 dark:border-zinc-700 dark:text-blue-400 dark:hover:border-blue-600 dark:hover:bg-blue-950/40"
                >
                  {social.icon}
                </a>
              );
            })}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8">
          {footerSections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {section.heading}
              </h3>
              <ul className="flex flex-col gap-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="flex flex-col justify-center md:items-end md:text-right">
          <p className="max-w-xs text-lg font-medium italic leading-relaxed text-zinc-900 dark:text-white">
            &ldquo;Efficiency is the first step to magnitude.&rdquo;
          </p>
          <span className="mt-2 text-sm text-zinc-500 dark:text-zinc-300">
            — Rishi Mishra
          </span>
        </div>
      </div>
    </footer>
  );
}
