import React, { FC } from "react";
import { Container } from "./HomePageView.style";
import { DisplayTextSection, Section, VideoBackground } from "@/components";
import { MainText, MainTitle } from "@/ui";
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
