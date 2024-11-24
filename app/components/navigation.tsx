"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation(){
    const path = usePathname()
    return (
    <nav>
        <ul>
            <li>
                <Link href="/">Home</Link>{path === '/' ? "here" : ""}
            </li>
            <li>
                <Link href="/About-us">About Us</Link>{path === '/' ? "here" : ""}
            </li>
        </ul>
    </nav>)
}