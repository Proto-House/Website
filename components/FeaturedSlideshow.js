"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Auto-rotating featured-project card for the home page. Cycles through
 * `items` (each needs `id`, `title`, `summary`, `image`) every `intervalMs`,
 * crossfading the image. Pagination dots let visitors jump directly.
 */
export default function FeaturedSlideshow({ items, intervalMs = 4000 }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!items || items.length <= 1) return;
    const tick = setInterval(() => {
      setIdx((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(tick);
  }, [items, intervalMs]);

  if (!items?.length) return null;

  return (
    <div className="grid items-center gap-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 md:grid-cols-2 md:p-10">
      <div className="relative h-56 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800/60 md:h-72">
        {/* All images mount at once; we crossfade by toggling opacity so the
            next slide is already decoded when its turn comes. */}
        {items.map((item, i) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
            className={`object-cover transition-opacity duration-700 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div>
        <p className="font-mono text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Featured project
        </p>
        {/* Stack every slide's title + summary in the same grid cell so we can
            true-crossfade them (old fades down while new fades up at the same
            speed as the image), instead of fade-out then fade-in. The grid
            cell sizes to the tallest block. */}
        <div className="mt-3 grid">
          {items.map((item, i) => (
            <div
              key={item.id}
              aria-hidden={i !== idx}
              className={`col-start-1 row-start-1 transition-opacity duration-700 ${
                i === idx ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-3xl">
                {item.title}
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/projects"
            className="text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            See the full portfolio →
          </Link>
          {items.length > 1 && (
            <div className="flex items-center">
              {items.map((it, i) => (
                <button
                  key={it.id}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`Show ${it.title}`}
                  aria-current={i === idx}
                  className="group p-1.5"
                >
                  {/* Visible dot is inside the padded button so the click target
                      is ~22px while the indicator stays small and clean. */}
                  <span
                    className={`block h-2.5 rounded-full transition-all ${
                      i === idx
                        ? "w-10 bg-blue-600 dark:bg-blue-400"
                        : "w-2.5 bg-zinc-300 group-hover:bg-zinc-400 dark:bg-zinc-700 dark:group-hover:bg-zinc-600"
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
