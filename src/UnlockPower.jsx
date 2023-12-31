import { motion } from "framer-motion";
import Arrow from "./assets/Arrow.svg";

const UnlockPower = () => {
  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
  };

  return (
    <motion.section
      className="bg-Orange min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <motion.div
          className="flex items-center justify-center h-full"
          variants={textVariants}>
          <div className="mx-auto max-w-screen-md text-start">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl text-white font-montserrat font-extrabold leading-tight sm:leading-[130%]"
              variants={textVariants}>
              Unlock the Power of Seamless Connectivity with Orange Wave
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg mt-4 font-medium leading-[130%] text-white"
              variants={textVariants}>
              Transform Your Network Infrastructure for Enhanced Performance and
              Reliability
            </motion.p>
            <motion.button
              className="mt-4 flex bg-white items-center px-6 py-4 gap-2 text-lg text-Black font-semibold hover:gap-3 leading-[130%]"
              variants={buttonVariants}>
              Learn More{" "}
              <span>
                <img src={Arrow} alt="Arrow" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default UnlockPower;
