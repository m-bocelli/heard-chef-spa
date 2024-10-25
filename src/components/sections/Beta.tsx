import EmailForm from "../EmailForm";
import Section from "./Section";

export default function Beta() {
  return (
    <Section
      id="Beta"
      className="h-screen items-center justify-center flex flex-col"
    >
      <header className="mb-12">
        <h1 className="text-purple font-bold text-4xl mb-6">Beta Testing</h1>
        <h2>
          We intend to start the first iteration of
          <span className="text-orange">
            <em>Heard, Chef!</em>
          </span>{" "}
          beta testing in May, 2025.
        </h2>
        <br />
        <h2>Just drop your email, and we'll send you an access code!</h2>
      </header>
      <div className="min-w-[300px]">
        <EmailForm />
      </div>
    </Section>
  );
}
