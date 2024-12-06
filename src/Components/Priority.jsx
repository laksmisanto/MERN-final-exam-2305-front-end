import Container from "./Container";
import Grid from "./Grid";
import PageTitle from "./PageTitle";
import priorityImage from "../assets/images/priority.png";
import priorityLeadImage from "../assets/images/priority-lead.png";
import priorityLeadRightImage from "../assets/images/priority-lead-right.png";
import { FaPlay } from "react-icons/fa";

const Priority = () => {
  return (
    <>
      <div>
        <Container className="mt-28">
          <Grid className="grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-12">
            <div>
              <img src={priorityImage} alt="priority" />
            </div>
            <div className="self-center">
              <PageTitle
                beforeHighlight="The number one factor in"
                Highlight="relevance drives out resistance."
                afterHighlight=" "
              />
              <p className="font-primary font-regular text-lg text-gray leading-7 mt-12">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <button className="font-primary font-medium text-lg text-white py-4 px-6 bg-gradient-to-r from-bgPrimary to-bgSecondary rounded-[10px] mt-12">
                Learn More
              </button>
            </div>
          </Grid>
          <div className="w-[90%] mx-auto mt-28">
            <div className="relative">
              <img
                src={priorityLeadImage}
                alt="priority lead"
                className="w-full h-auto rounded-[68px]"
              />

              <img
                src={priorityLeadRightImage}
                alt="priority lead right"
                className="absolute bottom-0 right-0"
              />
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 size-56 bg-white rounded-full bg-opacity-20 flex justify-center items-center">
                <div className="size-44 bg-white bg-opacity-50 rounded-full flex justify-center items-center">
                  <div className="size-32 bg-gradient-to-r from-bgPrimary to-bgSecondary rounded-full flex justify-center items-center">
                    <FaPlay className="text-5xl text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Priority;
