import { styled } from "styled-components";

export const StyledButton = styled("button")`
  width: fit-content;
  padding: 16px 32px;
  border: none;
  outline: none;
  border-radius: 16px;
  font-size: 22px;
  color: white !important;
  font-family: "Montserrat", sans-serif;

  &.save-btn {
    margin: 50px auto;
  }
`;
