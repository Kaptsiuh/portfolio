import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Footer_Styles";
import React from "react";

const SocialItemData = [
  {
    iconId: "github",
  },
  {
    iconId: "github",
  },
  {
    iconId: "github",
  },
  {
    iconId: "github",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
        <S.Name>Dzmitry</S.Name>
        <S.SocialList>
          {SocialItemData.map((s, index) => {
            return (
              <S.SocialItem key={index}>
                <S.SocialLink>
                  {" "}
                  <Icon
                    width={"88"}
                    height={"80"}
                    viewBox={"0 0 88 86"}
                    iconId={s.iconId}
                  />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}
        </S.SocialList>
        <S.Copyright>2024 Dzmitry Kaptsiuh, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.StyledFooter>
  );
};
