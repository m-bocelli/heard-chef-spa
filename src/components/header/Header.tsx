import HeaderImage from "./HeaderImage";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center h-20 md:h-32 debug bg-white">
      <HeaderImage />
      <MobileNav />
    </header>
  );
}
