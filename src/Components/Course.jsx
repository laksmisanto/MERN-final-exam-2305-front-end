import Container from "./Container";
import PageTitle from "./PageTitle";
import PageDescription from "./PageDescription";
import Grid from "./Grid";
import { CourseData } from "./data/CourseData";
import { MdOutlineShoppingCart } from "react-icons/md";

const Course = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-courseBgBottom to-courseBgTop">
        <Container className="py-14 lg:py-24 2xl:py-28 relative">
          <div className="flex items-center flex-col">
            <PageTitle
              beforeHighlight="Featured"
              Highlight="Courses"
              afterHighlight=" "
              className="text-center"
            />
            <PageDescription className="mt-6 lg:mt-8 2xl:mt-12 max-w-[690px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temporidunt ut labore veniam...
            </PageDescription>
          </div>
          <Grid className="mt-12 lg:mt-16 2xl:mt-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CourseData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl lg:rounded-2xl 2xl:rounded-3xl shadow"
              >
                <div>
                  <img
                    src={item.image}
                    alt="course"
                    className="rounded-t-lg lg:rounded-t-2xl 2xl:rounded-t-3xl"
                  />
                </div>
                <div className="p-5 lg:p-8 font-primary">
                  <div className="flex justify-between">
                    <p className="text-xs lg:text-sm font-medium text-gray">
                      {item.student}
                    </p>
                    <p className="text-xs lg:text-sm  font-medium text-gray">
                      {item.duration}
                    </p>
                  </div>

                  <h1 className="font-semibold text-lg lg:text-xl xl:text-2xl text-courseTitle mt-3 xl:mt-5">
                    {item.title}
                  </h1>

                  <div className="flex justify-between mt-5 xl:mt-8 ">
                    <p className="font-semibold text-base md:text-lg xl:text-xl text-gray ">
                      {item.price}
                    </p>
                    <p>
                      <MdOutlineShoppingCart className="text-2xl text-gray" />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Grid>
          <div className=" mt-12 lg:mt-16 2xl:mt-24 flex items-center justify-center">
            <button className="font-primary font-medium text-base lg:text-xl text-white py-4 px-8 bg-gradient-to-r from-bgPrimary to-bgSecondary rounded-[10px]">
              Explore courses
            </button>
          </div>

          {/* background effect section start */}
          <div>
            <div className="absolute top-6 left-4 lg:top-20 lg:left-12 size-8 lg:size-16 2xl:size-20 rounded-full border-[8px] lg:border-[16px] 2xl:border-[20px] border-primary border-opacity-20"></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Course;
