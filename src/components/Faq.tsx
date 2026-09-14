import Section from "./Section";

export default function Faq({
  t,
}: {
  t: Record<string, unknown>;
}) {
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
    <Section className="bg-cream" id="faq">
      <h2 className="text-3xl md:text-4xl font-bold text-british-racing-green text-center mb-12">
        {faq.title}
      </h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {questions.map((item, i) => (
          <details
            key={i}
            className="rounded-xl bg-white border border-british-racing-green/10 p-6 open:border-british-racing-green/30 transition-all"
          >
            <summary className="cursor-pointer font-semibold text-charcoal text-lg">
              {item.q}
            </summary>
            <p className="text-muted-text mt-4 leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
