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
      className="fixed top-0 left-0 right-0 bg-white/50 backdrop-blur-3xl border-b border-gray-300 drop-shadow-xl z-50"
    >
      <nav className="container mx-auto flex justify-between items-center h-full py-2 px-5 md:px-0">
        {/* Logo */}
        <a href="#" className="flex items-center -space-x-5 cursor-pointer">
          <svg width="48" height="24" viewBox="0 0 48 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#155dfc" opacity="0.75" class="hover:opacity-100 transition-opacity" />

            <circle cx="30" cy="12" r="12" fill="#fb2c36" opacity="1.0" class="hover:opacity-75 transition-opacity" />
          </svg>
        </a>

        {/* Desktop NavLinks */}
        <div className="hidden md:flex">
          <ul className="flex gap-x-5 lg:gap-x-10">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`text-lg font-semibold relative after:duration-300 after:absolute after:h-0.5 after:w-0 after:-bottom-5 after:left-0 after:bg-blue-500 hover:after:w-full ${
                  activeLink == link.href ? linkActive : "text-gray-600 hover:text-gray-900"
                } `}
              >
                <a onClick={() => setActiveLink(link.href)} href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get touch button*/}
        <button className="hidden md:block py-2.5 text-lg button">
          <a href="#Newsletter">get in touch</a>
        </button>

        {/* Mobile Menu */}
        <button
          aria-label={isMenuOpen ? "Close Mobile Menu" : "Open Mobile Menu"}
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faClose : faBars} size="xl" />
        </button>
      </nav>

      {/* Mobile NavLinks */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:hidden container mx-auto py-5 flex flex-col justify-center gap-y-4 border-t border-gray-200 px-6"
        >
          <ul className="flex flex-col gap-y-3">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`w-fit text-md font-semibold relative after:duration-300 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 after:bg-blue-500 hover:after:w-full ${
                  activeLink == link.href ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"
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
          <button className="button">
            <a href="#newsletter">get in touch</a>
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
