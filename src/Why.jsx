]import { motion } from "framer-motion";
import ArrowWhite from "./assets/ArrowWhite.svg";
import Expertise from "./assets/Expertise.svg";
import TailoredSolution from "./assets/TailoredSolution.svg";
import Scalability from "./assets/Scalability.svg";
import CustomerSatisfaction from "./assets/CustomerSatisfaction.svg";

const data = [
  {
    image: Expertise,
    heading: "Expertise",
    text: "Our team comprises highly skilled professionals with extensive experience in cloud technology and infrastructure management.",
  },
  {
    image: TailoredSolution,
    heading: "Tailored Solutions",
    text: "We understand that each business has its own requirements. That's why we offer customized solutions that align with your specific goals.",
  },
  {
    image: Scalability,
    heading: "Scalability",
    text: "As your business grows, our solutions scale with you, providing the flexibility to adapt and expand effortlessly.",
  },
  {
    image: CustomerSatisfaction,
    heading: "Customer Satisfaction",
    text: "We are committed to delivering exceptional customer service, working closely with you to ensure your complete satisfaction.",
  },
];

const Why = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <motion.section
        className="bg-White dark:bg-gray-900"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <div className="grid max-w-screen-xl py-8 px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:flex">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8"
              variants={containerVariants}>
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col mb-8 lg:mb-0"
                  variants={itemVariants}>
                  <motion.img
                    src={item.image}
                    alt={item.heading}
                    className="w-full h-64 object-cover rounded-2xl mb-2"
                    variants={itemVariants}
                  />
                  <motion.h3
                    className="text-left text-xl lg:text-2xl font-extrabold font-montserrat text-gray-900 mb-2"
                    variants={itemVariants}>
                    {item.heading}
                  </motion.h3>
                  <motion.p
                    className="text-left font-medium text-base font-montserrat text-gray-500 opacity-65"
                    variants={itemVariants}>
                    {item.text}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            className="lg:col-span-5 px-4 lg:px-10"
            variants={containerVariants}>
            <motion.h1
              className="max-w-2xl mb-4 text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none dark:text-white font-montserrat"
              variants={itemVariants}>
              Why choose Orange Wave?
            </motion.h1>
            <motion.p
              className="max-w-2xl mb-6  text-gray-500 lg:mb-8 font-medium text-base dark:text-gray-400 font-montserrat"
              variants={itemVariants}>
              Orange Wave, a subsidiary of Cloudextel, is a trusted provider of
              advanced networking solutions. We specialize in delivering
              cutting-edge technologies and expert network services to
              businesses of all sizes. With Orange Wave, you can optimize your
              network infrastructure, improve connectivity, and ensure smooth
              operations in the digital era.
            </motion.p>
            <motion.button
              className="mt-4 flex bg-Orange items-center px-6 py-4 gap-2 hover:gap-3 text-lg text-White font-semibold leading-[130%]"
              variants={itemVariants}>
              Read More{" "}
              <span>
                <img src={ArrowWhite} alt="Arrow" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Why;
