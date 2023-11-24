import React, { FC } from "react";
import { Container, Text, LinksContainer, Line } from "./Nav.style";

interface Props {
  linkData: {
    name: string;
    anchorPoint: string;
    id: string;
  }[];
}

export const Nav: FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkData = [
    { name: "ABOUT", anchorPoint: "string", id: "about" },
    { name: "PROJECTS", anchorPoint: "string", id: "project" },
    { name: "EXPERIENCE", anchorPoint: "string", id: "experience" },
    { name: "CONTACT", anchorPoint: "string", id: "contact" },
  ];
  return (
    <Container>
      {linkData.map((link, i) => {
        const isLastItem = i === linkData.length - 1;
        return (
          <LinksContainer key={i}>
            <Text onClick={() => scrollToSection(link.id)}>{link.name}</Text>
            {!isLastItem && <Line />}
          </LinksContainer>
        );
      })}
    </Container>
  );
};
