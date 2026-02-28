import { CollectionPage } from "@/components/CollectionPage";
import { collections } from "@/lib/demo";

export default function ChairsPage() {
    return (
        <CollectionPage
            title="Chairs"
            heroDescription="Sculptural seating that merges comfort with artistry. Each chair becomes a statement piece—where heritage wood grains dance with luminous epoxy, creating iconic moments of elegance in every space."
            introTitle="Sit in Artistry"
            introDescription="Commanding in presence yet inviting in comfort, our chairs are sculptural masterpieces that elevate every setting—blending organic wood elegance with crystalline resin artistry for unforgettable seating experiences."
            customizationTitle="Tailored to Your Comfort"
            customizationDescription="Customize height, backrest design, wood species, and resin accents to harmonize with your interior vision. Perfect for dining sets, offices, galleries, and homes seeking distinctive artistic seating."
            ctaTitle="Design Your Dream Chair"
            ctaDescription="Bring your vision to life. Share inspiration, dimensions, or design preferences—our artisans will craft bespoke timber and resin seating that transforms your space into a showcase of sophistication."
            contactSubject="Custom Chair Design"
            collections={collections}
        />
    );
}
