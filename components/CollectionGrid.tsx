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
    <div className="w-full">
      <div
        className="
          grid
          gap-3 sm:gap-6
          grid-cols-2
          sm:[grid-template-columns:repeat(auto-fit,minmax(220px,280px))]
          sm:justify-center
        "
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Image Wrapper */}
            <div className="relative aspect-square sm:aspect-[4/3]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 50vw,
                       (max-width: 1200px) 40vw,
                       280px"
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

            {/* Alt label on hover — mobile friendly */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent px-3 py-4">
              <p className="text-white text-xs font-medium line-clamp-1">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
