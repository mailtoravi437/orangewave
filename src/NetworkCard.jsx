import { motion } from "framer-motion";
import Cloud from "./assets/cloud.svg";
import Lock from "./assets/lock.svg";
import Setting from "./assets/setting.svg";

const data = [
  {
    icon: Cloud,
    heading: "Network Design and Implementation",
    text: "Comprehensive assessment and design of network architectures tailored to your business requirements.",
  },
  {
    icon: Lock,
    heading: "Network Security Solutions",
    text: "Identification and mitigation of security risks through robust firewall solutions, intrusion detection systems, and access controls.",
  },
  {
    icon: Setting,
    heading: "Network Optimization and Performance",
    text: "Evaluation and optimization of network performance, including bandwidth utilization, latency reduction, and Quality of Service (QoS) improvements.",
  },
];

const NetworkCard = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex flex-row flex-wrap p-4 md:p-8"
      variants={cardVariants}
      initial="hidden"
      animate="visible">
      {data.map((item, index) => (
        <motion.div
          key={index}
          className="w-full md:w-1/3 p-4"
          variants={cardVariants}>
          <div className="items-center">
            <motion.div className="flex flex-col md:flex-row gap-4 items-center">
              <motion.img
                src={item.icon}
                className="flex w-14 h-14 justify-center items-center p-3.5 bg-Orange rounded-full"
                whileHover={{ scale: 1.1 }}
              />
              <motion.h3 className="text-xl font-extrabold font-montserrat">
                {item.heading}
              </motion.h3>
            </motion.div>
            <motion.div className="flex flex-col mt-2 md:mt-4">
              <motion.p className="text-base font-medium opacity-65 font-montserrat">
                {item.text}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default NetworkCard;
