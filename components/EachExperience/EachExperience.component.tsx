import React, { FC } from "react";
import { Container, Title, Text, Span } from "./EachExperience.style";

interface Props {
  text: string;
  tools: string;
}
export const EachExperience: FC<Props> = ({ text, tools }) => {
  return (
    <Container>
      <Title>
        <Span>EXPERIENCE:</Span> {text}
      </Title>
      <Text>
        {" "}
        <Span>PRIMARY TOOLS: </Span> {tools}
      </Text>
    </Container>
  );
};
