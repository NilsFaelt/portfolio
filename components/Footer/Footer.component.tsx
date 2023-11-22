import React from "react";
import { Container } from "./Footer.style";
import { CopyWrightContainer } from "../VideoBackground/VideoBackground.style";
import { CopywrightStyleTextSection } from "../CopywrightStyleTextSection";

export const Footer = () => {
  const descriptionArray = [
    "Contact ® NilsFaelt@gmail.com tel: +46760698660",
    "Located in Stockholm and Halsingland Sweden ",
  ];
  return (
    <Container>
      <CopywrightStyleTextSection descriptionArray={descriptionArray} />
    </Container>
  );
};
