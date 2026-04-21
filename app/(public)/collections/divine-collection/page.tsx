import {
  HeroSection,
  TextLeftSection,
  TextRightSection,
  CtaSection,
  CollectionGridSection
} from "@/components/collections";
import { divineCollections } from "@/lib/data/divine-data";

export default function DivineCollectionPage() {
  return (
    <>
      <HeroSection
        subtitle="Royalty Resin • Collection"
        title="Divine Collection"
        description="Transcendent pieces where sacred inspiration meets luminous artistry—crafted to transform your space into a sanctuary of beauty and meaning."
        primaryCta={{ label: "Explore Collection", href: "#collections" }}
        secondaryCta={{
          label: "Connect With Us",
          href: "/contact?subject=Custom Divine Collection Design",
        }}
      />

      <TextLeftSection
        title="Celestial Artistry Meets Sacred Craft"
        description="Each piece in the Divine Collection carries a sense of spiritual resonance—blending natural materials with radiant resin to create timeless, meaningful art."
      />

      <section id="collections" className="py-20 bg-primary/5">
        <CollectionGridSection
          title="Explore Designs"
          items={divineCollections}
        />
      </section>

      <TextRightSection
        title="Bespoke Divine Creations"
        description="Personalize dimensions, wood types, resin tones, and symbolic elements to reflect your spiritual journey and design vision."
      />

      <CtaSection
        title="Manifest Your Divine Vision"
        description="Share your inspiration and ideas—our artisans will craft a bespoke piece that transforms your space into a sanctuary of elegance and meaning."
        button={{
          label: "Request Design",
          href: "/contact?subject=Custom Divine Collection Design",
        }}
      />
    </>
  );
}