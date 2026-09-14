import type { Locale } from "@/lib/i18n";

export default function JsonLd({ locale }: { locale: Locale }) {
  const isPl = locale === "pl";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maria",
    jobTitle: isPl ? "Trener Personalny" : "Personal Trainer",
    description: isPl
      ? "Maria — trener personalny w Poznaniu (Wilda). Trening siłowy, funkcjonalny, Tabata, stretching i mobility. Indywidualne plany treningowe. Pierwszy trening 50 PLN."
      : "Maria — personal trainer in Poznań (Wilda). Strength training, functional training, Tabata, stretching and mobility. Individual training plans. Intro session 50 PLN.",
    url: "https://www.trener-personalny.pl",
    sameAs: [
      "https://www.olx.pl/d/oferta/trener-personalny-poznan-CID4371-ID12fSjF.html",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Poznań",
      addressRegion: "Wilda",
      addressCountry: "PL",
    },
    knowsAbout: [
      "Trening siłowy",
      "Trening funkcjonalny",
      "Tabata",
      "Stretching",
      "Mobility",
      "Trener personalny Poznań",
      "Personal Trainer Poznań",
    ],
    email: "mszymankiewicz1997@gmail.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
