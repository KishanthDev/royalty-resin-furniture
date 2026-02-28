import Link from "next/link";

export function Hero() {
    return (
        <section className="bg-secondary text-secondary-foreground py-16 md:py-24 border-b border-border/40">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-secondary-foreground/70">
                    Royalty Resin • Furniture & Interiors
                </p>

                <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold">
                    Premium Epoxy & Natural Wood Furniture
                </h1>

                <p className="mt-4 text-base md:text-lg text-secondary-foreground/80">
                    Innovative furniture crafted by merging premium epoxy with natural wood.
                </p>

                <div className="mt-6 flex justify-center gap-4">
                    <Link
                        href="/collections/all"
                        className="bg-primary text-primary-foreground py-3 px-8 font-semibold hover:bg-primary/90 transition-colors rounded-sm"
                    >
                        Explore Collection
                    </Link>

                    <Link
                        href="/contact?subject=Custom%20Order"
                        className="border border-white text-white py-3 px-8 font-semibold hover:bg-white hover:text-black transition-colors rounded-sm"
                    >
                        Custom Orders
                    </Link>
                </div>
            </div>
        </section>
    );
}