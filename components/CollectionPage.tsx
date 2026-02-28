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
            {/* HERO — centered with decorative underline accent */}
            <section className="bg-secondary text-secondary-foreground py-20 md:py-28 relative overflow-hidden">
                {/* Decorative background blur */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
                </div>

                <div className="relative container mx-auto px-6 text-center max-w-3xl">
                    <p className="uppercase tracking-[0.35em] text-xs text-secondary-foreground/50">
                        Royalty Resin • Collection
                    </p>

                    <h1 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        {title}
                    </h1>

                    <div className="mt-6 flex justify-center gap-2 items-center">
                        <div className="h-px w-12 bg-secondary-foreground/30" />
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <div className="h-px w-12 bg-secondary-foreground/30" />
                    </div>

                    <p className="mt-6 text-base md:text-lg text-secondary-foreground/70 leading-relaxed max-w-3xl mx-auto">
                        {heroDescription}
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="#collection"
                            className="bg-primary text-primary-foreground py-3 px-8 font-semibold rounded-lg hover:bg-primary/90 transition"
                        >
                            Explore Collection
                        </Link>
                        <Link
                            href={`/contact?subject=${encodeURIComponent(contactSubject)}`}
                            className="border border-white/60 text-white py-3 px-8 font-semibold rounded-lg hover:bg-white hover:text-black transition"
                        >
                            Connect With Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* INTRO — left-aligned with a left border accent */}
            <section className="py-20 bg-background">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="max-w-2xl border-l-4 border-primary pl-6">
                        <p className="uppercase tracking-widest text-xs text-foreground/40 mb-3">
                            About This Collection
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl text-left">
                            {introTitle}
                        </h2>
                        <p className="mt-5 text-base text-foreground/70 leading-relaxed text-left">
                            {introDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* COLLECTION GRID — alternating left/right section titles */}
            <section id="collection" className="py-24 bg-primary/5">
                <div className="container mx-auto px-6 space-y-24">
                    {collections.map((category, index) => (
                        <div key={index}>
                            <div className="mb-12 flex flex-col items-center text-center">
                                <p className="uppercase tracking-widest text-xs text-foreground/40 mb-2">
                                    Collection {String(index + 1).padStart(2, "0")}
                                </p>
                                <h2 className="font-serif text-3xl md:text-4xl">
                                    {category.title}
                                </h2>
                                <div className="mt-4 h-[2px] w-20 bg-primary rounded-full" />
                            </div>

                            <CollectionGrid images={category.images} />
                        </div>
                    ))}
                </div>
            </section>

            {/* CUSTOMIZATION — right-aligned with a right border accent */}
            <section className="py-20 bg-background border-t border-border/40">
                <div className="container mx-auto max-w-5xl px-6 flex justify-end">
                    <div className="max-w-2xl border-r-4 border-primary pr-6 text-right">
                        <p className="uppercase tracking-widest text-xs text-foreground/40 mb-3">
                            Made For You
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl">
                            {customizationTitle}
                        </h2>
                        <p className="mt-5 text-base text-foreground/70 leading-relaxed">
                            {customizationDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA — centered with full decorative treatment */}
            <section className="py-24 bg-primary/5 relative overflow-hidden">
                {/* Subtle background decoration */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
                </div>

                <div className="relative container mx-auto text-center max-w-3xl px-6">
                    <p className="uppercase tracking-widest text-xs text-foreground/40 mb-4">
                        Let's Create Together
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl">{ctaTitle}</h2>

                    {/* Decorative centered divider */}
                    <div className="mt-5 flex justify-center gap-2 items-center">
                        <div className="h-px w-12 bg-primary/60" />
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <div className="h-px w-12 bg-primary/60" />
                    </div>

                    <p className="mt-6 text-base text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                        {ctaDescription}
                    </p>

                    <div className="mt-10">
                        <Link
                            href={`/contact?subject=${encodeURIComponent(contactSubject)}`}
                            className="inline-block bg-primary text-primary-foreground py-3 px-10 font-semibold rounded-lg hover:bg-primary/90 transition shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Request Design
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
