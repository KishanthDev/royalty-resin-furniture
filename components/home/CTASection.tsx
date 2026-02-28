import Link from "next/link";
import { SectionTitle } from "../../components/home/SectionTitle";

export function CTASection() {
    return (
        <section className="py-section-py px-section-px bg-secondary text-secondary-foreground">
            <div className="container mx-auto text-center">
                <SectionTitle
                    subtitle="Collaborate With Us"
                    title="Create Your Bespoke Masterpiece"
                />
                <p className="mt-6 max-w-2xl mx-auto text-secondary-foreground/80">
                    Whether you are a designer, architect, or a discerning homeowner, we are here to bring your vision to life. Let's discuss your next project.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link href="/contact" className="border border-primary-foreground/50 text-secondary-foreground py-3 px-8 font-semibold hover:bg-primary-foreground hover:text-secondary transition-colors rounded-sm">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}