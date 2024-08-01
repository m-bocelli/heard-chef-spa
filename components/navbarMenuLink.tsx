"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/globals.css";
import { NavbarMenuItem } from "@nextui-org/react";

export default function NavbarMenuLink({
    href,
    label,
}: {
    href: string;
    label: string;
}) {
    const path = usePathname();
    return (
        <NavbarMenuItem isActive={path === href}>
            <Link className="w-full text-purple" href={href}>
                {label}
            </Link>
        </NavbarMenuItem>
    );
}
