import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

export default function Testmonials() {
  const testimonialsConrint = [
    {
      id: 1,
      name: "Robin Ayala Doe",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
      id: 2,
      name: "John De marli",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      id: 3,
      name: "Rowhan Smith",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
      id: 5,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
      id: 6,
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },
  ];

  return (
    <motion.section
      id="Testmonials"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="max-w-7xl mx-auto"
    >
      {/* Heading text */}
      <motion.div variants={fadeIn("up", 0.3)} className="text-center space-y-4 mb-12">
        <motion.h2 variants={textVariant(0.2)} className="text-3xl md:text-4xl text-gray-900 font-bold">
          What our happy client say
        </motion.h2>
        <motion.p variants={fadeIn("up", 0.4)} className="text-lg md:text-xl text-gray-500">
          Things that make it the best place to start trading
        </motion.p>
      </motion.div>

      {/* Testmonials Cards */}
      <motion.div variants={fadeIn("up", 0.5)} className="relative">
        {/* Swiper cards */}
        <Swiper
          navigation={{
            nextEl: "#Swiper-button-next",
            prevEl: "#Swiper-button-prev",
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="TestmonialsSwiper md:mb-12"
        >
          {testimonialsConrint.map(({ id, image, name, text }) => (
            <SwiperSlide key={id} className="h-full py-4 md:py-12 cursor-default">
              <motion.div
                variants={fadeIn("up", 0.3 * id)}
                className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col gap-4"
              >
                <motion.div variants={fadeIn("down", 0.4 * id)} className="size-24 mx-auto mb-4">
                  <motion.img
                    variants={fadeIn("up", 0.5 * id)}
                    src={image}
                    alt={`testimonial ${name} imge`}
                    className="size-full rounded-full object-cover"
                  />
                </motion.div>
                <motion.div variants={fadeIn("up", 0.4 * id)} className="flex justify-center gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.span variants={fadeIn("up", 0.1 * starIndex)}>
                      <FontAwesomeIcon
                        key={starIndex}
                        icon={faStar}
                        size="lg"
                        className="text-blue-500 duration-300 hover:text-amber-300 hover:scale-101"
                      />
                    </motion.span>
                  ))}
                </motion.div>

                <div className="space-y-4">
                  <motion.h3 variants={textVariant(0.3)} className="text-xl md:text-2xl font-bold">
                    {name}
                  </motion.h3>
                  <motion.p variants={fadeIn("up", 0.6 * id)} className="text-gray-600">
                    {text}
                  </motion.p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* naviagational buttons */}
      <motion.div variants={fadeIn("up", 0.7)} className="flex justify-center gap-4 mt-4 md:mt-8">
        <motion.button
          variants={fadeIn("right", 0.8)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="Swiper-button-prev"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="xl" />
        </motion.button>
        <motion.button
          variants={fadeIn("left", 0.8)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="Swiper-button-next"
        >
          <FontAwesomeIcon icon={faChevronRight} size="xl" />
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
