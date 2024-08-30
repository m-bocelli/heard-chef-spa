import Header from "./components/header/Header";
import About from "./components/sections/About";
import Beta from "./components/sections/Beta";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Roadmap from "./components/sections/Roadmap";

function App() {
  return (
    <main className="flex flex-col w-full">
      <section className="flex flex-col h-screen debug">
        <Header />
        <Hero />
      </section>
      <About />
      <Roadmap />
      <Beta />
      <Contact />
    </main>
  );
}

export default App;
