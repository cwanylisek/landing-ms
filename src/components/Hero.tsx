import Section from "./Section";
import type { Locale } from "@/lib/i18n";

export default function Hero({
  t,
  locale,
}: {
  t: Record<string, unknown>;
  locale: Locale;
}) {
  const hero = t.hero as {
    subtitle: string;
    title: string;
    description: string;
    cta: string;
    ctaPrice: string;
  };
  const isPl = locale === "pl";

  return (
    <Section
      className="relative min-h-[80vh] flex items-center bg-british-racing-green text-white overflow-hidden"
      id="hero"
      locale={locale}
    >
      <div className="absolute inset-0 bg-british-racing-green/90 z-10" />
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #00331F 0%, #2D6A4F 100%)",
        }}
      />
      <div className="relative z-20 mx-auto max-w-5xl w-full px-6">
        <p className="text-forest-accent font-medium text-lg mb-4 tracking-wide uppercase">
          {hero.subtitle}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {hero.title}
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
          {hero.description}
        </p>
        <a
          href={`mailto:mszymankiewicz1997@gmail.com?subject=${encodeURIComponent(
            isPl ? "Trening wprowadzający" : "Intro Session"
          )}`}
          className="inline-flex items-center gap-2 rounded-full bg-forest-accent px-8 py-4 text-lg font-semibold text-british-racing-green transition-all hover:bg-forest-accent/90 hover:scale-105"
        >
          {hero.cta} — {hero.ctaPrice}
        </a>
      </div>
    </Section>
  );
}
