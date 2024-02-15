import React, { FC, useState } from "react";
import {
  Container,
  LeftClickContainer,
  NavClickContainer,
  RightClickContainer,
  StyledImage,
  Title,
} from "./Project.style";
import { SectionTitle } from "@/ui";
import { NavAside, ProjectPreview } from "@/components";
interface Props {}
export const Project: FC<Props> = ({}) => {
  const [project, setProject] = useState(0);
  const [displayImage, setDisplayImage] = useState(true);
  const projects = [
    {
      name: "UNTRA STUDIO",
      about:
        "A contemporary website design integrating blogs and news articles, presenting a dynamic and engaging user experience for information dissemination.",

      href: "https://untra-studio.webflow.io",
      images: [],
      builtWith: "WEBFLOW",
      gitHubUrl: "",
      displayGithub: false,
    },
    {
      name: "HUNKER JUNKER",
      about:
        "A contemporary website design integrating blogs and news articles, presenting a dynamic and engaging user experience for information dissemination.",

      href: "https://superb-pixie-65b580.netlify.app/",
      images: [],
      builtWith: "NextJS",
      gitHubUrl: "",
      displayGithub: false,
    },
    {
      name: "SKEIDAR",
      about:
        "An all-encompassing solution for managing bookmarks, analytics, and content, simplifying browsing while facilitating tracking of your online activities.",
      href: "https://65841c432008210008deeea0--tubular-monstera-9d7aeb.netlify.app/",
      images: [],
      builtWith:
        "TypeScript, NextJS, Node, Nest, PostgreSQL, Firebase, Docker, Styled-Components",
      gitHubUrl: "https://github.com/NilsFaelt/skediar",
    },
    {
      name: "GOGO-TRAVEL",
      about: "My travel blog",
      href: "https://earnest-taffy-aa7b42.netlify.app/",
      images: [],
      builtWith:
        "TypeScript, NextJS, Node, Nest, PostgreSQL, Firebase, Docker, Styled-Components",
      gitHubUrl: "https://github.com/NilsFaelt/travel-blog",
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
      {displayImage && (
        <StyledImage
          width={120}
          height={120}
          alt='yellow paint'
          src={"/images/yellow.png"}
          onError={() => {
            setDisplayImage(false);
          }}
        />
      )}
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
