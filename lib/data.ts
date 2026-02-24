// /lib/data.ts

import { Product } from "./types";

const products: Product[] = [
  {
    id: "1",
    name: "River Resin Dining Table",
    slug: "river-resin-dining-table",
    description:
      "A handcrafted walnut dining table featuring a deep blue epoxy river flowing through its center.",
    price: 2400,
    category: "Dining Tables",
    images: ["/products/river-table.jpg"],
    inStock: true
  },
  {
    id: "2",
    name: "Emerald Resin Coffee Table",
    slug: "emerald-resin-coffee-table",
    description:
      "Elegant coffee table crafted from olive wood and emerald green epoxy resin.",
    price: 1200,
    category: "Coffee Tables",
    images: ["/products/emerald-coffee.jpg"],
    inStock: true
  },
  {
    id: "3",
    name: "Crystal Edge Console",
    slug: "crystal-edge-console",
    description:
      "A sleek console table blending natural wood edges with crystal-clear resin.",
    price: 980,
    category: "Console Tables",
    images: ["/products/crystal-console.jpg"],
    inStock: true
  },
  {
    id: "4",
    name: "Ocean Flow Side Table",
    slug: "ocean-flow-side-table",
    description:
      "Compact side table inspired by ocean waves captured in blue resin.",
    price: 450,
    category: "Side Tables",
    images: ["/products/ocean-side.jpg"],
    inStock: false
  },
  {
    id: "5",
    name: "Golden Horizon Desk",
    slug: "golden-horizon-desk",
    description:
      "Modern executive desk with golden-tinted epoxy and rich walnut wood.",
    price: 1800,
    category: "Desks",
    images: ["/products/golden-desk.jpg"],
    inStock: true
  },
];


// Return all products
export function getAllProducts(): Product[] {
  return products;
}


// Return featured products (first 3 for homepage)
export function getFeaturedProducts(): Product[] {
  return products.slice(0, 3);
}


// Get single product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}