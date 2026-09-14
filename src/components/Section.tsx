import type { Locale } from "@/lib/i18n";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  locale?: Locale;
}

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`w-full px-6 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}
