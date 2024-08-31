import icon from "../../assets/images/icon-borderless.png";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row gap-12 h-full">
      <div className="flex flex-col justify-center items-center gap-3 flex-1">
        <img src={icon} className="w-1/3 max-w-[256px]" />
        <h1 className="text-4xl font-bold">Heard, Chef!</h1>
      </div>
    </section>
  );
}
