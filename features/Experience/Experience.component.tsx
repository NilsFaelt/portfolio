import React, { FC, useEffect, useState } from "react";
import {
  Container,
  DisplayExperiencesContainer,
  Span,
  Title,
} from "./Experience.style";
import { EachExperience, NavAside } from "@/components";
import { BigTitle, SectionTitle } from "@/ui";

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
      </DisplayExperiencesContainer>
      <Title>
        IM NOT IN THE <Span>◻︎</Span>{" "}
      </Title>
    </Container>
  );
};
