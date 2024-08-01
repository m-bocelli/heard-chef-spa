import { Button, Spinner } from "@nextui-org/react";
import { AppStoreIcon, GooglePlayStoreIcon } from "@/components/icons";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg text-center justify-center">
                <h1 className="text-purple">Coming soon...</h1>
            </div>

            <div className="flex gap-3">
                <AppStoreIcon />
                <GooglePlayStoreIcon />
            </div>
            <Spinner color="warning"></Spinner>
        </section>
    );
}
