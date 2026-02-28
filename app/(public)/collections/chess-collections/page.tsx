import { CollectionPage } from "@/components/CollectionPage";
import { collections } from "@/lib/demo";

export default function ChessCollectionPage() {
    return (
        <CollectionPage
            title="Chess Collections"
            heroDescription="Strategic masterpieces where rare wood converges with luminous epoxy. Each board becomes a battlefield of artistry—where every move plays against a backdrop of crystalline elegance and timeless craftsmanship."
            introTitle="Where Strategy Meets Splendor"
            introDescription="Transform your game into an experience. Our chess boards are sculptural treasures that blend premium wood grain patterns with radiant resin artistry—perfect for collectors, enthusiasts, and those who believe every match deserves an extraordinary setting."
            customizationTitle="Crafted for the Discerning Player"
            customizationDescription="Customize board size, wood species, resin colors, and piece designs to reflect your chess passion. Ideal for tournament players, collectors, luxury gifts, and those seeking a chess experience that transcends the game itself."
            ctaTitle="Commission Your Signature Chess Board"
            ctaDescription="Envision your perfect board. Share your style preferences, desired dimensions, or unique requirements—our artisans will handcraft a bespoke chess masterpiece that elevates every game into a work of art."
            contactSubject="Custom Chess Board Design"
            collections={collections}
        />
    );
}
