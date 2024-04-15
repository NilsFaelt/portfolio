import Image from "next/image";
import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from {
    margin-top:-0.5rem;

    color:yellow;
  }
  to {

    color:white;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: transparent;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0rem;
  background-color: transparent;
  width: 100%;
`;
export const SectionTitleContainer = styled.div`
  margin-top: 3rem;
  @media (max-width: 597px) {
    margin-top: -5rem;
    margin-bottom: 3rem;
  }
`;
export const EachImage = styled(Image)`
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100%;
`;
export const DisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 20%;
  background-color: black;
  @media (max-width: 700px) {
    width: 80vw;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 1.3rem;
  }
`;

export const NavClickContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 22rem;
  margin-top: 0rem;
  @media (max-width: 497px) {
    width: 15rem;
  }
`;
export const RightClickContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  padding-right: 0.8rem;
  background-color: transparent;
  border: solid 0.05rem black;
  cursor: pointer;
  color: white;

  &:hover {
    border-right: solid 0.05rem white;
    border-bottom: solid 0.05rem white;
  }
`;
export const LeftClickContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  padding-left: 0.8rem;
  background-color: transparent;
  border: solid 0.05rem black;
  cursor: pointer;
  color: white;
  &:hover {
    border-left: solid 0.05rem white;
    border-bottom: solid 0.05rem white;
  }
`;

export const Title = styled.h2`
  margin: 0;
  margin-top: 1.5rem;
  font-size: calc(2rem + 4vw);
  text-align: center;
  color: white;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  @media (max-width: 697px) {
    font-size: calc(1.5rem + 2vw);
  }
`;
export const Text = styled.p`
  font-size: cal(1rem + 5vw);
`;
export const StyledImage = styled(Image)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const LetterYellow = styled.span`
  margin-left: 0.2rem;
  font-size: calc(3rem + 5vw);
  text-align: center;
  color: yellow;
  @media (max-width: 697px) {
    font-size: calc(2rem + 7vw);
    text-align: center;
  }
`;
export const CopyWrightContainer = styled.div`
  max-width: 70%;
  margin-left: 1.3rem;
  @media (max-width: 597px) {
    margin-left: 2.5rem;
  }
`;
