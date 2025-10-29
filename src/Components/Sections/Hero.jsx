import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import heroImage from "../../assets/hero-image.png";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section id="Hero" className="container mx-auto min-h-dvh flex-responsive pt-24 gap-y-10">
      {/* Left col */}
      <div className="w-full md:flex-1 flex flex-col gap-y-8">
        {/* Badge */}
        <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
          <span className="flex items-center gap-x-2 text-lg font-semibold bg-gray-50 w-fit py-2 px-4 rounded-full cursor-default drop-shadow-md duration-300 hover:bg-gray-200 group">
            <FontAwesomeIcon
              icon={faStar}
              size="lg"
              className="text-blue-500 duration-300 group-hover:text-amber-300 group-hover:scale-110"
            />
            Jump start your growth
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          We boost the growth for <br />
          <span className="text-blue-600 border-b-2 border-blue-200/60">
            Startup to Fortune 500
            <br />
          </span>
          Companies <span className="animate-pulse">⏰</span>
        </motion.h1>

        {/* SubTitile */}
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-lg md:text-xl text-gray-600"
        >
          Get the most accurate leads, sales training ,
          <br />
          conversion tools, and more — all in one simple billing.
        </motion.h2>

        {/* Form */}
        <motion.form
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
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
            className="border-2 border-gray-200 text-lg md:text-xl flex-1 py-2 px-4 md:py-4 md:px-10 rounded-2xl duration-300 focus:outline-0 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="button">
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </button>
        </motion.form>
      </div>

      {/* Right col */}
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="w-full md:flex-1"
      >
        <img src={heroImage} alt="Hero Image" className="rounded-lg z-10 duration-700 hover:scale-105" loading="eager" />
      </motion.div>
    </section>
  );
}
