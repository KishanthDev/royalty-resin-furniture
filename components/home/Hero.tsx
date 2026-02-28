import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-secondary text-secondary-foreground py-5 md:py-10 relative overflow-hidden">
      {/* ── DECORATIVE BACKGROUND BLUR ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* ── DECORATIVE LEFT RULE ── */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="h-20 w-px bg-secondary-foreground/15" />
        <span className="text-[9px] uppercase tracking-[0.4em] text-secondary-foreground/25 [writing-mode:vertical-rl]">
          Epoxy · Wood · Art
        </span>
        <div className="h-20 w-px bg-secondary-foreground/15" />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 container mx-auto px-section-px text-center max-w-4xl">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-primary" />
          <p className="uppercase tracking-[0.35em] text-xs text-secondary-foreground/50">
            Royalty Resin • Furniture & Interiors
          </p>
          <div className="h-px w-8 bg-primary" />
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
          Premium Epoxy &amp;
          <br />
          <span className="text-primary">Natural Wood</span>
          <br />
          Furniture
        </h1>

        {/* Divider */}
        <div className="mt-8 flex justify-center gap-2 items-center">
          <div className="h-px w-12 bg-secondary-foreground/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          <div className="h-px w-12 bg-secondary-foreground/30" />
        </div>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Innovative furniture crafted by merging premium epoxy resin with the
          raw, timeless beauty of natural wood. Every piece is one of a kind.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/collections/all"
            className="w-full sm:w-auto bg-primary text-primary-foreground py-3.5 px-10 font-semibold rounded-lg hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm"
          >
            Explore Collection
          </Link>
          <Link
            href="/contact?subject=Custom%20Order"
            className="w-full sm:w-auto border border-secondary-foreground/30 text-secondary-foreground py-3.5 px-10 font-semibold rounded-lg hover:bg-secondary-foreground/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm"
          >
            Custom Orders
          </Link>
        </div>
      </div>
    </section>
  );
}
