import { Button, cn } from "@nextui-org/react";

interface NavbarItemProps {
  name: string;
  active: boolean;
  onClick: () => void;
}

export default function NavbarItem({ name, active, onClick }: NavbarItemProps) {
  return (
    <Button
      disableRipple
      className={cn(
        "text-purple bg-transparent text-xl font-bold transition-colors duration-400 ease-in-out hover:text-orange",
        {
          "text-orange": active,
        }
      )}
      onClick={onClick}
    >
      {name}
    </Button>
  );
}
