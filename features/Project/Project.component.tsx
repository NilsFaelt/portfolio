import React, { FC, useState } from "react";
import {
  Container,
  LeftClickContainer,
  NavClickContainer,
  RightClickContainer,
  Title,
} from "./Project.style";
import { BigTitle, SectionTitle } from "@/ui";
import { NavAside, ProjectPreview } from "@/components";
interface Props {}
export const Project: FC<Props> = ({}) => {
  const [project, setProject] = useState(1);
  const projects = [
    {
      name: "UNTRA STUDIO",
      about:
        "A contemporary website design integrating blogs and news articles, presenting a dynamic and engaging user experience for information dissemination.",

      href: "https://untra-studio.webflow.io",
      images: [
        "untra/one.png",
        "untra/two.png",
        "untra/three.png",
        "untra/four.png",
      ],
      builtWith: "WEBFLOW",
    },
    {
      name: "FANGO SOLUTIONS",
      about:
        "An all-encompassing solution for managing bookmarks, analytics, and content, simplifying browsing while facilitating tracking of your online activities.",
      href: "https://fangosolutions.com/",
      images: [
        "fango/one.png",
        "fango/two.png",
        "fango/three.png",
        "fango/four.png",
      ],
      builtWith:
        "TypeScript, NextJS, Node, Nest, PostgreSQL, Firebase, Docker, Styled-Components",
    },
  ];
  const handleNextProject = () => {
    const nextProject = (project + 1) % projects.length; // Loop back to the first project when reaching the end
    setProject(nextProject);
  };

  const handlePrevProject = () => {
    const prevProject = (project - 1 + projects.length) % projects.length; // Loop back to the last project when at the first one
    setProject(prevProject);
  };

  return (
    <Container id='project'>
      <SectionTitle text='PROJECTS' titleColor='white' />
      <NavAside activeColor='black' color='white' sectionName='PROJECTS' />
      <Title>{projects[project].name}</Title>
      <ProjectPreview project={projects[project]} />
      <NavClickContainer>
        <LeftClickContainer onClick={handlePrevProject}>
          PREV
        </LeftClickContainer>
        <RightClickContainer onClick={handleNextProject}>
          NEXT
        </RightClickContainer>
      </NavClickContainer>
    </Container>
  );
};
