import Container from "./Container";
import Grid from "./Grid";
import PageTitle from "./PageTitle";
import priorityImage from "../assets/images/priority.png";
import priorityLeadImage from "../assets/images/priority-lead.png";
import priorityLeadRightImage from "../assets/images/priority-lead-right.png";
import { FaPlay } from "react-icons/fa";
import bgEffectImg from "../assets/images/priority-bg-effect.png";

const Priority = () => {
  return (
    <>
      <div>
        <Container className="relative py-14 lg:py-24 2xl:py-28">
          <Grid className="grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-12">
            <div>
              <img src={priorityImage} alt="priority" />
            </div>
            <div className="self-center">
              <PageTitle
                beforeHighlight="The number one factor in"
                Highlight="relevance drives out resistance."
                afterHighlight=" "
                className="text-center lg:text-left"
              />
              <p className="font-primary font-regular text-lg text-gray text-center lg:text-left leading-7 mt-12">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <div className=" w-full flex justify-center lg:justify-start mt-12">
                <button className="font-primary font-medium text-lg text-white py-4 px-6 bg-gradient-to-r from-bgPrimary to-bgSecondary rounded-[10px]">
                  Learn More
                </button>
              </div>
            </div>
          </Grid>
          <div className="w-full lg:w-4/5 2xl:w-[90%] mx-auto mt-14 lg:mt-20 2xl:mt-28">
            <div className="relative">
              <img
                src={priorityLeadImage}
                alt="priority lead"
                className="w-full h-auto rounded-2xl 2xl:rounded-[68px]"
              />

              <img
                src={priorityLeadRightImage}
                alt="priority lead right"
                className="absolute w-20 lg:w-auto bottom-0 right-0"
              />
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 size-20 lg:size-40 2xl:size-56 bg-white rounded-full bg-opacity-20 flex justify-center items-center">
                <div className="size-16 lg:size-32 2xl:size-44 bg-white bg-opacity-50 rounded-full flex justify-center items-center">
                  <div className="size-12 lg:size-24 2xl:size-32 bg-gradient-to-r from-bgPrimary to-bgSecondary rounded-full flex justify-center items-center">
                    <FaPlay className="text-xl lg:text-4xl 2xl:text-5xl text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="absolute lg:top-1/2 lg:right-20 transform lg:-translate-y-1/2 2xl:top-[45%] 2xl:right-14">
              <img
                src={bgEffectImg}
                alt="priority bg effect"
                className="w-[90%] h-auto"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Priority;
