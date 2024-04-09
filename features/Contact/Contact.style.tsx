import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  min-height: 100vh;
  padding-top: 3rem;
  padding-bottom: 3rem;
  box-sizing: border-box;
  padding-left: 5rem;
  padding-right: 5rem;
  width: 100%;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding-top: 3rem;
  padding: 1rem;
  margin-top: 3rem;
  width: clamp(18rem, 70%, 50rem);
  border-bottom: 0.05rem solid black;
  border-right: 0.05rem solid black;
  @media (max-width: 497px) {
    width: 17rem;
  }
`;
export const StyledHref = styled.a`
  color: white;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: underline yellow;
  }
`;
export const StyledPhoneNumber = styled.span`
  color: white;
`;
