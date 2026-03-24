export default function ProductCard({ product, showButton = false }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-44 items-center justify-center bg-zinc-100 text-sm font-medium text-zinc-500">
        {product.imageLabel}
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold text-zinc-950">{product.name}</h3>
        <p className="text-sm leading-relaxed text-zinc-600">{product.description}</p>
        {showButton ? (
          <button
            type="button"
            className="mt-2 inline-flex rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
          >
            View Details
          </button>
        ) : null}
      </div>
    </article>
  );
}
