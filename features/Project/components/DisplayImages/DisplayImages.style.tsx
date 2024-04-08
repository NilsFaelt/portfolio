import Image from "next/image";
import styled, { keyframes } from "styled-components";

const slideInLeftAnimation = keyframes`
  from {
  opacity:0;
  margin-left:-5rem;

  }
  to {
 
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 80;
`;

export const StyledImage = styled(Image)`
  width: calc(3rem + 5vw);
  height: calc(3rem + 5vw);
  animation: ${slideInLeftAnimation} 1s forwards;
`;
