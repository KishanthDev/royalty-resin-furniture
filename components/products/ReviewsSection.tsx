"use client";
import React, { useRef, useState, MouseEvent } from 'react';
import { Star, ShieldCheck } from 'lucide-react';

// --- Types & Data ---
interface Review {
    id: number;
    name: string;
    image?: string;
    rating: number;
    text: string;
    isVerified: boolean;
}

const reviewsData: Review[] = [
    {
        id: 1,
        name: "Yash Nath",
        rating: 4,
        text: "I purchased dining table from Woodensure last week, and honestly, I’m really happy with it. The quality is superb, it feels strong and well-built.",
        isVerified: true,
    },
    {
        id: 2,
        name: "Sandeep Moghe",
        rating: 4,
        text: "Good chair. Thank you for good service. Enjoy myself on Chair",
        isVerified: true,
    },
    {
        id: 3,
        name: "cooking Nandal",
        image: "https://www.woodensure.com/assets/images/reviews/f2uww1.avif",
        rating: 5,
        text: "Beautiful and sturdy.. it’s a classy product with a lovely glossy finish of real wood",
        isVerified: true,
    },
    {
        id: 4,
        name: "Sheena Desai",
        image: "https://www.woodensure.com/assets/images/reviews/zSxbiP.avif",
        rating: 4,
        text: "The Wooden Shelves Look great 👍🏾",
        isVerified: true,
    },
    {
        id: 5,
        name: "Umesh Kumar",
        image: "https://www.woodensure.com/assets/images/reviews/MAuNxt.avif",
        rating: 5,
        text: "Really happy with the purchase from woodensure, they were always reachable on one phone call even when they didn't have any update.",
        isVerified: true,
    },
];

// --- Components ---

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-0.5 mb-1">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={14}
                className={`${i < rating ? "fill-yellow-500 text-yellow-500" : "fill-muted text-muted"}`}
            />
        ))}
    </div>
);

export const ReviewsSection: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // --- Drag Logic ---
    const handleMouseDown = (e: MouseEvent) => {
        if (!sliderRef.current) return;
        setIsDown(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDown || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed here
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="py-16 lg:py-24 bg-background select-none overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 tracking-tight">
                        Customers Say!
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                        Swipe to see what our customers have to say about our craftsmanship and service.
                    </p>
                </div>

                <div
                    ref={sliderRef}
                    className={`
                        flex overflow-x-auto gap-6 pb-8 px-2 -mx-2
                        scrollbar-hide 
                        ${isDown ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'} 
                    `}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        scrollBehavior: isDown ? 'auto' : 'smooth'
                    }}
                >
                    {reviewsData.map((review) => (
                        <div
                            key={review.id}
                            className="min-w-[320px] md:min-w-[400px] max-w-[400px] snap-center"
                        >
                            <div className="bg-card p-3 md:p-4 rounded-2xl border border-border h-full flex flex-col hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 pointer-events-none md:pointer-events-auto">

                                {/* Header */}
                                <div className="flex items-center gap-4 mb-5">
                                    {review.image ? (
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="w-14 h-14 rounded-full object-cover border border-border shrink-0 pointer-events-none"
                                        />
                                    ) : (
                                        <div className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-xl shrink-0 border border-border">
                                            {review.name.charAt(0)}
                                        </div>
                                    )}

                                    <div>
                                        <h5 className="font-bold text-foreground text-base tracking-tight mb-1">
                                            {review.name}
                                        </h5>
                                        <div className="flex items-center gap-2.5">
                                            <StarRating rating={review.rating} />
                                            {review.isVerified && (
                                                <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-0.5 rounded-sm uppercase tracking-wider">
                                                    <ShieldCheck className="w-3 h-3" />
                                                    Verified
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-4">
                                        "{review.text}"
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};