import { siteConfig } from "@/config/site";
import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { fontMono } from "@/config/fonts";
import NavbarLink from "./navbarLink";

export default function Nav() {
    return (
        <Navbar shouldHideOnScroll className="h-24">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarMenuToggle className="sm:hidden" />
                <NavbarBrand className="gap-3 max-w-fit">
                    <Link className="flex items-center gap-1" href="/">
                        <Image
                            src={logo}
                            alt="Heard, Chef! logo"
                            width={80}
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
                    <NavbarMenuItem>
                        <Link className="w-full" href="/" size="lg">
                            Test 3
                        </Link>
                    </NavbarMenuItem>
                </div>
            </NavbarMenu>
        </Navbar>
    );
}
