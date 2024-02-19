import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu, TabsStatusType } from "./menu/TabMenu";
import { Work } from "./work/Work";
import project1 from "./../../../assets/images/project1.png";
import project2 from "./../../../assets/images/project2.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import React from "react";
import { S } from "./Works_Styles";
import { motion, AnimatePresence } from "framer-motion";

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
    id: 1,
  },
  {
    title: "Timer",
    src: project2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum, laborum voluptatum totam maxime repudiandae?",
    type: "react",
    id: 2,
  },
  {
    title: "Social Network",
    src: project1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum, laborum voluptatum totam maxime repudiandae?",
    type: "spa",
    id: 3,
  },
  {
    title: "Timer",
    src: project2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum, laborum voluptatum totam maxime repudiandae?",
    type: "react",
    id: 4,
  },
  {
    title: "Social Network",
    src: project1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum, laborum voluptatum totam maxime repudiandae?",
    type: "spa",
    id: 5,
  },
  {
    title: "Timer",
    src: project2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum, laborum voluptatum totam maxime repudiandae?",
    type: "landing",
    id: 6,
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
    <S.StyledWorks id={"works"}>
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
          <AnimatePresence>
            {filteredWorks.map((w) => {
              return (
                <motion.div
                  style={{ width: "330px", flexGrow: 1, maxWidth: "540px" }}
                  layout={true}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={w.id}
                >
                  <Work key={w.id} title={w.title} src={w.src} text={w.text} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.StyledWorks>
  );
};
