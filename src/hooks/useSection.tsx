import { useContext } from "react";
import { SectionContext } from "../providers/SectionProvider";

export function useSection() {
  return useContext(SectionContext);
}
