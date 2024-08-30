import { Button } from "@nextui-org/button";

interface MobileNavItemProps {
  name: string;
  onPress: () => void;
}

export default function MobileNavItem({ name, onPress }: MobileNavItemProps) {
  return (
    <Button
      className="font-bold bg-transparent text-large text-purple"
      onClick={onPress}
    >
      {name}
    </Button>
  );
}
