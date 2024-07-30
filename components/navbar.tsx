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

export default function Nav() {
    return (
        <Navbar shouldHideOnScroll className="shadow-md shadow-violet-100">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarMenuToggle className="sm:hidden" />
                <NavbarBrand className="gap-3 max-w-fit">
                    <p>HEARD CHEF!</p>
                </NavbarBrand>
                <ul className="hidden sm:flex gap-4 justify-start ml-2">
                    {siteConfig.navbarItems.map((item, idx) => (
                        <NavbarItem key={idx}>
                            <Link href={item.href}>{item.label}</Link>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <Button>Login</Button>
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-2">
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
