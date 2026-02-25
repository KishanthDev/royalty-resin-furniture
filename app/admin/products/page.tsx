export default function ProductsPage() {
  return (
    <div>
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-semibold">Products</h2>
        <button className="bg-neutral-900 text-white px-4 py-2 rounded">
          + Add Product
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-neutral-500">Product table will appear here.</p>
      </div>
    </div>
  );
}