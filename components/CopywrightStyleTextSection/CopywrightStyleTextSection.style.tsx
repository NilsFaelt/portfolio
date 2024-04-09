import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  transition: transform 0.5s;
  max-width: 20rem;
  &:hover {
    transform: scale(1.7);
    transition: transform 1.5s;

    @media (max-width: 597px) {
      width: 10rem;
    }
  }
`;

export const Text = styled.p`
  font-size: 0.55rem;
  margin: 0;
  text-align: center;
`;
export const StyledPhoneNumber = styled.span`
  color: white;
`;
