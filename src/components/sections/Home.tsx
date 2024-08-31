import Header from "../header/Header";
import Hero from "./Hero";
import Section from "./Section";

export default function Home() {
  return (
    <Section id="home" className="flex flex-col h-screen debug">
      <Header />
      <Hero />
    </Section>
  );
}
