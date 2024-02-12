import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { IconWrapper } from "../skills/skill/Skill";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper direction={"column"} align={"center"}>
        <IconWrapper>
          <Icon iconId={"react"} />
        </IconWrapper>
        <Slider />
      </FlexWrapper>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  background-color: #af0a78;
  min-height: 50vh;

  ${IconWrapper} {
    margin: 22px 0 82px;
  }
`;
