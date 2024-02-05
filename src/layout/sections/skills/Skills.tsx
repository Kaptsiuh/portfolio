import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
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
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #a7b621;
  min-height: 100vh;
`;
