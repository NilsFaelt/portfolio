import React from "react";
import {
  Container,
  CopyWrightContainer,
  TitleContainer,
  NavContainer,
} from "./Landing.style";
import { MainTitle } from "@/ui";
import { CopywrightStyleTextSection } from "@/components/CopywrightStyleTextSection";
import { Nav } from "@/components";

export const Landing = () => {
  const descriptionArray = [
    "Nils Fält: JavaScript/TypeScript developer skilled in React/Next.js, Node.js/Nest.js, and passionate about UX/UI.",
    "Contact ® NilsFaelt@gmail.com tel: +46760698660",
    "Located in Stockholm and Halsingland Sweden ",
  ];
  return (
    <Container>
      <NavContainer>
        <Nav />
      </NavContainer>
      <TitleContainer>
        <MainTitle />
      </TitleContainer>
      <CopyWrightContainer>
        <CopywrightStyleTextSection descriptionArray={descriptionArray} />
      </CopyWrightContainer>
    </Container>
  );
};
