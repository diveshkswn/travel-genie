import { styled } from "styled-components";

export const FacebookAuthContainer = styled("div")<{ $minHeight: number }>(
  ({ theme, $minHeight }) => `
    height : ${$minHeight}px;
    color : ${theme.colors.secondaryColor};
    background : ${theme.containerBg};
    padding : 20px;
    border-radius : 20px;
    margin : 20px;
`
);
