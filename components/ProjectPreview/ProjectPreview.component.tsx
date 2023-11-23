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
} from "./ProjectPreview.style";
import { MainText, SectionTitle } from "@/ui";

interface Props {
  project: {
    name: string;
    about: string;
    href: string;
    images: string[];
    builtWith: string;
  };
}
export const ProjectPreview: FC<Props> = ({ project }) => {
  const [imageSrc, setImageSrc] = useState("");
  const { name, href, images, builtWith, about } = project;

  return (
    <Container $imagesrc={imageSrc}>
      <SectionTitle text={name} />
      <UpperContainer>
        <MainText text='VISIT WEBSITE' />
        <StyledHref target='_blank' href={href}>
          {name}
        </StyledHref>
      </UpperContainer>
      <LowerContainer>
        <TextContainer>
          <Text>
            WHAT IS IT: <br /> {about}
          </Text>
        </TextContainer>
        <TextContainer>
          <Text>
            BUILT WITH: <br /> {builtWith}
          </Text>
        </TextContainer>
        <ImageContainer></ImageContainer>
      </LowerContainer>
    </Container>
  );
};
