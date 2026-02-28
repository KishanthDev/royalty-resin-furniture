import { CollectionPage } from "@/components/CollectionPage";
import { collections } from "@/lib/demo";

export default function DiningTablesPage() {
    return (
        <CollectionPage
            title="Dining Tables"
            heroDescription="Grand statements of artistry and craftsmanship. Each table becomes the heart of your dining space—where heritage wood grains dance with luminous epoxy, creating heirloom moments for generations to gather."
            introTitle="Where Stories Unfold at the Table"
            introDescription="Commanding in presence yet intimate in spirit, our dining tables are sculptural centerpieces that elevate every meal into ceremony—blending organic wood elegance with crystalline resin artistry for unforgettable gatherings."
            customizationTitle="Tailored to Your Table's Story"
            customizationDescription="Customize length, width, height, wood species, and resin hues to harmonize with your dining sanctuary. Perfect for grand estates, fine restaurants, galleries, and homes seeking an unmistakable artistic focal point."
            ctaTitle="Envision Your Dream Dining Table"
            ctaDescription="Bring your vision to life. Share inspiration, dimensions, or architectural details—our artisans will craft a bespoke timber and resin masterpiece that transforms your dining space into a gallery of magnificence."
            contactSubject="Custom Dining Table Design"
            collections={collections}
        />
    );
}
