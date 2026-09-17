import Section from "./Section";
import type { Locale } from "@/lib/i18n";

export default function Pricing({ t, locale }: { t: Record<string, unknown>; locale: Locale }) {
  const pricing = t.pricing as {
    title: string;
    popular: string;
    intro: { title: string; price: string; description: string };
    single: { title: string; price: string; description: string };
    package: { title: string; price: string; description: string };
  };
  const isPl = locale === "pl";

  const items: { key: "intro" | "single" | "package"; featured: boolean }[] = [
    { key: "intro", featured: false },
    { key: "single", featured: false },
    { key: "package", featured: true },
  ];

  return (
    <Section
      className="relative overflow-clip bg-gradient-to-b from-white to-cream"
      id="pricing"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-forest-accent/10 blur-3xl"
      />

      <div data-reveal className="relative">
        <h2 className="text-center text-3xl font-bold tracking-tight text-british-racing-green md:text-4xl">
          {pricing.title}
        </h2>
      </div>

      <div className="relative mt-12 grid gap-6 md:grid-cols-3">
        {items.map((item) => {
          const data = pricing[item.key];
          const featured = item.featured;

          return (
            <div key={item.key} data-reveal className={featured ? "md:-translate-y-2" : ""}>
              <div
                className={`group relative h-full rounded-3xl p-8 transition-[transform,box-shadow,border-color] duration-300 ${
                  featured
                    ? "bg-gradient-to-b from-british-racing-green to-[#0B4A31] text-white shadow-[0_32px_64px_-28px_rgba(0,51,31,0.6)] ring-1 ring-forest-accent/40 hover:-translate-y-1.5"
                    : "glass-card hover:-translate-y-1.5 hover:border-forest-accent/40 hover:shadow-[0_24px_48px_-24px_rgba(0,51,31,0.38)]"
                }`}
              >
                {featured && (
                  <>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_top,rgba(82,183,136,0.22),transparent_60%)]"
                    />
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-forest-accent to-forest-accent-light px-4 py-1 text-xs font-bold text-british-racing-green shadow-lg">
                      {pricing.popular}
                    </span>
                  </>
                )}

                <div className="relative">
                  <h3
                    className={`text-xl font-semibold ${
                      featured ? "text-white" : "text-charcoal"
                    }`}
                  >
                    {data.title}
                  </h3>
                  <p
                    className={`mt-3 text-4xl font-bold tracking-tight ${
                      featured
                        ? "bg-gradient-to-r from-forest-accent-light to-forest-accent bg-clip-text text-transparent"
                        : "text-british-racing-green"
                    }`}
                  >
                    {data.price}
                  </p>
                  <p
                    className={`mt-4 leading-relaxed ${
                      featured ? "text-white/75" : "text-muted-text"
                    }`}
                  >
                    {data.description}
                  </p>
                  <a
                    href={`mailto:mszymankiewicz1997@gmail.com?subject=${encodeURIComponent(
                      isPl ? "Zapytanie o trening" : "Training Inquiry"
                    )}`}
                    className={`pressable mt-8 block w-full rounded-full px-6 py-3 text-center font-bold transition-[transform,background-color,color] duration-300 ${
                      featured
                        ? "bg-gradient-to-r from-forest-accent to-forest-accent-light text-british-racing-green hover:scale-[1.02] active:scale-[0.97]"
                        : "bg-british-racing-green/10 text-british-racing-green hover:bg-british-racing-green hover:text-white active:scale-[0.97]"
                    }`}
                  >
                    {isPl ? "Umów się" : "Book Now"}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}