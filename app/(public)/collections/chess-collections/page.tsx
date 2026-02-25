import Link from "next/link";
import { CollectionGrid } from "@/components/CollectionGrid";
import { collections } from "@/lib/demo";

export default function ChessCollectionPage() {
    return (
        <>
            {/* 1. Hero Section */}
            <section className="bg-secondary text-secondary-foreground py-16 md:py-24 border-b border-border/40">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-secondary-foreground/70">
                        Royalty Resin • Collection
                    </p>
                    <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold">
                        Chess Collections
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-secondary-foreground/80">
                        Strategic masterpieces where rare wood converges with luminous epoxy. Each board
                        becomes a battlefield of artistry—where every move plays against a backdrop of
                        crystalline elegance and timeless craftsmanship.
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                        <Link
                            href="#collection"
                            className="bg-primary text-primary-foreground py-3 px-8 text-sm md:text-base font-semibold hover:bg-primary/90 transition-colors rounded-sm"
                        >
                            Explore Collection
                        </Link>
                        <Link
                            href="/contact?subject=Chess%20Board%20Enquiry"
                            className="border border-primary text-primary py-3 px-8 text-sm md:text-base font-medium hover:bg-primary/5 transition-colors rounded-sm"
                        >
                            Connect With Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Collection Intro */}
            <section className="py-10 md:py-14 px-section-px bg-primary/5 border-b border-border/40">
                <div className="container mx-auto max-w-4xl text-center md:text-left">
                    <h2 className="font-serif text-2xl md:text-3xl">
                        Where Strategy Meets Splendor
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-foreground/80">
                        Transform your game into an experience. Our chess boards are sculptural
                        treasures that blend premium wood grain patterns with radiant resin artistry—
                        perfect for collectors, enthusiasts, and those who believe every match deserves
                        an extraordinary setting.
                    </p>
                </div>
            </section>

            {/* 3. Product Grid Section */}
            <section
                id="collection"
                className="py-section-py px-section-px bg-primary/5"
            >
                <div className="container mx-auto space-y-20">
                    {collections.map((category, index) => (
                        <div key={index}>
                            <div className="mb-8 text-center">
                                <h2 className="font-serif text-3xl md:text-4xl">
                                    {category.title}
                                </h2>
                                <div className="mt-2 h-[2px] w-16 bg-primary mx-auto" />
                            </div>

                            <CollectionGrid images={category.images} />
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Customisation Strip */}
            <section className="py-12 px-section-px bg-background border-y border-border/40">
                <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className="flex-1">
                        <h2 className="font-serif text-2xl md:text-3xl">
                            Crafted for the Discerning Player
                        </h2>
                        <p className="mt-3 text-sm md:text-base text-foreground/80">
                            Customize board size, wood species, resin colors, and piece designs to reflect
                            your chess passion. Ideal for tournament players, collectors, luxury gifts, and
                            those seeking a chess experience that transcends the game itself.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. CTA Section */}
            <section className="py-section-py px-section-px bg-primary/3">
                <div className="container mx-auto text-center max-w-2xl">
                    <h2 className="font-serif text-3xl md:text-4xl">
                        Commission Your Signature Chess Board
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-foreground/80">
                        Envision your perfect board. Share your style preferences, desired dimensions,
                        or unique requirements—our artisans will handcraft a bespoke chess masterpiece
                        that elevates every game into a work of art.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link
                            href="/contact?subject=Custom%20Chess%20Board%20Design"
                            className="bg-primary text-primary-foreground py-3 px-8 font-semibold hover:bg-primary/90 transition-colors rounded-sm inline-block"
                        >
                            Design Your Board
                        </Link>
                        <Link
                            href="https://wa.me/91XXXXXXXXXX"
                            className="text-primary underline underline-offset-4 text-sm md:text-base"
                        >
                            Message on WhatsApp
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
