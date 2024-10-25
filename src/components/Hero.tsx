import icon from "../assets/images/icon-borderless.png";
import demo from "../assets/images/right-swipe.png";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 h-full">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 flex-grow">
        <img src={icon} className="w-1/3 max-w-[256px]" />
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-black lg:text-left">
            What's for dinner?
          </h1>
          <h2 className="text-xl font-semibold text-black lg:text-left max-w-[500px]">
            The question has been asnwered, and marriages will be saved; try the
            <span className="text-orange"> Tinder</span> for recipes!
          </h2>
        </div>
      </div>
      <div className="flex-grow">
        <img
          className="max-h-[600px] rounded-xl hidden lg:block shadow-purple shadow-lg"
          draggable={false}
          src={demo}
        />
      </div>
    </div>
  );
}
