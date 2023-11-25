import React, { FC } from "react";
import {
  Container,
  DisplayExperiencesContainer,
  Span,
  Title,
} from "./Experience.style";
import { EachExperience, NavAside } from "@/components";
import { BigTitle, SectionTitle } from "@/ui";

export const Experience: FC = () => {
  return (
    <Container id='experience'>
      <SectionTitle titleColor='white' text='EXPERIENCE' />
      <NavAside sectionName='EXPERIENCE' color='white' activeColor='white' />
      <DisplayExperiencesContainer>
        <EachExperience
          text='Studying IT-security at IT-university in Stockholm, 2 years '
          skills='Linux, Kali, AD, Pentesting, Network and security, Azure, GIT'
        />
        <EachExperience
          text='Fullstack developer 7 months internship at QTE'
          skills='Javascript/Typescript, React, nextJS, GIT node, UX/UI, React-native, nest, HTML, css'
        />
        <EachExperience
          text='Graduated Front-end/app-developer, 2 year university '
          skills='Javascript/Typescript, React, nextJS, node, UX/UI, React-native,GIT, HTML, css'
        />
        <EachExperience
          text='Freelance developer at Untra-studio, 6 months'
          skills='Webflow, CMS'
        />
        {/* <EachExperience
          text='3,5 years of Javascript development'
          skills='Typescript, React, nextJS, GIT, node, nest, postgreSQL, firebase, styled-components'
        /> */}
      </DisplayExperiencesContainer>
      <Title>
        IM NOT IN THE <Span>◻︎</Span>{" "}
      </Title>
    </Container>
  );
};
