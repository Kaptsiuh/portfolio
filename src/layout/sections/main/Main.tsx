import photo from "./../../../assets/images/myPhoto.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import React from "react";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";

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
            {/* <S.MainTitle>A Web Developer.</S.MainTitle> */}
            <S.MainTitle>
              <p>A Web Developer.</p>
              <Typewriter
                options={{
                  strings: ["A Web Developer.", "A Frontend Developer."],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </S.MainTitle>
          </div>

          <S.PhotoWrapper>
            <S.Photo src={photo} alt="photo" />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.StyledMain>
  );
};
