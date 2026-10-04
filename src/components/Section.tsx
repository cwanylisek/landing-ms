interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`studio-section ${className}`}>
      <div className="studio-container">{children}</div>
    </section>
  );
}
