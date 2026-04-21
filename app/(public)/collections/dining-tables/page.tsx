import HeroSection from "@/components/sections/HeroSection";
import TextLeftSection from "@/components/sections/TextLeftSection";
import TextRightSection from "@/components/sections/TextRightSection";
import CtaSection from "@/components/sections/CtaSection";
import { ProductGridSection } from "@/components/collections/CollectionGridSection";
import { diningCollections } from "@/lib/data/dining-tables.data";

export default function DiningTablesPage() {
  return (
    <>
      <HeroSection
        subtitle="Royalty Resin • Collection"
        title="Dining Tables"
        description="Grand statements of artistry and craftsmanship. Each table becomes the heart of your dining space—where heritage wood grains meet luminous epoxy."
        primaryCta={{ label: "Explore Collection", href: "#collections" }}
        secondaryCta={{
          label: "Connect With Us",
          href: "/contact?subject=Custom Dining Table Design",
        }}
      />

      <TextLeftSection
        title="Where Stories Unfold at the Table"
        description="Commanding in presence yet intimate in spirit, our dining tables transform every meal into an experience—blending organic wood with crystal-clear resin."
      />

      <section id="collections" className="py-20 bg-primary/5">
        <ProductGridSection
          title="Explore Designs"
          items={diningCollections}
        />
      </section>

      <TextRightSection
        title="Tailored to Your Table's Story"
        description="Customize size, wood species, and resin tones to perfectly match your space—ideal for homes, restaurants, and statement interiors."
      />

      <CtaSection
        title="Envision Your Dream Dining Table"
        description="Share your vision, inspiration, or dimensions—our artisans will craft a bespoke masterpiece for your space."
        button={{
          label: "Request Design",
          href: "/contact?subject=Custom Dining Table Design",
        }}
      />
    </>
  );
}