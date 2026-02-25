// /lib/data.ts

import { Product } from "./types";

const products: Product[] = [
  {
    id: "1",
    name: "Lava Forge Dining Table",
    slug: "lava-forge-dining-table",
    description:
      "A dramatic dining table with a molten lava–inspired resin surface and charred wood inlays, creating a fiery statement piece that anchors any modern dining space.",
    price: 2400,
    category: "Dining Tables",
    images: ["/assets/table/lava-table.png"],
    inStock: true
  },
  {
    id: "2",
    name: "Brew Blend Coffee Table",
    slug: "brew-blend-coffee-table",
    description:
      "A handcrafted coffee table combining warm solid wood with crystal-clear resin encapsulating real coffee beans and latte art, set on minimalist hairpin legs for a cozy café-inspired living space.",
    price: 1200,
    category: "Coffee Tables",
    images: ["/assets/table/coffee-table.png"],
    inStock: true
  },
  {
    id: "3",
    name: "Peacock Tide Resin Table",
    slug: "peacock-tide-resin-table",
    description:
      "A statement dining table featuring a live-edge wooden frame and a glossy turquoise resin river inlaid with peacock feather motifs, creating a vibrant, art-piece centerpiece for any modern space.",
    price: 980,
    category: "Divine Tables",
    images: ["/assets/table/peacock-tide-table.png"],
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