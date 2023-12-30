import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
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

export default function Navbar() {
  return (
    <Disclosure as="nav" className="font-navfont bg-Orange">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-xl px-6">
            <div className="relative grid grid-cols-2 items-center justify-center">
              {/* Logo Section */}
              <div className="col flex-shrink-0 pt-4 justify-start">
                {" "}
                {/* Adjusted classes */}
                <div className="text-white font-extrabold text-2xl font-montserrat">
                  Orange<span className="text-white opacity-70">Wave</span>
                </div>
              </div>

              {/* Navigation Section */}
              <div className="col h-full">
                <div className="flex space-x-4 h-full justify-evenly">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-white"
                          : "text-white hover:text-white",
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
          {/* ... (rest of the code) */}
        </>
      )}
    </Disclosure>
  );
}
