import Section from "./Section";

const icons: Record<string, React.ReactNode> = {
  strength: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 5.25a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zm0 0v1.5m0-1.5h-1.5M19.5 5.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zm0 0v1.5m0-1.5h-1.5M8.25 12.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zm0 0v1.5m0-1.5h-1.5M19.5 12.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zm0 0v1.5m0-1.5h-1.5M8.25 20.25a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zm0 0v1.5m0-1.5h-1.5M19.5 20.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zm0 0v1.5m0-1.5h-1.5" />
    </svg>
  ),
  functional: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  tabata: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-1.113-1.116 3.75 3.75 0 002.483 5.076z" />
    </svg>
  ),
  mobility: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function Specializations({ t }: { t: Record<string, unknown> }) {
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
    <Section
      className="relative overflow-clip bg-gradient-to-b from-cream via-white to-cream"
      id="specializations"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 h-[30rem] w-[30rem] rounded-full bg-forest-accent/10 blur-3xl"
      />

      <div data-reveal className="relative">
        <h2 className="text-center text-3xl font-bold tracking-tight text-british-racing-green md:text-4xl">
          {specs.title}
        </h2>
      </div>

      <div className="relative mt-12 grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.key} data-reveal>
            <div className="glass-card group h-full rounded-3xl p-8 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-forest-accent/40 hover:shadow-[0_24px_48px_-24px_rgba(0,51,31,0.38)]">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-british-racing-green to-british-racing-green-lighter text-forest-accent-light shadow-lg shadow-british-racing-green/20 transition-transform duration-300 group-hover:scale-105">
                {item.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-charcoal">
                {specs[item.key].title}
              </h3>
              <p className="leading-relaxed text-muted-text">
                {specs[item.key].description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}