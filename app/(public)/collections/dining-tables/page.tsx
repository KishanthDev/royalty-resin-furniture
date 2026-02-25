import Link from "next/link";
import { CollectionGrid } from "@/components/CollectionGrid";
import { collections } from "@/lib/demo";

export default function DiningTablesPage() {
    return (
        <>
            {/* 1. Hero Section */}
            <section className="bg-secondary text-secondary-foreground py-16 md:py-24 border-b border-border/40">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-secondary-foreground/70">
                        Royalty Resin • Collection
                    </p>
                    <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold">
                        Dining Tables
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-secondary-foreground/80">
                        Grand statements of artistry and craftsmanship. Each table becomes the
                        heart of your dining space—where heritage wood grains dance with
                        luminous epoxy, creating heirloom moments for generations to gather.
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                        <Link
                            href="#collection"
                            className="bg-primary text-primary-foreground py-3 px-8 text-sm md:text-base font-semibold hover:bg-primary/90 transition-colors rounded-sm"
                        >
                            Explore Collection
                        </Link>
                        <Link
                            href="/contact?subject=Dining%20Table%20Enquiry"
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
                        Where Stories Unfold at the Table
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-foreground/80">
                        Commanding in presence yet intimate in spirit, our dining tables are sculptural
                        centerpieces that elevate every meal into ceremony—blending organic wood
                        elegance with crystalline resin artistry for unforgettable gatherings.
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
                            Tailored to Your Table's Story
                        </h2>
                        <p className="mt-3 text-sm md:text-base text-foreground/80">
                            Customize length, width, height, wood species, and resin hues to harmonize
                            with your dining sanctuary. Perfect for grand estates, fine restaurants,
                            galleries, and homes seeking an unmistakable artistic focal point.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. CTA Section */}
            <section className="py-section-py px-section-px bg-primary/3">
                <div className="container mx-auto text-center max-w-2xl">
                    <h2 className="font-serif text-3xl md:text-4xl">
                        Envision Your Dream Dining Table
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-foreground/80">
                        Bring your vision to life. Share inspiration, dimensions, or architectural
                        details—our artisans will craft a bespoke timber and resin masterpiece
                        that transforms your dining space into a gallery of magnificence.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link
                            href="/contact?subject=Custom%20Dining%20Table%20Design"
                            className="bg-primary text-primary-foreground py-3 px-8 font-semibold hover:bg-primary/90 transition-colors rounded-sm inline-block"
                        >
                            Design Your Table
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
