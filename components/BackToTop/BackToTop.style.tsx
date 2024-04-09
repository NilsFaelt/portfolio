import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: sticky;
  bottom: 1rem;
  left: calc(100% - 3rem);
  width: 2.5rem;
  height: 2.5rem;
  padding-top: 0.5rem;
  background-color: rgba(255, 255, 255, 0.9);
  border: solid 0.05rem black;
  cursor: pointer;
  color: black;
  box-sizing: border-box;
  /* border-right: solid 0.05rem white;
  border-top: solid 0.05rem white; */
  /* &:hover {
    border-right: solid 0.05rem yellow;
    border-top: solid 0.05rem yellow;
  } */
`;
