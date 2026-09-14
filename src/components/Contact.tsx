import Section from "./Section";
import LanguageSwitch from "./LanguageSwitch";
import type { Locale } from "@/lib/i18n";

export default function Contact({
  t,
  locale,
}: {
  t: Record<string, unknown>;
  locale: Locale;
}) {
  const contact = t.contact as {
    title: string;
    description: string;
    email: string;
    cta: string;
    olx: string;
  };
  const isPl = locale === "pl";

  return (
    <Section id="contact">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-british-racing-green mb-4">
          {contact.title}
        </h2>
        <p className="text-muted-text max-w-xl mx-auto">
          {contact.description}
        </p>
      </div>
      <div className="max-w-lg mx-auto space-y-4">
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-4 rounded-2xl border border-british-racing-green/10 p-6 hover:border-british-racing-green/30 transition-all bg-white"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-british-racing-green/10 text-british-racing-green">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-sm text-muted-text">Email</p>
            <p className="font-medium text-charcoal">{contact.email}</p>
          </div>
        </a>
        <a
          href={`mailto:${contact.email}?subject=${encodeURIComponent(
            isPl ? "Trening wprowadzający" : "Intro Session"
          )}`}
          className="flex items-center justify-center gap-2 rounded-full bg-british-racing-green px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-british-racing-green-light w-full"
        >
          {contact.cta}
        </a>
        <div className="flex items-center justify-center gap-6 pt-4">
          <a
            href="https://www.olx.pl/d/oferta/trener-personalny-poznan-CID4371-ID12fSjF.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-british-racing-green/60 hover:text-british-racing-green transition-colors text-sm font-medium"
          >
            {contact.olx}
          </a>
        </div>
        <div className="pt-6">
          <LanguageSwitch locale={locale} />
        </div>
      </div>
    </Section>
  );
}
