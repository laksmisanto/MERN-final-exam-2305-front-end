import React from "react";
import Container from "./Container";
import PageTitle from "./PageTitle";
import PageDescription from "./PageDescription";
import Grid from "./Grid";
import testimonials1 from "../assets/images/testimonials1.png";
import testimonials2 from "../assets/images/testimonials2.png";
import testimonials3 from "../assets/images/testimonials3.png";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const RattingStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#FAB437",
    inactiveFillColor: "#CBC2FF",
  };
  let testimonialData = [
    {
      id: 1,
      name: "Ronald Richards",
      image: testimonials1,
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      ratting: 4,
    },
    {
      id: 2,
      name: "Wade Warren",
      image: testimonials2,
      description:
        "Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Reprehenderit in voluptate velit esse ",
      ratting: 3,
    },
    {
      id: 3,
      name: "Jacob Jones",
      image: testimonials3,
      description:
        "Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit ",
      ratting: 5,
    },
  ];
  return (
    <>
      <div className="bg-gradient-to-t from-courseBgBottom to-courseBgTop pt-32 pb-32">
        <Container>
          <div className="flex justify-center flex-col items-center">
            <PageTitle beforeHighlight="Testimonials" />
            <PageDescription>What our student say about us</PageDescription>
          </div>
          <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] shadow py-14 px-10"
              >
                <div className="flex gap-x-8 items-center">
                  <img
                    src={item.image}
                    alt="testimonial"
                    className="size-16 rounded-full"
                  />
                  <h4 className="font-secondary font-bold text-2xl text-black">
                    {item.name}
                  </h4>
                </div>
                <p className="mt-10 font-primary font-regular text-lg text-gray leading-7">
                  {item.description}
                </p>
                <div className="mt-12">
                  <Rating
                    readOnly
                    value={item.ratting}
                    itemStyles={RattingStyles}
                    style={{ maxWidth: "138px" }}
                  />
                </div>
              </div>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Testimonials;
