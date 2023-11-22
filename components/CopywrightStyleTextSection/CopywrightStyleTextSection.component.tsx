import React, { FC } from "react";
import { Container, Text } from "./CopywrightStyleTextSection.style";
interface Props {
  descriptionArray: string[];
}

export const CopywrightStyleTextSection: FC<Props> = ({ descriptionArray }) => {
  return (
    <Container>
      {descriptionArray.map((text, i) => {
        return <Text key={i}>{text}</Text>;
      })}
    </Container>
  );
};
