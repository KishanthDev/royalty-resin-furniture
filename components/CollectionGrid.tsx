import Image from "next/image";

export interface CollectionImage {
  src: string;
  alt: string;
}

export interface CollectionGridProps {
  images: CollectionImage[];
}

export function CollectionGrid({ images }: CollectionGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {images.map((image, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-xl bg-neutral-100"
        >
          {/* Image Wrapper */}
          <div className="relative h-[280px] sm:h-[300px] lg:h-[320px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 50vw,
                     33vw"
            />
          </div>

          {/* Elegant Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

          {/* Subtle Bottom Border Accent */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-600 transition-all duration-500 group-hover:w-full" />
        </div>
      ))}
    </div>
  );
}