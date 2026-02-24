// /lib/types.ts

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  price?: number;
  category: string;
  images: string[]; // Example: ["/products/product1.jpg"]
  inStock?: boolean;
  createdAt?: string;
  updatedAt?: string;
}