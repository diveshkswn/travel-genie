import { styled } from "styled-components";

export const StyledSection = styled("section")`
  position: relative;
  .user-icon {
    border-radius: 50%;
    border: 1px solid;
    height: 40px;
    width: 40px;

    i {
      font-size: 24px;
    }
  }
  
  .btn {
    position: absolute;
    bottom: 24px;
  }
`;
