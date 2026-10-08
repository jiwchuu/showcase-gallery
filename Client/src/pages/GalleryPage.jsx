
import { useState } from "react";
import ProductGrid from "../components/ProductGrid";

const categories = [
  "All Products",
  "Electronics",
  "Accessories",
  "Toys & Collectibles",
  "Others",
];

function GalleryPage({ products, loading }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [category, setCategory] = useState("All Products");

  const filteredProducts = products
    .filter((product) =>
      (product.name ?? "")
        .toLowerCase()
        .includes(search.trim().toLowerCase())
    )
    .filter((product) =>
      category === "All Products"
        ? true
        : (product.category || "Others") === category
    )
    .sort((a, b) => {
      const priceA = Number(a.price) || 0;
      const priceB = Number(b.price) || 0;

      if (sort === "low") return priceA - priceB;
      if (sort === "high") return priceB - priceA;
      return 0;
    });

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section className="relative mb-10 overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 via-violet-600 to-cyan-500 p-10 text-white shadow-xl md:p-14">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10"></div>

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
          Product Gallery
        </p>

        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
          Discover Our Products
        </h2>

        <p className="mt-3 text-white/80">
          {products.length} items available · by Jun Nigel Rivera
        </p>
      </section>

      <div className="mb-6 grid gap-4 md:grid-cols-[1fr_240px] md:items-end">
        <div>
          <label
            htmlFor="gallery-search"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Search products
          </label>

          <div className="relative">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>

            <input
              id="gallery-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by product name..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-slate-800 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="gallery-sort"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Sort by price
          </label>

          <select
            id="gallery-sort"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          >
            <option value="default">Default Order</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <p className="mb-3 text-sm font-semibold text-slate-700">
          Filter by category
        </p>

        <div
          className="flex flex-wrap gap-2"
          aria-label="Product categories"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                category === item
                  ? "border-indigo-600 bg-indigo-600 text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-indigo-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <p className="py-20 text-center text-slate-400">
          Loading products...
        </p>
      ) : filteredProducts.length === 0 && products.length > 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-slate-200 py-16 text-center text-slate-500">
          No products match your search or selected category.
        </div>
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </main>
  );
}

export default GalleryPage;
