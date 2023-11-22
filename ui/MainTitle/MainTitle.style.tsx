import styled from "styled-components";

export const Container = styled.div<{ $bordercolor: string }>`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: solid 0.05rem ${(props) => props.$bordercolor};
  border-bottom: solid 0.05rem ${(props) => props.$bordercolor};
  padding: 1rem;

  background-color: rgba(0, 0, 0, 0);
`;
export const Title = styled.h1`
  font-size: calc(0.9rem + 0.6vw);
  color: white;
  margin: 0;
`;
export const Text = styled.p`
  font-size: calc(0.4rem + 0.6vw);
  margin: 0;
`;
