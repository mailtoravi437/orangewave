import ArrowWhite from "./assets/ArrowWhite.svg";

const Industries = () => {
  return (
    <div>
      <section className="min-h-screen">
        <div className="grid max-w-screen-xl gap-8 px-4 py-8 mx-auto lg:py-16 lg:grid-cols-12">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 lg:bg-[#FCF7F3] px-4 lg:px-8 flex items-center">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-3xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none font-montserrat">
                Industries we serve
              </h1>
              <p className="mb-6 text-gray-500 lg:mb-8 text-base lg:text-lg font-medium dark:text-gray-400 font-montserrat">
                Netfra Solutions caters to a wide range of industries, providing
                tailored solutions to meet the unique infrastructure needs of
                each sector. We have extensive experience working with diverse
                organizations, including but not limited to
              </p>
              <button className="flex bg-Orange items-center px-6 py-4 gap-2 text-lg text-White font-semibold leading-[130%]">
                Read More{" "}
                <span>
                  <img src={ArrowWhite} alt="Arrow" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-5 bg-Orange py-8 px-4 lg:px-20">
            <ul className="text-white text-lg lg:text-2xl font-extrabold flex flex-col items-start gap-4 font-montserrat">
              <li>IT and Technology</li>
              <li>Healthcare and Life Sciences</li>
              <li>Finance and Banking</li>
              <li>E-commerce and Retail</li>
              <li>Manufacturing and Supply Chain</li>
              <li>Government and Public Sector</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
