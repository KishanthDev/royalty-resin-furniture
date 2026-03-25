"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

interface Product {
    title: string;
    img: string;
    imgDesktop: string;
}

export default function ProductGallery({ product }: { product: Product }) {
    const [activeView, setActiveView] = useState(0);

    // 4 distinct "angles" created by cropping different parts of the same image
    const viewEffects = [
        "object-center scale-100", // 1. Full View
        "object-top scale-[1.5]",  // 2. Top Detail (Zoomed)
        "object-bottom scale-[1.5]", // 3. Bottom Detail (Zoomed)
        "object-right scale-[1.8]", // 4. Side/Texture Detail (Deep Zoom)
    ];

    const imageSrc = product?.imgDesktop || product?.img;

    return (
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:items-start lg:sticky lg:top-24 h-fit">

            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible py-2 lg:py-0 w-full lg:w-24 shrink-0 [&::-webkit-scrollbar]:hidden">
                {viewEffects.map((effect, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveView(index)}
                        className={`relative aspect-square w-20 lg:w-full rounded-md overflow-hidden border-2 ${
                            activeView === index ? "border-primary" : "border-transparent"
                        }`}
                    >
                        <Image
                            src={imageSrc}
                            alt={`View ${index + 1}`}
                            fill
                            className={`object-cover ${effect}`}
                            sizes="80px"
                        />
                    </button>
                ))}
            </div>

            {/* Main Image - No Hover Animation */}
            <div className="w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-square bg-secondary/20 rounded-xl border border-border overflow-hidden relative">
                <Image
                    src={imageSrc}
                    alt={product?.title || "Product Image"}
                    fill
                    // Removed transition-all and group-hover:scale to keep it static
                    className={`object-cover ${viewEffects[activeView]}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />

                <button className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-md rounded-full shadow-sm hover:text-red-500 transition-colors z-10">
                    <Heart className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}