export function AdminHeader() {
  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-medium">Royalty Resin Admin</h1>
      <button className="text-sm bg-neutral-900 text-white px-4 py-2 rounded">
        Logout
      </button>
    </header>
  );
}