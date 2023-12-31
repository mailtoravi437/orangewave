import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import NetworkCard from "./NetworkCard";

const Network = () => {
  const containerControls = useAnimation();
  const textControls = useAnimation();
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("networkSection");
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the element is in the viewport
        if (rect.top < windowHeight && rect.bottom >= 0) {
          containerControls.start({ opacity: 1, y: 0 });
          textControls.start({ opacity: 1, y: 0 });
        } else {
          containerControls.start({ opacity: 0, y: 20 });
          textControls.start({ opacity: 0, y: 20 });
        }
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Initial check on mount
    handleScroll();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [containerControls, textControls]);

  return (
    <motion.section
      id="networkSection"
      className="min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={containerControls}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <motion.div
          className="flex items-center justify-center h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={textControls}>
          <div className="mx-auto max-w-screen-md text-center">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl text-Black font-montserrat font-extrabold leading-[130%]"
              variants={textVariants}>
              Our Network Solutions
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg mt-4 text-Black font-medium leading-[130%] opacity-65"
              variants={textVariants}>
              At Orange Wave, we offer a comprehensive suite of network
              solutions designed to meet your organization's unique connectivity
              needs. Our team of experts combines deep industry knowledge with
              state-of-the-art technologies to deliver tailored services that
              drive efficiency, security, and scalability. Our services include
            </motion.p>
          </div>
        </motion.div>
        <motion.div className="mt-16" variants={textVariants}>
          <NetworkCard />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Network;
