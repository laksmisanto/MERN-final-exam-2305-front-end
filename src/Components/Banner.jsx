import Container from "./Container";
import Grid from "./Grid";
import { CiSearch } from "react-icons/ci";
import bannerImage from "../assets/images/banner-image.png";
import imageShadow from "../assets/images/image-shadow.png";
import bannerLeftEffect from "../assets/images/banner-left-effect.png";
import { FaQuoteLeft } from "react-icons/fa";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";
import client6 from "../assets/images/client6.png";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Banner = () => {
  const RattingStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#FAB437",
    inactiveFillColor: "#CBC2FF",
  };
  return (
    <>
      <div className="relative bg-gradient-to-tr from-bannerSecondary  to-bannerPrimary bg-opacity-10 w-full min-h-[90vh]">
        <Container className=" pt-12 lg:pt-0">
          <Grid className="grid-cols-1 lg:grid-cols-2  lg:gap-y-0 lg:gap-x-8 lg:self-center">
            <div className="relative z-10 self-center">
              <p className="font-primary font-semibold text-sm lg:text-lg text-white tracking-[1px] lg:tracking-[3px] mb-8 lg:mb-12 2xl:mb-16 text-center lg:text-left">
                Successful coaches are visionaries
              </p>
              <h1 className="font-secondary font-regular text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-10 lg:leading-[64px] xl:leading-[72px] 2xl:leading-[90px] text-white text-center lg:text-left">
                Good <span className="text-primary">coaching</span> is good
                teaching & nothing else.
              </h1>
              <div className="flex items-center justify-center lg:justify-start flex-wrap gap-y-5 gap-x-8 mt-12 lg:mt-16 2xl:mt-24">
                <a
                  href="/"
                  className="font-primary font-medium text-base lg:text-lg text-white tracking-[1px] py-4 px-8 border lg:border-2 rounded-md lg:rounded-lg border-white cursor-pointer"
                >
                  View Course
                </a>
                <a
                  href="/"
                  className="font-primary font-medium text-base lg:text-lg text-white"
                >
                  Get Free Consultation
                </a>
              </div>
              {/* banner input section start */}
              <div className="max-w-[490px] mt-16 xl:mt-24 2xl:mt-16">
                <div className="flex items-center justify-between bg-white rounded-lg p-1 lg:p-2">
                  <input
                    type="text"
                    placeholder="What do you want to learn today?"
                    className="font-primary text-sm lg:text-base w-full rounded-lg bg-transparent px-2 lg:px-4 2xl:px-8 py-2 lg:py-4 outline-none "
                  />
                  <button className="font-primary font-regular text-base text-white flex items-center px-4 py-2 lg:px-8 lg:py-4 gap-x-2 lg:gap-x-3 bg-gradient-to-l from-bgSecondary to-bgPrimary rounded-[10px]">
                    <CiSearch className="text-white text-xl" />
                    <span className="hidden md:block">Search</span>
                  </button>
                </div>
              </div>
            </div>
            {/* banner image section start */}
            <div className="relative w-full lg:justify-self-end mt-12 lg:mt-0">
              <div className="relative lg:absolute lg:top-1/4 left-0 border-l-2 pl-8 border-primary lg:w-72 z-40">
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
                    3.5
                  </h4>
                  <Rating
                    readOnly
                    value={3.5}
                    itemStyles={RattingStyles}
                    style={{ maxWidth: "100px" }}
                  />
                </div>
              </div>
              <div className="relative lg:w-[80%] 2xl:w-[90%] h-auto right-0 bottom-0 ml-auto z-10">
                <div>
                  {" "}
                  <img
                    src={bannerImage}
                    alt=""
                    className="relative w-full h-full z-10"
                  />
                  <img
                    src={imageShadow}
                    alt="image shadow"
                    className="w-full h-full absolute right-0 bottom-0"
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
      <div className="bg-gradient-to-bl from-[#084FC7] to-[#084ec771] py-4 lg:py-8 2xl:py-12">
        <Container>
          <div className="w-full flex items-center gap-x-3 lg:gap-x-24 2xl:gap-x-36">
            <img src={client1} alt="Client images" className="w-full h-auto " />
            <img src={client2} alt="Client images" className="w-full h-auto " />
            <img src={client3} alt="Client images" className="w-full h-auto " />
            <img src={client4} alt="Client images" className="w-full h-auto " />
            <img src={client5} alt="Client images" className="w-full h-auto " />
            <img src={client6} alt="Client images" className="w-full h-auto " />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
