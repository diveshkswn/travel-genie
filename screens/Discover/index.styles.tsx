import { styled } from "styled-components";

export const StyledSection = styled("section")`
  padding: 32px;
  .user-icon {
    border-radius: 50%;
    border: 1px solid;
    height: 40px;
    width: 40px;

    i {
      font-size: 24px;
    }

  }
  .card-container {
    overflow-x: scroll;
  }
`;
