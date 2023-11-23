import React, { FC } from "react";
import { Container, StyledHref, StyledSvg } from "./SvgLinkBar.style";

export const SvgLinkBar: FC = () => {
  return (
    <Container>
      <StyledHref
        target='_blank'
        href='https://www.linkedin.com/in/nils-faelt-73b163227/'
      >
        <StyledSvg src='/svg/linkedin.svg' />
      </StyledHref>
      <StyledHref target='_blank' href='https://github.com/NilsFaelt'>
        <StyledSvg src='/svg/github.svg' />
      </StyledHref>
      <StyledHref target='_blank' href='mailto:nilsfalt@gmail.com'>
        <StyledSvg src='/svg/email.svg' />
      </StyledHref>
    </Container>
  );
};
