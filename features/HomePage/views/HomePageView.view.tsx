import React, { FC } from "react";
import { Container } from "./HomePageView.style";
import { Section, VideoBackground } from "@/components";
import { About, Contact, Experience, Project } from "@/features";
import { Landing } from "@/features/Landing";

export const HomePageView: FC = () => {
  return (
    <Container>
      <VideoBackground />
      <Section>
        <Landing />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Project />
      </Section>
      <Section>
        <Experience />
      </Section>
      <Section>
        <Contact />
      </Section>
    </Container>
  );
};
