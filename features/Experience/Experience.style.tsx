import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100%;
  min-height: 100vh;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-image: url("https://images.unsplash.com/photo-1646549101199-4f96e60584e7?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"); /* Add your background image URL */
  background-size: cover; /* Adjust the image size */
  background-position: center; /* Adjust the image position */
`;
export const DisplayExperiencesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 3rem;
  padding: 2rem;

  margin-top: 3rem;
  gap: 1rem;
  width: clamp(20rem, 80%, 80%);
  border-bottom: 0.05rem solid white;
  border-right: 0.05rem solid white;
  @media (max-width: 497px) {
    width: 17rem;
  }
`;
