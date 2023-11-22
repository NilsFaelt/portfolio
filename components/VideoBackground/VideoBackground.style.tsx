import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
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
