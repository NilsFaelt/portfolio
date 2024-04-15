import React, { FC, useState } from "react";
import {
  Container,
  OuterContainer,
  StyledPhoneNumber,
  StyledSvg,
  Text,
} from "./CopywrightStyleTextSection.style";
interface Props {
  descriptionArray: string[];
  displayMagnifyGlass?: boolean;
}

export const CopywrightStyleTextSection: FC<Props> = ({
  descriptionArray,
  displayMagnifyGlass = false,
}) => {
  const [magnify, setMagnify] = useState(false);
  return (
    <OuterContainer
      magnify={magnify ? "1.7" : "1"}
      onMouseLeave={() => setMagnify(false)}
    >
      <Container>
        {descriptionArray.map((text, i) => {
          return (
            <Text key={i}>
              <StyledPhoneNumber>{text}</StyledPhoneNumber>
            </Text>
          );
        })}
      </Container>
      {displayMagnifyGlass && (
        <StyledSvg
          $left={magnify ? "-10" : "0"}
          opacity={magnify ? "0" : "1"}
          onMouseOver={() => setMagnify(true)}
          alt='magnifying glass logo'
          src='/svg/magnifying-glass.svg'
        />
      )}
    </OuterContainer>
  );
};
