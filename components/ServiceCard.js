/**
 * Card for a single service / capability. `icon` is an optional SVG node.
 */
export default function ServiceCard({ icon, title, children }) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      {icon && (
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        {children}
      </p>
    </article>
  );
}
