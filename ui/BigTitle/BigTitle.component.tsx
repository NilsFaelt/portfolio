import React, { FC } from "react";
import { Container, Title, Text } from "./BigTitle.style";

interface Props {
  title: string;
  text?: string;
}

export const BigTitle: FC<Props> = ({ title, text }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};
