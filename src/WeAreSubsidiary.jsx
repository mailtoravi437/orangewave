import ArrowWhite from "./assets/ArrowWhite.svg";
import CloudExtel from "./assets/CloudExtel.svg";

const WeAreSubsidiary = () => {
  return (
    <div>
      <section>
        <div className="grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 px-8 flex items-center">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white font-montserrat">
                We’re subsidiary of{" "}
                <span className="text-Orange">Cloudextel</span>
              </h1>
              <p className="mb-6 text-gray-500 lg:mb-8 text-base font-medium dark:text-gray-400 font-montserrat">
                Our robust infrastructure ensures reliable connectivity, minimal
                downtime, and consistent performance, giving you peace of mind.
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
          <div className="lg:col-span-5 ">
            <img src={CloudExtel} className="h-auto w-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeAreSubsidiary;
