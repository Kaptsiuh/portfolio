import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu, TabsStatusType } from "./menu/TabMenu";
import { Work } from "./work/Work";
import project1 from "./../../../assets/images/project1.png";
import project2 from "./../../../assets/images/project2.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import React from "react";
import { S } from "./Works_Styles";

const tabsItems: Array<{
  title: string;
  status: TabsStatusType;
}> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "Landing page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "spa",
    status: "spa",
  },
];

const worksData = [
  {
    title: "Social Network",
    src: project1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum, laborum voluptatum totam maxime repudiandae?",
    type: "spa",
  },
  {
    title: "Timer",
    src: project2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum, laborum voluptatum totam maxime repudiandae?",
    type: "react",
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = React.useState("all");
  let filteredWorks = worksData;

  if (currentFilterStatus === "landing") {
    filteredWorks = worksData.filter((work) => work.type === "landing");
  }

  if (currentFilterStatus === "react") {
    filteredWorks = worksData.filter((work) => work.type === "react");
  }

  if (currentFilterStatus === "spa") {
    filteredWorks = worksData.filter((work) => work.type === "spa");
  }

  function changeFilterStatus(value: "all" | "landing" | "react" | "spa") {
    setCurrentFilterStatus(value);
  }

  return (
    <S.StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper
          justify={"space-between"}
          align={"flex-start"}
          wrap={"wrap"}
        >
          {filteredWorks.map((w, index) => {
            return (
              <Work key={index} title={w.title} src={w.src} text={w.text} />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.StyledWorks>
  );
};
