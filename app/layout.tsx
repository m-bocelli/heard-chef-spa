import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import Footer from "@/components/footer";
import { fontMono } from "@/config/fonts";

export const metadata: Metadata = {
    title: "Heard Chef!",
    description: "Heard Chef! What is it? Beats me.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body className="min-h-screen bg-background font-mono antialiased">
                <Providers>
                    <div className="relative flex flex-col h-screen">
                        <nav></nav>
                        <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
