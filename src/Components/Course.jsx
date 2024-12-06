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
        <Container className="pt-28 pb-24">
          <div className="flex items-center flex-col">
            <PageTitle
              beforeHighlight="Featured"
              Highlight="Courses"
              afterHighlight=" "
            />
            <PageDescription className="mt-12 w-[690px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temporidunt ut labore veniam...
            </PageDescription>
          </div>
          <Grid className="mt-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CourseData.map((item, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow">
                <div>
                  <img
                    src={item.image}
                    alt="course"
                    className="rounded-t-[20px]"
                  />
                </div>
                <div className="p-8 font-primary">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-gray">
                      {item.student}
                    </p>
                    <p className="text-sm font-medium text-gray">
                      {item.duration}
                    </p>
                  </div>

                  <h1 className="font-semibold text-2xl text-courseTitle mt-5">
                    {item.title}
                  </h1>

                  <div className="flex justify-between mt-8 ">
                    <p className="font-semibold text-xl text-gray ">
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
          <div className=" mt-24 flex items-center justify-center">
            <button className="font-primary font-medium text-xl text-white py-4 px-7 bg-gradient-to-r from-bgPrimary to-bgSecondary rounded-[10px]">
              Explore courses
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Course;
