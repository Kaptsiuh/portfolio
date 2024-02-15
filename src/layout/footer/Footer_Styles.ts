import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBgr};
  padding: 40px 0;
`;

const Name = styled.span`
  ${font({ weight: 700, Fmax: 22, Fmin: 16 })}
  letter-spacing: 3px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 110px;
  height: 110px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.font};

  &:hover {
    color: ${theme.colors.accent};
    transform: translateY(-4px);
  }

  @media ${theme.media.tablet} {
    width: 20px;
    height: 20px;
  }
`;

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  opacity: 0.5;
`;

export const S = {
  StyledFooter,
  Name,
  SocialList,
  SocialItem,
  SocialLink,
  Copyright,
};
