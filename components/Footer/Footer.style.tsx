import Image from "next/image";
import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  background-color: black;
  height: 5rem;

  padding-top: 3rem;
  padding-bottom: 6rem;
`;
export const StyledImage = styled(Image)``;
