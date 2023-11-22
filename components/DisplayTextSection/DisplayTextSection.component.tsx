import React, { FC, ReactNode } from "react";
import { Container } from "./DisplayTextSection.style";

interface Props {
  children: ReactNode;
}

export const DisplayTextSection: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};
