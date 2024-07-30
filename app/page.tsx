import { Button } from "@nextui-org/react";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg text-center justify-center">
                <h1 className="text-violet-500">Test</h1>
            </div>

            <div className="flex gap-3">
                <Button>AHHH</Button>
            </div>
        </section>
    );
}
