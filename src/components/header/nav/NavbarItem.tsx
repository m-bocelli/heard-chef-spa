import { Button, cn } from "@nextui-org/react";

interface NavbarItemProps {
  name: string;
  active: boolean;
}

export default function NavbarItem({ name, active }: NavbarItemProps) {
  return (
    <Button
      disableRipple
      className={cn(
        "text-purple bg-transparent text-xl font-bold transition-colors duration-400 ease-in-out hover:text-orange",
        {
          "text-orange": active,
        }
      )}
    >
      {name}
    </Button>
  );
}
