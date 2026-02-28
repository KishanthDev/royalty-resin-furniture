interface SectionTitleProps {
    subtitle: string;
    title: string;
    className?: string;
}

export function SectionTitle({ subtitle, title, className }: SectionTitleProps) {
    return (
        <div className={`text-center ${className}`}>
            <p className="text-primary font-semibold uppercase tracking-wider">{subtitle}</p>
            <h2 className="font-serif text-3xl md:text-5xl mt-2">{title}</h2>
        </div>
    );
}