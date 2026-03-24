import Link from "next/link";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const productPreview = products.slice(0, 3);

export default function Home() {
  return (
    <>
      <Section className="pt-20 md:pt-28">
        <div className="max-w-3xl space-y-7">
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
            Built for robotics teams and builders
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-zinc-950 md:text-7xl">
            Prototype Faster. Build Smarter.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
            Proto-House helps FRC teams and hobbyists move from idea to working mechanism with affordable materials and rapid iteration support.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
            >
              Browse Products
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-900 hover:text-zinc-950"
            >
              Learn More
            </Link>
          </div>
        </div>
      </Section>

      <Section id="about" className="border-t border-zinc-200">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <h2 className="text-3xl font-bold tracking-tight md:col-span-4 md:text-4xl">About Proto-House</h2>
          <p className="md:col-span-8 text-base leading-8 text-zinc-600 md:text-lg">
            Proto-House provides affordable prototyping materials for robotics teams and hobbyists. We focus on iteration, speed, and accessibility so teams can test ideas faster, learn from real hardware, and build confidence through hands-on engineering.
          </p>
        </div>
      </Section>

      <Section id="products" className="border-t border-zinc-200 bg-zinc-50">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Products Preview</h2>
            <p className="mt-3 text-zinc-600">Core components for fast prototyping and reliable robot builds.</p>
          </div>
          <Link href="/products" className="text-sm font-semibold text-zinc-900 hover:text-zinc-600">
            See all products →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productPreview.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      <Section id="education" className="bg-zinc-900 text-white">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">Education First</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Building future engineers through hands-on iteration
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-zinc-300">
            <p>
              We support FRC teams and classrooms with practical materials that let students move from CAD to testing quickly.
            </p>
            <p>
              Our long-term goal is to expand education partnerships and contracts that make engineering tools accessible to more schools.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-white/15 bg-white/5 p-4">⚙️ Real build experience</div>
              <div className="rounded-lg border border-white/15 bg-white/5 p-4">🏫 Classroom ready</div>
              <div className="rounded-lg border border-white/15 bg-white/5 p-4">🚀 Fast iteration cycles</div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="why" className="border-t border-zinc-200">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Proto-House</h2>
        <ul className="mt-7 grid gap-4 text-zinc-700 md:grid-cols-3">
          <li className="rounded-lg border border-zinc-200 p-5">Affordable compared to traditional machining</li>
          <li className="rounded-lg border border-zinc-200 p-5">Rapid prototyping and iteration cycles</li>
          <li className="rounded-lg border border-zinc-200 p-5">Designed specifically for robotics teams</li>
        </ul>
      </Section>
    </>
  );
}
