import Section from "./Section";

export default function Faq({ t }: { t: Record<string, unknown> }) {
  const faq = t.faq as { title: string; q1: string; a1: string; q2: string; a2: string; q3: string; a3: string; q4: string; a4: string };
  const questions = [{ q: faq.q1, a: faq.a1 }, { q: faq.q2, a: faq.a2 }, { q: faq.q3, a: faq.a3 }, { q: faq.q4, a: faq.a4 }];

  return (
    <Section id="faq" className="faq-section">
      <div className="faq-grid">
        <h2 className="section-title">{faq.title}</h2>
        <div className="faq-list">
          {questions.map((item) => (
            <details key={item.q} className="faq-item">
              <summary className="pressable">
                <span>{item.q}</span>
                <span className="faq-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12h14" /></svg></span>
              </summary>
              <p className="section-copy">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
