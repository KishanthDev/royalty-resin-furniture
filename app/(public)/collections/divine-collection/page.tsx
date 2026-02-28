import { CollectionPage } from "@/components/CollectionPage";
import { collections } from "@/lib/demo";

export default function DivineCollectionPage() {
    return (
        <CollectionPage
            title="Divine Collection"
            heroDescription="Transcendent pieces where sacred geometry meets luminous artistry. Each creation embodies celestial inspiration, transforming your space into a sanctuary of divine beauty and spiritual elegance. Discover the perfect blend of craftsmanship and spiritual essence."
            introTitle="Celestial Artistry Meets Sacred Craft"
            introDescription="The Divine Collection transcends ordinary furnishing, offering spiritual resonance through meticulously crafted pieces. Each design channels ethereal beauty with sustainably sourced materials and transformative resin artistry."
            customizationTitle="Bespoke Divine Creations"
            customizationDescription="Customize dimensions, wood species, resin colors, and spiritual symbolism to reflect your personal journey. Perfect for meditation spaces, spiritual retreats, luxury homes, and those seeking transcendent artistic expression."
            ctaTitle="Manifest Your Divine Vision"
            ctaDescription="Share your spiritual inspiration and design aspirations. Our artisans will craft a bespoke Divine piece that elevates your space into a sanctuary of celestial beauty and profound meaning."
            contactSubject="Custom Divine Collection Design"
            collections={collections}
        />
    );
}
