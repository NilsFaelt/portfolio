import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;

  @media (max-width: 497px) {
    min-width: 16rem;
  }
`;
export const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  align-items: center;
  padding-top: 3rem;
  padding: 1rem;
  margin-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: solid white 0.1rem;
`;
export const Title = styled.h4`
  color: white;
  margin: 0;
`;
export const Span = styled.span`
  color: yellow;
  margin: 0;
`;
export const Text = styled.p`
  color: white;
  margin: 0;
`;
