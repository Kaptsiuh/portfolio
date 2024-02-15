import photo from "./../../../assets/images/myPhoto.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import React from "react";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
  return (
    <S.StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <S.Greeting>Hi✌️</S.Greeting>
            <S.Name>
              I am <span>Dzmitry Kaptsiuh</span>
            </S.Name>
            <S.MainTitle>A Web Developer.</S.MainTitle>
          </div>

          <S.PhotoWrapper>
            <S.Photo src={photo} alt="photo" />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.StyledMain>
  );
};
