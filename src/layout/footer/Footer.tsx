import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
        <Name>Dzmitry</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon iconId={"instagram"} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon iconId={"telegram"} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon iconId={"github"} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon iconId={"linkedin"} />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>2024 Dzmitry Kaptsiuh, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #63c734;
`;

const Name = styled.span``;

const SocialList = styled.ul`
  display: flex;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.small``;
