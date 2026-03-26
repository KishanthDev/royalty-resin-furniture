import { CategoryScroll } from "./CategoryScroll";

export function Hero() {
  return (
    <section className="bg-secondary text-secondary-foreground py-5 md:py-10 relative overflow-hidden">
      
      {/* ── BACKGROUND VIDEO ── */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Replace this src with your actual video path */}
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability against moving video */}
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      {/* ── DECORATIVE BACKGROUND BLUR ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl" />
      </div>

      {/* ── DECORATIVE LEFT RULE ── */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 z-10">
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
          Discover handcrafted furniture, artistic resin pieces, and luxury creations
          made by blending premium epoxy with the timeless beauty of natural wood.
        </p>

        <div className="mt-12">
          <CategoryScroll />
        </div>
      </div>
    </section>
  );
}