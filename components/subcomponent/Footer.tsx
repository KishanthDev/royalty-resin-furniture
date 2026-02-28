import Link from "next/link";
import { Twitter, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* ── TOP ACCENT BAR ── */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      <div className="container mx-auto px-section-px pt-16 pb-10">

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-12">

          {/* Brand Block — full width on mobile, spans 2 cols */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-5 w-[3px] bg-primary rounded-full" />
              <h3 className="font-serif text-2xl">Royalty Resin</h3>
            </div>
            <p className="text-sm text-secondary-foreground/60 leading-relaxed max-w-xs">
              Innovative furniture crafted by merging premium epoxy with natural
              wood — artistic statement pieces that are both functional and
              beautiful.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {[
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-secondary-foreground/15 flex items-center justify-center text-secondary-foreground/60 hover:border-primary hover:text-primary transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links — col 1 row 2 on mobile */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-secondary-foreground/40 mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "All Collections", href: "/collections/all" },
                { label: "Chess Sets", href: "/collections/chess-collections" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/65 hover:text-primary inline-flex items-center gap-1.5 transition-all duration-200 group"
                  >
                    <span className="h-px w-0 group-hover:w-3 bg-primary transition-all duration-200 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections — col 2 row 2 on mobile */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-secondary-foreground/40 mb-5">
              Collections
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Side & Coffee Tables", href: "/collections/side-coffee-tables" },
                { label: "Dining Tables", href: "/collections/dining-tables" },
                { label: "Luxuries", href: "/collections/luxuries" },
                { label: "Chairs", href: "/collections/chairs" },
                { label: "Divine Collection", href: "/collections/divine-collection" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/65 hover:text-primary inline-flex items-center gap-1.5 transition-all duration-200 group"
                  >
                    <span className="h-px w-0 group-hover:w-3 bg-primary transition-all duration-200 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info — full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-secondary-foreground/40 mb-5">
              Get In Touch
            </h4>

            {/* 2-col contact items on mobile */}
            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-4 text-sm">
              <li>
                <a
                  href="mailto:hello@royaltyresin.com"
                  className="flex items-start gap-3 text-secondary-foreground/65 hover:text-primary transition-colors group"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 group-hover:text-primary" />
                  hello@royaltyresin.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919999999999"
                  className="flex items-start gap-3 text-secondary-foreground/65 hover:text-primary transition-colors group"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 group-hover:text-primary" />
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/65">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>

            <Link
              href="/contact?subject=Custom Order"
              className="mt-6 inline-block text-xs border border-primary/50 text-primary py-2 px-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              Request Custom Piece →
            </Link>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="mt-14 pt-6 border-t border-secondary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary-foreground/40">
          <p>
            © {new Date().getFullYear()} Royalty Resin Furniture & Interiors. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-secondary-foreground/20" />
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
