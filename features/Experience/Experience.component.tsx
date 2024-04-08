import React, { FC } from "react";
import {
  Container,
  DisplayExperiencesContainer,
  Span,
  Title,
  CopywrightContainer,
} from "./Experience.style";
import { EachExperience, NavAside } from "@/components";
import { SectionTitle } from "@/ui";
import { CopywrightStyleTextSection } from "@/components/CopywrightStyleTextSection";

export const Experience: FC = () => {
  const descriptionArray = [
    "Nils Fält: JavaScript/TypeScript developer skilled in React/Next.js, Node.js/Nest.js, and passionate about UX/UI.",
    "Contact ® NilsFaelt@gmail.com tel: +46760698660",
    "Located in Stockholm and Halsingland Sweden ",
  ];

  return (
    <Container id='experience'>
      <SectionTitle titleColor='white' text='EXPERIENCE' />
      <NavAside sectionName='EXPERIENCE' color='white' activeColor='white' />
      <DisplayExperiencesContainer>
        <EachExperience
          text='With 4 years of experience as a TypeScript developer, I stay updated daily with the latest technology to deliver cutting-edge solutions'
          tools='Javascript/Typescript, React, NextJs, Node/Nest/Express, SQL, Prisma, Firebase, GIT, Github, Docker, Kali,  CSS, HTML,  styled-components, tailwind, API, CMS'
        />
      </DisplayExperiencesContainer>
      <Title>
        IM NOT IN THE <Span>◻︎</Span>{" "}
      </Title>
      <CopywrightContainer>
        <CopywrightStyleTextSection descriptionArray={descriptionArray} />
      </CopywrightContainer>
    </Container>
  );
};
