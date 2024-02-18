import photo from "./../../../assets/images/myPhoto.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import React from "react";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

export const Main: React.FC = () => {
  return (
    <S.StyledMain id={"home"}>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <S.Greeting>Hi✌️</S.Greeting>
            <S.Name>
              I am <span>Dzmitry Kaptsiuh</span>
            </S.Name>
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
          <Tilt
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <S.PhotoWrapper>
              <S.Photo src={photo} alt="photo" />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.StyledMain>
  );
};
