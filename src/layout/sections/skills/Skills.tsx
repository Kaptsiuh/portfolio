import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify={"space-between"}>
          <Skill
            iconId={"html"}
            title={"html5"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod?"
            }
          />
          <Skill
            iconId={"css"}
            title={"css"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod?"
            }
          />
          <Skill
            iconId={"react"}
            title={"react"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod?"
            }
          />
          <Skill
            iconId={"js"}
            title={"js"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod?"
            }
          />
          <Skill
            iconId={"tailwind"}
            title={"tailwind"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod?"
            }
          />
          <Skill
            iconId={"redux"}
            title={"redux"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod?"
            }
          />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;
