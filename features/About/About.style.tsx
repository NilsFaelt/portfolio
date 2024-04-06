import styled, { keyframes } from "styled-components";

// Keyframes for fade-in animation

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  min-height: 100vh;
  padding-top: 3rem;
  padding-bottom: 3rem;
  box-sizing: border-box;
  padding-left: 5rem;
  padding-right: 5rem;
  background-size: cover;
  background-position: center; */
`;

export const TextContainer = styled.div<{ $border: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding-top: 3rem;
  padding: 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: clamp(18rem, 70%, 50rem);
  border-bottom: solid white 0.1rem;
`;
export const AboutTitle = styled.h3`
  font-size: calc(0.9rem + 0.6vw);
  color: white;
`;

export const Title = styled.h2`
  margin: 0;
  margin-top: 1.5rem;
  font-size: calc(3rem + 5vw);
  text-align: center;
  width: 80%;
  color: white;
  @media (max-width: 697px) {
    font-size: calc(2rem + 7vw);
    text-align: center;
  }
`;
export const Span = styled.span`
  color: yellow;
`;
