import Section from "./Section";

const paths = {
  strength: "M6 7v10M3 9v6m15-8v10m3-8v6M6 12h12",
  functional: "M4 16c3-8 6-8 8-4s5 4 8-4M4 8h3m10 8h3",
  tabata: "M13 3 5 13h6l-1 8 9-11h-6l1-7Z",
  mobility: "M5 16a7 7 0 0 1 14-8M19 8V4m0 4h-4M19 16a7 7 0 0 1-14-8M5 16v4m0-4h4",
};

export default function Specializations({ t }: { t: Record<string, unknown> }) {
  const specs = t.specializations as { title: string } & Record<keyof typeof paths, { title: string; description: string }>;

  return (
    <Section id="specializations" className="training-section">
      <div className="training-grid">
        <h2 className="section-title">{specs.title}</h2>
        <div className="training-list">
          {(Object.keys(paths) as (keyof typeof paths)[]).map((key) => (
            <article key={key} className="training-row">
              <div className="training-icon">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={paths[key]} /></svg>
              </div>
              <div><h3>{specs[key].title}</h3><p className="section-copy">{specs[key].description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
