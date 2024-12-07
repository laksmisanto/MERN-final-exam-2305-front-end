import React from "react";
import Container from "./Container";
import PageTitle from "./PageTitle";
import PageDescription from "./PageDescription";
import Grid from "./Grid";
import { FaGraduationCap, FaLaptop } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";

const Benefit = () => {
  return (
    <>
      <div className="bg-gradient-to-tr from-benefitBgPrimary from-20% to-bgSecondary to-80%">
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
        </Container>
      </div>
    </>
  );
};

export default Benefit;
