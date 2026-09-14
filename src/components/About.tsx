import Section from "./Section";

export default function About({
  t,
}: {
  t: Record<string, unknown>;
}) {
  const about = t.about as {
    title: string;
    paragraph1: string;
    paragraph2: string;
    location: string;
    imageAlt: string;
  };

  return (
    <Section className="bg-cream" id="about">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-british-racing-green mb-6">
            {about.title}
          </h2>
          <p className="text-muted-text leading-relaxed mb-4">
            {about.paragraph1}
          </p>
          <p className="text-muted-text leading-relaxed mb-6">
            {about.paragraph2}
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-british-racing-green/10 px-4 py-2 text-british-racing-green font-medium text-sm">
            📍 {about.location}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="rounded-2xl bg-british-racing-green/5 aspect-square flex items-center justify-center">
            <div className="text-center text-british-racing-green/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-20 w-20 mb-4"
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
    </Section>
  );
}
