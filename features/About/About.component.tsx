import React, { FC } from "react";
import { Container, TextContainer } from "./About.style";
import { BigTitle, MainText, SectionTitle } from "@/ui";
import { NavAside } from "@/components";

export const About: FC = () => {
  return (
    <Container id='about'>
      <NavAside sectionName='ABOUT' color='white' />
      <SectionTitle text='ABOUT' titleColor='white' />
      <TextContainer $border='right'>
        <MainText text='With 3.5 years as a developer, specializing in front-end development, I graduated as a front-end developer and currently pursue IT security studies. Proficient in coding, I excel in crafting engaging interfaces and prioritize ongoing learning to bolster cybersecurity skills for comprehensive software development.' />
      </TextContainer>
      <TextContainer $border='left'>
        <MainText text='Crafting modern design using tools like React, Next.js, and cutting-edge CSS-in-JS techniques, I prioritize user-centric interfaces. Implementing security measures across backend systems with Node.js, Nest.js, and stringent API authentication assures robust protection, ensuring data integrity and user confidentiality in every aspect of development' />
      </TextContainer>
      <BigTitle title='NILS FALT.' />
    </Container>
  );
};
