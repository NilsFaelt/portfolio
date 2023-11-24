import React, { FC } from "react";
import { Container, StyledHref, StyledSvg } from "./SvgLinkBar.style";

export const SvgLinkBar: FC = () => {
  return (
    <Container>
      <StyledHref
        aria-label='link to linkedin'
        target='_blank'
        href='https://www.linkedin.com/in/nils-faelt-73b163227/'
      >
        <StyledSvg src='/svg/linkedin.svg' alt='linkedin logo' />
      </StyledHref>
      <StyledHref
        aria-label='link to github'
        target='_blank'
        href='https://github.com/NilsFaelt'
      >
        <StyledSvg alt='github logo' src='/svg/github.svg' />
      </StyledHref>
      <StyledHref
        aria-label='link to gmail'
        target='_blank'
        href='mailto:nilsfalt@gmail.com'
      >
        <StyledSvg alt='email logo' src='/svg/email.svg' />
      </StyledHref>
    </Container>
  );
};
