import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { cn } from "@nextui-org/react";
import { NAV_CONTENT } from "../../utils/Constants";
import MobileNavItem from "./MobileNavItem";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          "flex flex-col items-end absolute p-6 gap-6 debug -top-28 transition-all -z-10 opacity-0 right-0",
          {
            "top-20": isMenuOpen,
            "md:top-32": isMenuOpen,
            "opacity-100": isMenuOpen,
          }
        )}
      >
        {NAV_CONTENT.map((item, idx) => (
          <MobileNavItem key={idx} {...item} onPress={openMenu} />
        ))}
      </nav>
    </div>
  );
}
