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
            <div className="relative grid grid-cols-12 h-16 items-center justify-between">
              {/* Logo Section */}
              <div className="col-span-6 flex-shrink-0 items-center ">
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
          <Disclosure.Panel className="sm:hidden col-span-12">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
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
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
