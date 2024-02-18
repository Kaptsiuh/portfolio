import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles";
import React from "react";

const skillData = [
  {
    iconId: "html",
    title: "html5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod?",
  },
  {
    iconId: "css",
    title: "css",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod?",
  },
  {
    iconId: "react",
    title: "react",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod?",
  },
  {
    iconId: "js",
    title: "js",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod?",
  },
  {
    iconId: "tailwind",
    title: "tailwind",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod?",
  },
  {
    iconId: "redux",
    title: "redux",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quod?",
  },
];

export const Skills: React.FC = () => {
  return (
    <S.StyledSkills id={"skills"}>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify={"space-between"}>
          {skillData.map((s, index) => {
            return (
              <Skill
                key={index}
                iconId={s.iconId}
                title={s.title}
                description={s.description}
              />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.StyledSkills>
  );
};
