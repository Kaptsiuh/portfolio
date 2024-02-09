import styled from "styled-components";
import photo from "./../../../assets/images/myPhoto.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <div>
            <Greeting>Hi✌️</Greeting>
            <Name>
              I am <span>Dzmitry Kaptsiuh</span>
            </Name>
            <MainTitle>A Web Developer.</MainTitle>
          </div>

          <PhotoWrapper>
            <Photo src={photo} alt="photo" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: purple;

  display: flex;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 320px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }
`;

const Photo = styled.img`
  width: 300px;
  height: 350px;
  object-fit: cover;
`;

const MainTitle = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

const Name = styled.h2`
  font-size: 40px;
  font-weight: 600;

  span {
    position: relative;
    z-index: 0;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`;

const Greeting = styled.span`
  font-size: 20px;
`;
