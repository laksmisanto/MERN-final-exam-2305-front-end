import React from "react";
import Container from "./Container";
import Grid from "./Grid";
import logo from "../assets/images/footer-logo.png";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-footerBgTop to-footerBgBottom pt-28 pb-5">
        <Container className="py-0">
          <Grid className=" grid-cols-1 lg:grid-cols-5 gap-y-10 gap-x-32">
            <div className="col-span-2">
              <div className="w-48">
                <img src={logo} alt="Footer logo" className="w-full h-auto" />
              </div>
              <p className="font-primary font-regular text-base lg:text-lg text-white mt-6 lg:mt-8 2xl:mt-16">
                Veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{" "}
              </p>
            </div>
            <div>
              <h4 className="font-secondary font-bold text-xl lg:text-2xl text-white">
                Quick Links
              </h4>
              <Grid className="grid-cols-1 lg:grid-cols-2 mt-6 lg:mt-10 xl:mt-14 2xl:mt-20 gap-y-3 lg:gap-y-5">
                <a
                  href="#"
                  className="font-primary font-medium text-base lg:text-lg text-white"
                >
                  About
                </a>
                <a
                  href="#"
                  className="font-primary font-medium text-base lg:text-lg text-white"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="font-primary font-medium text-base lg:text-lg text-white"
                >
                  Course
                </a>
                <a
                  href="#"
                  className="font-primary font-medium text-base lg:text-lg text-white"
                >
                  Contact
                </a>
              </Grid>
            </div>
            <div className="col-span-2">
              <h4 className="font-secondary font-bold text-xl lg:text-2xl text-white">
                Quick Links
              </h4>
              <div className="flex justify-between items-center flex-wrap mt-6 lg:mt-10 xl:mt-14 2xl:mt-20 gap-y-5">
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                  <div>
                    <IoCallOutline className="text-xl text-white" />
                  </div>
                  <p className="font-primary font-regular text-base lg:text-lg text-white">
                    +8801 79394 0504
                  </p>
                </div>
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                  <div>
                    <IoMailOutline className="text-xl text-white" />
                  </div>
                  <p className="font-primary font-regular text-base lg:text-lg text-white">
                    laksmisanto1998@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-4 lg:gap-x-6 mt-4 lg:mt-6">
                <div>
                  <IoLocationOutline className="text-xl text-white" />
                </div>
                <p className="font-primary font-regular text-base lg:text-lg text-white">
                  Girls college Road, Circuit House Thakurgaon Sadar,
                  Thakurgaon.
                </p>
              </div>
            </div>
          </Grid>
          {/*======================= Copyright Section Start =======================*/}
          <Grid className="grid-cols-1 sm:grid-cols-2 mt-12 lg:mt-16 2xl:mt-24 gap-y-5 sm:gap-y-0">
            <p className="font-primary font-regular text-sm text-white justify-self-center sm:justify-self-start">
              Copyright 2023 | All Rights Reserved
            </p>
            <div className="flex items-center justify-self-center sm:justify-self-end gap-x-2 md:gap-x-3 xl:gap-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="p-1"
              >
                <FaFacebookF className="text-sm text-white" />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                className="p-1"
              >
                <FaTwitter className="text-sm text-white" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="p-1"
              >
                <FaInstagram className="text-sm text-white" />
              </a>
              <a
                href="https://www.behance.com/"
                target="_blank"
                className="p-1"
              >
                <FaBehance className="text-sm text-white" />
              </a>
              <a
                href="https://www.dribble.com/"
                target="_blank "
                className="p-1"
              >
                <FaDribbble className="text-sm text-white" />
              </a>
            </div>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Footer;
