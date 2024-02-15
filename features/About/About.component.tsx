import React, { FC } from "react";
import { Container, Span, TextContainer, Title } from "./About.style";
import { MainText, SectionTitle } from "@/ui";
import { NavAside } from "@/components";

export const About: FC = () => {
  return (
    <Container id='about'>
      <NavAside sectionName='ABOUT' color='white' />
      <SectionTitle text='ABOUT' titleColor='white' />
      <TextContainer $border='right'>
        <MainText text='With 4 years of experience under my belt, Ive been instrumental in assisting companies during their inception phase, aiding them in building their technological infrastructure from the ground up. Specializing in UX/UI design and backend development with Node.js, Ive contributed to crafting exceptional user experiences and robust software solutions. My commitment to thorough testing ensures the reliability and stability of the applications I develop, setting them apart in the competitive market. Continuously evolving and adapting, I prioritize staying abreast of the latest cybersecurity measures to safeguard the integrity of the systems I help create.' />
      </TextContainer>
      {/* <TextContainer $border='left'>
        <MainText text='' />
      </TextContainer> */}
      <Title>
        NILS FALT<Span>.</Span>
      </Title>
    </Container>
  );
};
