// components/CategoryScroll.tsx

import Link from "next/link"
export const categories = [
  {
    name: "Side & Coffee Tables",
    href: "/collections/side-coffee-tables",
    imageSrc: "/assets/side-coffee-table/coffee/image1.png",
  },
  {
    name: "Dining Tables",
    href: "/collections/dining-tables",
    imageSrc: "/assets/dining-tables/sea-shell/image1.png",
  },
  {
    name: "Chess Collections",
    href: "/collections/chess-collections",
    imageSrc: "/assets/chess-collections/black-ice/image1.png",
  },
  {
    name: "Luxuries",
    href: "/collections/luxuries",
    imageSrc: "/assets/luxury/image1.png",
  },
  {
    name: "Chairs",
    href: "/collections/chairs",
    imageSrc: "/assets/chairs/image1.png",
  },
  {
    name: "Divine Collection",
    href: "/collections/divine-collection",
    imageSrc: "/assets/divine/image1.png",
  },
];

export function CategoryScroll() {
  return (
    <div className="w-full">

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-2 justify-start sm:justify-center min-w-max">

          {categories.map((cat, i) => (
            <Link
              key={i}
              href={cat.href}
              className="flex flex-col items-center min-w-[80px] group"
            >
              {/* Image */}
              <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20 group-hover:border-primary transition">
                <img
                  src={cat.imageSrc}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Label */}
              <span className="mt-2 text-[12px] text-center text-white/70 group-hover:text-white">
                {cat.name}
              </span>
            </Link>
          ))}

        </div>
      </div>

    </div>
  )
}