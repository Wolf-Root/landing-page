import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import heroImage from "../../assets/hero-image.png";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

export default function Hero() {
    const [email, setEmail] = useState("");
    
    return (
        <section
            id="Hero"
            className="w-full container mx-auto min-h-screen px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center pt-24 gap-y-10"
        >
            {/* Left col */}
            <div className="w-full md:w-1/2 flex flex-col gap-y-8">
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView="show"
                >
                    <span className="flex items-center gap-x-2 text-lg font-semibold bg-gray-50 w-fit py-2 px-4 rounded-full cursor-default drop-shadow-md duration-300 hover:bg-gray-100 group">
                        <FontAwesomeIcon
                            icon={faStar}
                            size="lg"
                            className="text-blue-500 duration-300 group-hover:text-amber-300 group-hover:scale-110"
                        ></FontAwesomeIcon>
                        Jump start your growth
                    </span>
                </motion.div>

                <motion.h1
                    variants={textVariant(0.3)}
                    initial="hidden"
                    whileInView="show"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                    We boost the growth for <br />
                    <span className="text-blue-600 border-b-2 border-blue-200/60">
                        Startup to Fortune 500
                        <br />
                    </span>
                    Companies <span className="animate-pulse">⏰</span>
                </motion.h1>

                <motion.p
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    className="text-lg md:text-xl text-gray-600"
                >
                    Get the most accurate leads, sales training ,
                    <br />
                    conversion tools, and more — all in one simple billing.
                </motion.p>

                <motion.form
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView="show"
                    className="flex gap-2 md:gap-4 lg:max-w-xl"
                    onSubmit={(e) => {
                        e.preventDefault();
                        setEmail("");
                    }}
                >
                    <label htmlFor="email" className="sr-only">
                        Enter Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        maxLength={40}
                        placeholder="Email Address"
                        className="border-2 border-gray-200 text-md md:text-xl flex-1 py-2 px-4 md:py-4 md:px-10 rounded-2xl duration-300 focus:outline-0 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="py-2 px-4 md:py-4 md:px-8 bg-blue-600 text-white rounded-2xl cursor-pointer duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-300"
                    >
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            size="lg"
                        ></FontAwesomeIcon>
                    </button>
                </motion.form>
            </div>

            {/* Right col */}
            <motion.div
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView="show"
                className="w-full md:w-1/2 pl-0 md:pl-12"
            >
                <img
                    src={heroImage}
                    alt="Hero Image"
                    loading="lazy"
                    className="rounded-lg z-10 duration-500 hover:scale-[1.02]"
                />
            </motion.div>
        </section>
    );
}
