import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { S } from "./Slider_Styles";
import "./../../styles/slider.css";

type SlidePropsType = {
  text: string;
  userName: string;
};

const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <S.Text>{props.text}</S.Text>
      <S.Name>{props.userName}</S.Name>
    </S.Slide>
  );
};

const items = [
  <Slide
    text={
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, autem?"
    }
    userName={"@Kaptsiuh"}
  />,
  <Slide
    text={
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, autem?"
    }
    userName={"@Kaptsiuh"}
  />,
  <Slide
    text={
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, autem?"
    }
    userName={"@Kaptsiuh"}
  />,
];

export const Slider = () => (
  <S.StyledSlider>
    <AliceCarousel mouseTracking items={items} />
  </S.StyledSlider>
);
