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
  
  button {
    position: absolute;
    bottom: 24px;
    width: fit-content;
    padding: 16px 32px;
    border: none;
    outline: none;
    border-radius: 16px;
    font-size: 18px;
    color:white !important;
  }
`;
