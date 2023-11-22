import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;
export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
export const CopyWrightContainer = styled.div`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 80%;
  font-size: 3rem;
  background-color: rgba(0, 0, 0, 0);
  z-index: 3;
`;
