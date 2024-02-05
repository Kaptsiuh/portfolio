import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { Work } from "./work/Work";
import project1 from "./../../../assets/images/project1.png";
import project2 from "./../../../assets/images/project2.png";
import { FlexWrapper } from "../../../components/FlexWrapper";

const WorksItems = ["All", "Landing page", "React", "spa"];

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={WorksItems} />
      <FlexWrapper justify={"space-around"}>
        <Work
          src={project1}
          title={"Social Network"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum, laborum voluptatum totam maxime repudiandae?"
          }
        />
        <Work
          src={project2}
          title={"Timer"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum, laborum voluptatum totam maxime repudiandae?"
          }
        />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #2d4da5;
`;
