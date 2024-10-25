import Header from "../header/Header";
import Hero from "../Hero";
import Section from "./Section";

export default function Home() {
  return (
    <Section id="Home" className="flex flex-col h-screen">
      <Header />
      <Hero />
    </Section>
  );
}
