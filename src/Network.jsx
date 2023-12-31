import NetworkCard from "./NetworkCard";

const Network = () => {
  return (
    <>
      <section className="min-h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="flex items-center justify-center h-full">
            <div className="mx-auto max-w-screen-md text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-Black font-montserrat font-extrabold leading-[130%]">
                {/* Adjusted font sizes with responsive classes */}
                Our Network Solutions
              </h1>
              <p className="text-base sm:text-lg mt-4 text-Black font-medium leading-[130%] opacity-65">
                {/* Adjusted font sizes with responsive classes */}
                At Orange Wave, we offer a comprehensive suite of network
                solutions designed to meet your organization's unique
                connectivity needs. Our team of experts combines deep industry
                knowledge with state-of-the-art technologies to deliver tailored
                services that drive efficiency, security, and scalability. Our
                services include
              </p>
            </div>
          </div>
          <div className="mt-16">
            <NetworkCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Network;
