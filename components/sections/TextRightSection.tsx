// components/sections/TextRightSection.tsx
type Props = {
  title: string;
  description: string;
};

export default function TextRightSection({ title, description }: Props) {
  return (
    <section className="py-20 bg-background border-t border-border/40">
      <div className="container mx-auto max-w-5xl px-6 flex justify-end">
        <div className="max-w-2xl border-r-4 border-primary pr-6 text-right">
          <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
          <p className="mt-5 text-foreground/70">{description}</p>
        </div>
      </div>
    </section>
  );
}