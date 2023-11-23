import styled from "styled-components";

export const Text = styled.h2<{ $color: string; $bordercolor: string }>`
  font-size: calc(0.9rem + 0.6vw);
  color: ${(props) => props.$color};

  margin: 0;
  border-left: solid 0.05rem ${(props) => props.$bordercolor};
  border-bottom: solid 0.05rem ${(props) => props.$bordercolor};
  padding: 1rem;
`;
