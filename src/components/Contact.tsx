import Section from "./Section";
import type { Locale } from "@/lib/i18n";

export default function Contact({ t, locale }: { t: Record<string, unknown>; locale: Locale }) {
  const contact = t.contact as { title: string; description: string; email: string; cta: string; olx: string };
  const hero = t.hero as { subtitle: string };

  return (
    <Section id="contact" className="contact-section">
      <div className="contact-grid">
        <div><h2>{contact.title}</h2><p>{contact.description}</p></div>
        <div className="contact-actions">
          <a className="studio-button button-mint pressable" href={`mailto:${contact.email}?subject=${encodeURIComponent(locale === "pl" ? "Trening wprowadzający" : "Intro Session")}`}>{contact.cta}</a>
          <a className="contact-email pressable" href={`mailto:${contact.email}`}>{contact.email}</a>
          <a className="contact-olx pressable" href="https://www.olx.pl/d/oferta/trener-personalny-poznan-CID4371-ID12fSjF.html" target="_blank" rel="noopener noreferrer">{contact.olx}</a>
        </div>
      </div>
      <footer className="contact-footer"><span className="footer-name">Maria</span><span>{hero.subtitle}</span><a href="#hero" className="back-to-top pressable" aria-label={locale === "pl" ? "Wróć na górę" : "Back to top"}><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m6 12 6-6 6 6M12 6v14" /></svg></a></footer>
    </Section>
  );
}
