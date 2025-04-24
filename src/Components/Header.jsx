import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#Hero");
    const navLinks = [
        { href: "#Hero", text: "Home" },
        { href: "#About", text: "About Us" },
        { href: "#Service", text: "Our Service" },
        { href: "#Testmonials", text: "Testmonials" },
    ];

    const linkActive = "text-blue-600 after:w-full";

    // Auto active link detection
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const currentId = `#${entry.target.id}`;
                        setActiveLink(currentId);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <motion.header
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-300 drop-shadow-xl z-50"
        >
            <nav className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16 md:h-20">
                {/* Logo */}
                <div className="flex items-center -space-x-2 cursor-pointer">
                    <a href="#">
                        <div className="w-6 h-6 bg-blue-500 rounded-full opacity-75 transition-opacity hover:opacity-100"></div>
                    </a>
                    <a href="#">
                        <div className="w-6 h-6 bg-red-500 rounded-full opacity-100 transition-opacity hover:opacity-75"></div>
                    </a>
                </div>

                {/* Desktop NavLinks */}
                <div className="hidden md:flex">
                    <ul className="flex gap-x-5 lg:gap-x-10">
                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                className={`text-lg font-semibold relative after:duration-300 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500 hover:after:w-full ${
                                    activeLink == link.href
                                        ? linkActive
                                        : "text-gray-600 hover:text-gray-900"
                                } `}
                            >
                                <a
                                    onClick={() => setActiveLink(link.href)}
                                    href={link.href}
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Get touch button*/}
                <button className="hidden md:block py-2.5 px-6 bg-blue-600 text-lg text-white capitalize rounded-lg cursor-pointer font-bold transition-all hover:bg-blue-700  active:translate-y-0.5 active:shadow-none">
                    <a href="#Newsletter">get in touch</a>
                </button>

                {/* Mobile Menu */}
                <button
                    aria-label={
                        isMenuOpen ? "Close Mobile Menu" : "Open Mobile Menu"
                    }
                    className="md:hidden cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <FontAwesomeIcon
                        icon={isMenuOpen ? faClose : faBars}
                        size="xl"
                    />
                </button>
            </nav>

            {/* Mobile NavLinks */}
            {isMenuOpen && (
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="md:hidden container mx-auto py-5 flex flex-col justify-center gap-y-4 border-t-1 border-gray-200 px-6"
                >
                    <ul className="flex flex-col gap-y-3">
                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                className={`w-fit text-md font-semibold relative after:duration-300 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500 hover:after:w-full ${
                                    activeLink == link.href
                                        ? "text-blue-600 after:w-full"
                                        : "text-gray-600 hover:text-gray-900"
                                } `}
                            >
                                <a
                                    onClick={() => {
                                        setActiveLink(link.href);
                                        setIsMenuOpen(false);
                                    }}
                                    href={link.href}
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button className="py-2 px-4 bg-blue-600 text-lg text-white capitalize rounded-lg cursor-pointer drop-shadow-xs drop-shadow-blue-900 transition-all hover:bg-blue-700 hover:shadow-md hover:shadow-blue-700 active:translate-y-0.5 active:shadow-none">
                        <a href="#newsletter">get in touch</a>
                    </button>
                </motion.div>
            )}
        </motion.header>
    );
}
