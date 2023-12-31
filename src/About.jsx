import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AboutImage from "./assets/About.png";
import ArrowWhite from "./assets/ArrowWhite.svg";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <motion.section
        className="min-h-screen py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
        ref={ref}
        animate={controls}>
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Column - Text Content */}
          <motion.div
            className="lg:col-span-7 lg:bg-[#FCF7F3] px-4 lg:px-8 flex items-center"
            variants={textVariants}>
            <div className="max-w-2xl">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white font-montserrat">
                About Orange Wave
              </h1>
              <p className="mb-6 text-gray-500 lg:mb-8 text-base font-medium dark:text-gray-400 font-montserrat">
                Orange Wave, a subsidiary of Cloudextel, is a trusted provider
                of advanced networking solutions. We specialize in delivering
                cutting-edge technologies and expert network services to
                businesses of all sizes. With Orange Wave, you can optimize your
                network infrastructure, improve connectivity, and ensure smooth
                operations in the digital era.
              </p>
              <motion.button
                className="flex bg-Orange items-center px-6 py-4 gap-2 text-lg text-White font-semibold hover:gap-3 leading-[130%]"
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
            className="lg:col-span-5 flex items-center"
            variants={textVariants}>
            <img
              src={AboutImage}
              className="h-full w-full object-left-top lg:ml-0 lg:mt-0 lg:pr-0"
              alt="About Image"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
