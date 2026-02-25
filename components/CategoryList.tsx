import Image from "next/image";
import Link from "next/link";

interface Category {
    name: string;
    href: string;
    imageSrc: string;
    description: string;
}

interface CategoryListProps {
    categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {categories.map((category) => (
                <Link href={category.href} key={category.name} className="group relative block overflow-hidden rounded-xl shadow-2xl">
                    <div className="relative aspect-[4/5] w-full">
                        <Image
                            src={category.imageSrc}
                            alt={`Promotional image for the ${category.name} collection`}
                            fill
                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 p-6 md:p-8 text-white">
                        <h3 className="font-serif text-2xl lg:text-3xl font-bold">{category.name}</h3>
                        <p className="mt-2 text-sm text-white/80">{category.description}</p>
                        <div className="mt-4 h-[2px] w-16 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>
                </Link>
            ))}
        </div>
    );
}