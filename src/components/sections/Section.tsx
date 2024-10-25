import { cn } from "@nextui-org/react";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} data-section-id className={cn(className, "p-4")}>
      {children}
    </section>
  );
}
