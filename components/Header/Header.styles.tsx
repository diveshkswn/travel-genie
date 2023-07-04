import { styled } from "styled-components";

export const HeaderSection = styled("section")<{ minHeight?: number }>(
  ({ minHeight, theme }) => `
    display : flex;
    height : 50px;
    align-items : center;
    justify-content : center;
    background-color : ${theme.colors.primaryBgColor};
    color : ${theme.colors.primaryFgColor};
`
);
