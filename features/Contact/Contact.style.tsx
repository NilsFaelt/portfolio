import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1497005367839-6e852de72767?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"); /* Add your background image URL */
  background-size: cover; /* Adjust the image size */
  background-position: center; /* Adjust the image position */
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  padding-top: 3rem;
  padding: 1rem;
  margin-top: 3rem;
  width: clamp(18rem, 70%, 50rem);
  border-bottom: 0.05rem solid black;
  border-right: 0.05rem solid black;
`;
export const StyledHref = styled.a`
  color: black;
  cursor: pointer;
  text-decoration: underline;
`;
