import Image from "next/image";

interface CollectionImage {
    src: string;
    alt: string;
}

interface CollectionGridProps {
    images: CollectionImage[];
}

export function CollectionGrid({ images }: CollectionGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="group relative block overflow-hidden rounded-lg shadow-xl border-2 border-transparent hover:border-primary transition-all duration-300"
                >
                    <div className="relative aspect-square">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}