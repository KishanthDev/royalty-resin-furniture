import Link from "next/link";
import { Twitter, Instagram, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground">
            <div className="container mx-auto py-16 px-section-px">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-2">
                        <h3 className="font-serif text-2xl mb-4">Royalty Resin</h3>
                        <p className="text-sm text-secondary-foreground/70 max-w-md">
                            Innovative furniture crafted by merging premium epoxy with natural wood. We create artistic statement pieces that are both functional and beautiful.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 tracking-wider uppercase">Explore</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/collections/all" className="hover:text-accent transition-colors">Collections</Link></li>
                            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 tracking-wider uppercase">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><Twitter className="h-6 w-6" /></a>
                            <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram className="h-6 w-6" /></a>
                            <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook className="h-6 w-6" /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-secondary-foreground/10 text-center text-xs text-secondary-foreground/50">
                    <p>&copy; {new Date().getFullYear()} Royalty Resin Furniture & Interiors. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}