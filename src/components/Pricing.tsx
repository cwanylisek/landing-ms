import Section from "./Section";
import type { Locale } from "@/lib/i18n";

export default function Pricing({
  t,
  locale,
}: {
  t: Record<string, unknown>;
  locale: Locale;
}) {
  const pricing = t.pricing as {
    title: string;
    intro: { title: string; price: string; description: string };
    single: { title: string; price: string; description: string };
    package: { title: string; price: string; description: string };
  };
  const isPl = locale === "pl";

  const items: { key: "intro" | "single" | "package"; featured: boolean; icon: string | null }[] = [
    { key: "intro", featured: false, icon: "⭐" },
    { key: "single", featured: false, icon: null },
    { key: "package", featured: true, icon: "🏆" },
  ];

  return (
    <Section className="bg-cream" id="pricing">
      <h2 className="text-3xl md:text-4xl font-bold text-british-racing-green text-center mb-12">
        {pricing.title}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => {
          const data = pricing[item.key];
          return (
            <div
              key={item.key}
              className={`rounded-2xl p-8 transition-all ${
                item.featured
                  ? "bg-british-racing-green text-white shadow-xl scale-105"
                  : "bg-white border border-british-racing-green/10 hover:border-british-racing-green/30"
              }`}
            >
              {item.icon && (
                <div
                  className={`text-2xl mb-2 ${
                    item.featured ? "text-forest-accent" : ""
                  }`}
                >
                  {item.icon}
                </div>
              )}
              <h3
                className={`text-xl font-semibold mb-2 ${
                  item.featured ? "text-white" : "text-charcoal"
                }`}
              >
                {data.title}
              </h3>
              <p
                className={`text-4xl font-bold mb-4 ${
                  item.featured ? "text-forest-accent" : "text-british-racing-green"
                }`}
              >
                {data.price}
              </p>
              <p
                className={`mb-6 leading-relaxed ${
                  item.featured ? "text-white/80" : "text-muted-text"
                }`}
              >
                {data.description}
              </p>
              <a
                href={`mailto:mszymankiewicz1997@gmail.com?subject=${encodeURIComponent(
                  isPl ? "Zapytanie o trening" : "Training Inquiry"
                )}`}
                className={`block w-full text-center rounded-full px-6 py-3 font-semibold transition-all ${
                  item.featured
                    ? "bg-forest-accent text-british-racing-green hover:bg-forest-accent/90"
                    : "border-2 border-british-racing-green text-british-racing-green hover:bg-british-racing-green hover:text-white"
                }`}
              >
                {isPl ? "Umów się" : "Book Now"}
              </a>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
