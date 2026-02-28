import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-secondary text-secondary-foreground py-section-py px-section-px relative overflow-hidden">
      {/* ── DECORATIVE BACKGROUND BLUR ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* ── DECORATIVE CORNER ACCENTS ── */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-lg hidden md:block" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-primary/30 rounded-br-lg hidden md:block" />

      <div className="relative z-10 container mx-auto text-center max-w-3xl">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-primary" />
          <p className="uppercase tracking-[0.35em] text-xs text-secondary-foreground/50">
            Collaborate With Us
          </p>
          <div className="h-px w-8 bg-primary" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Create Your
          <br />
          <span className="text-primary">Bespoke Masterpiece</span>
        </h2>

        {/* Divider */}
        <div className="mt-6 flex justify-center gap-2 items-center">
          <div className="h-px w-12 bg-secondary-foreground/20" />
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          <div className="h-px w-12 bg-secondary-foreground/20" />
        </div>

        {/* Description */}
        <p className="mt-6 text-base md:text-lg text-secondary-foreground/65 leading-relaxed max-w-xl mx-auto">
          Whether you're a designer, architect, or a discerning homeowner — we're
          here to bring your vision to life. Let's discuss your next project.
        </p>

        {/* Audience pills */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["Homeowners", "Interior Designers", "Architects", "Gift Givers"].map(
            (tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full border border-secondary-foreground/15 text-secondary-foreground/50"
              >
                {tag}
              </span>
            )
          )}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact?subject=Custom Order"
            className="w-full sm:w-auto bg-primary text-primary-foreground py-3.5 px-10 font-semibold rounded-lg hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm"
          >
            Start Your Project
          </Link>
          <Link
            href="/collections/all"
            className="w-full sm:w-auto border border-secondary-foreground/25 text-secondary-foreground py-3.5 px-10 font-semibold rounded-lg hover:bg-secondary-foreground/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm"
          >
            Browse Collections
          </Link>
        </div>

        {/* Reassurance note */}
        <p className="mt-6 text-xs text-secondary-foreground/35 tracking-wide">
          Free consultation • No commitment required • Ships across India
        </p>
      </div>
    </section>
  );
}
