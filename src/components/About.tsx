import Section from "./Section";

export default function About({ t }: { t: Record<string, unknown> }) {
  const about = t.about as {
    title: string;
    paragraph1: string;
    paragraph2: string;
    location: string;
    imageAlt: string;
  };

  return (
    <Section
      className="relative overflow-clip bg-gradient-to-b from-white to-cream"
      id="about"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-forest-accent/10 blur-3xl"
      />

      <div data-reveal className="relative grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold tracking-tight text-british-racing-green md:text-4xl">
            {about.title}
          </h2>
          <p className="mt-6 leading-relaxed text-muted-text">{about.paragraph1}</p>
          <p className="mt-4 leading-relaxed text-muted-text">{about.paragraph2}</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-british-racing-green/10 bg-white/70 px-4 py-2 text-sm font-medium text-british-racing-green shadow-sm backdrop-blur-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-forest-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            {about.location}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-british-racing-green/15 via-forest-accent/15 to-transparent p-1.5">
            <div className="glass-card flex aspect-square items-center justify-center rounded-3xl">
              <div className="text-center text-british-racing-green/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto mb-4 h-20 w-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <p className="text-sm">{about.imageAlt}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}