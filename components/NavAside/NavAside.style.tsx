import styled from "styled-components";

export const Container = styled.nav`
  position: absolute;
  left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const LinksContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
`;
export const Text = styled.p<{ $color: string }>`
  font-size: 1rem;
  margin: 0;
  font-size: 0.8rem;
  cursor: pointer;
  width: 0.05rem;
  overflow-wrap: break-word;
  color: ${(props) => props.$color};
`;
export const Line = styled.div`
  height: calc(1.5rem + 2vw);
  width: 0.05rem;
  background-color: white;
`;
