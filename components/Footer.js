import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-zinc-600 dark:text-zinc-400 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-zinc-900 dark:text-white">
            ProtoHouse
          </span>
          <span>
            © {year} ProtoHouse. Industrial automation &amp; robotics education.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link
            href="/contact"
            className="hover:text-zinc-900 dark:hover:text-white"
          >
            Contact
          </Link>
          <a
            href="mailto:info@protohouse.org"
            className="hover:text-zinc-900 dark:hover:text-white"
          >
            info@protohouse.org
          </a>
          {/* TODO: add social links here when available, e.g. LinkedIn. */}
        </div>
      </div>
    </footer>
  );
}
