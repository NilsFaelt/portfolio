import React, { FC } from "react";
import { Container, TextContainer } from "./About.style";
import { MainText, SectionTitle } from "@/ui";
import { BigTextAnimation, NavAside } from "@/components";
import { CopywrightStyleTextSection } from "@/components/CopywrightStyleTextSection";

export const About: FC = () => {
  const descriptionArray = [
    "Nils Fält: JavaScript/TypeScript developer skilled in React/Next.js, Node.js/Nest.js, and passionate about UX/UI.",
    "Contact ® NilsFaelt@gmail.com tel: +46760698660",
    "Located in Stockholm and Halsingland Sweden ",
  ];
  return (
    <Container id='about'>
      <NavAside sectionName='ABOUT' color='white' />
      <SectionTitle text='ABOUT' titleColor='white' />
      <TextContainer $border='right'>
        <MainText text='With 4 years of experience, I specialize in crafting smart solutions for both front-end and back-end development. ' />
      </TextContainer>
      <TextContainer $border='right'>
        <MainText text='My focus is on creating captivating designs infused with inspiration and ensuring user-friendly UI/UX interfaces. Prioritizing the integration of the latest technologies to drive innovation and success.' />
      </TextContainer>
      <BigTextAnimation text='Me' />
      <CopywrightStyleTextSection descriptionArray={descriptionArray} />
    </Container>
  );
};
