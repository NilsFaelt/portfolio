import styled from "styled-components";

export const Container = styled.div<{ $imagesrc: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: black;
  gap: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  border-right: solid 0.05rem white;
  border-bottom: solid 0.05rem white;
  padding: 1rem;
  box-sizing: border-box;
`;
export const UpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
`;
export const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0);
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  @media (max-width: 497px) {
    max-width: 15rem;
    padding: 2rem;
  }
`;

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;
`;
export const StyledHref = styled.a`
  color: white;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    text-decoration: underline yellow;
  }
`;

export const Text = styled.p`
  color: white;

  text-align: center;
`;
