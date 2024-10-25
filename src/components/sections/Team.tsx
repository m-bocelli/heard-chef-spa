import Section from "./Section";
import evyn from "../../assets/images/evyn.png";
import tommy from "../../assets/images/tommy.png";
import mikey from "../../assets/images/mikey.png";

const teamMembers = [
  {
    name: "Evyn Appel",
    desc: "Sustainable Food Systems Major",
    role: "Founder",
    img: evyn,
  },
  {
    name: "Tommy Kramer",
    desc: "B.S. Sustainable Food Systems",
    role: "Founder",
    img: tommy,
  },
  {
    name: "Michael Bocelli",
    desc: "B.S. Computer Science",
    role: "Developer",
    img: mikey,
  },
];

export default function Team() {
  return (
    <Section id="Team" className="h-screen flex flex-col justify-between debug">
      <header className="pt-24">
        <h1 className="text-purple font-bold text-4xl mb-6">The Team</h1>
      </header>
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-12">
        {teamMembers.map((member, idx) => {
          return (
            <div
              key={idx}
              className="w-[263px] flex flex-col justify-center items-center"
            >
              <img
                className="rounded-xl border-3 border-purple mb-2"
                src={member.img}
              />
              <div className="flex flex-col gap-3 w-[263px]">
                <h2 className="font-bold border-3 border-purple rounded-xl">
                  {member.name}
                </h2>
                <h3 className="italic">{member.role}</h3>
                <div>{member.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
      <footer className="p-10">
        Contact us at{" "}
        <span className="font-bold text-purple">heardchefapp@gmail.com</span>
      </footer>
    </Section>
  );
}
