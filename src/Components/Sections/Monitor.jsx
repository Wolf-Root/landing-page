import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MonitorImage from "../../assets/monitor-card.webp";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

export default function Monitor() {
  return (
    <motion.section
      id="Monitor"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div>
        {/* Left side - Content */}
        <motion.div variants={fadeIn("right", 0.3)}>
          <motion.span variants={fadeIn("up", 0.4)} className="text-green-500">
            Monitor
          </motion.span>
          <motion.h2 variants={textVariant(0.5)}>Introducing best mobile carousels.</motion.h2>
          <motion.p variants={fadeIn("up", 0.6)}>
            Before the ship is really back. Round, mund, all around the world. Round, all around the world. Round, all around the
            world. Round, all around the world.
          </motion.p>
          <motion.a variants={fadeIn("up", 0.7)} href="#">
            Leran more about monitoring
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </motion.a>
        </motion.div>

        {/* Right side - Image */}
        <motion.div variants={fadeIn("left", 0.3)}>
          <motion.div variants={fadeIn("up", 0.4)} className="p-4">
            <motion.img variants={fadeIn("up", 0.5)} src={MonitorImage} alt="Monitor" loading="lazy" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
