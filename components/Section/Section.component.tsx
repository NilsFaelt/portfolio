import React, { FC, ReactNode } from "react";
import { Container } from "./Section.style";
interface Props {
  children: ReactNode;
}

export const Section: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};
