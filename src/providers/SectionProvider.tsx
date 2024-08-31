import { createContext, useEffect, useState } from "react";

interface SectionContextProps {
  currentSection: string;
  scrollToSection: (id: string) => void;
}

export const SectionContext = createContext<SectionContextProps>({
  currentSection: "",
  scrollToSection: () => {},
});

interface SectionProviderProps {
  children: React.ReactNode;
}

export function SectionProvider({ children }: SectionProviderProps) {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll("[data-section-id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(
        `SECTION NOT FOUND: Please make sure a section with the ID ${id} exists.`
      );
    }
  };

  return (
    <SectionContext.Provider value={{ currentSection, scrollToSection }}>
      {children}
    </SectionContext.Provider>
  );
}
