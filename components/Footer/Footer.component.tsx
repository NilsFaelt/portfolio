import React from "react";
import { Container, StyledImage } from "./Footer.style";
import {
  CopyWrightContainer,
  Video,
} from "../VideoBackground/VideoBackground.style";
import { CopywrightStyleTextSection } from "../CopywrightStyleTextSection";
import { VideoBackground } from "..";
import Image from "next/image";

export const Footer = () => {
  const descriptionArray = [
    "Contact ® NilsFaelt@gmail.com tel: +46760698660",
    "Located in Stockholm and Halsingland Sweden ",
  ];
  return (
    <Container>
      <StyledImage
        width={100}
        height={100}
        alt='Logo of letter N'
        src={"/svg/logo_white.svg"}
      />
      <CopywrightStyleTextSection descriptionArray={descriptionArray} />
      <div></div>
    </Container>
  );
};
