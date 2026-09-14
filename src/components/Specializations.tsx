import Section from "./Section";
import type { Locale } from "@/lib/i18n";

const icons: Record<string, React.ReactNode> = {
  strength: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 5.25a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zm0 0v1.5m0-1.5h-1.5M19.5 5.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zm0 0v1.5m0-1.5h-1.5M8.25 12.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zm0 0v1.5m0-1.5h-1.5M19.5 12.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zm0 0v1.5m0-1.5h-1.5M8.25 20.25a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zm0 0v1.5m0-1.5h-1.5M19.5 20.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zm0 0v1.5m0-1.5h-1.5" />
    </svg>
  ),
  functional: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  tabata: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-1.113-1.116 3.75 3.75 0 002.483 5.076z" />
    </svg>
  ),
  mobility: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function Specializations({
  t,
  locale,
}: {
  t: Record<string, unknown>;
  locale: Locale;
}) {
  const specs = t.specializations as {
    title: string;
    strength: { title: string; description: string };
    functional: { title: string; description: string };
    tabata: { title: string; description: string };
    mobility: { title: string; description: string };
  };

  const items = [
    { key: "strength" as const, icon: icons.strength },
    { key: "functional" as const, icon: icons.functional },
    { key: "tabata" as const, icon: icons.tabata },
    { key: "mobility" as const, icon: icons.mobility },
  ];

  return (
    <Section id="specializations" locale={locale}>
      <h2 className="text-3xl md:text-4xl font-bold text-british-racing-green text-center mb-12">
        {specs.title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.key}
            className="rounded-2xl border border-british-racing-green/10 p-8 hover:border-british-racing-green/30 transition-all bg-white"
          >
            <div className="text-british-racing-green mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-charcoal mb-2">
              {specs[item.key].title}
            </h3>
            <p className="text-muted-text leading-relaxed">
              {specs[item.key].description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
