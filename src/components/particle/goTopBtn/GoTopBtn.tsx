import styled from "styled-components";
import { Icon } from "../../icon/Icon";
import React from "react";
import { animateScroll as scroll } from "react-scroll";

export const GoTopBtn: React.FC = () => {
  const [showBtn, setShowBtn] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <Icon
            iconId={"arrowGoTop"}
            height={"15px"}
            width={"16px"}
            viewBox={"0 0 16 15"}
          />
        </StyledGoTopBtn>
      )}
    </>
  );
};

export default GoTopBtn;

const StyledGoTopBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 8px;
  position: fixed;
  bottom: 30px;
  right: 30px;

  border-radius: 50%;
`;
