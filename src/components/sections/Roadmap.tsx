import Section from "./Section";

export default function Roadmap() {
  return (
    <Section id="roadmap" className="h-screen w-full debug">
      <header className="flex flex-col items-center">
        <h1 className="text-purple font-bold text-4xl my-6">Roadmap</h1>
        <p className="w-2/3">
          We are developing a method to make the dreaded “What’s for dinner?”
          question easier (and more fun) to answer. By combining the beloved
          swiping and matching features of popular dating apps with attractive
          recipe profiles, couples and families can instantaneously identify
          recipes everyone will enjoy.{" "}
        </p>
      </header>
    </Section>
  );
}
