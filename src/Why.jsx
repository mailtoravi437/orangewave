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
  return (
    <div>
      <section className="bg-White dark:bg-gray-900">
        <div className="grid max-w-screen-xl py-8 px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
              {data.map((item, index) => (
                <div key={index} className="flex flex-col mb-8 lg:mb-0">
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="w-full h-64 object-cover rounded-lg mb-2"
                  />
                  <h3 className="text-left text-xl lg:text-2xl font-extrabold font-montserrat text-gray-900 mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-left font-medium text-base font-montserrat text-gray-900 opacity-65">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 px-4 lg:px-8">
            <h1 className="max-w-2xl mb-4 text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none dark:text-white font-montserrat">
              Why choose Orange Wave?
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 font-medium text-base dark:text-gray-400 font-montserrat">
              Orange Wave, a subsidiary of Cloudextel, is a trusted provider of
              advanced networking solutions. We specialize in delivering
              cutting-edge technologies and expert network services to
              businesses of all sizes. With Orange Wave, you can optimize your
              network infrastructure, improve connectivity, and ensure smooth
              operations in the digital era.
            </p>
            <button className="mt-4 flex bg-Orange items-center px-6 py-4 gap-2 text-lg text-White font-semibold leading-[130%]">
              Read More{" "}
              <span>
                <img src={ArrowWhite} alt="Arrow" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why;
