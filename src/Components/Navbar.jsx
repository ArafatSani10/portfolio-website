import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle menu state
    const menuOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-white bg-black px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
            {/* Logo */}
            <a
                className="text-3xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 transition-all duration-300 hover:opacity-100 font-bold max-sm:text-xl"
                href="#home"
            >
                A<span className="text-gray-400">RA</span>
                <span className="text-green-500">FAT</span>
            </a>

            {/* Navigation Links */}
            <ul className="hidden md:flex gap-10">
                <li>
                    <a
                        className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                        href="#home"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                        href="#tech"
                    >
                        Tech
                    </a>
                </li>
                <li>
                    <a
                        className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                        href="#project"
                    >
                        Project
                    </a>
                </li>
                <li>
                    <a
                        className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                        href="#contact"
                    >
                        Contact
                    </a>
                </li>
            </ul>

            {/* Social Icons */}
            <ul className="hidden md:flex gap-5">
                <li>
                    <a
                        className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-600 hover:opacity-100"
                        href="#"
                    >
                        <FaYoutube />
                    </a>
                </li>
                <li>
                    <a
                        className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-700 hover:opacity-100"
                        href="#"
                    >
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a
                        className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-600 hover:opacity-100"
                        href="#"
                    >
                        <FaFacebook />
                    </a>
                </li>
                <li>
                    <a
                        className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-600 hover:opacity-100"
                        href="#"
                    >
                        <FaGithub />
                    </a>
                </li>
            </ul>

            {/* Hamburger Menu Icon */}
            {isOpen ? (
                <BiX className="block md:hidden text-3xl" onClick={menuOpen} />
            ) : (
                <BiMenu className="block md:hidden text-3xl" onClick={menuOpen} />
            )}

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden"
                        }`}
                >
                    {/* Mobile Navigation Links */}
                    <ul className="flex flex-col gap-10">
                        <li>
                            <a
                                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                                href="#home"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                                href="#tech"
                            >
                                Tech
                            </a>
                        </li>
                        <li>
                            <a
                                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                                href="#project"
                            >
                                Project
                            </a>
                        </li>
                        <li>
                            <a
                                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                                href="#contact"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Social Icons */}
                    <ul className="flex flex-wrap gap-5">
                        <li>
                            <a
                                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-600 hover:opacity-100"
                                href="#"
                            >
                                <FaYoutube />
                            </a>
                        </li>
                        <li>
                            <a
                                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-700 hover:opacity-100"
                                href="#"
                            >
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a
                                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-600 hover:opacity-100"
                                href="#"
                            >
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a
                                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-600 hover:opacity-100"
                                href="#"
                            >
                                <FaGithub />
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
