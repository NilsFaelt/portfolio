import React, { FC } from "react";
import { Container, Text, LinksContainer, Line } from "./NavAside.style";

interface Props {
  sectionName: string;
  color?: "black" | "white";
  activeColor?: "black" | "white";
}

export const NavAside: FC<Props> = ({
  color = "black",
  sectionName,
  activeColor = "white",
}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkData = [
    { name: "ABOUT", anchorPoint: "string", id: "about" },
    { name: "PROJECTS", anchorPoint: "string", id: "project" },
    { name: "CONTACT", anchorPoint: "string", id: "contact" },
  ];
  return (
    <Container>
      {linkData.map((link, i) => {
        const active = sectionName === link.name;
        return (
          <LinksContainer key={i}>
            <Text
              $color={active ? "yellow" : color}
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </Text>
          </LinksContainer>
        );
      })}
    </Container>
  );
};
