import React, { FC, useState } from "react";
import { Container, UpperContainer, StyledHref } from "./ProjectPreview.style";
import { MainText } from "@/ui";

interface Props {
  project: {
    name: string;
    about: string;
    href: string;
    images: string[];
    builtWith: string;
    gitHubUrl: string;
    displayGithub?: boolean;
  };
}
export const ProjectPreview: FC<Props> = ({ project }) => {
  const [imageSrc, setImageSrc] = useState("");
  const {
    name,
    href,
    images,
    builtWith,
    about,
    gitHubUrl,
    displayGithub = true,
  } = project;

  return (
    <Container $imagesrc={imageSrc}>
      <UpperContainer>
        <StyledHref target='_blank' href={href}>
          <MainText text='VISIT WEBSITE' />
        </StyledHref>
      </UpperContainer>
    </Container>
  );
};
