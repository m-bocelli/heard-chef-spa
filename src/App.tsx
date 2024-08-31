import { useEffect } from "react";
import About from "./components/sections/About";
import Beta from "./components/sections/Beta";
import Contact from "./components/sections/Contact";
import Roadmap from "./components/sections/Roadmap";
import { useSection } from "./hooks/useSection";
import Home from "./components/sections/Home";

function App() {
  const { currentSection } = useSection();

  useEffect(() => {
    console.log(currentSection);
  }, [currentSection]);

  return (
    <main className="flex flex-col w-full">
      <Home />
      <About />
      <Roadmap />
      <Beta />
      <Contact />
    </main>
  );
}

export default App;
