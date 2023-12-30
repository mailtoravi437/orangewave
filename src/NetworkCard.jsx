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
  return (
    <div className="flex flex-row flex-wrap p-8">
      {data.map((item, index) => (
        <div key={index} className="w-full md:w-1/3 p-4">
          <div className="items-center">
            {" "}
            {/* Applied border classes here */}
            <div className="flex flex-row gap-4">
              <img
                src={item.icon}
                className="flex w-14 h-14 justify-center items-center p-3.5 bg-Orange rounded-full"
              />
              <h3 className="text-xl font-extrabold font-montserrat">
                {item.heading}
              </h3>
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-base font-medium opacity-65 font-montserrat">
                {item.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NetworkCard;
