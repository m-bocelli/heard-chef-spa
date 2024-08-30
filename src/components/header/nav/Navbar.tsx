import { NAV_CONTENT } from "../../../utils/Constants";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex flex-row gap-12 mr-8">
      {NAV_CONTENT.map((item, idx) => (
        <NavbarItem key={idx} {...item} active={false} />
      ))}
    </div>
  );
}