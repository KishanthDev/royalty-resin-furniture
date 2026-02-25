import { CategoryList } from "@/components/CategoryList";

const categories = [
  {
    name: "Side & Coffee Tables",
    href: "/collections/side-coffee-tables",
    imageSrc: "/assets/side-coffee-table/coffee/image1.png",
    description: "Artistic tables blending natural wood and premium epoxy.",
  },
  {
    name: "Dining Tables",
    href: "/collections/dining-tables",
    imageSrc: "/assets/dining-tables/sea-shell/image1.png",
    description: "Grand statements of artistry for your dining space.",
  },
  {
    name: "Chess Collections",
    href: "/collections/chess-collections",
    imageSrc: "/assets/chess-collections/black-ice/image1.png",
    description: "Where strategic gameplay converges with fine art.",
  },
  {
    name: "Luxuries",
    href: "/collections/luxuries",
    imageSrc: "/assets/luxury/image1.png",
    description: "Exquisite statements of artistry and craftsmanship.",
  },
  {
    name: "Chairs",
    href: "/collections/chairs",
    imageSrc: "/assets/chairs/image1.png",
    description: "Sculptural seating that merges comfort with artistry.",
  },
  {
    name: "Divine Collection",
    href: "/collections/divine-collection",
    imageSrc: "/assets/divine/image1.png",
    description: "Transcendent pieces where sacred geometry meets luminous artistry.",
  },
];

export default function AllCollectionsPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24 border-b border-border/40">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-secondary-foreground/70">
            Royalty Resin
          </p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold">
            Our Collections
          </h1>
          <p className="mt-4 text-base md:text-lg text-secondary-foreground/80">
            Explore our curated collections, each piece a testament to the fusion of natural beauty and artistic innovation. Find the perfect statement for your space.
          </p>
        </div>
      </section>

      {/* 2. Category Grid Section */}
      <section className="py-section-py px-section-px bg-background">
        <div className="container mx-auto">
          {/* Note: Add images to /public/assets/categories/ to see the component in action. */}
          <CategoryList categories={categories} />
        </div>
      </section>
    </>
  );
}
