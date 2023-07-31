import { styled } from "styled-components";

export const StyledSearch = styled("div")(
  ({ theme }) => `
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 16px;

  input {
    padding: 8px;
    border: none;
    border-radius: 8px;
    color: ${theme.colors.primaryColor};
    &::placeholder {
      color : ${theme.colors.secondaryColor};
    }
    &:focus-visible {
      outline: 1px solid ${theme.colors.secondaryColor}
    }
  }

  button {
    margin-left: 16px;
  }
`
);
