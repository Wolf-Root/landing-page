import { useState } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

export default function Pricing() {
    const [productCount, setProductCount] = useState(1);

    // Calculate product price base on product count
    const startePrice = Math.round(4000 * (productCount / 50));
    const businessPrice = Math.round(7500 * (productCount / 50));

    return (
        <motion.section
            id="Pricing"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            className="max-w-7xl mx-auto px-4 py-20"
        >
            {/* Haeding */}
            <motion.h2
                variants={textVariant(0.3)}
                className="text-3xl md:text-4xl text-gray-900 font-bold text-center mb-16"
            >
                Pricing
            </motion.h2>

            {/* box */}
            <motion.div
                variants={fadeIn("up", 0.4)}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
                {/* Starter Plan */}
                <motion.div
                    variants={fadeIn("right", 0.5)}
                    className="bg-white p-8 rounded-xl shadow-lg duration-300 hover:-translate-y-1"
                >
                    <motion.h3
                        variants={fadeIn("up", 0.6)}
                        className="text-lg md:text-xl text-gray-600 mb-4"
                    >
                        Starter
                    </motion.h3>
                    <motion.p
                        variants={fadeIn("up", 0.7)}
                        className="text-2xl md:text-3xl font-extrabold mb-6"
                    >
                        {`$ ${startePrice} /mo`}
                    </motion.p>
                </motion.div>

                {/* Business Plan */}
                <motion.div
                    variants={fadeIn("left", 0.5)}
                    className="bg-white p-8 rounded-xl shadow-lg duration-300 hover:-translate-y-1"
                >
                    <motion.h3
                        variants={fadeIn("up", 0.6)}
                        className="text-lg md:text-xl text-gray-600 mb-4"
                    >
                        Business
                    </motion.h3>
                    <motion.p
                        variants={fadeIn("up", 0.7)}
                        className="text-2xl md:text-3xl font-extrabold mb-6"
                    >
                        {`$ ${businessPrice} /mo`}
                    </motion.p>
                </motion.div>
            </motion.div>

            <motion.div
                variants={fadeIn("up", 0.8)}
                className="max-w-xl mx-auto"
            >
                <motion.p
                    variants={fadeIn("up", 0.9)}
                    className="text-gray-600 text-center mb-4"
                >
                    {productCount} Product
                </motion.p>

                <motion.div
                    variants={fadeIn("up", 1.0)}
                    className="relative px-4"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm md:text-lg text-gray-600">
                            0
                        </span>
                        <input
                            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            type="range"
                            name="ProductRange"
                            id="ProductRange"
                            min="1"
                            max="50"
                            value={productCount}
                            onChange={(e) => setProductCount(e.target.value)}
                        />
                        <span className="text-xs sm:text-sm md:text-lg text-gray-600">
                            50
                        </span>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn("up", 1.1)}
                    className="text-center mt-12"
                >
                    <motion.p
                        variants={fadeIn("up", 1.2)}
                        className="text-xl to-gray-600 mb-4"
                    >
                        Ready to get started ?
                    </motion.p>
                    <motion.button
                        variants={fadeIn("up", 1.3)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 text-lg md:text-xl font-bold text-white py-3 px-6 rounded-lg duration-300 cursor-pointer hover:bg-blue-700"
                    >
                        Get started
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
