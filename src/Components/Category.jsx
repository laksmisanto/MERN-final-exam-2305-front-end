import Container from "./Container";
import PageTitle from "./PageTitle";
import PageDescription from "./PageDescription";
import Grid from "./Grid";
import { FaLaptopCode } from "react-icons/fa";

const Category = () => {
  const categoryData = [
    {
      id: 1,
      title: "Digital Marketing",
      course: "25 Courses",
      icon: <FaLaptopCode />,
      IconBgColor: "#DF385B",
    },
    {
      id: 2,
      title: "Web Development",
      course: "16 Courses",
      icon: <FaLaptopCode />,
      IconBgColor: "#5AB48E",
    },
    {
      id: 3,
      title: "Art & Humanities",
      course: "76 Courses",
      icon: <FaLaptopCode />,
      IconBgColor: "#7F56D9",
    },
    {
      id: 4,
      title: "Personal Development",
      course: "22 Courses",
      icon: <FaLaptopCode />,
      IconBgColor: "#FAB437",
    },
    {
      id: 5,
      title: "IT and Software",
      course: "110 Courses",
      icon: <FaLaptopCode />,
      IconBgColor: "#2AAA94",
    },
    {
      id: 6,
      title: "Graphic Design",
      course: "85 Courses",
      icon: <FaLaptopCode />,
      IconBgColor: "#2CD182",
    },
  ];
  return (
    <div className="bg-gradient-to-t from-courseBgBottom to-courseBgTop">
      <Container className="py-14 lg:py-24 2xl:py-28">
        <div className="flex flex-col items-center">
          <PageTitle
            beforeHighlight="Top"
            Highlight="Categories"
            afterHighlight=" "
            className="text-center"
          />
          <PageDescription className="mt-5 lg:mt-7 2xl:mt-10 text-center">
            12,000+ unique online course list designs
          </PageDescription>
        </div>
        <Grid className="mt-12 lg:mt-16 2xl:mt-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-5">
          {categoryData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-12 bg-white rounded-lg xl:rounded-2xl shadow-xl"
            >
              <div
                className="flex justify-center items-center size-24 rounded-lg"
                style={{ backgroundColor: item.IconBgColor }}
              >
                <FaLaptopCode className="text-4xl text-white" />
              </div>
              <h4 className="text-2xl font-primary font-semibold leading-9 text-courseTitle mt-12 mb-11">
                {item.title}
              </h4>
              <p className="text-lg font-primary font-medium text-categoryDescription">
                {item.course}
              </p>
            </div>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Category;
