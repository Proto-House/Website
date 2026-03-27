import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-10 text-sm text-zinc-600 md:grid-cols-2 md:px-10">
        <div>
          <p className="font-semibold text-zinc-900">ProtoHouse</p>
          <p className="mt-2">Affordable prototyping materials for robotics teams and hobbyists.</p>
        </div>
        <div className="md:text-right">
          <p>
            Contact: <a className="hover:text-zinc-900" href="mailto:hello@proto-house.com">hello@proto-house.com</a>
          </p>
          <div className="mt-2 flex gap-4 md:justify-end">
            <Link href="#" className="hover:text-zinc-900">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-zinc-900">
              Instagram
            </Link>
            <Link href="#" className="hover:text-zinc-900">
              X
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
