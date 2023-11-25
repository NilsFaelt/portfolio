import React from "react";
import { Container, StyledHref, TextContainer } from "./Contact.style";
import { BigTitle, MainText, SectionTitle } from "@/ui";
import { NavAside, SvgLinkBar } from "@/components";

export const Contact = () => {
  return (
    <Container id='contact'>
      <NavAside sectionName='CONTACT' color='black' activeColor='white' />
      <SectionTitle titleColor='black' text='CONTACT' />
      <TextContainer>
        <MainText color='black' text='MAIL: NilsFaelt@gmail.com' />
        <MainText color='black' text='TEL: +46760698660' />
        <StyledHref href='mailto:nilsfalt@gmail.com'>Mail</StyledHref>
      </TextContainer>
      <TextContainer>
        <MainText
          color='black'
          text='Im am located in Stockholm and Hälsingland but always eager to go to new places and meet colleagues and friends'
        />
        <MainText color='black' text='/Nils Fält' />
      </TextContainer>

      <SvgLinkBar />
    </Container>
  );
};
