import HeroSection from "@/components/sections/HeroSection";
import TextLeftSection from "@/components/sections/TextLeftSection";
import TextRightSection from "@/components/sections/TextRightSection";
import CtaSection from "@/components/sections/CtaSection";
import { ProductGridSection } from "@/components/collections/CollectionGridSection";
import { luxuryCollections } from "@/lib/data/luxuries.data";

export default function LuxuryFurniturePage() {
  return (
    <>
      <HeroSection
        subtitle="Royalty Resin • Collection"
        title="Luxury Furniture"
        description="Exquisite statements of artistry and craftsmanship. Each piece becomes a sanctuary of elegance—where heritage wood grains merge with luminous epoxy."
        primaryCta={{ label: "Explore Collection", href: "#collections" }}
        secondaryCta={{
          label: "Connect With Us",
          href: "/contact?subject=Custom Luxury Furniture Design",
        }}
      />

      <TextLeftSection
        title="Elevate Your Space with Timeless Luxury"
        description="Commanding in presence yet intimate in spirit, our luxury furniture pieces transform interiors into artistic sanctuaries—blending organic wood with crystal-clear resin."
      />

      <section id="collections" className="py-20 bg-primary/5">
        <ProductGridSection
          title="Explore Designs"
          items={luxuryCollections}
        />
      </section>

      <TextRightSection
        title="Bespoke Luxury Tailored to You"
        description="Customize dimensions, wood species, resin tones, and finishes to match your vision—perfect for luxury homes, hotels, and statement interiors."
      />

      <CtaSection
        title="Envision Your Dream Piece"
        description="Share your idea, inspiration, or requirements—our artisans will craft a one-of-a-kind masterpiece."
        button={{
          label: "Request Design",
          href: "/contact?subject=Custom Luxury Furniture Design",
        }}
      />
    </>
  );
}