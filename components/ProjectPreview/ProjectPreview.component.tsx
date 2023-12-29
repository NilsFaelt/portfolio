import React, { FC, useState } from "react";
import {
  Container,
  LowerContainer,
  UpperContainer,
  Image,
  StyledHref,
  ImageContainer,
  TextContainer,
  Text,
  Title,
} from "./ProjectPreview.style";
import { MainText, SectionTitle } from "@/ui";
import { SvgLinkBar } from "..";

interface Props {
  project: {
    name: string;
    about: string;
    href: string;
    images: string[];
    builtWith: string;
    gitHubUrl: string;
  };
}
export const ProjectPreview: FC<Props> = ({ project }) => {
  const [imageSrc, setImageSrc] = useState("");
  const { name, href, images, builtWith, about, gitHubUrl } = project;

  return (
    <Container $imagesrc={imageSrc}>
      {/* <Title>{name}</Title> */}
      <UpperContainer>
        <StyledHref target='_blank' href={href}>
          <MainText text='VISIT WEBSITE' />
        </StyledHref>
      </UpperContainer>
      <SvgLinkBar displayGitHub={true} gitHubUrl={gitHubUrl} />
    </Container>
  );
};
