import React, { FC, useEffect, useRef, useState } from "react";
import {
  Container,
  LeftClickContainer,
  NavClickContainer,
  RightClickContainer,
  Title,
  TitleContainer,
} from "./Project.style";
import { SectionTitle } from "@/ui";
import { NavAside, ProjectPreview } from "@/components";

interface Props {}

export const Project: FC<Props> = ({}) => {
  const [project, setProject] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // State variable to control animation restart
  const projects = [
    {
      name: "VANGOLION",
      about: "My dream project",

      href: "https://vangolion.com/",
      images: [],
      builtWith: "NextJs, Contentful",
      gitHubUrl: "",
      displayGithub: false,
    },
    {
      name: "UNTRA-STUDIO",
      about:
        "A contemporary website design integrating blogs and news articles, presenting a dynamic and engaging user experience for information dissemination.",

      href: "https://untra-studio-a70e4154f13a56e751482da6fa.webflow.io/",
      images: [],
      builtWith: "WEBFLOW",
      gitHubUrl: "",
      displayGithub: false,
    },
    {
      name: "HUNKER-JUNKER",
      about:
        "A contemporary website design integrating blogs and news articles, presenting a dynamic and engaging user experience for information dissemination.",

      href: "http://www.hunkerjunker.se",
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
    const nextProject = (project + 1) % projects.length;
    setProject(nextProject);
    setAnimationKey((prevKey) => prevKey + 1); // Increment animation key to trigger animation restart
  };

  const handlePrevProject = () => {
    const prevProject = (project - 1 + projects.length) % projects.length;
    setProject(prevProject);
    setAnimationKey((prevKey) => prevKey + 1); // Increment animation key to trigger animation restart
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay error:", error);
      });
    }
  }, [project]);

  const splittedText = projects[project].name.split("");

  return (
    <Container id='project'>
      <SectionTitle text='PROJECTS' titleColor='white' />
      <NavAside activeColor='black' color='white' sectionName='PROJECTS' />
      <TitleContainer>
        {splittedText.map((letter, i) => (
          <Title
            key={`${project}-${i}`}
            style={{
              animationDelay: `${i * 50}ms`,
            }}
          >
            {letter}
          </Title>
        ))}
      </TitleContainer>
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
