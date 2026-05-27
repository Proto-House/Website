/**
 * A single step in a numbered process (e.g. Discovery → Design → Build → Support).
 */
export default function ProcessStep({ step, title, children }) {
  return (
    <div className="relative rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white dark:bg-blue-500">
        {step}
      </span>
      <h3 className="mt-4 text-base font-semibold text-zinc-950 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {children}
      </p>
    </div>
  );
}
