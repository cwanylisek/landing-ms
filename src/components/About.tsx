import Section from "./Section";

export default function About({ t }: { t: Record<string, unknown> }) {
  const about = t.about as { title: string; paragraph1: string; paragraph2: string };
  const hero = t.hero as { subtitle: string };
  const specs = t.specializations as {
    strength: { title: string }; functional: { title: string };
    tabata: { title: string }; mobility: { title: string };
  };

  return (
    <Section id="about" className="about-section">
      <div className="about-grid">
        <div className="trainer-panel">
          <span className="trainer-name">Maria</span>
          <p>{hero.subtitle}</p>
          <svg aria-hidden="true" viewBox="0 0 300 100" fill="none" className="trainer-line">
            <path d="M0 76C60 76 37 20 95 20S127 80 175 80S211 30 255 30S281 54 300 54" stroke="currentColor" strokeWidth="2" />
          </svg>
          <ul className="trainer-disciplines">
            {[specs.strength, specs.functional, specs.tabata, specs.mobility].map((item) => <li key={item.title}>{item.title}</li>)}
          </ul>
        </div>
        <div className="about-copy">
          <h2 className="section-title">{about.title}</h2>
          <p className="about-lead">{about.paragraph1}</p>
          <p className="section-copy">{about.paragraph2}</p>
        </div>
      </div>
    </Section>
  );
}
