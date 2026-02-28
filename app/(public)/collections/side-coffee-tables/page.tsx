import { CollectionPage } from "@/components/CollectionPage";
import { collections } from "@/lib/side-coffee-table.data";

export default function SideCoffeePage() {
  return (
    <CollectionPage
      title="Side & Coffee Tables"
      heroDescription="Thoughtfully sized tables for sofas, corners, and lounges, crafted by merging natural wood grains with premium epoxy for everyday luxury. Each piece is uniquely designed to complement your interior while standing the test of time."
      introTitle="Crafted for Daily Rituals"
      introDescription="From morning coffee to evening conversations, these pieces are designed to sit closer to you—lighter in scale than dining tables, but rich in character, detail, and finish."
      customizationTitle="Made to Fit Your Space"
      customizationDescription="Adjust diameter, height, wood species, and resin tone to match your sofa, rug, or interior palette. Perfect for homes, cafés, hotels, and lounges looking for a signature accent."
      ctaTitle="Have a Table in Mind?"
      ctaDescription="Share a sketch, reference image, or room photo—our team will help you translate it into a bespoke resin and wood table tailored to your dimensions and usage."
      contactSubject="Custom Side & Coffee Table Design"
      collections={collections}
    />
  );
}
