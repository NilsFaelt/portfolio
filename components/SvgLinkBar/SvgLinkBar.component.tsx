import React, { FC } from "react";
import { Container, StyledHref, StyledSvg } from "./SvgLinkBar.style";

export const SvgLinkBar: FC<{
  displayGitHub?: boolean;
  gitHubUrl?: string;
}> = ({
  displayGitHub = false,
  gitHubUrl = "https://github.com/NilsFaelt",
}) => {
  return (
    <Container>
      <StyledHref aria-label='link to github' target='_blank' href={gitHubUrl}>
        <StyledSvg alt='github logo' src='/svg/github.svg' />
      </StyledHref>
      {!displayGitHub && (
        <StyledHref
          aria-label='link to gmail'
          target='_blank'
          href='mailto:nilsfalt@gmail.com'
        >
          <StyledSvg alt='email logo' src='/svg/email.svg' />
        </StyledHref>
      )}
      {!displayGitHub && (
        <StyledHref
          aria-label='link to linkedin'
          target='_blank'
          href='https://www.linkedin.com/in/nils-faelt-73b163227/'
        >
          <StyledSvg src='/svg/linkedin.svg' alt='linkedin logo' />
        </StyledHref>
      )}
    </Container>
  );
};
