import Container from "./Container";
import Grid from "./Grid";
import { CiSearch } from "react-icons/ci";
import bannerImage from "../assets/images/banner-image.png";
import imageShadow from "../assets/images/image-shadow.png";
import bannerLeftEffect from "../assets/images/banner-left-effect.png";
import { FaQuoteLeft } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";
import client6 from "../assets/images/client6.png";

const Banner = () => {
  return (
    <>
      <div className="relative bg-gradient-to-tr from-bannerSecondary  to-bannerPrimary bg-opacity-10 w-full min-h-[90vh]">
        <Container>
          <Grid className="grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-8 self-center">
            <div className="self-center">
              <p className="font-primary font-semibold text-lg text-white tracking-[3px] mb-[63px]">
                Successful coaches are visionaries
              </p>
              <h1 className="font-secondary font-regular text-[80px] leading-[90px]  text-white">
                Good <span className="text-primary">coaching</span> is good
                teaching & nothing else.
              </h1>
              <div className="flex items-center gap-x-8 mt-24">
                <button className="font-primary font-semibold text-lg text-white tracking-[1px] py-[22px] px-8 border-2 rounded-[5px] border-white ">
                  View Course
                </button>
                <a
                  href="/"
                  className="font-primary font-semibold text-lg text-white"
                >
                  Get Free Consultation
                </a>
              </div>
              {/* banner input section start */}
              <div className="w-[490px] mt-16">
                <div className="flex items-center bg-white rounded-[7px] p-[10px]">
                  <input
                    type="text"
                    placeholder="What do you want to learn today?"
                    className="font-primary text-base w-full bg-transparent px-8 py-4 outline-none"
                  />
                  <button className="font-primary font-regular text-base text-white flex items-center px-8 py-4 gap-x-3 bg-gradient-to-l from-bgSecondary to-bgPrimary rounded-[10px] ">
                    <CiSearch size={20} />
                    Search
                  </button>
                </div>
              </div>
            </div>
            {/* banner image section start */}
            <div className="relative w-full justify-self-end">
              <img
                src={bannerImage}
                alt=""
                className="w-full right-0 mx-auto relative z-20"
              />
              <img
                src={imageShadow}
                alt=""
                className="w-full h-full absolute right-0 top-0 "
              />
              <div className="absolute top-1/4 left-0 border-l-2 pl-8 border-primary w-72 z-40">
                <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white absolute -left-4 top-1/2 -translate-y-1/2 outline-[4px] outline-gray ">
                  <FaQuoteLeft />
                </div>
                <h4 className="font-secondary font-semibold text-base text-white">
                  Ronald Richards
                </h4>
                <p className="font-primary font-regular text-base text-white">
                  In a coaching role, you ask the questions and rely more on
                  your staff, who become the experts, to provide the
                  information.
                </p>

                <div className="flex items-center gap-x-2 mt-2">
                  <h4 className="font-primary font-semibold text-base text-white">
                    4.5
                  </h4>
                  <Rating
                    name=""
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                    backgroundColor={"#FFFFFF"}
                  />
                </div>
              </div>
            </div>
            {/* banner image section end */}
            {/* Banner Effect start */}
            <div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2">
                <img
                  src={bannerLeftEffect}
                  alt="banner left effect"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </Grid>
        </Container>
      </div>
      {/* our Client list section start */}
      <div className="bg-gradient-to-bl from-[#084FC7] to-[#084ec771] py-12">
        <Container>
          <div className="flex items-center justify-center gap-x-36 ">
            <img src={client1} alt="Client images" className="w-full h-auto" />
            <img src={client2} alt="Client images" className="w-full h-auto" />
            <img src={client3} alt="Client images" className="w-full h-auto" />
            <img src={client4} alt="Client images" className="w-full h-auto" />
            <img src={client5} alt="Client images" className="w-full h-auto" />
            <img src={client6} alt="Client images" className="w-full h-auto" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
