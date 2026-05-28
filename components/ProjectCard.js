import Image from "next/image";
import MediaGallery from "./MediaGallery";

/**
 * Portfolio card for the Projects page. Driven by entries in data/projects.js.
 * When `image` is set, renders the photo as the card hero; otherwise falls back
 * to the placeholder text. When `overview` or `media` are set, an inline
 * "Read the writeup" dropdown reveals the overview + a click-to-enlarge media
 * gallery (see components/MediaGallery.js). Pass `compact` to suppress the
 * skills row (used for the side-projects grid).
 */
export default function ProjectCard({ project, compact = false }) {
  const {
    title,
    summary,
    skills = [],
    badge,
    image,
    photoPlaceholder = "Add project photo",
    overview,
    media = [],
    links = [],
  } = project;

  // `overview` may be a single string or an array of paragraphs.
  const overviewParas = Array.isArray(overview)
    ? overview
    : overview
      ? [overview]
      : [];
  const hasWriteup = overviewParas.length > 0 || media.length > 0;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-blue-500/5">
      <div
        className={`relative ${compact ? "h-40" : "h-48"} border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800/60`}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm font-medium text-zinc-400 dark:text-zinc-500">
            {photoPlaceholder}
          </div>
        )}
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

        {!compact && skills.length > 0 && (
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

        <div className="mt-auto pt-6">
          {hasWriteup ? (
            <details className="rounded-lg border border-zinc-200 dark:border-zinc-800 [&[open]_summary_svg]:rotate-180">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                <span>Read the writeup</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0 transition-transform"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="space-y-4 border-t border-zinc-200 p-4 dark:border-zinc-800">
                {overviewParas.length > 0 && (
                  <div className="space-y-3">
                    {overviewParas.map((para, i) => (
                      <p
                        key={i}
                        className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                )}
                <MediaGallery items={media} />
              </div>
            </details>
          ) : (
            <span className="text-sm text-zinc-400 dark:text-zinc-600">
              Writeup coming soon
            </span>
          )}

          {links.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
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
          )}
        </div>
      </div>
    </article>
  );
}
