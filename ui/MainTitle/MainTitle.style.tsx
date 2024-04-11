import styled from "styled-components";
import { Inter, Roboto_Mono, Bungee_Spice } from "next/font/google";

export const Container = styled.div<{ shadow: number; bgOpacitty: number }>`
  position: relative;
  display: column;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
  padding: 3rem;
  box-sizing: border-box;
  border-radius: 1rem;
  box-shadow: ${(props) => props.shadow}rem ${(props) => props.shadow}rem
    ${(props) => props.shadow}rem black;
  background-color: rgba(0, 0, 0, 0);
`;

export const Title = styled.h1`
  font-size: calc(2rem + 5vw);
  white-space: nowrap;
  color: white;
  margin: 0;
`;
export const Text = styled.p`
  font-size: calc(0.6rem + 0.6vw);
  margin: 0;
`;
