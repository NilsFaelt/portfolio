import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 1rem;
  gap: 1rem;
  width: 30%;
  min-width: 20rem;
  min-height: 7rem;
  @media (max-width: 497px) {
    min-width: 16rem;
  }
`;

export const Title = styled.h4`
  color: black;
  margin: 0;
`;
export const Text = styled.p`
  color: white;
  margin: 0;
`;
