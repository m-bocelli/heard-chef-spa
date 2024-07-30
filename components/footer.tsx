import { Link } from "@nextui-org/react";

export default function Footer() {
    return (
        <footer className="w-full flex items-center justify-center py-3">
            <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://www.mbocelli.com/"
                title="mbocelli portfolio"
            >
                <span className="text-sm">
                    ©2024 Michael Bocelli. All Rights Reserved.
                </span>
            </Link>
        </footer>
    );
}
