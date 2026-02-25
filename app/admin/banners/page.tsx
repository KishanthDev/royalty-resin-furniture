export default function BannersPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Manage Banners</h2>

      <div className="bg-white p-6 rounded-lg shadow-sm border space-y-4">
        <label className="block text-sm font-medium">Upload New Banner</label>
        <input type="file" className="border p-2 w-full rounded" />

        <button className="bg-neutral-900 text-white px-4 py-2 rounded">
          Save Banner
        </button>
      </div>
    </div>
  );
}