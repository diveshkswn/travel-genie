import { styled } from "styled-components";

export const StyledSearch = styled("div")(
  ({ theme }) => `
  input {
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 8px;
    margin-bottom: 16px;
    &::placeholder {
      color : ${theme.colors.secondaryColor};
    }
    &:focus-visible {
      outline: 1px solid ${theme.colors.secondaryColor}
    }
  }
`
);
