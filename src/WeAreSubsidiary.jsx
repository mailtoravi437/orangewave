import ArrowWhite from "./assets/ArrowWhite.svg";
import CloudExtel from "./assets/CloudExtel.svg";

const WeAreSubsidiary = () => {
  return (
    <div>
      <section className="min-h-screen">
        <div className="grid max-w-screen-xl gap-8 px-4 py-8 mx-auto lg:py-16 lg:grid-cols-12">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 px-4 lg:px-8 flex items-center">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-3xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none font-montserrat">
                We’re subsidiary of{" "}
                <span className="text-Orange">Cloudextel</span>
              </h1>
              <p className="mb-6 text-gray-500 lg:mb-8 text-base lg:text-lg font-medium dark:text-gray-400 font-montserrat">
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
          <div className="lg:col-span-5 flex items-center justify-center">
            <img
              src={CloudExtel}
              className="h-auto w-full max-w-lg"
              alt="CloudExtel"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeAreSubsidiary;
