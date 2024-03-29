import { S } from "../HeaderMenu_Styles";
import { Menu } from "../menu/Menu";
import React from "react";

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setmenuIsOpen] = React.useState(false);
  const onBurgerBtnClick = () => {
    setmenuIsOpen(!menuIsOpen);
  };

  return (
    <S.StyledMobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => {
          setmenuIsOpen(false);
        }}
      >
        <Menu />
      </S.MobileMenuPopup>
    </S.StyledMobileMenu>
  );
};
