import Image from "next/image";
import { CTASection } from "@/components/home/CTASection";
import { SectionTitle } from "@/components/home/SectionTitle";

export default function AboutPage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="bg-secondary text-secondary-foreground py-20 md:py-28 relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-6 container mx-auto max-w-4xl">
          <p className="uppercase tracking-[0.35em] text-xs text-secondary-foreground/50">
            Our Story
          </p>

          <h1 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            The Soul of Wood,
            <br />
            <span className="text-primary">The Spirit of Art</span>
          </h1>

          <div className="mt-6 flex justify-center gap-2 items-center">
            <div className="h-px w-12 bg-secondary-foreground/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <div className="h-px w-12 bg-secondary-foreground/30" />
          </div>

          <p className="mt-6 text-base md:text-lg max-w-2xl mx-auto text-secondary-foreground/70 leading-relaxed">
            Discover the passion, philosophy, and craftsmanship that define
            every Royalty Resin creation.
          </p>

          {/* Scroll hint */}
          <div className="mt-12 flex flex-col items-center gap-2 animate-bounce">
            <div className="w-px h-8 bg-secondary-foreground/30" />
            <span className="text-[10px] uppercase tracking-widest text-secondary-foreground/50">
              Scroll
            </span>
          </div>
        </div>
      </section>

      {/* ── 2. OUR STORY ── */}
      <section className="py-section-py px-section-px bg-background">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image with decorative frame offset */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary rounded-tl-lg z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary rounded-br-lg z-10" />
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/artistic/chess2.jpg"
                alt="Artisan carefully working on a resin table"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
                <p className="text-xs uppercase tracking-widest text-foreground/50">
                  Since
                </p>
                <p className="font-serif text-xl font-bold mt-0.5">2020</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="uppercase tracking-widest text-xs text-foreground/40 mb-3">
              How It Began
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-snug">
              From Humble Workshop
              <br />
              to Artisan Studio
            </h2>
            <div className="mt-4 h-[2px] w-14 bg-primary rounded-full" />
            <div className="mt-7 space-y-5 text-foreground/70 leading-relaxed text-base">
              <p>
                Royalty Resin was born from a simple yet profound love for the
                untamed beauty of nature. It began in a small workshop, with a
                vision to not just preserve the soul of ancient wood, but to
                elevate it into functional art. We saw the potential in every
                grain, knot, and imperfection.
              </p>
              <p>
                Our journey has been one of relentless experimentation and
                dedication. We've honed the delicate dance between organic timber
                and modern epoxy resin, transforming raw materials into heirloom
                pieces that tell a story. Today, our studio is a sanctuary of
                creativity where traditional woodworking meets contemporary
                expression.
              </p>
            </div>

            {/* Mini stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-border/40">
              {[
                { value: "500+", label: "Pieces Made" },
                { value: "5+", label: "Years Crafting" },
                { value: "100%", label: "Handmade" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-2xl font-bold text-primary">
                    {s.value}
                  </p>
                  <p className="text-xs text-foreground/50 mt-1 uppercase tracking-wide">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PHILOSOPHY / PILLARS ── */}
      <section className="py-section-py px-section-px bg-primary/5">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="Our Core Values"
            title="The Pillars of Our Craft"
          />
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                icon: "🌿",
                title: "Nature-Inspired",
                description:
                  "Every piece is a celebration of natural wood, its unique grains and timeless beauty, preserved forever in crystal-clear resin. We source our timber sustainably, ensuring our art honors its origin.",
              },
              {
                number: "02",
                icon: "🤲",
                title: "Meticulously Handcrafted",
                description:
                  "Meticulously handcrafted by skilled artisans, ensuring that no two pieces are exactly alike. This dedication to detail results in a true statement of individuality and quality.",
              },
              {
                number: "03",
                icon: "✦",
                title: "Functional Art",
                description:
                  "We create more than furniture; we create functional art that becomes the centerpiece of any room, sparking conversation and inspiring awe for generations to come.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group bg-background rounded-xl p-8 border border-border/40 hover:border-primary/40 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                {/* Faded bg number */}
                <span className="absolute top-4 right-5 text-7xl font-serif font-bold text-foreground/[0.04] group-hover:text-primary/[0.06] transition-colors select-none">
                  {item.number}
                </span>
                <div className="text-3xl mb-5">{item.icon}</div>
                <div className="h-[2px] w-10 bg-primary mb-5 rounded-full" />
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PROCESS TIMELINE — NEW ── */}
      <section className="py-section-py px-section-px bg-background">
        <div className="container mx-auto">
          <SectionTitle
            subtitle="Our Process"
            title="Crafted Step by Step"
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line desktop */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-border z-0" />
            {[
              { step: "01", title: "Source", desc: "Hand-selecting ethically sourced wood slabs for unique grain and character." },
              { step: "02", title: "Design", desc: "Planning resin colours, wood orientation, and custom dimensions." },
              { step: "03", title: "Pour & Cure", desc: "Slow, controlled resin pours to achieve a flawless, bubble-free result." },
              { step: "04", title: "Finish", desc: "Hand-sanded through progressive grits to a mirror-like polish." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-md mb-5">
                  <span className="font-serif text-base font-bold text-primary">{item.step}</span>
                </div>
                <h4 className="font-serif text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed max-w-[180px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FOUNDER ── */}
      <section className="py-section-py px-section-px bg-secondary text-secondary-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Portrait */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl shrink-0">
                <Image
                  src="/assets/about/founder-portrait.jpg"
                  alt="Portrait of the founder of Royalty Resin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 208px, 288px"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="font-semibold text-lg">Kishan</p>
                <p className="text-sm text-secondary-foreground/60 uppercase tracking-widest mt-1">
                  Founder & Lead Artisan
                </p>
                {/* Divider */}
                <div className="mt-3 flex gap-2 items-center md:justify-start justify-center">
                  <div className="h-[2px] w-8 bg-primary rounded-full" />
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>
              </div>
            </div>

            {/* Quote block */}
            <div>
              <p className="uppercase tracking-widest text-xs text-secondary-foreground/40 mb-5">
                A Word From The Founder
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-snug">
                Every Piece Has
                <br />a Story to Tell
              </h2>

              {/* Styled blockquote */}
              <div className="relative pl-6 border-l-4 border-primary">
                <span className="absolute -top-4 -left-1 font-serif text-6xl text-primary/20 select-none leading-none">
                  "
                </span>
                <blockquote className="text-base md:text-lg italic text-secondary-foreground/75 leading-relaxed">
                  For me, each piece of wood has a history, a soul. The resin is
                  not just a filler, but a medium to highlight that story — to
                  give it a new voice and a new life. We don't just build tables;
                  we craft legacies.
                </blockquote>
              </div>

              {/* Values pills */}
              <div className="mt-8 flex flex-wrap gap-2">
                {["Sustainability", "Precision", "Originality", "Legacy"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full border border-secondary-foreground/20 text-secondary-foreground/60"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
