import { motion } from "framer-motion";
import ArrowWhite from "./assets/ArrowWhite.svg";
import CloudExtel from "./assets/CloudExtel.svg";

const WeAreSubsidiary = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.4 },
    },
  };

  return (
    <div>
      <motion.section
        className="min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <div className="grid max-w-screen-xl gap-8 px-4 py-8 mx-auto lg:py-16 lg:grid-cols-12">
          {/* Left Column - Text Content */}
          <motion.div
            className="lg:col-span-7 px-4 lg:px-8 flex items-center"
            variants={textVariants}>
            <div className="max-w-2xl">
              <motion.h1
                className="mb-4 text-3xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none font-montserrat"
                variants={textVariants}>
                We’re subsidiary of{" "}
                <span className="text-Orange">Cloudextel</span>
              </motion.h1>
              <motion.p
                className="mb-6 text-gray-500 lg:mb-8 text-base lg:text-lg font-medium dark:text-gray-400 font-montserrat"
                variants={textVariants}>
                Our robust infrastructure ensures reliable connectivity, minimal
                downtime, and consistent performance, giving you peace of mind.
              </motion.p>
              <motion.button
                className="flex bg-Orange items-center px-6 py-4 gap-2 text-lg text-White font-semibold leading-[130%]"
                variants={textVariants}>
                Learn More{" "}
                <span>
                  <img src={ArrowWhite} alt="Arrow" />
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="lg:col-span-5 flex items-center justify-center"
            variants={imageVariants}>
            <motion.img
              src={CloudExtel}
              className="h-auto w-full max-w-lg"
              alt="CloudExtel"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default WeAreSubsidiary;
