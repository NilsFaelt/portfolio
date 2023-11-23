import React, { FC } from "react";
import {
  Container,
  StyledPhoneNumber,
  Text,
} from "./CopywrightStyleTextSection.style";
interface Props {
  descriptionArray: string[];
}

export const CopywrightStyleTextSection: FC<Props> = ({ descriptionArray }) => {
  return (
    <Container>
      {descriptionArray.map((text, i) => {
        return (
          <Text key={i}>
            <StyledPhoneNumber>{text}</StyledPhoneNumber>
          </Text>
        );
      })}
    </Container>
  );
};
