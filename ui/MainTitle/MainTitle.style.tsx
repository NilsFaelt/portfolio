import styled, { keyframes } from "styled-components";
const shadowApearAnimation = keyframes`
  from {

    box-shadow: 0rem 0rem 0rem black;
  

  }
  to {
    box-shadow: 0.5rem 0.5rem 0.5rem black;
  
    
  }
`;
const shadowApearAnimation2 = keyframes`
  from {

    box-shadow: 0.5rem 0.5rem 0.5rem black;
    
    
    
  }
  to {
    box-shadow: 0rem 0rem 0rem black;
  
    
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

  box-shadow: 1rem 1rem 1rem black;
  &:hover {
    animation: ${shadowApearAnimation2} 0.5s ease-in-out forwards;
  }
  animation: ${shadowApearAnimation} 1.5s ease-in-out forwards;
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
