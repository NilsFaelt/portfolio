import React, { FC, useEffect, useState } from "react";
import {
  Container,
  DisplayExperiencesContainer,
  Span,
  Title,
} from "./Experience.style";
import { EachExperience, NavAside } from "@/components";
import { SectionTitle } from "@/ui";

export const Experience: FC = () => {
  const [phrase, setPhrase] = useState("I'm not in the");
  const words = ["place", "mood", "office", "mood", "zone"]; // Add your desired words here
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < words.length) {
        setPhrase(`${phrase} ${words[index]}`);
        setIndex(index + 1);
      } else {
        setTimeout(() => {
          setPhrase("I'm not in the");
          setIndex(0);
        }, 5000); // Wait for 5 seconds before resetting the phrase
      }
    }, 1000); // Add a word every second

    return () => clearInterval(interval);
  }, [phrase, index, words]);
  return (
    <Container id='experience'>
      <SectionTitle titleColor='white' text='EXPERIENCE' />
      <NavAside sectionName='EXPERIENCE' color='white' activeColor='white' />
      <DisplayExperiencesContainer>
        <EachExperience
          text='With 4 years of experience as a TypeScript developer aiding startups in their beginnings, I stay updated daily with the latest technology to deliver cutting-edge solutions.'
          tools='Javascript/Typescript, React, NextJs, Node/Nest/Express, SQL, Prisma, Firebase, GIT, Github, Docker, Kali,  CSS, HTML,  styled-components, tailwind, API, CMS'
        />
      </DisplayExperiencesContainer>
      <Title>
        IM NOT IN THE <Span>◻︎</Span>{" "}
      </Title>
    </Container>
  );
};
