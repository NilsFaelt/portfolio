import styled from "styled-components";
import css from "styled-jsx/css";

interface StyledSvgProps {
  opacity: string;
  $left: string;
}

export const OuterContainer = styled.div<{ magnify: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  transition: transform 0.5s;
  gap: 0.5rem;
  max-width: 20rem;
  transform: scale(${(props) => props.magnify});
  transition: transform 1.5s;
  @media (max-width: 597px) {
    width: 10rem;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 20rem;
`;

export const Text = styled.p`
  font-size: 0.55rem;
  margin: 0;
  text-align: center;
`;
export const StyledPhoneNumber = styled.span`
  color: white;
`;
export const StyledSvg = styled.img<StyledSvgProps>`
  width: calc(0.5vw + 1.5rem);
  height: calc(0.5vw + 1.5rem);

  transition: transform 1s, opacity 1.5s;
  transform: translateX(${(props) => props.$left}rem);
  opacity: ${(props) => props.opacity};
`;
