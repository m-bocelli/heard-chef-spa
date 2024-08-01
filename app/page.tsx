import { AppStoreIcon, GooglePlayStoreIcon } from "@/components/icons";
import { Kbd } from "@nextui-org/react";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-20 py-8 md:py-10">
            <div className="flex flex-col max-w-lg text-center justify-center gap-3">
                <h1 className="text-purple">Coming soon...</h1>
                <div className="flex gap-3">
                    <AppStoreIcon />
                    <GooglePlayStoreIcon />
                </div>
            </div>

            <div className="flex gap-2">
                <Kbd keys={["command"]} className="text-purple">
                    D
                </Kbd>
                <span className="text-purple">to bookmark.</span>
            </div>
        </section>
    );
}
