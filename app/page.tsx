import EmailForm from "@/components/emailForm";
import { AppStoreIcon, GooglePlayStoreIcon } from "@/components/icons";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center py-8 md:py-10 min-h-full">
            <div className="flex-1">
                <EmailForm></EmailForm>
            </div>

            <div className="flex-1">
                <div className="flex flex-col max-w-lg text-center">
                    <h1 className="text-purple my-2">Coming soon...</h1>
                    <div className="flex gap-3">
                        <AppStoreIcon />
                        <GooglePlayStoreIcon />
                    </div>
                </div>
            </div>
        </section>
    );
}
