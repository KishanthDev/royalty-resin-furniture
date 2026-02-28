import Image from "next/image";
import { CTASection } from "@/components/home/CTASection";
import { SectionTitle } from "@/components/home/SectionTitle";

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero Section */}
      {/* Note: Add a high-quality image to /public/assets/about/workshop.jpg */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white bg-[url('/assets/about/workshop.jpg')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 container mx-auto">
          <p className="uppercase tracking-[0.25em] text-sm text-white/70">Our Story</p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold">
            The Soul of Wood, The Spirit of Art
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Discover the passion, philosophy, and craftsmanship that define every Royalty Resin creation.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-section-py px-section-px bg-background">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Note: Add image to /public/assets/about/artisan-working.jpg */}
          <div className="relative aspect-square md:aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/assets/about/artisan-working.jpg"
              alt="Artisan carefully working on a resin table"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="text-left">
            <h2 className="font-serif text-3xl md:text-4xl">From Humble Workshop to Artisan Studio</h2>
            <div className="mt-2 h-[2px] w-16 bg-primary" />
            <div className="mt-6 space-y-4 text-foreground/80">
              <p>
                Royalty Resin was born from a simple yet profound love for the untamed beauty of nature. It began in a small workshop, with a vision to not just preserve the soul of ancient wood, but to elevate it into functional art. We saw the potential in every grain, knot, and imperfection.
              </p>
              <p>
                Our journey has been one of relentless experimentation and dedication. We've honed the delicate dance between organic timber and modern epoxy resin, transforming raw materials into heirloom pieces that tell a story. Today, our studio is a sanctuary of creativity where traditional woodworking techniques meet contemporary artistic expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Philosophy Section */}
      <section className="py-section-py px-section-px bg-primary/5">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="Our Core Values"
            title="The Pillars of Our Craft"
          />
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-4">Nature-Inspired</h3>
              <p className="text-foreground/80">
                Every piece is a celebration of natural wood, its unique grains
                and timeless beauty, preserved forever in crystal-clear resin. We source our timber sustainably, ensuring our art honors its origin.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-4">Meticulously Handcrafted</h3>
              <p className="text-foreground/80">
                Meticulously handcrafted by skilled artisans, ensuring that no
                two pieces are exactly alike. This dedication to detail results in a true statement of individuality and quality.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-4">Functional Art</h3>
              <p className="text-foreground/80">
                We create more than furniture; we create functional art that
                becomes the centerpiece of any room, sparking conversation and inspiring awe for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet the Artisan Section */}
      <section className="py-section-py px-section-px bg-secondary text-secondary-foreground">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Note: Add image to /public/assets/about/founder-portrait.jpg */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl flex-shrink-0">
            <Image
              src="/assets/about/founder-portrait.jpg"
              alt="Portrait of the founder of Royalty Resin"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 256px"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl">A Word from Our Founder</h2>
            <blockquote className="mt-4 text-lg md:text-xl italic text-secondary-foreground/80 border-l-4 border-primary pl-6">
              "For me, each piece of wood has a history, a soul. The resin is not just a filler, but a medium to highlight that story, to give it a new voice and a new life. We don't just build tables; we craft legacies."
            </blockquote>
            <p className="mt-4 font-semibold tracking-wider">
              - Kishan, Founder & Lead Artisan
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <CTASection />
    </>
  );
}
