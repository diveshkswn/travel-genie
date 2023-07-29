import { styled } from "styled-components";

export const StyledContainer = styled("section")(
  ({ theme }) => `
    padding: 20px;
    border-radius: 10px; 
    display: flex;
    justify-content: center;
    background: ${theme.background};
    flex-wrap: wrap;
`
);

export const ActivityContainer = styled("section")`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .header {
    padding: 20px;
    text-align: center;
  }

  h1 {
    font-family: "Agdasima", sans-serif;
    font-size: 40px;
    letter-spacing: 2px;
  }
`;
