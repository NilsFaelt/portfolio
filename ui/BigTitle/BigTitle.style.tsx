import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
`;
export const Title = styled.h2`
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
export const Text = styled.p`
  font-size: cal(1rem + 5vw);
`;
