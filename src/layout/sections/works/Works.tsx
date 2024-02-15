import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./menu/TabMenu";
import { Work } from "./work/Work";
import project1 from "./../../../assets/images/project1.png";
import project2 from "./../../../assets/images/project2.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import React from "react";
import { S } from "./Works_Styles";

const worksItems = ["All", "Landing page", "React", "spa"];

const workData = [
  {
    title: "Social Network",
    src: project1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum, laborum voluptatum totam maxime repudiandae?",
  },
  {
    title: "Timer",
    src: project2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum, laborum voluptatum totam maxime repudiandae?",
  },
];

export const Works: React.FC = () => {
  return (
    <S.StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={worksItems} />
        <FlexWrapper
          justify={"space-between"}
          align={"flex-start"}
          wrap={"wrap"}
        >
          {workData.map((w, index) => {
            return (
              <Work key={index} title={w.title} src={w.src} text={w.text} />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.StyledWorks>
  );
};
