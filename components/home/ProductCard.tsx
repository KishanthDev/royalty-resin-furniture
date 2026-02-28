import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/product/${product.slug}`} className="group block overflow-hidden">
            <div className="relative aspect-square p-4 rounded-lg">
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out p-3 rounded-lg"
                />
            </div>
            <div className="mt-4 text-center">
                <h3 className="font-serif text-xl text-foreground">{product.name}</h3>
                <p className="text-sm text-foreground/70 mt-1">{product.category}</p>
            </div>
        </Link>
    );
}