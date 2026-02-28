// ProductCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={'/collections/all'} className="group block overflow-hidden">
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100">
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 33vw,
                 (max-width: 1024px) 50vw,
                 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Info */}
            <div className="mt-3 text-center px-1">
                <h3 className="font-serif text-sm sm:text-base md:text-lg text-foreground leading-tight line-clamp-2">
                    {product.name}
                </h3>
                <p className="text-xs text-foreground/50 mt-1 uppercase tracking-widest">
                    {product.category}
                </p>
            </div>
        </Link>
    );
}
