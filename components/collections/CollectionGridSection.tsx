import React from "react";
import { Eye, Heart } from "lucide-react";
import type { Props } from "@/lib/types";
import { getDiscountText } from "@/app/utils/discount";

export const ProductGridSection: React.FC<Props> = ({
    title,
    viewMoreLink,
    items,
}) => {
    return (
        <section className="w-full">
            <div className="mx-auto max-w-6xl px-4">
                {/* Heading */}
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <h2 className="relative mb-4 inline-block border-b-4 border-yellow-600 pb-2 text-2xl font-bold tracking-wide">
                        {title}
                    </h2>

                    {viewMoreLink && (
                        <a
                            href={viewMoreLink}
                            className="text-sm font-medium text-emerald-700 hover:underline"
                        >
                            View More
                        </a>
                    )}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {/* Map through the items inside the grid container */}
                    {items.map((item) => {
                        const discountText = getDiscountText(
                            item.price,
                            item.priceOriginal
                        );

                        return (
                            <div key={item.id} className="w-full">
                                <a
                                    href={item.href}
                                    className="group block overflow-hidden rounded-md border border-gray-200 bg-white"
                                >
                                    <div className="relative aspect-square w-full overflow-hidden">
                                        <picture>
                                            <source media="(min-width: 768px)" srcSet={item.imgDesktop} />
                                            <img
                                                loading="lazy"
                                                src={item.img}
                                                alt={item.title}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                            />
                                        </picture>

                                        <div className="pointer-events-none absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                        {discountText && (
                                            <span className="absolute left-0 top-2 rounded-sm bg-green-700 px-2 py-1 text-[13px] font-semibold text-white shadow-sm">
                                                {discountText}
                                            </span>
                                        )}

                                        {/* Icons */}
                                        <ul className="pointer-events-none absolute right-2 top-2 flex flex-col gap-2">
                                            {/* Eye Icon Button */}
                                            <li className="-translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                                <button className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow hover:bg-gray-100 hover:text-emerald-600 transition-colors">
                                                    <Eye size={20} />
                                                </button>
                                            </li>

                                            {/* Heart Icon Button */}
                                            <li className="translate-x-8 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                                                <button className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow hover:bg-gray-100 hover:text-red-500 transition-colors">
                                                    <Heart size={20} />
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="px-2 pb-2 pt-1">
                                        <h3 className="line-clamp-2 font-semibold text-gray-900">
                                            {item.title}
                                        </h3>
                                        <p className="font-semibold text-gray-900">
                                            {item.price}{" "}
                                            {item.priceOriginal && (
                                                <del className="text-[11px] font-normal text-red-500">
                                                    {item.priceOriginal}
                                                </del>
                                            )}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};