import { NextUIProvider } from "@nextui-org/react";
import { SectionProvider } from "./SectionProvider";

interface ProvierProps {
  children: React.ReactElement;
}

function Provider({ children }: ProvierProps) {
  return (
    <NextUIProvider>
      <SectionProvider>{children}</SectionProvider>
    </NextUIProvider>
  );
}

export default Provider;
