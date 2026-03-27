import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "Products | ProtoHouse",
  description: "Browse prototyping products built for robotics teams and enthusiasts.",
};

export default function ProductsPage() {
  return (
    <Section>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Products</h1>
        <p className="mt-4 text-zinc-600">
          Explore our full lineup of affordable prototyping materials built for speed, reliability, and iteration.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} showButton />
        ))}
      </div>
    </Section>
  );
}
