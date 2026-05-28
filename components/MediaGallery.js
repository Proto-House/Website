"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

// Native "open in lightbox" icon — four arrows pointing out.
const MaximizeIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </svg>
);

const CloseIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

function youTubeSrc(id, autoplay = false) {
  return `https://www.youtube-nocookie.com/embed/${id}${autoplay ? "?autoplay=1" : ""}`;
}

// Google Drive "preview" embed — used for clips too large to commit to the repo.
// `id` is the file ID from a share link (drive.google.com/file/d/<id>/view).
function driveSrc(id) {
  return `https://drive.google.com/file/d/${id}/preview`;
}

// Poster frame for a Drive file. Drive's /preview player letterboxes the clip
// inside the iframe (lots of black, frame stuck in a corner) and we can't style
// across the iframe boundary — so the grid shows this static thumbnail instead
// and only loads the player iframe in the lightbox.
function driveThumb(id) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w1280`;
}

// Play-button overlay for video posters in the grid.
const PlayIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

// Callback ref that sets the <video>'s initial volume from `defaultVolume`
// (range 0–1). Used to tame loud bench-test clips without changing the source.
function videoVolumeRef(defaultVolume) {
  if (defaultVolume == null) return undefined;
  return (el) => {
    if (el) el.volume = defaultVolume;
  };
}

/**
 * Gallery of writeup media (images, local videos, YouTube embeds). Each item is
 * clickable / expandable — clicks open a lightbox with a dimmed backdrop. ESC
 * or backdrop click closes. Native fullscreen is disabled on local videos so
 * users go through the lightbox instead (avoids the pixelated upscale).
 */
export default function MediaGallery({ items }) {
  const [openIdx, setOpenIdx] = useState(null);
  const [mounted, setMounted] = useState(false);
  const close = useCallback(() => setOpenIdx(null), []);

  // Portal target (document.body) isn't available during SSR, so wait one tick.
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIdx, close]);

  if (!items?.length) return null;

  const active = openIdx !== null ? items[openIdx] : null;
  // CSS multi-column masonry — items render at their natural aspect and pack
  // tight inside each column. Avoids the letterbox/empty-space artefacts a
  // fixed-height grid leaves when image aspect ratios vary.
  const columnClass =
    items.length === 1 ? "columns-1" : "columns-1 sm:columns-2";

  return (
    <>
      <div className={`gap-1 ${columnClass}`}>
        {items.map((item, idx) => (
          <figure
            key={idx}
            className="group relative mb-1 block break-inside-avoid overflow-hidden"
          >
            {item.type === "image" ? (
              <button
                type="button"
                onClick={() => setOpenIdx(idx)}
                aria-label={item.alt || "View larger"}
                className="block w-full p-0"
              >
                {/* Plain <img> here (not next/image) so each thumbnail uses its
                    own intrinsic aspect — no per-image width/height bookkeeping
                    in the data file. The lightbox still uses next/image. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt || ""}
                  loading="lazy"
                  className="block h-auto w-full"
                />
              </button>
            ) : item.type === "video" ? (
              <video
                ref={videoVolumeRef(item.defaultVolume)}
                controls
                preload="metadata"
                controlsList="nofullscreen noremoteplayback"
                disablePictureInPicture
                className="block w-full bg-black"
              >
                <source src={item.src} />
              </video>
            ) : item.type === "youtube" ? (
              <iframe
                src={youTubeSrc(item.id)}
                title={item.title || "YouTube video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="block aspect-video w-full"
              />
            ) : item.type === "gdrive" ? (
              <button
                type="button"
                onClick={() => setOpenIdx(idx)}
                aria-label={item.title || "Play video"}
                className="relative block w-full p-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={driveThumb(item.id)}
                  alt={item.title || ""}
                  loading="lazy"
                  className="block aspect-video w-full bg-black object-cover"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900/60 pl-0.5 text-white">
                    {PlayIcon}
                  </span>
                </span>
              </button>
            ) : null}

            {/* Expand button — rendered for inline videos/iframes (image and the
                gdrive poster are already fully clickable). Stays subtle until hover. */}
            {(item.type === "video" || item.type === "youtube") && (
              <button
                type="button"
                aria-label="View larger"
                onClick={() => setOpenIdx(idx)}
                className="absolute right-2 top-2 z-10 inline-flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900/70 text-white opacity-70 transition-opacity hover:opacity-100"
              >
                {MaximizeIcon}
              </button>
            )}

            {item.title && (
              <figcaption className="px-3 py-2 text-xs text-zinc-500 dark:text-zinc-400">
                {item.title}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Rendered into document.body via portal so the modal escapes any
          transformed ancestor (e.g. the card's hover:-translate-y) — otherwise
          `fixed inset-0` is pinned to that ancestor, not the viewport. */}
      {mounted && active &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            onClick={close}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-900/80 p-4 backdrop-blur-sm"
          >
            {/* No stopPropagation on this wrapper — clicks on its empty area
                (around the image) should bubble up to the backdrop and close.
                We stopPropagation only on interactive media so their controls
                still work. The close button has its own onClick so the double
                fire is a harmless no-op. */}
            <div className="relative flex max-h-[90vh] w-full max-w-6xl items-center justify-center">
              <button
                type="button"
                aria-label="Close"
                onClick={close}
                className="absolute -right-2 -top-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg hover:bg-zinc-100 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
              >
                {CloseIcon}
              </button>

              {active.type === "image" ? (
                <Image
                  src={active.src}
                  alt={active.alt || ""}
                  width={2400}
                  height={1600}
                  sizes="90vw"
                  className="max-h-[90vh] w-auto rounded-lg object-contain"
                />
              ) : active.type === "youtube" ? (
                <iframe
                  src={youTubeSrc(active.id, true)}
                  title={active.title || "YouTube video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onClick={(e) => e.stopPropagation()}
                  className="aspect-video w-full max-h-[90vh] rounded-lg"
                />
              ) : active.type === "gdrive" ? (
                <iframe
                  src={driveSrc(active.id)}
                  title={active.title || "Video"}
                  allow="autoplay"
                  allowFullScreen
                  onClick={(e) => e.stopPropagation()}
                  className="aspect-video w-full max-h-[90vh] rounded-lg"
                />
              ) : (
                <video
                  ref={videoVolumeRef(active.defaultVolume)}
                  controls
                  autoPlay
                  controlsList="noremoteplayback"
                  onClick={(e) => e.stopPropagation()}
                  className="max-h-[90vh] w-full rounded-lg bg-black"
                >
                  <source src={active.src} />
                </video>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
