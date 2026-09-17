import Section from "./Section";

export default function Faq({ t }: { t: Record<string, unknown> }) {
  const faq = t.faq as {
    title: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
  };

  const questions = [
    { q: faq.q1, a: faq.a1 },
    { q: faq.q2, a: faq.a2 },
    { q: faq.q3, a: faq.a3 },
    { q: faq.q4, a: faq.a4 },
  ];

  return (
    <Section
      className="relative overflow-clip bg-gradient-to-b from-cream via-white to-cream"
      id="faq"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 h-[26rem] w-[26rem] rounded-full bg-british-racing-green/5 blur-3xl"
      />

      <div data-reveal className="relative">
        <h2 className="text-center text-3xl font-bold tracking-tight text-british-racing-green md:text-4xl">
          {faq.title}
        </h2>
      </div>

      <div className="relative mx-auto mt-12 max-w-3xl space-y-4">
        {questions.map((item, i) => (
          <div key={i} data-reveal>
            <details className="glass-card pressable group rounded-2xl transition-colors open:border-forest-accent/40 open:bg-white/85">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-6 font-semibold text-charcoal transition-colors duration-300 hover:bg-white/60 [&::-webkit-details-marker]:hidden">
                <span className="text-lg">{item.q}</span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-british-racing-green/5 text-british-racing-green transition-[transform,background-color] duration-300 group-hover:bg-british-racing-green/10 group-open:rotate-45"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-muted-text">{item.a}</p>
            </details>
          </div>
        ))}
      </div>
    </Section>
  );
}