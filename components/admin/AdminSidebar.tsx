"use client";

import Link from "next/link";

const menuItems = [
  { name: "Dashboard", href: "/admin" },
  { name: "Products", href: "/admin/products" },
  { name: "Categories", href: "/admin/categories" },
  { name: "Homepage", href: "/admin/homepage" },
  { name: "Banners", href: "/admin/banners" },
  { name: "Inquiries", href: "/admin/inquiries" },
  { name: "Analytics", href: "/admin/analytics" },
  { name: "Settings", href: "/admin/settings" },
];

export function AdminSidebar() {
  return (
    <aside className="w-64 bg-neutral-900 text-white p-6 hidden md:block">
      <h2 className="text-xl font-semibold mb-8">Admin Panel</h2>
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block text-neutral-300 hover:text-white transition"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}