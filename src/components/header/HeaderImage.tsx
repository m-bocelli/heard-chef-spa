import headerimg from "../../assets/images/logo.png";

export default function HeaderImage() {
  return (
    <img
      src={headerimg}
      className="w-1/4 max-w-[128px] p-4"
      draggable="false"
    />
  );
}
