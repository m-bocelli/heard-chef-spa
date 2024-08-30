import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import login from "../../assets/images/login.png";

export default function About() {
  return (
    <div className="h-screen flex flex-col justify-evenly items-center">
      <h1 className="text-purple font-bold text-4xl">"What's for dinner?"</h1>
      <h2>
        <span className="text-orange">
          <em>Heard, Chef!</em>
        </span>{" "}
        seeks to answer the age old question.
      </h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <Card className="py-4 max-w-[512px]">
          <CardHeader className="justify-center text-orange font-bold text-xl">
            SOCIAL
          </CardHeader>
          <CardBody className="flex-row py-2 overflow-hidden items-center">
            <Image
              alt="Image of the app's landing page"
              className="rounded-xl shadow-sm max-w-[200px]"
              src={login}
            />
            <div className="flex flex-col pt-2 px-4 gap-3 justify-center">
              <p className="text-md text-magenta font-bold">
                Form a herd with your family and/or friends
              </p>
              <Divider className="rounded-full" />
              <p className="text-md text-yellow font-bold">
                Swipe on your favorite recipes
              </p>
              <Divider className="rounded-full" />
              <p className="text-md text-magenta font-bold">
                If your herd has the same likes, you'll get a match!
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="py-4 max-w-[512px]">
          <CardHeader className="justify-center text-orange font-bold text-xl">
            CONVENIENCE
          </CardHeader>
          <CardBody className="flex-row py-2 overflow-hidden items-center">
            <Image
              alt="Image of the app's landing page"
              className="rounded-xl shadow-sm max-w-[200px]"
              src={login}
            />
            <div className="flex flex-col pt-2 px-4 gap-3 justify-center">
              <p className="text-md text-magenta font-bold">
                One-tap Instacart order for all the ingredients you need
              </p>
              <Divider className="rounded-full" />
              <p className="text-md text-yellow font-bold">
                Free access to thousands of cultivated and user-made recipes
              </p>
              <Divider className="rounded-full" />
              <p className="text-md text-magenta font-bold">
                Advanced filtering for allergins and preferences
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
