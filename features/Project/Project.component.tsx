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
import { NavAside } from "@/components";
import { CopywrightStyleTextSection } from "@/components/CopywrightStyleTextSection";
import { LinkToWebsite } from "./components";
import { projects } from "./data";

interface Props {}

export const Project: FC<Props> = ({}) => {
  const [project, setProject] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const handleNextProject = () => {
    const nextProject = (project + 1) % projects.length;
    setProject(nextProject);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const handlePrevProject = () => {
    const prevProject = (project - 1 + projects.length) % projects.length;
    setProject(prevProject);
    setAnimationKey((prevKey) => prevKey + 1);
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

      <CopyWrightContainer>
        <CopywrightStyleTextSection
          descriptionArray={[projects[project].about]}
        />
      </CopyWrightContainer>

      <LinkToWebsite href={projects[project].href} />
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
