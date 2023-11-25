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
  /* background-image: url("https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"); /* Add your background image URL */
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

  width: clamp(18rem, 70%, 50rem);
`;
export const AboutTitle = styled.h3`
  font-size: calc(0.9rem + 0.6vw);
  color: white;
`;
