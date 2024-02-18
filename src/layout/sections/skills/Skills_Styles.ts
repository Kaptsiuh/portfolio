import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const StyledSkills = styled.section`
  position: relative;
`;

const StyledSkill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 62px 20px 40px;

  @media ${theme.media.mobile} {
    padding: 62px 0px 40px;
  }
`;

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`;

const SkillText = styled.p`
  text-align: center;
`;

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 170px;
    height: 170px;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg) translate(-50%, -50%);

    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`;

export const S = {
  StyledSkills,
  StyledSkill,
  SkillTitle,
  SkillText,
  IconWrapper,
};
