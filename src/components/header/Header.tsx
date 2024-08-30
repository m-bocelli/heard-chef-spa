import useBreakpoint from "../../hooks/useBreakpoint";
import HeaderImage from "./HeaderImage";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

export default function Header() {
  const breakpoint = useBreakpoint();

  return (
    <header className="flex flex-row justify-between items-center h-20 md:h-32 debug bg-white">
      <HeaderImage />
      {breakpoint > 2 ? <Navbar /> : <MobileNav />}
    </header>
  );
}
