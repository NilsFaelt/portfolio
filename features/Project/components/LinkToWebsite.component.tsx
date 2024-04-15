import React, { FC } from "react";
import { StyledHref } from "./LinkToWebsite.style";
import { MainText } from "@/ui";

interface Props {
  href: string;
}

export const LinkToWebsite: FC<Props> = ({ href }) => {
  return (
    <StyledHref href={href} target='_blank'>
      <MainText text='VISIT WEBSITE' />
    </StyledHref>
  );
};
