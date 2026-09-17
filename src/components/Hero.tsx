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
    pricingCta: string;
  };
  const isPl = locale === "pl";

  return (
    <Section
      className="relative overflow-clip min-h-[92vh] flex items-center bg-british-racing-green text-white"
      id="hero"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(160deg,#00281A_0%,#00331F_45%,#0B4A31_100%)]"
      />
      <div
        aria-hidden="true"
        className="animate-float-a pointer-events-none absolute -left-32 -top-24 h-[34rem] w-[34rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(82,183,136,0.5), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="animate-float-b pointer-events-none absolute -bottom-40 -right-24 h-[38rem] w-[38rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(149,213,178,0.38), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]"
      />

      <div className="relative z-10 w-full">
        <span className="glass-chip animate-fade-up inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm font-medium tracking-wide text-forest-accent-light">
          <span
            aria-hidden="true"
            className="animate-pulse-soft h-1.5 w-1.5 rounded-full bg-forest-accent"
          />
          {hero.subtitle}
        </span>

        <h1
          className="animate-fade-up mt-6 max-w-3xl bg-[linear-gradient(180deg,#ffffff_0%,#d7ece1_100%)] bg-clip-text text-4xl font-extrabold leading-[1.05] tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "90ms" }}
        >
          {hero.title}
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
          style={{ animationDelay: "180ms" }}
        >
          {hero.description}
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "270ms" }}
        >
          <a
            href={`mailto:mszymankiewicz1997@gmail.com?subject=${encodeURIComponent(
              isPl ? "Trening wprowadzający" : "Intro Session"
            )}`}
            className="pressable group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-forest-accent to-forest-accent-light px-8 py-4 text-lg font-bold text-british-racing-green shadow-[0_12px_32px_-12px_rgba(82,183,136,0.85)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            {hero.cta} — {hero.ctaPrice}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>

          <a
            href="#pricing"
            className="glass-dark pressable inline-flex items-center gap-2 rounded-full px-6 py-4 font-semibold text-white/90 transition-[background-color,transform] duration-300 hover:scale-[1.02] hover:bg-white/15 active:scale-[0.97]"
          >
            {hero.pricingCta}
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <span className="animate-scroll-hint block h-10 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent" />
      </div>
    </Section>
  );
}