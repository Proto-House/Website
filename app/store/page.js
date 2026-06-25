import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PrintUploadForm from "@/components/PrintUploadForm";
import { categories, products } from "@/data/store";

export const metadata = {
  title: "Store",
  description:
    "Shop the ProtoHouse material ecosystem — channels, brackets, hubs, motors, and full robot kits — plus 3D printing on demand: upload your print files and we'll print and ship them to you.",
};

function formatPrice(price) {
  return Number.isInteger(price) ? `$${price}` : `$${price.toFixed(2)}`;
}

export default function StorePage() {
  return (
    <>
      <Hero
        eyebrow="Store"
        title="The parts behind the builds."
        subtitle="The same channels, brackets, and hubs our Education projects are built on — plus 3D printing on demand. Upload your own models and we'll print and ship them."
        actions={
          <>
            <Button href="#print">Start a 3D print order</Button>
            <Button href="#catalog" variant="secondary">
              Browse the catalog
            </Button>
          </>
        }
      />

      {/* Catalog */}
      <Section
        id="catalog"
        className="scroll-mt-20 border-t border-zinc-200 dark:border-zinc-800"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
            Material ecosystem
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            One hole pattern, endless combinations. Every part is designed to bolt
            into the same grid, so what you learn on one build carries straight to
            the next.
          </p>
        </div>

        {categories.map((category) => {
          const items = products.filter((p) => p.category === category.id);
          if (!items.length) return null;
          return (
            <div key={category.id} className="mt-12">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {category.label}
              </h3>
              <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((product) => (
                  <article
                    key={product.id}
                    className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-lg font-semibold text-zinc-950 dark:text-white">
                        {product.name}
                      </h4>
                      <span className="shrink-0 text-right">
                        <span className="block text-lg font-bold text-zinc-950 dark:text-white">
                          {formatPrice(product.price)}
                        </span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">
                          / {product.unit}
                        </span>
                      </span>
                    </div>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {product.description}
                    </p>
                    <Button
                      href={`mailto:info@protohouse.org?subject=${encodeURIComponent(
                        `Order: ${product.name}`
                      )}`}
                      variant="secondary"
                      className="mt-5 w-full"
                    >
                      Order
                    </Button>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </Section>

      {/* 3D printing on demand */}
      <Section
        id="print"
        className="scroll-mt-20 border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
              3D printing on demand
            </p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
              Upload your files. We print and ship.
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
              Don&apos;t have a printer, or need a material you can&apos;t run at
              home? Send us your models and we&apos;ll print them on professional
              machines and ship whatever you designed straight to your door.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "STL, 3MF, OBJ, and STEP files welcome",
                "Choose material, color, infill, and quantity",
                "We review every file and quote before printing",
                "Printed and shipped to you anywhere we deliver",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 md:p-8">
              <PrintUploadForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
