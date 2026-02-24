import Link from "next/link";

export function Hero() {
    return (
        // Make sure to add a high-quality `hero-background.jpg` to your /public folder.
        <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white bg-[url('/hero-background.jpg')] bg-cover bg-center bg-fixed">
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 p-4">
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Royalty Resin Furniture & Interiors
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
                    “Innovative furniture crafted by merging premium epoxy with natural wood.”
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link href="/collections/all" className="bg-primary text-primary-foreground py-3 px-8 font-semibold hover:bg-primary/90 transition-colors rounded-sm">
                        Explore Collection
                    </Link>
                    <Link href="/contact?subject=Custom%20Order" className="border border-white text-white py-3 px-8 font-semibold hover:bg-white hover:text-black transition-colors rounded-sm">
                        Custom Orders
                    </Link>
                </div>
            </div>
        </section>
    );
}