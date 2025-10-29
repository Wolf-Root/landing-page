import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

export default function Features() {
  const features = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like",
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models",
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing",
    },
  ];
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="max-w-7xl mx-auto"
    >
      {/* Heading text */}
      <motion.div variants={fadeIn("up", 0.3)} className="text-center space-y-4 mb-16">
        <motion.h2 variants={textVariant(0.2)} className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-bold">
          How can we help your business?
        </motion.h2>
        <motion.p variants={fadeIn("up", 0.4)} className="text-lg md:text-xl text-gray-500">
          When you resell besnik, you build trust and increase
        </motion.p>
      </motion.div>

      {/* Box features */}
      <motion.div variants={fadeIn("up", 0.5)} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            variants={fadeIn("up", 0.3 * (index + 1))}
            key={index}
            className="flex flex-col items-center md:text-center p-6 gap-8"
          >
            {/* icon */}
            <motion.div
              variants={fadeIn("up", 0.4 * (index + 1))}
              className="size-24 text-3xl rounded-full flex-center"
              style={{
                backgroundColor: index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : "#FFF3E4",
              }}
            >
              {feature.icon}
            </motion.div>

            <motion.div variants={fadeIn("up", 0.5 * (index + 1))}>
              {/* title */}
              <motion.h3 variants={textVariant(0.3)} className="text-xl md:text-2xl font-semibold text-gray-900">
                {feature.title}
              </motion.h3>
              {/* description */}
              <p variants={fadeIn("up", 0.6 * (index + 1))} className="text-lg text-gray-500">
                {feature.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div variants={fadeIn("up", 0.7)} className="text-center mt-12">
        <motion.button variants={fadeIn("up", 0.8)} className="button shadow-[0_0_30px_0px_var(--color-blue-600)]">
          Become a Partner
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
