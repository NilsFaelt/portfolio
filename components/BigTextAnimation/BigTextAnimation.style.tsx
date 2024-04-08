import styled, { keyframes } from "styled-components";

const growShrink = keyframes`

`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 1rem;
`;

export const Letter = styled.h2`
  opacity: 1;
  margin: 0;
  margin-top: 1.5rem;
  font-size: calc(3rem + 5vw);
  text-align: center;
  color: white;
  @media (max-width: 697px) {
    font-size: calc(2rem + 7vw);
    text-align: center;
  }
`;
export const LetterYellow = styled.span`
  margin-top: 1.5rem;
  font-size: calc(3rem + 5vw);
  text-align: center;

  color: yellow;
  animation: ${growShrink} 3.5s ease-in-out infinite;
  @media (max-width: 697px) {
    font-size: calc(2rem + 7vw);
    text-align: center;
  }
`;
