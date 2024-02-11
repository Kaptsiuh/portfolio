import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./menu/TabMenu";
import { Work } from "./work/Work";
import project1 from "./../../../assets/images/project1.png";
import project2 from "./../../../assets/images/project2.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

const WorksItems = ["All", "Landing page", "React", "spa"];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={WorksItems} />
        <FlexWrapper justify={"space-between"} align={"flex-start"}>
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
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section``;
