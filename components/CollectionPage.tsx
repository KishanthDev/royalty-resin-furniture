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
      {/* HERO */}
      <section className="bg-secondary text-secondary-foreground py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="uppercase tracking-[0.35em] text-xs text-secondary-foreground/60">
            Royalty Resin • Collection
          </p>

          <h1 className="mt-6 font-serif text-4xl md:text-6xl font-bold leading-tight">
            {title}
          </h1>

          <p className="mt-6 text-base md:text-lg text-secondary-foreground/80 leading-relaxed max-w-3xl mx-auto">
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

      {/* INTRO */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">
            {introTitle}
          </h2>

          <p className="mt-6 text-base text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            {introDescription}
          </p>
        </div>
      </section>

      {/* COLLECTION GRID */}
      <section id="collection" className="py-24 bg-primary/5">
        <div className="container mx-auto px-6 space-y-24">
          {collections.map((category, index) => (
            <div key={index}>
              <div className="mb-12 text-center">
                <h2 className="font-serif text-3xl md:text-4xl">
                  {category.title}
                </h2>
                <div className="mt-4 h-[2px] w-20 bg-primary mx-auto rounded-full" />
              </div>

              <CollectionGrid images={category.images} />
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOMIZATION */}
      <section className="py-20 bg-background border-t border-border/40">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">
            {customizationTitle}
          </h2>

          <p className="mt-6 text-base text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            {customizationDescription}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto text-center max-w-3xl px-6">
          <h2 className="font-serif text-3xl md:text-4xl">
            {ctaTitle}
          </h2>

          <p className="mt-6 text-base text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            {ctaDescription}
          </p>

          <div className="mt-10">
            <Link
              href={`/contact?subject=${encodeURIComponent(contactSubject)}`}
              className="inline-block bg-primary text-primary-foreground py-3 px-10 font-semibold rounded-lg hover:bg-primary/90 transition"
            >
              Request Design
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}