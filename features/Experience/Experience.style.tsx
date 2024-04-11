import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 100%;
  min-height: 100vh;
  padding-top: 3rem;
  padding-bottom: 3rem;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
`;
export const DisplayExperiencesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 3rem;
  padding: 2rem;
  background-color: transparent;
  margin-top: 3rem;
  margin-bottom: 3rem;
  gap: 1rem;
  width: clamp(16rem, 70%, 50rem);

  @media (max-width: 497px) {
    justify-content: flex-start;
    width: 17rem;
    padding: 0rem;
    gap: 0rem;
  }
`;
export const Title = styled.h2`
  margin: 0;
  margin-top: 1.5rem;
  font-size: calc(3rem + 5vw);
  text-align: center;
  width: 80%;
  color: white;
  @media (max-width: 697px) {
    font-size: calc(2rem + 7vw);
    text-align: center;
  }
`;
export const Span = styled.span`
  font-size: calc(3rem + 5vw);
  color: yellow;
`;
export const CopywrightContainer = styled.div`
  max-width: 70%;
`;
