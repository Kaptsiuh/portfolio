import styled from "styled-components";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.secondaryBgr};

  display: flex;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top: 65px;

  &::before {
    content: "";
    width: 320px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 320px;
      height: 470px;
      top: -17px;
      left: 20px;
    }
  }
`;

const Photo = styled.img`
  width: 300px;
  height: 350px;
  object-fit: cover;
  margin-right: 35px;

  @media ${theme.media.mobile} {
    width: 320px;
    height: 470px;
  }
`;

const MainTitle = styled.h1`
  ${font({ weight: 400, Fmax: 27, Fmin: 20 })}

  p {
    display: none;
  }
`;

const Name = styled.h2`
  ${font({ weight: 600, Fmax: 50, Fmin: 26 })}

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

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

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`;

const Greeting = styled.span`
  ${font({ weight: 400, Fmax: 27, Fmin: 20 })}
`;

export const S = {
  StyledMain,
  PhotoWrapper,
  Photo,
  MainTitle,
  Name,
  Greeting,
};
