import headerimg from "../../assets/images/logo.png";

export default function HeaderImage() {
  return (
    <img
      src={headerimg}
      className="w-16 md:w-28 lg:w-36 ml-8"
      draggable="false"
    />
  );
}
