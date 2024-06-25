interface IExperience {
    id: number;
    period: string;
    institution: string;
    role: string;
}
interface IProject {
    id: string
    name: string
    role: string
    description: string
    technologies: string
    tasks: string[]
    link: string
    github: string
    image: string
}
interface IInfor {
    email: string
    phone: string
    address: string
}