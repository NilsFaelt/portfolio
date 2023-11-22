import React, { FC } from "react";
import { Container } from "./Project.style";
import { SectionTitle } from "@/ui";
interface Props {}
export const Project: FC<Props> = ({}) => {
  return (
    <Container id='project'>
      <SectionTitle text='PROJECTS' />
    </Container>
  );
};
