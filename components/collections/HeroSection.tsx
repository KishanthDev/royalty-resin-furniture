// components/sections/HeroSection.tsx
import Link from "next/link";

type Props = {
  subtitle: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function HeroSection({
  subtitle,
  title,
  description,
  primaryCta,
  secondaryCta,
}: Props) {
  return (
    <section className="bg-secondary text-secondary-foreground py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 text-center max-w-3xl">
        <p className="uppercase tracking-[0.35em] text-xs text-secondary-foreground/50">
          {subtitle}
        </p>

        <h1 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl font-bold">
          {title}
        </h1>

        <p className="mt-6 text-base md:text-lg text-secondary-foreground/70">
          {description}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={primaryCta.href}
            className="bg-primary text-primary-foreground py-3 px-8 rounded-lg"
          >
            {primaryCta.label}
          </Link>

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="border border-white/60 py-3 px-8 rounded-lg"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}