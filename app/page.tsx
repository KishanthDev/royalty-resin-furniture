import { Hero } from "./Hero";
import { ProductCard } from "./ProductCard";
import { SectionTitle } from "./SectionTitle";
import { CTASection } from "./CTASection";
import { getFeaturedProducts } from "@/lib/data";
import Image from "next/image";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <Hero />

      <section className="py-section-py px-section-px">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="Our Philosophy"
            title="Where Nature Meets Artistry"
          />
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <h3 className="text-2xl font-serif mb-4">Nature-Inspired</h3>
              <p className="text-foreground/80">
                Every piece is a celebration of natural wood, its unique grains
                and timeless beauty, preserved forever in crystal-clear resin.
              </p>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif mb-4">Handcrafted</h3>
              <p className="text-foreground/80">
                Meticulously handcrafted by skilled artisans, ensuring that no
                two pieces are exactly alike. A true statement of individuality.
              </p>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif mb-4">Artistic Pieces</h3>
              <p className="text-foreground/80">
                We create more than furniture; we create functional art that
                becomes the centerpiece of any room.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-py px-section-px bg-primary/5">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="Featured Collection"
            title="Discover Our Signature Pieces"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-py px-section-px">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5]">
            <Image
              src="/artistic-vision.jpg" // Add to /public folder
              alt="Artistic vision in furniture design"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-right">
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              An Artistic Vision,
              <br />
              <span className="text-primary">Impeccably Executed.</span>
            </h2>
            <p className="mt-8 text-lg text-foreground/80 max-w-md ml-auto">
              Our vision is to transform living spaces with furniture that tells
              a story. A story of nature's perfection and human artistry,
              intertwined.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}