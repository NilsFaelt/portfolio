import React, { FC, useEffect, useState } from "react";
import { Container, Title, Text } from "./MainTitle.style";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

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
    <Container shadow={scrollValue / 900} bgOpacitty={scrollValue / 800}>
      <Title className={oswald.className}>NILS FÄLT</Title>
      <Text className={oswald.className}>DEVELOPER</Text>
    </Container>
  );
};
