import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: white;
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1454117096348-e4abbeba002c?q=80&w=2602&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"); /* Add your background image URL */
  background-size: cover;
  background-position: center;
`;

export const NavClickContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 22rem;
  margin-top: 0rem;
  @media (max-width: 497px) {
    width: 20rem;
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
  background-color: black;
  border: solid 0.05rem black;
  cursor: pointer;
  color: white;

  background-color: rgba(0, 0, 0, 0.5);
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

  &:hover {
    border-left: solid 0.05rem yellow;
    border-bottom: solid 0.05rem yellow;
  }
`;
