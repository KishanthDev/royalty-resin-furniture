"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
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

const utilityLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Elevate navbar shadow on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b transition-all duration-300 ${
          isScrolled
            ? "border-border shadow-sm"
            : "border-foreground/10 shadow-none"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16">

          {/* ── BRAND ── */}
          <Link
            href="/"
            className="flex items-center gap-2 group shrink-0"
          >
            <div className="h-6 w-[3px] bg-primary rounded-full transition-transform duration-300 group-hover:scale-y-110" />
            <span className="font-serif text-xl font-bold tracking-wide">
              Royalty Resin
            </span>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm px-3 py-2 rounded-md transition-colors duration-200 group ${
                  isActive(item.href)
                    ? "text-primary font-medium"
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {item.name}
                {/* Animated underline */}
                <span
                  className={`absolute bottom-1 left-3 right-3 h-px bg-primary rounded-full transition-all duration-300 ${
                    isActive(item.href)
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* ── RIGHT SIDE ── */}
          <div className="flex items-center gap-2">
            {/* Utility links — desktop only */}
            <div className="hidden lg:flex items-center gap-1 mr-2">
              {utilityLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm px-3 py-2 rounded-md transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-primary font-medium"
                      : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <ThemeToggle />

            {/* Hamburger — mobile only */}
            <button
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-border hover:bg-foreground/5 transition"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[85vw] bg-background shadow-2xl lg:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-border shrink-0">
          <div className="flex items-center gap-2">
            <div className="h-5 w-[3px] bg-primary rounded-full" />
            <span className="font-serif text-lg font-bold">Royalty Resin</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-foreground/5 transition"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          <p className="px-3 mb-3 text-[10px] uppercase tracking-widest text-foreground/40 font-semibold">
            Collections
          </p>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center justify-between px-3 py-3 rounded-lg text-sm transition-colors group ${
                isActive(item.href)
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground/75 hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              {item.name}
              <ChevronRight
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground/30 group-hover:translate-x-0.5"
                }`}
              />
            </Link>
          ))}

          <div className="pt-4 mt-4 border-t border-border">
            <p className="px-3 mb-3 text-[10px] uppercase tracking-widest text-foreground/40 font-semibold">
              Company
            </p>
            {utilityLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center justify-between px-3 py-3 rounded-lg text-sm transition-colors group ${
                  isActive(link.href)
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground/75 hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                {link.name}
                <ChevronRight className="h-3.5 w-3.5 text-foreground/30 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </nav>

        {/* Drawer footer CTA */}
        <div className="px-4 py-5 border-t border-border shrink-0">
          <Link
            href="/contact?subject=Custom Order"
            className="block text-center bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold text-sm hover:bg-primary/90 transition"
          >
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </>
  );
}
