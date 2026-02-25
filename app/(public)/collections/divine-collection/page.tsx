import Link from "next/link";
import { CollectionGrid } from "@/components/CollectionGrid";
import { collections } from "@/lib/demo";

export default function DivineCollectionPage() {
    return (
        <>
            {/* 1. Hero Section */}
            <section className="bg-secondary text-secondary-foreground py-16 md:py-24 border-b border-border/40">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-secondary-foreground/70">
                        Royalty Resin • Collection
                    </p>
                    <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold">
                        Divine Collection
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-secondary-foreground/80">
                        Transcendent pieces where sacred geometry meets luminous artistry. Each creation
                        embodies celestial inspiration, transforming your space into a sanctuary of
                        divine beauty and spiritual elegance.
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                        <Link
                            href="#collection"
                            className="bg-primary text-primary-foreground py-3 px-8 text-sm md:text-base font-semibold hover:bg-primary/90 transition-colors rounded-sm"
                        >
                            Explore Collection
                        </Link>
                        <Link
                            href="/contact?subject=Divine%20Collection%20Enquiry"
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
                        Celestial Artistry Meets Sacred Craft
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-foreground/80">
                        The Divine Collection transcends ordinary furnishing, offering spiritual
                        resonance through meticulously crafted pieces. Each design channels ethereal
                        beauty with sustainably sourced materials and transformative resin artistry.
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
                            Bespoke Divine Creations
                        </h2>
                        <p className="mt-3 text-sm md:text-base text-foreground/80">
                            Customize dimensions, wood species, resin colors, and spiritual symbolism
                            to reflect your personal journey. Perfect for meditation spaces, spiritual
                            retreats, luxury homes, and those seeking transcendent artistic expression.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. CTA Section */}
            <section className="py-section-py px-section-px bg-primary/3">
                <div className="container mx-auto text-center max-w-2xl">
                    <h2 className="font-serif text-3xl md:text-4xl">
                        Manifest Your Divine Vision
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-foreground/80">
                        Share your spiritual inspiration and design aspirations. Our artisans will
                        craft a bespoke Divine piece that elevates your space into a sanctuary of
                        celestial beauty and profound meaning.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link
                            href="/contact?subject=Custom%20Divine%20Collection%20Design"
                            className="bg-primary text-primary-foreground py-3 px-8 font-semibold hover:bg-primary/90 transition-colors rounded-sm inline-block"
                        >
                            Create Your Piece
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
