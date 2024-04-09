import React from "react";
import { Container, StyledHref, TextContainer } from "./Contact.style";
import { BigTitle, MainText, SectionTitle } from "@/ui";
import { NavAside, SvgLinkBar } from "@/components";

export const Contact = () => {
  return (
    <Container id='contact'>
      <NavAside sectionName='CONTACT' color='white' activeColor='white' />
      <SectionTitle titleColor='white' text='CONTACT' />
      <TextContainer>
        <MainText color='white' text='MAIL: NilsFaelt@gmail.com' />
        <MainText color='white' text='TEL: +46760698660' />
        <StyledHref href='mailto:nilsfalt@gmail.com'>Mail</StyledHref>
      </TextContainer>
      <TextContainer>
        <MainText
          color='white'
          text='Creating smart and captivating solutions tailored to your needs.'
        />
        <MainText color='white' text='/Nils Fält' />
      </TextContainer>

      <SvgLinkBar />
    </Container>
  );
};
