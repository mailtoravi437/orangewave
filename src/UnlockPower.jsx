import Arrow from "./assets/Arrow.svg";

const UnlockPower = () => {
  return (
    <>
      <section className="bg-Orange h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="flex items-center justify-center h-full">
            {" "}
            <div className="mx-auto max-w-screen-md">
              <h1 className="text-6xl text-white font-montserrat font-extrabold leading-[130%]">
                Unlock the Power of Seamless Connectivity with Orange Wave
              </h1>
              <p className="text-lg mt-4 font-medium leading-[130%] text-white">
                Transform Your Network Infrastructure for Enhanced Performance
                and Reliability
              </p>
              <button className="mt-4 flex bg-white items-center px-6 py-4 gap-2 text-lg text-Black font-semibold leading-[130%]">
                Learn More{" "}
                <span>
                  <img src={Arrow} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UnlockPower;
