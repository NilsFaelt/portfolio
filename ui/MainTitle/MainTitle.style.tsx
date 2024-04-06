import styled, { keyframes } from "styled-components";
const shadowApearAnimation = keyframes`
  from {
    box-shadow: 5.5rem 5.5rem 5.5rem black;

  

  }
  to {
    box-shadow: 0rem 0rem 0rem black;
  
    
  }
`;
const shadowApearAnimation2 = keyframes`
  from {

  
    box-shadow: 0rem 0rem 0rem black;
    
    
  }
  to {
    
    box-shadow: 5.5rem 5.5rem 5.5rem black;
    
  }
`;
export const Container = styled.div`
  position: relative;
  display: column;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
  padding: 3rem;
  box-sizing: border-box;
  animation: ${shadowApearAnimation} 1.5s ease-in-out forwards;
  &:hover {
    animation: ${shadowApearAnimation2} 0.5s ease-in-out forwards;
  }
`;

export const Title = styled.h1`
  font-size: calc(1rem + 5vw);
  white-space: nowrap;
  color: white;
  margin: 0;
`;
export const Text = styled.p`
  font-size: calc(0.4rem + 0.6vw);
  margin: 0;
`;
