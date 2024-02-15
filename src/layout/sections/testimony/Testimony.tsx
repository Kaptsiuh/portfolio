import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "../skills/Skills_Styles";
import { St } from "./Testimony_Styles";
import React from "react";

export const Testimony: React.FC = () => {
  return (
    <St.StyledTestimony>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={"column"} align={"center"}>
          <S.IconWrapper>
            <Icon iconId={"react"} />
          </S.IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </St.StyledTestimony>
  );
};
