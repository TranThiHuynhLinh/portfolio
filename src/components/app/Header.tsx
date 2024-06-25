"use client"
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/react"
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
        <div className="fixed top-0 left-0 w-full bg-black shadow-md z-50 px-4 md:px-48">
            <div className="flex items-center justify-between h-24">
                <div className="text-4xl font-bold">
                    Huynh Linh<span className="text-green-600">.</span>
                </div>
                <div className="flex items-center gap-x-4">
                    <div className="hidden md:flex items-center gap-x-4 text-lg font-semibold">
                        <Link href="/" className={getLinkClassname("/")}>
                            Home <span className={spanStyle("/")}></span>
                        </Link>

                        <Link
                            href="/projects"
                            className={getLinkClassname("/projects")}
                        >
                            Project
                            <span className={spanStyle("/projects")}></span>
                        </Link>
                        <Link
                            href="/skills"
                            className={getLinkClassname("/skills")}
                        >
                            Skills{" "}
                            <span className={spanStyle("/skills")}></span>
                        </Link>
                        <Link
                            href="/experiences"
                            className={getLinkClassname("/experiences")}
                        >
                            Experience
                            <span className={spanStyle("/experiences")}></span>
                        </Link>
                        <Link
                            href="/contact"
                            className={getLinkClassname("/contact")}
                        >
                            Contact
                            <span className={spanStyle("/contact")}></span>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button variant="flat" color="success">
                                    Menu
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="home">
                                    <Link href="/" className="w-full h-full">
                                        Home
                                    </Link>
                                </DropdownItem>
                                <DropdownItem key="projects">
                                    <Link
                                        href="/projects"
                                        className="w-full h-full"
                                    >
                                        Projects
                                    </Link>
                                </DropdownItem>
                                <DropdownItem key="experience">
                                    <Link
                                        href="/experience"
                                        className="w-full h-full"
                                    >
                                        Experience
                                    </Link>
                                </DropdownItem>
                                <DropdownItem key="contact">
                                    <Link
                                        href="/contact"
                                        className="w-full h-full"
                                    >
                                        Contact
                                    </Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    )
}
