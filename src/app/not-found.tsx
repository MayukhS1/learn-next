"use client"

import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    return (
        <>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking <b>{pathname}</b> for does not exist.</p>
        </>
    );
}