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
          gap-6
          justify-center
          [grid-template-columns:repeat(auto-fit,minmax(220px,280px))]
        "
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Image Wrapper */}
            <div className="relative aspect-[4/3]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 90vw,
                       (max-width: 1200px) 40vw,
                       280px"
              />
            </div>

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-400" />
          </div>
        ))}
      </div>
    </div>
  );
}