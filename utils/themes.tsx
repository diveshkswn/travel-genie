import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#889c9e",
  border: "#5f767b",
  background: "#5f767b",
  containerBg: "#ffffff",
  colors: {
    primaryColor: "#ffffff",
    secondaryColor: "#d2d5d8",
  },
};

export const darkTheme = {
  body: "#022a54",
  border: "#021c38",
  background: "#021c38",
  containerBg: "#ffffff",
  colors: {
    primaryColor: "#ffffff",
    secondaryColor: "#517d9e",
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.colors.primaryColor};
    height: 100vh;

    .secondary {
      background: ${({ theme }) => theme.background} !important;
      color: ${({ theme }) => theme.colors.secondaryColor} !important;
    }

    .secondary-bg {
      background: ${({ theme }) => theme.background} !important;
    }
    
    .secondary-fg {
      color: ${({ theme }) => theme.colors.secondaryColor} !important;
    }
  }
`;
