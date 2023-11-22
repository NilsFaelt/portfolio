import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
export const LinksContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
`;
export const Text = styled.p`
  font-size: 1rem;
  margin: 0;
  font-size: calc(0.4rem + 0.6vw);
  cursor: pointer;
`;
export const Line = styled.div`
  width: calc(1.5rem + 2vw);
  height: 0.05rem;
  background-color: white;
`;
