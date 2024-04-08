import React, { FC } from "react";
import {
  Container,
  Title,
  Text,
  Span,
  TextContainer,
} from "./EachExperience.style";
import { MainText } from "@/ui";

interface Props {
  text: string;
  tools: string;
}
export const EachExperience: FC<Props> = ({ text, tools }) => {
  return (
    <Container>
      <TextContainer>
        <MainText text={text} />
      </TextContainer>
      <TextContainer>
        <MainText text={tools} />
      </TextContainer>
    </Container>
  );
};
