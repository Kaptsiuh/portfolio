import { S } from "../Works_Styles";
import { Link } from "../../../../components/Link";
import { Button } from "../../../../components/Button";
import React from "react";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <S.StyledWork>
      <S.ImageWrapper>
        <S.Image src={props.src} />
        <Button>Viev Project</Button>
      </S.ImageWrapper>

      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <Link href={"#"}>demo</Link>
        <Link href={"#"}>code</Link>
      </S.Description>
    </S.StyledWork>
  );
};
