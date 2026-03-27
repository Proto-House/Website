import Link from "next/link";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/products", label: "Products" },
	{ href: "/education", label: "Education" },
	{ href: "/about", label: "About" },
];

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
			<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
				<Link
					href="/"
					className="text-xl font-bold tracking-tight text-zinc-950"
				>
					ProtoHouse
				</Link>
				<nav className="flex items-center gap-1 md:gap-2">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
						>
							{link.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}
