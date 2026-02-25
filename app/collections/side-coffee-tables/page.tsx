import Link from "next/link";
import { CollectionGrid } from "@/components/CollectionGrid";
import { collections } from "@/lib/side-coffee-table.data";

export default function SideCoffeePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24 border-b border-border/40">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-secondary-foreground/70">
            Royalty Resin • Collection
          </p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold">
            Side &amp; Coffee Tables
          </h1>
          <p className="mt-4 text-base md:text-lg text-secondary-foreground/80">
            Thoughtfully sized tables for sofas, corners, and lounges, crafted by
            merging natural wood grains with premium epoxy for everyday luxury.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="#collection"
              className="bg-primary text-primary-foreground py-3 px-8 text-sm md:text-base font-semibold hover:bg-primary/90 transition-colors rounded-sm"
            >
              View Collection
            </Link>
            <Link
              href="/contact?subject=Side%20%26%20Coffee%20Table%20Enquiry"
              className="border border-primary text-primary py-3 px-8 text-sm md:text-base font-medium hover:bg-primary/5 transition-colors rounded-sm"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Collection Intro */}
      <section className="py-10 md:py-14 px-section-px bg-primary/5 border-b border-border/40">
        <div className="container mx-auto max-w-4xl text-center md:text-left">
          <h2 className="font-serif text-2xl md:text-3xl">
            Crafted for Daily Rituals
          </h2>
          <p className="mt-3 text-sm md:text-base text-foreground/80">
            From morning coffee to evening conversations, these pieces are designed
            to sit closer to you—lighter in scale than dining tables, but rich in
            character, detail, and finish.
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
              Made to Fit Your Space
            </h2>
            <p className="mt-3 text-sm md:text-base text-foreground/80">
              Adjust diameter, height, wood species, and resin tone to match your
              sofa, rug, or interior palette. Perfect for homes, cafés, hotels, and
              lounges looking for a signature accent.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-section-py px-section-px bg-primary/3">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl">
            Have a Table in Mind?
          </h2>
          <p className="mt-4 text-sm md:text-base text-foreground/80">
            Share a sketch, reference image, or room photo—our team will help you
            translate it into a bespoke resin and wood table tailored to your
            dimensions and usage.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact?subject=Custom%20Side%20%26%20Coffee%20Table%20Design"
              className="bg-primary text-primary-foreground py-3 px-8 font-semibold hover:bg-primary/90 transition-colors rounded-sm inline-block"
            >
              Request a Custom Design
            </Link>
            <Link
              href="https://wa.me/91XXXXXXXXXX"
              className="text-primary underline underline-offset-4 text-sm md:text-base"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
