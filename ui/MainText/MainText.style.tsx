import styled from "styled-components";

export const Text = styled.p<{ $color: string }>`
  color: ${(props) => props.$color};
  text-align: center;
`;
