import React from "react";
import { Container, StyledHref, TextContainer } from "./Contact.style";
import { MainText, SectionTitle } from "@/ui";

export const Contact = () => {
  return (
    <Container id='contact'>
      <SectionTitle titleColor='black' text='CONTACT' />
      <TextContainer>
        <MainText text='MAIL: NilsFalt@gmail.com' />
        <MainText text='TEL: +46760698660' />
        <StyledHref>Mail</StyledHref>
      </TextContainer>
      <TextContainer>
        <MainText text='Im am located in Stockholm and Hälsingland but always eager to go to new places and meet colleagues and friends' />
        <MainText text='/Nils Fält' />
      </TextContainer>
    </Container>
  );
};
