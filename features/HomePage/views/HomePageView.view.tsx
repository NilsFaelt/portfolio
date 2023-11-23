import React, { FC } from "react";
import { Container } from "./HomePageView.style";
import { Section, VideoBackground } from "@/components";
import { About, Contact, Project } from "@/features";

export const HomePageView: FC = () => {
  return (
    <Container>
      <VideoBackground />
      <Section>
        <About />
      </Section>
      <Section>
        <Project />
      </Section>
      <Section>
        <Contact />
      </Section>
    </Container>
  );
};
