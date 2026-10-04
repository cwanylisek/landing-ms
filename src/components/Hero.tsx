import Section from "./Section";
import MovementArt from "./MovementArt";
import type { Locale } from "@/lib/i18n";

export default function Hero({ t, locale }: { t: Record<string, unknown>; locale: Locale }) {
  const hero = t.hero as {
    subtitle: string; title: string; description: string;
    cta: string; ctaPrice: string; pricingCta: string;
  };
  const about = t.about as { location: string };
  const specs = t.specializations as { strength: { title: string }; mobility: { title: string } };
  const contact = t.contact as { email: string };

  return (
    <Section id="hero" className="studio-hero">
      <div className="hero-grid">
        <div className="hero-copy hero-enter">
          <p className="hero-subtitle">{hero.subtitle}</p>
          <h1>{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-actions">
            <a className="studio-button button-mint pressable" href={`mailto:${contact.email}?subject=${encodeURIComponent(locale === "pl" ? "Trening wprowadzający" : "Intro Session")}`}>
              <span>{hero.cta}</span><span className="button-price">{hero.ctaPrice}</span>
            </a>
            <a href="#pricing" className="studio-button button-glass pressable">{hero.pricingCta}</a>
          </div>
        </div>
        <div className="hero-visual hero-enter">
          <MovementArt />
          <div className="movement-caption">
            <span>{specs.strength.title}</span>
            <span>{specs.mobility.title}</span>
          </div>
        </div>
      </div>
      <div className="hero-location">
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" />
        </svg>
        <span>{about.location}</span>
      </div>
    </Section>
  );
}
