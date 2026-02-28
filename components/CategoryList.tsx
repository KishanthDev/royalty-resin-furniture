// components/CategoryList.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Category {
  name: string;
  href: string;
  imageSrc: string;
  description: string;
}

export function CategoryList({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {categories.map((category, index) => (
        <Link
          key={category.href}
          href={category.href}
          className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          {/* Image */}
          <div className="relative aspect-[3/4] sm:aspect-[4/5]">
            <Image
              src={category.imageSrc}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              sizes="(max-width: 640px) 50vw,
                     (max-width: 1024px) 50vw,
                     33vw"
            />

            {/* Gradient overlay — always present, deepens on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/0 group-hover:from-black/90 transition-all duration-300" />

            {/* Index number watermark */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white/60 text-[10px] font-serif">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Text content — pinned to bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <h3 className="font-serif text-base sm:text-xl font-semibold text-white leading-tight">
              {category.name}
            </h3>

            {/* Description — hidden on mobile, slides up on hover for desktop */}
            <p className="hidden sm:block text-white/70 text-xs sm:text-sm mt-1.5 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300 ease-out">
              {category.description}
            </p>

            {/* CTA arrow */}
            <div className="mt-3 flex items-center gap-1.5 text-primary text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <span>Explore</span>
              <ArrowRight className="h-3 w-3" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
