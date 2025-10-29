import { faClock, faGear, faLayerGroup, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

export default function Service() {
  const services = [
    {
      id: 1,
      icon: faLayerGroup,
      style: "size-8 text-indigo-600",
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
    },
    {
      id: 2,
      icon: faLightbulb,
      style: "size-8 text-amber-400",
      title: "Ad-Creatives",
      description: "Alphabet Village and the subline of her own road.",
    },
    {
      id: 3,
      icon: faGear,
      style: "size-8 text-red-400",
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
    },
    {
      id: 4,
      icon: faClock,
      style: "size-8 text-cyan-400",
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
    },
  ];
  return (
    <motion.section
      id="Service"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="container mx-auto"
    >
      <motion.div variants={fadeIn("up", 0.3)} className="flex-responsive gap-12 lg:gap-24">
        {/* Header */}
        <motion.div variants={fadeIn("right", 0.4)} className="w-full md:flex-1">
          <motion.h2 variants={textVariant(0.2)} className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5">
            Future of support with new shape
          </motion.h2>
          <motion.p variants={fadeIn("up", 0.5)} className="text-gray-600 text-lg mb-4 md:w-4/5">
            Discuss your goals, determine success metrics, identify problems
          </motion.p>

          <motion.div variants={fadeIn("up", 0.6)} className="space-y-3">
            {["UX design content strategy", "Development bring"].map((item, index) => (
              <motion.div key={index} variants={fadeIn("right", 0.7 + index / 10)} className="flex items-center gap-2">
                <div className="size-5 rounded-full bg-indigo-100 flex-center">
                  <div className="size-2.5 rounded-full bg-indigo-600" />
                </div>

                <span className="text-gray-600">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            variants={fadeIn("up", 0.9)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 button"
          >
            Get started
          </motion.button>
        </motion.div>

        {/* Service Cards */}
        <motion.div variants={fadeIn("left", 0.4)} className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ id, style, title, icon, description }) => (
            <motion.div
              variants={fadeIn("up", 0.3 * id)}
              key={id}
              className="max-w-72 cursor-pointer rounded-2xl p-6 duration-300 hover:shadow-xl hover:scale-101"
            >
              <motion.div variants={fadeIn("down", 0.4 * id)} className="mb-4">
                <FontAwesomeIcon icon={icon} className={style} />
              </motion.div>
              <motion.h3 variants={textVariant(0.3)} className="text-xl font-semibold mb-2">
                {title}
              </motion.h3>
              <motion.p variants={fadeIn("up", 0.5 * id)} className="text-gray-600 mb-2">
                {description}
              </motion.p>
              <motion.a
                variants={fadeIn("up", 0.6 * id)}
                href="#"
                className="uppercase text-indigo-600 font-semibold transition-colors duration-300 hover:text-indigo-800"
              >
                learn more
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
