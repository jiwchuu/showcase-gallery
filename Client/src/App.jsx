import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import GalleryPage from "./pages/GalleryPage";
import ManagePage from "./pages/ManagePage";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./api";

function App() {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("gallery");
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => alert("Could not load products. Refresh and try again."))
      .finally(() => setLoading(false));
  }, []);

  const saveProduct = async (data) => {
    try {
      if (editingProduct) {
        const updated = await updateProduct(editingProduct._id, data);

        setProducts((prev) =>
          prev.map((p) => (p._id === updated._id ? updated : p))
        );

        setEditingProduct(null);
      } else {
        const created = await createProduct(data);
        setProducts((prev) => [created, ...prev]);
      }
    } catch {
      alert("Could not save the product.");
    }
  };

  const deleteProductHandler = async (id) => {
    if (!confirm("Delete this product?")) return;

    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p._id !== id));

      if (editingProduct?._id === id) {
        setEditingProduct(null);
      }
    } catch {
      alert("Could not delete the product.");
    }
  };

  const startEdit = (product) => {
    setEditingProduct(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar view={view} onChangeView={setView} />

      {view === "gallery" ? (
        <GalleryPage products={products} loading={loading} />
      ) : (
        <ManagePage
          products={products}
          editingProduct={editingProduct}
          onSave={saveProduct}
          onCancel={() => setEditingProduct(null)}
          onEdit={startEdit}
          onDelete={deleteProductHandler}
        />
      )}

      <footer className="py-10 text-center text-sm text-slate-400">
        Made by Jun Nigel Rivera · INF238
      </footer>
    </div>
  );
}

export default App;