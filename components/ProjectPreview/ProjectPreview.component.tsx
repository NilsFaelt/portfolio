import React, { FC, useState } from "react";
import { Container, UpperContainer, StyledHref } from "./ProjectPreview.style";
import { MainText } from "@/ui";
import { SvgLinkBar } from "..";

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
      {/* <Title>{name}</Title> */}
      <UpperContainer>
        <StyledHref target='_blank' href={href}>
          <MainText text='VISIT WEBSITE' />
        </StyledHref>
      </UpperContainer>
      {/* {displayGithub && (
        <SvgLinkBar displayGitHub={true} gitHubUrl={gitHubUrl} />
      )} */}
    </Container>
  );
};
