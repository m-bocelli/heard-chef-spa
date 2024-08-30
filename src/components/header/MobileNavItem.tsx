import { Button } from "@nextui-org/button";

interface MobileNavItemProps {
  name: string;
  onPress: () => void;
}

export default function MobileNavItem({ name, onPress }: MobileNavItemProps) {
  return (
    <Button
      disableRipple
      className="font-bold bg-transparent text-large text-purple transition-colors duration-400 ease-in-out hover:text-orange"
      onClick={onPress}
    >
      {name}
    </Button>
  );
}
