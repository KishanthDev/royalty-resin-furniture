"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../../components/theme/ThemeToggle";
import { usePathname } from "next/navigation";

const menuItems = [
    { name: "Side & Coffee Tables", href: "/collections/side-coffee-tables" },
    { name: "Dining Tables", href: "/collections/dining-tables" },
    { name: "Chess Collections", href: "/collections/chess-collections" },
    { name: "Luxuries", href: "/collections/luxuries" },
    { name: "Chairs", href: "/collections/chairs" },
    { name: "Divine Collection", href: "/collections/divine-collection" },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const isActive = (href: string) => pathname === href || pathname.startsWith(href);

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/10">
            <div className="container mx-auto flex items-center justify-between p-4 h-16">
                <Link href="/" className="font-serif text-2xl font-bold text-primary">
                    Royalty Resin
                </Link>

                <nav className="hidden lg:flex items-center space-x-8">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium transition-colors ${isActive(item.href)
                                ? "text-primary border-b-2 border-primary"
                                : "hover:text-primary"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center gap-6">
                        <Link
                            href="/about"
                            className={`text-sm transition-colors ${isActive("/about")
                                ? "text-primary border-b-2 border-primary"
                                : "hover:text-primary"
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={`text-sm transition-colors ${isActive("/contact")
                                ? "text-primary border-b-2 border-primary"
                                : "hover:text-primary"
                                }`}
                        >
                            Contact
                        </Link>
                    </div>
                    <ThemeToggle />
                    <button
                        className="lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`absolute top-full left-0 w-full bg-background shadow-lg lg:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-[150%]'}`}>
                <nav className="flex flex-col p-8 space-y-6">
                    {[...menuItems, { name: "About", href: "/about" }, { name: "Contact", href: "/contact" }].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-lg transition-colors ${isActive(item.href)
                                ? "text-primary font-semibold"
                                : "hover:text-primary"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}