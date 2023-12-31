import AboutImage from "./assets/About.png";
import ArrowWhite from "./assets/ArrowWhite.svg";

const About = () => {
  return (
    <div>
      <section className="min-h-screen py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 lg:bg-[#FCF7F3] px-4 lg:px-8 flex items-center">
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
              <button className="flex bg-Orange items-center px-6 py-4 gap-2 text-lg text-White font-semibold leading-[130%]">
                Learn More{" "}
                <span>
                  <img src={ArrowWhite} alt="Arrow" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-5 flex items-center">
            <img
              src={AboutImage}
              className="h-full w-full object-left-top lg:ml-0 lg:mt-0 lg:pr-0"
              alt="About Image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
