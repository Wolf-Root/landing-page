// eslint-disable-next-line
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

export default function Purpose() {
    const purposes = [
        {
            icon: "🟣",
            title: "Built for impact",
            description:
                "We identify and nurture a truly diverse team of designers, developers and marketers",
        },
        {
            icon: "🔴",
            title: "In sync with you",
            description:
                "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
        },
    ];

    return (
        <section id="About" className="bg-gray-50 py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* grid */}
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* left */}
                    <motion.div variants={fadeIn("right", 0.3)}>
                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            className="text-purple-600 text-sm md:text-lg uppercase mb-2"
                        >
                            Achieve more
                        </motion.p>
                        <motion.h2
                            variants={textVariant(0.5)}
                            className="text-3xl md:text-4xl lg:text-5xl text-gray-900"
                        >
                            Purpose of a convoy is to keep your team
                        </motion.h2>
                    </motion.div>

                    {/* middle */}
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8 items-center"
                    >
                        {purposes.map((purpose, index) => (
                            <motion.div
                                variants={fadeIn("up", 0.3 * (index + 1))}
                                key={index}
                                className="flex items-start space-x-4"
                            >
                                <motion.div
                                    variants={fadeIn(
                                        "right",
                                        0.4 * (index + 1)
                                    )}
                                    className="w-12 h-12 flex items-center justify-start rounded-lg"
                                >
                                    {purpose.icon}
                                </motion.div>
                                <motion.div
                                    variants={fadeIn("left", 0.4 * (index + 1))}
                                >
                                    <motion.h3
                                        variants={textVariant(0.3)}
                                        className="text-xl md:text-2xl font-bold text-gray-900 mb-2"
                                    >
                                        {purpose.title}
                                    </motion.h3>
                                    <motion.p
                                        variants={fadeIn("up", 0.4)}
                                        className="text-gray-600"
                                    >
                                        {purpose.description}
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
