// components/sections/TextLeftSection.tsx
type Props = {
  title: string;
  description: string;
};

export default function TextLeftSection({ title, description }: Props) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="max-w-2xl border-l-4 border-primary pl-6">
          <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
          <p className="mt-5 text-foreground/70">{description}</p>
        </div>
      </div>
    </section>
  );
}