import Container from "./Container";
import PageTitle from "./PageTitle";
import PageDescription from "./PageDescription";
import Grid from "./Grid";
import { FaGraduationCap, FaLaptop } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import benefitEffectImage from "../assets/images/benefit-bg-effect.png";

const Benefit = () => {
  return (
    <>
      <div className="relative bg-gradient-to-tr from-benefitBgPrimary from-20% to-bgSecondary to-80%">
        <Container className="py-14 lg:py-24 2xl:py-28">
          <div className="flex items-center flex-col">
            <PageTitle
              beforeHighlight="Why"
              Highlight="learn"
              afterHighlight="with our courses"
              className="text-white text-center"
            />
            <PageDescription className="mt-7 max-w-[728px] text-center text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temporidunt ut labore veniam...
            </PageDescription>
          </div>
          <Grid className="w-[90%] mx-auto mt-12 lg:mt-16 xl:mt-24 2xl:mt-28 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-0 justify-self-center">
            <div className="flex flex-col items-center text-center lg:border-r-2 lg:border-dashed lg:border-white px-6 lg:px-16">
              <FaLaptop className="text-white text-7xl" />
              <h4 className="font-secondary font-bold text-white text-2xl mt-5 lg:mt-7 2xl:mt-9">
                01. Learn
              </h4>
              <p className="font-primary font-regular text-white text-lg mt-4 lg:mt-5 xl:mt-7">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliqua.
              </p>
            </div>
            <div className="flex flex-col items-center text-center lg:border-r-2 lg:border-dashed lg:border-white px-6 lg:px-16">
              <FaGraduationCap className="text-white text-7xl" />
              <h4 className="font-secondary font-bold text-white text-2xl mt-5 lg:mt-7 2xl:mt-9">
                02. Graduate
              </h4>
              <p className="font-primary font-regular text-white text-lg mt-4 lg:mt-5 xl:mt-7">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliqua.
              </p>
            </div>
            <div className="flex flex-col items-center text-center px-6 lg:px-16">
              <GrWorkshop className="text-white text-7xl" />
              <h4 className="font-secondary font-bold text-white text-2xl mt-5 lg:mt-7 2xl:mt-9">
                03. Work
              </h4>
              <p className="font-primary font-regular text-white text-lg mt-4 lg:mt-5 xl:mt-7">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliqua.
              </p>
            </div>
          </Grid>

          {/* bg effect image section start */}
        </Container>
        <div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2">
            <img
              src={benefitEffectImage}
              className=" w-2/3 lg:w-4/5 h-auto"
              alt="benefit effect image"
            />
          </div>
          <div className="hidden lg:block">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-44 h-24 xl:w-44 xl:h-52 2xl:w-44 2xl:h-56 border-y border-r 2xl:border-y-2 2xl:border-r-2  rounded-br-full rounded-tr-full border-white after:w-[95%] after:h-[90%] after:border-y after:border-r 2xl:after:border-y-2 2xl:after:border-r-2 after:rounded-tr-full after:rounded-br-full after:border-white after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:-z-10 before:w-[90%] before:h-[80%] before:border-y  before:border-r 2xl:before:border-y-2 2xl:before:border-r-2 before:rounded-tr-full before:rounded-br-full before:border-white before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:-z-10"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefit;
