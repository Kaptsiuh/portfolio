import { S } from "../HeaderMenu_Styles";
import React from "react";
import { Menu } from "../menu/Menu";

export const DesktopMenu: React.FC = () => {
  return (
    <S.StyledDesktopMenu>
      <Menu />
    </S.StyledDesktopMenu>
  );
};
