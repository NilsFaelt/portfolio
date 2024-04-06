import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    margin-top:-1rem;
    color:yellow;
  }
  to {
  
  }
`;
const growShrink = keyframes`
  from {
    
    opacity: 0;
    transform: scale(100);

  }
  to {
    opacity: 1;
    transform: scale(1);
  }
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

  box-shadow: 1rem 1rem 1rem black;
`;

export const Letter = styled.h2`
  opacity: 1;
  margin: 0;
  margin-top: 1.5rem;
  font-size: calc(3rem + 5vw);
  text-align: center;
  color: white;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  @media (max-width: 697px) {
    font-size: calc(2rem + 7vw);
    text-align: center;
  }
`;
export const LetterYellow = styled.span`
  margin: 0;
  margin-top: 1.5rem;
  font-size: calc(3rem + 5vw);
  text-align: center;
  width: 80%;
  color: yellow;
  /* animation: ${growShrink} 0.5s ease-in-out forwards; */
  @media (max-width: 697px) {
    font-size: calc(2rem + 7vw);
    text-align: center;
  }
`;
