// app/collections/all/page.tsx

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
      {/* ── HERO ── */}
      <section className="bg-secondary text-secondary-foreground py-20 md:py-28 relative overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-section-px text-center max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <p className="uppercase tracking-[0.35em] text-xs text-secondary-foreground/50">
              Royalty Resin
            </p>
            <div className="h-px w-8 bg-primary" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Our{" "}
            <span className="text-primary">Collections</span>
          </h1>

          {/* Divider */}
          <div className="mt-6 flex justify-center gap-2 items-center">
            <div className="h-px w-12 bg-secondary-foreground/20" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <div className="h-px w-12 bg-secondary-foreground/20" />
          </div>

          <p className="mt-6 text-base md:text-lg text-secondary-foreground/65 leading-relaxed">
            Explore our curated collections — each piece a testament to the
            fusion of natural beauty and artistic innovation. Find the perfect
            statement for your space.
          </p>

          {/* Collection count badge */}
          <div className="mt-8 inline-flex items-center gap-2 border border-secondary-foreground/15 rounded-full px-4 py-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs text-secondary-foreground/50 uppercase tracking-widest">
              {categories.length} Collections Available
            </span>
          </div>
        </div>
      </section>

      {/* ── CATEGORY GRID ── */}
      <section className="py-section-py px-section-px bg-background">
        <div className="container mx-auto">
          <CategoryList categories={categories} />
        </div>
      </section>
    </>
  );
}
