import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { cn } from "@nextui-org/react";
import { NAV_CONTENT } from "../../../utils/Constants";
import MobileNavItem from "./MobileNavItem";
import { useSection } from "../../../hooks/useSection";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useSection();

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollOnTap = (name: string) => {
    scrollToSection(name);
    openMenu();
  };

  return (
    <div className="mr-4">
      <Button
        size="lg"
        className={cn("bg-transparent text-purple", {
          "text-orange": isMenuOpen,
        })}
        isIconOnly
        startContent={<FontAwesomeIcon icon={faBars} />}
        onClick={openMenu}
      />

      <nav
        hidden
        className={cn(
          "flex flex-col items-end absolute p-6 gap-6 h-[250px] -top-[250px] transition-all opacity-100 right-0 bg-white z-0 shadow-md",
          {
            "top-20": isMenuOpen,
            "md:top-32": isMenuOpen,
            "opacity-100": isMenuOpen,
          }
        )}
      >
        {NAV_CONTENT.map((item, idx) => (
          <MobileNavItem
            key={idx}
            {...item}
            onPress={() => scrollOnTap(item.name)}
          />
        ))}
      </nav>
    </div>
  );
}
