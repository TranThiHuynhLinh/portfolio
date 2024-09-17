import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, Button } from "@nextui-org/react"
import Link from "next/link"

export default function Page() {
    return (
        <div className="flex flex-col justify-between pt-16">
            <div className="flex justify-between">
                <div className="flex-1 ">
                    <div className="mb-4 font-semibold text-xl">
                        Font End Developer
                    </div>
                    <div className="font-bold text-6xl">
                        <div>Hello I am </div>
                        <div className="text-green-600">Huynh Linh</div>
                    </div>
                    <div className="mt-8">
                    Final-year student at Danang University of Science and Technology with a passion for web development, experienced in various projects, and eager to contribute while continuing to grow as a developer.
                    </div>
                    <div className="mt-8 flex justify-between">
                        <div className="flex gap-x-4">
                            <Link href="https://www.facebook.com/hang.truc.90813/" target="_blank"><Button
                                variant="flat"
                                color="success"
                                size="lg"
                                isIconOnly
                                className="rounded-full"
                                href="https://github.com/TranThiHuynhLinh"
                            >
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </Button></Link>
                            
                            <Link href="https://www.facebook.com/hang.truc.90813/" target="_blank"><Button
                                variant="flat"
                                color="success"
                                size="lg"
                                isIconOnly
                                className="rounded-full"
                                
                            >
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </Button></Link>
                            
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-end">
                    <div className="">
                        <Avatar
                            src="/avatar.jpg"
                            isBordered
                            className="w-80 h-80 text-large hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-20 flex justify-between">
                <div className="flex items-center gap-x-4">
                    <div className="text-6xl font-bold">1</div>
                    <div className="w-24">Year of experience</div>
                </div>
                <div className="flex items-center gap-x-4">
                    <div className="text-6xl font-bold">3.72</div>
                    <div className="w-24">GPA</div>
                </div>
                <div className="flex items-center gap-x-4">
                    <div className="text-6xl font-bold">3</div>
                    <div className="w-24">Projects</div>
                </div>
            </div>
        </div>
    )
}
