import { styled } from "styled-components";

export const StyledSection = styled("section")`
  h1 {
    font-family: "Agdasima", sans-serif;
    font-size: 40px;
    letter-spacing: 2px;
  }
  h3 {
    font-family: "Agdasima", sans-serif;
    letter-spacing: 2px;
  }
  .user-icon {
    border-radius: 50%;
    border: 1px solid;
    height: 40px;
    width: 40px;

    i {
      font-size: 24px;
    }
  }
  .content_container {
    padding: 0 0 24px 24px;
  }
  .card-container {
    overflow-x: scroll;
  }
`;
