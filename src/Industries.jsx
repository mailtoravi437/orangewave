import { motion } from "framer-motion";
import ArrowWhite from "./assets/ArrowWhite.svg";

const Industries = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
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
            className="lg:col-span-7 lg:bg-[#FCF7F3] px-4 lg:px-8 flex items-center"
            variants={textVariants}>
            <div className="max-w-2xl">
              <motion.h1
                className="mb-4 text-3xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none font-montserrat"
                variants={textVariants}>
                Industries we serve
              </motion.h1>
              <motion.p
                className="mb-6 text-gray-500 lg:mb-8 text-base lg:text-lg font-medium dark:text-gray-400 font-montserrat"
                variants={textVariants}>
                Netfra Solutions caters to a wide range of industries, providing
                tailored solutions to meet the unique infrastructure needs of
                each sector. We have extensive experience working with diverse
                organizations, including but not limited to
              </motion.p>
              <motion.button
                className="flex bg-Orange items-center px-6 py-4 hover:gap-3 gap-2 text-lg text-White font-semibold leading-[130%]"
                variants={textVariants}>
                Read More{" "}
                <span>
                  <img src={ArrowWhite} alt="Arrow" />
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="lg:col-span-5 bg-Orange py-8 px-4 lg:px-20"
            variants={listVariants}>
            <ul className="text-white text-lg lg:text-2xl font-extrabold flex flex-col items-start gap-4 font-montserrat">
              <motion.li variants={listVariants}>IT and Technology</motion.li>
              <motion.li variants={listVariants}>
                Healthcare and Life Sciences
              </motion.li>
              <motion.li variants={listVariants}>Finance and Banking</motion.li>
              <motion.li variants={listVariants}>
                E-commerce and Retail
              </motion.li>
              <motion.li variants={listVariants}>
                Manufacturing and Supply Chain
              </motion.li>
              <motion.li variants={listVariants}>
                Government and Public Sector
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Industries;
