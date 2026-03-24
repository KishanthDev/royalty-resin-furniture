// components/sections/CtaSection.tsx
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  button: { label: string; href: string };
};

export default function CtaSection({ title, description, button }: Props) {
  return (
    <section className="py-24 bg-primary/5 text-center">
      <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>

      <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
        {description}
      </p>

      <div className="mt-10">
        <Link
          href={button.href}
          className="bg-primary text-primary-foreground py-3 px-10 rounded-lg"
        >
          {button.label}
        </Link>
      </div>
    </section>
  );
}