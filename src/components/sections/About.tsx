import { Card, CardBody, Divider, Image } from "@nextui-org/react";
import herd from "../../assets/images/herd.png";
import swiping from "../../assets/images/swiping.png";
import Section from "./Section";

export default function About() {
  return (
    <Section
      id="About"
      className="h-auto w-full flex flex-col items-center pt-24"
    >
      <header className="mb-12">
        <h1 className="text-purple font-bold text-4xl mb-6">
          Recipe Decisions Made Easy
        </h1>
        <h2 className="text-black">
          With our growing number of partners,{" "}
          <span className="text-orange">
            <em>Heard, Chef!</em>
          </span>{" "}
          is building an immense recipe base.
        </h2>
      </header>
      <main className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row items-center">
          <Card className="py-4 max-w-[512px]">
            <CardBody className="flex-row py-2 overflow-hidden items-center">
              <Image
                alt="Image of the app's landing page"
                className="rounded-xl shadow-sm max-w-[200px]"
                src={herd}
              />
            </CardBody>
          </Card>
          <div className="flex flex-col px-4 gap-3 justify-center lg:text-left">
            <p className="text-md text-magenta font-bold">
              Form a herd with your family and/or friends
            </p>
            <Divider className="rounded-full" />
            <p className="text-md text-black font-bold">
              Swipe on your favorite recipes
            </p>
            <Divider className="rounded-full" />
            <p className="text-md text-magenta font-bold">
              If your herd has the same likes, you'll get a match!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row items-center">
          <div className="flex flex-col px-4 gap-3 justify-center lg:text-right order-1">
            <p className="text-md text-magenta font-bold">
              One-tap Instacart order for all the ingredients you need
            </p>
            <Divider className="rounded-full" />
            <p className="text-md text-black font-bold">
              Free access to thousands of cultivated and user-made recipes
            </p>
            <Divider className="rounded-full" />
            <p className="text-md text-magenta font-bold">
              Powerful filtering for allergins and preferences
            </p>
          </div>
          <Card className="py-4 max-w-[512px] lg:order-1">
            <CardBody className="flex-row py-2 overflow-hidden items-center">
              <Image
                alt="Image of the app's landing page"
                className="rounded-xl shadow-sm max-w-[200px]"
                src={swiping}
              />
            </CardBody>
          </Card>
        </div>
      </main>
    </Section>
  );
}
