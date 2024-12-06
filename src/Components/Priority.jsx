import Container from "./Container";
import Grid from "./Grid";
import PageTitle from "./PageTitle";
import priorityImage from "../assets/images/priority.png";

const Priority = () => {
  return (
    <>
      <div>
        <Container>
          <Grid className="grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-12">
            <div>
              <img src={priorityImage} alt="priority" />
            </div>
            <div>
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
            </div>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Priority;
