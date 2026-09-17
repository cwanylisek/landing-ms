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
    <Section
      className="relative overflow-clip bg-gradient-to-b from-white to-cream"
      id="contact"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-1/4 h-[28rem] w-[28rem] rounded-full bg-forest-accent/10 blur-3xl"
      />

      <div data-reveal className="relative mb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-british-racing-green md:text-4xl">
          {contact.title}
        </h2>
        <p className="mx-auto max-w-xl text-muted-text">{contact.description}</p>
      </div>

      <div data-reveal className="relative mx-auto max-w-lg space-y-4">
        <a
          href={`mailto:${contact.email}`}
          className="glass-card pressable group flex items-center gap-4 rounded-2xl p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-forest-accent/40 hover:shadow-[0_24px_48px_-24px_rgba(0,51,31,0.38)]"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-british-racing-green to-british-racing-green-lighter text-forest-accent-light shadow-lg shadow-british-racing-green/20 transition-transform duration-300 group-hover:scale-105">
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
          className="pressable group flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-forest-accent to-forest-accent-light px-8 py-4 text-lg font-bold text-british-racing-green shadow-[0_12px_32px_-12px_rgba(82,183,136,0.85)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.97]"
        >
          {contact.cta}
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

        <div className="flex items-center justify-center gap-6 pt-4">
          <a
            href="https://www.olx.pl/d/oferta/trener-personalny-poznan-CID4371-ID12fSjF.html"
            target="_blank"
            rel="noopener noreferrer"
            className="pressable rounded-full px-3 py-1 text-sm font-bold text-british-racing-green/60 transition-colors duration-300 hover:text-british-racing-green"
          >
            {contact.olx}
          </a>
        </div>

        <div className="flex justify-center pt-6">
          <LanguageSwitch locale={locale} />
        </div>
      </div>
    </Section>
  );
}