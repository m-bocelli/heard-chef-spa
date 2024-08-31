interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} data-section-id className={className}>
      {children}
    </section>
  );
}
