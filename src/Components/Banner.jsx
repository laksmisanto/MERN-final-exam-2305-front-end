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
  const clientData = [
    { id: 1, image: client1 },
    { id: 2, image: client2 },
    { id: 3, image: client3 },
    { id: 4, image: client4 },
    { id: 5, image: client5 },
    { id: 6, image: client6 },
  ];
  return (
    <>
      <div className="relative bg-gradient-to-tr from-bannerSecondary  to-bannerPrimary bg-opacity-10 w-full min-h-[90vh]">
        <Container className=" pt-12 md:pt-20 xl:pt-0">
          <Grid className="grid-cols-1 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-4 xl:gap-x-8 xl:self-center">
            {/* banner text section start */}
            <div className="relative z-10 self-center lg:pb-10 xl:pb-0">
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
              <div className="max-w-[490px] mx-auto lg:mx-0 mt-16 xl:mt-24 2xl:mt-16">
                <div className="flex items-center justify-between bg-white rounded-lg p-1 lg:p-2">
                  <input
                    type="text"
                    placeholder="What do you want to learn today?"
                    className="font-primary text-sm lg:text-base w-full rounded-lg bg-transparent px-2 lg:px-4 2xl:px-8 py-2 lg:py-4 outline-none "
                  />
                  <button className="font-primary font-regular text-base text-white flex items-center px-6 py-3 lg:px-8 lg:py-4 gap-x-2 lg:gap-x-3 bg-gradient-to-l from-bgSecondary to-bgPrimary rounded-[10px]">
                    <CiSearch className="text-white text-xl" />
                    <span className="hidden sm:block">Search</span>
                  </button>
                </div>
              </div>
            </div>
            {/* banner input section end */}

            {/* banner image section start */}
            <div className="relative w-full lg:self-end xl:self-center lg:justify-self-end mt-12 lg:mt-0">
              <div className="relative sm:absolute sm:top-1/4 lg:-top-14 xl:top-1/4 left-0 border-l-2 pl-8 border-primary sm:w-80 lg:w-72 z-40">
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
              <div className="relative w-1/2 sm:w-2/5 lg:w-[80%] 2xl:w-[90%] h-auto right-0 bottom-0 ml-auto mr-auto sm:mr-0 sm:ml-auto z-10">
                <div>
                  {" "}
                  <img
                    src={bannerImage}
                    alt=""
                    className="relative w-full h-auto z-10"
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
              {/* Curve section start */}
              <div className="hidden lg:block">
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-32 h-24 xl:w-48 xl:h-52 2xl:w-56 2xl:h-60 border-x border-t 2xl:border-x-2 2xl:border-t-2  rounded-tl-full rounded-tr-full border-white after:w-[87%] after:h-[95%] after:border-l after:border-t after:border-r 2xl:after:border-l-2 2xl:after:border-t-2 2xl:after:border-r-2 after:rounded-tl-full after:rounded-tr-full after:border-white after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:-z-10 before:w-[76%] before:h-[90%] before:border-l before:border-t before:border-r 2xl:before:border-l-2 2xl:before:border-t-2 2xl:before:border-r-2 before:rounded-tl-full before:rounded-tr-full before:border-white before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:-z-10"></div>
              </div>
            </div>
          </Grid>
        </Container>
      </div>

      {/* our Client list section start */}
      <div className="bg-gradient-to-bl from-[#084FC7] to-[#084ec771] py-4 lg:py-8 2xl:py-12 overflow-hidden">
        <Container>
          <div className="w-full flex items-center gap-x-5 sm:gap-x-14 md:gap-x-16 lg:gap-x-24 2xl:gap-x-36">
            {clientData.map((item, index) => (
              <div key={index}>
                <img
                  src={item.image}
                  alt="Client images"
                  className="w-full h-auto "
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
