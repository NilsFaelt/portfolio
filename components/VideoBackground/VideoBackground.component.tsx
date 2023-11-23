import React, { FC, useEffect, useRef } from "react";
import {
  Container,
  CopyWrightContainer,
  NavContainer,
  TitleContainer,
  Video,
} from "./VideoBackground.style";
import { MainTitle } from "@/ui";
import { Nav } from "..";
import { CopywrightStyleTextSection } from "../CopywrightStyleTextSection";

export const VideoBackground: FC = () => {
  const descriptionArray = [
    "Nils Fält: JavaScript/TypeScript developer skilled in React/Next.js, Node.js/Nest.js, and passionate about UX/UI.",
    "Contact ® NilsFaelt@gmail.com tel: +46760698660",
    "Located in Stockholm and Halsingland Sweden ",
  ];

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Autoplay error:", error);
        });
      }
    }, 1000);
  }, []);

  return (
    <Container>
      <NavContainer>
        <Nav />
      </NavContainer>
      <Video autoPlay muted loop ref={videoRef}>
        <source src='/test3.mp4' />
      </Video>
      <TitleContainer>
        <MainTitle />
      </TitleContainer>
      <CopyWrightContainer>
        <CopywrightStyleTextSection descriptionArray={descriptionArray} />
      </CopyWrightContainer>
    </Container>
  );
};
