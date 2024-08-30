import icon from "../../assets/images/icon-borderless.png";
import login from "../../assets/images/login.png";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 h-full">
      <div className="flex flex-col justify-center items-center gap-3 flex-1">
        <img src={icon} className="w-1/3" />
        <h1 className="text-4xl font-bold">Heard, Chef!</h1>
        <h2>(Coming soon)</h2>
      </div>
      <div className="flex flex-col justify-center items-center flex-1 gap-6">
        <h2 className="text-orange text-2xl font-bold">"What's for dinner?"</h2>
        <img src={login} className="w-1/3 rounded-xl" />
      </div>
    </div>
  );
}
