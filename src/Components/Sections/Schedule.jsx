import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import stats from "../../assets/stats.webp";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

export default function Schedule() {
    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className="max-w-7xl mx-auto px-4 py-10"
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                {/* Left side image */}
                <motion.div
                    variants={fadeIn("right", 0.3)}
                    className="w-full md:w-1/2"
                >
                    <motion.img
                        variants={fadeIn("up", 0.4)}
                        src={stats}
                        alt="stats"
                        className="w-full h-auto"
                        loading="lazy"
                    />
                </motion.div>

                {/* Right */}
                <motion.div
                    variants={fadeIn("left", 0.3)}
                    className="w-full md:w-1/2"
                >
                    <motion.span
                        variants={fadeIn("up", 0.4)}
                        className="text-lg md:text-xl font-semibold text-orange-500 uppercase"
                    >
                        schedule
                    </motion.span>
                    <motion.h2
                        variants={textVariant(0.5)}
                        className="text-3xl md:text-4xl font-bold text-neutral-900 capitalize my-5 md:w-4/5"
                    >
                        Streamline Your Business <br />
                        With Smart Scheduling Solutions.
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("up", 0.6)}
                        className="text-gray-600 mb-8"
                    >
                        Take control of your time and boost productivity with
                        our intelligent scheduling system. Automate
                        appointments, manage team availability, and deliver
                        exceptional customer experiences through seamless
                        calendar management.
                    </motion.p>
                    <motion.a
                        variants={fadeIn("up", 0.7)}
                        href="#"
                        className="text-blue-500 text-xl font-semibold flex items-center gap-4 duration-300 hover:gap-8"
                    >
                        Explore scheduling features
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            size="lg"
                        ></FontAwesomeIcon>
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
}
