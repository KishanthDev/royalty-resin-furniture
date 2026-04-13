"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Heart, ChevronUp, ChevronDown } from "lucide-react";

interface Product {
    title: string;
    img: string;
    images?: string[];
}

export default function ProductGallery({ product }: { product: Product }) {
    const galleryImages = product.images?.length
        ? [product.img, ...product.images.filter((img) => img !== product.img)]
        : [product.img];

    const [activeIndex, setActiveIndex] = useState(0);

    // -- Scroll State & Ref --
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollUp, setCanScrollUp] = useState(false);
    const [canScrollDown, setCanScrollDown] = useState(false);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
            // Can scroll up if we aren't at the very top
            setCanScrollUp(scrollTop > 0);
            // Can scroll down if the scroll position + visible height is less than total height
            // (Using Math.ceil to prevent rounding errors on some displays)
            setCanScrollDown(Math.ceil(scrollTop + clientHeight) < scrollHeight);
        }
    };

    // Check scroll on mount and when window resizes
    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    // Helper to scroll when arrows are clicked
    const scrollByAmount = (amount: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ top: amount, behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:items-start lg:sticky lg:top-24 h-fit">
            
            {/* Thumbnails Wrapper */}
            <div className="relative flex flex-col w-full lg:w-24 shrink-0">
                
                {/* Up Arrow (Hidden on mobile where it's horizontal) */}
                {canScrollUp && (
                    <button
                        onClick={() => scrollByAmount(-120)}
                        className="hidden lg:flex absolute -top-4 left-0 right-0 z-10 justify-center items-center bg-background/90 backdrop-blur-sm border border-border rounded-full shadow-sm p-1 mx-auto w-8 h-8 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                    >
                        <ChevronUp className="w-5 h-5" />
                    </button>
                )}

                {/* Thumbnails */}
                <div
                    ref={scrollRef}
                    onScroll={checkScroll}
                    className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[80vh] py-2 lg:py-0 w-full shrink-0 [&::-webkit-scrollbar]:hidden"
                >
                    {galleryImages.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`relative shrink-0 aspect-square w-20 lg:w-full rounded-md overflow-hidden border-2 ${
                                activeIndex === index ? "border-primary" : "border-transparent"
                            }`}
                        >
                            <Image
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="80px"
                            />
                        </button>
                    ))}
                </div>

                {/* Down Arrow (Hidden on mobile where it's horizontal) */}
                {canScrollDown && (
                    <button
                        onClick={() => scrollByAmount(120)}
                        className="hidden lg:flex absolute -bottom-4 left-0 right-0 z-10 justify-center items-center bg-background/90 backdrop-blur-sm border border-border rounded-full shadow-sm p-1 mx-auto w-8 h-8 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                    >
                        <ChevronDown className="w-5 h-5" />
                    </button>
                )}
            </div>

            {/* Main Image */}
            <div className="w-full aspect-[4/3] lg:aspect-square bg-secondary/20 rounded-xl border border-border overflow-hidden relative">
                <Image
                    src={galleryImages[activeIndex]}
                    alt={product?.title || "Product Image"}
                    fill
                    className="object-cover"
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