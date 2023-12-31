import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Solutions", href: "#", current: false },
  { name: "Why us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MotionDiv = motion.div;

// Variants for the mobile menu animation
const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  return (
    <Disclosure as="nav" className="font-navfont bg-Orange">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-xl px-6">
            <div className="relative grid grid-cols-12 h-16 items-center justify-between">
              {/* Logo Section */}
              <div className="col-span-6 flex-shrink-0 items-center">
                <div className="h-auto w-auto text-white text-2xl font-extrabold font-montserrat">
                  Orange<span className="text-white opacity-65">Wave</span>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="col-span-6 sm:hidden flex items-center justify-end">
                <Disclosure.Button className="relative inline-flex items-center justify-end rounded-md p-2 text-White hover:bg-Orange hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Navigation Section */}
              <div className="hidden col-span-6 sm:block h-full">
                <div className="flex space-x-4 h-full justify-evenly">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-White"
                          : "text-White hover:text-White",
                        "px-2 py-2 text-sm font-medium h-full flex items-center justify-center "
                      )}
                      aria-current={item.current ? "page" : undefined}>
                      <p>{item.name}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <AnimatePresence>
            {open && (
              <MotionDiv
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.5 }}
                className="sm:hidden col-span-12">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={menuItemVariants}
                      className="mb-2">
                      <Disclosure.Button
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-Orange text-white"
                            : "text-white hover:text-white",
                          "block rounded-md px-2 py-2  font-semibold text-lg"
                        )}
                        aria-current={item.current ? "page" : undefined}>
                        {item.name}
                      </Disclosure.Button>
                    </motion.div>
                  ))}
                </div>
              </MotionDiv>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
}
