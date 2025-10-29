import { faFacebookF, faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

export default function Footer() {
  const socialLinks = [
    { id: 1, icon: faFacebookF, link: "https://www.facebook.com/profile.php?id=100053743200085" },
    { id: 2, icon: faXTwitter, link: "https://x.com/wolf_R00T" },
    { id: 3, icon: faGithub, link: "https://github.com/Wolf-Root" },
  ];

  const footerLinks = {
    company: [
      { name: "About", href: "#About" },
      { name: "Terms of Use" },
      { name: "Privacy Policy" },
      { name: "How it Works" },
      { name: "Contact Us" },
    ],
    getHelp: [{ name: "Support Carrer" }, { name: "24h Service" }, { name: "Quick Chat" }],
    support: [{ name: "FAQ" }, { name: "Policy" }, { name: "Business" }],
    contact: [{ name: "WhatsApp" }, { name: "Support 24" }],
  };
  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="bg-gray-50"
    >
      {/* container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* grid */}
        <motion.div variants={fadeIn("up", 0.3)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Colum */}
          <motion.div variants={fadeIn("right", 0.4)} className="lg:col-span-4 space-y-4">
            {/* Logo */}
            <motion.a href="#" variants={fadeIn("down", 0.5)} className="flex items-center gap-1 cursor-pointer">
              <svg width="48" height="24" viewBox="0 0 48 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#155dfc" opacity="0.75" class="hover:opacity-100 transition-opacity" />

                <circle cx="30" cy="12" r="12" fill="#fb2c36" opacity="1.0" class="hover:opacity-75 transition-opacity" />
              </svg>
              <span className="text-xl font-semibold ml-1">The Next Design</span>
            </motion.a>

            <motion.p variants={fadeIn("up", 0.6)} className="text-gray-600 mb-6 md:w-3/4">
              The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
            </motion.p>

            {/* Social Links */}
            <motion.div variants={fadeIn("up", 0.7)} className="flex items-center gap-4">
              {socialLinks.map(({ id, link, icon }) => (
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`size-10 md:size-12 bg-gray-200 rounded-full flex-center ${
                    id === 1 ? "text-blue-600" : "text-gray-900"
                  } duration-300 hover:${id === 1 ? "bg-blue-600" : "bg-gray-900"} hover:text-white hover:scale-101`}
                >
                  <FontAwesomeIcon icon={icon} size="xl" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer Links items */}
          <motion.div variants={fadeIn("left", 0.4)} className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([Category, link], categoryIndex) => (
                <motion.div variants={fadeIn("up", 0.3 * (categoryIndex + 1))} key={Category}>
                  <motion.h3 variants={textVariant(0.2)} className="text-lg font-semibold mb-4 uppercase cursor-default">
                    {Category}
                  </motion.h3>
                  <motion.ul variants={fadeIn("up", 0.4)} className="space-y-3">
                    {link.map((link, index) => (
                      <motion.li variants={fadeIn("up", 0.1 * (index + 1))} key={index}>
                        <motion.a
                          whileHover={{ x: 5 }}
                          href={link.href ? link.href : "#"}
                          className="text-gray-600 duration-300 hover:text-gray-900"
                        >
                          {link.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="border-t-2 border-gray-300 mt-12 pt-8 flex-between">
          <motion.p variants={fadeIn("right", 1.0)} className="text-gray-600 text-sm md:text-base">
            Copyright &copy; {new Date().getFullYear()} Wolf Root
          </motion.p>
          <motion.p variants={fadeIn("left", 1.0)} className="text-gray-600 text-sm md:text-base">
            create by{" "}
            <a href="https://github.com/Wolf-Root" target="_blank" rel="noopener noreferrer">
              <b>Wolf Root</b>
            </a>
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}
