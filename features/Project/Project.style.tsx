import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const NavClickContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
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
  background-color: black;
  border: solid 0.05rem black;
  cursor: pointer;
  color: white;
  border-right: solid 0.05rem white;
  border-bottom: solid 0.05rem white;
  &:hover {
    border-right: solid 0.05rem yellow;
    border-bottom: solid 0.05rem yellow;
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
  background-color: rgba(0, 0, 0, 0.5);
  border: solid 0.05rem black;
  cursor: pointer;
  color: white;
  border-left: solid 0.05rem white;
  border-bottom: solid 0.05rem white;
  &:hover {
    border-left: solid 0.05rem yellow;
    border-bottom: solid 0.05rem yellow;
  }
`;
