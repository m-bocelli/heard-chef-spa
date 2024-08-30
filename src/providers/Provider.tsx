import { NextUIProvider } from "@nextui-org/react";

interface ProvierProps {
  children: React.ReactElement;
}

function Provider({ children }: ProvierProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export default Provider;
