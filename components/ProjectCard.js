import Link from "next/link";

/**
 * Portfolio card for the Projects page. Driven by entries in data/projects.js.
 * Photos and writeup/repo links are intentionally left as placeholders to fill in.
 */
export default function ProjectCard({ project }) {
  const {
    title,
    summary,
    skills = [],
    badge,
    photoPlaceholder = "Add project photo",
    writeupHref,
    writeupLabel = "Read the writeup",
    links = [],
  } = project;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-blue-500/5">
      {/* Photo placeholder: replace with a real image / next/image. */}
      <div className="flex h-48 items-center justify-center border-b border-zinc-200 bg-zinc-100 text-sm font-medium text-zinc-400 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-500">
        {photoPlaceholder}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
            {title}
          </h3>
          {badge && (
            <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
              {badge}
            </span>
          )}
        </div>

        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {summary}
        </p>

        {skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm font-semibold">
          {writeupHref ? (
            <Link
              href={writeupHref}
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {writeupLabel} →
            </Link>
          ) : (
            <span className="text-zinc-400 dark:text-zinc-600">
              Writeup coming soon
            </span>
          )}
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
