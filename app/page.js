import Link from "next/link";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const productPreview = products.slice(0, 3);

export default function Home() {
  return (
    <>
      <Section className="pt-20 md:pt-28">
        <div className="max-w-6xl grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
              Built for robotics teams, students, and enthusiasts
            </p>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-zinc-950 md:text-7xl">
              prototype faster.
              <br />
              build smarter.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
              ProtoHouse provides affordable prototyping materials and kits for robotics teams and enthusiasts. We focus on iteration, speed, and accessibility so teams can test ideas faster, learn from real hardware, and build confidence through hands-on engineering. Aiming to provide students with an interactive learning experience in all fields of engineering by providing schools with cost effective and student friendly products.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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

          <div className="md:col-span-5 flex items-center justify-center">
            <div className="h-56 w-full max-w-sm rounded-lg border border-zinc-200 bg-zinc-100" aria-hidden>
              {/* image placeholder box */}
            </div>
          </div>
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

      <Section id="why" className="border-t border-zinc-200">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Proto-House is Tailored Towards You.</h2>
        <p className="mt-3 text-zinc-700">
          We aim to make products that target YOU no matter which category you fall into.
        </p>
        <ul className="mt-7 grid gap-4 text-zinc-700 md:grid-cols-3">
          <li className="rounded-lg border border-zinc-200 p-5">
            <span className="block text-base font-semibold text-zinc-900">Robotics Teams</span>
            <span className="mt-2 block">Rapid prototyping and iteration cycles for robotics teams</span>
          </li>
          <li className="rounded-lg border border-zinc-200 p-5">
            <span className="block text-base font-semibold text-zinc-900">Students and Learners</span>
            <span className="mt-2 block">Designs for educational hands on learning of all types of engineering</span>
          </li>
          <li className="rounded-lg border border-zinc-200 p-5">
            <span className="block text-base font-semibold text-zinc-900">Hobbyist</span>
            <span className="mt-2 block">Affordable compared to traditional machining for hobbyist</span>
          </li>
        </ul>
      </Section>
    </>
  );
}
