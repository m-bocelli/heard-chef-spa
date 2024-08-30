import useBreakpoint from "../../hooks/useBreakpoint";
import HeaderImage from "./HeaderImage";
import MobileNav from "./nav/MobileNav";
import Navbar from "./nav/Navbar";

export default function Header() {
  const breakpoint = useBreakpoint();

  return (
    <header className="flex flex-row justify-between items-center min-h-20 md:min-h-32 lg:min-h-40 bg-white lg:mx-20">
      <HeaderImage />
      {breakpoint > 2 ? <Navbar /> : <MobileNav />}
    </header>
  );
}
