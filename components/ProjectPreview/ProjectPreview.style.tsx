import styled from "styled-components";

export const Container = styled.div<{ $imagesrc: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.6);
  gap: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;

  padding: 1rem;
  box-sizing: border-box;
  @media (max-width: 497px) {
    width: 20rem;
  }
`;
export const UpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  @media (max-width: 497px) {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;
export const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  @media (max-width: 497px) {
    gap: 1rem;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 20rem;
  @media (max-width: 497px) {
    max-width: 15rem;
    padding: 0rem;
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
export const Title = styled.h2`
  font-size: calc(0.9rem + 0.6vw);
  color: white;
  margin: 0;
  padding: 1rem;
`;
