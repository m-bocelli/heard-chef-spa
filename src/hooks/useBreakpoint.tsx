import { useEffect, useState } from "react";

export enum Breakpoint {
  sm = 1,
  md = 2,
  lg = 3,
}

// Inspired by Mike Spadafora
export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(Breakpoint.sm);

  useEffect(() => {
    const handleWindowChange = () => {
      if (window.innerWidth >= 1024) {
        setBreakpoint(Breakpoint.lg);
      } else if (window.innerWidth >= 768) {
        setBreakpoint(Breakpoint.md);
      } else {
        setBreakpoint(Breakpoint.sm);
      }
    };

    window.addEventListener("resize", handleWindowChange);

    return () => {
      window.removeEventListener("resize", handleWindowChange);
    };
  }, []);

  return breakpoint;
}
