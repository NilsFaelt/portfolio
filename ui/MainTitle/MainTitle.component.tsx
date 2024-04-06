import React, { FC } from "react";
import { Container, Title, Text } from "./MainTitle.style";

export const MainTitle: FC<{ borderColor?: string }> = ({
  borderColor = "white",
}) => {
  return (
    <Container>
      <Title>Nils Fält</Title>
      <Text>DEVELOPER</Text>
    </Container>
  );
};
