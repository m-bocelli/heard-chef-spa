import { cn } from "@nextui-org/react";
import { useSection } from "../../../hooks/useSection";
import { NAV_CONTENT } from "../../../utils/Constants";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  const { currentSection, scrollToSection } = useSection();

  const scrollOnClick = (name: string) => {
    scrollToSection(name);
  };

  return (
    <nav
      className={cn(
        "flex flex-row gap-12 mr-8 transition-all duration-400 z-20",
        {
          "fixed right-0 top-0 translate-x-6 translate-y-6 bg-purewhite bg-opacity-90 backdrop-blur-sm rounded-lg":
            currentSection !== "Home",
        }
      )}
    >
      {NAV_CONTENT.map((item, idx) => (
        <NavbarItem
          key={idx}
          {...item}
          active={currentSection === item.name}
          onClick={() => scrollOnClick(item.name)}
        />
      ))}
    </nav>
  );
}
