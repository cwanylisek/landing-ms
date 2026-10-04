import Section from "./Section";
import type { Locale } from "@/lib/i18n";

export default function Pricing({ t, locale }: { t: Record<string, unknown>; locale: Locale }) {
  const pricing = t.pricing as {
    title: string; popular: string;
    intro: { title: string; price: string; description: string };
    single: { title: string; price: string; description: string };
    package: { title: string; price: string; description: string };
  };
  const contact = t.contact as { email: string };
  const items = ["intro", "single", "package"] as const;

  return (
    <Section id="pricing" className="pricing-section">
      <h2 className="section-title">{pricing.title}</h2>
      <div className="pricing-grid">
        {items.map((key) => (
          <article key={key} className={`price-option price-${key}`}>
            <div className="price-heading"><h3>{pricing[key].title}</h3>{key === "package" && <span className="price-badge">{pricing.popular}</span>}</div>
            <p className="price-amount">{pricing[key].price}</p>
            <p className="price-description">{pricing[key].description}</p>
            <a className={`studio-button pressable ${key === "package" ? "button-mint" : "button-forest"}`} href={`mailto:${contact.email}?subject=${encodeURIComponent(locale === "pl" ? "Zapytanie o trening" : "Training Inquiry")}`}>
              {locale === "pl" ? "Umów się" : "Book Now"}
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
