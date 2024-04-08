import React, { FC, useEffect, useRef, useState } from "react";
import {
  Container,
  LeftClickContainer,
  NavClickContainer,
  RightClickContainer,
  Title,
  TitleContainer,
  LetterYellow,
  CopyWrightContainer,
  SectionTitleContainer,
} from "./Project.style";
import { SectionTitle } from "@/ui";
import { NavAside, ProjectPreview } from "@/components";
import { CopywrightStyleTextSection } from "@/components/CopywrightStyleTextSection";
import { DisplayImages } from "./components/DisplayImages";

interface Props {}

export const Project: FC<Props> = ({}) => {
  const [project, setProject] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // State variable to control animation restart
  const projects = [
    {
      name: "VANGOLION",
      about:
        "This website showcases innovative artists and designers and is built with Next.js, Firebase, MongoDB, and Tailwind CSS",

      href: "https://vangolion.com/",
      images: [
        "/images/vangolion/one.png",
        "/images/vangolion/two.png",
        "/images/vangolion/three.png",
      ],
      builtWith: "NextJs, Contentful",
      gitHubUrl: "",
      displayGithub: false,
    },
    {
      name: "UNTRA-STUDIO",
      about:
        "A contemporary website design integrating blogs and news articles, presenting a dynamic and engaging user experience for information dissemination.",

      href: "https://untra-studio-a70e4154f13a56e751482da6fa.webflow.io/",
      images: [
        "/images/untra/one.png",
        "/images/untra/two.png",
        "/images/untra/four.png",
      ],
      builtWith: "WEBFLOW",
      gitHubUrl: "",
      displayGithub: false,
    },
    {
      name: "HUNKER-JUNKER",
      about:
        "A modern restaurant website built with Next.js, styled-components, Jest, and React Testing Library, offering an immersive dining experience with interactive menus.",

      href: "http://www.hunkerjunker.se",
      images: [
        "/images/hunker/one.png",
        "/images/hunker/two.png",
        "/images/hunker/three.png",
      ],
      builtWith: "NextJS",
      gitHubUrl: "",
      displayGithub: false,
    },
    {
      name: "SKEIDAR",
      about:
        "This purely showcases CSS, devoid of practical usage, demonstrating techniques, styles, and effects without integration or functionality.",
      href: "https://65841c432008210008deeea0--tubular-monstera-9d7aeb.netlify.app/",
      images: [
        "/images/skeidar/one.png",
        "/images/skeidar/two.png",
        "/images/skeidar/three.png",
      ],
      builtWith:
        "TypeScript, NextJS, Node, Nest, PostgreSQL, Firebase, Docker, Styled-Components",
      gitHubUrl: "https://github.com/NilsFaelt/skediar",
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
      <SectionTitleContainer>
        <SectionTitle text='PROJECTS' titleColor='white' />
      </SectionTitleContainer>

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
        <LetterYellow>.</LetterYellow>
      </TitleContainer>
      <DisplayImages imagesUrl={projects[project].images} />
      <CopyWrightContainer>
        <CopywrightStyleTextSection
          descriptionArray={[projects[project].about]}
        />
      </CopyWrightContainer>
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
