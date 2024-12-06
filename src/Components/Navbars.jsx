import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CiShoppingBasket } from "react-icons/ci";
import { HiOutlineSearch, HiOutlineUserCircle } from "react-icons/hi";
import Container from "./Container";
import logo from "../assets/images/logo.png";
import { FaAngleDown } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Courses", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Shop", href: "#", current: false },
  { name: "Pages", href: "#", current: false },
  { name: "Events", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbars = () => {
  return (
    <>
      <div className="bg-white shadow border-b-2 border-black py-2">
        <Container>
          <Disclosure as="nav" className="bg-white">
            <div className=" ">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-menuColor hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon
                      aria-hidden="true"
                      className="block size-6 group-data-[open]:hidden"
                    />
                    <XMarkIcon
                      aria-hidden="true"
                      className="hidden size-6 group-data-[open]:block"
                    />
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex shrink-0 items-center">
                    <img alt="Your Company" src={logo} className="h-8 w-auto" />
                  </div>
                  <div className="hidden sm:ml-6  xl:ml-10 2xl:ml-36 sm:block">
                    <div className="flex space-x-5">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          aria-current={item.current ? "page" : undefined}
                          className={classNames(
                            item.current
                              ? " text-primary"
                              : "text-menuColor hover:text-primary ",
                            "font-primary font-semibold text-lg p-1 flex gap-x-5 items-center transition-all duration-75 ease-in-out"
                          )}
                        >
                          {item.name}
                          <FaAngleDown size={20} />{" "}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute lg:flex lg:gap-x-7 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6  sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full p-1 text-menuColor hover:text-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <CiShoppingBasket aria-hidden="true" className="size-6" />
                    <span className="absolute -top-2 -right-2  inline-flex items-center justify-center rounded-full bg-primary px-2 py-1 text-xs font-bold leading-none text-white">
                      0
                    </span>
                  </button>
                  <button
                    type="button"
                    className="relative rounded-full p-1 text-menuColor hover:text-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <HiOutlineUserCircle
                      aria-hidden="true"
                      className="size-6"
                    />
                  </button>
                  <button
                    type="button"
                    className="relative rounded-full  p-1 text-menuColor hover:text-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <HiOutlineSearch aria-hidden="true" className="size-6" />
                  </button>
                </div>
                <div className="absolute lg:flex lg:gap-x-10 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 lg:ml-10 2xl:ml-28 sm:pr-0">
                  <button
                    type="button"
                    className="font-primary font-medium text-xl underline p-1 text-menuColor hover:text-primary "
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="font-primary font-medium text-xl text-white py-4 px-8 bg-gradient-to-r from-bgPrimary to-bgSecondary rounded-[10px]  "
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>
            {/* for mobile menu start */}
            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? " text-primary"
                        : "text-menuColor hover:text-primary",
                      "block p1 font-primary font-semibold text-lg transition-all duration-75 ease-in-out"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </Disclosure>
        </Container>
      </div>
    </>
  );
};

export default Navbars;
