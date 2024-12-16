import { useState } from "react";
import { FaAngleDown } from "react-icons/fa"; // Importing icons
import Container from "./Container";
import logo from "../assets/images/logo.png";
import { CiShoppingBasket } from "react-icons/ci";
import { HiOutlineSearch, HiOutlineUserCircle } from "react-icons/hi";

const Navbar = () => {
  const MenuData = [
    { name: "Home", href: "#", current: true },
    { name: "Courses", href: "#", current: false },
    { name: "Blog", href: "#", current: false },
    { name: "Shop", href: "#", current: false },
    { name: "Pages", href: "#", current: false },
    { name: "Events", href: "#", current: false },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu for mobile view
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="relative bg-white ">
      <Container>
        <nav className="bg-white">
          <div className="py-3 flex justify-between items-center">
            {/* Mobile Menu Toggle */}
            <button
              className={classNames(
                isMenuOpen ? "text-primary" : "text-menuColor",
                "xl:hidden hover:text-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              )}
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="w-auto h-8 lg:h-10" />{" "}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex space-x-5">
              {MenuData.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? " text-primary"
                      : "text-menuColor hover:text-primary ",
                    "font-primary font-semibold text-lg p-1 flex gap-x-2 2xl:gap-x-5 items-center transition-all duration-75 ease-in-out"
                  )}
                >
                  {item.name}
                  <FaAngleDown className="text-xl" />{" "}
                </a>
              ))}
            </div>

            {/* Icons Section */}
            <div className="flex items-center space-x-1 md:space-x-2 lg:space-x-3">
              <button
                type="button"
                className="relative rounded-full p-1 text-menuColor hover:text-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <CiShoppingBasket aria-hidden="true" className="size-6" />
                <span className="absolute -top-2 -right-2  inline-flex items-center justify-center rounded-full bg-primary px-2 py-1 text-xs font-bold leading-none text-white">
                  0
                </span>
              </button>
              <button
                type="button"
                className="relative rounded-full p-1 text-menuColor hover:text-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <HiOutlineUserCircle aria-hidden="true" className="size-6" />
              </button>
              <button
                type="button"
                className="relative rounded-full  p-1 text-menuColor hover:text-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <HiOutlineSearch aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Login & SignUp Button (Desktop) */}
            <div className="hidden sm:flex space-x-4">
              <button
                type="button"
                className="font-primary font-medium text-base md:text-lg xl:text-xl underline p-1 text-menuColor hover:text-primary "
              >
                Login
              </button>
              <button
                type="button"
                className="font-primary font-medium text-base md:text-lg xl:text-xl text-white py-2 px-4 md:py-3 md:px-6 xl:py-4 xl:px-8 bg-gradient-to-r from-bgPrimary to-bgSecondary rounded-md md:rounded-lg xl:rounded-xl  "
              >
                Sign in
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } xl:hidden bg-white w-full sm:w-1/2 lg:w-1/3 sm:absolute h-screen left-0 top-1 sm:top-16 md:top-[76px] z-50 pl-0 sm:pl-12 lg:pl-14 xl:pl-0 py-6`}
          >
            <div className="flex flex-col items-center sm:items-start py-4">
              {MenuData.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? " text-primary"
                      : "text-menuColor hover:text-primary ",
                    "font-primary font-semibold text-lg p-1 flex gap-x-2 2xl:gap-x-5 items-center transition-all duration-75 ease-in-out"
                  )}
                >
                  {item.name}
                  <FaAngleDown className="text-xl" />{" "}
                </a>
              ))}

              <div className="sm:hidden flex items-center justify-center space-x-6 mt-6">
                <button
                  type="button"
                  className="font-primary font-medium text-base underline p-1 text-menuColor hover:text-primary "
                >
                  Login
                </button>
                <button
                  type="button"
                  className="font-primary font-medium text-base text-white py-2 px-4 bg-gradient-to-r from-bgPrimary to-bgSecondary rounded-md  "
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
