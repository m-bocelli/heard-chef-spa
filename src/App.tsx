import { useEffect } from "react";
import About from "./components/sections/About";
import Beta from "./components/sections/Beta";
import Team from "./components/sections/Team";
import { useSection } from "./hooks/useSection";
import Home from "./components/sections/Home";

function App() {
  const { currentSection } = useSection();

  useEffect(() => {
    console.log(currentSection);
  }, [currentSection]);

  return (
    <main className="flex flex-col w-full px-2">
      <Home />
      <About />
      <Beta />
      <Team />
    </main>
  );
}

export default App;
