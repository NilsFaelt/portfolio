import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  min-height: 100vh;
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  box-sizing: border-box;
  padding-left: 5rem;
  padding-right: 5rem;
  background-size: cover;
  background-position: center;
`;
export const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-size: 3rem;
  background-color: rgba(0, 0, 0, 0);
`;
export const CopyWrightContainer = styled.div`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  background-color: rgba(0, 0, 0, 0);
  z-index: 3;
`;
export const NavContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  background-color: rgba(0, 0, 0, 0);
  z-index: 3;
`;
