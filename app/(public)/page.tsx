import { Hero } from "../../components/home/Hero";
import { ProductCard } from "../../components/home/ProductCard";
import { SectionTitle } from "../../components/home/SectionTitle";
import { CTASection } from "@/components/home/CTASection";
import { getFeaturedProducts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <Hero />

      {/* ── PHILOSOPHY ── */}
      <section className="py-section-py px-section-px">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="Our Philosophy"
            title="Where Nature Meets Artistry"
          />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Nature-Inspired",
                description:
                  "Every piece is a celebration of natural wood, its unique grains and timeless beauty, preserved forever in crystal-clear resin.",
              },
              {
                number: "02",
                title: "Handcrafted",
                description:
                  "Meticulously handcrafted by skilled artisans, ensuring that no two pieces are exactly alike. A true statement of individuality.",
              },
              {
                number: "03",
                title: "Artistic Pieces",
                description:
                  "We create more than furniture; we create functional art that becomes the centerpiece of any room.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group p-8 border border-border/40 rounded-xl hover:border-primary/50 hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                {/* Large faded number */}
                <span className="absolute top-4 right-5 text-7xl font-serif font-bold text-foreground/5 group-hover:text-primary/10 transition-colors select-none">
                  {item.number}
                </span>
                <div className="h-[2px] w-10 bg-primary mb-6 rounded-full" />
                <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COLLECTION ── */}
      <section className="py-section-py px-section-px bg-primary/5">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="Featured Collection"
            title="Discover Our Signature Pieces"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/collections/all"
              className="inline-block border border-primary text-primary py-3 px-10 font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS — NEW SECTION ── */}
      <section className="py-section-py px-section-px bg-background">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="How We Create"
            title="The Art Behind Every Piece"
          />
          <div className="mt-16 grid md:grid-cols-4 gap-0 relative">
            {/* Connecting line — hidden on mobile */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-border/60 z-0" />
            {[
              { step: "01", label: "Source", desc: "Ethically sourced wood slabs, hand-selected for grain and character." },
              { step: "02", label: "Design", desc: "Custom layout and resin colour planning tailored to each vision." },
              { step: "03", label: "Pour & Cure", desc: "Slow resin pours in controlled conditions to eliminate bubbles." },
              { step: "04", label: "Finish", desc: "Hand-sanded and polished to a mirror finish, ready to impress." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center px-4 relative z-10">
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-5 shadow-sm">
                  <span className="font-serif text-lg font-bold text-primary">{item.step}</span>
                </div>
                <h4 className="font-serif text-lg mb-2">{item.label}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHESS / VISION ── */}
      <section className="py-section-py px-section-px bg-primary/5">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/artistic/chess.JPG"
              alt="Artistic vision in chess design"
              fill
              className="object-cover"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-5 left-5 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-3 shadow-md">
              <p className="text-xs uppercase tracking-widest text-foreground/50">Signature Series</p>
              <p className="font-serif text-base mt-0.5">Chess Collection</p>
            </div>
          </div>
          <div className="text-right">
            <p className="uppercase tracking-widest text-xs text-foreground/40 mb-4">
              Artistic Vision
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Strategy Meets
              <br />
              <span className="text-primary">Artistic Excellence.</span>
            </h2>
            <div className="mt-6 flex justify-end gap-2 items-center">
              <div className="h-px w-12 bg-primary/60" />
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
            <p className="mt-6 text-base text-foreground/70 leading-relaxed max-w-md ml-auto">
              Our vision is to create bespoke chess sets where strategic gameplay
              converges with fine art. Each piece is a masterwork of nature's wood
              and human craftsmanship, elevated to timeless elegance.
            </p>
            <div className="mt-8 flex justify-end">
              <Link
                href="/collections/chess-collections"
                className="border border-primary text-primary py-3 px-8 font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition text-sm"
              >
                Explore Chess Sets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND — NEW SECTION ── */}
      <section className="py-14 px-section-px bg-primary text-primary-foreground">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Pieces Crafted" },
            { value: "12+", label: "Wood Varieties" },
            { value: "100%", label: "Handmade" },
            { value: "50+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <span className="font-serif text-4xl md:text-5xl font-bold">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-primary-foreground/70">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS — NEW SECTION ── */}
      <section className="py-section-py px-section-px bg-background">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="Client Stories"
            title="What Our Patrons Say"
          />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The dining table exceeded every expectation. The resin colours perfectly matched our interior — an absolute showstopper.",
                name: "Priya S.",
                location: "Mumbai",
              },
              {
                quote:
                  "Gifted a chess set to my father. He calls it a museum piece. The craftsmanship is truly world-class.",
                name: "Arjun M.",
                location: "Bangalore",
              },
              {
                quote:
                  "Ordered a custom tray set. Communication was excellent and delivery was right on time. Will order again!",
                name: "Sneha R.",
                location: "Pune",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-primary/5 rounded-xl p-8 flex flex-col justify-between gap-6 border border-border/30 hover:border-primary/30 transition"
              >
                <div>
                  {/* Quote mark decoration */}
                  <span className="font-serif text-5xl text-primary/30 leading-none select-none">"</span>
                  <p className="text-foreground/70 text-sm leading-relaxed mt-2">{t.quote}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-serif font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-foreground/50">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
