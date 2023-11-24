import React, { FC } from "react";
import { Container, Title, Text } from "./EachExperience.style";

interface Props {
  text: string;
  skills: string;
}
export const EachExperience: FC<Props> = ({ text, skills }) => {
  return (
    <Container>
      <Title>EXPERIENCE: {text}</Title>
      <Text>SKILLS: {skills}</Text>
    </Container>
  );
};
