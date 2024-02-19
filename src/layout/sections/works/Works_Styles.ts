import styled from "styled-components";
import { Link } from "../../../components/Link";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { Button } from "../../../components/Button";
import { motion } from "framer-motion";

const StyledWorks = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }
`;

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBgr};

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: ${theme.animations.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -20%);
    transition: ${theme.animations.transition};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Title = styled.h3``;

const Text = styled.p`
  margin: 14px 0 10px;
`;

const Description = styled.div`
  padding: 25px 20px;
`;

export const S = {
  StyledWorks,
  StyledWork,
  ImageWrapper,
  Image,
  Title,
  Text,
  Description,
};
