import styled, { css } from "styled-components";

export const Container = styled.div<{ isVisible: boolean }>`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 3.5s ease, transform 3.5s ease;

  /* Apply styles when section is visible */
  ${(props) =>
    props.isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;
