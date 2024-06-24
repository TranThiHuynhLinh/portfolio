import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, Button } from "@nextui-org/react"

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
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Fugit aliquam dicta molestiae earum odit
                        blanditiis eius facilis doloremque accusantium nostrum.
                    </div>
                    <div className="mt-8 flex justify-between">
                        <Button variant="flat" color="success" size="lg">
                            <FontAwesomeIcon icon={faDownload} size="lg" />
                            Download CV
                        </Button>
                        <div className="flex gap-x-4">
                            <Button
                                variant="flat"
                                color="success"
                                size="lg"
                                isIconOnly
                                className="rounded-full"
                            >
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </Button>
                            <Button
                                variant="flat"
                                color="success"
                                size="lg"
                                isIconOnly
                                className="rounded-full"
                            >
                                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                            </Button>
                            <Button
                                variant="flat"
                                color="success"
                                size="lg"
                                isIconOnly
                                className="rounded-full"
                            >
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </Button>
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
                    <div className="text-6xl font-bold">12</div>
                    <div className="w-24">Year of experience</div>
                </div>
                <div className="flex items-center gap-x-4">
                    <div className="text-6xl font-bold">12</div>
                    <div className="w-24">Year of experience</div>
                </div>
                <div className="flex items-center gap-x-4">
                    <div className="text-6xl font-bold">12</div>
                    <div className="w-24">Year of experience</div>
                </div>
                <div className="flex items-center gap-x-4">
                    <div className="text-6xl font-bold">12</div>
                    <div className="w-24">Year of experience</div>
                </div>
            </div>
        </div>
    )
}
