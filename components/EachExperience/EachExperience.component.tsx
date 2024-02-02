import React, { FC } from "react";
import { Container, Title, Text, Span } from "./EachExperience.style";

interface Props {
  text: string;
  skills: string;
}
export const EachExperience: FC<Props> = ({ text, skills }) => {
  return (
    <Container>
      <Title>
        <Span>EXPERIENCE:</Span> {text}
      </Title>
      <Text>
        {" "}
        <Span>SKILLS: </Span> {skills}
      </Text>
    </Container>
  );
};
