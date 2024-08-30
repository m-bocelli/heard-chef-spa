import Header from "./components/header/Header";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <main className="flex flex-col w-full">
      <section className="flex flex-col h-screen">
        <Header />
        <Hero />
      </section>
    </main>
  );
}

export default App;
