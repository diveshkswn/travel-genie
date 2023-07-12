import { styled } from "styled-components";

export const AuthContainerDiv = styled("div")<{ $minHeight?: number }>(
  ({ theme, $minHeight }) => `
    height : ${$minHeight}px;
    color : ${theme.colors.secondaryColor};
    background : ${theme.containerBg};
    padding : 20px;
    border-radius : 20px;
    margin : 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
);
