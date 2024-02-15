import React from "react";
import { FlexWrapper } from "../FlexWrapper";
import { S } from "./Slider_Styles";

export const Slider: React.FC = () => {
  return (
    <S.StyledSlider>
      <FlexWrapper>
        <S.Slide>
          <S.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            autem?
          </S.Text>
          <S.Name>Kaptsiuh</S.Name>
        </S.Slide>
      </FlexWrapper>
      <S.Pagination>
        <span></span>
        <span className={"active"}></span>
        <span></span>
      </S.Pagination>
    </S.StyledSlider>
  );
};
