import React, { FC } from "react";
import { Container, Span, TextContainer, Title } from "./About.style";
import { MainText, SectionTitle } from "@/ui";
import { BigTextAnimation, NavAside } from "@/components";

export const About: FC = () => {
  return (
    <Container id='about'>
      <NavAside sectionName='ABOUT' color='white' />
      <SectionTitle text='ABOUT' titleColor='white' />
      <TextContainer $border='right'>
        <MainText text='With 4 years of experience, I specialize in crafting smart solutions for both front-end and back-end development. My focus is on creating captivating designs infused with inspiration and ensuring user-friendly UI/UX interfaces. I excel in guiding companies through evolution and adaptation, prioritizing the integration of the latest technologies to drive innovation and success.' />
      </TextContainer>
      {/* <TextContainer $border='left'>
        <MainText text='' />
      </TextContainer> */}
      {/* <Title>
        NILS FALT<Span>.</Span>
      </Title> */}
      <BigTextAnimation />
    </Container>
  );
};
