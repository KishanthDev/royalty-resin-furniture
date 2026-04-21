import {
  HeroSection,
  TextLeftSection,
  TextRightSection,
  CtaSection,
  CollectionGridSection
} from "@/components/collections";
import { chessCollections } from "@/lib/data/chess-collections.data";

export default function ChessCollectionsPage() {
  return (
    <>
      <HeroSection
        subtitle="Royalty Resin • Collection"
        title="Chess Collections"
        description="Where strategy meets artistry. Our bespoke chess sets blend fine wood with luminous epoxy, turning every match into a masterpiece."
        primaryCta={{ label: "Explore Collection", href: "#collections" }}
        secondaryCta={{
          label: "Connect With Us",
          href: "/contact?subject=Custom Chess Set Design",
        }}
      />

      <TextLeftSection
        title="A Game of Kings, Reimagined"
        description="Each set is a unique work of art—crafted for those who value precision, balance, and beauty. Every detail enhances both play and presence."
      />

      <section id="collections" className="py-20 bg-primary/5">
        <CollectionGridSection
          title="Explore Designs"
          items={chessCollections}
        />
      </section>

      <TextRightSection
        title="Your Board, Your Legacy"
        description="Customize wood types, resin finishes, and piece styles to create a one-of-a-kind chess set that reflects your personality and mastery."
      />

      <CtaSection
        title="Ready to Make Your Move?"
        description="Share your vision and preferences—our artisans will craft a bespoke chess set designed for both play and display."
        button={{
          label: "Request Design",
          href: "/contact?subject=Custom Chess Set Design",
        }}
      />
    </>
  );
}