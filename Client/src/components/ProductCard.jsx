
import { useEffect, useState } from "react";

function ProductCard({ product, showActions = false, onEdit, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <>
      <article
        className={`group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
          !showActions
            ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
            : ""
        }`}
        onClick={!showActions ? () => setIsOpen(true) : undefined}
        onKeyDown={
          !showActions
            ? (event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setIsOpen(true);
                }
              }
            : undefined
        }
        role={!showActions ? "button" : undefined}
        tabIndex={!showActions ? 0 : undefined}
        aria-label={!showActions ? `View details for ${product.name}` : undefined}
      >
        <div className="relative aspect-4/3 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-indigo-600 shadow">
            ₱{Number(product.price).toLocaleString()}
          </span>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-slate-900">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            {product.description}
          </p>

          {showActions && (
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => onEdit(product)}
                className="flex-1 rounded-lg bg-slate-100 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(product._id)}
                className="flex-1 rounded-lg bg-red-500 py-2 text-sm font-medium text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </article>

      {isOpen && !showActions && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Details for ${product.name}`}
            className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close product details"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl font-semibold text-slate-700 shadow hover:bg-slate-100"
            >
              ×
            </button>

            <img
              src={product.image}
              alt={product.name}
              className="aspect-4/3 w-full object-cover"
            />

            <div className="p-6 sm:p-8">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                <h2 className="text-2xl font-bold text-slate-900">
                  {product.name}
                </h2>
                <span className="rounded-full bg-indigo-50 px-4 py-2 font-bold text-indigo-600">
                  ₱{Number(product.price).toLocaleString()}
                </span>
              </div>

              <p className="whitespace-pre-wrap leading-7 text-slate-600">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
