"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
    const currentPath = usePathname()
    const getLinkClassname = (path: string) => {
        if (currentPath === path) {
            return "text-green-600 relative"
        } else {
            return "hover:text-green-600 transition-all duration-150 relative"
        }
    }
    const spanStyle = (path: string) => {
        if (currentPath === path) {
            return "w-full h-1 bg-green-600 absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-xl transition-all duration-300"
        } else {
            return "w-0 h-1 bg-green-600 absolute -bottom-2 left-0 rounded-xl transition-all duration-300 left-1/2 -translate-x-1/2"
        }
    }
    return (
        <div className="flex items-center justify-between py-8">
            <div className="text-4xl font-bold">
                Huynh Linh <span className="text-green-600">.</span>
            </div>
            <div className="flex items-center gap-x-4">
                <div className="flex items-center gap-x-4 text-lg font-semibold">
                    <Link href="/" className={getLinkClassname("/")}>
                        Home <span className={spanStyle("/")}></span>
                    </Link>
                    <Link
                        href="/contact"
                        className={getLinkClassname("/contact")}
                    >
                        Contact
                        <span className={spanStyle("/contact")}></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
