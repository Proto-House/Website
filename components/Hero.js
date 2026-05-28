import Image from "next/image";
import Section from "./Section";

/**
 * Reusable page hero. Pass CTA buttons via `actions`. Set `decorative` to
 * render the subtle background grid + glow (used on the homepage). Pass `image`
 * to show a photo to the right of the text (tilted slightly counterclockwise).
 */
export default function Hero({
  eyebrow,
  title,
  subtitle,
  actions,
  image,
  imageAlt = "",
  decorative = false,
  className = "",
}) {
  return (
    <Section className={`relative overflow-hidden pt-20 md:pt-28 ${className}`}>
      {decorative && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="hero-grid absolute inset-0 opacity-70" />
          <div className="absolute left-1/2 top-[-6rem] h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        </div>
      )}
      <div
        className={
          image
            ? "flex flex-col gap-10 md:flex-row md:items-center md:justify-between"
            : ""
        }
      >
        <div className={image ? "max-w-2xl" : "max-w-3xl"}>
          {eyebrow && (
            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
              {subtitle}
            </p>
          )}
          {actions && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>
          )}
        </div>
        {image && (
          <div className="shrink-0">
            <Image
              src={image}
              alt={imageAlt}
              width={2048}
              height={1152}
              priority
              className="w-full max-w-[30rem] -rotate-6 md:max-w-[35rem] md:-mr-16 md:translate-x-[36px]"
            />
          </div>
        )}
      </div>
    </Section>
  );
}
