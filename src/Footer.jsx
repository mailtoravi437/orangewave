import pointer from "./assets/pointer.svg";
const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-Black md:p-8 lg:p-10 container">
        <div className="mx-auto grid grid-cols-12 gap-4 max-w-screen-xl py-10 text-center">
          <div className="col-span-12 sm:col-span-4">
            <a
              href="#"
              className="flex justify-center pb-3 lg:justify-start items-center font-montserrat text-xl font-extrabold text-white">
              Orange wave Pvt. Ltd.
            </a>
            <div className="flex flex-row gap-2">
              <img src={pointer} alt={"pointer"} className="text-Orange " />
              <div className="font-medium font-montserrat text-white opacity-65 text-xs text-left">
                The Ruby, 11th Floor, AWFIS, Dadar (West), Mumbai, Maharashtra -
                400028{" "}
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-4">
            <ul className="flex flex-wrap justify-evenly items-center mb-6 text-white opacity-65 text-base font-semibold">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-4">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 Bombay Gas Ventures Pvt. Ltd. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
