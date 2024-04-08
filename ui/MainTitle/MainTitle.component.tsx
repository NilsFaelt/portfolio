import React, { FC, useEffect, useState } from "react";
import { Container, Title, Text } from "./MainTitle.style";

export const MainTitle: FC<{ borderColor?: string }> = ({
  borderColor = "white",
}) => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container shadow={scrollValue / 50} bgOpacitty={scrollValue / 300}>
      <Title>Nils Fält</Title>
      <Text>DEVELOPER</Text>
    </Container>
  );
};
