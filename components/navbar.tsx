import { siteConfig } from "@/config/site";
import {
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import NavbarLink from "./navbarLink";
import NavbarMenuLink from "./navbarMenuLink";

export default function Nav() {
    return (
        <Navbar shouldHideOnScroll className="h-24">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarMenuToggle className="sm:hidden" />
                <NavbarBrand className="gap-3 max-w-fit">
                    <Link className="flex items-center gap-1" href="/">
                        <Image
                            priority
                            src="/logo.PNG"
                            alt="Heard, Chef! logo"
                            width={80}
                            height={0}
                        ></Image>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <ul className="hidden sm:flex gap-8 justify-start ml-2">
                    {siteConfig.navbarItems.map((item, idx) => (
                        <NavbarLink
                            href={item.href}
                            label={item.label}
                            key={idx}
                        />
                    ))}
                </ul>
            </NavbarContent>

            <NavbarMenu className="mt-12">
                <div className="mx-4 mt-2 flex flex-col gap-3">
                    {siteConfig.navbarMenuItems.map((item, idx) => (
                        <NavbarMenuLink
                            href={item.href}
                            label={item.label}
                            key={idx}
                        />
                    ))}
                </div>
            </NavbarMenu>
        </Navbar>
    );
}
