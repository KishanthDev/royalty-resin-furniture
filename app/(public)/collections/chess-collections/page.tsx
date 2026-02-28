import { CollectionPage } from "@/components/CollectionPage";
import { collections } from "@/lib/chess-collections.data";

export default function ChessCollectionsPage() {
    return (
        <CollectionPage
            title="Chess Collections"
            heroDescription="Where strategy meets artistry. Our bespoke chess sets are crafted from the finest wood and shimmering epoxy resin, turning every match into a masterpiece of tactical elegance."
            introTitle="A Game of Kings, Reimagined"
            introDescription="Each set is a unique work of art, designed for players who appreciate both form and function. From the weight of the pieces to the luster of the board, every detail is considered to enhance your playing experience."
            customizationTitle="Your Board, Your Legacy"
            customizationDescription="Commission a one-of-a-kind chess set. Choose your wood, resin colors, and piece design to create a personal heirloom that reflects your style and passion for the game."
            ctaTitle="Ready to Make Your Move?"
            ctaDescription="Contact us to discuss your custom chess set. Whether for display or for play, we'll craft a set that is as unique as your strategy."
            contactSubject="Custom Chess Set Design"
            collections={collections}
        />
    );
}
