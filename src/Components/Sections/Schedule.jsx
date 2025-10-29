import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import stats from "../../assets/stats.webp";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

export default function Schedule() {
  return (
    <motion.section
      id="Schedule"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div>
        {/* Right side - Image */}
        <motion.div variants={fadeIn("right", 0.3)}>
          <motion.img variants={fadeIn("up", 0.4)} src={stats} alt="stats" loading="lazy" />
        </motion.div>

        {/* Left side - Content */}
        <motion.div variants={fadeIn("left", 0.3)}>
          <motion.span variants={fadeIn("up", 0.4)}>schedule</motion.span>
          <motion.h2 variants={textVariant(0.5)}>
            Streamline Your Business <br />
            With Smart Scheduling Solutions.
          </motion.h2>
          <motion.p variants={fadeIn("up", 0.6)}>
            Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage
            team availability, and deliver exceptional customer experiences through seamless calendar management.
          </motion.p>
          <motion.a variants={fadeIn("up", 0.7)} href="#">
            Explore scheduling features
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
