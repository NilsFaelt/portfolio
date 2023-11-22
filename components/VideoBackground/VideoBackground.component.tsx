import React, { FC } from "react";
import { Container, TitleContainer, Video } from "./VideoBackground.style";
import { MainTitle } from "@/ui";

export const VideoBackground: FC = () => {
  return (
    <Container>
      <Video autoPlay muted loop>
        <source src='/mp4/gold.mp4' />
      </Video>
      <TitleContainer>
        <MainTitle />
      </TitleContainer>
    </Container>
  );
};
