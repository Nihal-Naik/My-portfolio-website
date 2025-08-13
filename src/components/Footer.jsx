import { FaGithub, FaLinkedin,FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="">
            <div className="flex justify-center gap-5 items-center mb-4">
                <a href="https://github.com/Nihal-Naik" target="_blank"><FaGithub className="text-2xl text-white" /></a>
                <a href="https://www.linkedin.com/in/nihalnaik2002/" target="_blank"><FaLinkedin className="text-2xl text-white" /></a>
            </div>
            <div className="flex justify-center gap-2 items-center">
                <FaRegCopyright className="text-white text-sm" />
                <p className="text-center font-space text-sm mb-2 text-white"> Made by Nihal | 2025</p>
            </div>
        </section>
    )
}

export default Footer