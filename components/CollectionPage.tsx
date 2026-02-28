import Link from "next/link";
import { CollectionGrid, CollectionImage } from "@/components/CollectionGrid";

interface CollectionPageProps {
    title: string;
    heroDescription: string;
    introTitle: string;
    introDescription: string;
    customizationTitle: string;
    customizationDescription: string;
    ctaTitle: string;
    ctaDescription: string;
    contactSubject: string;
    collections: {
        title: string;
        images: CollectionImage[];
    }[];
}

export function CollectionPage({
    title,
    heroDescription,
    introTitle,
    introDescription,
    customizationTitle,
    customizationDescription,
    ctaTitle,
    ctaDescription,
    contactSubject,
    collections,
}: CollectionPageProps) {
    return (
        <>
            {/* Hero */}
            <section className="bg-secondary text-secondary-foreground py-16 md:py-24 border-b border-border/40">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-secondary-foreground/70">
                        Royalty Resin • Collection
                    </p>

                    <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold">
                        {title}
                    </h1>

                    <p className="mt-4 text-base md:text-lg text-secondary-foreground/80">
                        {heroDescription}
                    </p>

                    <div className="mt-6 flex justify-center gap-4">
                        <Link
                            href="#collection"
                            className="bg-primary text-primary-foreground py-3 px-8 font-semibold hover:bg-primary/90 transition-colors rounded-sm"
                        >
                            Explore Collection
                        </Link>

                        <Link
                            href={`/contact?subject=${encodeURIComponent(contactSubject)}`}
                            className="border border-white text-white py-3 px-8 font-semibold hover:bg-white hover:text-black transition-colors rounded-sm"
                        >
                            Connect With Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-10 md:py-14 px-section-px bg-primary/5 border-b border-border/40">
                <div className="container mx-auto max-w-4xl text-center md:text-left">
                    <h2 className="font-serif text-2xl md:text-3xl">
                        {introTitle}
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-foreground/80">
                        {introDescription}
                    </p>
                </div>
            </section>

            {/* Grid */}
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

            {/* Customization Section */}
            <section className="py-12 px-section-px bg-background border-y border-border/40">
                <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className="flex-1">
                        <h2 className="font-serif text-2xl md:text-3xl">
                            {customizationTitle}
                        </h2>
                        <p className="mt-3 text-sm md:text-base text-foreground/80">
                            {customizationDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-section-py px-section-px bg-primary/3">
                <div className="container mx-auto text-center max-w-2xl">
                    <h2 className="font-serif text-3xl md:text-4xl">
                        {ctaTitle}
                    </h2>

                    <p className="mt-4 text-sm md:text-base text-foreground/80">
                        {ctaDescription}
                    </p>

                    <div className="mt-8 flex justify-center gap-4">
                        <Link
                            href={`/contact?subject=${encodeURIComponent(contactSubject)}`}
                            className="bg-primary text-primary-foreground py-3 px-8 font-semibold hover:bg-primary/90 transition-colors rounded-sm"
                        >
                            Request Design
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}