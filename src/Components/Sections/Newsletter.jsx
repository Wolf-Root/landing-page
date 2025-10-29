import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

export default function Newsletter() {
  return (
    <section id="Newsletter" className="container mx-auto">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="bg-blue-600 rounded-2xl overflow-hidden"
      >
        <div className="relative px-6 md:px-16 py-16 md:py-24">
          {/* gradient bg */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block"
          />

          {/* flex */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* left */}
            <motion.div variants={fadeIn("right", 0.5)} className="max-w-lg text-center md:text-left">
              <motion.h2 variants={textVariant(0.3)} className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Subscribe Newsletter
              </motion.h2>
              <motion.p variants={fadeIn("up", 0.6)} className="text-blue-200 text-base sm:text-lg md:text-xl font-semibold">
                Best cooks and best delivery guys all at your service. Hot tasty food
              </motion.p>
            </motion.div>

            {/* right */}
            <motion.div variants={fadeIn("up", 0.6)} className="flex flex-col sm:flex-row gap-4 sm:gap-0">
              <label htmlFor="email" className="sr-only">
                Enter Your Email Address
              </label>
              <motion.input
                variants={fadeIn("right", 0.7)}
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
                className="w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none"
              />
              <motion.button
                variants={fadeIn("left", 0.7)}
                className="flex items-center gap-2 w-full bg-green-500 sm:w-auto cursor-pointer text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-r-xl sm:rounded-l-none duration-300 hover:bg-green-700"
              >
                <span>Discover</span>
                <FontAwesomeIcon icon={faArrowRight} size="lg" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
