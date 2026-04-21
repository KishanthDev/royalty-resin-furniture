import {
  HeroSection,
  TextLeftSection,
  TextRightSection,
  CtaSection,
  CollectionGridSection
} from "@/components/collections";
import { sideCoffeeProducts } from "@/lib/data/side-coffee-table.data";

export default function SideCoffeePage() {
  return (
    <>
      <HeroSection
        subtitle="Royalty Resin • Collection"
        title="Side & Coffee Tables"
        description="Thoughtfully sized tables for sofas, corners, and lounges, crafted by merging natural wood grains with premium epoxy for everyday luxury."
        primaryCta={{ label: "Explore Collection", href: "#products" }}
        secondaryCta={{
          label: "Connect With Us",
          href: "/contact?subject=Custom Side Table",
        }}
      />

      <TextLeftSection
        title="Crafted for Daily Rituals"
        description="From morning coffee to evening conversations, these pieces are designed to sit closer to you—lighter in scale but rich in character."
      />

      <section id="products" className="py-20 bg-primary/5">
        <CollectionGridSection
          title="Explore Designs"
          items={sideCoffeeProducts}
        />
      </section>

      <TextRightSection
        title="Made to Fit Your Space"
        description="Adjust diameter, height, wood species, and resin tone to match your interior perfectly."
      />

      <CtaSection
        title="Have a Table in Mind?"
        description="Share your idea or reference — we’ll craft it into a bespoke table."
        button={{
          label: "Request Design",
          href: "/contact?subject=Custom Side Table",
        }}
      />
    </>
  );
}