import Link from "next/link";
import { CollectionGrid } from "@/components/CollectionGrid";

// Example image data array for the collection
const collectionImages = [
  { src: "/images/side-coffee/table1.webp", alt: "Epoxy Resin Side Table with Walnut Wood" },
  { src: "/images/side-coffee/table2.webp", alt: "Ocean Blue Resin Coffee Table" },
  { src: "/images/side-coffee/table3.webp", alt: "Live Edge River Coffee Table" },
  { src: "/images/side-coffee/table4.webp", alt: "Black Diamond Resin Side Table" },
  { src: "/images/side-coffee/table5.webp", alt: "Clear Epoxy and Olive Wood Table" },
  { src: "/images/side-coffee/table6.webp", alt: "Galaxy Themed Resin Coffee Table" },
];

export default function SideCoffeePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold">
            Side & Coffee Tables
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-secondary-foreground/80">
            Artistic resin-crafted tables blending natural wood and premium epoxy.
          </p>
        </div>
      </section>

      {/* 2. Product Grid Section */}
      <section className="py-section-py px-section-px bg-primary/5">
        <div className="container mx-auto">
          <CollectionGrid images={collectionImages} />
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="py-section-py px-section-px">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl">
            Custom Orders Available
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
            Have a specific vision? We specialize in creating bespoke pieces tailored to your unique style and space.
          </p>
          <div className="mt-8">
            <Link href="/contact?subject=Custom%20Side/Coffee%20Table%20Design" className="bg-primary text-primary-foreground py-3 px-8 font-semibold hover:bg-primary/90 transition-colors rounded-sm inline-block">
              Request a Custom Design
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}