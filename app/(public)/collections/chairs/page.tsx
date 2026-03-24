import HeroSection from "@/components/sections/HeroSection";
import TextLeftSection from "@/components/sections/TextLeftSection";
import TextRightSection from "@/components/sections/TextRightSection";
import CtaSection from "@/components/sections/CtaSection";
import { ProductGridSection } from "@/components/product/ProductGridSection";
import { chairCollections } from "@/lib/chairs-data";

export default function ChairsPage() {
  return (
    <>
      <HeroSection
        subtitle="Royalty Resin • Collection"
        title="Chairs"
        description="Sculptural seating that merges comfort with artistry—where heritage wood grains meet luminous epoxy to create statement pieces for refined spaces."
        primaryCta={{ label: "Explore Collection", href: "#collections" }}
        secondaryCta={{
          label: "Connect With Us",
          href: "/contact?subject=Custom Chair Design",
        }}
      />

      <TextLeftSection
        title="Sit in Artistry"
        description="Commanding in presence yet inviting in comfort, our chairs elevate every setting—blending organic wood with refined resin artistry."
      />

      <section id="collections" className="py-20 bg-primary/5">
        <ProductGridSection
          title="Explore Designs"
          items={chairCollections}
        />
      </section>

      <TextRightSection
        title="Tailored to Your Comfort"
        description="Customize height, backrest, wood species, and resin accents to match your interior—perfect for homes, offices, and curated spaces."
      />

      <CtaSection
        title="Design Your Dream Chair"
        description="Share your inspiration and preferences—our artisans will craft bespoke seating that blends comfort with artistic expression."
        button={{
          label: "Request Design",
          href: "/contact?subject=Custom Chair Design",
        }}
      />
    </>
  );
}