import Container from "./Container";
import logo from "../assets/images/logo.png";
import { FaAngleDown } from "react-icons/fa";
import { CiShoppingBasket, CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="bg-white shadow-sm">
        <Container>
          <nav className=" ">
            <div className="flex items-center justify-between mx-auto p-4">
              {/* logo section start */}
              <div>
                <a
                  href="/"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <img src={logo} className="h-8" alt="Flowbite Logo" />
                </a>
              </div>
              {/* menu section start */}

              <ul className="font-primary flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-[22px] rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800">
                <li>
                  <a
                    href="#"
                    className="py-2 px-3 md:p-0 text-primary bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 flex gap-[22px] items-center hover:text-primary transition-all duration-75 ease-in-out"
                    aria-current="page"
                  >
                    Home
                    <span>
                      <FaAngleDown />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 px-3 md:p-0 text-menuColor bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 flex gap-[22px] items-center hover:text-primary transition-all duration-75 ease-in-out"
                    aria-current="page"
                  >
                    Courses
                    <span>
                      <FaAngleDown />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 px-3 md:p-0 text-menuColor bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 flex gap-[22px] items-center hover:text-primary transition-all duration-75 ease-in-out"
                    aria-current="page"
                  >
                    Blog
                    <span>
                      <FaAngleDown />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 px-3 md:p-0 text-menuColor bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 flex gap-[22px] items-center hover:text-primary transition-all duration-75 ease-in-out"
                    aria-current="page"
                  >
                    Shop
                    <span>
                      <FaAngleDown />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 px-3 md:p-0 text-menuColor bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 flex gap-[22px] items-center hover:text-primary transition-all duration-75 ease-in-out"
                    aria-current="page"
                  >
                    Pages
                    <span>
                      <FaAngleDown />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 px-3 md:p-0 text-menuColor bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 flex gap-[22px] items-center hover:text-primary transition-all duration-75 ease-in-out"
                    aria-current="page"
                  >
                    Events
                    <span>
                      <FaAngleDown />
                    </span>
                  </a>
                </li>
              </ul>

              {/* menu section end */}

              <div className="flex gap-x-7 items-center">
                <div className="relative">
                  <CiShoppingBasket size={24} />
                  <div className="size-6 absolute top-[-10px] right-[-10px] bg-primary text-white rounded-full flex items-center justify-center">
                    0
                  </div>
                </div>
                <FaRegUserCircle size={24} />
                <CiSearch size={24} />
              </div>

              <div className="flex gap-x-[39px] items-center">
                <a
                  href="/"
                  className="font-primary font-semibold text-[20px] underline "
                >
                  Login
                </a>
                <button className="font-primary text[20px] text-white font-semibold py-[18px] px-8 bg-gradient-to-r from-bgPrimary to-bgSecondary rounded-[10px] ">
                  Sign In
                </button>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
