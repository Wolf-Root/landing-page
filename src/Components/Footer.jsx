import {
    faFacebookF,
    faGithub,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

export default function Footer() {
    const footerLinks = {
        company: [
            { name: "About", href: "#About" },
            { name: "Terms of Use", href: "#" },
            { name: "Privacy Policy", href: "#" },
            { name: "How it Works", href: "#" },
            { name: "Contact Us", href: "#" },
        ],
        getHelp: [
            { name: "Support Carrer", href: "#" },
            { name: "24h Service", href: "#" },
            { name: "Quick Chat", href: "#" },
        ],
        support: [
            { name: "FAQ", href: "#" },
            { name: "Policy", href: "#" },
            { name: "Business", href: "#" },
        ],
        contact: [
            { name: "WhatsApp", href: "#" },
            { name: "Support 24", href: "#" },
        ],
    };
    return (
        <motion.footer
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            className="bg-gray-50"
        >
            {/* container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                {/* grid */}
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
                >
                    {/* Brand Colum */}
                    <motion.div
                        variants={fadeIn("right", 0.4)}
                        className="lg:col-span-4 space-y-4"
                    >
                        <motion.div
                            variants={fadeIn("down", 0.5)}
                            className="flex items-center gap-1 cursor-pointer"
                        >
                            <div className="flex items-center -space-x-2 cursor-default">
                                <a href="#">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full opacity-75 transition-opacity hover:opacity-100"></div>
                                </a>
                                <a href="#">
                                    <div className="w-6 h-6 bg-red-500 rounded-full opacity-100 transition-opacity hover:opacity-75"></div>
                                </a>
                            </div>
                            <span className="text-xl font-semibold ml-1">
                                The Next Design
                            </span>
                        </motion.div>
                        <motion.p
                            variants={fadeIn("up", 0.6)}
                            className="text-gray-600 mb-6 md:w-3/4"
                        >
                            The copy warned the Little Blind Text, that where it
                            came from it would have been rewritten a thousand
                            times.
                        </motion.p>

                        <motion.div
                            variants={fadeIn("up", 0.7)}
                            className="flex items-center gap-4"
                        >
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="https://www.facebook.com/profile.php?id=100053743200085"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full flex items-center justify-center text-blue-600 duration-200 hover:bg-blue-600 hover:text-white"
                            >
                                <FontAwesomeIcon icon={faFacebookF} size="xl" />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="https://x.com/One_Pis_pc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-900 duration-200 hover:bg-gray-900 hover:text-white"
                            >
                                <FontAwesomeIcon icon={faXTwitter} size="xl" />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="https://github.com/Wolf-Root"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-900 duration-200 hover:bg-gray-900 hover:text-white"
                            >
                                <FontAwesomeIcon icon={faGithub} size="xl" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Footer Links items */}
                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        className="lg:col-span-8"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {Object.entries(footerLinks).map(
                                ([Category, link], categoryIndex) => (
                                    <motion.div
                                        variants={fadeIn(
                                            "up",
                                            0.3 * (categoryIndex + 1)
                                        )}
                                        key={Category}
                                    >
                                        <motion.h3
                                            variants={textVariant(0.2)}
                                            className="text-lg font-semibold mb-4 uppercase cursor-default"
                                        >
                                            {Category}
                                        </motion.h3>
                                        <motion.ul
                                            variants={fadeIn("up", 0.4)}
                                            className="space-y-3"
                                        >
                                            {link.map((link, index) => (
                                                <motion.li
                                                    variants={fadeIn(
                                                        "up",
                                                        0.1 * (index + 1)
                                                    )}
                                                    key={index}
                                                >
                                                    <motion.a
                                                        whileHover={{ x: 5 }}
                                                        href={link.href}
                                                        className="text-gray-600 duration-300 hover:text-gray-900"
                                                    >
                                                        {link.name}
                                                    </motion.a>
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    </motion.div>
                                )
                            )}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Footer Bottom */}
                <motion.div
                    variants={fadeIn("up", 0.8)}
                    className="border-t-2 border-gray-300 mt-12 pt-8"
                >
                    <motion.div
                        variants={fadeIn("up", 0.9)}
                        className="flex items-center justify-between"
                    >
                        <motion.p
                            variants={fadeIn("right", 1.0)}
                            className="text-gray-600 text-sm md:text-base"
                        >
                            Copyright &copy; {new Date().getFullYear()} Wolf
                            Root
                        </motion.p>
                        <motion.p
                            variants={fadeIn("left", 1.0)}
                            className="text-gray-600 text-sm md:text-base"
                        >
                            create by{" "}
                            <a
                                href="https://github.com/Wolf-Root"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <b>Wolf Root</b>{" "}
                            </a>
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.footer>
    );
}
