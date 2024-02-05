import styled from "styled-components";
import photo from "./../../../assets/images/myPhoto.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <div>
          <Greeting>Hi✌️</Greeting>
          <Name>I am Dzmitry Kaptsiuh</Name>
          <MainTitle>A Web Developer.</MainTitle>
        </div>

        <Photo src={photo} alt="photo" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: purple;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Photo = styled.img`
  width: 300px;
  height: 350px;
  object-fit: cover;
`;

const MainTitle = styled.h1`
  font-size: 24px;
`;

const Name = styled.h2`
  font-size: 40px;
`;

const Greeting = styled.span`
  font-size: 24px;
`;
