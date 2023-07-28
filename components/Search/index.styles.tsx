import { styled } from "styled-components";

export const StyledSearch = styled("div")(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  input {
    padding: 8px;
    border: none;
    border-radius: 8px;
    &::placeholder {
      color : ${theme.colors.secondaryColor};
    }
    &:focus-visible {
      outline: 1px solid ${theme.colors.secondaryColor}
    }
  }
`
);
