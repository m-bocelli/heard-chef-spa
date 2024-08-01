"use client";

import { fontMono } from "@/config/fonts";
import { NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/globals.css";

export default function NavbarLink({
    href,
    label,
}: {
    href: string;
    label: string;
}) {
    const path = usePathname();
    return (
        <NavbarItem isActive={path === href} className="text-purple">
            <Link href={href}>{label}</Link>
        </NavbarItem>
    );
}
