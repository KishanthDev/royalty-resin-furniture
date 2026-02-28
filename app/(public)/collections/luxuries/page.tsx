import { CollectionPage } from "@/components/CollectionPage";
import { collections } from "@/lib/luxuries.data";

export default function LuxuryFurniturePage() {
    return (
        <CollectionPage
            title="Luxury Furniture"
            heroDescription="Exquisite statements of artistry and craftsmanship. Each piece becomes a sanctuary of elegance—where heritage wood grains dance with luminous epoxy, creating heirloom moments for generations to cherish and admire."
            introTitle="Elevate Your Space with Timeless Luxury"
            introDescription="Commanding in presence yet intimate in spirit, our luxury furniture pieces are sculptural masterpieces that elevate every space into a sanctuary—blending organic wood elegance with crystalline resin artistry for unforgettable luxury living."
            customizationTitle="Bespoke Luxury Tailored to You"
            customizationDescription="Customize dimensions, wood species, resin hues, and finishes to harmonize with your vision. Perfect for luxury estates, fine residences, boutique hotels, galleries, and spaces seeking an unmistakable artistic focal point."
            ctaTitle="Envision Your Dream Luxury Piece"
            ctaDescription="Bring your vision to life. Share inspiration, specifications, or design preferences—our master artisans will craft a bespoke timber and resin masterpiece that transforms your space into a gallery of refined magnificence."
            contactSubject="Custom Luxury Furniture Design"
            collections={collections}
        />
    );
}
